---
title: 关系型数据库表设计🌈
tags:
  - db
  - outline
date: 2017-06-15 23:35:42
toc_min_heading_level: 2
toc_max_heading_level: 5
---


<div align="center">
数据库设计, 表设计培训相关笔记整理
[数据库Sharding的基本思想和切分策略](https://blog.csdn.net/bluishglc/article/details/6161475)
</div>

<!--more-->

<!-- TOC -->

- [1. PowerDsinger](#1-powerdsinger)
    - [1.1. 设计发生变动怎么修改?](#11-%E8%AE%BE%E8%AE%A1%E5%8F%91%E7%94%9F%E5%8F%98%E5%8A%A8%E6%80%8E%E4%B9%88%E4%BF%AE%E6%94%B9)
    - [1.2. PD中1:n和0:n的问题](#12-pd%E4%B8%AD1n%E5%92%8C0n%E7%9A%84%E9%97%AE%E9%A2%98)
- [2. 表设计原则](#2-%E8%A1%A8%E8%AE%BE%E8%AE%A1%E5%8E%9F%E5%88%99)
    - [2.1. 主键](#21-%E4%B8%BB%E9%94%AE)
    - [2.2. 数据编码](#22-%E6%95%B0%E6%8D%AE%E7%BC%96%E7%A0%81)
    - [2.3. 选择容忍度高的设计](#23-%E9%80%89%E6%8B%A9%E5%AE%B9%E5%BF%8D%E5%BA%A6%E9%AB%98%E7%9A%84%E8%AE%BE%E8%AE%A1)
    - [2.4. 数据库设计范式and反范式](#24-%E6%95%B0%E6%8D%AE%E5%BA%93%E8%AE%BE%E8%AE%A1%E8%8C%83%E5%BC%8Fand%E5%8F%8D%E8%8C%83%E5%BC%8F)
    - [2.5. 数据库禁用高级功能](#25-%E6%95%B0%E6%8D%AE%E5%BA%93%E7%A6%81%E7%94%A8%E9%AB%98%E7%BA%A7%E5%8A%9F%E8%83%BD)
    - [2.6. 禁用子查询，限制多表连接查询](#26-%E7%A6%81%E7%94%A8%E5%AD%90%E6%9F%A5%E8%AF%A2%E9%99%90%E5%88%B6%E5%A4%9A%E8%A1%A8%E8%BF%9E%E6%8E%A5%E6%9F%A5%E8%AF%A2)
    - [2.7. 是否需要外键](#27-%E6%98%AF%E5%90%A6%E9%9C%80%E8%A6%81%E5%A4%96%E9%94%AE)
    - [2.8. 逻辑删除or物理删除](#28-%E9%80%BB%E8%BE%91%E5%88%A0%E9%99%A4or%E7%89%A9%E7%90%86%E5%88%A0%E9%99%A4)
    - [2.9. 字段设置tips](#29-%E5%AD%97%E6%AE%B5%E8%AE%BE%E7%BD%AEtips)
    - [2.10. 通用表处理](#210-%E9%80%9A%E7%94%A8%E8%A1%A8%E5%A4%84%E7%90%86)
    - [2.11. 索引添加原则](#211-%E7%B4%A2%E5%BC%95%E6%B7%BB%E5%8A%A0%E5%8E%9F%E5%88%99)
    - [2.12. 并发编辑的问题](#212-%E5%B9%B6%E5%8F%91%E7%BC%96%E8%BE%91%E7%9A%84%E9%97%AE%E9%A2%98)
    - [2.13. 历史版本设计](#213-%E5%8E%86%E5%8F%B2%E7%89%88%E6%9C%AC%E8%AE%BE%E8%AE%A1)
- [3. 数据库分库分表](#3-%E6%95%B0%E6%8D%AE%E5%BA%93%E5%88%86%E5%BA%93%E5%88%86%E8%A1%A8)
    - [3.1. 为什么需要分库分表](#31-%E4%B8%BA%E4%BB%80%E4%B9%88%E9%9C%80%E8%A6%81%E5%88%86%E5%BA%93%E5%88%86%E8%A1%A8)
    - [3.2. 两类拆分方法](#32-%E4%B8%A4%E7%B1%BB%E6%8B%86%E5%88%86%E6%96%B9%E6%B3%95)
        - [3.2.1. 垂直拆分](#321-%E5%9E%82%E7%9B%B4%E6%8B%86%E5%88%86)
            - [3.2.1.1. 针对表进行拆分](#3211-%E9%92%88%E5%AF%B9%E8%A1%A8%E8%BF%9B%E8%A1%8C%E6%8B%86%E5%88%86)
            - [3.2.1.2. 针对库进行拆分](#3212-%E9%92%88%E5%AF%B9%E5%BA%93%E8%BF%9B%E8%A1%8C%E6%8B%86%E5%88%86)
        - [3.2.2. 水平分库拆分](#322-%E6%B0%B4%E5%B9%B3%E5%88%86%E5%BA%93%E6%8B%86%E5%88%86)
            - [3.2.2.1. 只有一种-只能针对表拆分-水平分库分表](#3221-%E5%8F%AA%E6%9C%89%E4%B8%80%E7%A7%8D-%E5%8F%AA%E8%83%BD%E9%92%88%E5%AF%B9%E8%A1%A8%E6%8B%86%E5%88%86-%E6%B0%B4%E5%B9%B3%E5%88%86%E5%BA%93%E5%88%86%E8%A1%A8)
            - [3.2.2.2. 水平分库分表切分规则](#3222-%E6%B0%B4%E5%B9%B3%E5%88%86%E5%BA%93%E5%88%86%E8%A1%A8%E5%88%87%E5%88%86%E8%A7%84%E5%88%99)
    - [3.3. 实际拆分案例](#33-%E5%AE%9E%E9%99%85%E6%8B%86%E5%88%86%E6%A1%88%E4%BE%8B)
    - [3.4. 拆分后面临的问题](#34-%E6%8B%86%E5%88%86%E5%90%8E%E9%9D%A2%E4%B8%B4%E7%9A%84%E9%97%AE%E9%A2%98)
    - [3.5. 这些问题怎么解决](#35-%E8%BF%99%E4%BA%9B%E9%97%AE%E9%A2%98%E6%80%8E%E4%B9%88%E8%A7%A3%E5%86%B3)
        - [3.5.1. 全局主键生成策略](#351-%E5%85%A8%E5%B1%80%E4%B8%BB%E9%94%AE%E7%94%9F%E6%88%90%E7%AD%96%E7%95%A5)
            - [3.5.1.1. 几种不够好的生成策略](#3511-%E5%87%A0%E7%A7%8D%E4%B8%8D%E5%A4%9F%E5%A5%BD%E7%9A%84%E7%94%9F%E6%88%90%E7%AD%96%E7%95%A5)
            - [3.5.1.2. 一种优秀的生成策略](#3512-%E4%B8%80%E7%A7%8D%E4%BC%98%E7%A7%80%E7%9A%84%E7%94%9F%E6%88%90%E7%AD%96%E7%95%A5)
            - [3.5.1.3. twitter的分布式自增id算法](#3513-twitter%E7%9A%84%E5%88%86%E5%B8%83%E5%BC%8F%E8%87%AA%E5%A2%9Eid%E7%AE%97%E6%B3%95)
    - [3.6. 有哪些现成的解决方案](#36-%E6%9C%89%E5%93%AA%E4%BA%9B%E7%8E%B0%E6%88%90%E7%9A%84%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88)
        - [3.6.1. sharding-jdbc](#361-sharding-jdbc)
- [4. 数字签名实现数据库记录防篡改](#4-%E6%95%B0%E5%AD%97%E7%AD%BE%E5%90%8D%E5%AE%9E%E7%8E%B0%E6%95%B0%E6%8D%AE%E5%BA%93%E8%AE%B0%E5%BD%95%E9%98%B2%E7%AF%A1%E6%94%B9)

<!-- /TOC -->

# PowerDsinger

##使用过程应该是这样:

1. 首先出CDM（Concept Data Model，概念数据模型）
2. 根据实际的数据库类型, 由CMD导出PDM(Physical Data Model，物理数据模型)
3. 将PDM导入数据库
4. 导出对应数据库文档供开发者使用

在CDM设计过程中, 只做最基础的工作, 在转换到pdm时能交给pd处理的东西(约束/关系/主外键等等)就不要管了, pd处理不了的才手动处理 ,这样设计工作会更高效省时，最终的设计成果也会更规范。 

## 设计发生变动怎么修改?

开发中可能由于初始设计失误, 表结构, 字段需要修改, 分2种情况

1. 大改(这种情况不应该出现), 比如因为业务变动表和表的引用关系变化

    推荐在PD中修改PDM，然后重新生成SQL脚本在数据库中执行.(当然表没有变化的sql就无需执行了)

2. 小改(比如有新增业务的情况要新建些表，有拿掉部分业务的情况可能会删除些表，还有更常出现的是增删改部分表的部分字段。)

    对于简单的增删改些字段或业务变动不大的情况，建议直接在数据库中对表进行修改, 然后通过pd菜单中的Database--> Update Model from Database 连接数据库逆向更新PDM, 使PDM和最新的数据库结构保持一致，而后再生成最新的数据库文档

    注: 使用逆向更新时, 数据库删除字段不会被更新到pdm, 新增/修改的字段才会被更新到pdm.

## PD中1:n和0:n的问题

PD中对关系的定义很详细, 比如

*   one to one----- pd分了2种, must have one and only one(a有且仅有一个b与之对应)和may have at most one(a可能对1个b或0个b)
*   one to many ----must have one or more(有1个或多个对应) 和 may have one or more(可能有1个或多个或0个对应)
*   many to many----需要借助中间表实现, 分解成2个one to many, 类似可以分成严格多对多(eg: 1个user至少有1个role, 1个role至少属于一个user)和模糊多对多(一个user可以没有role, 一个role也可以不属于任何人)

其实对one-to-many和many-to-many进行细化意义不大, 因为无论是否细化, 前者都需要进行主外键关联, 后者都需要关系中间表, 而对于one to one的细化则有意义, 如订单和取消原因(可以是1:1或1:0), 如果是严格的一对一, 取消原因可以整合到订单表而无需另外存储.



# 表设计原则

## 主键

每个表都要有主键, 因为你不设主键的情况下，innodb也会帮你生成一个隐藏列，作为自增主键, 还不如主动设置一个主键, 还能用上主键索引，提高查询效率

主键要自增 还是 UUID看情况, 如果主键为UUID，统一命名为id，统一为char(32)类型。如果是自增, 就是 int类型

相较于自增主键类型，使用UUID会导致查询速度稍慢，可是用自增主键的话，想要同时支持多数据库就比较麻烦了，备份合并不同数据库中相同表数据也会出现冲突. 同时, 如果innodb 中的主键是自增的，那么每次插入新的记录，记录就会顺序添加到当前索引节点的后续位置，当一页写满，就会自动开辟一个新的页。如果不是自增主键，那么可能会在中间插入，就会引发页的分裂，产生很多表碎片！。

主键要使用单独的列, 不要有业务含义. 这是为了防止主键频繁变动, 同时保证有序, 总的来说就是减少数据页分裂, 减少磁盘碎片

## 数据编码

MySQL数据库编码设置为utf8(cmd中显示latin1)， SQLServer、Oralce可先采用默认设置

如果字段允许存储表情，则一定不能使用utf8，而是使用utf8mb4。

编码问题设置不妥当，数据库导入导出备份很容易出现乱码

## 选择容忍度高的设计

如表的某个字段表示时间, 尽量设为datetime类型精确到时分秒而不要仅仅date类型, 即使当前业务只需要精确到"日时", 这是为了方便后续拓展(比如后面有业务要求这个字段精确到"秒")

如对于某个业务, 开发时关系尚不明确表关系, 能一对多就不要一对一，能多对多就不要一对多, 这样开发的复杂度会增加，却消除了后面可能的修改扩展的隐患

## 数据库设计范式and反范式

1. 字段不可再分
2. 要有主键, 其他字段完全依赖此主键
3. 非主键字段必须互不依赖
4. 数据冗余字段要不要需要看情况

## 数据库禁用高级功能

禁止使用存储过程、触发器、函数、视图、事件等高级功能,数据库中只有表，数据库只做数据存储、标明业务关系,而具体业务逻辑相关的处理均由程序实现，比如分页、日志记录等等;这是为了增加后续的可维护性.

## 禁用子查询，限制多表连接查询

- 禁止使用子查询，子查询转换成关联查询。 ref: [子查询](https://blog.csdn.net/qq_38173850/article/details/71680763)

- 允许三张表以内的连接查询， 超过五张的禁止。

- 那么如何尽量避免多表连接查询? `需要有一定的数据冗余`; 如: 从表中除了有引用主表主键的外键字段外，还要有一个或多个字段存放主表中的关键信息, 需要注意的是, 这几个冗余的字段一定要慎重决定, 因为冗余字段会增加维护难度 

    - eg：类似情况经常出现在字典相关信息的存取中, 一般只在业务表中存储字典编码, 展示时根据编码获取字典文本, 核心业务表的字典字段比较多, 可以考虑同时存储字典编码和字典文本以避免部分连接查询

    - 很难找到一种两全其美的办法，既能避免数据冗余，又能让程序在执行读和写动作时都方便高效, 使用这种设计原则怎样找到平衡呢? 通常, 是在数据的准确性允许，跨表查询又复杂（从表外键较多）的业务模块,采用 外键 + 冗余字段；而在对数据显示的同步性、准确性有严格要求，跨表查询也相对容易（从表外键较少）的业务模块,不设外键以外的附加字段、而使用关联查询的方式获取完整数据信息 

## 是否需要外键

业务表之间实现外键关联有两个方法, 一是直接通过数据库设置, 二是在app 的应用层管理相关的外键逻辑; 

那么如何决定采用哪种方式? 可以根据如下几条原则:

*  用户量大，并发度高的场景, 不适合通过数据库设置外键, 而适合通过app应用层管理外键关系. 因为此时数据库服务器很容易成为性能瓶颈，尤其受IO能力限制，且不能轻易地水平扩展, 若是把数据一致性的控制放到事务中(也即让应用服务器承担此部分的压力), 可以实现轻松的水平伸缩.

*  用户量少, db数据量不大, 此时可以使用数据库建立外键, 因为此时数据库服务器的性能不是问题, 通过此种方式, 可以直接通过数据库实现表与关联表之间的数据一致性和更新, 而不必通过编码实现

*  使用外键与否，看你使用的框架是否有足够的事务管理能力, 如果足够，那么应该尽量避免设置外键, 因为app server 比 db server 便宜，而且拓展容易


## 逻辑删除or物理删除

如果平时做好数据备份工作，还是可以使用物理删除的; 但是软件复杂到一定程度为了保证数据安全和完整性使用逻辑删除是必然的

但是 逻辑删除坏处:

* 程序编写带来许多麻烦, 如 所有的查询方法都需要额外加上is_active=’0’的判断条件

* 如果某字段要求唯一, 且有唯一约束(如用户表中的登录名字段), 设置为逻辑删除的话, 一旦有新的同名记录, 会无法插入; 也许你会说撤销唯一性约束不久行了吗, 如果撤销唯一性约束, 每次插入都要立即查询一次是否有未删除的同名记录在， 得不偿失

* 会有大量无效数据产生, 如何处理这些逻辑删除的数据? 定期将逻辑删除的数据转移到另外的表中, 使用脚本定期彻底删除逻辑删除的数据，如何叠加备份这些删除的数据？又是个问题

## 字段设置tips

数据库字段类型如下: 字符、数字、日期、二进制



- 表中应该尽可能避免可为NULL的列，且尽可能显示设置默认值，尤其是被索引的列。

    因为在MySQL数据库中，空值是不占用空间的，而NULL其实是占用空间的, 而且, MySQL表的列中包含NULL的话，该列就不会包含在索引中，也就是说使用索引是无效的, 当然如果业务有需求表示"未初始化", 还是可以有null的

- 除了 timestamp、datetime等字段, 应尽量设置默认值, 实体类中的属性也要设置默认值

- 如果一张表有些字段并不是必须的, 可分流到子表中存储, 这样可以避免很多可为NULL或空值的列, 但也要合理取舍, 因为这样会使得记录的维护变得麻烦.(订单（会诊单）这种表，取消、退回、安排这些字段的信息都不是必须有的，可以分流到子表中存储,不要让某张表过分臃肿)

- text, blob字段: 除非要保存文章内容， text字段尽量少用，如果要用能拆到冗余表中最好;对于图片、文档等附件数据库中只保留原始文件名和存储路径;禁止使用blob类型保存大文本、附件、图片等

- 对于 int 类型。

    - 整数类型有可选的 **UNSIGNED ** 属性，表示不允许负值，这大致可以使正数的上限提高一倍

    -  INT(11), 对大多数应用这是没有意义的：它不会限制值的合法范围, 只是规定了查询工具 显示字符的个数

- 对于小数, 禁止使用float、double类型，建议使用decimal替代, 对应于Oracle的number 类型; decimal(a,b)表示数字整数部分和小数部分共a位, 其中小数部分b位, a最大38, b默认是0(比如decimal(5,2)规定了存储的值将不会超过5位数字，并且小数点后面有2位数字。)也可 int 用类型然后数值乘以倍数后存入

- 节省空间的设计

    - 能用int类型的就不用char类型，能用char类型就不用varchar类型，能用varchar(20)的就不用varchar(25),主键要求用UUID，那就统一为char(32) 
    
        VARCHAR(5)和VARCHAR(200)存储'hello'的空间开销是一样的, 但是 内存开销不是一样的, 更长的列会消耗更多的内存

        (varchar类型虽然根据实际长度进行存储，但内存分配则是根据指定长度，不合理的长度设计会导致内存的不合理占用。)

    - 字段定义的长度对索引也有较大影响, MySQL数据库索引存储的长度都是定义的长度，不是实际字符的长度, 所以MySQL在索引上会浪费大量的空间保存字符串。

- 字段的通用设计

    - 日期时间类字段: 推荐datetime, 即使是生日这种只存储到年月日的也推荐使用datetime而非date, 为的是使得颗粒度最小, 方便拓展

    - 保存手机号的字段，用varchar(20)就已经足够了

    - 保存Boolean类型，使用tinyint就够了，而不需要设计为int

    - 网络ip字段: 推荐varchar

    - 备注字段： 推荐所有表都保留这个字段, 为前端展示预留拓展空间, varchar(200) 100个中文字符

    - 排序字段: 推荐小数相关类型, 如decimal, 方便修改排序, 中间插入等等

## 通用表处理

数据字典表: 通用的如下


系统日志表: 一部分是系统登录日志，一部分是用户操作日志，一部分是运行异常日志(这部分可存储在文件中)



如果日志表设计合理, 传统的设计中每个表的`create_time、create_user、update_time、update_user`字段均可以去掉(核心业务表还是需要)

程序实现中有几个问题注意: 

* 登录日志中的登出时间的计算
* 非登录用户的查询记录不必记录, 只记录`搜索记录`

权限表: 由高到底大致分这几个级别：系统级、模块级、菜单级、页面级、控件级、数据级。

## 索引添加原则

索引是一个单独的、物理的数据库结构，它是某个表中一列或若干列值的集合和相应的指向表中物理标识这些值的数据页的逻辑指针清单

对于Oracle来讲，百万级数据量一般不会出现明显性能问题的，无需做特别的优化；MySQL的话，超过五十万条数据就有点卡了，超过一百万就得做优化了。对于诸多中小型的企业内部应用系统，如果数据量未达到这个级别而出现查询性能问题的，多是因为程序或者开发模式、架构、框架、编码细节或SQL语句中肯定有特别不合理的地方, 小型项目不推荐手动添加索引, 而且大多数数据库是会自动给主键和有唯一约束的字段添加索引的。

如果确定需要添加索引, 需遵循如下原则: 

* 除了主键, 外键也需要创建索引
* 经常进行连接的列建立索引
* 在频繁进行排序或分组（即进行 GROUP BY 或 ORDER BY 操作）的列上建立索引。
* 不要索引blob/text 等字段，不要索引大型字段（有很多字符）, 浪费空间
* 不要索引常用的小型表, 因为不划算(对这些插入和删除操作的索引维护可能比扫描表空间消耗更多的时间。)
* 如果某字段经常处于sql中条件表达式中, 且值可能有很多, 则建立索引, 若可能值少(如性别字段, 只有男或女), 则不建立索引, 因为建立索引不但不会提高查询效率，反而会严重降低更新速度。
* 如果待排序的列有多个，可以在这些列上建立复合索引（Compound Index）

## 并发编辑的问题

唯一可以解决的方法是: 加入一个标识字段, datetime类型或数值型, 表示时间; app 在进入修改页面时, 进行一次查询, 将该对应的字段记录为time1, 编辑完成后, 点击提交按钮是再次查询该标识字段为time2, 比较time1和time2, 如果相同, 表示编辑期间, 该条记录没有并发编辑, 可以提交本次的修改, 同时该标识字段修改为time2; 如果time1和time2不同, 则表示编辑期间, 存在并发编辑, 当前修改动作作废不能提交.  

## 历史版本设计

和并发编辑的解决方案类似, 加入一个版本号字段, 可以是datetime类型，也可以是int类型, 每进行数据操作时，都是创建一个新的版本，版本是只增不减的, 历史数据应该存储到另外专门存储历史的表中, 不要和最新数据混存在同一张表里

另外一种方式是: 给业务表新增一个字段, 文本类型, 专门存储历史信息


# 数据库分库分表

https://mp.weixin.qq.com/s/IWytJhcxth4ig2qrqdQjvg 演进过程稿

https://mp.weixin.qq.com/s/l7BNUj8kOflzrtXcSNf_CA 谨慎使用分库分表


## 为什么需要分库分表

刚开始我们只用单机数据库就够了，随后面对越来越多的请求，我们将数据库的写操作和读操作进行分离， 使用多个从库副本（Slaver Replication）负责读，使用主库（Master）负责写， 从库从主库同步更新数据，保持数据一致。架构上就是数据库主从同步。 从库可以水平扩展，所以更多的读请求不成问题

但是当用户量级上来后，写请求越来越多，该怎么办？加一个Master是不能解决问题的， 因为数据要保存一致性，写操作需要2个master之间同步，相当于是重复了，而且更加复杂。

这时就需要用到分库分表（sharding），对写操作进行切分; 

本质还是解决数据量太大的问题, 可分为 3 个层次, 层层递进:

- 用户请求量太大: 因为单服务器TPS，内存，IO都是有限的。 解决方法：分散请求到多个服务器上

- 单库太大(表太多): 单个数据库处理能力有限；单库所在服务器上磁盘空间不足；单库上操作的IO瓶颈 解决方法：切分成更多更小的库 - 垂直切分

- 单表太大: RUD都成问题；索引膨胀，查询超时 解决方法：切分成多个数据集更小的表。 - 水平切分

## 两类拆分方法

通常是结合使用, 示意图:





### 垂直拆分

#### 针对表进行拆分

垂直分表

基于列字段进行的。一般是表中的字段较多，将不常用的， 数据较大，长度较长（比如text类型字段）的字段拆分到“扩展表“。 一般是针对那种几百列的大表，也避免查询时，数据量太大造成的“跨页”问题。

#### 针对库进行拆分



垂直分库

针对一个系统中的不同业务进行拆分, 一个库拆分成多个库, 比如用户User一个库，商品Producet一个库，订单Order一个库. 切分后，要放在多个服务器上，而不是一个服务器上

### 水平(分库)拆分

#### 只有一种-只能针对表拆分-水平分库分表



水平分库分表

水平拆分, 只是针对表来说的, 针对数据量巨大的单张表（比如订单表），按照某种规则（RANGE,HASH取模等），切分到多张表里面去, 然后将这些表均匀的分布到多个库中(也可以只放在一个库中, 但是不推荐).

这些切分后的表字段相同, 只是数据集不同.

#### 水平分库分表切分规则

- RANGE - id从0到10000一个表，10001到20000一个表；优点：可部分迁移; 缺点：数据分布不均, 会有"热点数据"访问的问题

- HASH取模 -  取用户id，然后hash取模，分配到不同的数据库上。优点：数据分布均匀.缺点：数据迁移的时候麻烦

- 时间 - 按照时间切分，就是将6个月前，甚至一年前的数据切出去放到另外的一张表，因为随着时间流逝，这些表的数据 被查询的概率变小，所以没必要和“热数据”放在一起，这个也是“冷热数据分离”。

- 地理区域 - 比如按照华东，华南，华北这样来区分业务，七牛云应该就是如此。

## 实际拆分案例

https://blog.csdn.net/bluishglc/article/details/7696085
https://zhuanlan.zhihu.com/p/27363448
[拆分前后性能对比演示(golang实现)](https://zhuanlan.zhihu.com/p/42684523)

## 拆分后面临的问题

- 事务支持 - 分库分表后，就成了分布式事务了。

    - 如果依赖数据库本身的分布式事务管理功能去执行事务，将付出高昂的性能代价

    - 如果由应用程序去协助控制，形成程序逻辑上的事务，又会造成编程方面的负担(原理:将一个跨多个数据库的分布式事务分拆成多个仅处于单个数据库上面的小事务，并通过应用程序来总控各个小事务。)。

- 多库结果集合并(跨节点的count,order by,group by以及聚合函数问题) - 分别在各个节点上得到结果后在应用程序端进行合并

- 跨库join - 无法join位于不同分库的表，也无法join分表粒度不同的表; 粗略的解决方法： 

    - 普遍做法是分两次查询实现。在第一次查询的结果集中找出关联数据的id,根据这些id发起第二次请求得到关联数据

    - 全局表：基础数据，所有库都拷贝一份。 
    
    - 字段冗余：这样有些字段就不用join去查询了

- 全局主键生成

## 这些问题怎么解决

### 全局主键生成策略

https://www.cnblogs.com/pangguoming/p/7874369.html

一旦数据库被切分到多个物理结点上，我们将不能再依赖数据库自身的主键生成机制

#### 几种不够好的生成策略

- UUID - 使用UUID作主键是最简单的方案，但是缺点也是非常明显的。由于UUID非常的长，除占用大量存储空间外，最主要的问题是在索引上，在建立索引和基于索引进行查询时都存在性能问题

- 结合数据库维护一个Sequence表：此方案的思路也很简单，在数据库中建立一个Sequence表

    ```sql
    CREATE TABLE `SEQUENCE` (
	`tablename` varchar(30) NOT NULL,
	`nextid` bigint(20) NOT NULL,
	PRIMARY KEY (`tablename`)
    ) ENGINE=InnoDB 
    ```

    这是基于 数据库自身的主键生成机制 的改进 ------------ 每当需要为某个表的新纪录生成ID时就从Sequence表中取出对应表的nextid,并将nextid的值加1后更新到数据库中以备下次使用

    缺点很明显: 由于所有插入任何都需要访问该表，该表很容易成为系统性能瓶颈，同时它也存在单点问题，一旦该表数据库失效，整个应用程序将无法工作。有人提出使用Master-Slave进行主从同步，但这也只能解决单点问题，并不能解决读写比为1:1的访问压力问题。

#### 一种优秀的生成策略

reference: https://blog.csdn.net/bluishglc/article/details/7710738

建立两台以上的数据库ID生成服务器，每个服务器都有一张记录各表当前ID的Sequence表，但是Sequence中ID增长的步长是服务器的数量，起始值依次错开，这样相当于把ID的生成散列到了每个服务器节点上。例如：如果我们设置两台数据库ID生成服务器，那么就让一台的Sequence表的ID起始值为1,每次增长步长为2,另一台的Sequence表的ID起始值为2,每次增长步长也为2，那么结果就是奇数的ID都将从第一台服务器上生成，偶数的ID都从第二台服务器上生成，这样就将生成ID的压力均匀分散到两台服务器上，同时配合应用程序的控制，当一个服务器失效后，系统能自动切换到另一个服务器上获取ID，从而保证了系统的容错

#### twitter的分布式自增id算法

http://www.cnblogs.com/relucent/p/4955340.html



## 有哪些现成的解决方案

reference: https://blog.csdn.net/bluishglc/article/details/7766508

目前市面上的分库分表中间件相对较多，其中基于代理方式的有MySQL Proxy和Amoeba， 基于Hibernate框架的是Hibernate Shards，基于jdbc的有当当sharding-jdbc， 基于mybatis的类似maven插件式的有蘑菇街的蘑菇街TSharding， 通过重写spring的ibatis template类的Cobar Client。

### sharding-jdbc

https://github.com/yinjihuan/sharding-jdbc

# 数字签名实现数据库记录防篡改

https://blog.csdn.net/yztezhl/article/details/80136293
http://www.ruanyifeng.com/blog/2011/08/what_is_a_digital_signature.html

