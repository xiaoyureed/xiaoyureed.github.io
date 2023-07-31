---
title: Best Practice for Spring Boot Working with Docker
date: 2023-1-2
tags: [spring, docker]
authors: me
keywords: [spring, docker]
---

This article I will talking about How to package spring boot app into a docker image , and how to optimize the size of the image.

<!-- truncate -->

- [a basic example](#a-basic-example)
- [get a better image layer](#get-a-better-image-layer)
- [modularize the project](#modularize-the-project)
- [multi-stage build](#multi-stage-build)
- [try to make the native image](#try-to-make-the-native-image)
- [reference materials](#reference-materials)


## a basic example

First of all, let's take a look at the simplest dockerfile 

```dockerfile
# 最好是选择jre和slim后缀的基础镜像，它同时对linux和JDK做裁剪，能最小化镜像的体积而不影响java程序的运行性能
# for java8 we can try openjdk:8-jre-alpine
FROM openjdk:11-jre-slim

WORKDIR /app

ARG JAR_FILE=./target/*.jar
COPY ${JAR_FILE} app.jar

ENTRYPOINT [ "java", "-jar", "/app/app.jar" ]

```

But there are several weaknesses:

- the container will be started by this user by default: root, there are potential safety risk
- the jar file is too fat, which means the image layer is not been handling well, each time we change the code, the image build time may be too long
- the basic image is too huge (try to use the jre instead of the jdk)

## get a better image layer


https://github.com/wagoodman/dive

```dockerfile

FROM eclipse-temurin:17-jre-jammy as builder
ARG JAR_FILE=target/*.jar
WORKDIR application
COPY ${JAR_FILE} application.jar
RUN java -Djarmode=layertools -jar application.jar extract

################

FROM eclipse-temurin:17-jre-jammy
MAINTAINER xiaoyureed <rainx000@qq.com>
WORKDIR /application
COPY --from=builder application/dependencies/ ./
COPY --from=builder application/spring-boot-loader/ ./
COPY --from=builder application/snapshot-dependencies/ ./
COPY --from=builder application/application/ ./

ENV JVM_OPTS="-Xmx256m -Xms256m" \
    HALO_WORK_DIR="/root/.halo2" \
    SPRING_CONFIG_LOCATION="optional:classpath:/;optional:file:/root/.halo2/" \
    TZ=Asia/Shanghai

RUN ln -sf /usr/share/zoneinfo/$TZ /etc/localtime \
    && echo $TZ > /etc/timezone 

EXPOSE 8080
ENTRYPOINT ["sh", "-c", "java ${JVM_OPTS} -Djava.security.egd=file:/dev/./urandom org.springframework.boot.loader.JarLauncher ${0} ${@}"]

```

## modularize the project

https://sergiomartinrubio.com/articles/build-a-docker-jre-image-with-java-17-and-spring/

Making your project modularized is a great way to reduce the final docker images size

> Another way to conduct this action (modularization) is by using [JLink](https://openjdk.org/projects/jigsaw/quick-start#linker)

## multi-stage build



## try to make the native image

The image size can reduce greatly by using native image, and the other aspects such as the time taken to start, the memory occupied.... Generally speaking, there are so many benefits.

## reference materials

https://github.com/halo-dev/halo  can be taken as a best practice

https://snyk.io/blog/best-practices-to-build-java-containers-with-docker/
https://blog.monosoul.dev/2022/04/25/reduce-java-docker-image-size/

https://mritd.com/2022/11/08/java-containerization-guide/ tips for java docker image

https://hub.docker.com/_/eclipse-temurin/tags?page=1&name=17 the jdk17 base image.

https://zhuanlan.zhihu.com/p/245645260 tips, which base image we should choose

https://github.com/GoogleContainerTools/jib maven plugin produced by google to generate docker image.
