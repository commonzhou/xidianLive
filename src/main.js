import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import store from './store/'
import axios from 'axios'

Vue.config.productionTip = false
Vue.use(ElementUI)
// /* eslint-disable no-new */
// //构建不需要登陆的界面的白名单
// const whiteList=['/main','/login','/register','/displayvideo']
// router.beforeEach(function(to,from,next){   // 注册一个全局前置守卫
// if(!store.state.login){     //如果用户没有登陆，那么只可以访问白名单里的页面
  
//   if((whiteList.indexOf(to.path)!==-1)||(to.path.indexOf('/subvideo')!==-1)||(to.path.indexOf('/playvideo')!=-1)){  //这里不知道咋写动态路由匹配
//      next()
//   }
//   else{
//     next('/login')
//   }
// }
// else{          //登陆了那就畅通无阻
//   next()
// }
// })

new Vue({
  el: '#app',
  router,
  store,
  axios,
  render: h => h(App)
})
