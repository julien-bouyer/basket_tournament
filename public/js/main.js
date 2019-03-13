import NavBt from './components/nav-bt.js';
Vue.component('nav-bt', NavBt);

var HomeVue = new Vue({
  el: '#app',
  data: {
    title: 'Bienvenue'
  }
});
