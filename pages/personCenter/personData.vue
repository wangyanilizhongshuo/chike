<template>
	<view class="uni-personData">
	    <view class="msgBox">
			<view class="headPortrait boxStyle"  >
				<view class="fileds">头像</view>
				<view class="values imgBoxdis" @tap.stop="getImage">
					<image  class="imgBg" :src="personData.avatar"></image>
				</view>
			</view>
			<view class="boxStyle"  @tap.stop="jumps(1,personData.nickname)">
				<view class="fileds">昵称</view>
				<view class="values">{{personData.nickname}}</view>
			</view>
			<view class="boxStyle" >
				<view class="fileds">性别</view>
				<picker class="pickStyle" :range="genderList"  @change="PickerChange($event,1)">
				   <view  :style="genderValue?'width:485rpx':'width:420rpx'" class="df">{{genderValue}}</view>
				   <image v-if="!genderValue" class="imgsss" src="../../static/image/index-arrow-right.png"></image>
				</picker>
			</view>
			<view class="boxStyle" >
				<view class="fileds">生日 </view>
				<picker mode="date" :value="date" :start="startDate" :end="endDate"  class="pickStyle"  @change="PickerChange($event,2)">
				   <view :style="birthDate?'width:485rpx':'width:420rpx'" class="df">{{birthDate}}</view>
				   <image v-if="!birthDate" class="imgsss" src="../../static/image/index-arrow-right.png"></image>
				</picker>
			</view>
			<view class="boxStyle"  @tap.stop="jumps(2,personData.phone)">
				<view class="fileds">手机号码 </view>
				<view class="values">{{personData.phone}}</view>
			</view>
		</view>
		<view  class="footer" @tap.stop="editLogin">
			退出登录
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			 const currentDate = this.getDate({
			            format: true
			        })
			return {
				
				genderList:['男','女'],
				genderValue:'',
				// ImageUrl:'',
				birthDate:'',
				date: currentDate,
				personData:''
				  
				
			}
		},
		 computed: {
		        startDate() {
		            return this.getDate('start');
		        },
		        endDate() {
		            return this.getDate('end');
		        }
		    },
		onLoad(){
			this.getPersonMsg()
		},
		methods: {
			// 获取个人信息
			getPersonMsg(){
				let that=this;
				that.$http.post('mini/v1/user/info',{},(res)=>{
					  if(res.state==0){
						  that.personData=res.data;
						  if(that.personData.sex==1){
							  that.genderValue='男'
						  }else if(that.personData.sex==2){
							   that.genderValue='女'
						  }
						  that.birthDate=that.personData.birthday;
					  }
				})
			},
			editLogin(){
				uni.navigateTo({
					url:'/pages/index/login'
				})
			},
			editPersonMsg(){
				console.log('wnag ')
				let xb=''
				if(this.genderValue=='男'){
					xb=1
				}else if (this.genderValue=='女'){
					xb=2
				}
				this.$http.post('mini/v1/user/editinfo',{
					sex:xb,
					birthday:this.birthDate
				},(res)=>{
					if(res.state==0){
						console.log(res)
					}
				})
			},
			// 性别选择
			PickerChange(e,type){
				if(type ==1){
					this.genderValue=this.genderList[e.target.value];
					console.log(22222)
					this.editPersonMsg();
				}else  if (type ==2){
					this.birthDate=e.target.value;
					this.editPersonMsg();
				}
			},
			// 跳转
			jumps(type,value){
				// uni.navigateTo({
				// 	url:'/pages/personCenter/repairPersonData?types='+type+'&names='+value
				// })
			},
			getDate(type) {
			            const date = new Date();
			            let year = date.getFullYear();
			            let month = date.getMonth() + 1;
			            let day = date.getDate();
			
			            if (type === 'start') {
			                year = year - 60;
			            } else if (type === 'end') {
			                year = year + 2;
			            }
			            month = month > 9 ? month : '0' + month;;
			            day = day > 9 ? day : '0' + day;
			            return `${year}-${month}-${day}`;
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
								url: 'https://chikehometest.hzbixin.cn/mini/v1/overt/uploadimg',
								filePath: sos,
								name: 'file',
								formData: {
									'filetype':'feedback'
								},
								success: function(datas) {
									let results = typeof datas.data === "object" ? datas.data : JSON.parse(datas.data);
									let aa = results.data.imgpath;
									 _that.$http.post('/mini/v1/user/changeAva',{
										 photo   :'https://chikehometest.hzbixin.cn/'+aa
									 },(res)=>{
										 if(res.state ==0){
											 _that.getPersonMsg();
										 }
									 })
								},
								fail: function(datas) {
									console.log(3333)
								}
							})
					 })
					},
					
				})
			}
		
			
			
		}
	}
</script>

<style scoped lang="scss">
	@import "../../static/scss/common.scss";
	// @include ellipsis(1);
	.uni-personData{
		position: relative;
		left: 0rpx;
		top:0rpx;
		height: 100vh;
		background-color: #f2f2f2;;
		.msgBox{
			background-color: #fff;;
			.boxStyle{
				width: 750rpx;
				padding:0rpx 30rpx;
				box-sizing: border-box;
				display: flex;
				align-items: center;
				height: 98rpx;
				border-top:2rpx solid #f2f2f2;
				position: relative;
				left:0rpx;
				right:0rpx;
				.fileds{
					color: #222222;
					width: 200rpx;;
					font-size: 28rpx;
				}
				.imgBg{
					display: block;
					width: 150rpx;
					height: 150rpx;
					border-radius: 8rpx;
				}
				.imgBoxdis{
					display: flex;
					align-items: center;
					justify-content: flex-end;
				}
				.boxs{
					width: 30rpx;
					height: 30rpx;
					margin-left: 35rpx;;
				}
				.img{
					display: block;
					width: 30rpx;
					height: 30rpx;
					margin-left: 35rpx;;
				}
				.values{
					text-align: right;
					width: 485rpx;
					height: 98rpx;
					color: #888888;
					font-size: 28rpx;
					line-height: 98rpx;;;
				}
				.pickStyle{
					width: 485rpx;
					height: 98rpx;
					display: flex;
					justify-content: space-between;
					.imgsss{
						width: 30rpx;
						height: 30rpx;
						display: block;
						position: absolute;
						right:35rpx;
						top:32rpx;
					}
					.df{
						width: 420rpx;
						height: 98rpx;
						line-height: 98rpx;
						text-align: right;
						color: #888888;
					}
				}
				
			}
			.headPortrait{
				height: 194rpx;
				.values{
					height: 194rpx;
				}
			}
		}
	}
	.footer{
		width: 750rpx;
		height: 140rpx;
		position: fixed;
		left:0rpx;
		bottom: 0rpx;
		background-color: #fff;
		line-height: 140rpx;
		text-align: center;
		color: #222222;
		font-size: 28rpx;
	}
</style>
