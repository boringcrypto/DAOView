<script setup lang="ts">
import { inject, ref, computed } from "vue"
import { connectors } from "../classes/Web3"
import Data, { FactoryInfo, updateFactory } from "../data"
import SmartAddress from "../components/SmartAddress.vue"
import { IERC20__factory, IUniswapV2Pair__factory, IWethMaker__factory } from "../../typechain-types"
import { BigNumber } from "ethers"
import { useRoute } from "vue-router"
import { SLPToken, tokens } from "../classes/TokenManager"
import { CoinGecko } from "../classes/CoinGeckoAPI"
import TokenAmount from "../components/TokenAmount.vue"
import Decimal from "decimal.js-light"
import USDAmount from "../components/USDAmount.vue"
import ExplorerAddress from "../components/ExplorerAddress.vue"

const app = inject("app") as typeof Data
const route = useRoute()
const connector = new connectors[parseInt(route.params.network as string)]()
const address = route.params.address as string

async function load() {}

load()
</script>

<template>
    <div class="row">
        <div class="col-10 mx-auto">
            <h2>{{ connector.chainName }} BentoBox</h2>
        </div>
    </div>
</template>

<style scoped></style>
