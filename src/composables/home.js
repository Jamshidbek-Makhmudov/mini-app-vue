import { computed } from "vue";
import { useStore } from "vuex";

export function useHome() {
  //import qilingan narsani function ichida ishlatish kere bomasa u ishlamiydi
  const store = useStore();
  const products = computed(() => store.getters.products);

  return {
    products,
  };
}
