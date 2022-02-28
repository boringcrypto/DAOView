import { Network } from "./Network"
import { reactive, computed, ComputedRef } from "vue"
import { ethers, BigNumber } from "ethers"
import Web3 from "./Web3"
import { connectors } from "./NetworkConnectors"
import { IERC20__factory, IUniswapV2Pair__factory } from "./types"
import { Multicall, NetworkConnector } from "./NetworkConnector"
import Decimal from "decimal.js-light"

export class Account {
    balances: { [tokenAddress: string]: BigNumber } = {}
    tokens: Token[] = []

    get SLPTokens(): SLPToken[] {
        return this.tokens.filter((token) => token instanceof SLPToken) as SLPToken[]
    }
}

export class Token {
    type = "Token"
    network: Network
    address: string
    loaded = false

    name: string
    _symbol: string
    decimals: number

    price: Decimal

    constructor(network: Network, address: string) {
        this.network = network
        this.address = address
        this.name = ""
        this._symbol = ""
        this.decimals = 0
        this.price = new Decimal(0)
    }

    get symbol() {
        return this._symbol
    }

    balance(account: Account) {
        return account.balances[this.address] || BigNumber.from(0)
    }

    value(account: Account) {
        if (this.price) {
            return this.balance(account).toDec(this.decimals).mul(this.price)
        } else {
            return new Decimal(0)
        }
    }
}

export class SLPToken extends Token {
    type = "SLPToken"
    token0?: Token
    token1?: Token
    totalSupply?: BigNumber
    reserve0?: BigNumber
    reserve1?: BigNumber

    constructor(network: Network, address: string) {
        super(network, address)
        this.name = "SushiSwap LP Token"
        this._symbol = "SLP"
        this.decimals = 18
    }

    get symbol() {
        return this.token0 && this.token1 ? this.token0.symbol + "-" + this.token1.symbol + " SLP" : this._symbol
    }

    balance0(account: Account) {
        if (this.token0 && this.totalSupply && !this.totalSupply.isZero() && account.balances[this.address] && this.reserve0) {
            return account.balances[this.address].mul(this.reserve0).div(this.totalSupply)
        } else {
            return BigNumber.from(0)
        }
    }

    balance1(account: Account) {
        if (this.token1 && this.totalSupply && !this.totalSupply.isZero() && account.balances[this.address] && this.reserve1) {
            return account.balances[this.address].mul(this.reserve1).div(this.totalSupply)
        } else {
            return BigNumber.from(0)
        }
    }

    value0(account: Account) {
        if (this.token0 && this.token0.price) {
            return this.balance0(account).toDec(this.token0.decimals).mul(this.token0.price)
        } else {
            return new Decimal(0)
        }
    }

    value1(account: Account) {
        if (this.token1 && this.token1.price) {
            return this.balance1(account).toDec(this.token1.decimals).mul(this.token1.price)
        } else {
            return new Decimal(0)
        }
    }

    value(account: Account) {
        return this.value0(account).isZero()
            ? this.value1(account).mul(2)
            : this.value1(account).isZero()
            ? this.value0(account).mul(2)
            : this.value0(account).add(this.value1(account))
    }
}

class TokenManager {
    tokenList: Token[] = reactive([])
    tokens: { [network in Network]?: { [address: string]: Token } } = reactive({})
    web3?: Web3

    constructor() {
        this.load()
    }

    get(network: Network, address: string, tokenClass?: typeof Token | typeof SLPToken) {
        address = ethers.utils.getAddress(address)
        if (!this.tokens[network]) {
            this.tokens[network] = {}
        }
        if (!this.tokens[network]![address]) {
            const token = new (tokenClass || Token)(network, address)
            this.tokenList.push(token)
            this.tokens[network]![address] = token
        }
        return this.tokens[network]![address]
    }

    async _handleToLoad(
        filter: (token: Token) => boolean,
        handle: (token: Token, connector: NetworkConnector, call: Multicall) => void,
        after?: (token: Token) => void,
        toLoad?: Token[]
    ) {
        if (toLoad) {
            toLoad = [...new Set(toLoad)]
        } else {
            toLoad = this.tokenList
        }
        toLoad = toLoad.filter(filter)
        const loadsByNetwork: { [network in Network]?: Token[] } = {}
        toLoad.forEach((token) => {
            if (!loadsByNetwork[token.network]) {
                loadsByNetwork[token.network] = []
            }
            loadsByNetwork[token.network]?.push(token)
        })
        for (const tokensToLoad of Object.values(loadsByNetwork).filter((t) => t.length)) {
            const connector = new connectors[tokensToLoad[0].network]()
            const call = new Multicall(connector)

            for (const token of tokensToLoad) {
                handle(token, connector, call)
            }

            await call.call(100)

            if (after) {
                for (const token of tokensToLoad) {
                    after(token)
                }
            }
        }
    }

    async loadInfo(toLoad?: Token[]) {
        await this._handleToLoad(
            (token) => !token.loaded,
            (token, connector, call) => {
                if (token instanceof SLPToken) {
                    const pair = IUniswapV2Pair__factory.connect(token.address, connector.provider)
                    call.queue(
                        pair.populateTransaction.token0(),
                        IUniswapV2Pair__factory.createInterface(),
                        (result) => (token.token0 = this.get(connector.chainId, result, Token))
                    )
                    call.queue(
                        pair.populateTransaction.token1(),
                        IUniswapV2Pair__factory.createInterface(),
                        (result) => (token.token1 = this.get(connector.chainId, result, Token))
                    )
                } else {
                    const contract = IERC20__factory.connect(token.address, connector.provider)
                    call.queue(contract.populateTransaction.name(), IERC20__factory.createInterface(), (result) => (token.name = result))
                    call.queue(contract.populateTransaction.symbol(), IERC20__factory.createInterface(), (result) => (token._symbol = result))
                    call.queue(contract.populateTransaction.decimals(), IERC20__factory.createInterface(), (result) => (token.decimals = result))
                }
            },
            (token) => (token.loaded = true),
            toLoad
        )

        this.save()
    }

    async loadSLPInfo(toLoad?: Token[]) {
        await this._handleToLoad(
            (token) => token instanceof SLPToken,
            (token, connector, call) => {
                const pair = IUniswapV2Pair__factory.connect(token.address, connector.provider)
                call.queue(pair.populateTransaction.getReserves(), IUniswapV2Pair__factory.createInterface(), (result) => {
                    ;(token as SLPToken).reserve0 = result.reserve0
                    ;(token as SLPToken).reserve1 = result.reserve1
                })
                call.queue(
                    pair.populateTransaction.totalSupply(),
                    IUniswapV2Pair__factory.createInterface(),
                    (result) => ((token as SLPToken).totalSupply = result)
                )
            },
            undefined,
            toLoad
        )
    }

    load() {
        const data = JSON.parse(localStorage.getItem("Tokens") || "[]")
        for (const token of data) {
            const t: Token | SLPToken = this.get(token.network, token.address, token.type === "SLPToken" ? SLPToken : Token)
            t.network = token.network
            t.address = token.address
            t.loaded = token.loaded

            if (token.type === "SLPToken") {
                ;(t as SLPToken).token0 = token.token0 ? this.get(token.network, token.token0, Token) : undefined
                ;(t as SLPToken).token1 = token.token1 ? this.get(token.network, token.token1, Token) : undefined
            } else {
                t.name = token.name
                t._symbol = token.symbol
                t.decimals = token.decimals
            }
        }
    }

    save() {
        localStorage.setItem(
            "Tokens",
            JSON.stringify(
                this.tokenList.map((token) => {
                    if (token instanceof SLPToken) {
                        return {
                            type: token.type,
                            network: token.network,
                            address: token.address,
                            loaded: token.loaded,

                            token0: token.token0?.address,
                            token1: token.token1?.address,
                        }
                    } else {
                        return {
                            type: token.type,
                            network: token.network,
                            address: token.address,
                            loaded: token.loaded,

                            name: token.name,
                            symbol: token.symbol,
                            decimals: token.decimals,
                        }
                    }
                })
            )
        )
    }
}

const tokens = new TokenManager()

export { tokens }
