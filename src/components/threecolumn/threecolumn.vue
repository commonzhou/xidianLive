<template>
  <div id="row">
 <el-row >
  <el-col :span="8">
    <el-card :body-style="{ padding: '0px'}" class="card">
      <img src="~assets/imgs/weixin.png" class="image" style="padding: 16px;">
        <div class="bottom clearfix">
          <el-button type="text" class="button">微信直播</el-button>
        </div>
    </el-card>
  </el-col>
  <el-col :span="8">
    <el-card :body-style="{ padding: '0px' }">
      <img src="~assets/imgs/custom.png" class="image" style="padding: 16px;">
      
        <div class="bottom clearfix">
          <el-button type="text" class="button">自定义模板</el-button>
        </div>
     
    </el-card>
  </el-col>
  <el-col :span="8">
    <el-card :body-style="{ padding: '0px' }">
      <img src="~assets/imgs/multiple.png" class="image" style="padding: 16px;">
     
        <div class="bottom clearfix">
          <el-button type="text" class="button">多设备采集</el-button>
      
      </div>
    </el-card>
  </el-col>
</el-row>
  </div>
</template>

<script type="text/ecmascript-6">
    export default{

    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
   #row 
     position:absolute
     top:35rem
     width:100%
     .image
       max-height:6rem
     .image:nth-child(2)
       max-height:4rem
     .button
       font-size:1.5rem
       color:#3C2F41
       &:hover
         color:#2EA9DF
</style>