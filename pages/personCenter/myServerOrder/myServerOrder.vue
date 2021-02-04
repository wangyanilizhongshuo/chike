<template>
	<view class="uni-server">
		<view  class="titleBox">
			<view class="titleList"  v-for="(item,index) in titleList" :key="index" @tap.stop="getTitleActive(index)">
				<view :class="titleActiveIndex ==index?'fieldActive':'field'" >{{item}}</view>
				<view v-if="titleActiveIndex ==index" class="lines"></view>
		    </view>
		</view>
		<view style="width: 750rpx;height: 100rpx;"></view>
		<view class="allBox style1" v-if="titleActiveIndex==0">
			<view class="listBox">
				<view class="list" v-for="(item,index) in  willPayList" :key="index">
					<view class="uni-title">
						<view class="uni-left">{{item.store_name}}</view>
						<view class="tips" v-if="item.status==-1">已取消</view>
						<view class="tips" v-if="item.status==0">待付款</view>
						<view class="tips" v-if="item.status==1">待使用</view>
						<view class="tips" v-if="item.status==2">待评价</view> 
						<view class="tips" v-if="item.status==3">已完成</view>
		                <!-- <view class="tips">待使用</view> -->
					</view>
					<view class="uni-center"  v-for="(item1,index1) in item.service_info" :key="index1" @tap.stop="jumpsDetail1(item.so_id)"> 
						<image class="lefts" :src="item1.img" @tap.stop="jumps"></image>
					    <view class="right">
							<view class="first">{{item1.name}}</view>
							<view class="second">预约时间  {{item.appointment}}</view>
							<view class="third">¥<text class="money">{{item1.price}}</text></view>
						</view>
					</view>
					<view class="uni-bottom"  >
						<view class="fields stylesss" v-if="item.status==0 ||item.status==1" @tap.stop="cancelOrder(item.so_id,1)" >取消订单</view>
						
						<text class="field stylesss" @tap.stop="jumpsDetail1(item.so_id)">去支付</text>
					</view>
				</view>
			</view>
		</view>
		<view class="allBox style1" v-if="titleActiveIndex==1">
			<view class="listBox">
				<view class="list" v-for="(item,index) in  willDataList" :key="index">
					<view class="uni-title">
						<view class="uni-left">{{item.store_name}}</view>
						<view class="tips" v-if="item.status==-1">已取消</view>
						<view class="tips" v-if="item.status==0">待付款</view>
						<view class="tips" v-if="item.status==1">待使用</view>
						<view class="tips" v-if="item.status==2">待评价</view> 
						<view class="tips" v-if="item.status==3">已完成</view>
                        <!-- <view class="tips">待使用</view> -->
					</view>
					<view class="uni-center"  v-for="(item1,index1) in item.service_info" :key="index1" @tap.stop="jumpsDetail2(item.so_id)">
						<image class="lefts" :src="item1.img" ></image>
					    <view class="right">
							<view class="first">{{item1.name}}</view>
							<view class="second">预约时间  {{item.appointment}}</view>
							<view class="third">¥<text class="money">{{item1.price}}</text></view>
						</view>
					</view>
					<view class="uni-bottom"  >
						<view class="fields stylesss"  @tap.stop="cancelOrder(item.so_id,2)" >取消订单</view>
						<timePicker
							showType="yearToMinute"
							:beginDate=times
							endDate="2030-12-31"
							beginTime="06:00:00"
							endTime="23:59:59"
							@btnConfirm="btnConfirm" 
						>	
						<view v-if="item.status==1" class="fields stylesss" @tap="getRePairId(item.so_id)" >修改预约</view>
					</timePicker> 
						<text class="field stylesss" v-if="item.status==1" @tap.stop="jumpsDetail2(item.so_id)">去使用</text>
					</view>
				</view>
			</view>
		</view>
		<view class="willUseBox style1"  v-if="titleActiveIndex==2">
			<view class="listBox">
				<view class="list" v-for="(item,index) in  willAssesslist" :key="index">
					<view class="uni-title">
						<view class="uni-left">{{item.store_name}}</view>
						<view class="tips" v-if="item.status==2">待评价</view> 
					</view>
					<view class="uni-center"  v-for="(item1,index1) in item.service_info" :key="index1">
						<image class="lefts" :src="item1.img"></image>
					    <view class="right">
							<view class="first">{{item1.name}}</view>
							<view class="second">预约时间  {{item.appointment}}</view>
							<view class="third">¥<text class="money">{{item1.price}}</text></view>
						</view>
					</view>
					
					<view class="uni-bottom"><text class="field stylesss" @tap.stop="jumpsMsg(item.so_id,item.store_id)">去留言</text></view>
				</view>
			</view>
		</view>
		<view class="willUseBox style1"  v-if="titleActiveIndex==3">
			<view class="listBox">
				<view class="list" v-for="(item,index) in  allDataList" :key="index">
					<view class="uni-title">
						<view class="uni-left">{{item.store_name}}</view>
						<view class="tips" v-if="item.status==-1">已取消</view>
						<view class="tips" v-if="item.status==0">待付款</view>
						<view class="tips" v-if="item.status==1">待使用</view>
						<view class="tips" v-if="item.status==2">待评价</view> 
						<view class="tips" v-if="item.status==3">已完成</view>
				        <!-- <view class="tips">待使用</view> -->
					</view>
					<view class="uni-center"  v-for="(item1,index1) in item.service_info" :key="index1">
						<image class="lefts" :src="item1.img"></image>
					    <view class="right">
							<view class="first">{{item1.name}}</view>
							<view class="second">预约时间  {{item.appointment}}</view>
							<view class="third">¥<text class="money">{{item1.price}}</text></view>
						</view>
					</view>
					<!-- <view class="uni-bottom"  >
						<view class="fields stylesss" v-if="item.status==0 ||item.status==1" @tap.stop="cancelOrder(item.so_id,3)" >取消订单</view>
					</view> -->
					<!-- <view class="uni-bottom"><text class="field stylesss" @tap.stop="jumpsDetail(2)">去留言</text></view> -->
				</view>
			</view>
		</view>
		<view class="showtips" v-if="tipflag">{{tipMsg}}</view>
	</view> 
	
</template>
<script>
	import timePicker from '@/components/wing-time-selector/wing-time-selector.vue';
	import app  from '../../../App.vue'
	export default {
		data() {
			return {
				tipflag:false,
				tipMsg:'',
				titleActiveIndex:0,
				titleList:['待支付','待使用','待评价','已完成'],
				timeValue:'',
				pages:1,
				pageV:1,
				allDataList:[],//已完成
				willDataList:[],//待使用
				willPayList:[],//代付款
				willAssesslist:[],//待评价
				repairId:''
			}
		},
		components:{
			timePicker,
		},
		onLoad(){
			// 代付款订单
			this.getwillPay()
		},
		onReachBottom(){
			if(this.pagesV==0){
				this.pages+=1;
				if(this.titleActiveIndex==0){
						this.getwillPay()
				}
				else if(this.titleActiveIndex==1){
					this.getWillList()
				}
				else if(this.titleActiveIndex==2){
					this.getAssessList();
				}else if(this.titleActiveIndex==3){
					this.getAllList();
				}
				
			}
			
		},
		computed:{
			times(){
				let date = new Date();
				let year=date.getFullYear(); //获取完整的年份(4位)
				let month= (date.getMonth()+1).toString().padStart(2,'0'); //获取当前月份(0-11,0代表1月)
				let day=(date.getDate()).toString().padStart(2,'0'); //获取当前日(1-31)
				return  year+'-'+month+'-'+day
			}
		},
		methods: {
			jumpsMsg(soId,storeId){
				uni.navigateTo({
					url:'/pages/personCenter/myServerOrder/giveAMsg?soId='+soId+'&storeId='+storeId
				})
			},
			// 头部点亮
			getTitleActive(index){
				this.pageV=1;
				this.pages=1;
				this.titleActiveIndex=index;
				if (this.titleActiveIndex==0){
					   this.willPayList=[];
					   this.getwillPay();
				}
				else if (this.titleActiveIndex==1){
					this.willDataList=[];
					this.getWillList();
				}else if(this.titleActiveIndex==2){
					this.willAssesslist=[];
					this.getAssessList();
				}else if(this.titleActiveIndex==3){
					this.allDataList=[];
					this.getAllList();
				}
			},
			// 去支付
			jumpsDetail1(id){
				uni.navigateTo({
					 url:'/pages/personCenter/myServerOrder/serverDetail?sord_id='+id+'&sType='+1
				})
			},
			// 去使用
			jumpsDetail2(id){
				uni.navigateTo({
					 url:'/pages/personCenter/myServerOrder/serverDetail?sord_id='+id+'&sType='+2
				})
			},
			jumpsDetail(type){
					// 使用
				if(type ==2){
					// 留言
					uni.navigateTo({
						url:'/pages/personCenter/myServerOrder/giveAMsg'
					})
				}
			
			},
			btnConfirm(e){
				e.month=e.month.padStart(2,0);
				e.day=e.day.padStart(2,0);
				e.hour=e.hour.padStart(2,0);
				e.minute=e.minute.padStart(2,0);
				this.timeValue=e.year+'-'+e.month+'-'+e.day+' '+e.hour+':'+e.minute;
				console.log(this.timeValue)
				this.repaird();
			},
			//修改预约时间获取id
			getRePairId(id){
				this.repairId=id;
			},
			repaird(){
				let that=this;
				that.$http.post('mini/v1/service/updateappointment',{
					so_id:that.repairId,
					appointment:that.timeValue
				},(res)=>{
					if(res.state==0){
						that.tipflag=true ;
						that.tipMsg='时间修改成功';
						setTimeout(()=>{
								that.tipflag=false
						},3000)
					}
				})
			},
			// 取消订单
			cancelOrder(values,types){
				let that=this;
				uni.showModal({
				    title: '提示',
				    content: '取消订单？',
				    success: function (res) {
				        if (res.confirm) {
				            that.$http.post('mini/v1/service/cancelorder',{
								so_id:values
							},(res)=>{
								if(res.state==0){
									that.pageV=1;
									that.pages=1;
									if(types==1){
										that.willPayList=[];
										that.getwillPay();
									}else if (types==2){
										that.willDataList=[];
										that.getWillList();
									}else if (types==3){
										that.allDataList=[];
										that.getAllList();
									}
								}
							})
				        } else if (res.cancel) {
				            console.log('用户点击取消');
				        }
				    }
				});
			},
			// 已经完成的订单
			getAllList(){
				let that=this;
				that.$http.post('mini/v1/service/orderlist',{
					typeid:3,
					page:that.pages
				},(res)=>{
					if(res.state==0){
						that.pagesV=res.data.is_request;
						if(res.data.is_request==0){
							let aa = res.data.list;
							aa.map((res)=>{
								res.service_info.map(data=>{
									data.img=app.globalData.imgPrefixUrl+data.img
								})
							})
							let bb = that.allDataList;
							that.allDataList = bb.concat(aa);
							console.log(that.allDataList)
						}
					}
				})
			},
			// 待使用
			getWillList(){
				let that=this;
				that.$http.post('mini/v1/service/orderlist',{
					page:that.pages,
					typeid:1
				},(res)=>{
					if(res.state==0){
						that.pagesV=res.data.is_request;
						if(res.data.is_request==0){
							let aa = res.data.list;
							aa.map((res)=>{
								res.service_info.map(data=>{
									data.img=app.globalData.imgPrefixUrl+data.img
								})
							})
							let bb = that.willDataList;
							that.willDataList= bb.concat(aa);
							console.log(that.willDataList)
						}
					}
				})
			},
			// 待评价、
			getAssessList(){
				let that=this;
				that.$http.post('mini/v1/service/orderlist',{
					page:that.pages,
					typeid:2
				},(res)=>{
					if(res.state==0){
						that.pagesV=res.data.is_request;
						if(res.data.is_request==0){
							let aa = res.data.list;
							aa.map((res)=>{
								res.service_info.map(data=>{
									data.img=app.globalData.imgPrefixUrl+data.img
								})
							})
							let bb = that.willAssesslist;
							that.willAssesslist= bb.concat(aa);
							console.log(that.willAssesslist)
						}
					}
				})
			},
			// 代付款
			getwillPay(){
				let that=this;
				that.$http.post('mini/v1/service/orderlist',{
					page:that.pages,
					typeid:0
				},(res)=>{
					if(res.state==0){
						that.pagesV=res.data.is_request;
						if(res.data.is_request==0){
							let aa = res.data.list;
							aa.map((res)=>{
								res.service_info.map(data=>{
									data.img=app.globalData.imgPrefixUrl+data.img
								})
							})
							let bb = that.willPayList;
							that.willPayList= bb.concat(aa);
							console.log(that.willPayList)
						}
					}
				})
			}
		}
	}
</script>
<style scoped lang="scss">
	@import "../../../static/scss/common.scss";
	.uni-server{
		background-color:#fff;
		height: 100vh;
	}
	.titleBox{
		position: fixed;
		left: 0rpx;
		top:0rpx;
		z-index: 30;
		background-color: #fff;
		width: 750rpx;
		height: 100rpx;
		padding:0rpx 75rpx;
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 28rpx;
		border-bottom: 2rpx solid #f2f2f2;
		.titleList{
			width: 200rpx;
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
	.style1{
		.listBox{
			background-color: #fff;
			.list{
				width: 750rpx;
				padding:30rpx ;
				box-sizing: border-box;
				.uni-title{
					display: flex;
					justify-content: space-between;
					align-items: center;
					.uni-left{
						font-weight: bold;
						color: #000;
						font-size: 32rpx;;
					}
					.tips{
						color: #FF6A6C;
						font-size: 24rpx;;
					}
					
				}
				.uni-bottom{
					height: 60rpx;
					display: flex;
					justify-content: flex-end;
					.fields{
						background:#fff ;
						color:#FF9A9E;
						margin-right:30rpx;
						border:2rpx solid #FF9A9E;
						box-sizing: border-box;
					}
					.stylesss{
						display: block;
						width: 160rpx;
						height: 60rpx;
						text-align: center;
						line-height: 60rpx;
						font-size: 28rpx;;
						border-radius: 30rpx;
					}
					.field{
						background: #FF9A9E;
						color:#fff;					
					}				
				}
				.uni-center{
					display: flex;
					height: 150rpx;
					margin:46rpx 0rpx 16rpx;
					.lefts{
						display: block;
						width: 150rpx;
						height: 150rpx;
						border-radius: 8rpx;
						margin-right: 20rpx;;
					}
					.right{
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						.first{
							color: #000000;
							font-size: 28rpx;
							font-weight: bold;
							
						}
						.second{
							color: #454545;
							font-size: 24rpx;;
						}
						
						.third{
							color: #FF0000;
							font-size: 32rpx;
							font-weight: bold;
							.money{
								font-size: 42rpx;
							};
						}
					}
				}
			}
			
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