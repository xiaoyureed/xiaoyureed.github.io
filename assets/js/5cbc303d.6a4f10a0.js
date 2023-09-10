"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1401],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),i=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=i(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=i(n),m=r,k=d["".concat(p,".").concat(m)]||d[m]||u[m]||l;return n?a.createElement(k,s(s({ref:t},c),{},{components:n})):a.createElement(k,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var i=2;i<l;i++)s[i]=n[i];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85722:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return u}});var a=n(83117),r=n(80102),l=(n(67294),n(3905)),s=["components"],o={title:"\u51e0\u79cdCSS\u9884\u5904\u7406\u5668\u6bd4\u8f83\u9009\u578b",tags:["css","processor"],date:new Date("2018-05-02T10:54:38.000Z"),toc_min_heading_level:2,toc_max_heading_level:5},p=void 0,i={unversionedId:"css-pre-processor",id:"css-pre-processor",title:"\u51e0\u79cdCSS\u9884\u5904\u7406\u5668\u6bd4\u8f83\u9009\u578b",description:"css\u7684\u9884\u5904\u7406\u5668\u4e3b\u6d41\u7684\u5927\u6982\u6709: SASS, LESS, Stylus;",source:"@site/docs/css-pre-processor.md",sourceDirName:".",slug:"/css-pre-processor",permalink:"/docs/css-pre-processor",draft:!1,tags:[{label:"css",permalink:"/docs/tags/css"},{label:"processor",permalink:"/docs/tags/processor"}],version:"current",frontMatter:{title:"\u51e0\u79cdCSS\u9884\u5904\u7406\u5668\u6bd4\u8f83\u9009\u578b",tags:["css","processor"],date:"2018-05-02T10:54:38.000Z",toc_min_heading_level:2,toc_max_heading_level:5},sidebar:"tutorialSidebar",previous:{title:"Computer Science Intro",permalink:"/docs/cs-note"},next:{title:"Data Structure and Algorithm",permalink:"/docs/data-structure-and-algorithm"}},c={},u=[{value:"why css preprocessor",id:"why-css-preprocessor",level:2},{value:"\u4f1a\u5e26\u6765\u7684\u65b0\u95ee\u9898",id:"\u4f1a\u5e26\u6765\u7684\u65b0\u95ee\u9898",level:2},{value:"\u7b80\u5355\u4ecb\u7ecd postcss",id:"\u7b80\u5355\u4ecb\u7ecd-postcss",level:2},{value:"\u600e\u4e48\u4f7f\u7528 tailwindcss",id:"\u600e\u4e48\u4f7f\u7528-tailwindcss",level:2},{value:"\u81ea\u5b9a\u4e49postcss\u63d2\u4ef6",id:"\u81ea\u5b9a\u4e49postcss\u63d2\u4ef6",level:2},{value:"\u73af\u5883\u914d\u7f6e",id:"\u73af\u5883\u914d\u7f6e",level:2},{value:"\u6d4f\u89c8\u5668\u7aef\u7528\u6cd5",id:"\u6d4f\u89c8\u5668\u7aef\u7528\u6cd5",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53d8\u91cf",id:"\u53d8\u91cf",level:3},{value:"\u6df7\u5408",id:"\u6df7\u5408",level:3},{value:"\u4e0d\u5e26\u53c2\u6570",id:"\u4e0d\u5e26\u53c2\u6570",level:4},{value:"\u5e26\u53c2\u6570",id:"\u5e26\u53c2\u6570",level:4},{value:"\u53c2\u6570\u6709\u9ed8\u8ba4\u503c",id:"\u53c2\u6570\u6709\u9ed8\u8ba4\u503c",level:4},{value:"\u6682\u65f6\u9690\u85cfcss\u5c5e\u6027",id:"\u6682\u65f6\u9690\u85cfcss\u5c5e\u6027",level:3},{value:"@arguments\u53d8\u91cf",id:"arguments\u53d8\u91cf",level:3},{value:"\u6a21\u5f0f\u5339\u914d(\u6df7\u5408\u4e2d\u7684\u53c2\u6570\u5339\u914d)",id:"\u6a21\u5f0f\u5339\u914d\u6df7\u5408\u4e2d\u7684\u53c2\u6570\u5339\u914d",level:3},{value:"\u5bfc\u5f15\u8868\u8fbe\u5f0f(\u7c7b\u4f3c@media query)",id:"\u5bfc\u5f15\u8868\u8fbe\u5f0f\u7c7b\u4f3cmedia-query",level:3},{value:"\u5355\u8868\u8fbe\u5f0f",id:"\u5355\u8868\u8fbe\u5f0f",level:4},{value:"\u591a\u8868\u8fbe\u5f0f",id:"\u591a\u8868\u8fbe\u5f0f",level:4},{value:"\u53c2\u6570\u503c\u7c7b\u578b\u5224\u65ad(isXXX\u5185\u7f6e\u51fd\u6570)",id:"\u53c2\u6570\u503c\u7c7b\u578b\u5224\u65adisxxx\u5185\u7f6e\u51fd\u6570",level:3},{value:"\u5d4c\u5957",id:"\u5d4c\u5957",level:3},{value:"\u8fd0\u7b97",id:"\u8fd0\u7b97",level:3},{value:"color\u51fd\u6570",id:"color\u51fd\u6570",level:3},{value:"Math\u51fd\u6570",id:"math\u51fd\u6570",level:3},{value:"\u547d\u540d\u7a7a\u95f4",id:"\u547d\u540d\u7a7a\u95f4",level:3},{value:"\u4f5c\u7528\u57df",id:"\u4f5c\u7528\u57df",level:3},{value:"importing\u5f15\u5165",id:"importing\u5f15\u5165",level:3},{value:"\u5b57\u7b26\u4e32\u63d2\u503c",id:"\u5b57\u7b26\u4e32\u63d2\u503c",level:3},{value:"\u907f\u514d\u7f16\u8bd1",id:"\u907f\u514d\u7f16\u8bd1",level:3},{value:"JavaScript \u8868\u8fbe\u5f0f",id:"javascript-\u8868\u8fbe\u5f0f",level:3}],d={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("div",{align:"center"},"css\u7684\u9884\u5904\u7406\u5668\u4e3b\u6d41\u7684\u5927\u6982\u6709: SASS, LESS, Stylus;",(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://tympanus.net/codrops/"},"https://tympanus.net/codrops/")," \u7075\u611f"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/chokcoco/iCSS"},"https://github.com/chokcoco/iCSS")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://zh.learnlayout.com/display"},"https://zh.learnlayout.com/display")),(0,l.kt)("p",null,"css \u6a21\u5757\u5316")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#css-tips"},"css tips")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#css-%E9%A2%84%E5%A4%84%E7%90%86%E5%99%A8%E4%BB%8B%E7%BB%8D"},"css \u9884\u5904\u7406\u5668\u4ecb\u7ecd"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#why-css-preprocessor"},"why css preprocessor")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E4%BC%9A%E5%B8%A6%E6%9D%A5%E7%9A%84%E6%96%B0%E9%97%AE%E9%A2%98"},"\u4f1a\u5e26\u6765\u7684\u65b0\u95ee\u9898")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E9%80%89%E5%9E%8B%E5%92%8C%E5%AF%B9%E6%AF%94"},"\u9009\u578b\u548c\u5bf9\u6bd4")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#postcss"},"PostCSS"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E7%AE%80%E5%8D%95%E4%BB%8B%E7%BB%8D-postcss"},"\u7b80\u5355\u4ecb\u7ecd postcss")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E6%80%8E%E4%B9%88%E4%BD%BF%E7%94%A8-tailwindcss"},"\u600e\u4e48\u4f7f\u7528 tailwindcss")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E8%87%AA%E5%AE%9A%E4%B9%89postcss%E6%8F%92%E4%BB%B6"},"\u81ea\u5b9a\u4e49postcss\u63d2\u4ef6")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#sass"},"SASS")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#less"},"LESS"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E7%8E%AF%E5%A2%83%E9%85%8D%E7%BD%AE"},"\u73af\u5883\u914d\u7f6e")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E6%B5%8F%E8%A7%88%E5%99%A8%E7%AB%AF%E7%94%A8%E6%B3%95"},"\u6d4f\u89c8\u5668\u7aef\u7528\u6cd5")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E8%AF%AD%E6%B3%95"},"\u8bed\u6cd5"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E5%8F%98%E9%87%8F"},"\u53d8\u91cf")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E6%B7%B7%E5%90%88"},"\u6df7\u5408"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E4%B8%8D%E5%B8%A6%E5%8F%82%E6%95%B0"},"\u4e0d\u5e26\u53c2\u6570")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E5%B8%A6%E5%8F%82%E6%95%B0"},"\u5e26\u53c2\u6570")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E5%8F%82%E6%95%B0%E6%9C%89%E9%BB%98%E8%AE%A4%E5%80%BC"},"\u53c2\u6570\u6709\u9ed8\u8ba4\u503c")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E6%9A%82%E6%97%B6%E9%9A%90%E8%97%8Fcss%E5%B1%9E%E6%80%A7"},"\u6682\u65f6\u9690\u85cfcss\u5c5e\u6027")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#arguments%E5%8F%98%E9%87%8F"},"@arguments\u53d8\u91cf")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E6%A8%A1%E5%BC%8F%E5%8C%B9%E9%85%8D%E6%B7%B7%E5%90%88%E4%B8%AD%E7%9A%84%E5%8F%82%E6%95%B0%E5%8C%B9%E9%85%8D"},"\u6a21\u5f0f\u5339\u914d(\u6df7\u5408\u4e2d\u7684\u53c2\u6570\u5339\u914d)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E5%AF%BC%E5%BC%95%E8%A1%A8%E8%BE%BE%E5%BC%8F%E7%B1%BB%E4%BC%BCmedia-query"},"\u5bfc\u5f15\u8868\u8fbe\u5f0f(\u7c7b\u4f3c@media query)"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E5%8D%95%E8%A1%A8%E8%BE%BE%E5%BC%8F"},"\u5355\u8868\u8fbe\u5f0f")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E5%A4%9A%E8%A1%A8%E8%BE%BE%E5%BC%8F"},"\u591a\u8868\u8fbe\u5f0f")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E5%8F%82%E6%95%B0%E5%80%BC%E7%B1%BB%E5%9E%8B%E5%88%A4%E6%96%ADisxxx%E5%86%85%E7%BD%AE%E5%87%BD%E6%95%B0"},"\u53c2\u6570\u503c\u7c7b\u578b\u5224\u65ad(isXXX\u5185\u7f6e\u51fd\u6570)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E5%B5%8C%E5%A5%97"},"\u5d4c\u5957")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E8%BF%90%E7%AE%97"},"\u8fd0\u7b97")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#color%E5%87%BD%E6%95%B0"},"color\u51fd\u6570")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#math%E5%87%BD%E6%95%B0"},"Math\u51fd\u6570")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E5%91%BD%E5%90%8D%E7%A9%BA%E9%97%B4"},"\u547d\u540d\u7a7a\u95f4")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E4%BD%9C%E7%94%A8%E5%9F%9F"},"\u4f5c\u7528\u57df")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#importing%E5%BC%95%E5%85%A5"},"importing\u5f15\u5165")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E5%AD%97%E7%AC%A6%E4%B8%B2%E6%8F%92%E5%80%BC"},"\u5b57\u7b26\u4e32\u63d2\u503c")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E9%81%BF%E5%85%8D%E7%BC%96%E8%AF%91"},"\u907f\u514d\u7f16\u8bd1")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#javascript-%E8%A1%A8%E8%BE%BE%E5%BC%8F"},"JavaScript \u8868\u8fbe\u5f0f")))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#css-%E6%A8%A1%E5%9D%97%E5%8C%96"},"css \u6a21\u5757\u5316")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#css-%E6%A1%86%E6%9E%B6"},"css \u6846\u67b6")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E5%93%8D%E5%BA%94%E5%BC%8F%E9%A1%B5%E9%9D%A2"},"\u54cd\u5e94\u5f0f\u9875\u9762"))),(0,l.kt)("h1",{id:"css-tips"},"css tips"),(0,l.kt)("h1",{id:"css-\u9884\u5904\u7406\u5668\u4ecb\u7ecd"},"css \u9884\u5904\u7406\u5668\u4ecb\u7ecd"),(0,l.kt)("h2",{id:"why-css-preprocessor"},"why css preprocessor"),(0,l.kt)("p",null,"CSS\u4ec5\u4ec5\u662f\u4e00\u4e2a\u6807\u8bb0\u8bed\u8a00\uff0c\u4e0d\u662f\u7f16\u7a0b\u8bed\u8a00\uff0c\u56e0\u6b64\u4e0d\u53ef\u4ee5\u81ea\u5b9a\u4e49\u53d8\u91cf\uff0c\u4e0d\u53ef\u4ee5\u5f15\u7528"),(0,l.kt)("h2",{id:"\u4f1a\u5e26\u6765\u7684\u65b0\u95ee\u9898"},"\u4f1a\u5e26\u6765\u7684\u65b0\u95ee\u9898"),(0,l.kt)("p",null,"CSS\u7684\u597d\u5904\u5728\u4e8e\u7b80\u4fbf\u3001\u968f\u65f6\u968f\u5730\u88ab\u4f7f\u7528\u548c\u8c03\u8bd5\u3002"),(0,l.kt)("p",null,"\u9884\u7f16\u8bd1CSS\u6b65\u9aa4\u7684\u52a0\u5165\uff0c\u8ba9\u6211\u4eec\u5f00\u53d1\u5de5\u4f5c\u6d41\u4e2d\u591a\u4e86\u4e00\u4e2a\u73af\u8282\uff0c\u8c03\u8bd5\u4e5f\u53d8\u5f97\u66f4\u9ebb\u70e6\u4e86\u3002"),(0,l.kt)("p",null,"\u66f4\u5927\u7684\u95ee\u9898\u5728\u4e8e\uff0c\u9884\u7f16\u8bd1\u5f88\u5bb9\u6613\u9020\u6210\u540e\u4ee3\u9009\u62e9\u5668\u7684\u6ee5\u7528\u3002"),(0,l.kt)("h1",{id:"\u9009\u578b\u548c\u5bf9\u6bd4"},"\u9009\u578b\u548c\u5bf9\u6bd4"),(0,l.kt)("p",null,"\u8bed\u6cd5\u533a\u522b: ",(0,l.kt)("a",{parentName:"p",href:"https://zhuanlan.zhihu.com/p/38715068"},"https://zhuanlan.zhihu.com/p/38715068"),", ",(0,l.kt)("a",{parentName:"p",href:"https://efe.baidu.com/blog/revisiting-css-preprocessors/"},"https://efe.baidu.com/blog/revisiting-css-preprocessors/")),(0,l.kt)("p",null,"============ sass \u4f18\u70b9"),(0,l.kt)("p",null,"sass \u6bd4 less \u66f4\u50cf\u5b8c\u6574\u7684\u7f16\u7a0b\u8bed\u8a00, \u6709 \u53d8\u91cf (\u5168\u5c40, \u5c40\u90e8\u533a\u5206), \u51fd\u6570, \u4f5c\u7528\u57df, \u6d41\u7a0b\u63a7\u5236, \u6570\u636e\u7ed3\u6784...,"),(0,l.kt)("p",null,"\u6709\u6210\u719f\u7684\u6846\u67b6, \u5982 Compass, Foundation"),(0,l.kt)("p",null,"\u793e\u533a\u70ed\u5ea6\u6bd4 less \u66f4\u53d1\u8fbe"),(0,l.kt)("p",null,"\u8fd8\u6709Scss\u5bf9sass\u8bed\u6cd5\u8fdb\u884c\u4e86\u6539\u826f, \u5b8c\u5168\u517c\u5bb9 css \u8bed\u6cd5 (\u548c less \u6253\u5e73\u4e86)"),(0,l.kt)("p",null,"bootstrap\u6700\u65b0\u7248\u5c31\u629b\u5f03 less, \u8f6c\u5411 sass\u4e86"),(0,l.kt)("p",null,"\u4e30\u5bcc\u7684 ruby api \u652f\u6301, \u9002\u5408\u5f00\u53d1 css \u6846\u67b6"),(0,l.kt)("p",null,"=============== sass \u7f3a\u70b9"),(0,l.kt)("p",null,"\u4f46\u662f sass \u5b89\u88c5\u9700\u8981 ruby \u73af\u5883\u652f\u6301, less \u53ea\u9700\u8981 \u5f15\u5165 'less.js' \u5373\u53ef"),(0,l.kt)("p",null,"\u5f00\u53d1\u5de5\u5177\u4e5f\u6ca1\u6709\u76f8\u5e94\u7684sass\u7f16\u7801\u63d0\u793a"),(0,l.kt)("p",null,"=================Stylus"),(0,l.kt)("p",null,"\u6765\u81eanode.js\u793e\u533a"),(0,l.kt)("p",null,"\u4eba\u6c14\u4e0d\u53casass, less"),(0,l.kt)("p",null,"\u8bed\u6cd5\u66f4\u7b80\u6d01, \u6bd4\u5982\u7528\u7f29\u8fdb\u4ee3\u66ff\u5927\u62ec\u53f7"),(0,l.kt)("h1",{id:"postcss"},"PostCSS"),(0,l.kt)("h2",{id:"\u7b80\u5355\u4ecb\u7ecd-postcss"},"\u7b80\u5355\u4ecb\u7ecd postcss"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/postcss/postcss"},"https://github.com/postcss/postcss")," git \u4ed3\u5e93"),(0,l.kt)("p",null,"\u4e0d\u662f css preprocessor, \u662f\u4e00\u4e2a\u4f7f\u7528JS\u63d2\u4ef6\u6765\u8f6c\u6362\u6837\u5f0f\u7684\u5de5\u5177 (\u68c0\u67e5\uff08lint\uff09\u4f60\u7684 CSS\uff0c\u652f\u6301 CSS Variables \u548c Mixins\uff0c \u7f16\u8bd1\u5c1a\u672a\u88ab\u6d4f\u89c8\u5668\u5e7f\u6cdb\u652f\u6301\u7684\u5148\u8fdb\u7684 CSS \u8bed\u6cd5\uff0c\u5185\u8054\u56fe\u7247)"),(0,l.kt)("p",null,"\u4f5c\u4e3a\u4e00\u4e2a\u5e73\u53f0, \u53ef\u4ee5\u7f16\u5199\u5404\u79cd\u63d2\u4ef6\u5b9e\u73b0\u5bf9 css \u7684\u5904\u7406, Autoprefixer \u662f\u6700\u706b\u7684\u63d2\u4ef6 (\u5e95\u5c42\u539f\u7406\u5b9e\u9645\u662f PostCSS \u63d0\u4f9b\u4e86\u4e00\u4e2a\u89e3\u6790\u5668\uff0c\u5b83\u80fd\u591f\u5c06 CSS \u89e3\u6790\u6210\u62bd\u8c61\u8bed\u6cd5\u6811\uff08AST\uff09\u3002)"),(0,l.kt)("p",null,"TailwindCSS \u53ef\u4ee5\u4f5c\u4e3a postcss \u7684\u4e00\u4e2a\u63d2\u4ef6\u6765\u4f7f\u7528"),(0,l.kt)("p",null,"\u53ef\u4ee5\u641c\u7d22\u63d2\u4ef6 \u5728\u8fd9\u91cc ",(0,l.kt)("a",{parentName:"p",href:"https://www.postcss.parts/"},"https://www.postcss.parts/")," , \u6240\u6709\u63d2\u4ef6\u540c\u65f6\u5217\u5728\u8fd9\u91cc\u4e86 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/postcss/postcss/blob/main/docs/plugins.md"},"https://github.com/postcss/postcss/blob/main/docs/plugins.md")),(0,l.kt)("h2",{id:"\u600e\u4e48\u4f7f\u7528-tailwindcss"},"\u600e\u4e48\u4f7f\u7528 tailwindcss"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"tailwindcss \u7b80\u4ecb\n\ncss \u539f\u751f\u5199\u6cd5 -> \u96f6\u4ef6\u5316 (tailwindcss) -> \u7ec4\u4ef6\u5316 (bootstrap)\n\n\u7ec4\u4ef6\u5316\u5c01\u88c5\u5ea6\u6700\u9ad8, \u8c03\u6574\u6837\u5f0f\u4e0d\u65b9\u4fbf, \u81ea\u7531\u5ea6\u4e0d\u9ad8, \u539f\u751f\u5199\u6cd5\u592a\u9ebb\u70e6\n\n\u5b9e\u9645\u5c31\u662f\u5c01\u88c5\u4e86\u5927\u91cf\u7684\u7c7b, \u76f4\u63a5\u4f7f\u7528\u5c31\u884c\u4e86\n\n\u8fd9\u4e0d\u5c31\u662f\u5185\u8054\u6837\u5f0f\u5417, \u4e3a\u4ec0\u4e48\u4e0d\u7528\u5185\u8054\u6837\u5f0f? \n\n  - tailwindcss \u6709\u7ea6\u675f, \u6570\u503c\u90fd\u88ab\u5c01\u88c5\u4e3a\u7c7b\u4e86, \u5185\u8054\u6837\u5f0f\u6ca1\u6709\u7ea6\u675f\n  - tailwindcss \u53ef\u4ee5\u4f7f\u7528\u4f2a\u7c7b (:hover ....)\n  - tailwinccss \u53ef\u4ee5\u901a\u8fc7 class \u5b9e\u73b0\u54cd\u5e94\u5f0f\n\n")),(0,l.kt)("h2",{id:"\u81ea\u5b9a\u4e49postcss\u63d2\u4ef6"},"\u81ea\u5b9a\u4e49postcss\u63d2\u4ef6"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/postcss/postcss/blob/main/docs/writing-a-plugin.md"},"https://github.com/postcss/postcss/blob/main/docs/writing-a-plugin.md")),(0,l.kt)("h1",{id:"sass"},"SASS"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.bilibili.com/video/BV1Wb411Y7Ms?p=1"},"https://www.bilibili.com/video/BV1Wb411Y7Ms?p=1")," \u5f00\u53d1\u7b80\u5386\u9875\u9762"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"//\u8fc7\u65f6\n// \u89e3\u51b3 node-sass \u65e0\u6cd5\u4e0b\u8f7d\u95ee\u9898\nnpm config set sass_binary_site=https://npm.taobao.org/mirrors/node-sass\n\n//\u63a8\u8350\n//\u4f7f\u7528 dart-sass \u66ff\u4ee3 node-sass, \u540e\u8005\u8fc7\u65f6\u4e86\nyarn add sass -D\n\n\n")),(0,l.kt)("h1",{id:"less"},"LESS"),(0,l.kt)("p",null,"Less \u662f\u4e00\u95e8 CSS \u9884\u5904\u7406\u8bed\u8a00\uff0c\u5b83\u6269\u5c55\u4e86 CSS \u8bed\u8a00\uff0c\u589e\u52a0\u4e86\u53d8\u91cf\u3001Mixin\u3001\u51fd\u6570\u7b49\u7279\u6027\uff0c\u4f7f CSS \u66f4\u6613\u7ef4\u62a4\u548c\u6269\u5c55\u3002\nLess \u53ef\u4ee5\u8fd0\u884c\u5728 Node \u6216\u6d4f\u89c8\u5668\u7aef\u3002\nLESS \u505a\u4e3a CSS \u7684\u4e00\u79cd\u5f62\u5f0f\u7684\u6269\u5c55\uff0c\u5b83\u5e76\u6ca1\u6709\u9609\u5272 CSS \u7684\u529f\u80fd\uff0c\u800c\u662f\u5728\u73b0\u6709\u7684 CSS \u8bed\u6cd5\u4e0a\uff0c\u6dfb\u52a0\u4e86\u5f88\u591a\u989d\u5916\u7684\u529f\u80fd"),(0,l.kt)("h2",{id:"\u73af\u5883\u914d\u7f6e"},"\u73af\u5883\u914d\u7f6e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"npm install -g less\n")),(0,l.kt)("p",null,"\u547d\u4ee4\u884c\u4f7f\u7528:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u538b\u7f29 ",(0,l.kt)("inlineCode",{parentName:"li"},"lessc myStyle.less myStyle.css")),(0,l.kt)("li",{parentName:"ul"},"\u538b\u7f29\u540e\u8f93\u51fa ",(0,l.kt)("inlineCode",{parentName:"li"},"lessc --clean-css styles.less styles.min.css"))),(0,l.kt)("p",null,"\u4ee3\u7801\u7528\u6cd5:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"var less = require('less');\n\nless.render('.class { width: (1 + 1) }', function (e, output) {// e: \u5f02\u5e38, output: \u8f93\u51fa\n    console.log(output.css);\n    // console.log(output.toCSS());\n});\n")),(0,l.kt)("p",null,"\u8f93\u51fa"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},".class {\n    width: 2;\n}\n")),(0,l.kt)("p",null,"render\u65b9\u6cd5\u6709\u66f4\u591a\u914d\u7f6e\u9879:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"less.render('.class { width: (1 + 1) }',\n    {\n        paths: ['.', './lib'],  // // Specify search paths for @import directives\n        filename: 'style.less', // // Specify a filename, for better error messages\n        compress: true          // Minify CSS output\n    },\n    function (e, output) {\n        console.log(output.css);\n    });\n")),(0,l.kt)("h2",{id:"\u6d4f\u89c8\u5668\u7aef\u7528\u6cd5"},"\u6d4f\u89c8\u5668\u7aef\u7528\u6cd5"),(0,l.kt)("p",null,"\u9700\u8981\u5728server\u4e0b\u6253\u5f00, \u76f4\u63a5\u6253\u5f00\u65e0\u6548"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <title></title>\n    \x3c!-- do not change the order --\x3e\n    <link rel="stylesheet/less" type="text/css" href="css/index.less" />\n    \x3c!-- download less.js, and import --\x3e\n    <script src="lib/less.js" type="text/javascript"><\/script>\n</head>\n<body>\n    <div id="header">div-header</div>\n    <h2>h2 h2 h2</h2>\n</body>\n</html>\n')),(0,l.kt)("p",null,"\u7f16\u5199index.less\u5373\u53ef"),(0,l.kt)("p",null,"\u76d1\u89c6\u6a21\u5f0f: \u81ea\u52a8\u5237\u65b0"),(0,l.kt)("p",null,"\u76d1\u89c6\u6a21\u5f0f\u662f\u5ba2\u6237\u7aef\u7684\u4e00\u4e2a\u529f\u80fd\uff0c\u8fd9\u4e2a\u529f\u80fd\u5141\u8bb8\u4f60\u5f53\u4f60\u6539\u53d8\u6837\u5f0f\u7684\u65f6\u5019\uff0c\u5ba2\u6237\u7aef\u5c06\u81ea\u52a8\u5237\u65b0\u3002"),(0,l.kt)("p",null,"\u8981\u4f7f\u7528\u5b83\uff0c\u53ea\u8981\u5728URL\u540e\u9762\u52a0\u4e0a'",(0,l.kt)("inlineCode",{parentName:"p"},"#!watch"),"'\uff0c\u7136\u540e\u5237\u65b0\u9875\u9762\u5c31\u53ef\u4ee5\u4e86\u3002\u53e6\u5916\uff0c\u4f60\u4e5f\u53ef\u4ee5\u901a\u8fc7\u5728\u7ec8\u7aef\u8fd0\u884c",(0,l.kt)("inlineCode",{parentName:"p"},"less.watch()"),"\u6765\u542f\u52a8\u76d1\u89c6\u6a21\u5f0f\u3002"),(0,l.kt)("h2",{id:"\u8bed\u6cd5"},"\u8bed\u6cd5"),(0,l.kt)("h3",{id:"\u53d8\u91cf"},"\u53d8\u91cf"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-less"},"@nice-blue: #5B83AD;\n@light-blue: @nice-blue + #111;\n\n#header { color: @light-blue; }\n")),(0,l.kt)("p",null,"\u8f93\u51fa"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},"#header { color: #6c94be; }\n")),(0,l.kt)("h3",{id:"\u6df7\u5408"},"\u6df7\u5408"),(0,l.kt)("h4",{id:"\u4e0d\u5e26\u53c2\u6570"},"\u4e0d\u5e26\u53c2\u6570"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-less"},".bordered {\n  border-top: dotted 1px black;\n  border-bottom: solid 2px black;\n}\n\n#menu a {\n  color: #111;\n  .bordered;\n}\n.post a {\n  color: red;\n  .bordered;\n}\n")),(0,l.kt)("p",null,"\u8f93\u51fa"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},".bordered {\n  border-top: dotted 1px black;\n  border-bottom: solid 2px black;\n}\n\n#menu a {\n  color: #111;\n  border-top: dotted 1px black;\n  border-bottom: solid 2px black;\n}\n.post a {\n  color: red;\n  border-top: dotted 1px black;\n  border-bottom: solid 2px black;\n}\n")),(0,l.kt)("h4",{id:"\u5e26\u53c2\u6570"},"\u5e26\u53c2\u6570"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-less"},".border-radius (@radius) {\n  border-radius: @radius;\n  -moz-border-radius: @radius;\n  -webkit-border-radius: @radius;\n}\n\n#header {\n  .border-radius(4px);\n}\n.button {\n  .border-radius(6px);  \n}\n")),(0,l.kt)("h4",{id:"\u53c2\u6570\u6709\u9ed8\u8ba4\u503c"},"\u53c2\u6570\u6709\u9ed8\u8ba4\u503c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-less"},".border-radius (@radius: 5px) {\n  border-radius: @radius;\n  -moz-border-radius: @radius;\n  -webkit-border-radius: @radius;\n}\n\n#header {\n  .border-radius;  // radius\u503c\u4e3a\u9ed8\u8ba4: 5px\n}\n")),(0,l.kt)("h3",{id:"\u6682\u65f6\u9690\u85cfcss\u5c5e\u6027"},"\u6682\u65f6\u9690\u85cfcss\u5c5e\u6027"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-less"},".wrap () { // \u91cc\u9762\u7684\u5c5e\u6027\u4e0d\u4f1a\u66b4\u9732\u5230css, \u53ea\u80fd\u88ab\u5185\u90e8\u8c03\u7528\n  text-wrap: wrap;\n  white-space: pre-wrap;\n  white-space: -moz-pre-wrap;\n  word-wrap: break-word;\n}\n\npre { .wrap }\n")),(0,l.kt)("h3",{id:"arguments\u53d8\u91cf"},"@arguments\u53d8\u91cf"),(0,l.kt)("p",null,"@arguments\u5305\u542b\u4e86\u6240\u6709\u4f20\u9012\u8fdb\u6765\u7684\u53c2\u6570. \u5982\u679c\u4f60\u4e0d\u60f3\u5355\u72ec\u5904\u7406\u6bcf\u4e00\u4e2a\u53c2\u6570\u7684\u8bdd\u5c31\u53ef\u4ee5\u50cf\u8fd9\u6837\u5199"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-less"},".box-shadow (@x: 0, @y: 0, @blur: 1px, @color: #000) {\n  box-shadow: @arguments;\n  -moz-box-shadow: @arguments;\n  -webkit-box-shadow: @arguments;\n}\n.box-shadow(2px, 5px);\n")),(0,l.kt)("p",null,"\u8f93\u51fa"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},".box-shadow {\n     box-shadow: 2px 5px 1px #000;\n  -moz-box-shadow: 2px 5px 1px #000;\n  -webkit-box-shadow: 2px 5px 1px #000;\n}\n")),(0,l.kt)("h3",{id:"\u6a21\u5f0f\u5339\u914d\u6df7\u5408\u4e2d\u7684\u53c2\u6570\u5339\u914d"},"\u6a21\u5f0f\u5339\u914d(\u6df7\u5408\u4e2d\u7684\u53c2\u6570\u5339\u914d)"),(0,l.kt)("p",null,"\u53ea\u6709\u88ab\u5339\u914d\u7684\u6df7\u5408\u624d\u4f1a\u88ab\u4f7f\u7528\u3002\u53d8\u91cf\u53ef\u4ee5\u5339\u914d\u4efb\u610f\u7684\u4f20\u5165\u503c\uff0c\u800c\u53d8\u91cf\u4ee5\u5916\u7684\u56fa\u5b9a\u503c\u5c31\u4ec5\u4ec5\u5339\u914d\u4e0e\u5176\u76f8\u7b49\u7684\u4f20\u5165\u503c\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-less"},".mixin (dark, @color) { // \u7b2c\u4e00\u4e2a\u6df7\u5408\u5b9a\u4e49\u5e76\u672a\u88ab\u5339\u914d\uff0c\u56e0\u4e3a\u5b83\u53ea\u63a5\u53d7dark\u505a\u4e3a\u9996\u53c2\n  color: darken(@color, 10%);\n}\n.mixin (light, @color) { // \u7b2c\u4e8c\u4e2a\u6df7\u5408\u5b9a\u4e49\u88ab\u6210\u529f\u5339\u914d\uff0c\u56e0\u4e3a\u5b83\u53ea\u63a5\u53d7light\n  color: lighten(@color, 10%);\n}\n.mixin (@_, @color) {// \u7b2c\u4e09\u4e2a\u6df7\u5408\u5b9a\u4e49\u88ab\u6210\u529f\u5339\u914d\uff0c\u56e0\u4e3a\u5b83\u63a5\u53d7\u4efb\u610f\u503c\n  display: block;\n}\n.mixin (@param) {...} // \u4e0d\u4f1a\u5339\u914d, \u56e0\u4e3a\u53c2\u6570\u4e2a\u6570\u4e0d\u5bf9\n\n@switch: light;\n\n.class {\n  .mixin(@switch, #888);\n}\n")),(0,l.kt)("p",null,"\u8f93\u51fa"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},".class {\n  color: #a2a2a2;\n  display: block;\n}\n")),(0,l.kt)("h3",{id:"\u5bfc\u5f15\u8868\u8fbe\u5f0f\u7c7b\u4f3cmedia-query"},"\u5bfc\u5f15\u8868\u8fbe\u5f0f(\u7c7b\u4f3c@media query)"),(0,l.kt)("h4",{id:"\u5355\u8868\u8fbe\u5f0f"},"\u5355\u8868\u8fbe\u5f0f"),(0,l.kt)("p",null,"\u5f53\u6211\u4eec\u60f3\u6839\u636e\u8868\u8fbe\u5f0f\u8fdb\u884c\u5339\u914d\uff0c\u800c\u975e\u6839\u636e\u503c\u548c\u53c2\u6570\u5339\u914d\u65f6\uff0c\u5bfc\u5f15\u5c31\u663e\u5f97\u975e\u5e38\u6709\u7528"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-less"},"// \u5bfc\u5f15\u4e2d\u8868\u8fbe\u5f0f\u7b26\u53f7:  >, >=, =, =<, <, true; \n// \u9664\u4e86true\u4e4b\u5916\u7684\u7684\u503c\u90fd\u88ab\u89c6\u4e3a\u5047\n// \u5927\u4e8e\u7b49\u4e8e, \u5c0f\u4e8e\u7b49\u4e8e, \u7b26\u53f7\u53ef\u4ee5\u4f4d\u7f6e\u4ea4\u6362\n.mixin (@a) when (lightness(@a) >= 50%) {// lightness\u662fless\u5185\u7f6e\u51fd\u6570\n  background-color: black;\n}\n.mixin (@a) when (lightness(@a) < 50%) {\n  background-color: white;\n}\n.mixin (@a) {\n  color: @a;\n}\n\n.class1 { .mixin(#ddd) }\n.class2 { .mixin(#555) }\n")),(0,l.kt)("p",null,"\u8f93\u51fa"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},".class1 {\n  background-color: black;\n  color: #ddd;\n}\n.class2 {\n  background-color: white;\n  color: #555;\n}\n")),(0,l.kt)("h4",{id:"\u591a\u8868\u8fbe\u5f0f"},"\u591a\u8868\u8fbe\u5f0f"),(0,l.kt)("p",null,"[,]",' \u8868\u793a "\u6216"\n',"[and]",' \u8868\u793a"\u4e0e"\u6761\u4ef6\n',"[not]",' \u8868\u793a "\u975e"'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-less"},".mixin (@a) when (@a > 10), (@a < -10) { ... }\n\n.mixin (@a) when not (@a < 50%) and not (@a < 5px){\n    font-size: 20px;\n}\n")),(0,l.kt)("h3",{id:"\u53c2\u6570\u503c\u7c7b\u578b\u5224\u65adisxxx\u5185\u7f6e\u51fd\u6570"},"\u53c2\u6570\u503c\u7c7b\u578b\u5224\u65ad(isXXX\u5185\u7f6e\u51fd\u6570)"),(0,l.kt)("p",null,"\u5e38\u89c1\u7684\u68c0\u6d4b\u51fd\u6570:"),(0,l.kt)("p",null,"iscolor\uff1a\u662f\u5426\u4e3a\u989c\u8272\u503c\u3002\nisnumber\uff1a\u662f\u5426\u4e3a\u6570\u503c\u3002\nisstring\uff1a\u662f\u5426\u4e3a\u5b57\u7b26\u4e32\u3002\niskeyword\uff1a\u662f\u5426\u4e3a\u5173\u952e\u5b57\u3002\nisurl\uff1a\u662f\u5426\u4e3aURL\u5b57\u7b26\u4e32\u3002"),(0,l.kt)("p",null,"\u4ee5\u4e0b\u662f\u5e38\u89c1\u7684\u5355\u4f4d\u68c0\u67e5\u51fd\u6570\uff1a"),(0,l.kt)("p",null,"ispixel\uff1a\u662f\u5426\u4e3a\u50cf\u7d20\u5355\u4f4d\u3002\nispercentage\uff1a\u662f\u5426\u4e3a\u767e\u5206\u6bd4\u3002\nisem\uff1a\u662f\u5426\u4e3aem\u5355\u4f4d\u3002\nisunit\uff1a\u662f\u5426\u4e3a\u5355\u4f4d\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-less"},".mixin (@a, @b: 0) when (isnumber(@b)) { ... }\n.mixin (@a, @b: black) when (iscolor(@b)) { ... }\n")),(0,l.kt)("h3",{id:"\u5d4c\u5957"},"\u5d4c\u5957"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-less"},"#header {\n  h1 {\n    font-size: 26px;\n    font-weight: bold;\n  }\n  p { font-size: 12px;\n    a { text-decoration: none;\n      &:hover { border-width: 1px }// & \u8868\u793a\u4e32\u8054, \u5373[a]\u548c[:hover]\u95f4\u6ca1\u6709\u7a7a\u683c\n    }\n  }\n}\n")),(0,l.kt)("p",null,"\u8f93\u51fa"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},"#header h1 {\n  font-size: 26px;\n  font-weight: bold;\n}\n#header p {\n  font-size: 12px;\n}\n#header p a {\n  text-decoration: none;\n}\n#header p a:hover {\n  border-width: 1px;\n}\n\n")),(0,l.kt)("h3",{id:"\u8fd0\u7b97"},"\u8fd0\u7b97"),(0,l.kt)("p",null,"\u4efb\u4f55\u6570\u5b57\u3001\u989c\u8272\u6216\u8005\u53d8\u91cf\u90fd\u53ef\u4ee5\u53c2\u4e0e\u8fd0\u7b97."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-less"},"@base: 5%;\n@filler: @base * 2;\nwidth: (@var + 5) * 2;\n@other: @base + @filler;\n@var: 1px + 5;// \u8f93\u51fa6px\n\ncolor: #888 / 4;\nbackground-color: @base-color + #111;\nheight: 100% / 2 + @filler;\nborder: (@width * 2) solid black;\n")),(0,l.kt)("h3",{id:"color\u51fd\u6570"},"color\u51fd\u6570"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-less"},"lighten(@color, 10%);     // return a color which is 10% *lighter* than @color\ndarken(@color, 10%);      // return a color which is 10% *darker* than @color\n\nsaturate(@color, 10%);    // return a color 10% *more* saturated than @color\ndesaturate(@color, 10%);  // return a color 10% *less* saturated than @color\n\nfadein(@color, 10%);      // return a color 10% *less* transparent than @color\nfadeout(@color, 10%);     // return a color 10% *more* transparent than @color\nfade(@color, 50%);        // return @color with 50% transparency\n\nspin(@color, 10);         // return a color with a 10 degree larger in hue than @color\nspin(@color, -10);        // return a color with a 10 degree smaller hue than @color\n\nmix(@color1, @color2);    // return a mix of @color1 and @color2\n\nhue(@color);        // returns the `hue` channel of @color\nsaturation(@color); // returns the `saturation` channel of @color\nlightness(@color);  // returns the 'lightness' channel of @color\n\n@new: hsl(hue(@old), 45%, 90%);// @new \u5c06\u4f1a\u4fdd\u6301 @old\u7684 \u8272\u8c03, \u4f46\u662f\u5177\u6709\u4e0d\u540c\u7684\u9971\u548c\u5ea6\u548c\u4eae\u5ea6.\n\n")),(0,l.kt)("h3",{id:"math\u51fd\u6570"},"Math\u51fd\u6570"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-less"},"round(1.67); // returns `2`\nceil(2.4);   // returns `3`\nfloor(2.6);  // returns `2`\npercentage(0.5); // returns `50%`\n")),(0,l.kt)("h3",{id:"\u547d\u540d\u7a7a\u95f4"},"\u547d\u540d\u7a7a\u95f4"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-less"},"// \u5148\u5b9a\u4e49\u597d\n#bundle {\n  .button () {\n    display: block;\n    border: 1px solid black;\n    background-color: grey;\n    &:hover { background-color: white }\n  }\n  .tab { ... }\n  .citation { ... }\n}\n\n// \u4f7f\u7528\n#header a {\n  color: orange;\n  #bundle > .button;\n}\n")),(0,l.kt)("h3",{id:"\u4f5c\u7528\u57df"},"\u4f5c\u7528\u57df"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-less"},"@var: red;\n\n#page {\n  @var: white;\n  #header {\n    color: @var; // white\n  }\n}\n\n#footer {\n  color: @var; // red  \n}\n")),(0,l.kt)("h3",{id:"importing\u5f15\u5165"},"importing\u5f15\u5165"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-less"},'// \u4f60\u53ef\u4ee5\u5728main\u6587\u4ef6\u4e2d\u901a\u8fc7\u4e0b\u9762\u7684\u5f62\u52bf\u5f15\u5165 .less \u6587\u4ef6, .less \u540e\u7f00\u53ef\u5e26\u53ef\u4e0d\u5e26:\n@import "lib.less";\n@import "lib";\n// \u5982\u679c\u4f60\u60f3\u5bfc\u5165\u4e00\u4e2aCSS\u6587\u4ef6\u800c\u4e14\u4e0d\u60f3LESS\u5bf9\u5b83\u8fdb\u884c\u5904\u7406\uff0c\u53ea\u9700\u8981\u4f7f\u7528.css\u540e\u7f00\u5c31\u53ef\u4ee5:\n@import "lib.css";\n')),(0,l.kt)("h3",{id:"\u5b57\u7b26\u4e32\u63d2\u503c"},"\u5b57\u7b26\u4e32\u63d2\u503c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-less"},'// \u53d8\u91cf\u53ef\u4ee5\u7528\u7c7b\u4f3cruby\u548cphp\u7684\u65b9\u5f0f\u5d4c\u5165\u5230\u5b57\u7b26\u4e32\u4e2d\uff0c\u50cf@{name}\u8fd9\u6837\u7684\u7ed3\u6784:\n@base-url: "http://assets.fnord.com";\nbackground-image: url("@{base-url}/images/bg.png");\n')),(0,l.kt)("h3",{id:"\u907f\u514d\u7f16\u8bd1"},"\u907f\u514d\u7f16\u8bd1"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-less"},'.class {\n  filter: ~"ms:alwaysHasItsOwnSyntax.For.Stuff()";\n}\n\n// \u8f93\u51fa\n.class {\n  filter: ms:alwaysHasItsOwnSyntax.For.Stuff();\n}\n')),(0,l.kt)("h3",{id:"javascript-\u8868\u8fbe\u5f0f"},"JavaScript \u8868\u8fbe\u5f0f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-less"},'// JavaScript \u8868\u8fbe\u5f0f\u4e5f\u53ef\u4ee5\u5728.less \u6587\u4ef6\u4e2d\u4f7f\u7528. \u53ef\u4ee5\u901a\u8fc7\u53cd\u5f15\u53f7\u7684\u65b9\u5f0f\u4f7f\u7528\n@var: `"hello".toUpperCase() + \'!\'`;\n@height: `document.body.clientHeight`;// \u8bbf\u95eeJavaScript\u73af\u5883\n\n// \u8f93\u51fa\n@var: "HELLO!";\n')),(0,l.kt)("h1",{id:"css-\u6a21\u5757\u5316"},"css \u6a21\u5757\u5316"),(0,l.kt)("h1",{id:"css-\u6846\u67b6"},"css \u6846\u67b6"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/nostalgic-css/NES.css"},"https://github.com/nostalgic-css/NES.css")," \u50cf\u7d20\u98ce"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/papercss/papercss"},"https://github.com/papercss/papercss")," \u624b\u5199\u98ce\u683c"),(0,l.kt)("p",null,"bootstrap \u54cd\u5e94\u5f0f\u5e03\u5c40\u6846\u67b6 (bootstrap-react \u5e93)"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/jgthms/bulma"},"https://github.com/jgthms/bulma")," \u54cd\u5e94\u5f0f, \u57fa\u4e8e Flexbox, \u7c7b\u4f3c Bootstrap"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/tailwindlabs/tailwindcss"},"https://github.com/tailwindlabs/tailwindcss")," \u9ad8\u5ea6\u81ea\u5b9a\u4e49"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/palantir/blueprint"},"https://github.com/palantir/blueprint")," react \u7ec4\u4ef6\u5e93, \u7c7b\u4f3c antd"),(0,l.kt)("h1",{id:"\u54cd\u5e94\u5f0f\u9875\u9762"},"\u54cd\u5e94\u5f0f\u9875\u9762"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u901a\u8fc7 @media \u5a92\u4f53\u67e5\u8be2 + flex"),(0,l.kt)("li",{parentName:"ul"},"\u901a\u8fc7 bootstrap \u6846\u67b6"),(0,l.kt)("li",{parentName:"ul"},"\u548c react \u4f7f\u7528, \u53ef\u4ee5\u6839\u636e ",(0,l.kt)("inlineCode",{parentName:"li"},"window.innerWidth")," \u6e32\u67d3\u4e0d\u540c\u7684\u7ec4\u4ef6 (",(0,l.kt)("a",{parentName:"li",href:"https://juejin.cn/post/6844904089164185607"},"https://juejin.cn/post/6844904089164185607"),")")))}m.isMDXComponent=!0}}]);