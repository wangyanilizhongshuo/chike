<template>
	<view class="uni-balance">
		<view class="contentss">
		    <view class="listBox">
				<view class="list" v-for="(item,index) in msgList" :key="index" >
					<view class="uni-left">
							<view class="uni-top">{{item.remark}}</view>
							<view class="uni-down">{{item.change_time}}</view>
						</view>
						<view class="uni-right"><text v-if="item.typeid==1">+</text><text v-if="item.typeid==2">-</text>{{item.amonut}}</view>
					</view>
			</view>
		</view>
		<image class="noData" v-if="noDataFlag" src="https://chikehometest.hzbixin.cn/upload/images/feedback/20210331/bf2d59558fd4b343ddac986b83062a9f.png"></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				status:'',
				noDataFlag:false,
				msgList:[],
				
			}
		},
		onLoad(options) {
			this.setData(options);
			this.getList();
			console.log(options)
		},
		onReachBottom(){
			
			// if(this.pagesV==0){
			// 	this.pages+=1;
			// 	this.getList();
			// }
			
		},
		methods:{
			getList(){
				 let that=this;
				 this.$http.post('/mini/v1/user/earnMoney',{
					 status:this.status
				 },(res)=>{
					 if(res.state  ==0){
						that.pagesV=res.data.is_request;
						if(res.data.is_request==0){
							let aa = res.data.list;
							let bb = that.msgList;
							let cc=res.data.yue;
							let dd=bb.concat(aa);
							that.msgList = dd.concat(cc);
							if(that.msgList.length==0){
								that.noDataFlag=true;
							}else{
								that.noDataFlag=false;
							}
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
	.noData{
		display: block;
		width: 210rpx;
		height: 248rpx;
		margin:250rpx auto 0rpx;
	}
</style>

