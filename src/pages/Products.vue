<template>
  <div>
    <h2>Produkter</h2>
    <div class="row">
      <div class="col-6 p-1" v-for="p in products" :key="p.id">
        <ProductCard
          :id="p.id"
          :title="p.title"
          :image="p.image"
          :price="p.price"
          :quantity="p.quantity"
          :material="p.material"
        />
      </div>
    </div>
  </div>
</template>


<script>
import ProductCard from '@/components/ProductCard.vue'

export default {
  name: 'Products',
  components: { ProductCard },
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
        description: 'Different types of pallets', 
        location: 'København, Syd',
        material: 'Træ' },

        { id: '3', 
        title: 'Tagsten', 
        image: '/img/tagsten.jpg', 
        price: 3000, 
        quantity: 50, 
        description: 'Durable roof tiles', 
        location: 'Aarhus, Jylland',
        material: 'Stenart' },

        { id: '4', 
        title: 'Træbrædder', 
        image: '/img/træ.jpg', 
        price: 500, 
        quantity: 40, 
        description: 'Træbrædder i forskellige størrelser', 
        location: 'Korsør, Sjælland',
        material: 'Træ' }
      ]
    }
  }
}
</script>
