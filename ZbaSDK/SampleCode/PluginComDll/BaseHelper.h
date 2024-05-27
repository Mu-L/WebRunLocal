#pragma once

#include "ComHelper.h"

/// �����¼�֪ͨ
#define WM_WEBSOCKETEVENT_CONNECTRETURN		WM_USER + 780
#define WM_WEBSOCKETEVENT_REQUESTSUCCESS	WM_USER + 781
#define WM_WEBSOCKETEVENT_REQUESTERROR		WM_USER + 782
#define WM_WEBSOCKETEVENT_PUSHMESSAGE		WM_USER + 783
#define WM_WEBSOCKETEVENT_CLOSE				WM_USER + 785

/// �����¼�֪ͨ
#define WM_TASKEVENT_PROC					WM_USER + 790
#define WM_TASKEVENT_UPDATEWAIT				WM_USER + 791

class CBaseHelper : public CComHelper
{
protected:
	/// ģ������
	static CString		m_strModelName;

	static CString GetLoadPath();

public:

	static ISocketProxyPtr GetSocketProxy();

	static IFileToolPtr GetFileTool();

	static ISocketFunctionPtr GetWrlSocket();
};
