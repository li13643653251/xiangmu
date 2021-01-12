<template>
	<view>
		<!-- 搜索条 -->
		<view class="searchTopBox">
			<view class="searchBoxRadius">
				<view class="mix-icon  icon-sousuo"></view>
				<input class="searchBoxIpt" type="search" v-model="ipt" @confirm="searchNow()" placeholder="关键字"></input>
			</view>
			<view class="sousuo" @tap="searchNow">
				搜索
			</view>
		</view>
		<!-- 搜索历史 -->
		<view class="searchBotBox" v-show="key">
			<view class="ov">
				<view class="fl">历史记录</view>

				<view @tap="clearKey" class="mix-icon  icon-lajitong fr"></view>
			</view>
			<view class="searchHistoryBox">
				<view class="searchHistoryBoxItem" v-for="(item,index) in searchKey" :key='index' @tap="searchold(index)">
					{{item}}
				</view>
			</view>
		</view>
		<view class="searchBotBox" v-show="key==false">
			<view>
				<view class="uni-product-list">
					<view class="uni-product" v-for="(product,index) in shoplist" :key="index">
						<view class="image-view" @click="xiangqing(product.spu_id,product.price)">
							<image v-if="renderImage" class="uni-product-image" :src="product.imgUrl"></image>
						</view>
						<view class="uni-product-title">{{product.spuName}}</view>
						<view class="uni-product-price">
							<text class="uni-product-price-favour">￥100</text>
							<text class="uni-product-price-original">￥{{product.price}}</text>
							<text class="uni-product-tip">抢购</text>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				searchKey: [],
				ipt: '',
				searchClose: true,
				shoplist: null,
				key: true,
				renderImage: false,

			}
		},
		onShow() {
			setTimeout(() => {
				this.renderImage = true;
			}, 300);
			var vv = uni.getStorageSync('searchLocal');
			var arr = vv.split("-");
			this.searchKey = arr;
			console.log(this.searchKey)
		},
		methods: {
			xiangqing(num,price) {
				
				uni.navigateTo({
					url: `/pages/xiangqingye/xiangqingye?id=${num}&price=${price}`
				});
				console.log(123)
			},

			clearKey: function() {
				var that = this;
				uni.showModal({
					title: '提示',
					content: '点击确定将删除所有历史信息，确定删除吗？',
					success: function(res) {
						if (res.confirm) {
							that.searchKey = [];
							uni.setStorage({
								key: 'searchLocal',
								data: that.searchKey
							});

						} else if (res.cancel) {

						}

					}
				});

			},
			searchNow: function() {
				if (this.ipt == '') {
					uni.showToast({
						title: '未输入搜索关键字',
						icon: 'none',
						duration: 1000
					});
					return false;
				}
				var that = this;
				var newArr = that.searchKey;
				newArr.push(this.ipt);
				this.searchKey = newArr;
				var newStr = newArr.join('-');
				uni.setStorage({
					key: 'searchLocal',
					data: newStr
				});
				this.getlist(this.ipt)
				this.ipt = ""
			},
			searchold(index) {
				// console.log(this.searchKey[index])
				this.getlist(this.searchKey[index])
				// if (this.searchKey[index]) {
				// 	// console.log(this.searchKey[index])
				// }

			},
			getlist(ipt) {
				console.log(ipt)
				this.$request("product/api/search", {
					// "weixinToken": uni.getStorageSync("token"),
					"keyWord": ipt,
					"pageNo": "0",
					"pageSize": "10"
				}, "get").then(res => {

					if (res.list.length == 0) {
						uni.showToast({
							title: '目前暂无该商品',
							icon: 'none',
							duration: 1000
						});
					} else {
						this.key = false
						console.log(this.key)
						this.shoplist = res.list
						console.log(this.shoplist)
					}
					console.log(res)
				})
			}
		}
	}
</script>
<style>
	page {
		background: #F8F8F8;
	}

	view {
		font-size: 28upx;
	}

	.uni-product-list {
		display: flex;
		width: 100%;
		flex-wrap: wrap;
		flex-direction: row;
	}

	.uni-product {
		padding: 10upx;
		display: flex;
		flex-direction: column;
	}

	.image-view {
		height: 330upx;
		width: 330upx;
		margin: 12upx 0;
	}

	.uni-product-image {
		height: 330upx;
		width: 330upx;
	}

	.uni-product-title {
		width: 300upx;
		word-break: break-all;
		display: -webkit-box;
		overflow: hidden;
		line-height: 1.5;
		text-overflow: ellipsis;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
	}

	.uni-product-price {
		margin-top: 10upx;
		font-size: 28upx;
		line-height: 1.5;
		position: relative;
	}

	.uni-product-price-original {
		color: #e80080;
	}

	.uni-product-price-favour {
		color: #888888;
		text-decoration: line-through;
		margin-left: 10upx;
	}

	.uni-product-tip {
		position: absolute;
		right: 10upx;
		background-color: #ff3333;
		color: #ffffff;
		padding: 0 10upx;
		border-radius: 5upx;
	}

	.icon-sousuo {
		width: 5%;
		height: 100%;
		line-height: 70upx;
	}

	/* 	.mix-icon {
		display: inline-block;
	} */
	page {
		background: #FFF;
	}

	.ov {
		overflow: hidden;
	}

	.fl {
		float: left;
	}

	.fr {
		float: right;
	}

	.searchTopBox {
		display: flex;
		width: 100%;
		/* background-color: #0b877f; */
		height: 100upx;
		box-sizing: border-box;
		padding-top: 15upx;
	}

	.searchBoxRadius {
		display: flex;
		width: 70%;
		height: 70upx;
		background-color: #EEEEEE;
		margin-left: 15%;
		overflow: hidden;
		border-radius: 35upx;
	}

	.searchBoxIcon {
		font-size: 40upx;
		margin-top: 20upx;
		margin-left: 20upx;
		float: left;
	}

	.searchBoxIpt {
		height: 70upx;
		line-height: 70upx;
		margin-left: 20upx;
		float: left;
	}

	.sousuo {
		/* width: 5%; */
		margin-left: 5%;
		height: 70upx;
		line-height: 70upx;
		border-radius: 10upx;
		color: #A5A5A5;
		background-color: #EEEEEE;
	}

	.searchBotBox {
		width: 100%;
		margin-top: 30upx;
		padding: 15upx 3%;
		box-sizing: border-box;
	}

	.searchHistoryBox {
		width: 100%;
		box-sizing: border-box;
		overflow: hidden;
		margin-top: 40upx;
	}

	.searchHistoryBoxItem {
		float: left;
		font-size: 26upx;
		background-color: #F4F4F4;
		color: #000000;
		line-height: 46upx;
		height: 46upx;
		padding: 0 20upx;
		border-radius: 23upx;
		margin-left: 15upx;
		margin-bottom: 20upx;
		border: 1px solid #ccc;
	}
</style>
