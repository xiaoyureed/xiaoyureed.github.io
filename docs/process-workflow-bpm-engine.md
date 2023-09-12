---
title: 工作流引擎
tags: [workflow]
date: 2017-06-13
toc_min_heading_level: 2
toc_max_heading_level: 5
---

https://github.com/meirwah/awesome-workflow-engines

https://github.com/flowable/flowable-engine

https://github.com/bpmn-io/bpmn-js
https://juejin.cn/post/6844904186304266253
https://juejin.cn/post/6844904017567416328#heading-2
https://gitee.com/jjjxxx/activiti-designer
https://www.jianshu.com/p/e4e0499517b6

https://www.jianshu.com/p/5326bf3a39cd
https://www.jianshu.com/p/e4e0499517b6

https://www.jianshu.com/p/21917024c6e1
https://www.activiti.org/userguide/#_getting_started_2

https://gitee.com/calvinhwang123/RuoYi-Process#https://www.bilibili.com/video/BV1Fp4y19729
https://www.bilibili.com/video/BV1Fp4y19729?p=13


https://github.com/alibaba/bulbasaur
https://github.com/youseries/uflo
https://github.com/Activiti/Activiti
https://github.com/jetlinks/rule-engine

<!--more-->


## activity7 

### brief intro

#### 使用中的关键步骤

```sh

- process definition

    Create .bpmn file  (generally by using dedicated design tool)

    BPMN 规范

        指定流程定义key
        圆圈是起点终点事件
        方框是节点
            指定节点负责人 assignee

- deploy the process definition file (.bpmn file) by using the api provided by activity

    it's similar to load a java Class file

- start a ProcessInstance

    类比 创建Java类的实例

    会在act_ru_execution流程实例的执行表中存储 businesskey (业务标识，通常为业务表的主键，业务标识和流程实例一一对应)

- query the todo task of current login user

- handling my task

```

#### database tables

Activiti 的表都以 ACT_开头。 第二部分是表示表的用途的两个字母标识。 用途也和服务的 API 对应。

```sh
ACT_RE_*: RE表示 repository。 这个前缀的表包含了流程定义和流程静态资源 （图片，规则，等等）。

ACT_RU_*: RU表示 runtime。 这些运行时的表，包含流程实例，任务，变量，异步任务，等运行中的数据。 Activiti 只在流程实例执行过程中保存这些数据， 在流程结束时就会删除这些记录。 这样运行时表可以一直很小速度很快。

    act_ru_execution 流程实例执行表，记录当前流程实例的执行情况
        id
        proc_inst_id 流程实例 id

        如果流程当前所在节点只有一个分支时，则一个流程实例在这里只有一条记录且此执行表的主键 id 和流程实例 id 相同
        如果流程当前有多个分支正在运行，则该执行表中有多条记录，表示一个流程实例当前有多个正在运行的分支
        不论当前有几个分支，总会有一条记录的执行表的主键和流程实例 id 相同。
        一个流程实例运行完成，此表中与流程实例相关的记录删除
    
    act_ru_task 任务执行表，表示正在执行的任务
        id
        proc_inst_id

        启动流程实例，流程当前执行到第一个任务结点，此表会插入一条记录表示当前任务的执行情况，如果任务完成则记录删除。

    act_ru_identitylink 任务参与者，记录当前参与任务的用户或组
        id
        type
        task_id
        user_id
        proc_inst_id

ACT_HI_*: HI表示 history。 这些表包含历史数据，比如历史流程实例， 变量，任务等等。

    act_hi_procinst 流程实例历史表
        id
        proc_inst_id
        business_key
        start_time
        end_time

        流程实例启动，会在此表插入一条记录，流程实例运行完成记录也不会删除。

    
    act_hi_taskinst 任务历史表，记录所有任务

        开始一个任务，不仅在 act_ru_task 表插入记录，也会在历史任务表插入一条记录，任务历史表的主键就是任务 id，任务完成此表记录不删除。

    act_hi_actinst 活动历史表，记录所有活动

        活动包括任务，所以此表中不仅记录了任务，还记录了流程执行过程的其它活动，比如开始事件、结束事件

ACT_GE_*: GE 表示 general。 通用数据， 用于不同场景下。
https://blog.csdn.net/qq_33417321/article/details/105004510
```

#### 类结构图

```sh

ProcessEngineConfiguration 加载 activiti.cfg.xml

    ProcessEngine

        RepositoryService
            Deploy process definition

        TaskService
            query task info

        RuntimeService
            查询流程执行信息

        ManagementService

        HistoryService
```

### spring boot 集成
