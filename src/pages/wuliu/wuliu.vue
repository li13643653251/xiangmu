<template>
	<view style="background-color: #F6F7F8; overflow hidden">
		<logistics :wlInfo="welist"></logistics>
		<view class="fenxiang size14">
			<view class="fxtext">
				<p>分享这件商品给好友</p>
				<p class="huise">带好友看看我买过的东西</p>
			</view>
			<!-- <view class="fxdiv" @tap=""> -->
			<button class="fxdiv size12" open-type="share">
				去分享
			</button>
			<!-- </view> -->
		</view>
		<view class="shouyecainixihuan">
			<view class="cainixihuantext size18">猜你喜欢</view>
			<view class="xihuanshangpin">
				<!-- 每个商品 -->
				<view class="lickitem" v-for="(item,index) in lickshop" :key="index">
					<view class="lickitemimg" @click="xiangqing(item.spu_id,item.price)">
						<img style="width: 100%;" :src="item.imgUrl" alt="">
					</view>
					<view>
						<p class="lickshoptext">
							<span>【双十一狂欢季】</span>
							{{item.spuDescription}}
						</p>
						<view class="lickshopmoney">
							<p>
								<span class="nowmoney size16">${{item.price}}</span>
								<span class="oldmoney size12">￥222</span>
							</p>
							<p id="licksales">销量: <span>2</span></p>
							<view style="clear: both;"></view>
						</view>
						<view class="lickshopbottom">
							<view class="homefan">
								<p class="size12" style="color: #FFFFFF;">尊v自购返</p>
								<p class="size12">￥5.55</p>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	import logistics from './xinyu-logistics.vue'
	export default {
		data() {
			return {
				lickshop: null,
				wlInfo: {
					delivery_status: 1, //快递状态 1已签收 2配送中
					post_name: '韵达快递', //快递名称
					logo: 'https://cdn.kuaidi100.com/images/all/56/yunda.png', //快递logo
					exp_phone: '95546', //快递电话
					post_no: '4304678557725', //快递单号
					addr: '北京市丰台区扑满山写字楼3号楼1205', //收货地址
					//物流信息
					list: [{
							"time": "2020-04-12 13:00:57",
							"timeArr": ['2020-04-12', '13:00:57'],
							"context": "江西南昌青云谱区 快件已被 丰巢智能柜 代签收。",
						},
						{
							"time": "2020-04-12 12:58:53",
							"timeArr": ['2020-04-12', '12:58:53'],
							"context": "江西南昌青云谱区 进行派件扫描；派送业务员：张三；联系电话：88888888888",
						},
						{
							"time": "2020-04-11 15:45:44",
							"timeArr": ['2020-04-11', '15:45:44'],
							"context": "江西南昌分拨中心 从站点发出，本次转运目的地：江西南昌青云谱区",
						},
						{
							"time": "2020-04-11 15:08:45",
							"timeArr": ['2020-04-11', '15:08:45'],
							"context": "江西南昌分拨中心 在分拨中心进行卸车扫描",
						},
						{
							"time": "2020-04-10 17:42:41",
							"timeArr": ['2020-04-10', '17:42:41'],
							"context": "浙江义乌分拨中心 进行装车扫描，发往：江西南昌分拨中心",
						},
						{
							"time": "2020-04-10 17:39:38",
							"timeArr": ['2020-04-10', '17:39:38'],
							"context": "浙江义乌分拨中心 在分拨中心进行称重扫描",
						},
						{
							"time": "2020-04-10 16:02:46",
							"timeArr": ['2020-04-10', '16:02:46'],
							"context": "浙江义乌城西公司 进行下级地点扫描，发往：江西南昌地区包",
						},
						{
							"time": "2020-04-10 15:48:42",
							"timeArr": ['2020-04-10', '15:48:42'],
							"context": "浙江义乌城西公司城西营销部 进行揽件扫描",
						}
					]
				},
				
				welist:{}
			};
		},
		onLoad(e) {
			this.youlick()
			this.shopwuliu("JT5012903395759")
		},
		onShow() {
          
		},
		onShareAppMessage(res) {
			return {
				title: '微信小程序测试分享',
				path: '/pages/wuliu/wuliu'
			}
		},
		methods: {
			shopwuliu(num){
				console.log(num)
				this.$request("thirdparty/kdniao/identify/getOrderTracesByJson?expNo=JT5012903395759",{
				},"post").then(res=>{
					this.welist=res.jsonObject
					console.log(this.welist)
				})
			},
			youlick() {
				this.$request("product/api/list", {}).then(res => {
					this.lickshop = res.spuResps
				})
			},
			xiangqing(num,price) {
				console.log(num,price)
				uni.navigateTo({
					url: `/pages/xiangqingye/xiangqingye?id=${num}&price=${price}`
				});
				console.log(123)
			}
		},
		components: {
			logistics
		}
	};
</script>

<style>
	/* 	.homefan>p{
		flex: 1;
		text-align: center;
		line-height: 40rpx;
	}
	.homefan {
		background-position: 100% 50%;
		justify-content:center; 
		background-image: url(../../../static/home/fanjia.png);
		background-size: 100%;
		background-repeat: no-repeat;
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-between;
		width: 80%;
		height: 40rpx;
		/* border: 1px solid black; */
	/* } */

	.fenxiang {
		background-color: #FFFFFF;
		width: 100%;
		margin: 20rpx;
		height: 100rpx;
		/* display: flex; */
	}

	.fxtext {
		float: left;
		line-height: 50rpx;
		margin-left: 20rpx;


		/* line-height: 100rpx; */
	}

	.fxdiv {
		margin-right: 80rpx;
		margin-top: 25rpx;
		float: right;
		width: 100rpx;
		height: 50rpx;
		line-height: 50rpx;
		color: #FFFFFF;
		background-color: #E12F21;
		text-align: center;
		border-radius: 10rpx;
	}

	#licksales {
		font-size: 12px;
		float: right;
	}

	.nowmoney {
		color: red;

	}

	.oldmoney {
		text-decoration: line-through;
		color: black;
	}

	.lickshopmoney {
		padding-top: 15px;
		/* margin-top: 15px; */
	}

	.lickshopmoney>p {
		float: left;
	}

	.lickshoptext {
		font-size: 14px;
		width: 100%;
		/* height: 30px; */
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.lickitemimg {
		width: 100%;
		height: 150px;
		/* height: 150px; */
		/* height: 0; */
		/* padding-bottom: 100%; */
		/* background-color: #007AFF; */
	}

	.lickitem {
		margin-top: 15px;
		width: 45%;
		height: 100%;

	}

	.xihuanshangpin {
		flex-wrap: wrap;
		margin-top: 20px;
		display: flex;
		height: 100%;
		justify-content: space-around;
	}

	.cainixihuantext {
		text-align: center;
		width: 100%;
	}

	.shouyecainixihuan {
		background-color: #FFFFFF;
		margin-top: 20px;
		width: 100%;
	}
</style>
