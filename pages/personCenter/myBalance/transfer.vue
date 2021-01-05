<template>
	<view class="uni-transfer">
	    <view class="contentBox">
			<view class="styless">
				<input class="inputBox" v-model="moneyValue"  placeholder-style="color:#888;font-size:28rpx;" placeholder="请输入转赠金额" />
			</view>
			<view class="box">
				<view class="first">
					<text class="field">可转赠余额</text>
					<text class="value">￥{{now_money}}</text>
			    </view>
				<view class="second">提示：此处自行编辑此处自行编辑此处自行编辑 </view>
			</view>	
			<view class="styless">
				<input class="inputBox" v-model="id"  placeholder-style="color:#888;font-size:28rpx;" placeholder="请输入转赠账号" />
			</view>
			<view class="footer" @tap.stop="maskFlag=true">确认</view>
		</view>
		<view class="moneyMask" v-if="maskFlag"></view>
		<view class="payBox" v-if="maskFlag" >
			<view class="cancelBox"@tap.stop="maskFlag=false">
				<image class="cancel" src="../../../static/image/cancel.png"></image>
			</view>
			<view class="zzWord">转赠</view>
			<view class="moneyBox">47.0</view>
			<view class="signalBox">请输入交易密码</view>
			<view style="margin-top:24rpx;" class="item" @tap='KeyboarOpen'>
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
	export default{
		data(){
			return {
				now_money:'',
				maskFlag:false,
				moneyValue:'',
				id:'',
				exPassword:''
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
			//获取密码
			getPsd(val){
				this.exPassword = val;
				// 密码输入六位数字的时候,弹窗关闭,可请求接口
				if(this.exPassword.length ==6){
					let that =this;
					that.$http.post('mini/v1/user/moneydonate',{
						money:parseFloat(that.moneyValue).toFixed(2),
						phone:that.id,
						paypassword:that.exPassword
					},(res)=>{
						if(res.state ==0){
							 this.$refs.KeyboarHid.close();
							 uni.redirectTo({
							 	url:'/pages/personCenter/myOpinion/opinionSuccess?typesName='+4
							 }) 
						}
					})
					
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
	@import "../../../static/scss/common.scss";
	.styless{
		width: 570rpx;
		height: 90rpx;
		background: #FFFFFF;
		border: 2rpx solid #FF9A9E;
		border-radius: 45rpx;
	}
	.uni-transfer{
	   width:750rpx;
	   height: 100vh;
	   padding:90rpx;
	   box-sizing: border-box;
	   // text-indent: 45rpx;
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
	line-height: 90rpx;
	text-align:center;
	color:#fff;
	font-size: 28rpx;;
	background: #FF9A9E;
	border-radius: 45rpx;
	margin-top:117rpx;
}
.moneyMask{
	@extend  %maskBox;
}
.payBox{
	width: 536rpx;
	height: 521rpx;
	position: absolute;
	left:107rpx;
	top:236rpx;
	z-index: 50;
	padding:30rpx;
	box-sizing: border-box;
	background-color: #fff;;
	color: #000;
	text-align: center;
	.cancelBox{
		width: 476rpx;
        position: relative;
		left:0rpx;
		top:0rpx;
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
