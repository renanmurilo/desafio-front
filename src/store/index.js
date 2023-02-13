import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import products from './modules/products'
import cart from './modules/cart'
import utils from './modules/utils'

const store = new Vuex.Store({
  modules: {
    products,
    cart,
    utils
  },
});

export default store;
