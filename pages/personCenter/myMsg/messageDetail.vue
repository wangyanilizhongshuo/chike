<template>
	<view  class="uni-myMsg">
		<view class="listBox">
			<view class="list" v-for="(item,index) in msgList"  :key="index">
				<view class="uni-right" @tap.stop="getCode(item.expression_sn)">
				     <view class="uni-first">
						 <view class="lefts">{{item.title}} </view>
						 <view class="rights">{{item.send_time}} </view>
					 </view>
					 <text class="uni-second"  >
					     {{item.content}}  
					     <text class="jc" v-if="item.goods_name" >{{item.goods_name}}</text>
					     <text v-if="item.package">{{item.package}}</text>
					     <text  style="text-decoration:underline"  class="jc" v-if="item.expression_sn">{{item.expression_sn}}</text>
					 </text>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				titleName:'',
				types:1,
				pages:1,
				pagesV:'',
				msgList:[]
			}
		},
		onLoad(options){
			this.setData(options);
			if(this.types==1){
				this.titleName='系统消息'
			}else if (this.types==2){
				this.titleName='订单消息'
			}
			else if (this.types==3){
				this.titleName='服务消息'
			}
			uni.setNavigationBarTitle({
				 title:this.titleName
			})
			this.getData()
		},
		onReachBottom(){
			if(this.pagesV==0){
				this.pages+=1;
				this.getData();
			}
		},
		methods: {
			// 获取所有的数据
			getData(){
				let that=this;
				that.$http.post('mini/v1/user/msglist',{
					typeid:that.types,
					page:that.pages
				},(res)=>{
					if(res.state==0){
						that.pagesV=res.data.is_request;
						if(res.data.is_request==0){
							let aa = res.data.list;
							let bb = that.msgList;
							that.msgList = bb.concat(aa)
						}
						
					}
				})
			},
			getCode(values){
				console.log(values)
				if(!values){
					return false
				}
			  //提示模板
			  uni.showModal({
			    content:values,//模板中提示的内容
			    confirmText:"复制内容",
			    success:()=>{//点击复制内容的后调函数
			      //uni.setClipboardData方法就是讲内容复制到粘贴板
			      uni.setClipboardData({
			        data:values,//要被复制的内容
			        success:()=>{//复制成功的回调函数
			          uni.showToast({//提示
			            title:"复制成功"
			          })
			        }
			      });
			    }
			  });
			}
			
		}
	}
</script>

<style scoped lang="scss">
	@import "../../../static/scss/common.scss";
	.uni-myMsg{
		.listBox{
			.jc{
				font-weight: bold;
				display: inline-block;
				margin: 0rpx 10rpx ;
			}
			.list{
				width: 750rpx;
				padding:30rpx;
				box-sizing: border-box;
				border-top:2rpx solid #f2f2f2;
				.imgs{
					display: block;
					width: 80rpx;
					height: 80rpx;
					margin-right:30rpx;;
				}
				.uni-right{
					.uni-first{
						display: flex;
						justify-content: space-between;
						.lefts{
							color: #222222;;
							font-size: 28rpx;;
						}
						.rights{
							color: #888888;
							font-size: 24rpx;;
							;
						}
					}
					.uni-second{
						display: block;
						color: #222222;
						font-size: 24rpx;
						margin-top:20rpx;
					}
				}
			}
		}
	}

</style>
