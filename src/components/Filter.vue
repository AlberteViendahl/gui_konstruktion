<template>
  <div class="filters">
    <select v-model="localCategory">
      <option value="">Filter</option>
      <option value="træ">Træ</option>
      <option value="mursten">Mursten</option>
      <option value="cement">Cement</option>
    </select>

    <label>Maks pris:</label>
    <input
      class="pris"
      type="range"
      min="0"
      max="200"
      v-model="localMaxPrice"
    />
    <span>{{ localMaxPrice }} kr</span>
  </div>
</template>

<script setup>
import { ref, watch, defineProps, defineEmits } from "vue";

const props = defineProps({ selectedCategory: String, maxPrice: Number });
const emit = defineEmits(["update:selectedCategory", "update:maxPrice"]);

const localCategory = ref(props.selectedCategory);
const localMaxPrice = ref(props.maxPrice);

watch(localCategory, (val) => emit("update:selectedCategory", val));
watch(localMaxPrice, (val) => emit("update:maxPrice", val));
</script>

<style scoped>
.pris {
  accent-color: #008080;
}

input[type="text"] {
  width: 100%;
  max-width: 350px;
  padding: 8px;
  border: 2px solid #008080;
  border-radius: 5px;
  background: #008080;
}
</style>
