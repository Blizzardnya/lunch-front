<template>
    <el-main class="cart">
        <h1>Ваш заказ:</h1>
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
                        label="Кол-во"
                        width="90px"
                >
                    <template slot-scope="scope">
                        <el-select v-model="scope.row.quantity" @change="updateQuantityCart(scope.row)" placeholder="Select">
                            <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </template>
                </el-table-column>
                <el-table-column
                        label=""
                        align="center"
                >
                    <template slot-scope="scope">
                        <el-button
                                size="mini"
                                type="danger"
                                @click="deleteFromCart(scope.$index)">Удалить
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-row>
                <h3>Итого: {{ total }} р.</h3>
                <template v-if="!isLogin">
                    <p>Войдите в приложение для оформления заказа</p>
                    <el-button type="success" icon="el-icon-tickets" disabled>Рассчёт</el-button>
                </template>
                <el-button v-else type="success" @click="confirmOrder" icon="el-icon-tickets">Рассчёт</el-button>
                <el-button type="danger" @click="resetCart()" icon="el-icon-delete">Очистить корзину</el-button>
            </el-row>
        </el-row>
    </el-main>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'

    export default {
        name: "Cart",
        data() {
            return {
                options: [{
                    value: '1',
                    label: '1'
                }, {
                    value: '2',
                    label: '2'
                }, {
                    value: '3',
                    label: '3'
                }, {
                    value: '4',
                    label: '4'
                }, {
                    value: '5',
                    label: '5'
                }]
            }
        },
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
            ...mapActions('cart', ['resetCart', 'confirmOrder', 'deleteFromCart', 'updateQuantityCart'])
        }
    }
</script>

<style scoped>

</style>