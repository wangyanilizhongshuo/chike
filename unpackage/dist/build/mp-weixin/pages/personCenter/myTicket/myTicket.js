(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/personCenter/myTicket/myTicket"],{"19b9":function(t,e,n){"use strict";var c;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return c}));var i=function(){var t=this,e=t.$createElement;t._self._c},a=[]},"1c3a":function(t,e,n){"use strict";n.r(e);var c=n("19b9"),i=n("c3a8");for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("ac4f");var o,s=n("f0c5"),u=Object(s["a"])(i["default"],c["b"],c["c"],!1,null,"5cc377f9",null,!1,c["a"],o);e["default"]=u.exports},2410:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{occurFlag:!0,ticketList:[],pages:1,pageV:1,serverShopId:"",payAllMoney:"",cu_id:""}},onLoad:function(e){this.setData(e),console.log(e),this.getList(),t.getStorageSync("serverRedId")&&(this.cu_id=t.getStorageSync("serverRedId"))},onReachBottom:function(){0==this.pagesV&&(this.pages+=1,this.getList())},methods:{jumps:function(e){1==e?t.navigateTo({url:"/pages/personCenter/myTicket/useRegular"}):2==e&&(console.log(this.serverShopId),t.navigateTo({url:"/pages/personCenter/myTicket/uselessTicket"}))},getList:function(){var t=this;t.$http.post("mini/v1/coupon/couponlist",{cateid:0,status:0,store_id:t.serverShopId,page:t.pages},(function(e){if(0==e.state&&(t.pagesV=e.data.is_request,0==e.data.is_request)){var n=e.data.list;n.map((function(e){console.log("conme"),Number(e.user_value)<=Number(t.payAllMoney)||2==e.typeid?e.is_check=0:e.user_value<=t.payAllMoney&&1==e.typeid&&(e.is_check=2),e.cu_id==t.cu_id&&(e.is_check=1)}));var c=t.ticketList;t.ticketList=c.concat(n),console.log(t.ticketList),console.log("that.ticketList")}}))},getChoice:function(t){}}};e.default=n}).call(this,n("543d")["default"])},"56d8":function(t,e,n){},"80e8":function(t,e,n){"use strict";(function(t){n("edce");c(n("66fd"));var e=c(n("1c3a"));function c(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},ac4f:function(t,e,n){"use strict";var c=n("56d8"),i=n.n(c);i.a},c3a8:function(t,e,n){"use strict";n.r(e);var c=n("2410"),i=n.n(c);for(var a in c)"default"!==a&&function(t){n.d(e,t,(function(){return c[t]}))}(a);e["default"]=i.a}},[["80e8","common/runtime","common/vendor"]]]);