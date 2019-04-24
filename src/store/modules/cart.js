import * as types from '../mutation-types'

const getDefaultState = () => {
    return{
        added: []
    }
};

// const state = {
//     added: []
// };
const state = getDefaultState();

const getters = {
    cartProducts: (state, getters, rootState) => {
        return state.added.map(({id, quantity}) => {
            const product = rootState.products.products.find(p => p.id === id)
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
    resetState (state) {
        Object.assign(state, getDefaultState())
    }
};

const actions = {
    addToCart({commit}, product) {
        commit(types.ADD_TO_CART, {
            id: product.id
        })
    },
    resetCart ({commit}) {
        commit('resetState')
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};