(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shopMall/category"],{3700:function(t,e,n){"use strict";n.r(e);var i=n("8637"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},"56c3":function(t,e,n){},"64c8":function(t,e,n){},"79cb":function(t,e,n){"use strict";n.r(e);var i=n("ae71");for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("ac07");var o,c,s,u,r=n("f0c5"),f=Object(r["a"])(i["default"],o,c,!1,null,null,null,!1,s,u);e["default"]=f.exports},8637:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("79cb"));function a(t){return t&&t.__esModule?t:{default:t}}var o={data:function(){return{titleActiveIndex:0,titleList:[],contentList:[],cate_id:"",cates_ids:"",keyValue:"",pagesV:1,pages:1,lists:[{url:"https://img9.51tietu.net/pic/2019-091200/ff1vqwm3q33ff1vqwm3q33.jpg",title:"云齿口腔医院",address:"下沙路521号  齿科",desc:"详情详情详情详情详情详情详情详情详情详详情详情详情详情详情详情详情详情详情详详情详情详情详情详情详情详情详情详情详"},{url:"https://img9.51tietu.net/pic/2019-091200/ff1vqwm3q33ff1vqwm3q33.jpg",title:"云齿口腔医院",address:"下沙路521号  齿科",desc:"详情详情详情详情详情详情详情详情详情详"},{url:"https://img9.51tietu.net/pic/2019-091200/ff1vqwm3q33ff1vqwm3q33.jpg",title:"云齿口腔医院",address:"下沙路521号  齿科",desc:"详情详情详情详情详情详情详情详情详情详"}]}},onLoad:function(t){this.setData(t),this.getTitleList()},computed:{heights:function(){var e=t.getSystemInfoSync(),n=e.platform,i=e.statusBarHeight,a=i+4;return"android"==n.toLowerCase()&&(a+=4),a+38+"px"},marginTop:function(){var e=t.getSystemInfoSync(),n=e.platform,i=e.statusBarHeight,a=i+4;return"android"==n.toLowerCase()&&(a+=4),a+"rpx"}},onReachBottom:function(){0==this.pagesV&&(this.pages+=1,this.getConentList(2))},methods:{backs:function(){t.navigateBack()},jumps:function(){t.navigateTo({url:"/pages/shopMall/list-detail"})},getTitleActive:function(t,e){this.titleActiveIndex=t,this.getConentList(1)},getTitleList:function(){var t=this;t.$http.post("mini/v1/goods/categorychild",{cate_id:t.cate_id},(function(e){0==e.state&&(t.titleList=e.data.list,t.cates_ids=t.titleList[0].id,t.getConentList(1))}))},getConentList:function(t){1==t&&(this.pages=1,this.contentList=[]);var e=this;e.$http.post("mini/v1/goods/goodslist",{cate_id:e.cates_ids,page:e.pages,keywords:e.keyValue},(function(t){if(0==t.state&&(e.pagesV=t.data.is_request,0==t.data.is_request)){var n=t.data.list;n.map((function(t){t.goods_img=i.default.globalData.imgPrefixUrl+t.goods_img}));var a=e.contentList;e.contentList=a.concat(n)}}))}}};e.default=o}).call(this,n("543d")["default"])},"9c13":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement;t._self._c},o=[]},ac07:function(t,e,n){"use strict";var i=n("64c8"),a=n.n(i);a.a},ae71:function(t,e,n){"use strict";n.r(e);var i=n("ff90"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},e9cd:function(t,e,n){"use strict";(function(t){n("edce");i(n("66fd"));var e=i(n("fddd"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},ece1:function(t,e,n){"use strict";var i=n("56c3"),a=n.n(i);a.a},fddd:function(t,e,n){"use strict";n.r(e);var i=n("9c13"),a=n("3700");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("ece1");var c,s=n("f0c5"),u=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"b4920cea",null,!1,i["a"],c);e["default"]=u.exports},ff90:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=o(n("66fd")),a=o(n("6c44"));function o(t){return t&&t.__esModule?t:{default:t}}Object.assign(i.default.prototype,a.default);var c={globalData:{imgPrefixUrl:"https://chikehometest.hzbixin.cn"},onLaunch:function(){console.log("App Launch")},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")}};e.default=c}},[["e9cd","common/runtime","common/vendor"]]]);