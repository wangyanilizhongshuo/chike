<template>
	<view class="uni-myGroup">
		<view  class="titleBox">
			<view class="titleList"  v-for="(item,index) in titleList" :key="index" @tap.stop="getTitleActive(index)">
				<view :class="titleActiveIndex ==index?'fieldActive':'field'" >{{item}}</view>
				<view v-if="titleActiveIndex ==index" class="lines"></view>
		    </view>
		</view>
		<view style="width: 750rpx;height: 100rpx;;"></view>
			<view class="contentBox" v-if="titleActiveIndex==0">
				<view class="lists" v-for="(item,index) in 3" :key="index" @tap.stop="jump(1)">
					<view class="contentTitle">
						<view class="field">2020年11月3日17:06:30</view>
						<view class="uni-right">拼团中，还差 <text class="red">1</text>人</view>          
					</view>
					<view class="contentSmallBox">
						<image class="uni-left" src="https://img9.51tietu.net/pic/2019-091200/ff1vqwm3q33ff1vqwm3q33.jpg"></image>
						<view class="uni-right">
							<view class="first">小巨蛋野樱莓雪齿亮白清新口气去渍去黄牙膏 氨基酸健齿炫齿按压泵头式液体牙160g  </view>
							<view class="second">¥<text  class="mon">85.85</text></view>
							<view class="third">
								<view class="lefts">规格：120ml</view>
								<view class="rights">×1</view>
							</view>
						</view>
					</view>
					<view class="signalBox"><view class="details">查看拼单详情</view></view>
		      	</view>
			</view>
			<view class="contentBox" v-if="titleActiveIndex==1">
				<view class="lists" v-for="(item,index) in 3" :key="index" @tap.stop="jump(2)">
					<view class="contentTitle">
						<view class="field">2020年11月3日17:06:30</view>
						<view class="uni-right"> <text class="successLogo">拼单成功</text></view>          
					</view>
					<view class="contentSmallBox">
						<image class="uni-left" src="https://img9.51tietu.net/pic/2019-091200/ff1vqwm3q33ff1vqwm3q33.jpg"></image>
						<view class="uni-right">
							<view class="first">小巨蛋野樱莓雪齿亮白清新口气去渍去黄牙膏 氨基酸健齿炫齿按压泵头式液体牙160g  </view>
							<view class="second">¥<text  class="mon">85.85</text></view>
							<view class="third">
								<view class="lefts">规格：120ml</view>
								<view class="rights">×1</view>
							</view>
						</view>
					</view>
					<view class="signalBox"><view class="details">查看拼单详情</view></view>
				</view>
			</view>
			<view class="contentBox" v-if="titleActiveIndex==2">
				<view class="lists" v-for="(item,index) in 3" :key="index" @tap.stop="jump(3)">
					<view class="contentTitle">
						<view class="field">2020年11月3日17:06:30</view>
						<view class="uni-right"> <text class="failLogo">拼单失败</text></view>          
					</view>
					<view class="contentSmallBox">
						<image class="uni-left" src="https://img9.51tietu.net/pic/2019-091200/ff1vqwm3q33ff1vqwm3q33.jpg"></image>
						<view class="uni-right">
							<view class="first">小巨蛋野樱莓雪齿亮白清新口气去渍去黄牙膏 氨基酸健齿炫齿按压泵头式液体牙160g  </view>
							<view class="second">¥<text  class="mon">85.85</text></view>
							<view class="third">
								<view class="lefts">规格：120ml</view>
								<view class="rights">×1</view>
							</view>
						</view>
					</view>
					<view class="signalBox"><view class="details">查看拼单详情</view></view>
				</view>
			</view>
			
		</view>
	
</template>

<script>
	export default {
		data() {
			return {
				titleActiveIndex:0,
				titleList:['拼团中','拼团成功','拼团失败'],
			}
		},
		methods: {
			// 头部点亮
			getTitleActive(index){
				this.titleActiveIndex=index;
			},
			jump(type){
				
				if(type ==1){
					uni.navigateTo({
						url:'/pages/personCenter/myGroup/groupStart'
					})
				}else if(type ==2){
					uni.navigateTo({
						url:'/pages/personCenter/myGroup/groupSuccess'
					})
				}else if(type ==3){
					uni.navigateTo({
						url:'/pages/personCenter/myGroup/groupFail'
					})
				}
				
			}
		}
	}
</script>

<style scoped lang="scss">
@import "../../../static/scss/common.scss";
// @include ellipsis(1);
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
	.uni-myGroup{
		.contentBox{
			width: 750rpx;
			padding:35rpx 30rpx;
			box-sizing: border-box;
			.contentTitle{
				display: flex;
				justify-content: space-between;
				font-size: 24rpx;;
				.field{
					color: #454545;;
				}
				.successLogo{
					color: #FF9A9E;
				}
				.failLogo{
					color:#5D5D5D;
				}
				
				.uni-right{
					.red{color: #FF0000;}
				}
			}
			.contentSmallBox{
				width: 690rpx;
				display: flex;
				justify-content: space-between;
				margin-top: 38rpx;
				.uni-left{
					display: block;
					width: 150rpx;
					height: 150rpx;;
					margin-right: 30rpx;
					border-radius: 8rpx;
				}
				.uni-right{
					flex:1;
					height: 150rpx;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					.first{
						font-weight: bold;;
						font-size: 26rpx;
						color: #000;
						@include ellipsis(2);
					}
					.second{
						color: #FF0000;
						font-size: 24rpx;;
						.mon{
							font-size: 32rpx;;
						}
					}
					.third{
						display: flex;
						color: #8F8F8F;
						justify-content: space-between;
						font-size: 22rpx;;
						.lefts{}
						.rights{}
					}
				}
			}
		}
	}
.signalBox{
	width: 690rpx;
	margin:30rpx 0rpx;
	height: 60rpx;
	.details{
		width: 240rpx;
		height: 60rpx;
		text-align: center;
		font-size: 28rpx;
		background: #FF9A9E;
		border-radius: 30rpx;
		font-family: PingFang SC;
		font-weight: 500;
		float: right;
		line-height: 60rpx;;
		color: #FFFFFF;
		
	}
}
</style>
