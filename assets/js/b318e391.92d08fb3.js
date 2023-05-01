"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[6868],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,m=p["".concat(s,".").concat(d)]||p[d]||h[d]||o;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},11210:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return h}});var a=n(83117),r=n(80102),o=(n(67294),n(3905)),i=["components"],l={title:"\u82f1\u8bed\u5b66\u4e60\ud83d\udd25",tags:["\u82f1\u8bed"],date:new Date("2019-08-23T21:05:56.000Z"),toc_min_heading_level:2,toc_max_heading_level:5},s=void 0,u={unversionedId:"english-note",id:"english-note",title:"\u82f1\u8bed\u5b66\u4e60\ud83d\udd25",description:"https://blog.csdn.net/m0_37631322/article/details/83785603",source:"@site/docs/english-note.md",sourceDirName:".",slug:"/english-note",permalink:"/docs/english-note",draft:!1,tags:[{label:"\u82f1\u8bed",permalink:"/docs/tags/\u82f1\u8bed"}],version:"current",frontMatter:{title:"\u82f1\u8bed\u5b66\u4e60\ud83d\udd25",tags:["\u82f1\u8bed"],date:"2019-08-23T21:05:56.000Z",toc_min_heading_level:2,toc_max_heading_level:5},sidebar:"tutorialSidebar",previous:{title:"Distributed log collection\u5206\u5e03\u5f0f\u65e5\u5fd7\u6536\u96c6",permalink:"/docs/elk-elastic-log"},next:{title:"Extjs \u7b14\u8bb0",permalink:"/docs/extjs-note"}},c={},h=[{value:"1. \u9762\u8bd5",id:"1-\u9762\u8bd5",level:2},{value:"1.1. \u5e38\u89c1\u7684\u9762\u8bd5\u95ee\u9898",id:"11-\u5e38\u89c1\u7684\u9762\u8bd5\u95ee\u9898",level:3},{value:"1.2. \u4ecb\u7ecd\u81ea\u5df1",id:"12-\u4ecb\u7ecd\u81ea\u5df1",level:3},{value:"1.3. \u5982\u679c\u6ca1\u6709\u542c\u61c2",id:"13-\u5982\u679c\u6ca1\u6709\u542c\u61c2",level:3},{value:"1.4. \u9047\u5230\u95ee\u9898\u9700\u8981\u601d\u8003\u5f88\u4e45\u7684\u60c5\u51b5",id:"14-\u9047\u5230\u95ee\u9898\u9700\u8981\u601d\u8003\u5f88\u4e45\u7684\u60c5\u51b5",level:3},{value:"1.5. \u9762\u8bd5\u7ed3\u5c3e\u8868\u8fbe\u611f\u8c22",id:"15-\u9762\u8bd5\u7ed3\u5c3e\u8868\u8fbe\u611f\u8c22",level:3},{value:"2. \u5de5\u4f5c\u4e2d\u90ae\u4ef6 or \u7559\u8a00",id:"2-\u5de5\u4f5c\u4e2d\u90ae\u4ef6-or-\u7559\u8a00",level:2},{value:"2.1. \u5165\u804c\u540e\u7684 onboarding \u90ae\u4ef6",id:"21-\u5165\u804c\u540e\u7684-onboarding-\u90ae\u4ef6",level:3},{value:"3. integral part \u4e0d\u53ef\u6216\u7f3a\u7684\u90e8\u5206",id:"3-integral-part-\u4e0d\u53ef\u6216\u7f3a\u7684\u90e8\u5206",level:2},{value:"4. \u8bb2\u4e00\u8282\u8bfe",id:"4-\u8bb2\u4e00\u8282\u8bfe",level:2},{value:"5. \u542c\u529b\u7ec3\u4e60",id:"5-\u542c\u529b\u7ec3\u4e60",level:2},{value:"5.1. \u65b9\u6cd5\u8bba",id:"51-\u65b9\u6cd5\u8bba",level:3},{value:"5.2. \u64ad\u5ba2",id:"52-\u64ad\u5ba2",level:3},{value:"accumulation of oral materials",id:"accumulation-of-oral-materials",level:2},{value:"generally used",id:"generally-used",level:3},{value:"technically used",id:"technically-used",level:3}],p={toc:h};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{align:"center"},"https://blog.csdn.net/m0_37631322/article/details/83785603 https://blog.csdn.net/github_33696241/article/details/80382921",(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"http://www.winprog.org/english/"},"http://www.winprog.org/english/")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/byoungd/English-level-up-tips-for-Chinese"},"https://github.com/byoungd/English-level-up-tips-for-Chinese")," \u82f1\u8bed\u5b66\u4e60\u6559\u7a0b"),(0,o.kt)("p",null,"twitter \u6807\u7b7e #langtwt  ,  #studytwt")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#1-%E9%9D%A2%E8%AF%95"},"1. \u9762\u8bd5"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#11-%E5%B8%B8%E8%A7%81%E7%9A%84%E9%9D%A2%E8%AF%95%E9%97%AE%E9%A2%98"},"1.1. \u5e38\u89c1\u7684\u9762\u8bd5\u95ee\u9898")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#12-%E4%BB%8B%E7%BB%8D%E8%87%AA%E5%B7%B1"},"1.2. \u4ecb\u7ecd\u81ea\u5df1")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#13-%E5%A6%82%E6%9E%9C%E6%B2%A1%E6%9C%89%E5%90%AC%E6%87%82"},"1.3. \u5982\u679c\u6ca1\u6709\u542c\u61c2")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#14-%E9%81%87%E5%88%B0%E9%97%AE%E9%A2%98%E9%9C%80%E8%A6%81%E6%80%9D%E8%80%83%E5%BE%88%E4%B9%85%E7%9A%84%E6%83%85%E5%86%B5"},"1.4. \u9047\u5230\u95ee\u9898\u9700\u8981\u601d\u8003\u5f88\u4e45\u7684\u60c5\u51b5")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#15-%E9%9D%A2%E8%AF%95%E7%BB%93%E5%B0%BE%E8%A1%A8%E8%BE%BE%E6%84%9F%E8%B0%A2"},"1.5. \u9762\u8bd5\u7ed3\u5c3e\u8868\u8fbe\u611f\u8c22")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#2-%E5%B7%A5%E4%BD%9C%E4%B8%AD%E9%82%AE%E4%BB%B6-or-%E7%95%99%E8%A8%80"},"2. \u5de5\u4f5c\u4e2d\u90ae\u4ef6 or \u7559\u8a00"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#21-%E5%85%A5%E8%81%8C%E5%90%8E%E7%9A%84-onboarding-%E9%82%AE%E4%BB%B6"},"2.1. \u5165\u804c\u540e\u7684 onboarding \u90ae\u4ef6")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#3-integral-part-%E4%B8%8D%E5%8F%AF%E6%88%96%E7%BC%BA%E7%9A%84%E9%83%A8%E5%88%86"},"3. integral part \u4e0d\u53ef\u6216\u7f3a\u7684\u90e8\u5206")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#4-%E8%AE%B2%E4%B8%80%E8%8A%82%E8%AF%BE"},"4. \u8bb2\u4e00\u8282\u8bfe")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#5-%E5%90%AC%E5%8A%9B%E7%BB%83%E4%B9%A0"},"5. \u542c\u529b\u7ec3\u4e60"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#51-%E6%96%B9%E6%B3%95%E8%AE%BA"},"5.1. \u65b9\u6cd5\u8bba")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#52-%E6%92%AD%E5%AE%A2"},"5.2. \u64ad\u5ba2")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#accumulation-of-oral-materials"},"accumulation of oral materials"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#generally-used"},"generally used")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#technically-used"},"technically used"))))),(0,o.kt)("h2",{id:"1-\u9762\u8bd5"},"1. \u9762\u8bd5"),(0,o.kt)("h3",{id:"11-\u5e38\u89c1\u7684\u9762\u8bd5\u95ee\u9898"},"1.1. \u5e38\u89c1\u7684\u9762\u8bd5\u95ee\u9898"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"- Welcome to the interview Rain, please start off and tell me a little bit about yourself \u8981\u81ea\u6211\u4ecb\u7ecd\n\n\n")),(0,o.kt)("h3",{id:"12-\u4ecb\u7ecd\u81ea\u5df1"},"1.2. \u4ecb\u7ecd\u81ea\u5df1"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u6280\u672f\u65b9\u9762\n\nI'm rolling the code to adheres to restful style \u63a8\u52a8\u5347\u7ea7\u4ee3\u7801, \u4ee5\u7b26\u5408 restful \u98ce\u683c\n\n\n\n\n\n")),(0,o.kt)("h3",{id:"13-\u5982\u679c\u6ca1\u6709\u542c\u61c2"},"1.3. \u5982\u679c\u6ca1\u6709\u542c\u61c2"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\n- \u5982\u679c\u6ca1\u6709\u542c\u61c2, \u8bb0\u4f4f\u8fd9\u5f88\u6b63\u5e38, \u56e0\u4e3a\u4e0d\u540c\u4eba\u53e3\u97f3\u5dee\u5f02\u6781\u5927, \u8bb0\u4f4f\u4e0d\u8981\u614c, \u4ecd\u7136\u4fdd\u6301\u5fae\u7b11\n\nEmm... I'm sorry but looks like your voice is cutting off, would you mind repeating what you said? \u5047\u88c5\u4fe1\u53f7\u4e0d\u597d, \u8bf7\u522b\u4eba\u518d\u8bf4\u4e00\u6b21\n\nDo you want me to share some of my experiences related to ... \u5982\u679c\u53ea\u6293\u4f4f\u4e86\u51e0\u4e2a\u5173\u952e\u5b57, \u53ef\u4ee5\u50cf\u5bf9\u65b9\u786e\u8ba4\u4e00\u4e0b\u95ee\u7684\u662f\u4e0d\u662f\u5565\u5565\u5565; \n    \u5982\u679c\u731c\u5bf9\u4e86, \u4ed6\u4f1a\u8bf4 yes, \u5982\u679c\u731c\u9519\u4e86, \u4ed6\u80af\u5b9a\u4f1a\u91cd\u590d\u4e00\u904d\u95ee\u9898(\u8fd9\u65f6\u5019\u53c8\u53ef\u4ee5\u542c\u4e00\u904d\u4e86:))\n\nCould you speak a little bit slower? \u6781\u7aef\u60c5\u51b5\u4e0b\u5982\u679c\u4e00\u4e2a\u5173\u952e\u8bcd\u4e5f\u6ca1\u542c\u61c2, \u5e72\u8106\u76f4\u8bf4 -- \u8ba9\u4ed6\u6162\u70b9\u518d\u8bf4\u4e00\u904d\n\n\n\n\n- \u5982\u679c\u662f\u5bf9\u65b9\u7684\u56de\u7b54\u5982\u679c\u6ca1\u542c\u61c2, \u8bb0\u4f4f\u4fdd\u6301\u5fae\u7b11, \u56de\u4e00\u53e5 Ok, I see, thanks for your sharing. That's very helpful.\n\n")),(0,o.kt)("h3",{id:"14-\u9047\u5230\u95ee\u9898\u9700\u8981\u601d\u8003\u5f88\u4e45\u7684\u60c5\u51b5"},"1.4. \u9047\u5230\u95ee\u9898\u9700\u8981\u601d\u8003\u5f88\u4e45\u7684\u60c5\u51b5"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\n\n- \u56de\u7b54\u4e00\u4e2a\u95ee\u9898\u65f6\u4e89\u53d6\u65f6\u95f4\u601d\u8003, \u586b\u5145\u7a7a\u767d\u7684\u8bed\u6c14\u8bcd/\u77ed\u8bed\n\nEmm... I've never thought about it (that way ), let me think. \n\u6b64\u65f6\u53ef\u4ee5\u601d\u8003\u51e0\u79d2\u518d\u8bf4\n\n    That's an interesting question,  can I take one minute to think about it ?\n\n\nWell.. \n\n\n\n\n- \u5982\u679c\u89c9\u5f97\u81ea\u5df1\u7684\u56de\u7b54\u592a\u7b80\u5355, \u4e0d\u548b\u597d\n\n  I am completely new to ..., so please pardon if my answer is too trivial.  \u539f\u8c05\u6211\u5982\u679c\u6211\u7684\u56de\u7b54\u592a\u7410\u788e/\u6ca1\u4ef7\u503c, \u6211\u521a\u63a5\u89e6..\n\n")),(0,o.kt)("h3",{id:"15-\u9762\u8bd5\u7ed3\u5c3e\u8868\u8fbe\u611f\u8c22"},"1.5. \u9762\u8bd5\u7ed3\u5c3e\u8868\u8fbe\u611f\u8c22"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\n- \u9762\u8bd5\u7ed3\u5c3e\u8868\u8fbe\u611f\u8c22\n\n  Thanks for taking time interviewing with me\n")),(0,o.kt)("h2",{id:"2-\u5de5\u4f5c\u4e2d\u90ae\u4ef6-or-\u7559\u8a00"},"2. \u5de5\u4f5c\u4e2d\u90ae\u4ef6 or \u7559\u8a00"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"If you have any concern please feel free to touch me.\n\nI'll let you know when I'm done.\n\nPlease correct me if I'm wrong.\n\nHow can you deliver this milestone according to the timing plan? \u6211\u4eec\u5982\u4f55\u6839\u636e\u65f6\u95f4\u89c4\u5212\u4ea4\u4ed8\u8fd9\u4e2a\u5de5\u4f5c?\n\n\n")),(0,o.kt)("h3",{id:"21-\u5165\u804c\u540e\u7684-onboarding-\u90ae\u4ef6"},"2.1. \u5165\u804c\u540e\u7684 onboarding \u90ae\u4ef6"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Anastasia\nHey everyone,\nI'm Anastasia or simply Ana \ud83d\udc4b a UX Designer & Researcher based in Germany\nBefore joining EA I worked at T-Systems, which is part of Deutsche Telekom - a telco company.\nDuring my time there I worked on a B2B data marketplace, making sure a complex product is easy to use for users with varying data science know-how & a digital service assistant for different touchpoints, such as a smart speaker, helping teams understand user needs and working on (predictive) use cases.\nIn my free time you'll find me either cooking something plant-based, in the gym or getting lost in movies, tv-shows & books \ud83e\udd13 (love all things Marvel, Lost, GoT, Dexter, Westworld...)\nWhen I play video-games it's on a pc, single-player & preferably adventure/stealth \ud83d\udc31\u200d\ud83d\udc64\nI'm really thrilled to be here & can't wait to get to know & work with you all on exciting projects!!\n \nKevin\nJoining us from Slightlymad Studios is Kevin Boland, he is a hands-on Technical Director with 20 years of industry experience which all began in EA Chertsey.\nWhen described as hands-on what this means is Kevin has worked on and written several proprietary Game and Rendering engines. Starting in EA working on Renderware to creating the engine for Chinatown Wars , the AGE (now RAGE) engine for Rockstar and finally the Madness engine used for Need for Speed Shift and Project Cars in SMS.\nHe has worked on and lead development on games that have been part of some top franchises. Some examples being Project Cars, GTA, Need for Speed and Harry Potter.\n\"Through the technology I help make we can empower people to create, to innovate and ultimately bring joy.\nAs a father of a neurodiverse child I see the positive impact the games and experiences we create has and how they help her manage the world\"\nOutside of work Kevin is a father to 3 girls who keep him very active. He enjoys all sports, however these days more watching than participating.\n")),(0,o.kt)("h2",{id:"3-integral-part-\u4e0d\u53ef\u6216\u7f3a\u7684\u90e8\u5206"},"3. integral part \u4e0d\u53ef\u6216\u7f3a\u7684\u90e8\u5206"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Canonical example \u7ecf\u5178\u793a\u4f8b\nintegral part \u4e0d\u53ef\u6216\u7f3a\u7684\u90e8\u5206\nin this scenario \u5728\u8fd9\u4e2a\u65b9\u6848\u4e2d\nby nature \u5929\u751f\u5730, \u672c\u8d28\u4e0a\ncreate afresh \u91cd\u65b0\u521b\u5efa\nNot even close \u5dee\u5f97\u8fdc\ndummy data \u865a\u5047\u6570\u636e\n\n\nhave a severe impact on throughput \u5bf9\u541e\u5410\u91cf\u6709\u4e25\u91cd\u5f71\u54cd\n\nlook for ... to do ... \u501f\u52a9...\u6765\u505a...\n\ndo ... to indicate that \u901a\u8fc7\u505a... \u6765\u6307\u660e...\n    we can annotated the class with xxx to indicate that ...\n\nIf this is set to true, then no scanning of annotations takes place \u5982\u679c\u5c06\u5176\u8bbe\u7f6e\u4e3atrue\uff0c\u5219\u4e0d\u4f1a\u626b\u63cf\u6ce8\u91ca\u3002\n\nSuch entries are referred to as "stale entries" \u8fd9\u4e9b\u6761\u76ee\u88ab\u79f0\u4e3a\u201c\u9648\u65e7\u6761\u76ee\u201d\n\n\n- Let\u2019s say that we have an enormous resource that is I/O intense taking a long time to load blocking the executing thread for a substantial amount of time. It is better if that thread can be liberated to handle other requests in the meantime, instead of waiting for some I/O resource. \u5047\u8bbe\u6211\u4eec\u6709\u4e00\u4e2a\u5de8\u5927\u7684\u8d44\u6e90\uff0cI / O\u5f3a\u70c8\u9700\u8981\u82b1\u8d39\u5f88\u957f\u65f6\u95f4\u6765\u52a0\u8f7d\u963b\u585e\u6267\u884c\u7ebf\u7a0b\u5f88\u957f\u4e00\u6bb5\u65f6\u95f4\u3002 \u6700\u597d\u662f\u5728\u6b64\u671f\u95f4\u53ef\u4ee5\u91ca\u653e\u8be5\u7ebf\u7a0b\u6765\u5904\u7406\u5176\u4ed6\u8bf7\u6c42\uff0c\u800c\u4e0d\u662f\u7b49\u5f85\u67d0\u4e9bI / O\u8d44\u6e90\n\n  - enormous \u5de8\u5927\u7684\n\n  - substantial \u5927\u91cf\u7684\n\n  - intense \u5f3a\u70c8\u7684\n\n  - a substantial amount of time \u5f88\u957f\u65f6\u95f4\n\n  - can be liberated \u88ab\u91ca\u653e\n\n  - Iphone that is money spending intense making a substantial amount of people crazy emptying their wallet\n\n- This code will not block the executing thread but will perform the I/O operation in separate thread returning the result when ready using the AsyncContext.complete() method \u6b64\u4ee3\u7801\u4e0d\u4f1a\u963b\u6b62\u6b63\u5728\u6267\u884c\u7684\u7ebf\u7a0b\uff0c\u4f46\u4f1a\u5728\u5355\u72ec\u7684\u7ebf\u7a0b\u4e2d\u6267\u884cI / O\u64cd\u4f5c\uff0c\u5728\u4f7f\u7528AsyncContext.complete\uff08\uff09\u65b9\u6cd5\u51c6\u5907\u597d\u65f6\u8fd4\u56de\u7ed3\u679c\n\n- This may be very time-consuming if you have many jars in the classpath\n\n- This class provides thread-local variables. These variables differ from their normal counterparts in that each thread that accesses one (via its get or set method) has its own, independently initialized copy of the variable \u8be5\u7c7b\u63d0\u4f9b\u7ebf\u7a0b\u5c40\u90e8\u53d8\u91cf\u3002\u8fd9\u4e9b\u53d8\u91cf\u4e0e\u5b83\u4eec\u7684\u6b63\u5e38counterparts\u7684\u4e0d\u540c\u4e4b\u5904\u5728\u4e8e\uff0c\u8bbf\u95ee\u4e00\u4e2a\u53d8\u91cf\u7684\u6bcf\u4e2a\u7ebf\u7a0b\uff08\u901a\u8fc7\u5176get\u6216set\u65b9\u6cd5\uff09\u90fd\u6709\u81ea\u5df1\u7684\uff0c\u72ec\u7acb\u521d\u59cb\u5316\u7684\u53d8\u91cf\u526f\u672c\n\n  - differ from ... in that ...\n\n  - counterparts \u5bf9\u5e94\u7269\n\n- Returns a stream consisting of the results of applying the given function to the elements of this stream. \u8fd4\u56de\u4e00\u4e2a\u6d41\uff0c\u8be5\u6d41\u5305\u542b\u5c06\u7ed9\u5b9a\u51fd\u6570\u5e94\u7528\u4e8e\u6b64\u6d41\u7684\u5143\u7d20\u7684\u7ed3\u679c\n\n- With the standard java sockets, if the server needed to be scalable, the socket had to be passed to another thread for processing so that the server could continue listening for additional connections, meaning call the ServerSocket\u2019s accept() method again to listen for another connection.\u4f7f\u7528\u6807\u51c6\u7684Java\u5957\u63a5\u5b57\uff0c\u5982\u679c\u670d\u52a1\u5668\u9700\u8981\u53ef\u4f38\u7f29\uff0c\u5219\u5fc5\u987b\u5c06\u5957\u63a5\u5b57\u4f20\u9012\u7ed9\u53e6\u4e00\u4e2a\u7ebf\u7a0b\u8fdb\u884c\u5904\u7406\uff0c\u4ee5\u4fbf\u670d\u52a1\u5668\u53ef\u4ee5\u7ee7\u7eed\u4fa6\u542c\u5176\u4ed6\u8fde\u63a5\uff0c\u8fd9\u610f\u5473\u7740\u518d\u6b21\u8c03\u7528ServerSocket\u7684accept\uff08\uff09\u65b9\u6cd5\u6765\u4fa6\u542c\u53e6\u4e00\u4e2a\u8fde\u63a5\u3002\n\n- The Remote interface serves to identify interfaces whose methods may be invoked from a non-local virtual machineRemote\u63a5\u53e3\u7528\u4e8e\u6807\u8bc6\u53ef\u4ee5\u4ece\u975e\u672c\u5730\u865a\u62df\u673a\u8c03\u7528\u5176\u65b9\u6cd5\u7684\u63a5\u53e3\n\n')),(0,o.kt)("h2",{id:"4-\u8bb2\u4e00\u8282\u8bfe"},"4. \u8bb2\u4e00\u8282\u8bfe"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"We\u2019re about to cover ... in the next section  \u5c06\u5728\u4e0b\u8282\u4ecb\u7ecd...\n\n")),(0,o.kt)("h2",{id:"5-\u542c\u529b\u7ec3\u4e60"},"5. \u542c\u529b\u7ec3\u4e60"),(0,o.kt)("h3",{id:"51-\u65b9\u6cd5\u8bba"},"5.1. \u65b9\u6cd5\u8bba"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u7b2c\u4e00\u6b65\uff1a\u7528qq\u5f71\u97f3\u6253\u5f00\u4e00\u4e2a\u89c6\u9891\uff0calt+\u9f20\u6807\u5de6\u952e\u9009\u62e9\u906e\u6321\u5b57\u5e55\u533a\u57df\uff08\u7528\u4e66\u6321\u4e5f\u884c\u3002\u3002\u3002\uff09\n\n\u7b2c\u4e8c\u6b65\uff1a\u653e\u4e00\u53e5\uff0c\u542c\u5199\u4e00\u53e5\n\n\u4e00\u904d\u6ca1\u542c\u51fa\u6765\uff0c\u53ef\u4ee5\u518d\u542c3-5\u904d\uff0c\u4e0d\u8981\u9010\u4e2a\u9010\u4e2a\u5355\u8bcd\u53bb\u542c\n\n\u7b2c\u4e09\u6b65\uff1a\u542c\u5b8c\u5341\u53e5\u8bdd\u5de6\u53f3\uff0c\u53bb\u6389\u906e\u6321\u5b57\u5e55\uff08alt+\u53cc\u51fb\u5c4f\u5e55\uff09\uff0c\u5bf9\u7167\u6587\u672c\uff0c\u4fee\u6539\uff0c\u52a8\u624b\u67e5\u4e0d\u8ba4\u8bc6\u7684\u5355\u8bcdor\u8bcd\u7ec4\n\n\u56fe\u4e8c\uff1a\n\n\u7b2c\u56db\u6b65\uff1a\u5206\u6790\u6ca1\u542c\u51fa\u6765\u7684\u539f\u56e0\n\n\u95ee\u9898\u4e00\uff1a\u5355\u8bcd\u4e0d\u8ba4\u8bc6\uff1f\n\n\u95ee\u9898\u4e8c\uff1a\u8bed\u97f3\u73b0\u8c61\uff0c\u6bd4\u5982\u8fde\u8bfb\uff0c\u5f31\u8bfb\u672a\u542c\u51fa\u6765\uff1f\n\n\u7b2c\u4e94\u6b65\uff1a\n\n\u95ee\u9898\u4e00\u89e3\u51b3\u65b9\u6cd5\uff1a\u67e5\u751f\u8bcd\uff0c\u82f1\u6587\u89e3\u91ca\uff0c\u8bb0\u5f55\u5728\u4e00\u4e2a\u56fa\u5b9a\u7684\u672c\u5b50or\u6587\u6863\uff0c\u6700\u597d\u81ea\u5df1\u4eff\u7167\u4f8b\u53e5\u518d\u9020\u4e24\u4e2a\u53e5\u5b50\n\n\u95ee\u9898\u4e8c\u89e3\u51b3\u65b9\u6cd5\uff1a\u8ddf\u8bfb\n\n\u8fc7\u7a0b\uff1a\n\n1.\u653e\u4e00\u53e5\u89c6\u9891\uff0c\u770b\u7740\u5b57\u5e55\u8ddf\u7740\u8bfb3\u904d\uff0c\u4e00\u53e5\u4e00\u53e5\u8fc7\u5b8c\u4eca\u5929\u542c\u7684\u5185\u5bb9\uff1b\n\n2.\u653e\u4e00\u6bb5\u89c6\u9891\uff0c\u4e2d\u95f4\u4e0d\u6682\u505c\uff0c\u770b\u7740\u5b57\u5e55\u8ddf\u7740\u8bfb\uff0c\u91cd\u590d3\u904d\uff1b\n\n3.\u653e\u4e00\u6bb5\u89c6\u9891\uff0c\u4e2d\u95f4\u4e0d\u6682\u505c\uff0c\u843d\u540e\u539f\u89c6\u98912\u79d2\u7684\u901f\u5ea6\uff0c\u5f00\u59cb\u4e0d\u770b\u5b57\u5e55\u8ddf\u7740\u8bfb\uff0c\u4e00\u904d\u8ddf\u4e0d\u4e0a\uff0c\u53ef\u4ee5\u91cd\u590d\uff0c\u76f4\u5230\u51e0\u4e4e\u8ddf\u8bfb\u51fa\u6765\u4e3a\u6b62\uff1b\n\n\u7ed3\u675f\uff01\u542c\u7684\u957f\u5ea6\u53ef\u6839\u636e\u6bcf\u5929\u81ea\u8eab\u60c5\u51b5\u8c03\u6574\uff0c\u4f46\u6bcf\u5929\u81f3\u5c11\u542c1\u5206\u949f\uff01 \u575a\u630121\u5929\u4ee5\u4e0a\n")),(0,o.kt)("h3",{id:"52-\u64ad\u5ba2"},"5.2. \u64ad\u5ba2"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Naval Podcast (\u6587\u5b57\u7a3f ",(0,o.kt)("a",{parentName:"li",href:"https://nav.al/productize-yourself"},"https://nav.al/productize-yourself"),") \u5173\u4e8e\u9009\u62e9\u3001\u65b9\u6cd5\u8bba\u3001\u4eba\u751f\u9e21\u6c64"),(0,o.kt)("li",{parentName:"ul"},"Where should we begin , \u5a5a\u59fb\u5fc3\u7406"),(0,o.kt)("li",{parentName:"ul"},"Dear HBR \u804c\u573a"),(0,o.kt)("li",{parentName:"ul"},"start up \u521b\u4e1a\u5386\u7a0b"),(0,o.kt)("li",{parentName:"ul"},"Stuff You Should Know \u4e3b\u9898\u95f2\u804a")),(0,o.kt)("h2",{id:"accumulation-of-oral-materials"},"accumulation of oral materials"),(0,o.kt)("p",null,"\u53e3\u8bed\u7d20\u6750\u79ef\u7d2f"),(0,o.kt)("h3",{id:"generally-used"},"generally used"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"so this used to be the case in the back years, but nowadays let's get some changes\n  \u8fc7\u53bb\u4e00\u76f4\u662f\u8fd9\u6837, \u73b0\u5728\u505a\u4e9b\u6539\u53d8\n\nso basically, please remember , whenever you want to ..., you need ...\n  \u65e0\u8bba\u4f55\u65f6\n")),(0,o.kt)("h3",{id:"technically-used"},"technically used"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"so if you want to get it up and running\n  \u542f\u52a8\u5e76\u8fd0\u884c\n\nso this is the technology that you must be aware of .\n  \u5fc5\u987b\u638c\u63e1\u7684\u4e1c\u897f\n\n")))}d.isMDXComponent=!0}}]);