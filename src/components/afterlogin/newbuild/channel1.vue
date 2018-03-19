<template>
  <div>
      <Tab></Tab>
      <div id="subhead"><span id="headspan">XXXXXX > 直播列表</span></div>
      <Channel></Channel>
  </div>
</template>

<script type="text/ecmascript-6">
import Tab from 'components/afterlogin/subtab/subtab'
import Channel from 'components/afterlogin/newbuild/newchannel'
    export default{
      components:{
        Tab,
        Channel
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