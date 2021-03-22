<template>
	<view class="uni-login"> 
	  <view class="uni-titles">
		  <image class="imgss" src="../../static/image/login-bg.png"></image>
	     
	  </view>
	<view class="tips">请完成微信授权以继续使用</view>
	<!-- <button class="btnSubmit" lang="zh_CN"   open-type="getPhoneNumber"  @getphonenumber="getPhoneNumber"> -->
		<button class="btnSubmit"  open-type="getUserInfo" lang="zh_CN" @getuserinfo="authorLogin">
					 微信授权用户信息
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
			
				code:'',
				openId:'',
				scenes:''
			}
		},
		onLoad(){
			let that=this;
			uni.login({
				provider: 'weixin',
				success: function(res) {
					that.code = res.code;
				}
			});
			
		},
		methods:{
			// getPhoneNumber(e){
			// 	if (e.detail.errMsg !== 'getPhoneNumber:ok') {
			// 	  return false;
			// 	}
			// 	console.log(e.detail)
			// 	console.log(18828)
			// },
			//刚进去,就开始微信登录,后面绑定手机号
			authorLogin: function (e) {
				
				let that=this;
			    // if (e.detail.errMsg !== 'getPhoneNumber:ok') {
				if (e.detail.errMsg !== 'getUserInfo:ok') {
				  return false;
			    }
				if(uni.getStorageSync('scene')){
				     that.scenes=uni.getStorageSync('scene')
				}
			
				that.$http.post('mini/v1/wechat/wxlogin',{
						  code:that.code,
						  encryptedData:e.detail.encryptedData,
						  iv:e.detail.iv,
						  spreaduid:that.scenes
					  },function(res){
					    	if(res.state ==0){
								// console.log(res.data)
								// console.log('res.data')
								uni.setStorageSync('token',res.data.token);
								uni.setStorageSync('openId',res.data.openid);
								if(res.data.is_bind_mobile==1){
									
								     
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
								   
								   
								   
								}else if(res.data.is_bind_mobile==0){
									uni.redirectTo({
										url:'/pages/index/logins'
									})
								}
								
							}
						})
				
			  
			},
			getCode(){
				let that=this;
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
			
		}
	}
	.tips{
		width: 660rpx;
		text-align: center;
		color: #555555;
		font-size: 28rpx;
		margin:0  45rpx 39rpx;;
	}
	.btnSubmit{
		width: 660rpx;
		height: 90rpx;
		text-align: center;
		line-height: 90rpx;
		color: #FFFFFF;
		font-size: 28rpx;
		border-radius: 45rpx;
		background-color: #fe9ea1;
	
	}
	button::after{
		border: none;
	}
</style>
