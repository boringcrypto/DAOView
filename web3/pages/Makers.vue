<script setup lang="ts">
import { inject } from "vue"
import Data, { MultiSig, RouterInfo, updateFactory, updateMultiSig, updateWethMaker, WethMakerInfo } from "../data"
import { connectors } from "../classes/Web3"
import SmartAddress from "../components/SmartAddress.vue"
import { GnosisSafe } from "../classes/GnosisSafe"
import { IUniswapV2Router01__factory, IWethMaker__factory } from "../../typechain-types"
import ExplorerAddress from "../components/ExplorerAddress.vue"

const app = inject("app") as typeof Data

app.wethMakers.map((maker) => updateWethMaker(maker))
</script>

<template>
    <div class="row mt-3">
        <div class="col-10 mx-auto">
            <h2>Makers</h2>
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
