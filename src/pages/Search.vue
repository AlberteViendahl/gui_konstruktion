<script>
  import CategoryGrid from '@/components/CategoryGrid.vue';

export default {
  name: 'search',
  components: {
    CategoryGrid,
  },
  methods: {
   
  },
  mounted() {
    console.log('hello from searchpage')
  }
}
</script>

<template>
  <h1>Dette er Søgning</h1>
  <CategoryGrid />
</template>

<style lang="scss" scoped>
h1 {
  color: blue;
}
</style>
