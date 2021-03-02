<template>
	<view class="uni-shopcart">
		
		<view class="listBox"  >
		
			<side-slip class="sideSlipBox" v-for="(item,index) in cartList" :key="index"  @remove="onRemove(index,item.cart_id)">
			<!-- <side-slip class="sideSlipBox" @remove="onRemove(index)" v-for="(item,index) in  3"  :key="index"> -->
				<view class="list">
					 <view class="uni-lefts" @tap.stop="signalChoice(index)">
						 <image v-if="!item.choiceFlag" class="imsgs" src="../../static/image/shopCart-btn.png"></image>
						 <image v-if="item.choiceFlag" class="imsgs" src="../../static/image/shopCart-btnActive.png"></image>
					 </view>
					<image class="uni-centers" :src="item.goods_img"></image>
					 <view class="uni-rights">
						  <view class="firsts">{{item.goods_name}}</view>
						  <view class="third">
							  <view class="left">¥{{item.user_price}}</view>
							  <view class="right">
									  <view class="zuo" @tap.stop="getGoodsNum(1,index,item.cart_id,item.cart_num)">-</view>
									  <input class="zhong"  type="number" v-model="item.cart_num" :maxlength="2" @blur="getGoodNumsInput($event,index,item.cart_id)"></input>
									  <view class="you"  @tap.stop="getGoodsNum(2,index,item.cart_id,item.cart_num)">+</view>
							  </view>
						  </view>
					 </view>
				</view>
			</side-slip>
				<!-- </side-slip> -->
		</view>
			<view  class="footer">
				<view class="uni-left" @tap.stop="getAllChoice">
					<image v-if="!allChoiceFlag" class="imsgs" src="../../static/image/shopCart-btn.png"></image>
					<image v-if="allChoiceFlag" class="imsgs" src="../../static/image/shopCart-btnActive.png"></image>
				    <view class="fields">全选</view>
				</view>
				<view class="uni-center">¥<text class="mon"> {{allGoodsPrice ||0.00}}</text></view>
				<view class="uni-right"  @tap.stop="btnSubmit">结算 ({{allGoodNum}})</view>
			</view>	
			<view style="width: 750rpx;height: 170rpx;background-color: #f2f2f2;"></view>
		</view>
</template>

<script>
	import SideSlip from '@/components/side-slip/del'
	import app from '../../App.vue'
	export default {
		 data () {
			return { 
				
				
				// 全选
				 allChoiceFlag:false,
				// 购物车数量
				goodNum:1,
				allGoodsPrice:123,
				allGoodNum:0,
				cartList:[],
				cartPages:1,
				cartPageV:1,
				
			}
		},
		onLoad(options){
			 uni.removeStorageSync('serverRedId');
			 uni.removeStorageSync('serverRedStyle');
			 uni.removeStorageSync('serverRedValue');
			
		},
		onShareAppMessage: function () {
		    let _this = this;
		    return {
		      title: "莱美牙",
		      path: "/pages/index/index?" + _this.getShareUrlParams()
		    };
		},
		onShow(){
			this.allGoodNum=0;
			this.allGoodsPrice=0;
			// 判断是否登录,
			let tokens=uni.getStorageSync('token')
			if(tokens){
				this.cartPages=1;
				this.cartPageV=1;
				this.cartList=[];
				this.getList();
			}
		},
		components: {
			'side-slip': SideSlip
		},
		methods:{
			// 获取购物车数据的列表
			getList(type){
				let that=this;
				that.$http.post('mini/v1/goods/cartList',{},(res)=>{
					if(res.state==0){
						 if(res.data.is_request==0){
						 	let aa = res.data.list;
						 	aa.map((res1)=>{
								// 店铺的全选
								res1.goods_img=app.globalData.imgPrefixUrl+res1.goods_img;
								// 对每个商品的选中
								res1.choiceFlag=false;
						 	})
						 	that.cartList = aa;
						 }else if(res.data.is_request==1){
							 if(type==2){
								 that.cartList=[]
							 }
						 }
					}
				})
			},
			// 底部,全选
			getAllChoice(){
				let that=this;
				that.allChoiceFlag=!(that.allChoiceFlag);
				console.log(that.allChoiceFlag)
				// 当全选 按钮被按下了
				if(that.allChoiceFlag==true){
					that.cartList.map((items,indexs,arrays)=>{
						that.$set(that.cartList[indexs],'choiceFlag',true)
					})
					console.log(that.cartList)
				}else if(that.allChoiceFlag==false){
					// 关闭了全选按钮
					that.cartList.map((items,indexs,arrays)=>{
						console.log(indexs)
						that.$set(that.cartList[indexs],'choiceFlag',false)
					})
					
				}
				// 计算所有的金额
				 this.getAllMoney()
				
			},
			// 购物车数量增加减少
			getGoodsNum(style,index,ids,nums){
			 let numbers=Number(nums) ;
				if(style ==1 && numbers>1){
				   this.$set(this.cartList[index],'cart_num',numbers-=1)
				}
				else if (style ==2 && numbers<99){
		           this.$set(this.cartList[index],'cart_num',numbers+=1)
                     // this.$set(this.cartList,index,items)				
				}
				// 对数量 进行修改
				if(numbers>=1  && numbers<99){
					this.$http.post('mini/v1/goods/changenum',{
							cart_id:ids,
							cart_num:numbers
					},(res)=>{
						if(res.state==0){
							
						}
					})
				}
				// 计算所有的金额
				this.getAllMoney()
				
			},
			// 购物车中间的输入
			getGoodNumsInput(e,index,ids){
				let numbers=Number(e.detail.value);
				 if(numbers<100 && numbers>1){
					 this.$set(this.cartList[index],'cart_num',numbers);
					 // 对数量 进行修改
					 	this.$http.post('mini/v1/goods/changenum',{
					 			cart_id:ids,
					 			cart_num:numbers
					 	},(res)=>{
					 		if(res.state==0){
					 		}
					 	})
				 }
				// 计算所有的金额
				this.getAllMoney()
				
			},
			// 计算所有的价格
			getAllMoney(){
				this.allGoodsPrice=0.00
				let that=this;
				let money=0.00;
				this.cartList.map(res=>{
					if(res.choiceFlag==true){
						money+=res.cart_num*res.user_price;
						let nums=res.cart_num;
						let prices=res.user_price;
						that.keepTwoDecimalFull(money)
					}
				})
			},
		 masss(arg1, arg2) {
			    var m = 0, s1 = arg1.toString(), s2 = arg2.toString();
			    try { m += s1.split(".")[1].length } catch (e) { }
			    try { m += s2.split(".")[1].length } catch (e) { }
			   console.log(Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m)) 
			},
			
			// 价格处理的方法
		   keepTwoDecimalFull(num) {
			  var result = parseFloat(num);
			  if (isNaN(result)) {
			    return false;
			  }
			  result = Math.round(num * 100) / 100;
			  var s_x = result.toString(); //将数字转换为字符串
			 
			  var pos_decimal = s_x.indexOf('.'); //小数点的索引值
			
			  // 当整数时，pos_decimal=-1 自动补0
			  if (pos_decimal < 0) {
			    pos_decimal = s_x.length;
			    s_x += '.';
			  }
		
			  // 当数字的长度< 小数点索引+2时，补0
			  while (s_x.length <= pos_decimal + 2) {
			    s_x += '0';
			  }
			  this.allGoodsPrice=s_x;
			  console.log(this.allGoodsPrice)
			},
			// 计算所有的数量
			getAllNumber(){
				this.allGoodNum=0;
				this.cartList.map(res=>{
					if(res.choiceFlag==true){
						 this.allGoodNum+=1;
					}
				})
			},
			// 购物车单选按钮
			signalChoice(index){
				// 单一 的选中
				// console.log(this.cartList)
				if(this.cartList[index].choiceFlag==false){
					this.$set(this.cartList[index],'choiceFlag',true);
				}else if(this.cartList[index].choiceFlag==true){
					this.$set(this.cartList[index],'choiceFlag',false);
				}
					// // 底部的全选按钮
				let cc=this.cartList.every(res=>{
					 if(res.choiceFlag==true){
						 return true
					 }
				})
				if(cc==true){
					 this.allChoiceFlag=true;
				}else{
					this.allChoiceFlag=false;
				}
				// 计算所有的金额
				this.getAllMoney();
				this.getAllNumber();
			},
			
			// 跳到订单页面 
			btnSubmit(){
				let arrayId=[];
				this.cartList.map(res=>{
					if(res.choiceFlag==true){
						arrayId=arrayId.concat(res.cart_id)
					}
				})
				this.$http.post('mini/v1/goods/cartbox',{
					cart_ids:arrayId.join(',')
				},(res)=>{
					if(res.state==0){
					   uni.setStorageSync('payAllMoney',this.allGoodsPrice)
						uni.navigateTo({
							url:'/pages/shopMall/confirm?source_type='+1
						})
					}
					
				})
				
			},
			// 购物车数据进行删除
			onRemove(index,id) {
				let that=this;
				that.$http.post('mini/v1/goods/cartdel',{
					cart_id:id
				},(res)=>{
					if(res.state==0){
						that.getList(2);
					}
				})
			},
			
		}
	}
</script>
<style scoped lang="scss"> 
    @import "../../static/scss/common.scss";
	// @include ellipsis(1);
.uni-shopcart{
	height: 100vh;
	background-color: #f2f2f2;
	position: relative;
	left:0rpx;
	top:0rpx;
	
	.listBox{
		border-top:2rpx solid #f2f2f2;
		
		
		.list{
			width: 750rpx;
			padding: 30rpx 65rpx;
			box-sizing: border-box;
			display: flex;
			align-items: center;
			justify-content: space-between;
			background-color: #fff;
			.uni-lefts{
				width: 50rpx;
				height: 50rpx;
				.imsgs{
					display: block;
					width: 34rpx;
					height: 34rpx;
				    margin-top:8rpx;
					margin-left:8rpx;
				}
			}
			.uni-centers{
				display: block;
				width: 150rpx;
				height: 150rpx;;
				margin-right:30rpx;
				border-radius: 8rpx;
			}
			.uni-rights{
				width: 370rpx;
				height: 150rpx;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				.firsts{
					color: #000000;
					font-size: 26rpx;
					line-height: 30rpx;;
					@include ellipsis(2);
				}
				
				.third{
					display: flex;
					justify-content: space-between;
					align-items: center;
					.left{
						color: #FF0000;
						font-size: 24rpx;
					}
					 @extend  %inputjj;
				}
				
			}
		}
		
	}
	
}
.footer{
	width: 750rpx;
	height: 170rpx;
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: fixed;
	padding: 0rpx 30rpx;
	box-sizing: border-box;
	left:0rpx;
	bottom: 0rpx;
	z-index:30;
	background-color: #fff;
	.uni-left{
		display: flex;
		align-items: center;
		height: 60rpx;
		width: 120rpx;
		.imsgs{
			display: block;
			width: 34rpx;
			height: 34rpx;
			margin:0rpx 20rpx 0rpx 0rpx;
		}
		.fields{
			color: #222222;
			font-size: 28rpx;
		}
		
	}
	.uni-center{
		width: 300rpx;
		text-align: center;
		color: #FF0000;
		font-size: 24rpx;;
		.mon{
			margin-left: 15rpx;;
			text-indent: 10rpx;
			font-size: 32rpx;;
		}
	}
	.uni-right{
		width: 300rpx;
		height: 90rpx;
		text-align: center;
		line-height: 90rpx;
		background: #FF9A9E;
		border-radius: 45rpx;
		font-size: 32rpx;
		font-family: PingFang SC;
		font-weight: bold;
		color: #FFFFFF;
	}
	
}
</style>
