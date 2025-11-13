<script>
import edit from '@/assets/icons/edit-icon.svg';

export default {
  name: 'ProfileInfoCard',
  props: { 
    user: {
      type: Object,
      required: true,
      validator: (user) => {
        return ['name', 'address', 'phone', 'photoUrl', 'email'].every(
        key => user[key] !== undefined
      );}
    },
    image: {
      type: String
    },
  },
  components: {
    edit,
  }
}
</script>

<template>
  <section class="bg-white rounded-2 p-4 position-relative">

    <header class="text-center mt-5 mb-4">
      <img :src="user.photoUrl" :alt="user.name" class="profile-picture rounded-circle">
    </header>

    <button type="button" class="edit-info-icon position-absolute border-0 bg-transparent" aria-label="edit-profile">
            ✏️ 
    </button>

    <dl class="profile-details p-4 rounded-4">
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
  top: 50px;
  right: 50px;
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