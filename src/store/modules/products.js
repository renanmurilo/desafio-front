import api from '@/api/axios';

const state = {
    products: []
};

const getters = {
    GET_PRODUCTS: state => state.products
};

const mutations = {
    SET_PRODUCTS: (state, products) => {
        state.products = products
    }
};

const actions = {
    FETCH_PRODUCTS: async ({ commit }) => {
        const { data } = await api.get('master/produtos.json')

        commit('SET_PRODUCTS', data)
    },
};

export default {
    state,
    getters,
    mutations,
    actions
}
