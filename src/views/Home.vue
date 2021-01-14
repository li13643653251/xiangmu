<template>
	<div id="home">
		<el-container class="home_container">
			<el-header>
				<div>
					<img style="width: 15%; height: 35px;" src="../assets/u19.png" alt="">
					<span>电商后台管理系统</span>
				</div>
				<el-button type="info" @click="layout">退出</el-button>
			</el-header>
			<el-container>
				<el-aside :width="isCollapse?'120px':'200px'">
					<div class="toggle-button" @click="toggleCollapse">|||</div>
					<el-row class="tac">
						<el-col :span="24">
							<!-- <leftmenu></leftmenu> -->
							<el-menu    class="el-menu-vertical-demo"  :default-active="onRoutes" background-color="#464C5B" text-color="#fff" active-text-color="#1ABC9C"
							 :collapse="isCollapse" :collapse-transition="false" router>
								<el-submenu  v-if="LeftData" v-for="(item,index) in LeftData"  :index="index+``" :key="index">
									<template slot="title">
										<i :class="item.icon"></i>
										<span>{{item.name}}</span>
									</template>
									<el-menu-item-group  v-for="(it,i) in item.list"  :title="it.name" :key="i">
										<el-menu-item v-for="(x,y) in it.list" :key="y" :index="x.url" >{{x.name}}</el-menu-item>
									</el-menu-item-group>
								</el-submenu>
							</el-menu>
						</el-col>
					</el-row>
				</el-aside>
				<el-main style="padding: 0;">
					<router-view></router-view>
				</el-main>
			</el-container>
		</el-container>
		
	</div>
</template>

<script>
	import leftmenu from "../components/leftmenu.vue"
	import {
		homemenu
	} from "@/network/get.js";
	export default {
		data() {
			return {
				loading:true, 
				LeftData: [],
				isCollapse: false,
				activePath: '',
				iconsObj: {
					'125': 'el-icon-user-solid',
					'103': 'el-icon-help',
					'101': 'el-icon-s-goods',
					'102': 'el-icon-edit-outline',
					'145': 'el-icon-data-line'
				},
			}
		},
		created() {
			// console.log(this.$route.path.replace('/home', ''))
		this.homemenulist()
			// console.log(this.$router.options.routes)
			// getLeftData().then(res => {
			// 	// console.log(res)
			// 	this.LeftData = res.data;
			// 	// console.log(this.LeftData)
			// })
			//  this.activePath = window.sessionStorage.getItem('activePath')
		},
		methods: {
			// 左边菜单
		async	homemenulist(){
			let	a = sessionStorage.getItem("userToken");
			await	homemenu(a).then(res => {
					console.log(res,666666)
					this.LeftData=res
					this.loading=false
				})
			},
			toggleCollapse() {

				this.isCollapse = !this.isCollapse
				console.log(this.isCollapse)
			},
			saveNavState(activePath) {
				window.sessionStorage.setItem('activePath', activePath)
				this.activePath = activePath
			},
			layout() {
				window.sessionStorage.clear()
				this.$router.push('/login')
			},
		},
		computed:{
			onRoutes(){
			    return this.$route.path
			}
		},
		components:{
			leftmenu
		}
	}
</script>
<style scoped>
	body{
		margin: 0;
	}
	#home {
		width: 100%;
		height: 100%;
		/* background-color:; */
	}

	.home_container {
		height: 100%;
	}

	.el-header {
		background-color: rgba(26, 188, 156, 1);
		color: #fff;
		text-align: center;
		line-height: 60px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.el-header div {
		display: flex;
		align-items: center;
	}

	.el-header div>span {
		font-size: 20px;
		margin-left: 15px;
	}

	.el-aside {
		background-color: #464C5B;
		color: #fff;
		/* text-align: center; */
		line-height: 200px;
	}

	.el-aside .el-menu {
		border-right: none;
	}

	.el-main {
		background-color: #E9EEF3;
		color: #333;
		/* text-align: center; */
		/* line-height: 160px; */
	}

	.toggle-button {
		background-color: rgba(26, 188, 156, 1);
		font-size: 10px;
		line-height: 24px;
		color: #fff;
		text-align: center;
		letter-spacing: 0.2em;
		cursor: pointer;
	}
</style>
