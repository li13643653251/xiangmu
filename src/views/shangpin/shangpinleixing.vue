<template>
	<div>
		<menutop :title="title"></menutop>
		<div class="jiange"></div>
		<div style="background-color: #F3F3F3;">
			<div class="toptitle">
				<div>数据列表</div>
				<div>
					 <el-button>添加</el-button>
				</div>
			</div>
			<el-table  ref="multipleTable" :data="tableData" border style="width: 100%">

				<el-table-column prop="city" label="编号" >
				</el-table-column>
				<el-table-column prop="address" label="类型名称" >
				</el-table-column>
				<el-table-column prop="zip" label="属性数量" >
				</el-table-column>
				<el-table-column prop="zip" label="参数数量" >
				</el-table-column>
				<el-table-column  label="设置"   width="200">
					<template slot-scope="scope">
						<el-button @click="handleClick(scope.row)" type="text" size="small">属性列表  </el-button>
						<el-button @click="handleClick(scope.row)" type="text" size="small"> 参数列表 </el-button>	
					</template>
				</el-table-column>
				<el-table-column  label="操作" >
					<template slot-scope="scope">
						<el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
						<el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
					</template>
				</el-table-column>
			</el-table>
			<div class="fenye">
				<el-pagination class="fenleifenye" background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="1"
				 :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400">
				</el-pagination>
			</div>
		</div>
	</div>
</template>

<script>
	import menutop from "../../components/menutop.vue" //标题
	export default {
		data() {
			return {
                title:"商品类型",
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
			// 当前页数的数据数量
			handleSizeChange(val) {
				console.log(`每页 ${val} 条`);
			},
			// 当前页数
			handleCurrentChange(val) {
				this.$emit('fromChild', val)
				console.log(`当前页: ${val}`);
			}
		}
	}
</script>

<style>
	.jiange {
		width: 100%;
		height: 20px;
	}
	.toptitle{
		display: flex; justify-content: space-between; 
		line-height: 50px;
		width: 100%;
		height: 50px;
	}
	.toptitle>div{
		margin: 0 20px;
	}
	.fenye{
		    background-color: rgba(253, 253, 254, 1);
			width: 100%;
			height: 50px;
			
	}
	.fenleifenye{
		height: 30px;
		margin-top: 10px;
		float: right;
	}
</style>
