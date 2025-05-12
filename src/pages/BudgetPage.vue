<template>
  <div class="budget-container">
    <HeaderBudget />
    <BudgetTabs v-model:selectedTab="selectedTab" />
    <BudgetList :selected-tab="selectedTab" />
    <BudgetActions
      :selected-tab="selectedTab"
      @update:selectedTab="selectedTab = $event"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import HeaderBudget from "../components/budget/HeaderBudget.vue";
import BudgetTabs from "../components/budget/BudgetTabs.vue";
import BudgetList from "../components/budget/BudgetList.vue";
import BudgetActions from "../components/budget/BudgetActions.vue";

const selectedTab = ref("All");
</script>

<style scoped>
.budget-container {
  margin: 0 auto;
  padding: 32px 16px;
  color: #fff;
  min-height: 100vh;
  background-color: #1a1d1a;
}
</style>
