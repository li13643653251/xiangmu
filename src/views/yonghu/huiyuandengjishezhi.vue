<template>
	<div>
		<menutop :title="title"></menutop>
		<div class="jiange"></div>

		
		<div style="background-color: #F3F3F3;">
			<div class="toptitle">
				<div>数据列表</div>
				<el-button>添加</el-button>
			</div>
		<div class="shopalllist">
			<el-table ref="multipleTable"  :data="tableData" :border="true">
				<el-table-column prop="id" label="订单编号">
				</el-table-column>
				<el-table-column prop="spuName" label="提交时间">
				</el-table-column>
				<el-table-column prop="city" label="用户账号">
					v
				</el-table-column>
				<el-table-column prop="zip" label="订单金额">
				</el-table-column>
				<el-table-column prop="zip" label="支付方式">
				</el-table-column>
				<el-table-column prop="zip" label="订单来源">
				</el-table-column>
				<el-table-column prop="zip" label="订单状态">
				</el-table-column>
				<el-table-column label="操作">
					<template slot-scope="scope">
						<el-button type="text" @click="handleClick(scope.row)" size="small">查看订单 </el-button>
						<el-button type="text" size="small">关闭订单</el-button>
					</template>
				</el-table-column>
			</el-table>
		</div>
		
			
		</div>
	</div>
</template>

<script>
	import menutop from "../../components/menutop.vue" //标题
	export default {
		data(){
			return {
				title: "会员等级设置",
				tableData: [{
					date: '2016-05-02',
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙',
					zip: 200333
				}, {
					date: '2016-05-04',
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江',
					zip: 200333
				}, {
					date: '2016-05-01',
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江',
					zip: 200333
				}, {
					date: '2016-05-03',
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙',
					zip: 200333
				}]
			}
		},
		components:{
			menutop
		},
		methods:{
			handleClick(tab, event) {
				console.log(tab, event);
			},
		}
		
	}
</script>

<style>
	.jiange {
		width: 100%;
		height: 20px;
	}
	
	.sousuo {
		width: 100%;
		height: 100px;
		/* border: 1px solid black; */
	}
	
	.stop {
		background-color: #F3F3F3;
		width: 100%;
		height: 50px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		text-align: center;
		line-height: 50px;
	}
	
	.sbuttom {
		display: flex;
		width: 100%;
		height: 50px;
		align-items: center;
		background-color: #FFFFFF;
		/* justify-content: center; */
	
	}
	
	.iptone {
		width: 200px;
	}
	
	.toptitle {
		display: flex;
		justify-content: space-between;
		line-height: 50px;
		width: 100%;
		height: 50px;
	}
	
	.toptitle>div {
		margin: 0 20px;
	}
	
	.fenye {
		background-color: rgba(253, 253, 254, 1);
		width: 100%;
		height: 50px;
	
	}
	
	.fenleifenye {
		height: 30px;
		margin-top: 10px;
		float: right;
	}
	.toptitle {
		display: flex;
		justify-content: space-between;
		line-height: 50px;
		width: 100%;
		height: 50px;
	}
	.toptitle>div {
		margin: 0 20px;
	}
	.fenye {
		background-color: rgba(253, 253, 254, 1);
		width: 100%;
		height: 50px;
	}
	.fenleifenye {
		height: 30px;
		margin-top: 10px;
		float: right;
	}
	.jiange {
		width: 100%;
		height: 20px;
	}
	.shoplistbutton {
		margin-top: 10px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
</style>
