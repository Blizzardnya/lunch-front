import * as types from '../mutation-types'
import Axios from "axios";
import {APP_LOCATION} from '../index'

var qs = require('qs');

const getDefaultState = () => {
    return {
        login: false,
        token: '',
        username: ''
    }
};

const state = getDefaultState();

const getters = {
    isLogin: state => {
        return state.login
    },
};

const mutations = {
    [types.LOGIN](state, {token, username}) {
        state.token = token;
        state.login = true;
        state.username = username;
    },
    [types.LOGOUT](state) {
        Object.assign(state, getDefaultState())
    }
};

const actions = {
    LOGIN: async (context, authData) => {
        await Axios.post(APP_LOCATION + 'auth/token/create/',
            qs.stringify({
                'username': authData.username,
                'password': authData.password
            }))
            .then(response => {
                context.commit(types.LOGIN, {
                    token: response.data.data.attributes.auth_token,
                    username: authData.username
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
        commit('LOGOUT');
        commit('account/RESET_ACCOUNT', null, {root: true});
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};