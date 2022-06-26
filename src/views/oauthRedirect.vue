<template>
    <div>
        获取授权中。。如访问不到github请稍后
        <el-button type="primary" round @click="retry">重试</el-button>
    </div>
</template>

<script>
    import { login } from '@/api/aouth'
    import { parsingGithubRes } from '@/utils/utils'
    export default {
        methods: {
            // 重试
            retry() {
                const { code } = this.$route.query
                login(code)
                .then(res => {
                    const { access_token } = parsingGithubRes(res)
                    localStorage.setItem('token', access_token)
                    this.$router.replace('/success')
                })
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>