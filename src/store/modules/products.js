import axios from "axios";
const url = import.meta.env.VITE_BASE_URL;
export default {
	state: {
		products:[]
	},


	 getters: {
    products: (state) => state.products,
	},
	 
	 
	actions: {
		    async fetchProducts({ commit }) {
      const res = await axios.get(url + "products");
      if (!res.data?.products && res.status !== 200) {
        return;
      }
      commit("SET_PRODUTS", res.data.products);
		},
		
	},
		mutations: {
			 SET_PRODUTS: (state, payload) => (state.products = payload),
		},
};