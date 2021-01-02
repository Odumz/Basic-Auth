import Vue from "vue";
import Router from "vue-router";

// view routes
import Home from "./views/Shared/Home.vue";
import Errors from "./views/Shared/Errors/Error.vue";
import Login from "./views/Shared/Auth/Login.vue";
import Register from "./views/Shared/Auth/Register.vue";
import ForgotPassword from "./views/Shared/Auth/ForgotPassword.vue";
import ResetPassword from "./views/Shared/Auth/ResetPassword.vue";
import Menu from "./views/Shared/Menu/Menu.vue";
import stepform_duplicate from "./views/Shared/Menu/stepform_duplicate.vue";
import CreateBusiness from "./views/Auth/SME/CreateBusiness.vue";
import CreateConsultant from "./views/Auth/Consultants/CreateConsultant.vue";

// component routes
import Dashboard from "./components/Dashboard/Shared/Dashboard.vue";
import Profile from "./components/Dashboard/Shared/Profile";
import Inbox from "./components/Dashboard/Shared/Inbox.vue";
import Notifications from "./components/Dashboard/Shared/Notifications.vue";
import Settings from "./components/Dashboard/Shared/Settings.vue";
import SettingsTwo from "./components/Dashboard/Shared/Settings_two.vue";

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
    path: "/auth/register",
    name: "register",
    component: Register
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
    path: "/dashboard/step",
    component: stepform_duplicate,
    name: "temp-step"
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
        path: "/dashboard/notifications",
        component: Notifications,
        name: "notifications"
      },
      {
        path: "/dashboard/settings_two",
        component: SettingsTwo,
        name: "temp-settings-two"
      },
      {
        path: "/dashboard/inbox",
        component: Inbox,
        name: "inbox"
      },
      {
        path: "/dashboard/profile",
        component: Profile,
        name: "temp-profile"
      },
      {
        path: "/dashboard/settings",
        component: Settings,
        name: "settings"
      }
    ]
  },
  {
    path: "*",
    name: "NotFound",
    component: Errors
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
