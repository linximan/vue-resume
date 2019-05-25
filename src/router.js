import Vue from "vue";
import Router from "vue-router";
import BasicLayout from "./components/BasicLayout.vue";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: BasicLayout,
      children: [
        {
          path: "/",
          name: "Home",
          component: Home
        }
      ]
    }
  ]
});
