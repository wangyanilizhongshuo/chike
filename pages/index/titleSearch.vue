<template>
	<view class="uni-indexPage" >
	   <view  :style="{height:marginTop}" style="width:750rpx;background-color: #fff;position: fixed;left:0rpx;top:0rpx;z-index: 10;"></view>
       <view class="uni-search-box" style="width:750rpx;background-color: #fff;position: fixed;z-index:10;left:0rpx;" :style="{height:heights,top:marginTop}">
			<view class="left"  >
				<view  class="backsBox" @tap.stop="backs">
					<image class="cancel" src="../../static/image/pink-back.png"></image>
				</view>
			<!-- 	<text class="addressValues">{{districtNames}}</text>
				<image  class="images" src="../../static/image/index-search-arrow.png"></image> -->
			</view>
			<view class="right"  >
				<image class="images" @tap.stop="setInput"  src="../../static/image/index-search-search.png"></image>
				<input class="inputs" type="text" confirm-type="search" @focus="getInput" @confirm="setInput" v-model="searchValue"  placeholder-style="font-size:26rpx;color:#A8A8A8" placeholder="搜索"/>
			</view>
			<!-- <view class="cancel" @tap.stop="searchValue=''">取消</view> -->
	   </view>	
	   <view style="width: 750rpx;" :style="{height:marginTop}"></view>
	   <view class="uni-content"  :style='{"margin-top":heights}'>
		    <view   class="list-box" v-for="(item,index) in searchList" :key="index">
				<view class="list"  @tap.stop="getJump(index)">{{item}}</view>
			</view>
	   </view>
	  
	  
	   
	</view>		
</template>

<script>
	export default {
		 data () {
			return { 
				searchValue:'',
				searchList:[1],
				mainList:[],
				id:'',
				longitude:'',
				latitude:'',
				districtNames:'',
				visible:false,
				stystemDeviceH:'',
				province:[],
				city:[],
				addFlag1:true,
				county:[],
				cityIndex:110000,
				cityName:'',
				countyIndex:110100,
				countyName:'',
				areaName:'',
				areaIndex:'',
				searchDistrictid:'',
				indicatorStyle: `text-align:center;height: ${Math.round(uni.getSystemInfoSync().screenWidth/(750/100))}px;width:250rpx`,
			}
		},
		onLoad(options){
			this.setData(options);
			
			if(uni.getStorageSync('searchs')){
				let aa=uni.getStorageSync('searchs')
				if(aa.length>10){
					aa=aa.slice(1,11);
					this.searchList=aa;
					uni.setStorageSync('searchs',this.searchList)
				}
				this.searchList=uni.getStorageSync('searchs')
			}
			// 地址图标的高度
			 this.stystemDeviceH=(Math.round(uni.getSystemInfoSync().screenWidth/(750/100))*2+'rpx');
			 // this.getAddress();
			
		 
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
			setInput(e){
				let b=e.target.value;
				if(b){
					this.searchList.push(b)
					uni.setStorageSync('searchs',this.searchList);
					uni.redirectTo({
						url:'/pages/index/searchList?searchKey='+this.searchValue+'&longitude='+this.longitude+'&latitude='+this.latitude+'&searchDistrictid='+this.searchDistrictid
						
					})
				}
			},
			backs(){
				uni.switchTab({
					url:'/pages/index/index'
				})
			},
			getInput(){
				if(uni.getStorageSync('searchs')){
					this.searchList=uni.getStorageSync('searchs');
				}
			},
			getJump(index){
				let values=this.searchList[index]
				uni.redirectTo({
					url:'/pages/index/searchList?searchKey='+values+'&longitude='+this.longitude+'&latitude='+this.latitude+'&searchDistrictid='+this.searchDistrictid
				})
			},
			
		
		}
	}
</script>

<style scoped lang="scss">
    @import "../../static/scss/common.scss";
	
   .uni-indexPage{
	   position: relative;;
	   left: 0rpx;
	   top:0rpx;
	   height: 100vh;;
	   .zw{
		   width: 750rpx;
		   height:var(--status-bar-height) ; 
	   }
	   .uni-search-box{
		   display: flex;
		   font-size: 26rpx;
		   align-items: center;
		   .backsBox{
			   width: 50rpx;
			   height: 50rpx;
			   .cancel{
				   display: block;
				   width: 30rpx;
				   height: 30rpx;
				   margin-top:10rpx;
				   
			   }
		   }
		   .left{
			   display: flex;
			   height: 88rpx;
			   align-items: center;
			   margin-left: 20rpx;
			   .addressValues{
				   color:#FF9A9E;
			   }
			   .images{
				   margin-left:10rpx;
				   display: block;
				   width: 30rpx;
				   height: 30rpx;
			   }
			   
		   }
		   .cancel{
			   margin-left: 10rpx;
			   color: #222222;
			   font-size: 26rpx;
		   }
		   .right{
			  display: flex;
			  height: 88rpx;
			  width: 420rpx;
			  align-items: center;
			  height: 60rpx;
			  background-image: url(https://chikehometest.hzbixin.cn/upload/images/feedback/20210428/5d700641fa66161d7009055fb4439ad1.png);
			  background-size: 420rpx  60rpx;
			  background-repeat: no-repeat;
			  margin-left:30rpx;
			   .images{
				   display: block;
				   width: 30rpx;
				   height: 30rpx;
				   margin: 0 20rpx;
				
				   }
			   .inputs{
				   width: 420rpx;
				   height: 60rpx;
				   border-radius: 20rpx;
				   color: #222;
			   }
		   }
		   
	   }
   }

.uni-content{
	.list-box{
		margin-top:13rpx;
		.list{
			width: 750rpx;
			height: 90rpx;
			font-size: 26rpx;
			line-height: 90rpx;
			box-sizing: border-box;
			padding:0rpx 30rpx;
			border-bottom: 1rpx solid #f2f2f2;
		}
	}
	
	
	
	
}
	
</style>

