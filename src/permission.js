import {router} from './router'

router.beforeEach(async (to, from) => {
   //当首页加载跳转到home
    if (to.path === '/') {
        return '/home'
    }
})