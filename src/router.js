import Vue from 'vue';
import Router from 'vue-router';

// view routes
import Home from './views/Shared/Home.vue';
import Errors from './views/Shared/Errors/Error.vue';
import Login from './views/Shared/Auth/Login.vue';
import Register from './views/Shared/Auth/Register.vue';
import ForgotPassword from './views/Shared/Auth/ForgotPassword.vue';
import ResetPassword from './views/Shared/Auth/ResetPassword.vue';
import Menu from './views/Shared/Menu/Menu.vue';

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: ForgotPassword,
  },
  {
    path: '/auth/password/reset',
    name: 'reset-password',
    component: ResetPassword,
  },
  {
    path: '/auth/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/auth/register',
    name: 'register',
    component: Register,
  },
  {
    path: '/dashboard',
    name: 'me',
    component: Menu,
  },
  {
    path: '*',
    name: 'NotFound',
    component: Errors,
  },
];

const router = new Router({
  mode: 'history',
  routes,
  scrollBehavior: function(to) {
    if (to.hash) {
      return {
        selector: to.hash,
      };
    } else {
      return { x: 0, y: 0 };
    }
  },
});

export default router;
