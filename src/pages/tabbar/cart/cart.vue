<template>
	<view class="cartbox">
		<view class="carttop"  v-if="alllist!=``">
			<checkbox class="checkbox" style="padding-left: 10px;" :checked="allcheck" :data-check="allcheck" @tap="bindAllChecked"></checkbox>
			<text class="checkNum">全选({{count}})</text>
			<view @click="alkey()" style=" line-height: 50px; float: right; display: inline-block;  padding-right: 20px;">编辑</view>
			<view class="bianji" :style="{height:red+'px'}">
				<view class="allselect" @tap="bindAllChecked()">全选</view>
				<view class="delectallselect" @tap="delectselect()">删除选中</view>
				<view class="alldelect" @tap="delectall()">删除全部</view>
				<view style="clear:both;"></view>
			</view>
			<view style="clear:both;"></view>
		</view>
		<view style="width: 100%; height: 20px;">
		</view>
		<view class="cartcet">
			<scroll-view scroll-y class="scroll-Y" v-if="alllist!=``">
				<view class="good-item" v-for="(item,index) in alllist" :key="index">
					<view class="good-select">
						<checkbox :checked="item.check" @tap="bindChecked" :data-index="index" :data-check="item.check">
						</checkbox>
						<img :src="item.image" class="good-pic" alt="">
					</view>
					<view class="good-dis">
						<view class="good-dis-item">
							<text class="good-name">
								{{item.title}}
							</text>
							<img src="../../../static/icon_delete.png" class="good-remove" @click="deleteshop(index)" alt="">
						</view>
						<view class="good-dis-item">
							<view class="guige " style="color: #AEAEAE;"><text class="guigetext">{{item.skuAttr[0]}} {{item.skuAttr[1]}}</text></view>
							<text>￥{{item.price}}</text>
							<view class="num-contor">
								<text class="sub" @click="shopnum('sub',item)">-</text>
								<text class="num">{{item.count}}</text>
								<text class="add" @click="shopnum('add',item)">+</text>
							</view>
							<!-- <text>规格规格</text> -->
						</view>
					</view>
				</view>
			</scroll-view>
			<view class="mask" v-else>
				<view style="margin: 0 auto; width: 50%; text-align: center; margin-top: 15px;">
					<img style="width: 50px; height: 50px;margin: 0 auto; "  src="../../../static/tabbar/tab-cart.png" alt="">
					<!-- <view class="masktitle">目前暂无</view> -->
					<text style="margin-top: 10px;">购物车空空如也</text>
				</view>
				
			</view>
		</view>

		<view class="bottom-bar" v-if="alllist!=``">
			<view>
			
				<text style="font-size: 10px;">总金额:￥<text style="font-size: 13px;">{{money}}</text></text>
			</view>
			<view>
				<button @tap="gojiesuan()">去结算</button>
			</view>
		</view>
		<!-- 猜你喜欢 -->
		<lick :titletext="2"></lick>
	</view>
</template>
<script>
	import util from "../../../common/util/util.js"
	import lick from "../components/cainixihuan.vue"
	export default {
		components:{
			lick
		},
		data() {
			return {
				alllist: null,
				// 全选
				allcheck: null,
				// 选中的数量
				count: 0,
				// 选中的价格
				money: 0,
				user: null,
				allkey: false,
				red: 0,
				// 猜你喜欢
				lickshop:null,
				num:0
				

			}
		},
		onShow: function() {

			this.user = uni.getStorageSync("user")
			// 判断是否登陆
			if (!util.onlogin()) {
				util.onlogin(true)
				this.$request("cart/currentUserCartall", {
					"weixinToken": uni.getStorageSync("token"),
					"memberId": this.user.id
				}, "get").then(res => {
					console.log(res)
					if (res.code == 401) {
						uni.showToast({
							title: '无效的token,联系开发人员',
							mask: true,
							icon: 'none'
						})
						return
					}
					this.alllist = res
					console.log(this.alllist)
					if(this.alllist==""){
						
					}else{
						this.getTotal(this.alllist)
						this.allcheck = this.isCheckAll(this.alllist)
					}
					
					// console.log(this.alllist)
				})
				// if(this.alllist==null){
					
				// }else{
				// 	console.log(this.alllist,123)
				// 	this.youlick()
				// }
			}
			uni.removeStorage({
				key: 'storage_key',
				success: function(res) {
					console.log('success');
				}
			});

		},
		onLoad: function() {
		
               
		},
		methods: {
		
			// 计算总价
			getTotal(list) {
				let count = 0
				let muney = 0
				list.forEach(item => {
					if (item.check) {
						count += item.count
						muney += item.count * item.price
					}
				})
				this.count = count
				this.money = muney.toFixed(2)
			},
			// 购物车加减操作
			shopnum(type, item) {
				let id = item.skuId
				if (type == "add") {
					item.count++
				} else if (type == "sub") {
					if (item.count <= 1) {
						return item.count = 1
					} else {
						item.count--
					}

				}
				this.shopnumajax(id, item.count)
				this.getTotal(this.alllist)
			},
			// 加减请求封装
			shopnumajax(id, num) {
				this.$request("cart/countItem", {
					"weixinToken": uni.getStorageSync("token"),
					"memberId": this.user.id,
					"skuId": id,
					"num": num
				}, "get").then(res => {
					console.log(res)
				})
			},
			// 删除购物车
			deleteshop(index) {
				let id = this.alllist[index].skuId
				console.log(id)
				console.log(this.alllist[index].skuId)
				this.$request("cart/deleteItem", {
					"weixinToken": uni.getStorageSync("token"),
					"memberId": this.user.id,
					"skuId": id
				}, "get").then(res => {
					uni.showToast({
						title: '删除商品成功',
						mask: true,
						icon: 'none'
					})
					console.log(res)
					this.alllist.splice(index, 1)
					this.getTotal(this.alllist)
				})
			},
			// 单选全选请求
			checkall(item) {
				let a
				if (item.check) {
					a = 1
				} else {
					a = 0
				}
				console.log(item.check)
				this.$request('cart/checkItem', {
					"weixinToken": uni.getStorageSync("token"),
					"memberId": this.user.id,
					"check": a,
					"skuId": item.skuId
				}, "get").then(res => {
					console.log(res)
				})
				console.log(this.alllist)
			},
			//全选按钮
			bindAllChecked(e) {
				let  flag
				if(e){
					flag = !e.currentTarget.dataset.check
				}else{
					flag=!this.allcheck
				}
				let a
				 if(flag){
					 a=1
				 }else{
					 a=0
				 }
				 this.$request("cart/checkAll",{
					 "weixinToken": uni.getStorageSync("token"),
					 "memberId": this.user.id,
					 "check":a
				 },"get").then(res=>{
					 console.log(res)
					 if(res==""){
						 uni.showToast({
						 	title: '修改成功',
						 	mask: true,
						 	icon: 'none'
						 })
					 }else{
						 return 
					 }
				 })
				this.alllist.forEach(item => {
					item.check = flag
				})
				this.allcheck = flag
				this.getTotal(this.alllist)

			},
			//单选按钮
			bindChecked(e) {
				let {
					index,
					check
				} = e.currentTarget.dataset
				this.alllist[index].check = !check
				this.allcheck = this.isCheckAll(this.alllist)
				this.getTotal(this.alllist)
				this.checkall(this.alllist[index])
				// console.log(this.alllist[index])
			},

			//判断是否全选
			isCheckAll(list) {
				let flag
				if (!list.length) {
					flag = false
				} else {
					flag = list.every(item => item.check)
				}
				return flag
			},
			gojiesuan() {
				let go = 0
				this.alllist.forEach(item =>  {
					if (item.check) {
						go++
					}
				})
				if (go != 0) {
					uni.navigateTo({
						url: `/pages/tabbar/cart/ceshi`
					});
				} else {
					uni.showToast({
						title: '请先选中商品',
						mask: true,
						icon: 'none'
					})
				}

			},
			alkey() {
				this.allkey = !this.allkey
				if (this.allkey) {
					this.red = 50
				} else {
					this.red = 0
				}

				console.log(this.allkey)
			},
			// 删除全部
			delectall() {
				this.$request("cart/deleteAll", {
					"weixinToken": uni.getStorageSync("token"),
					"memberId": this.user.id,
				}, "get").then(res => {
					if(res.delete){
						this.alllist=""
					}
					console.log(res)
				})
			},
			// 删除选中
			delectselect() {
				// let arr = []
				// this.alllist.forEach(item => {
				// 	if (item.check) {
				// 		arr.push(item.skuId)

				// 	}
				// })
				this.$request("cart/deleteCheckItem", {
					"weixinToken": uni.getStorageSync("token"),
					"memberId": this.user.id
				}, "get").then(res => {
					if (res.delete) {
						this.alllist.forEach(item => {
							if (item.check) {
								this.alllist.splice(item, 1)
                                uni.showToast({
                                	title: '删除成功',
                                	mask: true,
                                	icon: 'none'
                                })
							}
						})


					}
				})
			},
			// 去详情
			// xiangqing(num,price) {
			// 	console.log(num,price)
			// 	uni.navigateTo({
			// 		url: `/pages/xiangqingye/xiangqingye?id=${num}&price=${price}`
			// 	});
			// 	console.log(123)
			// }

		}

	}
</script>

<style scoped>
	.qingchufudong {
		position: absolute;
		left: 40%;
		top:-100%;
		width: 80px;
		height: 6px;
		border-radius: 5px;
		background-color: #FA0300;
	}
	.cartcet{
		width: 100%;
		/* height: 500px; */
	}
	.countitem {
	justify-content: center;
	display: flex;
	text-align: center;
	width: 25%;
	height: 100%;
	line-height: 28px;
	color: #C86289;
	font-size: 12px;
}

.lunbocount {
	width: 100%;
	height: 28px;
	border-bottom: 3px solid #F1F1F1;
	display: flex;
	text-overflow: ellipsis;
}

.homefan>p {
	flex: 1;
	text-align: center;
	line-height: 40rpx;
}

.homefan {
	background-position: 100% 50%;
	justify-content: center;
	background-image: url(../../../static/home/fanjia.png);
	background-size: 100%;
	background-repeat: no-repeat;
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-between;
	width: 80%;
	height: 40rpx;
}

.lickshopbottom {
	margin-top: 20rpx;
}

#licksales {
	
	font-size: 9px;
	line-height: 16px;
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
	width: 90%;
	padding-top: 15px;
	/* margin-top: 15px; */
}

.lickshopmoney>p {
	float: left;
}

.lickshoptext {
	/* letter-spacing: 1rpx; */
	font-size: 12px;
	width: 90%;
	/* height: 24px; */
	line-height: 1.5;
	height: 36px;
	text-overflow: -o-ellipsis-lastline;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	line-clamp: 2;
	-webkit-box-orient: vertical;
}

.lickitemimg {
	width: 100%;
	height: 160px;
}

.lickitem {
	margin-top: 20px;
	width: 46%;
	margin-left: 3%;
	float: left;
	/* background: #F5F5F5; */
	/* margin-left: 4%; */
	height: 100%;

}

.xihuanshangpin {
	flex-wrap: wrap;
	margin-top: 20px;
	/* display: flex; */
	height: 100%;
	/* justify-content: space-around; */
}

.cainixihuantext {
	text-align: center;
	width: 100%;
}

.shouyecainixihuan {
	position: relative;
	margin-top: 20px;
	width: 100%;
	background-color: #F5F5F5;
}

	.carttop{
		width: 100%;
		/* height: 50px; */
		line-height: 50px;
		background-color: #FFFFFF;
		 /* margin-top: 20px; */
	}
	.cartbox{
		width:100%;
		height:100%;
		background:#F5F5F5;
	}
	.mask{
		
		width:100%;
		height: 100px;
		background:#F5F5F5;
		
		font-size: 12px;
		color: #666;
	}
     .masktitle{
		 width: 100%;
		 height: 100px;
		 margin: 0 auto;
		 text-align: center;
		 
		 line-height: 100px;
	 }
	.allselect {

		border: 1px solid #762D2B;
		width: 45px;
		height: 30px;
		text-align: center;
		line-height: 30px;
		border-radius: -1%;
		border-radius: 15px;
		color: #762D2B;
	}

	.delectallselect {
		border: 1px solid #CB6D6B;
		width: 70px;
		height: 30px;
		text-align: center;
		line-height: 30px;
		border-radius: -1%;
		border-radius: 15px;
		color: #CB6D6B;
	}

	.alldelect {
		border: 1px solid orange;
		width: 70px;
		height: 30px;
		text-align: center;
		line-height: 30px;

		border-radius: 15px;
		color: orange;
	}

	.bianji {
		background-color: #FFFFFF;
		/* border-top: 1px solid #AEAEAE; */
		/* height: 50px; */
		overflow: hidden;
		/* transform: ; */
		animation: 1s;
		transition: all 0.5s;
	}
	.bianji>view {
		font-size: 12px;
		margin-top: 10px;
		float: right;
		/* line-height: a; */
		/* line-height: 50px; */
		margin-right: 10px;

	}

	.guige {
		position: absolute;
		top: -40rpx;
		
	}
	.guigetext{
		font-size: 9px;
	}

	uni-button {
		padding: 0;
		margin: 0;
		background-color: rgba(0, 0, 0, 0);
	}

	button {
		width: 210rpx;
		background: #ec5990 !important;
		color: #FFFFFF;
		font-size: 29rpx;
		font-weight: 500;
		height: 100%;
		padding: 0;
		line-height: 100rpx;
		border-radius: 0;

	}

	.checkNum {
		margin-right: 30rpx;

	}

	.bottom-bar {
		background-color: #FFFFFF;
		width: 100%;
		position: fixed;
		bottom: 0;
		display: flex;
		height: 100rpx;
		line-height: 100rpx;
		justify-content: space-between;
		font-size: 29rpx;
		z-index: 10;

	}

	/* 	*{
		color:#ec5990 ;
	} */
	.num-contor {
		display: inline-block;
		width: 210rpx;
		height: 60rpx;
		line-height: 60rpx;
		border: 1px solid #cccccc;
		text-align: center;
	}

	.sub {
		box-sizing: border-box;
		display: inline-block;
		width: 30%;
		border-right: 1px solid #cccccc;
	}

	.num {
		display: inline-block;
		width: 40%;
	}

	.add {
		box-sizing: border-box;
		display: inline-block;
		width: 30%;
		border-left: 1px solid #cccccc;
	}

/* 	img {
		width: 320px;
		height: 240px;
		display: inline-block;
		overflow: hidden;

	} */

	.good-remove {
		width: 36rpx;
		height: 36rpx;

	}

	.good-name {
		width: 250rpx;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;

	}

	text {
		cursor: text;


	}

	.good-dis-item {
		position: relative;
		display: flex;
		justify-content: space-between;
		align-items: center;

	}

	.good-pic {
		width: 160rpx;
		height: 160rpx;
	}

	checkbox {
		transform: scale(.7);

	}

	/* compontents/numControl/numControl.wxss */

	.scroll-Y {
		background-color: #FFFFFF;
		/* height: 500px; */
		margin-bottom: 60rpx;
	}

	.good-item {
		display: flex;
		padding: 20rpx 0;
		padding-left: 10px;
		border: 1px solid #f4f4f4;

	}

	.good-select {
		display: flex;
		align-items: center;

	}

	.good-dis {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		font-size: 24rpx;
		padding: 10rpx 0 15rpx;
		margin: 0 40rpx 0 20rpx;

	}

	/* pages/cart/cart.wxss */
</style>
