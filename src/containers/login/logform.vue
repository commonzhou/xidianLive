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
      return {
        checked:'',
        ruleForm2: {
          name: '',
          pass: '',
        },
        rules2: {
          name: [
             { required: true, message: '请输入用户名', trigger: 'blur' },
             { min: 11, max: 11, message: '长度11个字符', trigger: 'blur' }
          ],
          pass: [
             { required: true, message: '请输入密码', trigger: 'blur' },
             { min: 6, max: 12,message: '请输入6-12位密码', trigger: 'blur' }
          ]
        }
      };
    },
    components:{
      //actionStore
    },
    methods: {
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
                  alert("sb，用户名或者密码不对啊")
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
     height:22rem
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
        margin:1.6rem 0rem 2rem 9.5rem
        margin-left:4vw
        .check
          margin-right 8vw
  #subtitle
    margin:0 auto
    margin-top:9rem
    color:#00896C
    font-size:2rem
</style>
