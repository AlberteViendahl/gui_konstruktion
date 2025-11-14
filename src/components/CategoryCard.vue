<script>
export default {
  name: 'CategoryCard',
  props: {
    title: {
      type: String
    },
    image: {
      type: String
    },
    categoryLink: {
      type: [String, Object], 
      default: '#' 
    }
  },
  methods: {
  
  }
}
</script>

<template>
  <router-link :to="categoryLink" class="category-card text-white text-decoration-none">
    <figure class="card-image m-0 d-flex align-items-end overflow-hidden rounded-2" :style="{ backgroundImage: 'url(' + image + ')' }">
      <figcaption class="card-title-overlay d-flex align-items-end mb-3 ms-3">
        <h2 class="m-0 pe-3">{{ title }}</h2>
      </figcaption>
    </figure>
  </router-link>
</template>


<style scoped>
.category-card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.category-card:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.25);
    transform: translateY(-2px);
}

.card-image {
  height: 85px;
  background-size: cover;
  background-color: rgba(0, 0, 0, 0.51); 
  background-blend-mode: multiply; 
}

.category-card:hover .card-image {
  transform: scale(1.05);
}

.card-title-overlay {
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
}

.card-title-overlay h2 {
  font-size: 20px;
  line-height: 20px;
}

</style>