<template>
    <div class="login_success">
        <el-descriptions title="用户信息" direction="vertical" :column="4" border>
            <el-descriptions-item label="用户名">{{user.login}}</el-descriptions-item>
            <el-descriptions-item label="头像"><img :src="user.avatar_url" alt=""></el-descriptions-item>
        </el-descriptions>
        <el-button type="primary" round @click="logout">退出</el-button>
    </div>
</template>

<script>
import { getUser } from '@/api/aouth'
export default {
    name: 'loginSuccess',
    data() {
        return {
            user: {}
        }
    },
    created () {
        this.getUserHttp()
    },
    methods: {
        getUserHttp() {
            getUser()
            .then(res => {
                this.user = res
            })
        },
        // 退出
        logout() {
            localStorage.removeItem('token')
            this.$router.replace('/')
        }
    },
}
</script>

<style lang="scss" scoped>

</style>