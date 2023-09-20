"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1906],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return h}});var a=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=a.createContext({}),p=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=p(e.components);return a.createElement(o.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=p(t),h=l,c=d["".concat(o,".").concat(h)]||d[h]||m[h]||r;return t?a.createElement(c,i(i({ref:n},s),{},{components:t})):a.createElement(c,i({ref:n},s))}));function h(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=d;var u={};for(var o in n)hasOwnProperty.call(n,o)&&(u[o]=n[o]);u.originalType=e,u.mdxType="string"==typeof e?e:l,i[1]=u;for(var p=2;p<r;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},22115:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return o},default:function(){return h},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return m}});var a=t(83117),l=t(80102),r=(t(67294),t(3905)),i=["components"],u={title:"monitor-system-grafana-prometheus\u76d1\u63a7\ud83d\udda5",tags:["grafana","prometheus","influxdb","clickhouse"],date:new Date("2020-10-03T00:00:00.000Z"),toc_min_heading_level:2,toc_max_heading_level:5},o=void 0,p={unversionedId:"monitor-system-grafana-prometheus-influxdb-hbase-time-serials-database",id:"monitor-system-grafana-prometheus-influxdb-hbase-time-serials-database",title:"monitor-system-grafana-prometheus\u76d1\u63a7\ud83d\udda5",description:"https://github.com/questdb/questdb java \u65f6\u5e8f\u6570\u636e\u5e93",source:"@site/docs/monitor-system-grafana-prometheus-influxdb-hbase-time-serials-database.md",sourceDirName:".",slug:"/monitor-system-grafana-prometheus-influxdb-hbase-time-serials-database",permalink:"/en/docs/monitor-system-grafana-prometheus-influxdb-hbase-time-serials-database",draft:!1,tags:[{label:"grafana",permalink:"/en/docs/tags/grafana"},{label:"prometheus",permalink:"/en/docs/tags/prometheus"},{label:"influxdb",permalink:"/en/docs/tags/influxdb"},{label:"clickhouse",permalink:"/en/docs/tags/clickhouse"}],version:"current",frontMatter:{title:"monitor-system-grafana-prometheus\u76d1\u63a7\ud83d\udda5",tags:["grafana","prometheus","influxdb","clickhouse"],date:"2020-10-03T00:00:00.000Z",toc_min_heading_level:2,toc_max_heading_level:5},sidebar:"tutorialSidebar",previous:{title:"MongoDB Notes\ud83c\udf08",permalink:"/en/docs/mongodb-note"},next:{title:"MVC to MVVM",permalink:"/en/docs/mvc-mvvm"}},s={},m=[{value:"\u4e3a\u4ec0\u4e48\u4f7f\u7528 influxdb",id:"\u4e3a\u4ec0\u4e48\u4f7f\u7528-influxdb",level:2},{value:"\u4ec0\u4e48\u662f\u65f6\u5e8f\u6570\u636e\u5e93",id:"\u4ec0\u4e48\u662f\u65f6\u5e8f\u6570\u636e\u5e93",level:2},{value:"\u65f6\u5e8f\u6570\u636e\u7684\u7279\u5f81",id:"\u65f6\u5e8f\u6570\u636e\u7684\u7279\u5f81",level:3},{value:"\u5f00\u6e90\u65b9\u6848",id:"\u5f00\u6e90\u65b9\u6848",level:3},{value:"influxdb \u548c promethus \u533a\u522b",id:"influxdb-\u548c-promethus-\u533a\u522b",level:3},{value:"\u6838\u5fc3\u6570\u636e\u6a21\u578b",id:"\u6838\u5fc3\u6570\u636e\u6a21\u578b",level:2},{value:"\u6570\u636e\u7c7b\u578b",id:"\u6570\u636e\u7c7b\u578b",level:2},{value:"Retention Policy\uff08RP\uff09 \u6570\u636e\u4fdd\u7559\u7b56\u7565",id:"retention-policyrp-\u6570\u636e\u4fdd\u7559\u7b56\u7565",level:2},{value:"Shard Group \u6570\u636e\u5207\u7247\u7ec4",id:"shard-group-\u6570\u636e\u5207\u7247\u7ec4",level:2},{value:"\u6307\u4ee4\u8bed\u6cd5",id:"\u6307\u4ee4\u8bed\u6cd5",level:2},{value:"\u7ba1\u7406\u76f8\u5173\u547d\u4ee4",id:"\u7ba1\u7406\u76f8\u5173\u547d\u4ee4",level:3},{value:"\u5199\u5165\u8bed\u6cd5",id:"\u5199\u5165\u8bed\u6cd5",level:3},{value:"\u67e5\u8be2\u8bed\u6cd5",id:"\u67e5\u8be2\u8bed\u6cd5",level:3},{value:"\u57fa\u672c\u8ba1\u7b97",id:"\u57fa\u672c\u8ba1\u7b97",level:3},{value:"aggregation\u805a\u5408\u51fd\u6570",id:"aggregation\u805a\u5408\u51fd\u6570",level:3},{value:"\u9009\u62e9\u51fd\u6570",id:"\u9009\u62e9\u51fd\u6570",level:3},{value:"continuous query\uff08\u8fde\u7eed\u67e5\u8be2\uff0c\u7b80\u79f0CQ\uff09",id:"continuous-query\u8fde\u7eed\u67e5\u8be2\u7b80\u79f0cq",level:3},{value:"\u63d2\u5165\u6570\u636e",id:"\u63d2\u5165\u6570\u636e",level:3}],d={toc:m};function h(e){var n=e.components,t=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/questdb/questdb"},"https://github.com/questdb/questdb")," java \u65f6\u5e8f\u6570\u636e\u5e93"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Kalasearch/grafana-tutorial"},"https://github.com/Kalasearch/grafana-tutorial")," ",(0,r.kt)("a",{parentName:"p",href:"https://kalasearch.cn/blog/grafana-with-prometheus-tutorial/"},"https://kalasearch.cn/blog/grafana-with-prometheus-tutorial/"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://lingchu.me/post/158.html"},"https://lingchu.me/post/158.html"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://www.cnblogs.com/williamjie/p/9448904.html"},"https://www.cnblogs.com/williamjie/p/9448904.html")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://coolshell.cn/articles/21589.html"},"https://coolshell.cn/articles/21589.html")," \u9648\u6d69 \u5206\u4eab"),(0,r.kt)("p",null,"K8s, Kafka, prometheus, grafana, splunk"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#spring-boot-actuator-%E6%95%B4%E5%90%88-prometheus"},"Spring Boot Actuator \u6574\u5408 Prometheus")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#grafana"},"grafana")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#influxdb%E5%BA%8F%E6%95%B0%E6%8D%AE%E5%BA%93"},"influxdb\u5e8f\u6570\u636e\u5e93"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%E4%B8%BA%E4%BB%80%E4%B9%88%E4%BD%BF%E7%94%A8-influxdb"},"\u4e3a\u4ec0\u4e48\u4f7f\u7528 influxdb")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%E4%BB%80%E4%B9%88%E6%98%AF%E6%97%B6%E5%BA%8F%E6%95%B0%E6%8D%AE%E5%BA%93"},"\u4ec0\u4e48\u662f\u65f6\u5e8f\u6570\u636e\u5e93"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%E6%97%B6%E5%BA%8F%E6%95%B0%E6%8D%AE%E7%9A%84%E7%89%B9%E5%BE%81"},"\u65f6\u5e8f\u6570\u636e\u7684\u7279\u5f81")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%E5%BC%80%E6%BA%90%E6%96%B9%E6%A1%88"},"\u5f00\u6e90\u65b9\u6848")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#influxdb-%E5%92%8C-promethus-%E5%8C%BA%E5%88%AB"},"influxdb \u548c promethus \u533a\u522b")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%E6%A0%B8%E5%BF%83%E6%95%B0%E6%8D%AE%E6%A8%A1%E5%9E%8B"},"\u6838\u5fc3\u6570\u636e\u6a21\u578b")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B"},"\u6570\u636e\u7c7b\u578b")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#retention-policyrp-%E6%95%B0%E6%8D%AE%E4%BF%9D%E7%95%99%E7%AD%96%E7%95%A5"},"Retention Policy\uff08RP\uff09 \u6570\u636e\u4fdd\u7559\u7b56\u7565")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#shard-group-%E6%95%B0%E6%8D%AE%E5%88%87%E7%89%87%E7%BB%84"},"Shard Group \u6570\u636e\u5207\u7247\u7ec4")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%E6%8C%87%E4%BB%A4%E8%AF%AD%E6%B3%95"},"\u6307\u4ee4\u8bed\u6cd5"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%E7%AE%A1%E7%90%86%E7%9B%B8%E5%85%B3%E5%91%BD%E4%BB%A4"},"\u7ba1\u7406\u76f8\u5173\u547d\u4ee4")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%E5%86%99%E5%85%A5%E8%AF%AD%E6%B3%95"},"\u5199\u5165\u8bed\u6cd5")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%E6%9F%A5%E8%AF%A2%E8%AF%AD%E6%B3%95"},"\u67e5\u8be2\u8bed\u6cd5")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%E5%9F%BA%E6%9C%AC%E8%AE%A1%E7%AE%97"},"\u57fa\u672c\u8ba1\u7b97")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#aggregation%E8%81%9A%E5%90%88%E5%87%BD%E6%95%B0"},"aggregation\u805a\u5408\u51fd\u6570")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%E9%80%89%E6%8B%A9%E5%87%BD%E6%95%B0"},"\u9009\u62e9\u51fd\u6570")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#continuous-query%E8%BF%9E%E7%BB%AD%E6%9F%A5%E8%AF%A2%E7%AE%80%E7%A7%B0cq"},"continuous query\uff08\u8fde\u7eed\u67e5\u8be2\uff0c\u7b80\u79f0CQ\uff09")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%E6%8F%92%E5%85%A5%E6%95%B0%E6%8D%AE"},"\u63d2\u5165\u6570\u636e")))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#prometheus"},"prometheus")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#hbase"},"hbase")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#clickhouse"},"Clickhouse"))),(0,r.kt)("h1",{id:"spring-boot-actuator-\u6574\u5408-prometheus"},"Spring Boot Actuator \u6574\u5408 Prometheus"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/MWQImwMhcFglmHZ4lIcxVA"},"https://mp.weixin.qq.com/s/MWQImwMhcFglmHZ4lIcxVA")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/wkfIQc3IQD_6y7eCsGd_Rw"},"https://mp.weixin.qq.com/s/wkfIQc3IQD_6y7eCsGd_Rw")," AlertManager"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/40ULB9UWbXVA21MxqnjBxw"},"https://mp.weixin.qq.com/s/40ULB9UWbXVA21MxqnjBxw")," Node Exporter"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/GImvM_F2XlMjO0a5xnJuFg"},"https://mp.weixin.qq.com/s/GImvM_F2XlMjO0a5xnJuFg")),(0,r.kt)("h1",{id:"grafana"},"grafana"),(0,r.kt)("p",null,"ELK + Telegraf + Grafana\n\u63a8\u8350 ELK\uff0c\u753b\u56fe\u8fd9\u5757\u53ef\u4ee5\u770b Grafana \u770b\u80fd\u4e0d\u80fd\u6ee1\u8db3\uff0c\u4e0d\u884c\u7684\u8bdd\u81ea\u5df1\u5199\u4e5f\u53ef\u4ee5\uff0cES \u6709 API, \u6211\u4eec\u5b9e\u73b0\u7684\u4e00\u4e9b\u601d\u8def\uff0c\u53ef\u4ee5\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"https://blog.ops-coffee.cn/elk"},"https://blog.ops-coffee.cn/elk")),(0,r.kt)("h1",{id:"influxdb\u5e8f\u6570\u636e\u5e93"},"influxdb\u5e8f\u6570\u636e\u5e93"),(0,r.kt)("h2",{id:"\u4e3a\u4ec0\u4e48\u4f7f\u7528-influxdb"},"\u4e3a\u4ec0\u4e48\u4f7f\u7528 influxdb"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\n\u4e3a\u4ec0\u4e48\u8981\u4f7f\u7528\u65f6\u5e8f\u6570\u636e\u5e93, \u666e\u901a\u7684\u5173\u7cfb\u578b\u6570\u636e\u5e93\u4e0d\u884c\u5417?\n\n  \u7528\u5176\u4ed6\u6570\u636e\u5e93\u4e5f\u662f\u53ef\u4ee5\u7528\u7684\uff0c\u53ea\u662f\u6548\u7387\u4e0d\u540c, \u4e13\u95e8\u9488\u5bf9\u57fa\u4e8e\u65f6\u95f4\u7684\u5927\u91cf\u9ad8\u9891\u6570\u636e\u4f18\u5316\u7684\uff0c\u5176\u5b58\u50a8\u66f4\u5c0f\u3001\u67e5\u8be2\u66f4\u5feb\n\n\u4f7f\u7528\u573a\u666f: \n\u7528\u4e8e \u76d1\u63a7\u573a\u666f\u6bd4\u5982: \u7269\u8054\u7f51\u7cfb\u7edf\u8bb0\u5f55\u8bbe\u5907\u8fd0\u884c\u6570\u636e, \u4e92\u8054\u7f51\u5e94\u7528\u8bb0\u5f55\u7528\u6237\u4f7f\u7528\u65e5\u5fd7, \u5e7f\u544a\u70b9\u51fb\u65e5\u5fd7, \u7535\u5546\u7684\u4ea4\u6613\u8bb0\u5f55\n\n\u4e13\u95e8\u5904\u7406\u9ad8\u5199\u5165\u548c\u67e5\u8be2\u8d1f\u8f7d\u7684\u65f6\u5e8f\u6570\u636e\u5e93\uff0c\u7528\u4e8e\u5b58\u50a8\u5927\u89c4\u6a21\u7684\u65f6\u5e8f\u6570\u636e\u5e76\u8fdb\u884c\u5b9e\u65f6\u5206\u6790\uff0c\u5305\u62ec\u6765\u81eaDevOps\u76d1\u63a7\u3001\u5e94\u7528\u6307\u6807\u548cIoT\u4f20\u611f\u5668\u4e0a\u7684\u6570\u636e\u3002\n\n\n")),(0,r.kt)("h2",{id:"\u4ec0\u4e48\u662f\u65f6\u5e8f\u6570\u636e\u5e93"},"\u4ec0\u4e48\u662f\u65f6\u5e8f\u6570\u636e\u5e93"),(0,r.kt)("h3",{id:"\u65f6\u5e8f\u6570\u636e\u7684\u7279\u5f81"},"\u65f6\u5e8f\u6570\u636e\u7684\u7279\u5f81"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u6570\u636e\u987a\u5e8f\u8ffd\u52a0\n\n\u5f88\u5c11\u4fee\u6539/\u5220\u9664, \u53ea\u6709\u589e\u52a0/\u67e5\u8be2, \u5220\u9664\u4e5f\u662f\u6279\u91cf\u5220\u9664\n\n\u51b7\u6570\u636e\u9700\u8981\u5b9a\u671f\u5f52\u6863\n\n\u6570\u636e\u67e5\u8be2\u4e00\u822c\u4ee5\u4e00\u6bb5\u65f6\u95f4\u4e3a\u8303\u56f4\n\n\u4e1a\u52a1\u64cd\u4f5c\u4e0d\u9700\u8981\u5177\u5907\u4e8b\u52a1\u7684\u80fd\u529b\n")),(0,r.kt)("h3",{id:"\u5f00\u6e90\u65b9\u6848"},"\u5f00\u6e90\u65b9\u6848"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"OpenTSDB ,\u5e95\u5c42\u91c7\u7528HBase\u4f5c\u4e3a\u5b58\u50a8")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Prometheus, \u4fdd\u5b58\u5728\u5185\u5b58\u6570\u636e\u5e93\u4e2d\uff0c\u5e76\u4e14\u5b9a\u65f6\u4fdd\u5b58\u5230\u786c\u76d8\u4e0a\u3002\u9700\u8981\u8fdc\u7aef\u5b58\u50a8\u6765\u4fdd\u8bc1\u53ef\u9760\u548c\u6269\u5c55\u6027"),(0,r.kt)("p",{parentName:"li"},"  Promethues\u7684\u7ec4\u5408\u6709\uff1aexporter+prometheus server+AlertManager+Grafana")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"InfluxDB, \u5355\u673a\u5f00\u6e90\u7684\u65f6\u5e8f\u6570\u636e\u5e93,\u7531Go\u8bed\u8a00\u7f16\u5199, \u5206\u5e03\u5f0f\u9700\u8981\u4ed8\u8d39, \u901a\u8fc7 grafana \u8fdb\u884c\u4eea\u8868\u76d8\u5c55\u793a"),(0,r.kt)("p",{parentName:"li"},"  Influxdata\u7684\u7ec4\u5408\u6709\uff1atelegraf+Influxdb+Kapacitor+Chronograf")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Timescale, \u56fa\u5b9aSchema\uff0c\u5e95\u5c42\u57fa\u4e8ePG")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Clickhouse"))),(0,r.kt)("h3",{id:"influxdb-\u548c-promethus-\u533a\u522b"},"influxdb \u548c promethus \u533a\u522b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\nInfluxDB\u4ec5\u4ec5\u662f\u4e00\u4e2a\u6570\u636e\u5e93, \u4f7f\u7528\u4e0a\u66f4\u7075\u6d3b,  \u6709\u7c7b\u4f3c Mysql \u4e2d\u6570\u636e\u5e93, \u8868\u7684\u6982\u5ff5\n\u800c Prometheus \u662f\u4e00\u4e2a\u9644\u5e26\u6570\u636e\u5e93\u7684\u76d1\u63a7\u7cfb\u7edf\uff0c\u5b83\u4e0d\u4ec5\u4ec5\u5305\u542b\u4e86\u65f6\u95f4\u5e8f\u5217\u6570\u636e\u5e93\uff0c\u8fd8\u6709\u7684\u6293\u53d6\u3001\u68c0\u7d22\u3001\u7ed8\u56fe\u3001\u62a5\u8b66\u7684\u529f\u80fd\n\n Prometheus \u662f\u57fa\u4e8e pull \u7684\uff0cInfluxDB \u662f\u57fa\u4e8e push \u7684\n\n\n\n\n\n")),(0,r.kt)("h2",{id:"\u6838\u5fc3\u6570\u636e\u6a21\u578b"},"\u6838\u5fc3\u6570\u636e\u6a21\u578b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"\n\n- database\uff1a\u6570\u636e\u5e93\n\n\n\n- \u5ea6\u91cf \uff08Metric \u6216\u8005 Measurement\uff09, \u7c7b\u4f3c\u5173\u7cfb\u578b\u6570\u636e\u5e93\u91cc\u7684\u8868\uff08Table\uff09\uff0c\u4ee3\u8868\u4e00\u7cfb\u5217\u540c\u7c7b\u65f6\u5e8f\u6570\u636e\u7684\u96c6\u5408\n\n  \u4f8b\u5982\u4e3a\u7a7a\u6c14\u8d28\u91cf\u4f20\u611f\u5668\u5efa\u7acb\u4e00\u4e2a Table\uff0c\u5b58\u50a8\u6240\u6709\u4f20\u611f\u5668\u968f\u65f6\u95f4\u53d8\u5316\u7684\u76d1\u6d4b\u6570\u636e\u3002\n\n\n\n- \u6570\u636e\u70b9Data Point: \u6570\u636e\u6e90\u5728\u67d0\u4e2a\u65f6\u95f4\u4ea7\u751f\u7684\u67d0\u4e2a\u91cf\u6d4b\u6307\u6807\u503c\uff08Field Value\uff09\u79f0\u4e3a\u4e00\u4e2a\u6570\u636e\u70b9\uff0c\n\n  \u7c7b\u4f3c \u4f20\u7edf\u8868\u7684\u4e00\u884c\u8bb0\u5f55\n\n    \u6709\u4e09\u4e2a\u7ec4\u6210\u90e8\u5206:\n\n    - \u6807\u7b7e Tag\uff1a\u63cf\u8ff0\u6570\u636e\u6e90\u7684\u7279\u5f81\uff0c\u4e0d\u968f\u65f6\u95f4\u53d8\u5316\n\n        (Tag \u7531 Tag Key\u3001Tag Value \u7ec4\u6210\uff0c\u4e24\u8005\u5747\u4e3a String \u7c7b\u578b), \n    \n        \u53ef\u7c7b\u6bd4\u4e3b\u952e\u7d22\u5f15 (\u503c\u4e3a\u5e38\u91cf\u7684\u8868\u5b57\u6bb5) (\u53ef\u80fd\u591a\u4e2a\u5b57\u6bb5\u90fd\u662f tag), \u4f1a\u4f5c\u4e3a\u8bb0\u5f55\u7684\u4e3b\u952e, Tags\u7ec4\u5408\u7528\u6765\u552f\u4e00\u6807\u8bc6 metric\n\n\n    - \u65f6\u95f4\u6233 Timestamp\uff1aTimestamp\u4ee3\u8868\u6570\u636e\u4ea7\u751f\u7684\u65f6\u95f4\u70b9\uff0c\u53ef\u4ee5\u5199\u5165\u65f6\u6307\u5b9a\uff0c\u4e5f\u53ef\u7531\u7cfb\u7edf\u81ea\u52a8\u751f\u6210\uff1b\n\n        \u7c7b\u6bd4\u8868\u5b57\u6bb5\uff0c \u6709\u56fa\u5b9a\u5b57\u6bb5\u540d \u201dtime\u201c\n\n        \u6240\u6709\u65f6\u95f4\u683c\u5f0f\u90fd\u662fUTC \uff082015-08-18T00:00:00Z\uff09\n\n    - \u91cf\u6d4b\u503c Field\uff1aField\u63cf\u8ff0\u6570\u636e\u6e90\u7684\u91cf\u6d4b\u6307\u6807\uff0c\u901a\u5e38\u968f\u7740\u65f6\u95f4\u4e0d\u65ad\u53d8\u5316\n\n        \u4f8b\u5982\u4f20\u611f\u5668\u8bbe\u5907\u5305\u542b\u6e29\u5ea6\u3001\u6e7f\u5ea6\u7b49Field\uff1b\n\n        \u7c7b\u6bd4\u8868\u5b57\u6bb5\n\n\n- \u65f6\u95f4\u7ebf Time Series \uff1a\u6570\u636e\u6e90\u7684\u67d0\u4e00\u4e2a\u6307\u6807\u968f\u65f6\u95f4\u53d8\u5316\uff0c\u5f62\u6210\u65f6\u95f4\u7ebf\uff0cMetric + Tags + \u67d0\u4e2aField \u7ec4\u5408\u786e\u5b9a\u4e00\u6761\u65f6\u95f4\u7ebf\n\n\n    \u65f6\u5e8f\u67e5\u8be2\u4e00\u822c\u662f\u8fd9\u6837: \u901a\u8fc7 metric + tags \u786e\u5b9a \u67e5\u90a3\u4e2a\u6570\u636e\u6e90\u7684 series (\u65f6\u95f4\u7ebf), \u901a\u8fc7 field \u786e\u5b9a\u67e5\u6570\u636e\u6e90\u7684\u54ea\u4e2a\u5c5e\u6027\u7684\u65f6\u95f4\u7ebf\n\n")),(0,r.kt)("h2",{id:"\u6570\u636e\u7c7b\u578b"},"\u6570\u636e\u7c7b\u578b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"\n\u6d6e\u70b9\u6570  \u652f\u6301 field \n    sql \u4e2d\u7684\u6570\u5b57\u5b57\u7b26\u9ed8\u8ba4\u5c31\u662f\u6d6e\u70b9\u578b\n\n\u6574\u578b    \u652f\u6301 field\n    sql\u4e2d\u7684\u6570\u5b57\u9700\u8981\u5f62\u5982 xxxi, \u5982 2i \uff0c 1i\n\n\u5b57\u7b26\u4e32  \u652f\u6301 Measurement\uff0ctag key\uff0ctag value\uff0cfield key\uff0cField value\n\n    sql \u4e2d\u9700\u8981\u4f7f\u7528\u53cc\u5f15\u53f7/\u5355\u5f15\u53f7\n\n\u5e03\u5c14\u503c  \u652f\u6301 field\n\n    true\uff0c false \uff0c sql \u4e2d\u65e0\u9700\u5f15\u53f7\n\n\u65f6\u95f4\u6233 \u652f\u6301 \u65f6\u95f4\u6233\u5b57\u6bb5\n\n    \u6700\u5c0f\u7684\u6709\u6548\u65f6\u95f4\u6233\u662f-9223372036854775806\u62161677-09-21T00:12:43.145224194Z\u3002\n\n    \u6700\u5927\u7684\u6709\u6548\u65f6\u95f4\u6233\u662f9223372036854775806\u62162262-04-11T23:47:16.854775806Z\u3002\n\n")),(0,r.kt)("h2",{id:"retention-policyrp-\u6570\u636e\u4fdd\u7559\u7b56\u7565"},"Retention Policy\uff08RP\uff09 \u6570\u636e\u4fdd\u7559\u7b56\u7565"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'\n\u6838\u5fc3\u4f5c\u7528\u67093\u4e2a\uff1a\n\n    \u6307\u5b9a\u6570\u636e\u7684\u8fc7\u671f\u65f6\u95f4\uff0c(\u51b3\u5b9a\u6570\u636e\u4fdd\u7559\u65f6\u95f4\uff0c \u65e9\u4e8eduration\u7684\u6570\u636e\u5c06\u81ea\u52a8\u4ece\u6570\u636e\u5e93\u4e2d\u5220\u9664)\n    \n    \u6307\u5b9a\u6570\u636e\u526f\u672c\u6570\u91cf\n    \n    \u6307\u5b9aShardGroup Duration\u3002\n\nRP\u662f\u6570\u636e\u5e93\u7ea7\u522b\u800c\u4e0d\u662f\u8868\u7ea7\u522b\u7684\u5c5e\u6027\u3002\u8fd9\u548c\u5f88\u591a\u6570\u636e\u5e93\u90fd\u4e0d\u540c\u3002\u5728\u521b\u5efa\u6570\u636e\u5e93\u7684\u65f6\u5019\u4f1a\u81ea\u52a8\u521b\u5efa\u540d\u4e3aautogen\u7684\u9ed8\u8ba4RP\uff0c \u5177\u6709\u65e0\u9650\u7684\u5b58\u50a8\u65f6\u95f4\u5e76\u4e14\u590d\u5236\u7cfb\u6570\u8bbe\u4e3a1\n\n\u6bcf\u4e2a\u6570\u636e\u5e93\u53ef\u4ee5\u6709\u591a\u4e2a\u6570\u636e\u4fdd\u7559\u7b56\u7565\uff0c\u4f46\u53ea\u80fd\u6709\u4e00\u4e2a\u9ed8\u8ba4\u7b56\u7565\u3002\n\n\u4e0d\u540c\u8868\u53ef\u4ee5\u6839\u636e\u4fdd\u7559\u7b56\u7565\u89c4\u5212\u5728\u5199\u5165\u6570\u636e\u7684\u65f6\u5019\u6307\u5b9aRP\u8fdb\u884c\u5199\u5165, \u5982\u679c\u6ca1\u6709\u6307\u5b9a\u4efb\u4f55RP\uff0c\u5219\u4f7f\u7528\u9ed8\u8ba4\u7684RP\u3002\n\n\n\n\n# \u521b\u5efa\u8bed\u6cd5\n# \u5176\u4e2dretention_policy_name\u8868\u793aRP\u7684\u540d\u79f0\uff0cdatabase_name\u8868\u793a\u6570\u636e\u5e93\u540d\u79f0\uff0cduration\u8868\u793aTTL\uff0cn\u8868\u793a\u6570\u636e\u526f\u672c\u6570\u3002\n# CREATE RETENTION POLICY ON <retention_policy_name> ON <database_name> DURATION <duration> REPLICATION <n> [SHARD DURATION <duration> ] [DEFAULT]\nCREATE RETENTION POLICY "one_day_only" ON "water_database" DURATION 1d REPLICATION 1 SHARD DURATION 1h DEFAULT \n\n# \u67e5\u770brp\nSHOW RETENTION POLICIES [ON <database_name>]\n')),(0,r.kt)("h2",{id:"shard-group-\u6570\u636e\u5207\u7247\u7ec4"},"Shard Group \u6570\u636e\u5207\u7247\u7ec4"),(0,r.kt)("p",null,"\u5b9e\u73b0\u4e86\u6570\u636e\u5206\u533a, \u6839\u636e timestamp, \u6bcf\u4e2aShard Group\u53ea\u5b58\u50a8\u6307\u5b9a\u65f6\u95f4\u6bb5\u7684\u6570\u636e."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u53ea\u662f\u4e00\u4e2a\u903b\u8f91\u6982\u5ff5, \u91cc\u9762\u5305\u542b\u4e86\u5927\u91cfShard\uff0cShard\u624d\u662fInfluxDB\u4e2d\u771f\u6b63\u5b58\u50a8\u6570\u636e\u4ee5\u53ca\u63d0\u4f9b\u8bfb\u5199\u670d\u52a1\u7684\u6982\u5ff5\n\u4e0d\u540cShard Group\u5bf9\u5e94\u7684\u65f6\u95f4\u6bb5\u4e0d\u4f1a\u91cd\u5408\u3002\u6bd4\u59822017\u5e749\u6708\u4efd\u7684\u6570\u636e\u843d\u5728Shard Group0\u4e0a\uff0c2017\u5e7410\u6708\u4efd\u7684\u6570\u636e\u843d\u5728Shard Group1\u4e0a\u3002\n\u6bcf\u4e2aShard Group\u5bf9\u5e94\u591a\u957f\u65f6\u95f4\u662f\u901a\u8fc7Retention Policy\u4e2d\u5b57\u6bb5\u201dSHARD DURATION\u201d\u6307\u5b9a\u7684\uff0c\u5982\u679c\u6ca1\u6709\u6307\u5b9a\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7Retention Duration\uff08\u6570\u636e\u8fc7\u671f\u65f6\u95f4\uff09\u8ba1\u7b97\u51fa\u6765")),(0,r.kt)("p",null,"\u4e3a\u4ec0\u4e48\u9700\u8981\u5c06\u6570\u636e\u6309\u7167\u65f6\u95f4\u5206\u6210\u4e00\u4e2a\u4e00\u4e2aShard Group? "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5c06\u6570\u636e\u6309\u7167\u65f6\u95f4\u5206\u5272\u6210\u5c0f\u7684\u7c92\u5ea6\u4f1a\u4f7f\u5f97\u6570\u636e\u8fc7\u671f\u5b9e\u73b0\u975e\u5e38\u7b80\u5355\uff0cInfluxDB\u4e2d\u6570\u636e\u8fc7\u671f\u5220\u9664\u7684\u6267\u884c\u7c92\u5ea6\u5c31\u662fShard Group\uff0c\u7cfb\u7edf\u4f1a\u5bf9\u6bcf\u4e00\u4e2aShard Group\u5224\u65ad\u662f\u5426\u8fc7\u671f\uff0c\u800c\u4e0d\u662f\u4e00\u6761\u4e00\u6761\u8bb0\u5f55\u5224\u65ad\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5b9e\u73b0\u4e86\u5c06\u6570\u636e\u6309\u7167\u65f6\u95f4\u5206\u533a\u7684\u7279\u6027, \u67e5\u8be2\u662f\u6548\u7387\u9ad8, \u7c7b\u4f3c\u4e8c\u5206\u67e5\u627e"))),(0,r.kt)("p",null,"\u843d\u5728\u4e00\u4e2aShard Group\u4e2d\u7684\u6570\u636e\u53c8\u662f\u5982\u4f55\u6620\u5c04\u5230\u54ea\u4e2aShard\u4e0a\u5462\uff1f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"InfluxDB\u662f\u6839\u636ehash(Series)\u5c06\u65f6\u5e8f\u6570\u636e\u6620\u5c04\u5230\u4e0d\u540c\u7684Shard\uff0c\u800c\u4e0d\u662f\u6839\u636eMeasurement\u8fdb\u884chash\u6620\u5c04\uff0c\u8fd9\u6837\u4f1a\u4f7f\u5f97\u76f8\u540cSeries\u7684\u6570\u636e\u80af\u5b9a\u4f1a\u5b58\u5728\u540c\u4e00\u4e2aShard\u4e2d\uff0c\u4f46\u8fd9\u6837\u7684\u6620\u5c04\u7b56\u7565\u4f1a\u4f7f\u5f97\u4e00\u4e2aShard\u4e2d\u5305\u542b\u591a\u4e2aMeasurement\u7684\u6570\u636e")),(0,r.kt)("h2",{id:"\u6307\u4ee4\u8bed\u6cd5"},"\u6307\u4ee4\u8bed\u6cd5"),(0,r.kt)("h3",{id:"\u7ba1\u7406\u76f8\u5173\u547d\u4ee4"},"\u7ba1\u7406\u76f8\u5173\u547d\u4ee4"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'# enter the cmd window\ninflux -port 8086\n\n# InfluxDB \u9ed8\u8ba4\u7ba1\u7406\u5458\u8d26\u53f7\uff1aadmin\uff0c\u5bc6\u7801\u4e3a\u7a7a\nshow users\ncreate user "username" with password \'password\'\ncreate user "username" with password \'password\' with all privileges\ndrop user "username"\n\n\n# InfluxQL\u4e0eSQL\u547d\u4ee4\u8bed\u6cd5\u7c7b\u4f3c\nCREATE DATABASE weiz_tes\nSHOW DATABASES\nDROP DATABASE weiz_test\nUSE weiz_test\nSHOW MEASUREMENTS\nDROP MEASUREMENT "measurementName"\n\n# \u67e5\u770b\u5e8f\u5217\nSHOW SERIES ON NOAA_water_database\n\n# InfluxDB\u6ca1\u6709\u4e13\u95e8\u7684\u521b\u5efa\u8868\u7684\u547d\u4ee4\uff0c\u5f53\u63d2\u5165\u4e00\u6761\u6570\u636epoint\u81f3\u67d0A\u8868\u65f6\uff0c\u6b64A\u8868\u4f1a\u81ea\u52a8\u521b\u5efa\uff0c\u5e76\u4e14\u8868\u7684\u683c\u5f0f\u3001\u5b57\u6bb5\u540d\u3001\u5b57\u6bb5\u7c7b\u578b\u4e5f\u7531\u6b64\u6761\u63d2\u5165\u547d\u4ee4\u51b3\u5b9a\n# InfluxDB\u6ca1\u6709\u4fee\u6539\u8868\u7684\u547d\u4ee4\uff0c\u4f46\u5f53\u63d2\u5165\u4e00\u6761\u65b0\u6570\u636epoint\u81f3\u8868A\u65f6\uff0c\u5982\u679c\u6b64point\u4e2d\u7684\u5b57\u6bb5\u591a\u4e8e\u539fA\u8868\u7684\u5b57\u6bb5\uff0c\u4f1a\u81ea\u52a8\u4fee\u6539A\u8868\u4e0e\u6b64\u6761\u63d2\u5165\u6570\u636e\u7684\u683c\u5f0f\u5b57\u6bb5\u7b49\u4e00\u81f4\u3002\n#       \u5982\u679c\u65b0\u63d2\u5165\u6570\u636e\u5b57\u6bb5\u4e0e\u8868A\u5b8c\u5168\u4e0d\u540c\u5219\u4f1a\u63d2\u5165\u5931\u8d25\u3002 \n\n')),(0,r.kt)("h3",{id:"\u5199\u5165\u8bed\u6cd5"},"\u5199\u5165\u8bed\u6cd5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'# \u65b0\u589e\u4e00\u6761\u6570\u636e\uff0cmeasurement\u4e3aadd_test, tag\u4e3aname,phone, field\u4e3auser_id,email\ninsert add_test,name=YiHui,phone=110 user_id=20,email="bangzewu@126.com"\n\n\n\n\n\n\u5c06\u67e5\u8be2\u7ed3\u679c\u5199\u5165measurement\n\n# \u91cd\u547d\u540d\u6570\u636e\u5e93\n# \u53cd\u5411\u5f15\u7528\u8bed\u6cd5\uff08:MEASUREMENT\uff09\u5c06\u6e90\u6570\u636e\u5e93\u4e2dmeasurement\u7684\u540d\u5b57\u7ef4\u6301\u5728\u76ee\u6807\u6570\u636e\u5e93\u4e2d\u4e0d\u53d8\n# GROUP BY *\u5b50\u53e5\u5c06\u6e90\u6570\u636e\u5e93\u4e2d\u7684tag\u4fdd\u7559\u5728\u76ee\u6807\u6570\u636e\u5e93\u4e2d\n SELECT * INTO "copy_NOAA_water_database"."autogen".:MEASUREMENT FROM "NOAA_water_database"."autogen"./.*/ GROUP BY *\n\n#  \u4ee5\u4e0b\u67e5\u8be2\u5e76\u4e0d\u4e3atag\u7ef4\u62a4\u5e8f\u5217\u7684\u4e0a\u4e0b\u6587\uff0ctag\u5c06\u4f5c\u4e3afield\u4fdd\u5b58\u5728\u76ee\u6807\u6570\u636e\u5e93\uff08copy_NOAA_water_database\uff09\u4e2d\nSELECT * INTO "copy_NOAA_water_database"."autogen".:MEASUREMENT FROM "NOAA_water_database"."autogen"./.*/\n')),(0,r.kt)("h3",{id:"\u67e5\u8be2\u8bed\u6cd5"},"\u67e5\u8be2\u8bed\u6cd5"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://help.aliyun.com/document_detail/172144.html?spm=a2c4g.172139.0.0.6d84357dNoR1Ij"},"https://help.aliyun.com/document_detail/172144.html?spm=a2c4g.172139.0.0.6d84357dNoR1Ij")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'# \u67e5\u770b tag \nshow tag/field keys from device_temperature\nshow tag/field values from test with key="app"\n\n\nSELECT "<field_key>","<field_key>"\nSELECT "<field_key>","<tag_key>" \u8fd4\u56de\u4e00\u4e2a\u7279\u5b9a\u7684field\u548c\u4e00\u4e2a\u7279\u5b9a\u7684tag\uff0c\u5f53SELECT\u5b50\u53e5\u5305\u542btag\u65f6\uff0c\u5b83\u5fc5\u987b\u81f3\u5c11\u6307\u5b9a\u4e00\u4e2afield\u3002\nSELECT "<field_key>"::field,"<tag_key>"::tag        ::[field | tag]\u6307\u5b9a\u4e86\u5b57\u6bb5\u662f field \u8fd8\u662f tag\uff0c\u4f7f\u7528\u8fd9\u4e2a\u8bed\u6cd5\u662f\u4e3a\u4e86\u533a\u5206\u5177\u6709\u76f8\u540c\u540d\u5b57\u7684field key\u548ctag key\u3002\n# \u8bed\u6cd5::\u5141\u8bb8\u7528\u6237\u5728\u67e5\u8be2\u4e2d\u6307\u5b9afield value\u7684\u6570\u636e\u7c7b\u578b type\u53ef\u4ee5\u662ffloat\uff0cinteger\uff0cstring\u6216boolean\nSELECT_clause <field_key>::<type> FROM_clause\n\nFROM <measurement_name>,<measurement_name>\nFROM <database_name>.<retention_policy_name>.<measurement_name>\nFROM <database_name>..<measurement_name>\u4ece\u7528\u6237\u6307\u5b9a\u7684\u4e00\u4e2a\u6570\u636e\u5e93\u5e76\u4f7f\u7528\u9ed8\u8ba4\u4fdd\u7559\u7b56\u7565\u7684measurement\u4e2d\u8fd4\u56de\u6570\u636e\n\n\n# (\u6216\u8005\u662f time\uff081d\uff09\u4e5f\u884c\uff0c \u6309\u7167\u95f4\u9694\u4e00\u5929\u8fdb\u884c\u5206\u7ec4\u805a\u5408, time(5m) \u95f4\u96945\u5206\u949f\u5206\u7ec4) \nGROUP BY time(1h) # \u95f4\u9694\u4e00\u5c0f\u65f6\u5206\u7ec4\u805a\u5408\nGROUP BY *\u6309\u6240\u6709tag\u5bf9\u67e5\u8be2\u7ed3\u679c\u8fdb\u884c\u5206\u7ec4\u3002\nGROUP BY <tag_key>\u6309\u6307\u5b9a\u7684\u4e00\u4e2atag\u5bf9\u67e5\u8be2\u7ed3\u679c\u8fdb\u884c\u5206\u7ec4\u3002\n\nGROUP BY <tag_key>,<tag_key>\u6309\u591a\u4e2atag\u5bf9\u67e5\u8be2\u7ed3\u679c\u8fdb\u884c\u5206\u7ec4\uff0ctag key\u7684\u987a\u5e8f\u5bf9\u7ed3\u679c\u65e0\u5f71\u54cd\u3002\n\n\n# \u5c3d\u91cf\u7528\u53cc\u5f15\u53f7\uff0c \u5982\u679c\u6807\u8bc6\u7b26\u6ca1\u7279\u6b8a\u5b57\u7b26\uff0c \u53ef\u4ee5\u4e0d\u7528\nSELECT "level description"::field,"location"::tag,"water_level"::field FROM "h2o_feet"\n\n# \u6761\u4ef6\u67e5\u8be2, \u7b49\u53f7\u4e24\u8fb9\u4e0d\u80fd\u6709\u7a7a\u683c, \u5b57\u7b26\u4e32\u7684 field value \u7528\u5355\u5f15\u53f7\nselect * from host_cpu_usage_total [where xxx=\'yyy\'] [order by time desc/asc]\n\n# distinct\u7684\u5b57\u6bb5\u4ec5\u662ffield \u4e0d\u80fd\u662ftag\nselect distinct(count) from test\n\n# group by\u4ec5\u662ftag \u4e0d\u80fd\u662ffield \nselect * from test group by app\n\n\n# \u65f6\u95f4\u6761\u4ef6\u5355\u5f15\u53f7\n# or  \u662flong\u7c7b\u578b\u7684\u7eb3\u79d2\u65f6\u95f4\u6233 (\u4e0d\u52a0\u5355\u4f4d\u9ed8\u8ba4\u662f\u7eb3\u79d2\uff0c s \u662f\u79d2)\n# ms\u6beb\u79d2\n# s\u79d2\n# m\u5206\u949f\n# h\u5c0f\u65f6\n# d\u5929\n# w\u661f\u671f\nWHERE time >= \'2018-06-18T12:00:00Z\' AND time <= \'2018-06-19T04:35:00Z\'\n\n# \u65f6\u95f4\u8ba1\u7b97 (\u6ce8\u610f\u7a7a\u683c)\nWHERE time > \'2015-09-18T21:24:00Z\' + 6m\n\nWHERE time > now() - 1h\n\n\n# \u6a21\u7cca\u67e5\u8be2\n\n## =~/\u7ed9\u5b9a\u5b57\u7b26/ \u5305\u542b\u6307\u5b9a\u5b57\u7b26\u7684      =~/^\u7ed9\u5b9a\u5b57\u6bb5/ \u4ee5\u6307\u5b9a\u5b57\u6bb5\u5f00\u59cb\u7684      =~/\u7ed9\u5b9a\u5b57\u6bb5$/ \u4ee5\u6307\u5b9a\u5b57\u6bb5\u7ed3\u5c3e\u7684\n> select * from test where monitor_name =~/app/\n\n# \u5206\u9875\nselect * from test limit 2 offset 2\n\n# \u6ca1\u6709in\u7684\u64cd\u4f5c\uff0c\u4f46\u662f\u6709or\nselect * from test where monitor_name = \'test\' or monitor_name =\'app1\'\n\n\n\n# \u5d4c\u5957\n\n# \u8fd4\u56de\u6bcf\u4e2alocation\u4e2dwater_level\u7684\u6700\u5927\u503c\u7684\u603b\u548c\n SELECT SUM("max") FROM (SELECT MAX("water_level") FROM "h2o_feet" GROUP BY "location")\n')),(0,r.kt)("h3",{id:"\u57fa\u672c\u8ba1\u7b97"},"\u57fa\u672c\u8ba1\u7b97"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'\nSELECT\u8bed\u53e5\u652f\u6301\u4f7f\u7528\u57fa\u672c\u7684\u8fd0\u7b97\u7b26\uff0c\u4f8b\u5982\uff1a+\u3001-\u3001/\u3001*\u548c()\u7b49\u7b49\u3002\n\n-- \u4e24\u4e2afield key\u76f8\u52a0\nSELECT field_key1 + field_key2 AS "field_key_sum" FROM "measurement_name" WHERE time < now() - 15m\n\n-- \u4e24\u4e2afield key\u76f8\u51cf\nSELECT field_key1 - field_key2 AS "field_key_difference" FROM "measurement_name" WHERE time < now() - 15m\n\n-- \u5206\u7ec4\u8ba1\u7b97\u5e76\u5c06\u5b83\u4eec\u8fde\u63a5\u8d77\u6765\nSELECT (field_key1 + field_key2) - (field_key3 + field_key4) AS "some_calculation" FROM "measurement_name" WHERE time < now() - 15m\n\n-- \u8ba1\u7b97\u67e5\u8be2\u4e2d\u7684\u767e\u5206\u6bd4\nSELECT (field_key1 / field_key2) * 100 AS "calculated_percentage" FROM "measurement_name" WHERE time < now() - 15m\n\n\n')),(0,r.kt)("h3",{id:"aggregation\u805a\u5408\u51fd\u6570"},"aggregation\u805a\u5408\u51fd\u6570"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'\n\nnow() \u672c\u5730\u670d\u52a1\u5668\u5f53\u524d\u7684\u7eb3\u79d2\u7ea7\u65f6\u95f4\u6233\uff08timestamp\uff09\n-- \u8fc7\u53bb\u4e03\u5929\u5185\nWHERE time > now() - 7d\n\n\ngroup by time(1d) fill(<fill_option>)       fill() \u53ef\u9009\uff0c\u5b83\u4f1a\u6539\u53d8\u4e0d\u542b\u6570\u636e\u7684\u65f6\u95f4\u95f4\u9694\u7684\u8fd4\u56de\u503c\u3002\n    \u4efb\u610f\u6570\u503c\uff1a\u5bf9\u4e8e\u6ca1\u6709\u6570\u636e\u70b9\u7684\u65f6\u95f4\u95f4\u9694\uff0c\u8fd4\u56de\u8fd9\u4e2a\u7ed9\u5b9a\u7684\u6570\u503c\u3002\n\n    linear\uff1a\u5bf9\u4e8e\u6ca1\u6709\u6570\u636e\u70b9\u7684\u65f6\u95f4\u95f4\u9694\uff0c\u8fd4\u56de\u7ebf\u6027\u63d2\u503c\u7684\u7ed3\u679c\u3002\n\n    none\uff1a\u5bf9\u4e8e\u6ca1\u6709\u6570\u636e\u70b9\u7684\u65f6\u95f4\u95f4\u9694\uff0c\u4e0d\u8fd4\u56de\u4efb\u4f55\u65f6\u95f4\u6233\u548c\u503c\u3002\n\n    null\uff1a\u5bf9\u4e8e\u6ca1\u6709\u6570\u636e\u70b9\u7684\u65f6\u95f4\u95f4\u9694\uff0c\u8fd4\u56de\u65f6\u95f4\u6233\uff0c\u5e76\u4e14\u8fd4\u56denull\u4f5c\u4e3a\u8be5\u65f6\u95f4\u6233\u6240\u5bf9\u5e94\u7684\u503c\uff0c\u8fd9\u8ddf\u9ed8\u8ba4\u7684\u60c5\u51b5\u76f8\u540c\u3002\n\n    previous\uff1a\u5bf9\u4e8e\u6ca1\u6709\u6570\u636e\u70b9\u7684\u65f6\u95f4\u95f4\u9694\uff0c\u8fd4\u56de\u524d\u4e00\u4e2a\u65f6\u95f4\u95f4\u9694\u7684\u503c\u3002\n\n\n\n-- \u8ba1\u6570\n# count(field key) \u8fd4\u56de\u4e00\u4e2a\uff08field\uff09\u5b57\u6bb5\u4e2d\u7684\u975e\u7a7a\u503c\u7684\u6570\u91cf\nselect count(humidity) from weather\n\n\n\ndistinct()  \u548c distinct \n\n\n\n-- \u6c42\u548c\n-- \u8ba1\u7b97\u767e\u5206\u6bd4\u4e2d\u4f7f\u7528\u4e86\u805a\u5408\u51fd\u6570\uff0c \u90a3\u4e48\u67e5\u8be2\u4e2d\u6240\u6709\u7684\u6570\u636e\u90fd\u4f1a\u7528\u5230\u805a\u5408\u51fd\u6570\u3002\u60a8\u4e0d\u80fd\u5c06\u805a\u5408\u6570\u636e\u548c\u975e\u805a\u5408\u6570\u636e\u6df7\u5408\u5728\u4e00\u8d77\n-- \u90fd\u9700\u8981\u4e00\u4e2aGROUP BY time()\u5b50\u53e5\nSELECT (sum(field_key1) / sum(field_key2)) * 100 AS "calculated_percentage" FROM "measurement_name" WHERE time < now() - 15m GROUP BY time(1m)\n\n\nMEAN() \u5e73\u5747\u6570\n-- \u8fd4\u56demeasurement pet_daycare\u4e2dcats\u6570\u91cf\u548cdogs\u6570\u91cf\u7684\u5dee\u5f02\u7684\u5e73\u5747\u503c\u3002\nSELECT MEAN("difference") FROM (SELECT "cats" - "dogs" AS "difference" FROM "pet_daycare")\n\n\n-- MEDIAN() \u4e2d\u4f4d\u6570\n\n\n\nINTEGRAL(field_key\uff0c [unit])\uff1a\u79ef\u5206\u51fd\u6570\uff0c \u8fd4\u56defield key\u5bf9\u5e94\u7684field value\u66f2\u7ebf\u4e0b\u7684\u9762\u79ef\u3002\u53ef\u6307\u5b9a\u5355\u4f4d\u5fae\u5206\u7684\u65f6\u95f4\u5355\u4f4d\uff0c\u5982 1m\uff0c \u9ed8\u8ba4\u4ee5\u79d2\u4e3a\u5355\u4f4d\n\n\n\nMODE(field_key)\uff1a\u8fd4\u56defield key\u5bf9\u5e94\u7684field value\u4e2d\u51fa\u73b0\u9891\u7387\u6700\u9ad8\u7684\u503c\u3002\nMODE(*)\uff1a\u8fd4\u56de\u5728measurement\u4e2d\u6bcf\u4e2afield key\u5bf9\u5e94\u7684field value\u4e2d\u51fa\u73b0\u9891\u7387\u6700\u9ad8\u7684\u503c\u3002\n\n\n\u65b9\u5dee \uff08\u6700\u5927\u503c\u548c\u6700\u5c0f\u503c\u4e4b\u5dee\u3002\uff09\nSPREAD()\n\n\nTDDEV(field_key)\uff1a\u8fd4\u56defield key\u5bf9\u5e94\u7684field value\u7684\u6807\u51c6\u5dee\u3002\n\n')),(0,r.kt)("h3",{id:"\u9009\u62e9\u51fd\u6570"},"\u9009\u62e9\u51fd\u6570"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'\nBOTTOM(field_key,N)\uff1a\u8fd4\u56defield key\u5bf9\u5e94\u7684\u6700\u5c0f\u7684N\u4e2a\u503c\n\nTOP(field_key,N)\uff1a\u8fd4\u56defield key\u5bf9\u5e94\u7684\u6700\u5927\u7684N\u4e2a\u503c\u3002\n\nFIRST(field_key)\uff1a\u8fd4\u56defield key\u5bf9\u5e94\u7684\u5177\u6709\u6700\u65e9\u65f6\u95f4\u6233\u7684field value\u3002\n\nLAST(field_key)\uff1a\u8fd4\u56defield key\u5bf9\u5e94\u7684\u5177\u6709\u6700\u65b0\u65f6\u95f4\u6233\u7684field value\u3002\n\nMAX(field_key)\uff1a\u8fd4\u56defield key\u5bf9\u5e94\u7684field value\u7684\u6700\u5927\u503c\n\nMIN(field_key)\uff1a\u8fd4\u56defield key\u5bf9\u5e94\u7684field value\u7684\u6700\u5c0f\u503c\u3002\n\nPERCENTILE(field_key,N)\uff1a\u8fd4\u56de\u6307\u5b9afield key\u5bf9\u5e94\u7684\u7b2cN\u4e2a\u767e\u5206\u4f4d\u6570\u7684field value\u3002\n-- \u8fd4\u56de  water_level \u524d 5% \u7684\u6570\u636e\u884c\nSELECT PERCENTILE("water_level",5) FROM "h2o_feet"\n\nSAMPLE(field_key,N)\uff1a\u8fd4\u56de\u6307\u5b9afield key\u5bf9\u5e94\u7684N\u4e2a\u968f\u673a\u9009\u62e9\u7684field value\u3002\n')),(0,r.kt)("h3",{id:"continuous-query\u8fde\u7eed\u67e5\u8be2\u7b80\u79f0cq"},"continuous query\uff08\u8fde\u7eed\u67e5\u8be2\uff0c\u7b80\u79f0CQ\uff09"),(0,r.kt)("p",null,"\u4e00\u4e2aInfluxQL\u67e5\u8be2\uff0c\u5728\u6570\u636e\u5e93\u4e2d\u81ea\u52a8\u5730\u3001\u5468\u671f\u6027\u5730\u8fd0\u884c\u3002\u7136\u540e\u628a\u67e5\u8be2\u7ed3\u679c\u5199\u5165\u5230\u6307\u5b9a\u7684measurement\u4e2d\u3002"),(0,r.kt)("p",null,"\u8fde\u7eed\u67e5\u8be2\u8981\u6c42\u5728SELECT\u5b50\u53e5\u4e2d\u6709\u4e00\u4e2a\u51fd\u6570\uff08function\uff09\uff0c\u5e76\u4e14\u5fc5\u987b\u5305\u542b\u4e00\u4e2aGROUP BY time()\u5b50\u53e5"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://jasper-zhang1.gitbooks.io/influxdb/content/Query_language/continuous_queries.html"},"https://jasper-zhang1.gitbooks.io/influxdb/content/Query_language/continuous_queries.html")),(0,r.kt)("h3",{id:"\u63d2\u5165\u6570\u636e"},"\u63d2\u5165\u6570\u636e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"\n\n# measurement\u4e3ahost_cpu_usage_total, tag\u4e3ahost_name,cpu_core, field\u4e3acpu_usage,cpu_idle\u3002\n# field\u5982\u679c\u662fstring\u7c7b\u578b\uff0c\u9700\u8981\u52a0\u5f15\u53f7, tag\u90fd\u662fstring\u7c7b\u578b\uff0c\u4e0d\u9700\u8981\u5f15\u53f7\u5c06value\u5305\u88f9\ninsert host_cpu_usage_total,host_name=host1,cpu_core=core1 cpu_usage=0.26,cpu_idle=0.76\n\n\n\n\n# batch \u6279\u91cf\u63d2\u5165\n\n# \u4ece\u6587\u672c\u5bfc\u5165\ninflux -ssl -username <\u8d26\u53f7\u540d\u79f0> -password <\u5bc6\u7801> -host <\u7f51\u7edc\u5730\u5740> -port 3242 -import -path=path/to/apple_stand.txt -database=apple_stand\n\n\n")),(0,r.kt)("h1",{id:"prometheus"},"prometheus"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/thanos-io/thanos"},"https://github.com/thanos-io/thanos")," \u96c6\u7fa4\u90e8\u7f72"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/ccfos/nightingale"},"https://github.com/ccfos/nightingale")," \u66ff\u4ee3"),(0,r.kt)("h1",{id:"hbase"},"hbase"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://zhuanlan.zhihu.com/p/37964096"},"https://zhuanlan.zhihu.com/p/37964096")," \u5bf9\u6bd4\u9009\u578b"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://zhuanlan.zhihu.com/p/145551967"},"https://zhuanlan.zhihu.com/p/145551967")," \u7b80\u4ecb"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://zhuanlan.zhihu.com/p/65994704"},"https://zhuanlan.zhihu.com/p/65994704")),(0,r.kt)("h1",{id:"clickhouse"},"Clickhouse"))}h.isMDXComponent=!0}}]);