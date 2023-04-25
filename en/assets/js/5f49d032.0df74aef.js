"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3586],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),l=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(r),f=o,v=m["".concat(a,".").concat(f)]||m[f]||p[f]||i;return r?n.createElement(v,c(c({ref:t},u),{},{components:r})):n.createElement(v,c({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=m;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s.mdxType="string"==typeof e?e:o,c[1]=s;for(var l=2;l<i;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3980:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return a},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var n=r(83117),o=r(80102),i=(r(67294),r(3905)),c=["components"],s={title:"service mesh \u670d\u52a1\u7f51\u683c",tags:["service mesh"],date:new Date("2019-10-22T00:00:00.000Z"),toc_min_heading_level:2,toc_max_heading_level:5},a=void 0,l={unversionedId:"service-mesh",id:"service-mesh",title:"service mesh \u670d\u52a1\u7f51\u683c",description:"https://servicemesh.gitbooks.io/awesome-servicemesh/content/",source:"@site/docs/service-mesh.md",sourceDirName:".",slug:"/service-mesh",permalink:"/en/docs/service-mesh",draft:!1,tags:[{label:"service mesh",permalink:"/en/docs/tags/service-mesh"}],version:"current",frontMatter:{title:"service mesh \u670d\u52a1\u7f51\u683c",tags:["service mesh"],date:"2019-10-22T00:00:00.000Z",toc_min_heading_level:2,toc_max_heading_level:5},sidebar:"tutorialSidebar",previous:{title:"Serverless",permalink:"/en/docs/serverless"},next:{title:"Servlet Note",permalink:"/en/docs/servlet"}},u={},p=[],m={toc:p};function f(e){var t=e.components,r=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://servicemesh.gitbooks.io/awesome-servicemesh/content/"},"https://servicemesh.gitbooks.io/awesome-servicemesh/content/")),(0,i.kt)("p",null,"Linkerd"),(0,i.kt)("p",null,"\u5927\u9879\u76ee\u76f4\u63a5 k8s+istio"),(0,i.kt)("h1",{id:"what"},"what"),(0,i.kt)("p",null,"\u670d\u52a1\u7f51\u683c\u662f\u4e00\u4e2a\u7528\u4e8e\u5904\u7406\u670d\u52a1\u95f4\u901a\u4fe1\u7684\u57fa\u7840\u8bbe\u65bd\u5c42\uff0c\u5b83\u8d1f\u8d23\u4e3a\u6784\u5efa\u590d\u6742\u7684\u4e91\u539f\u751f\u5e94\u7528\u4f20\u9012\u53ef\u9760\u7684\u7f51\u7edc\u8bf7\u6c42"),(0,i.kt)("p",null,"\u90e8\u7f72\u4e4b\u540e\u7684\u67b6\u6784\u56fe\u7c7b\u4f3c\u8fd9\u6837: \u670d\u52a1\u5206\u5e03\u4e8e\u591a\u4e2a\u7f51\u683c\u5185, \u6bcf\u4e2a\u7f51\u683c\u5305\u542b\u4e00\u4e2a\u670d\u52a1 app, \u4e00\u4e2a sidecar proxy, \u5e94\u7528\u670d\u52a1\u4e4b\u95f4\u901a\u8fc7 Sidecar Proxy \u8fdb\u884c\u901a\u4fe1"),(0,i.kt)("h1",{id:"why"},"why"),(0,i.kt)("p",null,"\u4e3a\u4ec0\u4e48\u9700\u8981 Service Mesh"),(0,i.kt)("p",null,"\u6700\u4e3b\u8981\u7684\u7406\u7531\u6765\u81ea\u4e8e Service Mesh \u5728\u63d0\u4f9b\u5fae\u670d\u52a1\u6846\u67b6\u529f\u80fd\u7684\u540c\u65f6\uff0c\u5b83\u662f\u4e00\u4e2a\u72ec\u7acb\u8fd0\u884c\u5728\u5e94\u7528\u670d\u52a1\u4e4b\u5916\u7684\u6a21\u5757\u3002\u8fd9\u5e26\u6765\u7684\u597d\u5904\u5c31\u662f\u5e94\u7528\u670d\u52a1\u4e0d\u518d\u9700\u8981\u4e3a\u63a5\u5165\u5fae\u670d\u52a1\u6846\u67b6\u800c\u5728\u4ee3\u7801\u548c\u914d\u7f6e\u4e2d\u6dfb\u52a0\u7e41\u591a\u7684\u4f9d\u8d56\u5e93\u548c\u4f9d\u8d56\u914d\u7f6e\u9879\uff0c\u5b9e\u73b0\u4e86\u5fae\u670d\u52a1\u6846\u67b6\u548c\u5e94\u7528\u670d\u52a1\u4e4b\u95f4\u7684\u89e3\u8026"),(0,i.kt)("h1",{id:"how"},"how"))}f.isMDXComponent=!0}}]);