---
title: RPC Intro
tags: [rpc, outline]
date: 2018-03-10 22:27:26
toc_min_heading_level: 2
toc_max_heading_level: 5
---

<!--more-->

<!-- TOC -->

- [1. rpc是什么](#1-rpc%E6%98%AF%E4%BB%80%E4%B9%88)
- [2. 为什么需要rpc](#2-%E4%B8%BA%E4%BB%80%E4%B9%88%E9%9C%80%E8%A6%81rpc)
- [3. RPC 和 REST对比](#3-rpc-%E5%92%8C-rest%E5%AF%B9%E6%AF%94)
  - [3.1. 区别](#31-%E5%8C%BA%E5%88%AB)
  - [3.2. rpc分类](#32-rpc%E5%88%86%E7%B1%BB)
  - [3.3. webservice关注点](#33-webservice%E5%85%B3%E6%B3%A8%E7%82%B9)
- [4. 实现一个简单的rpc框架](#4-%E5%AE%9E%E7%8E%B0%E4%B8%80%E4%B8%AA%E7%AE%80%E5%8D%95%E7%9A%84rpc%E6%A1%86%E6%9E%B6)
- [5. 有哪些开源方案可供选择](#5-%E6%9C%89%E5%93%AA%E4%BA%9B%E5%BC%80%E6%BA%90%E6%96%B9%E6%A1%88%E5%8F%AF%E4%BE%9B%E9%80%89%E6%8B%A9)
  - [5.1. thrift](#51-thrift)
  - [5.2. protocol buffers](#52-protocol-buffers)
  - [5.3. grpc](#53-grpc)
  - [5.4. dubbo](#54-dubbo)
  - [5.5. hessian](#55-hessian)

<!-- /TOC -->

# rpc是什么

https://www.zhihu.com/question/25536695/answer/36197244

# 为什么需要rpc

https://www.zhihu.com/question/41609070/answer/191965937





# RPC 和 REST对比

https://www.zhihu.com/question/28570307

## 区别

分布式调用大体上就分为两类，RPC式的，REST式的，两者的区别：  

RPC强调方法的调用, 强调动作，REST强调对资源的操作, 强调资源

> 这意味着, 如果以动词为中心, 当你要需要加入新功能时,你必须要添加更多的动词, 这时候服务器端需要实现 相应的动词(方法), 客户端需要知道这个新的动词并进行调用.
> 如果以资源为中心, 假使我请求的是 hostname/friends/, 无论这个URI对应的服务怎么变化,客户端是无需 关注和更新的,而这种变化对客户端也是透明的.

rest基于http实现;
rpc可以有多种实现方式， 可以基于http实现, 基于tcp实现(但是由于 HTTP 报头较为冗长，性能较差，基于 TCP 协议的 RPC 可以建立长连接，速度和效率明显，但是难度和复杂程度很高。)

## rpc分类 

* 从通信协议层面可以分为：

    * 基于 HTTP 协议的 RPC；

    * 基于二进制协议的 RPC；

    * 基于 TCP 协议的 RPC。

* 从是否跨平台可分为：

    * 单语言 RPC，如 RMI, Remoting；(rmi远程方法调用, rmi和rpc区别: 调用方式不同, 适用语言范围不同, 结果放回形式不同)

    * 跨平台 RPC，如 google protobuffer, restful json，http XML。

* 从调用过程来看，可以分为同步通信RPC和异步通信RPC：

    * 同步 RPC：指的是客户端发起调用后，必须等待调用执行完成并返回结果；

    * 异步 RPC：指客户方调用后不关心执行结果返回，如果客户端需要结果，可用通过提供异步 callback 回调获取返回信息。大部分 RPC 框架都同时支持这两种方式的调用

## webservice关注点

两者均属于webservice技术, webservice的主要关注点有四个  

1. 采用什么传输协议，TCP, HTTP

    根据第一点来看，RPC阵营如下
    * Web Service采用HTTP协议做传输层协议，采用SOAP做应用层协议
    * XML-RPC，采用HTTP协议做传输层协议，使用自定义XML做应用层协议
    * JMI, Thrift, Protobuf等都使用TCP做传输协议，使用自定义应用层协议

    REST直接使用HTTP做应用层协议，使用URL表示资源，使用HTTP动词表示动作

2. 采用什么序列化协议，比如基于文本的XML（自定义XML，或者SOAP），基于二进制流（Java序列化，或者自定义序列化协议，比如Thrift, Protobuf, JBoss Marshalling）

    * Web Service和XML-RPC采用基于文本的XML进行序列化
    * RMI基于Java序列化协议
    * Thrfit, Protobuf等采用了基于二进制流的序列化协议，比如就是采用消息头消息体的方式传输，通过消息头来定义长度，从而保证能够正确读写数据


3. 采用什么IO形式，阻塞IO，非阻塞同步IO(select / poll / epoll)，非阻塞异步IO（http://blog.csdn.net/iter_zc/article/details/39291647）

4. 采用什么方式运行，运行在HTTP服务器上，还是以单独进程运行

    Web Service和REST都运行在HTTP服务器上，Thrift这样的都是以单独进程运行

# 实现一个简单的rpc框架

https://zhuanlan.zhihu.com/p/36528189 //todo

# 有哪些开源方案可供选择

dubbo, Hessian

grpc, thrift

## thrift

支持的语言多

提供 rpc 所有功能 , 包括序列化, 传输, 并发处理

## protocol buffers

谷歌出品, 只支持 Java cpp Python

专注于 序列化反序列化, 没有其他功能

## grpc

## dubbo


## hessian

采用的是二进制RPC协议，因为采用的是二进制协议，所以它很适合于发送二进制数据

https://blog.csdn.net/qiaziliping/article/details/81069265


