<template>
  <div>
      <displayTab></displayTab>
      <div class="bodyhead">
                <span class="bodyheadtext">
                    <h2>{{title}}</h2>
                </span>
    </div>
 <div class='row'>
<el-row :gutter="20" >
  <el-col :span="8" class="column">
    <el-card :body-style="{ padding: '0px' }">
      <img src="~assets/imgs/default_cover.jpg" class="image">
      <div style="padding: 10px;" class="title">
         <router-link to="/playvideo/1" tag="span">某地某大佬</router-link>     <!--tag设为span/div，消除了router-link的原有样式。。。-->
      </div>
      <div class="bottom"><img src="~assets/imgs/correct-icon.png" >233<img src="~assets/imgs/correct-icon.png" class="right">11</div>
    </el-card>
  </el-col>
    <el-col :span="8" class="column">
    <el-card :body-style="{ padding: '0px' }">
      <img src="~assets/imgs/default_cover.jpg" class="image">
      <div style="padding: 10px;" class="title">
         <router-link to="/playvideo/1" tag="span">某地某大佬</router-link>
      </div>
       <div class="bottom"><img src="~assets/imgs/correct-icon.png" >233<img src="~assets/imgs/correct-icon.png" class="right">11</div>
    </el-card>
  </el-col>
    <el-col :span="8" class="column">
    <el-card :body-style="{ padding: '0px' }">
      <img src="~assets/imgs/default_cover.jpg" class="image">
      <div style="padding: 10px;" class="title">
         <router-link to="/playvideo/1" tag="span">某地某大佬</router-link>
      </div>
       <div class="bottom"><img src="~assets/imgs/correct-icon.png" >233<img src="~assets/imgs/correct-icon.png" class="right">11</div>
    </el-card>
  </el-col>
    <el-col :span="8" class="column">
    <el-card :body-style="{ padding: '0px' }">
      <img src="~assets/imgs/default_cover.jpg" class="image">
      <div style="padding: 10px;" class="title">
         <router-link to="/playvideo/1" tag="span">某地某大佬</router-link>
      </div>
       <div class="bottom"><img src="~assets/imgs/correct-icon.png" >233<img src="~assets/imgs/correct-icon.png" class="right">11</div>
    </el-card>
  </el-col>
    <el-col :span="8" class="column">
    <el-card :body-style="{ padding: '0px' }">
      <img src="~assets/imgs/default_cover.jpg" class="image">
      <div style="padding: 10px;" class="title">
         <router-link to="/playvideo/1" tag="span">某地某大佬</router-link>
      </div>
       <div class="bottom"><img src="~assets/imgs/correct-icon.png" >233<img src="~assets/imgs/correct-icon.png" class="right">11</div>
    </el-card>
  </el-col>
    <el-col :span="8" class="column">
    <el-card :body-style="{ padding: '0px' }">
      <img src="~assets/imgs/default_cover.jpg" class="image">
      <div style="padding: 10px;" class="title">
         <router-link to="/playvideo/1" tag="span">某地某大佬</router-link>
      </div>
       <div class="bottom"><img src="~assets/imgs/correct-icon.png" >233<img src="~assets/imgs/correct-icon.png" class="right">11</div>
    </el-card>
  </el-col>
</el-row>
  </div>
  </div>
</template>

<script type="text/ecmascript-6">
import displayTab from 'components/videoDisplay/displayTab'
export default {
   components:{
     displayTab
   },
   data(){
       return{
           title:null
       }
   },
   created(){
       this.fetchData()
   },
   watch:{
      '$route':'fetchData'
   },
   methods:{
       fetchData(){
          switch(this.$route.params.id){
              case 'vodparty':
                   this.title="晚会点播";
                   break;
              case 'vodstudy':
                   this.title="学术点播";
                   break;
              case 'liveparty':
                   this.title="晚会直播";
                   break;
              case 'livestudy':
                   this.title="学术直播";
                   break;
              default: 
                   this.title="你他妈在逗我";
          }
       }
   }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .bodyhead
       position: relative;
       width: 90%;
       height: 40px;
       white-space: nowrap;
       margin: 0 auto;
       .bodyheadtext
         width: 40px;
         height: 39px;
         display: inline-block;
         position: relative;
         float: left;
     .row
         width:80%
         margin:1rem 0 1rem 13rem
        .column 
           height:10rem
           width:16rem
           margin-bottom:6rem
           margin-right:1rem
       .image
           height:10rem
           width:16rem
           margin-top:-0.6rem
       .title
           font-size:1.2rem
           margin-top:-0.6rem
       .bottom
           margin-top:-0.5rem
           img 
             height:1rem
             width:1rem
           .right 
             margin-left:2rem
</style>


