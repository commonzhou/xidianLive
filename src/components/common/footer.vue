<template>
  <div>
     <el-container style="border: 1px solid #eee" id="foot">
           <el-aside width="33%">
              <div class="subtitle">{{"关于我们"}}</div>
              <div class="content">{{"学术直播成立于2017年，大型学术会议级直播。打造高性能、高稳定，优质直播产品。"}}</div>
           </el-aside>
           <el-aside width="33%">
              <div class="subtitle">{{"邮件订阅"}}</div>
              <div class="content">{{"订阅了解更多的产品促销活动信息，每月1号我们将最新信息发送给您"}}</div>
           <el-form  label-width="100px" class="inputform">
             <el-form-item  prop="pass">
              <el-input type="text"  placeholder="请输入邮箱">
                <template slot="append">.com</template>
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="()=>{}">加入我们</el-button>
            </el-form-item>
           </el-form>
           </el-aside>
            <el-aside width="33%">
               <div class="subtitle">{{"联系我们"}}</div>
               <div class="content">
                 <div>{{"TEL:029-6663 5553"}}</div>
                 <div>{{"Email: wggao@stu.xidian.edu.cn"}}</div>
                 <div>{{"视格乐网络科技有限公司"}}</div>
                 <div>{{"西安市雁塔区太白南路2号"}}</div>
                 <div>{{"打开我的位置"}}</div>
               </div>
           </el-aside>
           
      </el-container>
     
      <div id="bottomfont">© 2017 视格乐 版权所有.打造极致会议直播租用产品　陕B1.B2-20061057.</div>

  </div>
</template>

<script type="text/ecmascript-6">
    export default{

    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
   #foot
     background-color:#1C1C1C
     width:99vw
     margin:0 auto
     margin-left:-0.3vw
     color:#FCFAF2
     overflow hidden
     height:20rem
     text-align:left
     .subtitle
       margin-top:2rem
       font-size:1.2rem
       margin-left:5rem
     .content
       font-size:0.8rem
       margin-top:1rem
       line-height:2.5rem
       margin-left:5rem
     .inputform
       margin:1.5rem 1.4rem 0 -1.2rem
</style>