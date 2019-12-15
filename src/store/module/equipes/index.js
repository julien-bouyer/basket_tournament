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
            .then(equipe => commit('setEquipes', equipe))
            .catch(console.error);
    },
    addEquipe({commit}, {equipe, callback}) {
        equipesService.create(equipe)
            .then(equipe => commit('addEquipe', {
                equipe,
                callback
            }))
            .catch(console.error);
    }
};
const mutations = {
    setEquipes(state, equipes) {
        state.equipes = equipes;
    },
    addEquipe(state, {equipe, callback}) {
        state.equipes.push(equipe);
        callback();
    }
};
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}