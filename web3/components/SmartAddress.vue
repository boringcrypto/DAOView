<script setup lang="ts">
import { computed } from "vue"
import { known_addresses } from "../data"

const props = defineProps<{ address?: string }>()
const display = computed(() => (props.address ? known_addresses[props.address] || props.address : "<empty>"))
</script>

<template>
    {{ display }}
</template>
