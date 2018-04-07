<template>
  <div>
    <div id="subtitle">登  陆</div>
<el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="30px" class="demo-ruleForm form"  size="medium ">
  <el-form-item  prop="name" class="item item1">
    <el-input  v-model="ruleForm2.name" auto-complete="off" placeholder="手机号"></el-input>
  </el-form-item>
  <el-form-item  prop="pass" class="item">
    <el-input  v-model="ruleForm2.pass" auto-complete="off" placeholder="密码"></el-input>
  </el-form-item>
  <el-form-item  prop="graph" class="item">
    <el-input v-model="ruleForm2.graph" placeholder="请输入数字验证码"  class=" item2"></el-input>
    <input type="button" id="code" @click="createCode"  class="verification" v-model="checkCode"/>
  </el-form-item>
  <div id="check">
      <el-checkbox v-model="checked" class="check" >自动登陆 </el-checkbox>
      <span class="password">忘记密码</span>
  </div>
  <el-form-item class="buttontotal">
    <el-button type="primary" @click="submitForm('ruleForm2')" class="buttons">登陆</el-button>
    <router-link to="/register"><el-button @click="resetForm('ruleForm2')" class="buttons">注册</el-button></router-link>
  </el-form-item>
</el-form>  
  </div>
</template>

<script type="text/ecmascript-6">
// import axios from 'axios'
// import qs from 'qs'
// axios.defaults.timeout=5000;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';  
// axios.defaults.baseURL='http://118.89.112.125/xidianlive';
import LogReg from 'store/LogReg.js'
import {setStore, getStore, removeStore} from 'store/storage.js'

  export default {
    data() {
       var validateCode = (rule, value, callback) => {
        if (value!=this.checkCode) {
          callback(new Error('请输入验证码'));
        } 
        else {
          callback();
        }
      };
      return {
        checked:'',
        checkCode:'',    //用于验证码
        ruleForm2: {
          name: '',
          pass: '',
          graph:''
        },
        rules2: {
          name: [
             { required: true, message: '请输入用户名', trigger: 'blur' },
             { min: 11, max: 11, message: '长度11个字符', trigger: 'blur' }
          ],
          pass: [
             { required: true, message: '请输入密码', trigger: 'blur' },
             { min: 6, max: 12,message: '请输入6-12位密码', trigger: 'blur' }
          ],
          graph: [
            { required: true, message: '请输入验证码', trigger: 'blur' },
            { message: '辣鸡，连个验证码都搞不定', trigger: 'blur',validator: validateCode }
          ]
        }
      };
    },
    components:{
    },
    mounted(){
      this.createCode()               // 绑定的时候，就手动触发一次，防止进去还需要用户点击生成验证码，low。啊，防止csrf的第一道防线啊
    },
    methods: {
      createCode(){
  var code = ""; 
  var codeLength = 4;//验证码的长度 
  var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R', 
     'S','T','U','V','W','X','Y','Z');//随机数 
  for(var i = 0; i < codeLength; i++) {
   //循环操作 
   var index = Math.floor(Math.random()*36);//取得随机数的索引（0~35） 
   code += random[index];//根据索引取得随机数加到code上 
  } 
  this.checkCode = code;//把code值赋给验证码 
},
      submitForm(formName) {
        var that=this;
        this.$refs[formName].validate((valid) => {
          if (valid) {
             LogReg.postlogin({
               "userName":this.ruleForm2.name,
               "password":this.ruleForm2.pass
             }).then(
                function(res){
                console.log(res);
                if(res.data.retureValue==0){
                  setStore("userName",that.ruleForm2.name);
                  setStore("password",that.ruleForm2.pass);
                  that.$store.state.login=true;
                  that.$router.push('/main');
                  // window.location.href="/#/newmain";
                }
                else{
                  alert("用户名或者密码不对啊")
                }
                }
             ).catch(function(err){
               console.log(err);
             })
           
            // axios.post('/user/login',qs.stringify({
            //   userName:this.ruleForm2.name,
            //   password:this.ruleForm2.pass
            // })).then(
            //   function(res){console.log(res);
            //    window.location.href="/#/newmain";
            //   }  
            // ).catch(function(err){
            //   console.log(err);
            // });
           
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
   .form
     border:2px solid #00896C
     width:40%
     height:24rem
     margin:2rem auto
     margin-bottom:8rem
     .item
       width:60%
       margin:0 auto
       margin-top:1.6rem
     .item1
       margin-top:3.5rem
     ::-webkit-input-placeholder
       color:#91989F
     :-moz-placeholder
       color:#91989F
     ::-moz-placeholder
       color:#91989F
     :-ms-input-placeholder
       color:#91989F
     .item2
       width:80%
       float left
     .buttontotal
      margin:0 auto
      margin-top:2rem
      .buttons
        color:white
        background-color:#00896C
        width:10vw
        text-align center 
        margin-right:1vw
     #check 
        width:80%
        font-size:0.9rem
        margin:2rem 0rem 2rem 9.5rem
        margin-left:4vw
        .check
          margin-right 8vw
  #subtitle
    margin:0 auto
    margin-top:9rem
    color:#00896C
    font-size:2rem

    .verification{
    vertical-align: middle;
    
    overflow hidden;
   }
 
</style>
