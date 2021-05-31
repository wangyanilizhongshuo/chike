<template>
	<view class="uni-balance">
		<view class="contentBox">
			<view  class="bgBox">
			    <view class="contentFirst">
					<view class="uni-first" @tap.stop="jumps(1)">
						<image class="ruleImg" src="https://chikehometest.hzbixin.cn/upload/images/feedback/20210428/89c126f3905d5e1881c7fd0b2ecad22e.png"></image>
					    <view class="filed">积分规则</view>
					</view>
					<view class="uni-second">
						<text class="money">{{personData.integral_all}}</text>
					</view>
					<view class="uni-third" >
						<view class="box">
							<view class="uni-left style1">
								<view class="values">{{personData.integral}}</view>
								<view class="field">可使用</view>
							</view>
							<view class="uni-right style1"  @tap.stop="jumps(2)" >
								<view class="values">{{personData.integral_active}}</view>
								<view class="field">待激活</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="contentss">
				<view class="first">积分记录</view>
			    <view class="listBox">
					<view class="list" v-for="(item,index) in mainList" :key="index" >
						<view class="uni-left">
							<view class="uni-top">{{item.remark}}</view>
							<view class="uni-down">{{item.change_time}}</view>
						</view>
						<view class="uni-right"><text v-if="item.typeid==2">-</text><text  v-if="item.typeid==1">+</text>{{item.amonut}}</view>
					</view>
				</view>
			</view>
		</view>
	 <view class="footer" @tap.stop="jumps(3)">查看更多</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				willjf:'',
				jifen:'',
				mainList:[],
				personData:''
				
			}
		},
		onLoad(options){
			console.log(options)
			this.setData(options);
			this.getList();
			this.getPersonMsg();
			
		},
		methods: {
			 jumps(type){
				 if(type ==1){
					 uni.navigateTo({
					 	url:'/pages/personCenter/myInteGral/inteGralRule'
					 })
				 }else if(type ==2){
					 uni.navigateTo({
					 	url:'/pages/personCenter/myInteGral/willActivate'
					 })
				 }else if(type ==3){
					 uni.navigateTo({
					 	url:'/pages/personCenter/myInteGral/inteGralList'
					 })
				 }
				
			 },
			 getPersonMsg(){
			 	this.$http.post('mini/v1/user/info',{},(res)=>{
			 		  if(res.state==0){
			 			  
			 			  this.personData=res.data;
			 			  
			 		  }
			 	})
			 },
			 getList(){
				 let that=this;
				 that.$http.post('mini/v1/user/integrallog',{
					 page:1,
				 },(res)=>{
					 if(res.state==0){
						 console.log(res)
						 that.mainList=res.data.list;
						 console.log(that.mainList)
						 
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
	.contentBox{
		width: 750rpx;
		background-color: #fff;
		padding:20rpx 0rpx 0rpx;
		box-sizing: border-box;
		.bgBox{
			width: 750rpx;
			height: 270rpx;
			position: relative;
			left:0rpx;
			top:0rpx;
			.contentFirst{
				width: 750rpx;
				height: 285rpx;
				position: absolute;
				left:0rpx;
				top:0rpx;
				padding:40rpx 0rpx 30rpx;
				box-sizing: border-box;
				position: relative;
				left: 0rpx;
				top:0rpx;;
				background: linear-gradient(90deg, #EC6A62 0%, #E16477 100%, #E16477 100%);
				.uni-second{
					text-align: center;
					color: #fff;
					// margin-top:-25rpx;
					// margin-bottom: 25rpx;;
					.lsots{
						font-size: 50rpx;
						margin-right:15rpx;
					}
					.money{
						font-size: 90rpx;;
					}
				}
				.uni-third{
					position: absolute;
					top:195rpx;
					left:30rpx;
					z-index:20;
					.box{
						width: 690rpx;
						height: 180rpx;
						display: flex;
						align-items: center;
						justify-content: space-between;
						background: #FFFFFF;
						box-shadow: 0px 0px 18px 2px rgba(176, 176, 176, 0.5);
						border-radius: 8px;
						.style1{
							width: 345rpx;
							text-align: center;
							color: #0F0F0F;
							.value{
								margin-bottom: 20rpx;
								font-size: 42rpx;
							}
							.field{
								font-size: 26rpx;;
							}
						}
						.uni-right{
							color: #969696;
						}
					}
					
				}
				.uni-first{
					display: flex;
					justify-content: flex-end;
					align-items: center;
					margin-right:70rpx;
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
		position: absolute;
		left:0rpx;
		bottom:0rpx;
		z-index:10;
	}
}
.contentss{
	background-color: #fff;;
	margin-top:95rpx;
	.first{
		width: 750rpx;
		height: 140rpx;
		line-height: 140rpx;;
		color: #2D2D2D;
		font-size:26rpx;
		padding-left:30rpx;
		box-sizing: border-box;
	}
	.listBox{
		width: 750rpx;
		padding:0rpx 30rpx 0rpx;
		box-sizing: border-box;
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
