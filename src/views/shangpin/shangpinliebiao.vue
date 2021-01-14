<template>
	<div>
		<menutop :title="title"></menutop>


		<el-tabs type="border-card">
			<!-- 全部商品 -->
			<el-tab-pane><span slot="label"> 全部商品 <i class="">(1000)</i> </span>

				<shopsearch></shopsearch>
				<div class="jiange"></div>
				<shoplist :tableData="tableData" @fromChild="getChild"></shoplist>
			</el-tab-pane>
			<el-tab-pane label="已上架"> <span slot="label"> 已上架 <i class="">(1000)</i> </span>
				<shopsearch></shopsearch>
			</el-tab-pane>
			<el-tab-pane label="未上架"> <span slot="label"> 未上架 <i class="">(1000)</i> </span>未上架 </el-tab-pane>
			<el-tab-pane label="待审核"> <span slot="label"> 待审核 <i class="">(1000)</i> </span>待审核 </el-tab-pane>
			<el-tab-pane label="未通过"> <span slot="label"> 未通过 <i class="">(1000)</i> </span>未通过 </el-tab-pane>
		</el-tabs>


		<!-- <el-tabs  v-model="activeName" type="card" @tab-click="handleClick"> -->
		<!-- 			<el-tab-pane  style="border: 1px solid black;" v-for="(item,i) in arr" :label="item" :name="i">{{i}}</el-tab-pane>
 -->
		<!-- <el-tab-pane label="已上架" name="second">配置管理</el-tab-pane>
			<el-tab-pane label="未上架" name="third">角色管理</el-tab-pane>
			<el-tab-pane label="待审核" name="fourth">定时任务补偿</el-tab-pane>
			<el-tab-pane label="未通过" name="one">1</el-tab-pane> -->
		<!-- </el-tabs> -->
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
				title: "商品列表",
				activeName: 'first',
				arr: ["全部商品", "已上架", "未上架", "待审核", "未通过"],
				// a:{
				// 	page:1,
				// 	 limit:10
				// }
				tableData: null

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
			handleClick(tab, event) {
				console.log(tab, event);
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
</style>
