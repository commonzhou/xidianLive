<template>
  <div class="tab">
    <router-link tag='div' class="tab-item" to="/newbuild">学术直播</router-link>
    <router-link tag='div' class="tab-item" to="/newbuild">频道管理</router-link>
    <router-link tag='div' class="tab-item" to="/manager">账户管理</router-link>
    <router-link tag='div' class="tab-item" to="/media">媒体库</router-link>
    <router-link tag='div' class="tab-item" to="/personal">个人中心</router-link>
    <div class="tab-item"></div>
    <router-link tag='div' class="tab-item" to="/newmain">返回首页</router-link>
    <router-link tag='div' class="tab-item" to="/main">注销</router-link>
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
     .tab-item:nth-child(6)
       flex:0 0 20%
     .tab-item:last-child
       flex:0 0 4%
</style>