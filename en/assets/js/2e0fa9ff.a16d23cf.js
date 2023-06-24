"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2529],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return d}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),c=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(a),d=n,g=u["".concat(p,".").concat(d)]||u[d]||m[d]||i;return a?r.createElement(g,o(o({ref:t},s),{},{components:a})):r.createElement(g,o({ref:t},s))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},52285:function(e,t,a){a.r(t),a.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return m}});var r=a(83117),n=a(80102),i=(a(67294),a(3905)),o=["components"],l={title:"Best Practice for Spring Boot Working with Docker",date:"2023-1-2",tags:["spring","docker"],authors:"me",keywords:["spring","docker"]},p=void 0,c={permalink:"/en/spring-boot-with-docker",editUrl:"https://github.com/xiaoyureed/xiaoyureed.github.io/edit/main/blog/spring-boot-with-docker/index.md",source:"@site/blog/spring-boot-with-docker/index.md",title:"Best Practice for Spring Boot Working with Docker",description:"This article I will talking about How to package spring boot app into a docker image , and how to optimize the size of the image.",date:"2023-01-02T00:00:00.000Z",formattedDate:"January 2, 2023",tags:[{label:"spring",permalink:"/en/tags/spring"},{label:"docker",permalink:"/en/tags/docker"}],readingTime:2.033333333333333,hasTruncateMarker:!0,authors:[{name:"Xiao Yu",title:"Unknown",url:"https://github.com/xiaoyureed",imageURL:"https://github.com/xiaoyureed.png",key:"me"}],frontMatter:{title:"Best Practice for Spring Boot Working with Docker",date:"2023-1-2",tags:["spring","docker"],authors:"me",keywords:["spring","docker"]},prevItem:{title:"Establish the Docker Develop Environment for frontend",permalink:"/en/react-vue-docker"},nextItem:{title:"\u641c\u96c6\u673a\u5668\u5b66\u4e60\u7528\u4e8e\u98df\u54c1\u884c\u4e1a\u7684\u6848\u4f8b",permalink:"/en/2023/01/01/food-machine-learning"}},s={authorsImageUrls:[void 0]},m=[{value:"a basic example",id:"a-basic-example",level:2},{value:"get a better image layer",id:"get-a-better-image-layer",level:2},{value:"modularize the project",id:"modularize-the-project",level:2},{value:"multi-stage build",id:"multi-stage-build",level:2},{value:"try to make the native image",id:"try-to-make-the-native-image",level:2},{value:"reference materials",id:"reference-materials",level:2}],u={toc:m};function d(e){var t=e.components,a=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This article I will talking about How to package spring boot app into a docker image , and how to optimize the size of the image."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#a-basic-example"},"a basic example")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#get-a-better-image-layer"},"get a better image layer")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#modularize-the-project"},"modularize the project")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#multi-stage-build"},"multi-stage build")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#try-to-make-the-native-image"},"try to make the native image")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#reference-materials"},"reference materials"))),(0,i.kt)("h2",{id:"a-basic-example"},"a basic example"),(0,i.kt)("p",null,"First of all, let's take a look at the simplest dockerfile "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dockerfile"},'# \u6700\u597d\u662f\u9009\u62e9jre\u548cslim\u540e\u7f00\u7684\u57fa\u7840\u955c\u50cf\uff0c\u5b83\u540c\u65f6\u5bf9linux\u548cJDK\u505a\u88c1\u526a\uff0c\u80fd\u6700\u5c0f\u5316\u955c\u50cf\u7684\u4f53\u79ef\u800c\u4e0d\u5f71\u54cdjava\u7a0b\u5e8f\u7684\u8fd0\u884c\u6027\u80fd\n# for java8 we can try openjdk:8-jre-alpine\nFROM openjdk:11-jre-slim\n\nWORKDIR /app\n\nARG JAR_FILE=./target/*.jar\nCOPY ${JAR_FILE} app.jar\n\nENTRYPOINT [ "java", "-jar", "/app/app.jar" ]\n\n')),(0,i.kt)("p",null,"But there are several weaknesses:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the container will be started by this user by default: root, there are potential safety risk"),(0,i.kt)("li",{parentName:"ul"},"the jar file is too fat, which means the image layer is not been handling well, each time we change the code, the image build time may be too long"),(0,i.kt)("li",{parentName:"ul"},"the basic image is too huge (try to use the jre instead of the jdk)")),(0,i.kt)("h2",{id:"get-a-better-image-layer"},"get a better image layer"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dockerfile"},'\nFROM eclipse-temurin:17-jre-jammy as builder\nARG JAR_FILE=target/*.jar\nWORKDIR application\nCOPY ${JAR_FILE} application.jar\nRUN java -Djarmode=layertools -jar application.jar extract\n\n################\n\nFROM eclipse-temurin:17-jre-jammy\nMAINTAINER xiaoyureed <rainx000@qq.com>\nWORKDIR /application\nCOPY --from=builder application/dependencies/ ./\nCOPY --from=builder application/spring-boot-loader/ ./\nCOPY --from=builder application/snapshot-dependencies/ ./\nCOPY --from=builder application/application/ ./\n\nENV JVM_OPTS="-Xmx256m -Xms256m" \\\n    HALO_WORK_DIR="/root/.halo2" \\\n    SPRING_CONFIG_LOCATION="optional:classpath:/;optional:file:/root/.halo2/" \\\n    TZ=Asia/Shanghai\n\nRUN ln -sf /usr/share/zoneinfo/$TZ /etc/localtime \\\n    && echo $TZ > /etc/timezone \\\n\nEXPOSE 8080\nENTRYPOINT ["sh", "-c", "java ${JVM_OPTS} -Djava.security.egd=file:/dev/./urandom org.springframework.boot.loader.JarLauncher ${0} ${@}"]\n\n\nFROM openjdk:17-jdk-slim-buster\n\nRUN addgroup -S spring && adduser -S spring -G spring\nUSER spring:spring\n\nARG DEPENDENCY=target/dependency\n# \u590d\u5236\u4f9d\u8d56, \u8fd9\u90e8\u5206\u53d8\u52a8\u4e0d\u591a, \u653e\u5728 image \u6700\u5e95\u5c42\nCOPY ${DEPENDENCY}/BOOT-INF/lib /app/lib\n# \u4e0b\u9762\u4e24\u5c42\u662f\u5e94\u7528\u7a0b\u5e8f, \u7ecf\u5e38\u53d8\u52a8, \u653e\u5728\u6700\u4e0a\u5c42 (\u8fd9\u6837\u6bcf\u6b21\u91cd\u65b0 build image, \u4f1a\u6700\u5927\u7a0b\u5ea6\u5229\u7528 docker \u955c\u50cf\u7f13\u5b58)\nCOPY ${DEPENDENCY}/META-INF /app/META-INF\nCOPY ${DEPENDENCY}/BOOT-INF/classes /app\n\n# \u76f4\u63a5\u4f7f\u7528\u4e3b\u7c7b\u6765\u542f\u52a8\u7a0b\u5e8f\u6bd4  Spring Boot loader  \u542f\u52a8\u901f\u5ea6\u66f4\u5feb\u3002\nENTRYPOINT ["java", "-cp", "app:app/lib/*", "com.example.demo.DemoApplication"]\n\n# \u4e5f\u53ef\u4ee5\u5c06 Spring Boot loader \u62f7\u8d1d\u5230\u5bb9\u5668\u91cc\uff0c\u4f7f\u7528 org.springframework.boot.loader.JarLauncher \u6765\u542f\u52a8\u5e94\u7528\n# \u6267\u884c java org.springframework.boot.loader.JarLauncher \u542f\u52a8\n\n# \u4f7f\u7528 JarLauncher \u542f\u52a8\u5e94\u7528\u7684\u597d\u5904\u662f\u4e0d\u7528\u518d\u786c\u7f16\u7801\u542f\u52a8\u7c7b\uff0c\u5bf9\u4e8e\u4efb\u610f\u7684 Spring Boot \u9879\u76ee\u90fd\u9002\u7528\uff0c\u800c\u4e14\u8fd8\u53ef\u4ee5\u4fdd\u8bc1 classpath \u7684\u52a0\u8f7d\u987a\u5e8f\uff0c\u5728 BOOT-INF \u76ee\u5f55\u4e0b\u53ef\u4ee5\u770b\u5230\u4e00\u4e2a classpath.idx \u6587\u4ef6\uff0cJarLauncher \u5c31\u662f\u7528\u5b83\u6765\u6784\u5efa classpath \u7684\u3002\n')),(0,i.kt)("h2",{id:"modularize-the-project"},"modularize the project"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://sergiomartinrubio.com/articles/build-a-docker-jre-image-with-java-17-and-spring/"},"https://sergiomartinrubio.com/articles/build-a-docker-jre-image-with-java-17-and-spring/")),(0,i.kt)("p",null,"Making your project modularized is a great way to reduce the final docker images size"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Another way to conduct this action (modularization) is by using ",(0,i.kt)("a",{parentName:"p",href:"https://openjdk.org/projects/jigsaw/quick-start#linker"},"JLink"))),(0,i.kt)("h2",{id:"multi-stage-build"},"multi-stage build"),(0,i.kt)("h2",{id:"try-to-make-the-native-image"},"try to make the native image"),(0,i.kt)("p",null,"The image size can reduce greatly by using native image, and the other aspects such as the time taken to start, the memory occupied.... Generally speaking, there are so many benefits."),(0,i.kt)("h2",{id:"reference-materials"},"reference materials"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/halo-dev/halo"},"https://github.com/halo-dev/halo"),"  can be taken as a best practice"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://snyk.io/blog/best-practices-to-build-java-containers-with-docker/"},"https://snyk.io/blog/best-practices-to-build-java-containers-with-docker/"),"\n",(0,i.kt)("a",{parentName:"p",href:"https://blog.monosoul.dev/2022/04/25/reduce-java-docker-image-size/"},"https://blog.monosoul.dev/2022/04/25/reduce-java-docker-image-size/")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://mritd.com/2022/11/08/java-containerization-guide/"},"https://mritd.com/2022/11/08/java-containerization-guide/")," tips for java docker image"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://hub.docker.com/_/eclipse-temurin/tags?page=1&name=17"},"https://hub.docker.com/_/eclipse-temurin/tags?page=1&name=17")," the jdk17 base image."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://zhuanlan.zhihu.com/p/245645260"},"https://zhuanlan.zhihu.com/p/245645260")," tips, which base image we should choose"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/GoogleContainerTools/jib"},"https://github.com/GoogleContainerTools/jib")," maven plugin produced by google to generate docker image."))}d.isMDXComponent=!0}}]);