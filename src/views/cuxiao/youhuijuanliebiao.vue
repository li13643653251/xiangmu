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
					优惠券名称：
					<el-input v-model="input" placeholder="优惠券名称" class="iptone"></el-input>
				</div>
		<div style="margin-left: 80px;">
					优惠券类型：
				  <el-select v-model="value1" clearable placeholder="优惠券类型">
				    <el-option
				      v-for="item in options"
				      :key="item.value"
				      :label="item.label"
				      :value="item.value">
				    </el-option>
				  </el-select>
                                                
				</div>

			</div>

		</div>
		<div class="jiange"></div>
		<div style="background-color: #F3F3F3;">
			<div class="toptitle">
				<div>数据列表</div>
				<div>
					<el-button>添加活动</el-button>
					<el-button>秒杀活动列表</el-button>
				</div>
			</div>
			<el-table ref="multipleTable" :data="tableData" border style="width: 100%">
				<el-table-column prop="city" label="编号">
				</el-table-column>
				<el-table-column prop="address" label="优惠劵名称">
				</el-table-column>
				<el-table-column prop="zip" label="优惠券类型">
				</el-table-column>
				<el-table-column prop="zip" label="可使用商品">
				</el-table-column>
				<el-table-column prop="zip" label="使用门槛">
				</el-table-column>
				<el-table-column prop="zip" label="面值">
				</el-table-column>
				<el-table-column prop="zip" label="适用平台">
				</el-table-column>
				<el-table-column prop="zip" label="有效期">
				</el-table-column>
				<el-table-column prop="zip" label="状态">
				</el-table-column>
				<el-table-column label="操作">
					<template slot-scope="scope">
						<el-button @click="handleClick(scope.row)" type="text" size="small">设置商品</el-button>
						<el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
						<el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
					</template>
				</el-table-column>
			</el-table>
			<div class="fenye">
				<el-pagination class="fenleifenye" background @size-change="handleSizeChange" @current-change="handleCurrentChange"
				 :current-page="1" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper"
				 :total="400">
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
				title: "优惠券列表",
				input: "",
				value1:"",
				
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
		components: {
			menutop
		},
		methods: {
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
</style>
