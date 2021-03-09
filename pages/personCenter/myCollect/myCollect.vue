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
		<side-slip class="sideSlipBox" @remove="onRemove(index)" v-for="(item,index) in  3"  :key="index">
			<view class="box">
				<view class="img-box">
					<image class="imgs" src="https://img9.51tietu.net/pic/2019-091200/ff1vqwm3q33ff1vqwm3q33.jpg"></image>
					
				</view>
				<view class="uni-right">
					<view class="uni-first"> 123</view>
				    <view class="uni-second">¥<text class="money">发送到大师傅第三帝国</text></view>
				</view>
			</view>
		
		</side-slip>
		<side-slip class="sideSlipBox" @remove="onRemove(index)" v-for="(item,index) in  2"  :key="index">
			<view class="box">
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
			<!-- <side-slip class="sideSlipBox" @remove="onRemove(index)" v-for="(item,index) in  listData"  :key="index">
				<view class="box">
					<image class="imgs" :src="item.url"></image>
					<view class="uni-right">
						<view class="uni-first"> {{item.title}} </view>
					    <view class="uni-second">¥<text class="money">{{item.price}}</text></view>
					</view>
				</view>
			
			</side-slip> -->
		</view>
		<view class="uni-list" v-if="titleActiveIndex==1" >
			<side-slip class="sideSlipBox" @remove="onRemove(item.store_id,1)" v-for="(item,index) in  listData1"  :key="index">
				<view class="box">
					<image class="imgs" :src="item.store_img"></image>
					<view class="uni-right">
						<view class="uni-first"> {{item.store_name}} </view>
					    <view class="uni-third">{{item.address}} </view>
						<view class="uni-third">{{item.info}}</view>
						<!-- <view class="uni-second">¥<text class="money">{{item.price}}</text></view> -->
					</view>
				</view>
			
			</side-slip>
		</view>
		<!-- 服务 -->
		<view class="uni-list" v-if="titleActiveIndex==2" >
			<side-slip class="sideSlipBox" @remove="onRemove(item.store_id,1)" v-for="(item,index) in  listData1"  :key="index">
				<view class="box">
					<image class="imgs" :src="item.store_img"></image>
					<view class="uni-right">
						<view class="uni-first"> {{item.store_name}} </view>
					    <view class="uni-third">{{item.address}} </view>
						<view class="uni-third">{{item.info}}</view>
						<!-- <view class="uni-second">¥<text class="money">{{item.price}}</text></view> -->
					</view>
				</view>
			
			</side-slip>
		</view>
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
				titleList:['商品','店铺','服务'],
				listData:[
					{
						url:'https://img9.51tietu.net/pic/2019-091200/ff1vqwm3q33ff1vqwm3q33.jpg',
						title:'小巨蛋野樱莓雪齿亮白清新口气去渍去黄牙膏 氨基酸健齿炫齿按压泵头式液体牙160g',
						price:23.99
					},
					{
						url:'https://img9.51tietu.net/pic/2019-091200/ff1vqwm3q33ff1vqwm3q33.jpg',
						title:'小巨蛋野樱莓雪齿亮白清新口气去渍去黄牙膏 氨基酸健齿炫齿按压泵头式液体牙160g',
						price:23.99
					},
					{
						url:'https://img9.51tietu.net/pic/2019-091200/ff1vqwm3q33ff1vqwm3q33.jpg',
						title:'小巨蛋野樱莓雪齿亮白清新口气去渍去黄牙膏 氨基酸健齿炫齿按压泵头式液体牙160g',
						price:23.99
					}
				],
				listData1:[],
				listData:[],
				pages:1,
				pageV:1
				
			}
		},
		onLoad(){
			this.getData1()
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
			getData1(){
			    // 门店收藏
				let that=this;
				that.$http.post('mini/v1/user/mycollections',{
					typeid:2,
					page:that.pages
				},(res)=>{
					if(res.state==0){
						that.pagesV=res.data.is_request;
						if(res.data.is_request==0){
							let aa = res.data.list;
							aa.map((res2)=>{
									res2.store_img=app.globalData.imgPrefixUrl+res2.store_img
							})
							console.log(aa)
							let bb = that.listData1;
							that.listData1 = bb.concat(aa);
							console.log(that.listData1)
						}
					}
					
				})
			},
			// 商品
			getData(){
				
			},
			onRemove(id,types) {
				// 收藏
					let that=this;				
					that.$http.post('mini/v1/store/collec',{
						store_id:id
					},(res)=>{
						if(res.state==0){
								 that.tipflag=true ;
								 that.tipMsg='取消收藏成功';
								 setTimeout(()=>{
										that.tipflag=false
						    },3000)
							if(types==1){
								that.pages=1;
								that.pageV=1;
								that.listData1=[]
								// 店铺收藏取消
								that.getData1();
							}else if(types==0){
								
							}
							
						}
					})
				
				
			},
			// 头部点亮
			getTitleActive(index){
				this.titleActiveIndex=index;
				if (this.titleActiveIndex==0){
					   this.listData=[];
					   this.getData();
				}
				else if (this.titleActiveIndex==1){
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
					@include ellipsis(2);
					font-weight: bold;
					color: #000;
					font-size: 26rpx;;
				}
				.uni-firsts{
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
