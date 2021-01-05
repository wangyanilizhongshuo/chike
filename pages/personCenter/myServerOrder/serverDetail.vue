<template>
	<view class="uni-serverDetail">
		<view class="allBox style1" >
			<view class="listBox">
				<view class="list" >
					<view class="uni-title">
						<view class="uni-left">优琦口腔（下沙江滨店）</view>
					</view>
					<view class="uni-center" @tap.stop="jumpsDetail">
						<image class="lefts" src="https://img9.51tietu.net/pic/2019-091200/ff1vqwm3q33ff1vqwm3q33.jpg"></image>
					    <view class="right">
							<view class="first">超声波洗牙（豪华套餐）</view>
							<view class="second">预约时间  2020年11月3日17:06</view>
							<view class="third">¥<text class="money">45.43</text></view>
						</view>
					</view>
				</view>
				<view class="ermBox">
					<image class="imgs" src="http://zxyp.hzbixin.cn/files/89621607595034087.jpg"></image>
				</view>
				<view class="listBoxss">
					<view class="lists">
						<view class="fields">订单编号</view>
					    <view class="values">142058652253222</view>
					</view>
					<view class="lists">
						<view class="fields">付款时间</view>
					    <view class="values">2020年12月4日13:12:51</view>
					</view>
					<view class="lists">
						<view class="fields">支付方式</view>
					    <view class="activeRed">微信支付</view>
					</view>
					<view class="lists">
						<view class="fields">服务券</view>
					    <view class="activeReds">-¥5</view>
					</view>
					<view class="lists">
						<view class="fields">积分抵扣</view>
					    <view class="activeReds">-¥5</view>
					</view>
				</view>
				<view  class="footer">
					<button class="firsts stylesss" open-type="contact">联系客服</button>
					<!-- <view ></view> -->
					<view class="seconds stylesss" @tap.stop="jumps">留言</view>
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
			// 头部点亮
			
			jumps(){
				uni.navigateTo({
					url:'/pages/personCenter/myServerOrder/giveAMsg'
				})
			}
			
		}
	}
</script>
<style scoped lang="scss">
	@import "../../../static/scss/common.scss";
	.uni-serverDetail{
		position: relative;
		left: 0rpx;
		top: 0rpx;
		height: 100vh;;
	}
	
	.style1{
		.listBox{
			background-color: #fff;
			.list{
				width: 750rpx;
				height: 335rpx;
				padding:30rpx 30rpx 0rpx;
				box-sizing: border-box;
				.uni-title{
					display: flex;
					justify-content: space-between;
					align-items: center;
					.uni-left{
						font-weight: bold;
						color: #000;
						font-size: 32rpx;;
					}
					
					
				}

				.uni-center{
					display: flex;
					margin-top:46rpx;
					.lefts{
						display: block;
						width: 150rpx;
						height: 150rpx;
						border-radius: 8rpx;
						margin-right: 20rpx;;
					}
					.right{
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						.first{
							color: #000000;
							font-size: 28rpx;
							font-weight: bold;
							
						}
						.second{
							color: #454545;
							font-size: 24rpx;;
						}
						
						.third{
							color: #FF0000;
							font-size: 32rpx;
							font-weight: bold;
							.money{
								font-size: 42rpx;
							};
						}
					}
				}
			}
			
		}
	}
	.ermBox{
		width: 750rpx;
		padding:28rpx 263rpx;
		border-top:2rpx solid #f2f2f2;
		border-bottom:2rpx solid #f2f2f2;
		.imgs{
			display: block;
			width: 224rpx;
			height: 224rpx;
		}
		
	}
	.listBoxss{
		.lists{
			width: 750rpx;
			height: 90rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 0rpx 30rpx;
			box-sizing: border-box;
			color: #000000;
			font-size: 26rpx;
			.fields{
				
			}
			.values{}
			.activeReds{
				color: #FF0000;
			}
		}
		
	}
	.footer{
		width: 750rpx;
		height: 130rpx;
		display: flex;
		padding:0rpx 30rpx;
		box-sizing: border-box;
		align-items: center;
		justify-content: flex-end;
		position: fixed;
		left:0rpx;
		bottom: 30rpx;;
		.stylesss{
			width: 160rpx;
			height: 60rpx;
			line-height: 60rpx;
			text-align: center;
			background: #FFFFFF;
			border: 2rpx solid #FF9A9E;
			border-radius: 30rpx;
            color: #FF9A9E;
			font-size: 28rpx;
			
		}
		.firsts{
			margin-right:28rpx;
			font-size: 24rpx;;
		}
		.seconds{}
		
	}
</style>