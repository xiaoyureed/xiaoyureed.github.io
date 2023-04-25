"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2626],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},k=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),k=c(t),m=a,d=k["".concat(s,".").concat(m)]||k[m]||u[m]||o;return t?r.createElement(d,i(i({ref:n},p),{},{components:t})):r.createElement(d,i({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=k;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}k.displayName="MDXCreateElement"},99593:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var r=t(83117),a=t(80102),o=(t(67294),t(3905)),i=["components"],l={title:"\u5b9e\u65f6\u901a\u4fe1 Real-time",tags:["websocket","webrtc"],date:new Date("2021-03-19T00:00:00.000Z"),toc_min_heading_level:2,toc_max_heading_level:5},s=void 0,c={unversionedId:"real-time-communication-protocol",id:"real-time-communication-protocol",title:"\u5b9e\u65f6\u901a\u4fe1 Real-time",description:"\u4ecb\u7ecd\u4e00\u4e9b\u57fa\u4e8e\u6d4f\u89c8\u5668\u7684\u5b9e\u65f6\u901a\u4fe1\u6280\u672f",source:"@site/docs/real-time-communication-protocol.md",sourceDirName:".",slug:"/real-time-communication-protocol",permalink:"/en/docs/real-time-communication-protocol",draft:!1,tags:[{label:"websocket",permalink:"/en/docs/tags/websocket"},{label:"webrtc",permalink:"/en/docs/tags/webrtc"}],version:"current",frontMatter:{title:"\u5b9e\u65f6\u901a\u4fe1 Real-time",tags:["websocket","webrtc"],date:"2021-03-19T00:00:00.000Z",toc_min_heading_level:2,toc_max_heading_level:5},sidebar:"tutorialSidebar",previous:{title:"React\ud83c\udf08",permalink:"/en/docs/react-note"},next:{title:"Redis\ud83c\udf08",permalink:"/en/docs/redis-note"}},p={},u=[{value:"websocket\u662f\u4ec0\u4e48",id:"websocket\u662f\u4ec0\u4e48",level:2},{value:"\u4e3a\u4ec0\u4e48\u8981\u4f7f\u7528",id:"\u4e3a\u4ec0\u4e48\u8981\u4f7f\u7528",level:2},{value:"\u600e\u4e48\u4f7f\u7528",id:"\u600e\u4e48\u4f7f\u7528",level:2},{value:"client",id:"client",level:3},{value:"server",id:"server",level:3},{value:"\u548cspring\u96c6\u6210",id:"\u548cspring\u96c6\u6210",level:4},{value:"\u4e0d\u548cspring\u96c6\u6210",id:"\u4e0d\u548cspring\u96c6\u6210",level:4}],k={toc:u};function m(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},k,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u4ecb\u7ecd\u4e00\u4e9b\u57fa\u4e8e\u6d4f\u89c8\u5668\u7684\u5b9e\u65f6\u901a\u4fe1\u6280\u672f"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#1-websocket"},"1. websocket"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#11-websocket%E6%98%AF%E4%BB%80%E4%B9%88"},"1.1. websocket\u662f\u4ec0\u4e48")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#12-%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A6%81%E4%BD%BF%E7%94%A8"},"1.2. \u4e3a\u4ec0\u4e48\u8981\u4f7f\u7528")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#13-%E6%80%8E%E4%B9%88%E4%BD%BF%E7%94%A8"},"1.3. \u600e\u4e48\u4f7f\u7528"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#131-client"},"1.3.1. client")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#132-server"},"1.3.2. server"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#1321-%E5%92%8Cspring%E9%9B%86%E6%88%90"},"1.3.2.1. \u548cspring\u96c6\u6210")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#1322-%E4%B8%8D%E5%92%8Cspring%E9%9B%86%E6%88%90"},"1.3.2.2. \u4e0d\u548cspring\u96c6\u6210")))))))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#2-webrtc"},"2. webrtc"))),(0,o.kt)("h1",{id:"websocket"},"websocket"),(0,o.kt)("h2",{id:"websocket\u662f\u4ec0\u4e48"},"websocket\u662f\u4ec0\u4e48"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"WebSocket \u662f HTML5 \u5f00\u59cb\u63d0\u4f9b\u7684\u4e00\u79cd\u5728\u5355\u4e2a TCP \u8fde\u63a5\u4e0a\u8fdb\u884c\u5168\u53cc\u5de5\u901a\u8baf\u7684\u534f\u8bae")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"WebSocket\u534f\u8bae\u5b9e\u73b0\u4e86 client(\u6d4f\u89c8\u5668) \u548c server \u7684\u53cc\u5411\u901a\u4fe1, \u4f7f\u5f97 server \u53ef\u4ee5\u4e3b\u52a8\u5411 client \u63a8\u9001\u6d88\u606f(\u5b9e\u65f6web\u901a\u4fe1);")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Websocket \u5176\u5b9e\u662f\u4e00\u4e2a\u65b0\u534f\u8bae\uff0c\u8ddf HTTP \u534f\u8bae\u57fa\u672c\u6ca1\u6709\u5173\u7cfb,\u53ea\u662f\u5728\u521a\u5f00\u59cb\u5efa\u7acb\u8fde\u63a5\u65f6\u4f1a\u901a\u8fc7http\u53d1\u9001\u51e0\u4e2a\u7279\u6b8a\u7684header, \u5178\u578b\u7684url\u7c7b\u4f3c ws://example.com:80/some/path")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u6ca1\u6709 websocket \u524d, \u901a\u8fc7 \u4e00\u4e0b\u4e24\u79cd\u65b9\u5f0f\u5b9e\u73b0\u5b9e\u65f6web\u901a\u4fe1"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"ajax \u8f6e\u8be2: \u8f6e\u8be2\u6280\u672f\u8981\u6c42\u5ba2\u6237\u7aef\u4ee5\u8bbe\u5b9a\u7684\u65f6\u95f4\u95f4\u9694\u5468\u671f\u6027\u5730\u5411\u670d\u52a1\u7aef\u53d1\u9001\u8bf7\u6c42\uff0c\u9891\u7e41\u5730\u67e5\u8be2\u662f\u5426\u6709\u65b0\u7684\u6570\u636e\u6539\u52a8\u3002\u660e\u663e\u5730\uff0c\u8fd9\u79cd\u65b9\u6cd5\u4f1a\u5bfc\u81f4\u8fc7\u591a\u4e0d\u5fc5\u8981\u7684\u8bf7\u6c42\uff0c\u6d6a\u8d39\u6d41\u91cf\u548c\u670d\u52a1\u5668\u8d44\u6e90")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u957f\u8fde\u63a5 (long poll): \u5176\u5b9e\u539f\u7406\u8ddf ajax\u8f6e\u8be2 \u5dee\u4e0d\u591a\uff0c\u90fd\u662f\u91c7\u7528\u8f6e\u8be2\u7684\u65b9\u5f0f\uff0c\u4e0d\u8fc7\u91c7\u53d6\u7684\u662f\u963b\u585e\u6a21\u578b\uff08\u4e00\u76f4\u6253\u7535\u8bdd\uff0c\u6ca1\u6536\u5230\u5c31\u4e0d\u6302\u7535\u8bdd\uff09\uff0c\u4e5f\u5c31\u662f\u8bf4\uff0c\u5ba2\u6237\u7aef\u53d1\u8d77\u8fde\u63a5\u540e\uff0c\u5982\u679c\u6ca1\u6d88\u606f\uff0c\u5c31\u4e00\u76f4\u4e0d\u8fd4\u56deResponse\u7ed9\u5ba2\u6237\u7aef\u3002\u76f4\u5230\u6709\u6d88\u606f\u624d\u8fd4\u56de\uff0c\u8fd4\u56de\u5b8c\u4e4b\u540e\uff0c\u5ba2\u6237\u7aef\u518d\u6b21\u5efa\u7acb\u8fde\u63a5\uff0c\u5468\u800c\u590d\u59cb;\u5728\u5927\u5e76\u53d1\u73af\u5883\u4e0b\uff0c\u6027\u80fd\u4f1a\u975e\u5e38\u5dee")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"WebSocket \u53ea\u9700\u8981\u5efa\u7acb\u4e00\u6b21\u8fde\u63a5\uff0c\u5c31\u53ef\u4ee5\u4e00\u76f4\u4fdd\u6301\u8fde\u63a5\u72b6\u6001")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Web\u6d4f\u89c8\u5668\u548c\u670d\u52a1\u5668\u90fd\u5fc5\u987b\u5b9e\u73b0 WebSockets \u534f\u8bae\u6765\u5efa\u7acb\u548c\u7ef4\u62a4\u8fde\u63a5"))),(0,o.kt)("h2",{id:"\u4e3a\u4ec0\u4e48\u8981\u4f7f\u7528"},"\u4e3a\u4ec0\u4e48\u8981\u4f7f\u7528"),(0,o.kt)("p",null,"\u4f20\u7edf\u7684\u901a\u4fe1\u8bf7\u6c42(\u4f8b\u5982http\u8bf7\u6c42)\u53ea\u80fd\u7531\u5ba2\u6237\u7aef\u53d1\u8d77\uff0c\u670d\u52a1\u7aef\u5bf9\u8bf7\u6c42\u505a\u51fa\u5e94\u7b54\u5904\u7406, \u65e0\u6cd5\u5b9e\u73b0\u670d\u52a1\u5668\u4e3b\u52a8\u5411\u5ba2\u6237\u7aef\u53d1\u8d77\u6d88\u606f, \u670d\u52a1\u5668\u6709\u8fde\u7eed\u7684\u72b6\u6001\u53d8\u5316\uff0c\u5ba2\u6237\u7aef\u8981\u83b7\u77e5\u5c31\u975e\u5e38\u9ebb\u70e6;"),(0,o.kt)("p",null,"client \u7aef\u8981\u5b9e\u65f6\u4e86\u89e3 server\u7aef\u7684\u6570\u636e\u53d8\u5316, \u53ef\u901a\u8fc7\u9891\u7e41\u7684\u8f6e\u8be2 \u6216\u8005 http \u957f\u8fde\u63a5, \u4f46\u662f\u8f6e\u8be2\u7684\u6548\u7387\u4f4e\uff0c\u957f\u8fde\u63a5\u975e\u5e38\u6d6a\u8d39\u8d44\u6e90\uff08\u56e0\u4e3a\u5fc5\u987b\u4e0d\u505c\u8fde\u63a5\uff0c\u6216\u8005 HTTP \u8fde\u63a5\u59cb\u7ec8\u6253\u5f00\uff09"),(0,o.kt)("h2",{id:"\u600e\u4e48\u4f7f\u7528"},"\u600e\u4e48\u4f7f\u7528"),(0,o.kt)("h3",{id:"client"},"client"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"var Socket = new WebSocket(url, [protocol] );")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// \u521d\u59cb\u5316\u4e00\u4e2a WebSocket \u5bf9\u8c61, \u5ba2\u6237\u7aef\u5c31\u4f1a\u4e0e\u670d\u52a1\u5668\u8fdb\u884c\u8fde\u63a5\nvar ws = new WebSocket("ws://localhost:9998/echo");\n\n// \u5efa\u7acb web socket \u8fde\u63a5\u6210\u529f\u89e6\u53d1\u4e8b\u4ef6\nws.onopen = function () {\n  // \u4f7f\u7528 send() \u65b9\u6cd5\u53d1\u9001\u6570\u636e\n  ws.send("\u53d1\u9001\u6570\u636e");\n  alert("\u6570\u636e\u53d1\u9001\u4e2d...");\n\n  if (ws.bufferedAmount === 0) {//bufferedAmount\u5c5e\u6027\uff0c\u8868\u793a\u8fd8\u6709\u591a\u5c11\u5b57\u8282\u7684\u4e8c\u8fdb\u5236\u6570\u636e\u6ca1\u6709\u53d1\u9001\u51fa\u53bb\u3002\u5b83\u53ef\u4ee5\u7528\u6765\u5224\u65ad\u53d1\u9001\u662f\u5426\u7ed3\u675f\n  // \u53d1\u9001\u5b8c\u6bd5\n} else {\n  // \u53d1\u9001\u8fd8\u6ca1\u7ed3\u675f\n}\n};\n\n// \u63a5\u6536\u670d\u52a1\u7aef\u6570\u636e\u65f6\u89e6\u53d1\u4e8b\u4ef6\nws.onmessage = function (evt) {//\u670d\u52a1\u5668\u6570\u636e\u53ef\u80fd\u662f\u6587\u672c\uff0c\u4e5f\u53ef\u80fd\u662f\u4e8c\u8fdb\u5236\u6570\u636e\uff08blob\u5bf9\u8c61\u6216Arraybuffer\u5bf9\u8c61\uff09\n   if(typeof event.data === String) {\n    console.log("Received data string");\n  }\n\n  if(event.data instanceof ArrayBuffer){\n    var buffer = event.data;\n    console.log("Received arraybuffer");\n  }\n};\n\n// \u65ad\u5f00 web socket \u8fde\u63a5\u6210\u529f\u89e6\u53d1\u4e8b\u4ef6\nws.onclose = function () {\n  alert("\u8fde\u63a5\u5df2\u5173\u95ed...");\n};\n\nws.onerror = function(event) {\n  // handle error event\n};\n\nswitch (ws.readyState) {\n  case WebSocket.CONNECTING://\u503c\u4e3a0\uff0c\u8868\u793a\u6b63\u5728\u8fde\u63a5\u3002\n    // do something\n    break;\n  case WebSocket.OPEN://\u503c\u4e3a1\uff0c\u8868\u793a\u8fde\u63a5\u6210\u529f\uff0c\u53ef\u4ee5\u901a\u4fe1\u4e86\n    // do something\n    break;\n  case WebSocket.CLOSING://\u503c\u4e3a2\uff0c\u8868\u793a\u8fde\u63a5\u6b63\u5728\u5173\u95ed\u3002\n    // do something\n    break;\n  case WebSocket.CLOSED://\u503c\u4e3a3\uff0c\u8868\u793a\u8fde\u63a5\u5df2\u7ecf\u5173\u95ed\uff0c\u6216\u8005\u6253\u5f00\u8fde\u63a5\u5931\u8d25\n    // do something\n    break;\n  default:\n    // this never happens\n    break;\n}\n\n')),(0,o.kt)("h3",{id:"server"},"server"),(0,o.kt)("p",null,"\u6709\u591a\u79cd\u5b9e\u73b0, \u4ee5Java\u4e3a\u4f8b: "),(0,o.kt)("h4",{id:"\u548cspring\u96c6\u6210"},"\u548cspring\u96c6\u6210"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>org.springframework</groupId>\n  <artifactId>spring-websocket</artifactId>\n  <version>${spring.version}</version>\n</dependency>\n\n")),(0,o.kt)("p",null,"\u7ee7\u627f TextWebSocketHandler \u6216 BinaryWebSocketHandler \u91cd\u5199\u9700\u8981\u7684\u65b9\u6cd5\u5373\u53ef, \u770b\u770bWebSocketHandler\u63a5\u53e3\u63d0\u4f9b\u54ea\u4e9b\u65b9\u6cd5:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"public interface WebSocketHandler {\n\n   /**\n    * \u5efa\u7acb\u8fde\u63a5\u540e\u89e6\u53d1\u7684\u56de\u8c03\n    */\n   void afterConnectionEstablished(WebSocketSession session) throws Exception;\n\n   /**\n    * \u6536\u5230\u6d88\u606f\u65f6\u89e6\u53d1\u7684\u56de\u8c03\n    */\n   void handleMessage(WebSocketSession session, WebSocketMessage<?> message) throws Exception;\n\n   /**\n    * \u4f20\u8f93\u6d88\u606f\u51fa\u9519\u65f6\u89e6\u53d1\u7684\u56de\u8c03\n    */\n   void handleTransportError(WebSocketSession session, Throwable exception) throws Exception;\n\n   /**\n    * \u65ad\u5f00\u8fde\u63a5\u540e\u89e6\u53d1\u7684\u56de\u8c03\n    */\n   void afterConnectionClosed(WebSocketSession session, CloseStatus closeStatus) throws Exception;\n\n   /**\n    * \u662f\u5426\u5904\u7406\u5206\u7247\u6d88\u606f\n    */\n   boolean supportsPartialMessages();\n\n}\n\n")),(0,o.kt)("p",null,"\u6700\u540e\u8fd8\u9700\u8981\u914d\u7f6e, \u6ce8\u89e3or xml\u5747\u53ef, \u4f5c\u7528\u662f\u5c06\u81ea\u5df1\u7f16\u5199\u7684 handler\u6ce8\u518c\u5230spring\u4e2d"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'@Configuration\n@EnableWebSocket\npublic class WebSocketConfig implements WebSocketConfigurer {\n\n    @Override\n    public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {\n        registry.addHandler(myHandler(), "/myHandler");\n    }\n\n    @Bean\n    public WebSocketHandler myHandler() {\n        return new MyHandler();\n    }\n\n}\n\n')),(0,o.kt)("p",null,"xml\u65b9\u5f0f:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<beans xmlns="http://www.springframework.org/schema/beans"\n    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n    xmlns:websocket="http://www.springframework.org/schema/websocket"\n    xsi:schemaLocation="\n        http://www.springframework.org/schema/beans\n        http://www.springframework.org/schema/beans/spring-beans.xsd\n        http://www.springframework.org/schema/websocket\n        http://www.springframework.org/schema/websocket/spring-websocket.xsd">\n\n    <websocket:handlers>\n        <websocket:mapping path="/myHandler" handler="myHandler"/>\n    </websocket:handlers>\n\n    <bean id="myHandler" class="org.springframework.samples.MyHandler"/>\n\n</beans>\n\n')),(0,o.kt)("p",null,"\u5982\u679c\u4f60\u7684 web \u5e94\u7528\u4f7f\u7528\u4e86\u4ee3\u7406\u670d\u52a1\u5668 Nginx\uff0c\u90a3\u4e48\u4f60\u8fd8\u9700\u8981\u4e3a Nginx \u505a\u4e00\u4e9b\u914d\u7f6e\uff0c\u4f7f\u5f97\u5b83\u5f00\u542f WebSocket \u4ee3\u7406\u529f\u80fd\u3002"),(0,o.kt)("h4",{id:"\u4e0d\u548cspring\u96c6\u6210"},"\u4e0d\u548cspring\u96c6\u6210"),(0,o.kt)("p",null,"\u52a0\u5165\u4f9d\u8d56"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"}," <dependency>\n         <groupId>javax</groupId>\n         <artifactId>javaee-api</artifactId>\n         <version>7.0</version>\n         <scope>provided</scope>\n </dependency>\n\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'package me.gacl.websocket;\n\nimport java.io.IOException;\nimport java.util.concurrent.CopyOnWriteArraySet;\n\nimport javax.websocket.*;\nimport javax.websocket.server.ServerEndpoint;\n\n/**\n * @ServerEndpoint \u6ce8\u89e3\u662f\u4e00\u4e2a\u7c7b\u5c42\u6b21\u7684\u6ce8\u89e3\uff0c\u5b83\u7684\u529f\u80fd\u4e3b\u8981\u662f\u5c06\u76ee\u524d\u7684\u7c7b\u5b9a\u4e49\u6210\u4e00\u4e2awebsocket\u670d\u52a1\u5668\u7aef,\n * \u6ce8\u89e3\u7684\u503c\u5c06\u88ab\u7528\u4e8e\u76d1\u542c\u7528\u6237\u8fde\u63a5\u7684\u7ec8\u7aef\u8bbf\u95eeURL\u5730\u5740,\u5ba2\u6237\u7aef\u53ef\u4ee5\u901a\u8fc7\u8fd9\u4e2aURL\u6765\u8fde\u63a5\u5230WebSocket\u670d\u52a1\u5668\u7aef\n */\n@ServerEndpoint("/websocket")\npublic class WebSocketTest {\n    //\u9759\u6001\u53d8\u91cf\uff0c\u7528\u6765\u8bb0\u5f55\u5f53\u524d\u5728\u7ebf\u8fde\u63a5\u6570\u3002\u5e94\u8be5\u628a\u5b83\u8bbe\u8ba1\u6210\u7ebf\u7a0b\u5b89\u5168\u7684\u3002\n    private static int onlineCount = 0;\n\n    //concurrent\u5305\u7684\u7ebf\u7a0b\u5b89\u5168Set\uff0c\u7528\u6765\u5b58\u653e\u6bcf\u4e2a\u5ba2\u6237\u7aef\u5bf9\u5e94\u7684MyWebSocket\u5bf9\u8c61\u3002\u82e5\u8981\u5b9e\u73b0\u670d\u52a1\u7aef\u4e0e\u5355\u4e00\u5ba2\u6237\u7aef\u901a\u4fe1\u7684\u8bdd\uff0c\u53ef\u4ee5\u4f7f\u7528Map\u6765\u5b58\u653e\uff0c\u5176\u4e2dKey\u53ef\u4ee5\u4e3a\u7528\u6237\u6807\u8bc6\n    private static CopyOnWriteArraySet<WebSocketTest> webSocketSet = new CopyOnWriteArraySet<WebSocketTest>();\n\n    //\u4e0e\u67d0\u4e2a\u5ba2\u6237\u7aef\u7684\u8fde\u63a5\u4f1a\u8bdd\uff0c\u9700\u8981\u901a\u8fc7\u5b83\u6765\u7ed9\u5ba2\u6237\u7aef\u53d1\u9001\u6570\u636e\n    private Session session;\n\n    /**\n     * \u8fde\u63a5\u5efa\u7acb\u6210\u529f\u8c03\u7528\u7684\u65b9\u6cd5\n     * @param session  \u53ef\u9009\u7684\u53c2\u6570\u3002session\u4e3a\u4e0e\u67d0\u4e2a\u5ba2\u6237\u7aef\u7684\u8fde\u63a5\u4f1a\u8bdd\uff0c\u9700\u8981\u901a\u8fc7\u5b83\u6765\u7ed9\u5ba2\u6237\u7aef\u53d1\u9001\u6570\u636e\n     */\n    @OnOpen\n    public void onOpen(Session session){\n        this.session = session;\n        webSocketSet.add(this);     //\u52a0\u5165set\u4e2d\n        addOnlineCount();           //\u5728\u7ebf\u6570\u52a01\n        System.out.println("\u6709\u65b0\u8fde\u63a5\u52a0\u5165\uff01\u5f53\u524d\u5728\u7ebf\u4eba\u6570\u4e3a" + getOnlineCount());\n    }\n\n    /**\n     * \u8fde\u63a5\u5173\u95ed\u8c03\u7528\u7684\u65b9\u6cd5\n     */\n    @OnClose\n    public void onClose(){\n        webSocketSet.remove(this);  //\u4eceset\u4e2d\u5220\u9664\n        subOnlineCount();           //\u5728\u7ebf\u6570\u51cf1\n        System.out.println("\u6709\u4e00\u8fde\u63a5\u5173\u95ed\uff01\u5f53\u524d\u5728\u7ebf\u4eba\u6570\u4e3a" + getOnlineCount());\n    }\n\n    /**\n     * \u6536\u5230\u5ba2\u6237\u7aef\u6d88\u606f\u540e\u8c03\u7528\u7684\u65b9\u6cd5\n     * @param message \u5ba2\u6237\u7aef\u53d1\u9001\u8fc7\u6765\u7684\u6d88\u606f\n     * @param session \u53ef\u9009\u7684\u53c2\u6570\n     */\n    @OnMessage\n    public void onMessage(String message, Session session) {\n        System.out.println("\u6765\u81ea\u5ba2\u6237\u7aef\u7684\u6d88\u606f:" + message);\n        //\u7fa4\u53d1\u6d88\u606f\n        for(WebSocketTest item: webSocketSet){\n            try {\n                item.sendMessage(message);\n            } catch (IOException e) {\n                e.printStackTrace();\n                continue;\n            }\n        }\n    }\n\n    /**\n     * \u53d1\u751f\u9519\u8bef\u65f6\u8c03\u7528\n     * @param session\n     * @param error\n     */\n    @OnError\n    public void onError(Session session, Throwable error){\n        System.out.println("\u53d1\u751f\u9519\u8bef");\n        error.printStackTrace();\n    }\n\n    /**\n     * \u8fd9\u4e2a\u65b9\u6cd5\u4e0e\u4e0a\u9762\u51e0\u4e2a\u65b9\u6cd5\u4e0d\u4e00\u6837\u3002\u6ca1\u6709\u7528\u6ce8\u89e3\uff0c\u662f\u6839\u636e\u81ea\u5df1\u9700\u8981\u6dfb\u52a0\u7684\u65b9\u6cd5\u3002\n     * @param message\n     * @throws IOException\n     */\n    public void sendMessage(String message) throws IOException{\n        this.session.getBasicRemote().sendText(message);\n        //this.session.getAsyncRemote().sendText(message);\n    }\n\n    public static synchronized int getOnlineCount() {\n        return onlineCount;\n    }\n\n    public static synchronized void addOnlineCount() {\n        WebSocketTest.onlineCount++;\n    }\n\n    public static synchronized void subOnlineCount() {\n        WebSocketTest.onlineCount--;\n    }\n}\n\n')),(0,o.kt)("h1",{id:"webrtc"},"webrtc"),(0,o.kt)("p",null,"Web Real-Time Communication \u7f51\u9875\u5b9e\u65f6\u901a\u4fe1, \u662f\u4e00\u4e2a\u652f\u6301\u7f51\u9875\u6d4f\u89c8\u5668\u8fdb\u884c\u5b9e\u65f6\u8bed\u97f3\u5bf9\u8bdd\u6216\u89c6\u9891\u5bf9\u8bdd\u7684\u6280\u672f. \u57fa\u4e8eP2P\u7684\u97f3\u89c6\u9891\u901a\u4fe1\u6280\u672f, \u5efa\u7acb\u8fde\u63a5\u540e\u7684\u901a\u4fe1\u8fc7\u7a0b\u65e0\u9700\u4e2d\u95f4 server (\u521b\u5efa\u8fde\u63a5\u548c\u65ad\u5f00\u8fde\u63a5\u7684\u8fc7\u7a0b\u8fd8\u662f\u9700\u8981\u7684)"),(0,o.kt)("p",null,"webrtc \u548c websocket \u533a\u522b:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"WebSockets\u5141\u8bb8\u6d4f\u89c8\u5668\u548cWeb\u670d\u52a1\u5668\u4e4b\u95f4\u7684\u5168\u53cc\u5de5\u901a\u4fe1"),(0,o.kt)("li",{parentName:"ul"},"WebRTC\u7684PeerConnection\u5141\u8bb8\u4e24\u4e2a\u6d4f\u89c8\u5668\u4e4b\u95f4\u7684\u5168\u53cc\u5de5\u901a\u4fe1")),(0,o.kt)("p",null,"\u5efa\u7acb\u8fde\u63a5\u7684\u8fc7\u7a0b:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"A\u548cB\u8fde\u63a5\u4e0a\u670d\u52a1\u7aef\uff0c\u5efa\u7acb\u4e00\u4e2aTCP\u957f\u8fde\u63a5\uff08\u4efb\u610f\u534f\u8bae\u90fd\u53ef\u4ee5\uff0cWebSocket/MQTT/Socket\u539f\u751f/XMPP\uff09\uff0c\u4e3a\u4e86\u7701\u4e8b\uff0c\u76f4\u63a5\u91c7\u7528WebSocket\uff0c\u8fd9\u6837\u4e00\u4e2a\u4fe1\u4ee4\u901a\u9053\u5c31\u6709\u4e86\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"A\u4ece\u670d\u52a1\u5668\u83b7\u5f97ice server\u540c\u65f6\u751f\u6210\u5305\u542bsession description\uff08SDP\uff09\u7684offer\uff0c\u53d1\u9001\u7ed9Socket\u670d\u52a1\u7aef\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Socket\u670d\u52a1\u7aef\u628aA\u7684offer\u548ccandidate\u8f6c\u53d1\u7ed9B\uff0cB\u4f1a\u4fdd\u5b58\u4e0bA\u8fd9\u4e9b\u4fe1\u606f\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u7136\u540eB\u53d1\u9001\u5305\u542b\u81ea\u5df1session description\u7684answer(\u56e0\u4e3a\u5b83\u6536\u5230\u7684\u662foffer\uff0c\u6240\u4ee5\u8fd4\u56de\u7684\u662fanswer\uff0c\u4f46\u662f\u5185\u5bb9\u90fd\u662fSDP)\u548cice candidate\u7ed9Socket\u670d\u52a1\u7aef\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Socket\u670d\u52a1\u7aef\u628aB\u7684answer\u548cice candidate\u7ed9A\uff0cA\u4fdd\u5b58\u4e0bB\u7684\u8fd9\u4e9b\u4fe1\u606f\u3002"))),(0,o.kt)("p",null,"WebRTC\u81f3\u5c11\u6709\u4e24\u4ef6\u4e8b\u5fc5\u987b\u8981\u7528\u5230\u670d\u52a1\u5668:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u5ba2\u6237\u7aef\u4e4b\u95f4\u4ea4\u6362\u5efa\u7acb\u901a\u4fe1\u7684\u5143\u6570\u636e\uff08\u4fe1\u4ee4\uff09\u5fc5\u987b\u901a\u8fc7\u670d\u52a1\u5668\u3002\u65ad\u5f00\u8fde\u63a5\u9700\u8981\u670d\u52a1\u5668\u6765\u544a\u77e5\u53e6\u4e00\u7aefP2P\u8fde\u63a5\u5df2\u65ad\u5f00")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u7a7f\u8d8aNAT\u548c\u9632\u706b\u5899."),(0,o.kt)("p",{parentName:"li"},"\u5982\u679c\u5ba2\u6237\u7aefA\u60f3\u7ed9\u5ba2\u6237\u7aefB\u53d1\u9001\u6570\u636e\uff0c\u5219\u6570\u636e\u6765\u5230\u5ba2\u6237\u7aefB\u6240\u5728\u7684\u8def\u7531\u5668\u4e0b\uff0c\u4f1a\u88abNAT\u963b\u62e6\uff0c\u8fd9\u6837B\u5c31\u65e0\u6cd5\u6536\u5230A\u7684\u6570\u636e\u4e86 \u3002webrtc\u662f\u901a\u8fc7 ICE \u8fd9\u5957\u6846\u67b6\u6765\u5904\u7406\u590d\u6742\u7684\u7f51\u7edc\u73af\u5883,"))),(0,o.kt)("p",null,"\u4fe1\u4ee4\u7684\u7c7b\u578b:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Offer\uff1a\u5efa\u7acb\u70b9\u5bf9\u70b9\u7684\u8fde\u63a5\u65f6\uff0c\u53d1\u8d77\u7aef\uff08A\u5ba2\u6237\u7aef\uff09\u9700\u8981\u53d1\u9001\u7684\u4fe1\u4ee4"),(0,o.kt)("li",{parentName:"ul"},"Answer\uff1a\u5efa\u7acb\u70b9\u5bf9\u70b9\u7684\u8fde\u63a5\u65f6\uff0c\u88ab\u53eb\u7aef\uff08B\u5ba2\u6237\u7aef\uff09\u9700\u8981\u53d1\u9001\u7684\u4fe1\u4ee4"),(0,o.kt)("li",{parentName:"ul"},"Bye\uff1a\u70b9\u5bf9\u70b9\u7684\u8fde\u63a5\u65ad\u5f00\u65f6\uff0c\u53d1\u9001\u7684\u4fe1\u4ee4")))}m.isMDXComponent=!0}}]);