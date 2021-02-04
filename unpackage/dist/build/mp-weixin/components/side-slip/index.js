(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/side-slip/index"],{1e3:function(t,e,n){"use strict";var i=n("5620"),o=n.n(i);o.a},"29c9":function(t,e,n){"use strict";n.r(e);var i=n("e9b4"),o=n("52ac");for(var c in o)"default"!==c&&function(t){n.d(e,t,(function(){return o[t]}))}(c);n("1000");var u,s=n("f0c5"),a=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"3a8cf312",null,!1,i["a"],u);e["default"]=a.exports},"52ac":function(t,e,n){"use strict";n.r(e);var i=n("6c18"),o=n.n(i);for(var c in i)"default"!==c&&function(t){n.d(e,t,(function(){return i[t]}))}(c);e["default"]=o.a},5620:function(t,e,n){},"6c18":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{},data:function(){return{x:0,move:0,open:!1}},watch:{},mounted:function(){var e=t.getSystemInfoSync(),n=e.windowWidth;this.deleteBtnWidth=(n||375)/375*80},methods:{remove:function(){this.move=0,this.open=!1,this.$emit("remove")},change:function(t){this.x=t.detail.x},touchend:function(){var t=this.x;this.open?t>20-this.deleteBtnWidth?(this.move=0,this.open=!1):(this.move=-this.deleteBtnWidth,this.open=!0):t<-20?(this.move=-this.deleteBtnWidth,this.open=!0):(this.move=0,this.open=!1)}}};e.default=n}).call(this,n("543d")["default"])},e9b4:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return c})),n.d(e,"a",(function(){return i}));var o=function(){var t=this,e=t.$createElement;t._self._c},c=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/side-slip/index-create-component',
    {
        'components/side-slip/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("29c9"))
        })
    },
    [['components/side-slip/index-create-component']]
]);
