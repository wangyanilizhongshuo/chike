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
				<view class="list" v-for="(item,index) in msgList" :key="index" @tap.stop="jumpDetail(item.order_sn)">
					<view class="uni-titles">
						<view class="left">订单编号  {{item.order_sn}}</view>
					    <!-- <view class="right">交易完成</view> -->
					</view>
					<view class="uni-content" v-for="(item1,index1) in item.goods" :key="index1">
						<image class="uni-left" :src="item1.goods_img"></image>
						<view class="uni-right">
							<view class="uni-first">{{item1.goods_name}}  </view>
                            <view class="uni-second">¥<text  class="money">{{item1.user_price}}</text></view>
							<view class="uni-third">
								<view class="uniLeft">{{item1.rule_name}}：{{item1.rule_values}}</view>
								<view class="uniRight">×{{item1.cart_num}}</view>
							</view>
						</view>
					</view>
					<view class="uni-bottom">
						<view class="allNum">共计{{item.count_num}}件商品</view>
						<view  class="allMoney">实付款：<text class="mon">￥{{item.total_price}}</text></view>
					</view>
					<view class="uni-bottom" v-if="item.status==1">
						<view class="cancel style1" >取消订单</view>
						<view class="toPay style1">去支付</view>
					</view>
					<view class="uni-bottom" v-if="item.status==3">
						<view class="toPay style1">确认收货</view>
					</view>
					<view class="uni-bottom" v-if="item.status==2">
						<view class="transClose">待发货</view>
					</view>
					<view class="uni-bottom" v-if="item.status==-1">
						<view class="transClose ">交易关闭</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 待付款 -->
		<view  v-if="titleActiveIndex==1" class="bigBox"  >
			<view class="listBox">
				<view class="list" v-for="(item,index) in msgList" :key="index" @tap.stop="jumpDetail(item.order_sn)">
					<view class="uni-titles">
						<view class="left">订单编号  {{item.order_sn}}</view>
					    <view class="right">待付款</view>
					</view>
					<view class="uni-content" v-for="(item1,index1) in item.goods" :key="index1">
						<image class="uni-left" :src="item1.goods_img"></image>
						<view class="uni-right">
							<view class="uni-first">{{item1.goods_name}}  </view>
			                <view class="uni-second">¥<text  class="money">{{item1.user_price}}</text></view>
							<view class="uni-third">
								<view class="uniLeft">{{item1.rule_name}}：{{item1.rule_values}}</view>
								<view class="uniRight">×{{item1.cart_num}}</view>
							</view>
						</view>
					</view>
					<view class="uni-bottom">
						<view class="allNum">共计{{item.count_num}}件商品</view>
						<view  class="allMoney">实付款：<text class="mon">￥{{item.total_price}}</text></view>
					</view>
					<view class="uni-bottom">
						<view class="cancel style1" @tap.stop="cancelOrder(item.order_sn)">取消订单</view>
						<view class="toPay style1">去支付</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 待发货 -->
		<view  v-if="titleActiveIndex==2" class="bigBox" >
			<view class="listBox">
				<view class="list" v-for="(item,index) in msgList" :key="index" @tap.stop="jumpDetail(item.order_sn)">
					<view class="uni-titles">
						<view class="left">订单编号  {{item.order_sn}}</view>
					    <view class="right">待发货</view>
					</view>
					<view class="uni-content" v-for="(item1,index1) in item.goods" :key="index1">
						<image class="uni-left" :src="item1.goods_img"></image>
						<view class="uni-right">
							<view class="uni-first">{{item1.goods_name}}  </view>
			                <view class="uni-second">¥<text  class="money">{{item1.user_price}}</text></view>
							<view class="uni-third">
								<view class="uniLeft">{{item1.rule_name}}：{{item1.rule_values}}</view>
								<view class="uniRight">×{{item1.cart_num}}</view>
							</view>
						</view>
					</view>
					<view class="uni-bottom">
						<view class="allNum">共计{{item.count_num}}件商品</view>
						<view  class="allMoney">实付款：<text class="mon">￥{{item.total_price}}</text></view>
					</view>
					<view class="uni-bottom">
						<view class="toPay style1" @tap.stop="refundMoney(item.order_sn)">退款</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 待收货 -->
		<view  v-if="titleActiveIndex==3" class="bigBox">
			<view class="listBox">
				<view class="list" v-for="(item,index) in msgList" :key="index" @tap.stop="jumpDetail(item.order_sn)">
					<view class="uni-titles">
						<view class="left">订单编号  {{item.order_sn}}</view>
					    <view class="right">待收货</view>
					</view>
					<view class="uni-content" v-for="(item1,index1) in item.goods" :key="index1">
						<image class="uni-left" :src="item1.goods_img"></image>
						<view class="uni-right">
							<view class="uni-first">{{item1.goods_name}}  </view>
			                <view class="uni-second">¥<text  class="money">{{item1.user_price}}</text></view>
							<view class="uni-third">
								<view class="uniLeft">{{item1.rule_name}}：{{item1.rule_values}}</view>
								<view class="uniRight">×{{item1.cart_num}}</view>
							</view>
						</view>
					</view>
					<view class="uni-bottom">
						<view class="allNum">共计{{item.count_num}}件商品</view>
						<view  class="allMoney">实付款：<text class="mon">￥{{item.total_price}}</text></view>
					</view>
					<view class="uni-bottom">
						<view class="toPay style1" @tap.stop="receiveGoods(item.order_sn)">确认收货</view>
					</view>
				</view>
			</view>
		</view>
		<view class="showtips" v-if="tipflag">{{tipMsg}}</view>
		</view>
</template>

<script>
	import app from '../../../App.vue'
	export default {
		data() {
			return {
				titleActiveIndex:0,
				titleList:['全部','待付款','待发货','待收货'],
				pages:1,
				pagev:1,
				msgList:[],
				types:1,
				tipflag:false,
				tipMsg:''
			}
		},
		onLoad(options){
			this.setData(options)
			this.getOrderList();//获取 数据
			
		},
		onReachBottom(){
			if(this.pagesV==0){
				this.pages+=1;
				this.getOrderList();
			}
		},
		methods: {
			// 头部点亮
			getTitleActive(index){
				this.titleActiveIndex=index;
				this.types=index;
				this.msgList=[];
				this.pages=1;
				this.getOrderList()				
				console.log(index)
			},
			jumpDetail(values){
				uni.navigateTo({
					url:'/pages/personCenter/myOrder/orderDetail?transactionNum='+this.titleActiveIndex+'&order_sn='+values
				})
			},
			
			getOrderList(){
				let that =this;
				that.$http.post('mini/v1/user/orderlist',{
					page:that.pages,
					status:Number(that.types) 
				},(res)=>{
					if(res.state==0){
						that.pagesV=res.data.is_request;
						if(res.data.is_request==0){
							let aa = res.data.list;
							aa.map((res1)=>{
								res1.goods.map((res2)=>{
									res2.goods_img=app.globalData.imgPrefixUrl+res2.goods_img
								})
							})
							let bb = that.msgList;
							that.msgList = bb.concat(aa);
						}
						
						
					}
				})
			},
			cancelOrder(codes){
			     let that=this;
				uni.showModal({
				    title: '提示',
				    content: '取消订单？',
				    success: function (res) {
						 if (res.confirm) {
						            that.$http.post('mini/v1/goods/cancelGood',{
										order_sn:codes
									},(res1)=>{
										if(res1.state==0){
											that.tipflag=true ;
											that.tipMsg='订单取消成功';
											setTimeout(()=>{
													that.tipflag=false
											},3000)
											that.msgList=[]
				                           that.getOrderList();
										}
									})
							} else if (res.cancel) {
								console.log('用户点击取消');
							}
						
					}
				})
				
			},
			receiveGoods(codes){
				let that=this;
				uni.showModal({
				    title: '提示',
				    content: '确认收货？',
				    success: function (res) {
						 if (res.confirm) {
								that.$http.post('mini/v1/user/confirm',{
									order_sn:codes
								},(res1)=>{
									if(res1.state==0){
										that.tipflag=true ;
										that.tipMsg='收货成功';
										setTimeout(()=>{
												that.tipflag=false
										},2000)
										that.msgList=[]
										that.getOrderList();
									}
								})
							} else if (res.cancel) {
								console.log('用户点击取消');
							}
						
					}
				})
			},
			refundMoney(orders){
				let that=this;
				 uni.showModal({
				     title: '提示',
				     content: '确认退款?',
				     success: function (res) {
				         if (res.confirm) {
				             that.$http.post('mini/v1/goods/cancelGood',{
				             	order_sn:orders,
				             },(res1)=>{
								    uni.showToast({
								        title: '申请退款成功',
								        duration: 2000
								    });
				             	
				             })
				         } else if (res.cancel) {
				             console.log('用户点击取消');
				         }
				     }
				 });
				
				
				
			}
			
		}
	}
</script>

<style scoped lang="scss">
 @import "../../../static/scss/common.scss";
// @include ellipsis(1);
 .showtips{
 	  width: 350rpx;
 	  height: 100rpx;
 	  background: #000000;
 	  opacity: 0.6;
 	  border-radius: 16rpx;
 	  position: fixed;
 	  left:200rpx;
 	  z-index:1000;
 	  top:400rpx;
 	  color: #FFFFFF;
 	  font-size: 28rpx;
 	  line-height: 100rpx;
 	  text-align: center;
 	  
 }
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
	.transClose{
	   margin-left: 20rpx;
	}
}
</style>
