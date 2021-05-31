<template>
	<view class="uni-list-InList">
		<view  :style="{height:marginTop}" style="width:750rpx;background-color: #fff;position: fixed;left:0rpx;top:0rpx;z-index: 10;"></view>
		<view class="uni-search-box" style="width:750rpx;background-color: #fff;position: fixed;z-index:10;left:0rpx;" :style="{height:heights,top:marginTop}">
    <!-- <view class="uni-search-box" style="width:750rpx;background-color: #fff;position: fixed;z-index:10;left:0rpx;" :style="{top:marginTop}"> -->
					<view class="left" @tap.stop="backs">
						<image  class="images" src="../../static/image/pink-back.png"></image>
					</view>
					<view class="right"  >
						<image class="images"  src="../../static/image/index-search-search.png"></image>
						<input class="inputs" type="text" confirm-type="search" @confirm="getInput"  v-model="searchValue"  placeholder-style="font-size:26rpx;color:#A8A8A8" placeholder="搜索"/>
					</view>		
		</view>	
		<view class="uni-title"  :style='{"margin-top":heights,"padding-top":marginTop}'>
			   <view class="titleBox">
				    <scroll-view class="scroll-view_H" scroll-with-animation="true"   scroll-x="true">
				           <view class="listBox" v-for="(item,index) in cateTopList" :key="index" @tap.stop="scrollFirst(item.cate_id)">
							   <view class="list"  >
								    <image class="imgs" :src="item.pic"></image>
						            <view  class="field">{{item.name}}</view>
							   </view>
						   </view>
				     </scroll-view>
			   </view>
			   <view style="width: 750rpx;height: 134rpx;background-color: #fff;"></view>
		</view>
		<view class="uni-contents">
			<view class="uni-leftBox"  :style="{top:dingweiHeight,'height':boxHeight}" >
				 <scroll-view class="scroll-view"  scroll-y="true" :style="{'height':boxHeight}">
					 <view class="box" :style="leftScrollIndex==index?'background-color:#fff;':'background-color:#f8f8f8'" v-for="(item,index) in leftList" :key='index' @tap.stop="getLeftScroll(item.cate_id,index,0)">{{item.name}}</view>
				 </scroll-view>
			</view>
			<view class="uni-rightBox"  >
				<view class="bottomBox" :style="{height:boxHeight}" >
					<view class="listBox" v-for="(item,index) in  rightList" :key="index">
						<image class="imgs" :src="item.img"></image>
					    <view class="uni-right">
							<view class="uni-first">{{item.name}}</view>
							<view  class="uni-second">{{item.remark}}</view>
							<view class="uni-third">
								<view class="left">¥<text class="money">{{item.price}}</text></view>
								<image @tap.stop="getAddcart(item.id)" class="addLogo" src="https://chikehometest.hzbixin.cn/upload/images/feedback/20210428/9ebb4f8cbead54e2a279c553e5061181.png"></image>
							</view>
						</view>
					</view>
				</view>
				<image v-if="cartListFlag" class="cartNo" src="../../static/image/cartNoData.png"></image>
			</view>
		</view>
		<view class="cartSuccessBox" v-if="cartSucFlag">
			        <image class="imgss" src="../../static/image/joinCartSuccess.png"></image>
				  <view class="tips">加入成功，在购物车等您~</view>
				  
		</view>
		<image @tap.stop="jumpCart"  class="addCartLogo" src="https://chikehometest.hzbixin.cn/upload/images/feedback/20210428/11af9533569a7cb0bdf7758686f733a4.png"></image>
	</view>
</template>

<script>
	import app from '../../App.vue'
	export default{
		data(){
			return{
				leftList:[
					{title:'二级标题'},	{title:'一级标题'},	{title:'一级标题'	}, {title:'四级标题'},{title:'三级标题'},{title:'刘级标题'},
				    {title:'四级标题'},{title:'三级标题'},{title:'三级标题'},{title:'刘级标题'},{title:'三级标题'},{title:'刘级标题'},
					{title:'三级标题'},{title:'刘级标题'},{title:'三级标题'},{title:'刘级标题'}
				     
				],
				boxHeight:'',
				boxHeights:'',
				boxHeightSmall:'',
				dingweiHeight:'',
				leftScrollIndex:0,
				rightScrollIndex:0,
				cartSucFlag:false,
				store_id:'',
				cate_id:'',
				storeId:0,
				cateTopList:[],
				pages:1,
				pageV:1,
				erGoodId:1,
				rightList:[],
				cartListFlag:false,
        searchValue:''
			}
		},
		onLoad(options){
			let that=this;
			that.setData(options);
			uni.getSystemInfo({
			    success: function (res) {
					that.boxHeightSmall=res.screenHeight;
					
			    }
			});
			that.dingweiHeight=(parseInt(that.marginTop))+(parseInt(that.heights))+67+'px';
			that.dingweiHeights=(parseInt(that.marginTop))+(parseInt(that.heights))+67+'px';
			that.boxHeight=(that.boxHeightSmall)-(parseInt(that.marginTop))-(parseInt(that.heights))-67+'px';
			that.boxHeights=(that.boxHeightSmall)-(parseInt(that.marginTop))-(parseInt(that.heights))-67+'px';
			
			that.getTopList()
			that.getLeftList();
			// that.getLeftScroll(that.erGoodId,0)
		},
		computed:{
			heights(){
				const {platform,statusBarHeight} = uni.getSystemInfoSync()
				let height = statusBarHeight +4 //ios 24px
				console.log(statusBarHeight)
				console.log(1111)
				if (platform.toLowerCase() == "android" ){
					height +=4 //android 28px
				}
				// 胶囊高度 32px 下边框6px height 状态栏高度
				
				return height+ 38 + "px"
			},
			marginTop(){
				const {platform,statusBarHeight} = uni.getSystemInfoSync();
				let height = statusBarHeight +8;
				console.log(statusBarHeight)
				console.log(uni.getSystemInfoSync())
				console.log(platform)
				console.log(222)
				if (platform.toLowerCase() == "android" ){
					height +=8;
					
				}
				return height + "px"				
			}
			
		},
		onReachBottom(){
			if(this.pagesV==0){
				this.pages+=1;
				this.getLeftScroll(this.erGoodId,this.leftScrollIndex,1);
			}
		},
		methods:{
			backs(){
				uni.navigateBack()
			},
			// 上方的点击
			scrollFirst(vas){
				this.cate_id=vas;
				// 点击上方,下方列表的清空
				this.rightList=[];
				this.getLeftList()
			},
			// 左边滑动
			getLeftScroll(values,index,types){
				let that=this;
				// 左边点击的时候页面page:清除
				that.leftScrollIndex=index;
				if(types==0){
					that.pages=1;
					that.pageV=1;
					that.rightList=[]
				}
				that.erGoodId=values;
				that.$http.post('mini/v1/store/servicelist',{
					store_id:that.storeId,
					cate_id:that.erGoodId,
					page:that.pages
				},(res)=>{
					if(res.state==0){
						that.pagesV=res.data.is_request;
						if(res.data.is_request==0){
							// 购物车列表为空
							that.cartListFlag=false;
							let aa = res.data.list;
							aa.map((res)=>{
								res.img=app.globalData.imgPrefixUrl+res.img
							})
							let bb = that.rightList;
							that.rightList = bb.concat(aa);
						 
							
						}else if(res.data.is_request==1&&types==0 ){
							
							that.cartListFlag=true;
						}
						
					}
				})
			},
			getRightScroll(index){
				this.rightScrollIndex=index
			},
			getAddcart(id){
				let that =this;
				that.$http.post('mini/v1/service/addcart',{
					service_id:id,
					store_id:that.storeId
				},(res)=>{
					 if(res.state==0){
						 that.cartSucFlag=true;
						 setTimeout(()=>{
						 	that.cartSucFlag=false;
						 },1500)
					 }
				})	
				
			},
			// 上方数据的获取
			getTopList(){
				let that=this;
				that.$http.post('mini/v1/store/category',{
					store_id:that.storeId
				},(res)=>{
					if(res.state==0){
						that.cateTopList=res.data;
						that.cateTopList.map(i=>{
							i.pic=app.globalData.imgPrefixUrl+i.pic
						})
					}
				})
				
				
			},
		     // 左边的列表
			getLeftList(){
				let that=this;
				that.$http.post('mini/v1/store/childcategory',{
					store_id:that.storeId,
					cate_id:that.cate_id
				},(res)=>{
					if(res.state==0){
						that.leftList=res.data;
						console.log('wang')
						console.log(res.data)
						that.erGoodId=res.data[0].cate_id;
						that.getLeftScroll(that.erGoodId,0,1)
						
					}
				})
			},
			// 去购物车页面
			jumpCart(){
				uni.switchTab({
					url:'/pages/shopCart/shopCart'
				})
			},
      getInput(){
        console.log(235)
         this.rightList=[];
         this.$http.post('mini/v1/service/serviceSearch',{
           store_id:this.storeId,
             name:this.searchValue,
             category_id:this.cate_id
         },(res)=>{
           if(res.state==0){
             let aa = res.data.xiangmu;
             aa.map((res1)=>{
             	res1.img=app.globalData.imgPrefixUrl+res1.img
             })
               this.rightList=aa;
           }
         })
      }
		}
	}
</script>

<style scoped lang="scss">
	@import "../../static/scss/common.scss";
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
				  background-image: url(https://chikehometest.hzbixin.cn/upload/images/feedback/20210428/5d700641fa66161d7009055fb4439ad1.png);
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
.uni-title{
	.titleBox{
		width: 750rpx;
		padding:0rpx 30rpx;
		box-sizing: border-box;
		height: 134rpx;
		position: fixed;
		left:0rpx;
		z-index: 30;
		background-color: #fff;
		.scroll-view_H{
		    height: 114rpx;
			white-space: nowrap;
			overflow: hidden;
			.listBox{
				display: inline-block;
				width: 120rpx;
			}
			.list{
				display: flex;
				text-align: center;
				width: 120rpx;
				flex-direction: column;
				align-items: center;
				justify-content: space-between;
				.imgs{
					display: block;
					width: 80rpx;
					height: 80rpx;
					border-radius: 8rpx;
				}
				.field{
					color: #494848;
					font-size: 22rpx;;
				}
			}
			
		}
		
	}
	
}
.uni-contents{
	width: 750rpx;
	display: flex;
	height: auto;
	position: relative;
	left:0rpx;
	top:0rpx;
	.uni-leftBox{
		position: fixed;
		left: 0rpx;
		// top:0rpx;
		z-index: 30;
		background-color:#f2f2f2;
		width: 240rpx;
		.scroll-view{
			width: 240rpx;
			// background-color:;
			.box{
				display: inline-block;
				width: 240rpx;
				height:80rpx;
				text-align: center;
				line-height: 80rpx;;
				color: #4E4E4E;
				font-size: 26rpx;
				
			}
		}
	}
	.uni-rightBox{
		 margin-left:240rpx; 
		 background-color: #fff;
		.bottomBox{
			// margin-top:80rpx;
			 // overflow-x: hidden;
			 // overflow-y: auto;
			.listBox{
				width: 570rpx;
				height: 200rpx;
				display: flex;
				align-items: center;
				padding:10rpx 25rpx  0rpx;
				box-sizing: border-box;
				.imgs{
					display:block;
					width: 150rpx;
					height: 150rpx;
					margin-right: 25rpx;;
				}
				.uni-right{
					width: 295rpx;
					height: 150rpx;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					.uni-first{
						@include  ellipsis(1);
						color: #000;
						font-size: 24rpx;
						font-weight: bold;
					}
					.uni-second{
						color: #555555;
						font-size: 24rpx;;
						@include  ellipsis(2);
					}
					.uni-third{
						display: flex;
						justify-content: space-between;
						.left{
							color: #FF0000;
							font-size: 24rpx;;
							.money{
								font-size: 30rpx;;
							}
						}
						.addLogo{
							display: block;
							width: 40rpx;
							height: 40rpx;;
						}
					}
					
				}
				
			}
		}
		.topBox{
			width: 570rpx;
			position: fixed;
			left:170rpx;
			z-index: 50;
			background-color: #fff;
			.scroll-view_x{
				white-space: nowrap;
				overflow: hidden;
			    padding:17rpx 0rpx;
				.active1{
				   color: #FF9A9E;
                   background: #FFE5E6;
				}
				.active0{
					color: #919191;
					background: #E8E8E8;
				}
				.boxs{
					display: inline-block;
					padding:5rpx 10rpx;
					font-size: 22rpx;
					height: 36rpx;
					text-align: center;
					line-height: 36rpx;;
					margin-left:20rpx;			
                    
					
				}
			}
		}
	}
	
}
.cartSuccessBox{
	position: fixed;
	top:45%;
	left:135rpx;
	z-index:60;
	width: 480rpx;
	height: 230rpx;
	background: #000000;
	opacity: 0.8;
	border-radius: 16rpx;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	.tips{
		color: #EFEFEF;
		font-size: 28rpx;
		margin-top:40rpx;
	}
	.imgss{
		display: block;
		width: 50rpx;
		height: 50rpx;
	}
}
.cartNo{
	display: block;
	width: 182rpx;
	height: 252rpx;
	    position: absolute;
	    top: 40%;
	    right: 30%;
}
.addCartLogo{
	display: block;
	width: 100rpx;
	height: 100rpx;
	position: fixed;
	right:50rpx;
	bottom:50rpx;
}

</style>
