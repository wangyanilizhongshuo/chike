(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shopMall/ticket"],{"128c":function(t,e,c){"use strict";c.r(e);var o=c("8213"),n=c("b071");for(var i in n)"default"!==i&&function(t){c.d(e,t,(function(){return n[t]}))}(i);c("6ba1");var r,s=c("f0c5"),a=Object(s["a"])(n["default"],o["b"],o["c"],!1,null,"7362035d",null,!1,o["a"],r);e["default"]=a.exports},"5f69":function(t,e,c){"use strict";(function(t){function c(t,e){var c=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),c.push.apply(c,o)}return c}function o(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?c(Object(o),!0).forEach((function(e){n(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):c(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function n(t,e,c){return e in t?Object.defineProperty(t,e,{value:c,enumerable:!0,configurable:!0,writable:!0}):t[e]=c,t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{occurFlag:!0,ticketList:[],pages:1,pageV:1,serverShopId:"",payAllMoney:"",cu_id:""}},onLoad:function(e){this.setData(e),console.log(e),this.getList(),t.getStorageSync("goodsRedId")&&(this.cu_id=t.getStorageSync("goodsRedId"))},onReachBottom:function(){0==this.pagesV&&(this.pages+=1,this.getList())},methods:{jumps:function(e){1==e?t.navigateTo({url:"/pages/shopMall/useRegular"}):2==e&&(console.log(this.serverShopId),t.navigateTo({url:"/pages/shopMall/uselessTicket?serverShopId="+this.serverShopId}))},getList:function(){var t=this;t.$http.post("mini/v1/coupon/couponlist",{cateid:1,status:0,store_id:t.serverShopId,page:t.pages},(function(e){if(0==e.state&&(t.pagesV=e.data.is_request,0==e.data.is_request)){var c=e.data.list;c.map((function(e){console.log("conme"),Number(e.user_value)<=Number(t.payAllMoney)?e.is_check=0:Number(e.user_value)>=Number(t.payAllMoney)&&(e.is_check=2),e.cu_id==t.cu_id&&(e.is_check=1)}));var o=t.ticketList;t.ticketList=o.concat(c),console.log(t.ticketList),console.log("that.ticketList")}}))},getChoice:function(e){var c=this;if(console.log(e),console.log("wangyani"),c.ticketList.map((function(c,o,n){o!==e&&1==c.is_check&&(c.is_check=0,t.removeStorageSync("goodsRedId"))})),0==c.ticketList[e].is_check){var n=o(o({},c.ticketList[e]),{},{is_check:1});c.$set(c.ticketList,e,n),t.setStorageSync("goodsRedId",c.ticketList[e].cu_id)}else if(1==c.ticketList[e].is_check){var i=o(o({},c.ticketList[e]),{},{is_check:0});t.setStorageSync("goodsRedId",0),c.$set(c.ticketList,e,i)}}}};e.default=i}).call(this,c("543d")["default"])},"69d1":function(t,e,c){},"6ba1":function(t,e,c){"use strict";var o=c("69d1"),n=c.n(o);n.a},8213:function(t,e,c){"use strict";var o;c.d(e,"b",(function(){return n})),c.d(e,"c",(function(){return i})),c.d(e,"a",(function(){return o}));var n=function(){var t=this,e=t.$createElement;t._self._c},i=[]},b071:function(t,e,c){"use strict";c.r(e);var o=c("5f69"),n=c.n(o);for(var i in o)"default"!==i&&function(t){c.d(e,t,(function(){return o[t]}))}(i);e["default"]=n.a},baad:function(t,e,c){"use strict";(function(t){c("edce");o(c("66fd"));var e=o(c("128c"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,c("543d")["createPage"])}},[["baad","common/runtime","common/vendor"]]]);