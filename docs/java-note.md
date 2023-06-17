---
title: Java Core 笔记
tags:
    - java
date: 2014-04-02 21:08:53
# Display h2 to h5 headings
toc_min_heading_level: 2
toc_max_heading_level: 5
---

https://github.com/remkop/picocli 命令行开发

 sentry grafana prometheus youtrack
 
https://github.com/akullpp/awesome-java
https://github.com/CodingDocs/awesome-java 中文版


Java core note.
https://docs.oracle.com/javase/tutorial/
jdk 8u192 是最后的免费版本, 之后的都要收费了

https://www.jianshu.com/p/a06aa86c6b27 (Jodconvert , 是一个 java 的文档转换器, 利用 openoffice 或 libreOffice 来进行文档格式转换.)

https://godbolt.org/ - 在线机器码转换

https://github.com/qiurunze123 - 高并发

https://github.com/Snailclimb/awesome-java#%E6%97%A5%E5%BF%97%E7%B3%BB%E7%BB%9F awesome java

<!--more-->

<!-- TOC -->

- [1. 各个版本](#1-各个版本)
- [2. 注释](#2-注释)
- [3. 反射(reflect)](#3-反射reflect)
  - [3.1. 反射的 api](#31-反射的-api)
  - [3.2. 实现事件驱动机制](#32-实现事件驱动机制)
- [4. java 并发-多线程](#4-java-并发-多线程)
- [5. 集合](#5-集合)
  - [5.1. 集合的体系](#51-集合的体系)
  - [5.2. 读源码](#52-读源码)
    - [5.2.1. 数组和链表区别](#521-数组和链表区别)
    - [5.2.2. 单链表和双链表区别](#522-单链表和双链表区别)
    - [5.2.3. HashMap](#523-hashmap)
    - [5.2.4. HashSet](#524-hashset)
    - [5.2.5. HashTable](#525-hashtable)
    - [5.2.6. LinkedHashMap](#526-linkedhashmap)
    - [5.2.7. TreeMap](#527-treemap)
    - [5.2.8. LindedHashSet](#528-lindedhashset)
    - [5.2.9. ArrayList 和 Vector](#529-arraylist-和-vector)
    - [5.2.10. LinkedList](#5210-linkedlist)
    - [5.2.11. ConcurrentHashMap](#5211-concurrenthashmap)
  - [5.3. Collections 和 Arrays 工具类](#53-collections-和-arrays-工具类)
  - [5.4. 集合排序](#54-集合排序)
- [6. 泛型](#6-泛型)
  - [6.1. 泛型方法-泛型类-泛型接口](#61-泛型方法-泛型类-泛型接口)
  - [6.2. 泛型反射](#62-泛型反射)
    - [6.2.1. 泛型反射 api](#621-泛型反射-api)
    - [6.2.2. 案例-优化 BaseDao](#622-案例-优化-basedao)
- [7. 注解](#7-注解)
  - [7.1. 语法](#71-语法)
  - [7.2. 元注解](#72-元注解)
  - [7.3. 注解反射](#73-注解反射)
  - [7.4. 看一个例子(优化 dao-解决字段和属性不一致)](#74-看一个例子优化-dao-解决字段和属性不一致)
    - [7.4.1. 通过注解优化 JavaBean](#741-通过注解优化-javabean)
    - [7.4.2. 泛型反射优化 BaseDao](#742-泛型反射优化-basedao)
    - [7.4.3. 自定义结果集 handler](#743-自定义结果集-handler)
- [8. io](#8-io)
  - [8.1. io总结](#81-io总结)
  - [8.2. socket 网络编程](#82-socket-网络编程)
  - [8.3. 阻塞 io](#83-阻塞-io)
    - [8.3.1. 什么是阻塞 io](#831-什么是阻塞-io)
    - [8.3.2. io 体系的整个概览](#832-io-体系的整个概览)
    - [8.3.3. Paths 和 Files 相关 api](#833-paths-和-files-相关-api)
      - [8.3.3.1. Paths 的获取转化](#8331-paths-的获取转化)
      - [8.3.3.2. 通过 Files Paths 读取写入](#8332-通过-files-paths-读取写入)
      - [8.3.3.3. 遍历文件夹](#8333-遍历文件夹)
      - [8.3.3.4. 通过 files 获取文件属性](#8334-通过-files-获取文件属性)
    - [8.3.4. bio tcp 实现通信](#834-bio-tcp-实现通信)
  - [8.4. 非阻塞 io](#84-非阻塞-io)
    - [8.4.1. 什么是非阻塞 io](#841-什么是非阻塞-io)
    - [8.4.2. 同步异步和阻塞非阻塞](#842-同步异步和阻塞非阻塞)
      - [8.4.2.1. 同步与异步](#8421-同步与异步)
      - [8.4.2.2. 阻塞与非阻塞](#8422-阻塞与非阻塞)
      - [8.4.2.3. 四种组合](#8423-四种组合)
  - [8.5. 多路复用 IO 即 java nio](#85-多路复用-io-即-java-nio)
    - [8.5.1. 解释多路复用](#851-解释多路复用)
    - [8.5.2. nio 和 io 区别](#852-nio-和-io-区别)
    - [8.5.3. Linux 中的多路复用支持](#853-linux-中的多路复用支持)
    - [8.5.4. 核心组件](#854-核心组件)
      - [8.5.4.1. 理解](#8541-理解)
      - [8.5.4.2. Channels](#8542-channels)
      - [8.5.4.3. Buffers](#8543-buffers)
      - [8.5.4.4. Selectors](#8544-selectors)
    - [8.5.5. nio 实现网络通信](#855-nio-实现网络通信)
  - [8.6. java aio](#86-java-aio)
  - [8.7. 断点续传](#87-断点续传)
- [9. 代理](#9-代理)
- [10. Java 内存模型](#10-java-内存模型)
- [11. java8](#11-java8)
  - [11.1. 函数式编程的概念(FP)](#111-函数式编程的概念fp)
  - [11.2. Java8 添加的新特性](#112-java8-添加的新特性)
    - [11.2.1. 接口默认方法](#1121-接口默认方法)
    - [11.2.2. @FunctionalInterface-函数接口](#1122-functionalinterface-函数接口)
    - [11.2.3. 方法的引用](#1123-方法的引用)
    - [11.2.4. Lambda 表达式](#1124-lambda-表达式)
      - [11.2.4.1. lambda 介绍](#11241-lambda-介绍)
      - [11.2.4.2. Lambda 作用域问题](#11242-lambda-作用域问题)
        - [11.2.4.2.1. 访问局部变量](#112421-访问局部变量)
        - [11.2.4.2.2. 访问成员变量](#112422-访问成员变量)
        - [11.2.4.2.3. 访问默认接口方法](#112423-访问默认接口方法)
  - [11.3. java8 中的并行流](#113-java8-中的并行流)
    - [11.3.1. 使用并行过滤数据](#1131-使用并行过滤数据)
    - [11.3.2. 从集合得到并行流](#1132-从集合得到并行流)
    - [11.3.3. 并行排序-给数组赋值](#1133-并行排序-给数组赋值)
  - [11.4. CompletableFuture 接口-增强的 Future](#114-completablefuture-接口-增强的-future)
    - [11.4.1. java 异步编程](#1141-java-异步编程)
    - [11.4.2. 原理介绍](#1142-原理介绍)
    - [11.4.3. completablefuture api](#1143-completablefuture-api)
    - [11.4.4. 完成了就通知我-手动填充结果](#1144-完成了就通知我-手动填充结果)
    - [11.4.5. 异步执行任务](#1145-异步执行任务)
    - [11.4.6. 流式调用组合多个 function 和 异常处理](#1146-流式调用组合多个-function-和-异常处理)
    - [11.4.7. 组合多个 CompletableFuture](#1147-组合多个-completablefuture)
  - [11.5. StampedLock-读写锁的改进](#115-stampedlock-读写锁的改进)
  - [11.6. LongAdder-原子类的增强](#116-longadder-原子类的增强)
  - [11.7. java8 内置函数式接口](#117-java8-内置函数式接口)
    - [11.7.1. Predicates(谓词, 断定)](#1171-predicates谓词-断定)
    - [11.7.2. Functions(函数)](#1172-functions函数)
    - [11.7.3. Suppliers(生产者)](#1173-suppliers生产者)
    - [11.7.4. Consumers(消费者)](#1174-consumers消费者)
    - [11.7.5. Comparators(比较器)](#1175-comparators比较器)
    - [11.7.6. Optional](#1176-optional)
  - [11.8. Streams(管道)](#118-streams管道)
    - [11.8.1. stream 介绍](#1181-stream-介绍)
    - [11.8.2. 重复使用 stream](#1182-重复使用-stream)
    - [11.8.3. map 和 flatMap](#1183-map-和-flatmap)
    - [11.8.4. 去重](#1184-去重)
    - [11.8.5. collect方法 如何收集处理后的元素 分组 去重](#1185-collect方法-如何收集处理后的元素-分组-去重)
    - [11.8.6. stream 中异常处理](#1186-stream-中异常处理)
  - [11.9. date 时间日期新的 api](#119-date-时间日期新的-api)
    - [11.9.1. 介绍-为什么使用](#1191-介绍-为什么使用)
    - [11.9.2. 使用新的时间日期 api](#1192-使用新的时间日期-api)
    - [11.9.3. 统计代码耗时](#1193-统计代码耗时)
  - [11.10. 可重复的 Annotations](#1110-可重复的-annotations)
  - [11.11. base64 编码](#1111-base64-编码)
  - [11.12. map 映射的新方法](#1112-map-映射的新方法)
- [12. java11](#12-java11)
  - [12.1. java module](#121-java-module)
  - [12.2. jshell](#122-jshell)
  - [12.3. var 类型推断](#123-var-类型推断)
  - [12.4. jdk api enhencement](#124-jdk-api-enhencement)
  - [12.5. 改进 java 程序在 docker 中的表现](#125-改进-java-程序在-docker-中的表现)
  - [12.6. 新的垃圾回收器](#126-新的垃圾回收器)
- [13. java17](#13-java17)
  - [13.1. record class](#131-record-class)
- [14. classloader 类加载器](#14-classloader-类加载器)
  - [14.1. classloader 的概念](#141-classloader-的概念)
  - [14.2. 层级结构](#142-层级结构)
  - [14.3. 工作过程 and 双亲委派模式](#143-工作过程-and-双亲委派模式)
  - [14.4. 线程上下文类加载器-打乱层级结构](#144-线程上下文类加载器-打乱层级结构)
  - [14.5. 借助 classloader 实现类隔离](#145-借助-classloader-实现类隔离)
  - [14.6. 类加载相关的异常](#146-类加载相关的异常)
  - [14.7. 自定义 classloader(加载网络上的 class)](#147-自定义-classloader加载网络上的-class)
- [15. 路径问题](#15-路径问题)
  - [15.1. 获取 classpath 和 系统属性 环境变量](#151-获取-classpath-和-系统属性-环境变量)
- [16. 数据类型](#16-数据类型)
  - [16.1. 各个数据类型的范围](#161-各个数据类型的范围)
  - [16.2. double 类型的加减乘除](#162-double-类型的加减乘除)
- [17. 控制台命令](#17-控制台命令)
  - [17.1. 打 jar 包](#171-打-jar-包)
  - [17.2. 生成注释文档 javadoc](#172-生成注释文档-javadoc)
  - [17.3. 编译和反编译](#173-编译和反编译)
- [18. 重要的对象](#18-重要的对象)
  - [18.1. Object](#181-object)
  - [18.2. String](#182-string)
- [19. 字节码编辑技术](#19-字节码编辑技术)
  - [19.1. javassist](#191-javassist)
- [20. 前沿](#20-前沿)
  - [20.1. graalvm](#201-graalvm)
  - [20.2. vertx](#202-vertx)
  - [20.3. Micronaut](#203-micronaut)
  - [20.4. Quarkus](#204-quarkus)
- [21. 拾遗](#21-拾遗)
  - [21.1. 正则表达式 regex](#211-正则表达式-regex)
  - [21.2. 静态绑定和动态绑定](#212-静态绑定和动态绑定)
  - [21.3. 重载 and 重写](#213-重载-and-重写)
  - [21.4. java 值传递 or 引用传递](#214-java-值传递-or-引用传递)
  - [21.5. 访问修饰符 public-protect-default-private](#215-访问修饰符-public-protect-default-private)
  - [21.6. getcontextclassloader\&getclassloader 区别](#216-getcontextclassloadergetclassloader-区别)
  - [21.7. getter 和 setter 存在的意义](#217-getter-和-setter-存在的意义)
  - [21.8. 为什么 service 只有一个实现也需要一个接口](#218-为什么-service-只有一个实现也需要一个接口)
  - [21.9. static 关键字](#219-static-关键字)
  - [21.10. 内部类 or 静态内部类](#2110-内部类-or-静态内部类)
    - [21.10.1. 内部类](#21101-内部类)
    - [21.10.2. 静态内部类](#21102-静态内部类)
  - [21.11. Java 类初始化顺序](#2111-java-类初始化顺序)
  - [21.12. Random-随机数](#2112-random-随机数)
  - [21.13. 位运算](#2113-位运算)
  - [21.14. 为什么包名都小写](#2114-为什么包名都小写)
  - [21.15. 处理 unicode 编码问题](#2115-处理-unicode-编码问题)
  - [21.16. 为什么成员变量再次赋值给局部变量](#2116-为什么成员变量再次赋值给局部变量)
  - [21.17. 为什么定义成员变量不用赋值而定义局部变量必须赋值](#2117-为什么定义成员变量不用赋值而定义局部变量必须赋值)
- [22. 开源项目](#22-开源项目)
  - [22.1. 博客 cms 系统](#221-博客-cms-系统)
  - [22.2. 假数据 fake dummy data](#222-假数据-fake-dummy-data)
  - [支付](#支付)
- [23. java agent](#23-java-agent)

<!-- /TOC -->

# 1. 各个版本

-   jdk5: 自动装箱/拆箱, 枚举, 静态导入(不实用), 可变长参数("String... params"), 泛型, for-each 循环, 并发库(Concurrent)

-   jdk6: compiler api(动态编译运行文本形式的 Java 代码), console 增强(编写命令行程序, 不实用), Desktop 类(打开浏览器, 文件等等方法)和 SystemTray 类, Http server api, script engine

-   jdk7: switch 对 String 支持(枚举也支持), 创建泛型时的类型推断(从定义的变量推断构造函数中的泛型), 捕获多种异常(... catch (IOException | SQLException e) ...), 数值类型支持"\_"(如定义 10s, 但是单位是毫秒: int mills = 10_000), try_auto_close_resource

-   jdk8: lambda express/函数式接口(@FunctionalInterface), 接口默认方法, 接口静态方法, base64 增强, Datetime 增强, Optional(防 null), Stream,

long-term support: jdk8, 11, 17

# 2. 注释

```java
main() {
    // 下面这行会被执行
    // \u000d sysout("hehe")
}


```

# 3. 反射(reflect)

## 3.1. 反射的 api

```java
Class clazz1 = Class.forName("cn.itcast.reflect.Person");
Class clazz2 = Person.class;
Class clazz3 = new Person(110,"狗娃").getClass();

Constructor[] constructors = clazz.getConstructors();// 获取公开的
Constructor[] constructors =  clazz.getDeclaredConstructors(); // 获取所有
Constructor constructor = clazz.getConstructor(int.class,String.class);// 指定
constructor.setAccessible(true);
Person p = (Person) constructor.newInstance(999,"xiaoyu");

Method[] methods = clazz.getMethods();//公开的方法，但是不包含父类的方法, 没方法, 则返回一个长度为 0 的数组
Method m =clazz.getDeclaredMethod("sleep",int.class);// 所有
Method m = clazz.getMethod("eat", int.class);//获取指定
m.setAccessible(true);
m.invoke(null, 6);
Method m = clazz.getMethod("sum", int[].class);
m.invoke(p,new int[]{12,5,9});

Field[] fields = clazz.getDeclaredFields();// 所有
Field field = clazz.getDeclaredField("id");// 指定
field.setAccessible(true);
field.set(p, 110);

getDeclaredAnnotation //getDeclaredAnnotation（s）：返回直接存在于此元素上的所有注释, 忽略继承的注释
getAnnotation（s）：返回此元素上存在的所有注释

```

## 3.2. 实现事件驱动机制

```java

/*事件处理类*/
public class EventHandler {
    //事件源
    private Object sender;
    //事件处理函数名称（用于反射）
    private String callback;
    
    public EventHandler(Object sender, String callback){
        this.sender = sender;
        this.callback = callback;
    }
    
    //事件触发
    public void emit(){
    Class senderType = this.sender.getClass();
    try {
        //获取并调用事件源sender的事件处理函数
        Method method = senderType.getMethod(this.callback);
        method.invoke(this.sender);
        } catch (Exception e2) {
            e2.printStackTrace();
        }
    }
}


/*事件源*/
public class Button(){
    /*可以在此设置Button类的相关属性，比如名字等*/
    private String name;
    ...
    
    
    //事件处理函数
    public void onClick(){
        System.out.println("you just clicked me!");
    }
}
    
    
/*实现事件驱动机制*/
Button b = new Button();
if(/*收到按钮点击信号*/){
    EventHandler e = new EventHandler(b, "onClick");
    e.emit();
}
```

还有一种方式: 观察者模式

```java
/*事件类*/
public Event {
    //与事件相关的事件处理函数
    public ArrayList<Callback> callbackList;
    
    //事件触发函数
    public void emit(){
        for(Callback cb : callbackList){
            cb.run();
        }
    }
    
    //注册事件处理函数
    public registerCallback(Callback cb){
        callbackList.add(cb);
    }
}

/*事件处理函数类*/
public interface Callback {
    void run();
}

public OnClick implements Callback {
    //函数
    public void run(){
        System.out.println("you just clicked me!");
    }
    
    
/*实现事件驱动*/
Event e = new Event();  
//将OnClick事件处理函数注册到事件中
e.registerCallback(new OnClick()); 
//触发事件
e.emit();
```

# 4. java 并发-多线程

{% post_link java-concurrent 📚 java-concurrent-reading-note %}

(见 java-concurrent)

# 5. 集合

## 5.1. 集合的体系

(注: 集合和数组中存放的都是对象的引用而非对象本身;; 从集合中取出元素是作为 Object 取出, 除非泛型指定了类型)

-   Collection 单列集合的根接口

    -   List 如果是实现了 List 接口的集合类， 具备的特点：有序，重复。

        -   ArraryList 底层 是使用了 Object 数组实现的，特点： 查询速度快，增删慢。(因为增删时候会涉及到数组扩容, 拷贝元素所以增删慢; 数组可以按照 index 查找元素, 所以查找快)

        -   LinkedList 底层是使用了双向链表数据结构实现的， 特点： 查询速度慢，增删快。(增删只需要改变某一个元素的 next 引用使其指向下一个元素, 所以增删快; 查询时候需要一个个遍历, 所以查询慢)

        -   Vector 实现与 ArrayList 是一致，但是是线程安全 的，操作效率低。

    -   Set 如果是实现了 Set 接口的集合类，具备的特点：无序，不可重复。

        -   HashSet 底层是基于 HashMap 实现 (哈希表)， 特点：存取速度快。【\*】添加元素原理: 调用元素的 hashcode() 得到哈希码, 进而运算得到哈希表中的位置. [两种情况] 如果该位置还没有存任何元素, 那么直接存储; 如果该位置有元素了则调用元素的 equals() 和目标元素比对, [又分为两种情况]: 如果相同, 不允许存储; 如果不同, 就可以存储

            -   LinkedHashSet 内部使用 LindedHashMap, 有序, 不和重复

        -   TreeSet 底层是使用了红黑树（二叉树）数据结构实现的。 特点： 对集合中的元素进行排序存储. 元素必须是可比较的, 如果不可比较, 需要实现 Comparable 接口(另一种方法是在创建 Treeset 对象的时候传入比较器(自定义一个类实现 COmparator 接口), 推荐, 因为这种方式可以复用)

    -   Queue FIFO-先进先出

        常用方法:

        📌 add 增加一个元索 如果队列已满，则抛出一个 IIIegaISlabEepeplian 异常
        📌 remove 移除并返回队列头部的元素 如果队列为空，则抛出一个 NoSuchElementException 异常
        📌 element 返回队列头部的元素 如果队列为空，则抛出一个 NoSuchElementException 异

        📌 offer 将元素追加到队列末尾并返回 true 如果队列已满，则返回 false
        📌 poll 删除并返问队列头部的元素 如果队列为空，则返回 null
        📌 peek 返回队列头部的元素不删除 如果队列为空，则返回 nul

        📌 put 添加一个元素 如果队列满，则阻塞
        📌 take 移除并返回队列头部的元素 如果队列为空，则阻塞

              - Deque 双向队列, 子接口, 头尾都可以poll, offer; 如果将Deque限制为只能从一端入队和出队，则可实现栈的数据结构

              - BlockingQueue 阻塞队列; 进出两端的thread会通过阻塞来实现平衡, 减少两边的处理速度差距

-   Map key 唯一不可重复, value 可重复

    -   HashMap 📌 底层是一个 Entry 数组, 每个 entry 是一个链表, 存储时, 会根据 hashCode() 来决定在数组中的 index, 根据 equals() 决定 在该位置上链表中的位置; 📌 线程不同步, 解决方案有 Hashtable 或者 Collections.synchronizedMap(hashMap)，这两种方式基本都是对整个 hash 表结构做锁定操作的，这样在锁表的期间，别的线程就需要等待了，无疑性能不高。; 📌 Key 和 value 可以为 null;

        -   LinkedHashMap 基于哈希表但是内部也维持了一个双向链表,可以保持顺序(保留了插入顺序, 所以输出顺序和输入顺序相同)

    -   TreeMap 底层使用二叉树实现 可以根据键排序(默认升序) 【\*】

    -   HashTable 存储的内容是键值对(key-value)映射。它是线程安全的。它的 key、value 都不可以为 null

        -   Properties 键值对 String--String 如果使用了中文, 只能使用字符流, 不能使用字节流(因为字节流使用 iso8859-1 编码)

## 5.2. 读源码

references: http://wiki.jikexueyuan.com/project/java-collection/hashmap.html

### 5.2.1. 数组和链表区别

数组静态分配内存(即, 数组一旦定义就内存不可变动, 要修改就必须涉及到数组的复制)，链表动态分配内存；

数组在内存中连续，链表不连续；

数组利用下标定位，时间复杂度为 O(1)，链表通过遍历定位, 定位元素时间复杂度 O(n)；

数组插入或删除元素的时间复杂度 O(n)，链表的时间复杂度 O(1)。

### 5.2.2. 单链表和双链表区别

-   为什么目前市场应用上单链表的应用要比双链表的应用要广泛的多呢？ 双链表节点需要多维护一个指针

-   存储效率: 单链表是 "时间换空间", 双链表"空间换时间", 比如: 考虑链表的 delete 操作:

    -   对于单链表, 先定位待删除 node, 得到待删除 node 的 pre_node, 修改 pre_node 的 next 指针;

    -   而得到 pre_node y 有两种方法: 📌 定位 node_to_delete 时候一路保存它的前一个 node; 📌 定位到 node_to_delete 后重新遍历链表找到 这个 pre_node; 实际上 这两种方法的效率是一样的，指针的总的移动操作都会有 2\*i 次。而如果用双向链表，则不需要定位 pre_node。因此指针总的移动操作为 i 次

-   再考虑 find 操作: 可以借用二分法的思路，从 head（首节点）向后查找操作和 last（尾节点）向前查找操作同步进行，这样双链表的效率可以提高一倍

### 5.2.3. HashMap

HashMap对象的key、value值均可为null。 HahTable对象的key、value值均不可为null。

线程不安全体现在哪里? https://www.zhihu.com/question/28516433

TODO

jdk1.7 示意图: ([online](https://www.draw.io/?lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1&title=Untitled%20Diagram.xml#R3Vrfb9s2EP5rCGwPDURRkqlHyVbWhxUo0AHbngbFYm2tsmjIdOL0r98df1hSJMdOaztZgCAmT8fj3XffHUUnhE1Xu9%2BafL38JAtREd8rdoTNiO%2FTwI%2FgAyWPRsKpZwSLpiysUiv4Un4XVujUtmUhNj1FJWWlynVfOJd1LeaqJ8ubRj701b7Kqr%2FrOl%2BIgeDLPK%2BG0j%2FLQi1tFP6klX8U5WLpdqZRbJ6scqdsI9ks80I%2BdEQsI2zaSKnMaLWbigrBc7iYdbcHnu4da0StTlngMnGfV1sbnHVMPbpoH5alEl%2FW%2BRznD5BRwtKlWlUwozCEENb4ZLVbYLZv7vJNOb%2BZV3Jb%2FAOQwaeye4hGid1BR%2Bk%2BfOCNkCuhmkdQsQtCLzRLLGUYswg%2BtAmIrWjZwT6ystymfLG33KICAwvMAZDCq4DE0pW8z%2B%2B0RVzTiE35vTuXKledOVSV6M5FUXanlvwdyRnSALDf9BNBPTZIBPXjYSYmwRkycTwRjdzWhUB9D0I%2BkpYzIEIdER0x%2BZCY1L8QM2kwiF8U0KrsVDZqKReyzquslaZ9hDpoiF2p%2FkIxpNjM%2FrZK%2FwqlHm0fzrdKgqi1%2FbuU6x6e6MLzaILHctvMrZYlkMqbhXBabBz0RlS5Ku%2F75n8GQfb2GAW97vUYFbw9PNjkNSvMOw7IT5TcZQuLDwsrvlJd8ZfwiF6nU%2Ft9HvmTIY%2F4CI3Cc9DohJPrzdIoHunPB6A%2BO4%2Fi%2FwGPvCvyiL59PGhwRTxOuL%2B82bqiYy8%2B4ZUKi77ozec6TPInP9ahWXgGPE645L06Hid2mrPgMey8WY02wpSEswE0EKTqx9%2B9vmJZrWVZK%2B2QscBSrKiNKS5ckFflooZxJb6iKUSuhLtxYsUKqy3dAN5lvfhDl96H4Dw4h4z1cGZBNMA5HMHZP0MHm5zQwOoiwW%2BtYDav8s2mnD%2B5t2FezMUtYtwJ8O5GbzzfzT%2BLpgTvRGPzcXrP6vYnPg7kEaCc7OQuZnf4jJzpnDSHbgLOhOmudpXf%2BdrrmCH2xJAJeWBIJ3Mf9mlfWQxP7Bpr5V0VEA1oH89w2KiCCxWQK5h3DbDPj3eoiwE8fFO4286%2FiXcG8b6ZuNdYf8jhSx0Co6dAVCECRXkPw4XSQRoRhF872cd8s%2FwErx7gRRaSNCFxqAeUcJ9kMeET%2FMkmJA5IwkkWkJQTiNQMkgQW9o51eBKhjdTDRWlKeKAlM5KEetEtjmGHZEZijo94rO2BzhTHuFWCq3zvm3j8YCIy3iW3JAUF%2BA2aU%2B0mGGHoJq4FHfAIDNKO%2FRDjeNbxnm2OkSdUuwPuR%2B1uFjvIRBe%2BjngE6CPYa1%2BmGC46nul9JziArTG4jPBwGIrYe91D6olkCXl12TDYw%2FKIpEwbzPSmIdrHGEPEL%2BFjqTNozVrT%2BAio4GsPp6jvTx2GkSYNGMnQIAZ169I%2BI1wbgQHsbsymSb0FGqMfnMQm9SlaR1Zk1umneexk%2F8l%2Bl8oQ1653Pd5HDFABX7BMqFYK0W%2BA%2BbnQ90DGyF1IMioD6fgvpiv%2B2poHS7g0QmNQf8hOMM%2BeIQe%2BkWl%2BjJADsuxrJnvDvUcSfcjSgWxfBH1DCK7LYobdoYXGMMYUfGQ148gpDDOil6SjoevWk6QuofoR9ineSb9zoN0aiklXCUoSknidLQYGXwbOezoVqdc%2FFYNo5FRkI8fiD3z5DtP2L9%2FmVbv9%2FwGW%2FQc%3D))


当 Hash 碰撞严重时，在 bucket 上形成的链表会变的越来越长，这样在查询时的效率就会越来越低；时间复杂度为 O(N), 1.8 将 bucket 由原来的单纯 LinkedList 加入了 红黑树 的实现

jdk1.8 示意图:

初始容量

加载因子(Float loadFactor): 给定的默认容量为 16，负载因子为 0.75。Map 在使用过程中不断的往里面存放数据，当数量达到了 16 \* 0.75 = 12 就需要将当前 16 的容量进行扩容，而扩容这个过程涉及到 rehash、复制数据等操作，所以非常消耗性能

Fail-Fast 机制

```java
/**
- HashMap实际上是一个“链表散列”的数据结构，即数组和链表的结合体; HashMap 底层就是一个数组结构，数组中的每一项又是一个链表

- HashMap 底层采用一个 Entry[] 数组来保存所有的 key-value 对，当需要存储一个 Entry 对象时，会计算待存储entry 的 key 的 hash 来决定其在数组中的索引, 如果该位置为null则直接存储，如果不为null, 就遍历该位置的链表(bucket), 再比较待存储 entry的 key 和 链表中的 entry的 key(通过 equals 方法), 如果相等, 则覆盖, 遍历到链表末尾还不等则添加到末尾

- 扩容: 当 HashMap 中的元素个数超过数组大小 *loadFactor(默认0.75)时，就会进行数组扩容; int threshold = (int)(capacity * loadFactor);

    - 默认情况下，数组大小为 16，那么当 HashMap 中元素个数超过 16*0.75=12 的时候，就把数组的大小扩展为 2*16=32，即扩大一倍; 所以创建 HashMap 最好指定容量

    - 负载因子 loadFactor 衡量的是一个散列表的空间的使用程度，负载因子越大表示散列表(即数组)的装填程度越高

- fail-fast 机制是 java 集合(Collection)中的一种错误机制。 当多个线程对同一个集合的内容进行操作时，就可能会产生fail-fast 事件

    - 例如：当某一个线程 A 通过 iterator去遍历某集合的过程中，若该集合的内容被其他线程所改变了；那么线程 A 访问集合时，就会抛出 ConcurrentModificationException 异常，产生 fail-fast 事件

    - 原理: 这一策略在源码中的实现是通过 modCount 域(`transient int modCount;`) 在迭代器初始化过程中会将这个值赋给迭代器的 expectedModCount; 在迭代过程中，判断 modCount 跟 expectedModCount 是否相等，如果不相等就表示已经有其他线程修改了 Map
*/

// 构造函数

public HashMap(int initialCapacity, float loadFactor) {
    if (initialCapacity < 0)
        throw new IllegalArgumentException("Illegal initial capacity: " +
                                            initialCapacity);
    if (initialCapacity > MAXIMUM_CAPACITY)
        initialCapacity = MAXIMUM_CAPACITY;
    if (loadFactor <= 0 || Float.isNaN(loadFactor))
        throw new IllegalArgumentException("Illegal load factor: " +
                                            loadFactor);

    // Find a power of 2 >= initialCapacity
    int capacity = 1;
    while (capacity < initialCapacity)
        capacity <<= 1;

    this.loadFactor = loadFactor;
    threshold = (int)Math.min(capacity * loadFactor, MAXIMUM_CAPACITY + 1);
    table = new Entry[capacity]; // 创建一个 Entry 数组; 每个 Entry 其实就是一个 key-value 对，它持有一个指向下一个元素的引用，这就构成了链表
    useAltHashing = sun.misc.VM.isBooted() &&
            (capacity >= Holder.ALTERNATIVE_HASHING_THRESHOLD);
    init();
}

// 存储

public V put(K key, V value) {
    //其允许存放 null 的 key 和 null 的 value，当其 key 为 null 时，调用putForNullKey方法，放入到table[0]的这个位置
    if (key == null)
        return putForNullKey(value);
    //得到key的 hashcode ，其目的是为了尽可能的让键值对可以分布到不同的桶中
    int hash = hash(key);
    //根据上一步骤中求出的hash得到在数组中是索引i
    int i = indexFor(hash, table.length);
    //如果i处的Entry不为null，则通过其next指针不断遍历e元素的下一个元素。, 如果找到一个 entry, 他的 hash 匹配, key 也相同(equals), 替换 oldValue
    for (Entry<K,V> e = table[i]; e != null; e = e.next) {
        Object k;
        if (e.hash == hash && ((k = e.key) == key || key.equals(k))) { // 如果 key 存在了
            V oldValue = e.value;
            e.value = value; // 新的value替代 oldValue
            e.recordAccess(this);
            return oldValue;
        }
    }

    // 如果 i 处的 entry==null, 或者 bucket遍历完了也没有找到相同 key 的 entry, 直接添加
    modCount++; // 这个变量记录 map 修改次数, 实现 fail-fast 机制
    addEntry(hash, key, value, i);
    return null;
}

void addEntry(int hash, K key, V value, int bucketIndex) {
    // 这里完全没有考虑 Entry 中的 value，仅仅只是根据 key 来计算并决定每个 Entry 的存储位置
    // 当系统决定了 key 的存储位置之后，value 随之保存在那里即可。
    if ((size >= threshold) && (null != table[bucketIndex])) {
        resize(2 * table.length);  // 扩容
        hash = (null != key) ? hash(key) : 0;
        bucketIndex = indexFor(hash, table.length);
    }

    createEntry(hash, key, value, bucketIndex);
}
void createEntry(int hash, K key, V value, int bucketIndex) {
        // 获取指定 bucketIndex 索引处的 Entry
        Entry<K,V> e = table[bucketIndex];
        // 将新创建的 Entry 放入 bucketIndex 索引处，并让新的 Entry 指向原来的 Entry
        table[bucketIndex] = new Entry<>(hash, key, value, e);
        size++;
}

// 获取

public V get(Object key) {
    if (key == null)
        return getForNullKey();
    Entry<K,V> entry = getEntry(key);

    return null == entry ? null : entry.getValue();
}
final Entry<K,V> getEntry(Object key) {
    int hash = (key == null) ? 0 : hash(key); // calculate hashCode according to key.
    for (Entry<K,V> e = table[indexFor(hash, table.length)]; // find element, traverse the bucket.
            e != null;
            e = e.next) {
        Object k;
        if (e.hash == hash &&
            ((k = e.key) == key || (key != null && key.equals(k))))
            return e;
    }
    return null;
}

```

### 5.2.4. HashSet

几乎全部借助于 HashMap 来实现

所以也要重写 hashCode(), equals() 以确保元素唯一性

```java

/**
- HashSet内部的数据结构就是一个 HashMap，其方法的内部几乎就是在调用 HashMap 的方法
*/
///////////////////// field

private transient HashMap<E,Object> map;
// 所有写入 map 的 value 值, key 则是 Hashset 中存储的值
private static final Object PRESENT = new Object();

////////////////////////////////////////// 构造函数
 /**
 * 默认的无参构造器，构造一个空的HashSet。
 * 实际底层会初始化一个空的HashMap，并使用默认初始容量为16和加载因子0.75。
 */
public HashSet() {
    map = new HashMap<E,Object>();
}
public HashSet(int initialCapacity, float loadFactor) {
    map = new HashMap<>(initialCapacity, loadFactor);
}
/**
 * 构造一个包含指定 collection 中的元素的新set。
 * 实际底层使用默认的加载因子0.75和足以包含指定 collection 中所有元素的初始容量来创建一个H ashMap。
 * @param c 其中的元素将存放在此 set 中的collection。
 */
public HashSet(Collection<? extends E> c) {
    map = new HashMap<E,Object>(Math.max((int) (c.size()/.75f) + 1, 16));
    addAll(c);
}
/**
 * 以指定的initialCapacity 和 loadFactor 构造一个空的 HashSet。
 *
 * 实际底层以相应的参数构造一个空的HashMap。
 * @param initialCapacity 初始容量。
 * @param loadFactor 加载因子。
 */
public HashSet(int initialCapacity, float loadFactor) {
    map = new HashMap<E,Object>(initialCapacity, loadFactor);
}
/**
 * 以指定的 initialCapacity 构造一个空的 HashSet。
 *
 * 实际底层以相应的参数及加载因子loadFactor为0.75构造一个空的HashMap。
 * @param initialCapacity 初始容量。
 */
public HashSet(int initialCapacity) {
    map = new HashMap<E,Object>(initialCapacity);
}
/**
 * 以指定的initialCapacity和loadFactor构造一个新的空链接哈希集合。此构造函数为包访问权限，不对外公开，
 * 实际只是是对LinkedHashSet的支持。
 *
 * 实际底层会以指定的参数构造一个空LinkedHashMap实例来实现。
 * @param initialCapacity 初始容量。
 * @param loadFactor 加载因子。
 * @param dummy 标记。
 */
HashSet(int initialCapacity, float loadFactor, boolean dummy) {
    map = new LinkedHashMap<E,Object>(initialCapacity, loadFactor);
}

////////////////////////////////// 添加方法

/**
由于 HashMap 的 put() 方法添加 key-value 对时，当新放入 HashMap 的 key 与原有 key 相同（hashCode()返回值相等，通过 equals 比较也返回 true），新添加的 Entry 的 value 将覆盖原来 Entry 的 value（也就是 HashSet 中的 value , 都是PRESENT），但 key 不会有任何改变，

因此如果向 HashSet 中添加一个已经存在的元素时，新添加的集合元素将不会被放入 HashMap中，原来的元素也不会有任何改变，这也就满足了 Set 中元素不重复的特性。

 * @param e 将添加到此set中的元素。
 * @return 如果此set尚未包含指定元素，则返回true。
 */
public boolean add(E e) {
    //将存放的对象当做了 HashMap 的健，value 都是相同的 PRESENT 。
    //由于 HashMap 的 key 是不能重复的，所以每当有重复的值写入到 HashSet 时, 也就是 hashmap 中的 key 重复了，那么 value 会被覆盖，但 key 不会受到影响，这样就保证了 HashSet 中只能存放不重复的元素
    return map.put(e, PRESENT)==null;
}

```

### 5.2.5. HashTable

同步的 hashmap, key, value 不允许为 null

```java
/**
- 和 HashMap 一样，Hashtable 也是一个散列表，它存储的内容是键值对

- Hashtable 与 HashMap 的简单比较

    - HashTable 基于 Dictionary 类，而 HashMap 是基于 AbstractMap

        -(Dictionary 是任何可将键映射到相应值的类的抽象父类, 过时了)

    - HashMap 的 key 和 value 都允许为 null，而 Hashtable 的 key 和 value 都不允许为 null

    - Hashtable 方法是同步，而HashMap则不是
*/

// 成员变量 和 HashMap 类似 table, count, threshold, loadFactor, modCount。

// 构造方法大同小异, 默认构造函数，容量为 11，加载因子为 0.75

// 添加 线程安全

/**
整个过程:

- 判断 value 是否为空，为空则抛出异常；

- 计算 key 的 hash 值，并根据 hash 值获得 key 在 table 数组中的位置 index，如果 table[index] 元素不为空，则进行迭代，如果遇到相同的 key，则直接替换，并返回旧 value；

- table[index] 为空，我们可以将其插入到 table[index] 位置。
*/
public synchronized V put(K key, V value) {
    // Make sure the value is not null确保value不为null
    if (value == null) {
        throw new NullPointerException();
    }

    // Makes sure the key is not already in the hashtable.
    //确保key不在hashtable中
    //首先，通过hash方法计算key的哈希值，并计算得出index值，确定其在table[]中的位置
    //其次，迭代index索引位置的链表，如果该位置处的链表存在相同的key，则替换value，返回旧的value
    Entry tab[] = table;
    int hash = hash(key);
    int index = (hash & 0x7FFFFFFF) % tab.length;
    for (Entry<K,V> e = tab[index] ; e != null ; e = e.next) {
        if ((e.hash == hash) && e.key.equals(key)) {
            V old = e.value;
            e.value = value;
            return old;
        }
    }

    modCount++;
    if (count >= threshold) {
        // Rehash the table if the threshold is exceeded
        //如果超过阀值，就进行rehash操作
        rehash();

        tab = table;
        hash = hash(key);
        index = (hash & 0x7FFFFFFF) % tab.length;
    }

    // Creates the new entry.
    //将值插入，返回的为null
    Entry<K,V> e = tab[index];
    // 创建新的Entry节点，并将新的Entry插入Hashtable的index位置，并设置e为新的Entry的下一个元素
    tab[index] = new Entry<>(hash, key, value, e);
    count++;
    return null;
}

// get 方法

public synchronized V get(Object key) {
    Entry tab[] = table;
    int hash = hash(key); // calculate hashCode
    int index = (hash & 0x7FFFFFFF) % tab.length; //calculate index
    for (Entry<K,V> e = tab[index] ; e != null ; e = e.next) { //遍历链表
        if ((e.hash == hash) && e.key.equals(key)) {
            return e.value;
        }
    }
    return null;
}

```

### 5.2.6. LinkedHashMap

可以排序的 hashmap

由一个双向链表所构成, 保证了有序 (在 hashmap 内部的 entry 基础上添加了 "Entry<K,V> before, after;" 构成了双向链表, )

排序模式: 通过 `accessOrder` 控制

-   根据写入顺序排序(默认)

-   根据访问顺序排序 - 每次 get 都会将访问的值移动到链表末尾，这样重复操作就能得到一个按照访问顺序排序的链表。可以利用这个特性, 用 LinkedHashMap 构建 LRU 缓存

```java
/**
- LinkedHashMap 是 HashMap 的一个子类，它保留插入的顺序

- 允许使用 null 值和 null 键

- LinkedHashMap 实现与 HashMap 的不同之处在于，LinkedHashMap 维护着一个双重链接列表。此链接列表定义了迭代顺序，该迭代顺序可以是插入顺序或者是访问顺序(即调用 get() 后，会将这次访问的元素移至链表 尾部，不断访问可以形成按访问顺序排序的链表。)。
**/

// 成员变量

private final boolean accessOrder; //如果为true，则按照访问顺序；如果为false，则按照插入顺序。
private transient Entry<K,V> header;// the head(eldest) of the doubly linked list
private transient Entry<K,V> tail;// the tail(youngest) of the doubly linked list
/**
* LinkedHashMap的Entry元素。
* 继承HashMap的Entry元素，又保存了其上一个元素before和下一个元素after的引用。新版本有变化了, 继承 Node
 */
private static class Entry<K,V> extends HashMap.Entry<K,V> {
    Entry<K,V> before, after;
    ……
}

// 初始化/构造函数

public LinkedHashMap(int initialCapacity, float loadFactor,boolean accessOrder) {
    super(initialCapacity, loadFactor);
    this.accessOrder = accessOrder;//默认为 false，代表按照插入顺序进行迭代；当然可以显式设置为 true，代表以访问顺序进行迭代
}

// 存储方法

/**
LinkedHashMap 并未重写父类 HashMap 的 put 方法，而是重写了父类 HashMap 的 put 方法调用的子方法void recordAccess(HashMap m) ，void addEntry(int hash, K key, V value, int bucketIndex) 和void createEntry(int hash, K key, V value, int bucketIndex)，提供了自己特有的双向链接列表的实现
*/

// get 方法

/**
LinkedHashMap 重写了父类 HashMap 的 get 方法，实际在调用父类 getEntry() 方法取得查找的元素后，再判断当排序模式 accessOrder 为 true 时，记录访问顺序，将最新访问的元素添加到双向链表的表头，并从原来的位置删除。
*/

// LRU 是 Least Recently Used 的缩写, 最近最少使用
// LinkedHashMap 本身已经实现了按照访问顺序的存储，也就是说，最近读取的会放在最前面，最最不常读取的会放在最后;LinkedHashMap 本身有一个方法用于判断是否需要移除最不常读取的数，但是，原始方法默认不需要移除（这是，LinkedHashMap 相当于一个linkedlist），所以，我们需要 override 这样一个方法，使得当缓存里存放的数据个数超过规定个数后，就把最不常用的移除掉

/**
 * An LRU cache, based on <code>LinkedHashMap</code>.
 *
 * <p>
 * This cache has a fixed maximum number of elements (<code>cacheSize</code>).
 * If the cache is full and another entry is added, the LRU (least recently
 * used) entry is dropped.
 *
 * <p>
 * This class is thread-safe. All methods of this class are synchronized.
 *
 * <p>
 * Author: Christian d'Heureuse, Inventec Informatik AG, Zurich, Switzerland<br>
 * Multi-licensed: EPL / LGPL / GPL / AL / BSD.
 */
public class LRUCache<K, V> {
    private static final float hashTableLoadFactor = 0.75f;
    private LinkedHashMap<K, V> map;
    private int cacheSize;

    /**
     * Creates a new LRU cache. 在该方法中，new LinkedHashMap<K,V>(hashTableCapacity,
     * hashTableLoadFactor, true)中，true代表使用访问顺序
     *
     * @param cacheSize
     *            the maximum number of entries that will be kept in this cache.
     */
    public LRUCache(int cacheSize) {
        this.cacheSize = cacheSize;
        int hashTableCapacity = (int) Math
                .ceil(cacheSize / hashTableLoadFactor) + 1;
        map = new LinkedHashMap<K, V>(hashTableCapacity, hashTableLoadFactor,
                true) {
            // (an anonymous inner class)
            private static final long serialVersionUID = 1;

            @Override
            protected boolean removeEldestEntry(Map.Entry<K, V> eldest) {
                return size() > LRUCache.this.cacheSize;
            }
        };
    }

    /**
     * Retrieves an entry from the cache.<br>
     * The retrieved entry becomes the MRU (most recently used) entry.
     *
     * @param key
     *            the key whose associated value is to be returned.
     * @return the value associated to this key, or null if no value with this
     *         key exists in the cache.
     */
    public synchronized V get(K key) {
        return map.get(key);
    }

    /**
     * Adds an entry to this cache. The new entry becomes the MRU (most recently
     * used) entry. If an entry with the specified key already exists in the
     * cache, it is replaced by the new entry. If the cache is full, the LRU
     * (least recently used) entry is removed from the cache.
     *
     * @param key
     *            the key with which the specified value is to be associated.
     * @param value
     *            a value to be associated with the specified key.
     */
    public synchronized void put(K key, V value) {
        map.put(key, value);
    }

    /**
     * Clears the cache.
     */
    public synchronized void clear() {
        map.clear();
    }

    /**
     * Returns the number of used entries in the cache.
     *
     * @return the number of entries currently in the cache.
     */
    public synchronized int usedEntries() {
        return map.size();
    }

    /**
     * Returns a <code>Collection</code> that contains a copy of all cache
     * entries.
     *
     * @return a <code>Collection</code> with a copy of the cache content.
     */
    public synchronized Collection<Map.Entry<K, V>> getAll() {
        return new ArrayList<Map.Entry<K, V>>(map.entrySet());
    }

    // Test routine for the LRUCache class.
    public static void main(String[] args) {
        LRUCache<String, String> c = new LRUCache<String, String>(3);
        c.put("1", "one"); // 1
        c.put("2", "two"); // 2 1
        c.put("3", "three"); // 3 2 1
        c.put("4", "four"); // 4 3 2
        if (c.get("2") == null)
            throw new Error(); // 2 4 3
        c.put("5", "five"); // 5 2 4
        c.put("4", "second four"); // 4 5 2
        // Verify cache content.
        if (c.usedEntries() != 3)
            throw new Error();
        if (!c.get("4").equals("second four"))
            throw new Error();
        if (!c.get("5").equals("five"))
            throw new Error();
        if (!c.get("2").equals("two"))
            throw new Error();
        // List cache content.
        for (Map.Entry<String, String> e : c.getAll())
            System.out.println(e.getKey() + " : " + e.getValue());
    }
}

```

### 5.2.7. TreeMap

基于红黑树的可排序 hashmap

遍历和增加删除的的效率都是O(logN)

### 5.2.8. LindedHashSet

有序的 hashset

继承 HashSet、又基于 LinkedHashMap 来实现的

```java
/**
- 与HashSet 的不同之处在于，LinkedHashSet 维护着一个双重链接列表。此链接列表定义了迭代顺序，该迭代顺序可为插入顺序或是访问顺序

*/

```

### 5.2.9. ArrayList 和 Vector

最重要的两个属性分别是: `elementData` 数组，以及 `size` 大小, 添加元素时候 首先进行 `扩容校验`, 如果容量不够了, 会进行数组的复制. 另外在添加元素到指定位置时也有数组的复制. 所以`使用时最好是指定大小`, `减少在指定位置插入数据的操作`

实现于下面 2 个接口

-   List 接口

-   RandomAccess 接口: 标记接口, 表示可以快速随机访问(通过元素的序号快速获取元素对象)

Fail-Fast 机制: 多个线程竞争访问会报错

由于 ArrayList 是基于数组实现的，所以`并不是所有的空间都被使用`。因此使用了 transient 修饰，可以防止被自动序列化, 因此 `ArrayList 自定义了序列化与反序列化`

Vector 底层数据结构和 ArrayList 类似,也是一个动态数组存放数据。不过是在 add() 方法的时候使用 synchronized 进行同步写数据，但是开销较大，所以 Vector 是一个同步容器并不是一个并发容器。

```java
/**
- 它实现 List 接口、底层使用数组保存所有元素。其操作基本上是对数组的操作
*/

// 成员变量
private transient Object[] elementData;

// 添加 有多种方法

public E set(int index, E element) {
    rangeCheck(index);//检查是否超出数组范围, 如果超出, 抛异常

    E oldValue = elementData(index);
    elementData[index] = element;// replace
    return oldValue;
}
private void rangeCheck(int index) {
    if (index >= size)
    throw new IndexOutOfBoundsException(outOfBoundsMsg(index));
}

 /**
    * Appends the specified element to the end of the list.
    *
    * @param e element to be appended to this list
    * @return <tt>true</tt> (as specified by {@link Collection#add})
    */
public boolean add(E e) {
    //扩容校验。
    ensureCapacityInternal(size + 1);  // Increments modCount!!
    elementData[size++] = e;
    return true;
}
private void ensureCapacityInternal(int minCapacity) {
    modCount++;
    // overflow-conscious code
    if (minCapacity - elementData.length > 0)
        grow(minCapacity); //当容量不足时，会调用 grow 方法增长容量
}
private void grow(int minCapacity) {
    // overflow-conscious code
    int oldCapacity = elementData.length;
    int newCapacity = oldCapacity + (oldCapacity >> 1);
    if (newCapacity - minCapacity < 0)
        newCapacity = minCapacity;
    if (newCapacity - MAX_ARRAY_SIZE > 0)
        newCapacity = hugeCapacity(minCapacity);
    // minCapacity is usually close to size, so this is a win:
    // 数组复制,
    elementData = Arrays.copyOf(elementData, newCapacity);
}

 public void add(int index, E element) {
    rangeCheckForAdd(index);

    ensureCapacityInternal(size + 1);  // Increments modCount!!
    //复制，向后移动
    System.arraycopy(elementData, index, elementData, index + 1,
                        size - index);
    elementData[index] = element;
    size++;
}


// 读取

public E get(int index) {
    rangeCheck(index);
    return (E) elementData[index];// returns the element at the specified position of the list
}
private void rangeCheck(int index) {
    if (index >= size)
    throw new IndexOutOfBoundsException(outOfBoundsMsg(index));
}

// 调整数组容量

/**
开发者可以通过一个 public 的方法ensureCapacity(int minCapacity)来增加 ArrayList 的容量，而在存储元素等操作过程中，如果遇到容量不足，会调用priavte方法private void ensureCapacityInternal(int minCapacity)实现。
*/

 public void ensureCapacity(int minCapacity) {
    if (minCapacity > 0)
        ensureCapacityInternal(minCapacity);
}

private void ensureCapacityInternal(int minCapacity) {
    modCount++;
    // overflow-conscious code
    if (minCapacity - elementData.length > 0)
        grow(minCapacity);
}
/**
    * Increases the capacity to ensure that it can hold at least the
    * number of elements specified by the minimum capacity argument.
    *
    * @param minCapacity the desired minimum capacity
    */
private void grow(int minCapacity) {
    // overflow-conscious code
    int oldCapacity = elementData.length;
    int newCapacity = oldCapacity + (oldCapacity >> 1); //每次数组容量的增长大约是其原容量的 1.5 倍
    if (newCapacity - minCapacity < 0)
        newCapacity = minCapacity;
    if (newCapacity - MAX_ARRAY_SIZE > 0)
        newCapacity = hugeCapacity(minCapacity);
    // minCapacity is usually close to size, so this is a win:
    elementData = Arrays.copyOf(elementData, newCapacity);
}
```

### 5.2.10. LinkedList

单向链表

LinkedList 插入，删除都是移动指针效率很高。

查找需要进行遍历查询，效率较低, 特别是当 index 越接近 size 的中间值时尤其低

```java
/**
- LinkedList 是基于链表实现
*/

// 成员变量
transient int size = 0;
transient Node<E> first; //链表的头指针
transient Node<E> last; //尾指针

//存储对象的结构 Node, LinkedList的内部类
private static class Node<E> {
    E item;
    Node<E> next; // 指向下一个节点
    Node<E> prev; //指向上一个节点

    Node(Node<E> prev, E element, Node<E> next) {
        this.item = element;
        this.next = next;
        this.prev = prev;
    }
}

// 核心方法 linkBefore、linkLast

// 添加
public boolean add(E e) {
    linkLast(e);
    return true;
}
/**
* Links e as last element.
*/
void linkLast(E e) {
    final Node<E> l = last;
    final Node<E> newNode = new Node<>(l, e, null);
    last = newNode;
    if (l == null)
        first = newNode;
    else
        l.next = newNode; // 仅仅是指针的移动, 添加效率高
    size++;
    modCount++;
}

// 查询
public E get(int index) {
    checkElementIndex(index);
    return node(index).item;
}
Node<E> node(int index) {
    // assert isElementIndex(index);

    // 如果小于 size的一半, 就从节点头部遍历, 否则就从节点尾部开始遍历。
    if (index < (size >> 1)) {
        Node<E> x = first;
        for (int i = 0; i < index; i++)
            x = x.next;
        return x;
    } else {
        Node<E> x = last;
        for (int i = size - 1; i > index; i--)
            x = x.prev;
        return x;
    }
}

```

### 5.2.11. ConcurrentHashMap

ref: https://crossoverjie.top/2018/07/23/java-senior/ConcurrentHashMap/

[一个 concurrentlinkedhashmap 实现](https://github.com/ben-manes/concurrentlinkedhashmap)

面试套路:

-   谈谈你理解的 HashMap，讲讲其中的 get put 过程。
-   1.8 做了什么优化？
-   是线程安全的嘛？
-   不安全会导致哪些问题？
-   如何解决？有没有线程安全的并发容器？
-   ConcurrentHashMap 是如何实现的？ 1.7、1.8 实现有何不同？为什么这么做？
    替换了锁的实现吧, 使用了 synchronized 和 cas 操作吧, 因为 新版本 synchronize 做了很多优化, 性能已经不输reentrantLock

针对并发场景的 hashmap, 比 hashtable 并发效率更高

修改操作: 锁定的 Segment 而不是整个 ConcurrentHashMap, 更新操作只是在这个 Segment 中完成，所以并不需要对整个 ConcurrentHashMap 加锁, 此时，其他的线程也可以对另外的 Segment 进行 put 操作
读操作就更没什么影响了

Segment 数据结构

整个 ConcurrentHashMap 数据结构

```java
/**
- 数据结构

    - 成员变量中，包含了一个 Segment 的数组（final Segment<K,V>[] segments;），而 Segment 是 ConcurrentHashMap 的内部类

    - 在 Segment 这个类中，包含了一个 HashEntry 的数组（transient volatile HashEntry<K,V>[] table;）。而 HashEntry 也是 ConcurrentHashMap 的内部类。

    - HashEntry 中，包含了 key 和 value 以及 next 指针（类似于 HashMap 中 Entry），所以 HashEntry 可以构成一个链表。

- ConcurrentHashMap 和 HashTable

    - 相比于 HashTable 和用同步包装器包装的 HashMap（Collections.synchronizedMap(new HashMap())），ConcurrentHashMap 拥有更高的并发性。在前两者中，使用一个全局的锁来同步不同线程间的并发访问。同一时间点，只能有一个线程持有锁，也就是说在同一时间点，只能有一个线程能访问容器。这虽然保证多线程间的安全并发访问，但同时也导致对容器的访问变成串行化的了。

- ConcurrentHashMap 的高并发性主要来自于三个方面: (由于散列映射表在实际应用中大多数操作都是成功的 读操作，所以 2 和 3 既可以减少请求同一个锁的频率，也可以有效减少持有锁的时间)

    - 用分离锁实现多个线程间的更深层次的共享访问。
    - 用 HashEntery 对象的不变性(final修饰)来降低执行读操作的线程在遍历链表期间对加锁的需求。
    - 通过对同一个 Volatile 变量的写 / 读访问，协调不同线程间读 / 写操作的内存可见性。
*/

// HashEntry 存储键值对的过程中，散列的时候如果发生“碰撞”，将把碰撞的 HashEntry 对象链接成一个链表。

static final class HashEntry<K,V> {//类比着 HashMap 中的 Entry
    final int hash;
    final K key;
    volatile V value;
    volatile HashEntry<K,V> next;

    HashEntry(int hash, K key, V value, HashEntry<K,V> next) {
        this.hash = hash;
        this.key = key;
        this.value = value;
        this.next = next;
    }
    ...
    ...
}

// Segment

// 继承于 ReentrantLock 类，从而使得 Segment 对象可以充当锁的角色
//Segment 数据结构类似于 HashMap了，都是包含了一个数组，而数组中的元素可以是一个链表。
/**
    * Segments are specialized versions of hash tables.  This
    * subclasses from ReentrantLock opportunistically, just to
    * simplify some locking and avoid separate construction.
    */
static final class Segment<K,V> extends ReentrantLock implements Serializable {
    /**
        * The per-segment table. Elements are accessed via
        * entryAt/setEntryAt providing volatile semantics.
        */
        // 如果散列时发生碰撞，碰撞的 HashEntry 对象就以链表的形式链接成一个链表
    transient volatile HashEntry<K,V>[] table;//Segment 中包含HashEntry 的数组; 使得 segment 可以可以守护其包含的若干个桶（HashEntry数组中的每个Hashentry元素即为一个 桶）

    /**
        * The number of elements. Accessed only either within locks
        * or among other volatile reads that maintain visibility.
        */
    transient int count;//count 变量是计算器，表示每个 Segment 对象管理的 table 数组（若干个 HashEntry 的链表); 之所以在每个Segment对象中包含一个 count 计数器，而不在 ConcurrentHashMap 中使用全局的计数器，是为了避免出现“热点域”而影响并发性。
    transient int modCount;
    /**
        * 装载因子
        */
    final float loadFactor;
}

// 并发写操作

/**
    * Maps the specified key to the specified value in this table.
    * Neither the key nor the value can be null.
    *
    * <p> The value can be retrieved by calling the <tt>get</tt> method
    * with a key that is equal to the original key.
    *
    * @param key key with which the specified value is to be associated
    * @param value value to be associated with the specified key
    * @return the previous value associated with <tt>key</tt>, or
    *         <tt>null</tt> if there was no mapping for <tt>key</tt>
    * @throws NullPointerException if the specified key or value is null
    */
@SuppressWarnings("unchecked")
public V put(K key, V value) {
    Segment<K,V> s;//首先有一个 Segment 的引用 s
    if (value == null)
        throw new NullPointerException();
    int hash = hash(key);//hash() 方法对 key 进行计算
    int j = (hash >>> segmentShift) & segmentMask;
    if ((s = (Segment<K,V>)UNSAFE.getObject          // nonvolatile; recheck
            (segments, (j << SSHIFT) + SBASE)) == null) //  in ensureSegment
        s = ensureSegment(j);
    return s.put(key, hash, value, false);//调用 Segment 的 put(K key, int hash, V value, boolean onlyIfAbsent)方法进行存储操作
}
// Segment 的 put 方法
final V put(K key, int hash, V value, boolean onlyIfAbsent) {
    //加锁，这里是锁定的Segment而不是整个ConcurrentHashMap
    //因为 put 操作只是在这个 Segment 中完成，所以并不需要对整个 ConcurrentHashMap 加锁
    //所以，此时，其他的线程也可以对另外的 Segment 进行 put 操作，因为虽然该 Segment 被锁住了，但其他的 Segment 并没有加锁。同时，读线程并不会因为本线程的加锁而阻塞。
    HashEntry<K,V> node = tryLock() ? null :scanAndLockForPut(key, hash, value);
    V oldValue;
    try {
        HashEntry<K,V>[] tab = table;
        //得到hash对应的table中的索引index
        int index = (tab.length - 1) & hash;
        //找到hash对应的是具体的哪个桶，也就是哪个HashEntry链表
        HashEntry<K,V> first = entryAt(tab, index);
        for (HashEntry<K,V> e = first;;) {
            if (e != null) {
                K k;
                if ((k = e.key) == key ||
                    (e.hash == hash && key.equals(k))) {
                    oldValue = e.value;
                    if (!onlyIfAbsent) {
                        e.value = value;
                        ++modCount;
                    }
                    break;
                }
                e = e.next;
            }
            else {
                if (node != null)
                    node.setNext(first);
                else
                    node = new HashEntry<K,V>(hash, key, value, first);
                int c = count + 1;
                if (c > threshold && tab.length < MAXIMUM_CAPACITY)
                    rehash(node);
                else
                    setEntryAt(tab, index, node);
                ++modCount;
                count = c;
                oldValue = null;
                break;
            }
        }
    } finally {
        //解锁
        unlock();
    }
    return oldValue;
}

```

## 5.3. Collections 和 Arrays 工具类

Collections 方法:

```java
1，对list进行二分查找：
前提该集合一定要有序。
int binarySearch(list,key);
int binarySearch(list,key,Comparator);

2，对list集合进行排序。
sort(list);
sort(list,comaprator);
//按照指定比较器进行排序

3，对集合取最大值或者最小值。
max(Collection)
max(Collection,comparator)
min(Collection)
min(Collection,comparator)

4，对list集合进行反转。
reverse(list);


8，可以将不同步的集合变成同步的集合。
Set synchronizedSet(Set<T> s)
Map synchronizedMap(Map<K,V> m)
List synchronizedList(List<T> list)

9.如果想要将集合变数组：
可以使用Collection 中的toArray 方法。注意：是Collection不是Collections工具类
传入指定的类型数组即可，该数组的长度最好为集合的size。

10. 返回 空集合 节省内存

通过java.util.Collections.emptyList()方法的相关源码可以得知它实际上就是返回了一个空的List，但是这个List和我们平时常用的那个List是不一样的。这个方法返回的List是Collections类的一个静态内部类，它继承AbstractList后并没有实现add()、remove()等方法，因此这个返回值List并不能增加删除元素。
既然这个List不能进行增删操作，那么它有何意义呢？
这个方法主要目的就是返回一个不可变的列表，使用这个方法作为返回值就不需要再创建一个新对象，可以减少内存开销。并且返回一个size为0的List，调用者不需要校验返回值是否为null，所以建议使用这个方法返回可能为空的List。
emptySet()、emptyMap()方法同理。

```

Arrays 方法:

```java
1，二分查找,数组需要有序
binarySearch(int[])
binarySearch(double[])

2，数组排序
sort(int[])
sort(char[])


3. 复制数组。
copyOf(oldArray，newLength);
// 复制部分数组。
copyOfRange(oldArray，startIndex，endIndex)    这里不包括endIndex对应值；

4，比较两个数组对应位置的元素是否一致。
equals(int[],int[]);

5，将数组变成集合。
List asList(T[]);
这样可以通过集合的操作来操作数组中元素，
但是不可以使用增删方法，add，remove。因为数组长度是固定的，会出现
UnsupportOperationExcetion。
可以使用的方法：contains，indexOf。。。
如果数组中存入的基本数据类型，那么asList会将数组实体作为集合中的元素。
如果数组中的存入的引用数据类型，那么asList会将数组中的元素作为集合中
的元素。

6. 将数组变成字符串。
toString(int[])


```

## 5.4. 集合排序

```java
public class Main {
    public static void main(String[] args) {
         List<Boolean> arr = Arrays.asList(true, false, false, true);
        arr.sort((o1, o2) -> {
            if ((o1 && o2) || (!o1 && !o2)) {
                return 0;
            } else {
                return o2 ? 1 : -1;
                // or
                // return o1 ? -1 : 1;
            }


            // or
            // if (onLine1 ^ onLine2) {
            //     return onLine1 ? -1 : 1;
            // } else {
            //     return 0;
            // }
        });
        System.out.println(Arrays.toString(arr.toArray())); // true 在前, false 在后
    }
}
```

# 6. 泛型

## 6.1. 泛型方法-泛型类-泛型接口

-   泛型方法中 的自定义泛型的具体数据类型是在`调用该函数的时候传入实参时`确定的

-   泛型类上的自定义泛型是在`使用该类创建对象的时候` 确定具体的数据类型的

-   泛型接口上的自定义泛型是在`实现该接口的时候`指定具体数据类型的 - 如果需要`延迟确定接口泛型`的具体类型, 在创建接口实现类对象的时候才指定接口上自定义泛型，那么需要以下格式：`class<T> 类名 implements 接口<T>`

## 6.2. 泛型反射

### 6.2.1. 泛型反射 api

ParameterizedType 参数化类型, 比如: `ArrayList<String>`;

```java
// baseDao类
public class BaseDao<T> {
    // 当前运行类的类型
    private Class<T> clazz;
    // 表名
    private String tableName;
    // 主键
    private String id_primary;
    // 拿到当前运行类的参数化类型中实际的类型  ( BaseDao<Admin> ,  Admin.class)
    public BaseDao(){
	    //**获取parent的参数化类型
        Type type = this.getClass().getGenericSuperclass();
        ParameterizedType pt = (ParameterizedType) type;
        Type[] types = pt.getActualTypeArguments();

        clazz = (Class<T>) types[0];//到此, 已经拿到：  Admin.class

        /*******1. 获取表名*******/
        Table table = clazz.getAnnotation(Table.class);
        tableName = table.tableName();

        /*******2. 获取主键字段*******/
        //获取当前运行类的所有字段、遍历、获取每一个字段上的id注解
        Field[] fs = clazz.getDeclaredFields();
        for (Field f : fs) {
            // 设置强制访问
            f.setAccessible(true);

            // 获取每一个字段上的id注解
            Id anno_id = f.getAnnotation(Id.class);
            if (anno_id != null) {// 不为null, 证明时主键字段

                Column column = f.getAnnotation(Column.class);
                id_primary = column.columnName();
                // 跳出循环
                break;
            }
        }
        System.out.println("表：" + tableName);
        System.out.println("主键：" + id_primary);
    }

    public T findById(int id){
        try {
            String sql = "select * from " + tableName + " where " + id_primary +"=?";
            /*
             * DbUtils的已经封装好的工具类：BeanHandler?   属性=字段
             */
            return JdbcUtils.getQueryRunner().query(sql, new BeanHandler<T>(clazz), id);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }


    public List<T> getAll(){
        try {
            String sql = "select * from " + tableName;
            return JdbcUtils.getQuerrRunner().query(sql, new BeanListHandler<T>(clazz));
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}

```

### 6.2.2. 案例-优化 BaseDao

见 [注解反射](#看一个例子优化dao-解决字段和属性不一致)

# 7. 注解

https://blog.csdn.net/briblue/article/details/73824058

## 7.1. 语法

注解成员属性类型:

-   所有基本类型

-   String

-   Class

-   Enum

-   Annotation

-   以上类型的数组

注解本身不支持继承, 但是注解的属性可以是另外一个注解(注解数组), 而且注解有一个 一个元注解 @Inherited

```java
/**
 * 定义一个最普通的注解
 *
 */
public @interface Author {
    /**
    * 注解属性
    *       1. 修饰为默认或public效果一样
    */
    String name();
    int age();
}
// 使用:
@Author(name = "Jet", age = 30)
public void save() {

}

///////////////////////////////////////////////////////
//
//          带默认值的注解
//
//////////////////////////////////

public @interface Author {

    String name();
    int age() default 30;   // 带默认值的注解;  使用的时候就可以不写此属性值

    // 注解的所有元素必须有确定的值，要想表示元素null的状态，可以这么做：
    int age() default -1;
}


/////////////////////
//
//      默认名称的注解
//
/////////////////////

public @interface Author {
    // 如果注解名称为value,使用时候可以省略名称，直接给值
    // (且注解只有一个属性时候才可以省略名称)
    String value();
}
// 使用
@Author("Jet")
// 等价于
@Author(value = "Jet")


///////////////////////////
//
//      数组
//
///////////////////////////////

public @interface Author {
    String[] value() default {"test1","test2"};
}
// 使用：
@Author（{“”，“”}）
public void save() {

}



```

## 7.2. 元注解

表示注解上的注解，

一般可以这样使用 导入自动配置

```java
@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@Documented
@Import(RabbitBootstrapConfiguration.class)
public @interface EnableRabbit {
}
```

除了普通注解， 还支持下面几个特殊的

```java
////////////////////////////////////
//
//      指定注解的可用范围 @Target
//
//////////////////////////////////

指定注解在什么地方用，例如用于一个方法，一个域
@Target({
TYPE,     类
FIELD,     字段
METHOD,  方法
PARAMETER,   参数
CONSTRUCTOR, 构造器
 LOCAL_VARIABLE  局部变量
})

//////////////////////////////
//
//     指定注解的可用声明周期 @Retention
//
/////////////////////////////////////

// 指定注解在哪一个级别可用

@Retention(RetentionPolicy.SOURCE)    //注解只在源码级别有效
@Retention(RetentionPolicy.CLASS)      //注解在字节码级别有效(编译成字节码后还保留注解信息)
                                    // 默认值
@Retention(RetentionPolicy.RUNTIME)   注解在运行时期有效(所以我们可以通过反射去获取注解信息, 常用)

/////////////////////
//
//      注解包含进javadoc中 @Documented
//
/////////////////////////////

@Documented

///////////////////////
//
//      允许子类继承父类中的注解 @Inherited
//
///////////////////////

// 对于被标注的注解，允许子类继承父类中的该注解
@Inherited


/////////////////////////
//
//      拓展: @Constraint(validatedBy = {XXXXValidator.class})
//
/////////////////////////

// 对注解标注的字段进行校验

```

## 7.3. 注解反射

```java
// 注解反射要设置注解在运行时有效，即：在创建注解时加上： @Retention(RetentionPolicy.RUNTIME)   注解在运行时期有效
@Id
@Author(remark = "保存信息！！！", age = 19)
public void save() throws Exception {
    // 获取注解信息： name/age/remark
    // 1. 先获取代表方法的Method类型;
    Class clazz = App_2.class;
    Method m = clazz.getMethod("save");
    // 2. 再获取方法上的注解
    Author author = m.getAnnotation(Author.class);
    // 获取输出注解信息
    System.out.println(author.authorName());
    System.out.println(author.age());
    System.out.println(author.remark());
}


```

## 7.4. 看一个例子(优化 dao-解决字段和属性不一致)

解决优化的问题：

-   1. 当数据库表名与类名不一致、
-   2. 字段与属性不一样、
-   3. 主键不叫 id

### 7.4.1. 通过注解优化 JavaBean

```java
//admin类，经过注解优化
// Admin=a_admin表名
@Table(tableName="a_admin")
public class Admin {
    @Id//主键
    @Column(columnName = "a_id")
    private int id;

    @Column(columnName = "a_userName")
    private String userName;

    @Column(columnName = "a_pwd")
    private String pwd;

   getter&setter

    @Override
    public String toString() {
        return "Admin [id=" + id + ", pwd=" + pwd + ", userName=" + userName
                + "]";
    }
}

```

### 7.4.2. 泛型反射优化 BaseDao

```java

// baseDao类
public class BaseDao<T> {
    // 当前运行类的类型
    private Class<T> clazz;
    // 表名
    private String tableName;
    // 主键
    private String id_primary;
    // 拿到当前运行类的参数化类型中实际的类型  ( BaseDao<Admin> ,  Admin.class)
    public BaseDao(){
	    //**获取parent的参数化类型
        Type type = this.getClass().getGenericSuperclass();
        ParameterizedType pt = (ParameterizedType) type;
        Type[] types = pt.getActualTypeArguments();

        clazz = (Class<T>) types[0];//到此, 已经拿到：  Admin.class

        /*******1. 获取表名*******/
        Table table = clazz.getAnnotation(Table.class);
        tableName = table.tableName();

        /*******2. 获取主键字段*******/
        //获取当前运行类的所有字段、遍历、获取每一个字段上的id注解
        Field[] fs = clazz.getDeclaredFields();
        for (Field f : fs) {
            // 设置强制访问
            f.setAccessible(true);

            // 获取每一个字段上的id注解
            Id anno_id = f.getAnnotation(Id.class);
            if (anno_id != null) {// 不为null, 证明时主键字段

                Column column = f.getAnnotation(Column.class);
                id_primary = column.columnName();
                // 跳出循环
                break;
            }
        }
        System.out.println("表：" + tableName);
        System.out.println("主键：" + id_primary);
    }

    public T findById(int id){
        try {
            String sql = "select * from " + tableName + " where " + id_primary +"=?";
            /*
             * DbUtils的已经封装好的工具类：BeanHandler?   属性=字段
             */
            return JdbcUtils.getQueryRunner().query(sql, new BeanHandler<T>(clazz), id);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }


    public List<T> getAll(){
        try {
            String sql = "select * from " + tableName;
            return JdbcUtils.getQuerrRunner().query(sql, new BeanListHandler<T>(clazz));
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}

```

### 7.4.3. 自定义结果集 handler

```java
/**
 * 自定义结果集：封装单个Bean对象
 */
class BeanHandler<T> implements ResultSetHandler<T>{
    // 保存传入的要封装的类的字节码
    private Class<T> clazz;
    public BeanHandler(Class<T> clazz) {
        this.clazz = clazz;
    }

    // 封装结果集的方法
    @Override
    public T handle(ResultSet rs) throws SQLException {
        try {
            // 创建要封装的对象  ‘1’
            T t = clazz.newInstance();
            // 向下读一行
            if (rs.next()) {
                // a. 获取类的所有的Field字段数组
                Field[] fs = clazz.getDeclaredFields();
                // b. 遍历， 得到每一个字段类型：Field
                for (Field f : fs) {
                    // c. 获取”属性名称“，attention: 不是注解里的字段名
                    String fieldName = f.getName();
                    // e. 获取Field字段上注解
                    Column column =  f.getAnnotation(Column.class);
                 // 数据库中字段 a_userName
                    String columnName = column.columnName();
                    // g. 字段值
                    Object columnValue = rs.getObject(columnName);

                    // 设置（BeanUtils组件）
                    BeanUtils.copyProperty(t, fieldName, columnValue);
                }
            }
            return t;
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}
/**
 * 自定义结果集：封装多个Bean对象到List集合
 */
class BeanListHandler<T> implements ResultSetHandler<List<T>>{
    // 要封装的单个对象
    private Class<T> clazz;
    public BeanListHandler(Class<T> clazz){
        this.clazz = clazz;
    }
    // 把从数据库查询到的没一行记录，封装为一个对象，再提交到list集合， 返回List<T>
    @Override
    public List<T> handle(ResultSet rs) throws SQLException {
        List<T> list = new ArrayList<T>();
        try {
            // 向下读一行
            while (rs.next()) {
                // 创建要封装的对象  ‘1’
                T t = clazz.newInstance();
                // a. 获取类的所有的Field字段数组
                Field[] fs = clazz.getDeclaredFields();
                // b. 遍历， 得到每一个字段类型：Field
                for (Field f : fs) {
                    // c. 获取”属性名称“
                    String fieldName = f.getName();
                    // e. 获取Field字段上注解
                    Column column =  f.getAnnotation(Column.class);
                    // f. ”字段名“
                    String columnName = column.columnName();
                    // g. 字段值
                    Object columnValue = rs.getObject(columnName);
                    // 设置（BeanUtils组件）
                    BeanUtils.copyProperty(t, fieldName, columnValue);
                }
                // 对象添加到集合
                list.add(t);
            }
            return list;
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}


```

# 8. io

操作 io 字节序列化库: https://github.com/EsotericSoftware/kryo

## 8.1. io总结

io 有这几种用法:

- 只有一个线程，接受一个连接，读取数据，处理业务，写回结果，再接受下一个连接，这是同步阻塞。这种用法几乎没有。

- 一个线程和一个线程池，线程运行selector，将所有 channel 注册到多路复用选择器上，如果channel 中有数据了, 就从线程池中拿到一个线程处理, 也就是多路复用，这是同步非阻塞。也就是 java nio 的原理

- 一个线程和一个线程池，线程注册一个accept回调，系统帮我们接受好连接后，才触发回调在线程池中执行，执行时再注册read回调，系统帮我们接受好数据后，才触发回调在线程池中执行，就是AIO，这是异步非阻塞


redis也是多路复用，但它只有一个线程在执行select操作，处理就绪的连接，整个是串行化的，所以天然不存在并发问题。只能把它归为同步阻塞了。

## 8.2. socket 网络编程


```java
/**
 * 系统间进行通信， 需要两个步骤：
 *
 * - 数据传输.  - 借助 tcp/ip （可靠， 性能较差）, 或 udp/ip 协议 （数据丢失， 乱序， 但是性能更好）
 *
 * - 数据处理（读取or 写入） - 同步io 或者 异步io
 *
 *      - 同步io分为 bio, nio
 *
 *          bio - 某个 thread 当发起io操作, 为阻塞方式 （cpu 一直空闲等待），直到读取到 流 or 将 流写入到操作系统才会释放资源， 期间独占资源， 其他需要使用共享资源的thread均等待
 *
 *          nio - 基于"事件驱动" 思想， 通过 Reactor模式 实现 。 某个 thread 进行 读 or 写操作 均为 非阻塞的 （cpu 去处理其他任务）。 当 socket 有 stream 可读 或 有 stream 待被 写入 socket
 *          时, 发出事件(如 连接建立事件, 流读取事件, 流写入事件), 由操作系统通知 app来处理
 *
 *      - 异步io 分为 aio
 *
 *          aio - 同样基于事件驱动, 通过 Proactor模式实现;
 *          和nio对比, 1. 简化编程, io操作由操作系统完成, app只要调用api即可; 2. 省略了 nio中需要遍历 事件通知队列(Selector)
 *          的时间
 *
 * 这样组合的话, 有四种通信方式: tcp/ip + bio, tcp/ip  + nio, udp/ip + bio, udp/ip + nio
 *
 * *************************************************************************************************
 *
 * 下面是 bio + tcp 方式
 *
 * @author xiaoyu
 * @since 1.0
 */
public class Client {

    //private String url = "127.0.0.1";
    //private int port = 9527;
    private Socket socket;
    private BufferedReader readerOnServer;
    private PrintWriter printerOnServer;
    private BufferedReader readerOnCli;

    public void init(String url, int port) throws IOException {
        socket = new Socket(url, port);
        readerOnServer = new BufferedReader(new InputStreamReader(socket.getInputStream()));
        printerOnServer = new PrintWriter(socket.getOutputStream(), true);
        readerOnCli   = new BufferedReader(new InputStreamReader(System.in));
    }

    public void start() throws IOException {
        while (true) {
            String line = readerOnCli.readLine();
            // exit
            if (testExit(line)) {
                break;
            }

            System.out.println(">>> send to server: " + line);
            // send to server
            printerOnServer.println(line);

            // receive from server
            String respLine = readerOnServer.readLine();
            System.out.println(">>> receive from server: " + respLine);
        }
    }

    private boolean testExit(String test) throws IOException {
        if (StringUtils.isBlank(test) || "exit".equalsIgnoreCase(test)) {
            printerOnServer.write("exit");
            close();
            System.out.println(">>> client exit.");
            return true;
        }
        return false;
    }

    private void close() throws IOException {
        printerOnServer.close();
        readerOnCli.close();
        readerOnServer.close();
        socket.close();
    }

    public static void main(String[] args) throws IOException {
        Client client = new Client();
        client.init("127.0.0.1", 9527);
        client.start();
    }
}

/**
 * 这个 server 只支持 单个 client 连接
 *
 * 多个 client 连接 server怎么办? 首先要 pass 掉 "在 server 中 创建多个 socket"的想法, 因为 生成 socket 是非常重的操作, 占
 * 用server资源非常多
 *
 * 通常用采用 "连接池", 好处是 🐶 能够限制创建的 socket个数; 🐶 避免重复创建 socket
 * 但是这种方式还是有问题: 连接池中 socket 总是有限的总有不够用的时候; server 需要设置超时时间, 防
 * 止 server 连带 client挂掉
 *
 * 如果要支持多个 client 连接， 可采用 线程池， 每个 socket 新开一个 thread。 这么做有缺点： 无论是否是有效请求， server
 * 都要耗费一个 thread
 * 味了避免 过多的 thread 耗尽 server的资源， 线程池必须是限定大小的。 <=> 采用 bio 方式的 server 支撑的连接数是有限的
 *
 * @author xiaoyu
 * @since 1.0
 */
public class Server {

    //private ServerSocket serverSocket;
    //private BufferedReader readerFromClient;
    //private PrintWriter writerToClient;
    //
    //public void initBlock(int port) throws IOException {
    //    this.serverSocket = new ServerSocket(port);
    //    this.readerFromClient = new BufferedReader(new InputStreamReader(serverSocket.accept().getInputStream()));
    //}

    public static void main(String[] args) throws IOException, InterruptedException {
        int port = 9527;
        ServerSocket socketServer = new ServerSocket(port);
        socketServer.setSoTimeout(60 * 1000); // unit : milliseconds
        System.out.println(">>> server listen on port: " + port);
        Socket socketClient = socketServer.accept(); // start

        BufferedReader readerFromClient = new BufferedReader(new InputStreamReader(socketClient.getInputStream()));
        //BufferedWriter writerToClient   = new BufferedWriter(new OutputStreamWriter(socketClient.getOutputStream()));
        PrintWriter writerToClient = new PrintWriter(socketClient.getOutputStream(), true);

        while (true) {
            String line = readerFromClient.readLine(); // start

            if (StringUtils.isBlank(line)) {// read nothing
                Thread.sleep(100);
                continue;
            }
            if ("exit".equalsIgnoreCase(line)) {
                // close
                readerFromClient.close();
                writerToClient.close();
                socketServer.close();

                System.out.println(">>> server exit");
                break;
            }

            System.out.println(">>> msg from client: " + line);

            writerToClient.println(line);
            System.out.println(">>> msg to client: " + line);
            Thread.sleep(100);
        }
        System.exit(0);

    }
}

/////////////////////////////////////////////

/**
 * 基于消息的方式实现通信;
 * 数据传输: tcp/ip
 * 数据处理: nio
 *
 * @author xiaoyu
 * @since 1.0
 */
public class Client {

    //private Selector selector;
    //
    //public void init(String ip, int port) throws IOException {
    //    SocketChannel socketChannel = SocketChannel.open();
    //    socketChannel.configureBlocking(false); // configure channel as non blocking
    //    socketChannel.connect(new InetSocketAddress(ip, port));// 对于 non blocking io, 立即返回 false, 表示连接建立中
    //                                            // 用channel.finishConnect();才能完成连接
    //    Selector selector = Selector.open();
    //    socketChannel.register(selector, SelectionKey.OP_CONNECT);
    //}
    //
    //public void listen() {
    //
    //}

    public static void main(String[] args) throws IOException {
        String ip = "127.0.0.1";
        int port = 9527;

        SocketChannel socketChannel = SocketChannel.open();
        socketChannel.configureBlocking(false); // configure channel as non blocking
        // 会立即返回 false, 表示连接建立中; 调用channel.finishConnect()才能完成连接
        socketChannel.connect(new InetSocketAddress(ip, port));

        // register socket channel with selector, 并指定只对 连接 感兴趣
        Selector selector = Selector.open();
        socketChannel.register(selector, SelectionKey.OP_CONNECT);

        BufferedReader readerOnCli = new BufferedReader(new InputStreamReader(System.in));
        while (true) {
            if (socketChannel.isConnected()) {// connection is established; send msg to server
                String line = readerOnCli.readLine();
                socketChannel.write(StandardCharsets.UTF_8.encode(line));

                if ("exit".equalsIgnoreCase(line)) {
                    // exit
                    readerOnCli.close();
                    socketChannel.close();
                    selector.close();
                    System.out.println(">>> client exit.");
                    break;
                }
            }

            // receive from server
            selector.select(60 * 1000);// timeout = 60 s
            Iterator<SelectionKey> it = selector.selectedKeys().iterator();
            while (it.hasNext()) {
                SelectionKey key = it.next();
                it.remove();// remove current key from key set to avoid repetition

                if (key.isConnectable()) {// event: 连接事件
                    SocketChannel sc = (SocketChannel) key.channel();
                    sc.configureBlocking(false);
                    // - 这时, sc 对 read 事件也感兴趣了;
                    // - 一般不会直接注册 write 事件 因为在 buffer 未满时一直是可写的, 因此如果在注册了 write 事件而又不使用
                    //   它时 cpu 消耗可能会100%
                    sc.register(selector, SelectionKey.OP_READ);

                    if (sc.isConnectionPending()) {// 如果连接还没完成，则完成连接的建立
                        sc.finishConnect();
                    }
                } else if (key.isReadable()) {// reading event
                    SocketChannel sc = (SocketChannel) key.channel();
                    ByteBuffer    buffer = ByteBuffer.allocate(1024);

                    int numRead = 0;
                    try {
                        int tmp = 0;
                        try {
                            // read 操作是 block 的， 读取到末尾， 返回 -1
                            while ((tmp = sc.read(buffer)) > 0) {
                                numRead += tmp;
                            }
                        } finally {
                            buffer.flip();
                        }

                        if (numRead > 0) {
                            System.out.println(">>> msg from server: " + StandardCharsets.UTF_8.decode(buffer).toString());
                            buffer = null;
                        }
                    } finally {
                        if (buffer != null) {
                            buffer.clear();
                        }
                    }

                }
            }

        }
    }
}

/**
 * tcp + nio
 * 
 * @author xiaoyu
 * @since 1.0
 */
public class Server {
    public static void main(String[] args) throws IOException {
        int                 port              = 9527;
        InetSocketAddress   inetSocketAddress = new InetSocketAddress(port);
        ServerSocketChannel ssc               = ServerSocketChannel.open();
        ssc.configureBlocking(false);
        ssc.socket().bind(inetSocketAddress);// retrieve server socket and bind to port

        // - register server socket channel with selector;
        //      - `selector.select()` will return directly instead of blocking if `OP_ACCEPT` occurred;
        //      - OP_ACCEPT means the type of the registration; in this case, selector merely reports that a client
        //          attempts a connection to the server; (Other possible options are: OP_CONNECT, which will be used by the client; OP_READ; and OP_WRITE.)
        Selector selector = Selector.open();
        ssc.register(selector, SelectionKey.OP_ACCEPT);
        System.out.println(">>> server listen on port: " + port);

        outLoop:
        while (true) {
            selector.select(60 * 1000); // block, wait for events recorded on the selector; timeout: 60s

            // work on selected keys
            Iterator<SelectionKey> it = selector.selectedKeys().iterator();
            while (it.hasNext()) {
                SelectionKey key = it.next();
                it.remove();// prevent the same key coming up again

                if (!key.isValid()) {
                    continue;
                }
                if (key.isAcceptable()) {// event: the associated client request a connection
                    // retrieve server socket channel from selector
                    ServerSocketChannel serverSocketChannel = (ServerSocketChannel) key.channel();
                    // create a socket channel which accepts the connection, creates a standard java socket
                    SocketChannel socketChannel = serverSocketChannel.accept();
                    socketChannel.configureBlocking(false);
                    System.out.println(">>> connected to: " + socketChannel.socket().getRemoteSocketAddress());

                    // register socket channel with selector, 这个 channel只对 read 感兴趣
                    socketChannel.register(selector, SelectionKey.OP_READ);
                } else if (key.isReadable()) {// event: the server can read
                    SocketChannel sc     = (SocketChannel) key.channel();
                    ByteBuffer    buffer = ByteBuffer.allocate(1024);

                    int readBytes = 0;
                    try {
                        int tmp =  0;
                        try {
                            while ((tmp = sc.read(buffer)) > 0) {
                                readBytes += tmp;
                            }
                        } finally {
                            buffer.flip();
                        }

                        if (readBytes > 0) {
                            String data = StandardCharsets.UTF_8.decode(buffer).toString();
                            System.out.println(">>> receive from client: " + data);

                            if ("exit".equalsIgnoreCase(data)) {
                                sc.close();
                                selector.close();
                                System.out.println(">>> server closed");
                                break outLoop;  // 搬到这里就ok了
                            }

                            sc.write(StandardCharsets.UTF_8.encode(data));
                            System.out.println(">>> send to client: " + data );
                        }
                    } finally {
                        if (buffer != null) {
                            buffer.clear();
                        }
                    }

                    //byte[] data = new byte[numRead];
                    //System.arraycopy(buffer, 0, data, 0, numRead);
                    //java.lang.String data = new java.lang.String(buffer.array());
                    //System.out.println(">>> receive from client: " + data);

                    //if ("exit".equalsIgnoreCase(data)) {
                    //    sc.close();
                    //    selector.close();
                    //    System.out.println(">>> server closed");
                    //    break outLoop;  // 存疑 使用这种方式 client 发送 exit， 这里后面的代码仍旧会执行
                    //}

                    // send msg to client
                    //sc.write(StandardCharsets.UTF_8.encode(data));
                    //System.out.println(">>> send to client: " + data );
                }
            }
        }
    }
}

///////////////////////////////////////////

/**
 * udp 通信无需建立连接， 所以无法双向通信， 如需双向通信， 两端都必须是 server, 也就是 client 也要有监听端口
 *
 * @author xiaoyu
 * @since 1.0
 */
public class Client {
    public static void main(String[] args) throws Exception {
        int            remotePort          = 9527;// 远程 server 端口
        int            listenPort         = 9528;// 本地监听端口

        DatagramSocket listenSocket  = new DatagramSocket(listenPort);
        byte[]         buffer        = new byte[65507];
        DatagramPacket receivePacket = new DatagramPacket(buffer, buffer.length);// 接收数据流对象

        DatagramSocket socket   = new DatagramSocket();
        InetAddress    remoteAddr   = InetAddress.getByName("localhost");
        BufferedReader systemIn = new BufferedReader(new InputStreamReader(System.in));
        System.out.println(">>> client listen on port : " + listenPort);
        while (true) {
            String         line      = systemIn.readLine();
            byte[]         lineBytes = line.getBytes(StandardCharsets.UTF_8);
            DatagramPacket packetToRemote    = new DatagramPacket(lineBytes, lineBytes.length, remoteAddr, remotePort);// 传送数据流对象
            socket.send(packetToRemote);
            System.out.println(">>> send to server: " + line);

            if ("exit".equalsIgnoreCase(line.trim())) {
                System.out.println(">>> Client quit!");
                socket.close();
                listenSocket.close();
                break;
            }

            listenSocket.receive(receivePacket);
            String receiveResponse = new String(receivePacket.getData(),
                    0, receivePacket.getLength(), StandardCharsets.UTF_8);
            System.out.println(">>> receive from server: " + receiveResponse);
        }
    }
}


/**
 * @author xiaoyu
 * @since 1.0
 */
public class Server {
    public static void main(String[] args) throws Exception{
        int            listenPort          =9527;
        int            remotePort         =9528;
        DatagramSocket server        =new DatagramSocket(listenPort);
        DatagramSocket client        =new DatagramSocket();
        InetAddress    serverAddress =InetAddress.getByName("localhost");
        byte[]         buffer        =new byte[65507];
        DatagramPacket packet        =new DatagramPacket(buffer,buffer.length);
        System.out.println(">>> server listen on port : " + listenPort);
        while(true){
            server.receive(packet);
            String line=new String(packet.getData(),0,packet.getLength(), StandardCharsets.UTF_8);
            if("exit".equalsIgnoreCase(line.trim())){
                server.close();
                client.close();
                System.exit(0);
            }
            else{
                System.out.println(">>> Message from client: "+ line);
                packet.setLength(buffer.length);
                byte[] lineBytes=line.getBytes(StandardCharsets.UTF_8);
                DatagramPacket responsePacket=new DatagramPacket(lineBytes,lineBytes.length,serverAddress,remotePort);
                client.send(responsePacket);
                System.out.println(">>> send to client: " + line);
                Thread.sleep(100);
            }
        }
    }
}

////////////////////////////////////////////

/**
 * DatagramChannel 负责监听端口and读写; ByteBuffer 数据传输
 *
 * @author xiaoyu
 * @since 1.0
 */
public class Client {
    public static void main(String[] args) throws Exception{
        int listenPort=9528;
        int remotePort=9527;

        DatagramChannel receiveChannel=DatagramChannel.open();
        receiveChannel.configureBlocking(false);
        receiveChannel.socket().bind(new InetSocketAddress(listenPort));
        Selector selector= Selector.open();
        receiveChannel.register(selector, SelectionKey.OP_READ);

        DatagramChannel sendChannel =DatagramChannel.open();
        sendChannel.configureBlocking(false);
        sendChannel.connect(new InetSocketAddress("127.0.0.1",remotePort));

        BufferedReader systemIn =new BufferedReader(new InputStreamReader(System.in));

        while(true){
            String command=systemIn.readLine();
            sendChannel.write(Charset.forName("UTF-8").encode(command));
            if("quit".equalsIgnoreCase(command.trim())){
                systemIn.close();
                sendChannel.close();
                selector.close();
                System.out.println("Client quit!");
                System.exit(0);
            }
            int nKeys=selector.select(1000);
            if(nKeys>0){
                for (SelectionKey key : selector.selectedKeys()) {
                    if(key.isReadable()){
                        ByteBuffer buffer= ByteBuffer.allocate(1024);
                        DatagramChannel dc=(DatagramChannel) key.channel();
                        dc.receive(buffer);
                        buffer.flip();
                        System.out.println(Charset.forName("UTF-8").decode(buffer).toString());
                    }
                }
                selector.selectedKeys().clear();
            }
        }
    }
}

/**
 * @author xiaoyu
 * @since 1.0
 */
public class Server {
    public static void main(String[] args) throws Exception{
        int rport=9527;
        int sport=9528;

        DatagramChannel sendChannel=DatagramChannel.open();
        sendChannel.configureBlocking(false);
        SocketAddress target =new InetSocketAddress("127.0.0.1",sport);
        sendChannel.connect(target);

        DatagramChannel receiveChannel =DatagramChannel.open();
        DatagramSocket  serverSocket   =receiveChannel.socket();
        serverSocket.bind(new InetSocketAddress(rport));
        System.out.println("Data receive listen on port: "+rport);
        receiveChannel.configureBlocking(false);
        Selector selector= Selector.open();
        receiveChannel.register(selector, SelectionKey.OP_READ);
        while(true){
            int nKeys=selector.select(1000);
            if(nKeys>0){
                for (SelectionKey key : selector.selectedKeys()) {
                    if(key.isReadable()){
                        ByteBuffer buffer= ByteBuffer.allocate(1024);
                        DatagramChannel dc=(DatagramChannel) key.channel();
                        dc.receive(buffer);
                        buffer.flip();
                        String message= Charset.forName("UTF-8").decode(buffer).toString();
                        System.out.println("Message from client: "+ message);
                        if("quit".equalsIgnoreCase(message.trim())){
                            dc.close();
                            selector.close();
                            sendChannel.close();
                            System.out.println("Server has been shutdown!");
                            System.exit(0);
                        }
                        String outMessage="Server response："+message;
                        sendChannel.write(Charset.forName("UTF-8").encode(outMessage));
                    }
                }
                selector.selectedKeys().clear();
            }
        }
    }
}


```


## 8.3. 阻塞 io

### 8.3.1. 什么是阻塞 io

IO : 指的就是应用程序读入/写出数据的过程，和程序等待读入/写出数据的过程。一旦拿到数据后就变成了数据操作了，就不是 IO 了

阻塞io: 拿网络 IO 来说，等待的过程就是数据从网络到网卡再到内核空间。读写的过程就是内核空间和用户空间的相互拷贝. 应用程序都是运行在用户空间的，所以它们能操作的数据也都在用户空间。只要数据没有到达用户空间，用户线程就操作不了. 如果此时用户线程已经参与，那它一定会被阻塞在 IO 上。这就是常说的阻塞 IO。用户线程被阻塞在等待数据上或拷贝数据上.

非阻塞 IO : 就是用户线程不参与以上两个过程(数据传输, 数据拷贝)，即数据已经拷贝到用户空间后，才去通知用户线程，一上来就可以直接操作数据了

阻塞io 和非阻塞io区别就是用户线程会不会阻塞在等待数据或者数据拷贝上

### 8.3.2. io 体系的整个概览

基于字节操作的 I/O 接口：InputStream 和 OutputStream

基于字符操作的 I/O 接口：Writer 和 Reader

字节字符转换流

基于磁盘操作的 I/O 接口：File

基于网络操作的 I/O 接口：Socket

```java

1. 字节流

1.1 字节读取：

InputStream 所有输入字节流的基类  抽象类
    FileInputStream 读取文件数据的输入字节流
    BufferedInputStream  缓冲输入字符流       该类出现的目的是为了提高读取文件 数据的效率。 这个类其实只不过是在内部维护了一个8kb的字节数组而已。

1.2 字节输出：

OutputStream 所有输出字节流的基类。  抽象类。
    FileOutputStream 向文件输出数据的输出字节流
    BufferedOutputStream 缓冲输出字节流   该类出现的目的也是为了提高向文件写数据的效率。 这个类的也只不过是在内部维护了一个8kb的字节数组而已。

2. 字符流 : 字符流 = 字节流 + 编码（解码）

2.1 字符读取:

Reader 所有输入字符流的基类。 抽象类。
    FileReader 读取文件数据的输入字符流。    内部维护一个1024字符的字符数组, 调用flush或者是close方法或者是填满了内部的字符数组才会真正写数据到硬盘
    BufferedReader 缓冲输入字符流           该类出现的目的是为了提高读取文件数据的效率与拓展FileReader的(readLine)功能。 这个类的也只不过是在内部维护了一个8kb的字符数组而已。

2.2 字符输出:

Writer 所有输出字符流的基类。  抽象类
    FileWriter 向文件输出数据的输出字符流
    BufferedWriter 缓冲输出字符流 , 手动 flush, 手动 newLine()       该类出现的目的是为了提高写文件数据的效率与拓展FileWriter的(newLine)功能.
    PrintWriter 打印输出流, 字符字节均可, 可设置自动flush, 自动换行 , 可代替 bufferwriter; (https://blog.csdn.net/lyhkmm/article/details/78260207)

3. 转换流

InputStreamReader   输入字节流的转换流 ; 作用：InputStream--------------------> Reader
OutputStreamWriter  输出字节流的转换流 ; 作用：OutputStream --------------------> Writer

转换流的作用：
    - 可以把字节流转换成字符流使用。
    - FileReader与FileWriter都是固定是gbk码表进行读写数据的，而转换流可以指定码表进行读写文件的数据。

4. File

File 并不代表一个真实存在的文件对象, 而且就算存在还可能式文件or目录;

为何要这样设计？因为大部分情况下，我们并不关心这个文件是否真的存在，而是关心这个文件到底如何操作。例如我们手机里通常存了几百个朋友的电话号码，但是我们通常关心的是我有没有这个朋友的电话号码，或者这个电话号码是什么，但是这个电话号码到底能不能打通，我们并不是时时刻刻都去检查，而只有在真正要给他打电话时才会看这个电话能不能用。也就是使用这个电话记录要比打这个电话的次数多很多


Properties(配置文件类)

体系：
 -------| Map
 ------------| HashTable
 ----------------| Properties 配置文件类、

 store() 用于生成一个配置文件
 load() 加载一个配置文件

attention ：
    - 如果配置文件存在着中文，那么生成配置文件的时候要使用字符流，否则会出现乱码。
    - 如果需要修改配置文件的内容，应该先加载原本配置文件，然后再生成一个配置文件。


```

### 8.3.3. Paths 和 Files 相关 api

#### 8.3.3.1. Paths 的获取转化

jdk 1.7 提供

```java
// Paths.get("C:/", "Xmp"); 和 Paths.get("C:/Xmp"); 等同


Path pathRoot = Paths.get("/");// 表示磁盘根路径
System.out.println(pathRoot.toAbsolutePath());// D:\

FileSystems.getDefault().getPath("C:/", "aa.log") // 从操作系统获取

Paths.get(URI.create("file:///C:/Xmp/dd"))

new File("C:/aa.log").toPath()

// 表示当前项目根路径, 等同 System.getProperty("user.dir"), 等同 new File("").getAbsoblutePath
// 注意: system.getProperty("user.home")  表示操作系统 用户家目录, 而不是当前项目目录
Path pathA  = Paths.get(".");
Path pathB = pathA.toAbsolutePath();
System.out.println(pathB);// D:\repo\repo_github\shared_already\xiaoyu-recipes\samples\java8-demo\.


Path path1 = Paths.get(this.getClass().getResource(".").toURI());
System.out.println(path1);
//D:\repo\repo_github\shared_already\starter-demo\target\classes\io\github\xiaoyureed\starterdemo\util

Path path2 = Paths.get(this.getClass().getClassLoader().getResource(".").toURI());
System.out.println(path2);
//D:\repo\repo_github\shared_already\starter-demo\target\classes

// 获取 class path 推荐这种方式
Path path3 = Paths.get(Thread.currentThread().getContextClassLoader().getResource(".").toURI());
System.out.println(path3);
//D:\repo\repo_github\shared_already\starter-demo\target\classes

```

#### 8.3.3.2. 通过 Files Paths 读取写入

```java
private Path createFile(String dir, String file) throws IOException {
    Path dirPath = Paths.get(dir);
    if (Files.notExists(dirPath)) {
        Files.createDirectories(dirPath);
    }
    Path filePath = Paths.get(dir, file);
    if (Files.notExists(filePath)) {
        Files.createFile(filePath);// cannot create directory, only for file
    }

    return filePath;
}

/**
    * create a file
    *
    * write sth to the file
    *
    * read from the file
    */
@Test
public void testPaths_2() throws IOException {

    //Set<PosixFilePermission> perms = PosixFilePermissions.fromString("rw-rw-rw-");
    //FileAttribute<Set<PosixFilePermission>> attrs = PosixFilePermissions.asFileAttribute(perms);

    Path file = this.createFile("d:/_test", "aa.log");

        // 也能直接 files.newbufferreader/writer(Paths.get("xxx.json"))
        // reader.lines().collect(toList)
    try (BufferedWriter bufferedWriter = Files.newBufferedWriter(file, StandardCharsets.UTF_8)) {
        bufferedWriter.write("test writing file");
        bufferedWriter.flush();
    }

    try (BufferedReader bufferedReader = Files.newBufferedReader(file, StandardCharsets.UTF_8);) {
        for (;;) {
            String s = bufferedReader.readLine();
            if (s == null) {
                break;
            }
            System.out.println(s);
        }
    }
}
```

#### 8.3.3.3. 遍历文件夹

```java
/**
     * 没有递归的遍历
     *
     * 只会遍历第一层目录
     */
    @Test
    public void testTraverse() throws IOException {
        Path path = Paths.get("d:/_learn/");
        DirectoryStream<Path> dirStream = Files.newDirectoryStream(path);

        if (!Files.isDirectory(path)) {
            System.out.println("path is not a dir, path = " + path.toAbsolutePath().toString());
        }
        dirStream.forEach(p -> System.out.println(p.getFileName()));
    }

    /**
     * 等价
     */
    @Test
    public void testTraverse_1() throws IOException {
        Path path = Paths.get("d:/_learn");
        Stream<Path> dirStream = Files.list(path);
        Iterator<Path> it = dirStream.iterator();
        while (it.hasNext()) {
            Path next = it.next();
            System.out.println(next.getFileName());
        }
    }

    /**
     * 递归遍历
     */
    @Test
    public void testTraverse_2() throws IOException {
        Path path = Paths.get("d:/_learn");
        ArrayList<Path> result = new ArrayList<>();
        Files.walkFileTree(path, new SimpleFileVisitor<Path>() {
            @Override
            public FileVisitResult visitFile(Path file, BasicFileAttributes attrs) throws IOException {
                if (file.toString().endsWith(".php")) {
                    result.add(file);
                }

                return super.visitFile(file, attrs);
            }
        });

        result.forEach(System.out::println);
    }

    /**
     * 递归遍历, 等价上面
     */
    @Test
    public void testTraverse_3() throws IOException {
        Path path = Paths.get("d:/_learn");
        Stream<Path> stream = Files.walk(path);
        List<Path> result = stream.map(p -> p.toString().endsWith(".php") ? p : null)
                .distinct()
                .collect(Collectors.toList());
        result.forEach(System.out::println);
    }
```

#### 8.3.3.4. 通过 files 获取文件属性

```java
 /**
     * 文件属性
     */
    @Test
    public void testFileProperty() throws IOException {
        Path zip = Paths.get("d:/_test/aa.log");
        System.out.println(Files.getLastModifiedTime(zip));
        System.out.println(Files.size(zip));
        System.out.println(Files.isSymbolicLink(zip));
        System.out.println(Files.isDirectory(zip));
        System.out.println(Files.readAttributes(zip, "*"));// map, 所有属性

        // 2019-05-22T14:34:24.320402Z
        // 17
        // false
        // false
        // {lastAccessTime=2019-05-22T14:21:24.821534Z, lastModifiedTime=2019-05-22T14:34:24.320402Z, size=17, creationTime=2019-05-22T14:21:24.821534Z, isSymbolicLink=false, isRegularFile=true, fileKey=null, isOther=false, isDirectory=false}

    }
```

### 8.3.4. bio tcp 实现通信

(更多见这里 distributed-System#怎么实现子系统间的通信)

```java
/**
 * 系统间进行通信， 需要两个步骤：
 *
 * - 数据传输.  - 借助 tcp/ip, 或 udp/ip 协议
 *
 * - 数据处理（读取or 写入） - 同步io 或者 异步io
 *
 *      - 同步io分为 bio, nio
 *
 *          bio - 当发起io操作, 线程间为阻塞关系, 当前 thread 只有将流读取/写入完毕才会释放资源给其他等待的 thread
 *
 *          nio - 基于"事件驱动" 通过 Reactor模式 实现   thread 间非阻塞, 当 socket 有 stream 可读 或 有 stream 待被 socket
 *          写入时, 发出事件(如 连接建立事件, 流读取事件, 流写入事件), 由操作系统通知 app来处理
 *
 *      - 异步io 分为 aio
 *
 *          aio - 同样基于事件驱动, 通过 Proactor模式实现;
 *          和nio对比, 1. 简化编程, io操作由操作系统完成, app只要调用api即可; 2. 省略了 nio中需要遍历 事件通知队列(Selector)
 *          的时间
 *
 * 这样组合的话, 有四种通信方式: tcp/ip + bio, tcp/ip  + nio, udp/ip + bio, udp/ip + nio
 *
 * *************************************************************************************************
 *
 * 下面是 bio + tcp 方式
 *
 * @author xiaoyu
 * @since 1.0
 */
public class Client {

    //private String url = "127.0.0.1";
    //private int port = 9527;
    private Socket socket;
    private BufferedReader readerOnServer;
    private PrintWriter printerOnServer;
    private BufferedReader readerOnCli;

    public void init(String url, int port) throws IOException {
        socket = new Socket(url, port);
        readerOnServer = new BufferedReader(new InputStreamReader(socket.getInputStream()));
        printerOnServer = new PrintWriter(socket.getOutputStream(), true);
        readerOnCli   = new BufferedReader(new InputStreamReader(System.in));
    }

    public void start() throws IOException {
        while (true) {
            String line = readerOnCli.readLine();
            // exit
            if (testExit(line)) {
                break;
            }

            System.out.println(">>> send to server: " + line);
            // send to server
            printerOnServer.println(line);

            // receive from server
            String respLine = readerOnServer.readLine();
            System.out.println(">>> receive from server: " + respLine);
        }
    }

    private boolean testExit(String test) throws IOException {
        if (StringUtils.isBlank(test) || "exit".equalsIgnoreCase(test)) {
            printerOnServer.write("exit");
            close();
            System.out.println(">>> client exit.");
            return true;
        }
        return false;
    }

    private void close() throws IOException {
        printerOnServer.close();
        readerOnCli.close();
        readerOnServer.close();
        socket.close();
    }

    public static void main(String[] args) throws IOException {
        Client client = new Client();
        client.init("127.0.0.1", 9527);
        client.start();
    }
}

/**
 * 这个 server 只支持 单个 client 连接
 *
 * 多个 client 连接 server怎么办? 首先要 pass 掉 "在 server 中 创建多个 socket"的想法, 因为 生成 socket 是非常重的操作, 占
 * 用server资源非常多
 *
 * 通常用采用 "连接池", 好处是 🐶 能够限制创建的 socket个数; 🐶 避免重复创建 socket
 * 但是这种方式还是有问题: 连接池中 socket 总是有限的总有不够用的时候; server 需要设置超时时间, 防
 * 止 server 连带 client挂掉
 *
 * 如果要支持多个 client 连接， 可采用 线程池， 每个 socket 新开一个 thread。 这么做有缺点： 无论是否是有效请求， server
 * 都要耗费一个 thread
 * 味了避免 过多的 thread 耗尽 server的资源， 线程池必须是限定大小的。 <=> 采用 bio 方式的 server 支撑的连接数是有限的
 *
 * @author xiaoyu
 * @since 1.0
 */
public class Server {

    //private ServerSocket serverSocket;
    //private BufferedReader readerFromClient;
    //private PrintWriter writerToClient;
    //
    //public void initBlock(int port) throws IOException {
    //    this.serverSocket = new ServerSocket(port);
    //    this.readerFromClient = new BufferedReader(new InputStreamReader(serverSocket.accept().getInputStream()));
    //}

    public static void main(String[] args) throws IOException, InterruptedException {
        int port = 9527;
        ServerSocket socketServer = new ServerSocket(port);
        socketServer.setSoTimeout(60 * 1000); // unit : milliseconds
        System.out.println(">>> server listen on port: " + port);
        Socket socketClient = socketServer.accept(); // start

        BufferedReader readerFromClient = new BufferedReader(new InputStreamReader(socketClient.getInputStream()));
        //BufferedWriter writerToClient   = new BufferedWriter(new OutputStreamWriter(socketClient.getOutputStream()));
        PrintWriter writerToClient = new PrintWriter(socketClient.getOutputStream(), true);

        while (true) {
            String line = readerFromClient.readLine(); // start

            if (StringUtils.isBlank(line)) {// read nothing
                Thread.sleep(100);
                continue;
            }
            if ("exit".equalsIgnoreCase(line)) {
                // close
                readerFromClient.close();
                writerToClient.close();
                socketServer.close();

                System.out.println(">>> server exit");
                break;
            }

            System.out.println(">>> msg from client: " + line);

            writerToClient.println(line);
            System.out.println(">>> msg to client: " + line);
            Thread.sleep(100);
        }
        System.exit(0);

    }
}


```

## 8.4. 非阻塞 io

### 8.4.1. 什么是非阻塞 io

用户线程没有因为 IO 的事情出现阻塞，这就是常说的非阻塞 IO, 即数据已经拷贝到用户空间后，才去通知用户线程，一上来就可以直接操作数据了。

传统 io(block io) 不管是磁盘 I/O 还是网络 I/O，数据在写入 OutputStream 或者从 InputStream 读取时用户线程都有可能会阻塞, 一旦有线程阻塞将会失去 CPU 的使用权

nio 使得 server 使用 一个 thread 可以处理多个 client 的请求

### 8.4.2. 同步异步和阻塞非阻塞

#### 8.4.2.1. 同步与异步

形容多个事物之间的运行关系, 可以形容 方法, 线程, cpu 指令...

同步就是多个事物不能同时开工，异步就是多个事物可以同时开工

#### 8.4.2.2. 阻塞与非阻塞

形容一种事物状态

线程阻塞了, 表明线程被挂起, 不能动了, 让出了 CPU

#### 8.4.2.3. 四种组合

-   同步阻塞, 相当于一个线程在等待

    例如 java bio, I/O 性能一般很差，CPU 大部分在空闲状态。

-   同步非阻塞, 相当于一个线程在正常运行

    java nio

-   异步非阻塞 - 用户线程的继续执行，和操作系统准备 IO 数据的过程是同时进行的，因此才叫做异步 IO

    java aio

## 8.5. 多路复用 IO 即 java nio

### 8.5.1. 解释多路复用

多种数据信号混合在一起, 通过一条通路传输, 最终通过各自特定的处理器处理

比如 网络 io, 服务器端的工作线程不会把时间花在“等待数据”上, 但是会花在等待“读取数据”这个过程上

### 8.5.2. nio 和 io 区别

1)IO 是面向流的，NIO 是面向缓冲区的；

2)IO 流是阻塞的，NIO 流是不阻塞的;

3)NIO 有选择器，而 IO 没有。




阻塞io: 拿网络 IO 来说，等待的过程就是数据从网络到网卡再到内核空间。读写的过程就是内核空间和用户空间的相互拷贝. 应用程序都是运行在用户空间的，所以它们能操作的数据也都在用户空间。只要数据没有到达用户空间，用户线程就操作不了. 如果此时用户线程已经参与，那它一定会被阻塞在 IO 上。这就是常说的阻塞 IO。用户线程被阻塞在等待数据上或拷贝数据上.

非阻塞 IO : 就是用户线程不参与以上两个过程(数据传输, 数据拷贝)，即数据已经拷贝到用户空间后，才去通知用户线程，一上来就可以直接操作数据了

阻塞io 和非阻塞io区别就是用户线程会不会阻塞在等待数据或者数据拷贝上


### 8.5.3. Linux 中的多路复用支持

Linux下的select、poll和epoll就是干这个的。将用户socket对应的fd注册进epoll，然后epoll帮你监听哪些socket上有消息到达

这样，整个过程只在调用select、poll、epoll这些调用的时候才会阻塞，收发客户消息是不会阻塞的，整个进程或者线程就被充分利用起来，这就是事件驱动，所谓的reactor模式

### 8.5.4. 核心组件

java nio 就是 多路复用思想的实现

#### 8.5.4.1. 理解

Selector 可以同时监听一组通信信道（Channel）上的 I/O 状态

selectionKeys 表示 各个 client 的请求

另外 , 参考这里: https://tech.meituan.com/nio.html

#### 8.5.4.2. Channels

NIO Channel 通道和流的区别:

#### 8.5.4.3. Buffers

和 channel 交互

-   从 Channel 中读取数据到 buffers 里，从 Buffer 把数据写入到 Channels；

-   Buffer 本质上就是一块内存区

-   capacity 容量、position 位置、limit 限制。

api:

```java
ByteBuffer buf = ByteBuffer.allocate(28);//以ByteBuffer为例子
int bytesRead = inChannel.read(buf); //read into buffer.
buf.put(127);// put data into buf

```

#### 8.5.4.4. Selectors

其实对于选择器的个数、选择器运行在哪个线程里、是否使用新的线程来处理请求都没有要求，要根据实际情况来定。

比如说 redis，和处理请求相关的就一个线程，选择器运行在里面，处理请求的程序也运行在里面，所以这个线程既是 I/O 线程，也是 Worker 线程。

当然，也可以使用两个选择器，一个处理 OP_ACCEPT，一个处理 OP_READ，让它们分别运行在两个单独的 I/O 线程里。对于能快速完成的操作可以直接在 I/O 线程里做了，对于非常耗时的操作一定要使用 Worker 线程池来处理。

这种处理模式就是被称为的多路复用 I/O，多路指的是多个 Socket 通道，复用指的是只用一个线程来管理它们。

### 8.5.5. nio 实现网络通信

从通道进行数据读取 ：创建一个缓冲区，然后请求通道读取数据。

从通道进行数据写入 ：创建一个缓冲区，填充数据，并要求通道写入数据。

看个例子 - nio + tcp 实现通信 (https://examples.javacodegeeks.com/core-java/nio/java-nio-socket-example/)


见 distributed-System#怎么实现子系统间的通信

```java
/**
nio 实现网络通信
*/
public class NioServer {

  static int clientCount = 0;
  static AtomicInteger counter = new AtomicInteger(0);
  static SimpleDateFormat sdf = new SimpleDateFormat("HH:mm:ss");

  public static void main(String[] args) {
    try {
      Selector selector = Selector.open(); // 定义一个选择器

      // 定义一个服务器端套接字通道
      // 配置为非阻塞
      ServerSocketChannel ssc = ServerSocketChannel.open();
      ssc.configureBlocking(false);

        // 注册 ssc 到 选择器, 指定 ssc 关注的事件
      ssc.register(selector, SelectionKey.OP_ACCEPT);
      ssc.bind(new InetSocketAddress("localhost", 8080));

      //进入死循环, // 轮询, 选择器不时的进行选择
      while (true) {
        selector.select();
        Set<SelectionKey> keys = selector.selectedKeys();
        Iterator<SelectionKey> iterator = keys.iterator();
        while (iterator.hasNext()) {
          SelectionKey key = iterator.next();
          iterator.remove();
          if (key.isAcceptable()) {
              //选择器终于选择出了通道
            ServerSocketChannel ssc1 = (ServerSocketChannel)key.channel();
            SocketChannel sc = null;
            while ((sc = ssc1.accept()) != null) {
                //把新接受的通道配置为非阻塞的，并把它也注册到了选择器上，该通道感兴趣的操作为OP_READ。
              sc.configureBlocking(false);
              sc.register(selector, SelectionKey.OP_READ);
              InetSocketAddress rsa = (InetSocketAddress)sc.socket().getRemoteSocketAddress();
              System.out.println(time() + "->" + rsa.getHostName() + ":" + rsa.getPort() + "->" + Thread.currentThread().getId() + ":" + (++clientCount));
            }
          }
          //选择器终于又选择出了通道，这次发现通道是需要Readable的
          else if (key.isReadable()) {
            //先将“读”从感兴趣操作移出，待把数据从通道中读完后，再把“读”添加到感兴趣操作中
            //否则，该通道会一直被选出来
            key.interestOps(key.interestOps() & (~ SelectionKey.OP_READ));
            // 把这个通道交给了一个新的工作线程去处理
            processWithNewThread((SocketChannel)key.channel(), key);
          }
        }
      }
    } catch (Exception e) {
      e.printStackTrace();
    }
  }

  static void processWithNewThread(SocketChannel sc, SelectionKey key) {
    Runnable run = () -> {
      counter.incrementAndGet();
      try {
        String result = readBytes(sc);
        //把“读”加进去
        key.interestOps(key.interestOps() | SelectionKey.OP_READ);
        System.out.println(time() + "->" + result + "->" + Thread.currentThread().getId() + ":" + counter.get());
        sc.close();
      } catch (Exception e) {
        e.printStackTrace();
      }
      counter.decrementAndGet();
    };
    new Thread(run).start();
  }

  static String readBytes(SocketChannel sc) throws Exception {
    long start = 0;
    int total = 0;
    int count = 0;
    ByteBuffer bb = ByteBuffer.allocate(1024);
    //开始读数据的时间
    long begin = System.currentTimeMillis();
    while ((count = sc.read(bb)) > -1) {
      if (start < 1) {
        //第一次读到数据的时间
        start = System.currentTimeMillis();
      }
      total += count;
      bb.clear();
    }
    //读完数据的时间
    long end = System.currentTimeMillis();
    return "wait=" + (start - begin) + "ms,read=" + (end - start) + "ms,total=" + total + "bs";
  }

  static String time() {
    return sdf.format(new Date());
  }
}

```

## 8.6. java aio

没有阻塞点，当工作线程启动时，数据已经（被系统）准备好可以直接用了。

```java

public class AioServer {

  static int clientCount = 0;
  static AtomicInteger counter = new AtomicInteger(0);
  static SimpleDateFormat sdf = new SimpleDateFormat("HH:mm:ss");

  public static void main(String[] args) {
    try {
      AsynchronousServerSocketChannel assc = AsynchronousServerSocketChannel.open();
      assc.bind(new InetSocketAddress("localhost", 8080));
      //非阻塞方法，其实就是注册了个回调，而且只能接受一个连接
      assc.accept(null, new CompletionHandler<AsynchronousSocketChannel, Object>() {

        @Override
        public void completed(AsynchronousSocketChannel asc, Object attachment) {
          //再次注册，接受下一个连接
          assc.accept(null, this);
          try {
            InetSocketAddress rsa = (InetSocketAddress)asc.getRemoteAddress();
            System.out.println(time() + "->" + rsa.getHostName() + ":" + rsa.getPort() + "->" + Thread.currentThread().getId() + ":" + (++clientCount));
          } catch (Exception e) {
          }
          readFromChannelAsync(asc);
        }

        @Override
        public void failed(Throwable exc, Object attachment) {

        }
      });
      //不让主线程退出
      synchronized (AioServer.class) {
        AioServer.class.wait();
      }
    } catch (Exception e) {
      e.printStackTrace();
    }
  }

  static void readFromChannelAsync(AsynchronousSocketChannel asc) {
    //会把数据读入到该buffer之后，再触发工作线程来执行回调
    ByteBuffer bb = ByteBuffer.allocate(1024*1024*1 + 1);
    long begin = System.currentTimeMillis();
    //非阻塞方法，其实就是注册了个回调，而且只能接受一次读取
    asc.read(bb, null, new CompletionHandler<Integer, Object>() {
      //从该连接上一共读到的字节数
      int total = 0;
      /**
       * @param count 表示本次读取到的字节数，-1表示数据已读完
       */
      @Override
      public void completed(Integer count, Object attachment) {
        counter.incrementAndGet();
        if (count > -1) {
          total += count;
        }
        int size = bb.position();
        System.out.println(time() + "->count=" + count + ",total=" + total + "bs,buffer=" + size + "bs->" + Thread.currentThread().getId() + ":" + counter.get());
        if (count > -1) {//数据还没有读完
          //再次注册回调，接受下一次读取
          asc.read(bb, null, this);
        } else {//数据已读完
          try {
            asc.close();
          } catch (Exception e) {
            e.printStackTrace();
          }
        }
        counter.decrementAndGet();
      }

      @Override
      public void failed(Throwable exc, Object attachment) {

      }
    });
    long end = System.currentTimeMillis();
    System.out.println(time() + "->exe read req,use=" + (end -begin) + "ms" + "->" + Thread.currentThread().getId());
  }

  static String time() {
    return sdf.format(new Date());
  }
}

```

## 8.7. 断点续传

https://github.com/ryanlijianchang/ResumeBrokenDownloads

# 9. 代理

-   静态代理

    -   代理类实现目标接口, 内部维护一个接口类型的引用), jdk 原生实现

    -   aspectj 框架, 在编译期增强

-   动态代理:

    -   jdk 动态代理(只能针对接口进行代理), jdk 原生实现

    -   cglib 动态代理(直接针对类代理, 生成子类, 所以目标类不能是 final 的 ), 依赖 asm; 
    
        Spring aop 在给某个类提供动态代理时会自动在 jdk 动态代理和 cglib 动态代理中动态的选择。

    -   javaassist - javaassist 是使用最广泛的动态代理开源库, 无需类接口; javaassist 的 ProxyFactory 还提供了方法过滤器，它可以选择性地对特定方法进行增强。

# 10. Java 内存模型

java-memory-model.md

# 11. java8

## 11.1. 函数式编程的概念(FP)

vavr 增强库 (https://blog.csdn.net/gening4014/article/details/124326753)

-   函数可以作为参数传递给另外的函数, 在 Java 中本质还是创建了一个匿名类

-   函数可以作为另外函数的返回值

-   函数没有副作用 - 函数和外界交互唯一途径就是 参数 和 返回值

    副作用: 函数在 call 的过程中, 影响了函数的外部状态

-   Declaractive(申明式) 代替 Imperative(命令式)

-   不变的对象 -- 类似于 不变模式

    声明式的操作不会改变原始对象

-   容易 并行化 -- 这也是 "不变对象"的好处

```java
// Declaractive vs. Imperative:
private static void imperative(int[] arr) {
    for (int i : arr) {
        System.out.print(i+", ");
    }
}

private static void declaractive(int[] arr) {
    // jdk1.8
    Arrays.stream(arr).forEach(System.out::println);
}

//////////////////////////////////////

```

## 11.2. Java8 添加的新特性

-   default methods for interface 接口内允许默认实现, 实现 fluent api
-   Lambda expression
    -   lambda scope
        -   accessing local variables - final 可以不加, 最好加上, 必须保证变量只读
        -   accessing fields and static variables - 可读可写
        -   accessing default interface methods - lambda 中无法使用接口默认方法
-   method/constructor reference
    -   静态方法引用 -- ClassName:methodName
    -   实例方法引用
        -   通过类型对实例方法引用 -- ClassName::methodName
        -   通过实例对实例方法引用 -- instance::methodName
    -   超类上的方法引用 -- super::methodName
    -   构造方法引用 -- ClassName::new
    -   数组构造方法引用 -- TypeName[]::new
-   functional interface
    -   built-in functional interface
        -   Predicates - accept one arg and produce a predicate (and, or, negtive, isquals), 代表一段逻辑判断
        -   Functions - accept one arg and produce a result (andThen 一个一个接着执行, compose 从最内层开始执行), 代表一个功能
            -   BiFunction - 接收 两个参数
        -   Suppliers - do not accept any arg, produce a object of a given type, 表示一个对象工厂
        -   Consumers - accept one arg and perform some operations on it, 消费者
        -   Comparators - 比较器
-   optional - a container for a value, 并非 functional interface, 用于防止空指针异常
-   stream - represents a sequence of elements, on which some operations can be performed; stream opts are either 中间操作 and 终止操作; 流都是一次性的, 一旦 terminal opts 调用, 流就关闭了, 再用就会异常, 可通过构造一个 Suplier 来重用 stream;
    -   中间操作(intermediate opts) - 只有存在 terminal opts 时才会实际执行; 并且是每个 element 走完整个链条, 才会进入下一个 element(利于减少操作数, 比如对于 anyMatch 操作, 只要一个元素符合就返回最总结果 true)
        -   Filter - accept a predicate and return a filtered stream - 一般放在链条首位, 减少操作数
        -   Sorted - accept a comparator or nothing and return a sorted view of stream; 只是生成视图, 并不改变原始 collection
        -   Map - accept a function and perform on each element of the stream
    -   终点操作(terminal opts)
        -   forEach - accept a consumer to be executed for each element in the stream
        -   Match - accept a predicate and return a boolean result; 检查这个 stream 中的每个元素是否符合 predicate
            -   anyMatch 任何一个符合 return true
            -   allMatch 全都符合 return true
            -   noneMatch 没有符合的元素 return true
        -   Count - return the number of element as a long value
        -   Reduce - accept a function and return a optional representing the reducing value;
        -   Collect - accept a collector, transfer a stream to collection
            -   有许多 builtin 的 collector, 如 Collectors.toList()...
    -   sequential stream(串行流)
        -   实例方法 someList.stream()
        -   静态方法 Arrays.stream(arr)
        -   静态方法 Stream.of(...)
    -   Parallel Streams(并行流)
        -   someList.parallelStream()
        -   Stream.parallel()
-   maps
    -   `map.keySet().stream()`, `map.values().stream()` and `map.entrySet().stream()`.
    -   putIfAbsent(key, value) - 若确实, 则存入; --->  如果 key 没有在 map 中, 存入, 如果 key 存在 map 了, 返回 oldValue; 主要是免除了 null check
    -   merge(key,  newValue, biFunction) - 根据 key 查 value, 如果没查到, 保存, 如果查到了, 根据 biFunction 构造 newValue 保存; biFunction(oldValue, newValue) 返回计算后的值
    -   forEach - accept a consumer
    -   computeIfPresent(key, biFunction) - 接收一个 key, 一个 biFunction, 检查 key 是否 null, 找到这个 entry, 根据 biFunction 计算出新的 value 重新 put 进 map; biFunction(key, value) 返回计算的值
    -   computeIfAbsent - 如果根据 key 获取不到 value, 则计算新的 value 并 put 进去
    -   remove(key, value) - value 符合才移除 key 对应的元素
    -   getOrDefault(key, def_value) - 没有就返回默认值
-   Date api - java.time 包下, 线程安全
    -   Clock - 时钟, 时间统计
    -   Timezones - 时区
    -   LocalTime - 没有 time zone 的时间
    -   LocalDate - 日期
    -   LocalDateTime - 日期时间
-   Annotations
    -   注解里面允许注解, 允许重复
    -   注解允许放在新的地方: ElementType.TYPE_PARAMETER, ElementType.TYPE_USE
-   CompletableFuture - 增强版本的 Future
    -   future.get() 获取最终结果, 会阻塞, 等待完成
    -   future.complet(xxx) 任务完成
    -   CompletableFuture.supplyAsync(xxx) 构造 future, 有返回值
    -   CompletableFuture.runAsync(xxx) 构造 future, 无返回值
    -   流式调用
    -   异常处理


### 11.2.1. 接口默认方法

java8 内置的许多函数式接口用到了"接口默认实现", 这使得 Java8 拥有了类似 多继承的能力: 一个对象实例, 拥有多个接口提供的实例方法

而这也使得接口默认方法会碰到 多继承一样的问题 -- 如果两个父类拥有相同名称的方法, 子类不知道以哪个的为准, 会抛异常

利用 接口默认方法, 可以实现顺畅的 fluent api

```java
// 典型 Demo
interface Formula {
    double calculate(int a);

    default double sqrt(int a) {
        return Math.sqrt(a);
    }
}

/////////////////////////////////////////

private static void intConsumerAndThenTest() {
    IntConsumer println = System.out::println;// 输出到标准输出
    IntConsumer errPrintln = System.err::println;// 输出到 错误输出
    Arrays.stream(arr).forEach(println.andThen(errPrintln));
}

// IntConsumer的实现

@FunctionalInterface
public interface IntConsumer {

    void accept(int value);

    //先调用 accept, 然后after.accept()
    default IntConsumer andThen(IntConsumer after) {
        Objects.requireNonNull(after);
        return (int t) -> { accept(t); after.accept(t); };
    }
}


```

### 11.2.2. @FunctionalInterface-函数接口

用于标注函数式接口 - 这个接口中只有一个抽象方法(attention: 允许存在其他的接口默认方法 or Object 中包含的方法); 是否添加这个注解不是强制性的, 类似 @Override, 只是为了提供编译检查

本质是延迟了函数的定义, 使用的时候再来定义函数的具体实现, 方便了 lambda 表达式

函数式接口的实例通过 "方法引用" 和 "lambda" 构造

```java
// 定义函数式接口
@FunctionalInterface
interface Converter<F, T> {
    T convert(F from);// 只包含一个抽象方法
}

// 这个也是一个函数式接口
@FunctionalInterface
interface IntHandler {
    void handl(int i);
    boolean equals(Object obj);// equals() 被 Object 实现了, 而IntHandler的实例默认继承自Object
}

// 使用

Converter<String, Integer> converter = (from) -> Integer.valueOf(from);
Integer converted = converter.convert("123");
System.out.println(converted);    // 123
```

### 11.2.3. 方法的引用

用来简化 lambda 表达式

-   静态方法引用 -- ClassName:methodName
-   实例方法引用
    -   通过类型对实例方法引用 -- ClassName::methodName
    -   通过实例对实例方法引用 -- instance::methodName
-   超类上的方法引用 -- super::methodName
-   构造方法引用 -- ClassName::new
-   数组构造方法引用 -- TypeName[]::new

不要试图用在重载方法上, 编译器碰到多个相同的名称的方法会感到困惑, 抛出异常

```java
/**
 * main
 */
public class App {
    private static final Logger log = LoggerFactory.getLogger(App.class);
    public static void main( String[] args ){
        System.out.println( "java 8" );
    }
    /**
     * :: 普通函数的引用
     */
    private static void test3() {
        Person person = new Person("Peter", "Parker");
        String ret = person::sayAndReturn;//// 编译无法通过, [String ret ] 无法接受一个函数
                                    // person::sayAndReturn 返回的式方法引用, 而不是 方法执行的结果
        // 编译通过, test方法符合Converter中的接口规范
        Converter<String, String> converter = person::test;

        Demo demo = new Demo();
        Converter<String, String> converter2 = demo::startWith;// 接收一个string, 返回第一个字符
                                                // (strtWith的输入输出要和Converter的函数式接口匹配)
        String firstLetter = converter2.convert("Java");
        log.info(firstLetter);
    }
    /**
     * :: constructor reference
     */
    private static void test2() {
        PersonFactory<Person> personFac =  Person::new;// Person::new表示Person的构造函数
                                        // 的reference, 也是 PersonFactory 这个函数式接口的一个实例;
                                        // 刚好用 personFac 接收
        Person person = personFac.create("Peter", "Parker");
    }
    @FunctionalInterface
    interface PersonFactory<P extends Person> {
        P create(String first, String last);
    }

}

```

### 11.2.4. Lambda 表达式

#### 11.2.4.1. lambda 介绍

本质就是匿名类

lambda 表达式可以使用外部变量, 但是 lambda 一旦定义, 这个外部变量就不能改变了, 应该视为 "final"

```java
List<String> names = Arrays.asList("peter", "anna", "mike", "xenia");

// old版本
Collections.sort(names, new Comparator<String>() {
    @Override
    public int compare(String a, String b) {
        return b.compareTo(a);
    }
});

// Lambda表达式
Collections.sort(names, (String a, String b) -> {
    return b.compareTo(a);
});
//更简单1
Collections.sort(names, (String a, String b) -> b.compareTo(a));
// 更简单2
Collections.sort(names, (a, b) -> b.compareTo(a));// 编译器知道参数类型，所以可以跳过它们不写
```

#### 11.2.4.2. Lambda 作用域问题

##### 11.2.4.2.1. 访问局部变量

局部变量必须声明为: final 或者隐式 final

```java
//// 这样可以
final int num = 1;
Converter<Integer, String> stringConverter = (from) -> String.valueOf(from + num);
stringConverter.convert(2);     // 3

/// 这样可以(隐式final)
int num = 1;
Converter<Integer, String> stringConverter = (from) -> String.valueOf(from + num);
stringConverter.convert(2);     // 3

// 这样无法编译
int num = 1;
Converter<Integer, String> stringConverter = (from) -> String.valueOf(from + num);
num = 3;// 不是final的了
```

##### 11.2.4.2.2. 访问成员变量

很普通, 可读可写

```java
class Lambda4 {
    static int outerStaticNum;
    int outerNum;

    void testScopes() {
        Converter<Integer, String> stringConverter1 = (from) -> {
            outerNum = 23;
            return String.valueOf(from);
        };

        Converter<Integer, String> stringConverter2 = (from) -> {
            outerStaticNum = 72;
            return String.valueOf(from);
        };
    }
}
```

##### 11.2.4.2.3. 访问默认接口方法

不能访问

```java
interface Formula {
    double calculate(int a);

    default double sqrt(int a) {
        return Math.sqrt(a);
    }
}

// 编译不通过,
Formula formula = (a) -> sqrt( a * 100);
```

## 11.3. java8 中的并行流

### 11.3.1. 使用并行过滤数据

parallel() - 得到并行流

```java
private static long countPrime() {

    // long count = IntStream.range(1, 5).filter(Lambdda::isPrime).count();

    // 使用并行模式
    // Lambdda::isPrime 会被多线程并发调用
    long count = IntStream.range(1, 10000).parallel().filter(Lambdda::isPrime).count();

    System.out.println(count);
    return count;
}

/**
    * 判断是否质数
    * 质数: 只能被 1和它本身整除
    * @param target
    * @return
    */
private static boolean isPrime(int target) {
    if (target < 2) {
        return false;
    }
    for (int i = 2; i <= Math.sqrt(target); i++) {
        if (target % i == 0) {
            return false;
        }
    }
    // System.out.println("prime: " + target);
    return true;
}

```

### 11.3.2. 从集合得到并行流

```java
private static void average() {
    ArrayList<Student> stuList = new ArrayList<Student>();
    stuList.add(new Student(1));
    stuList.add(new Student(2));
    stuList.add(new Student(3));

    // 从集合获取流
    double asDouble = stuList.stream().mapToInt(stu -> stu.score).average().getAsDouble();
    // 并行流
    double asDouble2 = stuList.stream().parallel().mapToInt(stu -> stu.score).average().getAsDouble();
    System.out.println(asDouble);
}

```

### 11.3.3. 并行排序-给数组赋值

```java
private static void parallelSort() {
    int[] bigArr = new int[100];
    Arrays.setAll(bigArr, ele -> new Random().nextInt(200));
    // 并行赋值
    // Arrays.parallelSetAll(bigArr, ele -> new Random().nextInt());

    // 排序
    Arrays.sort(bigArr);
    // 并行排序
    // Arrays.parallelSort(bigArr);

    Arrays.stream(bigArr).forEach(System.out::println);
}

```

## 11.4. CompletableFuture 接口-增强的 Future

### 11.4.1. java 异步编程

```java
/* 

异步的几种方式

    Thread 方式: 对耗时的任务新开一个线程, 主线程继续往下执行
        缺点: 创建线程没有复用 (这个问题使用线程池可以解决。)
            异步任务无法获取最终的执行结果, 使用  FutureTask 可以解决
    
    Guava 库提供的 ListenableFuture 和 Futures 类

    spring 框架提供的 @Async 等注解实现异步处理

    FutureTask 方式: 自 JDK 1.5 开始，引入了 Future 接口和实现 Future 接口的 FutureTask 类来表示异步计算结果
                    实现了 Future 接口还实现了 Runnable 接口，表示一种可生成结果的 Runnable
        缺点:使用还是比较复杂, 多个异步任务的组合比较, 依赖关系比较难表达
    
    CompletableFuture: 自 jdk1.8引入, 实现了 Future 和 CompletionStage 接口




*/


```


### 11.4.2. 原理介绍

CompletableFuture 是超大型工具类, 方法巨多, 实现了 Future , CompletionStage, 主要是为了方便多线程异步任务的编排

Callable，有结果的同步行为，比如做蛋糕，产生蛋糕
Runnable，无结果的同步行为，比如喝牛奶，仅仅就是喝
Future，异步封装Callable/Runnable，比如委托给师傅（其他线程）去做糕点
CompletableFuture，封装Future，使其拥有回调功能，比如让师傅主动告诉我蛋糕做好了

创建时需要传递线程池, 不传则使用默认 pool

### 11.4.3. completablefuture api

```java

// 创建

// supplyAsync方法, 关注返回值
// 
//使用默认内置线程池ForkJoinPool.commonPool()，根据supplier构建执行任务
public static <U> CompletableFuture<U> supplyAsync(Supplier<U> supplier)
//自定义线程，根据supplier构建执行任务
public static <U> CompletableFuture<U> supplyAsync(Supplier<U> supplier, Executor executor)


// runAsync方法, 不支持不关注返回值
// 
//使用默认内置线程池ForkJoinPool.commonPool()，根据runnable构建执行任务
public static CompletableFuture<Void> runAsync(Runnable runnable) 
//自定义线程，根据runnable构建执行任务
public static CompletableFuture<Void> runAsync(Runnable runnable,  Executor executor)



// 异步回调


// 做完第一个任务后，再做第二个任务。前后两个任务没有参数传递(即不关心上个任务的结果)，第二个任务(即这里的 action)也没有返回值
public CompletableFuture<Void> thenRun(Runnable action);
// 等效thenRun, 区别:
// 如果你执行第一个任务的时候，传入了一个自定义线程池：
    // 调用thenRun方法执行第二个任务时，则第二个任务和第一个任务是共用同一个线程池。
    // 调用thenRunAsync执行第二个任务时，则第一个任务使用的是你自己传入的线程池，第二个任务使用的是ForkJoin线程池
public CompletableFuture<Void> thenRunAsync(Runnable action);

// 依赖上个任务的结果, 有传参, 无返回值 ( 第一个任务执行完成后，执行第二个回调方法任务，会将该任务的执行结果，作为入参，传递到回调方法中，但是回调方法是没有返回值的。)
thenAccept/thenAcceptAsync

// 依赖上个任务结果, 有传参, 有返回值
thenApply/thanApplyAsync

// 某个任务异常, 执行的回调方法
exceptionally(e -> {e.print...})

// 某个任务执行完成后, 执行的回调方法   , 回调方法无返回值, 但是方法本身有返回值, 返回上个任务的结果
whenComplete((last_result, e) -> {no return_value})

//某个任务执行完成后, 执行的回调方法   , 回调方法有返回值 , 方法本身返回回调方法的 result
handle((last_result, e) -> {return_value})



// 多个任务组合处理


// and 的关系
thenCombine / thenAcceptBoth / runAfterBoth
// 都表示：将两个CompletableFuture组合起来，只有这两个都正常执行完了，才会执行某个任务。
// 区别在于：
// thenCombine：会将两个任务的执行结果作为方法入参，传递到指定方法中，且有返回值
// thenAcceptBoth: 会将两个任务的执行结果作为方法入参，传递到指定方法中，且无返回值
// runAfterBoth 不会把执行结果当做方法入参，且没有返回值。

// or 的关系
applyToEither / acceptEither / runAfterEither 
// 都表示：将两个CompletableFuture组合起来，只要其中一个执行完了,就会执行某个任务 
// 区别在于：
// applyToEither：会将已经执行完成的任务，作为方法入参，传递到指定方法中，且有返回值
// acceptEither: 会将已经执行完成的任务，作为方法入参，传递到指定方法中，且无返回值
// runAfterEither： 不会把执行结果当做方法入参，且没有返回值。

AllOf
// 所有任务都执行完成后，才执行 allOf返回的CompletableFuture。
//如果任意一个任务异常，allOf的CompletableFuture，执行get方法，会抛出异常

AnyOf
// 任意一个任务执行完，就执行anyOf返回的CompletableFuture。
// 如果执行的任务异常，anyOf的CompletableFuture，执行get方法，会抛出异常

thenCompose/thenComposeAsync
// 在某个任务执行完成后，将该任务的执行结果,作为方法入参,去执行指定的方法。
// 该方法会返回一个新的CompletableFuture实例

// 和 thenApply 区别:
// thenApply()接收的是前一个调用返回的结果，然后对该结果进行处理。
//          它的功能相当于将CompletableFuture<T>转换成CompletableFuture<U>。
//          转换的是泛型中的类型，是同一个CompletableFuture
// thenCompose()接收的是前一个调用的stage，返回flat之后的的CompletableFuture。
//          他的功能是用来连接两个CompletableFuture
//          是生成一个新的CompletableFuture
// 简单点比较，两者就像是map和flatMap的区别。


// 注意:
// Future需要获取返回值，才能获取异常信息

// CompletableFuture代码中又使用了默认的线程池，处理的线程个数是电脑CPU核数-1。在大量请求过来的时候，处理逻辑复杂的话，响应会很慢。一般建议使用自定义线程池，优化线程池配置参数

// 自定义线程池时，注意饱和策略
// CompletableFuture的get()方法是阻塞的，我们一般建议使用future.get(3, TimeUnit.SECONDS)。并且一般建议使用自定义线程池。
// 但是如果线程池拒绝策略是DiscardPolicy或者DiscardOldestPolicy，当线程池饱和时，会直接丢弃任务，不会抛弃异常。因此建议，CompletableFuture线程池策略最好使用AbortPolicy，然后耗时的异步线程，做好线程池隔离哈
```


### 11.4.4. 完成了就通知我-手动填充结果

可作为函数调用的契约(真实返回值的包装)

```java
/**
 * CompletableFutureDemo  复杂的计算在 main thread
 */
public class CompletableFutureDemo {
    // block until main thread complete the complex compute, then print result
    private static class AskTask implements Runnable {
        private CompletableFuture<Integer> future;

        public AskTask(CompletableFuture<Integer> future) {
            this.future = future;
        }

        @Override
        public void run() {
            try {
                Integer integer = future.get();// 阻塞, CompletableFuture为 "未完成" 状态
                System.out.println(integer);
            } catch (InterruptedException | ExecutionException e) {
                e.printStackTrace();
            }
        }

    }

    public static void main(String[] args) throws InterruptedException {
        CompletableFuture<Integer> future = new CompletableFuture<Integer>();
        new Thread(new AskTask(future)).start();// 启动等待线程

        // simulate complex compute
        Thread.sleep(1000);

        // 告知运算结果: 100
        future.complete(100);// 此时为 "完成"状态
    }
}

```

### 11.4.5. 异步执行任务

这个 demo 刚好和上面的 demo 相反, 负责的计算不在 main thread

```java
public static void main(String[] args) throws InterruptedException, ExecutionException {

    CompletableFuture<Integer> supplyAsync = CompletableFuture.supplyAsync(() -> calculate(20));
                                    // supplyAsync() 用于需要有返回值的场景, 可传递 pool
                                    // runAsync() 用于无需返回值的场景, 可传递 pool
    // do sth else;

    System.out.println(supplyAsync.get());
}

private static Integer calculate(Integer param) {
    try {
        // simulate complex calculation
        Thread.sleep(1000);
    } catch (InterruptedException e) {
        e.printStackTrace();
    }

    return param * param;
}

```

### 11.4.6. 流式调用组合多个 function 和 异常处理

线程串行化 (等待前置 任务完成后再...)

thenapply() 等待完成然后处理, 有返回值
thenrun() .... 没有返回值, 没有传入参数
thenaccept() 等待完成然后消费


带有 async 的方法则新任务是新开一个thread 执行, 不带 async 的方法则新任务是和前置任务共用 thread

```java
private static void fluentApiDemo() throws InterruptedException, ExecutionException {
    CompletableFuture<Void> future = CompletableFuture.supplyAsync(() -> calculate(50))
            .thenApply(i -> Integer.toString(i)).thenApply(str -> "\"" + str + "\"")
            .thenAccept(System.out::println);// 结果: "2500"
            
//   也可以在流调用中使用 whencomplete((resp, e) -> {})    异常处理
//                  类似 的 handle(( resp, e) -> {return ...}), 可以有返回值
    future.get(); // 需要让 main thread 阻塞, 等待 calculate执行完
    System.out.println(future.get());// 阻塞 // 结果: null
}

private static Integer calculate(Integer param) {
    try {
        // simulate complex calculation
        Thread.sleep(1000);
    } catch (InterruptedException e) {
        e.printStackTrace();
    }

    return param * param;
}

```

异常处理


```java
private static void fluentApiDemo() throws InterruptedException, ExecutionException {
    CompletableFuture<Void> future = CompletableFuture.supplyAsync(() -> calculate(50))
    //   也可以在流调用中使用 whencomplete((resp, e) -> {})    异常处理
//                  类似 的 handle(( resp, e) -> {return ...}), 可以有返回值
            .exceptionally(e -> {           // 对 calculate 方法的异常处理
                e.printStackTrace(); // java.util.concurrent.CompletionException: java.lang.ArithmeticException: / by zero
                return 0; // 最终处理结果 : "0"
            })
            .thenApply(i -> Integer.toString(i)).thenApply(str -> "\"" + str + "\"")
            .thenAccept(System.out::println);// 结果: "2500"
    future.get(); // 需要让 main thread 阻塞, 等待 calculate执行完
    System.out.println(future.get());// 阻塞 // 结果: null
}

private static Integer calculate(Integer param) {
    int i = param/0;
    try {
        // simulate complex calculation
        Thread.sleep(1000);
    } catch (InterruptedException e) {
        e.printStackTrace();
    }

    return param * param;
}

```

### 11.4.7. 组合多个 CompletableFuture



```java
// 顺序完成
private static void composeCompletableFutureDemo() throws InterruptedException, ExecutionException {
    CompletableFuture<Void> future = CompletableFuture.supplyAsync(() -> calculate(20))
        .thenCompose(i -> CompletableFuture.supplyAsync(() -> calculate(i)))
                    // 等待上一个future得到结果, 然后将上一个 future 的
                    // 结果传入(这俩 future 是依赖关系), 再次构造一个 future
        .thenApply(i -> "\"" + i + "\"").thenAccept(System.out::println);// 结果: "160000"
    future.get();
}

// 另一种组合的方法
// 没有顺序, 但是都要完成
private static void composeCompletableFutureDemo() throws InterruptedException, ExecutionException {
    CompletableFuture<Void> future = CompletableFuture.supplyAsync(() -> calculate(20))
        // 首先完成前一个 future  和 跟着的 future (这俩future 没有任何关系), 然后将两者结果进行计算
        .thenCombine(CompletableFuture.supplyAsync(() -> calculate(10)), (i, j) -> {
            System.out.println("i=" + i);
            System.out.println("j=" + j);
            return i + j;
        })
        .thenApply(i -> "\"" + i + "\"").thenAccept(System.out::println);
                    // 结果:i=400 j=100 "500"

    future.get();
}

// 没有顺序的组合方法
CompletableFuture.allOf(f1,f2).join();


// 只要一个完成

applyToEither() 任一完成, 获取返回值, 处理然后又有新的返回值
accepttoeither() 
runaftereither()
```

## 11.5. StampedLock-读写锁的改进

## 11.6. LongAdder-原子类的增强

内部仍然使用 CAS 操作, 但是使用 "热点数据分离" 的思想, 类似 ConcurrentHashMap 将内部数据分离到多个 segment

LongAdder 将 AtomicInteger 内部的核心数据 value 分解为一个 数组, 每个 thread 访问就通过 hash 算法映射到数组其中一个元素进行计算, 最终的结果则是这个数组的求和累加

## 11.7. java8 内置函数式接口

### 11.7.1. Predicates(谓词, 断定)

`apply(T input): boolean` 输入一个对象，返回 true 或者 false

```java
Predicate<String> predicateStr = (str) -> str.length() > 0;
boolean test = predicateStr.test("ssss");
log.info(test+"");

Predicate<Boolean> nonNull = Objects::nonNull;
Predicate<Boolean> isNull = Objects::isNull;

Predicate<String> isEmpty = String::isEmpty;
Predicate<String> isNotEmpty = isEmpty.negate();
```

### 11.7.2. Functions(函数)

`apply(S input): T` Functions 接受一个参数，并产生一个结果。默认方法可以将多个函数串在一起（compse, andThen）

```java
Function<String, Integer> toInteger = Integer::valueOf;
Function<String, String> backToString = toInteger.andThen(String::valueOf);

backToString.apply("123");     // "123"

```

### 11.7.3. Suppliers(生产者)

就好像一个 bean 工厂

Suppliers 产生一个给定的泛型类型的结果, 与 Functional 不同的是 Suppliers 不接受输入参数。

```java
// 由于personSupplier不接受输入参数, 则调用的是person的无参数Constructor
Supplier<Person> personSupplier = Person::new;
personSupplier.get();   // new Person
```

### 11.7.4. Consumers(消费者)

Consumers 代表在一个单一的输入参数上执行操作。

```java

Consumer<Person> greeter = (p) -> System.out.println("Hello, " + p.name);
greeter.accept(new Person("Luke", "Skywalker"));
```

### 11.7.5. Comparators(比较器)

Comparators 在旧版本 Java 中是众所周知的。Java8 增加了各种默认方法的接口

```java
Comparator<Person> comparator = (p1, p2) -> p1.name.compareTo(p2.name); // 升序, 若 p2.name.compareTo(p1.name) 则是降序

// 在 stream 中, stream.max(comparator) 取最大值, 需要 comparator 是升序排序器

// 升序排序 也可以简写 Comparator.comparing(o -> Long.valueOf(o.getVersion()))

Person p1 = new Person("John", "Doe");
Person p2 = new Person("Alice", "Wonderland");

comparator.compare(p1, p2);             // > 0
comparator.reversed().compare(p1, p2);  // < 0
```

### 11.7.6. Optional

可选对象, 是对 object 的一层包装

Optionals 是没有任何函数的接口，唯一作用是防止 NullPointerException 异常

Optional is a simple container for a value which may be null or non-null. Think of a method which may return a non-null result but sometimes return nothing. Instead of returning null you return an Optional in Java 8.
(Optional 是一个简单的容器，这个值可能是空的或者非空的。考虑到一个方法可能会返回一个 non-null 的值，也可能返回一个空值。为了不直接返回 null，我们在 Java 8 中就返回一个 Optional。)

常用 api:

```java
Optional.of()
Optional.ofNullable()
Optional.empty()

public<U> Optional<U> map(Function<? super T, ? extends U> mapper)
public T orElse(T other)       
    // 若内部 object 不为 null, 返回 object, 否则返回 other
    //          传入一个 method call, 则这个方法总是会执行, 无论内部 object是否为 null
public T orElseGet(Supplier<? extends T> other)
    //          method call 只会在 内部 object 为 null 时执行, 更推荐使用这个
public void ifPresent(Consumer<? super T> consumer)
public Optional<T> filter(Predicate<? super T> predicate)
public<U> Optional<U> flatMap(Function<? super T, Optional<U>> mapper)
    // 类似 map(), 区别是 flatMap 返回的是一个没有包装的值, map()返回的是带包装的值
public <X extends Throwable> T orElseThrow(Supplier<? extends X> exceptionSupplier) throws X
```

```java
/**
* optional api 示例
*/
private static void test5() {
    Optional<String> opt = Optional.of("mama");

    // 不推荐使用
    log.info(opt.isPresent()+"");
    log.info(opt.get());


    log.info(opt.orElse("elseValue"));
    opt.ifPresent((s) -> log.info(s.charAt(0)+""));
    opt.flatMap((input) -> {
        return null; // 返回的是一个Optionnal
    });
    opt.map((input) -> {
        return null;// 返回的是一个Object
    });
}

return user.orElse(null);  //而不是 return user.isPresent() ? user.get() : null;
return user.orElse(UNKNOWN_USER);
eturn user.orElseGet(() -> fetchAUserFromDatabase());
user.ifPresent(System.out::println);
return user.map(u -> u.getOrders()).orElse(Collections.emptyList())

// 最佳实践
 private String getName2(User_1 user_1) {
    return Optional.ofNullable(user_1)
            .map(user1 -> user1.user_2)
            .map(user_2 -> user_2.name)
            .orElseThrow(RuntimeException::new);
}

```


optional 直接生成 stream

```java
Optional<String> optional = Optional.of("ggg");
// java 8
Stream<String> texts = optional.map(Stream::of).orElseGet(Stream::empty);
Stream<String> hello = Optional.of(new String[] {"hello", "aa", "bb"}).map(Stream::of).orElseGet(Stream::empty);
// java 9
Stream<String> texts = optional.stream();
```

## 11.8. Streams(管道)

### 11.8.1. stream 介绍

https://github.com/biezhi/learn-java8/blob/master/java8-stream/README.md

-   `java.util.Stream`

-   流是一个源产生的，例如 java.util.Collection(比如:Collection.stream()或 Collection.parallelStream())

-   操作的都是集合的视图, 原集合没有变化

-   Parallel Streams(并行管道): 通过`list.parallelStream()`获取 paralled stream, 效率极大提升

-   stream 只能使用一次, 重复使用需要构造一个 Supplier

```java
IntStream.range(1, 4)
        .forEach(System.out::println);

Arrays.stream(new int[] {1, 2, 3})
        .map(n -> 2 * n + 1)
        .average()
        .ifPresent(System.out::println);
```

### 11.8.2. 重复使用 stream

通过 supplier: (本质就是调用 get() 时 重新生成了流, 所以, 流生成不能写在 supplier 外部)

```java
Supplier<Stream<String>>  supplier = () -> Stream.of("hello", "aa", "bb");
boolean        aa    = supplier.get().allMatch(s -> s.equalsIgnoreCase("aa"));
boolean        aa1   = supplier.get().anyMatch(s -> s.equalsIgnoreCase("aa"));
System.out.println(aa);
System.out.println(aa1);
```

### 11.8.3. map 和 flatMap

map 接收一个函数, 函数返回处理后的 stream

flatmap, 接受一个函数, 函数返回 stream, 最后会将各个 stream 合并为一个 stream

### 11.8.4. 去重

```java
stream 有 distinct()

根据某个 object 属性去重:
studentList = studentList.stream().collect(
      collectingAndThen(
        toCollection(() -> new TreeSet<>(Comparator.comparing(Student::getName))), ArrayList::new)
    );
```

### 11.8.5. collect方法 如何收集处理后的元素 分组 去重

```java
// set , 去重
System.out.println(Stream.of("a", "b", "c","a").collect(Collectors.toSet()));

// 转换为特定 集合
TreeSet<String> treeSet = Stream.of("a", "c", "b", "a").collect(Collectors.toCollection(TreeSet::new));

//对于string列表去重
List stringList；
stringList = stringList.stream().distinct().collect(Collectors.toList());
// 对于实体类的去重
//通过hashcode()和equals()方法来获取不同元素，因此需要去重的类必须实现hashcode()和equals()方法
List studentList；
studentList = studentList.stream().distinct().collect(Collectors.toList());

// 根据 List 中 Object 某个属性去重(姓名去重)
List studentList;
studentList = studentList.stream()
.collect(collectingAndThen(toCollection(() -> new TreeSet<>(Comparator.comparing(Student::getName))), ArrayList::new));
//根据List 中 Object 多个属性去重(姓名，年龄去重)
ListstudentList；
studentList=studentList.stream()
.collect(Collectors.collectingAndThen(Collectors.toCollection(() -> new TreeSet<>(Comparator.comparing(o -> o.getName() + “;” + o.getAge()))), ArrayList::new));



//参数:  toMap(
    //     keyMapper,
    //     valueMapper,
    //     mergeFunction // biFunction(oldVal, newVal) 表示 若 构造当前键值对时, key 对应的 value 已经存在, 则使用这个方法生成新的 value
    //  )
Map<String, String> collect = Stream.of("a", "b", "c", "a").collect(Collectors.toMap(x -> x, x -> x + x,(oldVal, newVal) -> newVal)));

// Collectors.minBy(Integer::compare)：求最小值，相对应的当然也有maxBy方法。

// Collectors.averagingInt(x->x)：求平均值，同时也有averagingDouble、averagingLong方法。

// Collectors.summingInt(x -> x))：求和

//Collectors.summarizingDouble(x -> x)：可以获取最大值、最小值、平均值、总和值、总数。
DoubleSummaryStatistics summaryStatistics = Stream.of(1, 3, 4).collect(Collectors.summarizingDouble(x -> x));
System.out.println(summaryStatistics .getAverage());

//Collectors.groupingBy(x -> x)：有三种方法，查看源码可以知道前两个方法最终调用第三个方法，第二个参数默认HashMap::new  第三个参数默认Collectors.toList()
Map<Integer, List<Integer>> map = Stream.of(1, 3, 3, 2).collect(Collectors.groupingBy(Function.identity()));//identity()是Function类的静态方法,和 x->x 是一个意思,当仅仅需要自己返回自己时,使用identity()能更清楚的表达作者的意思.写的复杂一点,绕一点,对理解很有好处
Map<Integer, Integer> map1 = Stream.of(1, 3, 3, 2).collect(Collectors.groupingBy(Function.identity(), Collectors.summingInt(x -> x)));
HashMap<Integer, List<Integer>> hashMap = Stream.of(1, 3, 3, 2).collect(Collectors.groupingBy(Function.identity(), HashMap::new, Collectors.mapping(x -> x + 1, Collectors.toList())));



// Collectors.partitioningBy(x -> x > 2)，把数据分成两部分，key为ture/false。第一个方法也是调用第二个方法，第二个参数默认为Collectors.toList()
Map<Boolean, List<Integer>> map = Stream.of(1, 3, 3, 2).collect(Collectors.partitioningBy(x -> x > 2));
Map<Boolean, Long> longMap = Stream.of(1, 3, 3, 2).collect(Collectors.partitioningBy(x -> x > 1, Collectors.counting()));

//Collectors.joining(",")：拼接字符串
System.out.println(Stream.of("1", "3", "3", "2").collect(Collectors.joining(",")));


//Collectors.collectingAndThen(Collectors.toList(), x -> x.size())：先执行collect操作后再执行第二个参数的表达式。这里是先塞到集合，再得出集合长度。
Integer integer = Stream.of("1", "2", "3").collect(Collectors.collectingAndThen(Collectors.toList(), x -> x.size()));


//Collectors.mapping(...)：跟Stream的map操作类似，只是参数有点区别
System.out.println(Stream.of(1, 3, 5).collect(Collectors.mapping(x -> x + 1, Collectors.toList())));


```

### 11.8.6. stream 中异常处理

https://cloud.tencent.com/developer/article/1429208

## 11.9. date 时间日期新的 api

### 11.9.1. 介绍-为什么使用

吸收了 [joda date api](http://www.joda.org/joda-time/) 这个开源实现

为什么使用呢:

-   Java8 之前我们常用 SimpleDateFormat, Date, Calander, 繁琐, 而且线程不安全

-   Java8 以前使用 new Date()获取月时，从 0 开始，每次都要+1。获取本月最后一天，要分情况判断 28，29，30，31

-   时区处理不方便

LocalDate，LocalTime，LocalDateTime.... , 位于 java.time 包下, final 不可继承

-   ZoneId: 时区 ID，用来确定 Instant 和 LocalDateTime 互相转换的规则
-   Instant: 用来表示时间线上的一个点
-   LocalDate: 表示没有时区的日期, LocalDate 是不可变并且线程安全的
-   LocalTime: 表示没有时区的时间, LocalTime 是不可变并且线程安全的
-   LocalDateTime: 表示没有时区的日期时间, LocalDateTime 是不可变并且线程安全的
-   ZonedDateTime：最完整的日期时间，包含时区和相对UTC或格林威治的时差
    ZoneOffSet和ZoneId类
-   Clock: 用于访问当前时刻、日期、时间，用到时区
-   Duration: 用秒和纳秒表示时间的数量

### 11.9.2. 使用新的时间日期 api

```java
// 构造
LocalDate.now();  // 获取当前日期 format: yyyy-MM-dd
LocalTime.now();  // 获取当前时间 format: HH:mm:ss
LocalDateTime.now();  // 获取当前日期时间 format: yyyy-MM-ddTHH:mm:ss
LocalDate.of(2017, 07, 20);
LocalDateTime.of(2017, Month.JULY, 20, 15, 18);
LocalDateTime.parse("2017-07-20T15:18:00");
LocalDate.parse("2017-07-20"); // 可传入 formatter 指定格式
LocalTime nowTime = LocalTime.parse("15:02");
LocalTime nowTime = LocalTime.of(15, 02);

// 加减

LocalDate tomorrow = LocalDate.now().plusDays(1);
LocalDate prevMonth = LocalDate.now().minus(1, ChronoUnit.MONTHS);
// 一个小时后的时间
LocalTime nextHour = LocalTime.parse("15:02").plus(1, ChronoUnit.HOURS);

LocalDateTime tomorrow = now.plusDays(1);
System.out.println("明天的这个时间: " + tomorrow);
LocalDateTime minusTowHour = now.minusHours(2);
System.out.println("两小时前: " + minusTowHour);



//获取时间, 日期, 月份, 星期, 

// 一系列的get方法来获取特定单位:
LocalDate date = LocalDate.parse("2017-07-20")
// 星期
DayOfWeek thursday = date.getDayOfWeek();
System.out.println("周四: " + thursday);// 周四: THURSDAY
// 日期
int twenty = LocalDate.parse("2017-07-20").getDayOfMonth();
System.out.println("twenty: " + twenty);// twenty: 20
// 月份
int month = date.getMonthValue()
Month month = now.getMonth();
// 年份
int year = date.getYear()
// 获取本月第一天
LocalDate firstDayOfMonth = LocalDate.parse("2017-07-20")
                .with(TemporalAdjusters.firstDayOfMonth());
System.out.println("这个月的第一天: " + firstDayOfMonth);
firstDayOfMonth = firstDayOfMonth.withDayOfMonth(1);
System.out.println("这个月的第一天: " + firstDayOfMonth);

int hour = LocalTime.parse("15:02").getHour();
System.out.println("小时: " + hour);
int minute = LocalTime.parse("15:02").getMinute();
System.out.println("分钟: " + minute);
// 每天的开始结束
System.out.println(LocalTime.MAX);
System.out.println(LocalTime.MIN);
// 23:59:59.999999999
// 00:00



// 比较日期

// 是否相等
LocalDate date1 = LocalDate.of(2014, 01, 14);
if(date1.equals(today)){
    System.out.printf("Today %s and date1 %s are same date %n", today, date1);
}
// 判断是否之前之后
boolean notBefore = LocalDate.parse("2017-07-20")
                .isBefore(LocalDate.parse("2017-07-22"));
System.out.println("notBefore: " + notBefore);
boolean isAfter = LocalDate.parse("2017-07-20").isAfter(LocalDate.parse("2017-07-22"));
System.out.println("isAfter: " + isAfter);


// 判断周期性事件 (不带年份的日期)

// 生日
//判断今天是否是我的生日，例如我的生日是 2009-07-20
LocalDate birthday = LocalDate.of(2009, 07, 20);
// monthday 表示 不带年的日期, 
//可以用它判断每年都会发生事件, 
MonthDay birthdayMd = MonthDay.of(birthday.getMonth(), birthday.getDayOfMonth());
MonthDay today = MonthDay.from(LocalDate.now());
System.out.println("今天是否是我的生日: " + today.equals(birthdayMd));

// 信用卡到期
// YearMonth 不带时间的年月
YearMonth currentYearMonth = YearMonth.now();
System.out.printf("current year-month is %s, has %d days", currentYearMonth, currentYearMonth.lengthOfMonth());
YearMonth creditCardExpiry = YearMonth.of(2018, Month.FEBRUARY);
System.out.printf("Your credit card expires on %s ", creditCardExpiry);
// Output:
// current year-month is 2014-01: has 31 days
// Your credit card expires on 2018-02


// 是否闰年
boolean leapYear = LocalDate.now().isLeapYear();
System.out.println("是否闰年: " + leapYear);

////////////////////////////////////////////////////////////

// 间隔
////Period类表示一段时间, 用于修改给定日期或获得的两个日期之间的间隔

LocalDate initialDate = LocalDate.parse("2017-07-20");
LocalDate finalDate   = initialDate.plus(Period.ofDays(5));
System.out.println("初始化日期: " + initialDate);
System.out.println("加日期之后: " + finalDate);


LocalDate java8Release = LocalDate.of(2014, Month.MARCH, 14);
Period periodToNextJavaRelease = Period.between(today, java8Release);
System.out.println("Months left between today and Java 8 release : "
                                   + periodToNextJavaRelease.getMonths() );
// Output:
// Months left between today and Java 8 release : 2

final long duration = Duration.between(LocalDateTime.now(), latestTime.toInstant()).getSeconds();




//////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////


// 格式化

LocalDateTime now = LocalDateTime.now();
DateTimeFormatter dateTimeFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
System.out.println("默认格式化: " + now);
System.out.println("自定义格式化: " + now.format(dateTimeFormatter));

LocalDateTime localDateTime = LocalDateTime.parse("2017-07-20 15:27:44", dateTimeFormatter);
System.out.println("字符串解析 LocalDateTime: " + localDateTime);

String dateString = dateTimeFormatter.format(LocalDate.now());
System.out.println("日期转字符串: " + dateString);


///////////////////////////////////////////////////////////////

// 与遗留代码转换

// Date和Instant互相转换
Date date = Date.from(Instant.now());
Instant instant = date.toInstant();

// Date转换为LocalDateTime
Date startDate=new Date();
LocalDateTime localDateTime = startDate.toInstant()
                .atZone(ZoneId.systemDefault())
                .toLocalDateTime()

// LocalDateTime转Date
Date date =
    Date.from(localDateTime.atZone(ZoneId.systemDefault()).toInstant());

// LocalDate转Date
Date date =
    Date.from(LocalDate.now().atStartOfDay().atZone(ZoneId.systemDefault()).toInstant());


///////////////////////////////////////////////////////////////


//时间戳

Instant timestamp = Instant.now();
System.out.println("What is value of this instant " + timestamp);
// Output :
// What is value of this instant 2014-01-14T08:33:33.379Z


///////////////////////////////////////////////////////////////

// Clock时钟类 
//用于获取当时的时间戳，或当前时区下的日期时间信息
// System.currentTimeMillis()和TimeZone.getDefault()的地方都可用Clock替换。
public void clock(){
    // 根据系统时间返回当前时间并设置为UTC。
    Clock clock = Clock.systemUTC();
    System.out.println("Clock : " + clock);//Clock : SystemClock[Z]


    // 根据系统时钟区域返回时间
    Clock defaultClock = Clock.systemDefaultZone();
    System.out.println("Clock : " + clock);//Clock : SystemClock[Z]

    //指定时区
    LocalDate.now(clock)

}

///////////////////////////////////////////////////////////

// 时区和时差:
//时区: 代表了地球上某个区域内普遍使用的标准时间。每个时区都有一个代号，格式通常由区域/城市构成（Asia/Tokyo），在加上与格林威治或 UTC的时差。例如：东京的时差是+09:00。
//时差: OffsetDateTime类实际上组合了LocalDateTime类和ZoneOffset类。用来表示包含和格林威治或UTC时差的完整日期（年、月、日）和时间（时、分、秒、纳秒）信息
// OffSetDateTime是对计算机友好的，
// ZoneDateTime则对人更友好

// 处理时区

ZoneId america = ZoneId.of("America/New_York");
LocalDateTime localtDateAndTime = LocalDateTime.now();
ZonedDateTime dateAndTimeInNewYork  = ZonedDateTime.of(localtDateAndTime, america );
System.out.println("Current date and time in a particular timezone : " + dateAndTimeInNewYork);
// Output :
// Current date and time in a particular timezone : 2014-01-14T16:33:33.373-05:00[America/New_York]

// 时差

LocalDateTime datetime = LocalDateTime.of(2014, Month.JANUARY, 14, 19, 30);
ZoneOffset offset = ZoneOffset.of("+05:30");//印度与GMT或UTC标准时区相差+05:30
OffsetDateTime date = OffsetDateTime.of(datetime, offset);  
System.out.println("Date and Time with timezone offset in Java : " + date);
// Output :
// Date and Time with timezone offset in Java : 2014-01-14T19:30+05:30


```

### 11.9.3. 统计代码耗时

```java


与系统时间完全无关，目的也正是用来统计程序耗时的。nanoTime()记录的是从某个固定的时刻起，到现在经过了多少纳秒。但是这个固定的时刻不是Unix时间戳的1970-1-1 00:00:00，而是启动虚拟机时生成的一个固定时刻，每个虚拟机的生成的这个时间都是不同的

nanoTime()虽然精确到纳秒，但事实并不是每纳秒都跳动一格，而是可能在3纳秒之后，一下跳动3格

long start = System.nonoTime();
// 业务逻辑代码...
long end = System.nonoTime();
long timeElapsed = finish - end; // 单位为纳秒




java8

Instant start = Instant.now();
// 业务逻辑代码...
Instant end = Instant.now();
long timeElapsed = Duration.between(start, finish).toMillis(); // 单位为毫秒





<dependency>
    <groupId>org.apache.commons</groupId>
    <artifactId>commons-lang3</artifactId>
    <version>3.7</version>
</dependency>

StopWatch watch = new StopWatch();
watch.start();
// 业务逻辑代码...
watch.stop();
System.out.println("Time Elapsed: " + watch.getTime() + "ms"); // 单位为毫秒






```

## 11.10. 可重复的 Annotations

在 Java8 中注解是可以重复的

```java
@interface Hint {
    String value();

    @Target({ ElementType.METHOD, ElementType.FIELD, ElementType.ANNOTATION_TYPE, ElementType.CONSTRUCTOR,
            ElementType.PARAMETER })
    @Retention(RetentionPolicy.RUNTIME)
    @Documented
    public @interface Hints {
        Hint[] value();
    }
}

// 效果同上
@Repeatable(Hints.class)
@interface Hint {
    String value();
}
```

## 11.11. base64 编码


```java
final Base64.Decoder decoder = Base64.getDecoder();
final Base64.Encoder encoder = Base64.getEncoder();
final String text = "字串文字";
final byte[] textByte = text.getBytes("UTF-8");
//编码
final String encodedText = encoder.encodeToString(textByte);
System.out.println(encodedText);
//解码
System.out.println(new String(decoder.decode(encodedText), "UTF-8"));

```

## 11.12. map 映射的新方法

```java
// >>> compute 对key存在的元素进行加工，并返回加工后的元素，同时map中该元素也被替换成加工后的

KeyAndValue a1 = new KeyAndValue().setName("kevin").setValue("lee");
KeyAndValue a5 = new KeyAndValue().setName("kevin2").setValue("lee5");
KeyAndValue a6 = new KeyAndValue().setName("kevin3").setValue("lee8");
Map<String, KeyAndValue> maps = new HashMap<>();
maps.put("a",a1); //{a=KeyAndValue(name=kevin, value=lee)}
//key存在时
KeyAndValue compute1 = maps.compute("a", (k, old) -> {
    Optional.ofNullable(old).ifPresent(v -> v.setValue(old.getValue().concat("__ddddd")));
    return v;
});
System.out.println(compute1);
// KeyAndValue(name=kevin, value=lee__ddddd)
System.out.println(maps);
// {a=KeyAndValue(name=kevin, value=lee__ddddd)}

// key不存在时
KeyAndValue compute = maps.compute("b", (k, v) -> {
    Optional.ofNullable(v).ifPresent(v1 -> v1.setValue(v.getValue().concat("__ddddd")));
    return v;
});
System.out.println(compute);
//null
System.out.println(maps);
// {a=KeyAndValue(name=kevin, value=lee__ddddd)}



// >>> 针对value不存在和存在，也有针对性的方法（computeIfAbsent和computeIfPresent）

//computeIfAbsent
// key不存在或null，则会处理，返回处理后结果，并更新value (即, key, 和 newValue 会 mapping 上)
// key存在，则不会进行处理，返回value，不更新map
//
//computeIfPresent ，
// key存在则处理，返回处理后结果，并更新value
// key不存在或null，则不进行处理，返回null，不更新value
Map<String, KeyAndValue> map = new HashMap<>();
System.out.println(map);
//{}
KeyAndValue computeIfAbsent = map.computeIfAbsent("a", k -> {
    return a6;
});
System.out.println(computeIfAbsent);
// KeyAndValue(name=kevin3, value=lee8)
System.out.println(map);
// {a=KeyAndValue(name=kevin3, value=lee8)}


// >>>merge:对key存在的元素进行合并新元素，并返回加工后的元素

Map<String, KeyAndValue> map = new HashMap<>();
map.put("a",a1);
System.out.println(map);
// {a=KeyAndValue(name=kevin, value=lee)}
//“a”有值，则合并
//a6就是合进来的新值，a6和newV是同一对象
//oldV是map中原有key对应的值，oldV有值则合并，无值则新增对应的k和value=newV的键值对
KeyAndValue merge = map.merge("a", a6, (oldV, newV) -> {
    oldV.setValue(newV.getValue()+"___"+oldV.getValue());
    return oldV;

});
System.out.println(merge);
// KeyAndValue(name=kevin, value=lee8___lee)
System.out.println(map);
// {a=KeyAndValue(name=kevin, value=lee8___lee)}

//“b”无值，则新增"b":newV
KeyAndValue merge1 = map.merge("b", a5, (oldV, newV) -> {
    oldV.setValue(oldV.getValue()+"___"+oldV.getValue());
    return oldV;    //a5就是合进来的新值，a5和newV是同一对象，所以newV和a5可互换；
    // oldV是map中原有key=“b”对应的值，oldV有值则合并，无值则新增
});
System.out.println(merge1);
// KeyAndValue(name=kevin2, value=lee5)
System.out.println(map);
// {a=KeyAndValue(name=kevin, value=lee), b=KeyAndValue(name=kevin2, value=lee5)}

```


# 12. java11

## 12.1. java module

Java 模块化开发: 增加了更高级别的聚合，是Package的封装体

java9以前 ：package => class/interface。
java9以后 ：module => package => class/interface。

为什么这么做？
大家都知道JRE中有一个超级大的rt.jar(60多M)，tools.jar也有几十兆，以前运行一个hello world也需要上百兆的环境。
- 更加容易轻量级部署
- 在 package 之上, 增加了一个更高层级的封装

`java --list-modules` 查看jdk被分拆为哪些 module

模块的是通过module-info.java进行定义，编译后打包后，就成为一个模块的实体

```java
// open 用来指定开放模块,开放模块的所有包都是公开的
open module module.one {
    // 导入
    // opens 用来指定开放的包
    opens java.logging;

    //声明依赖关系, opens resuires xxx 亦可
    requires java.logging;
}

module module.one {
 
 exports <package>;//exports用于指定模块下的哪些包可以被其他模块访问
 
 exports <package> to <module1>, <module2>...;
}


//uses语句使用服务接口的名字,当前模块就会发现它,使用java.util.ServiceLoader类进行加载,
module module.one {
 //对外提供的接口服务 ,下面指定的接口以及提供服务的impl，如果有多个实现类，用用逗号隔开
 uses <接口名>;
 provides <接口名> with <接口实现类>,<接口实现类>;
}
```




-   [为什么 Java 9 模块化使用 Jigsaw 而不是 OSGi？](https://www.zhihu.com/question/40413806/answer/135807272)
-   [osgi 入门](http://www.cnblogs.com/chenjianjx/archive/2012/05/24/2516620.html) , https://www.cnblogs.com/zhangpan1244/p/11677705.html



## 12.2. jshell 

some classes already import into the console

## 12.3. var 类型推断

局部类型变量推断。它会根据后面的值来推断变量的类型，所以var必须要初始化。

```java

var a = 1; 
等于
int a = 1;


```

var不能再哪里使用？

类成员变量类型。
方法返回值类型。
Java10中Lambda不能使用var，Java11中可以使用。

## 12.4. jdk api enhencement

string 增强: 判断是否空白, 去除空格...
集合增强: of, copyOf, create immutable collection
stream 和 option 增强: 可以相互转换, 

```java

// 判断字符串是否为空白
" ".isBlank(); // true
// 去除首尾空格
" Hello Java11 ".strip(); // "Hello Java11"
// 去除尾部空格 
" Hello Java11 ".stripTrailing(); // " Hello Java11"
// 去除首部空格 
" Hello Java11 ".stripLeading(); // "Hello Java11 "
// 复制字符串
"Java11".repeat(3); // "Java11Java11Java11"
// 行数统计
"A\nB\nC".lines().count(); // 3

//创建不可变集合。

var list = List.of("Java", "Python", "C"); //不可变集合
 var copy = List.copyOf(list); //copyOf判断是否是不可变集合类型，如果是直接返回
 System.out.println(list == copy); // true
 var list = new ArrayList<String>(); // 这里返回正常的集合
 var copy = List.copyOf(list); // 这里返回一个不可变集合
 System.out.println(list == copy); // false


以前
Stream.of(null); //报错
现在
Stream.ofNullable(null);

// http client 支持同步异步

var request = HttpRequest.newBuilder()
 .uri(URI.create("https://www.baidu.com/"))
 .build();
 var client = HttpClient.newHttpClient();
 // 同步
 HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
 System.out.println(response.body());
 // 异步
 CompletableFuture<HttpResponse<String>> sendAsync = client.sendAsync(request, HttpResponse.BodyHandlers.ofString());
 //这里会阻塞
 HttpResponse<String> response1 = sendAsync.get();
 System.out.println(response1.body());
```

## 12.5. 改进 java 程序在 docker 中的表现

JVM现在可以识别由容器控制组（cgroups）设置的约束。可以在容器中使用内存和CPU约束来直接管理Java应用程序，其中包括：

遵守容器中设置的内存限制
在容器中设置可用的CPU
在容器中设置CPU约束

## 12.6. 新的垃圾回收器

# 13. java17

## 13.1. record class

Java Record 是一种不变类，类似于 String，Integer。让我们看一个简单的例子。

> generate toString, hashcode quals automatically

```java

public final class Data {

    final private int x;
    final private int y;
    public Data( int x, int y){
        if (x >y) {
            throw new IllegalArgumentException();
        }
        x+=100;
        y+=100;
        this.x = x;
        this.y = y;
    }
}



public record Data(int x, int y) {

    public Data {
        if (x >y) {
            throw new IllegalArgumentException();
        }
        x+=100;
        y+=100;
    }
}

```

# 14. classloader 类加载器

https://www.cnblogs.com/doit8791/p/5820037.html

## 14.1. classloader 的概念

类加载器（class loader）用来加载 Java 类到 Java 虚拟机中。除此之外，ClassLoader 还负责加载 Java 应用所需的资源，如图像文件和配置文件等

## 14.2. 层级结构

树状结构:

分类. [父 -> 子 关系]是这样的: 引导类加载器（bootstrap class loader）-> 扩展类加载器（extensions class loader） -> 系统类加载器（system class loader） -> user-defined classloader

-   系统(jvm) 提供的 classloader

    -   引导类加载器（bootstrap class loader）：它用来加载 Java 的核心库 (rt.jar 中的所有 class)，由 C++编写的，它本身是虚拟机的一部分，并不是一个 JAVA 类，并不继承自 java.lang.ClassLoader, 没有 parent

    -   扩展类加载器（extensions class loader）： `ExtClassLoader`, 它用来加载 Java 的扩展库(Java 虚拟机的实现会提供一个扩展库目录, 该类加载器在此目录里面查找并加载 Java 类)。

    -   系统类加载器（app class loader）： `AppClassLoader`, 它根据 Java 应用的类路径（CLASSPATH）来加载 Java 类。Java 应用的类都是由它来完成加载的。可以通过 `ClassLoader.getSystemClassLoader()`来获取它。

    -   自定义的 classloader - 通过继承 `java.lang.ClassLoader`抽象类的方式实现自己的类加载器, 可以用来`加载 非 classpath 中的 jar 和 目录 (比如从网络下载)`, `在加载 class 前 做其他事情, 如解密` , `实现类隔离` (运行多个不同版本的 jar 包, check https://blog.csdn.net/t894690230/article/details/73252331)

        -   loadClass 方法 - 加载指定名称的类, (另一种加载 class 的方法 `Class.forName` 启动这个加载过程是通过调用 `loadClass`来实现的, 称为初始加载器（initiating loader）)

        -   findLoadedClass 方法 - 从当前 classloader 实例的缓存中寻找已经加载的类

        -   `findClass方法` - 只需要覆盖这个方法, 自定义加载逻辑, 其他方法不动;

        -   defineClass 方法 - 将 class 字节码转换为 Class 对象 (真正完成类的加载工作是通过调用 `defineClass`来实现的, 称为一个类的定义加载器（defining loader）)

        -   defineClass() 和 loadClass() 两种加载方式的关联之处在于：一个类的定义加载器是它引用的其它类的初始加载器。如类 com.example.Outer 引用了类 com.example.Inner，则由类 com.example.Outer 的定义加载器负责启动类 com.example.Inner 的加载过程。

## 14.3. 工作过程 and 双亲委派模式

1. Java 源程序（.java 文件）在经过 Java 编译器编译之后就被转换成 Java 字节代码（.class 文件）。

1. 类加载器负责读取 Java 字节代码，并转换成 java.lang.Class 类的一个实例。每个这样的实例用来表示一个 Java 类。通过此实例的`newInstance()`方法就可以创建出该类的一个对象

    1. 类加载器在尝试 自己去查找某个类的字节代码并定义它 之前, 会先尝试通过 parent classloader 加载，如果无法加载，依次类推 -- `classloader的双亲委派模式` , 由于 [双亲委派模式], 真正完成类的加载工作的类加载器和启动这个加载过程的类加载器，有可能不是同一个;

    1. 为什么要有 classloader 双亲委派模式的设计? ------- 为了保证 Java 核心库的类型安全 (举个例子 🌰 -> 所有 Java 应用都至少需要引用 java.lang.Object 类，也就是说在运行的时候，java.lang.Object 这个类需要被加载到 Java 虚拟机中。如果这个加载过程由 Java 应用自己的类加载器来完成的话，很可能就存在多个版本的 java.lang.Object 类，而且这些类之间是不兼容的。通过代理模式，对于 Java 核心库的类的加载工作由引导类加载器来统一完成，保证了 Java 应用所使用的都是同一个版本的 Java 核心库的类，是互相兼容的。)

1. 类加载器在成功加载某个类之后，会把得到的 java.lang.Class 类的实例缓存起来 - 对于一个类加载器实例来说，相同全名的类只加载一次，即 loadClass 方法不会被重复调用。

## 14.4. 线程上下文类加载器-打乱层级结构

线程上下文类加载器（context class loader）只是一个概念 , 类 `java.lang.Thread`中的方法 `getContextClassLoader()`和 `setContextClassLoader(ClassLoader cl)`用来获取和设置线程的上下文类加载器

主要是为了解决一个双亲委派模式的 bug , 举个例子 🌰: Java 提供了很多服务提供者接口（Service Provider Interface，SPI），允许第三方为这些接口提供实现(常见的 SPI 有 JDBC, JAXP..., ) , 这些实现由`app class loader`来加载, 而这些 SPI 的接口由 Java 核心库来提供, 是通过`引导类加载器 bootstrap class loader`来加载). 引导类加载器是无法找到 SPI 的实现类的，因为它只加载 Java 的核心库。它也不能代理给 app class loader ，因为 bootstrap class loader 在 app class loader 的上层, 也就是说，类加载器的双亲委派模式无法解决这个问题。

线程上下文类加载器正好解决了这个问题 [在 SPI 接口的代码中使用线程上下文类加载器，就可以成功的加载到 SPI 实现的类]

## 14.5. 借助 classloader 实现类隔离

不同的类加载器为各自加载的类创建了额外的名称空间, 即使各自加载的是相同名称的类。相同名称的类可以并存在 Java 虚拟机中，`只需要用不同的类加载器来加载它们即可`。不同类加载器加载的类之间是不兼容的，这就相当于在 Java 虚拟机内部创建了一个个`相互隔离的 Java 类空间`。这种技术在许多框架中都被用到

可以这么做的原理是:

Java 虚拟机是如何判定两个 Java 类是相同的? ------- 📌 类的全名是否相同 📌 加载此类的类加载器(实例对象 id)是否一样

## 14.6. 类加载相关的异常

-   classnotfoundException - 在当前的 classloader 中`加载 class 文件时没有找到`

    对于 system class loader, 只要 class path 中没有相应的 class 文件, 就抛异常;
    对于 user-defined class loader 要到代码找找看, 看具体是从什么位置加载 class

-   NoClassDefFoundException - 加载的类引用了另外的类, 而这个"另外的"`引用类不存在or当前class loader无法加载引用的类`

    解决这个异常, 需要到异常类中找到引用到了哪些另外的类 , 然后看看这些另外的类是不是存在于能够被当前 class loader 加载到的位置

-   LinkageError - 加载某个 class 时, 这个 class 已经存在于当前的 class loader 中了 , 也就是 `重复的加载`

    自定义 class loader 中 and 并发下容易出现

    这个机制也造成 jvm 无法直接更新一个已经加载过的 class, 只能创建一个新的 class loader 来加载更新后的 class, 然后将新请求转入新 class loader 来获取更新后的类 -------- 这也时动态更新的原理

-   ClassCastException - 转型异常

    使用泛型可以规避

    要注意两个同类型对象但是通过不同 class loader 加载的情况, 这种情况也会抛异常

## 14.7. 自定义 classloader(加载网络上的 class)

场景: 应用通过网络来传输 Java 类的字节代码，为了保证安全性，这些字节代码经过了加密处理。这个时候就需要自己的类加载器来从某个网络地址上读取加密后的字节代码，接着进行解密和验证，最后定义出要在 Java 虚拟机中运行的类来

编写一个类继承自 ClassLoader 抽象类。
复写它的 findClass()方法。
在 findClass()方法中调用 defineClass()。

```java
//文件系统类加载器
public class FileSystemClassLoader extends ClassLoader {

   private String rootDir;

   public FileSystemClassLoader(String rootDir) {
       this.rootDir = rootDir;
   }

   // 自定义 classloader 重写 findClass 即可
   /*
   - java.lang.ClassLoader类的方法 loadClass()封装了前面提到的代理模式的实现。该方法会首先调用 findLoadedClass()方法来检查该类是否已经被加载过；如果没有加载过的话，会调用父类加载器的 loadClass()方法来尝试加载该类；如果父类加载器无法加载该类的话，就调用 findClass()方法来查找该类。因此，为了保证类加载器都正确实现代理模式，在开发自己的类加载器时，最好不要覆写 loadClass()方法，而是覆写 findClass()方法。
   */
   protected Class<?> findClass(String name) throws ClassNotFoundException {
       byte[] classData = getClassData(name);
       if (classData == null) {
           throw new ClassNotFoundException();
       }
       else {
           return defineClass(name, classData, 0, classData.length);
       }
   }

   private byte[] getClassData(String className) {
       String path = classNameToPath(className);
       try {
           InputStream ins = new FileInputStream(path);
           ByteArrayOutputStream baos = new ByteArrayOutputStream();
           int bufferSize = 4096;
           byte[] buffer = new byte[bufferSize];
           int bytesNumRead = 0;
           while ((bytesNumRead = ins.read(buffer)) != -1) {
               baos.write(buffer, 0, bytesNumRead);
           }
           return baos.toByteArray();
       } catch (IOException e) {
           e.printStackTrace();
       }
       return null;
   }

   private String classNameToPath(String className) {
       return rootDir + File.separatorChar
               + className.replace('.', File.separatorChar) + ".class";
   }
}

```

```java
// 网络类加载器
/**
通过网络下载 Java 类字节代码并定义出 Java 类
 */
public class NetworkClassLoader extends ClassLoader {

    private String rootUrl;

    public NetworkClassLoader(String rootUrl) {
        this.rootUrl = rootUrl;
    }

    protected Class<?> findClass(String name) throws ClassNotFoundException {
        byte[] classData = getClassData(name);
        if (classData == null) {
            throw new ClassNotFoundException();
        }
        else {
            return defineClass(name, classData, 0, classData.length);
        }
    }

    private byte[] getClassData(String className) {
        String path = classNameToPath(className);
        try {
            URL url = new URL(path);
            InputStream ins = url.openStream();
            ByteArrayOutputStream baos = new ByteArrayOutputStream();
            int bufferSize = 4096;
            byte[] buffer = new byte[bufferSize];
            int bytesNumRead = 0;
            while ((bytesNumRead = ins.read(buffer)) != -1) {
                baos.write(buffer, 0, bytesNumRead);
            }
            return baos.toByteArray();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    private String classNameToPath(String className) {
        return rootUrl + "/"
                + className.replace('.', '/') + ".class";
    }
}

////////////////////////////////////////

// test
public class CalculatorTest {

    public static void main(String[] args) {
        String url = "http://localhost:8080/ClassloaderTest/classes";
        NetworkClassLoader ncl = new NetworkClassLoader(url);
        String basicClassName = "com.example.CalculatorBasic";
        String advancedClassName = "com.example.CalculatorAdvanced";
        try {
            Class<?> clazz = ncl.loadClass(basicClassName);
            ICalculator calculator = (ICalculator) clazz.newInstance();// 通过接口接收
            System.out.println(calculator.getVersion());
            clazz = ncl.loadClass(advancedClassName);
            calculator = (ICalculator) clazz.newInstance();
            System.out.println(calculator.getVersion());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

}

```





# 15. 路径问题

## 15.1. 获取 classpath 和 系统属性 环境变量

```java
String str = Thread.currentThread().getContextClassLoader().getResource("").getPath();
System.out.println("-------");
System.out.println(str); // 我是在测试目录下, 所以结果是: /D:/repo/eclipse/etc-learn/target/test-classes/

String str1 = Thread.currentThread().getContextClassLoader().getResource("./").getPath();
System.out.println(str1);// 无论是[.] 还是[./], 结果同 str

String str2 = Thread.currentThread().getContextClassLoader().getResource("demo.properties").getPath();
System.out.println(str2);// /D:/repo/eclipse/etc-learn/target/classes/demo.properties

// 这种通过 .class 获取的路径, 不是 root classpath, 而是 该类所在的详细class path路径
PathUtil.class.getResource(classpath).getPath()
//   /D:/repo/repo_github/shared_already/springboot-demos/groovy-demo/target/classes/io/github/xiaoyu/groovydemo/util/


```

获取资源文件

```java
Properties props = new Properties();
props.load(Thread.currentThread().getContextClassLoader()
// 这里必须是 class path
        .getResourceAsStream("com/xiaoyu/learn/etc/schedule/quartz/simple/demo/quartz.properties"));

```

通过 System.getProperty("user.dir")

若是设置自定义参数, 可以在 jvm 参数中设置: `-Daaa=xxx`, 在 Tomcat 的  catalina.sh 中 配置 `JAVA_OPS=-Daaa=xxx`

```java
/**
*
java.version          Java 运行时环境版本
java.vendor         Java 运行时环境供应商
java.vendor.url         Java 供应商的 URL
java.vm.specification.version         Java 虚拟机规范版本
java.vm.specification.vendor         Java 虚拟机规范供应商
java.vm.specification.name         Java 虚拟机规范名称
java.vm.version         Java 虚拟机实现版本
java.vm.vendor         Java 虚拟机实现供应商
java.vm.name         Java 虚拟机实现名称
java.specification.version         Java 运行时环境规范版本
java.specification.vendor         Java 运行时环境规范供应商
java.specification.name         Java 运行时环境规范名称
os.name         操作系统的名称
os.arch         操作系统的架构
os.version         操作系统的版本
file.separator         文件分隔符（在 UNIX 系统中是“ / ”）
path.separator         路径分隔符（在 UNIX 系统中是“ : ”）
line.separator         行分隔符（在 UNIX 系统中是“ /n ”）

java.home         Java 安装目录
java.class.version         Java 类格式版本号
java.class.path         Java 类路径
java.library.path          加载库时搜索的路径列表
java.io.tmpdir         默认的临时文件路径
java.compiler         要使用的 JIT 编译器的名称
java.ext.dirs         一个或多个扩展目录的路径
user.name         用户的账户名称
user.home         用户的主目录
user.dir
*/

```

# 16. 数据类型

## 16.1. 各个数据类型的范围

https://blog.csdn.net/qfikh/article/details/52832087

## 16.2. double 类型的加减乘除

float : 单精度浮点数, 占 4 字节

double : 双精度浮点数 -- 编译器默认小数; 占据 8 字节

```java
//如果不声明，默认小数为double类型，所以如果要用float的话，必须进行强转
//例如：float  a=1.3; 会编译报错，正确的写法 float a = (float)1.3;或者float a = 1.3f;（f或F都可以不区分大小写）

public class DoubleArith {
    private static final int DEF_DIV_SCALE = 10;
    /**
     * 两个Double数相加
     * @param v1
     * @param v2
     * @return Double
     */
    public static Double add(Double v1,Double v2){
        BigDecimal b1 = new BigDecimal(v1.toString());
        BigDecimal b2 = new BigDecimal(v2.toString());
        return b1.add(b2).doubleValue();
    }

    /**
     * 两个Double数相减
     * @param v1
     * @param v2
     * @return Double
     */
    public static Double sub(Double v1,Double v2){
        BigDecimal b1 = new BigDecimal(v1.toString());
        BigDecimal b2 = new BigDecimal(v2.toString());
        return b1.subtract(b2).doubleValue();
    }

    /**
     * 两个Double数相乘
     * @param v1
     * @param v2
     * @return Double
     */
    public static Double mul(Double v1,Double v2){
        BigDecimal b1 = new BigDecimal(v1.toString());
        BigDecimal b2 = new BigDecimal(v2.toString());
        return b1.multiply(b2).doubleValue();
    }

    /**
     * 两个Double数相除
     * @param v1
     * @param v2
     * @return Double
     */
    public static Double div(Double v1,Double v2){
        BigDecimal b1 = new BigDecimal(v1.toString());
        BigDecimal b2 = new BigDecimal(v2.toString());
        return b1.divide(b2,DEF_DIV_SCALE,BigDecimal.ROUND_HALF_UP).doubleValue();
    }

    /**
     * 两个Double数相除，并保留scale位小数
     * @param v1
     * @param v2
     * @param scale
     * @return Double
     */
    public static Double div(Double v1,Double v2,int scale){
        if(scale<0){
            throw new IllegalArgumentException(
            "The scale must be a positive integer or zero");
        }
        BigDecimal b1 = new BigDecimal(v1.toString());
        BigDecimal b2 = new BigDecimal(v2.toString());
        return b1.divide(b2,scale,BigDecimal.ROUND_HALF_UP).doubleValue();
    }

}
```

# 17. 控制台命令

## 17.1. 打 jar 包

```sh
jar cvf <jar文件名> <class文件或文件夹>
```

-   jar 包打好后，要指定入口类 即更改 manifest.mf 文件 格式：Main-Class: 包名.类名（不加.class)
-   jar 包双击运行只对图形界面起作用
-   非图形界面要用 bat 文件
-   如果是使用他人的 jar 包，要先设置 classpath

## 17.2. 生成注释文档 javadoc

`javadoc -d 存放文档的路径 java的源文件`

## 17.3. 编译和反编译

如果 Java 文件含有包【package】，则 `javac –d . Demo.java`-----【.】表示当前路径，即 class 文件路径
必须加【-d】，否则编译出来没有包文件夹。

运行时： `java com.xiaoyu.Demo`

反编译: `javap -verbose class文件`

# 18. 重要的对象

## 18.1. Object

http://www.javacoder.cn/?p=274

## 18.2. String


# 19. 字节码编辑技术

## 19.1. javassist

https://github.com/jboss-javassist/javassist
https://www.cnblogs.com/rickiyang/p/11336268.html


# 20. 前沿

## 20.1. graalvm

https://zhuanlan.zhihu.com/p/106555993

## 20.2. vertx

## 20.3. Micronaut

## 20.4. Quarkus

# 21. 拾遗

## 21.1. 正则表达式 regex

```java
private final static Pattern VERSION_PREFIX_PATTERN = Pattern.compile("v(\\d+)/");
Matcher m = VERSION_PREFIX_PATTERN.matcher(httpServletRequest.getRequestURI());
if(m.find()){
            Integer version = Integer.valueOf(m.group(1));
            if(version >= this.apiVersion)
            {
                return this;
            }
        }

```

## 21.2. 静态绑定和动态绑定

https://droidyue.com/blog/2014/12/28/static-biding-and-dynamic-binding-in-java/

动态绑定是指编译器在编译阶段不知道要调用哪个方法，直到运行时才能确定

如果编译器可以在编译阶段就完成绑定，就叫作静态绑定

是否是静态绑定可以反编译 class 文件查看 `javap -c <class_name>`

-   静态绑定发生在编译时期，动态绑定发生在运行时
-   静态绑定使用类信息来完成，而动态绑定则需要使用对象信息来完成。
-   方法重载是静态绑定， 方法重写是动态绑定
-   使用 private 或 static 或 final 修饰的变量或者方法，使用静态绑定。而虚方法（可以被子类重写的方法）则会根据运行时的对象进行动态绑定。
-   重载(Overload)的方法使用静态绑定完成，而重写(Override)的方法则使用动态绑定完成。

## 21.3. 重载 and 重写

方法签名: 方法名称+方法参数 (不包括返回值)

-   重载必须方法签名不同
-   重写必须方法签名相同

## 21.4. java 值传递 or 引用传递

-   基本数据类型, 是值传递 -- 相当于将参数复制了一份, 对形参的修改不会影响实参；
-   引用类型, 是引用传递 -- 相当于传递的是内存地址(这是为了避免复制复杂类型的内存耗费), 形参和实参指向同一个内存地址（即引用），所以对参数的修改会影响到实际的对象。
-   String, Integer, Double 等 immutable 的类型特殊处理，可以理解为传值，最后的操作不会修改实参对象。

## 21.5. 访问修饰符 public-protect-default-private

https://blog.csdn.net/u012418131/article/details/52822381

```

作用域有四个可访问级别: 当前类, 同包, 继承, 不同包

1. public           范围最大, 都允许
2. protected        范围小一点, 不可跨包访问, 但是可以通过继承打破
3. default          范围再小一点 (package scope),不可跨包访问, 也不可通过继承访问 , 只能在同包下访问;
4. private          范围最小, 只能再类内部访问;

```

## 21.6. getcontextclassloader&getclassloader 区别

如果你使用 Test.class.getClassLoader()，可能会导致和当前线程所运行的类加载器不一致, 一般只能用在 getResource

最好使用 Thread.currentThread().getContextClassLoader()

## 21.7. getter 和 setter 存在的意义

https://stackoverflow.com/questions/1568091/why-use-getters-and-setters-accessors

更好的封装性, 无法直接 access 成员变量

拓展性好, 可以在函数中添加其他功能

方便打断点 debug

## 21.8. 为什么 service 只有一个实现也需要一个接口

在绝大多数情况下，一个 service 接口只有一个实现类, 为什么还要单独抽出一个接口呢? 这个接口时多余的吗?

-   方便 JAVA 底层的相关特性实现，例如反射, 生成代理

-   面向接口开发的好处, 比如 可以把接口打进调用方开发包提供出去，而不是实现类。所以调用就是签名的调用, 接口是否实现不影响调用

## 21.9. static 关键字

[四个作用](https://www.cnblogs.com/dotgua/p/6354151.html?utm_source=itdadao&utm_medium=referral)
sos 上的一个问题: [What does the 'static' keyword do in a class?](https://stackoverflow.com/questions/413898/what-does-the-static-keyword-do-in-a-class)

[静态变量的生命周期](https://www.cnblogs.com/hf-cherish/p/4970267.html)

static 关键字的作用是把类的成员变成类相关，而不是实例相关

-   修饰成员变量 - 内存位置变化: heap(属于对象, 对象独有) --> method area(属于 class, 对象公有)

-   修饰成员方法 - 内存变化: 没有多大的变化, 方法本来就是存放在类的定义当中的

    -   最大的作用，就是可以使用"类名.方法名"的方式操作方法，避免了先要 new 出对象的繁琐和资源消耗.

    -   不过它也有使用的局限，一个 static 修饰的方法中，不能使用非 static 修饰的成员变量和方法，这很好理解，因为 static 修饰的方法是属于类的，如果去直接使用对象的成员变量，它会不知所措（不知该使用哪一个对象的属性）。

-   静态块 - 初始化 static 修饰的成员时，可以将他们统一放在一个以 static 开始，用花括号包裹起来的块状语句中. 静态块和静态成员变量效果等同

    -   加载顺序

        1、（如果类还未被加载）先执行父类的静态代码块和静态变量初始化，并且静态代码块和静态变量的执行顺序只跟代码中出现的顺序有关。
        2、（如果类还未被加载）执行子类的静态代码块和静态变量初始化。
        3、执行父类的实例变量初始化
        4、执行父类的构造函数
        5、执行子类的实例变量初始化
        6、执行子类的构造函数

-   静态导包

## 21.10. 内部类 or 静态内部类

https://www.cnblogs.com/Gaojiecai/p/4041663.html

### 21.10.1. 内部类

-   内部类：定义再类内部的类

    `非静态内部类对象有着指向其外部类对象的引用`, 所以 `在创建非静态内部类对象时，一定要先创建起相应的外部类对象`

-   作用 - 封装性

    -   `内部类成员可以直接访问外部类的私有数据`

    -   外部类不能访问内部类的实现细节，例如内部类的成员变量

> 理解: 什么是内部？内部就是我是你的一部分，我了解你，我知道你的全部，没有你就没有我。（所以内部类对象是以外部类对象存在为前提的）

### 21.10.2. 静态内部类

静态内部类(静态嵌套类)：使用 static 来修饰一个内部类

`static InnerClass 和 OuterClass 没啥关系`, 就是个独立的 class, 自己可以完全独立存在, 也就没有了指向外部类的引用, 因此也就无法访问外部类的成员

外部类可以访问 static InnerClass 的成员

> 理解: 比如有 A，B 两个类，B 有点特殊，虽然可以独立存在，但只被 A 使用。这时候怎么办？如果把 B 并入 A 里，复杂度提高，搞得 A 违反单一职责。如果 B 独立，又可能被其他类（比如同一个包下的 C）依赖，不符合设计的本意。所以不如将其变成 A.B，等于添加个注释，告诉其他类别使用 B 了，它只跟 A 玩。

## 21.11. Java 类初始化顺序

单独的类:

1. 静态属性
1. 静态代码块
1. 普通属性
1. 普通代码块
1. 构造方法

继承关系的父子类:

1. 父类静态属性
1. 父类静态代码块
1. 子类静态属性
1. 子类静态代码块
1. 父类普通属性
1. 父类普通代码块
1. 父类构造方法
1. 子类普通变量
1. 子类普通代码块
1. 子类构造方法

## 21.12. Random-随机数

https://www.cnblogs.com/yrrAwx/p/7806444.html

## 21.13. 位运算

左移: 左移 n 位就是把最高位 n 位移出，低位添加 n 个 0 的操作，左移操作相当于将该数乘以 2^n 次方。

右移: 右移 n 位就是把低位 n 位移出，高位添加 n 个 0 的操作，右移操作相当于将该数除以 2^n 次方。

https://www.cnblogs.com/liaopeng/p/8436155.html

## 21.14. 为什么包名都小写

实际上, java 包名是大小写敏感的, 那为什么还是要求都要小写呢

是为了跨平台的考虑, Linux 中的文件名是大小写敏感的, 但是 windows 中的文件名是大小写不敏感的, 防止在 Windows 平台出错, 统一要求小写

## 21.15. 处理 unicode 编码问题

```java
// 方法1
public class UnicodeUtils {

    /**
     * 字符串编码成Unicode编码
     */
    public static String encode(String src) throws Exception {
        char c;
        StringBuilder str = new StringBuilder();
        int intAsc;
        String strHex;
        for (int i = 0; i < src.length(); i++) {
            c = src.charAt(i);
            intAsc = (int) c;
            strHex = Integer.toHexString(intAsc);
            if (intAsc > 128)
                str.append("\\u" + strHex);
            else
                str.append("\\u00" + strHex); // 低位在前面补00
        }
        return str.toString();
    }

    /**
     * Unicode解码成字符串
     * @param src
     * @return
     */
    public static String decode(String src) {
        int t =  src.length() / 6;
        StringBuilder str = new StringBuilder();
        for (int i = 0; i < t; i++) {
            String s = src.substring(i * 6, (i + 1) * 6); // 每6位描述一个字节
            // 高位需要补上00再转
            String s1 = s.substring(2, 4) + "00";
            // 低位直接转
            String s2 = s.substring(4);
            // 将16进制的string转为int
            int n = Integer.valueOf(s1, 16) + Integer.valueOf(s2, 16);
            // 将int转换为字符
            char[] chars = Character.toChars(n);
            str.append(new String(chars));
        }
        return str.toString();
    }
}


// 方法2
public class T {
    @Test
    public void te() {
        String te = "\\u97e6\\u5c0f\\u5b9d";
        final String result = unicodeDecode(te);
        System.out.println(result);
    }

    public static String unicodeDecode(String string) {
        Pattern pattern = Pattern.compile("(\\\\u(\\p{XDigit}{4}))");
        Matcher matcher = pattern.matcher(string);
        char    ch;
        while (matcher.find()) {
            ch = (char) Integer.parseInt(matcher.group(2), 16);
            string = string.replace(matcher.group(1), ch + "");
        }
        return string;
    }

    public static String unicodeEncode(String string) {
        char[] utfBytes = string.toCharArray();
        String unicodeBytes = "";
        for (int i = 0; i < utfBytes.length; i++) {
            String hexB = Integer.toHexString(utfBytes[i]);
            if (hexB.length() <= 2) {
                hexB = "00" + hexB;
            }
            unicodeBytes = unicodeBytes + "\\u" + hexB;
        }
        return unicodeBytes;
    }
}
```


## 21.16. 为什么成员变量再次赋值给局部变量

https://www.oschina.net/question/2319418_2317139

大体来说，这样写是一种极端的优化，在运行时，即时编译器（JIT）将会把这种代码编译成与本地平台相关的机器码，并进行各种层次的优化，以提高性能。

http://mail.openjdk.java.net/pipermail/core-libs-dev/2010-May/004165.html
https://stackoverflow.com/questions/2785964/in-arrayblockingqueue-why-copy-final-member-field-into-local-final-variable

## 21.17. 为什么定义成员变量不用赋值而定义局部变量必须赋值

任何变量在C语言中不赋值的话，会是乱码的形式，可能有安全问题。所以java修正了这点，对于局部变量强制让你赋值

为什么成员变量有自己的初始值，而不需要强制赋值，那是因为new对象的时候，构造函数帮你初始化默认值了

# 22. 开源项目

## 22.1. 博客 cms 系统

https://github.com/halo-dev/halo

https://github.com/JPressProjects/jpress 类似 WordPress

https://github.com/gentics/mesh

## 22.2. 假数据 fake dummy data

https://github.com/datafaker-net/datafaker

## 支付

https://github.com/Javen205/IJPay


# 23. java agent


https://mp.weixin.qq.com/s/ArP0CtVZMB2oUYSdjr7RGw
https://www.jianshu.com/p/d47e3aa1cb5c

基本使用

https://www.cnblogs.com/rickiyang/p/11368932.html
https://www.jianshu.com/p/b72f66da679f
https://www.cnblogs.com/aspirant/p/8796974.html



btrace  https://github.com/btraceio/btrace 线上调试代码不用重启项目


jrebel  热加载, 只重新加载修改的 类, mybatis xml 修改也可以实现热加载




