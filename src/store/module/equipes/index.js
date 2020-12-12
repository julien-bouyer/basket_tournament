import equipesService from '../../../services/EquipesService';

const state = {
    equipes: []
};
const getters = {
    getEquipes() {
        return state.equipes;
    }
};
const actions = {
    fetch({commit}) {
        equipesService.fetch()
            .then(equipes => commit('setEquipes', equipes))
            .catch(console.error);
    },
    deleteEquipe({commit}, equipe) {
        equipesService.delete(equipe.id)
            .then(equipes => commit('setEquipes', equipes))
            .catch(console.error);
    },
    addEquipe({commit}, equipe) {
        equipesService.create(equipe)
            .then(equipes => commit('setEquipes', equipes))
            .catch(console.error);
    },
    updateEquipe({commit}, equipe) {
        equipesService.update(equipe)
            .then(equipes => commit('setEquipes', equipes))
            .catch(console.error);
    }
};
const mutations = {
    setEquipes(state, equipes) {
        state.equipes = equipes;
    }
};
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}