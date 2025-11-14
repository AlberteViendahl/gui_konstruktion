<template>
  <div class="card">
    <div class="card-body">
      <div class="product-detail">
        <img :src="image" class="card-img-top" :alt="title">
        <p class="card-text"> {{ location }}</p>
      <!-- Rundt ikon uden indhold -->
        <div class="d-flex justify-content-between">
          <h2>{{ title }}</h2>
          <Grading grading="B"/>
        </div>
        <p> {{ quantity }} stk</p>
        <p><strong>{{ price }} DKK</strong></p>
        <strong>Beskrivelse</strong>
        <p class="card-text">{{ description }}</p>
        <strong>Materiale</strong>
        <p class="card-text">{{ material }}</p>
      </div>
    </div>
    <ContactModal />
  </div>

</template>

<script>
import BackButton from './BackButton.vue';
import ContactModal from './ContactModal.vue';
import Grading from './Grading.vue';

export default {
  name: 'Product',
  components: {
    Grading,
    BackButton,
    ContactModal
  },
  props: {
    title: String,
    image: String,
    price: [Number, String],
    quantity: { type: [Number, String], default: 1 },
    description: { type: String, default: '' },
    material: { type: String, default: '' },
    location: { type: String, default: '' }
  }
}
</script>

<style scoped>
.card {
  padding: 10px; /* luft inde i kortet */
  border-radius: 0.75rem;
  /* box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2); */
  border: none;
  /* background-color: #FBF7EF; */
}
.card-img-top {
  height: 300px;
  object-fit: cover;
}
.bi-circle {
  float: right;
}
</style>