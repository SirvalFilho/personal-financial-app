<template>
    <div class="flex flex-col gap-10">
        <ReportsHeader />
        <ReportsCharts />
        <ReportsInfos />
    </div>
</template>

<script setup>
import ReportsHeader from '../components/reports/ReportsHeader.vue';
import ReportsCharts from '../components/reports/ReportsCharts.vue';
import ReportsInfos from '../components/reports/ReportsInfos.vue';
</script>

<style scoped>
</style>