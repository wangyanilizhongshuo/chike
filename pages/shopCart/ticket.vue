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
	<view class="bottom-tips">
		<view class="reguler style123" @tap.stop="jumps(1)">使用规则</view>
		<view class="uselessTicker style123"  v-if="occurFlag" @tap.stop="jumps(2)" >查看无效券</view>
	</view> 
	<view style="height: 125rpx;width: 750rpx;;"></view>
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
				serverShopId:'',
				payAllMoney:'',	
				// 选中的红包id
				cu_id:''
			}
			},
		 onLoad(options){
			 this.setData(options);
			 console.log(options)
			  this.getList();
			  if(uni.getStorageSync('serverRedId')){
				  this.cu_id=uni.getStorageSync('serverRedId')
			  }
			
		 },
		 onReachBottom(){
		 	if(this.pagesV==0){
		 		this.pages+=1;
		 		this.getList();
		 	}
		 },
		 methods:{
			jumps(type){
				if(type ==1 ){
					uni.navigateTo({
					url:'/pages/shopCart/useRegular'
				  })
				}else if(type ==2 ){
					console.log(this.serverShopId)
					uni.navigateTo({
						url:'/pages/shopCart/uselessTicket?serverShopId='+this.serverShopId
					})
				}
			},
			getList(){
				 let that=this;
					 that.$http.post('mini/v1/coupon/couponlist',{
						 cateid:2,
						 status:0,
						 store_id:that.serverShopId,
						 page:that.pages
					 },(res)=>{
						 if(res.state==0){
							 that.pagesV=res.data.is_request;
							 if(res.data.is_request==0){
							 	let aa = res.data.list;
							 	aa.map(res=>{
									console.log('conme')
									if(Number(res.user_value)<= Number(that.payAllMoney)  ||res.typeid==2  ){
										res.is_check=0
										
									}else if(res.user_value<=that.payAllMoney&&res.typeid==1){
										res.is_check=2;
									}
									if(res.cu_id==that.cu_id){
										res.is_check=1
									}

								})
							 	let bb = that.ticketList;
							 	that.ticketList = bb.concat(aa);
								console.log(that.ticketList)
								console.log('that.ticketList')
							 }
						 }
					 })
			},
			// 选中优惠券
			getChoice(index){
				let that=this;
				console.log(index)
				console.log('wangyani')
				// 将所有的票都不选中
				that.ticketList.map((items,indexs,array)=>{
					if(indexs!==index){
						if(items.is_check==1  ){
							items.is_check=0;
							uni.removeStorageSync('serverRedId')
						}
						
					}
				})
				console.log(that.ticketList)
				console.log(that.ticketList[index])
				if(that.ticketList[index].is_check==0){
					const item={
						...that.ticketList[index],
						is_check:1
					}
					that.$set(that.ticketList,index,item);
					
					uni.setStorageSync('serverRedId',that.ticketList[index].cu_id)
					
				}else if(that.ticketList[index].is_check==1){
					const item={
						...that.ticketList[index],
						is_check:0
					}
					uni.setStorageSync('serverRedId',0)
					that.$set(that.ticketList,index,item);
				}
				
			}
		 }
		
		 
	}
</script>

<style scoped lang="scss">
	@import "../../static/scss/common.scss";
	// @include ellipsis(1);
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
	.clickImg{
		display: blcok;
		width: 50rpx;
		height: 50rpx;
		position: absolute;
		right:0rpx;
		top:0rpx;
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
							color: #030303;
							font-size: 32rpx;
						}
						.down1{
							color: #7E7E7E;
							font-size: 20rpx;
						}
					}
				}
				.uni-rights{
				     // border: 1rpx solid red;;
					height: 76rpx;
					color: #ED593F;
					font-weight: bold;
					flex-direction: column;
					align-items: center;
					display: flex;
					justify-content: space-between;
					.top2{
						
						display: flex;
						align-items: flex-start;
						// justify-content: flex-start;
						
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
						color: #7E7E7E;
						font-weight: normal;
					}
				}
			}
			.uni-downs{
				font-size: 20rpx;
				color: #7E7E7E;
				 @include ellipsis(2);
			}
			
		}
	}
	.bottom-tips{
		position: fixed;
		bottom:0rpx;
		left: 0rpx;;
		height: 125rpx;
		width: 750rpx;
		display: flex;
		justify-content: center;
		align-items: flex-start;
		color: #888888;
		font-size: 26rpx;
		z-index: 100;
		background-color: #f2f2f2;
		padding-top: 20rpx;
		box-sizing: border-box;
		.reguler{
			margin-right:107rpx;
		}
		.uselessTicker{}
	}
	
</style>
