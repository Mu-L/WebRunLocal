(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-34f98296"],{"1dde":function(t,e,i){var s=i("d039"),n=i("b622"),o=i("2d00"),a=n("species");t.exports=function(t){return o>=51||!s((function(){var e=[],i=e.constructor={};return i[a]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},2205:function(t,e,i){"use strict";i("65ea")},"65ea":function(t,e,i){},"7f5c":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"mainContainer"},[i("div",{staticClass:"tool"},[i("div",{staticClass:"item"},[t._v("窗口宽度")]),i("div",{staticClass:"item"},[i("el-input",{staticClass:"input",attrs:{size:"small"},on:{blur:function(e){return t.resize(0)}},model:{value:t.width,callback:function(e){t.width=e},expression:"width"}})],1),i("div",{staticClass:"item"},[t._v("窗口高度")]),i("div",{staticClass:"item"},[i("el-input",{staticClass:"input",attrs:{size:"small"},on:{blur:function(e){return t.resize(0)}},model:{value:t.height,callback:function(e){t.height=e},expression:"height"}})],1),i("div",{staticClass:"item"},[t._v("左边距")]),i("div",{staticClass:"item"},[i("el-input",{staticClass:"input",attrs:{size:"small"},on:{blur:function(e){return t.resize(1)}},model:{value:t.left,callback:function(e){t.left=e},expression:"left"}})],1),i("div",{staticClass:"item"},[t._v("上边距")]),i("div",{staticClass:"item"},[i("el-input",{staticClass:"input",attrs:{size:"small"},on:{blur:function(e){return t.resize(1)}},model:{value:t.top,callback:function(e){t.top=e},expression:"top"}})],1),i("div",{staticClass:"item"},[t._v("分屏样式")]),i("div",{staticClass:"item"},[i("el-input-number",{attrs:{step:1,size:"small",min:1},on:{change:function(e){return t.setType()}},model:{value:t.ShowType,callback:function(e){t.ShowType=e},expression:"ShowType"}})],1),t.StartSecond?i("el-button",{attrs:{size:"small"},on:{click:t.CloseSecondPlayer}},[t._v(" 关闭多进程播放器 ")]):i("el-button",{attrs:{size:"small"},on:{click:t.openSecondPlayer}},[t._v(" 启动多进程播放器 ")])],1),i("div",{staticClass:"tool"},[i("div",{staticClass:"item"},[t._v("子窗口")]),i("div",{staticClass:"item"},[i("el-input-number",{attrs:{step:1,size:"small",min:1},on:{change:function(e){return t.SetSelWnd()}},model:{value:t.win,callback:function(e){t.win=e},expression:"win"}})],1),i("div",{staticClass:"item"},[i("el-button",{attrs:{size:"small"},on:{click:t.getCapture}},[t._v("抓图")])],1),i("el-button",{attrs:{size:"small"},on:{click:t.watermask}},[t._v("设置水印")]),i("el-button",{attrs:{size:"small"},on:{click:t.RecordToFile}},[t.isRecordFile?i("span",[t._v("停止录像")]):i("span",[t._v("本地录像")])]),i("div",{staticClass:"item",staticStyle:{"margin-left":"10px"}},[i("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(e){return t.NextFrame()}}},[t._v("下一帧")])],1),i("div",{staticClass:"item"},[i("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(e){return t.PlayPause()}}},[t._v("暂停播放")])],1),i("div",{staticClass:"item"},[i("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(e){return t.PlayContinue()}}},[t._v("继续播放")])],1),i("div",{staticClass:"item"},[i("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(e){return t.PlaySpeed()}}},[t._v("加速播放")])],1),i("div",{staticClass:"item"},[i("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(e){return t.PlayMute()}}},[t._v("播放静音")])],1),i("div",{staticClass:"item"},[i("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(e){return t.PlayFullScreen()}}},[t._v("全屏播放")])],1)],1),i("div",{ref:"player",staticClass:"video-container"},[t._v(" 播放器区域 ")]),i("div",{staticClass:"urlbox"},[i("div",{staticClass:"item"},[t._v("视频地址")]),i("div",{staticClass:"item input"},[i("el-input",{attrs:{placeholder:"这里演示动态切换播放源",size:"small"},model:{value:t.newrtsp,callback:function(e){t.newrtsp=e},expression:"newrtsp"}})],1),i("div",{staticClass:"item"},[t._v("旋转")]),i("div",{staticClass:"item"},[i("el-select",{staticStyle:{width:"100PX"},attrs:{size:"small",placeholder:"请选择"},model:{value:t.Transform,callback:function(e){t.Transform=e},expression:"Transform"}},[i("el-option",{attrs:{label:"none",value:"none"}}),i("el-option",{attrs:{label:"90",value:"90"}}),i("el-option",{attrs:{label:"180",value:"180"}}),i("el-option",{attrs:{label:"270",value:"270"}}),i("el-option",{attrs:{label:"hflip",value:"hflip"}}),i("el-option",{attrs:{label:"vflip",value:"vflip"}}),i("el-option",{attrs:{label:"transpose",value:"transpose"}}),i("el-option",{attrs:{label:"antitranspose",value:"antitranspose"}})],1)],1),i("div",{staticClass:"item",staticStyle:{"margin-left":"10px"}},[i("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(e){return t.changUrl()}}},[t._v("切换源播放")])],1)]),i("div",{staticClass:"urlbox"},[i("div",{staticClass:"item"},[t._v("叠加透明网页地址")]),i("div",{staticClass:"item input"},[i("el-input",{attrs:{placeholder:"这里演示叠加网页内容显示",size:"small"},model:{value:t.newfloatweb,callback:function(e){t.newfloatweb=e},expression:"newfloatweb"}})],1),i("div",{staticClass:"item",staticStyle:{"margin-left":"10px"}},[i("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(e){return t.FloatWebInfo()}}},[t._v("叠加显示")])],1)]),i("div",{staticClass:"tool"},[i("div",{staticClass:"item"},[t._v("字幕")]),i("div",{staticClass:"item",staticStyle:{flex:"1"}},[i("el-input",{attrs:{size:"small",placeholder:"请输入内容"},model:{value:t.danmu.text,callback:function(e){t.$set(t.danmu,"text",e)},expression:"danmu.text"}})],1),i("div",{staticClass:"item"},[i("el-select",{staticStyle:{width:"100PX"},attrs:{size:"small",placeholder:"请选择"},model:{value:t.danmu.position,callback:function(e){t.$set(t.danmu,"position",e)},expression:"danmu.position"}},[i("el-option",{attrs:{label:"顶部",value:"TOP"}}),i("el-option",{attrs:{label:"底部",value:"BOTTOM"}})],1)],1),i("div",{staticClass:"item"},[t._v("位置（x）")]),i("div",{staticClass:"item"},[i("el-input",{staticClass:"input",attrs:{size:"small"},model:{value:t.danmu.x,callback:function(e){t.$set(t.danmu,"x",e)},expression:"danmu.x"}})],1),i("div",{staticClass:"item"},[t._v("位置（y）")]),i("div",{staticClass:"item"},[i("el-input",{staticClass:"input",attrs:{size:"small"},model:{value:t.danmu.y,callback:function(e){t.$set(t.danmu,"y",e)},expression:"danmu.y"}})],1),i("div",{staticClass:"item"},[t._v("透明度")]),i("div",{staticClass:"item"},[i("el-input",{staticClass:"input",attrs:{size:"small"},model:{value:t.danmu.opacity,callback:function(e){t.$set(t.danmu,"opacity",e)},expression:"danmu.opacity"}})],1),i("div",{staticClass:"item"},[t._v("大小")]),i("div",{staticClass:"item"},[i("el-input",{staticClass:"input",attrs:{size:"small"},model:{value:t.danmu.size,callback:function(e){t.$set(t.danmu,"size",e)},expression:"danmu.size"}})],1),i("div",{staticClass:"item"},[i("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(e){return t.setText()}}},[t._v("设置")])],1)]),i("div",{staticClass:"tool"},[i("div",{staticClass:"item"},[t._v("多源播放JSON")]),i("el-input",{attrs:{size:"small"},model:{value:t.WebCfg2,callback:function(e){t.WebCfg2=e},expression:"WebCfg2"}}),i("div",{staticClass:"item"},[i("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(e){return t.RePlayFirst()}}},[t._v("重新启动播放")])],1)],1),i("div",{staticClass:"tool"},[i("div",{staticClass:"item",staticStyle:{"margin-left":"10px"}},[i("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(e){return t.StopAllPlay()}}},[t._v("停止所有播放")])],1),i("div",{staticClass:"item",staticStyle:{"margin-left":"10px"}},[i("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(e){return t.CloseAllPlayer()}}},[t._v("关闭所有播放器")])],1),i("div",{staticClass:"item"},[t._v("最新版本号")]),i("div",{staticClass:"item"},[i("el-input",{attrs:{size:"small"},model:{value:t.version,callback:function(e){t.version=e},expression:"version"}})],1),i("el-button",{attrs:{size:"small",type:"primary"},on:{click:t.CheckUpdate}},[t._v("校验升级")])],1),i("el-input",{staticClass:"DebugLog",attrs:{type:"textarea",rows:5,placeholder:"调试日志"},model:{value:t.DebugLog,callback:function(e){t.DebugLog=e},expression:"DebugLog"}})],1)},n=[];i("c975"),i("a15b"),i("a434"),i("fb6a");function o(t,e){var i=location.protocol;return i.toUpperCase().indexOf("HTTPS")>-1?1==e?"wss://wrl.zorrosoft.com:"+t+"?sid="+a(5).toLocaleString()+"&flag=1&cid=zorrosoft&tk=8C4560272C8A38C32EF6102CAB6B4D886504F06C63202A316B3FD88381FC5491704DA444156B9F6FDA313843E412F1E1DC414A7899399F14D76688090FC7DCE11DA121CB2B0E819B2B7080DB9CF09D4D66192C5893ABE182DA38DF8A02EFAACB304BF9A242ADEBFAA09FC0304918895DE3B56E30A17AA8D92E3D61C1AC2453E6C1C637C3E260FE9A445EC858BADEB9312A43DD99323EF5D63414B9BC7D3F4004C7E109ADD5A6289ADAB004A2A544D312BB84E467DAC4C9449418F3FCCC9529049DCFD562B77EF2CE429B242C23975E6EA922E0564B6507177187E92F254EC2678A795B5D2EC92F818A7364FB7CA3E553D4F94119F868261E5A0A8E7EBE841CF7":"wss://wrl.zorrosoft.com:"+t+"?sid="+a(5).toLocaleString()+"&flag=1":1==e?"ws://127.0.0.1:"+t+"?sid="+a(5).toLocaleString()+"?flag=1&cid=zorrosoft&tk=8C4560272C8A38C32EF6102CAB6B4D886504F06C63202A316B3FD88381FC5491704DA444156B9F6FDA313843E412F1E1DC414A7899399F14D76688090FC7DCE11DA121CB2B0E819B2B7080DB9CF09D4D66192C5893ABE182DA38DF8A02EFAACB304BF9A242ADEBFAA09FC0304918895DE3B56E30A17AA8D92E3D61C1AC2453E6C1C637C3E260FE9A445EC858BADEB9312A43DD99323EF5D63414B9BC7D3F4004C7E109ADD5A6289ADAB004A2A544D312BB84E467DAC4C9449418F3FCCC9529049DCFD562B77EF2CE429B242C23975E6EA922E0564B6507177187E92F254EC2678A795B5D2EC92F818A7364FB7CA3E553D4F94119F868261E5A0A8E7EBE841CF7":"ws://127.0.0.1:"+t+"?sid="+a(5).toLocaleString()+"&flag=1"}function a(t){return("000000"+Math.floor(999999*Math.random())).slice(-6)}var r=o;i("99af");function l(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}function d(t,e,i){return e&&c(t.prototype,e),i&&c(t,i),t}var h=function(){function t(e,i){l(this,t),this.instance=null,this.token=null,this.isConnected=!1,this.url=e,this.options=i||this.defaultOptions(),this.options&&(this.reconnectEnabled=i.reconnectEnabled||!1,this.reconnectEnabled&&(this.reconnectInterval=i.reconnectInterval)),this.onOpen=null,this.onMessage=null,this.onClose=null,this.onError=null}return d(t,[{key:"defaultOptions",value:function(){return{reconnectEnabled:!1,reconnectInterval:0,token:null}}},{key:"connect",value:function(){var t=this,e=this.token||null,i=this.url;null!==e&&(i+="?token=".concat(e)),this.instance=new WebSocket(i),this.instance.onopen=function(){t.isConnected=!0,console.log("链接成功"),"function"===typeof t.onOpen&&t.onOpen()},this.instance.onmessage=function(e){"function"===typeof t.onMessage&&t.onMessage(e)},this.instance.onclose=function(e){t.isConnected=!1,"function"===typeof t.onClose&&t.onClose(e),t.reconnectEnabled&&t.reconnect()},this.instance.onerror=function(e){"function"===typeof t.onError&&t.onError(e)}}},{key:"disconnect",value:function(){try{this.instance.close()}catch(t){console.warn("".concat(t," ").concat(this.instance))}delete this.instance}},{key:"reconnect",value:function(){var t=this;try{this.instance.close()}catch(e){console.warn("".concat(e," ").concat(this.instance))}delete this.instance,setTimeout((function(){t.connect()}),this.reconnectInterval)}},{key:"sendObj",value:function(t){var e=this;this.instance.readyState===this.instance.OPEN?this.instance.send(JSON.stringify(t)):(this.instance.readyState,this.instance.CONNECTING,setTimeout((function(){e.sendObj(t)}),1e3))}},{key:"removeListeners",value:function(){this.onOpen=null,this.onMessage=null,this.onClose=null,this.onError=null}}]),t}(),u={components:{},data:function(){return{aid:0,aid2:0,curID:0,rid:10,run1:1,run2:2,win:1,newrtsp:"http://devimages.apple.com.edgekey.net/streaming/examples/bipbop_4x3/gear2/prog_index.m3u8",newfloatweb:"https://output.jsbin.com/dopavun",StartSecond:!1,ReStartPlay:0,width:960,height:320,left:0,top:0,IframeX:-10,IframeY:0,ShowType:1,WebCfg:'[{"ID":2,"Uri":"https://vjs.zencdn.net/v/oceans.mp4"},{"ID":1,"Uri":"https://media.w3.org/2010/05/sintel/trailer.mp4","Option":":rtsp-tcp"},{"ID":4,"Uri":"http://www.zorrosoft.com/Files/PluginOKBrowserApplet.mp4","Option":":file-caching=300"},{"ID":3,"Uri":"http://www.zorrosoft.com/Files/h265.mkv","Option":":network-caching=500"}]',WebCfg2:'[{"ID":1,"Uri":"https://vjs.zencdn.net/v/oceans.mp4"},{"ID":2,"Uri":"https://media.w3.org/2010/05/sintel/trailer.mp4","Option":":rtsp-tcp"},{"ID":3,"Uri":"http://www.zorrosoft.com/Files/PluginOKBrowserApplet.mp4","Option":":file-caching=300"},{"ID":4,"Uri":"rtmp://mobliestream.c3tv.com:554/live/goodtv.sdp","Option":":network-caching=500"}]',result:[],socket:[],isRecordFile:!1,isConnService:!1,isDisConnect:!1,RecordFilePath:"C:/Zorro/test.mp4",Transform:"none",recordid:0,danmu:{text:"您好呀，O(∩_∩)O哈哈~",position:"TOP",color:"#ff0000",opacity:128,size:50,x:0,y:0},version:"2.2.16.11"}},computed:{DebugLog:function(){return this.result.join("\n")}},mounted:function(){this.init();var t=this;window.onresize=function(){t.pageResize()}},destroyed:function(){window.onresize=null},beforeDestroy:function(){this.close()},methods:{init:function(){document.addEventListener?document.addEventListener("visibilitychange",this.handleVisiable,!1):document.attachEvent("visibilitychange",this.handleVisiable,!1),window.addEventListener("scroll",this.windowScroll,!0),window.addEventListener("unload",this.unloadHandler,!1),this.getPlayerPosition(),this.StartVlcPlayer()},windowScroll:function(){var t=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;this.aid>0&&this.appScroll(0,this.aid,t),this.aid2>0&&this.appScroll(2,this.aid2,t)},appScroll:function(t,e,i){if(e){this.rid++;var s={req:"Wrl_AppletScroll",rid:this.rid,para:{ID:e,NoLog:1,Code:2,Left:0,Top:Math.round(i)}};this.socket[t].sendObj(s)}},getPlayerPosition:function(){var t=0,e=0,i=this.hasHorizontalScrollbar(),s=this.hasVerticalScrollbar();i&&(e=void 0!=window.pageXOffset?Math.round(window.pageXOffset):Math.round(document.documentElement.scrollLeft||document.body.scrollLeft)),s&&(t=void 0!=window.pageYOffset?Math.round(window.pageYOffset):Math.round(document.documentElement.scrollTop||document.body.scrollTop));var n=this.$refs.player.getBoundingClientRect();this.left=Math.round(n.left)+e,this.top=Math.round(n.top)+t},handleVisiable:function(t){"hidden"==t.target.visibilityState?this.hideApp(4):"visible"==t.target.visibilityState&&this.showApp()},hasVerticalScrollbar:function(){return document.documentElement.clientHeight?document.body.scrollHeight>document.documentElement.clientHeight:document.body.scrollHeight>window.innerHeight},hasHorizontalScrollbar:function(){return document.documentElement.clientWidth?document.body.scrollWidth>document.documentElement.clientWidth:document.body.scrollWidth>window.innerWidth},pageResize:function(){this.aid>0&&this.SendScrollInfo(0,this.aid),this.aid2>0&&this.SendScrollInfo(2,this.aid2)},SendScrollInfo:function(t,e){var i=0,s=0,n=0,o=this.hasHorizontalScrollbar(),a=this.hasVerticalScrollbar();o&&(s=void 0!=window.pageXOffset?Math.round(window.pageXOffset):Math.round(document.documentElement.scrollLeft||document.body.scrollLeft)),a&&(i=void 0!=window.pageYOffset?Math.round(window.pageYOffset):Math.round(document.documentElement.scrollTop||document.body.scrollTop)),o&&(n=1),a&&(n+=2),this.rid++;var r={req:"Wrl_ScrollBar",rid:this.rid,para:{ID:e,BarW:0,BarH:0,Code:n,Left:s,Top:i}};console.log(r),this.socket[t].sendObj(r)},unloadHandler:function(){this.close()},close:function(){this.CloseAllPlayer(),this.isDisConnect=!0,this.socket[0].disconnect(),this.socket.pop(),this.isDisConnect=!1,document.addEventListener?document.removeEventListener("visibilitychange",this.handleVisiable,!1):document.detachEvent("visibilitychange",this.handleVisiable,!1),window.removeEventListener("scroll",this.windowScroll,!0),window.removeEventListener("unload",this.unloadHandler,!1)},StartVlcPlayer:function(){this.isConnService=!0;var t=location.protocol;t.toUpperCase().indexOf("HTTPS")>-1?this.openWebsocket(453,0):this.openWebsocket(83,0);var e={req:"Wrl_VLCWebPlayer",rid:this.run1,para:{Type:"0",Title:"VLC网页播放器",Version:0,Flag:578,Left:this.left,Top:this.top,Width:this.width,Height:this.height,IframeX:this.IframeX,IframeY:this.IframeY,BarW:0,BarH:0,ScrollTop:0,Web:[{ID:1,Uri:"http%3A%2F%2Fwww.zorrosoft.com%2FFiles%2FPluginOKBrowserApplet.mp4",Option:":rtsp-tcp :network-caching=500"}],ShowType:this.ShowType}};this.socket[0].sendObj(e)},openSecondPlayer:function(){if(this.aid){this.width=475,this.resize(0),this.isConnService=!0;var t=location.protocol;t.toUpperCase().indexOf("HTTPS")>-1?this.openWebsocket(453,0):this.openWebsocket(83,0);var e={req:"Wrl_VLCWebPlayer",rid:this.run2,para:{Type:"0",Title:"VLC Web Player",Version:1,Flag:578,Left:this.left+485,Top:this.top,Width:this.width,Height:this.height,IframeX:-10,IframeY:0,BarW:0,BarH:0,ScrollTop:0,Web:JSON.parse(this.WebCfg),ShowType:4}};this.socket[2].sendObj(e),this.StartSecond=!0}else this.$message.success("请先启动第一个播放器")},CloseSecondPlayer:function(){if(this.StartSecond){this.isDisConnect=!0,this.socket[3].disconnect(),this.socket[2].disconnect(),this.socket.pop(),this.socket.pop(),this.isDisConnect=!1,this.StartSecond=!1,this.aid2=0,this.width=960,this.height=320;var t=this.$refs.player.getBoundingClientRect();this.left=t.left,this.top=t.top,this.resize(0)}},CloseFirstPlayer:function(){if(this.aid>0){this.rid++;var t={req:"Wrl_AppletControl",rid:this.rid,para:{ID:this.aid,Code:1}};this.isDisConnect=!0,this.socket[1].disconnect(),this.socket[0].sendObj(t),this.aid=0,this.ReStartPlay=0,this.StartSecond?this.socket.splice(1,1):this.socket.pop(),this.isDisConnect=!1}},RePlayFirst:function(){this.CloseFirstPlayer(),this.ReStartPlay=1,this.ShowType=4;var t={req:"Wrl_VLCWebPlayer",rid:this.run1,para:{Type:"0",Title:"VLC网页播放器",Version:0,Flag:578,Left:this.left,Top:this.top,Width:this.width,Height:this.height,IframeX:this.IframeX,IframeY:this.IframeY,BarW:0,BarH:0,ScrollTop:0,Web:JSON.parse(this.WebCfg2),ShowType:this.ShowType}};this.socket[0].sendObj(t)},CloseAllPlayer:function(){this.CloseSecondPlayer(),this.CloseFirstPlayer()},StopSecondPlayer:function(){if(this.StartSecond){this.rid++;var t={req:"VLC_Control",rid:this.rid,para:[{ID:1,Type:"Stop"},{ID:2,Type:"Stop"},{ID:3,Type:"Stop"},{ID:4,Type:"Stop"}]};console.log(t),this.socket[3].sendObj(t)}},StopFirstPlayer:function(){if(this.aid>0){this.rid++;var t={};t=this.ReStartPlay?{req:"VLC_Control",rid:this.rid,para:[{ID:1,Type:"Stop"},{ID:2,Type:"Stop"},{ID:3,Type:"Stop"},{ID:4,Type:"Stop"}]}:{req:"VLC_Control",rid:this.rid,para:[]},console.log(t),this.socket[1].sendObj(t)}},StopAllPlay:function(){this.StopSecondPlayer(),this.StopFirstPlayer()},openWebsocket:function(t,e){var i=this,s=r(t,e),n=new h(s,{reconnectEnabled:!1});n.connect(),1==this.ReStartPlay&&this.StartSecond?(this.ReStartPlay=2,this.socket.splice(1,0,n)):(1==this.ReStartPlay&&(this.ReStartPlay=2),this.socket.push(n)),n.onMessage=function(t){console.log(t.data);var e=JSON.parse(t.data);if("Wrl_AppletOK"==e.event&&(e.rid==i.run1&&(i.aid=e.aid,i.SendScrollInfo(0,i.aid),console.log(i.aid)),e.rid==i.run2&&(i.aid2=e.aid,i.SendScrollInfo(2,i.aid2),console.log(i.aid2))),"Wrl_Listen"==e.event){var s=i;setTimeout((function(){s.isConnService=!1,s.openWebsocket(e.data.port,0)}),200),e.aid>0&&(i.curID=e.aid)}"VLC_Selected"==e.event&&(i.win=e.ID,e.aid>0&&(i.curID=e.aid)),"VLC_MouseDown"==e.event&&e.aid>0&&(i.curID=e.aid),"VLC_StopRecord"==e.event&&(i.isRecordFile=!1,i.recordid=0,i.$message.success("定时录像成功\n"+e.data.File)),"Wrl_SelectFile"==e.event&&(e.data.length?i.BeginRecordFile(e.data[0].File):i.BeginRecordFile(i.RecordFilePath)),9e4==e.rid&&(i.recordid=e.data.PID),90001==e.rid&&(i.recordid=0,i.$message.success("录像成功\n"+e.data.File)),90002==e.rid&&i.$message.success("截图成功\n"+e.data.Img[0].File),e.err&&i.$message.success(e.err),"Wrl_Version"==e.req&&(1==e.data.Update?(i.hideApp(32),i.$confirm("有新版本发布, 是否马上升级?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){i.CloseAllPlayer(),i.SendUpdateJson()})).catch((function(){i.showApp()}))):i.$message.success("已经是最新版本！")),i.result.push(t.data)},n.onClose=function(t){console.log(t)},n.onError=function(t){i.ReStartPlay||!i.isConnService||i.isDisConnect||i.$confirm("PageHiPlayer—VLC低延迟网页播放器 服务端口连接失败，可能是尚未安装，是否马上下载安装？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){window.open("http://local.zorrosoft.com/Files/RtspWebPlayerIns.exe")})).catch((function(){}))}},resize:function(t){if(this.aid2>0&&this.aid2==this.curID)if(this.rid++,t){var e={req:"Wrl_AppletResize",rid:this.rid,para:{ID:this.aid2,X:this.left,Y:this.top,Width:this.width,Height:this.height}};this.socket[2].sendObj(e)}else{var i={req:"Wrl_AppletResize",rid:this.rid,para:{ID:this.aid2,Width:this.width,Height:this.height}};this.socket[2].sendObj(i)}else if(this.aid>0)if(this.rid++,t){var s={req:"Wrl_AppletResize",rid:this.rid,para:{ID:this.aid,X:this.left,Y:this.top,Width:this.width,Height:this.height}};this.socket[0].sendObj(s)}else{var n={req:"Wrl_AppletResize",rid:this.rid,para:{ID:this.aid,Width:this.width,Height:this.height}};this.socket[0].sendObj(n)}},getCapture:function(){var t={req:"VLC_VideoSnapshot",rid:90002,para:[{ID:this.win,Type:4,Count:1,Delay:1e3,Interval:200,PathType:1}]};this.aid2>0&&this.aid2==this.curID?this.socket[3].sendObj(t):this.socket[1].sendObj(t)},setText:function(){this.rid++;var t={req:"VLC_MarqueePut",rid:this.rid,para:[{ID:this.win,Text:this.danmu.text,Position:this.danmu.position,Timeout:0,Color:this.danmu.color,Opacity:this.danmu.opacity,Refresh:1,Size:this.danmu.size,X:this.danmu.x,Y:this.danmu.y}]};this.aid2>0&&this.aid2==this.curID?this.socket[3].sendObj(t):this.socket[1].sendObj(t)},setType:function(){this.rid++;var t={req:"VLC_ChangePlay",rid:this.rid,para:{ShowType:this.ShowType}};this.aid2>0&&this.aid2==this.curID?this.socket[3].sendObj(t):this.socket[1].sendObj(t)},NextFrame:function(){this.rid++;var t={req:"VLC_NextFrame",rid:this.rid,para:[{ID:this.win,Count:1}]};this.aid2>0&&this.aid2==this.curID?this.socket[3].sendObj(t):this.socket[1].sendObj(t)},PlayPause:function(){this.rid++;var t={req:"VLC_Control",rid:this.rid,para:[{ID:this.win,Type:"Pause"}]};this.aid2>0&&this.aid2==this.curID?this.socket[3].sendObj(t):this.socket[1].sendObj(t)},PlayContinue:function(){this.rid++;var t={req:"VLC_Control",rid:this.rid,para:[{ID:this.win,Type:"Play"}]};this.aid2>0&&this.aid2==this.curID?this.socket[3].sendObj(t):this.socket[1].sendObj(t)},PlayMute:function(){this.rid++;var t={req:"VLC_AudioPut",rid:this.rid,para:[{ID:this.win,Mute:1}]};this.aid2>0&&this.aid2==this.curID?this.socket[3].sendObj(t):this.socket[1].sendObj(t)},PlaySpeed:function(){this.rid++;var t={req:"VLC_PutInputInfo",rid:this.rid,para:[{ID:this.win,Rate:2}]};this.aid2>0&&this.aid2==this.curID?this.socket[3].sendObj(t):this.socket[1].sendObj(t)},PlayFullScreen:function(){this.rid++;var t={req:"VLC_VideoToggleFullscreen",rid:this.rid,para:[{ID:this.win}]};this.aid2>0&&this.aid2==this.curID?this.socket[3].sendObj(t):this.socket[1].sendObj(t)},SetSelWnd:function(){this.rid++;var t={req:"VLC_SetSelect",rid:this.rid,para:{ID:this.win}};this.aid2>0&&this.aid2==this.curID?(this.result.push("执行播放器实例 "+this.curID),this.socket[3].sendObj(t)):this.socket[1].sendObj(t)},AppletSnap:function(){this.rid++;var t={req:"Wrl_AppletSnap",rid:this.rid,para:{ID:this.curID,File:".jpg",Base64:1}};this.aid2>0&&this.aid2==this.curID?this.socket[2].sendObj(t):this.socket[0].sendObj(t)},FullApplet:function(){this.rid++;var t={req:"Wrl_AppletControl",rid:this.rid,para:{ID:this.curID,Code:2}};this.aid2>0&&this.aid2==this.curID?this.socket[2].sendObj(t):this.socket[0].sendObj(t)},RecordToFile:function(){if(this.isRecordFile){var t={req:"VLC_StopRecord",rid:90001,para:{PID:this.recordid}};this.isRecordFile=!1,this.aid2>0&&this.aid2==this.curID?this.socket[3].sendObj(t):this.socket[1].sendObj(t)}else{this.rid++;var e={req:"Wrl_SelectFile",rid:this.rid,para:{Type:1,Title:"请设置录像文件存放位置",Ext:"录像文件(*.mp4)\r*.mp4"}};this.aid2>0&&this.aid2==this.curID?this.socket[2].sendObj(e):this.socket[0].sendObj(e)}},BeginRecordFile:function(t){var e={req:"VLC_RecordFile",rid:9e4,para:{File:encodeURIComponent(t),Second:30}};this.isRecordFile=!0,this.aid2>0&&this.aid2==this.curID?this.socket[3].sendObj(e):this.socket[1].sendObj(e)},watermask:function(){this.rid++;var t={req:"VLC_PutLogoShow",rid:this.rid,para:[{ID:this.win,File:"VLC.png",Delay:20,Repeat:-1,Opacity:128,X:100,Y:100}]};this.aid2>0&&this.aid2==this.curID?this.socket[3].sendObj(t):this.socket[1].sendObj(t)},changUrl:function(){this.rid++;var t={req:"VLC_ChangePlay",rid:this.rid,para:{ForceDestroy:0,Play:[{ID:this.win,Uri:encodeURIComponent(this.newrtsp),Name:"BrowserApplet1",Option:":rtsp-tcp Transform=".concat(this.Transform)}]}};this.aid2>0&&this.aid2==this.curID?this.socket[3].sendObj(t):this.socket[1].sendObj(t)},FloatWebInfo:function(){this.rid++;var t={req:"VLC_FloatWebInfo",rid:this.rid,para:[{ID:this.win,Url:encodeURIComponent(this.newfloatweb),Rect:{P:4,W:300,H:300}}]};this.aid2>0&&this.aid2==this.curID?this.socket[3].sendObj(t):this.socket[1].sendObj(t)},showApp:function(){if(this.aid>0){this.rid++;var t={req:"Wrl_AppletControl",rid:this.rid,para:{ID:this.aid,Code:8}};this.socket[0].sendObj(t)}if(this.aid2>0){this.rid++;var e={req:"Wrl_AppletControl",rid:this.rid,para:{ID:this.aid2,Code:8}};this.socket[2].sendObj(e)}},hideApp:function(t){if(this.aid>0){this.rid++;var e={req:"Wrl_AppletControl",rid:this.rid,para:{ID:this.aid,Code:t}};this.socket[0].sendObj(e)}if(this.aid2>0){this.rid++;var i={req:"Wrl_AppletControl",rid:this.rid,para:{ID:this.aid2,Code:t}};this.socket[2].sendObj(i)}},CheckUpdate:function(){this.rid++;var t={req:"Wrl_Version",rid:this.rid,para:{Version:this.version}};this.socket[0].sendObj(t)},SendUpdateJson:function(){this.rid++;var t={req:"Wrl_Update",rid:this.rid,para:{Name:"PageHiPlayer—VLC低延迟网页播放器升级包",Date:"2025-01-03",Desc:"中间件高级版兼容支持豆包桌面版，兼容法文系统，解决安装后系统服务可能无法正常启动问题，解决多线程下载可能卡住问题...",DownAddr:"http://local.zorrosoft.com/Files/Update/RTSP_Update.pid",Open:"http://local.zorrosoft.com/VLC",MD5:"532C3220AC03DDD7E3A16BF0D1CCF242",Version:"2.2.16.11",Size:43515904,HideIns:0,Cookie:"",Auth:"",TK:"52854C99916233110691EE695F052AAE85C061CAE7717CAB5604C003A96F13716D268738E130FD0DFE98872EF1FADC1B3B86F7FE2943D7AAC5828C8A698E08E40F233F5E786E7CFE398E58CE640740DBF5A01847FF45C4D4F62D7BF7531AB7EAEF2EEA59EEC92B5B842E0C16C0C88065B80A7D0445BDA88DCE4CC61383FC0B71769577CBB8D984DAF26B2053380B7909C875822D0097EBE6B2AB1DF7C9A04DA5F88F2DE4DB2373E9802479DCC1EAE47A9E3B9CCAAD7059881E001102DAB42AF39F7775456EA8C0939FB05E7E14866203A9035402E7A2604F827A77550679DD336D79D8C0F6468BD5E2BDEBA0286C88B31314AB9995441555A7D944117B7C487F"}};this.socket[0].sendObj(t)}}},p=u,f=(i("2205"),i("2877")),C=Object(f["a"])(p,s,n,!1,null,"3cc4f4af",null);e["default"]=C.exports},8418:function(t,e,i){"use strict";var s=i("c04e"),n=i("9bf2"),o=i("5c6c");t.exports=function(t,e,i){var a=s(e);a in t?n.f(t,a,o(0,i)):t[a]=i}},"99af":function(t,e,i){"use strict";var s=i("23e7"),n=i("d039"),o=i("e8b5"),a=i("861d"),r=i("7b0b"),l=i("50c4"),c=i("8418"),d=i("65f0"),h=i("1dde"),u=i("b622"),p=i("2d00"),f=u("isConcatSpreadable"),C=9007199254740991,m="Maximum allowed index exceeded",v=p>=51||!n((function(){var t=[];return t[f]=!1,t.concat()[0]!==t})),b=h("concat"),y=function(t){if(!a(t))return!1;var e=t[f];return void 0!==e?!!e:o(t)},D=!v||!b;s({target:"Array",proto:!0,forced:D},{concat:function(t){var e,i,s,n,o,a=r(this),h=d(a,0),u=0;for(e=-1,s=arguments.length;e<s;e++)if(o=-1===e?a:arguments[e],y(o)){if(n=l(o.length),u+n>C)throw TypeError(m);for(i=0;i<n;i++,u++)i in o&&c(h,u,o[i])}else{if(u>=C)throw TypeError(m);c(h,u++,o)}return h.length=u,h}})},a15b:function(t,e,i){"use strict";var s=i("23e7"),n=i("44ad"),o=i("fc6a"),a=i("a640"),r=[].join,l=n!=Object,c=a("join",",");s({target:"Array",proto:!0,forced:l||!c},{join:function(t){return r.call(o(this),void 0===t?",":t)}})},a434:function(t,e,i){"use strict";var s=i("23e7"),n=i("23cb"),o=i("a691"),a=i("50c4"),r=i("7b0b"),l=i("65f0"),c=i("8418"),d=i("1dde"),h=i("ae40"),u=d("splice"),p=h("splice",{ACCESSORS:!0,0:0,1:2}),f=Math.max,C=Math.min,m=9007199254740991,v="Maximum allowed length exceeded";s({target:"Array",proto:!0,forced:!u||!p},{splice:function(t,e){var i,s,d,h,u,p,b=r(this),y=a(b.length),D=n(t,y),g=arguments.length;if(0===g?i=s=0:1===g?(i=0,s=y-D):(i=g-2,s=C(f(o(e),0),y-D)),y+i-s>m)throw TypeError(v);for(d=l(b,s),h=0;h<s;h++)u=D+h,u in b&&c(d,h,b[u]);if(d.length=s,i<s){for(h=D;h<y-s;h++)u=h+s,p=h+i,u in b?b[p]=b[u]:delete b[p];for(h=y;h>y-s+i;h--)delete b[h-1]}else if(i>s)for(h=y-s;h>D;h--)u=h+s-1,p=h+i-1,u in b?b[p]=b[u]:delete b[p];for(h=0;h<i;h++)b[h+D]=arguments[h+2];return b.length=y-s+i,d}})},c975:function(t,e,i){"use strict";var s=i("23e7"),n=i("4d64").indexOf,o=i("a640"),a=i("ae40"),r=[].indexOf,l=!!r&&1/[1].indexOf(1,-0)<0,c=o("indexOf"),d=a("indexOf",{ACCESSORS:!0,1:0});s({target:"Array",proto:!0,forced:l||!c||!d},{indexOf:function(t){return l?r.apply(this,arguments)||0:n(this,t,arguments.length>1?arguments[1]:void 0)}})},fb6a:function(t,e,i){"use strict";var s=i("23e7"),n=i("861d"),o=i("e8b5"),a=i("23cb"),r=i("50c4"),l=i("fc6a"),c=i("8418"),d=i("b622"),h=i("1dde"),u=i("ae40"),p=h("slice"),f=u("slice",{ACCESSORS:!0,0:0,1:2}),C=d("species"),m=[].slice,v=Math.max;s({target:"Array",proto:!0,forced:!p||!f},{slice:function(t,e){var i,s,d,h=l(this),u=r(h.length),p=a(t,u),f=a(void 0===e?u:e,u);if(o(h)&&(i=h.constructor,"function"!=typeof i||i!==Array&&!o(i.prototype)?n(i)&&(i=i[C],null===i&&(i=void 0)):i=void 0,i===Array||void 0===i))return m.call(h,p,f);for(s=new(void 0===i?Array:i)(v(f-p,0)),d=0;p<f;p++,d++)p in h&&c(s,d,h[p]);return s.length=d,s}})}}]);