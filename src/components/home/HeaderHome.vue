<template>
        <div>
            <div class="flex flex-row justify-between items-end p-2 mb-2">
                <h1 class="text-4xl text-white font-bold">Hi John</h1>
                <router-link to="/transactions" class="text-sm bg-[var(--bg-option-focus)] p-3 mt-1 rounded-xl text-white font-semibold">New Transaction</router-link>
            </div> 
            <div class="flex flex-row items-center gap-3">
                <DisplayTotal  v-for="(item, index) in displayTotalOptions" :key="index" :label="item"></DisplayTotal>
            </div>
        </div>
</template>

<script setup>
import DisplayTotal from './DisplayTotal.vue'
let displayTotalOptions = ['Total Income', 'Total Expenses', 'Total Balance'];
</script>

<style>
</style>