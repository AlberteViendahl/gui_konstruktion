<script>
import plus from '@/assets/icons/plus.svg';
import edit from '@/assets/icons/edit-icon.svg';
import ProductCard from '@/components/ProductCard.vue'
import AddProductForm from './AddProductForm.vue';

export default {
  name: 'ProfileMySales',
  components: {
    ProductCard,
    AddProductForm
  },
  data() {
    return {
      plusSvgPath: plus,
      editSvgPath: edit,
      products: [],
    }
  },
  methods: {
    async getproducts(){
      try {
        const response = await fetch('http://localhost:8080/api/products');
        this.products = await response.json();
      } catch(error) {
        console.log(error);
      }
    }
  },
  mounted(){
    this.getproducts();
  }
}
</script>

<template>
  <section class="bg-white rounded-2 p-3 position-relative h-100">
    <ul class="row list-unstyled flex-wrap align-items-stretch">
      <li class="col-6 p-1" v-for="p in products" :key="p.id">
        <ProductCard
          :id="p.prodID"
          :title="p.prodName"
          :image="p.image"
          :price="p.prodPrice"
          :quantity="p.prodAmount"
          :material="p.material"
          :my-product="true"
        />
      </li>
    </ul>
  </section>
  <AddProductForm />
</template>


<style lang="scss" scoped>
    .h-100 {
      min-height: 100vh;
    }
</style>