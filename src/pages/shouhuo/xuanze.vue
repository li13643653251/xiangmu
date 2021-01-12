<template>
	<view style="background-color: #F1F1F1;">
		<scroll-view scroll-y class="scroll-Y">
			
				<view class="address-item" v-for="(item,index) in resslist " :key="index" @tap="gojiesuan(item)">
					<view class="address-user">
						<text class="size14">{{item.name}}</text>
						<text class="size14">{{item.phone}}</text>
					</view>
					<view class="address-dizhi">
						<text class="size12 huise">
							{{item.province}}-{{item.city}}-{{item.region}}-{{item.detailAddress}}
						</text>
					</view>
				
				</view>
			
		
	
		</scroll-view>
		
		<view class="addbottom size18" @tap="modify()">
			新增收货地址
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				 user:null,
				 resslist:[],
				 defaultStatus:null
			}
		},
		onLoad(){
			 this.user = uni.getStorageSync("user")
					 
		},
		onShow(){
			
			let id=this.user.id
			this.$request(`member/umsmemberreceiveaddress/${id}/addresses`,"get").then(res=>{
				if(res.status==503){
					uni.showToast({
						title: '服务器繁忙',
						icon: "loading",
						duration: 1000
					});
				}else{
					this.resslist=res
					// console.log(this.resslist)
					if(this.resslist.length<=0){
						this.defaultStatus=1	// console.log(6666)
					}else{
						this.defaultStatus=0
					}
				}
			
				// console.log(res)
			})
		},
		methods:{
			gojiesuan(item){
				let data=JSON.stringify(item)
				 uni.setStorageSync('storage_key', data);
				uni.navigateBack({
				    delta: 1
				});
				// uni.navigateTo({
				//     url: `/pages/tabbar/cart/ceshi?data=${data}`
				// });
				console.log(123)
			},
	
			// 新增收货地址
			modify(){
	             let  a=this.defaultStatus
				uni.navigateTo({
				    url: `/pages/shouhuo/add?defaultStatus=${a}`
				});
			},
			goxiugai(item){
				let  data = JSON.stringify(item)
				uni.navigateTo({
				    url: `/pages/shouhuo/addup?arr=${data}`
				});
			},
			godelete(id,index){
				let arr=[]
				arr.push(id)
				console.log(arr)
				this.$request(`member/umsmemberreceiveaddress/delete/${id}`,{
				},"post").then(res=>{
					console.log(res)
				})
				this.resslist.splice(index, 1)
			}
			
		}
	}
</script>

<style>
	.scroll-Y {
		height: 800px;
		background-color: ;
	}
	
	.address-item {
		border: 1px solid #e2e2e2;
		padding: 20rpx;
		margin: 20rpx;
		box-shadow:2px 2px 5px darkgray;
	
	}
	
	.address-user {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 20rpx 0;
	
	}
	
	.address-dizhi {
		margin: 20rpx 0;
	}
	
	.address-select {
		display: flex;
		justify-content: space-between;
		align-items: center;
		
	}
	.delectimg{
		width: 32rpx;
		height: 32rpx;
	
	}
	.addbottom {
		background-color:#B72112 ;
		width: 100%;
		height: 100rpx;
	     position: fixed;
		bottom: 0;
		color: #FFFFFF;
		text-align: center;
		line-height: 100rpx;
		border: 1px solid rgba(7, 17, 27, 0.1);
		
	}
</style>
