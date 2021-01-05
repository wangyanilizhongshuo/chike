<template>
	<view class="uni-team">
		<view  class="titleBox">
			<view class="titleList"  v-for="(item,index) in titleList" :key="index" @tap.stop="getTitleActive(index)">
				<view :class="titleActiveIndex ==index?'fieldActive':'field'" >{{item}}</view>
				<view v-if="titleActiveIndex ==index" class="lines"></view>
		    </view>
		</view>
		<view style="width: 750rpx;height: 100rpx;;"></view>
		<view class="contentBox" v-if="titleActiveIndex==0">
			<view class="listbox">
				<view class="list" @tap.stop="jumps" v-for="(item,index) in 10 " :key="index">
					<view  class="uni-left">
						<image class="imgs" src="https://img9.51tietu.net/pic/2019-091200/ff1vqwm3q33ff1vqwm3q33.jpg"></image>
					    <view class="uni-boxs">
							<view class="uni-top">无敌元气妹</view>
							<view class="uni-down">15236214785</view>
						</view>
					</view>
					<view  class="uni-right">
						<view class="uni-tops">创建时间</view>
						<view class="uni-downs">2020年11月4日</view>
					</view>
				</view>
			</view>
		</view>
	    <view class="contentBox" v-if="titleActiveIndex==1">
			<view class="listbox">
				<view class="list" v-for="(item,index) in 7 " :key="index">
					<view  class="uni-left">
						<image class="imgs" src="https://img9.51tietu.net/pic/2019-091200/ff1vqwm3q33ff1vqwm3q33.jpg"></image>
					    <view class="uni-boxs">
							<view class="uni-top">无敌元气妹</view>
							<view class="uni-down">15236214785</view>
						</view>
					</view>
					<view  class="uni-right">
						<view class="uni-tops">创建时间</view>
						<view class="uni-downs">2020年11月4日</view>
					</view>
				</view>
			</view>
		</view>
        <view class="contentBox" v-if="titleActiveIndex==2">
			<view class="listbox">
				<view class="list" v-for="(item,index) in 3 " :key="index">
					<view  class="uni-left">
						<image class="imgs" src="https://img9.51tietu.net/pic/2019-091200/ff1vqwm3q33ff1vqwm3q33.jpg"></image>
					    <view class="uni-boxs">
							<view class="uni-top">无敌元气妹</view>
							<view class="uni-down">15236214785</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				titleActiveIndex:0,
				titleList:['我的下级','我的平级','我的上级'],
			}
		},
		methods: {
			// 头部点亮
			getTitleActive(index){
				this.titleActiveIndex=index;
			},
			jumps(){
				uni.navigateTo({
					url:'/pages/personCenter/myTeam/teamDetail'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
@import "../../../static/scss/common.scss";
// @include ellipsis(1);
.uni-team{
	height: 100vh;
	background-color: #f2f2f2;
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
.contentBox{
	.listbox{
		.list{
			width: 750rpx;
			height: 150rpx;
			display: flex;
			align-items: center;
			background-color: #fff;
			box-sizing: border-box;
			justify-content: space-between;
			padding:0rpx 30rpx;
			.uni-left{
				display: flex;
				align-items: center;
				.imgs{
					width: 90rpx;
					height: 90rpx;
					border-radius: 50%;
					margin-right:30rpx;
				}
				.uni-boxs{
					.uni-top{
						color: #3B3B3B;
						font-size: 26rpx;
						margin-bottom:20rpx;;
					}
					.uni-down{
						color: #9B9B9B;
						font-size: 24rpx;;
					}
				}
			}
			.uni-right{
				.uni-tops{
					color: #3B3B3B;
					font-size: 26rpx;
					margin-bottom: 20rpx;
				}
				.uni-downs{
					color: #9B9B9B;
					font-size: 24rpx;
				}
			}
			
		}
		
	}
	
}
</style>
