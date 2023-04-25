---
title: Play框架
tags: [play]
date: 2023-03-20
toc_min_heading_level: 2
toc_max_heading_level: 5
---

https://www.playframework.com/getting-started
https://zhuanlan.zhihu.com/p/82727108
https://developer.lightbend.com/start/?group=play

<!-- more -->

<!-- TOC -->

- [intro](#intro)
  - [是什么](#是什么)
  - [为什么使用](#为什么使用)
  - [安装](#安装)
    - [环境要求](#环境要求)
    - [sbt 安装并配置国内镜像](#sbt-安装并配置国内镜像)
  - [ide](#ide)
- [how to use](#how-to-use)
  - [sbt usage](#sbt-usage)
    - [sbt project layout](#sbt-project-layout)
    - [sbt commands](#sbt-commands)
    - [build.sbt](#buildsbt)
    - [build.sbt 多项目](#buildsbt-多项目)
    - [添加依赖库](#添加依赖库)
    - [project 目录](#project-目录)
      - [setup sbt version](#setup-sbt-version)
      - [project/project 元构建](#projectproject-元构建)
  - [project layout](#project-layout)
- [principle](#principle)
  - [请求映射的原理](#请求映射的原理)

<!-- /TOC -->


# intro

## 是什么

https://github.com/playframework/playframework

web 全栈开发框架, 类似 Ruby on Rails 

完全抛弃 servlet, 底层基于  netty or akka http

使用 SBT 作为 构建工具 (默认的 Scala 构建工具)

具有基于 JPA 的持久层

使用 Scala 作为模板引擎

play1.x 基于 java 开发, play2.x 基于 Scala 开发. 使用时, 可以用 Scala , 也能够使用 java

## 为什么使用


- 非阻塞, 纯异步, 类比
- 无状态, 适合 scale
- 事件驱动
- 全栈 web 框架
- hot reload
- trirl model engine (简单, 类型安全, 错误信息显示在页面)

## 安装

### 环境要求

```
jdk8

sbt (or gradle, but stb is more recommenedd) 

idea need Scala plugin

```

### sbt 安装并配置国内镜像

自行在 /conf 目录下创建一个 repo.properties 文件，更改镜像地址。有些论坛还会带上 maven-central 行，这会导致 sbt 仍然优先从 maven 仓库下载文件，所以需要将这行去除。sbt 在寻找依赖时，会依次按配置顺序从镜像中下载依赖。

```

[repositories]
local
huaweicloud-maven: https://repo.huaweicloud.com/repository/maven/
aliyun: https://maven.aliyun.com/nexus/content/groups/public/
mvn: https://repo1.maven.org/maven2/
sbt-plugin-repo: https://repo.scala-sbt.org/scalasbt/sbt-plugin-releases, [organization]/[module]/(scala_[scalaVersion]/)(sbt_[sbtVersion]/)[revision]/[type]s/[artifact](-[classifier]).[ext]
```

## ide

idea + scala plugin

不推荐 vscode + scala-lang.scala / scalameta.metals / dragos.scala-lsp + lightbend.vscode-sbt-scala

# how to use

## sbt usage

### sbt project layout

sbt 和 Maven 的默认的源文件的目录结构是一样的

src/ 中其他的目录将被忽略。而且，所有的隐藏目录也会被忽略

```
src/
  main/
    resources/
       <files to include in main jar here>
    scala/
       <main Scala sources>
    scala-2.12/
       <main Scala 2.12 specific sources>
    java/
       <main Java sources>
  test/
    resources
       <files to include in test jar here>
    scala/
       <test Scala sources>
    scala-2.12/
       <test Scala 2.12 specific sources>
    java/
       <test Java sources>
project/
    target/
target/
lib/
```

### sbt commands

```sh
# enter sbt interactive mode
sbt

# proj name
show name

show libraryDependencies #：查看当前项目依赖的库

# run the main method
run

# run specified task
run xxxTask

compile
# 持续构建
~ compile

exit


# ----------------

# enter scala repl, 已经帮你 设置好项目的 classpath，所以你可以根据项目的代码尝试实际的 Scala 示例
sbt console

# ----------------

# check version
sbt sbtVersion

sbt build 

# build + run a embedded http server ,  http://localhost:9000
sbt run

sbt clean

sbt compile
sbt clean compile
# testOnly 有两个参数 TestA 和 TestB。这个命令会按顺序执行（clean， compile， 然后 testOnly）
sbt clean compile "testOnly TestA TestB"

```

### build.sbt

sbt 的构建脚本, 一般位于 proj root, 命名为 build.sbt 和 Build.scala只是惯例

```go
// build.sbt 定义了一个 Project，它持有一个名为settings的scala表达式列表。


lazy val root = (project in file("."))
  .settings(
    name := "hello",
    version := "1.0",
    scalaVersion := "2.12.16"
  )
```

### build.sbt 多项目


```go
// 定义多项目 id
// 
lazy val util = project.in(file("util")) //等价 (project in file("util"))
lazy val core = project in file("core")
lazy val root = (project in file(".")).aggregate(util, core) // 一起编译, 顺序随机
                // 阻止聚合 (即 各自独立, 不会一起编译)
                .settings(
                    aggregate in update := false
                )
// core 依赖 util, 编译时会强制有先后顺序
lazy val core = project.dependsOn(util)



// common settings
lazy val commonSettings = Seq(
  organization := "com.example",
  version := "0.1.0",
  scalaVersion := "2.12.16"
)

lazy val core = (project in file("core"))
  .settings(
    commonSettings,
    // other settings
  )

lazy val util = (project in file("util"))
  .settings(
    commonSettings,
    // other settings
  )




```



### 添加依赖库

一种是将 jar 文件 放入 lib/（非托管的依赖）中，

另一种是在 build.sbt 中添加托管的依赖

```go
val derby = "org.apache.derby" % "derby" % "10.4.1.3"

ThisBuild / organization := "com.example"
ThisBuild / scalaVersion := "2.12.16"
ThisBuild / version      := "0.1.0-SNAPSHOT"

lazy val root = (project in file("."))
  .settings(
    name := "hello",
    libraryDependencies += derby
  )
```

### project 目录


#### setup sbt version

位于 `$root/project/build.properties`, 强制指定一个版本的 sbt

```
sbt.version=1.6.2

```

#### project/project 元构建

```go
hello/                  # 项目的基目录

    Hello.scala         # 一个项目源文件（也可以在src/main/scala）

    build.sbt           # build.sbt 是project/ 中元构建根项目的源代码。是构建定义项目的一部分。

    project/            # 元构建根项目的基目录

        Build.scala     # 元构建根项目的一个源文件，是你的构建定义的构建定义源文件

        build.sbt       # 元元构建的根项目——project/project的源代码；构建定义的构建定义

        project/        # 元元构建的根项目的基目录；构建定义的构建定义工程

            Build.scala # project/project/ 元元构建的根项目中的源文件




// project/Dependencies.scala
import sbt._

object Dependencies {
  // Versions
  lazy val akkaVersion = "2.6.19"

  // Libraries
  val akkaActor = "com.typesafe.akka" %% "akka-actor" % akkaVersion
  val akkaCluster = "com.typesafe.akka" %% "akka-cluster" % akkaVersion
  val specs2core = "org.specs2" %% "specs2-core" % "4.16.0"

  // Projects
  val backendDeps =
    Seq(akkaActor, specs2core % Test)
}


// Dependencies对象将在build.sbt中可用
// 
// build.sbt
import Dependencies._

ThisBuild / organization := "com.example"
ThisBuild / version      := "0.1.0-SNAPSHOT"
ThisBuild / scalaVersion := "2.12.16"

lazy val backend = (project in file("backend"))
  .settings(
    name := "backend",
    libraryDependencies ++= backendDeps
  )
```



## project layout

```
app                      → Application sources
 └ assets                → Compiled asset sources
    └ stylesheets        → Typically LESS CSS sources
    └ javascripts        → Typically CoffeeScript sources
 └ controllers           → Application controllers
 └ models                → Application business layer
 └ views                 → Templates
build.sbt                → Application build script
conf                     → Configurations files and other non-compiled resources (on classpath)
 └ application.conf      → Main configuration file
 └ routes                → Routes definition
dist                     → Arbitrary files to be included in your projects distribution
public                   → Public assets
 └ stylesheets           → CSS files
 └ javascripts           → Javascript files
 └ images                → Image files
project                  → sbt configuration files
 └ build.properties      → Marker for sbt project
 └ plugins.sbt           → sbt plugins including the declaration for Play itself
lib                      → Unmanaged libraries dependencies
logs                     → Logs folder
 └ application.log       → Default log file
target                   → Generated stuff
 └ resolution-cache      → Info about dependencies
 └ scala-2.13
    └ api                → Generated API docs
    └ classes            → Compiled class files
    └ routes             → Sources generated from routes
    └ twirl              → Sources generated from templates
 └ universal             → Application packaging
 └ web                   → Compiled web assets
test                     → source folder for unit or functional tests

```


# principle

## 请求映射的原理

浏览器内输入 url 请求某服务器上的 Play2 服务（默认是 9000 端口）。程序会去 routes 文件中根据 url 映射到 controllers 文件夹下的指定 Controller 的方法去执行, 示例：用户输入 localhost:9000/doLogin，该请求被转发到 controllers.LoginController.doLogin 去处理