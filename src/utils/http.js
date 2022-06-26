// 封装请求
import axios from 'axios'
import { Message } from 'element-ui'
axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'
// 请求
const http = axios.create({
    baseURL: "",
    timeout: 6000
})
// 请求拦截
http.interceptors.request.use(config => {
    //请求头设置
    let token = localStorage.getItem('token') || ''
    config.headers.Authorization = `token ${token}`
    return config
}, err => {
    console.log(err);
})
// 响应拦截
http.interceptors.response.use(res => {
    const status = +res.status || 200
    if (status === 500) {
        Message({
            message: '500了，请看看是否能正常访问github',
            type: 'error'
        })
        return Promise.reject(new Error('gg'))
    } else {
        return res.data
    }
}, error => {
    Message({
        message: '500了，请看看是否能正常访问github',
        type: 'error'
    })
    return Promise.reject(new Error(error))
})
// 返出
export default http