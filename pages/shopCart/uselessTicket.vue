<template>
	<view class="uni-serverTicket" >
		<view class="uni-useLessTicker uni-TicketStyle">
			<view class="ticket-box" v-for="(item,index) in 7" :key="index">
				<view class="box" >
					<view class="left">
						<view class="money activess">5</view>
						<view class="detaisls">
							<view class="first activess" >RMB</view>
							<view class="second activess">无门槛服务券</view>
							<view class="third">使用时间： 12.30前使用</view>
						</view>
					</view>
					<view class="right activess">已使用</view>
				</view>
			</view>
		</view>
		
		
	</view>
</template>
<script>
	export default {
		 data () {
			return {
				// 优惠券
				occurFlag:true,
				
				
			}
			},
		 onLoad(){
			 // if (this.labelList[index].active == 0) {
			 // 					   const item = {
			 // 						 ...this.labelList[index],
			 // 						 active:1
			 // 					   };
			 //       this.$set(this.labelList, index, item);
		 },
		 methods:{
			jumps(type){
				if(type ==1 ){
					uni.navigateTo({
					url:'/pages/index/useRegular'
				  })
				}else {
					uni.navigateTo({
						url:'/pages/index/uselessTicket'
					})
				}
				
			}
		 },
		 
	}
</script>

<style scoped lang="scss">
	.uni-serverTicket{
		height: 100vh;
		background-color: #f2f2f2;;
		position: relative;
		left:0rpx;
		top:0rpx;
		padding-top:40rpx;
		box-sizing: border-box;
		
		.uni-TicketStyle{
			width: 750rpx;
			background-color: #f2f2f2;
			margin-bottom:100rpx;
			.ticket-box{
				width: 660rpx;
				height: 220rpx;
				margin-bottom: 40rpx;;
				margin-left:45rpx;
				position: relative;
				left:0rpx;
				top:0rpx;
				.clickImg{
					display: block;
					width: 79rpx;
					height: 73rpx;
					position: absolute;
					right:0rpx;
					top:0rpx;;
				}
				.active{
					color: #EE5845;
				}
				.activess{
					color: #888;;
				}
				.box{
					width: 660rpx;
					height: 220rpx;
					display: flex;
					align-items: center;
					justify-content: space-between;
					padding:0rpx 0rpx 0rpx 55rpx;
					box-sizing: border-box;
					background-image: url(../../static/image/ticket-bg.png);
					background-repeat: no-repeat;
					background-size: 660rpx 220rpx;
					
					.left{
						display: flex;
						height: 220rpx;
						align-items: center;
						.money{
							font-size: 180rpx;
							margin-right:20rpx;
						}
						.detaisls{
							.first{
								font-size: 28rpx;;
							}
							.second{
								font-size: 40rpx;
								margin:10rpx 0rpx;
							}
							.third{
								color: #616161;
								font-size: 20rpx;
							}
						}
					}
					.right{
						margin-top:65rpx;
						width: 190rpx;
						text-align: center;
						height: 90px;
						line-height: 100rpx;
						font-size: 40rpx;
					}
				}
			}
		}
	}
	
</style>
