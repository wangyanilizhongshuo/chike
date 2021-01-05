<template>
	<view class="uni-serverTicket" >
		<view class="uni-useTicket uni-TicketStyle" >
			 <view class="ticket-box" v-for="(item,index) in 7" :key="index">
			 	<view class="box" >
			 		<view class="left">
						<view class="money active">5</view>
						<view class="detaisls">
							<view class="first active" >RMB</view>
							<view class="second active">无门槛服务券</view>
							<view class="third">使用时间： 12.30前使用</view>
						</view>
					</view>
					<view class="right active">立即使用 </view>
			 	</view>
				<image class="clickImg" src="http://zxyp.hzbixin.cn/files/35271607417284272.jpg"></image>
			 </view>
		</view>

		<view class="bottom-tips">
			<view class="reguler style123" @tap.stop="jumps(1)">使用规则</view>
			<view class="uselessTicker style123"  v-if="occurFlag" @tap.stop="jumps(2)" >查看无效券</view>
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
					url:'/pages/shopMall/useRegular'
				  })
				}else if(type ==2 ){
					uni.navigateTo({
						url:'/pages/shopMall/uselessTicket'
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
		.bottom-tips{
			width: 750rpx;
			height: 90rpx;
			padding:0rpx 30rpx;
			position: fixed;
			z-index: 10;;
			bottom:0rpx;
			left:0rpx;
			box-sizing: border-box;
			background-color: #fff;
			display: flex;
		    align-items: center;
			justify-content: space-around;
			color: #888888;
			font-size: 26rpx;
			.style123{
				width: 345rpx;
				text-align: center;
				height: 90rpx;
				line-height: 90rpx;
			}
			
		}
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
					padding:0rpx 55rpx;
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
						width: 90rpx;
						height: 90px;
						font-size: 40rpx;
					}
				}
			}
		}
	}
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
