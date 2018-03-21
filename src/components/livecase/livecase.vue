<template>
  <div>
    <!-- <div class="image">
      <img src="~assets/imgs/back02.jpg">
    </div>
    <livecolumn></livecolumn> -->
  </div>
</template>

<script type="text/ecmascript-6">
 import Tab from 'components/common/tab'
 import Foot from 'components/footer/footer'
 import livecolumn from 'components/livecasecolumn/livecasecolumn'
    export default{
      data(){
           return{
            user:{},
            choosePage:1
           }
       },
      components:{
        Tab,
        Foot,
        livecolumn
      }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
     .image 
      width:100%
      position:relative
      margin:0 -10px
      top:-5rem
      zoom:1
      img 
        max-width:95rem
        height:30rem
</style>