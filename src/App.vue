<template>
    <el-container id="app">
        <el-header>
            <el-menu mode="horizontal" router="true">
            <!--<el-menu mode="horizontal">-->
                <el-menu-item index="/">
                    Home
                </el-menu-item>
                <el-menu-item index="/about">
                    About
                </el-menu-item>
            </el-menu>
        </el-header>
        <router-view/>
    </el-container>
  <!--<div id="app">-->

    <!--<div id="nav">-->
     <!---->
    <!--</div>-->

  <!--</div>-->
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
