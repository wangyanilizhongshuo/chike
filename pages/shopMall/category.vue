<template>
	<view class="searchList" >
	   <view  :style="{height:marginTop}" style="width:750rpx;background-color: #fff;position: fixed;left:0rpx;top:0rpx;z-index: 10;"></view>
       <view class="uni-search-box" style="width:750rpx;background-color: #fff;position: fixed;z-index:10;left:0rpx;" :style="{height:heights,top:marginTop}">
			<view class="left" @tap.stop="backs">
				<image  class="images" src="../../static/image/pink-back.png"></image>
			</view>
			<view class="right"  >
				<image class="images"  src="../../static/image/index-search-search.png"></image>
				<input class="inputs" confirm-type="search" @confirm="getTitleList(1)" v-model="keyValue"  placeholder-style="font-size:26rpx;color:#A8A8A8" placeholder="搜索"/>
			</view>
	   </view>	
	   <view class="uni-content"  :style='{"margin-top":heights,"padding-top":marginTop}'>
		     <view  class="titleBox">
				 <scroll-view class="scroll-view_H" scroll-with-animation="true"   scroll-x="true">
					  <view class="titleList"  v-for="(item,index) in titleList" :key="index" @tap.stop="getTitleActive(index,item.goods_id)">
						 <view :class="titleActiveIndex ==index?'fieldActive':'field'" >{{item.name}}</view>
						 <view v-if="titleActiveIndex ==index" class="lines"></view>
					  </view>
				 </scroll-view>
				
			 </view>
		</view>
		<view class="content-box">
			<view class="list" v-for="(item,index) in contentList" :key="index" @tap.stop="jumps">
				 <image class="imsgs" :src="item.goods_img"></image>
			    <view class="bottom">
				    <view  class="smallField">{{item.goods_name}}</view>
				    <view class="bto-up">
				    <view class="left"> ¥ <text class="mom">{{item.user_price}}</text></view>
			       <view class="right">已售{{item.sales}}件</view>
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
				titleActiveIndex:0,
				titleList:[],
				contentList:[],
				cate_id:'',
				cates_ids:'',
				keyValue:'',
				pagesV:1,
				pages:1,
				lists:[{
					url: 'https://img9.51tietu.net/pic/2019-091200/ff1vqwm3q33ff1vqwm3q33.jpg',
				    title:"云齿口腔医院",
					address:'下沙路521号  齿科',
					desc:'详情详情详情详情详情详情详情详情详情详详情详情详情详情详情详情详情详情详情详详情详情详情详情详情详情详情详情详情详'          
			   	    } ,
					{
						url: 'https://img9.51tietu.net/pic/2019-091200/ff1vqwm3q33ff1vqwm3q33.jpg',
					    title:"云齿口腔医院",
						address:'下沙路521号  齿科',
						desc:'详情详情详情详情详情详情详情详情详情详'          
					 } ,
					{
						url: 'https://img9.51tietu.net/pic/2019-091200/ff1vqwm3q33ff1vqwm3q33.jpg',
						title:"云齿口腔医院",
						address:'下沙路521号  齿科',
						desc:'详情详情详情详情详情详情详情详情详情详'          
					} 
					]
			}
		},
		onLoad(options){
		  this.setData(options)
		  this.getTitleList();
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
		onReachBottom(){
			if(this.pagesV==0){
				this.pages+=1;
				this.getConentList(2);
			}
		},
		methods:{
			// 返回
			backs(){
				uni.navigateBack()
			},
		    jumps(){
				 uni.navigateTo({
				 	url:'/pages/shopMall/list-detail'
				 })
			},
		   // 头部点亮
		   getTitleActive(index,id){
			   this.titleActiveIndex=index;
			   this.getConentList(1);
		   },
		   getTitleList(){
			   let that=this;
			   that.$http.post('mini/v1/goods/categorychild',{
				   cate_id:that.cate_id
			   },(res)=>{
				   if(res.state ==0){
					   that.titleList=res.data.list;
					   that.cates_ids=that.titleList[0].id;
					    // 头部初始化获取之后,获取列表
					   that.getConentList(1);
				   }
			   })
		   },
		   getConentList(type){
			   if(type ==1){
				   this.pages=1;
				   this.contentList=[];
			   }
			   let that=this;
			   that.$http.post('mini/v1/goods/goodslist',{
				   cate_id:that.cates_ids,
				   page:that.pages,
				   keywords:that.keyValue,
			   },(res)=>{
				   if(res.state==0) {
					   that.pagesV=res.data.is_request;
					   if(res.data.is_request==0){
						   let aa=res.data.list;
							aa.map((res)=>{
								res.goods_img=app.globalData.imgPrefixUrl+res.goods_img
							})
							let bb = that.contentList;
							that.contentList = bb.concat(aa);
						
					   }
				   }
			   })
		   }
		}
	}
</script>

<style scoped lang="scss">
    @import "../../static/scss/common.scss";
   .searchList{
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
			   .addressValues{
				   color:#FF9A9E;
			   }
			   .images{
				   
				   display: block;
				   width: 30rpx;
				   height: 30rpx;
			   }
			   
		   }
		   
		   .right{
			  display: flex;
			  height: 88rpx;
			  width: 410rpx;
			  align-items: center;
			  height: 60rpx;
			  background-image: url(http://zxyp.hzbixin.cn/files/6731607417392135.jpg);
			  background-size: 410rpx  60rpx;
			  background-repeat: no-repeat;
			   .images{
				   display: block;
				   width: 30rpx;
				   height: 30rpx;
				   margin: 0 20rpx 0rpx  30rpx;
				   }
			   .inputs{
				   width: 220rpx;
				   height: 60rpx;
				   border-radius: 20rpx;
				   color:#A8A8A8;  
			   }
		   }
		   
	   }
   }

.uni-content{
	box-sizing: border-box;
}
.scroll-view_H{
		white-space: nowrap;
		overflow: hidden;
		height: 107rpx;
		}
.titleBox{
	width: 750rpx;
	height: 107rpx;
	padding:0rpx 30rpx;
	box-sizing: border-box;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 28rpx;
	.titleList{
		display: inline-block;
		width: 180rpx;
		text-align: center;
		line-height: 107rpx;
		// display: flex;
		// flex-direction: column;
		// align-items: center;
		height: 107rpx;
		// justify-content: space-between;
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
		// margin-left:35rpx;
		background: #FF6A6C;
		border-radius: 2rpx;
		// margin-top: 10rpx;
	}
}	
.content-box{
		width: 750rpx;
		padding: 0rpx  30rpx;
		box-sizing: border-box;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		background-color: #f2f2f2;
		border-bottom: 40rpx solid #f2f2f2;
		.list{
			width: 330rpx;
			height: 460rpx;
			margin: 20rpx  0rpx;
			.imsgs{
				display: block;
				width: 330rpx;
				height: 330rpx;
				border-radius: 8rpx;
			}
			.bottom{
				width: 330rpx;
				height: 130rpx;
				display: flex;
				flex-direction: column;
				justify-content: space-around;
				background-color: #fff;
				padding:0rpx 15rpx;
				box-sizing: border-box;
				.smallField{
					color: #000000;
					font-size: 23rpx;
					@include ellipsis(2);
				}
				.bto-up{
					display: flex;
					justify-content: space-between;
					.left{
						color: #FF0000;
						font-size: 18rpx;;
						.mom{
							font-size: 24rpx;
						}
					}
					.right{
						color: #999999;
						font-size: 18rpx;
					}
				}
				
			}
		}
		
	}
	
</style>

