<template>
	<view class="uni-willActivate">
		<view class="box">
			<view  class="list" v-for="(item,index) in 6" :key="index">
				<view class="uni-left">
					<image class="imgs" src="../../../static/image/index-diamond.png"></image>
				    <view class="rights">
						<view class="top">无敌元气妹</view>
						<view class="down">15236214785</view>
					</view>
				</view>
				<view class="uni-right">
					<view class="topss">待激活1000积分</view>
					<view class="downss">注册时间2020年11月4日</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad(){
			
		},
		methods:{
			
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
