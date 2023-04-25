---
title: SaaS Intro
tags: [saas]
date: 2020-05-04 22:27:26
toc_min_heading_level: 2
toc_max_heading_level: 5
---

https://github.com/it2025/saasbook 中国saas 名册

https://www.bilibili.com/video/av331556528?from=search&seid=3887781934183614121&spm_id_from=333.337.0.0
https://www.bilibili.com/video/av849281825?from=search&seid=3887781934183614121&spm_id_from=333.337.0.0


https://github.com/zuihou/lamp-cloud
https://github.com/chillzhuang/SpringBlade
TODO


https://github.com/ripienaar/free-for-dev
https://github.com/forter/security-101-for-saas-startups
https://github.com/Atarity/deploy-your-own-saas
https://github.com/255kb/stack-on-a-budget
https://zhuanlan.zhihu.com/p/67082434



https://book.douban.com/subject/35488676/
https://book.douban.com/subject/35079444/
https://book.douban.com/subject/3290016/


<!-- more -->

<!-- TOC -->

- [1. saas](#1-saas)
  - [1.1. 概念](#11-%E6%A6%82%E5%BF%B5)
  - [1.2. 设计](#12-%E8%AE%BE%E8%AE%A1)
    - [1.2.1. 数据隔离方案](#121-%E6%95%B0%E6%8D%AE%E9%9A%94%E7%A6%BB%E6%96%B9%E6%A1%88)
  - [1.3. springboot 动态数据源切换实现 saas](#13-springboot-%E5%8A%A8%E6%80%81%E6%95%B0%E6%8D%AE%E6%BA%90%E5%88%87%E6%8D%A2%E5%AE%9E%E7%8E%B0-saas)
- [2. paas](#2-paas)
- [3. iaas](#3-iaas)

<!-- /TOC -->

# saas

## 概念

software as a service

一种通过 Internet 提供软件的模式，厂商将应用软件统一部署在自己的服务器上，客户可以根据自己实际需求，通过互联网向厂商定购所需的应用软件服务，按定购的服务多少和时间长短向厂商支付费用

related roles:

- saas service provider
- tenant: the company that have purchased the service, 每个租户的数据隔离, 系统独立
- user: employee of tenant

## 设计

### 数据隔离方案

- 独立 db for every single tanent,
  安全性最好, 数据恢复最容易，但成本较高
- 共享 db, 但每个 tanent 一个 schema,
  数据恢复比较困难，因为恢复数据库将牵涉到其他租户的数据 如果需要跨租户统计数据，存在一定困难
- 租户共享同一个数据库、同一个 Schema, 表中增加 TenantID 多租户的数据字段;
  维护和购置成本最低, 数据备份和恢复最困难，需要逐表逐条备份和还原

## springboot 动态数据源切换实现 saas

# paas

platform as a service 

构建在 iaas 之上, 除了提供基础计算机资源, 还提供软件 application 的开发组件 (如  数据库云服务) 和运行环境

# iaas

infrastructure as a service 基础架构即服务

将计算机硬件资源打包, 通过 api 的方式提供给用户使用, 用户无需再自己租用机房, 无需自己维护服务器