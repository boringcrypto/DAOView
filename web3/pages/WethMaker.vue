<script setup lang="ts">
import { inject, ref, computed, Ref } from "vue"
import { connectors } from "../classes/Web3"
import Data, { FactoryInfo, updateFactory } from "../data"
import SmartAddress from "../components/SmartAddress.vue"
import { IWethMaker__factory } from "../../typechain-types"
import { useRoute } from "vue-router"
import { SLPToken, Token, tokens } from "../classes/TokenManager"
import { CoinGecko } from "../classes/CoinGeckoAPI"
import TokenAmount from "../components/TokenAmount.vue"
import Decimal from "decimal.js-light"
import USDAmount from "../components/USDAmount.vue"
import ExplorerAddress from "../components/ExplorerAddress.vue"
import { GnosisTokenBalances } from "../classes/GnosisSafe"
import Web3Button from "../components/Web3Button.vue"

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
    return maker.account.tokens.sort((a, b) => maker.account.value(b).sub(maker.account.value(a)).toNumber())
})
const selectedSLPs: Ref<Token[]> = ref([])

async function withdraw(token: Token) {
    const amount = maker.account.balance(token)
    const contract = IWethMaker__factory.connect(maker.address, app.web3.provider!.getSigner())

    // Withdraw full balance of token to owner (should be multisig)
    try {
        const tx = await contract.withdraw(token.address, owner, amount)
        console.log(tx)
    } catch (e) {
        console.log(e)
    }
}

async function burn() {
    const contract = IWethMaker__factory.connect(maker.address, app.web3.gnosis!.getSigner())
    console.log(
        selectedSLPs.value.map((token) => token.address),
        selectedSLPs.value.map((token) => maker.account.balances[token.address].toString()),
        selectedSLPs.value.map((token) =>
            (token.details as SLPToken).balance0(maker.account.balances[token.address]).mul(98).div(100).toString()
        ),
        selectedSLPs.value.map((token) =>
            (token.details as SLPToken).balance1(maker.account.balances[token.address]).mul(98).div(100).toString()
        )
    )

    try {
        const tx = await contract.burnPairs(
            selectedSLPs.value.map((token) => token.address),
            selectedSLPs.value.map((token) => maker.account.balances[token.address]),
            selectedSLPs.value.map((token) => (token.details as SLPToken).balance0(maker.account.balances[token.address]).mul(98).div(100)), // Max 2% movement
            selectedSLPs.value.map((token) => (token.details as SLPToken).balance1(maker.account.balances[token.address]).mul(98).div(100))
        )
        console.log(tx)
    } catch (e) {
        console.log(e)
    }
}

async function load() {
    if (!factory.pairs) {
        console.log("Getting factory info")
        await updateFactory(factory)
    }

    console.log(maker, factory)

    if (factory.pairs) {
        maker.account.tokens = []

        console.log("Getting SLP balances")
        await maker.account.loadNetworkBalances(maker.network)
        await tokens.loadInfo(maker.account.tokens)
        await tokens.loadSLPInfo(maker.account.tokens)
        await maker.account.loadNetworkBalances(maker.network)

        console.log("Loading coinGecko")
        await new CoinGecko().getPrices(connector, Object.values(tokens.tokens[connector.chainId]!))

        total.value = maker.account.tokens.map((t) => maker.account.value(t)).reduce((a, b) => a.add(b), new Decimal(0))
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
                        <th scope="col">
                            <Web3Button v-if="selectedSLPs.length" @click="burn">Burn</Web3Button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="token in sorted">
                        <template v-if="token.type === 'ERC20'">
                            <td>{{ token.symbol }}</td>
                            <td>
                                <TokenAmount :token="token" :amount="maker.account.balance(token)" />
                            </td>
                            <td>
                                <USDAmount :amount="maker.account.value(token)" />
                            </td>
                            <td>
                                <Web3Button :network="maker.network" @click="withdraw(token)">Withdraw</Web3Button>
                            </td>
                        </template>
                        <template v-if="token.type === 'SLP'">
                            <td>{{ token.symbol }}</td>
                            <td>
                                <TokenAmount
                                    :token="(token.details as SLPToken).token0"
                                    :amount="(token.details as SLPToken).balance0(maker.account.balance(token))"
                                />
                                -
                                <TokenAmount
                                    :token="(token.details as SLPToken).token1"
                                    :amount="(token.details as SLPToken).balance1(maker.account.balance(token))"
                                />
                            </td>
                            <td>
                                <USDAmount :amount="maker.account.value(token)" />
                            </td>
                            <td>
                                <b-form-checkbox v-model="selectedSLPs" :value="token" />
                            </td>
                        </template>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<style scoped></style>
