<template>
	<div>
		<menutop :title="title"></menutop>
	    <div class="jiange"></div>
		<shopsearch></shopsearch>
	<div class="shoplist">
		<div class="stop">
			<div class="stopleft">
				<i class="el-icon-search"></i>
				数据列表
			</div>
			<div>
				<el-button>添加</el-button>
				<el-button>生成品牌首字母</el-button>
			</div>
		</div>
		<div class="shopalllist">
			<el-table ref="multipleTable" @selection-change="handleSelectionChange" :data="tableData" :border="true">
				<el-table-column type="selection" >
				</el-table-column>
				<el-table-column prop="id" label="编号" width="100">
				</el-table-column>
			
				<el-table-column prop="spuName" label="相册名称">
				</el-table-column>
				<el-table-column prop="city" label="封面" width="150">
					<template slot-scope="scope"><img  width="50px" height="40px"  /></template>
				</el-table-column>
				
				<el-table-column prop="zip" label="图片数量" width="150" >
				</el-table-column>
				<el-table-column prop="zip" label="排序" width="150" >
				</el-table-column>
				<!-- <el-table-column :show-overflow-tooltip="true" prop="img_url" label="品牌制造商" >
					<template slot-scope="scope"><img  width="50px" height="40px"  /></template>
					 </el-table-column> -->
				<el-table-column prop="spuId" label="描述" >
					

				</el-table-column>
			
				<el-table-column label="操作" >
					<template slot-scope="scope">
						<el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
						<el-button type="text" size="small">编辑</el-button>
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

	</div>
	</div>
</template>

<script>
	import menutop from "../../components/menutop.vue" //标题
	import shopsearch from "../../components/shopsearch.vue" //商品搜索
		export default{
			data(){
				return{
					title:"图片库管理",
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
					value: '',
					gridData: [],
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
			methods:{
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
				// 当前页数的数据数量
				handleSizeChange(val) {
					console.log(`每页 ${val} 条`);
				},
				// 当前页数
				handleCurrentChange(val) {
					this.$emit('fromChild', val)
					console.log(`当前页: ${val}`);
				},
				handleSelectionChange(val) {
					this.multipleSelection = val;
					console.log(this.multipleSelection)
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
				}
			},
			components:{
				shopsearch,
				menutop
			}
		}
</script>

<style>
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
