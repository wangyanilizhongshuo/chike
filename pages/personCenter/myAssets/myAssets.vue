<template>
	<view class="uni-assets">  
	      <view class="uni-first style1" @tap.stop="jumpTop(1)">
			  <view  class="field">我的余额</view>
			  <view class="values">{{now_money}}</view>
		  </view>
	      <view class="uni-second style1"  @tap.stop="jumpTop(2)">
			  <view  class="field">我的佣金</view>
			  <view class="values">{{brokerage_price}}</view>
		  </view>
		  <view class="uni-third style1"  @tap.stop="jumpTop(3)">
			  <view  class="field">我的优惠券</view>
			  <view class="values">{{service_coupon_num}}</view>
		  </view>
	      <view class="uni-fourth style1"  @tap.stop="jumpTop(4)">
			  <view  class="field">我的积分</view>
			  <view class="values">{{integral}}</view>
		  </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				now_money:'',
				brokerage_price:'',
				service_coupon_num:'',
				integral:''
			}
		},
		onLoad(options){
			console.log(options)
			this.setData(options);
			
		},
		methods: {
			jumpTop(types){
				 if (types ==1){
					uni.navigateTo({
						url:'/pages/personCenter/myBalance/myBalance?now_money='+this.now_money
					})
				}else if(types==2){
					uni.navigateTo({
						url:'/pages/personCenter/myCommission/myCommission?brokerage_price='+this.brokerage_price+'&now_money='+this.now_money
					})
				}else if(types==3){
					uni.navigateTo({
						url:'/pages/personCenter/myTicket/myTicket'
					})
				}
				else if(types==4){
					uni.navigateTo({
						url:'/pages/personCenter/myInteGral/myInteGral?jifen='+this.integral+'&willjf='+this.integral_active
					})
				}
			},
		}
	}
</script>

<style scoped lang="scss">
	%maskBox{
		width: 690rpx;
		height: 240rpx;
		background-repeat: no-repeat;
		background-size: 690rpx 240rpx;
		
		color: #fff;
		.style1{
			font-size: 32rpx;
			
			
		}
		
		.field{
			// padding-left: 44rpx;
			// padding-top: 59rpx;;
		}
		.values{
			// padding-left: 44rpx;
			margin-top: 20rpx;
			font-weight: bold;;
			font-size: 60rpx;
		}
	}
	.uni-assets{
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 750rpx;
		.uni-first{
			@extend  %maskBox;
			background-image: url('https://chikehometest.hzbixin.cn/upload/images/feedback/20210329/563a510cfbf4de4875dec2a7d7d75aa7.png');
		    
		}
		.uni-second{
			@extend  %maskBox;
			margin: 30rpx 0rpx;
			background-image: url('https://chikehometest.hzbixin.cn/upload/images/feedback/20210329/05d1ea5dd5d7a804ab82b8b710148a3a.png');
		}
		.uni-third{
			@extend  %maskBox;
			background-image: url('https://chikehometest.hzbixin.cn/upload/images/feedback/20210329/a7f649554c4f0c683b55400a7f324cd8.png');
		}
		.uni-fourth{
			margin-top: 30rpx;
			@extend  %maskBox;
			background-image: url('https://chikehometest.hzbixin.cn/upload/images/feedback/20210329/847294dab0b273201a0b021fbf069747.png');
		}
	}
	.uni-first,.uni-second,.uni-third,.uni-fourth{
		box-sizing:border-box;
		padding-top: 59rpx;;
		padding-left: 40rpx;
	}
	
</style>
