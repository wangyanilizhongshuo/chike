<template>
	<view class="uni-addAddress" :style="visible==true?'position:fixed':'position:relative'" @tap.stop="visible=false">
		 <view class="listBox">
			 <view class="list">
				 <view class="fields">收货人</view>
				 <input class="inputs" v-model="name" placeholder="请输入收货人姓名" placeholder-style="font-size:26rpx;color:#888;" />
			     <view class="boxs"></view>
			 </view>
			 <view class="list">
				 <view class="fields">联系号码</view>
				 <input class="inputs" v-model="phone" type="number" placeholder="请输入收货人联系方式" placeholder-style="font-size:26rpx;color:#888;" />
			     <view class="boxs"></view>
			 </view>
			 <view class="list" @tap.stop="visible=true" >
				 <view class="fields">所在地区</view>
				 <input class="inputs" :style="choiceAddress==''?'color:#888;':'color: #222;'" v-model="choiceAddress" placeholder="请选择详细地址" placeholder-style="font-size:26rpx;color:#888;" />
			     <image v-if="!choiceAddress" class="imgs" src="../../static/image/index-arrow-right.png"></image>
			 </view>
			 <view class="list">
				 <view class="fields">详细地址</view>
				 <input class="inputs" v-model="address" placeholder="请输入详细地址" placeholder-style="font-size:26rpx;color:#888;" />
			      <view class="boxs"></view>
			 </view>
			 <view class="list lists">
				 <view class="fields">设置默认地址</view>
				 <switch :checked="addDefault" color="#FF9A9E" @change="switch1Change" />
			 </view>
		 </view>
		 <view class="footer" @tap.stop="submit" >确认</view>
		 <view class="pickerMask" v-if="visible"></view>
		 <picker-view class="picker-box" v-if="visible" :indicator-style="indicatorStyle" :value="value"  @change="bindChange">
		 		   <picker-view-column>
		 			   <view class="item " :style="{'line-height':stystemDeviceH}"  v-for="(item,index) in province" :key="index">{{item.name}}</view>
		 		   </picker-view-column>
		 		   <picker-view-column >
		 			   <view class="item " :style="{'line-height':stystemDeviceH}"   v-for="(item,index) in city" :key="index">{{item.name}}</view>
		 		   </picker-view-column>
		 		   <picker-view-column>
		 			   <view class="item " :style="{'line-height':stystemDeviceH}"   v-for="(item,index) in county" :key="index">{{item.name}}</view>
		 		   </picker-view-column>
		 </picker-view>
	</view>
</template>

<script>
	export default {
		 data () {
			return { 
				name:'',
				phone:'',
				region:'',
				address:'',
				visible:false,
				indicatorStyle: `text-align:center;height: ${Math.round(uni.getSystemInfoSync().screenWidth/(750/100))}px;width:250rpx`,
				stystemDeviceH:'',
				province:[],
				city:[],
				county:[],
				cityIndex:110000,
				cityName:'',
				countyIndex:110100,
				countyName:'',
				areaName:'',
				areaIndex:'',
				addFlag1:true,
				addDefault:false,
				choiceAddress:'',
				preAddress:'',
				id:''
			
				
				}
			},
			onLoad(options){
				this.setData(options);
				if(this.addDefault==0){
					this.addDefault=false
				}else{
					this.addDefault=true
				}
				console.log(options)
				
				// 地址图标的高度
				 this.stystemDeviceH=(Math.round(uni.getSystemInfoSync().screenWidth/(750/100))*2+'rpx')
			     // 获取地址
			     this.getAddress();
			},
			methods:{
				switch1Change(e){
					this.addDefault=e.detail.value
					
				},
				submit(){
					let that=this;
					let flags=1
					if(that.addDefault==true){
						flags=1
					}else {
						flags=0
					}
					that.$http.post('mini/v1/user/actaddress',{
						act:'edit',
						id:that.id,
						real_name:that.name,
						phone:that.phone,
						province_id:that.cityIndex,
						province:that.cityName,
						city_id:that.countyIndex,
						city:that.countyName,
						district_id:that.areaIndex,
						district:that.areaName,
						datail:that.address,
						is_default:flags
					},(res)=>{
						if(res.state==0){
							uni.navigateBack(
							)
						}
					})
					
				},
				// 地址选择
				  bindChange: function (e) {
					  let that=this;
				      const val = e.detail.value;
					 that.cityIndex=that.province[val[0]].id;
					 that.cityName=that.province[val[0]].name;
				
					  that.getAddress(val);  
				   },   
				   getAddress(val){
				   	let that=this;
				   	let firstflag=true
				   	// addFlag1=true 执行省份获取这个接口，只需要请求一次
				   	if(that.addFlag1){
				   		 that.$http.post('mini/v1/overt/getregionchild',{
				   			},function(res){
				   				if(res.state ==0){
				   					that.province=res.data;
				   					if(val){
				   						 // console.log(that.province[val[0]].id);
				   				   //       console.log(that.province[val[0]].name);
				   					}
				   				   
				   				}
				   			})
				   			that.addFlag1=false;
				   	}
				   	  let p1 = new Promise(   (resolve, reject) => {
				   		that.$http.post('mini/v1/overt/getregionchild',{
				   				regionid:that.cityIndex
				   			  },function(res){
				   					if(res.state ==0){
				   						that.city=res.data;
				   						if(val){
				   							console.log('county市市市')
				   							that.countyIndex=that.city[val[1]].id;
				   							that.countyName=that.city[val[1]].name;
				   							console.log(that.countyIndex)
				   							console.log(that.countyName)
				   						}
				   						resolve()
				   					}
				   			  })
				   	  }).then(() => {// 执行这个.then的时候，生成的promise是下面一个then的
				   	            console.log(that.countyIndex+'countyIndex2222')
				   				that.$http.post('mini/v1/overt/getregionchild',{
				   					regionid:that.countyIndex
				   				},function(res){
				   					if(res.state ==0){
				   						that.county=res.data;
				   						if(val){
				   							console.log('quququququq')
				   							that.areaName=that.county[val[2]].name;
				   							that.areaIndex=that.county[val[2]].id;
				   						    that.choiceAddress=that.cityName+','+that.countyName+','+that.areaName
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
	@import "../../static/scss/common.scss";
	.uni-addAddress{
		height: 100vh;
		background-color: #f2f2f2;
		
		left:0rpx;
		top:0rpx;
		.listBox{
			
			.list{
				width: 750rpx;
				padding: 0rpx 30rpx;
				line-height: 98rpx;
				height: 98rpx;;
				display: flex;
				align-items: center;
				color: #222;
				font-size: 26rpx;
				background-color: #fff;
				.fields{
					width: 180rpx;
					
				}
				.inputs{
					width: 470rpx;
					text-align: right;
				}
				.boxs{
					height: 30rpx;
					width: 30rpx;
					margin-left:10rpx;
				}
				.imgs{
					display: block;
					height: 30rpx;
					width: 30rpx;
					margin-left:10rpx;
				}
			}
			.lists{
				width: 750rpx;
				box-sizing: border-box;
				padding:0rpx 30rpx;
				margin-top: 20rpx;
				justify-content: space-between;
			}
			
		}
	}
	.footer{
		width: 690rpx;
		height: 90rpx;
		text-align: center;
		position: fixed;
		left:30rpx;
		bottom:50rpx;
		line-height: 90rpx;
		color: #fff;;
		background: #FF9A9E;
		border-radius: 45rpx;
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
