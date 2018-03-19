<template>
  <div>
     <tab></tab>
     <div class="content">
        <div class="leftPerson">
            <ul>
              <li>基本信息</li>
              <li>认证信息</li>
              <li>密码设置</li>
            </ul>
        </div>
        <div class="rightPerson">
            <Info></Info>
        </div>
     </div>
  </div>
</template>

<script type="text/ecmascript-6">
import tab from 'components/afterlogin/subtab/subtab'
import Info from 'components/afterlogin/personnal/personinfo.vue'
    export default{
      components:{
        tab,
        Info
      }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
 .content
   width:100%
   height:60rem
   margin-top:5rem
   .rightPerson
     margin-left: 0
     margin-right:-5rem
     overflow: auto 
     height:100%
   .leftPerson
     float:left
     width:15%
     height:100%
     margin-left:-0.5rem
     background-color:#f5f5f5
     ul
       width:100%
       height 15rem
       line-height 3rem
       margin-top:0.5rem
       margin-left:3rem
       color:black
       cursor:pointer
       text-align:left
       list-style :none
</style>