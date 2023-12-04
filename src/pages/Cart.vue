<template>
  <Navbar />
  Cart
  <div v-for="product of products">{{ product.title }}</div>
</template>

<script setup>
import Navbar from "../components/Navbar.vue";
import { useHome } from "../composables/home";
const { products } = useHome();
</script>

<style lang="scss" scoped></style>
