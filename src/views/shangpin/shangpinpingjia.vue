<template>
	<div>
		<menutop :title="title"></menutop>
		<div class="jiange"></div>
		<shopsearch></shopsearch>
		<div class="jiange"></div>
		<div class="shopalllist">
			<el-table  ref="multipleTable" :data="tableData" border style="width: 100%">
				<el-table-column type="selection" width="55">
				</el-table-column>
				<el-table-column fixed prop="date" label="编号">
				</el-table-column>
				<el-table-column prop="name" label="用户昵称" >
				</el-table-column>
				<el-table-column prop="province" label="商品名称" >
				</el-table-column>
				<el-table-column prop="city" label="评价" >
				</el-table-column>
				<el-table-column prop="address" label="IP地址" >
				</el-table-column>
				<el-table-column prop="zip" label="评论时间" >
				</el-table-column>
				<el-table-column prop="address" label="是否显示" >
				</el-table-column>
				<el-table-column  label="操作" >
					<template slot-scope="scope">
						<el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
						<el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
					</template>
				</el-table-column>
			</el-table>
			<div class="shoplistbutton">
				<div>
					<el-button @click="toggleSelection(tableData)">全选</el-button>
					<el-select v-model="value" clearable placeholder="批量操作" style="width: 100px; margin-left: 50px;">
						<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
					<el-button>确定</el-button>
				</div>
				<div>
					<el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="1"
					 :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400">
					</el-pagination>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
	import menutop from "../../components/menutop.vue" //标题
	import shopsearch from "../../components/shopsearch.vue" //商品搜索
	import shoplist from "../../components/shoplist.vue" //数据列表
	import {
		shoplistdata
	} from "../../network/get.js"
	export default {
		data() {
			return {
				multipleSelection: [],
				title: "商品回收站",
				activeName: 'first',
				arr: ["全部商品", "已上架", "未上架", "待审核", "未通过"],
				// a:{
				// 	page:1,
				// 	 limit:10
				// }
				tableData: [{
					date: '2016-05-02',
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1518 弄',
					zip: 200333
				}, {
					date: '2016-05-04',
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1517 弄',
					zip: 200333
				}, {
					date: '2016-05-01',
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1519 弄',
					zip: 200333
				}, {
					date: '2016-05-03',
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1516 弄',
					zip: 200333
				}]

			}
		},
		components: {
			menutop,
			shopsearch,
			shoplist
		},
		created() {
			// console.log(1231231321321)
			this.shoplists(1)

			// console.log(this.title)
		},
		methods: {
			// 当前页数的数据数量
			handleSizeChange(val) {
				console.log(`每页 ${val} 条`);
			},
			// 当前页数
			handleCurrentChange(val) {
				this.$emit('fromChild', val)
				console.log(`当前页: ${val}`);
			},
			handleClick(tab, event) {
				console.log(tab, event);
			},
			handleSelectionChange(val) {
				this.multipleSelection = val;
				console.log(this.multipleSelection)
			},
			toggleSelection(rows) {
				console.log(this.$refs.multipleTable)
				if (rows) {
					rows.forEach(row => {
						this.$refs.multipleTable.toggleRowSelection(row);
					});
				} else {
					this.$refs.multipleTable.clearSelection();
				}
			},
			async shoplists(num) {
				console.log(num)
				await shoplistdata({
					page: num,
					limit: 10
				}).then(res => {
					console.log(res)
					this.tableData = res.page.list
				})
			},
			getChild(v) {
				this.tableData = null
				this.shoplists(v)
				// console.log(v)
			}

		}

	}
</script>

<style scoped="scoped">
	.el-tabs__item {
		/* width: 100px; */
		/* 	margin-left: 10px;
		padding: 0 10px; */
		margin-left: 20px;
		/* border-left: 1px solid black; */
		border: 1px solid black;
		border-bottom: 1px solid black !import;
	}

	.el-tabs--card>.el-tabs__header .el-tabs__item {
		margin-left: 20px;
		border-left: 1px solid black;
		border: 1px solid black;
		border-bottom: 1px solid black !import;
	}

	.el-tabs--card>.el-tabs__header .el-tabs__item.is-active {
		border-bottom-color: ;
	}

	.jiange {
		width: 100%;
		height: 20px;
	}

	body {
		margin: 0;
	}

	.shoplist {
		width: 100%;
		border: 1px solid #F3F3F3;
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

	.shopalllist {
		/* height: 100px; */
	}

	.shoplistbutton {
		margin-top: 10px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
</style>
