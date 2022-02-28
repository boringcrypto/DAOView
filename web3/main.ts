import { createApp, reactive } from "vue"
import { createRouter, createWebHashHistory } from "vue-router"
import { BigNumber } from "ethers"
import BootstrapVue from "bootstrap-vue-3"

import "bootswatch/dist/sandstone/bootstrap.min.css"
import "bootstrap-vue-3/dist/bootstrap-vue-3.css"

import App from "./App.vue"
import Home from "./pages/Home.vue"
import MultiSigs from "./pages/MultiSigs.vue"
import Routers from "./pages/Routers.vue"
import Factories from "./pages/Factories.vue"
import Makers from "./pages/Makers.vue"
import Chefs from "./pages/Chefs.vue"
import BentoBoxes from "./pages/BentoBoxes.vue"

import MultiSig from "./pages/MultiSig.vue"
import WethMaker from "./pages/WethMaker.vue"
import Data from "./data"
import Decimal from "decimal.js-light"

Decimal.config({ precision: 36 })
Decimal.config({ toExpNeg: -1000 })
Decimal.config({ toExpPos: 1000 })

// this is just for debugging
declare global {
    interface Window {
        data: any
    }
}

declare module "decimal.js-light" {
    interface Decimal {
        toInt: (decimals: number) => BigNumber
    }
}

Decimal.prototype.toInt = function (decimals: number) {
    return BigNumber.from(this.times(new Decimal("10").pow(new Decimal(decimals.toString()))).todp(0))
}

declare module "ethers" {
    interface BigNumber {
        toDec: (decimals?: number) => Decimal
    }
}

BigNumber.prototype.toDec = function (decimals?: number) {
    return new Decimal(this.toString()).dividedBy(new Decimal(10).toPower((decimals || 0).toString()))
}
const BigNumberMax = (...args: BigNumber[]) => args.reduce((m, e) => (e > m ? e : m))
const BigNumberMin = (...args: BigNumber[]) => args.reduce((m, e) => (e < m ? e : m))

declare module "@vue/runtime-core" {
    interface ComponentCustomProperties {
        app: typeof Data
    }
}

async function main() {
    const app = createApp(App)
    await Data.web3.setup()
    window.data = Data
    app.config.globalProperties.app = reactive(Data)
    app.provide("app", app.config.globalProperties.app)

    app.use(
        createRouter({
            history: createWebHashHistory(),
            routes: [
                { path: "/", component: Home },
                { path: "/multisigs", component: MultiSigs },
                { path: "/makers", component: Makers },
                { path: "/factories", component: Factories },
                { path: "/chefs", component: Chefs },
                { path: "/bentoboxes", component: BentoBoxes },
                { path: "/kashimasters", component: Makers },
                { path: "/routers", component: Routers },
                { path: "/multisig/:network/:address", component: MultiSig },
                { path: "/wethmaker/:network/:address", component: WethMaker },
                //{ path: '/address/:address', component: Address },
            ],
        })
    )
    app.use(BootstrapVue)
    app.mount("#app")
}

main()
