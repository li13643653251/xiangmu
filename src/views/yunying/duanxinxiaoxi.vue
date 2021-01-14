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
					消息标题：
					<el-input v-model="input" placeholder="消息标题" class="iptone"></el-input>
				</div>
				<div style="margin-left: 80px;">
					发布人员：
					<el-select v-model="value1" clearable placeholder="全部">
						<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
				</div>
				<div style="margin-left: 80px;">
					发布时间
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
				<div>
					<el-button>发送短信</el-button>
					<el-button>群发信息</el-button>
				</div>
			</div>
			<div class="shopalllist">
				<div class="duanxin">
					<div class="duanxintop">
						<div style="margin-left: 20px;">
							发布人员：admin ;发送时间：2017-08-02 15:47:44     接收对象：200人
						</div>
						<div  style="margin-right: 20px;">
							删除
						</div>
					</div>
					<div class="duanxincont">
						<div style="line-height: 50px; margin: 0 20px;">
							尊敬的用户，为了给您带来更好的体验，秒杀专区业务将于2017年4月26日22：00-2017年4月27日09:00期间进行系统升级，升级期间秒杀专区入口将暂时下线。升级后可正常充值和查看充值记录，请有需要的用户提前充值或者在系统升级后再充值。给您带来的不便，敬请谅解。感谢您一如既往的支持。
						</div>
					</div>
				</div>
		<div class="duanxin">
			<div class="duanxintop">
				<div style="margin-left: 20px;">
					发布人员：admin ;发送时间：2017-08-02 15:47:44     接收对象：200人
				</div>
				<div  style="margin-right: 20px;">
					删除
				</div>
			</div>
			<div class="duanxincont">
				<div style="line-height: 50px; margin: 0 20px;">
					尊敬的用户，为了给您带来更好的体验，秒杀专区业务将于2017年4月26日22：00-2017年4月27日09:00期间进行系统升级，升级期间秒杀专区入口将暂时下线。升级后可正常充值和查看充值记录，请有需要的用户提前充值或者在系统升级后再充值。给您带来的不便，敬请谅解。感谢您一如既往的支持。
				</div>
			</div>
		</div>
		<div class="duanxin">
			<div class="duanxintop">
				<div style="margin-left: 20px;">
					发布人员：admin ;发送时间：2017-08-02 15:47:44     接收对象：200人
				</div>
				<div  style="margin-right: 20px;">
					删除
				</div>
			</div>
			<div class="duanxincont">
				<div style="line-height: 50px; margin: 0 20px;">
					尊敬的用户，为了给您带来更好的体验，秒杀专区业务将于2017年4月26日22：00-2017年4月27日09:00期间进行系统升级，升级期间秒杀专区入口将暂时下线。升级后可正常充值和查看充值记录，请有需要的用户提前充值或者在系统升级后再充值。给您带来的不便，敬请谅解。感谢您一如既往的支持。
				</div>
			</div>
		</div>
		<div class="duanxin">
			<div class="duanxintop">
				<div style="margin-left: 20px;">
					发布人员：admin ;发送时间：2017-08-02 15:47:44     接收对象：200人
				</div>
				<div  style="margin-right: 20px;">
					删除
				</div>
			</div>
			<div class="duanxincont">
				<div style="line-height: 50px; margin: 0 20px;">
					尊敬的用户，为了给您带来更好的体验，秒杀专区业务将于2017年4月26日22：00-2017年4月27日09:00期间进行系统升级，升级期间秒杀专区入口将暂时下线。升级后可正常充值和查看充值记录，请有需要的用户提前充值或者在系统升级后再充值。给您带来的不便，敬请谅解。感谢您一如既往的支持。
				</div>
			</div>
		</div>
		<div class="duanxin">
			<div class="duanxintop">
				<div style="margin-left: 20px;">
					发布人员：admin ;发送时间：2017-08-02 15:47:44     接收对象：200人
				</div>
				<div  style="margin-right: 20px;">
					删除
				</div>
			</div>
			<div class="duanxincont">
				<div style="line-height: 50px; margin: 0 20px;">
					尊敬的用户，为了给您带来更好的体验，秒杀专区业务将于2017年4月26日22：00-2017年4月27日09:00期间进行系统升级，升级期间秒杀专区入口将暂时下线。升级后可正常充值和查看充值记录，请有需要的用户提前充值或者在系统升级后再充值。给您带来的不便，敬请谅解。感谢您一如既往的支持。
				</div>
			</div>
		</div>
				<!-- 	<el-table ref="multipleTable" @selection-change="handleSelectionChange" :data="tableData" :border="true">
				<el-table-column type="selection">
				</el-table-column>
				<el-table-column prop="id" label="编号">
				</el-table-column>
				<el-table-column prop="spuName" label="消息标题">
				</el-table-column>
				<el-table-column prop="city" label="发布时间">
					v
				</el-table-column>
				<el-table-column prop="zip" label="发布人员">
				</el-table-column>		
				<el-table-column label="操作">
					<template slot-scope="scope">
						<el-button type="text" @click="handleClick(scope.row)" size="small">查看订单 </el-button>
						<el-button type="text" size="small">关闭订单</el-button>
					</template>
				</el-table-column>
			</el-table> -->
				<div class="shoplistbutton">
					<div>
						<el-button @click="toggleSelection(tableData)">全选</el-button>
						<el-select v-model="value1" style="width: 150px;" clearable placeholder="批量操作">
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
	</div>
</template>
<script>
	import menutop from "../../components/menutop.vue" //标题
	export default {
		data() {
			return {
				title: "短信消息",
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
			handleClick(tab, event) {
				console.log(tab, event);
			},
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

	.duanxin {
		width: 100%;
		height: 150px;
		background-color: #FFFFFF;
		margin-top: 10px;
	}

	.duanxintop {
		width: 100%;
		height: 50px;
		line-height: 50px;
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-between;
		background-color: white;
		border-bottom: 1px solid darkgray;

	}
	.duanxincont{
		width: 100%;
		height: 100px;
		/* line-height: 100px; */
	}
</style>
