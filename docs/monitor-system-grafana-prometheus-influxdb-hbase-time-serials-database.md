---
title: monitor-system-grafana-prometheus监控🖥
tags: 
  - grafana
  - prometheus
  - influxdb
  - clickhouse
date: 2020-10-03
toc_min_heading_level: 2
toc_max_heading_level: 5
---

https://github.com/questdb/questdb java 时序数据库

https://github.com/Kalasearch/grafana-tutorial https://kalasearch.cn/blog/grafana-with-prometheus-tutorial/
https://lingchu.me/post/158.html
https://www.cnblogs.com/williamjie/p/9448904.html

https://coolshell.cn/articles/21589.html 陈浩 分享

K8s, Kafka, prometheus, grafana, splunk

<!-- more -->

- [Spring Boot Actuator 整合 Prometheus](#spring-boot-actuator-整合-prometheus)
- [grafana](#grafana)
- [influxdb序数据库](#influxdb序数据库)
    - [为什么使用 influxdb](#为什么使用-influxdb)
    - [什么是时序数据库](#什么是时序数据库)
        - [时序数据的特征](#时序数据的特征)
        - [开源方案](#开源方案)
        - [influxdb 和 promethus 区别](#influxdb-和-promethus-区别)
    - [核心数据模型](#核心数据模型)
    - [数据类型](#数据类型)
    - [Retention Policy（RP） 数据保留策略](#retention-policyrp-数据保留策略)
    - [Shard Group 数据切片组](#shard-group-数据切片组)
    - [指令语法](#指令语法)
        - [管理相关命令](#管理相关命令)
        - [写入语法](#写入语法)
        - [查询语法](#查询语法)
        - [基本计算](#基本计算)
        - [aggregation聚合函数](#aggregation聚合函数)
        - [选择函数](#选择函数)
        - [continuous query（连续查询，简称CQ）](#continuous-query连续查询简称cq)
        - [插入数据](#插入数据)
- [prometheus](#prometheus)
- [hbase](#hbase)
- [Clickhouse](#clickhouse)


# Spring Boot Actuator 整合 Prometheus

https://mp.weixin.qq.com/s/MWQImwMhcFglmHZ4lIcxVA

https://mp.weixin.qq.com/s/wkfIQc3IQD_6y7eCsGd_Rw AlertManager

https://mp.weixin.qq.com/s/40ULB9UWbXVA21MxqnjBxw Node Exporter

https://mp.weixin.qq.com/s/GImvM_F2XlMjO0a5xnJuFg

# grafana

ELK + Telegraf + Grafana
推荐 ELK，画图这块可以看 Grafana 看能不能满足，不行的话自己写也可以，ES 有 API, 我们实现的一些思路，可以参考 https://blog.ops-coffee.cn/elk

# influxdb序数据库

## 为什么使用 influxdb

```

为什么要使用时序数据库, 普通的关系型数据库不行吗?

  用其他数据库也是可以用的，只是效率不同, 专门针对基于时间的大量高频数据优化的，其存储更小、查询更快

使用场景: 
用于 监控场景比如: 物联网系统记录设备运行数据, 互联网应用记录用户使用日志, 广告点击日志, 电商的交易记录

专门处理高写入和查询负载的时序数据库，用于存储大规模的时序数据并进行实时分析，包括来自DevOps监控、应用指标和IoT传感器上的数据。


```

## 什么是时序数据库

### 时序数据的特征

```
数据顺序追加

很少修改/删除, 只有增加/查询, 删除也是批量删除

冷数据需要定期归档

数据查询一般以一段时间为范围

业务操作不需要具备事务的能力
```



### 开源方案


- InfluxDB, 单机开源的时序数据库,由Go语言编写(v3 版本转到rust了), 分布式需要付费, 通过 grafana 进行仪表盘展示

    Influxdata的组合有：telegraf+Influxdb+Kapacitor+Chronograf

- TimescaleDB , 固定Schema，底层基于PG

- mongodb 分布式方案成熟
    - https://www.mongodb.com/blog/post/schema-design-for-time-series-data-in-mongodb 官方教程

- 涛思

- Clickhouse 不成熟

- OpenTSDB ,底层采用HBase作为存储

- Prometheus, 保存在内存数据库中，并且定时保存到硬盘上。需要远端存储来保证可靠和扩展性

    Promethues的组合有：exporter+prometheus server+AlertManager+Grafana



### influxdb 和 promethus 区别

```

InfluxDB仅仅是一个数据库, 使用上更灵活,  有类似 Mysql 中数据库, 表的概念
而 Prometheus 是一个附带数据库的监控系统，它不仅仅包含了时间序列数据库，还有的抓取、检索、绘图、报警的功能

 Prometheus 是基于 pull 的，InfluxDB 是基于 push 的





```


## 核心数据模型

```sh


- database：数据库



- 度量 （Metric 或者 Measurement）, 类似关系型数据库里的表（Table），代表一系列同类时序数据的集合

  例如为空气质量传感器建立一个 Table，存储所有传感器随时间变化的监测数据。



- 数据点Data Point: 数据源在某个时间产生的某个量测指标值（Field Value）称为一个数据点，

  类似 传统表的一行记录

    有三个组成部分:

    - 标签 Tag：描述数据源的特征，不随时间变化

        (Tag 由 Tag Key、Tag Value 组成，两者均为 String 类型), 
    
        可类比主键索引 (值为常量的表字段) (可能多个字段都是 tag), 会作为记录的主键, Tags组合用来唯一标识 metric


    - 时间戳 Timestamp：Timestamp代表数据产生的时间点，可以写入时指定，也可由系统自动生成；

        类比表字段， 有固定字段名 ”time“

        所有时间格式都是UTC （2015-08-18T00:00:00Z）

    - 量测值 Field：Field描述数据源的量测指标，通常随着时间不断变化

        例如传感器设备包含温度、湿度等Field；

        类比表字段


- 时间线 Time Series ：数据源的某一个指标随时间变化，形成时间线，Metric + Tags + 某个Field 组合确定一条时间线


    时序查询一般是这样: 通过 metric + tags 确定 查那个数据源的 series (时间线), 通过 field 确定查数据源的哪个属性的时间线

```

## 数据类型

```sh

浮点数  支持 field 
    sql 中的数字字符默认就是浮点型

整型    支持 field
    sql中的数字需要形如 xxxi, 如 2i ， 1i

字符串  支持 Measurement，tag key，tag value，field key，Field value

    sql 中需要使用双引号/单引号

布尔值  支持 field

    true， false ， sql 中无需引号

时间戳 支持 时间戳字段

    最小的有效时间戳是-9223372036854775806或1677-09-21T00:12:43.145224194Z。

    最大的有效时间戳是9223372036854775806或2262-04-11T23:47:16.854775806Z。

```

## Retention Policy（RP） 数据保留策略

```sh

核心作用有3个：

    指定数据的过期时间，(决定数据保留时间， 早于duration的数据将自动从数据库中删除)
    
    指定数据副本数量
    
    指定ShardGroup Duration。

RP是数据库级别而不是表级别的属性。这和很多数据库都不同。在创建数据库的时候会自动创建名为autogen的默认RP， 具有无限的存储时间并且复制系数设为1

每个数据库可以有多个数据保留策略，但只能有一个默认策略。

不同表可以根据保留策略规划在写入数据的时候指定RP进行写入, 如果没有指定任何RP，则使用默认的RP。




# 创建语法
# 其中retention_policy_name表示RP的名称，database_name表示数据库名称，duration表示TTL，n表示数据副本数。
# CREATE RETENTION POLICY ON <retention_policy_name> ON <database_name> DURATION <duration> REPLICATION <n> [SHARD DURATION <duration> ] [DEFAULT]
CREATE RETENTION POLICY "one_day_only" ON "water_database" DURATION 1d REPLICATION 1 SHARD DURATION 1h DEFAULT 

# 查看rp
SHOW RETENTION POLICIES [ON <database_name>]
```


## Shard Group 数据切片组

实现了数据分区, 根据 timestamp, 每个Shard Group只存储指定时间段的数据.

> 只是一个逻辑概念, 里面包含了大量Shard，Shard才是InfluxDB中真正存储数据以及提供读写服务的概念
> 不同Shard Group对应的时间段不会重合。比如2017年9月份的数据落在Shard Group0上，2017年10月份的数据落在Shard Group1上。
> 每个Shard Group对应多长时间是通过Retention Policy中字段”SHARD DURATION”指定的，如果没有指定，也可以通过Retention Duration（数据过期时间）计算出来

为什么需要将数据按照时间分成一个一个Shard Group? 

-  将数据按照时间分割成小的粒度会使得数据过期实现非常简单，InfluxDB中数据过期删除的执行粒度就是Shard Group，系统会对每一个Shard Group判断是否过期，而不是一条一条记录判断。

-  实现了将数据按照时间分区的特性, 查询是效率高, 类似二分查找

落在一个Shard Group中的数据又是如何映射到哪个Shard上呢？

- InfluxDB是根据hash(Series)将时序数据映射到不同的Shard，而不是根据Measurement进行hash映射，这样会使得相同Series的数据肯定会存在同一个Shard中，但这样的映射策略会使得一个Shard中包含多个Measurement的数据


## 指令语法

### 管理相关命令

```sh
# enter the cmd window
influx -port 8086

# InfluxDB 默认管理员账号：admin，密码为空
show users
create user "username" with password 'password'
create user "username" with password 'password' with all privileges
drop user "username"


# InfluxQL与SQL命令语法类似
CREATE DATABASE weiz_tes
SHOW DATABASES
DROP DATABASE weiz_test
USE weiz_test
SHOW MEASUREMENTS
DROP MEASUREMENT "measurementName"

# 查看序列
SHOW SERIES ON NOAA_water_database

# InfluxDB没有专门的创建表的命令，当插入一条数据point至某A表时，此A表会自动创建，并且表的格式、字段名、字段类型也由此条插入命令决定
# InfluxDB没有修改表的命令，但当插入一条新数据point至表A时，如果此point中的字段多于原A表的字段，会自动修改A表与此条插入数据的格式字段等一致。
#       如果新插入数据字段与表A完全不同则会插入失败。 

```

### 写入语法

```sh
# 新增一条数据，measurement为add_test, tag为name,phone, field为user_id,email
insert add_test,name=YiHui,phone=110 user_id=20,email="bangzewu@126.com"





将查询结果写入measurement

# 重命名数据库
# 反向引用语法（:MEASUREMENT）将源数据库中measurement的名字维持在目标数据库中不变
# GROUP BY *子句将源数据库中的tag保留在目标数据库中
 SELECT * INTO "copy_NOAA_water_database"."autogen".:MEASUREMENT FROM "NOAA_water_database"."autogen"./.*/ GROUP BY *

#  以下查询并不为tag维护序列的上下文，tag将作为field保存在目标数据库（copy_NOAA_water_database）中
SELECT * INTO "copy_NOAA_water_database"."autogen".:MEASUREMENT FROM "NOAA_water_database"."autogen"./.*/
```

### 查询语法

https://help.aliyun.com/document_detail/172144.html?spm=a2c4g.172139.0.0.6d84357dNoR1Ij

```sh
# 查看 tag 
show tag/field keys from device_temperature
show tag/field values from test with key="app"


SELECT "<field_key>","<field_key>"
SELECT "<field_key>","<tag_key>" 返回一个特定的field和一个特定的tag，当SELECT子句包含tag时，它必须至少指定一个field。
SELECT "<field_key>"::field,"<tag_key>"::tag        ::[field | tag]指定了字段是 field 还是 tag，使用这个语法是为了区分具有相同名字的field key和tag key。
# 语法::允许用户在查询中指定field value的数据类型 type可以是float，integer，string或boolean
SELECT_clause <field_key>::<type> FROM_clause

FROM <measurement_name>,<measurement_name>
FROM <database_name>.<retention_policy_name>.<measurement_name>
FROM <database_name>..<measurement_name>从用户指定的一个数据库并使用默认保留策略的measurement中返回数据


# group by仅是tag 不能是field
select * from test group by app

# 默认会统计到当前时间之前的记录
GROUP BY time(1h) # 间隔一小时分组聚合, # (或者是 time（1d）也行， 按照间隔一天进行分组聚合, time(5m) 间隔5分钟分组) 
GROUP BY *按所有tag对查询结果进行分组。
GROUP BY <tag_key>按指定的一个tag对查询结果进行分组。

GROUP BY <tag_key>,<tag_key>按多个tag对查询结果进行分组，tag key的顺序对结果无影响。


# 尽量用双引号， 如果标识符没特殊字符， 可以不用
SELECT "level description"::field,"location"::tag,"water_level"::field FROM "h2o_feet"

# 条件查询, 等号两边不能有空格, 字符串的 field value 用单引号
select * from host_cpu_usage_total [where xxx='yyy'] [order by time desc/asc]

# distinct的字段仅是field 不能是tag
select distinct(count) from test

# group by仅是tag 不能是field 
select * from test group by app


# 时间条件单引号
# or  是long类型的纳秒时间戳 (不加单位默认是纳秒， s 是秒)
# ms毫秒
# s秒
# m分钟
# h小时
# d天
# w星期

WHERE time >= '2018-06-18T12:00:00Z' AND time <= '2018-06-19T04:35:00Z'

# 时间计算 (注意空格)
WHERE time > '2015-09-18T21:24:00Z' + 6m

WHERE time > now() - 1h


秒级：
select * from disk where time >= 1542954639s and time <= 1542964713s
 
毫秒级:
select * from disk where time >= 1542954639000ms and time <= 1542964714000ms
 
纳秒级：
select * from disk where time >= 1542954639000000000ms and time <= 1542964714000000000ms

调整时区查询（北京时间）
select * from disk where time >= '2018-11-23 14:30:39' and time <= '2018-11-23 14:32:32' tz('Asia/Shanghai')


# 模糊查询

## =~/给定字符/ 包含指定字符的      =~/^给定字段/ 以指定字段开始的      =~/给定字段$/ 以指定字段结尾的
> select * from test where monitor_name =~/app/

# 分页
select * from test limit 2 offset 2

# 没有in的操作，但是有or
select * from test where monitor_name = 'test' or monitor_name ='app1'



# 嵌套

# 返回每个location中water_level的最大值的总和
 SELECT SUM("max") FROM (SELECT MAX("water_level") FROM "h2o_feet" GROUP BY "location")
```

### 基本计算

```sql

SELECT语句支持使用基本的运算符，例如：+、-、/、*和()等等。

-- 两个field key相加
SELECT field_key1 + field_key2 AS "field_key_sum" FROM "measurement_name" WHERE time < now() - 15m

-- 两个field key相减
SELECT field_key1 - field_key2 AS "field_key_difference" FROM "measurement_name" WHERE time < now() - 15m

-- 分组计算并将它们连接起来
SELECT (field_key1 + field_key2) - (field_key3 + field_key4) AS "some_calculation" FROM "measurement_name" WHERE time < now() - 15m

-- 计算查询中的百分比
SELECT (field_key1 / field_key2) * 100 AS "calculated_percentage" FROM "measurement_name" WHERE time < now() - 15m


```

### aggregation聚合函数

```sql


now() 本地服务器当前的纳秒级时间戳（timestamp）
-- 过去七天内
WHERE time > now() - 7d


group by time(1d) fill(<fill_option>)       fill() 可选，它会改变不含数据的时间间隔的返回值。
    任意数值：对于没有数据点的时间间隔，返回这个给定的数值。

    linear：对于没有数据点的时间间隔，返回线性插值的结果。

    none：对于没有数据点的时间间隔，不返回任何时间戳和值。

    null：对于没有数据点的时间间隔，返回时间戳，并且返回null作为该时间戳所对应的值，这跟默认的情况相同。

    previous：对于没有数据点的时间间隔，返回前一个时间间隔的值。



-- 计数
# count(field key) 返回一个（field）字段中的非空值的数量
select count(humidity) from weather



distinct()  和 distinct 



-- 求和
-- 计算百分比中使用了聚合函数， 那么查询中所有的数据都会用到聚合函数。您不能将聚合数据和非聚合数据混合在一起
-- 都需要一个GROUP BY time()子句
SELECT (sum(field_key1) / sum(field_key2)) * 100 AS "calculated_percentage" FROM "measurement_name" WHERE time < now() - 15m GROUP BY time(1m)


MEAN() 平均数
-- 返回measurement pet_daycare中cats数量和dogs数量的差异的平均值。
SELECT MEAN("difference") FROM (SELECT "cats" - "dogs" AS "difference" FROM "pet_daycare")


-- MEDIAN() 中位数



INTEGRAL(field_key， [unit])：积分函数， 返回field key对应的field value曲线下的面积。可指定单位微分的时间单位，如 1m， 默认以秒为单位



MODE(field_key)：返回field key对应的field value中出现频率最高的值。
MODE(*)：返回在measurement中每个field key对应的field value中出现频率最高的值。


方差 （最大值和最小值之差。）
SPREAD()


TDDEV(field_key)：返回field key对应的field value的标准差。

```

### 选择函数

```sql

BOTTOM(field_key,N)：返回field key对应的最小的N个值

TOP(field_key,N)：返回field key对应的最大的N个值。

FIRST(field_key)：返回field key对应的具有最早时间戳的field value。

LAST(field_key)：返回field key对应的具有最新时间戳的field value。

MAX(field_key)：返回field key对应的field value的最大值

MIN(field_key)：返回field key对应的field value的最小值。

PERCENTILE(field_key,N)：返回指定field key对应的第N个百分位数的field value。
-- 返回  water_level 前 5% 的数据行
SELECT PERCENTILE("water_level",5) FROM "h2o_feet"

SAMPLE(field_key,N)：返回指定field key对应的N个随机选择的field value。
```

### continuous query（连续查询，简称CQ）

一个InfluxQL查询，在数据库中自动地、周期性地运行。然后把查询结果写入到指定的measurement中。

连续查询要求在SELECT子句中有一个函数（function），并且必须包含一个GROUP BY time()子句

https://jasper-zhang1.gitbooks.io/influxdb/content/Query_language/continuous_queries.html



### 插入数据

```sh


# measurement为host_cpu_usage_total, tag为host_name,cpu_core, field为cpu_usage,cpu_idle。
# field如果是string类型，需要加引号, tag都是string类型，不需要引号将value包裹
insert host_cpu_usage_total,host_name=host1,cpu_core=core1 cpu_usage=0.26,cpu_idle=0.76




# batch 批量插入

# 从文本导入
influx -ssl -username <账号名称> -password <密码> -host <网络地址> -port 3242 -import -path=path/to/apple_stand.txt -database=apple_stand


```

# prometheus

https://github.com/thanos-io/thanos 集群部署

https://github.com/ccfos/nightingale 替代


# hbase

https://zhuanlan.zhihu.com/p/37964096 对比选型

https://zhuanlan.zhihu.com/p/145551967 简介

https://zhuanlan.zhihu.com/p/65994704


# Clickhouse
