<!-- Options API: https://vuejs.org/guide/introduction.html -->
<script>
import BottomBar from "./components/BottomBar.vue";
import BackButton from "./components/BackButton.vue";

export default {
  name: "App",
  components: {
    BottomBar,
  },
};
</script>

<template>
  <div class="container">
    <RouterView />
    <BackButton />
  </div>
  <BottomBar />
</template>

<style lang="scss">
body {
  margin: 0px;
  padding: 0px;
}
</style>
