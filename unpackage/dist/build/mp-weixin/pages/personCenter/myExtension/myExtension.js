(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/personCenter/myExtension/myExtension"],{1019:function(t,n,e){"use strict";var o;e.d(n,"b",(function(){return u})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return o}));var u=function(){var t=this,n=t.$createElement;t._self._c},a=[]},"64c8":function(t,n,e){},"79cb":function(t,n,e){"use strict";e.r(n);var o=e("ae71");for(var u in o)"default"!==u&&function(t){e.d(n,t,(function(){return o[t]}))}(u);e("ac07");var a,c,i,r,f=e("f0c5"),s=Object(f["a"])(o["default"],a,c,!1,null,null,null,!1,i,r);n["default"]=s.exports},"90c1":function(t,n,e){"use strict";e.r(n);var o=e("1019"),u=e("f6ea");for(var a in u)"default"!==a&&function(t){e.d(n,t,(function(){return u[t]}))}(a);e("dc21");var c,i=e("f0c5"),r=Object(i["a"])(u["default"],o["b"],o["c"],!1,null,"30007747",null,!1,o["a"],c);n["default"]=r.exports},ac07:function(t,n,e){"use strict";var o=e("64c8"),u=e.n(o);u.a},ae71:function(t,n,e){"use strict";e.r(n);var o=e("ff90"),u=e.n(o);for(var a in o)"default"!==a&&function(t){e.d(n,t,(function(){return o[t]}))}(a);n["default"]=u.a},b8bb:function(t,n,e){"use strict";(function(t){e("edce");o(e("66fd"));var n=o(e("90c1"));function o(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},d6b9:function(t,n,e){},dc21:function(t,n,e){"use strict";var o=e("d6b9"),u=e.n(o);u.a},e293:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=u(e("79cb"));function u(t){return t&&t.__esModule?t:{default:t}}var a={data:function(){return{pics:""}},onLoad:function(){this.getCode()},onShareAppMessage:function(t){var n=this;return"button"===t.from||"menu"===t.from?{title:"莱美牙",path:"/pages/index/index?"+n.getShareUrlParams()}:void 0},methods:{getCode:function(){var t=this;this.$http.post("mini/v1/user/myqrcode",{},(function(n){0==n.state&&(t.pics=o.default.globalData.imgPrefixUrl+n.data.qrcode,console.log(t.pics))}))},downLoadPic:function(){t.downloadFile({url:this.pics,success:function(n){var e=n.tempFilePath;t.saveImageToPhotosAlbum({filePath:e,success:function(n){t.hideLoading(),t.showToast({title:"图片已保存"})}})}})}}};n.default=a}).call(this,e("543d")["default"])},f6ea:function(t,n,e){"use strict";e.r(n);var o=e("e293"),u=e.n(o);for(var a in o)"default"!==a&&function(t){e.d(n,t,(function(){return o[t]}))}(a);n["default"]=u.a},ff90:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=a(e("66fd")),u=a(e("6c44"));function a(t){return t&&t.__esModule?t:{default:t}}Object.assign(o.default.prototype,u.default);var c={globalData:{imgPrefixUrl:"https://chikehometest.hzbixin.cn"},onLaunch:function(){console.log("App Launch")},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")}};n.default=c}},[["b8bb","common/runtime","common/vendor"]]]);