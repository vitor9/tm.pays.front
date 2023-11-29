import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import TransferenciaFinanceira from '@/components/TransferenciaFinanceira.vue';

const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/transferencia',
        name: 'TransferenciaFinanceira',
        component: TransferenciaFinanceira,
    },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
