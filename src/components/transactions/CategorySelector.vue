<script setup>
import { defineProps } from 'vue';

defineProps({
    name: String
})
</script>

<template>
    <button class="p-4  text-white border-[#3D543D] border rounded-lg">{{ name }}</button>
</template>

<style>

</style>