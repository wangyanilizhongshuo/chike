<template>
	<view class="uni-searchDetail" >
		<image @tap.stop="backs" :style="{top:backHeight}" class="imagesBack" src="https://chikehometest.hzbixin.cn/upload/images/feedback/20210428/792fd8aa82d5e83a04f0bb87ff6c257f.png"></image>
		
	   <view class="uni-content">
	   <!-- <view class="uni-content"  :style='{"margin-top":heights,"padding-top":marginTop}'> -->
		  <uni-swiper-dot class="swiper-dot" :info="info" mode="round "  :current="current" field="content" :mode="mode">
		      <swiper style="width: 750rpx;height: 750rpx;;" class="swiper-box" @change="change">
		          <swiper-item v-for="(item ,index) in info" :key="index">
		              <view class="swiper-item">
		  								   <image style="margin-left:0rpx;height: 750rpx;width:750rpx;;" class="swiImgs" :src="item.url"></image>
		              </view>
		          </swiper-item>
		      </swiper>
		  </uni-swiper-dot>
		   <view class="teamBox">
			   <view class="uni-left">
				   <view class="leftBox">
					   <view class="tops">¥ <text class="money">19.90</text></view>
					   <view class="downs">已售35件</view>
				   </view>
				   <view class="rightBox">立即参团</view>
			   </view>
			   <view class="uni-rights">
				   <view class="tops">距结束仅剩</view>
				   <view class="downs">
					   <view  class="lists">23</view>
					   <view  class="lists">23</view>
					   <view  class="lists">23</view>
				   </view>
			   </view>
		   </view>
		   <view class="contentBox">
			   <view class="boxFirst">
				     <view class="uni-first">
						 <view class="uni-left">
							 <text class="lefts">¥<text class="mon">12.3</text></text>
							 <text class="rights">4232</text>
						 </view>
						 <view class="uni-right">已售86件</view>
					 </view>
					 <view class="uni-second">
						 小巨蛋野樱莓雪齿亮白清新口气去渍去黄牙膏 氨基酸健齿炫齿按压泵头式液体牙160g
					 </view>
					 <view class="uni-third">
						 <view class="leftss">
							 <view class="tops">
								 <!-- <view class="jfbox style1">返20积分</view> -->
								 <view class="yjbox style1">佣金¥5.6</view>
							 </view>
							 <view class="downs">
								 <text  class="words">极速退款 </text>
								 |<text class="words">全场包邮 </text>|
								 <text class="words">七天无理由退货</text>
							 </view>
						 </view>
						 <view class="rightss">
							 <image  class="imgs" src="../../static/image/share.png"></image>
						     <view class="field">分享</view>
						 </view>
					 </view>
					 
			   </view>
			   <view class="boxSecond" v-for="(item,index) in 2" :key="index">
			   		 <view class="sFirst">1人正在拼单，可直接参与</view>
				     <view class="sSecond">
						 <view class="sLeft">
							 <image  class="imgs"  src="http://zxyp.hzbixin.cn/files/16031607417221838.jpg"></image>
						     <text class="field">无敌元气妹</text> 
						 </view>
						 <view class="sRight"> 
						   <view  class="leftss">
							  <view  class="ups"> 还差1人拼成 </view>
							  <view class="downs">剩余11:14:25</view>
						   </view>
						   <view class="rightss">去拼单</view>
						 </view>
					 </view>
			   </view>
		   </view>
		   <view class="box-introduce">
			   <view class="titles">
				   <view class="phoDe styless" @tap.stop="tuwordFlag=true,goodsFlag=false">
					   <view  :class="tuwordFlag?'activess':'fiedss'" >图文详情</view>
				       <view v-if="tuwordFlag" class="lines"></view>
				   </view>
				   <view class="goodDe styless" @tap.stop="tuwordFlag=false,goodsFlag=true">
					   <text  :class="goodsFlag?'activess':'fiedss'" >商品详情</text>
				       <view v-if="goodsFlag" class="lines"></view>
				</view>
			   </view>
			   <view class="picBox" v-if="tuwordFlag">
				   <image class="bgs" mode="widthFix" src="http://zxyp.hzbixin.cn/files/s_63601607416945757.jpg"></image>
			   </view>
			   <view class="goodBox" v-if="goodsFlag">
				   <view class="list" v-for="(item,index) in goodsDetailList" :key="index">
					   <view class="field">{{item.title}}</view>
					   <view class="sss">{{item.fieldss}}</view>
				   </view>
			   </view>
		   </view>
	   </view>
	   <view class="footer">
		   <view class="uni-left" @tap.stop="collectFlag=(!collectFlag)">
			   <image class="imgStart" v-if="collectFlag"  src="https://chikehometest.hzbixin.cn/upload/images/feedback/20210428/47f9255cd0bc41d024318e36fb521176.png"></image>
			   <image class="imgStart"  v-if="!collectFlag" src="https://chikehometest.hzbixin.cn/upload/images/feedback/20210428/3544cfd00b6213277136e828db08cd9f.png"></image>
		       <text class="field">收藏</text>
		   </view>
		   <view class="uni-center" @tap.stop="joinCartBoxflag=true,category=1">
			   加入购物车
		   </view>
		   <view class="uni-right">
			   <view class="buyBox styless2" @tap.stop="joinCartBoxflag=true,category=2">
				   <text class="upss">单独购买</text>
				   <text class="downss">¥<text>49.90</text></text>
			   </view>
			   <view class="makeGroupBox styless2" @tap.stop="joinCartBoxflag=true,category=3">
				   <text class="upss">发起拼团</text>
				   <text class="downss">¥<text>29.90</text></text>
			   </view>
		   </view>
	   </view>
	   <!-- 购物车固定的logo -->
	  <image @tap.stop="jumps" class="shopCartLogo" src="http://zxyp.hzbixin.cn/files/21131608269905243.jpg"></image>
	  <!-- 加入购物车 -->
	  <view class="joincartBoxMask" @tap.stop="joinCartBoxflag=false" v-if="joinCartBoxflag"></view>
	  <view class="joincartBox"  v-if="joinCartBoxflag">
		  <view class="first">
			  <view class="uni-left">
				 <image class="imgs" src="https://img9.51tietu.net/pic/2019-091200/ff1vqwm3q33ff1vqwm3q33.jpg"></image>
			     <view class="goodBox">
					 <view class="priBox">
						 <view class="lefts">¥ <text class="mon">34.9</text></view>
					     <view class="rights">已减¥16</view>
					 </view>
					 <view class="norms">已选择:60ml</view>
				 </view>
			  </view>
			  <view class="uni-right" @tap.stop="joinCartBoxflag=false">
				  <image class="cancel" src="../../static/image/cancel.png"></image>
			  </view>
		  </view>
		  <view class="second">
			  <view class="field">规格</view>
			  <view class="listBOx">
				  <view :class="choiceSpecificeIndex==index?'active':'lists'" class="stylesm"
				      v-for="(item,index) in 3":key="index" @tap.stop="getChoiceSpec(index)">60ml</view>
			  </view>
		  </view>
		  <view class="third">
			  <view class="field">数量</view>
			  <view class="right">
					  <view class="zuo" @tap.stop="getGoodsNum(1)">-</view>
					  <view class="zhong">{{goodNum}}</view>
					  <view class="you" @tap.stop="getGoodsNum(2)">+</view>
			  </view>
		  </view>
		  <view class="fourth" @tap.stop="joinCart">确定</view>
	  </view>
	  <view class="cartSuccessBox" v-if="cartSucFlag">
		  <view class="tips">加入成功，在购物车等您~</view>
		  <image class="imgss" src="../../static/image/joinCartSuccess.png"></image>
	  </view>
	 </view>
</template>

<script>
	import uniSwiperDot from "@/components/uni-swiper-dot/uni-swiper-dot.vue"
	export default {
		 data () {
			return { 
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
				listData:[
					{
						  url:'https://img9.51tietu.net/pic/2019-091200/ff1vqwm3q33ff1vqwm3q33.jpg',
					      title:'超声波洗牙（豪华套餐）',
						  price:'49.00',
						  desc:'无痛清除牙结石，利用超声波的高频震动，将牙齿表面的牙结石，牙渍，菌斑等击碎并冲刷下来以达到清洁牙齿的目的。'
					},
					{
						  url:'https://img9.51tietu.net/pic/2019-091200/ff1vqwm3q33ff1vqwm3q33.jpg',
					      title:'超声波洗牙（豪华套餐）',
						  price:'49.00',
						  desc:'无痛清除牙结石，利用超声波的高频震动，将牙齿表面的牙结石，牙渍，菌斑等击碎并冲刷下来以达到清洁牙齿的目的。'
					},
					{
						  url:'https://img9.51tietu.net/pic/2019-091200/ff1vqwm3q33ff1vqwm3q33.jpg',
					      title:'超声波洗牙（豪华套餐）',
						  price:'49.00',
						  desc:'无痛清除牙结石，利用超声波的高频震动，将牙齿表面的牙结石，牙渍，菌斑等击碎并冲刷下来以达到清洁牙齿的目的。'
					}
				],
				goodsDetailList:[
					{
						title:'产地',
						fieldss:'韩国首尔'
					},
					{
						title:'产地',
						fieldss:'韩国首尔'
					},
					{
						title:'产地',
						fieldss:'韩国首尔'
					}
				],
				// 图文 ,商品细节的展现,切换
				tuwordFlag:true,
				goodsFlag:false,
				collectFlag:false,
				// 商品的加减
				goodNum:1,
				// 购物车的蒙面层
				joinCartBoxflag:false,
				// 加入购物车成功提示
				cartSucFlag:false,
				// 添加购物车选择的规格
				choiceSpecificeIndex:0,
				// 购物车 单独购买,发起拼团 1 2 3
				category:0,
				backHeight:""
				
				
			}
		},
		
	    components: {uniSwiperDot},
		onShareAppMessage: function () {
					let _this = this;
					return {
					  title: "莱美牙",
					  // path: "/pages/index/index?" + _this.getShareUrlParams()
					};
		},
		onShareTimeline:function(){
			
		},
		onLoad(options){
		   wx.showShareMenu({
		  		withShareTicket:true,
		  		//设置下方的Menus菜单，才能够让发送给朋友与分享到朋友圈两个按钮可以点击
		  		menus:["shareAppMessage","shareTimeline"]
		  	})
			this.backHeight=((parseInt(this.heights)*2-46)/2+parseInt(this.marginTop))+'rpx';
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
			// 打电话
			makePhone(){
				 uni.makePhoneCall({
				     phoneNumber: '114' //仅为示例
				 });
			},
			 // 预约跳转 1 	  
		    jumps(){
				uni.navigateTo({
				  url:'/pages/shopMall/shopMallCart'
				})
			},
			// 加入购物车
			joinCart(){
				// 加入购物车成功提示
				let that=this;
				// 购物车的整个box 关闭
				that.joinCartBoxflag=false;
				// 用category来判断是那种 
				// 1来自购物车
				if(that.category==1){
					that.cartSucFlag=true;
					setTimeout(()=>{
						that.cartSucFlag=false;
					},2000)
				}else if(that.category==2){
					uni.navigateTo({
						url:'/pages/shopMall/confirm'
					})
				}
				else if(that.category==3){
					uni.navigateTo({
						url:'/pages/shopMall/confirm'
					})
				}
				
			},
			// 购物车添加选择规格
			getChoiceSpec(index){
				this.choiceSpecificeIndex=index
			},
			// 商品数量的加减
			getGoodsNum(style){
				if(style ==1 && this.goodNum>1){
					this.goodNum=this.goodNum-1;
				}
				else if (style ==2){
					this.goodNum=this.goodNum+1;
				}
			}
			
		}
	}
</script>

<style scoped lang="scss">
    @import "../../static/scss/common.scss";
   .uni-searchDetail{
	   position: relative;;
	   left: 0rpx;
	   top:0rpx;
	  .imagesBack{
	  			   display: block;
	  			   width: 46rpx;
	  			   height: 46rpx;
	  			   position: fixed;
	  			   left:30rpx;
	  			   z-index:50;
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

}

.contentBox{
	background-color: #f2f2f2;
	
	.boxFirst{
		width: 750rpx;
		padding: 30rpx;
		box-sizing: border-box;
		background-color: #fff;
		.uni-third{
			width: 660rpx;
			display: flex;
			justify-content: space-between;
			.leftss{
				.tops{
					display:flex;
					.style1{
						width: 140rpx;
						height: 40rpx;
						line-height: 40rpx;
						font-size: 22rpx;
						text-align: center;
						font-family: PingFang SC;
						font-weight: 500;
						color: #FFFFFF;
						margin-bottom: 20rpx;
					}
					.jfbox{
						background-color: #ff980f;
						margin-right:20rpx;
					}
					.yjbox{
						background-color: #ff3366;
					}
				}
				.downs{
					display: flex;
					color: #888888;
					font-size: 22rpx;
					margin-bottom:20rpx;
					.words{
						margin:0rpx 10rpx;
					}
				}
			}
			.rightss{
				color: #FF9A9E;
				font-size: 22rpx;;
				width: 60rpx;
				display: flex;
				flex-direction: column;
				align-items: center;
				.imgs{
					display: block;
					width: 40rpx;
					height: 40rpx;
				}
				.field{}
			}
			
		}
		.uni-second{
			font-size: 34rpx;
			color: #000;
			font-weight: bold;
			font-family: 'PingFang-SC-Bold';
			@include  ellipsis(2);
			margin:20rpx 0rpx;
		}
		.uni-first{
			width: 660rpx;
			display: flex;
			justify-content: space-between;
			align-items: flex-end;
			.uni-left{
				display: flex;
				align-items: flex-end;
				.lefts{
					color: #FF0000;
					font-size: 32rpx;
					margin-right:15rpx;
					.mon{
						font-size: 50rpx;
					}
				}
				.rights{
					color: #888888;
					font-size: 22rpx;
					text-decoration:line-through;
				}
			}
			.uni-right{
				color: #999999;
				font-size: 18rpx;;
			}
		}
	}
	.boxSecond{
		width: 750rpx;
		height: 220rpx;
		background-color: #fff;
		padding:0rpx 30rpx;
		box-sizing: border-box;
		margin-top:20rpx;
		.sFirst{
			height: 70rpx;
			line-height: 70rpx;
			color: #555555;
			font-size: 28rpx;
			margin-bottom: 25rpx;
		}
		.sSecond{
			display: flex;
			justify-content: space-between;
			.sLeft{
				display: flex;
				align-items: center;
				.imgs{
					display: block;
					width: 90rpx;
					height: 90rpx;
					margin-right: 25rpx;
				}
				.field{
					color: #3B3B3B;
					font-size: 26rpx;
				}
			}
			.sRight{
				display: flex;
				align-items: center;
				.leftss{
					color: #3B3B3B;
					font-size: 26rpx;
					margin-right: 23rpx;
					.ups{}
					.downs{}
				}
				.rightss{
					width: 110rpx;
					height: 54rpx;
					background-color: #ff3366;
					text-align: center;
					line-height: 54rpx;
					font-size: 26rpx;
					font-family: PingFang SC;
					font-weight: 500;
					color: #FFFFFF;
				}
			}
		}
		
	}

}
.box-introduce{
	margin:20rpx 0rpx 150rpx;
	.titles{
		width: 750rpx;
		height: 100rpx;
		display: flex;
		padding:0rpx 190rpx;
		box-sizing: border-box;
		align-items: center;
		justify-content: space-between;
		
		.activess{
			color: #FD9EA3;
			font-size: 28rpx;
		}
		.styless{
			width: 120rpx;
			.fiedss{
				color: #B6B6B6;
				font-size: 28rpx;
			}
			.lines{
				width: 50rpx;
				height: 6rpx;
				margin-left:35rpx;
				background: #FF6A6C;
				border-radius: 2rpx;
				margin-top: 10rpx;
			}
		}
	}
	.picBox{
		.bgs{
			display: block;
			 width: 750rpx;
			// height: 1000rpx;
		}
	}
	.goodBox{
		background-color: #fff;
		width: 750rpx;
		padding:30rpx 50rpx;
		box-sizing: border-box;
		.list{
			width: 750rpx;
			height: 90rpx;
			display: flex;
			align-items: center;
			font-size: 28rpx;
			.field{
				color: #B6B6B6;
				width: 180rpx;
			}
			.sss{
				color: #3B3B3B;
			}
			
		}
	}
}
.footer{
	width: 750rpx;
	height: 150rpx;
	position: fixed;
	background-color: #fff;;
	left:0rpx;
	bottom:0rpx;
	z-index: 10;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding:0rpx 30rpx ;
	box-sizing: border-box;
	.uni-left{
		width: 70rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		.imgStart{
			display: block;
			width: 40rpx;
			height: 40rpx;;
		}
		.field{
			margin-top: 15rpx;
			color: #888888;
			font-size: 22rpx;
		}
	}
	.uni-center{
		width: 214rpx;
		height: 90rpx;
		line-height: 90rpx;
		text-align: center;
		background: #FFFFFF;
		border: 2rpx solid #FFB3B6;
		border-radius: 45rpx;
		font-size: 28rpx;
		color: #FFB3B6;
	}
	.uni-right{
		width: 360rpx;
		display: flex;
		.buyBox{
			border-radius: 45rpx 0rpx 0rpx 45rpx;
			background-color: #FF9A9E;
		}
		.makeGroupBox{
            background-color: #FF666C;
			border-radius: 0rpx 45rpx  45rpx 0rpx;
		}
		.styless2{
			width: 190rpx;
			height: 90rpx;
			text-align: center;
		    display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			color: #fff;
			.upss{
				font-size: 28rpx;
			}
			.downss{
				font-size: 24rpx;;
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
	top:58%;
}
.joincartBox{
	position:fixed;
	left:0rpx;
	bottom: 0rpx;
	background-color: #fff;
	z-index: 60;
	width: 750rpx;
	height: 800rpx;
	padding:50rpx 30rpx;
	box-sizing: border-box;
	.first{
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		.uni-left{
			display: flex;
			.imgs{
				display: block;
				width: 240rpx;
				height: 240rpx;
				margin-right:20rpx;
			}
			.goodBox{
				width: 200rpx;
				height: 240rpx;
				display: flex;
				flex-direction: column;
				justify-content: flex-end;
				.priBox{
					display: flex;
					color: #FF0000;
					font-size: 32rpx;
					align-items: center;
					.lefts{}
					.rights{
						margin-left: 15rpx;;
						font-size: 24rpx;;
					}
					.mon{
						font-size: 42rpx;;
					}
				}
				.norms{
					color: #B6B6B6;
					font-size: 28rpx;
					margin-top:29rpx;
				}
			}
		}
		.uni-right{
			width: 50rpx;
			height: 50rpx;
			.cancel{
				display: block;
				width: 30rpx;
				height: 30rpx;
				margin:10rpx;
			}
		}
	}
	.second{
		margin-top:50rpx;
		
		.field{
			color: #525252;
			font-size: 28rpx;;
			
		}
		.listBOx{
			width: 690rpx;
			display: flex;
			.lists{
				background: #FFFFFF;
				border: 2rpx solid #B6B6B6;
				color: #B6B6B6;
				
			}
			.stylesm{
				width: 150rpx;
				text-align: center;
				height: 60rpx;
				line-height: 60rpx;
				border-radius: 30rpx;
				font-size: 28rpx;
				margin: 20rpx 20rpx 0rpx 0rpx;
			}
			.active{
                color: #FF666C;
				background-color: #FFE2E3;
				border: 2rpx solid #FF666C;
				
			}
		}
	}
	.third{
		width: 690rpx;
		display: flex;
		justify-content: space-between;
		margin-top:30rpx;
		.field{
			color: #525252;
			font-size: 28rpx;
		}
		 @extend  %inputjj;
	}
	.fourth{
		width: 690rpx;
		height: 90rpx;
		text-align: center;
		line-height: 90rpx;
		background: #FF9A9E;
		border-radius: 45rpx;
        font-size: 28rpx;
		color: #fff;
		position: absolute;
		left:30rpx;
		bottom: 20rpx;
	}
}
%maskBox{
			position: fixed;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			z-index: 10;
			background-color: #000;
			opacity: 0.5;
				
	}
.joincartBoxMask{
	@extend  %maskBox;
}
.cartSuccessBox{
	position: fixed;
	top:450rpx;
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
.teamBox{
	width: 750rpx;
	
	display: flex;
	.uni-left{
		width: 500rpx;
		height: 170rpx;
		background-color: #e96866;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding:20rpx 30rpx;
		box-sizing: border-box;
		.leftBox{
			color: #FFFFFF;
		    margin-right:70rpx;
			.tops{
				font-size: 32rpx;
				.money{
					font-size: 42rpx;
				}
			}
			.downs{
				margin-top:30rpx;
				font-size: 28rpx;
			}
		}
		.rightBox{
			flex:1;
			color: #fff;
			font-size:32rpx;
		}
	}
	.uni-rights{
		width: 250rpx;
		height: 170rpx;
		background-color: #fff;
		padding: 20rpx;
		box-sizing: border-box;
		text-align: center;
		.tops{
			color: #000;
			font-size:28rpx;
		}
		.downs{
			display: flex;
			width: 210rpx;
			margin-top:30rpx;
			justify-content: space-between;
			.lists{
				width: 50rpx;
				height: 50rpx;
				line-height: 50rpx;
				text-align: center;
				background: #EE5845;
				border-radius: 4rpx;
				font-size: 32rpx;
				color: #fff;
				font-weight: bold;
			}
		}
	
	 }
	
}
</style>

