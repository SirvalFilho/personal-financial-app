import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue';
import TransactionsPage from '../pages/TransactionsPage.vue';
import BudgetPage from '../pages/BudgetPage.vue';
import ReportsPage from '../pages/ReportsPage.vue';

const routes = [
    {
        path: '/',
        redirect: '/home',  
 },
  {
    path: '/home',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/transactions',
    name: 'transactions',
    component: TransactionsPage,
  },
  {
    path: '/budgets',
    name: 'budgets',
    component: BudgetPage,
  },
  {
    path: '/reports',
    name: 'reports',
    component: ReportsPage,
  },
  
  
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router