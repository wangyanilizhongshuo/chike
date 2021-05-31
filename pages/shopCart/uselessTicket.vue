<template>
	<view class="uni-serverTicket" >
		
		<view class="ticketBox" v-for="(item,index) in ticketList" :key="index">
			<view class="ticketList" @tap.stop="getChoice(index)">
				<view class="uni-tops">
					<view class="uni-lefts">
						 <image class="left1" src="https://chikehometest.hzbixin.cn/upload/images/feedback/20210428/397835dff3fd2e2f36d475abcff0eab4.png" mode=""></image>
						 <view class="right1">
							 <view class="top1">服务券</view>
							 <view class="down1">{{item.expiration}}</view>
						 </view>
					</view>
					<view class="uni-rights">
						<view class="top2" v-if="item.typeid==1">
							<view class="priLogo">¥</view>
							<view class="moneyValue">{{item.value}}</view>
						</view>
						<view class="top2" v-if="item.typeid==2"  style="align-items: flex-end;">
							<view class="moneyValue" style="font-size:50rpx;">{{item.value}}</view>
							<view class="priLogo">折</view>
						</view>
						<view class="down2">{{item.title}}</view>
					</view>
				</view>
				<view class="uni-center"></view>
				<view class="uni-downs">
					{{item.info}}
				</view>
				<image class="clickImg" v-if="item.is_check==1" src="https://chikehometest.hzbixin.cn/upload/images/feedback/20210428/b5a92fa43a5af6af9e6cad4063865e4d.png"></image>
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
	@import "../../static/scss/common.scss";
	.uni-serverTicket{
		// height: 100vh;
		min-height: 100vh;
		background-color: #f2f2f2;;
		position: relative;
		left:0rpx;
		top:0rpx;
		padding-top:40rpx;
		box-sizing: border-box;
		
	}
	.uni-center{
	
		border:1rpx dashed #f2f2f2;
	}
	.ticketBox{
		width: 750rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		
		.ticketList{
			width: 657rpx;
			height: 220rpx;
			margin-bottom: 26rpx;
			border-radius: 8rpx;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			background-color:#fff;
			padding:25rpx 30rpx;
			box-sizing: border-box;
			position: relative;
			left:0rpx;
			top:0rpx;
			color: #C8C8C8;;
			.uni-tops{
				display: flex;
				justify-content: space-between;
				.uni-lefts{
					display: flex;
					// border: 1rpx solid red;;
					.left1{
						display: block;
						width: 76rpx;
						height: 76rpx;
						margin-right: 22rpx;;
					}
					.right1{
						height: 76rpx;
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						.top1{
							font-weight: bold;
							
							font-size: 32rpx;
						}
						.down1{
							
							font-size: 20rpx;
						}
					}
				}
				.uni-rights{
				     
					
					font-weight: bold;
					height: 76rpx;
					flex-direction: column;
					align-items: center;
					display: flex;
					justify-content: space-between;
					.top2{
						
						display: flex;
						justify-content: flex-start;
						
					  .priLogo{
						  
						  font-size: 20rpx;
						  margin-right:4rpx;
					  }
					  .moneyValue{
						  font-size: 30rpx;
					  }
					}
					.down2{
						font-size: 20rpx;
						
						font-weight: normal;
					}
				}
			}
			.uni-downs{
				font-size: 20rpx;
			
				 @include ellipsis(2);
			}
			
		}
	}
</style>
