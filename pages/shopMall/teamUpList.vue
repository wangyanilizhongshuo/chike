<template>
	<view class="uni-teamUpList">
		<view class="listBox">
			<view class="list" v-for="(item,index) in 5" :key="index" @tap.stop="getTeam(index)">
				  <image class="imgs uni-left" src="https://img9.51tietu.net/pic/2019-091200/ff1vqwm3q33ff1vqwm3q33.jpg"></image>
			      <view  class="uni-right">
					  <view class="uni-first"> SY口气清新剂喷雾便携持久型去口臭口气重口腔异味 </view>
					  <view class="uni-second">
						  <view class="lefts">
							  <view class="first">
								  <text class="money">¥268.00</text>
								  <text class="frontMon">¥563.40</text> 
							  </view>
							  <view class="second">
								  <text class="pep">已有3652人拼团  </text>
								  <text class="number">已售12535件</text> 
							  </view>
						  </view>
						  <view class="rights">去拼团</view>
					  </view>
				  </view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		 data () {
			return { }
			},
		 onLoad(){
			 
		 },
		 methods:{
			 getTeam(){
				 uni.navigateTo({
				 	url:'/pages/shopMall/teamDetail'
				 })
			 }
		 }
			
	}
	
</script>

<style   scoped lang="scss">
	@import "../../static/scss/common.scss";
	.uni-teamUpList{
		.listBox{
			.list{
				width: 750rpx;
				box-sizing: border-box;
				padding:30rpx;
				display: flex;
				justify-content: space-between;
				border-top:2rpx solid #f2f2f2;
				.imgs{
					width: 150rpx;
					height: 150rpx;
					display: block;
					margin-right:30rpx;
					border-radius: 8rpx;
				}
				.uni-right{
					width: 500rpx;
					height: 150rpx;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					.uni-first{
						color: #000000;
						font-size: 26rpx;
						@include ellipsis(2);
					}
					.uni-second{
						width: 500rpx;
						display: flex;
						justify-content: space-between;
						.lefts{
							.first{
								color:#FF0000 ;
								font-size: 24rpx;;
								.money{
									font-size: 31rpx;
									margin-right:20rpx;
								}
								.frontMon{
									color: #8F8F8F;
									font-size: 24rpx;
									text-decoration: line-through;
								}
							}
							.second{
								color:#8F8F8F ;
								font-size: 24rpx;
								@include ellipsis(1);
								.pep{
									margin-right:15rpx;
								}
								.number{}
							}
						}
						.rights{
							width: 160rpx;
							height: 60rpx;
							line-height: 60rpx;
							background: #FF9A9E;
							border-radius: 30rpx;
							font-size: 32rpx;
							text-align: center;
							font-weight: bold;
							color: #FFFFFF;
						}
					}
				}
				
			}
			
		}
	}
</style>
