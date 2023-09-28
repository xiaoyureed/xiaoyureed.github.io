"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3094],{3905:function(e,t,a){a.d(t,{Zo:function(){return o},kt:function(){return d}});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},o=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),h=c(a),d=l,m=h["".concat(s,".").concat(d)]||h[d]||u[d]||r;return a?n.createElement(m,i(i({ref:t},o),{},{components:a})):n.createElement(m,i({ref:t},o))}));function d(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=h;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:l,i[1]=p;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},80910:function(e,t,a){a.r(t),a.d(t,{assets:function(){return o},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return u}});var n=a(83117),l=a(80102),r=(a(67294),a(3905)),i=["components"],p={title:"Distributed log collection\u5206\u5e03\u5f0f\u65e5\u5fd7\u6536\u96c6",tags:["es","elk","log"],date:new Date("2023-04-22T00:00:00.000Z"),toc_min_heading_level:2,toc_max_heading_level:5},s=void 0,c={unversionedId:"elk-elastic-log",id:"elk-elastic-log",title:"Distributed log collection\u5206\u5e03\u5f0f\u65e5\u5fd7\u6536\u96c6",description:"https://github.com/openobserve/openobserve \u66ff\u4ee3 es",source:"@site/docs/elk-elastic-log.md",sourceDirName:".",slug:"/elk-elastic-log",permalink:"/docs/elk-elastic-log",draft:!1,tags:[{label:"es",permalink:"/docs/tags/es"},{label:"elk",permalink:"/docs/tags/elk"},{label:"log",permalink:"/docs/tags/log"}],version:"current",frontMatter:{title:"Distributed log collection\u5206\u5e03\u5f0f\u65e5\u5fd7\u6536\u96c6",tags:["es","elk","log"],date:"2023-04-22T00:00:00.000Z",toc_min_heading_level:2,toc_max_heading_level:5},sidebar:"tutorialSidebar",previous:{title:"Effective Java \u9605\u8bfb\u7b14\u8bb0",permalink:"/docs/effective-java-reading-note"},next:{title:"\u82f1\u8bed\u5b66\u4e60\ud83d\udd25",permalink:"/docs/english-note"}},o={},u=[{value:"ElasticSearch",id:"elasticsearch",level:2},{value:"\u5f00\u6e90\u66ff\u4ee3",id:"\u5f00\u6e90\u66ff\u4ee3",level:2},{value:"\u5f00\u6e90\u5de5\u5177",id:"\u5f00\u6e90\u5de5\u5177",level:2},{value:"dump\u5907\u4efd",id:"dump\u5907\u4efd",level:3},{value:"\u6982\u5ff5",id:"\u6982\u5ff5",level:3},{value:"\u4f7f\u7528\u573a\u666f",id:"\u4f7f\u7528\u573a\u666f",level:3},{value:"\u542f\u52a8",id:"\u542f\u52a8",level:3},{value:"\u4e2d\u6587\u5206\u8bcd\u63d2\u4ef6",id:"\u4e2d\u6587\u5206\u8bcd\u63d2\u4ef6",level:3},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:3},{value:"meta info api",id:"meta-info-api",level:4},{value:"index api",id:"index-api",level:4},{value:"document api",id:"document-api",level:4},{value:"mapping api",id:"mapping-api",level:4},{value:"search api",id:"search-api",level:4},{value:"\u6570\u636e\u7c7b\u578b",id:"\u6570\u636e\u7c7b\u578b",level:4},{value:"Java client",id:"java-client",level:3},{value:"logstash",id:"logstash",level:2},{value:"filebeat",id:"filebeat",level:2},{value:"kibana",id:"kibana",level:2},{value:"\u8f7b\u91cf\u7ea7\u7684\u65b9\u6848",id:"\u8f7b\u91cf\u7ea7\u7684\u65b9\u6848",level:2},{value:"\u5229\u7528 websocket \u5b9e\u73b0\u6700\u7b80\u5355\u7684\u65e5\u5fd7\u53ef\u89c6\u5316",id:"\u5229\u7528-websocket-\u5b9e\u73b0\u6700\u7b80\u5355\u7684\u65e5\u5fd7\u53ef\u89c6\u5316",level:2},{value:"\u5229\u7528 spring boot admin \u5b9e\u73b0\u65e5\u5fd7\u53ef\u89c6\u5316",id:"\u5229\u7528-spring-boot-admin-\u5b9e\u73b0\u65e5\u5fd7\u53ef\u89c6\u5316",level:2}],h={toc:u};function d(e){var t=e.components,a=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/openobserve/openobserve"},"https://github.com/openobserve/openobserve")," \u66ff\u4ee3 es"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/paradedb/paradedb"},"https://github.com/paradedb/paradedb")," \u57fa\u4e8e postgres \u7684\u641c\u7d22\u5f15\u64ce"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/spujadas/elk-docker"},"https://github.com/spujadas/elk-docker")," ekl \u955c\u50cf"),(0,r.kt)("p",null,"loki + promtail \u8f7b\u91cf\u7684\u591a\uff0c\u66f4\u9002\u5408\u65e5\u5fd7\u67e5\u8be2"),(0,r.kt)("p",null,"\u65e5\u5fd7\u53ef\u89c6\u5316"),(0,r.kt)("p",null,"logstash+kibana+elasticsearch+redis \u5f00\u53d1\u5f3a\u5927\u7684\u65e5\u5fd7\u5206\u6790\u5e73\u53f0"),(0,r.kt)("p",null,"log.io: nodejs \u5f00\u53d1\u7684\u5b9e\u65f6\u65e5\u5fd7\u6536\u96c6\u7cfb\u7edf"),(0,r.kt)("p",null,"Graylog: \u6613\u7528\u3001\u529f\u80fd\u4e30\u5bcc\u7684\u65e5\u5fd7\u7ba1\u7406\u7cfb\u7edf\uff0c \u90e8\u7f72\u3001\u7ef4\u62a4\u3001\u641c\u7d22\u6bd4 ELK \u7b80\u5355"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://elasticsearch.cn/"},"https://elasticsearch.cn/")," es \u4e2d\u6587\u7f51"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://kalasearch.cn/blog/chapter3-elastic-search-and-lucene/"},"https://kalasearch.cn/blog/chapter3-elastic-search-and-lucene/")," \u5361\u62c9\u641c\u7d22\u4e0a\u7684\u4e00\u7bc7\u6559\u7a0b"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#elasticsearch"},"ElasticSearch")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%E5%BC%80%E6%BA%90%E6%9B%BF%E4%BB%A3"},"\u5f00\u6e90\u66ff\u4ee3")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%E5%BC%80%E6%BA%90%E5%B7%A5%E5%85%B7"},"\u5f00\u6e90\u5de5\u5177"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#dump%E5%A4%87%E4%BB%BD"},"dump\u5907\u4efd")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%E6%A6%82%E5%BF%B5"},"\u6982\u5ff5")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%E4%BD%BF%E7%94%A8%E5%9C%BA%E6%99%AF"},"\u4f7f\u7528\u573a\u666f")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%E5%90%AF%E5%8A%A8"},"\u542f\u52a8")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%E4%B8%AD%E6%96%87%E5%88%86%E8%AF%8D%E6%8F%92%E4%BB%B6"},"\u4e2d\u6587\u5206\u8bcd\u63d2\u4ef6")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%E4%BD%BF%E7%94%A8"},"\u4f7f\u7528"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#meta-info-api"},"meta info api")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#index-api"},"index api")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#document-api"},"document api")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#mapping-api"},"mapping api")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#search-api"},"search api")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B"},"\u6570\u636e\u7c7b\u578b")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#java-client"},"Java client")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#logstash"},"logstash")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#filebeat"},"filebeat")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#kibana"},"kibana")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%E8%BD%BB%E9%87%8F%E7%BA%A7%E7%9A%84%E6%96%B9%E6%A1%88"},"\u8f7b\u91cf\u7ea7\u7684\u65b9\u6848")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%E5%88%A9%E7%94%A8-websocket-%E5%AE%9E%E7%8E%B0%E6%9C%80%E7%AE%80%E5%8D%95%E7%9A%84%E6%97%A5%E5%BF%97%E5%8F%AF%E8%A7%86%E5%8C%96"},"\u5229\u7528 websocket \u5b9e\u73b0\u6700\u7b80\u5355\u7684\u65e5\u5fd7\u53ef\u89c6\u5316")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%E5%88%A9%E7%94%A8-spring-boot-admin-%E5%AE%9E%E7%8E%B0%E6%97%A5%E5%BF%97%E5%8F%AF%E8%A7%86%E5%8C%96"},"\u5229\u7528 spring boot admin \u5b9e\u73b0\u65e5\u5fd7\u53ef\u89c6\u5316"))),(0,r.kt)("h2",{id:"elasticsearch"},"ElasticSearch"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.elastic.co/guide/en/elasticsearch/reference/index.html"},"https://www.elastic.co/guide/en/elasticsearch/reference/index.html")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/medcl"},"https://github.com/medcl")," \u4e2d\u6587\u5927\u725b\n",(0,r.kt)("a",{parentName:"p",href:"https://elasticsearch.cn/"},"https://elasticsearch.cn/")," \u4e2d\u6587\u793e\u533a"),(0,r.kt)("h2",{id:"\u5f00\u6e90\u66ff\u4ee3"},"\u5f00\u6e90\u66ff\u4ee3"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/opensearch-project/OpenSearch"},"https://github.com/opensearch-project/OpenSearch")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/opensearch-project/OpenSearch-Dashboards"},"https://github.com/opensearch-project/OpenSearch-Dashboards")),(0,r.kt)("h2",{id:"\u5f00\u6e90\u5de5\u5177"},"\u5f00\u6e90\u5de5\u5177"),(0,r.kt)("h3",{id:"dump\u5907\u4efd"},"dump\u5907\u4efd"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/elasticsearch-dump/elasticsearch-dump"},"https://github.com/elasticsearch-dump/elasticsearch-dump")),(0,r.kt)("h3",{id:"\u6982\u5ff5"},"\u6982\u5ff5"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://zhuanlan.zhihu.com/p/37964096"},"https://zhuanlan.zhihu.com/p/37964096")," \u7efc\u5408\u5bf9\u6bd4"),(0,r.kt)("p",null,"Elastic \u672c\u8d28\u4e0a\u662f\u4e00\u4e2a\u5206\u5e03\u5f0f\u6570\u636e\u5e93\uff0c\u5141\u8bb8\u591a\u53f0\u670d\u52a1\u5668\u534f\u540c\u5de5\u4f5c\uff0c\u6bcf\u53f0\u670d\u52a1\u5668\u53ef\u4ee5\u8fd0\u884c\u591a\u4e2a Elastic \u5b9e\u4f8b"),(0,r.kt)("p",null,"ES \u9700\u8981\u5728\u521b\u5efa\u5b57\u6bb5\u524d\u8981\u9884\u5148\u5efa\u7acb Mapping\uff0cMapping \u4e2d\u5305\u542b\u6bcf\u4e2a\u5b57\u6bb5\u7684\u7c7b\u578b\u4fe1\u606f\uff0cES \u9700\u8981\u6839\u636e Mapping \u4e3a\u5b57\u6bb5\u5efa\u7acb\u5408\u9002\u7684\u7d22\u5f15\u3002\u7531\u4e8e\u8fd9\u4e2a Mapping \u7684\u5b58\u5728\uff0cES \u4e2d\u7684\u5b57\u6bb5\u4e00\u4f46\u5efa\u7acb\u5c31\u4e0d\u80fd\u518d\u4fee\u6539\u7c7b\u578b\u4e86"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"index, \u7c7b\u4f3c MySQL \u7684 db")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"type \u7c7b\u4f3c table (\u6700\u65b0\u7248\u79fb\u9664\u4e86)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"document \u7c7b\u4f3c row"),(0,r.kt)("p",{parentName:"li"},"\u540c\u4e00\u4e2a Index \u91cc\u9762\u7684 Document\uff0c\u4e0d\u8981\u6c42\u6709\u76f8\u540c\u7684\u7ed3\u6784\uff08scheme\uff09\uff0c\u4f46\u662f\u6700\u597d\u4fdd\u6301\u76f8\u540c\uff0c\u8fd9\u6837\u6709\u5229\u4e8e\u63d0\u9ad8\u641c\u7d22\u6548\u7387")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6570\u636e\u7c7b\u578b"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://www.cnblogs.com/betterwgo/p/11571275.html"},"https://www.cnblogs.com/betterwgo/p/11571275.html")))),(0,r.kt)("h3",{id:"\u4f7f\u7528\u573a\u666f"},"\u4f7f\u7528\u573a\u666f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u641c\u7d22"),(0,r.kt)("li",{parentName:"ul"},"\u5730\u7406\u7a7a\u95f4\u6570\u636e\u5904\u7406\u5206\u6790\u53ef\u89c6\u5316"),(0,r.kt)("li",{parentName:"ul"},"\u65e5\u5fd7\u5904\u7406\u5206\u6790")),(0,r.kt)("h3",{id:"\u542f\u52a8"},"\u542f\u52a8"),(0,r.kt)("p",null,"ref: ",(0,r.kt)("a",{parentName:"p",href:"https://www.jianshu.com/p/d8b0c736070f"},"https://www.jianshu.com/p/d8b0c736070f")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/eiblog/docker"},"https://github.com/eiblog/docker")," \u65b0\u53d1\u73b0\u7684\u4e00\u4e2a dockerfile"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'mkdir -p /mydata/es/config\nmkdir -p /mydata/es/data\nmkdir -p /mydata/es/plugins\necho "network.host: 0.0.0.0" >> /mydata/es/config/elasticsearch.yml\nchmod -R 777 es/\n# \u5355\u70b9\u542f\u52a8\ndocker run -d --name es -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" -e ES_JAVA_OPTS="-Xms64m -Xmx128m" -v ~/repo/docker_data/es/config/elasticsearch.yml:/usr/share/elasticsearch/config/elasticsearch.yml -v ~/docker_data/es/data:/usr/share/elasticsearch/data -v ~/docker_data/es/plugins:/usr/share/elasticsearch/plugins elasticsearch:7.9.2\n\n# \u4e0d\u6620\u5c04\u76ee\u5f55\u7248\u672c\n#docker run -d --name es -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" -v es:/usr/share/elasticsearch/data  elasticsearch:7.9.2\n\n\n# kibana\n# localhost:5601\n\ndocker run -d --name kibana --link es:es-link -e ELASTICSEARCH_HOSTS=http://es-link:9200 -p 5601:5601 kibana:7.9.1\n\n')),(0,r.kt)("h3",{id:"\u4e2d\u6587\u5206\u8bcd\u63d2\u4ef6"},"\u4e2d\u6587\u5206\u8bcd\u63d2\u4ef6"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"# \u82e5\u6ca1\u6709\u6620\u5c04 plugins \u76ee\u5f55\u5230 container \u5916\u90e8\uff0c \u5219\u9700\u8981\u5982\u4e0b\uff1a\n\n# \u4e2d\u6587 \u5206\u8bcd\u63d2\u4ef6 https://github.com/medcl/elasticsearch-analysis-ik/\ndocker exec -it es bash\n./bin/elasticsearch-plugin install https://github.com/medcl/elasticsearch-analysis-ik/releases/download/v6.3.0/elasticsearch-analysis-ik-6.3.0.zip # replace 6.3.0\ndocker restart es\n\n# \u82e5\u6620\u5c04\u4e86 plugins \u76ee\u5f55\uff1a\n# \u5148\u5230 release \u9875\u9762\u4e0b\u8f7d zip \u6587\u4ef6\n# \u7136\u540e\u89e3\u538b\u5230 plugins \u76ee\u5f55, \u6587\u4ef6\u5939\u547d\u540d\u4e0d\u8981\u4fee\u6539\n# \u91cd\u542f es\n\n\n# \u81ea\u5b9a\u4e49\u62d3\u5c55\u8bcd\u5e93\n# \u4fee\u6539\u63d2\u4ef6\u5305\u4e0b\u7684 config/IKAnalyzer.cgf.xml\n# \u4f7f\u7528 nginx \u6258\u7ba1 ik_fenci.txt \u6587\u4ef6\n")),(0,r.kt)("h3",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,r.kt)("h4",{id:"meta-info-api"},"meta info api"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"# \u57fa\u672c\u4fe1\u606f , \u53ef\u4ee5\u5e26 ?v \u8868\u793a\u5e26\u8868\u5934\n/_cat/nodes  # \u6240\u6709\u8282\u70b9\ncurl -X GET 'http://localhost:9200/_cat/health'   # \u5065\u5eb7\u4fe1\u606f \ncurl -X GET 'http://localhost:9200/_cat/master'   # \u4e3b\u8282\u70b9\ncurl -X GET 'http://localhost:9200/_cat/indices'  # \u7d22\u5f15\u4fe1\u606f\n\n\n")),(0,r.kt)("h4",{id:"index-api"},"index api"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"\n# \u65b0\u5efa Index, \n# \u540d\u4e3a weather\ncurl -X PUT 'localhost:9200/weather'\n# {\"acknowledged\":true,\"shards_acknowledged\":true,\"index\":\"weather\"}% # \u6210\u529f\n\n# \u5220\u9664 index\ncurl -X DELETE 'localhost:9200/weather'\n\n# \u67e5\u770b\u5f53\u524d\u8282\u70b9\u6240\u6709 index\n# v \u4e3a verbose \u8be6\u7ec6\u4fe1\u606f\ncurl -X GET 'http://localhost:9200/_cat/indices?v'\n# health status index   uuid                   pri rep docs.count docs.deleted store.size pri.store.size\n# yellow open   weather 11BWkxZDSHicWIcg8UMF1A   1   1          0            0       208b           208b\n\n# \u67e5\u770b\u5355\u4e00 index \u60c5\u51b5\ncurl -X GET 'http://localhost:9200/_cat/indices/weather?v'\n\n\n")),(0,r.kt)("h4",{id:"document-api"},"document api"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'# \u65b0\u5efa index, document \n# \u4e5f\u53ef\u66f4\u65b0 (\u4e0d\u662f\u589e\u91cf\u66f4\u65b0, \u5fc5\u987b\u6307\u5b9a\u5168\u90e8\u7684\u6570\u636e), \u5fc5\u987b\u6307\u5b9a ID, \u8fd9\u4e2a ID (_id) \u548c json \u4e2d\u7684 id \u4e0d\u540c\nPUT /weather/_doc/2\n{\n  "name": "aa"\n}\n\n# \u65b0\u5efa index, document, \n# \u4e0d\u53ef\u66f4\u65b0\n# \u5fc5\u987b\u6307\u5b9a path \u4e2d\u7684 id\nPUT /people/_create/1\n{\n  "name": "bb"\n}\n\n# \u65b0\u5efa\n# \u5e26 path id \u4e3a \u4fee\u6539/\u65b0\u5efa, \u4e0d\u5e26\u5219\u4e00\u5b9a\u662f\u65b0\u5efa\nPOST /account/_doc  # \u4e0d\u652f\u6301 _create\n{\n  "name": "act"\n}\n\n# \u67e5\u8be2\ncurl -X GET "localhost:9200/customer/_doc/1?pretty"\n\n\n# \u4e50\u89c2\u9501 ?if_seq_no=xxx&if_primary_term=1\n\n\n# \u66f4\u65b0 (\u589e\u91cf\u66f4\u65b0, \u4e0d\u5fc5\u6307\u5b9a\u5168\u91cf\u6570\u636e)\nPOST /users/_update/1\n{\n  "doc": {\n    "name": "updated name"\n  }\n}\n\n# \u5220\u9664\nDELETE /users/_doc/1\n\n\n\n# \u6279\u91cf bulk\n\n\n\n')),(0,r.kt)("h4",{id:"mapping-api"},"mapping api"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'\n# specific a mapping while create an index\n# \u53ef\u4ee5\u76f4\u63a5\u63d2\u5165 doc, \u4e0d\u521b\u5efa mapping, \u8fd9\u6837 es \u4f1a\u9ed8\u8ba4\u6839\u636e doc \u5b57\u6bb5\u7c7b\u578b\u521b\u5efa mapping\n\n# \u9a8c\u8bc1\u5206\u8bcd, \u6700\u65b0\u7248\u4e0d\u652f\u6301 type \u4e86 (\u8003\u8651 \u53bb\u6389 person {...})\n#\n# \u9996\u5148\u65b0\u5efa\u4e00\u4e2a\u540d\u79f0\u4e3aaccounts\u7684 Index\uff0c\u91cc\u9762\u6709\u4e00\u4e2a\u540d\u79f0\u4e3aperson\u7684 Type\u3002person\u6709\u4e09\u4e2a\u5b57\u6bb5\n# analyzer\u662f\u5b57\u6bb5\u6587\u672c\u7684\u5206\u8bcd\u5668\uff0csearch_analyzer\u662f\u641c\u7d22\u8bcd\u7684\u5206\u8bcd\u5668\u3002ik_max_word\u5206\u8bcd\u5668\u662f\u63d2\u4ef6ik\u63d0\u4f9b\u7684\ncurl -X PUT \'localhost:9200/accounts\' -H \'Content-Type:application/json\' -d \'\n{\n  "mappings": {\n    "person": {\n      "properties": {\n        "user": {\n          "type": "text",\n          "analyzer": "ik_max_word",\n          "search_analyzer": "ik_max_word"\n          // \u76f8\u5173\u6027\u5f97\u5206, \u9ed8\u8ba4 1.0\n          //"boost": 1.0\n        },\n        "title": {\n          "type": "text",\n          "analyzer": "ik_max_word",\n          "search_analyzer": "ik_max_word"\n        },\n        "desc": {\n          "type": "text",\n          "analyzer": "ik_max_word",\n          "search_analyzer": "ik_max_word"\n        }\n      }\n    }\n  }\n}\'\n# \u6700\u65b0\u7248\u8fd9\u6837\u521b\u5efa index \u548c\u5206\u8bcd\u7ea6\u675f: \u5206\u6b65\ncurl -XPUT http://localhost:9200/accounts\ncurl -X PUT \'localhost:9200/accounts/_mapping\' -H \'Content-Type:application/json\' -d \'\n{\n    "properties": {\n        "user": {\n            "type": "text",\n            "analyzer": "ik_max_word",\n            "search_analyzer": "ik_max_word"\n        },\n        "title": {\n            "type": "text",\n            "analyzer": "ik_max_word",\n            "search_analyzer": "ik_max_word"\n        },\n        "desc": {\n            "type": "text",\n            "analyzer": "ik_max_word",\n            "search_analyzer": "ik_max_word"\n        }\n    }\n}\'\n\n# \u63d2\u5165\n# \u4e5f\u53ef\u4ee5\u7528 put \u4f46\u662f url \u5fc5\u987b\u8981\u6709 id\uff0c \u4e00\u822c\u7528\u4e8e\u4fee\u6539\ncurl -XPOST http://localhost:9200/accounts/_create/1 -H \'Content-Type:application/json\' -d \'\n{\n  "user": "\u5f20\u4e09",\n  "title": "\u5de5\u7a0b\u5e08",\n  "desc": "\u6570\u636e\u5e93\u7ba1\u7406"\n}\'\ncurl -XPOST http://localhost:9200/accounts/_create/2 -H \'Content-Type:application/json\' -d \'\n{\n  "user": "\u674e\u56db",\n  "title": "\u8fd0\u7ef4\u7a0b\u5e8f\u5458",\n  "desc": "\u5f00\u53d1"\n}\'\n\n# \u67e5\u770b mapping\nGET /users/_mapping\n\n')),(0,r.kt)("h4",{id:"search-api"},"search api"),(0,r.kt)("p",null,"\u4e24\u79cd\u65b9\u5f0f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"get \u8bf7\u6c42 + url \u53c2\u6570"),(0,r.kt)("li",{parentName:"ul"},"get \u8bf7\u6c42+body \u53c2\u6570")),(0,r.kt)("p",null,"\u65b9\u5f0f 1: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"\n# search specific index\nGET /users/_search \nGET /users/_search?q=* # \u540c\u4e0a\nGET /users/_search?q=*&sort=id:asc # \u6392\u5e8f\n\n\n# search for multiple index\nGET /users,account/_search # \u4e0d\u5e26\u7a7a\u683c\n\n\n\n")),(0,r.kt)("p",null,"\u65b9\u5f0f 2: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'\n# search all data\ncurl -XGET "http://es-link:9200/_search" -H \'Content-Type: application/json\' -d\'{  "query": {    "match_all": {}  }}\'\n\n# \u6392\u5e8f\nGET /users/_search\n{\n  "query": {\n    "match_all": {}\n  }, \n  "sort": [\n    {\n      "id": {\n        "order": "desc"\n      }\n    }\n  ]\n}\n\n\n')),(0,r.kt)("h4",{id:"\u6570\u636e\u7c7b\u578b"},"\u6570\u636e\u7c7b\u578b"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.cnblogs.com/betterwgo/p/11571275.html"},"https://www.cnblogs.com/betterwgo/p/11571275.html")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"nested , \u9632\u6b62 \u6570\u7ec4\u5185\u7684\u5bf9\u8c61\u6241\u5e73\u5316\u5b58\u50a8, \u68c0\u7d22\u65f6\u51fa bug")),(0,r.kt)("h3",{id:"java-client"},"Java client"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/spring-projects/spring-data-elasticsearch"},"https://github.com/spring-projects/spring-data-elasticsearch")," \u7248\u672c\u517c\u5bb9\u95ee\u9898"),(0,r.kt)("p",null,"\u6240\u4ee5\u63a8\u8350 ",(0,r.kt)("a",{parentName:"p",href:"https://www.elastic.co/guide/en/elasticsearch/client/java-rest/7.9/index.html"},"https://www.elastic.co/guide/en/elasticsearch/client/java-rest/7.9/index.html")),(0,r.kt)("h2",{id:"logstash"},"logstash"),(0,r.kt)("p",null,"\u6536\u96c6\u65e5\u5fd7, \u8dd1\u5728 jvm \u4e2d, "),(0,r.kt)("h2",{id:"filebeat"},"filebeat"),(0,r.kt)("p",null,"\u56e0\u4e3alogstash\u662fjvm\u8dd1\u7684\uff0c\u8d44\u6e90\u6d88\u8017\u6bd4\u8f83\u5927\uff0c\u6240\u4ee5\u540e\u6765\u4f5c\u8005\u53c8\u7528golang\u5199\u4e86\u4e00\u4e2a, \u529f\u80fd\u8f83\u5c11\u4f46\u662f\u8d44\u6e90\u6d88\u8017\u4e5f\u5c0f"),(0,r.kt)("p",null,"logstash \u548cfilebeat\u90fd\u5177\u6709\u65e5\u5fd7\u6536\u96c6\u529f\u80fd\uff0cfilebeat\u66f4\u8f7b\u91cf\uff0c\u5360\u7528\u8d44\u6e90\u66f4\u5c11\uff0c\u4f46logstash \u5177\u6709filter\u529f\u80fd\uff0c\u80fd\u8fc7\u6ee4\u5206\u6790\u65e5\u5fd7\u3002\u4e00\u822c\u7ed3\u6784\u90fd\u662ffilebeat\u91c7\u96c6\u65e5\u5fd7\uff0c\u7136\u540e\u53d1\u9001\u5230\u6d88\u606f\u961f\u5217\uff0credis\uff0ckafaka\u3002\u7136\u540elogstash\u53bb\u83b7\u53d6\uff0c\u5229\u7528filter\u529f\u80fd\u8fc7\u6ee4\u5206\u6790\uff0c\u7136\u540e\u5b58\u50a8\u5230elasticsearch\u4e2d"),(0,r.kt)("h2",{id:"kibana"},"kibana"),(0,r.kt)("h2",{id:"\u8f7b\u91cf\u7ea7\u7684\u65b9\u6848"},"\u8f7b\u91cf\u7ea7\u7684\u65b9\u6848"),(0,r.kt)("p",null,"Promtail + Loki + Grafana\n",(0,r.kt)("a",{parentName:"p",href:"https://blog.csdn.net/weixin_39975261/article/details/109980528"},"https://blog.csdn.net/weixin_39975261/article/details/109980528")),(0,r.kt)("h2",{id:"\u5229\u7528-websocket-\u5b9e\u73b0\u6700\u7b80\u5355\u7684\u65e5\u5fd7\u53ef\u89c6\u5316"},"\u5229\u7528 websocket \u5b9e\u73b0\u6700\u7b80\u5355\u7684\u65e5\u5fd7\u53ef\u89c6\u5316"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://blog.csdn.net/u014174854/article/details/82143595"},"https://blog.csdn.net/u014174854/article/details/82143595")),(0,r.kt)("h2",{id:"\u5229\u7528-spring-boot-admin-\u5b9e\u73b0\u65e5\u5fd7\u53ef\u89c6\u5316"},"\u5229\u7528 spring boot admin \u5b9e\u73b0\u65e5\u5fd7\u53ef\u89c6\u5316"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://blog.csdn.net/u014174854/article/details/82143595"},"https://blog.csdn.net/u014174854/article/details/82143595"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://www.fangzhipeng.com/springcloud/2019/01/04/sc-f-boot-admin.html"},"https://www.fangzhipeng.com/springcloud/2019/01/04/sc-f-boot-admin.html")),(0,r.kt)("p",null,"\u5176\u4ed6\u65b9\u6cd5\u53c2\u8003: ",(0,r.kt)("a",{parentName:"p",href:"https://blog.csdn.net/weixin_42033269/article/details/102954953"},"https://blog.csdn.net/weixin_42033269/article/details/102954953")))}d.isMDXComponent=!0}}]);