<template >

  Home
  <div v-if="loading">
    <Loading/>
    <div class="relative">
      
    </div>
  </div>
  <div v-else>
    <div>
      <input type="text" v-model="searchingTitle" @input.enter="onSearchProducts">
    </div>
    
    <div  v-for="product of products" :key="product">{{ product.title }}</div>
    <!-- 

      bu kod lodashdan olinib agar databasedan nimadir kemiy qolsa orniga userga boshqa narsa chiqarib turish uchun ishlatilinadi va erroni oldini oladi->

      <div  v-for="product of products" :key="product">{{ get(product,"title","default")}}</div>
    -->
  </div>
</template>

<script setup>
import Loading from "../components/Loading.vue";
import { useHome } from "../composables/home";
import { get} from "lodash"
const { products, loading,searchingTitle,onSearchProducts } = useHome();

const loading2=true
</script>

<style lang="scss" scoped></style>
