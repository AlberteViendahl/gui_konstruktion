<template>
  <div class="product-container">
    <div class="gallery-wrapper mb-2 mt-lg-5">
      <div class="main-image position-relative">
        <img :src="activeImage || images[0] || image" :alt="title">
        <div class="position-absolute grade-on-image"><Grading grading="B"/></div>
      </div>
      
      <div class="thumbnail-list">
        <div 
        v-for="(img, index) in images.slice(0, 4)" 
        :key="index" 
        class="thumbnail" 
        @click="activeImage = img"
        :class="{ 'is-active': activeImage === img }"
        >
          <img :src="img" :alt="title + ' billede ' + index">
        </div>
      </div>
    </div>

    <div class="product-header mb-4">
      <div class="location-text fs-5 mb-4 d-flex gap-2 align-items-center">
        <img :src="locationIcon" alt="lokationsikon">
        <p class="m-0">{{ location }}</p>
      </div>
      <h1 class="product-title mb-1">{{ title }}</h1>
      <p class="quantity-text fs-5 fw-bold mb-3">{{ quantity }} stk</p>
      <h2 class="price-tag fw-bold">{{ price }} DKK</h2>
    </div>

    <div class="description-section mb-5">
      <h3 class="section-title">Beskrivelse</h3>
      <p class="card-text description-body">{{ description }}</p>
    </div>

    <div class="d-flex justify-content-center mb-5">
      <ContactModal />
    </div>

    <div class="specs-section">
      <h3 class="section-title">Specifikationer</h3>
      <table class="table table-specs">
        <tbody>
          <tr>
            <td>Kategori</td>
            <td>Træ & tømmer</td> </tr>
          <tr v-if="material">
            <td>Materiale</td>
            <td>{{ material }}</td>
          </tr>
          <tr v-if="location">
            <td>Lokation</td>
            <td>{{ location }}</td>
          </tr>
          <tr>
            <td>Kvalitet</td>
            <td><Grading grading="B"/></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import ContactModal from './ContactModal.vue';
import Grading from './Grading.vue';
import locationIcon from "@/assets/icons/location.svg";

export default {
  name: 'Product',
  components: {
    Grading,
    ContactModal,

  },
  props: {
    title: String,
    image: String,
    images: {
      type: Array,
      default: () => []
    },
    price: [Number, String],
    quantity: { type: [Number, String], default: 1 },
    description: { type: String, default: '' },
    material: { type: String, default: '' },
    location: { type: String, default: '' }
  },
  data() {
    return {
      activeImage: null,
      locationIcon: locationIcon,
    }
  }
}
</script>

<style scoped lang="scss">
.product-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
}

.grade-on-image {
  top: 305px;
  right: 10px;
  @media (min-width: 992px) {
    top: 410px;
  right: 10px;
  }
}

.quantity-text {
  color: #a64b2a;
}

.location-text {
  color: #008080;
  img {
    height: 28px;
  }
}

.gallery-wrapper {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  .thumbnail-list {
    display: flex;
    flex-direction: row;
    gap: 10px;
    justify-content: flex-start;
    overflow-x: auto;
    padding-bottom: 10px;
  }
  .thumbnail img{
    width: 70px;
    height: 70px;
    object-fit: cover;
    cursor: pointer;
    border-radius: 4px;
    &:hover { opacity: 0.8; }
  }

  .main-image img {
    width: 100%;
    height: 350px;
    object-fit: cover;
    border-radius: 4px;
  }

  @media (min-width: 991px) {
    grid-template-columns: 1fr 100px;
    .thumbnail-list {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .thumbnail img {
      width: 100%;
      height: 70px;
      object-fit: cover;
      cursor: pointer;
      border-radius: 4px;
      &:hover { opacity: 0.8; }
    }

    .main-image img {
      height: 450px;
    }
  }
}

.table-specs {
  width: 100%;
  border-collapse: collapse;
  
  tr:nth-child(odd) {
    background-color: #FBF7EF;
  }
  
  td {
    padding: 12px 15px;
    border: none;
    background: transparent;
    &:first-child {
      font-weight: 600;
      width: 40%;
    }
  }
}

.description-body {
  line-height: 1.6;
  color: #333;
}
</style>