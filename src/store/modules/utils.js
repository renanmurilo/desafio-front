const state = {
    showModal: false
};

const getters = {
    GET_MODAL: state => state.showModal
};

const mutations = {
    SET_MODAL: (state, showModal) => {
        state.showModal = showModal
    }
};

const actions = {
};

export default {
    state,
    getters,
    mutations,
    actions
}
