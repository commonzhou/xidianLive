webpackJsonp([6],{"0iK4":function(e,r){},Ssjz:function(e,r,t){"use strict";var s=t("Yarq"),o=t.n(s),a=t("AA3o"),l=t.n(a),n=t("xSur"),i=t.n(n),u=t("UzKs"),c=t.n(u),m=t("Y7Ml"),d=t.n(m),p=function(e){function r(){return l()(this,r),c()(this,(r.__proto__||o()(r)).call(this))}return d()(r,e),i()(r,[{key:"postlogin",value:function(e){return this.post("/user/login",e)}},{key:"forgetPwd",value:function(e){return this.post("/user/forgetPassword",e)}},{key:"register",value:function(e){return this.post("/user/register",e)}},{key:"updatePwd",value:function(e){return this.post("/user/updatePassword",e)}}]),r}(t("vdk2").a);r.a=new p},"Y/6C":function(e,r){},"z/MG":function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var s=t("Ssjz"),o={data:function(){return{checked:!1,ruleForm:{name:"",graph:"",secret1:"",secret2:""},rules:{name:[{required:!0,message:"请输入用户名",trigger:"blur"},{min:11,max:11,message:"长度11个字符",trigger:"blur"}],secret1:[{required:!0,message:"请输入密码",trigger:"blur"},{min:6,max:12,message:"请输入6-12位密码",trigger:"blur"}],secret2:[{required:!0,message:"请确认密码",trigger:"blur"},{min:6,max:12,message:"请输入6-12位密码",trigger:"blur"}],graph:[{required:!0,message:"请输入图形验证码",trigger:"blur"},{message:"辣鸡，连个验证码都搞不定",trigger:"blur"}]}}},methods:{submitForm:function(e){var r=this,t=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;s.a.register({userName:r.ruleForm.name,password:r.ruleForm.secret2}).then(function(e){console.log(e),t.$router.push("/main")}).catch(function(e){console.log(e),alert("注册出错喽，哈哈哈哈")})})},resetForm:function(e){this.$refs[e].resetFields()}}},a={render:function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("div",{attrs:{id:"subtitle"}},[e._v("注  册")]),e._v(" "),t("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm form",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"30px",size:"\tmedium "}},[t("el-form-item",{attrs:{prop:"name"}},[t("el-input",{staticClass:"item item1",attrs:{placeholder:"请输入手机号码"},model:{value:e.ruleForm.name,callback:function(r){e.$set(e.ruleForm,"name",r)},expression:"ruleForm.name"}})],1),e._v(" "),t("el-form-item",{attrs:{prop:"secret1"}},[t("el-input",{staticClass:"item",attrs:{placeholder:"请输入密码",type:"password"},model:{value:e.ruleForm.secret1,callback:function(r){e.$set(e.ruleForm,"secret1",r)},expression:"ruleForm.secret1"}})],1),e._v(" "),t("el-form-item",{attrs:{prop:"secret2"}},[t("el-input",{staticClass:"item",attrs:{placeholder:"请确认密码",type:"password"},model:{value:e.ruleForm.secret2,callback:function(r){e.$set(e.ruleForm,"secret2",r)},expression:"ruleForm.secret2"}})],1),e._v(" "),t("el-form-item",{attrs:{prop:"graph"}},[t("el-input",{staticClass:"item",attrs:{placeholder:"请输入图形验证码"},model:{value:e.ruleForm.graph,callback:function(r){e.$set(e.ruleForm,"graph",r)},expression:"ruleForm.graph"}})],1),e._v(" "),t("el-checkbox",{staticClass:"check",model:{value:e.checked,callback:function(r){e.checked=r},expression:"checked"}},[e._v("我已经阅读并同意相关服务条款 ")]),e._v(" "),t("el-form-item",{staticClass:"buttontotal"},[t("el-button",{staticClass:"buttons",on:{click:function(r){e.submitForm("ruleForm")}}},[e._v("注册")]),e._v(" "),t("el-button",{staticClass:"buttons",on:{click:function(r){e.resetForm("ruleForm")}}},[e._v("重置")])],1)],1)],1)},staticRenderFns:[]};var l={components:{Form:t("Z0/y")(o,a,!1,function(e){t("0iK4")},"data-v-23b965d9",null).exports}},n={render:function(){var e=this.$createElement,r=this._self._c||e;return r("div",[r("Form")],1)},staticRenderFns:[]};var i=t("Z0/y")(l,n,!1,function(e){t("Y/6C")},"data-v-4a21a31f",null);r.default=i.exports}});
//# sourceMappingURL=6.2f376a8cc97d16f5f88e.js.map