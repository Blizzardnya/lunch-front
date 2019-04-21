<template>
    <ProductsSlot>
        <el-container>
            <el-row v-for="product in products" :key="product.id">
                <!--{{ this.$router.params.id }}-->
                <h1>{{product.name}} - {{product.price}}</h1>
                <p>{{product.description}}</p>
            </el-row>
        </el-container>
    </ProductsSlot>
</template>

<script>
    import ProductsSlot from '../views/Home'
    import axios from 'axios'

    export default {
        name: "Products",
        components: {ProductsSlot},
        props: {id: Number},
        data() {
            return{
                products: []
            }
        },
        mounted() {
            axios.get('http://127.0.0.1:8000/api/v1/cafe/product', {
                    params: {category:this.$route.params.id}
                })
                .then(response => (this.products = response.data.data.products))
        }
    }
</script>

<style scoped>

</style>