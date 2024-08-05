import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import English from "../views/English.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "portugues",
    component: Home
  },
  {
    path: "/english",
    name: "english",
    component: English
  }
];

const router = new VueRouter({
  routes
});

export default router;
