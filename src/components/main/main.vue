<template>
  <div>
    <tab></tab>
    <Swipe></Swipe>
    <div class="text">学术直播
    <p class="textmin"> 拒绝平庸，唯求卓越</p>
    </div>
   <Threecolumn></Threecolumn>
   <leftright></leftright>
   <Foot></Foot>
  </div>
</template>

<script type="text/ecmascript-6">
import Tab from 'components/common/tab'
import Swipe from 'components/swipe/swipe'
import Threecolumn from 'components/threecolumn/threecolumn'
import leftright from 'components/mainpageleftright/mainpageleftright'
import Foot from 'components/footer/footer'
 export default{
      name:'index',
      components:{
        Tab,
        Swipe,
        Threecolumn,
        leftright,
        Foot
      }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .text
     position:absolute
    
     width:30rem
     top:18rem
     left:0
     bottom:0
     right:0
     margin:auto
     font-size:2rem
     z-index:10
     color:#0B1013
     .textmin
       font-size:1.5rem
 
</style>