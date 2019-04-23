import Axios from 'axios'
import * as types from "../mutation-types"


const state = {
    products: []
};

const getters = {
    allProducts: state => {
        return state.products
    },
    getNumberOfProducts: state => (state.products) ? state.products.length : 0,
};

const mutations = {
    [types.SET_PRODUCTS](state, {products}) {
        state.products = products
    }
};

const actions = {
    GET_PRODUCTS: async (context) => {
        let {data} = await Axios.get('http://127.0.0.1:8000/api/v1/cafe/product')

        context.commit(types.SET_PRODUCTS, {
            products: data.data.products
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