<template>
    <el-main class="cart">
        <h1>Корзина покупок</h1>
        <el-row v-if="!products.length">
            <i>Ваша корзина пуста!</i><br>
            <router-link to="/">Продолжить покупки</router-link>
        </el-row>
        <el-row v-else>
            <el-table
                :data="products"
                style="width: 100%">
                <el-table-column
                        prop="name"
                        label="Наинование">
                </el-table-column>
                <el-table-column
                        prop="price"
                        sortable
                        label="Цена">
                </el-table-column>
                <el-table-column
                        prop="quantity"
                        sortable
                        label="Кол-во">
                </el-table-column>
            </el-table>
            <el-row>
                <h3>Итого: {{ total }} р.</h3>
                <p v-show="!isLogin">Войдите в приложение для оформления заказа</p>
                <el-button v-if="!isLogin" type="success" icon="el-icon-tickets" disabled>Рассчёт</el-button>
                <el-button v-else type="success" @click="checkout" icon="el-icon-tickets">Рассчёт</el-button>
                <el-button type="danger" @click="resetCart()" icon="el-icon-delete">Очистить корзину</el-button>
            </el-row>
        </el-row>
    </el-main>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'

    export default {
        name: "Cart",
        computed: {
            ...mapGetters({
                products: 'cart/cartProducts',
                isLogin: 'login/isLogin'
            }),
            total() {
                return this.products.reduce((total, p) => {
                    return total + (p.price * p.quantity)
                }, 0).toFixed(2)
            }
        },
        methods: {
            checkout() {
                alert('Pay us $' + this.total)
            },
            ...mapActions('cart',['resetCart'])
        }
    }
</script>

<style scoped>

</style>