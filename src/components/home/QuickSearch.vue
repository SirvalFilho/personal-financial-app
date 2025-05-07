<template>
    <div class="flex flex-col gap-4 items">
        <h2 class="text-xl font-semibold text-white">Quick Search</h2>
        <div class="flex flex-row itens-center justify-between rounded-xl border-1 border-[var(--border-1-green)] p-3">
            <div class="flex flex-col gap-2 items-start">
                <span class="font-semibold text-white">Add a transaction</span>
                <span class="text-sm text-[var(--font-1-softgreen)]">Add a transaction to your account</span>
            </div>
            <router-link to="/transactions" class="flex items-center justify-center text-sm bg-[var(--bg-color-secondary)] px-6 mt-1 rounded-2xl text-black font-semibold
             hover:shadow-[0_0_15px_var(--bg-color-secondary)] hover:text-white
            ">Add</router-link>
        </div>
        <div class="flex flex-row itens-center justify-between rounded-xl border-1 border-[var(--border-1-green)] p-3">
            <div class="flex flex-col gap-2 items-start">
                <span class="font-semibold text-white">Set Up a budget</span>
                <span class="text-sm text-[var(--font-1-softgreen)]">Set a sppanding limits for categories</span>
            </div>
            <router-link to="/budgets" class="flex items-center justify-center text-sm bg-[var(--bg-color-secondary)] px-6 mt-1 rounded-2xl text-black font-semibold 
            hover:shadow-[0_0_15px_var(--bg-color-secondary)] hover:text-white
            ">Create Budget</router-link>
        </div>
        <div class="flex flex-row itens-center justify-between rounded-xl border-1 border-[var(--border-1-green)] p-3">
            <div class="flex flex-col gap-2 items-start">
                <span class="font-semibold text-white">View Reports</span>
                <span class="text-sm text-[var(--font-1-softgreen)]">Understand your spending habits</span>
            </div>
            <router-link to="/reports" class="flex items-center justify-center text-sm bg-[var(--bg-color-secondary)] px-7 mt-1 rounded-2xl text-black font-semibold 
            hover:shadow-[0_0_15px_var(--bg-color-secondary)] hover:text-white
            ">View Reports</router-link>
        </div>
        <div class="flex flex-row itens-center justify-between rounded-xl border-1 border-[var(--border-1-green)] p-3">
            <div class="flex flex-col gap-2 items-start">
                <span class="font-semibold text-white">Get Help</span>
                <span class="text-sm text-[var(--font-1-softgreen)]">Find answers to common questions</span>
            </div>
            <router-link to="/home" class="flex items-center gap-2 text-lg text-white">
                <span class="font-semibold">Help Center</span>
                <i class="fa-solid fa-arrow-right pt-0.5"></i>
            </router-link>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
 
</style>