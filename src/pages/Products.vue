<script>
import ProductCard from '@/components/ProductCard.vue';

export default {
  name: 'Products',
  components: {
    ProductCard
  },
  mounted() {
    console.log('hello from products');
  }
}
</script>

<template>
    <ProductCard />
</template>

<style lang="css" scoped>
</style>