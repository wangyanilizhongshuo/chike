<!-- <template>
	<view class="uni-shopSettlement" @tap.stop="visible=false" :style="visible==true?'position:fixed':'position:relative'">
		 <view class="uni-box">
			 <form class="sale-form" @submit="formSubmit">
			  <view class="list">
			 	 <view class="filed">姓名</view>
			 	 <input  :style="name!=''?'color:#303133':''" placeholder-style="font-size:28rpx;color:#888;"  maxlength="10" class="inputs" name="name" v-model="name" placeholder="请输入真实姓名" />
			  </view>
			 <view class="list">
			 	 <view class="filed">手机号码</view>
			 	 <input class="inputs"  :style="phone!=''?'color:#303133':''"  placeholder-style="font-size:28rpx;color:#888;" maxlength="13" name="phone" v-model="phone" placeholder="请输入申请人手机号码" />
			  </view> 
			  <view class="list">
			  	 <view class="filed">店铺名称</view>
			  	 <input class="inputs"  :style="shopName!=''?'color:#303133':''"  placeholder-style="font-size:28rpx;color:#888;" maxlength="13" name="shopName" v-model="shopName" placeholder="请输入店铺的名称" />
			  </view> 
			  <view class="list">
			  	     <view class="filed">所在区域</view>
					 <view class="pickerBox" @tap.stop="visible=true">
						 <input  class="uni-input" :style="choiceAreaValue != ''? 'color:#303133':''"  :disabled="true"  name="shopArea" v-model="choiceAreaValue" placeholder="请选择店铺所在区域"/>
						 <image class="arrow"  src="../../../static/image/index-arrow-right.png"></image>
					 </view>
			  </view> 
			  <view class="list">
			  	 <view class="filed">详细地址</view>
			  	 <input class="inputs"  :style="detailAddress!=''?'color:#303133;':''"  placeholder-style="font-size:28rpx;color:#888;"  name="detailAddress" v-model="detailAddress" placeholder="请输入店铺详细地址" />
			  </view> 
			  <view class="lists">
				  <view  class="field">简介</view>
				  <textarea name="agentIntruduce"  class="textalue" v-model="agentIntruduce" placeholder-style="color:#888;font-size:28rpx;" placeholder="请输入店铺的简介..."></textarea>
			  </view>
			  <view class="photoBox">
				  <view class="uni-first style22">
					    <image v-if="!positiveImg"  class="imgs" @tap.stop="pickerImage(1)" src="http://zxyp.hzbixin.cn/files/81781608263674272.jpg"></image>
				        <image v-if="positiveImg"  class="imgs" @tap.stop="pickerImage(1)" :src="positiveImg"></image>
						<view class="filed">上传身份证正面照片</view>
				  </view>
				  <view class="uni-second style22">
				  	 <image v-if="!reverseImg" class="imgs" @tap.stop="pickerImage(2)" src="http://zxyp.hzbixin.cn/files/77741608263712519.jpg"></image>
				     <image v-if="reverseImg" class="imgs" @tap.stop="pickerImage(2)" :src="reverseImg"></image>
					 <view class="filed">上传身份证反面照片</view>
				  </view>
				  <view class="uni-third style22">
				  	 <image v-if="!businessLicenseImg"  class="imgs" @tap.stop="pickerImage(3)" src="http://zxyp.hzbixin.cn/files/66301608263748933.jpg"></image>
				     <image v-if="businessLicenseImg"  class="imgs" @tap.stop="pickerImage(3)" :src="businessLicenseImg"></image>
					 <view class="filed">上传营业执照</view>
				  </view>
				  <view class="uni-third style22">
				  	 <image v-if="!doctorImg"  class="imgs" @tap.stop="pickerImage(4)" src="http://zxyp.hzbixin.cn/files/66301608263748933.jpg"></image>
				     <image v-if="doctorImg"  class="imgs" @tap.stop="pickerImage(4)" :src="doctorImg"></image>
				  	 <view class="filed">医疗机构许可证</view>
				  </view>
				  <view class="uni-third style22">
				  	 <image v-if="!otherImg"  class="imgs" @tap.stop="pickerImage(5)" src="http://zxyp.hzbixin.cn/files/66301608263748933.jpg"></image>
				     <image v-if="otherImg"  class="imgs" @tap.stop="pickerImage(5)" :src="otherImg"></image>
				  	 <view class="filed">其他相关资质(选填)</view>
				  </view>
				  
			  </view>
			
			  
			 <button class="btn" form-type="submit">提交</button>
			 </form>
		 </view>
		 <view class="pickerMask" v-if="visible"></view>
		 <picker-view class="picker-box" v-if="visible" :indicator-style="indicatorStyle" :value="value"  @change="bindChange">
		 		   <picker-view-column>
		 			   <view class="item " :style="{'line-height':stystemDeviceH}" v-for="(item,index) in province" :key="index">{{item.name}}</view>
		 		   </picker-view-column>
		 		   <picker-view-column >
		 			   <view class="item "  :style="{'line-height':stystemDeviceH}" v-for="(item,index) in city" :key="index">{{item.name}}</view>
		 		   </picker-view-column>
		 		   <picker-view-column>
		 			   <view class="item "  :style="{'line-height':stystemDeviceH}"  v-for="(item,index) in county" :key="index">{{item.name}}</view>
		 		   </picker-view-column>
		 </picker-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name:'',
				phone:'',
				shopName:'',
				visible:false,
				choiceAreaValue:'',
				// shopCategoryValue:'',
				// shopCategoryList:['商品','衣帽','机械','生活用品'],
				shopArea:'',
				shopAreaList:['滨江','江干','西湖','拱墅'],
				detailAddress:'',
				// 正面:
				positiveImg:'',
				positiveImgs:'',
				// 反面 
				reverseImg:"",
				reverseImgs:"",
				// 营业执照
				businessLicenseImg:'',
				businessLicenseImgs:'',
				// 医疗
				doctorImg:'',
				doctorImgs:'',
				// 其他 资质
				otherImg:'',
				otherImgs:'',
				indicatorStyle: `text-align:center;height: ${Math.round(uni.getSystemInfoSync().screenWidth/(750/100))}px;width:250rpx`,
				province:[],
				city:[],
				county:[],
				addFlag1:true,
				// 省份
				cityIndex:110000,
				// 市
				countyName:'',
				countyIndex:110100,
				provinceIndex:'',
				areaIndex:'',
				cityName:'',
				// 区
				areaName:'',
				areaIndex:'',
				stystemDeviceH:''
				
				
			}
		},
		onLoad(){
			this.getAddress();
			this.stystemDeviceH=(Math.round(uni.getSystemInfoSync().screenWidth/(750/100))*2+'rpx')
			
		},
		methods: {
			formSubmit(e){
				let  ev=e.detail.value;
				let that=this;
				if(!ev.name|| !ev.phone || !ev.detailAddress || !that.cityIndex || !that.choiceAreaValue || !that.positiveImgs || !that.reverseImgs || !that.businessLicenseImgs || !that.doctorImgs || !that.otherImgs){
					uni.showToast({
						title:'数据补充完整',
						duration:2000
					})
					return false; 
				}
				that.$http.post('mini/v1/store/join',{
					real_name:ev.name,
					phone:ev.phone,
					store_name:ev.shopName,
					address:ev.detailAddress,
					province_id:that.cityIndex,
					city_id:that.countyIndex,
					district_id:that.areaIndex,
					addr:that.choiceAreaValue,
					idcard_a:that.positiveImgs,
					idcard_b:that.reverseImgs,
					business_license:that.businessLicenseImgs,
					license:that.doctorImgs,
					other_img:that.otherImgs
				},(res)=>{
					if(res.state ==0){
						uni.redirectTo({
							url:'/pages/personCenter/myOpinion/opinionSuccess?typesName='+7
						}) 
					}
				})
			},
			pickerChange(e,type){
				 if(type ==2){
					this.shopArea=this.shopAreaList[e.target.value] ;
				}
				// if(type ==1){
				// 	this.shopCategoryValue=this.shopCategoryList[e.target.value] ;
				// }else
			},
			// 照片的选择
			pickerImage(type){
				let _that = this;
				let types=type;
				uni.chooseImage({
					count: 1, //上传图片的数量，默认是9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album', 'camera'], //从相册选择
					success: function(res) {
						const tempFilePaths = res.tempFilePaths; //拿到选择的图片，是一个数组
						if(types==1){
							_that.positiveImg=tempFilePaths[0];
						}else if(types==2){
							_that.reverseImg=tempFilePaths[0];
						}else if(types==3){
							_that.businessLicenseImg=tempFilePaths[0];
						}
						else if(types==4){
							_that.doctorImg=tempFilePaths[0];
						}else if(types==5){
							_that.otherImg=tempFilePaths[0];
						}
						
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
									console.log(results.data.imgpath)
									let aa = 'https://chikehometest.hzbixin.cn'+results.data.imgpath;
									console.log(aa)
									if(types==1){
										_that.positiveImgs=aa;
										
									}else if(types==2){
										_that.reverseImgs=aa;
									}else if(types==3){
										_that.businessLicenseImgs=aa;
									}
									else if(types==4){
										_that.doctorImgs=aa;
									}else if(types==5){
										_that.otherImgs=aa;
									}
									
								},
								fail: function(datas) {
									console.log(3333)
								}
							})
						})
					}
				});
			},
			
			// 地址选择
			 bindChange: function (e) {
				  let that=this;
			      const val = e.detail.value;
				  that.cityIndex=that.province[val[0]].id;
				  that.cityName=that.province[val[0]].name;
				  console.log('省份')
				  console.log(that.cityIndex)
				  console.log(that.cityName)
				  console.log('省份')
				  that.getAddress(val);  
			 },
			getAddress(val){
				let that=this;
				let firstflag=true;
				// addFlag1=true 执行省份获取这个接口，只需要请求一次
				if(that.addFlag1){
					 that.$http.post('mini/v1/overt/getregionchild',{
						},function(res){
							if(res.state ==0){
								that.province=res.data;
								if(val){
									that.provinceId=that.province[val[0]].id;
									that.provinceName=that.province[val[0]].name;
								} 
							}
						})
						that.addFlag1=false;
				}
				  let p1 = new Promise( (resolve, reject) => {
					that.$http.post('mini/v1/overt/getregionchild',{
							regionid:that.cityIndex
						  },function(res){
								if(res.state ==0){
									that.city=res.data;
									if(val){
										console.log('county市')
										that.countyIndex=that.city[val[1]].id;
										that.countyName=that.city[val[1]].name;
										console.log(that.countyIndex)
										console.log(that.countyName)
										
									}
									
									resolve()
								}
						  })
				  }).then(() => {// 执行这个.then的时候，生成的promise是下面一个then的
				           
							that.$http.post('mini/v1/overt/getregionchild',{
								regionid:that.countyIndex
							},function(res){
								if(res.state ==0){
									that.county=res.data;
									if(val){
										that.areaName=that.county[val[2]].name;
										that.areaIndex=that.county[val[2]].id;
										that.choiceAreaValue=that.cityName+','+that.countyName+','+that.areaName
										console.log('区区区区区区')
										console.log(that.areaName)
										console.log(that.areaIndex)
										
									}
								
								}
							})
				     }
				)
			
			},
		}
	}
</script>

<style scoped lang="scss">
    @import "../../../static/scss/common.scss";
	%styles{
		width: 690rpx;
		
		padding:0rpx 30rpx;
		box-sizing: border-box;
	}
	.photoBox{
		border-top: 20rpx solid #f2f2f2;
		padding:20rpx 0rpx 20rpx;
		.style22{
			width: 690rpx;
			text-align: center;
			color: #888888;
			font-size: 28rpx;
			display: flex;
			flex-direction: column;
			justify-content: center;
			margin-bottom: 70rpx;;
			position: relative;
			left:0rpx;
			top:0rpx;
			.imgs{
				display: block;
				width: 400rpx;
				height: 250rpx;
				border-radius: 8rpx;
				margin:0rpx 147.5rpx 15rpx;
			}
			.field{
				
			}
		}
		
	}
 .uni-shopSettlement{
	 background-color: #f2f2f2;
	 width: 750rpx;
	 box-sizing: border-box;
	 padding:20rpx 30rpx 170rpx;
	 
	 left:0rpx;
	 top:0rpx;
	 .btn{
		 width: 690rpx;
		 height: 90rpx;
		 margin-left:30rpx;
		 text-align: center;
		 line-height: 90rpx;
		 color: #fff;
		 font-size: 28rpx;
		 background: #FF9A9E;
		 border-radius: 45rpx;
		 position: absolute;
		 left:0rpx;
		 bottom:30rpx;
	 }
	 .uni-box{
		 width: 690rpx;
		 background-color: #fff;;
		 .sale-form{
			 .lists{
				 @extend  %styles;
				 background-color: #fff;
				 .field{
					 color: #222222;
					 font-size: 28rpx;
					 margin:25rpx 0rpx;
				 }
				 .textalue{
					 width: 630rpx;
					 height: 200rpx;
					 padding:20rpx;
					 box-sizing: border-box;
                     background: #F5F5F5;
					 border-radius: 8rpx;
					 font-size: 28rpx;;
					 border-bottom: 40rpx solid #fff;
				 }
			 }
			 .list{
				 width: 690rpx;
				 height: 98rpx;
				 padding:0rpx 30rpx;
				 box-sizing: border-box;
				 display: flex;
				 align-items: center;
				 justify-content: space-between;
				 font-size: 28rpx;
				 .filed{
					 color: #222222;
					 font-size: 28rpx;
					 width: 200rpx;;
				 }
				 .pickerBox{
					 flex:1;
					 position: relative;
					 left:0rpx;
					 top:0rpx;
					 .uni-input{
						 font-size: 28rpx;
					 }
					 .arrow{
						 display: block;
						 width: 30rpx;
						 height: 30rpx;
						 position: absolute;
						 right:0rpx;
						 top: 7rpx;;
					 }
				 }
				 .inputs{
					
					 flex:1;
				 }
			 }
		 }
		 
	 }
 }
 .pickerMask{
 	 @extend  %maskBox;
  }
 .picker-box{
 	 padding:0rpx 80rpx;
 	// box-sizing: border-box;
 	width: 750rpx;
 	height: 400rpx;
 	position: fixed;
 	left:0rpx;
 	bottom:0rpx;
 	z-index: 50;
 	background-color: #fff;
 }
</style>
 -->
 <template>
   <view></view>
 </template>