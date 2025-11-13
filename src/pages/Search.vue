<template>
  <div class="shop">
    <h1>Kategori</h1>
    <p>
      Her finder du vores komplette, sorterede udvalg af genbrugte
      byggematerialer. <br />
      <br />Vi har inddelt alle materialer i klare kategorier, så du nemt og
      hurtigt kan finde den præcise mængde, størrelse og kvalitet, dit projekt
      kræver. <br /><br />
      Vælg en katerori herunder og begynd at udforske produkter.
    </p>
    <!-- Search -->
    <SearchComponent v-model:search="search" />

    <!-- Filter -->
    <Filter
      v-model:selectedCategory="selectedCategory"
      v-model:maxPrice="maxPrice"
    />

    <!-- ProductCards -->
    <div class="product-list">
      <ProductCard
        v-for="product in filteredProducts"
        :key="product.id"
        :title="product.name"
        :image="product.image"
        :price="product.price"
      />
      <p v-if="filteredProducts.length === 0">Ingen produkter fundet!</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import SearchComponent from "@/components/SearchComponent.vue";
import Filter from "@/components/Filter.vue";
import ProductCard from "@/components/ProductCard.vue";

const produkter = [
  {
    id: 1,
    name: "Træplade",
    category: "træ",
    price: 80,
    image: "/images/trae.jpg",
  },
  {
    id: 2,
    name: "Mursten",
    category: "mursten",
    price: 20,
    image: "/images/mursten.jpg",
  },
  {
    id: 3,
    name: "Cement",
    category: "cement",
    price: 50,
    image: "/images/cement.jpg",
  },
  {
    id: 4,
    name: "Træbjælke",
    category: "træ",
    price: 120,
    image: "/images/traebjaelke.jpg",
  },
];

const search = ref("");
const selectedCategory = ref("");
const maxPrice = ref(200);

const filteredProducts = computed(() => {
  return produkter.filter((p) => {
    const matchesSearch = p.name
      .toLowerCase()
      .includes(search.value.toLowerCase());
    const matchesCategory =
      !selectedCategory.value || p.category === selectedCategory.value;
    const matchesPrice = p.price <= maxPrice.value;
    return matchesSearch && matchesCategory && matchesPrice;
  });
});
</script>
