import { Network } from "./Network"
import { reactive, computed, ComputedRef } from "vue"
import { ethers, BigNumber } from "ethers"
import Web3 from "./Web3"
import { connectors } from "./NetworkConnectors"
import { IERC20__factory, IUniswapV2Pair__factory } from "./types"
import { NetworkConnector } from "./NetworkConnector"
import Decimal from "decimal.js-light"
import { SLPToken, Token, tokens } from "./TokenManager"

export class Account {
    address: string
    balances: { [tokenAddress: string]: BigNumber } = {}
    tokens: Token[] = []

    constructor(address: string) {
        this.address = address
    }

    balance(token: Token) {
        return this.balances[token.address] || BigNumber.from(0)
    }

    value(token: Token) {
        return token.value(this.balances[token.address])
    }

    get SLPTokens(): Token[] {
        return this.tokens.filter((token) => token.details instanceof SLPToken)
    }

    async loadNetworkBalances(network: Network) {
        console.log("Getting token balances", network, tokens.tokens[network])
        const connector = new connectors[network]()
        const IERC20 = IERC20__factory.createInterface()
        Object.values(tokens.tokens[network] || []).forEach((token) => {
            connector.queue(
                IERC20__factory.connect(token.address, connector.provider).populateTransaction.balanceOf(this.address),
                IERC20,
                (result) => {
                    const balance = result as BigNumber
                    if (!balance.isZero() && !this.balances[token.address]) {
                        this.tokens.push(token)
                        this.balances[token.address] = balance
                    }
                }
            )
        })
        await connector.call(100)
    }
}
