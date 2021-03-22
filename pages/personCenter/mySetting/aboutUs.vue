<template>
	<view class="uni-balanceRule">
		<view class="listbox">
			<rich-text class="list" :nodes="msgData"></rich-text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				msgData:[
					
				   ]
			}
		},
		onLoad(){
			
			this.getData();
		},
		methods:{
		    getData(){
			   let that=this;
			   that.$http.post('mini/v1/user/aboutUs',{
				   status:1
			   },(res)=>{
				   if(res.state==0){
					   that.msgData=res.data.list.content;
					   console.log(res)
				   }
			   })
			}
			
		}
		
	}
</script>

<style scoped lang="scss">
	@import "../../../static/scss/common.scss";
	.uni-balanceRule{
		width: 750rpx;
		padding:40rpx;
		box-sizing: border-box;
		.listbox{
			.list{
				color: #888888;
				font-size: 28rpx;
				line-height: 50rpx;;
			}
		}
	}
</style>
