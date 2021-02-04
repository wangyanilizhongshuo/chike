(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/side-slip/del"],{"1f6d6":function(t,e,n){"use strict";var i=n("2574"),o=n.n(i);o.a},2149:function(t,e,n){"use strict";n.r(e);var i=n("8599"),o=n.n(i);for(var u in i)"default"!==u&&function(t){n.d(e,t,(function(){return i[t]}))}(u);e["default"]=o.a},2574:function(t,e,n){},"7ba2":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return i}));var o=function(){var t=this,e=t.$createElement;t._self._c},u=[]},8599:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{},data:function(){return{x:0,move:0,open:!1}},watch:{},mounted:function(){var e=t.getSystemInfoSync(),n=e.windowWidth;this.deleteBtnWidth=(n||375)/375*80},methods:{remove:function(){this.move=0,this.open=!1,this.$emit("remove")},change:function(t){this.x=t.detail.x},touchend:function(){var t=this.x;this.open?t>20-this.deleteBtnWidth?(this.move=0,this.open=!1):(this.move=-this.deleteBtnWidth,this.open=!0):t<-20?(this.move=-this.deleteBtnWidth,this.open=!0):(this.move=0,this.open=!1)}}};e.default=n}).call(this,n("543d")["default"])},fe79:function(t,e,n){"use strict";n.r(e);var i=n("7ba2"),o=n("2149");for(var u in o)"default"!==u&&function(t){n.d(e,t,(function(){return o[t]}))}(u);n("1f6d6");var s,c=n("f0c5"),r=Object(c["a"])(o["default"],i["b"],i["c"],!1,null,"2e173f44",null,!1,i["a"],s);e["default"]=r.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/side-slip/del-create-component',
    {
        'components/side-slip/del-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("fe79"))
        })
    },
    [['components/side-slip/del-create-component']]
]);
