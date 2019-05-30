import Sidebar from './components/sidebar.js';
import Navbar from './components/navbar.js';

Vue.component('sidebar', Sidebar);
Vue.component('navbar', Navbar);

var HomeVue = new Vue({
  el: '#app',
  data: {
    title: 'Bienvenue'
  }
});
