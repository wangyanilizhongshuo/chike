(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-noticeList"],{3669:function(t,n,i){var e=i("24fb");n=e(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-notice[data-v-e25ca80c]{border-top:%?20?% solid #f2f2f2}.uni-notice .noticeBox[data-v-e25ca80c]{width:%?750?%;padding:%?36?% %?30?% %?33?%;box-sizing:border-box;background-color:#fff;border-bottom:%?2?% solid #f2f2f2}.uni-notice .noticeBox .uni-tops[data-v-e25ca80c]{display:-webkit-box;display:-webkit-flex;display:flex;width:%?690?%;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.uni-notice .noticeBox .uni-tops .left[data-v-e25ca80c]{color:#222;font-size:%?28?%}.uni-notice .noticeBox .uni-tops .right[data-v-e25ca80c]{color:#888;font-size:%?24?%}.uni-notice .noticeBox .uni-downs[data-v-e25ca80c]{margin-top:%?20?%;color:#222;font-size:%?24?%}',""]),t.exports=n},"7a6e":function(t,n,i){"use strict";i.r(n);var e=i("a387"),o=i.n(e);for(var c in e)"default"!==c&&function(t){i.d(n,t,(function(){return e[t]}))}(c);n["default"]=o.a},a387:function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{noticeList:[]}},onLoad:function(){this.getNotice()},methods:{getNotice:function(){var t=this;this.$http.get("mini/v1/service/notice",{},(function(n){0==n.state&&(t.noticeList=n.data.list)}))}}};n.default=e},cc2d:function(t,n,i){var e=i("3669");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var o=i("4f06").default;o("a8fecb50",e,!0,{sourceMap:!1,shadowMode:!1})},ef5b:function(t,n,i){"use strict";var e=i("cc2d"),o=i.n(e);o.a},f783:function(t,n,i){"use strict";i.r(n);var e=i("fec9"),o=i("7a6e");for(var c in o)"default"!==c&&function(t){i.d(n,t,(function(){return o[t]}))}(c);i("ef5b");var a,r=i("f0c5"),s=Object(r["a"])(o["default"],e["b"],e["c"],!1,null,"e25ca80c",null,!1,e["a"],a);n["default"]=s.exports},fec9:function(t,n,i){"use strict";var e;i.d(n,"b",(function(){return o})),i.d(n,"c",(function(){return c})),i.d(n,"a",(function(){return e}));var o=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("v-uni-view",{staticClass:"uni-notice"},t._l(t.noticeList,(function(n,e){return i("v-uni-view",{key:e,staticClass:"noticeBox"},[i("v-uni-view",{staticClass:"uni-tops"},[i("v-uni-view",{staticClass:"left"},[t._v(t._s(n.gonggao))]),i("v-uni-view",{staticClass:"right"},[t._v(t._s(n.add_time))])],1),i("v-uni-view",{staticClass:"uni-downs"},[t._v(t._s(n.notice))])],1)})),1)},c=[]}}]);