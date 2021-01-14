<template>
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
				<el-input v-model="input" placeholder="请输入内容" class="iptone"></el-input>
			</div>

			<div style="margin-left: 80px;">
				商品分类： <el-select v-model="value" placeholder="请选择">
					<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
					</el-option>
				</el-select>
			</div>
			<div style="margin-left: 80px;">
				商品品牌： <el-select v-model="value1" placeholder="请选择">
					<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
					</el-option>
				</el-select>
			</div>


		</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {
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
				value: '',
				value1: ''
			}
		},
		methods: {
			searchshop() {
				console.log(this.input)
			}
		}
	}
</script>

<style>
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
		/* justify-content: center; */

	}

	.iptone {
		width: 200px;
	}
</style>
