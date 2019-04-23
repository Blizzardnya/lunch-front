import Axios from 'axios'
import * as types from "../mutation-types"


const state = {
    categories: []
};

const getters = {
    allCategories: state => {
        return state.categories
    }
};

const mutations = {
    [types.SET_CATEGORIES](state, {categories}) {
        state.categories = categories
    }
};

const actions = {
    GET_CATEGORIES: async (context) => {
        let {data} = await Axios.get('http://127.0.0.1:8000/api/v1/cafe/category')

        context.commit(types.SET_CATEGORIES, {
            categories: data.data.categories
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