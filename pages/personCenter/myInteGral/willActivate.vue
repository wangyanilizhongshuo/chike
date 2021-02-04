<template>
	<view class="uni-willActivate">
		<view class="box">
			<!-- <view  class="list" v-for="(item,index) in dataList1" :key="index">
				<view class="uni-left">
					<image class="imgs" :src="item.avatar"></image>
				    <view class="rights">
						<view class="top">{{item.nickname}}</view>
						<view class="down">{{item.phone}}</view>
					</view>
				</view>
				<view class="uni-right">
					<view class="topss">待激活{{item.active_integral}}积分</view>
					<view class="downss">注册时间{{item.add_time}}</view>
				</view>
			</view> -->
			<view  class="list" v-for="(item,index) in dataList2" :key="index">
				<view class="uni-left">
					<image class="imgs" :src="item.avatar"></image>
				    <view class="rights">
						<view class="top">{{item.nickname}}</view>
						<view class="down">{{item.phone}}</view>
					</view>
				</view>
				<view class="uni-right">
					<view class="topss">待激活{{item.active_integral}}积分</view>
					<view class="downss">注册时间{{item.add_time}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// dataList1:[],
				dataList2:[],
				pages:1,
				pageV:1
			}
		},
		onLoad(){
			// this.getList1();
			this.getList2();
		},
		onReachBottom(){
			if(this.pagesV==0){
				this.pages+=1;
				this.getList2();
			}
			
		},
		methods:{
			// getList1(){
			// 	this.$http.post('mini/v1/user/integralingmy',{},(res)=>{
			// 		if(res.state==0){
			// 			this.dataList1=res.data.list;
			// 			console.log(this.dataList1)
			// 		}
			// 	})
			// },
			getList2(){
				let that=this;
				that.$http.post('mini/v1/user/integralingspread',{
					page:that.pages,
				},(res)=>{
						 if(res.state==0){
							that.pagesV=res.data.is_request;
							if(res.data.is_request==0){
								let aa = res.data.list;
								let bb = that.dataList2;
								that.dataList2 = bb.concat(aa)
							}
						 }
				})
			}
			
		}
	}
</script>
<style scoped lang="scss">
	@import "../../../static/scss/common.scss";
	.uni-willActivate{
		.box{
			.list{
				width: 750rpx;
				height: 150rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;
				border-top: 2rpx solid #f2f2f2;;
				padding:0rpx 30rpx;
				box-sizing: border-box;
				.uni-left{
					display: flex;;
					.imgs{
						display: block;
						width: 90rpx;
						height: 90rpx;
						margin-right: 30rpx;
					}
					.rights{
						height: 90rpx;
						display: flex;
						flex-direction: column;
						justify-content: space-around;
						.top{
							color: #3B3B3B;
							font-size: 26rpx;;
						}
						.down{
							color: #9B9B9B;
							font-size: 24rpx;;
						}
					}
				}
				.uni-right{
					height: 90rpx;
					display: flex;
					flex-direction: column;
					justify-content: space-around;
					.topss{
						color: #3B3B3B;
						font-size: 26rpx;;
					}
					.downss{
						color: #9B9B9B;
						font-size: 24rpx;;
					}
				}
			}
		}
	}
</style>
