<script setup lang="ts">
import { computed, useSlots } from "vue"
import { connectors } from "../classes/NetworkConnectors"

const props = defineProps<{
    address: string | undefined | null
    network: number | undefined | null
}>()
const connector = computed(() => (props.network ? connectors[props.network] : null))
const slots = useSlots()
</script>

<template>
    <a :href="connector?.blockExplorerUrls[0] + 'address/' + props.address" target="_blank">
        <slot v-if="slots.default"></slot>
        <span v-else>{{ address }}</span>
    </a>
</template>
