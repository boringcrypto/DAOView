import { reactive, computed, ComputedRef } from "vue"
import Web3, { Network, connectors } from "./classes/Web3"
import { BigNumber } from "ethers"
import { GnosisSafe, GnosisTokenBalances } from "./classes/GnosisSafe"
import {
    IBentoBoxV1__factory,
    IMasterChefV2__factory,
    IMasterChef__factory,
    IUniswapV2Factory__factory,
    IUniswapV2Router01__factory,
    IWethMaker__factory,
} from "../typechain-types"
import { SLPToken, Token, tokens } from "./classes/TokenManager"
import Decimal from "decimal.js-light"
import { applyStyles } from "@popperjs/core"
import { Account } from "./classes/Account"

export type MultiSig = {
    name: string
    network: Network
    address: string
    owners?: string[]
    threshold?: number
    nativeBalance?: BigNumber
    tokens?: GnosisTokenBalances
    safe?: GnosisSafe
}

export type RouterInfo = {
    network: Network
    address: string
    factory?: string
}

export type FactoryInfo = {
    network: Network
    address: string
    pairCount?: number
    feeTo?: string
    feeToSetter?: string
    pairs?: Token[]
}

export type MasterChefInfo = {
    network: Network
    address: string
    account: Account
    owner?: string
    devaddr?: string
    migrator?: string
    poolLength?: number
    totalAllocPoint: BigNumber
    currentBlock: BigNumber
    sushiPerDay?: BigNumber
}

export type PoolInfo = {
    chef: MasterChefInfo
    poolId: number
    token?: Token
    allocPoint: BigNumber
    lastRewardBlock: BigNumber
    accSushiPerShare: BigNumber
    sushiPerDay?: BigNumber
}

const multisigs = [
    { name: "Ops", network: Network.ETHEREUM, address: "0x19B3Eb3Af5D93b77a5619b047De0EED7115A19e7" },
    { name: "Fees", network: Network.POLYGON, address: "0x850a57630A2012B2494779fBc86bBc24F2a7baeF" },
    { name: "Ops", network: Network.POLYGON, address: "0x2B23D9B02FffA1F5441Ef951B4B95c09faa57EBA" },
    { name: "Ops", network: Network.XDAI, address: "0xc375411C6597F692Add6a7a3AD5b3C38626B0F26" },
    { name: "Ops", network: Network.HARMONY, address: "0x30af69A3f4a6f266961313Ce0943719dF4A8AA10" },
    { name: "Ops", network: Network.BINANCE, address: "0xc6fD91aD4919Fd91e2c84077ba648092cB499638" },
    { name: "Ops", network: Network.FANTOM, address: "0xF9E7d4c6d36ca311566f46c81E572102A2DC9F52" },
    { name: "Ops", network: Network.AVALANCHE, address: "0x09842Ce338647906B686aBB3B648A6457fbB25DA" },
    { name: "Ops", network: Network.CELO, address: "0x751b01Fa14fD9640a1DF9014e2D0f3a03A198b81" },
    { name: "Fees", network: Network.CELO, address: "0x8b63fcBB752e425e3C4B12F7802BAd1A24c6d7F4" },
    { name: "Ops", network: Network.MOONBEAM_KUSAMA, address: "0x939f7E76cc515cc296dD3ce362D9a52e148A7D5f" },
    { name: "Fees", network: Network.MOONBEAM_KUSAMA, address: "0x6669cc35031A84fAc1Efe30bB586B9ADdf223Fbc" },
    { name: "Ops", network: Network.FUSE, address: "0x33b6beb37837459Ee84a1Ffed2C6a4ca22e5F316" },
    { name: "Ops", network: Network.ARBITRUM, address: "0x978982772b8e4055B921bf9295c0d74eB36Bc54e" },
    { name: "Ops", network: Network.MOONBEAM, address: "0x87AEb22b7BB02AC42204eB312C08A22FC3f077F3" },
] as MultiSig[]

const sushiMakers = [{ network: Network.ETHEREUM, address: "0x5ad6211CD3fdE39A9cECB5df6f380b8263d1e277" }]

export type WethMakerInfo = {
    network: Network
    address: string
    owner?: string
    account: Account
}

const wethMakers = [
    {
        network: Network.ARBITRUM,
        address: "0xa19b3b22f29E23e4c04678C94CFC3e8f202137d8",
        account: new Account("0xa19b3b22f29E23e4c04678C94CFC3e8f202137d8"),
    },
    {
        network: Network.POLYGON,
        address: "0xf1c9881Be22EBF108B8927c4d197d126346b5036",
        account: new Account("0xf1c9881Be22EBF108B8927c4d197d126346b5036"),
    },
    {
        network: Network.AVALANCHE,
        address: "0x560C759A11cd026405F6f2e19c65Da1181995fA2",
        account: new Account("0x560C759A11cd026405F6f2e19c65Da1181995fA2"),
    },
] as WethMakerInfo[]

const factories = [
    { network: Network.ETHEREUM, address: "0xC0AEe478e3658e2610c5F7A4A2E1777cE9e4f2Ac" },
    { network: Network.POLYGON, address: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4" },
    { network: Network.ARBITRUM, address: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4" },
    { network: Network.AVALANCHE, address: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4" },
    { network: Network.MOONBEAM_KUSAMA, address: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4" },
    { network: Network.FANTOM, address: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4" },
    { network: Network.BINANCE, address: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4" },
    { network: Network.XDAI, address: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4" },
    { network: Network.HARMONY, address: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4" },
    { network: Network.TELOS, address: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4" },
    { network: Network.CELO, address: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4" },
    { network: Network.FUSE, address: "0x43eA90e2b786728520e4f930d2A71a477BF2737C" },
    { network: Network.OKEX, address: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4" },
    { network: Network.HUOBI, address: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4" },
    { network: Network.PALM, address: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4" },
    { network: Network.MOONBEAM, address: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4" },
] as FactoryInfo[]

export type BentoBoxInfo = {
    network: Network
    address: string
    owner?: string
    account: Account
}

const bentoBoxes = [
    { network: Network.ETHEREUM, address: "0xF5BCE5077908a1b7370B9ae04AdC565EBd643966" },
    { network: Network.POLYGON, address: "0x0319000133d3AdA02600f0875d2cf03D442C3367" },
    { network: Network.ARBITRUM, address: "0x74c764d41b77dbbb4fe771dab1939b00b146894a" },
    { network: Network.BINANCE, address: "0xf5bce5077908a1b7370b9ae04adc565ebd643966" },
    { network: Network.MOONBEAM, address: "0x80C7DD17B01855a6D2347444a0FCC36136a314de" },
    { network: Network.FANTOM, address: "0xF5BCE5077908a1b7370B9ae04AdC565EBd643966" },
    { network: Network.XDAI, address: "0xE2d7F5dd869Fc7c126D21b13a9080e75a4bDb324" },
    { network: Network.AVALANCHE, address: "0x0711B6026068f736bae6B213031fCE978D48E026" },
    { network: Network.HUOBI, address: "0xF5BCE5077908a1b7370B9ae04AdC565EBd643966" },
    { network: Network.CELO, address: "0x0711B6026068f736bae6B213031fCE978D48E026" },
    { network: Network.OPTIMISM, address: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4" }
] as BentoBoxInfo[]

const pools = reactive([]) as PoolInfo[]

export default reactive({
    title: "DAOView",
    name: "SushiView",
    web3: new Web3(),
    multisigs: multisigs,
    masterchefs: [{ network: Network.ETHEREUM, address: "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd" }] as MasterChefInfo[],
    masterchefsV2: [{ network: Network.ETHEREUM, address: "0xef0881ec094552b2e128cf945ef17a6752b4ec5d" }] as MasterChefInfo[],
    minichefs: [
        { network: Network.FANTOM, address: "0xf731202A3cf7EfA9368C2d7bD613926f7A144dB5" },
        { network: Network.POLYGON, address: "0x0769fd68dFb93167989C6f7254cd0D766Fb2841F" },
        { network: Network.XDAI, address: "0xdDCbf776dF3dE60163066A5ddDF2277cB445E0F3" },
        { network: Network.ARBITRUM, address: "0xF4d73326C13a4Fc5FD7A064217e12780e9Bd62c3" },
        { network: Network.HARMONY, address: "0x67da5f2ffaddff067ab9d5f025f8810634d84287" },
        { network: Network.CELO, address: "0x0769fd68dFb93167989C6f7254cd0D766Fb2841F" },
        { network: Network.CELO, address: "0x8084936982D089130e001b470eDf58faCA445008" },
        { network: Network.MOONBEAM_KUSAMA, address: "0x3dB01570D97631f69bbb0ba39796865456Cf89A5" },
        { network: Network.FUSE, address: "0x182CD0C6F1FaEc0aED2eA83cd0e160c8Bd4cb063" },
        { network: Network.MOONBEAM, address: "0x011E52E4E40CF9498c79273329E8827b21E2e581" },
    ] as MasterChefInfo[],
    pools,
    complexRewarders: [
        { network: Network.FANTOM, address: "0xeaf76e3bD36680D98d254B378ED706cb0DFBfc1B" },
        { network: Network.POLYGON, address: "0xa3378Ca78633B3b9b2255EAa26748770211163AE" },
        { network: Network.XDAI, address: "0x84562cE1a5f3A4A957a5a94Ed0be05BA73fD2665" },
        { network: Network.HARMONY, address: "0x25836011bbc0d5b6db96b20361a474cbc5245b45" },
        { network: Network.CELO, address: "0x1be211D8DA40BC0ae8719c6663307Bfc987b1d6c" },
        { network: Network.CELO, address: "0xFa3de59eDd2500BA725Dad355B98E6a4346Ada7d" },
        { network: Network.MOONBEAM_KUSAMA, address: "0x1334c8e873E1cae8467156e2A81d1C8b566B2da1" },
        { network: Network.FUSE, address: "0xEF502259Dd5d497d082498912031E027c4515563" },
    ],
    timelocks: [{ network: Network.ETHEREUM, address: "0x9a8541Ddf3a932a9A922B607e9CF7301f1d47bD1" }],
    routers: [
        { network: Network.ETHEREUM, address: "0xd9e1cE17f2641f24aE83637ab66a2cca9C378B9F" },
        { network: Network.POLYGON, address: "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506" },
        { network: Network.ARBITRUM, address: "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506" },
        { network: Network.AVALANCHE, address: "0x1b02da8cb0d097eb8d57a175b88c7d8b47997506" },
        { network: Network.MOONBEAM_KUSAMA, address: "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506" },
        { network: Network.FANTOM, address: "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506" },
        { network: Network.BINANCE, address: "0x1b02da8cb0d097eb8d57a175b88c7d8b47997506" },
        { network: Network.XDAI, address: "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506" },
        { network: Network.HARMONY, address: "0x1b02da8cb0d097eb8d57a175b88c7d8b47997506" },
        { network: Network.TELOS, address: "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506" },
        { network: Network.CELO, address: "0x1421bDe4B10e8dd459b3BCb598810B1337D56842" },
        { network: Network.FUSE, address: "0xF4d73326C13a4Fc5FD7A064217e12780e9Bd62c3" },
        { network: Network.OKEX, address: "0x1b02da8cb0d097eb8d57a175b88c7d8b47997506" },
        { network: Network.HUOBI, address: "0x1b02da8cb0d097eb8d57a175b88c7d8b47997506" },
        { network: Network.PALM, address: "0x1b02da8cb0d097eb8d57a175b88c7d8b47997506" },
        { network: Network.MOONBEAM, address: "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506" },
    ] as RouterInfo[],
    factories,
    sushiMakers: sushiMakers,
    wethMakers,
    bentoBoxes,
    kashiMasters: [
        { network: Network.ETHEREUM, address: "0x2cba6ab6574646badc84f0544d05059e57a5dc42" },
        { network: Network.POLYGON, address: "0xb527c5295c4bc348cbb3a2e96b2494fd292075a7" },
        { network: Network.ARBITRUM, address: "0xa010ee0226cd071bebd8919a1f675cae1f1f5d3e" },
        { network: Network.AVALANCHE, address: "0x513037395fa0c9c35e41f89189cedfe3bd42fadb" },
        { network: Network.BINANCE, address: "0x2cba6ab6574646badc84f0544d05059e57a5dc42" },
        { network: Network.XDAI, address: "0x7a6da9903d0a481f40b8336c1463487bc8c0407e" },
        { network: Network.HUOBI, address: "0x2cBA6Ab6574646Badc84F0544d05059e57a5dc42" },
    ],
    kashiSushiMakers: [{ network: Network.ETHEREUM, address: "0x08C82f7513C7952A95029FE3B1587B1FA52DACed" }],
})

export const known_addresses = {
    "0x3027a0c4E35272c0707dE2651A0638c3dF1c37AC": "Gasper",
    "0x4bb4c1B0745ef7B4642fEECcd0740deC417ca0a0": "Jiro",
    "0xFBb3a85603C398Ff22435DD40873EC190134e1f6": "Matt",
    "0xb2701351a2c1c6E30BFA2699d25f85a5100e39D3": "Ramin",
    "0xb4A3f907ec1611F22543219AE9Bb33ec5E96e116": "Omakase",
    "0x6b83270726342E02a11E755e8CC35275712122eC": "Lufy",
    "0x426b3afFbbE924E01575d5b3cb9dc640625bBB49": "Keno",
    "0x5b8C253517b6Bd003369173109693B01cb6841B5": "LevX",
    "0x8f99B0b48b23908Da9f727B5083052d5099e6aea": "Joe",
    "0x285b7EEa81a5B66B62e7276a24c1e0F83F7409c1": "Maki",
    "0x8620D3edd67Ed411CCb314F3CFFF5a27A7C74A74": "Sarang",
    "0xCc159BCb6a466DA442D254Ad934125f05DAB66b5": "Matt Deployer (Ledger)",
    "0xe94B5EEC1fA96CEecbD33EF5Baa8d00E4493F4f3": "Treasury Multisig",
    "0x9a8541Ddf3a932a9A922B607e9CF7301f1d47bD1": "Timelock",
    "0xf87BC5535602077d340806D71f805EA9907a843D": "Matt Deployer 2",
    "0xC3598d91844B061195136600AD243b077Cc164e2": "0xMaki",
    "0x3FE28138BbDc87E1F8Fe7C1b4A49fC41555B7791": "Omakase",
    "0x5F43Cd8B5Eead549de4444a644B4Cb425A4ea5b2": "Joe",
    "0xFeECD74F40E0500853610e9439E8160FB5C6E670": "Chester",
    "0x6dD76c57fa2cdD027C4dCE8b62ffBBBB08F01849": "Kaystre",
    "0xBf23B4890E09490a798d6B9be8Bd25B4e5Ce27Ff": "Nori",
    "0x1C0Aa8cCD568d90d61659F060D1bFb1e6f855A20": "Ross",
    "0xd367684EB3a052968b7A14059620E044959916D1": "Naim",
    "0x80e8Db48b7828bd3ef5789636d3dE6f6c250bad5": "Rachel",
    "0xC9341295fd754D829a5B5f272F644A257042323c": "AG",
    "0x897A80273Ae5a5D27698A178697965bAb57bf5a3": "Amanda",
    "0xCc0BbCBEd192A708bb7f0Ce69051D326291e171F": "Gasper",
    "0xc3B45647F996c4c50C7aD453e5c0D71Aa7316D29": "Gasper",
    "0x10e978bA1aCCA998543aEdeB5F15D0d3481B9053": "Cabbage",
    "0x7a5f66Eb194F629dB12F25bd0695819CB690fcc7": "Ramin",
    "0x5F6062048ea59943195E57D52DF79ea382f913bF": "Ilya",
    "0x2Af3FD08C57C075f6Ff6Cd3B1B297368D9f1F3Bc": "Tangle",
    "0x131Ee3bE2E3803Bf9E8976dDf0306236f001B7F2": "N00bie",
    "0x5434289767bb094DaDbb8D1E5D58b47Ca5729063": "HHK (Samurai)",
    "0xB0707a3Ba4D6b16cbc7d197F4061Ec2D1C77b16E": "Maka (Samurai)",
    "0x95B6da6a8dF9Eeb0152b89697fAb420b87e7af49": "Pegbit (Samurai)",
    "0xBAe1169E1DfEaD21EbAadd4576680274f018C368": "Porlix (Samurai)",
    "0x10589146F49fDeca15Fe484cd879531D2eC96A92": "RSK (Samurai)",
    "0x93b15B016627FB2a2500870a78a413302BD7D457": "Truda (Samurai)",
    "0x0B191F7F5b007c71E5118A0C7dF36fF0b2c4193b": "Zapa (Samurai)",
    "0xc8494cEd5eE8a14C31dCAe3945c099961c6023ff": "ME9",
    "0xb463B8AE371E677A3A921aF8AF9821C0784dE5D7": "Gabe",
    "0x0425517c5Adadde5c9f93F9988F089Aa68716F0F": "Mudit",
    "0x02499B7B592820C7889e9dBE15A15d314c811CE7": "Sarang",
    "0xad3537445290b89aef571e4f0f9dc77376fb5571": "LufyCZ",
    "0x5edf621bc259b7bf920e1bd24ccd6dc01811b2f2": "Matthew",
    "0xb9491CD0Ff07569AD33865E032eAE48Dd5Bb5AFF": "Orage (contractor)",
    "0x79BF8bBaC596794f1489e94bF4C15Fbf51EA70B5": "Voltron (contractor)",
    "0x737Bc0FC76Ade91a6c280ab6D216f659201853A6": "Pintha (contractor)",
    "0xf0A3da0E045FdAC0FFEc2285d360e706586809e6": "Pinky Bell (contractor)",
    "0x9b85a4Fc0F9BeE1C0199C8792E93863Bf92fDD91": "h0rst (contractor)",
    "0x9D5B6f5Fb48a62dCe3bede64576E2b5844AaA0c0": "Jack Clancy (contractor)",
    "0x29259c062E62a33DDA1a491FD67A48ebe0A092d5": "Athcrypt (contractor)"
} as { [address: string]: string }

multisigs.forEach((wallet) => {
    known_addresses[wallet.address] = "MultiSig: " + wallet.name
})

sushiMakers.forEach((maker) => {
    known_addresses[maker.address] = "SushiMaker"
})

wethMakers.forEach((maker) => {
    known_addresses[maker.address] = "WethMaker"
})

factories.forEach((factory) => {
    known_addresses[factory.address] = "Factory"
})

export async function updateFactory(factory: FactoryInfo) {
    const connector = new connectors[factory.network]()
    const storageKey = "factory" + connector.chainName + factory.address

    const contract = IUniswapV2Factory__factory.connect(factory.address, connector.provider)
    factory.pairCount = (await contract.allPairsLength()).toNumber()
    factory.feeTo = await contract.feeTo()
    factory.feeToSetter = await contract.feeToSetter()

    factory.pairs = (JSON.parse(localStorage.getItem(storageKey) || "[]") as string[]).map((pair) => tokens.get(factory.network, pair))
    if (factory.pairs.length < factory.pairCount) {
        for (let i = factory.pairs.length; i < factory.pairCount; i++) {
            connector.queue(contract.populateTransaction.allPairs(i), contract.interface, (result) =>
                factory.pairs?.push(tokens.get(factory.network, result))
            )
        }
        await connector.call(250)

        localStorage.setItem(storageKey, JSON.stringify(factory.pairs.map((token) => token.address)))
    }
}

export async function updateMultiSig(multisig: MultiSig) {
    const connector = new connectors[multisig.network]()

    multisig.safe = new GnosisSafe(multisig.network, multisig.address)
    multisig.owners = [...(await multisig.safe.getOwners())].sort()
    multisig.threshold = await multisig.safe.getThreshold()
    multisig.tokens = await multisig.safe.getTokenBalances()

    multisig.nativeBalance = await connector.provider.getBalance(multisig.address)
}

export async function updateRouter(router: RouterInfo) {
    const connector = new connectors[router.network]()

    const contract = IUniswapV2Router01__factory.connect(router.address, connector.provider)
    router.factory = await contract.factory()
}

export async function updateWethMaker(maker: WethMakerInfo) {
    const connector = new connectors[maker.network]()

    const contract = IWethMaker__factory.connect(maker.address, connector.provider)
    maker.owner = await contract.owner()
}

export async function updateBentobox(box: BentoBoxInfo) {
    const connector = new connectors[box.network]()

    const contract = IBentoBoxV1__factory.connect(box.address, connector.provider)
    box.owner = await contract.owner()
}

export async function loadChefPools(chef: MasterChefInfo) {
    const connector = new connectors[chef.network]()
    const contract = IMasterChef__factory.connect(chef.address, connector.provider)
    for (let i = 0; i < (chef.poolLength || 0); i++) {
        connector.queue(contract.populateTransaction.poolInfo(i), contract.interface, (result) => {
            if (!result.allocPoint.isZero()) {
                pools.push({
                    poolId: i,
                    chef,
                    token: tokens.get(connector.chainId, result.lpToken),
                    allocPoint: result.allocPoint,
                    accSushiPerShare: result.accSushiPerShare,
                    lastRewardBlock: result.lastRewardBlock,
                    sushiPerDay: chef.sushiPerDay?.mul(result.allocPoint).div(chef.totalAllocPoint),
                })
            }
        })
    }
    await connector.call(100)
}

export async function loadChefV2Pools(chef: MasterChefInfo) {
    console.log(chef, chef.poolLength)
    const connector = new connectors[chef.network]()
    const contract = IMasterChefV2__factory.connect(chef.address, connector.provider)
    const poolByID: { [poolId: number]: PoolInfo } = {}
    for (let i = 0; i < (chef.poolLength || 0); i++) {
        connector.queue(contract.populateTransaction.poolInfo(i), contract.interface, (result) => {
            poolByID[i] = {
                poolId: i,
                chef,
                token: undefined,
                allocPoint: result.allocPoint,
                accSushiPerShare: result.accSushiPerShare,
                lastRewardBlock: result.lastRewardBlock,
                sushiPerDay: chef.sushiPerDay?.mul(result.allocPoint).div(chef.totalAllocPoint),
            }
        })
        connector.queue(
            contract.populateTransaction.lpToken(i),
            contract.interface,
            (result) => (poolByID[i].token = tokens.get(connector.chainId, result))
        )
    }
    await connector.call(100)
    pools.push(...Object.values(poolByID).filter((pool) => !pool.allocPoint.isZero()))
}

export async function updateMasterChef(chef: MasterChefInfo) {
    const connector = new connectors[chef.network]()

    const contract = IMasterChef__factory.connect(chef.address, connector.provider)
    chef.owner = await contract.owner()
    chef.devaddr = await contract.devaddr()
    chef.poolLength = (await contract.poolLength()).toNumber()
    chef.totalAllocPoint = await contract.totalAllocPoint()
    chef.sushiPerDay = (await contract.sushiPerBlock()).mul(6595)

    await loadChefPools(chef)
}

export async function updateMasterChefV2(chef: MasterChefInfo) {
    const connector = new connectors[chef.network]()

    const contract = IMasterChef__factory.connect(chef.address, connector.provider)
    chef.owner = await contract.owner()
    chef.poolLength = (await contract.poolLength()).toNumber()
    chef.totalAllocPoint = await contract.totalAllocPoint()
    chef.sushiPerDay = (await contract.sushiPerBlock()).mul(6595)
    await loadChefV2Pools(chef)
}

export async function updateMiniChef(chef: MasterChefInfo) {
    const connector = new connectors[chef.network]()

    const contract = IMasterChef__factory.connect(chef.address, connector.provider)
    chef.owner = await contract.owner()
    chef.poolLength = (await contract.poolLength()).toNumber()
    chef.totalAllocPoint = await contract.totalAllocPoint()
    chef.sushiPerDay = (await contract.sushiPerSecond()).mul(24 * 60 * 60)
    await loadChefV2Pools(chef)
}
