(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-personCenter-myTicket-myTicket"],{"0de5":function(t,i,e){"use strict";e("99af"),e("d81d"),e("a9e3"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={data:function(){return{occurFlag:!0,ticketList:[],pages:1,pageV:1,serverShopId:"",payAllMoney:"",cu_id:""}},onLoad:function(t){this.setData(t),console.log(t),this.getList(),uni.getStorageSync("serverRedId")&&(this.cu_id=uni.getStorageSync("serverRedId"))},onReachBottom:function(){0==this.pagesV&&(this.pages+=1,this.getList())},methods:{jumps:function(t){1==t?uni.navigateTo({url:"/pages/personCenter/myTicket/useRegular"}):2==t&&(console.log(this.serverShopId),uni.navigateTo({url:"/pages/personCenter/myTicket/uselessTicket"}))},getList:function(){var t=this;t.$http.post("mini/v1/coupon/couponlist",{cateid:0,status:0,store_id:t.serverShopId,page:t.pages},(function(i){if(0==i.state&&(t.pagesV=i.data.is_request,0==i.data.is_request)){var e=i.data.list;e.map((function(i){console.log("conme"),Number(i.user_value)<=Number(t.payAllMoney)||2==i.typeid?i.is_check=0:i.user_value<=t.payAllMoney&&1==i.typeid&&(i.is_check=2),i.cu_id==t.cu_id&&(i.is_check=1)}));var n=t.ticketList;t.ticketList=n.concat(e),console.log(t.ticketList),console.log("that.ticketList")}}))},getChoice:function(t){}}};i.default=n},"1c3a":function(t,i,e){"use strict";e.r(i);var n=e("2199"),s=e("c3a8");for(var o in s)"default"!==o&&function(t){e.d(i,t,(function(){return s[t]}))}(o);e("c4b8");var a,c=e("f0c5"),r=Object(c["a"])(s["default"],n["b"],n["c"],!1,null,"4f70b6c1",null,!1,n["a"],a);i["default"]=r.exports},2199:function(t,i,e){"use strict";var n;e.d(i,"b",(function(){return s})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return n}));var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"uni-serverTicket"},[t._l(t.ticketList,(function(i,n){return e("v-uni-view",{key:n,staticClass:"ticketBox"},[e("v-uni-view",{staticClass:"ticketList",on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.getChoice(n)}}},[e("v-uni-view",{staticClass:"uni-tops"},[e("v-uni-view",{staticClass:"uni-lefts"},[e("v-uni-image",{staticClass:"left1",attrs:{src:"http://zxyp.hzbixin.cn/files/87031613961971298.jpg",mode:""}}),e("v-uni-view",{staticClass:"right1"},[2==i.cate_id?e("v-uni-view",{staticClass:"top1"},[t._v("服务券")]):t._e(),1==i.cate_id?e("v-uni-view",{staticClass:"top1"},[t._v("商品券")]):t._e(),e("v-uni-view",{staticClass:"down1"},[t._v(t._s(i.expiration))])],1)],1),e("v-uni-view",{staticClass:"uni-rights"},[1==i.typeid?e("v-uni-view",{staticClass:"top2"},[e("v-uni-view",{staticClass:"priLogo"},[t._v("¥")]),e("v-uni-view",{staticClass:"moneyValue"},[t._v(t._s(i.value))])],1):t._e(),2==i.typeid?e("v-uni-view",{staticClass:"top2",staticStyle:{"align-items":"flex-end"}},[e("v-uni-view",{staticClass:"moneyValue",staticStyle:{"font-size":"50rpx"}},[t._v(t._s(i.value))]),e("v-uni-view",{staticClass:"priLogo"},[t._v("折")])],1):t._e(),e("v-uni-view",{staticClass:"down2"},[t._v(t._s(i.title))])],1)],1),e("v-uni-view",{staticClass:"uni-center"}),e("v-uni-view",{staticClass:"uni-downs"},[t._v(t._s(i.info))]),1==i.is_check?e("v-uni-image",{staticClass:"clickImg",attrs:{src:"http://zxyp.hzbixin.cn/files/21341608268240828.jpg"}}):t._e()],1)],1)})),e("v-uni-view",{staticClass:"bottom-tips"},[e("v-uni-view",{staticClass:"reguler style123",on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.jumps(1)}}},[t._v("使用规则")]),t.occurFlag?e("v-uni-view",{staticClass:"uselessTicker style123",on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.jumps(2)}}},[t._v("查看无效券")]):t._e()],1),e("v-uni-view",{staticStyle:{height:"125rpx",width:"750rpx"}})],2)},o=[]},"49bf":function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-serverTicket[data-v-4f70b6c1]{min-height:100vh;background-color:#f2f2f2;position:relative;left:%?0?%;top:%?0?%;padding-top:%?40?%;box-sizing:border-box}.clickImg[data-v-4f70b6c1]{display:blcok;width:%?50?%;height:%?50?%;position:absolute;right:%?0?%;top:%?0?%}.uni-center[data-v-4f70b6c1]{border:%?1?% dashed #f2f2f2}.ticketBox[data-v-4f70b6c1]{width:%?750?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.ticketBox .ticketList[data-v-4f70b6c1]{width:%?657?%;height:%?220?%;margin-bottom:%?26?%;border-radius:%?8?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;background-color:#fff;padding:%?25?% %?30?%;box-sizing:border-box;position:relative;left:%?0?%;top:%?0?%}.ticketBox .ticketList .uni-tops[data-v-4f70b6c1]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.ticketBox .ticketList .uni-tops .uni-lefts[data-v-4f70b6c1]{display:-webkit-box;display:-webkit-flex;display:flex}.ticketBox .ticketList .uni-tops .uni-lefts .left1[data-v-4f70b6c1]{display:block;width:%?76?%;height:%?76?%;margin-right:%?22?%}.ticketBox .ticketList .uni-tops .uni-lefts .right1[data-v-4f70b6c1]{height:%?76?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.ticketBox .ticketList .uni-tops .uni-lefts .right1 .top1[data-v-4f70b6c1]{font-weight:700;color:#030303;font-size:%?32?%}.ticketBox .ticketList .uni-tops .uni-lefts .right1 .down1[data-v-4f70b6c1]{color:#7e7e7e;font-size:%?20?%}.ticketBox .ticketList .uni-tops .uni-rights[data-v-4f70b6c1]{height:%?76?%;color:#ed593f;font-weight:700;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.ticketBox .ticketList .uni-tops .uni-rights .top2[data-v-4f70b6c1]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start}.ticketBox .ticketList .uni-tops .uni-rights .top2 .priLogo[data-v-4f70b6c1]{font-size:%?20?%;margin-right:%?4?%}.ticketBox .ticketList .uni-tops .uni-rights .top2 .moneyValue[data-v-4f70b6c1]{font-size:%?30?%}.ticketBox .ticketList .uni-tops .uni-rights .down2[data-v-4f70b6c1]{font-size:%?20?%;color:#7e7e7e;font-weight:400}.ticketBox .ticketList .uni-downs[data-v-4f70b6c1]{font-size:%?20?%;color:#7e7e7e;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}.bottom-tips[data-v-4f70b6c1]{position:fixed;bottom:%?0?%;left:%?0?%;height:%?125?%;width:%?750?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start;color:#888;font-size:%?26?%;z-index:100;background-color:#f2f2f2;padding-top:%?20?%;box-sizing:border-box}.bottom-tips .reguler[data-v-4f70b6c1]{margin-right:%?107?%}',""]),t.exports=i},"58c8":function(t,i,e){var n=e("49bf");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var s=e("4f06").default;s("537818c8",n,!0,{sourceMap:!1,shadowMode:!1})},c3a8:function(t,i,e){"use strict";e.r(i);var n=e("0de5"),s=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(i,t,(function(){return n[t]}))}(o);i["default"]=s.a},c4b8:function(t,i,e){"use strict";var n=e("58c8"),s=e.n(n);s.a}}]);