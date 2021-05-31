<template>
	<view class="uni-login"> 
	  <view class="uni-titles">
		  <image class="imgss" src="../../static/image/login-bg.png"></image>
	     
	  </view>
	<view class="tips">请完成微信授权以继续使用</view>
	<!-- <button class="btnSubmit" lang="zh_CN"   open-type="getPhoneNumber"  @getphonenumber="authorLogin"> -->
		<!-- <button class="btnSubmit"  open-type="getUserInfo" lang="zh_CN"  @getuserinfo="getuserinfo"> -->
    <button  class="btnSubmit" @tap.stop="getuserinfo">
					 微信授权用户信息
	</button>
	  <image class="botttomBg" src="https://chikehometest.hzbixin.cn/upload/images/feedback/20210428/952991ca48e538f011cdfe7e02b77310.png"></image>
   	
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
     
			getuserinfo(e) {
			  console.log(1111)
          let that=this;
          let iv='';
          let encryptedData='';
          if(uni.getStorageSync('scene')){
               that.scenes=uni.getStorageSync('scene')
          }
          uni.login({
            provider: 'weixin',
            success: function(res) {
              that.code = res.code;
              console.log(that.code,'code')
            }
         });
         uni.getUserProfile({
           desc:'登录',
           success:(res3)=>{
             encryptedData=res3.encryptedData;
             iv=res3.iv;
             console.log(encryptedData)
             console.log(iv)
             that.$http.post('mini/v1/wechat/wxlogin',{
             		  code:that.code,
             		  encryptedData:encryptedData,
             		  iv:iv,
             		  spreaduid:that.scenes
             	  },function(res6){
             	    	if(res6.state ==0){
             				uni.setStorageSync('token',res6.data.token);
             				uni.setStorageSync('openId',res6.data.openid);
             				if(res6.data.is_bind_mobile==1){
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
             				   
             				   
             				   
             				}else if(res6.data.is_bind_mobile==0){
                       
             					uni.redirectTo({
             						url:'/pages/index/logins'
             					})
             				}
             				
             			}
             		})
           },
           fail:(res)=>{
             console.log(res)
             console.log('res')
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
