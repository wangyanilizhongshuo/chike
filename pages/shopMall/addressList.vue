<template>
	<view class="uni-addressList">
		<view class="listBox">
			<side-slip class="sideSlipBox"  @remove="onRemove(items.id)" v-for="(items,indexs) in listData" :key="indexs">
				<view class="list"  @tap.stop="choices(items.id)" >
					<view class="uni-top">
						<view class="left">{{items.real_name}}</view>
						<view class="center">{{items.phone}}</view>
						<view  :class="items.is_default==1?'active':'wuse'" class="right" >默认</view>
					</view>
					<view class="uni-bottom">
						<view  class="left">{{items.detailAdd}}</view>
						<view  class="right" @tap.stop="getEdit(items)">编辑</view>
					</view>
				</view>
				</side-slip>
		</view>
		<view style="width: 750rpx;height: 90rpx;"></view>
		<view class="footer" @tap.stop="addJump">新增地址</view>
	</view>
</template>
<script>
	import SideSlip from '@/components/side-slip/del'
	export default {
		 data () {
			return { 
				defaultAddFlag:false,
				listData:[],
				from:''
			}
		 },
		 onLoad(options) {
			 this.setData(options)
		 },
		 onShow(){
			 this.getList(); 
		 },
		 components: {
		 	'side-slip': SideSlip
		 },
		 methods:{
			 addJump(){
				 uni.navigateTo({
				 	url:'/pages/shopMall/addAddress'
				 })
			 },
			 getList(){
				 let that=this;
				 that.$http.post('mini/v1/user/getaddress',{},(res)=>{
					 if(res.state==0){
						 that.listData=res.data;
						 that.listData.map((ress)=>{
							 ress.detailAdd=ress.province+ress.city+ress.district
						 })
						console.log(that.listData)
						 
					 }
				 })
			 },
			 //商品购物选中返回
			 choices(ids){
				 if(this.from=='shangpin'){
					 uni.setStorageSync('shangpinAddId',ids)
					 // if(uni.getStorageSync('shangpinAddId')!=''){
						  uni.navigateBack()
					 // }
				 }
			 },
			 // 选择默认地址
			 getDefault(ids){
				 this.$http.post('mini/v1/user/actaddress',{
					 act:'setdefault',
					 id:ids
				 },(res)=>{
					 if(res.state==0){
						 this.getList();
					 }
				 })
			 },
			 getEdit(items){
				 // uni.removeStorageSync('editAddress')
				 // uni.setStorageSync('editAddress',items)
				 uni.navigateTo({
				 	url:'/pages/shopMall/editAddress?name='+items.real_name+'&id='+items.id+'&phone='+items.phone+'&cityIndex='+items.province_id+'&cityName='+items.province+'&countyIndex='+items.city_id+'&countyName='+items.city+'&areaName='+items.district+'&areaIndex='+items.district_id+'&choiceAddress='+items.detailAdd+'&address='+items.datail+'&addDefault='+items.is_default
				 })
			 },
			 onRemove(ids) {
			 	this.$http.post('mini/v1/user/actaddress',{
				 act:'del',
				 id:ids
			 	},(res)=>{
					 if(res.state==0){
						 this.getList();
					 }
			 	})
			 	// this.listData.splice(index, 1)
			 },
			 // if (this.labelList[index].active == 0) {
			 // 					   const item = {
			 // 						 ...this.labelList[index],
			 // 						 active:1
			 // 					   };
			 //       this.$set(this.labelList, index, item);
		 }
    }
</script>

<style scoped lang="scss">
	 @import "../../static/scss/common.scss";
	 .uni-addressList{
		 background-color: #f2f2f2;
		 height: 100vh;
		 position: relative;
		 left:0rpx ;
		 top:0rpx;
		 .listBox{
			 .list{
				 width: 750rpx;
				 height: 170rpx;
				 background-color: #fff;
				 display: flex;
				 flex-direction: column;
				 padding:30rpx 50rpx;
				 box-sizing: border-box;
				 justify-content: space-between;
				 margin-bottom:10rpx;
				 .uni-bottom{
					 display: flex;
					 justify-content: space-between;
					 color: #222222;
					 font-size: 26rpx;
					 .right{
						background-color:#FF9A9E;
						width: 100rpx;
						height: 40rpx;
						color: #fff;
						text-align: center;
						line-height: 40rpx;
						border-radius: 30rpx;
					 }
				 }
				 .uni-top{
					 display: flex;
					 font-size: 26rpx;
					 align-items: center;
					 height: 60rpx;
					 .left{
						 color: #222222;
					 }
					 .center{
						 color: #888888;
						 margin:0rpx 25rpx;
					 }
					 .wuse{
						background: #FFFFFF;
						border: 2rpx solid #B6B6B6;
						color: #B6B6B6;
					 }
					 .right{
						width: 100rpx;
						text-align: center;
						height: 40rpx;
						line-height:40rpx;
						border-radius: 30rpx;
						font-size: 28rpx;
						// margin: 20rpx 20rpx 0rpx 0rpx;
					 }
					 .active{
						color: #FF666C;
						background-color: #FFE2E3;
						border: 2rpx solid #FF666C;	 
				   }
					 
				 }
				 
			 }
		 }
		 
	 }
	 .footer{
		 width: 690rpx;
		 height: 90rpx;
		 background-color: #FF9A9E;
		 border-radius: 45rpx;
		 text-align: center;
		 line-height: 90rpx;
		 position: fixed;
		 left:30rpx;
		 bottom: 0rpx;
		 color: #fff;
		 z-index: 50;
	 }
</style>
