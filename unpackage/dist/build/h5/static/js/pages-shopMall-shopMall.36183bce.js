(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-shopMall-shopMall"],{"0460":function(t,i,e){"use strict";var n=e("4ea4");e("d81d"),e("fb6a"),e("d3b7"),e("e25e"),e("25f0"),e("4d90"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var s=n(e("9650")),a=n(e("79cb")),o={data:function(){return{visibles:!1,province:[],city:[],county:[],cityIndex:11e4,countyIndex:110100,addFlag1:!0,stystemDeviceH:"",carouselList:[],imgList:["https://img9.51tietu.net/pic/2019-091200/ff1vqwm3q33ff1vqwm3q33.jpg","https://img9.51tietu.net/pic/2019-091200/ff1vqwm3q33ff1vqwm3q33.jpg"],mainList:[],recommondList:[],shopList:[],pintuanList:[],yingheList:[],disPriceList:[],findGoodsList:[],pickGoodsList:[],days:"",hours:"",minutes:"",endTs:"",ptTime:"",shopCartLength:""}},onLoad:function(t){this.getpinTime(),this.getCarouselMap()},onShow:function(){this.getALlList(),this.getRecommond(),this.getPinTuan(),this.getYingHe(),this.getDiscount(),this.getFindGoods(),this.pickGoods(),this.getShopCart()},components:{carousel:s.default},methods:{jumpSearch:function(){uni.navigateTo({url:"/pages/shopMall/market-searchTitle"})},fourLogoJump:function(t){uni.navigateTo({url:"/pages/shopMall/category?cate_id="+t})},jumpsCart:function(){uni.navigateTo({url:"/pages/shopMall/shopMallCart"})},jumps:function(t,i){1==t?uni.navigateTo({url:"/pages/shopMall/list-detail?goodsId="+i}):2==t&&uni.navigateTo({url:"/pages/shopMall/ptlist-detail?goodsId="+i})},getTeam:function(){uni.navigateTo({url:"/pages/shopMall/teamUpList"})},jumpss:function(t){var i="";1==t?i="推荐好物":2==t?i="硬核补贴":3==t?i="每日特价":4==t?i="发现好物":5==t&&(i="甄选精品"),uni.navigateTo({url:"/pages/shopMall/goodRecommend?category="+i})},getCarouselMap:function(){var t=this;t.$http.get("mini/v1/goods/indextop",{},(function(i){0==i.state&&(t.carouselList=i.data.category,t.imgList=i.data.banner,t.imgList.map((function(t){t.banner=a.default.globalData.imgPrefixUrl+t.banner})),t.carouselList.map((function(t){t.pic=a.default.globalData.imgPrefixUrl+t.pic})))}))},selectedBanner:function(t,i){console.log("🥒",t,i)},getRecommond:function(){var t=this;t.$http.post("mini/v1/goods/indextui",{},(function(i){if(0==i.state){var e=i.data.list;t.recommondList=e.slice(0,3),t.recommondList.map((function(t){t.goods_img=a.default.globalData.imgPrefixUrl+t.goods_img}))}}))},getPinTuan:function(){var t=this;t.$http.post("mini/v1/goods/indexCombination",{page:1},(function(i){if(0==i.state){var e=i.data.list;e.map((function(t){t.goods_img=a.default.globalData.imgPrefixUrl+t.goods_img})),t.pintuanList=e.slice(0,3)}}))},getpinTime:function(){var t=this;t.$http.get("mini/v1/goods/getcombinationtime",{},(function(i){0==i.state&&(t.ptTime=i.data.list.end_time,t.getNowTime())}))},getNowTime:function(){var t=this,i=Math.round((new Date).getTime()/1e3).toString(),e=this.ptTime-i;this.days=parseInt(e/60/60/24,10).toString().padStart(2,"0"),this.hours=parseInt(e/60/60%24,10).toString().padStart(2,"0"),this.minutes=parseInt(e/60%60,10).toString().padStart(2,"0");parseInt(e%60,10);setInterval((function(){var i=Math.round((new Date).getTime()/1e3).toString(),e=t.ptTime-i;t.days=parseInt(e/60/60/24,10).toString().padStart(2,"0"),t.hours=parseInt(e/60/60%24,10).toString().padStart(2,"0"),t.minutes=parseInt(e/60%60,10).toString().padStart(2,"0");parseInt(e%60,10)}),6e4)},getYingHe:function(){var t=this;t.$http.post("mini/v1/goods/indexubsidy",{page:1},(function(i){if(0==i.state){var e=i.data.list;e.map((function(t){t.goods_img=a.default.globalData.imgPrefixUrl+t.goods_img})),t.yingheList=e}}))},getDiscount:function(){var t=this;t.$http.post("mini/v1/goods/indexhot",{page:1},(function(i){var e=i.data.list;e.map((function(t){t.goods_img=a.default.globalData.imgPrefixUrl+t.goods_img})),t.disPriceList=e}))},getFindGoods:function(){var t=this;t.$http.post("mini/v1/goods/indexfind",{page:1},(function(i){if(0==i.state){var e=i.data.list;e.map((function(t){t.goods_img=a.default.globalData.imgPrefixUrl+t.goods_img})),t.findGoodsList=e}}))},pickGoods:function(){var t=this;t.$http.post("mini/v1/goods/indexnew",{page:1},(function(i){if(0==i.state){var e=i.data.list;e.map((function(t){t.goods_img=a.default.globalData.imgPrefixUrl+t.goods_img})),t.pickGoodsList=e}}))},getALlList:function(){var t=this;t.$http.post("mini/v1/goods/indexbottom",{},(function(i){if(0==i.state){var e=i.data.list;t.mainList=e.slice(0,11),t.mainList.map((function(t){t.goods_img=a.default.globalData.imgPrefixUrl+t.goods_img}))}}))},getShopCart:function(){var t=this;t.$http.post("mini/v1/goods/cartList",{},(function(i){0==i.state&&(t.shopCartLength=i.data.list.length,console.log(t.shopCartLength))}))}}};i.default=o},"0ccb":function(t,i,e){var n=e("50c4"),s=e("1148"),a=e("1d80"),o=Math.ceil,r=function(t){return function(i,e,r){var l,c,d=String(a(i)),u=d.length,g=void 0===r?" ":String(r),v=n(e);return v<=u||""==g?d:(l=v-u,c=s.call(g,o(l/g.length)),c.length>l&&(c=c.slice(0,l)),t?d+c:c+d)}};t.exports={start:r(!1),end:r(!0)}},"21af":function(t,i,e){var n=e("fc82");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var s=e("4f06").default;s("76e28bba",n,!0,{sourceMap:!1,shadowMode:!1})},"24aa":function(t,i,e){t.exports=e.p+"static/img/cartLogos.f531ecba.png"},3083:function(t,i,e){"use strict";var n=e("9d1b"),s=e.n(n);s.a},"3a9a":function(t,i,e){"use strict";e.r(i);var n=e("ac51"),s=e("82c6");for(var a in s)"default"!==a&&function(t){e.d(i,t,(function(){return s[t]}))}(a);e("6ba8");var o,r=e("f0c5"),l=Object(r["a"])(s["default"],n["b"],n["c"],!1,null,"55673400",null,!1,n["a"],o);i["default"]=l.exports},"4d90":function(t,i,e){"use strict";var n=e("23e7"),s=e("0ccb").start,a=e("9a0c");n({target:"String",proto:!0,forced:a},{padStart:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}})},"6ba8":function(t,i,e){"use strict";var n=e("21af"),s=e.n(n);s.a},"823d":function(t,i,e){"use strict";e.r(i);var n=e("e934"),s=e.n(n);for(var a in n)"default"!==a&&function(t){e.d(i,t,(function(){return n[t]}))}(a);i["default"]=s.a},"82c6":function(t,i,e){"use strict";e.r(i);var n=e("0460"),s=e.n(n);for(var a in n)"default"!==a&&function(t){e.d(i,t,(function(){return n[t]}))}(a);i["default"]=s.a},9650:function(t,i,e){"use strict";e.r(i);var n=e("d2de"),s=e("823d");for(var a in s)"default"!==a&&function(t){e.d(i,t,(function(){return s[t]}))}(a);e("3083");var o,r=e("f0c5"),l=Object(r["a"])(s["default"],n["b"],n["c"],!1,null,"634574ea",null,!1,n["a"],o);i["default"]=l.exports},"9a0c":function(t,i,e){var n=e("342f");t.exports=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(n)},"9d1b":function(t,i,e){var n=e("d0ea");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var s=e("4f06").default;s("067d50c7",n,!0,{sourceMap:!1,shadowMode:!1})},a5ea:function(t,i){t.exports="data:image/png;base64,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"},ac51:function(t,i,e){"use strict";var n;e.d(i,"b",(function(){return s})),e.d(i,"c",(function(){return a})),e.d(i,"a",(function(){return n}));var s=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("v-uni-view",{staticClass:"uni-indexPage"},[n("v-uni-view",{staticClass:"uni-content"},[n("v-uni-view",{staticClass:"searchBox",on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.jumpSearch.apply(void 0,arguments)}}},[n("v-uni-image",{staticClass:"searLogo",attrs:{src:e("a5ea")}}),n("v-uni-text",{staticClass:"placeWo"},[t._v("输入搜索商品名称")])],1),n("carousel",{staticStyle:{height:"560rpx"},attrs:{"img-list":t.imgList,"url-key":"banner"},on:{selected:function(i){arguments[0]=i=t.$handleEvent(i),t.selectedBanner.apply(void 0,arguments)}}}),n("v-uni-view",{staticClass:"content-first"},[n("v-uni-scroll-view",{staticClass:"scroll-view_H",attrs:{"scroll-with-animation":"true","scroll-x":"true"}},t._l(t.carouselList,(function(i,e){return n("v-uni-view",{key:e,staticClass:"list",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.fourLogoJump(i.id)}}},[n("v-uni-image",{staticClass:"img",attrs:{src:i.pic}}),n("v-uni-view",{staticClass:"word"},[t._v(t._s(i.name))])],1)})),1)],1),0!=t.recommondList.length?n("v-uni-view",{staticClass:"content-second"},[n("v-uni-image",{staticClass:"bg",attrs:{src:"http://zxyp.hzbixin.cn/files/90061607417129466.jpg"}}),n("v-uni-view",{staticClass:"titless",on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.jumpss(1)}}},[n("v-uni-view",{staticClass:"field"},[t._v("推荐好物")]),n("v-uni-view",{staticClass:"more"},[t._v("查看更多")])],1),n("v-uni-view",{staticClass:"list-Box"},t._l(t.recommondList,(function(i,e){return n("v-uni-view",{key:e,staticClass:"list style1",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.jumps(1,i.goods_id)}}},[n("v-uni-image",{staticClass:"logosBg",attrs:{src:i.goods_img}}),n("v-uni-view",{staticClass:"first"},[t._v(t._s(i.goods_name))]),n("v-uni-view",{staticClass:"second"},[t._v("¥"),n("v-uni-text",{staticClass:"money"},[t._v(t._s(i.user_price))])],1),n("v-uni-view",{staticClass:"third"},[t._v("¥"+t._s(i.price))])],1)})),1)],1):t._e(),t.pintuanList.length>0?n("v-uni-view",{staticClass:"content-third"},[n("v-uni-view",{staticClass:"titles",on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.getTeam.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"left"},[n("v-uni-view",{staticClass:"filed"},[t._v("组队拼团")]),n("v-uni-view",{staticClass:"schedule"},[n("v-uni-view",{staticClass:"box"},[t._v(t._s(t.days))]),n("v-uni-view",[t._v("天")]),n("v-uni-view",{staticClass:"box"},[t._v(t._s(t.hours))]),n("v-uni-view",[t._v("时")]),n("v-uni-view",{staticClass:"box"},[t._v(t._s(t.minutes))]),n("v-uni-view",[t._v("分")])],1)],1),n("v-uni-view",{staticClass:"more"},[t._v("查看更多")])],1),n("v-uni-view",{staticClass:"list-Box "},t._l(t.pintuanList,(function(i,e){return n("v-uni-view",{key:e,staticClass:"list style1 ",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.jumps(2,i.goods_id)}}},[n("v-uni-image",{staticClass:"logosBg",attrs:{src:i.goods_img}}),n("v-uni-view",{staticClass:"first"},[t._v(t._s(i.goods_name))]),n("v-uni-view",{staticClass:"second"},[t._v("¥"),n("v-uni-text",{staticClass:"money"},[t._v(t._s(i.user_price))])],1),n("v-uni-view",{staticClass:"third"},[t._v("¥"+t._s(i.price))])],1)})),1),n("v-uni-view",{staticClass:"second-box "},[n("v-uni-view",{staticClass:"uni-left styless",on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.jumpss(2)}}},[n("v-uni-view",{staticClass:"title"},[n("v-uni-view",{staticClass:"uni-left"},[t._v("硬核补贴")]),n("v-uni-view",{staticClass:"uni-right"},[t._v("限时购")])],1),n("v-uni-view",{staticClass:"smallTitle"},[t._v("不用算  降到底")]),n("v-uni-view",{staticClass:"picBox"},[t.disPriceList.length>=1?n("v-uni-image",{staticClass:"igmg",attrs:{src:t.yingheList[0].goods_img}}):t._e(),t.disPriceList.length>=2?n("v-uni-image",{staticClass:"igmg",attrs:{src:t.yingheList[1].goods_img}}):t._e()],1)],1),n("v-uni-view",{staticClass:"uni-right styless",on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.jumpss(3)}}},[n("v-uni-view",{staticClass:"title"},[n("v-uni-view",{staticClass:"uni-left"},[t._v("每日特价")])],1),n("v-uni-view",{staticClass:"smallTitles"},[t._v("上千品类 随心挑选")]),n("v-uni-view",{staticClass:"picBox"},[t.disPriceList.length>=1?n("v-uni-image",{staticClass:"igmg",attrs:{src:t.disPriceList[0].goods_img}}):t._e(),t.disPriceList.length>=2?n("v-uni-image",{staticClass:"igmg",attrs:{src:t.disPriceList[1].goods_img}}):t._e()],1)],1)],1),n("v-uni-view",{staticClass:"thirdBox "},[n("v-uni-view",{staticClass:"uni-left styless",on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.jumpss(4)}}},[n("v-uni-view",{staticClass:"title"},[n("v-uni-view",{staticClass:"uni-left"},[t._v("发现好物")]),n("v-uni-view",{staticClass:"uni-right qubie1"},[t._v("全年低价")])],1),n("v-uni-view",{staticClass:"smallTitle qubie2"},[t._v("时尚潮流  万人疯抢")]),n("v-uni-view",{staticClass:"picBox"},[t.disPriceList.length>=1?n("v-uni-image",{staticClass:"igmg",attrs:{src:t.findGoodsList[0].goods_img}}):t._e(),t.disPriceList.length>=2?n("v-uni-image",{staticClass:"igmg",attrs:{src:t.findGoodsList[1].goods_img}}):t._e()],1)],1),n("v-uni-view",{staticClass:"uni-right styless",on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.jumpss(5)}}},[n("v-uni-view",{staticClass:"title"},[n("v-uni-view",{staticClass:"uni-left"},[t._v("甄选精品")])],1),n("v-uni-view",{staticClass:"smallTitles qubie3"},[t._v("美好新生活  闭眼买不吃亏")]),n("v-uni-view",{staticClass:"picBox"},[t.disPriceList.length>=1?n("v-uni-image",{staticClass:"igmg",attrs:{src:t.pickGoodsList[0].goods_img}}):t._e(),t.disPriceList.length>=2?n("v-uni-image",{staticClass:"igmg",attrs:{src:t.pickGoodsList[1].goods_img}}):t._e()],1)],1)],1)],1):t._e(),n("v-uni-view",{staticClass:"content-fourth"},t._l(t.mainList,(function(i,e){return n("v-uni-view",{key:e,staticClass:"list",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.jumps(1,i.goods_id)}}},[n("v-uni-image",{staticClass:"imsgs",attrs:{src:i.goods_img}}),n("v-uni-view",{staticClass:"bottom"},[n("v-uni-view",{staticClass:"smallField"},[t._v(t._s(i.goods_name))]),n("v-uni-view",{staticClass:"bto-up"},[n("v-uni-view",{staticClass:"left"},[t._v("¥"),n("v-uni-text",{staticClass:"mom"},[t._v(t._s(i.user_price))])],1),n("v-uni-view",{staticClass:"right"},[t._v("已售"+t._s(i.sales)+"件")])],1)],1)],1)})),1)],1),n("v-uni-view",{staticClass:"shopCartLogo"},[t.shopCartLength>0?n("v-uni-view",{staticClass:"dots"}):t._e(),n("v-uni-image",{staticClass:"logos",attrs:{src:e("24aa")},on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.jumpsCart.apply(void 0,arguments)}}})],1)],1)},a=[]},d0ea:function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,".image-container[data-v-634574ea]{width:%?750?%;height:%?340?%}.item-img[data-v-634574ea]{width:%?630?%;height:%?300?%;border-radius:%?14?%;-webkit-animation:to-big-data-v-634574ea .3s;animation:to-big-data-v-634574ea .3s}.swiper-item[data-v-634574ea]{width:%?630?%;height:%?300?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.item-img-side[data-v-634574ea]{width:%?630?%;height:%?260?%;border-radius:%?14?%;-webkit-animation:to-mini-data-v-634574ea .3s;animation:to-mini-data-v-634574ea .3s}.swiper-item-side[data-v-634574ea]{width:%?630?%;height:%?260?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}@-webkit-keyframes to-mini-data-v-634574ea{from{height:%?300?%}to{height:%?260?%}}@keyframes to-mini-data-v-634574ea{from{height:%?300?%}to{height:%?260?%}}@-webkit-keyframes to-big-data-v-634574ea{from{height:%?260?%}to{height:%?300?%}}@keyframes to-big-data-v-634574ea{from{height:%?260?%}to{height:%?300?%}}",""]),t.exports=i},d2de:function(t,i,e){"use strict";var n;e.d(i,"b",(function(){return s})),e.d(i,"c",(function(){return a})),e.d(i,"a",(function(){return n}));var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-swiper",{staticClass:"image-container",attrs:{"previous-margin":"45rpx","next-margin":"45rpx",circular:!0,autoplay:!0},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.swiperChange.apply(void 0,arguments)}}},t._l(t.imgList,(function(i,n){return e("v-uni-swiper-item",{key:i[t.urlKey],class:t.currentIndex==n?"swiper-item":"swiper-item-side"},[e("v-uni-image",{class:t.currentIndex==n?"item-img":"item-img-side",style:t.dontFirstAnimation?"animation: none;":"",attrs:{src:i[t.urlKey],"lazy-load":!0,mode:"aspectFill"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickImg(i)}}})],1)})),1)},a=[]},e934:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={props:{imgList:{type:Array,default:function(){return[]}},urlKey:{type:String,default:function(){return""}}},data:function(){return{currentIndex:0,dontFirstAnimation:!0}},methods:{swiperChange:function(t){this.dontFirstAnimation=!1,this.currentIndex=t.detail.current},clickImg:function(t){this.$emit("selected",t,this.currentIndex)}}};i.default=n},fc82:function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.content-second .list-Box .first[data-v-55673400], .content-third .list-Box .first[data-v-55673400], .content-second .list-Box .second[data-v-55673400], .content-third .list-Box .second[data-v-55673400], .content-second .list-Box .second .money[data-v-55673400], .content-third .list-Box .second .money[data-v-55673400], .content-second .list-Box .third[data-v-55673400], .content-third .list-Box .third[data-v-55673400]{padding-left:%?10?%;width:%?200?%;box-sizing:border-box;background-color:#fff}.content-third .second-box[data-v-55673400], .content-third .thirdBox[data-v-55673400]{width:%?750?%;height:%?300?%;padding:%?0?% %?30?%;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;margin-bottom:%?10?%}.content-third .second-box .styless[data-v-55673400], .content-third .thirdBox .styless[data-v-55673400]{width:%?340?%;height:%?300?%;background-color:#fff;padding:%?0?% %?10?%;box-sizing:border-box}.content-third .second-box .styless .title[data-v-55673400], .content-third .thirdBox .styless .title[data-v-55673400]{width:%?280?%;display:-webkit-box;display:-webkit-flex;display:flex;height:%?65?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.content-third .second-box .styless .title .uni-left[data-v-55673400], .content-third .thirdBox .styless .title .uni-left[data-v-55673400]{color:#000;font-size:%?30?%;font-weight:700}.content-third .second-box .styless .title .uni-right[data-v-55673400], .content-third .thirdBox .styless .title .uni-right[data-v-55673400]{width:%?82?%;height:%?28?%;line-height:%?28?%;margin-left:%?25?%;text-align:center;color:#fff;font-size:%?20?%;background:#ee5845;border-radius:%?14?% %?14?% %?14?% 0}.content-third .second-box .styless .smallTitle[data-v-55673400], .content-third .thirdBox .styless .smallTitle[data-v-55673400]{width:%?144?%;height:%?30?%;background:#ff9a9e;border-radius:%?8?%;font-size:%?20?%;font-family:PingFang SC;font-weight:500;color:#fff;line-height:%?30?%;margin-bottom:%?15?%;text-align:center}.content-third .second-box .styless .smallTitles[data-v-55673400], .content-third .thirdBox .styless .smallTitles[data-v-55673400]{color:#626262;font-size:%?24?%;margin-bottom:%?15?%}.content-third .second-box .styless .picBox[data-v-55673400], .content-third .thirdBox .styless .picBox[data-v-55673400]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.content-third .second-box .styless .picBox .igmg[data-v-55673400], .content-third .thirdBox .styless .picBox .igmg[data-v-55673400]{display:block;width:%?158?%;height:%?180?%;border-radius:%?8?%}.content-second .list-Box .logosBg[data-v-55673400], .content-third .list-Box .logosBg[data-v-55673400]{display:block;width:%?200?%;height:%?200?%;border-top-left-radius:%?8?%;border-top-right-radius:%?8?%}.content-second .list-Box .first[data-v-55673400], .content-third .list-Box .first[data-v-55673400]{font-family:PingFang-SC-Bold;font-weight:700;color:#222;font-size:%?28?%;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical}.content-second .list-Box .second[data-v-55673400], .content-third .list-Box .second[data-v-55673400]{color:#e41a1a;font-size:%?26?%}.content-second .list-Box .second .money[data-v-55673400], .content-third .list-Box .second .money[data-v-55673400]{font-size:%?32?%}.content-second .list-Box .third[data-v-55673400], .content-third .list-Box .third[data-v-55673400]{color:#b4b4b4;text-decoration:line-through;font-size:%?22?%}.uni-indexPage[data-v-55673400]{left:%?0?%;top:%?0?%;height:100vh}.uni-indexPage .zw[data-v-55673400]{width:%?750?%;height:0}.uni-indexPage .uni-search-box[data-v-55673400]{display:-webkit-box;display:-webkit-flex;display:flex;font-size:%?26?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.uni-indexPage .uni-search-box .backsBox[data-v-55673400]{width:%?50?%;height:%?50?%}.uni-indexPage .uni-search-box .backsBox .cancel[data-v-55673400]{display:block;width:%?30?%;height:%?30?%;margin-top:%?10?%}.uni-indexPage .uni-search-box .left[data-v-55673400]{display:-webkit-box;display:-webkit-flex;display:flex;height:%?88?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-left:%?20?%}.uni-indexPage .uni-search-box .left .addressValues[data-v-55673400]{color:#ff9a9e}.uni-indexPage .uni-search-box .left .images[data-v-55673400]{margin-left:%?10?%;display:block;width:%?30?%;height:%?30?%}.uni-indexPage .uni-search-box .cancel[data-v-55673400]{margin-left:%?10?%;color:#222;font-size:%?26?%}.uni-indexPage .uni-search-box .right[data-v-55673400]{height:%?88?%;line-height:%?88?%;text-align:center;width:%?384?%}.uni-content .searchBox[data-v-55673400]{width:%?690?%;height:%?60?%;margin-left:%?30?%;background-image:url(http://zxyp.hzbixin.cn/files/56071607417535669.jpg);background-repeat:no-repeat;background-size:%?690?% %?60?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.uni-content .searchBox .searLogo[data-v-55673400]{display:block;width:%?30?%;height:%?30?%;margin:%?0?% %?30?%}.uni-content .searchBox .placeWo[data-v-55673400]{color:#a8a8a8;font-size:%?26?%}.content-second[data-v-55673400]{display:block;margin-top:%?30?%;width:%?720?%;margin-left:%?30?%;height:%?425?%;position:relative;left:%?0?%;top:%?0?%;border-bottom:%?40?% solid #fff}.content-second .bg[data-v-55673400]{display:block;width:%?720?%;height:%?425?%}.content-second .titless[data-v-55673400]{width:%?720?%;padding:0 %?30?%;height:%?90?%;line-height:%?90?%;position:absolute;left:%?0?%;top:%?0?%;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;color:#fff;font-weight:700}.content-second .titless .field[data-v-55673400]{font-size:%?30?%}.content-second .titless .more[data-v-55673400]{font-size:%?24?%}.content-second .list-Box[data-v-55673400]{width:%?720?%;position:absolute;left:%?0?%;top:%?90?%;display:-webkit-box;display:-webkit-flex;display:flex;padding:%?0?% %?30?%;box-sizing:border-box;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.content-second .list-Box .style1[data-v-55673400]{width:%?200?%;height:%?315?%}.content-third[data-v-55673400]{background-color:#f2f2f2;border-bottom:%?40?% solid #f2f2f2}.content-third .titles[data-v-55673400]{width:%?750?%;height:%?125?%;padding:%?0?% %?30?%;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.content-third .titles .left[data-v-55673400]{display:-webkit-box;display:-webkit-flex;display:flex;height:%?125?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.content-third .titles .left .filed[data-v-55673400]{color:#626262;font-size:%?30?%}.content-third .titles .left .schedule[data-v-55673400]{display:-webkit-box;display:-webkit-flex;display:flex}.content-third .titles .left .schedule .box[data-v-55673400]{width:%?50?%;height:%?50?%;line-height:%?50?%;text-align:center;background:#ee5845;border-radius:%?8?%;color:#fff;margin:0 %?20?%}.content-third .titles .more[data-v-55673400]{color:#888;font-size:%?24?%}.content-third .list-Box[data-v-55673400]{width:%?750?%;height:%?315?%;display:-webkit-box;display:-webkit-flex;display:flex;padding:%?0?% %?30?%;box-sizing:border-box;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;margin-bottom:%?40?%}.content-third .thirdBox .qubie1[data-v-55673400]{width:%?114?%;height:%?30?%;background:-webkit-linear-gradient(left,#ea3323,#f19d38);background:linear-gradient(90deg,#ea3323,#f19d38);border-radius:%?15?%}.content-third .thirdBox .qubie2[data-v-55673400]{text-align:center;color:#626262}.content-third .thirdBox .qubie3[data-v-55673400]{color:#42b3de}.content-fourth[data-v-55673400]{width:%?750?%;padding:%?0?% %?30?%;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;background-color:#f2f2f2;border-bottom:%?40?% solid #f2f2f2;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.content-fourth .list[data-v-55673400]{width:%?330?%;height:%?460?%;margin-bottom:%?20?%}.content-fourth .list .imsgs[data-v-55673400]{display:block;width:%?330?%;height:%?330?%;border-radius:%?8?%}.content-fourth .list .bottom[data-v-55673400]{width:%?330?%;height:%?130?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-justify-content:space-around;justify-content:space-around;background-color:#fff;padding:%?0?% %?15?%;box-sizing:border-box}.content-fourth .list .bottom .smallField[data-v-55673400]{color:#000;font-size:%?23?%;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}.content-fourth .list .bottom .bto-up[data-v-55673400]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.content-fourth .list .bottom .bto-up .left[data-v-55673400]{color:red;font-size:%?18?%}.content-fourth .list .bottom .bto-up .left .mom[data-v-55673400]{font-size:%?24?%}.content-fourth .list .bottom .bto-up .right[data-v-55673400]{color:#999;font-size:%?18?%}.shopCartLogo[data-v-55673400]{width:%?100?%;height:%?100?%;position:fixed;z-index:50;right:%?30?%;top:70%}.shopCartLogo .logos[data-v-55673400]{display:block;width:%?100?%;height:%?100?%}.shopCartLogo .dots[data-v-55673400]{position:absolute;right:%?15?%;top:%?15?%;width:%?20?%;height:%?20?%;border-radius:50%;background-color:#ff3030}.scroll-view_H[data-v-55673400]{white-space:nowrap;overflow:hidden;height:%?200?%}.scroll-view_H .list[data-v-55673400]{display:inline-block;text-align:center;margin-left:%?0?%;width:%?190?%}.scroll-view_H .list .img[data-v-55673400]{display:block;width:%?112?%;height:%?112?%;border-radius:50%;margin:%?0?% %?39?% %?20?%}.scroll-view_H .list .word[data-v-55673400]{width:%?160?%;margin-left:%?10?%;text-align:center;color:#888;font-size:%?26?%;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical}',""]),t.exports=i}}]);