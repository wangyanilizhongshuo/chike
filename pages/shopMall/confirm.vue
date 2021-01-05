<template>
	<view class="uni-MallConfirm">
		<view class="addressBox" @tap.stop="getAddress" v-if="!getAddFlag">
			<view class="fields">您还没有添加收货地址  点击这里添加</view>
			<image  class="addBg" src="http://zxyp.hzbixin.cn/files/43691608270274871.jpg"></image>
		</view>
		<view class="addressBox" @tap.stop="getAddress" v-if="getAddFlag">
			<view class="fields-box">
				<view class="uni-left">
					 <view class="uni-top">
					 	<view class="left">小王</view>
					 	<view class="center">15987456321</view>
					 	<view @tap.stop="defaultAddFlag=(!defaultAddFlag)" :class="defaultAddFlag==true?'active':'wuse'" class="right">默认</view>
					 </view>
					 <view class="uni-bottom">
					 	浙江省 杭州市 滨江区 龙腾花园5-8-603
					 </view>
					
				</view>
				<image class="uni-right" src="../../static/image/index-arrow-right.png"></image>
				
			</view>
			<image  class="addBg" src="../../static/image/divisingLine.png"></image>
		</view>
		<view class="goodBox">
			<image class="lefts" src="https://img9.51tietu.net/pic/2019-091200/ff1vqwm3q33ff1vqwm3q33.jpg"></image>
		    <view class="rights">
				<view class="uni-first">小巨蛋野樱莓雪齿亮白清新口气去渍去黄牙膏 氨基酸健齿炫齿按压泵头式液体牙160g </view>       
				<view class="uni-second">
					<!-- <view class="left">¥<text class="money">39.33</text></view>
					<view class="right">购买返20积分</view> -->
				</view>
				<view class="uni-third">
					<view class="left">规格：120ml</view>
					<view class="right">×1</view>
				</view>
			</view>
		</view>
		<view class="otherDetails"> 
			<view class="distributeBox">
				<view class="field">配送方式</view>
				<view class="rights"> 快递：¥0.00</view>
			</view>
			<view class="remarks">
				<view class="field">备注</view>
				<input  class="inputClass" v-model="remarkValue" placeholder="请输入备注信息" placeholder-style="text-align:right;color:#888;font-size:26rpx;"/>
			</view>
			<view class="goodBoxs">
				<view class="field">共计<text class="nums">1</text>件商品</view>
                <view class="rights"> 合计：<text class="moneys">¥49.9</text></view> 
			</view>
			<view class="consumerCouBoxs" @tap.stop="jumpsServer">
				<view class="field">
					<image class="logos" src="../../static/image/index-smallRedLogo.png"></image>
				     <text class="words">服务券</text>
				</view>
			    <view class="rights"> 
				   <view class="numss">2张可用 </view>
				   <image class="logos" src="../../static/image/index-arrow-right.png"></image>
				</view> 
			</view>
			<view class="ujfBoxs">
				<view class="field">
					<image class="logos" src="../../static/image/index-diamond.png"></image>
				     <text class="words">可用290积分抵用2.9元</text>
				</view>
			    <view class="rights" @tap.stop="useJFFlag=(!useJFFlag)"> 
				   <image v-if="useJFFlag" class="logos" src="../../static/image/shopCart-btnActive.png"></image>
				   <image v-if="!useJFFlag" class="logos" src="../../static/image/shopCart-btn.png"></image>
				</view> 
			</view>
		</view>
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
	// https://ext.dcloud.net.cn/plugin?id=1770
	import numberKeyboard from '@/components/number-keyboard/number-keyboard.vue'
	import passwordInput from '@/components/password-input/password-input.vue'
	export default {
		 data () {
			return { 
				// 留言
				remarkValue:'',
				// 是否使用积分
				useJFFlag:true,
				// 是否有地址
				getAddFlag:true,
				// 付款方式
				payFlag:false,
				extraFlag:false,
				wxFlag:false,
				// 余额支付,输入密码
				exDialogflag:false,//弹框
				exPassword: "", //输入的内容
			}
		 },
		 onLoad() {
		 	
		 },
		 components: {
		       numberKeyboard,
		       passwordInput
		 },
		 methods:{
			 // 获取地址
			 getAddress(){
				 uni.navigateTo({
				 	url:'/pages/shopMall/addressList'
				 })
			 },
			 // 跳转服务券
			 jumpsServer(){
				 uni.navigateTo({
				 	url:'/pages/shopMall/ticket'
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
	 // @include  ellipsis(2);
	 .uni-MallConfirm{
		 background-color: #f2f2f2;
		 height: 100vh;
		 position: relative;
		 left:0rpx;
		 top:0rpx;
		 .fields-box{
			  width: 750rpx;
			  height: 200rpx;
			  padding:0rpx 30rpx;
			  box-sizing: border-box;
			  display: flex;
			  justify-content: space-between;
			  align-items: center;
			  .uni-left{
				  display: flex;
				  flex-direction: column;
				  padding:30rpx;
				  box-sizing: border-box;
				  justify-content: space-between;
				  .uni-bottom{
					 color: #222222;
					 font-size: 26rpx;;
				  }
				  .uni-top{
					 display: flex;
					 font-size: 26rpx;
					 align-items: center;
					 height: 60rpx;
					 margin-bottom: 25rpx;;
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
					 .active{
						color: #FF666C;
						background-color: #FFE2E3;
						border: 2rpx solid #FF666C;	 
					 }
					 .right{
						width: 100rpx;
						text-align: center;
						height: 40rpx;
						line-height:40rpx;
						border-radius: 30rpx;
						font-size: 28rpx;
					 }
				  }
			  }
			  .uni-right{
				  display: block;
				  width: 30rpx;
				  height: 30rpx;;
			  }
			   
		 }
		 .addressBox{
			 width: 750rpx;
			 height: 220rpx;
			 text-align: center;
			
			 background-color: #fff;
			 .fields{
				 color: #222222;
				 font-size: 26rpx;;
				  line-height: 200rpx;
			 }
			 .addBg{
				 display: block;
				 width: 750rpx;
				 height: 7rpx;;
			 }
		 }
		 .goodBox{
			 width: 750rpx;
			 display: flex;
			 justify-content: space-between;
			 align-items: center;
			 padding: 30rpx;
			 box-sizing: border-box;
			 background-color: #fff;;
			 border-bottom: 2rpx solid #f2f2f2;;
			 .lefts{
				 display: block;
				 width: 150rpx;
				 height: 150rpx;
			 }
			 .rights{
				 width: 490rpx;
				  height: 150rpx;
				 display: flex;
				 flex-direction: column;
				 justify-content: space-between;
				 .uni-first{
					 color: #000000;
					 font-size: 26rpx;
					 font-weight: bold;
					 @include  ellipsis(2);
				 }
				 .uni-second{
					 display: flex;
					 justify-content: space-between;
					 .left{
						 color: #FF0000;
						 font-size: 24rpx;
						 .money{
							 font-size: 31rpx;
						 }
					 }
					 .right{
						 color: #FEAD00;
						 font-size: 22rpx;
					 }
				 }
				 .uni-third{
					 display: flex;
					 justify-content: space-between;
					 color: #8F8F8F;
					 font-size: 22rpx;
				 }
			 }
		 }
	 }
	 %listStyle{
	 		width: 750rpx;
			padding:0rpx 30rpx;
			box-sizing: border-box;
			background-color: #fff;
	 		display: flex;
	 		justify-content: space-between;
			color: #222222;
			font-size: 26rpx;	
			height: 98rpx;
			align-items: center;
			background-color: #fff;
			border-bottom: 2rpx solid #f2f2f2;;
	 }
	 .otherDetails{
		 width: 750rpx;
		
		 .distributeBox{
			 @extend  %listStyle; 
		 }
		 .remarks{
			 @extend  %listStyle; 
			 .inputClass{
				 text-align: right;
			 }
		 }
		 .goodBoxs{
			  @extend  %listStyle;
			  .nums{
				  color: #FF0000;
			  }
			  .moneys{
				  color: #FF0000;
			  }
		 }
		 .ujfBoxs{
			 @extend  %listStyle;
			 .field{
				  display: flex;
				  align-items: center;
				  .logos{
					  display: block;
					  width: 40rpx;
					  height: 40rpx;
					  margin-right:20rpx;
				  }
			 }
			 
			.rights{
				width: 50rpx;
				height: 50rpx;
				// background-color: red;
				.logos{
					display: block;
					width: 30rpx;
					height: 30rpx;
					margin:10rpx;
					margin-right:0rpx;
					
				}
			}
		 }
		 .consumerCouBoxs{
			  @extend  %listStyle;
			  .field{
				  display: flex;
				  align-items: center;
				  .logos{
					  display: block;
					  width: 40rpx;
					  height: 40rpx;
					  margin-right:20rpx;
				  }
			  }
			  .rights{
				  display: flex;
				  align-items: center;
				  .numss{
					  color: #FF0A0A;
					  margin-right:15rpx;
				  }
				  .logos{
					  display: block;
					  width: 30rpx;
					  height: 30rpx;
				  }
			  }
		 }
		 
	 }
	 .footerBox{
		 width: 690rpx;
		 position: absolute;
		 left:30rpx;
		 bottom: 30rpx;
		 display: flex;
		 text-align: center;
		
		 align-items: center;
		 color: #fff;
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
	 .payBox-mask{
	 		@extend  %maskBox;
	 }
	 .pay-box{
	 	width: 750rpx;
	 	height: 530rpx;
	 	padding-top:20rpx;
	 	position: absolute;
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
