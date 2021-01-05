<template>
	<view class="uni-titlebox">
		<view  class="titleBox">
			<view class="titleList"  v-for="(item,index) in titleList" :key="index" @tap.stop="getTitleActive(index)">
				<view :class="titleActiveIndex ==index?'fieldActive':'field'" >{{item}}</view>
				<view v-if="titleActiveIndex ==index" class="lines"></view>
		    </view>
			
		</view>
		<view style="width: 750rpx;height:107rpx;;"> </view>
		<!-- 全部 -->
		<view  v-if="titleActiveIndex==0" class="bigBox">
			<view class="listBox">
				<view class="list" v-for="(item,index) in 3" :key="index" @tap.stop="jumpDetail(item,index)">
					<view class="uni-titles">
						<view class="left">订单编号  12323231232</view>
					    <view class="right">交易完成</view>
					</view>
					<view class="uni-content" v-for="(item,index) in 2" :key="index">
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
					<view class="uni-bottom">
						<view class="cancel style1">取消订单</view>
						<view class="toPay style1">去支付</view>
					</view>
					<view class="uni-bottom">
						<view class="toPay style1">确认收货</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 待付款 -->
		<view  v-if="titleActiveIndex==1" class="bigBox"  @tap.stop="jumpDetail(item,index)">
			<view class="listBox">
				<view class="list" v-for="(item,index) in 3" :key="index">
					<view class="uni-titles">
						<view class="left">订单编号  12323231232</view>
					    <view class="right">待付款</view>
					</view>
					<view class="uni-content" v-for="(item,index) in 2" :key="index">
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
					<view class="uni-bottom">
						<view class="cancel style1">取消订单</view>
						<view class="toPay style1">去支付</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 待发货 -->
		<view  v-if="titleActiveIndex==2" class="bigBox" @tap.stop="jumpDetail(item,index)">
			<view class="listBox">
				<view class="list" v-for="(item,index) in 3" :key="index">
					<view class="uni-titles">
						<view class="left">订单编号  12323231232</view>
					    <view class="right">待发货</view>
					</view>
					<view class="uni-content" v-for="(item,index) in 2" :key="index">
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
				</view>
			</view>
		</view>
		<!-- 待收货 -->
		<view  v-if="titleActiveIndex==3" class="bigBox" @tap.stop="jumpDetail(item,index)">
			<view class="listBox">
				<view class="list" v-for="(item,index) in 3" :key="index">
					<view class="uni-titles">
						<view class="left">订单编号  12323231232</view>
					    <view class="right">待收货</view>
					</view>
					<view class="uni-content" v-for="(item,index) in 2" :key="index">
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
					<view class="uni-bottom">
						<view class="toPay style1">确认收货</view>
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
				titleActiveIndex:0,
				titleList:['全部','待付款','待发货','待收货'],
			}
		},
		onLoad(options){
			this.setData(options)
		},
		methods: {
			// 头部点亮
			getTitleActive(index){
				this.titleActiveIndex=index;
				console.log(index)
			},
			jumpDetail(){
				uni.navigateTo({
					url:'/pages/personCenter/myOrder/orderDetail?transactionNum='+this.titleActiveIndex
				})
				
			}
		}
	}
</script>

<style scoped lang="scss">
 @import "../../../static/scss/common.scss";
// @include ellipsis(1);
	.titleBox{
		position: fixed;
		left: 0rpx;
		top:0rpx;
		z-index: 30;
		background-color: #fff;
		width: 750rpx;
		height: 107rpx;
		padding:0rpx 30rpx;
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 28rpx;
		.titleList{
			width: 120rpx;
			display: flex;
			flex-direction: column;
			align-items: center;
			height: 55rpx;
			justify-content: space-between;
		}
		.field{
			color:#B6B6B6 ;
		}
		.fieldActive{
			color: #FF9A9E;
		}
		.lines{
			width: 50rpx;
			height: 6rpx;
			background: #FF6A6C;
			border-radius: 2rpx;
		}
	}
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
						border-radius: 8rpx;
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
	.style1{
		width: 160rpx;
		height: 60rpx;
		line-height: 60rpx;
		
		text-align: center;
		border: 2rpx solid #FF9A9E;
		border-radius: 30rpx;
		font-size: 28rpx;
		font-family: PingFang SC;
		font-weight: 500;
	}
	.cancel{
         color: #FF9A9E;
		 background: #FFFFFF;
	}
	.toPay{
		margin-left: 20rpx;
		color: #fff;
        background: #FF9A9E;
	}
}
</style>
