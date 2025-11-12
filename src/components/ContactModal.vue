<script setup>
    import { ref, onMounted } from 'vue';

    const verified = ref(false);

    const name = ref('Ole Thomsen');
    const countryCode = ref(45);
    const phoneNumber = ref(42486848);

    function verifyUser(){
        verified.value = !verified.value;
        console.log(verified.value);
    }
</script>

<template>
    <div class="custom-card p-4 mt-3">
        <div v-if="!verified">
            <h2>Kontakt</h2>
            <p>Hvis du vil kontakte sælger så skal du verificeres med MitId.</p>
            <button @click="verifyUser" class="custom-btn"><img class="mitid-logo" src="/public/img/mitid-white.svg"></button>
        </div>

        <div v-if="verified">
            <h2>Kontakt</h2>
            <p>{{ name }}</p>
            <p>+{{ countryCode }} {{ phoneNumber }}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .custom-card {
        background-color: #FBF7EF;
        width: 100%;
        max-width: 500px;
        border-radius: 20px;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        // display: flex;
        flex-direction: column;
        align-items: center;
    }

    .custom-btn {
        width: 100%;
        border-radius: 20px;
        border: 1px solid #0060E6;
        background-color: #0060E6;
        padding: 10px;
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