<template>
    <el-container>
        <el-row>
            <el-col v-for="product in products" :key="product.id">
                <h1>{{product.name}} - {{product.price}}</h1>
                <p>{{product.description}}</p>
                <el-button @click="addToCart(product)" type="success">Добавть к заказу</el-button>
            </el-col>
        </el-row>
    </el-container>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'

    export default {
        name: "Products",
        props: {id: Number},
        mounted() {
            this.GET_PRODUCTS()
        },
        computed: mapGetters({
            products: 'products/allProducts',
            length: 'products/getNumberOfProducts'
        }),
        methods: {
            ...mapActions('products', ['GET_PRODUCTS']),
            ...mapActions('cart', ['addToCart'])
        }
    }
</script>

<style scoped>

</style>