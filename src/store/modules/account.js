import Axios from "axios";

import { APP_LOCATION } from "../index";
import * as types from "../mutation-types";

const getDefaultState = () => {
  return {
    orders: []
  };
};

const state = getDefaultState();

const getters = {
  get_orders: state => {
    return state.orders;
  }
};

const mutations = {
  [types.SET_ORDERS](state, { orders }) {
    state.orders = orders;
  },
  [types.RESET_ACCOUNT](state) {
    Object.assign(state, getDefaultState());
  }
};

const actions = {
  SET_ORDERS: async context => {
    let username = context.rootState.login.username;
    let token = context.rootState.login.token;
    let { data } = await Axios.get(APP_LOCATION + "api/v1/orders/order", {
      params: {
        username: username
      },
      headers: {
        Authorization: "Token " + token
      }
    });

    context.commit(types.SET_ORDERS, {
      orders: data.data.orders
    });
  },
  RESET_ACCOUNT({ commit }) {
    commit("RESET_ACCOUNT");
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
