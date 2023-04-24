"use strict";(self.webpackChunkwiki_1=self.webpackChunkwiki_1||[]).push([[8809],{3905:(n,e,t)=>{t.d(e,{Zo:()=>u,kt:()=>h});var r=t(7294);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var l=r.createContext({}),c=function(n){var e=r.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},u=function(n){var e=c(n.components);return r.createElement(l.Provider,{value:e},n.children)},d="mdxType",p={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(n,e){var t=n.components,o=n.mdxType,a=n.originalType,l=n.parentName,u=s(n,["components","mdxType","originalType","parentName"]),d=c(t),m=o,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return t?r.createElement(h,i(i({ref:e},u),{},{components:t})):r.createElement(h,i({ref:e},u))}));function h(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=n,s[d]="string"==typeof n?n:o,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4413:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=t(7462),o=(t(7294),t(3905));const a={title:"Autohotkey \u811a\u672c",tags:["autohotkey"],date:new Date("2016-08-10T22:27:26.000Z"),toc_min_heading_level:2,toc_max_heading_level:5},i=void 0,s={unversionedId:"autohotkey",id:"autohotkey",title:"Autohotkey \u811a\u672c",description:"autohotkey note & \u6211\u7684\u811a\u672c\u96c6",source:"@site/docs/autohotkey.md",sourceDirName:".",slug:"/autohotkey",permalink:"/docs/autohotkey",draft:!1,editUrl:"https://github.com/xiaoyureed/xiaoyureed.github.io/tree/main/docs/autohotkey.md",tags:[{label:"autohotkey",permalink:"/docs/tags/autohotkey"}],version:"current",frontMatter:{title:"Autohotkey \u811a\u672c",tags:["autohotkey"],date:"2016-08-10T22:27:26.000Z",toc_min_heading_level:2,toc_max_heading_level:5},sidebar:"tutorialSidebar",previous:{title:"Android \u5f00\u53d1",permalink:"/docs/android"},next:{title:"blockchain\u533a\u5757\u94fe",permalink:"/docs/blockchain"}},l={},c=[],u={toc:c},d="wrapper";function p(n){let{components:e,...t}=n;return(0,o.kt)(d,(0,r.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("div",{align:"center"},"autohotkey note & \u6211\u7684\u811a\u672c\u96c6 https://greyli.com/autohotkey-automate-your-life/ \u5f00\u673a\u542f\u52a8\u6587\u4ef6\u5939 # r ---\x3e shell:startup"),(0,o.kt)("h1",{id:"quickstart"},"quickstart"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u70ed\u952e\uff0c run(\u76f8\u5e94\u7684\u6709RunWait xx\u8868\u793a\u7a0b\u5e8fxx\u5173\u95ed\u540e\u6267\u884c\u547d\u4ee4); eg: ",(0,o.kt)("inlineCode",{parentName:"p"},"#space::Run www.baidu.com"),"\u540c\u65f6\u6309\u4e0bwin+space\u4f1a\u8c03\u7528\u9ed8\u8ba4browser\u8bbf\u95ee\u6307\u5b9a\u5730\u5740(\u547d\u4ee4\u548c\u53d8\u91cf\u7684\u540d\u79f0\u662f\u4e0d\u533a\u5206\u5927\u5c0f\u5199\u7684)"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u4fdd\u5b58\u4e3ademo.ahk, \u53cc\u51fb\u6267\u884c; "),(0,o.kt)("li",{parentName:"ul"},"#\u8868\u793awin\u952e, space\u8868\u793a\u7a7a\u683c\u952e, \u53cc\u5192\u53f7 :: \u8868\u793a\u6bcf\u6b21\u6309\u4e0b\u6b64\u70ed\u952e\u65f6\u4f1a\u6267\u884c\u5176\u540e\u7eed\u547d\u4ee4, run\u8868\u793a\u8fd0\u884c\u540e\u9762\u7684\u8bed\u53e5,  \u6587\u6863, URL \u6216\u5feb\u6377\u65b9\u5f0f. \u8fd9\u91cc\u6709\u4e00\u4e9b\u5e38\u89c1\u793a\u4f8b",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"Run Notepad\nRun C:\\My Documents\\Address List.doc // \u5982\u679c\u7a0b\u5e8f\u6ca1\u6709\u5305\u542b\u5728env\u53d8\u91cf\u4e2d, \u9700\u8981\u6307\u5b9a\u5b8c\u6574\u7684\u8def\u5f84, \u5982Run %A_ProgramFiles%\\Winamp\\Winamp.exe;\nRun C:\\My Documents\\My Shortcut.lnk\nRun www.yahoo.com\nRun mailto:someone@somedomain.com\n"))),(0,o.kt)("li",{parentName:"ul"},"\u5176\u4ed6\u4e00\u4e9b\u4f8b\u5b50:\n",(0,o.kt)("inlineCode",{parentName:"li"},"#n::Run Notepad"),"win+n\u5524\u8d77\u8bb0\u4e8b\u672c\u7a0b\u5e8f\n",(0,o.kt)("inlineCode",{parentName:"li"},"^!c::Run calc.exe"),"ctrl+alt+c\u5524\u8d77\u6307\u5b9a\u7a0b\u5e8f"),(0,o.kt)("li",{parentName:"ul"},"\u591a\u884c\u70ed\u952e: \u6267\u884c\u591a\u884c\u547d\u4ee4, \u8bf7\u628a\u9996\u884c\u653e\u5728\u70ed\u952e\u5b9a\u4e49\u7684\u4e0b\u9762\uff0c\u4e14\u5728\u6700\u540e\u884c\u547d\u4ee4\u7684\u4e0b\u4e00\u884c\u6dfb\u52a0 return",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"#n::\nRun http://www.google.com\nRun Notepad.exe\nreturn\n"))))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u70ed\u5b57\u4e32\n",(0,o.kt)("inlineCode",{parentName:"p"},"::btw::by the way"),"\u8f93\u5165\u201cBtw\u201d\u8ddf\u7740\u7a7a\u683c\u6216\u9017\u53f7\u65f6\uff0c\u4f1a\u628a\u5b83\u66ff\u6362\u4e3a\u201cBy the way\u201d\uff1a")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u53d1\u9001\u952e\u51fb&\u9f20\u6807\u70b9\u51fb, Send \u547d\u4ee4\u53ef\u4ee5\u53d1\u9001\u952e\u51fb\u5230\u6d3b\u52a8\u7684 (\u6700\u524d\u9762\u7684) \u7a97\u53e3\nControl+Alt+S\u88ab\u8bbe\u7f6e\u4e3a\u8f93\u5165\u7b7e\u540d\u7684\u70ed\u952e"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'^!s::\nSend Sincerely,{Enter}John Smith ;;;\u53d1\u9001\u5b57\u7b26\u4e32Sincerely,{Enter}John Smith, {enter}\u8868\u793a\u6362\u884c\u952e\nSend ^c!{tab}pasted:^v ;;;\u53d1\u9001ctrl+c\u8ddf\u7740atl+tab\u952e, \u8ddf\u7740\u5b57\u7b26\u4e32 "pasted:" \u548c Control+V\nreturn\n')))),(0,o.kt)("h1",{id:"demo"},"demo"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ahk"},"; \u70ed\u952e, \u89c1 https://wyagd001.github.io/zh-cn/docs/Hotkeys.htm\n^u::\n  Send, Hahahah first demo\nReturn\n\n; \u70ed\u5b57\u4e32, \u7a7a\u683c\u5373\u51fa, \u6ce8\u610f\u672b\u5c3e\u7684\u7a7a\u683c\u4e5f\u6709\u6548\n::btw::By the Way, \n\n")),(0,o.kt)("h1",{id:"my-scripts"},"my scripts"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ahk"},'#NoEnv  ; Recommended for performance and compatibility with future AutoHotkey releases.\n; #Warn  ; Enable warnings to assist with detecting common errors.\nSendMode Input  ; Recommended for new scripts due to its superior speed and reliability.\nSetWorkingDir %A_ScriptDir%  ; Ensures a consistent starting directory.\n\n; \u4ea4\u6362win\u548cctrl\u548calt\n;LWin::LControl\n;LControl::LWin\n; LAlt::LControl\n\n;-----------------------------------\u65b9\u5411\u952e\u6620\u5c04 start--------------------------------------------------------------\nCapsLock & i::\n    Send, {up}\nreturn \n\nCapsLock & k::\n    Send, {down}\nreturn\n\nCapsLock & j::\n    Send, {left}\nreturn\n\n\nCapsLock & l::\n    Send, {right}\nreturn\n\n;-----------------------------------\u65b9\u5411\u952e\u6620\u5c04 end-------\n\n;-----------------------------------\u65b9\u5411\u952e\u9009\u62e9 start-----\n; o, p \u5355\u4e2a\u5b57\u7b26\u5de6\u53f3\u9009\u62e9, nm\u6574\u4e2a\u5355\u8bcd\u5de6\u53f3\u9009\u62e9\n\nCapsLock & o::\n    Send, +{left}\nreturn\n\nCapsLock & p::\n    Send, +{right}\nreturn\n\nCapsLock & n::\n    Send, ^+{left}\nreturn\n\nCapsLock & m::\n    Send, ^+{right}\nreturn\n\n\n\n;----------------------------------- &\u9009\u62e9 end---------\n\n; --------------------\u53f3\u8fb9alt, win\u6539\u4e3ahome\u548cend. start--------------\nRAlt::Home\nRWin::End\n\n; ------------\u5927\u5199\u9501\u5b9a & \u9000\u683c=\u5220\u9664\u4e00\u4e2a\u5355\u8bcd--------------\nCapsLock & BS::\n    Send, ^+{Left}{BS}\nreturn\n\n;---------------------------code\u4e0a\u4e0b\u79fb\u52a8(alt+i/k)--------------\n\n!i::\n    Send, !{up}\nreturn\n!k::\n    Send, !{down}\nreturn\n\n;;;;;;;;;;;;;;;;;;;;; alt + m, \u5411\u4e0b\u590d\u5236\u4e00\u884c ;;;;;;;;;;;;\n!m::\n    Send, ^!{down}\nreturn\n\n;;;;;;;;;;;;;;;;;;;;; \u6807\u7b7e\u9875\u5207\u6362 ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;\n\n!w::\n    Send, ^{Tab}\nreturn\n\n!q::\n    Send, ^+{Tab}\nreturn\n\n; D:\\sync\\\u6211\u7684\u575a\u679c\u4e91\\green\\AutoHotkeyHelp_CN\\scripts\\autohotkey.ahk\n; ctrl & shift & c ---\x3e \u590d\u5236\u6587\u4ef6\u8def\u5f84\n^+c::\n; null= \nSend ^c\nsleep,200\nclipboard=%clipboard% ;%null%\ntooltip,%clipboard%\nsleep,500\ntooltip,\nreturn\n\n; win & c ---\x3e \u590d\u523616\u8fdb\u5236\u989c\u8272 23B167\n#c::\nMouseGetPos, mouseX, mouseY\n; \u83b7\u5f97\u9f20\u6807\u6240\u5728\u5750\u6807\uff0c\u628a\u9f20\u6807\u7684 X \u5750\u6807\u8d4b\u503c\u7ed9\u53d8\u91cf mouseX \uff0c\u540c\u7406 mouseY\nPixelGetColor, color, %mouseX%, %mouseY%, RGB\n; \u8c03\u7528 PixelGetColor \u51fd\u6570\uff0c\u83b7\u5f97\u9f20\u6807\u6240\u5728\u5750\u6807\u7684 RGB \u503c\uff0c\u5e76\u8d4b\u503c\u7ed9 color\nStringRight color,color,6\n; \u622a\u53d6 color\uff08\u7b2c\u4e8c\u4e2a color\uff09\u53f3\u8fb9\u76846\u4e2a\u5b57\u7b26\uff0c\u56e0\u4e3a\u83b7\u5f97\u7684\u503c\u662f\u8fd9\u6837\u7684\uff1a#RRGGBB\uff0c\u4e00\u822c\u6211\u4eec\u53ea\u9700\u8981 RRGGBB \u90e8\u5206\u3002\u628a\u622a\u53d6\u5230\u7684\u503c\u518d\u8d4b\u7ed9 color\uff08\u7b2c\u4e00\u4e2a color\uff09\u3002\nclipboard = %color%\n; \u628a color \u7684\u503c\u53d1\u9001\u5230\u526a\u8d34\u677f\nreturn\n\n; Chrome\u6ca1\u6253\u5f00\u72b6\u6001\u65f6\u5019 \u2013> \u6253\u5f00\uff1b\u6253\u5f00\u6ca1\u6fc0\u6d3b\u72b6\u6001\u65f6\u5019 \u2013> \u6fc0\u6d3b\uff1b\u6253\u5f00\u5904\u5728\u6fc0\u6d3b\u72b6\u6001\u65f6\u5019 \u2014> \u9690\u85cf\n#CapsLock::\nIfWinNotExist ahk_class Chrome_WidgetWin_1\n{\n    Run "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe"\n    WinActivate\n}\nElse IfWinNotActive ahk_class Chrome_WidgetWin_1\n{\n    WinActivate\n}\nElse\n{\n    WinMinimize\n}\nReturn\n\n; -----------------------------------------------------\n\n; Ctrl+Shift+T \u5728\u5f53\u524d\u76ee\u5f55\u6253\u5f00cmder / git bash\nCapsLock & g::\nProcess,Exist,explorer.exe\nif (%ErrorLevel% != 0){\n    if WinActive("ahk_class CabinetWClass"){\n        path := getExplorerPath()   \n        ; MsgBox "%path%"\n        Run, git bash "%path%"\n        return\n    } ; \u5982\u679c\u5728\u684c\u9762\n    if WinActive("ahk_class WorkerW"){\n        Run ,git bash %A_Desktop%\n        return\n    }\n}\n; \u83b7\u53d6\u5f53\u524d\u8def\u5f84\u7684\u51fd\u6570\ngetExplorerPath(){\n    IfWinExist, ahk_class CabinetWClass\n    {\n        ControlGetText,address,ToolbarWindow323,ahk_class CabinetWClass\n        StringLen, length, address\n        StringRight, path, address, length-4\n        return path\n    }\n    return\n}\n\n; -----------------------------------------------------------------------\n\n; :*:string:: \u8f93\u5165\u5b8c\u540e\u76f4\u63a5\u6267\u884c\uff0c\u65e0\u9700\u7a7a\u683c\uff0c\u56de\u8f66\uff0ctab\u952e \n\n; MouseGetPos, mouseX, mouseY\n; if (%mouseY% > 1000) {\n; WheelUp::Send {Volume_Up}     ; \u5728\u4efb\u52a1\u680f\u4e0a\u6eda\u52a8\u6eda\u8f6e:\u589e\u52a0/\u51cf\u5c0f\u97f3\u91cf.\n; WheelDown::Send {Volume_Down} ;\n; }\n')),(0,o.kt)("h1",{id:"\u4f18\u79c0\u811a\u672c\u6536\u96c6"},"\u4f18\u79c0\u811a\u672c\u6536\u96c6"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'#NoEnv  ; Recommended for performance and compatibility with future AutoHotkey releases.\n; #Warn  ; Enable warnings to assist with detecting common errors.\nSendMode Input  ; Recommended for new scripts due to its superior speed and reliability.\nSetWorkingDir %A_ScriptDir%  ; Ensures a consistent starting directory.\n\n\n;url\u7f16\u7801\u89e3\u7801     \nuriEncode(str) {       f = %A_FormatInteger%       SetFormat, Integer, Hex       If RegExMatch(str, "^\\w+:/{0,2}", pr)          StringTrimLeft, str, str, StrLen(pr)       StringReplace, str, str, `%, `%25, All       Loop          If RegExMatch(str, "i)[^\\w\\.~%]", char)             StringReplace, str, str, %char%, % "%" . Asc(char), All          Else Break       SetFormat, Integer, %f%       Return, pr . str    }    uriDecode(str) {       Loop          If RegExMatch(str, "i)(?<=%)[\\da-f]{1,2}", hex)             StringReplace, str, str, `%%hex%, % Chr("0x" . hex), All          Else Break       Return, str    }     \n;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;\u5feb\u901f\u547d\u4ee4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;    \n:://g::    Run http://www.google.com     return    \n:://b::    Run http://www.baidu.com    return     \n:://s::    Run C:\\Program Files\\Everything\\Everything.exe    return     \n:://qq::    Run C:\\Program Files\\Tencent\\QQ\\Bin\\QQ.exe    return     \n:://cmd::    Run cmd    return     \n:://n::    Run notepad    return     \n:://d::    Run C:\\Program Files\\http://dict.cn\\DianDian.exe    return     \n:://e::    Run explorer    return     \n;\u6253\u5f00\u4efb\u52a1\u7ba1\u7406\u5668    \n:://t::    if WinExist Windows \u4efb\u52a1\u7ba1\u7406\u5668    WinActivate    else    Run taskmgr.exe    return     \n;\u4e00\u4e9b\u7ecf\u5e38\u8f93\u5165\u7684\u5b57\u7b26\u4e32    \n:://m::    Send babyking1949@gmail.com    return     \n;\u6253\u5f00\u7cfb\u7edf\u5c5e\u6027    \n:://sys::    Run control sysdm.cpl    return     \n;\u6253\u5f00autohotkey \u914d\u7f6e\u6587\u4ef6    \n:://ahk::    Run D:\\GreenSoft\\AutoHotKey \u4e2d\u6587\u7248\\AutoHotKey.ini    return    \n;;;;;;;;;;\u5feb\u901f\u6253\u5f00\u7a0b\u5e8f(\u5feb\u6377\u952e);;;;;;;;;;;;;;;;;;;;;;;;;     \n;\u7528google\u641c\u7d22    \n!g::    Send ^c    Run http://www.google.com/search?q=%clipboard%    return    \n;\u7528\u767e\u5ea6\u641c\u7d22    !b::    Send ^c    Run http://www.baidu.com/s?wd=%clipboard%    return     \n!t::    Send ^c     Run http://s.taobao.com/search?q=%clipboard%    return     \n;\u5feb\u901f\u6253\u5f00\u8bb0\u4e8b\u672c    #n::    If WinExist Untitled - Notepad    WinActivate    else    Run Notepad    return     \n\n;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;\u901a\u7528\u952e\u7684\u6620\u5c04;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;     \n;\u5bf9windows\u4e0b\u7684\u4e00\u4e9b\u5e38\u7528\u952e\u8fdb\u884c\u6620\u5c04,\u4e0e\u82f9\u679c\u4e0b\u7684\u4e00\u4e9b\u4e60\u60ef\u4e00\u6837(\u82f9\u679c\u4e0b\u7684\u5feb\u6377\u952e\u6709\u4e9b\u975e\u5e38\u5408\u7406:)    \n!f::Send ^f  ;\u67e5\u627e    \n!q:: !F4    ;\u9000\u51fa    \n!w::Send ^w ;\u5173\u95ed\u7f51\u9875\u7a97\u53e3    \n!r::Send #r ;\u8c03\u51facmd    \n!s::Send ^s ;\u4fdd\u5b58    \n!n::Send ^n ;\u65b0\u5efa    \n!z::Send ^z    \n;\u9009\u62e9\u6587\u5b57    \n!,::Send ^+{Left}    \n!.::Send ^+{Right}    return    \n!y:: Send+{Home}  ;\u9009\u62e9\u5f53\u524d\u4f4d\u7f6e\u5230\u884c\u9996\u7684\u6587\u5b57    \n!p:: Send +{End}   ;\u9009\u62e9\u5f53\u524d\u4f4d\u7f6e\u5230\u884c\u672b\u7684\u6587\u5b57     \n;\u9009\u62e9\u4e00\u884c    \n!a::    Send {Home}    Send +{End}    return     \n;\u9f20\u6807\u7684\u5de6\u53f3\u952e\u5b9e\u73b0\u4efb\u52a1\u5207\u6362,\u5bf9thinkpad trackpoint \u7279\u522b\u6709\u7528    \n~LButton & RButton::AltTab    \n~LButton & MButton::MsgBox,hello     \n;<\u77ed\u65f6\u95f4\u53cc\u51fbalt\u952e\u5207\u6362capslock\u952e>    \n;~ \u8bbe\u7f6e\u4e00\u4e2a\u65f6\u949f\uff0c\u6bd4\u5982400 \u6beb\u79d2\uff0c    \n;~ \u8bbe\u7f6e\u4e00\u4e2a\u8ba1\u6570\u5668\uff0cAlt_presses\uff0c\u6309\u51fb\u6b21\u6570\uff0c\u6bcf\u6b21\u54cd\u5e94\u65f6\u949f\u628a\u8ba1\u6570\u5668\u6e050\u590d\u4f4d    \n#Persistent    \n$Alt::\n    if Alt_presses > 0 ; SetTimer \u5df2\u7ecf\u542f\u52a8\uff0c\u6240\u4ee5\u6211\u4eec\u8bb0\u5f55\u6309\u952e\u3002\n    {        Alt_presses += 1        return    }\n    ;\u5426\u5219\uff0c\u8fd9\u662f\u65b0\u4e00\u7cfb\u5217\u6309\u952e\u7684\u9996\u6b21\u6309\u952e\u3002\u5c06\u8ba1\u6570\u8bbe\u4e3a 1 \u5e76\u542f\u52a8\u5b9a\u65f6\u5668\uff1a\n    Alt_presses = 1\n    SetTimer, KeyAlt, 300 ;\u5728 300 \u6beb\u79d2\u5185\u7b49\u5f85\u66f4\u591a\u7684\u6309\u952e\u3002\n    return\n    \n    KeyAlt:\n    SetTimer, KeyAlt, off\n    if Alt_presses = 1 ;\u8be5\u952e\u5df2\u6309\u8fc7\u4e00\u6b21\u3002\n    {        Gosub singleClick    }    else if Alt_presses = 2 ;\u8be5\u952e\u5df2\u6309\u8fc7\u4e24\u6b21\u3002\n    {    Gosub doubleClick    }     ;\u4e0d\u8bba\u4e0a\u9762\u54ea\u4e2a\u52a8\u4f5c\u88ab\u89e6\u53d1\uff0c\u5c06\u8ba1\u6570\u590d\u4f4d\u4ee5\u5907\u4e0b\u4e00\u7cfb\u5217\u7684\u6309\u952e\uff1a\n    Alt_presses = 0    return\n    \n    singleClick:\n    send {alt}    return\n    doubleClick:\n    if GetKeyState("Capslock", "T")\n    SetCapsLockState,off    else    SetCapsLockState,on    return     \n    ;</\u77ed\u65f6\u95f4\u53cc\u51fbalt\u952e\u5207\u6362capslock\u952e>     \n    ;copy cut paste \u7684\u5feb\u6377\u952e\n    !c::Send ^c    !x::Send ^x    !v::Send ^v\n    ;\u4e0a\u9875\u7ffb\u9875\u952e\u6620\u5c04\n    !h::Send {PgUp}    !;::Send {PgDn}    \n    ;HOME END\u952e\u6620\u5c04\n    !u:: Send {Home}      ;    !o:: Send {End}   ;    ;Alt + jkli \u5b9e\u73b0\u5bf9\u65b9\u5411\u952e\u7684\u6620\u5c04,\u5199\u4ee3\u7801\u7684\u65f6\u5019\u7070\u5e38\u6709\u7528    !j:: Send {left}    !l:: Send {right}    !i:: Send {up}    !k:: Send {down}     ;Delete Backspace\u7684\u6620\u5c04    ;!f::Send {Backspace}    !d::Send {Delete}    ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;\u901a\u7528\u952e\u7684\u6620\u5c04;(\u7ed3\u675f);;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;     ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;\u5b9e\u7528\u529f\u80fd;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;    ;win\u952e + PrintScreen\u952e\u5173\u95ed\u5c4f\u5e55    #PrintScreen::    KeyWait PrintScreen    KeyWait LWin ;\u91ca\u653e\u5de6Win\u952e\u624d\u6fc0\u6d3b\u4e0b\u9762\u7684\u547d\u4ee4    SendMessage,0x112,0xF170,2,,Program Manager ;\u5173\u95ed\u663e\u793a\u5668\u30020x112:WM_SYSCOMMAND\uff0c0xF170:SC_MONITORPOWER\u30022\uff1a\u5173\u95ed\uff0c-1\uff1a\u5f00\u542f\u663e\u793a\u5668    Return     /*    ;\u53cc\u51fb\u9f20\u6807\u53f3\u952e\u5728\u7a97\u53e3\u6700\u5927\u5316\u4e0e\u6b63\u5e38\u72b6\u6001\u4e4b\u95f4\u5207\u6362    WinStatus:=0    RButton::        KeyWait, RButton    ;\u677e\u5f00\u9f20\u6807\u53f3\u952e\u540e\u624d\u7ee7\u7eed\u6267\u884c\u4e0b\u9762\u7684\u4ee3\u7801        keyWait, RButton, D T0.15  ;\u5728 100 \u6beb\u79d2\u5185\u7b49\u5f85\u518d\u6b21\u6309\u4e0b\u9f20\u6807\u53f3\u952e\uff0c\u53ef\u4ee5\u8bbe\u7f6e\u4e00\u4e2a\u81ea\u5df1\u89c9\u5f97\u9002\u5408\u7684\u7b49\u5f85\u65f6\u95f4\u3002     If ErrorLevel            Click, Right        Else        {             if WinStatus=0    {         WinMaximize , A         WinStatus:=1    }    else    {         WinRestore ,A         WinStatus:=0    }        }    Return    !m::    if WinStatus=0    {         WinMaximize , A         WinStatus:=1    }    else    {         WinRestore ,A         WinStatus:=0    }    return     ;\u547d\u4ee4\u884ccmd\u91cc\u53ef\u4ee5ctrl v    #IfWinActive ahk_class ConsoleWindowClass    ^v::    MouseClick, Right, %A_CaretX%, %A_CaretY%,,0    send p    return     */    ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;\u5b9e\u7528\u529f\u80fd(\u7ed3\u675f);;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;     ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;<Chrome>;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;    #IfWinActive ahk_class Chrome_WidgetWin_0    !,::Send ^+{Tab}    !.::Send ^{Tab}    !1::Send ^+{Tab}    !2::Send ^{Tab}    !n::Send ^t    !/::Send ^w    !z::Send ^+t    !-::Send ^-    !=::Send ^=     ;\u9009\u62e9\u5f53\u524d\u4f4d\u7f6e\u5230\u9875\u5c3e\u7684\u6587\u5b57,\u9002\u7528\u4e8e\u6d4f\u89c8\u5668    F2::    Send ^+{End}     ;Send ^c    return     ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;<\u8d44\u6e90\u7ba1\u7406\u5668>;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;    #IfWinActive ahk_class CabinetWClass    !f::    Run C:\\Program Files\\Everything\\Everything.exe    return     ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;<Notepad>;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;    #IfWinActive ahk_class Notepad    ;!u::Send ^{Home}    ;!o::Send ^{End}    return     ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;<Eclipse>;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;    #IfWinActive,Eclipse    !.::Send ^{F8}    return     ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;<VisualStudio 2008>;;;;;;;;;;;;;;;;;;;;;;;    #IfWinActive ahk_class wndclass_desked_gsk    !/::Send ^{Tab}    !.::Send ^+{Tab}    !m::Send !+{Enter}    return     ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;<ADB>;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;     ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;<Onenote>;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;    #IfWinActive ahk_class OfficeTooltip    !u::Send ^{Home}    !o::Send ^{End}    return\n')))}p.isMDXComponent=!0}}]);