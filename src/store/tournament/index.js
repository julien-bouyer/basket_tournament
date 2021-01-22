import tournamentsService from '@/services/tournament.service.js';

const state = {
  tournaments: [],
};
const getters = {
  getTournaments() {
    return state.tournaments;
  },
};
const actions = {
  fetch({ commit }) {
    tournamentsService
      .fetch()
      .then(tournaments => commit('setTournaments', tournaments))
      .catch(console.error);
  },
  deleteTournament({ commit }, tournament) {
    tournamentsService
      .delete(tournament.id)
      .then(tournaments => commit('setTournaments', tournaments))
      .catch(console.error);
  },
  addTournament({ commit }, tournament) {
    tournamentsService
      .create(tournament)
      .then(tournaments => commit('setTournaments', tournaments))
      .catch(console.error);
  },
  updateTournament({ commit }, tournament) {
    tournamentsService
      .update(tournament)
      .then(tournaments => commit('setTournaments', tournaments))
      .catch(console.error);
  },
};
const mutations = {
  setTournaments(state, tournaments) {
    state.tournaments = tournaments;
  },
};
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
