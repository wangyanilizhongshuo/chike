<template>
	<view class="uni-server">
		<view  class="titleBox">
			<view class="titleList"  v-for="(item,index) in titleList" :key="index" @tap.stop="getTitleActive(index)">
				<view :class="titleActiveIndex ==index?'fieldActive':'field'" >{{item}}</view>
				<view v-if="titleActiveIndex ==index" class="lines"></view>
		    </view>
		</view>
		<view style="width: 750rpx;height: 100rpx;"></view>
		<view class="allBox style1" v-if="titleActiveIndex==0">
			<view class="listBox">
				<view class="list" v-for="(item,index) in  2" :key="index">
					<view class="uni-title">
						<view class="uni-left">优琦口腔（下沙江滨店）</view>
                        <view class="tips">已完成</view>
                        <!-- <view class="tips">待使用</view> -->
					</view>
					<view class="uni-center" >
						<image class="lefts" src="https://img9.51tietu.net/pic/2019-091200/ff1vqwm3q33ff1vqwm3q33.jpg"></image>
					    <view class="right">
							<view class="first">超声波洗牙（豪华套餐）</view>
							<view class="second">预约时间  2020年11月3日17:06</view>
							<view class="third">¥<text class="money">45.43</text></view>
						</view>
					</view>
					<view class="uni-bottom" v-if="index==1">
						<timePicker
							showType="yearToMinute"
							beginDate="1970-01-01"
							endDate="2030-12-31"
							beginTime="06:00:00"
							endTime="23:59:59"
							@btnConfirm="btnConfirm" 
						>	
						<view class="fields stylesss" >修改预约</view>
					</timePicker> 
						<text class="field stylesss" @tap.stop="jumpsDetail(1)">去使用</text>
					</view>
					<view class="uni-bottom" v-if="index==0"><text class="field stylesss" @tap.stop="jumpsDetail(2)">去留言</text></view>
				</view>
			</view>
		</view>
		<view class="willUseBox style1"  v-if="titleActiveIndex==1">
			<view class="listBox">
				<view class="list" v-for="(item,index) in  3" :key="index">
					<view class="uni-title">
						<view class="uni-left">优琦口腔（下沙江滨店）</view>
			            <view class="tips">已完成</view>
			            <!-- <view class="tips">待使用</view> -->
					</view>
					<view class="uni-center" >
						<image class="lefts" src="https://img9.51tietu.net/pic/2019-091200/ff1vqwm3q33ff1vqwm3q33.jpg"></image>
					    <view class="right">
							<view class="first">超声波洗牙（豪华套餐）</view>
							<view class="second">预约时间  2020年11月3日17:06</view>
							<view class="third">¥<text class="money">45.43</text></view>
						</view>
					</view>
					<view class="uni-bottom" >
						<timePicker
							showType="yearToMinute"
							beginDate="1970-01-01"
							endDate="2030-12-31"
							beginTime="06:00:00"
							endTime="23:59:59"
							@btnConfirm="btnConfirm" 
						>	
						<view class="fields stylesss" >修改预约</view>
					</timePicker> 
						<text class="field stylesss" @tap.stop="jumpsDetail(1)">去使用</text>
					</view>
				</view>
			</view>
		</view>
	</view> 
	
</template>
<script>
	import timePicker from '@/components/wing-time-selector/wing-time-selector.vue';
	export default {
		data() {
			return {
				titleActiveIndex:0,
				titleList:['全部','待使用'],
				timeValue:''
			}
		},
		components:{
			timePicker,
		},
		methods: {
			// 头部点亮
			getTitleActive(index){
				this.titleActiveIndex=index;
			},
			jumpsDetail(type){
				if(type ==1){
					// 使用
					uni.navigateTo({
					url:'/pages/personCenter/myServerOrder/serverDetail'
				   })
				}else if(type ==2){
					// 留言
					uni.navigateTo({
						url:'/pages/personCenter/myServerOrder/giveAMsg'
					})
				}
				else if(type ==2){
					// 预约
				}
				
			},
			btnConfirm(e){
				e.month=e.month.padStart(2,0);
				e.day=e.day.padStart(2,0);
				e.hour=e.hour.padStart(2,0);
				e.minute=e.minute.padStart(2,0);
				this.timeValue=e.year+'-'+e.month+'-'+e.day+' '+e.hour+':'+e.minute;
				console.log(this.timeValue)
			},
			
		}
	}
</script>
<style scoped lang="scss">
	@import "../../../static/scss/common.scss";
	.uni-server{
		background-color: #f2f2f2;
		height: 100vh;
	}
	.titleBox{
		position: fixed;
		left: 0rpx;
		top:0rpx;
		z-index: 30;
		background-color: #fff;
		width: 750rpx;
		height: 100rpx;
		padding:0rpx 175rpx;
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 28rpx;border-bottom: 2rpx solid #f2f2f2;
		.titleList{
			width: 200rpx;
			text-align: center;
			display: flex;
			flex-direction: column;
			align-items: center;
			height: 60rpx;
			justify-content: space-between;
		}
		.field{
			color:#B6B6B6 ;
		}
		.fieldActive{
			color: #FF9A9E;
		}
		.lines{
			width: 50rpx;
			height: 6rpx;
			background: #FF6A6C;
			border-radius: 2rpx;
		}
	}
	.style1{
		.listBox{
			background-color: #fff;
			.list{
				width: 750rpx;
				height: 365rpx;
				padding:30rpx;
				box-sizing: border-box;
				.uni-title{
					display: flex;
					justify-content: space-between;
					align-items: center;
					.uni-left{
						font-weight: bold;
						color: #000;
						font-size: 32rpx;;
					}
					.tips{
						color: #FF6A6C;
						font-size: 24rpx;;
					}
					
				}
				.uni-bottom{
					margin-top:16rpx;
					display: flex;
					justify-content: flex-end;
					.fields{
						background:#fff ;
						color:#FF9A9E;
						margin-right:30rpx;
						border:2rpx solid #FF9A9E;
						box-sizing: border-box;
					}
					.stylesss{
						display: block;
						width: 160rpx;
						height: 60rpx;
						text-align: center;
						line-height: 60rpx;
						font-size: 28rpx;;
						border-radius: 30rpx;
					}
					.field{
						
						
						background: #FF9A9E;
						
						color:#fff;
						
					}
					
				}
				.uni-center{
					display: flex;
					margin-top:46rpx;
					.lefts{
						display: block;
						width: 150rpx;
						height: 150rpx;
						border-radius: 8rpx;
						margin-right: 20rpx;;
					}
					.right{
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						.first{
							color: #000000;
							font-size: 28rpx;
							font-weight: bold;
							
						}
						.second{
							color: #454545;
							font-size: 24rpx;;
						}
						
						.third{
							color: #FF0000;
							font-size: 32rpx;
							font-weight: bold;
							.money{
								font-size: 42rpx;
							};
						}
					}
				}
			}
			
		}
	}
</style>