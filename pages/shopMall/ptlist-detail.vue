<template>
	<view class="uni-searchDetail" :style="(joinCartBoxflag==true || shareBoxFlag==true)?'position:fixed;':'position:relative'" >
			<image @tap.stop="backs" :style="{top:backHeight}" class="imagesBack" src="https://chikehometest.hzbixin.cn/upload/images/feedback/20210428/792fd8aa82d5e83a04f0bb87ff6c257f.png"></image>
	   <!-- <view class="uni-content"  :style='{"margin-top":heights,"padding-top":marginTop}'> -->
		   <view class="uni-content">
		   <uni-swiper-dot class="swiper-dot" :info="info" mode="round "  :current="current" field="content" :mode="mode">
		       <swiper style="width: 750rpx;height: 750rpx;;" class="swiper-box" @change="change">
		           <swiper-item v-for="(item ,index) in bannersList" :key="index">
		               <view class="swiper-item">
						   <image style="margin-left:0rpx;height: 750rpx;width:750rpx;;" class="swiImgs" :src="item.url"></image>
		               </view>
		           </swiper-item>
		       </swiper>
		   </uni-swiper-dot>
		   <view class="contentBox">
			   <view class="boxFirst">
				     <view class="uni-first">
						 <view class="uni-left">
							 <text class="lefts">¥<text class="mon">{{detailData.user_price}}</text></text>
							 <text class="rights">{{detailData.price}}</text>
						 </view>
						 <view class="uni-right">已售{{detailData.sales}}件</view>
					 </view>
					 <view class="uni-second">
						 {{detailData.goods_name}}
					 </view>
					 <view class="uni-third">
						 <view class="leftss">
							 <view class="tops">
								 <!-- <view class="jfbox style1">返20积分</view> -->
								 <view class="yjbox style1" v-if="detailData.user_brokerage">佣金¥{{detailData.user_brokerage}}</view>
							 </view>
							 <view class="downs" >
								 <text  class="words" v-for="(item,index) in detailData.label_str" :key="index">{{item}} | </text>
								
							 </view>
						 </view>
						 <button open-type="share"  class="rightss">
							 <image  class="imgs" src="../../static/image/share.png"></image>
						     <view class="field">分享</view>
						</button>
					 </view>
			   </view>
			   <view class="bigBox" v-if="sendPtUid==0">
					  <view class="boxSecond" v-for="(item1,index1) in ptGroopList" :key="index1">
							 <view class="sFirst">已有{{item1.coming_num}}人，可直接参与</view>
							 <view class="sSecond">
								 <view class="sLeft">
									 <image  class="imgs"  :src="item1.headimg"></image>
									 <text class="field">{{item1.nickname}}</text> 
								 </view>
								 <view class="sRight"> 
								   <view  class="leftss">
									  <view  class="ups"> 还差{{item1.cha}}人拼成 </view>
									  <view class="downs">剩{{item1.hours}}:{{item1.minutes}}:{{item1.ss}}</view>
								   </view>
								   <view class="rightss" @tap.stop="joinCartBoxflag=true,category=4,ptUserId=item1.uid">去拼单</view>
								 </view>
							 </view>
					   </view>
			   </view>
		   </view>
		   <view class="box-introduce">
			   <view class="titles">
				   <view class="phoDe styless" @tap.stop="tuwordFlag=true,goodsFlag=false">
					   <view  :class="tuwordFlag?'activess':'fiedss'" >图文详情</view>
				       <view v-if="tuwordFlag" class="lines"></view>
				   </view>
				   <view class="goodDe styless" @tap.stop="tuwordFlag=false,goodsFlag=true">
					   <text  :class="goodsFlag?'activess':'fiedss'" >商品详情</text>
				       <view v-if="goodsFlag" class="lines"></view>
				</view>
			   </view>
			   <view class="picBox"  v-if="tuwordFlag">
				    <!-- <rich-text class="bgs" :nodes=""></rich-text> -->
				   <!-- <image  mode="aspectFill"  :src="detailData.description"></image> -->
				   <image  mode="widthFix"   v-for="(item,index) in tuDetailList" :src="item.pic" :key="index"></image>
			   </view>
			   <view class="goodBox" v-if="goodsFlag">
				   <view class="list" v-for="(item,index) in detailData.attr" :key="index">
					   <view class="field">{{item.attr_name}}</view>
					   <view class="sss">{{item.attr_values}}</view>
				   </view>
			   </view>
		   </view>
	   </view>
	 <view class="footers" >
	 		   <view class="uni-left" >
				  <view class="bigbox">
					   <button class="serverBox bigbox" plain="true" sessionFrom="weapp"  open-type="contact" style="border:none;border-radius: 0rpx;padding:0rpx;">
							 <image class="imgStart"   src="https://chikehometest.hzbixin.cn/upload/images/feedback/20210428/a7cc0f4673c9e17da4230e516ae42a7f.png"></image>
					   </button>
					   <text class="field">客服</text>
				  </view>
				   <view class="collectBox bigbox" @tap.stop="getCollect">
						<image class="imgStart" v-if="collectFlag"  src="https://chikehometest.hzbixin.cn/upload/images/feedback/20210428/47f9255cd0bc41d024318e36fb521176.png"></image>
						<image class="imgStart"  v-if="!collectFlag" src="https://chikehometest.hzbixin.cn/upload/images/feedback/20210428/3544cfd00b6213277136e828db08cd9f.png"></image>
						 <text class="field">收藏</text>
				   </view>
	 		   </view>
			   <view class="uni-right">
					   <view v-if="sendPtUid==0" class="buyBox styless2" @tap.stop="joinCartBoxflag=true,category=2">
						   <text class="upss">直接购买</text>
						   <!-- <text class="downss">¥<text>{{smallCarMsg[0].price}}</text></text> -->
					   </view>
					   <view v-if="sendPtUid!=0" class="buyBox styless2" @tap.stop="joinCartBoxflag=true,category=3">
								 <text class="upss">直接购买</text>
												   <!-- <text class="downss">¥<text>{{smallCarMsg[0].price}}</text></text> -->
					   </view>
					   <view class="makeGroupBox styless2" @tap.stop="getjudge() ">
						   <text class="upss">发起拼团</text>
						   <!-- <text class="downss">¥<text>29.90</text></text> -->
					   </view>
		
				</view>
	   
	   <!-- 购物车固定的logo -->
	  <!-- 加入购物车 -->
	  <view class="joincartBoxMask" @tap.stop="joinCartBoxflag=false" v-if="joinCartBoxflag"></view>
	  <view class="joincartBox"  v-if="joinCartBoxflag">
		  <view class="first" >
			  <view class="uni-left">
				 <image class="imgs" :src="cartGoodMsg.goods_img"></image>
			     <view class="goodBox">
					 <view class="priBox">
						 <view class="lefts" v-if="category==2">¥ <text class="mon">{{smallCarMsg[3].old_price}}</text></view>
						<view class="lefts" v-if="category==3">¥ <text class="mon">{{smallCarMsg[0].com_price}}</text></view>
						 <view class="lefts" v-if="category==4">¥ <text class="mon">{{smallCarMsg[0].com_price}}</text></view>
					     <view class="rights" style="text-decoration:line-through">{{smallCarMsg[1].price_0}}</view>
					 </view>
					 <view class="norms">已选择:{{smallCarMsg[2].values}}</view>
				 </view>
			  </view>
			  <view class="uni-right" @tap.stop="joinCartBoxflag=false">
				  <image class="cancel" src="../../static/image/cancel.png"></image>
			  </view>
		  </view>
		  <view class="second">
			  <view class="field">{{cartGoodMsg.rule_name}}</view>
			  <view class="listBOx">
				  <view :class="choiceSpecificeIndex==indexs?'active':'lists'" class="stylesm"
				      v-for="(item,indexs) in cartGoodMsg.rules":key="index" @tap.stop="getChoiceSpec(indexs)">{{item.rule_values}}</view>
			  </view>
		  </view>
		  <view class="third">
			  <view class="field">数量</view>
			  <view class="right">
					  <view class="zuo" @tap.stop="getGoodsNum(1)">-</view>
					 <input class="zhong"  type="number" v-model="goodNum" :maxlength="2" @blur="getGoodNumsInput($event)"></input>
					  <view class="you" @tap.stop="getGoodsNum(2)">+</view>
			  </view>
		  </view>
		  <view class="fourth" @tap.stop="btnJoinCart">确定</view>
	  </view>
	  <view class="cartSuccessBox" v-if="cartSucFlag">
		  <view class="tips">加入成功，在购物车等您~</view>
		  <image class="imgss" src="../../static/image/joinCartSuccess.png"></image>
	  </view>
	 <view class="showtips" v-if="signalFlag">{{signalMsg}}</view>
	  </view>
	 </view>
</template>

<script>
	import app from '../../App.vue'
	import uniSwiperDot from "@/components/uni-swiper-dot/uni-swiper-dot.vue"
	export default {
		 data () {
			return { 
				address:'优琦口腔（下沙江滨店）',
				collectActive:false,
				bannersList: [],
				current: 0,
				mode: 'round',
				listData:[
					
				],
				
				// 图文 ,商品细节的展现,切换
				tuwordFlag:true,
				goodsFlag:false,
				collectFlag:false,
				// 商品的加减
				goodNum:1,
				backHeight:'',
				// 购物车的蒙面层
				joinCartBoxflag:false,
				// 加入购物车成功提示
				cartSucFlag:false,
				// 添加购物车选择的规格
				choiceSpecificeIndex:0,
				// 购物车 单独购买,发起拼团 1 2 3
				category:0,
				goodsId:'',
				detailData:'',// 详情数据
				signalFlag:false,
				signalMsg:'',
				cartGoodMsg:'',
				smallCarMsg:[],
				cartRuleId:'',
				tuDetailList:[],//图文详情的列表
				ptGroopList:[],//拼团人数列表
				ptUserId:'',
				sendPtUid:0,//发起拼团的人
				sendPtGoodsId:0,//拼团商品id
				scene:0,//邀请人的数据
				withPtFlag:false,//必须和人家拼团
				getDetailFlag:false
			}
		},
		onShow(){
			if(uni.getStorageSync('sendPtUid')){
				this.sendPtUid=uni.getStorageSync('sendPtUid');
			}
			//判断登录成功了以后，拼团分享带过来的分享到详情页面的标识把他删除
			if(this.detailData){
				  uni.removeStorageSync('ptGoodId');
			 }
		},
	    components: {uniSwiperDot},
		onShareAppMessage: function (res) {
				let _this = this;
				if(res.from === 'button' ){
					return {
					  title: "莱美牙",
					  path: "/pages/index/index?" + _this.getShareUrlParams()
					};
				}else if(res.from ==='menu' ){
					
					return {
					  title: "莱美牙",
					  path: "/pages/index/index" + _this.getShareUrlParams()
					};
				}
					
		},
		onLoad(options){
			let that=this;
			
		   wx.showShareMenu({
		  		withShareTicket:true,
		  		//设置下方的Menus菜单，才能够让发送给朋友与分享到朋友圈两个按钮可以点击
		  		menus:["shareAppMessage","shareTimeline"]
		  	})
			that.setData(options)
			that.backHeight=((parseInt(that.heights)*2-46)/2+parseInt(that.marginTop))+'rpx';
			that.getDetail();
			that.joinCartMsg();
			if(that.scene!=0){
				uni.setStorageSync('scene',that.scene);
			}
		    
				
		},
		computed:{
			heights(){
				const {platform,statusBarHeight} = uni.getSystemInfoSync()
				let height = statusBarHeight +4 //ios 24px
				if (platform.toLowerCase() == "android" ){
					height +=4 //android 28px
				}
				// 胶囊高度 32px 下边框6px height 状态栏高度
				return height+ 38 + "px"
			},
			marginTop(){
				const {platform,statusBarHeight} = uni.getSystemInfoSync();
				let height = statusBarHeight +4;
				if (platform.toLowerCase() == "android" ){
					height +=4;
				}
				return height + "rpx"				
			}
		},
		
		methods:{
			backs(){
				uni.navigateBack()
			},
			getPtJiaData(){
				let that=this;
				console.log('come. getPt jia Data')
				that.$http.post('/mini/v1/goods/fakeGoods',{
					goods_id:that.sendPtGoodsId
				},(res)=>{
					console.log('success')
					console.log(res)
					console.log(that.sendPtGoodsId)
					console.log('success')
					if(res.state ==0){
						
						that.detailData=res.data.list;
						let aas=JSON.parse(that.detailData.goods_imgs) 
						let aas2=JSON.parse(that.detailData.description)
						aas.map(res2=>{
							res2.url=app.globalData.imgPrefixUrl+res2.img
						})
						that.detailData.label_str=that.detailData.label_str.split(',')
						aas2.map(res1=>{
							res1.pic=app.globalData.imgPrefixUrl+res1.pic;
						})
						that.bannersList=aas;
						that.tuDetailList=aas2
						that.ptGroopList=that.detailData.user;
						if(that.detailData.is_collect==1){
							that.collectFlag=true
						}else{
							that.collectFlag=false
						}
						
							uni.showModal({
								title: '您暂未授权登陆',
								content:'请去个人中心点击头像点击登录',
								confirmText: '去登录',
								success(res){
									if (res.confirm) {
										 uni.switchTab({
											url:'/pages/personCenter/personCenter'
										 })
									} 
								},
								fail(res){
									console.log('fail')
								}
							 })
						}
						
					
				})
			},
		    gettankuang(){
				let that=this;
				console.log(that.sendPtUid)
				if(that.sendPtUid!=0){//确定是拼团分享过来 的数据
					uni.setStorageSync('sendPtUid',that.sendPtUid); //对分享人的id 和商品id  进行存储
					uni.setStorageSync('ptGoodId',that.sendPtGoodsId);
					console.log('come999')
					console.log(that.detailData)
					if(!(that.detailData)){
						that.getPtJiaData();
						// console.log('111100dsf')
						// uni.showModal({
						// 	title: '您暂未授权登陆',
						// 	content:'请去个人中心点击头像点击登录',
						// 	confirmText: '去登录',
						// 	success(res){
						// 		if (res.confirm) {
						// 			 uni.switchTab({
						// 				url:'/pages/personCenter/personCenter'
						// 			 })
						// 		} 
						// 	},
						// 	fail(res){
						// 		console.log('fail')
						// 	}
						//  })
					}
					
				}		
			},
		    change(e) {
		           this.current = e.detail.current;
		         },
			// 打电话
			makePhone(){
				 uni.makePhoneCall({
				     phoneNumber: '114' //仅为示例
				 });
			},
			// 收藏
			getCollect(){
				this.collectFlag=(!this.collectFlag);
				this.$http.post('mini/v1/goods/goodsCollec',{
					goods_id:this.goodsId
				},(res)=>{
					
					if(res.status==0){}
				})
			},
			// 加入确定购物车
			btnJoinCart(){
				// 加入购物车成功提示
				let that=this;
				// 购物车的整个box 关闭
				that.joinCartBoxflag=false;
				// 用category来判断是那种 
				// 1来自购物车
				if(that.category==1){
					that.getJoinCart();
					
				}else if(that.category==2){
					that.getSignalBug()
				}
				else if(that.category==3){//去拼单
					// uni.navigateTo({
					// 	url:'/pages/shopMall/confirm'
					// })
					that.getSignalBug()
				}
				else if (that.category==4){
					that.getPtBug()
				}
				
			},
			//加入购物车获取商品信息
			joinCartMsg(){
				let that=this;
				that.$http.post('mini/v1/goods/comInfo',{
					goods_id:that.goodsId
				},(res)=>{
					if(res.state==0){
						that.cartGoodMsg=res.data.list[0];
						that.cartGoodMsg.goods_img=app.globalData.imgPrefixUrl+that.cartGoodMsg.goods_img;
						that.smallCarMsg.push({com_price:that.cartGoodMsg.rules[0].user_price})
						that.smallCarMsg.push({price_0:that.cartGoodMsg.rules[0].price_0}),
						that.smallCarMsg.push({values:that.cartGoodMsg.rules[0].rule_values})
						that.smallCarMsg.push({old_price:that.cartGoodMsg.rules[0].old_price})
						that.cartRuleId=that.cartGoodMsg.rules[0].rule_id;
						
					}
					
				})
			},
			// 拼团购买
			getPtBug(){
				let that =this;
				let items={
					rule_id:that.cartRuleId,
					goods_id:that.goodsId,
					cart_num:that.goodNum,
					source_type:3,
					head_uid:that.ptUserId
				}
				that.$http.post('mini/v1/goods/addgoodscart',items,(res)=>{
					if(res.state==0){
							uni.navigateTo({
							    url:'/pages/shopMall/ptConfirm?source_type='+3
							})
						
					}else{
						that.signalFlag=true ;
						that.signalMsg=res.msg;
						setTimeout(()=>{
								that.signalFlag=false;
						},3000)
					}		
				})	
			},
			// 单独购买
			getSignalBug(){
				let that=this;
				let items=[];
				if(that.category==2){//单独买
					items={
						rule_id:that.cartRuleId,
						goods_id:that.goodsId,
						cart_num:that.goodNum,
						source_type:2,
				  }
				}else if(that.category==3&&that.sendPtUid==0){//拼团商品
					items={
						rule_id:that.cartRuleId,
						goods_id:that.goodsId,
						cart_num:that.goodNum,
						source_type:3,
						head_uid:0 
					}
				}else if(that.sendPtUid!=0&&that.category==3){
					items={
						rule_id:that.cartRuleId,
						goods_id:that.goodsId,
						cart_num:that.goodNum,
						source_type:3,
						head_uid:that.sendPtUid 
					}
				}
				that.$http.post('mini/v1/goods/addgoodscart',items,(res)=>{
					if(res.state==0){
						if(that.category==2){
							uni.navigateTo({
							    url:'/pages/shopMall/confirm?source_type='+2+'&ptCome='+2
				            })
						}else if(that.category==3){
							uni.navigateTo({
							    url:'/pages/shopMall/ptConfirm?source_type='+3
							})
						}
					}else{
						that.signalFlag=true ;
						that.signalMsg=res.msg;
						setTimeout(()=>{
								that.signalFlag=false;
						},3000)
					}		
				})	
			},
			getjudge(){
				this.category=3;
				if(this.sendPtUid==0){
					this.joinCartBoxflag=true;
				    
				}
				
			},
			// 购物车添加选择规格
			getChoiceSpec(index){
				this.choiceSpecificeIndex=index;
				this.smallCarMsg[0].com_price= this.cartGoodMsg.rules[index].user_price;
				this.smallCarMsg[1].price_0=this.cartGoodMsg.rules[index].price_0;
				this.smallCarMsg[2].values=this.cartGoodMsg.rules[index].rule_values;
				this.smallCarMsg[3].old_price=this.cartGoodMsg.rules[index].old_price;
				// that.smallCarMsg.push({old_price:that.cartGoodMsg.rules[0].old_price})
				this.cartRuleId=this.cartGoodMsg.rules[index].rule_id;
				
			},
			// 商品数量的加减
			getGoodsNum(style){
				if(style ==1 && this.goodNum>1){
					this.goodNum=this.goodNum-1;
				}
				else if (style ==2){
					this.goodNum=this.goodNum+1;
				}
			},
			// 加入购物车输入的数据
			getGoodNumsInput(e){
				
				this.goodNum=Number(e.detail.value);
			},
			//加入 购物车
			getJoinCart(){
				let that=this;
				that.$http.post('mini/v1/goods/addgoodscart',{	
					rule_id:that.cartRuleId,
					goods_id:that.goodsId,
					cart_num:that.goodNum,
					source_type:1
					},(res)=>{
					if(res.state==0){
						
						that.cartSucFlag=true;
						setTimeout(()=>{
							that.cartSucFlag=false;
						},2000)
					}		
				})	
			},
			getDetail(){
				let that=this;
				if(that.sendPtGoodsId){
					that.goodsId=that.sendPtGoodsId;
					console.log('googsd')
					console.log(that.goodsId)
				}
				console.log('come detail1')
				console.log(that.goodsId)
				that.$http.post('mini/v1/goods/comGoods',{
					goods_id:that.goodsId
				},(res)=>{
					console.log('come detail1111')
					console.log(res)
					console.log('come detail1111')
					if(res.state==0){
						
						that.detailData=res.data.list;
						console.log('come 1001001010100')
						console.log(that.detailData)
						that.gettankuang();
						console.log('come 100100')
						let aas=JSON.parse(that.detailData.goods_imgs) 
						let aas2=JSON.parse(that.detailData.description)
						aas.map(res2=>{
							res2.url=app.globalData.imgPrefixUrl+res2.img
						})
						that.detailData.label_str=that.detailData.label_str.split(',')
						aas2.map(res1=>{
							res1.pic=app.globalData.imgPrefixUrl+res1.pic;
						})
						that.bannersList=aas;
						that.tuDetailList=aas2
						that.ptGroopList=that.detailData.user;
						if(that.detailData.is_collect==1){
							that.collectFlag=true
						}else{
							that.collectFlag=false
						}
						that.ptGroopList.map((item,index,array)=>{
							// res.expiration
							 that.getNowTime(index,item.expiration)
							//截止
						})
						console.log('come detail3333')
						
					}else{
						console.log(res)
						console.log('come detail222')
						that.gettankuang();
					}
				})
			},
			getNowTime(indexs,values){			
				let nowtime=Math.round(new Date().getTime()/1000).toString();//获取当前时间
				 let times= values;
				// this.days=parseInt(times/60/60/24, 10).toString().padStart(2,'0');//计算剩余的天数
				this.ptGroopList[indexs].hours= parseInt(times/60/60%24, 10).toString().padStart(2,'0');//计算剩余的小时数
				this.ptGroopList[indexs].minutes =parseInt(times/60%60, 10).toString().padStart(2,'0');//计算剩余的分钟数;//计算剩余的分钟数
				this.ptGroopList[indexs].ss = parseInt(times%60,10).toString().padStart(2,'0');//计算剩余的秒数
				setInterval(()=>{
					// console.log(1111)
					 let nowtime=Math.round(new Date().getTime()/1000).toString();//获取当前时间
					 let times= values-nowtime;
					 // let days=parseInt(times/60/60/24, 10).toString().padStart(2,'0');//计算剩余的天数
					 let hours= parseInt(times/60/60%24, 10).toString().padStart(2,'0');//计算剩余的小时数
					 let minutes =parseInt(times/60%60, 10).toString().padStart(2,'0');//计算剩余的分钟数;//计算剩余的分钟数
					 let ss = parseInt(times%60,10).toString().padStart(2,'0');//计算剩余的秒数
					// console.log(this.days, this.hours,this.minutes)
					const items={
						...this.ptGroopList[indexs],
						hours:hours,
						minutes:minutes,
						ss:ss
					}
					this.$set(this.ptGroopList,indexs,items)
					
				},1000)
			},
			
		}
	}
</script>

<style scoped lang="scss">
    @import "../../static/scss/common.scss";
   .uni-searchDetail{
	   left: 0rpx;
	   top:0rpx;
		   .imagesBack{
			   display: block;
			   width: 46rpx;
			   height: 46rpx;
			   position: fixed;
			   left:30rpx;
			   z-index:50;
		   }
	   
	   
   }

.uni-content{
	box-sizing: border-box;
	width: 750rpx;
	.swiImgs{
		display: block;
		// width: 750rpx;
		// height: 750rpx;
		margin-left:30rpx;
	}

}

.contentBox{
	background-color: #f2f2f2;
	
	.boxFirst{
		width: 750rpx;
		padding: 30rpx;
		box-sizing: border-box;
		background-color: #fff;
		
		
		.uni-third{
			width: 660rpx;
			display: flex;
			justify-content: space-between;
			.leftss{
				.tops{
					display:flex;
					.style1{
						width: 140rpx;
						height: 40rpx;
						line-height: 40rpx;
						font-size: 22rpx;
						text-align: center;
						font-family: PingFang SC;
						font-weight: 500;
						color: #FFFFFF;
						margin-bottom: 20rpx;
					}
					.jfbox{
						background-color: #ff980f;
						margin-right:20rpx;
					}
					.yjbox{
						background-color: #ff3366;
					}
				}
				.downs{
					display: flex;
					color: #888888;
					font-size: 22rpx;
					margin-bottom:20rpx;
					.words{
						margin:0rpx 10rpx;
					}
				}
			}
			.rightss{
				color: #FF9A9E;
				font-size: 22rpx;;
				width: 100rpx;
				display: flex;
				flex-direction: column;
				align-items: center;
				background-color: #fff;
				margin:0rpx;
				.imgs{
					display: block;
					width: 40rpx;
					height: 40rpx;
				}
				.field{}
			}
			
		}
		.uni-second{
			font-size: 34rpx;
			color: #000;
			font-weight: bold;
			font-family: 'PingFang-SC-Bold';
			@include  ellipsis(2);
			margin:20rpx 0rpx;
		}
		.uni-first{
			width: 660rpx;
			display: flex;
			justify-content: space-between;
			align-items: flex-end;
			.uni-left{
				display: flex;
				align-items: flex-end;
				.lefts{
					color: #FF0000;
					font-size: 32rpx;
					margin-right:15rpx;
					.mon{
						font-size: 50rpx;
					}
				}
				.rights{
					color: #888888;
					font-size: 22rpx;
					text-decoration:line-through;
				}
			}
			.uni-right{
				color: #999999;
				font-size: 18rpx;;
			}
		}
	}
	.boxSecond{
		width: 750rpx;
		height: 220rpx;
		background-color: #fff;
		padding:0rpx 30rpx;
		box-sizing: border-box;
		margin-top:20rpx;
		.sFirst{
			height: 70rpx;
			line-height: 70rpx;
			color: #555555;
			font-size: 28rpx;
			margin-bottom: 25rpx;
		}
		.sSecond{
			display: flex;
			justify-content: space-between;
			.sLeft{
				display: flex;
				align-items: center;
				.imgs{
					display: block;
					width: 90rpx;
					height: 90rpx;
					margin-right: 25rpx;
				}
				.field{
					color: #3B3B3B;
					font-size: 26rpx;
				}
			}
			.sRight{
				display: flex;
				align-items: center;
				.leftss{
					color: #3B3B3B;
					font-size: 26rpx;
					margin-right: 23rpx;
					.ups{}
					.downs{}
				}
				.rightss{
					width: 110rpx;
					height: 54rpx;
					background-color: #ff3366;
					text-align: center;
					line-height: 54rpx;
					font-size: 26rpx;
					font-family: PingFang SC;
					font-weight: 500;
					color: #FFFFFF;
				}
			}
		}
		
	}

}
.box-introduce{
	margin: 20rpx 0rpx 150rpx;
	.titles{
		width: 750rpx;
		height: 100rpx;
		display: flex;
		padding:0rpx 190rpx;
		box-sizing: border-box;
		align-items: center;
		justify-content: space-between;
		
		.activess{
			color: #FD9EA3;
			font-size: 28rpx;
		}
		.styless{
			width: 120rpx;
			.fiedss{
				color: #B6B6B6;
				font-size: 28rpx;
			}
			.lines{
				width: 50rpx;
				height: 6rpx;
				margin-left:35rpx;
				background: #FF6A6C;
				border-radius: 2rpx;
				margin-top: 10rpx;
			}
		}
	}
	.picBox{
		text-align: center;
		.bgs{
			display: block;
			 width: 750rpx;
			// height: 1000rpx;
		}
	}
	.goodBox{
		background-color: #fff;
		width: 750rpx;
		padding:30rpx 50rpx;
		box-sizing: border-box;
		.list{
			width: 750rpx;
			height: 90rpx;
			display: flex;
			align-items: center;
			font-size: 28rpx;
			.field{
				color: #B6B6B6;
				width: 180rpx;
			}
			.sss{
				color: #3B3B3B;
			}
			
		}
	}
}
.footer{
	width: 750rpx;
	height: 150rpx;
	position: fixed;
	background-color: #fff;;
	left:0rpx;
	bottom:0rpx;
	z-index: 10;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding:0rpx 30rpx ;
	box-sizing: border-box;
	.uni-left{
		width: 70rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		.imgStart{
			display: block;
			width: 40rpx;
			height: 40rpx;;
		}
		.field{
			margin-top: 15rpx;
			color: #888888;
			font-size: 22rpx;
		}
	}
	.uni-center{
		width: 214rpx;
		height: 90rpx;
		line-height: 90rpx;
		text-align: center;
		background: #FFFFFF;
		border: 2rpx solid #FFB3B6;
		border-radius: 45rpx;
		font-size: 28rpx;
		color: #FFB3B6;
	}
	.uni-right{
		width: 360rpx;
		display: flex;
		.buyBox{
			border-radius: 45rpx 0rpx 0rpx 45rpx;
			background-color: #FF9A9E;
		}
		.makeGroupBox{
            background-color: #FF666C;
			border-radius: 0rpx 45rpx  45rpx 0rpx;
		}
		.styless2{
			width: 190rpx;
			height: 90rpx;
			text-align: center;
		    display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			color: #fff;
			.upss{
				font-size: 28rpx;
			}
			.downss{
				font-size: 24rpx;;
			}
		}
	}
}
.shopCartLogo{
	display: block;
	width: 100rpx;
	height: 100rpx;
	position: fixed;
	z-index:50;
	right:30rpx;
	top:80%;
}
.joincartBox{
	position:fixed;
	left:0rpx;
	bottom: 0rpx;
	background-color: #fff;
	z-index: 60;
	width: 750rpx;
	height: 800rpx;
	padding:50rpx 30rpx;
	box-sizing: border-box;
	.first{
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		.uni-left{
			display: flex;
			.imgs{
				display: block;
				width: 240rpx;
				height: 240rpx;
				margin-right:20rpx;
				border-radius: 8rpx;
			}
			.goodBox{
				width: 280rpx;
				height: 240rpx;
				display: flex;
				flex-direction: column;
				justify-content: flex-end;
				.priBox{
					display: flex;
					color: #FF0000;
					font-size: 32rpx;
					align-items: center;
					.lefts{}
					.rights{
						margin-left: 15rpx;;
						font-size: 24rpx;;
					}
					.mon{
						font-size: 42rpx;;
					}
				}
				.norms{
					color: #B6B6B6;
					font-size: 28rpx;
					margin-top:29rpx;
				}
			}
		}
		.uni-right{
			width: 50rpx;
			height: 50rpx;
			.cancel{
				display: block;
				width: 30rpx;
				height: 30rpx;
				margin:10rpx;
			}
		}
	}
	.second{
		margin-top:50rpx;
		
		.field{
			color: #525252;
			font-size: 28rpx;;
			
		}
		.listBOx{
			width: 690rpx;
			display: flex;
			.lists{
				background: #FFFFFF;
				border: 2rpx solid #B6B6B6;
				color: #B6B6B6;
				
			}
			.stylesm{
				width: 150rpx;
				text-align: center;
				height: 60rpx;
				line-height: 60rpx;
				border-radius: 30rpx;
				font-size: 28rpx;
				margin: 20rpx 20rpx 0rpx 0rpx;
			}
			.active{
                color: #FF666C;
				background-color: #FFE2E3;
				border: 2rpx solid #FF666C;
				
			}
		}
	}
	.third{
		width: 690rpx;
		display: flex;
		justify-content: space-between;
		margin-top:30rpx;
		.field{
			color: #525252;
			font-size: 28rpx;
		}
		 @extend  %inputjj;
	}
	.fourth{
		width: 690rpx;
		height: 90rpx;
		text-align: center;
		line-height: 90rpx;
		background: #FF9A9E;
		border-radius: 45rpx;
        font-size: 28rpx;
		color: #fff;
		position: absolute;
		left:30rpx;
		bottom: 20rpx;
	}
}
%maskBox{
			position: fixed;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			z-index: 10;
			background-color: #000;
			opacity: 0.5;
				
	}
.joincartBoxMask{
	@extend  %maskBox;
}
.cartSuccessBox{
	position: fixed;
	top:450rpx;
	left:135rpx;
	z-index:60;
	width: 480rpx;
	height: 230rpx;
	background: #000000;
	opacity: 0.8;
	border-radius: 16rpx;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	.tips{
		color: #EFEFEF;
		font-size: 28rpx;
		margin-bottom:40rpx;
	}
	.imgss{
		display: block;
		width: 50rpx;
		height: 50rpx;
	}
}

// .btns{
//  		border: none;
//  		outline: none;
//  		border: none;
//  		background-color: none;
//  		-webkit-appearance: none;
//  		-webkit-appearance: none;
//  	}
 button::after{
	border: none;
	outline: none;
 	border: none;
 	background-color: none;
	-webkit-appearance: none;
	-webkit-appearance: none;
 }
 .showtips{
 	  width: 350rpx;
 	  height: 100rpx;
 	  background: #000000;
	  // background: red;
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
 .footers{
 	 width: 750rpx;
 	 height: 150rpx;
 	 position: fixed;
 	 background-color: #fff;;
 	 left:0rpx;
 	 bottom:0rpx;
 	 z-index: 10;
 	 display: flex;
 	 justify-content: space-between;
 	 align-items: center;
 	 padding:0rpx 30rpx ;
 	 box-sizing: border-box;
 	 .uni-left{
 		 display: flex;;
 		 .bigbox{
 			width: 70rpx;
 			display: flex;
 			flex-direction: column;
 			justify-content: space-around;
 			align-items: center;
 			margin-right: 30rpx;
 			.imgStart{
 				display: block;
 				width: 40rpx;
 				height: 40rpx;;
 			}
 			.field{
 				
 				color: #888888;
 				font-size: 22rpx;
 			}
 		 }
 		 
 	 }
 	 .uni-right{
 	 	width: 360rpx;
 	 	display: flex;
 	 	.buyBox{
 	 		border-radius: 45rpx 0rpx 0rpx 45rpx;
 	 		background-color: #FF9A9E;
 	 	}
 	 	.makeGroupBox{
 	         background-color: #FF666C;
 	 		border-radius: 0rpx 45rpx  45rpx 0rpx;
 	 	}
 	 	.styless2{
 	 		width: 190rpx;
 	 		height: 90rpx;
 	 		text-align: center;
 	 	    display: flex;
 	 		flex-direction: column;
 	 		justify-content: center;
 	 		align-items: center;
 	 		color: #fff;
 	 		.upss{
 	 			font-size: 28rpx;
 	 		}
 	 		.downss{
 	 			font-size: 24rpx;;
 	 		}
 	 	}
 	 }
 	 
 }
</style>

