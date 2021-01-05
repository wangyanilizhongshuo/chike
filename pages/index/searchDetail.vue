<template>
	<view class="uni-searchDetail" >
	   <view  :style="{height:marginTop}" style="width:750rpx;background-color: #fff;position: fixed;left:0rpx;top:0rpx;z-index: 10;"></view>
       <view class="uni-search-box" style="width:750rpx;background-color: #fff;position: fixed;z-index:10;left:0rpx;" :style="{height:heights,top:marginTop}">
			<view class="left" @tap.stop="backs">
				<image  class="images" src="../../static/image/pink-back.png"></image>
			</view>
			<view class="right" >
			   {{address}}
			</view>
	   </view>	
	   <view class="uni-content"  :style='{"margin-top":heights,"padding-top":marginTop}'>
		   <uni-swiper-dot class="swiper-dot" :info="info" mode="round"  :current="current" field="content" :mode="mode">
		       <swiper class="swiper-box" @change="change">
		           <swiper-item v-for="(item ,index) in detailList.store_imgs" :key="index">
		               <view class="swiper-item">
						   <image class="swiImgs" :src="item.img"></image>
		               </view>
		           </swiper-item>
		       </swiper>
		   </uni-swiper-dot>
		   <view class="contentTopDetail">
			   <view class="content-top">
				   <view class="uni-left">
					   <view class="first">{{detailList.store_name}}</view>
					   <view class="second">
						   <text class="hospitalName">{{detailList.info}}  </text>
						   <!-- <text class="hospitalAdd">{{detailList.store_name}}</text> -->
					   </view>
					   <view class="third">
						   <text class="status">营业中</text>
						   <text  class="date">{{detailList.week_time}}</text>
						   <text  class="time">{{detailList.day_time}}</text>
					   </view>
				   </view>
				   <view class="uni-right">
					   <image v-if="collectActive"   class="img" src="../../static/image/index-searchCollectActive.png" @tap.stop="collectActive=false"></image>
					   <image v-if="!collectActive"   class="img" src="../../static/image/index-searchCollect.png" @tap.stop="collectActive=true"></image>
				       <text class="word">收藏</text> 
				   </view>
				   
			   </view>
			   <view class="content-down">
				   <view class="left">{{detailList.address}}</view>
			       <view class="right">
					   <view class="uni-phone styless" @tap.stop="makePhone(detailList.phone)">
						   <image class="imgs" src="../../static/image/index-searchDetailPhone.png"></image>
					       <view class="fileds">电话</view> 
					   </view>
				   </view>
			   </view>
		   </view>
	   </view>
	   <view class="logoBox">
		   <view class="list" v-for="(item,index) in cateList" :key="index" @tap.stop="jump(item.cate_id)">
			   <image class="imgs" :src="item.pic"></image>
		       <view class="field">{{item.name}}</view>
		   </view>
		  
		 </view>
		
	   <view class="leaveMsgBox">
		   <view class="titleBox" @tap.stop="jumps(4)">
			   <view class="uni-left">留言({{msgListNum}})</view>
			   <view class="uni-right">
				   <text class="fields">查看全部</text>
				   <image class="logos" src="http://zxyp.hzbixin.cn/files/50831608196835818.jpg"></image>
			   </view>
		   </view>
		   <!-- 留言首页5条 -->
		   <view class="listBox" v-for="(item,index) in msgList" :key="index" @tap.stop="jumps(4)">
			   <view class="titlex">
				   <image class="logo" :src="item.avatar"></image>
			       <text class="name">{{item.nickname}}</text>
			   </view>
			   <view class="contentBox">
				   <text class="topic">#超声波洗牙#</text> 
				   <text class="describe">{{item.content}}</text>       
			   </view>
		   </view>
	   </view>
	 </view>
  </view>
</template>
<script>
	import uniSwiperDot from "@/components/uni-swiper-dot/uni-swiper-dot.vue"
	import app from '../../App.vue'
	export default {
		 data () {
			return { 
				address:'优琦口腔（下沙江滨店）',
				collectActive:false,
				info: [{
					      url:'https://img9.51tietu.net/pic/2019-091200/ff1vqwm3q33ff1vqwm3q33.jpg'
						}, {
						  url:'https://img9.51tietu.net/pic/2019-091200/ff1vqwm3q33ff1vqwm3q33.jpg'
						}, {
						  url:'https://img9.51tietu.net/pic/2019-091200/ff1vqwm3q33ff1vqwm3q33.jpg'
						}],
				current: 0,
				mode: 'round',
				storeId:'',
				detailList:[],
				cateList:[],
				msgList:[],
				msgListNum:''

			}
		},
		
	    components: {uniSwiperDot},
		
		onLoad(options){
			console.log(options)
		  this.setData(options);
		  this.getList();
		  this.getCateList();
		  this.getMsgList();
		},
		computed:{
			heights(){
				const {platform,statusBarHeight} = uni.getSystemInfoSync()
				let height = statusBarHeight +4 //ios 24px
				if (platform.toLowerCase() == "android" ){
					height +=4 //android 28px
				}
				// 胶囊高度 32px 下边框6px height 状态栏高度
				return height+ 38 + "px"
			},
			marginTop(){
				const {platform,statusBarHeight} = uni.getSystemInfoSync();
				let height = statusBarHeight +4;
				if (platform.toLowerCase() == "android" ){
					height +=4;
				}
				
				return height + "rpx"				
			}
		},
		
		methods:{
			backs(){
				uni.navigateBack()
			},
		    change(e) {
		           this.current = e.detail.current;
		         },
			makePhone(value){
				 uni.makePhoneCall({
				     phoneNumber: value //仅为示例
				 });
			},
			 // 预约跳转 1 	  
		    jumps(type){
				if(type ==1){
					
				}
				
				else if(type ==4){
					uni.navigateTo({
						url:'/pages/index/leaveMsg?storeId='+this.storeId
					})
				}
			},
			jump(type){
				uni.navigateTo({
					 url:'/pages/index/listInList?storeId='+this.storeId+'&cate_id='+type
				})
			},
			getList(){
				let that=this;
				that.$http.post('mini/v1/store/info',{
					store_id:that.storeId
				},(res)=>{
					 if(res.state==0){
					    that.detailList=res.data;
						// that.jumpCateId=res.data.store_id;
						that.detailList.store_imgs.map(i=>{
							i.img=app.globalData.imgPrefixUrl+i.img
						})
					 }
				})
			},
			getCateList(){
				let that=this;
				that.$http.post('mini/v1/store/category',{
					store_id:that.storeId
				},(res)=>{
					if(res.state==0){
						that.cateList=res.data;
						that.cateList.map(i=>{
							i.pic=app.globalData.imgPrefixUrl+i.pic
						})
						
					}
					
				})
			},
			getMsgList(){
				let that=this;
				that.$http.post('mini/v1/store/leavelist',{
					store_id:that.storeId,
					page:1,
					is_tui:1
				},(res)=>{
					if(res.state==0){
						that.msgList=res.data.list;
						that.msgListNum=res.data.count;
					}
				})
			}
		}
	}
</script>

<style scoped lang="scss">
    @import "../../static/scss/common.scss";
   .uni-searchDetail{
	   position: relative;;
	   left: 0rpx;
	   top:0rpx;
	   .uni-search-box{
		   display: flex;
		   font-size: 26rpx;
		   align-items: center;
		   .left{
			   display: flex;
			   height: 88rpx;
			   align-items: center;
			   margin-left: 30rpx;
			   width: 60rpx;
			   .images{
				   display: block;
				   width: 30rpx;
				   height: 30rpx;
			   }
		   }
		   .right{
			  font-size: 28rpx;
			  color: #000;
			  font-family: 'PingFang-SC-Bold';
			  font-weight: bold;
			  width: 410rpx;
  
		   }
		   
	   }
   }

.uni-content{
	box-sizing: border-box;
	width: 750rpx;

	.swiImgs{
		display: block;
		width: 690rpx;
		height: 340rpx;
		margin-left:30rpx;
	}
	.contentTopDetail{
		 border-bottom: 20rpx solid #f2f2f2;
		 .content-top{
			 width: 690rpx;
			 border-bottom: 1rpx solid #f2f2f2;
			 height: 200rpx;
			 display: flex;
			 margin-left:30rpx;
			 justify-content: space-between;
			 .uni-left{
				 width: 500rpx;
				 .first{
					 font-family: 'PingFang-SC-Bold';
					 font-weight: bold;
					 color: #000;
					 font-size: 33rpx;
					 margin:40rpx  0rpx 35rpx;
				 }
				 .second{
					 color: #888888;
					 font-size: 24rpx;
					 margin-bottom: 15rpx;;
					 .hospitalName{
						 @include ellipsis(1)
					 }
					 .hospitalAdd{
						 margin-left:10rpx;
					 }
				 }
				 .third{
					 color: #888888;
					 font-size: 24rpx;
					 .status{}
					 .date{
						 margin:0rpx 10rpx;
					 }
					 .time{}
				 }
			 }
			 .uni-right{
				 height: 200rpx;
				 display: flex;
				 flex-direction: column;;
				 justify-content: center;
				 .img{
					 display: block;
					 width: 40rpx;
					 height: 40rpx;
					 margin-bottom: 15rpx;
				 }
				 .word{
					 color: #888888;
					 font-size: 22rpx;;
				 }
			 }
		 }
		 .content-down{
			 width: 690rpx;
			 height: 120rpx;
			 margin-left:30rpx;
			 display: flex;
			 align-items: center;
			 justify-content: space-between;
			 .left{
				 width: 500rpx;
				 color: #888888;
				 font-size: 24rpx;
				 @include ellipsis(2)
			 }
			 .right{
				 display: flex;
				 // width:80rpx;
				 padding-right:10rpx;
				 justify-content: space-between;
				 .uni-preview{
					 
				 }
				 .styless{
					 color: #888888;
					 font-size: 22rpx;
					 .imgs{
						 display: block;
						 width: 40rpx;
						 height: 40rpx;
						 margin-bottom: 10rpx;
					 }
					 .fileds{}
				 }
			 }
		 }
	}
	
}
// .list-box{
// 	width: 750rpx;
// 	padding:0rpx 30rpx;
// 	box-sizing: border-box;
// 	margin-top:40rpx;
// 	.list{
// 		width: 690rpx;
// 		display: flex;
// 		margin-bottom: 60rpx;
// 		.left{
// 			display: block;
// 			width:150rpx;
// 			height: 150rpx;
// 			margin-right:22rpx;
// 		}
// 		.right{
// 			width: 500rpx;
// 			height: 150rpx;
// 			display: flex;
// 			flex-direction: column;
// 			justify-content: space-between;
// 			.first{
// 				display: flex;
// 				width: 500rpx;
// 				justify-content: space-between;
// 				.uni-left{
// 					color: #000;
// 					font-family: 'PingFang-SC-Bold';
// 					font-weight: bold;
// 					font-size: 28rpx;;
// 				}
// 				.uni-right{
					
// 					font-family: 'DIN-Bold';
// 					font-weight: bold;
// 					color: #FF0000;
// 					font-size: 32rpx;
// 					.price{
// 						font-size: 42rpx;;
// 					}
// 				}
// 			}
// 			.second{
// 				color: #555555;
// 				font-size: 24rpx;
// 				@include  ellipsis(3)
// 			}
// 		}
// 	}
	
// }

.logoBox{
	width: 750rpx;
	padding:25rpx  30rpx 0rpx ;
	box-sizing: border-box;
	display: flex;
	flex-wrap: wrap;
	.list{
		width:172.5rpx;
		height: 150rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-bottom: 30rpx;;
		.imgs{
			display: block;
			width: 93rpx;
			height: 93rpx;
			border-radius: 8rpx;
			
		}
		.field{
			margin-top: 18rpx;;
			color: #494848;
			font-size: 26rpx;;
		}
	}
	
}
	
.leaveMsgBox{
	.titleBox{
		width: 750rpx;
		padding: 0rpx 30rpx ;
		display: flex;
		height: 100rpx;
		justify-content: space-between;
		box-sizing: border-box;
		align-items: center;
		.uni-left{
			color: #3E3E3E;
			font-size: 28rpx;
		}
		.uni-right{
			font-size: 0;
			.fields{
				color: #FF9A9E;
				font-size: 28rpx;;
			}
			.logos{
				// vertical-align: middle;
				display: inline-block;
				width: 18rpx;
				height: 30rpx;;
				margin-left:15rpx;
			}
		}
	}
	.listBox{
		width: 750rpx;
		padding:0rpx 30rpx;
		box-sizing: border-box;
		.titlex{
			display: flex;
			height: 90rpx;
			align-items: center;
			margin-bottom: 11rpx;;
			.logo{
				display: block;
				width: 90rpx;
				height: 90rpx;				
                border-radius: 50%;
				margin-right: 25rpx;
			}
			.name{
				color: #3B3B3B;
				font-size: 26rpx;
			}
		}
		.contentBox{
			font-size: 24rpx;
			margin-bottom: 29rpx;;
			.topic{
				color: #FFC000;
				
			}
			.describe{
				color: #3B3B3B;
				// @include ellipsis(1)
			}
			
		}
		
	}
	
}
</style>

