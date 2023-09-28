"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[828],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,k=m["".concat(l,".").concat(d)]||m[d]||u[d]||s;return n?a.createElement(k,o(o({ref:t},c),{},{components:n})):a.createElement(k,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<s;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},24732:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var a=n(83117),r=n(80102),s=(n(67294),n(3905)),o=["components"],i={title:"How to Test Java App",tags:["mock","test","java"],date:new Date("2019-08-14T15:23:16.000Z"),toc_min_heading_level:2,toc_max_heading_level:5},l=void 0,p={unversionedId:"how-to-test-java-app",id:"how-to-test-java-app",title:"How to Test Java App",description:"\u76f8\u5173\u5de5\u5177\u548c\u7c7b\u5e93",source:"@site/docs/how-to-test-java-app.md",sourceDirName:".",slug:"/how-to-test-java-app",permalink:"/docs/how-to-test-java-app",draft:!1,tags:[{label:"mock",permalink:"/docs/tags/mock"},{label:"test",permalink:"/docs/tags/test"},{label:"java",permalink:"/docs/tags/java"}],version:"current",frontMatter:{title:"How to Test Java App",tags:["mock","test","java"],date:"2019-08-14T15:23:16.000Z",toc_min_heading_level:2,toc_max_heading_level:5},sidebar:"tutorialSidebar",previous:{title:"Health \u5173\u7231\u7a0b\u5e8f\u5458\u5065\u5eb7\ud83c\udfe5",permalink:"/docs/health"},next:{title:"\u7cfb\u7edf\u8bbe\u8ba1 System design",permalink:"/docs/interview-system-design"}},c={},u=[{value:"1. Testcontainers",id:"1-testcontainers",level:2},{value:"2. spring-boot-starter-test",id:"2-spring-boot-starter-test",level:2},{value:"3. AssertJ",id:"3-assertj",level:2},{value:"4. Mockito",id:"4-mockito",level:2},{value:"4.1. \u548c springboot \u914d\u5408\u4f7f\u7528",id:"41-\u548c-springboot-\u914d\u5408\u4f7f\u7528",level:3},{value:"mock \u9759\u6001\u65b9\u6cd5",id:"mock-\u9759\u6001\u65b9\u6cd5",level:3},{value:"6. web\u5c42\u6d4b\u8bd5",id:"6-web\u5c42\u6d4b\u8bd5",level:2},{value:"7. \u538b\u6d4b",id:"7-\u538b\u6d4b",level:2},{value:"7.1. \u6027\u80fd\u6307\u6807",id:"71-\u6027\u80fd\u6307\u6807",level:3},{value:"7.2. siege",id:"72-siege",level:3},{value:"7.3. Gatling",id:"73-gatling",level:3},{value:"7.4. jmeter",id:"74-jmeter",level:3},{value:"7.5. ab",id:"75-ab",level:3},{value:"hey",id:"hey",level:3},{value:"vegeta",id:"vegeta",level:3},{value:"7.6. jmh \u65b9\u6cd5\u7ea7\u522b\u7684\u6027\u80fd\u6d4b\u8bd5",id:"76-jmh-\u65b9\u6cd5\u7ea7\u522b\u7684\u6027\u80fd\u6d4b\u8bd5",level:3},{value:"8. Junit",id:"8-junit",level:2},{value:"9. ab test",id:"9-ab-test",level:2},{value:"10. \u96c6\u6210\u6d4b\u8bd5 Testcontainers",id:"10-\u96c6\u6210\u6d4b\u8bd5-testcontainers",level:2},{value:"11. \u4f18\u5316\u6d4b\u8bd5\u7f16\u5199\u4f53\u9a8c",id:"11-\u4f18\u5316\u6d4b\u8bd5\u7f16\u5199\u4f53\u9a8c",level:2},{value:"12. talend api tester \u6d4f\u89c8\u5668\u63d2\u4ef6",id:"12-talend-api-tester-\u6d4f\u89c8\u5668\u63d2\u4ef6",level:2},{value:"\u81ea\u52a8\u5316\u6d4b\u8bd5",id:"\u81ea\u52a8\u5316\u6d4b\u8bd5",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"\u76f8\u5173\u5de5\u5177\u548c\u7c7b\u5e93"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Junit\u3001TestNG, Spring Test"),(0,s.kt)("li",{parentName:"ul"},"\u65ad\u8a00\u5e93\uff1aAssertJ (\u63a8\u8350), Hamcrest\uff08\u4e0d\u66f4\u65b0\u4e86\uff0cMatcher\u5206\u6563\u5728\u591a\u4e2a\u7c7b\u4e2d\uff0c\u7f16\u5199\u56f0\u96be\uff0cJUnit\u4ec5\u4f9d\u8d56\u4e86Hamcrest\u6838\u5fc3\u5305\uff0c\u53ea\u9644\u5e26\u4e86\u6700\u57fa\u672c\u7684\u65ad\u8a00\u529f\u80fd\uff0c\u5982\u679c\u6211\u4eec\u5e0c\u671b\u65ad\u8a00\u6570\u5b57\u5927\u5c0f\u4e4b\u7c7b\u7684\u8bdd\uff0c\u8fd8\u9700\u8981\u81ea\u5df1\u5f15\u5165Hamcrest\u5b8c\u6574\u5305\uff0c\u6bd4\u8f83\u9ebb\u70e6\uff09"),(0,s.kt)("li",{parentName:"ul"},"MOCK \u6846\u67b6\uff0c\u4f8b\u5982 Jmock\u3001Easymock\u3001PowerMock (mock\u9759\u6001\u65b9\u6cd5, \u79c1\u6709\u65b9\u6cd5...) \uff0c Mockito(\u63a8\u8350, springboot-test \u9ed8\u8ba4\u63d0\u4f9b);"),(0,s.kt)("li",{parentName:"ul"},"rest api \u81ea\u52a8\u5316\u6d4b\u8bd5\uff1aREST Assured\uff0c postman"),(0,s.kt)("li",{parentName:"ul"},"Selenium: ui\u6d4b\u8bd5"),(0,s.kt)("li",{parentName:"ul"},"JSONassert\uff1aJSON \u65ad\u8a00\u5e93"),(0,s.kt)("li",{parentName:"ul"},"JsonPath\uff1aJSON XPath"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/DiUS/java-faker"},"https://github.com/DiUS/java-faker"),"  \u6784\u9020\u5047\u6570\u636e",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/jsonzou/jmockdata"},"https://github.com/jsonzou/jmockdata")," \u4e2d\u6587\u8bf4\u660e")))),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://testerhome.com/"},"https://testerhome.com/")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#1-testcontainers"},"1. Testcontainers")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#2-spring-boot-starter-test"},"2. spring-boot-starter-test")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#3-assertj"},"3. AssertJ")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#4-mockito"},"4. Mockito"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#41-%E5%92%8C-springboot-%E9%85%8D%E5%90%88%E4%BD%BF%E7%94%A8"},"4.1. \u548c springboot \u914d\u5408\u4f7f\u7528")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#mock-%E9%9D%99%E6%80%81%E6%96%B9%E6%B3%95"},"mock \u9759\u6001\u65b9\u6cd5")))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#6-web%E5%B1%82%E6%B5%8B%E8%AF%95"},"6. web\u5c42\u6d4b\u8bd5")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#7-%E5%8E%8B%E6%B5%8B"},"7. \u538b\u6d4b"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#71-%E6%80%A7%E8%83%BD%E6%8C%87%E6%A0%87"},"7.1. \u6027\u80fd\u6307\u6807")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#72-siege"},"7.2. siege")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#73-gatling"},"7.3. Gatling")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#74-jmeter"},"7.4. jmeter")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#75-ab"},"7.5. ab")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#hey"},"hey")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#vegeta"},"vegeta")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#76-jmh-%E6%96%B9%E6%B3%95%E7%BA%A7%E5%88%AB%E7%9A%84%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95"},"7.6. jmh \u65b9\u6cd5\u7ea7\u522b\u7684\u6027\u80fd\u6d4b\u8bd5")))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#8-junit"},"8. Junit")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#9-ab-test"},"9. ab test")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#10-%E9%9B%86%E6%88%90%E6%B5%8B%E8%AF%95-testcontainers"},"10. \u96c6\u6210\u6d4b\u8bd5 Testcontainers")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#11-%E4%BC%98%E5%8C%96%E6%B5%8B%E8%AF%95%E7%BC%96%E5%86%99%E4%BD%93%E9%AA%8C"},"11. \u4f18\u5316\u6d4b\u8bd5\u7f16\u5199\u4f53\u9a8c")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#12-talend-api-tester-%E6%B5%8F%E8%A7%88%E5%99%A8%E6%8F%92%E4%BB%B6"},"12. talend api tester \u6d4f\u89c8\u5668\u63d2\u4ef6")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#%E8%87%AA%E5%8A%A8%E5%8C%96%E6%B5%8B%E8%AF%95"},"\u81ea\u52a8\u5316\u6d4b\u8bd5"))),(0,s.kt)("h2",{id:"1-testcontainers"},"1. Testcontainers"),(0,s.kt)("h2",{id:"2-spring-boot-starter-test"},"2. spring-boot-starter-test"),(0,s.kt)("p",null,"\u7528\u4e8e spring boot \u5355\u5143\u6d4b\u8bd5"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-test</artifactId>\n    <scope>test</scope>\n    <exclusions>\n        <exclusion>\n            <groupId>org.junit.vintage</groupId> // \u6700\u65b0\u7248\u53ef\u4ee5\u4e0d\u6392\u9664\u4e86\n            <artifactId>junit-vintage-engine</artifactId>\n        </exclusion>\n    </exclusions>\n</dependency>\n")),(0,s.kt)("p",null,"\u9700\u8981\u6392\u9664\u6389 ",(0,s.kt)("inlineCode",{parentName:"p"},"junit-vintage-engine")," (\u82e5\u4e0d\u6392\u9664, \u5219\u6d4b\u8bd5\u7c7b\u9700\u8981\u7528 ",(0,s.kt)("inlineCode",{parentName:"p"},"@RunWith(SpringRunner.class)")," \u6807\u6ce8\u624d\u80fd\u6b63\u5e38\u6ce8\u5165 bean)"),(0,s.kt)("p",null,"\u6700\u65b0\u7248\u73b0\u5728\u4f7f\u7528\u53ea\u9700\u8981\u6dfb\u52a0\u7c7b\u6ce8\u89e3 ",(0,s.kt)("inlineCode",{parentName:"p"},"@SpringBootTest")," \u5373\u53ef"),(0,s.kt)("p",null,"\u5982\u679c\u4f60\u4ec0\u4e48\u6ce8\u89e3\u4e5f\u4e0d\u60f3\u7528\uff0c\u65e2\u4e0d\u60f3\u6d4b\u8bd5Data JPA \u4e5f\u4e0d\u60f3\u6d4b\u8bd5 mvc\uff0c\u53ea\u662f\u60f3\u6ce8\u518c\u51e0\u4e2abean\uff0c\u7136\u540e\u542f\u52a8\u505a\u4e9b\u6d4b\u8bd5\uff0c\u90a3\u4e48\u4e5f\u53ef\u4ee5\u7528\u4e0b\u9762\u4e24\u4e2a\u7c7b:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"\u53ef\u4ee5\u7528ApplicationContextRunner\uff0c\u8be5\u7c7b\u662f\u4e00\u4e2a\u6807\u51c6\u7684\uff0c\u65e0web\u7684\u73af\u5883\u3002")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"\u53ef\u4ee5\u76f4\u63a5\u7528ApplicationContext\uff0c\u8be5\u7c7b\u662fSpring\u4e3a\u5e94\u7528\u7a0b\u5e8f\u63d0\u4f9b\u914d\u7f6e\u7684\u6838\u5fc3\u63a5\u53e3\uff0c\u4f8b\u5982AnnotationConfigApplicationContext"))),(0,s.kt)("h2",{id:"3-assertj"},"3. AssertJ"),(0,s.kt)("p",null,"\u6d41\u5f0f\u65ad\u8a00\u5e93, spring-boot-starter-test \u63d0\u4f9b\u4e86\u4f9d\u8d56"),(0,s.kt)("p",null,"Hamcrest \u63d0\u4f9b\u4e86\u66f4\u591a\u65ad\u8a00, springboot \u7ef4\u62a4\u4e86\u5176\u7248\u672c"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://assertj.github.io/doc/#assertj-core"},"https://assertj.github.io/doc/#assertj-core"),"\n",(0,s.kt)("a",{parentName:"p",href:"http://joel-costigliola.github.io/assertj/"},"http://joel-costigliola.github.io/assertj/")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'import static org.assertj.core.api.Assertions.assertThat;\n\n// \u5e38\u7528\u65ad\u8a00:\n\n// \u96c6\u5408\n// \u81f3\u5c11\u6709\u4e00\u4e2a\u7b26\u5408\nAssertions.assertThat(tree).anyMatch(cate -> !CollectionUtils.isEmpty(cate.getChildren()));\n// \u5168\u90fd\u8981\u7b26\u5408 allMatch\n// \u5168\u90fd\u4e0d\u7b26\u5408 noMatch\n\nassertThat(Arrays.asList("world", "hello"))\n                .as("\u5217\u8868\u65ad\u8a00\u63cf\u8ff0")\n                .isNotEmpty() \n                .isNotNull()\n                .isInstanceOf(List.class)\n                .isSubsetOf("hello", "world")\n                .contains("hello")\n                .containsOnlyOnce("world")\n                .startsWith("world")\n                .endsWith("hello");\n\n\n// \u5355\u4e2a\u5bf9\u8c61\n// matches \u7b26\u5408\u591a\u4e2a\u6761\u4ef6\n\nassertThat(user1)\n                .as("\u5bf9\u8c61\u65ad\u8a00\u63cf\u8ff0")\n                .isEqualToComparingFieldByField(user2) //user1\u7684\u6bcf\u4e2a\u5b57\u6bb5\u662f\u5426\u4e0euser2\u76f8\u540c\n                .isExactlyInstanceOf(User.class) //user1\u662f\u5426\u662fUser\u7c7b\u7684\u5bf9\u8c61\n                .isSameAs(user3) //\u662f\u5426\u662f\u540c\u4e00\u4e2a\u5bf9\u8c61\n                .isNotNull() //\u662f\u5426\u975e\u7a7a\n                .hasFieldOrProperty("name") //\u662f\u5426\u542b\u6709name\u5b57\u6bb5\n                .hasFieldOrPropertyWithValue("age", 12); //\u662f\u5426\u542b\u6709age\u5b57\u6bb5\uff0c\u4e14\u503c\u4e3a12\n\n\n\n// \u5b57\u7b26\u4e32\nassertThat("test").isNotBlank() // \u662f\u5426\u4e3a" "\u5b57\u7b26\u4e32\n                .as("\u5b57\u7b26\u4e32\u65ad\u8a00\u63cf\u8ff0").isSubstringOf("test1") // \u662f\u5426\u4e3atest1\u7684\u4e00\u90e8\u5206\n                .isSameAs("test") // \u5bf9\u8c61\u5185\u5143\u7d20\u662f\u5426\u76f8\u7b49\n                .isNotEmpty() // \u662f\u5426\u4e3a\u7a7a\u5b57\u7b26\u4e32\n                .isEqualTo("test") // \u662f\u5426\u76f8\u7b49\n                .isEqualToIgnoringCase("Test") // \u662f\u5426\u76f8\u7b49\uff08\u5ffd\u7565\u5927\u5c0f\u5199\uff09\n                .isExactlyInstanceOf(String.class) // \u662f\u5426\u662f\u5b9e\u4f8b\n                .isIn(Arrays.asList("test", "hello")) // \u662f\u5426\u5728\u5217\u8868\u4e2d\n                .isIn("test", "hello") // \u662f\u5426\u5728\u53c2\u6570\u5217\u8868\u4e2d\n                .isInstanceOfAny(String.class, Integer.class) // \u662f\u5426\u662f\u5b9e\u4f8b\u4e2d\u4efb\u4f55\u4e00\u4e2a\n                .isNotNull() // \u662f\u5426\u4e0d\u4e3a\u7a7a\n                .contains("es") // \u662f\u5426\u5305\u542bes\u5b50\u4e32\n                .startsWith("te") // te\u5f00\u59cb\n                .endsWith("st") // st\u7ed3\u675f\n                .matches(".e.t"); // \u662f\u5426\u5339\u914d .e.t \u683c\u5f0f\n        assertThat("").isNullOrEmpty();\n\n\n// \u6570\u5b57\u65ad\u8a00\n        assertThat(new Integer(100))\n                .as("\u6570\u5b57\u65ad\u8a00\u63cf\u8ff0").isEqualTo(100) // \u662f\u5426\u76f8\u7b49\n                .isBetween(0, 300) // \u662f\u5426\u57280\uff0c300\u4e4b\u95f4\n                .isNotNull() // \u662f\u5426\u975e\u7a7a\n                .isNotZero() // \u662f\u5426\u4e0d\u7b49\u4e8e0\n                .isGreaterThanOrEqualTo(80) // \u662f\u5426\u5927\u7ea6\u7b49\u4e8e80\n                .isLessThan(200) // \u662f\u5426\u5c0f\u4e8e200\n                .isPositive() // \u662f\u5426\u662f\u6b63\u6570\n                .isNotNegative() // \u662f\u5426\u662f\u975e\u8d1f\u6570\n                .isIn(Arrays.asList(100, 200)) // \u662f\u5426\u5728\u5217\u8868\u4e2d\n                .isInstanceOf(Integer.class); // \u662f\u5426\u662fInteger\u7c7b\u578b\n\n// \u65e5\u671f\u65ad\u8a00\n        assertThat(new Date())\n                .as("\u65e5\u671f\u65ad\u8a00\u63cf\u8ff0")\n                .isAfter("2018-08-01")\n                .isAfterYear(2017)\n                .isBetween("2018-01-01", "2018-08-31")\n                .isEqualToIgnoringHours(new Date().toLocaleString())\n                .isExactlyInstanceOf(Date.class)\n                .isInSameHourAs(new Date())\n                .isInThePast()\n                .isToday();\n\n\n\n// \u5b57\u5178\u65ad\u8a00\nMap foo = Maps.newHashMap();\nfoo.put("A", 1);\nfoo.put("B", 2);\nfoo.put("C", 3);\nassertThat(foo)\n        .as("\u5b57\u5178\u65ad\u8a00\u63cf\u8ff0")\n        .isNotNull() // \u662f\u5426\u4e0d\u4e3a\u7a7a\n        .isNotEmpty() // \u662f\u5426size\u4e3a0\n        .hasSize(3) // size\u662f\u5426\u4e3a3\n        .contains(entry("A", 1)) // \u662f\u5426\u5305\u542bentry\n        .containsKeys("A") // \u662f\u5426\u5305\u542bkey\n        .containsValue(1); // \u662f\u5426\u5305\u542bvalue\n\n// \u5f02\u5e38\u65ad\u8a00\n//https://www.baeldung.com/assertj-exception-assertion#:~:text=AssertJ%20Exception%20Assertions%201%20Overview.%20In%20this%20quick,expressions.%204%20Conclusion.%20And%20there%20we%20are.%20\nassertThatThrownBy(() -> {\n    List<String> list = Arrays.asList("String one", "String two");\n    list.get(2);\n}).isInstanceOf(IndexOutOfBoundsException.class)\n  .hasMessageContaining("Index: 2, Size: 2");\n            //.hasMessage("Index: %s, Size: %s", 2, 2)\n        // .hasMessageStartingWith("Index: 2")\n        // .hasMessageContaining("2")\n        // .hasMessageEndingWith("Size: 2")\n        // .hasMessageMatching("Index: \\\\d+, Size: \\\\d+")\n        // .hasCauseInstanceOf(IOException.class)\n        // .hasStackTraceContaining("java.io.IOException");\n//or\nassertThatExceptionOfType(IndexOutOfBoundsException.class)\n  .isThrownBy(() -> {\n      // ...\n}).hasMessageMatching("Index: \\\\d+, Size: \\\\d+");\n\n')),(0,s.kt)("h2",{id:"4-mockito"},"4. Mockito"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://blog.xiayf.cn/2019/06/17/mockito/"},"https://blog.xiayf.cn/2019/06/17/mockito/")," \u4e24\u79cd\u98ce\u683c"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/alibaba/testable-mock"},"https://github.com/alibaba/testable-mock")," ali\u51fa\u54c1 mock \u6846\u67b6"),(0,s.kt)("p",null,"\u66ff\u4ee3\u8005: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/wiremock/wiremock"},"https://github.com/wiremock/wiremock")),(0,s.kt)("p",null,"\u6d4b\u8bd5\u7528 mocking framework, \u6bd4\u5982 web app \u6d4b\u8bd5, spring boot-starter-test\u63d0\u4f9b\u4e86\u5979\u7684\u4f9d\u8d56"),(0,s.kt)("p",null,"demo: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/xiaoyureed/springboot-demos/tree/master/mockito-mybatis-plus-demo"},"https://github.com/xiaoyureed/springboot-demos/tree/master/mockito-mybatis-plus-demo")),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"http://wiki.jikexueyuan.com/project/spring-boot-cookbook-zh/test-mockito.html"},"http://wiki.jikexueyuan.com/project/spring-boot-cookbook-zh/test-mockito.html")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;\nimport static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;\n\nimport static org.hamcrest.MatcherAssert.assertThat;\nimport static org.hamcrest.Matchers.*;\n")),(0,s.kt)("h3",{id:"41-\u548c-springboot-\u914d\u5408\u4f7f\u7528"},"4.1. \u548c springboot \u914d\u5408\u4f7f\u7528"),(0,s.kt)("p",null,"\u5f15\u5165"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-xml"}," <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-test</artifactId>\n            <scope>test</scope>\n        </dependency>\n\n\x3c!-- optional, this is dedicated to mock static methods, powerMock can be replaced now! --\x3e\n <dependency>\n            <groupId>org.mockito</groupId>\n            <artifactId>mockito-inline</artifactId>\n            <scope>test</scope>\n        </dependency>\n")),(0,s.kt)("p",null,"if you would like using it without springboot, just:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-xml"},"        <dependency>\n            <groupId>org.mockito</groupId>\n            <artifactId>mockito-inline</artifactId>\n            <scope>test</scope>\n        </dependency>\n        <dependency>\n            <groupId>org.mockito</groupId>\n            <artifactId>mockito-junit-jupiter</artifactId>\n            <scope>test</scope>\n        </dependency>\n        <dependency>\n            <groupId>org.junit.jupiter</groupId>\n            <artifactId>junit-jupiter-api</artifactId>\n            <scope>test</scope>\n        </dependency>\n\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'\n// scenario1: @MockBean \u6807\u6ce8\u9700\u8981 mock \u7684\u6210\u5458, @Autowired \u6807\u6ce8\u76ee\u6807\u5bf9\u8c61, \u65e0\u9700\u521d\u59cb\u5316, \u4f46\u662f\u8fd9\u79cd\u65b9\u5f0f\u9020\u6210 appContext \u91cd\u542f, \u6027\u80fd\u4f4e\n\n// scenario2: \u9700\u8981 mock \u7684\u5bf9\u8c61\u6210\u5458\u5982 RedisService \u4f7f\u7528 @mock, \u4e0d\u9700\u8981 mock \u7684\u6210\u5458\u4f7f\u7528 @Spy @Autowired;  \u586b\u5145\u5230\u76ee\u6807\u6d4b\u8bd5\u5bf9\u8c61 \u4f7f\u7528 @InjectMocks \u6807\u6ce8\u76ee\u6807\u5bf9\u8c61, \u6bcf\u6b21\u6d4b\u8bd5\u524d\u9700\u8981\u521d\u59cb\u5316 `@BeforeEach void xxx() {MockitoAnnotations.initMocks(this);}`\n\n@WebMvcTest\nclass QuestionRestControllerTest {\n\n    @Autowired\n    private MockMvc mockMvc;\n\n    @MockBean\n    private QuestionService questionService;\n\n    @Test\n    void should_return_ok_when_create_question() throws Exception {\n        String id = "hello";\n\n        BDDMockito.given(questionService.createQuestion(ArgumentMatchers.any(CreateQuestionCommand.class)))\n            .willReturn(new CreateQuestionResult().setId(id));\n\n        byte[] content = new ClassPathResource("request/question/create/single-one.json").getInputStream().readAllBytes();\n\n        mockMvc.perform(\n                MockMvcRequestBuilders.post("/questions/create")\n                    .contentType(MediaType.APPLICATION_JSON)\n                    .content(content)\n            )\n            .andExpect(status().isOk())\n            .andExpect(jsonPath("$.data.id").value(id));\n    }\n}\n\n\n\n\n')),(0,s.kt)("h3",{id:"mock-\u9759\u6001\u65b9\u6cd5"},"mock \u9759\u6001\u65b9\u6cd5"),(0,s.kt)("p",null,"powerMock: \u7528\u4e8e\u89e3\u51b3 mockito \u65e0\u6cd5\u8986\u76d6\u7684 case, \u6bd4\u5982 static method \u7684 mock, \u73b0\u5728\u63a8\u8350mockito-inline "),(0,s.kt)("p",null,"mockito-inline should be used like this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-xml"},"\n\x3c!-- https://mvnrepository.com/artifact/org.mockito/mockito-inline --\x3e\n        <dependency>\n            <groupId>org.mockito</groupId>\n            <artifactId>mockito-inline</artifactId>\n            <scope>test</scope>\n        </dependency>\n\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"")),(0,s.kt)("h2",{id:"6-web\u5c42\u6d4b\u8bd5"},"6. web\u5c42\u6d4b\u8bd5"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"MockMVC \u5355\u5143\u6d4b\u8bd5"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://www.baeldung.com/spring-boot-testresttemplate"},"TestRestTemplate"),", RestAssured \u96c6\u6210\u6d4b\u8bd5")),(0,s.kt)("p",null,"[\u533a\u522b]","](",(0,s.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/52051570/whats-the-difference-between-mockmvc-restassured-and-testresttemplate"},"https://stackoverflow.com/questions/52051570/whats-the-difference-between-mockmvc-restassured-and-testresttemplate"),")"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/xiaoyureed/springboot-demos/blob/master/mockito-mybatis-plus-demo/src/test/java/io/github/xiaoyureed/mockitomybatisplusdemo/controller/UserControllerTest.java"},"web\u5c42unit test demo")),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/rest-assured/rest-assured"},"https://github.com/rest-assured/rest-assured")," - rest api \u6d4b\u8bd5\u5e93"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'@SpringBootTest(classes = GeneratorApp.class, webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)\n\n/**\n     * @LocalServerPort \u63d0\u4f9b\u4e86 @Value("${local.server.port}") \u7684\u4ee3\u66ff\n     */\n    @LocalServerPort\n    private int port;\n\n\n\n\n@AutoConfigureMockMvc\n@SpringBootTest\npublic class ExceptionTest {\n    @Autowired\n    MockMvc mockMvc;\n\n    @Test\n    void should_return_400_if_param_not_valid() throws Exception {\n        mockMvc.perform(get("/api/illegalArgumentException"))\n                .andExpect(status().is(400))\n                .andExpect(jsonPath("$.message").value("\u53c2\u6570\u9519\u8bef!"));\n    }\n\n    @Test\n    void should_return_404_if_resourse_not_found() throws Exception {\n        mockMvc.perform(get("/api/resourceNotFoundException"))\n                .andExpect(status().is(404))\n                .andExpect(jsonPath("$.message").value("Sorry, the resourse not found!"));\n    }\n}\n')),(0,s.kt)("h2",{id:"7-\u538b\u6d4b"},"7. \u538b\u6d4b"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://www.ibm.com/developerworks/cn/java/j-lo-performance-analysissy-tools/index.html"},"https://www.ibm.com/developerworks/cn/java/j-lo-performance-analysissy-tools/index.html"),"\n",(0,s.kt)("a",{parentName:"p",href:"https://www.ibm.com/developerworks/cn/java/j-lo-performance-analysissy-tools2/index.html"},"https://www.ibm.com/developerworks/cn/java/j-lo-performance-analysissy-tools2/index.html"),"\n",(0,s.kt)("a",{parentName:"p",href:"https://www.ibm.com/developerworks/cn/java/j-lo-performance-analysissy-tools3/"},"https://www.ibm.com/developerworks/cn/java/j-lo-performance-analysissy-tools3/")),(0,s.kt)("p",null,"\u6d4b\u8bd5 \u5185\u5b58\u6cc4\u6f0f , \u5e76\u53d1, \u540c\u6b65, ...\u95ee\u9898"),(0,s.kt)("h3",{id:"71-\u6027\u80fd\u6307\u6807"},"7.1. \u6027\u80fd\u6307\u6807"),(0,s.kt)("p",null,"RS: response time "),(0,s.kt)("p",null,"QPS\uff1aQueries Per Second\u610f\u601d\u662f\u201c\u6bcf\u79d2\u67e5\u8be2\u6570\u201d\uff0c\u662f\u4e00\u53f0\u670d\u52a1\u5668\u6bcf\u79d2\u80fd\u591f\u7684\u67e5\u8be2\u6b21\u6570, \u6b21/\u79d2 , qps \u8861\u91cf\u63a5\u53e3\u6027\u80fd"),(0,s.kt)("p",null,"TPS\uff1a\u662fTransactionsPerSecond\u7684\u7f29\u5199, \u6bcf\u79d2\u4ea4\u6613\u6570, \u7b14/\u79d2, \u4e00\u4e2a\u4ea4\u6613/\u4e8b\u52a1\u53ef\u80fd\u5305\u542b\u591a\u4e2a\u8bf7\u6c42, tps \u7528\u6765\u8861\u91cf\u6574\u4e2a\u4e1a\u52a1\u6d41\u7a0b\u6027\u80fd; \u91d1\u878d\u7cfb\u7edf 1000tps-5000tps, \u4fdd\u9669\u7cfb\u7edf 100-100000tps, \u5236\u9020\u884c\u4e1a 100-5000tps, \u7535\u5546 10000-1000000tps, \u4e2d\u5c0f\u578b\u7f51\u7ad9\u7c7b\u4f3c\u91d1\u878d\u7cfb\u7edf"),(0,s.kt)("p",null,"\u541e\u5410\u91cf: \u8868\u793a\u5e94\u7528\u7cfb\u7edf\u6bcf\u79d2\u949f\u6700\u5927\u80fd\u63a5\u53d7\u7684\u7528\u6237\u8bbf\u95ee\u91cf , \u53cd\u5e94\u7cfb\u7edf\u7684\u627f\u538b\u80fd\u529b; \u5355\u4e2areqeust \u5bf9CPU\u6d88\u8017\u8d8a\u9ad8\uff0c\u5916\u90e8\u7cfb\u7edf\u63a5\u53e3\u3001IO\u5f71\u54cd\u901f\u5ea6\u8d8a\u6162\uff0c\u7cfb\u7edf\u541e\u5410\u80fd\u529b\u8d8a\u4f4e\uff0c\u53cd\u4e4b\u8d8a\u9ad8, \u7c7b\u4f3c tps, qps"),(0,s.kt)("h3",{id:"72-siege"},"7.2. siege"),(0,s.kt)("p",null,"http \u538b\u6d4b\u5de5\u5177"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://www.joedog.org/siege-manual/"},"https://www.joedog.org/siege-manual/")),(0,s.kt)("p",null,"TODO"),(0,s.kt)("h3",{id:"73-gatling"},"7.3. Gatling"),(0,s.kt)("p",null,"\u7c7b\u4f3c jmeter, \u4f7f\u7528 Scala"),(0,s.kt)("h3",{id:"74-jmeter"},"7.4. jmeter"),(0,s.kt)("p",null,"\u4e00\u822c\u67e5\u770b \u541e\u5410\u91cf, 90% \u8bf7\u6c42\u54cd\u5e94\u65f6\u95f4, 99%\u54cd\u5e94\u65f6\u95f4"),(0,s.kt)("h3",{id:"75-ab"},"7.5. ab"),(0,s.kt)("p",null,"apache benchmark\u5e76\u53d1\u6d4b\u8bd5\u5de5\u5177"),(0,s.kt)("h3",{id:"hey"},"hey"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/rakyll/hey"},"https://github.com/rakyll/hey")),(0,s.kt)("h3",{id:"vegeta"},"vegeta"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/tsenart/vegeta"},"https://github.com/tsenart/vegeta")),(0,s.kt)("h3",{id:"76-jmh-\u65b9\u6cd5\u7ea7\u522b\u7684\u6027\u80fd\u6d4b\u8bd5"},"7.6. jmh \u65b9\u6cd5\u7ea7\u522b\u7684\u6027\u80fd\u6d4b\u8bd5"),(0,s.kt)("p",null,"\u60f3\u51c6\u786e\u5730\u77e5\u9053\u67d0\u4e2a\u65b9\u6cd5\u9700\u8981\u6267\u884c\u591a\u957f\u65f6\u95f4\uff0c\u4ee5\u53ca\u6267\u884c\u65f6\u95f4\u548c\u8f93\u5165\u4e4b\u95f4\u7684\u76f8\u5173\u6027\n\u5bf9\u6bd4\u63a5\u53e3\u4e0d\u540c\u5b9e\u73b0\u5728\u7ed9\u5b9a\u6761\u4ef6\u4e0b\u7684\u541e\u5410\u91cf\n\u67e5\u770b\u591a\u5c11\u767e\u5206\u6bd4\u7684\u8bf7\u6c42\u5728\u591a\u957f\u65f6\u95f4\u5185\u5b8c\u6210"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://www.zhihu.com/question/276455629/answer/1259967560"},"https://www.zhihu.com/question/276455629/answer/1259967560")),(0,s.kt)("p",null,"jdk9 \u4e4b\u524d\u9700\u8981\u52a0\u5165\u4f9d\u8d56"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>org.openjdk.jmh</groupId>\n    <artifactId>jmh-core</artifactId>\n    <version>1.23</version>\n</dependency>\n<dependency>\n    <groupId>org.openjdk.jmh</groupId>\n    <artifactId>jmh-generator-annprocess</artifactId>\n    <version>1.23</version>\n</dependency>\n\n")),(0,s.kt)("h2",{id:"8-junit"},"8. Junit"),(0,s.kt)("p",null,"\u8fd9\u91cc\u4e3b\u8981\u4ecb\u7ecd Junit5 (",(0,s.kt)("a",{parentName:"p",href:"https://junit.org/junit5/docs/current/user-guide/#overview-getting-started"},"https://junit.org/junit5/docs/current/user-guide/#overview-getting-started"),")"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-xml"},"    <properties>\n        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>\n        <maven.compiler.source>1.8</maven.compiler.source>\n        <maven.compiler.target>${maven.compiler.source}</maven.compiler.target>\n        <junit.jupiter.version>5.6.2</junit.jupiter.version>\n    </properties>\n\n    <dependencies>\n        <dependency>\n            <groupId>org.junit.jupiter</groupId>\n            <artifactId>junit-jupiter</artifactId>\n            <version>${junit.jupiter.version}</version>\n            <scope>test</scope>\n        </dependency>\n    </dependencies>\n")),(0,s.kt)("p",null,"JUnit 5 = JUnit Platform + JUnit Jupiter + JUnit Vintage"),(0,s.kt)("h2",{id:"9-ab-test"},"9. ab test"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/tmbGaWHp8k2MjByIa6z7MA"},"https://mp.weixin.qq.com/s/tmbGaWHp8k2MjByIa6z7MA")),(0,s.kt)("p",null,"TODO"),(0,s.kt)("h2",{id:"10-\u96c6\u6210\u6d4b\u8bd5-testcontainers"},"10. \u96c6\u6210\u6d4b\u8bd5 Testcontainers"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://blog.csdn.net/mail_liuxing/article/details/99075606"},"https://blog.csdn.net/mail_liuxing/article/details/99075606"),"\n",(0,s.kt)("a",{parentName:"p",href:"https://github.com/testcontainers/testcontainers-java"},"https://github.com/testcontainers/testcontainers-java")),(0,s.kt)("h2",{id:"11-\u4f18\u5316\u6d4b\u8bd5\u7f16\u5199\u4f53\u9a8c"},"11. \u4f18\u5316\u6d4b\u8bd5\u7f16\u5199\u4f53\u9a8c"),(0,s.kt)("p",null,"groovy + spock"),(0,s.kt)("h2",{id:"12-talend-api-tester-\u6d4f\u89c8\u5668\u63d2\u4ef6"},"12. talend api tester \u6d4f\u89c8\u5668\u63d2\u4ef6"),(0,s.kt)("p",null,"\u7c7b\u4f3c postman, \u66f4\u8f7b\u91cf"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://www.bilibili.com/video/av90263035/"},"https://www.bilibili.com/video/av90263035/")," "),(0,s.kt)("h2",{id:"\u81ea\u52a8\u5316\u6d4b\u8bd5"},"\u81ea\u52a8\u5316\u6d4b\u8bd5"),(0,s.kt)("p",null,"Playwright"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://seleniumbase.io/"},"https://seleniumbase.io/")),(0,s.kt)("p",null,"cypress "),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/metersphere/metersphere"},"https://github.com/metersphere/metersphere")," \u63a5\u53e3\u6d4b\u8bd5"),(0,s.kt)("p",null,"casperjs \u524d\u7aef\u81ea\u52a8\u5316\u6d4b\u8bd5\u65b9\u6848"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://www.bilibili.com/video/BV1nh411974p?p=8"},"https://www.bilibili.com/video/BV1nh411974p?p=8")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"\u4e0d\u8fc7\u65e0\u8bba\u4ec0\u4e48\u65f6\u5019\uff0c\u90fd\u5e94\u8be5\u662f\u5927\u91cf\u7684\u505a\u5355\u5143\u6d4b\u8bd5\uff0c\u5927\u91cf\u7684\u505a API \u81ea\u52a8\u5316\u6d4b\u8bd5\uff0c\u6839\u636e\u5177\u4f53\u9879\u76ee\u60c5\u51b5\uff0c\u5c11\u91cf\u6216\u4e2d\u7b49\u5f3a\u5ea6\u7684\u505a\u524d\u7aef\u81ea\u52a8\u5316")),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://zhuanlan.zhihu.com/p/410559730"},"https://zhuanlan.zhihu.com/p/410559730")," jvm-sandbox-repeater \u6d41\u91cf\u5f55\u5236\n",(0,s.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7280429214607736890"},"https://juejin.cn/post/7280429214607736890")," \u964d\u566a"))}d.isMDXComponent=!0}}]);