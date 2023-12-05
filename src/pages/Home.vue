<template>
  Home
  <div v-for="product of products" :key="product">{{ product.title }}</div>
</template>

<script setup>
import { useHome } from "../composables/home";
const { products } = useHome();
</script>

<style lang="scss" scoped></style>
