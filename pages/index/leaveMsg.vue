<template>
	<view class="uni-leaveMsg">
		<view class="listBox"> 
			<view class="list" v-for="(item,index) in msgList" :key="index">
				<view class="firsts">
					  <image class="logoss" :src="item.avatar"></image>					  <text class="name">{{item.nickname}}</text>
				</view> 
				<view class="second">
					<text class="topics">  #超声波洗牙# </text>
                    <text class="values">
                          {{item.content}}
                    </text>              
				</view>
				<view class="third">
					<view class="imgListBox" >
						<image class="imgs" :src="items" v-for="(items,indexs) in item.imgs" :key="indexs"></image>
					</view>
				</view>
				<view class="fourth">{{item.add_time}}</view>
			</view>
		</view>
	</view>
</template>
<script>
import app from '../../App.vue'
	export default {
		 data () {
			return { 
				storeId:'',
				pages:1,
				pageV:1,
				msgList:[]
				}
		 },
		 onLoad(options){
			 this.setData(options);
			 this.getMsgList();
		 },
		 onReachBottom(){
		 	if(this.pagesV==0){
		 		this.pages+=1;
		 		this.getMsgList();
		 	}
		 	
		 },
		 methods:{
			 getMsgList(){
			 	let that=this;
			 	that.$http.post('mini/v1/store/leavelist',{
			 		store_id:that.storeId,
			 		page:that.pages,
			 		is_tui:0
			 	},(res)=>{
			 		if(res.state==0){
						that.pagesV=res.data.is_request;
						if(res.data.is_request==0){
							let bb=res.data.list;
							bb.map(i=>{
								let aa =i.imgs;
								for(let z=0;z<aa.length;aa++){
									aa[z]=app.globalData.imgPrefixUrl+aa[z]
								}
							})
							let cc=that.msgList;
							that.msgList=cc.concat(bb)
							
						}
			 			
			 		}
			 	})
			 }
		 }
	}
</script>

<style scoped lang="scss">
    @import "../../static/scss/common.scss";
	.uni-leaveMsg{
		.listBox{
			.list{
				width: 750rpx;
				padding: 25rpx 30rpx;
				box-sizing: border-box;
				border-top: 2rpx solid #f2f2f2;
				;
				.firsts{
					height: 90rpx;
					display: flex;
					align-items: center;
					.logoss{
						display: block;
						width: 90rpx;
						height: 90rpx;
                        border-radius: 50%;
						margin:0rpx 25rpx 22rpx 0rpx;
					}
					.name{
						color: #3B3B3B;
						font-size: 26rpx;;
					}
				}
				.second{
					font-size: 24rpx;
					margin-bottom: 29rpx;;
					.topics{
						color: #FFC000;
					}
					.values{
						color: #3B3B3B;
					}
				}
				.third{
					.imgListBox{
						width: 690rpx;
						display: flex;
						flex-wrap: wrap;
						.imgs{
							display: block;
							width: 150rpx;
							height: 150rpx;
							border-radius: 8rpx;
							margin:0rpx 20rpx 25rpx 0rpx;
						}
					}
					
				}
				.fourth{
					width: 690rpx;
					text-align: right;
					color: #9B9B9B;
					font-size: 24rpx;
				}
			}
		}
	}
</style>
