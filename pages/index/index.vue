<template>
	<view class="uni-indexPage" :style="visible==true?'position:fixed':'position:relative'" @tap.stop="visible = false">
	   <view  :style="{height:marginTop}" style="width:750rpx;background-color: #fff;position: fixed;left:0rpx;top:0rpx;z-index: 10;"></view>
	 
       <view class="uni-search-box" style="width:750rpx;background-color: #fff;position: fixed;z-index:10;left:0rpx;" :style="{height:heights,top:marginTop}">
			<!-- <view class="left"  > -->
			<view class="left"  @tap.stop="visible = true">
				<text class="addressValues">{{districtNames}}</text>
				<image  class="images" src="../../static/image/index-search-arrow.png"></image>
			</view>
			<view class="right"  @tap.stop="jumps(1)">
				<image class="images"  src="../../static/image/index-search-search.png"></image>
				<input class="inputs"  placeholder-style=";font-size:26rpx;color:#A8A8A8" placeholder="请输入您想要的服务"/>
			</view>
		</view>	
		<view style="width: 750rpx;" :style="{height:marginTop}"></view>
		<view class="uni-content"  :style='{"margin-top":heights}'>
			<carousel style="height: 560rpx;"  :img-list="imgList" @selected="selectedBanner" url-key="banner" ></carousel>
	     
			<view class="content-second" @tap="jumpNotice">
				<image class="left" src="https://chikehometest.hzbixin.cn/upload/images/feedback/20210428/ffad8f9fc865183ce11839c4e7591a75.png"></image>
			    <view class="right">
					<view class="wordUp word">{{noticeList.notice}}</view>
				    <!-- <view class="wordDown word">新用户注册完！</view> -->
				</view>
			</view>
			<view class="content-third" v-if="jxFlag==false">
				<view class="titles">
					<view class="fields">附近好店</view>
					<view class="getMore" @tap.stop="jumps(2)">查看更多</view>
				</view>
				<view  class="listss" v-for="(item,index) in mainList" :key="index"   @tap.stop="listClick(item.store_id)">
					<image class="imgs left"  :src="item.store_img"></image>
					<view class="right">
						<view class="first">{{item.store_name}}</view>
						<view class="secondsss">
							<view class="left">
								{{item.address}}
							</view>
							<view class="rightss">{{item.juli}}km</view>
						</view>
						<view class="thirds">{{item.info}}</view>
					</view>
				</view>
			</view>
			<view class="content-third" v-if="jxFlag">
				<view class="titles">
					<view class="fields">精选好店</view>
					<view class="getMore" @tap.stop="jumps(2)">查看更多</view>
				</view>
				<view  class="listss" v-for="(item,index) in mainList" :key="index"   @tap.stop="listClick(item.store_id)">
					<image class="imgs left"  :src="item.store_img"></image>
					<view class="right">
						<view class="first">{{item.store_name}}</view>
						<view class="secondsss">
							<view class="left">
								{{item.address}}
							</view>
							<view class="rightss">{{item.juli}}km</view>
						</view>
						<view class="thirds">{{item.info}}</view>
					</view>
				</view>
			</view>
		</view>
    <!-- 地址 -->
	   <view class="pickerMask" v-if="visible"></view>
	   <picker-view class="picker-box" v-if="visible" :indicator-style="indicatorStyle" :value="value"  @change="bindChange">
		   <picker-view-column>
			   <view class="item" :style="{'line-height':stystemDeviceH}"  v-for="(item,index) in province" :key="index">{{item.name}}</view>
		   </picker-view-column>
		   <picker-view-column >
			   <view class="item" :style="{'line-height':stystemDeviceH}"   v-for="(item,index) in city" :key="index">{{item.name}}</view>
		   </picker-view-column>
		   <picker-view-column>
			   <view class="item" :style="{'line-height':stystemDeviceH}"   v-for="(item,index) in county" :key="index">{{item.name}}</view>
		   </picker-view-column>
	   </picker-view>
	  <button class="kefuLogo" plain="true"  style="border:none;border-radius: 0rpx;margin: 0rpx;padding:0rpx;" :style="{top:dwDownHs}" hover-class="none"   sessionFrom="weapp"  open-type="contact">
		   <image  class="kefuImg" @tap.stop="getKefu" src="https://chikehometest.hzbixin.cn/upload/images/feedback/20210428/3341c77aaa65d4def96b61254090aced.png"></image>
	   </button>

	   </image> -->
       <image :style="{top:dwDownH}" class="backTopLogo" @tap.stop="backTop" src="https://chikehometest.hzbixin.cn/upload/images/feedback/20210428/c81f56dedc0d74dc3198ee4988a23fdc.png"></image>
	</view>
</template>
<script>
	import carousel from '@/components/vear-carousel/vear-carousel'
	import app from '../../App.vue'
	export default {
		 data () {
			return {   
				// 地址 
				visible:false,
				province:[],
				city:[],
				county:[],
				cityIndex:110000,
				cityName:'',
				countyIndex:110100,
				countyName:'',
				areaName:'',
				areaIndex:'',
				addFlag1:true,
				indicatorStyle: `text-align:center;height: ${Math.round(uni.getSystemInfoSync().screenWidth/(750/100))}px;width:250rpx`,
	            // 轮播图
				stystemDeviceH:'',
				carouselList:[],
				imgList: [],
				pages:1,
				pagesV:1,
				 // (列表里面显示十条数据)
				mainList:[],
				 // 经度
				
				longitudeValue:'',
				latitudeValue:'',
				getMoreWay:1,
				// 左上角区的名字
				districtNames:'',
				// 获取的区的di
				searchDistrictid:330100,
				cityId:'',
				moreFalg:1,
				// 邀请人 
				scene:0,
				// 公告列表
			    noticeList:[],
				dwDownH:'',
				dwDownHs:'',
				jxFlag:false,
				jxNum:1,//精选访问次数
				bottomItem:{}
				
		   }
	},
		components:{
			carousel
		},
		onLoad(options) {
			this.setData(options)
			console.log(options,2222);
			
			 // 对邀请人进行判断
			 if(this.scene!=0){
				 uni.setStorageSync('scene',this.scene)
			 }
			  this.getAddress();
			  // 获取地址
			  this.getLocation(1);
			// 轮播图
			  this.getCarouselMap();
			// 地址图标的高度
			 this.stystemDeviceH=(Math.round(uni.getSystemInfoSync().screenWidth/(750/100))*2+'rpx')
		     this.moreFalg=0;
			 // 公告
			 this.getNotice();
			  this.dwDownH= (uni.getSystemInfoSync().screenHeight-150)+'px';
			  this.dwDownHs= (uni.getSystemInfoSync().screenHeight-210)+'px';
			  console.log(this.dwDownH)
		},
		onShow(){
			// 正式的时候解开
			 this.pagesV=1;
			 this.pages=1;
			 // console.log(this.locationFlag)
			 // if(this.locationFlag==false){
				//  this.getLocation();
			 // }
			 // this.getLocation(0);
			 //授权完成之后，跳到分享原来的页面
				 if(uni.getStorageSync('token')){
				 	 if(uni.getStorageSync('ptGoodId')){
				 		 let ids=uni.getStorageSync('ptGoodId')
				 	        uni.navigateTo({
				 	 	         url:'/pages/shopMall/ptlist-detail?goodsId='+ids
				 	       })
				 	 }
				 	 
				 }
			
		},
		onReachBottom(){
			if(this.pagesV==0){
				this.pages+=1;
				this.getALlList();
			}
			
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
		onShareAppMessage: function () {
		    let _this = this;
		    return {
		      title: "莱美牙",
		      path: "/pages/index/index?" + _this.getShareUrlParams()
		    };
		},
		methods: {
			
			// 打开获取地址 地址
			getLocation(type){
				let that=this;
				if(type==0){
					this.mainList=[];
				
				}
				uni.getLocation({
				    type: 'wgs84',
				    success: function (res) {
						that.longitudeValue=res.longitude;
						that.latitudeValue=res.latitude;
						// 获取了经纬度,重新获取底部的数据
						that.getCityId()
						that.getCityName();
				         
				    },
					fail(e) {
					    // 定位权限未开启，引导设置
					    uni.showModal({
					        title: '温馨提示',
					        content: '您已拒绝定位,请开启',
					        confirmText: '去设置',
					        success(res){
					            if (res.confirm) {
					                //打开授权设置
									that.locationFlag=true
					                uni.openSetting();
					            }
					        },
							fail(res){
								that.locationFlag=false
								console.log('fail')
								
							}
					    })
					}
					
				})     
			},
			//自动获取城市的名字
			getCityName(){
				let that=this;
				that.$http.post('mini/v1/overt/geocoderrgeo',{
					longitude:that.longitudeValue,
					latitude:that.latitudeValue
				},(res)=>{
					if(res.state==0){
						that.districtNames=res.data.district;
					}
				})
			},
			// 地址选择
			  bindChange: function (e) {
				  let that=this;
			      const val = e.detail.value;
				 that.cityIndex=that.province[val[0]].id;
				 that.cityName=that.province[val[0]].name;
				
				 that.getAddress(val);  
				 that.jxFlag=false;//附近好店开始重新选择
				 that.jxNum=1;
			   },
			   // 页面跳转
			   jumps(type){
				   let that=this;
				   // 1 :搜索
				   if(type ==1){
					   uni.navigateTo({
					   	url:'/pages/index/titleSearch?longitude='+that.longitudeValue+'&latitude='+that.latitudeValue+'&districtNames='+that.districtNames+'&searchDistrictid='+that.searchDistrictid
					   })
				   }else if(type ==2){
					   // console.log(111234)
					   // console.log(that.searchDistrictid)
					   uni.navigateTo({
					   	url:'/pages/index/listBoxList?longitude='+that.longitudeValue+'&latitude='+that.latitudeValue+'&searchDistrictid='+that.searchDistrictid
					   })
				   }
				   
			   },
			   // 四个logo点进去 
			   fourLogoJump(name,ids){
				   uni.navigateTo({
				   	url:'/pages/index/fourLogoList?name='+name+'&cateId='+ids+'&longitude='+this.longitudeValue+'&latitude='+this.latitudeValue+'&searchDistrictid='+this.searchDistrictid
				   })
			   },
			   listClick(id){
				   uni.navigateTo({
				   	url:'/pages/index/searchDetail?storeId='+id
				   })
			   },
			   backTop(){
				   uni.pageScrollTo({
				       scrollTop: 0,  //距离页面顶部的距离
				       duration: 300
				   });
			   },
				//获取区的id 以此获取门店列表
				getCityId(){
					let that =this;
					that.$http.post('mini/v1/overt/geocoderrgeo',{
						longitude:that.longitudeValue,
						latitude:that.latitudeValue
					},(res)=>{
						if(res.state==0){						
							that.searchDistrictid=res.data.city_id;
							that.getALlList();
						}
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
									if(val){
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
											that.countyName=that.city[val[1]].name;
											that.searchDistrictid=that.city[val[1]].id;
										}
										resolve()
									}
							  })
					  }).then(() => {// 执行这个.then的时候，生成的promise是下面一个then的
								that.$http.post('mini/v1/overt/getregionchild',{
									regionid:that.countyIndex
								},function(res){
									if(res.state ==0){
										that.county=res.data;
										if(val){
											that.areaName=that.county[val[2]].name;
											that.areaIndex=that.county[val[2]].id;
											that.districtNames=that.areaName
											// 切换地址的情况下就给他清除
											that.mainList=[];
											that.getALlList()
										}
									}
								})
					     }
					)
				},
				// 轮播图
				getCarouselMap(){
					let that=this;
					that.$http.get('mini/v1/service/indextop',{},(res)=>{
						if(res.state==0){	
							that.carouselList=res.data.category;
							that.imgList=res.data.banner;
							that.imgList.map(i=>{
								i.banner=app.globalData.imgPrefixUrl+i.banner
							})
							that.carouselList.map(i=>{
								i.pic=app.globalData.imgPrefixUrl+'/'+i.pic
							})
							console.log('imgList');
							console.log(that.imgList)
						}
					})
				},
				// 轮播图的选择
				 selectedBanner(item, index) {
				     console.log('🥒', item, index)
				 },
				// 首页底部的数据
				getALlList(){
					let that=this;
					
					if(that.jxFlag==false){
						that.bottomItem={
							page:that.pages,
							user_lng:that.longitudeValue,
							user_lat:that.latitudeValue,
							user_city_id:that.searchDistrictid
					     };
					}else if(that.jxFlag==true ){
						that.bottomItem={
							page:that.pages,
							is_index:1,
							user_lng:that.longitudeValue,
							user_lat:that.latitudeValue
							// user_city_id:that.searchDistrictid
						};
					}
					that.$http.post('mini/v1/service/storelist',that.bottomItem,(res)=>{
						if(res.state ==0){
							
							that.pagesV=res.data.is_request;
							if(res.data.is_request==0){
								let aa = res.data.list;
								// that.jxFlag=1;
								aa.map((res)=>{
									res.store_img='https://chikehometest.hzbixin.cn'+res.store_img
								})
								let bb = that.mainList;
								that.mainList = bb.concat(aa);
							}else{
								console.log('come')
								console.log(that.mainList.length)
								// 访问数据是否是空的,还是第一次访问就是空,如果第一次空,就去掉is_index
							    if(that.mainList.length==0){
									console.log(123)
									that.jxNum+=1;
									that.jxFlag=true;
									console.log(that.jxFlag)
									if(that.jxNum<=2){
										that.getALlList();
									}
								}	
							}
						}
					})
				},
				//跳转到公告
				jumpNotice(){
					uni.navigateTo({
						url:'/pages/index/noticeList'
					})
				},
				getNotice(){
					this.$http.get('mini/v1/service/notice',{},(res)=>{
						if(res.state==0){
							this.noticeList=res.data.list[0]
						}
					})
				}
		    }
	}
</script>

<style scoped lang="scss">
    @import "../../static/scss/common.scss";
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
		   .left{
			   display: flex;
			   height: 88rpx;
			   align-items: center;
			   margin-left: 30rpx;
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
		   .right{
			  display: flex;
			  height: 88rpx;
			  align-items: center;
			  position: relative;
			  left:0rpx;
			  top:0rpx;
			   .images{
				   display: block;
				   width: 30rpx;
				   height: 30rpx;
				    position: relative;
					left:65rpx;
					top:0rpx;
				   }
			   .inputs{
				   // width: 410rpx;
				   width: 360rpx;
				   height: 60rpx;
				   text-align: center;
				   border-radius: 20rpx;
				   background-image: url(https://chikehometest.hzbixin.cn/upload/images/feedback/20210428/5d700641fa66161d7009055fb4439ad1.png);
			       background-size: 360rpx  60rpx;
				   background-repeat: no-repeat;
			   }
		   }
		   
	   }
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
.scroll-view_H{
		white-space: nowrap;
		overflow: hidden;
		height: 200rpx;
		.lists{
			display: inline-block;
			margin-left: 0rpx;
			width: 190rpx;
			margin-left:0rpx;
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
  // height: 114rpx;
		
		// 	
.uni-content{
	.content-first{
		 width: 690rpx;
		// width: 112rpx;
		margin-left:30rpx;
		display: inline-block;
		// display: flex;
		// align-items: center;
		// justify-content: space-between;
		
	}
	.content-second{
		width: 750rpx;
		height: 50rpx;
		padding:0rpx 30rpx;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		margin:27rpx 0rpx 36rpx;
		.left{
			display: block;
			width: 148rpx;
			height: 50rpx;
			margin-right: 20rpx;
		}
		.right{
			.wordUp{
				margin:0rpx 0rpx ;
			}
			.word{
				color: #222222;
				font-size: 26rpx;
			}
		}
		 
	}
	.content-third{
		.titles{
			width: 690rpx;
			margin-left:30rpx;
			display: flex;
			justify-content: space-between;
			color: #222;
			margin-bottom:40rpx;
			.fields{
				font-family: 'PingFang-SC-Bold';
				
				font-size: 32rpx;
				font-weight: bold;
			}
			.getMore{
				font-size: 26rpx;;
			}
		}
		.listss{
			width: 750rpx;
			box-sizing: border-box;
			padding:0rpx 30rpx;
			display: flex;
			margin-bottom: 50rpx;
			.imgs{
				display: block;
				width: 150rpx;
				height: 150rpx;
				margin-right:30rpx;
				border-radius: 8rpx;;
			}
			.right{
				width: 500rpx;
				height: 150rpx;
				display: flex;
				flex-direction: column;
				justify-content: space-around;
				.first{
					font-family: 'PingFang-SC-Bold';
					font-weight: bold;
					color: #222222;
					font-size: 28rpx;
				}
				.secondsss{
					color: #555555;
					font-size: 24rpx;
					width: 500rpx;
					display: flex;
					justify-content: space-between;
					margin: 10rpx 0rpx;
					.left{}
					.rightss{}
				}
				.thirds{
					color: #555555;
					font-size: 24rpx;
					@include  ellipsis(1);
				}
				
			}
			
		}
	}
	
}
.backTopLogo{
	display: block;
	width: 100rpx;
	height: 100rpx;
	position: fixed;
	right:0rpx;
	// top:90%;
	
}
.kefuLogo{
	position: fixed;
	right:0rpx;
	// top:85%;
	.kefuImg{
	
		display: block;
	    width: 100rpx;
	    height: 100rpx;
	}
	
}


</style>
