---
title: Iot 物联网
tags: [iot]
date: 2020-06-06
toc_min_heading_level: 2
toc_max_heading_level: 5
---

<<图解物联网>>

https://github.com/microsoft/IoT-For-Beginners


2、熟悉视频编解码及图像处理原理，了解RTPRTCP、rtmp、rtsp等协议
3、熟悉TCP/IP，HTTP/HTTPS、MQTT，WebSocket，CoAP等一种或多种网络协议；
4、熟悉嵌入式操作系统、IoT相关协议(mqtt/opc-da/opc-ua/modbus等)
5、有基于开源 IoT平台相关二次开发使用经验;
6、有边缘-云互通编程开发经验，熟悉AWS greengrass、Service mesh 等开发框架;
7、有openTSDB 和influxDB等时序数据库实际开发经验;
8、良好的逻辑思维能力，熟悉业务抽象和数据模型设计，具有很强的分析问题和解决问题的能力
9 需熟悉modbus、opc、websocket等物联网通信协议，需有过消防监控、视频监控、通信广播、电力监控等物联网对接经验。
4、熟悉MQTT、COAP/LwM2M、BLE、Modbus等IoT常见通信协议；
5、熟练使用JProfiler/VisualVM等Java性能优化工具，熟悉Java的IO/内存/数据库性能优化；
熟悉物联网平台架构设计，熟悉MQTT/CoAP等主流物联网通信协议
有时空数据库、规则引擎、设备接入管理、边缘计算等物联网服务研发经验者优先

https://github.com/iegomez/mosquitto-go-auth

https://github.com/IoT-Technology/IoT-Technical-Guide


https://github.com/HQarroum/awesome-iot

https://github.com/phodal/designiot/

https://www.v2ex.com/t/250870 入门

https://github.com/microsoft/IoT-For-Beginners

https://zditect.com/main/iot-internet-of-things/iot-internet-of-things.html

熟悉消费级物联网的技术生态， 能独立完成物联网系统的设备选型、方案设计、硬件调试和控制软件开发。
精通主流的物联通讯协议 WiFi/BlueTooth/NFC/RS485/……， 熟练使用 Java/C#/C++ 等语言进行开发集成。
具备芯片级集成开发经验 STM32/ESP8266/HX711/ATGM336H/74HC595/……

https://github.com/Amazingwujun/mqttx

<!-- truncate -->

## iot brief intro


### mqtt 协议

MQTT（Message Queuing Telemetry Transport，消息队列遥测传输协议），是一种基于发布/订阅（publish/subscribe）模式的“轻量级”即时通讯协议，该协议构建于TCP/IP协议上

低开销、低带宽占用等优点, 特别适合用来当做物联网的通信协议

场景:

-（1）消息推送： 如PC端的推送公告，比如安卓的推送服务，还有一些即时通信软件如微信、易信等也是采用的推送技术。
-（2）智能点餐： 通过MQTT消息队列产品，消费者可在餐桌上扫码点餐，并与商家后端系统连接实现自助下单、支付。
-（3）信息更新： 实现商场超市等场所的电子标签、公共场所的多媒体屏幕的显示更新管理。
-（4）扫码出站： 最常见的停车场扫码缴费，自动起竿；地铁闸口扫码进出站。


```sh

MQTT Client

MQTT Broker

MQTT Connection
    参数:
    - ClientId
    - Clean Session
    - Username/Password
    - Will Message
    - KeepAlive
    - QOS 此数字表示消息的服务质量 (QoS)。有三个级别：0、1 和 2
        QoS 0（最多一次）：消息发布完全依赖底层 TCP/IP 网络。会发生消息丢失或重复。这个级别可用于如下情况，环境传感器数据，丢失一次数据无所谓，因为不久后还会有第二次发送。
        QoS 1（至少一次）：确保消息到达，但消息重复可能会发生。
        QoS 2（只有一次）：确保消息到达一次。这个级别可用于如下情况，在计费系统中，消息重复或丢失会导致不正确的结果。
    - Payload 每条消息的实际内容。MQTT 是数据无关性的。可以发送任何文本、图像、加密数据以及二进制数据。
    - timeout：MQTT会尝试接收数据，直到timeout时间到后才会退出。

```

### mqtt broker 服务端选型

https://blog.csdn.net/emqx_broker/article/details/120017095

```sh

https://www.emqx.com/zh emqx

https://learnku.com/articles/46174 rabbitmq

```

桌面客户端 https://github.com/emqx/MQTTX

## 基于 spring boot

### 功能划分

### 集成mqtt

https://developer.aliyun.com/article/1150694
https://blog.csdn.net/beibei3321/article/details/124187758

```xml

<dependency>
  <groupId>org.springframework.integration</groupId>
  <artifactId>spring-integration-mqtt</artifactId>
</dependency>

```

## 经验之谈

```sh

https://v2ex.com/t/946848

```