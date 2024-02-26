// PluginWinExe.cpp : main source file for PluginWinExe.exe
//

#include "stdafx.h"
#include "resource.h"
#include "MainDlg.h"
#include "WrlRegKey.h"

#ifdef WRL_VRSION_OVERSEAS
CString				g_strLang = L"ENG";
#else
CString				g_strLang = L"CHS";
#endif

CAppModule _Module;

void InitBrowerConfig()
{
	/// ʹ��API����IsHungAppWindow�������жϴ����Ƿ��Ѿ�ֹͣ��Ӧ
	TCHAR szPath[MAX_PATH];
	::memset(szPath,0,MAX_PATH*sizeof(TCHAR));
	::GetModuleFileName(NULL,szPath,MAX_PATH);
	CString strFileName(szPath);
	int nFind = strFileName.ReverseFind(_T('\\'));
	if(-1 != nFind)
		strFileName.Delete(0,nFind+1);

	CString strRegPath(_T("Software\\Microsoft\\Internet Explorer\\Main\\FeatureControl"));
	CWrlRegKey reg(strRegPath,_T("FEATURE_TABBED_BROWSING"),HKEY_CURRENT_USER,KEY_WRITE);
	DWORD dwRet = reg.DelKeyName(strFileName);

	/// �����¼���ȡ����ʧ�����⣬����֧��IE9������Ա�������
	reg.NewRegPath(strRegPath,_T("FEATURE_BROWSER_EMULATION"),HKEY_CURRENT_USER,KEY_WRITE);
	reg.SetRegDwordVal(strFileName,9000);

	reg.NewRegPath(strRegPath,_T("FEATURE_LOCALMACHINE_LOCKDOWN"),HKEY_CURRENT_USER,KEY_WRITE);
	dwRet = reg.DelKeyName(strFileName);

	/// ��������
	dwRet = -1;
	reg.NewRegPath(_T("Software\\Microsoft\\Internet Explorer"),_T("Zoom"),HKEY_CURRENT_USER,KEY_WRITE|KEY_READ);
	if(reg.GetRegDwordVal(_T("ZoomDisabled"),dwRet))
		reg.SetRegDwordVal(_T("ZoomDisabled"),0);
}

int WINAPI _tWinMain(HINSTANCE hInstance, HINSTANCE /*hPrevInstance*/, LPTSTR lpstrCmdLine, int /*nCmdShow*/)
{
//  If you are running on NT 4.0 or higher you can use the following call instead to 
//  make the EXE free threaded. This means that calls come in on a random RPC thread.
	HRESULT hRes = ::CoInitializeEx(NULL, COINIT_APARTMENTTHREADED);
	ATLASSERT(SUCCEEDED(hRes));
	hRes = CoInitializeSecurity( NULL, -1, NULL, NULL, 
		RPC_C_AUTHN_LEVEL_DEFAULT, RPC_C_IMP_LEVEL_IMPERSONATE,NULL,EOAC_NONE,NULL);

	AtlInitCommonControls(ICC_BAR_CLASSES|ICC_DATE_CLASSES);	// add flags to support other controls

	hRes = _Module.Init(NULL, hInstance);
	ATLASSERT(SUCCEEDED(hRes));

	AtlAxWinInit();

	int nRet = 0;
	// BLOCK: Run application
	{
		/// ���������д��ݵĿ�ʼ�����˿ڣ�ͬʱ����PID����(����еĻ�)
		CString strCmd(lpstrCmdLine);
		if(L'\"' == strCmd.GetAt(0))
			strCmd.Delete(0);
		if(strCmd.Right(1) == L'\"')
			strCmd.Delete(strCmd.GetLength()-1);
		CSTRING_MAP mapPara;
		int nFind = strCmd.Find(L"&");
		while(-1 != nFind)
		{
			CString strPara(strCmd.Left(nFind));
			strCmd.Delete(0,nFind+1);
			nFind = strPara.Find(L"=");
			ATLASSERT(-1 != nFind);
			CString strParaName(strPara.Left(nFind));
			strPara.Delete(0,nFind+1);
			mapPara[strParaName] = strPara;
			strPara.Empty();
			strParaName.Empty();
			nFind = strCmd.Find(L"&");
		}
		if(strCmd.GetLength())
		{
			nFind = strCmd.Find(L"=");
			ATLASSERT(-1 != nFind);
			CString strParaName(strCmd.Left(nFind));
			strCmd.Delete(0,nFind+1);
			mapPara[strParaName] = strCmd;
			strCmd.Empty();
			strParaName.Empty();
		}

		/// ���������
		InitBrowerConfig();

		CMainDlg dlgMain;
		dlgMain.SetListenPara(mapPara);
		nRet = (int)dlgMain.DoModal();
	}
	AtlAxWinTerm();
	_Module.Term();
	::CoUninitialize();

	return nRet;
}
