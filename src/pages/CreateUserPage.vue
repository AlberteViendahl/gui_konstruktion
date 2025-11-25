<template>
    <AddUserForm />
</template>

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