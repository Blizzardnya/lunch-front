import Axios from "axios";

import * as types from "../mutation-types";
import { APP_LOCATION } from "../index";

const state = {
  products: [],
  show_products: []
};

const getters = {
  allProducts: state => {
    return state.show_products;
  },
  getNumberOfProducts: state => (state.products ? state.products.length : 0)
};

const mutations = {
  [types.SET_PRODUCTS](state, { products }) {
    state.products = products;
    if (state.show_products.length === 0) {
      state.show_products = products;
    }
  },
  [types.FILTER_PRODUCTS](state, { idCategory }) {
    if (idCategory === 0) {
      state.show_products = state.products;
    } else {
      state.show_products = state.products.filter(
        prod => prod.category.id === idCategory
      );
    }
  }
};

const actions = {
  GET_PRODUCTS: async context => {
    let { data } = await Axios.get(APP_LOCATION + "api/v1/cafe/product");

    context.commit(types.SET_PRODUCTS, {
      products: data.data.products
    });
  },
  filterProducts({ commit }, idCategory) {
    commit(types.FILTER_PRODUCTS, { idCategory: idCategory });
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
