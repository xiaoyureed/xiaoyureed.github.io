"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[8595],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),k=u(n),m=r,h=k["".concat(o,".").concat(m)]||k[m]||c[m]||l;return n?a.createElement(h,p(p({ref:t},s),{},{components:n})):a.createElement(h,p({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,p=new Array(l);p[0]=k;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var u=2;u<l;u++)p[u]=n[u];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},49440:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return c}});var a=n(83117),r=n(80102),l=(n(67294),n(3905)),p=["components"],i={title:"Protect Your App \u5b89\u5168\u4fdd\u62a4\u8ba4\u8bc1\u9274\u6743\ud83d\udd11",tags:["authentication","oauth2.0","jwt"],date:new Date("2017-10-22T00:00:00.000Z"),toc_min_heading_level:2,toc_max_heading_level:5},o=void 0,u={unversionedId:"protect-your-app-authentication-oauth2-jwt-https",id:"protect-your-app-authentication-oauth2-jwt-https",title:"Protect Your App \u5b89\u5168\u4fdd\u62a4\u8ba4\u8bc1\u9274\u6743\ud83d\udd11",description:"https://jwt.io/",source:"@site/docs/protect-your-app-authentication-oauth2-jwt-https.md",sourceDirName:".",slug:"/protect-your-app-authentication-oauth2-jwt-https",permalink:"/docs/protect-your-app-authentication-oauth2-jwt-https",draft:!1,tags:[{label:"authentication",permalink:"/docs/tags/authentication"},{label:"oauth2.0",permalink:"/docs/tags/oauth-2-0"},{label:"jwt",permalink:"/docs/tags/jwt"}],version:"current",frontMatter:{title:"Protect Your App \u5b89\u5168\u4fdd\u62a4\u8ba4\u8bc1\u9274\u6743\ud83d\udd11",tags:["authentication","oauth2.0","jwt"],date:"2017-10-22T00:00:00.000Z",toc_min_heading_level:2,toc_max_heading_level:5},sidebar:"tutorialSidebar",previous:{title:"\u5de5\u4f5c\u6d41\u5f15\u64ce",permalink:"/docs/process-workflow-bpm-engine"},next:{title:"Python\ud83c\udf08",permalink:"/docs/python-note"}},s={},c=[{value:"1.1. jwt \u4ecb\u7ecd",id:"11-jwt-\u4ecb\u7ecd",level:2},{value:"1.2. \u4f18\u7f3a\u70b9",id:"12-\u4f18\u7f3a\u70b9",level:2},{value:"1.2.1. \u4f7f\u7528\u573a\u666f",id:"121-\u4f7f\u7528\u573a\u666f",level:3},{value:"1.3. \u600e\u4e48\u4f7f\u7528",id:"13-\u600e\u4e48\u4f7f\u7528",level:2},{value:"2.1. \u57fa\u672c\u67b6\u6784",id:"21-\u57fa\u672c\u67b6\u6784",level:2},{value:"3.1. oauth2\u4ecb\u7ecd",id:"31-oauth2\u4ecb\u7ecd",level:2},{value:"3.2. \u56db\u79cd\u6a21\u5f0f",id:"32-\u56db\u79cd\u6a21\u5f0f",level:2},{value:"3.3. \u4f18\u7f3a\u70b9",id:"33-\u4f18\u7f3a\u70b9",level:2},{value:"3.4. spring security \u5165\u95e8",id:"34-spring-security-\u5165\u95e8",level:2},{value:"3.5. \u6848\u4f8b: \u96c6\u6210\u5fae\u4fe1\u767b\u5f55",id:"35-\u6848\u4f8b-\u96c6\u6210\u5fae\u4fe1\u767b\u5f55",level:2},{value:"5.1. \u5bf9\u79f0\u52a0\u5bc6",id:"51-\u5bf9\u79f0\u52a0\u5bc6",level:2},{value:"5.2. \u975e\u5bf9\u79f0\u52a0\u5bc6",id:"52-\u975e\u5bf9\u79f0\u52a0\u5bc6",level:2},{value:"6.1. md5",id:"61-md5",level:2}],k={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,p);return(0,l.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://jwt.io/"},"https://jwt.io/")),(0,l.kt)("p",null,"ref: ",(0,l.kt)("a",{parentName:"p",href:"http://www.ruanyifeng.com/blog/2018/07/json_web_token-tutorial.html"},"http://www.ruanyifeng.com/blog/2018/07/json_web_token-tutorial.html")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://medium.com/emblatech/secure-your-spring-restful-apis-with-jwt-a-real-world-example-bfdd2679db5f"},"https://medium.com/emblatech/secure-your-spring-restful-apis-with-jwt-a-real-world-example-bfdd2679db5f")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"http://www.ruanyifeng.com/blog/2019/04/github-oauth.html"},"http://www.ruanyifeng.com/blog/2019/04/github-oauth.html")," \u5ba2\u6237\u7aef"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.cnblogs.com/oopsguy/p/7550399.html"},"https://www.cnblogs.com/oopsguy/p/7550399.html")," \u670d\u52a1\u7aef \u4fdd\u62a4api \u81ea\u52a8\u521b\u5efa\u8868"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://gigsterous.github.io/engineering/2017/03/01/spring-boot-4.html"},"https://gigsterous.github.io/engineering/2017/03/01/spring-boot-4.html")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.devglan.com/spring-security/spring-boot-oauth2-jwt-example"},"https://www.devglan.com/spring-security/spring-boot-oauth2-jwt-example")," \u548cjwt\u96c6\u6210"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/27864295/how-to-use-oauth2resttemplate"},"\u4f7f\u7528 oauth2testtemplate")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"http://websystique.com/spring-security/secure-spring-rest-api-using-oauth2/"},"\u4e3a rest api \u52a0\u4e0a oauth2")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#1-jwt"},"1. jwt"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#11-jwt-%E4%BB%8B%E7%BB%8D"},"1.1. jwt \u4ecb\u7ecd")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#12-%E4%BC%98%E7%BC%BA%E7%82%B9"},"1.2. \u4f18\u7f3a\u70b9"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#121-%E4%BD%BF%E7%94%A8%E5%9C%BA%E6%99%AF"},"1.2.1. \u4f7f\u7528\u573a\u666f")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#13-%E6%80%8E%E4%B9%88%E4%BD%BF%E7%94%A8"},"1.3. \u600e\u4e48\u4f7f\u7528")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#2-spring-security"},"2. spring security"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#21-%E5%9F%BA%E6%9C%AC%E6%9E%B6%E6%9E%84"},"2.1. \u57fa\u672c\u67b6\u6784")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#3-oauth20"},"3. Oauth2.0"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#31-oauth2%E4%BB%8B%E7%BB%8D"},"3.1. oauth2\u4ecb\u7ecd")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#32-%E5%9B%9B%E7%A7%8D%E6%A8%A1%E5%BC%8F"},"3.2. \u56db\u79cd\u6a21\u5f0f")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#33-%E4%BC%98%E7%BC%BA%E7%82%B9"},"3.3. \u4f18\u7f3a\u70b9")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#34-spring-security-%E5%85%A5%E9%97%A8"},"3.4. spring security \u5165\u95e8")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#35-%E6%A1%88%E4%BE%8B-%E9%9B%86%E6%88%90%E5%BE%AE%E4%BF%A1%E7%99%BB%E5%BD%95"},"3.5. \u6848\u4f8b: \u96c6\u6210\u5fae\u4fe1\u767b\u5f55")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E5%8D%95%E7%82%B9%E7%99%BB%E5%BD%95-sso"},"\u5355\u70b9\u767b\u5f55 sso")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#4-https"},"4. https")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#5-%E5%8A%A0%E5%AF%86"},"5. \u52a0\u5bc6"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#51-%E5%AF%B9%E7%A7%B0%E5%8A%A0%E5%AF%86"},"5.1. \u5bf9\u79f0\u52a0\u5bc6")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#52-%E9%9D%9E%E5%AF%B9%E7%A7%B0%E5%8A%A0%E5%AF%86"},"5.2. \u975e\u5bf9\u79f0\u52a0\u5bc6")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#6-%E6%91%98%E8%A6%81%E7%AE%97%E6%B3%95"},"6. \u6458\u8981\u7b97\u6cd5"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#61-md5"},"6.1. md5"))))),(0,l.kt)("h1",{id:"1-jwt"},"1. jwt"),(0,l.kt)("h2",{id:"11-jwt-\u4ecb\u7ecd"},"1.1. jwt \u4ecb\u7ecd"),(0,l.kt)("p",null,"\u672c\u8d28\u5c31\u662f\u4e00\u6bb5 json \u4e32 + \u7b7e\u540d; \u6ca1\u6709\u52a0\u5bc6\u7684\u4f5c\u7528"),(0,l.kt)("p",null,"\u4e09\u90e8\u5206\uff1aHeader.Payload.Signature"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Header\uff08\u5934\u90e8\uff09- \u4e00\u4e2a JSON \u5bf9\u8c61\uff0c\u63cf\u8ff0 JWT \u7684\u5143\u6570\u636e(\u4f7f\u7528\u4ec0\u4e48\u52a0\u5bc6\u7b97\u6cd5 \u6d88\u606f\u7c7b\u578b)"),(0,l.kt)("p",{parentName:"li"},"  \u9ed8\u8ba4\u4e3aHMAC SHA256\uff08\u5199\u4e3aHS256\uff09\uff0c \u7136\u540e\u4f7f\u7528Base64URL \u7b97\u6cd5\u8f6c\u4e3astring"),(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"Base64URL: JWT \u4f5c\u4e3a\u4e00\u4e2a\u4ee4\u724c\uff08token\uff09\uff0c\u6709\u4e9b\u573a\u5408\u53ef\u80fd\u4f1a\u653e\u5230 URL\uff08\u6bd4\u5982 api.example.com/?token=xxx\uff09\u3002Base64 \u6709\u4e09\u4e2a\u5b57\u7b26+\u3001/\u548c=\uff0c\u8fd9\u4e9b\u7b26\u53f7\u5728 URL \u91cc\u9762\u6709\u7279\u6b8a\u542b\u4e49\uff0c\u6240\u4ee5\u8981\u88ab\u66ff\u6362\u6389\uff1a=\u88ab\u7701\u7565\u3001+\u66ff\u6362\u6210-\uff0c/\u66ff\u6362\u6210_ \u3002\u8fd9\u5c31\u662f Base64URL \u7b97\u6cd5\u3002"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Payload\uff08\u8d1f\u8f7d\uff09\u6216\u8005\u53ebclaims(\u58f0\u660e)"),(0,l.kt)("p",{parentName:"li"},"  \u4e00\u4e2a JSON \u5bf9\u8c61\uff0c\u7528\u6765\u5b58\u653e\u5b9e\u9645\u9700\u8981\u4f20\u9012\u7684\u6570\u636e\uff0c "),(0,l.kt)("p",{parentName:"li"},"  \u6700\u540e\u4f7f\u7528 Base64URL \u7b97\u6cd5 \u8f6c\u4e3a string")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Signature\uff08\u7b7e\u540d\uff09- \u5bf9\u524d\u4e24\u90e8\u5206\u7684\u7b7e\u540dhash\uff0c\u9632\u6b62\u6570\u636e\u7be1\u6539"),(0,l.kt)("p",{parentName:"li"},"  \u9700\u8981\u6307\u5b9a\u4e00\u4e2a\u5bc6\u94a5\uff08secret\uff09\u3002\u8fd9\u4e2a\u5bc6\u94a5\u53ea\u6709\u670d\u52a1\u5668\u624d\u77e5\u9053\uff0c\u4e0d\u80fd\u6cc4\u9732\u7ed9\u7528\u6237\u3002\u7136\u540e\uff0c\u4f7f\u7528 Header \u91cc\u9762\u6307\u5b9a\u7684\u7b7e\u540d\u7b97\u6cd5\uff08\u9ed8\u8ba4\u662f HMAC SHA256\uff09\u7b7e\u540d"),(0,l.kt)("p",{parentName:"li"},"  \u5373\u7b7e\u540d\u7684\u503c\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},'HMACSHA256(base64UrlEncode(header) + "." + base64UrlEncode(payload), secret)')))),(0,l.kt)("p",null,'\u5728\u8ba1\u7b97\u51fa\u7b7e\u540d\u54c8\u5e0c\u540e\uff0cJWT\u5934\uff0c\u6709\u6548\u8f7d\u8377\u548c\u7b7e\u540d\u54c8\u5e0c\u7684\u4e09\u4e2a\u90e8\u5206\u7ec4\u5408\u6210\u4e00\u4e2a\u5b57\u7b26\u4e32\uff0c\u6bcf\u4e2a\u90e8\u5206\u7528"."\u5206\u9694\uff0c\u5c31\u6784\u6210\u6574\u4e2aJWT\u3002'),(0,l.kt)("p",null,"\u4e00\u822c\u5728 spring security oauth2 \u4e2d \u5145\u5f53 token \u7684\u683c\u5f0f"),(0,l.kt)("h2",{id:"12-\u4f18\u7f3a\u70b9"},"1.2. \u4f18\u7f3a\u70b9"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"}," 2\u79cdToken\uff1a\n    1. \u53bb\u4e2d\u5fc3\u5316\u7684JWT token\n        \u4f18\u70b9\uff1a\n            1. \u53bb\u4e2d\u5fc3\u5316\uff0c\u4fbf\u4e8e\u5206\u5e03\u5f0f\u7cfb\u7edf\u4f7f\u7528\n            2. \u57fa\u672c\u4fe1\u606f\u53ef\u4ee5\u76f4\u63a5\u653e\u5728token\u4e2d\u3002 username\uff0cnickname\uff0crole\n            3. \u529f\u80fd\u6743\u9650\u8f83\u5c11\u7684\u8bdd\uff0c\u53ef\u4ee5\u76f4\u63a5\u653e\u5728token\u4e2d\u3002\u7528bit\u4f4d\u8868\u793a\u7528\u6237\u6240\u5177\u6709\u7684\u529f\u80fd\u6743\u9650\n        \u7f3a\u70b9\uff1a\u670d\u52a1\u7aef\u4e0d\u80fd\u4e3b\u52a8\u8ba9token\u5931\u6548 \n             token\u65e0\u6cd5\u81ea\u52a8\u7eed\u671f\n        \u4e3a\u4e86\u89c4\u907f\u7f3a\u70b9, \u5efa\u8bae\u8054\u5408 redis \u4e00\u8d77\u4f7f\u7528 (\u4f46\u662f\u8fd9\u6837\u53c8\u56de\u5230\u4e86 session/cookie \u8fd9\u79cd\u8001\u8def, \u9700\u8981\u518d\u4e00\u4e2a\u96c6\u4e2d\u7684redis \u4e2d\u7ef4\u62a4\u72b6\u6001\u4fe1\u606f, \u4e0d\u5982\u4e0d\u7528 jwt)\n\n    2. \u4e2d\u5fc3\u5316\u7684 redis token / memory session\u7b49\n        \u4f18\u70b9\uff1a\u670d\u52a1\u7aef\u53ef\u4ee5\u4e3b\u52a8\u8ba9token\u5931\u6548\n        \u7f3a\u70b9\uff1a\n           1. \u4f9d\u8d56\u5185\u5b58\u6216redis\u5b58\u50a8\u3002\n           2. \u5206\u5e03\u5f0f\u7cfb\u7edf\u7684\u8bdd\uff0c\u9700\u8981redis\u67e5\u8be2/\u63a5\u53e3\u8c03\u7528\u589e\u52a0\u7cfb\u7edf\u590d\u6742\u6027\u3002\n")),(0,l.kt)("h3",{id:"121-\u4f7f\u7528\u573a\u666f"},"1.2.1. \u4f7f\u7528\u573a\u666f"),(0,l.kt)("p",null,"\u4e00\u822c\u4e0d\u5355\u7eaf\u4f7f\u7528 jwt token \u6765\u505a\u7528\u6237\u767b\u5f55\u9274\u6743, \u4f1a\u642d\u914d redis \u4e00\u8d77\u4f7f\u7528, (\u4ee5\u63d0\u4f9btoken\u4e3b\u52a8\u5931\u6548\u529f\u80fd)"),(0,l.kt)("p",null,"\u4f7f\u7528\u573a\u666f: \u540e\u7aef\u670d\u52a1\u4e4b\u95f4\u7684\u9274\u6743 (\u4e0d\u4f1a\u7528\u5728\u7528\u6237\u767b\u5f55\u9274\u6743); \u6216\u8005\u751f\u6210\u5f00\u53d1 api \u5e73\u53f0\u7684 token, \u751f\u6210/\u9500\u6bc1\u90fd\u5728 client \u7aef\u4e3b\u52a8\u5b8c\u6210."),(0,l.kt)("h2",{id:"13-\u600e\u4e48\u4f7f\u7528"},"1.3. \u600e\u4e48\u4f7f\u7528"),(0,l.kt)("p",null,"\u5ba2\u6237\u7aef\u4f7f\u7528 username, password \u767b\u5f55\u6210\u529f, \u670d\u52a1\u5668\u521b\u5efa JWT\uff0c\u8fd4\u56de\u7ed9client, client\u53ef\u4ee5 \u5427 token\u50a8\u5b58\u5728 \u8bf7\u6c42\u5934\u4e2d, \u6bcf\u6b21\u8bf7\u6c42\u90fd\u5e26\u4e0a, \u670d\u52a1\u5668\u6bcf\u6b21\u56de\u6821\u9a8c token \u662f\u5426\u5408\u6cd5/\u88ab\u7be1\u6539, \u5408\u6cd5\u5219\u653e\u884c"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u4e5f\u53ef\u4ee5\u5b58\u50a8\u5728 Cookie \u91cc\u9762\uff0c\u4e5f\u53ef\u4ee5\u50a8\u5b58\u5728 localStorage\u3002\u4f46\u662f\u8fd9\u6837\u4e0d\u80fd\u8de8\u57df\uff0c\u6240\u4ee5\u66f4\u597d\u7684\u505a\u6cd5\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"\u653e\u5728 HTTP \u8bf7\u6c42\u7684\u5934\u4fe1\u606fAuthorization\u5b57\u6bb5\u91cc\u9762"),"\u3002or \u653e\u5728 request body \u4ea6\u53ef"),(0,l.kt)("p",{parentName:"blockquote"},"\u670d\u52a1\u5668\u662f\u5982\u4f55\u6821\u9a8c\u7684?\n\u901a\u8fc7 base64 \u89e3\u7801\u4ece header \u90e8\u5206\u62ff\u5230\u52a0\u5bc6\u7b97\u6cd5, \u901a\u8fc7\u5b58\u50a8\u7684 secret \u5bf9 header \u548c payload \u62fc\u8d77\u6765\u8fdb\u884c\u52a0\u5bc6, \u548c signature \u5bf9\u6bd4"),(0,l.kt)("p",{parentName:"blockquote"},"\u672c\u8d28\u4e0a\u662f\u4ee5\u65f6\u95f4\u6362\u7a7a\u95f4")),(0,l.kt)("p",null,"Java \u5e73\u53f0\u7684\u5b9e\u73b0\u63a8\u8350 -> ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/auth0/java-jwt"},"java-jwt")),(0,l.kt)("h1",{id:"2-spring-security"},"2. spring security"),(0,l.kt)("h2",{id:"21-\u57fa\u672c\u67b6\u6784"},"2.1. \u57fa\u672c\u67b6\u6784"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"UserDetails \n\u8868\u793a\u4ece\u6570\u636e\u5e93\u4e2d\u52a0\u8f7d\u7684\u6b63\u786e\u7684\u7528\u6237\u540d\u5bc6\u7801\u4fe1\u606f\n\nUserDetailsService\n\u8d1f\u8d23\u4ece\u7279\u5b9a\u7684\u5730\u65b9\uff08\u901a\u5e38\u662f\u6570\u636e\u5e93\uff09\u52a0\u8f7d\u6b63\u786e\u7684\u7528\u6237\u4fe1\u606f\n\u6709 jdbc \u5b9e\u73b0, \u6709 InMemory \u5b9e\u73b0, \u4e0d\u8fc7\u4e00\u822c\u4f1a\u81ea\u5df1\u5b9e\u73b0\n\nUser\n\nSecurityContextHolder\n\u5168\u5c40\u4e0a\u4e0b\u6587\u4fe1\u606f, \u5b58\u50a8\u5f53\u524d\u64cd\u4f5c\u7684\u7528\u6237\u662f\u8c01\uff0c\u8be5\u7528\u6237\u662f\u5426\u5df2\u7ecf\u88ab\u8ba4\u8bc1\uff0c\u4ed6\u62e5\u6709\u54ea\u4e9b\u89d2\u8272\u6743\u9650, \u5e95\u5c42\u4f7f\u7528 ThreadLocal \u5b58\u50a8, \n\n    Spring-Security\u5728\u7528\u6237\u767b\u5f55\u65f6\u81ea\u52a8\u7ed1\u5b9a\u8ba4\u8bc1\u4fe1\u606f\u5230\u5f53\u524d\u7ebf\u7a0b\uff0c\u5728\u7528\u6237\u9000\u51fa\u65f6\uff0c\u81ea\u52a8\u6e05\u9664\u5f53\u524d\u7ebf\u7a0b\u7684\u8ba4\u8bc1\u4fe1\u606f\n\n    Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal()\n    if (principal instanceof UserDetails) {...}\n\nAuthentication\n\u7528\u6237\u63d0\u4ea4\u7684\u8ba4\u8bc1\u4fe1\u606f, \u7b49\u5f85\u88ab\u8ba4\u8bc1, \u8ba4\u8bc1\u6210\u529f\u540e, \u4f1a\u88ab\u586b\u5145 UserDetails \u4fe1\u606f\n\n    UsernamePasswordAuthenticationToken \n    \u5b9e\u73b0\u7c7b\n\nAuthenticationManager\n\u8d1f\u8d23\u8ba4\u8bc1, \u4f46\u662f\u4e0d\u81ea\u5df1\u5904\u7406\u8ba4\u8bc1\u903b\u8f91, \n\n    ProviderManager \n    \u662f AuthticationManager \u7684\u4e00\u4e2a\u5b9e\u73b0, \u5185\u90e8\u4f1a\u7ef4\u62a4\u4e00\u4e2aList\u5217\u8868\uff0c\u5b58\u653e\u591a\u79cd\u8ba4\u8bc1\u65b9\u5f0f,List\u4e2d\u7684\u8ba4\u8bc1\u65b9\u5f0f, \u4f1a\u4f9d\u7167\u6b21\u5e8f\u53bb\u8ba4\u8bc1\uff0c\u8ba4\u8bc1\u6210\u529f\u5219\u7acb\u5373\u8fd4\u56de, \u5982\u679c\u6240\u6709\u8ba4\u8bc1\u5668\u90fd\u65e0\u6cd5\u8ba4\u8bc1\u6210\u529f\uff0c\u5219ProviderManager \u4f1a\u629b\u51fa\u4e00\u4e2aProviderNotFoundException\u5f02\u5e38\u3002\n\n    AuthenticationProvider \n    \u8ba4\u8bc1\u65b9\u5f0f\u63a5\u53e3, \u6709\u51e0\u4e2a\u57fa\u672c\u5b9e\u73b0\n\n        \u7528\u6237\u540d\u5bc6\u7801\u8ba4\u8bc1\u65b9\u5f0f\n        \u90ae\u7bb1\u5bc6\u7801\u8ba4\u8bc1\n        \u624b\u673a\u53f7\u5bc6\u7801\u8ba4\u8bc1\n        DaoAuthenticationProvider \u6bd4\u5bf9 \n\nUsernamePasswordAuthenticationFilter \n\u8868\u5355\u63d0\u4ea4\u4e86username\u548cpassword\uff0c\u88ab\u5c01\u88c5\u6210token\u8fdb\u884c\u4e00\u7cfb\u5217\u7684\u8ba4\u8bc1\n\nExceptionTranslationFilter\n\u5c06Java\u4e2d\u7684\u5f02\u5e38\u548cHTTP\u7684\u54cd\u5e94\u8fde\u63a5\u5728\u4e86\u4e00\u8d77\n\nAuthenticationEntryPoint\n\nAccessDeniedHandler\n\n")),(0,l.kt)("h1",{id:"3-oauth20"},"3. Oauth2.0"),(0,l.kt)("h2",{id:"31-oauth2\u4ecb\u7ecd"},"3.1. oauth2\u4ecb\u7ecd"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.cnblogs.com/flashsun/p/7424071.html"},"https://www.cnblogs.com/flashsun/p/7424071.html")),(0,l.kt)("p",null,"\u662f\u4e00\u5957\u89c4\u8303, \u4f7f\u5f97\u4e00\u4e2aapp\u53ef\u4ee5\u6388\u6743\u7b2c\u4e09\u65b9\u5e94\u7528\u8bbf\u95ee\u7279\u5b9a\u8d44\u6e90; \u6bd4\u5982\u5fae\u4fe1\u53ef\u4ee5\u5f00\u653e\u7528\u6237\u8d26\u53f7\u4fe1\u606f, \u7528\u6237\u53ef\u4ee5\u4f7f\u7528\u81ea\u5df1\u7684\u5fae\u4fe1\u8d26\u53f7\u767b\u5f55\u5176\u4ed6\u5e94\u7528\u800c\u65e0\u9700\u63d0\u4f9b\u5fae\u4fe1\u7684\u7528\u6237\u540d\u5bc6\u7801"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u548c jwt \u5173\u7cfb: OAuth2.0\u662f\u4e00\u79cd\u6388\u6743\u89c4\u8303, \u5176\u5b9e\u73b0\u6709 spring security (\u4e0d\u540c\u4e8ejwt, jwt \u662f\u4e00\u79cd\u8ba4\u8bc1\u534f\u8bae), \u5728\u4f7f\u7528 Oauth2.0\u65f6, jwt \u53ef\u4f5c\u4e3a\u5176\u8ba4\u8bc1\u673a\u5236\u4e2d\u7684\u4e00\u79cd")),(0,l.kt)("p",null,"\u6d89\u53ca\u5230\u7684\u51e0\u4e2a\u89d2\u8272: \u7528\u6237, client(\u7b2c\u4e09\u65b9app), resource server/auth server (\u8d44\u6e90\u771f\u6b63\u7684\u6388\u6743\u65b9/\u6301\u6709\u8005)"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u7528\u6237\u8bf7\u6c42\u7b2c\u4e09\u65b9app\u767b\u5f55 "),(0,l.kt)("li",{parentName:"ol"},"app \u5411 resource server \u8bf7\u6c42\u6388\u6743"),(0,l.kt)("li",{parentName:"ol"},"resource server \u8be2\u95ee \u7528\u6237 \u662f\u5426\u540c\u610f"),(0,l.kt)("li",{parentName:"ol"},"resource server \u53d1\u9001\u8d44\u6e90\u4fe1\u606f\u7ed9 \u7b2c\u4e09\u65b9app, \u5b8c\u6210\u767b\u5f55")),(0,l.kt)("p",null,"\u7528\u6237\u70b9\u51fb client (\u4e09\u65b9 app) \u7684oauth\u767b\u5f55"),(0,l.kt)("p",null,"\u9875\u9762\u8df3\u8f6c\u5230 -> client(\u7b2c\u4e09\u65b9 app) provides a endpoint To users: /oauth/authorize?client_id=baidu&response_type=code&scope=all&redirect_uri=http.baidu.com"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"client_id :  need to be registered in auth server"),(0,l.kt)("li",{parentName:"ul"},"response_type - has two available value ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},'"code": \u8fd4\u56de\u6388\u6743\u7801 (\u7528\u4e8e\u6388\u6743\u7801\u6a21\u5f0f)'),(0,l.kt)("li",{parentName:"ul"},'"token" \u8fd4\u56de \u8bbf\u95ee\u4ee4\u724c (\u7528\u4e8e\u7b80\u5355\u6a21\u5f0f)'))),(0,l.kt)("li",{parentName:"ul"},"scope: \u6743\u9650\u8303\u56f4, \u5728 auth server \u4e2d\u914d\u7f6e")),(0,l.kt)("p",null,"\u7528\u6237\u9009\u62e9\u662f\u5426\u5141\u8bb8\u4f7f\u7528 auth server \u7684\u4fe1\u606f\u767b\u5f55, \u70b9\u51fb\u5141\u8bb8, \u6839\u636e redirect uri \u8df3\u8f6c\u56de\u4e09\u65b9 app, \u5730\u5740\u680f\u5e26\u6709 xxx?code=fsfsdf"),(0,l.kt)("p",null,"\u4e09\u65b9 app \u8fd8\u63d0\u4f9b\u83b7\u53d6 token \u7684\u63a5\u53e3 /oauth/token?client_id=client1&client_secret=123&grant_type=authorization&code=sdfsefsef&redirect_uri=",(0,l.kt)("a",{parentName:"p",href:"http://baidu.com"},"http://baidu.com")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"client_id, client_secret"),(0,l.kt)("li",{parentName:"ul"},"grant_type",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"authorization code"),(0,l.kt)("li",{parentName:"ul"},"implicit"),(0,l.kt)("li",{parentName:"ul"},"password credentials"),(0,l.kt)("li",{parentName:"ul"},"client credentials"))),(0,l.kt)("li",{parentName:"ul"},"code \u4ec5\u4ec5authorization code  \u6a21\u5f0f\u4e0b\u9700\u8981"),(0,l.kt)("li",{parentName:"ul"},"redirect_uri \u8df3\u8f6c")),(0,l.kt)("p",null,"\u6709\u4e86 token \u540e, \u5c31\u53ef\u4ee5\u8bbf\u95ee auth server \u7684\u8d44\u6e90\u4fe1\u606f"),(0,l.kt)("h2",{id:"32-\u56db\u79cd\u6a21\u5f0f"},"3.2. \u56db\u79cd\u6a21\u5f0f"),(0,l.kt)("p",null,"OAuth 2.0 \u89c4\u5b9a\u4e86\u56db\u79cd\u83b7\u5f97\u4ee4\u724c\u7684\u6d41\u7a0b\u6a21\u5f0f:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6388\u6743\u7801\uff08authorization-code\uff09- \u7b2c\u4e09\u65b9\u5e94\u7528\u5148\u7533\u8bf7\u4e00\u4e2a\u6388\u6743\u7801\uff0c\u7136\u540e\u518d\u7528\u8be5\u7801\u83b7\u53d6\u4ee4\u724c(\u5e38\u7528, \u5b89\u5168\u6027\u597d)"),(0,l.kt)("li",{parentName:"ul"},"\u9690\u85cf\u5f0f/\u7b80\u5316\u6a21\u5f0f\uff08implicit\uff09 - \u7eaf\u524d\u7aef\u5e94\u7528\uff0c\u6ca1\u6709\u540e\u7aef,\u5fc5\u987b\u5c06\u4ee4\u724c\u50a8\u5b58\u5728\u524d\u7aef; \u5141\u8bb8\u76f4\u63a5\u5411\u524d\u7aef\u9881\u53d1\u4ee4\u724c\u3002\u8fd9\u79cd\u65b9\u5f0f\u6ca1\u6709\u6388\u6743\u7801\u8fd9\u4e2a\u4e2d\u95f4\u6b65\u9aa4"),(0,l.kt)("li",{parentName:"ul"},"\u5bc6\u7801\u6a21\u5f0f\uff08password\uff09- \u76f4\u63a5\u4f7f\u7528\u5bc6\u7801\u7533\u8bf7\u4ee4\u724c\uff0c \u7528\u4e8e\u524d\u540e\u7aef\u5206\u79bb\u7684\u767b\u5f55"),(0,l.kt)("li",{parentName:"ul"},"\u5ba2\u6237\u7aef\u51ed\u8bc1\u6a21\u5f0f\uff08client credentials\uff09 - \u9002\u7528\u4e8e\u6ca1\u6709\u524d\u7aef\u7684\u547d\u4ee4\u884c\u5e94\u7528\uff0c\u5373\u5728\u547d\u4ee4\u884c\u4e0b\u8bf7\u6c42\u4ee4\u724c")),(0,l.kt)("p",null,"\u6388\u6743\u7801\u6a21\u5f0f: \u4ee5 \u5fae\u4fe1\u8d26\u53f7\u767b\u5f55\u67d0\u7f51\u7ad9a \u4e3a\u4f8b\u4ecb\u7ecd"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5fae\u4fe1\u53d6\u5f97\u7528\u6237\u7684\u540c\u610f\u540e, \u901a\u8fc7\u56de\u8c03 \u5ba2\u6237\u7aef a \u63d0\u4f9b\u7684 redirect_uri \u53d1\u9001\u4e00\u4e2a code (\u4e34\u65f6\u6388\u6743\u7968\u636e) \u7ed9 a"),(0,l.kt)("p",{parentName:"li"},"\u56e0\u4e3a\u662f\u91cd\u5b9a\u5411, \u6b64\u65f6 redirect_uri?code=xxx \u4f1a\u76f4\u63a5\u663e\u793a\u5728\u6d4f\u89c8\u5668\u4e2d, code \u66b4\u9732")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"a\u62ff\u5230 code, \u518d\u52a0\u4e0a appid \u548c secret , \u518d\u6b21\u8bf7\u6c42\u5fae\u4fe1, \u83b7\u53d6 access_token"),(0,l.kt)("p",{parentName:"li"},"\u91c7\u7528 token \u7684\u65b9\u5f0f, \u662f a \u7684\u540e\u53f0\u76f4\u63a5\u548c \u5fae\u4fe1\u540e\u53f0\u4ea4\u4e92, \u4e0d\u4f9d\u8d56\u6d4f\u89c8\u5668, \u5b89\u5168")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"a \u62ff\u5230 access_token \u540e, \u53bb\u83b7\u53d6\u8d44\u6e90\u6570\u636e (access_token\u662f\u6709\u6548\u671f\u7684)"))),(0,l.kt)("p",null,"oauth2\u4e2d\u4e3a\u4ec0\u4e48\u4e0d\u76f4\u63a5\u8fd4\u56detoken\u800c\u662f\u4f20\u6388\u6743\u7801code?"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5ba2\u6237\u7aef\u4f1a\u66b4\u9732 token"),(0,l.kt)("p",{parentName:"li"},"  \u6388\u6743\u670d\u52a1\u5668\u662f\u4f1a\u6839\u636e\u5ba2\u6237\u7aef\u4f20\u6765\u7684 redirect_url \u8fd4\u56de\u7ed9\u5ba2\u6237\u7aef 3xx \u91cd\u5b9a\u5411\u72b6\u6001\u7801\uff0c\u7136\u540e\u5ba2\u6237\u7aef\u518d\u628a\u6388\u6743\u7801 code \u4f20\u7ed9\u5ba2\u6237\u7aef\u670d\u52a1\u5668\uff0c\u9996\u5148\u524d\u7aef\uff08\u7f51\u9875\u6709\u6e90\u4ee3\u7801\uff0c\u624b\u673aapp\u53cd\u7f16\u8bd1\uff09\u7684\u90fd\u662f\u4e0d\u5b89\u5168\u7684\uff0c\u76f4\u63a5\u5c06 token \u4f20\u7ed9\u5ba2\u6237\u7aef\u4f1a\u628a token \u66b4\u9732")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5982\u679c\u5ba2\u6237\u7aef\u53ea\u53d1\u9001 appkey \u5c31\u80fd\u76f4\u63a5\u83b7\u53d6 token\uff0c\u90a3\u4e48\u6240\u6709\u4eba\u90fd\u53ef\u4ee5\u6a21\u62df\u8be5\u5ba2\u6237\u7aef\u6765\u83b7\u53d6 token \u4e86"))),(0,l.kt)("h2",{id:"33-\u4f18\u7f3a\u70b9"},"3.3. \u4f18\u7f3a\u70b9"),(0,l.kt)("p",null,"\u4f18\u70b9:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528OAuth2 \u8ba4\u8bc1\u7684\u597d\u5904\u5c31\u662f\u4f60\u53ea\u9700\u8981\u4e00\u4e2a\u8d26\u53f7\u5bc6\u7801\uff0c\u5c31\u80fd\u5728\u5404\u4e2a\u7f51\u7ad9\u8fdb\u884c\u8bbf\u95ee\uff0c\u800c\u9762\u53bb\u4e86\u5728\u6bcf\u4e2a\u7f51\u7ad9\u90fd\u8fdb\u884c\u6ce8\u518c\u7684\u7e41\u7410\u8fc7\u7a0b")),(0,l.kt)("h2",{id:"34-spring-security-\u5165\u95e8"},"3.4. spring security \u5165\u95e8"),(0,l.kt)("p",null,"\u540c\u7c7b ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/dromara/sa-token"},"https://github.com/dromara/sa-token")),(0,l.kt)("h2",{id:"35-\u6848\u4f8b-\u96c6\u6210\u5fae\u4fe1\u767b\u5f55"},"3.5. \u6848\u4f8b: \u96c6\u6210\u5fae\u4fe1\u767b\u5f55"),(0,l.kt)("p",null,"\u7533\u8bf7\u5fae\u4fe1\u5f00\u53d1\u8005\u8d26\u53f7, \u6ce8\u518c\u81ea\u5df1\u5199\u7684app\u5f97\u5230appid"),(0,l.kt)("p",null,"app \u4e2d\u9700\u8981\u63d0\u4f9b\u4e24\u4e2a\u63a5\u53e3"),(0,l.kt)("p",null,"\u63a5\u53e31: \u5411\u5fae\u4fe1\u53d1\u8d77\u8bf7\u6c42"),(0,l.kt)("p",null,"\u63a5\u53e32: \u5fae\u4fe1\u7684\u56de\u8c03\u63a5\u53e3"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'@SpringBootApplication\npublic class WeixinLoginDemoApplication {\n\n    @Bean\n    public RestTemplate restTemplate() {\n        return new RestTemplate();\n    }\n\n    public static void main(String[] args) {\n        SpringApplication.run(WeixinLoginDemoApplication.class, args);\n    }\n\n}\n\n@Controller\nclass LoginController {\n\n    private final WechatProps wechatProps;\n\n    private final RestTemplate restTemplate;\n\n    @Autowired\n    public LoginController(WechatProps wechatProps, RestTemplate restTemplate) {\n        this.wechatProps = wechatProps;\n        this.restTemplate = restTemplate;\n    }\n\n    @RequestMapping("/wechat/login")\n    public void wechatLogin(HttpServletResponse resp) throws IOException {\n        // \u5411\u5fae\u4fe1\u53d1\u9001\u8bf7\u6c42, \u8bbe\u7f6e\u56de\u8c03\u63a5\u53e3\n        //todo \u56de\u8c03\u5730\u5740\u90e8\u7f72\u4e0a\u7ebf\u540e\u9700\u8981\u66f4\u6539\u4e3a\u771f\u5b9e\u4e92\u8054\u7f51\u5730\u5740\n        // \u8fd9\u91cc\u5148\u7528 \u82b1\u751f\u58f3 \u83b7\u53d6\u4e34\u65f6\u57df\u540d\n        resp.sendRedirect("https://open.weixin.qq.com/connect/qrconnect"\n                + "&appid=" + wechatProps.getAppid()\n                + "&redirect_uri=" + URLEncoder.encode("http://xxx:8080", StandardCharsets.UTF_8.toString())\n                + "&response_type=code&scope=snsapi_login&state=STATE#wechat_redirect");\n    }\n\n    @RequestMapping("/wechat/callback")\n    public void wechatCallback(@RequestParam String code) {\n        // \u901a\u8fc7 code \u62ff\u5230 access_token\n        StringBuilder tokenUrl = new StringBuilder("https://api.weixin.qq.com/sns/oauth2/access_token");\n        tokenUrl.append("&appid=" + wechatProps.getAppid());\n        tokenUrl.append("&secret=" + wechatProps.getSecret());\n        tokenUrl.append("&code=" + code);\n        tokenUrl.append("&grant_type=authorization_code");\n        WechatTokenResp wechatTokenResp = restTemplate.getForObject(tokenUrl.toString(), WechatTokenResp.class);\n\n        // \u901a\u8fc7 openid, token \u83b7\u53d6\u7528\u6237\u4fe1\u606f\n        HashMap<String, Object> userInfoArgs = new HashMap<>(2);\n        userInfoArgs.put("openid", wechatTokenResp.getOpenid());\n        userInfoArgs.put("access_token", wechatTokenResp.getAccess_token());\n        restTemplate.getForObject("", , userInfoArgs);\n    }\n}\n\n@Component\n@ConfigurationProperties("wechat")\n@Data\n@AllArgsConstructor\n@NoArgsConstructor\nclass WechatProps {\n\n    private String appid;\n\n    private String secret;\n}\n\n@Data\nclass WechatTokenResp {\n\n    private String access_token;\n    private String expire_in;\n    private String refresh_toke;\n    private String openid;\n    private String scope;\n    private String unionid;\n}\n')),(0,l.kt)("h1",{id:"\u5355\u70b9\u767b\u5f55-sso"},"\u5355\u70b9\u767b\u5f55 sso"),(0,l.kt)("h1",{id:"4-https"},"4. https"),(0,l.kt)("h1",{id:"5-\u52a0\u5bc6"},"5. \u52a0\u5bc6"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://blog.csdn.net/u013565368/article/details/53081195"},"https://blog.csdn.net/u013565368/article/details/53081195"),"\n",(0,l.kt)("a",{parentName:"p",href:"https://www.cnblogs.com/zyw-205520/p/5585014.html"},"https://www.cnblogs.com/zyw-205520/p/5585014.html"),"\n",(0,l.kt)("a",{parentName:"p",href:"https://blog.storagecraft.com/5-common-encryption-algorithms/"},"https://blog.storagecraft.com/5-common-encryption-algorithms/"),"\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/xuzongbao/encryption"},"https://github.com/xuzongbao/encryption")),(0,l.kt)("h2",{id:"51-\u5bf9\u79f0\u52a0\u5bc6"},"5.1. \u5bf9\u79f0\u52a0\u5bc6"),(0,l.kt)("p",null,"\u52a0\u89e3\u5bc6\u4f7f\u7528\u540c\u4e00\u4e2a\u79d8\u94a5, \u5982 des, aes"),(0,l.kt)("p",null,"\u901f\u5ea6\u5feb, \u9002\u5408\u670d\u52a1\u7aef\u76f4\u63a5\u548c\u670d\u52a1\u7aef\u901a\u4fe1\u4f7f\u7528"),(0,l.kt)("h2",{id:"52-\u975e\u5bf9\u79f0\u52a0\u5bc6"},"5.2. \u975e\u5bf9\u79f0\u52a0\u5bc6"),(0,l.kt)("p",null,"\u5982 rsa"),(0,l.kt)("p",null,"\u52a0\u5bc6\u5de5\u5177 gpg: ",(0,l.kt)("a",{parentName:"p",href:"http://www.ruanyifeng.com/blog/2013/07/gpg.html"},"http://www.ruanyifeng.com/blog/2013/07/gpg.html"),", ",(0,l.kt)("a",{parentName:"p",href:"https://www.jianshu.com/p/268064e67719"},"https://www.jianshu.com/p/268064e67719")," "),(0,l.kt)("h1",{id:"6-\u6458\u8981\u7b97\u6cd5"},"6. \u6458\u8981\u7b97\u6cd5"),(0,l.kt)("h2",{id:"61-md5"},"6.1. md5"),(0,l.kt)("p",null,"\u4fe1\u606f\u6458\u8981\u7b97\u6cd5, \u4e0d\u53ef\u9006, \u6297\u4fee\u6539"),(0,l.kt)("p",null,"\u4f46\u662f\u7528\u6237\u5bc6\u7801\u4e0d\u53ef\u76f4\u63a5\u4f7f\u7528 md5 \u52a0\u5bc6\u540e\u5b58\u50a8, \u56e0\u4e3a\u8fd8\u662f\u53ef\u80fd\u88ab\u66b4\u529b\u7834\u89e3, \u5982\u4e8b\u5148\u751f\u6210\u4e00\u4e2a pwd -> md5(pwd) \u6620\u5c04\u5b57\u5178, \u7834\u89e3\u4e00\u4e2a md5 \u65f6, \u53ea\u8981\u5c06\u5f85\u7834\u89e3\u503c\u62ff\u5230\u5b57\u5178\u4e2d\u548c \u5b57\u5178\u503c\u8fdb\u884c\u6bd4\u5bf9, \u5339\u914d\u4e0a\u540e\u8fd4\u56de\u5bf9\u5e94\u7684 key \u5373\u53ef\u7834\u89e3."),(0,l.kt)("p",null,"\u6240\u4ee5\u4e00\u822c\u4f1a\u5c06\u5bc6\u7801\u62fc\u63a5\u4e0a\u4e00\u4e2a\u968f\u673a\u4e32(\u52a0\u76d0), \u7136\u540e md5 \u540e\u5b58\u50a8. BCryptPasswordEncoder \u5c31\u662f\u8fd9\u6837, \u4e0d\u8fc7\u66f4\u4f18\u96c5, \u5979\u5c06 \u968f\u673a\u76d0\u62fc\u63a5\u5230 \u52a0\u5bc6\u540e\u7684 md5 \u5bc6\u7801\u540e, \u65e0\u9700\u7279\u5730\u5b58\u50a8 \u76d0"))}m.isMDXComponent=!0}}]);