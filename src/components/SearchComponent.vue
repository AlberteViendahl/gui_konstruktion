<template>
  <form>
    <input class="w-100 p-2 rounded-1 mb-3" type="text" v-model="localSearch" placeholder="Søg efter materiale" aria-label="Søg efter materiale" @input="$emit('update-search', localSearch)"/>
  </form>
</template>

<script setup>
  import { ref } from "vue";
  const localSearch = ref("");
</script>

<style scoped>
input {
  max-width: 350px;
  padding: 10px;
  border: 2px solid #008080;
}
</style>
