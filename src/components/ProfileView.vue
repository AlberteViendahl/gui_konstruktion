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
    <nav class="tabs mt-5 d-flex">
      <ul class="list-unstyled d-flex w-100 justify-content-evenly" role="tablist">
        <li role="presentation">
          <button id="info-tab" :class="{ active: activeTab === 'info' }" @click="activeTab = 'info'" role="tab" aria-controls="info-panel"
            :aria-selected="activeTab === 'info' ? 'true' : 'false'">
            Information
          </button>
        </li>
        <li role="presentation">
          <button id="sales-tab" :class="{ active: activeTab === 'sales' }" @click="activeTab = 'sales'" role="tab" aria-controls="sales-panel"
            :aria-selected="activeTab === 'sales' ? 'true' : 'false'">
            Mine salg
          </button>
        </li>
      </ul>    
    </nav>
    <div class="tab-separator-bar w-100 px-5 mt-2 mb-4" :class="{ 'sales-active': activeTab === 'sales' }"></div>
    
    <section class="tab-content">
        <div v-if="activeTab === 'info'" 
        id="info-panel"
        role="tabpanel"
        aria-labelledby="info-tab">
          <ProfileInfoCard :user="user" />
        </div>

        <div v-else-if="activeTab === 'sales'"
        id="sales-panel"
        role="tabpanel"
        aria-labelledby="sales-tab">
          <ProfileMySales :user-id="user.id" />
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