<template>
	<div class="shoplist">
		<div class="stop">
			<div class="stopleft">
				<i class="el-icon-search"></i>
				数据列表
			</div>
			<div>
				<el-button>修改基本信息</el-button>
				<el-button>修改商品信息</el-button>
			</div>
		</div>
		<div class="shopalllist">
			<el-table ref="multipleTable" @selection-change="handleSelectionChange" :data="tableData" :border="true">
				<el-table-column type="selection" width="55">
				</el-table-column>
				<el-table-column prop="id" label="编号	" width="100">
				</el-table-column>
				<el-table-column :show-overflow-tooltip="true" prop="img_url" label="商品图片" width="130">
					<template slot-scope="scope"><img :src="scope.row.img_url" width="50px" height="40px"  /></template>
					 </el-table-column>
				<el-table-column prop="spuName" label="商品名称">
				</el-table-column>
				<el-table-column prop="city" label="价格/货号" width="120">
					无
				</el-table-column>
				<el-table-column prop="publishStatus" label="标签" :formatter="stateFormat" width="120">
				</el-table-column>
				<el-table-column prop="zip" label="排序" width="120">
				</el-table-column>
				<el-table-column prop="spuId" label="美瞳库存" width="120">
					<template slot-scope="scope">
						<i class="el-icon-takeaway-box" @click="gosku(scope.row)"></i>
						<!-- <div @click="handleSeleUserId(scope.row)">{{ scope.row.name }}</div> -->
					</template>

				</el-table-column>
				<el-table-column prop="catalogId" label="销量" width="120">
				</el-table-column>
				<el-table-column prop="zip" label="审核状态" width="150">
					目前暂无
				</el-table-column>
				<el-table-column label="操作" width="200">
					<template slot-scope="scope">
						<el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
						<el-button type="text" size="small">编辑</el-button>
						<el-button type="text" size="small">日志</el-button>
						<el-button type="text" size="small">删除</el-button>
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
					<!-- <el-pagination
					  background
					  layout="prev, pager, next"
					  :total="1000">
					</el-pagination> -->
					<el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="1"
					 :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400">
					</el-pagination>
				</div>
			</div>
		</div>
		<div>


			<el-dialog title="货品信息" :modal="false" border   @close="undwon" :visible.sync="dialogTableVisible">

				<el-table :data="gridData" v-loading="diakey" element-loading-text="拼命加载中" element-loading-spinner="el-icon-loading"
				 :border="true" :stripe="true">
					<el-table-column property="price" label="价格" width="50"></el-table-column>
					<el-table-column property="skuId" label="编号" width="50"></el-table-column>
					<el-table-column property="skuName" label="商品属性"></el-table-column>
					<el-table-column property="stock" label="库存" width="50"></el-table-column>
				</el-table>

				<div slot="footer" class="dialog-footer">
					<el-button @click="dialogTableVisible = false">取 消</el-button>
					<el-button type="primary" @click="dialogTableVisible = false">确 定</el-button>
				</div>
			</el-dialog>
		</div>
	</div>
</template>

<script>
	import {
		skuinfo
	} from "../network/get.js"
	export default {

		props: {
			tableData: Array,
		},
		data() {
			return {
				multipleSelection: [],
				// 分页
				currentPage4: 4,
				loading: true,
				// 对话框
				dialogTableVisible: false,
				gridData: [],
				// 库存表
				diakey: true,
				// 批量操作
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
				value: ''
			}
		},
		created() {
			if (this.tableData) {
				this.loading = false
			}
			// console.log(this.tableData)
		},
		methods: {
			handleClick(row) {
				console.log(row);
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
			handleSelectionChange(val) {
				this.multipleSelection = val;
				console.log(this.multipleSelection)
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
			// 上架 未上架
			stateFormat(row, column) {
				switch (row.publishStatus) {
					case 0:
						return "上架"
						break;
					case 1:
						return "未上架"
						break;
					default:
						return "暂定"
				}
			},
			gosku(row) {
				this.dialogTableVisible = true
				this.gridData = []
				// console.log(this.dialogTableVisible)
				skuinfo(row.id).then(res => {
					this.gridData = res.page.list
					this.diakey = false
					// console.log(res)
				})
				// console.log(row)
			},
			undwon(){
				this.diakey=true
				// console.log(123)
			}
		}
	}
</script>

<style>
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
