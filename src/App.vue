<template>
  <div class="flex min-h-screen">
    <aside class="w-1/5">
      <NavBar />
    </aside>
    <main class="w-4/5 p-2">
      <router-view/>
    </main>
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
import { ref } from 'vue'
</script>

<style scoped>

</style>
