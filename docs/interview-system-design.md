---
title: 系统设计 System design
tags: [interview, 系统设计]
date: 2020-10-03 22:27:26
toc_min_heading_level: 2
toc_max_heading_level: 5
---

https://www.bilibili.com/video/BV1s54y1L7VU?p=2 高并发优化

https://soulmachine.gitbooks.io/system-design/content/cn/distributed-id-generator.html

https://github.com/xingshaocheng/architect-awesome

https://github.com/baiyutang/meetup 技术会议 ppt

https://github.com/davideuler/architecture.of.internet-product 互联网项目架构

https://acecodeinterview.com/kafka/

https://blog.csdn.net/Brad_PiTt7/article/details/90717429
TODO


https://github.com/0voice/interview_internal_reference 大厂面试题库

https://github.com/donnemartin/system-design-primer
https://github.com/imarvinle/system-design-primer/blob/master/README-zh-Hans.md

<!--more-->
 
- [1. 系统设计套路](#1-系统设计套路)
  - [1.1. 混沌工程 chaos engineering](#11-混沌工程-chaos-engineering)
  - [1.2. 实现性能优化](#12-实现性能优化)
    - [1.2.1. 高可用](#121-高可用)
    - [1.2.2. 高并发/高吞吐量](#122-高并发高吞吐量)
      - [架构层面](#架构层面)
      - [语言层面的优化](#语言层面的优化)
- [2. 网约车](#2-网约车)
  - [2.1. 派单](#21-派单)
  - [2.2. 支付流程](#22-支付流程)
  - [2.3. 开放平台](#23-开放平台)
  - [2.4. 数据一致性(分布式锁, 分布式事务)](#24-数据一致性分布式锁-分布式事务)
- [3. 短网址 短链接](#3-短网址-短链接)
- [4. 数据迁移 同步双写方案](#4-数据迁移-同步双写方案)
- [5. 第三方登录](#5-第三方登录)
- [6. 直播弹幕系统](#6-直播弹幕系统)
- [7. 秒杀系统](#7-秒杀系统)
  - [7.1. 秒杀解决方案](#71-秒杀解决方案)
- [8. 积分系统](#8-积分系统)
- [9. 电商账户系统](#9-电商账户系统)
- [10. 订单系统](#10-订单系统)
  - [10.1. 订单号生成策略](#101-订单号生成策略)
  - [10.2. 订单创建](#102-订单创建)
    - [10.2.1. 扣减库存](#1021-扣减库存)
      - [10.2.1.1. 下单减库存](#10211-下单减库存)
      - [10.2.1.2. 付款减库存](#10212-付款减库存)
- [11. 支付系统](#11-支付系统)
  - [11.1. 入门介绍](#111-入门介绍)
  - [11.2. 单元化](#112-单元化)
- [12. feed 流系统](#12-feed-流系统)
- [13. 点赞模块设计](#13-点赞模块设计)
  - [13.1. 设计思路](#131-设计思路)
  - [13.2. 优缺点](#132-优缺点)
  - [13.3. 数据结构设计](#133-数据结构设计)
- [14. 扫码登录](#14-扫码登录)
  - [14.1. 扫码设计思路](#141-扫码设计思路)
- [15. Excel 表导入优化](#15-excel-表导入优化)
- [16. java 监控系统设计](#16-java-监控系统设计)
  - [16.1. 检测哪些内容](#161-检测哪些内容)
  - [16.2. 如何监控](#162-如何监控)
    - [16.2.1. 程序内置监测](#1621-程序内置监测)
    - [16.2.2. jdk 自带可视化工具](#1622-jdk-自带可视化工具)
    - [16.2.3. jdk 自带命令行工具](#1623-jdk-自带命令行工具)
    - [16.2.4. 第三方工具](#1624-第三方工具)
  - [16.3. 案例 生鲜电商监控平台](#163-案例-生鲜电商监控平台)
- [17. 消息推送系统 IM 系统](#17-消息推送系统-im-系统)
- [18. 流程引擎系统](#18-流程引擎系统)
- [19. 权限系统](#19-权限系统)
- [20. 日志采集系统](#20-日志采集系统)
- [21. 开放 api 平台](#21-开放-api-平台)
- [22. SaaS 平台](#22-saas-平台)
  - [22.1. 概念](#221-概念)
    - [22.1.1. Pros and Cons](#2211-pros-and-cons)
    - [22.1.2. related roles](#2212-related-roles)
    - [22.1.3. compare with PaaS IaaS](#2213-compare-with-paas-iaas)
  - [22.2. 如何做数据隔离](#222-如何做数据隔离)
  - [22.3. 租户识别 (路由)](#223-租户识别-路由)
  - [22.4. 租户计费](#224-租户计费)
  - [22.5. 灰度升级](#225-灰度升级)
- [23. 优惠券系统](#23-优惠券系统)
- [24. 撮合系统](#24-撮合系统)
  - [24.1. 撮合交易引擎](#241-撮合交易引擎)
  - [24.2. Hazelcast](#242-hazelcast)
  - [24.3. disruptor](#243-disruptor)



# 1. 系统设计套路

## 1.1. 混沌工程 chaos engineering

核心思想: if something hurt do it more often (在可控的条件下)

## 1.2. 实现性能优化


### 1.2.1. 高可用

```

- 服务降级

    - 使用断路器

- 隔离

    - 线程隔离 （thread  pool）, 如 hystrix , 其他还有 servlet3 

    - 进程隔离（系统拆分）比如拆分微服务

    - 动静态资源隔离（cdn存放静态资源）

- 限流

    (区别： 令牌桶输出速率可以变化 , 令牌以恒定速率颁发,可以以任意速度消耗；漏桶输出速率恒定 ,溢出的请求则拒绝或丢弃)

    令牌桶算法 Token Bucket

        原理： 系统会以一个恒定的速度往桶里放入令牌，而如果请求需要被处理，则需要先从桶里获取一个令牌，当桶里没有令牌可取时，则拒绝服务。

        > 大小固定的令牌桶可自行以恒定的速率源源不断地产生令牌。如果令牌不被消耗，或者被消耗的速度小于产生的速度，令牌就会不断地增多，直到把桶填满。后面再产生的令牌就会从桶中溢出。最后桶中可以保存的最大令牌数永远不会超过桶的大小。
        > 传送到令牌桶的数据包需要消耗令牌。不同大小的数据包，消耗的令牌数量不一样。
        > 令牌桶这种控制机制基于令牌桶中是否存在令牌来指示什么时候可以发送流量。令牌桶中的每一个令牌都代表一个字节。如果令牌桶中存在令牌，则允许发送流量；而如果令牌桶中不存在令牌，则不允许发送流量

        Guava 的 RateLimiter 使用了 这个算法

        作用过程：

        假如用户配置的平均发送速率为r，则每隔1/r秒一个令牌被加入到桶中；
        假设桶最多可以存发b个令牌。如果令牌到达时令牌桶已经满了，那么这个令牌会被丢弃；
        当一个n个字节的数据包到达时，就从令牌桶中删除n个令牌，并且数据包被发送到网络；
        如果令牌桶中少于n个令牌，那么不会删除令牌，并且认为这个数据包在流量限制之外；
        算法允许最长b个字节的突发，但从长期运行结果看，数据包的速率被限制成常量r

        如何实现：

        一种解法是，开启一个定时任务，由定时任务持续生成令牌。这样的问题在于会极大的消耗系统资源，如，某接口需要分别对每个用户做访问频率限制，假设系统中存在6W用户，则至多需要开启6W个定时任务来维持每个桶中的令牌数，这样的开销是巨大的。

        另一种解法则是延迟计算，如上resync函数。该函数会在每次获取令牌之前调用，其实现思路为，若当前时间晚于nextFreeTicketMicros，则计算该段时间内可以生成多少令牌，将生成的令牌加入令牌桶中并更新数据。这样一来，只需要在获取令牌时计算一次即可

    漏桶算法 Leaky Bucket

        就是一个队列， 强制一个常量的输出速率而不管输入数据流的突发性。当输入空闲时，该算法不执行任何动作；

- "冗余设计" 负载均衡

    - 在 nginx 中切换故障的应用层

    - dns 切换机房入口

- 可回滚

    事物回滚， 代码版本回滚， 部署版本回滚， 数据库回滚

- 为阻塞操作设置超时, 防止无休止等待

- 健康检查

```


### 1.2.2. 高并发/高吞吐量

#### 架构层面

```

- 无状态

    方便水平拓展, 达到高吞吐量

- 拆分

    - 系统解耦， 拆分成多个子系统， 可分别独立水平拓展

    - 读写分离

- 消息队列

    解耦（一对多消费）， 削峰， 异步

    对于一对多消费， 可以惊醒镜像复制

- 缓存

    - 浏览器缓存

        响应头 Expires， Cache-control

    - 静态资源进行 cdn 缓存

    - 接入层缓存， 如搭建 nginx 作为接入层

    - 应用层缓存

        在 应用所在 server 上部署 redis， 多机间使用 redis 主从同步

    - 分布式缓存

        分片规则：一致性哈希


- 服务化

    单点远程服务调用 -> 服务集群化 + nginx 负载均衡 

    调用方更多后， 考虑使用服务自动注册/发现

    考虑服务隔离，防止级联故障

    考虑服务限流， 连接超时时间/重试， 服务路由， 降级
```

#### 语言层面的优化

以 java 为例

```
- 线程池

- threadLocal

- synchronized

  - JMM 模型

- cas

- juc

  - 原子类

  - 容器类

  - aqs

```

# 2. 网约车

## 2.1. 派单

## 2.2. 支付流程

## 2.3. 开放平台

## 2.4. 数据一致性(分布式锁, 分布式事务)

# 3. 短网址 短链接 

https://www.zhihu.com/question/29270034

https://www.zhihu.com/question/19852154

https://soulmachine.gitbooks.io/system-design/content/cn/tinyurl.html

https://segmentfault.com/a/1190000012088345

https://juejin.cn/post/6844904090602848270



# 4. 数据迁移 同步双写方案



# 5. 第三方登录

https://mp.weixin.qq.com/s/3wHFNFQPtj86AocLhUQahw


# 6. 直播弹幕系统

https://mp.weixin.qq.com/s/QTslEl7FRupsckfeq7fSLg
TODO

# 7. 秒杀系统

## 7.1. 秒杀解决方案

https://github.com/qiurunze123/miaosha
https://github.com/qqxx6661/miaosha

-   分布式 session , 为了抗并发, app 可能水平拓展, 各个 node 的 session 需要统一

    使用 Redis 存储 session

-   加缓存缓解数据库读取压力

    “分层校验”, 过滤尽量多的请求, 这时不做一致性校验, 比如可以直接从缓存读, 直到写库，才对库存做一致性检查

    允许读场景下一定的脏数据，这样只会导致少量原本无库存的下单请求被误认为是有库存的，等到真正写数据时再保证最终一致性，由此做到高可用和一致性之间的平衡。

-   页面静态化

-   异步下单

    使用消息队列
    
-   限流降级

-   应用层优化

    -   裁剪日志异常堆栈, 减少日志打印量

    -   去组件框架, 比如去掉传统的 MVC 框架，直接使用 Servlet 处理请求

    -   如何扣减库存

        -   下单减库存

            用户体验好, 但是可能面临恶意下单, 造成最后货物剩余

        -   付款减库存

            会出现 用户付款却没货了. 出现超卖, 用户体验较差

        -   预扣库存 (买家下单后，库存为其保留一定的时间（如 15 分钟），超过这段时间，库存自动释放)

            提高了恶意下单的成本, 体验还可以

            一般采用这种



# 8. 积分系统

https://mp.weixin.qq.com/s/S8-P8h3_mhFWiEscEOi4ug


# 9. 电商账户系统

https://mp.weixin.qq.com/s/4M3iLsw35GZi94aBZ9VL2w

https://www.cnblogs.com/wangiqngpei557/p/13169705.html

# 10. 订单系统

功能: 订单列表、订单详情、在线下单

业务流程: 订单创建、订单支付、订单确认、订单完成、取消订单等订单流程

## 10.1. 订单号生成策略

https://www.v2ex.com/t/770751#reply16
TODO

## 10.2. 订单创建

先获取下单中涉及的商品信息，然后获取该商品所涉及到的优惠信息

增减库存:

### 10.2.1. 扣减库存

#### 10.2.1.1. 下单减库存

——即用户下单成功时减少库存数量

优势：用户体验友好，系统逻辑简洁；
缺点：会导致恶意下单或下单后却不买，使得真正有需求的用户无法购买，影响真实销量

解决办法：
设置订单有效时间，若订单创建成功N分钟不付款，则订单取消，库存回滚；
限购，用各种条件来限制买家的购买件数，比如一个账号、一个ip，只能买一件；
风控，从技术角度进行判断，屏蔽恶意账号，禁止恶意账号购买


#### 10.2.1.2. 付款减库存

优势：减少无效订单带来的资源损耗；
缺点：因第三方支付返回结果存在时差，同一时间多个用户同时付款成功，会导致下单数目超过库存，商家库存不足容易引发断货和投诉，成本增加

解决办法：
付款前再次校验库存，如确认订单要付款时再验证一次，并友好提示用户库存不足；
增加提示信息：在商品详情页，订单步骤页面提示不及时付款，不能保证有库存等


# 11. 支付系统 

## 11.1. 入门介绍

https://github.com/jigsaw-projects/jigsaw-payment
http://doc.cocolian.cn/ 凤凰牌老熊

https://github.com/jeequan/jeepay

https://github.com/roncoo/roncoo-pay



## 11.2. 单元化

https://help.aliyun.com/document_detail/159741.html

https://blog.51cto.com/u_6478076/5109051

https://thurstonzk2008.com/2019/09/24/%E5%8D%95%E5%85%83%E5%8C%96%E7%9A%84%E4%B8%80%E4%BA%9B%E9%97%AE%E9%A2%98%E7%9A%84%E6%80%BB%E7%BB%93/

https://github.com/csy512889371/learnDoc/blob/master/javadoc/%E6%9E%B6%E6%9E%84/%E8%9A%81%E9%87%91%E6%9C%8D%E6%94%AF%E4%BB%98%E5%AE%9D%E7%B3%BB%E7%BB%9F%E7%9A%84%E5%8D%95%E5%85%83%E5%8C%96.md

# 12. feed 流系统

https://mp.weixin.qq.com/s/q4w6DdjznVZBXh28MzHdgA
TODO


# 13. 点赞模块设计

## 13.1. 设计思路

点赞、取消点赞是高频次的操作，若每次都读写数据库，大量的操作会影响数据库性能，所以需要做缓存。将点赞数据扔到 redis 中, 然后离线刷回 MySQL

多久从 redis 中刷出一次数据到 MySQL 呢, 暂定为 2h

文章热度计算:文章获得点赞数越高，文章的热度就越高，那么怎么判断呢？不就直接记录点赞数就行啦，但是对于最新的文章怎么办？例如有一篇文章一年前发布的，获得 50 个赞，有篇最新文章获得 49 个赞，但是按照上面所说的一年前的文章热度还比最新的高，这就不合理了. ------------- 解决办法: 为每个文章加入一个 时间戳字段

## 13.2. 优缺点

-   缓解了数据库写操作的压力

-   没法保证数据安全性

    比如 redis 挂了会丢失数据

    比如 点赞数据刷回 MySQL 不及时, 可能 redis 会在执行内存淘汰策略时淘汰这些数据 (不过 点赞数据也不是什么关键数据, 丢失一点问题也不大)

## 13.3. 数据结构设计

MySQL:

-   user (id, name)
-   like_info (id, tweet_id, user, status)
-   tweet(id, content, user, like_count, hate_count)

redis:

每有一条点赞数据, 就存一条数据 tweet_id::user_id status, 点赞 status = 1, 取消点赞 status = 0

一个 hash(tweet_id, set(user_id, ...)) 结构存储某个人所有文章的点赞人情况, tweet_id:(user_id1, user_id2...)

# 14. 扫码登录

## 14.1. 扫码设计思路

web 端 和 服务器的配合:

1. user 访问登录页, server 随机生成 uuid, 作为键存入 redis, 值暂时为空, 同时设置过期时间, 根据 UUID + 验证字符串, 生成二维码 , 和 UUID 一起, 返回给 浏览器
1. browser 拿到 UUID 和 二维码, 之后每隔一秒向服务器发送一个请求, 看是否已经登录成功, 请求携带 UUID
1. server 根据 UUID 从 redis 获取 userID, 生成登录成功的 token, 浏览器登录成功

手机端 和 服务器配合:

1. 手机扫描二维码, 得到 UUID, 向 手机端服务器发送请求, 携带 UUID + 验证字符串 + user token (穿 token 而不是 直接 userId 是为了安全, token 是经过加密的)
1. 手机端服务器收到请求, 首先对比参数中的验证信息，确定是否为用户登录请求接口, 如果是，返回一个确认信息给手机端。
1. 手机端收到返回后，将登录确认框显示给用户, 用户确认, 手机再次发送请求, 携带 UUID, token
1. 服务器拿到 uuId 和 token 解析的 userId 后，将用户的 userid 作为 value 值存入 redis 中以 uuid 作为 key 的键值对中。

# 15. Excel 表导入优化

缴费记录导入, 用户 将别的系统的数据填入我们系统中的 Excel 模板，应用将文件内容读取、校对、转换之后产生欠费数据、票据、票据详情并存储到数据库中; 校验包括:

-   字段长度, 字段内容正则校验, 都在内存中没有外部数据交互, 性能影响小
-   数据正确性, 重复性校验, 如票据号是否和系统已存在的票据号重复, 房屋是否存在

在我接手之前数据量还不大, 接手后数据量增加到 10w 级别, 对应到数据库就是 30w 级别, 经过优化后可以在 100s 内完成 (测试服务器 4g 内存不仅放了数据库 MySQL5.7，还放了很多微服务应用。处理能力不太行)

1. poi 读取 Excel 成 list
1. 遍历 list, 检验字段长度, 一些查询数据库的校验，比如校验当前行欠费对应的房屋是否在系统中存在, 写入当前行数据
1. 返回执行结果，如果出错 / 校验不合格。则返回提示信息并回滚数据 (涉及到三个表)

优化:

-   缓存: 将参加校验的数据全部缓存到 HashMap 中。直接到 HashMap 去命中

    校验行中的房屋是否存在，原本是要用 区域 + 楼宇 + 单元 + 房号 去查询房屋表匹配房屋 ID，查到则校验通过，生成的欠单中存储房屋 ID.因此我采用一条 SQL，将该小区下所有的房屋以 区域/楼宇/单元/房号 作为 key，以 房屋 ID 作为 value，存储到 HashMap 中

-   批量插入: MySQL insert 语句支持使用 values (),(),() 的方式一次插入多行数据，通过 mybatis foreach 结合 java 集合可以实现批量插入

-   EasyExcel 代替 poi, 注解方式读写 Excel

-   优化插入速度

    我使用了 values 批量插入代替逐行插入。每 30000 行拼接一个长 SQL、顺序插入。整个导入方法这块耗时最多。后来我将每次拼接的行数减少到 10000、5000、3000、1000、500 发现执行最快的是 1000

-   日志, info 日志 对比不打日志, 不打印日志耗时仅仅是打印日志耗时的 1/10

*   并行流, 榨干数据库的 CPU，利用网络 IO 的等待时间

```java
public class InsertConsumer {
    /**
     * 每个长 SQL 插入的行数，可以根据数据库性能调整
     */
    private final static int SIZE = 1000;

    /**
     * 如果需要调整并发数目，修改下面方法的第二个参数即可
     */
    static {
        System.setProperty("java.util.concurrent.ForkJoinPool.common.parallelism", "4");
    }

    /**
     * 插入方法
     *
     * @param list     插入数据集合
     * @param consumer 消费型方法，直接使用 mapper::method 方法引用的方式
     * @param <T>      插入的数据类型
     */
    public static <T> void insertData(List<T> list, Consumer<List<T>> consumer) {
        if (list == null || list.size() < 1) {
            return;
        }

        List<List<T>> streamList = new ArrayList<>();

        for (int i = 0; i < list.size(); i += SIZE) {
            int j = Math.min((i + SIZE), list.size());
            List<T> subList = list.subList(i, j);
            streamList.add(subList);
        }
        // 并行流使用的并发数是 CPU 核心数，不能局部更改。全局更改影响较大，斟酌
        streamList.parallelStream().forEach(consumer);
    }
}

```


# 16. java 监控系统设计

## 16.1. 检测哪些内容

-   当 java 运行一个应用，就会生成一个 JVM 的实例，而 java 应用则运行于此 JVM 实例中，当应用退出，JVM 实例也会关闭。启动多个 java 应用，也会启动多个 JVM 实例，它们不会相互影响
-   虚拟机主要有三大模块，
    -   一个类加载子系统（Class Loader Subsystem,负责加载类），
    -   一个执行引擎（Execution Engine,负责执行类的方法指令和垃圾回收），
    -   一个运行时数据区（Runtime Data Areas,负责存放程序运行时的数据）
        -   方法区（存储如类信息，方法信息，引用，常量池等），
        -   堆（存储类实例对象和数组），
        -   java 栈（以栈方式存放以帧为单位保存线程的运行状态帧），
        -   程序计数器（每一个线程都有它自己的程序计数器，表示下一条将被执行指令的“地址”）

java 应用启动流程就是通过类加载子系统加载相关的类，然后把相关数据如类信息，方法等存到方法区中，实例化相关的类存储在堆中，程序运行位置则是每个线程使用计数器来指定。方法区和堆是线程共享的，程序计数器及 Java 栈是线程私有的。

运行时数据区是 java 应用运行时的监测区域，其中各个区域的内存情况，特别是堆的内存使用情况，是重点区域。堆还会分年轻代、年老代及 Metaspace，垃圾回收器会进行分代回收。通过它的回收情况监测，可以检测到是否存在内存泄漏，而 java 栈则与线程有关，线程的运行状态又与 CPU 相关，因此 java 栈的监测可以知道 CPU 占用过大的问题，同时方法区和 java 栈的占用内存大小也是一个监测的指标

## 16.2. 如何监控

### 16.2.1. 程序内置监测

打印日志

另一方面可以输出系统属性 System.getProperties()及 System.getProperty()

对于 Spring Boot 应用，还可以使用 actuator 来监测程序运行情况

### 16.2.2. jdk 自带可视化工具

在 windows 平台下，jdk 还提供了可视化监测工具，以更直观，更方便的方式对 java 应用运行状况进行监测。这两款工具分别是 jconsole 和 jvisualvm，在 jdk 下的 bin 目录下可以找到。它们均可监测本地及远程的 java 应用，包括堆使用情况，线程使用，cpu 使用，类加载情况，gc 情况，jvisualvm 还可以生成相应的堆和线程快照，同时还可以使用相应的插件，以便于进一步分析。

### 16.2.3. jdk 自带命令行工具

-   jps 查看 java 进程 ID
-   jinfo 查看及调整虚拟机参数
-   jmap 查看堆(heap)使用情况及生成堆快照
-   jstack 查看线程运行状态及生成线程快照
-   jstat 显示进程中的类装载、内存、垃圾收集等运行数据。

### 16.2.4. 第三方工具

-   MAT 是 eclipse 的内存分析插件，通过 MAT 可以对 dump 出来的堆快照进行分析，并且辅助分析内存泄露原因，快速的计算出在内存中对象的占用大小，垃圾收集器的回收工作情况，并可以通过报表直观的查看到可能造成这种结果的对象。
-   BTrace 是是 sun 推出的一款 Java 动态、安全追踪（监控）工具，可以在不停机的情况下监控系统运行情况，并且做到最少的侵入，占用最少的系统资源。特别适用在生产环境下对 java 应用进行监测，问题排查。
-   Arthas 是阿里开源的在线 Java 诊断工具，同样可以在不停机情况监控系统，包括内存情况，线程情况，GC 情况，运行时数据，也可以监测方法参数、返回值，异常返回等数据，堪称神器，在生产环境下使用非常方便。


## 16.3. 案例 生鲜电商监控平台

https://mp.weixin.qq.com/s/9E6tdnPXHEtAeI2DO1KTdw

# 17. 消息推送系统 IM 系统

im系统常用相关协议，如：xmpp，mqtt，pb等

mosquito

https://zhuanlan.zhihu.com/p/37993013
TODO

# 18. 流程引擎系统

https://blog.csdn.net/herriman/article/details/51815925
https://blog.csdn.net/WSRspirit/article/details/81412344


# 19. 权限系统

- 集中式认证服务, 认证中心提供一个认证凭据, 各个子系统可以通过这个凭据生成自己子系统的凭据
- 基于角色的权限模型 RBAC(Role-Based Access Control), 角色是权限的集合, 权限是操作的集合


# 20. 日志采集系统

https://mp.weixin.qq.com/s/n2LsrWWsP1ALeLtOYl68XQ
TODO

```

我们的实时日志量还是比较大的, 在高峰时期 (因为 根据经济作物的周期, 无人机作业有一定的季节性 ) 每天的日志量会达到百万级; 
然后要保证延迟控制在分钟级别 (也就是最多过去一分钟, 我就能够在系统查到刚刚的日志)
还要支持水平拓展

日志收集系统是作我们公司的基础服务来提供, 后面可能不止是给农田管家一条业务线使用, 
当然目前是只有这一条业务线, 我们计划是能支持多业务线的, 只需要堆机器就行了

我们选型 (也就是在找技术方案) 的时候, 首先当然是看到了很出名的 elk, 在线上 server 上放 logstash agent 采集日志, 保存到 es, 建立倒排索引, 通过 kibana 作为es 的客户端界面搜索展示
但是和我们的实际情况以对比, 发现有一些问题, 
首先是我们希望 logstash 能够支持监控, 实时能够知道 agent 的状态, 工作的怎么样 , elk 没有提供这样的选项, (现在不知道支持了监控没有, 我好久没用了)
 他是一套很重也很成熟的解决方案, 但是另外一方面来说定制开发比较麻烦, 而我们有一些定制化的需求
另一个问题是 (也不能说问题, 就是不能很好的匹配我们要求), 那就是每增加一个业务线/新的机器, 需要运维人员去手动修改配置, 做不到自动化

基于前面的原因, 我们最终选定的方案是这样:

我们自己参照 logstash 实现定制了 log agent, 部署到服务所在的节点, 实时读取日志, 发送到 kafka, 然后有一个程序我们成为 transfer 从 kafka 读取日志, 存储到 es ( 这里我们留了接口, 后续业务量进一步增长, 会准备上 storm/hadoop做流处理还有日志分析), 然后通过 kibana 展示查看, 使用 etcd 来管理配置, 可以实时通知 log agent, 做到类似热加载的效果
```

https://www.bilibili.com/video/BV1Df4y1C7o5?p=5

存在的问题:

- 麻烦, 运维成本很高, 每增加一个业务线或者增加一个日志收集项, 都要手动修改配置
- logstash 没有监控, 没法知道准确的状态, 崩了也不知道
- 开源对定制开发和维护不友好

新的选型架构:

log agent -> kafka -> transfer -> es (storm/Hadoop) -> kibana -> browser

(使用  etcd 管理配置)

# 21. 开放 api 平台 

open api

http://www.woshipm.com/pd/1930150.html

https://timyang.net/sns/open-api-practice/

https://easydoc.net/posts/api-safe/

https://antonioshen.gitbooks.io/openapi/content/

https://segmentfault.com/a/1190000015904390

https://v2ex.com/t/609802

# 22. SaaS 平台


## 22.1. 概念


software as a service, 是一种软件交付方式

> 通过 Internet 提供软件的模式，厂商将应用软件统一部署在自己的服务器上，客户可以根据自己实际需求，通过互联网向厂商定购所需的应用软件服务，按定购的服务多少和时间长短向厂商支付费用

### 22.1.1. Pros and Cons

优点:

- 交付方便, 租户端无需下载任何的升级包或者修复补丁

- 付费机制灵活

缺点:

- 租户没有软件控制权
- 数据不在租户自己手中

### 22.1.2. related roles

- saas service provider
- tenant: the company that have purchased the service, 每个租户的数据隔离, 系统独立
- user: employee of tenant

### 22.1.3. compare with PaaS IaaS

IaaS: 基础设施即服务：如CPU、Network、Disk和Memory等

PaaS: 平台即服务：如阿里云服务器和云数据库等

Saas: 软件即服务：阿里短信、阿里邮箱等, Office365, JaaS, slack


## 22.2. 如何做数据隔离

- 共享程序实例, 但是每个 tenant 有自己的 db 实例
  
  安全性最好, 数据恢复最容易，但成本较高

- 共享程序实例, 共享 db, 但每个 tenant 一个 schema,

  数据恢复比较困难，因为恢复数据库将牵涉到其他租户的数据 如果需要跨租户统计数据，存在一定困难

- 租户共享程序实例, 共享一个数据库、同一个 Schema, 只是表中增加 TenantID 多租户的数据字段;

  维护和购置成本最低, 数据备份和恢复最困难，需要逐表逐条备份和还原

## 22.3. 租户识别 (路由)

通过url识别租户

> 系统是给租户生成一个三级域名, 代码里面可以根据过来的域名，判断是那个租户然后初始化TenantContext.

> Nginx中rewrite实现二级域名、三级域名

## 22.4. 租户计费

比如那个租户购买了那些模块，一个月多少钱。租户可以创建最多的用户数。计费到期邮件提醒等功能。

计费方式一般有两种，周期性计费，类似月租方案，和使用量计费,用多少付多少。周期性计费比较简单

## 22.5. 灰度升级

SAAS付费企业客户对系统问题都特别敏感。为了减少升级可能出现问题的影响范围，一般都采用灰度升级策略

可以配置nginx 来根据域名做分发，

> 比如租户A（http://aaa.com）到实例1（版本1.0），租户B(http://bbb.com)到实例2(版本2.0). 当需要域名配置非常多的时候，nginx配置文档会乱。这块时候可以考虑使用nignx_lua来写一些扩展模块。



# 23. 优惠券系统

https://zhuanlan.zhihu.com/p/78790372
http://www.woshipm.com/pd/1056437.html

https://segmentfault.com/a/1190000005784383

https://www.cnblogs.com/vivotech/p/15117264.html

# 24. 撮合系统

## 24.1. 撮合交易引擎

https://juejin.cn/post/6844904013909983240

https://www.youtube.com/watch?v=-KSWPG8PAL4&list=PLW0LFiZNv2iKPn5V2Ajk6l9vGsJpGUW7H

https://www.liaoxuefeng.com/article/1452011784503329

https://www.cnblogs.com/zdz8207/p/qkl-CoinExchange-market.html

https://xueqiu.com/8121449782/139412894

```
工作职责：
1、参与撮合的开发，撮合系统是通过分析用户行为，建立用户之间的关系，撮合他们进行交易的系统。
2、分析用户行为，建立他们之间的关系，并研究用户推荐的算法；
3、开发后台程序，实现撮合系统的服务器端逻辑；
4、架构设计、模块开发、数据挖掘、算法研究都可能涉及到，根据个人的能力和兴趣安排具体的工作。
职位要求：
1、本科4年工作经验，硕士以上2年工作经验；
2、具有至少以下一种编程语言熟练编写的经验: Java, JavaScript(node.js)，Python，C，C++ 等；
3、有Hadoop、Hive数据挖掘经验者优先；
4、有大规模互联网后台服务开发经验者优先；
```

## 24.2. Hazelcast


https://www.modb.pro/db/323266 和 redis 区别

## 24.3. disruptor