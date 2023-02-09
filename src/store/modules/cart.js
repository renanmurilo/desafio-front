

const state = {
    cartProducts: []
};

const getters = {
    GET_PRODUCTS_CART: state => state.cartProducts
};

const mutations = {
    SET_PRODUCTS_CART: (state, cartProducts) => {
        state.cartProducts = cartProducts
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
