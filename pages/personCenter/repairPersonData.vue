<template>
	<view class="uni-repairData">
		<!-- 修改姓名 -->
		<view class="NameBox styless" v-if="types==1">
			<view class="box">
				<input  class="inputStyle" v-model="name" />
			</view>
			<view  class="footer">
				确定
			</view>
		</view>
		<!-- 修改手机 号码 -->
		<view class="phoneBox styless" v-if="types==2">
			<view class="box">
				<input class="inputStyle" v-model="phone" />
			</view>
			<view  class="footer">
				确定
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				types:1,
				name:'王亚妮',
				phone:'15255132034',
				names:''
			}
		  },
		  onLoad(options){
			  this.setData(options);
			 if(this.types==1){
				 this.name=this.names;
			 }else if(this.types==2){
				 this.phone=this.names;
			 }
		  },
		  methods:{
			  
		  }
		}
</script>

<style scoped lang="scss">
	.uni-repairData{
		
		.styless{
			height: 100vh;
			background-color: #f2f2f2;
			.box{
				width: 750rpx;
				height: 98rpx;
				padding:0rpx 30rpx ;
				box-sizing: border-box;
				background-color: #fff;
				.inputStyle{
					width: 690rpx;
					height: 98rpx;
					line-height: 98rpx;;
				}
			}
			
		}
	}
	.footer{
		width: 750rpx;
		height: 140rpx;
		position: fixed;
		left:0rpx;
		bottom: 0rpx;
		background-color: #fff;
		line-height: 140rpx;
		text-align: center;
		color: #222222;
		font-size: 28rpx;
	}
</style>
