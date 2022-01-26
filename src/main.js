// default
import Vue from 'vue';
import App from './App.vue';

// custom imports
import router from './router.js';
import VueSwal from 'vue-swal';
import Toasted from 'vue-toasted';
import Vue2Editor from 'vue2-editor';
import VueCountdownTimer from 'vuejs-countdown-timer';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import '../main.css';

Vue.use(VueCountdownTimer);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(Toasted);
Vue.use(Vue2Editor);
Vue.use(VueSwal);
Vue.use(require('vue-moment'));

Vue.prototype.$baseUrl = 'https://api.edcmarketplace.com/v1';
if (
  window.location.hostname == 'localhost' ||
  window.location.hostname == 'cerebro-ui-beryl.vercel.app'
) {
  Vue.prototype.$baseUrl = 'https://staging.api.edcmarketplace.com/v1';
}

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
