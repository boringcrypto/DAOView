<script setup lang="ts">
import { inject, ref, computed } from "vue"
import { connectors } from "../classes/Web3"
import Data, { FactoryInfo, updateFactory } from "../data"
import SmartAddress from "../components/SmartAddress.vue"
import { IERC20__factory, IUniswapV2Pair__factory, IWethMaker__factory } from "../../typechain-types"
import { BigNumber } from "ethers"
import { useRoute } from "vue-router"
import { Multicall } from "../classes/NetworkConnector"
import { SLPToken, tokens } from "../classes/TokenManager"
import { CoinGecko } from "../classes/CoinGeckoAPI"
import TokenAmount from "../components/TokenAmount.vue"
import Decimal from "decimal.js-light"
import USDAmount from "../components/USDAmount.vue"
import ExplorerAddress from "../components/ExplorerAddress.vue"

const app = inject("app") as typeof Data
const route = useRoute()
const connector = new connectors[parseInt(route.params.network as string)]()
const address = route.params.address as string
const maker = app.wethMakers.filter((f) => f.address === address && f.network === connector.chainId)[0]

const contract = IWethMaker__factory.connect(address, connector.provider)
const owner = await contract.owner()
const factory = app.factories.filter((f) => f.network === maker.network)[0] as FactoryInfo
const total = ref(new Decimal(0))
const sorted = computed(() => {
    return maker.account.tokens.sort((a, b) => b.value(maker.account).sub(a.value(maker.account)).toNumber())
})
const selectedTokens = ref([])
const selectedSLPs = ref([])

async function load() {
    if (!factory.pairs) {
        console.log("Getting factory info")
        await updateFactory(factory)
    }

    if (factory.pairs) {
        maker.account.tokens = []

        const multi = new Multicall(connector)
        const IUniV2Pair = IUniswapV2Pair__factory.createInterface()
        const IERC20 = IERC20__factory.createInterface()

        console.log("Getting SLP balances")
        factory.pairs.forEach((pair) => {
            const token = tokens.get(maker.network, pair, SLPToken)
            multi.queue(
                IERC20__factory.connect(token.address, connector.provider).populateTransaction.balanceOf(maker.address),
                IERC20,
                (result) => {
                    const balance = result as BigNumber
                    if (!balance.isZero()) {
                        maker.account.tokens.push(token)
                        maker.account.balances[token.address] = balance
                    }
                }
            )
        })
        await multi.call(100)

        await tokens.loadInfo(maker.account.tokens)
        await tokens.loadSLPInfo(maker.account.tokens)

        console.log("Getting token balances")
        Object.values(tokens.tokens[maker.network] || [])
            .filter((token) => token.type === "Token")
            .forEach((token) => {
                multi.queue(
                    IERC20__factory.connect(token.address, connector.provider).populateTransaction.balanceOf(maker.address),
                    IERC20,
                    (result) => {
                        const balance = result as BigNumber
                        if (!balance.isZero()) {
                            maker.account.tokens.push(token)
                            maker.account.balances[token.address] = balance
                        }
                    }
                )
            })
        await multi.call(100)

        console.log("Loading tokens")
        await tokens.loadInfo(
            maker.account.SLPTokens.map((token) => token.token0!).concat(maker.account.SLPTokens.map((token) => token.token1!))
        )

        console.log("Loading coinGecko")
        await new CoinGecko().getPrices(connector, Object.values(tokens.tokens[connector.chainId]!))

        total.value = maker.account.tokens.map((t) => t.value(maker.account)).reduce((a, b) => a.add(b), new Decimal(0))
    }
}

load()
</script>

<template>
    <div class="row">
        <div class="col-10 mx-auto">
            <h2>
                {{ connector.chainName }} WethMaker <small><USDAmount :amount="total" /></small>
            </h2>
            Address: <ExplorerAddress :network="maker.network" :address="address" /><br />
            Owner: <SmartAddress :address="owner" /><br />
            Factory: {{ factory.address }}<br />

            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Tokens</th>
                        <th scope="col">Pending</th>
                        <th scope="col">Value</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="token in sorted">
                        <template v-if="token.type === 'Token'">
                            <td>{{ token.symbol }}</td>
                            <td>
                                <TokenAmount :token="token" :amount="token.balance(maker.account)" />
                            </td>
                            <td>
                                <USDAmount :amount="token.value(maker.account)" />
                            </td>
                        </template>
                        <template v-if="token instanceof SLPToken">
                            <td>{{ token.symbol }}</td>
                            <td>
                                <TokenAmount :token="token.token0" :amount="token.balance0(maker.account)" /> -
                                <TokenAmount :token="token.token1" :amount="token.balance1(maker.account)" />
                            </td>
                            <td>
                                <USDAmount :amount="token.value(maker.account)" />
                            </td>
                            <td>
                                <b-form-checkbox v-model="selectedSLPs" :value="token.address" />
                            </td>
                        </template>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<style scoped></style>
