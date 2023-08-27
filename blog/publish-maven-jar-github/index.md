---
title: How to Publish Your Maven Package with Github
date: 2023-03-22
tags: [maven, github, jar]
keywords: [maven, github, jar]
authors: me
---

there are three ways available to publish your packages

## github package registry

Github provide 500M free space for every account

First of all, publish your package: Add the following config to your package pom which to be published to github

```xml
<distributionManagement>
        <repository>
            <id>github</id>
            <name>GitHub OWNER Apache Maven Packages</name>
            <url>https://maven.pkg.github.com/{account}/maven-repository</url>
        </repository>
    </distributionManagement>

```

then `mvn deploy`, check https://github.com/{account}/maven-repository/packages/ to find your package


So now, we can try to use the packge

add the token (applied from github) and repo address to our pom file

```xml
<activeProfiles>
    <activeProfile>github</activeProfile>
  </activeProfiles>

  <profiles>
    <profile>
      <id>github</id>
      <repositories>
        <repository>
          <id>central</id>
          <url>https://repo1.maven.org/maven2</url>
        </repository>
        <repository>
          <id>github</id>
          <url>https://maven.pkg.github.com/{account}/maven-repository</url>
          <snapshots>
            <enabled>true</enabled>
          </snapshots>
        </repository>
      </repositories>
    </profile>
  </profiles>

  <servers>
    <server>
      <id>github</id>
      <username>{xxx}</username>
      <password>TOKEN</password>
    </server>
  </servers>

```

## github repository

Apply a token from github and give it `user.email` permission

add the following config to maven config file:

```xml
<servers>
    <server>
      <id>github</id>
      <username>{xxx}</username>
      <password>TOKEN</password>
    </server>
  </servers>

```

then add this configs to pom file of the package to be publish to github

```xml
<properties>
        <github.global.server>github</github.global.server>
</properties>
<!--1.作用：将jar deploy(发布)到本地储存库位置(altDeploymentRepository)-->
<plugin>
    <artifactId>maven-deploy-plugin</artifactId>
    <configuration>
        <altDeploymentRepository>internal.repo::default::file://${project.build.directory}/mvn-repo
        </altDeploymentRepository>
    </configuration>
</plugin>
<!--2.作用：将本地存储库位置的jar文件发布到github上-->
<plugin>
    <groupId>com.github.github</groupId>
    <artifactId>site-maven-plugin</artifactId>
    <version>0.12</version>
    <configuration>
        <message>Maven artifacts for ${project.version}</message>
        <noJekyll>true</noJekyll>
        <!--本地jar相关文件地址，与上方配置储存库位置(altDeploymentRepository)保持一致-->
        <outputDirectory>${project.build.directory}/mvn-repo</outputDirectory>
        <!--配置上传到github哪个分支，此处配置格式必须以refs/heads/+分支名称-->
        <branch>refs/heads/main</branch>
        <merge>true</merge>
        <includes>
            <include>**/*</include>
        </includes>
        <!--对应github上创建的仓库名称 name-->
        <repositoryName>maven-repository</repositoryName>
        <!--github 仓库所有者即登录用户名-->
        <repositoryOwner>xxx</repositoryOwner>
    </configuration>
    <executions>
        <execution>
            <goals>
                <goal>site</goal>
            </goals>
            <phase>deploy</phase>
        </execution>
    </executions>
</plugin>

```

now just need `mvn clean deploy`

and we can use the package in this way:

```xml
<dependencies>
        <dependency>
            xxxxx
        </dependency>
    </dependencies>
    <repositories>
        <repository>
            <id>github</id>
            <!-- 格式是 https://raw.githubusercontent.com/[github 用户名]/[github 仓库名]/[分支名]/repository -->
            <url>https://raw.githubusercontent.com/trumandu/maven-repository/main/repository</url>
            <snapshots>
                <enabled>true</enabled>
                <updatePolicy>always</updatePolicy>
            </snapshots>
        </repository>
</repositories>

```

## maven central repo

### the normal way

https://blog.csdn.net/icansoicrazy/article/details/126391095
https://www.cnblogs.com/strongmore/p/17435714.html

### We can use github actions to automate this publish process

https://juejin.cn/post/7102428103196016671
