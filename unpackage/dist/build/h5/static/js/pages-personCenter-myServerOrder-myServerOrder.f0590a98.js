(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-personCenter-myServerOrder-myServerOrder"],{"0cd4":function(t,i,e){"use strict";e.r(i);var s=e("6a02"),a=e("2fec");for(var n in a)"default"!==n&&function(t){e.d(i,t,(function(){return a[t]}))}(n);e("3deb");var l,o=e("f0c5"),c=Object(o["a"])(a["default"],s["b"],s["c"],!1,null,"16f21c0c",null,!1,s["a"],l);i["default"]=c.exports},"2fec":function(t,i,e){"use strict";e.r(i);var s=e("a3ab"),a=e.n(s);for(var n in s)"default"!==n&&function(t){e.d(i,t,(function(){return s[t]}))}(n);i["default"]=a.a},"3deb":function(t,i,e){"use strict";var s=e("c7a5"),a=e.n(s);a.a},"6a02":function(t,i,e){"use strict";var s;e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return n})),e.d(i,"a",(function(){return s}));var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"uni-server"},[e("v-uni-view",{staticClass:"titleBox"},t._l(t.titleList,(function(i,s){return e("v-uni-view",{key:s,staticClass:"titleList",on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.getTitleActive(s)}}},[e("v-uni-view",{class:t.titleActiveIndex==s?"fieldActive":"field"},[t._v(t._s(i))]),t.titleActiveIndex==s?e("v-uni-view",{staticClass:"lines"}):t._e()],1)})),1),e("v-uni-view",{staticStyle:{width:"750rpx",height:"100rpx"}}),0==t.titleActiveIndex?e("v-uni-view",{staticClass:"allBox style1"},[e("v-uni-view",{staticClass:"listBox"},t._l(t.willPayList,(function(i,s){return e("v-uni-view",{key:s,staticClass:"list"},[e("v-uni-view",{staticClass:"uni-title"},[e("v-uni-view",{staticClass:"uni-left"},[t._v(t._s(i.store_name))]),-1==i.status?e("v-uni-view",{staticClass:"tips"},[t._v("已取消")]):t._e(),0==i.status?e("v-uni-view",{staticClass:"tips"},[t._v("待付款")]):t._e(),1==i.status?e("v-uni-view",{staticClass:"tips"},[t._v("待使用")]):t._e(),2==i.status?e("v-uni-view",{staticClass:"tips"},[t._v("待评价")]):t._e(),3==i.status?e("v-uni-view",{staticClass:"tips"},[t._v("已完成")]):t._e()],1),t._l(i.service_info,(function(s,a){return e("v-uni-view",{key:a,staticClass:"uni-center",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.jumpsDetail1(i.so_id)}}},[e("v-uni-image",{staticClass:"lefts",attrs:{src:s.img},on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.jumps.apply(void 0,arguments)}}}),e("v-uni-view",{staticClass:"right"},[e("v-uni-view",{staticClass:"first"},[t._v(t._s(s.name))]),e("v-uni-view",{staticClass:"second"},[t._v("预约时间  "+t._s(i.appointment))]),e("v-uni-view",{staticClass:"third"},[t._v("¥"),e("v-uni-text",{staticClass:"money"},[t._v(t._s(s.price))])],1)],1)],1)})),e("v-uni-view",{staticClass:"uni-bottom"},[0==i.status||1==i.status?e("v-uni-view",{staticClass:"fields stylesss",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.cancelOrder(i.so_id,1)}}},[t._v("取消订单")]):t._e(),e("v-uni-text",{staticClass:"field stylesss",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.jumpsDetail1(i.so_id)}}},[t._v("去支付")])],1)],2)})),1)],1):t._e(),1==t.titleActiveIndex?e("v-uni-view",{staticClass:"allBox style1"},[e("v-uni-view",{staticClass:"listBox"},t._l(t.willDataList,(function(i,s){return e("v-uni-view",{key:s,staticClass:"list"},[e("v-uni-view",{staticClass:"uni-title"},[e("v-uni-view",{staticClass:"uni-left"},[t._v(t._s(i.store_name))]),-1==i.status?e("v-uni-view",{staticClass:"tips"},[t._v("已取消")]):t._e(),0==i.status?e("v-uni-view",{staticClass:"tips"},[t._v("待付款")]):t._e(),1==i.status?e("v-uni-view",{staticClass:"tips"},[t._v("待使用")]):t._e(),2==i.status?e("v-uni-view",{staticClass:"tips"},[t._v("待评价")]):t._e(),3==i.status?e("v-uni-view",{staticClass:"tips"},[t._v("已完成")]):t._e()],1),t._l(i.service_info,(function(s,a){return e("v-uni-view",{key:a,staticClass:"uni-center",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.jumpsDetail2(i.so_id)}}},[e("v-uni-image",{staticClass:"lefts",attrs:{src:s.img}}),e("v-uni-view",{staticClass:"right"},[e("v-uni-view",{staticClass:"first"},[t._v(t._s(s.name))]),e("v-uni-view",{staticClass:"second"},[t._v("预约时间  "+t._s(i.appointment))]),e("v-uni-view",{staticClass:"third"},[t._v("¥"),e("v-uni-text",{staticClass:"money"},[t._v(t._s(s.price))])],1)],1)],1)})),e("v-uni-view",{staticClass:"uni-bottom"},[e("timePicker",{attrs:{showType:"yearToMinute",beginDate:t.times,endDate:"2030-12-31",beginTime:"06:00:00",endTime:"23:59:59"},on:{btnConfirm:function(i){arguments[0]=i=t.$handleEvent(i),t.btnConfirm.apply(void 0,arguments)}}},[1==i.status?e("v-uni-view",{staticClass:"fields stylesss",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getRePairId(i.so_id)}}},[t._v("修改预约")]):t._e()],1),1==i.status?e("v-uni-text",{staticClass:"field stylesss",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.jumpsDetail2(i.so_id)}}},[t._v("去使用")]):t._e()],1)],2)})),1)],1):t._e(),2==t.titleActiveIndex?e("v-uni-view",{staticClass:"willUseBox style1"},[e("v-uni-view",{staticClass:"listBox"},t._l(t.willAssesslist,(function(i,s){return e("v-uni-view",{key:s,staticClass:"list"},[e("v-uni-view",{staticClass:"uni-title"},[e("v-uni-view",{staticClass:"uni-left"},[t._v(t._s(i.store_name))]),2==i.status?e("v-uni-view",{staticClass:"tips"},[t._v("待评价")]):t._e()],1),t._l(i.service_info,(function(s,a){return e("v-uni-view",{key:a,staticClass:"uni-center"},[e("v-uni-image",{staticClass:"lefts",attrs:{src:s.img}}),e("v-uni-view",{staticClass:"right"},[e("v-uni-view",{staticClass:"first"},[t._v(t._s(s.name))]),e("v-uni-view",{staticClass:"second"},[t._v("预约时间  "+t._s(i.appointment))]),e("v-uni-view",{staticClass:"third"},[t._v("¥"),e("v-uni-text",{staticClass:"money"},[t._v(t._s(s.price))])],1)],1)],1)})),e("v-uni-view",{staticClass:"uni-bottom"},[e("v-uni-text",{staticClass:"field stylesss",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.jumpsMsg(i.so_id,i.store_id)}}},[t._v("去留言")])],1)],2)})),1)],1):t._e(),3==t.titleActiveIndex?e("v-uni-view",{staticClass:"willUseBox style1"},[e("v-uni-view",{staticClass:"listBox"},t._l(t.allDataList,(function(i,s){return e("v-uni-view",{key:s,staticClass:"list"},[e("v-uni-view",{staticClass:"uni-title"},[e("v-uni-view",{staticClass:"uni-left"},[t._v(t._s(i.store_name))]),-1==i.status?e("v-uni-view",{staticClass:"tips"},[t._v("已取消")]):t._e(),0==i.status?e("v-uni-view",{staticClass:"tips"},[t._v("待付款")]):t._e(),1==i.status?e("v-uni-view",{staticClass:"tips"},[t._v("待使用")]):t._e(),2==i.status?e("v-uni-view",{staticClass:"tips"},[t._v("待评价")]):t._e(),3==i.status?e("v-uni-view",{staticClass:"tips"},[t._v("已完成")]):t._e()],1),t._l(i.service_info,(function(s,a){return e("v-uni-view",{key:a,staticClass:"uni-center"},[e("v-uni-image",{staticClass:"lefts",attrs:{src:s.img}}),e("v-uni-view",{staticClass:"right"},[e("v-uni-view",{staticClass:"first"},[t._v(t._s(s.name))]),e("v-uni-view",{staticClass:"second"},[t._v("预约时间  "+t._s(i.appointment))]),e("v-uni-view",{staticClass:"third"},[t._v("¥"),e("v-uni-text",{staticClass:"money"},[t._v(t._s(s.price))])],1)],1)],1)}))],2)})),1)],1):t._e(),t.tipflag?e("v-uni-view",{staticClass:"showtips"},[t._v(t._s(t.tipMsg))]):t._e()],1)},n=[]},"83e2":function(t,i,e){var s=e("24fb");i=s(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-server[data-v-16f21c0c]{background-color:#fff;height:100vh}.titleBox[data-v-16f21c0c]{position:fixed;left:%?0?%;top:%?0?%;z-index:30;background-color:#fff;width:%?750?%;height:%?100?%;padding:%?0?% %?75?%;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?28?%;border-bottom:%?2?% solid #f2f2f2}.titleBox .titleList[data-v-16f21c0c]{width:%?200?%;text-align:center;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?60?%;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.titleBox .field[data-v-16f21c0c]{color:#b6b6b6}.titleBox .fieldActive[data-v-16f21c0c]{color:#ff9a9e}.titleBox .lines[data-v-16f21c0c]{width:%?50?%;height:%?6?%;background:#ff6a6c;border-radius:%?2?%}.style1 .listBox[data-v-16f21c0c]{background-color:#fff}.style1 .listBox .list[data-v-16f21c0c]{width:%?750?%;padding:%?30?%;box-sizing:border-box}.style1 .listBox .list .uni-title[data-v-16f21c0c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.style1 .listBox .list .uni-title .uni-left[data-v-16f21c0c]{font-weight:700;color:#000;font-size:%?32?%}.style1 .listBox .list .uni-title .tips[data-v-16f21c0c]{color:#ff6a6c;font-size:%?24?%}.style1 .listBox .list .uni-bottom[data-v-16f21c0c]{height:%?60?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.style1 .listBox .list .uni-bottom .fields[data-v-16f21c0c]{background:#fff;color:#ff9a9e;margin-right:%?30?%;border:%?2?% solid #ff9a9e;box-sizing:border-box}.style1 .listBox .list .uni-bottom .stylesss[data-v-16f21c0c]{display:block;width:%?160?%;height:%?60?%;text-align:center;line-height:%?60?%;font-size:%?28?%;border-radius:%?30?%}.style1 .listBox .list .uni-bottom .field[data-v-16f21c0c]{background:#ff9a9e;color:#fff}.style1 .listBox .list .uni-center[data-v-16f21c0c]{display:-webkit-box;display:-webkit-flex;display:flex;height:%?150?%;margin:%?46?% %?0?% %?16?%}.style1 .listBox .list .uni-center .lefts[data-v-16f21c0c]{display:block;width:%?150?%;height:%?150?%;border-radius:%?8?%;margin-right:%?20?%}.style1 .listBox .list .uni-center .right[data-v-16f21c0c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.style1 .listBox .list .uni-center .right .first[data-v-16f21c0c]{color:#000;font-size:%?28?%;font-weight:700}.style1 .listBox .list .uni-center .right .second[data-v-16f21c0c]{color:#454545;font-size:%?24?%}.style1 .listBox .list .uni-center .right .third[data-v-16f21c0c]{color:red;font-size:%?32?%;font-weight:700}.style1 .listBox .list .uni-center .right .third .money[data-v-16f21c0c]{font-size:%?42?%}.showtips[data-v-16f21c0c]{width:%?350?%;height:%?100?%;background:#000;opacity:.6;border-radius:%?16?%;position:fixed;left:%?200?%;z-index:1000;top:%?600?%;color:#fff;font-size:%?28?%;line-height:%?100?%;text-align:center}',""]),t.exports=i},a3ab:function(t,i,e){"use strict";var s=e("4ea4");e("99af"),e("d81d"),e("d3b7"),e("25f0"),e("4d90"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=s(e("f641")),n=s(e("79cb")),l={data:function(){return{tipflag:!1,tipMsg:"",titleActiveIndex:0,titleList:["待支付","待使用","待评价","已完成"],timeValue:"",pages:1,pageV:1,allDataList:[],willDataList:[],willPayList:[],willAssesslist:[],repairId:""}},components:{timePicker:a.default},onLoad:function(){},onShow:function(){this.getwillPay()},onReachBottom:function(){0==this.pagesV&&(this.pages+=1,0==this.titleActiveIndex?this.getwillPay():1==this.titleActiveIndex?this.getWillList():2==this.titleActiveIndex?this.getAssessList():3==this.titleActiveIndex&&this.getAllList())},computed:{times:function(){var t=new Date,i=t.getFullYear(),e=(t.getMonth()+1).toString().padStart(2,"0"),s=t.getDate().toString().padStart(2,"0");return i+"-"+e+"-"+s}},methods:{jumpsMsg:function(t,i){uni.navigateTo({url:"/pages/personCenter/myServerOrder/giveAMsg?soId="+t+"&storeId="+i})},getTitleActive:function(t){this.pageV=1,this.pages=1,this.titleActiveIndex=t,0==this.titleActiveIndex?(this.willPayList=[],this.getwillPay()):1==this.titleActiveIndex?(this.willDataList=[],this.getWillList()):2==this.titleActiveIndex?(this.willAssesslist=[],this.getAssessList()):3==this.titleActiveIndex&&(this.allDataList=[],this.getAllList())},jumpsDetail1:function(t){uni.navigateTo({url:"/pages/personCenter/myServerOrder/serverDetail?sord_id="+t+"&sType=1"})},jumpsDetail2:function(t){uni.navigateTo({url:"/pages/personCenter/myServerOrder/serverDetail?sord_id="+t+"&sType=2"})},jumpsDetail:function(t){2==t&&uni.navigateTo({url:"/pages/personCenter/myServerOrder/giveAMsg"})},btnConfirm:function(t){t.month=t.month.padStart(2,0),t.day=t.day.padStart(2,0),t.hour=t.hour.padStart(2,0),t.minute=t.minute.padStart(2,0),this.timeValue=t.year+"-"+t.month+"-"+t.day+" "+t.hour+":"+t.minute,console.log(this.timeValue),this.repaird()},getRePairId:function(t){this.repairId=t},repaird:function(){var t=this;t.$http.post("mini/v1/service/updateappointment",{so_id:t.repairId,appointment:t.timeValue},(function(i){0==i.state?(t.tipflag=!0,t.tipMsg="时间修改成功",setTimeout((function(){t.tipflag=!1}),3e3)):(t.tipflag=!0,t.tipMsg=i.msg,setTimeout((function(){t.tipflag=!1}),3e3))}))},cancelOrder:function(t,i){var e=this;uni.showModal({title:"提示",content:"取消订单？",success:function(s){s.confirm?e.$http.post("mini/v1/service/cancelorder",{so_id:t},(function(t){0==t.state&&(e.pageV=1,e.pages=1,1==i?(e.willPayList=[],e.getwillPay()):2==i?(e.willDataList=[],e.getWillList()):3==i&&(e.allDataList=[],e.getAllList()))})):s.cancel&&console.log("用户点击取消")}})},getAllList:function(){var t=this;t.$http.post("mini/v1/service/orderlist",{typeid:3,page:t.pages},(function(i){if(0==i.state&&(t.pagesV=i.data.is_request,0==i.data.is_request)){var e=i.data.list;e.map((function(t){t.service_info.map((function(t){t.img=n.default.globalData.imgPrefixUrl+t.img}))}));var s=t.allDataList;t.allDataList=s.concat(e),console.log(t.allDataList)}}))},getWillList:function(){var t=this;t.$http.post("mini/v1/service/orderlist",{page:t.pages,typeid:1},(function(i){if(0==i.state&&(t.pagesV=i.data.is_request,0==i.data.is_request)){var e=i.data.list;e.map((function(t){t.service_info.map((function(t){t.img=n.default.globalData.imgPrefixUrl+t.img}))}));var s=t.willDataList;t.willDataList=s.concat(e),console.log(t.willDataList)}}))},getAssessList:function(){var t=this;t.$http.post("mini/v1/service/orderlist",{page:t.pages,typeid:2},(function(i){if(0==i.state&&(t.pagesV=i.data.is_request,0==i.data.is_request)){var e=i.data.list;e.map((function(t){t.service_info.map((function(t){t.img=n.default.globalData.imgPrefixUrl+t.img}))}));var s=t.willAssesslist;t.willAssesslist=s.concat(e),console.log(t.willAssesslist)}}))},getwillPay:function(){var t=this;t.$http.post("mini/v1/service/orderlist",{page:t.pages,typeid:0},(function(i){if(0==i.state&&(t.pagesV=i.data.is_request,0==i.data.is_request)){var e=i.data.list;e.map((function(t){t.service_info.map((function(t){t.img=n.default.globalData.imgPrefixUrl+t.img}))}));var s=t.willPayList;t.willPayList=s.concat(e),console.log(t.willPayList)}}))}}};i.default=l},c7a5:function(t,i,e){var s=e("83e2");"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var a=e("4f06").default;a("7b587d25",s,!0,{sourceMap:!1,shadowMode:!1})}}]);