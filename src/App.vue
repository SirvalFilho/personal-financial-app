<template>
 <div class="flex min-h-screen overflow-x-hidden">
  <aside class="flex-[1] max-w-[20vw] overflow-x-hidden">
    <NavBar />
  </aside>
  <main class="flex-[4] p-2  overflow-x-hidden">
    <router-view />
  </main>
</div>

</template>

<script setup>
import NavBar from './components/NavBar.vue'
import { ref } from 'vue'     
</script>

<style scoped>

</style>
