<script>

export default {
  name: 'ProductCard',
  props: {
    title: String,
    image: String,
    price: [String, Number],
    quantity: {
      type: [String, Number],
      default: 1 // hvis du ikke sender noget, vises "1" automatisk
    }
  },
  methods: {

  }
}
</script>

<template>
  <div class="card p-2">
   <!-- Her sættes billedet med justeret højde -->
    <img :src="image" class="card-img-top" :alt="title" />
    <div class="card-body">
      <h5 class="card-title d-flex justify-content-between align-items-center">
        {{ title }}
      </h5>
      <p class="text"> 
        {{ quantity }} stk 
    </p>
      <p class="card-text">
        {{ price }} DKK 
        <!-- &nbsp;
        &nbsp;
        &nbsp; -->
        <!-- Hjerte ikon -->
        <!-- toggleFavorite - er ikke implementeret endnu-->
       <i class="bi bi-heart" v-on:click="toggleFavorite" ></i>
    </p>
    </div>
  </div>
</template>


<style scoped>
    .card {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        transition: 0.3s;
        border-radius: 0.75rem; /* slightly rounded */
        background-color: #FBF7EF;
        border: none;
    }
    .card-text {
        font-size: 1.2em;
        color: #333;
        font-weight: bold;
    }
    .bi-heart {
        /* font-size: 1.5em; */
        color: #008080;
        cursor: pointer;
        float: right;
    }
    .card-img-top {
        height: 100px;      /* fast højde */
        object-fit: cover;  /* beskær billedet uden forvrængning */
    }
</style>