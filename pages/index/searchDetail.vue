<template>
	<view class="uni-searchDetail" >
	   <view  :style="{height:marginTop}" style="width:750rpx;background-color: #fff;position: fixed;left:0rpx;top:0rpx;z-index: 10;"></view>
       <view class="uni-search-box" style="width:750rpx;background-color: #fff;position: fixed;z-index:10;left:0rpx;" :style="{height:heights,top:marginTop}">
			<view class="left" @tap.stop="backs">
				<image  class="images" src="../../static/image/pink-back.png"></image>
			</view>
			<view class="right" >
			   {{detailList.store_name}}
			</view>
	   </view>	
	   <view class="showtips" v-if="tipflag">{{tipMsg}}</view>
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
					   <image v-if="collectActive"   class="img" src="https://chikehometest.hzbixin.cn/upload/images/feedback/20210428/47f9255cd0bc41d024318e36fb521176.png" @tap.stop="getCollect"></image>
					   <image v-if="!collectActive"    class="img" src="https://chikehometest.hzbixin.cn/upload/images/feedback/20210428/3544cfd00b6213277136e828db08cd9f.png" @tap.stop="getCollect"></image>
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
			   <view class="uni-left">留言({{msgListNum || 0}})</view>
			   <view class="uni-right">
				   <text class="fields">查看全部</text>
				   <image class="logos" src="https://chikehometest.hzbixin.cn/upload/images/feedback/20210428/7435aee6a21c111f8773729b3bb1efa0.png"></image>
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
	   <!-- 底部的数据 -->

	 </view>
	
  </view>
</template>
<script>
	import uniSwiperDot from "@/components/uni-swiper-dot/uni-swiper-dot.vue"
	import app from '../../App.vue'
	export default {
		 data () {
			return { 
				tipflag:false,
				tipMsg:'',
				
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
				carouselList:['王一博','王亚妮','王一博','王一博','王一博','王一博','王一博','王一博','王一博','王一博'],
				msgList:[
					{
						  avatar:'https://img9.51tietu.net/pic/2019-091200/ff1vqwm3q33ff1vqwm3q33.jpg',
						  content:'你好你好年后',
						  nickname:'yibo'
						  
					},
					{
						  avatar:'https://img9.51tietu.net/pic/2019-091200/ff1vqwm3q33ff1vqwm3q33.jpg',
						  content:'你好你好年后',
						  nickname:'yibo'
						  
					},
					{
						  avatar:'https://img9.51tietu.net/pic/2019-091200/ff1vqwm3q33ff1vqwm3q33.jpg',
						  content:'你好你好年后',
						  nickname:'yibo'
						  
					},
				],
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
				if(value){
					uni.makePhoneCall({
				     phoneNumber: value //仅为示例
				 });
				}else{
					this.tipflag=true ;
					this.tipMsg='没有电话';
					setTimeout(()=>{
							this.tipflag=false
					},3000)
				}
				 
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
						if(that.detailList.is_collec==1){
							that.collectActive=true
						}else{
							that.collectActive=false
						}
						console.log(that.collectActive)
						console.log('that.collectActive')
					 }
				})
			},
			// 分类列表
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
			// 留言
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
			},
			// 收藏
			getCollect(){
				let that=this;				
				that.$http.post('mini/v1/store/collec',{
					store_id:that.detailList.store_id
				},(res)=>{
					if(res.state==0){
						if(that.collectActive==true){
							that.collectActive=false;
							
						}else{
							that.collectActive=true;
							// this.tipflag=true ;
							// this.tipMsg='收藏成功';
							// setTimeout(()=>{
							// 		this.tipflag=false
							// },3000)
						}
						
					}
				})
			},
			
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
	// margin-top: 10rpx;
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
  .showtips{
	  width: 350rpx;
	  height: 100rpx;
	  background: #000000;
	  opacity: 0.6;
	  border-radius: 16rpx;
	  position: fixed;
	  left:200rpx;
	  top:600rpx;
	  color: #FFFFFF;
	  font-size: 28rpx;
	  line-height: 100rpx;
	  text-align: center;
	  z-index:1000;
	  
  }
  .bottomBox{
	  .b-title{
		   padding-left: 30rpx;
		  .scroll-view_H{
		  		white-space: nowrap;
		  		overflow: hidden;
		  		height: 90rpx;
		  		.lists{
		  			display: inline-block;
                    opacity: 0.4;
                    border-radius: 4rpx;
					text-align: center;
					color: #919191;
                    background: #E8E8E8;
					font-size: 24rpx;
					margin:15rpx  20rpx 15rpx  0rpx;
					padding:10rpx 20rpx;
		  			.word{
		  				
		  			}
		  			
		  		}
		  }
	  }
	  .b-content{
		  .list{
			  display: flex;
			  width: 750rpx;
			  padding:25rpx 30rpx;
			  box-sizing: border-box;
			  .imgs{
                  display: block;
				  width: 150rpx;
				  height: 150rpx;
				  border-radius: 8rpx;
				  margin-right: 20rpx;;
			  }
			  .rights{
				  display: flex;
				  width: 500rpx;
				  flex-direction: column;
				  height: 150rpx;
				  justify-content: space-between;
				  .uni-first{
					  color: #000000;
					  font-size: 28rpx;
					  font-weight: bold;
					  @include ellipsis(1)
				  }
				  .uni-second{
					  display: flex;
					  align-items: center;
					  
					  .left{
						  color: #FF0000;
						  font-size: 32rpx;;
						  .mon{
							  font-size: 42rpx;;
						  }
					  }
					  .right{
						  text-decoration:line-through ;
						  margin-left: 20rpx;
						  color: #555555;
						  font-size: 24rpx;;
					  }
				  }
				  .uni-third{
					  display: flex;
					  justify-content: space-between;
					  .left{
						  color: #555555;
						  font-size: 24rpx;
					  }
					  .img1{
						  display: block;
						  width: 40rpx;
						  height: 40rpx;
					  }
				  }
			  }
			  
		  }
		  
	  }
  }
 

</style>

