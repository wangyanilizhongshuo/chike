<template>
	<view class="uni-teamUpList">
		<view class="listBox">
			<view class="list" v-for="(item,index) in pintuanList" :key="index" @tap.stop="getTeam(index)">
				  <image class="imgs uni-left" :src="item.goods_img"></image>
			      <view  class="uni-right">
					  <view class="uni-first">{{item.goods_name}} </view>
					  <view class="uni-second">
						  <view class="lefts">
							  <view class="first">
								  <text class="money">¥{{item.user_price}}</text>
								  <text class="frontMon">¥{{item.price}}</text> 
							  </view>
							  <view class="second">
								  <text class="pep">已有3652人拼团  </text>
								  <text class="number">已售{{item.sales}}件</text> 
							  </view>
						  </view>
						  <view class="rights">去拼团</view>
					  </view>
				  </view>
			</view>
		</view>
	</view>
</template>

<script>
	import app from '../../App.vue'
	export default {
		 data () {
			return {
				pages:1,
				pageV:1,
				pintuanList:[]
			}
			},
		 onLoad(){
			 this.getList();
			 
		 },
		 onReachBottom(){
		 	if(this.pagesV==0){
				console.log('bottom')
		 		this.pages+=1;
		 		this.getList();
		 	}
		 },
		 methods:{
			 getTeam(){
				 uni.navigateTo({
				 	url:'/pages/shopMall/teamDetail'
				 })
			 },
			 getList(){
				 	let that =this;
				 	that.$http.post('mini/v1/goods/indexCombination',{
				 		page:that.pages
				 	},(res)=>{
				 		if(res.state ==0){
							that.pagesV=res.data.is_request;
							if(res.data.is_request==0){
								let aa = res.data.list;
								aa.map((res)=>{
									res.goods_img=app.globalData.imgPrefixUrl+res.goods_img
								})
								let bb = that.pintuanList;
								that.pintuanList = bb.concat(aa);
								
							}
							
				 			
				 		}
				 	})
				 
			 }
		 }
			
	}
	
</script>

<style   scoped lang="scss">
	@import "../../static/scss/common.scss";
	.uni-teamUpList{
		.listBox{
			.list{
				width: 750rpx;
				box-sizing: border-box;
				padding:30rpx;
				display: flex;
				justify-content: space-between;
				border-top:2rpx solid #f2f2f2;
				.imgs{
					width: 150rpx;
					height: 150rpx;
					display: block;
					margin-right:30rpx;
					border-radius: 8rpx;
				}
				.uni-right{
					width: 500rpx;
					height: 150rpx;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					.uni-first{
						color: #000000;
						font-size: 26rpx;
						@include ellipsis(2);
					}
					.uni-second{
						width: 500rpx;
						display: flex;
						justify-content: space-between;
						.lefts{
							.first{
								color:#FF0000 ;
								font-size: 24rpx;;
								.money{
									font-size: 31rpx;
									margin-right:20rpx;
								}
								.frontMon{
									color: #8F8F8F;
									font-size: 24rpx;
									text-decoration: line-through;
								}
							}
							.second{
								color:#8F8F8F ;
								font-size: 24rpx;
								@include ellipsis(1);
								.pep{
									margin-right:15rpx;
								}
								.number{}
							}
						}
						.rights{
							width: 160rpx;
							height: 60rpx;
							line-height: 60rpx;
							background: #FF9A9E;
							border-radius: 30rpx;
							font-size: 32rpx;
							text-align: center;
							font-weight: bold;
							color: #FFFFFF;
						}
					}
				}
				
			}
			
		}
	}
</style>
