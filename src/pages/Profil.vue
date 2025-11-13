<script>
import ProfileView from '@/components/ProfileView.vue';
export default {
  name: 'profile',
  components: {
    ProfileView,
  },
  methods: {
   
  },
  mounted() {
    console.log('hello from profilepage')
  }
}
</script>

<template>
  <h1>Min Profil</h1>
  <ProfileView />
</template>

<style lang="scss" scoped>
h1 {
  color: blue;
}
</style>
