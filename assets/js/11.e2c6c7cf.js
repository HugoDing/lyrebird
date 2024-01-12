(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{233:function(t,e,r){t.exports=r.p+"assets/img/checker-a.dc4421b3.png"},234:function(t,e,r){t.exports=r.p+"assets/img/checker-b.f541161a.gif"},328:function(t,e,r){"use strict";r.r(e);var a=r(13),s=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"使用指南"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用指南"}},[t._v("#")]),t._v(" 使用指南")]),t._v(" "),e("p",[t._v("扩展(Extension)-自定义脚本是一种支持用户⾃定义的Python脚本，在Lyrebird运行的过程中，于后台并行地工作。")]),t._v(" "),e("p",[t._v("无需搭建工程和前端开发，自定义脚本可灵活、轻巧、便捷、准确的对"),e("RouterLink",{attrs:{to:"/advance/eventbus.html"}},[t._v("消息总线")]),t._v("频道中的数据进行分析和校验。")],1),t._v(" "),e("p",[t._v("自定义脚本默认支持三种类型：")]),t._v(" "),e("ol",[e("li",[e("RouterLink",{attrs:{to:"/checker/request_editor.html"}},[t._v("请求修改器(Modifier)")]),t._v(": 如为请求添加Header Key、"),e("RouterLink",{attrs:{to:"/checker/request_editor.html#修改请求"}},[t._v("修改请求的Param")]),t._v("等")],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/checker/dev_debug.html"}},[t._v("请求检查器(Checker)")]),t._v(": 如可通过检查器监听网络请求频道，检测网络请求中的"),e("RouterLink",{attrs:{to:"/checker/examples.html#大图检测"}},[t._v("图片大小")]),t._v("是否满足预期，或检测是否"),e("RouterLink",{attrs:{to:"/checker/examples.html#重复请求检测"}},[t._v("重复请求")]),t._v("了同一个接口等")],1),t._v(" "),e("li",[t._v("其他(Other): 未分类或者综合应用")])]),t._v(" "),e("p",[t._v("可在脚本中使用全局变量"),e("strong",[t._v("ExtensionCategory")]),t._v("(String类型)人为指定Extension类型")]),t._v(" "),e("p",[t._v("可以在Lyrebird运行过程中随时开启或关闭自定义脚本，即插即用，方便灵活。")]),t._v(" "),e("p",[e("img",{attrs:{src:r(233),alt:""}})]),t._v(" "),e("blockquote",[e("p",[t._v("展开Extension标签可查看当前运行的自定义脚本，按组别聚合。\nActivated Tab展示已激活的Extension, Deactivated Tab展示未激活的Extension")])]),t._v(" "),e("p",[t._v("如果需要高级的检查和展示，可使用"),e("RouterLink",{attrs:{to:"/plugins/"}},[t._v("自定义插件")]),t._v("开发实现更复杂的场景和功能。")],1),t._v(" "),e("h2",{attrs:{id:"载入自定义脚本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#载入自定义脚本"}},[t._v("#")]),t._v(" 载入自定义脚本")]),t._v(" "),e("p",[t._v("运行时携带的自定义脚本存放在默认路径~/.lyrebird/checkers下。对自定义脚本的新增、修改、删除，可在默认目录下操作文件。")]),t._v(" "),e("p",[t._v("当默认目录中没有可用的自定义脚本时，会自动载入示例脚本。目前提供的示例脚本如下：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("Filename")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Type")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("a",{attrs:{href:"https://github.com/Meituan-Dianping/lyrebird/tree/master/lyrebird/examples/checkers/img_size.py",target:"_blank",rel:"noopener noreferrer"}},[t._v("img_size.py"),e("OutboundLink")],1)]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("检查器")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("检查网络请求中图片大小是否超出限制")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("a",{attrs:{href:"https://github.com/Meituan-Dianping/lyrebird/tree/master/lyrebird/examples/checkers/duplicate_requests.py",target:"_blank",rel:"noopener noreferrer"}},[t._v("duplicate_requests.py"),e("OutboundLink")],1)]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("检查器")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("检查在某段时间内是否有重复的网络请求")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("a",{attrs:{href:"https://github.com/Meituan-Dianping/lyrebird/tree/master/lyrebird/examples/checkers/add_request_param.py",target:"_blank",rel:"noopener noreferrer"}},[t._v("add_request_param.py"),e("OutboundLink")],1)]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("修改器")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("在Request中添加Param")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("a",{attrs:{href:"https://github.com/Meituan-Dianping/lyrebird/tree/master/lyrebird/examples/checkers/add_response_header.py",target:"_blank",rel:"noopener noreferrer"}},[t._v("add_response_header.py"),e("OutboundLink")],1)]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("修改器")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("在Response中添加Header Key")])])])]),t._v(" "),e("p",[t._v("此外，Lyrebird支持使用在启动时指定需要加载的脚本。")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("lyrebird "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--script")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("filename"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--script")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("filename"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),e("h2",{attrs:{id:"捕获报警"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#捕获报警"}},[t._v("#")]),t._v(" 捕获报警")]),t._v(" "),e("p",[t._v("在获取到数据后，便可对该数据进行检验和处理。当发现异常数据时，Lyrebird会在通知中心展示报警信息。")]),t._v(" "),e("p",[e("img",{attrs:{src:r(234),alt:""}})]),t._v(" "),e("p",[t._v("报警中可携带检查出的异常信息，也可以携带"),e("RouterLink",{attrs:{to:"/advance/eventbus.html"}},[t._v("消息总线")]),t._v("中其它频道的消息作为辅助信息，以丰富报警信息。")],1)])}),[],!1,null,null,null);e.default=s.exports}}]);