<template>
	<view class="uni-myGroup">
			<view class="contentBox">
					<view class="contentSmallBox" v-for="(item,index) in msgData.goods">
						<image class="uni-left" :src="item.goods_img"></image>
						<view class="uni-right">
							<view class="first">{{item.goods_name}} </view>
							<view class="second">¥<text  class="mon">{{item.user_price}}</text></view>
							<view class="third">
								<view class="lefts">{{item.rule_name}}：{{item.rule_values}}</view>
								<view class="rights">×{{item.cart_num}}</view>
							</view>
						</view>
					</view>
					<!-- <view class="signalBox"><view class="details">查看拼单详情</view></view> -->
		            <view class="detailBox">
						<view class="uni-first">
							<view class="fileds">剩余</view>
							<view class="timeBox">
								<view class="list">{{hours}}</view>
								<view class="lists">:</view>
								<view class="list">{{minutes}}</view>
								<view class="lists">:</view>
								<view class="list">{{mm}}</view>
							</view>
						</view>
						<view class="uni-second">还差<text class="num">{{msgData.cha}}</text> 人成团，赶快邀请好友加入吧！</view>
						<view class="uni-third">
							<view class="leftGirl" >
								<image class="imgss"  :src="msgData.user[0].headimg"></image>
								<view class="field" >团长</view>
							</view>
							<view class="centerBox"  v-for="(item,index) in msgData1" :key="index">
								<image class="imgss2"  :src="item.headimg"></image>
							</view>
							<view class="rightBox">
								<view class="list" v-for="(item1,index1) in perpleCha" :key="index1">
									<image class="imgs" src="http://zxyp.hzbixin.cn/files/25821608259248820.jpg"></image>
								</view>
								
								
							</view>
						</view>
						<view class="uni-fourth">
							<button style="border: none;"  open-type="share" plain="true"    class="inviteBtn">邀请好友</button>
						</view>
					</view>
			 </view>
			
		</view>	
</template>

<script>
	import app from '../../../App.vue'
	export default {
		data() {
			return {
				order_sn:'',
				msgData:'',
				msgData1:'',
				hours:'00',
				minutes:'00',
				mm:'00',
				peopleNumBox:'',
				peopleNum:'',
				perpleCha:'',
				pvTime:1000,
				sendMsg:false,
				setIntervalName:''//定时器的名字
			}
		},
		onLoad(options){
			this.setData(options)
			this.getData();
		},
		onShareAppMessage: function () {
		    let _this = this;
			if (res.from === 'button'   ) {// 来自页面内分享按钮
			  
			    return {
			      title: "智享婴品",
			      path: "/pages/shopMall/ptlist-detail?" + _this.getSharePTdata()
			    };
			   }
		},
		methods: {
			getData(){
				let that=this;
				that.$http.post('mini/v1/user/combDetail',{
					order_sn:that.order_sn,
					status:0
				},(res)=>{
					if(res.state==0){
						clearInterval(that.setIntervalName);
						// that.msgData=res.data.list[0]
						let aa = JSON.parse(JSON.stringify(res.data.list[0]))  ;
						that.peopleNumBox=aa.goods[0].com_total_num;
						that.peopleNum=aa.user.length;
						that.perpleCha=that.peopleNumBox-that.peopleNum;
						aa.goods.map((res1)=>{
								res1.goods_img=app.globalData.imgPrefixUrl+res1.goods_img
						})
						that.msgData=aa ;
						that.msgData1=res.data.list[0].user;
						that.msgData1.shift();//有效的任务的渲染
						that.hours='00';
						that.minutes='00'
						that.mm='00'
						uni.setStorageSync('ptLeadId',that.msgData.user[0].uid)//f分享出去，队长的id
						if(that.sendMsg==false){
							
							that.getTime(aa.expiration_time)
							// console.log(2222)
							// clearInterval(that.setIntervalName);
							// that.setIntervalName = null
						}
						
					}
					
				})
			},
			getTime(value){
				let that=this;
				let nowtime=Math.round(new Date().getTime()/1000).toString();//获取当前时间
				let times= value;
				if( times<=0){
					 that.sendMsg=true;
					 clearInterval(that.setIntervalName);
					 that.hours='00';
					 that.minutes='00'
					 that.mm='00'
					 that.getData();
				}
				that.hours= parseInt(times/60/60%24, 10).toString().padStart(2,'0');//计算剩余的小时数
				that.minutes =parseInt(times/60%60, 10).toString().padStart(2,'0');//计算剩余的分钟数;//计算剩余的分钟数
				that.mm = parseInt(times%60,10).toString().padStart(2,'0');//计算剩余的秒数
				that.setIntervalName=setInterval(()=>{
					 let nowtime=Math.round(new Date().getTime()/1000).toString();//获取当前时间
					 let times= value-nowtime;
					 console.log(value)
					 console.log(nowtime,'noetime',times)
					 if( times<=0){
					 	 that.sendMsg=true;
					 	 clearInterval(that.setIntervalName);
					 	 that.hours='00';
					 	 that.minutes='00'
					 	 that.mm='00'
					 	 that.getData();
					 }
					 that.hours= parseInt(times/60/60%24, 10).toString().padStart(2,'0');//计算剩余的小时数
					 that.minutes =parseInt(times/60%60, 10).toString().padStart(2,'0');//计算剩余的分钟数;//计算剩余的分钟数
					 that.mm = parseInt(times%60,10).toString().padStart(2,'0');//计算剩余的秒数
					
				},2000)
				
			}
		}
	}
</script>

<style scoped lang="scss">
@import "../../../static/scss/common.scss";
// @include ellipsis(1);
	.uni-myGroup{
		height: 100vh;
		background-color: #f2f2f2;
		.contentBox{
			
			border-top:2rpx solid #f2f2f2;
			.contentSmallBox{
				width: 750rpx;
				padding:38rpx 30rpx 30rpx;
				box-sizing: border-box;
				display: flex;
				justify-content: space-between;
				// margin-top: 38rpx;
				background-color: #fff;
				.uni-left{
					display: block;
					width: 150rpx;
					height: 150rpx;;
					margin-right: 30rpx;
					border-radius: 8rpx;
				}
				.uni-right{
					flex:1;
					height: 150rpx;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					.first{
						font-weight: bold;;
						font-size: 26rpx;
						color: #000;
						@include ellipsis(2);
					}
					.second{
						color: #FF0000;
						font-size: 24rpx;;
						.mon{
							font-size: 32rpx;;
						}
					}
					.third{
						display: flex;
						color: #8F8F8F;
						justify-content: space-between;
						font-size: 22rpx;;
						.lefts{}
						.rights{}
					}
				}
			}
		}
	}
.signalBox{
	width: 690rpx;
	margin:30rpx 0rpx;
	height: 60rpx;
	.details{
		width: 240rpx;
		height: 60rpx;
		text-align: center;
		font-size: 28rpx;
		background: #FF9A9E;
		border-radius: 30rpx;
		font-family: PingFang SC;
		font-weight: 500;
		float: right;
		line-height: 60rpx;;
		color: #FFFFFF;
	}
}
.detailBox{
	padding:44rpx 0rpx 65rpx;
	width: 750rpx;
	background-color: #fff;
	margin-top: 20rpx;
	.uni-first{
		display: flex;
		justify-content: center;
		align-items: center;
		.fileds{
			color: #2A2A2A;
			font-size: 28rpx;
			margin-right:25rpx;
		}
		.timeBox{
			display: flex;;
			.list{
				width: 58rpx;
				text-align: center;
				line-height: 58rpx;
				height: 58rpx;
				background: #EE5845;
				border-radius: 8rpx;
				color: #fff;;
			}
			.lists{
				width: 30rpx;
				height: 58rpx;
				text-align: center;
				line-height: 58rpx;
			}
		}
	}
	.uni-second{
		font-size: 28rpx;
		color: #2A2A2A;
		margin:30rpx 0rpx 50rpx;
		text-align: center;
		.num{
			color: #FF0000;
		}
	}
	.uni-third{
		width: 750rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	    height: 100rpx;
		.leftGirl{
			width: 100rpx;
			display: flex;
			flex-direction: column;
			align-items: center;
			.imgss{
				display: block;
				height: 70rpx;
				width: 90rpx;
				border-radius: 50%;
			}
			.imgss2{
				display: block;
				// width: 94rpx;
				// height: 94rpx;
				height: 70rpx;
				width: 90rpx;
				border-radius: 50%;
			}
			.field{
			   width: 90rpx;
			   height: 34rpx;
			   line-height: 34rpx;
			   text-align: center;
			   background: #FF9A9E;
			   color: #fff;
               font-size: 24rpx;
			}
			.fields{
			   width: 90rpx;
			   height: 34rpx;
			   
			}
		}
		.rightBox{
			display: flex;
			height: 100rpx;
			.list{
				margin-left: 25rpx;
				.imgs{
					display: block;
					width: 94rpx;
					height: 94rpx;
				}
			}
			
		}
		.centerBox{
			height: 100rpx;
			display: flex;
			margin-left: 25rpx;
				.imgss2{
					display: block;
					width: 94rpx;
					height: 94rpx;
					border-radius: 50%;
				
			}
			
		}
	}
	.uni-fourth{
		margin-top:40rpx;
		.inviteBtn{
			width: 240rpx;
			height: 60rpx;
			text-align: center;
			line-height: 60rpx;
			color: #fff;
			margin-left:255rpx;
			font-size: 28rpx;
			background: #FF9A9E;
			border-radius: 30rpx;
		}
	}
	
}
</style>
