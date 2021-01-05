<template>
	<view class="uni-myOpinion">
		 <view class="contentBox">
			  <textarea class="textArea"  placeholder-style="color:#888;font-size:28rpx;"  placeholder="请描述具体问题..."></textarea>
		      <view class="photoBox">
				 <image @tap.stop="getChoiceImg" v-if="ImageUrl" class="bgImg" :src="ImageUrl"></image>
				  <image @tap.stop="getChoiceImg" v-if="!ImageUrl" class="bgImg" src=" http://zxyp.hzbixin.cn/files/57201608258002243.jpg"></image>
			      <image class="cancelImg" src="http://zxyp.hzbixin.cn/files/84791608261985467.jpg"></image>
			  </view>
		 </view>
		 <view class="btnSub" @tap.stop="jumps">提交</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				ImageUrl:''
			}
		},
		onLoad(){
			
		},
		methods: {
			getChoiceImg(){
				let _that = this;
				uni.chooseImage({
					count: 1, //上传图片的数量，默认是9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album', 'camera'], //从相册选择
					success: function(res) {
						const tempFilePaths = res.tempFilePaths; //拿到选择的图片，是一个数组
							_that.ImageUrl=tempFilePaths[0];
						
						// tempFilePaths.map(sos => {
						// 	uni.uploadFile({
						// 		url: 'https://yaofangme.hzbixin.cn/Updimg/upload',
						// 		filePath: sos,
						// 		name: 'file',
								
						// 		success: function(datas) {
						// 			let results = typeof datas.data === "object" ? datas.data : JSON.parse(datas.data);
						// 			let aa = results.data[0];
						// 			if(type ==1){
						// 			  _that.positiveImage=aa;
						// 			}
									
						// 		},
						// 		fail: function(datas) {}
						// 	})
					 // })
					},
					
				})
			},
			jumps(){
				uni.redirectTo({
					url:'/pages/personCenter/myOpinion/opinionSuccess'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
.uni-myOpinion{
	width: 750rpx;
	background-color: #f2f2f2;
	height: 100vh;
	position: relative;
	left:0rpx;
	top:0rpx;
	.textArea{
		width: 750rpx;
		height: 400rpx;
		padding:30rpx;
		box-sizing: border-box;
		background-color: #fff;
		border-bottom: 2rpx solid #f2f2f2;
	}
	.btnSub{
		width: 690rpx;
		height: 90rpx;
		line-height: 90rpx;
		text-align: center;
		color: #fff;
		font-size: 28rpx;
		position: absolute;
		left:30rpx;
		bottom:30rpx;
		background: #FF9A9E;
		border-radius: 45rpx;
	}
}
.photoBox{
	padding:40rpx 0rpx;
	position: relative;
	left:0rpx;
	top:0rpx;
	width: 750rpx;
	box-sizing: border-box;
	background-color: #fff;
	.bgImg{
		display: block;
		width: 150rpx;
		height: 150rpx;
		margin-left: 30rpx;;
	}
	.cancelImg{
		display: block;
		width: 40rpx;
		height: 40rpx;
		position: absolute;
		left:150rpx;
		top:20rpx;
	}
}
</style>
