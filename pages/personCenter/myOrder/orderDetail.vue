<template>
	<view class="uni-orderDetail">
		<view class="contentBox">
			<view class="uni-title">
				<image  class="imgBgRed" src="http://zxyp.hzbixin.cn/files/30071608262696986.jpg"></image>
			    <view class="titleBox" v-if="transactionNum==0">
					<view class="filed">交易成功</view>
				    <image class="signalLogo" src="http://zxyp.hzbixin.cn/files/30481608263126400.jpg"></image>
				</view>
				<view class="titleBox" v-if="transactionNum==1">
					<view class="filed">
						<view>待付款</view>
						<view class="small">还剩23小时58分钟关闭订单</view>
					</view>
				    <image class="signalLogo" src="http://zxyp.hzbixin.cn/files/62861607417704590.jpg"></image>
				</view>
				<view class="titleBox" v-if="transactionNum==2">
					<view class="filed">待发货</view>
				    <image class="signalLogo" src="http://zxyp.hzbixin.cn/files/62931608262986532.jpg"></image>
				</view>
				<view class="titleBox" v-if="transactionNum==3">
					<view class="filed">待收货</view>
				    <image class="signalLogo" src="http://zxyp.hzbixin.cn/files/36921608262907029.jpg"></image>
				</view>
				<view class="titleBox" v-if="transactionNum==4">
					<view class="filed">关闭交易 </view>
				    <image class="signalLogo" src="http://zxyp.hzbixin.cn/files/30501608262741477.jpg"></image>
				</view>
			</view>
			<view class="addressBox">
				<view class="list" v-for="(item,index) in  1" :key="index">
					<view class="uni-top">
						<view class="left">小王</view>
						<view class="center">15987456321</view>
						<view @tap.stop="defaultAddFlag=(!defaultAddFlag)" :class="defaultAddFlag==true?'active':'wuse'" class="right">默认</view>
					</view>
					<view class="uni-bottom">
						浙江省 杭州市 滨江区 龙腾花园5-8-603
					</view>
				</view>
			</view>
			<view class="mainContentBox">
				<view class="orderList" v-for="(item,index) in 2" :key="index">
					<view class="uni-content" >
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
					<view class="uni-bottoms" style="height: 70rpx;margin:25rpx 0rpx;" v-if="transactionNum==2 ||transactionNum==3 " @tap.stop="refundMaskFlag=true">
						<view class="cancel style1">退款</view>
					</view>
				</view>
					<view class="uni-bottom">
						<view class="allNum">共计2件商品</view>
						<view  class="allMoney">实付款：<text class="mon">￥91.00</text></view>
					</view>
					<view  class="uni-details">
						<view class="list">
							<view class="uni-left">订单编号</view>
							<view class="uni-right">142058652253222</view>
						</view>
						<view class="list">
							<view class="uni-left">付款时间</view>
							<view class="uni-right">2020年12月4日13:12:51</view>
						</view>
						<view class="list">
							<view class="uni-left">支付方式</view>
							<view class="uni-right">微信支付</view>
						</view>
						<view class="list">
							<view class="uni-left">运费</view>
							<view class="uni-right">¥0</view>
						</view>
						<view class="list">
							<view class="uni-left">服务券</view>
							<view class="uni-right active">-¥5</view>
						</view>
						<view class="list">
							<view class="uni-left">积分抵扣</view>
							<view class="uni-right active">-¥2.9</view>
						</view>
					</view>
					<view class="uni-remarks">
						<view class="filed">备注:   </view>
						<view class="remarks">老板一斤给我方法!</view>
					</view>
				</view>
				<!-- <view  style="width: 750rpx;background-color: #f2f2f2;height: 50rpx;;"></view> -->
				<view class="uni-bottoms" v-if="transactionNum==1">
					<view class="cancel style1">取消订单</view>
					<view class="toPay style1">去支付</view>
				</view>
				<view class="uni-bottoms" v-if="transactionNum==3">
					<!-- <view class="cancel style1">取消订单</view> -->
					<view class="toPay style1">确认收货</view>
				</view>
			</view>
		<!-- 退款的弹框 -->
		<view class="refundMoneyDialog" v-if="refundMaskFlag"  @tap.stop="refundMaskFlag=false"></view>
		<view class="refundMoneyBox"  v-if="refundMaskFlag">
			<view class="titleBox" @tap.stop="refundMaskFlag=false">
				<view class="cancelBox">取消</view>
				<view class="confirmBox">确认</view>
			</view>
			<view class="chioceBox">
				<view class="list">
					<view class="imgBox" @tap.stop="refundWay=(!refundWay),returnGoods=false">
						<image v-if="!refundWay"  class="imgs" src="../../../static/image/shopCart-btn.png"></image>
					    <image v-if="refundWay"  class="imgs" src="../../../static/image/shopCart-btnActive.png"></image>
					</view>
				    <view >退款</view>
					<!-- <view>退货退款</view> -->
				</view>
				<view class="list">
					<view class="imgBox" @tap.stop="returnGoods=(!returnGoods),refundWay=false"> 
						<image v-if="!returnGoods"  class="imgs" src="../../../static/image/shopCart-btn.png"></image>
					    <image v-if="returnGoods"  class="imgs" src="../../../static/image/shopCart-btnActive.png"></image>
					</view>
					<view>退货退款</view>
				</view>
				 <textarea @confirm="getTextarea" confirm-type="done" class="textareaStyle" placeholder-style="color:##555555;font-size:28rpx;" placeholder="请输入退款理由"/>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				defaultAddFlag:true,
				// 交易状况完成 0 ：'待付款 1 ','待发货 2 ','待收货 3'
				transactionNum:4,
				refundMaskFlag:false,
				refundWay:false,
				returnGoods:false,
				textAreaValue:'',
				titleActiveIndex:''
				}
		},
		onLoad(options){
			console.log(this.titleActiveIndex)
			this.setData(options);
		},
		methods:{
			getTextarea(e){
				this.textAreaValue=e.detail.value;
				// console.log(e.detail.value)
			}
		}
	}			
</script>

<style scoped lang="scss">
 @import "../../../static/scss/common.scss";
 %bottoms{
 	width: 750rpx;
 	padding: 0rpx 30rpx;
 	box-sizing: border-box;
 	height: 130rpx;
 	display: flex;
 	justify-content: flex-end;
 	align-items: center;
 	color: #000000;
 	font-size: 26rpx;
    border-top:20rpx solid #f2f2f2;
 	border-bottom:20rpx solid #f2f2f2;
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
 .uni-orderDetail{
	 background-color: #f2f2f2;
	 height: 100rpx;
	 position: relative;
	 left:0rpx;
	 top:0rpx;
	 .contentBox{
		 background-color: #fff;
		 .uni-bottoms{
			 @extend %bottoms;
			 border-bottom: 0rpx solid #fff;
			 border-top: 0rpx solid #fff;
			 height: 190rpx;;
		 }
		 .uni-title{
			 width: 750rpx;
			 height: 172rpx;
			 position: relative;
			 left:0rpx;
			 top:0rpx;
			 .imgBgRed{
				 display: block;
				 width: 750rpx;
				 height: 172rpx;;
			 }
			 .titleBox{
				 position: absolute;
				 left:0rpx;
				 top:0rpx;
				 width: 750rpx;
				 height: 172rpx;
				 display: flex;
				 align-items: center;
				 justify-content: space-between;
				 padding:0rpx 75rpx;
				 box-sizing: border-box;
				 .filed{
					 color: #FFFFFF;
					 font-size: 30rpx;
					 font-weight: bold;
				 }
				 .small{
					 font-size: 24rpx;
					 font-weight: normal;
					 margin-top: 15rpx;;
				 }
				 .signalLogo{
					 display: block;
					 width: 76rpx;
					 height: 76rpx;
				 }
			 }
		 }
	 }
 }
 .addressBox{
     .list{
		 width: 750rpx;
		 height: 170rpx;
		 background-color: #fff;
		 display: flex;
		 flex-direction: column;
		 padding:30rpx;
		 box-sizing: border-box;
		 justify-content: space-between;
		 margin-bottom:10rpx;
		 .uni-bottom{
			 color: #222222;
			 font-size: 26rpx;
		 }
		 .uni-top{
			 display: flex;
			 font-size: 26rpx;
			 align-items: center;
			 height: 60rpx;
			 .left{
				 color: #222222;
			 }
			 .center{
				 color: #888888;
				 margin:0rpx 25rpx;
			 }
			 .wuse{
				background: #FFFFFF;
				border: 2rpx solid #B6B6B6;
				color: #B6B6B6;
			 }
			 .right{
				width: 100rpx;
				text-align: center;
				height: 40rpx;
				line-height:40rpx;
				border-radius: 30rpx;
				font-size: 28rpx;
			 }
			 .active{
				color: #FF666C;
				background-color: #FFE2E3;
				border: 2rpx solid #FF666C;	 
		   }
		 }
	 }
 }
 .mainContentBox{
	 .uni-bottom{
	 	 @extend  %bottoms;
	 }
	 .orderList{
		
		 .uni-content{
			 width: 750rpx;
			 padding: 0rpx 30rpx;
			 box-sizing: border-box;
		 
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
		 			
		 		}
		 	}
		 }
	 }
 }
 .uni-details{
	 
	 .list{
		 width: 750rpx;
		 height: 90rpx;
		 line-height: 90rpx;
		 display: flex;
		 justify-content: space-between;
		 padding:0rpx 30rpx;
		 box-sizing: border-box;
		 align-items: center;
		 color: #000000;
		 font-size: 26rpx;;
		 .active{
			 color: #FF0000;
		 }
	 }
 }
 .uni-remarks{
	 width: 690rpx;
	 height: 100rpx;
	 line-height: 100rpx;
	 display: flex;
	 padding:0rpx 30rpx;
	 
	 // justify-content: space-between;
	 color: #000000;
	 font-size: 26rpx;
	 border-top: 15rpx solid #f2f2f2;
	 border-bottom: 50rpx solid #f2f2f2;
	 .filed{
		 margin-right: 30rpx;
	 }
 }
 .refundMoneyDialog{
	 @extend  %maskBox;
 }
 .refundMoneyBox{
	 position: fixed;
	 left:0rpx;
	 bottom:0rpx;
	 z-index:30;
	 background-color: #fff;;
	 width: 750rpx;
	 padding: 0rpx 30rpx;
	 box-sizing: border-box;
	 padding-bottom:45rpx;
	 .titleBox{
		height: 80rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 28rpx;
		color: #888888;;
		 .confirmBox{
			 color: #FF9A9E;;
		 }
	 }
	 .textareaStyle{
		 width: 690rpx;
		 height: 382rpx;
		 padding:15rpx ;
		 box-sizing: border-box;
		 background: #F3F3F3;
		 border-radius: 8rpx;
	 }
	 .chioceBox{
		 
		 .list{
			height: 90rpx;
			display: flex;;
			align-items: center;
			color: #222222;
			font-size: 26rpx;;
			.imgBox{
				width: 54rpx;
				height: 54rpx;
			}
			.imgs{
				 display: block;
				 width: 34rpx;
				 height: 34rpx;
				 margin-top: 10rpx;
			 }
		 }
		 
	 }
	 
 }
</style>
