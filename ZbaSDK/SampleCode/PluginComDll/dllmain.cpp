// dllmain.cpp : DllMain ��ʵ�֡�

#include "stdafx.h"
#include "resource.h"
#include "PluginComDll_i.h"
#include "dllmain.h"
#include "xdlldata.h"

#ifdef WRL_VRSION_OVERSEAS
CString				g_strLang = L"ENG";
#else
CString				g_strLang = L"CHS";
#endif

CPluginComDllModule _AtlModule;

// DLL ��ڵ�
extern "C" BOOL WINAPI DllMain(HINSTANCE hInstance, DWORD dwReason, LPVOID lpReserved)
{
#ifdef _MERGE_PROXYSTUB
	if (!PrxDllMain(hInstance, dwReason, lpReserved))
		return FALSE;
#endif
	hInstance;
	return _AtlModule.DllMain(dwReason, lpReserved); 
}
