(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/personCenter/myExtension/extensionRuls"],{3258:function(t,n,e){"use strict";e.r(n);var a=e("c68d"),u=e("7256");for(var c in u)"default"!==c&&function(t){e.d(n,t,(function(){return u[t]}))}(c);e("aec73");var o,r=e("f0c5"),i=Object(r["a"])(u["default"],a["b"],a["c"],!1,null,"e8444e72",null,!1,a["a"],o);n["default"]=i.exports},"46b4":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={data:function(){return{msgData:[]}},onLoad:function(){this.getData()},methods:{getData:function(){var t=this;t.$http.post("mini/v1/user/aboutUs",{status:7},(function(n){0==n.state&&(t.msgData=n.data.list.content,console.log(n))}))}}};n.default=a},7256:function(t,n,e){"use strict";e.r(n);var a=e("46b4"),u=e.n(a);for(var c in a)"default"!==c&&function(t){e.d(n,t,(function(){return a[t]}))}(c);n["default"]=u.a},aec73:function(t,n,e){"use strict";var a=e("eb91"),u=e.n(a);u.a},c68d:function(t,n,e){"use strict";var a;e.d(n,"b",(function(){return u})),e.d(n,"c",(function(){return c})),e.d(n,"a",(function(){return a}));var u=function(){var t=this,n=t.$createElement;t._self._c},c=[]},db9c:function(t,n,e){"use strict";(function(t){e("edce");a(e("66fd"));var n=a(e("3258"));function a(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},eb91:function(t,n,e){}},[["db9c","common/runtime","common/vendor"]]]);