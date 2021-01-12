<template>
	<view class="homebigbox">
		<!-- <vantag type="info">11</vantag> -->
		<!-- <van-button type="info">12121212</van-button> -->
         <!-- <vantbutton  >123</vantbutton> -->
		<maoyuguoji :width='width'></maoyuguoji>
		<!--点击搜索跳转到搜索页 -->
		<!--<view class="Mengxiangzhichengbo">
			<view class="mix-icon  icon-sousuo">
			</view>
			<view class="toptext">
				请输入要搜索的商品
			</view>
		    </view> -->
		<!--轮播图 -->
		<swiper class="shouyelunbo" circular indicator-dots autoplay>
			<swiper-item v-for="(item,index) in swiperimg" :key="index">
				<img :src="item.pic" alt="">
			</swiper-item>
	
		</swiper>
		<!-- 商品介绍区 -->
		<view class="lunbocount">
			<view class="countitem">
				<view class="mix-icon  icon-xuanzhong"></view>
				蛙套精选
			</view>
			<view class="countitem">
				<view class="mix-icon  icon-xuanzhong"></view>
				产地直供
			</view>
			<view class="countitem">
				<view class="mix-icon  icon-xuanzhong"></view>
				正品保障
			</view>
			<view class="countitem">
				<view class="mix-icon  icon-xuanzhong"></view>
				平台售后
			</view>
		</view>
		<!-- 金刚区 -->
		<view class="shouyefenlei">
			<view class="shouyefenleiitem" v-for="(item,index) in fivelist"  :key="index" @tap="shoplist(item.catId)">
				<view class="shouyefenleiimg">
					<img :src="item.icon" alt="" style="border-radius: 50%;">
				</view>
				<view class="shouyefenleitext">
					<text style="color: #515151; " class="size12 huise">{{item.name}}</text>
				</view>
			</view>
			<!-- <view class="qingchufudong"></view> -->
		</view>
		
		 <lick :titletext="1"></lick>
<!-- 		<view class="shouyecainixihuan">
			<view class="cainixihuantext size18">猜你喜欢</view>
			<view class="xihuanshangpin">
				
				<view class="lickitem" v-for="(item,index) in lickshop" :key="index">
					<view class="lickitemimg" @tap="xiangqing(item.spu_id,item.price)">
						<img class="radioimg" style="width: 95%;" :src="item.imgUrl" alt="">
					</view>
					<view style="margin-top: 20rpx;">
						<p class="lickshoptext shoptitle">
							
							{{item.spuName}}
						</p>
						<view class="lickshopmoney">
							<p>
								<span class="nowmoney size12">￥<span class="size16" style="color:red ;">{{item.price}}</span></span>
								<span class="oldmoney size12">￥222</span>
							</p>
							<p id="licksales" class="huise">销量: <span>{{item.saleCount}}</span></p>
							<view style="clear: both;"></view>
						</view>
						<view class="lickshopbottom">
							<view class="homefan ">
								<p style="color: #FFFFFF; font-size: 10px;">尊v自购返</p>
								<p class="size12">￥5.55</p>
							</view>
						</view>
					</view>
				</view>
			</view>
			
		</view> -->
	</view>
	</view>
</template>

<script>
	
	// import vantag from '../../../wxcomponents/vant/dist/button/index';
	import lick from "../components/cainixihuan.vue"
	import {
		mapState
	} from "vuex"
	import maoyuguoji from "../components/page-header.vue"
	export default {
		components: {
			maoyuguoji,
			lick
			// vantag
		},
		data() {
			return {
				num: 1,
				width: Number,
				fivelist: null,
				lickshop:null,
				swiperimg:null
			}
		},
		onLoad: function() {
			this.onfivelist()
			this.youlick()
			this.topswiper()
			// 动态获取用户手机的宽度
			var self = this;
			uni.getSystemInfo({
				success: function(res) {
					var width = res.windowWidth - 15
					self.width = width
				}
			});
			
			
		},
		//下拉事件
		onReachBottom() {
			console.log(12313)
			uni.showToast({
				title: '目前暂无商品',
				icon: "loading",
				duration: 1000
			});
			// uni.stopPullDownRefresh();
		},
		onShow: function() {
			// https://bird.ioliu.cn/v1?url= 第三方接口代理跨域
			// uni.request({
			// 	url: 'http://www.pa+nchaotian.com:1023/api/product/type_list',
			// 	// method: 'POST',
			// 	data: {
			// 		"level": "3",
			// 		"parent_cid": "1436"
			// 	},
			// 	success: (res) => {
			// 		console.log(res);
			// 	}
			// });
			// uni.request({
			// 	url: `http://www.panchaotian.com:1026/api/product/api/list`,
			// 	// method: 'POST',
			// 	// data: {
			// 	// 	"level": "2",
			// 	// 	"parent_cid": "22"
			// 	// },
			// 	success: function(res) {
			// 		console.log(res)
			// 	}
			// })
			// console.log("请求数据")
		},
		// mounted() {
		// 	console.log(123123)
		// },
		methods: {
			// 首页轮播
			topswiper(){
				this.$request("coupon/smshomeadv/list","get").then(res=>{
					console.log(res,666666)
					this.swiperimg=res.page.list
					// console.log(res)
				})
			},
			// 五个列表数据
			onfivelist(){
				this.$request("product/api/type_list", {
				"level": "3",
				"parent_cid":"1436"
				},"post").then(res => {
					console.log(res,11111111)
					// console.log(res.spuResps.)
					if(res.code==0){
						this.fivelist = res.list.slice(0,5)
						this.fivelist.forEach(item => {
							console.log(item)
							let a = item.name.slice(0, 4)
							item.name = a
						})
					}else{
						uni.showToast({
							title: '数据异常',
							icon: "loading",
							duration: 1000
						});
					}
				
				})
			},
			shoplist(id){
				uni.navigateTo({
					url: `/pages/shangpinliebiao/shangpinliebiao?id=${id}`
					
				});
				
				console.log(id)
			},
			tobar(e) {
				console.log(66666)
			},
			// 猜你喜欢
			youlick(){
				uni.showToast({
					title: '正在努力加载',
					icon: "loading",
					duration: 1000
				});
				this.$request("product/api/list", {}).then(res => {
					console.log(res)
				    this.lickshop = res.spuResps
				})
				
			}
		},
		computed: {
			...mapState(['avatarUrl', 'login', 'userName'])
		}

	}
</script>

<style>
	@import url("../../../common/css/style/home.css");
</style>
