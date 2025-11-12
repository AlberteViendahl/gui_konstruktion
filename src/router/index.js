// Til forklaring: https://v3.router.vuejs.org/
// https://router.vuejs.org/
import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import About from '@/pages/About.vue';
import Products from '@/pages/Products.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/products', component: Products}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;