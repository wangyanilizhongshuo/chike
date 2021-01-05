<template>
	<view class="uni-balance">
		<view class="contentss">
		    <view class="listBox">
				<view class="list" v-for="(item,index) in 4" :key="index" @tap.stop="jumps(index)">
					<view class="uni-left">
						<view class="uni-top">购买“健齿亮白清新花果无氟牙膏”</view>
						<view class="uni-down">2020年11月7日14:58:48</view>
					</view>
					<view class="uni-right">+25</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods:{
			jumps(){
				uni.navigateTo({
					url:'/pages/personCenter/myCommission/commissionDetailList'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	@import "../../../static/scss/common.scss";
	.contentss{
		background-color: #fff;;
		.listBox{
			background-color: #fff;
			.list{
				display: flex;
				width: 750rpx;
				height: 128rpx;
				justify-content: space-between;
				padding:15rpx 30rpx;
				box-sizing: border-box;
				align-items: center;
				border-top:2rpx solid #f2f2f2;
				.uni-left{
					height: 98rpx;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					.uni-top{
						color: #4F4F4F;
						font-size: 26rpx;
						@include  ellipsis(2);
					}
					.uni-down{
						color: #A3A3A3;
						font-size: 22rpx;;
					}
				}
				.uni-right{
					color: #2E2E2E;
					font-size: 42rpx;;
				}
				
			}
			
		}
		
	}
</style>
