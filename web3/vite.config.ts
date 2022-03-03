import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"

// https://vitejs.dev/config/
export default defineConfig({
    root: "web3",
    //base: "/DAOView/",
    plugins: [vue()],
})
