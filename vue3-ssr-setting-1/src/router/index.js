import {
  createRouter,
  createWebHistory,
  createMemoryHistory,
} from "vue-router";
import Home from "../views/Home.vue";
import BasicUseAsyncData from "../views/BasicUseAsyncData.vue";

const { IS_SSR } = process.env;

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/basicUseAsyncData",
    name: "BasicUseAsyncData",
    component: BasicUseAsyncData
  },
];

export default () =>
  createRouter({
    history: IS_SSR
      ? createMemoryHistory(process.env.BASE_URL)
      : createWebHistory(process.env.BASE_URL),
    routes,
  });
