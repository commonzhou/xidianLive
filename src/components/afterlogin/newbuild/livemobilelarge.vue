<template>
  <div class="fullscreen" v-bind:style="styleObject">
    <el-container class="container">
     <el-header class="head">
        <i class="el-icon-arrow-left leftarrow"></i>
     </el-header>
     <el-main class="main">
        <video src="http://v2v.cc/~j/theora_testsuite/320x240.ogg" controls preload></video>
    </el-main>
    <el-footer class="foot" height="35%">
        <el-button type="primary" class="large" @click="tosmall"><i class="el-icon-search"></i></el-button>
    </el-footer>
  </el-container>
  </div>
</template>

<script type="text/ecmascript-6">
    export default{
      data(){
          return{
            styleObject:{
              width:document.documentElement.clientWidth + 'px',
              height:document.documentElement.clientHeight + 'px'
            }
          }
      },
      methods:{
        tosmall:function(){
            window.location.href="/#/livemobile"       // 
        }  
      }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
   .fullscreen
     margin:0 auto
     border:1px solid red
     
</style>