<template>
    <ProductsSlot>
        <el-container>
            <el-row>
                <el-col v-for="product in products" :key="product.id">
                    <h1>{{product.name}} - {{product.price}}</h1>
                    <p>{{product.description}}</p>
                    <el-button @click="addToCart(product)" type="success">Добавть к заказу</el-button>
                </el-col>
            </el-row>
        </el-container>
    </ProductsSlot>
</template>

<script>
    import ProductsSlot from '../views/Home'
    import { mapGetters, mapActions } from 'vuex'
    // import axios from 'axios'

    export default {
        name: "Products",
        components: {ProductsSlot},
        props: {id: Number},
        // data() {
        //     return{
        //         products: []
        //     }
        // },
        mounted() {
            this.GET_PRODUCTS()
            // this.$store.dispatch('products/GET_PRODUCTS')
        },
        computed: mapGetters({
            products: 'products/allProducts',
            // length: 'getNumberOfProducts'
        }),
        // beforeRouteUpdate(to, from, next){
        //     next()
        //     this.getProductsList()
        // },
        methods:
            {
            // getProductsList(){
            //     axios.get('http://127.0.0.1:8000/api/v1/cafe/product', {
            //         params: {category:this.$route.params.id}
            //     })
            //     .then(response => (
            //         // this.products = response.data.data.products
            //         this.addAllProducts(response.data.data.products)
            //     ))
            //
            // },
                ...mapActions('products', ['GET_PRODUCTS']),
                ...mapActions('cart', ['addToCart'])
        }
    }
</script>

<style scoped>

</style>