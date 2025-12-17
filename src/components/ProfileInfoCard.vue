<script>
import edit from '@/assets/icons/edit-icon.svg';
import UpdateUserForm from '@/components/UpdateUserForm.vue';  

export default {
  name: 'ProfileInfoCard',
  components: {
    //Registrer komponenten
    UpdateUserForm, 
  },
  props: { 
    user: {
      type: Object,
      required: true,
      validator: (user) => {
        // Tilføj 'userID' til validatoren, hvis det er påkrævet for UpdateUserForm
        return ['name', 'address', 'phone', 'photoUrl', 'email'].every(
        key => user[key] !== undefined
      );}
    },
    image: {
      type: String
    },
  },
  data() {
    return {
      editSvgPath: edit 
    }
  },
  methods: {
    handleUserUpdated() {
        this.$emit('profile-reload');
      }
  }
}
</script>

<template>
  <section class="bg-white rounded-2 px-4 py-2 position-relative">

    <header class="text-center mt-4 mb-4">
      <img :src="user.photoUrl" :alt="user.name" class="profile-picture rounded-circle">
    </header>

    
    <dl class="profile-details p-4 rounded-4">
      <UpdateUserForm :id="user.id || user.userID" @user-updated="handleUserUpdated" />
      <dt class="label">Navn</dt>
      <dd class="value">{{ user.name }}</dd>
      
      <dt class="label mt-3">Adresse</dt>
      <dd class="value">{{ user.address }}</dd>
      
      <dt class="label mt-3">Telefon</dt>
      <dd class="value">{{ user.phone }}</dd>

      <dt class="label mt-3">Email</dt>
      <dd class="value">{{ user.email }}</dd>
      
    </dl>
  </section>
</template>


<style lang="scss" scoped>

.edit-icon {
  height: 18px;
  width: auto;
}

.profile-details {
  border: 1px solid #cccccc;
}

.profile-picture {
    width: 120px;
    height: 120px;
    object-fit: cover;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
}

.edit-info-icon {
  top: 10px;
  right: 30px;
  cursor: pointer;
}

.label {
  font-size: 12px;
  color: #888;
  margin-bottom: 2px;
}
.value {
  font-size: 16px;
  margin-bottom: 0;
  font-weight: 500;
}
</style>