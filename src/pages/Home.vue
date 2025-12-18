<script>
import ProductGrid from "@/components/ProductGrid.vue";
import CategoryHead from "@/components/CategoryHeaderComponent.vue";

export default {
  name: "Home",
  components: { 
    ProductGrid,
    CategoryHead,
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
    },
    handleCategoryChange(newCategory) {
      this.selectedCategory = newCategory;
    },
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

<template>
  <section class="container px-4 d-flex flex-column align-items-center">
    <header v-if="!selectedCategory" class="page-header d-flex flex-column align-items-center p-4 mt-0 mb-4 mb-lg-0 mt-lg-5">
      <h1 class="homepage-logo text-center flex-grow-1 mx-3 my-0">
        <span class="text-primary">Re</span>Build
      </h1>
      <p class="fs-5 text-center mt-2 by-line">Køb og salg af brugte<br>byggematerialer</p>
    </header>
    <CategoryHead v-if="selectedCategory" class="grid-width"
    :title="selectedCategory || 'Alle kategorier'"
    />

    <ProductGrid class="grid-width"
      :category-filter="selectedCategory" 
      @clear-filters="clearFilter"
      @category-changed="handleCategoryChange"
    />
    
  </section>
</template>
<style lang="scss" scoped>
  .homepage-logo {
    font-size: 56px;
  }
  .container {
    margin-bottom: 100px;
  }
  .by-line {
    line-height: 25px;
    font-weight: 500;
  }
  .grid-width {
    @media (min-width: 768px) {
    width: 75%;
  }
  }
</style>
