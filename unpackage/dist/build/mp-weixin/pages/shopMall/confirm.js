(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shopMall/confirm"],{"370d":function(t,e,n){"use strict";n.r(e);var a=n("88ed"),o=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=o.a},"64c8":function(t,e,n){},"6b71":function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}));var a={passwordInput:function(){return n.e("components/password-input/password-input").then(n.bind(null,"862f"))},numberKeyboard:function(){return n.e("components/number-keyboard/number-keyboard").then(n.bind(null,"8b55"))}},o=function(){var t=this,e=t.$createElement;t._self._c;t._isMounted||(t.e0=function(e){e.stopPropagation(),t.defaultAddFlag=!t.defaultAddFlag},t.e1=function(e){e.stopPropagation(),t.useJFFlag=!t.useJFFlag,t.getMsg()},t.e2=function(e){e.stopPropagation(),t.payFlag=!1},t.e3=function(e){e.stopPropagation(),t.payFlag=!1})},i=[]},"70b9":function(t,e,n){"use strict";n.r(e);var a=n("6b71"),o=n("370d");for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);n("8f64");var s,r=n("f0c5"),u=Object(r["a"])(o["default"],a["b"],a["c"],!1,null,"66278ab8",null,!1,a["a"],s);e["default"]=u.exports},"79cb":function(t,e,n){"use strict";n.r(e);var a=n("ae71");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("ac07");var i,s,r,u,c=n("f0c5"),l=Object(c["a"])(a["default"],i,s,!1,null,null,null,!1,r,u);e["default"]=l.exports},"7c94":function(t,e,n){"use strict";(function(t){n("edce");a(n("66fd"));var e=a(n("70b9"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},"88ed":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=o(n("79cb"));function o(t){return t&&t.__esModule?t:{default:t}}var i=function(){n.e("components/number-keyboard/number-keyboard").then(function(){return resolve(n("8b55"))}.bind(null,n)).catch(n.oe)},s=function(){n.e("components/password-input/password-input").then(function(){return resolve(n("862f"))}.bind(null,n)).catch(n.oe)},r={data:function(){return{remarkValue:"",useJFFlag:!1,getAddFlag:!1,payFlag:!1,extraFlag:!1,wxFlag:!1,exDialogflag:!1,exPassword:"",cateId:"",source_type:"",detailList:"",addlistMsg:"",submitData:"",tipflag:!1,tipMsg:"",wxPayFlags:!1,ptCome:1}},onLoad:function(e){this.setData(e),console.log(e),this.getMsg(),t.removeStorageSync("goodsRedId")},onShow:function(){var e=this;if(t.getStorageSync("shangpinAddId")){var n=t.getStorageSync("shangpinAddId");this.getAddFlag=!0,this.$http.post("mini/v1/user/orderaddress",{address_id:n},(function(t){0==t.state&&(e.addlistMsg=t.data,e.getAddFlag=!0)}))}this.getMsg(),console.log(this.getAddFlag)},components:{numberKeyboard:i,passwordInput:s},methods:{getAddress:function(){t.navigateTo({url:"/pages/shopMall/addressList?from=shangpin"})},jumpsServer:function(){t.navigateTo({url:"/pages/shopMall/ticket?payAllMoney="+this.detailList.total_price})},payWayClick:function(t){1==t?(this.extraFlag=!this.extraFlag,this.wxFlag=!1):2==t&&(this.wxFlag=!this.wxFlag,this.extraFlag=!1)},payBtn:function(){var e=this;e.wxFlag?(e.payFlag=!1,e.wxFlag=!1,e.wxPayFlags=!0,e.submitOrder()):e.extraFlag&&(e.wxPayFlags=!1,e.payFlag=!1,e.$http.post("mini/v1/user/paypasswordcheck",{},(function(n){0==n.state?(e.submitOrder(),e.exDialogflag=!0,e.exPassword="",e.extraFlag=!1):1==n.state&&t.showModal({title:"提示",content:"您还没有设置交易密码",confirmText:"设置密码",success:function(e){e.confirm?t.navigateTo({url:"/pages/personCenter/mySetting/mySetting"}):e.cancel&&console.log("用户点击取消")}})})))},submitOrder:function(){var e=this,n=0;1==e.useJFFlag&&(n=e.detailList.jifen),e.$http.post("mini/v1/goods/creategoods",{source_type:e.source_type,remark:e.remarkValue,jifen:n,cu_id:t.getStorageSync("goodsRedId")||0,address_id:t.getStorageSync("shangpinAddId")},(function(n){0==n.state&&(t.removeStorageSync("goodsRedId"),e.submitData=n.data,e.wxPayFlags&&e.wxpays())}))},getcomfirms:function(){var t=this;0==t.getAddFlag?(t.tipflag=!0,t.tipMsg="请选择地址",setTimeout((function(){t.tipflag=!1}),3e3)):t.payFlag=!0},KeyboarOpen:function(t){this.$refs.KeyboarHid.open()},getPsd:function(t){this.exPassword=t,6==this.exPassword.length&&(this.$refs.KeyboarHid.close(),this.extraPay())},wxpays:function(){var e=this,n=function(n){e.wxPayment({result:n,success:function(e){t.redirectTo({url:"/pages/personCenter/myOpinion/opinionSuccess?typesName=15"})},fail:function(e){t.redirectTo({url:"/pages/personCenter/myOpinion/opinionSuccess?typesName=16"})}})};this.$http.post("mini/v1/payment/orderpay",{order_sn:this.submitData.order_sn,pay_price:this.submitData.total_price,pay_type:1},(function(t){if(0==t.state){var e=t.data;n(e)}}))},extraPay:function(){var e=this;e.$http.post("mini/v1/payment/orderpay",{order_sn:e.submitData.order_sn,pay_price:e.submitData.total_price,pay_type:2,pay_password:e.exPassword},(function(n){0==n.state?(e.exDialogflag=!1,t.redirectTo({url:"/pages/personCenter/myOpinion/opinionSuccess?typesName=14"})):3==n.state?(e.exDialogflag=!1,t.showModal({title:"提示",content:"支付密码输入错误",confirmText:"重新输入",success:function(n){n.confirm?(e.exPassword="",e.exDialogflag=!0):n.cancel&&t.navigateBack()}})):1==n.state&&(e.exPassword="",e.exDialogflag=!1,e.tipflag=!0,e.tipMsg=n.msg,setTimeout((function(){e.tipflag=!1}),3e3))}))},exDialogClick:function(){this.exDialogflag=!1,this.$refs.KeyboarHid.close()},getMsg:function(){var e=this,n=0;1==e.useJFFlag&&(n=e.detailList.jifen),e.$http.post("mini/v1/goods/goodssettle",{source_type:e.source_type,jifen:n,cu_id:t.getStorageSync("goodsRedId")||0},(function(t){0==t.state&&(e.detailList=t.data,e.detailList.list.map((function(t){t.goods_img=a.default.globalData.imgPrefixUrl+t.goods_img})),console.log("res"),console.log(t))}))}}};e.default=r}).call(this,n("543d")["default"])},"8f64":function(t,e,n){"use strict";var a=n("93e8"),o=n.n(a);o.a},"93e8":function(t,e,n){},ac07:function(t,e,n){"use strict";var a=n("64c8"),o=n.n(a);o.a},ae71:function(t,e,n){"use strict";n.r(e);var a=n("ff90"),o=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=o.a},ff90:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("66fd")),o=i(n("6c44"));function i(t){return t&&t.__esModule?t:{default:t}}Object.assign(a.default.prototype,o.default);var s={globalData:{imgPrefixUrl:"https://chikehometest.hzbixin.cn"},onLaunch:function(){console.log("App Launch")},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")}};e.default=s}},[["7c94","common/runtime","common/vendor"]]]);