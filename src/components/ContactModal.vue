<script setup>
    import { ref, onMounted } from 'vue';

    const verified = ref(false);

    const name = ref('Ole Thomsen');
    const countryCode = ref(45);
    const phoneNumber = ref(42486848);

    function verifyUser(){
        verified.value = !verified.value;
    }
</script>

<template>
    <div class="custom-card bg-secondary rounded-4 w-100 p-4 mt-3 mb-5" role="dialog">
        <section v-if="!verified">
            <h2>Kontakt</h2>
            <p>Hvis du vil kontakte sælger så skal du verificeres med MitId.</p>
            <button @click="verifyUser" class="custom-btn rounded-pill w-100 p-2"><img class="mitid-logo" src="/public/img/mitid-white.svg"></button>
        </section>

        <section v-if="verified">
            <h2>Kontakt</h2>
            <p>{{ name }}</p>
            <p>+{{ countryCode }} {{ phoneNumber }}</p>
        </section>
    </div>
</template>

<style lang="scss" scoped>
    .custom-card {
        max-width: 500px;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }

    .custom-btn {
        border: 1px solid #0060E6;
        background-color: #0060E6;
    }

    .custom-btn:hover {
        border: 1px solid #0060E6;
        background-color: #FBF7EF;
        transition: 0.3s;
    }

    .mitid-logo {
        width: 60px;
    }
</style>