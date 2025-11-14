<script>
import plus from '@/assets/icons/plus.svg';
import edit from '@/assets/icons/edit-icon.svg';
import ProductCard from '@/components/ProductCard.vue'

export default {
  name: 'ProfileMySales',
  components: {
    ProductCard,
  },
  data() {
    return {
      plusSvgPath: plus,
      editSvgPath: edit,
      products: [
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
        image: '/img/mursten.jpg', 
        price: 3000, 
        quantity: 50, 
        description: 'Durable roof tiles', 
        location: 'Aarhus, Jylland',
        material: 'Træ' },

        { id: '5', 
        title: 'Planker', 
        image: '/img/categoryImages/free.jpg', 
        price: 800, 
        quantity: 17, 
        description: 'Used wooden planks', 
        location: 'Horsens, Jylland',
        material: 'Træ' }
      ]
    }
  }
}
</script>

<template>
  <section class="bg-white rounded-2 p-3 position-relative">
    <ul class="row list-unstyled flex-wrap align-items-stretch">
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
      <button type="button" class="custom-btn" aria-label="Tilføj nyt produkt">
      <img :src="plusSvgPath" alt="Plus ikon" class="plus-icon rounded-circle bg-primary p-3"> 
    </button>
</template>


<style lang="scss" scoped>
    .plus-icon {
      // height: 50px;
      // width: auto;
      // box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    }
    .custom-btn {
        padding: 15px 15px;
        background-color: #008080;
        border: none;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: sticky;
        bottom: 80px;
        left: 100%;
    }
</style>