<template>
	<div class="bigbox">
		<div class="title">
			<i class="el-icon-notebook-1"></i>
			选择分类
		</div>
		<div class="bodydiv">
			<slot></slot>
		</div>
	</div>
</template>

<script>
</script>

<style scoped="scoped">
	.bigbox {

		width: 100%;
		display: flex;
		position: relative;
		/* background-color: #FFFFFF; */
	}

	.title {
		width: 30%;
		z-index: 5;
		position: absolute;
		top: 8%;
		left: 8%;
		max-width: 200px;
		height: 50px;
		line-height: 50px;
		text-align: center;
		color: #FFFFFF;
		background-image: url(../assets/u2891.svg);
		background-repeat: no-repeat;
		background-size: auto;
		/* bac */
		/* background-position: ; */
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
</style>
