<script>
import ProductCard from "./ProductCard.vue";
import SearchComponent from "@/components/SearchComponent.vue";
import Filter from "@/components/Filter.vue";

export default {
  name: "ProductGrid",
  components: {
    ProductCard,
    Filter,
    SearchComponent,
  },
  props: {
    categoryFilter: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      search: '',
      localSelectedCategory: '',
      products: [
        { id: '1', 
        title: 'Røde mursten', 
        image: '/img/mursten.jpg', 
        price: 2000, 
        quantity: 20, 
        description: 'High-quality red bricks', 
        location: 'Roskilde, Sjælland',
        material: 'Sten',
        category: 'murværk & tegl' },

        { id: '2', 
        title: 'Paller', 
        image: '/img/paller.jpg', 
        price: 1500, 
        quantity: 5, 
        description: 'Different types of pallets', 
        location: 'København, Syd',
        material: 'Træ',
        category: 'træ & tømmer' },

        { id: '3', 
        title: 'Tagsten', 
        image: '/img/tagsten.jpg', 
        price: 3000, 
        quantity: 50, 
        description: 'Durable roof tiles', 
        location: 'Aarhus, Jylland',
        material: 'Stenart',
        category: 'tag & isolering' },

        { id: '4', 
        title: 'Brædder', 
        image: '/img/træ.jpg', 
        price: 500, 
        quantity: 40, 
        description: 'Træbrædder i forskellige størrelser', 
        location: 'Korsør, Sjælland',
        material: 'Træ',
        category: 'træ & tømmer' }
      ],
    };
  },
  computed: {
    filteredProducts() {
      let filtered = this.products;

      // Filter by URL category (from parent)
      if (this.categoryFilter) {
        filtered = filtered.filter(product => 
          product.category.toLowerCase().includes(this.categoryFilter.toLowerCase())
        );
      }

      // Filter by local form category
      if (this.localSelectedCategory) {
        filtered = filtered.filter(product => 
          product.category.toLowerCase().includes(this.localSelectedCategory.toLowerCase())
        );
      }

      // Filter by search text
      if (this.search) {
        filtered = filtered.filter(product =>
          product.title.toLowerCase().includes(this.search.toLowerCase()) ||
          product.material.toLowerCase().includes(this.search.toLowerCase()) ||
          product.description.toLowerCase().includes(this.search.toLowerCase())
        );
      }

      return filtered;
    },
    // Computed property to show which filter is active
    activeFilter() {
      return this.categoryFilter || this.localSelectedCategory;
    }
  },
  methods: {
    updateSearch(searchValue) {
      this.search = searchValue;
    },
    updateCategory(categoryValue) {
      this.localSelectedCategory = categoryValue;
    },
    clearAllFilters() {
      this.search = '';
      this.localSelectedCategory = '';
      // Emit to parent to clear URL filter
      this.$emit('clear-filters');
    }
  },
  watch: {
    // When URL category changes, update the dropdown to match
    categoryFilter: {
      handler(newCategoryFilter) {
        if (newCategoryFilter && !this.localSelectedCategory) {
          // Set the dropdown to match URL filter
          this.localSelectedCategory = newCategoryFilter;
        }
      },
      immediate: true
    }
  }
};
</script>

<template>
  <section>
    <h2>Produkter</h2>
    
    <!-- Filter indicator - now in ProductGrid -->
    <div v-if="activeFilter || search" class="filter-indicator mb-3">
      <span v-if="activeFilter" class="badge bg-primary me-2">
        Filtreret: {{ activeFilter }}
      </span>
      <span v-if="search" class="badge bg-info me-2">
        Søger: {{ search }}
      </span>
      <button @click="clearAllFilters" class="btn btn-danger btn-sm btn-outline-secondary">
        Fjern alle filtre
      </button>
    </div>
    
    <form class="d-flex gap-2 mt-4">
      <SearchComponent @update-search="updateSearch" />
      <Filter 
        :model-value="localSelectedCategory" 
        @update-category="updateCategory" 
      />
    </form>
    <ul class="row list-unstyled">
      <li class="col-6 p-1" v-for="p in filteredProducts" :key="p.id">
        <ProductCard
          :id="p.id"
          :title="p.title"
          :image="p.image"
          :price="p.price"
          :quantity="p.quantity"
          :material="p.material"
        />
      </li>
    </ul>
  </section>
</template>

<style scoped>
.card {
  background-color: #FBF7EF;
  border-radius: 0.75rem;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  border: none;
}
</style>
