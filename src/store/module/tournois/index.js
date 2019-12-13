import tournoisService from '../../../services/TournoisService';

const state = {
    tournois: []
};
const actions = {
    fetch({commit}) {
        tournoisService.fetch()
            .then(tournois => commit('setTournois', tournois))
            .catch(console.error);
    },
    deleteTournoi({commit}, tournoi) {
        tournoisService.delete(tournoi.id)
            .then(tournoi => commit('setTournois', tournoi))
            .catch(console.error);
    },
    addPerson({commit}, {tournoi, callback}) {
        tournoisService.create(tournoi)
            .then(tournoi => commit('addTournoi', {
                tournoi,
                callback
            }))
            .catch(console.error);
    }
};
const mutations = {
    setTournois(state, tournois) {
        state.tournois = tournois;
    },
    addTournoi(state, {tournoi, callback}) {
        state.tournois.push(tournoi);
        callback();
    }
};
export default {
    namespaced: true,
    state,
    actions,
    mutations
}