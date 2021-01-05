<template>
	<view class="uni-transformation">
		
		<view class="contentBox">
			<view class="styless">
				<input class="inputBox" v-model="moneyValue"  placeholder-style="color:#888;font-size:28rpx;" placeholder="请输入提现金额" />
			</view>
			<view class="box">
				<view class="first">
					<text class="field"> 可提现余额</text>     
					<text class="value">￥156.00</text>
			    </view>
				<view class="second">提示：此处自行编辑此处自行编辑此处自行编辑 </view>
			</view>
			<view class="styless">
				<input class="inputBox" v-model="friendId"  placeholder-style="color:#888;font-size:28rpx;" placeholder="请输入您的支付宝账号" />
			</view>
		</view>
		<view class="footer" @tap.stop="submitBtn">申请提现</view>
</view>
</template>
<script>
	export default {
		data() {
			return {
				moneyValue:'',
				friendId:'',
				brokerage_price:''
			}
		},
		onLoad(options){
			this.setData(options);
		},
		methods:{
				submitBtn(){
					let that=this;
					if(that.brokerage_price-parseFloat(that.moneyValue).toFixed(2)<0){
						uni.showToast({
							title:'超过佣金数值',
							duration:2000
						})
						return false; 
					}else if(that.moneyValue<0){
						uni.showToast({
							title:'数值需大于0',
							duration:2000
						})
						return false;
					}
					uni.showModal({
					    title: '提示',
					    content: '确定提现?',
					    success: function (res) {
					        if (res.confirm) {
					             that.$http.post('mini/v1/user/brokerageout',{
									 money:parseFloat(that.moneyValue).toFixed(2),
									 account:that.friendId
								 },(res)=>{
									 if(res.state==0){
										uni.redirectTo({
											url:'/pages/personCenter/myOpinion/opinionSuccess?typesName='+6
										})
										 
									 }
								 })
					        } else if (res.cancel) {
					            console.log('用户点击取消');
					        }
					    }
					});
				}
		}
	}
</script>

<style scoped lang="scss">
	@import "../../../static/scss/common.scss";
	.contentBox{
		padding-top: 94rpx;
		margin-left:90rpx;
		border-top:1rpx solid #f2f2f2;
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
	margin-top:117rpx;
	line-height: 90rpx;
	background: #FF9A9E;
	border-radius: 45rpx;
}
</style>
