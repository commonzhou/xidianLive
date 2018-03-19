<template>
  <div>
  <div id="subtitle">注  册</div>
<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="30px" class="demo-ruleForm form" size="	medium ">
  <el-form-item  prop="name">
    <el-input v-model="ruleForm.name" placeholder="请输入手机号码"  class="item item1"></el-input>
  </el-form-item>
  <el-form-item  prop="graph">
    <el-input v-model="ruleForm.graph" placeholder="请输入图形验证码"  class="item"></el-input>
  </el-form-item>
 <el-form-item  prop="messages">
    <el-input v-model="ruleForm.messages" placeholder="请输入短信验证码"  class="item"></el-input>
  </el-form-item>
  <el-form-item  prop="secret1">
    <el-input v-model="ruleForm.secret1" placeholder="请输入密码"  class="item"></el-input>
  </el-form-item>
  <el-form-item  prop="secret2">
    <el-input v-model="ruleForm.secret2" placeholder="请确认密码"  class="item"></el-input>
  </el-form-item>
  <el-checkbox v-model="checked" class="check" >我已经阅读并同意相关服务条款 </el-checkbox>
  <el-form-item class="buttontotal">
    <el-button  @click="submitForm('ruleForm')" class="buttons">注册</el-button>
    <el-button @click="resetForm('ruleForm')" class="buttons">重置</el-button>
  </el-form-item>
</el-form>
      
  </div>
</template>

<script type="text/ecmascript-6">
import LogReg from 'store/LogReg.js'
  export default {
    data() {
      return {
        checked:false,
        ruleForm: {
          name: '',
          graph: '',
          messages: '',
          secret1: '',
          secret2: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 11, max: 11, message: '长度11个字符', trigger: 'blur' }
          ],
          graph: [
            { required: true, message: '请输入图形验证码', trigger: 'blur' },
            { message: '辣鸡，连个验证码都搞不定', trigger: 'blur' }
          ],
           messages: [
            { required: true, message: '请输入短信验证码', trigger: 'blur' },
            { message: '辣鸡，连个验证码都搞不定', trigger: 'blur' }
          ],
           secret1: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 6, max: 12,message: '请输入6-12位密码', trigger: 'blur' }
          ],
           secret2: [
            { required: true, message: '请确认密码', trigger: 'blur' },
            { min: 6, max: 12,message: '请输入6-12位密码', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            //window.location.href='#/login'
            LogReg.register({
              userName:this.ruleForm.name,
              password:this.ruleForm.secret2
            }).then(function(res){
              console.log(res);
              window.location.href="/#/newmain";
            }).catch(function(err){
              console.log(err);
              alert("注册出错喽，哈哈哈哈")
            })
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
     height:35rem
     margin:2rem auto
     margin-bottom:8rem
     .item
       width:60%
       margin:0 auto
       margin-top:0.5rem
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
        width:18%
  #subtitle
    margin:0 auto
    margin-top:9rem
    color:#00896C
    font-size:2rem
</style>
