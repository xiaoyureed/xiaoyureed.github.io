---
title: Coding Gracefully with Gradle, Java17 and Spring Boot Jpa
date: 2023-03-22
tags: [gradle, java, jpa]
authors: me
keywords: [gradle, java, jpa]
---

This Article I'm gonna demo How to develop a web based scaffold by using Gradle, Java17 and Jpa


<!-- truncate -->

## establish the project structure

```sh
java -version
# openjdk17
gradle -v
# v7.4

mkdir graceful-coding
cd ...

# let's try to build an app having the similar functionality to zhihu to conduct the demo

mkdir question-service
cd ...

touch settings.gradle.kts
touch build.gradle.kts
```

settings.gradle.kts includes the following content:

```kotlin
rootProject.name = "question-service"

pluginManagement {
    repositories {
        mavenLocal()
        maven("https://mirrors.cloud.tencent.com/nexus/repository/maven-public/")
        mavenCentral()
        gradlePluginPortal()
    }
}


```

build.gradle.kts :

```kotlin
import org.springframework.boot.gradle.plugin.SpringBootPlugin

plugins {
    java
    id("org.springframework.boot") version "3.0.6"
}

java {
    toolchain {
        languageVersion.set(JavaLanguageVersion.of(17))
    }
}

repositories {
    mavenLocal()
    maven("https://mirrors.cloud.tencent.com/nexus/repository/maven-public/")
    mavenCentral()

}

dependencies {
    implementation(platform(SpringBootPlugin.BOM_COORDINATES))
    implementation("org.springframework.boot:spring-boot-starter-web")
    implementation("org.springframework.boot:spring-boot-starter")
    implementation("org.springframework.boot:spring-boot-starter-actuator")
    testImplementation("org.springframework.boot:spring-boot-starter-test")


//
//    testImplementation(platform("org.junit:junit-bom:5.9.3"))
//    testRuntimeOnly("org.junit.jupiter:junit-jupiter-engine")
//    testImplementation("org.junit.jupiter:junit-jupiter-api")


}

tasks {
    test {
        useJUnitPlatform()
    }
}


```

generate gradle wrapper

```sh
gradle wrapper


./gradlew build
```

## try the basic test

smoke test

```java

package io.github.xiaoyureed.zhihualternative.questionservice;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

/**
 * smoke test: to verify if this app is running well
 */
@SpringBootTest
@AutoConfigureMockMvc
public class SmokeTest {
    @Autowired
    MockMvc mockMvc;

    @Test
    void should_return_ok_when_request_endpoint_of_health() throws Exception {
        mockMvc.perform(get("/actuator/health"))
            .andExpect(status().isOk())
            .andExpect(jsonPath("$.status").value("UP"));
    }
}

```


## git hooks support

create `githooks/pre-commit`

```sh
#!/usr/bin/env sh

# -q: quiet, -k: indexed, -u
git stash -qku
# exec test
./gradlew clean check
RESULT=$?
git stash pop -q
exit $RESULT


```

set the hook up : `git config core.hooksPath <githooks dir>`

## how to reduce the duration of test execution

If you feel like a shorter duration for test execution, try the following strategy

1. 测试代码中是否存在 block 线程的操作？这类操作会严重拖慢测试运行效率。
2. 对不同层的代码设计不同的测试策略，让每一层的测试尽可能的轻量（持久化层只注入于 Data JPA 相关的上下文；业务层测试可以 mock 持久化层的 bean，Web 层的测试可以 mock 业务层）。
3. 启用 gradle 并发运行任务。

如果还是觉得本地执行测试速度无法接受, 试着把单元测试执行后移到 CI 上，只允许通过测试的代码可以被集成（但这样会延长失败反馈周期）。