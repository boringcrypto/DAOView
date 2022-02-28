<script setup lang="ts">
import { inject } from "vue"
import Data, { updateMasterChef, updateMasterChefV2, updateMiniChef } from "../data"
import { connectors } from "../classes/Web3"
import SmartAddress from "../components/SmartAddress.vue"
import { GnosisSafe } from "../classes/GnosisSafe"
import { IUniswapV2Router01__factory, IWethMaker__factory } from "../../typechain-types"
import ExplorerAddress from "../components/ExplorerAddress.vue"

const app = inject("app") as typeof Data

app.masterchefs.map((chef) => updateMasterChef(chef))
app.masterchefsV2.map((chef) => updateMasterChefV2(chef))
app.minichefs.map((chef) => updateMiniChef(chef))
</script>

<template>
    <div class="row mt-3">
        <div class="col-10 mx-auto">
            <h2>Chefs</h2>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Chef</th>
                        <th scope="col">Address</th>
                        <th scope="col">Owner</th>
                        <th scope="col">Dev (treasury)</th>
                        <th scope="col">Pools</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="chef in app.masterchefs">
                        <td>
                            <router-link :to="'/chef/' + chef.network + '/' + chef.address">
                                {{ connectors[chef.network].chainName }} MasterChef
                            </router-link>
                        </td>
                        <td>
                            <ExplorerAddress :network="chef.network" :address="chef.address" />
                        </td>
                        <td>
                            <ExplorerAddress :network="chef.network" :address="chef.owner">
                                <SmartAddress :address="chef.owner" />
                            </ExplorerAddress>
                        </td>
                        <td>
                            <ExplorerAddress :network="chef.network" :address="chef.devaddr">
                                <SmartAddress :address="chef.devaddr" />
                            </ExplorerAddress>
                        </td>
                        <td>
                            {{ chef.poolLength }}
                        </td>
                    </tr>
                    <tr v-for="chef in app.masterchefsV2">
                        <td>
                            <router-link :to="'/chef/' + chef.network + '/' + chef.address">
                                {{ connectors[chef.network].chainName }} MasterChefV2
                            </router-link>
                        </td>
                        <td>
                            <ExplorerAddress :network="chef.network" :address="chef.address" />
                        </td>
                        <td>
                            <ExplorerAddress :network="chef.network" :address="chef.owner">
                                <SmartAddress :address="chef.owner" />
                            </ExplorerAddress>
                        </td>
                        <td>N/A</td>
                        <td>
                            {{ chef.poolLength }}
                        </td>
                    </tr>
                    <tr v-for="chef in app.minichefs">
                        <td>
                            <router-link :to="'/chef/' + chef.network + '/' + chef.address">
                                {{ connectors[chef.network].chainName }} MiniChef
                            </router-link>
                        </td>
                        <td>
                            <ExplorerAddress :network="chef.network" :address="chef.address" />
                        </td>
                        <td>
                            <ExplorerAddress :network="chef.network" :address="chef.owner">
                                <SmartAddress :address="chef.owner" />
                            </ExplorerAddress>
                        </td>
                        <td>N/A</td>
                        <td>
                            {{ chef.poolLength }}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<style scoped></style>
