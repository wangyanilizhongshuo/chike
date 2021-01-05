<template>
	<view class="shopMallcart">
		
		<view class="listBox">
			<side-slip class="sideSlipBox"  @remove="onRemove(index)" v-for="(items,indexs) in 9" :key="indexs">
			<view class="list" >
				 <view class="uni-lefts" @tap.stop="signalChoiceFlag=(!signalChoiceFlag)">
					 <image v-if="signalChoiceFlag" class="imsgs" src="../../static/image/shopCart-btn.png"></image>
				     <image v-if="!signalChoiceFlag" class="imsgs" src="../../static/image/shopCart-btnActive.png"></image>
				 </view>
				 <image class="uni-centers" src="https://img9.51tietu.net/pic/2019-091200/ff1vqwm3q33ff1vqwm3q33.jpg"></image>
			     <view class="uni-rights">
					  <view class="firsts">SY口口腔异味 </view>
                      <view class="second"><text class="listss" v-for="(item,index) in 2" :key="index">甜橙味:120ml</text> </view>   
                      <view class="third">
						  <view class="left">¥49.99</view>
						  <view class="right">
							  <view class="zuo" @tap.stop="getGoodsNum(1)">-</view>
							  <view class="zhong">{{goodNum}}</view>
							  <view class="you"  @tap.stop="getGoodsNum(1)">+</view>
						  </view>
					  </view>
	
                     </view>
				 </view>
				</side-slip>
			</view>
			<!--  -->
			<view  class="footer">
				<view class="uni-left" @tap.stop="allChoiceFlag=(!allChoiceFlag)">
					<image v-if="allChoiceFlag" class="imsgs" src="../../static/image/shopCart-btn.png"></image>
					<image v-if="!allChoiceFlag" class="imsgs" src="../../static/image/shopCart-btnActive.png"></image>
				    <view class="fields">全选</view>
				</view>
				<view class="uni-center">¥<text class="mon">120.0</text></view>
				<view class="uni-right" @tap.stop="jumps">结算</view>
			</view>	
			<view style="width: 750rpx;height: 170rpx;background-color: #f2f2f2;"></view>
		</view>
</template>

<script>
	import SideSlip from '@/components/side-slip/del'
	export default {
		 data () {
			return { 
				// 单选
				signalChoiceFlag:false,
				// 全选
				allChoiceFlag:false,
				// 购物车数量
				goodNum:1
			}
		},
		onLoad(){
			
		},
		components: {
			'side-slip': SideSlip
		},
		methods:{
			// if (this.labelList[index].active == 0) {
			// 					   const item = {
			// 						 ...this.labelList[index],
			// 						 active:1
			// 					   };
			//       this.$set(this.labelList, index, item);
			getGoodsNum(style){
				if(style ==1 && this.goodNum>1){
					this.goodNum=this.goodNum-1;
				}
				else if (style ==2){
					this.goodNum=this.goodNum+1;
				}
			},
			jumps(){
				uni.navigateTo({
					url:'/pages/shopMall/confirm'
				})
			},
			onRemove(index) {
				uni.showToast({
					title: `取消了第${index}个cell`,
					icon: 'none'
				})
				// this.listData.splice(index, 1)
			},
		}
	}
</script>
<style scoped lang="scss"> 
    @import "../../static/scss/common.scss";
	// @include ellipsis(1);
.shopMallcart{
	height: 100vh;
	background-color: #f2f2f2;
	position: relative;
	left:0rpx;
	top:0rpx;
	.listBox{
		.list{
			width: 750rpx;
			padding: 30rpx;
			box-sizing: border-box;
			display: flex;
			align-items: center;
			justify-content: space-between;
			background-color: #fff;
			border-top:2rpx solid #f2f2f2;
			.uni-lefts{
				width: 50rpx;
				height: 50rpx;
				.imsgs{
					display: block;
					width: 34rpx;
					height: 34rpx;
				    margin-top:8rpx;
					margin-left:8rpx;
				}
			}
			.uni-centers{
				display: block;
				width: 150rpx;
				height: 150rpx;
				border-radius: 8rpx;
			}
			.uni-rights{
				width: 440rpx;
				height: 150rpx;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				.firsts{
					color: #000000;
					font-size: 26rpx;
					line-height: 30rpx;;
					@include ellipsis(2);
				}
				.second{
					width: 440rpx;
					display: flex;
					font-size: 22rpx;
                    color: #8F8F8F;
					.listss{
					   padding:6rpx;
					   height: 32rpx;
					   background: #F3F3F3;
					   border-radius: 4rpx;
					   margin-right:10rpx;
					}
				}
				.third{
					display: flex;
					justify-content: space-between;
					align-items: center;
					.left{
						color: #FF0000;
						font-size: 24rpx;
					}
					 @extend  %inputjj;
				}
				
			}
		}
		
	}
	
}
.footer{
	width: 750rpx;
	height: 170rpx;
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: fixed;
	padding: 0rpx 30rpx;
	box-sizing: border-box;
	left:0rpx;
	bottom: 0rpx;
	z-index:30;
	background-color: #fff;
	.uni-left{
		display: flex;
		align-items: center;
		height: 60rpx;
		.imsgs{
			display: block;
			width: 34rpx;
			height: 34rpx;
			margin:9rpx 20rpx 0rpx 0rpx;
		}
		.fields{
			color: #222222;
			font-size: 28rpx;
		}
		
	}
	.uni-center{
		color: #FF0000;
		font-size: 24rpx;;
		.mon{
			font-size: 32rpx;;
		}
	}
	.uni-right{
		width: 300rpx;
		height: 90rpx;
		text-align: center;
		line-height: 90rpx;
		background: #FF9A9E;
		border-radius: 45rpx;
		font-size: 32rpx;
		font-family: PingFang SC;
		font-weight: bold;
		color: #FFFFFF;
	}
	
}
</style>
