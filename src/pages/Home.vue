
<script setup>
import Loading from "../components/Loading.vue";
import { useHome } from "../composables/home";
import { NSelect} from "naive-ui";
import { get } from "lodash";
import { ref } from "vue";
import ProductCard from "../components/ProductCard.vue"


const { products, loading,searchingTitle,onSearchProducts } = useHome();
</script>
<template >
  <div v-if="loading">
    <Loading/>
    <div class="relative">
      
    </div>
  </div>
  <div v-else>
    <div>
       <input type="text" v-model="searchingTitle" @input.enter="onSearchProducts(searchingTitle)" placeholder="type" />
    </div>
    <div class="box">
      
      <div class="flexy"  v-for="product of products" :key="product">
        <ProductCard :product="product"/>
      </div>
    </div>
    <!-- 

      bu kod lodashdan olinib agar databasedan nimadir kemiy qolsa orniga userga boshqa narsa chiqarib turish uchun ishlatilinadi va erroni oldini oladi->

      <div  v-for="product of products" :key="product">{{ get(product,"title","default")}}</div>
    -->
  </div>
</template>


<style scoped>
.flexy {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
}

.box {
    margin: 10px;
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    padding: 10px;
}</style>
 