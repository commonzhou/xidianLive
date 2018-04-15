<template>
  <div id="page-wrapper">
     <h1>新建直播</h1>
     <label for="text">直播名称</label><input type="text" id="text" v-model="name">
     <label for="place">直播地点</label><input type="text" id="place" v-model="location">
     <label for="date">直播日期</label><input type="date" id="date" v-model="date">
     <label for="datetime">开始时间</label><input type="text" id="datetime" v-model="time">
      <label for="timeend">结束时间</label><input type="text" id="timeend" v-model="timeEnd">
     <label for="content">直播简介</label><input type="text" id="content" v-model="info">
     <button @click="submit">提交</button>
  </div>

 
</template>
<script>
import liveHandler from 'store/liveinfo.js'
var user=localStorage.getItem('userName');
export default {
  data(){
    return{
      name:'',
      location:'',
      date:'',
      time:'',
      timeEnd:'',
      info:'',
      channel:''
    }
  },
  watch:{
    channelId:function(val){
        this.channel=val;
    }
  },
  methods:{

    submit:function(){
      if((this.name=="") || (this.info=="")||(this.location=="")||(this.time=="")||(this.date=='')||(this.timeEnd=="")){
        //不知为何，！this.name就不行，这是为啥，可能'' 不是false
        alert("填写完信息再提交！");
      }
      else{
         var that=this;
         var userId=sessionStorage.getItem('userId');
         liveHandler.createNewLive({
                "userId":userId,
                "token":'',
                "channelId":localStorage.getItem('channelId'),
                "liveName":this.name,
                "startTime":this.time,
                "endTime":this.timeEnd,
                "location":this.location
                }).then(function(res){

                if(res.data.retureValue==0){
                  alert('新建成功')
                    that.$emit("newlive",{name:that.name,location:that.location,date:that.date,time:that.time,endtime:that.timeEnd,info:that.info});
                    that.name='';
                    that.location='';
                    that.date='';
                    that.time='';
                    that.timeEnd='';
                    that.info='';
                }
                else{
                  alert("创建失败")
                }
                }).catch(
                  function(err){
                    console.log(err);
                    alert("创建失败.");
                  }
                );


      
       
      }
    }
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
   #page-wrapper {
  width: 640px;
  background: #FFFFFF;
  padding: 1em;
  margin: 1em auto;
  border: 1px solid #293949;
  box-shadow: 0 2px 10px rgba(0,0,0,0.8);
}

h1 {
  margin-top: 0;
}

label {
  display: block;
  padding-bottom: 0.25em;
  text-align left
}

input {
  display: block;
  font-size: 1.2em;
  padding: 0.25em;
  width: 100%;
  margin-bottom: 1em;
  border-radius: 3px;
  border: 1px solid #BABABA;
}

button {
  display: inline-block;
  border-radius: 3px;
  border: none;
  font-size: 0.9rem;
  padding: 0.4rem 0.8em;
  background: #293949;
  border-bottom: 1px solid #498b50;
  color: white;
  -webkit-font-smoothing: antialiased;
  font-weight: bold;
  margin: 0 0.25rem;
  text-align: center;
}

button:hover, button:focus {
  opacity: 0.75;
  cursor: pointer;
}

button:active {
  opacity: 1;
  box-shadow: 0 -3px 10px rgba(0, 0, 0, 0.1) inset;
}

</style>

