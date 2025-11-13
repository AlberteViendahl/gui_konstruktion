<template>
  <input type="text" v-model="localSearch" placeholder="Søg" />
</template>

<script setup>
import { ref, watch, defineProps, defineEmits } from "vue";

const props = defineProps({ search: String });
const emit = defineEmits(["update:search"]);

const localSearch = ref(props.search);

// send ændringer til parent
watch(localSearch, (val) => emit("update:search", val));
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  padding: 20px;
  min-height: 100vh;
}
input {
  display: block;
  width: 350px;
  margin: 20px auto;
  padding: 10px 45px;
  background: white;
  font-size: 16px;
  border: solid #008080;
  border-radius: 5px;
}
input:focus {
  outline: none;
  border: 2.5px solid #008080;
}

.item {
  width: 350px;
  margin: 0 auto 10px auto;
  padding: 10px 20px;
  border-radius: 5px;
}
.error {
  color: red;
}
</style>
