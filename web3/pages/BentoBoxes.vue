<script setup lang="ts">
import { inject } from "vue"
import Data, { updateBentobox } from "../data"
import { connectors } from "../classes/Web3"
import SmartAddress from "../components/SmartAddress.vue"
import ExplorerAddress from "../components/ExplorerAddress.vue"

const app = inject("app") as typeof Data

app.bentoBoxes.map((box) => updateBentobox(box))
</script>

<template>
    <div class="row mt-3">
        <div class="col-10 mx-auto">
            <h2>BentoBoxes</h2>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Network</th>
                        <th scope="col">Address</th>
                        <th scope="col">Admin</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="box in app.bentoBoxes">
                        <td>
                            <router-link :to="'/bentobox/' + box.network + '/' + box.address">
                                {{ connectors[box.network].chainName }}
                            </router-link>
                        </td>
                        <td>
                            <ExplorerAddress :network="box.network" :address="box.address">
                                {{ box.address }}
                            </ExplorerAddress>
                        </td>
                        <td>
                            <ExplorerAddress :network="box.network" :address="box.owner">
                                <SmartAddress :address="box.owner" />
                            </ExplorerAddress>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<style scoped></style>
