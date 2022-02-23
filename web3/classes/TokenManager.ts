import { Network } from "./Network"
import { reactive } from "vue"
import { ethers } from "ethers"
import Web3 from "./Web3"
import { connectors } from "./NetworkConnectors"
import { IERC20__factory } from "../../typechain-types"
import { Multicall } from "./NetworkConnector"

export class Token {
    network: Network
    address: string
    loaded = false

    name?: string
    symbol?: string
    decimals?: number

    price?: number

    constructor(network: Network, address: string) {
        this.network = network
        this.address = address
    }
}

class TokenManager {
    tokenList: Token[] = reactive([])
    tokens: { [network in Network]?: { [address: string]: Token } } = reactive({})
    web3?: Web3

    get(network: Network, address: string) {
        address = ethers.utils.getAddress(address)
        if (!this.tokens[network]) {
            this.tokens[network] = {}
        }
        if (!this.tokens[network]![address]) {
            const token = new Token(network, address)
            this.tokenList.push(token)
            this.tokens[network]![address] = token
        }
        return this.tokens[network]![address]
    }

    async load(toLoad?: Token[]) {
        if (toLoad) {
            toLoad = [...new Set(toLoad)]
        } else {
            toLoad = this.tokenList.filter(token => !token.loaded)
        }
        const loadsByNetwork: { [network in Network]?: Token[] } = {}
        toLoad.forEach(token => {
            if (!loadsByNetwork[token.network]) {
                loadsByNetwork[token.network] = []
            }
            loadsByNetwork[token.network]?.push(token)
        })
        for(const tokensToLoad of Object.values(loadsByNetwork).filter(t => t.length)) {
            const connector = new connectors[tokensToLoad[0].network]()
            const call = new Multicall(connector)

            for (const token of tokensToLoad) {
                const contract = IERC20__factory.connect(token.address, connector.provider)
                call.queue(contract.populateTransaction.name(), { field: "name", token: token })
                call.queue(contract.populateTransaction.symbol(), { field: "symbol", token: token })
                call.queue(contract.populateTransaction.decimals(), { field: "decimals", token: token })
            }

            for(const item of await call.callAndDecode(100, IERC20__factory.createInterface())) {
                item.info.token[item.info.field] = item.result[0]
            }

            for(const token of tokensToLoad) { token.loaded = true }
        }
        console.log(this.tokens)
    }
}

const tokens = new TokenManager()

export {
    tokens
}