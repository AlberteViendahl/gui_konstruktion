<script>
import AddUserForm from '@/components/AddUserForm.vue';

export default {
    name: 'CreateUserPage',
    // 2. Registrer komponenten, så template kan bruge den
    components: {
        AddUserForm 
    }
}
</script>

<template>
  <section class="createuser container p-4">
    
    <header class="page-header d-flex align-items-center justify-content-between p-4 mb-4 border-bottom">
      <h2 class="mx-auto my-0">Velkommen</h2> 

    </header>
    </section>
    <section>
          Opret en ny bruger
          <AddUserForm />
    </section>
</template>