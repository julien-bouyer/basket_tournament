import Vue from 'vue';
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';
import App from './App';
import router from './views/router.js';
import store from './store';

Vue.use(VueRouter);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    vuetify,
    render: h => h(App),
});
