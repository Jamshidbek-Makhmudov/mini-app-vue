import { createStore } from "vuex";
import axios from "axios";
import router from "../router";
import { RT_HOME, RT_LOGIN } from "../constants/routeNames";
import products from "./modules/products";

const url = import.meta.env.VITE_BASE_URL;

const store = createStore({
  /**state bu ozi malumotlarni inital qiymatini ushlab turadi va apidan malumot olin kelgandan sonmg esa stateni shu malumotlarga tenglab qoyamiz */
  state: {
    user: {},
  },

  //buni vazifasi statedan faqri malumotlarni cashe qiladi va statedan olib beradi bir mastra cashe qivosa keyin shbu yersdan olib beraaveradi
  getters: {},

  actions: {
    //action yayhna apidan keladigan malumotlarni feth qilib olib kelish vazifasini bajaradi
    //actiondagi functionlarni togridan togri templateda ishlata olmyamiz ular apiga boglanadigan joyda ishlatilinadi
    //store dispatch qilish uni ishlatish va uni ichida action ishlaydi action payloadni va mutation(commitni )qabul qiladi payload backendga yuboriladigan data
    //ctx ni ichidan commit chiqadi commit- mutationga teng.  mutation action succes bolgan bajariladigan ozgarish
    async login({ commit }, payload) {
      const res = await axios.post(url + "auth/login", payload);
      if (!res.data?.token && res.status !== 200) {
        return;
      }
      commit("SET_TOKEN", res.data.token); //commit bu mutation 1- param mutation ichidagi functionni nomi 2-param unga beriladigan payload yani function uchun param
      commit("SET_USER", res.data);
    },
  },

  mutations: {
    
    /**mutation ni ichidagi 1-param state ni qabul qiladi 2- actiondan keladigan payload ya'ni res datani qabul qiladi
     * mutationlar apiga call qilmaydigan joylarda ham ishlatilinib ketaveradi ularni template da ishlatish uchun commit() orqali ishga tushiramiz
     * mutation ozini vazifasi esa actiondan keladigan malumotlarni statega qoyib qoyadi
     */
    SET_TOKEN: (_, payload) => {
      localStorage.setItem("token", payload);
    },

    SET_USER: (state, payload) => {
      state.user = payload;
      router.push({ name: RT_HOME });
    },

    LOGOUT: (state) => {
      state.user = {};
      localStorage.removeItem("token");
      router.push({ name: RT_LOGIN });
    },
  },

  modules: {
    products,
  }
});

export default store;
