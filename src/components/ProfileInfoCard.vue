<script>
import edit from '@/assets/icons/edit-icon.svg';
import UpdateUserForm from '@/components/UpdateUserForm.vue';  
import locationIcon from "@/assets/icons/location.svg";
import emailIcon from "@/assets/icons/mail.svg";
import phoneIcon from "@/assets/icons/phone.svg";

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
      editSvgPath: edit,
      locationIcon: locationIcon,
      phoneIcon: phoneIcon,
      emailIcon: emailIcon, 
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
  <section class="containter bg-white rounded-2 px-4 py-2 position-relative d-flex flex-column align-items-center">

    <header class="row text-center mt-4 mb-4 align-items-center flex-column">
      <img :src="user.photoUrl" :alt="user.name" class="profile-picture rounded-circle">
      <p class="value fs-5 mt-2">{{ user.name }}</p>
    </header>

    <div class="edit-container pe-2 pb-2 pe-lg-5 w-75">
      <UpdateUserForm :id="user.id || user.userID" @user-updated="handleUserUpdated" />
      <p class="m-0 ms-5 fs-5 d-none d-lg-block">Mine oplysninger</p>
    </div>
    <dl class="row w-75 profile-details p-5 rounded-4 flex-row gap-4">
      
      <div>
        <img :src="phoneIcon">
        <dt class="label">Telefon</dt>
        <dd class="value">{{ user.phone }}</dd>
      </div>
      <div>
        <img :src="locationIcon">
        <dt class="label">Adresse</dt>
        <dd class="value">{{ user.address }}</dd>
      </div>
      <div>
        <img :src="emailIcon">
        <dt class="label">Email</dt>
        <dd class="value">{{ user.email }}</dd>
      </div>
      
    </dl>
  </section>
</template>


<style lang="scss" scoped>

dl {
  div {
    flex: 1;
    display: flex; 
    flex-direction: column;
    align-items: center;
    min-width: 155px;
    .label {
      margin-top: 10px;
    }
    img {
      height: 28px;
      width: 28px;
    }
  }
}

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