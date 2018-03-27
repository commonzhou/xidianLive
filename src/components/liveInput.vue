<template>
  <div id="page-wrapper">
     <h1>新建直播</h1>
     <label for="text">直播名称</label><input type="text" id="text" v-model="name">
     <label for="place">直播地点</label><input type="text" id="place" v-model="location">
     <label for="date">直播日期</label><input type="date" id="date" v-model="date">
     <label for="datetime">开始、结束时间</label><input type="text" id="datetime" v-model="time">
     <label for="content">直播简介</label><input type="text" id="content" v-model="info">
     <button @click="submit">提交</button>
  </div>

 
</template>
<script>
export default {
  data(){
    return{
      name:'',
      location:'',
      date:'',
      time:'',
      info:''
    }
  },
  methods:{
    submit:function(){
      if((this.name=="") || (this.info=="")||(this.location=="")||(this.time=="")||(this.date=='')){
        //不知为何，！this.name就不行，这是为啥，可能'' 不是false
        alert("填写完信息再提交！");
      }
      else{
        this.$emit("newlive",{name:this.name,location:this.location,date:this.date,time:this.time,info:this.info});
        this.name='';
        this.location='';
        this.date='';
        this.time='';
        this.info='';
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

