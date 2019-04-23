import * as types from '../mutation-types'

const state = {
    added: []
};

const getters = {
    // cartProducts: state => {
    cartProducts: (state, getters, rootState) => {
        return state.added.map(({id, quantity}) => {
            const product = rootState.products.products.find(p => p.id === id)
            return {
                name: product.name,
                price: product.price,
                quantity
            }
        })
    }
};

const mutations = {
    [types.ADD_TO_CART](state, {id}) {
        const record = state.added.find(p => p.id === id)

        if (!record) {
            state.added.push({
                id,
                quantity: 1
            })
        } else {
            record.quantity++
        }
    },
};

const actions = {
    addToCart({commit}, product) {
        commit(types.ADD_TO_CART, {
            id: product.id
        })
    },
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};