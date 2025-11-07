<!-- Composition API er stilen vi bruker, forklaring: https://vuejs.org/guide/introduction.html#which-to-choose -->
<script setup>
  import Navbar from './components/Navbar.vue';

</script>

<template>
  <Navbar />
  <RouterView />
</template>

<style lang="css">

  body {
    margin: 0px;
    padding: 0px;
  }

</style>
