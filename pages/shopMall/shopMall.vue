<template>
	<view class="uni-indexPage"  :style="visibles==true?'position:fixed':'position:relative'" @tap.stop="visibles = false">
	   <view  :style="{height:marginTop}" style="width:750rpx;background-color: #fff;position: fixed;left:0rpx;top:0rpx;z-index: 10;"></view>
       <view class="uni-search-box" style="width:750rpx;background-color: #fff;position: fixed;z-index:10;left:0rpx;" :style="{height:heights,top:marginTop}">
			<view class="left" @tap.stop="visibles = true" >
				<!-- <view  class="backsBox">
					<image class="cancel" src="../../static/image/pink-back.png"></image>
				</view> -->
				<text class="addressValues">金华市</text>
				<image  class="images" src="../../static/image/index-search-arrow.png"></image>
			</view>
			<view class="right"  >未知商城
			</view>
	   </view>	
	   <view style="width: 750rpx;" :style="{height:marginTop}"></view>
	   <view class="uni-content"  :style='{"margin-top":heights}'>
		   <view class="searchBox" @tap.stop="jumpSearch">
			   <image class="searLogo" src="../../static/image/index-search-search.png"></image>
		       <text class="placeWo">输入搜索商品名称</text>
		   </view>
		   <carousel style="height: 560rpx;"  :img-list="imgList" @selected="selectedBanner" url-key="banner" ></carousel>
	       <view class="content-first">
			   <scroll-view class="scroll-view_H" scroll-with-animation="true"   scroll-x="true">
				   <view v-for="(item,index) in carouselList" :key="index" class="list" @tap.stop="fourLogoJump(item.id)">
					  <image  class="img"  :src="item.pic"></image>
					  <view class="word">{{item.name}}</view>
				   </view>
			   </scroll-view>
	       </view>	
		   <view class="content-second">
			   <image  class="bg" src="http://zxyp.hzbixin.cn/files/90061607417129466.jpg"></image>
			   <view class="titless"  @tap.stop="jumpss(1)" >
				   <view class="field">推荐好物</view>
				   <view class="more">查看更多</view>
			   </view>
			   <view class="list-Box">
				   <view class="list style1" v-for="(item,index) in recommondList" :key="index" @tap.stop="jumps(1,index)">
					 <image class="logosBg" :src="item.goods_img"></image>
				     <view class="first">{{item.goods_name}}</view>
					 <view class="second">¥<text class="money">{{item.user_price}}</text></view>
					 <view  class="third">¥{{item.price}}</view>
				   </view>
			   </view>
		   </view>
		   <view class="content-third">
			   <view class="titles" @tap.stop="getTeam">
				   <view class="left">
					   <view class="filed">组队拼团</view>
					   <view class="schedule">
						   <view class="box">12</view>
						   <view class="box">12</view>
						   <view class="box">12</view>
					   </view>
				   </view>
				   <view class="more">查看更多</view>
			   </view>
			   <view class="list-Box">
				   <view class="list style1 " v-for="(item,index) in 3" :key="index" @tap.stop="jumps(2)">
					 <image class="logosBg" src="https://img9.51tietu.net/pic/2019-091200/143tt0ta4sr143tt0ta4sr.jpg"></image>
					 <view class="first">PHILIPS声波...</view>
					 <view class="second">¥<text class="money">234</text></view>
					 <view  class="third">¥456</view>
				   </view>
			   </view>
			   <view class="second-box ">
				   <view  class="uni-left styless" @tap.stop="jumpss(2)">
					   <view class="title" >
						   <view class="uni-left"> 硬核补贴</view>
							<view class="uni-right">限时购</view>
					   </view>
					   <view  class="smallTitle">不用算  降到底</view>
					   <view class="picBox">
						   <image class="igmg" src="https://img9.51tietu.net/pic/2019-091200/ff1vqwm3q33ff1vqwm3q33.jpg"></image>
					       <image class="igmg" src="https://img9.51tietu.net/pic/2019-091200/ff1vqwm3q33ff1vqwm3q33.jpg"></image>
					   </view>
				   </view>
				   <view  class="uni-right styless" @tap.stop="jumpss(3)">
					   <view class="title" >
						   <view class="uni-left"> 每日特价</view>
					   </view>
					   <view  class="smallTitles">上千品类 随心挑选</view>
					   <view class="picBox">
						   <image class="igmg" src="https://img9.51tietu.net/pic/2019-091200/ff1vqwm3q33ff1vqwm3q33.jpg"></image>
						   <image class="igmg" src="https://img9.51tietu.net/pic/2019-091200/ff1vqwm3q33ff1vqwm3q33.jpg"></image>
					   </view>
				   </view>
			   </view>
			   <view class="thirdBox ">
					   <view  class="uni-left styless" @tap.stop="jumpss(4)">
						   <view class="title"  >
							   <view class="uni-left"> 发现好物</view>
								<view class="uni-right qubie1">全年低价</view>
						   </view>
						   <view  class="smallTitle qubie2">时尚潮流  万人疯抢</view>
						   <view class="picBox">
							   <image class="igmg" src="https://img9.51tietu.net/pic/2019-091200/ff1vqwm3q33ff1vqwm3q33.jpg"></image>
							   <image class="igmg" src="https://img9.51tietu.net/pic/2019-091200/ff1vqwm3q33ff1vqwm3q33.jpg"></image>
						   </view>
					   </view>
					   <view  class="uni-right styless" @tap.stop="jumpss(5)">
						   <view class="title" >
							   <view class="uni-left"> 甄选精品</view>
						   </view>
						   <view  class="smallTitles qubie3">美好新生活  闭眼买不吃亏</view>
						   <view class="picBox">
							   <image class="igmg" src="https://img9.51tietu.net/pic/2019-091200/ff1vqwm3q33ff1vqwm3q33.jpg"></image>
							   <image class="igmg" src="https://img9.51tietu.net/pic/2019-091200/ff1vqwm3q33ff1vqwm3q33.jpg"></image>
						   </view>
					   </view>
			   </view>
		   </view>
		   <view class="content-fourth">
			   <view class="list" @tap.stop="jumps(2,index)" v-for="(item,index) in mainList" :key="index">
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
	   <view class="pickerMask" v-if="visibles"></view>
	  <picker-view class="picker-box" v-if="visibles" :indicator-style="indicatorStyle" :value="value" @change="bindChange">
	  		   <picker-view-column>
	  			   <view class=" pickBox" :style="{'line-height':stystemDeviceH}" v-for="(item,index) in province" :key="index">{{item.name}}</view>
	  		   </picker-view-column>
	  		   <picker-view-column >
	  			   <view class="pickBox " :style="{'line-height':stystemDeviceH}" v-for="(item,index) in city" :key="index">{{item.name}}</view>
	  		   </picker-view-column>
	  		   <picker-view-column>
	  			   <view class=" pickBox" :style="{'line-height':stystemDeviceH}" v-for="(item,index) in county" :key="index">{{item.name}}</view>
	  		   </picker-view-column>
	  </picker-view>
	   <image @tap.stop="jumpsCart" class="shopCartLogo" src="http://zxyp.hzbixin.cn/files/71811608268411464.jpg"></image>
	</view>
		
</template>

<script>
	import carousel from '@/components/vear-carousel/vear-carousel'
	import app from '../../App.vue'
	export default {
		 data () {
			return { 
				visibles:false,
				province:[],
				city:[],
				county:[],
				cityIndex:110000,
				countyIndex:110100,
				addFlag1:true,
				stystemDeviceH:'',
				indicatorStyle: `text-align:center;height: ${Math.round(uni.getSystemInfoSync().screenWidth/(750/100))}px;width:250rpx`,
				// 轮播图
				carouselList:[],
				imgList: [],
				mainList:[],
				recommondList:[],
				shopList:[{
				 					 url:'https://img9.51tietu.net/pic/2019-091200/ff1vqwm3q33ff1vqwm3q33.jpg',
				 					 field:'洗牙'
				 },
				 {
				 					 url:'https://img9.51tietu.net/pic/2019-091200/ff1vqwm3q33ff1vqwm3q33.jpg',
				 					 field:'美白'
				 },
				 {
				 					 url:'https://img9.51tietu.net/pic/2019-091200/ff1vqwm3q33ff1vqwm3q33.jpg',
				 					 field:'补牙'
				 },
				 {
				 					 url:'https://img9.51tietu.net/pic/2019-091200/ff1vqwm3q33ff1vqwm3q33.jpg',
				 					 field:'种植'
				 }],
			}
		},
		onLoad(options){
		   this.getAddress();
		   // 轮播图
		   this.getCarouselMap();
		   // 底部所有的列表数据
		   this.getALlList();
		   // 推荐好物
		   this.getRecommond();
		   // console.log(app.globalData.imgPrefixUrl) 
		   // 地址图标的高度
		    this.stystemDeviceH=(Math.round(uni.getSystemInfoSync().screenWidth/(750/100))*2+'rpx')
		},
		components:{
			carousel
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
			// 地址选择
			  bindChange: function (e) {
				  let that=this;
				  const val = e.detail.value;
				  that.cityIndex=that.province[val[0]].id;
				  // console.log(that.cityIndex+'that.cityIndex')
				  // console.log(that.countyIndex+'that.countyIndex')
				  // 省份的id和name
				  // console.log(that.province[val[0]].name);
				  that.getAddress(val);  
				  
			   },
			//跳转到搜索页面
			jumpSearch(){
				uni.navigateTo({
					url:'/pages/shopMall/market-searchTitle'
				})
			},
			fourLogoJump(index){
				uni.navigateTo({
					url:'/pages/shopMall/category?cate_id='+index
				})
			},
			// 预约跳转 1
			jumpsCart(){
				uni.navigateTo({
				  url:'/pages/shopMall/shopMallCart'
				})
			},
			jumps(type,index){
				if(type==1){
					uni.navigateTo({
					  url:'/pages/shopMall/list-detail'
				   })
				}else if(type ==2){
					uni.navigateTo({
						url:'/pages/shopMall/list-detail'
					})
				}
			},
			// 拼团
			getTeam(){
				uni.navigateTo({
					url:'/pages/shopMall/teamUpList'
				})
			},
			
			jumpss(cate){
				let name=''
				if(cate==1 ){
					name="推荐好物"
				}else if(cate==2){
					name="硬核补贴"
				}else if(cate==3){
					name="每日特价"
				}else if(cate==4){
					name="发现好物"
				}else if(cate==5){
					name="甄选精品"
				}
				uni.navigateTo({
					url:'/pages/shopMall/goodRecommend?category='+name
				})
			},
			getAddress(val){
				let that=this;
				let firstflag=true
				// addFlag1=true 执行省份获取这个接口，只需要请求一次
				if(that.addFlag1){
					 that.$http.post('mini/v1/overt/getregionchild',{
						},function(res){
							if(res.state ==0){
								that.province=res.data;
								// console.log(11111)
								if(val){
									 // console.log(that.province[val[0]].id);
							   //       console.log(that.province[val[0]].name);
								}
							   
							}
						})
						that.addFlag1=false;
				}
				  let p1 = new Promise(   (resolve, reject) => {
					  that.$http.post('mini/v1/overt/getregionchild',{
					  	regionid:that.cityIndex
					  },function(res){
					  		if(res.state ==0){
					  			that.city=res.data;
					  			if(val){
					  				that.countyIndex=that.city[val[1]].id;
									// console.log(that.city[val[1]].name)
									// console.log(that.city[val[1]].id)
									// console.log(that.countyIndex+'countyIndex111')
					  			}
								resolve()
					  		}
					  })
				  }).then(() => {// 执行这个.then的时候，生成的promise是下面一个then的
				            // console.log(that.countyIndex+'countyIndex2222')
							that.$http.post('mini/v1/overt/getregionchild',{
								regionid:that.countyIndex
							},function(res){
								if(res.state ==0){
									that.county=res.data;
									if(val){
										// console.log(that.county[val[2]].id)
									 //    console.log(that.county[val[2]].name)
									}
								}
							})
				     }
				
				)
			},
			// 轮播图
			getCarouselMap(){
				let that=this;
				that.$http.get('mini/v1/goods/indextop',{},(res)=>{
					if(res.state==0){	
						console.log(res.data.category)
						console.log(11111)
						that.carouselList=res.data.category;
						that.imgList=res.data.banner;
						that.imgList.map(i=>{
							i.banner=app.globalData.imgPrefixUrl+i.banner
						})
						that.carouselList.map(i=>{
							i.pic=app.globalData.imgPrefixUrl+i.pic
						})
						
					}
				})
			},
			// 轮播图的选择
			 selectedBanner(item, index) {
			     console.log('🥒', item, index)
			 },
			 // 推荐好物
			getRecommond(){
				let that=this;
				that.$http.post('mini/v1/goods/indextui',{},(res)=>{
					if(res.state ==0){
						let aa=res.data.list;
                        that.recommondList=aa.slice(0,3);	
						that.recommondList.map((res)=>{
							res.goods_img=app.globalData.imgPrefixUrl+res.goods_img
						})
					}
				})
			},
			// 首页底部的数据
			getALlList(){
				let that=this;
				that.$http.post('mini/v1/goods/indexbottom',{},(res)=>{
					if(res.state ==0){
						that.mainList=res.data.list;
						that.mainList.map((res)=>{
							res.goods_img=app.globalData.imgPrefixUrl+res.goods_img
						})
						
					}
				})
			}
			
		}
	}
</script>
<style scoped lang="scss">
    @import "../../static/scss/common.scss";
	%photo_bottom{
			padding-left:10rpx;
			width: 200rpx;
			box-sizing: border-box;
			background-color: #fff;
				
	}
	%styleBox11{
		width: 750rpx;
		height: 300rpx;
		padding:0rpx 30rpx ;
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
		margin-bottom:10rpx;
		.styless{
			width: 340rpx;
			height: 300rpx;
			background-color: #fff;
			padding:0rpx 10rpx;
			box-sizing: border-box;
			.title{
				width: 280rpx;
				display: flex;
				height: 65rpx;
				align-items: center;
				.uni-left{
					color: #000000;
					font-size: 30rpx;
					font-weight: bold;
					
				}
				.uni-right{
					width: 82rpx;
					height: 28rpx;
					line-height: 28rpx;
					margin-left: 25rpx;
					text-align: center;
					color: #fff;
					font-size: 20rpx;
					background: #EE5845;
					border-radius: 14rpx 14rpx 14rpx 0px;
				}
			}
			.smallTitle{
				width: 144rpx;
				height: 30rpx;
				background: #FF9A9E;
				border-radius: 8rpx;
				font-size: 20rpx;
				font-family: PingFang SC;
				font-weight: 500;
				color: #FFFFFF;
				line-height: 30rpx;
				margin-bottom: 15rpx;
				text-align: center;
			}
			.smallTitles{
				color: #626262;
				font-size: 24rpx;
				margin-bottom: 15rpx;
			}
			.picBox{
				display: flex;
				justify-content: space-between;
				.igmg{
					display: block;
					width: 158rpx;
					height: 180rpx;
					border-radius: 8rpx;
				}
			}
			
		}
	}
	%pslist{
		
	
		.logosBg{
			display: block;
			width: 200rpx;
			height: 200rpx;
			border-top-left-radius:8rpx;
			border-top-right-radius:8rpx;
		}
		.first{
			@extend  %photo_bottom;
			font-family: 'PingFang-SC-Bold';
			font-weight: bold;
			color: #222222;
			font-size: 28rpx;
			
			@include ellipsis(1);
			
		}
		.second{
			@extend  %photo_bottom;
			color: #E41A1A;
			font-size: 26rpx;
			
			.money{
				font-size: 32rpx;
				@extend  %photo_bottom;
			}
		}
		.third{
			@extend  %photo_bottom;
			color: #B4B4B4;
			text-decoration:line-through;  
			font-size: 22rpx;
		}
		
	}
   .uni-indexPage{
	  
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
			  height: 88rpx;
			  line-height: 88rpx;
			  text-align: center;
			  width: 384rpx;
		   }
		   
	   }
   }
  
.uni-content{
	.searchBox{
		width: 690rpx;
		height: 60rpx;
		margin-left:30rpx;
		background-image: url(http://zxyp.hzbixin.cn/files/56071607417535669.jpg);
		background-repeat: no-repeat;
		background-size:  690rpx 60rpx;
		display: flex;
		align-items: center;
		.searLogo{
			display:block;
			width: 30rpx;
			height: 30rpx;
			margin: 0rpx 30rpx;
		}
		.placeWo{
			color: #A8A8A8;
			font-size: 26rpx;
		}
	}
	.content-first{
// 		width: 690rpx;
// 		height: 200rpx;
// 		margin-left:30rpx;
// 		display: flex;
// 		align-items: center;
// 		justify-content: space-between;
// 		
 	} 
 }
.content-second{
	    display: block;
		margin-top:30rpx;
		width: 720rpx;
		margin-left:30rpx;
		height: 425rpx;
		position: relative;
		left:0rpx;
		top:0rpx;
		border-bottom: 40rpx solid #fff;;
		.bg{
			display: block;
			width: 720rpx;
			height: 425rpx;
		}
		.titless{
			width: 720rpx;
			padding:0 30rpx;
			height: 90rpx;
			line-height: 90rpx;
			position: absolute;
			left:0rpx;
			top:0rpx;
			box-sizing: border-box;
			display: flex;
			justify-content: space-between;
			color: #FFFFFF;
			font-weight: bold;
			.field{
				font-size: 30rpx;
			}
			.more{
				font-size: 24rpx;
			}
		}
		.list-Box{
			width: 720rpx;
			position: absolute;
			left:0rpx;
			top:90rpx;
			display: flex;
			padding: 0rpx 30rpx;
			box-sizing: border-box;
			justify-content: space-between;
			.style1{
				width: 200rpx;
				height: 315rpx;
			}
		    @extend   %pslist;
		}
	}
	.content-third{
		background-color: #f2f2f2;
		border-bottom: 40rpx solid #f2f2f2;
		.titles{
			width: 750rpx;
			height: 125rpx;
			padding:0rpx 30rpx;
			box-sizing: border-box;
			display: flex;
			align-items: center;
			justify-content: space-between;
			.left{
				display: flex;
				height: 125rpx;
				align-items: center;
				.filed{
					color: #626262;
					font-size: 30rpx;
				}
				.schedule{
					display: flex;
					.box{
						width: 50rpx;
						height: 50rpx;
						line-height: 50rpx;
						text-align: center;
						background: #EE5845;
						border-radius: 4rpx;
						color: #fff;
						margin-left:40rpx;
					}
				}
			}
			.more{
				color: #888888;
				font-size: 24rpx;
			}
			
		}
		.list-Box{
			width: 720rpx;
			height: 315rpx;
			display: flex;
			padding: 0rpx 30rpx;
			box-sizing: border-box;
			justify-content: space-between;
			margin-bottom: 40rpx;
		    @extend   %pslist;
		}
		.second-box{
			@extend  %styleBox11;
		}
		.thirdBox{
			@extend  %styleBox11;
			.qubie1{
				width: 114rpx;
				height: 30rpx;
				background: linear-gradient(90deg, #EA3323 0%, #F19D38 100%);
				border-radius: 15rpx;
			}
			.qubie2{
				text-align: center;
				color: #626262;
			}
			.qubie3{
				color: #42B3DE;
				
			}
		}
		
	}
	.content-fourth{
		width: 750rpx;
		padding: 0rpx  30rpx;
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
		background-color: #f2f2f2;
		border-bottom: 40rpx solid #f2f2f2;
		display: flex;
		flex-wrap: wrap;
		
		.list{
			width: 330rpx;
			height: 460rpx;
			margin-bottom: 20rpx;
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
.shopCartLogo{
	display: block;
	width: 100rpx;
	height: 100rpx;
	position: fixed;
	z-index:50;
	right:30rpx;
	top:70%;
}

 .pickerMask{
	 @extend  %maskBox;
 }
.picker-box{
	 padding:0rpx 80rpx;
	// box-sizing: border-box;
	width: 750rpx;
	height: 400rpx;
	position: fixed;
	left:0rpx;
	bottom:0rpx;
	z-index: 50;
	background-color: #fff;
}
.pickBox{
	line-height: 110rpx;
}
.scroll-view_H{
		white-space: nowrap;
		overflow: hidden;
		height: 200rpx;
		.list{
			display: inline-block;
			text-align: center;
			margin-left:0rpx;
			width: 190rpx;
			.img{
				display: block;
				width: 112rpx;
				height: 112rpx;
				border-radius: 50%;;
				margin:0rpx 39rpx  20rpx;
				}
			.word{
				width: 160rpx;
				margin-left:10rpx;
				text-align: center;
				color: #888888;
				font-size: 26rpx;
				@include  ellipsis(1);
				}
		 }
  }
  
</style>

