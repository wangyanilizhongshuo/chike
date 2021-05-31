<template>
	<view class="uni-serverDetail"  @tap.stop="payFlag=false">
		<view class="allBox style1" >
			<view class="listBox">
				<view class="list" >
					<view class="uni-title">
						<view class="uni-left">{{dataList.store_name}}</view>
					</view>
					<view class="uni-center" v-for="(item,index) in dataList.service_info" :key="index">
						<image class="lefts" :src="item.img"></image>
					    <view class="right">
							<view class="first">{{item.name}}</view>
							<view class="second">预约时间  {{dataList.appointment}}</view>
							
							<view class="third">¥<text class="money">{{item.price}}</text></view>
						</view>
					</view>
				</view>
				<view class="ermBox" v-if="sType!=1">
					<view class="valuesCodes2">{{dataList.verify_code}}</view>
					<view class="field2">核销码</view>
				</view>
				<view class="listBoxss">
					<view class="lists">
						<view class="fields">订单编号</view>
					    <view class="values">{{dataList.order_sn}}</view>
					</view>
					<view class="lists">
						<view class="fields">付款时间</view>
					    <view class="values">{{dataList.pay_time}}</view>
					</view>
					<view class="lists" v-if="sType!=1">
						<view class="fields">支付方式</view>
					    <view class="activeRed" v-if="dataList.pay_type==1">微信支付</view>
						<view class="activeRed" v-if="dataList.pay_type==2">余额支付</view>
					</view>
					<view class="lists">
						<view class="fields">服务券</view>
					    <view class="activeReds">-¥{{dataList.coupon_dk_price}}</view>
					</view>
				</view>
				<view  class="footer">
					<!-- <button class="firsts stylesss" open-type="contact">联系客服</button> -->
					<!-- <view ></view> -->
					<!-- <timePicker
						showType="yearToMinute"
						:beginDate=times
						endDate="2030-12-31"
						beginTime="06:00:00"
						endTime="23:59:59"
						@btnConfirm="btnConfirm" 						
					>	
					   <view class="seconds stylesss" >修改预约</view>
					</timePicker> --> 
					<text class="field stylesss" v-if="sType==1" @tap.stop="payFlag=true">去支付</text>
				</view>
			</view>
		</view>
		
		<!-- 付款方式的选择 -->
        
        <!-- //支付的商品 -->
        <view class="payBox-mask" v-if="payFlag" @tap.stop="payFlag=false"></view>
        <view class="pay-box" v-if="payFlag">
        	<view class="title" @tap.stop="payFlag=false">
        		<text class="field">选择付款方式</text>
        		<image class="cancel" src="../../../static/image/cancel.png"></image>
        	</view>	
            <view class="contents">
        			<view class="moneyBox"> ¥<text class="mon">{{dataList.cancel_price}}</text></view>
                    <view class="choice-box">
        				<view class="list" @tap.stop="payWayClick(1)">
        					<view class="left" >
        						<image class="imgs" src="../../../static/image/money-logo.png"></image>
        						<text class="field">余额</text>
        					</view>
        					<image class="imgss"  v-if="!extraFlag"  src="../.././../static/image/shopCart-btn.png" ></image>
        					<image class="imgss" v-if="extraFlag" src="../../../static/image/shopCart-btnActive.png" ></image>
        				</view>
        				<view class="list" @tap.stop="payWayClick(2)">
        					<view class="left">
        						<image class="imgs" src="../../../static/image/wechat-logo.png"></image>
        						<text class="field">微信</text>
        					</view>
        					<image class="imgss" v-if="!wxFlag" src="../../../static/image/shopCart-btn.png" ></image>
        					<image class="imgss"  v-if="wxFlag" src="../../../static/image/shopCart-btnActive.png" ></image>
        				</view>
        				<view class="btnss" @tap.stop="payBtn">确定</view>
        			</view>      
        	</view>
        </view>
        <!-- 余额支付的盒子 -->
        <view class="wxPayBoxMask" v-if="exDialogflag" @tap.stop="exDialogClick"></view>
        <view class="wxPayBox" v-if="exDialogflag">
        	<view class="titleBox" @tap.stop="exDialogClick">
        		<image class="cancel" src="../../../static/image/cancel.png"></image>
        	</view>
        	<view class="PayTitles">{{dataList.store_name}}</view>
        	<view  class="monVlue">{{dataList.cancel_price}}</view>
        	<view class="inputPsd">请输入交易密码</view>
        	 <view style="margin-left:49rpx;" class="item" @tap.stop='KeyboarOpen'>
        	      <password-input :numLng='exPassword'></password-input>
        	 </view>
        	 <number-keyboard tabBar ref='KeyboarHid' @input.stop='getPsd' psdLength='6'></number-keyboard>
        </view>
        <view class="showtips" v-if="tipflag">{{tipMsg}}</view>		
	</view> 
</template>
<script>
	import timePicker from '@/components/wing-time-selector/wing-time-selector.vue';
	import app  from '../../../App.vue'
	export default {
		data() {
			return {
				timeValue:'',
				sord_id:'',
				dataList:'',
				sType:1 ,//1 待支付，的时候，
				payFlag:false, // 选择怎么去付款的方式
				extraFlag:false, //选择余额支付方式
				wxFlag:false,//选择微信支付方式
				// 余额支付,输入密码
				exDialogflag:false,//弹框
				exPassword: "", //输入的内容
				dataList:[],
				extraPName:'', //余额弹框name
				payAllMoney:0,
				tipflag:false,
				tipMsg:''
			}
		},
		components:{
			timePicker,
		},
		onLoad(options){
			this.setData(options);
			this.getData();
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
		methods: {
			// 头部点亮
			repairOrder(){
				
			},
			btnConfirm(e){
				e.month=e.month.padStart(2,0);
				e.day=e.day.padStart(2,0);
				e.hour=e.hour.padStart(2,0);
				e.minute=e.minute.padStart(2,0);
				this.timeValue=e.year+'-'+e.month+'-'+e.day+' '+e.hour+':'+e.minute;
				console.log(this.timeValue)
			},
			getData(){
				let that=this;
                  that.$http.post('mini/v1/service/orderdetails',{
					  so_id:that.sord_id
				  },(res)=>{
					  if(res.state==0){
						  let aa = res.data;
						  aa.service_info.map((res2)=>{
						  		res2.img=app.globalData.imgPrefixUrl+res2.img
						  })
						   that.dataList=aa;
						   console.log(123456)
						   console.log(that.dataList)
						   console.log(123456)
					  }
				  })
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
				this.payFlag=false;
				this.exPassword='';//输入框里面的数据清除
				// 微信付款
				if(that.wxFlag){
					// 选中的小按钮
					that.wxFlag=false;
					// that.wxPay();
					that.sendOrder(1);
				}
				//余额付款
				else if(that.extraFlag){
								// 判断是否有密码
					that.$http.post('mini/v1/user/paypasswordcheck',{},(res)=>{
						if(res.state==0){
							// 选中的小按钮
							that.sendOrder(2);
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
			},
			// 微信支付
			wxPay(){
					 let that=this;
					let callback = data => {
						// 发起微信支付
						 console.log(data)
						 console.log('data')
						that.wxPayment({
							result: data,
							success: data => {
								   uni.redirectTo({
									url:'/pages/personCenter/myOpinion/opinionSuccess?typesName='+11
								   })
								
							},
							fail: data => {
								console.log(data)
								console.log('提交失败')
								uni.redirectTo({
									url:'/pages/personCenter/myOpinion/opinionSuccess?typesName='+12
								})
							},
						});
					};
					that.$http.post('mini/v1/payment/servicepay',{
						pay_type:1,
						order_sn:that.dataList.order_sn,
						pay_price:that.dataList.cancel_price,
						
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
					that.$http.post('mini/v1/payment/servicepay',{
						pay_type:2,
						order_sn:that.dataList.order_sn,
						pay_price:that.dataList.cancel_price,
						pay_password:that.exPassword
					},(res)=>{
						that.exDialogflag=false;
						if(res.state==0){
							uni.redirectTo({
								url:'/pages/personCenter/myOpinion/opinionSuccess?typesName='+10
							})
						}else if(res.state==1){
							that.exPassword='';
							that.tipflag=true ;
							that.tipMsg=res.msg;
							setTimeout(()=>{
									that.tipflag=false
							},3000)
						}else if(res.state==3){
						uni.showModal({
						    title: '提示',
						    content: '支付密码输入错误',
							confirmText:'重新输入',
						    success: function (res) {
						        if (res.confirm) {
									// 重新继续支付
									that.exPassword ='';
									console.log(that.exDialogflag)
									that.exDialogflag=true;
						        } else if (res.cancel) {
						           uni.switchTab({
						           	url:'/pages/personCenter/personCenter'
						           })
						        }
						    }
						});
					}
					})
			},
			// 余额 支付
			KeyboarOpen(e) {
			       this.$refs.KeyboarHid.open();
			},
			//获取键盘上的密码
			getPsd(val){
				console.log(val)
				console.log('获取键盘')
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
					 if(types==1){
							 that.wxPay()
					 }else if(types==2){
						 that.exDialogflag=true;
					 }
			
			}
			
		}
	}
</script>
<style scoped lang="scss">
	@import "../../../static/scss/common.scss";
	.uni-serverDetail{
		position: relative;
		left: 0rpx;
		top: 0rpx;
		height: 100vh;;
	}
	
	.style1{
		.listBox{
			background-color: #fff;
			.list{
				width: 750rpx;
				// height: 335rpx;
				padding:30rpx 30rpx 0rpx;
				box-sizing: border-box;
				.uni-title{
					display: flex;
					justify-content: space-between;
					align-items: center;
					.uni-left{
						font-weight: bold;
						color: #000;
						font-size: 32rpx;;
					}
					
					
				}

				.uni-center{
					display: flex;
					margin-top:46rpx;
					.lefts{
						display: block;
						width: 150rpx;
						height: 150rpx;
						border-radius: 8rpx;
						margin-right: 20rpx;;
					}
					.right{
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						.first{
							color: #000000;
							font-size: 28rpx;
							font-weight: bold;
							
						}
						.second{
							color: #454545;
							font-size: 24rpx;;
						}
						
						.third{
							color: #FF0000;
							font-size: 32rpx;
							font-weight: bold;
							.money{
								font-size: 42rpx;
							};
						}
					}
				}
			}
			
		}
	}
	.ermBox{
		width: 750rpx;
		padding:50rpx 0rpx;
		text-align: center;
		border-top:2rpx solid #f2f2f2;
		border-bottom:2rpx solid #f2f2f2;
		color: #000000;
		.valuesCodes2{
			font-weight: bold;
			font-size: 48rpx;
		}
		.field2{
			margin-top: 26rpx;
			font-size: 32rpx;
		}
		
	}
	.listBoxss{
		.lists{
			width: 750rpx;
			height: 90rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 0rpx 30rpx;
			box-sizing: border-box;
			color: #000000;
			font-size: 26rpx;
			.fields{
				
			}
			.values{}
			.activeReds{
				color: #FF0000;
			}
		}
		
	}
	.footer{
		width: 750rpx;
		height: 130rpx;
		display: flex;
		padding:0rpx 30rpx;
		box-sizing: border-box;
		align-items: center;
		justify-content: flex-end;
		position: fixed;
		left:0rpx;
		bottom: 30rpx;;
		.stylesss{
			width: 160rpx;
			height: 60rpx;
			line-height: 60rpx;
			text-align: center;
			background: #FFFFFF;
			border: 2rpx solid #FF9A9E;
			border-radius: 30rpx;
            color: #FF9A9E;
			font-size: 28rpx;
			
		}
		.field{
			background: #FF9A9E;
			color:#fff;					
		}
		.firsts{
			margin-right:28rpx;
			font-size: 24rpx;;
		}
		.seconds{}
		
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