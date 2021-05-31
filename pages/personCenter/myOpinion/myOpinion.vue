<template>
	<view class="uni-myCustomer">
		 <view class="contentBox">
			  <textarea class="textArea"  v-model="textAreaValue" placeholder-style="color:#888;font-size:28rpx;"  placeholder="请描述具体问题..."></textarea>
		      <view class="photoBox">
				  <view class="image-box" v-for="(item,index) in imgList" :key="index">
					  <image  class="bgImg" @tap.stop="preview(index)" :src="item"></image>
				      <image class="cancelImg"  @tap="delPhoto(index)" src="https://chikehometest.hzbixin.cn/upload/images/feedback/20210428/1caf36f5376e5208b1687d6b22d57baf.png"></image>
				  </view>
				  <view class="image-box" v-if="imgList.length >=0 && imgList.length<5">
				     <image @tap.stop="getChoiceImg"  class="bgImg" src="https://chikehometest.hzbixin.cn/upload/images/feedback/20210428/314603b21099d49c7a80eda4e25f51a6.png"></image>
			       </view>
			 </view>
			
		 </view>
		 <view class="btnSub" @tap.stop="submitData">提交</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				textAreaValue:'',
			    upImgList:[],
				imgList:[]
			}
		},
		onLoad(){
			
		},
		methods: {
			getChoiceImg(){
				let _that = this;
				uni.chooseImage({
					count: 6, //上传图片的数量，默认是9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album', 'camera'], //从相册选择
					success: function(res) {
						const tempFilePaths = res.tempFilePaths; //拿到选择的图片，是一个数组
							_that.imgList=_that.imgList.concat(res.tempFilePaths)
						tempFilePaths.map(sos => {
							uni.uploadFile({
								url: 'https://chikehometest.hzbixin.cn/mini/v1/overt/uploadimg',
								filePath: sos,
								name: 'file',
								formData: {
									'filetype':'feedback'
								},
								success: function(datas) {
									let results = typeof datas.data === "object" ? datas.data : JSON.parse(datas.data);
									let aa = results.data.imgpath;
									_that.upImgList.push(aa);
								},
								fail: function(datas) {
									console.log(3333)
								}
							})
					 })
					},
					
				})
				

	
			},
			// 照片删除
			delPhoto(index){
				
					let arr = this.upImgList;
					let arrs=this.imgList;
					arrs.splice(index,1);
					arr.splice(index, 1);
					this.upImgList = arr;
					this.imgList=arrs;
				
			},
			// 预览
			preview(index){
				current=this.imgList[index];
				url=this.imgList;
				uni.previewImage({
					current:current,
					urls:url,
					indicator: "number"
				})
			},
			submitData(){
				let that=this;
				that.$http.post('mini/v1/user/userback',{
					content:that.textAreaValue,
					imgs:that.upImgList
				},(res)=>{
					if(res.state==0){
						uni.redirectTo({
							url:'/pages/personCenter/myOpinion/opinionSuccess?typesName='+1
						})
					}
				})
			},
			jumps(){
				
			}
		}
	}
</script>

<style scoped lang="scss">
.uni-myCustomer{
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
	display: flex;
	flex-wrap: wrap;
	.image-box{
		 position: relative;
		 top:0rpx;
		 left:0rpx;
		 width: 150rpx;
		 height: 150rpx;
		 margin-right:30rpx;
		 margin-bottom: 20rpx;}
	.bgImg{
		display: block;
		width: 150rpx;
		height: 150rpx;
		margin:0rpx 0rpx 20rpx 30rpx;
		border-radius: 8rpx;
	}
	.cancelImg{
		position: absolute;
		right:-40rpx;
		top:-15rpx;
		width: 30rpx;
		height: 30rpx;
		display: block;
	}
}
</style>
