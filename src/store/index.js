import Vue from 'vue'
import Vuex from 'vuex'
import products from './modules/products'
import cart from './modules/cart'
import categories from './modules/categories'
import login from './modules/login'
import createPersistedState from 'vuex-persistedstate'

export const APP_LOCATION = 'http://127.0.0.1:8000/';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        categories,
        products,
        cart,
        login
    },
    plugins: [createPersistedState()]
})