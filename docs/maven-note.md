---
title: Maven Notes🌈
tags:
  - maven
date: 2014-03-20 13:22:27
toc_min_heading_level: 2
toc_max_heading_level: 5
---

<div align="center">

https://github.com/blinkfox/jpack-maven-plugin 对 SpringBoot 服务打包为 Windows、Linux、Docker、Helm Chart下可部署包的 Maven 插件

Maven Note | [替换pom.xml为其他格式的文件](https://github.com/takari/polyglot-maven) | [一个插件使用所有前端工具](https://github.com/eirslett/frontend-maven-plugin)
跨平台, 服务于java项目的管理工具(项目构建, 依赖管理, 项目信息管理)
类似的还有 Gradle.

jetbrains package search : https://pkg.biuaxia.cn/
</div>

- [1. error solutions](#1-error-solutions)
- [2. 命令行](#2-命令行)
- [3. spring-io-platform](#3-spring-io-platform)
- [4. why maven](#4-why-maven)
- [5. Maven是什么](#5-maven是什么)
- [6. maven wrapper](#6-maven-wrapper)
  - [6.1. 国内使用](#61-国内使用)
- [7. 安装](#7-安装)
  - [7.1. aliyun 阿里云仓库](#71-aliyun-阿里云仓库)
  - [7.2. spring 仓库](#72-spring-仓库)
  - [7.3. 配置本地仓库地址](#73-配置本地仓库地址)
  - [7.4. 配置远程仓库](#74-配置远程仓库)
  - [7.5. 配置远程仓库认证(非必须)](#75-配置远程仓库认证非必须)
  - [7.6. 部署到远程仓库](#76-部署到远程仓库)
  - [7.7. 阿里云 aliyun 镜像](#77-阿里云-aliyun-镜像)
- [8. Maven项目目录规范](#8-maven项目目录规范)
- [9. demo](#9-demo)
- [10. 生命周期命令 and 包含效果](#10-生命周期命令-and-包含效果)
- [11. 安装卸载本地包](#11-安装卸载本地包)
- [12. 打包成可执行jar](#12-打包成可执行jar)
- [13. 使用archetype生成项目骨架](#13-使用archetype生成项目骨架)
- [14. 坐标](#14-坐标)
- [15. 快照版本和发布版本](#15-快照版本和发布版本)
- [16. 依赖的配置](#16-依赖的配置)
  - [16.1. 基本元素](#161-基本元素)
  - [16.2. scope](#162-scope)
  - [16.3. 传递性依赖](#163-传递性依赖)
  - [16.4. Maven的依赖调解特性](#164-maven的依赖调解特性)
  - [16.5. 可选依赖](#165-可选依赖)
  - [16.6. 排除依赖](#166-排除依赖)
  - [16.7. 依赖的优化](#167-依赖的优化)
  - [16.8. 引入外部依赖](#168-引入外部依赖)
- [17. 案例:账户注册服务](#17-案例账户注册服务)
  - [17.1. 需求](#171-需求)
  - [17.2. 简单的设计](#172-简单的设计)
  - [17.3. account-email模块](#173-account-email模块)
    - [17.3.1. parent-pom](#1731-parent-pom)
    - [17.3.2. email-pom](#1732-email-pom)
    - [17.3.3. 主代码\&测试](#1733-主代码测试)
    - [17.3.4. 测试资源-主资源读取顺序](#1734-测试资源-主资源读取顺序)
    - [17.3.5. spring注入配置](#1735-spring注入配置)
  - [17.4. account-persist模块](#174-account-persist模块)
    - [17.4.1. account-persist的pom](#1741-account-persist的pom)
    - [17.4.2. 主代码\&测试](#1742-主代码测试)
    - [17.4.3. 注入配置](#1743-注入配置)
  - [17.5. account-captcha模块](#175-account-captcha模块)
    - [17.5.1. captcha模块的pom](#1751-captcha模块的pom)
    - [17.5.2. 主代码\&测试](#1752-主代码测试)
    - [17.5.3. 注入配置文件](#1753-注入配置文件)
  - [17.6. account-service模块](#176-account-service模块)
    - [17.6.1. service-pom配置](#1761-service-pom配置)
    - [17.6.2. 主代码](#1762-主代码)
    - [17.6.3. spring配置文件](#1763-spring配置文件)
    - [17.6.4. 安装account-service模块注意](#1764-安装account-service模块注意)
  - [17.7. account-web模块](#177-account-web模块)
    - [17.7.1. web.xml](#1771-webxml)
    - [17.7.2. pom.xml](#1772-pomxml)
- [18. Maven中的测试](#18-maven中的测试)
  - [18.1. maven-surefire-plugin](#181-maven-surefire-plugin)
  - [18.2. 如何跳过测试](#182-如何跳过测试)
  - [18.3. 动态指定运行的测试类](#183-动态指定运行的测试类)
  - [18.4. 包含\&排除测试用例](#184-包含排除测试用例)
  - [18.5. 测试报告\&测试覆盖率报告](#185-测试报告测试覆盖率报告)
  - [18.6. 改用TestNG代替Junit](#186-改用testng代替junit)
  - [18.7. 打包测试代码](#187-打包测试代码)
- [19. 生命周期](#19-生命周期)
- [20. 插件](#20-插件)
  - [20.1. 查看插件帮助文档](#201-查看插件帮助文档)
  - [20.2. 插件绑定](#202-插件绑定)
  - [20.3. 插件的自定义绑定](#203-插件的自定义绑定)
  - [20.4. 在命令行给插件设置参数](#204-在命令行给插件设置参数)
  - [20.5. 在pom中设置插件的全局参数](#205-在pom中设置插件的全局参数)
  - [20.6. 在pom中给插件任务配置个性化参数](#206-在pom中给插件任务配置个性化参数)
  - [20.7. 常用的插件](#207-常用的插件)
    - [20.7.1. 打可执行包插件](#2071-打可执行包插件)
      - [20.7.1.1. maven-shade-plugin](#20711-maven-shade-plugin)
      - [20.7.1.2. maven-assembly-plugin](#20712-maven-assembly-plugin)
    - [20.7.2. maven-war-plugin 打 war 包](#2072-maven-war-plugin-打-war-包)
    - [20.7.3. maven-eclipse-plugin](#2073-maven-eclipse-plugin)
    - [20.7.4. 执行脚本命令](#2074-执行脚本命令)
      - [20.7.4.1. exec-maven-plugin](#20741-exec-maven-plugin)
      - [20.7.4.2. bash-maven-plugin 脚本内容直接卸载 pom 文件中](#20742-bash-maven-plugin-脚本内容直接卸载-pom-文件中)
      - [20.7.4.3. maven-antrun-plugin 更强大](#20743-maven-antrun-plugin-更强大)
    - [20.7.5. versions-maven-plugin 管理子模块版本](#2075-versions-maven-plugin-管理子模块版本)
    - [20.7.6. build-helper-maven-plugin 自定义 build目录结构](#2076-build-helper-maven-plugin-自定义-build目录结构)
    - [20.7.7. maven-dependency-plugin 管理依赖库](#2077-maven-dependency-plugin-管理依赖库)
    - [20.7.8. jetty和tomcat](#2078-jetty和tomcat)
    - [20.7.9. maven-source-plugin 打包源码](#2079-maven-source-plugin-打包源码)
    - [native-maven-plugin 打二进制包](#native-maven-plugin-打二进制包)
    - [jib-maven-plugin 打 docker 镜像](#jib-maven-plugin-打-docker-镜像)
    - [20.7.10. maven-resources-plugins 处理资源替换](#20710-maven-resources-plugins-处理资源替换)
    - [20.7.11. maven-compiler-plugin 编译](#20711-maven-compiler-plugin-编译)
    - [20.7.12. spring-boot-maven-plugin](#20712-spring-boot-maven-plugin)
    - [20.7.13. maven-install-plugin](#20713-maven-install-plugin)
    - [20.7.14. frontend-maven-plugin 管理前端环境](#20714-frontend-maven-plugin-管理前端环境)
  - [20.8. 编写maven插件](#208-编写maven插件)
- [21. maven属性](#21-maven属性)
- [22. 开启资源文件过滤](#22-开启资源文件过滤)
- [23. 开启web资源过滤](#23-开启web资源过滤)
- [24. maven profile 多环境配置](#24-maven-profile-多环境配置)
  - [24.1. profile 基本使用](#241-profile-基本使用)
  - [24.2. profile build](#242-profile-build)
  - [24.3. 配置默认 jdk 编译版本](#243-配置默认-jdk-编译版本)
- [25. 模块的聚合\&继承](#25-模块的聚合继承)
- [26. dependencyMangement元素](#26-dependencymangement元素)
- [27. pluginManagement元素](#27-pluginmanagement元素)
- [28. 反应堆](#28-反应堆)
- [29. 历史项目改造为maven项目](#29-历史项目改造为maven项目)
- [30. 检查依赖冲突](#30-检查依赖冲突)
- [31. Maven项目的持续集成](#31-maven项目的持续集成)
- [32. 编写Maven模板archetype](#32-编写maven模板archetype)
  - [32.1. archetype组成元素](#321-archetype组成元素)
  - [32.2. archetype-demo](#322-archetype-demo)
    - [32.2.1. archetype自身pom](#3221-archetype自身pom)
    - [32.2.2. 模版数据](#3222-模版数据)
    - [32.2.3. 描述符文件](#3223-描述符文件)
    - [32.2.4. 使用](#3224-使用)
  - [32.3. archetype-catalog](#323-archetype-catalog)


# 1. error solutions

```
error:
maven blocked mirror for repositories

solutions:
https://stackoverflow.com/questions/67833372/getting-blocked-mirror-for-repositories-maven-error-even-after-adding-mirrors
https://gist.github.com/vegaasen/1d545aafeda867fcb48ae3f6cd8fd7c7

Put this section in your ~/.m2/settings.xml-file, and rerun mvn with -U option. U're done ✅.

<settings xmlns="http://maven.apache.org/SETTINGS/1.2.0"
          xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
          xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.2.0 http://maven.apache.org/xsd/settings-1.2.0.xsd">
  ...
    <mirrors>
        <mirror>
            <id>maven-default-http-blocker</id>
            <mirrorOf>external:dont-match-anything-mate:*</mirrorOf>
            <name>Pseudo repository to mirror external repositories initially using HTTP.</name>
            <url>http://0.0.0.0/</url>
            <blocked>false</blocked>
        </mirror>
    </mirrors>
  ...
</settings>

```


# 2. 命令行

[手动安装jar到本地仓库](https://blog.csdn.net/fangzg811107320/article/details/72763704): `mvn install:install-file -Dfile=D:/soft/ojdbc6.jar -DgroupId=com.oracle -DartifactId=ojdbc6 -Dversion=11.2.0.3 -Dpackaging=jar -DgeneratePom=true`

```sh
mvn install:install-file -Dfile=/Users/xiaoyu/repo/sanxia_gaoke/resources/ojdbc8/19.3.0.0/ojdbc8-19.3.0.0.jar -DgoupId=com.oracle -DartifactId=ojdbc8 -Dversion=19.3.0.0 -Dpackaging=jar -DgeneratePom=true

```


# 3. spring-io-platform


Spring IO Platform框架简单来说就是一个版本号兼容系统，是一个依赖维护平台

它将常用第三方类库的兼容的版本组织起来。只要我们在项目中引用了Spring IO Platform，就不需要为这些第三方类库设置版本号了，Spring IO Platform会自动帮我们设置所有兼容的版本号

可以完美的支持Maven和Gradle；

直接导入

```xml
<dependencyManagement>
        <dependencies>
            <dependency>
                <groupId>io.spring.platform</groupId>
                <artifactId>platform-bom</artifactId>
                <version>Brussels-SR3</version>
                <type>pom</type>
                <scope>import</scope>
            </dependency>
        </dependencies>
    </dependencyManagement>
```

or 设置为 parent pom

```xml
<parent>
        <groupId>io.spring.platform</groupId>
        <artifactId>platform-bom</artifactId>
        <version>Brussels-SR3</version>
        <relativePath/>
    </parent>
```

如果需要覆盖某个类库的版本号:

```xml
<properties>
    <foo.version>1.1.0.RELEASE</foo.version>
</properties>
```

看一个  spring boot 项目的完整例子:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>com.example</groupId>
    <artifactId>helloworld</artifactId>
    <version>0.0.1-SNAPSHOT</version>

   <dependencyManagement>
        <dependencies>
            <dependency>
                <groupId>io.spring.platform</groupId>
                <artifactId>platform-bom</artifactId>
                <version>Athens-SR2</version>
                <type>pom</type>
                <scope>import</scope>
            </dependency>

            <dependency>
                <!-- Import dependency management from Spring Boot -->
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-dependencies</artifactId>
                <version>1.4.3.RELEASE</version>
                <type>pom</type>
                <scope>import</scope>
            </dependency>
        </dependencies>
    </dependencyManagement>
    
    <!-- Additional lines to be added here... -->
    <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>
        <dependency>
            <groupId>com.google.code.gson</groupId>
            <artifactId>gson</artifactId>
        </dependency>
    </dependencies>
    
    <build>
        <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
                <version>1.4.3.RELEASE</version>
                <!-- 因为不是继承 parent pom, -->
                <!-- 需要自己添加配置，绑定repackage Goal -->
                <executions>
                    <execution>
                        <goals>
                            <goal>repackage</goal>
                        </goals>
                    </execution>
                </executions>
            </plugin>
        </plugins>
    </build>

</project>
```

# 4. why maven

ant有一个很致命的缺陷，那就是没办法管理依赖

# 5. Maven是什么

一般来说我们典型的工作场景是这样的: 一天的工作开始之前, 先从源码库 pull 出新的代码, 然后单元测试, 如果发现bug, 联系作者一起调试, 然后进行自己的工作(编写自己的单元测试和代码); 如果这时 QA 发过来几个bug, 先本地重现(生成war包, 部署到web容器, 启动查看), bug解决首提交代码; 如果这时leader需要看测试报告, 于是需要将相关工具集成进ide, 生成测试覆盖率报告;

观察每天的这个过程, 其实大部分都是一些重复的劳动(编译, 运行单元测试, 生成文档, 打包部署), 这一类繁琐的过程都可归类于 "构建";

Maven为所有的项目抽象出了一个构建过程的生命周期模型, 对于不同的生命周期有大量的Maven插件可用; 这样抽象的好处是以前的10个项目可能有十种构建方式, 而现在统一可以使用Maven命令进行构建;

至于依赖管理, 一般一个Java应用会依赖于大量第三方类库, 类库之间可能还会有互相的依赖, 版本冲突, 此时这些类库的管理就是个繁重的体力活, Maven给了一个优雅的解决方案, 后面细说;此外Maven还能帮我们管理分散在各个角落的项目信息(项目描述, 开发者列表, 版本控制仓库地址, 测试报告...)

# 6. maven wrapper

Maven Wrapper is designed to make the maven version of each member in the dev team to be the same.

> 执行mvnw，比如：mvnw clean，如果本地没有匹配的maven版本，直接会去下载maven，放在用户目录下的.m2/wrapper中
>
> 项目的依赖的jar包会直接放在项目目录下的repository目录，这样可以很清晰看到当前项目的依赖文件。
>
> 如果需要更换maven的版本，只需要更改项目当前目录下.mvn/wrapper/maven-wrapper.properties的distributionUrl属性值，更换对应版本的maven下载地址。mvnw命令就会自动重新下载maven。
>

We can generate maven wrapper manually: `mvn -N io.takari:maven:wrapper [-Dmaven=3.3.3]`, but spring boot initializer is usually having maven wrapper generated automatically

## 6.1. 国内使用

Change maven-wrapper.properties:

https://archive.apache.org/dist/maven/maven-3/

https://maven.apache.org/download.cgi

```
distributionUrl=https://mirrors.cloud.tencent.com/apache/maven/maven-3/3.8.6/binaries/apache-maven-3.8.6-bin.zip


```

pom.xml has to make some changes to specify repository mirrors:

```xml
<project>

<!-- 在此配置，以阿里云源为例 -->
    <repositories>
        <repository>
            <id>tencent</id>
            <url>https://mirrors.cloud.tencent.com/nexus/repository/maven-public/</url>
        </repository>
    </repositories>
    <pluginRepositories>
        <pluginRepository>
            <id>tencent</id>
            <url>https://mirrors.cloud.tencent.com/nexus/repository/maven-public/</url>
        </pluginRepository>
    </pluginRepositories>

</project>

```

# 7. 安装


* Maven依赖于jdk
* 升级只需要下载新版Maven, 更新M2_HOME即可
* 如果使用Maven报 `outOfMemeoryError`, 可设置 `MAVEN_OPTS`环境变量为`- Xms128m -Xmx512m`以扩大java默认最大可用内存;
* `conf/setttings.xml`和`.m2/setttings.xml`都可以配置Maven, 前者是全局范围生效, 后者只对当前用户生效, 推荐修改后者, 因为升级方便;用户配置文件设定后, 全局配置文件就失效了
* eclipse集成时, 不要使用其内置的Maven, 使用外置的我们自己配置的Maven


## 7.1. aliyun 阿里云仓库

```xml
<repositories>
        <!--阿里云主仓库，代理了maven central和jcenter仓库-->
        <repository>
            <id>aliyun</id>
            <name>aliyun</name>
            <url>https://maven.aliyun.com/repository/public</url>
            <releases>
                <enabled>true</enabled>
            </releases>
            <snapshots>
                <enabled>false</enabled>
            </snapshots>
        </repository>
        <!--阿里云代理Spring 官方仓库-->
        <repository>
            <id>spring-milestones</id>
            <name>Spring Milestones</name>
            <url>https://maven.aliyun.com/repository/spring</url>
            <releases>
                <enabled>true</enabled>
            </releases>
            <snapshots>
                <enabled>false</enabled>
            </snapshots>
        </repository>
    </repositories>
```

## 7.2. spring 仓库

```xml
<repositories>
		<repository>
			<id>spring-snapshots</id>
			<name>Spring Snapshots</name>
			<url>https://repo.spring.io/snapshot</url>
			<snapshots>
				<enabled>true</enabled>
			</snapshots>
		</repository>
		<repository>
			<id>spring-milestones</id>
			<name>Spring Milestones</name>
			<url>https://repo.spring.io/milestone</url>
		</repository>
	</repositories>
	<pluginRepositories>
		<pluginRepository>
			<id>spring-snapshots</id>
			<name>Spring Snapshots</name>
			<url>https://repo.spring.io/snapshot</url>
			<snapshots>
				<enabled>true</enabled>
			</snapshots>
		</pluginRepository>
		<pluginRepository>
			<id>spring-milestones</id>
			<name>Spring Milestones</name>
			<url>https://repo.spring.io/milestone</url>
		</pluginRepository>
	</pluginRepositories>
```

## 7.3. 配置本地仓库地址

项目寻找依赖, 会先从远程仓库将构件下载到本地仓库然后使用; 本地仓库默认在${user_dir}/.m2/repository(输入第一条Maven命令后生成); 如果希望自定义本地仓库位置, 可修改 ${user_dir}/.m2/setttings.xml(如果不存在, 可复制一份过来), 设置 localRepository 元素的值;

## 7.4. 配置远程仓库

如果默认的中央仓库无法满足要求, 如何配置其他的远程仓库地址呢?

可以在项目pom中配置


通过Repository子元素, 可以声明多个远程仓库, 仓库id必须唯一, 中央仓库id=central, 如果其他仓库使用这里id, 会覆盖中央仓库的配置;release和snapshoot元素用来控制发布版构件和快照版构件的下载, [快照版本和发布版本](#快照版本和发布版本)会写到, 此外, 这两个元素还有其他子元素

updatePolicy指定更新频率, 可取这些值: daily(默认, 每天检查), never(从不检查), always(每次构建都检查), interval: x(每隔x分钟检查一次, x为整数)

同时, 还可以在setttings中配置一份中央仓库的镜像, 规避GFW带来的慢速问题, 详细描述在[这里](#镜像)

```xml
<mirrors>
    <!-- mirror
     | Specifies a repository mirror site to use instead of a given repository. The repository that
     | this mirror serves has an ID that matches the mirrorOf element of this mirror. IDs are used
     | for inheritance and direct lookup purposes, and must be unique across the set of mirrors.
     |
    <mirror>
      <id>mirrorId</id>
      <mirrorOf>repositoryId</mirrorOf>
      <name>Human Readable Name for this Mirror.</name>
      <url>http://my.repository.com/repo/path</url>
    </mirror>
     -->
    <mirror>
        <id>alimaven</id>
        <name>aliyun maven</name>
        <url>http://maven.aliyun.com/nexus/content/groups/public/</url>
        <mirrorOf>central</mirrorOf> <!-- 所有针对central仓库的请求都会被转到这个镜像 -->
    </mirror>
</mirrors>
```

## 7.5. 配置远程仓库认证(非必须)

仓库信息可以再pom文件中配置, 认证只能在setttings中配置

## 7.6. 部署到远程仓库

编辑项目的pom, 配置distributionManagement元素

构件部署到远程仓库, 和下载不同, 这时通常需要验证, 需要在setttings中配置servers

最后运行 `mvn clean deploy`

## 7.7. 阿里云 aliyun 镜像

如果仓库a能够提供仓库b的全部内容, 那么a是b的一个镜像, 设置镜像通常是为了规避慢速问题

setttings中配置:

```xml
<mirrors>
    <!-- mirror
     | Specifies a repository mirror site to use instead of a given repository. The repository that
     | this mirror serves has an ID that matches the mirrorOf element of this mirror. IDs are used
     | for inheritance and direct lookup purposes, and must be unique across the set of mirrors.
     |
    <mirror>
      <id>mirrorId</id>
      <mirrorOf>repositoryId</mirrorOf>
      <name>Human Readable Name for this Mirror.</name>
      <url>http://my.repository.com/repo/path</url>
    </mirror>
     -->
    <mirror>
        <id>alimaven</id>
        <name>aliyun maven</name>
        <url>http://maven.aliyun.com/nexus/content/groups/public/</url>
        <mirrorOf>central</mirrorOf> <!-- 所有针对central仓库的请求都会被转到这个镜像 -->
    </mirror>
</mirrors>
```

此外, Maven对于镜像的mirrorOf标签还支持更多语法



# 8. Maven项目目录规范


* 如果遵循这个规范, Maven会自动搜寻对应目录下的对应资源, 而无需额外配置
* 如果是历史项目改造成Maven, 代码目录无法改变了, 也可以在pom文件中配置, [下文详述](#历史项目改造为maven项目)

# 9. demo

先看pom文件:

```xml
<?xml version = "1.0" encoding = "UTF-8"?><!-- xml头, 指定xml版本, 编码方式 -->

<!-- project是所有pom的根元素, 属性中声明了一些命名空间, xsd, 不是必须的但是可以让第三方编辑器有智能提示 -->
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
  <!-- pom模型版本, 对于Maven2和Maven3来说只能是4.0.0 -->
  <modelVersion>4.0.0</modelVersion>
  <!-- 三要素, 必须 -->
  <groupId>com.xy.mvnbook</groupId><!-- 公司xy建立一个项目mvnbook -->
  <artifactId>hello-world</artifactId><!-- 项目唯一id -->
  <version>0.0.1-SNAPSHOT</version><!-- 版本会不断更新, 比如从1.0到1.1-snapshoot到1.1到2.0, snapshoot表示快照 -->
  <name>Maven Hollo World Project</name><!-- 不是必须 -->
  <packaging>jar</packaging><!-- 打包类型, 默认jar -->
  
  <dependencies>
    <!-- https://mvnrepository.com/artifact/junit/junit -->
    <dependency>
        <groupId>junit</groupId>
        <artifactId>junit</artifactId>
        <version>4.12</version>
        <scope>test</scope><!-- 依赖范围, 默认是"compile"表示该依赖对主/测试代码均有效, 这里"test"表示只对测试生效, 即测试代码中可以正常import JUnit, 但是在主代码中import JUnit就会报错(证明依赖只是被加入主代码的classpath中) -->
    </dependency>
  </dependencies>
  
  <build>
    <plugins>
      <plugin>
        <groupId>org.apache.maven.plugins</groupId>
        <artifactId>maven-shade-plugin</artifactId><!-- 把依赖的lib打包到一个jar, 生成可执行jar -->
        <version>3.1.0</version>
        <executions>
          <execution>
            <phase>package</phase>
            <goals>
              <goal>shade</goal>
            </goals>
            <configuration>
              <transformers>
                <transformer implementation="org.apache.maven.plugins.shade.resource.ManifestResourceTransformer">
                  <mainClass>com.xy.mvnbook.hello.HelloWorld</mainClass>
                </transformer>
              </transformers>
            </configuration>
          </execution>
        </executions>
      </plugin>
    </plugins>
  </build>

  
</project>
```

代码:

```java
/**
 * mvn helloworld
 *
 * @version 0.1
 * @author xy
 * @date 2018年3月24日 上午11:40:17
 */
public class HelloWorld {

    public String hello() {
        return "Hello Maven";
    }
    
    public static void main(String[] args) {
        System.out.println(new HelloWorld().hello());
    }
}

/**
 * test helloWorld
 *
 * @version 0.1
 * @author xy
 * @date 2018年3月24日 下午1:07:07
 */
public class HelloWorldTest {

    @Test
    public void testHello() {
        HelloWorld hw = new HelloWorld();
        String result = hw.hello();
        assertEquals("Hello Maven", result);
    }
}
```

下面试试简单的mvn命令

* `mvn clean`: 清除输出目录target/(Maven构建的所有输出默认在target/下); 实际是`maven-clean-plugin`插件的`clean`目标在起作用;
* `mvn compile`: 编译项目主代码, 主要是`maven-resources-plugin:2.6:resources`和` maven-compiler-plugin:3.1:compile`在生效;一般和clean联用, `mvn clean compile`;
* `mvn clean test`: 调用Maven执行测试, 测试前会首先进行项目主资源处理, 主代码编译, 测试资源处理, 测试代码编译,以及测试后的报告生成, 实际执行了 clean:clean, resources:resources, compiler:compile, resources:testResources, compile:testCompile, surefire:test(surefire是Maven中负责执行测试的插件, 他运行测试用例HelloWorldTest并输出测试报告); 
* `mvn clean package`: 打包, 打成jar类型包; 就是jar:jar在生效, 主代码打包成jar文件, 输出到target/目录中, 文件命名是根据artifact-version.jar规则进行命名的, 如果需要自定义输出jar的名字, 可以修改finalName;
* `mvn clean install`: 安装到本地Maven仓库; 安装后, 其他项目才可以使用;




`mvn clean test`由于需要做资源替换, 编译的工作, 输出信息较多, 截了下面2张图片

`mvn clean package`需要先执行资源替换, 编译, 测试, 再才能打包, 输出信息较多

`mvn clean install` 需要先资源替换, 编译, 测试, 打包, 最后安装

 
# 10. 生命周期命令 and 包含效果

综上, mvn的几个基本命令执行时是有包含关系的, 

1. compile
2. test
3. package
4. install

后面的命令效果会包含前面的命令

`mvn clean install -N` 只会安装 parent 工程, 不会安装子项目

`mvn install -U` 安装时, 强制更新 snapshot 模块, 对于 release 版本模块, 不会更新

# 11. 安装卸载本地包

https://stackoverflow.com/questions/15358851/how-to-remove-jar-file-from-local-maven-repository-which-was-added-with-install

```sh
# 安装
mvn install:install-file -Dfile=bpm-interface-2.0.1.jar -DgroupId=com.ctg.qdp -DartifactId=bpm-interface -Dversion=2.0.1 -Dpackaging=jar

mvn install:install-file -Dfile=ojdbc6.jar -DgroupId=com.oracle -DartifactId=ojdbc6 -Dversion=11.2.0.4 -Dpackaging=jar
mvn install:install-file -Dfile=ojdbc8-19.0.0.0.0.jar -DgroupId=com.oracle.jdbc -DartifactId=ojdbc8.jar -Dversion=19.0.0.0.0 -Dpackaging=jar -DgeneratePom=true

mvn install:install-file -Dfile=quickCode-spring-boot-starter-1.0.jar -DgroupId=com.beeei -DartifactId=quickCode-spring-boot-starter -Dversion=1.0     -Dpackaging=jar -DgeneratePom=true
mvn install:install-file -Dfile=tgpms-1.0.jar -DgroupId=com.ctgpc -DartifactId=tgpms -Dversion=1.0   -Dpackaging=jar -DgeneratePom=true
mvn install:install-file -Dfile=vform-1.0.jar -DgroupId=com.tgpms -DartifactId=vform -Dversion=1.0   -Dpackaging=jar -DgeneratePom=true


# 卸载
# 最方便的是直接到 $HOME/.m2 手动删除
mvn dependency:purge-local-repository -DmanualInclude="groupId:artifactId, ..."

```


# 12. 打包成可执行jar

https://www.baeldung.com/executable-jar-with-maven

需要用到`maven-shade-plugin`插件, 通过`mvn package`默认生成的jar虽然有main方法, 但是是不能够直接运行的, 因为main方法的信息没有添加到manifest中(打开jar中的META-INF/MANIFEST可以看到, 没有Main-Class这一行), 

增加如下配置:

```xml
<plugin><!-- 位于project/build/plugins下 -->
    <groupId>org.apache.maven.plugins</groupId>
    <artifactId>maven-shade-plugin</artifactId><!-- 把依赖的lib打包到一个jar, 生成可执行jar -->
    <version>3.1.0</version>
    <executions>
        <execution>
        <phase>package</phase>
        <goals>
            <goal>shade</goal>
        </goals>
        <configuration>
            <transformers>
            <transformer implementation="org.apache.maven.plugins.shade.resource.ManifestResourceTransformer">
                <mainClass>com.xy.mvnbook.hello.HelloWorld</mainClass>
            </transformer>
            </transformers>
        </configuration>
        </execution>
    </executions>
</plugin>
```

此时再次打包, 输出两个jar, `hello-world-1.0-SNAPSHOOT.jar`和`original-hello-world-1.0-SNAPSHOOT.jar`, 前者是带有Main-class信息的可执行jar, 后者是原始的jar;

# 13. 使用archetype生成项目骨架

一般称项目基本的目录结构和pom文件为骨架; Maven中使用`maven-archetype-plugin`插件完成这一工作;
* Maven3中使用: `mvn archetype:generate`, 虽然没有指定插件版本, 但是maven3只会去下载最新的稳定版本很安全; 
* Maven2中需要指定具体的插件版本(即按照严格的命令格式 mvn groupId:artifactId:version:goal), 不然maven2会去下载最新版本的插件, 可能会得到不稳定的snapshoot版本导致运行失败;

* 对于maven3, 如果之前未运行过该命令, 会先下载该插件, 而后需要选择一个骨架, maven默认选了一个骨架 `maven-archetype-quickstart`直接回车以选择, 接着输入groupId, artifactId, version, package, 确认;

    * package表示目录结构, 即"src/main/java"下的目录结构
    * artifactId表示项目名称
    * groupId表示安装到仓库时的目录

# 14. 坐标

* `groupId`: 定义maven项目隶属的实际项目比如 spring-core隶属于SpringFramework, spring-context也隶属于SpringFramework; 同时也是install时安装到仓库的目录
* `artifactId`: 定义实际项目中的一个maven模块, 推荐做法是使用实际项目名称作为其前缀, 比如groupId是'com.xy.project', 那么artifactId可设为'project-xxx', 这样方便寻找实际构件, maven生成的构件默认名称以artifactId开头
* `version`: 版本, snapshoot..., 见 [快照版本和发布版本](#快照版本和发布版本)
* `packaging`: 定义maven打包方式(可选, 默认jar), jar/war/pom
* `classifier`: 帮助定义构建输出的一些附属构件; 比如定义了主构件'xxx.jar', 有时可能还会使用一些插件生成'xxx-javadoc.jar', 'xxx-source.jar'这样的附属构件, 这时, 'javadoc', 'source'就是这两个附属构件的classifier ;(classifier不能直接定义)

# 15. 快照版本和发布版本

Snapchat版本作用

为什么需要区分快照版本和发布版本? 

考虑这个场景: 小a在开发模块A(v: 2.1), 同时, 小m在开发模块B, B -> A, 开发中, 小a经常需要将模块最新版构建输出, 交给小m, 怎么方便的做这个工作呢?

Maven的快照机制可以解决这个问题. 

小a将A版本设为2.1-snapshoot, 然后发布到私服, 这时Maven会自动为该构件打上时间戳(版本2.1表示已经稳定, 且只对应了唯一构件, 而版本2.1-snapshoot表示不稳定, 对应仓库中存在多个打了时间戳的构件)

有了时间戳, Maven能够随时找到仓库中的该构件2.1-snapshoot版本的最新文件. 这时小m配置对应依赖, 版本也设为2.1-snapshoot, Maven会自动检查最新版本, 检查频率可以在[配置远程仓库](#配置远程仓库)时设置, 也可以强制检查更新通过`mvn clean install-U`

# 16. 依赖的配置

## 16.1. 基本元素

* groupId, artifactId, version
* type: 对应于坐标定义中的packaging, 一般不必声明, 默认为jar 
* scope: 依赖的范围, `compile(默认), test, provided, runtime, system, import`, 见[#scope](#scope)
* optional: 指定依赖是否可选, 见[可选依赖](#可选依赖)
* exclusion: 排除[#传递性依赖](#传递性依赖), 见[#排除依赖](#排除依赖)

## 16.2. scope

项目的 编译, 测试, 运行 会使用三套不同的classpath, 

- `compile`: 默认范围, 使用这种范围的构件在 编译, 测试, 运行时均有效, 典型如spring-core;

- `test`: 只在 测试时引入, 在编译/运行时无法使用对应依赖, 如JUnit;

- `provided`: 表示别的设施(Web Container)会提供, 所以不会被打包; 其他和 compile 等同

- `runtime`: 依赖对于测试, 运行有效, 而在编译代码时不参与

    典型如:jdbc驱动实现(主代码编译只需要jdk提供的jdbc接口, 只有在执行测试和运行时才需要jdbc的具体实现)

    另外runtime的依赖通常和optional搭配使用，optional为true 表示不会传递。我可以用A实现，也可以用B实现

- `system`: 和provided完全一致, 但是使用system时, 必须显式的指定依赖文件的路径(通过systemPath元素, systemPath可以使用环境变量如${JAVA_HOME}), 用于引入本地的不在maven仓库中的依赖, 由于不可移植,要慎用;

- `import`: 导入依赖的范围, 不会对3种classpath产生实际的影响, 参见 [dependencyMangement元素](#dependencyMangement元素)

## 16.3. 传递性依赖

下面说说 `传递性依赖`

以案例中的 email模块为例, 项目依赖spring-core, 而spring-core又依赖 common-logging, email模块有一个'compile'范围的spring-core依赖, spring-core有一个'compile'范围的common-logging依赖, 那么email就会有一个'compile'范围的common-logging依赖(或者说commons-logging是email的一个传递性依赖), 看下图:

有了传递性依赖机制, 使用spring framework就不需要考虑它依赖了什么;
第一直接依赖和第二直接依赖决定了传递性依赖, 关系如下图:


可以这么理解: 

* 当 '第二直接依赖' 范围 = 'compile' 时, '传递性依赖'范围 = '第一直接依赖'范围
* 当 '第二直接依赖' 范围 = 'runtime' 时, '传递性依赖'范围 = '第一直接依赖'范围, 特例: 第一依赖范围 = 'compile', 第二依赖范围 = 'runtime', 则传递性依赖 = 'runtime'
* 当 '第二直接依赖' 范围 = 'test' 时, 依赖不会传递
* 当 '第二直接依赖' 范围 = 'provided' 时, '传递性依赖' 范围 = 'provided', 但是 '第一直接依赖' = 'provided'时, '传递性依赖' 才会传递



## 16.4. Maven的依赖调解特性

传递性依赖问题---Maven的 `依赖调解特性`

问题1: 有这样的依赖 a -> b -> c -> x(version: 1.0), a -> d -> x(version: 2.0); 此时有2个版本的x, 前者路径长度为3, 后者长度为2, 选择哪个呢?
Maven依赖调解第一原则: `路径最近者优先`; 根据这个原则 x(version: 2.0) 会被Maven选中引入

问题2: 有这样的依赖 a-> b -> x(version: 1.0), a -> c -> x(version: 2.0);  此时2个版本的x, 路径长度都一样, 但是b在pom中声明的位置比c靠前, 选择哪个版本呢?
Maven依赖调解第二原则: `第一声明者优先`; 根据这个原则, x(version: 1.0)会被选中

## 16.5. 可选依赖

考虑这个场景: a -> b -> x(optional: true), a -> b -> y(optional: true); b模块实现了x, y两个特性, 这两个特性互斥(用户不能同时使用两个特性, 比如b是一个持久层隔离工具包, 支持MySQL, Oracle), 在构建的时候, 需要需要这两种数据库的驱动程序, 但在使用的时候只会依赖其中一个; 

如果x, y被指定为可选依赖, 此时, x, y 只会对 b 产生影响, 将不会对 a 产生任何影响, 如果a需要使用需要显式的声明;

通过基本元素里的` optional`元素指定依赖为可选依赖


不过不推荐使用optional, 因为这违背了解耦的原则, 实际上,可以为两个数据库分别建立 Maven项目, 分配统一的groupId, 不同的artifactId, 在各自的pom中声明对应的jdbc依赖, 用户根据需要引入两个项目之一, 这样就避免了使用 optional;

## 16.6. 排除依赖

考虑这个场景: a -> b -> x(version: 1.0-snapshoot), snapshoot不稳定, 我们需要替换这个不稳定版本的x, 然后在a中声明一个稳定版本的x;
如何替换呢?

需要注意的是: 声明exclusion时, 只需要groupId, artifactId, 而不需要version;


## 16.7. 依赖的优化

* `mvn dependency:list`: 查看已解析依赖列表
* `mvn dependency:tree`: 查看依赖树
    * `mvn dependency:tree` 简要的列出项目的依赖树
    * `mvn dependency:tree -D verbose` 详细列出项目的依赖树
    * `mvn dependency:tree -D includes=groupid:artifactId excludes=groupId:artifactId` 根据自己的喜好列出依赖树

* `mvn dependency:analyze`: 分析项目依赖; 比如a -> b -> c, 同时 a -> c, 这时去掉a中的c也不报错, 因为b中含有c, 但是如果去掉a总显式声明的c, 一旦b版本变化, b中的c版本也会发生变化, 给项目带来失败的风险, 而且不容易查出来; 因此要显式声明项目中直接使用的依赖;

## 16.8. 引入外部依赖

https://blog.csdn.net/qq_30938705/article/details/79245820

# 17. 案例:账户注册服务

## 17.1. 需求

先看需求用例:
<table>
    <tr>
    <td><img src="Screenshot_11.png"/></td>
    <td><img src="Screenshot_12.png"/></td>
    </tr>
</table>


界面原型类似这样


## 17.2. 简单的设计

接口可能有:

* 生成验证码图片(String generateCaptchaKey(), void generateCaptchaImage(String key))
* 处理注册请求(void signUp(SignUpRequest rqt))
* 激活账户(boolean activate(String activationNumber))
* 处理登录(boolean login(String id, String pwd))

验证码部分是这样: 通过 generateCaptchaKey() 生成一个 key, 然后通过 generateCaptchaImage(String key)生成image, key和image传递给client, user肉眼识别image, client传回key和image的值, server端通过key查到正确的image值, 和client传回的image值对比;

singUp方法创建一个未被激活的账户, 同时发送一封带有链接的激活邮件, active方法接受一个激活码, 查找对应的账户激活;

麻雀虽小, 五脏俱全, 模块也需要划分一下:

* web: 包含所有和web 相关的内容, JSP, Servlet, web.xml...直接依赖service模块, 使用其提供的服务;
* service: 系统的核心, 封装了所有细节, 对外暴露简单的接口(Facade模式);
* persist: 处理账户信息的持久化;
* captcha: 处理验证码key的生成, image生成, 验证;
* email: 激活邮件的编写发送;

## 17.3. account-email模块

目录结构如下:


### 17.3.1. parent-pom

首先看看<span id="parent-pom"> parent pom配置</span>:


```xml
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
  <modelVersion>4.0.0</modelVersion>
  <groupId>com.xy.mvnbook.account</groupId>
  <artifactId>account-parent</artifactId>
  <version>0.0.1-SNAPSHOT</version>
  <packaging>pom</packaging> <!-- 作为parent项目, 这里必须为pom, 否则无法构建 -->
  <name>Account Parent</name>
  
  <modules>
    <module>../account-email</module>
    <module>../account-persist</module>
    <module>../account-captcha</module>
    <module>../account-service</module>
  </modules>
  
  <properties>
    <springframework.version>4.3.12.RELEASE</springframework.version>
    <junit.version>4.12</junit.version>
    <lombok.version>1.16.18</lombok.version>
    <mail.version>1.4.7</mail.version>
    <greenmail.version>1.4.1</greenmail.version>
    <dom4j.version>1.6.1</dom4j.version>
    <kaptcha.version>2.3.2</kaptcha.version>
    <maven-compiler-plugin.version>3.6.0</maven-compiler-plugin.version>
    <maven-resource-plugin.version>3.0.1</maven-resource-plugin.version>
    <maven-site-plugin.version>3.6</maven-site-plugin.version>
    
    <!-- 文件拷贝时的编码 -->  
    <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>  
    <project.reporting.outputEncoding>UTF-8</project.reporting.outputEncoding>  
    <!-- 编译时的编码 -->  
    <maven.compiler.encoding>UTF-8</maven.compiler.encoding>
  </properties>
  
  <dependencyManagement>
    <dependencies>
      <!-- <dependency>
        <groupId>${project.groupId}</groupId>
        <artifactId>account-email</artifactId>
        <version>${project.version}</version>
      </dependency>
      <dependency>
        <groupId>${project.groupId}</groupId>
        <artifactId>account-persist</artifactId>
        <version>${project.version}</version>
      </dependency>
      <dependency>
        <groupId>${project.groupId}</groupId>
        <artifactId>account-captcha</artifactId>
        <version>${project.version}</version>
      </dependency> -->
      <!-- https://mvnrepository.com/artifact/com.github.penggle/kaptcha -->
      <dependency>
          <groupId>com.github.penggle</groupId>
          <artifactId>kaptcha</artifactId>
          <version>${kaptcha.version}</version>
      </dependency>
      <!-- **************spring start******************************* -->
      <!-- https://mvnrepository.com/artifact/org.springframework/spring-core -->
      <dependency>
          <groupId>org.springframework</groupId>
          <artifactId>spring-core</artifactId>
          <version>${springframework.version}</version>
      </dependency>
      <!-- https://mvnrepository.com/artifact/org.springframework/spring-beans -->
      <dependency>
          <groupId>org.springframework</groupId>
          <artifactId>spring-beans</artifactId>
          <version>${springframework.version}</version>
      </dependency>
      <!-- https://mvnrepository.com/artifact/org.springframework/spring-context -->
      <dependency>
          <groupId>org.springframework</groupId>
          <artifactId>spring-context</artifactId>
          <version>${springframework.version}</version>
      </dependency>
      <!-- https://mvnrepository.com/artifact/org.springframework/spring-context-support -->
      <dependency>
          <groupId>org.springframework</groupId>
          <artifactId>spring-context-support</artifactId>
          <version>${springframework.version}</version>
      </dependency>
      
      <!-- ****************spring end******************** -->
      
      <!-- https://mvnrepository.com/artifact/junit/junit -->
      <dependency>
          <groupId>junit</groupId>
          <artifactId>junit</artifactId>
          <version>${junit.version}</version>
          <scope>test</scope>
      </dependency>
      <!-- https://mvnrepository.com/artifact/javax.mail/mail -->
      <dependency>
          <groupId>javax.mail</groupId>
          <artifactId>mail</artifactId>
          <version>${mail.version}</version>
      </dependency>
      <!-- https://mvnrepository.com/artifact/com.icegreen/greenmail -->
      <dependency>
          <groupId>com.icegreen</groupId>
          <artifactId>greenmail</artifactId>
          <version>${greenmail.version}</version>
          <scope>test</scope>
      </dependency>
      <!-- https://mvnrepository.com/artifact/org.projectlombok/lombok -->
      <dependency>
          <groupId>org.projectlombok</groupId>
          <artifactId>lombok</artifactId>
          <version>${lombok.version}</version>
          <scope>provided</scope>
      </dependency>
      <!-- https://mvnrepository.com/artifact/dom4j/dom4j -->
      <dependency>
          <groupId>dom4j</groupId>
          <artifactId>dom4j</artifactId>
          <version>${dom4j.version}</version>
      </dependency>
    </dependencies>
  </dependencyManagement>
  <build>
    <pluginManagement>
        <plugins>
         <plugin>
           <groupId>org.apache.maven.plugins</groupId>
           <artifactId>maven-compiler-plugin</artifactId>
           <version>${maven-compiler-plugin.version}</version>
           <configuration>
             <source>1.5</source>
             <target>1.5</target>
           </configuration>
         </plugin>
         <plugin>
           <groupId>org.apache.maven.plugins</groupId>
             <artifactId>maven-resource-plugin</artifactId>
                    <version>${maven-resource-plugin.version}</version>
           <configuration>
              <encoding>UTF-8</encoding>
            </configuration>
          </plugin>
          <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-site-plugin</artifactId>
            <version>${maven-site-plugin.version}</version>
          </plugin>
          <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-source-plugin</artifactId>
            <version>3.0.1</version>
            <executions>
                <execution>
                    <id>attach-sources</id>
                    <phase>verify</phase>
                    <goals>
                      <goal>jar-no-fork</goal>
                    </goals>
                    <!-- <inherited>false</inherited>
                    <configuration>
                    </configuration> --><!-- 注释掉, 不然源码jar包无法生成, mvn clean verify -->
                </execution>
            </executions>
          </plugin>
          <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-antrun-plugin</artifactId>
            <version>1.8</version>
            <executions>
                <!-- 同一个插件目标绑定到了不同的生命周期阶段 -->
                <execution>
                    <id>ant-validate</id>
                    <phase>validate</phase>
                    <goals>
                        <goal>run</goal>
                    </goals>
                    <configuration>
                        <tasks>
                            <echo>绑定到了"validate"阶段</echo>
                        </tasks>
                    </configuration>
                </execution>
                <execution>
                    <id>ant-verify</id>
                    <phase>verify</phase>
                    <goals>
                        <goal>run</goal>
                    </goals>
                    <configuration>
                        <tasks>
                            <echo>绑定到了"verify"阶段</echo>
                        </tasks>
                    </configuration>
                </execution>
            </executions>
          </plugin>
	    </plugins>
    </pluginManagement>
    <plugins>
      <!-- <plugin>
        <groupId>org.apache.maven.plugins</groupId>
        <artifactId>maven-site-plugin</artifactId>
      </plugin> -->
      <plugin>
        <groupId>org.apache.maven.plugins</groupId>
        <artifactId>maven-source-plugin</artifactId>
      </plugin>
      
    </plugins>
  </build>
</project>
```

### 17.3.2. email-pom

email-pom配置

```xml
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
  <modelVersion>4.0.0</modelVersion>
  <!-- <groupId>com.xy.mvnbook.account</groupId> --> <!-- 可以去掉, parent项目已经定义的groupId了 -->
  <artifactId>account-email</artifactId> <!-- 以groupId "account"做前缀 , 方便区分其他模块-->
  <packaging>jar</packaging>
  <name>Account Email</name>
  <parent>
    <groupId>com.xy.mvnbook.account</groupId>
    <artifactId>account-parent</artifactId>
    <version>0.0.1-SNAPSHOT</version>
    <relativePath>../account-parent/pom.xml</relativePath><!-- 父pom文件相对路径， 默认是 [../pom.xml]  -->
  </parent>
  
  <dependencies>
    <!-- **************spring*** 实现DI所必须的spring组件(spring-core, spring-context, spring-context-support, spring-beans)******************************* -->
    <!-- https://mvnrepository.com/artifact/org.springframework/spring-core -->
    <dependency>
        <groupId>org.springframework</groupId>
        <artifactId>spring-core</artifactId>
    </dependency>
    <!-- https://mvnrepository.com/artifact/org.springframework/spring-beans -->
    <dependency>
        <groupId>org.springframework</groupId>
        <artifactId>spring-beans</artifactId>
    </dependency>
    <!-- https://mvnrepository.com/artifact/org.springframework/spring-context -->
    <dependency>
        <groupId>org.springframework</groupId>
        <artifactId>spring-context</artifactId>
    </dependency>
    <!-- https://mvnrepository.com/artifact/org.springframework/spring-context-support -->
    <dependency>
        <groupId>org.springframework</groupId>
        <artifactId>spring-context-support</artifactId>
    </dependency>
    
       <!-- ****************spring end************************************************* -->
    
    <!-- https://mvnrepository.com/artifact/junit/junit -->
    <dependency>
        <groupId>junit</groupId>
        <artifactId>junit</artifactId>
    </dependency>
    <!-- https://mvnrepository.com/artifact/javax.mail/mail
        实现邮件发送必须 -->
    <dependency>
        <groupId>javax.mail</groupId>
        <artifactId>mail</artifactId>
    </dependency>
    <!-- https://mvnrepository.com/artifact/com.icegreen/greenmail 
      邮件服务测试套件 -->
	<dependency>
	    <groupId>com.icegreen</groupId>
	    <artifactId>greenmail</artifactId>
	</dependency>
	<!-- https://mvnrepository.com/artifact/org.projectlombok/lombok -->
	<dependency>
	    <groupId>org.projectlombok</groupId>
	    <artifactId>lombok</artifactId>
	</dependency>
    
  </dependencies>

    <!-- 如果没有在parent pom.xml中配置comiler插件, 这里还要补上该插件, 指定编译版本 -->

</project>
```

### 17.3.3. 主代码&测试

```java
/**
 * sendMail interface
 *
 * @version 0.1
 * @author xy
 * @date 2018年3月24日 下午5:29:20
 */
public interface AccountEmailService {
    /**
     * send email
     * 
     * @param to 接受地址
     * @param subject 主题
     * @param htmlText 正文
     * @throws AccountEmailException 邮件发送错误
     */
    void sendMail(String to, String subject, String htmlText) throws AccountEmailException;

}
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

package com.xy.mvnbook.account.email.impl;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;

import com.xy.mvnbook.account.email.AccountEmailService;
import com.xy.mvnbook.account.email.exception.AccountEmailException;

import lombok.Data;

/**
 * 'sendMail' implements
 *
 * @version 0.1
 * @author xy
 * @date 2018年3月24日 下午5:30:37
 */
@Data
public class AccountEmailServiceImpl implements AccountEmailService {
    
    /**
     *  sender, spring提供的简化邮件发送的util
     */
    private JavaMailSender sender;
    /**
     * 系统邮箱
     */
    private String systemEmail;

    public void sendMail(String to, String subject, String htmlText) throws AccountEmailException {
        MimeMessage msg = sender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(msg);
        try {
            helper.setFrom(systemEmail);
            helper.setTo(to);
            helper.setSubject(subject);
            helper.setText(htmlText);
            
            sender.send(msg);
        } catch (MessagingException e) {
            throw new AccountEmailException("Faild to send email.", e);
        }
    }

}

```

```java
package com.xy.mvnbook.account.email;

import static org.junit.Assert.assertEquals;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.icegreen.greenmail.util.GreenMail;
import com.icegreen.greenmail.util.GreenMailUtil;
import com.icegreen.greenmail.util.ServerSetup;
import com.xy.mvnbook.account.email.exception.AccountEmailException;

/**
 * 测试
 *
 * @version 0.1
 * @author xy
 * @date 2018年3月24日 下午6:00:36
 */
public class AccountEmailServiceTest {

    private GreenMail green;
    
    @Before
    public void startGreen() {
        // 基于smtp协议初始化greenmail
        green = new GreenMail(ServerSetup.SMTP);
        green.setUser("test@xiaoyu.com", "123456");// 创建账户
        green.start(); // 默认监听25端口
    }
    
    @Test
    public void testSendMail() {
        ClassPathXmlApplicationContext ctx = new ClassPathXmlApplicationContext("account-email.xml");
        AccountEmailService service = (AccountEmailService) ctx.getBean("accountEmailService");
        try {
            service.sendMail("test@xiaoyu.com", "Test subject", "<h3>Test</h3>");
        } catch (AccountEmailException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        
        green.waitForIncomingEmail(2000, 1); // 接受一封邮件, 最多等待2s
        MimeMessage[] msgs = green.getReceivedMessages();
        assertEquals(1, msgs.length);
        try {
            assertEquals("Test subject", msgs[0].getSubject());
        } catch (MessagingException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        assertEquals("<h3>Test</h3>", GreenMailUtil.getBody(msgs[0]).trim());
        ctx.close();
    }
    
    @After
    public void stopGreen() {
        green.stop();
    }
}

```

### 17.3.4. 测试资源-主资源读取顺序

这里需要注意: 测试类会到src/test/reources下找service.properties, 如果没有找到, 再到src/main/resources下找, 不必担心classpath下有2个service.properties;

### 17.3.5. spring注入配置

当然还有必要的注入配置

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:context="http://www.springframework.org/schema/context"
       xmlns:util="http://www.springframework.org/schema/util"
       xmlns:tx="http://www.springframework.org/schema/tx"
       xsi:schemaLocation="
http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans-2.5.xsd
http://www.springframework.org/schema/context http://www.springframework.org/schema/context/spring-context.xsd
http://www.springframework.org/schema/util http://www.springframework.org/schema/util/spring-util-2.5.xsd
http://www.springframework.org/schema/tx http://www.springframework.org/schema/tx/spring-tx-2.5.xsd">
  
  <context:property-placeholder location="classpath:service.properties"/>
  <bean id="javaMailSender" class="org.springframework.mail.javamail.JavaMailSenderImpl">
    <property name="protocol" value="${email.protocol}"></property>
    <property name="host" value="${email.host}"></property>
    <property name="port" value="${email.port}"></property>
    <property name="username" value="${email.username}"></property>
    <property name="password" value="${email.password}"></property>
    <property name="javaMailProperties">
      <props>
        <prop key="mail.${email.protocol}.auth">${email.auth}</prop>
      </props>
    </property>
  </bean>
  <bean id="accountEmailService" class="com.xy.mvnbook.account.email.impl.AccountEmailServiceImpl">
    <property name="sender" ref="javaMailSender"></property>
    <property name="systemEmail" value="${email.systemEmail}"></property>
  </bean>

</beans>
```

以及邮件发送相关props

```

email.protocol=smtp
email.host=localhost
email.port=25
email.username=test@xiaoyu.com
email.password=123456
email.auth=true
email.systemEmail=775000738sdfs@qq.com
```


`mvn clean test`, 输出如下:

p1|p2
-|-


## 17.4. account-persist模块

负责数据的持久化， 以xml保存数据

目录结构


在[parent-pom文件](#parent-pom)存在的情况下, 添加本模块的pom

### 17.4.1. account-persist的pom

```xml
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
  <modelVersion>4.0.0</modelVersion>
  <artifactId>account-persist</artifactId>
  <name>Account Persist</name>
  <packaging>jar</packaging>
  <parent>
    <groupId>com.xy.mvnbook.account</groupId>
    <artifactId>account-parent</artifactId>
    <version>0.0.1-SNAPSHOT</version>
    <relativePath>../account-parent/pom.xml</relativePath><!-- 父pom文件相对路径， 默认是 [../pom.xml]  -->
  </parent>
  
  <dependencies>
    <!-- https://mvnrepository.com/artifact/dom4j/dom4j -->
    <dependency>
        <groupId>dom4j</groupId>
        <artifactId>dom4j</artifactId>
    </dependency>
    <!-- *************************************************spring依赖 start， 主要用来支持依赖注入****************************************** -->
    <!-- https://mvnrepository.com/artifact/org.springframework/spring-core -->
    <dependency>
        <groupId>org.springframework</groupId>
        <artifactId>spring-core</artifactId>
    </dependency>
    <!-- https://mvnrepository.com/artifact/org.springframework/spring-beans -->
    <dependency>
        <groupId>org.springframework</groupId>
        <artifactId>spring-beans</artifactId>
    </dependency>
    <!-- https://mvnrepository.com/artifact/org.springframework/spring-context -->
    <dependency>
        <groupId>org.springframework</groupId>
        <artifactId>spring-context</artifactId>
    </dependency>
    <!-- *************************************************spring依赖 end， 主要用来支持依赖注入****************************************** -->
    <!-- https://mvnrepository.com/artifact/junit/junit -->
    <dependency>
        <groupId>junit</groupId>
        <artifactId>junit</artifactId>
    </dependency>
    
    <!-- https://mvnrepository.com/artifact/org.projectlombok/lombok -->
    <dependency>
        <groupId>org.projectlombok</groupId>
        <artifactId>lombok</artifactId>
    </dependency>
    
  </dependencies>
  
  <build>
    <!-- 开启测试资源目录过滤 -->
    <testResources>
      <testResource>
        <directory>src/test/resources</directory><!-- 这里是否加${project.basedir}均可 -->
        <filtering>true</filtering>
      </testResource>
    </testResources>
    <!-- 开启主资源目录过滤 -->
    <resources>
      <resource>
        <directory>src/main/resources</directory>
        <filtering>true</filtering>
      </resource>
    </resources>
    
    <plugins>
      <plugin>
        <groupId>org.apache.maven.plugins</groupId>
        <artifactId>maven-compiler-plugin</artifactId><!-- 支持java8 -->
      </plugin>
      <plugin>
        <groupId>org.apache.maven.plugins</groupId>
        <artifactId>maven-resource-plugin</artifactId><!-- 使用utf-8处理资源处理 -->
      </plugin>
    </plugins>
  </build>
  
  
</project>
```

### 17.4.2. 主代码&测试

```java
package com.xy.mvnbook.account.persist;

import com.xy.mvnbook.account.persist.dto.Account;
import com.xy.mvnbook.account.persist.exception.AccountPersistException;
/**
 * 持久化 interface, crud方法
 *
 * @version 0.1
 * @author xy
 * @date 2018年3月25日 下午6:08:15
 */
public interface AccountPersistService {

    Account createAccount(Account account) throws AccountPersistException;
    boolean deleteAccount(String id) throws AccountPersistException;
    Account updateAccount(Account account) throws AccountPersistException;
    Account readAccount(String id) throws AccountPersistException;
}

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
package com.xy.mvnbook.account.persist.exception;

/**
 * 自定义异常
 *
 * @version 0.1
 * @author xy
 * @date 2018年3月25日 下午6:12:51
 */
public class AccountPersistException extends Exception {

    public AccountPersistException(String msg, Exception e) {
        super(msg, e);
    }

    private static final long serialVersionUID = -7205545969802653298L;

}

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * 常量(自定义的标签元素名称)
 *
 * @version 0.1
 * @author xy
 * @date 2018年3月25日 下午6:13:34
 */
public interface AccountPersist {

    String ELEMENT_ROOT = "account-persist";
    String ELEMENT_ACCOUNTS = "accounts";
    String ELEMENT_ACCOUNT = "account";
    String ELEMENT_ACCOUNT_ID = "id";
    String ELEMENT_ACCOUNT_NAME = "name";
    String ELEMENT_ACCOUNT_PASSWORD = "password";
    String ELEMENT_ACCOUNT_EMAIL = "email";
    String ELEMENT_ACCOUNT_ACTIVATED = "activated";
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
package com.xy.mvnbook.account.persist.dto;

import lombok.Data;
/**
 * dto
 *
 * @version 0.1
 * @author xy
 * @date 2018年3月25日 下午6:15:11
 */
@Data
public class Account {

    private String id;
    private String name;
    private String password;
    private String email;
    private boolean activated;
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

package com.xy.mvnbook.account.persist.impl;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStreamWriter;
import java.util.Iterator;
import java.util.List;

import org.dom4j.Document;
import org.dom4j.DocumentException;
import org.dom4j.DocumentFactory;
import org.dom4j.Element;
import org.dom4j.io.OutputFormat;
import org.dom4j.io.SAXReader;
import org.dom4j.io.XMLWriter;

import com.xy.mvnbook.account.persist.AccountPersistService;
import com.xy.mvnbook.account.persist.constants.AccountPersist;
import com.xy.mvnbook.account.persist.dto.Account;
import com.xy.mvnbook.account.persist.exception.AccountPersistException;

import lombok.Data;
/**
 * 持久化 实现
 *
 * @version 0.1
 * @author xy
 * @date 2018年3月25日 下午6:09:54
 */
@Data
public class AccountPersistServiceImpl implements AccountPersistService {
    
    /**
     * 文件存储地址
     */
    private String fileUrl;
    /**
     * dom4j reader
     */
    private SAXReader reader = new SAXReader();

    public Account createAccount(Account account) throws AccountPersistException {
        Document doc = this.readDocument();
        Element accountsEle = doc.getRootElement().element(AccountPersist.ELEMENT_ACCOUNTS);
        Element accountEle = accountsEle.addElement(AccountPersist.ELEMENT_ACCOUNT);
        accountEle.addElement(AccountPersist.ELEMENT_ACCOUNT_ID).addText(account.getId());
        accountEle.addElement(AccountPersist.ELEMENT_ACCOUNT_NAME).addText(account.getName());
        accountEle.addElement(AccountPersist.ELEMENT_ACCOUNT_PASSWORD).addText(account.getPassword());
        accountEle.addElement(AccountPersist.ELEMENT_ACCOUNT_EMAIL).addText(account.getEmail());
        accountEle.addElement(AccountPersist.ELEMENT_ACCOUNT_ACTIVATED).addText(account.isActivated() ? "true" : "false");
        this.writeDocument(doc);
        return account;
    }

    public boolean deleteAccount(String id) throws AccountPersistException {
        Document doc = this.readDocument();
        Element accountsEle = doc.getRootElement().element(AccountPersist.ELEMENT_ACCOUNTS);
        @SuppressWarnings("unchecked")
        Iterator<Element> ei = accountsEle.elementIterator();
        while(ei.hasNext()) {
            Element next = ei.next();
            if (next.elementText(AccountPersist.ELEMENT_ACCOUNT_ID).equals(id)) {
                accountsEle.remove(next);
                return true;
            }
        }

        return false;
    }

    public Account updateAccount(Account account) throws AccountPersistException {
        Document doc = this.readDocument();
        Element accountsEle = doc.getRootElement().element(AccountPersist.ELEMENT_ACCOUNTS);
        @SuppressWarnings("unchecked")
        Iterator<Element> ei = accountsEle.elementIterator();
        Account old  = null;
        while(ei.hasNext()) {
            Element next = ei.next();
            if (next.elementText(AccountPersist.ELEMENT_ACCOUNT_ID).equals(account.getId())) {
                old = this.buildAccount(next);
                if (account.getEmail() != null && !"".equals(account.getEmail())) {
                    next.element(AccountPersist.ELEMENT_ACCOUNT_EMAIL).addText(account.getEmail());
                }
                if (account.getName() != null && !"".equals(account.getName())) {
                    next.element(AccountPersist.ELEMENT_ACCOUNT_NAME).addText(account.getName());
                }
                if (account.getPassword() != null && !"".equals(account.getPassword())) {
                    next.element(AccountPersist.ELEMENT_ACCOUNT_PASSWORD).addText(account.getPassword());
                }
                if (account.isActivated()) {
                    next.element(AccountPersist.ELEMENT_ACCOUNT_ACTIVATED).addText("true");
                }
            }
        }
        return old;
    }

    public Account readAccount(String id) throws AccountPersistException {
        Document doc = readDocument();
        Element accounts = doc.getRootElement().element(AccountPersist.ELEMENT_ACCOUNTS);
        @SuppressWarnings("unchecked")
        List<Element> elements = accounts.elements();
        for (Element ele : elements) {
            if (ele.elementText(AccountPersist.ELEMENT_ACCOUNT_ID).equals(id)) {
                return buildAccount(ele);
            }
        }
        return null;
    }
    
    private Account buildAccount(Element ele) {
        Account account = new Account();
        account.setActivated("true".equals(ele.elementText(AccountPersist.ELEMENT_ACCOUNT_ACTIVATED)) ? true : false);
        account.setEmail(ele.elementText(AccountPersist.ELEMENT_ACCOUNT_EMAIL));
        account.setId(ele.elementText(AccountPersist.ELEMENT_ACCOUNT_ID));
        account.setName(ele.elementText(AccountPersist.ELEMENT_ACCOUNT_NAME));
        account.setPassword(ele.elementText(AccountPersist.ELEMENT_ACCOUNT_PASSWORD));
        return account;
    }

    /**
     * read document
     * 
     * @return
     * @throws AccountPersistException
     */
    private Document readDocument() throws AccountPersistException {
        File file = new File(fileUrl);
        // if the file doesn't exits, create it. contain basic element
        if (!file.exists()) {
            File parentFile = file.getParentFile();
            parentFile.mkdirs();
            Document doc = DocumentFactory.getInstance().createDocument();
            doc.addElement(AccountPersist.ELEMENT_ROOT).addElement(AccountPersist.ELEMENT_ACCOUNTS);
            writeDocument(doc);
        }
        try {
            return reader.read(new File(fileUrl));
        } catch (DocumentException e) {
            throw new AccountPersistException("unable to read data.xml", e);
        }
    }
    
    private void writeDocument(Document doc) throws AccountPersistException {
        OutputStreamWriter osw = null;
        try {
            osw = new OutputStreamWriter(new FileOutputStream(fileUrl), "utf-8");
            XMLWriter xmlWriter = new XMLWriter(osw, OutputFormat.createPrettyPrint());
            xmlWriter.write(doc);
        } catch (IOException e) {
            throw new AccountPersistException("unable to write data.xml", e);
        } finally {
            if (osw != null) {
                try {
                    osw.close();
                } catch (IOException e) {
                    throw new AccountPersistException("unable to close data.xml", e);
                }
            }
        }
    }

}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

package com.xy.mvnbook.account.persist;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertTrue;

import java.io.File;

import org.junit.Before;
import org.junit.Test;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.xy.mvnbook.account.persist.dto.Account;

/**
 * 测试
 *
 * @version 0.1
 * @author xy
 * @date 2018年3月25日 下午6:16:14
 */
public class AccountPersistServiceTest {

    private AccountPersistService service;
    
    @Before
    public void pre() throws Exception {
        File file = new File("target/test-classes/persist-data.xml");
        if (file.exists()) {
            file.delete();
        }
        
        ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("account-persist.xml");
        service = (AccountPersistService) context.getBean("accountPersistService");
        
        Account account = new Account();
        account.setId("id");
        account.setName("name");
        account.setPassword("password");
        account.setEmail("email");
        account.setActivated(true);
        
        service.createAccount(account);
    }
    
    @Test
    public void testReadAccount() throws Exception {
        Account account = service.readAccount("id");
        
        assertNotNull(account);
        assertEquals("id", account.getId());
        assertEquals("name", account.getName());
        assertEquals("password", account.getPassword());
        assertEquals("email", account.getEmail());
        assertTrue(account.isActivated());
    }
}


```

### 17.4.3. 注入配置

当然还有一些资源文件

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:context="http://www.springframework.org/schema/context"
       xmlns:util="http://www.springframework.org/schema/util"
       xmlns:tx="http://www.springframework.org/schema/tx"
       xsi:schemaLocation="
http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans-2.5.xsd
http://www.springframework.org/schema/context http://www.springframework.org/schema/context/spring-context.xsd
http://www.springframework.org/schema/util http://www.springframework.org/schema/util/spring-util-2.5.xsd
http://www.springframework.org/schema/tx http://www.springframework.org/schema/tx/spring-tx-2.5.xsd">
  
  <!-- <context:property-placeholder location="classpath:service.properties"/> -->
  <bean id="propertyConfigurer" class="org.springframework.beans.factory.config.PropertyPlaceholderConfigurer">
    <property name="location" value="classpath:persist.properties"></property>
  </bean>
  <bean id="accountPersistService" class="com.xy.mvnbook.account.persist.impl.AccountPersistServiceImpl">
    <property name="fileUrl" value="${persist.fileUrl}"></property>
  </bean>

</beans>
```

properties文件: 

```props
persist.fileUrl=${project.build.outputDirectory}/persist-data.xml
```

(这里包含了一个maven属性 `${project.build.outputDirectory}` maven的主输出目录, 详细看[maven属性](#maven属性) )


## 17.5. account-captcha模块



### 17.5.1. captcha模块的pom

```xml
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
  <modelVersion>4.0.0</modelVersion>
  <parent>
    <groupId>com.xy.mvnbook.account</groupId>
    <artifactId>account-parent</artifactId>
    <version>0.0.1-SNAPSHOT</version>
    <relativePath>../account-parent/pom.xml</relativePath><!-- 父pom文件相对路径， 默认是 [../pom.xml]  -->
    
  </parent>
  <artifactId>account-captcha</artifactId>
  <name>Account Captcha</name>
  <packaging>jar</packaging>
  
  <dependencies>
    <dependency>
      <groupId>com.github.penggle</groupId>
      <artifactId>kaptcha</artifactId>
      <version>2.3.2</version>
    </dependency>
    <!-- *************************************************spring依赖 start， 主要用来支持依赖注入****************************************** -->
    <!-- https://mvnrepository.com/artifact/org.springframework/spring-core -->
    <dependency>
        <groupId>org.springframework</groupId>
        <artifactId>spring-core</artifactId>
    </dependency>
    <!-- https://mvnrepository.com/artifact/org.springframework/spring-beans -->
    <dependency>
        <groupId>org.springframework</groupId>
        <artifactId>spring-beans</artifactId>
    </dependency>
    <!-- https://mvnrepository.com/artifact/org.springframework/spring-context -->
    <dependency>
        <groupId>org.springframework</groupId>
        <artifactId>spring-context</artifactId>
    </dependency>
    <!-- *************************************************spring依赖 end， 主要用来支持依赖注入****************************************** -->
    <!-- https://mvnrepository.com/artifact/junit/junit -->
    <dependency>
        <groupId>junit</groupId>
        <artifactId>junit</artifactId>
    </dependency>
    
    <!-- https://mvnrepository.com/artifact/org.projectlombok/lombok -->
    <dependency>
        <groupId>org.projectlombok</groupId>
        <artifactId>lombok</artifactId>
    </dependency>
  </dependencies>
  
</project>
```

### 17.5.2. 主代码&测试

```java
package com.xy.mvnbook.account.captcha;

import java.util.List;

import com.xy.mvnbook.account.captcha.exception.AccountCaptchaException;
/**
 * 验证码服务 interface
 *
 * @version 0.1
 * @author xy
 * @date 2018年3月25日 下午10:18:02
 */
public interface AccountCaptchaService {

    /**
     * 获取 key
     * @return
     * @throws AccountCaptchaException
     */
    String generageCaptchaKey() throws AccountCaptchaException;
    /**
     * 根据key获取img
     * @param key
     * @return
     * @throws AccountCaptchaException
     */
    byte[] genarateCaptchaImage(String key) throws AccountCaptchaException;
    /**
     * 验证
     * @param key
     * @param value
     * @return
     * @throws AccountCaptchaException
     */
    boolean validate(String key, String value) throws AccountCaptchaException;
    /**
     * 获取预定义的验证码内容, 方便测试
     * @return
     */
    List<String> getPreText();
    void setPreText(List<String> preText);
    
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
package com.xy.mvnbook.account.captcha.impl;

import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Properties;

import javax.imageio.ImageIO;

import org.springframework.beans.factory.InitializingBean;

import com.google.code.kaptcha.impl.DefaultKaptcha;
import com.google.code.kaptcha.util.Config;
import com.xy.mvnbook.account.captcha.AccountCaptchaService;
import com.xy.mvnbook.account.captcha.exception.AccountCaptchaException;
import com.xy.mvnbook.account.captcha.util.RandomGenerator;

/**
 * 验证码服务 实现
 *
 * @version 0.1
 * @author xy
 * @date 2018年3月25日 下午10:22:10
 */
public class AccountCaptchaServiceImpl implements AccountCaptchaService, InitializingBean {
    /**
     * 验证码生成器
     */
    private DefaultKaptcha producer;
    /**
     * InitializingBean接口中的方法, 会在spring初始化bean时调用; 这里用来初始化  producer
     */
    public void afterPropertiesSet() throws Exception {
        producer = new DefaultKaptcha();
        producer.setConfig(new Config(new Properties()));
    }
    /**
     * 存储key和验证码正确的值
     */
    private Map<String, String> captchaMap = new HashMap<String, String>();
    /**
     * 预定义字符串, 方便测试
     */
    private List<String> preText;

    public String generageCaptchaKey() throws AccountCaptchaException {
        String key = RandomGenerator.getRandomString();
        String value = this.getCaptchaText();
        captchaMap.put(key, value);
        return key;
    }

    public byte[] genarateCaptchaImage(String key) throws AccountCaptchaException {
        String value = captchaMap.get(key);
        if (null == value) {
            throw new AccountCaptchaException("Captcha key: " + key + "not found.");
        }
        BufferedImage img = producer.createImage(value);
        ByteArrayOutputStream out = new ByteArrayOutputStream();
        try {
            ImageIO.write(img, "jpg", out);
        } catch (IOException e) {
            throw new AccountCaptchaException("Faild to write captcha stream.", e);
        }
        return out.toByteArray();
    }

    public boolean validate(String key, String value) throws AccountCaptchaException {
        String text = captchaMap.get(key);
        if (null == text) {
            throw new AccountCaptchaException("Captcha key: " + key + "not found.");
        }
        if (value.equals(text)) {
            captchaMap.remove(key);
            return true;
        }
        else {
            return false;
        }
    }

    public List<String> getPreText() {
        return this.getPreText();
    }

    public void setPreText(List<String> preText) {
        this.preText = preText;
    }
    
    private int count = 0;
    private String getCaptchaText() {
        // 如果 预定义验证码文本 != null, 则顺序循环该字符串列表读取值, 否则, 随机创建一个串
        if (preText != null && !preText.isEmpty()) {
            String text = preText.get(count);
            count = (count + 1) % preText.size();
            return text;
        } else {
            return producer.createText();
        }
    }


}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

package com.xy.mvnbook.account.captcha.util;

import java.util.Random;
/**
 * 生成随机串 工具类
 *
 * @version 0.1
 * @author xy
 * @date 2018年3月25日 下午11:06:06
 */
public class RandomGenerator {

    /**
     * 字符范围
     */
    private static final String RANGE = "0123456789abcdefghijklmnopqrstuvwxyz";
    /**
     * 生成随机的8位字符串
     * @return
     */
    public static synchronized String getRandomString() {
        Random random = new Random();
        StringBuilder result = new StringBuilder();
        for (int i = 0; i < 8; i++) {
            result.append(RANGE.charAt(random.nextInt(RANGE.length())));
        }
        return result.toString();
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

package com.xy.mvnbook.account.captcha;

import static org.junit.Assert.*;

import java.io.File;
import java.io.FileOutputStream;
import java.util.ArrayList;
import java.util.HashSet;

import org.junit.Before;
import org.junit.Test;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.xy.mvnbook.account.captcha.util.RandomGenerator;
/**
 * 测试
 *
 * @version 0.1
 * @author xy
 * @date 2018年3月25日 下午11:04:24
 */
public class AccountCaptchaServiceTest {
    
    private AccountCaptchaService service;
    
    @Before
    public void pre() throws Exception {
        ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("account-captcha.xml");
        service = (AccountCaptchaService)context.getBean("accountCaptchaService");
    }

    @Test
    public void testRandomString() throws Exception{
        HashSet<String> set = new HashSet<String>(100);
        for (int i=0; i<100; i++) {
            String random = RandomGenerator.getRandomString();
            assertFalse(set.contains(random));
            set.add(random);
        }
    }
    
    @Test
    public void testGenerateCaptcha() throws Exception {
        String key = service.generageCaptchaKey();
        assertNotNull(key);
        
        byte[] imgArray = service.genarateCaptchaImage(key);
        assertTrue(imgArray.length > 0);
        
        File imgFile = new File("target/" + key + ".jpg");
        FileOutputStream out = new FileOutputStream(imgFile);
        out.write(imgArray);
        if (out != null) {
            out.close();
        }
        assertTrue(imgFile.exists() && imgFile.length() > 0);
    }
    
    @Test
    public void testValidateCorrect() throws Exception{
        ArrayList<String> preDefinedText = new ArrayList<String>();
        preDefinedText.add("12345");
        preDefinedText.add("abcde");
        service.setPreText(preDefinedText);
        
        String key = service.generageCaptchaKey();
        service.genarateCaptchaImage(key);
        assertTrue(service.validate(key, "12345"));// 顺序读取preDefinedText的元素
        
        String key1 = service.generageCaptchaKey();
        service.genarateCaptchaImage(key1);
        assertTrue(service.validate(key1, "abcde"));
    }
    
    @Test
    public void testValidateIncorrect() throws Exception {
        ArrayList<String> preDefinedText = new ArrayList<String>();
        preDefinedText.add("12345");
        service.setPreText(preDefinedText);
        
        String key = service.generageCaptchaKey();
        service.genarateCaptchaImage(key);
        assertFalse(service.validate(key, "1234"));
    }
    
}

```

### 17.5.3. 注入配置文件

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:context="http://www.springframework.org/schema/context"
       xmlns:util="http://www.springframework.org/schema/util"
       xmlns:tx="http://www.springframework.org/schema/tx"
       xsi:schemaLocation="
http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans-2.5.xsd
http://www.springframework.org/schema/context http://www.springframework.org/schema/context/spring-context.xsd
http://www.springframework.org/schema/util http://www.springframework.org/schema/util/spring-util-2.5.xsd
http://www.springframework.org/schema/tx http://www.springframework.org/schema/tx/spring-tx-2.5.xsd">
  
  <!-- <context:property-placeholder location="classpath:service.properties"/> -->
  <!-- <bean id="propertyConfigurer" class="org.springframework.beans.factory.config.PropertyPlaceholderConfigurer">
    <property name="location" value="classpath:persist.properties"></property>
  </bean> -->
  <bean id="accountCaptchaService" class="com.xy.mvnbook.account.captcha.impl.AccountCaptchaServiceImpl">
  </bean>

</beans>
```

## 17.6. account-service模块

web项目打包成war包, 部署到web容器中的war包一般有如下的目录结构



本模块用来封装前三个模块的细节

### 17.6.1. service-pom配置

```xml
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
  <modelVersion>4.0.0</modelVersion>
  <parent>
    <groupId>com.xy.mvnbook.account</groupId>
    <artifactId>account-parent</artifactId>
    <version>0.0.1-SNAPSHOT</version>
    <relativePath>../account-parent/pom.xml</relativePath><!-- 父pom文件相对路径， 默认是 [../pom.xml]  -->
    
  </parent>
  <artifactId>account-service</artifactId>
  <name>Account Service</name>
  <packaging>jar</packaging>
  
  <dependencies>
    <dependency>
        <groupId>${project.groupId}</groupId>
        <artifactId>account-email</artifactId>
        <version>${project.version}</version>
      </dependency>
      <dependency>
        <groupId>${project.groupId}</groupId>
        <artifactId>account-persist</artifactId>
        <version>${project.version}</version>
      </dependency>
      <dependency>
        <groupId>${project.groupId}</groupId>
        <artifactId>account-captcha</artifactId>
        <version>${project.version}</version>
      </dependency>
    <dependency>
      <groupId>junit</groupId>
      <artifactId>junit</artifactId>
    </dependency>
    <dependency>
          <groupId>com.icegreen</groupId>
          <artifactId>greenmail</artifactId>
      </dependency>
    <dependency>
          <groupId>org.projectlombok</groupId>
          <artifactId>lombok</artifactId>
      </dependency>
  </dependencies>
</project>
```

### 17.6.2. 主代码

```java
package com.xy.mvnbook.account.service.bean;

import lombok.Data;
/**
 * 请求对象
 *
 * @version 0.1
 * @author xy
 * @date 2018年4月11日 下午7:49:19
 */
@Data
public class SignUpRequest {

    private String id;
    private String email;
    private String username;
    private String pwd;
    private String confirmPwd;
    private String captchaKey;
    private String captchaValue;
    private String activateServiceUrl;
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

package com.xy.mvnbook.account.service;

import com.xy.mvnbook.account.service.bean.SignUpRequest;
import com.xy.mvnbook.account.service.exception.AccountServiceException;
/**
 * 封装后暴露的接口
 *
 * @version 0.1
 * @author xy
 * @date 2018年4月11日 下午7:50:44
 */
public interface AccountService {

    String generateCaptchaKey() throws AccountServiceException;
    byte[] generateCaptchaImage(String captchaKey) throws AccountServiceException;
    void activate(String activateNum) throws AccountServiceException;
    void login(String id, String pwd) throws AccountServiceException;
    void singUp(SignUpRequest rqt) throws AccountServiceException;
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

package com.xy.mvnbook.account.service.impl;

import java.util.HashMap;
import java.util.Map;

import com.xy.mvnbook.account.captcha.AccountCaptchaService;
import com.xy.mvnbook.account.captcha.exception.AccountCaptchaException;
import com.xy.mvnbook.account.captcha.util.RandomGenerator;
import com.xy.mvnbook.account.email.AccountEmailService;
import com.xy.mvnbook.account.email.exception.AccountEmailException;
import com.xy.mvnbook.account.persist.AccountPersistService;
import com.xy.mvnbook.account.persist.dto.Account;
import com.xy.mvnbook.account.persist.exception.AccountPersistException;
import com.xy.mvnbook.account.service.AccountService;
import com.xy.mvnbook.account.service.bean.SignUpRequest;
import com.xy.mvnbook.account.service.exception.AccountServiceException;

import lombok.Data;
/**
 * 接口实现
 *
 * @version 0.1
 * @author xy
 * @date 2018年4月11日 下午7:51:32
 */
@Data
public class AccountServiceImpl implements AccountService {
    
    private AccountCaptchaService accountCaptchaService;
    private AccountEmailService accountEmailService;
    private AccountPersistService accountPersistService;
    
    private Map<String, String> activateMap = new HashMap<String, String>();
    

    public String generateCaptchaKey() throws AccountServiceException {
        try {
            return accountCaptchaService.generageCaptchaKey();
        } catch (AccountCaptchaException e) {
            throw new AccountServiceException("无法创建验证码key。", e);
        }
    }

    public byte[] generateCaptchaImage(String captchaKey) throws AccountServiceException {
        try {
            return accountCaptchaService.genarateCaptchaImage(captchaKey);
        } catch (AccountCaptchaException e) {
            throw new AccountServiceException("无法创建验证码image", e);
        }
    }

    public void activate(String activateNum) throws AccountServiceException {
        String accountId = this.getActivateMap().get(activateNum);
        if (accountId == null) {
            throw new AccountServiceException("无效的激活码。");
        }
        try {
            Account account = accountPersistService.readAccount(accountId);
            account.setActivated(true);
            accountPersistService.updateAccount(account);
        } catch (AccountPersistException e) {
            throw new AccountServiceException("无法激活。");
        }
    }

    public void login(String id, String pwd) throws AccountServiceException {
        try {
            Account account = accountPersistService.readAccount(id);
            if (account == null) {
                throw new AccountServiceException("account不存在");
            }
            if (!account.isActivated()) {
                throw new AccountServiceException("account未激活");
            }
            if (!account.getPassword().equals(pwd)) {
                throw new AccountServiceException("密码错误");
            }
        } catch (AccountPersistException e) {
            throw new AccountServiceException("无法登录.", e);
        }
        

    }

    public void singUp(SignUpRequest rqt) throws AccountServiceException {
        if (!rqt.getPwd().equals(rqt.getConfirmPwd())) {
            throw new AccountServiceException("两次输入的密码不一致。");
        }
        boolean validate;
        try {
            validate = accountCaptchaService.validate(rqt.getCaptchaKey(), rqt.getCaptchaValue());
        } catch (AccountCaptchaException e) {
            throw new AccountServiceException("验证码验证动作失败。", e);
        }
        if (!validate) {
            throw new AccountServiceException("验证码输入错误。");
        }
        
        Account account = new Account();
        account.setActivated(false);
        account.setEmail(rqt.getEmail());
        account.setId(rqt.getId());
        account.setName(rqt.getUsername());
        account.setPassword(rqt.getPwd());
        
        try {
            accountPersistService.createAccount(account);
        } catch (AccountPersistException e) {
            throw new AccountServiceException("保存account失败", e);
        }
        
        String activateId = RandomGenerator.getRandomString();
        activateMap.put(activateId, account.getId());
        
        try {
            accountEmailService.sendMail(account.getEmail(), "请激活。。。", rqt.getActivateServiceUrl().endsWith("/") ? 
                 rqt.getActivateServiceUrl() + activateId : rqt.getActivateServiceUrl() + "/" + activateId);
        } catch (AccountEmailException e) {
            throw new AccountServiceException("发送邮件失败。", e);
        }

    }

}

```

### 17.6.3. spring配置文件

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:context="http://www.springframework.org/schema/context"
       xmlns:util="http://www.springframework.org/schema/util"
       xmlns:tx="http://www.springframework.org/schema/tx"
       xsi:schemaLocation="
http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans-2.5.xsd
http://www.springframework.org/schema/context http://www.springframework.org/schema/context/spring-context.xsd
http://www.springframework.org/schema/util http://www.springframework.org/schema/util/spring-util-2.5.xsd
http://www.springframework.org/schema/tx http://www.springframework.org/schema/tx/spring-tx-2.5.xsd">
  
  <!-- <context:property-placeholder location="classpath:service.properties"/> -->
  <!-- <bean id="propertyConfigurer" class="org.springframework.beans.factory.config.PropertyPlaceholderConfigurer">
    <property name="location" value="classpath:persist.properties"></property>
  </bean> -->
  <import resource="classpath*:/account-captcha.xml"/>
  <import resource="classpath*:/account-email.xml"/>
  <import resource="classpath*:/account-persist.xml"/>
  <bean id="accountService" class="com.xy.mvnbook.account.service.impl.AccountServiceImpl">
    <property name="accountCaptchaService" ref="accountCaptchaService"></property><!-- 这里小心ref错写成value -->
    <property name="accountEmailService" ref="accountEmailService"></property>
    <property name="accountPersistService" ref="accountPersistService"></property>
  </bean>

</beans>
```

### 17.6.4. 安装account-service模块注意

需要先安装parent的pom, 否则安装service项目时会报错, 因为service的pom中引用了parent 的pom信息

进入parent项目目录 `mvn -N clean install`, `-N`表示不要构建子项目

## 17.7. account-web模块

包括servlet和前端页面

### 17.7.1. web.xml

```xml
<!DOCTYPE web-app PUBLIC
 "-//Sun Microsystems, Inc.//DTD Web Application 2.3//EN"
 "http://java.sun.com/dtd/web-app_2_3.dtd" >

<web-app>
  <display-name>Archetype Created Web Application</display-name>
  
  <context-param>
    <param-name>contextConfigLocation</param-name>
    <param-value>
        classpath:/account-persist.xml
        classpath:/account-captcha.xml
        classpath:/account-email.xml
        classpath:/account-service.xml
    </param-value>
  </context-param>
  <listener><listener-class>org.springframework.web.context.ContextLoaderListener</listener-class></listener>
  
  <servlet>
  	<servlet-name>CaptchaImageServlet</servlet-name>
  	<display-name>CaptchaImageServlet</display-name>
  	<description>return captcha image to jsp</description>
  	<servlet-class>com.xy.mvnbook.account.web.CaptchaImageServlet</servlet-class>
  </servlet>
  <servlet>
  	<servlet-name>SignUpServlet</servlet-name>
  	<display-name>SignUpServlet</display-name>
  	<description></description>
  	<servlet-class>com.xy.mvnbook.account.web.SignUpServlet</servlet-class>
  </servlet>
  <servlet-mapping>
  	<servlet-name>CaptchaImageServlet</servlet-name>
  	<url-pattern>/captcha_image</url-pattern>
  </servlet-mapping>
  <servlet-mapping>
  	<servlet-name>SignUpServlet</servlet-name>
  	<url-pattern>/sign_up</url-pattern>
  </servlet-mapping>
</web-app>

```

### 17.7.2. pom.xml

```xml
<?xml version="1.0"?>
<project xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd" xmlns="http://maven.apache.org/POM/4.0.0"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <modelVersion>4.0.0</modelVersion>
  <parent>
    <groupId>com.xy.mvnbook.account</groupId>
    <artifactId>account-parent</artifactId>
    <version>0.0.1-SNAPSHOT</version>
  </parent>
  
  <artifactId>account-web</artifactId>
  <packaging>war</packaging>
  <name>account-web Maven Webapp</name>
  
  <dependencies>
    
    <dependency>
      <groupId>junit</groupId>
      <artifactId>junit</artifactId>
      <scope>test</scope>
    </dependency>
    <dependency>
        <groupId>javax.servlet</groupId>
        <artifactId>javax.servlet-api</artifactId>
    </dependency>
    <!-- <dependency>
        <groupId>javax.servlet.jsp</groupId>
        <artifactId>jsp-api</artifactId>
    </dependency> -->
    
    <dependency>
        <groupId>${project.groupId}</groupId>
        <artifactId>account-service</artifactId>
        <version>${project.version}</version>
    </dependency>
    <dependency>
        <groupId>org.springframework</groupId>
        <artifactId>spring-web</artifactId>
    </dependency>
  </dependencies>
  <build>
    <finalName>account</finalName><!-- 最终生成的jar名字; 默认为${project.artifactId}-${project.version} -->
    <plugins>
        <plugin>
	        <groupId>org.eclipse.jetty</groupId>
		    <artifactId>jetty-maven-plugin</artifactId>
		    <version>9.4.5.v20170502</version>
	       <configuration>
	            <scanIntervalSeconds>5</scanIntervalSeconds>
	            <webAppConfig> 
	               <contextPath>/${project.artifactId}</contextPath>  
	           </webAppConfig>
	           <connectors>
	               <connector implementation="org.eclipse.jetty.server.nio.SelectChannelConnector">
	                   <port>8081</port>
	               </connector>
	           </connectors>
	       </configuration>
	    </plugin>
    </plugins>
  </build>
</project>

```

# 18. Maven中的测试

## 18.1. maven-surefire-plugin

Maven使用`maven-surefire-plugin`调用JUnit执行测试, `mvn test`即可, 如果某个测试方法希望忽略, 使用`@Ignore`标注

默认下, 该插件会自动执行符合如下规范的测试用例



## 18.2. 如何跳过测试

方法1: `mvn package -D skipTests`(有无空格都可), 不执行测试用例，但编译测试类生成相应的class文件至target/test-classes下 (idea 跳过默认是这种)

方法2: `mvn package -D maven.test.skip=true`(有无空格都可) 跳过测试, 测试代码也不编译, 但是不推荐这么做

方法 3:

```xml
<plugin>  
    <groupId>org.apache.maven.plugin</groupId>  
    <artifactId>maven-compiler-plugin</artifactId>  
    <version>2.1</version>  
    <configuration>  
        <skip>true</skip>  
    </configuration>  
</plugin>  
<plugin>  
    <groupId>org.apache.maven.plugins</groupId>  
    <artifactId>maven-surefire-plugin</artifactId>  
    <version>2.5</version>  
    <configuration>  
        <skip>true</skip>  
    </configuration>  
</plugin>
```

## 18.3. 动态指定运行的测试类



如果-D test 没有找到测试用例, 会报错, 如果希望这时不报错,



## 18.4. 包含&排除测试用例



## 18.5. 测试报告&测试覆盖率报告



## 18.6. 改用TestNG代替Junit

TestNG一大优点就是`支持测试组`的概念, 对测试可以达到方法级别的归类, 而JUnit只能到类级别的归类;


将JUnit依赖替换成TestNG, `mvn test`即可

需要配置testng.xml来配置需要运行的测试集合


## 18.7. 打包测试代码

默认测试代码不会打包, 如下配置才会打包测试代码



# 19. 生命周期

Maven拥有3套独立的生命周期, 每个周期又有自己的阶段, 这些阶段有序, `后面阶段依赖于前面的阶段`

* clean
    * pre-clean 这个阶段执行一些清理前需要完成的工作
    * clean 清理上次构建生成的文件
    * post-clean 执行一次清理后需要完成的工作
* site
    * pre-site
    * site
    * post-site
    * site-deploy 将站点发布到服务器
* default(定义了构建的所有步骤, 最全)
    * validate
    * initialize
    * generate-sources
    * process-sources: 处理项目主资源文件, 对src/main/resources下的文件进行变量替换, 然后复制到输出的主classpath目录中
    * generate-resources
    * process-resources
    * compile : 编译项目主代码到主输出classpath目录
    * process-classes
    * generate-test-sources
    * process-test-sources : 处理项目测试资源文件
    * generate-test-resources
    * process-test-resources
    * test-compile
    * process-test-classes
    * test 使用单元测试框架测试, 
    * prepare-package
    * package
    * pre-integration-test
    * integration-test
    * post-integration-test
    * verify
    * install
    * deploy

mvn命令实际上就是调用三套生命周期的不同阶段进行组合

# 20. 插件

## 20.1. 查看插件帮助文档

`mvn help:describe -Dplugin=<plugin_name> -Dgoal=<goal> -Ddetail=true`

## 20.2. 插件绑定

插件绑定(生命周期的阶段和插件目标相互绑定)

Maven内置绑定(为了开箱即用, Maven为核心的一些生命周期阶段绑定了很多插件目标, 当user运行命令调用生命周期阶段的时候, 对应的插件目标就会执行对应任务, 这有点像设计模式中的模板方法模式)

内置绑定的例子看下图


default生命周期还有很多阶段, 这里只是列出了内置绑定了插件的阶段, 其他没有绑定插件的阶段就没有实际行为;

## 20.3. 插件的自定义绑定

比如创建源码jar包, 内置绑定中并没有这一项任务, 我们可以自定义绑定关系, 生成源码jar要使用`maven-source-plugin`插件

```xml
<plugin>
    <groupId>org.apache.maven.plugins</groupId>
    <artifactId>maven-source-plugin</artifactId>
    <version>3.0.1</version>
    <executions>
        <execution>
            <id>attach-sources</id> <!-- id名称随意 -->
            <phase>verify</phase> <!-- 生命周期阶段 -->
            <goals>
                <goal>jar-no-fork</goal><!-- 插件目标 -->
            </goals>
            <!-- <inherited>false</inherited>
            <configuration>
            </configuration> --><!-- 注释掉, 不然源码jar包无法生成, mvn clean verify -->
        </execution>
    </executions>
</plugin>
```

运行 `mvn clean verify` 会在打包同时生成源码jar包

这里考虑一个问题: 如果有多个插件目标被绑定到同一个阶段, 目标的执行顺序是怎样的呢? ------`插件声明的先后顺序决定了目标的执行顺序`

## 20.4. 在命令行给插件设置参数

maven-surefire-plugin 提供一个参数 maven.test.skip ,如果为 true, 会跳过测试, 于是希望跳过测试可以这么做:
`mvn clean install -Dmaven.test.skip=true`

## 20.5. 在pom中设置插件的全局参数

还是生成源代码jar包的那个例子

```xml
<plugin>
    <groupId>org.apache.maven.plugins</groupId>
    <artifactId>maven-source-plugin</artifactId>
    <version>3.0.1</version>
    <executions>
        <execution>
            <id>attach-sources</id> <!-- id名称随意 -->
            <phase>verify</phase> <!-- 生命周期阶段 -->
            <goals>
                <goal>jar-no-fork</goal><!-- 插件目标 -->
            </goals>
            
            <configuration>
                <!-- 在这里配置参数 -->
            </configuration>
        </execution>
    </executions>
</plugin>
```

## 20.6. 在pom中给插件任务配置个性化参数

以`maven-antrun-plugin`为例, 它可以执行ant任务

```xml
<plugin>
    <groupId>org.apache.maven.plugins</groupId>
    <artifactId>maven-antrun-plugin</artifactId>
    <version>1.8</version>
    <executions>
        <!-- 同一个插件目标绑定到了不同的生命周期阶段 -->
        <execution>
            <id>ant-validate</id>
            <phase>validate</phase>
            <goals>
                <goal>run</goal>
            </goals>
            <configuration>
                <tasks>
                    <echo>绑定到了"validate"阶段</echo>
                </tasks>
            </configuration>
        </execution>
        <execution>
            <id>ant-verify</id>
            <phase>verify</phase>
            <goals>
                <goal>run</goal>
            </goals>
            <configuration>
                <tasks>
                    <echo>绑定到了"verify"阶段</echo>
                </tasks>
            </configuration>
        </execution>
    </executions>
</plugin>
```

运行 `mvn clean verify -D maven.test.skip`, 会跳过测试， 输出如下：

p1|p2|p3
-|-|-


## 20.7. 常用的插件

### 20.7.1. 打可执行包插件

https://www.baeldung.com/executable-jar-with-maven


#### 20.7.1.1. maven-shade-plugin


```xml
<plugin>
    <groupId>org.apache.maven.plugins</groupId>
    <artifactId>maven-shade-plugin</artifactId>
    <executions>
        <execution>
            <phase>package</phase>
            <goals>
                <goal>shade</goal>
            </goals>
            <configuration>
                <shadedArtifactAttached>true</shadedArtifactAttached>
                <transformers>
                    <transformer implementation=
                                "org.apache.maven.plugins.shade.resource.ManifestResourceTransformer">
                        <mainClass>
                            jetty.Main
                        </mainClass>
                    </transformer>
                </transformers>
            </configuration>
        </execution>
    </executions>
</plugin>
```

#### 20.7.1.2. maven-assembly-plugin

根据不同环境打包成tar.gz或者zip

* 使用 descriptorRefs(官方提供的定制化打包方式)，官方提供的 descriptorRef 有 bin, jar-with-dependencies, src, project。[不建议使用]
* 使用 descriptors，指定打包文件 src/assembly/src.xml，在该配置文件内指定打包操作。

    ```xml
    <project>
    [...]
    <build>
        [...]
        <plugins>
        <plugin>
            <artifactId>maven-assembly-plugin</artifactId>
            <version>3.0.0</version>
            <configuration>
            <descriptors>
                <descriptor>src/assembly/assembly.xml</descriptor><!-- 指定插件配置文件路径 -->
            </descriptors>
            <!--这样配置后，mvn deploy不会把assembly打的zip包上传到nexus-->
            <attach>false</attach>
            </configuration>
            <executions>
                <execution>  
                    <id>make-assembly</id>  
                    <phase>package</phase><!--绑定到package-->  
                    <goals>  
                        <goal>single</goal><!--只运行一次-->  
                    </goals>  
                </execution>  
            </executions>  
            [...]
    </project>
    ```

    再看插件自身的配置文件 assembly.xml

    ```xml
    <?xml version="1.0" encoding="UTF-8"?>
    <assembly
        xmlns="http://maven.apache.org/plugins/maven-assembly-plugin/assembly/1.1.2"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://maven.apache.org/plugins/maven-assembly-plugin/assembly/1.1.2 http://maven.apache.org/xsd/assembly-1.1.2.xsd">

        <id>mini</id>

        <formats>
            <format>tar.gz</format><!-- 打包的文件格式, 可以有 zip、tar、tar.gz (or tgz)、tar.bz2 (or tbz2)、jar、dir、war，可以同时指定多个打包格式 -->
            <!-- <format>dir</format> -->
        </formats>

        <includeBaseDirectory>false</includeBaseDirectory><!-- 是否将工程名作为压缩包的根路径 -->

        <fileSets><!-- 管理一组文件的存放位置 -->
            <fileSet>
                <directory>src/main/webapp</directory><!-- 需要打包的目录 -->
                <excludes>
                    <exclude>**/*config.yml</exclude>
                    <exclude>**/*.data</exclude><!-- admin user & role -->
                    <exclude>**/admin_log/**</exclude>
                    <exclude>**/docs/**</exclude><!-- 有中文打包会出乱码 -->
                </excludes>
                <outputDirectory>/</outputDirectory><!-- 打包后输出目录 -->
            </fileSet>

            <fileSet>
                <directory>${project.build.directory}/${project.build.finalName}/WEB-INF/lib</directory>
                <includes>
                    <include>${project.build.finalName}*.jar</include>
                    <include>sodo-*.jar</include>
                </includes>
                <outputDirectory>/WEB-INF/lib</outputDirectory>
            </fileSet>

        </fileSets>

         <files><!-- 可以指定目的文件名到指定目录，其他和 fileSets 相同 -->
            <file>
            <source>README.txt</source><!-- 源文件 -->
            <outputDirectory>/</outputDirectory><!-- 输出目录 -->
            </file>
        </files>

        <dependencySets><!-- 用来定制工程依赖 jar 包的打包方式 -->
         <dependencySet>
             <!--是否把本项目添加到依赖文件夹下-->
             <useProjectArtifact>true</useProjectArtifact>
             <outputDirectory>lib</outputDirectory><!-- 指定包依赖目录，该目录是相对于根目录 -->
             <!--将scope为runtime的依赖包打包-->
             <scope>runtime</scope>
             <!--此外还有两个元素: includes/include*	List<String>	包含依赖;  excludes/exclude*	List<String>	排除依赖 -->
         </dependencySet>
        </dependencySets>
    </assembly>

    ```

### 20.7.2. maven-war-plugin 打 war 包

打war包插件, 打包时对web资源开启资源过滤, 使得能够使用Maven属性. 见[开启web资源过滤](#开启web资源过滤)

另外, 如果使用 servlet 3.0, 需要配置 'failOnMissingWebXml'

```xml
<plugin>
    <groupId>org.apache.maven.plugins</groupId>
    <artifactId>maven-war-plugin</artifactId>
    <version>2.4</version>
    <configuration>
        <failOnMissingWebXml>false</failOnMissingWebXml>
    </configuration>
</plugin>
```

### 20.7.3. maven-eclipse-plugin 

生成.classpath和.project文件，并且配置Eclispe将Maven作为External工具

```xml
<plugin>
    <artifactId>maven-eclipse-plugin</artifactId>
    <version>2.9</version>
    <configuration>
        <additionalProjectnatures>
            <projectnature>org.springframework.ide.eclipse.core.springnature</projectnature>
        </additionalProjectnatures>
        <additionalBuildcommands>
            <buildcommand>org.springframework.ide.eclipse.core.springbuilder</buildcommand>
        </additionalBuildcommands>
        <downloadSources>true</downloadSources>
        <downloadJavadocs>true</downloadJavadocs>
    </configuration>
</plugin>

```

运行：mvn eclipse:eclipse 生成.classpath和.project文件

### 20.7.4. 执行脚本命令

#### 20.7.4.1. exec-maven-plugin

可以执行命令行, or 执行 shell

通过命令行 执行java main

> `mvn exec:java -Dexec.mainClass="com.demo.HelloWorld"` 并不打可执行包

```xml
<plugin>  
    <groupId>org.codehaus.mojo</groupId>  
    <artifactId>exec-maven-plugin</artifactId>  
    <version>1.2.1</version>  
    <executions>  
        <execution>
            <phase>test</phase>  
            <goals>  
                <goal>java</goal>  
            </goals>  
        </execution>  
    </executions>  
    <configuration>  
        <mainClass>com.demo.config.DocMapper</mainClass>  
        <arguments>
            <argument>${project.build.outputDirectory}\doc-path-map.txt</argument>
            <argument>${basedir}\src</argument>
            <argument>**/resource/*.java</argument>
        </arguments>
    </configuration>  
</plugin>  
```

or 简单点的

```xml
<plugin>
    <groupId>org.codehaus.mojo</groupId>
    <artifactId>exec-maven-plugin</artifactId>
    <version>1.2.1</version>
    <configuration>
        <mainClass>org.test.int1.Main</mainClass>
    </configuration>
</plugin>
```

或者, 直接执行 shell 脚本:

```xml
<build>
        <plugins>
            <plugin>
                <artifactId>exec-maven-plugin</artifactId>
                <groupId>org.codehaus.mojo</groupId>
                <executions>
                    <execution>
                        <id>uncompress</id>
                        <phase>install</phase>
                        <goals>
                            <goal>exec</goal>
                        </goals>
                        <configuration>
                            <executable>${basedir}/uncompress.sh</executable>
                        </configuration>
                    </execution>
                </executions>
            </plugin>
        </plugins>
    </build>
```

#### 20.7.4.2. bash-maven-plugin 脚本内容直接卸载 pom 文件中

执行 bash 脚本

```xml
<plugin>
    <!-- Run with:
        mvn bash:run
        mvn install
    -->
    <groupId>com.atlassian.maven.plugins</groupId>
    <artifactId>bash-maven-plugin</artifactId>
    <version>1.0-SNAPSHOT</version>
    <executions>
        <execution>
            <id>test</id>
            <phase>integration-test</phase>
            <goals>
                <goal>run</goal>
            </goals>
        </execution>
    </executions>
    <configuration>
        <script>
            # Here you can execute shell commands
            echo "Tomcat will start"
            /opt/apache-tomcat/bin/startup.sh
        </script>
    </configuration>
</plugin>
```

#### 20.7.4.3. maven-antrun-plugin 更强大

执行脚本

```xml

<plugin>
    <groupId>org.apache.maven.plugins</groupId>
    <artifactId>maven-antrun-plugin</artifactId>
    <version>1.8</version>
    <executions>
        <execution>
            <id>generateSources</id>
            <phase>generate-sources</phase>
            <configuration>
            <!-- 提供各种不同 task 类型的标签, echo, replaceregexp... -->
                <tasks> 
                    <exec executable="/bin/bash">
                        <arg value="myFirst.sh" />
                        <arg value="inputOne" />
                    </exec>
                    <exec executable="/bin/bash">
                        <arg value="src/mySecond.sh" />
                        <arg value="inputTwo" />
                    </exec>
            <!-- 替换util模块Global.PRODUCT_VERSION版本号 -->
                    <replaceregexp file="datagear-util/src/main/java/org/datagear/util/Global.java" encoding="UTF-8" match="VERSION = &quot;\d+(\.\d+){1,2}(\-\w+){0,1}&quot;" replace="VERSION = &quot;${project.version}&quot;"/>
            <!-- 为management模块的datagear.sql添加版本号行 -->
                    <echo file="datagear-management/src/main/resources/org/datagear/management/ddl/datagear.sql" encoding="UTF-8" append="true">
${line.separator}
-----------------------------------------
--version[${project.version}], DO NOT EDIT THIS LINE!
-----------------------------------------
${line.separator}
                    </echo>
                </tasks>
            </configuration>
            <goals>
                <goal>run</goal>
            </goals>
        </execution>
    </executions>
</plugin>

```

### 20.7.5. versions-maven-plugin 管理子模块版本

统一更新子模块版本号为父模块版本号插件

```xml
<!-- mvn -N versions:update-child-modules -->
			<plugin>
				<groupId>org.codehaus.mojo</groupId>
				<artifactId>versions-maven-plugin</artifactId>
				<version>2.3</version>
				<configuration>
					<generateBackupPoms>false</generateBackupPoms>
				</configuration>
			</plugin>

```

### 20.7.6. build-helper-maven-plugin 自定义 build目录结构

codehaus提供了build-helper-maven-plugin插件来支持自定义的项目目录结构(相对于Maven默认目录结构来说)。

比较全的配置:

```xml
<!-- 设置多个源文件夹 -->  
<plugin>  
    <groupId>org.codehaus.mojo</groupId>  
    <artifactId>build-helper-maven-plugin</artifactId>  
    <version>1.8</version>  
    <executions>  
        <!-- 添加主资源文件目录 -->  
        <execution>  
            <!--自定义名称,不可重复-->  
            <id>add-resource</id>  
            <!--指定绑定到生命周期-->  
            <phase>initialize</phase>  
            <!--指定指定的目标,可添加多个-->  
            <goals>  
                <goal>add-resource</goal>  
            </goals>  
            <configuration>  
                <resources>  
                    <!--资源文件目录,可添加多个-->  
                    <resource>  
                        <directory>${basedir}/src/main/one</directory>  
                        <!--是否启用变量过滤-->  
                        <filtering>true</filtering>  
                        <!--排除的文件,可添加多个-->  
                        <excludes>  
                            <exclude>**/*.java</exclude>  
                        </excludes>  
                    </resource>  
                    <resource>  
                        <directory>${basedir}/src/main/two</directory>  
                        <filtering>true</filtering>  
                        <excludes>  
                            <exclude>**/*.java</exclude>  
                        </excludes>  
                    </resource>  
                </resources>  
            </configuration>  
        </execution>  
  
        <!-- 添加主源码目录 -->  
        <execution>  
            <id>add-source</id>  
            <phase>initialize</phase>  
            <goals>  
                <goal>add-source</goal>  
            </goals>  
            <configuration>  
                <sources>  
                    <source>${basedir}/src/main/three</source>  
                    <source>${basedir}/src/main/four</source>  
                </sources>  
            </configuration>  
        </execution>  
  
        <!-- 添加测试源码目录 -->  
        <execution>  
            <id>add-test-source</id>  
            <phase>initialize</phase>  
            <goals>  
                <goal>add-test-source</goal>  
            </goals>  
            <configuration>  
                <sources>  
                    <source>${basedir}/src/main/five</source>  
                    <source>${basedir}/src/main/six</source>  
                </sources>  
            </configuration>  
        </execution>  
    </executions>  
</plugin>  

```

用的多点的是这个这个简单点的配置, 源码在多个目录:

```xml
<plugin>
    <groupId>org.codehaus.mojo</groupId>
    <artifactId>build-helper-maven-plugin</artifactId>
    <version>1.12</version>
    <executions>
        <execution>
            <id>add-source</id>
            <phase>generate-sources</phase>
            <goals>
                <goal>add-source</goal>
            </goals>
            <configuration>
                <sources>
                    <source>src/common</source><!-- 添加规范外的源码目录 -->
                </sources>
            </configuration>
        </execution>
    </executions>
</plugin>
```

### 20.7.7. maven-dependency-plugin 管理依赖库

依赖项插件, 提供了处理工件的功能。它可以将本地或远程存储库中的工件(或构件中的文件)复制和/或解包到指定的位置。

参考: https://www.cnblogs.com/lianshan/p/7350614.html

比如, 部署的时候, 希望将依赖都打包到一个文件夹下

```xml
<plugin>   
    <artifactId>maven-dependency-plugin</artifactId>   
        <executions>   
        <execution>   
            <phase>install</phase>   
            <goals>   
                <goal>copy-dependencies</goal>   
            </goals>   
            <configuration>   
                <outputDirectory>${project.build.directory}/lib</outputDirectory>   
            </configuration>   
        </execution>   
    </executions>   
</plugin>  
```

### 20.7.8. jetty和tomcat

jetty:

相关参考: 多模块项目, 希望 启动的 web-module 可以随时反应 core-module 的修改

[Maven jetty plugin - automatic reload using a multi-module project](https://stackoverflow.com/questions/25725552/maven-jetty-plugin-automatic-reload-using-a-multi-module-project?noredirect=1&lq=1)

其他参考: [link1](https://stackoverflow.com/questions/3636493/multi-module-maven-project-and-jettyrun/3637829#3637829), [link2](https://stackoverflow.com/questions/3636493/multi-module-maven-project-and-jettyrun)

[jetty配置项](https://www.cnblogs.com/yiwangzhibujian/p/5856857.html)


`mvn jetty:run`

```xml
<plugin>
    <!-- https://mvnrepository.com/artifact/org.eclipse.jetty/jetty-maven-plugin -->
    <!-- 默认会去加载:
    resources in ${project.basedir}/src/main/webapp  
    classes in ${project.build.outputDirectory}  
    web.xml in ${project.basedir}/src/main/webapp/WEB-INF/  
        -->
    <groupId>org.eclipse.jetty</groupId>
    <artifactId>jetty-maven-plugin</artifactId>
    <version>9.4.9.v20180320</version>
    <configuration>  
        <scanIntervalSeconds>3</scanIntervalSeconds>  
        <httpConnector>  
            <port>8082</port>  
        </httpConnector>  
        <webApp>  
            <contextPath>/${project.artifactId}</contextPath>  
        </webApp>  
    </configuration>  
</plugin>
```

tomcat:

`mvn tomcat7:run`

```xml
<!-- https://tomcat.apache.org/maven-plugin-2.2/
    (参考: https://www.cnblogs.com/llguanli/p/7131253.html)
    -->
<plugin>
    <groupId>org.apache.tomcat.maven</groupId>
    <artifactId>tomcat7-maven-plugin</artifactId>
    <version>2.2</version>
    <configuration>
        <path>/taobao</path>
        <port>9090</port>
        <uriEncoding>UTF-8</uriEncoding>
    </configuration>
</plugin>
```

### 20.7.9. maven-source-plugin 打包源码

程序打包时候, 同时打包源码

```xml
<!-- 打包时添加源码 -->
<plugin>
    <groupId>org.apache.maven.plugins</groupId>
    <artifactId>maven-source-plugin</artifactId>
    <version>3.0.1</version>
    <executions>
        <execution>
            <id>attach-sources</id>
            <phase>package</phase>
            <goals>
                <goal>jar-no-fork</goal>
            </goals>
        </execution>
    </executions>
</plugin>

```

### native-maven-plugin 打二进制包

需要和 springboot 3 合作, 默认设置了版本

```xml
 <plugin>
                <groupId>org.graalvm.buildtools</groupId>
                <artifactId>native-maven-plugin</artifactId>
            </plugin>
```

### jib-maven-plugin 打 docker 镜像

```xml
<!--            ./mvnw compile jib:build -Dimage=xxx -->
            <plugin>
                <groupId>com.google.cloud.tools</groupId>
                <artifactId>jib-maven-plugin</artifactId>
                <version>3.3.2</version>
            </plugin>
```

### 20.7.10. maven-resources-plugins 处理资源替换

springboot 默认提供, 用于 maven 打包时资源文件的复制, 占位符的替换

处理 spring boot profile 和 maven profile 集成

在 spring boot 配置中, 使用 `@xxxx@` 来引用 maven 的 profile, 同时要打开 maven resource filter

不要复制某些文件, 在分环境打包时可以减少包体积:

```xml
<resources>
    <resource>
        <directory>src/main/resources</directory>
        <!--①-->
        <excludes>
            <exclude>application*.properties</exclude>
        </excludes>
    </resource>
    <resource>
        <directory>src/main/resources</directory>
        <!--②-->
        <filtering>true</filtering>
        <includes>
            <include>application.properties</include>
            <include>application-${profile.active}.properties</include>
        </includes>
    </resource>
</resources>





 <plugin>
                <artifactId>maven-resources-plugin</artifactId>
                <executions>
                    <execution>
                        <id>position-react-build</id>
                        <goals>
                            <goal>copy-resources</goal>
                        </goals>
                        <phase>generate-resources</phase>
                        <configuration>
                            <outputDirectory>${project.build.outputDirectory}/static</outputDirectory>
                            <resources>
                                <resource>
                                    <directory>${frontend.dir}/out</directory>
                                    <filtering>false</filtering>
                                </resource>
                            </resources>
                        </configuration>
                    </execution>
                </executions>
            </plugin>
```

①中，我们通过 excludes 来将所有的 application*.properties 排除在外，这样 maven 在打包时就不会复制这些文件。毕竟我们不希望把 application-dev.properties 也包含在 prod 的 jar 包里。

②中，通过开启 filtering，maven 会将文件中的 @XX@ 替换 profile 中定义的 XX 变量/属性。另外，我们还通过 includes 来告诉 maven 根据 自定义的 maven profile 来复制对应的 properties 文件。


### 20.7.11. maven-compiler-plugin 编译

编译插件, 可以设置 Java compile version

```xml
<plugin>                                                                                                                                      
    <!-- 指定maven编译的jdk版本,如果不指定,maven3默认用jdk 1.5 maven2默认用jdk1.3 -->                                                                           
    <groupId>org.apache.maven.plugins</groupId>                                                                                               
    <artifactId>maven-compiler-plugin</artifactId>                                                                                            
    <version>3.1</version>                                                                                                                    
    <configuration>                                                                                                                           
        <!-- 一般而言，target与source是保持一致的，但是，有时候为了让程序能在其他版本的jdk中运行(对于低版本目标jdk，源代码中不能使用低版本jdk中不支持的语法)，会存在target不同于source的情况 -->                    
        <source>1.8</source> <!-- 源代码使用的JDK版本 -->                                                                                             
        <target>1.8</target> <!-- 需要生成的目标class文件的编译版本 -->                                                                                     
        <encoding>UTF-8</encoding><!-- 字符集编码 -->
        <skipTests>true</skipTests><!-- 跳过测试 -->                                                                             
        <verbose>true</verbose>
        <showWarnings>true</showWarnings>                                                                                                               
        <fork>true</fork><!-- 要使compilerVersion标签生效，还需要将fork设为true，用于明确表示编译版本配置的可用 -->                                                        
        <executable><!-- path-to-javac --></executable><!-- 使用指定的javac命令，例如：<executable>${JAVA_1_4_HOME}/bin/javac</executable> -->           
        <compilerVersion>1.3</compilerVersion><!-- 指定插件将使用的编译器的版本 -->                                                                         
        <meminitial>128m</meminitial><!-- 编译器使用的初始内存 -->                                                                                      
        <maxmem>512m</maxmem><!-- 编译器使用的最大内存 -->                                                                                              
        <compilerArgument>-verbose -bootclasspath ${java.home}\lib\rt.jar</compilerArgument><!-- 这个选项用来传递编译器自身不包含但是却支持的参数选项 -->               
        <parameters>true</parameters>//插件的配置就可以从用户属性中获取, 即可以在 properties 中配置 java.version, maven.compiler.source, maven.compiler.target; springboot 已经配置了为 true, 所以只需引入插件即可在 properties 中设置 java.version...
    </configuration>  
    <executions>
					<execution>
						<id>compile-tests</id>
						<phase>process-test-sources</phase>
						<goals>
							<goal>testCompile</goal>
						</goals>
						<configuration>
							<source>${maven.compile.source}</source>
							<target>${maven.compile.target}</target>
						</configuration>
					</execution>
				</executions>                                                                                                                        
</plugin>    
```


### 20.7.12. spring-boot-maven-plugin

为Spring Boot应用提供了执行Maven操作的可能。允许你打包可执行文件和war文件，并且就地运行。

spring-boot:repackage, 绑定到 package 阶段. 也就是在mvn package之后，再次打包可执行的jar/war，同时保留mvn package生成的jar/war为.origin (需要自己绑定)

spring-boot:run，运行Spring Boot应用, 指定 spring boot profile 启动 `mvn spring-boot:run -Dspring-boot.run.profiles=dev`

```xml

<plugin>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-maven-plugin</artifactId>
    <!-- 临时使其失效 -->
    <configuration>
        <skip>true</skip>
    </configuration>
</plugin>
```

### 20.7.13. maven-install-plugin

本地依赖加入本地仓库

### 20.7.14. frontend-maven-plugin 管理前端环境

```xml
  <plugin>
                <groupId>com.github.eirslett</groupId>
                <artifactId>frontend-maven-plugin</artifactId>
                <version>1.11.3</version>
                <executions>
                    <!-- check if nodejs/npm installed -->
                    <execution>
                        <id>install-frontend-tools</id>
                        <goals>
                            <goal>install-node-and-yarn</goal>
                        </goals>
                        <!-- optional, also the default value -->
                        <phase>generate-resources</phase>
                    </execution>

                    <!-- install dependencies -->
                    <execution>
                        <id>yarn-install</id>
                        <goals>
                            <goal>yarn</goal>
                        </goals>
                        <phase>generate-resources</phase>
                        <configuration>
                            <arguments>install --registry=https://registry.npm.taobao.org</arguments>
                            <!--                            <arguments>install</arguments>-->
                        </configuration>
                    </execution>
                    <execution>
                        <id>yarn-build-and-export</id>
                        <goals>
                            <goal>yarn</goal>
                        </goals>
                        <phase>generate-resources</phase>
                        <configuration>
                            <arguments>export</arguments>
                        </configuration>
                    </execution>
                </executions>
                <configuration>
                    <workingDirectory>${frontend.dir}</workingDirectory>
                    <installDirectory>${project.build.directory}</installDirectory>
                    <nodeVersion>v18.14.0</nodeVersion>
                    <yarnVersion>v1.22.19</yarnVersion>
                    <!-- optional, just for projects in China main land -->
                    <!-- <downloadRoot>http://npm.taobao.org/mirrors/node/</downloadRoot> -->
                </configuration>
            </plugin>

```

## 20.8. 编写maven插件

https://github.com/acanda/spring-banner-plugin 实例

TODO 代码生成器插件https://zhuanlan.zhihu.com/p/69935918

处理文件复制, 比如灾备文件

插件前缀: 可以让你更方便地输入指令，因为在命令行里，一般调用插件目标，需要完整输入“groupId”、“artifactId”、“version”等等定位到某个插件，然后通过“:”写下插件目标，就可以运行插件的目标了。

maven-${prefix}-plugin，这个方式是官网插件使用的

${prefix}-maven-plugin，这个方式是第三方插件（包括我们自己写的）使用的

可以自己在 pom 中指定前缀:

```xml
<plugin>
    ...
    <configuration>
        ...
        <globalPrefix>xxxx


```

# 21. maven属性

有6中类型的maven属性

* 内置属性, 如 ${basedir}表示项目根目录(pom所在目录), ${version}项目版本
* pom属性, pom中对应元素的值。例如${project.artifactId}对应了`<project>下的<artifactId>`元素的值
    * ${project.build.sourceDirectory}:项目的主源码目录，默认为src/main/java/.
    * ${project.build.testSourceDirectory}:项目的测试源码目录，默认为/src/test/java/. 
    * ${project.build.directory}:项目构建输出目录，默认为target/. 
    * ${project.outputDirectory}:项目主代码编译输出目录，默认为target/classes/.
    * ${project.testOutputDirectory}:项目测试代码编译输出目录，默认为target/testclasses/.
    * ${project.build.finalName}:项目打包输出文件的名称，默认为${project.artifactId}${project.version}.
* Settings属性：与POM属性同理。如${settings.localRepository}指向用户本地仓库的地址
* Java系统属性：所有Java系统属性都可以使用Maven属性引用，例如${user.home}指向了用户目录。可以通过命令行mvn help:system查看所有的Java系统属性
* 环境变量属性：所有环境变量都可以使用以env.开头的Maven属性引用。例如${env.JAVA_HOME}指代了JAVA_HOME环境变量的值。也可以通过命令行mvn help:system查看所有环境变量。

* 自定义属性

    ```xml
    <project>  
        <properties>  
            <my.prop>hello</my.prop>  
        </properties>  
    </project>  
    ```

在pom中其他地方使用`${my.prop}`会被替换为hello





# 22. 开启资源文件过滤

通过 maven-resources-plugin 实现, 在打包时, 会有资源文件的复制, 在复制时, 替换 资源文件中的 `@xxx@` 占位符

默认情况下，Maven属性只有在POM中才会被解析。资源过滤就是指让Maven属性在资源文件(src/main/resources、src/test/resources)中也能被解析。



```xml
<build>  
<!-- 可选 -->
    <resources>  
        <resource>  
            <!-- ${project.basedir}可以省略 -->
            <directory>${project.basedir}/src/main/resources</directory>  
            <filtering>true</filtering>  
        </resource>  
    </resources>
    <testResources>  
        <testResource>  
            <directory>${project.basedir}/src/test/resources</directory>  
            <filtering>true</filtering>
        </testResource>
    </testResources>
</build>
```

从上面的配置中可以看出，我们其实可以配置多个主资源目录和多个测试资源目录。

# 23. 开启web资源过滤

普通资源位于[src/main/reousrces]下;
web资源位于[src/main/webapp]下;

借助插件`maven-war-plugin`



include标签指定要过滤的文件, 这里表示过滤所有的css和js文件

# 24. maven profile 多环境配置

## 24.1. profile 基本使用

需要首先 [开启资源文件过滤](#开启资源文件过滤)

`mvn help:active-profiles`查看哪些profile被激活了, `mvn help:all-profiles `列出所有的profile;

profile可以声明在三个文件中：

* `pom.xml`：很显然，这里声明的profile只对当前项目有效(此时profile中的properties和直接在pom的properties标签下定义效果是一样的); 

* `用户settings.xml`：.m2/settings.xml中的profile对该用户的Maven项目有效(比全局的优先级高); 

* `全局settings.xml`：conf/settings.xml，对本机上所有Maven项目有效

profile在pom.xml中可声明的元素, 和在settings.xml中可声明的元素是不一样的, 在 pom 中可以声明:

```xml
<project>
    <repositories></repositories>
    <pluginRepositories></pluginRepositories>  
    <distributionManagement></distributionManagement>  
    <dependencies></dependencies>  
    <dependencyManagement></dependencyManagement>  
    <modules></modules>  
    <properties></properties>  
    <reporting></reporting>  
    <build>  
        <plugins></plugins>  
        <defaultGoal></defaultGoal>  
        <resources></resources>  
        <testResources></testResources>  
        <finalName></finalName>  
    </build>  
</project>  
```

而setttings中只能声明这些元素

```xml
<project>  
    <repositories></repositories>  
    <pluginRepositories></pluginRepositories>  
    <properties></properties>  
</project>
```

编写profile,在pom中的project元素下:

```xml
<profiles>
    <profile>
        <id>dev</id>
        <properties>
            <env>dev</env>
        </properties>
        <activation>
            <activeByDefault>true</activeByDefault>
        </activation>
    </profile>
    <profile>
        <id>prd</id>
        <properties>
            <env>prd</env>
        </properties>
    </profile>
</profiles>
```

如何激活profile呢?

命令行方式: 比如有两个profile, id为 devx, devy, 那么激活命令为 `mvn clean install  -P devx,devy  ` (-P 后面有无空格都可)

系统属性激活，用户可以配置当某系统属性存在或其值等于期望值时激活profile，如

```xml
<profiles>  
    <profile>  
        <activation>  
            <property>  
                <name>actProp</name>  
                <value>x</value>  
            </property>  
        </activation>  
    </profile>  
</profiles>  
```

上面配置表示只有系统属性 actProp 为 x 时激活 profile, 可以在命令行声明系统属性 `mvn clean install -DactProp=x `, 这也是一种变相的从命令行激活profile的方法，`而且多个profile完全可以使用同一个系统属性来激活`。系统属性可以通过`mvn help:system`来查看 (-P, -D 区别: 前者用来制定 profile id, 后者用来指定 activation property)

操作系统环境激活

```xml
<profiles>  
    <profile>  
        <activation>  
            <os>  
                <name>Windows XP</name>  
                <family>Windows</family>  
                <arch>x86</arch>  
                <version>5.1.2600</version>  
            </os>  
        </activation>  
    </profile>  
</profiles>  
```

这里的family值包括Window、UNIX和Mac等，而其他几项对应系统属性的os.name、os.arch、os.version

文件存在与否激活

```xml
<profiles>  
    <profile>  
        <activation>  
            <file>  
                <missing>x.properties</missing>  
                <exists>y.properties</exists>  
            </file>  
        </activation>
    </profile>
</profiles>
```

settings文件显式激活 (不实用): 
   
```xml
<settings>  
    ...  
    <activeProfiles>  
        <activeProfile>devx</activeProfile>  
        <activeProfile>devy</activeProfile>  
    </activeProfiles>  
    ...  
</settings>  
```

默认激活(如果有其他profile被激活了, 默认激活就自动失效了)



<profiles>
    <profile>
        <id>dev</id>
        <properties>
            <env>dev</env>
        </properties>
        <activation>
            <activeByDefault>true</activeByDefault>
        </activation>
    </profile>
</profiles>

## 24.2. profile build

在  profile 中定义 配置, 比如定义 build 配置, 使得不同 profile 打包不同的 配置文件


## 24.3. 配置默认 jdk 编译版本

```xml
<profiles>
    <profile>
        <id>jdk1.8</id>
        <activation>
            <activeByDefault>true</activeByDefault>
            <jdk>1.8</jdk>
        </activation>
        <properties>
            <maven.compiler.source>1.8</maven.compiler.source>
            <maven.compiler.target>1.8</maven.compiler.target>
            <maven.compiler.compailerVersion>1.8</...>
        </properties>
</profile>
```

# 25. 模块的聚合&继承

maven的聚合为这种场景服务: 我们一次希望构建两个项目/模块, 而不是到两个模块目录下分别构建

为了实现聚合, 需要有额外一个项目充当parent, 可以查看 [parent-pom](#parent-pom), 作为parent项目, 该项目只有一个pom文件吗没有代码和资源文件, packaging 为 pom 类型

现在使用 `mvn clean install` maven会先按照一定顺序构建一个[反应堆](#反应堆), 依次构建各个模块

接下来看看继承.

继承主要是为了解决pom文件的重复配置问题; 重点是要正确设置`relativePath`元素的值, 默认值为`../pom.xml`; (默认值似乎无效, 需要手动指定)

子模块可以省略`groupId和version`, 会从parent继承;

父pom中有哪些元素可以被继承呢? (group, version, dependencies, dependencyManagement, plugins, pluginManagement, properties ...)



聚合&继承实际上经常同时使用;

# 26. dependencyMangement元素

一般在parent pom中使用, 提供依赖管理功能, 并不会真正引入. 如果需要引入, 还需要在dependency中声明, 这时只需要groupId和artifactId元素就可以唯一标识一个依赖了;

这时可以介绍scope: import 了, 如果一个构件声明为import范围, 那么它只能在dependencyMangement元素中声明才有效, 该构件通常指向一个pom, 作用是将该pom中的dependencyMangement元素内容导入当前pom的dependencyMangement元素下; 只是对依赖进行管理(如版本号), 并不会引入到 classpath



# 27. pluginManagement元素

和dependencyMangement元素类似;

# 28. 反应堆

反应堆构件顺序: Maven按照顺序读取A的pom, 如果该A的pom没有依赖任何模块, 直接构建该项目A, 否则就先构建其依赖的模块B, 如果B还依赖构建C, 则进一步先构建模块C;

剪切反应堆: 希望只构件parent的某几个模块而不希望全部构建, maven提供这些命令


# 29. 历史项目改造为maven项目

这时可能需要修改maven项目的规范, 比如修改源码目录



如果需要包含or排除命名不规范的测试用例 ,参见[包含&排除测试用例]

* `mvn -s <自定义位置的setttings> xx:xx` -s表示用户settings, -gs表示设定全局settings
* `mvn -f <自定义位置的pom>`

# 30. 检查依赖冲突

* `mvn dependency:tree` 简要的列出项目的依赖树
* `mvn dependency:tree -D verbose` 详细列出项目的依赖树
* `mvn dependency:tree -D includes=groupid:artifactId excludes=groupId:artifactId` 根据自己的喜好列出依赖树


# 31. Maven项目的持续集成

# 32. 编写Maven模板archetype

## 32.1. archetype组成元素

* archetype特性是通过插件`maven-archetype-plugin`实现的
* `mvn archetype:generate` 会进入生成的交互界面, 有多个archetype供选择, 他们来自于archetype-catalog.xml, 详细使用见[使用archetype生成项目骨架](#使用archetype生成项目骨架)
* 在自动化shell脚本中`mvn archetype:generate -B`, -B表示不要进入交互式界面.

怎么自定义?

一个archetype项目包括这几个部分



1. pom.xml 模版自身的pom; 有基本的坐标, 默认jar打包方式即可
2. src/main/resources/archetype-resources/* 下面的数据用于生成新的项目;包括pom原型, 主代码原型;
3. src/main/resources/META-INF/maven/archetype.xml 模版的描述符文件; 声明哪些文件会包含在模版中, 使用了哪些属性参数

下面创建一个简单的archetype

## 32.2. archetype-demo

### 32.2.1. archetype自身pom

首先是archetype的pom:

```xml
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/maven-v4_0_0.xsd">
  <modelVersion>4.0.0</modelVersion>
  
  <groupId>com.xiaoyu.archetype</groupId>
  <artifactId>archetype-learn</artifactId>
  <version>0.0.1-SNAPSHOT</version>
  <packaging>jar</packaging>
  <name>Archetype - archetype-learn</name>
</project>

```

### 32.2.2. 模版数据

接着是模板数据, 包括pom和代码

```java
package $com.xiaoyu.archetype.learn;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {
        System.out.println( "Hello World!" );
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
package $com.xiaoyu.archetype.learn;

import junit.framework.Test;
import junit.framework.TestCase;
import junit.framework.TestSuite;

/**
 * Unit test for simple App.
 */
public class AppTest 
    extends TestCase
{
    /**
     * Create the test case
     *
     * @param testName name of the test case
     */
    public AppTest( String testName )
    {
        super( testName );
    }

    /**
     * @return the suite of tests being tested
     */
    public static Test suite()
    {
        return new TestSuite( AppTest.class );
    }

    /**
     * Rigourous Test :-)
     */
    public void testApp()
    {
        assertTrue( true );
    }
}

```

```xml
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/maven-v4_0_0.xsd">
  <modelVersion>4.0.0</modelVersion>
  
  <!-- 设置artifactId和groupId作为变量 ( ${artifactId} / ${groupId} )。这两个变量都将在archetype:generate从命令行运行时被初始化 -->
  <groupId>${groupId}</groupId>
  <artifactId>${artifactId}</artifactId>
  <version>${version}</version>
  <packaging>jar</packaging>
  <name>${artifactId}</name>
  <dependencies>
    <dependency>
      <groupId>junit</groupId>
      <artifactId>junit</artifactId>
      <version>3.8.1</version>
      <scope>test</scope>
    </dependency>
  </dependencies>
  
  <build>
    <pluginManagement>
        <plugins>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
			    <artifactId>maven-compiler-plugin</artifactId>
			    <version>3.7.0</version>
			    <configuration>
			         <source>1.8</source>
			         <target>1.8</target>
			    </configuration>
            </plugin>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
			    <artifactId>maven-resources-plugin</artifactId>
			    <version>3.0.2</version>
			    <configuration>
			         <encoding>UTF-8</encoding>
			    </configuration>
            </plugin>
        </plugins>
    </pluginManagement>
  </build>
</project>

```

### 32.2.3. 描述符文件

最重要的一步: 编辑描述符信息

```xml
<archetype xmlns="http://maven.apache.org/plugins/maven-archetype-plugin/archetype/1.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://maven.apache.org/plugins/maven-archetype-plugin/archetype/1.0.0 http://maven.apache.org/xsd/archetype-1.0.0.xsd">
  
  <id>archetype-learn</id><!-- 应该和archetype的artifactId相同 -->
  <!-- 
  <sources> = src/main/java
<resources> = src/main/resources
<testSources> = src/test/java
<testResources> = src/test/resources
<siteResources> = src/site
1. <sources> 和<testSources>都能包含<source>元素来指定源文件。
2. <resources>和<testResources>和<siteResources>能包含<resource>元素来指定资源文件
3. 比如src/main/webapp目录放在<resource>标签中
   -->
  <sources>
    <source>src/main/java/App.java</source>
  </sources>
  <testSources>
    <source>src/test/java/AppTest.java</source>
  </testSources>
  <!-- <allowPartial>true</allowPartial>标签是可选的，它使得archetype:generate可以在一个已存在的工程中运行 -->
  <!-- <allowPartial>true</allowPartial> -->
</archetype>
```

### 32.2.4. 使用

`mvn install` 安装这个archetype, `mvn archetype:generate -D archetypeGroupId=com.xiaoyu.archetype -D archetypeArtifactId=archetype-learn -D archetypeVersion=0.0.1-SNAPSHOT -D groupId=com.xiaoyu.archetype.generate -D artifactId=demo`使用这个archetype

如果直接使用`mvn archetype:generate` 而不带参数, 回出来一个列表供选择, 如何让自定义的archetype出现在这个列表呢? 见[archetype-catalog](#archetype-catalog)

## 32.3. archetype-catalog

参考: http://maven.apache.org/archetype/maven-archetype-plugin/specification/archetype-catalog.html

maven-archetype-plugin会从这些位置读取catalog:

1. `internal`: 插件内置的catalog
1. `local`(插件默认): 本地的默认位置, 位于`~/.m2/archetype-catalog.xml`(默认不存在)
1. `remote`(插件默认): maven中央仓库的
1. `file://` : 指定本地任意位置的catalog 
1. `http://` : 远程的catalog

如何读取这些catalog?

`mvn archetype:generate -D archetypeCatalog=file:// /xxx/xxx/archetype-catalog.xml,local` 指定多个catalog

典型的`archetype-catalog.xml`长这样:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<archetype-catalog  xmlns="http://maven.apache.org/plugins/maven-archetype-plugin/archetype-catalog/1.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://maven.apache.org/plugins/maven-archetype-plugin/archetype-catalog/1.0.0 http://maven.apache.org/xsd/archetype-catalog-1.0.0.xsd">
  <archetypes>
    <archetype>
       <groupId>org.appfuse.archetypes</groupId><!-- 必须 -->
       <artifactId>appfuse-basic-jsf</artifactId><!-- 必须 -->
       <version>2.0</version><!-- 必须 -->
       <repository>http://static.appfuse.org/releases</repository><!-- 可选, 如果省略, 会在archetype-catalog.xml所在的仓库找archetype -->
       <description>AppFuse archetype for creating a web application with Hibernate, Spring and JSF</description><!-- 可选 -->
    </archetype>
    ...
  </archetypes>
</archetype-catalog>
```

















