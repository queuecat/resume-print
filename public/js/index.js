var vm = new Vue({
	el: '#app',
	data() {
		return {
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
		// 下载简历
		download() {
			// var shareContent = document.querySelector('#app .mainBox .main'); //需要截图的包裹的（原生的）DOM 对象
			var shareContent = document.querySelector('.tools'); //需要截图的包裹的（原生的）DOM 对象

			// 使用html2canvas将dom导出为图片
			let opts = {
				scale: 6, // 添加的scale 参数
				dpi: 300,
				useCORS: true, // 【重要】开启跨域配置
			};
			html2canvas(shareContent, opts).then((canvas) => {
				// a标签设置donwload属性
				// let a = document.createElement('a');
				// a.href = canvas.toDataURL();
				// a.download = '个人简历';
				// a.click();
				// a.remove();
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
				pdf.save('content.pdf');
			});

			// html转pdf
			/*	var doc = new jsPDF();

      // We'll make our own renderer to skip this editor
      var specialElementHandlers = {
        '#editor': function (element, renderer) {
          return true;
        },
      };

      // All units are in the set measurement for the document
      // This can be changed to "pt" (points), "mm" (Default), "cm", "in"
      doc.fromHTML(shareContent, 15, 15, {
        width: 170,
        elementHandlers: specialElementHandlers,
      });
      doc.save('content.pdf');*/
		},
	},
});
