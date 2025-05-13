<template>
        <div>
            <div class="flex flex-row justify-between items-end p-2 mb-2">
                <h1 class="text-4xl text-white font-bold">Hi John</h1>
                <router-link to="/transactions" class="text-sm bg-[var(--bg-option-focus)] p-3 mt-1 rounded-xl text-white font-semibold">New Transaction</router-link>
            </div> 
            <div class="flex flex-row items-center gap-3">
                <DisplayTotal :label="displayTotalOptions[0]" :value="displayTotalValues[0]"></DisplayTotal>
                <DisplayTotal :label="displayTotalOptions[1]" :value="displayTotalValues[1]"></DisplayTotal>
                <DisplayTotal :label="displayTotalOptions[2]" :value="displayTotalValues[2]"></DisplayTotal>
            </div>
        </div>
</template>

<script setup>
import DisplayTotal from './DisplayTotal.vue'
let displayTotalOptions = ['Total Income', 'Total Expenses', 'Total Balance'];
let displayTotalValues = [1200, 2300, 1100];
</script>

<style>
</style>