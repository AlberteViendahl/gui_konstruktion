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
    },
    handleDelete(){
      this.getproducts();
    },
  },
  mounted(){
     this.getproducts();
  }
}
</script>

<template>
  <section class="container product-layout-section mt-0 mx-0 mx-lg-auto bg-white rounded-2 p-3 position-relative">
    <ul class="product-grid list-unstyled">
      <li class="" v-for="p in products" :key="p.id">
        <ProductCard
          :id="p.prodID"
          :title="p.prodName"
          :image="p.image"
          :price="p.prodPrice"
          :quantity="p.prodAmount"
          :material="p.material"
          :my-product="true"
          @product-deleted="handleDelete"
        />
      </li>
    </ul>
    <AddProductForm />
  </section>
  
</template>


<style lang="scss" scoped>
.product-layout-section {
  margin: 0 auto;
  @media (min-width: 768px) {
    width: 60vw;
  }
}

.product-grid {
  display: grid;
  gap: 15px;
  justify-content: center; 
  justify-items: center;
  padding: 0;

  grid-template-columns: repeat(1, 1fr);

  @media (min-width: 485px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
}

li {
  width: 100%;
}
</style>