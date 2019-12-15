import Vue from 'vue';
import Vuex from 'vuex';
import equipes from './module/equipes';
import tournois from './module/tournois';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        equipes,
        tournois
    }
})
