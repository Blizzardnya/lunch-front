<template>
    <el-container>
        <el-main class="home">
            <slot></slot>
            <!--<Products :id="1"></Products>-->
        </el-main>
        <el-aside width="25%">
            <el-menu>
                <el-menu-item v-for="category in categories" :key="category.id" @click="getProducts(category.id)">{{ category.name }}</el-menu-item>
            </el-menu>
        </el-aside>
    </el-container>

    <!--<div class="home">-->
    <!---->
    <!--</div>-->
</template>

<script>
    // @ is an alias to /src
    import axios from 'axios'
    // import Products from "../components/Products";

    export default {
        name: 'Home',
        // components: {Products},
        data(){
            return {
                categories: []
            }
        },
        mounted(){
            axios.get('http://127.0.0.1:8000/api/v1/cafe/category')
                .then(response => (this.categories = response.data.data.categories))
        },
         methods:{
            getProducts(id){
                this.$router.push({name: 'products', params: {id: id}})
            }
        }
    }

</script>
