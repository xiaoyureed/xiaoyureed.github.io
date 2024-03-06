---
title: Graceful sql
date: 2024-3-5
tags: [sql]
authors: me
keywords: [sql]
---

## tips

```sh

- 小表驱动大表
    有 user(100 条数据), order(10000条), 如下两条 sql 效果等同, 但是速度不同
    select * from order where user_id in (select id from user where status = 1)
        先执行 in 中的子查询, 数据量小, 作为条件查询, 速度快
    select * from order where exists (select 1 from user where order.user_id = user.id and status=1)
        先执行 exist 左边的主查询语句, 然后去和右边条件匹配, 左边数据量大, 查询慢

    inner join 时, MySQL 会自动选择两个表中的小表去驱动大表, 性能没问题
    left join 时, MySQL 会默认用左边的表驱动右边的表, 若左表数据量大, 会有性能问题


- 连接查询代替子查询
    子查询会额外创建临时表, 然后删除, 造成性能损耗

- 提升 group by 的效率
    select * from order group by user_id having user_id <= 200
    可以优化为:
    select * from order where user_id <=200 grouping by user_id

- do not use 'select *'
    不会走覆盖索引, 会有回表操作
    多出来的数据浪费网络 io

- union all 代替 union
    前者合并两个结果集后会有重复, 后者不会有重复但是损耗数据库性能, 重复数据可以在代码中处理


- 批量化, batch size 不是越大越好, 控制在 500 以内 
    减少和数据库交互次数

- 多用 limit

- in (xxx) 中的集合元素不可太多
    可在业务代码中做限制

- 海量数据分页 limit 1000000, 20     性能很糟糕
    可以 where id > 1000000 limit 20
    可以 where id between 1000000 and 1000020



```

## 索引

### 创建高性能索引

```sh

- 索引数量单表控制在 5 个左右 (高并发), 如果是普通系统, 超过也行
    太多了, 每次写数据时, 太耗时

    控制数量的手段:
        将单个索引换为联合索引
        将部分查询迁移到其他类型数据库中, 如 es, hbase

```

### 索引失效

```sh

- 没有满足 "最左前缀" 匹配原则, 造成失效

- like 模糊查询左边有 "%"

- 范围索引列没有放在最后

- 使用了 select *
    没法利用覆盖索引

- 索引列上有计算, 或者使用了函数

- 字符类型没有加引号




```

### 索引优化 -- explain 命令

```sh

explain 显示列

id : select 唯一标识
select type : select 类型
table : 表名字
partitions: 匹配的分区
type: 连接类型
possible_keys: 可能得索引选择
key: 实际用到的索引
key_len: 实际索引长度
ref : 与索引进行比较的列
rows: 预计要检查的行数
filtered: 按照条件过滤的行百分比
Extra: 附加信息
```