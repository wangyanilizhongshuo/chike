(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/personCenter/personCenter"],{"3de9":function(e,n,t){"use strict";var a=t("f24d"),r=t.n(a);r.a},5902:function(e,n,t){"use strict";var a;t.d(n,"b",(function(){return r})),t.d(n,"c",(function(){return o})),t.d(n,"a",(function(){return a}));var r=function(){var e=this,n=e.$createElement;e._self._c},o=[]},"599e":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t={data:function(){return{personData:""}},onLoad:function(){},onShow:function(){this.getPersonMsg()},onShareAppMessage:function(){var e=this;return{title:"莱美牙",path:"/pages/index/index?"+e.getShareUrlParams()}},methods:{goLogin:function(){e.navigateTo({url:"/pages/index/login"})},getPersonMsg:function(){var n=this;this.$http.post("mini/v1/user/info",{},(function(t){console.log(t),console.log(123),0==t.state&&(n.personData=t.data,e.setStorageSync("userType",t.data.user_type),e.setStorageSync("userId",t.data.uid),e.setStorageSync("phone",t.data.phone))}))},jumpTop:function(n){1==n?e.navigateTo({url:"/pages/personCenter/myBalance/myBalance?now_money="+this.personData.now_money}):2==n?e.navigateTo({url:"/pages/personCenter/myCommission/myCommission?brokerage_price="+this.personData.brokerage_price+"&now_money="+this.personData.now_money}):3==n?e.navigateTo({url:"/pages/shopCart/ticket"}):4==n&&e.navigateTo({url:"/pages/personCenter/myInteGral/myInteGral?jifen="+this.personData.integral+"&willjf="+this.personData.integral_active})},jumpOrder:function(n){e.navigateTo({url:"/pages/personCenter/myOrder/myOrder?titleActiveIndex="+n})},jumps:function(n){1==n?e.navigateTo({url:"/pages/personCenter/personData"}):3==n?e.navigateTo({url:"/pages/personCenter/myOrder/afterSales"}):4==n?e.navigateTo({url:"/pages/personCenter/myGroup/myGroup"}):5==n?e.navigateTo({url:"/pages/personCenter/myServerOrder/myServerOrder"}):6==n?e.navigateTo({url:"/pages/personCenter/myCollect/myCollect"}):7==n?e.navigateTo({url:"/pages/personCenter/myTeam/myTeam"}):8==n?e.navigateTo({url:"/pages/personCenter/myShopSettlement/myShopSettlement"}):9==n?e.navigateTo({url:"/pages/personCenter/myMsg/myMsg"}):10==n?e.navigateTo({url:"/pages/personCenter/myExtension/myExtension"}):11==n?e.navigateTo({url:"/pages/personCenter/mySetting/mySetting?phone="+this.personData.phone}):12==n?e.navigateTo({url:"/pages/personCenter/myCustomerServer/myCustomerServer"}):13==n?e.navigateTo({url:"/pages/personCenter/myGuide/myGuide"}):14==n&&e.navigateTo({url:"/pages/personCenter/myOpinion/myOpinion"})},getImage:function(){e.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(n){var t=n.tempFilePaths;t.map((function(n){e.uploadFile({url:"http://zxyptest.hzbixin.cn/file/upload",filePath:n,name:"file",success:function(e){var n="object"===typeof e.data?e.data:JSON.parse(e.data);n.result},fail:function(e){}})}))}})}}};n.default=t}).call(this,t("543d")["default"])},8949:function(e,n,t){"use strict";(function(e){t("edce");a(t("66fd"));var n=a(t("e93d"));function a(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},ad04:function(e,n,t){"use strict";t.r(n);var a=t("599e"),r=t.n(a);for(var o in a)"default"!==o&&function(e){t.d(n,e,(function(){return a[e]}))}(o);n["default"]=r.a},e93d:function(e,n,t){"use strict";t.r(n);var a=t("5902"),r=t("ad04");for(var o in r)"default"!==o&&function(e){t.d(n,e,(function(){return r[e]}))}(o);t("3de9");var s,i=t("f0c5"),u=Object(i["a"])(r["default"],a["b"],a["c"],!1,null,"76566cd4",null,!1,a["a"],s);n["default"]=u.exports},f24d:function(e,n,t){}},[["8949","common/runtime","common/vendor"]]]);