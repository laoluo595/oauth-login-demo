import request from '@/utils/request.js'
import { CLIENT_SECRETS, CLIENT_ID } from '@/utils/constant'
// 登录验证接口
export const login = (code) => request({ url: '/dev/login/oauth/access_token', method: "post", data : {
    client_secret: CLIENT_SECRETS,
    client_id: CLIENT_ID,
    code
}})

// 拿用户信息
export const getUser = () => request({ url: 'api/user', method: "get"})