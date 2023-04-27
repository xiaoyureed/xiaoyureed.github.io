"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3148],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=c(n),m=r,f=s["".concat(p,".").concat(m)]||s[m]||h[m]||i;return n?a.createElement(f,o(o({ref:t},u),{},{components:n})):a.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},14607:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return h}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),o=["components"],l={title:"\u4eba\u8138\u8bc6\u522b\u5f00\u6e90\u65b9\u6848\u8c03\u67e5",tags:["face recognition"],authors:["me"]},p=void 0,c={permalink:"/2021/09/20/face-recognition-detection-ocr",editUrl:"https://github.com/xiaoyureed/xiaoyureed.github.io/edit/main/blog/2021-09-20-face-recognition-detection-ocr/index.md",source:"@site/blog/2021-09-20-face-recognition-detection-ocr/index.md",title:"\u4eba\u8138\u8bc6\u522b\u5f00\u6e90\u65b9\u6848\u8c03\u67e5",description:"\u672c\u6587\u6536\u96c6\u4e86\u76ee\u524d\u4eba\u8138\u8bc6\u522b\u9886\u57df\u7684\u5f00\u6e90\u65b9\u6848, \u57fa\u4e8e\u8fd9\u4e9b\u5f00\u6e90\u65b9\u6848, \u5b9e\u73b0\u4e86\u4e00\u4e2a\u57fa\u7840 demo",date:"2021-09-20T00:00:00.000Z",formattedDate:"2021\u5e749\u670820\u65e5",tags:[{label:"face recognition",permalink:"/tags/face-recognition"}],readingTime:1.78,hasTruncateMarker:!0,authors:[{name:"Xiao Yu",title:"Unknown",url:"https://github.com/xiaoyureed",imageURL:"https://github.com/xiaoyureed.png",key:"me"}],frontMatter:{title:"\u4eba\u8138\u8bc6\u522b\u5f00\u6e90\u65b9\u6848\u8c03\u67e5",tags:["face recognition"],authors:["me"]},prevItem:{title:"\u79fb\u52a8\u7aef\u6280\u672f\u9009\u578b",permalink:"/2022/05/04/mobile-technology"},nextItem:{title:"web \u5f00\u53d1\u6846\u67b6\u8bbe\u8ba1\u6784\u601d",permalink:"/2019/09/27/web-framework-design"}},u={authorsImageUrls:[void 0]},h=[{value:"\u6982\u5ff5",id:"\u6982\u5ff5",level:2},{value:"\u6d3b\u4f53\u68c0\u6d4b",id:"\u6d3b\u4f53\u68c0\u6d4b",level:2},{value:"\u5f00\u6e90\u65b9\u6848",id:"\u5f00\u6e90\u65b9\u6848",level:2},{value:"\u5982\u4f55\u5b58\u50a8",id:"\u5982\u4f55\u5b58\u50a8",level:2},{value:"ref",id:"ref",level:2},{value:"\u4ee3\u7801\u5b9e\u73b0",id:"\u4ee3\u7801\u5b9e\u73b0",level:2}],s={toc:h};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u672c\u6587\u6536\u96c6\u4e86\u76ee\u524d\u4eba\u8138\u8bc6\u522b\u9886\u57df\u7684\u5f00\u6e90\u65b9\u6848, \u57fa\u4e8e\u8fd9\u4e9b\u5f00\u6e90\u65b9\u6848, \u5b9e\u73b0\u4e86\u4e00\u4e2a\u57fa\u7840 demo"),(0,i.kt)("h1",{id:"\u4eba\u8138\u8bc6\u522b"},"\u4eba\u8138\u8bc6\u522b"),(0,i.kt)("h2",{id:"\u6982\u5ff5"},"\u6982\u5ff5"),(0,i.kt)("p",null,"\u6d41\u7a0b: face detection -> face alignment -> face verification -> face identification"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u4eba\u8138\u68c0\u6d4b/\u8ddf\u8e2a /\u5b9a\u4f4d face detection"),(0,i.kt)("p",{parentName:"li"},"\u5728\u56fe\u50cf/\u89c6\u9891\u4e2d\u627e\u5230\u5404\u4e2a\u4eba\u8138\u6240\u5728\u7684\u4f4d\u7f6e\u548c\u5927\u5c0f, \u6846\u51fa\u6765\uff1b\u5bf9\u4e8e\u8ddf\u8e2a\u800c\u8a00\uff0c\u8fd8\u9700\u8981\u786e\u5b9a\u5e27\u95f4\u4e0d\u540c\u4eba\u8138\u95f4\u7684\u5bf9\u5e94\u5173\u7cfb"),(0,i.kt)("p",{parentName:"li"},"\u5728OpenCV\u4e2d\u6709\u76f4\u63a5\u80fd\u62ff\u51fa\u6765\u7528\u7684Harr\u5206\u7c7b\u5668")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u4eba\u8138\u7279\u5f81\u70b9\u5b9a\u4f4d "),(0,i.kt)("p",{parentName:"li"},"\u786e\u5b9a\u8138\u90e8\u7279\u5f81\u70b9\uff08\u773c\u775b\u3001\u5634\u5df4\u4e2d\u5fc3\u70b9\u3001\u773c\u775b\u3001\u5634\u5df4\u8f6e\u5ed3\u7279\u5f81\u70b9\u3001\u5668\u5b98\u8f6e\u5ed3\u7279\u5f81\u70b9\u7b49\uff09\u7684\u4f4d\u7f6e\u3002\u4eba\u8138\u7279\u5f81\u70b9\u5b9a\u4f4d\u7684\u57fa\u672c\u601d\u8def\uff0c\u4e3b\u8981\u662f\u5c06\u4eba\u8138\u5c40\u90e8\u5668\u5b98\u7684\u7eb9\u7406\u7279\u5f81\u548c\u5668\u5b98\u7279\u5f81\u70b9\u4e4b\u95f4\u7684\u4f4d\u7f6e\u7ea6\u675f\u8fdb\u884c\u7ed3\u5408\u6765\u8fdb\u884c\u5904\u7406")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u4eba\u8138\u6821\u51c6\uff08face alignment\uff09"),(0,i.kt)("p",{parentName:"li"},"\u68c0\u6d4b\u51fa\u4eba\u8138\u7279\u5f81\u70b9\u540e, \u8fdb\u884c\u59ff\u6001\u7684\u6821\u6b63\uff0c\u4f7f\u5176\u4eba\u8138\u5c3d\u53ef\u80fd\u7684\u201d\u6b63\u201d, \u53ef\u4ee5\u63d0\u9ad8\u4eba\u8138\u8bc6\u522b\u7684\u7cbe\u5ea6")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u4eba\u8138\u786e\u8ba4\uff08face verification\uff09"),(0,i.kt)("p",{parentName:"li"},"pair matching: \u6bd4\u5bf9\u8f93\u5165\u7684\u4eba\u8138\u548c \u5df2\u6709\u7684\u4eba\u8138\u662f\u5426\u5339\u914d")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u4eba\u8138\u9274\u522b\uff08face identification/recognition\uff09"),(0,i.kt)("p",{parentName:"li"},"\u5bf9\u8fdb\u884c\u4eba\u8138\u68c0\u6d4b\u3001\u4eba\u8138\u6821\u6b63\u540e\u7684\u56fe\u50cf\uff08\u4eba\u8138\uff09\u8fdb\u884c\u5206\u7c7b(face grouping)"))),(0,i.kt)("h2",{id:"\u6d3b\u4f53\u68c0\u6d4b"},"\u6d3b\u4f53\u68c0\u6d4b"),(0,i.kt)("p",null,"\u4e00\u822c\u6709 \u7728\u773c\u68c0\u6d4b, \u5634\u5df4\u5f20/\u95ed\u68c0\u6d4b"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u7728\u773c\u68c0\u6d4b\u65b9\u6cd5"),(0,i.kt)("p",{parentName:"li"},"\u6293\u53d6\u6444\u50cf\u5934\u4f20\u6765\u7684\u8fde\u7eed\u5e27, \u4eba\u8138\u7279\u5f81\u70b9\u5b9a\u4f4d,\u67d0\u4e2a\u65f6\u523b\u4e3a\u7741\u773c, \u4e0b\u4e00\u5e27\u4e3a\u95ed\u773c, \u63a5\u7740\u4e3a\u7741\u773c, \u89c6\u4e3a\u4e00\u6b21\u7728\u773c"),(0,i.kt)("p",{parentName:"li"},"\u6216\u8005\u53ef\u4ee5\u8003\u8651\u5c06\u8fd9\u4e2a\u95ee\u9898\u5f53\u505a\u56fe\u50cf\u5206\u7c7b\u95ee\u9898\uff0c\u7c7b\u522b\u4e3a\uff1a\u7741\u773c\u548c\u95ed\u773c\u3002\u5148\u901a\u8fc7\u4eba\u8138\u68c0\u6d4b\u6a21\u578b\uff0c\u6bd4\u5982dlib\u3001face_recognition\uff0c\u4ece\u4eba\u8138\u7167\u7247\u4e2d\u88c1\u526a\u51fa\u773c\u90e8\u56fe\u7247\uff0c\u518d\u5bf9\u773c\u90e8\u56fe\u7247\u8fdb\u884c\u5206\u7c7b\u3002"))),(0,i.kt)("h2",{id:"\u5f00\u6e90\u65b9\u6848"},"\u5f00\u6e90\u65b9\u6848"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/ageitgey/face_recognition"},"https://github.com/ageitgey/face_recognition"),"  \u57fa\u4e8e dlib",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"dlib,opencv (",(0,i.kt)("a",{parentName:"li",href:"https://zhuanlan.zhihu.com/p/79784400"},"https://zhuanlan.zhihu.com/p/79784400"),") dlib 19.7.0 \u548cface_recognition 1.2.1 ; ",(0,i.kt)("a",{parentName:"li",href:"https://zhuanlan.zhihu.com/p/45827914"},"https://zhuanlan.zhihu.com/p/45827914")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/deepinsight/insightface"},"https://github.com/deepinsight/insightface")," MXNet and PyTorch"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/davidsandberg/facenet"},"https://github.com/davidsandberg/facenet")," Tensorflow"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/cmusatyalab/openface"},"https://github.com/cmusatyalab/openface")," Torch"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/justadudewhohacks"},"https://github.com/justadudewhohacks")," js \u5e93")),(0,i.kt)("h2",{id:"\u5982\u4f55\u5b58\u50a8"},"\u5982\u4f55\u5b58\u50a8"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://shentuzhigang.blog.csdn.net/article/details/103793031"},"https://shentuzhigang.blog.csdn.net/article/details/103793031"),"\n",(0,i.kt)("a",{parentName:"p",href:"https://blog.csdn.net/xia4215/article/details/113888148"},"https://blog.csdn.net/xia4215/article/details/113888148")),(0,i.kt)("h2",{id:"ref"},"ref"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.cnblogs.com/GarfieldEr007/p/5372345.html"},"https://www.cnblogs.com/GarfieldEr007/p/5372345.html"),"\n",(0,i.kt)("a",{parentName:"p",href:"https://blog.csdn.net/u014696921/article/details/74779798"},"https://blog.csdn.net/u014696921/article/details/74779798"),"\n",(0,i.kt)("a",{parentName:"p",href:"https://www.face-rec.org/general-info/"},"https://www.face-rec.org/general-info/"),"\n",(0,i.kt)("a",{parentName:"p",href:"https://www.zhihu.com/question/64860792/answer/233782977"},"https://www.zhihu.com/question/64860792/answer/233782977")),(0,i.kt)("p",null,"\u57fa\u7840\u5e93\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/opencv/opencv"},"https://github.com/opencv/opencv"),"\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/opencv/opencv_contrib"},"https://github.com/opencv/opencv_contrib"),"\n",(0,i.kt)("a",{parentName:"p",href:"http://dlib.net/"},"http://dlib.net/")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://ai.arcsoft.com.cn/course/index.html"},"https://ai.arcsoft.com.cn/course/index.html")," \u516c\u5f00\u8bfe"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ChanChiChoi/awesome-Face_Recognition#face-application"},"https://github.com/ChanChiChoi/awesome-Face_Recognition#face-application")," \u8bba\u6587\u96c6"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/weslynn/AlphaTree-graphic-deep-neural-network"},"https://github.com/weslynn/AlphaTree-graphic-deep-neural-network")," \u6750\u6599"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://viusuangio.github.io/2018/10/08/face_datasets_table/"},"https://viusuangio.github.io/2018/10/08/face_datasets_table/")," \u516c\u5f00\u6570\u636e\u96c6"),(0,i.kt)("h2",{id:"\u4ee3\u7801\u5b9e\u73b0"},"\u4ee3\u7801\u5b9e\u73b0"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://blog.csdn.net/libo1004/article/details/110874855"},"https://blog.csdn.net/libo1004/article/details/110874855")," base64 \u56fe\u7247 api"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://blog.csdn.net/weixin_43796192/article/details/90111437"},"https://blog.csdn.net/weixin_43796192/article/details/90111437")," \u56fe\u7247\u4f20\u8f93 \u534f\u8bae\u9009\u62e9\n",(0,i.kt)("a",{parentName:"p",href:"https://blog.csdn.net/ymaini/article/details/80645917"},"https://blog.csdn.net/ymaini/article/details/80645917"),"\n",(0,i.kt)("a",{parentName:"p",href:"https://blog.csdn.net/sinat_29552923/article/details/70833455"},"https://blog.csdn.net/sinat_29552923/article/details/70833455")))}m.isMDXComponent=!0}}]);