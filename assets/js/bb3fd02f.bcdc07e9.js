"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1906],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return c}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),u=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),h=u(a),c=r,f=h["".concat(o,".").concat(c)]||h[c]||s[c]||l;return a?n.createElement(f,i(i({ref:t},m),{},{components:a})):n.createElement(f,i({ref:t},m))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=h;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},22115:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return s}});var n=a(83117),r=a(80102),l=(a(67294),a(3905)),i=["components"],p={title:"monitor-system-grafana-prometheus\u76d1\u63a7\ud83d\udda5",tags:["grafana","prometheus","influxdb","clickhouse"],date:new Date("2020-10-03T00:00:00.000Z"),toc_min_heading_level:2,toc_max_heading_level:5},o=void 0,u={unversionedId:"monitor-system-grafana-prometheus-influxdb-hbase-time-serials-database",id:"monitor-system-grafana-prometheus-influxdb-hbase-time-serials-database",title:"monitor-system-grafana-prometheus\u76d1\u63a7\ud83d\udda5",description:"https://github.com/questdb/questdb java \u65f6\u5e8f\u6570\u636e\u5e93",source:"@site/docs/monitor-system-grafana-prometheus-influxdb-hbase-time-serials-database.md",sourceDirName:".",slug:"/monitor-system-grafana-prometheus-influxdb-hbase-time-serials-database",permalink:"/docs/monitor-system-grafana-prometheus-influxdb-hbase-time-serials-database",draft:!1,tags:[{label:"grafana",permalink:"/docs/tags/grafana"},{label:"prometheus",permalink:"/docs/tags/prometheus"},{label:"influxdb",permalink:"/docs/tags/influxdb"},{label:"clickhouse",permalink:"/docs/tags/clickhouse"}],version:"current",frontMatter:{title:"monitor-system-grafana-prometheus\u76d1\u63a7\ud83d\udda5",tags:["grafana","prometheus","influxdb","clickhouse"],date:"2020-10-03T00:00:00.000Z",toc_min_heading_level:2,toc_max_heading_level:5},sidebar:"tutorialSidebar",previous:{title:"MongoDB Notes\ud83c\udf08",permalink:"/docs/mongodb-note"},next:{title:"MVC to MVVM",permalink:"/docs/mvc-mvvm"}},m={},s=[{value:"\u4e3a\u4ec0\u4e48\u4f7f\u7528 influxdb",id:"\u4e3a\u4ec0\u4e48\u4f7f\u7528-influxdb",level:2},{value:"\u4ec0\u4e48\u662f\u65f6\u5e8f\u6570\u636e\u5e93",id:"\u4ec0\u4e48\u662f\u65f6\u5e8f\u6570\u636e\u5e93",level:2},{value:"\u65f6\u5e8f\u6570\u636e\u7684\u7279\u5f81",id:"\u65f6\u5e8f\u6570\u636e\u7684\u7279\u5f81",level:3},{value:"\u5f00\u6e90\u65b9\u6848",id:"\u5f00\u6e90\u65b9\u6848",level:3},{value:"influxdb \u548c promethus \u533a\u522b",id:"influxdb-\u548c-promethus-\u533a\u522b",level:3},{value:"\u6838\u5fc3\u6982\u5ff5",id:"\u6838\u5fc3\u6982\u5ff5",level:2},{value:"\u6570\u636e\u5e93",id:"\u6570\u636e\u5e93",level:3},{value:"Retention Policy\uff08RP\uff09 \u6570\u636e\u4fdd\u7559\u7b56\u7565",id:"retention-policyrp-\u6570\u636e\u4fdd\u7559\u7b56\u7565",level:3},{value:"Shard Group \u6570\u636e\u5207\u7247\u7ec4",id:"shard-group-\u6570\u636e\u5207\u7247\u7ec4",level:3},{value:"\u6570\u636e\u6a21\u578b",id:"\u6570\u636e\u6a21\u578b",level:2}],h={toc:s};function c(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/questdb/questdb"},"https://github.com/questdb/questdb")," java \u65f6\u5e8f\u6570\u636e\u5e93"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/Kalasearch/grafana-tutorial"},"https://github.com/Kalasearch/grafana-tutorial")," ",(0,l.kt)("a",{parentName:"p",href:"https://kalasearch.cn/blog/grafana-with-prometheus-tutorial/"},"https://kalasearch.cn/blog/grafana-with-prometheus-tutorial/"),"\n",(0,l.kt)("a",{parentName:"p",href:"https://lingchu.me/post/158.html"},"https://lingchu.me/post/158.html"),"\n",(0,l.kt)("a",{parentName:"p",href:"https://www.cnblogs.com/williamjie/p/9448904.html"},"https://www.cnblogs.com/williamjie/p/9448904.html")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://coolshell.cn/articles/21589.html"},"https://coolshell.cn/articles/21589.html")," \u9648\u6d69 \u5206\u4eab"),(0,l.kt)("p",null,"K8s, Kafka, prometheus, grafana, splunk"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#spring-boot-actuator-%E6%95%B4%E5%90%88-prometheus"},"Spring Boot Actuator \u6574\u5408 Prometheus")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#grafana"},"grafana")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#influxdb%E5%BA%8F%E6%95%B0%E6%8D%AE%E5%BA%93"},"influxdb\u5e8f\u6570\u636e\u5e93"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E4%B8%BA%E4%BB%80%E4%B9%88%E4%BD%BF%E7%94%A8-influxdb"},"\u4e3a\u4ec0\u4e48\u4f7f\u7528 influxdb")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E4%BB%80%E4%B9%88%E6%98%AF%E6%97%B6%E5%BA%8F%E6%95%B0%E6%8D%AE%E5%BA%93"},"\u4ec0\u4e48\u662f\u65f6\u5e8f\u6570\u636e\u5e93"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E6%97%B6%E5%BA%8F%E6%95%B0%E6%8D%AE%E7%9A%84%E7%89%B9%E5%BE%81"},"\u65f6\u5e8f\u6570\u636e\u7684\u7279\u5f81")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E5%BC%80%E6%BA%90%E6%96%B9%E6%A1%88"},"\u5f00\u6e90\u65b9\u6848")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#influxdb-%E5%92%8C-promethus-%E5%8C%BA%E5%88%AB"},"influxdb \u548c promethus \u533a\u522b")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E6%A0%B8%E5%BF%83%E6%A6%82%E5%BF%B5"},"\u6838\u5fc3\u6982\u5ff5"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E6%95%B0%E6%8D%AE%E5%BA%93"},"\u6570\u636e\u5e93")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#retention-policyrp-%E6%95%B0%E6%8D%AE%E4%BF%9D%E7%95%99%E7%AD%96%E7%95%A5"},"Retention Policy\uff08RP\uff09 \u6570\u636e\u4fdd\u7559\u7b56\u7565")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#shard-group-%E6%95%B0%E6%8D%AE%E5%88%87%E7%89%87%E7%BB%84"},"Shard Group \u6570\u636e\u5207\u7247\u7ec4")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E6%95%B0%E6%8D%AE%E6%A8%A1%E5%9E%8B"},"\u6570\u636e\u6a21\u578b")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#prometheus"},"prometheus")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#hbase"},"hbase"))),(0,l.kt)("h1",{id:"spring-boot-actuator-\u6574\u5408-prometheus"},"Spring Boot Actuator \u6574\u5408 Prometheus"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/MWQImwMhcFglmHZ4lIcxVA"},"https://mp.weixin.qq.com/s/MWQImwMhcFglmHZ4lIcxVA")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/wkfIQc3IQD_6y7eCsGd_Rw"},"https://mp.weixin.qq.com/s/wkfIQc3IQD_6y7eCsGd_Rw")," AlertManager"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/40ULB9UWbXVA21MxqnjBxw"},"https://mp.weixin.qq.com/s/40ULB9UWbXVA21MxqnjBxw")," Node Exporter"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/GImvM_F2XlMjO0a5xnJuFg"},"https://mp.weixin.qq.com/s/GImvM_F2XlMjO0a5xnJuFg")),(0,l.kt)("h1",{id:"grafana"},"grafana"),(0,l.kt)("p",null,"ELK + Telegraf + Grafana\n\u63a8\u8350 ELK\uff0c\u753b\u56fe\u8fd9\u5757\u53ef\u4ee5\u770b Grafana \u770b\u80fd\u4e0d\u80fd\u6ee1\u8db3\uff0c\u4e0d\u884c\u7684\u8bdd\u81ea\u5df1\u5199\u4e5f\u53ef\u4ee5\uff0cES \u6709 API, \u6211\u4eec\u5b9e\u73b0\u7684\u4e00\u4e9b\u601d\u8def\uff0c\u53ef\u4ee5\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"https://blog.ops-coffee.cn/elk"},"https://blog.ops-coffee.cn/elk")),(0,l.kt)("h1",{id:"influxdb\u5e8f\u6570\u636e\u5e93"},"influxdb\u5e8f\u6570\u636e\u5e93"),(0,l.kt)("h2",{id:"\u4e3a\u4ec0\u4e48\u4f7f\u7528-influxdb"},"\u4e3a\u4ec0\u4e48\u4f7f\u7528 influxdb"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\n\u4e3a\u4ec0\u4e48\u8981\u4f7f\u7528\u65f6\u5e8f\u6570\u636e\u5e93, \u666e\u901a\u7684\u5173\u7cfb\u578b\u6570\u636e\u5e93\u4e0d\u884c\u5417?\n\n  \u7528\u5176\u4ed6\u6570\u636e\u5e93\u4e5f\u662f\u53ef\u4ee5\u7528\u7684\uff0c\u53ea\u662f\u6548\u7387\u4e0d\u540c, \u4e13\u95e8\u9488\u5bf9\u57fa\u4e8e\u65f6\u95f4\u7684\u5927\u91cf\u9ad8\u9891\u6570\u636e\u4f18\u5316\u7684\uff0c\u5176\u5b58\u50a8\u66f4\u5c0f\u3001\u67e5\u8be2\u66f4\u5feb\n\n\u4f7f\u7528\u573a\u666f: \n\u7528\u4e8e \u76d1\u63a7\u573a\u666f\u6bd4\u5982: \u7269\u8054\u7f51\u7cfb\u7edf\u8bb0\u5f55\u8bbe\u5907\u8fd0\u884c\u6570\u636e, \u4e92\u8054\u7f51\u5e94\u7528\u8bb0\u5f55\u7528\u6237\u4f7f\u7528\u65e5\u5fd7, \u5e7f\u544a\u70b9\u51fb\u65e5\u5fd7, \u7535\u5546\u7684\u4ea4\u6613\u8bb0\u5f55\n\n\n")),(0,l.kt)("h2",{id:"\u4ec0\u4e48\u662f\u65f6\u5e8f\u6570\u636e\u5e93"},"\u4ec0\u4e48\u662f\u65f6\u5e8f\u6570\u636e\u5e93"),(0,l.kt)("h3",{id:"\u65f6\u5e8f\u6570\u636e\u7684\u7279\u5f81"},"\u65f6\u5e8f\u6570\u636e\u7684\u7279\u5f81"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u6570\u636e\u987a\u5e8f\u8ffd\u52a0\n\n\u5f88\u5c11\u4fee\u6539/\u5220\u9664, \u53ea\u6709\u589e\u52a0/\u67e5\u8be2, \u5220\u9664\u4e5f\u662f\u6279\u91cf\u5220\u9664\n\n\u51b7\u6570\u636e\u9700\u8981\u5b9a\u671f\u5f52\u6863\n\n\u6570\u636e\u67e5\u8be2\u4e00\u822c\u4ee5\u4e00\u6bb5\u65f6\u95f4\u4e3a\u8303\u56f4\n\n\u4e1a\u52a1\u64cd\u4f5c\u4e0d\u9700\u8981\u5177\u5907\u4e8b\u52a1\u7684\u80fd\u529b\n")),(0,l.kt)("h3",{id:"\u5f00\u6e90\u65b9\u6848"},"\u5f00\u6e90\u65b9\u6848"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"OpenTSDB ,\u5e95\u5c42\u91c7\u7528HBase\u4f5c\u4e3a\u5b58\u50a8")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Prometheus, \u4fdd\u5b58\u5728\u5185\u5b58\u6570\u636e\u5e93\u4e2d\uff0c\u5e76\u4e14\u5b9a\u65f6\u4fdd\u5b58\u5230\u786c\u76d8\u4e0a\u3002\u9700\u8981\u8fdc\u7aef\u5b58\u50a8\u6765\u4fdd\u8bc1\u53ef\u9760\u548c\u6269\u5c55\u6027"),(0,l.kt)("p",{parentName:"li"},"  Promethues\u7684\u7ec4\u5408\u6709\uff1aexporter+prometheus server+AlertManager+Grafana")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"InfluxDB, \u5355\u673a\u5f00\u6e90\u7684\u65f6\u5e8f\u6570\u636e\u5e93,\u7531Go\u8bed\u8a00\u7f16\u5199, \u5206\u5e03\u5f0f\u9700\u8981\u4ed8\u8d39, \u901a\u8fc7 grafana \u8fdb\u884c\u4eea\u8868\u76d8\u5c55\u793a"),(0,l.kt)("p",{parentName:"li"},"  Influxdata\u7684\u7ec4\u5408\u6709\uff1atelegraf+Influxdb+Kapacitor+Chronograf")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Timescale, \u56fa\u5b9aSchema\uff0c\u5e95\u5c42\u57fa\u4e8ePG"))),(0,l.kt)("h3",{id:"influxdb-\u548c-promethus-\u533a\u522b"},"influxdb \u548c promethus \u533a\u522b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\nInfluxDB\u4ec5\u4ec5\u662f\u4e00\u4e2a\u6570\u636e\u5e93, \u4f7f\u7528\u4e0a\u66f4\u7075\u6d3b,  \u6709\u7c7b\u4f3c Mysql \u4e2d\u6570\u636e\u5e93, \u8868\u7684\u6982\u5ff5\n\u800c Prometheus \u662f\u4e00\u4e2a\u9644\u5e26\u6570\u636e\u5e93\u7684\u76d1\u63a7\u7cfb\u7edf\uff0c\u5b83\u4e0d\u4ec5\u4ec5\u5305\u542b\u4e86\u65f6\u95f4\u5e8f\u5217\u6570\u636e\u5e93\uff0c\u8fd8\u6709\u7684\u6293\u53d6\u3001\u68c0\u7d22\u3001\u7ed8\u56fe\u3001\u62a5\u8b66\u7684\u529f\u80fd\n\n Prometheus \u662f\u57fa\u4e8e pull \u7684\uff0cInfluxDB \u662f\u57fa\u4e8e push \u7684\n\n\n\n\n\n")),(0,l.kt)("h2",{id:"\u6838\u5fc3\u6982\u5ff5"},"\u6838\u5fc3\u6982\u5ff5"),(0,l.kt)("h3",{id:"\u6570\u636e\u5e93"},"\u6570\u636e\u5e93"),(0,l.kt)("p",null,"\u7528\u6237\u53ef\u4ee5\u901a\u8fc7create database xxx\u6765\u521b\u5efa\u4e00\u4e2a\u6570\u636e\u5e93"),(0,l.kt)("h3",{id:"retention-policyrp-\u6570\u636e\u4fdd\u7559\u7b56\u7565"},"Retention Policy\uff08RP\uff09 \u6570\u636e\u4fdd\u7559\u7b56\u7565"),(0,l.kt)("p",null,"\u6838\u5fc3\u4f5c\u7528\u67093\u4e2a\uff1a\u6307\u5b9a\u6570\u636e\u7684\u8fc7\u671f\u65f6\u95f4\uff0c\u6307\u5b9a\u6570\u636e\u526f\u672c\u6570\u91cf\u4ee5\u53ca\u6307\u5b9aShardGroup Duration\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"RP\u662f\u6570\u636e\u5e93\u7ea7\u522b\u800c\u4e0d\u662f\u8868\u7ea7\u522b\u7684\u5c5e\u6027\u3002\u8fd9\u548c\u5f88\u591a\u6570\u636e\u5e93\u90fd\u4e0d\u540c\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u6bcf\u4e2a\u6570\u636e\u5e93\u53ef\u4ee5\u6709\u591a\u4e2a\u6570\u636e\u4fdd\u7559\u7b56\u7565\uff0c\u4f46\u53ea\u80fd\u6709\u4e00\u4e2a\u9ed8\u8ba4\u7b56\u7565\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u4e0d\u540c\u8868\u53ef\u4ee5\u6839\u636e\u4fdd\u7559\u7b56\u7565\u89c4\u5212\u5728\u5199\u5165\u6570\u636e\u7684\u65f6\u5019\u6307\u5b9aRP\u8fdb\u884c\u5199\u5165, \u5982\u679c\u6ca1\u6709\u6307\u5b9a\u4efb\u4f55RP\uff0c\u5219\u4f7f\u7528\u9ed8\u8ba4\u7684RP\u3002"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'\n# \u521b\u5efa\u8bed\u6cd5\n# \u5176\u4e2dretention_policy_name\u8868\u793aRP\u7684\u540d\u79f0\uff0cdatabase_name\u8868\u793a\u6570\u636e\u5e93\u540d\u79f0\uff0cduration\u8868\u793aTTL\uff0cn\u8868\u793a\u6570\u636e\u526f\u672c\u6570\u3002\n# CREATE RETENTION POLICY ON <retention_policy_name> ON <database_name> DURATION <duration> REPLICATION <n> [SHARD DURATION <duration> ] [DEFAULT]\nCREATE RETENTION POLICY "one_day_only" ON "water_database" DURATION 1d REPLICATION 1 SHARD DURATION 1h DEFAULT \n\n\n\n')),(0,l.kt)("h3",{id:"shard-group-\u6570\u636e\u5207\u7247\u7ec4"},"Shard Group \u6570\u636e\u5207\u7247\u7ec4"),(0,l.kt)("p",null,"\u5b9e\u73b0\u4e86\u6570\u636e\u5206\u533a, \u6839\u636e timestamp, \u6bcf\u4e2aShard Group\u53ea\u5b58\u50a8\u6307\u5b9a\u65f6\u95f4\u6bb5\u7684\u6570\u636e."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u53ea\u662f\u4e00\u4e2a\u903b\u8f91\u6982\u5ff5, \u91cc\u9762\u5305\u542b\u4e86\u5927\u91cfShard\uff0cShard\u624d\u662fInfluxDB\u4e2d\u771f\u6b63\u5b58\u50a8\u6570\u636e\u4ee5\u53ca\u63d0\u4f9b\u8bfb\u5199\u670d\u52a1\u7684\u6982\u5ff5\n\u4e0d\u540cShard Group\u5bf9\u5e94\u7684\u65f6\u95f4\u6bb5\u4e0d\u4f1a\u91cd\u5408\u3002\u6bd4\u59822017\u5e749\u6708\u4efd\u7684\u6570\u636e\u843d\u5728Shard Group0\u4e0a\uff0c2017\u5e7410\u6708\u4efd\u7684\u6570\u636e\u843d\u5728Shard Group1\u4e0a\u3002\n\u6bcf\u4e2aShard Group\u5bf9\u5e94\u591a\u957f\u65f6\u95f4\u662f\u901a\u8fc7Retention Policy\u4e2d\u5b57\u6bb5\u201dSHARD DURATION\u201d\u6307\u5b9a\u7684\uff0c\u5982\u679c\u6ca1\u6709\u6307\u5b9a\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7Retention Duration\uff08\u6570\u636e\u8fc7\u671f\u65f6\u95f4\uff09\u8ba1\u7b97\u51fa\u6765")),(0,l.kt)("p",null,"\u4e3a\u4ec0\u4e48\u9700\u8981\u5c06\u6570\u636e\u6309\u7167\u65f6\u95f4\u5206\u6210\u4e00\u4e2a\u4e00\u4e2aShard Group? "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5c06\u6570\u636e\u6309\u7167\u65f6\u95f4\u5206\u5272\u6210\u5c0f\u7684\u7c92\u5ea6\u4f1a\u4f7f\u5f97\u6570\u636e\u8fc7\u671f\u5b9e\u73b0\u975e\u5e38\u7b80\u5355\uff0cInfluxDB\u4e2d\u6570\u636e\u8fc7\u671f\u5220\u9664\u7684\u6267\u884c\u7c92\u5ea6\u5c31\u662fShard Group\uff0c\u7cfb\u7edf\u4f1a\u5bf9\u6bcf\u4e00\u4e2aShard Group\u5224\u65ad\u662f\u5426\u8fc7\u671f\uff0c\u800c\u4e0d\u662f\u4e00\u6761\u4e00\u6761\u8bb0\u5f55\u5224\u65ad\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5b9e\u73b0\u4e86\u5c06\u6570\u636e\u6309\u7167\u65f6\u95f4\u5206\u533a\u7684\u7279\u6027, \u67e5\u8be2\u662f\u6548\u7387\u9ad8, \u7c7b\u4f3c\u4e8c\u5206\u67e5\u627e"))),(0,l.kt)("p",null,"\u843d\u5728\u4e00\u4e2aShard Group\u4e2d\u7684\u6570\u636e\u53c8\u662f\u5982\u4f55\u6620\u5c04\u5230\u54ea\u4e2aShard\u4e0a\u5462\uff1f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"InfluxDB\u662f\u6839\u636ehash(Series)\u5c06\u65f6\u5e8f\u6570\u636e\u6620\u5c04\u5230\u4e0d\u540c\u7684Shard\uff0c\u800c\u4e0d\u662f\u6839\u636eMeasurement\u8fdb\u884chash\u6620\u5c04\uff0c\u8fd9\u6837\u4f1a\u4f7f\u5f97\u76f8\u540cSeries\u7684\u6570\u636e\u80af\u5b9a\u4f1a\u5b58\u5728\u540c\u4e00\u4e2aShard\u4e2d\uff0c\u4f46\u8fd9\u6837\u7684\u6620\u5c04\u7b56\u7565\u4f1a\u4f7f\u5f97\u4e00\u4e2aShard\u4e2d\u5305\u542b\u591a\u4e2aMeasurement\u7684\u6570\u636e")),(0,l.kt)("h2",{id:"\u6570\u636e\u6a21\u578b"},"\u6570\u636e\u6a21\u578b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\n- \u5ea6\u91cf Metric \u6216\u8005 Measurement, \u7c7b\u4f3c\u5173\u7cfb\u578b\u6570\u636e\u5e93\u91cc\u7684\u8868\uff08Table\uff09\uff0c\u4ee3\u8868\u4e00\u7cfb\u5217\u540c\u7c7b\u65f6\u5e8f\u6570\u636e\u7684\u96c6\u5408\n\n  \u4f8b\u5982\u4e3a\u7a7a\u6c14\u8d28\u91cf\u4f20\u611f\u5668\u5efa\u7acb\u4e00\u4e2a Table\uff0c\u5b58\u50a8\u6240\u6709\u4f20\u611f\u5668\u7684\u76d1\u6d4b\u6570\u636e\u3002\n\n- \u6807\u7b7e Tag\uff1a\u63cf\u8ff0\u6570\u636e\u6e90\u7684\u7279\u5f81\uff0c\u901a\u5e38\u4e0d\u968f\u65f6\u95f4\u53d8\u5316\n\n  (Tag \u7531 Tag Key\u3001Tag Value \u7ec4\u6210\uff0c\u4e24\u8005\u5747\u4e3a String \u7c7b\u578b), \n  \n  \u53ef\u7c7b\u6bd4\u52a0\u4e0a\u7d22\u5f15\u7684\u8868\u5b57\u6bb5 (\u53ef\u80fd\u591a\u4e2a\u5b57\u6bb5\u90fd\u662f tag), \u4f1a\u4f5c\u4e3a\u8bb0\u5f55\u7684\u4e3b\u952e, Tags\u7ec4\u5408\u7528\u6765\u552f\u4e00\u6807\u8bc6 metric\n\n- \u65f6\u95f4\u6233 Timestamp\uff1aTimestamp\u4ee3\u8868\u6570\u636e\u4ea7\u751f\u7684\u65f6\u95f4\u70b9\uff0c\u53ef\u4ee5\u5199\u5165\u65f6\u6307\u5b9a\uff0c\u4e5f\u53ef\u7531\u7cfb\u7edf\u81ea\u52a8\u751f\u6210\uff1b\n\n  \u7c7b\u6bd4\u8868\u5b57\u6bb5, \u63d2\u5165\u4e00\u6761\u8bb0\u5f55, \u53d8\u5316\u4e00\u4e2a\u503c\n\n- \u91cf\u6d4b\u503c Field\uff1aField\u63cf\u8ff0\u6570\u636e\u6e90\u7684\u91cf\u6d4b\u6307\u6807\uff0c\u901a\u5e38\u968f\u7740\u65f6\u95f4\u4e0d\u65ad\u53d8\u5316\uff0c\u7c7b\u6bd4 MySQL \u7684 \u8868\u5b57\u6bb5\n\n  \u4f8b\u5982\u4f20\u611f\u5668\u8bbe\u5907\u5305\u542b\u6e29\u5ea6\u3001\u6e7f\u5ea6\u7b49Field\uff1b\n\n  \u7c7b\u6bd4\u8868\u5b57\u6bb5\n\n- \u6570\u636e\u70b9Data Point: \u6570\u636e\u6e90\u5728\u67d0\u4e2a\u65f6\u95f4\u4ea7\u751f\u7684\u67d0\u4e2a\u91cf\u6d4b\u6307\u6807\u503c\uff08Field Value\uff09\u79f0\u4e3a\u4e00\u4e2a\u6570\u636e\u70b9\uff0c\n\n  \u7c7b\u4f3c \u4f20\u7edf\u8868\u7684\u4e00\u884c\u8bb0\u5f55\n\n  \u6570\u636e\u5e93\u67e5\u8be2\u3001\u5199\u5165\u65f6\u6309\u6570\u636e\u70b9\u6570\u6765\u4f5c\u4e3a\u7edf\u8ba1\u6307\u6807\uff1b\n\n- \u65f6\u95f4\u7ebf Time Series \uff1a\u6570\u636e\u6e90\u7684\u67d0\u4e00\u4e2a\u6307\u6807\u968f\u65f6\u95f4\u53d8\u5316\uff0c\u5f62\u6210\u65f6\u95f4\u7ebf\uff0cMetric + Tags + \u67d0\u4e2aField \u7ec4\u5408\u786e\u5b9a\u4e00\u6761\u65f6\u95f4\u7ebf\n\n\n")),(0,l.kt)("p",null,"\u65f6\u5e8f\u67e5\u8be2\u4e00\u822c\u662f\u8fd9\u6837: \u901a\u8fc7 metric + tags \u786e\u5b9a \u67e5\u90a3\u4e2a\u6570\u636e\u6e90\u7684 series (\u65f6\u95f4\u7ebf), \u901a\u8fc7 field \u786e\u5b9a\u67e5\u6570\u636e\u6e90\u7684\u54ea\u4e2a\u5c5e\u6027\u7684\u65f6\u95f4\u7ebf"),(0,l.kt)("h1",{id:"prometheus"},"prometheus"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/thanos-io/thanos"},"https://github.com/thanos-io/thanos")," \u96c6\u7fa4\u90e8\u7f72"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/ccfos/nightingale"},"https://github.com/ccfos/nightingale")," \u66ff\u4ee3"),(0,l.kt)("h1",{id:"hbase"},"hbase"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://zhuanlan.zhihu.com/p/37964096"},"https://zhuanlan.zhihu.com/p/37964096")," \u5bf9\u6bd4\u9009\u578b"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://zhuanlan.zhihu.com/p/145551967"},"https://zhuanlan.zhihu.com/p/145551967")," \u7b80\u4ecb"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://zhuanlan.zhihu.com/p/65994704"},"https://zhuanlan.zhihu.com/p/65994704")))}c.isMDXComponent=!0}}]);