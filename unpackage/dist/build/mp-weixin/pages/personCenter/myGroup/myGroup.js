(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/personCenter/myGroup/myGroup"],{"1e61":function(t,e,n){"use strict";var a=n("f853"),i=n.n(a);i.a},"34a8":function(t,e,n){"use strict";n.r(e);var a=n("fc70"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},"64c8":function(t,e,n){},"79cb":function(t,e,n){"use strict";n.r(e);var a=n("ae71");for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);n("ac07");var o,u,r,c,s=n("f0c5"),f=Object(s["a"])(a["default"],o,u,!1,null,null,null,!1,r,c);e["default"]=f.exports},a89f:function(t,e,n){"use strict";n.r(e);var a=n("b6c8"),i=n("34a8");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("1e61");var u,r=n("f0c5"),c=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,"4d6114aa",null,!1,a["a"],u);e["default"]=c.exports},ac07:function(t,e,n){"use strict";var a=n("64c8"),i=n.n(a);i.a},ae71:function(t,e,n){"use strict";n.r(e);var a=n("ff90"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},b6c8:function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement;t._self._c},o=[]},f670:function(t,e,n){"use strict";(function(t){n("edce");a(n("66fd"));var e=a(n("a89f"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},f853:function(t,e,n){},fc70:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("79cb"));function i(t){return t&&t.__esModule?t:{default:t}}var o={data:function(){return{titleActiveIndex:0,titleList:["拼团中","拼团成功","拼团失败"],pagesV:1,pages:1,mainList:[]}},onLoad:function(){this.getListData()},onReachBottom:function(){0==this.pagesV&&(this.pages+=1,this.getListData())},methods:{getTitleActive:function(t){this.titleActiveIndex=t,this.mainList=[],this.pages=1,this.getListData()},jump:function(e,n){1==e?t.navigateTo({url:"/pages/personCenter/myGroup/groupStart?order_sn="+n}):2==e?t.navigateTo({url:"/pages/personCenter/myGroup/groupSuccess?order_sn="+n}):3==e&&t.navigateTo({url:"/pages/personCenter/myGroup/groupFail?order_sn="+n})},getListData:function(){var t=this;t.$http.post("mini/v1/user/mycombination",{status:t.titleActiveIndex,page:t.pages},(function(e){if(0==e.state&&(t.pagesV=e.data.is_request,0==e.data.is_request)){var n=e.data.list;n.map((function(t){t.goods.map((function(t){t.goods_img=a.default.globalData.imgPrefixUrl+t.goods_img}))}));var i=t.mainList;t.mainList=i.concat(n)}}))}}};e.default=o}).call(this,n("543d")["default"])},ff90:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=o(n("66fd")),i=o(n("6c44"));function o(t){return t&&t.__esModule?t:{default:t}}Object.assign(a.default.prototype,i.default);var u={globalData:{imgPrefixUrl:"https://chikehometest.hzbixin.cn"},onLaunch:function(){console.log("App Launch")},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")}};e.default=u}},[["f670","common/runtime","common/vendor"]]]);