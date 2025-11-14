<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function goBack(){
    router.go(-1);
}

</script>

<template>
    <button class="custom-btn p-3 bg-primary border-0 rounded-circle d-flex align-items-center justify-content-center" @click="goBack">
        <svg xmlns="http://www.w3.org/2000/svg" id="arrowIcon" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
        </svg>
    </button>
</template>

<style lang="scss" scoped>
    #arrowIcon {
        fill: white;
        width: 20px;
        height: auto;
    }
</style>