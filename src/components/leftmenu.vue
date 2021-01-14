<template>
	<div>
		<div style="display: flex;">
			<div class="list" >
				<ul>
					<li  v-for="(item,index) in list">
						<span :class="item.icon"></span>
						<span>{{item.name}}</span>
					</li>
				</ul>
			</div>
			
			<div class="rightlist">
				<ul>
					<li>
					    ●系统首页
					</li>
					<li>
						●系统首页
					</li>
					<li>
						●系统首页
					</li>
					<li>
						●系统首页
					</li>
				</ul>
			</div>
		</div>
	
	</div>
</template>

<script>
	import {arr} from "../assets/new_list.js"
	export default {
		data(){
			return {
				list:Array,
				two:[],
				three:Array
				
			}
		},
		created() {
			this.list=arr
			let that=this
			arr.forEach(item=>{
				item.list.forEach(it=>{
					// console.log(it.name)
					that.two.push(it.name)
					console.log(that.two)
					// that.two.push(it.name)
				})
				// that.two.push(item.list.name)
				// console.log(item.list.name)
			})
			console.log(arr)
		}
	}
</script>

<style scoped>
	.list{
		width:80px;
		height: 100%;
		color: darkgray;
		/* background-color: #0000FF; */
	}
	.list>ul>li{
		text-align: center;
		line-height: 40px;
		width: 100%;
		height: 40px;
	}
	.active{
		color: #FFFFFF;
	}
	.rightlist{
		width: 120px;
		height: 100%;
		background-color: #EAEDF1;
		color: #333333;
	}
	.rightlist>ul>li{
		/* text-align: center; */
		/* list-style: disc; */
		line-height: 40px;
	}
</style>
