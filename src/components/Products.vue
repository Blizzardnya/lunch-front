<template>
    <el-container>
        <el-row :gutter="12">
            <el-col :span="8" v-for="product in products" :key="product.id">
                <el-card shadow="hover" :body-style="{ padding: '10px' }">
                    <div slot="header">
                        <h1>{{product.name}}</h1>
                        <p>Цена: {{product.price}}</p>
                    </div>
                    <el-button size="small" @click="addToCart(product)" type="success" icon="el-icon-plus">Добавить</el-button>
                    <p>{{product.description | truncate(100, '...')}}</p>
                </el-card>
            </el-col>
        </el-row>
    </el-container>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'

    export default {
        name: "Products",
        props: {id: Number},
        created() {
            // this.GET_PRODUCTS()
        },
        computed: mapGetters({
            products: 'products/allProducts',
            length: 'products/getNumberOfProducts'
        }),
        methods: {
            // ...mapActions('products', ['GET_PRODUCTS']),
            ...mapActions('cart', ['addToCart'])
        }
    }
</script>

<style scoped>
    .el-col {
        margin-top: 1%;
    }
</style>