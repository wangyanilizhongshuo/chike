<template>
	<view class="uni-serverTicket" >
		<view class="uni-useLessTicker uni-TicketStyle">
			<view class="ticket-box" v-for="(item,index) in ticketList" :key="index">
				<view class="box" >
					<view class="left">
						<view class="money activess">{{item.value}}</view>
						<view class="detaisls">
							<view class="first activess" >RMB</view>
							<view class="second activess">{{item.title}}</view>
							<view class="third">使用时间：{{item.expiration}}前使用</view>
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
				ticketList:[],
				pages:1,
				pageV:1,
			    serverShopId:''
				
			}
			},
		 onLoad(options){
			 this.setData(options);
			 this.getList();
			 console.log(options)
		 },
		 onReachBottom(){
		 	if(this.pagesV==0){
		 		this.pages+=1;
		 		this.getList();
		 	}
		 },
		 methods:{
			 getList(){
			 	 let  that=this;
			 		 this.$http.post('mini/v1/coupon/couponlist',{
			 			  cateid:2,
			 			  status:3,
			 			  store_id:that.serverShopId,
			 			  page:that.pages
			 		 },(res)=>{
			 			 if(res.state==0){
			 				 that.pagesV=res.data.is_request;
			 				 if(res.data.is_request==0){
			 					 let aa = res.data.list;
			 					 let bb = that.ticketList;
			 					 that.ticketList = bb.concat(aa);
			 				 }
			 				
			 			 }
			 		 })
			 },
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
			
		 }
		 
		 
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
					padding:0rpx 25rpx 0 0rpx;
					box-sizing: border-box;
					background-image: url(../../static/image/ticket-bg.png);
					background-repeat: no-repeat;
					background-size: 660rpx 220rpx;
					
					.left{
						display: flex;
						height: 220rpx;
						align-items: center;
						.money{
							font-size: 50rpx;
							margin-right:20rpx;
							width: 150rpx;
							text-align: center;
						}
						.detaisls{
							padding-right:35rpx;
							box-sizing: border-box;
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
						line-height: 90rpx;
						width: 130rpx;
						height: 90rpx;
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
