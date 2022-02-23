<script setup lang="ts"></script>

<template>
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
