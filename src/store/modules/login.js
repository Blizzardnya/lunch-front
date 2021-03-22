import Axios from "axios";
import qs from "qs";

import * as types from "../mutation-types";
import { APP_LOCATION } from "../index";
import router from "../../router";

const getDefaultState = () => {
  return {
    login: false,
    token: "",
    username: ""
  };
};

const state = getDefaultState();

const getters = {
  isLogin: state => {
    return state.login;
  }
};

const mutations = {
  [types.LOGIN](state, { token, username }) {
    state.token = token;
    state.login = true;
    state.username = username;
  },
  [types.LOGOUT](state) {
    Object.assign(state, getDefaultState());
  }
};

const actions = {
  LOGIN: async (context, authData) => {
    await Axios.post(
      APP_LOCATION + "auth/token/login/",
      qs.stringify({
        username: authData.username,
        password: authData.password
      })
    )
      .then(response => {
        context.commit(types.LOGIN, {
          token: response.data.data.attributes.auth_token,
          username: authData.username
        });
        router.push({ name: "home" });
      })
      .catch(error => {
        if (error.response)
          if (error.response.status === 400) {
            alert("Логин или пароль введён неверно");
          }
      });
  },
  LOGOUT: async context => {
    await Axios({
      method: "POST",
      headers: {
        Authorization: "Token " + context.rootState.login.token
      },
      url: APP_LOCATION + "auth/token/logout"
    })
      //    eslint-disable-next-line
      .then(response => {
        context.commit("LOGOUT");
        context.commit("account/RESET_ACCOUNT", null, { root: true });

        if (router.currentRoute.name === "account") {
          router.push({ name: "home" });
        }
      })
      .catch(error => {
        if (error.response)
          if (error.response.status === 400) {
            alert("Error");
          }
      });
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
