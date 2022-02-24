<script setup lang="ts">
import { inject, ref } from "vue"
import { connectors } from "../classes/Web3"
import Data, { FactoryInfo, updateFactory, WethMakerTokenInfo } from "../data"
import SmartAddress from "../components/SmartAddress.vue"
import { IERC20__factory, IUniswapV2Pair__factory, IWethMaker__factory } from "../../typechain-types"
import { PopulatedTransaction, BigNumber } from "ethers"
import { useRoute } from "vue-router"
import { Multicall } from "../classes/NetworkConnector"
import { tokens } from "../classes/TokenManager"
import { CoinGecko } from "../classes/CoinGeckoAPI"
import TokenAmount from "../components/TokenAmount.vue"
import Decimal from "decimal.js-light"
import USDAmount from "../components/USDAmount.vue"

const app = inject("app") as typeof Data
const route = useRoute()
const connector = new connectors[parseInt(route.params.network as string)]()
const address = route.params.address as string
const maker = app.wethMakers.filter((f) => f.address === address && f.network === connector.chainId)[0]

const contract = IWethMaker__factory.connect(address, connector.provider)
const owner = await contract.owner()
const factory = app.factories.filter((f) => f.network === maker.network)[0] as FactoryInfo
const total = ref(new Decimal(0))

async function load() {
    if (!factory.pairs) {
        console.log("Getting factory info")
        await updateFactory(factory)
    }

    if (factory.pairs) {
        maker.tokens = []
        factory.pairs.forEach((pair) => maker.tokens!.push({ address: pair }))

        const multi = new Multicall(connector)
        const IUniV2Pair = IUniswapV2Pair__factory.createInterface()
        const IERC20 = IERC20__factory.createInterface()

        console.log("Getting balances")
        maker.tokens.forEach((token) => {
            multi.queue(
                IERC20__factory.connect(token.address, connector.provider).populateTransaction.balanceOf(maker.address),
                IERC20,
                (result) => (token.balance = result)
            )
        })
        await multi.call(100)

        maker.tokens
            .filter((token) => !token.balance?.isZero())
            .forEach((token) => {
                multi.queue(
                    IUniswapV2Pair__factory.connect(token.address, connector.provider).populateTransaction.token0(),
                    IUniV2Pair,
                    (result) => (token.token0 = tokens.get(maker.network, result))
                )

                multi.queue(
                    IUniswapV2Pair__factory.connect(token.address, connector.provider).populateTransaction.token1(),
                    IUniV2Pair,
                    (result) => (token.token1 = tokens.get(maker.network, result))
                )

                multi.queue(
                    IUniswapV2Pair__factory.connect(token.address, connector.provider).populateTransaction.totalSupply(),
                    IUniV2Pair,
                    (result) => (token.totalSupply = result)
                )

                multi.queue(
                    IUniswapV2Pair__factory.connect(token.address, connector.provider).populateTransaction.getReserves(),
                    IUniV2Pair,
                    (result) => {
                        token.reserve0 = result.reserve0
                        token.reserve1 = result.reserve1
                    }
                )
            })
        await multi.call(100)

        console.log("Loading tokens")
        await tokens.loadInfo(
            maker.tokens
                .filter((t) => t.token0)
                .map((t) => t.token0!)
                .concat(maker.tokens.filter((t) => t.token1).map((t) => t.token1!))
        )

        console.log("Loading coinGecko")
        await new CoinGecko().getPrices(connector, Object.values(tokens.tokens[connector.chainId]!))

        maker.tokens.forEach((token) => {
            if (token.totalSupply && !token.totalSupply.isZero()) {
                token.value0 = token.reserve0
                    ?.mul(token.balance || 0)
                    .div(token.totalSupply || 1)
                    .toDec(token.token0?.decimals)
                    .mul(token.token0?.price || 0)
                token.value1 = token.reserve1
                    ?.mul(token.balance || 0)
                    .div(token.totalSupply || 1)
                    .toDec(token.token1?.decimals)
                    .mul(token.token1?.price || 0)
            }
            token.value = token.value0?.isZero()
                ? token.value1?.mul(2)
                : token.value1?.isZero()
                ? token.value0?.mul(2)
                : token.value0?.add(token.value1 || 0) || new Decimal(0)
        })

        maker.tokens.sort((a, b) => b.value?.sub(a.value || 0).toNumber() || 1)

        total.value = maker.tokens.map((t) => t.value || new Decimal(0)).reduce((a, b) => a.add(b), new Decimal(0))
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
            Address: {{ address }}<br />
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
                    <template v-for="token in maker.tokens">
                        <tr v-if="token.balance?.isZero() === false">
                            <td>{{ token.token0?.symbol }}-{{ token.token1?.symbol }}</td>
                            <td>
                                <TokenAmount :token="token.token0" :amount="token.reserve0?.mul(token.balance).div(token.totalSupply || 1)" /> -
                                <TokenAmount :token="token.token1" :amount="token.reserve1?.mul(token.balance).div(token.totalSupply || 1)" />
                            </td>
                            <td>
                                <USDAmount :amount="token.value" />
                            </td>
                        </tr>
                    </template>
                </tbody>
            </table>
        </div>
    </div>
</template>

<style scoped></style>
