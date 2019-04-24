import * as types from '../mutation-types'
import Axios from "axios";

var qs = require('qs');

const getDefaultState = () => {
    return {
        login: false,
        token: ''
    }
};

const state = getDefaultState();

const getters = {
    isLogin: state => {
        return state.login
    },
};

const mutations = {
    [types.LOGIN](state, {token}) {
        state.token = token;
        state.login = true;
    },
    [types.LOGOUT](state) {
        Object.assign(state, getDefaultState())
    }
};

const actions = {
    LOGIN: async (context, authData) => {
        await Axios.post('http://127.0.0.1:8000/auth/token/create/',
            qs.stringify({
                'username': authData.username,
                'password': authData.password
            }))
            .then(response => {
                context.commit(types.LOGIN, {
                    token: response.data.data.attributes.auth_token
                });
            })
            .catch(error => {
                if (error.response)
                if (error.response.status === 400) {
                    alert('Логин или пароль введён неверно')
                }
            })
    },
    LOGOUT({commit}) {
        commit('LOGOUT')
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};