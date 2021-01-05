<template>
	<view  class="uni-myMsg">
		<view class="listBox">
			<view class="list" v-for="(item,index) in msgList"  :key="index">
				<view class="uni-right">
				     <view class="uni-first">
						 <view class="lefts">{{item.title}} </view>
						 <view class="rights">{{item.send_time}} </view>
					 </view>
					 <view class="uni-second">{{item.content}}</view>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				titleName:'',
				types:1,
				pages:1,
				pagesV:'',
				msgList:[]
			}
		},
		onLoad(options){
			this.setData(options);
			if(this.types==1){
				this.titleName='系统消息'
			}else if (this.types==2){
				this.titleName='商品消息'
			}
			else if (this.types==3){
				this.titleName='服务消息'
			}
			uni.setNavigationBarTitle({
				 title:this.titleName
			})
			this.getData()
		},
		onReachBottom(){
			if(this.pagesV==0){
				this.pages+=1;
				this.getData();
			}
		},
		methods: {
			// 获取所有的数据
			getData(){
				let that=this;
				that.$http.post('mini/v1/user/msglist',{
					typeid:that.types,
					page:that.pages
				},(res)=>{
					if(res.state==0){
						that.pagesV=res.data.is_request;
						if(res.data.is_request==0){
							let aa = res.data.list;
							let bb = that.msgList;
							that.msgList = bb.concat(aa)
						}
						
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
				// display: flex;
				// justify-content: space-between;
				// align-items: center;
				border-top:2rpx solid #f2f2f2;
				.imgs{
					display: block;
					width: 80rpx;
					height: 80rpx;
					margin-right:30rpx;;
				}
				.uni-right{
					
					
					
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
						margin-top:20rpx;
						// @include ellipsis(1);
					}
				}
			}
		}
	}

</style>
