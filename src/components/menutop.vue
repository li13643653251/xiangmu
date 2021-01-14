<template>
	<div class="menutop">
		<div class="leftcolor">
			
		</div>
		<div class="menutitle">
			{{title}}
		</div>
	    <!-- <div> -->
			 <el-button style=" margin-left: auto;">刷新</el-button>
		<!-- </div> -->
	</div>
</template>

<script>
	export default {
		data(){
			return {
				
			}
		},
		props:{
			title:String
		},
		created() {
			console.log(this.title)
		}
		
	}
</script>

<style >
	.menutop{
		position: relative;
		display: flex;
		
		width: 100%;
		height: 50px;
		line-height: 50px;
		background-color: #F3F3F3;
		border-bottom: 1px solid #F3F3F3;
	}
	.leftcolor{
		position: absolute;
		top: 17.5px;
		width: 8px;
		height: 15px;
		background-color: #1ABC9C;
	}
	.menutitle{
		color: #999999;
		margin-left: 20px;
	}
</style>
