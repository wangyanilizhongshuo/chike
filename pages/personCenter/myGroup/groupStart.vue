<template>
	<view class="uni-myGroup">
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
					<!-- <view class="signalBox"><view class="details">查看拼单详情</view></view> -->
		            <view class="detailBox">
						<view class="uni-first">
							<view class="fileds">剩余</view>
							<view class="timeBox">
								<view class="list">12</view>
								<view class="lists">:</view>
								<view class="list">12</view>
								<view class="lists">:</view>
								<view class="list">12</view>
							</view>
						</view>
						<view class="uni-second">还差<text class="num">1</text> 人成团，赶快邀请好友加入吧！</view>
						<view class="uni-third">
							<view class="leftGirl">
								<image class="imgss" src="http://zxyp.hzbixin.cn/files/16031607417221838.jpg"></image>
							    <view class="field">团长</view>
							</view>
							<view class="rightBox">
								<view class="list">
									<image class="imgs" src="http://zxyp.hzbixin.cn/files/25821608259248820.jpg"></image>
								</view>
								<view class="list">
									<image class="imgs" src="http://zxyp.hzbixin.cn/files/25821608259248820.jpg"></image>
								</view>
								<view class="list">
									<image class="imgs" src="http://zxyp.hzbixin.cn/files/25821608259248820.jpg"></image>
								</view>
								<view class="list">
									<image class="imgs" src="http://zxyp.hzbixin.cn/files/25821608259248820.jpg"></image>
								</view>
								
							</view>
						</view>
						<view class="uni-fourth">
							<view class="inviteBtn">邀请好友</view>
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
			
		}
	}
</script>

<style scoped lang="scss">
@import "../../../static/scss/common.scss";
// @include ellipsis(1);
	.uni-myGroup{
		height: 100vh;
		background-color: #f2f2f2;
		.contentBox{
			
			border-top:2rpx solid #f2f2f2;
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
					border-radius: 8rpx;
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
		display: flex;
		justify-content: center;
		align-items: center;
		.fileds{
			color: #2A2A2A;
			font-size: 28rpx;
			margin-right:25rpx;
		}
		.timeBox{
			display: flex;;
			.list{
				width: 58rpx;
				text-align: center;
				line-height: 58rpx;
				height: 58rpx;
				background: #EE5845;
				border-radius: 8rpx;
				color: #fff;;
			}
			.lists{
				width: 30rpx;
				height: 58rpx;
				text-align: center;
				line-height: 58rpx;
			}
		}
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
		.leftGirl{
			width: 100rpx;
			display: flex;
			flex-direction: column;
			align-items: center;
			.imgss{
				display: block;
				height: 70rpx;
				width: 90rpx;
				border-radius: 50%;
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
		margin-top:40rpx;
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
