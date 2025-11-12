<script>
import Grading from './Grading.vue';

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
  <div class="card p-2" @click="goToProduct">
   <!-- Her sættes billedet med justeret højde -->
    <img :src="image" class="card-img-top" :alt="title" />
    <div class="card-body" >
      <div class="d-flex justify-content-between">
        <h5 class="card-title d-flex justify-content-between align-items-center">
          {{ title }}
        </h5>
        <Grading grading="A" />
      </div>
      <p class="text"> 
          {{ quantity }} stk 
      </p>
      <div class="d-flex justify-content-between align-items-center">
        <p class="card-text p-0 m-0">
            {{ price }} DKK 
        </p>
        <button class="custom-btn" @click.stop="toggleLike">
          <i v-if="!this.liked" class="bi bi-heart teal"></i>
          <i v-if="this.liked" class="bi bi-heart-fill teal"></i>
        </button>
      </div>

    </div>
  </div>
</template>


<style scoped>
.product-card {
  padding: 10px; /* luft inde i kortet */
  border-radius: 0.75rem;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  border: none;
  background-color: #FBF7EF;
}
.card-img-top {
  height: 100px;
  object-fit: cover;
}
/* Hjerte ikon styling */
.favorite {
  cursor: pointer;
  float: right;
  font-size: 1.5rem;
  transition: transform 0.2s, color 0.2s;
  color: #008080; /* standard teal */
}

.favorite:hover {
  transform: scale(1.2);
}

/* Fyldt hjerte når liked */
.teal {
  color: #008080; /* fyldt teal */
}

.custom-btn {
  background-color: transparent;
  border: none;
}

</style>