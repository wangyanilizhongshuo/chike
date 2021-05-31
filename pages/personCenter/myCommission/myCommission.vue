<template>
	<view class="uni-balance">
		<view class="contentBox">
			<view  class="bgBox">
				<image class="bgImg" src="../../../static/image/extra-bg.png"></image>
			    <view class="contentFirst">
					<view class="uni-first" @tap.stop="jumps(3)">
						<image class="ruleImg" src="https://chikehometest.hzbixin.cn/upload/images/feedback/20210428/89c126f3905d5e1881c7fd0b2ecad22e.png"></image>
					    <view class="filed">佣金规则</view>
					</view>
					<view class="uni-second">
						<!-- <text class="lsots">¥</text> -->
						<text class="money">{{brokerage_price}}</text>
					</view>
					<view class="uni-third" >
						<view class="box">
							<view class="first styless" @tap.stop="jumps(4)">转换</view>
							<view class="second styless" @tap.stop="jumps(5)">转赠</view>
							<view class="third styless" @tap.stop="jumps(6)">提现</view>
						</view>
					</view>
				</view>
			</view>
			<view class="contentss">
				<view class="first">佣金记录</view>
			    <view class="listBox">
					<view class="list" v-for="(item,index) in msgList" :key="index" @tap.stop="jumpDetail(index)">
						<view class="uni-left">
							<view class="uni-top">{{item.remark}}</view>
							<view class="uni-down">{{item.change_time}}</view>
						</view>
						<view class="uni-right"><text v-if="item.typeid==1">+</text><text v-if="item.typeid==2">-</text>{{item.amonut}}</view>
					</view>
				</view>
			</view>
		</view>
		<view style="width: 750rpx;height: 128rpx;"></view>
	 <view class="footer" @tap.stop="jumps(2)">查看更多</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				brokerage_price:'',
				now_money:'',
				
				msgList:[]
			}
		},
		onLoad(options) {
			this.setData(options);
			
		},
		// onReachBottom(){
		// 	console.log(111111)
		// 	if(this.pagesV==0){
		// 		this.pages+=1;
		// 		this.getList();
		// 	}
			
		// },
		onShow(){
			this.getList();
		},
		methods: {
			 jumps(type){
				 if(type ==1){
					 uni.navigateTo({
					 	url:'/pages/personCenter/myBalance/transfer'
					 })
				 }else if(type ==2){
					 uni.navigateTo({
					 	url:'/pages/personCenter/myCommission/commissionDetail'
					 })
				 }else if(type ==3){
					 uni.navigateTo({
					 	url:'/pages/personCenter/myCommission/withDrawalRule'
					 })
				 }
				 else if(type ==4){
					 uni.navigateTo({
						url:'/pages/personCenter/myCommission/transformation?brokerage_price='+this.brokerage_price+'&now_money='+this.now_money
					 })
				 }
				 else if(type ==5){
					 uni.navigateTo({
						url:'/pages/personCenter/myCommission/transfer?brokerage_price='+this.brokerage_price
					 })
				 }
				 else if(type ==6){
					 uni.navigateTo({
						url:'/pages/personCenter/myCommission/withdrawal?brokerage_price='+this.brokerage_price
					 })
				 }
			 },
			 jumpDetail(index){
				  let aa=this.msgList[index] ;
				  if(aa.brokerage_type!=3){
					   uni.navigateTo({
					      url:'/pages/personCenter/myCommission/commissionDetailList?link_type='+aa.link_type+'&link_id='+aa.link_id+'&brokerage_type='+aa.brokerage_type
				       })
				  }
				 
			 },
			 getList(){
				 let that=this;
				 this.$http.post('mini/v1/user/brokeragelog',{
					 page:this.pages
				 },(res)=>{
					 if(res.state  ==0){
						 that.msgList=res.data.list
					 }
				 })
			 }
		}
	}
</script>

<style scoped lang="scss">
	@import "../../../static/scss/common.scss";
.uni-balance{
	width: 750rpx;
	background-color: #f2f2f2;
	height: 100vh;
	position: relative;
	left:0rpx;
	top:0rpx;
	overflow-x: hidden;
	.contentBox{
		width: 750rpx;
		background-color: #fff;
		padding:20rpx 30rpx 0rpx;
		box-sizing: border-box;
		.bgBox{
			width: 690rpx;
			height: 270rpx;
			position: relative;
			left:0rpx;
			top:0rpx;
			.bgImg{
				width: 690rpx;
				display: block;
				height: 270rpx;;
			}
			.contentFirst{
				width: 690rpx;
				height: 270rpx;
				position: absolute;
				left:0rpx;
				top:0rpx;
				padding:30rpx 40rpx;
				box-sizing: border-box;
				.uni-second{
					text-align: center;
					color: #fff;
					margin-top:-25rpx;
					margin-bottom: 25rpx;;
					.lsots{
						font-size: 50rpx;
						margin-right:15rpx;
					}
					.money{
						font-size: 90rpx;;
					}
				}
				.uni-third{
					
					border-top:1rpx solid #fff;
					
					.box{
						width: 610rpx;
						display: flex;
						height: 52rpx;
						align-items: center;
						justify-content: space-between;
						margin-top: 20rpx;
						.styless{
							width: 203rpx;
							text-align: center;
							line-height: 52rpx;
							color: #fff;
							font-size: 26rpx;;
							
						}
						.first{
							border-right:1rpx solid #fff;;
						}
						.second{
							border-right:1rpx solid #fff;;
						}
						.third{}
					}
					// text-align: center;
					// width: 130rpx;
					// height: 50rpx;
					// line-height: 50rpx;
					// text-align: center;
					// margin:10rpx 240rpx 0rpx;
					// color:#fff;
					// font-size: 28rpx;
					// border: 2rpx solid #FFFFFF;
					// border-radius: 25rpx;
				}
				.uni-first{
					display: flex;
					justify-content: flex-end;
					align-items: center;
					.ruleImg{
						display: block;
						width: 30rpx;
						height: 30rpx;
						margin-right: 11rpx;
					}
					.filed{
						color: #FFFFFF;
						font-size: 26rpx;;
					}
				}
			}
		}
	}
	.footer{
		width: 750rpx;
		height: 128rpx;
		text-align: center;
		line-height: 128rpx;
		background-color: #fff;
		color: #2E2E2E;
		font-size: 26rpx;
		position: fixed;
		left:0rpx;
		bottom:0rpx;
		z-index:10;
	}
}
.contentss{
	background-color: #fff;;
	.first{
		width: 750rpx;
		height: 140rpx;
		line-height: 140rpx;;
		color: #2D2D2D;
		font-size:26rpx;
	}
	.listBox{
		background-color: #fff;;
		.list{
			display: flex;
			width: 690rpx;
			height: 128rpx;
			justify-content: space-between;
			padding:20rpx 0rpx;
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
