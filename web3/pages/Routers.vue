<script setup lang="ts">
import { inject } from "vue"
import Data, { updateRouter } from "../data"
import { connectors } from "../classes/Web3"
import SmartAddress from "../components/SmartAddress.vue"
import ExplorerAddress from "../components/ExplorerAddress.vue"

const app = inject("app") as typeof Data

app.routers.map((router) => updateRouter(router))
</script>

<template>
    <div class="row mt-3">
        <div class="col-10 mx-auto">
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
                            {{ connectors[router.network].chainName }}
                        </td>
                        <td>
                            <ExplorerAddress :network="router.network" :address="router.address" />
                        </td>
                        <td>
                            <SmartAddress :address="router.factory" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<style scoped></style>
