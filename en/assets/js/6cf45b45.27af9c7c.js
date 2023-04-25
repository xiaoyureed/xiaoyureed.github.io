"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5418],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),f=a,g=m["".concat(p,".").concat(f)]||m[f]||s[f]||o;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},96479:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),i=["components"],l={title:"web \u5f00\u53d1\u6846\u67b6\u8bbe\u8ba1\u6784\u601d",tags:["java","web design"],authors:"me"},p=void 0,c={permalink:"/en/2019/09/27/web-framework-design",editUrl:"https://github.com/xiaoyureed/xiaoyureed.github.io/edit/main/blog/2019-09-27-web-framework-design/index.md",source:"@site/blog/2019-09-27-web-framework-design/index.md",title:"web \u5f00\u53d1\u6846\u67b6\u8bbe\u8ba1\u6784\u601d",description:"https://my.oschina.net/huangyong/blog/158380",date:"2019-09-27T00:00:00.000Z",formattedDate:"September 27, 2019",tags:[{label:"java",permalink:"/en/tags/java"},{label:"web design",permalink:"/en/tags/web-design"}],readingTime:1.1133333333333333,hasTruncateMarker:!0,authors:[{name:"Xiao Yu",title:"Unknown",url:"https://github.com/xiaoyureed",imageURL:"https://github.com/xiaoyureed.png",key:"me"}],frontMatter:{title:"web \u5f00\u53d1\u6846\u67b6\u8bbe\u8ba1\u6784\u601d",tags:["java","web design"],authors:"me"},prevItem:{title:"\u4eba\u8138\u8bc6\u522b\u5f00\u6e90\u65b9\u6848\u8c03\u67e5",permalink:"/en/2021/09/20/face-recognition-detection-ocr"},nextItem:{title:"\u6570\u636e\u5e93\u5b9e\u73b0\u8d44\u6599\u68b3\u7406",permalink:"/en/2021/11/04/make-database-db"}},u={authorsImageUrls:[void 0]},s=[],m={toc:s};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://my.oschina.net/huangyong/blog/158380"},"https://my.oschina.net/huangyong/blog/158380")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#1-action"},"1. Action")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#2-action%E5%88%86%E5%8F%91%E6%9C%BA%E5%88%B6"},"2. Action\u5206\u53d1\u673a\u5236")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#3-entity%E5%AE%9E%E4%BD%93"},"3. entity\u5b9e\u4f53")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#4-%E6%8A%80%E6%9C%AF%E9%80%89%E5%9E%8B"},"4. \u6280\u672f\u9009\u578b")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#5-java%E7%83%AD%E6%8F%92%E6%8B%94"},"5. Java\u70ed\u63d2\u62d4"))),(0,o.kt)("h1",{id:"action"},"Action"),(0,o.kt)("p",null,"\u7c7b\u6bd4 controller"),(0,o.kt)("h1",{id:"action\u5206\u53d1\u673a\u5236"},"Action\u5206\u53d1\u673a\u5236"),(0,o.kt)("p",null,"\u4f9d\u9760\u552f\u4e00\u7684 Servlet : DispatcherServlet"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u4ece ServletRequest \u4e2d\u5f97\u5230 request url, \u904d\u5386\u8def\u7531\u5e93\u627e\u5230\u5bf9\u5e94\u7684 Action (\u5305\u62ec Action \u7c7b\u4e0e Action \u65b9\u6cd5)")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u89e3\u6790 url \u4e2d\u7684\u5360\u4f4d\u7b26, \u5f97\u5230 Action \u65b9\u6cd5\u53c2\u6570")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u53cd\u5c04\u521b\u5efa Action, \u6267\u884c\u5bf9\u5e94\u65b9\u6cd5, \u5f97\u5230\u8fd4\u56de\u503c (\u8fdb\u4e00\u6b65\u8f6c\u4e3a json/xml, \u6839\u636e\u6ce8\u89e3\u5224\u65ad)"))),(0,o.kt)("h1",{id:"entity\u5b9e\u4f53"},"entity\u5b9e\u4f53"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u5b9a\u4e49\u4e00\u4e2a\u9876\u7ea7 Bean \u7c7b \u5b9e\u73b0 \u5e8f\u5217\u5316\u63a5\u53e3, \u63d0\u4f9b hashcode, equals, tostring, toJson, toXml \u65b9\u6cd5, \u4f7f\u7528\u4e86 Apache Commons \u7684  lang \u5305\u6765\u5b9e\u73b0; (\u65e0\u8bba\u662f\u5426 entity \u7c7b, \u90fd\u53ef\u7ee7\u627f\u8fd9\u4e2a\u7c7b\u590d\u7528); ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u6267\u884c SQL \u8bed\u53e5\uff0c\u5c06 ResultSet \u6620\u5c04\u4e3a Map(\u5c24\u5176\u662f\u6267\u884c\u591a\u8868\u8fde\u63a5\u7684\u65f6\u5019\uff0c\u67e5\u8be2\u51fa\u6765\u7684\u5217\u6765\u81ea\u4e8e\u4e0d\u540c\u7684\u8868\uff0c\u800c\u4e14\u6570\u91cf\u5f88\u5927\u7684\u60c5\u51b5\u4e0b\uff0c\u5c31\u6ca1\u6709\u5fc5\u8981\u518d\u5199\u4e00\u4e2a Entity \u53bb\u6620\u5c04\u4e86\uff0c\u76f4\u63a5\u62ff\u5230\u4e00\u4e2a Map\uff0c\u6700\u540e\u5c06\u5176\u8f6c\u4e3a JSON \u7ed9\u524d\u7aef)"))),(0,o.kt)("h1",{id:"\u6280\u672f\u9009\u578b"},"\u6280\u672f\u9009\u578b"),(0,o.kt)("p",null,"JUint\uff1a\u7528\u4e8e\u5355\u5143\u6d4b\u8bd5\u3002\nApache Commons\uff1a\u7528\u4e8e\u63d0\u4f9b\u6700\u57fa\u7840\u7684\u652f\u6301\uff0c\u4f8b\u5982\uff1aLang\u3001Collections\u3001BeanUtils\u3001DBCP\u3001DbUtils \u7b49\u3002\nLog4J\uff1a\u7528\u4e8e\u8bb0\u5f55\u65e5\u5fd7\u3002\nJackson\uff1a\u7528\u4e8e\u5904\u7406 JSON \u6570\u636e\u3002\nCGLib\uff1a\u7528\u4e8e\u52a8\u6001\u4ee3\u7406\u3002"),(0,o.kt)("h1",{id:"java\u70ed\u63d2\u62d4"},"Java\u70ed\u63d2\u62d4"),(0,o.kt)("p",null,"TODO"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://blog.csdn.net/tonyhuang_google_com/article/details/49702291"},"https://blog.csdn.net/tonyhuang_google_com/article/details/49702291")," \u901a\u8fc7 Java spi\n",(0,o.kt)("a",{parentName:"p",href:"https://blog.csdn.net/javierhui111/article/details/3830833"},"https://blog.csdn.net/javierhui111/article/details/3830833")," \u901a\u8fc7 osgi\n",(0,o.kt)("a",{parentName:"p",href:"https://segmentfault.com/q/1010000005736656"},"https://segmentfault.com/q/1010000005736656")," \u901a\u8fc7spring\u4f9d\u8d56\u6ce8\u5165"))}f.isMDXComponent=!0}}]);