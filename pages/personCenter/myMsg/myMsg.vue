<template>
	<view  class="uni-myMsg">
		<view class="listBox">
			<view class="list" @tap.stop="jumps(1)">
				<image class="imgs uni-left" src="http://zxyp.hzbixin.cn/files/31601608261024958.jpg"></image>
				<view class="uni-right">
				     <view class="uni-first">
						 <view class="lefts">系统消息 </view>
						 <view class="rights" v-if="msgList.system[0].send_time">{{msgList.system[0].send_time}} </view>
					 </view>
					 <view class="uni-second" v-if="msgList.system[0].text">{{msgList.system[0].text}}</view>
				</view>
			</view>
			<view class="list" @tap.stop="jumps(2)">
				<image class="imgs uni-left" src="http://zxyp.hzbixin.cn/files/82551608261149632.jpg"></image>
				<view class="uni-right">
				     <view class="uni-first">
						 <view class="lefts">订单消息</view>
						 <view class="rights" v-if="msgList.goods[0].send_time">{{msgList.goods[0].send_time}}</view>
					 </view>
					 <view class="uni-second" v-if="msgList.goods[0].text"> {{msgList.goods[0].text}}</view>
				</view>
			</view>
			<view class="list" @tap.stop="jumps(3)">
				<image class="imgs uni-left" src="http://zxyp.hzbixin.cn/files/34991608261165149.jpg"></image>
				<view class="uni-right">
				     <view class="uni-first">
						 <view class="lefts">服务消息 </view>
						 <view class="rights" v-if="msgList.service[0].send_time"> {{msgList.service[0].send_time}}</view>
					 </view>
					 <view class="uni-second" v-if="msgList.service[0].text">{{msgList.service[0].text}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				msgList:''
			}
		},
		onLoad(options){
			this.setData(options);
			this.getMsg();
		},
		methods: {
			jumps(type){
				uni.navigateTo({
					url:'/pages/personCenter/myMsg/messageDetail?types='+type
				})
			},
			getMsg(){
				this.$http.post('mini/v1/user/mymsg',{},(res)=>{
					if(res.state==0){
						console.log(res)
						this.msgList=res.data;
						
					}
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	@import "../../../static/scss/common.scss";
	.uni-myMsg{
		.listBox{
			.list{
				width: 750rpx;
				padding:30rpx;
				box-sizing: border-box;
				display: flex;
				justify-content: space-between;
				align-items: center;
				border-top:2rpx solid #f2f2f2;
				.imgs{
					display: block;
					width: 80rpx;
					height: 80rpx;
					margin-right:30rpx;;
				}
				.uni-right{
					flex:1;
					height: 80rpx;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					.uni-first{
						display: flex;
						justify-content: space-between;
						.lefts{
							color: #222222;;
							font-size: 28rpx;;
						}
						.rights{
							color: #888888;
							font-size: 24rpx;;
							;
						}
					}
					.uni-second{
						color: #222222;
						font-size: 24rpx;
						@include ellipsis(1);
					}
				}
			}
		}
	}

</style>
