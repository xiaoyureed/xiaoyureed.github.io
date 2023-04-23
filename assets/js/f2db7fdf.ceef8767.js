"use strict";(self.webpackChunkwiki_1=self.webpackChunkwiki_1||[]).push([[2587],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),i=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=i(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=i(n),d=l,k=u["".concat(p,".").concat(d)]||u[d]||m[d]||r;return n?a.createElement(k,s(s({ref:t},c),{},{components:n})):a.createElement(k,s({ref:t},c))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,s=new Array(r);s[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:l,s[1]=o;for(var i=2;i<r;i++)s[i]=n[i];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7181:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>i});var a=n(7462),l=(n(7294),n(3905));const r={title:"Postgres note\ud83c\udf08",tags:["db","postgres"],date:new Date("2020-01-05T17:10:13.000Z"),toc_min_heading_level:2,toc_max_heading_level:5},s=void 0,o={unversionedId:"postgres-note",id:"postgres-note",title:"Postgres note\ud83c\udf08",description:"https://segmentfault.com/a/1190000040642766 \u7b80\u4ecb",source:"@site/docs/postgres-note.md",sourceDirName:".",slug:"/postgres-note",permalink:"/docs/postgres-note",draft:!1,editUrl:"https://github.com/xiaoyureed/xiaoyureed.github.io/tree/main/docs/postgres-note.md",tags:[{label:"db",permalink:"/docs/tags/db"},{label:"postgres",permalink:"/docs/tags/postgres"}],version:"current",frontMatter:{title:"Postgres note\ud83c\udf08",tags:["db","postgres"],date:"2020-01-05T17:10:13.000Z",toc_min_heading_level:2,toc_max_heading_level:5},sidebar:"tutorialSidebar",previous:{title:"Play\u6846\u67b6",permalink:"/docs/play-framework"},next:{title:"\u5de5\u4f5c\u6d41\u5f15\u64ce",permalink:"/docs/process-workflow-bpm-engine"}},p={},i=[{value:"\u547d\u4ee4\u884c\u4f7f\u7528",id:"\u547d\u4ee4\u884c\u4f7f\u7528",level:2},{value:"sql \u793a\u4f8b",id:"sql-\u793a\u4f8b",level:2},{value:"\u6570\u636e\u7c7b\u578b",id:"\u6570\u636e\u7c7b\u578b",level:2},{value:"\u65f6\u95f4",id:"\u65f6\u95f4",level:3},{value:"array\u7c7b\u578b",id:"array\u7c7b\u578b",level:3},{value:"hstore \u952e\u503c\u5bf9\u7c7b\u578b",id:"hstore-\u952e\u503c\u5bf9\u7c7b\u578b",level:3},{value:"json\u7c7b\u578b",id:"json\u7c7b\u578b",level:3},{value:"\u6570\u5b57\u7c7b\u578b",id:"\u6570\u5b57\u7c7b\u578b",level:3},{value:"\u5e8f\u53f7\u7c7b\u578b",id:"\u5e8f\u53f7\u7c7b\u578b",level:3},{value:"\u5b57\u7b26\u7c7b\u578b",id:"\u5b57\u7b26\u7c7b\u578b",level:3},{value:"\u4e0d\u540c\u4e8eMySQL\u7684\u7279\u6027",id:"\u4e0d\u540c\u4e8emysql\u7684\u7279\u6027",level:2},{value:"\u8d26\u53f7\u7cfb\u7edf",id:"\u8d26\u53f7\u7cfb\u7edf",level:3},{value:"schema",id:"schema",level:3},{value:"sql\u67e5\u8be2",id:"sql\u67e5\u8be2",level:3},{value:"\u6570\u636e\u4fee\u6539",id:"\u6570\u636e\u4fee\u6539",level:3},{value:"\u8868\u7ba1\u7406",id:"\u8868\u7ba1\u7406",level:3},{value:"\u5bfc\u5165\u5bfc\u51fa",id:"\u5bfc\u5165\u5bfc\u51fa",level:3}],c={toc:i},u="wrapper";function m(e){let{components:t,...n}=e;return(0,l.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://segmentfault.com/a/1190000040642766"},"https://segmentfault.com/a/1190000040642766")," \u7b80\u4ecb"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.zhihu.com/question/20010554"},"https://www.zhihu.com/question/20010554"),"\n",(0,l.kt)("a",{parentName:"p",href:"https://juejin.cn/post/6959903781366530079"},"https://juejin.cn/post/6959903781366530079")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"http://www.postgresqltutorial.com/#"},"http://www.postgresqltutorial.com/#")," - postgresql tutorial"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://medium.com/quick-code/top-tutorials-to-learn-postgresql-database-for-beginners-99ff0deb9f84"},"https://medium.com/quick-code/top-tutorials-to-learn-postgresql-database-for-beginners-99ff0deb9f84")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"http://www.ruanyifeng.com/blog/2013/12/getting_started_with_postgresql.html"},"http://www.ruanyifeng.com/blog/2013/12/getting_started_with_postgresql.html")," - \u901a\u4fd7\u7684\u5165\u95e8"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/PostgREST/postgrest"},"https://github.com/PostgREST/postgrest")," - postgresql to rest api"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#1-what-is-postgres"},"1. what is postgres")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#2-why-postgres"},"2. Why Postgres")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#3-how-to-use"},"3. how to use"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#31-%E5%91%BD%E4%BB%A4%E8%A1%8C%E4%BD%BF%E7%94%A8"},"3.1. \u547d\u4ee4\u884c\u4f7f\u7528")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#32-sql-%E7%A4%BA%E4%BE%8B"},"3.2. sql \u793a\u4f8b")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#33-%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B"},"3.3. \u6570\u636e\u7c7b\u578b"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#331-%E6%97%B6%E9%97%B4"},"3.3.1. \u65f6\u95f4")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#332-array%E7%B1%BB%E5%9E%8B"},"3.3.2. array\u7c7b\u578b")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#333-hstore-%E9%94%AE%E5%80%BC%E5%AF%B9%E7%B1%BB%E5%9E%8B"},"3.3.3. hstore \u952e\u503c\u5bf9\u7c7b\u578b")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#334-json%E7%B1%BB%E5%9E%8B"},"3.3.4. json\u7c7b\u578b")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#335-%E6%95%B0%E5%AD%97%E7%B1%BB%E5%9E%8B"},"3.3.5. \u6570\u5b57\u7c7b\u578b")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#336-%E5%BA%8F%E5%8F%B7%E7%B1%BB%E5%9E%8B"},"3.3.6. \u5e8f\u53f7\u7c7b\u578b")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#337-%E5%AD%97%E7%AC%A6%E7%B1%BB%E5%9E%8B"},"3.3.7. \u5b57\u7b26\u7c7b\u578b")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#34-%E4%B8%8D%E5%90%8C%E4%BA%8Emysql%E7%9A%84%E7%89%B9%E6%80%A7"},"3.4. \u4e0d\u540c\u4e8eMySQL\u7684\u7279\u6027"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#341-%E8%B4%A6%E5%8F%B7%E7%B3%BB%E7%BB%9F"},"3.4.1. \u8d26\u53f7\u7cfb\u7edf")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#342-schema"},"3.4.2. schema")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#343-sql%E6%9F%A5%E8%AF%A2"},"3.4.3. sql\u67e5\u8be2")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#344-%E6%95%B0%E6%8D%AE%E4%BF%AE%E6%94%B9"},"3.4.4. \u6570\u636e\u4fee\u6539")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#345-%E8%A1%A8%E7%AE%A1%E7%90%86"},"3.4.5. \u8868\u7ba1\u7406")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#346-%E5%AF%BC%E5%85%A5%E5%AF%BC%E5%87%BA"},"3.4.6. \u5bfc\u5165\u5bfc\u51fa")))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#4-crontab-%E5%AE%9A%E6%97%B6%E6%93%8D%E4%BD%9C-postgresql"},"4. crontab \u5b9a\u65f6\u64cd\u4f5c postgresql")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#5-docker-%E4%B8%AD%E5%90%AF%E5%8A%A8-postgres"},"5. docker \u4e2d\u542f\u52a8 postgres"))),(0,l.kt)("h1",{id:"what-is-postgres"},"what is postgres"),(0,l.kt)("p",null,"\u5173\u7cfb\u578b\u6570\u636e\u5e93, \u5f00\u6e90, \u540c\u7c7b\u662f MySQL"),(0,l.kt)("p",null,"Greenplum: \u5f00\u6e90\u5206\u5e03\u5f0f\u6570\u636e\u5e93\u96c6\u7fa4\u6280\u672f\uff0c\u57fa\u4e8ePostgreSQL"),(0,l.kt)("h1",{id:"why-postgres"},"Why Postgres"),(0,l.kt)("p",null,"\u6216\u8005\u8bf4, \u6bd4MySQL\u597d\u5728\u54ea\u91cc (",(0,l.kt)("a",{parentName:"p",href:"https://www.zhihu.com/question/20010554/answer/62628256"},"https://www.zhihu.com/question/20010554/answer/62628256"),")"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"MySQL \u7684\u5404\u79cd text \u5b57\u6bb5\u6709\u4e0d\u540c\u7684\u9650\u5236, \u8981\u624b\u52a8\u533a\u5206 small text, middle text, large text... Pg \u6ca1\u6709\u8fd9\u4e2a\u9650\u5236, text \u80fd\u652f\u6301\u5404\u79cd\u5927\u5c0f."),(0,l.kt)("li",{parentName:"ul"},"pg \u53ef\u4ee5\u8bbe\u7f6e transform_null_equals \u628a = null \u7ffb\u8bd1\u6210 is null (\u6309\u7167 SQL \u6807\u51c6, \u505a null \u5224\u65ad\u4e0d\u80fd\u7528 = null, \u53ea\u80fd\u7528 is null, \u8fd9\u662f\u56e0\u4e3a null\u6c38\u8fdc\u4e0d\u7b49\u4e8enull) - ",(0,l.kt)("a",{parentName:"li",href:"http://www.postgresqltutorial.com/postgresql-is-null/"},"http://www.postgresqltutorial.com/postgresql-is-null/")),(0,l.kt)("li",{parentName:"ul"},"MySQL \u91cc\u9700\u8981 utf8mb4 \u624d\u80fd\u663e\u793a emoji \u7684\u5751, Pg \u5c31\u6ca1\u8fd9\u4e2a\u5751."),(0,l.kt)("li",{parentName:"ul"},"MySQL \u7684\u4e8b\u52a1\u9694\u79bb\u7ea7\u522b repeatable read \u5e76\u4e0d\u80fd\u963b\u6b62\u5e38\u89c1\u7684\u5e76\u53d1\u66f4\u65b0, \u5f97\u52a0\u9501\u624d\u53ef\u4ee5, \u4f46\u60b2\u89c2\u9501\u4f1a\u5f71\u54cd\u6027\u80fd, \u624b\u52a8\u5b9e\u73b0\u4e50\u89c2\u9501\u53c8\u590d\u6742. \u800c Pg \u7684\u5217\u91cc\u6709",(0,l.kt)("inlineCode",{parentName:"li"},"\u9690\u85cf\u7684\u4e50\u89c2\u9501")," version \u5b57\u6bb5, \u9ed8\u8ba4\u7684 repeatable read \u7ea7\u522b\u5c31\u80fd\u4fdd\u8bc1\u5e76\u53d1\u66f4\u65b0\u7684\u6b63\u786e\u6027, \u5e76\u4e14\u53c8\u6709\u4e50\u89c2\u9501\u7684\u6027\u80fd"),(0,l.kt)("li",{parentName:"ul"},"MySQL \u4e0d\u652f\u6301\u591a\u4e2a\u8868\u4ece\u540c\u4e00\u4e2a\u5e8f\u5217\u4e2d\u53d6 id, \u800c Pg \u53ef\u4ee5"),(0,l.kt)("li",{parentName:"ul"},'MySQL \u4e0d\u652f\u6301 OVER \u5b50\u53e5, \u800c Pg \u652f\u6301. OVER \u5b50\u53e5\u80fd\u7b80\u5355\u7684\u89e3\u51b3 "\u6bcf\u7ec4\u53d6 top 5" \u7684\u8fd9\u7c7b\u95ee\u9898'),(0,l.kt)("li",{parentName:"ul"},"\u5b50\u67e5\u8be2 (subquery) \u6027\u80fd\u90fd\u6bd4 MySQL \u597d."),(0,l.kt)("li",{parentName:"ul"},"\u5b58\u50a8 array \u548c json, \u53ef\u4ee5\u5728 array \u548c json \u4e0a\u5efa\u7d22\u5f15,  jsonb \u7684\u5b58\u50a8\u7ed3\u6784\u7528\u6765\u5b9e\u73b0\u6587\u6863\u6570\u636e\u5e93\u5b58\u50a8, \u4e0d\u5fc5\u5f15\u5165mongodb\u4e86"),(0,l.kt)("li",{parentName:"ul"},"\u81ea\u5e26\u5168\u6587\u68c0\u7d22, \u4e0d\u5fc5\u5f15\u5165 elasticsearch"),(0,l.kt)("li",{parentName:"ul"},"MySQL \u5904\u7406\u6811\u72b6\u56de\u590d\u7684\u8bbe\u8ba1\u4f1a\u5f88\u590d\u6742, \u800c\u4e14\u9700\u8981\u5199\u5f88\u591a\u4ee3\u7801, \u800c Pg \u53ef\u4ee5\u9ad8\u6548\u5904\u7406\u6811\u7ed3\u6784"),(0,l.kt)("li",{parentName:"ul"},"postgres \u6253\u901a\u6240\u6709\u7c7b\u578b\u7684\u6570\u636e\u6e90, \u4f7f\u7528sql\u8bed\u6cd5\u53bb\u67e5\u8be2\u63a7\u5236\uff0c\u50cf\u4f7f\u7528\u672c\u5730\u8868\u4e00\u6837. \u8fd9\u5c31\u4e0d\u5fc5\u5f15\u5165 ETL\u4e86 (postgresql\u6709\u4e30\u5bcc\u7684fdw\u62d3\u5c55\u63d2\u4ef6\uff0c\u80fd\u6253\u901asql server, sybase, oracle ,mysql\uff0c\u751a\u81f3\u80fd\u6253\u901anosql \u5982redis, mongodb\uff0c\u8fd8\u80fd\u6253\u901a\u5404\u79cd\u6587\u4ef6\u6bd4\u5982\u65e5\u5fd7\u6587\u4ef6)"),(0,l.kt)("li",{parentName:"ul"},"Postgresql \u7684PL/Python\u8fc7\u7a0b\u8bed\u8a00\u5141\u8bb8\u51fd\u6570\u7528Python\u8bed\u8a00\u7f16\u5199")),(0,l.kt)("h1",{id:"how-to-use"},"how to use"),(0,l.kt)("h2",{id:"\u547d\u4ee4\u884c\u4f7f\u7528"},"\u547d\u4ee4\u884c\u4f7f\u7528"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"\n# \u521b\u5efa\u6570\u636e\u5e93 , \u9ed8\u8ba4\u4f7f\u7528 root \u7528\u6237, -U \u53ef\u6307\u5b9a\u522b\u7684\u7528\u6237, \ncreatedb [-Uxx_user] db_name\n\n\n\n# \u8fdb\u5165\u4ea4\u4e92\u5f0f\u67e5\u8be2\u754c\u9762, \u9ed8\u8ba4\u8fde\u63a5\u8d26\u53f7\u540c\u540d\u7684\u6570\u636e\u5e93\n#       \u6216\u8005 Linux \u4e0b sudo -i -u postgres switch user  to  login postgres db\npsql [-Uxx_user] db_name \u8fde\u63a5\u6570\u636e\u5e93\n\\dn # \u67e5\u770b\u6240\u6709 schema\n\n\n")),(0,l.kt)("h2",{id:"sql-\u793a\u4f8b"},"sql \u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"create table product\n(\n    id serial not null\n        constraint product_pk\n            primary key,\n    name text default '' not null,\n    price decimal default 0 not null,\n    create_date timestamp default now() not null\n);\n\ncomment on table product is 'product';\n\ncomment on column product.name is 'product name';\n\ncomment on column product.price is 'product price\n';\n\ncomment on column product.create_date is 'create date';\n\n\n")),(0,l.kt)("h2",{id:"\u6570\u636e\u7c7b\u578b"},"\u6570\u636e\u7c7b\u578b"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"http://www.postgres.cn/docs/11/datatype-numeric.html"},"http://www.postgres.cn/docs/11/datatype-numeric.html")),(0,l.kt)("h3",{id:"\u65f6\u95f4"},"\u65f6\u95f4"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"date \u65e5\u671f"),(0,l.kt)("li",{parentName:"ul"},"time ","[without time zone]"," \u65f6\u95f4"),(0,l.kt)("li",{parentName:"ul"},"timestamp ","[without time zone]",", \u65e5\u671f\u65f6\u95f4, \u65e0\u65f6\u533a"),(0,l.kt)("li",{parentName:"ul"},"time/timestamp with time zone \u6709\u65f6\u533a or timestamptz"),(0,l.kt)("li",{parentName:"ul"},"interval \u65f6\u95f4\u95f4\u9694")),(0,l.kt)("p",null,"time\u3001timestamp\u548cinterval\u63a5\u53d7\u4e00\u4e2a\u53ef\u9009\u7684\u7cbe\u5ea6\u503c p\uff0c\u8fd9\u4e2a\u7cbe\u5ea6\u503c\u58f0\u660e\u5728\u79d2\u57df\u4e2d\u5c0f\u6570\u70b9\u4e4b\u540e\u4fdd\u7559\u7684\u4f4d\u6570\u3002\u7f3a\u7701\u60c5\u51b5\u4e0b\uff0c\u5728\u7cbe\u5ea6\u4e0a\u6ca1\u6709\u660e\u786e\u7684\u8fb9\u754c\u3002p\u5141\u8bb8\u7684\u8303\u56f4\u662f\u4ece 0 \u5230 6"),(0,l.kt)("p",null,"\u65f6\u95f4\u8f93\u5165\u8f93\u51fa\u6700\u597d\u9075\u5faa ISO 8601, ISO 8601\u6307\u5b9a\u4f7f\u7528\u5927\u5199\u5b57\u6bcdT\u6765\u5206\u9694\u65e5\u671f\u548c\u65f6\u95f4\u3002PostgreSQL\u5728\u8f93\u5165\u4e0a\u63a5\u53d7\u8fd9\u79cd\u683c\u5f0f\uff0c\u4f46\u662f\u5728\u8f93\u51fa\u65f6\u5b83\u91c7\u7528\u4e00\u4e2a\u7a7a\u683c\u800c\u4e0d\u662fT"),(0,l.kt)("h3",{id:"array\u7c7b\u578b"},"array\u7c7b\u578b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE contacts (\nid serial PRIMARY KEY,\nname VARCHAR (100),\nphones TEXT []\n);\n\nINSERT INTO contacts (name, phones)\nVALUES\n(\n'John Doe',\nARRAY [ '(408)-589-5846',\n'(408)-589-5555' ]\n);\n\n-- \u4e00\u6b21\u63d2\u5165\u4e24\u884c\nINSERT INTO contacts (name, phones)\nVALUES\n(\n'Lily Bush',\n'{\"(408)-589-5841\"}' -- \u5355\u5f15\u53f7\u5305\u88f9\u4e2d\u62ec\u53f7\n),\n(\n'William Gate',\n'{\"(408)-589-5842\",\"(408)-589-58423\"}'\n);\n\nSELECT\nname,\nphones [ 1 ]\nFROM\ncontacts;\n\nSELECT\nname,\nphones\nFROM\ncontacts\nWHERE\n'(408)-589-5555' = ANY (phones);\n\n\n")),(0,l.kt)("h3",{id:"hstore-\u952e\u503c\u5bf9\u7c7b\u578b"},"hstore \u952e\u503c\u5bf9\u7c7b\u578b"),(0,l.kt)("p",null,", ref ",(0,l.kt)("a",{parentName:"p",href:"http://www.postgresqltutorial.com/postgresql-hstore/"},"http://www.postgresqltutorial.com/postgresql-hstore/")),(0,l.kt)("h3",{id:"json\u7c7b\u578b"},"json\u7c7b\u578b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE orders (\nID serial NOT NULL PRIMARY KEY,\ninfo json NOT NULL\n);\n\nINSERT INTO orders (info)\nVALUES\n(\n\'{ "customer": "Lily Bush", "items": {"product": "Diaper","qty": 24}}\'\n),\n(\n\'{ "customer": "Josh William", "items": {"product": "Toy Car","qty": 1}}\'\n),\n(\n\'{ "customer": "Mary Clark", "items": {"product": "Toy Train","qty": 2}}\'\n);\n\nSELECT\ninfo\nFROM\norders;\n\nSELECT\ninfo -> \'customer\' AS customer -- \u83b7\u53d6json\u4e2d\u67d0\u4e2akey\u7684\u503c, \u4ee5json\u683c\u5f0f\u8fd4\u56de, \u53ef\u4ee5\u7ee7\u7eed\u52a0\u7bad\u5934\nFROM\norders;\n\nSELECT\ninfo ->> \'customer\' AS customer -- \u4ee5\u5b57\u7b26\u4e32\u683c\u5f0f\u8fd4\u56de\nFROM\norders;\n\nSELECT\ninfo -> \'items\' ->> \'product\' as product\nFROM\norders\nORDER BY\nproduct;\n\n')),(0,l.kt)("h3",{id:"\u6570\u5b57\u7c7b\u578b"},"\u6570\u5b57\u7c7b\u578b"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u6574\u578b: \u5e38\u7528\u7684\u7c7b\u578b\u662finteger/int\uff0c\u56e0\u4e3a\u5b83\u63d0\u4f9b\u4e86\u5728\u8303\u56f4\u3001\u5b58\u50a8\u7a7a\u95f4\u548c\u6027\u80fd\u4e4b\u95f4\u7684\u6700\u4f73\u5e73\u8861\u3002\u4e00\u822c\u53ea\u6709\u5728\u78c1\u76d8\u7a7a\u95f4\u7d27\u5f20\u7684\u65f6\u5019\u624d\u4f7f\u7528 smallint\u7c7b\u578b\u3002\u800c\u53ea\u6709\u5728integer\u7684\u8303\u56f4\u4e0d\u591f\u7684\u65f6\u5019\u624d\u4f7f\u7528bigint"),(0,l.kt)("p",{parentName:"li"},"  int2\u3001int4\u548cint8 \u662f smallint, integer, bigint \u7b80\u5199")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5c0f\u6570: decimal\u548cnumeric\u662f\u7b49\u6548\u7684, "),(0,l.kt)("p",{parentName:"li"},"  \u4e00\u4e2anumeric\u7684precision\uff08\u7cbe\u5ea6\uff09\u662f\u6574\u4e2a\u6570\u4e2d\u6709\u6548\u4f4d\u7684\u603b\u6570, numeric\u7684scale\uff08\u523b\u5ea6\uff09\u662f\u5c0f\u6570\u90e8\u5206\u7684\u6570\u5b57\u4f4d\u6570, ",(0,l.kt)("inlineCode",{parentName:"p"},"NUMERIC(precision, scale)")))),(0,l.kt)("h3",{id:"\u5e8f\u53f7\u7c7b\u578b"},"\u5e8f\u53f7\u7c7b\u578b"),(0,l.kt)("p",null,"smallserial\u3001serial\u548cbigserial\u7c7b\u578b\u4e0d\u662f\u771f\u6b63\u7684\u7c7b\u578b\uff0c\u5b83\u4eec\u53ea\u662f\u4e3a\u4e86\u521b\u5efa\u552f\u4e00\u6807\u8bc6\u7b26\u5217\u800c\u5b58\u5728\u7684\u65b9\u4fbf\u7b26\u53f7"),(0,l.kt)("p",null,"\u4e5f\u6709\u7c7b\u4f3c int \u7684\u7b80\u5199"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE tablename (\n    colname SERIAL\n);\n\n\u7b49\u4ef7\u4e8e\nCREATE SEQUENCE tablename_colname_seq;\nCREATE TABLE tablename (\n    colname integer NOT NULL DEFAULT nextval('tablename_colname_seq')\n);\nALTER SEQUENCE tablename_colname_seq OWNED BY tablename.colname;\n\n")),(0,l.kt)("h3",{id:"\u5b57\u7b26\u7c7b\u578b"},"\u5b57\u7b26\u7c7b\u578b"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"character varying(n) \u53d8\u957f ,\u6709\u9650\u5236 \u6700\u591a\u5b58\u50a8 n \u4e2a\u5b57\u7b26")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"character(n) \u5b9a\u957f, \u7a7a\u683c\u586b\u5145"),(0,l.kt)("p",{parentName:"li"},"  \u6ca1\u6709\u957f\u5ea6\u58f0\u660e\u8bcd\u7684character\u7b49\u6548\u4e8echaracter(1)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"text \u65e0\u9650\u53d8\u957f"))),(0,l.kt)("h2",{id:"\u4e0d\u540c\u4e8emysql\u7684\u7279\u6027"},"\u4e0d\u540c\u4e8eMySQL\u7684\u7279\u6027"),(0,l.kt)("h3",{id:"\u8d26\u53f7\u7cfb\u7edf"},"\u8d26\u53f7\u7cfb\u7edf"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u9ed8\u8ba4\u63d0\u4f9b db account: postgres/none, Linux account: postgres\nsu postgres # \u5207\u6362user\npsql # \u767b\u9646\n\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"\\password postgres; -- \u4e3apostgres\u8bbe\u7f6e\u4e00\u4e2a\u5bc6\u7801\ncreate user dbuser with password 'dbuser'; -- \u9ed8\u8ba4\u53ea\u6709\u767b\u9646\u6743\u9650\ncreate database demodb owner dbuser;\ngrant all privileges on database demodb to dbuser; -- \u8d4b\u4e88\u64cd\u4f5c\u6743\u9650\n\\q -- \u9000\u51fapsql\n\n")),(0,l.kt)("p",null,"\u8bbe\u7f6e\u514d\u5bc6\u767b\u9646"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'# \u9000\u51fa\u540e\u518d\u6b21\u767b\u9646\n# psql [options] [dbname [username]]\npsql --host=localhost --port=5432 --dbname=demodb --username=tiger --password=tiger # \u62a5\u9519, \u4e0d\u5141\u8bb8\u6307\u5b9a\u5bc6\u7801, \u9700\u8981\u624b\u52a8\u8f93\u5165\n# \u600e\u4e48\u81ea\u52a8\u5bc6\u7801\u767b\u9646\u5462? \u5b9a\u65f6\u4efb\u52a1\u53ef\u80fd\u4f1a\u7528\u5230\n# \u65b9\u6cd51: \u5728Linux\u4e2d\u521b\u5efa\u548cdb\u7528\u6237\u540c\u540d\u7684\u8d26\u6237, \u5728shell\u4e2d, psql <dbname> \u5373\u53ef\n#           \u8981\u5bfc\u5165\u6570\u636e: psql exampledb < exampledb.sql\n# \u65b9\u6cd52: \u8bbe\u7f6e\u73af\u5883\u53d8\u91cf export PGPASSWORD="password"\n# \u65b9\u6cd53: \u5728 home dir \u4e2d\u521b\u5efa.pgpass\u6587\u4ef6, \u5199\u5165 localhost:5432:mydbname:postgres:mypass, \u6587\u4ef6\u6743\u9650\u4e3a 600,\n#       \u7136\u540e\u5728 shell\u4e2d psql ... -w \u5373\u53ef\n\n# \u6267\u884csql\npsql -f <Sql_file> ...\npsql -c "sql query" ...\n\n')),(0,l.kt)("p",null,"\u51c6\u5907\u6570\u636e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'# \ndocker cp <host_sql_location> <container>:<container_location> # \u590d\u5236\u5230docker\npsql -c "create database dvdrental owner postgres"\npsql -c "grant all privileges on database dvdrental to postgres"\npg_restore -U tiger -d demodb <xxx.tar>\n\n')),(0,l.kt)("h3",{id:"schema"},"schema"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"create schema public; -- schema \u628a\u4e00\u4e2a\u6570\u636e\u5e93\u5206\u4e3a\u4e86\u591a\u4e2a\u533a\u57df, \u5404\u4e2a\u533a\u57df\u4e2d\u53ef\u4ee5\u5b58\u5728\u540c\u540d\u7684\u8868\n          -- schema public \u662f\u9ed8\u8ba4\u5b58\u5728\u7684, \u521b\u5efa\u8868\u5982\u679c\u4e0d\u6307\u5b9a schema \u5219\u9ed8\u8ba4\u662f public\n          -- \u4e00\u822c\u5f00\u53d1\u65f6\u4e0d\u4f1a\u5199\u6b7b schema, \u5373\u4e0d\u4f1a\u6307\u5b9aschema, \u901a\u8fc7 search_path \u8bbe\u7f6e\ndrop schema public [cascade]; -- \u5220\u9664\u7a7aschema(\u524d\u7f6e\u5220\u9664)\n\nrevoke create on <schema_name> from public; -- \u4e3aschema\u8d4b\u4e88create\u6743\u9650, public\u8868\u793a\u6240\u6709\u7528\u6237\n                -- \u6743\u9650\u6709\u591a\u79cd: create(\u521b\u5efa\u8868)/usage(\u4f7f\u7528\u8868)/...\n\nshow search_path ; -- \u67e5\u770b\u6a21\u5f0f\u7684\u641c\u7d22\u8def\u5f84\n-- \u9ed8\u8ba4\u662f\u8fd9\u6837\u7684:\n search_path\n--------------\n $user,public\n \n-- \u8fd9\u8868\u793a, sql \u4e2d\u6ca1\u6709\u6307\u5b9aschema, \u4f1a\u8fd9\u4e48\u786e\u5b9aschema: \u9996\u5148\u67e5\u770b\u662f\u5426\u6709\u548c\u5f53\u524d\u7528\u6237\u540c\u540d\u7684schema, \u5982\u679c\u6709\u5219\u4f7f\u7528; \u5982\u679c\u6ca1\u6709\u5219\u4f7f\u7528\u9ed8\u8ba4\u7684 public schema\n\nSET search_path TO myschema,public; -- \u4fee\u6539\u9ed8\u8ba4\u7684 search_path\n\n")),(0,l.kt)("p",null,"schema\u7684\u6700\u4f73\u5b9e\u8df5:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'\u4ec5\u4ec5\u4f7f\u7528 \u9ed8\u8ba4\u7684public, \u76f8\u5f53\u4e8e\u4e0d\u4f7f\u7528 schema \u8fd9\u4e2a\u7279\u6027; \u9002\u7528\u4e8e "\u53ea\u6709\u4e00\u4e2a\u7528\u6237\u6216\u8005\u6570\u636e\u5e93\u91cc\u53ea\u6709\u51e0\u4e2a\u5408\u4f5c\u7528\u6237\u7684\u60c5\u5f62"'),(0,l.kt)("li",{parentName:"ul"},"\u4e3a\u6bcf\u4e2a\u7528\u6237\u521b\u5efa\u4e00\u4e2a\u6a21\u5f0f\uff0c\u540d\u5b57\u548c\u7528\u6237\u76f8\u540c")),(0,l.kt)("h3",{id:"sql\u67e5\u8be2"},"sql\u67e5\u8be2"),(0,l.kt)("p",null,"select distinct on (column1, ...) column1, column2 order by ...  \u6309\u7167 column1 \u5206\u7ec4, \u8fd4\u56de\u6bcf\u7ec4\u7684\u7b2c\u4e00\u884c, \u9700\u8981\u548corder by\u4e00\u8d77\u4f7f\u7528 "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"-- \u7406\u89e3 distinct on \u9700\u8981\u4ece distinct \u770b\u8d77\n-- \u67e5\u8be2 \u67d0\u4e00\u5b57\u6bb5\u552f\u4e00\u7684\u884c\nselect distinct column1 from t1;\n-- \u67e5\u8be2 \u4e24\u5b57\u6bb5\u7ec4\u5408\u5728\u4e00\u8d77\u552f\u4e00\u7684\u884c\nselect distinct column1, column2 from  t1;\n-- \u95ee\u9898\u6765\u4e86: \u67e5\u8be2\u4ec5\u4ec5\u67d0\u4e00\u4e2a\u5b57\u6bb5\u552f\u4e00\u7684\u884c, \u4f46\u662f\u9700\u8981 select \u591a\u5217\n-- \u8fd9\u65f6\u5982\u679c\u4ec5\u4ec5\u4f7f\u7528 distinct \u5c31\u6709\u6b67\u4e49\u4e86, \u9700\u8981\u4f7f\u7528 distinct on\nselect distinct on (column1) column1, column2 from t1; -- \u6ca1\u6709\u6392\u5e8f, \u7ed3\u679c\u4e0d\u5b9a\n\n")),(0,l.kt)("p",null,"limit null \u7b49\u4ef7\u4e8e\u7701\u7565 limit"),(0,l.kt)("p",null,"limit n offset m \u8fd4\u56den\u884c, \u4f46\u662f\u504f\u79fbm\u884c\u540e\u5f00\u59cb\u8ba1\u7b97"),(0,l.kt)("p",null,"fetch \u901a\u8fc7\u6e38\u6807\u6293\u53d6\u7ed3\u679c, \u6548\u679c\u7c7b\u4f3climit, \u56e0\u4e3alimit\u5e76\u4e0d\u662f sql \u6807\u51c6\u4e2d\u7684\u8bed\u6cd5, \u6240\u4ee5\u5f15\u5165fetch"),(0,l.kt)("p",null,"ref: ",(0,l.kt)("a",{parentName:"p",href:"http://www.postgres.cn/docs/9.4/sql-fetch.html"},"http://www.postgres.cn/docs/9.4/sql-fetch.html")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"-- \u8bed\u6cd5 FETCH { FIRST | NEXT } [ row_count ] { ROW | ROWS } ONLY\nselect ... order by xxx FETCH FIRST ROW ONLY; -- \u8fd4\u56de\u7b2c\u4e00\u884c\n                    -- \u7b49\u540c\u4e8e FETCH FIRST 1 ROW ONLY;\nFETCH FIRST 5 ROW ONLY; -- \u8fd4\u56de\u524d5\u884c\n\n-- \u548c offset \u5408\u7528\nOFFSET 5 ROWS FETCH FIRST 5 ROW ONLY; -- \u83b7\u53d6\u6392\u5e8f\u540e\u7684 6-10 \u884c\n\n")),(0,l.kt)("p",null,'like \u6a21\u7cca\u67e5\u8be2, \u7b49\u4ef7\u4e8e "~~" (% - \u4e00\u4e2a\u6216\u591a\u4e2a\u5b57\u7b26; \u4e0b\u5212\u7ebf - \u4e00\u4e2a\u5b57\u7b26)'),(0,l.kt)("p",null,'not like \u7b49\u4ef7\u4e8e "!~~"'),(0,l.kt)("p",null,'ilike \u5927\u5c0f\u5199\u4e0d\u654f\u611f , \u7b49\u4ef7 "~~*"'),(0,l.kt)("p",null,'\u8fde\u63a5\u7b26 "||"'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"select first_name||' '|| last_name as full_name from customer order by full_name;\n")),(0,l.kt)("p",null,"inner join"),(0,l.kt)("p",null,"\u81ea\u8fde\u63a5"),(0,l.kt)("p",null,"left join, right join"),(0,l.kt)("p",null,"full ","[outer]"," join - \u8fd4\u56deA\u8868\u4e2d\u7684\u884c, \u8fd9\u4e9b\u884c\u5728B\u8868\u4e2d\u6ca1\u6709\u5173\u8054\u7684\u884c "),(0,l.kt)("p",null,"cross join"),(0,l.kt)("p",null,"natural ","[inner/left/right]"," join (\u9ed8\u8ba4 inner) \u65e0\u9700\u6307\u5b9a\u8fde\u63a5\u6761\u4ef6, \u5c06\u8868\u4e2d\u5177\u6709\u76f8\u540c\u540d\u79f0\u7684\u5217\u81ea\u52a8\u8fdb\u884c\u5339\u914d"),(0,l.kt)("p",null,"union \u5e76\u96c6"),(0,l.kt)("p",null,"intersect \u5e76\u96c6"),(0,l.kt)("p",null,"except \u5dee\u96c6"),(0,l.kt)("p",null,"grouping sets() - group by \u7684\u5b50\u53e5, \u6548\u679c\u76f8\u5f53\u4e8e\u5bf9\u591a\u4e2a group by \u7ed3\u679c\u8fdb\u884c union all; \u6700\u540e\u7684\u7ed3\u679c\u96c6\u5217\u6570\u4e3a\u591a\u4e2agroup by \u4e2d\u7684\u6700\u5927\u7684\u5217\u6570, \u5408\u5e76\u65f6,\u5217\u6570\u4e0d\u591f\u7684\u4f1a\u7528 null \u8865\u5168;"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"-- \u4e00\u4e2a grouping set \u5c31\u662f\u4e00\u4e2a\u5305\u542b\u591a\u4e2a\u5217\u7684\u96c6\u5408, \u7528\u8fd9\u4e9b\u5217\u6765\u8fdb\u884cgroup by\n-- In this syntax, you have four grouping sets (c1,c2), (c1), (c2), and ().\nSELECT\n    c1,\n    c2,\n    aggregate_function(c3)\nFROM\n    table_name\nGROUP BY\n    GROUPING SETS (\n        (c1, c2),\n        (c1),\n        (c2),\n        ()\n);\n")),(0,l.kt)("p",null,"cube(c1, c2, c3) \u7528\u6765\u7b80\u5199 grouping sets(...), \u4e3a\u6307\u5b9a\u7684\u5217\u4ea7\u751f\u6240\u6709\u53ef\u80fd\u7684grouping set\u7ec4\u5408"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CUBE(c1,c2,c3)\n -- \u7b49\u4ef7\u4e8e\nGROUPING SETS (\n    (c1,c2,c3),\n    (c1,c2),\n    (c1,c3),\n    (c2,c3),\n    (c1),\n    (c2),\n    (c3),\n    ()\n)\n")),(0,l.kt)("p",null,"rollup \u662fgroup by \u7684\u5b50\u53e5, \u4e5f\u662f\u4ea7\u751f grouping set, \u53ea\u662f\u4e0d\u662f\u4ea7\u751f\u5168\u90e8\u7684\u53ef\u80fd\u7ec4\u5408, \u800c\u662f\u53ea\u4ea7\u751f\u5c11\u90e8\u5206; \u591a\u4e2a\u5217\u95f4\u6709\u5c42\u7ea7\u5173\u7cfb; \u5e38\u7528\u6765\u8ba1\u7b97\u5e74\u6708\u65e5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"-- cube \u548c rollup \u533a\u522b:\n\nCUBE (c1,c2,c3)\n-- \u7b49\u4ef7\u4e8e\n(c1, c2, c3)\n(c1, c2)\n(c2, c3)\n(c1,c3)\n(c1)\n(c2)\n(c3)\n()\n\nROLLUP(c1,c2,c3)\n-- \u7b49\u4ef7\u4e8e\n(c1, c2, c3)\n(c1, c2)\n(c1)\n()\n")),(0,l.kt)("h3",{id:"\u6570\u636e\u4fee\u6539"},"\u6570\u636e\u4fee\u6539"),(0,l.kt)("p",null,"update... from ... \u6839\u636e\u5176\u4ed6\u8868\u7684\u6761\u4ef6\u8fdb\u884c\u66f4\u65b0"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"UPDATE A\nSET A.c1 = expresion\nFROM B\nWHERE A.c2 = B.c2;\n\n")),(0,l.kt)("p",null,"insert into ... on conflict target action \u63d2\u5165or\u66f4\u65b0"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"-- target: \u5217\u540d/\u7ea6\u675f\u540d/where\u5b50\u53e5\n-- action: DO NOTHING  \u6216\u8005  DO UPDATE SET column_1 = value_1, .. WHERE condition\n\n")),(0,l.kt)("h3",{id:"\u8868\u7ba1\u7406"},"\u8868\u7ba1\u7406"),(0,l.kt)("p",null,"\u5b57\u6bb5\u7c7b\u578b"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"http://www.postgresqltutorial.com/postgresql-data-types/"},"http://www.postgresqltutorial.com/postgresql-data-types/")),(0,l.kt)("p",null,"create table"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE table_name (\ncolumn_name TYPE column_constraint,\ntable_constraint table_constraint\n) INHERITS existing_table_name; -- \u7ee7\u627f\u6240\u6709\u5b57\u6bb5\n\n\nCREATE TABLE new_table_name [(columns...)]\nAS some_query; -- \u7528\u67e5\u8be2\u5230\u7684\u6570\u636e\u586b\u5145\u65b0\u5efa\u7684\u8868\n\nCREATE TABLE IF NOT EXISTS new_table_name -- \u4e0d\u5b58\u5728\u624d\u521b\u5efa\nAS query;\n\nCREATE TEMPORARY/TEMP TABLE temp_table -- \u4e34\u65f6\u8868, \u5728\u4e00\u6b21\u4f1a\u8bdd\u4e2d\u6709\u6548\n\n")),(0,l.kt)("h3",{id:"\u5bfc\u5165\u5bfc\u51fa"},"\u5bfc\u5165\u5bfc\u51fa"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"http://www.postgresqltutorial.com/#"},"http://www.postgresqltutorial.com/#")),(0,l.kt)("h1",{id:"crontab-\u5b9a\u65f6\u64cd\u4f5c-postgresql"},"crontab \u5b9a\u65f6\u64cd\u4f5c postgresql"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"# crontab -e\n# * * * * * /root/xy/crontab.sh\n# service cron restart\n\n# psql \"host=192.168.0.123 port =5432 user = treece password =1123 dbname=amt\" -f ./deal_str.sql\n\n#!/bin/bash\n\nstep = 20 # period seconds\nsql_location = '/root/xy/update.sql'\nhost = '10.59.97.227'\nport = 5432\ndb_name = 'sat'\nuser_name = 'pimpopr'\n\nfor((i = 0; i < 60; i = (i + step)));do\n        #$(echo \"test-test\" >> /root/xy/test.txt)\n        psql \"host=${host} port=${port} dbname=${db_name} user=${user} password=\"\n        sleep ${step}\ndone\nexit 0\n")),(0,l.kt)("h1",{id:"docker-\u4e2d\u542f\u52a8-postgres"},"docker \u4e2d\u542f\u52a8 postgres"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"mkdir -p $HOME/docker/volumes/postgres\n\ndocker run -d --rm --name postgresql -e POSTGRES_USER=dbuser -e POSTGRES_DB=testdb  -e POSTGRES_PASSWORD=password -p 5432:5432 -v $HOME/docker/volumes/postgres:/var/lib/postgresql/data  postgres\n\n\n")),(0,l.kt)("p",null,"\u6211\u662f\u5728 wsl2 \u4e2d\u8fd0\u884c\u7684 docker, \u4f7f\u7528 navicat \u53ef\u4ee5\u6b63\u5e38\u4f7f\u7528 localhost \u8fde\u63a5 .\u4f7f\u7528 inteliJ \u7cfb\u5217, \u9700\u8981 \u67e5\u51fa wsl2 \u7684 eth0 \u5730\u5740, \u4e0d\u80fd\u76f4\u63a5\u7528 localhost \u8fde\u63a5"))}m.isMDXComponent=!0}}]);