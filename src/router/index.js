import { createRouter, createWebHistory } from "vue-router";
import Content from "../views/Content.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Content,
    },
    {
      path: "/blog/:id",
      name: "blog",
      component: () => import("../views/Detail.vue"),
    },
  ],
});

export default router;
