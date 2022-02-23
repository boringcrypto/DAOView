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

        async function filldata(
            callMaker: (balance: WethMakerTokenInfo) => Promise<PopulatedTransaction>,
            callback: (result: any) => void,
            batchSize: number = 250
        ) {
            ;(
                await new Multicall(
                    connector,
                    maker.tokens!.map((balance) => [callMaker(balance), balance])
                ).callAndDecode(batchSize, IUniswapV2Pair__factory.createInterface())
            ).forEach((result) => callback(result))
        }

        console.log("Getting balances")
        await filldata(
            (balance) => IERC20__factory.connect(balance.address, connector.provider).populateTransaction.balanceOf(maker.address),
            (result) => result.info.balance = result.result[0], 100
        )
        maker.tokens = maker.tokens.filter(token => !token.balance?.isZero())
        console.log("Getting token0")
        await filldata(
            (balance) => IUniswapV2Pair__factory.connect(balance.address, connector.provider).populateTransaction.token0(),
            (result) => {
                result.info.token0 = tokens.get(maker.network, result.result[0])
            }, 100
        )
        console.log("Getting token1")
        await filldata(
            (balance) => IUniswapV2Pair__factory.connect(balance.address, connector.provider).populateTransaction.token1(),
            (result) => {
                result.info.token1 = tokens.get(maker.network, result.result[0])
            }
        )
        console.log("Loading tokens")
        await tokens.load(maker.tokens.filter(t => t.token0).map(t => t.token0!).concat(maker.tokens.filter(t => t.token1).map(t => t.token1!)))

        console.log("Getting reserves")
        await filldata(
            (balance) => IUniswapV2Pair__factory.connect(balance.address, connector.provider).populateTransaction.getReserves(),
            (result) => {
                result.info.reserve0 = result.result.reserve0
                result.info.reserve1 = result.result.reserve1
            }
        )
        console.log("Getting totalSupply")
        await filldata(
            (balance) => IUniswapV2Pair__factory.connect(balance.address, connector.provider).populateTransaction.totalSupply(),
            (result) => {
                result.info.totalSupply = result.result[0]
            }
        )

        console.log("Loading coinGecko")
        await new CoinGecko().getPrices(connector, Object.values(tokens.tokens[connector.chainId]!))

        maker.tokens.forEach(token => {
            token.value0 = token.reserve0?.mul(token.balance || 0).div(token.totalSupply || 1).toDec(token.token0?.decimals).mul(token.token0?.price || 0)
            token.value1 = token.reserve1?.mul(token.balance || 0).div(token.totalSupply || 1).toDec(token.token1?.decimals).mul(token.token1?.price || 0)
            token.value = token.value0?.isZero()
                ? token.value1?.mul(2) 
                : token.value1?.isZero()
                    ? token.value0?.mul(2)
                    : token.value0?.add(token.value1!) || new Decimal(0)
        })

        maker.tokens.sort((a, b) => b.value?.sub(a.value || 0).toNumber() || 1)

        total.value = maker.tokens.map(t => t.value || new Decimal(0)).reduce((a, b) => a.add(b), new Decimal(0))
    }
}

load()
</script>

<template>
    <div class="row">
        <div class="col-10 mx-auto">
            <h2>{{ connector.chainName }} WethMaker <small>${{ total.todp(0).toString() }}</small></h2>
            Address: {{ address }}<br />
            Owner: <SmartAddress :address="owner" /><br />
            Factory: {{ factory.address }}<br>

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
                            <td>
                                {{ token.token0?.symbol }}-{{ token.token1?.symbol }}
                            </td>
                            <td>
                                <TokenAmount :token="token.token0" :amount="token.reserve0?.mul(token.balance).div(token.totalSupply || 1)" /> - 
                                <TokenAmount :token="token.token1" :amount="token.reserve1?.mul(token.balance).div(token.totalSupply || 1)" />
                            </td>
                            <td>
                                ${{ token.value?.todp(0).toString() }}
                            </td>
                        </tr>
                    </template>
                </tbody>
            </table>
        </div>
    </div>
</template>

<style scoped></style>
