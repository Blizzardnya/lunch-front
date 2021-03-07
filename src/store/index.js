import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import SecureLS from "secure-ls";

import products from "./modules/products";
import cart from "./modules/cart";
import categories from "./modules/categories";
import login from "./modules/login";
import account from "./modules/account";

const sls = new SecureLS({ isCompression: false });

// export const APP_LOCATION = 'http://127.0.0.1:8000/';
export const APP_LOCATION = "https://lunch-back.herokuapp.com/";

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
    login,
    account
  },
  plugins: [
    createPersistedState({
      storage: {
        getItem: key => sls.get(key),
        setItem: (key, value) => sls.set(key, value),
        removeItem: key => sls.remove(key)
      }
    })
  ]
});
