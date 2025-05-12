<template>
  <div class="budgets-list">
    <div
      v-for="budget in filteredBudgets"
      :key="budget.name"
      class="budget-card"
    >
      <div class="icon-box">
        <span v-html="budget.icon"></span>
      </div>
      <div class="budget-info">
        <div class="budget-name">{{ budget.name }}</div>
        <div class="budget-amount">
          ${{ budget.used }} / ${{ budget.limit }}
        </div>
      </div>
      <div class="progress-box">
        <div class="progress-bar-bg">
          <div
            class="progress-bar-fill"
            :style="{ width: budgetPercent(budget) + '%' }"
          ></div>
        </div>
        <span class="progress-percent">{{ budgetPercent(budget) }}%</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const budgets = ref([
  {
    name: "Food",
    used: 340,
    limit: 500,
    category: "Food",
    icon: `<svg class="w-6 h-6 text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m4 12 2.66667-1 2.66666 1L12 11l2.6667 1 2.6666-1L20 12m-1 5H5v1c0 1.1046.89543 2 2 2h10c1.1046 0 2-.8954 2-2v-1ZM5 9.00003h14v-1c0-2.20914-1.7909-4-4-4H9c-2.20914 0-4 1.79086-4 4v1ZM18.5 14h-13c-.82843 0-1.5.6716-1.5 1.5 0 .8285.67157 1.5 1.5 1.5h13c.8284 0 1.5-.6715 1.5-1.5 0-.8284-.6716-1.5-1.5-1.5Z"/>
            </svg>`,
  },
  {
    name: "Transport",
    used: 150,
    limit: 300,
    category: "Transport",
    icon: `<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"/>
        </svg>`,
  },
  {
    name: "Entertainment",
    used: 150,
    limit: 350,
    category: "Entertainment",
    icon: `<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 18V6l8 6-8 6Z"/>
        </svg>`,
  },
  {
    name: "Fixed Bills",
    used: 50,
    limit: 200,
    category: "Fixed Bills",
    icon: `<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 17.345a4.76 4.76 0 0 0 2.558 1.618c2.274.589 4.512-.446 4.999-2.31.487-1.866-1.273-3.9-3.546-4.49-2.273-.59-4.034-2.623-3.547-4.488.486-1.865 2.724-2.899 4.998-2.31.982.236 1.87.793 2.538 1.592m-3.879 12.171V21m0-18v2.2"/>
        </svg>`,
  },
]);

const props = defineProps({
  selectedTab: {
    type: String,
    required: true,
  },
});

const filteredBudgets = computed(() => {
  if (props.selectedTab === "All") return budgets.value;
  return budgets.value.filter((b) => b.category === props.selectedTab);
});

function budgetPercent(budget) {
  return Math.round((budget.used / budget.limit) * 100);
}
</script>

<style scoped>
.budgets-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 32px;
}
.budget-card {
  display: flex;
  align-items: center;
  background: #232923;
  border-radius: 12px;
  padding: 18px 24px;
  gap: 18px;
}
.icon-box {
  background: #2e332e;
  border-radius: 8px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.budget-info {
  flex: 1;
}
.budget-name {
  font-size: 1.1rem;
  font-weight: 600;
}
.budget-amount {
  color: #b0b0b0;
  font-size: 0.95rem;
}
.progress-box {
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 120px;
}
.progress-bar-bg {
  width: 70px;
  height: 6px;
  background: #fff2;
  border-radius: 4px;
  overflow: hidden;
}
.progress-bar-fill {
  height: 100%;
  background: #ffffff;
  border-radius: 4px;
  transition: width 0.3s;
}
.progress-percent {
  color: #ffffff;
  font-weight: 600;
  font-size: 1rem;
}
</style>
