(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-59f95aa4"],{"1dde":function(t,i,e){var s=e("d039"),n=e("b622"),o=e("2d00"),r=n("species");t.exports=function(t){return o>=51||!s((function(){var i=[],e=i.constructor={};return e[r]=function(){return{foo:1}},1!==i[t](Boolean).foo}))}},4416:function(t,i,e){"use strict";e("d3d3")},"7f5c":function(t,i,e){"use strict";e.r(i);var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"mainContainer"},[e("div",{staticClass:"tool"},[e("div",{staticClass:"item"},[t._v("显示宽度")]),e("div",{staticClass:"item"},[e("el-input",{staticClass:"input",attrs:{size:"small"},on:{blur:function(i){return t.resize(0)}},model:{value:t.width,callback:function(i){t.width=i},expression:"width"}})],1),e("div",{staticClass:"item"},[t._v("显示高度")]),e("div",{staticClass:"item"},[e("el-input",{staticClass:"input",attrs:{size:"small"},on:{blur:function(i){return t.resize(0)}},model:{value:t.height,callback:function(i){t.height=i},expression:"height"}})],1),e("div",{staticClass:"item"},[t._v("左边距")]),e("div",{staticClass:"item"},[e("el-input",{staticClass:"input",attrs:{size:"small"},on:{blur:function(i){return t.resize(1)}},model:{value:t.left,callback:function(i){t.left=i},expression:"left"}})],1),e("div",{staticClass:"item"},[t._v("上边距")]),e("div",{staticClass:"item"},[e("el-input",{staticClass:"input",attrs:{size:"small"},on:{blur:function(i){return t.resize(1)}},model:{value:t.top,callback:function(i){t.top=i},expression:"top"}})],1),e("div",{staticClass:"item"},[e("el-button",{attrs:{size:"small"},on:{click:t.AddMark}},[t._v("添加书签")])],1),e("div",{staticClass:"item"},[e("el-button",{attrs:{size:"small"},on:{click:t.MarkRePlace}},[t._v("替换书签内容")])],1),e("div",{staticClass:"item"},[e("el-button",{attrs:{size:"small"},on:{click:t.ConvertFirstPage}},[t._v("转首页为图片")])],1),t.StartSecond?e("el-button",{attrs:{size:"small"},on:{click:t.CloseSecondApplet}},[t._v(" 关闭Excel网页组件 ")]):e("el-button",{attrs:{size:"small"},on:{click:t.openSecondApplet}},[t._v(" 启动Excel网页组件 ")])],1),e("div",{staticClass:"tool"},[e("div",{staticClass:"item"},[e("el-button",{attrs:{size:"small"},on:{click:t.InsertContent}},[t._v("插入内容")])],1),e("div",{staticClass:"item"},[e("el-button",{attrs:{size:"small"},on:{click:t.SaveFile}},[t._v("保存文档")])],1),e("div",{staticClass:"item"},[e("el-button",{attrs:{size:"small"},on:{click:t.SaveAsFile}},[t._v("另存文档")])],1),e("div",{staticClass:"item"},[e("el-button",{attrs:{size:"small"},on:{click:t.ExpportFile}},[t._v("导出文档")])],1),e("div",{staticClass:"item"},[e("el-button",{attrs:{size:"small"},on:{click:t.InsertImg}},[t._v("插入图片印章")])],1),e("div",{staticClass:"item"},[e("el-button",{attrs:{size:"small"},on:{click:t.GetFirstImg}},[t._v("提取首图")])],1),e("div",{staticClass:"item"},[e("el-button",{attrs:{size:"small"},on:{click:t.PrintFile}},[t._v("打印文档")])],1),t.IsRevision?e("el-button",{attrs:{size:"small"},on:{click:t.DisableRevision}},[t._v(" 关闭留痕 ")]):e("el-button",{attrs:{size:"small"},on:{click:t.EnableRevision}},[t._v(" 启用留痕 ")]),e("div",{staticClass:"item"},[e("el-button",{attrs:{size:"small"},on:{click:t.ShowRevision}},[t._v("显示留痕")])],1),e("div",{staticClass:"item"},[e("el-button",{attrs:{size:"small"},on:{click:t.AcceptRevision}},[t._v("接受留痕")])],1)],1),e("div",{staticClass:"urlbox"},[e("div",{staticClass:"item",staticStyle:{"margin-right":"10px"}},[e("el-button",{attrs:{size:"small"},on:{click:t.DocRed}},[t._v("公文套红")])],1),e("div",{staticClass:"item"},[t._v("文档路径")]),e("div",{staticClass:"item input"},[e("el-input",{attrs:{placeholder:"这里演示切换文档",size:"small"},model:{value:t.MyOpenDoc,callback:function(i){t.MyOpenDoc=i},expression:"MyOpenDoc"}})],1),e("div",{staticClass:"item",staticStyle:{"margin-left":"10px"}},[e("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(i){return t.changeOpen()}}},[t._v("切换打开")])],1),e("div",{staticClass:"item",staticStyle:{"margin-left":"10px"}},[e("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(i){return t.ReLoadFirst()}}},[t._v("完整嵌入")])],1)]),e("div",{ref:"player",staticClass:"video-container"},[t._v(" 办公网页组件区域 ")]),e("div",{staticClass:"tool"},[e("div",{staticClass:"item",staticStyle:{"margin-left":"10px"}},[e("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(i){return t.AppletFullEdit()}}},[t._v("全屏编辑")]),e("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(i){return t.CloseAllApplet()}}},[t._v("关闭所有网页组件")])],1),e("div",{staticClass:"item"},[t._v("最新版本号")]),e("div",{staticClass:"item"},[e("el-input",{attrs:{size:"small"},model:{value:t.version,callback:function(i){t.version=i},expression:"version"}})],1),e("el-button",{attrs:{size:"small",type:"primary"},on:{click:t.CheckUpdate}},[t._v("校验升级")])],1),e("el-input",{staticClass:"DebugLog",attrs:{type:"textarea",rows:5,placeholder:"调试日志"},model:{value:t.DebugLog,callback:function(i){t.DebugLog=i},expression:"DebugLog"}})],1)},n=[];e("c975"),e("a15b"),e("a434"),e("fb6a");function o(t,i){var e=location.protocol;return e.toUpperCase().indexOf("HTTPS")>-1?1==i?"wss://wrl.zorrosoft.com:"+t+"?sid="+r(5).toLocaleString()+"&flag=1&cid=zorrosoft&tk=8C4560272C8A38C32EF6102CAB6B4D886504F06C63202A316B3FD88381FC5491704DA444156B9F6FDA313843E412F1E1DC414A7899399F14D76688090FC7DCE11DA121CB2B0E819B2B7080DB9CF09D4D66192C5893ABE182DA38DF8A02EFAACB304BF9A242ADEBFAA09FC0304918895DE3B56E30A17AA8D92E3D61C1AC2453E6C1C637C3E260FE9A445EC858BADEB9312A43DD99323EF5D63414B9BC7D3F4004C7E109ADD5A6289ADAB004A2A544D312BB84E467DAC4C9449418F3FCCC9529049DCFD562B77EF2CE429B242C23975E6EA922E0564B6507177187E92F254EC2678A795B5D2EC92F818A7364FB7CA3E553D4F94119F868261E5A0A8E7EBE841CF7":"wss://wrl.zorrosoft.com:"+t+"?sid="+r(5).toLocaleString()+"&flag=1":1==i?"ws://127.0.0.1:"+t+"?sid="+r(5).toLocaleString()+"?flag=1&cid=zorrosoft&tk=8C4560272C8A38C32EF6102CAB6B4D886504F06C63202A316B3FD88381FC5491704DA444156B9F6FDA313843E412F1E1DC414A7899399F14D76688090FC7DCE11DA121CB2B0E819B2B7080DB9CF09D4D66192C5893ABE182DA38DF8A02EFAACB304BF9A242ADEBFAA09FC0304918895DE3B56E30A17AA8D92E3D61C1AC2453E6C1C637C3E260FE9A445EC858BADEB9312A43DD99323EF5D63414B9BC7D3F4004C7E109ADD5A6289ADAB004A2A544D312BB84E467DAC4C9449418F3FCCC9529049DCFD562B77EF2CE429B242C23975E6EA922E0564B6507177187E92F254EC2678A795B5D2EC92F818A7364FB7CA3E553D4F94119F868261E5A0A8E7EBE841CF7":"ws://127.0.0.1:"+t+"?sid="+r(5).toLocaleString()+"&flag=1"}function r(t){return("000000"+Math.floor(999999*Math.random())).slice(-6)}var a=o;e("99af");function c(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}function l(t,i){for(var e=0;e<i.length;e++){var s=i[e];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}function d(t,i,e){return i&&l(t.prototype,i),e&&l(t,e),t}var h=function(){function t(i,e){c(this,t),this.instance=null,this.token=null,this.isConnected=!1,this.url=i,this.options=e||this.defaultOptions(),this.options&&(this.reconnectEnabled=e.reconnectEnabled||!1,this.reconnectEnabled&&(this.reconnectInterval=e.reconnectInterval)),this.onOpen=null,this.onMessage=null,this.onClose=null,this.onError=null}return d(t,[{key:"defaultOptions",value:function(){return{reconnectEnabled:!1,reconnectInterval:0,token:null}}},{key:"connect",value:function(){var t=this,i=this.token||null,e=this.url;null!==i&&(e+="?token=".concat(i)),this.instance=new WebSocket(e),this.instance.onopen=function(){t.isConnected=!0,console.log("链接成功"),"function"===typeof t.onOpen&&t.onOpen()},this.instance.onmessage=function(i){"function"===typeof t.onMessage&&t.onMessage(i)},this.instance.onclose=function(i){t.isConnected=!1,"function"===typeof t.onClose&&t.onClose(i),t.reconnectEnabled&&t.reconnect()},this.instance.onerror=function(i){"function"===typeof t.onError&&t.onError(i)}}},{key:"disconnect",value:function(){try{this.instance.close()}catch(t){console.warn("".concat(t," ").concat(this.instance))}delete this.instance}},{key:"reconnect",value:function(){var t=this;try{this.instance.close()}catch(i){console.warn("".concat(i," ").concat(this.instance))}delete this.instance,setTimeout((function(){t.connect()}),this.reconnectInterval)}},{key:"sendObj",value:function(t){var i=this;this.instance.readyState===this.instance.OPEN?this.instance.send(JSON.stringify(t)):(this.instance.readyState,this.instance.CONNECTING,setTimeout((function(){i.sendObj(t)}),1e3))}},{key:"removeListeners",value:function(){this.onOpen=null,this.onMessage=null,this.onClose=null,this.onError=null}}]),t}(),p={components:{},data:function(){return{aid:0,aid2:0,curID:0,rid:10,runInfo:1,RunFirst:2,RunSecond:3,version:"2.2.17.1",ServerOpenFile:"http://local.zorrosoft.com/Files/template.doc",MyOpenDoc:"d:/zorro/test.docx",MyOpenExcel:"d:/zorro/test.xlsx",SaveAsDoc:"d:/zorro/SaveAs.doc",ExportDoc:"d:/zorro/test.pdf",InsertImgFile:"http://zorrosoft.com/wp-content/uploads/2021/07/2021072709255099-1024x576.png",PrintPathFile:"d:/zorro/testprint.pdf",StartSecond:0,ReStartLoad:0,width:960,height:480,left:0,top:0,IframeX:-10,IframeY:0,OpenType:1,SelectDlgType:0,IsRevision:!1,isConnService:!1,isDisConnect:!1,socket:[],result:[]}},computed:{DebugLog:function(){return this.result.join("\n")}},mounted:function(){this.init();var t=this;window.onresize=function(){t.pageResize()}},destroyed:function(){window.onresize=null},beforeDestroy:function(){this.close()},methods:{init:function(){document.addEventListener?document.addEventListener("visibilitychange",this.handleVisiable,!1):document.attachEvent("visibilitychange",this.handleVisiable,!1),window.addEventListener("scroll",this.windowScroll,!0),window.addEventListener("unload",this.unloadHandler,!1),this.GetAppletPosition(),this.GetOfficeInfo()},windowScroll:function(){var t=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;this.aid>0&&this.appScroll(0,this.aid,t),this.aid2>0&&this.appScroll(2,this.aid2,t)},appScroll:function(t,i,e){if(i){this.rid++;var s={req:"Wrl_AppletScroll",rid:this.rid,para:{ID:i,NoLog:1,Code:2,Left:0,Top:Math.round(e)}};this.socket[t].sendObj(s)}},GetAppletPosition:function(){var t=0,i=0,e=this.hasHorizontalScrollbar(),s=this.hasVerticalScrollbar();e&&(i=void 0!=window.pageXOffset?Math.round(window.pageXOffset):Math.round(document.documentElement.scrollLeft||document.body.scrollLeft)),s&&(t=void 0!=window.pageYOffset?Math.round(window.pageYOffset):Math.round(document.documentElement.scrollTop||document.body.scrollTop));var n=this.$refs.player.getBoundingClientRect();this.left=Math.round(n.left)+i,this.top=Math.round(n.top)+t},handleVisiable:function(t){"hidden"==t.target.visibilityState?this.hideApp(4):"visible"==t.target.visibilityState&&this.showApp()},hasVerticalScrollbar:function(){return document.documentElement.clientHeight?document.body.scrollHeight>document.documentElement.clientHeight:document.body.scrollHeight>window.innerHeight},hasHorizontalScrollbar:function(){return document.documentElement.clientWidth?document.body.scrollWidth>document.documentElement.clientWidth:document.body.scrollWidth>window.innerWidth},pageResize:function(){this.aid>0&&this.SendScrollInfo(0,this.aid),this.aid2>0&&this.SendScrollInfo(2,this.aid2)},SendScrollInfo:function(t,i){var e=0,s=0,n=0,o=this.hasHorizontalScrollbar(),r=this.hasVerticalScrollbar();o&&(s=void 0!=window.pageXOffset?Math.round(window.pageXOffset):Math.round(document.documentElement.scrollLeft||document.body.scrollLeft)),r&&(e=void 0!=window.pageYOffset?Math.round(window.pageYOffset):Math.round(document.documentElement.scrollTop||document.body.scrollTop)),o&&(n=1),r&&(n+=2),this.rid++;var a={req:"Wrl_ScrollBar",rid:this.rid,para:{ID:i,BarW:0,BarH:0,Code:n,Left:s,Top:e}};console.log(a),this.socket[t].sendObj(a)},unloadHandler:function(){this.close()},close:function(){this.CloseAllApplet(),this.isDisConnect=!0,this.socket[0].disconnect(),this.socket.pop(),this.isDisConnect=!1,document.addEventListener?document.removeEventListener("visibilitychange",this.handleVisiable,!1):document.detachEvent("visibilitychange",this.handleVisiable,!1),window.removeEventListener("scroll",this.windowScroll),window.removeEventListener("unload",this.unloadHandler,!1)},GetOfficeInfo:function(){this.isConnService=!0;var t=location.protocol;t.toUpperCase().indexOf("HTTPS")>-1?this.openWebsocket(453,0):this.openWebsocket(83,0);var i={req:"Wrl_OfficeInfo",rid:this.runInfo,para:{}};this.socket[0].sendObj(i)},StartOfficeApplet:function(){var t={req:"Wrl_OfficeApplet",rid:this.RunFirst,para:{Type:"0",Title:"办公网页组件(Word)",Version:2,Flag:578,Left:this.left,Top:this.top,Width:this.width,Height:this.height,IframeX:this.IframeX,IframeY:this.IframeY,BarW:0,BarH:0,ScrollTop:0,Web:{Edit:0,Hide:0,User:"test",Cookie:"",DataPath:"c:/OfficeDoc"},Option:this.OpenType,Open:this.ServerOpenFile}};this.socket[0].sendObj(t)},openSecondApplet:function(){if(this.aid){this.width=475,this.resize(0),this.isConnService=!0;var t=location.protocol;t.toUpperCase().indexOf("HTTPS")>-1?this.openWebsocket(453,0):this.openWebsocket(83,0);var i={req:"Wrl_OfficeApplet",rid:this.RunSecond,para:{Type:"0",Title:"办公网页组件(Excel)",Version:2,Flag:578,Left:this.left+485,Top:this.top,Width:this.width,Height:this.height,IframeX:-10,IframeY:0,BarW:0,BarH:0,ScrollTop:0,Web:{Edit:0,Hide:0,User:"zorro",Cookie:""},Open:this.MyOpenExcel,Option:this.OpenType+1}};this.socket[2].sendObj(i),this.StartSecond=!0}else this.$message.success("请先启动第一个网页组件")},CloseSecondApplet:function(){if(this.StartSecond){this.isDisConnect=!0,this.socket[3].disconnect(),this.socket[2].disconnect(),this.socket.pop(),this.socket.pop(),this.isDisConnect=!1,this.StartSecond=!1,this.aid2=0,this.width=960,this.height=480;var t=this.$refs.player.getBoundingClientRect();this.left=t.left,this.top=t.top,this.resize(0)}},CloseFirstApplet:function(){if(this.aid>0){this.rid++;var t={req:"Wrl_AppletControl",rid:this.rid,para:{ID:this.aid,Code:1}};this.isDisConnect=!0,this.socket[1].disconnect(),this.socket[0].sendObj(t),this.aid=0,this.ReStartLoad=0,this.StartSecond?this.socket.splice(1,1):this.socket.pop(),this.isDisConnect=!1}},AppletFullEdit:function(){this.rid++;var t={req:"Office_SwitchFullScreen",rid:this.rid,para:{}};this.aid2>0&&this.aid2==this.curID?this.socket[3].sendObj(t):this.socket[1].sendObj(t)},ReLoadFirst:function(){this.CloseFirstApplet(),this.ReStartLoad=1;var t={req:"Wrl_OfficeApplet",rid:this.RunFirst,para:{Type:"0",Title:"办公网页组件(Word)",Version:1,Flag:578,Left:this.left,Top:this.top,Width:this.width,Height:this.height,IframeX:this.IframeX,IframeY:this.IframeY,BarW:0,BarH:0,ScrollTop:0,Web:{Edit:0,Hide:0,User:"zorro",Cookie:""},Open:encodeURIComponent(this.MyOpenDoc),Option:this.OpenType}};this.socket[0].sendObj(t)},CloseAllApplet:function(){this.CloseSecondApplet(),this.CloseFirstApplet()},openWebsocket:function(t,i){var e=this,s=a(t,i),n=new h(s,{reconnectEnabled:!1});n.connect(),1==this.ReStartLoad&&this.StartSecond?(this.ReStartLoad=2,this.socket.splice(1,0,n)):(1==this.ReStartLoad&&(this.ReStartLoad=2),this.socket.push(n)),n.onMessage=function(t){console.log(t.data);var i=JSON.parse(t.data);if(i.rid==e.runInfo){for(var s in i.data.Info)1==i.data.Info[s].Cur&&(e.OpenType=i.data.Info[s].Type);e.result.push("当前Office类型 "+e.OpenType),e.StartOfficeApplet()}if("Wrl_AppletOK"==i.event&&(i.rid==e.RunFirst&&(e.aid=i.aid,e.SendScrollInfo(0,e.aid),console.log(e.aid)),i.rid==e.RunSecond&&(e.aid2=i.aid,e.SendScrollInfo(2,e.aid2),console.log(e.aid2))),"Wrl_Listen"==i.event){var n=e;setTimeout((function(){n.isConnService=!1,n.openWebsocket(i.data.port,0)}),200),i.aid>0&&(e.curID=i.aid)}"Wrl_SelectFile"==i.event&&(0==e.SelectDlgType?i.data.length?e.BeginSaveAsFile(i.data[0].File):e.BeginSaveAsFile(e.SaveAsDoc):1==e.SelectDlgType?i.data.length?e.BeginExpportFile(i.data[0].File):e.BeginExpportFile(e.ExportDoc):2==e.SelectDlgType?i.data.length?e.BeginInsertImg(i.data[0].File):e.BeginInsertImg(e.InsertImgFile):3==e.SelectDlgType?i.data.length?e.BeginGetFirstImg(i.data[0].File):e.BeginGetFirstImg(""):4==e.SelectDlgType&&(i.data.length?e.BeginConvertFirstPage(i.data[0].File):e.BeginConvertFirstPage(""))),i.err&&e.$message.success(i.err),"Wrl_Version"==i.req&&(1==i.data.Update?(e.hideApp(32),e.$confirm("有新版本发布, 是否马上升级?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){e.CloseAllApplet(),e.SendUpdateJson()})).catch((function(){e.showApp()}))):e.$message.success("已经是最新版本！")),e.result.push(t.data)},n.onClose=function(t){console.log(t)},n.onError=function(t){e.ReStartLoad||!e.isConnService||e.isDisConnect||e.$confirm("PageHiOffice—文档在线编辑组件 服务端口连接失败，可能是尚未安装，是否马上下载安装？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){window.open("http://local.zorrosoft.com/Files/PageHiOfficeIns.exe")})).catch((function(){}))}},resize:function(t){if(this.aid2>0&&this.aid2==this.curID)if(this.rid++,t){var i={req:"Wrl_AppletResize",rid:this.rid,para:{ID:this.aid2,X:this.left,Y:this.top,Width:this.width,Height:this.height}};this.socket[2].sendObj(i)}else{var e={req:"Wrl_AppletResize",rid:this.rid,para:{ID:this.aid2,Width:this.width,Height:this.height}};this.socket[2].sendObj(e)}else if(this.aid>0)if(this.rid++,t){var s={req:"Wrl_AppletResize",rid:this.rid,para:{ID:this.aid,X:this.left,Y:this.top,Width:this.width,Height:this.height}};this.socket[0].sendObj(s)}else{var n={req:"Wrl_AppletResize",rid:this.rid,para:{ID:this.aid,Width:this.width,Height:this.height}};this.socket[0].sendObj(n)}},InsertContent:function(){this.rid++;var t={req:"Office_Insert",rid:this.rid,para:[{Paragraph:1},{FontSize:"16",FontName:"宋体",Color:"0",Bold:"8",Text:"详情请访问成都佐罗软件网站："},{Paragraph:1},{Address:"http://www.zorrosoft.com",Display:"佐罗软件官方网站"}]};this.aid2>0&&this.aid2==this.curID?this.socket[3].sendObj(t):this.socket[1].sendObj(t)},AddMark:function(){this.rid++;var t={req:"Office_InsertMark",rid:this.rid,para:{Name:"TestMark",Content:"[InsertMark]",Hidden:0,Sort:0}};this.aid2>0&&this.aid2==this.curID?this.socket[3].sendObj(t):this.socket[1].sendObj(t)},MarkRePlace:function(){this.rid++;var t={req:"Office_PutMarkText",rid:this.rid,para:{Marks:[{Name:"Caption",Text:"公文标题"},{Name:"TestMark",Text:"TestMarkContent"}]}};this.aid2>0&&this.aid2==this.curID?this.socket[3].sendObj(t):this.socket[1].sendObj(t)},InsertDJSign:function(){this.rid++;var t={req:"Office_SealInsert",rid:this.rid,para:{Type:0}};this.aid2>0&&this.aid2==this.curID?this.socket[3].sendObj(t):this.socket[1].sendObj(t)},SaveFile:function(){this.rid++;var t={req:"Office_Save",rid:this.rid,para:{}};this.aid2>0&&this.aid2==this.curID?this.socket[3].sendObj(t):this.socket[1].sendObj(t)},SaveAsFile:function(){this.rid++,this.SelectDlgType=0;var t={req:"Wrl_SelectFile",rid:this.rid,para:{Type:1,Title:"请设置另存文件位置",Ext:"另存文件(*.doc;*.docx;*.pdf;*.html)\r*.doc;*.docx;*.pdf;*.html"}};this.aid2>0&&this.aid2==this.curID?this.socket[2].sendObj(t):this.socket[0].sendObj(t)},BeginSaveAsFile:function(t){this.rid++;var i={req:"Office_SaveAs",rid:this.rid,para:{NewFile:encodeURIComponent(t)}};this.aid2>0&&this.aid2==this.curID?this.sockest[3].sendObj(i):this.socket[1].sendObj(i)},ExpportFile:function(){this.rid++,this.SelectDlgType=1;var t={req:"Wrl_SelectFile",rid:this.rid,para:{Type:1,Title:"请设置导出文件位置",Ext:"导出文件(*.pdf)\r*.pdf"}};this.aid2>0&&this.aid2==this.curID?this.socket[2].sendObj(t):this.socket[0].sendObj(t)},BeginExpportFile:function(t){this.rid++;var i={req:"Office_Export",rid:this.rid,para:{NewFile:encodeURIComponent(t)}};this.aid2>0&&this.aid2==this.curID?this.sockest[3].sendObj(i):this.socket[1].sendObj(i)},InsertImg:function(){this.rid++,this.SelectDlgType=2;var t={req:"Wrl_SelectFile",rid:this.rid,para:{Type:0,Title:"请选择需要插入的图片",Ext:"图片文件(*.jpg;*.png;*.gif;*.bmp;*.tiff)\r*.jpg;*.png;*.gif;*.bmp;*.tiff"}};this.aid2>0&&this.aid2==this.curID?this.socket[2].sendObj(t):this.socket[0].sendObj(t)},BeginInsertImg:function(t){this.rid++;var i={req:"Office_InsertImg",rid:this.rid,para:{ImgFile:encodeURIComponent(t),Order:5,Save:1}};this.aid2>0&&this.aid2==this.curID?this.sockest[3].sendObj(i):this.socket[1].sendObj(i)},GetFirstImg:function(){this.rid++,this.SelectDlgType=3;var t={req:"Wrl_SelectFile",rid:this.rid,para:{Type:1,Title:"请设置图片保存位置",Ext:"图片文件(*.jpg;*.png;*.gif;*.bmp;*.tiff)\r*.jpg;*.png;*.gif;*.bmp;*.tiff"}};this.aid2>0&&this.aid2==this.curID?this.socket[2].sendObj(t):this.socket[0].sendObj(t)},BeginGetFirstImg:function(t){this.rid++;var i={};i=t.length?{req:"Office_GetImage",rid:this.rid,para:{File:encodeURIComponent(t),Index:1}}:{req:"Office_GetImage",rid:this.rid,para:{Index:1}},this.aid2>0&&this.aid2==this.curID?this.socket[3].sendObj(i):this.socket[1].sendObj(i)},ConvertFirstPage:function(){this.rid++,this.SelectDlgType=4;var t={req:"Wrl_SelectFile",rid:this.rid,para:{Type:1,Title:"请设置图片保存位置",Ext:"图片文件(*.jpg;*.png;*.gif;*.bmp;*.tiff)\r*.jpg;*.png;*.gif;*.bmp;*.tiff"}};this.aid2>0&&this.aid2==this.curID?this.socket[2].sendObj(t):this.socket[0].sendObj(t)},BeginConvertFirstPage:function(t){this.rid++;var i={};i=t.length?{req:"Office_ConvertImage",rid:this.rid,para:{File:encodeURIComponent(t),Index:1}}:{req:"Office_ConvertImage",rid:this.rid,para:{Index:1}},this.aid2>0&&this.aid2==this.curID?this.socket[3].sendObj(i):this.socket[1].sendObj(i)},DocRed:function(){this.rid++;var t={req:"Office_RedTemplate",rid:this.rid,para:{Position:"Content",File:"http://local.zorrosoft.com/Files/template.doc"}};this.aid2>0&&this.aid2==this.curID?this.socket[3].sendObj(t):this.socket[1].sendObj(t)},PrintFile:function(){this.rid++;var t={req:"Office_PrintOut",rid:this.rid,para:{ImgFile:this.PrintPathFile,Copies:1}};this.aid2>0&&this.aid2==this.curID?this.socket[3].sendObj(t):this.socket[1].sendObj(t)},EnableRevision:function(){this.rid++;var t={req:"Office_PutTrackRevisions",rid:this.rid,para:{TrackRevisions:1}};this.aid2>0&&this.aid2==this.curID?this.socket[3].sendObj(t):this.socket[1].sendObj(t),IsRevision=!0},DisableRevision:function(){this.rid++;var t={req:"Office_PutTrackRevisions",rid:this.rid,para:{TrackRevisions:0}};this.aid2>0&&this.aid2==this.curID?this.socket[3].sendObj(t):this.socket[1].sendObj(t),IsRevision=!1},ShowRevision:function(){this.rid++;var t={req:"Office_PutShowRevisions",rid:this.rid,para:{ShowRevisions:1}};this.aid2>0&&this.aid2==this.curID?this.socket[3].sendObj(t):this.socket[1].sendObj(t)},AcceptRevision:function(){this.rid++;var t={req:"Office_TrackRevisions",rid:this.rid,para:{Type:1}};this.aid2>0&&this.aid2==this.curID?this.socket[3].sendObj(t):this.socket[1].sendObj(t)},changeOpen:function(){this.rid++;var t={req:"Office_Open",rid:this.rid,para:{Open:encodeURIComponent(this.MyOpenDoc)}};this.aid2>0&&this.aid2==this.curID?this.socket[3].sendObj(t):this.socket[1].sendObj(t)},showApp:function(){if(this.aid>0){this.rid++;var t={req:"Wrl_AppletControl",rid:this.rid,para:{ID:this.aid,Code:8}};this.socket[0].sendObj(t)}if(this.aid2>0){this.rid++;var i={req:"Wrl_AppletControl",rid:this.rid,para:{ID:this.aid2,Code:8}};this.socket[2].sendObj(i)}},hideApp:function(t){if(this.aid>0){this.rid++;var i={req:"Wrl_AppletControl",rid:this.rid,para:{ID:this.aid,Code:t}};this.socket[0].sendObj(i)}if(this.aid2>0){this.rid++;var e={req:"Wrl_AppletControl",rid:this.rid,para:{ID:this.aid2,Code:t}};this.socket[2].sendObj(e)}},CheckUpdate:function(){this.rid++;var t={req:"Wrl_Version",rid:this.rid,para:{Version:this.version}};this.socket[0].sendObj(t)},SendUpdateJson:function(){this.rid++;var t={req:"Wrl_Update",rid:this.rid,para:{Name:"PageHiOffice—文档在线编辑组件升级包",Date:"2025-02-19",Desc:"1、中间件高级版增加支持在夸克、遨游、猎豹及双核浏览器中的使用； 2、增强识别当前网页窗口信息接口，增强内嵌小程序启动参数可避免其加载到其它网页；3、优化高级版小程序在服务器版系统中的运行体验；4、Office网页组件增加其控件或VBA接口的全面调用方式，不再局限于单独封装的接口；5、PageHiOffice网页组件增加OFD文档打开支持，解决在Win7等低版本系统直接关闭浏览器时可能弹崩溃问题，解决启动多个实例时设置的编辑权限不一样可能相互影响问题...",DownAddr:"http://local.zorrosoft.com/Files/Update/Office_Update.pid",Open:"http://local.zorrosoft.com/office",MD5:"BF2E94FFEE99430864C54C61C152F60D",Version:"2.2.17.1",Size:36667392,HideIns:0,Cookie:"",Auth:"",TK:"7E91C6041EBEC3C9C8A45B9D0BC1267211592329F64EF35C1FEF300E083377A3D1427817032667CBA9F6366CDF04B71C2BDEA146DCAB3382E02EEF2C5270DA1F45646D826759ACD056511A71DD2B389C57C8E3B2A9DBE89F84D3840190E5B6B14428B5840A140AD72FAECB2EACA8F93105C07919DF6565E84A885047DFC82B04CE4DE19D614CDC115CD9D3749DDE35AE3FF0F64216DDC950D0F09330A81D2F9B8B95524B201C039DE61DC41CB8A1095EC61CDD71CC0E8245EC4F1EC2EBA7E4A53C8FF87E88967F51902AACE3224CA9F7EB357FD884D0E2B0F1FD8A2FE0EA14AACAC4576D63F0C1937BF66BB49FF0A69F4AA6F62A0A14AFE4943874AF6865F814"}};this.socket[0].sendObj(t)}}},f=p,u=(e("4416"),e("2877")),v=Object(u["a"])(f,s,n,!1,null,"117baf74",null);i["default"]=v.exports},8418:function(t,i,e){"use strict";var s=e("c04e"),n=e("9bf2"),o=e("5c6c");t.exports=function(t,i,e){var r=s(i);r in t?n.f(t,r,o(0,e)):t[r]=e}},"99af":function(t,i,e){"use strict";var s=e("23e7"),n=e("d039"),o=e("e8b5"),r=e("861d"),a=e("7b0b"),c=e("50c4"),l=e("8418"),d=e("65f0"),h=e("1dde"),p=e("b622"),f=e("2d00"),u=p("isConcatSpreadable"),v=9007199254740991,C="Maximum allowed index exceeded",m=f>=51||!n((function(){var t=[];return t[u]=!1,t.concat()[0]!==t})),g=h("concat"),b=function(t){if(!r(t))return!1;var i=t[u];return void 0!==i?!!i:o(t)},D=!m||!g;s({target:"Array",proto:!0,forced:D},{concat:function(t){var i,e,s,n,o,r=a(this),h=d(r,0),p=0;for(i=-1,s=arguments.length;i<s;i++)if(o=-1===i?r:arguments[i],b(o)){if(n=c(o.length),p+n>v)throw TypeError(C);for(e=0;e<n;e++,p++)e in o&&l(h,p,o[e])}else{if(p>=v)throw TypeError(C);l(h,p++,o)}return h.length=p,h}})},a15b:function(t,i,e){"use strict";var s=e("23e7"),n=e("44ad"),o=e("fc6a"),r=e("a640"),a=[].join,c=n!=Object,l=r("join",",");s({target:"Array",proto:!0,forced:c||!l},{join:function(t){return a.call(o(this),void 0===t?",":t)}})},a434:function(t,i,e){"use strict";var s=e("23e7"),n=e("23cb"),o=e("a691"),r=e("50c4"),a=e("7b0b"),c=e("65f0"),l=e("8418"),d=e("1dde"),h=e("ae40"),p=d("splice"),f=h("splice",{ACCESSORS:!0,0:0,1:2}),u=Math.max,v=Math.min,C=9007199254740991,m="Maximum allowed length exceeded";s({target:"Array",proto:!0,forced:!p||!f},{splice:function(t,i){var e,s,d,h,p,f,g=a(this),b=r(g.length),D=n(t,b),A=arguments.length;if(0===A?e=s=0:1===A?(e=0,s=b-D):(e=A-2,s=v(u(o(i),0),b-D)),b+e-s>C)throw TypeError(m);for(d=c(g,s),h=0;h<s;h++)p=D+h,p in g&&l(d,h,g[p]);if(d.length=s,e<s){for(h=D;h<b-s;h++)p=h+s,f=h+e,p in g?g[f]=g[p]:delete g[f];for(h=b;h>b-s+e;h--)delete g[h-1]}else if(e>s)for(h=b-s;h>D;h--)p=h+s-1,f=h+e-1,p in g?g[f]=g[p]:delete g[f];for(h=0;h<e;h++)g[h+D]=arguments[h+2];return g.length=b-s+e,d}})},c975:function(t,i,e){"use strict";var s=e("23e7"),n=e("4d64").indexOf,o=e("a640"),r=e("ae40"),a=[].indexOf,c=!!a&&1/[1].indexOf(1,-0)<0,l=o("indexOf"),d=r("indexOf",{ACCESSORS:!0,1:0});s({target:"Array",proto:!0,forced:c||!l||!d},{indexOf:function(t){return c?a.apply(this,arguments)||0:n(this,t,arguments.length>1?arguments[1]:void 0)}})},d3d3:function(t,i,e){},fb6a:function(t,i,e){"use strict";var s=e("23e7"),n=e("861d"),o=e("e8b5"),r=e("23cb"),a=e("50c4"),c=e("fc6a"),l=e("8418"),d=e("b622"),h=e("1dde"),p=e("ae40"),f=h("slice"),u=p("slice",{ACCESSORS:!0,0:0,1:2}),v=d("species"),C=[].slice,m=Math.max;s({target:"Array",proto:!0,forced:!f||!u},{slice:function(t,i){var e,s,d,h=c(this),p=a(h.length),f=r(t,p),u=r(void 0===i?p:i,p);if(o(h)&&(e=h.constructor,"function"!=typeof e||e!==Array&&!o(e.prototype)?n(e)&&(e=e[v],null===e&&(e=void 0)):e=void 0,e===Array||void 0===e))return C.call(h,f,u);for(s=new(void 0===e?Array:e)(m(u-f,0)),d=0;f<u;f++,d++)f in h&&l(s,d,h[f]);return s.length=d,s}})}}]);