(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-personCenter-myGuide-myGuide"],{"35c5":function(n,t,r){var a=r("5826");"string"===typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);var e=r("4f06").default;e("4fb43760",a,!0,{sourceMap:!1,shadowMode:!1})},4943:function(n,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{msgData:[]}},onLoad:function(){this.getData()},methods:{getData:function(){var n=this;n.$http.post("mini/v1/user/aboutUs",{status:6},(function(t){0==t.state&&(n.msgData=t.data.list.content,console.log(t))}))}}};t.default=a},5826:function(n,t,r){var a=r("24fb");t=a(!1),t.push([n.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-balanceRule[data-v-4d22b4d0]{width:%?750?%;padding:%?40?%;box-sizing:border-box}.uni-balanceRule .listbox .list[data-v-4d22b4d0]{color:#888;font-size:%?28?%;line-height:%?50?%}',""]),n.exports=t},bd61:function(n,t,r){"use strict";r.r(t);var a=r("4943"),e=r.n(a);for(var s in a)"default"!==s&&function(n){r.d(t,n,(function(){return a[n]}))}(s);t["default"]=e.a},eb2b:function(n,t,r){"use strict";var a=r("35c5"),e=r.n(a);e.a},fb78:function(n,t,r){"use strict";var a;r.d(t,"b",(function(){return e})),r.d(t,"c",(function(){return s})),r.d(t,"a",(function(){return a}));var e=function(){var n=this,t=n.$createElement,r=n._self._c||t;return r("v-uni-view",{staticClass:"uni-balanceRule"},[r("v-uni-view",{staticClass:"listbox"},[r("v-uni-rich-text",{staticClass:"list",attrs:{nodes:n.msgData}})],1)],1)},s=[]},fd22:function(n,t,r){"use strict";r.r(t);var a=r("fb78"),e=r("bd61");for(var s in e)"default"!==s&&function(n){r.d(t,n,(function(){return e[n]}))}(s);r("eb2b");var i,u=r("f0c5"),o=Object(u["a"])(e["default"],a["b"],a["c"],!1,null,"4d22b4d0",null,!1,a["a"],i);t["default"]=o.exports}}]);