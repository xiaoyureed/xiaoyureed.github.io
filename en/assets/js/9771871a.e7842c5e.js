"use strict";(self.webpackChunkwiki_1=self.webpackChunkwiki_1||[]).push([[1696],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var a=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,l=function(e,t){if(null==e)return{};var r,a,l={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var o=a.createContext({}),u=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},m="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var r=e.components,l=e.mdxType,n=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=u(r),s=l,h=m["".concat(o,".").concat(s)]||m[s]||k[s]||n;return r?a.createElement(h,i(i({ref:t},c),{},{components:r})):a.createElement(h,i({ref:t},c))}));function h(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=r.length,i=new Array(n);i[0]=s;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[m]="string"==typeof e?e:l,i[1]=p;for(var u=2;u<n;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},2809:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>k,frontMatter:()=>n,metadata:()=>p,toc:()=>u});var a=r(7462),l=(r(7294),r(3905));const n={title:"RPC Intro",tags:["rpc","outline"],date:new Date("2018-03-10T22:27:26.000Z"),toc_min_heading_level:2,toc_max_heading_level:5},i=void 0,p={unversionedId:"outline-about-rpc",id:"outline-about-rpc",title:"RPC Intro",description:"- 1. rpc\u662f\u4ec0\u4e48",source:"@site/docs/outline-about-rpc.md",sourceDirName:".",slug:"/outline-about-rpc",permalink:"/en/docs/outline-about-rpc",draft:!1,editUrl:"https://github.com/xiaoyureed/xiaoyureed.github.io/tree/main/docs/outline-about-rpc.md",tags:[{label:"rpc",permalink:"/en/docs/tags/rpc"},{label:"outline",permalink:"/en/docs/tags/outline"}],version:"current",frontMatter:{title:"RPC Intro",tags:["rpc","outline"],date:"2018-03-10T22:27:26.000Z",toc_min_heading_level:2,toc_max_heading_level:5},sidebar:"tutorialSidebar",previous:{title:"RESTful api \u53ca \u5176\u4ed6webService\u6280\u672f",permalink:"/en/docs/outline-about-rest-api"},next:{title:"\u89c4\u5219\u5f15\u64ce Intro",permalink:"/en/docs/outline-about-rule-engine-note"}},o={},u=[{value:"\u533a\u522b",id:"\u533a\u522b",level:2},{value:"rpc\u5206\u7c7b",id:"rpc\u5206\u7c7b",level:2},{value:"webservice\u5173\u6ce8\u70b9",id:"webservice\u5173\u6ce8\u70b9",level:2},{value:"thrift",id:"thrift",level:2},{value:"protocol buffers",id:"protocol-buffers",level:2},{value:"grpc",id:"grpc",level:2},{value:"dubbo",id:"dubbo",level:2},{value:"hessian",id:"hessian",level:2}],c={toc:u},m="wrapper";function k(e){let{components:t,...r}=e;return(0,l.kt)(m,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#1-rpc%E6%98%AF%E4%BB%80%E4%B9%88"},"1. rpc\u662f\u4ec0\u4e48")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#2-%E4%B8%BA%E4%BB%80%E4%B9%88%E9%9C%80%E8%A6%81rpc"},"2. \u4e3a\u4ec0\u4e48\u9700\u8981rpc")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#3-rpc-%E5%92%8C-rest%E5%AF%B9%E6%AF%94"},"3. RPC \u548c REST\u5bf9\u6bd4"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#31-%E5%8C%BA%E5%88%AB"},"3.1. \u533a\u522b")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#32-rpc%E5%88%86%E7%B1%BB"},"3.2. rpc\u5206\u7c7b")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#33-webservice%E5%85%B3%E6%B3%A8%E7%82%B9"},"3.3. webservice\u5173\u6ce8\u70b9")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#4-%E5%AE%9E%E7%8E%B0%E4%B8%80%E4%B8%AA%E7%AE%80%E5%8D%95%E7%9A%84rpc%E6%A1%86%E6%9E%B6"},"4. \u5b9e\u73b0\u4e00\u4e2a\u7b80\u5355\u7684rpc\u6846\u67b6")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#5-%E6%9C%89%E5%93%AA%E4%BA%9B%E5%BC%80%E6%BA%90%E6%96%B9%E6%A1%88%E5%8F%AF%E4%BE%9B%E9%80%89%E6%8B%A9"},"5. \u6709\u54ea\u4e9b\u5f00\u6e90\u65b9\u6848\u53ef\u4f9b\u9009\u62e9"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#51-thrift"},"5.1. thrift")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#52-protocol-buffers"},"5.2. protocol buffers")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#53-grpc"},"5.3. grpc")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#54-dubbo"},"5.4. dubbo")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#55-hessian"},"5.5. hessian"))))),(0,l.kt)("h1",{id:"rpc\u662f\u4ec0\u4e48"},"rpc\u662f\u4ec0\u4e48"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.zhihu.com/question/25536695/answer/36197244"},"https://www.zhihu.com/question/25536695/answer/36197244")),(0,l.kt)("h1",{id:"\u4e3a\u4ec0\u4e48\u9700\u8981rpc"},"\u4e3a\u4ec0\u4e48\u9700\u8981rpc"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.zhihu.com/question/41609070/answer/191965937"},"https://www.zhihu.com/question/41609070/answer/191965937")),(0,l.kt)("h1",{id:"rpc-\u548c-rest\u5bf9\u6bd4"},"RPC \u548c REST\u5bf9\u6bd4"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.zhihu.com/question/28570307"},"https://www.zhihu.com/question/28570307")),(0,l.kt)("h2",{id:"\u533a\u522b"},"\u533a\u522b"),(0,l.kt)("p",null,"\u5206\u5e03\u5f0f\u8c03\u7528\u5927\u4f53\u4e0a\u5c31\u5206\u4e3a\u4e24\u7c7b\uff0cRPC\u5f0f\u7684\uff0cREST\u5f0f\u7684\uff0c\u4e24\u8005\u7684\u533a\u522b\uff1a  "),(0,l.kt)("p",null,"RPC\u5f3a\u8c03\u65b9\u6cd5\u7684\u8c03\u7528, \u5f3a\u8c03\u52a8\u4f5c\uff0cREST\u5f3a\u8c03\u5bf9\u8d44\u6e90\u7684\u64cd\u4f5c, \u5f3a\u8c03\u8d44\u6e90"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u8fd9\u610f\u5473\u7740, \u5982\u679c\u4ee5\u52a8\u8bcd\u4e3a\u4e2d\u5fc3, \u5f53\u4f60\u8981\u9700\u8981\u52a0\u5165\u65b0\u529f\u80fd\u65f6,\u4f60\u5fc5\u987b\u8981\u6dfb\u52a0\u66f4\u591a\u7684\u52a8\u8bcd, \u8fd9\u65f6\u5019\u670d\u52a1\u5668\u7aef\u9700\u8981\u5b9e\u73b0 \u76f8\u5e94\u7684\u52a8\u8bcd(\u65b9\u6cd5), \u5ba2\u6237\u7aef\u9700\u8981\u77e5\u9053\u8fd9\u4e2a\u65b0\u7684\u52a8\u8bcd\u5e76\u8fdb\u884c\u8c03\u7528.\n\u5982\u679c\u4ee5\u8d44\u6e90\u4e3a\u4e2d\u5fc3, \u5047\u4f7f\u6211\u8bf7\u6c42\u7684\u662f hostname/friends/, \u65e0\u8bba\u8fd9\u4e2aURI\u5bf9\u5e94\u7684\u670d\u52a1\u600e\u4e48\u53d8\u5316,\u5ba2\u6237\u7aef\u662f\u65e0\u9700 \u5173\u6ce8\u548c\u66f4\u65b0\u7684,\u800c\u8fd9\u79cd\u53d8\u5316\u5bf9\u5ba2\u6237\u7aef\u4e5f\u662f\u900f\u660e\u7684.")),(0,l.kt)("p",null,"rest\u57fa\u4e8ehttp\u5b9e\u73b0;\nrpc\u53ef\u4ee5\u6709\u591a\u79cd\u5b9e\u73b0\u65b9\u5f0f\uff0c \u53ef\u4ee5\u57fa\u4e8ehttp\u5b9e\u73b0, \u57fa\u4e8etcp\u5b9e\u73b0(\u4f46\u662f\u7531\u4e8e HTTP \u62a5\u5934\u8f83\u4e3a\u5197\u957f\uff0c\u6027\u80fd\u8f83\u5dee\uff0c\u57fa\u4e8e TCP \u534f\u8bae\u7684 RPC \u53ef\u4ee5\u5efa\u7acb\u957f\u8fde\u63a5\uff0c\u901f\u5ea6\u548c\u6548\u7387\u660e\u663e\uff0c\u4f46\u662f\u96be\u5ea6\u548c\u590d\u6742\u7a0b\u5ea6\u5f88\u9ad8\u3002)"),(0,l.kt)("h2",{id:"rpc\u5206\u7c7b"},"rpc\u5206\u7c7b"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u4ece\u901a\u4fe1\u534f\u8bae\u5c42\u9762\u53ef\u4ee5\u5206\u4e3a\uff1a"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u57fa\u4e8e HTTP \u534f\u8bae\u7684 RPC\uff1b")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u57fa\u4e8e\u4e8c\u8fdb\u5236\u534f\u8bae\u7684 RPC\uff1b")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u57fa\u4e8e TCP \u534f\u8bae\u7684 RPC\u3002")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u4ece\u662f\u5426\u8de8\u5e73\u53f0\u53ef\u5206\u4e3a\uff1a"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5355\u8bed\u8a00 RPC\uff0c\u5982 RMI, Remoting\uff1b(rmi\u8fdc\u7a0b\u65b9\u6cd5\u8c03\u7528, rmi\u548crpc\u533a\u522b: \u8c03\u7528\u65b9\u5f0f\u4e0d\u540c, \u9002\u7528\u8bed\u8a00\u8303\u56f4\u4e0d\u540c, \u7ed3\u679c\u653e\u56de\u5f62\u5f0f\u4e0d\u540c)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u8de8\u5e73\u53f0 RPC\uff0c\u5982 google protobuffer, restful json\uff0chttp XML\u3002")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u4ece\u8c03\u7528\u8fc7\u7a0b\u6765\u770b\uff0c\u53ef\u4ee5\u5206\u4e3a\u540c\u6b65\u901a\u4fe1RPC\u548c\u5f02\u6b65\u901a\u4fe1RPC\uff1a"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u540c\u6b65 RPC\uff1a\u6307\u7684\u662f\u5ba2\u6237\u7aef\u53d1\u8d77\u8c03\u7528\u540e\uff0c\u5fc5\u987b\u7b49\u5f85\u8c03\u7528\u6267\u884c\u5b8c\u6210\u5e76\u8fd4\u56de\u7ed3\u679c\uff1b")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5f02\u6b65 RPC\uff1a\u6307\u5ba2\u6237\u65b9\u8c03\u7528\u540e\u4e0d\u5173\u5fc3\u6267\u884c\u7ed3\u679c\u8fd4\u56de\uff0c\u5982\u679c\u5ba2\u6237\u7aef\u9700\u8981\u7ed3\u679c\uff0c\u53ef\u7528\u901a\u8fc7\u63d0\u4f9b\u5f02\u6b65 callback \u56de\u8c03\u83b7\u53d6\u8fd4\u56de\u4fe1\u606f\u3002\u5927\u90e8\u5206 RPC \u6846\u67b6\u90fd\u540c\u65f6\u652f\u6301\u8fd9\u4e24\u79cd\u65b9\u5f0f\u7684\u8c03\u7528"))))),(0,l.kt)("h2",{id:"webservice\u5173\u6ce8\u70b9"},"webservice\u5173\u6ce8\u70b9"),(0,l.kt)("p",null,"\u4e24\u8005\u5747\u5c5e\u4e8ewebservice\u6280\u672f, webservice\u7684\u4e3b\u8981\u5173\u6ce8\u70b9\u6709\u56db\u4e2a  "),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u91c7\u7528\u4ec0\u4e48\u4f20\u8f93\u534f\u8bae\uff0cTCP, HTTP"),(0,l.kt)("p",{parentName:"li"},"\u6839\u636e\u7b2c\u4e00\u70b9\u6765\u770b\uff0cRPC\u9635\u8425\u5982\u4e0b"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Web Service\u91c7\u7528HTTP\u534f\u8bae\u505a\u4f20\u8f93\u5c42\u534f\u8bae\uff0c\u91c7\u7528SOAP\u505a\u5e94\u7528\u5c42\u534f\u8bae"),(0,l.kt)("li",{parentName:"ul"},"XML-RPC\uff0c\u91c7\u7528HTTP\u534f\u8bae\u505a\u4f20\u8f93\u5c42\u534f\u8bae\uff0c\u4f7f\u7528\u81ea\u5b9a\u4e49XML\u505a\u5e94\u7528\u5c42\u534f\u8bae"),(0,l.kt)("li",{parentName:"ul"},"JMI, Thrift, Protobuf\u7b49\u90fd\u4f7f\u7528TCP\u505a\u4f20\u8f93\u534f\u8bae\uff0c\u4f7f\u7528\u81ea\u5b9a\u4e49\u5e94\u7528\u5c42\u534f\u8bae")),(0,l.kt)("p",{parentName:"li"},"REST\u76f4\u63a5\u4f7f\u7528HTTP\u505a\u5e94\u7528\u5c42\u534f\u8bae\uff0c\u4f7f\u7528URL\u8868\u793a\u8d44\u6e90\uff0c\u4f7f\u7528HTTP\u52a8\u8bcd\u8868\u793a\u52a8\u4f5c")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u91c7\u7528\u4ec0\u4e48\u5e8f\u5217\u5316\u534f\u8bae\uff0c\u6bd4\u5982\u57fa\u4e8e\u6587\u672c\u7684XML\uff08\u81ea\u5b9a\u4e49XML\uff0c\u6216\u8005SOAP\uff09\uff0c\u57fa\u4e8e\u4e8c\u8fdb\u5236\u6d41\uff08Java\u5e8f\u5217\u5316\uff0c\u6216\u8005\u81ea\u5b9a\u4e49\u5e8f\u5217\u5316\u534f\u8bae\uff0c\u6bd4\u5982Thrift, Protobuf, JBoss Marshalling\uff09"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Web Service\u548cXML-RPC\u91c7\u7528\u57fa\u4e8e\u6587\u672c\u7684XML\u8fdb\u884c\u5e8f\u5217\u5316"),(0,l.kt)("li",{parentName:"ul"},"RMI\u57fa\u4e8eJava\u5e8f\u5217\u5316\u534f\u8bae"),(0,l.kt)("li",{parentName:"ul"},"Thrfit, Protobuf\u7b49\u91c7\u7528\u4e86\u57fa\u4e8e\u4e8c\u8fdb\u5236\u6d41\u7684\u5e8f\u5217\u5316\u534f\u8bae\uff0c\u6bd4\u5982\u5c31\u662f\u91c7\u7528\u6d88\u606f\u5934\u6d88\u606f\u4f53\u7684\u65b9\u5f0f\u4f20\u8f93\uff0c\u901a\u8fc7\u6d88\u606f\u5934\u6765\u5b9a\u4e49\u957f\u5ea6\uff0c\u4ece\u800c\u4fdd\u8bc1\u80fd\u591f\u6b63\u786e\u8bfb\u5199\u6570\u636e")))),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u91c7\u7528\u4ec0\u4e48IO\u5f62\u5f0f\uff0c\u963b\u585eIO\uff0c\u975e\u963b\u585e\u540c\u6b65IO(select / poll / epoll)\uff0c\u975e\u963b\u585e\u5f02\u6b65IO\uff08",(0,l.kt)("a",{parentName:"p",href:"http://blog.csdn.net/iter_zc/article/details/39291647%EF%BC%89"},"http://blog.csdn.net/iter_zc/article/details/39291647\uff09"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u91c7\u7528\u4ec0\u4e48\u65b9\u5f0f\u8fd0\u884c\uff0c\u8fd0\u884c\u5728HTTP\u670d\u52a1\u5668\u4e0a\uff0c\u8fd8\u662f\u4ee5\u5355\u72ec\u8fdb\u7a0b\u8fd0\u884c"),(0,l.kt)("p",{parentName:"li"},"Web Service\u548cREST\u90fd\u8fd0\u884c\u5728HTTP\u670d\u52a1\u5668\u4e0a\uff0cThrift\u8fd9\u6837\u7684\u90fd\u662f\u4ee5\u5355\u72ec\u8fdb\u7a0b\u8fd0\u884c"))),(0,l.kt)("h1",{id:"\u5b9e\u73b0\u4e00\u4e2a\u7b80\u5355\u7684rpc\u6846\u67b6"},"\u5b9e\u73b0\u4e00\u4e2a\u7b80\u5355\u7684rpc\u6846\u67b6"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://zhuanlan.zhihu.com/p/36528189"},"https://zhuanlan.zhihu.com/p/36528189")," //todo"),(0,l.kt)("h1",{id:"\u6709\u54ea\u4e9b\u5f00\u6e90\u65b9\u6848\u53ef\u4f9b\u9009\u62e9"},"\u6709\u54ea\u4e9b\u5f00\u6e90\u65b9\u6848\u53ef\u4f9b\u9009\u62e9"),(0,l.kt)("p",null,"dubbo, Hessian"),(0,l.kt)("p",null,"grpc, thrift"),(0,l.kt)("h2",{id:"thrift"},"thrift"),(0,l.kt)("p",null,"\u652f\u6301\u7684\u8bed\u8a00\u591a"),(0,l.kt)("p",null,"\u63d0\u4f9b rpc \u6240\u6709\u529f\u80fd , \u5305\u62ec\u5e8f\u5217\u5316, \u4f20\u8f93, \u5e76\u53d1\u5904\u7406"),(0,l.kt)("h2",{id:"protocol-buffers"},"protocol buffers"),(0,l.kt)("p",null,"\u8c37\u6b4c\u51fa\u54c1, \u53ea\u652f\u6301 Java cpp Python"),(0,l.kt)("p",null,"\u4e13\u6ce8\u4e8e \u5e8f\u5217\u5316\u53cd\u5e8f\u5217\u5316, \u6ca1\u6709\u5176\u4ed6\u529f\u80fd"),(0,l.kt)("h2",{id:"grpc"},"grpc"),(0,l.kt)("h2",{id:"dubbo"},"dubbo"),(0,l.kt)("h2",{id:"hessian"},"hessian"),(0,l.kt)("p",null,"\u91c7\u7528\u7684\u662f\u4e8c\u8fdb\u5236RPC\u534f\u8bae\uff0c\u56e0\u4e3a\u91c7\u7528\u7684\u662f\u4e8c\u8fdb\u5236\u534f\u8bae\uff0c\u6240\u4ee5\u5b83\u5f88\u9002\u5408\u4e8e\u53d1\u9001\u4e8c\u8fdb\u5236\u6570\u636e"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://blog.csdn.net/qiaziliping/article/details/81069265"},"https://blog.csdn.net/qiaziliping/article/details/81069265")))}k.isMDXComponent=!0}}]);