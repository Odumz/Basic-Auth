import Vue from "vue";
import Router from "vue-router";

// view routes
import Home from "./views/Shared/Home.vue";
import Error from "./views/Shared/Errors/Error.vue";
import Login from "./views/Shared/Auth/Login.vue";
import ForgotPassword from "./views/Shared/Auth/ForgotPassword.vue";
import ResetPassword from "./views/Shared/Auth/ResetPassword.vue";
import Menu from "./views/Shared/Menu/Menu.vue";

// component routes

Vue.use(Router);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/forgot-password",
    name: "forgot-password",
    component: ForgotPassword
  },
  {
    path: "/auth/password/reset",
    name: "reset-password",
    component: ResetPassword
  },
  {
    path: "/auth/login",
    name: "login",
    component: Login
  },
  {
    path: "/business/create-account",
    name: "CreateBusiness",
    component: CreateBusiness
  },
  {
    path: "/consultant/create-account",
    name: "CreateConsultant",
    component: CreateConsultant
  },
  {
    path: "/dashboard",
    name: "me",
    component: Menu,
    children: [
      {
        path: "",
        component: Dashboard,
        name: "user-dashboard"
      },
      {
        path: "/dashboard/inbox",
        component: Inbox,
        name: "inbox"
      },
      {
        path: "/dashboard/projects",
        component: Projects,
        name: "project"
      },
      {
        path: "/dashboard/verification",
        component: Verification,
        name: "verification"
      }
    ]
  },
  {
    path: "*",
    name: "NotFound",
    component: Error
  }
];

const router = new Router({
  mode: "history",
  routes,
  scrollBehavior: function(to) {
    if (to.hash) {
      return {
        selector: to.hash
      };
    } else {
      return { x: 0, y: 0 };
    }
  }
});

export default router;
