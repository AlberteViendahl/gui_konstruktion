<script setup>
import { defineProps } from 'vue';
import BackButton from './BackButton.vue';

const props = defineProps({
  title: {
    type: String,
    required: true,
    default: 'Side Titel'
  }
});
</script>

<template>
  <header class="page-header z-1 w-100 d-flex bg-white position-fixed align-items-center justify-content-between p-4">
  

    <h1 class="page-title text-center flex-grow-1 mx-3 my-0">
      {{ props.title }} 
    </h1>

  </header>
</template>

<style scoped>
.page-header {
  top: 0;
  left: 0;
  box-shadow: 0 2px 10px rgba(177, 176, 174, 0.59);
}

.page-title {
  font-weight: 600;
}

.header-left {
  left: 15px;
}
</style>