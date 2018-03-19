<template>
  <div>
<div class="logo" style="width: 150px;text-align: center;float: left;">视频中心</div>
<el-menu :default-active="activeIndex2" class="el-menu-demo"
 mode="horizontal" @select="handleSelect" id="tab"
 >
  <el-menu-item index="1"> <router-link tag='div' to="/main">首页</router-link></el-menu-item>
  <el-submenu index="2">
    <template slot="title">点播</template>
    <el-menu-item index="2-1"><router-link tag='div' to="/subvideo/vodstudy">学术</router-link></el-menu-item>
    <el-menu-item index="2-2"><router-link tag='div' to="/subvideo/vodparty">晚会</router-link></el-menu-item>
  </el-submenu>
   <el-submenu index="3">
    <template slot="title">直播</template>
    <el-menu-item index="2-1"><router-link tag='div' to="/subvideo/livestudy">学术</router-link></el-menu-item>
    <el-menu-item index="2-2"><router-link tag='div' to="/subvideo/liveparty">晚会</router-link></el-menu-item>
  </el-submenu>
</el-menu>
<div class="line"></div>

  </div>
</template>

<script type="text/ecmascript-6">
export default {
   data() {
      return {
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
   #tab
      margin-top:-50px
      margin-left:200px
      height:60px
   .logo
      color: #4586ee;
      font-size: 28px;
      font-family: "Microsoft YaHei",Arial,Helvetica,sans-serif;
      font-style: oblique;
      margin-top:10px;
</style>


