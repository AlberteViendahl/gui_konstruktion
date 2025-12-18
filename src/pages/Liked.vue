<template>
  <PageHeader title="Synes godt om" class="d-lg-none" />
  <div class="container pt-5 mt-5 ">
    <div class="row">
      <ul class="product-grid list-unstyled">
      <li class="" v-for="p in likedProducts" :key="p.id">
          <ProductCard
            :id="p.id"
            :title="p.title"
            :image="p.image"
            :price="p.price"
            :quantity="p.quantity"
            :material="p.material"
            :initial-liked="true"
          />
      </li>
    </ul>
    </div>
  </div>
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

  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
}

li {
  width: 100%;
  max-width: 350px;
}
</style>

<script>
import PageHeader from '@/components/PageHeader.vue';
import ProductCard from '@/components/ProductCard.vue';

export default {
  name: "Liked",
  components: {
    PageHeader,
    ProductCard
  },
  data(){
    return {
      likedProducts: [
        { 
          id: '3', 
          title: 'Tagsten', 
          image: '/img/tagsten.jpg', 
          price: 3000, 
          quantity: 50, 
          description: 'Durable roof tiles', 
          location: 'Aarhus, Jylland',
          material: 'Træ',
          liked: true 
        },
        { 
          id: '4', 
          title: 'Træbrædder', 
          image: '/img/træ.jpg', 
          price: 500, 
          quantity: 40, 
          description: 'Træbrædder i forskellige størrelser Træbrædder i forskellige størrelser Træbrædder i forskellige størrelser', 
          location: 'Korsør, Sjælland',
          material: 'Træ' ,
          liked: true
        }
      ]
    }
  }
};
</script>
