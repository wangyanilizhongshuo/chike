<template>
	<view class="uni-login"> 
	  <view class="uni-titles">
		  <image class="imgss" src="../../static/image/login-bg.png"></image>
	      <view class="wriBox">
			  <view class="box">
				  <image class="logo" src="../../static/image/index-diamond.png"></image>
				  <input  class="inputss" type="number" v-model="phone" placeholder-style="font-size:28rpx;color:#888" placeholder="输入手机号码" />
			  </view>
			  <view class="boxs">
				  <view class="uni-left">
					  <image class="logo" src="../../static/image/index-diamond.png"></image>
					  <input  class="inputss" v-model="yzmvalue" placeholder-style="font-size:28rpx;color:#888" placeholder="验证码" />
				  </view>
				  <view class="uni-right" @tap.stop="getCode" v-if="timeFlag">获取验证码</view> 
			      <view class="uni-right"  v-if="!timeFlag">还剩 {{timeValue}} 秒</view>
			  </view>
			 
			  
			  
		  </view>
		
	  </view>
	<button  open-type="getUserInfo" class="btnSubmit" @tap.stop="btnSubmits">
		 			  登录
	</button>
	  <image class="botttomBg" src="http://zxyp.hzbixin.cn/files/73781608195989134.jpg"></image>
	</view>
</template>

<script>
	export default {
		 data () {
			return {  
				phone:'',
				yzmvalue:'',
				timeFlag:true,
				timeValue:10,
				code:'',
				openId:''
			}
		},
		onLoad(){
			
		},
		methods:{
			//刚进去,就开始微信登录,后面绑定手机号
			btnSubmits(){
				let that=this;
				console.log(1111)
				uni.login({
				  success (res) {
				    if (res.code) {
						console.log(2222)
				      //发起网络请求获取code 码
					   that.code =res.code;
					   console.log(that.code +'that.code')
					    uni.getUserInfo({
						   provider: 'weixin',
					       success: function(ress) {
					    	  console.log(33333)
							  console.log(ress)
					    	//   that.$http.post('mini/v1/wechat/wxlogin',{
					    	// 	  code:that.code,
					    	// 	  encryptedData:ress.encryptedData,
					    	// 	  iv:ress.iv
					    	//   },function(res){
								  // console.log(4444)
								  // console.log(res)
					    	//   	if(res.state ==0){
								  // // 微信登录成功
								  // console.log(55555)
								  // that.openId=res.data.openid;
								  // uni.setStorageSync('token',res.data.token);
								  // // 手机号码登录
								  // that.$http.post('mini/v1/wechat/bindmobile',{
								  //    openid:that.openId,
								  // 	 mobile:that.phone,
								  // 	 smscode:that.yzmvalue
								  // },(res)=>{
									 //  console.log(6666)
								  // 	if(res.state==0){
										// console.log(7777)
								  // 		uni.switchTab({
								  // 			url:'/pages/index/index'
								  // 		})
								  // 	}
								  	
								  // })
					    	//   	}
					    	//   })
					    	
					      },
					      fail:res=>{
					          // 获取失败的去引导用户授权 
							  console.log('failsss')
					       }
					    })
					}
				  },
				  fail(res){}
					
				 })
			},
			getCode(){
				let that=this;
				that.timeValue=60;
				// 检测手机号码格式
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
					that.timeFlag=false;
					setInterval(()=>{
						that.timeValue=that.timeValue-1;
						if(that.timeValue<1){
							that.timeFlag=true;
						}
					},1000)
				})
			},
			
		}
	}
</script>

<style scoped lang="scss">
    @import "../../static/scss/common.scss";
	.uni-login{
		width: 750rpx;
		height: 100vh;
		position: relative;
		left:0rpx;
		top:0rpx;
		.botttomBg{
			display: block;
			width: 236rpx;
			height: 230rpx;
			position: absolute;
			bottom:0rpx;
			right:0rpx;
		}
		.uni-titles{
			.imgss{
				width: 750rpx;
				height: 394rpx;
			    display:block;
			}
			.wriBox{
				position: absolute;
				left:90rpx;
				top:160rpx;
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
						width: 32rpx;
						height: 50rpx;
						display: block;
						margin-right:30rpx;
					}
					.uni-left{
						display: flex;
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
					height: 160rpx;
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
		position: absolute;
		left:45rpx;
		top:670rpx;
		border-radius: 20rpx;
		background-color: #ff9fa4;
	
	}
	button::after{ border: none; 
	}
</style>
