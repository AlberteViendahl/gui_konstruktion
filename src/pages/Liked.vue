<template>
  <PageHeader title="Synes godt om" class="d-lg-none" />
  <div class="container pt-5 mt-5 ">
    <div class="row">
      <div class="col-6 p-1" v-for="p in likedProducts" :key="p.id">
        <ProductCard
          :id="p.id"
          :title="p.title"
          :image="p.image"
          :price="p.price"
          :quantity="p.quantity"
          :material="p.material"
          :initial-liked="true"
        />
      </div>
    </div>
  </div>
</template>

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
