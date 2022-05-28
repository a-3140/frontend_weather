import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import Home from '@/views/Home.vue';
import NotFound from '@/views/NotFound.vue';

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    name: "NotFound",
    component: NotFound,
    path: "/:pathmatch(.*)*",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
