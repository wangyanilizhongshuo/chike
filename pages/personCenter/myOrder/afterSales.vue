<template>
	<view class="uni-titlebox">
		<view class="searchBox">
			<image class="searchBg" src="http://zxyp.hzbixin.cn/files/10921608263278444.jpg"></image>
		    <view class="inputBox">
				<image  class="img" src="../../../static/image/index-search-search.png"></image>
			    <input class="inputValue" placeholder-style="color:#A8A8A8;font-size:26rpx" placeholder="请输入订单号进行查询" />
			</view>
		</view>
		<view style="width:750rpx;height:75rpx;background-color: #fff;"> </view>
		<!-- 全部 -->
		<view   class="bigBox">
			<view class="listBox">
				<view class="list" v-for="(item,index) in 4" :key="index">
					<view class="uni-titles">
						<view class="left">订单编号  12323231232</view>
					    <view class="right">售后成功</view>
						<!-- <view class="right">售后失败</view> -->
					</view>
					<view class="uni-content" v-for="(item,index) in 3" :key="index">
						<image class="uni-left" src="https://img9.51tietu.net/pic/2019-091200/ff1vqwm3q33ff1vqwm3q33.jpg"></image>
						<view class="uni-right">
							<view class="uni-first">炫齿按压泵头式液体牙160g  </view>
                            <view class="uni-second">¥<text  class="money">49.30</text></view>
							<view class="uni-third">
								<view class="uniLeft">规格：120ml</view>
								<view class="uniRight">×1</view>
							</view>
						</view>
					</view>
					<view class="uni-bottom">
						<view class="allNum">共计2件商品</view>
						<view  class="allMoney">实付款：<text class="mon">￥91.00</text></view>
					</view>
					<view class="uni-timeBox" >
						<view class="timevalue">2020年11月4日15:40:13</view>
					    <view class="field">退款退货 </view>
						<!-- <view class="field">退款 </view> -->
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
				titleList:['全部','待付款','待发货','待收货'],
			}
		},
		methods: {
			// 头部点亮
			getTitleActive(index){
				this.titleActiveIndex=index;
				console.log(index)
			}
			
		}
	}
</script>

<style scoped lang="scss">
 @import "../../../static/scss/common.scss";
// @include ellipsis(1);
	
	.bigBox{
		.listBox{
			.list{
				width: 750rpx;
				padding: 0rpx 30rpx 30rpx;
				box-sizing: border-box;
				border-top: 2rpx solid #f2f2f2;
				.uni-titles{
					display: flex;
					width: 690rpx;
					justify-content: space-between;
					height: 75rpx;
					align-items: center;
					font-size: 24rpx;
					.left{
						color: #454545;
						
					}
					.right{
						color: #FF6A6C;
					}
				}
				.uni-content{
					width: 690rpx;
					display: flex;
					padding-top:30rpx;
					.uni-left{
						display: block;
						width: 150rpx;
						height: 150rpx;
						margin-right: 30rpx;;
					}
					.uni-right{
						width: 500rpx;
						height: 150rpx;
						display: flex;
						flex-direction: column;
						justify-content: space-around;
						.uni-first{
							color: #000000;
							font-size: 26rpx;
							font-weight: bold;
							@include ellipsis(2);
						}
						.uni-second{
							color: #FF0000;
							font-size: 24rpx;
							margin:7rpx 0rpx;
							.money{
								font-size: 32rpx;
							}
						}
						.uni-third{
							display: flex;
							justify-content: space-between;
							color: #8F8F8F;
							font-size: 22rpx;;
							.uniLeft{
								
							}
							.uniRight{}
						}
					}
				}
			}
         }
	}
.uni-bottom{
	width: 690rpx;
	height: 90rpx;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	color: #000000;
	font-size: 26rpx;;
	.allMoney{
		margin-left: 20rpx;
		.mon{
			color: #FF0000;
		}
	}
	
}
.uni-timeBox{
	display: flex;
	justify-content: space-between;
	font-size: 24rpx;
	.timevalue{
		color: #454545;	
	}
	.field{
		color: #FF6A6C;
	}
}
	
.searchBox{
	position: fixed;
	left:30rpx;
	top:0rpx;
	background-color: #fff;
	border-top:10rpx solid #fff;
	height: 80rpx;
	.searchBg{
		display: block;
		width: 690rpx;
		height: 60rpx;;
	}
	.inputBox{
		position: absolute;
		left:30rpx;
		top:0rpx;
		width: 690rpx;
		height: 60rpx;
		display: flex;
		align-items: center;
		padding-left:30rpx;
		.img{
			display: block;
			width: 30rpx;
			height: 30rpx;
			margin-right: 30rpx;
		}
		.inputValue{
			color: #A8A8A8;
			font-size: 26rpx;;
		}
	}
}
</style>
