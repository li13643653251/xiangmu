<template>
	<view class="page">
		<van-tabs swipeable animated :active="active" duration="0.7" @change="onChange">
			<van-tab title="全部">
				<!-- <view class="geduan">
				</view> -->
				<view class="shop size12" v-if="allorder" v-for="(item,index) in allorder" :key="index">
					<view class="shoptitle">
						<view class="size14">
							{{item.modifyTime}}
						</view>
						<view class="size14 red">
							<text>{{ item.status == '0'?'待付款':''}}</text>
							<text>{{ item.status == '1'?'已付款':''}}</text>
							<text>{{ item.status == '2'?'已发货':''}}</text>
							<text>{{ item.status == '3'?'待评论':''}}</text>
							<text>{{ item.status == '4'?'已退款':''}}</text>
							<text>{{ item.status == '5'?'已完成':''}}</text>
							<text>{{ item.status == '6'?'已取消':''}}</text>
							<!-- <span>|</span> -->
							<text class="mix-icon icon-lajitong" style="margin-left: 10px;" @tap="orderdelect(item.id,index,``)"></text>
						</view>
					</view>
					<view class="shopitem" v-for="(it,i) in item.orderItemEntities" :key="i">
						<view class="shopitemimg">
							<image :src="it.skuPic"></image>
						</view>
						<view class="shopname">
							<view style="margin-top: 20rpx; margin-bottom: 20rpx;">{{it.spuName}}</view>
							<view class="huise">{{it.skuAttrsVals}}</view>
						</view>
						<view class="shopmoney">
							<view style="margin-top: 20rpx; margin-bottom: 20rpx;">￥{{it.skuPrice}}</view>
							<view class="huise">x{{it.skuQuantity}}</view>
						</view>
					</view>
					<view class="allmoney size14">
						<view class="allmoneytop">
							<view style="float: right; line-height: 50rpx;">
								共计<span>{{item.count}}</span>件 应付金额：<span class="red">￥{{item.totalAmount}}</span>
							</view>
						</view>
						<view class="allmoneybuttom">
							<view class="alldelect">
								<!-- 删除 -->
							</view>
							<!-- 待付款 -->
							<view class="orderstate" v-if="item.status==0">
								<view class="deleorder">
									取消订单
								</view>
								<view class="gomoney">
									去支付
								</view>
							</view>
							<!-- 已付款 -->
							<view class="orderstate" v-if="item.status==1">
								<view class="deleorder">
									申请退款
								</view>
								<view class="deleorder">
									再次拼单
								</view>
								<view class="gomoney">
									催发货
								</view>
							</view>
							<!-- 已发货 -->
							<view class="orderstate" v-if="item.status==2">
								<view class="deleorder">
									申请退款
								</view>
								<view class="deleorder">
									查看物流
								</view>
								<view class="gomoney">
									确认收货
								</view>
							</view>
							<!-- 待评论 -->
							<view class="orderstate" v-if="item.status==3">
								<view class="deleorder">
									申请退款
								</view>
								<view class="deleorder">
									再次下单
								</view>
								<view class="gomoney">
									立即评论
								</view>
							</view>
							<!-- 已退款 -->
							<view class="orderstate" v-if="item.status==4">
								<view class="gomoney">
									再次下单
								</view>
							</view>
							<!-- 已完成 -->
							<view class="orderstate" v-if="item.status==5">
								<view class="gomoney">
									再次下单
								</view>
							</view>
							<!-- 已取消 -->
							<view class="orderstate" v-if="item.status==6">
								<view class="deleorder">
									删除订单
								</view>
								<view class="deleorder">
									再次下单
								</view>
							</view>
						</view>
					</view>
				</view>
				<view class="noshop" v-else>
					<view class="mixbox">
						<view class="mix-icon icon-gouwuche"></view>
						<text class="huise">空空如也</text>

					</view>

				</view>
				<lick :titletext="2" :lickshop="lickshop"></lick>
			</van-tab>
			<van-tab title="待付款">
				<view>
					<view class="noshop" v-if="allkey[0]">
						<view class="mixbox">
							<view class="mix-icon icon-gouwuche"></view>
							<text class="huise">空空如也</text>
						</view>
					</view>
					<view class="shop size12" v-else v-for="(item,index) in fukuan" :key="index">
						<view class="shoptitle">
							<view class="size14">
								{{item.modifyTime}}
							</view>
							<view class="size14 red">
								<text>待付款</text>
								<text class="mix-icon icon-lajitong" style="margin-left: 10px;" @tap="orderdelect(item.id,index,'fukuan')"></text>
							</view>
						</view>
						<view class="shopitem" v-for="(it,i) in item.orderItemEntities" :key="i">
							<view class="shopitemimg">
								<image :src="it.skuPic"></image>
							</view>
							<view class="shopname">
								<view style="margin-top: 20rpx; margin-bottom: 20rpx;">{{it.spuName}}</view>
								<view class="huise">{{it.skuAttrsVals}}</view>
							</view>
							<view class="shopmoney">
								<view style="margin-top: 20rpx; margin-bottom: 20rpx;">￥{{it.skuPrice}}</view>
								<view class="huise">x{{it.skuQuantity}}</view>
							</view>
						</view>
						<view class="allmoney size14">
							<view class="allmoneytop">
								<view style="float: right; line-height: 50rpx;">
									共计<span>{{item.count}}</span>件 应付金额：<span class="red">￥{{item.totalAmount}}</span>
								</view>
							</view>
							<view class="allmoneybuttom">
								<view class="alldelect">
									<!-- 删除 -->
								</view>
								<view class="orderstate">
									<view class="deleorder">
										取消订单
									</view>
									<view class="gomoney">
										去支付
									</view>
								</view>

							</view>
						</view>
					</view>
					<!-- 		<view class="noshop" v-else>
						<view class="mixbox">
							<view class="mix-icon icon-gouwuche"></view>
							<text class="huise">空空如也</text>

						</view>

					</view> -->
				</view>

				<lick :titletext="2" :lickshop="lickshop"></lick>
			</van-tab>
			<van-tab title="待发货">
				<view>
					<view class="noshop" v-if="allkey[1]">
						<view class="mixbox">
							<view class="mix-icon icon-gouwuche"></view>
							<text class="huise">空空如也</text>
						</view>
					</view>
					<view class="shop size12" v-else v-for="(item,index) in fahuo" :key="index">
						<view class="shoptitle">
							<view class="size14">
								{{item.modifyTime}}
							</view>
							<view class="size14 red">
								<text>待发货</text>
								<text class="mix-icon icon-lajitong" style="margin-left: 10px;" @tap="orderdelect(item.id,index,`fahuo`)"></text>
							</view>
						</view>
						<view class="shopitem" v-for="(it,i) in item.orderItemEntities" :key="i">
							<view class="shopitemimg">
								<image :src="it.skuPic"></image>
							</view>
							<view class="shopname">
								<view style="margin-top: 20rpx; margin-bottom: 20rpx;">{{it.spuName}}</view>
								<view class="huise">{{it.skuAttrsVals}}</view>
							</view>
							<view class="shopmoney">
								<view style="margin-top: 20rpx; margin-bottom: 20rpx;">￥{{it.skuPrice}}</view>
								<view class="huise">x{{it.skuQuantity}}</view>
							</view>
						</view>
						<view class="allmoney size14">
							<view class="allmoneytop">
								<view style="float: right; line-height: 50rpx;">
									共计<span>{{item.count}}</span>件 应付金额：<span class="red">￥{{item.totalAmount}}</span>
								</view>
							</view>
							<view class="allmoneybuttom">
								<view class="alldelect">
									<!-- 删除 -->
								</view>
								<!-- 已付款 -->
								<view class="orderstate">
									<view class="deleorder">
										申请退款
									</view>
									<view class="deleorder">
										再次拼单
									</view>
									<view class="gomoney">
										催发货
									</view>
								</view>

							</view>
						</view>
					</view>
					<!-- 	<view class="noshop" v-else>
						<view class="mixbox">
							<view class="mix-icon icon-gouwuche"></view>
							<text class="huise">空空如也</text>
						</view>
					</view> -->
				</view>

				<lick :titletext="2" :lickshop="lickshop"></lick>
			</van-tab>
			<van-tab title="待收货">
				<view>
					<view class="noshop" v-if="allkey[2]">
						<view class="mixbox">
							<view class="mix-icon icon-gouwuche"></view>
							<text class="huise">空空如也</text>
						</view>
					</view>
					<view class="shop size12" v-else v-for="(item,index) in shouhuo" :key="index">
						<view class="shoptitle">
							<view class="size14">
								{{item.modifyTime}}
							</view>
							<view class="size14 red">
								<text>待收货</text>
								<text class="mix-icon icon-lajitong" style="margin-left: 10px;" @tap="orderdelect(item.id,index,`shouhuo`)"></text>
							</view>
						</view>
						<view class="shopitem" v-for="(it,i) in item.orderItemEntities" :key="i">
							<view class="shopitemimg">
								<image :src="it.skuPic"></image>
							</view>
							<view class="shopname">
								<view style="margin-top: 20rpx; margin-bottom: 20rpx;">{{it.spuName}}</view>
								<view class="huise">{{it.skuAttrsVals}}</view>
							</view>
							<view class="shopmoney">
								<view style="margin-top: 20rpx; margin-bottom: 20rpx;">￥{{it.skuPrice}}</view>
								<view class="huise">x{{it.skuQuantity}}</view>
							</view>
						</view>
						<view class="allmoney size14">
							<view class="allmoneytop">
								<view style="float: right; line-height: 50rpx;">
									共计<span>{{item.count}}</span>件 应付金额：<span class="red">￥{{item.totalAmount}}</span>
								</view>
							</view>
							<view class="allmoneybuttom">
								<view class="alldelect">
									<!-- 删除 -->
								</view>

								<view class="orderstate">
									<view class="deleorder">
										申请退款
									</view>
									<view class="deleorder" @tap="gowuliu">
										查看物流
									</view>
									<view class="gomoney">
										确认收货
									</view>
								</view>
							</view>
						</view>
					</view>
					<!-- 	<view class="noshop" v-else>
						<view class="mixbox">
							<view class="mix-icon icon-gouwuche"></view>
							<text class="huise">空空如也</text>

						</view>

					</view> -->
				</view>

				<lick :titletext="2" :lickshop="lickshop"></lick>
			</van-tab>
			<van-tab title="待评论">
				<view>
					<view class="noshop" v-if="allkey[3]">
						<view class="mixbox">
							<view class="mix-icon icon-gouwuche"></view>
							<text class="huise">空空如也</text>
						</view>
					</view>
					<view class="shop size12" v-else v-for="(item,index) in pinglun" :key="index">
						<view class="shoptitle">
							<view class="size14">
								{{item.modifyTime}}
							</view>
							<view class="size14 red">
								<text>待评论</text>
								<text class="mix-icon icon-lajitong" style="margin-left: 10px;" @tap="orderdelect(item.id,index,`pinglun`)"></text>
							</view>
						</view>
						<view class="shopitem" v-for="(it,i) in item.orderItemEntities" :key="i">
							<view class="shopitemimg">
								<image :src="it.skuPic"></image>
							</view>
							<view class="shopname">
								<view style="margin-top: 20rpx; margin-bottom: 20rpx;">{{it.spuName}}</view>
								<view class="huise">{{it.skuAttrsVals}}</view>
							</view>
							<view class="shopmoney">
								<view style="margin-top: 20rpx; margin-bottom: 20rpx;">￥{{it.skuPrice}}</view>
								<view class="huise">x{{it.skuQuantity}}</view>
							</view>
						</view>
						<view class="allmoney size14">
							<view class="allmoneytop">
								<view style="float: right; line-height: 50rpx;">
									共计<span>{{item.count}}</span>件 应付金额：<span class="red">￥{{item.totalAmount}}</span>
								</view>
							</view>
							<view class="allmoneybuttom">
								<view class="alldelect">
									<!-- 删除 -->
								</view>

								<view class="orderstate">
									<!-- <view class="deleorder">
										申请退款
									</view> -->
									<view class="deleorder">
										再次下单
									</view>
									<view class="gomoney">
										立即评论
									</view>
								</view>
							</view>
						</view>
					</view>

					<lick :titletext="2" :lickshop="lickshop"></lick>
				</view>


			</van-tab>
			<van-tab title="已退款">
				<view>
					<view class="noshop" v-if="allkey[4]">
						<view class="mixbox">
							<view class="mix-icon icon-gouwuche"></view>
							<text class="huise">空空如也</text>
						</view>
					</view>
					<view class="shop size12" v-else v-for="(item,index) in tuikuan" :key="index">
						<view class="shoptitle">
							<view class="size14">
								{{item.modifyTime}}
							</view>
							<view class="size14 red">
								<text>已退款</text>
								<text class="mix-icon icon-lajitong" style="margin-left: 10px;" @tap="orderdelect(item.id,index,`tuikuan`)"></text>
							</view>
						</view>
						<view class="shopitem" v-for="(it,i) in item.orderItemEntities" :key="i">
							<view class="shopitemimg">
								<image :src="it.skuPic"></image>
							</view>
							<view class="shopname">
								<view style="margin-top: 20rpx; margin-bottom: 20rpx;">{{it.spuName}}</view>
								<view class="huise">{{it.skuAttrsVals}}</view>
							</view>
							<view class="shopmoney">
								<view style="margin-top: 20rpx; margin-bottom: 20rpx;">￥{{it.skuPrice}}</view>
								<view class="huise">x{{it.skuQuantity}}</view>
							</view>
						</view>
						<view class="allmoney size14">
							<view class="allmoneytop">
								<view style="float: right; line-height: 50rpx;">
									共计<span>{{item.count}}</span>件 应付金额：<span class="red">￥{{item.totalAmount}}</span>
								</view>
							</view>
							<view class="allmoneybuttom">
								<view class="alldelect">
									<!-- 删除 -->
								</view>

								<view class="orderstate">
									<view class="gomoney">
										再次下单
									</view>
								</view>
							</view>
						</view>
					</view>
					<!-- 	<view class="noshop" v-else>
						<view class="mixbox">
							<view class="mix-icon icon-gouwuche"></view>
							<text class="huise">空空如也</text>

						</view>

					</view> -->
				</view>

				<lick :titletext="2" :lickshop="lickshop"></lick>
			</van-tab>
			<van-tab title="已完成">
				<view>
					<view class="noshop" v-if="allkey[5]">
						<view class="mixbox">
							<view class="mix-icon icon-gouwuche"></view>
							<text class="huise">空空如也</text>
						</view>
					</view>
					<view class="shop size12" v-else v-for="(item,index) in wancheng" :key="index">
						<view class="shoptitle">
							<view class="size14">
								{{item.modifyTime}}
							</view>
							<view class="size14 red">
								<text>已完成</text>
								<text class="mix-icon icon-lajitong" style="margin-left: 10px;" @tap="orderdelect(item.id,index,`wancheng`)"></text>
							</view>
						</view>
						<view class="shopitem" v-for="(it,i) in item.orderItemEntities" :key="i">
							<view class="shopitemimg">
								<image :src="it.skuPic"></image>
							</view>
							<view class="shopname">
								<view style="margin-top: 20rpx; margin-bottom: 20rpx;">{{it.spuName}}</view>
								<view class="huise">{{it.skuAttrsVals}}</view>
							</view>
							<view class="shopmoney">
								<view style="margin-top: 20rpx; margin-bottom: 20rpx;">￥{{it.skuPrice}}</view>
								<view class="huise">x{{it.skuQuantity}}</view>
							</view>
						</view>
						<view class="allmoney size14">
							<view class="allmoneytop">
								<view style="float: right; line-height: 50rpx;">
									共计<span>{{item.count}}</span>件 应付金额：<span class="red">￥{{item.totalAmount}}</span>
								</view>
							</view>
							<view class="allmoneybuttom">
								<view class="alldelect">
									<!-- 删除 -->
								</view>

								<view class="orderstate">

									<view class="gomoney">
										再次下单
									</view>

								</view>
							</view>
						</view>
					</view>
					<!-- 	<view class="noshop" v-else>
						<view class="mixbox">
							<view class="mix-icon icon-gouwuche"></view>
							<text class="huise">空空如也</text>
						</view>

					</view> -->
				</view>
				<lick :titletext="2" :lickshop="lickshop"></lick>
				<!-- <lick :lickshop="lickshop"></lick> -->
			</van-tab>
		</van-tabs>

	</view>
</template>

<script>
	import lick from "../components/twocainixihuan.vue"
	export default {
		components: {
			lick
		},
		data() {
			return {
				active: 0,
				user: null,
				lickshop: null,
				allorder: null, //全部订单
				localhostdata: null,
				fukuan: null, //付款
				fahuo: null, //发货
				shouhuo: null, //收货
				pinglun: null, //评论
				tuikuan: null, //退款
				wancheng: null, //完成
				allkey: [true, true, true, true, true, true, true]
			};
		},
		onLoad(option) {
			// this.active=option.num
			// console.log(option.num)
			// option.id
			// this.onChange()
		},
		onShow() {
			this.user = uni.getStorageSync("user")
			this.active = this.$store.state.type
			// console.log(this.active - 1)
			// if(this.active==0){
			// }
			let status = this.active - 1
			// if (status == -1) {
			this.$request("order/omsorder/list", {
				"weixinToken": uni.getStorageSync("token"),
				"memberId": this.user.id,
			}, "get").then(res => {
				this.allorder = res.page.list
				// console.log(res, 66666)
			})
			// }

		},
		mounted() {
			this.youlick()
		},
		methods: {
			getlist(num, data) {
				console.log(666)
				this.$request("order/omsorder/list", {
					"weixinToken": uni.getStorageSync("token"),
					"memberId": this.user.id,
					"status": num
				}, "get").then(res => {
					data = res.page.list
				})
			},
			getOutInfo() {

			},
			// 跳转物流
			gowuliu() {
				uni.navigateTo({
					url: `/pages/wuliu/wuliu`
				});
			},
			onChange(e) {
				// console.log(e)
				this.active = e.detail.index
				let a = e.detail.index - 1
				// if(a==-1){
				// 	this.$request("order/omsorder/list", {
				// 		"weixinToken": uni.getStorageSync("token"),
				// 		"memberId": this.user.id,
				// 	}, "get").then(res => {
				// 		this.allorder = res.page.list
				// 	})
				// }
				// console.log(a, 123123)
				if (this.allorder == null) {
					this.$request("order/omsorder/list", {
						"weixinToken": uni.getStorageSync("token"),
						"memberId": this.user.id,
					}, "get").then(res => {
						this.allorder = res.page.list
						console.log(this.allorder)
						switch (a) {
							case 0:
								this.fukuan = this.allorder.filter(function(item) {
									return item.status == 0
								})
								if (this.fukuan[0] == undefined) {
									this.allkey[0] = true
								} else {
									this.allkey[0] = false
								}
								break;
							case 1:
								this.fahuo = this.allorder.filter(function(item) {
									return item.status == 1
								})
								if (this.fahuo[0] == undefined) {
									this.allkey[1] = true
								} else {
									this.allkey[1] = false
								}
								break;
							case 2:
								this.shouhuo = this.allorder.filter(function(item) {
									return item.status == 2
								})
								if (this.shouhuo[0] == undefined) {
									this.allkey[2] = true
								} else {
									this.allkey[2] = false
								}
								break;
							case 3:
								this.pinglun = this.allorder.filter(function(item) {
									return item.status == 3
								})
								if (this.pinglun[0] == undefined) {
									this.allkey[3] = true
								} else {
									this.allkey[3] = false
								}
								console.log(this.allkey)
								break;
							case 4:
								this.tuikuan = this.allorder.filter(function(item) {
									return item.status == 4
								})
								if (this.tuikuan[0] == undefined) {
									this.allkey[4] = true
								} else {
									this.allkey[4] = false
								}
								break;
							case 5:
								this.wancheng = this.allorder.filter(function(item) {
									return item.status == 5
								})
								if (this.wancheng[0] == undefined) {
									this.allkey[5] = true
								} else {
									this.allkey[5] = false
								}
								break;
							default:

								break;
								// console.log(this.pinglun)
						}
						// if (a == 0) {
						// 	this.fukuan = this.allorder.filter(function(item) {
						// 		return item.status == 0
						// 	})
						// }
					})
				} else {
					switch (a) {
						case 0:
							this.fukuan = this.allorder.filter(function(item) {
								return item.status == 0
							})
							if (this.fukuan[0] == undefined) {
								this.allkey[0] = true
							} else {
								this.allkey[0] = false
							}
							break;
						case 1:
							this.fahuo = this.allorder.filter(function(item) {
								return item.status == 1
							})
							if (this.fahuo[0] == undefined) {
								this.allkey[1] = true
							} else {
								this.allkey[1] = false
							}
							break;
						case 2:
							this.shouhuo = this.allorder.filter(function(item) {
								return item.status == 2
							})
							if (this.shouhuo[0] == undefined) {
								this.allkey[2] = true
							} else {
								this.allkey[2] = false
							}
							break;
						case 3:
							this.pinglun = this.allorder.filter(function(item) {
								return item.status == 3
							})
							if (this.pinglun[0] == undefined) {
								this.allkey[3] = true
							} else {
								this.allkey[3] = false
							}
							console.log(this.allkey)
							break;
						case 4:
							this.tuikuan = this.allorder.filter(function(item) {
								return item.status == 4
							})
							if (this.tuikuan[0] == undefined) {
								this.allkey[4] = true
							} else {
								this.allkey[4] = false
							}
							break;
						case 5:
							this.wancheng = this.allorder.filter(function(item) {
								return item.status == 5
							})
							if (this.wancheng[0] == undefined) {
								this.allkey[5] = true
							} else {
								this.allkey[5] = false
							}
							break;
						default:

							break;
							// console.log(this.pinglun)
					}

					console.log(this.pinglun)
				}



			},
			youlick() {
				uni.showToast({
					title: '正在努力加载',
					icon: "loading",
					duration: 1000
				});
				this.$request("product/api/list", {}).then(res => {

					this.lickshop = res.spuResps
				})

			},
			orderdelect(item, index, data) {
				let that = this
				// let a=id
				console.log()
				uni.showModal({
					title: '提示',
					content: '删除该订单',
					success: function(res) {
						if (res.confirm) {
							that.$request(`order/omsorder/delete/${item}`, {}, "post").then(res => {
								console.log(item)
								console.log(res)
								if (res.code == 0) {
									uni.showToast({
										title: '删除成功',
										duration: 1000
									});
									if (data == "") {
										that.allorder.splice(index, 1)
									} else if (data == "fukuan") {
										that.fukuan.splice(index, 1)
									} else if (data == "fahuo") {
										that.fahuo.splice(index, 1)
									} else if (data == "shouhuo") {
										that.shouhuo.splice(index, 1)
									} else if (data == "pinglun") {
										that.pinglun.splice(index, 1)
									} else if (data == "tuikuan") {
										that.tuikuan.splice(index, 1)
									} else if (data == "wancheng") {
										that.tuikuan.splice(index, 1)
									}
									that.$request("order/omsorder/list", {
										"weixinToken": uni.getStorageSync("token"),
										"memberId": that.user.id,
									}, "get").then(res => {
										that.allorder = res.page.list
									})
								}
							})
							console.log('用户点击确定');
						} else if (res.cancel) {

							console.log('用户点击取消');
						}
					}
				});
			}
		}
	};
</script>

<style>
	.mix-icon {

		font-size: 30rpx;
		margin-bottom: 20rpx;
		color: darkgray;
	}

	.mixbox {
		text-align: center;
		margin: 0 auto;
		margin-top: 200rpx;
	}

	.noshop {
		/* position:  absolute; */
		/* top: 50px; */
		width: 100%;
		height: 500rpx;
	}

	.noshop1 {
		position: absolute;
		z-index: -1;
		top: 50px;
		width: 100%;
		height: 500rpx;
	}

	.geduan {
		width: 100%;
		height: 30rpx;
		background-color: #EFEFEF;
		margin-top: 10px;
	}

	.red {
		color: #C7604F;
	}

	page {
		width: 100%;
		height: 100%;
		background-color: #EFEFEF;
	}

	.orderstate {
		font-size: 12px;
		display: flex;
		width: 70%;
		height: 50rpx;
		justify-content: flex-end;
	}

	.orderstate>view {
		/* margin-left:auto; */
		width: 30%;
		height: 50rpx;
		line-height: 50rpx;
		border-radius: 20rpx;
		text-align: center;
		margin-left: 10px;

	}

	.gomoney {


		background-color: #BA2313;
		color: #FFFFFF;
		border: 1px solid #BA2313;


	}

	.deleorder {
		background-color: #FFFFFF;
		border: 1px solid black;
		color: #000000;

	}

	.allmoneybuttom {
		width: 100%;
		height: 40rpx;
		display: flex;
		justify-content: space-between;
	}

	.alldelect {
		line-height: 40rpx;
	}

	.allmoneytop {
		width: 100%;
		height: 50rpx;
		font-size: 12px;
		margin-bottom: 2px;
	}

	.allmoney {
		width: 100%;
		height: 100rpx;
		/* border-bottom: 1px solid darkgrey; */
	}

	.shop {
		padding: 10px;
		background-color: #FFFFFF;
		margin-bottom: 15px;
	}

	.shoptitle {

		width: 100%;
		height: 80rpx;
		border-bottom: 1px solid #EEEEEE;
		line-height: 80rpx;
		display: flex;
		justify-content: space-between;
	}

	.shopitem {
		width: 100%;
		height: 240rpx;
		padding: 10px 0;
		border-bottom: 1px solid #EEEEEE;
	}

	.shopitem {
		width: 100%;
		display: flex;
	}

	.shopitemimg {
		width: 30%;
		height: 240rpx;
	}

	.shopitemimg>image {
		width: 100%;
		height: 80%;
	}

	.shopname {
		width: 50%;
		margin-left: 10px;
		line-height: 1.3;
		font-size: 12px;
		height: 240rpx;
	}

	.shopmoney {
		text-align: center;
		/* float: right; */
		width: 20%;
		height: 240rpx;
	}
</style>
