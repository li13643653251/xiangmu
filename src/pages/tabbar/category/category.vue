<template>
	<view>
		<!-- 头部搜索 -->
		<view class="fenleiyeheader">
			<!-- 扫描二维码 -->
			<view class="btn">
				<view class="mix-icon icon-saoma  ">
				</view>
			</view>
			<maoyuguoji :width='width'></maoyuguoji>
			<!-- 通知栏 -->
			<view class="btn">
				<view class="mix-icon icon-xiaoxi">
				</view>
				<p class="fenleiyetongzhi size12">1</p>
			</view>
		</view>
		<!-- 分类区 -->
		<view style="display: flex; background-color:#F5F5F5 ;" v-if="leftmenu">
			<scroll-view scroll-y="true" class="fenleiyeleft" :style="{height:srollHeight+`px`}">
					
				<ul class="fenleiyeul size14">
					<li style="height: 20px; width: 100%;"></li>
					<li class="fenleiyeli " :class="{'activeli fenleiyeli ':allindex==index}" v-for="(item,index) in leftmenu"
					 @tap="leftmenuclick(index,item.catId)"  :key="index">{{item.name}}</li>
				</ul>
			</scroll-view>
			<scroll-view scroll-y="true" class="fenleiyeright" style="padding-left: 10px;" :style="{height:srollHeight+`px`}">
				<!-- 分类轮播区 -->
				<swiper class="fenleiyelunbo" circular indicator-dots autoplay>
					<swiper-item>
						<view class="fenleiyelunboitem" style="background-color: #CCFF33;">
							<img src="../../../static/category/1.jpg" alt="">
						</view>
					</swiper-item>
					<swiper-item>
						<view class="fenleiyelunboitem" style="background-color: #99FFFF;">
							<img src="../../../static/category/2.jpg" alt="">
						</view>
					</swiper-item>
					<swiper-item>
						<view class="fenleiyelunboitem" style="background-color: #99FF00;">
							<img src="../../../static/category/3.jpg" alt="">
						</view>
					</swiper-item>
				</swiper>
				<!-- 分类商品区 -->
		<!-- 		<view class="fenleiyeshop"  v-if="rightmenu"  v-for="(item ,index)  in  rightmenu"   :key="index">
					<h2 style="font-weight: 700;">{{item.name}}</h2>
					<ul class="fenleiyeshopul size14">
						<li v-for="(it,i) in item.children" @tap="shoplist(it.catId)" :key="i">
							<view style="width: 100%; height: 60px; background-color: #FF9933;">
								
							</view>
							<p style="margin: 20rpx;">{{it.name}}</p>
						</li>
					</ul>
				</view> -->
				
				<view class="fenleiyeshop"  >
					<!-- <h2 style="font-weight: 700;">{{item.name}}</h2> -->
					<ul class="fenleiyeshopul ">
						<li v-for="(item,index) in rightmenu" :key="index" @tap="xiangqing(item.spu_id,item.price)">
							<view style="width: 100%; height: 60px;">
								<img style="border-radius: 50%;" :src="item.imgUrl" alt="">
							</view>
							<p class="catename" style="margin: 20rpx;">{{item.spuName}}</p>
						</li>
					</ul>
				</view>
			</scroll-view>
		</view>
	</view>

</template>

<script>
	import maoyuguoji from "../components/page-header.vue"
	export default {

		components: {
			maoyuguoji
		},
		data() {
			return {
				width: Number,
				srollHeight: 300,
				leftmenu: null,
				rightmenu:null,
				allindex: 0,
				id: null
			}
		},
		onLoad: function() {
			var self = this;
			uni.getSystemInfo({
				success: function(res) {
					console.log(res.windowWidth)
					var height = res.windowHeight - 50; //footerpannelheight为底部组件的高度
					var width = res.windowWidth - 128
					self.srollHeight = height
					self.width = width
					console.log(self.width)
				}
			});

            // 一级分类
			this.$request("product/api/type_list", {
				"level": "3",
				"parent_cid":"1436"
			}, "post").then(res => {
				console.log(res)
				 this.leftmenu = res.list
				//  this.leftmenu.forEach(item=>{
				// 	let a=item.name.slice(0,5)
				// 	item.name=a
				// })
				
				// this.$request("product/api/type_list", {
				// 	"level": "2",
				// 	"cid": "1"
				// },"post").then(res=>{
				// 	this.rightmenu=res.list
				// 	this.rightmenu.forEach(item=>{
				// 		console.log(item)
				// 	})
				// 	// console.log(res)
				// })
				// console.log(res)
				
				
			})
			this.leftmenuclick(0,1437)
		},
		methods: {
			// 第二版
			leftmenuclick(index,id){
				
				this.rightmenu=null
					this.allindex = index
					this.$request("product/api/cate_list",{
						"cid":id
					},"get").then(res=>{
						this.rightmenu=res.spuResps
						console.log(this.rightmenu)
					})
			},
			// 第一版本
			// leftmenuclick(index, id) {
			// 	this.rightmenu=null
			// 	this.allindex = index
			// 	this.$request("product/api/type_list", {
			// 		"level": "2",
			// 		"cid": id
			// 	},"post").then(res=>{
			// 		this.rightmenu=res.list
			// 		console.log(res)
			// 	})
				
				// this.$request("api/product/api/type_list",{
				// 	"level":"2" ,
				// 	"parent_cid":id
				// },"post").then(res=>{
				// 	// this.leftmenu=res.list
				// 	res.list.forEach(item=>{
				// 		console.log(item.catId)
				// 		this.$request("api/product/api/type_list",{
				// 			"level":"3" ,
				// 			"parent_cid":item.catId
				// 		},"post").then(res=>{
				// 			// this.leftmenu=res.list
				// 			console.log(res)
				// 		})
				// 	})
				// 	console.log(res)
				// })
				// console.log(id)
				// console.log(index)
			// },
			shoplist(id){
				// uni.navigateTo({
				// 	url: `/pages/shangpinliebiao/shangpinliebiao?id=${id}`
				// });
			},
			// 详情页
		xiangqing(num,price) {
			
			uni.navigateTo({
				url: `/pages/xiangqingye/xiangqingye?id=${num}&price=${price}`
			});
			console.log(123)
		},
		}
	}
</script>

<style>
	@import url("../../../common/css/style/category.css");
</style>
