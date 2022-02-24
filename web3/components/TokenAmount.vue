<script setup lang="ts">
import { computed } from "vue"
import { BigNumber } from "ethers"
import Decimal from "decimal.js-light"
import { Token } from "../classes/TokenManager"

const props = defineProps<{ token?: Token; amount?: BigNumber }>()
const display = computed(() => {
    const decimal = props.amount?.toDec(props.token?.decimals || 0) || new Decimal(0)
    if (decimal.gt(10000)) {
        return decimal.toFixed(0)
    } else {
        return decimal.toSignificantDigits(4).toString()
    }
})
</script>

<template>
    {{ display }}<span v-if="token?.symbol"> {{ " " + token?.symbol }}</span>
</template>
