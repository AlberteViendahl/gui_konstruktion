<template>
  <section class="container p-4">
    <header class="page-header d-flex align-items-center justify-content-between p-4">
      <h1 class="homepage-logo text-center flex-grow-1 mx-3 my-0">
        <span class="text-primary">Re</span>Build
      </h1>
    </header>

    <ProductGrid 
      :category-filter="selectedCategory" 
      @clear-filters="clearFilter"
    />
    
  </section>
</template>

<script>
import ProductGrid from "@/components/ProductGrid.vue";

export default {
  name: "Home",
  components: { 
    ProductGrid,
  },
  data() {
    return {
      selectedCategory: ''
    };
  },
  methods: {
    clearFilter() {
      this.selectedCategory = '';
      // Remove category from URL
      this.$router.push({ name: 'Home' });
    }
  },
  mounted() {
    // Check for category in URL when component mounts aka when page loads
    if (this.$route.query.category) {
      this.selectedCategory = this.$route.query.category;
    }
  },
  watch: {
    // Watch for route changes (browser back/forward)
    '$route.query.category': {
      handler(newCategory) {
        this.selectedCategory = newCategory || '';
      },
      immediate: true
    }
  }
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
