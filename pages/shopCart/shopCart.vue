<template>
	<view class="uni-shopcart">
		
		<view class="listBox"  v-for="(item,index) in cartList" :key="index">
			<view class="listTitle">
				<view class="logoBox" @tap.stop="shopNameAllChoice(index)">
					<image v-if="!item.allChoice" class="logos" src="../../static/image/shopCart-btn.png"></image>
					<image v-if="item.allChoice" class="logos" src="../../static/image/shopCart-btnActive.png"></image>
				</view>
				<view class="names">{{item.store_name}}
                 </view>
			</view>
			<side-slip class="sideSlipBox"   v-for="(items,indexs) in item.infos" :key="indexs" @remove="onRemove(index,indexs,items.cart_id)">
			<!-- <side-slip class="sideSlipBox" @remove="onRemove(index)" v-for="(item,index) in  3"  :key="index"> -->
				<view class="list">
					 <view class="uni-lefts" @tap.stop="signalChoice(index,indexs)">
						 <image v-if="!items.choiceFlag" class="imsgs" src="../../static/image/shopCart-btn.png"></image>
						 <image v-if="items.choiceFlag" class="imsgs" src="../../static/image/shopCart-btnActive.png"></image>
					 </view>
					<image class="uni-centers" :src="items.img"></image>
					 <view class="uni-rights">
						  <view class="firsts">{{items.name}}</view>
						  <view class="third">
							  <view class="left">¥{{items.price}}</view>
							  <view class="right">
									  <view class="zuo" @tap.stop="getGoodsNum(1,index,indexs,items.cart_id,items.num)">-</view>
									  <input class="zhong"  type="number" v-model="items.num" :maxlength="2" @blur="getGoodNumsInput($event,index,indexs,items.cart_id,items.num)"></input>
									  <view class="you"  @tap.stop="getGoodsNum(2,index,indexs,items.cart_id,items.num)">+</view>
							  </view>
						  </view>
					 </view>
				</view>
			</side-slip>
				<!-- </side-slip> -->
		</view>
			<view  class="footer">
				<!-- <view class="uni-left" @tap.stop="getAllChoice">
					<image v-if="!allChoiceFlag" class="imsgs" src="../../static/image/shopCart-btn.png"></image>
					<image v-if="allChoiceFlag" class="imsgs" src="../../static/image/shopCart-btnActive.png"></image>
				    <view class="fields">全选</view>
				</view> -->
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
				// allChoiceFlag:false,
				// 购物车数量
				goodNum:1,
				allGoodsPrice:'',
				allGoodNum:0,
				cartList:[],
				cartPages:1,
				cartPageV:1
			}
		},
		onLoad(options){
			
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
			// 红包id  以及 哦购物车进行详情页的数据主要删除的是时间
			 uni.removeStorageSync('serverRedId');
			 uni.removeStorageSync('dataList');
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
				that.$http.post('mini/v1/service/cartlist',{},(res)=>{
					if(res.state==0){
						 if(res.data.is_request==0){
						 	let aa = res.data.list;
						 	aa.map((res)=>{
								// 店铺的全选
								res.allChoice=false;
								for(let i=0;i<=res.infos.length-1;i++){
									res.infos[i].img=app.globalData.imgPrefixUrl+res.infos[i].img;
									// 对每个商品的选中
									res.infos[i].choiceFlag=false;
								}
						 	})
						 	that.cartList = aa
							
						 }else if(res.data.is_request==1){
							 if(type==2){
								 that.cartList=[]
							 }
							 
						 }
						
					}
				})
			},
			// 底部,全选
			
			// getAllChoice(){
			// 	let that=this;
			// 	that.allChoiceFlag=(!that.allChoiceFlag);
			// 	// 当全选 按钮被按下了
			// 	if(that.allChoiceFlag==true){
			// 		that.cartList.map((item,index,array)=>{
			// 			const bigItem={
			// 				...this.cartList[index],
			// 				allChoice:true
			// 			}
						
			// 			// 让所有的门店title 都亮起来
			// 			that.$set(this.cartList,index,bigItem);
			// 			that.cartList[index].infos.map((items,indexs,arrays)=>{
			// 				 const smallItem={
			// 					 ...items,
			// 					 choiceFlag:true
			// 				 }
			// 				 // 让门店下面的所有按钮亮起来
			// 				  that.$set(that.cartList[index].infos,indexs,smallItem);
			// 			})
			// 		})
			// 	}else if(that.allChoiceFlag==false){
			// 		// 关闭了全选按钮
			// 		that.cartList.map((item,index,array)=>{
			// 			const bigItem={
			// 				...this.cartList[index],
			// 				allChoice:false
			// 			}
			// 			this.$set(this.cartList,index,bigItem);
			// 			this.cartList[index].infos.map((items,indexs,arrays)=>{
			// 				 const smallItem={
			// 					 ...items,
			// 					 choiceFlag:false
			// 				 }
			// 				 this.$set(this.cartList[index].infos,indexs,smallItem);
			// 			})
			// 		})
			// 	}
			// 	// 计算所有的金额
			// 	this.getAllMoney()
				
			// },
			// 购物车数量增加减少
			getGoodsNum(style,index,indexs,ids,nums){
			 let numbers=nums;
				if(style ==1 && numbers>1){
				   const  items={
					   ...this.cartList[index].infos[indexs],
					   num:numbers-=1,
				   }
				   this.$set(this.cartList[index].infos,indexs,items)
				}
				else if (style ==2 && numbers<99){
                     const  items={
						   ...this.cartList[index].infos[indexs],
						   num:numbers+=1,
                     }
                     this.$set(this.cartList[index].infos,indexs,items)				
				}
				// 对数量 进行修改
				if(numbers>=1  && numbers<99){
					this.$http.post('mini/v1/service/cartchange',{
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
			getGoodNumsInput(e,index,indexs,ids,nums){
				let numbers=nums;
				if(numbers<1){
					numbers=1;
				}
				const  items={
				   ...this.cartList[index].infos[indexs],
				   num:numbers,
				}
				this.$set(this.cartList[index].infos,indexs,items)	;
				// 对数量 进行修改
		
					this.$http.post('mini/v1/service/cartchange',{
							cart_id:ids,
							cart_num:numbers
					},(res)=>{
						if(res.state==0){
							
						}
					})
				// 计算所有的金额
				this.getAllMoney()
				
			},
			// 计算所有的价格
			getAllMoney(){
				this.allGoodsPrice=0.00
				let that=this;
				this.cartList.map(res=>{
					  let money=0.00;
					res.infos.map(ress=>{
						if(ress.choiceFlag==true){
							 money+=ress.num*ress.price;
							let nums=ress.num;
							let prices=ress.price;
							that.keepTwoDecimalFull(money)
						}
					})
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
			 
			},
			// 计算所有的数量
			getAllNumber(){
				this.allGoodNum=0;
				this.cartList.map(res=>{
					res.infos.map(ress=>{
						if(ress.choiceFlag==true){
							 this.allGoodNum+=1;
						}
					})
				})
			},
			// 选中店铺,关闭其他店铺的所有内容
			closeBtn(index){
				this.cartList.map((item1,index1,array1)=>{
					if(index!=index1){
						// 对除了这个的其他店铺title消失
						const items={
							...this.cartList[index1],
							allChoice:false
						}
						this.$set(this.cartList,index1,items)
						item1.infos.map((items2,index2,array2)=>{
							const item2={
								...this.cartList[index1].infos[index2],
								choiceFlag:false
							}
							this.$set(this.cartList[index1].infos,index2,item2);
						})
					}
				})
			},
			// 购物车单选按钮
			signalChoice(index,indexs){
				// 除了被选中的店铺,其他的都消失
			    this.closeBtn(index);
				// 单一 的选中
				if(this.cartList[index].infos[indexs].choiceFlag==false){
					const item={
						...this.cartList[index].infos[indexs],
						choiceFlag:true
					}
					this.$set(this.cartList[index].infos,indexs,item);
				}else if(this.cartList[index].infos[indexs].choiceFlag==true){
					const item={
						...this.cartList[index].infos[indexs],
						choiceFlag:false
					}
					this.$set(this.cartList[index].infos,indexs,item);
				}
				// 如果全部都被选中了,店铺的中的按钮会亮
				let aa=this.cartList[index].infos;
					let aa1=aa.every(res=>{
						return res.choiceFlag==true
					})
					if(aa1==true){
						const items={
							...this.cartList[index],
							allChoice:true
						}
						this.$set(this.cartList,index,items)
					}else{
						const items={
							...this.cartList[index],
							allChoice:false
						}
						this.$set(this.cartList,index,items)
					}
					// // 底部的全选按钮
					// let cc=this.cartList.every(res=>{
					//      return	res.allChoice==true
					// })
					// if(cc==true){
					// 	 this.allChoiceFlag=true;
					// }else{
					// 	this.allChoiceFlag=false;
					// }
					// 计算所有的金额
					this.getAllMoney();
					this.getAllNumber();
					
			},
			// 商品店铺全选按钮
			shopNameAllChoice(index){
				  this.closeBtn(index)
				
				// 店铺选中里面所有的商品全部点亮
				if(this.cartList[index].allChoice==true){
					const items={
						...this.cartList[index],
						allChoice:false
				    }
				    this.$set(this.cartList,index,items);
					// 关闭的商品点亮 i作为他们的节点
					let i=0;
					this.cartList[index].infos.map(res=>{
						const itemss={
							...res,
							choiceFlag:false
						}
						this.$set(this.cartList[index].infos,i,itemss)
						i++;
					})
				}else{
					const items={
						...this.cartList[index],
						allChoice:true
					}
					this.$set(this.cartList,index,items);
					// 所有的商品点亮 i作为他们的节点
					let i=0;
					this.cartList[index].infos.map(res=>{
						const itemss={
							...res,
							choiceFlag:true
						}
						this.$set(this.cartList[index].infos,i,itemss)
						i++;
						
					})
				}
				// 所有的店铺被选中了,底部的购物选中全选
				// let cc=this.cartList.every(res=>{
				//      return	res.allChoice==true
				// })
				// if(cc==true){
				// 	 this.allChoiceFlag=true;
				// }else if(cc==false){
				// 	this.allChoiceFlag=false;
				// }
				// 计算所有的金额
				this.getAllMoney();
				this.getAllNumber();
			},
			// 跳到订单页面 
			btnSubmit(){
				let arrayId=[];
				this.cartList.map(res=>{
					res.infos.map(ress=>{
						if(ress.choiceFlag==true){
							uni.setStorageSync('store_id',res.store_id)
							arrayId=arrayId.concat(ress.cart_id)
						}
					})
				})
				this.$http.post('mini/v1/service/cartcheckbox',{
					cart_ids:arrayId.join(',')
				},(res)=>{
					if(res.state==0){
					   uni.setStorageSync('payAllMoney',this.allGoodsPrice)
						uni.navigateTo({
							url:'/pages/shopCart/submitOrder'
						})
					}
					
				})
				
			},
			// 购物车数据进行删除
			onRemove(index,indexs,id) {
				let that=this;
				that.$http.post('mini/v1/service/cartdel',{
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
		
		.listTitle{
			background-color: #fff;
			display: flex;
			height: 100rpx;
			align-items: center;
			padding-left: 30rpx;
			width: 750rpx;;
			box-sizing: border-box;
			.logoBox{
				width:50rpx;
				height: 50rpx;
			}
			.logos{
				display:block ;
				width: 34rpx;
				height: 34rpx;
				margin:8rpx ;
			}
			.names{
				color: #000000;
				font-size: 34rpx;
				font-weight: bold;
				margin-left: 12rpx;;
			}
			
		}
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
		.imsgs{
			display: block;
			width: 34rpx;
			height: 34rpx;
			margin:9rpx 20rpx 0rpx 0rpx;
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
