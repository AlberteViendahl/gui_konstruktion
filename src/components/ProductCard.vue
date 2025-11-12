<script>
import Grading from './Grading.vue';

<script>
export default {
  name: 'ProductCard',
  components: {
    Grading
  },
  props: {
    id: String,
    title: String,
    image: String,
    price: [String, Number],
    quantity: { type: [String, Number], default: 1 }
  },
  data() {
    return {
      liked: false, // til at tracke om produktet er favoritter
    }
  },
   computed: {
    // heartClasses - computed property, 
    // der returnerer et objekt med klasser og deres betingelser
    heartClasses() {
      return {
        'bi-heart-fill': this.liked, // fyldt hjerte, hvis liked (true)
        'teal': this.liked,          // teal farve, hvis liked
        'bi-heart': !this.liked      // outline hjerte, hvis ikke liked, uden fyld (false)
      }
    }
  },
  methods: {
    goToProduct() {
      this.$router.push({ 
        name: 'SingleViewProduct', 
        params: { id: this.id } })
    },
    // Skifter liked mellem true og false. Dette trigger computed property 
    // heartClasses → hjertet skifter mellem fyldt og outline.
     toggleLike() {
      this.liked = !this.liked;
    }
  }
}
</script>

<template>
  <div class="card p-2">
   <!-- Her sættes billedet med justeret højde -->
    <img :src="image" class="card-img-top" :alt="title" />
    <div class="card-body">
      <div class="d-flex justify-content-between">
        <h5 class="card-title d-flex justify-content-between align-items-center">
          {{ title }}
        </h5>
        <Grading grading="A" />
      </div>
      <p class="text"> 
          {{ quantity }} stk 
      </p>
      <p class="card-text">
          {{ price }} DKK 
        <i class="bi bi-heart" v-on:click="toggleFavorite" ></i>
      </p>
    </div>
  </div>
</template>

.favorite:hover {
  transform: scale(1.2);
}

/* Fyldt hjerte når liked */
.teal {
  color: #008080; /* fyldt teal */
}
.bi-circle {
  float: right;
}

</style>