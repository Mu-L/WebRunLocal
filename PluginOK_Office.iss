; �ű��� Inno Setup �ű��� ���ɣ�
; �йش��� Inno Setup �ű��ļ�����ϸ��������İ����ĵ���

#define MyAppName "PageHiOfice��ҳ���"
#define MyAppVersion "2.2.16.10"
#define MyAppPublisher "�ɶ�����������޹�˾"
#define MyAppURL "http://www.zorrosoft.com/"
#define MyAppExeName "ZbaSetup.exe"

[Setup]
; ע: AppId��ֵΪ������ʶ��Ӧ�ó���
; ��ҪΪ������װ����ʹ����ͬ��AppIdֵ��
; (��Ҫ�����µ� GUID�����ڲ˵��е�� "����|���� GUID"��)
AppId={{B3D200BD-9038-4F89-8172-F894F61B8EA2}
AppName={#MyAppName}
AppVersion={#MyAppVersion}
;AppVerName={#MyAppName} {#MyAppVersion}
AppPublisher={#MyAppPublisher}
AppPublisherURL={#MyAppURL}
AppSupportURL={#MyAppURL}
AppUpdatesURL={#MyAppURL}
DefaultDirName={pf}\PageHiOffice
DefaultGroupName={#MyAppName}
AllowNoIcons=yes
; �������޸�Ϊʵ�ʵ�·����
LicenseFile=E:\Release\Gitcode\pluginok\PageHiOffice\license.txt
; ������ȡ��ע�ͣ����ڷǹ���װģʽ�����У���Ϊ��ǰ�û���װ����
PrivilegesRequired=admin
OutputDir=E:\Release
OutputBaseFilename=PageHiOfficeIns
Compression=lzma
SolidCompression=yes
WizardStyle=modern

[Languages]
Name: "chinesesimp"; MessagesFile: "compiler:Default.isl"

[Files]
Source: "E:\Release\Gitcode\pluginok\PageHiOffice\*"; DestDir: "{app}"; Flags: ignoreversion recursesubdirs createallsubdirs
; ע��: ��Ҫ���κι���ϵͳ�ļ���ʹ�á�Flags: ignoreversion��

[Icons]
Name: "{group}\{cm:UninstallProgram,{#MyAppName}}"; Filename: "{uninstallexe}"

[Run]
Filename: "{app}\ZbaSetup.exe";Parameters: "/S /I";Description: "��װ����";StatusMsg:"���ڰ�װ�������Ժ�..."

[UninstallRun]
Filename: "{app}\ZbaSetup.exe";Parameters: "/S /U";StatusMsg:"����ֹͣ����ж�أ����Ժ�..."

