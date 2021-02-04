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
				             url: 'https://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=%E7%8E%8B%E4%B8%80%E5%8D%9A%E5%9B%BE%E7%89%87&hs=2&pn=0&spn=0&di=170980&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&ie=utf-8&oe=utf-8&cl=2&lm=-1&cs=2628330876%2C3804218267&os=2243715513%2C3276544433&simid=0%2C0&adpicid=0&lpn=0&ln=30&fr=ala&fm=&sme=&cg=&bdtype=11&oriquery=%E7%8E%8B%E4%B8%80%E5%8D%9A%E5%9B%BE%E7%89%87&objurl=https%3A%2F%2Fgimg2.baidu.com%2Fimage_search%2Fsrc%3Dhttp%3A%2F%2Finews.gtimg.com%2Fnewsapp_bt%2F0%2F13114630740%2F641%26refer%3Dhttp%3A%2F%2Finews.gtimg.com%26app%3D2002%26size%3Df9999%2C10000%26q%3Da80%26n%3D0%26g%3D0n%26fmt%3Djpeg%3Fsec%3D1614751183%26t%3D8bc825e411c0a126c073caea32ee9c7b&fromurl=ippr_z2C%24qAzdH3FAzdH3Fxo_z%26e3Bqq_z%26e3Bv54AzdH3Frw6pgj6AzdH3FfxfAzdH3Fdad8a8n8Aalm8cAzdH3Fdad8a8n8Aalm8caa%3FADTAG%3Dfxf%26r2e_6ju%3Dfxf&gsm=1&islist=&querylist=',   
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
