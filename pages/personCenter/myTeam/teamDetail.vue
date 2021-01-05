<template>
	<view class="uni-myGroup">
		    <view class="uni-schedule">2020年11月3日17:06:30
			</view>
			<view class="contentBox">
					<view class="contentSmallBox">
						<image class="uni-left" src="https://img9.51tietu.net/pic/2019-091200/ff1vqwm3q33ff1vqwm3q33.jpg"></image>
						<view class="uni-right">
							<view class="first">小巨蛋野樱莓雪齿亮白清新口气去渍去黄牙膏 氨基酸健齿炫齿按压泵头式液体牙160g  </view>
							<view class="second">¥<text  class="mon">85.85</text></view>
							<view class="third">
								<view class="lefts">规格：120ml</view>
								<view class="rights">×1</view>
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
				
			}
		},
		methods: {
			jumps(){
				uni.switchTab({
					url:'/pages/index/index'
				})
				
			}
		}
	}
</script>

<style scoped lang="scss">
@import "../../../static/scss/common.scss";
// @include ellipsis(1);
.uni-schedule{
	border-top:2rpx solid #f2f2f2;
	width: 750rpx;
	height: 80rpx;
	line-height: 80rpx;
	padding: 0rpx 30rpx;
	box-sizing: border-box;
	color: #454545;
	font-size: 24rpx;
	background-color: #fff;
}
	.uni-myGroup{
		height: 100vh;
		background-color: #f2f2f2;
		.contentBox{
			
			
			.contentSmallBox{
				width: 750rpx;
				padding:38rpx 30rpx 30rpx;
				box-sizing: border-box;
				display: flex;
				justify-content: space-between;
				// margin-top: 38rpx;
				background-color: #fff;
				.uni-left{
					display: block;
					width: 150rpx;
					height: 150rpx;;
					margin-right: 30rpx;
				}
				.uni-right{
					flex:1;
					height: 150rpx;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					.first{
						font-weight: bold;;
						font-size: 26rpx;
						color: #000;
						@include ellipsis(2);
					}
					.second{
						color: #FF0000;
						font-size: 24rpx;;
						.mon{
							font-size: 32rpx;;
						}
					}
					.third{
						display: flex;
						color: #8F8F8F;
						justify-content: space-between;
						font-size: 22rpx;;
						.lefts{}
						.rights{}
					}
				}
			}
		}
	}
.signalBox{
	width: 690rpx;
	margin:30rpx 0rpx;
	height: 60rpx;
	.details{
		width: 240rpx;
		height: 60rpx;
		text-align: center;
		font-size: 28rpx;
		background: #FF9A9E;
		border-radius: 30rpx;
		font-family: PingFang SC;
		font-weight: 500;
		float: right;
		line-height: 60rpx;;
		color: #FFFFFF;
	}
}
.detailBox{
	padding:44rpx 0rpx 65rpx;
	width: 750rpx;
	background-color: #fff;
	margin-top: 20rpx;
	.uni-first{
		text-align: center;
		color: #2A2A2A;
		font-size:28rpx;
		
		
	}
	.uni-second{
		font-size: 28rpx;
		color: #2A2A2A;
		margin:30rpx 0rpx 50rpx;
		text-align: center;
		.num{
			color: #FF0000;
		}
	}
	.uni-third{
		width: 750rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top:70rpx;
		.leftGirl{
			width: 100rpx;
			display: flex;
			flex-direction: column;
			align-items: center;
			.imgss{
				display: block;
				height: 70rpx;
				width: 90rpx;;
			}
			.field{
			   width: 90rpx;
			   height: 34rpx;
			   line-height: 34rpx;
			   text-align: center;
			   background: #FF9A9E;
			   color: #fff;
               font-size: 24rpx;
			}
		}
		.rightBox{
			display: flex;;
			.list{
				margin-left: 25rpx;;
				.imgs{
					display: block;
					width: 94rpx;
					height: 94rpx;;
				}
			}
			
		}
	}
	.uni-fourth{
		margin-top:50rpx;
		.inviteBtn{
			width: 240rpx;
			height: 60rpx;
			text-align: center;
			line-height: 60rpx;
			color: #fff;
			margin-left:255rpx;
			font-size: 28rpx;
			background: #FF9A9E;
			border-radius: 30rpx;
		}
	}
	
}
</style>
