import { createApp, reactive } from "vue"
import { createRouter, createWebHashHistory } from "vue-router"
import { BigNumber } from "ethers"
import BootstrapVue from "bootstrap-vue-3"

import "bootswatch/dist/sandstone/bootstrap.min.css"
import "bootstrap-vue-3/dist/bootstrap-vue-3.css"

import App from "./App.vue"
import Home from "./pages/Home.vue"
import WethMaker from "./pages/WethMaker.vue"
import Data from "./data"
import Decimal from "decimal.js-light"

Decimal.config({ precision: 36 })
Decimal.config({ toExpNeg: -1000 })
Decimal.config({ toExpPos: 1000 })

declare module "decimal.js-light" {
    interface Decimal {
        toInt: (decimals: number) => BigNumber
    }
}

Decimal.prototype.toInt = function (decimals: number) {
    return BigNumber.from(this.times(new Decimal("10").pow(new Decimal(decimals.toString()))).todp(0));
}

declare module "ethers" {
    interface BigNumber {
        toDec: (decimals?: number) => Decimal
    }
}

BigNumber.prototype.toDec = function (decimals?: number) {
    return new Decimal(this.toString()).dividedBy(new Decimal(10).toPower((decimals || 0).toString()));
}
const BigNumberMax = (...args: BigNumber[]) => args.reduce((m, e) => e > m ? e : m);
const BigNumberMin = (...args: BigNumber[]) => args.reduce((m, e) => e < m ? e : m);

declare module "@vue/runtime-core" {
    interface ComponentCustomProperties {
        app: typeof Data
    }
}

const original_error = console.error
console.error = function (...args) {
    console.log(...args)
}

async function main() {
    const app = createApp(App)
    await Data.web3.setup()
    app.config.globalProperties.app = reactive(Data)
    app.provide("app", app.config.globalProperties.app)

    app.use(
        createRouter({
            history: createWebHashHistory(),
            routes: [
                { path: "/", component: Home },
                { path: "/wethmaker/:network/:address", component: WethMaker },
                //{ path: '/address/:address', component: Address },
            ],
        })
    )
    app.use(BootstrapVue)
    app.mount("#app")
}

main()