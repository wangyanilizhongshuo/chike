<template>
	<view class="uni-commissionDetailList">
		<view class="uni-titles">
			<view class="titles">
				{{msgList.remark}}        			
			</view>
			<view class="valBox"><text class="values" v-if="typeid==1">+</text><text class="values" v-if="typeid==2">-</text>{{msgList.amonut}}</view>
		</view>
		<view class="contentsBox">
			<view class="list">
				<view class="uni-left">会员编号</view>
				<view class="uni-right">{{msgList.uid}}</view>
			</view>
			 <view class="list">
				<view class="uni-left">会员昵称</view>
				<view class="uni-right">{{msgList.nickname}}</view>
			</view>
			<view class="list" v-if="brokerage_type==1">
				<view class="uni-left">服务名称</view>
				<view class="uni-right">{{msgList.service_name}}</view>
			</view>
			<view class="list" v-if="brokerage_type==2">
				<view class="uni-left">商品名称</view>
				<view class="uni-right">{{msgList.good_name}}</view>
			</view>
			<view class="list" v-if="brokerage_type==1"> 
				<view class="uni-left">医疗机构全称</view>
				<view class="uni-right">{{msgList.store_name}}</view>
			</view>
			<view class="list">
				<view class="uni-left">订单编号</view>
				<view class="uni-right">{{msgList.order_sn}}</view>
			</view>
			<view class="list">
				<view class="uni-left">支付时间</view>
				<view class="uni-right">{{msgList.pay_time}}</view>
			</view>
			<view class="list" v-if="brokerage_type==1" >
				<view class="uni-left">服务总价</view>
				<view class="uni-right">¥{{msgList.total}}元</view>
			</view>
			<view class="list">
				<view class="uni-left">应付金额</view>
				<view class="uni-right">¥{{msgList.total_price}}元</view>
			</view>
			<view class="list" v-if="brokerage_type==1" >
				<view class="uni-left">医疗机构佣金</view>
				<view class="uni-right">{{msgList.store_yongjin_real}}元</view>
			</view>
			<view class="list" v-if="brokerage_type==1">
				<view class="uni-left">代言人折扣</view>
				<view class="uni-right">{{msgList.daiyan_yongjin_real}}元</view>
			</view>
			<view class="list" v-if="brokerage_type==2">
				<view class="uni-left">代言人折扣</view>
				<view class="uni-right">{{msgList.daiyan_yongjin}}元</view>
			</view>
			<view class="list"  v-if="brokerage_type==1">
				<view class="uni-left">合伙人佣金</view>
				<view class="uni-right">{{msgList.hehuo_yongjin_real}}元</view>
			</view>
			<view class="list"  v-if="brokerage_type==2">
				<view class="uni-left">合伙人佣金</view>
				<view class="uni-right">{{msgList.hehuo_yongjin}}元</view>
			</view>
			<view class="list" v-if="brokerage_type==1">
				<view class="uni-left">平台佣金</view>
				<view class="uni-right">{{msgList.pingtai_yongjin_real}}元</view>
			</view>
			<view class="list">
				<view class="uni-left">实付金额</view>
				<view class="uni-right">¥{{msgList.total_price}}元</view>
			</view>
			<view class="list">
				<view class="uni-left">获得佣金</view>
				<view class="red">¥{{msgList.amonut}}元</view>
			</view>
			<!-- <view class="list">
				<view class="uni-left">获得专属商品兑换券</view>
				<view class="red">3份</view>
			</view> -->
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				index:'',
				link_type:'',
				link_id:'',
				msgList:[],
				brokerage_type:''
			}
		},
		onLoad(options){
			this.setData(options);
			console.log(options)
			this.getData()
		},
		methods:{
				getData(){
					let that=this;
					that.$http.post('mini/v1/user/brokerageinfo',{
						link_type:that.link_type,
						link_id:that.link_id,
						brokerage_type:that.brokerage_type
					},(res)=>{
						if(res.state==0){
							that.msgList=res.data.list[0]
							console.log(that.msgList)
						}
					})
				}
		}
	}
</script>

<style scoped lang="scss">
	@import "../../../static/scss/common.scss";
	.uni-commissionDetailList{
		background-color: #f2f2f2;
		.uni-titles{
			color: #000000;
			font-size: 26rpx;
			width: 750rpx;
			height: 227rpx;
			text-align: center;
			border-top:1rpx solid #f2f2f2;
			background-color: #fff;
			box-sizing: border-box;
			padding:0rpx  100rpx;
			.titles{
				font-size: 26rpx;
				color: 26rpx;
				margin:36rpx 0rpx 43rpx;
			}
			.valBox{
				color: #2E2E2E;
				font-size: 42rpx;
			.values{
				
			}
		}
		}
	}
.contentsBox{
	width: 740rpx;
	margin-top:18rpx;
	background-color: #fff;
	margin-bottom:50rpx;
	.list{
		width: 750rpx;
		height: 90rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding:0rpx 30rpx;
		box-sizing: border-box;
		.uni-left{
			color:#000;
			font-size:26rpx;
		}
		.uni-right{
			color:#000;
			font-size:26rpx;
		}
		.red{
			color: #FF0000;
		}
	}
}
</style>
