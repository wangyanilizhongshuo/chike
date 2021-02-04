<template>
	<view class="uni-notice">
		<view class="noticeBox" v-for="(item,index) in noticeList" :key="index">
			<view class="uni-tops">
				<view class="left">{{item.gonggao}}</view>
				<view class="right">{{item.add_time}}</view>
			</view>
			<view class="uni-downs">{{item.notice}}</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		 data () {
			return { 
				noticeList:[]
				}
		},
		onLoad(){
			this.getNotice();
		},
		methods:{
			getNotice(){
				this.$http.get('mini/v1/service/notice',{},(res)=>{
					if(res.state==0){
						this.noticeList=res.data.list
					}
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.uni-notice{
		border-top:20rpx solid #f2f2f2;
		.noticeBox{
			width: 750rpx;
			padding:36rpx 30rpx 33rpx;
			box-sizing: border-box;
			background-color: #fff;
			border-bottom: 2rpx solid #f2f2f2;
			.uni-tops{
				display: flex;
				width: 690rpx;
				justify-content: space-between;
				.left{
					color: #222222;
					font-size: 28rpx;
				}
				.right{
					color: #888888;
					font-size: 24rpx;
				}
			}
			.uni-downs{
				margin-top:20rpx;
				color: #222222;
				font-size: 24rpx;
			}
			
		}
		
	}
</style>
