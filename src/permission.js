import router from './router'
import { login } from './api/aouth'
import { parsingGithubRes } from './utils/utils'
const whiteList = [
  '/oauthRedirect',
  '/'
]

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')
  if(token) {
    next()
  } else {
    // 没有token
    if (to.path === '/oauthRedirect' && to.query && to.query.code) {
      login(to.query.code)
      .then(res => {
        const { access_token } = parsingGithubRes(res)
        localStorage.setItem('token', access_token)
        next('/success')
      })
    } else if (whiteList.indexOf(to.path) !== -1) {
      // 在免登录白名单，直接进入
      next()
    } else {
      next(`/`) // 否则全部重定向到首页
    }
  }
})

router.afterEach(() => {
})
