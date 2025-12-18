<script>
import plus from '@/assets/icons/plus.svg';

export default {
  name: 'AddUserForm',
  data() {
    return {
      plusSvgPath: plus,
      showModal: false,
      newUser: {
        userName: '',
        userEmail: '',
        userPhone: '',
        userAddress: '',
        userImage: ''
      }
    };
  },
  methods: {
    closeModal() {
      this.showModal = false;
    },
    async createUser() {
      try {
        const response = await fetch('https://rebuildapi.onrender.com/api/users', {
        //const response = await fetch('http://localhost:8080/api/users', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(this.newUser)
        });

        if (!response.ok) throw new Error('Fejl ved oprettelse');

        const createdUser = await response.json();
        console.log('Ny bruger oprettet:', createdUser);

        // Nulstil formular
        this.newUser = {
          userName: '',
          userEmail: '',
          userPhone: '',
          userAddress: '',
          userImage: ''
        };

        // Luk modal
        this.closeModal();
        this.$router.push('/')

      } catch (error) {
        console.error(error);
        alert('Fejl ved oprettelse af bruger.');
      }
    }
  }
};
</script>

<template>
  <div>
    <!-- Runde ikon-knap med plus -->
    <button type="button" class="icon-btn" @click="showModal = true" aria-label="Åbne skema for at oprette ny bruger">
      <img :src="plusSvgPath" alt="Opret bruger" class="icon-img"/>
    </button>

    <!-- Modal -->
    <div v-if="showModal" class="modal-backdrop" aria-modal="true" role="dialog">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5>Opret ny bruger</h5>
            <button type="button" class="btn-close" @click="closeModal" aria-label="Luk dialog"></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="createUser">
              <input v-model="newUser.userName" placeholder="Navn" class="form-control mb-2" aria-label="Dit navn"required/>
              <input v-model="newUser.userEmail" placeholder="Email" class="form-control mb-2" aria-label="Din email" required/>
              <input v-model="newUser.userPhone" placeholder="Telefon" class="form-control mb-2" aria-label="Din telefon"/>
              <input v-model="newUser.userAddress" placeholder="Adresse" class="form-control mb-2" aria-label="Dina adresse"/>
              <input v-model="newUser.userImage" placeholder="Profilbillede" class="form-control mb-2" aria-label="Profilbillede"/>
              <button type="submit" class="btn custom-blue-btn mt-2" aria-label="Opret">Opret</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.icon-btn {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  background-color: #008080;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  bottom: 30px;
  left: 90%;
  cursor: pointer;
  box-shadow: 0 3px 6px rgba(0,0,0,0.2);
  transition: transform 0.2s;
}
.icon-btn:hover {
  transform: scale(1.1);
}
.icon-img {
  width: 24px;
  height: 24px;
}
.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
.modal-dialog {
  background: white;
  border-radius: 8px;
  max-width: 500px;
  width: 100%;
}
.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #ddd;
}
.modal-body {
  padding: 1rem;
}
.btn-close {
  background: transparent;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
}
.custom-blue-btn {
  background-color: #008080; /* Bootstrap blå */
  color: white;
  border: none;
}
.custom-blue-btn:hover {
  background-color: #008080;
}
</style>