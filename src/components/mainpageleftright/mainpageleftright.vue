<template>
  <div id="leftright">
      <el-container style="height: 35rem; border: 1px solid #eee;margin-top:20px">
           <el-main width="60%">
             <el-menu  style='border:0px solid red;margin-top:13rem;'>
                <el-menu-item-group>
                <el-menu-item index="1-1" style="fontSize:2.5rem">专属后台</el-menu-item>
                <el-menu-item index="1-2" style="fontSize:1.1rem;whiteSpace:pre-wrap;line-height:1.5rem;margin-top:1.5rem"> 提供内嵌于企业官网的独立登录入口，为您品牌化定制专属后台对接企业OA
               员工库或原有用户库，让您的用户同样拥有直播能力</el-menu-item>
                </el-menu-item-group>
                <div>{{'hhhhh,这就可以了'}}</div>
             </el-menu>
           </el-main>
           <el-aside width="40%" >
             <img src="~assets/imgs/enterprise-01.png" class="image">
           </el-aside>
           
      </el-container>
       <el-container style="height: 35rem; border: 1px solid #eee">
           <el-aside width="40%">
              <img src="~assets/imgs/enterprise-01.png" class="image img2">
           </el-aside>
           <el-main width="60%">
                <el-menu  style='border:0px solid red;margin-top:10rem;'>
                <el-menu-item-group>
                <el-menu-item index="1-1" style="fontSize:2.5rem">分工协作</el-menu-item>
                <el-menu-item index="1-2" style="fontSize:1.1rem;whiteSpace:pre-wrap;line-height:1.5rem;margin-top:1.5rem"> 根据直播流程分工设置权限，多人协作，运营制作大规模直播</el-menu-item>
                </el-menu-item-group>
             </el-menu>
           </el-main>
      </el-container>
       <el-container style="height: 35rem; border: 1px solid #eee">
           <el-main width="60%">
                <el-menu  style='border:0px solid red;margin-top:10rem;'>
                <el-menu-item-group>
                <el-menu-item index="1-1" style="fontSize:2.5rem">资源调配</el-menu-item>
                <el-menu-item index="1-2" style="fontSize:1.1rem;whiteSpace:pre-wrap;line-height:1.5rem;margin-top:1.5rem"> 将直播时长等直播资源分配到子账号；子账号可以对已分配的资源进行独立管控，实现更多的应用场景</el-menu-item>
                </el-menu-item-group>
             </el-menu>
           </el-main>
           <el-aside width="40%">
               <img src="~assets/imgs/enterprise-01.png" class="image img3">
           </el-aside>
      </el-container>
  </div>
</template>

<script type="text/ecmascript-6">
    export default{

    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
   .image
      height:24rem
      width:30rem
      padding-top:10rem
   .img2
      padding-top:7rem
   .img3
      padding-top:7rem
</style>