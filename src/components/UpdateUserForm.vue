<script>
import plus from '@/assets/icons/plus.svg';
import edit from '@/assets/icons/edit-icon.svg';
import pencil from '@/assets/icons/pencil.svg';

export default {
  name: 'UpdateUserForm',
  props: {
    id: [String, Number]
  },
  data() {
    return {
      plusSvgPath: plus,
      editSvgPath: edit,
      editIcon: pencil,
      isDataLoaded: false,
      user: {
        userID: 1,
        userName: '',
        userEmail: '',
        userPhone: '',
        userAddress: '',
        userImage: ''
      }
    };
  },
  methods: {
    async getUser() {
      try {
        //const response = await fetch(`http://localhost:8080/api/users/${this.id}`);
        const response = await fetch(`https://rebuildapi.onrender.com/api/users/${this.id}`);
        if (!response.ok) throw new Error(`Bruger ID ${this.id} blev ikke fundet.`);
        const data = await response.json();
        this.user = { ...data }; // Bevar reaktivitet
        this.isDataLoaded = true;
      } catch (err) {
        console.error('Fejl ved hentning af brugerdata:', err);
      }
    },

    async updateUser(event) {
      event.preventDefault();
      try {
        const response = await fetch(`https://rebuildapi.onrender.com/api/users/${this.id}`, {
        //const response = await fetch(`http://localhost:8080/api/users/${this.id}`, {

          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(this.user)
        });
        if (!response.ok) throw new Error(`Fejl ved opdatering: ${response.status}`);
        const updatedUser = await response.json();

        // ⚡ Emit til parent (ProfileInfoCard)
        this.$emit('user-updated', updatedUser);

        // Luk modal automatisk
        const modalEl = document.getElementById(`updateUserModal-${this.id}`);
        const modal = bootstrap.Modal.getInstance(modalEl);
        modal?.hide();

      } catch (err) {
        console.error(err);
      }
    }
  },
  mounted() {
    this.getUser();
  }
};
</script>

<template>
  <button
    type="button"
    class="custom-btn"
    :data-bs-toggle="isDataLoaded ? 'modal' : ''"
    :data-bs-target="`#updateUserModal-${id}`"
    :disabled="!isDataLoaded"
  >
    <img :src="editIcon" alt="Rediger ikon" />
  </button>

  <div class="modal fade" :id="`updateUserModal-${id}`" tabindex="-1" aria-hidden="true" aria-label="Åbne skema for at opdatere bruger">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Opdater Bruger</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Luk"></button>
        </div>

        <form class="p-3" @submit.prevent="updateUser">
          <div class="mb-3">
            <label class="form-label">Navn</label>
            <input type="text" v-model="user.userName" class="form-control" required aria-label="Skriv nyt navn" placeholder="Skriv nyt navn" />
          </div>
          <div class="mb-3">
            <label class="form-label">Email</label>
            <input type="email" v-model="user.userEmail" class="form-control" required aria-label="Skriv ny email" placeholder="Skriv ny email"/>
          </div>
          <div class="mb-3">
            <label class="form-label">Telefon</label>
            <input type="tel" v-model="user.userPhone" class="form-control" aria-label="Skriv nyt telefonnummer" placeholder="Skriv nyt telefonnummer"/>
          </div>
          <div class="mb-3">
            <label class="form-label">Adresse</label>
            <input type="text" v-model="user.userAddress" class="form-control" aria-label="Skriv ny adresse" placeholder="Skriv ny adresse"/>
          </div>
          <button type="submit" class="btn btn-primary mt-3" aria-label="Opdater produkt" :data-bs-toggle="isDataLoaded ? 'modal' : ''">Opdater bruger</button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.custom-btn {
  padding: 1px;
  background-color: transparent;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  bottom: 80px;
  left: 100%;
}
</style>
