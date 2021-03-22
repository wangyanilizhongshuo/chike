<template>
	<view class="uni-settings">
		 <view class="listBox">
			 <view class="list" @tap="jumps(1)">
				 <view class="fields">设置交易密码</view>
				 <image class="imgs" src="../../../static/image/index-arrow-right.png"></image>
			 </view>
			 <view class="list" @tap="jumps(2)">
					 <view class="fields">设置登录密码</view>
					 <image class="imgs" src="../../../static/image/index-arrow-right.png"></image>
			 </view>
			 <view class="list"  @tap="jumps(3)">
				 <view class="fields">关于我们</view>
				 <image class="imgs" src="../../../static/image/index-arrow-right.png"></image>
			 </view>
		 </view> 
		 <view class="footer" @tap.stop="edits">退出登录</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				phone:''
			}
		},
		onLoad(options){
			this.setData(options);
			this.phone=uni.getStorageSync('phone')
			console.log(this.msg)
		},
		methods: {
			jumps(type){
				if(type ==1){
					this.$http.post('mini/v1/overt/sendsmscode',{
						mobile:this.phone,
						codetype:1
					},(res)=>{
						if(res.state==0){
							uni.navigateTo({
						         url:'/pages/personCenter/mySetting/setPsd?phone='+this.phone
					        })
						}
					})
					
					
				}else if (type ==2){
					
					this.$http.post('mini/v1/overt/sendsmscode',{
						mobile:this.phone,
						codetype:2
					},(res)=>{
						if(res.state==0){
							uni.navigateTo({
								url:'/pages/personCenter/mySetting/setLoginPsd?phone='+this.phone
							})
						}
					})
	
				}
				else if (type ==3){
					uni.navigateTo({
						url:'/pages/personCenter/mySetting/aboutUs'
					})
					
				}
			},
			edits(){
				uni.redirectTo({
					url:'/pages/index/login'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
 @import "../../../static/scss/common.scss";
  // @include ellipsis(1);
  .uni-settings{
	  width: 750rpx;
	  height: 100vh;
	  color: #222222;
	  font-size: 28rpx;
	  background-color: #f2f2f2;
	  position: relative;
	  left:0rpx;
	  top:0rpx;
	  .listBox{
		  .list{
			  width: 750rpx;
			  height: 98rpx;
			  display: flex;
			  justify-content: space-between;
			  align-items: center;
			  padding:0rpx 30rpx;
			  box-sizing: border-box;
			  background-color: #fff;
			  border-top:2rpx solid #f2f2f2;
			  
			  .fields{
				  
			  }
			  .imgs{
				  width: 30rpx;
				  height: 30rpx;
				  display: block;
			  }
		  }
		  
	  }
	  .footer{
		  width: 750rpx;
		  height: 98rpx;;
		  position: absolute;
		  left:0rpx;
		  bottom: 0rpx;
		  background-color: #fff;
		  line-height: 98rpx;;
		  text-align: center;
		  
	  }
  }
</style>
