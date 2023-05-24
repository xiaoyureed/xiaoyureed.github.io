---
title: Gradle note
date: 2019-7-12
tag: [gradle]
---


- [1. 简介](#1-简介)
  - [1.1. why gradle 以及 Java构建工具的发展](#11-why-gradle-以及-java构建工具的发展)
  - [1.2. what is gradle](#12-what-is-gradle)
  - [1.3. 配置国内镜像源](#13-配置国内镜像源)
  - [1.4. 修改依赖缓存位置](#14-修改依赖缓存位置)
  - [1.5. 守护进程](#15-守护进程)
  - [1.6. 逻辑组成](#16-逻辑组成)
- [2. 使用](#2-使用)
  - [2.1. 依赖类型](#21-依赖类型)
  - [基于 kotlin 的配置脚本](#基于-kotlin-的配置脚本)
  - [2.2. Gradle脚本基于groovy的DSL](#22-gradle脚本基于groovy的dsl)
    - [2.2.1. build.gradle](#221-buildgradle)
    - [2.2.2. config.gradle](#222-configgradle)
    - [2.2.3. settings.gradle](#223-settingsgradle)
  - [2.3. 命令行使用](#23-命令行使用)
  - [2.4. gradle.properties](#24-gradleproperties)
  - [2.5. 多模块项目](#25-多模块项目)
    - [2.5.1. 依赖顺序](#251-依赖顺序)
- [3. 插件](#3-插件)
  - [3.1. 基本使用 核心插件 社区插件](#31-基本使用-核心插件-社区插件)
  - [3.2. 常用插件](#32-常用插件)
    - [3.2.1. 二进制插件](#321-二进制插件)
    - [3.2.2. application 插件](#322-application-插件)
    - [3.2.3. 脚本插件](#323-脚本插件)
    - [3.2.4. 初始化插件](#324-初始化插件)
    - [3.2.5. 热部署](#325-热部署)
  - [3.3. 自定义插件](#33-自定义插件)
- [4. gradle wrapper](#4-gradle-wrapper)
  - [To get a better experience in china](#to-get-a-better-experience-in-china)



https://gradle.org/

https://lippiouyang.gitbooks.io/gradle-in-action-cn/content/gradle/continuous-dilivery.html
https://www.jianshu.com/p/7ccdca8199b8 入门

https://gradle.org/releases/ install

https://plugins.gradle.org/ 插件平台

https://www.bilibili.com/video/BV1DE411Z7n

https://www.bilibili.com/video/BV1484y1C7G3

https://www.bilibili.com/video/BV1dK411K7Pg


# 1. 简介

## 1.1. why gradle 以及 Java构建工具的发展

最早出现的是Ant，Ant里的每一个任务（target）都可以互相依赖，Ant的最大缺点就是依赖的外部库也要添加到版本控制系统中，因为Ant没有一个机制来把这些jar文件放在一个中央库里面，结果就是不断的拷贝和粘贴代码。

随后Maven在2004年出现了，Maven引入了标准的项目和路径结构，还有依赖管理，不幸的是自定义的逻辑很难实现，唯一的方法就是引入插件。

Gradle的出现满足了很多现在构建工具的需求, 通过 groovy 自定义任务, 拥有本地的依赖缓存库

## 1.2. what is gradle

gradle并不是另起炉灶，它充分地使用了maven的现有资源。继承了maven中仓库，坐标，依赖这些核心概念

同时，它又继承了ant中target的概念，我们又可以重新定义自己的任务了。(gradle中叫做task)


## 1.3. 配置国内镜像源

```

a). 配置只在当前项目生效
在 build.gradle 文件内修改/添加 repositories 配置

repositories {
        mavenLocal()
        maven { url 'http://maven.aliyun.com/nexus/content/groups/public/' }
    # https://maven.aliyun.com/repository/central
        mavenCentral()
}
repositories {
    mavenLocal()
    maven("https://mirrors.cloud.tencent.com/nexus/repository/maven-public/")
    mavenCentral()

}


settings.gradle.kts

pluginManagement {
    repositories {
        mavenLocal()
        maven("https://mirrors.cloud.tencent.com/nexus/repository/maven-public/")
        # https://maven.aliyun.com/repository/gradle-plugin
        mavenCentral()
        gradlePluginPortal()
    }
}
//or
pluginManagement {
    repositories {
        maven { url 'https://mirrors.cloud.tencent.com/nexus/repository/maven-public/' }
        mavenCentral()
        gradlePluginPortal()
        mavenLocal()
    }
}


b). 配置全局生效
找到 (用户家目录)/.gradle/init.gradle 文件，如果找不到 init.gradle 文件，自己新建一个

allprojects{
  repositories {
    def ALIYUN_REPOSITORY_URL = 'https://maven.aliyun.com/repository/public'
    def ALIYUN_JCENTER_URL = 'https://maven.aliyun.com/repository/public'
    def ALIYUN_GOOGLE_URL = 'https://maven.aliyun.com/repository/google'
    def ALIYUN_GRADLE_PLUGIN_URL = 'https://maven.aliyun.com/repository/gradle-plugin'
    all { ArtifactRepository repo ->
      if(repo instanceof MavenArtifactRepository){
        def url = repo.url.toString()
        if (url.startsWith('https://repo1.maven.org/maven2/')) {
          project.logger.lifecycle "Repository ${repo.url} replaced by $ALIYUN_REPOSITORY_URL."
          remove repo
        }
        if (url.startsWith('https://jcenter.bintray.com/')) {
          project.logger.lifecycle "Repository ${repo.url} replaced by $ALIYUN_JCENTER_URL."
          remove repo
        }
        if (url.startsWith('https://dl.google.com/dl/android/maven2/')) {
          project.logger.lifecycle "Repository ${repo.url} replaced by $ALIYUN_GOOGLE_URL."
          remove repo
        }
        if (url.startsWith('https://plugins.gradle.org/m2/')) {
          project.logger.lifecycle "Repository ${repo.url} replaced by $ALIYUN_GRADLE_PLUGIN_URL."
          remove repo
        }
      }
    }
    maven { url ALIYUN_REPOSITORY_URL }
    maven { url ALIYUN_JCENTER_URL }
    maven { url ALIYUN_GOOGLE_URL }
    maven { url ALIYUN_GRADLE_PLUGIN_URL }
  }
}



验证是否修改成功
在 build.gradle 文件内增加一个任务

task showRepos {
    doLast {
        repositories.each {
            println "repository: ${it.name} ('${it.url}')"
        }
    }
}
然后执行 gradle -q showRepos 任务，如果输出了刚刚配置的地址就说明修改成功，如下：

$ gradle -q showRepos
repository: maven ('http://maven.aliyun.com/nexus/content/groups/public')


```

## 1.4. 修改依赖缓存位置

```
通过添加系统变量 GRADLE_USER_HOME
设置虚拟机参数 org.gradle.user.home 属性
通过命令行-g或者 --gradle-user-home 参数设置

启用
USER_HOME»/.gradle/gradle.properties：

    org.gradle.daemon=true

停止进程
gradle --stop


```

## 1.5. 守护进程

```
Gradle运行在JVM上，它会一些额外的类库，但这些类库在初始化时会花费一些时间，这会导致在某些时候，Gradle在启动的时候有些慢。

解决办法是使用Gradle守护进程：它是一个长期在后台运行的进程，可以更快速的执行一些构建任务。

它的实现方式是避免昂贵的启动过程和使用缓存，将项目的相关数据保存在内存当中。

```

## 1.6. 逻辑组成

```groovy
// 一个Gradle构建通常包含三个基本构建块：project，task和property。每个构建至少包含一个project，一个project可以包含一个或者多个task，project和task可以暴露属性来控制构建


```

# 2. 使用

## 2.1. 依赖类型

```groovy
// 目前Gradle版本支持的依赖配置有：implementation、api、compileOnly、runtimeOnly 和 annotationProcessor，已经废弃的配置有：compile、provided、apk、providedCompile。



api   // 类似 compile, 由java-library提供 当其他模块依赖于此模块时，此模块使用api声明的依赖包是可以被其他模块使用 (允许依赖传递)
implementation // 类似 compile, 由java-library提供 当其他模块依赖此模块时，此模块使用implementation声明的依赖包只限于模块内部使用，不允许其他模块使用  (依赖不可传递)

annotationProcessor //编译前处理注解，例如 lombok。

compileOnly //适用于编译期需要而不需要打包的情况 (由java插件提供), 类似provided

providedRuntime// 同proiveCompile类似。
runtime // 在运行和测试系统的时候需要，但在编译的时候不需要 (比如，你可能在编译的时候只需要JDBC API JAR，而只有在运行的时候才需要JDBC驱动实现。)
testCompile //测试期编译需要的附加依赖
testRuntime //测试运行期需要
default// 配置默认依赖范围

// /////////////// 废弃 ///////////

compile // 在所有的classpath中可用，同时它们也会被打包
providedCompile //与compile作用类似,但不会被添加到最终的war包中 (war插件提供的范围类型)
```

## 基于 kotlin 的配置脚本



## 2.2. Gradle脚本基于groovy的DSL


### 2.2.1. build.gradle

```groovy
// 必须在顶部
plugins {
	id 'org.springframework.boot' version '2.7.0'
	id 'io.spring.dependency-management' version '1.0.11.RELEASE'
	id 'java' // java是“核心插件”, it is unnessecery to specify a version number, “社区插件” have to specify
}


//定义扩展属性(给脚本用的脚本)
// buildScript方法  实际返回的是一个ScriptHandler对象
buildScript {
    repositories {
         mavenCentral()
    }
}
//应用插件,
// 值可以为插件id或者是插件的具体实现类
//这里引入了Gradle的Java插件,此插件提供了Java构建和测试所需的一切。
// apply方法 参数是一个 map,调用时参数省略了括号
apply plugin: 'java'
//引用其他gradle脚本，push.gradle就是另外一个gradle脚本文件
apply from: './push.gradle'

//定义扩展属性(可选)
ext {
    foo="foo"
}

//定义局部变量(可选)
def bar="bar"

//修改项目属性(可选), 指定project自带属性
group 'pkaq'
version '1.0-SNAPSHOT'

//定义仓库,当然gradle也可以使用各maven库 ivy库 私服 本地文件等,后续章节会详细介绍(可选)
repositories {
    jcenter()
}

//定义依赖,这里采用了g:a:v简写方式,加号代表了最新版本(可选)
// dependencies 方法  实际返回的是一个DependencyHandler对象
dependencies {
    def bootVersion = "1.3.5.RELEASE"
    // 采用map描述依赖
    testCompile group: 'junit', name: 'junit', version: '4.0'
    // 传入多个依赖
    compile(
      [group: 'org.springframework', name: 'spring-core', version: '2.5'],
      [group: 'org.springframework', name: 'spring-aop', version: '2.5']
    )
    // 传入多个                                                                
    compile 'org.springframework:spring-core:2.5',
          'org.springframework:spring-aop:2.5'
    // 采用字符串方式描述依赖
    // 有占位符的话, 必须使用 双引号
    compile     "org.springframework.boot:spring-boot-starter-web:${bootVersion}",  
                "org.springframework.boot:spring-boot-starter-data-jpa:${bootVersion}",
                "org.springframework.boot:spring-boot-starter-tomcat:${bootVersion}"
                "org.springframework.boot:spring-boot-starter-tomcat:+" // 自动获取最新版本依赖
                                                                //也可以采用1.x,2.x的方式来获取某个大版本下的最新版本
    // 项目依赖
    //此类依赖多见于多模块项目，书写方式如下，其中:是基于跟项目的相对路径描述符                                                                
    compile project(':project-foo')

    // 文件依赖
    // 指定多个依赖
   compile files('hibernate.jar', 'libs/spring.jar')
   // 读取lib文件夹下的全部文件作为项目依赖
   compile fileTree('libs')
   // 根据指定基准目录\包含\排除条件加载依赖
   compile fileTree(dir:'libs',include:'spring*.jar',exclude:'hibernate*.jar')


    //内置依赖
    // 加载Gradle自带的groovy作为依赖
   compile localGroovy()
   // 使用Gradle API作为依赖
   compile gradleApi()
   //使用 Gradle test-kit API 作为依赖
   testCompile gradleTestKit()


    // 子模块依赖
    // 就是声明依赖的依赖, 或者依赖的传递依赖
    // 这里让druid连接池依赖了ptj.tiger的一个库
     // 让ptj.tiger作为druid的传递性依赖
    compile module("com.alibaba:druid:1.0.26") {
            dependency("cn.pkaq:ptj.tiger:+")
    }
    runtime module("org.codehaus.groovy:groovy:2.4.7") {
        // 控制依赖传递
        // 停用groovy依赖的commons-cli库的依赖传递
        dependency("commons-cli:commons-cli:1.0") {
            // 传递依赖特性可以轻松地通过transitive参数进行开启或关闭
            transitive = false
        }
        // 添加@jar的方式忽略该依赖的所有传递性依赖
        compile 'com.android.support:support-v4:23.1.1'@jar
        // 也可以全局性的关闭依赖的传递特性
        // configurations.all {
        //     transitive = false
        // }
        
        // 让groovy依赖的ant模块的依赖ant-launcher停用传递性依赖并依赖ant-junit..........
        module(group: 'org.apache.ant', name: 'ant', version: '1.9.6') {
            dependencies "org.apache.ant:ant-launcher:1.9.6@jar",
                         "org.apache.ant:ant-junit:1.9.6"
        }
    }

    // 排除依赖
    compile('com.github.nanchen2251:CompressHelper:1.0.5'){
        //com.android.support:appcompat-v7:23.1.1
        exclude group: 'com.android.support'//排除组织依赖
        exclude module: 'appcompat-v7'//排除模块依赖
    }

    // 强制使用版本
    compile('com.github.nanchen2251:CompressHelper:1.0.5'){
        force = true
    }
    // 全局配置强制使用某个版本的依赖来解决依赖冲突中出现的依赖
    // configurations.all {
    //     resolutionStrategy {
    //         force 'com.github.nanchen2251:CompressHelper:1.0.5'
    //     }
    // }


}

// 冲突即停
// 让Gradle发现版本冲突时立即停止构建并抛出错误信息 (Gradle默认采用自动升级版本的方式解决依赖冲突，有时这种隐式升级可能会带来一些不必要的麻烦)
configurations.all {
  resolutionStrategy {
    failOnVersionConflict()
  }
}



//自定义任务(可选)
// 底层是调用Task task(String name, Closure configureClosure)方法
task printFoobar {
    println "${foo}__${bar}"
}


// 标准目录结构类似 maven
// 也可以自定义:
sourceSets {
    main {
        java {
            srcDir 'src/java'
        }
        resources {
            srcDir 'src/resources'
        }
    }
}
// or
sourceSets {
    main.java.srcDirs = ['src/java']
    main.resources.srcDirs = ['src/resources']
}

// 快速失败
test {
    failFast = true
}

```

### 2.2.2. config.gradle

统一管理项目依赖

```groovy

// 在项目build.gradle文件的最外层添加引用
apply from: "config.gradle"



```


### 2.2.3. settings.gradle

Gradle 就是通过 settings.gradle 来进行多项目构建的

```groovy

// 引入子项目
// (在项目根目录创建一个 settings.gradle，在根目录、app以及library目录下也都创建一个 build.gradle 文件)
include ":app", ":library"


```

## 2.3. 命令行使用

```sh
gradle -v # 版本

# 交互式创建gradle 项目
gradle init

gradle <task name> # 执行特定任务
gradlle tasks --all # 显示任务间的依赖关系 



# 忽略本地缓存每次都进行远程检索, 强制刷新依赖。
gradle build --refresh-dependencies

# 离线模式（总是采用缓存内容）
# 提高构建速度的一个好选择, 如果缓存中搜寻不到所需依赖会导致构建失败
gradle build --offline

# 跳过测试
gradle build -x test

# 继续执行任务而忽略前面失败的任务
gradle build --continue



# 清空所有编译、打包生成的文件
gradle clean


# 快速失败, 
# 只适用于 跑测试, 用于其他任务则会报错，比如./gradlew build --fail-fast，因为build不是Test类别的任务
gradle test --fail-fast

# 持续监听
# 无需你人工执行同样的命令
./gradlew test --tests FooTest --continuous 
#或者缩减版
./gradlew test --tests FooTest -t



# 排除指定测试
./gradlew check -x integrationTest

# -m, --dry-run
# 快速验证你的Gradle配置是正确的
./gradlew check -m



# 查看依赖图
gradle  dependencies > dep.log




# 使用指定的Gradle配置文件调用任务
gradle -b [file_path] [task]

# 使用指定的目录调用任务
#  -q 表示 quiet 静默
gradle -q -p [dir] helloWorld

# 查看项目结构树 (适用于多模块项目)
gradle -q projects
```

## 2.4. gradle.properties 

位于项目根目录

```
# 基于多核CPU并行运行Gradle的任务
org.gradle.parallel=true

```

## 2.5. 多模块项目

Spring官方：https://spring.io/guides/gs/multi-module/

Gradle官方：https://guides.gradle.org/creating-multi-project-builds/

https://zhongpan.tech/2020/03/04/027-create-multi-module-spring-boot-gradle-project/

### 2.5.1. 依赖顺序

https://docs.gradle.org/current/userguide/declaring_dependencies_between_subprojects.html#declaring_dependencies_between_subprojects

# 3. 插件

## 3.1. 基本使用 核心插件 社区插件

```groovy
// 新的引入方式统一了社区插件和核心插件的引入方式，对于社区插件不在需要使用buildscript，Gradle会根据插件的id，自动解析，定位
// plugins{}代码块只能在构建脚本中使用
// 不能和subprojects {}, allprojects {}结合使用（未来可能会解除这个限制）
plugins {
    id "com.jfrog.bintray" version "0.4.1"
    id "java"
}

// 插件就是编译过的实现了Plugin接口的class文件，封装在Jar文件中。
// - Gradle对于核心的插件，已经将其作为Gradle发布版本的一部分，所以只需要直接调用apply就可以了。
// - 然而，对于非核心的插件（社区插件），你必须将对应的Jar文件，放置到Gradle的classpath下，才能使用


// 若是核心插件, 直接通过 apply 引入
apply plugin:'java'


// 如果外部插件
// 被托管在https://plugins.gradle.org/ , 才可以可以直接使用 plugins {} 方式引入
// 如果没被托管, 仍需要通过 buildscript 指定托管地址
buildscript {
  repositories {

    //  jcenter()

    maven {
      url "https://plugins.gradle.org/m2/"
    }
  }
  dependencies {
    classpath "com.jfrog.bintray.gradle:gradle-bintray-plugin:1.8.4"
  }
}
apply plugin: "com.jfrog.bintray"

```

## 3.2. 常用插件

### 3.2.1. 二进制插件

```groovy
// 二进制插件 (核心插件)
// 支持 java 应用, 提供 编译, 打包...等任务
apply plugin:'java'  
// or
apply plugin: org.gradle.api.plugins.JavaPlugin  
// or
apply plugin: JavaPlugin  

```

### 3.2.2. application 插件

```groovy


// 执行JVM应用, 通过 gradle 运行 main class
// Application插件已经隐式地包括了Java插件和Distribution插件
apply plugin:'application'


// 使用
// 运行 run task
// -q 静默, 只输出 error
gradle -q run
// 对子模块运行 run 任务
gradle -q :<sub module name>:run

```

### 3.2.3. 脚本插件

```groovy
// 引入外部脚本
// 可将构建使用的脚本文件分段整理，可将脚本文件分离成职责分明的单个脚本文件

// 先定义 一个version.gradle文件
ext{
    versionName = "1.0"
    versionCode = 1
}
//在 build.gradle文件 中使用 (无需显式引入插件, 直接引入外部脚本使用即可)
apply from: 'version.gradle'

task taskVersion{
    doLast{
        println "版本是${versionName},版本号是${versionCode}"
    }
}

```

### 3.2.4. 初始化插件

```groovy

// 自动应用到项目的插件，所以不需要显示的使用apply关键字
// 只需要执行init任务，甚至都不需要创建build.gradle文件，该任务会自动创建该文件。

// 创建一个 java 项目
// 如果--type关键没有提供，则Gradle会根据项目的环境来大胆猜测，如果猜测失败，则使用basic类型
/*
默认使用Java插件
使用Jcenter作为依赖远程仓库
使用Junit作为测试框架
使用默认约定方式源代码
生成一份简单的样例代码
*/
gradle init --type java-library

gradle init --type java-library --test-framework spock//Uses Spock for testing instead of JUnit
gradle init --type java-library --test-framework testng //Uses TestNG for testing instead of JUnit

// 用来将一个Maven项目转换成一个Gradle项目。
// 该类型任务会将POM文件转换成一个或者多个Gradle文件。只要项目目录下，有pom.xml文件，就会自动使用该类型
gradle init --type pom


gradle init --type groovy-library

gradle init --type basic



```

### 3.2.5. 热部署

```groovy
// Jetty插件 + Watch插件
```

## 3.3. 自定义插件

```groovy
// 目前定义Gradle插件的方式有三种：gradle脚本、 buildSrc项目、Standalone项目,
// gradle脚本 不能通过依赖引入，只能拷贝到相应的工程使用，比较麻烦，
// Standalone项目可以发布项目到maven，然后通过gradle的classpath引入，但是不好调试，
// 通过创建buildSrc module编写插件，然后发布生成的jar包到maven，之后其他项目就可以通过gradle

```

# 4. gradle wrapper

```sh
# generate Gradle Wrapper
gradle wrapper --gradle-version <xxx version>

# 使用 (跳过测试)
./gradlew build [-x text]


```

## To get a better experience in china

国内使用, 可能wapper 下载缓慢

`gradle-wrapper.properties` have to be change like this:

```
# 腾讯云镜像
distributionUrl=https\://mirrors.cloud.tencent.com/gradle/gradle-6.6.1-bin.zip

```
