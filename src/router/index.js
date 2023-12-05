import { createRouter, createWebHistory } from "vue-router";
import { layoutMiddleware } from "./middleware";
import {
  RT_HOME,
  MT_HOME,
  RT_LOGIN,
  MT_LOGIN,
  RT_ABOUT,
  MT_ABOUT,
  RT_CART,
  MT_CART,
} from "../constants/routeNames";

import Home from "../pages/Home.vue";
import Login from "../pages/Login.vue";
import { notFound } from "./notFound";
import  store from "../store"
const router = createRouter({

  history: createWebHistory(),

  routes: [
    {
      path: "/",
      name: RT_HOME,
      component: Home,
      meta: {
        requiresAuth: true,
        title: MT_HOME,
      },
    },
    {
      path: "/about",
      name: RT_ABOUT,
      component: () => import("../pages/About.vue"),
      meta: {
        requiresAuth: true,
        title: MT_ABOUT,
      },
    },
    {
      path: "/cart",
      name: RT_CART,
      component: () => import("../pages/Cart.vue"),
      meta: {
        requiresAuth: true,
        title: MT_CART,
      },
    },
    {
      path: "/login",
      name: RT_LOGIN,
      component: Login,
      meta: {
        layout: "Auth",
        title: MT_LOGIN,
      },
      
    },
    notFound
  ],
});

//tokenni eskirgan yoki yoqligini tekshirish:
function decodeJwt(token) { 
  if (token) {
    const base64Payload = token.split(".")[1];
    // const payloadBuffer = Buffer.from(base64Payload, "base64"); //this for wabpack instalemnts
    const payloadBuffer = window.atob(base64Payload );  //this when wokring qith vite projects 
    return JSON.parse(payloadBuffer.toString());
  } else { 
    return {exp:0}
  }
}



//before resolve ishlashidan oldin
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("token");

  const parsedToken = decodeJwt(token);
  
  const isTokenExpired = parsedToken.exp < Date.now() / 1000; //boolean true qaytsa kirgasmalik kerak
  
  console.log("token life is? :=>", parsedToken.exp );
  console.log("is token expired? :=>", isTokenExpired);
  
 

if (to.name !== RT_LOGIN && isTokenExpired) {
    // next({ name: "login" });
    store.commit("LOGOUT")
  } else if (!isTokenExpired && to.name === RT_LOGIN) {
    next({ name: from.name });
  } else {
    next();
  }
});

//router ishlashidan oldin
router.beforeResolve(async (to, from) => {
  await layoutMiddleware(to);
  document.title = to.meta.title;
});

export default router;
