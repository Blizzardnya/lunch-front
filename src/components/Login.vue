<template>
    <el-main>
        <h1>Авторизация</h1>
        <el-row :gutter="12">
            <el-col :span="12">
                <el-input placeholder="Введите логин" v-model="authData.username"></el-input>
            </el-col>
            <el-col :span="12">
                <el-input placeholder="Введите пароль" v-model="authData.password" show-password></el-input>
            </el-col>
        </el-row>
        <el-row>
            <el-button type="success" @click="LOGIN(authData)">Войти</el-button>
        </el-row>
    </el-main>
</template>

<script>
    import {mapActions} from 'vuex'

    export default {
        name: "Login",
        data() {
            return {
                authData: {
                    username: '',
                    password: ''
                }
            }
        },
        methods: {
            ...mapActions('login', ['LOGIN'])
        }
    }
</script>

<style scoped>
    .el-row {
        margin-bottom: 10px;

    &
    :last-child {
        margin-bottom: 0;
    }

    }
</style>