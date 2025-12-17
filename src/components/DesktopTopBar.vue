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
import bigLogo from "@/assets/icons/bigLogo.svg";
import bigtype from "@/assets/icons/big-logo-type.svg";

const route = useRoute();
</script>

<template>
  <nav id="top-bar" class="bg-primary position-fixed d-flex flex-row justify-content-between">
    <!-- Forside -->
    <RouterLink to="/">
      <img class="main-logo p-2 ms-4" :src="bigtype" alt="Logo" />
    </RouterLink>

    <section class="d-flex flex-row justify-content-between gap-5 me-5">
      <RouterLink to="/search" class="d-flex justify-content-between align-items-center">
        <img
          :src="route.path === '/search' ? searchFilled : search"
          alt="Søgning"
        />
        <p>Udforsk</p>
      </RouterLink>

    
      <RouterLink to="/liked" class="d-flex justify-content-between align-items-center">
        <img
          :src="route.path === '/liked' ? likeFilled : like"
          alt="Synes godt om"
        />
        <p>Synes godt om</p>
      </RouterLink>

    
      <RouterLink to="/profil" class="d-flex justify-content-between align-items-center">
        <img
          :src="route.path === '/profil' ? profilFilled : profil"
          alt="Profil"
        />
        <p>Min profil</p>
      </RouterLink>
    </section>

    
  </nav>
</template>

<style scoped>
#top-bar {
  position: absolute;
  top: 0;
  z-index: 2;
  width: 100%
}

p {
  color: white;
  margin: 0;
}
#top-bar section img {
  width: 28px;
  height: 28px;
  filter: brightness(0) invert(1); /* gør ikonerne hvide */
  opacity: 0.9;
  transition: all 0.2s ease;
  cursor: pointer;
  margin-right: 10px;
}
#top-bar section img:hover {
  transform: scale(1.15);
}
.main-logo {
  height: 60px;
  width: auto;
}
.router-link-active {
  text-decoration: none;
  p {
    border-bottom: 2px solid white;
  }
}
</style>
