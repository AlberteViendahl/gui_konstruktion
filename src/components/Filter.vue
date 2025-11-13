<template>
  <div class="filter">
    <select
      v-model="localCategory"
      @change="$emit('update-category', localCategory)"
    >
      <option value="">Alle</option>
      <option value="træ">Træ</option>
      <option value="mursten">Mursten</option>
      <option value="cement">Cement</option>
    </select>
  </div>
</template>

<script setup>
import { ref } from "vue";
const localCategory = ref("");
</script>

<style scoped>
.filter {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
}
select {
  padding: 8px;
  border-radius: 5px;
  border: 2px solid #008080;
}
</style>
