<template>
    <el-main class="cart">
        <h1>Корзина</h1>
        <p v-show="!products.length">
            <i>Ваша корзина пуста!</i><br>
            <router-link to="/">Продолжить покупки</router-link>
        </p>
        <el-table
                v-show="products.length"
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
            <el-button v-show="products.length" type="success" @click='checkout'>Рассчёт</el-button>
        </el-row>
    </el-main>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: "Cart",
        computed: {
            ...mapGetters({
                products: 'cart/cartProducts'
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
            }
        }
    }
</script>

<style scoped>

</style>