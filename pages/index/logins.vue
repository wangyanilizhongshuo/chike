<template>
	<view class="uni-login"> 
	 <image class="imgss" src="../../static/image/login-bg.png"></image>
	  <view class="uni-titles">
		 
	      <view class="wriBox">
			  <view class="box">
				  <image class="logo" style="width: 50rpx;height: 50rpx;display: block;" src="../../static/image/index-diamond.png"></image>
				  <input  class="inputss" type="number" v-model.trim="phone" placeholder-style="font-size:28rpx;color:#888" placeholder="输入手机号码" />
			  </view>
			  <view class="boxs">
				  <view class="uni-left">
					  <image class="logos"  style="width: 60rpx;height: 50rpx;display: block;" src="../../static/image/index-diamonds.png"></image>
					  <input  class="inputss" v-model.trim="yzmvalue" placeholder-style="font-size:28rpx;color:#888" placeholder="验证码" />
				  </view>
				  <view class="uni-right" @tap.stop="getCode" v-if="timeFlag">获取验证码</view> 
			      <view class="uni-right"  v-if="!timeFlag">还剩 {{timeValue}} 秒</view>
			  </view>
		  </view>
	  </view>
	 <button class="btnSubmit" lang="zh_CN"   open-type="getPhoneNumber"  @getphonenumber="getPhoneNumber" >
	  <!-- <button class="btnSubmit" lang="zh_CN"   open-type="getUserInfo" @getuserinfo="authorLogin"> -->
					  登录
	  </button>
	  <button plain="true" class="footerBox"  lang="zh_CN"   open-type="getPhoneNumber"  @getphonenumber="goPasLogin">
		  <view class="fields">* 如已分配账密，请使用账号密码登录</view>
		  <image class="imgs" src="../../static/image/right-arrow-pink.png"></image>
	  </button>
	 <!-- <view class="footerBox" @tap.stop="goPasLogin">
		  
		  <view class="fields">使用账号密码登录</view>
		  <image class="imgs" src="../../static/image/right-arrow-pink.png"></image>
	  </view> -->
	  <image class="botttomBg" src="http://zxyp.hzbixin.cn/files/73781608195989134.jpg"></image>
	  <view class="showtips" v-if="tipflag">{{tipMsg}}</view>
	</view>
</template>

<script>
	export default {
		 data () {
			return {  
				phone:'',
				yzmvalue:'',
				timeFlag:true,
				timeValue:60,
				code:'',
				openId:'',
				scenes:0,
				tipflag:false,
				tipMsg:''
			}
		},
		onLoad(){
			
		   
		},
		onShow(){
			let that=this;
			 uni.login({
			   success (res) {
				   that.code=res.code;
			   }
			})
		},
		methods:{
			//刚进去,就开始微信登录,后面绑定手机号
			// authorLogin: function (e) {
			//     if (e.detail.errMsg !== 'getUserInfo:ok') {
			//         return false;
			//     }
			getPhoneNumber:function(e){
				if (e.detail.errMsg !== 'getPhoneNumber:ok') {
				        return false;
				    }
					
			    // uni.showLoading({
			    //   title: "正在授权",
			    //   mask: true
			    // });
				
				let that=this;
				that.timeValue=60;
				uni.login({
				  success (res) {
				    if (res.code) {
				      //发起网络请求获取code 码
					   that.code =res.code;
					    wx.getUserInfo({
					      success: function(ress) {
								  // 微信登录成功
								  that.openId=uni.getStorageSync('openId');
								  // uni.setStorageSync('token',res.data.token);
								  // 手机号码登录
								  that.$http.post('mini/v1/wechat/bindmobile',{
									 openid:that.openId,
									 mobile:that.phone,
									 smscode:that.yzmvalue,
									 code:that.code,
									 iv:e.detail.iv,
									 encryptedData:e.detail.encryptedData
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
												 
												 
											}else{
												that.tipflag=true ;
												that.tipMsg=res.msg;
												setTimeout(()=>{
														that.tipflag=false
												},3000)
											}
								  })
					      },
					      fail:res=>{
					          // 获取失败的去引导用户授权 
					       }
					    })
					}
				  },
				  fail(res){}
				 })
			},
			getCode(){
				let that=this;
				// 检测手机号码格式
				that.phone=that.phone.replace(/\s*/g,"");
				if(that.phone<=11){
					uni.showToast({
						title:'手机号码输入有误'
					})
					return false 
				}
				that.$http.post('mini/v1/overt/sendsmscode',{
					mobile:that.phone,
					codetype:0
				},(res)=>{
				  if(res.state==0){
					   that.timeFlag=false;
						setInterval(()=>{
							that.timeValue=that.timeValue-1;
							if(that.timeValue==1){
								that.timeFlag=true;
							}
						},1000)
				  }else {
					  that.tipflag=true ;
					  that.tipMsg=res.msg;
					  setTimeout(()=>{
					  		that.tipflag=false
					  },3000)
				  }			        	
				})
			},
			goPasLogin(e){
				let that=this;
				     that.$http.post('mini/v1/wechat/getType',{
							code:that.code,
							iv:e.detail.iv,
							encryptedData:e.detail.encryptedData	
						},(res1)=>{
							if(res1.state==0){
								 if(res1.data.user_type==1){
									 uni.navigateTo({
										   url:'/pages/index/loginPsd?phone='+res1.data.phone
									 }) 
								 }else if(res1.data.user_type==0){
									 that.tipflag=true ;
									 that.tipMsg=res1.msg;
									 setTimeout(()=>{
									 		that.tipflag=false
									 },3000)

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
		border: none;
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
