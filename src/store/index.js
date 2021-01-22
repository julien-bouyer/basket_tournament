import Vue from 'vue';
import Vuex from 'vuex';
import team from '@/store/team';
import tournament from '@/store/tournament';
import user from '@/store/user';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    team,
    tournament,
    user,
  },
});
