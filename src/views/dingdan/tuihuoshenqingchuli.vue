<template>
	<div>
		<menutop :title="title"></menutop>
		<el-tabs type="border-card">
			<!-- 全部商品 -->
			<el-tab-pane><span slot="label"> 全部申请 <i class="">(1000)</i> </span>
				<div class="sousuo">
					<div class="stop">
						<div class="stopleft">
							<i class="el-icon-search"></i>
							筛选查询
						</div>
						<div>
							<el-button @click="searchshop">查询结果</el-button>
							<el-button>高级搜索</el-button>
						</div>
					</div>
					<div class="sbuttom">
						<div>
							请输入搜索：<el-input v-model="input" placeholder="订单编号/商品货号" class="iptone"></el-input>
						</div>
						<div style="margin-left: 80px;">
							收货人:<el-input v-model="input1" placeholder="收货人姓名/手机号码" class="iptone"></el-input>
						</div>
						<div style="margin-left: 80px;">
							提交时间<el-time-select v-model="value" :picker-options="{start: '08:30',step: '00:15',end: '18:30'}"placeholder="选择时间"></el-time-select>
						</div>
					</div>
					<div class="stop">
						<div class="stopleft">
							<i class="el-icon-search"></i>
							数据列表
						</div>
						<div>
							<el-button>导出数据</el-button>
							<!-- <el-button>生成品牌首字母</el-button> -->
						</div>
					</div>                                       
					<div class="shopalllist">
						<el-table ref="multipleTable" @selection-change="handleSelectionChange" :data="tableData" :border="true">
							<el-table-column type="selection">
							</el-table-column>
							<el-table-column prop="id" label="服务单号">
							</el-table-column>
							<el-table-column prop="spuName" label="申请时间">
							</el-table-column>
							<el-table-column prop="city" label="用户账号">
								v
							</el-table-column>
							<el-table-column prop="zip" label="退款金额">
							</el-table-column>
							<el-table-column prop="zip" label="联系人">
							</el-table-column>
							<el-table-column prop="zip" label="申请状态">
							</el-table-column>
							<el-table-column prop="zip" label="处理时间">
							</el-table-column>
							<el-table-column label="操作">
								<template slot-scope="scope">
									<el-button type="text" @click="handleClick(scope.row)" size="small">查看详情 </el-button>
									<!-- <el-button type="text" size="small">关闭订单</el-button> -->
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
								<el-button>删除订单</el-button>
							</div>	
							<div>
								<el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="1"
								 :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400">
								</el-pagination>
							</div>
						</div>
					</div>
				</div>
			</el-tab-pane>
			<el-tab-pane label="待处理"> <span slot="label"> 已上架 <i class="">(1000)</i> </span>
			</el-tab-pane>
			<el-tab-pane label="退货中"> <span slot="label"> 未上架 <i class="">(1000)</i> </span>未上架 </el-tab-pane>
			<el-tab-pane label="已完成"> <span slot="label"> 待审核 <i class="">(1000)</i> </span>待审核 </el-tab-pane>
			<el-tab-pane label="已拒绝"> <span slot="label"> 未通过 <i class="">(1000)</i> </span>未通过 </el-tab-pane>
		</el-tabs>
		<!--<el-tabs  v-model="activeName" type="card" @tab-click="handleClick">-->
		<!--<el-tab-pane  style="border: 1px solid black;" v-for="(item,i) in arr" :label="item" :name="i">{{i}}</el-tab-pane>-->
		<!-- <el-tab-pane label="已上架" name="second">配置管理</el-tab-pane>
			<el-tab-pane label="未上架" name="third">角色管理</el-tab-pane>
			<el-tab-pane label="待审核" name="fourth">定时任务补偿</el-tab-pane>
			<el-tab-pane label="未通过" name="one">1</el-tab-pane> -->
		<!-- </el-tabs> -->
	</div>
</template>
<script>
	import menutop from "../../components/menutop.vue" //标题
	// import shopsearch from "../../components/shopsearch.vue" //商品搜索
	// import shoplist from "../../components/shoplist.vue" //数据列表
	import {
		shoplistdata
	} from "../../network/get.js"
	export default {
		data() {
			return {
				title: "退货申请",
				activeName: 'first',
				input: "",
				input1: "",
				value: "",
				arr: ["全部商品", "已上架", "未上架", "待审核", "未通过"],
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
				}],
				multipleSelection: [],
				options:[]

			}
		},
		components: {
			menutop
			// shoplist
		},
		created() {
			// console.log(1231231321321)
			// this.shoplists(1)
			// console.log(this.title)
		},
		methods: {
			handleClick(tab, event) {
				console.log(tab, event);
			},
			searchshop() {
				console.log(this.input)
			},
			getChild(v) {
				this.tableData = null
				this.shoplists(v)
				// console.log(v)
			},
			// 表格选择
			handleSelectionChange(val) {
				this.multipleSelection = val;
				console.log(this.multipleSelection)
			},
			handleClick(row) {
				console.log(row);
			},
			// 全选
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
			// 当前页数的数据数量
			handleSizeChange(val) {
				console.log(`每页 ${val} 条`);
			},
			// 当前页数
			handleCurrentChange(val) {
				this.$emit('fromChild', val)
				console.log(`当前页: ${val}`);
			},
		}
	}
</script>
<style scoped="scoped">
	.sousuo {
		width: 100%;
		/* height: 100px; */
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
