(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-personCenter-myCustomerServer-myCustomerServer"],{"04bd":function(t,n,e){"use strict";e("d81d"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={data:function(){return{ImageUrl:""}},onLoad:function(){},methods:{getChoiceImg:function(){var t=this;uni.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(n){var e=n.tempFilePaths;t.ImageUrl=e[0],e.map((function(t){uni.uploadFile({url:"https://chikehometest.hzbixin.cn/mini/v1/overt/uploadimg",filePath:t,name:"file",formData:{filetype:"feedback"},success:function(t){var n="object"===typeof t.data?t.data:JSON.parse(t.data),e="https://chikehometest.hzbixin.cn"+n.data.imgpath;console.log(e)},fail:function(t){console.log(3333)}})}))}})},jumps:function(){uni.navigateTo({url:"/pages/personCenter/myOpinion/opinionSuccess"})}}};n.default=o},3034:function(t,n,e){var o=e("24fb");n=o(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-myCustomer[data-v-6f54d822]{width:%?750?%;background-color:#f2f2f2;height:100vh;position:relative;left:%?0?%;top:%?0?%}.uni-myCustomer .textArea[data-v-6f54d822]{width:%?750?%;height:%?400?%;padding:%?30?%;box-sizing:border-box;background-color:#fff;border-bottom:%?2?% solid #f2f2f2}.uni-myCustomer .btnSub[data-v-6f54d822]{width:%?690?%;height:%?90?%;line-height:%?90?%;text-align:center;color:#fff;font-size:%?28?%;position:absolute;left:%?30?%;bottom:%?30?%;background:#ff9a9e;border-radius:%?45?%}.photoBox[data-v-6f54d822]{padding:%?40?% %?0?%;position:relative;left:%?0?%;top:%?0?%;width:%?750?%;box-sizing:border-box;background-color:#fff}.photoBox .bgImg[data-v-6f54d822]{display:block;width:%?150?%;height:%?150?%;margin-left:%?30?%}.photoBox .cancelImg[data-v-6f54d822]{display:block;width:%?40?%;height:%?40?%;position:absolute;left:%?150?%;top:%?20?%}',""]),t.exports=n},a289:function(t,n,e){"use strict";var o;e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){return o}));var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"uni-myCustomer"},[e("v-uni-button",{staticStyle:{margin:"0rpx",padding:"0rpx"},attrs:{"open-type":"contact"}},[e("v-uni-view",{staticClass:"fields"},[t._v("进入咨询")])],1)],1)},i=[]},c960:function(t,n,e){"use strict";e.r(n);var o=e("a289"),r=e("d74a");for(var i in r)"default"!==i&&function(t){e.d(n,t,(function(){return r[t]}))}(i);e("c9f0");var a,s=e("f0c5"),c=Object(s["a"])(r["default"],o["b"],o["c"],!1,null,"6f54d822",null,!1,o["a"],a);n["default"]=c.exports},c9f0:function(t,n,e){"use strict";var o=e("d439"),r=e.n(o);r.a},d439:function(t,n,e){var o=e("3034");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var r=e("4f06").default;r("4cc39c68",o,!0,{sourceMap:!1,shadowMode:!1})},d74a:function(t,n,e){"use strict";e.r(n);var o=e("04bd"),r=e.n(o);for(var i in o)"default"!==i&&function(t){e.d(n,t,(function(){return o[t]}))}(i);n["default"]=r.a}}]);