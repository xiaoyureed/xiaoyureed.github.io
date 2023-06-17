"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4394],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=u(n),m=o,d=g["".concat(s,".").concat(m)]||g[m]||c[m]||a;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},62421:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),i=["components"],l={title:"Coding Gracefully with Gradle, Java17 and Spring Boot Jpa",date:new Date("2023-03-22T00:00:00.000Z"),tags:["gradle","java","jpa"],authors:"me",keywords:["gradle","java","jpa"]},s=void 0,u={permalink:"/en/coding-gracefully-with-gradle-java17-jpa",editUrl:"https://github.com/xiaoyureed/xiaoyureed.github.io/edit/main/blog/coding-gracefully-with-gradle-java17-jpa/index.md",source:"@site/blog/coding-gracefully-with-gradle-java17-jpa/index.md",title:"Coding Gracefully with Gradle, Java17 and Spring Boot Jpa",description:"This Article I'm gonna demo How to develop a web based scaffold by using Gradle, Java17 and Jpa",date:"2023-03-22T00:00:00.000Z",formattedDate:"March 22, 2023",tags:[{label:"gradle",permalink:"/en/tags/gradle"},{label:"java",permalink:"/en/tags/java"},{label:"jpa",permalink:"/en/tags/jpa"}],readingTime:1.5433333333333332,hasTruncateMarker:!0,authors:[{name:"Xiao Yu",title:"Unknown",url:"https://github.com/xiaoyureed",imageURL:"https://github.com/xiaoyureed.png",key:"me"}],frontMatter:{title:"Coding Gracefully with Gradle, Java17 and Spring Boot Jpa",date:"2023-03-22T00:00:00.000Z",tags:["gradle","java","jpa"],authors:"me",keywords:["gradle","java","jpa"]},prevItem:{title:"Publish Blogs by Using Docusaurus and Github Pages",permalink:"/en/2023/04/20/docusaurus-github-pages-blog"},nextItem:{title:"Establish the Docker Develop Environment for frontend",permalink:"/en/react-vue-docker"}},p={authorsImageUrls:[void 0]},c=[{value:"establish the project structure",id:"establish-the-project-structure",level:2},{value:"try the basic smoke test",id:"try-the-basic-smoke-test",level:2},{value:"git hooks support",id:"git-hooks-support",level:2},{value:"how to reduce the duration of test execution",id:"how-to-reduce-the-duration-of-test-execution",level:2}],g={toc:c};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This Article I'm gonna demo How to develop a web based scaffold by using Gradle, Java17 and Jpa"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#establish-the-project-structure"},"establish the project structure")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#try-the-basic-smoke-test"},"try the basic smoke test")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#git-hooks-support"},"git hooks support")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#how-to-reduce-the-duration-of-test-execution"},"how to reduce the duration of test execution"))),(0,a.kt)("h2",{id:"establish-the-project-structure"},"establish the project structure"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"java -version\n# openjdk17\ngradle -v\n# v7.4\n\nmkdir graceful-coding\ncd ...\n\n# let's try to build an app having the similar functionality to zhihu to conduct the demo\n\nmkdir question-service\ncd ...\n\ntouch settings.gradle.kts\ntouch build.gradle.kts\n")),(0,a.kt)("p",null,"settings.gradle.kts includes the following content:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'rootProject.name = "question-service"\n\npluginManagement {\n    repositories {\n        mavenLocal()\n        maven("https://mirrors.cloud.tencent.com/nexus/repository/maven-public/")\n        mavenCentral()\n        gradlePluginPortal()\n    }\n}\n\n\n')),(0,a.kt)("p",null,"build.gradle.kts :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'import org.springframework.boot.gradle.plugin.SpringBootPlugin\n\nplugins {\n    java\n    id("org.springframework.boot") version "3.0.6"\n}\n\njava {\n    toolchain {\n        languageVersion.set(JavaLanguageVersion.of(17))\n    }\n}\n\nrepositories {\n    mavenLocal()\n    maven("https://mirrors.cloud.tencent.com/nexus/repository/maven-public/")\n    mavenCentral()\n\n}\n\ndependencies {\n    implementation(platform(SpringBootPlugin.BOM_COORDINATES))\n    implementation("org.springframework.boot:spring-boot-starter-web")\n    implementation("org.springframework.boot:spring-boot-starter")\n    implementation("org.springframework.boot:spring-boot-starter-actuator")\n    testImplementation("org.springframework.boot:spring-boot-starter-test")\n\n\n//\n//    testImplementation(platform("org.junit:junit-bom:5.9.3"))\n//    testRuntimeOnly("org.junit.jupiter:junit-jupiter-engine")\n//    testImplementation("org.junit.jupiter:junit-jupiter-api")\n\n\n}\n\ntasks {\n    test {\n        useJUnitPlatform()\n    }\n}\n\n\n')),(0,a.kt)("p",null,"generate gradle wrapper"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"gradle wrapper\n\n\n./gradlew build\n")),(0,a.kt)("h2",{id:"try-the-basic-smoke-test"},"try the basic smoke test"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'\npackage io.github.xiaoyureed.zhihualternative.questionservice;\n\nimport org.junit.jupiter.api.Test;\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;\nimport org.springframework.boot.test.context.SpringBootTest;\nimport org.springframework.test.web.servlet.MockMvc;\n\nimport static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;\nimport static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;\nimport static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;\n\n/**\n * smoke test: to verify if this app is running well\n */\n@SpringBootTest\n@AutoConfigureMockMvc\npublic class SmokeTest {\n    @Autowired\n    MockMvc mockMvc;\n\n    @Test\n    void should_return_ok_when_request_endpoint_of_health() throws Exception {\n        mockMvc.perform(get("/actuator/health"))\n            .andExpect(status().isOk())\n            .andExpect(jsonPath("$.status").value("UP"));\n    }\n}\n\n')),(0,a.kt)("h2",{id:"git-hooks-support"},"git hooks support"),(0,a.kt)("p",null,"create ",(0,a.kt)("inlineCode",{parentName:"p"},"githooks/pre-commit")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"#!/usr/bin/env sh\n\n# -q: quiet, -k: indexed, -u\ngit stash -qku\n# exec test\n./gradlew clean check\nRESULT=$?\ngit stash pop -q\nexit $RESULT\n\n\n")),(0,a.kt)("p",null,"set the hook up : ",(0,a.kt)("inlineCode",{parentName:"p"},"git config core.hooksPath <githooks dir>")),(0,a.kt)("h2",{id:"how-to-reduce-the-duration-of-test-execution"},"how to reduce the duration of test execution"),(0,a.kt)("p",null,"If you feel like a shorter duration for test execution, try the following strategy"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u6d4b\u8bd5\u4ee3\u7801\u4e2d\u662f\u5426\u5b58\u5728 block \u7ebf\u7a0b\u7684\u64cd\u4f5c\uff1f\u8fd9\u7c7b\u64cd\u4f5c\u4f1a\u4e25\u91cd\u62d6\u6162\u6d4b\u8bd5\u8fd0\u884c\u6548\u7387\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5bf9\u4e0d\u540c\u5c42\u7684\u4ee3\u7801\u8bbe\u8ba1\u4e0d\u540c\u7684\u6d4b\u8bd5\u7b56\u7565\uff0c\u8ba9\u6bcf\u4e00\u5c42\u7684\u6d4b\u8bd5\u5c3d\u53ef\u80fd\u7684\u8f7b\u91cf\uff08\u6301\u4e45\u5316\u5c42\u53ea\u6ce8\u5165\u4e8e Data JPA \u76f8\u5173\u7684\u4e0a\u4e0b\u6587\uff1b\u4e1a\u52a1\u5c42\u6d4b\u8bd5\u53ef\u4ee5 mock \u6301\u4e45\u5316\u5c42\u7684 bean\uff0cWeb \u5c42\u7684\u6d4b\u8bd5\u53ef\u4ee5 mock \u4e1a\u52a1\u5c42\uff09\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u542f\u7528 gradle \u5e76\u53d1\u8fd0\u884c\u4efb\u52a1\u3002")),(0,a.kt)("p",null,"\u5982\u679c\u8fd8\u662f\u89c9\u5f97\u672c\u5730\u6267\u884c\u6d4b\u8bd5\u901f\u5ea6\u65e0\u6cd5\u63a5\u53d7, \u8bd5\u7740\u628a\u5355\u5143\u6d4b\u8bd5\u6267\u884c\u540e\u79fb\u5230 CI \u4e0a\uff0c\u53ea\u5141\u8bb8\u901a\u8fc7\u6d4b\u8bd5\u7684\u4ee3\u7801\u53ef\u4ee5\u88ab\u96c6\u6210\uff08\u4f46\u8fd9\u6837\u4f1a\u5ef6\u957f\u5931\u8d25\u53cd\u9988\u5468\u671f\uff09\u3002"))}m.isMDXComponent=!0}}]);