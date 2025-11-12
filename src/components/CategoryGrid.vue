<script>
import CategoryCard from './CategoryCard.vue';


const categories = [
  { title: 'Træ<br>& tømmer', url: '-', image: '/img/categoryImages/wood.jpg' },
  { title: 'Murværk<br> & tegl', url: '-', image: '/img/categoryImages/brick.jpg' },
  { title: 'Fundament<br>& sten', url: '-', image: '/img/categoryImages/concrete.jpg' },
  { title: 'Overflade- <br>behandling', url: '-', image: '/img/categoryImages/surface.jpg' },
  { title: 'Døre<br>& vinduer', url: '-', image: '/img/categoryImages/windows.png' },
  { title: 'Rør<br>& ledninger', url: '-', image: '/img/categoryImages/tubes.jpg' },
  { title: 'Maskiner<br>& værktøj', url: '-', image: '/img/categoryImages/tools.jpg' },
  { title: 'Beslag, skruer<br>& tilbehør', url: '-', image: '/img/categoryImages/bolts.jpg' },
  { title: 'Gratis<br>restmaterialer', url: '-', image: '/img/categoryImages/free.jpg' },
  { title: 'Inventar<br>& indretning', url: '-', image: '/img/categoryImages/renovation.jpg' },
  { title: 'Tag<br>& isolering', url: '-', image: '/img/categoryImages/roof.jpg' },
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
  <div>
    <h2 class="mt-4 mb-3">Udforsk kategorier</h2>
    
    <div class="row g-2">
      <div
        v-for="category in displayedCategories"
       :key="category.title"
       class="col-6 col-sm-6 col-md-4 col-lg-3"
      >
        <CategoryCard
        :title="category.title"
        :image="category.image"
        :category-link="category.url"
        />
      </div>
    </div>

    <div class="mt-2 text-primary fw-bold">
        <span 
          v-if="categories.length > initialDisplayCount" 
          @click="toggleDisplay" 
        >
          {{ isExpanded ? 'Se mindre -' : 'Se flere +' }}
        </span>
    </div>
  </div>
</template>


<style scoped>

</style>