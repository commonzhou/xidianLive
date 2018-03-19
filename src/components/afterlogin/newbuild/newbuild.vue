<template>
  <div>
    <Tab></Tab>
    <div id="subhead"><span id="headspan">XXXXXX > 频道选择</span></div>
    <Pindao></Pindao>
  </div>
</template>

<script type="text/ecmascript-6">
import Tab from 'components/afterlogin/subtab/subtab'
import Pindao from 'components/afterlogin/newbuild/pindao'
    export default{
      components:{
        Tab,
        Pindao
      }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
   #subhead
      border-bottom:3px solid #787D7B
      margin-top:5rem
      margin:5rem -1rem 0 -0.6rem
      width:101%
      height:2.5rem
      text-align:left
      #headspan
        display:inline-block
        margin-top:0.5rem
        color:#787D7B
</style>