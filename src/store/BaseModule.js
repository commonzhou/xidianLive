/*
zhoufan writes it as the common ajax api with axios
BaseModule.js is the top level,which is a base module
*/
import axios from 'axios'
import qs from 'qs'
class BaseModule{
    constructor(){
        this.$http = axios.create({
            baseURL:'',
            headers:{
                'Content-Type':'application/json'
            }
        })
        this.dataMethodDefaults={
            headers:{
                'Content-Type':'application/x-www-form-urlencoded'
            },
            transformRequest:function(data){
                return qs.stringify(data)
                //对象解析为URL
            }
        }
    }
    // get(url,config={}){
    //     return this.$http.get(url,config)
    // }
    get(url, config = {}){
        return this.$http.get(url, config)
    }
    post(url,data=undefined,config={}){
        return this.$http.post(url,JSON.stringify(data))
        // ...变量  此为rest参数，代替arguments
    }
}

export default BaseModule