<script setup>
import { defineProps } from 'vue';

defineProps({
    name: String
})
</script>

<template>
    <button class="flex items-center justify-center text-sm bg-[var(--bg-color-secondary)] px-4 p-3 mt-1 rounded-2xl text-black font-semibold 
            hover:shadow-[0_0_15px_var(--bg-color-secondary)] hover:text-white">{{ name }}
    </button>
</template>

<style></style>