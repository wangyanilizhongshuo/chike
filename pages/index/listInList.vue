<template>
	<view class="uni-list-InList">
		<view  :style="{height:marginTop}" style="width:750rpx;background-color: #fff;position: fixed;left:0rpx;top:0rpx;z-index: 10;"></view>
		<view class="uni-search-box" style="width:750rpx;background-color: #fff;position: fixed;z-index:10;left:0rpx;" :style="{height:heights,top:marginTop}">
					<view class="left" @tap.stop="backs">
						<image  class="images" src="../../static/image/pink-back.png"></image>
					</view>
					<view class="right"  >
						<image class="images"  src="../../static/image/index-search-search.png"></image>
						<input class="inputs" @focus="getInput" @blur="setInput" v-model="searchValue"  placeholder-style="font-size:26rpx;color:#A8A8A8" placeholder="搜索"/>
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
			<view class="uni-leftBox" :style="{top:dingweiHeight}">
				 <scroll-view class="scroll-view"  scroll-y="true" :style="{height:boxHeight}">
					 <view class="box" :style="leftScrollIndex==index?'background-color:#fff;':'background-color:#f8f8f8'" v-for="(item,index) in leftList" :key='index' @tap.stop="getLeftScroll(item.cate_id,index,0)">{{item.name}}</view>
				 </scroll-view>
			</view>
			<view class="uni-rightBox">
				<view class="bottomBox" :style="{height:boxHeight}" >
					<view class="listBox" v-for="(item,index) in  rightList" :key="index">
						<image class="imgs" :src="item.img"></image>
					    <view class="uni-right">
							<view class="uni-first">{{item.name}}</view>
							<view  class="uni-second">{{item.remark}}</view>
							<view class="uni-third">
								<view class="left">¥<text class="money">{{item.price}}</text></view>
								<image @tap.stop="getAddcart(item.id)" class="addLogo" src="http://zxyp.hzbixin.cn/files/32581608199923056.jpg"></image>
							</view>
						</view>
					</view>
				</view>
				<image v-if="cartListFlag" class="cartNo" src="../../static/image/cartNoData.png"></image>
			</view>
		</view>
		<view class="cartSuccessBox" v-if="cartSucFlag">
				  <view class="tips">加入成功，在购物车等您~</view>
				  <image class="imgss" src="../../static/image/joinCartSuccess.png"></image>
		</view>
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
				cartListFlag:false
			}
		},
		onLoad(options){
			let that=this;
			that.setData(options);
			uni.getSystemInfo({
			    success: function (res) {
					that.boxHeight=res.screenHeight;
			    }
			});
			that.dingweiHeight=(parseInt(that.marginTop))+(parseInt(that.heights))+134+'rpx';
			that.dingweiHeights=(parseInt(that.marginTop))+(parseInt(that.heights))+134+'rpx';
			that.boxHeight=(that.boxHeight*2)-(parseInt(that.marginTop))-(parseInt(that.heights))-134+'rpx';
		    that.getTopList()
			that.getLeftList();
			// that.getLeftScroll(that.erGoodId,0)
		},
		computed:{
			heights(){
				const {platform,statusBarHeight} = uni.getSystemInfoSync()
				let height = statusBarHeight +4 //ios 24px
				if (platform.toLowerCase() == "android" ){
					height +=4 //android 28px
				}
				// 胶囊高度 32px 下边框6px height 状态栏高度
				return (height+ 38)*2 + "rpx"
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
				if(types==0){
					that.pages=1;
					that.pageV=1;
					that.rightList=[]
				}
			
				that.leftScrollIndex=index;
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
						     console.log(2222)
							
						}else if(res.data.is_request==1 ){
							console.log(that.rightList)
							console.log(that.rightList.length)
							console.log(123)
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
						 },2000)
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
						that.erGoodId=res.data[0].cate_id;
						that.getLeftScroll(that.erGoodId,0,1)
						
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
	.uni-leftBox{
		position: fixed;
		left: 0rpx;
		// top:0rpx;
		z-index: 30;
		background-color: #fff;
		width: 170rpx;
		
		.scroll-view{
			width: 170rpx;
			overflow: hidden;
			.box{
				display: inline-block;
				width: 170rpx;
				height:80rpx;
				text-align: center;
				line-height: 80rpx;;
				color: #4E4E4E;
				font-size: 26rpx;
				
			}
		}
	}
	.uni-rightBox{
		background-color: #fff;
		margin-left:170rpx;
		.bottomBox{
			// margin-top:80rpx;
			overflow: scroll;
			.listBox{
				width: 570rpx;
				height: 200rpx;
				display: flex;
				align-items: center;
				padding:10rpx 25rpx  0rpx;
				box-sizing: border-box;
				.imgs{
					display: block;
					width: 150rpx;
					height: 150rpx;
					margin-right: 25rpx;;
				}
				.uni-right{
					width: 345rpx;
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
		margin-bottom:40rpx;
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

</style>
