// 登陆注册的ajax请求模块
import BaseModule from './BaseModule'
class LogReg extends BaseModule{
    constructor(){
        super()    
    }
    postlogin(data){
        return this.post('/user/login',data)
    }
    forgetPwd(data){
        return this.post('/user/forgetPassword',data)
    }
    register(data){
        return this.post('/user/register',data)
    }
    updatePwd(data){
        return this.post('/user/updatePassword',data)
    }
}

export default new LogReg()