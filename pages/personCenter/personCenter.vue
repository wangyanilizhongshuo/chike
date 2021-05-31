<template>
	<view  class="uni-person">
		<image class="uni-bg-top" src="https://chikehometest.hzbixin.cn/upload/images/feedback/20210428/341f48a8c3fb9e1e54c01f59cbc4918c.png"></image>
		<view class="uni-content">
			<view class="uni-head" >
				<view class="perMsg">
					<image class="imgs"  @tap.stop="jumps(1)" v-if="personData.avatar" :src="personData.avatar"></image>
					<image class="imgs" @tap.stop="goLogin" v-if="!personData.avatar" src="https://thirdwx.qlogo.cn/mmopen/vi_32/POgEwh4mIHO4nibH0KlMECNjjGxQUq24ZEaGT4poC6icRiccVGKSyXwibcPq4BWmiaIGuG1icwxaQX6grC9VemZoJ8rg/132"></image>
				    <view  class="mgs"   @tap.stop="jumps(1)" v-if="personData.uid">
						<view class="top">{{personData.nickname}}</view>
						<view class="center">
							<image class="imgsSf" v-if="personData.user_type==1" src="https://chikehometest.hzbixin.cn/upload/images/feedback/20210428/9425d69373db1e5c00a714ccff70bd93.png"></image>
						  <image class="imgsSf" v-if="personData.user_type==2" src="https://chikehometest.hzbixin.cn/upload/images/feedback/20210428/acc429c576543619130b7aad79daa24a.png"></image>
						</view>
						<view class="down">用户ID：{{personData.uid }}</view>
						<view class="down"  v-if="!personData.uid">去登录</view>
					</view>
					<view  class="mgs" @tap.stop="goLogin" style="line-height: 150rpx;"  v-if="!personData.uid">
						<view class="down"  >去登录</view>
					</view>
				</view>
				<view class="person-detail"  v-if="personData.user_type!=0">
					<view class="first-1 style-detail" @tap.stop="jumpTop(0)">
						 <view class="values" >{{personData.total_day || 0.00}}</view>
						 <view class="field">今日收入</view>
					 </view>
					 <view  class="first-2 style-detail" @tap.stop="jumpTop(1)">
						 <view class="values"> {{personData.month || 0}}</view>
						 <view class="field">本月收入</view>
					 </view>
					 <view class="first-3 style-detail" @tap.stop="jumpTop(2)">
						 <view class="values">{{personData.total_money || 0}}</view>
						 <view class="field">累计收入</view>
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
							   <view class="logoBox">
							  	  <image class="imgs" src="../../static/image/person-good-status-1.png"></image> 
							      <view class="dots" v-if="personData.daifukuan>0"></view>
							   </view>
							   <view class="fields">待付款</view>
							   <!-- <view class="dots"></view> -->
						   </view>
						   <view  class="list" @tap.stop="jumpOrder(2)">
							   <view class="logoBox">
								   <image class="imgs" src="../../static/image/person-good-status-2.png"></image>
							      <view class="dots" v-if="personData.daifahuo>0"></view>
							   </view>
							   <view class="fields">待发货</view>
						   </view>
						   <view  class="list" @tap.stop="jumpOrder(3)">
							   <view class="logoBox">
								   <image class="imgs" src="../../static/image/person-good-status-3.png"></image>
							      <view class="dots" v-if="personData.daishouhuo>0"></view>
							   </view>
							   <view class="fields">待收货</view>
						   </view>
						   <view  class="list" @tap.stop="jumps(3)">
							   <view class="logoBox">
								   <image class="imgs" src="../../static/image/person-good-status-4.png"></image>
							      <view class="dots" v-if="personData.shouhou>0"></view>
							   </view>
							   <view class="fields">售后</view>
						   </view>
	            	</view>
				    <view class="center-second1"  >
						<view  class="list"  @tap.stop="jumps(15)">
							  <image class="imgs" src="../../static/image/person-center2-9.png"></image>
							  <view class="fields">我的资产</view>
						</view>
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
				   		    <image style="display: block;width: 60rpx;height: 60rpx;margin-bottom: 10rpx;" src="https://chikehometest.hzbixin.cn/upload/images/feedback/20210329/8bb575f939fc0bbfc1ed42a5ce8466a4.png"></image>
						  </button>
				   		  <view class="fields">客服系统</view>
				   	  </view>
					
				   	  <view class="list"  @tap.stop="jumps(13)">
					 
				   		  <image class="imgs" src="../../static/image/person-center3-2.png"></image>
				   		  <view class="fields">使用指南</view>
				   	  </view>
					  <view class="list" @tap.stop="jumps(14)">
						  <image class="imgs" src="https://chikehometest.hzbixin.cn/upload/images/feedback/20210329/9419c177c286c2fee0cba1e6d627c16d.png"></image>
						  <view class="fields">意见反馈</view>
					  </view>
					  <view class="list" @tap.stop="jumps(16)">
						  <image class="imgs" src="https://chikehometest.hzbixin.cn/upload/images/feedback/20210329/fa7d760d2637e1019b982a89b269c7ce.png"></image>
						  <view class="fields">关于我们</view>
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
			
			this.getPersonMsg();
			//判断登录后，跳转到原本存在的详情页面 拼团发布过来的
			if(uni.getStorageSync('token')){
				 if(uni.getStorageSync('ptGoodId')){
					 let ids=uni.getStorageSync('ptGoodId')
				        uni.navigateTo({
				 	         url:'/pages/shopMall/ptlist-detail?goodsId='+ids
				       })
				 }
				 
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
			// 去登录
			goLogin(){
				uni.navigateTo({
					url:'/pages/index/login'
				})
			},
			// 获取个人信息
			getPersonMsg(){
				let that =this;
				that.$http.post('mini/v1/user/info',{},(res)=>{
					  if(res.state==0){
						  that.personData=res.data;
						  // 保存一下用户类型:代言人,普通用户uid
						  uni.setStorageSync('userType',res.data.user_type);
						  uni.setStorageSync('userId',res.data.uid);
						  uni.setStorageSync('phone',res.data.phone);
						   that.personData.total_day=(parseInt(that.personData.total_day).toString().length>5)?(that.personData.total_day=(that.personData.total_day/10000).toFixed(2)+'万元'):( that.personData.total_day=that.personData.total_day+'元')
						   that.personData.month=(parseInt(that.personData.month).toString().length>5)?(that.personData.month=(that.personData.month/10000).toFixed(2)+'万元'):( that.personData.month=that.personData.month+'元')
						   that.personData.total_money=(parseInt(that.personData.total_money).toString().length>5)?(that.personData.total_money=(that.personData.total_money/10000).toFixed(2)+'万元'):( that.personData.total_money=that.personData.total_money+'元')
    
					  }
				})
			},
			keepTwoDecimalFull(num) {
						  var result = parseFloat(num);
						  if (isNaN(result)) {
						    return false;
						  }
						  result = Math.round(num * 100) / 100;
						  var s_x = result.toString(); //将数字转换为字符串
						 
						  var pos_decimal = s_x.indexOf('.'); //小数点的索引值
						
						  // 当整数时，pos_decimal=-1 自动补0
						  if (pos_decimal < 0) {
						    pos_decimal = s_x.length;
						    s_x += '.';
						  }
					
						  // 当数字的长度< 小数点索引+2时，补0
						  while (s_x.length <= pos_decimal + 2) {
						    s_x += '0';
						  }
						  this.yhData.total_price=s_x;
						 
						},
			jumpTop(types){
				 uni.navigateTo({
				 	url:'/pages/personCenter/myIncome/myIncome?status='+types
				 })
			},
			// getTopData(){
			// 	let that=this;
			// 	that.$http.post('/mini/v1/user/earnMoney',{},(res)=>{
			// 		if(res.state==0){
						
			// 		}
			// 	})
			// },
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
				else if (type ==15){
					uni.navigateTo({
						url:'/pages/personCenter/myAssets/myAssets?now_money='+this.personData.now_money+'&brokerage_price='+this.personData.brokerage_price+'&service_coupon_num='+this.personData.service_coupon_num+'&integral='+this.personData.integral+'&userType='+this.personData.user_type
					})
				}else if(type ==16){
					uni.navigateTo({
						url:'/pages/personCenter/mySetting/aboutUs'
					})
				}
			},
			
			
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
				  width: 630rpx;
				  height: 70rpx;
				  display: flex;
				  box-sizing: border-box;
				  justify-content: space-between;
				  margin:60rpx 60rpx 30rpx;
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
				  .logoBox{
					  position: relative;
					  left: 0rpx;
					  top:0rpx;
					  .dots{
						  position: absolute;
						  right:-5rpx;
						  top:-5rpx;
						  width: 20rpx;
						  height: 20rpx;
						  border-radius: 50%;
						  background-color:#ff3030 ;
						  
					  }
				  }
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
