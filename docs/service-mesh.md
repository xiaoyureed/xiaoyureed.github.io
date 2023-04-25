---
title: service mesh 服务网格
tags: [service mesh]
date: 2019-10-22
toc_min_heading_level: 2
toc_max_heading_level: 5
---

https://servicemesh.gitbooks.io/awesome-servicemesh/content/

Linkerd

大项目直接 k8s+istio

<!--more-->

# what

服务网格是一个用于处理服务间通信的基础设施层，它负责为构建复杂的云原生应用传递可靠的网络请求

部署之后的架构图类似这样: 服务分布于多个网格内, 每个网格包含一个服务 app, 一个 sidecar proxy, 应用服务之间通过 Sidecar Proxy 进行通信

# why

为什么需要 Service Mesh

最主要的理由来自于 Service Mesh 在提供微服务框架功能的同时，它是一个独立运行在应用服务之外的模块。这带来的好处就是应用服务不再需要为接入微服务框架而在代码和配置中添加繁多的依赖库和依赖配置项，实现了微服务框架和应用服务之间的解耦

# how



