<script setup lang="ts">
import Menu from "./components/Menu.vue"
</script>

<template>
    <Menu></Menu>
    <router-view v-slot="{ Component }">
        <suspense>
            <div>
                <component :is="Component" />
            </div>
            <template #fallback> Loading... </template>
        </suspense>
    </router-view>
</template>

<style></style>
