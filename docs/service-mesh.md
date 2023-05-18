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

部署之后的架构图类似这样: 服务分布于多个网格内, 每个网格包含一个服务 app, 一个 sidecar proxy, 应用服务之间通过 Sidecar Proxy 进行通信

主要的技术组件包括：

配置中心：通过 Kubernetes 的 ConfigMap 来管理。

服务发现：通过 Kubernetes 的 Service 来管理，

负载均衡：未注入边车代理时，依赖 KubeDNS 实现基础的负载均衡，一旦有了 Envoy 的支持，就可以配置丰富的代理规则和策略。

服务网关：依靠 Istio Ingress Gateway 来实现

服务容错：依靠 Envoy 来实现

认证授权：依靠 Istio 的安全机制来实现，实质上已经不再依赖 Spring Security 进行 ACL 控制，但 Spring Security OAuth 2 仍然以第三方 JWT 授权中心的角色存在，为系统提供终端用户认证，为服务网格提供令牌生成、公钥JWKS等支持。


# why

为什么需要 Service Mesh

最主要的理由来自于 Service Mesh 在提供微服务框架功能的同时，它是一个独立运行在应用服务之外的模块。这带来的好处就是应用服务不再需要为接入微服务框架而在代码和配置中添加繁多的依赖库和依赖配置项，实现了微服务框架和应用服务之间的解耦

# how



