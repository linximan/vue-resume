import Vue from "vue";
import Router from "vue-router";
import BasicLayout from "./components/BasicLayout.vue";
import Home from "./views/Home.vue";
import DemoCRM from "./views/DemoCRM.vue";

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
        },
        {
          path: "/demo/crm",
          name: "DemoCRM",
          component: DemoCRM
        }
      ]
    }
  ]
});
