<template>
  <section class="container shop">
    
    <PageHeader title="Udforsk" class="d-lg-none" />
    <section class="row justify-content-center">
      <p class="col-10 col-md-8 text-center fw-bolder m-0">
        Vi har inddelt alle materialer i klare kategorier, så du nemt og hurtigt kan finde det dit projekt kræver.
      </p>
    </section>
    <CategoryGrid />
    <section class="mt-3 mt-md-5">
      <h2>Alle produkter</h2>
      <ProductGrid />
    </section>
    
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
import SearchComponent from "@/components/SearchComponent.vue";
import CategoryGrid from "@/components/CategoryGrid.vue";
import Filter from "@/components/Filter.vue";
import PageHeader from '@/components/PageHeader.vue';
import ProductGrid from "@/components/ProductGrid.vue";

// Hardcodede materialer
const produkter = [
  { id: 1, name: "Træplade", category: "træ", price: 80 },
  { id: 2, name: "Mursten", category: "mursten", price: 20 },
  { id: 3, name: "Cement", category: "cement", price: 50 },
  { id: 4, name: "Træbjælke", category: "træ", price: 120 },
];

const search = ref("");
const selectedCategory = ref("");

// Computed filtrering
const filteredProducts = computed(() => {
  return produkter.filter((p) => {
    const matchesSearch = p.name
      .toLowerCase()
      .includes(search.value.toLowerCase());
    const matchesCategory =
      !selectedCategory.value || p.category === selectedCategory.value;
    return matchesSearch && matchesCategory;
  });
});
</script>

<style scoped>
.shop {
  max-width: 800px;
  margin-top: 80px;
  padding: 20px;
  margin-bottom: 100px;
}

.material-list {
  margin-top: 20px;
}

.material-item {
  background: #008080;
  color: white;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
}
</style>
