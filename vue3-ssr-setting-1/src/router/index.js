import {
  createRouter,
  createWebHistory,
  createMemoryHistory,
} from "vue-router";
import Home from "../views/Home.vue";
import BasicUseAsyncData from "../views/AsyncData/BasicUseAsyncData.vue";
import MultipleAsyncData from '../views/AsyncData/MultipleAsyncData.vue';
import NestUseAsyncData from '../views/AsyncData/NestUseAsyncData.vue';

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
  {
    path: "/multipleAsyncData",
    name: "MultipleAsyncData",
    component: MultipleAsyncData
  },
  {
    path: "/nestUseAsyncData",
    name: "NestUseAsyncData",
    component: NestUseAsyncData
  },
];

export default () =>
  createRouter({
    history: IS_SSR
      ? createMemoryHistory(process.env.BASE_URL)
      : createWebHistory(process.env.BASE_URL),
    routes,
  });
