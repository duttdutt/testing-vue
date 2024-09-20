<script setup>
import { ref, reactive } from 'vue';

const image = ref(0);
const change = () => image.value++;
</script>

<template>
    <button @click="change">{{ image }}</button>
</template>

<style scoped>
</style>
