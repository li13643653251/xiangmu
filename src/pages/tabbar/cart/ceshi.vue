<template>
	<view class="ceshibox">
		<!-- 地址 -->
		<navigator class="address-section" v-if="address" url="/pages/shouhuo/xuanze">
			<view class="order-content">
				<text class="mix-icon icon-dizhi1"></text>
				<view class="cen">
					<view class="top">
						<text class="name">{{address[0].name}}</text>
						<text class="mobile">{{address[0].phone}}</text>
					</view>
					<text class="address">{{address[0].province}} {{address[0].city}}{{address[0].region}} {{address[0].detailAddress}}</text>
				</view>
				<text class="mix-icon icon-you"></text>
			</view>
			<img style="height: 3px;" src="../../../static/1.png" alt="">
		</navigator>
		<view class="allorder">
			<!-- <scroll-view scroll-y="true" class="scroll-Y"> -->
				<view class="listitem">
					<view class="item-list" v-for="(item,index) in itemlist.items" :key="index">
						<view class="itemimg">
							<img style="width: 100%; height: 75px;" :src="item.image" alt="">
						</view>
						<view class="itemname size14">
							<text class="size12 shoptitle" >{{item.title}}</text>
							<text class="itemname-one" style="height: 15px; line-height: 15px;">
								{{item.skuAttr}}
							</text>
							<text class="size12" style=" color: red; height: 30px; line-height: 30px; position: absolute;  bottom:-5px;  ">￥<text class="size18" style="color: red;">{{item.price}}</text><text style="margin:0 5px;">x</text>{{item.count}}</text>
						 <text></text>
						</view>

					</view>
					<view class="item-bottom">
						<p>配送：</p>
						<p class="pick">￥免运费</p>
					</view>
					<view class="item-bottom">
						<p>退货无忧：</p>
						<p class="pick">商家赠送</p>
					</view>
					<view class="item-bottom">
						<p>留言：</p>
						<input class="size14" style="z-index: 1;" type="text" placeholder="建议留言前与商家沟通">
					</view>
				</view>
				<view class="listitem">
					<view class="item-bottom">
						<p>商品金额：</p>
						<p class="pick">￥{{shopmoney}}</p>
					</view>
					<view class="item-bottom">
						<p>商品数量：</p>
						<p class="pick">x{{shopcount}}</p>
					</view>
					<view class="item-bottom">
						<p>运费：</p>
						<p class="pick">￥0.00</p>
					</view>
					<view class="item-bottom">
						<p>优惠卷：</p>
						<p class="pick"> <span class="huise">暂无></span></p>
					</view>
				</view>
				<view class="listitem">
					<view class="item-bottom">
						<p>发票：</p>
						<p class="pick">目前暂无<span class="huise">></span></p>
					</view>
					<!-- <view class="item-bottom">
						<p>支付方式：</p>
						<p class="pick">微信支付<span class="huise">></span></p>
					</view> -->

				</view>
				<view style="height: 100px; width: 100%;"></view>
			<!-- </scroll-view> -->
		</view>

		<view class="ceshibuttom">
			<view class="allmoney">
				￥<span style="color: red; font-size: 20px;">{{shopmoney}}</span>
			</view>
			<view class="quedingzhifu" @tap="gomoney()">
				提交订单
			</view>

		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 地址
				address: null,
				// 规格
				skuAttr: null,
				// 商品金额
				shopmoney: null,
				// 全部总价
				allmoney: null,
				// 商品数量
				shopcount: null,
				// 数据信息
				itemlist: null,
				seaddress:null,
				user:null
			}
		},
		onLoad(option) {
			// if(option.data){
			// 	let data=option.data.replace(/""/g, "");
			// 	this.address=[]
			// 	this.address.push(JSON.parse(data))
			// }
				this.user = uni.getStorageSync("user")
	             console.log(	this.address)
			uni.showLoading({
				title: '加载中'
			});
			this.getlist()
			// uni.request({
			// 	url:"www.panchaotian.com:1037/toTrade",
			// 	type:"get",
			// 	success:function(res){
			// 		console.log(res)
			// 	}
			// })

			//商品数据
			//let data = JSON.parse(option.data);
			//console.log(data);
		},
		onShow(){
			let a = uni.getStorageSync("storage_key")
			if(a){
				a=a.replace(/""/g, "");
				a=JSON.parse(a)
				this.address=[]
				this.address.push(a)
				console.log(this.address)
			}
			 console.log(this.seaddress)

		},
		methods: {
			getlist() {
				this.$request("order/toTrade", {
					"weixinToken": uni.getStorageSync("token"),
					"memberId": uni.getStorageSync("user").id
				}, "get").then(res => {
					console.log(res)
					this.itemlist = res.data
					console.log(this.itemlist)
					if (res.data.address.length == 0) {
						uni.showToast({
							title: '请添加地址',
							icon:"loading",
							duration: 3000,
							success:function(){
								uni.navigateTo({
									url: `/pages/shouhuo/address`
								});
							}
						});
						console.log(123123)
					} else {
						if(this.address==null){
							this.address = res.data.address.filter(item => {
								return item.defaultStatus === 1
							})
							console.log(	this.address)
						}
					}
					this.getTotal(this.itemlist.items)
				})
			},
			// 计算总价
			getTotal(list) {
				let count = 0
				let muney = 0
				list.forEach(item => {
					count += item.count
					muney += item.count * item.price
				})
				this.shopcount = count
				this.shopmoney = muney.toFixed(2)
			},
			gomoney() {
				uni.showLoading({
				    title: '正在提交'
				});
				this.$request("order/submitOrder",{
					"addrId":this.address[0].id,
					"payType":2,
					"orderToken":this.itemlist.orderToken,
					"payPrice":this.shopmoney,
					"note":"",
					"weixinToken": uni.getStorageSync("token"),
					"memberId": this.user.id
				},"post").then(res=>{
					console.log(res)

					if(res.msg=="success"){
						uni.navigateTo({
							url: `/pages/tabbar/cart/one`
						});
					}else{
						uni.showToast({
						    title: res.msg,
							icon:"none",
						    duration: 2000
						});
					}
				})
				// uni.requestPayment({
				//     provider: 'wxpay',
				//     timeStamp: String(Date.now()),
				//     nonceStr: 'A1B2C3D4E5',
				//     package: 'prepay_id=wx20180101abcdefg',
				//     signType: 'MD5',
				//     paySign: '',
				//     success: function (res) {
				//         console.log('success:' + JSON.stringify(res));
				//     },
				//     fail: function (err) {
				//         console.log('fail:' + JSON.stringify(err));
				//     }
				// });
			}

		},
		computed: {

		}
	}
</script>

<style scoped="scoped">
	.shoptitle{
		line-height: 1.25;
		height: 30px;
		 text-overflow: -o-ellipsis-lastline;
		  overflow: hidden;
		  text-overflow: ellipsis;
		  display: -webkit-box;
		  -webkit-line-clamp: 2;
		  line-clamp: 2;
		  -webkit-box-orient: vertical;
		 
	}
	.allmoney{
		font-size: 14px;
		line-height: 50px;
		padding-left: 10px;
		color: red;
	}

	.allorder {
		/* margin-top: 20px; */
		padding: 10px;
		/* border-radius: ; */
	}

	.quedingzhifu {
		
		margin-right: 20px;
		
		line-height: 30px;
		
		width: 30%;
		height: 30px;
		background-color: #EE2A2C;
		color: #FFFFFF;
		margin-top: 10px;
		text-align: center;
		border-radius: 10px;
		
	}

	.ceshibuttom {

		display: flex;
		flex-flow: row nowrap;
		justify-content: space-between;
		width: 100%;
		height: 100rpx;
		background-color: #FFFFFF;
		position: fixed;
		bottom: 0;
		z-index: 5;
	}

	.ceshibox {
		width: 100%;
		height: 280%;
		background-color: #F0F0F0;
	}

	.pick {
		/* color: #D4707C; */
		color: #000000;
		font-weight: 540;
		font-family: sans-serif;
	}

	.item-bottom {
		/* border-bottom: 1px solid #AEAEAE; */
		width: 100%;
		height: 100rpx;
		line-height: 60rpx;
         font-size: 12px;
		/* line-height: 100rpx; */
		background-color: #FFFFFF;
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-between;
		background-color: white;
		padding: 10px;
		border-radius: 10px;
	}

	.itemname-one {
         font-size: 11px;
		/* height: 100%; */
		/* background-color: #F8F8F8; */
		/* display: flex; */
		color: #AEAEAE;
	}

	.itemmoney {
		text-align: center;
		width: 20%;
		height: 100%;
	}

	.itemname {
		position:relative  ;
		flex-direction: column;
		display: flex;
		width: 80%;
		height: 75px;
		padding-left: 10px;

		text-overflow: -o-ellipsis-lastline;
		overflow: hidden;
		text-overflow: ellipsis;

		line-height: 1.5;
	}

	.listitem {
		margin-top: 10px;
		background-color: #FFFFFF;
		height: 100%;
		border-radius: 10px;
	}

	.itemimg {
		width: 25%;
		height: 100%;
	}

	.item-list {
		padding: 10px;
		display: flex;
		padding-top: 20px;
		/* margin-top: 10px; */
		/* height: 190rpx; */
		/* border-bottom: 1px solid #AEAEAE; */
	}

	.listtop {
		display: flex;
		width: 100%;
		height: 100rpx;
		line-height: 100rpx;
	}

	.scroll-Y {
		height: 1200rpx;
		/* height: 100%; */

	}

	.address-section {

		height: 190rpx;
		background: #fff;
		position: relative;
	}

	.order-content {
		height: 180rpx;
		display: flex;
		align-items: center;
	}

	.icon-dizhi1 {

		width: 45px;
		color: #888;
		font-size: 22px;
	}

	.cen {
		display: flex;
		flex-direction: column;
		flex: 1;
		font-size: 28upx;
	}

	.name {
		font-size: 34upx;
		margin-right: 24upx;
	}

	.address {
		margin-top: 16upx;
		margin-right: 20upx;

	}

	.icon-you {
		font-size: 32upx;

		margin-right: 30upx;
	}
</style>
