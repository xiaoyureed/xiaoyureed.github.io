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

<!--truncate-->

- [activity7](#activity7)
    - [brief intro](#brief-intro)
        - [使用中的关键步骤](#使用中的关键步骤)
        - [database tables](#database-tables)
        - [类结构图](#类结构图)
    - [spring boot 集成](#spring-boot-集成)
        - [deploy](#deploy)
        - [launch](#launch)
        - [query definition](#query-definition)
        - [delete definition](#delete-definition)
    - [query instance](#query-instance)
        - [query history activity](#query-history-activity)
        - [query history task](#query-history-task)



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
    act_re_deployment #流程定义部署表，记录流程部署信息
    act_re_procdef #流程定义表，记录流程定义信息
    act_ge_bytearray #资源表(bpmn,png)

    act_re_deployment 和 act_re_procdef 一对多关系，一次部署在流程部署表生成一条记录，但一次部署
        可以部署多个流程定义，每个流程定义在流程定义表生成一条记录。每一个流程定义在
        act_ge_bytearray 会存在两个资源记录，bpmn 和 png

ACT_RU_*: RU表示 runtime。 这些运行时的表，包含流程实例，任务，变量，异步任务，等运行中的数据。 Activiti 只在流程实例执行过程中保存这些数据， 在流程结束时就会删除这些记录。 这样运行时表可以一直很小速度很快。

    act_ru_execution 流程实例执行表，记录当前流程实例的执行情况
        id
        proc_inst_id 流程实例 id
        businesskey 业务主键 和流程实例一一对应 

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

https://blog.csdn.net/qq_38423256/article/details/116332791

#### deploy 

```java

// 获取repositoryService
RepositoryService repositoryService = processEngine.getRepositoryService();
//部署对象
Deployment deployment = repositoryService.createDeployment()
                                    .addClasspathResource("myholiday.bpmn")// bpmn文 件
                                   .addClasspathResource("myholiday.png")// 图片文件
                                   .name("请假申请流程")
                                   .deploy();
System.out.println("流程部署id:" + deployment.getId());
System.out.println("流程部署名称:" + deployment.getName());


// bpmn输入流
InputStream inputStream_bpmn=
this.getClass().getClassLoader().getResourceAsStream("diagram/holiday.bpmn");
// 图片输入流
InputStream inputStream_png = this.getClass().getClassLoader().getResourceAsStream("diagram/holiday.png");
// 流程部署对象
Deployment deployment = repositoryService.createDeployment()
                             .addInputStream("holiday.bpmn", inputStream_bpmn)
                             .addInputStream("holiday.png", inputStream_png)
                             .deploy();
    System.out.println("流程部署id：" + deployment.getId());
    System.out.println("流程部署名称：" + deployment.getName());




// zip deployment
// 定义zip输入流
InputStream inputStream = this.getClass().getClassLoader().getResourceAsStream("diagram/holiday.zip");
ZipInputStream zipInputStream = new ZipInputStream(inputStream);
// 获取repositoryService
RepositoryService repositoryService = processEngine.getRepositoryService();
// 流程部署
Deployment deployment = repositoryService.createDeployment().addZipInputStream(zipInputStream)
.deploy();
System.out.println("流程部署id：" + deployment.getId());
System.out.println("流程部署名称：" + deployment.getName())





// 查询部署资源
//流程部署id
				String deploymentId = "9001";
				// 通过流程引擎获取repositoryService
				ProcessEngine  processEngine = ProcessEngines.getDefaultProcessEngine();
				RepositoryService repositoryService = processEngine.getRepositoryService();
				//读取资源名称
				List<String> resources = repositoryService.getDeploymentResourceNames(deploymentId);
				String resource_image = null;
				//获取图片
				for(String resource_name :resources){
				if(resource_name.indexOf(".png")>=0){
				resource_image = resource_name;
				} }
				//图片输入流
				InputStream inputStream = repositoryService.getResourceAsStream(deploymentId, resource_image);
				File exportFile = new File("d:/holiday.png");
				FileOutputStream fileOutputStream = new FileOutputStream(exportFile);
				byte[] buffer = new byte[1024];
				int len = -1;
				//输出图片
				while((len = inputStream.read(buffer))!=-1){
				    fileOutputStream.write(buffer, 0, len);
				}



// 下载输出资源文件
//获取流程引擎(创建25张表)
			ProcessEngine  processEngine = ProcessEngines.getDefaultProcessEngine();
		    //获取存储资源服务
			RepositoryService repositoryService = processEngine.getRepositoryService();
			
			//获取查询对象
			ProcessDefinitionQuery processDefinitionQuery = repositoryService.createProcessDefinitionQuery();
			//设置查询条件
			processDefinitionQuery.processDefinitionKey("myProcess");
			//获取流程定义对象
			ProcessDefinition processDefinition = processDefinitionQuery.singleResult();
			//流程部署id
			String deploymentId =processDefinition.getDeploymentId();
			//获取png资源的名称processDefinition.getDiagramResourceName()
			//获取bpmn资源的名称processDefinition.getResourceName()
			InputStream  pnginputstream = repositoryService.getResourceAsStream(deploymentId, processDefinition.getDiagramResourceName());
			//bpmn资源输入流
			InputStream  bpmninputstream = repositoryService.getResourceAsStream(deploymentId, processDefinition.getResourceName());
			
			//构建输出流
			OutputStream  pngoutputstream = null;
			OutputStream  bpmnoutputstream = null;
			//通过commonsio进行输入流，输出流转化
			try {
				pngoutputstream = new FileOutputStream("E:\\levelpro\\"+processDefinition.getDiagramResourceName());
				bpmnoutputstream= new FileOutputStream("E:\\levelpro\\"+processDefinition.getResourceName());
				IOUtils.copy(bpmninputstream, bpmnoutputstream);
				IOUtils.copy(pnginputstream, pngoutputstream);
				bpmnoutputstream.close();
				pngoutputstream.close();
				pnginputstream.close();
				bpmninputstream.close();
			} catch (IOException e) {
				e.printStackTrace();
			}


```

#### launch

```java
//获取流程引擎
		ProcessEngine  processEngine = ProcessEngines.getDefaultProcessEngine();
		
		//流程定义激活即有效
		RepositoryService  repositoryService  = processEngine.getRepositoryService();
		repositoryService.activateProcessDefinitionByKey("myProcess");
		
		//流程定义终止即无效
		//repositoryService.suspendProcessDefinitionByKey("myProcess");
		//创建流程启动对象
		RuntimeService runtimeService = processEngine.getRuntimeService();
		String  processDefinitionKey  = "myProcess";
		String  businessKey = "1";
		// 根据流程定义的key启动一个流程实例
		ProcessInstance processInstance = runtimeService.startProcessInstanceByKey(processDefinitionKey, businessKey);
		System.out.println("活动id"+	processInstance.getActivityId());
		System.out.println("实例id"+	processInstance.getProcessInstanceId());



//设置流程变量
		//在启动流程实例时设置流程变量
		//定义流程变量为每个流程中的每个环节分配负责人
		Map<String, Object> variables = new HashMap<String, Object>();
		variables.put("dept_assign", "张三");
		variables.put("leader_assign", "李四");
		//设置流程变量assignee
		ProcessInstance processInstance = runtimeService.startProcessInstanceByKey(processDefinitionKey,businessKey, variables);

```

#### query definition

```java
// 流程定义key
String processDefinitionKey = "holiday";
// 获取repositoryService
RepositoryService repositoryService = processEngine.getRepositoryService();
// 查询流程定义对象
ProcessDefinitionQuery processDefinitionQuery =repositoryService.createProcessDefinitionQuery();
//遍历查询结果
List<ProcessDefinition> list = processDefinitionQuery
                     .processDefinitionKey(processDefinitionKey)
                     .orderByProcessDefinitionVersion().desc().list();
for (ProcessDefinition processDefinition : list) {
    System.out.println("------------------------");
    System.out.println(" 流 程 部 署 id ："+processDefinition.getDeploymentId());
    System.out.println("流程定义id：" + processDefinition.getId());
    System.out.println("流程定义名称" +processDefinition.getName());
    System.out.println("流程定义key：" + processDefinition.getKey());
    System.out.println("流程定义版本：" + processDefinition.getVersion());
   } 
 
}
```

#### delete definition

```java

// 流程部署id
				String deploymentId = "8801";
				// 通过流程引擎获取repositoryService
				ProcessEngine  processEngine = ProcessEngines.getDefaultProcessEngine();
				RepositoryService repositoryService = processEngine.getRepositoryService();
				//删除流程定义，如果该流程定义已有流程实例启动则删除时出错
				 repositoryService.deleteDeployment(deploymentId);
				//设置true 级联删除流程定义，即使该流程有流程实例启动也可以删除，设
				//置为false非级别删除方式，如果流程
				//repositoryService.deleteDeployment(deploymentId, true)
```

### query instance

```java
//获取流程引擎
				ProcessEngine  processEngine = ProcessEngines.getDefaultProcessEngine();
				// 流程定义key
				String processDefinitionKey = "myProcess";
				// 获取RunTimeService
				RuntimeService runtimeService = processEngine.getRuntimeService();
				List<ProcessInstance> list = runtimeService	.createProcessInstanceQuery()
															.processDefinitionKey(processDefinitionKey)//
															.list();
				for (ProcessInstance processInstance : list) {
					System.out.println("----------------------------");
					System.out.println("流程实例id："+ processInstance.getProcessInstanceId());
					System.out.println("所属流程定义id："+processInstance.getProcessDefinitionId());
					System.out.println("流程实例名称："+processInstance.getName());
					System.out.println("是否执行完成：" +processInstance.isEnded());
					System.out.println("是否暂停：" + processInstance.isSuspended());
					System.out.println(" 当 前 活 动 标 识 ： " +processInstance.getActivityId());
			}
```


#### query history activity

```java

//获取流程引擎(创建25张表)
			ProcessEngine  processEngine = ProcessEngines.getDefaultProcessEngine();
			// 获取历史服务historyService
			HistoryService historyService = processEngine.getHistoryService();
			//查询流程活动实例
		    HistoricActivityInstanceQuery historicActivityInstanceQuery = historyService.createHistoricActivityInstanceQuery();
			//设置
		    historicActivityInstanceQuery.processInstanceId("2501");
			List<HistoricActivityInstance> list = historicActivityInstanceQuery.list();
			
			for (HistoricActivityInstance historicActivityInstance : list) {
				System.out.println("活动id:"+historicActivityInstance.getActivityId());
				System.out.println("活动名称:"+historicActivityInstance.getActivityName());
				System.out.println("流程定义id:"+historicActivityInstance.getProcessDefinitionId());
				System.out.println("流程实例id:"+historicActivityInstance.getProcessInstanceId());
				System.out.println("=======================================");
			}
```


#### query history task

```java

//获取流程引擎(创建25张表)
			ProcessEngine  processEngine = ProcessEngines.getDefaultProcessEngine();
			// 获取历史服务historyService
			HistoryService historyService = processEngine.getHistoryService();
			//查询流程活动实例
		    HistoricTaskInstanceQuery historicTaskInstanceQuery = historyService.createHistoricTaskInstanceQuery();
			//设置
		    historicTaskInstanceQuery.processInstanceId("2501");
			List<HistoricTaskInstance> list = historicTaskInstanceQuery.list();
			
			for (HistoricTaskInstance historicTaskInstance : list) {
				System.out.println("历史任务开始时间:"+historicTaskInstance.getStartTime());
				System.out.println("历史任务结束时间:"+historicTaskInstance.getEndTime());
				System.out.println("流程定义id:"+historicTaskInstance.getProcessDefinitionId());
				System.out.println("流程实例id:"+historicTaskInstance.getProcessInstanceId());
				System.out.println("=======================================");
			}
```