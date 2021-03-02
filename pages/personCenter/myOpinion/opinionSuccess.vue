<template>
	<view class="uni-opinionSucess">
		<view class="boxBg">
			<image class="imgs" src="http://zxyp.hzbixin.cn/files/33401608261677488.jpg"></image>
		</view>
		<view class="word" v-if="occur" >提交成功</view>
		<view class="word" v-if="!occur">提交失败</view>
		<!-- <view class="word">{{name}}</view> -->
		<view class="footer" @tap.stop="jumps">返回主页面</view>
	</view>
</template>
<script>
	export default {
		 data () {
			return { 
				typesName:12,
				name:'',
				occur:true
				
				}
		},
		onLoad(options){
			this.setData(options);
			
			if(this.typesName==1){
				this.name='意见反馈'
			}else if (this.typesName==2){
				this.name='设置交易密码'
			}
			else if (this.typesName==3){
				this.name='佣金转余额';
			}
			else if (this.typesName==4){
				this.name='余额转赠';
			}
			else if (this.typesName==5){
				this.name='佣金转赠';
			}
			else if(this.typesName==6){
				this.name='佣金提现';
			}
			else if(this.typesName==7){
				this.name='店铺入驻';
			}
			else if(this.typesName==8){
				this.name='添加地址';
			}
			else if(this.typesName==9){
				this.name='修改地址';
			}
			else if(this.typesName==10){
				this.name='余额支付';
			}
			else if(this.typesName==11){
				this.name='微信支付';
			}
			else if(this.typesName==12){
				this.name='微信支付';
				this.occur=false;
				
			}
			else if(this.typesName==13){
				this.name='服务订单评价';
			}
			else if(this.typesName==14){
				this.name='商品购买成功';
			}
			else if(this.typesName==15){
				this.name='商品购买成功';
			}
			else if(this.typesName==16){
				this.name='商品购买失败';
				this.occur=false;
				
			}
			uni.setNavigationBarTitle({
				 title:this.name
			})
			
		},
		methods:{
			jumps(){
				uni.switchTab({
					url:'/pages/index/index'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.uni-opinionSucess{
		width: 750rpx;
		text-align: center;
		position: relative;
		left:0rpx;
		top:0rpx;
		height: 100vh;;
		.word{
			color: #3B3B3B;
			font-size: 28rpx;;
			
		}
		.boxBg{
			.imgs{
				display: block;
				width: 586rpx;
				height: 406rpx;
				margin: 134rpx  82rpx 0rpx;
			}
		}
	}
	.footer{
		width: 690rpx;
		height: 90rpx;
		text-align: center;
		line-height: 90rpx;
		background: #FF9A9E;
		border-radius: 45rpx;
		position: fixed;
		color: #fff;
		left:30rpx;
		z-index:20;
		bottom:30rpx;
	}
	
</style>
