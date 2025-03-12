import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeViews.vue"; //import component: Home ใน folder views

const routes = [
  { path: "/", component: Home }, //เรียกใช้ component: Home
  { path: "/create", component: () => import("../views/CreateViews.vue") },
   {
    path: "/update/:id", // ใช้ :id เพื่อระบุว่า id เป็นพารามิเตอร์ที่สามารถรับค่าได้
    name: "Update",
    component: () => import("../views/UpdateViews.vue"), // คอมโพเนนต์ที่จะแสดงเมื่อเส้นทางตรงกับ /update/:id
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
