<script>
import ProfileInfoCard from './ProfileInfoCard.vue';

export default {
  name: 'ProfileView',
  components: {
    ProfileInfoCard,
  },
  data() {
    return {
      user: {
        id: 111,
        name: 'Søren Nielsen',
        address: 'Lysalleen 117, Roskilde',
        phone: '+45 40 81 00 32',
        email: 'soren.nielsen@eksempel.dk',
        photoUrl: '/img/soren.jpg' 
      }
    };
  }  
}
</script>

<template>
  <ProfileInfoCard :user="user" />
</template>


<style scoped>

</style>