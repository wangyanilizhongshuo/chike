<template>
	<view class="uni-transformation">
		<view class="uni-titles">
			<image class="imgs" src="../../../static/image/extra-bg2.png"></image>
	        <view class="boxs">
				<view class="uni-left stylesss">
					<view class="top">¥{{brokerage_price}}</view>
					<view class="down">我的佣金</view>
				</view>
				<view class="uni-right stylesss">
					<view class="top">¥{{now_money}}</view>
					<view class="down">我的余额</view>
				</view>
			</view>
	    </view>
		<view class="contentBox">
			<view class="styless">
				<input class="inputBox" type="number" v-model="moneyValue"  placeholder-style="color:#888;font-size:28rpx;" placeholder="请输入转换金额" />
			</view>
			<view class="box">
				<view class="first">
					<text class="field"> 可转换佣金 </text>  
					<text class="value">￥{{brokerage_price}}</text>
			    </view>
				<view class="second">提示：此处自行编辑此处自行编辑此处自行编辑 </view>
			</view>	
		</view>
		<view class="showtips" v-if="tipflag">{{tipMsg}}</view>
		<view class="footer" @tap.stop="getPayPsd">确认</view>
		<view class="moneyMask" v-if="maskFlag"></view>
		<view class="payBox" v-if="maskFlag" >
			<view class="firstLine">
				<view class="signalBox">请输入交易密码</view>
				<view class="cancelBox"@tap.stop="maskFlag=false">
				     <image class="cancel" src="../../../static/image/cancel.png"></image>
		 	    </view>
			</view>
			
			<view style="width:462rpx;margin-top:48rpx;margin-left:39rpx;" class="item" @tap='KeyboarOpen'>
				     <password-input :numLng='exPassword'></password-input>
			</view>
			<number-keyboard tdvabBar ref='KeyboarHid' @input='getPsd' psdLength='6'></number-keyboard>
	 </view>
</view>
</template>
<script>
	// https://ext.dcloud.net.cn/plugin?id=1770
	import numberKeyboard from '@/components/number-keyboard/number-keyboard.vue'
	import passwordInput from '@/components/password-input/password-input.vue'
	export default {
		data() {
			return {
				moneyValue:'',
				now_money:'',
				brokerage_price:'',
				tipflag:false,
				tipMsg:'',
				maskFlag:false,
				exPassword:'',
			}
		},
		components: {
		      numberKeyboard,
		      passwordInput
		},
		onLoad(options){
			this.setData(options);
		},
		methods:{
			// 余额 支付
			KeyboarOpen(e) {
			       this.$refs.KeyboarHid.open();
			},
			getOpenDialog(){
				this.maskFlag=true;
				
			},
			exDialogClick(){
				 this.exDialogflag=false;
				 this.$refs.KeyboarHid.close();
			},
			//获取交易密码
			getPayPsd(){
				let that=this;
				that.$http.post('mini/v1/user/paypasswordcheck',{},(res)=>{
					if(res.state==0){
						that.maskFlag=true;
					}else{
						uni.showModal({
						    title: '提示',
						    content: '您还没有设置交易密码',
							confirmText:'设置密码',
						    success: function (res) {
						        if (res.confirm) {
						            uni.navigateTo({
						            	url:'/pages/personCenter/mySetting/mySetting'
						            })
						        } else if (res.cancel) {
						            console.log('用户点击取消');
						        }
						    }
						});
					}
					
				})
			},
			//获取密码
			getPsd(val){
				this.exPassword = val;
				let that =this;
				// 密码输入六位数字的时候,弹窗关闭,可请求接口
				if(that.exPassword.length ==6){
					if(that.brokerage_price-(parseFloat(that.moneyValue).toFixed(2))<0){
						uni.showToast({
							title:'超过余额',
							duration:2000
						})
						return false; 
					}else if(that.moneyValue<0){
						uni.showToast({
							title:'数值需大于0',
							duration:2000
						})
						return false;
					}else {
						console.log(111111)
						that.maskFlag=false;
						that.$refs.KeyboarHid.close();
						that.getSus()
					}
					
				}
				
				
					
			},
			getSus(){
				let that =this;
				uni.showModal({
				    title: '提示',
				    content: '确定佣金转化为余额',
				    success: function (res) {
				        if (res.confirm) {
							that.$http.post('mini/v1/user/brokeragetomoney',{
								money:parseFloat(that.moneyValue).toFixed(2),
								paypassword:that.exPassword
							},(ress)=>{
								if(ress.state==0){
									 uni.redirectTo({
				                        	url:'/pages/personCenter/myOpinion/opinionSuccess?typesName='+3
				                     })
								}else{
									that.exPassword='';
									that.tipflag=true ;
									that.tipMsg=ress.msg
									setTimeout(()=>{
											that.tipflag=false
									},3000)
								}
							})
				          
				        } else if (res.cancel) {
				           
				        }
				    }
				});
			}
		}
	}
</script>

<style scoped lang="scss">
	@import "../../../static/scss/common.scss";
	.uni-titles{
		width: 690rpx;
		height: 200rpx;
		position: relative;
		left:30rpx;
		top:0rpx;
		.imgs{
			display: block;
			width: 690rpx;
			height: 200rpx;;
		}
		.boxs{
			width: 690rpx;
			height: 200rpx;
			position: absolute;
			left:0rpx;
			top:0rpx;
			display: flex;
			align-items: center;
			.uni-left{
				border-right:2rpx solid #fff;
			}
			.stylesss{
				width: 344rpx;
				height: 106rpx;
				text-align: center;
				color: #FFFFFF;
				.top{
					font-size: 42rpx;
					margin-bottom: 25rpx;
				}
				.down{
					font-size: 28rpx;;
				}
			}
		}
	}
	.contentBox{
		margin-left: 90rpx;
		margin-top: 73rpx;
		.styless{
			width: 570rpx;
			height: 90rpx;
			background: #FFFFFF;
			border: 2rpx solid #FF9A9E;
			border-radius: 45rpx;
		}
		.inputBox{
			  height: 50rpx;
			  margin-top:20rpx;
			  width: 400rpx;
			  margin-left: 50rpx;
		}
		.box{
			  width:750rpx;
			  height: 128rpx;
			  padding:15rpx 0rpx 0rpx 42rpx;
			  .first{
				  font-size: 28rpx;;
				  .field{
					  color: #222222;
				  }
				  .value{
					  color: #F92C11;
				  }
			  }
			  .second{
				  font-size: 22rpx;
				  color: #888;
				  margin-top: 15rpx;
			  }
		}
	}
.footer{
	width: 570rpx;
	height: 90rpx;
	text-align: center;
	color: #fff;
	margin-left: 90rpx;
	margin-top:86rpx;
	line-height: 90rpx;
	background: #FF9A9E;
	border-radius: 45rpx;
}
 .showtips{
	  width: 350rpx;
	  height: 100rpx;
	  background: #000000;
	  opacity: 0.6;
	  border-radius: 16rpx;
	  position: fixed;
	  left:200rpx;
	  top:400rpx;
	  color: #FFFFFF;
	  font-size: 28rpx;
	  line-height: 100rpx;
	  text-align: center;
	  z-index:1000;
	  
  }	
  .moneyMask{
  	@extend  %maskBox;
  }
  .payBox{
  	width: 600rpx;
  	height: 246rpx;
  	position: absolute;
  	left:75rpx;
  	top:236rpx;
  	z-index: 50;
  	border-radius: 8rpx;
  	padding:30rpx 40rpx;
  	box-sizing: border-box;
  	background-color: #fff;;
  	color: #000;
  	text-align: center;
  	.firstLine{
  		text-align: center;
  		position: relative;
  		left:0rpx;
  		top:0rpx;
  	}
  	.cancelBox{
  		width: 476rpx;
         
  		.cancel{
  			display: block;
  		    width: 30rpx;
  		    height: 30rpx;
  			position: absolute;
  			top:0rpx;
  			right:0rpx;
  		}
  	}
  	.zzWord{
  		font-size: 30rpx;;
  		margin-top:19rpx;
  	}
  	.moneyBox{
  		font-size: 70rpx;
  		margin:60rpx 0rpx 54rpx;
  	}
  	.signalBox{
  		font-size: 28rpx;;
  	}
  }
 
</style>
