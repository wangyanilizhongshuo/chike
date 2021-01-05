<template>
	<view class="searchList" >
	 
	   <view class="uni-content"  >
		  <view class="uni-title">
			 <view  class="left"  :style="titleFirstActive==true?'color:#FF9A9E':'color:#B6B6B6'" @tap.stop="trangleFirst=2,trangleSecond=2,titleFirstActive=(!titleFirstActive),titleSecondActive=false,titleThirdActive=false">综合排序</view>
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
		</view>
		<view class="content-box">
			<view class="list" v-for="(item,index) in recommondList" :key="index" @tap.stop="jumps">
				 <image class="imsgs" :src="item.goods_img"></image>
			    <view class="bottom">
				    <view  class="smallField">{{item.goods_name}}</view>
				    <view class="bto-up">
				    <view class="left"> ¥ <text class="mom">{{item.user_price}}</text></view>
			       <view class="right">已售{{item.price}}件</view>
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
				titleFirstActive:true,
				titleSecondActive:false,
				titleThirdActive:false,
				trangleFirst:2,
				trangleSecond:2,
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
					],
					category:'',
					pagesV:1,
					pages:1,
					recommondList:[]
				
			}
		},
		onLoad(options){
			this.setData(options);
		        uni.setNavigationBarTitle({
		  			 title:this.category
		  	    })
				this.getGoodList()
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
				this.getList();
			}
			
		},
		
		methods:{
			// 返回
			backs(){
				uni.navigateTo({
					url:'/pages/index/titleSearch'
				})
			},
		    jumps(){
				
				 uni.navigateTo({
				 	url:'/pages/shopMall/list-detail'
				 })
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
			},
			getGoodList(){
				let that=this;
				if(that.category='推荐好物'){
					// 价格排序,固定值:asc=升序，desc=降序，
					that.$http.post('mini/v1/goods/indextui',{
						page:that.pages,
						sort_price:'asc'
					},(res)=>{
						if(res.state ==0){
							that.pagesV=res.data.is_request;
							if(res.data.is_request==0){
								let aa = res.data.list;
								aa.map((res)=>{
									res.goods_img=app.globalData.imgPrefixUrl+res.goods_img
								})
								let bb = that.recommondList;
								that.recommondList = bb.concat(aa)
							}
						
							
						}
					})
					
				}
			}
		}
	}
</script>

<style scoped lang="scss">
    @import "../../static/scss/common.scss";
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

