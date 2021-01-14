<template>
	<div class="obody">


		<div id="login">
			<div class="login_box">
				<div class="login_img">
					<img src="../assets/u19.png" alt="">
				</div>
				<h1 class="title">电商后台业务管理系统</h1>
				<h2 class="title1">Business Management System</h2>
				<el-form ref="loginForm" :rules="rules" :model="loginForm" class="login_from">
					<el-form-item prop="username">
						<el-input v-model="loginForm.username" prefix-icon="iconfont el-icon-user-solid" placeholder="请输入用户名称"></el-input>
					</el-form-item>
					<el-form-item prop="password">
						<el-input v-model="loginForm.password" prefix-icon="iconfont el-icon-unlock" type="password" placeholder="请输入登陆密码"></el-input>
					</el-form-item>
					<el-form-item class="bnts">
						<el-button style="background-color: rgba(26, 188, 156, 1);border-color:rgba(26, 188, 156, 1);" type="primary" @click="onLogin">登录</el-button>
						<el-button type="info" @click="resetLogin('loginForm')">重置</el-button>
					</el-form-item>
				</el-form>
			</div>

		</div>
	</div>
</template>

<script>
	import { getlogin } from "@/network/get";
	export default {
		data() {
			return {
				loginForm: {
					username: 'admin',
					password: 'meyes',
				},
				rules: {
					username: [{
							required: true,
							message: '请输入登录名称',
							trigger: 'blur'
						},
						{
							min: 3,
							max: 10,
							message: '长度在 3 到 10 个字符',
							trigger: 'blur'
						}
					],
					password: [{
							required: true,
							message: '请输入登录密码',
							trigger: 'blur'
						},
						{
							min: 5,
							max: 15,
							message: '长度在 5 到 15 个字符',
							trigger: 'blur'
						}
					]
				}
			}
		},
		created() {
			// this.a()
		},
		methods: {

			onLogin() {
				this.$refs.loginForm.validate((valid) => {
					if (!valid) return
					getlogin(this.loginForm).then((res) => {
					  console.log(res);
					  if(res.code!==0) return this.$message.error('登录失败！')
					  this.$message.success('登录成功')
					  window.sessionStorage.setItem('userToken', res.token)
					  this.$router.push({ path:'/home/xitongshouye'})
					});
					// console.log(valid)
					// console.log(this.loginForm)
					let that=this
					// this.$axios.post('http://4cec0751536d.ngrok.io/api/sys/login',{
				 //     "username":this.loginForm.username,
					//  "password":this.loginForm.password
					// }).then(res=>{
					// 	console.log(res)
					// })
					
					// this.$axios.post('http://localhost:8888/api/private/v1/login',this.loginForm).then(res=>{
					// 	// console.log(res)
					// 	if (res.status !== 200) return this.$message.error('登录失败！')
					// 	this.$message.success('登录成功')
					// 	window.sessionStorage.setItem('userToken', res.data.data.token)
						// this.$router.push({ path:'/Home'})
					// })
				});
			},
			resetLogin(formName) {
				this.$refs[formName].resetFields();
			}

		},

	}
</script>

<style scoped>
	* {
		margin: 0;
		padding: 0;
	}

	.obody {
		width: 100%;
		height: 100%;
	}

	#login {
		width: 100%;
		height: 100%;
		/* height: 700px; */
		margin: 0 auto;
		background-image: url(../assets/login.png);
		background-repeat: no-repeat;
		background-size: 100%;
		background-color: rgba(26, 188, 156, 1);
	}

	.login_box {
		width: 450px;
		height: 350px;
		background-color: rgba(255, 255, 255, 1);

		position: absolute;
		top: 30%;
		left: 36%;
	}

	.login_img {
		width: 130px;
		height: 130px;
		/* border: 1px solid #eee; */
		border-radius: 50%;
		padding: 10px;
		position: absolute;
		left: 33%;
		top: -50%;
		/* background-color: #fff; */
		overflow: hidden;
	}

	.login_img img {
		width: 100%;
		height: 100%;
		border-radius: 50%;
		/* background-color: #eee; */
	}

	.login_from {
		width: 100%;
		position: absolute;
		top: 150px;
		padding: 0 20px;
		box-sizing: border-box;
	}

	#login .el-form-item__content {
		margin-left: 0px;
	}

	.bnts {
		display: flex;
		justify-content: flex-end;
	}
	.title{
	  margin-top: 35px;
	  text-align: center;
	  font-weight: 700;
	  color: #1ABC9C;
	  letter-spacing:1px;
	  font-size: 28px;
	}
	.title1{
		margin-top: 10px;
	  text-align: center;
	  color: #1ABC9C;
	  letter-spacing:1px;
	  font-size: 28px;
	}
</style>
