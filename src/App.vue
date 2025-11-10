<!-- Options API: https://vuejs.org/guide/introduction.html -->
<script>
import Navbar from './components/Navbar.vue';

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<template>
  <Navbar />
  <div class="container-fluid">
    <!-- f.eks Products -->
    <RouterView /> 
  </div>
</template>

<style lang="css">

  body {
    margin: 0px;
    padding: 0px;
  }

</style>
