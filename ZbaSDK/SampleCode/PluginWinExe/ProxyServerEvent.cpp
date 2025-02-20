/////////////////////////////////////////////////////////////////////////
/*@
	�ļ����ƣ�	ProxyServerEvent.cpp
	�ļ�������	ʵ��WebSocket�����¼�֪ͨ����
	��д���ڣ�	2018-10-25 22:00:00
	�������ߣ�	������
*/
/////////////////////////////////////////////////////////////////////////

#include "stdafx.h"
#include "ProxyServerEvent.h"

/////////////////////////////////////////////////////////////////////////////
// CProxyServerEvent

STDMETHODIMP CProxyServerEvent::Invoke( DISPID dispIdMember,REFIID riid,LCID lcid,WORD wFlags,
                DISPPARAMS *pDispParams,VARIANT *pVarResult,EXCEPINFO *pExcepInfo,UINT *puArgErr)
{
	HRESULT hRet(S_OK);
	switch( dispIdMember )
	{
		case 0x00000001:
		{
			if ( pDispParams->cArgs != 1 )
				return DISP_E_BADPARAMCOUNT;
			if ( pDispParams->cNamedArgs )
				return DISP_E_NONAMEDARGS;

			CComVariant varSID;
			VariantInit(&varSID);
			hRet = VariantChangeTypeEx(&varSID,&(pDispParams->rgvarg[0]),lcid,0,VT_BSTR);
			if FAILED(hRet)
				return DISP_E_BADVARTYPE;
			hRet = NewConn(varSID.bstrVal);
			VariantClear(&varSID);
			break;
		}
		case 0x00000002:
		{
			if ( pDispParams->cArgs != 4 )
				return DISP_E_BADPARAMCOUNT;
			if ( pDispParams->cNamedArgs )
				return DISP_E_NONAMEDARGS;

			CComVariant varSID,varReqID,varReqName,varMsgInfo;
			VariantInit(&varSID);
			VariantInit(&varReqID);
			VariantInit(&varReqName);
			VariantInit(&varMsgInfo);
			hRet = VariantChangeTypeEx(&varSID,&(pDispParams->rgvarg[3]),lcid,0,VT_BSTR);
			if FAILED(hRet)
				return DISP_E_BADVARTYPE;
			hRet = VariantChangeTypeEx(&varReqID,&(pDispParams->rgvarg[2]),lcid,0,VT_UI4);
			if FAILED(hRet)
				return DISP_E_BADVARTYPE;
			hRet = VariantChangeTypeEx(&varReqName,&(pDispParams->rgvarg[1]),lcid,0,VT_BSTR);
			if FAILED(hRet)
				return DISP_E_BADVARTYPE;
			hRet = VariantChangeTypeEx(&varMsgInfo,&(pDispParams->rgvarg[0]),lcid,0,VT_BSTR);
			if FAILED(hRet)
				return DISP_E_BADVARTYPE;
			hRet = RecMsgEvent(varSID.bstrVal,varReqID.ulVal,varReqName.bstrVal,varMsgInfo.bstrVal);
			VariantClear(&varMsgInfo);
			VariantClear(&varReqName);
			VariantClear(&varReqID);
			VariantClear(&varSID);
			break;
		}
		case 0x00000003:
		{
			if ( pDispParams->cArgs != 2 )
				return DISP_E_BADPARAMCOUNT;
			if ( pDispParams->cNamedArgs )
				return DISP_E_NONAMEDARGS;

			CComVariant varText,varSID;
			VariantInit(&varText);
			VariantInit(&varSID);
			hRet = VariantChangeTypeEx(&varSID,&(pDispParams->rgvarg[1]),lcid,0,VT_BSTR);
			if FAILED(hRet)
				return DISP_E_BADVARTYPE;
			hRet = VariantChangeTypeEx(&varText,&(pDispParams->rgvarg[0]),lcid,0,VT_BSTR);
			if FAILED(hRet)
				return DISP_E_BADVARTYPE;
			hRet = RecTextEvent(varSID.bstrVal,varText.bstrVal);
			VariantClear(&varText);
			VariantClear(&varSID);
			break;
		}
		case 0x00000004:
		{
			if ( pDispParams->cArgs != 4 )
				return DISP_E_BADPARAMCOUNT;
			if ( pDispParams->cNamedArgs )
				return DISP_E_NONAMEDARGS;

			CComVariant varSID,varLen,varMoreFlag;
			VariantInit(&varSID);
			VariantInit(&varLen);
			VariantInit(&varMoreFlag);
			hRet = VariantChangeTypeEx(&varSID,&(pDispParams->rgvarg[3]),lcid,0,VT_BSTR);
			if FAILED(hRet)
				return DISP_E_BADVARTYPE;
			hRet = VariantChangeTypeEx(&varLen,&(pDispParams->rgvarg[1]),lcid,0,VT_UI4);
			if FAILED(hRet)
				return DISP_E_BADVARTYPE;
			hRet = VariantChangeTypeEx(&varMoreFlag,&(pDispParams->rgvarg[0]),lcid,0,VT_BOOL);
			if FAILED(hRet)
				return DISP_E_BADVARTYPE;
			hRet = RecByte(varSID.bstrVal,pDispParams->rgvarg[2],varLen.ulVal,varMoreFlag.boolVal);
			VariantClear(&varSID);
			VariantClear(&varLen);
			VariantClear(&varMoreFlag);
			break;
		}
		case 0x00000005:
		{
			if ( pDispParams->cArgs != 2 )
				return DISP_E_BADPARAMCOUNT;
			if ( pDispParams->cNamedArgs )
				return DISP_E_NONAMEDARGS;

			CComVariant varReason,varSID;
			VariantInit(&varReason);
			VariantInit(&varSID);
			hRet = VariantChangeTypeEx(&varSID,&(pDispParams->rgvarg[1]),lcid,0,VT_BSTR);
			if FAILED(hRet)
				return DISP_E_BADVARTYPE;
			hRet = VariantChangeTypeEx(&varReason,&(pDispParams->rgvarg[0]),lcid,0,VT_BSTR);
			if FAILED(hRet)
				return DISP_E_BADVARTYPE;
			hRet = CloseEvent(varSID.bstrVal,varReason.bstrVal);
			VariantClear(&varReason);
			VariantClear(&varSID);
			break;
		}
		case 0x00000006:
		{
			if ( pDispParams->cArgs != 5 )
				return DISP_E_BADPARAMCOUNT;
			if ( pDispParams->cNamedArgs )
				return DISP_E_NONAMEDARGS;

			CComVariant varSID,varProtocol,varUrl,varPara;
			VariantInit(&varSID);
			VariantInit(&varProtocol);
			VariantInit(&varUrl);
			VariantInit(&varPara);
			hRet = VariantChangeTypeEx(&varSID,&(pDispParams->rgvarg[4]),lcid,0,VT_BSTR);
			hRet = VariantChangeTypeEx(&varProtocol,&(pDispParams->rgvarg[3]),lcid,0,VT_BSTR);
			hRet = VariantChangeTypeEx(&varUrl,&(pDispParams->rgvarg[2]),lcid,0,VT_BSTR);
			if FAILED(hRet)
				return DISP_E_BADVARTYPE;
			hRet = VariantChangeTypeEx(&varPara,&(pDispParams->rgvarg[1]),lcid,0,VT_BSTR);
			if FAILED(hRet)
				return DISP_E_BADVARTYPE;
			pDispParams->rgvarg[0].vt = VT_BSTR;
			pDispParams->rgvarg[0].bstrVal = NULL;
			if(NULL != m_hMsgWnd && ::IsWindow(m_hMsgWnd))
			{
				/// ͬ�����󣬱�����SendMessage
				HttpReqData hd;
				hd.strProtocol = varProtocol.bstrVal;
				hd.strUri = varUrl.bstrVal;
				hd.strPara = varPara.bstrVal;
				::SendMessage(m_hMsgWnd,WM_PROXYSEREREVENT_HTTPREQ,0,(LPARAM)&hd);
				CComBSTR bstrRet(hd.strRet);
				bstrRet.CopyTo(&(pDispParams->rgvarg[0].bstrVal));
				bstrRet.Empty();
			}
			VariantClear(&varSID);
			VariantClear(&varProtocol);
			VariantClear(&varUrl);
			VariantClear(&varPara);
			break;
		}
		case 0x00000007:
		{
			if ( pDispParams->cArgs != 3 )
				return DISP_E_BADPARAMCOUNT;
			if ( pDispParams->cNamedArgs )
				return DISP_E_NONAMEDARGS;

			CComVariant varReason,varReqID,varSessionID;
			VariantInit(&varReason);
			VariantInit(&varReqID);
			VariantInit(&varSessionID);
			hRet = VariantChangeTypeEx( &varSessionID,&(pDispParams->rgvarg[2]),lcid,0,VT_UI4);
			if FAILED(hRet)
				return DISP_E_BADVARTYPE;
			hRet = VariantChangeTypeEx( &varReqID,&(pDispParams->rgvarg[1]),lcid,0,VT_UI4);
			if FAILED(hRet)
				return DISP_E_BADVARTYPE;
			hRet = VariantChangeTypeEx( &varReason,&(pDispParams->rgvarg[0]),lcid,0,VT_BSTR);
			if FAILED(hRet)
				return DISP_E_BADVARTYPE;
			hRet = RecErrEvent(varSessionID.ulVal,varReqID.ulVal,varReason.bstrVal);
			VariantClear(&varReason);
			VariantClear(&varReqID);
			VariantClear(&varSessionID);
			break;
		}
		case 0x00000008:
		{
			if ( pDispParams->cArgs != 1 )
				return DISP_E_BADPARAMCOUNT;
			if ( pDispParams->cNamedArgs )
				return DISP_E_NONAMEDARGS;

			CComVariant varPort;
			VariantInit(&varPort);
			hRet = VariantChangeTypeEx(&varPort,&(pDispParams->rgvarg[0]),lcid,0,VT_UI2);
			if FAILED(hRet)
				return DISP_E_BADVARTYPE;
			if(NULL != m_hMsgWnd && ::IsWindow(m_hMsgWnd))
			{
				/// ֪ͨHTTP���������˿�
				::PostMessage(m_hMsgWnd,WM_PROXYSEREREVENT_HTTPPORT,0,(LPARAM)varPort.uiVal);
			}
			VariantClear(&varPort);
			break;
		}
		case 0x00000009:
		{
			if ( pDispParams->cArgs != 2 )
				return DISP_E_BADPARAMCOUNT;
			if ( pDispParams->cNamedArgs )
				return DISP_E_NONAMEDARGS;
			CComVariant varSID,varOpCode;
			VariantInit(&varSID);
			VariantInit(&varOpCode);
			hRet = VariantChangeTypeEx(&varSID,&(pDispParams->rgvarg[1]),lcid,0,VT_BSTR);
			if FAILED(hRet)
				return DISP_E_BADVARTYPE;
			hRet = VariantChangeTypeEx(&varOpCode,&(pDispParams->rgvarg[0]),lcid,0,VT_UI2);
			if FAILED(hRet)
				return DISP_E_BADVARTYPE;
			if(NULL != m_hMsgWnd && ::IsWindow(m_hMsgWnd))
			{
				/// ֪ͨ�յ�WS�����룬�����յ��ı����ֽ����ȱ��
				::SendMessage(m_hMsgWnd,WM_PROXYSEREREVENT_OPCODE,(WPARAM)varSID.bstrVal,(LPARAM)varOpCode.uiVal);
			}
			VariantClear(&varSID);
			VariantClear(&varOpCode);
			break;
		}
		default:
			break;
	}
	return hRet;
}

STDMETHODIMP CProxyServerEvent::RecErrEvent(ULONG nSocketID,ULONG nReqID,BSTR bstrText)
{
	HRESULT hRet(E_FAIL);
	if(NULL == bstrText)
		return hRet;
	if(NULL != m_hMsgWnd && ::IsWindow(m_hMsgWnd))
	{
		::SendMessage(m_hMsgWnd,WM_PROXYSEREREVENT_RECERR,nSocketID,(LPARAM)bstrText);
	}
	return hRet;
}

STDMETHODIMP CProxyServerEvent::NewConn(BSTR bstrSID)
{
	HRESULT hRet(E_FAIL);
	ATLASSERT(bstrSID);
	if(NULL == bstrSID)
		return hRet;
	if(NULL != m_hMsgWnd && ::IsWindow(m_hMsgWnd))
	{
		::SendMessage(m_hMsgWnd,WM_PROXYSEREREVENT_NEWCONNECT,0,(LPARAM)bstrSID);
	}
	return hRet;
}

STDMETHODIMP CProxyServerEvent::RecMsgEvent(BSTR bstrSID,ULONG nReqID,\
	BSTR bstrReqName,BSTR bstrRecInfo)
{
	HRESULT hRet(E_FAIL);
	if(!nReqID || NULL == bstrSID)
		return hRet;
	if(NULL != m_hMsgWnd && ::IsWindow(m_hMsgWnd))
	{
		CString strKey;
		strKey.Format(L"%ld_%s",nReqID,(CString)bstrSID);
		CRecData* pRecData = new CRecData();
		if(NULL != pRecData)
		{
			pRecData->pbContent = NULL;
			pRecData->strReqName = bstrReqName;
			pRecData->strRecText = bstrRecInfo;
		}
		m_DataLock.Lock(L"RecMsgEvent");
		m_CatchData[strKey] = pRecData;
		m_DataLock.UnLock(L"RecMsgEvent");
		::SendMessage(m_hMsgWnd,WM_PROXYSEREREVENT_RECMESSAGE,(WPARAM)bstrSID,(LPARAM)nReqID);
	}
	return hRet;
}

STDMETHODIMP CProxyServerEvent::RecTextEvent(BSTR bstrSID,BSTR bstrText)
{
	HRESULT hRet(E_FAIL);
	if(NULL == bstrSID || NULL == bstrText)
		return hRet;
	if(NULL != m_hMsgWnd && ::IsWindow(m_hMsgWnd))
	{
		::SendMessage(m_hMsgWnd,WM_PROXYSEREREVENT_RECTEXT,(WPARAM)bstrSID,(LPARAM)bstrText);
	}
	return hRet;
}

STDMETHODIMP CProxyServerEvent::RecByte(BSTR bstrSID,VARIANT varContent,ULONG nLen,VARIANT_BOOL bMoreFlag)
{
	HRESULT hRet(E_FAIL);
	if(NULL == bstrSID || !nLen)
		return hRet;
	/// ��ö�����������
	BYTE *buf = NULL;
	SafeArrayAccessData(varContent.parray,(void **)&buf);
	if(NULL != buf)
	{
		if(NULL != m_hMsgWnd && ::IsWindow(m_hMsgWnd))
		{
			CString strKey;
			strKey.Format(L"%ld_%s",nLen,(CString)bstrSID);
			CRecData* pRecData = new CRecData();
			if(NULL != pRecData)
			{
				pRecData->pbContent = buf;
				pRecData->bMoreFlag = bMoreFlag;
				m_DataLock.Lock(L"RecByte");
				m_CatchData[strKey] = pRecData;
				m_DataLock.UnLock(L"RecByte");
			}
			::SendMessage(m_hMsgWnd,WM_PROXYSEREREVENT_BYTE,(WPARAM)bstrSID,nLen);
		}
	}
	SafeArrayUnaccessData(varContent.parray);
	return hRet;
}

STDMETHODIMP CProxyServerEvent::CloseEvent(BSTR bstrSID,BSTR bstrReason)
{
	HRESULT hRet(E_FAIL);
	if(NULL != m_hMsgWnd && ::IsWindow(m_hMsgWnd))
	{
		::SendMessage(m_hMsgWnd,WM_PROXYSEREREVENT_CLOSECONN,(WPARAM)bstrSID,(LPARAM)bstrReason);
	}
	return hRet;
}