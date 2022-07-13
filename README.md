# WebRunLocal
PluginOK中间件，原名WebRunLocal(本网通)，是一个实现浏览器与桌面程序之间可双向调用的低成本、强兼容、高性能、安全可控、轻量级、易集成、可扩展、跨浏览器的原生小程序系统。通过此中间件可实现在网页中无障碍操作终端电脑连接的各种硬件设备、调用操作系统API及本地DLL功能，可彻底解决ActiveX控件及桌面自动化程序(如微软Office、金山WPS、永中Office、AutoCAD、Solidworks等)在Chrome、Edge、Firefox、IE、Opera、Electron、Vivaldi、Brave、360、QQ等浏览器中的嵌入使用问题，是开发丰富型、高性能、高安全及实时通信互联网应用的首选，是浏览器进行功能扩展的秘密武器，也是采用了微软Silverlight和Adobe Flex等RIA技术的ERP、CRM等系统兼容Chrome等最新版浏览器的最佳产品，还是FireBreath的优选替代方案。PluginOK中间件提供的前端集成接口语言无关，网页中只需使用简单的JS脚本即可完成与B/S系统的对接，让浏览器成为各种信息化系统集成的最佳容器，彻底解决B/S系统的各种痛点和难点，让桌面程序迁移到浏览器中运行从此再无障碍。

PluginOK(牛插)中间件及相关小程序由成都佐罗软件有限公司研发并销售，咨询热线电话：18081958957、4006831589，公司网站：http://www.zorrosoft.com 商务邮箱：wzh@zorrosoft.com 微信在线沟通：ZorroSoft 咨询报价请优先通过微信或邮箱进行，谢谢！

操作系统兼容性： 1、全面兼容Windows XP、Vista、7、8、8.1、10等各版本32及64位桌面系统； 2、全面兼容Windows Server 2008、2012、2016、2019等各版本32及64位服务系统。

内嵌网页小程序的浏览器兼容性： 1、IE 8及以上版本； 2、Chrome 41及以上版本； 3、FireFox 50及以上版本； 4、Edge(Chrome内核) 80及以上版本； 5、Opera 36及以上版本； 6、Brave浏览器； 7、Vivaldi浏览器； 8、Electron桌面程序； 9、360极速浏览器(X) 9.5及以上版本； 10、360安全及企业安全浏览器； 11、QQ浏览器10及以上版本； 12、搜狗浏览器；13、华为浏览器；14、微信网页窗口 ......

在IE中实现网页和本地系统双向调用的方法是使用ActiveX控件技术，而在Chrome、FireFox等浏览器有类似的NPAPI插件技术。因为安全隐患及稳定性等问题，微软Edge(Chrome内核)不支持ActiveX控件，而目前市场占有率高达70%的Chrome浏览器也从45版开始也抛弃了NPAPI插件的支持，导致原来很多依赖这些技术实现的业务无法在最新版浏览器中继续使用。

浏览器与本地程序之间双向调用的知名解决方案有以下两个： 1、FireBreath，底层实现采用的是ActiveX和NPAPI技术，已面临2015年后发布的浏览器版本不能兼容使用的问题，基本已经废弃，官方网站都已经关闭； 2、Node.js，是一个基于Chrome V8引擎的JavaScript运行环境，其中FFI模块可实现在JavaScript中调用本地C语言风格的动态链接库。运行及部署依赖Python和npm，另外需要区别处理32位和64位的程序调用，尤其是不能支持ActiveX控件等面向对象的组件调用，无法和网页融为一体运行。

使用PluginOK(牛插)中间件的理由： 
1、轻量级：整个程序包很小，再无依赖其它运行库或第三方支持库即可使用； 
2、强兼容性：采用HTML5标准中的Web Socket技术，可确保在各个浏览器当前及后续版本的兼容使用； 
3、在Windows平台采用COM组件技术为上层小程序开发提供友好的接口支持，支持大多数的开发语言； 
4、可配置和灵活的小程序程序安装和升级支持，也支持OEM，方便第三方集成到自己的业务系统中。

使用场景举例： 
1、网页中需要和本地电脑的硬件进行交互，比如B/S架构的OA系统中操作本地打印机； 
2、网页中需要调用本地的ActiveX控件实现一些特殊服务，比如Office文档的内嵌在线编辑与审核； 
3、一些软件系统使用了第三方的DLL功能模块，可通过本中间件实现在B/S架构的系统中调用； 
4、网银、在线支付等安全性要求高的网站，可基于本中间件开发安全控件、访问U盾等的加密模块提供访问安全性； 
5、开发去中心化的分布式系统应用，如充分利用分散的系统计算能力。

针对不同的业务使用场景，PluginOK支持三种类型的原生小程序： A、DLL模块小程序，实现为COM进程内组件，可用于封装各种硬件设备的驱动库及无界面交互的Windows API功能模块等，此类型小程序和PluginOK的主服务运行于同一进程，拥有较高的系统访问权限，一般不能访问当前桌面登录用户的注册表及相关配置； B、有界面交互的弹窗小程序(EXE)，此类型小程序是普通的Win32执行程序，主要是封装有界面交互如打印机、扫描仪、高拍仪等的ActiveX控件给前端调用，弹出类似网页的窗口运行，权限和普通桌面应用一样； C、有界面交互的内嵌网页小程序(EXE)，此类型小程序也是普通的Win32执行程序，主要是封装有界面交互如视频播放、办公软件的ActiveX控件给前端以内嵌网页的形式运行，体验效果和原IE中的ActiveX控件和NPAPI插件一样。

基于PluginOK中间件全球独创的真内嵌网页小程序技术，在Chrome、Edge、Firefox、Opera等浏览器中支持有界面交互的ActiveX控件内嵌网页运行有以下两个技术方案： A、调用PluginOK中间件之上的IE控件内嵌小程序或IE新标签小程序实现可程序驱动的双内核浏览器，缺点是内存占用高、运行效率低、用户体验差，优点是开发成本低，前端改动最小，老项目升级时建议采用； B、基于PluginOK中间件的内嵌网页小程序开发接口，在ActiveX控件基础之上开发其内嵌小程序的封装版，彻底弃用IE内核，此方案内存占用低、运行效率高、用户体验佳，不过开发成本相对A方案高一点，前端改动多一些，不过是一劳永逸的解决方案，新项目建议采用。

PluginOK中间件及小程序授权：商业用途需付费使用，非商业用途(需公益机构出具证明)可申请免费使用授权，http://local.zorrosoft.com/ 提供在线演示和软件包下载。 技术咨询及获取报价信息请微信联系：ZorroSoft、qq972340118，开发交流QQ群：23126938，点击链接加入：https://jq.qq.com/?_wv=1027&k=5FxgskL

视频流低延迟多路在线播放演示网站：http://local.zorrosoft.com/vlc 欢迎体验！

PluginOK中间件产品大记事： 
1、PluginOK(牛插)中间件已于2019年5月正式发布单机标准版，并实现支持无界面交互的无窗小程序(DLL)及有界面交互的弹窗小程序(EXE)；
2、2020年7月13日正式发布在网页中可真正内嵌运行有界面交互的浏览器小程序(EXE)版本，同时发布了Flash Player、IE控件及标签页等内嵌网页小程序供大家体验； 
3、2020年8月13日正式发布网络版，无需连接外网也可使用，相对于单机版授权，软件授权使用费大幅度降低；
4、2020年10月09日正式发布VLC内嵌网页多媒体播放小程序，支持在网页中直接内嵌低延迟播放多路RTSP流；发布北京点聚AIP电子签章网页内嵌小程序，支持在网页中直接对各种办公文档的签章；正式发布文件操作小程序，提供本地文件HTTP协议上传与下载、本地图像文件旋转与缩放、本地文件访问、本地程序运行等服务；
5、2020年12月12日发布Autodesk公司网页小程序，支持DWG等工程图在线编辑、查看及审阅等；
6、2021年01月22日发布升级版，PluginOK中间件支持HTTP和HTTPS服务代理，支持对小程序窗口透明和截图，发布腾讯微信及企业微信等桌面软件内嵌网页运行版本；
7、2021年05月06日发布Solidworks网页小程序及PCL网页渲染小程序体验版，支持工业互联网的发展，同时升级微软Office及金山WPS网页在线编辑小程序，提供丰富的前端调用接口；
8、2021年08月30日发布重大升级版，中间件高级版支持普通用户使用，大多数时候无需管理员权限，大幅改善用户体验和系统安全性能，Office网页小程序支持远程文档操作，提供书签接口，支持文件套红；
9、2021年10月25日发布升级版，重写底层数据访问机制，支持内嵌小程序启动秒开完成，内嵌小程序彻底无需管理员权限，解决关闭浏览器可能崩溃问题、Office小程序增加永中Office支持；
10、2022年01月05日发布升级版，发布海康网页原生播放视频流小程序，支持海康威视设备私有协议播放，再次降低播放延迟时间，同时支持LibVLC和MP4引擎播放；
11、2022年03月02日发布升级版，高级版内嵌网页小程序运行新增支持360极速浏览器X64位版、Vivaldi、Brave浏览器及Electron桌面程序，完善Office小程序功能，RTSP流网页小程序默认自动启用GPU硬件加速能力播放。

PluginOK支持真正内嵌网页运行的高级版发布以来，已获得不少上市公司的采购合同：http://zorrosoft.com/?p=944 他们的选择就是本产品实力的最好证明，^_^ 友情提醒：PluginOK中间件是此领域全球唯一实现商用的成熟中间件，技术实现方案在2019年就申请了中国软件发明专利保护，请大家注意识别仿冒或抄袭者，选择那些冒牌货不仅仅会因为其产品不成熟对您造成巨大损失不说，还有侵犯本公司知识产权的巨大风险！

各目录说明： 
1、Bin目录，单机绿色标准版文档，如需高级版请联系客服获取，InstallWrl.bat执行安装中间件，RemoveWrl.bat执行卸载中间件，StopWrl.bat停止中间件服务，标准版功能测试请参考TestWrl.txt； 
2、WrlSDK目录，单机版SDK，包含开发接口说明、开发小程序范例工程、小程序打包工具等；
3、Net目录，网络绿色高级版程序包，InstallWrl.bat执行安装中间件，RemoveWrl.bat执行卸载中间件，标准版功能测试请参考TestWrl.txt； 
4、ZbaSDK目录，网络版SDK，包含开发接口说明、开发小程序范例工程、小程序打包工具等； 
5、Plugins目录，基于PluginOK之上，官方开发的适用于各种应用场景的小程序；
6、Test为前端测试网页和开源的脚本范例。
