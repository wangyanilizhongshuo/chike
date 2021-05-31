<template>
	<view class="uni-myGroup">
			<view class="contentBox">
					<view class="contentSmallBox" v-for="(item,index) in msgData.goods">
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
						<view class="uni-second">未在规定时间内完成，拼团失败！</view>
						<view class="uni-third">
							<view class="leftGirl" >
								<image class="imgss"  :src="msgData.user[0].headimg"></image>
								<view class="field" >团长</view>
							</view>
							<view class="centerBox"  v-for="(item,index) in msgData1" :key="index">
								<image class="imgss2"  :src="item.headimg"></image>
							</view>
							<view class="rightBox">
								<view class="list" v-for="(item1,index1) in perpleCha" :key="index1">
									<image class="imgs" src="https://chikehometest.hzbixin.cn/upload/images/feedback/20210428/5f86ec3635fc188de9fcf3a49159adbf.png"></image>
								</view>
								
								
							</view>
						</view>
						<view class="uni-fourth">
							<view  @tap.stop="goBack" class="inviteBtn">回到首页</view>
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
				order_sn:'',
				msgData:'',
				msgData1:'',
				peopleNumBox:'',
				peopleNum:'',
				perpleCha:'',
				pvTime:1000,
				sendMsg:false,
				setIntervalName:''//定时器的名字
			}
		},
		onLoad(options){
			this.setData(options)
			this.getData();
		},
		
		methods: {
			goBack(){
				uni.switchTab({
					url:'/pages/index/index'
				})
			},
			getData(){
				let that=this;
				that.$http.post('mini/v1/user/combDetail',{
					order_sn:that.order_sn,
					status:2
				},(res)=>{
					if(res.state==0){
						clearInterval(that.setIntervalName);
						// that.msgData=res.data.list[0]
						let aa = JSON.parse(JSON.stringify(res.data.list[0]))  ;
						that.peopleNumBox=aa.goods[0].com_total_num;
						that.peopleNum=aa.user.length;
						that.perpleCha=that.peopleNumBox-that.peopleNum;
						aa.goods.map((res1)=>{
								res1.goods_img=app.globalData.imgPrefixUrl+res1.goods_img
						})
						that.msgData=aa ;
						that.msgData1=res.data.list[0].user;
						that.msgData1.shift();//有效的任务的渲染
						
						
						
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
	    height: 100rpx;
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
			.imgss2{
				display: block;
				// width: 94rpx;
				// height: 94rpx;
				height: 70rpx;
				width: 90rpx;
				border-radius: 50%;
			}
			.field{
			  width: 80rpx;
			  height: 24rpx;
			  line-height: 24rpx;
			  text-align: center;
			
			  background: #FF9A9E;
			  color: #fff;
			  font-size: 20rpx;
			  border-radius: 8rpx;
			  position: absolute;
			  left:10rpx;
			  bottom: 0rpx;;
			}
			.fields{
			   width: 90rpx;
			   height: 34rpx;
			   
			}
		}
		.rightBox{
			display: flex;
			height: 100rpx;
			.list{
				margin-left: 25rpx;
				.imgs{
					display: block;
					width: 94rpx;
					height: 94rpx;
					border-radius: 50%;;
				}
			}
			
		}
		.centerBox{
			height: 100rpx;
			display: flex;
			margin-left: 25rpx;
				.imgss2{
					display: block;
					width: 94rpx;
					height: 94rpx;
					border-radius: 50%;
				
			}
			
		}
	}
	.uni-fourth{
		margin-top:40rpx;
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
