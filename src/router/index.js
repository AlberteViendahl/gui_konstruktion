// Til forklaring: https://v3.router.vuejs.org/
// https://router.vuejs.org/
import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import profil from "@/pages/Profil.vue";
import Search from "@/pages/Search.vue";
import Liked from "@/pages/Liked.vue";
import SingleViewProduct from '@/pages/SingleViewProduct.vue';
import FallbackPage from '@/pages/FallbackPage.vue';

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/profil", name: "Profile", component: profil },
  { path: "/search", name: "Search", component: Search },
  { path: "/liked", name: "Liked", component: Liked },
  { path: "/fallback", name: "Fallback", component: FallbackPage },
  { path: '/products/:id', name: 'SingleViewProduct', component: SingleViewProduct } // ← :id her

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
