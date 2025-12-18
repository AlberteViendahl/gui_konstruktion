<script>
import ProfileInfoCard from './ProfileInfoCard.vue';
import ProfileMySales from './ProfileMySales.vue';

export default {
  name: 'ProfileView',
  components: {
    ProfileInfoCard,
    ProfileMySales,
  },
  data() {
    return {
      activeTab: 'info',
      user: {
        userID: 1,
        name: '',
        email: '',
        phone: '',
        address: '',
        photoUrl: ''
      }
    };
  },
  methods: {

    async fetchUserData() {
      console.log('Henter brugerdata fra API...');

      try {
        //const response = await fetch(`http://localhost:8080/api/users/${this.user.userID}`);
        const response = await fetch(`https://rebuildapi.onrender.com/api/users/${this.user.userID}`);

        if (!response.ok) {
          throw new Error(`Fejl ved hentning: ${response.status}`);
        }

        const data = await response.json();

        Object.assign(this.user, {
          userID: data.userID,
          name: data.userName,
          email: data.userEmail,
          phone: data.userPhone,
          address: data.userAddress,
          photoUrl: data.userImage
        });

        console.log('Brugerdata hentet.');
      } 
      catch (error) {
        console.error('Kunne ikke hente brugerdata:', error);

        Object.assign(this.user, {
          name: 'Fejl ved indlæsning',
          email: '',
          phone: '',
          address: '',
          photoUrl: '/img/placeholder.jpg'
        });
      }
    },

    handleProfileReload() {
      this.fetchUserData();
    }
  },

  mounted() {
    this.fetchUserData();
  }
}
</script>

<template>
  <div class="container d-flex flex-column align-items-center">
    <section class="row tab-content">

      <div>
        <ProfileInfoCard :user="user" @profile-reload="handleProfileReload" />
      </div>

      <div>
        <ProfileMySales :user-id="user.userID" />
      </div>

    </section>
  </div>
</template>


<style scoped>
.container {
  margin-top: 80px;
  margin-bottom: 120px;
}
</style>