<template>
	<view class="uni-balance">
		<view class="contentss">
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
</template>

<script>
	export default {
		data() {
			return {
				mainList:[],
				pages:1,
				pageV:1
			}
		},
		onLoad(){
			this.getList();
		},
		onReachBottom(){
			if(this.pagesV==0){
				this.pages+=1;
				this.getList();
			}
			
		},
		methods:{
			// jumps(){
			// 	uni.navigateTo({
			// 		url:'/pages/personCenter/myCommission/commissionDetailList'
			// 	})
			// },
			getList(){
					 let that=this;
					 that.$http.post('mini/v1/user/integrallog',{
						 page:that.pages,
					 },(res)=>{
						 if(res.state==0){
							that.pagesV=res.data.is_request;
							if(res.data.is_request==0){
								let aa = res.data.list;
								let bb = that.mainList;
								
								
								 that.mainList = bb.concat(aa)
							}
							 
						 }
					 })
			}
		}
	}
</script>

<style scoped lang="scss">
	@import "../../../static/scss/common.scss";
	.contentss{
		background-color: #fff;;
		.listBox{
			background-color: #fff;
			.list{
				display: flex;
				width: 750rpx;
				height: 128rpx;
				justify-content: space-between;
				padding:15rpx 30rpx;
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
