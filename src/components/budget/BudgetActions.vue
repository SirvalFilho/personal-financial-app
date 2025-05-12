<template>
  <div class="actions">
    <router-link v-if="selectedTab === 'All'" to="/budgets" class="add-btn"
      >Add budget</router-link
    >
    <button @click="resetFilter" class="view-btn">View all budgets</button>
  </div>
</template>

<script setup>
const props = defineProps({
  selectedTab: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["update:selectedTab"]);

function resetFilter() {
  emit("update:selectedTab", "All");
}
</script>

<style scoped>
.actions {
  display: flex;
  justify-content: right;
  gap: 18px;
  margin-top: 16px;
}
.add-btn {
  background: #232923;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 12px 28px;
  font-weight: 600;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.2s;
  text-decoration: none;
  display: inline-block;
}
.add-btn:hover {
  background: #2e332e;
}
.view-btn {
  background: #38e81c;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 12px 28px;
  font-weight: 600;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.2s;
  text-decoration: none;
  display: inline-block;
}
.view-btn:hover {
  background: #b0ff5a;
  color: #232923;
}
</style>
