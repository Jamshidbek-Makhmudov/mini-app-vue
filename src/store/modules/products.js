import axios from "axios";
import { errorToast } from "../../utils/toast";
const url = import.meta.env.VITE_BASE_URL;
export default {
	state: {
		products: [],
		loading:false,
	},


	 getters: {
    products: (state) => state.products,
	},
	 
	 
	actions: {
		async fetchProducts({ commit }) {
			commit('SET_LOADING', true)
			try {
				
				const res = await axios.get(url + "products");
				if (!res.data?.products && res.status !== 200) {
					return;
				}
				commit('SET_LOADING', false)
				commit("SET_PRODUTS", res.data.products);
			} catch (error) {
				console.log(error);
				
				
			}
		},
		// search products
		async searchProducts({ commit }, title) {
			try {
				const res = await axios.get(url + `products/search?q=${title}`)
				if (!res.data?.products && res.status !== 200) {
					return;
				} else { 
					commit("SET_PRODUCTS", res.data.products);
				}
			} catch (error) {
      errorToast("cannot fetch products")
				
				
			}

		},
		// 
		
	},
		mutations: {
			SET_PRODUTS: (state, payload) => (state.products = payload),
			SET_LOADING:(state,payload)=>(state.loading=payload),		
			SET_PRODUCTS:(state,payload)=>(state.products=payload),		
		},
};