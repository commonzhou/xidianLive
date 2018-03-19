<template>
  <div>
    <Tab></Tab>
    <div class="content">
       <div class="managerLeft">
          <div class="sidetab">管理员列表</div>  
       </div> 
       <div class="managerRight"></div>  
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Tab from 'components/afterlogin/subtab/subtab'
    export default{
      components:{
        Tab
      }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
 .content
   width:100%
   height:60rem
   margin-top:5rem
   .managerRight
     margin-left: 0
     margin-right:-5rem
     overflow: auto 
     height:100%
   .managerLeft
     float:left
     width:15%
     height:100%
     margin-left:-0.5rem
     background-color:#f5f5f5
     .sidetab
       width:100%
       height 3rem
       line-height 3rem
       margin-top:0.15rem
       background-color :green
       color:white
       cursor:pointer
</style>