// Til forklaring: https://v3.router.vuejs.org/
// https://router.vuejs.org/
import { createRouter, createMemoryHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import About from '@/pages/About.vue';
import Products from '@/pages/Products.vue';
import SingleViewProduct from '@/pages/SingleViewProduct.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/products', component: Products},
    { path: '/products/:id', name: 'SingleViewProduct', component: SingleViewProduct } // ← :id her

]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
});

export default router;