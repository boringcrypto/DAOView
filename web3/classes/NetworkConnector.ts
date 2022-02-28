import { ethers, PopulatedTransaction, providers, ContractInterface, utils } from "ethers"
import { Multicall2__factory } from "./types/factories/Multicall2__factory"
import { Multicall2 } from "../../typechain-types"
import { Network } from "./Network"

interface AddEthereumChainParameter {
    chainId: string // A 0x-prefixed hexadecimal string
    chainName: string
    nativeCurrency: {
        name: string
        symbol: string // 2-6 characters long
        decimals: number
    }
    rpcUrls: string[]
    blockExplorerUrls?: string[]
    iconUrls?: string[] // Currently ignored.
}

export class NetworkConnector {
    provider: providers.Provider
    static get chainId(): Network {
        return Network.NONE
    }
    static get chainName(): string {
        return "None"
    }
    static get nativeCurrency(): { name: string; symbol: string; decimals: number } {
        return { name: "None", symbol: "NONE", decimals: 18 }
    }
    static get rpcUrls(): string[] {
        return []
    }
    static get blockExplorerUrls(): string[] {
        return []
    }
    static get multiCallAddress(): string {
        return ""
    }
    static get chainParams(): AddEthereumChainParameter {
        return {
            chainId: ethers.utils.hexStripZeros(ethers.utils.hexlify(this.chainId)),
            chainName: this.chainName,
            nativeCurrency: this.nativeCurrency,
            rpcUrls: this.rpcUrls,
            blockExplorerUrls: this.blockExplorerUrls,
        }
    }

    static get coinGeckoId(): string {
        return ""
    }

    // Add the static values to each instance
    get type() {
        return this.constructor as typeof NetworkConnector
    }
    get chainId() {
        return this.type.chainId
    }
    get chainName() {
        return this.type.chainName
    }
    get nativeCurrency() {
        return this.type.nativeCurrency
    }
    get rpcUrls() {
        return this.type.rpcUrls
    }
    get blockExplorerUrls() {
        return this.type.blockExplorerUrls
    }
    get multiCallAddress() {
        return this.type.multiCallAddress
    }
    get coinGeckoId() {
        return this.type.coinGeckoId
    }

    constructor(provider?: providers.Provider | null) {
        if (provider) {
            // Use provided provider (for instance injected MetaMask web3)
            this.provider = provider
        } else {
            // or create one using the RPC Url
            this.provider = new providers.StaticJsonRpcProvider({
                url: this.rpcUrls[0],
            })
        }
    }
}

type MulticallCallback = (result: any, transaction: PopulatedTransaction) => void

type MulticallItem = {
    transactionPromise: Promise<PopulatedTransaction>
    transaction?: PopulatedTransaction
    callback?: MulticallCallback
    contractInterface?: utils.Interface
}

export class Multicall {
    connector: NetworkConnector
    items: MulticallItem[] = []

    constructor(connector: NetworkConnector, items?: any[][] | Promise<PopulatedTransaction>[]) {
        this.connector = connector
        if (items && items.length) {
            for (const item of items) {
                if (Array.isArray(item)) {
                    this.queue(item[0], item[1])
                } else {
                    this.queue(item)
                }
            }
        }
    }

    queue(transactionPromise: Promise<PopulatedTransaction>, contractInterface?: utils.Interface, callback?: MulticallCallback) {
        this.items.push({ transactionPromise, contractInterface, callback })
    }

    async call(batchSize: number = 0) {
        const results: any[] = []

        for (let i in this.items) {
            this.items[i].transaction = await this.items[i].transactionPromise
        }

        while (this.items.length) {
            const contract = Multicall2__factory.connect(this.connector.multiCallAddress, this.connector.provider)

            const batch = this.items.splice(0, batchSize || this.items.length)
            const calls: Multicall2.CallStruct[] = batch.map((item) => {
                return {
                    target: item.transaction!.to!,
                    callData: item.transaction!.data!,
                }
            })
            const callResult = (await contract.callStatic.aggregate(calls)).returnData
            batch.forEach((item, i) => {
                const result = item.contractInterface
                    ? item.contractInterface.decodeFunctionResult(
                          item.contractInterface.parseTransaction({ data: item.transaction?.data || "" }).name,
                          callResult[i]
                      )
                    : callResult[i]

                if (item.callback) {
                    item.callback(result.length === 1 ? result[0] : result, item.transaction!)
                }
                return result
            })
        }
        return results
    }
}
