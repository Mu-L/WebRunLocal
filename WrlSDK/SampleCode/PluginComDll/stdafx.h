// stdafx.h : ��׼ϵͳ�����ļ��İ����ļ���
// ���Ǿ���ʹ�õ��������ĵ�
// �ض�����Ŀ�İ����ļ�

#pragma once

#ifndef STRICT
#define STRICT
#endif

#include "targetver.h"

#define _ATL_APARTMENT_THREADED

#define _ATL_NO_AUTOMATIC_NAMESPACE

#define _ATL_CSTRING_EXPLICIT_CONSTRUCTORS	// ĳЩ CString ���캯��������ʽ��

#define ATL_NO_ASSERT_ON_DESTROY_NONEXISTENT_WINDOW

#include "resource.h"
#include <atlbase.h>
#include <atlcom.h>
#include <atlctl.h>
#include <atlstr.h>

using namespace ATL;

#define _CRT_SECURE_NO_WARNINGS

#pragma warning( disable : 4100 )
#pragma warning( disable : 4510 )
#pragma warning( disable : 4610 )
#pragma warning( disable : 4206 )

#include "AppletVersionDef.h"
#include "WRLBaseDef.h"

#ifdef WRL_VRSION_STANDALONE
#ifndef WRL_VRSION_REMOTEAPP
#import "..\\..\\..\\Release\\Win32\\WrlEngine.dll" no_namespace, raw_interfaces_only, raw_native_types, named_guids
#import "..\\..\\..\\Release\\Win32\\WrlBase.dll" no_namespace, raw_interfaces_only, raw_native_types, named_guids
#else
#import "..\\..\\..\\Release\\Win32\\PHEngine.dll" no_namespace, raw_interfaces_only, raw_native_types, named_guids
#import "..\\..\\..\\Release\\Win32\\PHBase.dll" no_namespace, raw_interfaces_only, raw_native_types, named_guids
#endif
#endif

#ifdef WRL_VRSION_NET
#ifndef WRL_VRSION_REMOTEAPP
#import "..\\..\\..\\Release\\Win32\\ZbaEngine.dll" no_namespace, raw_interfaces_only, raw_native_types, named_guids
#import "..\\..\\..\\Release\\Win32\\ZbaBase.dll" no_namespace, raw_interfaces_only, raw_native_types, named_guids
#else
#import "..\\..\\..\\Release\\Win32\\PageHiEngine.dll" no_namespace, raw_interfaces_only, raw_native_types, named_guids
#import "..\\..\\..\\Release\\Win32\\PageHiBase.dll" no_namespace, raw_interfaces_only, raw_native_types, named_guids
#endif
#endif