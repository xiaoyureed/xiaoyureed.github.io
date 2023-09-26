---
title: How to Test Java App
tags:
  - mock
  - test
  - java
date: 2019-08-14 15:23:16
toc_min_heading_level: 2
toc_max_heading_level: 5
---


相关工具和类库

- Junit、TestNG, Spring Test
- 断言库：AssertJ (推荐), Hamcrest（不更新了，Matcher分散在多个类中，编写困难，JUnit仅依赖了Hamcrest核心包，只附带了最基本的断言功能，如果我们希望断言数字大小之类的话，还需要自己引入Hamcrest完整包，比较麻烦）
- MOCK 框架，例如 Jmock、Easymock、PowerMock (mock静态方法, 私有方法...) ， Mockito(推荐, springboot-test 默认提供);
- rest api 自动化测试：REST Assured， postman
- Selenium: ui测试
- JSONassert：JSON 断言库
- JsonPath：JSON XPath
- https://github.com/DiUS/java-faker  构造假数据
    - https://github.com/jsonzou/jmockdata 中文说明

https://testerhome.com/

<!--more-->


- [1. Testcontainers](#1-testcontainers)
- [2. spring-boot-starter-test](#2-spring-boot-starter-test)
- [3. AssertJ](#3-assertj)
- [4. Mockito](#4-mockito)
    - [4.1. 和 springboot 配合使用](#41-和-springboot-配合使用)
    - [mock 静态方法](#mock-静态方法)
- [6. web层测试](#6-web层测试)
- [7. 压测](#7-压测)
    - [7.1. 性能指标](#71-性能指标)
    - [7.2. siege](#72-siege)
    - [7.3. Gatling](#73-gatling)
    - [7.4. jmeter](#74-jmeter)
    - [7.5. ab](#75-ab)
    - [hey](#hey)
    - [vegeta](#vegeta)
    - [7.6. jmh 方法级别的性能测试](#76-jmh-方法级别的性能测试)
- [8. Junit](#8-junit)
- [9. ab test](#9-ab-test)
- [10. 集成测试 Testcontainers](#10-集成测试-testcontainers)
- [11. 优化测试编写体验](#11-优化测试编写体验)
- [12. talend api tester 浏览器插件](#12-talend-api-tester-浏览器插件)
- [自动化测试](#自动化测试)


## 1. Testcontainers

## 2. spring-boot-starter-test

用于 spring boot 单元测试

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-test</artifactId>
    <scope>test</scope>
    <exclusions>
        <exclusion>
            <groupId>org.junit.vintage</groupId> // 最新版可以不排除了
            <artifactId>junit-vintage-engine</artifactId>
        </exclusion>
    </exclusions>
</dependency>
```

需要排除掉 `junit-vintage-engine` (若不排除, 则测试类需要用 `@RunWith(SpringRunner.class)` 标注才能正常注入 bean)

最新版现在使用只需要添加类注解 `@SpringBootTest` 即可

如果你什么注解也不想用，既不想测试Data JPA 也不想测试 mvc，只是想注册几个bean，然后启动做些测试，那么也可以用下面两个类:
- 可以用ApplicationContextRunner，该类是一个标准的，无web的环境。

- 可以直接用ApplicationContext，该类是Spring为应用程序提供配置的核心接口，例如AnnotationConfigApplicationContext


## 3. AssertJ

流式断言库, spring-boot-starter-test 提供了依赖

Hamcrest 提供了更多断言, springboot 维护了其版本

https://assertj.github.io/doc/#assertj-core
http://joel-costigliola.github.io/assertj/

```java
import static org.assertj.core.api.Assertions.assertThat;

// 常用断言:

// 集合
// 至少有一个符合
Assertions.assertThat(tree).anyMatch(cate -> !CollectionUtils.isEmpty(cate.getChildren()));
// 全都要符合 allMatch
// 全都不符合 noMatch

assertThat(Arrays.asList("world", "hello"))
				.as("列表断言描述")
				.isNotEmpty() 
				.isNotNull()
				.isInstanceOf(List.class)
				.isSubsetOf("hello", "world")
				.contains("hello")
				.containsOnlyOnce("world")
				.startsWith("world")
				.endsWith("hello");


// 单个对象
// matches 符合多个条件

assertThat(user1)
				.as("对象断言描述")
				.isEqualToComparingFieldByField(user2) //user1的每个字段是否与user2相同
				.isExactlyInstanceOf(User.class) //user1是否是User类的对象
				.isSameAs(user3) //是否是同一个对象
				.isNotNull() //是否非空
				.hasFieldOrProperty("name") //是否含有name字段
				.hasFieldOrPropertyWithValue("age", 12); //是否含有age字段，且值为12



// 字符串
assertThat("test").isNotBlank() // 是否为" "字符串
				.as("字符串断言描述").isSubstringOf("test1") // 是否为test1的一部分
				.isSameAs("test") // 对象内元素是否相等
				.isNotEmpty() // 是否为空字符串
				.isEqualTo("test") // 是否相等
				.isEqualToIgnoringCase("Test") // 是否相等（忽略大小写）
				.isExactlyInstanceOf(String.class) // 是否是实例
				.isIn(Arrays.asList("test", "hello")) // 是否在列表中
				.isIn("test", "hello") // 是否在参数列表中
				.isInstanceOfAny(String.class, Integer.class) // 是否是实例中任何一个
				.isNotNull() // 是否不为空
				.contains("es") // 是否包含es子串
				.startsWith("te") // te开始
				.endsWith("st") // st结束
				.matches(".e.t"); // 是否匹配 .e.t 格式
		assertThat("").isNullOrEmpty();


// 数字断言
		assertThat(new Integer(100))
				.as("数字断言描述").isEqualTo(100) // 是否相等
				.isBetween(0, 300) // 是否在0，300之间
				.isNotNull() // 是否非空
				.isNotZero() // 是否不等于0
				.isGreaterThanOrEqualTo(80) // 是否大约等于80
				.isLessThan(200) // 是否小于200
				.isPositive() // 是否是正数
				.isNotNegative() // 是否是非负数
				.isIn(Arrays.asList(100, 200)) // 是否在列表中
				.isInstanceOf(Integer.class); // 是否是Integer类型

// 日期断言
		assertThat(new Date())
				.as("日期断言描述")
				.isAfter("2018-08-01")
				.isAfterYear(2017)
				.isBetween("2018-01-01", "2018-08-31")
				.isEqualToIgnoringHours(new Date().toLocaleString())
				.isExactlyInstanceOf(Date.class)
				.isInSameHourAs(new Date())
				.isInThePast()
				.isToday();



// 字典断言
Map foo = Maps.newHashMap();
foo.put("A", 1);
foo.put("B", 2);
foo.put("C", 3);
assertThat(foo)
        .as("字典断言描述")
        .isNotNull() // 是否不为空
        .isNotEmpty() // 是否size为0
        .hasSize(3) // size是否为3
        .contains(entry("A", 1)) // 是否包含entry
        .containsKeys("A") // 是否包含key
        .containsValue(1); // 是否包含value

// 异常断言
//https://www.baeldung.com/assertj-exception-assertion#:~:text=AssertJ%20Exception%20Assertions%201%20Overview.%20In%20this%20quick,expressions.%204%20Conclusion.%20And%20there%20we%20are.%20
assertThatThrownBy(() -> {
    List<String> list = Arrays.asList("String one", "String two");
    list.get(2);
}).isInstanceOf(IndexOutOfBoundsException.class)
  .hasMessageContaining("Index: 2, Size: 2");
			//.hasMessage("Index: %s, Size: %s", 2, 2)
		// .hasMessageStartingWith("Index: 2")
		// .hasMessageContaining("2")
		// .hasMessageEndingWith("Size: 2")
		// .hasMessageMatching("Index: \\d+, Size: \\d+")
		// .hasCauseInstanceOf(IOException.class)
		// .hasStackTraceContaining("java.io.IOException");
//or
assertThatExceptionOfType(IndexOutOfBoundsException.class)
  .isThrownBy(() -> {
      // ...
}).hasMessageMatching("Index: \\d+, Size: \\d+");

```


## 4. Mockito

https://blog.xiayf.cn/2019/06/17/mockito/ 两种风格

https://github.com/alibaba/testable-mock ali出品 mock 框架

替代者: https://github.com/wiremock/wiremock

测试用 mocking framework, 比如 web app 测试, spring boot-starter-test提供了她的依赖

demo: https://github.com/xiaoyureed/springboot-demos/tree/master/mockito-mybatis-plus-demo

http://wiki.jikexueyuan.com/project/spring-boot-cookbook-zh/test-mockito.html

```java
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;
```

### 4.1. 和 springboot 配合使用

引入

```xml
 <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
        </dependency>

<!-- optional, this is dedicated to mock static methods, powerMock can be replaced now! -->
 <dependency>
            <groupId>org.mockito</groupId>
            <artifactId>mockito-inline</artifactId>
            <scope>test</scope>
        </dependency>
```



if you would like using it without springboot, just:

```xml
        <dependency>
            <groupId>org.mockito</groupId>
            <artifactId>mockito-inline</artifactId>
            <scope>test</scope>
        </dependency>
        <dependency>
            <groupId>org.mockito</groupId>
            <artifactId>mockito-junit-jupiter</artifactId>
            <scope>test</scope>
        </dependency>
        <dependency>
            <groupId>org.junit.jupiter</groupId>
            <artifactId>junit-jupiter-api</artifactId>
            <scope>test</scope>
        </dependency>

```

```java

// scenario1: @MockBean 标注需要 mock 的成员, @Autowired 标注目标对象, 无需初始化, 但是这种方式造成 appContext 重启, 性能低

// scenario2: 需要 mock 的对象成员如 RedisService 使用 @mock, 不需要 mock 的成员使用 @Spy @Autowired;  填充到目标测试对象 使用 @InjectMocks 标注目标对象, 每次测试前需要初始化 `@BeforeEach void xxx() {MockitoAnnotations.initMocks(this);}`

@WebMvcTest
class QuestionRestControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private QuestionService questionService;

    @Test
    void should_return_ok_when_create_question() throws Exception {
        String id = "hello";

        BDDMockito.given(questionService.createQuestion(ArgumentMatchers.any(CreateQuestionCommand.class)))
            .willReturn(new CreateQuestionResult().setId(id));

        byte[] content = new ClassPathResource("request/question/create/single-one.json").getInputStream().readAllBytes();

        mockMvc.perform(
                MockMvcRequestBuilders.post("/questions/create")
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(content)
            )
            .andExpect(status().isOk())
            .andExpect(jsonPath("$.data.id").value(id));
    }
}




```


### mock 静态方法

powerMock: 用于解决 mockito 无法覆盖的 case, 比如 static method 的 mock, 现在推荐mockito-inline 


mockito-inline should be used like this:

```xml

<!-- https://mvnrepository.com/artifact/org.mockito/mockito-inline -->
        <dependency>
            <groupId>org.mockito</groupId>
            <artifactId>mockito-inline</artifactId>
            <scope>test</scope>
        </dependency>

```

```java

```

## 6. web层测试

- MockMVC 单元测试
- [TestRestTemplate](https://www.baeldung.com/spring-boot-testresttemplate), RestAssured 集成测试

[区别]](https://stackoverflow.com/questions/52051570/whats-the-difference-between-mockmvc-restassured-and-testresttemplate)

[web层unit test demo](https://github.com/xiaoyureed/springboot-demos/blob/master/mockito-mybatis-plus-demo/src/test/java/io/github/xiaoyureed/mockitomybatisplusdemo/controller/UserControllerTest.java)

https://github.com/rest-assured/rest-assured - rest api 测试库

```java
@SpringBootTest(classes = GeneratorApp.class, webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)

/**
     * @LocalServerPort 提供了 @Value("${local.server.port}") 的代替
     */
    @LocalServerPort
    private int port;




@AutoConfigureMockMvc
@SpringBootTest
public class ExceptionTest {
    @Autowired
    MockMvc mockMvc;

    @Test
    void should_return_400_if_param_not_valid() throws Exception {
        mockMvc.perform(get("/api/illegalArgumentException"))
                .andExpect(status().is(400))
                .andExpect(jsonPath("$.message").value("参数错误!"));
    }

    @Test
    void should_return_404_if_resourse_not_found() throws Exception {
        mockMvc.perform(get("/api/resourceNotFoundException"))
                .andExpect(status().is(404))
                .andExpect(jsonPath("$.message").value("Sorry, the resourse not found!"));
    }
}
```


## 7. 压测

https://www.ibm.com/developerworks/cn/java/j-lo-performance-analysissy-tools/index.html
https://www.ibm.com/developerworks/cn/java/j-lo-performance-analysissy-tools2/index.html
https://www.ibm.com/developerworks/cn/java/j-lo-performance-analysissy-tools3/


测试 内存泄漏 , 并发, 同步, ...问题

### 7.1. 性能指标

RS: response time 

QPS：Queries Per Second意思是“每秒查询数”，是一台服务器每秒能够的查询次数, 次/秒 , qps 衡量接口性能

TPS：是TransactionsPerSecond的缩写, 每秒交易数, 笔/秒, 一个交易/事务可能包含多个请求, tps 用来衡量整个业务流程性能; 金融系统 1000tps-5000tps, 保险系统 100-100000tps, 制造行业 100-5000tps, 电商 10000-1000000tps, 中小型网站类似金融系统

吞吐量: 表示应用系统每秒钟最大能接受的用户访问量 , 反应系统的承压能力; 单个reqeust 对CPU消耗越高，外部系统接口、IO影响速度越慢，系统吞吐能力越低，反之越高, 类似 tps, qps

### 7.2. siege

http 压测工具

https://www.joedog.org/siege-manual/

TODO


### 7.3. Gatling

类似 jmeter, 使用 Scala


### 7.4. jmeter

一般查看 吞吐量, 90% 请求响应时间, 99%响应时间


### 7.5. ab

apache benchmark并发测试工具

### hey

https://github.com/rakyll/hey

### vegeta

https://github.com/tsenart/vegeta


### 7.6. jmh 方法级别的性能测试

想准确地知道某个方法需要执行多长时间，以及执行时间和输入之间的相关性
对比接口不同实现在给定条件下的吞吐量
查看多少百分比的请求在多长时间内完成

https://www.zhihu.com/question/276455629/answer/1259967560

jdk9 之前需要加入依赖

```xml
<dependency>
    <groupId>org.openjdk.jmh</groupId>
    <artifactId>jmh-core</artifactId>
    <version>1.23</version>
</dependency>
<dependency>
    <groupId>org.openjdk.jmh</groupId>
    <artifactId>jmh-generator-annprocess</artifactId>
    <version>1.23</version>
</dependency>

```


## 8. Junit

这里主要介绍 Junit5 (https://junit.org/junit5/docs/current/user-guide/#overview-getting-started)

```xml
    <properties>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
        <maven.compiler.source>1.8</maven.compiler.source>
        <maven.compiler.target>${maven.compiler.source}</maven.compiler.target>
        <junit.jupiter.version>5.6.2</junit.jupiter.version>
    </properties>

    <dependencies>
        <dependency>
            <groupId>org.junit.jupiter</groupId>
            <artifactId>junit-jupiter</artifactId>
            <version>${junit.jupiter.version}</version>
            <scope>test</scope>
        </dependency>
    </dependencies>
```

JUnit 5 = JUnit Platform + JUnit Jupiter + JUnit Vintage


## 9. ab test

https://mp.weixin.qq.com/s/tmbGaWHp8k2MjByIa6z7MA

TODO



## 10. 集成测试 Testcontainers

https://blog.csdn.net/mail_liuxing/article/details/99075606
https://github.com/testcontainers/testcontainers-java

## 11. 优化测试编写体验

groovy + spock


## 12. talend api tester 浏览器插件

类似 postman, 更轻量

https://www.bilibili.com/video/av90263035/ 

## 自动化测试


Playwright

https://seleniumbase.io/

cypress 

https://github.com/metersphere/metersphere 接口测试

casperjs 前端自动化测试方案

https://www.bilibili.com/video/BV1nh411974p?p=8

`不过无论什么时候，都应该是大量的做单元测试，大量的做 API 自动化测试，根据具体项目情况，少量或中等强度的做前端自动化`

https://zhuanlan.zhihu.com/p/410559730 jvm-sandbox-repeater 流量录制
https://juejin.cn/post/7280429214607736890 降噪