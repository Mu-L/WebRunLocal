; �ű��� Inno Setup �ű��� ���ɣ�
; �йش��� Inno Setup �ű��ļ�����ϸ��������İ����ĵ���

#define MyAppName "PageHiCAD��ҳ���"
#define MyAppVersion "2.2.16.7"
#define MyAppPublisher "�ɶ�����������޹�˾"
#define MyAppURL "http://www.zorrosoft.com/"
#define MyAppExeName "ZbaSetup.exe"

[Setup]
; ע: AppId��ֵΪ������ʶ��Ӧ�ó���
; ��ҪΪ������װ����ʹ����ͬ��AppIdֵ��
; (��Ҫ�����µ� GUID�����ڲ˵��е�� "����|���� GUID"��)
AppId={{68C5128A-ACC0-4869-BFC5-48C056E38CAB}
AppName={#MyAppName}
AppVersion={#MyAppVersion}
;AppVerName={#MyAppName} {#MyAppVersion}
AppPublisher={#MyAppPublisher}
AppPublisherURL={#MyAppURL}
AppSupportURL={#MyAppURL}
AppUpdatesURL={#MyAppURL}
DefaultDirName={pf}\PageHiCAD
DefaultGroupName={#MyAppName}
AllowNoIcons=yes
; �������޸�Ϊʵ�ʵ�·����
LicenseFile=E:\Release\Gitcode\pluginok\PageHiCAD\license.txt
; ������ȡ��ע�ͣ����ڷǹ���װģʽ�����У���Ϊ��ǰ�û���װ����
PrivilegesRequired=admin
OutputDir=E:\Release
OutputBaseFilename=PageHiCADIns
Compression=lzma
SolidCompression=yes
WizardStyle=modern

[Languages]
Name: "chinesesimp"; MessagesFile: "compiler:Default.isl"

[Files]
Source: "E:\Release\Gitcode\pluginok\PageHiCAD\*"; DestDir: "{app}"; Flags: ignoreversion recursesubdirs createallsubdirs
; ע��: ��Ҫ���κι���ϵͳ�ļ���ʹ�á�Flags: ignoreversion��

[Icons]
Name: "{group}\{cm:UninstallProgram,{#MyAppName}}"; Filename: "{uninstallexe}"

[Run]
Filename: "{app}\ZbaSetup.exe";Parameters: "/S /I";Description: "��װ����";StatusMsg:"���ڰ�װ�������Ժ�..."

[UninstallRun]
Filename: "{app}\ZbaSetup.exe";Parameters: "/S /U";StatusMsg:"����ֹͣ����ж�أ����Ժ�..."

