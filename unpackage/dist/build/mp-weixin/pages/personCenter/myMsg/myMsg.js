(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/personCenter/myMsg/myMsg"],{"0088":function(t,n,e){"use strict";(function(t){e("edce");u(e("66fd"));var n=u(e("dc67"));function u(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},"119b":function(t,n,e){},2924:function(t,n,e){"use strict";e.r(n);var u=e("41a5"),a=e.n(u);for(var s in u)"default"!==s&&function(t){e.d(n,t,(function(){return u[t]}))}(s);n["default"]=a.a},"41a5":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{msgList:""}},onLoad:function(t){this.setData(t),this.getMsg()},methods:{jumps:function(n){t.navigateTo({url:"/pages/personCenter/myMsg/messageDetail?types="+n})},getMsg:function(){var t=this;this.$http.post("mini/v1/user/mymsg",{},(function(n){0==n.state&&(console.log(n),t.msgList=n.data)}))}}};n.default=e}).call(this,e("543d")["default"])},"8f84":function(t,n,e){"use strict";var u;e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return s})),e.d(n,"a",(function(){return u}));var a=function(){var t=this,n=t.$createElement;t._self._c},s=[]},dc67:function(t,n,e){"use strict";e.r(n);var u=e("8f84"),a=e("2924");for(var s in a)"default"!==s&&function(t){e.d(n,t,(function(){return a[t]}))}(s);e("f52e");var o,r=e("f0c5"),c=Object(r["a"])(a["default"],u["b"],u["c"],!1,null,"455b7272",null,!1,u["a"],o);n["default"]=c.exports},f52e:function(t,n,e){"use strict";var u=e("119b"),a=e.n(u);a.a}},[["0088","common/runtime","common/vendor"]]]);