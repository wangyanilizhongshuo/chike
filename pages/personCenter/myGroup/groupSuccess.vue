<template>
	<view class="uni-myGroup">
			<view class="contentBox">
					<view class="contentSmallBox" v-for="(item,index) in msgData.goods" :key="index">
						<image class="uni-left" :src="item.goods_img"></image>
						<view class="uni-right">
							<view class="first">{{item.goods_name}} </view>
							<view class="second">¥<text  class="mon">{{item.user_price}}</text></view>
							<view class="third">
								<view class="lefts">{{item.rule_name}}：{{item.rule_values}}</view>
								<view class="rights">×{{item.cart_num}}</view>
							</view>
						</view>
					</view>
					<!-- <view class="signalBox"><view class="details">查看拼单详情</view></view> -->
		            <view class="detailBox">
						<view class="uni-first"> 团长人气太高，已经拼团成功啦</view>
						<view class="uni-third">
							<view class="leftGirl">
								<image class="imgss"  :src="msgData.user[0].headimg"></image>
							    <view class="field">团长</view>
							</view>
							<view class="rightBox" >
								<view class="list" v-for="(item1,index1) in msgData1" :key="index1">
									<image class="imgs" :src="item1.headimg"></image>
									<!-- <image class="imgs" src="http://zxyp.hzbixin.cn/files/83621607479563768.jpg"></image> -->
								</view>
								<!--  -->
								
							</view>
						</view>
						<view class="uni-fourth" @tap.stop="jumps">
							<view class="inviteBtn">返回首页</view>
						</view>
					</view>
			 </view>
			
		</view>	
</template>

<script>
	import app from '../../../App.vue'
	export default {
		data() {
			return {
				msgData1:[],
				msgData:[],
				order_sn:''
			}
		},
		onLoad(options){
			this.setData(options)
			console.log(12345)
			this.getData();
		},
		methods: {
			jumps(){
				uni.switchTab({
					url:'/pages/index/index'
				})
				
			},
			getData(){
				let that=this;
				that.$http.post('mini/v1/user/combDetail',{
					order_sn:that.order_sn,
					status:1
				},(res)=>{
					console.log(res)
					if(res.state==0){
						let aa = JSON.parse(JSON.stringify(res.data.list[0]))  ;
						// that.msgData=res.data.list[0]
						// let aa = res.data.list[0]  ;
						
						aa.goods.map((res1)=>{
								res1.goods_img=app.globalData.imgPrefixUrl+res1.goods_img
						})
						that.msgData=aa ;
						that.msgData1=res.data.list[0].user;
						that.msgData1.shift();
						console.log(111111)
						console.log(that.msgData1)
						console.log(that.msgData)
						console.log(111111)
						
						
						
					}
					
				})
			},
		}
	}
</script>

<style scoped lang="scss">
@import "../../../static/scss/common.scss";
// @include ellipsis(1);
	.uni-myGroup{
		height: 100vh;
		background-color: #f2f2f2;
		.contentBox{
			
			border-top:2rpx solid #f2f2f2;
			.contentSmallBox{
				width: 750rpx;
				padding:38rpx 30rpx 30rpx;
				box-sizing: border-box;
				display: flex;
				justify-content: space-between;
				// margin-top: 38rpx;
				background-color: #fff;
				.uni-left{
					display: block;
					width: 150rpx;
					height: 150rpx;;
					margin-right: 30rpx;
					border-radius: 8rpx;
				}
				.uni-right{
					flex:1;
					height: 150rpx;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					.first{
						font-weight: bold;;
						font-size: 26rpx;
						color: #000;
						@include ellipsis(2);
					}
					.second{
						color: #FF0000;
						font-size: 24rpx;;
						.mon{
							font-size: 32rpx;;
						}
					}
					.third{
						display: flex;
						color: #8F8F8F;
						justify-content: space-between;
						font-size: 22rpx;;
						.lefts{}
						.rights{}
					}
				}
			}
		}
	}
.signalBox{
	width: 690rpx;
	margin:30rpx 0rpx;
	height: 60rpx;
	.details{
		width: 240rpx;
		height: 60rpx;
		text-align: center;
		font-size: 28rpx;
		background: #FF9A9E;
		border-radius: 30rpx;
		font-family: PingFang SC;
		font-weight: 500;
		float: right;
		line-height: 60rpx;;
		color: #FFFFFF;
	}
}
.detailBox{
	padding:44rpx 0rpx 65rpx;
	width: 750rpx;
	background-color: #fff;
	margin-top: 20rpx;
	.uni-first{
		text-align: center;
		color: #2A2A2A;
		font-size:28rpx;
		
		
	}
	.uni-second{
		font-size: 28rpx;
		color: #2A2A2A;
		margin:30rpx 0rpx 50rpx;
		text-align: center;
		.num{
			color: #FF0000;
		}
	}
	.uni-third{
		width: 750rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top:70rpx;
		.leftGirl{
			width: 100rpx;
			display: flex;
			flex-direction: column;
			align-items: center;
			position: relative;
			left:0rpx;
			top:0rpx;
			.imgss{
				display: block;
				width: 94rpx;
				height: 94rpx;
				border-radius: 50%;
			}
			.field{
			   width: 80rpx;
			   height: 24rpx;
			   line-height: 24rpx;
			   text-align: center;
			   // opacity: 0.5;
			   // background-color: #fff;
			   background: #FF9A9E;
			   color: #fff;
			   font-size: 20rpx;
			   border-radius: 8rpx;
			   position: absolute;
			   left:10rpx;
			   bottom: 0rpx;;
			}
		}
		.rightBox{
			display: flex;;
			.list{
				margin-left: 25rpx;;
				.imgs{
					display: block;
					width: 94rpx;
					height: 94rpx;
					border-radius: 50%;;
				}
			}
			
		}
	}
	.uni-fourth{
		margin-top:50rpx;
		.inviteBtn{
			width: 240rpx;
			height: 60rpx;
			text-align: center;
			line-height: 60rpx;
			color: #fff;
			margin-left:255rpx;
			font-size: 28rpx;
			background: #FF9A9E;
			border-radius: 30rpx;
		}
	}
	
}
</style>
