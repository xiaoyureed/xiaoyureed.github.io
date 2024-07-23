---
title: Python🌈
date: 2015-02-10 22:19:59
tags: [python]
toc_min_heading_level: 2
toc_max_heading_level: 5
---

https://github.com/g1879/DrissionPage

https://github.com/VinciGit00/Scrapegraph-ai 基于 ai 爬虫
https://blog.csdn.net/m0_51156601/article/details/126886040 playwright 

https://github.com/crazyguitar/pysheeet?tab=readme-ov-file py 实现的小功能

https://github.com/vinta/awesome-python

https://www.pythonweekly.com/

https://python-patterns.guide/

https://github.com/faif/python-patterns?utm_source=bestxtools.com

https://github.com/qiandao-today/qiandao 签到框架

技术栈 Flask 、peewee 、Celery 、MySQL 、Redis

https://github.com/xuanhun/PythonHackingBook1 黑客

https://www.osgeo.cn/python-guide/scenarios/web.html#heroku
https://learnku.com/docs/python-guide/2018/structure/3260#f294d6

https://learnku.com/articles/23010/teach-you-to-read-the-python-open-source-project-code 代码阅读

https://github.com/HT524/500LineorLess_CN 实现简单系统

https://github.com/iswbm/pycharm-guide
https://github.com/iswbm

https://zhuanlan.zhihu.com/p/24132781 经验简历

https://github.com/lalor 运维大牛

https://github.com/jobbole/awesome-python-cn
https://github.com/vinta/awesome-python

https://python-web-guide.readthedocs.io/zh/latest/index.html 工程实践 经验分享

https://learnku.com/docs/python-guide/2018 技术栈

https://bramblexu.com/posts/b1c0cc4f/#toc-heading-5 vscode 配置 


https://www.zhihu.com/question/19827960 指的关注的社区

<!--truncate-->

- [介绍](#介绍)
    - [python 特点](#python-特点)
    - [安装 升级](#安装-升级)
    - [vscode 环境配置](#vscode-环境配置)
    - [设置国内pip源](#设置国内pip源)
    - [解释器](#解释器)
- [python tricks 坑](#python-tricks-坑)
    - [函数的默认参数](#函数的默认参数)
    - [创建生成器同时存在条件过滤](#创建生成器同时存在条件过滤)
    - [浮点数无法被精确计算](#浮点数无法被精确计算)
    - [递归调用无法保证调用的是自身](#递归调用无法保证调用的是自身)
- [语法](#语法)
    - [输入输出 打印 main魔法变量](#输入输出-打印-main魔法变量)
    - [基本数据类型](#基本数据类型)
        - [字符串](#字符串)
            - [多行 不可变 比较](#多行-不可变-比较)
            - [字符编码](#字符编码)
            - [格式化](#格式化)
            - [字符串处理](#字符串处理)
        - [字节数组 bytes bytearray](#字节数组-bytes-bytearray)
        - [数字](#数字)
        - [布尔值 空值](#布尔值-空值)
        - [数组 array](#数组-array)
        - [集合](#集合)
            - [list 有序可变](#list-有序可变)
                - [slices 切片](#slices-切片)
            - [tuple 有序不可变列表](#tuple-有序不可变列表)
                - [namedtuple() 创建带名字下标的元组](#namedtuple-创建带名字下标的元组)
                - [typeing.NamedTulple 命名的元组](#typeingnamedtulple-命名的元组)
                - [元组解包](#元组解包)
            - [set 无序不可重复](#set-无序不可重复)
                - [frosenset 不可变set](#frosenset-不可变set)
            - [deque 双端队列 栈](#deque-双端队列-栈)
            - [queue.Queue 阻塞队列](#queuequeue-阻塞队列)
            - [queue.LifoQueue 阻塞栈](#queuelifoqueue-阻塞栈)
            - [multiprocessing.Queue 跨进程阻塞队列](#multiprocessingqueue-跨进程阻塞队列)
            - [queue.PriorityQueue heapq 优先级队列](#queuepriorityqueue-heapq-优先级队列)
        - [字典 dict](#字典-dict)
            - [基本 dict](#基本-dict)
            - [字典解包](#字典解包)
            - [字典格式化](#字典格式化)
            - [defaultdict 默认值dict](#defaultdict-默认值dict)
            - [OrderedDict 字典排序](#ordereddict-字典排序)
            - [合并多个字典](#合并多个字典)
                - [内置方法合并](#内置方法合并)
                - [ChainMap 提供动态视图 首个 dict 可修改](#chainmap-提供动态视图-首个-dict-可修改)
            - [MappingProxyType 只读视图](#mappingproxytype-只读视图)
            - [Counter 通过字典表示列表](#counter-通过字典表示列表)
            - [dict 场景](#dict-场景)
                - [模拟 switch case](#模拟-switch-case)
            - [dict 字典推导式](#dict-字典推导式)
        - [列表推导式](#列表推导式)
        - [生成器 generator](#生成器-generator)
        - [迭代器](#迭代器)
        - [二进制结构封包解包](#二进制结构封包解包)
        - [SimpleNamespace 创建简单类](#simplenamespace-创建简单类)
        - [container 容器](#container-容器)
    - [作用域](#作用域)
    - [条件循环](#条件循环)
    - [比较判断](#比较判断)
    - [函数](#函数)
        - [内置函数](#内置函数)
        - [参数检查](#参数检查)
        - [多种参数](#多种参数)
        - [递归](#递归)
        - [高阶函数](#高阶函数)
    - [文件处理](#文件处理)
        - [创建文件](#创建文件)
        - [读写文件数据](#读写文件数据)
    - [装饰器 decorator](#装饰器-decorator)
        - [装饰器介绍](#装饰器介绍)
        - [类装饰器](#类装饰器)
        - [案例: 失败重试](#案例-失败重试)
        - [案例: 依赖注入](#案例-依赖注入)
    - [面向对象](#面向对象)
        - [类 对象](#类-对象)
        - [描述器](#描述器)
            - [描述器介绍](#描述器介绍)
            - [属性的查询链路顺序](#属性的查询链路顺序)
            - [案例: 记录属性访问日志](#案例-记录属性访问日志)
            - [案例: 属性校验](#案例-属性校验)
            - [案例: 简化属性的定义](#案例-简化属性的定义)
            - [案例: 简单的 orm](#案例-简单的-orm)
            - [案例: 实现属性懒加载](#案例-实现属性懒加载)
        - [继承 鸭子类型](#继承-鸭子类型)
        - [判断类型信息](#判断类型信息)
        - [动态操作](#动态操作)
        - [枚举](#枚举)
        - [对象克隆 拷贝 shadow-copy deep-copy](#对象克隆-拷贝-shadow-copy-deep-copy)
        - [abc模块 定义抽象基类](#abc模块-定义抽象基类)
    - [数据类](#数据类)
        - [@dataclass 创建实体类](#dataclass-创建实体类)
        - [hash策略](#hash策略)
    - [元类 Metaclass](#元类-metaclass)
    - [错误异常处理](#错误异常处理)
        - [系统内置的异常](#系统内置的异常)
        - [异常捕获抛出](#异常捕获抛出)
        - [自定义异常](#自定义异常)
    - [魔术方法](#魔术方法)
        - [创建 `__new__`](#创建-__new__)
        - [初始化 `__init__` `__post_init__`](#初始化-__init__-__post_init__)
        - [`__del__`](#__del__)
        - [`__exit__` 自动关闭回收](#__exit__-自动关闭回收)
        - [可迭代 `__iter__`](#可迭代-__iter__)
        - [可调用对象实例 `__call__`](#可调用对象实例-__call__)
        - [属性监控回调 `__getattr__` `__getattribute__`](#属性监控回调-__getattr__-__getattribute__)
        - [可运算 操作符重载](#可运算-操作符重载)
            - [加减乘除](#加减乘除)
            - [相等比较 `==`, `is`, `__eq__`, ` id()`](#相等比较--is-__eq__--id)
        - [打印格式化  `__str__` `__repr__`](#打印格式化--__str__-__repr__)
        - [类型转换 `__bool__`](#类型转换-__bool__)
- [标准库](#标准库)
    - [日期处理](#日期处理)
- [设计模式 design pattern](#设计模式-design-pattern)
    - [代理模式 proxy](#代理模式-proxy)
    - [工厂模式 factory](#工厂模式-factory)
    - [单例模式 singleton](#单例模式-singleton)
- [工程化](#工程化)
    - [依赖注入](#依赖注入)
    - [cookiecutter 项目模板](#cookiecutter-项目模板)
    - [Setuptools: 管理依赖、构建和发布](#setuptools-管理依赖构建和发布)
    - [虚拟环境 virtual environment](#虚拟环境-virtual-environment)
    - [devops 构建流水线](#devops-构建流水线)
    - [发布自定义库](#发布自定义库)
    - [项目结构](#项目结构)
    - [模块 import](#模块-import)
        - [模块简介](#模块简介)
            - [模块搜索路径](#模块搜索路径)
            - [import原理 模块查询链路](#import原理-模块查询链路)
            - [自定义导入器](#自定义导入器)
        - [包内资源 `importlib.resources`](#包内资源-importlibresources)
        - [延迟导入 lazy import](#延迟导入-lazy-import)
        - [动态导入 实现插件模式](#动态导入-实现插件模式)
        - [导入钩子 import hook](#导入钩子-import-hook)
        - [path hook](#path-hook)
    - [`__main__` `__name__` `__file__`](#__main__-__name__-__file__)
    - [type hints 类型提示](#type-hints-类型提示)
    - [linter 工具](#linter-工具)
    - [依赖安全性检查](#依赖安全性检查)
    - [代码风格 格式化](#代码风格-格式化)
    - [配置文件管理](#配置文件管理)
    - [测试test](#测试test)
        - [单元测试](#单元测试)
        - [性能压测](#性能压测)
        - [集成测试 integration test](#集成测试-integration-test)
    - [包管理](#包管理)
        - [rye 使用](#rye-使用)
        - [uv](#uv)
    - [日志](#日志)
    - [生成文档](#生成文档)
- [并发](#并发)
    - [GIL 简介](#gil-简介)
    - [多线程](#多线程)
    - [多进程](#多进程)
    - [可变 不可变](#可变-不可变)
- [异步 协程](#异步-协程)
    - [yield 手动切换](#yield-手动切换)
    - [gevent 自动切换](#gevent-自动切换)
- [编写命令行程序](#编写命令行程序)
    - [命令行自动补全](#命令行自动补全)
- [调试](#调试)
    - [断言](#断言)
    - [设置断点 pdb](#设置断点-pdb)
- [jinja2 模板](#jinja2-模板)
- [路径问题](#路径问题)
    - [文件路径 and 终端路径](#文件路径-and-终端路径)
    - [获取脚本位置](#获取脚本位置)
- [shutil 使用](#shutil-使用)
- [web 开发](#web-开发)
    - [用Python写ui](#用python写ui)
    - [litestar](#litestar)
    - [fastapi](#fastapi)
    - [Django](#django)
    - [flask](#flask)
        - [flask解决跨域问题](#flask解决跨域问题)
        - [保护 flask api](#保护-flask-api)
        - [命令行or idea 启动](#命令行or-idea-启动)
        - [rest api](#rest-api)
        - [数据库交互](#数据库交互)
        - [flask 中的日志](#flask-中的日志)
        - [blueprint蓝图 模块化开发](#blueprint蓝图-模块化开发)
        - [上下文对象](#上下文对象)
- [db 驱动 问题](#db-驱动-问题)
- [爬虫 spider crawler](#爬虫-spider-crawler)
- [代替 shell 运维](#代替-shell-运维)
    - [实用脚本](#实用脚本)
        - [命令行参数解析](#命令行参数解析)
        - [路径](#路径)
        - [文件操作](#文件操作)
        - [sh 命令执行](#sh-命令执行)
    - [传递命令行参数](#传递命令行参数)
    - [shell 调用 Python](#shell-调用-python)
        - [shel 读取 Python 函数返回值](#shel-读取-python-函数返回值)
        - [统计出现次数](#统计出现次数)
        - [读取 csv 文件](#读取-csv-文件)
    - [Python 调用 shell](#python-调用-shell)
        - [subprocess](#subprocess)
        - [os.system](#ossystem)
        - [os.popen](#ospopen)
        - [system](#system)
        - [sh](#sh)
        - [paramiko](#paramiko)
    - [部署 springboot](#部署-springboot)
- [开源库](#开源库)
    - [日期时间](#日期时间)
    - [爬虫 crawler](#爬虫-crawler)
    - [变声 语音合成](#变声-语音合成)
    - [系统运维](#系统运维)
    - [声音](#声音)
    - [图像](#图像)
    - [数据模型定义](#数据模型定义)
    - [序列化反序列化](#序列化反序列化)
    - [做 web 开发](#做-web-开发)
- [调Java](#调java)
    - [jpype](#jpype)
    - [jython](#jython)
- [调用 rust](#调用-rust)
- [cffi 绑定](#cffi-绑定)
- [web应用部署](#web应用部署)
    - [生成依赖清单](#生成依赖清单)
    - [gunicorn](#gunicorn)
    - [supervisord 管理 daemon](#supervisord-管理-daemon)
    - [pm2](#pm2)
- [setup.py](#setuppy)
- [wheel](#wheel)
- [自动抢购脚本](#自动抢购脚本)



# 介绍

## python 特点

python 作为脚本语言, 方法定义调用有前后顺序

库多

胶水语言, cpp 交互方便

面向对象, 类似 ruby, 但是没有 ruby 面向对象纯粹


## 安装 升级

wls 默认装的是 python2

```sh
# 更新源
apt-get update
# 安装 (我的wls 是 Ubuntu)
apt-get install python3
# 验证
python3 --version


```

升级

https://www.cnblogs.com/dotnetcrazy/p/9360831.html

http://npm.taobao.org/mirrors Python 压缩包镜像下载


```sh
wget http://npm.taobao.org/mirrors/python/3.9.4/Python-3.9.4.tgz
tar -xzvf Python-3.9.4.tgz
# 设置一下配置文件
cd Pythonxxx
./configure prefix=/usr/local/python3.7
# centos
# （yum安装没有apt安装方便）
make && make install
# 设置软链接：
ln -s /usr/local/python3/bin/python3 /usr/bin/python3



```

## vscode 环境配置


[wsl 中使用 vscode](https://code.visualstudio.com/docs/remote/wsl#_getting-started)

[wsl install python3.7, 修改快捷方式](https://blog.csdn.net/u014775723/article/details/85213793)

```sh
# install python
sudo apt-get install python3.7
# check py version
python3 --version
# install pip3
apt-get install python3-pip
# check pip version
pip3 --version

```

vscode 安装完 python 插件后, 会有 pylint (同类 flake8) 插件安装提示, 也可能没有 pylint 安装提示, 那么需要手动设置 `.vscode/settings.json`:

(pylint 比 flake8 更严格，问题描述也更精准，速度较后者慢一些。pylint 的严格不如说有些严苛了，经常啰里啰嗦报出一大串问题，根据场景不同，可能需要配置许多忽略项)

```json
"python.pythonPath": "/usr/bin/python",
  "python.linting.pylintEnabled": true,
  "python.linting.enabled": true
```

autopep8 格式化代码库, vscode 会自动提示 (同类是 black, yapf)

Coverage 有多种向你报告测试覆盖率的方式，包括将结果输出到控制台或 HTML 页面，并提示哪些行号没有覆盖到。你可以设置配置文件以自定义 Coverage 检查的内容并使其更便于运行

## 设置国内pip源

```
sudo vim ~/.pip/pip.conf  

[global] 
index-url = https://pypi.tuna.tsinghua.edu.cn/simple
[install]
trusted-host = https://pypi.tuna.tsinghua.edu.cn  # trusted-host 此参数是为了避免麻烦，否则使用的时候可能会提示不受信任

```

or

https://mirrors.tuna.tsinghua.edu.cn/help/pypi/


```
阿里云 http://mirrors.aliyun.com/pypi/simple/

中国科技大学 https://pypi.mirrors.ustc.edu.cn/simple/

豆瓣(douban) http://pypi.douban.com/simple/ 清华大学

https://pypi.tuna.tsinghua.edu.cn/simple/ 中国科学技术大学

http://pypi.mirrors.ustc.edu.cn/simple/

```


## 解释器

CPython (默认)

PyPy, 采用 JIT 技术，对 Python 代码进行动态编译, PyPy 和 CPython 有一些是不同的，这就导致相同的 Python 代码在两种解释器下执行可能会有不同的结果

Jython, 直接把 Python 代码编译成 Java 字节码执行

IronPython, 把 Python 代码编译成.Net 的字节码。

如果要和 Java 或.Net 平台交互，最好的办法不是用 Jython 或 IronPython，而是通过网络调用来交互，确保各程序之间的独立性。


# python tricks 坑

## 函数的默认参数

```python
# 若函数有默认参数, 要小心这个坑
# 在 Python 中, 默认参数表达式, 那只会被求值一次, 无论被 call 多少次, 都会使用这同个值的引用

class Person():
    def __init__(self, name: str, items: list[str]=[]):
        self.name = name
        self.items = items

per1 = Person('her')
per2 = Person('me')

per1.items.append('aa')
per2.items.append('bb')
print(per1.items) # ['aa', 'bb']    ??



# 如何修复:
# 默认值不要给母体表达式, 给个 none, 然后根据情况手动赋值
class Person():
    def __init__(self, name: str, items: list[str]=None):
        self.name = name
        self.items = [] if items is None else items
```


## 创建生成器同时存在条件过滤

```python


source_list = [0, 1, 2]
white_list = [0, 1]
# 创建生成器时, source_list 相当于传的一个数据副本进入生成器的构造函数的, 取值在传入的一瞬间就被固定了
# 而 white_list 是在构造函数内部使用的一个全局变量, 取值会实时变化
g = (i for i in source_list if i in white_list)

# so 此处即使 source 被改变了, 也不影生成器输出
source_list = [3]  
print(list(g))  # [0, 1]

# 由于生成器内部的 white_list 实时变化, 所以会影响生成器输出
white_list = [3]
prit(list(g)) # []





```

## 浮点数无法被精确计算

```python
a = 0.1 + 0.2
b = 0.3
print( a == b) # false
# 如何比较?
print(abs(a - b) <= 0.0001) #true

#  1e50 默认会转成 float, 10**50 会被当成 big integer
# float 是不精确的, 而 integer 肯定是精确的, 所以不等
print(1e50 == 10 ** 50) # false

print(1e500) # inf  表示无穷

import math
print(math.isinf(1e500)) # true
print(math.isnan(1e500 / 1e500)) # true
```

## 递归调用无法保证调用的是自身

```python

def fib(n):
    if n < 2:
        return 1
    return fib(n - 1) + fib(n - 2)

print(fib(5)) # 8 正常

def g(n):
    return 0
f = fib
fib = g  # fib 被改变了, 递归调用里, 掉的 fib 变成 g 函数了
print(f(5))  # 0   ??




# 如何修复
# 将递归逻辑封装成闭包, 外部无法修改这段逻辑
def fib(n):
    def _fib(x):
        if x < 2:
            return 1
        return _fib(x - 1) + _fib(x - 2)
    return _fib(n)

```


# 语法

## 输入输出 打印 main魔法变量

```py
#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# 以上两行表示python 解释器版本；以utf-8编码

# 模块的文档注释
' a test module '

__author__ = 'xiaoyu'


def hello_print():
    '''方法注释
    可以通过 hello_print.__doc__ 获取, 或者 help(hello_print) 获取文档字符串
    '''
    print("Hello world!")
    print("aa", "bb", "ccc")  # 类似

    # 间隔
    print(1, 2, 3, sep="   ")  # 1   2   3
    # 不换行
    print('hello', end='')
    print('没换行')  # hello没换行

    # 命令行输入
    # name = input('please enter your name: ')
    # print(name)


# 
# 命令行import方式调 本文件中的方法, 将不进入if判断，此时通过 main.xxx() 调用
# 如果直接 python main.py, 则进入 if
if __name__ == "__main__":
    hello_print()

```


## 基本数据类型

### 字符串 

#### 多行 不可变 比较

```py
# 字符串
    a='a'
    b="b"
    c="I'm xy."
    d='I\'m \"OK\"!'
    # r'' 形式的默认不转义
    e=r'\\\t\\'
    f='''多行内容'''
    g = f'''xx{xxx_var}''' # 格式化

    ss = 'abcde'
    s1 = ss[0]  # a

# 遍历
for s in 'abcd':
    print(s)


# str 是不可变对象
    # 不可变对象不可修改，一旦修改会返回一个新的对象, 也就是 id(a) 的地址不同了
    # >>> a = 'abc'
    # >>> a.replace('a', 'A')
    # 'Abc'
    # >>> a
    # 'abc'


# 比较字符串是否相同 使用 ==, 这点和 java 不同
# is, is not 对比的是两个变量的内存地址
# ==,!= 对比的是两个变量的值
if 'ab' == 'ab':   # true
    print('ab == ab')


```


#### 字符编码

```py
 ### 编码处理 字符处理
    #
    # 字符
    # 字符编码
    # ord:把字符串转换为ASCII    bin:把字符串转换成二进制
    # oct:把字符串转换成八进制    hex:把字符串转换成16进制
    #  chr: 吧ascii编码转换为字符串
    ord('A')
    #65
    ord('中')
    #20013
    chr(66)
    #'B'
    chr(25991)
    #'文'
    #>>> 'u4e2du6587'
    #'中文'

    s1 = u'哈'
    type(s) # 则会得到<type ‘unicode’>，也就是在字符前面加u就表明这是一个unicode对象，这个字会以unicode格式存在于内存中
    # 如果不加u，表明这仅仅是一个使用某种编码的字符串，编码格式取决于python对源码文件编码的识别，如 # -*- coding: utf-8 -*-
    # https://www.cnblogs.com/yyxayz/p/4044528.html


    # 字节
    # 如果要在网络上传输，或者保存到磁盘上，就需要把str变为以字节为单位的bytes。
    # Python对bytes类型的数据用带b前缀的单引号或双引号表示：
    x = b'ABC'
    print(b"hello...")

    'ABC'.encode('ascii')
    # b'ABC'
    b'ABC'.decode('ascii')
    # 'ABC'

    '中文'.encode('utf-8')
    # b'xe4xb8xadxe6x96x87'
    b'xe4xb8xadxe6x96x87'.decode('utf-8')
    # '中文'

  

    
    len('ABC')
    # 3
    len('中文')
    # 2
```

#### 格式化

```py
# 格式化 占位符
    #
    # %s表示用字符串替换，%d表示用整数替换，有几个%?占位符，后面就跟几个变量或者值，顺序要对应好。如果只有一个%?，括号可以省略
    # 如果你不太确定应该用什么，%s永远起作用，它会把任何数据类型转换为字符串
    print('Hi, %s, you have $%d.' % ('Michael', 1000000))
    # 'Hi, Michael, you have $1000000.'
    #
    print("{} {}".format("hello", "world"))   # 不设置指定位置，按默认顺序
    print("{0} {1}".format("hello", "world"))  # 设置指定位置
    print('hello {name}'.format(name='xiaoyu'))
    # 通过字典设置参数
    site = {"name": "xi", "url": "xiaoyureed.github.io"}
    print("网站名：{name}, 地址 {url}".format(**site))
    # 通过列表索引设置参数
    my_list = ['hello', 'world']
    print("网站名：{0[0]}, 地址 {0[1]}".format(my_list))  # "0" 是必须的
    # 传入一个对象 
    # my_value = {"value": "hello"}
    # print('value 为: {0.value}'.format(my_value))  # "0" 是可选的, my_value 对象需要有 value 属性

    # 格式化数字
    print("{:.2f}".format(3.1415926))  # 3.14


    print('=' * 40)  # 打印 40 个'='
```

#### 字符串处理

```py

 #
    # 字符串处理方法
    #
    #

    len(b'ABC')  # 3
    len(b'xe4xb8xadxe6x96x87')  # 6
    len('中文'.encode('utf-8'))
    # 6

    # count(xxx) 某个元素出现次数
    # 计算行数
    myString = '''line1
sf
sdfsf
sdfs
    '''
    print(myString)
    c = myString.count("\n")+(not myString.endswith("\n"))
    print(c)  # 5
    # or
    c1 = myString.count("\n")+[1, 0][myString.endswith("\n")]
    print(c1)  # 5



# 方便的修改字符串
str_list = list('abcde') # [a b c d e]
res = ''.join(str_list)

# 判断字符是否为空
s = 'ab'
if s:      # true
    pass



    # 查找
    find = myString.find("sf")
    print("find = ", find)  # 6, 从 0 开始, 第 6 个字符
    find1 = myString.find("220")
    print("find1 =  ", find1)  # -1
    
    if 'world' in string:
        xxx

    # 切割为 list
    string = "hello\nworld xxx yyy zzz"
    print(string.split("\n"))  # ['hello', 'world xxx yyy zzz']
    # 以 sep 为分隔符切片 string，如果 maxsplit 有指定值，则最多切割多少次 (必须带上 maxsplit)
    print(string.split(sep='o', maxsplit=1))  # ['hell', '\nworld xxx yyy zzz']
    #按照行('\r', '\r\n', \n')分隔，返回一个包含各行作为元素的列表，如
    # 果参数 keepends 为 False，不包含换行符，如果为 True，则保留换行符。默认 false
    print(string.splitlines(True)) # ['hello\n', 'world xxx yyy zzz']
    print(string.splitlines(False)) # ['hello', 'world xxx yyy zzz']
    print(string.splitlines()) # ['hello', 'world xxx yyy zzz']


    # 切割成 tuple
    #
    #有点像 find()和 split()的结合体,从 str 出现的第一个位置起,把 字 符 串 string 分
    #成 一 个 3 元 素 的 元 组 (string_pre_str,str,string_post_str),如
    # 果 string 中不包含str 则 string_pre_str == string.
    print(string.partition('w') ) # ('hello\n', 'w', 'orld xxx yyy zzz')

    # string.rpartition(str) #类似于 partition()函数,不过是从右边开始查找


    # # 拼接
    print('\n'.join(['aaa', 'bbb', 'ccc']))

    # # 将字符串转为 字符列表
    print(list("12345")) # ['1', '2', '3', '4', '5']

    # # 
    #
    #  常用内建函数
    #
    #
    # # strip() 
    # 用于移除字符串头尾指定的字符（默认为空格或换行符）或字符序列
    str = "00000003210Runoob01230000000"
    # 移除指定字符
    print(str.strip( '0' ))  # 3210Runoob0123
    str2 = "   Runoob      "   # Runoob
    # 默认是移除空格
    print(str2.strip())
    str = "123abcrunoob321"
    # 指定的字符没有顺序之分
    print (str.strip( '12' ))  # 3abcrunoob3

    string = "   hello    "
    string = string.lstrip()#截掉 string 左边的空格
    string = string.rstrip()#删除 string 字符串末尾的空格.
    print("string = " + string)


    print(string.capitalize()) # 把字符串的第一个字符大写
    # string.lower()#转换 string 中所有大写字符为小写.
    # string.upper()#转换 string 中的小写字母为大写
    # string.swapcase()#翻转 string 中的大小写
    # string.title()#返回"标题化"的 string,就是说所有单词都是以大写开始，其余字母均为小写(见 istitle())

    # string.center(width) #返回一个原字符串居中,并使用空格填充至长度 width 的新字符串
    # string.ljust(width)#返回一个原字符串左对齐,并使用空格填充至长度 width 的新字符串
    # string.rjust(width)#返回一个原字符串右对齐,并使用空格填充至长度 width 的新字符串
    # string.zfill(width)#返回长度为 width 的字符串，原字符串 string 右对齐，前面填充0

    # 返回 str 在 string 里面出现的次数，如果 beg 或者 end 指定则返回指定范围内 str 出现的次数
    string = "xsdf aa sfefaafsef"
    print(string.count("aa")) # 2
    print(string.count("aa", 7, len(string))) # 1

    #以 encoding 指定的编码格式解码 string，如果出错默认报一个 ValueError 的 异 常 ， 
    # 除非 errors 指 定 的 是 'ignore' 或 者'replace'
    # string.decode(encoding='UTF-8', errors='strict') 
    # string.encode(encoding='UTF-8', errors='strict')


    # string.endswith(obj, beg=0, end=len(string))#检查字符串是否以 obj 结束，如果beg 或者 end 指定则检查指定的范围内是否以 obj 结束，如果是，返回 True,否则返回 False.
    # string.startswith(obj, beg=0,end=len(string))#检查字符串是否是以 obj 开头，是则返回 True，否则返回 False。如果beg 和 end 指定值，则在指定范围内检查.

    # string.expandtabs(tabsize=8) #把字符串 string 中的 tab 符号转为空格，tab 符号默认的空格数是 8。

    # string.find(str, beg=0, end=len(string)) #检测 str 是否包含在 string 中，如果 beg 和 end 指定范围，则检查是否包含在指定范围内，如果是返回开始的索引值，否则返回-1
    # string.rfind(str, beg=0,end=len(string) )#类似于 find()函数，不过是从右边开始查找.

    # string.index(str, beg=0, end=len(string)) #跟find()方法一样，只不过如果str不在 string中会报一个异常.
    # string.rindex( str, beg=0,end=len(string))#类似于 index()，不过是从右边开始.

    # string.isalnum()#如果 string 至少有一个字符并且所有字符都是字母或数字则返回 True,否则返回 False
    # string.isalpha() #如果 string 至少有一个字符并且所有字符都是字母则返回 True,否则返回 False

    # string.isdecimal()#如果 string 只包含十进制数字则返回 True 否则返回 False.
    # string.isdigit()# 如果 string 只包含数字则返回 True 否则返回 False.
    # string.isnumeric()#如果 string 中只包含数字字符，则返回 True，否则返回 False

    # string.islower()#如果 string 中包含至少一个区分大小写的字符，并且所有这些(区分大小写的)字符都是小写，则返回 True，否则返回 False
    # string.isupper()#如果 string 中包含至少一个区分大小写的字符，并且所有这些(区分大小写的)字符都是大写，则返回 True，否则返回 False

    # string.isspace()#如果 string 中只包含空格，则返回 True，否则返回 False.

    # string.istitle() #如果 string 是标题化的(见 title())则返回 True，否则返回 False


    # string.join(seq)#以 string 作为分隔符，将 seq 中所有的元素(的字符串表示)合并为一个新的字符串


    # string.maketrans(intab, outtab]) #maketrans() 方法用于创建字符映射的转换表，对于接受两个参数的最简单的调用方式，第一个参数是字符串，表示需要转换的字符，第二个参数也是字符串表示转换的目标。

    # max(str)#返回字符串 str 中最大的字母。
    # min(str)#返回字符串 str 中最小的字母。

    # string.replace(str1, str2,  num=string.count(str1)) #把 string 中的 str1 替换成 str2,如果 num 指定，则替换不超过 num 次.


    # string.translate(str, del="")#根据 str 给出的表(包含 256 个字符)转换 string 的字符, 要过滤掉的字符放到 del 参数中
```

### 字节数组 bytes bytearray

```python

byte_arr = bytes([1, 2, 3])  # 不可变

byte_arr2 = bytearray((1, 2,3)) # 可变， 内存动态分配

# 转换
byte_arr3 = bytearray(byte_arr)
byte_arr4 = bytes(byte_arr3)
```


### 数字

```py
# 整数
    c=2
    a=0xff00  # 16进制

    # 浮点数
    #
    # 除法计算结果是浮点数，即使是两个整数恰好整除，结果也是浮点数
    a=1.24
    b=3.33
    c=1.23e9  # 1.23x10的9次方
    d=1.2e-5  # 0.000012

    
    # 特有的运算符
    # 2**3 == 8 次幂
    # 9 // 2 == 4 除法取整, 称为地板除，两个整数的除法仍然是整数, 只取结果的整数部分

    # 转换
    age_str="11"
    age_num=int(age_str)
    print(age_num)

    # 判断是否可以转换为整型
    a="1,2,3"
    print(a.isdecimal())  # False
    print(a.isdigit())  # False
    print("九".isnumeric())  # True

```

### 布尔值 空值


```py
# 布尔值
    # 在 Python 是是作为 integer 的一个子类型
        True 对应 1
        False 对应 0
    # 只有True、False两种值
    # 可以用 and ,or, not 运算

    # 空值
    # 用None表示。None不能理解为0

assert True == 1     #true
assert True == 1.0    #true
assert 1 == 1.0      #true
assert 1 == 1.0 == True   #true

assert True == [1, 2]
assert False == []

assert True == 'a'
assert False == ''

assert False == {}
assert True == {'a': None}

assert False == ()
assert True == (1,)

assert True == XxxException


def he():
    pass
assert True == he

# 核心准则是: 只要变量不为 None, 就是布尔值的 true
```

### 数组 array

```python

arr = array.array('f', [11.11, 2.00, 0.156]) # 'f' 指定元素类型， 不可添加其他类型元素
print(arr)
for a in arr:
    print(a)

```

### 集合


#### list 有序可变 

```py
 #
    #
    ##### List 可变有序列表
    #
    #
    #
    classmates = ['Michael', 'Bob', 'Tracy']
    print("classmates = ", classmates) # ['Michael', 'Bob', 'Tracy']
    print (len(classmates))

    # 获取
    # # 获取第一个
    classmates[0]
    # 'Michael'
    # # 最后一个元素
    classmates[-1] 
    # or
    classmates[len(classmates) - 1]
    # 'Tracy'
    # # 以此类推，可以获取倒数第2个、倒数第3个：
    classmates[-2]
    # 'Bob'

    # 查找
    # index() 函数用于从列表中找出某个值第一个匹配项的索引位置
        
    # # 添加到末尾
    classmates.append('Adam')
    # >>> classmates ['Michael', 'Bob', 'Tracy', 'Adam']
    # or
    classmates += ['abc', 'def']
    # # 添加到指定位置
    classmates.insert(1, 'Jack')
    # >>> classmates ['Michael', 'Jack', 'Bob', 'Tracy', 'Adam']
    # # 删除末尾元素, 并返回
    classmates.pop()
    # 'Adam'
    # # 删除指定位置的元素
    # >>> classmates.pop(1)
    # 'Jack'

    # or
    # 删除最后一个元素
    del classmates[-1]
    # 删除下标为 0, 1, 2 的元素
    del classmates[:3]

    #
    # 带下标遍历
    # enumerate()可以将list变为索引-元素 tuple
    # for i, value in enumerate([1,2,'3', '4']):
    #     print(i, value)
    #


    # 判断对象是否能迭代
    # from collections import Iterable
    # if (isinstance("acb", Iterable)):
    #     print('ok!')

    # 判断两个 list 是否相等
    # 可转为 tuple 之后再比较
    @dataclass(frozen=True)
    class Person:
        name: str
        age: int
    lst1 = [Person('a', 11), Person('b', 11)]
    lst2 = [Person('a', 11), Person('b', 11)]
    tuple(lst1) == tuple(lst2)  # true

    #
    # 列表生成式
    #
    l = list(range(1,11))
    print(l)
    l1 = [x*x for x in l]
    print(l1)
    l2 = [x*x for x in l if x%2 ==0]
    print(l2)

    m = [x+y for x in 'abc' for y in 'ABC']
    print(m)
    import os
    d = [d for d in os.listdir('.')]
    print(d)
```

##### slices 切片 

```py
# slices  会生成新的列表 (包头不包尾)
    #
    #
    l = list(range(10))
    print(l)
    print(l[0:3]) # 0 1 2
    print(l[:3]) # 0 1 2
    print(l[-1]) # 9
    print(l[-1:])  # [9]
    print(l[-2:-1]) # [8]
    print(l[-2:]) # [8, 9]
    print(l)  # [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

    l2 = ['a', 'b', 'c', 'd']
    (ele1, ele2, remaining) = l2[0], l2[1], l2[2:] # 
    # 等价
        (ele1, ele2, *remaining) = l2
    ele1 # a
    ele2 # b
    remaining # [c, d]

    (e1, middle, e2) = l2[0], l2[1:-1], l2[-1]
    # 等价
        (e1, *middle, e2) = l2



```


#### tuple 有序不可变列表 

```py
 # Tuple 不可变有序列表
    #
    # 因为tuple不可变，所以代码更安全。如果可能，能用tuple代替list就尽量用tuple
    # 
    # 创建
    classmates = ('Michael', 'Bob', 'Tracy')

    # # 定义空
    t = ()

    # # 定义一个元素的tuple
    t = (1,)
      # 为什么这样规定?
    # 这是因为括号()既可以表示tuple，又可以表示数学公式中的小括号，这就产生了歧义.所以，只有1个元素的tuple定义时必须加一个逗号,，来消除歧义

    # # 可变的tuple
    # 若元素不是基本类型：（这种是可以修改的）
    t = ('a', 'b', ['A', 'B'])
    # >>> t[2][0] = 'X'
    # >>> t[2][1] = 'Y'
    # >>> t
    # ('a', 'b', ['X', 'Y'])



```

##### namedtuple() 创建带名字下标的元组


```python
# namedtuple是一个函数，它用来创建一个自定义的tuple对象，并且规定了tuple元素的个数，并可以用属性而不是索引来引用tuple的某个元素
# 提供了通过名称而不是索引访问字段的额外优势

# -*- coding: utf-8 -*-
# author: xiaoyu 775000738@qq.com 2021/6/11

from collections import namedtuple
from random import choice


def named_tuple_intro():

    # 快速构造一个类, 

    # 类名 People, 属性 name, age, like
    Car = namedtuple('Car', 'name, mileage')
    # or
    Person = namedtuple('Person', 'name age')
    # or
    Book = namedtuple('Book', ['name', 'price'])

    c = Car('car', 11.1)
    print(c[0], c.mileage) # car 11.1
    print(isinstance(c, Car))   # true 

    car_as_dict = c._asdict()
    print(car_as_dict) # {'name': 'car', 'mileage': 11.1}

    car_new = c._replace(name='car11')
    print(car_new._asdict()) # {'name': 'car11', 'mileage': 11.1}
    
    c.name = 'rain' # AttributeError: can't set attribute




# 读取 csv 文件
def read_csv():
    Person = namedtuple('Person', 'name, age, salary')
    for per in map(Person._make, csv.reader(open('/tmp/xx.csv', 'r'))):
        print(per.name, per.age, per.salary)





# 读取数据库数据

Person = namedtuple('Person', 'name, age, salary')
import sqlite3
conn = sqlite3.connect('/tmp/data.xx')
cur = conn.cursor()
cur.execute('select name, age, salary from tbl_person')
for per in map(Person._make, cur.fetchall()):
    print(per)
pass



def french_deck():
    """
    扑克游戏
    """
    Card = namedtuple('Card', ['rank', 'suit'])

    class FrenchDeck:
        # 点数
        ranks = [str(n) for n in range(2, 11) ] + list('JQKA')
        # 花色
        suits = '黑桃 方片 梅花 红桃'.split()

        def __init__(self):
            self._card = [Card(rank, suit) for suit in self.suits
                          for rank in self.ranks]

        def __len__(self):
            return len(self._card)

        # after this method defined, FrenchDeck will become a iterable obj
        def __getitem__(self, item_index):
            return self._card[item_index]

    deck = FrenchDeck()
    print(len(deck))
    # 第一张牌
    print(deck[0])
    # 最后一张牌
    print(deck[-1])
    cards = []
    for card in deck:
        cards.append(card)
    print(cards)
    reversed_cards = []
    for card in reversed(deck):
        reversed_cards.append(card)
    print(reversed_cards)

    # 从 iterable obj 中随机选取
    random_card = choice(deck)
    print(random_card)

    # 判断是否存在于集合中
    print(Card('Q', '方片') in deck)
    print(Card('Q', 'block') in deck)

    suit_values = dict(黑桃=3, 方片=2, 梅花=1, 红桃=0)
    print(suit_values)


if __name__ == '__main__':
    french_deck()

```

##### typeing.NamedTulple 命名的元组

```python

    from typing import NamedTuple
    class Person(NamedTuple):
        name: str
        age: int
        sal: float = 10000.01
        
        def __repr__(self):
            return f'Person {self.name} {self.age} {self.sal}'
    per = Person('rain', 11) 
    per_str = str(per) # Person rain 11 10000.01
    print(per_str) 
   
```

##### 元组解包

```python

    (name, age, sal) = ['Rain', 11, 10000.11]
    print(name, age, sal)
    
    def print_names(*names):
        print(type(names))
        for name in names:
            print(name)
    print_names('rain', 'Mary', 'Dany') # type: tuple      names 是一个元组， 有三个元素
    print_names(['rain', 'mary'])   # type: tuple , ['rain', 'mary'] ， names 是一个元组， 有一个元素， 这个元素是一个列表（列表有三个元素）

    tu1 = (1, 2,)
    tu2 = (2, 3)
    tu4 = (tu1, tu2, 100) #  # ((1, 2), (2, 3), 100)
    print(tu4)
    tu3 = (*tu1, *tu2, 100) # (1, 2, 2, 3, 100)
    print(tu3)





    Person = namedtuple('Person', 'name, age, salary')
    p = Person('rain', 1, 1000)
    (name, _, _) = p # rain
    print(name)
    (name, *_) = p
    print(name) # rain
    (name, _) = p # ValueError: too many values to unpack (expected 2)

    (*name_and_age, _) = p # ['rain', 1]
    print(name_and_age)
    
```

#### set 无序不可重复 

```py
  # Set 无序不可重复
    #
    #set 和 dict 的唯一区别仅在于没有存储对应的 value
    #
    # 要创建一个set，需要提供一个list作为输入集合：
    s = set([1, 2, 3])
    # {1, 2, 3}

    # or
    s = {1,2,3}

    # 空 set 不要用{}, 会误认为是定义字典
    s = set()

    # 推导式
    s = {x*x for x in range(4)}

    # # 重复元素在set中自动被过滤
    s = set([1, 1, 2, 2, 3, 3])
    # {1, 2, 3}

    # # 添加元素，重复添加无效
    s.add(4)
    # {1, 2, 3, 4}
    s.add(4)
    # {1, 2, 3, 4}

    # # 删除
    s.remove(4)
    # {1, 2, 3}

    # # 交集  O(n)
    s1 = set([1, 2, 3])
    s2 = set([2, 3, 4])
    s1 & s2
    # {2, 3}

    s1 | s2  # 并集     O(n)
    # {1, 2, 3, 4}

    # 差集
    s1 - s2

    # 是否存在 O(1)
    assert 1 in {1, 2, 3}   # true


```

##### frosenset 不可变set

```python

s  = fronsenset([1, 2, 3])
fronsenset((1, 2, 3,))

frosenset({'a': 1, 'b': 2}) # {'a', 'b'}

```

#### deque 双端队列 栈

```python
# Python 标准库集合框架中的 deque 类实现了一个线程安全的双端队列，支持在 O(1) 时间内从两端插入和删除。考虑到双端操作，您可以将这些数据结构用作队列和堆栈。在内部，Python 中的双端队列被实现为双向链表，在插入和删除操作中保持一致的性能，但在随机访问堆栈中的中间元素的 O(n) 性能方面表现不佳

from collections import  deque

    # deque是为了高效实现插入和删除操作的双向列表
    #  是为了弥补 list  插入和删除效率很低 的缺点
    q = deque(['a', 'b', 'c'])
    q.append('d')
    q.appendleft('e')
    print(q)  # deque(['e', 'a', 'b', 'c', 'd'])

    q.pop()
    q.popleft()

    # 固定窗口旋转，   正数则数字圆盘往右转
    d = deque([a, b, c])
    d.rotate(1)     # [c, a, b]
    m = deque([a, b, c])
    m.rotate(-1)  # 负数往左转     [b, c, a]


def tail(filename, n):
    """return the last n lines of a file"""
    with open(filename, 'r') as f:
        return deque(f, n)  # 原理是将 f 迭代出的每行入栈， 会保留最后 n 行



# 轮询
# roundrobin('abc', 'd', 'ef') --> [a d e b d f c]
def roundrobin(*iterables):
    iters = deque(map(iter, iterables)) # 将参数转为 iter 队列
    while iters:
        try:
            while True:
                yield next(iters[0])
                iters.rotate(-1)
        except StopException:
            iters.popleft()

```

#### queue.Queue 阻塞队列

#### queue.LifoQueue 阻塞栈

#### multiprocessing.Queue 跨进程阻塞队列

```python

# multiprocessing 是一个支持生成进程的包
# 通过使用子进程而不是线程来有效地回避全局解释器锁（ 绕开 GIL）。因此，multiprocessing模块允许开发人员充分利用给定机器上的多个处理器。它可以在 Unix/Linux 和 Windows 上运行。

# multiprocessing.Queue  跨进程共享数据
```

#### queue.PriorityQueue heapq 优先级队列

```python
# heapq 包提供了堆优先级的算法
import heapq as hq
items = []
hq.heappush(items, (2, 'a'))
hq.heappush(items, (1, 'b'))
hq.heappush(items, (4, 'c'))
while items:
    it = hq.heappop(items)
    print(it)
# (1, 'b')
# (2, 'a')
# (4, 'c')


from queue import PriorityQueue

pq = PriorityQueue()
pq.put(2, 'a') # 也可以单纯 put 数字， 那么pop 的顺序是按照 index， 小的先 pop 出来
pq.put(1, 'b')
while not pq.empty():
    it = pq.get()
    print(it)


```

###  字典 dict

#### 基本 dict

```py
# Dict 键值存储
    #
    # 和 list 比较，dict 有以下几个特点：
    #
    # 1.  查找和插入的速度极快，不会随着 key 的增加而变慢；
    # 2.  需要占用大量的内存，内存浪费多。
    # 3.  Key 是不可变对象 (如字符串， 数组， 元组)
    #     需要我们自己在代码中保证 , 因为dict根据key来计算value的存储位置，如果每次计算相同的key得出的结果不同，那dict内部就完全混乱了
    #     在Python中，字符串、整数等都是不可变的，因此，可以放心地作为key。而list是可变的，就不能作为key
    # 
    #   如果需要自定义对象作为 key, 需要保证这个类的两个对象的 __eq__ 不同
# 
    #
    # 而 list 相反：
    # 1.  查找和插入的时间随着元素的增加而增加；
    # 2.  占用空间小，浪费内存很少。
    # 所以，dict 是用空间来换取时间的一种方法。
    #
    # 创建
    d = {'Michael': 95, 'Bob': 75, 'Tracy': 85}

    # 获取值，如果不存在会报错
    d['Michael'] # 95
    # 或者通过get方法，如果不存在，不会报错，只会返回None
    d.get('Thomas')
    d.get('Thomas', -1)
    # -1

    # # 添加/设置键值对
    d['Adam'] = 67
    d['Adam']
    # 67

    # 添加相同的键，会冲掉已存在的
    d['Tracy'] = 90
    d['Tracy']
    # 90

    # 设置值（带默认）
    d.setdefault('a', 0)  # 若 ‘a’ key不存在， 则设置value 为0

    # 添加/更新
    d.update('aa'=11, 'bb'=22)

    # 键是否存在
    'Thomas' in d
    # False

    
    # # 删除
    d.pop('Bob')
    # 75

    d
    # {'Michael': 95, 'Tracy': 85}


    #
    # 迭代 遍历 dict
    #
    d = {'a': 1, 'b': 2, 'c': 3}
    for key in d:
        print(key)
    for value in d.values():
        print(value)
    # 同时迭代key和value，这种太麻烦，不推荐
    for key in d:
        print(key + ': ' + str(d.get(key)))

    for key,value in d.items():
        print(key, str(value))
    
```

#### 字典解包

```python

data = {
    'arr': [{
        'name': 'aa',
        'age': 12,
    }, {
        'name': 'bb',
        'age': 11,
    }]
}
class Person():
    def __init__(self, name, age):
        self.name = name
        self.age = age

persons = []
for ele in data['arr']:
    persons.appand(Person(**ele)) # 这里是将字典解包为 key=value 的形式

```

#### 字典格式化

```python

print(m)   # 一行中打印， 无缩进，不好看

import json
json_str_with_indent = json.dumps(m, indent=4, sort_keys=False, ensure_ascii=False)
print(json_str_with_indent)


install pyyaml
import yaml
string = yaml.dump(m, allow_unicode=True)

```

#### defaultdict 默认值dict

```python

# defaultdict 是 dict 子类，
    # 使用dict时，如果引用的Key不存在，就会抛出KeyError。如果希望key不存在时，返回一个默认值，就可以用defaultdict


from collections import defaultdict

di = defaultdict(list) # 这里 list 是传入的一个函数(这个函数返回一个函数 / lambda 表达式)， 若某个键不存在， 这调用这个函数作为默认值
di['missing_key'].append('a')
di['missing_key'].append('b')
di['missing_key'].append(123)
di['missing_key']
# ['a', 'b', 123]

# 统计字符个数
s = 'abcaab'
count_mapping = defaultdict(int)
for si in s:
    count_mapping[si] += 1


# eg: 缺失提示
def missing_prompt(value):
    return lambda: value
d = defaultdict(missing_prompt('<missing>'))
d['unknown'] # 'missing'
```

#### OrderedDict 字典排序

```python

py2 字典不保证有序，
py3 字典默认按照插入顺序排序

 可通过使用 OrderedDict 来保证有序


    d = {'a': 100, 'c': 200, 'b': 300}
    # 如何按照 key 排序
    d2 = sorted(d)  # 等价     d2 = sorted(d.keys())
    print(d2) # ['a', 'b', 'c']

    # 逆序
    sorted(d, reverse=True)

    d3 = sorted(d.items()) # 元组排序首先比较第一个元素， 第一个元素相同再比较第二个元素
    print(d3) # [('a', 100), ('b', 300), ('c', 200)]
    
    # 按照 value 排序
    d4 = sorted(d.items(), key=lambda x: x[1]) 
    # 等价
    d4 =sorted(d.items(), key=operator.itemgetter(1))  
    print(d4) # [('a', 100), ('c', 200), ('b', 300)]
    



from collections import OrderedDict

# 创建一个有序字典
od = OrderedDict()
od['first'] = 1
od['second'] = 2
od['third'] = 3

print(od)  # OrderedDict([('first', 1), ('second', 2), ('third', 3)])

# 遍历有序字典
for key, value in od.items():
    print(key, value)


od.move_to_end('banana')  # 将 'banana' 移动到末尾
od.move_to_end('orange', last=False)  # 将 'orange' 移动到开头

od.popitem()  # 默认移除并返回最后一个键值对 ('orange', 2)， 类比栈结构
od.popitem(last=False)  # 移除并返回第一个键值对 ('banana', 3) ， 类比队列结构
```

#### 合并多个字典

##### 内置方法合并

```python

# 将后来的 map 覆盖到前面的 map 里
m.update(m1).update(m2)


m3 = dict(m1, **m2) # 通过**解包一次合并两个 （解包符号速度快，特别是大型字典，Python 中对**有优化）

m4 = {           # 一次合并多个
    **m1,
    **m2,
    **m3
}
```

##### ChainMap 提供动态视图 首个 dict 可修改


```python
# ChainMap 是处理多层次映射和优先级合并的强大工具，能够在不改变原始数据结构的情况下提供动态视图。

# 更新操作：ChainMap 只会影响第一个字典，即链中第一个映射。
# 对于查找操作：ChainMap 会从左到右依次查找，直到找到匹配的键为止。若还是没找到， 会 KeyError


from collections import ChainMap

# 创建两个字典
dict1 = {'a': 1, 'b': 2}
dict2 = {'b': 3, 'c': 4}

# 使用 ChainMap 将它们合并
chain_map = ChainMap(dict1, dict2)
print(chain_map)  # ChainMap({'a': 1, 'b': 2}, {'b': 3, 'c': 4})

# 访问元素
print(chain_map['a'])  # 1
print(chain_map['b'])  # 2  # 从第一个字典中找到 'b'
print(chain_map['c'])  # 4  # 从第二个字典中找到 'c'

# 更新
chain_map['b'] = 10
# 删除操作
del chain_map['a']


# 新的子映射
#  new_child 方法来创建一个新的子映射，它将一个新的字典添加到现有的链中。这对于需要临时覆盖某些值或提供局部变量非常有用。
# 如 配置管理，合并多个配置文件或配置源。
new_chain = chain_map.new_child({'a': 42, 'e': 99})
print(new_chain)  # ChainMap({'a': 42, 'e': 99}, {'b': 10, 'd': 5}, {'b': 3, 'c': 4})

print(new_chain['a'])  # 42
print(new_chain['b'])  # 10
print(new_chain['e'])  # 99

```

#### MappingProxyType 只读视图

```python
from types import MappingProxyType
# 创建一个字典
original_dict = {'a': 1, 'b': 2}
# 创建字典的只读视图
read_only_dict = MappingProxyType(original_dict)
# 访问元素
print(read_only_dict['a'])  # 1

# 尝试修改元素会引发 TypeError
# 只是浅拷贝了原来的字典，所以如果值是引用的话，修改值的内容也是会影响到源的！
# 若真正实现不可变  --> frozendict
try:
    read_only_dict['a'] = 3
except TypeError as e:
    print(e)  # 'mappingproxy' object does not support item assignment


# 如果修改原始字典，MappingProxyType 的视图也会随之更新 (读写分离)
# 修改原始字典
original_dict['a'] = 3
print(read_only_dict['a'])  # 3
# 添加新元素
original_dict['c'] = 4
print(read_only_dict['c'])  # 4

```


#### Counter 通过字典表示列表

```python
    c = Counter('aabbbc')
    print(list(c.elements())) # ['a', 'a', 'b', 'b', 'b', 'c']

    c = Counter({'a': 2, 'b': 1})
    print(list(c.elements())) # [a a b]
    len(c)  # 2
    sum(c.values()) # 3

    c = Counter(a=2, b=1)
    print(list(c.elements())) # ['a', 'a', 'b']
```


#### dict 场景

##### 模拟 switch case

```python

def calc(v1, v2, op_flag):
    ops = {
        '+': operator.add,
        '-': operator.sub,
        '*': operator.mul,
        '/': operator.truediv,
    }
    return ops[op_flag](v1, v2)

```

#### dict 字典推导式

```python
@dataclass
class Person:
    name: str
    age: int

users = [Person('a', 11), Person('b', 22)]
# 可以类比列表推导式
age_mapping = { user.name: user.age
    for user in users if user.age != 0
}
```

### 列表推导式

```python

l = [x*x for x in range(3)] # [0, 1, 4]

def read_file(path: str) -> [str]:
    with open(path, 'r') as f:
        lines = [for line in f if line.startswith('<<')]
    return lines

# 省内存
def read_file2(path: str) -> Generator[str]:
    with open(path, 'r') as f:
        for line in f:
            if line.startswith('<<'):
                yield line

```

### 生成器 generator

```py
# 生成器
和 推导式区别： 推导式会一下将列表内容生成出来， 占用内存高
              生成器在 next(gen) 的时候才会生成出一个元素 （即‘惰性计算’特性）， 节省内存 （读取大文件的时候可用这个方式）


    #
    # 把一个列表生成式的[]改成()，就创建了一个generator
    # 要获取 generator 内的值， 需 next(gen) , 或者 for i in xxx_gen
    gen = (x for x in range(3))
    i = next(gen) # 0
    j = next(gen) # 1
    k = next(gen) # 2
    # m = next(gen)   # error : StopIteration
    print(i, j, k)
    
    #
    # 或者 , 如果一个函数定义中包含yield关键字，那么这个函数就不再是一个普通函数，而是一个generator
    def get_gen():
        for i in range(2):
            yield i
        # 拿不到generator的return语句的返回值。如果想要拿到返回值，必须捕获StopIteration错误，返回值包含在StopIteration的value中
        return 'done' 
    gen1 = get_gen()
    g1 = next(gen1) # 0
    g2 = next(gen1) # 1
    print(g1, g2)
    try:
        r = next(gen1)
    except Exception as e:
        print(str(e)) # 'done'
    #
    # 函数区别:generator和函数的执行流程不一样。函数是顺序执行，
    # 遇到return语句或者最后一行函数语句就返回。而变成
    # generator的函数，在每次调用next()的时候执行(如 next(g))，遇
    # 到yield语句返回，再次执行时从上次返回的yield语句处继续执行
    #
    
    


    # 斐波拉契数列
    def fib(max):
        n, a, b = 0, 0, 1
        while n < max:
            yield b
            a, b = b, a + b
            n = n + 1
        return 'done' 
    for n in fib(6):
        print(n)

```

### 迭代器


```py
在用 for..in.. 迭代对象时，解释器先检查被迭代目标是否有 __iter__ or __next__ 方法
如果对象没有实现 __iter__ __next__ 迭代器协议，Python的解释器就会去寻找__getitem__ , __len__ 来迭代对象，
如果连__getitem__, __len__ 都没有定义，这解释器就会报对象不是迭代器的错误

__iter__  内存消耗少, 依次读取到内存, 但是随机访问效率差
__getitem__  先用内存布置好数据, 内存消耗大, 但随机访问效率高




实现了魔术方法 __iter__, __next__, 即为 迭代器, 若仅仅实现了 iter (iter 返回一个对象, 该对象实现了 __next__), 只能视为 可迭代对象(iterable). 
若为 iterator, 一定为 iterable, 反之不一定

实现了魔术方法 `__getitem__`, 即为 可迭代对象



区别:  当为索引行数据类型（如：list, tuple,str)时，可以替换，当字段为hash型类型（如dict,set)时，不能替换







import datetime
class DateRange():
    def __init__(self, start, end):
    	self.start = start
        self.end = end
        self._cur = start

    def __iter__(self):
        return self
    
    def __next__(self):
        if self._cur >= self.end:
            raise StopIteration
        
        res = self._cur

        self._cur += datetime.timedelta(days=1)
        
        return res
    




class DateRange():
    def __init__(self, start, end):   
    	
        self.start = start
        self.end = end
        self._all = self._get_all()

    def _get_all(self):
        res = []
        
        cur = self.start
        while cur < self.end:
            res.append(cur)
            cur += datetime.timedelta(days=1)
        
        return res
    
    def __len__(self):
        return len(self._all)
    
    def __getitem__(self, index):
        return self._all[index]

```




### 二进制结构封包解包

```python
from struct import Struct
my_struct = Struct('i?f') # i - int, ? - bool, f - float
data = my_struct.pack(11, False, 11.11)
print(data) # b'f\x00\xx....'  , 此时， data 可以被发送出去了
un_data = my_struct.unpack(data)
print(un_data) # (11, False, 11.11)
```


### SimpleNamespace 创建简单类

```python
from types import SimpleNamespace

sn = SimpleNamespace(a=1, b=[1, 2], c(3,))
sn1 = SimpleNamespace(a=1, b=[1, 2], c(3,))
assert sn == sn1   #true        通过内部值进行比较的

class Person(SimpleNamespace):
    # 重写
    def __repr__(self):
        xxxxx

```


### container 容器

```python

# Python 中实现 __contains__ 魔术方法并返回真值的对象称为容器。它通常与 in 运算符一起使用以检查成员是否存在
# Python内建的容器: tuple、list、set、dict等
# 测试一个对象是否是一个容器时，应该使用 isinstance(x, collections.abc.Container) 。


```


## 作用域

```python
# 包级作用域, 包被导入则自动执行
hehe=6

def var_demo():
    # 作用域名
    # 函数定义了本地作用域，而模块定义的是全局作用域, 如果想要在函数内定义/修改全局作用域，需要加上global修饰符
    global hehe
    print(hehe) # 6
    hehe=3 # 修改
    pass


```


## 条件循环

```py
def condition_loop():
    """
    条件 循环
    """
    names = ['Michael', 'Bob', 'Tracy']
    for name in names:
        print(name)

    fruits = ['banana', 'apple',  'mango']
    for index in range(len(fruits)):
        print('当前水果 :', fruits[index])

    count = 0
    while (count < 9):
        print ('The count is:', count)
        count = count + 1
```

## 比较判断

```py
# 在python中 None, False, 空字符串"", 0, 空列表[], 空字典{}, 空元组()都相当于False
# (ob1 is ob2) 等价于 (id(ob1) == id(ob2))

# 判空
if x is None
if x is not None


```

## 函数

### 内置函数

```python

next(xxx_generator)   # 调用一次生成器

sum_a = sum([1, 2])   # 3 对列表求和

map(), filter()
list_b = list(map(lambda x: x * 2, xxx_list))   # 建议用列表推导代替
list_a = list(filter(xxx_predicate, xxx_list))

all() 元素均为 true, any()
def exist_zero(iter: iterable) -> bool: # 判断是否存在 0 ， （0 即为 false）
    return not all(iter)

```

### 参数检查

```py
def function_demo():
    # 参数检查类型
    def my_abs(x):
        if not isinstance(x, (int, float)):
            raise TypeError('bad operand type')
        if x >= 0:
            return x
        else:
            return -x

    # * 检查参数有效性
    def person(name, age, **kw):
        if 'city' in kw:
            # 有city参数
            pass
        if 'job' in kw:
            # 有job参数
            pass
        print('name:', name, 'age:', age, 'other:', kw)

```

### 多种参数

```py

    # 参数顺序
    #
    #必选参数、默认参数、可变参数、命名关键字参数、关键字参数
    #
    # 定义
    # c 为默认参数
    # *args 为 可变参数, 个数可变, 函数内部自动组装为 tuple
    # **kw  关键字参数, 内部自动组装为一个 dict
    #
    # 所以，对于任意函数，都可以通过类似func(*args, **kw)的形式调用它，无论它的参数是如何定义的。
    #
    from typing import Optional
    def f1(a, b, c: Optional[int]=0, *args, **kw):
        print('a =', a, 'b =', b, 'c =', c, 'args =', args, 'kw =', kw)

    def f2(a, b, c=0, *, d, **kw):
        print('a =', a, 'b =', b, 'c =', c, 'd =', d, 'kw =', kw)
    # 调用
    # >>> f1(1, 2)
    # a = 1 b = 2 c = 0 args = () kw = {}
    # >>> f1(1, 2, c=3)
    # a = 1 b = 2 c = 3 args = () kw = {}
    # >>> f1(1, 2, 3, 'a', 'b')
    # a = 1 b = 2 c = 3 args = ('a', 'b') kw = {}
    # >>> f1(1, 2, 3, 'a', 'b', x=99)
    # a = 1 b = 2 c = 3 args = ('a', 'b') kw = {'x': 99}
    # >>> f2(1, 2, d=99, ext=None)
    # a = 1 b = 2 c = 0 d = 99 kw = {'ext': None}

    # 通过一个tuple和dict，你也可以调用上述函数：
    # >>> args = (1, 2, 3, 4)
    # >>> kw = {'d': 99, 'x': '#'}
    # >>> f1(*args, **kw)
    # a = 1 b = 2 c = 3 args = (4,) kw = {'d': 99, 'x': '#'}
    # >>> args = (1, 2, 3)
    # >>> kw = {'d': 88, 'x': '#'}
    # >>> f2(*args, **kw)
    # a = 1 b = 2 c = 3 d = 88 kw = {'x': '#'}

    #
    # 命名关键字参数
    #可以限制传入的参数的键
    #例如，只接收 city 和 job 作为关键字参数。这种方式定义的函数如下：
    #
    def person1(name, age, *, city, job):# * 作为分隔符
        print(name, age, city, job)

    # # 调用方式如下：
    # # 必需要有参数名，如果没有，会视为有四个位置参数，而这个函数只有两个位置参数，报错
    # >>> person1('Jack', 24, city='Beijing', job='Engineer')
    # Jack 24 Beijing Engineer
    #
    # 如果函数定义中已经有了一个可变参数，后面跟着的命名关键字参数就不再需要一个特殊分隔符*了：
    #
    def person2(name, age, *args, city, job):
        print(name, age, args, city, job)

```

### 递归

```py

    ###
    ##
    ## 递归
    # 尾递归优化: 使得 返回值不含有表达式
    #
    # 阶乘
    def recu(n):
        if n == 1:
            return 1
        return n*recu(n-1) # 返回值带有表达式, 不好
    # 优化后
    def fact(n):
        return fact_iter(n, 1)

    def fact_iter(num, product):
        if num == 1:
            return product
        return fact_iter(num - 1, num * product)

```


### 高阶函数


```py
def map_reduce_closure_lambda():
    l = list(range(1,11))
    def f(x):
        return x*x
    r = map(f, l) # <map object at 0x10298b2d0>
    print("r = ", list(r))# r =  [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
    r1 = map(str, l)
    print(list(r1)) # ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']

    from functools import reduce
    l = [1, 2, 3]
    def add(x, y):
        return x+y
    r2 = reduce(add, l)
    print("r2 = ", r2) # 6


    n = sorted([36, 5, -12, 9, -21])
    print(n) # [-21, -12, 5, 9, 36]
    n1 = sorted(['bob', 'about', 'Zoo', 'Credit'],reverse=True, key=str.lower)
    print(n1) # ['Zoo', 'Credit', 'bob', 'about']

    def lazy_sum(*args):
        def sum():
            ax = 0
            for n in args:
                ax = ax + n
            return ax
        return sum
    f = lazy_sum(1, 3, 5, 7, 9)
    print("f() = ", f()) # 25

    lambda x: x*x


```

## 文件处理

### 创建文件

```py
def file_dir_demo():
    import os
    import sys
    print(os.name) # 操作系统类型, 如果是posix，说明系统是Linux、Unix或Mac OS X，如果是nt，就是Windows系统
    print(os.environ.get('PATH', ['default Value'])) # 在操作系统中定义的环境变量
    # 查看当前目录的绝对路径:
    print(os.path.abspath('.')) # /Users/xiaoyu/repo/code/back_end/python-demos

    # 路径拼接
    #
    # 把两个路径合成一个时，不要直接拼字符串，而要通过os.path.join()函数，这样可以正确处理不同操作系统的路径分隔符
    #os.path.join('/Users/michael', 'testdir')
    #'/Users/michael/testdir'
    #
    # 拆分
    #
    # 要拆分路径时，也不要直接去拆字符串，而要通过os.path.split()函数，这样可以把一个路径拆分为两部分，后一部分总是最后级别的目录或文件名
    #>>> os.path.split('/Users/michael/testdir/file.txt')
    #('/Users/michael/testdir', 'file.txt')

    # 创建一个目录:
    #>>> os.mkdir('/Users/michael/testdir')
    # 删掉一个目录:
    #>>> os.rmdir('/Users/michael/testdir')

    # 文件拓展名
    #
    # os.path.splitext()可以直接让你得到文件扩展名
    # >>> os.path.splitext('/path/to/file.txt')
    # ('/path/to/file', '.txt')

    #  对文件重命名:
    # >>> os.rename('test.txt', 'test.py')
    # 删掉文件:
    # >>> os.remove('test.py')

    # 复制文件
    #
    # shutil模块提供了copyfile()的函数，你还可以在shutil模块中找到很多实用函数，它们可以看做是os模块的补充

    # 列出当前目录下的所有目录
    # os.listdir('.')
    #
    # >>> [x for x in os.listdir('.') if os.path.isdir(x)]
    # ['.lein', '.local', '.m2', '.npm', '.ssh', '.Trash', '.vim', 'Applications', 'Desktop', ...]

    # 列出所有的.py文件
    # >>> [x for x in os.listdir('.') if os.path.isfile(x) and os.path.splitext(x)[1]=='.py']
    # ['apis.py', 'config.py', 'models.py', 'pymonitor.py', 'test_db.py', 'urls.py', 'wsgiapp.py']

    # path 路径 对比    
    #
    print(__file__)  # D:/repo/repo_github/shared_already/python-demos/module_test.py
    print(os.path.dirname(__file__))  # D:/repo/repo_github/shared_already/python-demos
    curPath = os.path.abspath(os.path.dirname(__file__))
    print(curPath)  # D:\repo\repo_github\shared_already\python-demos
    rootPath = os.path.split(curPath)[0]
    print(rootPath)  # D:\repo\repo_github\shared_already
    # sys.path.append(curPath)
    sys.path.append(rootPath)
    print(sys.path)


```

### 读写文件数据

```py
def read_write_file():
    """
    open(file, mode='r', buffering=-1, encoding=None, errors=None, newline=None, closefd=True, opener=None)
        file: 必需，文件路径（相对或者绝对路径）。
        mode: 可选，文件打开模式
            r 以只读方式打开文件。文件的指针将会放在文件的开头。这是默认模式。
            x 写模式，新建一个文件，如果该文件已存在则会报错。
            b 二进制模式。
            w 打开一个文件只用于写入。如果该文件已存在则打开文件，并从开头开始编辑，即原有内容会被删除。如果该文件不存在，创建新文件。
            a 打开一个文件用于追加。如果该文件已存在，文件指针将会放在文件的结尾。如果该文件不存在，创建新文件进行写入。
            t 文本模式(默认)
            + 打开一个文件进行更新(可读可写)。
        buffering: 设置缓冲
            通过0以关闭缓冲（仅在二进制模式下允许）
            1 选择行缓冲（仅在文本模式下可用）
            当未给出buffers参数时，默认缓冲策略工作如下:
                
        encoding: 一般使用utf8
            如果未指定encoding，则使用的编码取决于平台: locale.getpreferredencoding（False）
        errors: 报错级别, 常用 'ignore'
        newline: 区分换行符
            可以是None、''、'\n'、'\r'、'\r\n'
            读取数据时, 
                如果newline参数为None, 文件中的'\n'，'\r\n'，'\r'，在返还给调用者的时候都会被转化为'\n'
                如果newline = '', 但是行的结尾符号并不会被转化
                如果它具有任何其它合法值，则输入行仅由给定字符串终止，
            写入时
                如果不设置newline参数, 即为 None 时, 任何'\n'都会被翻译成当前系统的line separator（也就是os.linesep)
                如果参数为''或者'\n'，不会有任何翻译。
        closefd: 传入的file参数类型
        opener:
    """
    f=None
    try:
        # read()会一次性读取文件的全部内容，如果文件有10G，内存就爆了，
        #所以，要保险起见，可以反复调用read(size)方法，每次最多读取size个字节的内容。
        # r 表示 模式为 只读, 还有 w 写, rw 读写, rb/wb 二进制
        f = open('./readme.md', 'r')
        print(f.read())
    finally:
        if f:
            f.close()

    # 如果文件很小，read()一次性读取最方便；如果不能确定文件大小，反复调用read(size)比较保险；如果是配置文件，调用readlines()最方便：
    # 读取配置文件
    for line in f.readlines():
        print(line.strip()) # 把末尾的'\n'删掉

    # 更好的方法 ---- 自动关闭 f
    #
    # 但是每次都这么写实在太繁琐，所以，Python引入了with语句来自动帮我们调用close()
    with open('./readme.md', 'r') as f:
        print(f.read())


    #要读取非UTF-8编码的文本文件，需要给open()函数传入encoding参数
    # >>> f = open('/Users/michael/gbk.txt', 'r', encoding='gbk')
    # >>> f.read()
    # '测试'

    # 错误处理
    #直接忽略
    f = open('/Users/michael/gbk.txt', 'r', encoding='gbk', errors='ignore')

    # 读二进制文件
    f = open('/Users/michael/test.jpg', 'rb')
    f.read()
    # b'\xff\xd8\xff\xe1\x00\x18Exif\x00\x00...' # 十六进制表示的字节

    # 写二进制
    # 如果文件已存在，会直接覆盖, 可以传入'a'以追加（append）模式写入
    f = open('/Users/michael/test.txt', 'w')
    # 可以反复调用write()来写入文件
    f.write('Hello, world!')
    # 写文件时，操作系统往往不会立刻把数据写入磁盘，而是放到内存缓存起来，空闲的时候再慢慢写入。
    #只有调用close()方法时，操作系统才保证把没有写入的数据全部写入磁盘
    f.close()
    # 所以，还是用with语句方便

    #
    # 在内存读写 stringIO
    # 要把str写入StringIO，我们需要先创建一个StringIO，然后，像文件一样写入
    # >>> from io import StringIO
    # >>> f = StringIO() # 可以在这里直接初始化, 类比 StringBuffer
    # >>> f.write('hello')
    # 5
    # >>> f.write(' ')
    # 1
    # >>> f.write('world!')
    # 6
    # >>> print(f.getvalue())
    # hello world!


    # # 要操作二进制数据，就需要使用BytesIO
    # >>> from io import BytesIO
    # >>> f = BytesIO()
    # >>> f.write('中文'.encode('utf-8'))
    # 6
    # >>> print(f.getvalue())
    # b'\xe4\xb8\xad\xe6\x96\x87'

    # 序列化
    #
    # dumps()方法返回一个str，内容就是标准的JSON。类似的，dump()方法可以直接把JSON写入一个file-like Object。
    # >>> import json
    # >>> d = dict(name='Bob', age=20, score=88)
    # >>> json.dumps(d)
    # '{"age": 20, "score": 88, "name": "Bob"}'


```


## 装饰器 decorator

### 装饰器介绍

```py
# 是 py 提供的编写高阶函数的语法糖, 即底层就是一个函数, 这个函数会返回一个函数
# 函数装饰器
# 类装饰器
    # __init__, __call__ 

# 多个装饰器
@dec2(arg)
@dec1
def xx():
    pass
# 等价于
xx = dec2(arg)(dec1(xx))



# ------------------------- 定义一个日志包装器


import functools
# 本质上, decorator就是一个返回函数的高阶函数, 接受一个函数, 返回包装后的函数
def log(func):
    # # 作用是修改装饰后的函数 __name__ 属性值, 如果不加, 装饰器还是工作的, 但是 __name__ 会变为 "wrapper", 显然不行
    @functools.wraps(func) 
    def wrapper(*args, **kw):  # 能接受任意的参数
        print('call %s(): ' % func.__name__)
        return func(*args, **kw)
    return wrapper

# 把@log放到new()函数的定义处，相当于执行了 new = log(new)
@log
def new():
    print('111-111-111')
new() # 执行的是包装后的函数




# ------------------------------------ 带参数的包装器

# 如果decorator本身需要传入参数，那就需要编写一个返回decorator的高阶函数
def log1(text):
    def decorator(func):
        @functools.wraps(func)
        def wrapper(*args, **kw):
            print('%s %s():' % (text, func.__name__))
            return func(*args, **kw)
        return wrapper
    return decorator
@log1('自定义execute') # 相当于 yyy =  log1('execute')(yyy)
def yyy():
    print('zzz')
yyy()




# --------------------------案例 统计执行时间

def timer(func):
    def wrapper():
        start = time.perf_counter() # 或者 time.time()
        func()
        end = time.perf_counter()
        elapse = end - start
        print('耗时:', elapse)

    return wrapper

@timer
def show():
    print('hehe')
    time.sleep(0.2)

show()


```

### 类装饰器

```python

# 定义类装饰器, 
# 就是一个类, 有一个 __call__方法
class Entity:
    def __call__(self, cls):
        print('__call__', cls)

        def __repr__(self) -> str:
            return f'{cls.__qualname__}()' # 返回类名, 即 cls.__name__
        cls.__repr__ = __repr__

        def hello(self):
            print('hello')
            
        cls.hello = hello
        
        return cls

# 必须加括号
# 此时, 不等到实例化 User, Entity.__call__ 就会执行, 返回的 cls 就是包装后的 User 类
@Entity() 
class User:
    ...

u = User()
print(u) # User()
u.hello() # hello

```


### 案例: 失败重试

```python


def retry(ex_type: Exception, try_times=3, delay=1, backoff=2):
    """失败重试

    Args:
        ex (Exception): 错误类型
        try_times (int, optional): 重试次数. Defaults to 3.
        delay (int, optional): 延迟. Defaults to 1.
        backoff (int, optional): 累加. Defaults to 2.
    """
    
    def decrator_retry(func):
        @functools.wraps(func)
        def run_with_retry_policy(*args, **kw):
            _try_times, _delay = try_times, delay
            while _try_times > 1:
                try:
                    return func(*args, **kw)
                except ex_type:
                    print(f'operation failed, will retry after {_delay}')
                    _try_times -= 1
                    _delay *= backoff
            # 最后一次不走循环了
            return func(*args, **kw)
        
        return run_with_retry_policy
    
    return decrator_retry

# 使用
@retry(requests.ConnectionError, try_times=4)
def get_content(url: str) -> str:
    res = requests.get(url)
    return res.text

```

### 案例: 依赖注入

```python



from abc import ABC, abstractmethod
from threading import Lock

# key 是 class, 值也是 class
comps: dict = {}

class Component:
    def __call__(self, cls):
        if comps.get(cls) is None:
            comps[cls] = cls
        return comps[cls]

class Inject(ABC):
    def __init__(self, **kw):
        self.kw = kw
    
    def __call__(self, cls):
        cls_init = cls.__init__

        def __init__(_self, *args, **kw):
            cls_init(_self, *args, **kw)
            self.inject_members(_self)
            
        cls.__init__ = __init__

        return cls

    def inject_members(self, obj):
        for name, clazz in self.kw.items():
            ins = self.get_instance(clazz)
            if ins:
                setattr(obj, name, ins)
    
    @abstractmethod
    def get_instance(self, cls):
        ...

class InjectPrototype(Inject):
    def get_instance(self, cls):
        clazz = comps.get(cls)
        if clazz:
            return clazz()
        raise KeyError(f'comps中不存在类型{cls}')

class InjectSingleton(Inject):
    # 类 和实例的映射
    _ins_mapping: dict = {}

    # 这个锁是用来获取 class 锁的
    _lock = Lock()

    # class 锁, 即类和锁的映射
    _lock_mapping: dict = {}

    def get_instance(self, cls):
        ins = self._ins_mapping.get(cls)
        if not ins:
            class_lock = self._lock_mapping.get(cls)
            if not class_lock:
                with self._lock:
                    class_lock = Lock()
                    self._lock_mapping[cls] = class_lock
            with class_lock:
                ins = self._ins_mapping.get(cls)
                if not ins:
                    clazz = comps.get(cls)
                    ins = clazz()
                    self._ins_mapping[cls] = ins

        return ins


# 使用
@Component()
class UserService:
    def get_user(self, id) -> str:
        return f'User-{id}'

@Component()
class ProductService:
    def get_prods(self):
        return 'products'

@InjectSingleton(user_service=UserService)
@InjectSingleton(product_service=ProductService)
@Component()
class BizService:
    def print_user(self):
        print(self.user_service.get_user(1))
        print(self.product_service.get_prods())

@InjectSingleton(biz_service=BizService)
class Controller:
    def exec(self):
        self.biz_service.print_user()

c = Controller()
c.exec()

c2 = Controller()
print(id(c.biz_service) == id(c2.biz_service)) # true, 说明注入的是单例对象
```



## 面向对象


### 类 对象

```py

class SideBar:
    # 类变量（大写）
    DIV: str = 'div'
    H1: str = 'h1'
    MORE_PLACEHOLDER: str = 'more'
    MORE_SIZE: int = 3
    SHOULD_COMPRESS_HTML: bool = True

     # 类属性, 
    # 通过实例对象获取属性, 会先查实例属性, 不存在再去查类属性, 都不存在 则返回 none
    # 建议通过 Student.name , 或者 self.__class__.name 这两种方式获取类属性
    # 不要直接通过 self.xxx 获取类属性
    name__xx = "Student" 
    

    __slots__ = ('name', '__score', '_age', '__name') # 用tuple定义哪些属性可以作为实例变量, 在类外部就不能随便绑定类变量了
    # `__slots__`定义的属性仅对当前类实例起作用，对继承的子类是无限制的 
    #除非在子类中也定义**slots**，这样，子类实例允许定义的属性就是自身的**slots**加上父类的**slots**

    # 构造方法
    # > **init**有两个下划线
    # > 定义对象方法第一个参数必须是 self，调用时不用传入 self
    #
    #

    # 构造方法，定义实例变量
    def __init__(
        self,
        title: str,
        menu_items: list[str],
        more: str = MORE_PLACEHOLDER,
        more_size: int = MORE_SIZE,
        should_compress_html: bool = SHOULD_COMPRESS_HTML
    ) -> None:
        self.title=  title
        self.menu_items=  menu_items
        self.more = more
        self.more_size = more_size
        self.should_compress_html = should_compress_html

        # 通过‘_’ 表示隐藏属性, 实际还是能通过 _someone 获取属性
        self._someone = None

        # 通过 '__' 表示不暴露的属性, Python 编译器会将 __name 改写为 _SideBar__name, 所以通过 __name 获取属性会报错
        self.__name = 'test'

        pass

    # ---------紧跟着是其他魔术方法------------
    
    def __len__(self):
        return len(self.menu_items)

    def __repr__(self):
        return f'side bar: {len(self)} items'
    
    
    # ----------------------
    
    @property  # # 负责把一个方法变成属性, 暴露 新的自定义属性 ‘someone’
    def someone(self):
        return self._someone

    # @score.setter 装饰器是 @property 又创建的另一个装饰器, 用来把一个setter方法变成属性赋值
    @someone.setter
    def someone(self, someone):
        assert isinstance(someone, int), 'someone has to be a number'
        assert someone > 0, 'someone have to be more than o'
        self._someone  = someone
    
    # del sidebar.someone 这行语句会出发这个方法
    @someone.deleter
    def someone(self):
        self._someone = 0
        

    # 类方法，
    # 绑定到类，接受 cls 作为第一个参数， 可 访问类变量
    # 常用在工厂方法， 通过 cls(xxx) 调用构造函数
    # 可通过类，实例来调用
    @classmethod
    def _header(cls, title):
        return cls._build_header(cls.H1, title)
    
    # 静态方法
    # 不绑定到类或实例，不接受 self 或 cls 作为参数
    # 可以通过类名或类的实例调用
    @staticmethod
    def _build_header(tag_name: str, title: str) -> str:
        return f'<{tag_name}>{title}</{tag_name}>'

    # 实例方法
    def build(self):
         return self._header(self.title)
    
    # `__str__()`: print(obj)实际调用 obj 的`__str__()` 
    def __str__(self):  
        return 'Student object (name=%s)' % self.name
    
    # `__repr__()`: 直接 obj 就是调用 obj 的`__repr__()`,通常和 `__str__()`一样
    __repr__ = __str__


# 创建对象
d = SideBar(...)
# 获取属性, 只适用于对象, 不能用于 dict 
getattr(d, 'Mickael', None) # 默认值 None 必须给, 否则属性不存在会报错

# 是否存在
hasattr(d, 'xxx')

```

### 描述器 



#### 描述器介绍

```python
# 描述器就是类,
# 只是类包含一组方法 __get__、__set__ 和 __delete__, 用于控制属性的访问和使用
# 
# 此外, 还有些可选的方法 
#    __set_name__(self, ins, attr_name)  在描述器被赋值给某个属性时自动调用, 
# 
# 场景:
# 实现属性的惰性计算
# 控制对属性的访问权限
# 为属性添加验证逻辑
# 实现自定义属性类型


# 数据描述器: 有  __get__ 和 __set__（或 __delete__）, 用于控制对属性值的访问和修改
# 非数据描述器: 仅定义了 __get__  , 用于在获取属性值时执行自定义逻辑


# ------------------ 定义非数据描述器

class DirSize:
    def __get__(self, ins, cls):
        print(ins)  # 实例对象
        print(cls)  # class 对象
        print(isinstance(ins, cls))  # true

        return len(os.listdir(ins.dirname))


class Dir:
    # 就是类属性, 
    # 仅仅是借助类属性, size 这个属性指定描述器
    #  size 若有同名的对象属性, 值会被同名的对象属性覆盖
    size = DirSize()

    def __init__(self, dirname):
        self.dirname = dirname


cur_dir = Dir("./")
print(cur_dir.size)  # 会调用 DirectorySize的 get 方法

# ------------------------



# --------------------- 定义一个数据描述器

class UppercaseDescriptor:
    # instance 是拥有这个描述器的实例对象
    def __get__(self, ins, cls):
        return ins._value.upper() # 必须通过 '_' 开头的是有变量获取属性, 这里 _value 获取的是MyClass 的 value 属性 

    def __set__(self, ins, value):
        ins._value = value.upper()

# 使用
class MyClass:
    # 实际是通过 _value 存取
    value = UppercaseDescriptor() # 这意味着每次获取或设置 value 属性时，都会调用描述器的方法。

mc = MyClass()
mc.value = 'ab'
print(mc.value) # AB
print(vars(mc)) # {'_value': 'AB'}


```


#### 属性的查询链路顺序

```python


# 属性查询路径顺序:
- 数据描述器的 get
- 对象的 dict
- 非数据描述器的 get
- 类的 dict
- 父类的 dict
- mro 的顺序搜索对应类的 dict
都找不到, 抛出 AttributeError

```


#### 案例: 记录属性访问日志


```py


# -----------------------


class AttributeAccessLoggingDescriptor:
    
    def __set_name__(self, ins, attr_name):
        self.pri_name = f'_{attr_name}'
        self.pub_name = attr_name
    
    def __get__(self, ins, instype):
        value = getattr(ins, self.pri_name)
        print(f'访问 {self.pub_name} 属性, 返回值: {value}')
        return value    

    def __set__(self, ins, value):
        print(f'更新 {self.pub_name} 属性, 属性值: {value}')
        setattr(ins, self.pri_name, value)


class Product:
    name = AttributeAccessLoggingDescriptor()
    count = AttributeAccessLoggingDescriptor()

    def __init__(self, name, count):
        self.name = name
        self.count = count

p1= Product('a', 1)
p2 = Product('b', 2)


```

#### 案例: 属性校验

```py



# ----------------------------- 


class Validator:

    def __set_name__(self, ins, attr):
        self.pri_name = f'_{attr}'
        self.pub_name = attr
    
    def __get__(self, ins, cls):
        return getattr(ins, self.pri_name)

    def __set__(self, ins, val):
        self.validate(val)
        setattr(ins, self.pri_name, val)
    
    # 待实现的抽象方法
    def validate(self, val):
        ...
    

class OneOf(Validator):
    def __init__(self, *options):
        self.options = set(options)
    
    
    def validate(self, val):
        if self.options and val not in self.options:
            raise ValueError(f'属性 {self.pub_name!r} 取值必须在 {self.options!r} 中')

class Person:
    name = OneOf('a', 'b')
    
    def __init__(self, name):
        self.name = name
        
p = Person('a') # 不报错
p2 =Person('c') # 报错



```

#### 案例: 简化属性的定义

```python


class Life:
    def __init__(self, min: int, max: int, error: str):
        self.min = min
        self.max = max
        self.error = error

    def __set_name__(self, ins, attr):
        self.attr = attr

    def __get__(self, ins, instype):
        return ins.__dict__.get(self.attr)
    
    def __set__(self, ins, val):
        if val < self.min or val > self.max:
            raise ValueError(self.error)
        ins.__dict__[self.attr] = val

# 定义一套游戏方案
class Scenario:
    # 定义英雄生命值属性
    hero_life = Life(0, 10, 'hero life not in the scope')
    # 敌人生命值属性
    enemy_life = Life(0, 100, 'enemy life not in the scope')

    # 可以看到, 很简便, 如果通过 __init__() 或者 @property 去定义属性会很麻烦
```


#### 案例: 简单的 orm

```py


# ---------------------- 

import sqlite3
conn = sqlite3.connect('/tmp/data.db')

class Field:
    def __set_name__(self, ins, attr):
        self.sql_get_by_id = f'select {attr} from {ins.table} where {ins.key} = ?;'
        self.sql_update_by_id = f'update {ins.table} set {attr} = ? where {ins.key} = ?;'
    
    def __get__(self, ins, instype):
        return conn.execute(self.sql_get_by_id, [ins.key]).fetchone()[0]
    
    def __set__(self, ins, val):
        conn.execute(self.sql_update_by_id, [val, ins.key])
        conn.commit()
    
# 使用
class User:
    table = 'user'
    key = 'id'
    name = Field()
    age = Field()

    def __init__(self, key):
        self.key = key

name1 = User(1).name
name2 = User(2).name



```


#### 案例: 实现属性懒加载

```python

# ------------------------- 
# 当描述器被当作装饰器使用

# 只有 __get__, 这是一个非数据描述器, 不能是数据描述器, 因为数据描述器/非数据描述器 属性读取的链路顺序不同
class LazyProperty:
    def __init__(self, func):
        self.func = func
        self.func_name = func.__name__
    
    def __get__(self, ins, instype):
        val = self.func(ins)
        ins.__dict__[self.func_name] = val
        return val

class Person:
    @LazyProperty
    def heavy_result(self):
        print('some heavy task')
        return 100000

p = Person()  # 创建时, 不会初始化属性 heavy_result, 是为懒加载
a = p.heavy_result  # 实际读取时才会执行实际的计算逻辑
b = p.heavy_result  # 第二次调用, 会从缓存拿 

```

### 继承 鸭子类型


```py

 # 
    # 继承 任何类都默认继承 object
    # 允许多继承
    #
    class People(object): # 这里有没有 object 都是等效的
        def say(self):
            print("hello people")
        def run(self):
            print("run people")

    class Student(People):  # 继承
        def run(self): # 重写
            print("run students")

    stu = Student()
    stu.say() # hello people
    stu.run() # run students

    print(isinstance(stu, People)) # true
    print(isinstance(stu, Student))# true

    print(issubclass(Stuent, People)) #true

    #
    # 鸭子类型
    #
    class Animal(object):
        def eat(self):
            print("animal eat")
        def run(self):
            print("run animal")
    class Bird(object):
        def eat(self):
            print("eat bird")
    print(isinstance(Bird(), Animal))# false
    def demo(p):
        p.run()
    demo(stu)
    demo(People())
    demo(Animal()) # animal 没有继承 People, 也可作为参数传入 demo(), 鸭子类型


# 通过 super() 调用父类实例方法


# 存在继承的类中, call方法时查找方法顺序:
    # 先搜寻当前类, 在往上找, 多个父类, 按照定义当前类时声明父类顺序查找   (MRO 方法解析顺序)



# 打印继承链

class A:
    pass
class B(A):
    pass

lst = B.mro()
print(lst) # [__main__.B, __main__.A, objject]
```

### 判断类型信息


```py
#
    # 类型信息
    #
    #>>> type(123)==type(456)
    # True
    # >>> type(123)==int
    # True
    # >>> type('abc')==type('123')
    # True
    # >>> type('abc')==str
    # True
    # >>> type('abc')==type(123)
    # False

    # # 其他类型
    # >>> import types
    # >>> def fn():
    # ...     pass
    # ...
    # >>> type(fn)==types.FunctionType
    # True
    # >>> type(abs)==types.BuiltinFunctionType
    # True
    # >>> type(lambda x: x)==types.LambdaType
    # True
    # >>> type((x for x in range(10)))==types.GeneratorType
    # True

    # # isinstance()
    # # 基本类型
    # >>> isinstance('a', str)
    # True
    # >>> isinstance(123, int)
    # True
    # >>> isinstance(b'a', bytes)
    # True
    # # 继承体系
    # >>> isinstance(h, Dog)
    # True
    # >>> isinstance(h, Animal)
    # True
    # >>> isinstance(d, Dog) and isinstance(d, Animal)
    # True
    # # 判断是几种中之一种
    # >>> isinstance([1, 2, 3], (list, tuple))
    # True
    # >>> isinstance((1, 2, 3), (list, tuple))
    # True

```

### 动态操作


```py
# 
    # 动态操作 object 属性
    #
    # dir(obj)---------获取 obj 的所有对象、属性，返回一个字符串 list  
    # 配合 getattr()、setattr()以及 hasattr()，我们可以直接操作一个对象的状态
    #
    # >>> class MyObject(object):
    # ...     def __init__(self):
    # ...         self.x = 9
    # ...     def power(self):
    # ...         return self.x * self.x
    # ...
    # >>> obj = MyObject()
    # >>> hasattr(obj, 'x') # 有属性'x'吗？
    # True
    # >>> obj.x
    # 9
    # >>> hasattr(obj, 'y') # 有属性'y'吗？
    # False
    # >>> setattr(obj, 'y', 19) # 设置一个属性'y'
    # >>> hasattr(obj, 'y') # 有属性'y'吗？
    # True
    # >>> getattr(obj, 'y', 404) # 获取属性'y',如果不存在，返回默认值404
    # 19
    # >>> obj.y # 获取属性'y'
    # 19
    # # 获取对象
    # >>> hasattr(obj, 'power') # 有属性'power'吗？
    # True
    # >>> getattr(obj, 'power') # 获取属性'power'
    # <bound method MyObject.power of <__main__.MyObject object at 0x10077a6a0>>
    # >>> fn = getattr(obj, 'power') # 获取属性'power'并赋值到变量fn
    # >>> fn # fn指向obj.power
    # <bound method MyObject.power of <__main__.MyObject object at 0x10077a6a0>>
    # >>> fn() # 调用fn()与调用obj.power()是一样的
    # 81



 #
    # 动态创建类, 元类, metaClass
    #
    # 创建class
    class Hello(object):
        def hello(self, name='world'):
            print('Hello, %s.' % name)

    h = Hello()
    print(type(h))# <class '__main__.Hello'> h的类型是Hello
    print(type(Hello))# <class 'type'> Hello的类型是type

    # 动态创建class
    def fn(self, name='world'):
        print('Hello, %s.' % name)
    Hello1 = type('Hello1', (object,), dict(hello=fn))
    h1 = Hello1()
    print(h1) # <__main__.Hello1 object at 0x7faef9cd5c90>
    h1.hello() # Hello, world.

```





### 枚举


```py


 #
# 枚举类
#
#    

from enum import Enum, unique

# simple way to define, 默认赋值1，2，3，4...
Month = Enum('Month', ('Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'))
print(Month.Jan.value) # 1
print(Month.Jan.name) #Jan
print(Month.Jan)#Month.Jan

print(Month['Jan'])# 通过名称获取成员,  # Month.Jan
print(Month(1))# 通过值获取成员 # Month.Jan

# 枚举迭代
for month in Month:
    print(month)

for month in Month.__members__.items():
    print(month[0], month[1])

for name, value in Month.__members__.items():
    print(name, value)



# customize class,可自己赋值
@unique
class Weekday(Enum):
    Sun = 0  # 赋值可以是数字, 当然也可以是字符串
    Mon = 1
    Tue = 2
    Wed = 3
    Thu = 4
    Fri = 5
    Sat = 6
for name, value in Weekday.__members__.items():
    print(name, value)


# 枚举是否相等比较

# 枚举成员可进行同一性比较  
Color.red is Color.red  
# 　　输出结果是：True  
Color.red is not Color.blue  
# 　　输出结果是：True  

# 枚举成员可进等值比较  
Color.blue == Color.red  
# 　　输出结果是：False  
Color.blue != Color.red  
# 　　输出结果是：True

```

### 对象克隆 拷贝 shadow-copy deep-copy

```python

# 对于可变对象, 复制时必须进行深拷贝

# shadw copy (创建新对象, 将原来对象内的属性的引用, 一次插入新对象)
copy.copy()

# deep copy (创建新对象, 将远对象属性的副本, 插入新对象)
copy.deepcopy()


# 特殊的
# 对于 dict, xx_dict.copy() 可实现字典的 shadow copy
# 对于 list, xx_list[:] 可以实现列表的 shadow copy
```

### abc模块 定义抽象基类

```python

# define the abstract class
#   或者 class Xxx(abc.ABC) 也可以, 推荐这种
import abc
class Component(metaclass=abc.ABCMeta):
    # the sub class have to implement this method
    @abc.abstractmethod
    def bind_data(self):
        pass

    # the sub class have to implement this method
    @abc.abstractmethod
    def render(self):
        pass


class CompA(Component):
    def bind_data(self):
        return ['a', 'b', 'c']

    def render(self):
        for ele in self.bind_data():
            print(ele)

ca = CompA()
def render(comps: list[CompA]):
    for comp in comps:
        comp.render()

render([ca])

Component.register(int)  # 注册 int 类型为子类
Component.register(tuple)
Component.register(dict)
```


## 数据类

### @dataclass 创建实体类

```python
from dataclasses import dataclass, field, fields
# python 3.7 开始内置提供
@dataclass(   # 默认自动生成 __repr__, __eq__, __init__

    init=True,   # 生成 __init__, 默认 true
    repr=True,
    eq=True,

    order=False,  #default to false  
                # 声明实现 __gt__, __ge__, __lt__, __le__ , 此时对象可以比较大小了, 默认是将所有属性转为 tuple比较, 
                # 可通过为属性声明 field(compare=False) 来排除对该属性的比较

    frozen=False ,  # 声明创建出的对象是否冰冻 （即属性不可修改， 会抛出FrozenInstanceError）
                # 对于冰冻类的子类, 子类属性可以自由修改, 但是继承自父类的属性仍然是冰冻的
    
    unsafe_hash=False,  # 为true则自动生成 __hash__方法


    match_args=True  # 默认为true, 为 __match_args__ 赋值一个元组, 用于指定哪些属性字段参与模式匹配

    kw_only=False   # 默认 false, true 则限制必须使用 **kw 的方式初始化对象, 即通过 参数名=值,参数名=值 这种方式
                    # 可以通过属性的 field (xxx) 排除

    slots=False # 默认, 若为 true, 则会优化属性访问速度, 同时禁止动态添加额外属性

)
class Person:
    name: str
    age: int
    # 可选的默认值：可以为类属性设置默认值。
    email: str = field(
        default="", # 默认值
        compare=False,  # 不参与比较, 默认是 true
        metadata={"description": "Email Address"}
    )
    # 指定默认工厂函数， 创建实体这个字段可不传
    bookes: List[str] = field(default_factory=list)

# 会自动生成 __init__ 方法。
person = Person(name="Alice", age=30, email="alice@example.com")
field_list = fields(Person)  # 获取 field 列表

```

### hash策略

```py


# ---------  unsafe_hash, eq, frozen, 和
# 三者一起控制数据类的 hash 生成策略

@dataclass(
    frozen=False, # 默认
    eq=True,  # default
    unsafe_hash=False  # default
)
class Person:
    name: str
    age: int

    def get_super_hash(self):
        return super().__hash__()

p1 = Person('aa', 11)
# error: 没有实现自己的 __hash__
#  因为 unsafe_hash=False 不会重写父类 __hash__, 
# 也没有手动实现__hash__, 
# 同时 eq=true实现了 __eq__, 相当于屏蔽了父类的 __hash__ 方法
print('p1 hash', hash(p1))  

# -------------------------------------


@dataclass(
    frozen=False, # 默认
    eq=False,
    unsafe_hash=False  # default
)
class Person:
    name: str
    age: int

    def get_super_hash(self):
        return super().__hash__()


p1 = Person('aa', 11)
p2 = Person('aa', 11)
print(p1 == p2)  # false, 没有重写__eq__, 相当于比较内存地址,所以不等
print('p1 hash', hash(p1))  # 273110696 , 和 super 的 hash 一致, 因为自己没有实现 __hash__, 会调父类的
                    # eq=False , 不会生成 __eq__, 所以不会屏蔽父类的 __hash__, 所以这次不会报错
print('(p1.name, p1.age) hash', hash((p1.name, p1.age)))
print('p1 super hash', p1.get_super_hash())  # 273110696
# ----------------
print('p2 hash', hash(p2))
print('(p2.name, p2.age) hash', hash((p2.name, p2.age)))
print('p2 super hash', p2.get_super_hash())


# -------------------------------------------

```



## 元类 Metaclass

```python

元类是类的工厂，生产类的类

#--------------------------------- 案例: 简单 orm 实现
https://www.bilibili.com/video/BV1Qv4y1976p/?spm_id_from=333.788&vd_source=c2f975abf353677cb814e38e073b6a75



```


## 错误异常处理

### 系统内置的异常

```python

  """
    BaseException
    +-- SystemExit
    +-- KeyboardInterrupt
    +-- GeneratorExit
    +-- Exception
        +-- StopIteration
        +-- StopAsyncIteration
        +-- ArithmeticError
        |    +-- FloatingPointError
        |    +-- OverflowError
        |    +-- ZeroDivisionError
        +-- AssertionError
        +-- AttributeError
        +-- BufferError
        +-- EOFError
        +-- ImportError
            +-- ModuleNotFoundError
        +-- LookupError
        |    +-- IndexError
        |    +-- KeyError
        +-- MemoryError
        +-- NameError
        |    +-- UnboundLocalError
        +-- OSError
        |    +-- BlockingIOError
        |    +-- ChildProcessError
        |    +-- ConnectionError
        |    |    +-- BrokenPipeError
        |    |    +-- ConnectionAbortedError
        |    |    +-- ConnectionRefusedError
        |    |    +-- ConnectionResetError
        |    +-- FileExistsError
        |    +-- FileNotFoundError
        |    +-- InterruptedError
        |    +-- IsADirectoryError
        |    +-- NotADirectoryError
        |    +-- PermissionError
        |    +-- ProcessLookupError
        |    +-- TimeoutError
        +-- ReferenceError
        +-- RuntimeError                      #  自定义时一般继承他
        |    +-- NotImplementedError
        |    +-- RecursionError
        +-- SyntaxError
        |    +-- IndentationError
        |         +-- TabError
        +-- SystemError
        +-- TypeError
        +-- ValueError                          # int() 可能发生
        |    +-- UnicodeError
        |         +-- UnicodeDecodeError
        |         +-- UnicodeEncodeError
        |         +-- UnicodeTranslateError
        +-- Warning
            +-- DeprecationWarning
            +-- PendingDeprecationWarning
            +-- RuntimeWarning
            +-- SyntaxWarning
            +-- UserWarning
            +-- FutureWarning
            +-- ImportWarning
            +-- UnicodeWarning
            +-- BytesWarning
            +-- ResourceWarning
    """
```

### 异常捕获抛出

```py

    # 通过配置，logging还可以把错误记录到日志文件里，方便事后排查
    import logging

    try:
        print('try...')
        r = 10 / int('2')
        print('result:', r)
    except ValueError as e:
        print('ValueError:', e)
        logging.exception(e)
    except ZeroDivisionError as e:
        print('ZeroDivisionError:', e)
    # 没有错误发生就执行
    else:
        print('no error!')
    finally:
        print('finally...')
    print('END')


    # 捕获然后原样抛出
    # raise语句如果不带参数，就会把当前错误原样抛出
    def foo(s):
        n = int(s)
        if n==0:
            print("can not be 0")
            raise ValueError('invalid value: %s' % s)
        return 10 / n

    def bar():
        try:
            foo('0')
        except ValueError as e:
            print('ValueError!--------------------')
            raise

    try:
        bar()
    except Exception as e:
        print("handling<<<<<<<<<<<<<")

 

```

### 自定义异常

```python

# 自定义错误
#
# 
class FooError(ValueError): # 或者直接继承 Exception
    pass

def foo(s):
    n = int(s)
    if n==0:
        raise FooError('invalid value: %s' % s)
    return 10 / n

# foo('0')
```


## 魔术方法

### 创建 `__new__`

```python
通过类创建对象, 用的较少
def __new__(cls, param1, p2 ...):
    xxx
```

### 初始化 `__init__` `__post_init__`

```python
init   有了对象之后, 对属性进行初始化

post_init 在 init 后跟着执行

```

### `__del__`

```python
# 在对象内存被释放时触发执行
# del xxx  并不一定出发 __del__, 只是减少了一个引用
```

### `__exit__` 自动关闭回收

```python
def __exit(self, *args):
    # 做一些回收资源的操作, 入关闭资源连接
    xxxx

实现了 exit 方法的类可以 with Xxxcls() as o:      , 超出作用域, 自动执行 exit 方法
```


### 可迭代 `__iter__`

```python

# `__iter__() & __next__()`:如果一个类想被用于 for ... in 循环,则必须实现`__iter__()`，返回一个迭代对象,`__next__()`方法拿到循环的下一个值
#
# `__getitem__ & __setitem__() & __delitem__()`:实现 list 按下标取元素的功能，则必须实现  
# `__len__()`:len(obj)实际调用 obj 的`__len__()` 
#

```

### 可调用对象实例 `__call__`

```python

    # `__call__（）`: 类实现此方法, 则实例变量本身可作为方法调用, 写装饰器很有用
    # 
    # 带有`__call__（）`的对象是`Callable`对象，
    # 如何判断？  
    # 通过 callable(obj)，我们就可以判断一个 obj 是否是“可调用”对象
    #
    class Student(object):
        def __init__(self, name):
            self.name = name

        def __call__(self):
            print('My name is %s.' % self.name)

    s = Student('Michael')
    s() # self参数不要传入
    # My name is Michael.

```


### 属性监控回调 `__getattr__` `__getattribute__`

```python
# `__getattr__（self, attr）`:动态返回属性 (若获取对象不存在的属性, 会调用这个方法得到返回值)
        # 一般通过这个方法, 禁止获取不存在的对象
        def __getattr__(self, attr):
            raise AttributeError(f'Not suported attr: {attr}')

    # 该方法也可用在包顶级作用域下, 通过包获取某个不存在的属性, 就会走这个方法
    #  利用这个特性, 可以实现包的懒加载


#  __getattribute__()   无论属性存在与否, 都回先call 这个方法
        # 可以用来做一些权限控制
        def __getattribute(self, attr):
            if attr == 'price':
                if self.context.has_permission('own'):
                    return super().__getattribute(attr)
                else:
                    raise AttributeError(xxx)
            return super().__attribute__(attr)



# 应用：REST API的链式调用
class Chain(object):

    def __init__(self, path=''):
        self._path = path

    def __getattr__(self, path):
        return Chain('%s/%s' % (self._path, path))

    def __str__(self):
        return self._path

    __repr__ = __str__

# >>> Chain().status.user.timeline.list
# '/status/user/timeline/list'

```

### 可运算 操作符重载

#### 加减乘除

```python

# 等效 sqart(a**2 + b**2)
def __abs__(self):
    return math.hypot(self.x, self.y)

# 为了使用 +
def __add__(self, other):
    x = self.x + other.x
    y = self.y + other.y
    return Vector(x, y)
# for 乘法
def __mul__(self, scalar):
    return Vector(self.x * scalar, self.y * scalar)

```

#### 相等比较 `==`, `is`, `__eq__`, ` id()`

```py

# '==' 比较的是内容， 若相等， 这证明两个对象的 __eq__() 方法返回一样
# is 比较的是内存地址， 即 id() 的值










a = [1, 2]
b = a
assert a==b  # true
assert a is b # true

# 重新赋值, 内存地址变了
a = [1,2] 
assert a == b # true
assert not a is b # true


# 特殊的
# 缓存情况
# 对于整数，在-5~256区间的初始值，Python会默认划分一个缓存区来存贮，只要赋值这个区间的值，不会再重新在堆内存中再划分一个新区来存贮，而是用缓存的，这样就会大大提高效率。对于字符串，在<4097个字符的情况也一样。
a = 257
b = a
a = 257   # 虽然重新分配了, 但是是用的缓存, 没重新分派新地址
assert a is b  # true

```

### 打印格式化  `__str__` `__repr__` 

```py

# __repr__ 和 __str__: 用于 print(xx) 被调用,
#  若 __str__存在, 则优先使用 __str__, 一般会令 __repr__ = __str__




import math

class Vector:

    def __init__(self, x=0, y=0):
        self.x = x
        self.y = y

    # 为了使用 str(xxx)
    def __repr__(self):
        return f'Vector({self.x!r}, {self.y!r})'

    def __eq__(self, other):
        return self.x = other.x and self.y = other.y


#
v = Vector(1, 2)
str(v)  # 调 __str__, 不存在则调 __repr__
repr(v) # 调 __repr__ 

v2 = eval(repr(v))  # 生成新对象, 内部属性相等
v2 == v   # true
type(v2).__name__ == type(v).__name__ # true 类名相同



s = 'a"b'
str(s) # 'a"b'
repr(s) # '\'a"b\''      字符串的机器表达, 将这种表达通过字符形式呈现出来, 告诉机器, s的值是字符串
print(str(s), repr(s))   # a"b 'a"b'
```

### 类型转换 `__bool__`

```python

# 为了使用 bool()
def __bool__(self):
    return bool(abs(self))

```

# 标准库


## 日期处理

```py
def builtin_module():
    from datetime import datetime, timedelta

    now = datetime.now()
    print(now) # 2019-06-05 23:06:46.171270

    time = datetime(2019, 4, 19, 1, 30)
    print(time) # 2019-04-19 01:30:00

    timestamp = time.timestamp()
    print(timestamp)  # 1555608600.0
    print(datetime.fromtimestamp(timestamp))  # 2019-04-19 01:30:00

    cday = datetime.strptime('2015-6-1 18:19:59', '%Y-%m-%d %H:%M:%S')
    print(cday)  # 2015-06-01 18:19:59

    strftime = now.strftime('%Y-%m-%d %H:%M:%S')
    print(strftime)  # 2019-06-05 23:06:46

    result = now + timedelta(days=1, hours=1)
    print(result)  # 2019-06-07 00:11:36.912231

```



# 设计模式 design pattern

## 代理模式 proxy

```python
# ---------日志记录代理

# better way: 通过装饰器, 直接包装需要代理的方法

#  normal way: 创建代理类
from abc import ABC, abstractmethod
class Subj(ABC):
    @abstractmethod
    def exec(self):
        pass

class RealSubj(Subj):
    def exec(self):
        print('-- 实际对象的方法')

class Proxy(Subj):
    def __init__(self, real_subj: Subj):
        self._real_subj = real_subj
    
    def _prev(self):
        print('_prev')
    
    def _post(self):
        print('_post')
    
    def exec(self):
        self._prev()
        self._real_subj.exec()
        self._post()

def client():
    proxy = Proxy(RealSubj())
    proxy.exec()

client()





# ------------缓存代理
# 通过装饰器, 在装饰器内维护了一个缓存 mapping, 在实际方法调用前后, 加入缓存的逻辑
# 有现成的 -->   from functiontools import lru_cache,作为装饰器加在方法上即可

# --------访问控制


# ----------虚拟代理
```

## 工厂模式 factory

```python



# now we have the following data
# trying to create diffecrrent obj accordng to the 'sex'
data = {
    "arr": [
        {
            "name": "aa",
            "sex": "male",
        },
        {
            "name": "bb",
            "sex": "female",
        },
    ]
}

from abc import ABC, abstractmethod
class Person(ABC):
    def __init__(self, name, sex):
        self.name = name
        self.sex = sex

    @abstractmethod
    def print_gender(self):
        """print gender"""


class Male(Person):
    def print_gender(self):
        print(f"{self.name}'s gender is {self.sex} --from Male class")


class Female(Person):
    def print_gender(self):
        print(f"{self.name}'s gender is {self.sex} --from Female class")


from typing import Callable, Any
# use this map to store the creation logic
# key is the sex, value is the create function
creation_functions: dict[str, Callable[..., Person]] = {}


def register(sex: str, func: Callable[..., Person]) -> None:
    creation_functions[sex] = func


def unregister(sex: str) -> None:
    creation_functions.pop(sex, None) # 'None' is reuqired to avoid raising exception


def create(args: dict[str, Any]) -> Person:
    the_args = args.copy()
    sex = the_args["sex"]
    
    try:
        func = creation_functions[sex]
        return func(**the_args)
    except KeyError:
        raise ValueError('unkonwn gender: ' + sex) from None

register('male', Male)
register('female', Female)

for ele in data['arr']:
    c = create(ele)
    c.print_gender()
```

## 单例模式 singleton

```python
# the following ways are all ok , but the first two is recommended
模块  # 推荐
装饰器  # 推荐
__new__
classmethod
metaclass



# ----------- 通过模块

# define a moddule singleton.py
class Config:
    pass

config = Config()

# 在其他模块就可以导入使用了, 这样使用的就都是同一个对象 (多线程也能正常工作)



#  -------------通过装饰器

def singleton(cls):
    _instance_mapping = {}
    _lock = threading.Lock()
    
    def wrapper(*args, **kwargs):
        if cls not in _instance_mapping: 
            with _lock:
                if cls not in _instance_mapping:
                    _instance_mapping[cls] = cls(*args, **kwargs)
        return _instance_mapping[cls]
    return wrapper
    
@singleton
class Config:
    pass


# ---------------- 通过 __new__


class Cofnig:
    _instance = None
    _lock = threading.Lock()

    def __new__(cls, *args, **kwargs):
        if cls._instance is None:
            with cls._lock:
                if cls._instance is None:
                    cls._instance = super(Cofnig, cls).__new__(cls, *args, **kwargs)
            
        return cls._instance


```


# 工程化

https://zhuanlan.zhihu.com/p/509167266
https://pythonguidecn.readthedocs.io/zh/latest/writing/structure.html
https://www.qin.news/python/

## 依赖注入

https://github.com/ets-labs/python-dependency-injector

## cookiecutter 项目模板

https://github.com/cookiecutter/cookiecutter

```sh

pip3 install -U cookiecutter

cookiecutter https://github.com/pyloong/cookiecutter-pythonic-project

```

## Setuptools: 管理依赖、构建和发布

## 虚拟环境 virtual environment

```sh
docker 应用级别的隔离 (适合生产)

virtualenv / venv 
    会在项目路径下新建一个venv目录用于存储独立的python解释器及其第三方依赖库，但项目之间会共享操作系统的环境变量、文件系统等。

conda 隔离能力最弱，提供系统环境级别的隔离。Conda可以创建多个虚拟环境，每个环境都可以由多个项目共享。(适合开发)
    因为手上的项目之前彼此依赖、且同时在迭代开发，将多个项目安装在同一环境中，可以减少配置、测试、编译所需的时间。
```


推荐 venv (virtualenv 过时了):

```sh
python -m venv venv_dir  # 创建虚拟环境venv_dir， 会自动生成venv_dir文件夹

# 激活
# 激活环境后所有的操作都在该虚拟环境中进行，不会到全局的python环境和其它python虚拟环境
$ cd venv_dir/
$ source ./bin/activate

# 验证是否激活
echo $VIRTUAL_ENV

# 退出虚拟环境
deactivate

# 删除环境
rm -rf venv_dir


# 使用anaconda的conda
$ conda create -n env_name python=version package_names(默认在此环境中安装的python包)
# 例
$ conda create --name django_venv python=3.8 django

$ conda env list # 查看所有conda创建的虚拟环境

$ conda activate env_name
# 例
$ conda activate django_venv

$ conda deactivate  # 直接执行conda deactivate即可退出当前虚拟环境

$ conda remove -n ven_name --all

```


使用 pycharm: https://blog.csdn.net/pfm685757/article/details/108590680

inherit global site-packages:勾选上的话代表创建的新项目需要copy一份全局包到虚拟环境。

Make available to all projects:勾选上，表示，当在虚拟环境下安装包的时候，copy一份到全局。


```sh
 pip3 install virtualenv
# 虚拟环境
# --no-site-packages，已经安装到系统Python环境中的所有第三方包都不会复制过来，这样，我们就得到了一个不带任何第三方包的“干净”的Python运行环境。
#               更新 , 版本 >=20 后, 默认就加上了这个选项, 不必手动指定
# -p 指定解释器
virtualenv -p python3.6 venv  
# 使用默认解释器
virtualenv  venv
# 有了venv这个Python环境，可以用source进入该环境
source ./venv/bin/activate
# 退出 venv
deactivate

#对当前已经创建的虚拟环境更改为可迁移, 生成压缩包解压后直接使用
virtualenv --relocatable ./

# 安装库依赖 到 venv
pip install -r requirements.txt
# 生成依赖文件
pip freeze > requirements.txt 
# 当前安装版本
pip freeze





# virtualenvwrapper,是对 virtualenv 的一个封装，目的是使后者更好用。


# venv , Python 从3.3 版本开始，自带了一个虚拟环境 venv
# 仅仅支持 python 3.3 和以后版本。所以，要在 python2 上使用虚拟环境，依然要利用 virtualenv 
python3 -m venv <venv_name> # 一般命名为 .venv

.venv\Scripts\activate.bat
# or
source .venv/bin/activate



```

使用 pycharm 的 venv

设置 interpretor, 推荐 venv 虚拟环境

"inherit global site packages" 勾选表示 project 内找不到需要的库, 就扩大范围, 到全局 base interpretor 的库去找, 但是安装的库会使用 全局 pip 安装, 会安装到 base interpretor 中, 污染全局. 建议不要勾选

此时会在 project root 下生成 venv




## devops 构建流水线

```sh

Fabric+Invoke

```

## 发布自定义库

https://github.com/pypa/twine Twine is a utility for publishing Python packages on PyPI.

## 项目结构

```sh
Dockerfile
docs
pyproject.toml 基于 PEP518 规范的配置文件，保存了项目介绍、作者联系方式、所依赖的包、使用的构建工具
{project_name} 放实际项目代码的文件夹 之所以不用 src 是因为你在编写测试用例、或者把它作为 python 的包给其它项目用时会更方便
{project_name}-stubs 存放 mypy 生成的类型描述文件。mypy 会自动读取这个项目中的类型描述，方便做类型判断。
tests
tox.ini tox 的配置文件。


```

## 模块 import

### 模块简介

```py

# 一个文件就是一个模块
# 一个文件夹, 内部包含一个 __init__.py , 这个文件夹也是一个模块
# 
# 模块被导入, 包级别(即顶级)作用域的代码自动执行, 重复导入不会再次执行

# 模块名称要短、使用小写，并避免使用特殊符号, 如".", "?", "_"
# (就 my.spam.py 来说，Python 认为需要在 my 文件夹 中找到 spam.py 文件，实际并不是这样), 可使用"_" 但不推荐


# 如果引用自己项目的的模块时，你的项目叫 my，模块叫 modu，那么不建议使用 from my import modu来引用，
# 强烈推荐使用 from . import modu。




# ---------------- namespace package
# 有时多个包存在命名冲突的风险, 或者希望吧多个包组织在一起, 方便调用, 这是可使用 命名空间包
ns_pkg
├── module1
│   ├── __init__.py
│   └── func1.py
│   └── func2.py
├── module2
    └── __init__.py
# ns_pkg 是命名空间包的根目录，module1 和 module2 是其子包
# 导入
from ns_pkg.module1 import func1
from ns_pkg.module2 import func2

# or
# 这种方式 可直接通过 ns_pkg.func1, ns_pkg.func2 使用功能
from ns_pkg import *

```

#### 模块搜索路径

```py

   python 有自己的模块搜索路径, 但是怎么引入自定义的模块搜索路径呢?
    # 查看默认路径
    # 查找顺序为:
    # 1. 程序所在目录
    # 2. python 安装标准库目录(lib)
    # 3. 第三方库目录 (site-package)
    import sys
    print(sys.path)
    # 一次性自定义
    sys.path.append('/Users/michael/my_py_scripts')
    # 永久
    设置环境变量PYTHONPATH，Python自身搜索路径不受影响



# import modu 语句将寻找合适的文件，即调用目录下的 modu.py 文件（如果该文件存在）。
#   - 如果没有找到这份文件，Python 解释器递归地在 "PYTHONPATH" 环境变量中查找该文件，如果仍没 有找到，将抛出 ImportError 异常
#   - 一旦找到 modu.py，Python 解释器将在隔离的作用域内执行这个模块。
#       所有顶层语句都会被执行. 方法与类的定义将会存储到模块的字典中。
#       然后这个 模块的变量、方法和类通过 mudu 这个命名空间暴露给调用方，


# 模块搜索优先级: PYTHONPATH、系统默认、sys.path 中的自定义路径, 如
    ['/Users/xiaoyu/repo/python/quick_start/.venv/bin', 
    '/Users/xiaoyu/.rye/py/cpython@3.12.3/lib/python312.zip', 
    '/Users/xiaoyu/.rye/py/cpython@3.12.3/lib/python3.12/lib-dynload', 
    '/Users/xiaoyu/repo/python/quick_start/.venv/lib/python3.12/site-packages',
    '/Users/xiaoyu/repo/python/quick_start/src', 
    ]

```

#### import原理 模块查询链路


```python
例如:
import a.b.c  # a.b 是package, c 是实际模块名

Python 首先尝试 import a, 到 globals() 里找是否存在 a 模块, 
    若存在, 直接返回
    若不在, 依次调用 importer, 找到 a, 添加到 sys.modules 里, 然后注册到 globals()
        # 有三种 importer, 根据调用顺序:
        - BuildinImporter
        - FrozenImporter
        - PathFinder
        - 我们 也可以自定义 importer : CustomFinder, 可以自定义在 importer 链条中的顺序

        前面的 importer 找不到, 就调用后面的 importer 找模块, 都找不到就报错

然后尝试 import a.b , 重复上面流程

最后尝试 import a.b.c



# ----------------

```

#### 自定义导入器

```python

from importlib.abc import MetaPathFinder
import sys
class LoggingFinder(MetaPathFinder):
    def find_spec(self, fullname, path, target=None):
        print(f'--> {fullname}, path: {path}, target: {target}')
        # 这里设置为找不到任何东西, 那么会调用后续的 importer 继续找
        return None
        # 禁止导入
        # raise ImportError('禁止导入')

# 注册导入器, 必须在 import 语句之前执行
sys.meta_path.insert(0, LoggingFinder())

```

### 包内资源 `importlib.resources`

```python
# importlib.resources.open_binary(pkg, resource)  以二进制读方式打开
# importlib.resources.open_text(pkg, resource, encoding)  以文本读方式点开


from importlib import resources
sys.path += ['/User/xxx/xxx/resource_pkg'] # 先讲资源路径添加到 Python 扫描目录
with resources.open_text('resource_pkg.xxx', 'xxx.txt') as res
    print(res.read())

    # or read csv file
    rows = csv.DictReader(res)
    for row in rows:
        print('col1: ', row['col1'])

```

### 延迟导入 lazy import

```python

# 为了节省内存, 模块的延迟加载可以有三种常见的方式：
# - 在函数或方法内部使用import 不推荐, 不利于代码重构, 因为 import 语句散落在各个方法内了
# - 借助包的dunder方法实现导航方式的包级别的模块延迟加载
#       __getattr__, __dir__
# - 借助继承types.ModuleType来自定义懒加载器, 实现模块级别的延迟加载


# ------------------- 借助 dunder method

# define a folder module
mkdir lazymodule
touch lazymodule/__init__.py
touch lazymodule/prodct.py   # 假设这个子模块非常耗费资源, 需要延迟导入

# file __init__.py
import importlib
from types import ModuleType

__all__ = ['prodct'] # 定义需要懒加载的子包名

def __getattr__(attr: str) -> ModuleType:
    if attr in __all__:
        return importlib.import_module(f'lazymodule.{attr}')
    raise ModuleNotFoundError(f'{attr} not found')

def __dir__(self) -> List[str]:
    return __all__

# 这样在其他地方就能正常导入懒加载的模块了






# ---------------- 借助继承types.ModuleType
from types import ModuleType
import importlib
from typing import List, Mapping
class LazyLoader(ModuleType):
    def __init__(self, local_name: str, parent_module_golbals: Mapping, name: str):
        self._local_name = local_name
        self._parent_module_golbals = parent_module_golbals
        super(LazyLoader, self).__init__(name)
    
    # 幂等的, 因为import_module 不会反复注册
    def _load(self):
        module = importlib.import_module(self.__name__)
        self._parent_module_golbals[self._local_name] = module
        self.__dict__.update(modle.__dict__)

        return module

    def __getattr__(self, attr) -> ModuleType:
        mod = self._load()
        return getattr(mod, attr)
    
    def __dir__(self) -> List[str]:
        mod = self._load()
        return dir(mod)

product_module = LazyLoader('product', globals(), 'lazymodule.prodct')
```


### 动态导入 实现插件模式

```python

# importlib.import_module 配合 配置中心入 console , nacos 等等, 可实现根据配置加在指定模块
```


### 导入钩子 import hook

案例: 实现http 远程导入

```python
https://www.bilibili.com/video/BV1M24y117aW
```

### path hook

```python
https://www.bilibili.com/video/BV1zM411C7WC/
```

## `__main__` `__name__` `__file__`

```python
# 当一个module 被导入使用时, 其 __name__ 会被指为模块名字, 即 包名, __file__ 被置为包绝对路径
__name__ == '__main__' 可以用来检测当前模块是否是程序的最高层级环境, 即可用来检测程序的入口
# 什么是最高层级环境?
# - 即启动命令所在环境
#    eg:    python xxx.py
#           python -m xxx.py
#           python -c "if __name__ == '__main__': xxx"
#           echo "if __name == '__main__': xxx" | python



__main__py  是 Python 包的入口文件, 即用 python -m xxx_modle  会从这个入口文件开始执行




# 优雅的定义入口函数

def main() -> int:
    xxx
    return 0
if __name__ == '__main__':
    sys.exit(main())

```


## type hints 类型提示



https://www.zhihu.com/question/265003581/answer/461562594
https://zhuanlan.zhihu.com/p/56863684

https://github.com/python/mypy

https://github.com/google/pytype

https://docs.python.org/zh-cn/3/library/typing.html

```py
# 自python3.5开始，PEP484为python引入了类型注解(type hints)
# 在 vscode 中你可以安装 mypy 的插件,  Mypy 是 Python 中的静态类型检查器, 
    #
    # https://www.cnblogs.com/linkenpark/p/11676297.html
    # 
    # int,long,float: 整型,长整形,浮点型
    # bool,str: 布尔型，字符串类型
    # 
    # typing模块
    # 
    # List, Tuple, Dict, Set, Mapping:列表，元组，字典, 集合, 映射
    # Iterable,Iterator:可迭代类型，迭代器类型
    # Generator：生成器类型
    #
    # ":" 后面是参数类型
    # "->" 是返回值的注释，-> str 意思即是提醒函数使用者返回值会是一个str型
    def f(ham: "传一个字符串", eggs: str = 'eggs') -> str :
        print("Annotations:", f.__annotations__)
        print("Arguments:", ham, eggs)
        return ham + ' and ' + eggs

    print(f("est", 123))

```





## linter 工具

```sh


关注这个公司 https://astral.sh/

    https://github.com/astral-sh/ruff 可以指出无用的引入, 自动修复, 有 vscode 插件 (https://github.com/astral-sh/ruff-vscode)

https://www.pylint.org/


```

## 依赖安全性检查

```sh
https://github.com/pyupio/safety
https://github.com/PyCQA/bandit

```

## 代码风格 格式化

```sh

Python 官方同时推出了一个检查代码风格是否符合 PEP8 的工具，名字也叫 pep8。不推荐了

更推荐
Black 自称“零妥协代码格式化工具（The uncompromising code formatter）”。之所以成为“不妥协”是因为它检测到不符合规范的代码风格直接就帮你全部格式化好，根本不需要你确定，直接替你做好决定
    速度更快
    更少的可配置项


https://pycqa.github.io/isort/ sort imports

https://github.com/asottile/pyupgrade 升级语法

Flake8: 使用Flake8检查代码是否已格式化

```

## 配置文件管理

```sh
https://github.com/dynaconf/dynaconf Dynaconf 动态配置体系 


```


## 测试test

### 单元测试

```sh
Pytest 
    在 unittest 的基础上 增加了大量语法糖，让测试更加简便和灵活。并且带有插件功能，方便集成其他功能。
    能兼容其他大多数测试框架

tox 是通用的虚拟环境管理和测试命令行工具。tox 能够让我们在同一个 Host 上自定义出多套相互独立且隔离的 python 环境，如果你的项目需要兼容多个 python 版本的话强烈推荐使用它



https://github.com/pytest-dev/pytest-cov 覆盖率




```

### 性能压测

https://github.com/locustio/locust

### 集成测试 integration test

```sh

Selenium、Pytest-Selenium、Robot Framework

```

    


## 包管理

https://zhuanlan.zhihu.com/p/683701953 对比

```sh

https://github.com/python-poetry/poetry 类似 Pipevn, 基于虚拟环境, 主要是为了隔离项目开发环境，但如果涉及到虚拟 环境嵌套虚拟环境，问题就难搞了，经常会出现问题
    # 安装最新版 pip
    # -m pip: 使用Python模块的方式来调用pip，即通过pip模块来执行操作。
    # -U: 选项表示要更新已安装的包。如果已经安装了pip，使用-U选项可以将其升级到最新版本。
    python3 -m pip install -U pip
    pip install -U poetry

https://github.com/pdm-project/pdm 不需要虚拟环境 , 像 pnpm 一样的中心化安装缓存，节省磁盘空间
    https://zhuanlan.zhihu.com/p/468445226
    国人作者https://github.com/frostming - https://frostming.com/2020/02-28/pdm-introduction/

https://github.com/mitsuhiko/rye
    https://github.com/astral-sh/uv 代替 pip, 可以集成进入 rye (uv he ruff 都属于一个公司, 现在 rye 也被这个公司接收了)



```

### rye 使用

```sh
# 不生成 src 目录, 用于和 Django 这总框架合作
rye init --virtual

rye init [--script] <proj name>
# 将当前文件夹作为项目根目录
rye init 

# 全局安装
rye install <lib name>
rye uninstall <xxx>

# 安装到当前项目的虚拟环境中
rye add [-d or --dev] <lib name>
    rye add cowsay
rye remove <xxx>
rye sync
rye run <proj name> # 如： rye run quick-start (‘_’ 替换为 ‘-’)
    rye run cowsay --text hellohhhh

rye run <executable name>
# eg. 
rye run black

# list the libs installed in this proj
rye list
# or
# 项目基本信息 (列出安装的依赖)
rye show [--installed-deps]



# 下载 新版Python
rye fetch <py version>
# eg
rye fetch 3.10

# 添加 Python 发行版到 rye, 并使用这个版本
rye +3.10

# 列出 rye 管理的所有发行版 (也可以列出可供 下载的版本)
rye toolchain list [--include-downloadable]
```


### uv





## 日志



```py
def log_handling():
    import logging
    # 有debug，info，warning，error等几个级别，等级由低到高
    # 设定为某个级别, 低于这个级别的不会输出
    logging.basicConfig(level=logging.INFO)
    s = '0'
    n = int(s)
    logging.info('n = %d' % n)
    # print(10 / n)

```


## 生成文档

Mkdocs: 以 Markdown 风格编写文档

https://www.mkdocs.org/

https://squidfunk.github.io/mkdocs-material/ 主题



# 并发

## GIL 简介

## 多线程

```python

def hello(arg):
    print('--hello', arg)

from concurrent.futures import ThreadPoolExecutor
with ThreadPoolExecutor(max_workers=10) as er:
    for i in range(10):
        er.submit(hello, i)
    
```


## 多进程

https://jeremyxu2010.github.io/2020/09/python%E5%A4%9A%E8%BF%9B%E7%A8%8B%E5%AE%9E%E6%88%98/ 自带方式

gevent


https://stackoverflow.com/questions/42680357/increment-counter-for-every-access-to-a-flask-view 通过全局变量加锁, 统计 api 调用次数

```py
def multi_processing():
    """
    在Unix/Linux下，可以使用fork()调用实现多进程。
    要实现跨平台的多进程，可以使用multiprocessing模块。
    进程间通信是通过Queue、Pipes等实现的。
    subprocess模块可以让我们非常方便地启动一个子进程，然后控制其输入和输出。通过communicate()方法输入
    
    """

    import os
    print("主进程 pid = ", os.getpid())
    # fork()调用一次，返回两次，因为操作系统自动把当前
    # 进程（称为父进程）复制了一份（称为子进程），然后，分别在父进程和子进程内返回 process id
    # 子进程永远返回0，而父进程返回子进程的ID
    pid = os.fork()
    if pid ==0:
        print("子进程, id = {}, ppid = {}".format(os.getpid(), os.getppid()))
    else:
        print("父进程, id = {}, son pid = {}".format(os.getpid(), pid))


def multi_processing_windows():
    """跨平台的多进程"""
    from multiprocessing import Process
    import os

    # 子进程要执行的代码
    def run_proc(name):
        print('Run child process %s (%s)...' % (name, os.getpid()))

    print('Parent process %s.' % os.getpid())
    p = Process(target=run_proc, args=('test',))
    p.start()

    p.join() # main process 
    print('Child process end.')

    # 进程池
    #
    from multiprocessing import Pool
    import os, time, random

    def long_time_task(name):
        print('Run task %s (%s)...' % (name, os.getpid()))
        start = time.time()
        time.sleep(random.random() * 3)
        end = time.time()
        print('Task %s runs %0.2f seconds.' % (name, (end - start)))

    if __name__=='__main__':
        print('Parent process %s.' % os.getpid())
        p = Pool(4) # Pool的默认大小是CPU的核数
        for i in range(5):
            p.apply_async(long_time_task, args=(i,))
        print('Waiting for all subprocesses done...')
        p.close()
        p.join()
        print('All subprocesses done.')


def process_comunicate():
    """进程通信"""
    from multiprocessing import Process, Queue
    import os, time, random

    # 写数据进程执行的代码:
    def write(q):
        print('Process to write: %s' % os.getpid())
        for value in ['A', 'B', 'C']:
            print('Put %s to queue...' % value)
            q.put(value)
            time.sleep(random.random())

    # 读数据进程执行的代码:
    def read(q):
        print('Process to read: %s' % os.getpid())
        while True:
            value = q.get(True)
            print('Get %s from queue.' % value)

    # 父进程创建Queue，并传给各个子进程：
    q = Queue()
    pw = Process(target=write, args=(q,))
    pr = Process(target=read, args=(q,))
    # 启动子进程pw，写入:
    pw.start()
    # 启动子进程pr，读取:
    pr.start()
    # 等待pw结束:
    pw.join()
    # pr进程里是死循环，无法等待其结束，只能强行终止:
    pr.terminate()


def muti_thread():
    """
    lock = threading.Lock() 创建锁
    lock.acquire() 获取锁
    lock.release() 释放锁, 一般在 finally中
    多核任务只能用进程, 
    因为:Python的线程虽然是真正的线程，但解释器执行代码时，有一个GIL锁：Global Interpreter Lock，
    任何Python线程执行前，必须先获得GIL锁，然后，每执行100条字节码，解释器就自动释放GIL锁，让
    别的线程有机会执行。这个GIL全局锁实际上把所有线程的执行代码都给上了锁，所以，多线程在Python
    中只能交替执行，即使100个线程跑在100核CPU上，也只能用到1个核
    """

    import time, threading

    def loop():
        print('thread %s is running...' % threading.current_thread().name)
        n = 0
        while n < 5:
            n = n + 1
            print('thread %s >>> %s' % (threading.current_thread().name, n))
            time.sleep(1)
        print('thread %s ended.' % threading.current_thread().name)

    print('thread %s is running...' % threading.current_thread().name)
    # 主线程实例的名字叫MainThread，子线程的名字在创建时指定，我们用LoopThread命名子线程
    t = threading.Thread(target=loop, name='LoopThread')
    t.start()
    t.join()
    print('thread %s ended.' % threading.current_thread().name)



```


## 可变 不可变

```python
from concurrent.futures import ProcessPoolExecutor, as_completed
from multiprocessing import Lock, Manager

lock = Lock()


def mut_sum(chunk: list[int], shared) -> None:
    global lock
    lock.acquire()
    shared['total'] += sum(chunk)
    lock.release()


def immut_sum(chunk: list[int]) -> int:
    return sum(chunk)


def make_chunk(max_num: int, chunk_num=1) -> list[list[int]]:
    data = [i for i in range(max_num + 1)]
    block_size = max_num // chunk_num

    def chunk_data():
        while data:
            block = data[:block_size]
            yield block
            del data[:block_size]

    return list(chunk_data())


def mut_calc(max_num: int, max_workers=4):
    manager = Manager()
    shared = manager.dict()
    shared['total'] = 0
    chunks = make_chunk(max_num, max_workers)
    with ProcessPoolExecutor(max_workers=max_workers) as executor:
        futures = (
            executor.submit(mut_sum, chunk, shared) for chunk in chunks
        )
        for fu in as_completed(futures):
            e = fu.exception()
            if e:
                raise Exception(e)
        return shared['total']


def immut_calc(max_num: int, max_workers=4) -> int:
    chunks = make_chunk(max_num, max_workers)
    with ProcessPoolExecutor(max_workers=max_workers) as executor:
        futures = (
            executor.submit(immut_sum, chunk) for chunk in chunks
        )

        def process_result():
            for fu in as_completed(futures):
                e = fu.exception()
                if e:
                    raise Exception(e)
                yield fu.result()

        return sum(process_result())

```


# 异步 协程

## yield 手动切换

```py

def async_io():
    """
    协程原理:
    在一个死循环中, 主线程不断轮询处理队列中的事件, 
    当遇到IO操作时，代码只负责发出IO请求，不等待IO结果，然后直接结束本轮消息处理，进入下一轮消息处理过程
    当io 完成, 会产生通知进入队列, 别线程处理
    最大的优势就是协程极高的执行效率。因为子程序切换不是线程切换
    第二大优势就是不需要多线程的锁机制，因为只有一个线程，也不存在同时写变量冲突，在协程中控制共享资源不加锁，只需要判断状态就好了
    因为协程是一个线程执行，那怎么利用多核CPU呢？最简单的方法是多进程+协程，既充分利用多核，又充分发挥协程的高效率
    """
    def consumer():
        r = ''
        while True:
            n = yield r # consumer通过yield拿到消息，处理，又通过yield把结果传回
            if not n:
                return
            print('[CONSUMER] Consuming %s...' % n)
            r = '200 OK'

    def produce(c):
        c.send(None) # 启动生成器
        n = 0
        while n < 5:
            n = n + 1
            print('[PRODUCER] Producing %s...' % n)
            # 一旦生产了东西，通过c.send(n)切换到consumer执行
            r = c.send(n)
            print('[PRODUCER] Consumer return: %s' % r)
        # 通过c.close()关闭consumer，整个过程结束
        c.close()

    c = consumer()
    produce(c)


    # 
    #
    # 异步操作需要在coroutine中通过yield from完成；
    # 
    # 多个coroutine可以封装成一组Task然后并发执行。
    #
    import asyncio # asyncio是Python 3.4版本引入的标准库，直接内置了对异步IO的支持。
    # https://github.com/dabeaz/curio 替代者

    @asyncio.coroutine # 把一个generator标记为coroutine类型
                        # 然后在coroutine内部用yield from调用另一个coroutine实现异步操作
    def hello():
        print("Hello world!")
        # 异步调用asyncio.sleep(1), 虽然睡眠1s, 但是主线程并未等待，而是去执行EventLoop中其他可以执行的coroutine了
        # asyncio.sleep()也是一个coroutine
        r = yield from asyncio.sleep(1)
        print("Hello again!")

    # 获取EventLoop:
    loop = asyncio.get_event_loop()
    # 执行coroutine
    loop.run_until_complete(hello())

    # 封装两个coroutine
    # 两个coroutine是由同一个线程并发执行的
    tasks = [hello(), hello()]
    loop.run_until_complete(asyncio.wait(tasks))

    loop.close()

    #async和await是针对coroutine的新语法
    #
    #把@asyncio.coroutine替换为async；
    #把yield from替换为await。
    #
    async def hello1():
        print("Hello world!")
        r = await asyncio.sleep(1)
        print("Hello again!")

    # asyncio可以实现单线程并发IO操作。如果仅用在客户端，发挥的威力不大。
    # 如果把asyncio用在服务器端，例如Web服务器，由于HTTP连接就是IO操作，因此可以用单线程+coroutine实现多用户的高并发支持
    # aiohttp则是基于asyncio实现的HTTP框架
    #
    # 编写一个HTTP服务器:
    #
    # import asyncio

    # from aiohttp import web

    # async def index(request):
    #     await asyncio.sleep(0.5)
    #     return web.Response(body=b'<h1>Index</h1>')

    # async def hello(request):
    #     await asyncio.sleep(0.5)
    #     text = '<h1>hello, %s!</h1>' % request.match_info['name']
    #     return web.Response(body=text.encode('utf-8'))

    # async def init(loop):
    #     app = web.Application(loop=loop)
    #     app.router.add_route('GET', '/', index)
    #     app.router.add_route('GET', '/hello/{name}', hello)
    #     srv = await loop.create_server(app.make_handler(), '127.0.0.1', 8000)
    #     print('Server started at http://127.0.0.1:8000...')
    #     return srv

    # loop = asyncio.get_event_loop()
    # loop.run_until_complete(init(loop))
    # loop.run_forever()

```


## gevent 自动切换

gevent 第三方库

```python
from gevent import monkey
monkey.patch_all() # gevent 无法识别普通的 time.sleep (即无法识别普通系统 io)， 需要打补丁， 若无补丁， 需要调用 sleep 的地方要用 gevent.sleep  代替
import gevent


s1 = gevent.spawn(func_a, func_a_params)
s2 = gevent.spwan(func_b, func_b_params)
gevent.joinall([s1, s2]) # 阻塞等待

```



# 编写命令行程序

https://www.jianshu.com/p/005ecf9cf8aa TODO

## 命令行自动补全

https://www.cnblogs.com/lgh344902118/p/8521437.html

 TODO


# 调试

## 断言

类似 print, 

程序中如果到处充斥着assert，和print()相比也好不到哪去。不过，启动Python解释器时可以用-O参数来关闭assert: `python -O err.py`, 关闭后，可以把所有的assert语句当成pass来看

```python
def foo(s):
    n = int(s)
    # 只能断言 true or false
    # 如果断言失败，assert语句本身就会抛出AssertionError
    assert n != 0, 'n is zero!'
    return 10 / n

def main():
    foo('0')

# 运行时，关闭assert
$ python3 -O err.py
Traceback (most recent call last):
  ...
ZeroDivisionError: division by zero
```

## 设置断点 pdb

启动Python的调试器pdb `python -m pdb err.py`, 输入命令l来查看代码, 输入命令n可以单步执行代码, 何时候都可以输入命令p 变量名来查看变量, 输入命令q结束调试，退出程序

pdb.set_trace() 设置断点

```python
# err.py
import pdb

s = '0'
n = int(s)
pdb.set_trace() # 运行到这里会自动暂停
print(10 / n)

$ python3 err.py
> /Users/michael/Github/learn-python3/samples/debug/err.py(7)<module>()
-> print(10 / n)# 此时进入调试模式
(Pdb) p n # p查看变量
0
(Pdb) c # c 继续运行
Traceback (most recent call last):
  File "err.py", line 7, in <module>
    print(10 / n)
ZeroDivisionError: division by zero

```



# jinja2 模板

渲染使用：

```py
# FileSystemLoader：文件系统加载器
# 不需要模板文件存在某个Python包下，可以直接访问系统中的文件

# PackageLoader：包加载器
from jinja2 import PackageLoader,Environment
# 两个参数为：python包的名称，以及模板目录名称
env = Environment(loader=PackageLoader('python_project','templates'))    # 创建一个包加载器对象
template = env.get_template('bast.html')    # 获取一个模板文件
template.render(name='daxin',age=18)   # 渲染


```

模板语法：

```py
# 三种语法
# 控制结构 {% %}
# 变量取值{{}}
# 注释 {# #}

# 循环
# 迭代列表
<ul>
{% for user in users %}
<li>{{ user.username|title }}</li>
{% endfor %}
</ul>
# 迭代字典
<dl>
{% for key, value in my_dict.iteritems() %}
<dt>{{ key }}</dt>
<dd>{{ value}}</dd>
{% endfor %}
</dl>

# 过滤器 就是内置函数
# safe: 渲染时值不转义
# capitialize: 把值的首字母转换成大写，其他子母转换为小写
# lower: 把值转换成小写形式
# upper: 把值转换成大写形式
# title: 把值中每个单词的首字母都转换成大写
# trim: 把值的首尾空格去掉
# striptags: 渲染之前把值中所有的HTML标签都删掉
# join: 拼接多个值为字符串
# replace: 替换字符串的值
# round: 默认对数字进行四舍五入，也可以用参数进行控制
# int: 把值转换成整型

{{ 'abc' | captialize  }}
# Abc

{{ 'abc' | upper  }}
# ABC

{{ 'hello world' | title  }}
# Hello World

{{ "hello world" | replace('world','daxin') | upper }}
# HELLO DAXIN

{{ 18.18 | round | int }}
# 18


# 宏类似于Python中的函数，我们在宏中定义行为，还可以进行传递参数，就像Python中的函数
# 定义
{% macro input(name,age=18) %}   # 参数age的默认值为18
 <input type='text' name="{{ name }}" value="{{ age }}" >
{% endmacro %}
# 调用
<p>{{ input('daxin') }} </p>
<p>{{ input('daxin',age=20) }} </p>

# 继承和super函数
# 模板继承。模板继承允许我们创建一个基本(骨架)文件，其他文件从该骨架文件继承，然后针对自己需要的地方进行修改

# 骨架
# 定义了四处 block，即：head，title，content，footer
<!DOCTYPE html>
<html lang="en">
<head>
    {% block head %}
    <link rel="stylesheet" href="style.css"/>
    <title>{% block title %}{% endblock %} - My Webpage</title>
    {% endblock %}
</head>
<body>
<div id="content">{% block content %}{% endblock %}</div>
<div id="footer">
    {% block  footer %}
    <script>This is javascript code </script>
    {% endblock %}
</div>
</body>
</html>

# 新建文件继承
{% extend "base.html" %}       # 继承base.html文件

{% block title %} Dachenzi {% endblock %}   # 定制title部分的内容

{% block head %}
    {{  super()  }}        # 用于获取原有的信息
    <style type='text/css'>
    .important { color: #FFFFFF }
    </style>
{% endblock %}

# 其他不修改的原封不动的继承

```

# 路径问题

## 文件路径 and 终端路径

需要用命令行操作的时候，也就有参数 argv的时候，我们要求终端路径和Python文件路径一致。命令行运行程序的格式是：python+Python文件名+参数

## 获取脚本位置

```py
if __name__ == '__main__':
    import sys
    import os

    # 不适用于 命令行程序,
    print(sys.argv)    # ['D:/repo/repo_github/shared_already/rest-api-generator/test_jinja.py']
    # 获得的是当前执行脚本的位置
    # 若在命令行, 打印的是 'py xxx'命令中的 xxx
    print(sys.argv[0])    # D:/repo/repo_github/shared_already/rest-api-generator/test_jinja.py

    # python 查找库的路径, 第一个是当前项目路径
    print(sys.path)
    print(sys.path[0])  # D:\repo\repo_github\shared_already\rest-api-generator

    # 判断为脚本文件还是py2exe编译后的文件，如果是脚本文件，
    # 则返回的是脚本的目录，如果是py2exe编译后的文件，则返回的是编译后的文件路径
    cur_path = sys.path[0]
    if os.path.isdir(cur_path):
        print('current project dir: [{}]'.format(cur_path))
    elif os.path.isfile(cur_path):
        dirname = os.path.dirname(cur_path)
        print('current project dir: [{}]'.format(dirname))

    # 当前工作目录
    # 若要改变当前工作路径，可以用：os.chdir(path)
    print(os.getcwd())
    print(os.path.abspath(os.curdir))
    print(os.curdir)  # 相对路径
    print(os.path.abspath('.'))
    # 父目录
    print(os.path.abspath('..'))


```

# shutil 使用

TODO

```py
# 递归删除目录

import shutil  
shutil.rmtree('要清空的文件夹名')  # 先删除
os.mkdir('要清空的文件夹名')  # 再重建

import os
for root, dirs, files in os.walk(top, topdown=False):
    for name in files:
        os.remove(os.path.join(root, name))
    for name in dirs:
        os.rmdir(os.path.join(root, name))

# 移动文件夹
shutil.move('原文件夹/原文件名','目标文件夹/目标文件名') 

```


# web 开发

https://www.zhihu.com/question/20706333/answer/24927602 有哪些框架
https://www.zhihu.com/question/41564604/answer/660256963 对比

- Flask: 小而美, 适合小站点, 开发web服务的API, 和 nosql配合良好

- Django: 大而全, 自带 template, orm, 适合开发企业级网站, 适合 sql, 无法配合nosql数据库

- Torando: 原生异步非阻塞，在IO密集型应用和多任务处理上占据绝对性的优势，属于专注型框架

    websockets 长连接;

    内嵌了HTTP服务器


## 用Python写ui

```python


https://github.com/streamlit/streamlit 最火

https://github.com/gradio-app/gradio

https://github.com/plotly/dash 制作数据图表,统计表

https://github.com/kivy/kivy ui 框架

https://github.com/pydantic/FastUI
```

## litestar

https://github.com/litestar-org/litestar  和 fastapi 类似的定位和功能，但提供更多的日常开发组件，更健康的社区贡献构成，长期看好


## fastapi


开发 rest api 非常方便 https://juejin.cn/post/6844904051327369224

https://github.com/nsidnev/fastapi-realworld-example-app

## Django

```sh
# 升级 pip 到 v21
python -m pip install --upgrade pip

pip install Django

# 创建模板代码
# 末尾 . 表示当前目录, 可选
# django_demo 为项目名, 一般和当前文件夹名保持一致
django-admin startproject django_demo .

# 启动开发服务器
python manage.py runserver [[0:]8080]

# 创建 demo app: polls 的模板代码
python manage.py startapp polls

# 检查 INSTALLED_APPS 设置，为其中的每个应用创建需要的数据表/更新表结构
python manage.py migrate

# 为指定 app 创建 迁移文件(模型数据, 用于生成 SQL), polls 是自定义 app name
python manage.py makemigrations polls

#  查看 SQL
python manage.py sqlmigrate polls 0001


# 通过模型 api 操作数据库
python manage.py shell
```


## flask


https://github.com/humiaozuzu/awesome-flask

https://github.com/yangyuexiong/Flask_BestPractices 中文

### flask解决跨域问题

https://blog.csdn.net/h18208975507/article/details/102551339

### 保护 flask api

https://blog.miguelgrinberg.com/post/restful-authentication-with-flask
https://geekflare.com/securing-flask-api-with-jwt/


### 命令行or idea 启动


```sh
export FLASK_APP=hello.py

# optional, enable debug mode
export FLASK_ENV=development

# default port -> 5000
flask run [--host=0.0.0.0]


```

通过  idea 启动, 默认是基于 flask 框架启动 (即右键运行默认是Flask执行项目), 不会走 main 方法

若希望走 main 方法, 需要手动配置 启动 configuration

### rest api

https://www.jianshu.com/p/a25357f2d930 jsonify 相比直接返回 dict/json.dump({}) 的好处


解析请求参数
```python
def request_parse(req_data):
	'''解析请求数据并以json形式返回'''
    if req_data.method == 'POST':
        data = req_data.json
    elif req_data.method == 'GET':
        data = req_data.args
    return data
   
@app.route('/', methods = ["GET","POST"])   # GET 和 POST 都可以
def get_data():
	data = request_parse(request)
	# 假设有如下 URL
    # http://10.8.54.48:5000/index?name=john&age=20
    name = data.get("name")
    age = data.get("age")

```


https://blog.csdn.net/pineapple_C/article/details/113339718 拦截器

### 数据库交互



https://www.jianshu.com/p/f7ba338016b8 orm 框架 SQLAlchemy


https://xieyugui.wordpress.com/2015/04/17/sqlalchemy-%E4%BD%BF%E7%94%A8%E5%8A%A8%E6%80%81model%E5%92%8C%E5%8A%A8%E6%80%81%E5%88%9B%E5%BB%BA%E8%A1%A8/ 使用动态model和动态创建表

```py
# 原生sql语句操作
sql = 'select * from user'
result = db.session.execute(sql)

# 查询全部
User.query.all()
# 主键查询
User.query.get(1)

# 条件查询
User.query.filter_by(username='name').all() # or first()
#                                 ><（大于和小于）查询    and_和or_查询, in_
# filter_by()	直接用属性名，比较用=	不支持	不支持
# filter()	用类名.属性名，比较用==	    支持	支持

# 多条件查询
from sqlalchemy import and_
User.query.filter_by(and_(User.username =='name',User.password=='passwd'))
# 比较查询
User.query.filter(User.id.__lt__(5)) # 小于5
User.query.filter(User.id.__le__(5)) # 小于等于5
User.query.filter(User.id.__gt__(5)) # 大于5
User.query.filter(User.id.__ge__(5)) # 大于等于5
# in查询
User.query.filter(User.username.in_('A','B','C','D'))
# 排序
User.query.order_by('age') # 按年龄排序，默认升序，在前面加-号为降序'-age'
# 限制查询
User.query.filter(age=18).offset(2).limit(3)  # 跳过二条开始查询，限制输出3条

https://blog.csdn.net/qq_41856814/article/details/101226416 分页查询

# 增加
use = User(id,username,password)
db.session.add(use)
db.session.commit() 

# 删除
User.query.filter_by(User.username='name').delete()

# 修改
User.query.filter_by(User.username='name').update({'password':'newdata'})


```


https://github.com/miguelgrinberg/Flask-Migrate Flask-Migrate 数据迁移, 根据 model 创建 table
https://blog.csdn.net/feit2417/article/details/86592319

```sh
# db 是代码中的 migration command name

# 生成 migrations 文件夹
python3 manage.py db init

python3 manage.py db migrate
python3 manage.py db upgrade
# 后续对脚本有任何的修改，只要重复执行后两句就可以了

# 其他指令
manage.py db: error: invalid choice: 'migration' (choose from 'init', 'revision', 'migrate', 'edit', 'merge', 'upgrade', 'downgrade', 'show', 'history', 'heads', 'branches', 'current', 'stamp')


```


https://www.jianshu.com/p/a681f6490c3c Flask-script
https://zhuanlan.zhihu.com/p/269820011



https://stackoverflow.com/questions/17972020/how-to-execute-raw-sql-in-flask-sqlalchemy-app?rq=1 执行原生 SQL



### flask 中的日志

https://www.jianshu.com/p/daf5c9e57c65

```py
app.logger.info('')
# 打印堆栈
app.logger.exception('')
app.logger.debug('A value for debugging')
app.logger.warning('A warning occurred (%d apples)', 42)
app.logger.error('An error occurred')

```


日志切分:

- 按照大小


```py
from logging.handlers import RotatingFileHandler 
# backupCount 就是保留的日志个数。 比如flask.log 写满了， 就会被重命名成flask.log.1, 程序继续向flask.log写入。
handler = RotatingFileHandler("flask.log", maxBytes=1024000, backupCount=10)
```



- 按照日期


```py
from logging.handlers import TimedRotatingFileHandler
handler = TimedRotatingFileHandler(
        "flask.log", when="D", # when=D： 表示按天进行切分
        interval=1,  # 每天都切分。 比如interval=2就表示两天切分一下
         backupCount=15 , # 保留15天的日志
        encoding="UTF-8", # 使用UTC+0的时间来记录 （一般docker镜像默认也是UTC+0)
        delay=False, utc=True)
```


`# [%(asctime)s][%(filename)s:%(lineno)d][%(levelname)s][%(thread)d] - %(message)s` 格式配置

```py

if __name__ == '__main__':
    formatter = logging.Formatter(
        "[%(asctime)s][%(filename)s:%(lineno)d][%(levelname)s][%(thread)d] - %(message)s")
        # (%(hostname)s)[%(asctime)s][%(filename)s:%(lineno)d][%(levelname)s][%(thread)d] - %(message)s 增加了 hostname
    handler = TimedRotatingFileHandler(
        "flask.log", when="D", interval=1, backupCount=15,
        encoding="UTF-8", delay=False, utc=True)
    handler.setFormatter(formatter)
    app.logger.addHandler(handler)
    app.run(host='0.0.0.0', port=5001, debug=True)



# 也可通过 自定义 log filter 定制 日志
# 首先自定义一个LogFilter
class ContextFilter(logging.Filter):
    '''Enhances log messages with contextual information'''
    def filter(self, record):
        record.hostname = "my-windows-10"
        return True

# 在main函数之中， 增加加载这个filter即可
handler.addFilter(ContextFilter())

```



SMTPHandler跟HTTPHandler 发送邮件 或者 http


```py

if __name__ == '__main__':
    app.debug = True

    # File and Console handler &amp; formtter
    formatter = logging.Formatter(
        "[%(asctime)s][%(module)s:%(lineno)d][%(levelname)s][%(thread)d] - %(message)s")
    handler = TimedRotatingFileHandler(
        "flask.log", when="D", interval=1, backupCount=15,
        encoding="UTF-8", delay=False, utc=True)
    app.logger.addHandler(handler)
    handler.setFormatter(formatter)

    # Email Handler
    mail_handler = SMTPHandler(
        mailhost='10.64.1.85',
        fromaddr='flask-admin@trendmicro.com',
        toaddrs=['wenjun_yang@trendmicro.com'],
        subject='Flask Application Error'
    )
    mail_handler.setLevel(logging.ERROR)
    mail_handler.setFormatter(logging.Formatter(
        "[%(asctime)s][%(module)s:%(lineno)d][%(levelname)s][%(thread)d] - %(message)s"
    ))
    app.logger.addHandler(mail_handler)

    app.run()
```

### blueprint蓝图 模块化开发

https://realpython.com/flask-blueprint/

### 上下文对象

https://sentry.io/answers/working-outside-of-application-context/ current_app 使用 (`RuntimeError: working outside of application context`报错)

https://github.com/tiangolo/fastapi/issues/81 使用 app 上下文存储数据


每次 请求都是新的(蕾西 java 的 threadlocal), app 是真个应用全局生命周期的

https://zhuanlan.zhihu.com/p/26097310
https://www.zhihu.com/question/33970027



# db 驱动 问题

mac 无法安装 postgres 驱动

驱动在这: https://pypi.org/project/psycopg2/, 需要首先安装 postgres  `brew install postgres`, 设置 path, 然后安装 ([参考](https://www.psycopg.org/docs/install.html#install-from-source))

如果还是不行 `pip install psycopg2-binary==2.8.3` ([参考](https://stackoverflow.com/questions/34304833/failed-building-wheel-for-psycopg2-macosx-using-virtualenv-and-pip))


# 爬虫 spider crawler

https://www.cnblogs.com/dyd168/p/15021673.html xpath 语法


# 代替 shell 运维

https://www.oschina.net/translate/python-scripts-replacement-bash-utility-scripts
https://blog.51cto.com/dashui/2334754
https://www.cnblogs.com/jacktian-it/articles/10222930.html

https://github.com/lalor/python_for_linux_system_administration 书籍


## 实用脚本

https://zhuanlan.zhihu.com/p/85728888
TODO

### 命令行参数解析

```py
# $# 取参数数量
len(sys.argv)

# $0 取第0个参数
sys.argv[0]



```

### 路径

```py
# 获取脚本所在路径
import os
script_dir = os.path.split(os.path.realpath(__file__))[0]
os.chdir(script_dir)

# 展开用户路径，方便跨平台
print(os.path.expanduser('~/.config'))


# 匹配文件名
import glob
for name in glob.glob('dir/*'):
    print (name)
```

### 文件操作

推荐 shutil 模块, 代替很多shell的文件操作命令，可以避免特殊情况字符转义带来的困扰

```py
# 检查文件是否存在
os.path.exists(file)

# rm -rf
os.system("rm -rf foo/")
shutil.rmtree("foo", ignore_errors=True)

# 打开文件读出每行内容
with open("./xxx.log") as file_obj:
    xxx_list = file_obj.read().splitlines()

# 列出目录下文件
os.listdir()
['pkgsync', 'hosts', 'pkglist-aur.json', 'apply-pkgsync.sh', 'pkglist.json', 'rootfs', 'private', '.vscode', '.git', 'home', 'stow_all.sh', '.gitignore', 'local_rootfs', 'rime', 'i3', '.gitmodules', 'README.md']

# 自顶向下，遍历文件夹，path是路径，dir_list是目录列表，file_list是文件列表
g = os.walk(script_dir)
for path,dir_list,file_list in g:
    for dir in dir_list:
        print(os.path.join(path, file_name))        
```

### sh 命令执行

```py
# system命令同步执行命令，返回值为程序退出码
if os.system("echo abc") != 0:
    print("error: execute")
    exit(1)

# subprocess执行命令
import subprocess
res = subprocess.Popen('uptime', shell=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE, close_fds=True)
result = res.stdout.readlines()

# check_call()例子，编译执行测试用例，当shell来用，check_call()会在执行返回错误时抛出错误
for test in tests:
    os.chdir(os.path.join(script_dir, test))
    output = subprocess.check_call(f"make", shell=True)
    output = subprocess.check_call(f"./test_case", shell=True)

# 需要获取打印出的数据时，还可以用check_output()，比如这里获取文件列表
res = subprocess.check_output('find . -maxdepth 2 -name rootfs', shell=True).decode()
rootfs_dirs = res.strip().split('\n')

# todo: 使用第三方sh模块 http://amoffat.github.io/sh/
```

## 传递命令行参数

通过 sys.stdin, sys.stdout

参数处理库: optparse.OptionParser, argparse, click

```py
if __name__ == "__main__":
    # 初始化一个names的字典，内容为空
    # 字典中为name和出现数量的键值对
    names = {}
    # sys.stdin是一个文件对象。 所有引用于file对象的方法，
    # 都可以应用于sys.stdin.
    for name in sys.stdin.readlines():
            # 每一行都有一个newline字符做结尾
            # 我们需要删除它
            name = name.strip()
            if name in names:
                    names[name] += 1
            else:
                    names[name] = 1

    # 迭代字典,
    # 输出名字，空格，接着是该名字出现的数量
    for name, count in names.iteritems():
            sys.stdout.write("%d\t%s\n" % (count, name))

```

`cat names.log | python namescount.py | sort -rn`



```python
或者借助 
arg = sys.argv[2] if len(sys.argv) >= 2  # 下标从 0 开始


```

## shell 调用 Python 

### shel 读取 Python 函数返回值

```py


```

```sh


```

### 统计出现次数

```py
#!/usr/bin/env python
import sys

if __name__ == "__main__":
    # 初始化一个names的字典，内容为空
    # 字典中为name和出现数量的键值对
    names = {}
    for name in sys.stdin.readlines():
            # 每一行都有一个newline字符做结尾
            # 我们需要删除它
            name = name.strip()
            if name in names:
                    names[name] += 1
            else:
                    names[name] = 1

    # 迭代字典,
    # 输出名字，空格，接着是该名字出现的数量
    for name, count in names.iteritems():
            sys.stdout.write("%d\t%s\n" % (count, name))
```

`cat names.log | ./xxx.py`


### 读取 csv 文件

获取指定列

`cat xxx.csv | ./xxx.py 2`

```py
#!/usr/bin/env python
# CSV module that comes with the Python standard library
import csv
import sys


if __name__ == "__main__":
    # CSV模块使用一个reader对象作为输入
    # 在这个例子中，就是 sys.stdin.
    csvfile = csv.reader(sys.stdin)

    # 这个脚本必须接收一个参数，指定列的序号
    # 使用sys.argv获取参数.
    column_number = 0
    if len(sys.argv) > 1:
            column_number = int(sys.argv[1])

    # CSV文件的每一行都是用逗号作为字段的分隔符
    for row in csvfile:
            print row[column_number]

```


## Python 调用 shell


### subprocess 

推荐

python 3.0 之后使用 subprocess代替 commands (commands 仅仅适用于 Linux, python 3.0 之后移除此命令，使用 subprocess 代替)

python 3.x 使用 subprocess 创建一个新进程, 允许创建很多子进程，创建的时候能指定子进程和子进程的输入、输出、错误输出管道，执行后能获取输出结果和执行状态。

```py
#!/usr/bin/python3


subprocess.run()	Python 3.5中新增的函数。执行指定的命令，等待命令执行完成后返回一个包含执行结果的CompletedProcess类的实例。
subprocess.call()	执行指定的命令，返回命令执行状态，其功能类似于os.system(cmd)。
subprocess.check_call()	Python 2.5中新增的函数。 执行指定的命令，如果执行成功则返回状态码，否则抛出异常。其功能等价于subprocess.run(..., check=True)。
subprocess.check_output()	Python 2.7中新增的的函数。执行指定的命令，如果执行状态码为0则返回命令执行结果，否则抛出异常。
subprocess.getoutput(cmd)	接收字符串格式的命令，执行命令并返回执行结果，其功能类似于os.popen(cmd).read()和commands.getoutput(cmd)。
subprocess.getstatusoutput(cmd)	执行cmd命令，返回一个元组(命令执行状态, 命令执行结果输出)，其功能类似于commands.getstatusoutput()。




import subprocess as sp


# subprocess.run()：python3.5中新增的函数， 执行指定的命令， 等待命令执行完成后返回一个包含执行结果的CompletedProcess类的实例
# Popen 的简化版本
#执行ls -l /dev/null 命令
>>> subprocess.run(["ls", "-l", "/dev/null"])
# crw-rw-rw-  1 root  wheel    3,   2  5  4 13:34 /dev/null
# CompletedProcess(args=['ls', '-l', '/dev/null'], returncode=0)


# 执行 shell 命令, 打印输出到 stdout, 类似 os.system
# shell=True意思是shell下执行command, 如果command不是一个可执行文件，shell=True是不可省略的。
code = sp.call("ls -al", shell=True)
# <=> sp.call(["ls", "-al"])
print(code) # 0

# 异步执行, 打印到 stdout
# 0，1，2。其中0代表正确执行，1和2都是错误执行，2通常是没有读取到文件
result = sp.Popen("ls -al", shell=True) # 异步执行
print(result.returncode) # None 这步不会阻塞
print(result.wait()) # 0 阻塞

# 获取输出
# 设置输出到管道
proc = sp.Popen("ls -al", stdout=sp.PIPE, shell=True)
print(proc.stdout.readline())

proc1 = sp.Popen("ls -al", stdout=sp.PIPE, shell=True)
(stdout, stderr) = proc1.communicate("..")
print(stdout)


# ##############




```

### os.system


```py

# 这个调用相当直接，且是同步进行的，程序需要阻塞并等待返回 ( os.system() 这个方法是阻塞当前主进程执行的，只有该命令执行完毕，主进程才会继续执行)


#!/usr/bin/python3

import os

# output to stdout
# 0表示shell指令成功执行，256表示未找到，该方法适用于shell命令不需要输出内容的场景。
#       没有找到时，sh 命令返回的状态码是1，而python调用，返回的是：256 , 这是一点区别
status = os.system("ls -al")
print(status) # 0 

os.system('ping -c 2 www.baidu.com &>/dev/null')
print("block until ping finished")

ret = os.system('cat hello.sh | grep "ooo"')
print(ret) # 256, 
ret1 = os.system('cat hello.sh | grep "c 1"')
print(ret1) # 0



# 执行 shell 脚本
os.system("./hello.sh")

# 改变当前工作目录到指定的路径
# <=> cd ..
access = os.chdir("..") # 如果允许访问返回 True , 否则返回False

# 查看当前工作目录
retval = os.getcwd()

# 权限
# 不如直接 os.system("chmod ...")
# import stat
# os.chmod("./hello.sh", stat.S_IRWXU)

# 更改所属用户, 需要 root 权限执行
# os.chown()

# 更改当前进程的根目录为指定的目录，使用该函数需要管理员权限
# os.chroot()

```

### os.popen


```py
# 异步执行命令, 
# 拿到命令执行输出
#  os.popen() 返回的是 file read 的对象，对其进行读取 read() 的操作可以看到执行的输出。这个方法是后台执行，不影响后续脚本运行
output = os.popen("ping -c1 www.baidu.com &>/dev/null")
print("popen -- nonblock")
# readlines() 也可
print(output.read()) # 获取终端输出
print("popen -- block until output.read() end")

# popen需要关闭close().当执行成功时，close()不返回任何值，失败时，close()返回系统返回值
output.close()

```

### system

```py
def cd(dir): system.command('cd {}'.format(dir))

```



### sh

```py
# 使用 sh 包
```

### paramiko

https://github.com/paramiko/paramiko
https://www.cnblogs.com/xiao-apple36/p/9144092.html

https://www.yisu.com/zixun/12641.html
https://www.cnblogs.com/liangyy09/p/13921693.html

pip3 install paramiko


```py
# paramiko包含两个核心组件：SSHClient和SFTPClient。

常用参数
hostname 连接的目标主机
port=SSH_PORT 指定端口
username=None 验证的用户名
password=None 验证的用户密码
pkey=None 私钥方式用于身份验证
key_filename=None 一个文件名或文件列表，指定私钥文件
timeout=None 可选的tcp连接超时时间
allow_agent=True, 是否允许连接到ssh代理，默认为True 允许
look_for_keys=True 是否在~/.ssh中搜索私钥文件，默认为True 允许
compress=False, 是否打开压缩


set_missing_host_key_policy()：设置远程服务器没有在know_hosts文件中记录时 (连接的远程主机没有本地主机密钥或HostKeys对象) 的应对策略。目前支持三种策略：

    AutoAddPolicy 自动添加主机名及主机密钥到本地HostKeys对象，不依赖load_system_host_key的配置。即新建立ssh连接时不需要再输入yes或no进行确认
    WarningPolicy 用于记录一个未知的主机密钥的python警告。并接受，功能上和AutoAddPolicy类似，但是会提示是新连接
    RejectPolicy 自动拒绝未知的主机名和密钥，依赖load_system_host_key的配置。此为默认选项

exec_command()：在远程服务器执行Linux命令的方法。

# 
# 
# 
# 
# 


# 利用SSHClient对象的open_sftp()方法，可以直接返回一个基于当前连接的sftp对象，可以进行文件的上传等操作
open_sftp()：在当前ssh会话的基础上创建一个sftp会话。该方法会返回一个SFTPClient对象。
sftp = client.open_sftp()
sftp.put('test.txt','text.txt')

from_transport(cls,t) 创建一个已连通的SFTP客户端通道
put(localpath, remotepath, callback=None, confirm=True) 将本地文件上传到服务器 参数confirm：是否调用stat()方法检查文件状态，返回ls -l的结果
get(remotepath, localpath, callback=None) 从服务器下载文件到本地
mkdir() 在服务器上创建目录
remove() 在服务器上删除目录
rename() 在服务器上重命名目录
stat() 查看服务器文件状态
listdir() 列出服务器目录下的文件

# 
# 
# 
# 

import paramiko
 
   # 实例化SSHClient
   client = paramiko.SSHClient()
 
   # 自动添加策略，保存服务器的主机名和密钥信息，如果不添加，那么不再本地know_hosts文件中记录的主机将无法连接
   client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
 
   # 连接SSH服务端，以用户名和密码进行认证
   client.connect(hostname='192.168.1.105', port=22, username='root', password='123456')
 
   # 打开一个Channel并执行命令
   stdin, stdout, stderr = client.exec_command('df -h ')  # stdout 为正确输出，stderr为错误输出，同时是有1个变量有值
 
   # 打印执行结果
   print(stdout.read().decode('utf-8'))
 
   # 关闭SSHClient
   client.close()


# ###########################


# 配置私人密钥文件位置
private = paramiko.RSAKey.from_private_key_file('/Users/ch/.ssh/id_rsa')
 
#实例化SSHClient
client = paramiko.SSHClient()
 
#自动添加策略，保存服务器的主机名和密钥信息，如果不添加，那么不再本地know_hosts文件中记录的主机将无法连接
client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
 
#连接SSH服务端，以用户名和密码进行认证
client.connect(hostname='10.0.0.1',port=22,username='root',pkey=private)


#############################

# SSHClient 封装 Transport
# 创建一个通道
   transport = paramiko.Transport(('hostname', 22))
   transport.connect(username='root', password='123')
 
   ssh = paramiko.SSHClient()
   ssh._transport = transport
 
   stdin, stdout, stderr = ssh.exec_command('df -h')
   print(stdout.read().decode('utf-8'))
 
   transport.close()

################################################################

# 获取Transport实例
tran = paramiko.Transport(('10.0.0.3', 22))
 
# 连接SSH服务端，使用password
tran.connect(username="root", password='123456')
# 或使用
# 配置私人密钥文件位置
private = paramiko.RSAKey.from_private_key_file('/Users/root/.ssh/id_rsa')
# 连接SSH服务端，使用pkey指定私钥
tran.connect(username="root", pkey=private)
 
# 获取SFTP实例
sftp = paramiko.SFTPClient.from_transport(tran)
 
# 设置上传的本地/远程文件路径
localpath = "/Users/root/Downloads/1.txt"
remotepath = "/tmp/1.txt"
 
# 执行上传动作
sftp.put(localpath, remotepath)
# 执行下载动作
sftp.get(remotepath, localpath)
 
tran.close()
```

## 部署 springboot

```py
#!/usr/bin/python
# -*- coding:utf-8 -*-
import os,sys,time,commands
from sys import argv
 
times = time.strftime('%Y年%m月%d日%H:%M:%S')
_jdkpath_ = '填写你的JDK路径'
_processpath_ = 'jar包名字'
_fileDir_ = 'jar包所在路径'
_jarpath_ = _fileDir_ + _processpath_
_logpath_ = _fileDir_ + '日志路径'
_gclog_   = _fileDir_ + 'gc日志路径'
_jarvar_ = '-Xms256m -Xmx640m -Xss256K -XX:MetaspaceSize=128m -XX:MaxMetaspaceSize=256m -XX:+UseAdaptiveSizePolicy'
 
def getpid():
    pid = commands.getoutput("ps aux | grep %s | grep -v grep | awk '{print $2}'" % _processpath_)
    return pid
 
def _status_():
    j_pid = getpid()
    if j_pid == '':
        print("%s没有运行" % _processpath_)
    else :
        print("%s进程pid值:" % _processpath_ + getpid())
 
def _start_():
    j_pid = getpid()
    if j_pid != '':
        print("%s已经在运行..." % _processpath_)
    else :
        print("启动%s......" % _processpath_)
        time.sleep(4)
        if os.system('%s -jar -XX:+PrintGCDetails -Xloggc:%s %s %s > %s 2>&1 &' % (_jdkpath_,_gclog_,_jarvar_,_jarpath_,_logpath_)) == 0:
            print("启动%s成功,进程pid值:" % _processpath_ + getpid())
 
def _stop_():
    s_pid = getpid()
    if s_pid == '':
        print("%s没有运行" % _processpath_)
    else :
        print("关闭%s......" % _processpath_)
        os.system('kill -9 ' + s_pid)
	os.system('echo "">%s && echo "">%s' % (_gclog_,_logpath_))
        time.sleep(2)
        if s_pid != '0':
            print("关闭%s成功" % _processpath_)
        else :
            print("关闭%s失败" % _processpath_)
 
def _restart_():
    _stop_()
    time.sleep(2)
    _start_()
 
if argv == "-h" or argv == "--help" or len(argv)==1:
    print "☻☻☻请别害怕,这只是个简单的脚本,对应用和系统都是无损的☻☻☻\n%s,温馨提示用法:%s {start|stop|restart|status}" % (times,argv[0])
 
elif argv[1] == 'start':
    _start_()
elif argv[1] == 'stop':
    _stop_()
elif argv[1] == 'restart':
    _restart_()
elif argv[1] == 'status':
    _status_()
else: 
    print "☻☻☻请别害怕,这只是个简单的脚本,对应用和系统都是无损的☻☻☻\n%s,温馨提示用法:%s {start|stop|restart|status}" % (times,argv[0])
```



# 开源库

https://www.zhihu.com/question/24590883
TODO

https://pypi.org/


## 日期时间

https://github.com/ariebovenberg/whenever


## 爬虫 crawler

https://github.com/ultrafunkamsterdam/undetected-chromedriver 一个经过优化的 Selenium WebDriver 补丁，专门用于防止浏览器自动化过程中，触发反机器人机制。它能够隐藏浏览器特征（指纹），使用起来十分方便，就像一个 Python 的第三方库一样

## 变声 语音合成

https://github.com/RVC-Project/Retrieval-based-Voice-Conversion-WebUI

## 系统运维

```
https://github.com/giampaolo/psutil 获取系统信息, 硬盘, 内存 ...
```

## 声音

https://github.com/CorentinJ/Real-Time-Voice-Cloning 克隆声音

## 图像

- Matplotlib 可视化库，可以用来绘制高质量的 2D 折线图、散点图、柱状图，或者用来显示图像
- pil 图像处理库, 适用于 Python2, py3 则安装 pillow
- opencv-python `import cv2`
- Removebg 抠图

## 数据模型定义

https://github.com/samuelcolvin/pydantic/ 使得实例化数据 model 对象更方便

https://blog.csdn.net/codename_cys/article/details/107675748
https://blog.csdn.net/swinfans/article/details/89629641

> valideer库、marshmallow库、trafaret库以及cerberus库等都可以完成相似的功能，但是相较之下，pydantic库的执行效率会更加优秀一些


https://www.kevin7.net/post_detail/pydantic-with-flask
https://github.com/bauerji/flask_pydantic 校验请求参数
https://medium.com/swlh/parsing-rest-api-payload-and-query-parameters-with-flask-better-than-marshmallow-aa79c889e3ca


## 序列化反序列化

pickle

https://github.com/ICRAR/ijson 高性能解析 json

## 做 web 开发

https://github.com/pydantic/FastUI 生成 基于 react 的页面

Django 大一统解决方案

flask  rest api

https://github.com/pynecone-io/pynecone 纯 py 实现 web

https://streamlit.io/       为脚本制作 ui 界面

# 调Java

## jpype

https://github.com/jpype-project/jpype

## jython

相互调用

https://www.py4j.org/getting_started.html run java lib in py


run py script in java

```xml
<dependency>
            <groupId>org.python</groupId>
            <artifactId>jython</artifactId>
            <version>2.7.2</version>
        </dependency>

```

```java
public class App {

    /**
     * 初始化
     */
    static void initInterpreter() {
        Properties props = new Properties();
        props.put("python.home", pyPath() + "py_lib");
        props.put("python.console.encoding", "UTF-8");
        props.put("python.security.respectJavaAccessibility", "false");
        props.put("python.import.site", "false");

        Properties preprops = System.getProperties();
        PythonInterpreter.initialize(preprops, props, new String[0]);

    }

    static String pyPath() {
        return Thread.currentThread().getContextClassLoader().getResource(".").getPath();
    }



    public static void main(String[] args) throws FileNotFoundException {
        initInterpreter();
        final PythonInterpreter interpreter = new PythonInterpreter();

        interpreter.execfile(new FileInputStream(pyPath() + "test.py"));
        final PyFunction addFunc = interpreter.get("add", PyFunction.class);
        int a = 1;
        int b = 2;
        final PyObject result = addFunc.__call__(new PyInteger(a), new PyInteger(b));
        System.out.println(result);


//        interpreter.execfile(new FileInputStream(pyPath() + "face_recog.py"));
//        final PyFunction face_verification = interpreter.get("face_verification", PyFunction.class);
//        final PyObject pyObject = face_verification.__call__();
//        System.out.println(pyObject);
    }
}

```


# 调用 rust 

https://www.v2ex.com/t/757216

https://blog.csdn.net/m0_37696990/article/details/96876692

https://blog.csdn.net/muzico425/article/details/103331676


# cffi 绑定

https://github.com/yifeikong/curl_cffi 例子

# web应用部署

https://www.zhihu.com/question/21888077

## 生成依赖清单

```sh
# 生成依赖文件
# https://blog.csdn.net/guolindonggld/article/details/87786032
pip3 freeze > requirements.txt

pip install -r requirements.txt

```

## gunicorn

gunicorn是一个wsgi http server

用 celery 和 gunicorn 注册成守护进程来跑

不过在production环境，起停和状态的监控最好用supervisior之类的监控工具，然后在gunicorn的前端放置一个http proxy server, 譬如nginx

https://www.jianshu.com/p/69e75fc3e08e

flask_app.py

```py
from flask import Flask

app = Flask(__name__)


@app.route('/demo', methods=['GET'])
def demo():
    return "gunicorn and flask demo."
```

gunicorn.conf.py 

```py
# coding:utf-8
import multiprocessing

bind = "0.0.0.0:5000"   #绑定的ip与端口
workers = multiprocessing.cpu_count() * 2 + 1    #进程数
errorlog = './log/gunicorn.error.log' #发生错误时log的路径
accesslog = './log/gunicorn.access.log' #正常时的log路径
backlog = 512                #监听队列
proc_name = 'gunicorn_pre_project'   #进程名
timeout = 30      # 设置超时时间120s，默认为30s。按自己的需求进行设置timeout = 120
worker_class = 'gevent' #使用gevent模式，还可以使用sync 模式，默认的是sync模式

threads = 3  #指定每个进程开启的线程数
loglevel = 'info' #日志级别，这个日志级别指的是错误日志的级别，而访问日志的级别无法设置

#设置gunicorn访问日志格式，错误日志无法设置
access_log_format = '%(t)s %(p)s %(h)s "%(r)s" %(s)s %(L)s %(b)s %(f)s" "%(a)s"'

```


```sh
# 启动命令
# 
# flask_app 来自flask_app.py
# app 来自 app = Flask(__name__)
# -c 指定 配置文件
gunicorn flask_app:app -c gunicorn.conf.py 

# 不使用配置文件
gunicorn -w 4 -b 0.0.0.0:5000 -D  flask_app:app


# 找到 父进程的 pid (masterpid)
pstree -ap | grep gunicorn 

# 或者 找到所有进程 pid, 然后 kill -9 所有相关进程
pgrep gunicorn

# 停止
kill -9 <父进程pid>
# 重启
kill -HUP <parent pid>
```

## supervisord 管理 daemon

supervisord.org

## pm2

是 nodejs 的部署管理工具, 但是只要是命令行程序, 都能用它

# setup.py

# wheel

python 可以用 wheel 打包成 whl, 然后使用 ssh 执行 pip install package.whl, 然后重启一下 python 就好了


# 自动抢购脚本

对于自动抢购来说，
对于网页，selenium 和 puppeteer 比较适合，基本流程就是加载一个 webdriver，访问一个链接，等待 javascript 加载完，选择一个元素，执行操作。
