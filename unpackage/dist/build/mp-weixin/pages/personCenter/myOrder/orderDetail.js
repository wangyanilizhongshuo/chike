(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/personCenter/myOrder/orderDetail"],{"049d":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(n("79cb"));function a(t){return t&&t.__esModule?t:{default:t}}var i=function(){n.e("components/number-keyboard/number-keyboard").then(function(){return resolve(n("8b55"))}.bind(null,n)).catch(n.oe)},s=function(){n.e("components/password-input/password-input").then(function(){return resolve(n("862f"))}.bind(null,n)).catch(n.oe)},r={data:function(){return{defaultAddFlag:!0,transactionNum:4,refundWay:!1,returnGoods:!1,textAreaValue:"",titleActiveIndex:"",order_sn:"",msgDetail:"",payFlag:!1,extraFlag:!1,wxFlag:!1,exDialogflag:!1,exPassword:"",wxPayFlags:!1,tipflag:!1,tipMsg:"",refundMaskFlag:!1,expressName:"",expressCode:"",wuCode:"",refundFlag:!1,textValues:"",refundGoodFlag:!1,expressNameList:[],expressSecKey:"",refundGoodCode:"",is_pink:""}},onLoad:function(t){console.log(this.titleActiveIndex),this.setData(t),this.getMsg()},components:{numberKeyboard:i,passwordInput:s},methods:{getMsg:function(){var t=this;this.$http.post("mini/v1/user/mydetails",{order_sn:t.order_sn},(function(e){0==e.state&&(t.msgDetail=e.data.list[0],console.log(e),t.msgDetail.goods.map((function(t){t.goods_img=o.default.globalData.imgPrefixUrl+t.goods_img})))}))},payWayClick:function(t){1==t?(this.extraFlag=!this.extraFlag,this.wxFlag=!1):2==t&&(this.wxFlag=!this.wxFlag,this.extraFlag=!1)},payBtn:function(){var t=this;t.wxFlag?(t.payFlag=!1,t.wxFlag=!1,t.wxPayFlags=!0,t.wxpays()):t.extraFlag&&(t.wxPayFlags=!1,t.payFlag=!1,t.exDialogflag=!0,t.exPassword="")},getPsd:function(t){this.exPassword=t,6==this.exPassword.length&&(this.$refs.KeyboarHid.close(),this.extraPay())},KeyboarOpen:function(t){this.$refs.KeyboarHid.open()},extraPay:function(){var e=this,n="";n=1==e.is_pink?"mini/v1/payment/comPay":"mini/v1/payment/orderpay",e.$http.post(n,{order_sn:e.msgDetail.order_sn,pay_price:e.msgDetail.total_price,pay_type:2,pay_password:e.exPassword},(function(n){0==n.state?(e.exDialogflag=!1,t.redirectTo({url:"/pages/personCenter/myOpinion/opinionSuccess?typesName=14"})):3==n.state?(e.exDialogflag=!1,t.showModal({title:"提示",content:"支付密码输入错误",confirmText:"重新输入",success:function(t){t.confirm?(e.exPassword="",e.exDialogflag=!0):t.cancel}})):1==n.state&&(e.exPassword="",e.exDialogflag=!1,e.tipflag=!0,e.tipMsg=n.msg,setTimeout((function(){e.tipflag=!1}),3e3))}))},wxpays:function(){var e=this,n="",o=function(n){e.wxPayment({result:n,success:function(e){t.redirectTo({url:"/pages/personCenter/myOpinion/opinionSuccess?typesName=15"})},fail:function(e){t.redirectTo({url:"/pages/personCenter/myOpinion/opinionSuccess?typesName=16"})}})};n=1==this.is_pink?"mini/v1/payment/comPay":"mini/v1/payment/orderpay",this.$http.post(n,{order_sn:this.msgDetail.order_sn,pay_price:this.msgDetail.total_price,pay_type:1},(function(t){if(0==t.state){var e=t.data;o(e)}}))},cancelOrder:function(e){var n=this;t.showModal({title:"提示",content:"取消订单？",success:function(o){o.confirm?n.$http.post("mini/v1/goods/cancelGood",{order_sn:e},(function(e){0==e.state&&(n.tipflag=!0,n.tipMsg="订单取消成功",setTimeout((function(){n.tipflag=!1,t.navigateBack()}),3e3))})):o.cancel&&console.log("用户点击取消")}})},refundMoney:function(e){var n=this;console.log("tuikuan"),console.log(e),t.showModal({title:"提示",content:"确认退款?",success:function(o){o.confirm?n.$http.post("mini/v1/goods/cancelGood",{order_sn:e,type:1,wang:3},(function(e){t.showToast({title:"申请退款成功",duration:2e3}),setTimeout((function(){t.navigateBack()}),2500)})):o.cancel&&console.log("用户点击取消")}})},receiveGoods:function(e){var n=this;t.showModal({title:"提示",content:"确认收货？",success:function(o){o.confirm?n.$http.post("mini/v1/user/confirm",{order_sn:e},(function(e){0==e.state&&(n.tipflag=!0,n.tipMsg="收货成功",setTimeout((function(){n.tipflag=!1,t.navigateBack()}),2e3))})):o.cancel&&console.log("用户点击取消")}})},refundGoodSubmit:function(){var e=this;return 0==e.refundGoodFlag&&""==e.textValues?(e.tipflag=!0,e.tipMsg="填写退款说明",setTimeout((function(){e.tipflag=!1}),3e3),!1):0==e.refundGoodFlag?(e.tipflag=!0,e.tipMsg="选择退款说明",setTimeout((function(){e.tipflag=!1}),3e3),!1):0==e.textValues?(e.tipflag=!0,e.tipMsg="填写退款理由",setTimeout((function(){e.tipflag=!1}),3e3),!1):void e.$http.post("mini/v1/goods/cancelGood",{order_sn:e.refundGoodCode,return_remark:e.textValues,return_type:1==e.refundGoodFlag?"2":"1"},(function(n){0==n.state&&(e.tipflag=!0,e.tipMsg="申请成功",e.refundMaskFlag=!1,e.refundGoodFlag=!1,e.refundFlag=!1,setTimeout((function(){e.tipflag=!1,t.navigateBack()}),2500))}))},refundGoodMoney:function(t){this.refundMaskFlag=!0,this.refundGoodCode=t}}};e.default=r}).call(this,n("543d")["default"])},"3c6e":function(t,e,n){},"64c8":function(t,e,n){},"79cb":function(t,e,n){"use strict";n.r(e);var o=n("ae71");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("ac07");var i,s,r,u,c=n("f0c5"),l=Object(c["a"])(o["default"],i,s,!1,null,null,null,!1,r,u);e["default"]=l.exports},a92f:function(t,e,n){"use strict";n.r(e);var o=n("ab2c"),a=n("c59c");for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);n("f941");var s,r=n("f0c5"),u=Object(r["a"])(a["default"],o["b"],o["c"],!1,null,"f200e50c",null,!1,o["a"],s);e["default"]=u.exports},ab2c:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return o}));var o={passwordInput:function(){return n.e("components/password-input/password-input").then(n.bind(null,"862f"))},numberKeyboard:function(){return n.e("components/number-keyboard/number-keyboard").then(n.bind(null,"8b55"))}},a=function(){var t=this,e=t.$createElement;t._self._c;t._isMounted||(t.e0=function(e){e.stopPropagation(),t.payFlag=!0},t.e1=function(e){e.stopPropagation(),t.payFlag=!1},t.e2=function(e){e.stopPropagation(),t.payFlag=!1},t.e3=function(e){e.stopPropagation(),t.refundMaskFlag=!1,t.visible=!1},t.e4=function(e){e.stopPropagation(),t.visible=!1},t.e5=function(e){e.stopPropagation(),t.refundMaskFlag=!1},t.e6=function(e){e.stopPropagation(),t.visible=!1},t.e7=function(e){e.stopPropagation(),t.refundGoodFlag=!t.refundGoodFlag,t.refundFlag=!1})},i=[]},ac07:function(t,e,n){"use strict";var o=n("64c8"),a=n.n(o);a.a},ae71:function(t,e,n){"use strict";n.r(e);var o=n("ff90"),a=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);e["default"]=a.a},c59c:function(t,e,n){"use strict";n.r(e);var o=n("049d"),a=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);e["default"]=a.a},dab3:function(t,e,n){"use strict";(function(t){n("edce");o(n("66fd"));var e=o(n("a92f"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},f941:function(t,e,n){"use strict";var o=n("3c6e"),a=n.n(o);a.a},ff90:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n("66fd")),a=i(n("6c44"));function i(t){return t&&t.__esModule?t:{default:t}}Object.assign(o.default.prototype,a.default);var s={globalData:{imgPrefixUrl:"https://chikehometest.hzbixin.cn"},onLaunch:function(){console.log("App Launch")},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")}};e.default=s}},[["dab3","common/runtime","common/vendor"]]]);