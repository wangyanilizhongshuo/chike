(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"14ff":function(t,e,i){},"398a":function(t,e,i){"use strict";i.r(e);var n=i("4060"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},4060:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("79cb"));function a(t){return t&&t.__esModule?t:{default:t}}var o=function(){i.e("components/vear-carousel/vear-carousel").then(function(){return resolve(i("9650"))}.bind(null,i)).catch(i.oe)},s={data:function(){return{visible:!1,province:[],city:[],county:[],cityIndex:11e4,cityName:"",countyIndex:110100,countyName:"",areaName:"",areaIndex:"",addFlag1:!0,indicatorStyle:"text-align:center;height: ".concat(Math.round(t.getSystemInfoSync().screenWidth/7.5),"px;width:250rpx"),stystemDeviceH:"",carouselList:[],imgList:[],pages:1,pagesV:1,mainList:[],longitudeValue:"",latitudeValue:"",getMoreWay:1,districtNames:"",searchDistrictid:330100,cityId:"",moreFalg:1,scene:0,noticeList:[],dwDownH:"",dwDownHs:"",jxFlag:!1,bottomItem:{}}},components:{carousel:o},onLoad:function(e){this.setData(e),console.log(e),console.log("options"),0!=this.scene&&t.setStorageSync("scene",this.scene),this.getAddress(),this.getLocation(1),this.getCarouselMap(),this.stystemDeviceH=2*Math.round(t.getSystemInfoSync().screenWidth/7.5)+"rpx",this.moreFalg=0,this.getNotice(),this.dwDownH=t.getSystemInfoSync().screenHeight-150+"px",this.dwDownHs=t.getSystemInfoSync().screenHeight-210+"px",console.log(this.dwDownH)},onShow:function(){if(this.pagesV=1,this.pages=1,t.getStorageSync("token")&&t.getStorageSync("ptGoodId")){var e=t.getStorageSync("ptGoodId");t.navigateTo({url:"/pages/shopMall/ptlist-detail?goodsId="+e})}},onReachBottom:function(){0==this.pagesV&&(this.pages+=1,this.getALlList())},computed:{heights:function(){var e=t.getSystemInfoSync(),i=e.platform,n=e.statusBarHeight,a=n+4;return"android"==i.toLowerCase()&&(a+=4),a+38+"px"},marginTop:function(){var e=t.getSystemInfoSync(),i=e.platform,n=e.statusBarHeight,a=n+4;return"android"==i.toLowerCase()&&(a+=4),a+"rpx"}},onShareAppMessage:function(){var t=this;return{title:"莱美牙",path:"/pages/index/index?"+t.getShareUrlParams()}},methods:{getLocation:function(e){var i=this;0==e&&(this.mainList=[]),t.getLocation({type:"wgs84",success:function(t){i.longitudeValue=t.longitude,i.latitudeValue=t.latitude,i.getCityId(),i.getCityName()},fail:function(e){t.showModal({title:"温馨提示",content:"您已拒绝定位,请开启",confirmText:"去设置",success:function(e){e.confirm&&(i.locationFlag=!0,t.openSetting())},fail:function(t){i.locationFlag=!1,console.log("fail")}})}})},getCityName:function(){var t=this;t.$http.post("mini/v1/overt/geocoderrgeo",{longitude:t.longitudeValue,latitude:t.latitudeValue},(function(e){0==e.state&&(t.districtNames=e.data.district)}))},bindChange:function(t){var e=this,i=t.detail.value;e.cityIndex=e.province[i[0]].id,e.cityName=e.province[i[0]].name,e.getAddress(i)},jumps:function(e){var i=this;1==e?t.navigateTo({url:"/pages/index/titleSearch?longitude="+i.longitudeValue+"&latitude="+i.latitudeValue+"&districtNames="+i.districtNames+"&searchDistrictid="+i.searchDistrictid}):2==e&&t.navigateTo({url:"/pages/index/listBoxList?longitude="+i.longitudeValue+"&latitude="+i.latitudeValue+"&searchDistrictid="+i.searchDistrictid})},fourLogoJump:function(e,i){t.navigateTo({url:"/pages/index/fourLogoList?name="+e+"&cateId="+i+"&longitude="+this.longitudeValue+"&latitude="+this.latitudeValue+"&searchDistrictid="+this.searchDistrictid})},listClick:function(e){t.navigateTo({url:"/pages/index/searchDetail?storeId="+e})},backTop:function(){t.pageScrollTo({scrollTop:0,duration:300})},getCityId:function(){var t=this;t.$http.post("mini/v1/overt/geocoderrgeo",{longitude:t.longitudeValue,latitude:t.latitudeValue},(function(e){0==e.state&&(t.searchDistrictid=e.data.city_id,t.getALlList())}))},getAddress:function(t){var e=this;e.addFlag1&&(e.$http.post("mini/v1/overt/getregionchild",{},(function(t){0==t.state&&(e.province=t.data)})),e.addFlag1=!1);new Promise((function(i,n){e.$http.post("mini/v1/overt/getregionchild",{regionid:e.cityIndex},(function(n){0==n.state&&(e.city=n.data,t&&(e.countyIndex=e.city[t[1]].id,e.countyName=e.city[t[1]].name,e.searchDistrictid=e.city[t[1]].id),i())}))})).then((function(){e.$http.post("mini/v1/overt/getregionchild",{regionid:e.countyIndex},(function(i){0==i.state&&(e.county=i.data,t&&(e.areaName=e.county[t[2]].name,e.areaIndex=e.county[t[2]].id,e.districtNames=e.areaName,e.mainList=[],e.getALlList()))}))}))},getCarouselMap:function(){var t=this;t.$http.get("mini/v1/service/indextop",{},(function(e){0==e.state&&(t.carouselList=e.data.category,t.imgList=e.data.banner,t.imgList.map((function(t){t.banner=n.default.globalData.imgPrefixUrl+t.banner})),t.carouselList.map((function(t){t.pic=n.default.globalData.imgPrefixUrl+"/"+t.pic})),console.log("imgList"),console.log(t.imgList))}))},selectedBanner:function(t,e){console.log("🥒",t,e)},getALlList:function(){var t=this;0==t.jxFlag?t.bottomItem={page:t.pages,user_lng:t.longitudeValue,user_lat:t.latitudeValue,user_city_id:t.searchDistrictid}:t.bottomItem={page:t.pages,is_index:1,user_lng:t.longitudeValue,user_lat:t.latitudeValue,user_city_id:t.searchDistrictid},t.$http.post("mini/v1/service/storelist",t.bottomItem,(function(e){if(0==e.state)if(t.pagesV=e.data.is_request,0==e.data.is_request){var i=e.data.list;i.map((function(t){t.store_img="https://chikehometest.hzbixin.cn"+t.store_img}));var n=t.mainList;t.mainList=n.concat(i)}else console.log("come"),console.log(t.mainList.length),0==t.mainList.length&&(console.log(123),t.jxFlag=!0,t.getALlList())}))},jumpNotice:function(){t.navigateTo({url:"/pages/index/noticeList"})},getNotice:function(){var t=this;this.$http.get("mini/v1/service/notice",{},(function(e){0==e.state&&(t.noticeList=e.data.list[0])}))}}};e.default=s}).call(this,i("543d")["default"])},"42f8":function(t,e,i){"use strict";i.r(e);var n=i("f112"),a=i("398a");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("d5e5");var s,c=i("f0c5"),r=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"7c298e0a",null,!1,n["a"],s);e["default"]=r.exports},"551b":function(t,e,i){"use strict";(function(t){i("edce");n(i("66fd"));var e=n(i("42f8"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,i("543d")["createPage"])},"64c8":function(t,e,i){},"79cb":function(t,e,i){"use strict";i.r(e);var n=i("ae71");for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);i("ac07");var o,s,c,r,u=i("f0c5"),l=Object(u["a"])(n["default"],o,s,!1,null,null,null,!1,c,r);e["default"]=l.exports},ac07:function(t,e,i){"use strict";var n=i("64c8"),a=i.n(n);a.a},ae71:function(t,e,i){"use strict";i.r(e);var n=i("ff90"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},d5e5:function(t,e,i){"use strict";var n=i("14ff"),a=i.n(n);a.a},f112:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement;t._self._c;t._isMounted||(t.e0=function(e){e.stopPropagation(),t.visible=!1},t.e1=function(e){e.stopPropagation(),t.visible=!0})},o=[]},ff90:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=o(i("66fd")),a=o(i("6c44"));function o(t){return t&&t.__esModule?t:{default:t}}Object.assign(n.default.prototype,a.default);var s={globalData:{imgPrefixUrl:"https://chikehometest.hzbixin.cn"},onLaunch:function(){console.log("App Launch")},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")}};e.default=s}},[["551b","common/runtime","common/vendor"]]]);