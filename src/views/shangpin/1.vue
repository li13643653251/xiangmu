<template>
	<div>
		<menutop :title="title"></menutop>
		<el-tabs v-model="activeName" type="card" @tab-click="handleClick">
			<el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
			<el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
			<el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
			<el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
		</el-tabs>
	</div>
</template>

<script>
	import menutop from "../../components/menutop.vue"
	export default {
		data() {
			return {
				title: "鍟嗗搧鍒楄〃"
			}
		},
		components: {
			menutop
		},
		created() {
			console.log(this.title)
		}

	}
</script>

<style>
</style>
