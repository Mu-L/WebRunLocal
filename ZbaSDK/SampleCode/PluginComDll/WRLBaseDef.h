/**
 * @file WRLBaseDef.h
 *
 * Copyright (c) 2013-?,�ɶ��������
 * All rights reserved.
 *
 * @ingroup 
 *
 * @brief һЩ�����ͻ����ඨ��
 *
 * @author ������
 *
 */

//  WRLBaseDef.h
/////////////////////////////////////////////////////////////////

#pragma once

/// ����STL������
#include <vector>
#include <list>
#include <map>

/// ʹ��ATL��CString
#include <atlstr.h>
#include <Wtsapi32.h>
#include "AppletVersionDef.h"

///////////////////////// ��˾����Ʒ��ע����� /////////////////////////

/// �����Ʒ���ơ�������
#ifdef WRL_VRSION_STANDALONE
#ifdef WRL_VRSION_OVERSEAS
#define WRL_APPLICATION_NAME		L"PageHi"
#else
#define WRL_APPLICATION_NAME		L"PluginOK"
#endif
#endif

/// �����
#ifdef WRL_VRSION_NET
#ifdef WRL_VRSION_OVERSEAS
#define WRL_APPLICATION_NAME		L"PageHi"
#else
#define WRL_APPLICATION_NAME		L"BrowserApplet"
#endif
#endif

/// �������г�������·��
#define PRODUCT_COMMAN_APPRUNFILE	L"AppRunFile"

/// ���幫˾����
#ifndef WRL_VRSION_OVERSEAS
#define COMPANY_NAME_EN				L"ZorroSoft"
#define COMPANY_NAME_CHS			L"�������"
#else
#define COMPANY_NAME_EN				L"PageHi"
#define COMPANY_NAME_CHS			L"ZorroSoft"
#endif

/// ������������ϵ����
#ifndef WRL_VRSION_OVERSEAS
#define	WRL_EMAIL_ADDR				L"wzh@zorrosoft.com"
#else
#define	WRL_EMAIL_ADDR				L"PageHi@gmail.com"
#endif

/// ������������վ��ַ
#ifndef WRL_VRSION_OVERSEAS
#define	WRL_WEB_ADDR				L"http://www.zorrosoft.com"
#else
#define	WRL_WEB_ADDR				L"http://www.pagehi.com"
#endif

#ifndef WRL_VRSION_OVERSEAS
#ifdef WRL_VRSION_STANDALONE
#define PRODUCT_REGNODENAME			L"PluginOK"
#define PRODUCT_SETUP_FILE			L"PluginOKIns"
#endif

#ifdef WRL_VRSION_NET
#define PRODUCT_REGNODENAME			L"BrowserApplet"
#define PRODUCT_REGPOKAUTH			L"PluginOKServer"
#define PRODUCT_SETUP_FILE			L"BrowserAppletIns"
#endif
#else
#ifdef WRL_VRSION_STANDALONE
#define PRODUCT_REGNODENAME			L"PageHi"
#define PRODUCT_SETUP_FILE			L"PageHiIns"
#endif

#ifdef WRL_VRSION_NET
#define PRODUCT_REGNODENAME			L"PageHiNet"
#define PRODUCT_REGPOKAUTH			L"PageHiServer"
#define PRODUCT_SETUP_FILE			L"PageHiNetIns"
#endif
#endif

/// ����ע����й�˾��·��
#define COMPANY_REGPATH				CString(L"Software\\") + COMPANY_NAME_EN

//////////////////////////////////////////////////////////////////////////

#define WRL_STRING_RETURN			"\r\n"
#define WRL_STRING_LRETURN			L"\r\n"
#define WRL_STRING_FILE				L"file:///"
#define WRL_STRING_FILE2			L"FILE:///"

///////////////////////////// ģ�鶨�� //////////////////////////////////
#define WRL_SYNTDLL				L"NTdll.dll"
#define WRL_SYKERNELDLL			L"Kernel32.dll"
#define WRL_USERDLL				L"User32.dll"
#define WRL_REGSVR32			L"regsvr32.exe"

#define WRL_PSAPIDLL			L"Psapi.dll"

#define WRL_VLCOCXDLL			L"VlcOcx.dll"

/// AutoIT3����
#define	WRL_AUTOIT3				L"IENewTab.dll"

#ifdef WRL_VRSION_STANDALONE
/// ƽ̨����֧�ֿ�
#ifndef WRL_VRSION_OVERSEAS
#define WRL_ENGINEDLL			L"WrlEngine.dll"
#define WRL_BASEDLL				L"WrlBase.dll"
#define WRL_HTTPDLL				L"WrlHttp.dll"
#define WRL_APPLETDLL			L"WrlApplet.dll"
#define WRL_ENGINEDLL_CSHARP	L"Interop.WrlEngine.dll"
#define WRL_BASEDLL_CSHARP		L"Interop.WrlBase.dll"
#define WRL_APPLETDLL_CSHARP	L"Interop.WrlApplet.dll"
/// �����HOOK֧�ֿ�
#define WRL_BROWSERDLL			L"WrlBrowser.dll"
#else
#define WRL_ENGINEDLL			L"PHEngine.dll"
#define WRL_BASEDLL				L"PHBase.dll"
#define WRL_HTTPDLL				L"PHHttp.dll"
#define WRL_APPLETDLL			L"PHApplet.dll"
#define WRL_ENGINEDLL_CSHARP	L"Interop.PHEngine.dll"
#define WRL_BASEDLL_CSHARP		L"Interop.PHBase.dll"
#define WRL_APPLETDLL_CSHARP	L"Interop.PHApplet.dll"
/// �����HOOK֧�ֿ�
#define WRL_BROWSERDLL			L"PHBrowser.dll"
#endif
#else
#ifndef WRL_VRSION_OVERSEAS
/// ƽ̨����֧�ֿ�
#define WRL_ENGINEDLL			L"ZbaEngine.dll"
#define WRL_BASEDLL				L"ZbaBase.dll"
#define WRL_HTTPDLL				L"ZbaHttp.dll"
#define WRL_APPLETDLL			L"ZbaApplet.dll"
#define WRL_ENGINEDLL_CSHARP	L"Interop.ZbaEngine.dll"
#define WRL_BASEDLL_CSHARP		L"Interop.ZbaBase.dll"
#define WRL_APPLETDLL_CSHARP	L"Interop.ZbaApplet.dll"
/// �����HOOK֧�ֿ�
#define WRL_BROWSERDLL			L"ZbaBrowser.dll"
#else
/// ƽ̨����֧�ֿ�
#define WRL_ENGINEDLL			L"PageHiEngine.dll"
#define WRL_BASEDLL				L"PageHiBase.dll"
#define WRL_HTTPDLL				L"PageHiHttp.dll"
#define WRL_APPLETDLL			L"PageHiApplet.dll"
#define WRL_ENGINEDLL_CSHARP	L"Interop.PageHiEngine.dll"
#define WRL_BASEDLL_CSHARP		L"Interop.PageHiBase.dll"
#define WRL_APPLETDLL_CSHARP	L"Interop.PageHiApplet.dll"
/// �����HOOK֧�ֿ�
#define WRL_BROWSERDLL			L"PageHiBrowser.dll"
#endif
#endif

#define	WRL_7ZAPP				L"7Z.exe"
#define	WRL_BUTTRAPDLL			L"BugTrap.dll"
#define	WRL_WINDESKTOP			L"explorer.exe"
#define	WRL_WINWORD				L"winword.exe"
#define	WRL_WINEXCEL			L"excel.exe"
#define	WRL_WINPPT				L"powerpnt.exe"
#define	WRL_WINOUTLOOK			L"outlook.exe"

#define	WRL_WINWPSTEXT			L"wps.exe"
#define	WRL_WINWPSET			L"et.exe"
#define	WRL_WINWPSPPT			L"wpp.exe"
#define	WRL_WINWPSPDF			L"wpspdf.exe"

#define	WRL_WINYZTEXT			L"yozowp.exe"
#define	WRL_WINYZET				L"yozoss.exe"
#define	WRL_WINYZPPT			L"yozopg.exe"

#define	WRL_WINACAD				L"acad.exe"
#define	WRL_WINSWCAD			L"sldworks.exe"
#define	WRL_CATIACAD			L"cnext.exe"
#define	WRL_PROECAD				L"proe.exe"
#define	WRL_ZWCAD				L"zwcad.exe"

/// ��������ﶼ��Сд�����¹��������
#define WRL_IE					L"iexplore.exe"
#define WRL_NEWEDGE				L"msedge.exe"
#define WRL_CHROME				L"chrome.exe"
#define WRL_CHROMIUM			L"chromium.exe"
#define WRL_FIREFOX				L"firefox.exe"
#define WRL_OPERA				L"opera.exe"
#define WRL_VIVALDI				L"vivaldi.exe"
#define WRL_BRAVE				L"brave.exe"
#define WRL_YNADEX				L"browser.exe"

/// ���������
#define WRL_360CHROME			L"360chrome.exe"
#define WRL_360CHROMEX			L"360chromex.exe"
#define WRL_360SE				L"360se.exe"
#define WRL_360AI				L"360aibrowser.exe"
#define WRL_360GAME				L"360gt.exe"
#define WRL_360ENTSE			L"360ent.exe"
#define WRL_CMSBROWSER			L"cmsbrowser.exe"
#define WRL_QQ					L"qqbrowser.exe"
#define WRL_WECHATEXE			L"wechat.exe"
#define WRL_WECHATAPP			L"wechatappex.exe"
#define WRL_HUAWEI				L"huaweibrowser.exe"
#define WRL_DOUBAO				L"doubao.exe"
#define WRL_SOGOU				L"sogouexplorer.exe"
#define WRL_GTJA				L"gtjabrowser.exe"
#define WRL_QIANXIN				L"qaxbrowser.exe"
#define WRL_HAITAI				L"htbrowser.exe"
#define WRL_LENOVO				L"slbrowser.exe"
#define WRL_LIEBAO				L"liebao.exe"
#define WRL_MAXTHON				L"maxthon.exe"
#define WRL_QUARK				L"quark.exe"
#define WRL_DOUBLECORE			L"chromecore.exe"
#define WRL_GTJA				L"gtjabrowser.exe"

/// IEС����
#define WRL_IEAPPLET			L"IEApplet.exe"
/// IE��ǩС����
#define WRL_IENEWTAB			L"IENewTab.exe"

/// VLC��ҳ������
#define WRL_VIDEO_VLCWEBPLAYER	L"VlcWebPlayer.exe"
/// RTSP��������ҳ������
#define WRL_VIDEO_RTSPWEBPLAYER	L"VideoWebPlayer.exe"

#ifndef WRL_VRSION_OVERSEAS
/// ԭ����ҳ����С����
#define WRL_VIDEO_HKWEBPLAYER	L"HKWebPlayer.exe"

/// ��Ƶ������С����
#ifdef WRL_VRSION_STANDALONE
#define WRL_VIDEO_PROXYPLAYER	L"VideoProxyPlayerS.exe"
#else
#define WRL_VIDEO_PROXYPLAYER	L"VideoProxyPlayer.exe"
#endif
#else
/// ԭ����ҳ����С����
#define WRL_VIDEO_HKWEBPLAYER	L"PHWebPlayer.exe"

/// ��Ƶ������С����
#ifdef WRL_VRSION_STANDALONE
#define WRL_VIDEO_PROXYPLAYER	L"PHVideoProxyPlayerS.exe"
#else
#define WRL_VIDEO_PROXYPLAYER	L"PHVideoProxyPlayer.exe"
#endif
#endif
/// ԭ�����ſؼ����Գ���
#define WRL_VIDEO_NATIVEOCXTEST	L"VideoPlayerTest.exe"

#define	WRL_PID_FILEAPPLET		L"199BB8A7-9DD5-41F5-AE9D-2AA94300B0B3"	/// �ļ�����С����
#define	WRL_PID_NETFILEPID		L"762C3400-B3E5-4F00-8AA7-18E00F13E414"	/// �����ļ�����
#define	WRL_PID_LOCALFILEPID	L"D325C871-AB46-479B-B20E-1D861D26CA89"	/// �����ļ�����

///////////////////////////// �������� ////////////////////////////////////

#ifndef GWL_USERDATA
#define GWL_USERDATA				(-21)
#endif

#ifndef GWL_HWNDPARENT
#define GWL_HWNDPARENT				(-8)
#endif

#ifndef KILO_DIGEST_LENGTH
#define KILO_DIGEST_LENGTH			1024
#endif

/// ��·����ϵͳĬ��260
#define MAX_PATH_NEW				1024

#ifndef _WIN64
/// 64λ֧�ֺ�������
typedef BOOL ( __stdcall *lpWow64RevertWow64FsRedirection)(PVOID OldValue);
typedef BOOL ( __stdcall *lpWow64DisableWow64FsRedirection)(PVOID *OldValue);
#endif

/// ���ϵͳ��Ϣ
typedef void ( __stdcall *lpFN_GNSI)(LPSYSTEM_INFO);
/// �жϽ����Ƿ�������64λϵͳ
typedef BOOL ( __stdcall *lpIsWow64Process)(HANDLE, PBOOL);
/// ���ϵͳ�汾��RtlGetVersion��ԭ��
typedef BOOL (__stdcall *lpGetVersion)(PRTL_OSVERSIONINFOW povi);
/// ���SID���ȣ�RtlLengthSid��ԭ��
typedef ULONG (__stdcall *lpRtlLengthSid)(PSID Sid);
/// ע����ѯ
typedef ULONG (__stdcall *lpNtQueryKey)(HANDLE,int,PVOID,ULONG,PULONG);

/// ����๤��������������
typedef HRESULT ( __stdcall LPGetClassObject)(REFCLSID,REFIID,LPVOID*);

typedef void (WINAPI *LPWTSFreeMemory)(PVOID pMemory);

/// ��Ļ�������
typedef BOOL (WINAPI *LPGetWindowDisplayAffinity)(HWND hWnd,DWORD *pdwAffinity);
typedef BOOL (WINAPI *LPSetWindowDisplayAffinity)(HWND hWnd,DWORD dwAffinity);

//////////////////////////////////////////////////////////////////////////////////////////////////

/// �ַ���vector
typedef std::vector		<CString>				CSTRING_VECTOR;
/// �ַ���list
typedef std::list		<CString>				CSTRING_LIST;
/// �ַ������Զ�
typedef std::pair		<CString,CString>		CSTRING_PAIR;
/// �������Զ�
typedef std::pair		<ULONG_PTR,ULONG_PTR>	NUMBER_PAIR;
/// �����ַ�����
typedef std::pair		<ULONG_PTR,CString>		NUMBERSTRING_PAIR;

/// �ַ������Զ��б�
typedef std::vector		<CSTRING_PAIR>			PAIRSTRING_VECT;
/// �������Զ��б�
typedef std::vector		<NUMBER_PAIR>			PAIRNUMBER_VECT;
/// �����ַ������Զ��б�
typedef std::vector		<NUMBERSTRING_PAIR>		NUMBERSTRING_VECT;

/// �ַ�������
typedef std::map		<CString,CString>		CSTRING_MAP;
/// ���弯��
typedef std::map		<CString,CComVariant>	VARIANT_MAP;
/// �ַ����;������
typedef std::map		<CString,ULONG_PTR>		STRINGULONG_MAP;
/// �����ͺ��ַ�������
typedef std::map		<ULONG_PTR,CString>		ULONGSTRING_MAP;
/// ��ֵvector
typedef std::vector		<ULONG_PTR>				NUMBER_VECTOR;
/// �����μ���
typedef std::map		<ULONG_PTR,ULONG_PTR>	LONGNUMBER_MAP;
/// ���μ���
typedef std::map		<int,int>				INTNUMBER_MAP;

////////////////////////////////////////////////////////////////////////////////////
