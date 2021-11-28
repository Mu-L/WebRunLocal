/**
 * @file WRLRegKey.h
 *
 * Copyright (c) 2013-?,�ɶ�����������޹�˾
 * All rights reserved.
 *
 * @ingroup 
 *
 * @brief ע����װ
 *
 *
 *
 * @version 
 *
 * @date 2020-07-13
 *
 * @author WZH
 *
 * @history 
 *
 */
// WRLRegKey.h : ע������ͷ�ļ�����
//

#pragma once

#include "WRLBaseDef.h"

/// �����Ʒ��ע����еİ�װ·��
#define PRODUCT_COMMAN_INSPATH		L"InsPath"
/// �����Ʒ��ע����е����汾
#define PRODUCT_COMMAN_MAINVERNAME	L"MainVer"
/// �����Ʒ��ע����еĴΰ汾
#define PRODUCT_COMMAN_MINIVERNAME	L"MiniVer"
/// �����Ʒ��ע����е�С�汾
#define PRODUCT_COMMAN_SMALLVERNAME	L"SmallVer"
/// �����Ʒ��ע����еı���汾
#define PRODUCT_COMMAN_BUILDVERNAME	L"BuildVer"
/// ����ʹ�õ�����
#define PRODUCT_COMMAN_LANGUAGE		L"Language"
/// �����Ʒ��ע����еİ�װ����
#define PRODUCT_COMMAN_INSLANG		L"InsLang"

class CWrlRegKey : public CRegKey
{
public:
	CWrlRegKey(const CString& strMainRegPath = COMPANY_REGPATH,\
		const CString& strChildName = PRODUCT_REGNODENAME, \
		HKEY hKey = HKEY_CURRENT_USER,REGSAM samDesired = KEY_ALL_ACCESS);

	virtual ~CWrlRegKey(void)
	{
		Close();
	}

	BOOL IsOpen()
	{
		return m_bOpenFlag;
	}

	BOOL NewRegPath(const CString& strMainRegPath = COMPANY_REGPATH,\
		const CString& strChildName = PRODUCT_REGNODENAME,\
		HKEY hKey = HKEY_CURRENT_USER,REGSAM samDesired = KEY_ALL_ACCESS);

	BOOL GetRegStringVal(const CString& strKeyName,CString& strKeyValue);

	BOOL SetRegStringVal(const CString& strKeyName,const CString& strKeyValue);

	BOOL GetRegDwordVal(const CString& strKeyName,DWORD& dwKeyValue);

	BOOL SetRegDwordVal(const CString& strKeyName,DWORD dwKeyValue);

	BOOL DelKeyName(const CString& strKeyName);

	DWORD GetLastErr()
	{
		return m_dwLastErr;
	}

	virtual void Close();

protected:

	DWORD	m_dwLastErr;

	BOOL	m_bOpenFlag;
};
