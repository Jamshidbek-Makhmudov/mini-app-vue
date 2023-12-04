<template>
  <Navbar />
  Home
  akdfana;
  lf;
  almd
  <div v-for="product of products" :key="product">{{ product.title }}</div>
</template>

<script setup>
import Navbar from "../components/Navbar.vue";
import { useHome } from "../composables/home";
const { products } = useHome();
</script>

<style lang="scss" scoped></style>
