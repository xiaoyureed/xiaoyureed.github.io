"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9477],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=c(r),f=o,d=m["".concat(l,".").concat(f)]||m[f]||s[f]||i;return r?n.createElement(d,a(a({ref:t},p),{},{components:r})):n.createElement(d,a({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},39660:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return s}});var n=r(83117),o=r(80102),i=(r(67294),r(3905)),a=["components"],u={title:"\u5229\u7528 Redis \u505a\u767b\u5f55\u6b21\u6570\u9650\u5236",tags:["redis"],authors:["me"]},l="\u57fa\u672c\u601d\u8def",c={permalink:"/en/2018/05/25/redis-login-limitation",editUrl:"https://github.com/xiaoyureed/xiaoyureed.github.io/edit/main/blog/2018-05-25-redis-login-limitation/index.md",source:"@site/blog/2018-05-25-redis-login-limitation/index.md",title:"\u5229\u7528 Redis \u505a\u767b\u5f55\u6b21\u6570\u9650\u5236",description:"\u6bd4\u5982\u5e0c\u671b\u8fbe\u5230\u7684\u8981\u6c42\u662f\u8fd9\u6837: \u5728 1min \u5185\u767b\u9646\u5f02\u5e38\u6b21\u6570\u8fbe\u52305\u6b21, \u9501\u5b9a\u8be5\u7528\u6237 1h",date:"2018-05-25T00:00:00.000Z",formattedDate:"May 25, 2018",tags:[{label:"redis",permalink:"/en/tags/redis"}],readingTime:2.42,hasTruncateMarker:!0,authors:[{name:"Xiao Yu",title:"Unknown",url:"https://github.com/xiaoyureed",imageURL:"https://github.com/xiaoyureed.png",key:"me"}],frontMatter:{title:"\u5229\u7528 Redis \u505a\u767b\u5f55\u6b21\u6570\u9650\u5236",tags:["redis"],authors:["me"]},prevItem:{title:"\u6570\u636e\u5e93\u5b9e\u73b0\u8d44\u6599\u68b3\u7406",permalink:"/en/2021/11/04/make-database-db"},nextItem:{title:"\u9020\u4e2a\u5c0f\u8f6e\u5b50 My IOC",permalink:"/en/2017/02/01/create-my-own-ioc"}},p={authorsImageUrls:[void 0]},s=[],m={toc:s};function f(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u6bd4\u5982\u5e0c\u671b\u8fbe\u5230\u7684\u8981\u6c42\u662f\u8fd9\u6837: \u5728 1min \u5185\u767b\u9646\u5f02\u5e38\u6b21\u6570\u8fbe\u52305\u6b21, \u9501\u5b9a\u8be5\u7528\u6237 1h"),(0,i.kt)("p",null,"\u90a3\u4e48\u767b\u9646\u8bf7\u6c42\u7684\u53c2\u6570\u4e2d, \u4f1a\u6709\u4e00\u4e2a\u53c2\u6570\u552f\u4e00\u6807\u8bc6\u4e00\u4e2a user, \u6bd4\u5982 \u90ae\u7bb1/\u624b\u673a\u53f7/userName"),(0,i.kt)("p",null,'\u7528\u8fd9\u4e2a\u53c2\u6570\u4f5c\u4e3akey\u5b58\u5165redis, \u5bf9\u5e94\u7684value\u4e3a\u767b\u9646\u9519\u8bef\u7684\u6b21\u6570, string \u7c7b\u578b, \u5e76\u8bbe\u7f6e\u8fc7\u671f\u65f6\u95f4\u4e3a 1min. \u5f53\u83b7\u53d6\u5230\u7684 value == "4" , \u8bf4\u660e\u5f53\u524d\u8bf7\u6c42\u4e3a\u7b2c 5 \u6b21\u767b\u9646\u5f02\u5e38, \u9501\u5b9a.'),(0,i.kt)("p",null,'\u6240\u8c13\u7684\u9501\u5b9a, \u5c31\u662f\u5c06\u5bf9\u5e94\u7684value\u8bbe\u7f6e\u4e3a\u67d0\u4e2a\u6807\u8bc6\u7b26, \u6bd4\u5982"lock", \u5e76\u8bbe\u7f6e\u8fc7\u671f\u65f6\u95f4\u4e3a 1h'))}f.isMDXComponent=!0}}]);