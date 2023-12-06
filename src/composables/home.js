import { computed, ref } from "vue";
import { useStore } from "vuex";

export function useHome() {
  //import qilingan narsani function ichida ishlatish kere bomasa u ishlamiydi
  const store = useStore();
  const products = computed(() => store.getters.products);
  const loading = computed(() => store.state.loading);
  const searchingTitle = ref('')
  async function onSearchProducts(title) { 
    
     await store.dispatch("searchProducts", title);
  }

  return {
    products,
    loading,
    searchingTitle,
    onSearchProducts,
  };
}
