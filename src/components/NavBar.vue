<template>
  <div class=" min-h-screen flex flex-col gap-5 justify-start p-5">
    <router-link to="/" :class="[
    'flex items-center gap-5 px-5 p-3 text-white text-xl hover:bg-[var(--bg-option-focus)] hover:rounded-xl',
    $route.path === '/home' ? 'bg-[var(--bg-option-focus)] rounded-xl' : ''
    ]">
        <i class="fa-solid fa-house"></i>
        <span>Dashboard</span>
    </router-link>
    <router-link to="/transactions" :class="[
    'flex items-center gap-5 px-5 p-3 text-white text-xl hover:bg-[var(--bg-option-focus)] hover:rounded-xl',
    $route.path === '/transactions' ? 'bg-[var(--bg-option-focus)] rounded-xl' : ''
    ]">
        <i class="fa-solid fa-list"></i>
        <span>Transations</span>
    </router-link>
    <router-link to="/budgets" :class="[
    'flex items-center gap-5 px-5 p-3 text-white text-xl hover:bg-[var(--bg-option-focus)] hover:rounded-xl',
    $route.path === '/budgets' ? 'bg-[var(--bg-option-focus)] rounded-xl' : ''
    ]">
        <i class="fa-solid fa-pen"></i>
        <span>Budgets</span>
    </router-link>
    <router-link to="/reports" :class="[
    'flex items-center gap-5 px-5 p-3 text-white text-xl hover:bg-[var(--bg-option-focus)] hover:rounded-xl',
    $route.path === '/reports' ? 'bg-[var(--bg-option-focus)] rounded-xl' : ''
    ]">
        <i class="fa-solid fa-chart-line "></i>
        <span>Reports</span>
    </router-link>
  </div>
</template>

<script setup>
</script>

<style scoped>
</style>