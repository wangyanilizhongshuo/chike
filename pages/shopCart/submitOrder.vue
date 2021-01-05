<template>
	<view class="uni-submitOrder" :style="exDialogflag==true?'position:fixed;':'position:relative'">
		  <view class="uni-listBox">
			  <view class="uni-lists" v-for="(item,index) in 2" :key="index">
				  <view class="uni-titles">
					  <view class="uni-left">优琦口腔（下沙江滨店）</view>
					  <view class="uni-right">1.6km</view>
				  </view>
				  <view class="listBox" v-for="(item,index) in 2" :key="index">
					  <image class="leftImg" src="https://img9.51tietu.net/pic/2019-091200/ff1vqwm3q33ff1vqwm3q33.jpg"></image>
				      <view class="right">
						  <view class="uni-top1">超声波洗牙（豪华套餐）</view>
						  <view class="uni-top2">¥<text class="money">29.29</text></view>
					  </view>
				  </view>
				  <timePicker
				  	showType="yearToMinute"
				  	beginDate="1970-01-01"
				  	endDate="2030-12-31"
				  	beginTime="06:00:00"
				  	endTime="23:59:59"
				  	@btnConfirm="btnConfirm" 
				  >
				  <view class="timeBox ">
					  <view class="field">请选择预约时间</view>
					  <view class="rights">
						  <view class="values">{{timeValue}}</view>
						  <image class="arrow"  src="../../static/image/index-arrow-right.png"></image>
					  </view>
				  </view>
				  </timePicker>
				  <view class="ticketBox" @tap.stop="jump(1)">
					  <view class="uni-lefts">
						   <image class="logos" src="../../static/image/index-smallRedLogo.png"></image>
						   <text class="words">服务券</text>
					  </view>
					  <view class="uni-rights">
						  <view class="numss">2张可用 </view>
						  <image class="logos" src="../../static/image/index-arrow-right.png"></image>
					  </view>
				  </view>
				  <view class="ticketBox">
					  <view class="uni-lefts">
						   <image class="logos" src="../../static/image/index-diamond.png"></image>
						   <text class="words">可用290积分抵用2.9元</text>
					  </view>
					  <view class="uni-rights">
						  <!-- <view class="numss">2张可用 </view> -->
						  <image  v-if="useJFFlag" class="logos" src="../../static/image/shopCart-btnActive.png"></image>
						  <image v-if="!useJFFlag" class="logos" src="../../static/image/shopCart-btn.png"></image>
					  </view>
				  </view>
			  </view>
		  </view>
		  <view style="width: 750rpx;height: 140rpx;"></view>
		 <view class="footerBox">
		  	<view class="monValBox">实付金额：¥47.0</view>
		  	<view class="payBox"  @tap.stop="payFlag=true">结算</view>
		  </view>
		  
		  <!-- //支付的商品 -->
		  <view class="payBox-mask" v-if="payFlag" @tap.stop="payFlag=false"></view>
		  <view class="pay-box" v-if="payFlag">
		  	<view class="title" @tap.stop="payFlag=false">
		  		<text class="field">选择付款方式</text>
		  		<image class="cancel" src="../../static/image/cancel.png"></image>
		  	</view>	
		      <view class="contents">
		  			<view class="moneyBox"> ¥<text class="mon">5555</text></view>
		              <view class="choice-box">
		  				<view class="list" @tap.stop="payWayClick(1)">
		  					<view class="left" >
		  						<image class="imgs" src="../../static/image/money-logo.png"></image>
		  						<text class="field">余额</text>
		  					</view>
		  					<image class="imgss"  v-if="!extraFlag"  src="../../static/image/shopCart-btn.png" ></image>
		  					<image class="imgss" v-if="extraFlag" src="../../static/image/shopCart-btnActive.png" ></image>
		  				</view>
		  				<view class="list" @tap.stop="payWayClick(2)">
		  					<view class="left">
		  						<image class="imgs" src="../../static/image/wechat-logo.png"></image>
		  						<text class="field">微信</text>
		  					</view>
		  					<image class="imgss" v-if="!wxFlag" src="../../static/image/shopCart-btn.png" ></image>
		  					<image class="imgss"  v-if="wxFlag" src="../../static/image/shopCart-btnActive.png" ></image>
		  				</view>
		  				<view class="btnss" @tap.stop="payBtn">确定</view>
		  			</view>      
		  	</view>
		  </view>
		  <!-- 余额支付的盒子 -->
		  <view class="wxPayBoxMask" v-if="exDialogflag" @tap.stop="exDialogClick"></view>
		  <view class="wxPayBox" v-if="exDialogflag">
		  	<view class="titleBox" @tap.stop="exDialogClick">
		  		<image class="cancel" src="../../static/image/cancel.png"></image>
		  	</view>
		  	<view class="PayTitles">下沙口腔医院</view>
		  	<view  class="monVlue">4346</view>
		  	<view class="inputPsd">请输入交易密码</view>
		  	 <view style="margin-left:49rpx;" class="item" @tap='KeyboarOpen'>
		  	      <password-input :numLng='exPassword'></password-input>
		  	 </view>
		  	 <number-keyboard tabBar ref='KeyboarHid' @input='getPsd' psdLength='6'></number-keyboard>
		  </view>
	</view>
</template>

<script>
	import timePicker from '@/components/wing-time-selector/wing-time-selector.vue';
	// https://ext.dcloud.net.cn/plugin?id=1770
	import numberKeyboard from '@/components/number-keyboard/number-keyboard.vue'
	import passwordInput from '@/components/password-input/password-input.vue'
	export default {
		 data () {
			return { 
				useJFFlag:true,
				timeValue:'',
				payFlag:false,
				extraFlag:false,
				wxFlag:false,
				// 余额支付,输入密码
				exDialogflag:false,//弹框
				exPassword: "", //输入的内容
				
				}
		 },
		 onLoad(){
			 
		 },
		 components:{
		 	timePicker,
			numberKeyboard,
			passwordInput
		 },
		 methods:{
			 jump(type){
				 if(type ==1){
					 uni.navigateTo({
					 	url:'/pages/shopCart/ticket'
					 })
					 
				 }
			 },
			 btnConfirm(e){
			 	e.month=e.month.padStart(2,0);
			 	e.day=e.day.padStart(2,0);
			 	e.hour=e.hour.padStart(2,0);
			 	e.minute=e.minute.padStart(2,0);
			 	this.timeValue=e.year+'-'+e.month+'-'+e.day+' '+e.hour+':'+e.minute;
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
			 	this.payFlag=false;
			 	// 微信付款
			 	if(that.wxFlag){
			 	}
			 	//余额付款
			 	else if(that.extraFlag){
			 		//余额弹框
			 		this.exDialogflag=true;
			 	}
			 },
			 // 余额 支付
			 KeyboarOpen(e) {
			        this.$refs.KeyboarHid.open();
			 },
			 //获取密码
			 getPsd(val){
			 	this.exPassword = val;
			 				// 密码输入六位数字的时候,弹窗关闭,可请求接口
				if(this.exPassword.length ==6){
					 this.$refs.KeyboarHid.close();
				}
			 },
			 exDialogClick(){
			 	 this.exDialogflag=false;
			 	 this.$refs.KeyboarHid.close();
			 }
			 
		 }
	}
</script>

<style scoped lang="scss"> 
    @import "../../static/scss/common.scss";
	// @include ellipsis(1);
	.uni-submitOrder{
		background-color: #f2f2f2;
		height: 100vh;
		// position: relative;
		left:0rpx;
		top:0rpx;
		
		.uni-listBox{
			.uni-lists{
				width: 750rpx;
				padding:27rpx 30rpx 37rpx;
				box-sizing: border-box;
				background-color: #fff;
				.uni-titles{
					display: flex;
					justify-content: space-between;
					margin-bottom: 35rpx;
					.uni-left{
						color: #000000;
						font-size: 28rpx;
						font-weight: bold;
					}
					.uni-right{
						color: #555555;
						font-size: 24rpx;;
					}
				}
				.listBox{
					width: 690rpx;
					display: flex;
					margin-bottom: 40rpx;
					.leftImg{
						display: block;
						width: 150rpx;
						height: 150rpx;
						margin-right:40rpx;
						border-radius: 8rpx;
					}
					.right{
						display: flex;
						height: 150rpx;
						flex-direction: column;
						justify-content: space-between;
						.uni-top1{
							color: #000000;
							font-size: 28rpx;
							font-weight: bold;
							@include ellipsis(1);
						}
						.uni-top2{
							color: #FF0000;
							font-size: 24rpx;
							font-weight: bold;
							.money{
								font-size: 32rpx;
							}
						}
					}
					
				}
				
			}
			
		}
	}
.timeBox{
	display: flex;
	height: 98rpx;
	align-items: center;
	justify-content: space-between;
	font-size: 26rpx;
	.field{
		color: #222222;
	}
	.rights{
		display: flex;
		align-items: center;
		.values{
			color: #454545;
			margin-right: 15rpx;
		}
		.arrow{
			display: block;
			width: 30rpx;
			height: 30rpx;
		}
		
	}
	
}
 .footerBox{
		 width: 690rpx;
		 position: fixed;
		 left:30rpx;
		 bottom: 0rpx;
		 display: flex;
		 text-align: center;
		background-color: #fff;
		align-items: center;
		color: #fff;
		height: 140rpx;
		 .monValBox{
			 width: 450rpx;
			 height: 90rpx;
			 line-height: 90rpx;
			 background: #545454;
			 border-radius: 45rpx 0rpx 0rpx 45rpx;
		 }
		 .payBox{
			 width: 240rpx;
			 height: 90rpx;
			 line-height: 90rpx;
			 background: #FF9A9E;
			 border-radius: 0rpx 45rpx 45rpx 0rpx;
		 }
	 }
.ticketBox{
	display: flex;
	height: 98rpx;
	justify-content: space-between;
	align-items: center;
	.uni-lefts{
		display: flex;
		align-items: center;
		.logos{
			display: block;
			width: 40rpx;
			height: 40rpx;
			margin-right: 13rpx;
		}
		.words{
			color: #222222;
			font-size: 26rpx;;
		}
	}
	.uni-rights{
		display: flex;
		align-items: center;
		.numss{
			color: #FF0A0A;
			font-size: 26rpx;
			margin-right:13rpx;
		}
		.logos{
			display: block;
			width: 34rpx;
			height: 34rpx;
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
  	position: absolute;
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
</style>
