<template>
    <el-container id="app">
        <el-header>
            <el-menu :router="true" mode="horizontal" >
                <el-menu-item index="/">
                    Home
                </el-menu-item>
                <el-menu-item index="/about">
                    About
                </el-menu-item>
                <el-menu-item index="/cart">
                    Cart
                </el-menu-item>

            </el-menu>
            <!--<router-link to="/">Home</router-link> |-->
            <!--<router-link to="/about">About</router-link>-->
        </el-header>
        <router-view/>
    </el-container>
</template>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
