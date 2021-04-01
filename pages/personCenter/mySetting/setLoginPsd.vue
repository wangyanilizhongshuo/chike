<template>
	
	<view class="uni-setPsd">
		<view class="yzmBox" v-if="boxflag">
            <view class="signalBox">短信验证码已发送至{{phones}}</view>		
	        <view class="checkBox">
				<input class="inBox" v-model="code" type="number" placeholder="请输入验证码" placeholder-style="color:#888;font-size:28rpx;" />
		        <view  v-if="timeFlag"  class="timeBox">{{alltime}}s</view> 	
				<view  v-if="!timeFlag" @tap.stop="sendCode()"   class="timeBox">发送验证码</view>
			</view>
			<view class="btnSure" @tap.stop="yzmSubmit">确定</view>
		</view>
		<view class="setPsdBox" v-if="!boxflag">
			<view  class="uni-titles ">请设置新密码</view>
			<view class="pwdFirstBox styless">
				<input class="inpuBox" v-model="psd1" password="true" type="number"  placeholder-style="font-size:28rpx;color:#888"  placeholder="请输入六位新密码" />
			</view>
			<view class="pwdSecBox styless">
				<input  class="inpuBox" v-model="psd2" type="number" password="true" placeholder-style="font-size:28rpx;color:#888"  placeholder="请再次输入六位密码" />
			</view>
			<view class="btnSure" @tap.stop="psdSubmit">确定</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				timeFlag:false,
				alltime:'',
				boxflag:true,
				phone:'',
				phones:'',
				code:'',
				psd1:'',
				psd2:''
				
			}
		},
		onLoad(options){
			this.setData(options);
			this.phones=this.phone;
			this.phones=this.phones.split('')
			this.phones.splice(3,4,'****')
			this.phones= this.phones.join('')
			// this.getTime();
		
		},
		methods: {
			// 倒计时
			getTime(){
				let that=this;
				that.timeFlag=true;
				that.alltime=59;
				setInterval((res)=>{
					that.alltime=that.alltime-1;
					 if(that.alltime<=1){
						 that.timeFlag=false
					 }
				},1000)
			},
			
			// 验证码提交
			yzmSubmit(){
				let that=this;
				that.$http.post('mini/v1/overt/smscodevalid',{
					phone:this.phone,
					smscode:this.code
				},(res)=>{
					if(res.state==0){
						this.boxflag=false;
					}
				})
			},
			sendCode(){
				this.$http.post('mini/v1/overt/sendsmscode',{
					mobile:this.phone,
					codetype:2
				},(res)=>{
					if(res.state==0){
						that.timeFlag=true;
						that.alltime=59;
						setInterval((res)=>{
							that.alltime=that.alltime-1;
							 if(that.alltime<=1){
								 that.timeFlag=false
							 }
						},1000)
					}
				})
			},
			// 密码提交
			psdSubmit(){
				if(this.psd1 !==this.psd2){
					uni.showToast({
						title:'密码不相同',
						duration:2000
					})
					return false; 	
				}else if(this.psd1.length!=6 ||this.psd2.length!=6){
					uni.showToast({
						title:'密码长度出错',
						duration:2000
					})
					return false; 
				}
				this.$http.post('mini/v1/user/setLogPassword',{
					new_password:this.psd1,
					new_password2:this.psd2
				},(res)=>{
					if(res.state==0){
						uni.redirectTo({
							url:'/pages/personCenter/myOpinion/opinionSuccess?typesName='+2
						})
					}
				})
			}
			
			
		}
	}
</script>

<style scoped lang="scss">
 @import "../../../static/scss/common.scss";
  // @include ellipsis(1);
  .uni-setPsd{
	 border-top:2rpx solid #f2f2f2;
	  color: #222222;
	 .signalBox{
		 margin-left:30rpx;
		 line-height: 100rpx;
		 margin-bottom: 30rpx;;
		 font-size: 28rpx;;
	 }
	 .checkBox{
		 width: 600rpx;
		 height: 120rpx;
		 margin-left:75rpx;
		 display: flex;
		 align-items: center;
		 justify-content: space-between;
		 border-bottom: 2rpx solid #f2f2f2;
	 }
	 .inBox{
		 font-size: 28rpx;
	 }
	 .timeBox{
		 font-size: 28rpx;;
		 color: #FF9A9E;
		 width: 190rpx;
		 height: 60rpx;
		 border: 2rpx solid #FF9A9E;
		 border-radius: 30rpx;
		 text-align: center;
		 line-height: 60rpx;
	 }
  }

  .setPsdBox{
	  .uni-titles{
		  font-size: 28rpx;
		  color: #222;
		  margin-left:30rpx;
		  height: 100rpx;
		  line-height: 100rpx;
		  margin-bottom:30rpx;
	  }
	  .styless{
		  width: 600rpx;
		  // height: 120rpx;
		  // line-height: 120rpx;
		  color:#222;
		  font-size: 28rpx;
		  margin-left: 75rpx;
		  border-bottom: 2rpx solid #f2f2f2;;
		  .inpuBox{
			  height: 120rpx;
			  line-height: 120rpx;
		  }
	  }
  }
  .btnSure{
  	  width: 690rpx;
  	  height: 90rpx;
  	  line-height: 90rpx;
  	  text-align: center;
  	  color: #fff;
  	  background: #FF9A9E;
  	  border-radius: 45rpx;
  	  margin:86rpx 30rpx 0rpx;
  }
</style>
