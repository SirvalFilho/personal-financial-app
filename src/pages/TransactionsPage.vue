<script setup>
import HeaderTransaction from '../components/transactions/HeaderTransactions.vue';
import TransactionInput from '../components/transactions/TransactionInput.vue';
import CategorySelector from "../components/transactions/CategorySelector.vue";
import PrimaryButton from '../components/transactions/PrimaryButton.vue';
</script>

<template>
    <HeaderTransaction />
    <TransactionInput title="Value" placeholder="$0.00" />
    <TransactionInput title="Description" placeholder="Enter a description" />

    <div class="mt-11 flex gap-4">
        <CategorySelector name="Expense" />
        <CategorySelector name="Income" />
    </div>

    <div class="mt-11 flex gap-4 flex-wrap">
        <CategorySelector name="Rent" />
        <CategorySelector name="Groceries" />
        <CategorySelector name="Dining" />
        <CategorySelector name="Utilities" />
        <CategorySelector name="Subscriptions" />
        <CategorySelector name="Transportation" />
        <CategorySelector name="Healthcare" />
        <CategorySelector name="Education" />
        <CategorySelector name="Personal care" />
        <CategorySelector name="Home maintenance" />
        <CategorySelector name="Entertainment" />
        <CategorySelector name="Gifts" />
        <CategorySelector name="Donations" />
        <CategorySelector name="Taxes" />
        <CategorySelector name="Insurance" />
        <CategorySelector name="Investments" />
        <CategorySelector name="Savings" />
        <CategorySelector name="Debt payments" />
    </div>

    <div class="flex justify-end">
        <PrimaryButton name="Add entry"/>
    </div>
</template>

<style scoped></style>