<template>
  <div class="tab">
    <router-link tag='div' class="tab-item" to="/main">学术直播</router-link>
    <router-link tag='div' class="tab-item" to="/main">首页</router-link>
    <router-link tag='div' class="tab-item" to="/scene">应用场景</router-link>
    <router-link tag='div' class="tab-item" to="/purchase">购买服务</router-link>
    <router-link tag='div' class="tab-item" to="/livecase">直播案例</router-link>
    <router-link tag='div' class="tab-item" to="/displayvideo">视频中心</router-link>
    <div class="tab-item"></div>
    <router-link tag='div' class="tab-item" to="/register">注册</router-link>
    <router-link tag='div' class="tab-item" to="/login">登陆</router-link>
  </div>
</template>

<script type="text/ecmascript-6">
    export default{

    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
   .tab 
     display:flex
     width:100%
     height:5rem
     line-height:5rem
     border:1px solid black
     background:rgba(0,0,0,0.7)
     position:absolute
     top:0
     left:0
     right:0
     margin:auto
     overflow hidden
     z-index:11
     .tab-item
       flex:0 0 9%
       opacity:1 
       color:white
       cursor:pointer
       &:hover
         color:#2EA9DF
       transition: background-color .5s ease
       text-align:center  
       font-size:1.2rem
     .tab-item:nth-child(1)
       font-size:2rem
       flex:0 0 25%
     .tab-item:nth-child(7)
       flex:0 0 18%
     .tab-item:nth-child(8)
       flex:0 0 6%
     .tab-item:nth-child(9)
       flex:0 0 4%
</style>