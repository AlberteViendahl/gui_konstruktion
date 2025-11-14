<script>
import ProfileView from '@/components/ProfileView.vue';
import PageHeader from '@/components/PageHeader.vue';
export default {
  name: 'profile',
  components: {
    ProfileView,
    PageHeader,
  },
  methods: {
   
  },
  mounted() {
    console.log('hello from profilepage')
  }
}
</script>

<template>
  <section>
    <PageHeader title="Min profil" />
    <ProfileView />
  </section>
</template>

<style lang="scss" scoped>
</style>
