<script setup lang="ts">
import { inject } from "vue"
import { connectors } from "../classes/Web3"
import Data from "../data"
import SmartAddress from "../components/SmartAddress.vue"
import { IGnosisSafe__factory } from "../../typechain-types"
import { useRoute } from "vue-router"
import { GnosisSafe } from "../classes/GnosisSafe"

const app = inject("app") as typeof Data
const route = useRoute()
const connector = new connectors[parseInt(route.params.network as string)]()
const address = route.params.address as string
const multisig = app.multisigs.filter((m) => m.address === address && m.network === connector.chainId)[0]
const contract = IGnosisSafe__factory.connect(address, connector.provider)
const gnosis = new GnosisSafe(connector.chainId, address)
const owners = await gnosis.getOwners()
const threshold = await gnosis.getThreshold()

async function load() {}

load()
</script>

<template>
    <div class="row">
        <div class="col-10 mx-auto">
            <h2>{{ connector.chainName }} {{ multisig.name }} MultiSig</h2>
            Address: {{ address }}<br />
            Owners:
            <span v-for="owner in multisig.owners">
                <span
                    :class="
                        [
                            '0x3027a0c4E35272c0707dE2651A0638c3dF1c37AC',
                            '0x4bb4c1B0745ef7B4642fEECcd0740deC417ca0a0',
                            '0xFBb3a85603C398Ff22435DD40873EC190134e1f6',
                            '0xb2701351a2c1c6E30BFA2699d25f85a5100e39D3',
                            '0x6b83270726342E02a11E755e8CC35275712122eC',
                            '0x8620D3edd67Ed411CCb314F3CFFF5a27A7C74A74',
                        ].includes(owner)
                            ? ''
                            : 'text-danger'
                    "
                    ><SmartAddress :address="owner" />&nbsp;
                </span> </span
            ><br />
            Threshold: {{ threshold }} of {{ owners.length }}<br />

            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Tokens</th>
                        <th scope="col">Pending</th>
                        <th scope="col">Value</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        </div>
    </div>
</template>

<style scoped></style>
