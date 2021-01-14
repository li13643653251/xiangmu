<template>
	<div>
		<menutop :title="title"></menutop>
		
	</div>
</template>

<script>
	import menutop from "../../components/menutop.vue"
	export default {
		data(){
			return {
				title:"系统首页"
			}
		},
		components:{
			menutop
		}
	}
</script>

<style>
</style>
