<template>
  <form class="filter col-5 col-md-3 p-0">
    <label for="category-select" class="visually-hidden">Vælg kategori:</label>
    <select
      id="category-select"
      v-model="localCategory"
    >
      <option value="">Alle</option>
      <option value="træ & tømmer">Træ & tømmer</option>
      <option value="murværk & tegl">Murværk & tegl</option>
      <option value="tag & isolering">Tag & isolering</option>
    </select>
  </form>
</template>

<script>
export default {
  name: 'Filter',
  props: {
    modelValue: {
      type: String,
      default: ''
    }
  },
  emits: ['update-category', 'update:modelValue'],
  data() {
    return {
      localCategory: this.modelValue
    };
  },
  watch: {
    // Watch for prop changes and update local value
    modelValue: {
      handler(newValue) {
        this.localCategory = newValue;
      },
      immediate: true
    },
    // Watch for local changes and emit events
    localCategory(newValue) {
      this.$emit('update-category', newValue);
      this.$emit('update:modelValue', newValue);
    }
  }
};
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
