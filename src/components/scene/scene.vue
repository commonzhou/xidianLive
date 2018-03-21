<template>
  <div>
    <Tab></Tab>
    <div class="image">
      <img src="~assets/imgs/back02.jpg">
    </div>
    <threecolumn></threecolumn>
    <Foot></Foot>
  </div>
</template>

<script type="text/ecmascript-6">
import Tab from 'components/common/tab'
import Foot from 'components/footer/footer'
import threecolumn from 'components/scenethreecolumn/scenethreecolumn'
    export default{
      name:'scene',
      components:{
        Tab,
        Foot,
        threecolumn
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
        height:36rem
</style>