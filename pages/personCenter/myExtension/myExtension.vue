<template>
	<view class="uni-extension">
		<image class="uni-bg" src="http://zxyp.hzbixin.cn/files/74211608258197581.jpg"></image>
	    <view class="contentBox">
			<image class="bgCenter" src="http://zxyp.hzbixin.cn/files/5691608258300321.jpg"></image>
			<image class="bgBottom" src="http://zxyp.hzbixin.cn/files/39561608258346206.jpg"></image>
		    <view class="conboxs">
				 <view class="inviteBox">邀请码</view>
				 <image class="ewCodeImg" src="http://zxyp.hzbixin.cn/files/89621607595034087.jpg"></image>
			     <view class="downBox">
					    <image class="wxImg smallImg" src="http://zxyp.hzbixin.cn/files/7981608258434295.jpg"></image>
					    <image class="pxqImg smallImg" src="http://zxyp.hzbixin.cn/files/11211608258466418.jpg"></image>
					    <image class="dlImg smallImg" src="http://zxyp.hzbixin.cn/files/74311608258695795.jpg"></image>
				 </view>
			</view>
		</view>
	</view>
</template>
<!--  -->
<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped lang="scss">
	.uni-extension{
		position: relative;
		left:0rpx;
		top:0rpx;
		// height: 100%;
		// overflow: hidden;
		// background-color: #d46793;
		.uni-bg{
			display: block;
			width: 750rpx;
			height: 100vh;
			// height: 1198rpx;
		}
		.contentBox{
			width: 750rpx;
			height: 100vh;
			position: absolute;
			left:0rpx;
			top:0rpx;
			z-index: 10;
			.bgBottom{
				width: 550rpx;
				height: 433rpx;
				position: absolute;
				left:100rpx;
				bottom: 0rpx;;
			}
			.bgCenter{
				display: block;
				width: 482rpx;
				height: 585rpx;
				position: absolute;
				left:68px;
				top:224rpx;
			}
			.conboxs{
				display: block;
				width: 482rpx;
				height: 585rpx;
				position: absolute;
				left:68px;
				top:224rpx;
				z-index:20;
				// background-color: red;;
				.ewCodeImg{
					display: block;
					width: 356rpx;
					height: 360rpx;
					margin-left:63rpx ;
				}
				.downBox{
					display: flex;
					height: 110rpx;
					width: 482rpx;
					align-items: center;
					justify-content: space-around;
				}
				.smallImg{
					display: block;
					width: 62rpx;
					height: 62rpx;
				}
			}
		}
	}
   .inviteBox{
	   height: 70rpx;
	   line-height: 70rpx;
	   width:482rpx ;
	   text-align: center;
	   color: #333333;
	   font-size: 30rpx;
   }
</style>
