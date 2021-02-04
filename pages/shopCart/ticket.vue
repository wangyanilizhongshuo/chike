<template>
	<view class="uni-serverTicket" >
		<view class="uni-useTicket uni-TicketStyle" >
			 <view class="ticket-box" v-for="(item,index) in ticketList" :key="index">
			 	<view class="box" @tap.stop="getChoice(index)">
			 		<view class="left">
						<view class="money active">{{item.value}}</view>
						<view class="detaisls">
							<view class="first active" >RMB</view>
							<view class="second active">{{item.title}}</view>
							<view class="third">使用时间：{{item.expiration}}前使用</view>
						</view>
					</view>
					<view class="right active">立即使用 </view>
			 	</view>
				<image class="clickImg" v-if="item.is_check==1" src="http://zxyp.hzbixin.cn/files/21341608268240828.jpg"></image>
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
							 }
						 }
					 })
			},
			// 选中优惠券
			getChoice(index){
				let that=this;
				
				// 将所有的票都不选中
				that.ticketList.map((items,indexs,array)=>{
					if(indexs!==index){
						if(items.is_check==1  ){
							items.is_check=0;
						}
						
					}
				})
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
					padding:0rpx 55rpx 0 0rpx;
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
