import * as types from '../mutation-types'
import Axios from "axios";


const state = {
    login: false,
    token: ''
};

const getters = {
    isLogin: state => {
        return state.login
    },
};

const mutations = {
    [types.LOGIN](state, {token}) {
        state.token = token;
    },
};

const actions = {
    LOGIN: async (context, authData) => {
        await Axios({
            method:'post',
            url: 'http://127.0.0.1:8000/auth/token/create/',
            headers: {
                'Content-Type': 'application/vnd.api+json'
            },
            data:{
                username: authData.username,
                password: authData.password
            }
            })
            .then(response => {
                context.commit(types.LOGIN, {
                    token: response.data.attributes.auth_token
                })
            })
            .catch(error => {
                console.log(error)
            })

        // context.commit(types.LOGIN, {
        //     token: data.attributes.auth_token
        // })
    },
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};