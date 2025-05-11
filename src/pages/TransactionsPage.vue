<script setup>
    import HeaderTransaction from '../components/transactions/HeaderTransactions.vue'
    import TransactionInput from '../components/transactions/TransactionInput.vue';
</script>

<template>
    <HeaderTransaction/>
    <TransactionInput title="Value" placeholder="$0.00"/>
    <TransactionInput title="Description" placeholder="Enter a description"/>
</template>

<style scoped></style>