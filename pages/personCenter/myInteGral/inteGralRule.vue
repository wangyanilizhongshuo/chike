<template>
	<view class="uni-inteGralRule">
		<view class="listbox">
			<view class="list" v-for="(item,index) in list" :key="index">{{item}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[
					'本券不限使用张数，消费每满200元可减免20元，以此 类推；',
					'效期为领取后的15天，请在有效期内使用；',
					'可以分享转赠亲朋好友； ',
		            '不兑换现金、不找零；',
					'不与其他优惠共享；'
				   ]
			}
		},
		onLoad(){
			
			
		},
		methods:{
			
		}
	}
</script>

<style scoped lang="scss">
	@import "../../../static/scss/common.scss";
	.uni-inteGralRule{
		width: 750rpx;
		padding:40rpx;
		box-sizing: border-box;
		.listbox{
			.list{
				color: #888888;
				font-size: 28rpx;
				line-height: 50rpx;
			}
		}
	}
</style>
