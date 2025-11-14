<script setup>
import { useRoute } from "vue-router";

import logo from "@/assets/icons/logo-notfilled.svg";
import logoFilled from "@/assets/icons/logo-filled.svg";
import search from "@/assets/icons/search.svg";
import searchFilled from "@/assets/icons/search-fill.svg";
import like from "@/assets/icons/like.svg";
import likeFilled from "@/assets/icons/heart-fill.svg";
import profil from "@/assets/icons/profil.svg";
import profilFilled from "@/assets/icons/profil-fill.svg";

const route = useRoute();
</script>

<template>
  <nav id="bottom-bar">
    <!-- Forside -->
    <RouterLink to="/">
      <img :src="route.path === '/' ? logoFilled : logo" alt="Logo" />
    </RouterLink>

    <!-- Søg -->
    <RouterLink to="/search">
      <img
        :src="route.path === '/search' ? searchFilled : search"
        alt="Søgning"
      />
    </RouterLink>

    <!-- Liked -->
    <RouterLink to="/liked">
      <img
        :src="route.path === '/liked' ? likeFilled : like"
        alt="Synes godt om"
      />
    </RouterLink>

    <!-- Profil -->
    <RouterLink to="/profil">
      <img
        :src="route.path === '/profil' ? profilFilled : profil"
        alt="Profil"
      />
    </RouterLink>
  </nav>
</template>

<style scoped>
#bottom-bar {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #008080;
  padding: 1rem;
  margin-top: 1rem;
  position: fixed;
  width: 100%;
  bottom: 0;
}

/* Ikoner */
#bottom-bar img {
  width: 28px;
  height: 28px;
  filter: brightness(0) invert(1); /* gør ikonerne hvide */
  opacity: 0.9;
  transition: all 0.2s ease;
  cursor: pointer;
}

#bottom-bar img:hover {
  transform: scale(1.15);
}
</style>
