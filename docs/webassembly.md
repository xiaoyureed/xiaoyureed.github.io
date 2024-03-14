---
title: webassembly wasm
tags: [webassembly]
date: 2021-04-28 15:31:40
toc_min_heading_level: 2
toc_max_heading_level: 5
---

https://www.wasm.com.cn/

https://cloud.tencent.com/developer/article/1905813?from=article.detail.1196581 使用 go, wasm 场景
TODO

<!--truncate-->

## what is wasm

### wasm in the browser

将其他语言移植到浏览器中的编译工具

asm.js 与 WebAssembly 功能基本一致，就是转出来的代码不一样：asm.js 是文本，WebAssembly 是二进制字节码，因此运行速度更快、体积更小。从长远来看，WebAssembly 的前景更光明

大多数程序员会选择使用C语言来编写WebAssembly模块，并将其编译成.wasm文件。这些.wasm文件并不能直接被浏览器识别，所以它们需要一种称为JavaScript胶接代码来加载

WebAssembly结合日渐成熟的WebGL技术，使得大型的游戏等应用迁移到浏览器将逐渐成为可能

### wasm on the server side

```sh

wasm 被用于服务器端运行时, 定位:
    - Bare Metal 裸机
    - Virtual Machine 虚拟机: Hypervisor VM / microVM (Github action 就是基于这层做的), 如 VMWare虚拟机, 能直接和硬件交互 (这一层模拟了一个计算)
    - application container, 如 docker (这层模拟了一个操作系统)
    - High level language VM , 如 JVM, ruby/Python runtime, V8 (模拟一个进程)  -------------- Wasm 位于这层


rust + wasm 类似 java + jvm

webassembly system interface (wasi)    类比于  JNI (java native interface)
    jni: java 由于运行在 jvm, 有很多操作系统底层的能力 access 不了, 需要 通过 jni


wasm 在服务端提供什么价值?
    - runtime 隔离 (这个类似 docker)
    - 轻量级, 性能高 (远胜于 docker), 特别适合 serverless function, 也就是运行需要频繁启动运行结束的服务
    - 可移植 (这个做的比 docker 更彻底, docker image 还区分了 arm / x86)
    - 部署容易


wasm 可以被 docker, k8s 管理



wasm 使用场景:
    - 在边缘云节点上运行服务执行计算任务
    - 用在边缘设备((一般是资源受限设备))
        - Android application 的高性能扩展
        - 容器化 IoT 和 RT 应用程序 (比如汽车, 丰田TOYOTA 尝试在 汽车中使用 docker, 因为要和汽车本身系统进行隔离, 失败)
    - SaaS扩展: 上传代码以定制自己的 SaaS扩展 , 类似 serverless function
        比如 Github 每天会产生很多 notification, 用户就会收到无数邮件通知, 用户不希望这些 notification 无差别被发送过来, 用户会想对这些notification 进行定制, 用自己的逻辑来处理分类, 如有些 email 直接 ignore, 有些直接给我打电话, 有些给我发送到 slack/飞书里去

        传统做法是: 用户自己启动一个 callback server, Github 要发 notification 时候, 先给callback server 发, callback server 根据用户自定的逻辑告诉 Github 下一步怎么处理这个 notification, 这样 Github 就能知道下一步吧这个消息分发到哪去
        (弊端: 速度慢, 每个 notification 都需要传递一次 callback server, 其次肯定还要 auth)

        Github 解法: 让用户把自定义逻辑传到 Github action, 这样就不需要自己启 callback server
            但是 github action 是基于 VM 做的, 甚至都不是 docker, 是一个非常重的东西, 频繁启动关闭, 资源极大浪费
            更好的做法是可以用 wasm 来做 (嵌入式函数), 当然可能 Github 选择用 vm 来做, 有别的考虑, 比如Github action 需要执行不同代码编译, 测试等等任务, 用 wasm 可能有限制

        再比如: shopify 的例子: https://news.ycombinator.com/item?id=25476605 影响挺大的
            官方出的使用教程: https://www.shopify.com/partners/blog/shopify-functions-apis


https://github.com/second-state/microservice-rust-mysql
https://github.com/second-state/MEGA

```

## why wasm

## how to use wasm
