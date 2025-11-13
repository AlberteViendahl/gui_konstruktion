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
  <div class="container">
    <nav class="tabs mt-4 d-flex justify-content-evenly">
        <button :class="{ active: activeTab === 'info' }" @click="activeTab = 'info'">
            Information
        </button>

        <button :class="{ active: activeTab === 'sales' }" @click="activeTab = 'sales'">
            Mine salg
        </button>
    </nav>
    <div class="tab-separator-bar px-5 mt-2" :class="{ 'sales-active': activeTab === 'sales' }"></div>
    
    <section class="tab-content">
        <div v-if="activeTab === 'info'">
          <ProfileInfoCard :user="user" />
        </div>

        <div v-else-if="activeTab === 'sales'">
          <ProfileMySales :user-id="user.id" />
        </div>
    </section>
  </div>
</template>


<style scoped>

.tab-separator-bar {
    height: 2px;
    width: 100%;
    background: linear-gradient(to right, #eee 50%, #eee 50%);
    margin-top: 0;
    margin-bottom: 20px;
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