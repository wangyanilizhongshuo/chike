<template>
	<view class="uni-submitOrder" :style="exDialogflag==true || payFlag==true?'position:fixed;':'position:relative'">
		  <view class="uni-listBox" >
			  <view class="uni-lists" v-for="(item,index) in dataList" :key="index">
				  <view class="uni-titles">
					  <view class="uni-left">{{item.store_name}}</view>
					  <!-- <view class="uni-right">1.6km</view> -->
				  </view>
				  <view class="listBox" v-for="(items,indexs) in item.infos" :key="indexs">
					  <image class="leftImg" :src="items.img"></image>
				      <view class="right">
						  <view class="uni-top1">{{items.name}}</view>
						  <view class="uni-top2">¥<text class="money">{{items.price}}</text></view>
					  </view>
				  </view>
				  <timePicker
				  	showType="yearToMinute"
				  	:beginDate=times
				  	endDate="2030-12-31"
				  	beginTime="06:00:00"
				  	endTime="23:59:59"
				  	@btnConfirm="btnConfirm" 
					
				  >
				  <view class="timeBox" @tap="getTime(index)">
					  <view class="field">请选择预约时间</view>
					  <view class="rights">
						  <view class="values">{{item.timeValue}}</view>
						  <image class="arrow"  src="../../static/image/index-arrow-right.png"></image>
					  </view>
				  </view>
				  </timePicker>
				  <view class="ticketBox" @tap.stop="jump(1)">
					  <view class="uni-lefts">
						   <image class="logos" src="../../static/image/index-smallRedLogo.png"></image>
						   <text class="words">服务券</text>
					  </view>
					  <view class="uni-rights">
						  <view class="numss"></view>
						  <image class="logos" src="../../static/image/index-arrow-right.png"></image>
					  </view>
				  </view>
				
			  </view>
		  </view>
		  <view style="width: 750rpx;height: 140rpx;"></view>
		 <view class="footerBox">
		  	<view class="monValBox">
				<view class="ups">实付金额：¥{{yhData.total_price}}</view>
				<!-- 可获得的佣金 -->
				<view class="downs" v-if="yhData.user_type==1 || yhData.user_type==2"> 已优惠:¥{{yhData.youhui_price}}</view>
			</view>
		  	<view class="payBox"  @tap.stop="payFlag=true">结算</view>
		  </view>
		  <!-- //支付的商品 -->
		  <view class="payBox-mask" v-if="payFlag" @tap.stop="payFlag=false"></view>
		  <view class="pay-box" v-if="payFlag">
		  	<view class="title" @tap.stop="payFlag=false">
		  		<text class="field">选择付款方式</text>
		  		<image class="cancel" src="../../static/image/cancel.png"></image>
		  	</view>	
		      <view class="contents">
		  			<view class="moneyBox"> ¥<text class="mon">{{yhData.total_price}}</text></view>
		              <view class="choice-box">
		  				<view class="list" @tap.stop="payWayClick(1)">
		  					<view class="left" >
		  						<image class="imgs" src="../../static/image/money-logo.png"></image>
		  						<text class="field">余额</text>
		  					</view>
		  					<image class="imgss"  v-if="!extraFlag"  src="../../static/image/shopCart-btn.png" ></image>
		  					<image class="imgss" v-if="extraFlag" src="../../static/image/shopCart-btnActive.png" ></image>
		  				</view>
		  				<view class="list" @tap.stop="payWayClick(2)">
		  					<view class="left">
		  						<image class="imgs" src="../../static/image/wechat-logo.png"></image>
		  						<text class="field">微信</text>
		  					</view>
		  					<image class="imgss" v-if="!wxFlag" src="../../static/image/shopCart-btn.png" ></image>
		  					<image class="imgss"  v-if="wxFlag" src="../../static/image/shopCart-btnActive.png" ></image>
		  				</view>
		  				<view class="btnss" @tap.stop="payBtn">确定</view>
		  			</view>      
		  	</view>
		  </view>
		  <!-- 余额支付的盒子 -->
		  <view class="wxPayBoxMask" v-if="exDialogflag" @tap.stop="exDialogClick"></view>
		  <view class="wxPayBox" v-if="exDialogflag">
		  	<view class="titleBox" @tap.stop="exDialogClick">
		  		<image class="cancel" src="../../static/image/cancel.png"></image>
		  	</view>
		  	<view class="PayTitles">{{extraPName}}</view>
		  	<view  class="monVlue">{{yhData.total_price}}</view>
		  	<view class="inputPsd">请输入交易密码</view>
		  	 <view style="margin-left:49rpx;" class="item" @tap='KeyboarOpen'>
		  	      <password-input :numLng='exPassword'></password-input>
		  	 </view>
		  	 <number-keyboard tabBar ref='KeyboarHid' @input='getPsd' psdLength='6'></number-keyboard>
		  </view>
		  <view class="showtips" v-if="tipflag">{{tipMsg}}</view>
	</view>
</template>

<script>
	import timePicker from '@/components/wing-time-selector/wing-time-selector.vue';
	// https://ext.dcloud.net.cn/plugin?id=1770
	import numberKeyboard from '@/components/number-keyboard/number-keyboard.vue'
	import passwordInput from '@/components/password-input/password-input.vue'
	import app from '../../App.vue'
	export default {
		 data () {
			return {
				tipflag:false,
				tipMsg:'',
				// 积分
				// useJFFlag:true,
				timeIndex:0,
				payFlag:false,
				extraFlag:false,
				wxFlag:false,
				// 余额支付,输入密码
				exDialogflag:false,//弹框
				exPassword: "", //输入的内容
				dataList:[],
				extraPName:'', //余额弹框name
				payAllMoney:0,
				payData:'',//支付提交，返回的订单号以及金额的数据
				redId:0,
				yhData:'',
				cu_id:0
				}
		 },
		 onLoad(options){
			 this.setData(options);
			 this.getList();
			 // 有无红包的问题
			 // this.payAllMoney=uni.getStorageSync('payAllMoney');
		 },
		 onShow(){
			// 判读是否用了优惠券
			 // 如果找到了红包id ,就发送请求
			 let that=this;
			 // 红包id  ,
			 that.redId=uni.getStorageSync('serverRedId');
			 let arrays=[
				       {
						  store_id:uni.getStorageSync('store_id'),
					      cu_id:uni.getStorageSync('serverRedId') || 0
					    } 
			        ]
				 that.$http.post('mini/v1/service/cartsettle',{
					 param:JSON.stringify(arrays)
				 },(res)=>{
					 if(res.state==0){
						  that.yhData=res.data;
						  if(uni.getStorageSync('dataList')){
							   that.dataList=uni.getStorageSync('dataList')
						  }else{
							    let  aa=res.data.list;
								 that.cu_id=res.data.cu_id || 0;
								
								  aa.map((res)=>{
									
									for(let i=0;i<=res.infos.length-1;i++){
										res.infos[i].img=app.globalData.imgPrefixUrl+res.infos[i].img;
									}
								  })
								  that.dataList = aa;
						  }
						  that.extraPName=that.dataList[0].store_name;
						 
						
					 }
				 })
				
		 },
		 components:{
		 	timePicker,
			numberKeyboard,
			passwordInput
		 },
		 computed:{
		 		times(){
					let date = new Date();
					let year=date.getFullYear(); //获取完整的年份(4位)
					let month= (date.getMonth()+1).toString().padStart(2,'0'); //获取当前月份(0-11,0代表1月)
					let day=(date.getDate()).toString().padStart(2,'0'); //获取当前日(1-31)
					return  year+'-'+month+'-'+day
				}
		 	},
		 methods:{
			 jump(type){
				 if(type ==1){
					 
					 uni.navigateTo({
					 	url:'/pages/shopCart/ticket?serverShopId='+this.dataList[0].store_id+'&payAllMoney='+this.yhData.total_price+'&cu_id='+this.cu_id
					 })
				 }
			 },
			 // 价格处理的方法
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
			 // 获取时间选择器的index
			getTime(index){
				this.timeIndex=index;
			},
			 // 获取订单信息
			 getList(){
				 let that=this;
				 that.$http.post('mini/v1/service/cartsettle',{},(res)=>{
					 if(res.state==0){
						let  aa=res.data.list;
						that.yhData=res.data;
						 aa.map((res)=>{
							 res.timeValue=''
						 	for(let i=0;i<=res.infos.length-1;i++){
						 		res.infos[i].img=app.globalData.imgPrefixUrl+res.infos[i].img;
						 	}
						 })
						 that.dataList = aa;
						 that.extraPName=that.dataList[0].store_name;
						
					 }
				 })
			 },
			 // 年月日选中
			 btnConfirm(e){
				console.log(e)
			 	e.month=e.month.padStart(2,0);
			 	e.day=e.day.padStart(2,0);
			 	e.hour=e.hour.padStart(2,0);
			 	e.minute=e.minute.padStart(2,0);
			 	let timeValues=e.year+'-'+e.month+'-'+e.day+' '+e.hour+':'+e.minute;
				const item={
					...this.dataList[this.timeIndex],
					timeValue:timeValues
				}
				
				this.$set(this.dataList,this.timeIndex,item)
			    uni.setStorageSync('dataList',this.dataList,)
				// console.log(this.dataList)
			 },
			
			 // 点击余额切换
			 payWayClick(type){
			 	if(type ==1){
			 		this.extraFlag=(!this.extraFlag);
			 	    this.wxFlag=false;
			 	}else if (type ==2){
			 		this.wxFlag=(!this.wxFlag);
			 		this.extraFlag=false;
			 	}
			 },
			 // 选择付款
			 payBtn(){
			 	let that=this;
			 	// 选择支付方式的弹框
			 	
				this.exPassword='';//输入框里面的数据清除
			 	// 微信付款
				// console.log(that.wxFlag)
				// console.log(that.extraFlag)
			 	if(that.wxFlag){
					this.payFlag=false;
					// 选中的小按钮
					that.wxFlag=false;
					// that.wxPay();
					that.sendOrder(1);
			 	}
			 	//余额付款
			 	else if(that.extraFlag){
					this.payFlag=false;
					// 判断是否有密码
					that.$http.post('mini/v1/user/paypasswordcheck',{},(res)=>{
						if(res.state==0){
							// 选中的小按钮
							that.sendOrder(2);
							that.exPassword ='';
							that.extraFlag=false;
							//余额弹框
						}else if (res.state==1){
							uni.showModal({
							    title: '提示',
							    content: '您还没有设置交易密码',
								confirmText:'设置密码',
							    success: function (res) {
							        if (res.confirm) {
							            uni.navigateTo({
							            	url:'/pages/personCenter/mySetting/mySetting'
							            })
							        } else if (res.cancel) {
							            console.log('用户点击取消');
							        }
							    }
							});
						}
					})
	
			 	}
				// 选中之后,传一个订单信息	
			 },
			 // 微信支付
			 wxPay(){
				 let that=this;
				let callback = data => {
					// 发起微信支付
					that.wxPayment({
						result: data,
						success: data => {
				               uni.redirectTo({
				               	url:'/pages/personCenter/myOpinion/opinionSuccess?typesName='+11
				               })	
						},
						fail: data => {
							uni.redirectTo({
								url:'/pages/personCenter/myOpinion/opinionSuccess?typesName='+12
							})
						},
					});
				};
				that.$http.post('mini/v1/payment/servicepay',{
					pay_type:1,
					order_sn:that.payData.order_sn,
					pay_price:that.payData.total_price,
					
				},(res)=>{
					if(res.state==0){
						let aa = res.data;
						 callback(aa);
					}
				})
			 },
			 //余额支付
			 extraPay(){
				// payData
				let that=this;
				console.log(that.payData)
				console.log('that.payDat2')
				that.$http.post('mini/v1/payment/servicepay',{
					pay_type:2,
					order_sn:that.payData.order_sn,
					pay_price:that.payData.total_price,
					pay_password:that.exPassword
				},(res)=>{
					that.exDialogflag=false;
					that.exPassword ='';
					if(res.state==0){
						uni.redirectTo({
							url:'/pages/personCenter/myOpinion/opinionSuccess?typesName='+10
						})
					}else if(res.state==3){
						uni.showModal({
						    title: '提示',
						    content: '支付密码输入错误',
							confirmText:'重新输入',
						    success: function (res) {
						        if (res.confirm) {
									// 重新继续支付
									that.exPassword ='';
									that.exDialogflag=true;
						        } else if (res.cancel) {
						           uni.switchTab({
						           	url:'/pages/shopCart/shopCart'
						           })
						        }
						    }
						});
					}else if(res.state==1){
						console.log('shijianmeiy')
						that.exPassword='';
						that.exDialogflag=false;
						that.tipflag=true ;
						that.tipMsg=res.msg;
						setTimeout(()=>{
								that.tipflag=false
						},3000)
					}
				})
			 },
			 // 余额 支付
			 KeyboarOpen(e) {
			        this.$refs.KeyboarHid.open();
			 },
			 //获取键盘上的密码
			 getPsd(val){
			 	this.exPassword = val;
			 				// 密码输入六位数字的时候,弹窗关闭,可请求接口
				if(this.exPassword.length ==6){
					 this.$refs.KeyboarHid.close();
					 this.extraPay();
					
				}
			 },
			 // 余额盒子关闭
			 exDialogClick(){
			 	 this.exDialogflag=false;
			 	 this.$refs.KeyboarHid.close();
			 },
			 // 选择支付方式后,给一个数据
			 sendOrder(types){
				 let that=this;
				  console.log(11111)
				 let value=[];
				let goFlag= this.dataList.every(res=>{
					console.log(res)
					 value.push({
						store_id: res.store_id,
						service_ids:res.service_ids,
						appo_time:res.timeValue,
						cu_id:that.redId || 0,
						
					 })
					 
					 return res.timeValue!=''
				 })
				
				 // 使用goFlag判断时间是否选择的正确
				if(goFlag){
					that.$http.post('mini/v1/service/createorder',{
						 param:JSON.stringify((value)),
						 order:that.orderCode || 0
					},(res)=>{
						 if(res.state==0){
							 // 提交数据订单返回的数值,以及订单号
							 that.payData=res.data;
							 that.orderCode=res.data.order_sn;
							 uni.removeStorageSync('serverRedId')//红包用完之后需要删除
							 if(types==1){
								 that.wxPay()
							 }else if(types==2){
								 // 余额的弹框弹出
								 that.exDialogflag=true;
							 }
						 }
					})
				}else{
					
						 that.tipflag=true ;
						 that.tipMsg='选择预约时间'
						 setTimeout(()=>{
							   that.tipflag=false
						 },3000)
					
				}
				
			 }
			 
		 }
	}
</script>

<style scoped lang="scss"> 
    @import "../../static/scss/common.scss";
	// @include ellipsis(1);
	.uni-submitOrder{
		background-color: #f2f2f2;
		height: 100vh;
		// position: relative;
		left:0rpx;
		top:0rpx;
		
		.uni-listBox{
			.uni-lists{
				width: 750rpx;
				padding:27rpx 30rpx 37rpx;
				box-sizing: border-box;
				background-color: #fff;
				.uni-titles{
					display: flex;
					justify-content: space-between;
					margin-bottom: 35rpx;
					.uni-left{
						color: #000000;
						font-size: 28rpx;
						font-weight: bold;
					}
					.uni-right{
						color: #555555;
						font-size: 24rpx;;
					}
				}
				.listBox{
					width: 690rpx;
					display: flex;
					margin-bottom: 40rpx;
					.leftImg{
						display: block;
						width: 150rpx;
						height: 150rpx;
						margin-right:40rpx;
						border-radius: 8rpx;
					}
					.right{
						display: flex;
						height: 150rpx;
						flex-direction: column;
						justify-content: space-between;
						.uni-top1{
							color: #000000;
							font-size: 28rpx;
							font-weight: bold;
							@include ellipsis(1);
						}
						.uni-top2{
							color: #FF0000;
							font-size: 24rpx;
							font-weight: bold;
							.money{
								font-size: 32rpx;
							}
						}
					}
					
				}
				
			}
			
		}
	}
.timeBox{
	display: flex;
	height: 98rpx;
	align-items: center;
	justify-content: space-between;
	font-size: 26rpx;
	.field{
		color: #222222;
	}
	.rights{
		display: flex;
		align-items: center;
		.values{
			color: #454545;
			margin-right: 15rpx;
		}
		.arrow{
			display: block;
			width: 30rpx;
			height: 30rpx;
		}
		
	}
	
}
 .footerBox{
		 width: 750rpx;
		 position: fixed;
		 left:0rpx;
		 bottom: 0rpx;
		 display: flex;
		 background-color: #fff;
		 align-items: flex-start;
		 justify-content: center;
		 color: #fff;
		 height: 120rpx;
		 background-color: #f2f2f2;
		 text-align: center;
		 .monValBox{
			 width: 450rpx;
			 height: 90rpx;
			 // line-height: 90rpx;
			 background: #545454;
			 border-radius: 45rpx 0rpx 0rpx 45rpx;
			 display: flex;
			 flex-direction: column;
			 justify-content: center;
			 .downs{
				 color: #D1D1D1;
				 font-size: 22rpx;
			 }
		 }
		 .payBox{
			 width: 240rpx;
			 height: 90rpx;
			 line-height: 90rpx;
			 background: #FF9A9E;
			 border-radius: 0rpx 45rpx 45rpx 0rpx;
		 }
	 }
.ticketBox{
	display: flex;
	height: 98rpx;
	justify-content: space-between;
	align-items: center;
	.uni-lefts{
		display: flex;
		align-items: center;
		.logos{
			display: block;
			width: 40rpx;
			height: 40rpx;
			margin-right: 13rpx;
		}
		.words{
			color: #222222;
			font-size: 26rpx;;
		}
	}
	.uni-rights{
		display: flex;
		align-items: center;
		.numss{
			color: #FF0A0A;
			font-size: 26rpx;
			margin-right:13rpx;
		}
		.logos{
			display: block;
			width: 34rpx;
			height: 34rpx;
		}
		
	}
}
 .payBox-mask{
	 @extend  %maskBox;
  }
  .pay-box{
  	width: 750rpx;
  	height: 530rpx;
  	padding-top:20rpx;
  	position: fixed;
  	left:0rpx;
  	bottom: 0rpx;
  	z-index:20;
  	background-color: #fff;
  	.title{
  		width: 750rpx;
  		height: 80rpx;
  		padding: 0rpx 30rpx;
  		box-sizing: border-box;
  		border-bottom:1rpx solid #f2f2f2;
  		text-align: center;
  		position: relative;
  		left:0rpx;
  		top:0rpx;
  		.field{
  			line-height: 80rpx;
  			color: #222222;
  			font-size: 28rpx;
  			
  		}
  		.cancel{
  			display: block;
  			height: 30rpx;
  			width: 30rpx;
  			position: absolute;
  			right:30rpx;
  			top: 20rpx;;
  		}
  	}
  	.contents{
  		width: 750rpx;
  		padding: 0rpx 30rpx;
  		box-sizing: border-box;
  		text-align: center!important;
  		color: #222;
  		.moneyBox{
  			width: 690rpx;
  			text-align: center;
  			height: 100rpx;
  			line-height: 100rpx;
  			font-size: 40rpx;
  			.mon{
  				font-size: 40rpx;
  			}
  		}
  		.choice-box{
  			.list{
  				width: 690rpx;
  				display: flex;
  				justify-content: space-between;
  				height: 80rpx;
  				align-items: center;
  				.left{
  					display: flex;
  					.imgs{
  						display: block;
  						width: 30rpx;
  						height: 30rpx;
  						margin-right:30rpx;
  					}
  					.field{
  						font-size: 28rpx;
  					}
  				}
  				.imgss{
  					display: block;
  					width: 34rpx;
  					height: 34rpx;
  				}
  			}
  			.btnss{
  				width: 560rpx;
  				height: 76rpx;
  				line-height: 76rpx;
  				text-align: center;
  				color: #fff;
  				border-radius: 30rpx;
  				background-color:#FF9A9E ;
  				position: absolute;
  				left: 95rpx;
  				bottom:20rpx;;
  			}
  		}
  	}
  	
  }
  .wxPayBoxMask{
  	@extend  %maskBox;
  }
  .wxPayBox{
  	width: 560rpx;
  	height: 520rpx;
  	position: absolute;
  	left:95rpx;
  	top:200rpx;
  	z-index:30;
      border-radius: 8rpx;
  	background-color: #fff;
  	text-align: center;
  	.titleBox{
  		width: 560rpx;
  		height: 100rpx;
  		line-height: 100rpx;
  		.cancel{
  			display: block;
  			width: 30rpx;
  			height: 30rpx;
  			position: absolute;
  		    top:35rpx;
  		    right:30rpx;
  		}
  	}
  	.PayTitles{
  		color: #000000;
  		font-size: 30rpx;
  	}
  	.monVlue{
  		width: 560rpx;
  		margin:10rpx 0rpx 30rpx;
  		font-size: 70rpx;;
  	}
  	.inputPsd{
  		margin-bottom: 30rpx;
  	}
  }
  .showtips{
	  width: 350rpx;
	  height: 100rpx;
	  background: #000000;
	  opacity: 0.6;
	  border-radius: 16rpx;
	  position: fixed;
	  left:200rpx;
	  z-index:1000;
	  top:600rpx;
	  color: #FFFFFF;
	  font-size: 28rpx;
	  line-height: 100rpx;
	  text-align: center;
	  
  }
</style>
