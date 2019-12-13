import Vue from 'vue';
import Vuex from 'vuex';
import tournois from './module/tournois';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        tournois
    }
})
