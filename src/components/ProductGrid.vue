<script>
import ProductCard from "./ProductCard.vue";
import SearchComponent from "@/components/SearchComponent.vue";
import Filter from "@/components/Filter.vue";

export default {
  name: "Products",
  components: {
    ProductCard,
    Filter,
    SearchComponent,
    },
  data() {
    return {
      products: [
        {
          id: "1",
          title: "Røde mursten",
          image: "/img/mursten.jpg",
          price: 2000,
          quantity: 20,
          description: "High-quality red bricks",
          location: "Roskilde, Sjælland",
          material: "Sten",
        },

        {
          id: "2",
          title: "Paller",
          image: "/img/paller.jpg",
          price: 1500,
          quantity: 5,
          description: "Different types of pallets",
          location: "København, Syd",
          material: "Træ",
        },

        {
          id: "3",
          title: "Tagsten",
          image: "/img/mursten.jpg",
          price: 3000,
          quantity: 50,
          description: "Durable roof tiles",
          location: "Aarhus, Jylland",
          material: "Træ",
        },
      ],
    };
  },
};
</script>

<template>
  <section>
    <h2>Produkter</h2>
    <form class="d-flex gap-2 mt-4">
      <SearchComponent @update-search="search = $event" />
      <Filter @update-category="selectedCategory = $event" />
    </form>
    <ul class="row list-unstyled">
      <li class="col-6 p-1" v-for="p in products" :key="p.id">
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

</style>
