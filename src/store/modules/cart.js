import * as types from '../mutation-types'
import Axios from "axios";
import {APP_LOCATION} from "../index";
import router from'../../router';

const getDefaultState = () => {
    return {
        added: []
    }
};

const state = getDefaultState();

const getters = {
    cartProducts: (state, getters, rootState) => {
        return state.added.map(({id, quantity}) => {
            const product = rootState.products.products.find(p => p.id === id);
            return {
                name: product.name,
                price: product.price,
                quantity
            }
        })
    },
    cartCount: state => {
        return state.added.reduce((accum, item) => accum + item.quantity, 0)
    },
};

const mutations = {
    [types.ADD_TO_CART](state, {id}) {
        const record = state.added.find(p => p.id === id);

        if (!record) {
            state.added.push({
                id,
                quantity: 1
            })
        } else {
            record.quantity++
        }
    },
    [types.DELETE_FROM_CART](state, {index}){
        // state.added.find(p => p.id === id).delete()
        state.added = state.added.filter((_, i) => i !== index)
    },
    resetState(state) {
        Object.assign(state, getDefaultState())
    }
};

const actions = {
    addToCart({commit}, product) {
        commit(types.ADD_TO_CART, {
            id: product.id
        })
    },
    deleteFromCart({commit}, id){
        commit(types.DELETE_FROM_CART, {
            index: id
        })
    },
    resetCart({commit}) {
        commit('resetState')
    },
    confirmOrder: async (context) => {
        let data = {
            user: context.rootState.login.username,
            products: context.state.added
        };

        await Axios({
            method: 'POST',
            headers: {
                Authorization: 'Token ' + context.rootState.login.token
            },
            url: APP_LOCATION + 'api/v1/orders/order',
            data: data
        })
            .then(response => {
                if (response.status === 201) {
                    context.commit('resetState');
                    alert('Ваш заказ успешно принят');
                    router.push({name: "account"})
                } else {
                    alert('Произошла ошибка')
                }
            })
            .catch(error => {
                if (error.response)
                    if (error.response.status === 400) {
                        alert('Произошла ошибка при отправке заказа')
                    }
            })
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};