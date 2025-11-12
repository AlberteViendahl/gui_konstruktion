// Til forklaring: https://v3.router.vuejs.org/
// https://router.vuejs.org/
import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import Products from '@/pages/Products.vue';

import profil from "@/pages/Profil.vue";
import Search from "@/pages/Search.vue";
import Liked from "@/pages/Liked.vue";
import SingleViewProduct from '@/pages/SingleViewProduct.vue';

const routes = [
  { path: "/", component: Home },
  { path: "/profil", component: profil },
  { path: "/products", component: Products },
  { path: "/search", component: Search },
  { path: "/liked", component: Liked },
  { path: '/products/:id', name: 'SingleViewProduct', component: SingleViewProduct } // ← :id her

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
