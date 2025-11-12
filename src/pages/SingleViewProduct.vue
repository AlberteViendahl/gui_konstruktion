<template>
  <div>
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
  </div>
</template>

<script>
import Product from '@/components/Product.vue'

export default {
  name: 'SingleViewProduct',
  components: { Product },
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
        image: '/img/mursten.jpg', 
        price: 3000, 
        quantity: 50, 
        description: 'Durable roof tiles', 
        location: 'Aarhus, Jylland', 
        material: 'Stenart' }
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

