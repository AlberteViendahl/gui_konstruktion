<script>
import Product from '@/components/Product.vue'
import BackButton from '@/components/BackButton.vue'

export default {
  name: 'SingleViewProduct',
  components: { 
    Product,
    BackButton
  },

  data() {
    return {
      product: null
    }
  },

  async mounted() {
    const id = this.$route.params.id
    console.log(this.product)


    try {
      const response = await fetch(`https://rebuildapi.onrender.com/api/products/${id}`)

      if (!response.ok) {
        throw new Error('Produkt ikke fundet')
      }

      this.product = await response.json()

    } catch (error) {
      console.error('Fejl ved hentning af produkt:', error)
      this.product = null
    }
  }
}
</script>

<template>
  <section>
    
    <Product
      v-if="product"
      :title="product.prodName"
      :image="product.prodImage?.[0]"
      :images="product.prodImage"
      :price="product.prodPrice"
      :quantity="product.prodAmount"
      :quantityvalue="product.unit"
      :description="product.prodDesc"
      :location="product.prodLocation"
      :material="product.material"
      :height="product.height"
      :width="product.width"
      :length="product.length"
      :weight="product.weight"
    />

    <p v-else>Produkt ikke fundet</p>
    <BackButton />
  </section>
</template>

<style scoped>
  
</style>


