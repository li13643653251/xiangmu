<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
	@import url("assets/style/reset.css");
	html,body{
		width: 100%;
		height: 100%;
	}
	#app {
	  width: 100%;
	  height: 100%;
	  /* overflow: hidden; */
	}
	.el-main{
		padding: 0;
	}
	/* .el-tabs__nav-scroll{
		display: none;
	} */

</style>
