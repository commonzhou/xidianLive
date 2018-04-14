<template>
  <div>
     <section class="mt30 clearfix">
       <Shelf title="直播时间和人数">
       </Shelf>
         <div id="graph1"></div>
     </section>
      <section class="mt30 clearfix">
       <Shelf title="直播人数和时间">
       </Shelf>
         <div id="graph2"></div>
     </section>
      <section class="mt30 clearfix">
       <Shelf title="比例分布">
       </Shelf>
         <div class="rate">
             <div id="graph3"></div>
             <div id="graph4"></div>
            <div id="graph5"></div>
         </div>
     </section>
      <section class="mt30 clearfix">
       <Shelf title="地区分布图">
       </Shelf>
         <div id="graph6"></div>
     </section>
     
  </div>
</template>

<script type="text/ecmascript-6">
      // 引入 ECharts 主模块
var echarts = require('echarts/lib/echarts');
import Shelf from 'components/common/shelf';
      // 引入 ECharts 主模块
var echarts = require('echarts/lib/echarts');
// 引入柱状图
require('echarts/lib/chart/bar');
require('echarts/lib/chart/line');
require('echarts/lib/chart/pie');
require('echarts/lib/chart/map');
import 'echarts/map/js/china.js';
// 引入提示框和标题组件
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');
import info from 'store/liveInfo.js'
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
      created(){
         
         var that=this;
         info.liveUserData({'liveId':'123'}).then(function(res){
              if(res.data.retureValue==0){
                console.log(res.data.retureData);
                that.$store.state.allMedia=[];
                for(let i=0;i<res.data.retureData.length;i++){
                   let temp=res.data.retureData[i];
                   if(!temp.imgLocation) temp.imgLocation='static/imgs/cover2.jpg';
                   if(!temp.playNum) temp.playNum=100;
                   if(!temp.viewNum) temp.viewNum=50;
                   that.$store.state.allMedia.push(temp);
                }
              }
              else{
                 alert("加载失败");
              }
         }).catch(function(err){
             console.log(err);
             alert("加载失败.");
         });


           info.liveData({"liveId":"a27680916b2c493dacf894c7b42bcef"}).then(function(res){
              if(res.data.retureValue==0){
                console.log(res.data.retureData);
                that.$store.state.allMedia=[];
                for(let i=0;i<res.data.retureData.length;i++){
                   let temp=res.data.retureData[i];
                   if(!temp.imgLocation) temp.imgLocation='static/imgs/cover2.jpg';
                   if(!temp.playNum) temp.playNum=100;
                   if(!temp.viewNum) temp.viewNum=50;
                   that.$store.state.allMedia.push(temp);
                }
              }
              else{
                 alert("加载失败");
              }
         }).catch(function(err){
             console.log(err);
             alert("加载失败.");
         });
      },
      mounted(){
// 基于准备好的dom，初始化echarts实例
var myChart1 = echarts.init(document.getElementById('graph1'));
var myChart2 = echarts.init(document.getElementById('graph2'));
var myChart3 = echarts.init(document.getElementById('graph3'));
var myChart4 = echarts.init(document.getElementById('graph4'));
var myChart5 = echarts.init(document.getElementById('graph5'));
var myChart6 = echarts.init(document.getElementById('graph6'));
window.onresize=function(){
  myChart1.resize();
  myChart2.resize();
  myChart3.resize();
  myChart4.resize();
  myChart5.resize();
  myChart6.resize();
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

myChart2.setOption({
    title: {
        text: ''
    },
    tooltip: {},
    xAxis: {
        data: ['10', '20', '30', '40', '50', '60']
    },
    yAxis: {},
    series: [{
        name: '人数',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
    }]
});

myChart3.setOption({
    title : {
        text: '观众的男女比例',
        subtext: '',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    series : [
        {
            name: '性别情况',
            type: 'pie',
            radius : '50%',
            center: ['50%', '50%'],
            data:[
                {value:335, name:'男'},
                {value:310, name:'女'},
                {value:234, name:'不明'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
});

myChart4.setOption({
    title : {
        text: '观众的年龄比例',
        subtext: '',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    series : [
        {
            name: '年龄情况',
            type: 'pie',
            radius : '50%',
            center: ['50%', '50%'],
            data:[
                {value:335, name:'20以下'},
                {value:310, name:'20-40'},
                {value:234, name:'40以上'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
});

myChart5.setOption({
    title : {
        text: '观众的学历比例',
        subtext: '',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    series : [
        {
            name: '学历情况',
            type: 'pie',
            radius : '50%',
            center: ['50%', '50%'],
            data:[
                {value:335, name:'本科'},
                {value:310, name:'研究生'},
                {value:234, name:'博士'},
                {value:234, name:'其他'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
});


function randomData() {
    return Math.round(Math.random()*1000);
}
myChart6.setOption({
    title: {
        left: 'center'
    },
    tooltip: {
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data:['人数']
    },
    visualMap: {
        min: 0,
        max: 2500,
        left: 'left',
        top: 'bottom',
        text: ['高','低'],           // 文本，默认为数值文本
        calculable: true
    },
    toolbox: {
        show: true,
        orient: 'vertical',
        left: 'right',
        top: 'center',
        feature: {
            dataView: {readOnly: false},
            restore: {},
            saveAsImage: {}
        }
    },
    series: [
        {
            name: '人数',
            type: 'map',
            mapType: 'china',
            roam: false,
            label: {
                normal: {
                    show: true
                },
                emphasis: {
                    show: true
                }
            },
            data:[
                {name: '北京',value: randomData() },
                {name: '天津',value: randomData() },
                {name: '上海',value: randomData() },
                {name: '重庆',value: randomData() },
                {name: '河北',value: randomData() },
                {name: '河南',value: randomData() },
                {name: '云南',value: randomData() },
                {name: '辽宁',value: randomData() },
                {name: '黑龙江',value: randomData() },
                {name: '湖南',value: randomData() },
                {name: '安徽',value: randomData() },
                {name: '山东',value: randomData() },
                {name: '新疆',value: randomData() },
                {name: '江苏',value: randomData() },
                {name: '浙江',value: randomData() },
                {name: '江西',value: randomData() },
                {name: '湖北',value: randomData() },
                {name: '广西',value: randomData() },
                {name: '甘肃',value: randomData() },
                {name: '山西',value: randomData() },
                {name: '内蒙古',value: randomData() },
                {name: '陕西',value: randomData() },
                {name: '吉林',value: randomData() },
                {name: '福建',value: randomData() },
                {name: '贵州',value: randomData() },
                {name: '广东',value: randomData() },
                {name: '青海',value: randomData() },
                {name: '西藏',value: randomData() },
                {name: '四川',value: randomData() },
                {name: '宁夏',value: randomData() },
                {name: '海南',value: randomData() },
                {name: '台湾',value: randomData() },
                {name: '香港',value: randomData() },
                {name: '澳门',value: randomData() }
            ]
        }]
});
}
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    .mt30 {
    width:1000px;
    height:100%;
    margin:50px auto;
    margin-left 10px
    margin-top 10px
    border-radius: 8px;
    border: 1px solid #dcdcdc;
    border-color: rgba(0, 0, 0, .14);
    box-shadow: 0 3px 8px -6px rgba(0, 0, 0, .1);
  }
   #graph1
     width:100%
     height:50vh
   #graph2
     width:100%
     height:50vh 
   #graph6
     width:100%
     height:80vh
   .rate
     display flex
     #graph3 
       flex:1
       width:33%
       height 45vh
       margin-top 20px
     #graph4 
       flex:1
       width:33%
       height 45vh
       margin-top 20px
     #graph5
       flex:1
       width:33%
       height 45vh
       margin-top 20px
</style>