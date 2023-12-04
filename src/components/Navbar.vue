<template>
  <nav
    class="bg-secondary py-3 flex justify-between items-center text-white px-3"
  >
    <router-link to="/"> Logo </router-link>
    <div class="w-[25%] flex justify-between items-center">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/cart">Cart</router-link>
      <Button
        class="btn-warning"
        @click="logout"
        >Logout</Button
      >
    </div>
  </nav>
</template>

<script setup>
import Button from "./base/base-button.vue";
import { useStore } from "vuex";

const store = useStore();

function logout() {
  store.commit("LOGOUT");
}
</script>

<style lang="scss" scoped></style>
