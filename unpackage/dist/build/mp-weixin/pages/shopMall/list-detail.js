(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shopMall/list-detail"],{5049:function(t,o,e){"use strict";e.r(o);var a=e("a60e"),n=e.n(a);for(var i in a)"default"!==i&&function(t){e.d(o,t,(function(){return a[t]}))}(i);o["default"]=n.a},"56ab":function(t,o,e){},"57ac":function(t,o,e){"use strict";e.r(o);var a=e("c2cb"),n=e("5049");for(var i in n)"default"!==i&&function(t){e.d(o,t,(function(){return n[t]}))}(i);e("dece");var r,u=e("f0c5"),s=Object(u["a"])(n["default"],a["b"],a["c"],!1,null,"32085e8e",null,!1,a["a"],r);o["default"]=s.exports},"64c8":function(t,o,e){},"79cb":function(t,o,e){"use strict";e.r(o);var a=e("ae71");for(var n in a)"default"!==n&&function(t){e.d(o,t,(function(){return a[t]}))}(n);e("ac07");var i,r,u,s,c=e("f0c5"),l=Object(c["a"])(a["default"],i,r,!1,null,null,null,!1,u,s);o["default"]=l.exports},a60e:function(t,o,e){"use strict";(function(t){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var a=n(e("79cb"));function n(t){return t&&t.__esModule?t:{default:t}}var i=function(){e.e("components/uni-swiper-dot/uni-swiper-dot").then(function(){return resolve(e("e10f"))}.bind(null,e)).catch(e.oe)},r={data:function(){return{address:"优琦口腔（下沙江滨店）",collectActive:!1,bannersList:[],current:0,mode:"round",listData:[{url:"https://img9.51tietu.net/pic/2019-091200/ff1vqwm3q33ff1vqwm3q33.jpg",title:"超声波洗牙（豪华套餐）",price:"49.00",desc:"无痛清除牙结石，利用超声波的高频震动，将牙齿表面的牙结石，牙渍，菌斑等击碎并冲刷下来以达到清洁牙齿的目的。"},{url:"https://img9.51tietu.net/pic/2019-091200/ff1vqwm3q33ff1vqwm3q33.jpg",title:"超声波洗牙（豪华套餐）",price:"49.00",desc:"无痛清除牙结石，利用超声波的高频震动，将牙齿表面的牙结石，牙渍，菌斑等击碎并冲刷下来以达到清洁牙齿的目的。"},{url:"https://img9.51tietu.net/pic/2019-091200/ff1vqwm3q33ff1vqwm3q33.jpg",title:"超声波洗牙（豪华套餐）",price:"49.00",desc:"无痛清除牙结石，利用超声波的高频震动，将牙齿表面的牙结石，牙渍，菌斑等击碎并冲刷下来以达到清洁牙齿的目的。"}],tuwordFlag:!0,goodsFlag:!1,collectFlag:!1,goodNum:1,backHeight:"",joinCartBoxflag:!1,cartSucFlag:!1,choiceSpecificeIndex:0,category:0,goodsId:"",detailData:"",signalFlag:!1,signalMsg:"",cartGoodMsg:"",smallCarMsg:[],cartRuleId:"",tuDetailList:[]}},components:{uniSwiperDot:i},onShareAppMessage:function(t){return"button"===t.from?{title:"莱美牙"}:"menu"===t.from?(console.log(2222),{title:"莱美牙"}):void 0},onLoad:function(t){wx.showShareMenu({withShareTicket:!0,menus:["shareAppMessage","shareTimeline"]}),this.setData(t),this.backHeight=(2*parseInt(this.heights)-46)/2+parseInt(this.marginTop)+"rpx",this.getDetail(),this.joinCartMsg()},computed:{heights:function(){var o=t.getSystemInfoSync(),e=o.platform,a=o.statusBarHeight,n=a+4;return"android"==e.toLowerCase()&&(n+=4),n+38+"px"},marginTop:function(){var o=t.getSystemInfoSync(),e=o.platform,a=o.statusBarHeight,n=a+4;return"android"==e.toLowerCase()&&(n+=4),n+"rpx"}},methods:{backs:function(){t.navigateBack()},change:function(t){this.current=t.detail.current},makePhone:function(){t.makePhoneCall({phoneNumber:"114"})},jumps:function(){t.navigateTo({url:"/pages/shopMall/shopMallCart"})},btnJoinCart:function(){var o=this;o.joinCartBoxflag=!1,1==o.category?o.getJoinCart():2==o.category?o.getSignalBug():3==o.category&&t.navigateTo({url:"/pages/shopMall/confirm"})},joinCartMsg:function(){var t=this;t.$http.post("mini/v1/goods/cartinfo",{goods_id:t.goodsId},(function(o){0==o.state&&(t.cartGoodMsg=o.data.list,t.cartGoodMsg.goods_img=a.default.globalData.imgPrefixUrl+t.cartGoodMsg.goods_img,t.smallCarMsg.push({price:t.cartGoodMsg.rules[0].user_price}),t.smallCarMsg.push({youhuiPrice:t.cartGoodMsg.rules[0].youhui}),t.smallCarMsg.push({values:t.cartGoodMsg.rules[0].rule_values}),t.cartRuleId=t.cartGoodMsg.rules[0].rule_id)}))},getSignalBug:function(){var o=this;o.$http.post("mini/v1/goods/addgoodscart",{rule_id:o.cartRuleId,goods_id:o.goodsId,cart_num:o.goodNum,source_type:2},(function(o){0==o.state&&t.navigateTo({url:"/pages/shopMall/confirm?source_type=2"})}))},getChoiceSpec:function(t){console.log(t),this.choiceSpecificeIndex=t,this.smallCarMsg[0].price=this.cartGoodMsg.rules[t].user_price,this.smallCarMsg[1].youhuiPrice=this.cartGoodMsg.rules[t].youhui,this.smallCarMsg[2].values=this.cartGoodMsg.rules[t].rule_values,this.cartRuleId=this.cartGoodMsg.rules[t].rule_id},getGoodsNum:function(t){1==t&&this.goodNum>1?this.goodNum=this.goodNum-1:2==t&&(this.goodNum=this.goodNum+1)},getGoodNumsInput:function(t){this.goodNum=Number(t.detail.value)},getJoinCart:function(){var t=this;t.$http.post("mini/v1/goods/addgoodscart",{rule_id:t.cartRuleId,goods_id:t.goodsId,cart_num:t.goodNum,source_type:1},(function(o){0==o.state&&(console.log(o),t.cartSucFlag=!0,setTimeout((function(){t.cartSucFlag=!1}),2e3))}))},getDetail:function(){var t=this;t.$http.post("mini/v1/goods/gooddetailed",{goods_id:t.goodsId},(function(o){if(0==o.state){t.detailData=o.data.list;var e=JSON.parse(t.detailData.goods_imgs),n=JSON.parse(t.detailData.description);e.map((function(t){t.url=a.default.globalData.imgPrefixUrl+t.img})),t.detailData.label_str=t.detailData.label_str.split(","),n.map((function(t){t.pic=a.default.globalData.imgPrefixUrl+t.pic})),t.bannersList=e,t.tuDetailList=n}}))}}};o.default=r}).call(this,e("543d")["default"])},ac07:function(t,o,e){"use strict";var a=e("64c8"),n=e.n(a);n.a},ae71:function(t,o,e){"use strict";e.r(o);var a=e("ff90"),n=e.n(a);for(var i in a)"default"!==i&&function(t){e.d(o,t,(function(){return a[t]}))}(i);o["default"]=n.a},c2cb:function(t,o,e){"use strict";e.d(o,"b",(function(){return n})),e.d(o,"c",(function(){return i})),e.d(o,"a",(function(){return a}));var a={uniSwiperDot:function(){return e.e("components/uni-swiper-dot/uni-swiper-dot").then(e.bind(null,"e10f"))}},n=function(){var t=this,o=t.$createElement;t._self._c;t._isMounted||(t.e0=function(o){o.stopPropagation(),t.tuwordFlag=!0,t.goodsFlag=!1},t.e1=function(o){o.stopPropagation(),t.tuwordFlag=!1,t.goodsFlag=!0},t.e2=function(o){o.stopPropagation(),t.collectFlag=!t.collectFlag},t.e3=function(o){o.stopPropagation(),t.joinCartBoxflag=!0,t.category=1},t.e4=function(o){o.stopPropagation(),t.joinCartBoxflag=!0,t.category=2},t.e5=function(o){o.stopPropagation(),t.joinCartBoxflag=!0,t.category=3},t.e6=function(o){o.stopPropagation(),t.joinCartBoxflag=!1},t.e7=function(o){o.stopPropagation(),t.joinCartBoxflag=!1})},i=[]},dece:function(t,o,e){"use strict";var a=e("56ab"),n=e.n(a);n.a},dfa9:function(t,o,e){"use strict";(function(t){e("edce");a(e("66fd"));var o=a(e("57ac"));function a(t){return t&&t.__esModule?t:{default:t}}t(o.default)}).call(this,e("543d")["createPage"])},ff90:function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var a=i(e("66fd")),n=i(e("6c44"));function i(t){return t&&t.__esModule?t:{default:t}}Object.assign(a.default.prototype,n.default);var r={globalData:{imgPrefixUrl:"https://chikehometest.hzbixin.cn"},onLaunch:function(){console.log("App Launch")},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")}};o.default=r}},[["dfa9","common/runtime","common/vendor"]]]);