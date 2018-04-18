<template>
  <div>
    <Tab></Tab>
    <sidebar></sidebar>
    <goTop></goTop>
    <router-view class="main"></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
 import Tab from 'containers/manage/manageTab'
 import sidebar from 'containers/manage/sidebar'
 import goTop from 'components/common/goTop'

    export default{
      data(){
           return{
           }
       },
      components:{
        Tab,
        sidebar,
        goTop
      }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    .main {
    min-height: calc(100vh - 454px);
    overflow: hidden;
    padding:300px;
    padding-top:8vh;
  }  
</style>