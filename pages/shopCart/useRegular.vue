<template>
	<view class="uni-serverTicket" >
		
		<view class="uni-regularBox"  >
			<view class="list">本券不限使用张数，消费每满200元可减免20元，以此类推；</view>
			<view class="list">有效期为领取后的15天，请在有效期内使用；</view>
			<view class="list">可以分享转赠亲朋好友；</view>
			<view class="list">不兑换现金、不找零；</view>
			<view class="list">不与其他优惠共享；</view>
		</view>
		
	</view>
</template>
<script>
	export default {
		 data () {
			return {
				// 优惠券
				occurFlag:true,
				regularFlag:true,
				
				
			}
			},
		 onLoad(){
			 this.getList();
			 // if (this.labelList[index].active == 0) {
			 // 					   const item = {
			 // 						 ...this.labelList[index],
			 // 						 active:1
			 // 					   };
			 //       this.$set(this.labelList, index, item);
		 },
		 methods:{
			 getList(){
				 
			 }
			
		 }
	}
</script>

<style scoped lang="scss">
	
	.uni-regularBox{
		width: 750rpx;;
		padding:30rpx;
		box-sizing: border-box;
		.list{
			color: #888;
			margin:20rpx 0rpx;;
		}
	}
</style>
