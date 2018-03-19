<template>
  <div>
  <div id="subtitle">所有频道</div>
  <div class='row'>
  <el-row :gutter="20" id="elrow">
  <!-- <el-col :span="8" class="column">
    <el-card :body-style="{ padding: '0px' }">
      <img :src="channelInfo[0].imgUrl" class="image">
      <div style="padding: 10px;"  @click="newchannel">
        <span>{{channelInfo[0].channelId}}</span>
      </div>
    </el-card>
  </el-col>
    <el-col :span="8" class="column">
    <el-card :body-style="{ padding: '0px' }">
      <img src="~assets/imgs/default_cover.jpg" class="image">
      <div style="padding: 10px;">
        <span>{{channelInfo[0].channelId}}</span>
      </div>
    </el-card>
  </el-col>
    <el-col :span="8" class="column">
    <el-card :body-style="{ padding: '0px' }">
      <img src="~assets/imgs/default_cover.jpg" class="image">
      <div style="padding: 10px;">
        <span>频道三</span>
      </div>
    </el-card>
   </el-col> -->
    
    <el-col :span="8" class="column">
    <el-card :body-style="{ padding: '0px' }">
      <img src="src/assets/imgs/default_cover.jpg" class="image">
      <div style="padding: 1px;">
        <el-button type="text" @click="dialogVisible = true">新建频道</el-button>
      </div>
    </el-card>
  </el-col>

</el-row>
  </div>
  <el-dialog
  title="新建频道"
  :visible.sync="dialogVisible"
  width="30%"
  center id="ellog">
   <el-form :model="form">
    <el-form-item label="活动名称" :label-width="formLabelWidth">
      <el-input v-model="form.name" auto-complete="off"></el-input>
    </el-form-item>
  </el-form>
  <span class="upload">封面图片  重新上传</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false;createNewChannel()">确 定</el-button>
  </span>
</el-dialog>
  </div>
</template>

<script type="text/ecmascript-6">
import channel from 'store/Channel.js'
    export default{
      data(){
          return{
             dialogVisible:false,
             form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px',
        channelInfo:[
          {channelId:'频道一',imgUrl:'src/assets/imgs/default_cover.jpg'},
          {channelId:'频道二',imgUrl:'src/assets/imgs/default_cover.jpg'},
          {channelId:'频道三',imgUrl:'src/assets/imgs/default_cover.jpg'}
        ]
          }
      },
        mounted(){
          console.log('ddd')
          this.getAllChannel();
          this.renderNewChannel()
        },
      methods:{
        newchannel:function(){
           window.location.href="/#/channel1"
        },
        renderNewChannel:function(){
                 var elrow=document.getElementById("elrow");
                 var elnew=document.getElementsByClassName("column")[0];
                 elrow.innerHTML=null;
                 elrow.appendChild(elnew); 
           for(let i=0;i<this.channelInfo.length;i++){
             var elcol=document.createElement('div');
             elcol.innerHTML=`<div data-v-4d7803cc class="column el-col el-col-8">
    <div  class="el-card">
    <div  style="padding: 0px" class='el-card__body'>
      <img data-v-4d7803cc src=${this.channelInfo[i].imgUrl} class="image">
    </div>
      <div data-v-4d7803cc style="padding: 10px;">
        <span onclick="window.location.href='/#/channel1'">${this.channelInfo[i].channelId}</span>
        <span class="delete">删除</span>
      </div>
    </div>
  </div>`;
              elrow.appendChild(elcol);
           };
           var del=document.getElementsByClassName("delete");
           var that=this;
           for(let i=0;i<del.length;i++){
             del[i].onclick=function(){
           that.deleteChannel(i);
           //this.channelInfo.splice(i,1);
           //this.renderNewChannel();
           //console.log("aaa");
}
           }
        },
        deleteChannel:function(index){
          this.channelInfo.splice(index,1);
           this.renderNewChannel();
        },
        createNewChannel:function(){
           var temp={channelId:this.form.name,imgUrl:'src/assets/imgs/default_cover.jpg'};
           this.channelInfo.push(temp);
           this.renderNewChannel();
           channel.createNewChannel({}).then(
             function(res){
               console.log(res)
             }
           ).catch(function(err){
               console.log(err)
           })
        },
        getAllChannel:function(){
          channel.getChannelList('jjj').then(
            function(res){
              console.log(res);
            }
          ).catch(function(err){
             console.log(err)
          })
        },
        getVedioInChannel:function(){
          channel.getVedioInChannel(3).then(function(res){
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
     margin:1rem 0 10rem 13rem
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
   #subtitle
     font-size:1.5rem 
     text-align:left
     margin:2rem 0 2rem 0
</style>