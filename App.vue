<script>
	import Vue from 'vue';
	import common_option from 'common/common.js';
	Object.assign(Vue.prototype, common_option);
	export default {
		globalData: {  
		    imgPrefixUrl:'https://chikehometest.hzbixin.cn'
		}, 
		onLaunch: function() {
		
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
<!-- uni.navigateTo({
		url:'/pages/personCenter/myOpinion/opinionSuccess?typesName='+2
						}) -->
						
					<!-- 	getLocation(){
							uni.getLocation({
							    type: 'wgs84',
							    success: function (res) {
									console.log(res)
									console.log(123456789)
							          //定位权限开启，打开地图
									   uni.chooseLocation({
									       success: function (res) {
									  			console.log(res)
												console.log(12345)
									            let areaInfo=res.address+res.name;
									             let basic_address=res.address;
									            let name=res.name;
									            let latitude= res.latitude;
									            let longitude= res.longitude;
									      }
									   })
							    },
								fail(e) {
								    // 定位权限未开启，引导设置
								    uni.showModal({
								        title: '温馨提示',
								        content: '您已拒绝定位,请开启',
								        confirmText: '去设置',
								        success(res){
								            if (res.confirm) {
								                //打开授权设置
								                uni.openSetting();
								            }
								        }
								    })
								}
								
							})     
						}, -->
