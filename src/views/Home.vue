<template>
    <el-container>
        <el-main class="home">
            <!--<slot></slot>-->
            <Products></Products>
        </el-main>
        <el-aside width="25%" style="margin-top: 1px;">
            <el-menu>
                <el-menu-item v-for="category in categories" :key="category.id" @click="getProducts(category.id)">
                    {{ category.name }}
                </el-menu-item>
            </el-menu>
        </el-aside>
    </el-container>
</template>

<script>
    import Products from "../components/Products";
    import {mapGetters, mapActions} from 'vuex'

    export default {
        name: 'Home',
        components: {Products},
        mounted() {
            // this.GET_CATEGORIES()
        },
        computed: mapGetters({
            categories: 'categories/allCategories'
        }),
        methods: {
            getProducts(id) {
                this.$router.push({name: 'products', params: {id: id}})
            },
            // ...mapActions('categories', ['GET_CATEGORIES'])
        }
    }
</script>
