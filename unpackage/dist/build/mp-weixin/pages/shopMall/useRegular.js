(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shopMall/useRegular"],{"0bdb":function(t,n,e){},"1b24":function(t,n,e){"use strict";var a;e.d(n,"b",(function(){return u})),e.d(n,"c",(function(){return c})),e.d(n,"a",(function(){return a}));var u=function(){var t=this,n=t.$createElement;t._self._c},c=[]},5127:function(t,n,e){"use strict";(function(t){e("edce");a(e("66fd"));var n=a(e("bd18"));function a(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},"5fe4":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={data:function(){return{msgData:[]}},onLoad:function(){this.getData()},methods:{getData:function(){var t=this;t.$http.post("mini/v1/user/aboutUs",{status:2},(function(n){0==n.state&&(t.msgData=n.data.list.content)}))}}};n.default=a},"8c1e":function(t,n,e){"use strict";var a=e("0bdb"),u=e.n(a);u.a},"96c5":function(t,n,e){"use strict";e.r(n);var a=e("5fe4"),u=e.n(a);for(var c in a)"default"!==c&&function(t){e.d(n,t,(function(){return a[t]}))}(c);n["default"]=u.a},bd18:function(t,n,e){"use strict";e.r(n);var a=e("1b24"),u=e("96c5");for(var c in u)"default"!==c&&function(t){e.d(n,t,(function(){return u[t]}))}(c);e("8c1e");var r,o=e("f0c5"),i=Object(o["a"])(u["default"],a["b"],a["c"],!1,null,"5c012bda",null,!1,a["a"],r);n["default"]=i.exports}},[["5127","common/runtime","common/vendor"]]]);