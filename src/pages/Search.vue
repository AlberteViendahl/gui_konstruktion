<template>
  <div class="shop">
    <h1>Kategori</h1>
    <p>
      Her finder du vores komplette, sorterede udvalg af genbrugte
      byggematerialer. <br /><br />
      Vi har inddelt alle materialer i klare kategorier, så du nemt og hurtigt
      kan finde den præcise mængde, størrelse og kvalitet, dit projekt kræver.
      <br /><br />
      Vælg en kategori herunder og begynd at udforske produkter.
    </p>

    <!-- Search og Filter -->
    <div class="fands">
      <SearchComponent @update-search="search = $event" />
      <Filter @update-category="selectedCategory = $event" />
    </div>

    <!-- Liste af filtrerede materialer -->
    <div class="material-list">
      <div v-for="p in filteredProducts" :key="p.id" class="material-item">
        {{ p.name }} ({{ p.category }}) - {{ p.price }} kr
      </div>

      <p v-if="!filteredProducts.length">Ingen materialer fundet...</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import SearchComponent from "@/components/SearchComponent.vue";
import Filter from "@/components/Filter.vue";

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
  margin: auto;
  padding: 20px;
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

.fands {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}
</style>
