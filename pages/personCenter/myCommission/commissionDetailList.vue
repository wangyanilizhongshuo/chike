<template>
	<view class="uni-commissionDetailList">
		<view class="uni-titles">
			<view class="titles">
				小巨蛋野樱莓雪齿亮白清新口气去渍去黄牙膏 氨基酸健齿炫齿按压泵头式液体牙160g          			
			</view>
			<view class="valBox"><text class="values">+</text>¥25</view>
		</view>
		<view class="contentsBox">
			<view class="list">
				<view class="uni-left">会员编号</view>
				<view class="uni-right">15685135855</view>
			</view>
			 <view class="list">
				<view class="uni-left">会员昵称</view>
				<view class="uni-right">无敌元气妹</view>
			</view>
			<view class="list">
				<view class="uni-left">服务名称</view>
				<view class="uni-right">超声波美白(豪华套装)</view>
			</view>
			<view class="list">
				<view class="uni-left">医疗机构全称</view>
				<view class="uni-right">VVGGH口腔医疗机构(下沙江滨店)</view>
			</view>
			<view class="list">
				<view class="uni-left">订单编号</view>
				<view class="uni-right">15685135855</view>
			</view>
			<view class="list">
				<view class="uni-left">支付时间</view>
				<view class="uni-right">2020年12月4日13:12:51</view>
			</view>
			<view class="list">
				<view class="uni-left">服务总价</view>
				<view class="uni-right">¥6743元</view>
			</view>
			<view class="list">
				<view class="uni-left">应付金额</view>
				<view class="uni-right">¥¥6000元元</view>
			</view>
			<view class="list">
				<view class="uni-left">医疗机构折扣</view>
				<view class="uni-right">98折</view>
			</view>
			<view class="list">
				<view class="uni-left">代言人折扣</view>
				<view class="uni-right">95折</view>
			</view>
			<view class="list">
				<view class="uni-left">合伙人折扣</view>
				<view class="uni-right">95折</view>
			</view>
			<view class="list">
				<view class="uni-left">平台折扣</view>
				<view class="uni-right">85折</view>
			</view>
			<view class="list">
				<view class="uni-left">实付金额</view>
				<view class="uni-right">¥6743元</view>
			</view>
			<view class="list">
				<view class="uni-left">获得佣金</view>
				<view class="red">¥6743元</view>
			</view>
			<view class="list">
				<view class="uni-left">获得专属商品兑换券</view>
				<view class="red">3份</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				index:''
			}
		},
		onLoad(options){
			this.setData(options);
		},
		methods:{
				
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
