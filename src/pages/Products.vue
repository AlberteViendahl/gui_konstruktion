<script>
import ProductCard from '@/components/ProductCard.vue';

export default {
  name: 'Products',
  components: { ProductCard },
  methods: {
   
  },
  mounted() {
    console.log('hello from products')
  }
}
</script>

<template>
  <div class="container py-4">
    <h2 class="mb-4">Produkter</h2>
    <div class="row g-3"> <!-- row med gap -->

      <div class="col-6 col-sm-6 col-md-4 col-lg-3">
        <ProductCard
          title="Røde Mursten"
          image="/img/mursten.jpg"
          price="200"
          quantity="100"
        />
      </div>

      <div class="col-6 col-sm-6 col-md-4 col-lg-3">
        <ProductCard
          title="Paller"
          image="/img/paller.jpg"
          price="500"
          quantity="12"
        />
      </div>
      <!-- Flere produkter kan tilføjes her -->
    </div>
  </div>
</template>

<style scoped>
</style>
