<script setup lang="ts">
import { inject } from "vue"
import Data, { RouterInfo, updateFactory, WethMakerInfo } from "../data"
import { connectors } from "../classes/Web3"
import SmartAddress from "../components/SmartAddress.vue"
import { IUniswapV2Router01__factory, IWethMaker__factory } from "../../typechain-types"
import ExplorerAddress from "../components/ExplorerAddress.vue"

const app = inject("app") as typeof Data
</script>

<template>
    <div class="row mt-3">
        <div class="col-10 mx-auto"></div>
    </div>
</template>

<style scoped></style>
