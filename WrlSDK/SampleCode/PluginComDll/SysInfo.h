// SysInfo.h : CSysInfo 的声明

#pragma once
#include "resource.h"       // 主符号
#ifdef _USRDLL
#include "PluginComDll_i.h"
#else
#include "PluginComExe_i.h"
#endif
#include "_ISysInfoEvents_CP.h"

#if defined(_WIN32_WCE) && !defined(_CE_DCOM) && !defined(_CE_ALLOW_SINGLE_THREADED_OBJECTS_IN_MTA)
#error "Windows CE 平台(如不提供完全 DCOM 支持的 Windows Mobile 平台)上无法正确支持单线程 COM 对象。定义 _CE_ALLOW_SINGLE_THREADED_OBJECTS_IN_MTA 可强制 ATL 支持创建单线程 COM 对象实现并允许使用其单线程 COM 对象实现。rgs 文件中的线程模型已被设置为“Free”，原因是该模型是非 DCOM Windows CE 平台支持的唯一线程模型。"
#endif

// CSysInfo

class ATL_NO_VTABLE CSysInfo :
	public CComObjectRootEx<CComSingleThreadModel>,
	public CComCoClass<CSysInfo, &CLSID_SysInfo>,
	public IConnectionPointContainerImpl<CSysInfo>,
	public CProxy_ISysInfoEvents<CSysInfo>,
#ifdef _USRDLL
	public IDispatchImpl<ISysInfo, &IID_ISysInfo, &LIBID_PluginComDllLib, /*wMajor =*/ 1, /*wMinor =*/ 0>,
#else
	public IDispatchImpl<ISysInfo, &IID_ISysInfo, &LIBID_PluginComExeLib, /*wMajor =*/ 1, /*wMinor =*/ 0>,
#endif
#ifdef WRL_VRSION_STANDALONE
	public IDispatchImpl<IWrlConn, &__uuidof(IWrlConn), &LIBID_WrlBase, /* wMajor = */ 1>
#else
	public IDispatchImpl<IWrlConn, &__uuidof(IWrlConn), &LIBID_ZbaBase, /* wMajor = */ 1>
#endif
{
protected:
	/// WEB SOCKET连接对象
	IWebSocketConnectPtr m_spiSocketConnect;

public:
	CSysInfo()
		:m_spiSocketConnect(NULL)
	{
	}

	DECLARE_REGISTRY_RESOURCEID(IDR_SYSINFO)

	BEGIN_COM_MAP(CSysInfo)
		COM_INTERFACE_ENTRY(ISysInfo)
		COM_INTERFACE_ENTRY2(IDispatch, IWrlConn)
		COM_INTERFACE_ENTRY(IConnectionPointContainer)
		COM_INTERFACE_ENTRY(IWrlConn)
	END_COM_MAP()

	BEGIN_CONNECTION_POINT_MAP(CSysInfo)
		CONNECTION_POINT_ENTRY(__uuidof(_ISysInfoEvents))
	END_CONNECTION_POINT_MAP()

	DECLARE_PROTECT_FINAL_CONSTRUCT()

	HRESULT FinalConstruct()
	{
		return S_OK;
	}

	void FinalRelease()
	{
		if (NULL != m_spiSocketConnect)
			m_spiSocketConnect = NULL;
	}

public:

	// IWrlConn Methods
	STDMETHOD(Load)(LPDISPATCH piDispatch,BSTR bstrAuthInfo,BSTR bstrLang)
	{
		HRESULT hRet = piDispatch->QueryInterface(IID_IWebSocketConnect,(LPVOID *)&m_spiSocketConnect);
		ATLASSERT(NULL != m_spiSocketConnect);
		return hRet;
	}

	STDMETHOD(Unload)(EWrlCloseConnType eCloseConnType, BSTR bstrReason)
	{
		if(NULL != m_spiSocketConnect)
			m_spiSocketConnect = NULL;
		return S_OK;
	}

	STDMETHOD(UsbChanged)(BSTR bstrDisk, ULONG nStatus, BSTR bstrName)
	{
		/// 收到USB变化通知
		return S_OK;
	}

	STDMETHOD(SendJson)(BSTR bstrContent)
	{
		HRESULT hRet(S_FALSE);
		if (NULL != m_spiSocketConnect)
		{
			ULONG nRet = 0;
			hRet = m_spiSocketConnect->AsynSendText(bstrContent, &nRet);
		}
		return hRet;
	}

	STDMETHOD(RecText)(BSTR bstrContent);

	STDMETHOD(RecJson)(ULONG nReqID,BSTR bstrReqName,BSTR bstrContent);

	STDMETHOD(RecByte)(BYTE* pContent,ULONG nLen,VARIANT_BOOL bMoreFlag)
	{
		return S_FALSE;
	}

	STDMETHOD(HttpRequst)(BSTR bstrUrl,BSTR bstrPara, BSTR* pVal)
	{
		/// HTTP服务请求响应
		return E_NOTIMPL;
	}
};

OBJECT_ENTRY_AUTO(__uuidof(SysInfo), CSysInfo)
