var vm = new Vue({
	el: '#app',
	data() {
		return {
			// 右侧工具栏中模块显示
			showModule: [
				{
					name: '求职意向',
					logo: 'el-icon-position',
					content: '职位要求信息',
					children: [],
				},
				{
					name: '项目经历',
					logo: 'el-icon-notebook-2',
					content: '展示专业领域的项目与能力',
					children: [],
				},
				{
					name: '自我评价',
					logo: 'el-icon-mic',
					content: '突出个人求职优势',
					children: [],
				},
				{
					name: '工作经历',
					logo: 'el-icon-suitcase',
					content: '展示工作经历，突出相关能力',
					children: [],
				},
				{
					name: '在校经历',
					logo: 'el-icon-office-building',
					content: '描述学历背景及专业信息',
					children: [],
				},
			],
			hideModule: [
				{
					name: '教育经历',
					logo: 'el-icon-date',
					content: '展示人际交往与团队合作能力',
					children: [],
				},
				{
					name: '实习经历',
					logo: 'el-icon-data-analysis',
					content: '突出相关经验，展示自身能力',
					children: [],
				},
				{
					name: '相关技能',
					logo: 'el-icon-setting',
					content: '列举自己强项与掌握的技能',
					children: [],
				},
				{
					name: '荣誉证书',
					logo: 'el-icon-trophy',
					content: '列出自己掌握的技能与强项',
					children: [],
				},
			],
			// 下载模态框
			downloadDialogFormVisible: false,
			downloadForm: {
				type: 'pdf',
				downName: '个人简历',
			},
			// 照片显示
			imgShow: true,
		};
	},
	methods: {
		deleteItem(item) {
			this.showModule.push(item);
			this.hideModule.splice(this.hideModule.indexOf(item), 1);
		},
		insertItem(item) {
			this.hideModule.unshift(item);
			this.showModule.splice(this.hideModule.indexOf(item), 1);
		},
		// 头像上传
		userload() {
			var img = document.querySelector('#user-img');
			var input = document.querySelector('#user');
			var file = input.files[0];
			if (file == undefined || file.type.indexOf('image') === -1) {
				this.$message.error('请选择图片上传');
				return false;
			}
			const fileReader = new FileReader();
			fileReader.onload = () => {
				img.src = fileReader.result;
			};
			// readAsDataURL
			fileReader.readAsDataURL(file);
			fileReader.onerror = () => {
				this.$message.error('图片上传失败');
			};
		},
		// 下载简历
		showDownloadDialog() {
			this.downloadDialogFormVisible = true;
		},
		download() {
			var shareContent = document.querySelector('#app .mainBox .main'); //需要截图的包裹的（原生的）DOM 对象
			// var shareContent = document.querySelector('.tools'); //需要截图的包裹的（原生的）DOM 对象

			// base64转blob
			function base64ToBlob({
				b64data = '',
				contentType = '',
				sliceSize = 512,
			} = {}) {
				return new Promise((resolve, reject) => {
					// 使用 atob() 方法将数据解码
					let byteCharacters = atob(b64data);
					let byteArrays = [];
					for (
						let offset = 0;
						offset < byteCharacters.length;
						offset += sliceSize
					) {
						let slice = byteCharacters.slice(offset, offset + sliceSize);
						let byteNumbers = [];
						for (let i = 0; i < slice.length; i++) {
							byteNumbers.push(slice.charCodeAt(i));
						}
						// 8 位无符号整数值的类型化数组。内容将初始化为 0。
						// 如果无法分配请求数目的字节，则将引发异常。
						byteArrays.push(new Uint8Array(byteNumbers));
					}
					let result = new Blob(byteArrays, {
						type: contentType,
					});
					result = Object.assign(result, {
						// 这里一定要处理一下 URL.createObjectURL
						preview: URL.createObjectURL(result),
						name: `XXX.png`,
					});
					resolve(result);
				});
			}

			// 使用html2canvas将dom导出为图片
			let opts = {
				scale: 6, // 添加的scale 参数
				dpi: 300,
				useCORS: true, // 【重要】开启跨域配置
			};
			html2canvas(shareContent, opts).then((canvas) => {
				if (this.downloadForm.type === 'pdf') {
					// 生成pdf
					var contentWidth = canvas.width;
					var contentHeight = canvas.height;
					//一页pdf显示html页面生成的canvas高度;
					var pageHeight = (contentWidth / 592.28) * 841.89;
					//未生成pdf的html页面高度
					var leftHeight = contentHeight;
					//页面偏移
					var position = 0;
					//a4纸的尺寸[595.28,841.89]，html页面生成的canvas在pdf中图片的宽高
					var imgWidth = 595.28;
					var imgHeight = (592.28 / contentWidth) * contentHeight;
					var pageData = canvas.toDataURL('image/jpeg', 1.0);
					var pdf = new jsPDF('', 'pt', 'a4');
					//有两个高度需要区分，一个是html页面的实际高度，和生成pdf的页面高度(841.89)
					//当内容未超过pdf一页显示的范围，无需分页
					if (leftHeight < pageHeight) {
						pdf.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight);
					} else {
						while (leftHeight > 0) {
							pdf.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight);
							leftHeight -= pageHeight;
							position -= 841.89;
							//避免添加空白页
							if (leftHeight > 0) {
								pdf.addPage();
							}
						}
					}
					pdf.save(this.downloadForm.downName + '.pdf');
				} else {
					let base64 = canvas.toDataURL().split(',')[1];
					base64ToBlob({ b64data: base64, contentType: 'image/png' }).then(
						(res) => {
							// a标签设置donwload属性
							let a = document.createElement('a');
							a.href = res.preview;
							a.download = this.downloadForm.downName;
							a.click();
							a.remove();
						}
					);
				}
			});
		},
	},
});
