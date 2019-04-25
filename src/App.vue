<template>
    <el-container id="app">
        <el-header>
            <el-menu :router="true" mode="horizontal">
                <el-menu-item index="/">
                    Кафе
                </el-menu-item>
                <el-menu-item index="/about">
                    О нас
                </el-menu-item>
                <el-menu-item style="float: right;" index="/login" v-if="!isLogin">
                    Вход
                </el-menu-item>
                <template v-else>
                    <el-menu-item style="float: right;" @click="LOGOUT">
                        Выход
                    </el-menu-item>
                    <el-menu-item style="float: right;" index="/account">
                        Аккаунт
                    </el-menu-item>
                </template>
                <el-menu-item style="float: right;" index="/cart">
                    <i class="el-icon-goods"></i>
                    Корзина <el-tag type="info" size="small">{{cartCounts}}</el-tag>
                </el-menu-item>
            </el-menu>
            <!--<router-link to="/">Home</router-link> |-->
            <!--<router-link to="/about">About</router-link>-->
        </el-header>
        <router-view/>
    </el-container>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'

    export default {
        mounted() {
            this.GET_PRODUCTS();
            this.GET_CATEGORIES();
        },
        computed: mapGetters({
            cartCounts: 'cart/cartCount',
            isLogin: 'login/isLogin'
        }),
        methods: {
            ...mapActions('products', ['GET_PRODUCTS']),
            ...mapActions('categories', ['GET_CATEGORIES']),
            ...mapActions('login', ['LOGOUT'])
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
