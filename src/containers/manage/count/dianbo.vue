<template>
  <div>
     <section class="mt30 clearfix">
       <Shelf title="点播时间和人数">
       </Shelf>
         <div id="timePeople"></div>
     </section>
  </div>
</template>

<script type="text/ecmascript-6">
      // 引入 ECharts 主模块
var echarts = require('echarts/lib/echarts');
// 引入线图
require('echarts/lib/chart/line');
// 引入提示框和标题组件
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');
import Shelf from 'components/common/shelf';
import media from 'store/liveInfo.js'
    export default{
      data(){
           return{
           
           }
       },
      components:{
        Shelf
      },
      methods:{
       
      },
      // created(){
      //    var user=localStorage.getItem('userName');
      //    var that=this;
      //    channelHandle.getChannelList({"userId":user}).then(function(res){
      //         if(res.data.retureValue==0){
      //           console.log(res.data.retureData);
      //           that.$store.state.videoList=[];
      //           for(let i=0;i<res.data.retureData.length;i++){
      //              let temp=res.data.retureData[i];
      //              if(!temp.imgLocation) temp.imgLocation='static/imgs/cover2.jpg';
      //              if(!temp.playNum) temp.playNum=100;
      //              if(!temp.viewNum) temp.viewNum=50;
      //              that.$store.state.videoList.push(temp);
      //           }
      //         }
      //         else{
      //            alert("加载失败");
      //         }
      //    }).catch(function(err){
      //        console.log(err);
      //        alert("加载失败.");
      //    });
      // },
      mounted(){
// 基于准备好的dom，初始化echarts实例
var myChart1 = echarts.init(document.getElementById('timePeople'));
window.onresize=function(){
  myChart1.resize()
}
// 绘制图表
myChart1.setOption({
    title: {
        text: ''
    },
    tooltip: {},
    xAxis: {
        data: ['10', '20', '30', '40', '50', '60']
    },
    yAxis: {
      type:'value'
    },
    series: [{
        name: '人数',
        type: 'line',
        data: [5, 20, 36, 10, 10, 20]
    }]
});
}
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    .mt30 {
    width:1220px;
    height:100%;
    margin:50px auto;
    margin-left -18px
    margin-top 10px
    border-radius: 8px;
    border: 1px solid #dcdcdc;
    border-color: rgba(0, 0, 0, .14);
    box-shadow: 0 3px 8px -6px rgba(0, 0, 0, .1);
  }
   #timePeople
     width:100%
     height:50vh
    
</style>