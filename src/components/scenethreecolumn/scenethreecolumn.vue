<template>
  <div>
      <div id="pretitle">我们的优势</div>
      <div id="linecross"></div>
      <el-container  id="foot">
           <el-aside width="30%" class="item">
              <div class="subtitle">{{"云安全"}}</div>
              <i class="el-icon-upload"></i>
              <div class="content">{{"在广州、东莞、深圳数据中心内布属：下一代防火墙，防病毒、WEB防仿、IPS入侵防护、CC防护。上百G硬件防火墙:抗DDOS攻击"}}</div>
           </el-aside>
           <el-aside width="30%" class="item">
              <div class="subtitle">{{"品牌服务器"}}</div>
              <i class="el-icon-document"></i>
              <div class="content">{{"高品质、高性价比之选，品牌服务器租用与销售，大量品牌 R220\R420\R620现机，支持按月按年租用！品牌服务器批量采购方案"}}</div>
           </el-aside>
            <el-aside width="30%" class="item">
               <div class="subtitle">{{"售后服务"}}</div>
               <i class="el-icon-service"></i>
               <div class="content">
                 <div>{{"数据中心机房现场7*24*365值班模式，出现故障问题，我们为您第一时间解决。提供高效售后保证你的业务开展的后盾！"}}</div>
               </div>
           </el-aside>
      </el-container>
  </div>
</template>

<script type="text/ecmascript-6">
    export default{
      
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
   #pretitle
     font-size:2rem
   #linecross
     height:0.2rem
     width:6rem
     margin:0 auto
     margin-top:0.8rem
     background-color:#656765
    #foot
      margin-top:3rem
      color:#FCFAF2
      .item 
        margin:0 2rem 6rem 2rem
        height:20rem
        background-color:#67C23A
      .item:nth-child(2)
        background-color:#409EFF
      .item:nth-child(3)
        background-color:#F56C6C
      .subtitle
        margin-top:3rem
        font-size:1.5rem
      i 
        margin-top :0.5rem
        width:3rem
      .content
        margin-top:1rem
        text-align:center
        font-size:1.2rem
</style>