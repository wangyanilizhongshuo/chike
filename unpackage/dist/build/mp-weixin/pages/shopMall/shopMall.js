(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shopMall/shopMall"],{"057c":function(t,i,n){"use strict";var o=n("0f97"),a=n.n(o);a.a},"0f97":function(t,i,n){},"3a9a":function(t,i,n){"use strict";n.r(i);var o=n("96f4"),a=n("82c6");for(var e in a)"default"!==e&&function(t){n.d(i,t,(function(){return a[t]}))}(e);n("057c");var s,u=n("f0c5"),r=Object(u["a"])(a["default"],o["b"],o["c"],!1,null,"96515fda",null,!1,o["a"],s);i["default"]=r.exports},"64c8":function(t,i,n){},"79cb":function(t,i,n){"use strict";n.r(i);var o=n("ae71");for(var a in o)"default"!==a&&function(t){n.d(i,t,(function(){return o[t]}))}(a);n("ac07");var e,s,u,r,c=n("f0c5"),l=Object(c["a"])(o["default"],e,s,!1,null,null,null,!1,u,r);i["default"]=l.exports},"82c6":function(t,i,n){"use strict";n.r(i);var o=n("9700"),a=n.n(o);for(var e in o)"default"!==e&&function(t){n.d(i,t,(function(){return o[t]}))}(e);i["default"]=a.a},"96f4":function(t,i,n){"use strict";var o;n.d(i,"b",(function(){return a})),n.d(i,"c",(function(){return e})),n.d(i,"a",(function(){return o}));var a=function(){var t=this,i=t.$createElement;t._self._c},e=[]},9700:function(t,i,n){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var o=a(n("79cb"));function a(t){return t&&t.__esModule?t:{default:t}}var e=function(){n.e("components/vear-carousel/vear-carousel").then(function(){return resolve(n("9650"))}.bind(null,n)).catch(n.oe)},s={data:function(){return{visibles:!1,province:[],city:[],county:[],cityIndex:11e4,countyIndex:110100,addFlag1:!0,stystemDeviceH:"",carouselList:[],imgList:["https://img9.51tietu.net/pic/2019-091200/ff1vqwm3q33ff1vqwm3q33.jpg","https://img9.51tietu.net/pic/2019-091200/ff1vqwm3q33ff1vqwm3q33.jpg"],mainList:[],recommondList:[],shopList:[],pintuanList:[],yingheList:[],disPriceList:[],findGoodsList:[],pickGoodsList:[],days:"",hours:"",minutes:"",endTs:"",ptTime:"",shopCartLength:""}},onLoad:function(t){this.getpinTime(),this.getCarouselMap()},onShow:function(){this.getALlList(),this.getRecommond(),this.getPinTuan(),this.getYingHe(),this.getDiscount(),this.getFindGoods(),this.pickGoods(),this.getShopCart()},components:{carousel:e},methods:{jumpSearch:function(){t.navigateTo({url:"/pages/shopMall/market-searchTitle"})},fourLogoJump:function(i){t.navigateTo({url:"/pages/shopMall/category?cate_id="+i})},jumpsCart:function(){t.navigateTo({url:"/pages/shopMall/shopMallCart"})},jumps:function(i,n){1==i?t.navigateTo({url:"/pages/shopMall/list-detail?goodsId="+n}):2==i&&t.navigateTo({url:"/pages/shopMall/ptlist-detail?goodsId="+n})},getTeam:function(){t.navigateTo({url:"/pages/shopMall/teamUpList"})},jumpss:function(i){var n="";1==i?n="推荐好物":2==i?n="硬核补贴":3==i?n="每日特价":4==i?n="发现好物":5==i&&(n="甄选精品"),t.navigateTo({url:"/pages/shopMall/goodRecommend?category="+n})},getCarouselMap:function(){var t=this;t.$http.get("mini/v1/goods/indextop",{},(function(i){0==i.state&&(t.carouselList=i.data.category,t.imgList=i.data.banner,t.imgList.map((function(t){t.banner=o.default.globalData.imgPrefixUrl+t.banner})),t.carouselList.map((function(t){t.pic=o.default.globalData.imgPrefixUrl+t.pic})))}))},selectedBanner:function(t,i){console.log("🥒",t,i)},getRecommond:function(){var t=this;t.$http.post("mini/v1/goods/indextui",{},(function(i){if(0==i.state){var n=i.data.list;t.recommondList=n.slice(0,3),t.recommondList.map((function(t){t.goods_img=o.default.globalData.imgPrefixUrl+t.goods_img}))}}))},getPinTuan:function(){var t=this;t.$http.post("mini/v1/goods/indexCombination",{page:1},(function(i){if(0==i.state){var n=i.data.list;n.map((function(t){t.goods_img=o.default.globalData.imgPrefixUrl+t.goods_img})),t.pintuanList=n.slice(0,3)}}))},getpinTime:function(){var t=this;t.$http.get("mini/v1/goods/getcombinationtime",{},(function(i){0==i.state&&(t.ptTime=i.data.list.end_time,t.getNowTime())}))},getNowTime:function(){var t=this,i=Math.round((new Date).getTime()/1e3).toString(),n=this.ptTime-i;this.days=parseInt(n/60/60/24,10).toString().padStart(2,"0"),this.hours=parseInt(n/60/60%24,10).toString().padStart(2,"0"),this.minutes=parseInt(n/60%60,10).toString().padStart(2,"0");parseInt(n%60,10);setInterval((function(){var i=Math.round((new Date).getTime()/1e3).toString(),n=t.ptTime-i;t.days=parseInt(n/60/60/24,10).toString().padStart(2,"0"),t.hours=parseInt(n/60/60%24,10).toString().padStart(2,"0"),t.minutes=parseInt(n/60%60,10).toString().padStart(2,"0");parseInt(n%60,10)}),6e4)},getYingHe:function(){var t=this;t.$http.post("mini/v1/goods/indexubsidy",{page:1},(function(i){if(0==i.state){var n=i.data.list;n.map((function(t){t.goods_img=o.default.globalData.imgPrefixUrl+t.goods_img})),t.yingheList=n}}))},getDiscount:function(){var t=this;t.$http.post("mini/v1/goods/indexhot",{page:1},(function(i){var n=i.data.list;n.map((function(t){t.goods_img=o.default.globalData.imgPrefixUrl+t.goods_img})),t.disPriceList=n}))},getFindGoods:function(){var t=this;t.$http.post("mini/v1/goods/indexfind",{page:1},(function(i){if(0==i.state){var n=i.data.list;n.map((function(t){t.goods_img=o.default.globalData.imgPrefixUrl+t.goods_img})),t.findGoodsList=n}}))},pickGoods:function(){var t=this;t.$http.post("mini/v1/goods/indexnew",{page:1},(function(i){if(0==i.state){var n=i.data.list;n.map((function(t){t.goods_img=o.default.globalData.imgPrefixUrl+t.goods_img})),t.pickGoodsList=n}}))},getALlList:function(){var t=this;t.$http.post("mini/v1/goods/indexbottom",{},(function(i){if(0==i.state){var n=i.data.list;t.mainList=n.slice(0,11),t.mainList.map((function(t){t.goods_img=o.default.globalData.imgPrefixUrl+t.goods_img}))}}))},getShopCart:function(){var t=this;t.$http.post("mini/v1/goods/cartList",{},(function(i){0==i.state&&(t.shopCartLength=i.data.list.length,console.log(t.shopCartLength))}))}}};i.default=s}).call(this,n("543d")["default"])},ac07:function(t,i,n){"use strict";var o=n("64c8"),a=n.n(o);a.a},ae71:function(t,i,n){"use strict";n.r(i);var o=n("ff90"),a=n.n(o);for(var e in o)"default"!==e&&function(t){n.d(i,t,(function(){return o[t]}))}(e);i["default"]=a.a},b142:function(t,i,n){"use strict";(function(t){n("edce");o(n("66fd"));var i=o(n("3a9a"));function o(t){return t&&t.__esModule?t:{default:t}}t(i.default)}).call(this,n("543d")["createPage"])},ff90:function(t,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var o=e(n("66fd")),a=e(n("6c44"));function e(t){return t&&t.__esModule?t:{default:t}}Object.assign(o.default.prototype,a.default);var s={globalData:{imgPrefixUrl:"https://chikehometest.hzbixin.cn"},onLaunch:function(){console.log("App Launch")},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")}};i.default=s}},[["b142","common/runtime","common/vendor"]]]);