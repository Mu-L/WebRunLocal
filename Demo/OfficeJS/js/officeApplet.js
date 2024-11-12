function officeApplet(ws = null, aid = 0) {
    this.ws = ws
    this.aid = aid
    this.openType = 1  // 加载类型 1启动微软Word 2启动微软Excel 3启动微软PPT 11启动金山文字 12启动金山表格 13启动金山演示 可通过请求Wrl_OfficeInfo获得需要设置的值
    this.IframeX = -10 //根据情况自己修改把
    this.IframeY = 0  //根据情况自己修改把
}

officeApplet.rid = 1000; //每次请求都要传递一个rid 参数 这里弄成静态变量 每次累加一次就行
//维护一个数组 用来保存Applet实例的aid
officeApplet.aidArr = [
    {aid: 0, rid: 2, ws1: null, ws2: null},
    {aid: 0, rid: 3, ws1: null, ws2: null},
    {aid: 0, rid: 4, ws1: null, ws2: null},
    {aid: 0, rid: 5, ws1: null, ws2: null},
];
/**
 * 让rid和aid和ws都映射起来
 * @param rid
 * @param ws
 * @param type=1或者type=2 根据文档来选择例如操作的是宽度 边距等 需要使用第一个ws
 */
officeApplet.setAidArr = function (rid = 0, aid = 0, type = 1, ws = null) {
    officeApplet.aidArr.forEach((item, index) => {
        if (item.rid == rid) {
            officeApplet.aidArr[index].aid = aid
            if (type == 1) {
                officeApplet.aidArr[index].ws1 = ws
            }
            if (type == 2) {
                officeApplet.aidArr[index].ws2 = ws
            }
            if (type == 0) {
                officeApplet.aidArr[index].ws2 = null
                officeApplet.aidArr[index].ws1 = null
            }
        }
    })
}

officeApplet.getAidArr = function (rid) {
    for (let i in officeApplet.aidArr) {
        if (officeApplet.aidArr[i].rid == rid) {
            return officeApplet.aidArr[i].aid
        }
    }
    return 0
}
/**
 * 根据操作的类型 来选择ws
 *
 * @param aid
 * @param type 根据文档来选择 例如操作的是宽度 边距等 需要使用第一个ws
 */
officeApplet.prototype.setWebsocket = function (aid, type = 1) {
    this.aid = aid
    for (let i in officeApplet.aidArr) {
        if (officeApplet.aidArr[i].aid == aid) {
            if (type == 1) {
                this.ws = officeApplet.aidArr[i].ws1
            } else {
                this.ws = officeApplet.aidArr[i].ws2
            }
        }
    }
}
/**
 * 启动一个办公网页组件
 * 可以和第二个合并成一个，根据自己的需求进行修改
 * @param rid
 * @param left
 * @param top
 * @param width
 * @param height
 * @param ServerOpenFile
 */
officeApplet.prototype.startFirst = function (rid, left, top, width, height, ServerOpenFile, edit,version=2) {
    //启动第一个办公网页组件，参数参考officeApplet-class.js中的startFirst
    let msg = {
        "req": "Wrl_OfficeApplet",
        "rid": rid,
        "para": {
            "Type": "0",
            "Title": "办公网页组件(Word)",
            "Version": version,//0使用OLE嵌入 1完整嵌入 2使用OLE嵌入，尽可能支持多文档操作
            "Flag": 578,
            "Left": left,
            "Top": top,
            "Width": width,
            "Height": height,
            "IframeX": this.IframeX,
            "IframeY": this.IframeY,
            "BarW": 0,
            "BarH": 0,
            "ScrollTop": 0,
            "Web": {"Edit": edit, "Hide": 0, "User": "test", "Cookie": "", "DataPath": "c:/OfficeDoc"},
            "Option": this.openType,
            "Open": encodeURIComponent(ServerOpenFile)
        }
    }
    this.ws.sendMessage(msg)
}

officeApplet.prototype.startSecond = function (rid, left, top, width, height, ServerOpenFile, edit) {
    //启动第二个办公网页组件，参数参考officeApplet-class.js中的startFirst
    let msg = {
        "req": "Wrl_OfficeApplet",
        "rid": rid,
        "para": {
            "Type": "0",
            "Title": "办公网页组件(Excel)",
            "Version": 0,
            "Flag": 578,
            "Left": left,
            "Top": top,
            "Width": width,
            "Height": height,
            "IframeX": this.IframeX,
            "IframeY": this.IframeY,
            "BarW": 0,
            "BarH": 0,
            "ScrollTop": 0,
            "Web": {"Edit": edit, "Hide": 0, "User": "zorro", "Cookie": ""},
            "Open": ServerOpenFile,
            "Option": this.openType
        }
    }
    this.ws.sendMessage(msg)
}

officeApplet.prototype.addMark = function () {
    // 请求插入书签
    officeApplet.rid++
    let msg = {
        "req": "Office_InsertMark",
        "rid": officeApplet.rid,
        "para": {"Name": "TestMark", "Content": "[InsertMark]", "Hidden": 0, "Sort": 0}
    }
    this.ws.sendMessage(msg)
}

officeApplet.prototype.markRePlace = function () {
    // 请求替换书签内容
    officeApplet.rid++// 增加请求序号
    let msg = {
        "req": "Office_PutMarkText",
        "rid": officeApplet.rid,
        "para": {
            "Marks": [{"Name": "Caption", "Text": "公文标题"}, {
                "Name": "TestMark",
                "Text": "TestMarkContent"
            }]
        }
    }
    this.ws.sendMessage(msg)
}

officeApplet.prototype.convertFirstPage = function () {
    // 转换文档中序号为Index页码内容成图片，先设置转换图片存放位置
    officeApplet.rid++ // 增加请求序号
    let msg = {
        "req": "Wrl_SelectFile",
        "rid": officeApplet.rid++,
        "para": {
            "Type": 1,
            "Title": "请设置图片保存位置",
            "Ext": "图片文件(*.jpg;*.png;*.gif;*.bmp;*.tiff)\r*.jpg;*.png;*.gif;*.bmp;*.tiff"
        }
    }
    this.ws.sendMessage(msg)
}

officeApplet.prototype.insertContent = function () {
    // 请求插入指定的文字或链接
    officeApplet.rid++ // 增加请求序号
    let msg = {
        "req": "Office_Insert",
        "rid": officeApplet.rid,
        "para": [{"Paragraph": 1},
            {"FontSize": "16", "FontName": "宋体", "Color": "0", "Bold": "8", "Text": "详情请访问成都佐罗软件官网："},
            {"Paragraph": 1},
            {"Address": "http://www.zorrosoft.com", "Display": "成都佐罗软件官网"}]
    }
    this.ws.sendMessage(msg)
}

officeApplet.prototype.saveFile = function () {
    // 请求保存文档
    officeApplet.rid++ // 增加请求序号
    let msg = {
        "req": "Office_Save",
        "rid": officeApplet.rid,
        "para": {}
    }
    this.ws.sendMessage(msg)
}

officeApplet.prototype.saveAsFile = function () {
    officeApplet.rid++ // 增加请求序号
    /// 先设置保存位置再另存
    let msg = {
        "req": "Wrl_SelectFile",
        "rid": officeApplet.rid,
        "para": {
            "Type": 1,
            "Title": "请设置另存文件位置",
            "Ext": "另存文件(*.doc;*.docx;*.pdf;*.html)\r*.doc;*.docx;*.pdf;*.html"
        }
    }
    this.ws.sendMessage(msg)
}

officeApplet.prototype.exportFile = function () {
    // 请求导出文档
    officeApplet.rid++ // 增加请求序号
    /// 先设置导出位置
    let msg = {
        "req": "Wrl_SelectFile",
        "rid": officeApplet.rid,
        "para": {
            "Type": 1,
            "Title": "请设置导出文件位置",
            "Ext": "导出文件(*.pdf)\r*.pdf"
        }
    }
    this.ws.sendMessage(msg)
}

officeApplet.prototype.insertImg = function () {
    // 请求当前光标位置插入图片 先让用户选择图片文件
    officeApplet.rid++ // 增加请求序号
    /// 先选择本地图片文件
    let msg = {
        "req": "Wrl_SelectFile",
        "rid": officeApplet.rid,
        "para": {
            "Type": 0,
            "Title": "请选择需要插入的图片",
            "Ext": "图片文件(*.jpg;*.png;*.gif;*.bmp;*.tiff)\r*.jpg;*.png;*.gif;*.bmp;*.tiff"
        }
    }
    this.ws.sendMessage(msg)
}

officeApplet.prototype.getFirstImg = function () {
    // 提取文档中页码序号Index的图片，先设置图片保存位置
    officeApplet.rid++ // 增加请求序号
    let msg = {
        "req": "Wrl_SelectFile",
        "rid": officeApplet.rid,
        "para": {
            "Type": 1,
            "Title": "请设置图片保存位置",
            "Ext": "图片文件(*.jpg;*.png;*.gif;*.bmp;*.tiff)\r*.jpg;*.png;*.gif;*.bmp;*.tiff"
        }
    }
    this.ws.sendMessage(msg)
}

officeApplet.prototype.printFile = function (url) {
    // 请求打印当前文档
    officeApplet.rid++ // 增加请求序号
    let msg = {
        "req": "Office_PrintOut",
        "rid": officeApplet.rid,
        "para": {
            "ImgFile": url,
            "Copies": 1
        }
    }
    this.ws.sendMessage(msg)
}

officeApplet.prototype.disableRevision = function () {
    // 关闭留痕，就是关闭修订模式
    officeApplet.rid++ // 增加请求序号
    let msg = {
        "req": "Office_PutTrackRevisions",
        "rid": officeApplet.rid,
        "para": {
            "TrackRevisions": 0
        }
    }
    this.ws.sendMessage(msg)
}

officeApplet.prototype.enableRevision = function () {
    // 请求留痕，就是修订模式
    officeApplet.rid++ // 增加请求序号
    let msg = {
        "req": "Office_PutTrackRevisions",
        "rid": officeApplet.rid,
        "para": {
            "TrackRevisions": 1
        }
    }
    this.ws.sendMessage(msg)
}

officeApplet.prototype.showRevision = function () {
    // 显示留痕信息，就是显示修订内容
    officeApplet.rid++ // 增加请求序号
    let msg = {
        "req": "Office_PutShowRevisions",
        "rid": officeApplet.rid,
        "para": {
            "ShowRevisions": 1
        }
    }
    this.ws.sendMessage(msg)
}

officeApplet.prototype.acceptRevision = function () {
    // 接受留痕，就是接受修订内容
    officeApplet.rid++ // 增加请求序号
    let msg = {
        "req": "Office_TrackRevisions",
        "rid": officeApplet.rid,
        "para": {
            "Type": 1
        }
    }
    this.ws.sendMessage(msg)
}

officeApplet.prototype.appletFullEdit = function () {
    officeApplet.rid++ // 增加请求序号
    let msg = {
        "req": "Office_SwitchFullScreen",
        "rid": officeApplet.rid,
        "para": {}
    }
    this.ws.sendMessage(msg)
}

officeApplet.prototype.closeApplet = function () {
    officeApplet.rid++ // 增加请求序号
    let msg = {
        "req": "Wrl_AppletControl",
        "rid": officeApplet.rid,
        "para": {
            "ID": this.aid,
            "Code": 1
        }
    }
    this.ws.sendMessage(msg)
}

officeApplet.prototype.checkUpdate = function (version) {
    //校验中间件版本是不是需要升级,如果额外指定PID参数，代表校验PID代表的网页组件，Wrl_Version功能多
    officeApplet.rid++ // 增加请求序号
    let msg = {
        "req": "Wrl_Version",
        "rid": officeApplet.rid,
        "para": {
            "Version": version
        }
    }
    this.ws.sendMessage(msg)
}

officeApplet.prototype.changeOpen = function (myOpenDoc) {
    //重新打开文档
    officeApplet.rid++ // 增加请求序号
    let msg = {
        "req": "Office_Open",
        "rid": officeApplet.rid,
        "para": {
            "Open": encodeURIComponent(myOpenDoc)
        }
    }
    this.ws.sendMessage(msg)
}

officeApplet.prototype.resizeMargin = function (left, top, width, height) {
    officeApplet.rid++ // 增加请求序号
    let msg = {
        "req": "Wrl_AppletResize",
        "rid": officeApplet.rid,
        "para": {
            "ID": this.aid,
            "X": left,
            "Y": top,
            "Width": width,
            "Height": height
        }
    }
    this.ws.sendMessage(msg)
}

officeApplet.prototype.resize = function (width, height) {
    officeApplet.rid++ // 增加请求序号
    let msg = {
        "req": "Wrl_AppletResize",
        "rid": officeApplet.rid,
        "para": {
            "ID": this.aid,
            "Width": width,
            "Height": height
        }
    }
    this.ws.sendMessage(msg)
}

officeApplet.prototype.showApp = function () {
    officeApplet.rid++ // 增加请求序号
    let msg = {
        "req": "Wrl_AppletControl",
        "rid": officeApplet.rid,
        "para": {
            "ID": this.aid,
            "Code": 8
        }
    }
    this.ws.sendMessage(msg)
}

officeApplet.prototype.hideApp = function (code) {
    officeApplet.rid++ // 增加请求序号
    let msg = {
        "req": "Wrl_AppletControl",
        "rid": officeApplet.rid,
        "para": {
            "ID": this.aid,
            "Code": code
        }
    }
    this.ws.sendMessage(msg)
}

officeApplet.prototype.appScroll = function (scrollLeft = 0, scrollTop = 0) {
    // 默认纵向滚动网页组件实例，如需要横向滚动，Code设置为1，修改Left的值
    // NoLog指示服务日志不输出相关日志，因为时间比较多，输出日志导致日志文件信息过多
    officeApplet.rid++ // 增加请求序号
    let msg = {
        "req": "Wrl_AppletScroll",
        "rid": officeApplet.rid,
        "para": {
            "ID": this.aid,
            "NoLog": 1,
            "Code": 2,
            "Left": 0,
            "Top": Math.round(scrollTop)
        }
    }
    this.ws.sendMessage(msg)
}

officeApplet.prototype.sendScrollInfo = function (BarCode = 2, scrollLeft = 0, scrollTop = 0) {
    /// 设置页码滚动信息，BarW BarH分别为预留右侧宽度和底部高度
    console.log(scrollLeft,scrollTop)
    officeApplet.rid++ // 增加请求序号
    let msg = {
        "req": "Wrl_ScrollBar",
        "rid": officeApplet.rid,
        "para": {
            "ID": this.aid,
            "BarW": 0,
            "BarH": 0,
            "Code": BarCode,
            "Left": Math.round(scrollLeft),
            "Top": Math.round(scrollTop)
        }
    }
    this.ws.sendMessage(msg)
}

officeApplet.prototype.beginSaveAsFile = function (LocalFilePath) {
    // 请求开始另存文档
    officeApplet.rid++ // 增加请求序号
    let msg = {
        "req": "Office_SaveAs",
        "rid": officeApplet.rid,
        "para": {
            "NewFile": encodeURIComponent(LocalFilePath)
        }
    }
    this.ws.sendMessage(msg)
}

officeApplet.prototype.beginConvertFirstPage = function (LocalFilePath) {
    // 转换文档中页码序号Index的Base64编码数据，如指定本地保存文件名File，则保存到本地文件中
    officeApplet.rid++ // 增加请求序号
    let msg = {}
    if (LocalFilePath.length) {
        msg = {
            "req": "Office_ConvertImage",
            "rid": officeApplet.rid,
            "para": {
                "File": encodeURIComponent(LocalFilePath),
                "Index": 1
            }
        }
    } else {
        msg = {
            "req": "Office_ConvertImage",
            "rid": officeApplet.rid,
            "para": {
                "Index": 1
            }
        }
    }
    this.ws.sendMessage(msg)
}

officeApplet.prototype.beginExpportFile = function (LocalFilePath) {
    // 请求开始另存文档
    officeApplet.rid++ // 增加请求序号
    let msg = {
        "req": "Office_Export",
        "rid": officeApplet.rid,
        "para": {
            "NewFile": encodeURIComponent(LocalFilePath)
        }
    }
    this.ws.sendMessage(msg)
}

officeApplet.prototype.beginInsertImg = function (LocalFilePath) {
    // Save为1时自动保存文档
    officeApplet.rid++ // 增加请求序号
    let msg = {
        "req": "Office_InsertImg",
        "rid": officeApplet.rid,
        "para": {
            "ImgFile": encodeURIComponent(LocalFilePath),
            "Order": 5,	// 插入后图片在文字之上
            "Save": 1	// 插入后自动保存文档
        }
    }
    this.ws.sendMessage(msg)
}

officeApplet.prototype.beginGetFirstImg = function (LocalFilePath) {
    // 提取文档中序号Index的Base64编码数据，如指定本地保存文件名File，则保存到本地文件中
    officeApplet.rid++ // 增加请求序号
    let msg = {}
    if (LocalFilePath.length) {
        msg = {
            "req": "Office_GetImage",
            "rid": officeApplet.rid,
            "para": {
                "File": encodeURIComponent(LocalFilePath),
                "Index": 1
            }
        }
    } else {
        msg = {
            "req": "Office_GetImage",
            "rid": officeApplet.rid,
            "para": {
                "Index": 1
            }
        }
    }
    this.ws.sendMessage(msg)
}

officeApplet.prototype.sendUpdateJson = function () {
    // 发送中间件的升级命令，实现自动升级，同时升级微软及金山办公等网页组件
    // 注意：Wrl_Update中的请求参数如MD5 TK Size等，请根据文档“中间件制作升级包说明.pdf”中的打包工具生成
    officeApplet.rid++ // 增加请求序号
    let msg = {
        "req": "Wrl_Update",
        "rid": officeApplet.rid,
        "para": {
            "Name": "PageHiOffice—文档在线编辑组件升级包",
            "Date": "2024-11-12",
            "Desc": "1、优化中间件高级版启动内嵌网页小程序处理过程，解决个别情况启动失败问题，优化内嵌网页小程序的窗口激活及输入焦点处理，优化WS连接释放过程；2、优化PageHiOffice组件对微软Office及WPS各版本的兼容支持，解决网页嵌入和桌面同时打开后释放冲突问题，解决WPS嵌入后部分菜单功能无法使用问题；3、优化PageHiOffice组件优化其在副屏幕中兼容使用效果，解决文字模块执行Ctrl+S无保存通知问题，解决网页嵌入和桌面同时打开多次切换后嵌入窗口可能无法点击问题...",
            "DownAddr": "http://local.zorrosoft.com/Files/Update/Office_Update.pid",
            "Open": "http://local.zorrosoft.com/officeJS",
            "MD5": "D8978126A7B03312B7EA8D7093FB2055",
            "Version": "2.2.16.8",
            "Size": 34963456,
            "HideIns": 0,
            "Cookie": "",
            "Auth": "",
            "TK": "6682B41F7024DD09899F65EC5E07E287F3868B574EF7D74063281AF46EFC90631B3C753FF56F8A0F41E274269729B5F3ACD9ED3EA22D7C5F14C75E5181DD7A51E29FFD459390F0A6B8E505AF86D79AEE1FC60CF10098F07D27CB8CA2CBB664900B8429902EC5C7AA6D8676562F65B4F36E21C11E656802BF51B2E993DF5C8D56AD7B58D52D4DB13B80F895E5FAB67914BA91D775DFAABF65C584325C7BE84DE7FFB34CC0C3FEDDB9F672A42B152124E63D963D53E19CA0DC70E0BFC91053CB3C87354775D4EEC3D635827C25EC6066F1401F62BE0B837EFAD4D67939D5F2065C1098A2536A53A138BF073DBD026FE85D19104975B03D75C94B4475D03683B0A6"
        }
    }
    this.ws.sendMessage(msg)
}

officeApplet.prototype.compareDoc = function (LocalFilePath) {
    // 只有完整嵌入模式才支持，OLE嵌入方式不支持 
    officeApplet.rid++ // 增加请求序号
    let msg = {
        "req": "Office_DocCompare",
        "rid": officeApplet.rid,
        "para": {"Name": encodeURIComponent(LocalFilePath), "Target": "2", "Out": "C:/OfficeDoc/Result.doc"}
    }
    this.ws.sendMessage(msg)
}

officeApplet.prototype.mergeDoc = function (LocalFilePath) {
    officeApplet.rid++ // 增加请求序号
    let msg = {
        "req": "Office_FileMerge",
        "rid": officeApplet.rid,
        "para": {"Files": [encodeURIComponent(LocalFilePath)]}
    }
    this.ws.sendMessage(msg)
}

officeApplet.prototype.snapDoc = function () {
    officeApplet.rid++ // 增加请求序号
    let msg = {
        "req": "Wrl_AppletSnap",
        "rid": officeApplet.rid,
        "para": {"ID": this.aid, "Base64": 0, "File": new Date().getTime() + ".jpg"}
    }
    this.ws.sendMessage(msg)
}
officeApplet.prototype.insertTable = function () {
    officeApplet.rid++ // 增加请求序号
    let msg = {"req": "Office_InsertTable", "rid": officeApplet.rid, "para": {"RowNum": 2, "ColumnNum": 5}}
    this.ws.sendMessage(msg)
}
officeApplet.prototype.insertMark = function (url) {
    //Type 水印类型 Type默认0系统文字水印 1自定义文字水印 2图片水印
    // Content 类型为0时系统文字水印名称 类型为1时文字水印的内容 类型为2时图片文件路径或服务器水印图片下载地址 如有非英文、特殊字符或符号等，需要做UrlEncode编码
    officeApplet.rid++ // 增加请求序号
    //let msg = {"req":"Office_InsertWaterMark","rid":officeApplet.rid,"para":{"Type":0,"Content":"%E6%9C%BA%E5%AF%86%201"}}
    let msg = {
        "req": "Office_InsertWaterMark",
        "rid": officeApplet.rid,
        "para": {"Type": 2, "Content": url, "Width": 15, "Height": 18}
    }
    this.ws.sendMessage(msg)
}
officeApplet.prototype.insertNote = function () {
    officeApplet.rid++ // 增加请求序号
    let msg = {"req": "Office_InsertComment", "rid": officeApplet.rid, "para": {"Text": "批注内容"}}
    this.ws.sendMessage(msg)
}
officeApplet.prototype.DocRed = function () {
    officeApplet.rid++ // 增加请求序号
    let msg = {"req": "Office_RedTemplate", "rid": officeApplet.rid, "para": {"Position":"Content","File":"http://local.zorrosoft.com/Files/template.doc"}}
    this.ws.sendMessage(msg)
}
