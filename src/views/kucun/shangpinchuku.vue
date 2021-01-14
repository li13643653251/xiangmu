<template>
	<div>
		<menutop :title="title"></menutop>
		<div class="jiange"></div>
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
					请输入搜索：
					<el-input v-model="input" placeholder="
                     订单编号/商品货号" class="iptone"></el-input>
				</div>

				<div style="margin-left: 80px;">
					提醒状态：
				  <el-select v-model="value1" clearable placeholder="请选择">
				    <el-option
				      v-for="item in options"
				      :key="item.value"
				      :label="item.label"
				      :value="item.value">
				    </el-option>
				  </el-select>
                                                
				</div>
				<div style="margin-left: 80px;">
					提交时间
					<el-time-select v-model="value" :picker-options="{
					    start: '08:30',
					    step: '00:15',
					    end: '18:30'
					  }"
					 placeholder="选择时间">
					</el-time-select>

				</div>
			</div>

		</div>
		
		<div style="background-color: #F3F3F3;">
			<div class="toptitle">
				<div>数据列表</div>
				
			</div>
		<div class="shopalllist">
			<el-table ref="multipleTable" @selection-change="handleSelectionChange" :data="tableData" :border="true">
				<el-table-column type="selection">
				</el-table-column>
				<el-table-column prop="id" label="编号">
				</el-table-column>
				<el-table-column prop="spuName" label="商品图片">
				</el-table-column>
				<el-table-column prop="city" label="商品名称">
					v
				</el-table-column>
				<el-table-column prop="zip" label="货号/属性">
				</el-table-column>
				<el-table-column prop="zip" label="订单号">
				</el-table-column>
				<el-table-column prop="zip" label="库存">
				</el-table-column>
				<el-table-column prop="zip" label="库存类型">
				</el-table-column>
				<el-table-column prop="zip" label="操作类型">
				</el-table-column>
				<el-table-column prop="zip" label="操作信息">
				</el-table-column>
			<!-- 	<el-table-column label="操作">
					<template slot-scope="scope">
						<el-button type="text" @click="handleClick(scope.row)" size="small">查看订单 </el-button>
						<el-button type="text" size="small">关闭订单</el-button>
					</template>
				</el-table-column> -->
			</el-table>
			<div class="shoplistbutton">
				<div>
					<el-button @click="toggleSelection(tableData)">全选</el-button>
				<el-select v-model="value1" style="width: 150px;" clearable placeholder="批量操作">
				  <el-option
				    v-for="item in options"
				    :key="item.value"
				    :label="item.label"
				    :value="item.value">
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
	</div>
</template>

<script>
	import menutop from "../../components/menutop.vue" //标题
	export default {
		data() {
			return {
				title: "商品出库",
				input: "",
				  options: [{
				          value: '选项1',
				          label: '黄金糕'
				        }, {
				          value: '选项2',
				          label: '双皮奶'
				        }, {
				          value: '选项3',
				          label: '蚵仔煎'
				        }, {
				          value: '选项4',
				          label: '龙须面'
				        }, {
				          value: '选项5',
				          label: '北京烤鸭'
				        }],
				value: "",
					value1: "",
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
				multipleSelection: []
			}
		},
		components: {
			menutop
		},
		methods: {
			// 表格选择
			handleSelectionChange(val) {
				this.multipleSelection = val;
				console.log(this.multipleSelection)
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
			// handleClick(tab, event) {
			// 	console.log(tab, event);
			// },
			searchshop() {
				console.log(this.input)
			},
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
