(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/side-slip/index"],{3697:function(t,n,e){"use strict";var i=e("fb94"),o=e.n(i);o.a},4055:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={props:{},data:function(){return{x:0,move:0,open:!1}},watch:{},mounted:function(){var n=t.getSystemInfoSync(),e=n.windowWidth;this.deleteBtnWidth=(e||375)/375*80},methods:{remove:function(){this.move=0,this.open=!1,this.$emit("remove")},change:function(t){this.x=t.detail.x},touchend:function(){var t=this.x;this.open?t>20-this.deleteBtnWidth?(this.move=0,this.open=!1):(this.move=-this.deleteBtnWidth,this.open=!0):t<-20?(this.move=-this.deleteBtnWidth,this.open=!0):(this.move=0,this.open=!1)}}};n.default=e}).call(this,e("543d")["default"])},5253:function(t,n,e){"use strict";e.r(n);var i=e("4055"),o=e.n(i);for(var u in i)"default"!==u&&function(t){e.d(n,t,(function(){return i[t]}))}(u);n["default"]=o.a},"599b":function(t,n,e){"use strict";var i;e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){return i}));var o=function(){var t=this,n=t.$createElement;t._self._c},u=[]},b316:function(t,n,e){"use strict";e.r(n);var i=e("599b"),o=e("5253");for(var u in o)"default"!==u&&function(t){e.d(n,t,(function(){return o[t]}))}(u);e("3697");var s,c=e("f0c5"),r=Object(c["a"])(o["default"],i["b"],i["c"],!1,null,"3a8cf312",null,!1,i["a"],s);n["default"]=r.exports},fb94:function(t,n,e){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/side-slip/index-create-component',
    {
        'components/side-slip/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("b316"))
        })
    },
    [['components/side-slip/index-create-component']]
]);
