<script setup lang="ts">
import { inject } from "vue"
import Data, { MultiSig, RouterInfo, updateFactory, WethMakerInfo } from "../data"
import { connectors } from "../classes/Web3"
import SmartAddress from "../components/SmartAddress.vue"
import { GnosisSafe } from "../classes/GnosisSafe"
import { IUniswapV2Router01__factory, IWethMaker__factory } from "../../typechain-types"
import ExplorerAddress from "../components/ExplorerAddress.vue"

const app = inject("app") as typeof Data

const updateWallet = async (wallet: MultiSig) => {
    const connector = new connectors[wallet.network]()

    const safe = new GnosisSafe(wallet.network, wallet.address)
    wallet.owners = await safe.getOwners()
    wallet.threshold = await safe.getThreshold()
    wallet.tokens = await safe.getTokenBalances()

    wallet.nativeBalance = await connector.provider.getBalance(wallet.address)
}

const updateRouter = async (router: RouterInfo) => {
    const connector = new connectors[router.network]()

    const contract = IUniswapV2Router01__factory.connect(router.address, connector.provider)
    router.factory = await contract.factory()
}

const updateWethMaker = async (maker: WethMakerInfo) => {
    const connector = new connectors[maker.network]()

    const contract = IWethMaker__factory.connect(maker.address, connector.provider)
    maker.owner = await contract.owner()
}

async function updateAll() {
    await Promise.all(app.wallets.map((wallet) => updateWallet(wallet)))
    await Promise.all(app.routers.map((router) => updateRouter(router)))
    await Promise.all(app.factories.map((factory) => updateFactory(factory)))
    await Promise.all(app.wethMakers.map((maker) => updateWethMaker(maker)))
}

updateAll()
</script>

<template>
    <div class="row">
        <div class="col-10 mx-auto">
            <h2>Multi Sigs</h2>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Wallet</th>
                        <th scope="col">Address</th>
                        <th scope="col">Threshold</th>
                        <th scope="col">Signers</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="wallet in app.wallets">
                        <td>{{ connectors[wallet.network].chainName }} {{ wallet.name }}</td>
                        <td>
                            <a :href="'#'" target="_blank">
                                {{ wallet.address }}
                            </a>
                        </td>
                        <td>{{ wallet.threshold }} of {{ wallet.owners?.length || 0 }}</td>
                        <td>
                            <span v-for="owner in wallet.owners">
                                <span
                                    :class="
                                        [
                                            '0x3027a0c4E35272c0707dE2651A0638c3dF1c37AC',
                                            '0x4bb4c1B0745ef7B4642fEECcd0740deC417ca0a0',
                                            '0xFBb3a85603C398Ff22435DD40873EC190134e1f6',
                                            '0xb2701351a2c1c6E30BFA2699d25f85a5100e39D3',
                                            '0x6b83270726342E02a11E755e8CC35275712122eC',
                                            '0x8620D3edd67Ed411CCb314F3CFFF5a27A7C74A74',
                                        ].includes(owner)
                                            ? ''
                                            : 'text-danger'
                                    "
                                    ><SmartAddress :address="owner" />&nbsp;
                                </span>
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>

            <h2>Routers</h2>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Network</th>
                        <th scope="col">Address</th>
                        <th scope="col">Factory</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="router in app.routers">
                        <td>
                            {{ new connectors[router.network]().chainName }}
                        </td>
                        <td>
                            {{ router.address }}
                        </td>
                        <td>
                            <SmartAddress :address="router.factory" />
                        </td>
                    </tr>
                </tbody>
            </table>

            <h2>Factories</h2>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Network</th>
                        <th scope="col">Pairs</th>
                        <th scope="col">Fees go to</th>
                        <th scope="col">Admin (can redirect fees)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="factory in app.factories">
                        <td>
                            <ExplorerAddress :network="factory.network" :address="factory.address">{{
                                connectors[factory.network].chainName
                            }}</ExplorerAddress>
                        </td>
                        <td>
                            {{ factory.pairCount }}
                        </td>
                        <td>
                            <SmartAddress :address="factory.feeTo" />
                        </td>
                        <td>
                            <SmartAddress :address="factory.feeToSetter" />
                        </td>
                    </tr>
                </tbody>
            </table>

            <h2>WethMakers</h2>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Network</th>
                        <th scope="col">Address</th>
                        <th scope="col">Admin</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="maker in app.wethMakers">
                        <td>
                            <router-link :to="'/wethmaker/' + maker.network + '/' + maker.address">
                                {{ connectors[maker.network].chainName }}
                            </router-link>
                        </td>
                        <td>
                            <ExplorerAddress :network="maker.network" :address="maker.address">
                                {{ maker.address }}
                            </ExplorerAddress>
                        </td>
                        <td>
                            <SmartAddress :address="maker.owner" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<style scoped></style>
