<template>
	<view class="uni-extension">
		<image class="uni-bg" src="http://zxyp.hzbixin.cn/files/s_84281611907591690.jpg"></image>
		<view class="uni-title">
			<view class="uni-firstLine">
				<image  class="imgs" src="http://zxyp.hzbixin.cn/files/95881611798332049.jpg"></image>
				<text class="word"> 邀请规则</text>
			</view>
			<view class="uni-secondLine">牙齿健康   幸福人生</view>
			<view class="uni-thirdLine">邀请好友 享收益</view>
		</view>
	    <view class="contentBox">
			<image class="bgCenter" src="http://zxyp.hzbixin.cn/files/5691608258300321.jpg"></image>
		    <view class="conboxs">
				 <view class="inviteBox">邀请码</view>
				 <image class="ewCodeImg" :src="pics"></image>
			     <view class="downBox">
					 <button class="buttons" open-type="share">
						 <image class="wxImg smallImg" src="http://zxyp.hzbixin.cn/files/7981608258434295.jpg"></image>
					 </button>
					    <!-- <image class="pxqImg smallImg" src="http://zxyp.hzbixin.cn/files/11211608258466418.jpg"></image> -->
					    <image @tap.stop="downLoadPic" class="dlImg smallImg" src="http://zxyp.hzbixin.cn/files/74311608258695795.jpg"></image>
				 </view>
			</view>
		</view>
	</view>
</template>
<!--  -->
<script>
	import app from '../../../App.vue'
	export default {
		data() {
			return {
				pics:''
			}
		},
		onLoad(){
			this.getCode()
		},
		onShareAppMessage: function (res) {
		    let _this = this;
			
			 if (res.from === 'button'   ) {// 来自页面内分享按钮
			     return {
			       title: "莱美牙",
			       path: "/pages/index/index?" + _this.getShareUrlParams()
			     }
			    }
			else if(res.from ==='menu'){
				return {
				  title: "莱美牙",
				  path: "/pages/index/index?" + _this.getShareUrlParams()
				 };
			} 
		},
		methods: {
			getCode(){
				this.$http.post('mini/v1/user/myqrcode',{
					
				},(res)=>{
					if(res.state==0){
						this.pics=app.globalData.imgPrefixUrl+res.data.qrcode;
						console.log(this.pics)
					}
				})
			},
			downLoadPic(){
				 uni.downloadFile({  
				            //https://dss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo_top-e3b63a0b1b.png  
				             url: this.pics,
				             success: (res) => {  
				                    var tempFilePath = res.tempFilePath; // 这里拿到后端返回的图片路径
									uni.saveImageToPhotosAlbum({  // 然后调用这个方法
										filePath: tempFilePath,
										success : (res) => {
											uni.hideLoading();
											uni.showToast({title : '图片已保存'})
										}
									})
				             }  
				         });
			}
		}
	}
</script>

<style scoped lang="scss">
	.uni-extension{
		position: relative;
		left:0rpx;
		top:0rpx;
		
		.uni-bg{
			display: block;
			width: 750rpx;
			height: 100vh;
			// height: 1198rpx;
		}
		.contentBox{
			width: 750rpx;
			height: 100vh;
			position: absolute;
			left:0rpx;
			top:0rpx;
			z-index: 10;
			.bgBottom{
				width: 550rpx;
				height: 433rpx;
				position: absolute;
				left:100rpx;
				bottom: 0rpx;;
			}
			.bgCenter{
				display: block;
				width: 482rpx;
				height: 585rpx;
				position: absolute;
				left:68px;
				top:254rpx;
			}
			.conboxs{
				display: block;
				width: 482rpx;
				height: 585rpx;
				position: absolute;
				left:68px;
				top:274rpx;
				z-index:20;
				// background-color: red;;
				.ewCodeImg{
					display: block;
					width: 356rpx;
					height: 360rpx;
					margin-left:63rpx ;
				}
				.downBox{
					display: flex;
					height: 110rpx;
					width: 482rpx;
					align-items: center;
					justify-content: space-around;
				}
				.smallImg{
					display: block;
					width: 62rpx;
					height: 62rpx;
				}
			}
		}
	}
   .inviteBox{
	   height: 70rpx;
	   line-height: 70rpx;
	   width:482rpx ;
	   text-align: center;
	   color: #333333;
	   font-size: 30rpx;
   }
   .uni-title{
	   width: 750rpx;
	   padding:30rpx 30rpx 0rpx;
	   box-sizing: border-box;
	   position: absolute;
	   left:0rpx;
	   top:0rpx;
	   z-index: 10;;
	   .uni-firstLine{
		   display: flex;
		   justify-content: flex-end;
		   height: 30rpx;
		   align-items: center;
		   .imgs{
			   display: block;
			   width: 30rpx;
			   height: 30rpx;
		   }
		   .word{
			   margin-left:15rpx;
			   font-size: 26rpx;
			   color: #FFFFFF;
		   }
	   }
	   .uni-secondLine{
		   color: #FFFFFF;
		   font-size: 24rpx;
		   margin-bottom: 20rpx;
	   }
	   .uni-thirdLine{
		   font-size: 56rpx;
		   color: #2C62A2;
	   }
	   
   }
   button::after {
   	  border: none;
   	}
	.buttons{
		padding:0rpx;
		margin: 0rpx;
	}
</style>
