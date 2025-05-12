<template>
  <div class="tabs">
    <button
      v-for="tab in tabs"
      :key="tab"
      :class="['tab', { active: selectedTab === tab }]"
      @click="selectTab(tab)"
    >
      {{ tab }}
    </button>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  selectedTab: {
    type: String,
    required: true,
  },
});

const tabs = ["All", "Food", "Transport", "Entertainment", "Fixed Bills"];
const selectedTab = ref(props.selectedTab);

const emit = defineEmits(["update:selectedTab"]);

function selectTab(tab) {
  selectedTab.value = tab;
  emit("update:selectedTab", tab);
}

watch(
  () => props.selectedTab,
  (newValue) => {
    selectedTab.value = newValue;
  }
);
</script>

<style scoped>
.tabs {
  display: flex;
  gap: 24px;
  margin-bottom: 24px;
}
.tab {
  background: none;
  border: none;
  color: #b0b0b0;
  font-weight: 600;
  font-size: 1.1rem;
  padding: 8px 0;
  border-bottom: 2px solid transparent;
  cursor: pointer;
  transition: color 0.2s, border-color 0.2s;
  text-decoration: none;
}
.tab.active {
  color: #fff;
  border-bottom: 2px solid #ffffff;
}
</style>
