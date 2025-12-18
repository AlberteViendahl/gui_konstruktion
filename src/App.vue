<!-- Options API: https://vuejs.org/guide/introduction.html -->
<script>
import BottomBar from "./components/BottomBar.vue";
import DesktopTopBar from "./components/DesktopTopBar.vue";

export default {
  name: "App",
  components: {
    BottomBar,
    DesktopTopBar,
  },
};
</script>

<template>
  <DesktopTopBar class="d-none d-lg-flex" />
  <div class="container main-container">
    <RouterView />
  </div>
  <BottomBar class="d-lg-none" />
</template>

<style lang="scss">
  body {
    margin: 0px;
    padding: 0px;
  }

  .main-container {
    display: flex;
    justify-content: center;
  }
</style>