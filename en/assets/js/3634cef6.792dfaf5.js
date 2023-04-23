"use strict";(self.webpackChunkwiki_1=self.webpackChunkwiki_1||[]).push([[7810],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=l(t),m=a,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||s;return t?r.createElement(h,o(o({ref:n},c),{},{components:t})):r.createElement(h,o({ref:n},c))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,o=new Array(s);o[0]=m;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var l=2;l<s;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6389:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var r=t(7462),a=(t(7294),t(3905));const s={title:"Raspberry Pi as a Dev Server\u6811\u8393\u6d3e\u6298\u817e\u8bb0\u5f55",tags:["raspberrypi"],authors:"me"},o=void 0,i={permalink:"/en/blog/2016/04/09/toss-about-raspberrypi",editUrl:"https://github.com/xiaoyureed/xiaoyureed.github.io/tree/main/blog/2016-04-09-toss-about-raspberrypi/index.md",source:"@site/blog/2016-04-09-toss-about-raspberrypi/index.md",title:"Raspberry Pi as a Dev Server\u6811\u8393\u6d3e\u6298\u817e\u8bb0\u5f55",description:"\u51e0\u4e2a\u6708\u524d\u6211\u4e70\u4e86\u4e00\u4e2a\u6811\u8393\u6d3e, \u65b0\u9c9c\u52b2\u513f\u53bb\u4e86\u5c31\u4e00\u76f4\u5728\u5403\u7070, \u6700\u8fd1\u95f2\u4e0b\u6765 \u60f3\u628a\u5b83\u6253\u9020\u6210\u4e00\u4e2a\u5c0f\u670d\u52a1\u5668, \u8dd1\u4e00\u8dd1\u4e00\u4e9b\u4e71\u4e03\u516b\u7cdf\u7684\u4ee3\u7801, \u90a3\u4e48, \u8bf4\u5e72\u5c31\u5e72.",date:"2016-04-09T00:00:00.000Z",formattedDate:"April 9, 2016",tags:[{label:"raspberrypi",permalink:"/en/blog/tags/raspberrypi"}],readingTime:7.085,hasTruncateMarker:!0,authors:[{name:"Xiao Yu",title:"Unknown",url:"https://github.com/xiaoyureed",imageURL:"https://github.com/xiaoyureed.png",key:"me"}],frontMatter:{title:"Raspberry Pi as a Dev Server\u6811\u8393\u6d3e\u6298\u817e\u8bb0\u5f55",tags:["raspberrypi"],authors:"me"},prevItem:{title:"\u9020\u4e2a\u5c0f\u8f6e\u5b50 My IOC",permalink:"/en/blog/2017/02/01/create-my-own-ioc"},nextItem:{title:"\u7c7b\u51b2\u7a81\u68c0\u6d4b\ud83c\udf08",permalink:"/en/blog/2015/10/04/class-conflict-check"}},p={authorsImageUrls:[void 0]},l=[{value:"\u5b89\u88c5 Ubuntu server",id:"\u5b89\u88c5-ubuntu-server",level:2},{value:"\u914d\u7f6e raspberry pi",id:"\u914d\u7f6e-raspberry-pi",level:2},{value:"\u5b89\u88c5 docker",id:"\u5b89\u88c5-docker",level:2},{value:"\u8fd0\u884c\u73af\u5883",id:"\u8fd0\u884c\u73af\u5883",level:2},{value:"\u914d\u7f6e\u52a8\u6001\u57df\u540d\u670d\u52a1 ddns",id:"\u914d\u7f6e\u52a8\u6001\u57df\u540d\u670d\u52a1-ddns",level:2},{value:"\u901a\u8fc7 ssh\u96a7\u9053",id:"\u901a\u8fc7-ssh\u96a7\u9053",level:3},{value:"\u901a\u8fc7 frp\u670d\u52a1 \u5b9e\u73b0 \u5185\u7f51\u7a7f\u900f",id:"\u901a\u8fc7-frp\u670d\u52a1-\u5b9e\u73b0-\u5185\u7f51\u7a7f\u900f",level:3},{value:"\u8fde\u63a5\u4e0a WiFi \u4f46\u65e0\u6cd5\u4e0a\u7f51",id:"\u8fde\u63a5\u4e0a-wifi-\u4f46\u65e0\u6cd5\u4e0a\u7f51",level:2},{value:"\u5b89\u88c5 node",id:"\u5b89\u88c5-node",level:2}],c={toc:l},u="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u51e0\u4e2a\u6708\u524d\u6211\u4e70\u4e86\u4e00\u4e2a\u6811\u8393\u6d3e, \u65b0\u9c9c\u52b2\u513f\u53bb\u4e86\u5c31\u4e00\u76f4\u5728\u5403\u7070, \u6700\u8fd1\u95f2\u4e0b\u6765 \u60f3\u628a\u5b83\u6253\u9020\u6210\u4e00\u4e2a\u5c0f\u670d\u52a1\u5668, \u8dd1\u4e00\u8dd1\u4e00\u4e9b\u4e71\u4e03\u516b\u7cdf\u7684\u4ee3\u7801, \u90a3\u4e48, \u8bf4\u5e72\u5c31\u5e72."),(0,a.kt)("p",null,"\u7f51\u7edc\uff1a\u7535\u4fe11000M\u5bbd\u5e26\n\u8f6f\u8def\u7531\uff1aJ4125\u56db\u53e3\u5de5\u63a7\u4e3b\u673a\n\u8f6f\u8def\u7531\u7cfb\u7edf\uff1aUnraid\u4e28OpenWrt \u4e28iKuai\n\u4ea4\u6362\u673a\uff1a\u7f51\u4ef68\u53e3\u5343\u5146\u4ea4\u6362\u673a GS308\n\u786c\u8def\u7531\uff1a\u5c0f\u7c73AX3600\u4e28\u534e\u7855RT-AC86U \u4e28 NewWfi-3\n\u53f0\u5f0f\u673a\uff1a\u9ed1\u679c+Windows10 \u53cc\u7cfb\u7edf\u7ec4\u88c5\u673a \u4e28M1 Mac mini\n\u7b14\u8bb0\u672c\uff1a MacBook Pro 2015\u4e28 MacBook Pro 2019\u4e28 Mac Mini M1\n\u5e73\u677f\uff1aIpad Air\n\u8f6f\u4ef6\uff1aFinal Cut Pro\u4e28 \u526a\u6620\u4e13\u4e1a\u7248\u4e28 PR\n\u952e\u76d8\uff1aFILCO 108 \u7ea2\u8f74 \u4e28AkkO 3098 \u84dd\u8f74 \u4e28 Keychron K2\u4e28 \u73c2\u829d K75\n\u76f8\u673a\uff1aSONY a6300 \u4e28\u4f73\u80fd G7X mark III\n\u624b\u673a\uff1aiPhone 13 Pro \u4e28iPhone 13 Mini\n\u76f8\u673a\u955c\u5934\uff1a\u7d22\u5c3c16-50mm\u72d7\u5934\u4e28\u9002\u9a6c30mm F1.4\n\u8bdd\u7b52\uff1a\u731b\u72b8\u65e0\u7ebf\u9ea6\u514b\u98ce\n\u79fb\u52a8\u786c\u76d8\uff1a\u4e1c\u829d 4T\u4e28\u5965\u777f\u79d1M.2\u79fb\u52a8\u786c\u76d8\u76d2+256\u786c\u76d8\u4e28 \u96f7\u7535 3 \u6269\u5c55\u575e + SN550\nU\u76d8\uff1a\u95ea\u8fea64G",(0,a.kt)("em",{parentName:"p"},"3\nNAS\uff1aDS218 Play 4T"),"2"),(0,a.kt)("h2",{id:"\u5b89\u88c5-ubuntu-server"},"\u5b89\u88c5 Ubuntu server"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'\nversion: 2\nethernets:\n  eth0:\n    dhcp4: true\n    optional: true\n#wifis:\n#  wlan0:\n#    dhcp4: true\n#    optional: true\n#    access-points:\n#      myhomewifi:\n#        password: "S3kr1t"\n#      myworkwifi:\n#        password: "correct battery horse staple"\n#      workssid:\n#        auth:\n#          key-management: eap\n#          method: peap\n#          identity: "me@example.com"\n#          password: "passw0rd"\n#          ca-certificate: /etc/my_ca.pem\nwifis:\n  wlan0:\n    dhcp4: true\n    optional: true\n    access-points:\n      CMCC-2EE8-5G:\n        password: "ezVL7XjF"\n')),(0,a.kt)("h2",{id:"\u914d\u7f6e-raspberry-pi"},"\u914d\u7f6e raspberry pi"),(0,a.kt)("p",null,"\u6211\u4e4b\u524d\u521a\u4e70\u56de\u6765\u6811\u8393\u6d3e\u5c31\u914d\u7f6e\u597d\u4e86, \u4e3a\u4e86\u4fdd\u6301\u6587\u7ae0\u7684\u5b8c\u6574\u6027, \u8fd8\u662f\u8bb0\u5f55\u4e00\u4e0b\u914d\u7f6e\u8fc7\u7a0b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"# raspberry \u9ed8\u8ba4 user \u662f pi/raspberry\n# \u5982\u679c\u662f Ubuntu \u7cfb\u7edf, \u5219\u662f ubuntu/ubuntu (\u767b\u5165\u540e\u9700\u8981\u4fee\u6539\u5bc6\u7801)\n\n\n# \u8054\u7f51\n# \u5148\u63d2\u6709\u7ebf, \u5b89\u88c5 iw, ifconfig, iwconfig \u8fd9\u4e9b\u5de5\u5177\nsudo iwconfig # wlan0 \u65e0\u7ebf\u7f51\u5361\u662f\u5426\u5b58\u5728\nifconfig wlan0 up # \u542f\u52a8\nip link set wlan0 up # \u542f\u52a8\niw dev wlan0 scan | grep SSID # \u626b\u63cf\u53ef\u7528 ssid\n\n\n\n####\n\nsudo vim /etc/network/interfaces\n\nauto lo //\u8868\u793a\u4f7f\u7528localhost\niface eth0 inet dhcp //\u8868\u793a\u5982\u679c\u6709\u7f51\u5361ech0, \u5219\u7528dhcp\u83b7\u5f97IP\u5730\u5740 (\u8fd9\u4e2a\u7f51\u5361\u662f\u672c\u673a\u7684\u7f51\u5361\uff0c\u800c\u4e0d\u662fWIFI\u7f51\u5361)\nauto wlan0 //\u8868\u793a\u5982\u679c\u6709wlan\u8bbe\u5907\uff0c\u4f7f\u7528wlan0\u8bbe\u5907\u540d\nallow-hotplug wlan0 //\u8868\u793awlan\u8bbe\u5907\u53ef\u4ee5\u70ed\u63d2\u62e8\niface wlan0 inet dhcp //\u8868\u793a\u5982\u679c\u6709WLAN\u7f51\u5361wlan0 (\u5c31\u662fWIFI\u7f51\u5361), \u5219\u7528dhcp\u83b7\u5f97IP\u5730\u5740\nwpa-ssid \u201c\u4f60\u7684wifi\u540d\u79f0\u201d//\u8868\u793a\u8fde\u63a5SSID\u540d\nwpa-psk \u201c\u4f60\u7684wifi\u5bc6\u7801\u201d//\u8868\u793a\u8fde\u63a5WIFI\u7f51\u7edc\u65f6\uff0c\u4f7f\u7528wpa-psk\u8ba4\u8bc1\u65b9\u5f0f\uff0c\u8ba4\u8bc1\u5bc6\u7801\n\n#####\n\n## \u9759\u6001ip https://www.jianshu.com/p/ac9d784f112b\n\nsudo vi /etc/dhcpcd.conf\n\n###### \u5185\u5bb9\u5982\u4e0b:\n\ninterface eth0\n\nstatic ip_address=192.168.0.10/24 # \u9759\u6001ip\nstatic routers=192.168.1.1 # \u7f51\u5173\nstatic domain_name_servers=192.168.0.1 # dns\n\ninterface wlan0 # \u65e0\u7ebf\u7f51\u5361\n\nstatic ip_address=192.168.0.200/24\nstatic routers=192.168.1.1\nstatic domain_name_servers=192.168.0.1\n\n######\n\n#\u91cd\u542f\nsudo reboot\n\n# \u914d\u7f6e\u56fd\u5185\u6e90\n\n# \u5982\u679c\u662f raspberry os, \u5219:\n# \u5206\u4e3a\u8f6f\u4ef6\u66f4\u65b0\u6e90, \u7cfb\u7edf\u66f4\u65b0\u6e90\nsudo cp /etc/apt/sources.list /etc/apt/sources.list.bak # \u5148\u5907\u4efd\u603b\u662f\u6ca1\u9519\u7684\nsudo cp /etc/apt/sources.list.d/raspi.list /etc/apt/sources.list.d/raspi.list.bak # \u5907\u4efd\nsudo vim /etc/apt/sources.list\n# modify the content like this:\ndeb http://mirrors.ustc.edu.cn/raspbian/raspbian/ stretch main contrib non-free rpi\n# \u7136\u540e\u662f\u4fee\u6539\u7cfb\u7edf\u66f4\u65b0\u6e90\nsudo vim /etc/apt/sources.list.d/raspi.list\n# \u4fee\u6539\u6210\u8fd9\u6837:\ndeb http://mirrors.ustc.edu.cn/archive.raspberrypi.org/debian/ stretch main ui\n\n# \u5982\u679c\u662f Ubuntu os \u5219:\nhttp://mirrors.ustc.edu.cn/ubuntu-ports\n\n# \u66f4\u65b0\u8f6f\u4ef6\u5305\nsudo apt update \nsudo apt full-upgrade\n\n# \u914d\u7f6e\u9759\u6001 ip\nsudo vim  \n\n\n\n## \u5207\u6362 root\n\nsudo passwd root # \u7136\u540e\u8bbe\u7f6e root \u5bc6\u7801\n\n\n")),(0,a.kt)("h2",{id:"\u5b89\u88c5-docker"},"\u5b89\u88c5 docker"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://shumeipai.nxez.com/2019/05/20/how-to-install-docker-on-your-raspberry-pi.html"},"https://shumeipai.nxez.com/2019/05/20/how-to-install-docker-on-your-raspberry-pi.html")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'sudo apt update \nsudo apt full-upgrade\n\nsudo apt-get install apt-transport-https \\\n                       ca-certificates \\\n                       software-properties-common\n\n# \u65b9\u6cd5\u4e00:\nsudo curl -sSL https://get.docker.com | sh\n\n# \u65b9\u6cd5\u4e8c:\n# \u66f4\u65b0\u8f6f\u4ef6\u5e93\u7d22\u5f15\nsudo apt update\n# \u5148\u5b89\u88c5 https \u4f9d\u8d56\u5305\nsudo apt install -y apt-transport-https \\\n                       ca-certificates \\\n                       software-properties-common\n# \u6dfb\u52a0 Docker \u7684 GPG key\ncurl -fsSL https://yum.dockerproject.org/gpg | sudo apt-key add -\n# \u9a8c\u8bc1\u4e00\u4e0b:\napt-key fingerprint 58118E89F3A912897C070ADBF76221572C52609D\nsudo apt update\nsudo apt install -y docker-engine   \n\n\n# (\u4e00\u6b21\u6027)\u4f7f\u7528\u56fd\u5185\u955c\u50cf\u6e90\ndocker run hello-world --registry-mirror=https://docker.mirrors.ustc.edu.cn\n# \u63a8\u8350\u65b9\u6cd5:\nvim /etc/docker/daemn.json\n{ \n\n"registry-mirrors": ["https://docker.mirrors.ustc.edu.cn"] \n\n}\n\n# \u5141\u8bb8 \u975e root \u4f7f\u7528\nsudo usermod -aG docker pi\n\n################################################################\n\n\n# \u5b89\u88c5 docker-compose\n\napt-get update\napt-get install -y python python-pip\napt-get install libffi-dev\npip3 install docker-compose # \u5fc5\u987b\u4f7f\u7528 Python3 \u5b89\u88c5\ndocker-compose -v\n\n\n')),(0,a.kt)("h2",{id:"\u8fd0\u884c\u73af\u5883"},"\u8fd0\u884c\u73af\u5883"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"# mysql\ndocker pull hypriot/rpi-mysql\ndocker run --name mysql -d -e MYSQL_ROOT_PASSWORD=root -p 3306:3306 --restart=always hypriot/rpi-mysql\n# \u65b0\u542f\u52a8\u4e00\u4e2a\u5bb9\u5668\u4f5c\u4e3a client \u53bb\u8fde\u63a5 MySQL server\ndocker run --rm -it --link mysql:ms hypriot/rpi-mysql mysql -hms -uroot -p\n\n\n# jdk8\nsudo apt-get purge openjdk-8-jre-headless\nsudo apt-get install openjdk-8-jre-headless\nsudo apt-get install openjdk-8-jre\n")),(0,a.kt)("h2",{id:"\u914d\u7f6e\u52a8\u6001\u57df\u540d\u670d\u52a1-ddns"},"\u914d\u7f6e\u52a8\u6001\u57df\u540d\u670d\u52a1 ddns"),(0,a.kt)("p",null,"\u516c\u7f51vps \u662f\u5fc5\u987b\u7684"),(0,a.kt)("h3",{id:"\u901a\u8fc7-ssh\u96a7\u9053"},"\u901a\u8fc7 ssh\u96a7\u9053"),(0,a.kt)("p",null,"ssh \u96a7\u9053\u8fdc\u7a0b\u7aef\u53e3\u8f6c\u53d1(ssh remote forwarding) : \u672c\u5730\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"ssh -NTf -R 8080:127.0.0.1:8080 username@12.34.56.78"),", \u5c06\u8fdc\u7a0b server\u7684 8080 \u6620\u5c04\u5230 \u672c\u5730\u7684 8080; \u518d\u5982: ",(0,a.kt)("inlineCode",{parentName:"p"},"ssh -NTf -R 8080:github.com:80 username@12.34.56.78")," \u5c31\u80fd\u901a\u8fc7 12.34.56.78:8080 \u53bb\u8bbf\u95ee github.com:80 \u4e86\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"N\u53c2\u6570\uff1a\u8868\u793a\u53ea\u8fde\u63a5\u8fdc\u7a0b\u4e3b\u673a\uff0c\u4e0d\u6253\u5f00\u8fdc\u7a0bshell\uff1b\nT\u53c2\u6570\uff1a\u8868\u793a\u4e0d\u4e3a\u8fd9\u4e2a\u8fde\u63a5\u5206\u914dTTY\uff1b\nf\u53c2\u6570\uff1a\u8868\u793a\u8fde\u63a5\u6210\u529f\u540e\uff0c\u8f6c\u5165\u540e\u53f0\u8fd0\u884c\uff1b\nR: \u8fdc\u7a0b\u8f6c\u53d1 \n")),(0,a.kt)("p",null,"\u4f46\u662f SSH \u96a7\u9053\u662f\u4e0d\u7a33\u5b9a\u7684\uff0c\u5728\u7f51\u7edc\u6076\u52a3\u7684\u60c5\u51b5\u4e0b\u53ef\u80fd\u968f\u65f6\u65ad\u5f00, AutoSSH \u80fd\u8ba9 SSH \u96a7\u9053\u4e00\u76f4\u4fdd\u6301\u6267\u884c\uff0c\u4ed6\u4f1a\u542f\u52a8\u4e00\u4e2a SSH \u8fdb\u7a0b\uff0c\u5e76\u76d1\u63a7\u8be5\u8fdb\u7a0b\u7684\u5065\u5eb7\u72b6\u51b5\uff1b\u5f53 SSH \u8fdb\u7a0b\u5d29\u6e83\u6216\u505c\u6b62\u901a\u4fe1\u65f6\uff0cAutoSSH \u5c06\u91cd\u542f\u52a8 SSH \u8fdb\u7a0b: ",(0,a.kt)("inlineCode",{parentName:"p"},"autossh -N -R 8080:127.0.0.1:8080 username@12.34.56.78")),(0,a.kt)("p",null,"\u9700\u8981\u53bb\u5916\u7f51\u670d\u52a1\u5668\u4e0a\u4fee\u6539 /etc/ssh/sshd_config \u6587\u4ef6\u5982\u4e0b: (\u91cd\u542f",(0,a.kt)("inlineCode",{parentName:"p"},"service sshd restart"),")"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"GatewayPorts yes\n")),(0,a.kt)("p",null,"\u610f\u601d\u662f\uff0cSSH \u96a7\u9053\u76d1\u542c\u7684\u670d\u52a1\u7684 IP \u662f\u5bf9\u5916\u5f00\u653e\u7684 0.0.0.0\uff0c\u800c\u4e0d\u662f\u53ea\u5bf9\u672c\u673a\u7684 127.0.0.1\u3002"),(0,a.kt)("h3",{id:"\u901a\u8fc7-frp\u670d\u52a1-\u5b9e\u73b0-\u5185\u7f51\u7a7f\u900f"},"\u901a\u8fc7 frp\u670d\u52a1 \u5b9e\u73b0 \u5185\u7f51\u7a7f\u900f"),(0,a.kt)("p",null,"frp \u662f\u4e00\u4e2a\u53ef\u7528\u4e8e\u5185\u7f51\u7a7f\u900f\u7684\u9ad8\u6027\u80fd\u7684\u53cd\u5411\u4ee3\u7406\u5e94\u7528\uff0c\u652f\u6301 tcp, udp, http, https \u534f\u8bae"),(0,a.kt)("p",null,"frp \u6bd4 SSH \u96a7\u9053\u529f\u80fd\u66f4\u591a\uff0c\u914d\u7f6e\u9879\u66f4\u591a\uff1b\nfrp \u4e5f\u9700\u8981\u4e00\u53f0\u5916\u7f51\u670d\u52a1\u5668\uff0c\u5e76\u4e14\u9700\u8981\u5728\u5916\u7f51\u670d\u52a1\u5668\u4e0a\u5b89\u88c5 frps\uff0c\u5728\u672c\u5730\u5f00\u53d1\u673a\u4e0a\u5b89\u88c5 frpc"),(0,a.kt)("p",null,"\u8fd8\u6709\u5546\u7528\u65b9\u6848 ngrok, ZeroTier(\u4e2a\u4eba\u514d\u8d39)"),(0,a.kt)("h2",{id:"\u8fde\u63a5\u4e0a-wifi-\u4f46\u65e0\u6cd5\u4e0a\u7f51"},"\u8fde\u63a5\u4e0a WiFi \u4f46\u65e0\u6cd5\u4e0a\u7f51"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"# \u6dfb\u52a0 nameserver 8.8.8.8\nsudo vim /etc/resolv.conf\n\n# relead\nsudo resolvconf -u \n# restart network\nsudo /etc/init.d/networking restart\n\n")),(0,a.kt)("p",null,"\u5c1d\u8bd5\u540e\u8c8c\u4f3c\u65e0\u6548"),(0,a.kt)("p",null,"\u4e0b\u9762\u6709\u6548: (",(0,a.kt)("a",{parentName:"p",href:"https://www.geek-share.com/detail/2755498900.html"},"https://www.geek-share.com/detail/2755498900.html"),")"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo nano /etc/dhcpcd.conf\n\n# \u8bbe\u7f6e WiFi\nsudo nano /etc/wpa_supplicant/wpa_supplicant.conf\n\n")),(0,a.kt)("h2",{id:"\u5b89\u88c5-node"},"\u5b89\u88c5 node"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://blog.csdn.net/sunxdd/article/details/105894882"},"https://blog.csdn.net/sunxdd/article/details/105894882")))}d.isMDXComponent=!0}}]);