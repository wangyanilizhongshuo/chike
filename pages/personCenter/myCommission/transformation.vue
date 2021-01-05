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
		<view class="footer" @tap.stop="submitBtn">确认</view>
</view>
</template>
<script>
	export default {
		data() {
			return {
				moneyValue:'',
				now_money:'',
				brokerage_price:''
			}
		},
		onLoad(options){
			this.setData(options);
		},
		methods:{
				submitBtn(){
					let that=this;
					if(that.now_money-parseFloat(that.moneyValue).toFixed(2)<0){
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
					}
					uni.showModal({
					    title: '提示',
					    content: '确定佣金转化为余额',
					    success: function (res) {
					        if (res.confirm) {
								that.$http.post('mini/v1/user/brokeragetomoney',{
									money:parseFloat(that.moneyValue).toFixed(2)
								},(ress)=>{
									if(ress.state==0){
										 uni.redirectTo({
					                        	url:'/pages/personCenter/myOpinion/opinionSuccess?typesName='+3
					                     })
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
	
</style>
