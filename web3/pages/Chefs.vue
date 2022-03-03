<script setup lang="ts">
import { inject, computed } from "vue"
import Data, { updateMasterChef, updateMasterChefV2, updateMiniChef } from "../data"
import { connectors } from "../classes/Web3"
import SmartAddress from "../components/SmartAddress.vue"
import ExplorerAddress from "../components/ExplorerAddress.vue"
import { tokens } from "../classes/TokenManager"
import { Network } from "../classes/Network"
import TokenAmount from "../components/TokenAmount.vue"

const app = inject("app") as typeof Data
const sushi = tokens.get(Network.ETHEREUM, "0x6B3595068778DD592e39A122f4f5a5cF09C90fE2")
app.pools.splice(0, app.pools.length)
const sorted = computed(() => app.pools.sort((a, b) => (b.sushiPerDay?.sub(a.sushiPerDay || 0).isNegative() ? -1 : 1)))

async function load() {
    await Promise.all([
        ...app.masterchefs.map((chef) => updateMasterChef(chef)),
        ...app.masterchefsV2.map((chef) => updateMasterChefV2(chef)),
        ...app.minichefs.map((chef) => updateMiniChef(chef)),
    ])
    console.log("Loaded")
    await tokens.loadInfo()
}
load()
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

            <h2>Pools</h2>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Chef</th>
                        <th scope="col">Asset</th>
                        <th scope="col">AllocPoint</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="pool in sorted">
                        <td>
                            {{ connectors[pool.chef.network].chainName }}
                        </td>
                        <td>
                            {{ pool.poolId }}
                        </td>
                        <td>
                            <ExplorerAddress :network="pool.chef.network" :address="pool.token?.address">
                                {{ pool.token?.symbol }}
                            </ExplorerAddress>
                        </td>
                        <td>
                            <TokenAmount :token="sushi" :amount="pool.sushiPerDay" />
                        </td>
                        <td>{{ pool.allocPoint }} / {{ pool.chef.totalAllocPoint }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<style scoped></style>
