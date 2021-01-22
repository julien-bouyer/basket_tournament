import Vue from 'vue';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import axios from 'axios';
import UUID from 'vue-uuid';
import PortalVue from 'portal-vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

// Import Bootstrap an BootstrapVue CSS files (order is important)
import './assets/scss/styles.scss';

const base = axios.create({
  baseURL: process.env.VUE_APP_NODE_URL,
});

Vue.prototype.$http = base;
Vue.config.productionTip = false;

Vue.use(UUID);
Vue.use(PortalVue);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
