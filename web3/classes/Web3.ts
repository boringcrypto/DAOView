import { ProviderMessage, ProviderRpcError, ProviderConnectInfo } from "hardhat/types"
import { BigNumber, ethers } from "ethers"
import { computed, ComputedRef, markRaw } from "vue"
import { NetworkConnector } from "./NetworkConnector"
import { Network } from "./Network"
import { connectors } from "./NetworkConnectors"
import SafeAppsSDK, { SafeInfo } from "@gnosis.pm/safe-apps-sdk"
import { SafeAppProvider } from "@gnosis.pm/safe-apps-provider"

export interface EthereumEvent {
    connect: ProviderConnectInfo
    disconnect: ProviderRpcError
    accountsChanged: Array<string>
    chainChanged: string
    message: ProviderMessage
}

type EventKeys = keyof EthereumEvent
type EventHandler<K extends EventKeys> = (event: EthereumEvent[K]) => void

export interface Ethereumish {
    autoRefreshOnNetworkChange: boolean
    chainId: string
    isMetaMask?: boolean
    isStatus?: boolean
    networkVersion: string
    selectedAddress: any

    on<K extends EventKeys>(event: K, eventHandler: EventHandler<K>): void
    enable(): Promise<any>
    request?: (request: { method: string; params?: Array<any> }) => Promise<any>
}

declare global {
    interface Window {
        ethereum: Ethereumish
    }
}

interface ConnectInfo {
    chainId: string
}

enum WalletProvider {
    METAMASK = 1,
    WALLETCONNECT = 2,
    GNOSIS_SAFE = 3,
}

class MetaMaskProvider {
    provider?: ethers.providers.JsonRpcProvider

    detect(): boolean {
        return window.ethereum && window.ethereum.request && window.ethereum.isMetaMask ? true : false
    }

    connect(force: boolean) {}
}

class GnosisSafeAppProvider {
    provider?: ethers.providers.Web3Provider

    async detect(): Promise<boolean> {
        console.log("Gnosis")

        const sdk = new SafeAppsSDK()
        const safe = await sdk.safe.getInfo()

        console.log(safe)
        const provider = new ethers.providers.Web3Provider(new SafeAppProvider(safe, sdk))
        console.log(await provider.getBlockNumber())
        return false
    }

    connect(force: boolean) {}
}

export default class Web3 {
    name = "Loading..."
    walletProvider: WalletProvider = WalletProvider.METAMASK
    connected = false
    chainId = Network.NONE
    address = ""
    addresses = [] as string[]
    block = 0
    provider?: ethers.providers.JsonRpcProvider
    gnosis?: ethers.providers.Web3Provider
    safe?: SafeInfo
    update?: ComputedRef<string>
    connector?: ComputedRef<NetworkConnector | null>

    connect() {
        if (this.connected && window.ethereum.request) {
            window.ethereum.request({ method: "eth_requestAccounts" })
        }
    }

    switch(chain: Network) {
        console.log(chain, window.ethereum)
        if (window.ethereum && window.ethereum.request) {
            window.ethereum
                .request({
                    method: "wallet_switchEthereumChain",
                    params: [{ chainId: ethers.utils.hexStripZeros(ethers.utils.hexlify(chain)) }],
                })
                .catch((error: ProviderRpcError) => {
                    console.log(error)
                    if (error.code == 4902 && window.ethereum && window.ethereum.request) {
                        window.ethereum.request({
                            method: "wallet_addEthereumChain",
                            params: [connectors[chain].chainParams],
                        })
                    }
                })
        }
    }

    setup() {
        const sdk = new SafeAppsSDK()
        sdk.safe.getInfo().then((safe) => {
            console.log("Gnosis safe found:", safe)
            this.safe = safe
            this.gnosis = markRaw(new ethers.providers.Web3Provider(new SafeAppProvider(safe, sdk)))
        })

        this.update = computed(() => this.chainId + "|" + this.block + "|" + this.address)
        this.connector = computed(() => (this.provider ? new connectors[this.chainId](this.provider) : null))
        if (window.ethereum && window.ethereum.request) {
            this.provider = markRaw(new ethers.providers.Web3Provider(window.ethereum))
            if (window.ethereum.isMetaMask) {
                this.name = "MetaMask"
            } else {
                this.name = "Other"
            }

            window.ethereum.autoRefreshOnNetworkChange = false
            const handleBlock = (blockNumber: number) => {
                this.block = blockNumber
            }
            const handleChainChanged = (newChainId: string) => {
                this.chainId = Number(BigNumber.from(newChainId))
                this.connected = true
                this.provider?.off("block")
                this.provider = markRaw(new ethers.providers.Web3Provider(window.ethereum))
                this.provider.on("block", handleBlock)
            }
            const handleConnect = (info: ConnectInfo) => {
                handleChainChanged(info.chainId)
            }
            const handleAccountsChanged = (newAddresses: string[] | undefined) => {
                this.addresses = newAddresses || []
                if (newAddresses && newAddresses.length) {
                    this.address = newAddresses[0]
                } else {
                    this.address = ""
                }
            }

            window.ethereum.on("accountsChanged", handleAccountsChanged)
            window.ethereum.on("chainChanged", handleChainChanged)
            window.ethereum.on("connect", handleConnect)
            window.ethereum.on("disconnect", (error: ProviderRpcError) => {
                this.connected = false
                this.block = 0
            })
            this.provider.on("block", handleBlock)

            window.ethereum
                .request({ method: "eth_accounts" })
                .then((addresses: string[]) => {
                    handleAccountsChanged(addresses)
                    handleConnect({ chainId: window.ethereum.chainId })
                })
                .catch((error: ProviderRpcError) => {
                    console.log("Error", error)
                })
        } else {
            this.name = "None"
        }
    }
}

export { Network, NetworkConnector, connectors }
