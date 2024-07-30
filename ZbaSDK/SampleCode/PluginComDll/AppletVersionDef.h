#pragma once

///////////////////////////// 版本定义 ///////////////////////////////////
/// 定义单机版 无授权服务器
//#define					WRL_VRSION_STANDALONE
/// 定义网络版
#define						WRL_VRSION_NET
/// 定义海外版
//#define					WRL_VRSION_OVERSEAS
/// 定义云原生版
//#define					WRL_VRSION_REMOTEAPP

/// 定义发布日期
#define	BUILD_VERSION_DAY	L"2024.07.29"

/// 定义版本
#ifdef WRL_VRSION_STANDALONE
#define	APP_VERSION_MAIN	1
/// 定义次版本号
#define	APP_VERSION_MINOR	5
/// 定义小版本号
#define	APP_VERSION_SMALL	16
/// 定义编译版本号
#define	APP_VERSION_BUILD	2
#endif

#ifdef WRL_VRSION_NET
#define	APP_VERSION_MAIN	2
/// 定义次版本号
#define	APP_VERSION_MINOR	2
/// 定义小版本号
#define	APP_VERSION_SMALL	16
/// 定义编译版本号
#define	APP_VERSION_BUILD	2
#endif
