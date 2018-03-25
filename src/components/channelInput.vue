<template>
  <div id="page-wrapper">
     <h1>新建频道</h1>
     <label for="text">频道名称</label><input type="text" id="text" v-model="name">
  	 <label for="name">创建者</label><input type="text" id="name" v-model="person">
     <button @click="submit">提交</button>
	</div>
</template> 
<script>
export default {
   data(){
    return{
      name:'',
      person:''
    }
   },
   methods:{
       submit:function(){
          if( (this.name=="") || (this.person=="")){
              alert('填写完信息再提交！')
          }
          else{
              this.$emit("message",{name:this.name,person:this.person});  
              this.name="";               //向父组件传递参数后，清空数据框
              this.person="";
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

