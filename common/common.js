
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



module.exports = {
	setData

}