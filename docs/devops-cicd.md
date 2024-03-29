---
title: DevOps cicd
tags: [ansible, devops, cicd]
date: 2023-04-22
toc_min_heading_level: 2
toc_max_heading_level: 5
draft: true
---

https://docs.ansible.com/
http://www.ansible.com.cn/
https://www.cnblogs.com/keerya/p/7987886.html
https://baijiahao.baidu.com/s?id=1673800420241002267&wfr=spider&for=pc








https://github.com/in28minutes/devops-master-class

https://github.com/MichaelCade/90DaysOfDevOps



<!-- more -->


- [1. gitlab ci](#1-gitlab-ci)
    - [1.1. brief Intro](#11-brief-intro)
    - [1.2. 配置文件语法](#12-配置文件语法)
        - [1.3. 设置触发条件](#13-设置触发条件)
        - [1.3.1. 定义单个job](#131-定义单个job)
        - [1.3.2. 多个 stage 多个 job](#132-多个-stage-多个-job)
        - [1.3.3. 使用 Maven](#133-使用-maven)
        - [1.3.4. 定义变量](#134-定义变量)
        - [1.3.5. 文件上传部署](#135-文件上传部署)
        - [1.3.6. 缓存](#136-缓存)
        - [1.3.7. 启动 jar 包](#137-启动-jar-包)
        - [1.3.8. 使用 docker](#138-使用-docker)
- [2. github actions](#2-github-actions)
- [3. Jenkins](#3-jenkins)
- [4. travis-ci](#4-travis-ci)
- [5. Gitea+Drone](#5-giteadrone)
- [产品发布策略](#产品发布策略)


## 1. gitlab ci

### 1.1. brief Intro

> 轻量级, 简单(在 项目root 编写 gitlab-ci.yml 即可)

> https://juejin.cn/post/7064906701941506061


```

Gitlab runner
    .gitlab-ci.yml 文件内容的执行者，.gitlab-ci.yml 告诉了Gitlab runner去做什么。
    使用公共的runner，或者自己创建一个runner
    可以安装在目标物理机/docker 上

```

### 1.2. 配置文件语法

https://juejin.cn/post/7064906701941506061

> 有固定名字: .gitlab-ci.yml



#### 1.3. 设置触发条件

```yml
myjob:
#   执行时机
  only:
    - master
# except 不执行时机

# 以上写法等同于
myjob:
  only:
    variables:
    # $CI_COMMIT_REF_NAME是一个gitlab的预设变量，代表当前commit给哪个branch上了
    - $CI_COMMIT_REF_NAME == "master"




build-job:
  stage: build
  script:
    - mvn clean package -Dmaven.test.skip=true
    - docker build -t 10.11.2.51:5201/${IMAGE_NAME} .
  tags:
    - $TAGS
  rules:
    # 触发条件: 当前 commit 包含一个 tag 或者 当前 commit 在develop 分支上
    - if: $CI_COMMIT_TAG != null || $CI_COMMIT_REF_NAME == 'develop'


```



#### 1.3.1. 定义单个job

```yml
# 这个my_job的任务名是可以自定义起的
my_job:
  only:
    - master    
  tags:
    - yehanli
# scripts need to be executed within this job
  script:
    - echo 'job ========= 完成'
    - cd xxx
    - echo 'sfsf'
  stage: build
  retry: 2
```

#### 1.3.2. 多个 stage 多个 job

> 一个 stage 失败, 后续 stage 都不会执行

> 同个 stage 下的多个 job并行执行, 任一 job 失败, 则整个 stage 失败

> 如果没有自定义stages，那么默认的stages为.pre => build => test => deploy => .post



```yml

# 定义执行的各个阶段及顺序
stages:
    - build
    - package
    - deploy



build-job:
  stage: build
  script:
    - echo "Hello, $GITLAB_USER_LOGIN!"

test-job1:
  stage: test
  script:
    - echo "This job tests something"
  retry:
    max: 2
    # 可设置在特定失败原因的情况下执行
    when: runner_system_failure

test-job2:
  stage: test
  script:
    - echo "This job tests something, but takes more time than test-job1."
    - echo "After the echo commands complete, it runs the sleep command for 20 seconds"
    - echo "which simulates a test that runs 20 seconds longer than test-job1"
    - sleep 20

deploy-prod:
  stage: deploy
  script:
    - echo "This job deploys something from the $CI_COMMIT_BRANCH branch."
  environment: production
```

#### 1.3.3. 使用 Maven

```yml
# 使用 maven 镜像打包项目
maven-build:
  stage: build
  image: maven:3.5.0-jdk-8
  script:
    - mvn package -B -Dmaven.test.skip=true
  cache:
    key: m2-repo
    paths:
      - .m2/repository
  artifacts:
    paths: 
      - target/$jar_name
```

#### 1.3.4. 定义变量

```yml
# 定义一些变量, 下面各阶段会使用
variables:
  server_ip: 192.168.56.12
  jar_name: demo-0.0.1-SNAPSHOT.jar
  java_path: /usr/local/java1.8/bin
  upload_path: /usr/local/gitlab-project

job1:
  variables:
    TEST_VAR_JOB: "Only job1 can use this variable's value"
  script:
    - echo "$TEST_VAR"
```

#### 1.3.5. 文件上传部署

```yml
# 上传生成的 jar 包到你的应用服务器，这里使用 ictu/sshpass 这个镜像，是为了使用 sshpass 命令
upload-jar:
  stage: upload
  image: ictu/sshpass
  script: 
    - ls -l target/
    - sshpass -p $ssh_password scp -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no target/$jar_name root@$server_ip:$upload_path/$jar_name

```

#### 1.3.6. 缓存

```yml
# 缓存多个流水线任务之间共用的文件，目录
cache:
  key: cache-node-modules
  # 在这里写出需要缓存的文件的路径，在此为node_modules
  paths:
    - node_modules
```


#### 1.3.7. 启动 jar 包

```yml
# 启动 SpringBoot jar包
deploy-test:
  stage: deploy
  image: ictu/sshpass
  script:
    - sshpass -p $ssh_password ssh -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no root@$server_ip "nohup $java_path/java -jar $upload_path/$jar_name >/dev/null 2>&1 &"
```

#### 1.3.8. 使用 docker

```yml
# CI流水线运行环境的docker镜像
image: xxx

services:
    - docker:18-dind

# 定义执行的各个阶段及顺序
stages:
    - build
    - package
    - deploy

build:
    image: maven:3.5.2-jdk-8-alpine
    stage: build
    script: "mvn package -B"
    artifacts:
        paths:
            - target/*.jar

package:
    stage: package
    script:
        - docker build -t registry.gitlab.com/<<USERNAME>>/<<APP NAME>> .
        - docker login -u gitlab-ci-token -p $CI_BUILD_TOKEN registry.gitlab.com
        - docker push registry.gitlab.com/<<USERNAME>>/<<APP NAME>>

deploy_staging:
    stage: deploy
    # 在所有的流水线任务执行之前需要执行的脚本
    before_script:
        - docker login -u gitlab-ci-token -p $CI_BUILD_TOKEN $CI_REGISTRY
        - mkdir -p ~/.ssh
        # Paste the PRIVATE key into a gitlab variable. Pay attention to the linebreak at the end when pasting
        - echo "$PRODUCTION_SERVER_PASSWORD" | tr -d '\r' > ~/.ssh/id_rsa
        - chmod 600 ~/.ssh/id_rsa
        - eval "$(ssh-agent -s)"
        - ssh-add ~/.ssh/id_rsa
        - ssh-keyscan -H $STAGING_SERVER >> ~/.ssh/known_hosts
    script:
        - apk upgrade && apk update
        - apk add openssh-client
        - ssh $STAGING_SERVER_USER@$STAGING_SERVER docker login -u gitlab-ci-token -p $CI_BUILD_TOKEN registry.gitlab.com
        - ssh $STAGING_SERVER_USER@$STAGING_SERVER docker pull registry.gitlab.com/canarin/parkey
        - ssh $STAGING_SERVER_USER@$STAGING_SERVER "docker container stop <<APP NAME>> && docker container rm <<APP NAME>> || true"
        - ssh $STAGING_SERVER_USER@$STAGING_SERVER docker run --name <<APP NAME>> -p 80:80 -d registry.gitlab.com/<<USERNAME>>/<<APP NAME>>
    environment:
        name: production
        url: <<URL/IP>>
    only:
        - master
```


## 2. github actions

## 3. Jenkins

Jenkins - 老牌 ci 工具, 插件多(比如编译情况统计..)

https://wiki.eryajf.net/pages/2415.html



## 4. travis-ci 

- 持续集成的 PasS 服务. 和 Github 强关联, 闭源代码使用 SaaS 还需考虑安全问题, 不可定制, 企业使用收费

## 5. Gitea+Drone    

Drone 是基于Docker的CI/CD工具

https://blog.ops-coffee.cn/s/gatfwneto_agsjhzdv5yzq 中小团队基于Docker的devops实践


## 产品发布策略

```sh
蓝绿发布 (Blue-Green Deployment)

  通过部署两套环境来解决新老版本的发布问题。
  
    项目逻辑上分为AB组, 首先把A组从负载均衡中摘除，进行新版本的部署。B组仍然继续提供服务。当A组升级完毕，负载均衡重新接入A组，再把B组从负载列表中摘除，进行新版本的部署。

  pros:

    发布策略简单; 升级/回滚速度快。

  cons:

    浪费资源, 需要准备正常业务使用资源的两倍以上服务器




金丝雀发布( Canary Release ) 也叫灰度发布 , 滚动发布( Rolling Release )

  通过切换线上并存版本之间的路由权重，逐步从一个版本切换为另一个版本的过程。

    服务的替换是用流量这个维度来做替换的而不是节点这个维度。

  pros:

    不增加机器的情况下流量的平滑过渡

    灵活，策略自定义，可以按照流量或具体的内容进行灰度(比如不同账号，不同参数)

  cons:

    自动化要求高。







A/B测试

```
