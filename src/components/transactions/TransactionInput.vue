<script setup>

import { defineProps } from 'vue';

defineProps({
    title: String,
    placeholder: String
})

</script>

<template>
    <div class="mt-8">
        <label>
            <p class="text-2xl text-white font-medium mb-4">{{ title }}</p>
            <input type="text" :placeholder="placeholder"
                class="w-lg h-14 p-4 font-medium outline-none rounded-lg bg-[#293829] text-[#9EB89E]   ">
        </label>
    </div>
</template>

<style></style>