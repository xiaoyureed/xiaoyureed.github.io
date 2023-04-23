"use strict";(self.webpackChunkwiki_1=self.webpackChunkwiki_1||[]).push([[654],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(n),y=a,f=s["".concat(l,".").concat(y)]||s[y]||m[y]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=y;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[s]="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},6049:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={title:"\u9020\u4e2a\u5c0f\u8f6e\u5b50 My IOC",tags:["ioc"],authors:["me"]},i="\u4ee3\u7801",c={permalink:"/blog/2017/02/01/create-my-own-ioc",editUrl:"https://github.com/xiaoyureed/xiaoyureed.github.io/tree/main/blog/2017-02-01-create-my-own-ioc/index.md",source:"@site/blog/2017-02-01-create-my-own-ioc/index.md",title:"\u9020\u4e2a\u5c0f\u8f6e\u5b50 My IOC",description:"\u5b9a\u4e49\u5bb9\u5668\u63a5\u53e3\u89c4\u8303, \u6709\u6ce8\u518c, \u83b7\u53d6\u7b49\u51e0\u4e2a\u65b9\u6cd5",date:"2017-02-01T00:00:00.000Z",formattedDate:"2017\u5e742\u67081\u65e5",tags:[{label:"ioc",permalink:"/blog/tags/ioc"}],readingTime:4.935,hasTruncateMarker:!0,authors:[{name:"Xiao Yu",title:"Unknown",url:"https://github.com/xiaoyureed",imageURL:"https://github.com/xiaoyureed.png",key:"me"}],frontMatter:{title:"\u9020\u4e2a\u5c0f\u8f6e\u5b50 My IOC",tags:["ioc"],authors:["me"]},prevItem:{title:"\u5229\u7528 Redis \u505a\u767b\u5f55\u6b21\u6570\u9650\u5236",permalink:"/blog/2018/05/25/redis-login-limitation"},nextItem:{title:"Raspberry Pi as a Dev Server\u6811\u8393\u6d3e\u6298\u817e\u8bb0\u5f55",permalink:"/blog/2016/04/09/toss-about-raspberrypi"}},l={authorsImageUrls:[void 0]},p=[],u={toc:p},s="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5b9a\u4e49\u5bb9\u5668\u63a5\u53e3\u89c4\u8303, \u6709\u6ce8\u518c, \u83b7\u53d6\u7b49\u51e0\u4e2a\u65b9\u6cd5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * container \u63a5\u53e3(\u6dfb\u52a0/\u79fb\u9664/\u83b7\u53d6)\n *\n * @version 0.1\n * @author xy\n * @date 2018\u5e746\u67085\u65e5 \u4e0b\u53485:00:34\n */\npublic interface Container {\n\n    /**\n     * \u521d\u59cb\u5316\n     * @param clazzSet \n     */\n    void register(String packageName);\n    \n    /**\n     * \u8c8c\u4f3c\u6682\u65f6\u7528\u4e0d\u5230\n     */\n//    void remove();\n    \n    /**\n     * \u6839\u636e class \u83b7\u53d6 bean\n     * @param clazz\n     * @return\n     */\n    <T> T getByType(Class<T> clazz);\n    \n    /**\n     * \n     * @param name\n     * @return\n     */\n    <T> T getByName(String name);\n}\n\n")))}m.isMDXComponent=!0}}]);