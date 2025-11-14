<template>
  <section class="container p-4">
    <header class="page-header d-flex align-items-center justify-content-between p-4">
      <h1 class="homepage-logo text-center flex-grow-1 mx-3 my-0">
        <span class="text-primary">Re</span>Build
      </h1>
    </header>
    <ProductGrid />
  </section>
</template>

<script>
import ProductGrid from "@/components/ProductGrid.vue";
export default {
  name: "Products",
  components: { 
    ProductGrid,
  },
};
</script>
<style lang="scss" scoped>
  .homepage-logo {
    font-size: 56px;
  }
  .container {
    margin-bottom: 100px;
  }
</style>
