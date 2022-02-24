<script setup lang="ts">
import { inject } from "vue"
import Data, { MultiSig, RouterInfo, updateFactory, updateMultiSig, WethMakerInfo } from "../data"
import { connectors } from "../classes/Web3"
import SmartAddress from "../components/SmartAddress.vue"
import { GnosisSafe } from "../classes/GnosisSafe"
import { IUniswapV2Router01__factory, IWethMaker__factory } from "../../typechain-types"
import ExplorerAddress from "../components/ExplorerAddress.vue"

const app = inject("app") as typeof Data

app.factories.map((factory) => updateFactory(factory))
</script>

<template>
    <div class="row mt-3">
        <div class="col-10 mx-auto">
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
        </div>
    </div>
</template>

<style scoped></style>
