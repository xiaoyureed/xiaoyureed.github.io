"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[161],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),s=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(u.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},k=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),k=s(t),d=r,m=k["".concat(u,".").concat(d)]||k[d]||c[d]||l;return t?a.createElement(m,i(i({ref:n},p),{},{components:t})):a.createElement(m,i({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=k;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}k.displayName="MDXCreateElement"},5397:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c}});var a=t(83117),r=t(80102),l=(t(67294),t(3905)),i=["components"],o={title:"How to establish the infrastructure from scratch in a startup",date:"2022-6-7",tags:["infrastructure"],authors:"me",keywords:["infrastructure"],draft:!1},u=void 0,s={permalink:"/establish-infrastructure-from-scratch",editUrl:"https://github.com/xiaoyureed/xiaoyureed.github.io/edit/main/blog/establish-infrastructure-from-scratch.md",source:"@site/blog/establish-infrastructure-from-scratch.md",title:"How to establish the infrastructure from scratch in a startup",description:"- \u4ee3\u7801\u7ba1\u7406",date:"2022-06-07T00:00:00.000Z",formattedDate:"2022\u5e746\u67087\u65e5",tags:[{label:"infrastructure",permalink:"/tags/infrastructure"}],readingTime:12.69,hasTruncateMarker:!0,authors:[{name:"Xiao Yu",title:"Unknown",url:"https://github.com/xiaoyureed",imageURL:"https://github.com/xiaoyureed.png",key:"me"}],frontMatter:{title:"How to establish the infrastructure from scratch in a startup",date:"2022-6-7",tags:["infrastructure"],authors:"me",keywords:["infrastructure"],draft:!1},prevItem:{title:"Web \u5f00\u53d1\u6a21\u5f0f\u7684\u8fdb\u5316",permalink:"/2022/06/11/web-dev-history"},nextItem:{title:"\u79fb\u52a8\u7aef\u6280\u672f\u9009\u578b",permalink:"/2022/05/04/mobile-technology"}},p={authorsImageUrls:[void 0]},c=[{value:"\u4ee3\u7801\u7ba1\u7406",id:"\u4ee3\u7801\u7ba1\u7406",level:2},{value:"\u4ee3\u7801\u7248\u672c\u7ba1\u7406\u89c4\u8303",id:"\u4ee3\u7801\u7248\u672c\u7ba1\u7406\u89c4\u8303",level:3},{value:"cicd \u914d\u7f6e",id:"cicd-\u914d\u7f6e",level:3},{value:"\u9700\u6c42/bug\u7ba1\u7406",id:"\u9700\u6c42bug\u7ba1\u7406",level:2},{value:"\u8bbe\u8ba1",id:"\u8bbe\u8ba1",level:2},{value:"\u57fa\u7840\u6280\u672f\u6846\u67b6",id:"\u57fa\u7840\u6280\u672f\u6846\u67b6",level:2},{value:"\u57fa\u7840\u80fd\u529b\u4e2d\u95f4\u4ef6",id:"\u57fa\u7840\u80fd\u529b\u4e2d\u95f4\u4ef6",level:2},{value:"\u57fa\u7840\u80fd\u529b\u5305\u88c5 sdk",id:"\u57fa\u7840\u80fd\u529b\u5305\u88c5-sdk",level:2},{value:"\u5b9a\u4e49\u7f16\u7801\u89c4\u8303",id:"\u5b9a\u4e49\u7f16\u7801\u89c4\u8303",level:2},{value:"\u524d\u7aef\u89c4\u8303",id:"\u524d\u7aef\u89c4\u8303",level:3},{value:"css\u8bed\u6cd5\u89c4\u8303",id:"css\u8bed\u6cd5\u89c4\u8303",level:4},{value:"\u8fd0\u7ef4",id:"\u8fd0\u7ef4",level:2},{value:"\u7814\u53d1\u6d41\u7a0b",id:"\u7814\u53d1\u6d41\u7a0b",level:2},{value:"\u5173\u952e\u8282\u70b9",id:"\u5173\u952e\u8282\u70b9",level:3},{value:"\u5173\u952e\u6587\u6863",id:"\u5173\u952e\u6587\u6863",level:3},{value:"\u89d2\u8272\u548c\u5206\u5de5",id:"\u89d2\u8272\u548c\u5206\u5de5",level:3},{value:"\u90e8\u95e8\u5206\u5de5",id:"\u90e8\u95e8\u5206\u5de5",level:3},{value:"\u57fa\u672c\u5de5\u4f5c\u51c6\u5219",id:"\u57fa\u672c\u5de5\u4f5c\u51c6\u5219",level:3},{value:"\u7ba1\u7406\u89c4\u8303",id:"\u7ba1\u7406\u89c4\u8303",level:2},{value:"\u7ecf\u9a8c\u4e4b\u8c08",id:"\u7ecf\u9a8c\u4e4b\u8c08",level:2}],k={toc:c};function d(e){var n=e.components,o=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},k,o,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E4%BB%A3%E7%A0%81%E7%AE%A1%E7%90%86"},"\u4ee3\u7801\u7ba1\u7406"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E4%BB%A3%E7%A0%81%E7%89%88%E6%9C%AC%E7%AE%A1%E7%90%86%E8%A7%84%E8%8C%83"},"\u4ee3\u7801\u7248\u672c\u7ba1\u7406\u89c4\u8303")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#cicd-%E9%85%8D%E7%BD%AE"},"cicd \u914d\u7f6e")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E9%9C%80%E6%B1%82bug%E7%AE%A1%E7%90%86"},"\u9700\u6c42/bug\u7ba1\u7406")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E8%AE%BE%E8%AE%A1"},"\u8bbe\u8ba1")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E5%9F%BA%E7%A1%80%E6%8A%80%E6%9C%AF%E6%A1%86%E6%9E%B6"},"\u57fa\u7840\u6280\u672f\u6846\u67b6")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E5%9F%BA%E7%A1%80%E8%83%BD%E5%8A%9B%E4%B8%AD%E9%97%B4%E4%BB%B6"},"\u57fa\u7840\u80fd\u529b\u4e2d\u95f4\u4ef6")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E5%9F%BA%E7%A1%80%E8%83%BD%E5%8A%9B%E5%8C%85%E8%A3%85-sdk"},"\u57fa\u7840\u80fd\u529b\u5305\u88c5 sdk")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E5%AE%9A%E4%B9%89%E7%BC%96%E7%A0%81%E8%A7%84%E8%8C%83"},"\u5b9a\u4e49\u7f16\u7801\u89c4\u8303"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E5%89%8D%E7%AB%AF%E8%A7%84%E8%8C%83"},"\u524d\u7aef\u89c4\u8303"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#css%E8%AF%AD%E6%B3%95%E8%A7%84%E8%8C%83"},"css\u8bed\u6cd5\u89c4\u8303")))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E8%BF%90%E7%BB%B4"},"\u8fd0\u7ef4")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E7%A0%94%E5%8F%91%E6%B5%81%E7%A8%8B"},"\u7814\u53d1\u6d41\u7a0b"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E5%85%B3%E9%94%AE%E8%8A%82%E7%82%B9"},"\u5173\u952e\u8282\u70b9")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E5%85%B3%E9%94%AE%E6%96%87%E6%A1%A3"},"\u5173\u952e\u6587\u6863")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E8%A7%92%E8%89%B2%E5%92%8C%E5%88%86%E5%B7%A5"},"\u89d2\u8272\u548c\u5206\u5de5")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E9%83%A8%E9%97%A8%E5%88%86%E5%B7%A5"},"\u90e8\u95e8\u5206\u5de5")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E5%9F%BA%E6%9C%AC%E5%B7%A5%E4%BD%9C%E5%87%86%E5%88%99"},"\u57fa\u672c\u5de5\u4f5c\u51c6\u5219")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E7%AE%A1%E7%90%86%E8%A7%84%E8%8C%83"},"\u7ba1\u7406\u89c4\u8303")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E7%BB%8F%E9%AA%8C%E4%B9%8B%E8%B0%88"},"\u7ecf\u9a8c\u4e4b\u8c08"))),(0,l.kt)("h2",{id:"\u4ee3\u7801\u7ba1\u7406"},"\u4ee3\u7801\u7ba1\u7406"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"\ngitlab - manage the code, and do things about cicd\n\n    \u5c06\u5f00\u53d1\u8005\u8d26\u53f7\u96c6\u4e2d\u7ba1\u7406, \u4f7f\u7528\u65f6\u7533\u8bf7, \u8d4b\u4e88\u6743\u9650, \u79bb\u804c\u6ce8\u9500\n\n\n")),(0,l.kt)("h3",{id:"\u4ee3\u7801\u7248\u672c\u7ba1\u7406\u89c4\u8303"},"\u4ee3\u7801\u7248\u672c\u7ba1\u7406\u89c4\u8303"),(0,l.kt)("h3",{id:"cicd-\u914d\u7f6e"},"cicd \u914d\u7f6e"),(0,l.kt)("h2",{id:"\u9700\u6c42bug\u7ba1\u7406"},"\u9700\u6c42/bug\u7ba1\u7406"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"\u7985\u9053 - \u56fd\u4ea7\n\njira\n\n\n")),(0,l.kt)("h2",{id:"\u8bbe\u8ba1"},"\u8bbe\u8ba1"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"\n\u84dd\u6e56 - \u56fd\u4ea7\n\n    \u53ef\u4ee5\u4f7f\u7528svn \u7ba1\u7406\u6743\u9650\n\nfigma\n\n")),(0,l.kt)("h2",{id:"\u57fa\u7840\u6280\u672f\u6846\u67b6"},"\u57fa\u7840\u6280\u672f\u6846\u67b6"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"\n\u5982\u679c\u5de5\u4f5c\u5b9a\u6027\u4e3a\u5916\u5305\u516c\u53f8\uff0c\u90a3\u5c31\u642d\u5efa\u811a\u624b\u67b6\u3001\u4ee3\u7801\u751f\u6210\u5e73\u53f0\u3001\u6d4b\u8bd5\u53d1\u5e03\u548c\u8fd0\u7ef4\u5e73\u53f0\u3001\u5b9a\u5236\u5e38\u7528\u7684\u7c7b\u5e93\u548c\u5438\u7eb3\u5f00\u6e90\u7c7b\u5e93\uff0c\u505a\u5230\u5feb\u901f\u5f00\u53d1\u548c\u4ee3\u7801\u590d\u7528\u3002\n\n\u5982\u679c\u662f\u67d0\u4e2a\u516c\u53f8\u7684\u6280\u672f\u90e8\u95e8\uff0c\u4e0d\u4ee5\u6280\u672f\u4e3a\u4e3b\u8981\u76c8\u5229\u4eba\u6570\u8f83\u5c11\uff0c\u90a3\u6211\u89c9\u5f97\u4e0d\u8981\u5206\u5e03\u5f0f\u548c\u5fae\u670d\u52a1\uff0c\u5efa\u8bae\u5168\u90e8\u4e0a\u4e91\u51cf\u5c11\u8fd0\u7ef4\u6210\u672c\uff0c\u7528 nignx \u505a\u8f6f\u8d1f\u8f7d\u5747\u8861\u5373\u53ef\u3002\n\n\u5982\u679c\u662f\u6280\u672f\u578b\u521d\u521b\u516c\u53f8\uff0c\u5efa\u8bae\u662f\u7528\u624b\u5e95\u4e0b\u6700\u5e38\u7528\u7684\u6280\u672f\u5148\u5feb\u901f\u5b9e\u73b0\u4e1a\u52a1\uff0c\u7136\u540e\u505a\u7684\u5927\u4e00\u4e9b\u65f6\u5728\u7528\u4e5f\u5c31 java \u4f53\u7cfb\u3001GO \u4f53\u7cfb\u6765\u91cd\u5199\u4e1a\u52a1\u6846\u67b6\u3002\n\n\n\u251c\u2500\u2500 kyland-spring-boot-starter-parent              -- starter\u7236\u6a21\u5757\n    \u251c\u2500\u2500 kyland-spring-boot-starter-base            -- \u57fa\u7840\u6a21\u5757\n    \u251c\u2500\u2500 kyland-spring-boot-starter-core            -- \u6838\u5fc3\u6a21\u5757\n    \u251c\u2500\u2500 kyland-spring-boot-starter-ds              -- \u6570\u636e\u6e90\u6a21\u5757\n    \u251c\u2500\u2500 kyland-spring-boot-starter-file            -- \u6587\u4ef6\u5b58\u50a8\u6a21\u5757\n    \u251c\u2500\u2500 kyland-spring-boot-starter-log             -- \u65e5\u5fd7\u6a21\u5757\n    \u251c\u2500\u2500 kyland-spring-boot-starter-low-code        -- \u4f4e\u4ee3\u7801\u6a21\u5757\n    \u251c\u2500\u2500 kyland-spring-boot-starter-message-queue   -- \u6d88\u606f\u961f\u5217\u6a21\u5757\n    \u251c\u2500\u2500 kyland-spring-boot-starter-redis           -- redis\u6a21\u5757\n    \u251c\u2500\u2500 kyland-spring-boot-starter-security        -- \u5b89\u5168\u6a21\u5757\n    \u251c\u2500\u2500 kyland-spring-boot-starter-swagger         -- \u63a5\u53e3\u6587\u6863\u6a21\u5757\n    \u251c\u2500\u2500 kyland-spring-boot-starter-system          -- \u7cfb\u7edf\u5185\u7f6e\u529f\u80fd\u6a21\u5757\n    \u251c\u2500\u2500 kyland-spring-boot-starter-web             -- web\u542f\u52a8\u5668\n\n\n\n\n\u524d\u7aef\u90e8\u5206:\n\n\u642d\u5efa\u811a\u624b\u67b6\u5de5\u5177\nyarn create kyland-app\n\nqiankun \u5fae\u5e94\u7528\u6846\u67b6\n")),(0,l.kt)("h2",{id:"\u57fa\u7840\u80fd\u529b\u4e2d\u95f4\u4ef6"},"\u57fa\u7840\u80fd\u529b\u4e2d\u95f4\u4ef6"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"\nnacos\n\nkkfileview \u6587\u4ef6\u9884\u89c8\n\nMINIO \u6587\u4ef6\u5b58\u50a8\n\nRabbitMQ/ kafka \u6d88\u606f\u961f\u5217\n\n")),(0,l.kt)("h2",{id:"\u57fa\u7840\u80fd\u529b\u5305\u88c5-sdk"},"\u57fa\u7840\u80fd\u529b\u5305\u88c5 sdk"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"\n\u4efb\u52a1\u8c03\u5ea6\n\nSocket\n\n\n\n")),(0,l.kt)("h2",{id:"\u5b9a\u4e49\u7f16\u7801\u89c4\u8303"},"\u5b9a\u4e49\u7f16\u7801\u89c4\u8303"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"\n\u5b89\u88c5 alibaba \u98ce\u683c\u63d2\u4ef6, Basically we obey the Alibaba java coding style, \n\nor\n\n\u5b89\u88c5 checkstyle \u63d2\u4ef6, \u901a\u8fc7checkstyle\u914d\u7f6e\u98ce\u683c\u6821\u9a8c\n\n\n\n\u6807\u8bc6\u7b26\u547d\u540d\u89c4\u8303\n\n\u6ce8\u91ca\u89c4\u8303\n\n\u4ee3\u7801\u98ce\u683c\u89c4\u8303\n\n\u63a5\u53e3\u53ca\u6587\u6863\u89c4\u8303\n\n\u6570\u636e\u5e93\u89c4\u8303\n")),(0,l.kt)("h3",{id:"\u524d\u7aef\u89c4\u8303"},"\u524d\u7aef\u89c4\u8303"),(0,l.kt)("h4",{id:"css\u8bed\u6cd5\u89c4\u8303"},"css\u8bed\u6cd5\u89c4\u8303"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'\n\u58f0\u660e\u987a\u5e8f\u8981\u7ea6\u5b9a\u4e00\u81f4, \u76f8\u5173\u7684\u5c5e\u6027\u58f0\u660e\u5e94\u5f53\u5f52\u4e3a\u4e00\u7ec4\n\n\u7531\u4e8e\u5b9a\u4f4d\uff08positioning\uff09\u53ef\u4ee5\u4ece\u6b63\u5e38\u7684\u6587\u6863\u6d41\u4e2d\u79fb\u9664\u5143\u7d20\uff0c\u5e76\u4e14\u8fd8\u80fd\u8986\u76d6\u76d2\u6a21\u578b\uff08box model\uff09\u76f8\u5173\u7684\u6837\u5f0f\uff0c\u56e0\u6b64\u6392\u5728\u9996\u4f4d\u3002\n\n\u76d2\u6a21\u578b\u6392\u5728\u7b2c\u4e8c\u4f4d\uff0c\u56e0\u4e3a\u5b83\u51b3\u5b9a\u4e86\u7ec4\u4ef6\u7684\u5c3a\u5bf8\u548c\u4f4d\u7f6e\u3002\n\n\u5176\u4ed6\u5c5e\u6027\u53ea\u662f\u5f71\u54cd\u7ec4\u4ef6\u7684 \u5185\u90e8 \u6216\u8005\u662f\u4e0d\u5f71\u54cd\u524d\u4e24\u7ec4\u5c5e\u6027\uff0c\u56e0\u6b64\u6392\u5728\u540e\u9762\u3002\n\n.mod-example {\n  /* \u5b9a\u4f4d */\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 100;\n\n  /* \u76d2\u6a21\u578b */\n  display: block;\n  float: right;\n  width: 100px;\n  height: 100px;\n\n  /* \u6392\u7248 */\n  font: normal 13px "Helvetica Neue", sans-serif;\n  line-height: 1.5;\n  color: #333;\n  text-align: center;\n\n  /* \u89c6\u89c9\u6548\u679c */\n  background-color: #f5f5f5;\n  border: 1px solid #e5e5e5;\n  border-radius: 3px;\n\n  /* \u5176\u4ed6 */\n  opacity: 1;\n}\n\n\u907f\u514d\u4f7f\u7528 !important \uff0c\u80fd\u4e0d\u7528\u575a\u51b3\u4e0d\u7528\u3002\n\n\u7981\u6b62\u4f7f\u7528\u5c42\u7ea7\u8fc7\u6df1\u7684\u9009\u62e9\u5668\uff0c\u6700\u591a3 \uff5e 5\u7ea7\n\n')),(0,l.kt)("h2",{id:"\u8fd0\u7ef4"},"\u8fd0\u7ef4"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"\nk3s \u5b89\u88c5kubernetes\n\nkuboard \u7ba1\u7406\u9762\u677f\n\n")),(0,l.kt)("h2",{id:"\u7814\u53d1\u6d41\u7a0b"},"\u7814\u53d1\u6d41\u7a0b"),(0,l.kt)("p",null,"\u5e38\u89c4\u7814\u53d1\u6d41\u7a0b:"),(0,l.kt)("p",null,"<",(0,l.kt)("img",{src:t(31046).Z,width:"1040",height:"1884"}),">"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u7d27\u6025\u7814\u53d1\u6d41\u7a0b\u9002\u7528\u4e8e\u7d27\u6025\u9700\u6c42\u3001\u751f\u4ea7\u73af\u5883\u91cd\u5927\u6545\u969c\u6216\u8005\u5176\u4ed6\u7d27\u6025\u60c5\u51b5\uff0c\u8be5\u6d41\u7a0b\u4e3b\u8981\u662f\u4e3a\u4e86\u9488\u5bf9\u7d27\u6025\u60c5\u51b5\u505a\u51fa\u5feb\u901f\u53cd\u5e94\uff0c\u56e0\u51cf\u5c11\u4e86\u5ba1\u73af\u8282\uff0c\u540c\u65f6\u4e5f\u589e\u5927\u4e86\u9879\u76ee\u7684\u98ce\u9669")),(0,l.kt)("h3",{id:"\u5173\u952e\u8282\u70b9"},"\u5173\u952e\u8282\u70b9"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"\u9700\u6c42\u8bc4\u5ba1\uff1a\u7531\u4ea7\u54c1\u7ecf\u7406\u4e3b\u6301\uff0cUI\u8bbe\u8ba1\u3001\u7814\u53d1\u3001\u6d4b\u8bd5\u4ee5\u53ca\u5176\u4ed6\u76f8\u5173\u4eba\u5458\u53c2\u4e0e\uff0c\u91c7\u7528\u9010\u4e2a\u9700\u6c42\u4e32\u8bb2\u548c\u73b0\u573a\u7b54\u7591\u7684\u65b9\u5f0f\u8fdb\u884c\u3002\u8bc4\u5ba1\u901a\u8fc7\u540e\uff0c\u7531\u8bbe\u8ba1\u3001\u7814\u53d1\u3001\u6d4b\u8bd5\u8bc4\u4f30\u76f8\u5e94\u7684\u5de5\u65f6\uff0c\u5e76\u6839\u636e\u9700\u6c42\u4f18\u5148\u7ea7\u548c\u8fed\u4ee3\u603b\u5de5\u4f5c\u91cf\u51b3\u5b9a\u662f\u5426\u7eb3\u5165\u8fed\u4ee3\u5185\uff0c\u8bc4\u5ba1\u4e0d\u901a\u8fc7\uff0c\u5219\u7531\u4ea7\u54c1\u7ecf\u7406\u91cd\u65b0\u5bf9\u9700\u6c42\u8fdb\u884c\u5206\u6790\u3002\n\n\u4ee3\u7801\u8bc4\u5ba1\uff1a\u5f53\u7814\u53d1\u4eba\u5458\u5b8c\u6210\u76f8\u5e94\u529f\u80fd\u7684\u7f16\u7801\u5de5\u4f5c\u63d0\u4ea4\u5408\u5e76\u4ee3\u7801\u8bf7\u6c42\u4e4b\u540e\uff0c\u6280\u672f\u8d1f\u8d23\u4eba\u5bf9\u63a5\u63d0\u4ea4\u7684\u4ee3\u7801\u8fdb\u884c\u8bc4\u5ba1\uff0c\u8bc4\u5ba1\u4e0d\u901a\u8fc7\uff0c\u5219\u9000\u56de\u76f8\u5e94\u7684\u7814\u53d1\u4eba\u5458\u4fee\u6539\uff0c\u8bc4\u5ba1\u901a\u8fc7\uff0c\u5219\u5408\u5e76\u5230\u76f8\u5e94\u7684\u5206\u652f\u3002\n\n\u6d4b\u8bd5\u7528\u4f8b\u8bc4\u5ba1\uff1a\u9700\u6c42\u8bc4\u5ba1\u7ed3\u675f\u540e\uff0c\u5f85\u6d4b\u8bd5\u56e2\u961f\u5b8c\u6210\u8fed\u4ee3\u5185\u6240\u6709\u9700\u6c42\u7684\u6d4b\u8bd5\u7528\u4f8b\u7684\u7f16\u5199\uff0c\u7531\u6d4b\u8bd5\u8d1f\u8d23\u4eba\u4e3b\u6301\uff0c\u76f8\u5e94\u6a21\u5757\u7684\u6d4b\u8bd5\u4eba\u5458\u4e3b\u8bb2\uff0c\u4ea7\u54c1\u7ecf\u7406\u548c\u9879\u76ee\u7ecf\u7406\u53c2\u4e0e\uff0c\u5bf9\u5176\u6d4b\u8bd5\u7528\u4f8b\u8fdb\u884c\u8bc4\u5ba1\uff0c\u8bc4\u5ba1\u4e0d\u901a\u8fc7\u7684\u6d4b\u8bd5\u7528\u4f8b\uff0c\u5219\u7531\u76f8\u5e94\u6d4b\u8bd5\u4eba\u8fdb\u884c\u4fee\u6539\uff0c\u8bc4\u5ba1\u901a\u8fc7\uff0c\u5219\u5c06\u5176\u7eb3\u5165\u6d4b\u8bd5\u8ba1\u5212\u4e2d\u3002\n\n")),(0,l.kt)("h3",{id:"\u5173\u952e\u6587\u6863"},"\u5173\u952e\u6587\u6863"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"\nPRD\u6587\u6863/\u539f\u578b\uff1a\u5c31\u662f\u5c06\u5929\u9a6c\u884c\u7a7a\u7684\u6982\u5ff5\u5177\u8c61\u5316\u4e3a\u5b9e\u9645\u7684\u4e1a\u52a1\u903b\u8f91\u3001UI\u9875\u9762\u3001\u83dc\u5355\u6309\u94ae\u3001\u5b57\u6bb5\u5b9a\u4e49\u3001\u6570\u636e\u7ed3\u679c\uff0c\u6700\u7ec8\u8f85\u5bfc\u5f00\u53d1\u4eba\u5458\u5c06\u7cfb\u7edf\u7814\u53d1\u51fa\u6765\u3002\u901a\u5e38\u5305\u542b\u4ea7\u54c1\u80cc\u666f\u53ca\u5b9a\u4f4d\u3001\u529f\u80fd\u9700\u6c42\u3001\u903b\u8f91\u67b6\u6784\u3001\u539f\u578b\u8bbe\u8ba1\u7b49\u4fe1\u606f\u3002PRD\u6587\u6863\u662f\u4ea7\u54c1\u9879\u76ee\u7531\u201c\u6982\u5ff5\u5316\u201d\u8fdb\u5165\u201c\u56fe\u7eb8\u5316\u201d\u7684\u6700\u4e3b\u8981\u7684\u6587\u6863\uff0c\u7f16\u5199\u4e3b\u8981\u6709\u51e0\u4e2a\u76ee\u7684\uff1a\n\n\u6982\u5ff5\u5177\u8c61\u5316\uff1a\u4ea7\u54c1\u4eba\u5458\u641c\u96c6\u4e86\u5404\u65b9\u7684\u9700\u6c42\u8fdb\u884c\u53bb\u4f2a\u5b58\u771f\u7684\u5904\u7406\u4e4b\u540e\uff0c\u9700\u8981\u5bf9\u5355\u4e2a\u7684\u9700\u6c42\u70b9\u6574\u5408 \u2013> \u62bd\u8c61 \u2013> \u5177\u8c61\uff0c\u8f93\u51fa\u4e3a\u9ed1\u5b57\u767d\u7eb8\u7684\u843d\u5730\u6587\u6863\uff1b\u5e76\u4e14\u7684\u6587\u6863\u7684\u7f16\u5199\u8fc7\u7a0b\u4e2d\uff0c\u53ef\u4ee5\u4ece\u5168\u5c40\u7684\u89d2\u5ea6\u548c\u7ec6\u8282\u4e2d\u53bb\u9a8c\u8bc1\u903b\u8f91\u662f\u5426\u6b63\u786e\uff1b\n\u534f\u52a9\u9879\u76ee\u5f00\u53d1\uff1a\u4ece\u9879\u76ee\u7acb\u9879\u5f00\u59cb\u3001\u5230\u9879\u76ee\u8bc4\u5ba1\u3001\u9879\u76ee\u5f00\u53d1\u3001\u9879\u76ee\u9a8c\u6536\uff0cPRD\u6587\u6863\u8d2f\u7a7f\u4e86\u6574\u4e2a\u4ea7\u54c1\u7684\u8bde\u751f\u8fc7\u7a0b\uff0c\u91cd\u8981\u6027\u53ef\u60f3\u800c\u77e5\uff1b\u4ea7\u54c1\u5b9a\u7248\u8bc1\u636e\uff1a\u4ea7\u54c1\u6587\u6863\u7f16\u5199\u5b8c\u6bd5\u4e4b\u540e\u5c31\u8981\u8fdb\u884c\u5c01\u7248\u5904\u7406\uff0c\u4e0d\u80fd\u5728\u5f00\u53d1\u8fc7\u7a0b\u4e2d\u9891\u7e41\u53d8\u52a8\u9700\u6c42\uff0c\u5426\u5219\u4ea4\u4ed8\u4f1a\u65e0\u9650\u5ef6\u671f\uff1b\n\u8bb0\u5f55\u4ea7\u54c1\u6f14\u8fdb\u84dd\u56fe\uff1a\u82e5\u7814\u53d1\u8fc7\u7a0b\u4e2d\u9700\u6c42\u6709\u53d8\u52a8\u4f1a\u9996\u5148\u6392\u67e5\u6587\u6863\u7684\u5b9a\u7248\u5185\u5bb9\uff0c\u5bf9\u53d8\u52a8\u9700\u6c42\u5355\u72ec\u8fdb\u884c\u5904\u7406\uff1b\u82e5\u4e3a\u7248\u672c\u8fed\u4ee3\uff0c\u4e5f\u53ef\u4ee5\u6839\u636e\u4ee5\u524d\u7684\u7248\u672c\u8bb0\u5f55\u8fdb\u884c\u8ffd\u8e2a\u67e5\u6e90\uff1b\n\u9884\u9632\u4eba\u5458\u53d8\u52a8\uff1a\u82e5\u516c\u53f8\u7684\u4eba\u5458\u6d41\u52a8\u6027\u6bd4\u8f83\u5f3a\uff0c\u6587\u6863\u4fdd\u5b58\u4e0d\u5f53\uff0c\u4f1a\u5bfc\u81f4\u4ea7\u54c1\u7684\u6301\u7eed\u6027\u7814\u53d1\u8fed\u4ee3\u53d8\u5f97\u5f02\u5e38\u56f0\u96be\u3002\n\u4ea7\u54c1\u8ba1\u5212\uff1a\u6839\u636e\u9879\u76ee\u7684\u91cd\u8981\u4ea4\u4ed8\u8282\u70b9\u5c06\u6574\u4e2a\u4ea7\u54c1\u5468\u671f\u5212\u5206\u4e3a\u591a\u4e2a\u91cc\u7a0b\u7891\u8ba1\u5212\uff0c\u660e\u786e\u6bcf\u4e2a\u91cc\u7a0b\u7891\u8ba1\u5212\u4ea4\u4ed8\u7269\uff08\u5305\u62ec\u4f46\u4e0d\u9650\u4e8e\u7cfb\u7edf\u3001\u6587\u6863\u7b49\u9879\u76ee\u76f8\u5173\u4e8b\u9879\uff09\u4ee5\u53ca\u4ea4\u4ed8\u65f6\u95f4\uff0c\u4ea7\u54c1\u7ecf\u7406\u6839\u636e\u6bcf\u4e2a\u91cc\u7a0b\u7891\u8ba1\u5212\u6309\u65f6\u8f93\u51faPRD\u6587\u6863/\u539f\u578b\uff0c\u5e76\u53ca\u65f6\u8ddf\u7814\u53d1\u3001\u6d4b\u8bd5\u3001\u8bbe\u8ba1\u7b49\u76f8\u5173\u56e2\u961f\u8bc4\u5ba1\u5e76\u7eb3\u5165\u76f8\u5e94\u7684\u8fed\u4ee3\u8ba1\u5212\u5185\u3002\n\n\u8fed\u4ee3\u8ba1\u5212\uff1a \u6839\u636e\u9879\u76ee\u7684\u5177\u4f53\u60c5\u51b5\u5c06\u6574\u4e2a\u5f00\u53d1\u8fc7\u7a0b\u5212\u5206\u4e3a\u591a\u4e2a\u8fed\u4ee3\u5468\u671f\uff0c\u6bcf\u4e2a\u8fed\u4ee3\u5468\u671f\u65f6\u95f4\u7684\u957f\u77ed\u53d6\u51b3\u4e8e\u5f53\u524d\u9879\u76ee\u7684\u8fdb\u5ea6\u548c\u5b9e\u9645\u6267\u884c\u60c5\u51b5\u3002\u800c\u8fed\u4ee3\u5f00\u53d1\u8ba1\u5212\u5219\u53d1\u751f\u5728\u6bcf\u4e00\u8fed\u4ee3\u4e4b\u524d\uff0c\u5728\u786e\u5b9a\u8fed\u4ee3\u7684\u5f00\u59cb\u548c\u7ed3\u675f\u65f6\u95f4\u4e4b\u540e\uff0c\u6839\u636e\u9700\u6c42\u7684\u4f18\u5148\u7ea7\u3001\u5de5\u4f5c\u91cf\u4ee5\u53ca\u4eba\u529b\u8d44\u6e90\uff0c\u5c06\u5df2\u8bc4\u5ba1\u901a\u8fc7\u7684\u9700\u6c42\u7eb3\u5165\u76f8\u5e94\u7684\u8fed\u4ee3\u5185\uff0c\u9879\u76ee\u7ecf\u7406\uff08\u7814\u53d1\uff09\u5c06\u9700\u6c42\u62c6\u89e3\u6309\u529f\u80fd\u6a21\u5757\u62c6\u5206\u6210\u5177\u4f53\u7684\u5f00\u53d1\u4efb\u52a1\uff0c\u5e76\u5206\u914d\u5230\u6307\u5b9a\u7684\u7814\u53d1\u4eba\u5458\u3002\n\n\u6d4b\u8bd5\u8ba1\u5212\uff1a\u6839\u636e\u8fed\u4ee3\u5f00\u53d1\u8ba1\u5212\u3001\u6d4b\u8bd5\u4efb\u52a1\u7684\u5de5\u4f5c\u91cf\u4ee5\u53ca\u4eba\u529b\u8d44\u6e90\u60c5\u51b5\uff0c\u5c06\u5df2\u8bc4\u5ba1\u901a\u8fc7\u7684\u6d4b\u8bd5\u7528\u4f8b\uff0c\u7eb3\u5165\u5230\u8fed\u4ee3\u6d4b\u8bd5\u8ba1\u5212\u4e2d\uff0c\u5e76\u8bc4\u4f30\u6d4b\u5b9a\u8303\u56f4\u3001\u5de5\u65f6\u3001\u6d4b\u8bd5\u8d44\u6e90\u3001\u6d4b\u8bd5\u8fdb\u5c55\u548c\u98ce\u9669\u9884\u8b66\u3002\n\n\u6d4b\u8bd5\u62a5\u544a\uff1a\u6bcf\u4e2a\u8fed\u4ee3\u96c6\u6210\u6d4b\u8bd5\u901a\u8fc7\u540e\uff0c\u6839\u636e\u5b9e\u9645\u6d4b\u8bd5\u60c5\u51b5\u7f16\u5199\u6d4b\u8bd5\u62a5\u544a\uff0c\u5e76\u63cf\u8ff0\u8f6f\u4ef6\u7684\u6d4b\u8bd5\u8fc7\u7a0b\u3001 \u6d4b\u8bd5\u73af\u5883\u3001\u6d4b\u8bd5\u8303\u56f4\u3001\u6d4b\u8bd5\u7ed3\u679c\u7684\u6587\u6863\u4ee5\u53ca\u5206\u6790\u603b\u7ed3\u7cfb\u7edf\u5b58\u5728\u7684\u98ce\u9669\u4ee5\u53ca\u6d4b\u8bd5\u7ed3\u8bba\u3002\n\n")),(0,l.kt)("h3",{id:"\u89d2\u8272\u548c\u5206\u5de5"},"\u89d2\u8272\u548c\u5206\u5de5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"\n\n\u4ea7\u54c1\u7ecf\u7406\uff1a\u5728\u9700\u6c42\u524d\u671f\u8d1f\u8d23\u9700\u6c42\u8c03\u7814\u3001\u6536\u96c6\u3001\u5206\u6790\u548c\u8bc4\u5ba1\u3001\u9700\u6c42\u8bf4\u660e\u6587\u6863\uff08RRD\uff09\u7684\u7f16\u5199\u548c\u4ea7\u54c1\u539f\u578b\u7684\u8bbe\u8ba1\u3002\u9700\u6c42\u8bc4\u5ba1\u901a\u8fc7\u540e\uff0c\u7f16\u5199\u9700\u6c42\u8bf4\u660e\u6587\u6863\uff08RRD\uff09\uff0c\u7136\u540e\u8ddf\u7814\u53d1\u3001\u6d4b\u8bd5\u7b49\u76f8\u5173\u4eba\u5458\u505a\u9700\u6c42\u6f84\u6e05\u3002\u5728\u9700\u6c42\u540e\u671f\u8d1f\u8d23\u4ea7\u54c1\u9700\u6c42\u7684\u8ddf\u8e2a\u3001\u9a8c\u6536\u548c\u5176\u4ed6\u76f8\u5173\u7684\u5de5\u4f5c\u3002\n\n\u9879\u76ee\u7ecf\u7406\uff08\u7814\u53d1\uff09\uff1a\u53c2\u4e0e\u9700\u6c42\u6f84\u6e05\u4ee5\u53ca\u8d1f\u8d23\u8fed\u4ee3\u5f00\u53d1\u8ba1\u5212\u7684\u5236\u5b9a\uff0c\u4ee5\u53ca\u9700\u6c42\u7684\u529f\u80fd\u6a21\u5757\u62c6\u5206\u548c\u5f00\u53d1\u4efb\u52a1\u7684\u62c6\u89e3\uff0c\u534f\u8c03\u4ea7\u54c1\u3001\u7814\u53d1\u548c\u6d4b\u8bd5\uff0c\u786e\u4fdd\u9879\u76ee\u7814\u53d1\u8fdb\u5ea6\u7684\u6b63\u5e38\u63a8\u8fdb\uff0c\u5e76\u8d1f\u8d23\u6d4b\u8bd5\u3001\u4eff\u771f\u548c\u6b63\u5f0f\u5404\u73af\u5883\u7684\u9879\u76ee\u4e0a\u7ebf\u5de5\u4f5c\u3002\n\n\u6280\u672f\u8d1f\u8d23\u4eba\uff1a\u8d1f\u8d23\u9879\u76ee\u524d\u7aef/\u540e\u7aef\u6846\u67b6\u7684\u9009\u578b\u548c\u642d\u5efa\u3001\u6280\u672f\u96be\u70b9\u7684\u653b\u5173\uff0c\u53c2\u4e0e\u9700\u6c42\u8bc4\u5ba1\u4ee5\u53ca\u8d1f\u8d23\u6838\u5fc3\u4e1a\u52a1\u529f\u80fd\u7684\u8bbe\u8ba1\uff0c\u8d1f\u8d23\u524d\u7aef/\u540e\u7aef\u4ee3\u7801\u7684\u8bc4\u5ba1\u5de5\u4f5c\u4ee5\u53ca\u786e\u4fdd\u4ea4\u4ed8\u9879\u76ee\u524d\u7aef/\u540e\u7aef\u7684\u4ee3\u7801\u8d28\u91cf\u3002\n\nUI\u8bbe\u8ba1\u5e08\uff1a\u8d1f\u8d23\u9879\u76ee\u6574\u4f53UE/UI/VI\u8bbe\u8ba1\u98ce\u683c\uff0c\u5e76\u6839\u636e\u5df2\u8bc4\u5ba1\u7684\u9700\u6c42\u5b8c\u6210\u76f8\u5e94\u7684UE/UI/VI\u8bbe\u8ba1\uff0c\u5e76\u5728\u7814\u53d1\u8fc7\u7a0b\u4e2d\u786e\u4fdd\u524d\u7aef\u5f00\u53d1\u7684\u754c\u9762\u662f\u4e25\u683c\u53c2\u7167\u8bbe\u8ba1\u6765\u5b9e\u73b0\u7684\u3002\n\n\u7814\u53d1\u5de5\u7a0b\u5e08\uff1a\u8d1f\u8d23\u524d\u540e\u7aef\u9700\u6c42\u7684\u7f16\u7801\u5de5\u4f5c\u4ee5\u53ca\u5bf9\u81ea\u5df1\u7f16\u7801\u7684\u90e8\u5206\u5b8c\u6210\u5355\u5143\u6d4b\u8bd5\uff0c\u5e76\u53ca\u65f6\u5b8c\u6210\u76f8\u5173bug\u4fee\u590d\u5de5\u4f5c\uff0c\u5bf9\u4e8e\u8bc4\u5ba1\u4e0d\u5408\u683c\u7684\u4ee3\u7801\u53ca\u65f6\u6309\u8981\u6c42\u4fee\u6539\u3002\n\n\u6d4b\u8bd5\u5de5\u7a0b\u5e08\uff1a\u8d1f\u8d23\u7cfb\u7edf\u7684\u6d4b\u8bd5\u7528\u4f8b\u7684\u7f16\u5199\uff0c\u4f9d\u636e\u7ecf\u8fc7\u8bc4\u5ba1\u901a\u8fc7\u540e\u7684\u6d4b\u8bd5\u7528\u4f8b\u5b8c\u6210\u96c6\u6210\u6d4b\u8bd5\u3001\u56de\u5f52\u6d4b\u8bd5\u548c\u5192\u70df\u6d4b\u8bd5\u5404\u4e2a\u9636\u6bb5\u7684\u76f8\u5173\u5de5\u4f5c\uff0c\u5e76\u53ca\u65f6\u53cd\u9988\u7ed9\u76f8\u5e94\u7684\u7814\u53d1\u4eba\u5458\u548c\u5b9e\u65f6\u8ddf\u8e2abug\u7684\u4fee\u590d\u60c5\u51b5\uff0c\u5728\u96c6\u6210\u6d4b\u8bd5\u901a\u8fc7\u540e\uff0c\u63d0\u4f9b\u76f8\u5e94\u7684\u6d4b\u8bd5\u8d28\u91cf\u62a5\u544a\uff0c\u5728\u5192\u70df\u6d4b\u8bd5\u901a\u8fc7\u540e\u60f3\u76f8\u5173\u4eba\u5458\u540c\u6b65\u4e0a\u7ebf\u7ed3\u679c\u3002\n\n")),(0,l.kt)("h3",{id:"\u90e8\u95e8\u5206\u5de5"},"\u90e8\u95e8\u5206\u5de5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"\n\u4ea7\u54c1\u90e8\uff1a\u8d1f\u8d23\u9700\u6c42\u8c03\u7814\u3001\u6536\u96c6\u3001\u5206\u6790\u548c\u786e\u8ba4\uff0c\u4ee5\u53ca\u9700\u6c42\u7684\u8fdb\u5ea6\u8ddf\u8e2a\u548c\u9a8c\u6536\u5de5\u4f5c\uff0c\u662f\u7814\u53d1\u9700\u6c42\u7684\u552f\u4e00\u8f93\u5165\u65b9\u3002\n\n\u7814\u53d1\u90e8\uff1a\u8d1f\u8d23\u4ea7\u54c1\u9700\u6c42\u7684\u5177\u4f53\u5b9e\u73b0\uff0c\u5e76\u786e\u4fdd\u9879\u76ee\u7684\u9ad8\u8d28\u91cf\u9ad8\u6548\u7387\u9ad8\u6c34\u5e73\u4ea4\u4ed8\u3002\n\n\u6d4b\u8bd5\u90e8\uff1a\u8d1f\u8d23\u9879\u76ee\u4ea4\u4ed8\u7684\u8d28\u91cf\u4fdd\u8bc1\uff0c\u786e\u4fdd\u4ea4\u4ed8\u7269\u7684\u53ef\u7528\u6027\u548c\u53ef\u9760\u6027\uff0c\u662f\u7cfb\u7edf\u7f3a\u9677\u7684\u552f\u4e00\u8f93\u5165\u65b9\n\n")),(0,l.kt)("h3",{id:"\u57fa\u672c\u5de5\u4f5c\u51c6\u5219"},"\u57fa\u672c\u5de5\u4f5c\u51c6\u5219"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"\n1\u3001\u6bcf\u9879\u9700\u6c42\u548c\u4efb\u52a1\u90fd\u9700\u8981\u786e\u5b9a\u8d1f\u8d23\u4eba\u548c\u8bc4\u4f30\u5b8c\u6210\u6240\u9700\u7684\u5de5\u65f6\n\n2\u3001\u5173\u952e\u5de5\u4f5c\u5b8c\u6210\u4ee5\u540e\uff0c\u9700\u8981\u8fdb\u884c\u8bc4\u5ba1\uff0c\u4e14\u8bc4\u5ba1\u901a\u8fc7\u540e\u624d\u53ef\u4ee5\u8fdb\u884c\u4e0b\u4e00\u9879\u5de5\u4f5c\uff0c\u6bd4\u5982PRD\u6587\u6863\u548c\u539f\u578b\u9700\u8981\u9700\u6c42\u8bc4\u5ba1\u901a\u8fc7\u540e\u624d\u53ef\u4ee5\u8fdb\u5165\u8fed\u4ee3\u5f00\u53d1\uff0c\u63d0\u4ea4\u5408\u5e76\u7684\u4ee3\u7801\u5fc5\u987b\u4ee3\u7801\u8bc4\u5ba1\u901a\u8fc7\u540e\u624d\u53ef\u4ee5\u5408\u5e76\u5230\u5f00\u53d1\u5206\u652f\uff0c\u6d4b\u8bd5\u7528\u4f8b\u5b8c\u6210\u8bc4\u5ba1\u540e\u624d\u5f00\u59cb\u6d4b\u8bd5\u8ba1\u5212\u7684\u7f16\u5199\u3002\n\n3\u3001\u4e0d\u80fd\u6309\u8ba1\u5212\u5b8c\u6210\u7684\u5de5\u4f5c\uff0c\u5728\u6bcf\u65e5\u4f8b\u4f1a\u4e2d\u9700\u53ca\u65f6\u6c9f\u901a\uff0c\u5e76\u7ed9\u51fa\u539f\u56e0\uff0c\u6709\u98ce\u9669\u53ca\u65f6\u66b4\u9732\u51fa\u6765\u3002\n\n4\u3001\u6240\u6709\u9700\u6c42\u4fee\u6539\u548c\u53d8\u66f4\u5fc5\u987b\u7ecf\u8fc7\u76f8\u5e94\u7684\u4ea7\u54c1\u7ecf\u7406\u548c\u9879\u76ee\u7ecf\u7406\u8bc4\u5ba1\u540e\u63d0\u4ea4\u7ed9\u7814\u53d1\uff0c\u6240\u6709\u7f3a\u9677\u6216\u8005bug\u5fc5\u987b\u7ecf\u8fc7\u6d4b\u8bd5\u4eba\u5458\u548c\u9879\u76ee\u7ecf\u7406\u786e\u8ba4\u540e\u63d0\u4ea4\u7ed9\u7814\u53d1\u3002\n\n5\u3001\u8fed\u4ee3\u7ed3\u675f\u4e4b\u524d\u5b8c\u6210\u4e0a\u7ebf\u5de5\u4f5c\uff0c\u5982\u679c\u56e0\u5176\u4ed6\u56e0\u7d20\u5bfc\u81f4\u4e0d\u80fd\u5728\u8fed\u4ee3\u7ed3\u675f\u524d\u5b8c\u6210\u4e0a\u7ebf\uff0c\u9700\u7ed9\u51fa\u60c5\u51b5\u8bf4\u660e\u3002\n\n")),(0,l.kt)("h2",{id:"\u7ba1\u7406\u89c4\u8303"},"\u7ba1\u7406\u89c4\u8303"),(0,l.kt)("h2",{id:"\u7ecf\u9a8c\u4e4b\u8c08"},"\u7ecf\u9a8c\u4e4b\u8c08"),(0,l.kt)("p",null,"\u5177\u4f53\u60c5\u51b5\u5177\u4f53\u5206\u6790\uff0c\u4e0d\u770b\u516c\u53f8\u89c4\u6a21\u548c\u4e1a\u52a1\u6765\u5c31\u662f\u800d\u6d41\u6c13\u3002\n\u9996\u5148\u8981\u770b\u516c\u53f8\u76ee\u7684\u662f\u4ec0\u4e48\uff1f"),(0,l.kt)("p",null,"\u81f3\u4e8e\u4f7f\u7528\u5206\u5e03\u5f0f\u4f53\u7cfb\uff0c\u4ee5 java \u4e3a\u4f8b\uff0c\u6211\u89c9\u5f97\u4e00\u822c\u516c\u53f8\u53ef\u4ee5\u8003\u8651\u4e0b\u9762\u7684\u6b65\u9aa4\uff1a\n(1)\u6240\u6709\u670d\u52a1\u91c7\u7528\u7edf\u4e00\u7684\u6280\u672f\u4f53\u7cfb\uff0c\u63a8\u8350 Springboot\n(2)\u642d\u5efa\u7edf\u4e00\u7684\u811a\u624b\u67b6\uff0c\u53ef\u4ee5\u53c2\u8003\u5f00\u6e90\u7684\u4e00\u4e9b\uff0c\u5305\u62ec\u4e0d\u9650\u4e8e\u5206\u5e03\u5f0f\u6846\u67b6\u9009\u578b(Dubbo\u3001SpringCloud)\uff0c\u5206\u5e03\u5f0f\u7f13\u5b58\u9009\u578b(Redis)\u3001\u65e5\u5fd7\u5904\u7406\u548c\u683c\u5f0f(\u91c7\u96c6\u5efa\u8bae ELK)\u3001\u6d88\u606f\u4e2d\u95f4\u4ef6\u9009\u578b(Kafak\u3001RokatMq)\u3001\u5206\u5e03\u5f0f\u5b9a\u65f6\u4efb\u52a1\u9009\u578b(ElasticJob)\u3001\u7edf\u4e00\u7684\u5de5\u5177\u7c7b\u5e93(cooms\u3001guvua\u3001fastjson \u7b49)\u3001Mybatis\u3001\u4ee3\u7801\u751f\u6210\u5668\u3001Mybatis-plus\u3001\u5206\u9875\u63d2\u4ef6\u3001\u7edf\u4e00\u5f02\u5e38\u5b9a\u4e49\u548c\u5904\u7406\u3001\u7edf\u4e00\u7684\u8bf7\u6c42\u62e6\u622a\u5668\u7b49\u3002\n(3)\u7f16\u7801\u89c4\u8303\u5b9a\u4e49\uff0c\u53ef\u4ee5\u53c2\u8003\u963f\u91cc\u89c4\u8303\uff0c\u4f46\u8981\u8003\u8651\u5b9e\u7528\u6027\uff0c\u4e0d\u53ef\u80fd\u6bcf\u4e2a\u4eba\u90fd\u5f3a\u5236\u9075\u5b88\uff0c\u90a3\u4e9b\u662f\u91cd\u8981\u7684\uff0c\u5fc5\u987b\u9075\u5b88\uff0c\u90a3\u4e9b\u662f\u53ef\u4ee5\u9002\u5ea6\u653e\u5bbd\u7684\u3002Maven\u3001git \u547d\u540d\u3001\u6253\u5305\u3001\u53d1\u5e03\u89c4\u8303\u3002\n(4)\u5efa\u7acb\u81ea\u52a8\u5316\u53d1\u5e03\u8fd0\u7ef4\u7684\u6846\u67b6\u6bd4\u5982 jenkins\u3001ELK\u3001\u9489\u9489\u90ae\u4ef6\u9884\u8b66\u3001\u7f51\u5173(zuul \u666e\u7f57\u7c73\u4fee\u65af)\u6d41\u91cf\u76d1\u63a7\u62a5\u8b66\uff0c\u4ee5\u53ca WIKI \u548c\u7c7b\u4f3c\u7985\u9053\u4e4b\u7c7b\u7684 BUG \u7ba1\u7406\u5e73\u53f0\n(5)\u8fd9\u4e9b\u7b97\u662f\u901a\u7528\u7684\u5e95\u5b50\uff0c\u7136\u540e\u8981\u6839\u636e\u73b0\u6709\u7684\u4e1a\u52a1\u8fdb\u884c\u62c6\u5206\uff0c\u6bd4\u5982\u5fae\u670d\u52a1\u7684\u8bdd\u53ef\u4ee5\u5bf9\u4e1a\u52a1\u62c6\u5206\uff0c\u6bd4\u5982\u7528\u6237\u5e73\u53f0\u3001\u6743\u9650\u5e73\u53f0\u3001\u5546\u54c1\u5e73\u53f0\u3001\u4ea4\u6613\u5e73\u53f0\u3001\u98ce\u63a7\u5e73\u53f0\u7b49\u3002\u5fae\u670d\u52a1\u4e4b\u4e0a\u53ef\u4ee5\u8003\u8651\u589e\u52a0\u4e1a\u52a1\u805a\u5408\u670d\u52a1\uff0c\u76f4\u63a5\u5bf9\u5e94\u90e8\u5206\u524d\u7aef\u3002\u6240\u6709\u5bf9\u5916\u670d\u52a1\u90fd\u5e94\u901a\u8fc7\u7f51\u5173\u7edf\u4e00\u5bf9\u5916\u66b4\u9732\uff0c\u5728\u7f51\u5173\u5c42\u9762\u8003\u8651\u7528\u666e\u7f57\u7c73\u4fee\u65af\u4e4b\u7c7b\u7684\u5bf9\u8c03\u7528\u505a\u76d1\u63a7\u3002\u5bf9\u4e8e\u7528\u6237\u5e73\u53f0\u9700\u8981\u8003\u8651\u7edf\u4e00\u7684\u767b\u5f55\u6ce8\u518c\uff0c\u53ef\u4ee5\u8003\u8651\u5728\u7f51\u5173\u5c42\u589e\u52a0\u5bf9\u8c03\u7528\u7684\u7ba1\u7406\u3002\u4ea4\u6613\u5e73\u53f0\u53ef\u80fd\u8ddf\u98ce\u63a7\u76f8\u5173\uff0c\u901a\u8fc7\u65e5\u5fd7\u91c7\u96c6\u53d1\u5f80\u76f8\u5173\u7684\u5904\u7406\u7cfb\u7edf\u518d\u56de\u5199\u5230\u76f8\u5173\u8868\u4e2d\uff0c\u98ce\u63a7\u63d0\u4f9b\u76f8\u5173\u63a5\u53e3\u3002\u6bd4\u5982\u5546\u54c1\u53ef\u80fd\u9700\u8981\u68c0\u7d22\u7cfb\u7edf\uff0c\u90a3\u53ef\u4ee5\u8003\u8651\u5728\u57fa\u7840\u4e4b\u4e0a\u589e\u52a0 ElasticSearch \u5bf9\u5546\u54c1\u4fe1\u606f\u8fdb\u884c\u68c0\u7d22\u3002\u6bd4\u5982\u6d3b\u52a8\u5e73\u53f0\u53ef\u4ee5\u8003\u8651\u589e\u52a0\u89c4\u5219\u5f15\u64ce\uff0c\u9ad8\u5ea6\u81ea\u5b9a\u4e49\u89c4\u5219\uff0c\u5c06\u89c4\u5219\u914d\u7f6e\u79fb\u4ea4\u7ed9\u8fd0\u8425\u4eba\u5458\uff0c\u51cf\u5c11\u91cd\u590d\u5f00\u53d1\u3002\u6839\u636e\u516c\u53f8\u4e1a\u52a1\u62c6\u5206\u6210\u4e0d\u540c\u7684\u5c0f\u5e73\u53f0\u548c\u4e1a\u52a1\uff0c\u518d\u6839\u636e\u5176\u7279\u70b9\u9009\u62e9\u6280\u672f\u3002\n(6)\u539f\u5219\u4e0a\u6709\u5f00\u6e90\u7684\u7cfb\u7edf\uff0c\u5c31\u5b66\u4e60\u5e76\u4f7f\u7528\u5f00\u6e90\u4ea7\u54c1\uff0c\u8fd9\u6837\u51cf\u5c11\u5f00\u53d1\u65f6\u95f4\uff0c\u4f46\u968f\u7740\u4e1a\u52a1\u53d1\u5c55\u5f00\u6e90\u4ea7\u54c1\u4e0d\u80fd\u6ee1\u8db3\u65f6\uff0c\u53ef\u4ee5\u6839\u636e\u81ea\u8eab\u7279\u70b9\u5f00\u53d1\u81ea\u5df1\u7684\u4ea7\u54c1\uff0c\u6bd4\u5982\u4e1a\u754c\u7684\u5de5\u4f5c\u6d41\u53ef\u80fd\u4e0d\u80fd\u6ee1\u8db3\u516c\u53f8\u7684\u9700\u6c42\uff0c\u516c\u53f8\u53ef\u4ee5\u81ea\u5df1\u5f00\u53d1\u4e00\u5957\u57fa\u4e8e XX \u4e0a\u7684\u6539\u8fdb\u7248\u672c\u3002\u5c31\u7c7b\u4f3c\u4e0e Dubbo->Dubbox\uff0c\u751a\u81f3\u5f00\u6e90\u51fa\u6765\u56de\u9988\u793e\u533a"),(0,l.kt)("p",null,"\u6700\u540e\u6280\u672f\u53ea\u662f\u4e3a\u4e1a\u52a1\u670d\u52a1\u7684\uff0c\u4efb\u4f55\u516c\u53f8\u90fd\u662f\u4f9d\u9760\u4e1a\u52a1\u53d1\u5c55\u7684\uff0c\u8ffd\u6c42\u4f18\u79c0\u7684\u6280\u672f\u662f\u6b63\u786e\uff0c\u4f46\u8981\u4e00\u5b9a\u8981\u8003\u8651\u516c\u53f8\u81ea\u8eab\u7684\u60c5\u51b5\u548c\u5bfb\u627e\u5408\u9002\u7684\u65f6\u95f4>_<"))}d.isMDXComponent=!0},31046:function(e,n,t){n.Z=t.p+"assets/images/dev-normal-process-69e3d061380123fd05d6672f71205c01.png"}}]);