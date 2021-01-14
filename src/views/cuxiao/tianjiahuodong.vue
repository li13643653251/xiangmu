<template>
	<div>
		<menutop :title="title"></menutop>
		<div class="jiange"></div>
		<div class="bigbox">
			<div class="bodydiv">
				<div style="margin:0 auto; width: 800px;">
					
				
				<el-form :model="ruleForm" :rules="rules"  ref="ruleForm" label-width="100px" class="demo-ruleForm">
					<el-form-item label="活动名称" prop="name">
						<el-input v-model="ruleForm.name" class="iptwidth-200"></el-input>
					</el-form-item>
				
					<el-form-item label="开始时间" required>
						<el-col :span="11">
							<el-form-item prop="date1">
							    <el-date-picker
							      v-model="ruleForm.date1"
							      type="datetime"
							      placeholder="选择日期时间">
							    </el-date-picker>
							</el-form-item>
						</el-col>
					</el-form-item>
					<el-form-item label="结束时间" required>
						<el-col :span="11">
							<el-form-item prop="date2">
							    <el-date-picker
							      v-model="ruleForm.date2"
							      type="datetime"
							      placeholder="选择日期时间">
							    </el-date-picker>
							</el-form-item>
						</el-col>
					</el-form-item>
					<el-form-item label="标题上传" prop="delivery">
							<el-upload
							  class="upload-demo"
							  action="https://jsonplaceholder.typicode.com/posts/"
							  :on-preview="handlePreview"
							  :on-remove="handleRemove"
							  :before-remove="beforeRemove"
							  multiple
							  :limit="3"
							  :on-exceed="handleExceed"
							  :file-list="fileList">
							  <el-button size="small" type="primary">点击上传</el-button>
							  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
							</el-upload>
						</el-form-item>
				
					<el-form-item label="上线/下架" prop="resource">
						<el-radio-group v-model="ruleForm.resource">
							<el-radio label="上架"></el-radio>
							<el-radio label="下架"></el-radio>
						</el-radio-group>
					</el-form-item>
					<el-form-item label="活动描述" prop="desc">
						<el-input type="textarea" class="iptwidth-200" v-model="ruleForm.desc"></el-input>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
						<el-button @click="resetForm('ruleForm')">重置</el-button>
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
		components: {
			menutop
		},

		data() {
			return {
				  fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
				  
				title: "添加活动",

				ruleForm: {
					name: '',//标题
					
					date1: '',//开始
					date2: '',//结束
					delivery: false,
					type: [],
					resource: '',//上架下架
					desc: ''//描述
				},
				rules: {
					name: [{
							required: true,
							message: '请输入活动名称',
							trigger: 'blur'
						},
						{
							min: 3,
							max: 5,
							message: '长度在 3 到 5 个字符',
							trigger: 'blur'
						}
					],
					date1: [{
						type: 'date',
						required: true,
						message: '请选择日期',
						trigger: 'change'
					}],
					date2: [{
						type: 'date',
						required: true,
						message: '请选择时间',
						trigger: 'change'
					}],
					type: [{
						type: 'array',
						required: true,
						message: '请至少选择一个活动性质',
						trigger: 'change'
					}],
					resource: [{
						required: true,
						message: '请选择活动资源',
						trigger: 'change'
					}],
					desc: [{
						required: true,
						message: '请填写活动形式',
						trigger: 'blur'
					}],
					
				}
			};
		},
		methods: {
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						alert('submit!');
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
			resetForm(formName) {
				this.$refs[formName].resetFields();
			},
			// 上传
			   handleRemove(file, fileList) {
			        console.log(file, fileList);
			      },
			      handlePreview(file) {
			        console.log(file);
			      },
			      handleExceed(files, fileList) {
			        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
			      },
			      beforeRemove(file, fileList) {
			        return this.$confirm(`确定移除 ${ file.name }？`);
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
		padding-top: 50px;
		margin: 0 auto;
		width: 1000px;
		height: 100%;
		height: 800px;
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
	.jiange {
		width: 100%;
		height: 20px;
	}
</style>
