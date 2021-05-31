<template>
	<view class="searchList" >
	   <view  :style="{height:marginTop}" style="width:750rpx;background-color: #fff;position: fixed;left:0rpx;top:0rpx;z-index: 10;"></view>
       <view class="uni-search-box" style="width:750rpx;background-color: #fff;position: fixed;z-index:10;left:0rpx;" :style="{height:heights,top:marginTop}">
			<view class="left" @tap.stop="backs">
				<image  class="images" src="../../static/image/pink-back.png"></image>		
			</view>
			<view  class="center">{{name}}</view>
			<view class="right"  >
				<image class="images"  src="../../static/image/index-search-search.png"></image>
				<input class="inputs" @focus="getInput" @blur="setInput" v-model="searchValue"  placeholder-style="font-size:26rpx;color:#A8A8A8" placeholder="搜索"/>
			</view>
			
	   </view>	
	   <view class="uni-content"  :style='{"margin-top":heights,"padding-top":marginTop}'>
		  <view class="uni-title">
			  <view  class="left"  :style="titleFirstActive==true?'color:#FF9A9E':'color:#B6B6B6'" @tap.stop="trangleFirst=2,trangleSecond=2,titleFirstActive=(!titleFirstActive),titleSecondActive=false,titleThirdActive=false,distantOrder='',getMoreWay=1,getlist()">综合排序</view>
			  <view class="center styless" @tap.stop="getPriceBtn">
				  <view class="uni-left"  :style="titleSecondActive==true?'color:#FF9A9E':'color:#B6B6B6'" >价格</view>
				  <view class="uni-right">
					  <view  :class="trangleFirst==0?'tangleUpActive':'trangleUp'" ></view>
					  <view  :class="trangleFirst==1?'trangleDownActive':'trangleDown'" ></view>
				  </view>
			  </view>
			  <view class="right styless" @tap.stop="getKilBtn">
				  <view class="uni-left" :style="titleThirdActive==true?'color:#FF9A9E':'color:#B6B6B6'"   >距离</view>
				  <view class="uni-right">
					  <view :class="trangleSecond==0?'tangleUpActive':'trangleUp'" class="trangleUp" ></view>
					  <view :class="trangleSecond==1?'trangleDownActive':'trangleDown'" class="trangleDown" ></view>
				  </view>
			  </view>
		   </view>
			 <view class="goods-title" @tap.stop="jumps(item.store_id)" v-for="(item,index) in mainList"  :key="index">
			 	<image  class="imgs  left" :src="item.store_img"></image>
			 	<view  class="right">
			 		<view class="first">
			 			<text  class="lefts">{{item.store_name}}</text>
			 			<text class="rights">{{item.juli}}km</text>
			 		</view>
			 		<view  class="second">{{item.info}}</view>
			 		<!-- <view  class="third">
			 			<text class="uni-left">¥<text  class="price">{{item.price}}</text></text>
			 		    <text  class="uni-right">门市价: ¥<text class="prePrice">{{item.before}}</text></text>
			 		</view> -->
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
				name:'',
				cateId:'',
				longitude:'',
				latitude:'',
				searchDistrictid:'',
				titleFirstActive:true,
				titleSecondActive:false,
				titleThirdActive:false,
				trangleFirst:2,
				trangleSecond:2,
				pages:1,
				pageV:1,
				cateId:1,
				distantOrder:'',
				mainList:[],
			
				goodsDetail:[
					{
						url:'https://img9.51tietu.net/pic/2019-091200/ff1vqwm3q33ff1vqwm3q33.jpg',
						title:'优琦口腔（下沙江滨店）',
						desc:'超声波洗牙（豪华套装）',
						distance:'2km',
						price:'49.90',
						before:'668'		
					},
					{
						url:'https://img9.51tietu.net/pic/2019-091200/ff1vqwm3q33ff1vqwm3q33.jpg',
						title:'优琦口腔（下沙江滨店）',
						desc:'超声波洗牙（豪华套装）',
						distance:'2km',
						price:'49.90',
						before:'668'		
					},
					{
						url:'https://img9.51tietu.net/pic/2019-091200/ff1vqwm3q33ff1vqwm3q33.jpg',
						title:'优琦口腔（下沙江滨店）',
						desc:'超声波洗牙（豪华套装）',
						distance:'2km',
						price:'49.90',
						before:'668'		
					}
				],
					
				
			}
		},
		onLoad(options){
			console.log(options)
			this.setData(options);
			this.getlist();
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
			// 返回
			backs(){
				uni.navigateBack()
			},
		     jumps(ids){
				
				 uni.navigateTo({
				 	url:'/pages/index/searchDetail?storeId='+ids
				 })
			 },
			 onReachBottom(){
			 	this.getMoreWay=0
			 	if(this.pagesV==0){
			 		this.pages+=1;
			 		
			 		this.getlist();
			 	}
			 	
			 },
			 getPriceBtn(){
				 this.titleFirstActive=false;
				 this.titleThirdActive=false;
				 this.titleSecondActive=true
				 this.trangleSecond=2;
				if(this.trangleFirst==1){
					this.trangleFirst=0;
				}else if (this.trangleFirst==0){
					this.trangleFirst=1;
				}else if(this.trangleFirst==2){
					this.trangleFirst=1;
				}
				this.getMoreWay=1;
				this.getlist();
			 },
			 getKilBtn(){
				 this.titleFirstActive=false;
				  this.titleThirdActive=true;
				  this.titleSecondActive=false;
				  this.trangleFirst=2;
				 if(this.trangleSecond==1){
				 	this.trangleSecond=0;
				 }else if (this.trangleSecond==0){
				 	this.trangleSecond=1;
				 }else if(this.trangleSecond==2){
				 	this.trangleSecond=1;
				 }
				 this.getMoreWay=1;
				 this.getlist();
			 },
			 getlist(){
				 console.log(111111)
				 if(this.getMoreWay==1){
						 this.mainList=[];
						 this.pages=1;
				 }
				 if(this.trangleSecond==1 || this.trangleFirst==1){
				 	this.distantOrder='asc'
				 }else if(this.trangleSecond==2 || this.trangleFirst==2){
				 	this.distantOrder='desc'
				 }else{
				 	this.distantOrder=''
				 }
				 let that=this;
				 
				 that.$http.post('mini/v1/service/storelist',{
					 user_lat:that.latitude,
					 user_lng:that.longitude,
					 user_district_id:that.searchDistrictid,
					 page:that.pages,
					 cate_id:that.cateId,
					 sort_juli:that.distantOrder
				 },(res)=>{
					 if(res.state==0){
						that.pagesV=res.data.is_request;
						if(res.data.is_request==0){
							let aa = res.data.list;
							aa.map((res)=>{
								res.store_img=app.globalData.imgPrefixUrl+res.store_img
							})
							let bb = that.mainList;
							that.mainList = bb.concat(aa);
							console.log(that.mainList)
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
			   margin-left:30rpx;
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
		   .center{
			   font-family: 'PingFang-SC-Bold';
			   font-weight: bold;
			   color: #222;
			   font-size: 32rpx;
			   margin-right:20rpx;
		   }
		   
		   .right{
			  display: flex;
			  height: 88rpx;
			  width: 320rpx;
			  align-items: center;
			  height: 60rpx;
			  background-image: url(https://chikehometest.hzbixin.cn/upload/images/feedback/20210428/5d700641fa66161d7009055fb4439ad1.png);
			  background-size: 320rpx  60rpx;
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
	.uni-title{
		width: 750rpx;
		height: 107rpx;
		display: flex;
		box-sizing: border-box;
		padding:0 30rpx;
		justify-content: space-between;
		align-items: center;
		color: #B6B6B6;
		font-size: 28rpx;
		.styless{
			display: flex;
			.uni-right{
				margin-left: 10rpx;
				
			}
		}
	}
	
}
.trangleDown{
    width: 0;
	height: 0;
	border-left:5.5px solid transparent;
	border-right: 5.5px solid transparent;
	border-top: 5.5px solid #B6B6B6;
}
.trangleUp{
	width: 0;
	height: 0;
	border-left: 5.5px solid transparent;
	border-right: 5.5px solid transparent;
	border-bottom: 5.5px solid #B6B6B6;
	margin: 8rpx 0rpx 5rpx;
}
.trangleDownActive{
    width: 0;
	height: 0;
	border-left:5.5px solid transparent;
	border-right: 5.5px solid transparent;
	border-top: 5.5px solid #FF9A9E;
}
.tangleUpActive{
	width: 0;
	height: 0;
	border-left: 5.5px solid transparent;
	border-right: 5.5px solid transparent;
	border-bottom: 5.5px solid #FF9A9E;
	margin: 8rpx 0rpx 5rpx;
}
.goods-title{
			width: 750rpx;
			height: 230rpx;
			padding:0rpx 30rpx;
			box-sizing: border-box;
			display: flex;
			align-items: center;
			justify-content: space-between;
			.left{
				display: block;
				width: 150rpx;
				height: 150rpx;
				margin-right: 30rpx;
				border-radius: 8rpx;
			}
			.right{
				 width:500rpx;
				 display: flex;
				  height: 150rpx;
				 flex-direction: column;
				 justify-content: space-between;
				color: #555555;
				font-size: 24rpx;;
				
				.first{
					
					width:500rpx;
					display: flex;
					justify-content: space-between;
					.lefts{
						
						font-weight: bold;
						color: #000000;
						font-size: 28rpx;
						
					}
					.rights{
						
					}
				}
				.second{
					// margin:10rpx 0rpx;
				}
				.third{
					width: 500rpx;
					display: flex;
					align-items: center;
					.uni-left{
						color: #FF0000;
						font-size: 32rpx;
						margin-right:20rpx;
						.price{
							font-size: 42rpx;
						}
					}
					.uni-right{
						
						.prePrice{
							
						}
					}
				}
				
			}
		}
	
</style>

