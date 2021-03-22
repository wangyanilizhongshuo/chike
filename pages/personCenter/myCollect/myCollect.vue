<template>
	<view class="uni-collect">
		<view  class="titleBox">
			<view class="titleList"  v-for="(item,index) in titleList" :key="index" @tap.stop="getTitleActive(index)">
				<view :class="titleActiveIndex ==index?'fieldActive':'field'" >{{item}}</view>
				<view v-if="titleActiveIndex ==index" class="lines"></view>
		    </view>
		</view>
		<view style="width: 750rpx;height: 100rpx;;"></view>
		<view class="uni-list" v-if="titleActiveIndex==0" >
		<side-slip class="sideSlipBox" @remove="onRemove(item.goods_id,0)" v-for="(item,index) in  listData"  :key="index">
			<view class="box" v-if="item.outdate==0">
				<view class="img-box">
					<image class="imgs" :src="item.goods_img"></image>
					
				</view>
				<view class="uni-right">
					<view class="uni-first"> {{item.goods_name}}</view>
				    <view class="uni-second">¥<text class="money">{{item.user_price}}</text></view>
				</view>
			</view>
			
			<view class="box" v-if="item.outdate==1">
				<view class="img-box">
					<image class="imgs" src="https://img9.51tietu.net/pic/2019-091200/ff1vqwm3q33ff1vqwm3q33.jpg"></image>
					<view class="uselessImg">已失效</view>
				</view>
				<view class="uni-right uni-rightLost" >
					<view class="uni-first" > 123</view>
				    <view class="uni-second" >¥<text class="money">发送到大师傅第三帝国</text></view>
				</view>
			</view>
		
		</side-slip>
		
			
		</view>
		<view class="uni-list" v-if="titleActiveIndex==1" >
			
			<side-slip class="sideSlipBox" @remove="onRemove(item.store_id,1)" v-for="(item,index) in  listData1"  :key="index">
				<view class="box">
					<view class="img-box">
						<image class="imgs" :src="item.store_img"></image>
						
					</view>
					<view class="uni-right">
						<view class="uni-first"> {{item.store_name}} </view>
						<view class="uni-third">{{item.address}} </view>
						<view class="uni-third">{{item.info}}</view>
					</view>
				</view>
			
			</side-slip>
		</view>
		<!-- 服务 -->
	
		<view class="showtips" v-if="tipflag">{{tipMsg}}</view>
	</view>
</template>

<script>
	import SideSlip from '@/components/side-slip/index'
	import app  from '../../../App.vue'
	export default {
		data() {
			return {
				tipflag:false,
				tipMsg:'',
				titleActiveIndex:0,
				titleList:['商品','店铺'],
				
				listData:[],//商品
				listData1:[],//店铺列表
				pages:1,
				pageV:1,
				types:1,//商品1  店铺2
				
			}
		},
		onLoad(){
			this.getData()
		},
		components: {
			'side-slip': SideSlip
		},
		onReachBottom(){
			if(this.pagesV==0){
				this.pages+=1;
				if(this.titleActiveIndex==0){
						this.getData()
				}
				else if(this.titleActiveIndex==1){
					// 店铺
					this.getData1()
				}
				
				
			}
			
		},
		methods: {
			//商品
			getData(){
			   
				let that=this;
				that.$http.post('mini/v1/user/mycollections',{
					typeid:1,
					page:that.pages
				},(res)=>{
					if(res.state==0){
						that.pagesV=res.data.is_request;
						if(res.data.is_request==0){
							let aa = res.data.list;
							aa.map((res2)=>{
									res2.goods_img=app.globalData.imgPrefixUrl+res2.goods_img
							})
							console.log(aa)
							let bb = that.listData;
							that.listData = bb.concat(aa);
							console.log(that.listData)
						}
					}
					
				})
			},
			 // 门店收藏
			getData1(){
				let that=this;
				that.$http.post('mini/v1/user/mycollections',{
					typeid:2,
					page:that.pages
				},(res)=>{
					if(res.state==0){
						that.pagesV=res.data.is_request;
						if(res.data.is_request==0){
							let aa = res.data.list;
							console.log(aa)
							aa.map((res2)=>{
									res2.store_img=app.globalData.imgPrefixUrl+res2.store_img
							})
						
							let bb = that.listData1;
							that.listData1 = bb.concat(aa);
							console.log(that.listData1)
							console.log(22222)
							
						}
					}
					
				})
			},
			onRemove(id,types) {
				// 收藏
					let that=this;
					let url='';
					let items={}
					if(types==0){
						url='mini/v1/goods/goodsCollec';
						items={goods_id:id};
					}else{
						url='mini/v1/store/collec';
						items={store_id:id};
					}
					that.$http.post(url,items,(res)=>{
						if(res.state==0){
								 that.tipflag=true ;
								 that.tipMsg='取消收藏成功';
								 setTimeout(()=>{
										that.tipflag=false
						    },3000)
							that.pages=1;
							that.pageV=1;
							if(types==0){
								
								that.listData=[]
								// 店铺收藏取消
								that.getData();
							}else if(types==1){
								that.listData1=[]
								// 店铺收藏取消
								that.getData1();
							}
							
						}
					})
				
				
			},
			// 头部点亮
			getTitleActive(index){
				this.titleActiveIndex=index;
				if (this.titleActiveIndex==0){
					   this.listData=[];
					   this.pages=1;
					   this.getData();
					   console.log(111)
				}
				else if (this.titleActiveIndex==1){
					
					this.pages=1;
					this.listData1=[];
					this.getData1();
				}
			},
		}
	}
</script>

<style scoped lang="scss">
@import "../../../static/scss/common.scss";
// @include ellipsis(1);
.uni-collect{
	.uni-list{
		.sideSlipBox{
			}
			.box{
				width: 750rpx;
				box-sizing: border-box;
				padding:30rpx;
				display: flex;
				height: 216rpx;;
				justify-content: space-between;
				.img-box{
					width: 150rpx;
					height: 150rpx;
					margin-right: 30rpx;
					position: relative;
					left:0rpx;
					top:0rpx;
					.imgs{
						display: block;
						width: 150rpx;
						height: 150rpx;
						border-radius: 8rpx;
			         }
					 .uselessImg{
						  width: 110rpx;
						  height: 110rpx;
						  background: #000000;
						  opacity: 0.7;
						  border-radius: 50%;
						  text-align: center;
						  position: absolute;
						  left:20rpx;
						  top:20rpx;
						  z-index: 30;
						  line-height: 110rpx;
						  font-size: 26rpx;
						  color: #fff;
					 }
				}
			
			.uni-right{
				flex:1;
				display: flex;
				height: 150rpx;;
				flex-direction: column;
				justify-content: space-between;
				.uni-first{
					@include ellipsis(1);
					font-weight: bold;
					color: #000;
					font-size: 26rpx;;
				}
				.uni-firsts{
					@include ellipsis(1);
					display: flex;
					justify-content: space-between;
					.lefts{
						font-weight: bold;
						color: #000;
						font-size: 28rpx;;
					}
					.rights{
						color: #555555;
						font-size: 24rpx;;
					}
				}
				.uni-third{
					color: #555555;
					font-size: 24rpx;
					@include ellipsis(2);
					.normal{
						color: #555555;
						font-size: 24rpx;
						margin-left:20rpx;
					}
					.red{
						color: #FF0000;
						font-weight: bold;
						font-size: 32rpx;;
					}
					.money{
						color: #FF0000;
						font-weight: bold;
						font-size: 42rpx;
					}
				}
				.uni-second{
					@include ellipsis(1);
					color: #FF0000;
					font-size: 24rpx;;
					.money{
						font-size: 32rpx;;
					}
				}
			}
			.uni-rightLost{
				.uni-first{
					color: #9A9A9A;
				}
				.uni-second{
					color: #9A9A9A;
				}
			}
			
		}
		
	}
}
.titleBox{
		position: fixed;
		left: 0rpx;
		top:0rpx;
		z-index: 30;
		background-color: #fff;
		width: 750rpx;
		height: 100rpx;
		padding:0rpx 100rpx;
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 28rpx;border-bottom: 2rpx solid #f2f2f2;
		.titleList{
			width: 230rpx;
			text-align: center;
			display: flex;
			flex-direction: column;
			align-items: center;
			height: 60rpx;
			justify-content: space-between;
			
		}
		.field{
			color:#B6B6B6 ;
		}
		.fieldActive{
			color: #FF9A9E;
		}
		.lines{
			width: 50rpx;
			height: 6rpx;
			background: #FF6A6C;
			border-radius: 2rpx;
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
