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
//构建不需要登陆的界面的白名单
const whiteList=['/main','/login','/register','/displayvideo']
router.beforeEach(function(to,from,next){   // 注册一个全局前置守卫
if(!store.state.login){     //如果用户没有登陆，那么只可以访问白名单里的页面
  
  if((whiteList.indexOf(to.path)!==-1)||(from.path.indexOf('/displayvideo'))!=-1||(to.path.indexOf('/subvideo')!==-1)||(to.path.indexOf('/playvideo')!=-1)){ 
    // 如果路径在白名单里，肯定不需要登录就可以访问，如果不在，但是来自或者通向 视频中心的子页面，那么这也是被允许的，不知道在whiteList怎么写 :=(
     next()
  }
  else if(localStorage.getItem('userName')){         //防止刷新后，自动退出了登录状态...
    next();
  }
  else{
    next('/login')
  }
}
else{          //登陆了那就畅通无阻
  next()
}
})

new Vue({
  el: '#app',
  router,
  store,
  axios,
  render: h => h(App)
})
