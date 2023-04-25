---
title: 量化交易
tags: [quant]
date: 2021-05-02 22:27:26
toc_min_heading_level: 2
toc_max_heading_level: 5
---

https://github.com/leiguorui/programming-video-tutorials 视频教程

https://github.com/We-Hack-Studio/nuts 坚果量化 - 数字货币量化交易系统。

https://github.com/Rockyzsu/stock 30天量化交易

https://www.zhihu.com/question/362032831

https://github.com/thuquant/awesome-quant



<!--more-->

负责使用 Rust、Python 对接与数字货币（比特币，以太坊等）交易所（火币，OKEX，币安等）有关的API
设计和实施高频交易平台，从交易平台收集报价以及向交易平台分发订单，维护订单状态

• 通过使用网络和系统编程等技术以最大程度地减少延迟


有弹性且非常快的内部实时系统, 低延迟系统

具有统计 / 机器学习 / 网格计算方面的经验

能够熟练使用Rust开放框架（例如Futures，Tokio，Diesel，Serde等）

----

量化交易系统相关的交易自动化研发工作
•	工作地点：北京
•	岗位职责
1.	量化交易系统相关的交易自动化研发工作，包括但不限于：
1.1.	交易系统的测试、验证、回测、调优等的python解决方案；
1.2.	交易系统周边的通讯、传输、分析、统计、预警、运维等自动化需求；
1.3.	因子计算、模型训练、仓位管理等支持平台的搭建；
1.4.	交易系统的其他相关辅助工具。
•	 任职要求
1.	海内外知名高校，本科及以上学历，计算机、软件、统计等专业背景；
2.	良好编程习惯，快速学习能力；热爱编程，喜欢钻研技术；
3.	3年以上python开发经验，熟练使用linux；
4.	掌握django、pandas、flask、sqlalchemy、numpy、celery等常见库；
5.	熟悉Redis、PostgreSQL等流行中间件；supervisor、docker等常用工具；
6.	了解RESTful、Protobuf等通用标准。
•	加分项
1.	熟悉金融或量化交易业务，有相关工作经历；
2.	搭建过量化交易系统，或有币圈工作经历；
3.	使用过vnpy、ccxt等量化交易系统框架；
4.	熟悉C++、Rust或Go。


# 构建高并发低延迟系统

或者也叫低延时系统

## 低延时总体原则

```
合适的语言
脚本语言解释执行, 首先放弃
考虑使用 Java,、Scala、C++11或者Go

尽量使用内存
I/O会增加延迟，所以要确保所有的数据都在内存中, 所以需要支持内存数据持久化, 创建持久日志的工具有Bitcask、 Krati、LevelDB 和 BDB-JE
也可以通过  Redis 或者MongoDB 这种内存数据库自带的持久化机制

减少线程上下文切换
应该将线程数量减少到系统内核数量，然后各个线程运行于各自的内核中。

有序读取
避免使用链表和对象数组, 最简单的方法就是尽量使用原始数据类型或者结构的数组

批量处理写任务

引入缓存

尽可能使用无锁编程

尽可能异步

尽可能并行

```

延时降低了，系统并发自然也就提高了, 为了进一步高并发, 还可以

- IO与任务分离, 类似  nginx
- 引入队列 (这样这个系统的吞吐量就是系统中正在处理的请求加上队列中等待的请求)
- 集群
