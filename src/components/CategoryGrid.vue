<script>
import CategoryCard from './CategoryCard.vue';


const categories = [
  { title: 'Træ & tømmer', url: '/fallback', image: '/img/categoryImages/wood.jpg' },
  { title: 'Murværk & tegl', url: '/fallback', image: '/img/categoryImages/brick.jpg' },
  { title: 'Fundament & sten', url: '/fallback', image: '/img/categoryImages/concrete.jpg' },
  { title: 'Overflade- behandling', url: '/fallback', image: '/img/categoryImages/surface.jpg' },
  { title: 'Døre & vinduer', url: '/fallback', image: '/img/categoryImages/windows.png' },
  { title: 'Rør & ledninger', url: '/fallback', image: '/img/categoryImages/tubes.jpg' },
  { title: 'Maskiner & værktøj', url: '/fallback', image: '/img/categoryImages/tools.jpg' },
  { title: 'Beslag, skruer & tilbehør', url: '/fallback', image: '/img/categoryImages/bolts.jpg' },
  { title: 'Gratis restmaterialer', url: '/fallback', image: '/img/categoryImages/free.jpg' },
  { title: 'Inventar & indretning', url: '/fallback', image: '/img/categoryImages/renovation.jpg' },
  { title: 'Tag & isolering', url: '/fallback', image: '/img/categoryImages/roof.jpg' },
];


export default {
  name: 'CategoryGrid',
  components: { 
    CategoryCard 
  },
  data() {
    return {
      categories: categories,
      initialDisplayCount: 4, 
      isExpanded: true
    };
  },
  computed: {
    displayedCategories() {
      if (this.isExpanded) {
        return this.categories;
      }
      return this.categories.slice(0, this.initialDisplayCount); 
    }
  },
  methods: {
    toggleDisplay() {
      this.isExpanded = !this.isExpanded;
    }
  }
}
</script>

<template>
  <section>
    <h2 class="mt-5 mb-3">Udforsk kategorier</h2>
    
    <ul class="row g-2 list-unstyled">
      <li
        v-for="category in displayedCategories"
       :key="category.title"
       class="col-6 col-sm-6 col-md-4 col-lg-3 title-break"
      >
        <CategoryCard
        :title="category.title"
        :image="category.image"
        :category-link="category.url"
        />
      </li>
    </ul>

    <button 
      v-if="categories.length > initialDisplayCount" 
      @click="toggleDisplay" 
      class="btn mt-2 p-0 text-primary fw-bold"
      :aria-expanded="isExpanded ? 'true' : 'false'"
      aria-controls="category-grid" 
    >
      {{ isExpanded ? 'Se mindre -' : 'Se flere +' }}
    </button>
        
  </section>
</template>


<style scoped>
.title-break {
  white-space: pre-line;
}
</style>