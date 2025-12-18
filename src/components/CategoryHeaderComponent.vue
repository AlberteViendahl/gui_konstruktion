<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps({
  // kategorinavn fra URL
  title: {
    type: String,
    required: true,
    default: ''
  },
  // eventuel prop til API integrering
  apiImage: {
    type: String,
    default: ''
  }
});

// billeder mappet til titler
const localCategoryAssets = {
  'alle kategorier': '/img/categoryImages/allcategories.jpg',
  'træ & tømmer': '/img/categoryImages/wood.jpg',
  'murværk & tegl': '/img/categoryImages/brick.jpg',
  'fundament & sten': '/img/categoryImages/concrete.jpg',
  'overflade- behandling': '/img/categoryImages/surface.jpg',
  'døre & vinduer': '/img/categoryImages/windows.png',
  'rør & ledninger': '/img/categoryImages/tubes.jpg',
  'maskiner & værktøj': '/img/categoryImages/tools.jpg',
  'beslag, skruer & tilbehør': '/img/categoryImages/bolts.jpg',
  'gratis restmaterialer': '/img/categoryImages/free.jpg',
  'inventar & indretning': '/img/categoryImages/renovation.jpg',
  'tag & isolering': '/img/categoryImages/roof.jpg',
};

const backgroundImage = computed(() => {
  const key = props.title.toLowerCase().trim();
  
  // logik og ting til efter API integrering
  return localCategoryAssets[key] || props.apiImage || '';
});
</script>

<template>
  <header 
    class="page-header d-flex align-items-end"
    :class="{ 'has-bg': backgroundImage }"
    :style="backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}"
  >
    <h1 class="page-title pb-3 ps-2 mx-3 my-0">
      {{ props.title }}
    </h1>
  </header>
</template>

<style lang="scss" scoped>
.page-header {
  width: 100%;
  background-size: cover;
  background-color: rgba(0, 0, 0, 0.51); 
  background-blend-mode: multiply; 
  overflow: hidden;
  margin-top: 0;
  height: 150px;

  @media (min-width: 992px) {
    height: 150px;
    margin-top: 35px;
  }

  &.has-bg {
    color: white;
    .page-title {
      text-shadow: 0 2px 10px rgba(0, 0, 0, 0.8);
    }
  }
}


.page-title {
  text-transform: capitalize;
}
</style>