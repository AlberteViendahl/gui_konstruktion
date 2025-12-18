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
  <div class="container">
    <nav class="tabs mt-5 d-flex">
      <ul class="list-unstyled d-flex w-100 justify-content-evenly" role="tablist">
        <li role="presentation">
          <button id="info-tab" :class="{ active: activeTab === 'info' }" @click="activeTab = 'info'" role="tab">Information</button>
        </li>

        <li role="presentation">
          <button id="sales-tab" :class="{ active: activeTab === 'sales' }" @click="activeTab = 'sales'"role="tab">Mine salg</button>
        </li>
      </ul>
    </nav>

    <div class="tab-separator-bar w-100 px-5 mt-2 mb-4" :class="{ 'sales-active': activeTab === 'sales' }"></div>

    <section class="tab-content">

      <div v-if="activeTab === 'info'">
        <ProfileInfoCard :user="user" @profile-reload="handleProfileReload" />
      </div>

      <div v-else-if="activeTab === 'sales'">
        <ProfileMySales :user-id="user.userID" />
      </div>

    </section>
  </div>
</template>


<style scoped>
.container {
  margin-top: 120px;
}

.tab-separator-bar {
    height: 2px;
    background: linear-gradient(to right, #eee 50%, #eee 50%);
    transition: background 0.3s ease-in-out;
}

.tab-separator-bar.sales-active {
    background: linear-gradient(to right, #eee 50%, #000 50%); 
}

.tab-separator-bar:not(.sales-active) {
    background: linear-gradient(to right, #000 50%, #eee 50%);
}

nav button {
  border: none;
  background: transparent;
}

.tabs button.active {
    color: #000;
    font-weight: 600;
}

.tabs button {
    color: #888;
}
</style>