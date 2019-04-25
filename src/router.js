import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Products from './components/shop/Products.vue';
import Cart from './components/shop/Cart.vue';
import Login from './components/Login.vue'
import Account from './components/Account.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/:id/products',
            name: 'products',
            component: Products
        },
        {
            path: '/cart',
            name: 'cart',
            component: Cart
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/account',
            name: 'account',
            component: Account
        }
    ]
})
