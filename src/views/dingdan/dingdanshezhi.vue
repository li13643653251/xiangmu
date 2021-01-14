<template>
	<div>
		<menutop :title="title"></menutop>
		<div class="jiange"></div>
		<div style="background-color: #F3F3F3; width: 100%;">
			<div class="toptitle">
				<div>数据列表</div>
			</div>
			<div class="fromipt">
				<div>
					<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="150px" class="demo-ruleForm" style="padding-top: 80px;">
						<el-form-item label="秒杀订单超过" prop="name0" >
							<el-input v-model="ruleForm.name0" style="width: 200px;"></el-input>
							<el-tag type="info"class="fen">分</el-tag>
							未付款，订单自动关闭
						</el-form-item>
						<el-form-item label="正常订单超过" prop="name1" >
							<el-input v-model="ruleForm.name1" style="width: 200px;"></el-input>
							<el-tag type="info"class="fen">分</el-tag>
							未付款，订单自动关闭
						</el-form-item>
						<el-form-item label=" 发货超过" prop="name2" >
							<el-input v-model="ruleForm.name2" style="width: 200px;"></el-input>
							<el-tag type="info"class="fen">天</el-tag>
							未收货，订单自动完成
						</el-form-item>
						<el-form-item label="订单完成超过" prop="name3" >
							<el-input v-model="ruleForm.name3" style="width: 200px;"></el-input>
							<el-tag type="info"class="fen">天</el-tag>
							自动结束交易，不能申请售后
						</el-form-item>
						<el-form-item label="订单完成超过" prop="name4" >
							<el-input v-model="ruleForm.name4" style="width: 200px;"></el-input>
							<el-tag type="info"class="fen">天</el-tag>
							自动五星好评
						</el-form-item>
					
						<el-form-item>
							<el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
						</el-form-item>
					</el-form>
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
				title: "订单设置",
				ruleForm: {
					name0: '40',
					name1: '60',
					name2: '15',
					name3: '7',
					name4: '7',
				},
				rules: {
					name0: [{
						required: true,
						message: '请填写时间',
						trigger: 'blur'
						}
					],
					name1: [{
						required: true,
						message: '请填写时间',
						trigger: 'blur'
						}
					],
					name2: [{
						required: true,
						message: '请填写时间',
						trigger: 'blur'
						}
					],
					name3: [{
						required: true,
						message: '请填写时间',
						trigger: 'blur'
						}
					],
					name4: [{
						required: true,
						message: '请填写时间',
						trigger: 'blur'
						}
					],
				}
			};
		
	},
	components: {
			menutop
		},
		methods: {
			submitForm(formName) {
				
				this.$refs[formName].validate((valid) => {
					console.log(valid)
					if (valid) {
						console.log(this.ruleForm)
						alert('submit!');
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
			resetForm(formName) {
				this.$refs[formName].resetFields();
			}
		}
	

	}
</script>

<style>
	.jiange {
		width: 100%;
		height: 20px;
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

	.fromipt {
		width: 100%;
		background: #FFFFFF;
		height: 500px;
	}

	.fromipt>div {
		width: 800px;
		margin: 0 auto;
		
	}
	.fen{
		height: 38px;
		line-height: 36px;
	}
</style>
