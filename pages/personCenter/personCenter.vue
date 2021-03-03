<template>
	<view  class="uni-person">
		<image class="uni-bg-top" src="http://zxyp.hzbixin.cn/files/53881608267891322.jpg"></image>
		<view class="uni-content">
			<view class="uni-head" >
				<view class="perMsg">
					<image class="imgs"  @tap.stop="jumps(1)" v-if="personData.avatar" :src="personData.avatar"></image>
					<image class="imgs" @tap.stop="goLogin" v-if="!personData.avatar" src="http://zxyp.hzbixin.cn/files/29221611907772249.jpg"></image>
				    <view  class="mgs"   @tap.stop="jumps(1)" v-if="personData.uid">
						<view class="top">{{personData.nickname}}</view>
						<view class="center">
							<image class="imgsSf" v-if="personData.user_type==2" src="http://zxyp.hzbixin.cn/files/19901611908043331.jpg"></image>
						    <image class="imgsSf" v-if="personData.user_type==1" src="http://zxyp.hzbixin.cn/files/55891611907996973.jpg"></image>
						</view>
						<view class="down" >用户ID：{{personData.uid }}</view>
						<view class="down"  v-if="!personData.uid">去登录</view>
					</view>
					<view  class="mgs" @tap.stop="goLogin" style="line-height: 150rpx;"  v-if="!personData.uid">
					
						<view class="down"  >去登录</view>
					</view>
				</view>
				<view class="person-detail">
					 <view class="first-1 style-detail" @tap.stop="jumpTop(1)">
						 <view class="values">{{personData.now_money || 0.00}}</view>
						 <view class="field">我的余额</view>
					 </view>
					 <view v-if="personData.user_type!=0" class="first-2 style-detail" @tap.stop="jumpTop(2)">
						 <view class="values">{{personData.brokerage_price ||0.00}}</view>
						 <view class="field">我的佣金</view>
					 </view>
					 <view class="first-3 style-detail" @tap.stop="jumpTop(3)">
						 <view class="values">{{personData.service_coupon_num || 0}}</view>
						 <view class="field">服务券</view>
					 </view>
					 <view class="first-4 style-detail" @tap.stop="jumpTop(4)">
						 <view class="values">{{personData.integral || 0}}</view>
						 <view class="field">我的积分</view>
					 </view>
				</view>
			</view>
			<view class="uni-center" >
				    <view  class="titlexBox"   @tap.stop="jumpOrder(0)">
						<view  class="uni-order">我的订单</view>
						<view  class="lookAll">查看全部</view>
					</view>
				    <view class="center-first"  >
						   <view  class="list" @tap.stop="jumpOrder(1)" >
							   <image class="imgs" src="../../static/image/person-good-status-1.png"></image>
							   <view class="fields">待付款</view>
						   </view>
						   <view  class="list" @tap.stop="jumpOrder(2)">
							   <image class="imgs" src="../../static/image/person-good-status-2.png"></image>
							   <view class="fields">待发货</view>
						   </view>
						   <view  class="list" @tap.stop="jumpOrder(3)">
							   <image class="imgs" src="../../static/image/person-good-status-3.png"></image>
							   <view class="fields">待收货</view>
						   </view>
						   <view  class="list" @tap.stop="jumps(3)">
							   <image class="imgs" src="../../static/image/person-good-status-4.png"></image>
							   <view class="fields">售后</view>
						   </view>
	            	</view>
				    <view class="center-second1"  >
						  <view  class="list"  @tap.stop="jumps(4)">
							  <image class="imgs" src="../../static/image/person-center2-1.png"></image>
							  <view class="fields">我的拼团</view>
						  </view>
						  <view   class="list" @tap.stop="jumps(5)">
							  <image class="imgs" src="../../static/image/person-center2-2.png"></image>
							  <view class="fields">服务订单</view>
						  </view>
						  <view  class="list" @tap.stop="jumps(6)">
								  <image class="imgs" src="../../static/image/person-center2-3.png"></image>
								  <view class="fields">我的收藏</view>
						  </view>
						<view v-if="personData.user_type!=0" class="list" @tap.stop="jumps(7)">
								  <image class="imgs" src="../../static/image/person-center2-4.png"></image>
								  <view class="fields">我的团队</view>
						  </view>
						<!--  <view class="list" @tap.stop="jumps(8)">
								  <image class="imgs" src="../../static/image/person-center2-5.png"></image>
								  <view class="fields">店铺入驻</view>
						  </view> -->
						  <view class="list" @tap.stop="jumps(9)">
								  <image class="imgs" src="../../static/image/person-center2-6.png"></image>
								  <view class="fields">我的消息</view>
						  </view>
						  <view class="list" @tap.stop="jumps(10)">
								  <image class="imgs" src="../../static/image/person-center2-7.png"></image>
								  <view class="fields">我的推广</view>
						  </view>
						  <view class="list" @tap.stop="jumps(11)">
								  <image class="imgs" src="../../static/image/person-center2-8.png"></image>
								  <view class="fields">设置</view>
						  </view> 
				    </view>
					<view class="center-third">
				 
				  	<view class="list">
						 <button plain="true"  style="border:none;border-radius: 0rpx;padding:0rpx;" hover-class="none"   sessionFrom="weapp"  open-type="contact">
				   		    <image style="display: block;width: 60rpx;height: 60rpx;margin-bottom: 10rpx;" src="../../static/image/person-center3-1.png"></image>
						  </button>
				   		  <view class="fields">客服系统</view>
				   	  </view>
					
				   	  <!-- <view class="list"  @tap.stop="jumps(13)"> -->
					  <view class="list"  @tap.stop="getImage()">
				   		  <image class="imgs" src="../../static/image/person-center3-2.png"></image>
				   		  <view class="fields">使用指南</view>
				   	  </view>
					  <view class="list" @tap.stop="jumps(14)">
						  <image class="imgs" src="../../static/image/person-center3-3.png"></image>
						  <view class="fields">意见反馈</view>
					  </view>
				   </view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				personData:'',
				
				
			}
		},
		onLoad(){
			// this.getPersonMsg();
		},
		
		onShow(){
			// uni.showToast({
			// 	title:'进去',
			// 	duration:3000
			// })
			this.getPersonMsg();
		},
		onShareAppMessage: function () {
		    let _this = this;
		    return {
		      title: "莱美牙",
		      path: "/pages/index/index?" + _this.getShareUrlParams()
		    };
		},
		methods: {
			// 去登录
			goLogin(){
				uni.navigateTo({
					url:'/pages/index/login'
				})
			},
			// 获取个人信息
			getPersonMsg(){
				this.$http.post('mini/v1/user/info',{},(res)=>{
					  if(res.state==0){
						  
						  this.personData=res.data;
						  // 保存一下用户类型:代言人,普通用户uid
						  uni.setStorageSync('userType',res.data.user_type)
						  uni.setStorageSync('userId',res.data.uid)
						  uni.setStorageSync('phone',res.data.phone)
					  }
				})
			},
			jumpTop(types){
				 if (types ==1){
					uni.navigateTo({
						url:'/pages/personCenter/myBalance/myBalance?now_money='+this.personData.now_money
					})
				}else if(types==2){
					uni.navigateTo({
						url:'/pages/personCenter/myCommission/myCommission?brokerage_price='+this.personData.brokerage_price+'&now_money='+this.personData.now_money
					})
				}else if(types==3){
					uni.navigateTo({
						url:'/pages/shopCart/ticket'
					})
				}
				else if(types==4){
					uni.navigateTo({
						url:'/pages/personCenter/myInteGral/myInteGral?jifen='+this.personData.integral+'&willjf='+this.personData.integral_active
					})
				}
			},
			jumpOrder(type){
					uni.navigateTo({
						url:'/pages/personCenter/myOrder/myOrder?titleActiveIndex='+type+'&types='+type
				})
			},
			jumps(type){
				// 1:个人中心
				if(type ==1){
					uni.navigateTo({
						url:'/pages/personCenter/personData'
					})
				}else if(type ==3){
					uni.navigateTo({
						url:'/pages/personCenter/myOrder/afterSales'
					})
				}else if (type ==4){
					uni.navigateTo({
						url:'/pages/personCenter/myGroup/myGroup'
					})
				}else if (type ==5){
					uni.navigateTo({
						url:'/pages/personCenter/myServerOrder/myServerOrder'
					})
				}
				else if (type ==6){
					uni.navigateTo({
						url:'/pages/personCenter/myCollect/myCollect'
					})
				}else if (type ==7){
					uni.navigateTo({
						url:'/pages/personCenter/myTeam/myTeam'
					})
				}
				else if (type ==8){
					uni.navigateTo({
						url:'/pages/personCenter/myShopSettlement/myShopSettlement'
					})
				}else if (type ==9){
					uni.navigateTo({
						url:'/pages/personCenter/myMsg/myMsg'
					})
				}
				else if (type ==10){
					uni.navigateTo({
						url:'/pages/personCenter/myExtension/myExtension'
					})
				}else if (type ==11){
					uni.navigateTo({
						url:'/pages/personCenter/mySetting/mySetting?phone='+this.personData.phone
					})
				}
				else if (type ==12){
					uni.navigateTo({
						url:'/pages/personCenter/myCustomerServer/myCustomerServer'
					})
				}
				else if (type ==13){
					uni.navigateTo({
						url:'/pages/personCenter/myGuide/myGuide'
					})
				}
				else if (type ==14){
					uni.navigateTo({
						url:'/pages/personCenter/myOpinion/myOpinion'
					})
				}
				
				
			},
			
			getImage(){
				
				let _that = this;
				uni.chooseImage({
					count: 1, //上传图片的数量，默认是9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album', 'camera'], //从相册选择
					success: function(res) {
						const tempFilePaths = res.tempFilePaths; //拿到选择的图片，是一个数组
						tempFilePaths.map(sos => {
							uni.uploadFile({
								url: 'http://zxyptest.hzbixin.cn/file/upload',
								filePath: sos,
								name: 'file',
								success: function(datas) {
									let results = typeof datas.data === "object" ? datas.data : JSON.parse(datas.data);
									let aa = results.result;
								},
								fail: function(datas) {}
							})
						})
					}
				});
				
				
			}
		}
	}
</script>

<style scoped lang="scss">
	// var(--status-bar-height)
	%lists{
			  width: 690rpx;
			  background: #FFFFFF;
			  border-radius: 8rpx;
			  margin:0rpx 30rpx;
			  // padding:0 30rpx;
			  box-sizing: border-box;
			  display: flex;
			 
			  align-items: center;
			  .list{
				  width: 25%;
				  height: 105rpx;
				  display: flex;
				  flex-direction: column;
				  justify-content: center;
				  align-items: center;
				  .imgs{
					  display:block ;
					  width: 60rpx;
					  height: 60rpx;
					  margin-bottom: 10rpx;
				  }
				  .fields{
					  font-size: 26rpx;
					  color: #3B3B3B;
				  }
			  }
				
	}
	
  .uni-person{
	  position: relative;
	  left:0rpx;
	  top:0rpx;
	  height: 100vh;
	 
	  background-color: #f2f2f2;
	  .uni-bg-top{
		  display: block;
		  width: 260rpx;
		  height: 210rpx;
		  position: absolute;
		  top:0rpx;
		  right:0rpx;
	  }
	  .uni-content{
		   background-color: #fff;
		  .uni-head{
			  padding-top: var(--status-bar-height);
			  border-top:80rpx solid #fff ;
			  .perMsg{
				  width: 750rpx;
				  padding: 0rpx 30rpx;
				  box-sizing: border-box;
				  display: flex;
				
				  .imgs{
					   width: 150rpx;
					   height: 150rpx;
					   display: block;
					   margin-right: 34rpx;
					   border-radius: 8rpx;
				  }
				  .mgs{
					    height: 150rpx;
						display: flex;
						flex-direction: column;
						justify-content: space-between;
					  .top{
						  font-family: 'PingFang-SC-Bold';
						  font-weight: bold;
						  color: #222222;
						  font-size: 30rpx;
						  margin:0rpx 0rpx 0rpx 0rpx;
					  }
					  .center{
						  display: flex;
						
						  .imgsSf{
							  display: block;
							  width: 132rpx;
							  height: 42rpx;
							  margin-right: 34rpx;
						  };
					  }
					  .down{
						  color: #555555;
						  font-size: 26rpx;
					  }
				  }
			  }
			  .person-detail{
				  width: 690rpx;
				  height: 70rpx;
				  display: flex;
				  box-sizing: border-box;
				  justify-content: space-between;
				  margin:60rpx 30rpx 30rpx 30rpx;
				  .style-detail{
					 
					  text-align: center;
					  .values{
						  color: #222222;
						  font-size: 32rpx;
						  font-weight: bold;
						  font-family: 'PingFang-SC-Bold';
					  }
					  .field{
						  font-size: 26rpx;
						  color: #555555;
						  margin-top: 10rpx;
					  }
					  
				  }
			  }
			  
		  }
		  .uni-center{
			  background-color: #f2f2f2;
			   // height: 900rpx;
			   .titlexBox{
				   border-top:20rpx solid #f2f2f2 ;
				   @extend  %lists;
				   font-size: 26rpx;
				   color: #3B3B3B;
				   padding:30rpx 30rpx 0rpx;
				   justify-content: space-between;
			   }
			  .center-first{
				  @extend  %lists;
				  height:172rpx;
				  justify-content: space-between;
			  }
			  .center-second1{
				   @extend  %lists;
				   flex-wrap: wrap;
				   margin-top:20rpx;
				   padding-top:40rpx;
				  .list{
					  margin-bottom:60rpx;
				  }
			  }
			 
			  .center-third{
				  @extend  %lists;
				  margin-top:20rpx;
				  padding-top:40rpx;
				  .list{
					  margin-bottom:40rpx;
				  }
				  
			  }
			 
		  }  
	  }
	  
  }
button::after{
		border: none;
		margin: 0rpx;
		padding:0rpx;
	}
</style>
