<template>
	<view class="uni-login"> 
	 <image class="imgss" src="../../static/image/login-bg.png"></image>
	  <view class="uni-titles">
		 
	      <view class="wriBox">
			  <view class="box">
				  <image class="logo" style="width: 50rpx;height: 50rpx;display: block;" src="../../static/image/index-diamond.png"></image>
				  <input  class="inputss" type="number" v-model="account" placeholder-style="font-size:28rpx;color:#888" placeholder="请输入手机号码" />
			  </view>
			  <view class="boxs">
				  <view class="uni-left">
					  <image class="logos"  style="width: 60rpx;height: 50rpx;display: block;" src="../../static/image/index-diamonds.png"></image>
					  <input  password class="inputss" v-model="padword" placeholder-style="font-size:28rpx;color:#888" placeholder="请输入密码" />
				  </view>
				
			  </view>
		  </view>
	  </view>
	  <!-- <button class="btnSubmit" lang="zh_CN"  open-type="getPhoneNumber" @getphonenumber="getPhoneNumber"> -->
		  <button class="btnSubmit"    @tap.stop="getPhoneNumber">
					  登录
	     </button>
	  
	  <image class="botttomBg" src="http://zxyp.hzbixin.cn/files/73781608195989134.jpg"></image>
	  <view class="showtips" v-if="tipflag">{{tipMsg}}</view>
	</view>
</template>

<script>
	export default {
		 data () {
			return {  
				tipflag:false,
				tipMsg:'',
				phone:'',//传过来的手机号码
				account:'',//手机号码
				padword:'',//密码
			}
		},
		onLoad(options){
			this.setData(options)
		    uni.login({
		    	provider: 'weixin',
		    	success: function(res) {
		    		console.log(res)
		    	}
		    });
		},
		
		methods:{
              getPhoneNumber(e){
				  // console.log(e)
				  let that=this;
				  that.$http.post('mini/v1/wechat/logIn',{
					  phone:that.phone,
					  account:that.account,
					  password :that.padword,
					  openid:uni.getStorageSync('openId')
				  },(res)=>{
					  if(res.state==0){
						  	 if(uni.getStorageSync('ptGoodId')){
						  		 let ids=uni.getStorageSync('ptGoodId')
						  	        uni.navigateTo({
						  	 	         url:'/pages/shopMall/ptlist-detail?goodsId='+ids
						  	       })
						  	 }
						  	 
						  else{
							   uni.switchTab({
						  	        url:'/pages/index/index'
						       })
						  }
					  }
				  })
			  }
		}
	}
</script>

<style scoped lang="scss">
    @import "../../static/scss/common.scss";
	.showtips{
		  width: 350rpx;
		  height: 100rpx;
		  background: #000000;
		  opacity: 0.6;
		  border-radius: 16rpx;
		  position: fixed;
		  left:200rpx;
		  z-index:1000;
		  top:500rpx;
		  color: #FFFFFF;
		  font-size: 28rpx;
		  line-height: 100rpx;
		  text-align: center;
		  
	}
	.uni-login{
		width: 750rpx;
		height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		.botttomBg{
			display: block;
			width: 236rpx;
			height: 230rpx;
			position: absolute;
			bottom:0rpx;
			right:0rpx;
		}
		.imgss{
			width: 750rpx;
			height: 394rpx;
		    display:block;
		}
		.uni-titles{
			
			.wriBox{
				margin-top: -130rpx;
				margin-left:90rpx;;
				// position: absolute;
				// left:90rpx;
				// top:160rpx;
				.boxs{
					display: flex;
					height: 160rpx;
					width: 570rpx;
					border-bottom: 2rpx solid #f2f2f2;
					align-items: flex-end;
					padding:0rpx 30rpx 20rpx;
					box-sizing: border-box;
					justify-content: space-between;
					.logo{
						width: 50rpx;
						height: 50rpx;
						display: block;
						margin-right:30rpx;
					}
					
					.uni-left{
						display: flex;
						width: 300rpx;
						.logos{
							width: 50rpx;
							height: 50rpx;
							display: block;
							margin-right:30rpx;
						}
					}
					.uni-right{
						color: #FF9A9E;
						font-size: 28rpx;
					}
					.inputss{
						color: #222222;
						font-size: 28rpx;;
					}
				}
				.box{
					display: flex;
					height: 170rpx;
					width: 570rpx;
					border-bottom: 2rpx solid #f2f2f2;
					align-items: flex-end;
					padding:0rpx 30rpx 20rpx;
					box-sizing: border-box;
					.logo{
						width: 32rpx;
						height: 50rpx;
						display: block;
						margin-right:30rpx;
					}
					.inputss{
						color: #222222;
						font-size: 28rpx;;
					}
				}
				
				
			}
		}
	}
	.btnSubmit{
		width: 660rpx;
		height: 90rpx;
		text-align: center;
		line-height: 90rpx;
		color: #FFFFFF;
		font-size: 28rpx;
		margin: 90rpx 0rpx 40rpx;
		border-radius: 45rpx;
		background-color: #fe9ea1;
		
	}
	button::after{
		border: none;
	}
	.footerBox{
		display: flex;
		align-items: center;
		width: 620rpx;
		.fields{
			color: #FF9A9E;
			font-size: 28rpx;
			margin-right: 10rpx;
		}
		.imgs{
			width: 22rpx;
			height: 22rpx;
			display: block;;
		}
		
	}
</style>
