import Vue from 'vue';
import VueMaterial from 'vue-material';
import VueRouter from 'vue-router';
import 'vue-material/dist/vue-material.css';
import App from './App';
import router from './views/router.js';
import store from './store';

Vue.use(VueRouter);
Vue.use(VueMaterial);

Vue.material.registerTheme('orange', {
    primary: 'orange',
    accent: 'grey',
    warn: 'red'
});

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App),
});
