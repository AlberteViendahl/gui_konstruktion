<script>
import AddUserForm from '@/components/AddUserForm.vue';

export default {
    name: 'AdminPage',
    // 2. Registrer komponenten, så template kan bruge den
    components: {
        AddUserForm 
    }
}
</script>

<template>
  <section class="adminpage container p-4">
    
    <header class="page-header d-flex align-items-center justify-content-between p-4 mb-4 border-bottom">
      <h2 class="mx-auto my-0">Administration</h2> 

    </header>
    </section>
    <section>
          Opret en ny bruger
          <AddUserForm />
    </section>
</template>


