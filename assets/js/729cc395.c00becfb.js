"use strict";(self.webpackChunkwiki_1=self.webpackChunkwiki_1||[]).push([[1786],{3905:(t,e,o)=>{o.d(e,{Zo:()=>s,kt:()=>f});var n=o(7294);function r(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function i(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function a(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?i(Object(o),!0).forEach((function(e){r(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function c(t,e){if(null==t)return{};var o,n,r=function(t,e){if(null==t)return{};var o,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)o=i[n],e.indexOf(o)>=0||(r[o]=t[o]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)o=i[n],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(r[o]=t[o])}return r}var p=n.createContext({}),l=function(t){var e=n.useContext(p),o=e;return t&&(o="function"==typeof t?t(e):a(a({},e),t)),o},s=function(t){var e=l(t.components);return n.createElement(p.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},h=n.forwardRef((function(t,e){var o=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,s=c(t,["components","mdxType","originalType","parentName"]),u=l(o),h=r,f=u["".concat(p,".").concat(h)]||u[h]||m[h]||i;return o?n.createElement(f,a(a({ref:e},s),{},{components:o})):n.createElement(f,a({ref:e},s))}));function f(t,e){var o=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=o.length,a=new Array(i);a[0]=h;var c={};for(var p in e)hasOwnProperty.call(e,p)&&(c[p]=e[p]);c.originalType=t,c[u]="string"==typeof t?t:r,a[1]=c;for(var l=2;l<i;l++)a[l]=o[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"},5092:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>p,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=o(7462),r=(o(7294),o(3905));const i={title:"Iot \u7269\u8054\u7f51",tags:["iot"],date:new Date("2020-06-06T00:00:00.000Z"),toc_min_heading_level:2,toc_max_heading_level:5},a=void 0,c={unversionedId:"iot",id:"iot",title:"Iot \u7269\u8054\u7f51",description:"https://github.com/microsoft/IoT-For-Beginners",source:"@site/docs/iot.md",sourceDirName:".",slug:"/iot",permalink:"/docs/iot",draft:!1,editUrl:"https://github.com/xiaoyureed/xiaoyureed.github.io/tree/main/docs/iot.md",tags:[{label:"iot",permalink:"/docs/tags/iot"}],version:"current",frontMatter:{title:"Iot \u7269\u8054\u7f51",tags:["iot"],date:"2020-06-06T00:00:00.000Z",toc_min_heading_level:2,toc_max_heading_level:5},sidebar:"tutorialSidebar",previous:{title:"\u7ecf\u5178\u7684\u7cfb\u7edf\u8bbe\u8ba1\u601d\u8def",permalink:"/docs/interview-system-design"},next:{title:"Java Clean Code Tips",permalink:"/docs/java-code-clean"}},p={},l=[],s={toc:l},u="wrapper";function m(t){let{components:e,...o}=t;return(0,r.kt)(u,(0,n.Z)({},s,o,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"<<\u56fe\u89e3\u7269\u8054\u7f51>>"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/microsoft/IoT-For-Beginners"},"https://github.com/microsoft/IoT-For-Beginners")),(0,r.kt)("p",null,"2\u3001\u719f\u6089\u89c6\u9891\u7f16\u89e3\u7801\u53ca\u56fe\u50cf\u5904\u7406\u539f\u7406\uff0c\u4e86\u89e3RTPRTCP\u3001rtmp\u3001rtsp\u7b49\u534f\u8bae\n3\u3001\u719f\u6089TCP/IP\uff0cHTTP/HTTPS\u3001MQTT\uff0cWebSocket\uff0cCoAP\u7b49\u4e00\u79cd\u6216\u591a\u79cd\u7f51\u7edc\u534f\u8bae\uff1b\n4\u3001\u719f\u6089\u5d4c\u5165\u5f0f\u64cd\u4f5c\u7cfb\u7edf\u3001IoT\u76f8\u5173\u534f\u8bae(mqtt/opc-da/opc-ua/modbus\u7b49)\n5\u3001\u6709\u57fa\u4e8e\u5f00\u6e90 IoT\u5e73\u53f0\u76f8\u5173\u4e8c\u6b21\u5f00\u53d1\u4f7f\u7528\u7ecf\u9a8c;\n6\u3001\u6709\u8fb9\u7f18-\u4e91\u4e92\u901a\u7f16\u7a0b\u5f00\u53d1\u7ecf\u9a8c\uff0c\u719f\u6089AWS greengrass\u3001Service mesh \u7b49\u5f00\u53d1\u6846\u67b6;\n7\u3001\u6709openTSDB \u548cinfluxDB\u7b49\u65f6\u5e8f\u6570\u636e\u5e93\u5b9e\u9645\u5f00\u53d1\u7ecf\u9a8c;\n8\u3001\u826f\u597d\u7684\u903b\u8f91\u601d\u7ef4\u80fd\u529b\uff0c\u719f\u6089\u4e1a\u52a1\u62bd\u8c61\u548c\u6570\u636e\u6a21\u578b\u8bbe\u8ba1\uff0c\u5177\u6709\u5f88\u5f3a\u7684\u5206\u6790\u95ee\u9898\u548c\u89e3\u51b3\u95ee\u9898\u7684\u80fd\u529b\n9 \u9700\u719f\u6089modbus\u3001opc\u3001websocket\u7b49\u7269\u8054\u7f51\u901a\u4fe1\u534f\u8bae\uff0c\u9700\u6709\u8fc7\u6d88\u9632\u76d1\u63a7\u3001\u89c6\u9891\u76d1\u63a7\u3001\u901a\u4fe1\u5e7f\u64ad\u3001\u7535\u529b\u76d1\u63a7\u7b49\u7269\u8054\u7f51\u5bf9\u63a5\u7ecf\u9a8c\u3002\n4\u3001\u719f\u6089MQTT\u3001COAP/LwM2M\u3001BLE\u3001Modbus\u7b49IoT\u5e38\u89c1\u901a\u4fe1\u534f\u8bae\uff1b\n5\u3001\u719f\u7ec3\u4f7f\u7528JProfiler/VisualVM\u7b49Java\u6027\u80fd\u4f18\u5316\u5de5\u5177\uff0c\u719f\u6089Java\u7684IO/\u5185\u5b58/\u6570\u636e\u5e93\u6027\u80fd\u4f18\u5316\uff1b\n\u719f\u6089\u7269\u8054\u7f51\u5e73\u53f0\u67b6\u6784\u8bbe\u8ba1\uff0c\u719f\u6089MQTT/CoAP\u7b49\u4e3b\u6d41\u7269\u8054\u7f51\u901a\u4fe1\u534f\u8bae\n\u6709\u65f6\u7a7a\u6570\u636e\u5e93\u3001\u89c4\u5219\u5f15\u64ce\u3001\u8bbe\u5907\u63a5\u5165\u7ba1\u7406\u3001\u8fb9\u7f18\u8ba1\u7b97\u7b49\u7269\u8054\u7f51\u670d\u52a1\u7814\u53d1\u7ecf\u9a8c\u8005\u4f18\u5148"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/iegomez/mosquitto-go-auth"},"https://github.com/iegomez/mosquitto-go-auth")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/IoT-Technology/IoT-Technical-Guide"},"https://github.com/IoT-Technology/IoT-Technical-Guide")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/HQarroum/awesome-iot"},"https://github.com/HQarroum/awesome-iot")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/phodal/designiot/"},"https://github.com/phodal/designiot/")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.v2ex.com/t/250870"},"https://www.v2ex.com/t/250870")," \u5165\u95e8"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/microsoft/IoT-For-Beginners"},"https://github.com/microsoft/IoT-For-Beginners")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://zditect.com/main/iot-internet-of-things/iot-internet-of-things.html"},"https://zditect.com/main/iot-internet-of-things/iot-internet-of-things.html")),(0,r.kt)("p",null,"\u719f\u6089\u6d88\u8d39\u7ea7\u7269\u8054\u7f51\u7684\u6280\u672f\u751f\u6001\uff0c \u80fd\u72ec\u7acb\u5b8c\u6210\u7269\u8054\u7f51\u7cfb\u7edf\u7684\u8bbe\u5907\u9009\u578b\u3001\u65b9\u6848\u8bbe\u8ba1\u3001\u786c\u4ef6\u8c03\u8bd5\u548c\u63a7\u5236\u8f6f\u4ef6\u5f00\u53d1\u3002\n\u7cbe\u901a\u4e3b\u6d41\u7684\u7269\u8054\u901a\u8baf\u534f\u8bae WiFi/BlueTooth/NFC/RS485/\u2026\u2026\uff0c \u719f\u7ec3\u4f7f\u7528 Java/C#/C++ \u7b49\u8bed\u8a00\u8fdb\u884c\u5f00\u53d1\u96c6\u6210\u3002\n\u5177\u5907\u82af\u7247\u7ea7\u96c6\u6210\u5f00\u53d1\u7ecf\u9a8c STM32/ESP8266/HX711/ATGM336H/74HC595/\u2026\u2026"))}m.isMDXComponent=!0}}]);