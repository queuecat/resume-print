var vm = new Vue({
	el: '#app',
	data() {
		return {
			//todo 基本信息
			personalInfo: {
				logo: 'el-icon-user-solid',
				default: [
					{
						name: '姓名',
						content: '',
					},
					{
						name: '性别',
						content: '',
					},
					{
						name: '年龄',
						content: '',
					},
					{
						name: '头像',
						content: '',
					},
					{
						name: '电话',
						content: '',
					},
					{
						name: '邮箱',
						content: '',
					},
				],
				optional: [
					{
						name: '民族',
						content: '',
					},
					{
						name: '户籍',
						content: '',
					},
					{
						name: '现所在地',
						content: '',
					},
					{
						name: '开始工作时间',
						content: '',
					},
					{
						name: '政治面貌',
						content: '',
					},
					{
						name: '身高',
						content: '',
					},
					{
						name: '体重',
						content: '',
					},
				],
			},
			// 表单信息
			personalArr: [],
			// 默认信息
			personalDefaultArr: [],
			// 基本信息模态框
			personalDialogFormVisible: false,
			// 模态框中头像
			personalImgShow: true,
			//todo 求职意向
			workerNeed: {
				logo: 'el-icon-s-custom',
				default: [
					{
						name: '求职岗位',
						content: '',
					},
					{
						name: '意向城市',
						content: '',
					},
					{
						name: '期望薪水',
						content: '',
					},
					{
						name: '求职类型',
						content: '',
					},
				],
				optional: [
					{
						name: '期望行业',
						content: '',
					},
					{
						name: '当前状态',
						content: '',
					},
				],
			},
			// 求职意向模态框
			workerNeedDialogFormVisible: false,
			// 表单信息
			workerNeedArr: [],
			// 默认信息
			workerNeedDefaultArr: [],
			// 其他模块
			otherModule: [
				{
					name: '教育经历',
					arr: [
						{
							time: true,
							itemName: '学校名称',
							title: '专业',
							type: '学历',
							content:
								'大学之前的教育经历建议不写，尽量写于求职行业或者求职岗位相关的课程，有交流交换的经验可以在教育经历中展示。工作年限较多或成绩自认不够优异，则可以直接将教育背景清晰罗列后，重点丰富其他模块。成绩优异的话建议写上GPA及排名等信息，尽量简洁。',
						},
					],
					default: {
						time: true,
						itemName: '学校名称',
						title: '专业',
						type: '学历',
						content:
							'大学之前的教育经历建议不写，尽量写于求职行业或者求职岗位相关的课程，有交流交换的经验可以在教育经历中展示。工作年限较多或成绩自认不够优异，则可以直接将教育背景清晰罗列后，重点丰富其他模块。成绩优异的话建议写上GPA及排名等信息，尽量简洁。',
					},
					btns: [
						{
							name: 'el-icon-plus',
							function: this.addOtherMudle,
						},
						{
							name: 'el-icon-arrow-down',
							function: this.itemDown,
						},
						{
							name: 'el-icon-arrow-up',
							function: this.itemUp,
						},
					],
				},
				{
					name: '工作经历',
					arr: [
						{
							time: true,
							itemName: '职业名称',
							title: '公司名称',
							type: '行业',
							content:
								'详细描述你的职责范围、工作内容和工作成果。最新的工作经验放在最前，描述尽量简洁，尽量写与职位相匹配的内容，将有助于HR第一时间发现你的亮点。如果是不知名企业，可以在工作内容的第一句话加上简短的公司或主要产品介绍，尽可能用数字说明成绩，突出分析能力、团队协作能力、解决问题的能力等工作上所需的专业素质。',
						},
					],
					default: {
						time: true,
						itemName: '职业名称',
						title: '职位名称',
						type: '行业',
						content:
							'详细描述你的职责范围、工作内容和工作成果。最新的工作经验放在最前，描述尽量简洁，尽量写与职位相匹配的内容，将有助于HR第一时间发现你的亮点。如果是不知名企业，可以在工作内容的第一句话加上简短的公司或主要产品介绍，尽可能用数字说明成绩，突出分析能力、团队协作能力、解决问题的能力等工作上所需的专业素质。',
					},
					btns: [
						{
							name: 'el-icon-plus',
							function: this.addOtherMudle,
						},
						{
							name: 'el-icon-arrow-down',
							function: this.itemDown,
						},
						{
							name: 'el-icon-arrow-up',
							function: this.itemUp,
						},
					],
				},

				{
					name: '项目经历',
					arr: [
						{
							time: true,
							itemName: '项目名称',
							title: '职位',
							content:
								'描述你参与过的项目及你在项目过程中所作的工作，内容简洁清晰，突出于求职岗位匹配的重点。具体可以从以下几个方面入手：1、项目内容 2、工作内容 3、项目成果。',
						},
					],
					default: {
						time: true,
						itemName: '项目名称',
						title: '职位',
						content:
							'描述你参与过的项目及你在项目过程中所作的工作，内容简洁清晰，突出于求职岗位匹配的重点。具体可以从以下几个方面入手：1、项目内容 2、工作内容 3、项目成果。',
					},
					btns: [
						{
							name: 'el-icon-plus',
							function: this.addOtherMudle,
						},
						{
							name: 'el-icon-arrow-down',
							function: this.itemDown,
						},
						{
							name: 'el-icon-arrow-up',
							function: this.itemUp,
						},
					],
				},
				{
					name: '在校经历',
					arr: [
						{
							time: true,
							itemName: '社团/活动名称',
							title: '职位',
							content:
								'紧紧与求职职位的任职要求和岗位工作内容相结合，体现自己与之相关的经历、能力、性格、品质等等。内容应精简干练，要有结果导向思维和数据化思维，实践成果和收获一定要写，且要用量化的数据或实际的评价来展现。',
						},
					],
					default: {
						time: true,
						itemName: '社团/活动名称',
						title: '职位',
						content:
							'紧紧与求职职位的任职要求和岗位工作内容相结合，体现自己与之相关的经历、能力、性格、品质等等。内容应精简干练，要有结果导向思维和数据化思维，实践成果和收获一定要写，且要用量化的数据或实际的评价来展现。',
					},
					btns: [
						{
							name: 'el-icon-plus',
							function: this.addOtherMudle,
						},
						{
							name: 'el-icon-arrow-down',
							function: this.itemDown,
						},
						{
							name: 'el-icon-arrow-up',
							function: this.itemUp,
						},
					],
				},
				{
					name: '实习经历',
					arr: [
						{
							time: true,
							itemName: '公司名称',
							title: '职位名称',
							content:
								'详细描述你的职责范围、工作内容和工作成果。最新的工作经验放在最前，描述尽量简洁，尽量写与职位相匹配的内容，将有助于HR第一时间发现你的亮点。如果是不知名企业，可以在工作内容的第一句话加上简短的公司或主要产品介绍，尽可能用数字说明成绩，突出分析能力、团队协作能力、解决问题的能力等工作上所需的专业素质。',
						},
					],
					default: {
						time: true,
						itemName: '学校名称',
						title: '专业',
						type: '学历',
						content:
							'大学之前的教育经历建议不写，尽量写于求职行业或者求职岗位相关的课程，有交流交换的经验可以在教育经历中展示。工作年限较多或成绩自认不够优异，则可以直接将教育背景清晰罗列后，重点丰富其他模块。成绩优异的话建议写上GPA及排名等信息，尽量简洁。',
					},
					btns: [
						{
							name: 'el-icon-plus',
							function: this.addOtherMudle,
						},
						{
							name: 'el-icon-arrow-down',
							function: this.itemDown,
						},
						{
							name: 'el-icon-arrow-up',
							function: this.itemUp,
						},
					],
				},
				{
					name: '自我评价',
					arr: [
						{
							content:
								'篇幅不要太长，注意结合简历整体的美观度，内容中应总结经验和特长，突出符合求职岗位职位描述的特点，避免使用过多形容词。例：拥有良好的沟通和协调能力，善于应变，能够快速适应新环境，熟悉使用办公软件，对文件管理十分熟悉。',
						},
					],
					default: {
						content:
							'篇幅不要太长，注意结合简历整体的美观度，内容中应总结经验和特长，突出符合求职岗位职位描述的特点，避免使用过多形容词。例：拥有良好的沟通和协调能力，善于应变，能够快速适应新环境，熟悉使用办公软件，对文件管理十分熟悉。',
					},
					btns: [
						{
							name: 'el-icon-arrow-down',
							function: this.itemDown,
						},
						{
							name: 'el-icon-arrow-up',
							function: this.itemUp,
						},
					],
				},
				{
					name: '相关技能',
					arr: [
						{
							content:
								'填写技能最好和求职岗位的相关性较高，主要包含专业技能、专业课程。如果实在技能较少可以写办公软件方面的技能并说明掌握程度。',
						},
					],
					default: {
						content:
							'填写技能最好和求职岗位的相关性较高，主要包含专业技能、专业课程。如果实在技能较少可以写办公软件方面的技能并说明掌握程度。',
					},
					btns: [
						{
							name: 'el-icon-arrow-down',
							function: this.itemDown,
						},
						{
							name: 'el-icon-arrow-up',
							function: this.itemUp,
						},
					],
				},
				{
					name: '荣誉证书',
					arr: [
						{
							content:
								'详细描述你所获得的奖励证书，于求职岗位相关性强的写在前面，只需要填写有代表性的奖项，如果有更高级别的证书，则不建议再添加基础的证书。例：全国机器人大赛一等奖。',
						},
					],
					default: {
						content:
							'详细描述你所获得的奖励证书，于求职岗位相关性强的写在前面，只需要填写有代表性的奖项，如果有更高级别的证书，则不建议再添加基础的证书。例：全国机器人大赛一等奖。',
					},
					btns: [
						{
							name: 'el-icon-arrow-down',
							function: this.itemDown,
						},
						{
							name: 'el-icon-arrow-up',
							function: this.itemUp,
						},
					],
				},
			],
			//todo 右侧工具栏中模块显示
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
		// 向上按钮
		itemUp(obj) {
			let index = this.otherModule.indexOf(obj);
			if (index <= 0) {
				return;
			}
			for (let i = index - 1; i >= 0; i--) {
				if (this.haveItem(this.otherModule[i].name)) {
					let tem = obj;
					this.otherModule.splice(index, 1);
					this.otherModule.splice(i, 0, tem);
					break;
				}
			}
		},
		// 向下按钮
		itemDown(obj) {
			let index = this.otherModule.indexOf(obj);
			if (index >= this.otherModule.length - 1) {
				return;
			}
			for (let i = index + 1; i < this.otherModule.length; i++) {
				if (this.haveItem(this.otherModule[i].name)) {
					let tem = obj;
					this.otherModule.splice(index, 1);
					this.otherModule.splice(i, 0, tem);
					break;
				}
			}
		},
		// 新增模块内容
		addOtherMudle(obj) {
			obj.arr.push(obj.default);
		},
		// 动态改变长度
		changeWidth(text, e) {
			e.target.style.width = this.text(e.target.value);
		},
		// 计算输入框长度
		text(value) {
			if (value == '' || value == 0) {
				return '1em';
			} else {
				var px = 0;
				var em = 0;
				for (let index = 0; index < String(value).length; index++) {
					var element = String(value)[index];
					if (/[a-zA-Z0-9]/.test(element)) px++;
					else em++;
				}
				return 'calc(9*' + px + 'px + ' + em + 'em)';
			}
		},
		// 文字选中
		select(e) {
			e.target.select();
		},
		selectDivBlur(e) {
			e.target.isselect = false;
		},
		selectDiv(e) {
			if (e.target.isselect) {
				return;
			}

			if (document.selection) {
				var range = document.body.createTextRange();
				range.moveToElementText(e.target);
				range.select();
			} else if (window.getSelection) {
				var range = document.createRange();
				range.selectNodeContents(e.target);
				window.getSelection().removeAllRanges();
				window.getSelection().addRange(range);
			}
			e.target.isselect = true;
		},
		// 查询显示模块数组中是否含有指定模块
		haveItem(name) {
			for (const iterator of this.showModule) {
				if (iterator.name === name) return true;
			}
			return false;
		},
		// 侧边栏模块添加删除
		deleteItem(item) {
			this.showModule.push(item);
			this.hideModule.splice(this.hideModule.indexOf(item), 1);
		},
		insertItem(item) {
			this.hideModule.unshift(item);
			this.showModule.splice(this.showModule.indexOf(item), 1);
		},
		// 生成基本信息展示数据
		personalInfoShow() {
			this.personalArr = [];
			this.personalDefaultArr = [];
			for (item of this.personalInfo.default) {
				if (item.content.trim().length > 0) {
					this.personalArr.push(item);
				}
				if (item.name !== '头像') {
					this.personalDefaultArr.push({
						name: item.name,
						content: item.name,
					});
				}
			}
			for (item of this.personalInfo.optional) {
				if (item.content.trim().length > 0) {
					this.personalArr.push(item);
				}
			}
		},
		// 基本信息字段删除
		deletepersonalInfoItem(items, item) {
			if (items.length <= 1) {
				return false;
			}
			this.$confirm('此操作将删除该字段, 是否继续?', '提示', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				type: 'error',
			})
				.then(() => {
					items.splice(items.indexOf(item), 1);
				})
				.catch(() => {
					console.log('删除取消');
				});
		},
		// 修改基本信息字段
		editpersonalInfo() {
			this.personalInfoShow();
			this.imgShow = this.personalImgShow;
			this.personalDialogFormVisible = false;
		},
		// 生成求职意向展示数据
		workerNeedShow() {
			this.workerNeedArr = [];
			this.workerNeedDefaultArr = [];
			for (let item of this.workerNeed.default) {
				if (item.content.trim().length > 0) {
					this.workerNeedArr.push(item);
				}

				this.workerNeedDefaultArr.push({
					name: item.name,
					content: item.name,
				});
			}
			for (let item of this.workerNeed.optional) {
				if (item.content.trim().length > 0) {
					this.workerNeedArr.push(item);
				}
			}
			this.workerNeedDialogFormVisible = false;
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
				scale: 2, // 添加的scale 参数
				// dpi: 300,
				width: shareContent.offsetWidth,
				height: shareContent.offsetHeight,
				y: 0,
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
			this.downloadDialogFormVisible = false;
		},
	},
	computed: {
		// 基本信息展示数据来源确定
		personalDataForWhere() {
			return this.personalArr.length === 0
				? this.personalDefaultArr
				: this.personalArr;
		},
		workerNeedDataForWhere() {
			return this.workerNeedArr.length === 0
				? this.workerNeedDefaultArr
				: this.workerNeedArr;
		},
	},
	created() {
		// 生成基本信息数据
		this.personalInfoShow();
		this.workerNeedShow();
	},
});
