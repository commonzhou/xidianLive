<template>
  <div>
    <Tab></Tab>
    <router-view class="main"></router-view>
    <Foot></Foot>
  </div>
</template>

<script type="text/ecmascript-6">
 import Tab from 'components/common/tab'
 import Foot from 'components/common/footer'
    export default{
      data(){
           return{
           }
       },
      components:{
        Tab,
        Foot
      }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    .main {
    min-height: calc(100vh - 454px);
    overflow: hidden;
    width: 100%;
  }  
</style>