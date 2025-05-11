<script setup>

import { defineProps } from 'vue';

defineProps({
    title: String,
    placeholder: String
})

</script>

<template>

    <label>
        <p>{{ title }}</p>
        <input type="text" :placeholder= "placeholder ">
    </label>
</template>

<style></style>