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
				<view class="list" v-for="(item,index) in msgList" :key="index" @tap.stop="jumpDetail(item.order_sn)">
					<view class="uni-titles">
						<view class="left">订单编号  {{item.order_sn}}</view>
						<view class="right" v-if="item.return_status==1">售后</view>
					    <view class="right" v-if="item.return_status==2">退款中</view>
						<view class="right" v-if="item.return_status==3">退款成功</view>
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
					<view class="uni-timeBox" >
						<view class="timevalue">{{item.create_time}}</view>
					    <view class="field style1" @tap.stop="refundMaskFlag=true,indexFlag=index">退款退货 </view>
						<!-- <view class="field">退款 </view> -->
					</view>
					
				</view>
			</view>
		</view>	
		<!-- 退款的弹框 -->
		<view class="refundMoneyDialog" v-if="refundMaskFlag"  @tap.stop="refundMaskFlag=false"></view>
		<view class="refundMoneyBox"  v-if="refundMaskFlag">
			<view class="titleBox" @tap.stop="refundMaskFlag=false">
				<view class="cancelBox">取消</view>
				<view class="confirmBox" @tap.stop="btnSubmit">确认</view>
			</view>
			<view class="chioceBox">
				 <view class="list">
					  <view class="field">物流名称</view>
					  <input v-model="expressName" placeholder="请输入物流名称" />
				 </view>
				 <view class="list">
					  <view class="field">物流单号</view>
					  <input v-model="expressCode" placeholder="请输入物流单号" />
				 </view>
				 <textarea v-model="textValues" confirm-type="done" class="textareaStyle" placeholder-style="color:##555555;font-size:28rpx;" placeholder="请输入退款理由"/>
			</view>
		</view>
		<view class="showtips" v-if="signalFlag">{{signalMsg}}</view>
	</view>
</template>

<script>
	import app from '../../../App.vue'
	export default {
		data() {
			return {
				pages:1,
                pageV:1,
				msgList:[],
				refundMaskFlag:false,
				indexFlag:1,//选择的是哪一个
				textValues:'',
				expressName:'',//物流名称
				expressCode:'',//物流单号
				signalFlag:false,
				signalMsg:''
			}
		},
		onLoad(){
			this.getMsg()
		},
		onReachBottom(){
			if(this.pagesV==0){
				this.pages+=1;
				this.getMsg();
			}
		},
		methods: {
			
			getMsg(){
				let that=this;
				that.$http.post('/mini/v1/user/orderlist',{
					 page:that.pages,
					 status:4
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
			jumpDetail(values){
				 uni.navigateTo({
				 	url:'/pages/personCenter/myOrder/orderDetail?order_sn='+values
				 })
			},
			btnSubmit(){
				console.log(this.textValues)
				let that=this;
				if(that.expressName=='' ||that.expressCode=='' ){
					that.signalFlag=true ;
					that.signalMsg='补充物流相关信息';
					setTimeout(()=>{
							that.signalFlag=false
					},3000)
				}else{
					that.$http.post('mini/v1/goods/cancelGood',{
						order_sn:that.msgList[that.indexFlag].order_sn,
						return_remark:that.textValues
					},(res)=>{
						
					})
				}
				
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
		  // background: red;
		  opacity: 0.6;
		  border-radius: 16rpx;
		  position: fixed;
		  left:200rpx;
		  z-index:1000;
		  top:600rpx;
		  color: #FFFFFF;
		  font-size: 28rpx;
		  line-height: 100rpx;
		  text-align: center;
		  
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
				  display: flex;
				  color: #222222;
				  font-size: 26rpx;
				  align-items: center;
				  margin-bottom:30rpx;
				  .field{
					  margin-right: 30rpx;
					  color: #FF9A9E;
					  
				  }
			  } 
		 }
		 
	}
</style>
