<template>
    <div class="flex flex-col items-center gap-3 rounded-xl border-1 border-[var(--border-1-green)] p-5 flex-1">
        <h1 class="text-3xl font-semibold text-white">{{ formatCurrencyUSD(12)}}</h1>  
        <h2 class="text-sm text-[var(--font-1-softgreen)]">{{label}}</h2>
    </div>
</template>

<script setup> 
defineProps({
    label: {
         type: String,
         required: true
        }
});
function formatCurrencyUSD(value) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(value)
}
</script>

<style scoped>
</style>