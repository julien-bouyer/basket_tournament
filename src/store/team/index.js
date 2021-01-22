import teamsService from '@/services/team.service.js';

const state = {
  teams: [],
};
const getters = {
  getTeams() {
    return state.teams;
  },
};
const actions = {
  fetch({ commit }) {
    teamsService
      .fetch()
      .then(teams => commit('setTeams', teams))
      .catch(console.error);
  },
  deleteTeam({ commit }, team) {
    teamsService
      .delete(team.id)
      .then(teams => commit('setTeams', teams))
      .catch(console.error);
  },
  addTeam({ commit }, team) {
    teamsService
      .create(team)
      .then(teams => commit('setTeams', teams))
      .catch(console.error);
  },
  updateTeam({ commit }, team) {
    teamsService
      .update(team)
      .then(teams => commit('setTeams', teams))
      .catch(console.error);
  },
};
const mutations = {
  setTeams(state, teams) {
    state.teams = teams;
  },
};
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
