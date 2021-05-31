
function setData(obj) {
    let that = this;
    let keys = [];
    let val, data;
	if(obj.user_token){
          wx.setStorageSync('token',obj.user_token)
		 
	}
 
    Object.keys(obj).forEach(function(key) {
        keys = key.split('.');
        val = obj[key];
        data = that.$data;
        if(!(keys[0] in data)){
            return
        }
        keys.forEach(function(key2, index) {
            if (index + 1 == keys.length) {
                that.$set(data, key2, val);
            } else {
                if (!data[key2]) {
                    that.$set(data, key2, isNaN(keys[index+1])?{}:[]);
                }
            }
            data = data[key2];
			
        })
    });
}

function wxPayment(option) {
        let options = Object.assign({
          result: {},
          success: () => {},
          fail: () => {},
          complete: () => {},
        }, option);
		console.log(options)
		console.log('options')
        uni.requestPayment({
          
          'nonceStr': options.result.nonceStr,
          'package': options.result.package,
          'signType': 'MD5',
          'paySign': options.result.paySign,
		  'timeStamp': options.result.timeStamp,
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
    }
function urlEncode(data) {
	    var _result = [];
	    for (var key in data) {
	      var value = data[key];
	      if (value.constructor == Array) {
	        value.forEach(function(_value) {
	           _result.push(key + "=" + _value);
	        });
	      } else {
	        _result.push(key + '=' + value);
	      }
	     }
	    return _result.join('&');
	  }
function getShareUrlParams(params){
	return urlEncode(Object.assign({
	    scene:uni.getStorageSync('userId') || 0
	}, params));
	
}
function getSharePTdata(params){
	console.log(uni.getStorageSync('ptGoodId'))
	return urlEncode(Object.assign({
	    scene:uni.getStorageSync('userId') || 0,
		sendPtUid:uni.getStorageSync('ptLeadId') || 0,
		sendPtGoodsId:uni.getStorageSync('ptGoodId') || 0
	}, params));
	
}

module.exports = {
	setData,
	wxPayment,
	getShareUrlParams,
	getSharePTdata

}