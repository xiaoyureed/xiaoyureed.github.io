---
title: netty
tags: [netty, nio]
date: 2018-07-19
toc_min_heading_level: 2
toc_max_heading_level: 5
---

<div align="center">
一片教程: https://waylau.gitbooks.io/essential-netty-in-action ; 
官网: https://netty.io/index.html; 
一些demo: https://github.com/xuwujing/Netty-study; 
源码分析: https://github.com/yongshun/learn_netty_source_code
zhihu上的一个通俗介绍值得一看: https://www.zhihu.com/question/24322387

https://github.com/gupaoedu-tom/netty4-samples


netty
⬇
vertx
⬇
kotlin-
⬇
quarkus
⬇------------------------⬇--------------------⬇---------------------⬇-------------------⬇
(接受各种 Monad)------(拒绝各种 monad)-----------注重性能---------------注重云原生--------------缝合怪
⬇------------------------⬇--------------------⬇---------------------⬇-------------------⬇
haskell--------------clojure----------------rust--------------------go----------------.net/F#
⬇-----------------------⬇
范畴论---------------scheme/racket

</div>

<!--more-->

<!-- TOC -->

- [1. netty是什么](#1-netty%E6%98%AF%E4%BB%80%E4%B9%88)
    - [1.1. 定义](#11-%E5%AE%9A%E4%B9%89)
    - [1.2. 传统http服务器原理](#12-%E4%BC%A0%E7%BB%9Fhttp%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%8E%9F%E7%90%86)
    - [1.3. 为什么需要netty](#13-%E4%B8%BA%E4%BB%80%E4%B9%88%E9%9C%80%E8%A6%81netty)
- [2. 架构](#2-%E6%9E%B6%E6%9E%84)
    - [2.1. selector](#21-selector)
    - [2.2. channel](#22-channel)
    - [2.3. callback 即周期函数](#23-callback-%E5%8D%B3%E5%91%A8%E6%9C%9F%E5%87%BD%E6%95%B0)
    - [2.4. Future](#24-future)
    - [2.5. Event 和 Handler](#25-event-%E5%92%8C-handler)
- [3. 自定义协议解决沾包问题](#3-%E8%87%AA%E5%AE%9A%E4%B9%89%E5%8D%8F%E8%AE%AE%E8%A7%A3%E5%86%B3%E6%B2%BE%E5%8C%85%E9%97%AE%E9%A2%98)
- [4. 实现心跳机制](#4-%E5%AE%9E%E7%8E%B0%E5%BF%83%E8%B7%B3%E6%9C%BA%E5%88%B6)
- [5. netty 整合 springboot 开发 web 服务](#5-netty-%E6%95%B4%E5%90%88-springboot-%E5%BC%80%E5%8F%91-web-%E6%9C%8D%E5%8A%A1)
- [6. 即时通讯系统](#6-%E5%8D%B3%E6%97%B6%E9%80%9A%E8%AE%AF%E7%B3%BB%E7%BB%9F)

<!-- /TOC -->

# netty是什么

## 定义

https://www.zhihu.com/question/24322387

- 本质是 JBoss 做的一个Jar包(对 java nio 的封装), 处理 socket 很方便
- 可快速开发高性能、高可靠性的网络服务器和客户端程序
- 异步、事件驱动, 使用 reactor  模式
- 同类事物是 mina , 可以参考这里: https://mina.apache.org/mina-project/quick-start-guide.html


## 传统http服务器原理

传统的多线程服务器: (高并发下, 会创建大量线程 -> 改进: nio )

1. 创建一个ServerSocket，监听并绑定一个端口
1. 一系列客户端来请求这个端口
1. 服务器使用Accept，获得一个来自客户端的Socket连接对象
1. 启动一个新线程处理连接
    1. 读Socket，得到字节流
    1. 解码协议，得到Http请求对象
    1. 处理Http请求，得到一个结果，封装成一个HttpResponse对象
    1. 编码协议，将结果序列化字节流
    1. 写Socket，将字节流发给客户端
1. 继续循环步骤3

HTTP服务器之所以称为HTTP服务器，是因为编码解码协议是HTTP协议

使用Netty你就可以定制编解码协议，实现自己的特定协议的服务器

然后, 还有一个 "伪异步IO的模式", Server端使用了线程池而已,将客户端的socket封装成一个task任务，这样client并发多的时候，就会通过等待来执行，不会让线程一下子起的太多

传统的模式是BIO模式，是同步阻塞的, thread 一旦太多, 机器就 crash  了

## 为什么需要netty

使用传统的 http 服务器 (使用 http 协议), 有时不好拓展, 例如 传递文件, Email, 实时数据(游戏), 就不灵了, 使用 netty 可以定制自己的专用协议, 实现专用服务器程序



# 架构

- Bootstrap 和 ServerBootstrap
- Channel - Netty 中的接口 Channel 定义了与 socket 丰富交互的操作集：bind, close, config, connect, isActive, isOpen, isWritable, read, write 等等
- ChannelHandler - 业务逻辑在这里, 用来处理 i/o 事件
- ChannelPipeline
- EventLoop - EventLoop 用于处理 Channel 的 I/O 操作
- ChannelFuture - Netty 所有的 I/O 操作都是异步。因为一个操作可能无法立即返回，我们需要有一种方法在以后确定它的结果。出于这个目的，Netty 提供了接口 ChannelFuture,它的 addListener 方法注册了一个 ChannelFutureListener ，当操作完成时，可以被通知（不管成功与否）

## selector

多路复用


线程明显少多了

## channel

代表了一个用于连接到实体如硬件设备、文件、网络套接字或程序组件,能够执行一个或多个不同的 I/O 操作（例如读或写）的开放连接。

可以“打开”或“关闭”

## callback 即周期函数

Netty 内部使用回调 (周期函数 ) 处理事件。一旦这样的回调被触发，事件可以由接口 ChannelHandler 的实现来处理。如下面的代码，一旦一个新的连接建立了,调用 channelActive(),并将打印一条消息

```java
public class ConnectHandler extends ChannelInboundHandlerAdapter {
  // 当建立一个新的连接时调用 ChannelActive()
    @Override
    public void channelActive(ChannelHandlerContext ctx) throws Exception {   //1
        System.out.println(
                "Client " + ctx.channel().remoteAddress() + " connected");
    }
}

```

## Future

Future 提供了另外一种通知应用操作已经完成的方式。这个对象作为一个异步操作结果的占位符,它将在将来的某个时候完成并提供结果。

JDK 附带接口 java.util.concurrent.Future , 但是需要手动检查操作是否完成或阻塞了. 所以 Netty 提供自己了的实现,ChannelFuture,用于在执行异步操作时使用

回调方法 operationComplete() 会在操作完成时调用。事件监听者能够确认这个操作是否成功或者是错误

```java
//不会阻塞
ChannelFuture future = channel.connect(            //1
        new InetSocketAddress("192.168.0.1", 25));
future.addListener(new ChannelFutureListener() {//2 操作完成后通知注册一个 ChannelFutureListener

    @Override
    public void operationComplete(ChannelFuture future) {
        if (future.isSuccess()) {                    //3检查操作的状态。
            ByteBuf buffer = Unpooled.copiedBuffer(
                    "Hello", Charset.defaultCharset()); //4 创建一个 ByteBuf 来保存数据
            ChannelFuture wf = future.channel().writeAndFlush(buffer);   //5异步发送数据到远程。再次返回ChannelFuture
            // ...
        } else {
            Throwable cause = future.cause();        //6有一个错误则抛出 Throwable,描述错误原因
            cause.printStackTrace();
        }
    }
});
```

## Event 和 Handler

Netty 使用不同的事件来通知我们更改的状态或操作的状态。这使我们能够根据发生的事件触发适当的行为。

Netty 的 ChannelHandler 是各种处理程序的基本抽象。想象下，每个处理器实例就是一个回调，用于执行对各种事件的响应。


# 自定义协议解决沾包问题

沾包: 一般所谓的TCP粘包是在一次接收数据不能完全地体现一个完整的消息数据

为何存在粘包呢？TCP 是一个面向字节流的协议，它是性质是流式的，所以它并没有分段。就像水流一样，你没法知道什么时候开始，什么时候结束, 所以他只会根据当前的套接字缓冲区的情况进行拆包或是粘包, 这就有可能造成这种现象:

- 多个业务报文粘接为一个 tcp 报文j接收
- 一个业务报文分拆为了多个 tcp 报文

解决方法:

- 消息定长，报文大小固定长度，不够空格补全，发送和接收方遵循相同的约定，这样即使粘包了通过接收方编程实现获取定长报文也能区分, netty 内置 FixedLengthFrameDecoder可指定长度解决
- 包尾添加特殊分隔符，例如每条报文结束都添加回车换行符（例如FTP协议）或者指定特殊字符作为报文分隔符，接收方通过特殊分隔符切分报文区分, netty 内置 LineBasedFrameDecoder 可以基于换行符解决, 内置 DelimiterBasedFrameDecoder可基于分隔符解决。
- 将消息分为消息头和消息体，消息头中包含表示信息的总长度（或者消息体长度）的字段


自定义协议, 说白了就是定义自己的 消息 pojo, 序列化, 反序列化器,可以使用 Google Protocol, jackson


# 实现心跳机制

使用TCP协议层的Keeplive机制，但是该机制默认的心跳时间是2小时，依赖操作系统实现不够灵活；可以在应用层实现自定义心跳机制，比如Netty实现心跳机制；


# netty 整合 springboot 开发 web 服务

https://github.com/farsunset/netty-http-server

https://github.com/Leibnizhu/spring-boot-starter-netty //todo

https://github.com/TogetherOS/cicada web 框架

# 即时通讯系统

https://github.com/crossoverJie/cim
https://github.com/sunnick/easy-im/blob/master/README.md, https://juejin.im/post/6844903793440587784