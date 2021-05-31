<template>
	<view class="uni-orderDetail">
		<view class="contentBox">
			<view class="uni-title">
				<image  class="imgBgRed" src="https://chikehometest.hzbixin.cn/upload/images/feedback/20210428/85748b9b594432e3ed487aed65e70273.png"></image>
			   <!-- <view class="titleBox" v-if="transactionNum==0">

				</view> -->
				<view class="titleBox" v-if="msgDetail.status==1">
					<view class="filed">
						<view>待付款</view>
					</view>
				    <image class="signalLogo" src="https://chikehometest.hzbixin.cn/upload/images/feedback/20210428/62d7ab7f2d760d7736c80b934ba405a8.png"></image>
				</view>
				<view class="titleBox" v-if="msgDetail.status==2">
					<view class="filed">待发货</view>
				    <image class="signalLogo" src="https://chikehometest.hzbixin.cn//upload/images/feedback/20210428/1f91aa43123576154e3bca91fcfb1935.png"></image>
				</view>
				<view class="titleBox" v-if="msgDetail.status==3">
					<view class="filed">待收货</view>
				    <image class="signalLogo" src="https://chikehometest.hzbixin.cn/upload/images/feedback/20210428/514101feef98d4ac2f417da8eae47b95.png"></image>
				</view>
				<view class="titleBox" v-if="msgDetail.status==4">
					<view class="filed">售后 </view>
				    <image class="signalLogo" src="https://chikehometest.hzbixin.cn/upload/images/feedback/20210428/514101feef98d4ac2f417da8eae47b95.png"></image>
				</view>
				<view class="titleBox" v-if="msgDetail.status==10">
					<view class="filed">已完成</view>
				    <image class="signalLogo" src="https://chikehometest.hzbixin.cn/upload/images/feedback/20210428/514101feef98d4ac2f417da8eae47b95.png"></image>
				</view>
				<view class="titleBox" v-if="msgDetail.status==6">
					<view class="filed">售后成功</view>
				    <image class="signalLogo" src="https://chikehometest.hzbixin.cn/upload/images/feedback/20210428/514101feef98d4ac2f417da8eae47b95.png"></image>
				</view>
				<view class="titleBox" v-if="msgDetail.status==7">
					<view class="filed">售后失败</view>
				    <image class="signalLogo" src="https://chikehometest.hzbixin.cn/upload/images/feedback/20210428/514101feef98d4ac2f417da8eae47b95.png"></image>
				</view>
				<view class="titleBox" v-if="msgDetail.status==8">
					<view class="filed">售后中</view>
				    <image class="signalLogo" src="https://chikehometest.hzbixin.cn/upload/images/feedback/20210428/514101feef98d4ac2f417da8eae47b95.png"></image>
				</view>
			</view>
			<view class="addressBox">
				<view class="list">
					<view class="uni-top">
						<view class="left">{{msgDetail.real_name}}</view>
						<view class="center">{{msgDetail.phone}}</view>
					</view>
					<view class="uni-bottom">
						{{msgDetail.address}}
					</view>
				</view>
			</view>
			<view class="mainContentBox">
				<view class="orderList" v-for="(item,index) in msgDetail.goods" :key="index">
					<view class="uni-content" >
						<image class="uni-left" :src="item.goods_img"></image>
						<view class="uni-right">
							<view class="uni-first">{{item.goods_name}} </view>
					        <view class="uni-second">¥<text  class="money">{{item.user_price}}</text></view>
							<view class="uni-third">
								<view class="uniLeft">{{item.rule_name}}：{{item.rule_values}}</view>
								<view class="uniRight">×{{item.cart_num}}</view>
							</view>
						</view>
					</view>
					
				</view>
					<view class="uni-bottom">
						<view class="allNum">共计2件商品</view>
						<view  class="allMoney">实付款：<text class="mon">￥{{msgDetail.total_price}}</text></view>
					</view>
					<view  class="uni-details">
						<view class="list">
							<view class="uni-left">订单编号</view>
							<view class="uni-right">{{msgDetail.order_sn}}</view>
						</view>
						<view class="list">
							<view class="uni-left">付款时间</view>
							<view class="uni-right">{{msgDetail.pay_time}}</view>
						</view>
						<view class="list">
							<view class="uni-left">支付方式</view>
							<view class="uni-right" v-if="msgDetail.pay_type==1">微信支付</view>
							<view class="uni-right" v-if="msgDetail.pay_type==2">余额支付</view>
						</view>
						
						<view class="list">
							<view class="uni-left">运费</view>
							<view class="uni-right">¥0</view>
						</view>
						<view class="list">
							<view class="uni-left">优惠券</view>
							<view class="uni-right active">-¥{{msgDetail.coupon_dk_price}}</view>
						</view>
						<view class="list">
							<view class="uni-left">积分抵扣</view>
							<view class="uni-right active">-¥{{msgDetail.integral_dk_price}}</view>
						</view>
					</view>
					<view class="uni-remarks">
						<view class="filed">备注:   </view>
						<view class="remarks">{{msgDetail.goods_remark }}</view>
					</view>
				</view>
			
				<view class="uni-bottoms" v-if="msgDetail.status==1">
					<view class="cancel style1"  @tap.stop="cancelOrder(msgDetail.order_sn)">取消订单</view>
					<view class="toPay style1" @tap.stop="payFlag=true">去支付</view>
				</view>
				<view class="uni-bottoms" v-if="msgDetail.status==3">
					<view class="cancel style1" @tap.stop="refundGoodMoney(msgDetail.order_sn)">退货退款</view>
					<view class="toPay style1" @tap.stop="receiveGoods(msgDetail.order_sn)">确认收货</view>
				</view>
			
				<view class="uni-bottoms"  v-if="msgDetail.status==2" style="height: 70rpx;margin:25rpx 0rpx;">
					<view class="cancel style1" @tap.stop="refundMoney(msgDetail.order_sn)">退款</view>
				</view>
				
			</view>
		
		
		<!-- //支付的商品 -->
		<view class="payBox-mask" v-if="payFlag" @tap.stop="payFlag=false"></view>
		<view class="pay-box" v-if="payFlag">
			<view class="title" @tap.stop="payFlag=false">
				<text class="field">选择付款方式</text>
				<image class="cancel" src="../../../static/image/cancel.png"></image>
			</view>	
		    <view class="contents">
					<view class="moneyBox"> ¥<text class="mon">{{msgDetail.total_price}}</text></view>
		            <view class="choice-box">
						<view class="list" @tap.stop="payWayClick(1)">
							<view class="left" >
								<image class="imgs" src="../../../static/image/money-logo.png"></image>
								<text class="field">余额</text>
							</view>
							<image class="imgss"  v-if="!extraFlag"  src="../../../static/image/shopCart-btn.png" ></image>
							<image class="imgss" v-if="extraFlag" src="../../../static/image/shopCart-btnActive.png" ></image>
						</view>
						<view class="list" @tap.stop="payWayClick(2)">
							<view class="left">
								<image class="imgs" src="../../../static/image/wechat-logo.png"></image>
								<text class="field">微信</text>
							</view>
							<image class="imgss" v-if="!wxFlag" src="../../../static/image/shopCart-btn.png" ></image>
							<image class="imgss"  v-if="wxFlag" src="../../../static/image/shopCart-btnActive.png" ></image>
						</view>
						<view class="btnss" @tap.stop="payBtn">确定</view>
					</view>      
			</view>
		</view>
		
		<!-- 余额支付的盒子 -->
		<view class="wxPayBoxMask" v-if="exDialogflag" @tap.stop="exDialogClick"></view>
		<view class="wxPayBox" v-if="exDialogflag">
			<view class="titleBox" @tap.stop="exDialogClick">
				<image class="cancel" src="../../../static/image/cancel.png"></image>
			</view>
			<!-- <view class="PayTitles">下沙口腔医院</view> -->
			<view  class="monVlue" v-if="msgDetail.total_price">￥{{msgDetail.total_price}}</view>
			<view class="inputPsd">请输入交易密码</view>
			 <view style="margin-left:49rpx;" class="item" @tap='KeyboarOpen'>
			      <password-input :numLng='exPassword'></password-input>
			 </view>
			 <number-keyboard tabBar ref='KeyboarHid' @input='getPsd' psdLength='6'></number-keyboard>
		</view>
		<!-- 退货退款 -->
		<!-- 退款的弹框 -->
		<view class="refundMoneyDialog" v-if="refundMaskFlag"  @tap.stop="refundMaskFlag=false,visible=false"></view>
		<view class="refundMoneyBox"  v-if="refundMaskFlag" @tap.stop="visible=false">
			<view class="titleBox" @tap.stop="refundMaskFlag=false">
				<view class="cancelBox" @tap.stop="visible=false">取消</view>
				<view class="confirmBox" @tap.stop="refundGoodSubmit">确认</view>
			</view>
			<view class="chioceBox">
				<!-- <view class="lists"  @tap.stop="refundFlag=(!refundFlag),refundGoodFlag=false,expressCode='',expressName='',wuCode=''">
					<image class="imgs" v-if="refundFlag==false" src="../../../static/image/shopCart-btn.png"></image>
					<image class="imgs" v-if="refundFlag==true" src="../../../static/image/shopCart-btnActive.png"></image>
					<view class="fields">退款</view>
				</view> -->
				<view class="lists" @tap.stop="refundGoodFlag=(!refundGoodFlag),refundFlag=false">
					<image class="imgs" v-if="refundGoodFlag==false" src="../../../static/image/shopCart-btn.png"></image>
					<image class="imgs" v-if="refundGoodFlag==true" src="../../../static/image/shopCart-btnActive.png"></image>
					<view class="fields">退货退款</view>
				</view>
				
				 <textarea v-model="textValues" confirm-type="done" class="textareaStyle" placeholder-style="color:##555555;font-size:28rpx;" placeholder="请输入退款理由"/>
			</view>
		</view>
		<view class="showtips" v-if="tipflag">{{tipMsg}}</view>
	</view>
</template>

<script>
	import app from '../../../App.vue'
	// https://ext.dcloud.net.cn/plugin?id=1770
	import numberKeyboard from '@/components/number-keyboard/number-keyboard.vue'
	import passwordInput from '@/components/password-input/password-input.vue'
	export default {
		data() {
			return {
				defaultAddFlag:true,
				// 交易状况完成 0 ：'待付款 1 ','待发货 2 ','待收货 3'
				transactionNum:4,
				refundWay:false,
				returnGoods:false,
				textAreaValue:'',
				titleActiveIndex:'',
				order_sn:'',
				msgDetail:'',
				payFlag:false,//支付商品
				extraFlag:false,
				wxFlag:false,
				// 余额支付,输入密码
				exDialogflag:false,//弹框
				exPassword: "", //输入的内容
				wxPayFlags:false,//微信支付的flag
				tipflag:false,
				tipMsg:'',
				refundMaskFlag:false,
				expressName:'',//物流名称
				expressCode:'',//物流单号
				wuCode:'',//物流名称下面的code
				refundFlag:false,//退款
				textValues:'',
				refundGoodFlag:false,//退款退货\
				expressNameList:[],//物流公司的列表
				expressSecKey:'',//搜索物流的关键字
				refundGoodCode:'',
				is_pink:''
				}
		},
		onLoad(options){
			console.log(this.titleActiveIndex)
			this.setData(options);
			this.getMsg();
			
			
		},
		components: {
		      numberKeyboard,
		      passwordInput
		},
		methods:{
			getMsg(){
				let that=this;
				this.$http.post('mini/v1/user/mydetails',{
					order_sn:that.order_sn
				},(res)=>{
					if(res.state==0){
						that.msgDetail=res.data.list[0]
						console.log(res)
						that.msgDetail.goods.map(res=>{
							res.goods_img=app.globalData.imgPrefixUrl+res.goods_img
						})
					}
				})
			},
			// 点击余额切换
			payWayClick(type){
				if(type ==1){
					this.extraFlag=(!this.extraFlag);
				    this.wxFlag=false;
				}else if (type ==2){
					this.wxFlag=(!this.wxFlag);
					this.extraFlag=false;
				}
			},
			// 选择付款
			payBtn(){
				let that=this;
				// 选择支付方式的弹框
				// 微信付款
				if(that.wxFlag){
						that.payFlag=false;
						that.wxFlag=false;
						that.wxPayFlags=true;//微信支付的flag
						that.wxpays()
				}
				//余额付款
				else if(that.extraFlag){
					that.wxPayFlags=false;//微信支付的flag
					that.payFlag=false;
						// 选中的小按钮
						//余额弹框
						that.exDialogflag=true;
						that.exPassword ='';
						
						//余额弹框
								
				}
			},
			getPsd(val){
				this.exPassword = val;
							// 密码输入六位数字的时候,弹窗关闭,可请求接口
				if(this.exPassword.length ==6){
					 this.$refs.KeyboarHid.close();
					 this.extraPay()
				}
			},
			// 余额 支付
			KeyboarOpen(e) {
			       this.$refs.KeyboarHid.open();
			},
			//余额支付
			extraPay(){
					 let that=this;
					 let url2=''
					 if(that.is_pink==1){
					 	 url2='mini/v1/payment/comPay'
					 }else{
					 	url2='mini/v1/payment/orderpay'
					 }
					 that.$http.post(url2,{
						 order_sn:that.msgDetail.order_sn,
						 pay_price:that.msgDetail.total_price,
						 pay_type:2,
						 pay_password:that.exPassword
						 
					 },(res)=>{
						 if(res.state==0){
							  that.exDialogflag=false;
							  uni.redirectTo({
								url:'/pages/personCenter/myOpinion/opinionSuccess?typesName='+14
							  })
						 }else if(res.state==3){
							 that.exDialogflag=false;//弹窗关闭
							uni.showModal({
								title: '提示',
								content: '支付密码输入错误',
								confirmText:'重新输入',
								success: function (res) {
									if (res.confirm) {
										// 重新继续支付
										that.exPassword ='';
										that.exDialogflag=true;
									} else if (res.cancel) {
									  
									}
								}
							});
						}else if(res.state==1){
							that.exPassword='';
							that.exDialogflag=false;
							that.tipflag=true ;
							that.tipMsg=res.msg;
							setTimeout(()=>{
									that.tipflag=false
							},3000)
						}
					 })
			},
			//微信支付
			wxpays(){
				let url2='';
				 let callback = data => {
					// 发起微信支付
					this.wxPayment({
						result: data,
						success: data => {
								uni.redirectTo({
									url:'/pages/personCenter/myOpinion/opinionSuccess?typesName='+15
								})	
						},
						fail: data => {
							uni.redirectTo({
								url:'/pages/personCenter/myOpinion/opinionSuccess?typesName='+16
							})
						},
					});
				 };
				 if(this.is_pink==1){
					 url2='mini/v1/payment/comPay'
				 }else{
					 url2='mini/v1/payment/orderpay'
				 }
				  this.$http.post(url2,{
						 order_sn:this.msgDetail.order_sn,
						 pay_price:this.msgDetail.total_price,
						 pay_type:1
					 },(res)=>{
						 if(res.state==0){
							 let aa = res.data;
							  callback(aa);
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
													that.tipflag=false;
													uni.navigateBack()
											},3000)
											
											
										}
									})
							} else if (res.cancel) {
								console.log('用户点击取消');
							}
						
					}
				})
				
			},
			// 退款
			refundMoney(orders){
				let that=this;
				console.log('tuikuan')
				console.log(orders)
				 uni.showModal({
				     title: '提示',
				     content: '确认退款?',
				     success: function (res) {
				         if (res.confirm) {
				             that.$http.post('mini/v1/goods/cancelGood',{
				             	order_sn:orders,
								type:1,
								wang:3
				             },(res1)=>{
								    uni.showToast({
								        title: '申请退款成功',
								        duration: 2000
								    });
									setTimeout(()=>{
										uni.navigateBack()
									},2500)
				             	
				             })
				         } else if (res.cancel) {
				             console.log('用户点击取消');
				         }
				     }
				 });
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
				 									that.tipflag=false;
													uni.navigateBack()
				 							},2000)
				 							
				 						}
				 					})
				 				} else if (res.cancel) {
				 					console.log('用户点击取消');
				 				}
				 			
				 		}
				 	})
				 },
				refundGoodSubmit(){
					let that=this;
					if(that.refundGoodFlag==false && that.textValues==''){
						that.tipflag=true ;
						that.tipMsg='填写退款说明';
						setTimeout(()=>{
								that.tipflag=false;
								
						},3000)
					  return false
					}else if(that.refundGoodFlag==false  ){
						that.tipflag=true ;
						that.tipMsg='选择退款说明';
						setTimeout(()=>{
								that.tipflag=false;
								
						},3000)
						return false
					}
					else if(that.textValues==false  ){
						that.tipflag=true ;
						that.tipMsg='填写退款理由';
						setTimeout(()=>{
								that.tipflag=false;
								
						},3000)
						return false
					}
						that.$http.post('mini/v1/goods/cancelGood',{
							order_sn:that.refundGoodCode,
							return_remark:that.textValues,
							return_type:that.refundGoodFlag==true? '2':'1'
							
						},(res)=>{
							if(res.state==0){
								that.tipflag=true ;
								that.tipMsg='申请成功';
								that.refundMaskFlag=false;
								that.refundGoodFlag=false;
								that.refundFlag=false;
								setTimeout(()=>{
										that.tipflag=false;
										uni.navigateBack()				
								},2500)
								
							}
						})
					
					
				},
				refundGoodMoney(mes){
					this.refundMaskFlag=true;
					this.refundGoodCode=mes;
				}
			// // 去支付
			// goPay(){
				
			// }
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
 .payBox-mask{
 		@extend  %maskBox;
 }
 .pay-box{
 	width: 750rpx;
 	height: 530rpx;
 	padding-top:20rpx;
 	position: fixed;
 	left:0rpx;
 	bottom: 0rpx;
 	z-index:20;
 	background-color: #fff;
 	.title{
 		width: 750rpx;
 		height: 80rpx;
 		padding: 0rpx 30rpx;
 		box-sizing: border-box;
 		border-bottom:1rpx solid #f2f2f2;
 		text-align: center;
 		position: relative;
 		left:0rpx;
 		top:0rpx;
 		.field{
 			line-height: 80rpx;
 			color: #222222;
 			font-size: 28rpx;
 			
 		}
 		.cancel{
 			display: block;
 			height: 30rpx;
 			width: 30rpx;
 			position: absolute;
 			right:30rpx;
 			top: 20rpx;;
 		}
 	}
 	.contents{
 		width: 750rpx;
 		padding: 0rpx 30rpx;
 		box-sizing: border-box;
 		text-align: center!important;
 		color: #222;
 		.moneyBox{
 			width: 690rpx;
 			text-align: center;
 			height: 100rpx;
 			line-height: 100rpx;
 			font-size: 40rpx;
 			.mon{
 				font-size: 40rpx;
 			}
 		}
 		.choice-box{
 			.list{
 				width: 690rpx;
 				display: flex;
 				justify-content: space-between;
 				height: 80rpx;
 				align-items: center;
 				.left{
 					display: flex;
 					.imgs{
 						display: block;
 						width: 30rpx;
 						height: 30rpx;
 						margin-right:30rpx;
 					}
 					.field{
 						font-size: 28rpx;
 					}
 				}
 				.imgss{
 					display: block;
 					width: 34rpx;
 					height: 34rpx;
 				}
 			}
 			.btnss{
 				width: 560rpx;
 				height: 76rpx;
 				line-height: 76rpx;
 				text-align: center;
 				color: #fff;
 				border-radius: 30rpx;
 				background-color:#FF9A9E ;
 				position: absolute;
 				left: 95rpx;
 				bottom:20rpx;;
 			}
 		}
 	}
 	
 }
 .wxPayBoxMask{
 	@extend  %maskBox;
 }
 .wxPayBox{
 	width: 560rpx;
 	height: 520rpx;
 	position: fixed;
 	left:95rpx;
 	top:200rpx;
 	z-index:30;
     border-radius: 8rpx;
 	background-color: #fff;
 	text-align: center;
 	.titleBox{
 		width: 560rpx;
 		height: 100rpx;
 		line-height: 100rpx;
 		.cancel{
 			display: block;
 			width: 30rpx;
 			height: 30rpx;
 			position: absolute;
 		    top:35rpx;
 		    right:30rpx;
 		}
 	}
 	.PayTitles{
 		color: #000000;
 		font-size: 30rpx;
 	}
 	.monVlue{
 		width: 560rpx;
 		margin:10rpx 0rpx 30rpx;
 		font-size: 70rpx;;
 	}
 	.inputPsd{
 		margin-bottom: 30rpx;
 	}
 }

 .showtips{
 	  width: 350rpx;
 	  height: 100rpx;
 	  background: #000000;
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
 			  height: 60rpx;
 			  .field{
 				  width: 120rpx;
 				  color: #FF9A9E;
 				  
 			  }
 		  } 
 		  .list1{
 			
 			   .imgs{
 					  display: block;
 					  width: 30rpx;
 					  height: 30rpx;;
 			   }
 			  
 		  }
 		  .uni-input{
 			  
 		  }
 		 
 		  .lists{
 			  display: flex;
 			  color: #222222;
 			  font-size: 26rpx;
 			  align-items: center;
 			  margin-bottom:30rpx;
 			  .imgs{
 				  display: block;
 				  width: 34rpx;
 				  height: 34rpx;
 				  margin-right: 22rpx;;
 			  }
 			
 			  
 		  }
 	 }
 	 
 }

</style>
