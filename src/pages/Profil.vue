<script>
import ProfileView from '@/components/ProfileView.vue';
import DesktopProfileView from '@/components/DesktopProfileView.vue';
import PageHeader from '@/components/PageHeader.vue';

export default {
  name: 'profile',
  components: {
    ProfileView,
    PageHeader,
    DesktopProfileView,
  },
  methods: {
   
  },
  mounted() {
    
  }
}
</script>

<template>
  <section>
    <PageHeader title="Min profil" class="d-lg-none" />
    <ProfileView class="d-lg-none" />
    <DesktopProfileView class="d-none d-lg-flex" />
  </section>
</template>

<style lang="scss" scoped>
</style>
