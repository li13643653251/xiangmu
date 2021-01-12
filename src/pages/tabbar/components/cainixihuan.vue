<template>
	<view>
		<view class="shouyecainixihuan">
			<view class="qingchufudong"></view>
			<view class="cainixihuantext size18" v-if="titletext==1">猜你喜欢</view>
			<view class="cainixihuantext size18" v-else>为你推荐</view>	
			<view class="xihuanshangpin">
				<!-- 每个商品 -->
				<view class="lickitem" v-for="(item,index) in lickshop" :key="index">
					<view class="lickitemimg" @tap="xiangqing(item.spu_id,item.price)">
						<img class="radioimg" style="width: 95%;" :src="item.imgUrl" alt="">
					</view>
					<view style="margin-top: 20rpx;">
						<p class="lickshoptext shoptitle">
							<!-- <span>[双十一狂欢季]</span> -->
							{{item.spuName}}
						</p>
						<view class="lickshopmoney">
							<p>
								<span class="nowmoney size12">￥<span class="size16" style="color:red ;">{{item.price}}</span></span>
								<span class="oldmoney size12">￥222</span>
							</p>
							<p id="licksales" class="huise size12" style="float: right; line-height: 16px;">销量: <span>{{item.saleCount}}</span></p>
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
		</view>
	</view>

	
</template>
<script>
	export default {
		props:{
			titletext:null
		},
		data() {
			return {
				lickshop: null
			}
		},
		mounted() {
		   this.youlick()
		   // console.log(this.titletext,66666666)
			
		},
		methods: {
			youlick() {
				uni.showToast({
					title: '正在努力加载',
					icon: "loading",
					duration: 1000
				});
				this.$request("product/api/list", {}).then(res => {
					// console.log(res,66666666666666666)
					this.lickshop = res.spuResps
				})

			},
			xiangqing(num, price) {
				console.log(num, price)
				uni.navigateTo({
					url: `/pages/xiangqingye/xiangqingye?id=${num}&price=${price}`
				});
				console.log(123)
			}
		}

	}
</script>

<style scoped="scoped">
	.qingchufudong {
		position: absolute;
		left: 40%;
		top: -100%;
		width: 80px;
		height: 6px;
		border-radius: 5px;
		background-color: #FA0300;
	}

	.cartcet {
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
	}
</style>
