// Til forklaring: https://v3.router.vuejs.org/
// https://router.vuejs.org/
import { createRouter, createMemoryHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import About from '@/pages/About.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
});

export default router;