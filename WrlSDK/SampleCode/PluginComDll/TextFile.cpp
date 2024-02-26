// TextFile.cpp : CTextFile ��ʵ��

#include "stdafx.h"
#include "TextFile.h"
#include "BaseFuncLib.h"

// CTextFile
STDMETHODIMP CTextFile::RecText(BSTR bstrContent)
{
	// TODO: Add your implementation code here
	if(NULL == bstrContent || NULL == m_spiSocketConnect)
	{
		return E_POINTER;
	}
	HRESULT hRet = m_spiSocketConnect->put_ActiveTime(COleDateTime::GetCurrentTime().m_dt);

	/// �봦���յ����ı���Ϣ��������ʾֱ�ӻظ�ԭ����
	hRet = m_spiSocketConnect->AsynSendText(bstrContent,NULL);
	ATLASSERT(SUCCEEDED(hRet));
	/// Ҳ����ֱ�ӷ��Ͷ�����������������Ѷ����������б�����ٴ���
//	BYTE szContent[] = "TestByte";
//	hRet = m_spiSocketConnect->AsynSendByte(szContent,strlen((char*)szContent),NULL);
	return hRet;
}

ATL::CString CTextFile::GetFileFolderPath(int nFoldID)
{
	ATL::CString strSpecialPath;
	if(NULL == m_hLoadDll)
		m_hLoadDll = LoadLibrary(L"Shell32.dll");
	if(NULL == m_hLoadDll)
		return strSpecialPath;
	if(NULL == m_pGetFolderPath)
		m_pGetFolderPath = (lpSHGetFolderPath)GetProcAddress(m_hLoadDll,"SHGetSpecialFolderPathW"); 	
	if(NULL == m_pGetFolderPath)
		return strSpecialPath;
	TCHAR szSpecialPath[MAX_PATH];
	::memset(szSpecialPath,0, MAX_PATH *sizeof(TCHAR));
	BOOL bGetFlag = m_pGetFolderPath(NULL,szSpecialPath,nFoldID,TRUE);
	if(!bGetFlag)
	{
		CBaseFuncLib::WriteLastLogToFile(::GetLastError(),L"GetFileFolderPath");
		return _T("");
	}
	strSpecialPath = szSpecialPath;
	///·�����涼��"\"
	if(!strSpecialPath.IsEmpty() && 0 != strSpecialPath.Right(1).CompareNoCase(_T("\\")))
		strSpecialPath+=_T("\\");
	return strSpecialPath;
}

STDMETHODIMP CTextFile::RecJson(ULONG nReqID,BSTR bstrReqName,BSTR bstrContent)
{
	// TODO: Add your implementation code here
	ATLASSERT(NULL != m_spiSocketConnect);
	if(NULL == bstrContent || NULL == m_spiSocketConnect)
		return E_POINTER;
	m_spiSocketConnect->put_ActiveTime(COleDateTime::GetCurrentTime().m_dt);
	IJsonServicePtr spiJsonService = NULL;
	HRESULT hRet = spiJsonService.CreateInstance(__uuidof(JsonService));
	if(NULL == spiJsonService)
		return hRet;/// ����JSON����������ʧ��
	VARIANT_BOOL bLoadFlag = VARIANT_FALSE;
	spiJsonService->put_CodingType(CODINGTYPE_US2);
	hRet = spiJsonService->ParseString(bstrContent,&bLoadFlag);
	if(VARIANT_FALSE == bLoadFlag)
	{
		spiJsonService = NULL;
		return hRet;
	}
	/// �봦���յ�����ͨJSON���ݰ�
	/// �������������������Ӧ
	CString strReqName(bstrReqName);
	if(0 == strReqName.CompareNoCase(L"Demo_SetFilePath"))
	{
		CComBSTR bstrVal;
		/// ֱ������·��
		hRet = spiJsonService->GetStringValue(CComBSTR(L"Path"),&bstrVal);
		if(bstrVal.Length())
		{
			m_strFilePath = bstrVal.m_str;
			m_strFilePath.Replace(L"/",L"\\");
			bstrVal.Empty();
		}
		/// ָ��·������������·��
		CComVariant varType;
		hRet = spiJsonService->GetVariantValue(CComBSTR(L"Type"),&varType);
		if(SUCCEEDED(hRet))
		{
			varType.ChangeType(VT_I4);
			m_strFilePath = GetFileFolderPath(varType.iVal);
			varType.Clear();
		}
		CString strReturn,strPath(m_strFilePath);
		strPath.Replace(L"\\",L"/");
		strReturn.Format(_T("{\"rid\":%ld,\"data\":{\"Path\":\"%s\"}}"), \
			nReqID,strPath);
		m_spiSocketConnect->AsynSendText(CComBSTR(strReturn),NULL);	
	}
	else if(0 == strReqName.CompareNoCase(L"Demo_WriteFile"))
	{
		CString strFilePath = m_strFilePath;
		if(strFilePath.GetLength() < 3)
			strFilePath = GetFileFolderPath(CSIDL_COMMON_DESKTOPDIRECTORY);
		CComBSTR bstrVal;
		spiJsonService->GetStringValue(CComBSTR(L"Name"),&bstrVal);;
		strFilePath += bstrVal.m_str;
		bstrVal.Empty();
		spiJsonService->GetStringValue(CComBSTR(L"Content"),&bstrVal);;
		CString strContent = bstrVal.m_str;
		bstrVal.Empty();

		CTextFileWrite WriteFile(strFilePath);
		WriteFile.Write(strContent);
		WriteFile.Close();
		CString strReturn;
		strContent.Replace(L"\"",L"\\\"");
		strFilePath.Replace(L"\\",L"/");
		strReturn.Format(_T("{\"rid\":%ld,\"data\":{\"Content\":\"%s\"}}"), \
			nReqID,strFilePath + L" �ļ�д�����");
		m_spiSocketConnect->AsynSendText(CComBSTR(strReturn),NULL);
	}
	else if(0 == strReqName.CompareNoCase(L"Demo_ReadFile"))
	{
		CString strFilePath = m_strFilePath;
		if(strFilePath.GetLength() < 3)
			strFilePath = GetFileFolderPath(CSIDL_COMMON_DESKTOPDIRECTORY);
		CComBSTR bstrVal;
		spiJsonService->GetStringValue(CComBSTR(L"Name"),&bstrVal);;
		strFilePath += bstrVal.m_str;
		bstrVal.Empty();

		CString strReturn;
		CTextFileRead ReadFile(strFilePath);
		string strLine;
		while(ReadFile.ReadLine(strLine))
		{
			if(!strLine.length())
				continue;/// ���в�����
			strReturn.Empty();
			strReturn.Format(_T("{\"rid\":%ld,\"data\":{\"ReadLine\":\"%s\"}}"), \
				nReqID,CString(strLine.c_str()));
			m_spiSocketConnect->AsynSendText(CComBSTR(strReturn),NULL);
			strLine.clear();
		}
		ReadFile.Close();
		strReturn.Empty();
		strReturn.Format(_T("{\"rid\":%ld,\"data\":{\"End\":\"%s\"}}"), \
			nReqID,L"��ȡ���");
		m_spiSocketConnect->AsynSendText(CComBSTR(strReturn), NULL);
	}
	else
	{
		CString strReturn,strContent(bstrContent);
		strContent.Replace(L"\"",L"\\\"");
		strReturn.Format(L"{\"rid\":%ld,\"data\":{\"Req\":\"%s\",\"Content\":\"%s\",\"Status\":\"��ʶ�������\"}}",\
			nReqID,strReqName,strContent);
		m_spiSocketConnect->AsynSendText(CComBSTR(strReturn), NULL);
	}
	return S_OK;
}