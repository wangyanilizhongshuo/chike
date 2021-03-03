<template>
	<view class="uni-indexPage" >
	
	   <view class="uni-content"  >
		   <view class="searchBox" @tap.stop="jumpSearch">
			   <image class="searLogo" src="../../static/image/index-search-search.png"></image>
		       <text class="placeWo">输入搜索商品名称</text>
		   </view>
		   <!-- <carousel style="height: 560rpx;"  :img-list="imgList" @selected="selectedBanner" url-key="banner" ></carousel> -->
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
				   <view class="list style1" v-for="(item,index) in recommondList" :key="index" @tap.stop="jumps(1,item.goods_id)">
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
						   <view class="box">{{days}}</view>
						   <view>天</view>
						   <view class="box">{{hours}}</view>
						   <view>时</view>
						   <view class="box">{{minutes}}</view>
						   <view>分</view>
					   </view>
				   </view>
				   <view class="more">查看更多</view>
			   </view>
			   <view class="list-Box ">
				   <view class="list style1 " v-for="(item,index) in pintuanList" :key="index" @tap.stop="jumps(2,item.goods_id)">
					 <image class="logosBg" :src="item.goods_img"></image>
					 <view class="first">{{item.goods_name}}</view>
					 <view class="second">¥<text class="money">{{item.user_price}}</text></view>
					 <view  class="third">¥{{item.price}}</view>
				   </view>
			   </view>
			   <view class="second-box ">
				   <view  class="uni-left styless" @tap.stop="jumpss(2)">
					   <view class="title" >
						   <view class="uni-left"> 硬核补贴</view>
							<view class="uni-right">限时购</view>
					   </view>
					   <view  class="smallTitle">不用算  降到底</view>
					   <view class="picBox" >
						   <image class="igmg" v-if="disPriceList.length>=1" :src="yingheList[0].goods_img"></image>
						   <image class="igmg" v-if="disPriceList.length>=2" :src="yingheList[1].goods_img"></image>
					   </view>
				   </view>
				   <view  class="uni-right styless" @tap.stop="jumpss(3)">
					   <view class="title" >
						   <view class="uni-left"> 每日特价</view>
					   </view>
					   <view  class="smallTitles">上千品类 随心挑选</view>
					   <view class="picBox">
						   <image class="igmg" v-if="disPriceList.length>=1" :src="disPriceList[0].goods_img"></image>
						   <image class="igmg"  v-if="disPriceList.length>=2" :src="disPriceList[1].goods_img"></image>
						 
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
							   <image class="igmg" v-if="disPriceList.length>=1" :src="findGoodsList[0].goods_img"></image>
							   <image class="igmg" v-if="disPriceList.length>=2" :src="findGoodsList[1].goods_img"></image>
						   </view>
					   </view>
					   <view  class="uni-right styless" @tap.stop="jumpss(5)">
						   <view class="title" >
							   <view class="uni-left"> 甄选精品</view>
						   </view>
						   <view  class="smallTitles qubie3">美好新生活  闭眼买不吃亏</view>
						   <view class="picBox">
							   <image class="igmg" v-if="disPriceList.length>=1" :src="pickGoodsList[0].goods_img"></image>
							   <image class="igmg" v-if="disPriceList.length>=2" :src="pickGoodsList[1].goods_img"></image>
						   </view>
					   </view>
			   </view>
		   </view>
		   <view class="content-fourth">
			   <view class="list"  v-for="(item,index) in mainList" :key="index" @tap.stop="jumps(2,item.goods_id)">
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
				// 轮播图
				carouselList:[],
				imgList: [
					'https://img9.51tietu.net/pic/2019-091200/ff1vqwm3q33ff1vqwm3q33.jpg',
					'https://img9.51tietu.net/pic/2019-091200/ff1vqwm3q33ff1vqwm3q33.jpg'
				],
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
				 // 拼团列表
				 pintuanList:[],
				 yingheList:[],//硬核补贴
				 disPriceList:[],//每日折扣
				 findGoodsList:[],//发现好物
				 pickGoodsList:[],
				 days:'',
				 hours:'',
				 minutes:"",
				 endTs:'',
				 ptTime:''
				 
			}
		},
		onLoad(options){
		  
		   // 轮播图
		   this.getCarouselMap();
		   // 底部所有的列表数据
		   this.getALlList();
		   // 推荐好物
		   this.getRecommond();
		   //拼团
		   this.getPinTuan();
		   //拼团时间
		   this.getpinTime();
		   // 硬核补贴
		   this.getYingHe();
		   // 每日低价
		   this.getDiscount();
		   // 发现好物
		   this.getFindGoods()
		   // 甄选好物
		   this.pickGoods();
		   // console.log(app.globalData.imgPrefixUrl) 
		   // 地址图标的高度
		   
		    
		},
		onShow(){
			
		
		
		},
		components:{
			carousel
		},
		
		
		methods:{
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
			jumps(type,ids){
				if(type==1){
					uni.navigateTo({
					  url:'/pages/shopMall/list-detail?goodsId='+ids
				   })
				}else if(type ==2){
					uni.navigateTo({
						url:'/pages/shopMall/list-detail?goodsId='+ids
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
			
			// 轮播图
			getCarouselMap(){
				let that=this;
				that.$http.get('mini/v1/goods/indextop',{},(res)=>{
					if(res.state==0){	
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
						// console.log('reconnmd')
						// console.log(that.recommondList)
					}
				})
				
			},
			
			// 组队拼团
			getPinTuan(){
				let that =this;
				that.$http.post('mini/v1/goods/indexCombination',{
					page:1
				},(res)=>{
					if(res.state ==0){
						let aa=res.data.list;
						aa.map((res)=>{
							res.goods_img=app.globalData.imgPrefixUrl+res.goods_img
						})
						that.pintuanList=aa.slice(0,3);
						// console.log(that.pintuanList)
					}
				})
			},
			// 组队时间
			getpinTime(){
				let that=this;
				that.$http.get('mini/v1/goods/getcombinationtime',{},(res)=>{
					 if(res.state==0){
						 that.ptTime=res.data.list.end_time
						
						 that.getNowTime();
						
						
					 }
				})
			},
			getNowTime(){
				
				let nowtime=Math.round(new Date().getTime()/1000).toString();//获取当前时间
				 let times= this.ptTime-nowtime;
				this.days=parseInt(times/60/60/24, 10).toString().padStart(2,'0');//计算剩余的天数
				this.hours= parseInt(times/60/60%24, 10).toString().padStart(2,'0');//计算剩余的小时数
				this.minutes =parseInt(times/60%60, 10).toString().padStart(2,'0');//计算剩余的分钟数;//计算剩余的分钟数
				var ss = parseInt(times%60,10);//计算剩余的秒数
				setInterval(()=>{
					// console.log(1111)
					 let nowtime=Math.round(new Date().getTime()/1000).toString();//获取当前时间
					 let times= this.ptTime-nowtime;
					 this.days=parseInt(times/60/60/24, 10).toString().padStart(2,'0');//计算剩余的天数
					 this.hours= parseInt(times/60/60%24, 10).toString().padStart(2,'0');//计算剩余的小时数
					 this.minutes =parseInt(times/60%60, 10).toString().padStart(2,'0');//计算剩余的分钟数;//计算剩余的分钟数
					 var ss = parseInt(times%60,10);//计算剩余的秒数
					// console.log(this.days, this.hours,this.minutes)
				},60000)
				
				
						
				
			},
			// 硬核补贴？
			getYingHe(){
				let that =this;
				that.$http.post('mini/v1/goods/indexubsidy',{
					page:1
				},(res)=>{
					if(res.state ==0){
						let aa=res.data.list;
						aa.map((res)=>{
							res.goods_img=app.globalData.imgPrefixUrl+res.goods_img
						})
						that.yingheList=aa;
					}
				})
			},
			//每日特价
			getDiscount(){
				let that =this;
				that.$http.post('mini/v1/goods/indexhot',{
					page:1
				},(res)=>{
						let aa=res.data.list;
						aa.map((res)=>{
							res.goods_img=app.globalData.imgPrefixUrl+res.goods_img
						})
						that.disPriceList=aa;
					}
				)
			},
			//发现好物
			getFindGoods(){
				let that =this;
				that.$http.post('mini/v1/goods/indexfind',{
					page:1
				},(res)=>{
					if(res.state ==0){
						let aa=res.data.list;
						aa.map((res)=>{
							res.goods_img=app.globalData.imgPrefixUrl+res.goods_img
						})
						that.findGoodsList=aa;
					}
				})
			},
			//甄选好物
			pickGoods(){
				let that =this;
				that.$http.post('mini/v1/goods/indexnew',{
					page:1
				},(res)=>{
					if(res.state ==0){
						let aa=res.data.list;
						aa.map((res)=>{
							res.goods_img=app.globalData.imgPrefixUrl+res.goods_img
						})
						that.pickGoodsList=aa;
					}
				})
			},
			// 首页底部的数据
			getALlList(){
				let that=this;
				that.$http.post('mini/v1/goods/indexbottom',{},(res)=>{
					if(res.state ==0){
						let aa=res.data.list;
						that.mainList=aa.slice(0,11);
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
						border-radius: 8rpx;
						color: #fff;
						margin:0 20rpx;
					}
				}
			}
			.more{
				color: #888888;
				font-size: 24rpx;
			}
			
		}
		.list-Box{
			width: 750rpx;
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

