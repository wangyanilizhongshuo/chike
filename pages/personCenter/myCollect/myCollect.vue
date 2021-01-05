<template>
	<view class="uni-collect">
		<view  class="titleBox">
			<view class="titleList"  v-for="(item,index) in titleList" :key="index" @tap.stop="getTitleActive(index)">
				<view :class="titleActiveIndex ==index?'fieldActive':'field'" >{{item}}</view>
				<view v-if="titleActiveIndex ==index" class="lines"></view>
		    </view>
		</view>
		<view style="width: 750rpx;height: 100rpx;;"></view>
		<view class="uni-list" v-if="titleActiveIndex==0" >
			<side-slip class="sideSlipBox" @remove="onRemove(index)" v-for="(item,index) in  listData"  :key="index">
				<view class="box">
					<image class="imgs" :src="item.url"></image>
					<view class="uni-right">
						<view class="uni-first"> {{item.title}} </view>
					    <view class="uni-second">¥<text class="money">{{item.price}}</text></view>
					</view>
				</view>
			
			</side-slip>
		</view>
		<view class="uni-list" v-if="titleActiveIndex==1" >
			<side-slip class="sideSlipBox" @remove="onRemove(index)" v-for="(item,index) in  listData"  :key="index">
				<view class="box">
					<image class="imgs" :src="item.url"></image>
					<view class="uni-right">
						<view class="uni-first"> {{item.title}} </view>
					    <view class="uni-third">1243232 </view>
						<view class="uni-third">忘记发大水封疆大吏大</view>
						<!-- <view class="uni-second">¥<text class="money">{{item.price}}</text></view> -->
					</view>
				</view>
			
			</side-slip>
		</view>
		<view class="uni-list" v-if="titleActiveIndex==2" >
			<side-slip class="sideSlipBox" @remove="onRemove(index)" v-for="(item,index) in  listData"  :key="index">
				<view class="box">
					<image class="imgs" :src="item.url"></image>
					<view class="uni-right">
						<view class="uni-firsts"> 
						    <text class="lefts">我你多少分发多少</text>
						    <text class="rights">1km</text>
						</view>
					   <view class="uni-third">1243232 </view>
					   <view class="uni-third"><text class="red">¥</text><text class="money">49.99</text><text class="normal">门市价：¥668</text></view>
					</view>
				</view>
			</side-slip>
		</view>
	</view>
</template>

<script>
	import SideSlip from '@/components/side-slip/index'
	export default {
		data() {
			return {
				titleActiveIndex:0,
				titleList:['商品','店铺','服务'],
				listData:[
					{
						url:'https://img9.51tietu.net/pic/2019-091200/ff1vqwm3q33ff1vqwm3q33.jpg',
						title:'小巨蛋野樱莓雪齿亮白清新口气去渍去黄牙膏 氨基酸健齿炫齿按压泵头式液体牙160g',
						price:23.99
					},
					{
						url:'https://img9.51tietu.net/pic/2019-091200/ff1vqwm3q33ff1vqwm3q33.jpg',
						title:'小巨蛋野樱莓雪齿亮白清新口气去渍去黄牙膏 氨基酸健齿炫齿按压泵头式液体牙160g',
						price:23.99
					},
					{
						url:'https://img9.51tietu.net/pic/2019-091200/ff1vqwm3q33ff1vqwm3q33.jpg',
						title:'小巨蛋野樱莓雪齿亮白清新口气去渍去黄牙膏 氨基酸健齿炫齿按压泵头式液体牙160g',
						price:23.99
					}
				]
				
			}
		},
		components: {
			'side-slip': SideSlip
		},
		methods: {
			onRemove(index) {
				uni.showToast({
					title: `取消了第${index}个cell`,
					icon: 'none'
				})
				// this.listData.splice(index, 1)
			},
			// 头部点亮
			getTitleActive(index){
				this.titleActiveIndex=index;
			},
		}
	}
</script>

<style scoped lang="scss">
@import "../../../static/scss/common.scss";
// @include ellipsis(1);
.uni-collect{
	.uni-list{
		.sideSlipBox{
			}
			.box{
				width: 750rpx;
				box-sizing: border-box;
				padding:30rpx;
				display: flex;
				height: 216rpx;;
				justify-content: space-between;
			.imgs{
				display: block;
				width: 150rpx;
				height: 150rpx;
				margin-right: 30rpx;
				border-radius: 8rpx;
			}
			.uni-right{
				flex:1;
				display: flex;
				height: 150rpx;;
				flex-direction: column;
				justify-content: space-between;
				.uni-first{
					@include ellipsis(2);
					font-weight: bold;
					color: #000;
					font-size: 26rpx;;
				}
				.uni-firsts{
					display: flex;
					justify-content: space-between;
					.lefts{
						font-weight: bold;
						color: #000;
						font-size: 28rpx;;
					}
					.rights{
						color: #555555;
						font-size: 24rpx;;
					}
				}
				.uni-third{
					color: #555555;
					font-size: 24rpx;
					.normal{
						color: #555555;
						font-size: 24rpx;
						margin-left:20rpx;
					}
					.red{
						color: #FF0000;
						font-weight: bold;
						font-size: 32rpx;;
					}
					.money{
						color: #FF0000;
						font-weight: bold;
						font-size: 42rpx;
					}
				}
				.uni-second{
					color: #FF0000;
					font-size: 24rpx;;
					.money{
						font-size: 32rpx;;
					}
				}
			}
			
		}
		
	}
}
.titleBox{
		position: fixed;
		left: 0rpx;
		top:0rpx;
		z-index: 30;
		background-color: #fff;
		width: 750rpx;
		height: 100rpx;
		padding:0rpx 30rpx;
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 28rpx;border-bottom: 2rpx solid #f2f2f2;
		.titleList{
			width: 230rpx;
			text-align: center;
			display: flex;
			flex-direction: column;
			align-items: center;
			height: 60rpx;
			justify-content: space-between;
			
		}
		.field{
			color:#B6B6B6 ;
		}
		.fieldActive{
			color: #FF9A9E;
		}
		.lines{
			width: 50rpx;
			height: 6rpx;
			background: #FF6A6C;
			border-radius: 2rpx;
		}
	}
</style>
