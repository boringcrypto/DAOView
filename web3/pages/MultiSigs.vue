<script setup lang="ts">
import { inject } from "vue"
import Data, { MultiSig, RouterInfo, updateFactory, updateMultiSig, WethMakerInfo } from "../data"
import { connectors } from "../classes/Web3"
import SmartAddress from "../components/SmartAddress.vue"
import { GnosisSafe } from "../classes/GnosisSafe"
import { IUniswapV2Router01__factory, IWethMaker__factory } from "../../typechain-types"

const app = inject("app") as typeof Data

app.multisigs.map((wallet) => updateMultiSig(wallet as MultiSig))
</script>

<template>
    <div class="row mt-3">
        <div class="col-10 mx-auto">
            <h2>Multi Sigs</h2>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Wallet</th>
                        <th scope="col">Address</th>
                        <th scope="col">Threshold</th>
                        <th scope="col">Signers</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="wallet in app.multisigs">
                        <td>
                            <router-link :to="'/multisig/' + wallet.network + '/' + wallet.address">
                                {{ connectors[wallet.network].chainName }} {{ wallet.name }}
                            </router-link>
                        </td>
                        <td>
                            <a :href="wallet.safe?.transactionHistoryUrl" target="_blank">
                                {{ wallet.address }}
                            </a>
                        </td>
                        <td>{{ wallet.threshold }} of {{ wallet.owners?.length || 0 }}</td>
                        <td>
                            <span v-for="owner in wallet.owners">
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
                                </span>
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<style scoped></style>
