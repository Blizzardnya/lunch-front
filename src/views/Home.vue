<template>
    <el-container>
        <el-main class="home">
            <!--<slot></slot>-->
            <Products></Products>
        </el-main>
        <el-aside width="25%" style="margin-top: 1%;">
            <el-menu>
                <el-menu-item v-for="category in categories" :key="category.id" @click="filterProducts(category.id)">
                    <span slot="title">{{ category.name }}</span>
                </el-menu-item>
                <el-menu-item @click="filterProducts(0)">
                    <i class="el-icon-menu"></i>
                    <span slot="title">Все</span>
                </el-menu-item>
            </el-menu>
        </el-aside>
    </el-container>
</template>

<script>
    import Products from "../components/shop/Products";
    import {mapGetters, mapActions} from 'vuex'

    export default {
        name: 'Home',
        components: {Products},
        computed: mapGetters({
            categories: 'categories/allCategories'
        }),
        methods: {
            ...mapActions('products', ['filterProducts'])
        }
    }
</script>

<style scoped>
    .el-menu-item{
        border: 1px solid #ebeef5;
    }
</style>
