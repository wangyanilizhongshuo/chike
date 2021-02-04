<template>
	<view>
		
		<form @submit="formCompany" @reset="formReset">
		<view class="uni-form-item uni-column">
			<view class="title">公司介绍：</view>
			<editor style="background-color: #EBEBEB; width: 100%; padding: 10upx;" placeholder="公司介绍" id="editor" class="ql-container" :placeholder="placeholder" @input="editorChange" @ready="onEditorReady"></editor>
		</view>
							
		<view class="uni-btn-v">
			<input hidden='true'  v-model="gongsijieshao" name='gongsijieshao' />
			<button formType="submit">保存</button>
		</view>
    </form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				 placeholder: '开始输入...',
				 gongsijieshao:''
			}
		},
		onLoad(){
			this.chushihua()
		},
		methods: {
			chushihua:function(){
				// this.$api.request("/wapbusiness/userinfo").then((res)=>{
				// 	this.gongsijieshao = res.data.company.gongsijieshao
				// }).catch((e)=>{
					
				// })
			},
			 onEditorReady() {
				 const that = this
                uni.createSelectorQuery().select('#editor').context((res) => {
					
                    this.editorCtx = res.context
					this.editorCtx.setContents({
						html:that.info.gongsijieshao,
						success:(res)=> {
							console.log(res)
						},
						fail:(res)=> {
							console.log(res)
							},
							})
                }).exec()
            },
			editorChange: function(e){
				this.gongsijieshao = e.detail.html
			},

			onEditorReady() {
			                // #ifdef MP-BAIDU
			                this.editorCtx = requireDynamicLib('editorLib').createEditorContext('editorId');
			                // #endif
			
			                // #ifdef APP-PLUS || H5 ||MP-WEIXIN
			                uni.createSelectorQuery().select('#editor').context((res) => {
			                  this.editorCtx = res.context
			                }).exec()
			                // #endif
			            },
			            undo() {
			                this.editorCtx.undo()
			            }
		}
	}
</script>

<style scoped lang="scss">
 .container {
        padding: 10px;
    }

    #editor {
        width: 100%;
        height: 300px;
        background-color: #CCCCCC;
    }

    button {
        margin-top: 10px;
    }
</style>
