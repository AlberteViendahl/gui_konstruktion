<template>
  <section>
    <PageHeader title="Produkt" />
    <Product
      v-if="product"
      :title="product.title"
      :image="product.image"
      :price="product.price"
      :quantity="product.quantity"
      :description="product.description"
      :location="product.location"
      :material="product.material"
    />
    <p v-else>Produkt ikke fundet</p>
    <BackButton />
  </section>
</template>

<style scoped>
  section {
    margin-top: 100px;
  }
</style>

<script>
import Product from '@/components/Product.vue'
import PageHeader from '@/components/PageHeader.vue';
import BackButton from '@/components/BackButton.vue';

export default {
  name: 'SingleViewProduct',
  components: { 
    Product,
    PageHeader,
    BackButton
  },

  data() {
    return {
      products: [
        { id: '1', 
        title: 'Røde mursten', 
        image: '/img/mursten.jpg', 
        price: 2000, 
        quantity: 20, 
        description: 'High-quality red bricks', 
        location: 'Roskilde, Sjælland', 
        material: 'Sten' },

        { id: '2', 
        title: 'Paller', 
        image: '/img/paller.jpg', 
        price: 1500, 
        quantity: 5, 
        description: 'Foskellige type paller', 
        location: 'København, Syd', 
        material: 'Træ' },

        { id: '3', 
        title: 'Tagsten', 
        image: '/img/tagsten.jpg', 
        price: 3000, 
        quantity: 50, 
        description: 'Durable roof tiles', 
        location: 'Aarhus, Jylland',
        material: 'Træ' },


        { id: '4', 
        title: 'Træbrædder', 
        image: '/img/træ.jpg', 
        price: 500, 
        quantity: 40, 
        description: 'Træbrædder i forskellige størrelser Træbrædder i forskellige størrelser Træbrædder i forskellige størrelser', 
        location: 'Korsør, Sjælland',
        material: 'Træ' }
      ],
      product: null
    }
  },
  mounted() {
    const id = this.$route.params.id
    this.product = this.products.find(p => p.id === id)
  }
}
</script>