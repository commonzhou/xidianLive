<template>
		<div id="table">
			<div class="add">
				<input type="text" v-model="addDetail.title" name="title" value="" placeholder="用户名称" />
				<input type="text" v-model="addDetail.user" name="user" value="" placeholder="发布人" />
				<input type="date" v-model="addDetail.dates" name="date" value="" placeholder="发布时间" />
				<button @click="adddetail">新增</button>
			</div>
			<table cellpadding="0" cellspacing="0">
				<thead>
					<tr>
						<th>序号</th>
						<th>用户名</th>
						<th>发布人</th>
						<th>发布时间</th>
						<th>操作</th>
					</tr>
				</thead>
				<tbody>
					<tr :key="index" v-for="(item,index) in authList">
						<td width="5%">{{index+1}}</td>
						<td>{{item.title}}</td>
						<td width="10%">{{item.user}}</td>
						<td width="15%">{{item.dates}}</td>
						<td width="10%"><span @click="deletelist(item.id,index)" class="delete">删除</span><span class="edit" @click="edit(item)">编辑</span></td>
					</tr>
				</tbody>
			</table>
			<div id="mask" v-if="editlist">
				<div class="mask">
					<div class="title">
						编辑
						<span @click="editlist=false">
							X
						</span>
					</div>
					<div class="content">
						<input type="text" v-model="editDetail.title" name="title" value="" placeholder="标题" />
						<input type="text" v-model="editDetail.user" name="user" value="" placeholder="发布人" />
						<input type="date" v-model="editDetail.dates" name="date" value="" placeholder="发布时间" />
						<button @click="update">更新</button>
						<button @click="editlist=false">取消</button>
					</div>
				</div>
			</div>
		</div>
</template>

<style lang="stylus" rel="stylesheet/stylus" scoped>
			#table table {
				width: 100%;
				font-size: 14px;
				border: 1px solid #eee;
        
       
			}
			
			#table {
				padding: 0 10px;
        margin-left:280px;
       padding-top:60px;
			}
			
			table thead th {
				background: #f5f5f5;
				padding: 10px;
				text-align: left;
			}
			
			table tbody td {
				padding: 10px;
				text-align: left;
				border-bottom: 1px solid #eee;
				border-right: 1px solid #eee;
			}
			
			table tbody td span {
				margin: 0 10px;
				cursor: pointer;
			}
			 table tbody tr:hover{
				background: #f5f5f5;
			}
			.delete {
				color: red;
			}
			
			.edit {
				color: #008cd5;
			}
			
			.add {
				border: 1px solid #eee;
				margin: 10px 0;
				padding: 15px;
			}
			
			input {
				border: 1px solid #ccc;
				padding: 5px;
				border-radius: 3px;
				margin-right: 15px;
			}
			
			button {
				background: #008cd5;
				border: 0;
				padding: 4px 15px;
				border-radius: 3px;
				color: #fff;
			}
			
			#mask {
				background: rgba(0, 0, 0, .5);
				width: 100%;
				height: 100%;
				position: fixed;
				z-index: 4;
				top: 0;
				left: 0;
			}
			
			.mask {
				width: 300px;
				height: 250px;
				background: rgba(255, 255, 255, 1);
				position: absolute;
				left: 0;
				top: 0;
				right: 0;
				bottom: 0;
				margin: auto;
				z-index: 47;
				border-radius: 5px;
			}
			
			.title {
				padding: 10px;
				border-bottom: 1px solid #eee;
			}
			
			.title span {
				float: right;
				cursor: pointer;
			}
			
			.content {
				padding: 10px;
			}
			
			.content input {
				width: 270px;
				margin-bottom: 15px;
			}
		</style>
	


<script type="text/ecmascript-6">
		 export default{
				data(){
          return{
              	addDetail: {},
					editlist: false,
					editDetail: {},
					authList: [{
						title: '用户1',
						user: 'AAA',
						dates: '2018-02-09',
						id: "45211546"
					}, {
						title: '用户二',
						user: 'BBB',
						dates: '2018-02-09',
						id: "61341341"
					}, {
						title: '新增的用户',
						user: '古尔丹',
						dates: '2018-02-09',
						id: "62451431"
					}, {
						title: '不知名的用户',
						user: 'CCC',
						dates: '2018-02-09',
						id: "62345213"
					}, {
						title: '全新用户',
						user: 'ddd',
						dates: '2018-02-09',
						id: "23322445"
					}],
					editid:''
          }
        },
				mounted() {

				},
				methods: {

					//新增
					adddetail() {
						//这里的思路应该是把this.addDetail传给服务端，然后加载列表this.authList
						//this.authList.push(this.addDetail)
						this.authList.push({
							title: this.addDetail.title,
							user: this.addDetail.user,
							dates: this.addDetail.dates,
							id:Math.floor(Math.random()*1000000+1)
						})

						//axios.post('url',this.addDetail).then((res) =>{
						//若返回正确结果，清空新增输入框的数据
						//this.addDetail.title = ""
						//this.addDetail.user = ""
						//this.addDetail.dates = ""
						//})

					},
					//删除
					deletelist(id, i) {
						this.authList.splice(i, 1);
						//这边可以传id给服务端进行删除  ID = id
						//axios.get('url',{ID:id}).then((res) =>{
						//			加载列表				
						//})
					},
					//编辑
					edit(item) {
						console.log(item)
						this.editDetail = {
							title: item.title,
							user: item.user,
							dates: item.dates,
							id: item.id
						}
						this.editlist = true
						this.editid = item.id
						
					},
					//确认更新
					update() {
						//编辑的话，也是传id去服务端
						//axios.get('url',{ID:id}).then((res) =>{
						//			加载列表				
						//})
						let _this= this
						for(let i = 0; i < _this.authList.length; i++) {
							if(_this.authList[i].id ==this.editid) {              // 将被编辑的那一项的数据进行更新
								_this.authList[i] = {
									title: _this.editDetail.title,
									user: _this.editDetail.user,
									dates: _this.editDetail.dates,
									id: this.editid
								}
								this.editlist = false
							}
						}
					}
        }
     }
		</script>


