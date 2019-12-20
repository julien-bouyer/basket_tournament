import tournoisService from '../../../services/TournoisService';

const state = {
    tournois: []
};
const getters = {
    getTournois() {
        return state.tournois;
    }
};
const actions = {
    fetch({commit}) {
        tournoisService.fetch()
            .then(tournois => commit('setTournois', tournois))
            .catch(console.error);
    },
    deleteTournoi({commit}, tournoi) {
        tournoisService.delete(tournoi.id)
            .then(tournois => commit('setTournois', tournois))
            .catch(console.error);
    },
    addTournoi({commit}, tournoi) {
        tournoisService.create(tournoi)
            .then(tournois => commit('setTournois', tournois))
            .catch(console.error);
    },
    updateTournoi({commit}, tournoi) {
        tournoisService.update(tournoi)
            .then(tournois => commit('setTournois', tournois))
            .catch(console.error);
    }
};
const mutations = {
    setTournois(state, tournois) {
        state.tournois = tournois;
    }
};
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}