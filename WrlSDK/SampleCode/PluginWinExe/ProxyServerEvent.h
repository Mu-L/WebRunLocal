#pragma once
#include "BaseFuncLib.h"

/// ֪ͨץͼ����
#define	WM_APPLET_SNAPOK				WM_USER + 2990

///֪ͨС����ر�
#ifndef WM_APPLET_CLOSE
#define WM_APPLET_CLOSE					WM_USER + 3000
#endif

/// ֪ͨС�����ʼ�����
#ifndef WM_APPLET_INITOK
#define WM_APPLET_INITOK				WM_USER + 3001
#endif

/// ֪ͨС���򴰿��ػ�
#ifndef WM_APPLET_REDRAW
#define WM_APPLET_REDRAW				WM_USER + 3002
#endif

/// ֪ͨС���򴰿���ʾ��������
#ifndef WM_APPLET_SHOW
#define WM_APPLET_SHOW					WM_USER + 3003
#endif

/// ֪ͨС����״̬(���粥����ͣ������ڲ���ʱ)
#ifndef WM_APPLET_STATUS
#define WM_APPLET_STATUS				WM_USER + 3004
#endif

/// ֪ͨС���򴰿�ȫ��״̬
#ifndef WM_APPLET_FULLSCREEN
#define WM_APPLET_FULLSCREEN			WM_USER + 3005
#endif

/// ֪ͨ���С���򴰿�
#ifndef WM_APPLET_CLICKDOWN
#define WM_APPLET_CLICKDOWN				WM_USER + 3006
#endif

/// ֪ͨ�ƶ�С���򴰿�
#ifndef WM_APPLET_MOVEWND
#define WM_APPLET_MOVEWND				WM_USER + 3007
#endif

/// ֪ͨС���򴰿����ý���
#ifndef WM_APPLET_SETAPPLETFOCUS
#define WM_APPLET_SETAPPLETFOCUS		WM_USER + 3013
#endif
/// ֪ͨ�����߳̽���
#ifndef WM_APPLET_APPLETATTACHBROWSER
#define WM_APPLET_APPLETATTACHBROWSER	WM_USER + 3014
#endif

/// ����С���򴰿����ݱ���
#ifndef WM_APPLET_PROTECTWND
#define WM_APPLET_PROTECTWND			WM_USER + 3020
#endif

/// ����С���򴰿����ݱ���
#ifndef WM_APPLET_ACTIVEWND
#define WM_APPLET_ACTIVEWND				WM_USER + 3021
#endif

/// ����Ƕ��ĵ��������̴���
#ifndef WM_APPLET_OTHERWND
#define WM_APPLET_OTHERWND				WM_USER + 3022
#endif

#ifndef WM_APPLET_QUIT
#define WM_APPLET_QUIT					WM_USER + 3023
#endif

/// ֪ͨ�����ļ�
#ifndef WM_APPLET_SAVEFILE
#define WM_APPLET_SAVEFILE				WM_USER + 3050
#endif
/// ֪ͨ�ر��ĵ�
#ifndef WM_APPLET_CLOSEDOC
#define WM_APPLET_CLOSEDOC				WM_USER + 3051
#endif
/// ֪ͨ�ĵ��½����
#ifndef WM_APPLET_DOCNEWOROPEN
#define WM_APPLET_DOCNEWOROPEN			WM_USER + 3052
#endif
/// �����ĵ�
#ifndef WM_APPLET_NETFILE
#define WM_APPLET_NETFILE				WM_USER + 3053
#endif
/// ��ӡ�ĵ�
#ifndef WM_APPLET_PRINTFILE
#define WM_APPLET_PRINTFILE				WM_USER + 3054
#endif

/// ֪ͨ��ʼ����
#ifndef WM_APP_INITOPEN
#define WM_APP_INITOPEN					WM_USER + 500
#endif

/// ֪ͨ��������ID
#ifndef WM_APP_OTHERPID
#define WM_APP_OTHERPID					WM_USER + 501
#endif

/// WS������֪ͨ
#define WM_PROXYSEREREVENT_NEWCONNECT	WM_USER + 2000
/// WS�յ�JSON��
#define WM_PROXYSEREREVENT_RECMESSAGE	WM_USER + 2001
/// WS�յ����ְ�
#define WM_PROXYSEREREVENT_RECTEXT		WM_USER + 2002
/// WS�յ�����������
#define WM_PROXYSEREREVENT_BYTE			WM_USER + 2003
/// WS�յ��ر�֪ͨ
#define WM_PROXYSEREREVENT_CLOSECONN	WM_USER + 2005
/// WS�յ�HTTPͬ������֪ͨ
#define WM_PROXYSEREREVENT_HTTPREQ		WM_USER + 2006
/// WS�յ�HTTPͬ���˿�֪ͨ
#define WM_PROXYSEREREVENT_HTTPPORT		WM_USER + 2007
/// WS�յ�����֪ͨ
#define WM_PROXYSEREREVENT_RECERR		WM_USER + 2008
/// WS�յ�������
#define WM_PROXYSEREREVENT_OPCODE		WM_USER + 2009

#ifndef NEED_FINAL_CONSTRUCT
#define NEED_FINAL_CONSTRUCT
#endif

struct HttpReqData 
{
	CString strUri;
	CString strPara;
	CString strRet;

	CString strProtocol;
};

struct CRecData
{
	CString	strReqName;
	CString	strRecText;

	/// �Ƿ��и�������
	VARIANT_BOOL bMoreFlag;

	// ���յĶ���������
	BYTE* pbContent;
};

typedef std::map	<CString,CRecData*>	RECDATA_MAP;

// CProxyServerEvent
class CProxyServerEvent : 
	public CComObjectRoot,
	//ʵ���¼�֪ͨ�ӿ�
	public _ISocketProxyEvents
{
protected:

	/// ��Ϣ����
	HWND			m_hMsgWnd;

	CWrlThreadLock	m_DataLock;

	RECDATA_MAP		m_CatchData;

	void FreeAll()
	{
		m_DataLock.Lock(L"FreeAll");
		RECDATA_MAP::iterator it = m_CatchData.begin();
		while(it != m_CatchData.end())
		{
			if(NULL != it->second)
				delete it->second;
			it++;
		}
		m_CatchData.clear();
		m_DataLock.UnLock(L"FreeAll");
	}

public:
	CProxyServerEvent()
		:m_hMsgWnd(NULL)
	{
	}

	~CProxyServerEvent()
	{
		FreeAll();
	}

	void SetCallPara(HWND hMsgWnd)
	{
		if(NULL != hMsgWnd)
		{
			if(!::IsWindow(hMsgWnd))
				return;
		}
		m_hMsgWnd = hMsgWnd;
	}

	CRecData* GetCatchData(const CString& strSID,ULONG nReqID,BOOL bRemove = TRUE)
	{
		CRecData* pRecData = NULL;
		CString strKey;
		strKey.Format(L"%ld_%s",nReqID,strSID);
		m_DataLock.Lock(L"GetCatchData");
		RECDATA_MAP::iterator it = m_CatchData.find(strKey);
		if(it != m_CatchData.end())
		{
			pRecData = it->second;
			if(bRemove)
				m_CatchData.erase(it);
		}
		m_DataLock.UnLock(L"GetCatchData");
		return pRecData;
	}

BEGIN_COM_MAP(CProxyServerEvent)
	COM_INTERFACE_ENTRY(_ISocketProxyEvents)
END_COM_MAP()

public:

	STDMETHODIMP GetTypeInfoCount(UINT*)
    {
       return E_NOTIMPL;
    }

    STDMETHODIMP GetTypeInfo( UINT iTInfo,LCID lcid,ITypeInfo **ppTInfo)
    { 
       return E_NOTIMPL;
    }

    STDMETHODIMP GetIDsOfNames( REFIID riid,LPOLESTR *rgszNames,UINT cNames,
                    LCID lcid,DISPID *rgDispId)
    { 
      return E_NOTIMPL;
    }

	STDMETHOD(Invoke)(DISPID dispIdMember,REFIID riid,LCID lcid,WORD wFlags,DISPPARAMS *pDispParams,
               VARIANT *pVarResult,EXCEPINFO *pExcepInfo,UINT *puArgErr);
	
	//  _ISocketProxyEvents
	STDMETHOD(NewConn)(BSTR bstrSID);

	STDMETHOD(RecMsgEvent)(BSTR bstrSID,ULONG nReqID,BSTR bstrReqName,BSTR bstrRecText);
	STDMETHOD(RecTextEvent)(BSTR bstrSID,BSTR bstrText);
	STDMETHOD(RecByte)(BSTR bstrSID,VARIANT varContent,ULONG nLen,VARIANT_BOOL bMoreFlag);

	STDMETHOD(RecErrEvent)(ULONG nSocketID,ULONG nReqID,BSTR bstrErrInfo);
	STDMETHOD(CloseEvent)(BSTR bstrSID,BSTR bstrReason);
};
