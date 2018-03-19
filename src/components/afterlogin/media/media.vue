<template>
  <div>
    <Tab></Tab>
    <div class="content">
      <div class="leftmedia">
          <div class="sidetab">
             <div>媒体库</div>
             <div>当前状态：个人版</div>
             <div>现有容量：100G</div>
             <div>已用容量：50G</div>
             <div>视频数量：1</div>
          </div>
      </div>
      <div class="rightmedia">

      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Tab from 'components/afterlogin/subtab/subtab'
import channel from 'store/Channel.js' 
    export default{
      components:{
        Tab
      },
      methods:{
        getAllVedio:function(){
          channel.getAllVedio({}).then(function(res){
             console.log(res)
          }).catch(function(err){
             console.log(err)
          })
        }
      }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
 .content
   width:100%
   height:60rem
   margin-top:5rem
   .rightmedia
     margin-left: 0
     margin-right:-5rem
     overflow: auto 
     height:100%
   .leftmedia
     float:left
     width:15%
     height:100%
     margin-left:-0.5rem
     background-color:#f5f5f5
     .sidetab
       width:100%
       height 15rem
       line-height 3rem
       margin-top:0.15rem
       margin-left:3rem
       color:black
       cursor:pointer
       text-align:left
</style>