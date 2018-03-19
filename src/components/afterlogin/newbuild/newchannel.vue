<template>
  <div>
      <div class="subtitle">正在直播</div>
   <div class='row'>
<el-row :gutter="20" >
  <el-col :span="36" class="column">
    <el-card :body-style="{ padding: '0px' }">
      <img src="~assets/imgs/default_cover.jpg" class="image">
      <div style="padding: 10px;">
        <span>
          唱响西电总决赛
        </span>
      </div>
    </el-card>
  </el-col>
    <el-col :span="36" class="column">
    <el-card :body-style="{ padding: '0px' }">
      <img src="~assets/imgs/default_cover.jpg" class="image">
       <div style="padding: 1px;">
         <el-button type="text" @click="dialogVisible = true">新建频道</el-button>
      </div>
    </el-card>
  </el-col>
</el-row>
  </div>
  <div class="subtitle">历史回放</div>
   <div class='row'>
<el-row :gutter="20" >
  <el-col :span="36" class="column">
    <el-card :body-style="{ padding: '0px' }">
      <img src="~assets/imgs/default_cover.jpg" class="image">
      <div style="padding: 10px;">
        <span>
          唱响西电总决赛
        </span>
      </div>
    </el-card>
  </el-col>
    <el-col :span="36" class="column">
    <el-card :body-style="{ padding: '0px' }">
      <img src="~assets/imgs/default_cover.jpg" class="image">
      <div style="padding: 10px;">
        <span>
          唱响西电总决赛
        </span>
      </div>
    </el-card>
  </el-col>
  <el-col :span="36" class="column">
    <el-card :body-style="{ padding: '0px' }">
      <img src="~assets/imgs/default_cover.jpg" class="image">
      <div style="padding: 10px;">
        <span>
          唱响西电总决赛
        </span>
      </div>
    </el-card>
  </el-col>
</el-row>
  </div>

<el-dialog
  title="新建直播"
  :visible.sync="dialogVisible"
  width="30%"
  center>
   <el-form :model="form">
    <el-form-item label="直播名称" :label-width="formLabelWidth">
      <el-input v-model="form.name" auto-complete="off"></el-input>
    </el-form-item>
     <el-form-item label="开始时间" :label-width="formLabelWidth">
      <el-input v-model="form.name" auto-complete="off"></el-input>
    </el-form-item>
     <el-form-item label="结束时间" :label-width="formLabelWidth">
      <el-input v-model="form.name" auto-complete="off"></el-input>
    </el-form-item>
     <el-form-item label="活动地点" :label-width="formLabelWidth">
      <el-input v-model="form.name" auto-complete="off"></el-input>
    </el-form-item>
     <el-form-item label="活动介绍" :label-width="formLabelWidth">
      <el-input v-model="form.name" auto-complete="off"></el-input>
    </el-form-item>
  </el-form>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="newchannel">下一步</el-button>
  </span>

</el-dialog> <el-dialog
  title="新建直播"
  :visible.sync="dialogVisible2"
  width="30%"
  center>
  <span class="upload">节目单</span>
  <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible2 = false">上一步</el-button>
    <el-button @click="dialogVisible2 = false">取 消</el-button>
    <el-button type="primary" @click="buildSuccess">确 定</el-button>
  </span>
</el-dialog>

</el-dialog> <el-dialog
  title="直播创建成功"
  :visible.sync="dialogVisible3"
  width="30%"
  center>
  <span class="upload">直播地址：XXXXXXXXXXXXXXXXXXXXXXXXX</span>
  <span class="upload">分流地址：XXXXXXXXXXXXXXXXXXXXXXXXX</span>
  <span slot="footer" class="dialog-footer">
    <el-button type="primary" @click="livepc">进入直播</el-button>
  </span>
</el-dialog>

  </div>
</template>

<script type="text/ecmascript-6">
import liveInfo from 'store/liveInfo.js'
     export default{
      data(){
          return{
             dialogVisible:false,
             dialogVisible2:false,
             dialogVisible3:false,
             form: {
        },
        formLabelWidth: '6rem'
          }
      },
      methods:{
        newchannel:function(){
          this.dialogVisible=false,
          setTimeout(()=>{
             this.dialogVisible2=true
          },200)
         
        },
        buildSuccess:function(){
            this.dialogVisible2=false,
            setTimeout(()=>{
             this.dialogVisible3=true
          },200)
        },
        livepc:function(){
            this.dialogVisible3 = false,
            window.location.href="/#/livepc",
            liveInfo.createNewLive({}).then(function(res){
                 console.log(res)
            }).catch(function(err){
                console.log(err)
            })
        },
        getLiveChannel:function(){
          liveInfo.getLiveChannel({}).then(function(res){
                 console.log(res)
            }).catch(function(err){
                console.log(err)
            })
        }
      }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
   .row
     width:80%
     margin:1rem 0 0rem 2rem
    .column 
      height:10rem
      width:16rem
      margin-bottom:6rem
      margin-right:1rem
    .image
      height:10rem
      width:16rem
    .upload
      display inline-block
      margin-left:3.1rem
      font-size:0.95rem
   .subtitle
     font-size:1.5rem 
     text-align:left
     margin:1rem 0 2rem 0
</style>


