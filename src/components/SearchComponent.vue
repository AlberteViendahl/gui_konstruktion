<script setup>
  import { ref } from "vue";
  const localSearch = ref("");
</script>

<template>
  <form class="col-6 col-md-8 p-0">
    <input class="w-100 px-3 py-2 rounded-pill mb-3" type="text" v-model="localSearch" placeholder="Søg efter materiale" aria-label="Søg efter materiale" @input="$emit('update-search', localSearch)"/>
  </form>
</template>

<style scoped>
input {
  border: 2px solid #008080;
}
</style>
