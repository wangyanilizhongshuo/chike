(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-personCenter-mySetting-aboutUs"],{"0500":function(n,t,a){var r=a("24fb");t=r(!1),t.push([n.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-balanceRule[data-v-1a366dfc]{width:%?750?%;padding:%?40?%;box-sizing:border-box}.uni-balanceRule .listbox .list[data-v-1a366dfc]{color:#888;font-size:%?28?%;line-height:%?50?%}',""]),n.exports=t},"0707":function(n,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={data:function(){return{msgData:[]}},onLoad:function(){this.getData()},methods:{getData:function(){var n=this;n.$http.post("mini/v1/user/aboutUs",{status:1},(function(t){0==t.state&&(n.msgData=t.data.list.content,console.log(t))}))}}};t.default=r},"0f6d":function(n,t,a){"use strict";var r=a("150c"),e=a.n(r);e.a},"150c":function(n,t,a){var r=a("0500");"string"===typeof r&&(r=[[n.i,r,""]]),r.locals&&(n.exports=r.locals);var e=a("4f06").default;e("1fd84a9a",r,!0,{sourceMap:!1,shadowMode:!1})},"5e1a":function(n,t,a){"use strict";a.r(t);var r=a("e4b0"),e=a("7c3e");for(var s in e)"default"!==s&&function(n){a.d(t,n,(function(){return e[n]}))}(s);a("0f6d");var i,u=a("f0c5"),o=Object(u["a"])(e["default"],r["b"],r["c"],!1,null,"1a366dfc",null,!1,r["a"],i);t["default"]=o.exports},"7c3e":function(n,t,a){"use strict";a.r(t);var r=a("0707"),e=a.n(r);for(var s in r)"default"!==s&&function(n){a.d(t,n,(function(){return r[n]}))}(s);t["default"]=e.a},e4b0:function(n,t,a){"use strict";var r;a.d(t,"b",(function(){return e})),a.d(t,"c",(function(){return s})),a.d(t,"a",(function(){return r}));var e=function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("v-uni-view",{staticClass:"uni-balanceRule"},[a("v-uni-view",{staticClass:"listbox"},[a("v-uni-rich-text",{staticClass:"list",attrs:{nodes:n.msgData}})],1)],1)},s=[]}}]);