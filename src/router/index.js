import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeViews.vue"; //import component: Home ใน folder views

const routes = [
  { path: "/", component: Home }, //เรียกใช้ component: Home
  { path: "/create", component: () => import("../views/CreateViews.vue") },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
