<template>
  <input
    type="text"
    v-model="localSearch"
    placeholder="Søg efter materiale..."
    @input="$emit('update-search', localSearch)"
  />
</template>

<script setup>
import { ref } from "vue";
const localSearch = ref("");
</script>

<style scoped>
input {
  width: 100%;
  max-width: 350px;
  padding: 10px;
  border: 2px solid #008080;
  border-radius: 5px;
  margin-bottom: 15px;
}
</style>
