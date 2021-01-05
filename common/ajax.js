import util from "./common.js";
import md5 from './md5.js'
let siteroot="https://chikehometest.hzbixin.cn/";
// if(process.env.NODE_ENV === 'development'){
// 	// 开发环境
//     siteroot="https://test.china-matcha.com";
// }else{
// 	// 生产环境
// 	siteroot="https://mall.china-matcha.com";
// }
// let api_root=siteroot+'/api/';
let api_root=siteroot;
var timestamp= Math.round(new Date().getTime()/1000).toString();

//token放在信息中
let request = {
		
    /**
       * 显示成功提示框
       */
      showSuccess(msg, callback) {
		  
        uni.showToast({
          title: msg,
          icon: 'success',
          mask: true,
          duration: 1500,
          success() {
            callback && (setTimeout(function() {
              callback();
            }, 1500));
          }
        });
      },
      /**
       * 显示失败提示框
       */
      showError:function(msg, callback) {
            uni.showModal({
                  title: '友情提示',
                  content: msg,
                  showCancel: false,
                  success(res) {
                    callback && callback();
                  }
            })
       },
	   randomString:function () {
		   var str = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
		   

	    var res = "";
	      for(var i = 0; i < 9; i ++) {
	        var id = Math.ceil(Math.random()*35);
	        res += str[id];
	      }
	      return res;
	   },
	    
        /**
         * 执行用户登录
        */
        doLogin() {
           // 跳转授权页面
           // uni.navigateTo({
           //   url: "/pages/login/index/index"
           // });
        },
       /**
        *get请求
       */
	 get:function(url, data, success, fail, complete){
		 uni.showNavigationBarLoading();
        let _this = this;
        // 构造请求参数
        data = data || {};
        // 构造get请求
		// console.log(_this.randomString())
		// console.log(md5(_this.randomString()))
		var randString=_this.randomString()
		var boxData='chikexiaochengxu#'+timestamp+randString
		var cc=md5(boxData)
        let request = function() {
          uni.request({
            url: api_root+url,
            header: {
               // 'Accept': 'application/json',
			   // 'apiKey':'chikexiaochengxu#',
			   'timeStamp':timestamp,
			   'randStr':randString,
			   'sign':cc
			  // 'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
               // 'Authorization':'Bearer'
            },
            data:{
				
				 ...data,
				 'token':uni.getStorageSync('token') || ''
				 // 'token':'7362ab8ea32d573dc0302d330dc49a87'
			},
			 
            success(res) {
              if ((res.statusCode !== 200 || typeof res.data !== 'object') && res.statusCode !== 401 && res.statusCode !== 402 && res.statusCode !== 201 && res.statusCode !== 400 && res.statusCode !== 403 && res.statusCode !== 503 && res.statusCode !== 422) {
                          _this.showError('您的网络开小差了，请重试');
                          return false;
                        }
                        if (res.statusCode === 401) {
                          // 登录态失效, 重新登录
                          uni.hideNavigationBarLoading();
                          _this.doLogin();
                        }else if(res.statusCode === 402){
							_this.showError(res.data.err_msg, function () {
							   // 跳转授权页面
							   uni.navigateTo({
							     url: "/pages/login/wxlogin"
							   });
						    });
						} else if (res.statusCode === 400) {
                          _this.showError(res.data.err_msg, function () {
                            fail && fail(res);
                          });
                          return false;
                        } else if (res.statusCode === 503 || res.statusCode === 403) {
                            success && success(res);
                        } else {
                          success && success(res.data);
                        }
            },
            fail(res) {
                console.log(res);
				console.log('fail')
              _this.showError(res.errMsg, function() {
                fail && fail(res);
              });
            },
            complete(res) {
              uni.hideNavigationBarLoading();
              complete && complete(res);
            },
          });
        };
        request();
	},
    /**
     *post请求
    */
	post:function(url, data, success, fail, complete, isShowNavBarLoading){
		let _this = this;
        isShowNavBarLoading || true;
        // 在当前页面显示导航条加载动画
        if (isShowNavBarLoading == true) {
          uni.showNavigationBarLoading();
        }
		var randString=_this.randomString()
		var boxData='chikexiaochengxu#'+timestamp+randString
		var cc=md5(boxData)
        uni.request({
          url: api_root+url,
          header: {
             // 'Accept': 'application/json'
			// 'content-type': 'multipart/form-data'
            // 'Authorization':'Bearer'+uni.getStorageSync('token')
			'timeStamp':timestamp,
			'randStr':randString,
			'sign':cc
          },
          method: 'POST',
          data:{
          	  ...data,
			  // 'token':'7362ab8ea32d573dc0302d330dc49a87'
			  'token':uni.getStorageSync('token') || ''
          },
          success(res) {
            if ((res.statusCode !== 200 || typeof res.data !== 'object') && res.statusCode !== 402 && res.statusCode !== 401 && res.statusCode !== 201 && res.statusCode !== 400 && res.statusCode !== 422) {
              _this.showError('您的网络开小差了，请重试');
              return false;
            }
            if (res.statusCode === 401) {
              // 登录态失效, 重新登录
              _this.doLogin();
              return false;
            }else if(res.statusCode === 402){
				_this.showError(res.data.err_msg, function () {
				   // 跳转授权页面
				  //  uni.navigateTo({
					 // url: "/pages/login/wxlogin"
				  //  });
				});
				return false;
			} else if (res.statusCode === 400) {
                _this.showError(res.data.err_msg, function () {
                  fail && fail(res);
                });
                return false;
            } else if (res.statusCode === 422) {
                _this.showError(res.data.err_msg, function () {
                  fail && fail(res);
                });
                return false;
            }
            success && success(res.data);
          },
          fail(res) {
			
            _this.showError(res.errMsg, function() {
              fail && fail(res);
            });
          },
          complete(res) {
            uni.hideNavigationBarLoading();
            complete && complete(res);
          }
        });
	},
    /**
     *put请求
    */
    _put_form:function(url, data, success, fail, complete, isShowNavBarLoading){
    	let _this = this;
        isShowNavBarLoading || true;
        // 在当前页面显示导航条加载动画
        if (isShowNavBarLoading == true) {
          uni.showNavigationBarLoading();
        }
        uni.request({
          url: api_root+url,
          header: {
            'Accept': 'application/json',
            'Authorization':'Bearer '+uni.getStorageSync('token')
          },
          method: 'PUT',
          data: data,
          success(res) {
            if ((res.statusCode !== 200 || typeof res.data !== 'object') && res.statusCode !== 402 && res.statusCode !== 401 && res.statusCode !== 201 && res.statusCode !== 400) {
              _this.showError('您的网络开小差了，请重试');
              return false;
            }
            if (res.statusCode === 401) {
              // 登录态失效, 重新登录
              _this.doLogin();
              return false;
            }else if(res.statusCode === 402){
				_this.showError(res.data.err_msg, function () {
				   // 跳转授权页面
				   uni.navigateTo({
					 url: "/pages/login/wxlogin"
				   });
				});
			} else if (res.statusCode === 400) {
                _this.showError(res.data.err_msg, function () {
                  fail && fail(res);
                });
                return false;
            }
            success && success(res.data);
          },
          fail(res) {
            _this.showError(res.data.err_msg, function() {
              fail && fail(res);
            });
          },
          complete(res) {
            uni.hideNavigationBarLoading();
            complete && complete(res);
          }
        });
    },
    _delete:function(url, data, success, fail, complete){
     	 uni.showNavigationBarLoading();
         let _this = this;
         // 构造请求参数
         data = data || {};
         // 构造get请求
         let request = function() {
           uni.request({
             url: api_root+url,
             header: {
               'Accept': 'application/json',
               // 'Authorization':'Bearer '+uni.getStorageSync('token')
             },
             method: 'DELETE',
             data: data,
             success(res) {
                 if ((res.statusCode !== 200 || typeof res.data !== 'object') && res.statusCode !== 402 && res.statusCode !== 401 && res.statusCode !== 201 && res.statusCode !== 400) {
                   _this.showError('您的网络开小差了，请重试');
                   return false;
                 }
                 if (res.statusCode === 401) {
                   // 登录态失效, 重新登录
                   uni.hideNavigationBarLoading();
                   _this.doLogin();
                 } else if(res.statusCode === 402){
					_this.showError(res.data.err_msg, function () {
					   // 跳转授权页面
					   uni.navigateTo({
						 url: "/pages/login/wxlogin"
					   });
					});
				} else if (res.statusCode === 400) {
                   _this.showError(res.data.err_msg, function () {
                     fail && fail(res);
                   });
                   return false;
                 } else {
                   success && success(res.data);
                 }
             },
             fail(res) {
               _this.showError(res.errMsg, function() {
                 fail && fail(res);
               });
             },
             complete(res) {
               uni.hideNavigationBarLoading();
               complete && complete(res);
             },
           });
         };
         // 判断是否需要验证登录
         request();
     },
    /**
    * 当前用户id
    */
    getUserId() {
        return uni.getStorageSync('invite_id');
    },
     /**
     * 生成转发的url参数
     */
    getShareUrlParams(params) {
        let _this = this;
         return util.urlEncode(Object.assign({
           invite_id: _this.getUserId()
         }, params));
    },
    /**
    * 发起微信支付
    */
    wxPayment(option) {
        let options = Object.assign({
          result: {},
          success: () => {},
          fail: () => {},
          complete: () => {},
        }, option);
        uni.requestPayment({
          'timeStamp': options.result.timeStamp,
          'nonceStr': options.result.nonceStr,
          'package': options.result.package,
          'signType': options.result.signType,
          'paySign': options.result.paySign,
          success(res) {
            options.success(res);
          },
          fail(res) {
            options.fail(res);
          },
          complete(res) {
            options.complete(res);
          }
        });
    },
}
export default  request 