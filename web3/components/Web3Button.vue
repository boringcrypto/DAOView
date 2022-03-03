<script setup lang="ts">
import { inject } from "vue"
import { connectors } from "../classes/NetworkConnectors"
import Data from "../data"

const props = defineProps<{
    network?: number
}>()
const app = inject("app") as typeof Data
</script>

<template>
    <b-button>
        <span v-if="!app.web3.address" @click="app.web3.connect">Connect</span>
        <span v-else-if="network && app.web3.connector?.chainId !== network" @click="app.web3.switch(props.network!)">Switch</span>
        <slot v-else></slot>
    </b-button>
</template>
