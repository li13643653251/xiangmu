<template>
	<div>
		<menutop :title="title"></menutop>
		<div class="bigbox">
			<div class="bodydiv">

				<el-form ref="form" :model="form" label-width="200px">
					<div class="title">
						成长值规则设置
					</div>
					<el-form-item label="每连续签到">
						<el-input placeholder="请输入内容" class="iptwidth-200" v-model="form.name">
							<template slot="append">天</template>
						</el-input>
					</el-form-item>
					<el-form-item label="额外奖励">
						<el-input placeholder="请输入内容" class="iptwidth-200" v-model="form.name">
							<template slot="append">分</template>
						</el-input>
					</el-form-item>
					<el-form-item label="购物消费">
						<el-input placeholder="请输入内容" class="iptwidth-200" v-model="form.name">
							<template slot="append">元</template>
						</el-input>
						奖励1分成长值（不含运费）
					</el-form-item>
					<el-form-item label="商品单价低于">
						<el-input placeholder="请输入内容" class="iptwidth-200" v-model="form.name">
							<template slot="append">天</template>
						</el-input>
						评价不送成长值
					</el-form-item>
					<el-form-item label="订单实际支付金额低于">
						<el-input placeholder="请输入内容" class="iptwidth-200" v-model="form.name">
							<template slot="append">天</template>
						</el-input>
						不送成长值
					</el-form-item>
					<el-form-item label="单件商品最高可获得">
						<el-input placeholder="请输入内容" class="iptwidth-200" v-model="form.name">
							<template slot="append">天</template>
						</el-input>
						成长值
					</el-form-item>
					<div class="title">
						优币规则设置
					</div>
					<el-form-item label="每连续签到">
						<el-input placeholder="请输入内容" class="iptwidth-200" v-model="form.name">
							<template slot="append">天</template>
						</el-input>
					</el-form-item>
					<el-form-item label="额外奖励">
						<el-input placeholder="请输入内容" class="iptwidth-200" v-model="form.name">
							<template slot="append">分</template>
						</el-input>
					</el-form-item>
					<el-form-item label="购物消费">
						<el-input placeholder="请输入内容" class="iptwidth-200" v-model="form.name">
							<template slot="append">元</template>
						</el-input>
						奖励1个优币（不含运费）
					</el-form-item>
					<el-form-item label="商品单价低于">
						<el-input placeholder="请输入内容" class="iptwidth-200" v-model="form.name">
							<template slot="append">天</template>
						</el-input>
						评价不送成长值
					</el-form-item>
					<el-form-item label="订单实际支付金额低于">
						<el-input placeholder="请输入内容" class="iptwidth-200" v-model="form.name">
							<template slot="append">天</template>
						</el-input>
						不送成长值
					</el-form-item>
					<el-form-item label="单件商品最高可获得">
						<el-input placeholder="请输入内容" class="iptwidth-200" v-model="form.name">
							<template slot="append">天</template>
						</el-input>
						成长值
					</el-form-item>
					<div class="title">
						优币消费设置
					</div>
					<el-form-item label="抵扣订单金额每">
						<el-input placeholder="请输入内容" class="iptwidth-200" v-model="form.name">
							<template slot="append">个</template>
						</el-input>
						抵扣1元
					</el-form-item>
					<el-form-item label="最高可抵扣订单金额比例">
						<el-input placeholder="请输入内容" class="iptwidth-200" v-model="form.name">
							<template slot="append">%</template>
						</el-input>
						
					</el-form-item>
					<el-form-item label="使用时的倍数">
						<el-input placeholder="请输入内容" class="iptwidth-200" v-model="form.name">
							<!-- <template slot="append">天</template> -->
						</el-input>
						
					</el-form-item>
					<el-form-item label="与优惠券同时使用">
						   <el-switch v-model="form.delivery"></el-switch>
						
					</el-form-item>
				</el-form>
				
				<div class="btn">
					 <el-button type="primary" @click="onSubmit">提交</el-button>
								 
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
				title: "更多规则设置",
				form: {
					name: '',
					region: '',
					date1: '',
					date2: '',
					delivery: false,
					type: [],
					resource: '',
					desc: ''
				}
			}
		},
		components: {
			menutop
		},
		methods:{
			  onSubmit() {
			        console.log(this.form)
			      }
		}
	}
</script>

<style>
	.bigbox {
		width: 100%;
		/* display: flex; */
		position: relative;
		
	}

	.bodydiv {
		margin: 0 auto;
		width: 1000px;
		height: 100%;
		/* height: 500px; */
		min-height: 500px;
		/* height: 800px; */
		/* height: 500px; */
		background-color: #FFFFFF;
	}

	.title {
		width: 100%;
		height: 50px;
		line-height: 50px;
		font-size: 24px;
		color: #CCCCCC;
		font-weight: 500;
		margin-left: 10px;

	}

	.iptwidth-200 {
		width: 200px;
	}
	.btn{
		width: 200px;
		
		margin:  100px auto;
		
	}
</style>
