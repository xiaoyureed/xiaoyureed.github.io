"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5887],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),h=p(n),m=r,k=h["".concat(u,".").concat(m)]||h[m]||s[m]||l;return n?a.createElement(k,i(i({ref:t},c),{},{components:n})):a.createElement(k,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=h;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},26514:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return s}});var a=n(83117),r=n(80102),l=(n(67294),n(3905)),i=["components"],o={title:"netty",tags:["netty","nio"],date:new Date("2018-07-19T00:00:00.000Z"),toc_min_heading_level:2,toc_max_heading_level:5},u=void 0,p={unversionedId:"netty-note",id:"netty-note",title:"netty",description:"\u4e00\u7247\u6559\u7a0b//waylau.gitbooks.io/essential-netty-in-action ;",source:"@site/docs/netty-note.md",sourceDirName:".",slug:"/netty-note",permalink:"/docs/netty-note",draft:!1,tags:[{label:"netty",permalink:"/docs/tags/netty"},{label:"nio",permalink:"/docs/tags/nio"}],version:"current",frontMatter:{title:"netty",tags:["netty","nio"],date:"2018-07-19T00:00:00.000Z",toc_min_heading_level:2,toc_max_heading_level:5},sidebar:"tutorialSidebar",previous:{title:"MyBatis Note",permalink:"/docs/mybatis-note"},next:{title:"nlp-natural-language-processing\ud83d\udc44",permalink:"/docs/nlp-natural-language-processing"}},c={},s=[{value:"\u5b9a\u4e49",id:"\u5b9a\u4e49",level:2},{value:"\u4f20\u7edfhttp\u670d\u52a1\u5668\u539f\u7406",id:"\u4f20\u7edfhttp\u670d\u52a1\u5668\u539f\u7406",level:2},{value:"\u4e3a\u4ec0\u4e48\u9700\u8981netty",id:"\u4e3a\u4ec0\u4e48\u9700\u8981netty",level:2},{value:"selector",id:"selector",level:2},{value:"channel",id:"channel",level:2},{value:"callback \u5373\u5468\u671f\u51fd\u6570",id:"callback-\u5373\u5468\u671f\u51fd\u6570",level:2},{value:"Future",id:"future",level:2},{value:"Event \u548c Handler",id:"event-\u548c-handler",level:2}],h={toc:s};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("div",{align:"center"},"\u4e00\u7247\u6559\u7a0b: https://waylau.gitbooks.io/essential-netty-in-action ; \u5b98\u7f51: https://netty.io/index.html; \u4e00\u4e9bdemo: https://github.com/xuwujing/Netty-study; \u6e90\u7801\u5206\u6790: https://github.com/yongshun/learn_netty_source_code zhihu\u4e0a\u7684\u4e00\u4e2a\u901a\u4fd7\u4ecb\u7ecd\u503c\u5f97\u4e00\u770b: https://www.zhihu.com/question/24322387",(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/gupaoedu-tom/netty4-samples"},"https://github.com/gupaoedu-tom/netty4-samples")),(0,l.kt)("p",null,"netty\n\u2b07\nvertx\n\u2b07\nkotlin-\n\u2b07\nquarkus\n\u2b07------------------------\u2b07--------------------\u2b07---------------------\u2b07-------------------\u2b07\n(\u63a5\u53d7\u5404\u79cd Monad)------(\u62d2\u7edd\u5404\u79cd monad)-----------\u6ce8\u91cd\u6027\u80fd---------------\u6ce8\u91cd\u4e91\u539f\u751f--------------\u7f1d\u5408\u602a\n\u2b07------------------------\u2b07--------------------\u2b07---------------------\u2b07-------------------\u2b07\nhaskell--------------clojure----------------rust--------------------go----------------.net/F#\n\u2b07-----------------------\u2b07\n\u8303\u7574\u8bba---------------scheme/racket")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#1-netty%E6%98%AF%E4%BB%80%E4%B9%88"},"1. netty\u662f\u4ec0\u4e48"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#11-%E5%AE%9A%E4%B9%89"},"1.1. \u5b9a\u4e49")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#12-%E4%BC%A0%E7%BB%9Fhttp%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%8E%9F%E7%90%86"},"1.2. \u4f20\u7edfhttp\u670d\u52a1\u5668\u539f\u7406")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#13-%E4%B8%BA%E4%BB%80%E4%B9%88%E9%9C%80%E8%A6%81netty"},"1.3. \u4e3a\u4ec0\u4e48\u9700\u8981netty")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#2-%E6%9E%B6%E6%9E%84"},"2. \u67b6\u6784"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#21-selector"},"2.1. selector")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#22-channel"},"2.2. channel")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#23-callback-%E5%8D%B3%E5%91%A8%E6%9C%9F%E5%87%BD%E6%95%B0"},"2.3. callback \u5373\u5468\u671f\u51fd\u6570")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#24-future"},"2.4. Future")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#25-event-%E5%92%8C-handler"},"2.5. Event \u548c Handler")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#3-%E8%87%AA%E5%AE%9A%E4%B9%89%E5%8D%8F%E8%AE%AE%E8%A7%A3%E5%86%B3%E6%B2%BE%E5%8C%85%E9%97%AE%E9%A2%98"},"3. \u81ea\u5b9a\u4e49\u534f\u8bae\u89e3\u51b3\u6cbe\u5305\u95ee\u9898")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#4-%E5%AE%9E%E7%8E%B0%E5%BF%83%E8%B7%B3%E6%9C%BA%E5%88%B6"},"4. \u5b9e\u73b0\u5fc3\u8df3\u673a\u5236")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#5-netty-%E6%95%B4%E5%90%88-springboot-%E5%BC%80%E5%8F%91-web-%E6%9C%8D%E5%8A%A1"},"5. netty \u6574\u5408 springboot \u5f00\u53d1 web \u670d\u52a1")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#6-%E5%8D%B3%E6%97%B6%E9%80%9A%E8%AE%AF%E7%B3%BB%E7%BB%9F"},"6. \u5373\u65f6\u901a\u8baf\u7cfb\u7edf"))),(0,l.kt)("h1",{id:"netty\u662f\u4ec0\u4e48"},"netty\u662f\u4ec0\u4e48"),(0,l.kt)("h2",{id:"\u5b9a\u4e49"},"\u5b9a\u4e49"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.zhihu.com/question/24322387"},"https://www.zhihu.com/question/24322387")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u672c\u8d28\u662f JBoss \u505a\u7684\u4e00\u4e2aJar\u5305(\u5bf9 java nio \u7684\u5c01\u88c5), \u5904\u7406 socket \u5f88\u65b9\u4fbf"),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u5feb\u901f\u5f00\u53d1\u9ad8\u6027\u80fd\u3001\u9ad8\u53ef\u9760\u6027\u7684\u7f51\u7edc\u670d\u52a1\u5668\u548c\u5ba2\u6237\u7aef\u7a0b\u5e8f"),(0,l.kt)("li",{parentName:"ul"},"\u5f02\u6b65\u3001\u4e8b\u4ef6\u9a71\u52a8, \u4f7f\u7528 reactor  \u6a21\u5f0f"),(0,l.kt)("li",{parentName:"ul"},"\u540c\u7c7b\u4e8b\u7269\u662f mina , \u53ef\u4ee5\u53c2\u8003\u8fd9\u91cc: ",(0,l.kt)("a",{parentName:"li",href:"https://mina.apache.org/mina-project/quick-start-guide.html"},"https://mina.apache.org/mina-project/quick-start-guide.html"))),(0,l.kt)("h2",{id:"\u4f20\u7edfhttp\u670d\u52a1\u5668\u539f\u7406"},"\u4f20\u7edfhttp\u670d\u52a1\u5668\u539f\u7406"),(0,l.kt)("p",null,"\u4f20\u7edf\u7684\u591a\u7ebf\u7a0b\u670d\u52a1\u5668: (\u9ad8\u5e76\u53d1\u4e0b, \u4f1a\u521b\u5efa\u5927\u91cf\u7ebf\u7a0b -> \u6539\u8fdb: nio )"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u521b\u5efa\u4e00\u4e2aServerSocket\uff0c\u76d1\u542c\u5e76\u7ed1\u5b9a\u4e00\u4e2a\u7aef\u53e3"),(0,l.kt)("li",{parentName:"ol"},"\u4e00\u7cfb\u5217\u5ba2\u6237\u7aef\u6765\u8bf7\u6c42\u8fd9\u4e2a\u7aef\u53e3"),(0,l.kt)("li",{parentName:"ol"},"\u670d\u52a1\u5668\u4f7f\u7528Accept\uff0c\u83b7\u5f97\u4e00\u4e2a\u6765\u81ea\u5ba2\u6237\u7aef\u7684Socket\u8fde\u63a5\u5bf9\u8c61"),(0,l.kt)("li",{parentName:"ol"},"\u542f\u52a8\u4e00\u4e2a\u65b0\u7ebf\u7a0b\u5904\u7406\u8fde\u63a5",(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"\u8bfbSocket\uff0c\u5f97\u5230\u5b57\u8282\u6d41"),(0,l.kt)("li",{parentName:"ol"},"\u89e3\u7801\u534f\u8bae\uff0c\u5f97\u5230Http\u8bf7\u6c42\u5bf9\u8c61"),(0,l.kt)("li",{parentName:"ol"},"\u5904\u7406Http\u8bf7\u6c42\uff0c\u5f97\u5230\u4e00\u4e2a\u7ed3\u679c\uff0c\u5c01\u88c5\u6210\u4e00\u4e2aHttpResponse\u5bf9\u8c61"),(0,l.kt)("li",{parentName:"ol"},"\u7f16\u7801\u534f\u8bae\uff0c\u5c06\u7ed3\u679c\u5e8f\u5217\u5316\u5b57\u8282\u6d41"),(0,l.kt)("li",{parentName:"ol"},"\u5199Socket\uff0c\u5c06\u5b57\u8282\u6d41\u53d1\u7ed9\u5ba2\u6237\u7aef"))),(0,l.kt)("li",{parentName:"ol"},"\u7ee7\u7eed\u5faa\u73af\u6b65\u9aa43")),(0,l.kt)("p",null,"HTTP\u670d\u52a1\u5668\u4e4b\u6240\u4ee5\u79f0\u4e3aHTTP\u670d\u52a1\u5668\uff0c\u662f\u56e0\u4e3a\u7f16\u7801\u89e3\u7801\u534f\u8bae\u662fHTTP\u534f\u8bae"),(0,l.kt)("p",null,"\u4f7f\u7528Netty\u4f60\u5c31\u53ef\u4ee5\u5b9a\u5236\u7f16\u89e3\u7801\u534f\u8bae\uff0c\u5b9e\u73b0\u81ea\u5df1\u7684\u7279\u5b9a\u534f\u8bae\u7684\u670d\u52a1\u5668"),(0,l.kt)("p",null,'\u7136\u540e, \u8fd8\u6709\u4e00\u4e2a "\u4f2a\u5f02\u6b65IO\u7684\u6a21\u5f0f", Server\u7aef\u4f7f\u7528\u4e86\u7ebf\u7a0b\u6c60\u800c\u5df2,\u5c06\u5ba2\u6237\u7aef\u7684socket\u5c01\u88c5\u6210\u4e00\u4e2atask\u4efb\u52a1\uff0c\u8fd9\u6837client\u5e76\u53d1\u591a\u7684\u65f6\u5019\uff0c\u5c31\u4f1a\u901a\u8fc7\u7b49\u5f85\u6765\u6267\u884c\uff0c\u4e0d\u4f1a\u8ba9\u7ebf\u7a0b\u4e00\u4e0b\u5b50\u8d77\u7684\u592a\u591a'),(0,l.kt)("p",null,"\u4f20\u7edf\u7684\u6a21\u5f0f\u662fBIO\u6a21\u5f0f\uff0c\u662f\u540c\u6b65\u963b\u585e\u7684, thread \u4e00\u65e6\u592a\u591a, \u673a\u5668\u5c31 crash  \u4e86"),(0,l.kt)("h2",{id:"\u4e3a\u4ec0\u4e48\u9700\u8981netty"},"\u4e3a\u4ec0\u4e48\u9700\u8981netty"),(0,l.kt)("p",null,"\u4f7f\u7528\u4f20\u7edf\u7684 http \u670d\u52a1\u5668 (\u4f7f\u7528 http \u534f\u8bae), \u6709\u65f6\u4e0d\u597d\u62d3\u5c55, \u4f8b\u5982 \u4f20\u9012\u6587\u4ef6, Email, \u5b9e\u65f6\u6570\u636e(\u6e38\u620f), \u5c31\u4e0d\u7075\u4e86, \u4f7f\u7528 netty \u53ef\u4ee5\u5b9a\u5236\u81ea\u5df1\u7684\u4e13\u7528\u534f\u8bae, \u5b9e\u73b0\u4e13\u7528\u670d\u52a1\u5668\u7a0b\u5e8f"),(0,l.kt)("h1",{id:"\u67b6\u6784"},"\u67b6\u6784"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Bootstrap \u548c ServerBootstrap"),(0,l.kt)("li",{parentName:"ul"},"Channel - Netty \u4e2d\u7684\u63a5\u53e3 Channel \u5b9a\u4e49\u4e86\u4e0e socket \u4e30\u5bcc\u4ea4\u4e92\u7684\u64cd\u4f5c\u96c6\uff1abind, close, config, connect, isActive, isOpen, isWritable, read, write \u7b49\u7b49"),(0,l.kt)("li",{parentName:"ul"},"ChannelHandler - \u4e1a\u52a1\u903b\u8f91\u5728\u8fd9\u91cc, \u7528\u6765\u5904\u7406 i/o \u4e8b\u4ef6"),(0,l.kt)("li",{parentName:"ul"},"ChannelPipeline"),(0,l.kt)("li",{parentName:"ul"},"EventLoop - EventLoop \u7528\u4e8e\u5904\u7406 Channel \u7684 I/O \u64cd\u4f5c"),(0,l.kt)("li",{parentName:"ul"},"ChannelFuture - Netty \u6240\u6709\u7684 I/O \u64cd\u4f5c\u90fd\u662f\u5f02\u6b65\u3002\u56e0\u4e3a\u4e00\u4e2a\u64cd\u4f5c\u53ef\u80fd\u65e0\u6cd5\u7acb\u5373\u8fd4\u56de\uff0c\u6211\u4eec\u9700\u8981\u6709\u4e00\u79cd\u65b9\u6cd5\u5728\u4ee5\u540e\u786e\u5b9a\u5b83\u7684\u7ed3\u679c\u3002\u51fa\u4e8e\u8fd9\u4e2a\u76ee\u7684\uff0cNetty \u63d0\u4f9b\u4e86\u63a5\u53e3 ChannelFuture,\u5b83\u7684 addListener \u65b9\u6cd5\u6ce8\u518c\u4e86\u4e00\u4e2a ChannelFutureListener \uff0c\u5f53\u64cd\u4f5c\u5b8c\u6210\u65f6\uff0c\u53ef\u4ee5\u88ab\u901a\u77e5\uff08\u4e0d\u7ba1\u6210\u529f\u4e0e\u5426\uff09")),(0,l.kt)("h2",{id:"selector"},"selector"),(0,l.kt)("p",null,"\u591a\u8def\u590d\u7528"),(0,l.kt)("p",null,"\u7ebf\u7a0b\u660e\u663e\u5c11\u591a\u4e86"),(0,l.kt)("h2",{id:"channel"},"channel"),(0,l.kt)("p",null,"\u4ee3\u8868\u4e86\u4e00\u4e2a\u7528\u4e8e\u8fde\u63a5\u5230\u5b9e\u4f53\u5982\u786c\u4ef6\u8bbe\u5907\u3001\u6587\u4ef6\u3001\u7f51\u7edc\u5957\u63a5\u5b57\u6216\u7a0b\u5e8f\u7ec4\u4ef6,\u80fd\u591f\u6267\u884c\u4e00\u4e2a\u6216\u591a\u4e2a\u4e0d\u540c\u7684 I/O \u64cd\u4f5c\uff08\u4f8b\u5982\u8bfb\u6216\u5199\uff09\u7684\u5f00\u653e\u8fde\u63a5\u3002"),(0,l.kt)("p",null,"\u53ef\u4ee5\u201c\u6253\u5f00\u201d\u6216\u201c\u5173\u95ed\u201d"),(0,l.kt)("h2",{id:"callback-\u5373\u5468\u671f\u51fd\u6570"},"callback \u5373\u5468\u671f\u51fd\u6570"),(0,l.kt)("p",null,"Netty \u5185\u90e8\u4f7f\u7528\u56de\u8c03 (\u5468\u671f\u51fd\u6570 ) \u5904\u7406\u4e8b\u4ef6\u3002\u4e00\u65e6\u8fd9\u6837\u7684\u56de\u8c03\u88ab\u89e6\u53d1\uff0c\u4e8b\u4ef6\u53ef\u4ee5\u7531\u63a5\u53e3 ChannelHandler \u7684\u5b9e\u73b0\u6765\u5904\u7406\u3002\u5982\u4e0b\u9762\u7684\u4ee3\u7801\uff0c\u4e00\u65e6\u4e00\u4e2a\u65b0\u7684\u8fde\u63a5\u5efa\u7acb\u4e86,\u8c03\u7528 channelActive(),\u5e76\u5c06\u6253\u5370\u4e00\u6761\u6d88\u606f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'public class ConnectHandler extends ChannelInboundHandlerAdapter {\n  // \u5f53\u5efa\u7acb\u4e00\u4e2a\u65b0\u7684\u8fde\u63a5\u65f6\u8c03\u7528 ChannelActive()\n    @Override\n    public void channelActive(ChannelHandlerContext ctx) throws Exception {   //1\n        System.out.println(\n                "Client " + ctx.channel().remoteAddress() + " connected");\n    }\n}\n\n')),(0,l.kt)("h2",{id:"future"},"Future"),(0,l.kt)("p",null,"Future \u63d0\u4f9b\u4e86\u53e6\u5916\u4e00\u79cd\u901a\u77e5\u5e94\u7528\u64cd\u4f5c\u5df2\u7ecf\u5b8c\u6210\u7684\u65b9\u5f0f\u3002\u8fd9\u4e2a\u5bf9\u8c61\u4f5c\u4e3a\u4e00\u4e2a\u5f02\u6b65\u64cd\u4f5c\u7ed3\u679c\u7684\u5360\u4f4d\u7b26,\u5b83\u5c06\u5728\u5c06\u6765\u7684\u67d0\u4e2a\u65f6\u5019\u5b8c\u6210\u5e76\u63d0\u4f9b\u7ed3\u679c\u3002"),(0,l.kt)("p",null,"JDK \u9644\u5e26\u63a5\u53e3 java.util.concurrent.Future , \u4f46\u662f\u9700\u8981\u624b\u52a8\u68c0\u67e5\u64cd\u4f5c\u662f\u5426\u5b8c\u6210\u6216\u963b\u585e\u4e86. \u6240\u4ee5 Netty \u63d0\u4f9b\u81ea\u5df1\u4e86\u7684\u5b9e\u73b0,ChannelFuture,\u7528\u4e8e\u5728\u6267\u884c\u5f02\u6b65\u64cd\u4f5c\u65f6\u4f7f\u7528"),(0,l.kt)("p",null,"\u56de\u8c03\u65b9\u6cd5 operationComplete() \u4f1a\u5728\u64cd\u4f5c\u5b8c\u6210\u65f6\u8c03\u7528\u3002\u4e8b\u4ef6\u76d1\u542c\u8005\u80fd\u591f\u786e\u8ba4\u8fd9\u4e2a\u64cd\u4f5c\u662f\u5426\u6210\u529f\u6216\u8005\u662f\u9519\u8bef"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'//\u4e0d\u4f1a\u963b\u585e\nChannelFuture future = channel.connect(            //1\n        new InetSocketAddress("192.168.0.1", 25));\nfuture.addListener(new ChannelFutureListener() {//2 \u64cd\u4f5c\u5b8c\u6210\u540e\u901a\u77e5\u6ce8\u518c\u4e00\u4e2a ChannelFutureListener\n\n    @Override\n    public void operationComplete(ChannelFuture future) {\n        if (future.isSuccess()) {                    //3\u68c0\u67e5\u64cd\u4f5c\u7684\u72b6\u6001\u3002\n            ByteBuf buffer = Unpooled.copiedBuffer(\n                    "Hello", Charset.defaultCharset()); //4 \u521b\u5efa\u4e00\u4e2a ByteBuf \u6765\u4fdd\u5b58\u6570\u636e\n            ChannelFuture wf = future.channel().writeAndFlush(buffer);   //5\u5f02\u6b65\u53d1\u9001\u6570\u636e\u5230\u8fdc\u7a0b\u3002\u518d\u6b21\u8fd4\u56deChannelFuture\n            // ...\n        } else {\n            Throwable cause = future.cause();        //6\u6709\u4e00\u4e2a\u9519\u8bef\u5219\u629b\u51fa Throwable,\u63cf\u8ff0\u9519\u8bef\u539f\u56e0\n            cause.printStackTrace();\n        }\n    }\n});\n')),(0,l.kt)("h2",{id:"event-\u548c-handler"},"Event \u548c Handler"),(0,l.kt)("p",null,"Netty \u4f7f\u7528\u4e0d\u540c\u7684\u4e8b\u4ef6\u6765\u901a\u77e5\u6211\u4eec\u66f4\u6539\u7684\u72b6\u6001\u6216\u64cd\u4f5c\u7684\u72b6\u6001\u3002\u8fd9\u4f7f\u6211\u4eec\u80fd\u591f\u6839\u636e\u53d1\u751f\u7684\u4e8b\u4ef6\u89e6\u53d1\u9002\u5f53\u7684\u884c\u4e3a\u3002"),(0,l.kt)("p",null,"Netty \u7684 ChannelHandler \u662f\u5404\u79cd\u5904\u7406\u7a0b\u5e8f\u7684\u57fa\u672c\u62bd\u8c61\u3002\u60f3\u8c61\u4e0b\uff0c\u6bcf\u4e2a\u5904\u7406\u5668\u5b9e\u4f8b\u5c31\u662f\u4e00\u4e2a\u56de\u8c03\uff0c\u7528\u4e8e\u6267\u884c\u5bf9\u5404\u79cd\u4e8b\u4ef6\u7684\u54cd\u5e94\u3002"),(0,l.kt)("h1",{id:"\u81ea\u5b9a\u4e49\u534f\u8bae\u89e3\u51b3\u6cbe\u5305\u95ee\u9898"},"\u81ea\u5b9a\u4e49\u534f\u8bae\u89e3\u51b3\u6cbe\u5305\u95ee\u9898"),(0,l.kt)("p",null,"\u6cbe\u5305: \u4e00\u822c\u6240\u8c13\u7684TCP\u7c98\u5305\u662f\u5728\u4e00\u6b21\u63a5\u6536\u6570\u636e\u4e0d\u80fd\u5b8c\u5168\u5730\u4f53\u73b0\u4e00\u4e2a\u5b8c\u6574\u7684\u6d88\u606f\u6570\u636e"),(0,l.kt)("p",null,"\u4e3a\u4f55\u5b58\u5728\u7c98\u5305\u5462\uff1fTCP \u662f\u4e00\u4e2a\u9762\u5411\u5b57\u8282\u6d41\u7684\u534f\u8bae\uff0c\u5b83\u662f\u6027\u8d28\u662f\u6d41\u5f0f\u7684\uff0c\u6240\u4ee5\u5b83\u5e76\u6ca1\u6709\u5206\u6bb5\u3002\u5c31\u50cf\u6c34\u6d41\u4e00\u6837\uff0c\u4f60\u6ca1\u6cd5\u77e5\u9053\u4ec0\u4e48\u65f6\u5019\u5f00\u59cb\uff0c\u4ec0\u4e48\u65f6\u5019\u7ed3\u675f, \u6240\u4ee5\u4ed6\u53ea\u4f1a\u6839\u636e\u5f53\u524d\u7684\u5957\u63a5\u5b57\u7f13\u51b2\u533a\u7684\u60c5\u51b5\u8fdb\u884c\u62c6\u5305\u6216\u662f\u7c98\u5305, \u8fd9\u5c31\u6709\u53ef\u80fd\u9020\u6210\u8fd9\u79cd\u73b0\u8c61:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u591a\u4e2a\u4e1a\u52a1\u62a5\u6587\u7c98\u63a5\u4e3a\u4e00\u4e2a tcp \u62a5\u6587j\u63a5\u6536"),(0,l.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u4e1a\u52a1\u62a5\u6587\u5206\u62c6\u4e3a\u4e86\u591a\u4e2a tcp \u62a5\u6587")),(0,l.kt)("p",null,"\u89e3\u51b3\u65b9\u6cd5:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6d88\u606f\u5b9a\u957f\uff0c\u62a5\u6587\u5927\u5c0f\u56fa\u5b9a\u957f\u5ea6\uff0c\u4e0d\u591f\u7a7a\u683c\u8865\u5168\uff0c\u53d1\u9001\u548c\u63a5\u6536\u65b9\u9075\u5faa\u76f8\u540c\u7684\u7ea6\u5b9a\uff0c\u8fd9\u6837\u5373\u4f7f\u7c98\u5305\u4e86\u901a\u8fc7\u63a5\u6536\u65b9\u7f16\u7a0b\u5b9e\u73b0\u83b7\u53d6\u5b9a\u957f\u62a5\u6587\u4e5f\u80fd\u533a\u5206, netty \u5185\u7f6e FixedLengthFrameDecoder\u53ef\u6307\u5b9a\u957f\u5ea6\u89e3\u51b3"),(0,l.kt)("li",{parentName:"ul"},"\u5305\u5c3e\u6dfb\u52a0\u7279\u6b8a\u5206\u9694\u7b26\uff0c\u4f8b\u5982\u6bcf\u6761\u62a5\u6587\u7ed3\u675f\u90fd\u6dfb\u52a0\u56de\u8f66\u6362\u884c\u7b26\uff08\u4f8b\u5982FTP\u534f\u8bae\uff09\u6216\u8005\u6307\u5b9a\u7279\u6b8a\u5b57\u7b26\u4f5c\u4e3a\u62a5\u6587\u5206\u9694\u7b26\uff0c\u63a5\u6536\u65b9\u901a\u8fc7\u7279\u6b8a\u5206\u9694\u7b26\u5207\u5206\u62a5\u6587\u533a\u5206, netty \u5185\u7f6e LineBasedFrameDecoder \u53ef\u4ee5\u57fa\u4e8e\u6362\u884c\u7b26\u89e3\u51b3, \u5185\u7f6e DelimiterBasedFrameDecoder\u53ef\u57fa\u4e8e\u5206\u9694\u7b26\u89e3\u51b3\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5c06\u6d88\u606f\u5206\u4e3a\u6d88\u606f\u5934\u548c\u6d88\u606f\u4f53\uff0c\u6d88\u606f\u5934\u4e2d\u5305\u542b\u8868\u793a\u4fe1\u606f\u7684\u603b\u957f\u5ea6\uff08\u6216\u8005\u6d88\u606f\u4f53\u957f\u5ea6\uff09\u7684\u5b57\u6bb5")),(0,l.kt)("p",null,"\u81ea\u5b9a\u4e49\u534f\u8bae, \u8bf4\u767d\u4e86\u5c31\u662f\u5b9a\u4e49\u81ea\u5df1\u7684 \u6d88\u606f pojo, \u5e8f\u5217\u5316, \u53cd\u5e8f\u5217\u5316\u5668,\u53ef\u4ee5\u4f7f\u7528 Google Protocol, jackson"),(0,l.kt)("h1",{id:"\u5b9e\u73b0\u5fc3\u8df3\u673a\u5236"},"\u5b9e\u73b0\u5fc3\u8df3\u673a\u5236"),(0,l.kt)("p",null,"\u4f7f\u7528TCP\u534f\u8bae\u5c42\u7684Keeplive\u673a\u5236\uff0c\u4f46\u662f\u8be5\u673a\u5236\u9ed8\u8ba4\u7684\u5fc3\u8df3\u65f6\u95f4\u662f2\u5c0f\u65f6\uff0c\u4f9d\u8d56\u64cd\u4f5c\u7cfb\u7edf\u5b9e\u73b0\u4e0d\u591f\u7075\u6d3b\uff1b\u53ef\u4ee5\u5728\u5e94\u7528\u5c42\u5b9e\u73b0\u81ea\u5b9a\u4e49\u5fc3\u8df3\u673a\u5236\uff0c\u6bd4\u5982Netty\u5b9e\u73b0\u5fc3\u8df3\u673a\u5236\uff1b"),(0,l.kt)("h1",{id:"netty-\u6574\u5408-springboot-\u5f00\u53d1-web-\u670d\u52a1"},"netty \u6574\u5408 springboot \u5f00\u53d1 web \u670d\u52a1"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/farsunset/netty-http-server"},"https://github.com/farsunset/netty-http-server")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/Leibnizhu/spring-boot-starter-netty"},"https://github.com/Leibnizhu/spring-boot-starter-netty")," //todo"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/TogetherOS/cicada"},"https://github.com/TogetherOS/cicada")," web \u6846\u67b6"),(0,l.kt)("h1",{id:"\u5373\u65f6\u901a\u8baf\u7cfb\u7edf"},"\u5373\u65f6\u901a\u8baf\u7cfb\u7edf"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/crossoverJie/cim"},"https://github.com/crossoverJie/cim"),"\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/sunnick/easy-im/blob/master/README.md"},"https://github.com/sunnick/easy-im/blob/master/README.md"),", ",(0,l.kt)("a",{parentName:"p",href:"https://juejin.im/post/6844903793440587784"},"https://juejin.im/post/6844903793440587784")))}m.isMDXComponent=!0}}]);