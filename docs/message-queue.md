---
title: Message Queue🌈
tags:
  - mq
date: 2019-04-13 19:23:02
toc_min_heading_level: 2
toc_max_heading_level: 5
---

<div align="center">
https://www.zhihu.com/question/43557507
https://www.jianshu.com/p/79ca08116d57
消息队列（Message Queue）是一种应用间的通信方式, 是一种应用间的异步协作机制
rabbitmq：https://www.rabbitmq.com

https://blog.csdn.net/jiaowo_ccc/article/details/93893715 usage scenario
</div>

<!--more-->

- [1. 总结](#1-总结)
- [2. mq 是什么](#2-mq-是什么)
- [3. 为什么使用mq-优缺点](#3-为什么使用mq-优缺点)
    - [3.1. 带来的好处](#31-带来的好处)
    - [3.2. 引入mq带来的问题-怎么解决](#32-引入mq带来的问题-怎么解决)
        - [3.2.1. 解决高可用问题](#321-解决高可用问题)
        - [3.2.2. 解决消息传递可靠性](#322-解决消息传递可靠性)
            - [3.2.2.1. 如何防止重复消费](#3221-如何防止重复消费)
            - [3.2.2.2. 如何防止消息丢失](#3222-如何防止消息丢失)
            - [3.2.2.3. 如何保证消息顺序](#3223-如何保证消息顺序)
            - [3.2.2.4. 如何防止消息的大量积压](#3224-如何防止消息的大量积压)
            - [3.2.2.5. 如何防止消息过期失效](#3225-如何防止消息过期失效)
            - [3.2.2.6. 如何保证分布式最终一致性](#3226-如何保证分布式最终一致性)
- [4. 有哪些产品可供选择-选型](#4-有哪些产品可供选择-选型)
- [5. RabbitMQ](#5-rabbitmq)
    - [5.1. AMQP协议](#51-amqp协议)
        - [5.1.1. 概念](#511-概念)
        - [5.1.2. 工作过程](#512-工作过程)
        - [5.1.3. 消息确认](#513-消息确认)
    - [5.2. 基本介绍](#52-基本介绍)
    - [5.3. 几种消息模型](#53-几种消息模型)
        - [5.3.1. hello-world](#531-hello-world)
        - [5.3.2. worker-queue](#532-worker-queue)
        - [5.3.3. 发布订阅](#533-发布订阅)
        - [5.3.4. rpc](#534-rpc)
    - [5.4. 使用 rabbit](#54-使用-rabbit)
        - [5.4.1. 消息的序列化](#541-消息的序列化)
        - [5.4.2. 发送](#542-发送)
        - [5.4.3. 接收](#543-接收)
        - [5.4.4. 持久化](#544-持久化)
        - [5.4.5. 消息确认机制-手动确认-回调](#545-消息确认机制-手动确认-回调)
            - [5.4.5.1. 消息发送确认](#5451-消息发送确认)
            - [5.4.5.2. 消息消费确认](#5452-消息消费确认)
        - [5.4.6. 使用 amqpAdmin 集中配置 rabbitmq](#546-使用-amqpadmin-集中配置-rabbitmq)
- [6. kafka](#6-kafka)
    - [6.1. kafka 基本概念](#61-kafka-基本概念)
        - [6.1.1. 逻辑架构](#611-逻辑架构)
        - [6.1.2. 物理架构](#612-物理架构)
        - [6.1.3. 写入消息工作流程](#613-写入消息工作流程)
        - [6.1.4. 消费消息的原理](#614-消费消息的原理)
        - [6.1.5. partition 分区选择原则逻辑](#615-partition-分区选择原则逻辑)
        - [6.1.6. kafka 消息有序性](#616-kafka-消息有序性)
        - [6.1.7. kafka 为什么快](#617-kafka-为什么快)
        - [6.1.8. kafka 如何保证消息可靠性](#618-kafka-如何保证消息可靠性)
        - [6.1.9. 如何保证不重复消费](#619-如何保证不重复消费)
        - [6.1.10. 如何保证不遗漏消费 消息丢失](#6110-如何保证不遗漏消费-消息丢失)
        - [6.1.11. 推or拉](#6111-推or拉)
        - [6.1.12. 两种模型 基于队列 基于发布订阅](#6112-两种模型-基于队列-基于发布订阅)
    - [6.2. 为什么使用 kafka](#62-为什么使用-kafka)
        - [6.2.1. kafka使用场景](#621-kafka使用场景)
        - [6.2.2. 和 redis 消息队列的区别](#622-和-redis-消息队列的区别)
    - [6.3. 如何使用kafka](#63-如何使用kafka)
        - [6.3.1. kafka 原生配置](#631-kafka-原生配置)
        - [6.3.2. 在 springboot 中使用 kafka](#632-在-springboot-中使用-kafka)
        - [6.3.3. 创建主题](#633-创建主题)
        - [6.3.4. 生产者发送](#634-生产者发送)
            - [6.3.4.1. kafka template 同步 异步](#6341-kafka-template-同步-异步)
            - [6.3.4.2. 生产者配置](#6342-生产者配置)
            - [6.3.4.3. 生产者事务消息](#6343-生产者事务消息)
        - [6.3.5. 消费者消费](#635-消费者消费)
            - [6.3.5.1. 配置 过滤器 全局异常处理](#6351-配置-过滤器-全局异常处理)
            - [6.3.5.2. 监听消费](#6352-监听消费)
                - [6.3.5.2.1. @kafkaListener基本使用](#63521-kafkalistener基本使用)
                - [6.3.5.2.2. 消费指定分区](#63522-消费指定分区)
                - [6.3.5.2.3. 动态开启关闭监听](#63523-动态开启关闭监听)
                - [6.3.5.2.4. 禁用自启动](#63524-禁用自启动)
                - [6.3.5.2.5. 定时启停监听器](#63525-定时启停监听器)
            - [6.3.5.3. 消费者错误处理 单消息 批量消息](#6353-消费者错误处理-单消息-批量消息)
            - [6.3.5.4. offset 提交](#6354-offset-提交)
            - [6.3.5.5. 消息序列化](#6355-消息序列化)
            - [6.3.5.6. 自定义代替默认线程池](#6356-自定义代替默认线程池)
            - [6.3.5.7. 消费者组 多线程消费](#6357-消费者组-多线程消费)
            - [6.3.5.8. 消息转发](#6358-消息转发)
        - [6.3.6. 总结:消息送达的情况](#636-总结消息送达的情况)
    - [6.4. 参数调优](#64-参数调优)
    - [开源生态](#开源生态)
- [7. 即时通讯 MQTT协议](#7-即时通讯-mqtt协议)


# 1. 总结

```java
场景: 解耦, 削峰限流(放置打垮应用), 异步(提前返回)
模型: producer, consumer, queue(exchange, queue)
    exchange type: fanout, direct, topic, headers
        topic: *号, #号
    binding: 绑定exchange和queue, 设置 bingdingKey,发送数据时需要同时发送bindingKey
特性: 消息确认(msg ack), 持久化, 公平发布(fair dispatch)
    msg ack: 每个consumer 消费完消息, 会发送一个回执给 rabbit, rabbit然后才能删除队列中的消息, 否则 rabbit 会尝试发送这个消息给其他 consumer
    持久化: 
    轮询机制
带来的问题: 额外的组件引入复杂性; 暂时的不一致性(最终会一致)

```

# 2. mq 是什么

消息队列：在分布式系统中传递数据

涉及三个概念 -- producer，consumer，mq中间件；

# 3. 为什么使用mq-优缺点

使用的大前提: 生产者不需要从消费者处获得反馈/容许短暂的不一致性, 其实就是容许异步

## 3.1. 带来的好处

- 系统解耦

  上游系统将数据发送到 mq, 下游系统无论有多少个, 只需要订阅自己感兴趣的主题即可.

  案例: 系统a的数据需要主动发送给下游系统b消费, 那么a 直接调用b的接口就好了, 现在需求更改: 又有系统c, d需要这个数据 (也就是一个 producer 有多个 consumer), 那么系统a需要修改, 加入调用c, d 接口的代码; 现在引入  mq, 上有系统a发送数据到 mq, 下游系统bcd需要数据, 直接订阅感兴趣的 topic 即可.

- 异步调用 (提早返回)

  一个请求过来，会执行一系列动作，如果这些操作都是没有返回结果的那么可以直接都放入消息队列执行,请求立刻返回
  
  如果这些动作可以中间一切分为两类，一类是有返回结果，二类是没有返回结果，引入mq后，一类操作执行完直接返回， 二类操作进入mq中慢慢执行，这样整个请求速度就加快了；
  
  比如：外卖订单的例子，执行链条中可分为两部分，一是创建订单，通知饭店接单（执行完直接返回）， 二是找到骑手（耗时操作，放到mq中执行）；

- 承载激增的大流量, 慢慢消化 (流量错峰)

  系统的请求不均匀，流量高的时候，请求先进入mq，在流量低时慢慢消化处理 ，用有限的机器承载高并发请求


## 3.2. 引入mq带来的问题-怎么解决


### 3.2.1. 解决高可用问题

引入 mq, 会造成整个系统 `可用性不好` （因为 mq 中间件服务器可能会挂）

那么怎么做高可用?

- 做集群 -  以rabbitmq为例, 集群有两种模式 

  署多个rabbitmq节点,消息数据只存在于一个节点,但是元数据存在于每个节点, 消费者如果连接到一个空节点,这个节点会根据元数据到queue所在节点同步queue数据; 实际上,还是没法保证高可用,因为queue数据还是只存在于一个节点, 这样做只是提高了吞吐量

  镜像集群模式(可以保证高可用,没法保证可拓展): 集群中的每个节点都有queue数据, 写消息时会自动把消息同步到每个节点; 怎么开启:RabbitMQ 有很好的管理控制台，就是在后台新增一个策略，这个策略是镜像集群模式的策略，指定的时候是可以要求数据同步到所有节点的，也可以要求同步到指定数量的节点

- 使用分布式消息队列 Kafka 

  Kafka 一个最基本的架构认识：由多个 broker 组成，每个 broker 是一个节点；创建一个 topic，这个 topic 可以划分为多个 partition，每个 partition 可以存在于不同的 broker 上，每个 partition 就放一部分数据。

  Kafka 0.8 以后，提供了 HA (高可用)机制, 每个 partition 的数据都会同步到其它机器上，形成自己的多个 replica 副本。所有 replica 会选举一个 leader 出来(一个挂掉了在选举一个)，那么生产和消费都跟这个 leader 打交道，然后其他 replica 就是 follower。
  
  写的时候，leader 会负责把数据同步到所有 follower 上去(一旦所有 follower 同步好数据了，就会发送 ack 给 leader，leader 收到所有 follower 的 ack 之后，就会返回写成功的消息给生产者)，读的时候就直接读 leader 上的数据即可
  
  (只能读写leader, 要是你可以随意读写每个 follower, 就有数据一致性问题), 只有当一个消息已经被所有 follower 都同步成功返回 ack 的时候，这个消息才会被消费者读到。


### 3.2.2. 解决消息传递可靠性

消息`可靠性不好` （消息丢失，消息重复/幂等性， 大量消息积压, 消息过期失效, 怎么保证消息顺序性）

#### 3.2.2.1. 如何防止重复消费

- 什么时候出现: 

  - 为了确保消息被成功消费, 开启 "手动确认", 如果消息已被成功处理，但在消息确认过程中出现问题，那么在消费端重启后，消息会重新被消费。

  - 发送端为了保证消息会成功投递，一般会设定重试。如果消息发送至RabbitMQ之后，在RabbitMQ回复已成功接收消息过程中出现异常，那么发送端会重新发送该消息，从而造成消息重复发送

  - Kafka消息重复的表现: Kafka 实际上有个 offset 的概念，就是每个消息写进去，都有一个 offset，代表消息的序号，然后 consumer 消费了数据之后，每隔一段时间（定时定期），会把自己消费过的消息的 offset 提交一下(此时消息可能还没有正式开始处理)，表示“我已经消费过了，下次我要是重启啥的，你就让我继续从上次消费到的 offset 来继续消费吧”; --- 如果消费端突然崩掉, 此时还没有将已经消费的消息的offset提交, 重启后就会重复消费消息

- 怎么解决呢,需要根据具体业务来看: (防止消息重复/保证幂等性 - 消息重复不可怕, 重要的是要保证消息处理的幂等性)

  - 比如你拿个数据要写库，你先根据主键查一下，如果这数据都有了，你就别插入了，update 一下

  - 比如你是写 Redis，那没问题了，反正每次都是 set，天然幂等性。

  - 生产者发送每条数据的时候，里面加一个全局唯一的 id, 消费到了之后，先根据这个 id 去比如 Redis 里查一下，如果没查到, 证明没有消费过，处理，然后这个 id 写 Redis。如果消费过了，就别处理了

#### 3.2.2.2. 如何防止消息丢失

防止消息丢失 - 消息可能在三个点丢失 -- 消费者,mq,生产者 ;  RabbitMQ 和 Kafka 的机制不同

- 对于rabbitmq:

  - 生产者将数据发送到 RabbitMQ 的时候，可能数据就在半路给搞丢了

    - 利用事务(同步模式的,吞吐量下降,不好用) - 发送数据之前,开启 RabbitMQ 事务channel.txSelect, 如果消息没有成功被 RabbitMQ 接收到，那么生产者会收到异常报错，此时就可以回滚事务channel.txRollback,如果收到了消息，那么可以提交事务channel.txCommit

    - 通过 开启 confirm 模式(异步模式的, 不会阻塞) - 如果写入了 RabbitMQ 中，RabbitMQ 会给你回传一个 ack 消息，告诉你说这个消息 ok 了。如果 RabbitMQ 没能处理这个消息，会回调你的一个 nack 接口，告诉你这个消息接收失败，你可以重试

  - rabbitmq弄丢消息 - 开启 RabbitMQ 的持久化. 
  
    第一步,创建 queue 的时候将其设置为持久化,这样就可以保证 RabbitMQ 持久化 queue 的元数据，但是它是不会持久化 queue 里的数据的。
    
    第二个是发送消息的时候将消息的 deliveryMode 设置为 2 ,就是将消息设置为持久化的，此时 RabbitMQ 就会将消息持久化到磁盘上去

  - 消费者弄丢消息 - RabbitMQ 提供的 ack 机制, 必须关闭 RabbitMQ 的自动 ack, 然后每次你自己代码里确保处理完的时候，再在程序里 ack一下, 如果消费者没有处理完就挂了,rabbitmq没有收到ack,会将这个消息发送给其他消费者处理;

- 对于Kafka:

  - 消费端丢失消息 - 正常来说, kafka是每隔一段实践就提交一次offset, 如果消费端接收到消息还没处理, 碰到kafka刚好自动提交了offset, 处理消息时消费端挂掉了,就造成了消息丢失; 这和 rabbitmq的消费端(ack机制)类似; 此时只要关闭offset, 处理完手动提交offset

  - kafka弄丢消息
  
    - 某个broker挂了, 然后回重新选举 partition 的 leader,要是此时其他broker中的 follower 刚好还有些数据没有同步, 然后选举某个 follower 成 leader 之后,数据就丢失了

    - 如何解决呢: (保证在 leader 所在 broker 发生故障，进行 leader 切换时，数据不会丢失。)

      - 给 topic 设置 replication.factor 参数：这个值必须大于 1，要求每个 partition 必须有至少 2 个副本
      - 在 Kafka 服务端设置 min.insync.replicas 参数：这个值必须大于 1，这个是要求一个 leader 至少感知到有至少一个 follower 还跟自己保持联系，没掉队，这样才能确保 leader 挂了还有一个 follower 吧
      

  - 生产者丢失数据 

    - 设置 `acks=all`, 和 `retries=MAX`后就可以保证没有数据丢失了;
      - 在 producer 端设置 acks=all：这个是要求每条数据，必须是写入所有 replica 之后，才能认为是写成功了。
      - 在 producer 端设置 retries=MAX（很大很大很大的一个值，无限次重试的意思）：这个是要求一旦写入失败，就无限重试，卡在这里了。
    - 不要使用 send(xxx, xxx), 而是使用 send(xxx, xxx, callback), 在 callback 里处理发送失败的后的补偿措施


#### 3.2.2.3. 如何保证消息顺序

保证消息顺序性, 没有顺序会造成什么问题? 

比如两个数据库通过 binglog 同步数据, binglog 中有增加,修改,删除三个操作, 如果消费者读取的顺序变了,同步数据就错了; rabbit和kafka机制不同分开来说

- 对于 rabbitmq:

  问题: 一个queue, 多个consumer, msg1,msg2,msg3 顺序进入queue, 结果某个消费者先得到msg2, 那么顺序就变了;

  解决方法1: rabbit中将一个 queue, 替换为多个 queue, 每个consumer对应一个queue, 一组有序的消息一起被发送到一个queue, 被同一个consumer消费; 
  
  方法2: 或者只有一个queue, 和一个consumer, 在consumer内部维护内存队列做排队, 分发给不同的worker处理;

- 对于Kafka

    方法:  对某个 topic 设置 N 个partition，进来的数据根据 key 对 N 取余数, 具有相同 余数的的数据都到同一 partition, 而 partition 内部是有序的,这样就能保证顺序性

#### 3.2.2.4. 如何防止消息的大量积压

消息大量积压的问题: consumer出现问题, 不消费了; -- 临时紧急扩容消息队列

- 先修复consumer的问题, 这是肯定要做了, 然后将所有的consumer停止;
- 新建容量更大的消息队列, 写一个临时的分发数据的consumer, 将消息转入到大容量的队列中
- 然后将修复好的consumer部署到10倍数量的机器上, 启动, 消费临时队列中的消息(相当于将queue资源, consumer资源都临时扩大了)
- 等消费完积压的消息后, 恢复原先的queue和consumer架构;

#### 3.2.2.5. 如何防止消息过期失效

消息过期失效 - 比如 rabbitmq 中可以设置消息过期时间, 积压过了这个时间, 消息回直接丢失; 怎么解决: 重新导入, 在半夜流量小的时候, 写临时程序, 在消费者中将丢失的消息查出来,重新发送到queue中(比如在订单服务中查找丢失的1000个订单, 重新导入到queue中给库存服务消费;)

#### 3.2.2.6. 如何保证分布式最终一致性

分布式最终一致性问题 (正常来说mq会保证最终一致性,但是如果生产者系统处理成功直接返回成功, 某个消费者系统出现异常,最终数据一致性就无法保证 -- 需要引入分布式事务)


# 4. 有哪些产品可供选择-选型

ActiveMQ, RabbitMQ，RocketMQ，Kafka，Redis

选择哪个好呢

- ActiveMQ - Java实现，出现的最早，性能没有后来的mq好；用的较少;

- RabbitMQ - erlang实现，性能好， 后台管理界面；社区活跃；

  - 包含组件: rabbit-mq server, 

  - 高可用方案采用的是 "集群镜像"功能, 并不是分布式, 每个节点保存全量数据, 无法无线拓展

- rocket - 可以说是kafka的变种, java版本实现, 阿里开源; rocket和kafka有类似无限堆积的能力；支持分布式事务

  - 组件: name server, broker

  - 高可用: name-server cluster is used to save the meta data, 只要有一台 name-server 存活就可用

- redis:  常常用于缓存，消息队列不是主要功能

  - redis 消息推送（基于分布式 pub/sub）多用于实时性较高的消息推送，并不保证可靠; 其他的mq和kafka保证可靠但有一些延迟

  - redis 发布订阅除了表示不同的 topic 外，并不支持分组

- Kafka - 真正的分布式消息队列，主要用于日志采集，实时数据计算（spark streaming，storm一起用）

  - kafka中发布一个东西，多个订阅者可以分组，同一个组里只有一个订阅者会收到该消息，这样可以用作负载均衡

  - 实时log分析, 应付大并发

- Pulsar - 

  - 组件: zookeeper, book-keeper, broker

# 5. RabbitMQ

## 5.1. AMQP协议

### 5.1.1. 概念

https://blog.yoodb.com/yoodb/article/detail/1347

AMQP（高级消息队列协议）是一个网络协议。它支持符合要求的客户端应用（application）和消息中间件代理（messaging middleware broker）之间进行通信。

- Server: 中间件本体, 接收 client 连接

- virtual host: 一个 virtual host 表示一个交换器、消息队列的集合. 

  权限控制的最小粒度是Virtual Host

  每个 vhost 本质上就是一个 mini 版的 RabbitMQ 服务器，拥有自己的队列、交换器、绑定和权限机制

  连接时必须指定, RabbitMQ 默认的 vhost 是 / 

- Exchange: 接受生产者发送的消息，并根据Binding规则将消息路由给服务器中的队列。 就是一个路由表

  ExchangeType决定了Exchange路由消息的行为，例如，在RabbitMQ中，ExchangeType有direct、Fanout和Topic三种，不同类型的Exchange路由的行为是不一样的

- Binding: 用于 Exchange与Message Queue 的关联

  Exchange在与多个Message Queue发生Binding后会生成一张路由表，路由表中存储着Message Queue所需消息的限制条件即Binding Key。当Exchange收到Message时会解析其Header得到Routing Key，Exchange根据Routing Key与Exchange Type将Message路由到Message Queue。Binding Key由Consumer在Binding Exchange与Message Queue时指定，而Routing Key由Producer发送Message时指定，两者的匹配方式由Exchange Type决定

  Exchange 和Queue的绑定可以是多对多的关系


- Message Queue：消息队列，用于存储还未被消费者消费的消息

- broker 各种各样的 exchange 和 queue 合在一起成为 broker

- Message: 由Header和Body组成，

  Header是由生产者添加的各种属性的集合，包括Message是否被持久化、由哪个Message Queue接受、优先级是多少等。
  
  而Body是真正需要传输的APP数据

-Channel:信道，仅仅创建了客户端到Broker之间的连接后，客户端还是不能发送消息的。需要为每一个Connection创建Channel，AMQP协议规定只有通过Channel才能执行AMQP的命令。

  一个Connection可以包含多个Channel。因为对于操作系统来说建立和销毁 TCP 都是非常昂贵的开销，所以引入了信道的概念，以复用一条 TCP 连接。

### 5.1.2. 工作过程

消息（message）被发布者（publisher）发送给交换机（exchange）, 

然后交换机将收到的消息根据路由规则分发给绑定的队列（queue）。

最后AMQP代理会将消息投递给订阅了此队列的消费者，或者消费者按照需求自行获取

### 5.1.3. 消息确认

接收消息的应用也有可能在处理消息的时候失败。基于此原因，AMQP模块包含了一个消息确认（message acknowledgements）的概念：当一个消息从队列中投递给消费者后（consumer），消费者会通知一下消息代理（broker）

当“消息确认”被启用的时候，消息代理不会完全将消息从队列中删除，直到它收到来自消费者的确认回执（acknowledgement）


## 5.2. 基本介绍


由 Erlang 语言开发的 AMQP 的开源实现, 可集群, 有 ui 界面, 有插件机制

保证消息可靠: RabbitMQ 使用一些机制来保证可靠性

- msg ack `消息确认(message acknowledgement)`: 有多个消费者的情况下, 一个consumer处理消息时挂了, 这个消息没有 "消息确认" 发给 rabbitmq, 队列中的消息不会删除, 会尝试发送给另外的consumer处理

- 持久化:message, queue 持久化, 即使 rabbitmq 重启, 队列, 消息也不会丢失

- 公平发布: 一个consumer 同时只能接受一个消息, 发送给 rabbitmq 一个消息回执后才会被发送下一个消息, 避免了一个consumer特别忙碌, 一个consumer特别闲的问题


其他特性:

- 虚拟主机(vhost): 支持将一个 rabbit 实例划分成多个 虚拟实例, 分别给不同的系统用, 起到隔离的效果, 一个系统对应的虚拟主机崩了, 不影响剩下的虚拟主机

- 集群: 是镜像集群, 只能提高吞吐量, 无法保证可无限拓展


安装:

https://blog.csdn.net/qq_22638399/article/details/81704372

erlang 命令行退出：https://blog.csdn.net/cnxieyang/article/details/52710967

WSL 中有bug ， 坑爹货

docker + rabbitmq：https://www.jianshu.com/p/14ffe0f3db94


## 5.3. 几种消息模型

RabbitMQ提供了6种消息模型，但是第6种其实是RPC，并不是MQ; 3、4、5这三种都属于订阅模型，只不过进行路由的方式不同。

### 5.3.1. hello-world

```
+------------------+                                                                  +---------------------+
|                  |                                                                  |                     |
|                  |              +------+----+-----+-----+-----+-----+               |                     |
|                  |              |      |    |     |     |     |     |               |                     |
|    publisher     |              | queue|    |     |     |     |     |               |       consumer      |
|                  |              |      |    |     |     |     |     |               |                     |
|                  +---------->   |      |    |     |     |     |     +-------------->+                     |
|                  |              |      |    |     |     |     |     |               |                     |
|                  |              |      |    |     |     |     |     |               |                     |
|                  |              +------+----+-----+-----+-----+-----+               |                     |
|                  |                                                                  +---------------------+
+------------------+


```

### 5.3.2. worker-queue

让多个消费者绑定到一个队列，共同消费队列中的消息。队列中的消息一旦消
费，就会消失，因此消息不会重复消费

```
+--------------+         +------+----+-----+        +-------------+
|              |         |      |    |     |        |             |
               |         | queue|    |     |        | consumer    |
|   publisher  |         |      |    |     |        |             |
|              +----->   |      |    |     | -------+             |
|              |         |      |    |     |        +-------------+
|              |         |      |    |     |        +--------------+
+--------------+         +------+----+-+---+        |              |
                                       |            |    consumer  |
                                       +------------+              |
                                                    |              |
                                                    +--------------+


```

### 5.3.3. 发布订阅

可以分三类 (实际上对应了三种Exchange类型)




=================广播订阅: 对应 exchange type 为 fanout

- provider 向 exchange 发送消息

- exchange 将消息发送给所有 queue (消息被广播)

  exchange 和所有 queue 绑定

- consumer 从 queue 拿到消息 

  若 两个 consumer 从同一个 queue 拿去消息, 消息不会重复

  若两个 consumer 从不同 queue 拿消息, 会重复 (也就是消息被广播了)


```
                                        +------+
                                        |      |
                                        +------+       +---------+
                                        |      |       |         |
                            +-----------+      +-------+   consumer
                            |           +------+       |         |
+-------------+             |           |      |       +---------+
|             |     +-------+-+         +------+
|             +-----+exchange |
|    publisher|     |         |        +------+
|             |     +-------+-+        |      |
+-------------+             |          +------+      +------------+
                            +----------+      +------+            |
                     type: fanout      +------+      |  consumer  |
                                       +------+      |            |
                                                     +------------+

```


=======================路由订阅: exchange type 为 Direct

- provider 向 exchange 发送消息, 必须指定消息的routing key

- exchange 接收消息, 然后把消息递交给 与routing key完全匹配的队列

  queue 指定接收哪些 routing key

  如 某个消息 msg1 (routing key = xxx), msg2 (key = yyy), msg3 (key = zzz), queue1 (指定 routing key = xxx), queue2 (key = xxx, yyy), 那么 queue1 的consumer会接收到 msg1, queue2 的consumer 会接收到 msg1, msg2. 

- 各个 consumer 从 自己的queue拿去消息



=============================topic 主题订阅: exchange type = topic. 是路由订阅的升级版, routing key 支持通配符

- #：匹配一个或多个词 (注意不是字母)
- *：匹配不多不少恰好 1 个词


### 5.3.4. rpc



## 5.4. 使用 rabbit

springboot整合

引入 `spring-boot-starter-amqp` (符合 amqp 协议的实现都可以用)

### 5.4.1. 消息的序列化

RabbitMQ 的序列化是指 Message 的 body 属性，即我们真正需要传输的内容，

RabbitMQ 抽象出一个 MessageConvert 接口处理消息的序列化, 当调用了 convertAndSend 方法时会使用 MessageConvert 进行消息的序列化，其实现有 : 

- SimpleMessageConverter（默认）

  对于要发送的消息体 body 为 byte[] 时不进行处理，
  
  如果是 String 则转成字节数组,
  
  如果是 Java 对象，则使用 jdk 序列化将消息转成字节数组，转出来的结果较大，含class类名，类相应方法等信息。因此性能较差;此时就要考虑使用类似 Jackson2JsonMessageConverter 等序列化形式以此提高性能

- Jackson2JsonMessageConverter ;

要自定义需要如下配置:

```java
@Configuration
public class MyAMQPConfig {
    @Bean
    public MessageConverter messageConverter(){
          return new Jackson2JsonMessageConverter();
    }
}
```

或者:

```java
@Configuration
public class RabbitMQConfig {

    @Bean
    public RabbitListenerContainerFactory<?> rabbitListenerContainerFactory(ConnectionFactory connectionFactory){
        SimpleRabbitListenerContainerFactory factory = new SimpleRabbitListenerContainerFactory();
        factory.setConnectionFactory(connectionFactory);
        factory.setMessageConverter(new MessageConverter() {
            @Override
            public Message toMessage(Object object, MessageProperties messageProperties) throws MessageConversionException {
                return null;
            }

            @Override
            public Object fromMessage(Message message) throws MessageConversionException {
                try(ObjectInputStream ois = new ObjectInputStream(new ByteArrayInputStream(message.getBody()))){
                    return (User)ois.readObject();
                }catch (Exception e){
                    e.printStackTrace();
                    return null;
                }
            }
        });

        return factory;
    }

}
```

### 5.4.2. 发送

支持延迟消息, 单位毫秒

使用默认的 exchange

```java
// 需要注册一个 queue, 否则消息只会到 exchange, 不会存入 queue
@Configuration
public class RabbitConfig {
    @Bean
    public Queue queueHello() {
        return new Queue("hello_queue");
    }

}

// 然后使用:

@Autowired
private final AmqpTemplate template;

/**
* 发送到默认 exchange, 不会发送到 queue
*
*/
public void sendMessage(String msg) {
  // 注意MessageBuilder 不是带泛型的那个
    template.send(MessageBuilder.withBody(msg.getBytes(StandardCharsets.UTF_8)).build());

    // 可以使用 convertAndSend() 直接发送对象 
}

/**
发送到 默认 exchange, 然后转发到 queue (queue name  = hello_queue)

也就是说, 默认 exchange 不用 binding , 发送时, routing key 指定为 queue name 即可被 该 queue 收到
*/
public void send1(String msg) {
  // 自动转换为 Message 后发送
    this.template.convertAndSend("hello_queue", msg);
    System.out.println("sender: 发送了 " + msg);
}

public void sendWithTopic(String msg, String routingKey) {
  // 发送给指定的 exchange
    this.template.convertAndSend("exchange", routingKey, msg);
}
```

自己指定 exchange:

```java
@Configuration
public class TopicExchangeConfig {
    @Bean
    public Queue queue1() {
        return new Queue("queue_1");
    }

    @Bean
    public Queue queue2() {
        return new Queue("queue_2");  // 需要指定 name
    }

    @Bean
    public TopicExchange exchange() {
        return new TopicExchange("exchange");  // 需要指定 name
    }

    // binding exchange and queue with routing key
    @Bean
    public Binding bindingQueue1(Queue queue1, TopicExchange exchange) {
        return BindingBuilder.bind(queue1).to(exchange).with("topic.message");
    }

    @Bean
    public Binding bindingQueue2(Queue queue2, TopicExchange exchange) {
        return BindingBuilder.bind(queue2).to(exchange).with("topic.#");
    }
}

// 使用

/**
  * 带 exchange 和 routing key 发送
  */
public void sendWithTopic(String msg, String routingKey) {
    this.template.convertAndSend("exchange", routingKey, msg);
}
```

### 5.4.3. 接收

========================单独使用 @RabbitListener 注解来指定某方法作为消息消费的方法

```java
@Component
public class Receiver2 {
    @RabbitListener(queues = "queue_2")
    public void process(String msg) { // 接收参数也可以是对象, will auto deserialize
        System.out.println("receiver2: " + msg);
    }

    @RabbitListener(queues = {"hello_queue"})
    public void processHelloQueue(String msg) {
        System.out.println(">>> receive msg from hello_queue: " + msg);
    }
}
```

========================@RabbitListener 和 @RabbitHandler 搭配使用

(@RabbitListener 标注在类上面表示当有收到消息的时候，就交给 @RabbitHandler 的方法处理，具体使用哪个方法处理，根据 MessageConverter 转换后的参数类型)

此时需要有一个默认的处理方法 @RabbitHandler(isDefault=true)，默认是false。不设置一个true，消费mq消息的时候会出现“Listener method ‘no match’ threw exception”异常。

```java
// 为 consumer 指定 queue
// 监听
@Component
@RabbitListener(queues = "consumer_queue")
public class Receiver {

    @RabbitHandler
    public void processMessage1(String message) {
        System.out.println(message);
    }

    @RabbitHandler
    public void processMessage2(byte[] message) {
        System.out.println(new String(message));
    }
}
```

===============使用 使用 @Payload 和 @Headers 注解可以消息中的 body 与 headers 信息, 不使用的话默认方法参数就是 body

```java
@RabbitListener(queues = "debug")
public void processMessage1(@Payload String body, @Headers Map<String,Object> headers) {
    System.out.println("body："+body);
    System.out.println("Headers："+headers);
}

// 获取单个 header属性

@RabbitListener(queues = "debug")
public void processMessage1(@Payload String body, @Header String token) {
    System.out.println("body："+body);
    System.out.println("token："+token);
}
```


===========================甚至 可以在 consumer 端 通过 rabbitListener 设置 binding:

```java
@RabbitListener(bindings = @QueueBinding(
        exchange = @Exchange(value = "topic.exchange",durable = "true",type = "topic"),
        value = @Queue(value = "consumer_queue",durable = "true"),
        key = "key.#"
))
public void processMessage1(Message message) {
    System.out.println(message);
}
```

### 5.4.4. 持久化

为什么需要持久化? 中间件服务器异常重启, 数据会丢失

持久化会造成性能损耗。可以通过`设置消息过期时间`、`降低发送消息大小`等其他方式来尽可能的降低MQ性能的降低。

分为如下三个: (均可通过 构造函数的 durable 指定, 默认都是 true)

- queue 的持久化

  通过构造函数设置

- exchange 的持久化

  通过构造函数设置

- message 的持久化 (必须在 queue 的持久化基础上才有意义)

  底层就是 AMQP.BasicProperties的属性deliveryMode设置为2

  发送消息时, 通过消息后处理设置持久化`convertAndSend(.... , new MessagePostProcessor() {message.getMessageProperties().setDeliveryMode(MessageDeliveryMode.PERSISTENT);})`





都设置持久化之后就能保证数据不会被丢失吗？当然不是，多个方面:

- 在消费者端, 如果消息的自动确认为true，那么在消息被接收以后，RabbitMQ就会删除该消息，假如消费端此时宕机，那么消息就会丢失。

  因此需要将消息设置为手动确认。即消费完成后再发送确认

- 在rabbitmq服务端，如果消息正确被发送，但是rabbitmq未来得及持久化，没有将数据写入磁盘，服务异常而导致数据丢失，

  解决方案，可以通过rabbitmq集群的方式实现消息中间件的高可用性


### 5.4.5. 消息确认机制-手动确认-回调

确认机制有两种:

#### 5.4.5.1. 消息发送确认

分为两步

- 是否到达 exchange 的确认; 

  实现 RabbitTemplate.ConfirmCallBack接口，消息发送到交换器Exchange后触发回调 (实际是发送到 broker 出发回调, 而 broker 包含 exchange 和 queue, 所以可以认为 exchange 出发回调)

  为 rabbitTemplate 配置 @PostConstruct `rabbitTemplate.setConfirmCallback(new ConfirmCallBackHandler())`

  设置 `spring.rabbitmq.publisher-confirms = true`

- 是否到达 queue 的确认 (比如根据发送消息时指定的routingKey找不到队列时会触发)

  实现 RabbitTemplate.ReturnCallback 接口

  `abbitTemplate.setReturnCallback(new ReturnCallBackHandler());`

  `spring.rabbitmq.publisher-returns = true`


若没有 ack, 生产者这边业务这样控制: 比如生产者每次发消息之前先把消息保存到本地，如果收到ack就把这个消息给删除，没有收到就隔一段时间重试，最多重试个3次，还是没收到就把这个消息登记起来后续处理，不再发送了

```java
@configuration
class config {
  @autowired
  RabbitmqTemplate tt;


  @PostConstruct
  public void initRabbitTemplate() {
    //RabbitTemplate.ConfirmCallBack
    tt.setConfirmCallback(() -> {
      // ...
    })
  }
}
```


####  5.4.5.2. 消息消费确认

就是 消息是否被 consumer 消费

有三种模式: AcknowledgeMode.NONE/AUTO/MANUAL, 默认是 auto, consumer 接收到消息会自动确认, 不管消息是否完全被消费完成, broker 都会删除这条消息,任务消费完成了

`spring.rabbitmq.listener.simple.acknowledge-mode = manual` 手动确认

如果是自定义的监听容器, 配置 `SimpleRabbitListenerContainerFactory` 即可

消费者成功确认:

```java
@Component
@RabbitListener(queues = "confirm_queue_B")
public class Customer {
    @RabbitHandler
    public void process(Message message, Channel channel){
        System.out.println("ReceiverA："+new String(message.getBody()));
        // delivertag 就是一个数字, 在 channel 内每收到一条消息就自增
        // 参数 2: 是否批量确认消息; 一般为 false, 每条消息都分别签收确认
        channel.basicAck(message.getMessageProperties().getDeliveryTag(),true);
}

```

消费者失败确认:

```java
Component
@RabbitListener(queues = "confirm_queue_B")
public class Customer {
    @RabbitHandler
    public void processJsonMessage(@Payload String body, @Header(AmqpHeaders.DELIVERY_TAG) long deliveryTag, Message message,Channel channel){      
        System.out.println("ReceiverA："+new String(message.getBody()));
        // 参数 2: 是否批量拒绝
        // 参数 3: 是否重新加入 queue 等待消费
        channel.basicNack(deliveryTag,true,true);
}

// 还可以一次只拒绝一条消息
@Component
@RabbitListener(queues = "confirm_queue_B")
public class Customer {
     public void processJsonMessage(@Payload String body, @Header(AmqpHeaders.DELIVERY_TAG) long deliveryTag, Message message,Channel channel){  
        System.out.println("ReceiverA："+new String(message.getBody()));
        channel.basicReject(deliveryTag,true);
}

// channel.basicNack 与 channel.basicReject 的区别在于basicNack可以批量拒绝多条消息，而basicReject一次只能拒绝一条消息
```

消息手动拒绝中如果requeue为true会重新放入队列，但是如果消费者在处理过程中一直抛出异常，会导致入队-》拒绝-》入队的循环，该怎么处理呢？======== 先成功确认，然后通过**channel.basicPublish()**重新发布这个消息。重新发布的消息网上说会放到队列后面，进而不会影响已经进入队列的消息处理。

```java
@Component
@RabbitListener(queues = "confirm_queue_B")
public class AckTempalte {
    enum Action{
        ACCEPT, // 处理成功
        RETRY, // 可以重试的错误
        REJECT, // 无需重试的错误
    }
    @RabbitHandler
    public void processJsonUser(Message message, Channel channel){
        Action action=Action.ACCEPT;
        long tag=message.getMessageProperties().getDeliveryTag();
        try{
            System.out.println( message.getMessageProperties().getConsumerTag());
            String message1 = new String(message.getBody(), "UTF-8");
            System.out.println("获取消息'" + message1 + "'");

        }catch (Exception e){
            // 根据异常种类决定是ACCEPT、RETRY还是 REJECT
            action = Action.RETRY;
            e.printStackTrace();

        }finally {
            try {
                // 通过finally块来保证Ack/Nack会且只会执行一次
                if (action == Action.ACCEPT) {
                    channel.basicAck(tag, true);
                    
                }
                // 重试
                else if (action == Action.RETRY) {
                    channel.basicNack(tag, false, true);// 最后一个 true 表示 重新入 queue
                    Thread.sleep(2000L);
                } 
                // 拒绝消息也相当于主动删除mq队列的消息
                else {
                    channel.basicNack(tag, false, false);
                }
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }
}

```

### 5.4.6. 使用 amqpAdmin 集中配置 rabbitmq

# 6. kafka

https://github.com/redpanda-data/redpanda 代替 kafka

## 6.1. kafka 基本概念

https://www.bilibili.com/video/BV1jt4y1C7PZ?p=49

https://developer.confluent.io/learn/

分布式基于发布 / 订阅的消息系统消息中间件

推荐现在大家用Pulsar，相比 kafka，更加简洁更好用

适用于对消费次序或时间没有强一致性需要的场景

### 6.1.1. 逻辑架构

```

有这么几个概念:

- kafka cluster: 一台 or 多台 server 组成

  broker: 一台 Kafka 服务器就是一个 broker。一个集群由多个 broker 组成。一个broker可以容纳多个 topic, 集群中的每个 broker 都有一个不重复的编号

  topic 主题: 可以理解为消息分类, 是逻辑上的概念, 

    一个主题内的消息可能分布在多个分区, 在每个 broker 上可能新建多个 topic, 
  
    实际场景下, 一般是一个业务线建一个topic (producer 发送必须指定 topic); 
    
    若写入的 topic 不存在, kafka 会自动创建主题, partition 和 replication 数量均默认为 1

  partition 分区: 可看做存储消息的有序队列
  
    分区的作用是做负载 , 用来提高kafka的吞吐量。 分区的表现形式就是一个一个的文件夹, 里面存储这个分区所有的消息和索引文件 

    无论消息是否被消费，除非消息到期 Partition 从不删除消息, Partition 会为每个 Consumer Group 保存一个偏移量，记录 Group 消费到的位置

    对于同一个分区, 数据写入保存是有序的, 消息都会被追加到 Partition 数据文件的尾部, 磁盘效率很高 

    Offset: 消息位移,表示分区中每条消息的位置信息，是一个单调递增且不变的值

  replica 副本: 每个分区会有多个副本, 副本的作用是用来做备胎。 每当主分区(leader)故障就会选一个备胎(follower)上位。 默认备胎数是10个。  


    - Leader ：每个分区多个副本的“主”，生产者发送数据的对象，以及消费者消费数据的对象都是 Leader。

    - Follower ：每个分区多个副本中的“从”，实时从 Leader 中同步数据，保持和Leader 数据的同步。Leader 发生故障时，某个 Follower 会成为新的 Leader。

  


- producer : 链接broker, 把消息发送到某个分区

- consumer: 每个消费者都属于某一个消费者组

  对于某个分区的消息
  
    在某个 consumer group 中只能有一个 consumer 可以消费 (同个group 中的其他consumer 无法消费该分区)

    不同 consumer group 中的consumer 可消费同一个分区的消息

  Consumer Offset：消费者位移，表征消费者消费进度，每个消费者都有自己的消费者位移。



- ack 确认机制
    broker 表示发来的数据已确认接收无误，表示数据已经保存到磁盘。 
    
    0：不等待 broker 返回确认消息 , 确认返回效率最高，但不保证发送成功。安全性不好 效率最高
    1：等待 topic 中某个 partition leader 保存成功的状态反馈 , 只需要分区 leader 返回 ack, 就认为发送成功, 可以发送下一条. 只确保 leader 发送成功
    -1/all：等待 topic 中某个 partition 所有副本都保存成功的状态反馈 (分区的所有副本都完成备份), producer成功才认为消息发送成功。  安全性最好 效率最低

  在生产环境中， acks=0 很少使用；acks=1， 一般用于传输普通日志 ， 允许丢个别数据；acks=all，一般用于传输和钱相关的数据，对可靠性要求比较高的场景 。

- consumer group:  可以将多个消费者组成一个消费者组, 作为一个整体, 用一个标签标识。  
  
    (不在同一个Group 的Consumer能重复消费同一条消息（订阅模式），相同Group的Consumer存在消费竞争（不会消费同条数据, 即负载均衡）)

    对于同一个group而言，topic的每条消息只能被发送到group下的一个consumer实例上, topic消息可以被发送到多个group中

    可以通过增加消费组的消费者来进行水平扩展提升消费能力, 组中消费者的数量不应该比分区数多，因为多出来的消费者是空闲的 (所以创建主题时应该使用比较多的分区数)

    Kafka的订阅者是通过消费组（Consumer Group）来体现的，每个消费组都可以重复消费Topic一份完整的消息，不同消费组之间消费进度彼此不受影响。例如Message1能被Consumer Group 1和Consumer Group2里的消费者都消费一次。

    当消费者离开消费组（比如重启、宕机等）时，它所消费的分区会分配给其他分区。这种现象称为重平衡（rebalance）, 在重平衡期间，所有消费者都不能消费消息，因此会造成整个消费组短暂的不可用 (支持三种分配策略: https://zhuanlan.zhihu.com/p/418158376)




数据完全安全可靠性条件设置:

  ACK 级别设置为-1 + 分区副本大于等于2 + ISR 里应答的的最小副本数量大于等于2


```

### 6.1.2. 物理架构

partition 对应磁盘上的文件夹, 一个分区根据存储的消息数量, 会有多个文件夹, 文件夹包括三个文件:

```

0000000001.log    数据文件, 存储消息, 每条消息包括 (数据, offset编号, 物理地址)

0000000001.index  索引, 采用稀疏索引的方式, 记录 log 文件的索引

  log 文件每增加 4kb, 记录一条索引信息, 索引信息就是 offset编号 和 物理地址的映射

0000000001.timeindex  时间索引




```


### 6.1.3. 写入消息工作流程

```

工作流程:

1. 生产者从cluster中获取 partition leader 的信息。 生产者将消息发送给分区 leader。 
1. 分区 leader 将效关系写入磁盘
1. follower 从 leader 拉取消息数据, 写入磁盘, 向 leader 发送 ack 消息
1. leader 收到所有 follower 的 ack 后向生产者发送 ack, 表示写入成功
```

### 6.1.4. 消费消息的原理

稀疏索引 + 二分查找

consumer 的消费策略:

- earliest 从头开始消费
- latest 从当前位置开始消费
- none 从指定offset 开始消费, 若消费者没有提供 offset 则报错

### 6.1.5. partition 分区选择原则逻辑

```
若某个 topic 下有多个 partition, producer 如何决定往哪个 partition 写数据?

- producer 在写入时, 能指定partition, 若指定了, 这写入相应的 partition
- 若producer 没指定 partition, 但是设置了数据的 key, 则根据 key 会 hash 出一个 partition
- 若没有指定 partition, 也没有指定数据 key, kafka 会采用轮训的方式, 某一段时间, 所有数据会写入 partition1, 某一段时间, 数据会写入 partition2...
```

### 6.1.6. kafka 消息有序性

对于同个分区来说，它的消息是有序的, 不同 partition 就是无序的了

所以对于消息, 可以对 id 使用 partition num 取模得到 partition id

### 6.1.7. kafka 为什么快

异步批量处理: 例如生产者客户端，他会积累一定量（条数、大小）的消息，再批量的发给kafka broker

磁盘顺序读写: 每个partition 都是追加到尾部, 在表现在磁盘上就是顺序读写, 速度快

分段存储: 数据存储为多个文件, 加载快, 避免数据竞争

操作系统PageCache缓存数据

零拷贝加速消费

### 6.1.8. kafka 如何保证消息可靠性

即消息不丢失

生产者设置ack：

0：producer不等待broker的ack，broker一接收到还没有写入磁盘就已经返回，可靠性最低；
1：producer等待broker的ack，partition的leader刷盘成功后返回ack，如果在follower同步成功之前leader故障，那么将会丢失数据，可靠性中；
-1：producer等待broker的ack，partition的leader和follower全部落盘成功后才返回ack，数据一般不会丢失，延迟时间长但是可靠性高

消费者
设置enable.auto.commit=true，不管执行结果如何，消费者会自动提交offset。false，需要用户需要手动提交offset，可以根据执行结果具体处理offset

### 6.1.9. 如何保证不重复消费

```

重复消费原因: 

- 可能是选择了错误的消费模型, 点对点的模型中消费者不会重复消费, 发布订阅模型中, 多个消费者会重复消费消息
  
  解决: 所以可以采用点对点模型: 每个 partition 对应一个消费者线程, 或者 每个 partition 对应一个 consumer group

- 可能是 consumer 的 offset 没有配置, 采用了默认的自动提交

  比如 consumer 每隔 5s 自动提交一次 offset (加入此时 offset = 2), 但是某次提交完成后第 2s consumer 挂了 (此时 offset=4), 再次重启 consumer, 则 consumer 会从 offset=2 处开始消费, 造成重复消费

  解决: 

```


### 6.1.10. 如何保证不遗漏消费 消息丢失

```
消息遗漏消费是对于consumer 来说的, 一般是因为 : 如果消费端接收到消息还没处理, 碰到kafka刚好自动提交了offset, 处理消息时消费端挂掉了,就造成了消息丢失

  解决: 设置consumer手动提交 offset, 消息处理完了再手动提交 offset

    enable.auto.commit：表示消费者会周期性自动提交消费的offset。默认值true。
    auto.commit.interval.ms：在enable.auto.commit为true的情况下， 自动提交的间隔。默认值5秒

  解决: 引入消息去重机制 (例如：生成消息时，在消息中加入唯一标识符如消息id, 在消费端，可以保存最近的max.poll.records条消息id到redis或mysql表中，这样在消费消息时先通过查询去重后，再进行消息的处理)

此外消息还可能

  在 broker 中丢失: 如, 某个 broker 挂了, 此时会选举新 leader, 如果某个 follower 倍选举为 leader 但是它还有些数据没有同步, 就消息丢失了

    解决: 本质是要保证卡夫卡高可用 (为每隔分区设置多个副本)

      - 给 topic 设置 replication.factor 参数：这个值必须大于 1，要求每个 partition 必须有至少 2 个副本

      - 在 Kafka 服务端设置 min.insync.replicas 参数：这个值必须大于 1，这个是要求一个 leader 至少感知到有至少一个 follower 还跟自己保持联系，没掉队，这样才能确保 leader 挂了还有一个 follower 

  在 producer 中丢失

    - 设置 `acks=all`, 和 `retries=MAX`后就可以保证没有数据丢失了;
      - 在 producer 端设置 acks=all：这个是要求每条数据，必须是写入所有 replica 之后，才能认为是写成功了。
      - 在 producer 端设置 retries=MAX（很大很大很大的一个值，无限次重试的意思）：这个是要求一旦写入失败，就无限重试，卡在这里了。
    - 不要使用 send(xxx, xxx), 而是使用 send(xxx, xxx, callback), 在 callback 里处理发送失败的后的补偿措施

```


### 6.1.11. 推or拉

消费者如何消费消息? 采用 pull 还是 push?

kafka 使用 pull (主动拉) 的方式, (没有采用 push 的方式, 是因为如果 broker push 消息的速度太快, consumer 可能跟不上)
(pull 缺点: 如果卡夫卡没有数据, consumer 就会陷入空转)

### 6.1.12. 两种模型 基于队列 基于发布订阅

Kafka同时支持基于队列和基于发布/订阅的两种消息引擎模型，事实上Kafka是通过consumer group实现对这两种模型的支持

```
所有consumer实例都属于相同group—实现基于队列的模型，每条消息只会被一个consumer实例处理

consumer实例都属于不同group—实现基于发布/订阅的模型

  极端的情况是每个consumer实例都设置完全不同都group，这样kafka消息就会被广播到所有consumre实例

```

## 6.2. 为什么使用 kafka

### 6.2.1. kafka使用场景

- 消息队列 (解耦, 流量削峰..)

- 追踪网站活动 : 将不同的活动放入不同的主题, 供后续的实时计算/监控程序使用

- 日志和监控metrics聚合:   聚合分布式应用的日志, 进行统一分析展示

### 6.2.2. 和 redis 消息队列的区别

- redis 实现的消息队列使用推模式, 若消费者在消息推过来的时候掉线了, 也就错过了消息; kafka 是基于拉模式, 每个消费者主动拉取消息

实际上 redis 作者看到这么多人使用 redis 来做消息队列, 违背了他给本意, 特地开发了 Disque 专门应对消息队列场景


## 6.3. 如何使用kafka

https://kafka.apache.org/documentation/#quickstart 启动测试用服务, kafka 在 `localhost:9092`, zookeeper 在`xxx`

### 6.3.1. kafka 原生配置

config文件夹下，会发现有很多很多的配置文件, 只需要关注 server.properties

```
【broker.id】
每个broker都必须自己设置的一个唯一id，可以在0~255之间
【log.dirs】
这个极为重要，Kafka的所有数据就是写入这个目录下的磁盘文件中的，如果说机器上有多块物理硬盘，那么可以把多个目录挂载到不同的物理硬盘上，然后这里可以设置多个目录，这样Kafka可以数据分散到多块物理硬盘，多个硬盘的磁头可以并行写，这样可以提升吞吐量。ps：多个目录用英文逗号分隔
【zookeeper.connect】
连接Kafka底层的ZooKeeper集群的
【Listeners】
broker监听客户端发起请求的端口号，默认是9092
【num.network.threads】默认值为3
【num.io.threads】默认值为8
细心的朋友们应该已经发现了，这就是上一篇我们在网络架构上提到的processor和处理线程池的线程数目。
所以说掌握Kafka网络架构显得尤为重要。
现在你看到这两个参数，就知道这就是Kafka集群性能的关键参数了
【unclean.leader.election.enable】
默认是false，意思就是只能选举ISR列表里的follower成为新的leader，1.0版本后才设为false，之前都是true，允许非ISR列表的follower选举为新的leader
【delete.topic.enable】
默认true，允许删除topic
【log.retention.hours】
可以设置一下，要保留数据多少个小时，这个就是底层的磁盘文件，默认保留7天的数据，根据自己的需求来就行了
【min.insync.replicas】
acks=-1(一条数据必须写入ISR里所有副本才算成功)，你写一条数据只要写入leader就算成功了，不需要等待同步到follower才算写成功。但是此时如果一个follower宕机了，你写一条数据到leader之后，leader也宕机，会导致数据的丢失。


```



### 6.3.2. 在 springboot 中使用 kafka


https://github.com/confluentinc/kafka-streams-examples


> https://github.com/confluentinc/kafka-rest rest 封装

Spring创建了一个名为Spring kafka的项目，它封装了Apache的kafka客户端部分(生产者/消费者/流处理等

@EnableKafka并不是在Spring Boot中启用Kafka必须的，Spring Boot附带了Spring Kafka的自动配置，因此不需要使用显式的@EnableKafka。如果想要自己实现Kafka配置类，则需要加上@EnableKafka，如果你不想要Kafka自动配置，比如测试中，需要做的只是移除KafkaAutoConfiguration `@SpringBootTest("spring.autoconfigure.exclude=org.springframework.boot.autoconfigure.kafka.KafkaAutoConfiguration")`


spring 中的配置

```sh

max.poll.records：单次消费者拉取的最大数据条数，默认值500。

max.poll.interval.ms：表示若在阈值时间之内消费者没有消费完上一次poll的消息，consumer
client会主动向coordinator发起LeaveGroup请求，触发Rebalance；然后consumer重新发送JoinGroup请求。

session.timeout.ms：group
Coordinator检测consumer发生崩溃所需的时间。在这个时间内如果Coordinator未收到Consumer的任何消息，那Coordinator就认为Consumer挂了。默认值10秒。

heartbeat.interval.ms：标识Consumer给Coordinator发一个心跳包的时间间隔。heartbeat.interval.ms越小，发的心跳包越多。默认值3秒。

```

### 6.3.3. 创建主题

```java
// 创建主题

@Configuration
@Data
public class KafkaTopicConfig {

    @Value("${kafka.topic.topic1}")
    private final String topic1;

    @Value("${kafka.topic.topic2}")
    private final String topic2;

    @Bean
    public NewTopic topic1() {
        return TopicBuilder.name(topic1)
                .partitions(1)
                .replicas(1)
                .build();
    }

    @Bean
    public NewTopic topic2() {
        return TopicBuilder.name(topic2)
                .partitions(2)
                .replicas(1)
                .build();
    }



}

```

或者:

```java
@Configuration
@Slf4j
@Data
public class KafkaConfig {

    private final KafkaProps kafkaProps;

    private final DefaultListableBeanFactory defaultListableBeanFactory;

    

    @PostConstruct
    public void init() {
        initTopics();
    }

    /**
     * create kafka topics
     */
    private void initTopics() {
        kafkaProps.getTopics().forEach(ele -> {
            defaultListableBeanFactory.registerSingleton(ele.getName(), TopicBuilder.name(ele.getName())
                    .partitions(ele.getPartitions()).replicas(ele.getReplicationFactor()).build());
            log.debug(">>> register topic ok: {}", ele.getName());
        });
    }

    @Data
    @Component
    @ConfigurationProperties(prefix = "kafka")
    static class KafkaProps {
        private List<Topic> topics = new ArrayList<>();
    }

    @Data
    static class Topic {
        private String name;
        private int partitions;
        private int replicationFactor;
    }

}
```

### 6.3.4. 生产者发送

#### 6.3.4.1. kafka template 同步 异步

```java

// 发送

@Service
@Data
@Slf4j
public class BookProducerService<T> {

    private final KafkaTemplate<String, T> kafkaTemplate;    

    public void send(String topic, T data) {
      // 同步的方式
        // try {
        //     SendResult<String, T> sendResult = kafkaTemplate.send(topic,data).get();
        //     RecordMetadata meta = sendResult.getRecordMetadata();
        //     if (meta != null) {
        //         ProducerRecord<String, T> producerRecord = sendResult.getProducerRecord();
        //         log.debug("producer record: {}", producerRecord);

        //     }
        // } catch (InterruptedException | ExecutionException e) {
        //     e.printStackTrace();
        // }

        // 利用 future 异步的写法:
        // 发送对象需要配置 value 的序列化方式
        kafkaTemplate.send(topic, data).addCallback(new ListenableFutureCallback<SendResult<String, T>>() {
            @Override
            public void onFailure(Throwable throwable) {
                log.error("send message failed, topic: {}, data: {}, err: {}", topic, data, throwable.getMessage());
            }

            @Override
            public void onSuccess(SendResult<String, T> sendResult) {
                RecordMetadata meta = sendResult.getRecordMetadata();
                if (meta != null) {
                    ProducerRecord<String, T> producerRecord = sendResult.getProducerRecord();
                    log.debug("Send ok, producer record: {}", producerRecord);
                }
            }
        });
    }
}


```

#### 6.3.4.2. 生产者配置

```yml
spring:
  application:
    name: springboot-kafka-demo
  kafka:
    bootstrap-servers:
      - localhost:9092
    consumer:
      # 配置消费者重连时, offset 重置的规则 (这里是: 消费者重连会重新接收最开始的消息)
      auto-offset-reset: earliest
      # 禁用offset 自动提交, 自己手动提交防止消息丢失
      enable-auto-commit: false
    producer:
      value-serializer: org.springframework.kafka.support.serializer.JsonSerializer

server:
  port: 8080

logging:
  level:
    '[io.github.xiaoyureed.springbootkafkademo]': DEBUG

kafka:
  topic: 
    topic1: topic1
    topic2: topic2


```

也可以在代码中配置:

```java
@Bean
public Map<String, Object> producerConfigs() {
    Map<String, Object> props = new HashMap<>();
    props.put(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, "localhost:9092");
    props.put(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG, StringSerializer.class);
    props.put(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG, StringSerializer.class);

    // 控制批处理大小，单位为字节
        props.put(ProducerConfig.BATCH_SIZE_CONFIG, 4096);
        // 批量发送，延迟为1毫秒，启用该功能能有效减少生产者发送消息次数，从而提高并发量
        props.put(ProducerConfig.LINGER_MS_CONFIG, 1);

        // 生产者可以使用的总内存字节来缓冲等待发送到服务器的记录d
        props.put(ProducerConfig.BUFFER_MEMORY_CONFIG, 40960);
        // 消息的最大大小限制,也就是说send的消息大小不能超过这个限制, 默认1048576(1MB)
        props.put(ProducerConfig.MAX_REQUEST_SIZE_CONFIG,1048576);

     
    // 消息确认机制
    /*
     //幂等性
      props.put(ProducerConfig.ENABLE_IDEMPOTENCE_CONFIG, true);
      // 重试次数，0为不启用重试机制，幂等性的时候必须大于0
      props.put(ProducerConfig.RETRIES_CONFIG, 1);
      //同步到副本,
      // 当幂等性 enable.idempotence 为 true，这里默认为 all
      props.put(ProducerConfig.ACKS_CONFIG, "all");
    */
    // 重试次数，0为不启用重试机制
        props.put(ProducerConfig.RETRIES_CONFIG, 0);
        //同步到副本, 默认为1
        // acks=0 把消息发送到kafka就认为发送成功
        // acks=1 把消息发送到kafka leader分区，并且写入磁盘就认为发送成功
        // acks=all 把消息发送到kafka leader分区，并且leader分区的副本follower对消息进行了同步就任务发送成功
        props.put(ProducerConfig.ACKS_CONFIG, 1);

        // 压缩消息，支持四种类型，分别为：none、lz4、gzip、snappy，默认为none。
        // 消费者默认支持解压，所以压缩设置在生产者，消费者无需设置。
        props.put(ProducerConfig.COMPRESSION_TYPE_CONFIG,"none");

    // See https://kafka.apache.org/documentation/#producerconfigs for more properties
    return props;
}

@Bean
public ProducerFactory<Integer, String> producerFactory() {
    return new DefaultKafkaProducerFactory<>(producerConfigs());
}

// springboot 默认提供了
@Bean
public KafkaTemplate<Integer, String> kafkaTemplate() {
    // KafkaTemplate构造函数中输入生产者工厂配置
    return new KafkaTemplate<Integer, String>(producerFactory());
}
```

#### 6.3.4.3. 生产者事务消息

https://www.cnblogs.com/lshan/p/14467527.html

```
Kafka中的事务特性主要用于以下两种场景：
【1】生产者发送多条消息可以封装在一个事务中，形成一个原子操作。 多条消息要么都发送成功，要么都发送失败。
【2】read-process-write模式： 将消息消费和生产封装在一个事务中，形成一个原子操作。在一个流式处理的应用中，常常一个服务需要从上游接收消息，然后经过处理后送达到下游，这就对应着消息的消费和生成。

```

Kafka 的事务消息默认要求你的 Kafka Broker的节点在 3 个以上

```java

@Service
public class BookProducerService {

    private List<Object> sendedBooks = new ArrayList<>();
    private static final Logger logger = LoggerFactory.getLogger(BookProducerService.class);

    private final KafkaTemplate<String, Object> kafkaTemplate;

    public BookProducerService(KafkaTemplate<String, Object> kafkaTemplate) {
        this.kafkaTemplate = kafkaTemplate;
    }

    public void sendMessage(String topic, Object o) {
        kafkaTemplate.executeInTransaction(new KafkaOperations.OperationsCallback<String, Object, Object>() {
            @Override
            public Object doInOperations(KafkaOperations<String, Object> operations) {
                // 发送消息
                operations.send(topic, o);
                // 模拟发生异常
                int a = 1 / 0;
                // 模拟业务操作
                sendedBooks.add(o);
                return null;
            }
        });
    }
}



// 直接使用 @Transactional也可以：

    @Transactional(rollbackFor = Exception.class)
    public void sendMessage(String topic, Object o) {
        // 发送消息
        kafkaTemplate.send(topic, o);
        // 模拟发生异常
        int a = 1 / 0;
        // 模拟业务操作
        sendedBooks.add(o);
    }
```

transaction-id-prefix: 事务编号前缀

isolation-level: read_committed :仅读取已提交的消息

```yml
server:
 port: 9090
spring:
 kafka:
   bootstrap-servers: localhost:9092,localhost:9093,localhost:9094
   consumer:
     # 配置消费者消息offset是否自动重置(消费者重连会能够接收最开始的消息)
     auto-offset-reset: earliest
     # 事务隔离级别
     isolation-level: read_committed #仅读取已提交的消息
   producer:
     value-serializer: org.springframework.kafka.support.serializer.JsonSerializer
     retries: 3  #  重试次数
     # 启用事务
     transaction-id-prefix: my-tx. # 事务编号前缀
kafka:
 topic:
   topic-test-transaction: topic-test-transaction


```

### 6.3.5. 消费者消费

#### 6.3.5.1. 配置 过滤器 全局异常处理

```java
// 配置
@Configuration
@EnableKafka
public class KafkaConsumerConfig {

    @Bean
    KafkaListenerContainerFactory<ConcurrentMessageListenerContainer<String, String>> kafkaListenerContainerFactory() {
        ConcurrentKafkaListenerContainerFactory<String, String>
                factory = new ConcurrentKafkaListenerContainerFactory<>();
        // 设置消费者工厂
        factory.setConsumerFactory(consumerFactory());
        // 消费者组中线程数量
        factory.setConcurrency(3);
        // 拉取超时时间
        factory.getContainerProperties().setPollTimeout(3000);

        // 当使用批量监听器时需要设置为true
        factory.setBatchListener(true);

        // 被过滤的消息将被丢弃
        factory.setAckDiscarded(true);
        // 过滤监听的消息
        // 将过滤器添添加到参数中
        factory.setRecordFilterStrategy(consumerRecord -> {
            // 设置过滤器，只接收消息内容中包含 "test" 的消息
            String value = consumerRecord.value().toString();
            if (value !=null && value.contains("test")) {
                System.err.println(consumerRecord.value());
                // 返回 false 则接收消息
                return false;
            }
            // 返回 true 则抛弃消息
            return true;
        });

         // 将单条消息异常处理器添加到参数中
        factory.setErrorHandler(new ConsumerAwareErrorHandler() {
            @Override
            public void handle(Exception thrownException, ConsumerRecord<?, ?> data, Consumer<?, ?> consumer) {
                log.error("// 将单条消息异常");
            }
        });
        // 将批量消息异常处理器添加到参数中
        factory.setBatchErrorHandler(new BatchErrorHandler() {
            @Override
            public void handle(Exception thrownException, ConsumerRecords<?, ?> data) {
                log.error("// 将批量消息异常");
            }
        });

        return factory;
    }

    @Bean
    public ConsumerFactory<String, String> consumerFactory() {
        return new DefaultKafkaConsumerFactory<>(consumerConfigs());
    }

    @Bean
    public Map<String, Object> consumerConfigs() {
        Map<String, Object> propsMap = new HashMap<>();
        // Kafka地址
        propsMap.put(ConsumerConfig.BOOTSTRAP_SERVERS_CONFIG, KafkaConstants.bootstrapServers);
        //配置默认分组，这里没有配置+在监听的地方没有设置groupId，多个服务会出现收到相同消息情况
        propsMap.put(ConsumerConfig.GROUP_ID_CONFIG, "defaultGroup");
        // 是否自动提交offset偏移量(默认true)
        propsMap.put(ConsumerConfig.ENABLE_AUTO_COMMIT_CONFIG, true);
        // 自动提交的频率(ms)
        propsMap.put(ConsumerConfig.AUTO_COMMIT_INTERVAL_MS_CONFIG, "100");
        // Session超时设置
        propsMap.put(ConsumerConfig.SESSION_TIMEOUT_MS_CONFIG, "15000");
        // 键的反序列化方式
        propsMap.put(ConsumerConfig.KEY_DESERIALIZER_CLASS_CONFIG, StringDeserializer.class);
        // 值的反序列化方式
        propsMap.put(ConsumerConfig.VALUE_DESERIALIZER_CLASS_CONFIG, StringDeserializer.class);
        // offset偏移量规则设置：
        // (1)、earliest：当各分区下有已提交的offset时，从提交的offset开始消费；无提交的offset时，从头开始消费
        // (2)、latest：当各分区下有已提交的offset时，从提交的offset开始消费；无提交的offset时，消费新产生的该分区下的数据
        // (3)、none：topic各分区都存在已提交的offset时，从offset后开始消费；只要有一个分区不存在已提交的offset，则抛出异常
        propsMap.put(ConsumerConfig.AUTO_OFFSET_RESET_CONFIG, "earliest");
        return propsMap;
    }
}

```

#### 6.3.5.2. 监听消费

##### 6.3.5.2.1. @kafkaListener基本使用

```java
// 监听 方式 1:, 通过注解
@Component
public class KafkaConsumerListener {

   @KafkaListener(topics = {"test"},groupId = "group1", containerFactory="kafkaListenerContainerFactory")
   public void kafkaListener(String message, @Header(KafkaHeaders.RECEIVED_PARTITION_ID) int partition){
       System.out.println(message);
   }

   @KafkaListener(id = "webGroup1", topics = "hello")
	public void onMessage(ConsumerRecord<Object, Object> record, Acknowledgment ack,
			@Header(KafkaHeaders.RECEIVED_TOPIC) String topic) {
		System.out.println("单条消费消息：" + record.topic() + "----" + record.partition() + "----" + record.value());
		ack.acknowledge();
	}
	
	
	@KafkaListener(id = "webGroup2", topics = "hello")
	public void onMessageButch(List<ConsumerRecord<?, ?>> records, Acknowledgment ack) {
		for(ConsumerRecord<?, ?> record:records) {
		    System.out.println("批量消费消息：" + record.topic() + "----" + record.partition() + "----" + record.value());
		}
		ack.acknowledge();
	}

}


// 监听方式 2:
 /**
     * 创建 KafkaMessageListenerContainer 实例监听 kafka 消息
     */
    @Bean
    public KafkaMessageListenerContainer demoListenerContainer() {
        // 创建container配置参数，并指定要监听的 topic 名称
        ContainerProperties properties = new ContainerProperties("test");
        // 设置消费者组名称
        properties.setGroupId("group2");
        // 设置监听器监听 kafka 消息
        properties.setMessageListener(new MessageListener<Integer,String>() {
            @Override
            public void onMessage(ConsumerRecord<Integer, String> record) {
                System.out.println("消息：" + record);
            }
        });
        return new KafkaMessageListenerContainer(consumerFactory(), properties);
    }


// 方式 3:
/**
 * @KafkaListener 还可以作用在class 类上:
该注解作用于类上时,类中的方法必须用 @KafkaHandler注解，在传递消息时，将使用转换后的消息有效负载类型来确定调用那个方法
 */
@KafkaListener(id = "myId", topics = "myTopic")
public class Myclass {
    @KafkaHandler
    public void listen(String str) {

    }

    @KafkaHandler
    public void listen(Integer integer) {

    }
}

```

##### 6.3.5.2.2. 消费指定分区

```java
@KafkaListener(
  topicPartitions = @TopicPartition(
    topic = "topicName",
    partitionOffsets = {
      @PartitionOffset(partition = "0", initialOffset = "0"), // msgs will be re-consuming every time this listener is initialized
      @PartitionOffset(partition = "3", initialOffset = "0")
    }
  ),
  containerFactory = "partitionsKafkaListenerContainerFactory")
public void listenToPartition(
  @Payload String message, 
  @Header(KafkaHeaders.RECEIVED_PARTITION_ID) int partition) {
      System.out.println(
        "Received Message: " + message+ "from partition: " + partition);
}


// 若不需要指定 offset
@KafkaListener(topicPartitions 
  = @TopicPartition(topic = "topicName", partitions = { "0", "1" }))
```

##### 6.3.5.2.3. 动态开启关闭监听

```java
/*
启动项目，调用 /test 接口发送一条消息，监听器成功接收到消息。

调用 /stop 接口关闭监听，再次发送一条消息，监听器不会收到消息。

调用 /start 接口开启监听，监听器收到之前发送的消息。

由于监听已经开启，再次发送一条消息，监听器成功接收到消息。
*/
@RestController
public class KafkaProducer {
 
    @Autowired
    private KafkaListenerEndpointRegistry registry;
 
    @Autowired
    private KafkaTemplate<String, Object> kafkaTemplate;
 
    // 发送消息
    @GetMapping("/test")
    public void test() {
        System.out.println("监听器发送消息!");
        kafkaTemplate.send("topic1", "1条测试消息");
    }
 
    // 开启监听
    @GetMapping("/start")
    public void start() {
        System.out.println("开启监听");
        //判断监听容器是否启动，未启动则将其启动
        if (!registry.getListenerContainer("myListener1").isRunning()) {
            registry.getListenerContainer("myListener1").start();
        }
        registry.getListenerContainer("myListener1").resume();
    }
 
    // 关闭监听
    @GetMapping("/stop")
    public void stop() {
        System.out.println("关闭监听");
        //判断监听容器是否启动，未启动则将其启动
        registry.getListenerContainer("myListener1").pause();
    }
}

```

##### 6.3.5.2.4. 禁用自启动

```java

// 禁止监听器自启动
@Configuration
public class KafkaInitialConfiguration {
 
    // 监听器工厂
    @Autowired
    private ConsumerFactory consumerFactory;
 
    // 监听器容器工厂(设置禁止KafkaListener自启动)
    @Bean
    public ConcurrentKafkaListenerContainerFactory delayContainerFactory() {
        ConcurrentKafkaListenerContainerFactory container =
                new ConcurrentKafkaListenerContainerFactory();
        container.setConsumerFactory(consumerFactory);
        //禁止自动启动
        container.setAutoStartup(false);
        return container;
    }
}
//然后将这个容器工厂的 BeanName 放到 @KafkaListener 注解的 containerFactory 属性里面。这样该监听器就不会自动启动了 
@Component
public class KafkaConsumer {
    // 消费监听
    @KafkaListener(id = "myListener1", topics = {"topic1"},
            containerFactory = "delayContainerFactory")
    public void listen1(String data) {
        System.out.println("监听器收到消息：" + data);
    }
}

```

##### 6.3.5.2.5. 定时启停监听器

```java
// 场景: 项目需要利用 Kafka 做数据持久化的功能，由于用户活跃的时间为早上 10 点至晚上 12 点, 我们可以选择在用户活跃度低的时间段去做持久化的操作，也就是晚上 12 点后到第二条的早上 10 点前

@SpringBootApplication
@EnableScheduling // 开启定时任务
public class KtestApplication {
    public static void main(String[] args) {
        SpringApplication.run(KtestApplication.class, args);
    }
}

@Component
public class MyKafkaSchedule {
    @Autowired
    private KafkaListenerEndpointRegistry registry;
 
    //定时器，每天凌晨0点开启监听
    @Scheduled(cron = "0 0 0 * * ?")
    public void startListener() {
        System.out.println("开启监听");
        //判断监听容器是否启动，未启动则将其启动
        if (!registry.getListenerContainer("myListener1").isRunning()) {
            registry.getListenerContainer("myListener1").start();
        }
        registry.getListenerContainer("myListener1").resume();

        // ... 持久化操作

    }
 
    //定时器，每天早上10点关闭监听
    @Scheduled(cron = "0 0 10 * * ?")
    public void shutDownListener() {

        // ... 停止持久化

        System.out.println("关闭监听");
        registry.getListenerContainer("myListener1").pause();
    }
}
```

#### 6.3.5.3. 消费者错误处理 单消息 批量消息 

```java
/**
 * 单消息消费异常处理器
 */
@Service
public class ConsumerService {

    private static final Logger log = LoggerFactory.getLogger(ConsumerService.class);

    /**
     * 消息监听器
     * errorHandler 不指定listenErrorHandler的情况，使用全局异常
     */
    @KafkaListener( topics = {"test"},groupId = "group21",errorHandler = "listenErrorHandler")
    public void listen(String message) {
        log.info(message);
        // 创建异常，触发异常处理器
        throw new NullPointerException("测试错误处理器");
    }

    /**
     * 异常处理器
     */
    @Bean
    public ConsumerAwareListenerErrorHandler listenErrorHandler() {
        return new ConsumerAwareListenerErrorHandler() { // 或者: 创建 ConsumerAwareErrorHandler 这个子接口也可

            @Override
            public Object handleError(Message<?> message,
                                      ListenerExecutionFailedException e,
                                      Consumer<?, ?> consumer) {
                log.info("message:" + message.getPayload());
                log.info("exception:" + e.getMessage());
                return null;
            }
        };
    }
}



/**
 *  批量消费异常处理器
 */
@Service
public class ConsumerBatchService {

    private static final Logger log = LoggerFactory.getLogger(ConsumerBatchService.class);
    /**
     * 消息监听器
     */
    @KafkaListener( topics = {"test"},groupId = "group20",errorHandler = "listenErrorHandler")
    public void listen(List<String> messages) {
        for(String msg:messages){
            System.out.println(msg);
        }
        // 创建异常，触发异常处理器
        throw new NullPointerException("测试错误处理器");
    }


    /**
     * 异常处理器
     */
    @Bean
    public ConsumerAwareListenerErrorHandler listenErrorHandler() {
        return new ConsumerAwareListenerErrorHandler() {
            @Override
            public Object handleError(Message<?> message, ListenerExecutionFailedException e, Consumer<?, ?> consumer) {
                log.info("consumerAwareErrorHandler receive : "+message.getPayload().toString());
                MessageHeaders headers = message.getHeaders();
                List<String> topics = headers.get(KafkaHeaders.RECEIVED_TOPIC, List.class);
                List<Integer> partitions = headers.get(KafkaHeaders.RECEIVED_PARTITION_ID, List.class);
                List<Long> offsets = headers.get(KafkaHeaders.OFFSET, List.class);
                Map<TopicPartition, Long> offsetsToReset = new HashMap<>();
                return null;
            }
        };
    }
}


```

#### 6.3.5.4. offset 提交

在kafka的消费者中有一个非常关键的机制，那就是 offset 机制。它使得 Kafka 在消费的过程中即使挂了或者引发再均衡问题重新分配 Partation，当下次重新恢复消费时仍然可以知道从哪里开始消费。

Kafka中偏移量的自动提交是由参数 enable_auto_commit 和 auto_commit_interval_ms 控制的，当 enable_auto_commit=true 时，Kafka在消费的过程中会以频率为 auto_commit_interval_ms 向 Kafka 自带的 topic(__consumer_offsets) 进行偏移量提交

```java
// 自动提交
auto.commit.enable=true：是否将offset维护交给kafka进行维护（老版本中提交到zookeeper中维护），设置为true。
auto.commit.interval.ms=10000：自动提交时间间隔。

// 手动提交
auto.commit.enable=false：是否将offset维护交给kafka进行维护（老版本中提交到zookeeper中维护），设置为false。
然后需要在程序中设置ack模式,从而进行手动提交维护offset。
@Bean
KafkaListenerContainerFactory<ConcurrentMessageListenerContainer<Integer, String>> kafkaListenerContainerFactory() {
    ConcurrentKafkaListenerContainerFactory<Integer, String> factory = new ConcurrentKafkaListenerContainerFactory<>();
    factory.setConsumerFactory(consumerFactory());
    factory.setConcurrency(3);
    factory.getContainerProperties().setPollTimeout(3000);
    // 设置ACK模式(手动提交模式，这里有七种)
    /*
    RECORD： 每处理完一条记录后提交。
    BATCH(默认)： 每次poll一批数据后提交一次，频率取决于每次poll的调用频率。
    TIME： 每次间隔ackTime的时间提交。
    COUNT： 处理完poll的一批数据后并且距离上次提交处理的记录数超过了设置的ackCount就提交。
    COUNT_TIME： TIME和COUNT中任意一条满足即提交。
    MANUAL： 手动调用Acknowledgment.acknowledge()后，并且处理完poll的这批数据后提交。
    MANUAL_IMMEDIATE： 手动调用Acknowledgment.acknowledge()后立即提交
    
    */
    // 不配置会 error
    factory.getContainerProperties().setAckMode(ContainerProperties.AckMode.MANUAL_IMMEDIATE);
    return factory;
}

// 手动提交
 @KafkaListener(id = "webGroup1", topics = "hello")
	public void onMessage(ConsumerRecord<Object, Object> record, Acknowledgment ack,
			@Header(KafkaHeaders.RECEIVED_TOPIC) String topic) {
		System.out.println("单条消费消息：" + record.topic() + "----" + record.partition() + "----" + record.value());
		ack.acknowledge();
	}

```

#### 6.3.5.5. 消息序列化

```java
// producer

@Bean
public ProducerFactory<String, Greeting> greetingProducerFactory() {
    // ...
    configProps.put(
      ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG, 
      JsonSerializer.class);
    return new DefaultKafkaProducerFactory<>(configProps);
}

@Bean
public KafkaTemplate<String, Greeting> greetingKafkaTemplate() {
    return new KafkaTemplate<>(greetingProducerFactory());
}


// consumer

@Bean
public ConsumerFactory<String, Greeting> greetingConsumerFactory() {
    // ...
    return new DefaultKafkaConsumerFactory<>(
      props,
      new StringDeserializer(), 
      new JsonDeserializer<>(Greeting.class));
}

@Bean
public ConcurrentKafkaListenerContainerFactory<String, Greeting> 
  greetingKafkaListenerContainerFactory() {

    ConcurrentKafkaListenerContainerFactory<String, Greeting> factory =
      new ConcurrentKafkaListenerContainerFactory<>();
    factory.setConsumerFactory(greetingConsumerFactory());
    return factory;
}

@KafkaListener(
  topics = "topicName", 
  containerFactory = "greetingKafkaListenerContainerFactory")
public void greetingListener(Greeting greeting) {
    // process greeting message
}
```

#### 6.3.5.6. 自定义代替默认线程池

https://www.jianshu.com/p/cf367a8c6d67

```java
public class CustomConcurrentKafkaListenerContainerFactory<K,V> extends ConcurrentKafkaListenerContainerFactory<K,V> {

    /**
     * The executor for threads that poll the consumer.
     */
    private AsyncListenableTaskExecutor consumerTaskExecutor;

    /**
     * The executor for threads that invoke the listener.
     */
    private AsyncListenableTaskExecutor listenerTaskExecutor;

    public CustomConcurrentKafkaListenerContainerFactory(AsyncListenableTaskExecutor consumerTaskExecutor, AsyncListenableTaskExecutor listenerTaskExecutor) {
        this.consumerTaskExecutor = consumerTaskExecutor;
        this.listenerTaskExecutor = listenerTaskExecutor;
    }

    @Override
    protected void initializeContainer(ConcurrentMessageListenerContainer<K, V> instance) {
        super.initializeContainer(instance);
        instance.getContainerProperties().setConsumerTaskExecutor(consumerTaskExecutor);
        instance.getContainerProperties().setListenerTaskExecutor(listenerTaskExecutor);
    }
}


@Configuration
@AutoConfigureBefore(KafkaAutoConfiguration.class)
public class KafkaExecutorConfig {

    @Bean(name = "consumerTaskExecutor")
    public ThreadPoolTaskExecutor consumerTaskExecutor(){
        ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();
        executor.setCorePoolSize(Runtime.getRuntime().availableProcessors());
        executor.setMaxPoolSize(5);
        executor.setQueueCapacity(100);
        executor.setThreadNamePrefix("my-C-");
        executor.setRejectedExecutionHandler(new ThreadPoolExecutor.CallerRunsPolicy());
        executor.setWaitForTasksToCompleteOnShutdown(true);
        executor.initialize();
        return executor;
    }

    @Bean(name = "listenerTaskExecutor")
    public ThreadPoolTaskExecutor listenerTaskExecutor(){
        ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();
        executor.setCorePoolSize(5);
        executor.setMaxPoolSize(10);
        executor.setQueueCapacity(100);
        executor.setThreadNamePrefix("my-L-");
        executor.setRejectedExecutionHandler(new ThreadPoolExecutor.CallerRunsPolicy());
        executor.setWaitForTasksToCompleteOnShutdown(true);
        executor.initialize();
        return executor;
    }

    @Bean("kafkaListenerContainerFactory")
    public ConcurrentKafkaListenerContainerFactory<?, ?> kafkaListenerContainerFactory(
            ConcurrentKafkaListenerContainerFactoryConfigurer configurer,
            ConsumerFactory<Object, Object> kafkaConsumerFactory) {
        ConcurrentKafkaListenerContainerFactory<Object, Object> factory = new CustomConcurrentKafkaListenerContainerFactory<Object, Object>(consumerTaskExecutor(),listenerTaskExecutor());
        configurer.configure(factory, kafkaConsumerFactory);
        return factory;
    }
}



```

#### 6.3.5.7. 消费者组 多线程消费

https://www.modb.pro/db/51256


```java
// 方案一: 多线程+多 consumer 实例

public class KafkaConsumerRunner implements Runnable {
  private final AtomicBoolean closed = new AtomicBoolean(false);
  private final KafkaConsumer consumer;

  public void run() {
    try{
      consumer.subscribe(Arrays.asList("topic"));
      while(!closed.get()){
        ConsumerRecords records = consumer.poll(Duration.ofMillis(10000));
      }
    }catch (WakeupException e){
      if (!closed.get()) throw e;
    }finally {
      consumer.close();
    }
  }

  public void shutdown() {
    closed.set(true);
    consumer.wakeup();
  }
}




// 方案二: 单线程+单 consumer 实例 + worker 线程池
private final KafkaConsumer<String, String> consumer;
private ExecutorService executors;
...

private int workerNum = ...;
executors = new ThreadPoolExecutor(
            workerNum, workerNum, 0L, TimeUnit.MILLISECONDS,
            new ArrayBlockingQueue<>(1000),
            new ThreadPoolExecutor.CallerRunsPolicy());

...
while (true) {
  ConsumerRecords<String, String> records = consumer.poll(Duration.ofSeconds(1));
  for (final ConsumerRecord record : records) {
    executors.submit(new Worker(record));
  }
}

```

#### 6.3.5.8. 消息转发

```java
@Component
public class KafkaConsumer {
    // 消费监听
    @KafkaListener(topics = {"topic1"})
    @SendTo("topic2")
    public String listen1(String data) {
        System.out.println("业务A收到消息：" + data);
        return data + "(已处理)";
    }
 
    // 消费监听
    @KafkaListener(topics = {"topic2"})
    public void listen2(String data) {
        System.out.println("业务B收到消息：" + data);
    }
}
```

### 6.3.6. 总结:消息送达的情况

```
消息送达语义是消息系统中一个常见的问题，主要包含三种语义：

【1】At most once：消息发送或消费至多一次；(允许存在消息丢失, 不允许重复消费)

    对 producer 来说, 意味着 Producer发送完一条消息后，不会确认消息是否成功送达

        通过配置 Producer 的 acks=0 && retries=0
            当 retries 不是 0, 意味着允许重试, 如果没有将 max.in.flight.requests.per.connection (代表着一个 Producer同时可以发送的未收到确认的消息数量)配置的值设置为1，有可能造成消息乱序的结果。(如果max.in.flight.requests.per.connection数量大于1，那么可能发送了message1后，在没有收到确认前就发送了message2，此时 message1发送失败后触发重试，而 message2直接发送成功，就造成了Broker上消息的乱序。max.in.flight.requests.per.connection的默认值为5。)

    对 consumer 来说, 意味着有可能存在消息消费失败依旧提交offset的情况 (考虑下面的情况：Consumer首先读取消息，然后提交 offset，最后处理这条消息。在处理消息时，Consumer宕机了，此时 offset已经提交，下一次读取消息时读到的是下一条消息了，这就是 At most once消费。)

        consumer 配置:enable.auto.commit=true：后台定时提交offset；, auto.commit.interval.ms (表示后台提交 offset的时间间隔)配置为一个很小的数值。


【2】At least once：消息发送或消费至少一次；(不允许消息丢失, 允许重复消费)

    对于 producer 意味着发送完消息, 需要确认, 如果 Producer没有收到 Broker的 ack确认消息，那么会不断重试发送消息

        Kafka默认的 Producer消息送达语义就是 At least once (原因是 Kafka中默认 acks=1并且 retries=2147483647。)

    对于 consumer, 意味着 Consumer对一条消息可能消费多次 (考虑下面的情况：Consumer首先读取消息，然后处理这条消息，最后提交offset。在处理消息时成功后，Consumer宕机了，此时 offset还未提交，下一次读取消息时依旧是这条消息，那么处理消息的逻辑又将被执行一遍，这就是 At least once消费。)

        consumer 配置: enable.auto.commit=false：禁止后台自动提交offset；, 手动调用 consumer.commitSync()来提交offset, 保证了 offset即时更新；


【3】Exactly once：消息恰好只发送一次或只消费一次；(不允许丢失, 也不允许重复)

    对于 producer, 意味着 Producer消息的发送是幂等的。 这意味着不论消息重发多少遍，最终 Broker上记录的只有一条不重复的数据。(kafka producer默认是支持at least once 的, 所以主要是要实现消息去重)

        通过配置 Producer的以下配置项来实现: 
        
            enable.idempotence=true。enable.idempotence配置项表示是否使用幂等性(默认 false)。当 enable.idempotence配置为 true时，acks必须配置为all。并且建议 max.in.flight.requests.per.connection的值小于5。

                设置 transactional.id (在 springboot 里是配置事务前缀为非空)后，enable.idempotence会自动设置为true

        原理: kafka 引入了两个概念
            【1】PID：每个新的 Producer在初始化的时候会被分配一个唯一的PID，这个 PID对用户是不可见的；
            【2】Sequence Numbler：对于每个PID，该 Producer发送数据的每个<Topic, Partition>都对应一个从0开始单调递增的Sequence Number；

    对于 consumer, 意味着消息的消费处理逻辑和offset的提交是原子性的，即消息消费成功后 offset改变，消息消费失败 offset也能回滚

        即需要事务特性, 配置 consumer 的 isolation.level=read_committed, 有两个值
            - read_committed : 所有事务未提交的数据就都对 Consumer不可见了，也就实现了 Kafka的事务语义
            - read_uncommitted (默认)

```

## 6.4. 参数调优

https://blog.csdn.net/hanjibing1990/article/details/51673540 消息体大小

## 开源生态

https://github.com/zalando/nakadi 通过restful api 也kafka交互


# 7. 即时通讯 MQTT协议

https://www.jianshu.com/p/e132261456b5
TODO