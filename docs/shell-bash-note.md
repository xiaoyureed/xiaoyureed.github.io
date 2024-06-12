---
title: shell-bash脚本收集
tags: [shell, bash]
date: 2019-10-22
toc_min_heading_level: 2
toc_max_heading_level: 5
---

https://github.com/Ph0enixKM/Amber bash alternative

https://coolshell.cn/articles/19219.html
https://github.com/Bash-it/bash-it

https://www.bilibili.com/video/BV14L4y157Bv?p=19&vd_source=c2f975abf353677cb814e38e073b6a75

https://github.com/wangdoc/bash-tutorial
https://github.com/jaywcjlove/shell-tutorial

<!-- truncate -->


- [1. 常用命令](#1-常用命令)
    - [1.1. sed ack](#11-sed-ack)
    - [1.2. ssh config](#12-ssh-config)
    - [1.3. 软件包相关](#13-软件包相关)
        - [1.3.1. 启动 and 任务管理](#131-启动-and-任务管理)
        - [1.3.2. 压缩解压](#132-压缩解压)
        - [1.3.3. ubuntu 软件相关](#133-ubuntu-软件相关)
        - [1.3.4. centos 软件相关](#134-centos-软件相关)
    - [1.4. 系统](#14-系统)
        - [1.4.1. 系统信息](#141-系统信息)
        - [1.4.2. 搜索相关](#142-搜索相关)
        - [1.4.3. 进程id pid](#143-进程id-pid)
        - [1.4.4. fuser 查看使用指定文件的所有进程](#144-fuser-查看使用指定文件的所有进程)
    - [1.5. 网络相关](#15-网络相关)
        - [1.5.1. 系统网络](#151-系统网络)
        - [1.5.2. 文件下载上传](#152-文件下载上传)
        - [1.5.3. web 访问](#153-web-访问)
        - [1.5.4. 执行远程脚本](#154-执行远程脚本)
        - [1.5.5. 防火墙](#155-防火墙)
    - [1.6. 文件相关](#16-文件相关)
    - [1.7. 文本相关](#17-文本相关)
        - [1.7.1. 命令行文本命令](#171-命令行文本命令)
    - [1.1. =============脚本片段收集======================](#11-脚本片段收集)
        - [帮助函数](#帮助函数)
        - [渲染颜色](#渲染颜色)
        - [处理命令行参数](#处理命令行参数)
        - [封装日志函数](#封装日志函数)
        - [处理输入参数](#处理输入参数)
        - [简单ui界面](#简单ui界面)
        - [远程服务器运行本地脚本](#远程服务器运行本地脚本)
        - [1.1.1. springboot 程序部署](#111-springboot-程序部署)
        - [1.1.2. 判断文件是否存在](#112-判断文件是否存在)
        - [1.1.3. 调用 Python](#113-调用-python)
        - [1.1.4. 判断是否安装](#114-判断是否安装)
        - [1.1.5. 当前路径](#115-当前路径)
        - [1.1.6. 判断服务是否存活](#116-判断服务是否存活)
        - [1.1.7. 判断当前系统](#117-判断当前系统)
        - [1.1.8. mvnw wrapper](#118-mvnw-wrapper)
    - [1.2. 执行方式](#12-执行方式)
        - [1.2.1. 在命令行指定解释器执行](#121-在命令行指定解释器执行)
        - [1.2.2. 在脚本中指定解释器](#122-在脚本中指定解释器)
        - [1.2.3. 在当前 shell 中执行](#123-在当前-shell-中执行)
    - [1.3. 各种括号 简写](#13-各种括号-简写)
    - [1.4. 特殊的参数变量](#14-特殊的参数变量)
    - [1.5. 特殊的状态变量](#15-特殊的状态变量)
    - [1.6. 语法](#16-语法)
        - [严格模式 tips](#严格模式-tips)
        - [1.6.1. 变量赋值 空格语法的坑](#161-变量赋值-空格语法的坑)
        - [1.6.2. 数据类型](#162-数据类型)
            - [1.6.2.1. 字符串 打印](#1621-字符串-打印)
            - [1.6.2.2. 数组](#1622-数组)
        - [1.6.3. 读取标准输入](#163-读取标准输入)
        - [1.6.4. 数值运算](#164-数值运算)
        - [1.6.5. 条件判断](#165-条件判断)
        - [1.6.6. 条件判断-case 语法](#166-条件判断-case-语法)
        - [1.6.7. 条件判断-多路分支语法](#167-条件判断-多路分支语法)
        - [1.6.8. 默认值](#168-默认值)
        - [1.6.9. 函数](#169-函数)
    - [1.7. debug](#17-debug)
    - [1.8. 学习几个demo](#18-学习几个demo)
- [2. 正则\&文本格式化](#2-正则文本格式化)
    - [2.1. 正则表达式和语言系统有关系](#21-正则表达式和语言系统有关系)
    - [2.2. 正则中的特殊符号](#22-正则中的特殊符号)
    - [2.3. grep进阶用法](#23-grep进阶用法)
    - [2.4. 延伸正则表示法](#24-延伸正则表示法)
    - [2.5. sed](#25-sed)
    - [2.6. awk行内格式化](#26-awk行内格式化)
    - [2.7. printf格式化打印](#27-printf格式化打印)
    - [2.8. 文件对比工具](#28-文件对比工具)
- [3. bash](#3-bash)
    - [3.1. 快捷键](#31-快捷键)
    - [3.2. 几种 bash 环境 startup 配置文件对比](#32-几种-bash-环境-startup-配置文件对比)
    - [3.3. 和 Python 交互](#33-和-python-交互)
    - [3.4. 示例](#34-示例)
    - [3.5. 所有可用的shell](#35-所有可用的shell)
    - [3.6. 环境变量](#36-环境变量)
    - [3.7. 键盘读取read](#37-键盘读取read)
    - [3.8. declare,typeset声明变量类型](#38-declaretypeset声明变量类型)
    - [3.9. 变量的删除取代](#39-变量的删除取代)
    - [3.10. 变量的测试和内容替换](#310-变量的测试和内容替换)
    - [3.11. 命令别名和设定](#311-命令别名和设定)
    - [3.12. 命令历史](#312-命令历史)
    - [3.13. 指令搜寻顺序](#313-指令搜寻顺序)
    - [3.14. bash登录欢迎信息](#314-bash登录欢迎信息)
    - [3.15. bash的环境配置文件](#315-bash的环境配置文件)
    - [3.16. 终端机的环境设定stty,set](#316-终端机的环境设定sttyset)
    - [3.17. 通配符和特殊符号](#317-通配符和特殊符号)
    - [3.18. 数据流重导向](#318-数据流重导向)
    - [3.19. \&\&和||](#319-和)
    - [3.20. 管线命令](#320-管线命令)
    - [3.21. 截取命令](#321-截取命令)
    - [3.22. 排序sort,wc,uniq](#322-排序sortwcuniq)
    - [3.23. 字符转换命令](#323-字符转换命令)
    - [3.24. 字符串](#324-字符串)
- [vim 使用](#vim-使用)



# 1. 常用命令

## 1.1. sed ack

```sh
# 替换 文件中的 xxx 为 yyy, 支持正则
sed -i 's/xxx/yyy/' <file_path>

```


## 1.2. ssh config

```sh
Host kn1 
    HostName 192.168.56.102
    Port 22
    User root
    # optional, private key
    IdentityFile ~/.ssh/id_rsa
    

Host kn2 
    HostName 192.168.56.103
    Port 22
    User root

Host kn3 
    HostName 192.168.56.104
    Port 22
    User root

```

ssh kn1 即可登录


## 1.3. 软件包相关

### 1.3.1. 启动 and 任务管理

```sh
# 查服务是否启动
pidof mysqld                    # 返回进程id

# 启动程序
# https://wangchujiang.com/linux-command/c/nohup.html
# nohub是保证后台启动, 默认将日志打印到 ./nohup.out, 这里是指定打印日志到 xxx.file
# 若当前目录的 nohup.out 文件不可写，输出重定向到$HOME/nohup.out文件中
# & 产生作业编号就是那个 [1] 19649,nohup要和&一起用才能保证关闭窗口程序任然在运行
nohup <cmd> xxx.file 2>&1 &
nohup ./start > log.log 2>&1 &

# 用jobs命令查看后台运行，fg + 编号调到前台来
jobs
fg 1

# 根据进程名称杀进程
pkill startxx
```



### 1.3.2. 压缩解压

```sh

# 压缩/解压
zip < new zip file name> <file1 > [file2...]
# zip name 可以和 folder name 不同
zip -r <zip_file_name> <folder1> [foder2...] 

unzip [-d <dest_dir>]  xxx.zip


# 使用 gzip (-z) 或 biz2 (-j) 解压缩 (-x) 压缩(-c)
tar [-C output_dir] -zxvf xxx


```



### 1.3.3. ubuntu 软件相关

```sh
# ubuntu

dpkg -l | grep <httpd>          # 查看程序是否安装
dpkg -L | grep <httpd>          # 查看程序安装路径
aptitude show <httpd>           # 查看软件版本

# 搜索

apt-cache search package        # 搜索包
apt-cache show package          # 获取包的相关信息，如说明、大小、版本等

# 安装

apt-get install package [-y]        # 安装包[ 默认yes ]

# 卸载

apt-get remove package [--purge]          # 删除包[同时删除配置文件]
apt-get autoremove              # 自动删除不需要的包


```

### 1.3.4. centos 软件相关

```sh

yum

```


## 1.4. 系统 

### 1.4.1. 系统信息 

```sh
# 配置环境变量可能 吧 path 配置错误, 这时 vim 命令需要使用全路径, sudo 路径类似
# /usr/bin/vim , /usr/share/vim , /usr/share/man/man1/vim.1.gz


# system version info 系统版本
cat /proc/version
uname -a # kernel 版本
uname -r

# 发行版本 distribution version
    # 著名的distribution: red hat的rhel(服务器), suse(服务器), ubuntu(桌面), fedora(桌面), debian(桌面), openSuse(桌面)
lsb_release -a

# centos release version 发行版本
cat /etc/redhat-release

# 中文乱码
echo $LANG 显示当前语系. `LANG=en_US` 设置语系(暂时的, 再次登录会失效)


# >>> ps 

# 正在运行的程序
ps -ef | grep docker
ps -aux | grep docker


# >>> 磁盘占用

du -sh #查看当前目录所占空间大小
du -sh * #查看当前目录下文件、子目录所占空间大小
1.查寻磁盘剩余空间：df -h
2.查询某个目录下占用最大的子目录：
    cd /your_path
    du -sh * | sort -n 排序
    找到占用上G的目录：du -h --max-depth=1 |grep 'G' |sort


# 内存总数
cat /proc/meminfo | grep MemTotal

# cpu 信息
# 个数
cat /proc/cpuinfo | grep "physical id" | uniq | wc -l
# 核数
cat /proc/cpuinfo | grep "cpu cores" | uniq

# 硬盘大小
fdisk -l | grep Disk


# 系统 cpu 负载
# 按数字 1，可以查看CPU的核数和每个CPU的使用情况。
# 按下 f 键盘可以调出更多pid进程显示选项。按esc键返回top显示页
# P 按CPU使用排序
# M 按内存使用排序
# H 显示线程
# Z 以多色彩显示top。
top
# 输出如下: (https://www.cnblogs.com/54chensongxia/p/12518705.html)
# top - 15:34:12 up 127 days, 10:23,  2 users,        load average: 0.04, 0.03, 0.00
#      系统时间    启动多久了          几个用户登录       过去 1， 5， 15 mins 内负载情况, 即运行队列中(在CPU上运行或者等待运行的有多少进
#                                                       程)的平均进程数 (单核cpu 0~1正常, >=1就需要优化了)
#                                                        (多核cpu, 负载数值/CPU核数 在0.00-1.00之间表示正常)
# Tasks: 291 total,   1 running, 290 sleeping,   0 stopped,   0 zombie
#       总任务                                                 僵尸状态
# Cpu(s):  0.0%us,                   0.3%sy,                0.0%ni,      98.3%id,       1.3%wa,             0.0%hi,  0.0%si,  0.0%st
#  用户模式下所花费 CPU 时间占比      内核进程占用cpu时间比              cpu空闲时间比   io等待占用cpu时间比
#    us + sy的参考值为80%, 超过说明cpu不足                                              (>30%则io严重)
# Mem:   1792312k total,   288300k used,  1504012k free,    10384k buffers
# Swap:  6291452k total,     5380k used,  6286072k free,    14128k cached
# 效果等同 free -ah -s 2 -c 2 显示所有的内存信息，每隔两秒显示一次，一共显示两次

# PID    USER  PR  NI  VIRT  RES  SHR S %CPU %MEM    TIME+  COMMAND           
# 372007 root  20   0 15160 1336  888 R  0.3  0.1   0:00.33 top                                   
#      1 root  20   0 19356  236   88 S  0.0  0.0   0:16.06 init 

# ... 下面省略...

# cpu 负载: 在一段时间内, cpu正在处理和等待处理的进程个数
# cpu 使用率: 进程真正使用cpu运算的时间/进程占用cpu时间 (进程占用cpu不代表正在使用cpu运算, 比如进程可能在进行  io操作)

# 高CPU负载 低CPU使用率：可能系统中较多的文件IO和网络IO操作。
# 高CPU负载 高CPU使用率：CPU资源不足
# 低CPU负载 低CPU使用率：系统CPU资源良好，道路非常顺畅；
# 低CPU负载 高CPU使用率：这种情况一般都是程序的问题，比如程序中代码进入死循环，有很多自旋操作等。CPU使用率一直过高对CPU伤害比较大。


# 系统内存负载 
# 显示所有的内存信息，每隔两秒显示一次，一共显示两次
free -h -s 2 -c 2
#              total       used       free     shared    buffers     cached  available
# Mem:          6.6G       5.5G       1.0G       1.1M       247M       3.5G         0B
# -/+ buffers/cache:       1.8G       4.8G 
# Swap:         5.0G       106M       4.9G 

# Men表示具体的物理内存
# Swap: 交换空间(swap space),是磁盘上的一块区域，可以是一个分区，也可以是一个文件.当系统物理内存吃紧时, Linux 会将内存中不常访问的数据保存到 swap 上. 但是它需要读写磁盘数据，所以性能不是很高。
# total：总计物理内存的大小。
# used：已使用的物理内存的大小。包括实际被程序吃掉的内存 + 缓存
# free：可用物理内存有多少。
# shared：多个进程共享的内存总额
# buffers：写盘内存缓冲区的大小; cached: 读盘内存缓冲大小
# -buffers/cache: 表示被程序实实在在吃掉的内存
# +buffers/cache：表示应用程序还可以可以申请的内存总数。
# free参数和available参数的区别: free 是真正尚未被使用的物理内存数量, 而 available 是从应用程序的角度看到的可用内存数量


# >>> 查找命令路径

# 查找命令当前使用的 path
which python3 # /usr/local/bin/python3

# 查找命令所有路径
where python3 
# /usr/local/bin/python3 这个是链接
# /usr/bin/python3

# >>> 查配置文件位置

rpm -qc bash
```

### 1.4.2. 搜索相关


```sh

# 查找命令

find . -name 'docker*' # 当前目录下, docker 开头的文件
find . -name 'my*' -ls # 同上, 并且显示详细信息
find . -type f -mmin -10 # 过去10分钟中更新过的普通文件, (不加-type f参数，则搜索普通文件+特殊文件+目录)

locate -i /etc/sh # 类似 "find -name", 但是更快 (原因在于它不搜索具体目录，而是搜索一个数据库, 一般先 updatedb 一下)
    -i 忽略大小写

whereis grep # whereis命令只能用于程序名的搜索，而且只搜索二进制文件（参数-b）、man说明文件（参数-m）和源代码文件（参数-s）。如果省略参数，则返回所有信息

which grep # 在PATH路径中，搜索系统命令的位置，并且返回第一个结果 (可以看到某个系统命令是否存在，以及执行的到底是哪一个位置的命令)

type cd # 系统会提示，cd是shell的自带命令（build-in）  (用来区分到底是shell自带, 还是shell外部的独立二进制文件提供的)
type -p grep # 系统会提示，grep是一个外部命令，并显示该命令的路径


```

### 1.4.3. 进程id pid

```sh
pgrep <name> # eg: pgrep gunicorn, 显示所有 进程 id

pstree -ap|grep gunicorn # 查看进程树 ; 安装: apt-get install psmisc


```

### 1.4.4. fuser 查看使用指定文件的所有进程

```sh
# 要列出使用/etc/passwd文件的本地进程的进程号，请输入：
fuser /etc/passwd

# 列出使用/etc/filesystems文件的进程的进程号和用户登录名
fuser -u /etc/filesystems

fuser -k 80/tcp # 终止 使用指定文件/网络socket 的所有进程 (用于停止某个端口下的所有进程)

```

## 1.5. 网络相关

### 1.5.1. 系统网络

```sh
# 查看 ip 地址

ifconfig # 查看所有网卡信息
# 查看网络信息
ip addr show docker0 # 查看网卡 docker0 的信息
ip addr

netstat -nap | grep <pid> # 根据进程id查看进程占用端口
netstat -tunlp | grep 8080 # 根据端口查看对应进程

ps -aux | grep <httpd>          # 查看各个进程的资源占用, 顺便可以看看是否正在运行
ps -ef | grep <pid>     # 根据进程id查看进程信息

# 网络状态, 端口号
lsof -i tcp:<port>
# or
lsof -i:<port>                  #查看端口占用情况
netstat -tunlp | grep <xxx>     # 查看端口号 安装包为 net-tools:  yum  -y  install  net-tools
netstat -an | grep <8080>
# 杀死进程
kill -9 <pid>

# window os
netstat -ano | findstr "8761"   # 查看端口占用 (第二列看端口，最后一列是pid) Windows
    tasklist | findstr 9268    # 查看进程号
    tskill pid # 杀死进程(win8)
    taskkill -PID 进程号 -F # 杀死进程(win10)


ifconfig eth0 down //关闭网卡
ifconfig eth0 up //启动网卡
ifconfig eth0 hw ether 00:AA:BB:CC:DD:EE //修改MAC地址
# 设置 ip
ifconfig eth0 172.16.20.56 netmask 255.255.255.0 broadcast 172.16.20.255
ifconfig eth0 arp //开启arp协议
ifconfig eth0 -arp //关闭arp协议

# 重启网络接口
ifdown eth0 && ifup eth0

# 防火墙
# http://blog.chinaunix.net/uid-26495963-id-3279216.html
# close firewall
systemctl stop firewalld
systemctl disable firewalld
```

### 1.5.2. 文件下载上传

```sh
# 下载文件

# 推荐替代品 https://github.com/jakubroztocil/httpie/
# -L location
#  -o / --output 输出写到指定文件
curl -L <source_url> > --output <target_file_name> 
# -O/--remote-name 不指定文件名(保留远程文件的文件名),
#  -# / --progress-bar 进度条, -s/--silent 静默下载
curl -O -# -s <url> 
# 分块下载
curl -r 0-100 -o dodo1_part1.JPG http://www.linux.com/dodo1.JPG
curl -r 100-200 -o dodo1_part2.JPG http://www.linux.com/dodo1.JPG
curl -r 200- -o dodo1_part3.JPG http://www.linux.com/dodo1.JPG
cat dodo1_part* > dodo1.JPG
# 断点续传
curl -C -O http://www.linux.com/dodo1.JPG

wget [-O wordpress.zip] http://www.jsdig.com/download.aspx?id=1080

# ftp 下载
curl -O -u 用户名:密码 ftp://www.linux.com/dodo1.JPG
curl -O ftp://用户名:密码@www.linux.com/dodo1.JPG




# 文件上传
# 上传
curl -T dodo1.JPG -u 用户名:密码 ftp://www.linux.com/img/
# -T/--upload-file <file>                  上传文件
# -u/--user <user[:password]>      设置服务器的用户和密码


```

### 1.5.3. web 访问


```sh
# 获取 response code
curl -o /dev/null -s -w %{http_code} www.linux.com

# 重定向功能保存访问的网页
curl http://www.linux.com >> linux.html
# or
curl -o linux.html http://www.linux.com


# 发送 http 请求: get/post/delete/put 
curl -X/--request [GET|POST|PUT|DELETE] {"https://xxx/"} # 加引号防止路径异常
    -v/--verbose 输出详细信息
    -X/--request [GET|POST|PUT|DELETE|…]  默认 发送 get 请求
    -H/--header        設定request裡的header, 如 -H "Content-Type: application/json"
    -i/--include                          顯示response的header 和网页,  -I 只显示 头信息
    -d/--data        設定 http parameters , 如 -d "param1=value1&param2=value2" 或者  -d "param1=value1" -d "param2=value2"; 发送json则将url参数让在url中, -d 只用于 json, 用引号包裹, 需要请求头 Content-Type:application/json
    -u/--user                             使用者帳號、密碼, 如 --user username:password
    -b/--cookie           添加 cookie  , 如: --header 'sessionid:1234567890987654321'; 或 从存档读取 cookie:  -b ~/cookie.txt
    -c    将 返回的 cookie 存档 如 -c  ~/cookie.txt
# 如
# 测试网页 resp code
curl -o /dev/null -s -w %{http_code} www.linux.com
# 设置代理
curl -x 192.168.100.100:1080 http://www.linux.com
# 保存 resp cookie
curl -c cookiec.txt http://www.linux.com
# 保存 header
curl -D cookied.txt http://www.linux.com
# 使用 cookie
curl -b cookiec.txt http://www.linux.com

# curl 配合 jq 解析 json 
# 如 : {"name": "han","age": "20"}
curl -s -d 'user=aa&pass=cc' http://www.example.com | jq '.name' >> file.txt
cat file.txt # han

# 模仿浏览器IE8.0
curl -A "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.0)" http://www.linux.com

# 伪造referer请求头（盗链）
curl -e "www.linux.com" http://mail.linux.com

# 指定proxy服务器以及其端口上网
curl -x 192.168.100.100:1080 http://www.linux.com
```

### 1.5.4. 执行远程脚本

```sh

# 执行远程 shell脚本
curl -L <script url> | sh
# -s/--silent 静默
# -S/--show-error                显示错误
# -L 自动跳转 (有的网址是自动跳转的, 使用 -L 参数，curl 就会跳转到新的网址)
# -f/--fail                                          连接失败时不显示http错误
curl -sSLf https://spacevim.org/cn/install.sh | bash

curl -sSfL https://raw.githubusercontent.com/cosmtrek/air/master/install.sh | sh -s -- -b $(go env GOPATH)/bin

# 使用GitHub 代理网站
curl -fsSL https://fastly.jsdelivr.net/gh/hellodigua/code996/bin/code996.sh | bash
```

### 1.5.5. 防火墙

```sh

-----------------  centos


# 查看firewalld状态
systemctl status firewalld
firewall-cmd --state

# 启动/关闭/重载配置 防火墙
systemctl start firewalld
systemctl stop firewalld[.service]

## 禁止开机启动
systemctl disable firewalld.service

# 查看已经开放的端口
firewall-cmd --zone=public --list-ports

#开放端口
firewall-cmd --zone=public --add-port=80/tcp --permanent
# close port
firewall-cmd --zone=public --remove-port=5672/tcp --permanent

#重新载入
firewall-cmd --reload
systemctl reload firewalld

# check if the port is exposed
firewall-cmd --zone=public --query-port=8080/tcp

```

## 1.6. 文件相关

```sh
# 文件大小
du -h xxx_file # 递归累出目录中所有文件
du -sh xxx_file # 仅仅列出总大小
ls -lh [xxx_file] # 目录的大小不包括内部文件, 仅仅是目录本身所占的空间

```

## 1.7. 文本相关

### 1.7.1. 命令行文本命令

```sh
# 查看文本文件
less -N <file name> # [b] 上一页，[d] 下一页

# read from stdin and send to file/stdout
#  -a append
# -i 忽略中断信号。
tee file1 file2  # 从键盘输入
# <<- 可以省掉 -
# eof 可以小写, 去掉引号
tee /etc/docker/daemon.json <<- 'EOF'
{
    "register-mirrors": [
        "https://registry.docker-cn.com"
    ]
}
EOF

# grep 按照指定文件类型搜索
grep -inr --include \*.h --include \*.cpp hello_world /your/search/path
-i :ignore 不区分大小写。
-n : line number 行号
-r : recursively 递归
--include：指定搜索的文件类型。

# 从指定文件夹中搜索指定文件。
find /search/path -name file_name
#例如,从/home目录下搜索名为a.txt的文件
find /home -name a.txt

```

## 1.1. =============脚本片段收集======================

### 帮助函数

```sh

Help()
{
   echo "你也可以使用自定义参数进行指定查询"
   echo
   echo "格式: bash $0 [2022-01-01] [2022-04-04] [author]"
   echo "示例: bash code996.sh 2022-01-01 2022-12-31 digua"
   echo "参数:"
   echo "1st     分析的起始时间."
   echo "2nd     分析的结束时间."
   echo "3rd     指定提交用户，可以是 name 或 email."
   echo
}

```

### 渲染颜色

```sh


RED='\033[1;91m'
NC='\033[0m' # No Color

echo -e "${RED}统计时间范围：$time_start 至 $time_end"


```

### 处理命令行参数

```sh



if [ "$1" == "--help" ]
    then
        Help
        exit 0
elif [ "$1" == "-h" ]
    then
        Help
        exit 0
fi

if [ -z $1 ]
    then
        time_start="2022-01-01"
fi

time_end=$2
if [ -z $2 ]
    then
        time_end=$(date "+%Y-%m-%d")
fi

author=$3
if [ -z $3 ]
    then
        author=""
fi


```

### 封装日志函数

```sh

#!/bin/bash
  
set -eu

log() {
        local prefix="[$(date +%Y/%m/%d\ %H:%M:%S)]:"
        echo "${prefix} $@" >&2
}

log "info" "a message"


# output
[2023/12/26 16:47:52]: info a message
```

### 处理输入参数

```sh

while [ "$1" != "" ]; do
    case $1 in
        -s  )   shift  
    SERVER=$1 ;;  
        -d  )   shift
    DATE=$1 ;;
  --paramter|p ) shift
    PARAMETER=$1;;
        -h|help  )   usage # function call
                exit ;;
        * )     usage # All other parameters
                exit 1
    esac
    shift
done 

```

### 简单ui界面

```sh

#!/bin/bash
# Bash Menu Script Example

PS3='Please enter your choice: '
options=("Option 1" "Option 2" "Option 3" "Quit")
select opt in "${options[@]}"
do
    case $opt in
        "Option 1")
            echo "you chose choice 1"
            ;;
        "Option 2")
            echo "you chose choice 2"
            ;;
        "Option 3")
            echo "you chose choice $REPLY which is $opt"
            ;;
        "Quit")
            break
            ;;
        *) echo "invalid option $REPLY";;
    esac
done

```

### 远程服务器运行本地脚本

```sh

#无参数
ssh user@server 'bash -s' < local.script.sh

#有参数
ssh user@server ARG1="arg1" ARG2="arg2" 'bash -s' < local_script.sh

```


### 1.1.1. springboot 程序部署

```sh
#!/bin/bash
APP_NAME=$1

usage() {
    echo "Usage: sh run.sh xxx.jar [start|stop|restart|status]"
    exit 1
}

is_exist(){
  pid=`ps -aux|grep $APP_NAME |grep java |grep -v grep|awk '{print $2}'`
  if [ -z "${pid}" ]; then
   return 1
  else
    return 0
  fi
}

start(){
  is_exist
  if [ $? -eq 0 ]; then
    echo "${APP_NAME} is already running. pid=${pid}"
  else
    nohup java -jar ${APP_NAME} >logs.log 2>&1 &
    sleep 1
    status
  fi
}

stop(){
  is_exist
  if [ $? -eq "0" ]; then
    kill -9 $pid
  else
    echo "${APP_NAME} is not running"
  fi  
}

status(){
  is_exist
  if [ $? -eq "0" ]; then
    echo "${APP_NAME} is running. Pid is ${pid}"
  else
    echo "${APP_NAME} is NOT running."
  fi
}

restart(){
  stop
  sleep 5
  start
}

case "$2" in
  "start")
    start
    ;;
  "stop")
    stop
    ;;
  "status")
    status
    ;;
  "restart")
    restart
    ;;
  *)
    usage
    ;;
esac




```

### 1.1.2. 判断文件是否存在

```sh
#shell 判断文件夹存在
if [ -d "${your_dir_name}" ]; then
fi
# 判断文件夹不存在
if [ ! -d "${your_dir_name}" ]; then
fi

#shell 判断文件存在
if [ -f "${your_file_path}" ]; then
    echo "${your_file_path} exists."
fi
# shell 判断文件不存在
if [ ! -f "${your_file_path}" ]; then
    echo "${your_file_path} not exists."
fi
```

### 1.1.3. 调用 Python

```sh
# >>> shell call Python

#有时候某些操作用shell实现比较麻烦，这时可以考虑用python实现。
#再利用shell调用python的实现
#以下代码保存在 utils.py
from datetime import datetime, timedelta
def get_yesterday():
    yesterday_date = datetime.now() - timedelta(days=1)
    yesterday_date_str = yesterday_date.strftime("%Y-%m-%d")
    return yesterday_date_str
#以下代码保存在 run.sh中
#shell调用python函数
yesterday_date=`python -c "import utils; print(utils.get_yesterday())"`
echo ${yesterday_date}

```


### 1.1.4. 判断是否安装

```sh
if [ -x "$(command -v git)" ]
then
    echo "SUCCESS: Git is installed"
else
    echo "ERROR: Git does not seem to be installed."
    echo "Please download Git using your package manager or over https://git-scm.com/!"
    exit 1
fi

```

###  1.1.5. 当前路径

```sh

# 在命令行状态下单纯执行 $ cd `dirname $0` 是毫无意义的。因为他返回当前路径的"."
# 这个命令写在脚本文件里才有作用，他返回这个脚本文件放置的目录，并可以根据这个目录来定位所要运行程序的相对位置
echo $(cd `dirname $0`;pwd) # 直接使用 pwd 会报错: 无法找到命令

```

### 1.1.6. 判断服务是否存活

```sh

#!/bin/bash

# detect runing service

echo -e "I will detect runing services."
testing=$(netstat -tuln | grep ":80")
if [ "${testing}" != "" ]; then
        echo "WWW is runing."
fi

testing=$(netstat -tuln | grep ":22")
if [ "${testing}" != "" ]; then
        echo "SSH is runing."
fi

testing=$(netstat -tuln | grep ":21")
if [ "${testing}" != "" ]; then
        echo "FTP is runing."
fi

testing=$(netstat -tuln | grep ":25")
if [ "${testing}" != "" ]; then
        echo "MAIL is runing"
fi
```

### 1.1.7. 判断当前系统

```sh





OS_DETECT()
{
   # Detect OS
    case "$(uname -s)" in

    Linux)
        # echo 'Linux'
        open_url="xdg-open"
        ;;

    Darwin)
        # echo 'macOS'
        open_url="open"
        ;;

    CYGWIN*|MINGW32*|MSYS*|MINGW*)
        # echo 'Windows'
        open_url="start"
        ;;

    *)
        echo 'Other OS'
        echo "trying to use xdg-open to open the url"
        open_url="xdg-open"
        ;;
    esac

}
OS_DETECT

# 根据系统不同, 自动打开指定url
$open_url "$github_url"
```

### 1.1.8. mvnw wrapper

```sh
#!/bin/sh
# ----------------------------------------------------------------------------
# Licensed to the Apache Software Foundation (ASF) under one
# or more contributor license agreements.  See the NOTICE file
# distributed with this work for additional information
# regarding copyright ownership.  The ASF licenses this file
# to you under the Apache License, Version 2.0 (the
# "License"); you may not use this file except in compliance
# with the License.  You may obtain a copy of the License at
#
#    https://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing,
# software distributed under the License is distributed on an
# "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
# KIND, either express or implied.  See the License for the
# specific language governing permissions and limitations
# under the License.
# ----------------------------------------------------------------------------

# ----------------------------------------------------------------------------
# Maven Start Up Batch script
#
# Required ENV vars:
# ------------------
#   JAVA_HOME - location of a JDK home dir
#
# Optional ENV vars
# -----------------
#   M2_HOME - location of maven2's installed home dir
#   MAVEN_OPTS - parameters passed to the Java VM when running Maven
#     e.g. to debug Maven itself, use
#       set MAVEN_OPTS=-Xdebug -Xrunjdwp:transport=dt_socket,server=y,suspend=y,address=8000
#   MAVEN_SKIP_RC - flag to disable loading of mavenrc files
# ----------------------------------------------------------------------------

if [ -z "$MAVEN_SKIP_RC" ] ; then

  if [ -f /etc/mavenrc ] ; then
    . /etc/mavenrc
  fi

  if [ -f "$HOME/.mavenrc" ] ; then
    . "$HOME/.mavenrc"
  fi

fi

# OS specific support.  $var _must_ be set to either true or false.
cygwin=false;
darwin=false;
mingw=false
case "`uname`" in
  CYGWIN*) cygwin=true ;;
  MINGW*) mingw=true;;
  Darwin*) darwin=true
    # Use /usr/libexec/java_home if available, otherwise fall back to /Library/Java/Home
    # See https://developer.apple.com/library/mac/qa/qa1170/_index.html
    if [ -z "$JAVA_HOME" ]; then
      if [ -x "/usr/libexec/java_home" ]; then
        export JAVA_HOME="`/usr/libexec/java_home`"
      else
        export JAVA_HOME="/Library/Java/Home"
      fi
    fi
    ;;
esac

if [ -z "$JAVA_HOME" ] ; then
  if [ -r /etc/gentoo-release ] ; then
    JAVA_HOME=`java-config --jre-home`
  fi
fi

if [ -z "$M2_HOME" ] ; then
  ## resolve links - $0 may be a link to maven's home
  PRG="$0"

  # need this for relative symlinks
  while [ -h "$PRG" ] ; do
    ls=`ls -ld "$PRG"`
    link=`expr "$ls" : '.*-> \(.*\)$'`
    if expr "$link" : '/.*' > /dev/null; then
      PRG="$link"
    else
      PRG="`dirname "$PRG"`/$link"
    fi
  done

  saveddir=`pwd`

  M2_HOME=`dirname "$PRG"`/..

  # make it fully qualified
  M2_HOME=`cd "$M2_HOME" && pwd`

  cd "$saveddir"
  # echo Using m2 at $M2_HOME
fi

# For Cygwin, ensure paths are in UNIX format before anything is touched
if $cygwin ; then
  [ -n "$M2_HOME" ] &&
    M2_HOME=`cygpath --unix "$M2_HOME"`
  [ -n "$JAVA_HOME" ] &&
    JAVA_HOME=`cygpath --unix "$JAVA_HOME"`
  [ -n "$CLASSPATH" ] &&
    CLASSPATH=`cygpath --path --unix "$CLASSPATH"`
fi

# For Mingw, ensure paths are in UNIX format before anything is touched
if $mingw ; then
  [ -n "$M2_HOME" ] &&
    M2_HOME="`(cd "$M2_HOME"; pwd)`"
  [ -n "$JAVA_HOME" ] &&
    JAVA_HOME="`(cd "$JAVA_HOME"; pwd)`"
fi

if [ -z "$JAVA_HOME" ]; then
  javaExecutable="`which javac`"
  if [ -n "$javaExecutable" ] && ! [ "`expr \"$javaExecutable\" : '\([^ ]*\)'`" = "no" ]; then
    # readlink(1) is not available as standard on Solaris 10.
    readLink=`which readlink`
    if [ ! `expr "$readLink" : '\([^ ]*\)'` = "no" ]; then
      if $darwin ; then
        javaHome="`dirname \"$javaExecutable\"`"
        javaExecutable="`cd \"$javaHome\" && pwd -P`/javac"
      else
        javaExecutable="`readlink -f \"$javaExecutable\"`"
      fi
      javaHome="`dirname \"$javaExecutable\"`"
      javaHome=`expr "$javaHome" : '\(.*\)/bin'`
      JAVA_HOME="$javaHome"
      export JAVA_HOME
    fi
  fi
fi

if [ -z "$JAVACMD" ] ; then
  if [ -n "$JAVA_HOME"  ] ; then
    if [ -x "$JAVA_HOME/jre/sh/java" ] ; then
      # IBM's JDK on AIX uses strange locations for the executables
      JAVACMD="$JAVA_HOME/jre/sh/java"
    else
      JAVACMD="$JAVA_HOME/bin/java"
    fi
  else
    JAVACMD="`which java`"
  fi
fi

if [ ! -x "$JAVACMD" ] ; then
  echo "Error: JAVA_HOME is not defined correctly." >&2
  echo "  We cannot execute $JAVACMD" >&2
  exit 1
fi

if [ -z "$JAVA_HOME" ] ; then
  echo "Warning: JAVA_HOME environment variable is not set."
fi

CLASSWORLDS_LAUNCHER=org.codehaus.plexus.classworlds.launcher.Launcher

# traverses directory structure from process work directory to filesystem root
# first directory with .mvn subdirectory is considered project base directory
find_maven_basedir() {

  if [ -z "$1" ]
  then
    echo "Path not specified to find_maven_basedir"
    return 1
  fi

  basedir="$1"
  wdir="$1"
  while [ "$wdir" != '/' ] ; do
    if [ -d "$wdir"/.mvn ] ; then
      basedir=$wdir
      break
    fi
    # workaround for JBEAP-8937 (on Solaris 10/Sparc)
    if [ -d "${wdir}" ]; then
      wdir=`cd "$wdir/.."; pwd`
    fi
    # end of workaround
  done
  echo "${basedir}"
}

# concatenates all lines of a file
concat_lines() {
  if [ -f "$1" ]; then
    echo "$(tr -s '\n' ' ' < "$1")"
  fi
}

BASE_DIR=`find_maven_basedir "$(pwd)"`
if [ -z "$BASE_DIR" ]; then
  exit 1;
fi

##########################################################################################
# Extension to allow automatically downloading the maven-wrapper.jar from Maven-central
# This allows using the maven wrapper in projects that prohibit checking in binary data.
##########################################################################################
if [ -r "$BASE_DIR/.mvn/wrapper/maven-wrapper.jar" ]; then
    if [ "$MVNW_VERBOSE" = true ]; then
      echo "Found .mvn/wrapper/maven-wrapper.jar"
    fi
else
    if [ "$MVNW_VERBOSE" = true ]; then
      echo "Couldn't find .mvn/wrapper/maven-wrapper.jar, downloading it ..."
    fi
    if [ -n "$MVNW_REPOURL" ]; then
      jarUrl="$MVNW_REPOURL/io/takari/maven-wrapper/0.5.6/maven-wrapper-0.5.6.jar"
    else
      jarUrl="https://repo.maven.apache.org/maven2/io/takari/maven-wrapper/0.5.6/maven-wrapper-0.5.6.jar"
    fi
    while IFS="=" read key value; do
      case "$key" in (wrapperUrl) jarUrl="$value"; break ;;
      esac
    done < "$BASE_DIR/.mvn/wrapper/maven-wrapper.properties"
    if [ "$MVNW_VERBOSE" = true ]; then
      echo "Downloading from: $jarUrl"
    fi
    wrapperJarPath="$BASE_DIR/.mvn/wrapper/maven-wrapper.jar"
    if $cygwin; then
      wrapperJarPath=`cygpath --path --windows "$wrapperJarPath"`
    fi

    if command -v wget > /dev/null; then
        if [ "$MVNW_VERBOSE" = true ]; then
          echo "Found wget ... using wget"
        fi
        if [ -z "$MVNW_USERNAME" ] || [ -z "$MVNW_PASSWORD" ]; then
            wget "$jarUrl" -O "$wrapperJarPath"
        else
            wget --http-user=$MVNW_USERNAME --http-password=$MVNW_PASSWORD "$jarUrl" -O "$wrapperJarPath"
        fi
    elif command -v curl > /dev/null; then
        if [ "$MVNW_VERBOSE" = true ]; then
          echo "Found curl ... using curl"
        fi
        if [ -z "$MVNW_USERNAME" ] || [ -z "$MVNW_PASSWORD" ]; then
            curl -o "$wrapperJarPath" "$jarUrl" -f
        else
            curl --user $MVNW_USERNAME:$MVNW_PASSWORD -o "$wrapperJarPath" "$jarUrl" -f
        fi

    else
        if [ "$MVNW_VERBOSE" = true ]; then
          echo "Falling back to using Java to download"
        fi
        javaClass="$BASE_DIR/.mvn/wrapper/MavenWrapperDownloader.java"
        # For Cygwin, switch paths to Windows format before running javac
        if $cygwin; then
          javaClass=`cygpath --path --windows "$javaClass"`
        fi
        if [ -e "$javaClass" ]; then
            if [ ! -e "$BASE_DIR/.mvn/wrapper/MavenWrapperDownloader.class" ]; then
                if [ "$MVNW_VERBOSE" = true ]; then
                  echo " - Compiling MavenWrapperDownloader.java ..."
                fi
                # Compiling the Java class
                ("$JAVA_HOME/bin/javac" "$javaClass")
            fi
            if [ -e "$BASE_DIR/.mvn/wrapper/MavenWrapperDownloader.class" ]; then
                # Running the downloader
                if [ "$MVNW_VERBOSE" = true ]; then
                  echo " - Running MavenWrapperDownloader.java ..."
                fi
                ("$JAVA_HOME/bin/java" -cp .mvn/wrapper MavenWrapperDownloader "$MAVEN_PROJECTBASEDIR")
            fi
        fi
    fi
fi
##########################################################################################
# End of extension
##########################################################################################

export MAVEN_PROJECTBASEDIR=${MAVEN_BASEDIR:-"$BASE_DIR"}
if [ "$MVNW_VERBOSE" = true ]; then
  echo $MAVEN_PROJECTBASEDIR
fi
MAVEN_OPTS="$(concat_lines "$MAVEN_PROJECTBASEDIR/.mvn/jvm.config") $MAVEN_OPTS"

# For Cygwin, switch paths to Windows format before running java
if $cygwin; then
  [ -n "$M2_HOME" ] &&
    M2_HOME=`cygpath --path --windows "$M2_HOME"`
  [ -n "$JAVA_HOME" ] &&
    JAVA_HOME=`cygpath --path --windows "$JAVA_HOME"`
  [ -n "$CLASSPATH" ] &&
    CLASSPATH=`cygpath --path --windows "$CLASSPATH"`
  [ -n "$MAVEN_PROJECTBASEDIR" ] &&
    MAVEN_PROJECTBASEDIR=`cygpath --path --windows "$MAVEN_PROJECTBASEDIR"`
fi

# Provide a "standardized" way to retrieve the CLI args that will
# work with both Windows and non-Windows executions.
MAVEN_CMD_LINE_ARGS="$MAVEN_CONFIG $@"
export MAVEN_CMD_LINE_ARGS

WRAPPER_LAUNCHER=org.apache.maven.wrapper.MavenWrapperMain

exec "$JAVACMD" \
  $MAVEN_OPTS \
  -classpath "$MAVEN_PROJECTBASEDIR/.mvn/wrapper/maven-wrapper.jar" \
  "-Dmaven.home=${M2_HOME}" "-Dmaven.multiModuleProjectDirectory=${MAVEN_PROJECTBASEDIR}" \
  ${WRAPPER_LAUNCHER} $MAVEN_CONFIG "$@"

```

## 1.2. 执行方式

### 1.2.1. 在命令行指定解释器执行 

同时在 sub shell 中执行, 脚本 内容不影响当前 shell

- bash xxx.sh
- sh xxx.sh sh 是 到 bash 的链接

### 1.2.2. 在脚本中指定解释器

在 sub shell 中执行

- ./xxx.sh - 需要 #!/usr/bin/bash
- /root/xxx/yy/zzz.sh - need #!/usr/bin/bash

### 1.2.3. 在当前 shell 中执行

常用来刷新配置文件

- . xxx.sh
- source xxx.sh


## 1.3. 各种括号 简写 

https://mp.weixin.qq.com/s/B2fALisq_D8bazpD1hb0Fg
TODO



## 1.4. 特殊的参数变量

```sh
$0  # 获取脚本名称, 或者说路径
    # 在命令行状态下单纯执行 这个命令是没有意义的, 因为他返回当前路径 "."
    # 只有在脚本中执行才有意义, 返回脚本路径
cd `dirname $0` 

$1 $2 $3 ... #表示传递给脚本的参数 第一个 第二个, 第三个

$# # 传入参数总个数

$* # 获取脚本所有参数
    # 等同 $@
"$*" # 接收所有参数为 单个字符串 , 就像 "$1 $2 $3 ...", 把参数作为一个字符串整体(单字符串)返回

$@ # 等同 $*
"$@" # 接收所有参数为 多个独立字符串, 推荐
for N in "$@"
do
    echo $N
done



```

## 1.5. 特殊的状态变量


```sh

# 前一个命令的返回值, 执行成功为 0, 
# 如 echo "" &>/dev/null && echo $? 将打印 0
$? 

host=baidu.com
ping -c 1 $host &>/dev/null
if [ $? -eq 0 ]; then
  echo "$host is up"
else
  echo "$host is down"
fi

# 写脚本时有用
# 特殊变量$?记录上一次命令的返回值
[ $? -ne 0 ] && { ... }





$$ #记录当前shell本身的 PID (脚本运行的当前进程ID号)
    #可以使用$$变量扩展出当前进程的 PID 作为临时文件名，PID 在计算机中都是唯一的，所以绝不会重复

# $! Shell上次执行的进程的 pid

$_ #上次命令传递的最后一个参数




```

## 1.6. 语法


https://zhuanlan.zhihu.com/p/264346586


### 严格模式 tips

```sh
使用 -e 参数，
    如：set -e 或是 #!/bin/sh -e，
    这样设置会让你的脚本出错就会停止运行，这样一来可以防止你的脚本在出错的情况下还在拼拿地干活停不下来。
使用 -u 参数，如： set -u，这意味着，如果你代码中有变量没有定义，就会退出。

#!/bin/bash
set -o nounset
set -o errexit
# 简写
set -eu




对一些变理，你可以使用默认值。如：${FOO:-'default'}

尽量不要使用 ; 来执行多个命令，而是使用 &&，这样会在出错的时候停止运行后续的命令。

对于一些字符串变量，使用引号括起，避免其中有空格或是别的什么诡异字符。

```

### 1.6.1. 变量赋值 空格语法的坑

```sh
# 普通变量: 不能在父子 shell 间传递
# 全局变量/环境变量 : 可以在父子 shell 传递 , 通过 export 导出的变量
# 局部变量/方法变量
    使用readonly(只读)和local(局部变量)修饰变量

# shell 默认定义的所有变量类型都是 字符串

var=2 #正确
var = 2 #错误
#bash: var: command not found

# 条件语句中[],中括号内外、运算符两边一定要加空格
var=2
if [ var = 2 ]; then
	echo "对了"
else
	echo "错误"
fi

# expr命令 expr后面、运算符两边一定要加空格
expr 1 + 2

# 运算操作
建议使用$()代替 ` (反单引号)
    （1）$()能够支持内嵌；
    （2）$()不用转义；
    （3）有些字体，`(反单引号)和’(单引号)很像，容易把人搞晕；
$((2+4)) # 代码可读差
expr 2 + 4 # 两边一定要加空格
$[2=4] #可读好, 对空格也没严格要求
let a=2+4 # 赋值
let a++ # 自增

# 反引号内的命令会被执行
name=`echo "hello"`
echo $name # hello
```


### 1.6.2. 数据类型

#### 1.6.2.1. 字符串 打印

```sh
#!/bin/bash

PATH=${PATH}:/bin:/sbin:~/bin
export PATH

# -e 激活转义字符
echo -e "hello world"
exit 0

# 单引号 会原样输出
# 双引号 会变量替换 -> 推荐





# 字符串拓展
 echo {one,two,three}file
onefile twofile threefile

echo {one,two,three}{1,2,3}
one1 one2 one3 two1 two2 two3 three1 three2 three3

cp /very/long/path/file{,.bak}
# 给 file 复制一个叫做 file.bak 的副本

rm file{1,3,5}.txt
# 删除 file1.txt file3.txt file5.txt

mv *.{c,cpp} src/
# 将所有 .c 和 .cpp 为后缀的文件移入 src 文件夹

# 特殊命令!$会替换成上一次命令最后的路径
# 没有加可执行权限
$ /usr/bin/script.sh
zsh: permission denied: /usr/bin/script.sh

$ chmod +x !$
chmod +x /usr/bin/script.sh

# 特殊命令!*会替换成上一次命令输入的所有文件路径
# 创建了三个脚本文件
$ file script1.sh script2.sh script3.sh

# 特殊命令!!，可以自动替换成上一次使用的命令
$ apt install net-tools
E: Could not open lock file - open (13: Permission denied)

$ sudo !!
sudo apt install net-tools

# 给它们全部加上可执行权限
$ chmod +x !*
chmod +x script1.sh script2.sh script3.sh

# 可以在环境变量CDPATH中加入你常用的工作目录，当cd命令在当前目录中找不到你指定的文件/目录时，会自动到CDPATH中的目录中寻找
# 这样就免了经常写完整的路径名称，节约不少时间
$ export CDPATH='~:/var/log'
# cd 命令将会在 ~ 目录和 /var/log 目录扩展搜索

$ pwd
/home/labuladong/musics
$ cd mysql
cd /var/log/mysql
$ pwd
/var/log/mysql
$ cd my_pictures
cd /home/labuladong/my_pictures


# 搜索历史命令
# 过滤出所有包含 config 字段的历史命令
$ history | grep 'config'
找到后, 只要使用!+ 你想重用的命令编号即可运行该命令。

# yes命令自动输入字符y进行确认
$ yes | your_cmd

```

#### 1.6.2.2. 数组

```sh
myarray=()  #定义一个空数组
myarray=(1 2 3 4 5)   #全部元素为数字
myarray=(one two three four five)  #全部元素为字符串
myarray=(1 two 3 three 4 five)  #元素由数值和字符串构成
myarray=(1 two 3 “a phrase” 5 now)

# 赋值
myarray[0]=1
myarray[2]=test

# 获取
arr_element2=${arr_name[2]}

# 长度
arr_len=${#arr_name[*]}
        ${#arr_name[@]}
# 元素长度
arr_elem_len=${#arr_name[index]} 

# 打印
echo ${arr[@]} # 将元素作为一个整体打印
for ele in ${arr[*]} # 迭代每个元素打印
do echo $ele
done

# 数组分片访问
arr_name=(1 2 3 test go now)
echo ${arr_name[@]:1:2}，将输出2 3

# 删除
删除数组某个元素：unset arr_name[index]
删除整个数组：unset arr_number

# 合并
arr=()
arr+=(1)
echo ${arr[@]}# 1
arr+=(2 tes 3 xx)
echo ... # 1 2 tex 3 xx


ip_array=("192.168.1.1" "192.168.1.2" "192.168.1.3") 
for ip in ${ip_array[*]} 
do 
    if [ $ip = "192.168.1.1" ]; then 
        port="7777" 
    else 
        port="22" 
    fi 
    ssh -t -p $port $user@$ip "remote_cmd" 
done 
```

### 1.6.3. 读取标准输入

```sh

#!/bin/bash
# "read" usage

PATH=/bin:/sbin:/usr/bin:/usr/sbin:/usr/local/bin:/usr/local/sbin:~/bin
export PATH

read -p "input first name: " firstname
read -p "input last name: " lastname
echo -e ${firstname} ${lastname}

#############################

#!/bin/bash

# create 3 files, which named by user's input and date command;
echo -e "I will create 3 files."
read -p "input file name please: " file_name
file_name=${file_name:-"filename"}

date1=$(date --date="2 days ago" +%Y%m%d) # 前两天
date2=$(date --date="1 days ago" +%Y%m%d) # one day ago
date3=$(date +%Y%m%d) # today

file1=${file_name}${date1}
file2=${file_name}${date2}
file3=${file_name}${date3}

# touch

touch ${file1}
touch ${file2}
touch ${file3}

```

### 1.6.4. 数值运算

```sh


#!/bin/bash

# desc: + - * / % 数值运算 $((xxx*xxx))
# declare -i total=${first_num}*${sec_num}
# <==> total=$((a*b))

PATH=${PATH}:/bin:/sbin:~/bin
export PATH

echo -e "input 2 numbers and I will cross them.\n"

read -p "first number: " first_num
read -p "second number: " sec_num

total=$((${first_num}*${sec_num}))
echo -e "result: ${total}"

```

### 1.6.5. 条件判断


```sh
#!/bin/bash

# 判断
# test xx==xx <==> [ "xx" == "xx" ] (tips: [] 内部的变量都用双引号抱起来以防止变量中有空格; 每个部分都要隔开)
    从bash3.2开始，通配符和正则表达式都不能用引号包裹了（所以，上面的例子，加了引号就是字面比较, 所以如果表达式里有空格，必须存储到一个变量里，再进行通配符与正则的比较）
    如:
    r="a b+"
    [[ "a bbb" =~ $r ]]

建议 使用[[]] (双中括号) 代替[]
    （1）避免转义问题；
    （2）有不少新功能；
        || ：逻辑or
        && ：逻辑and
        < ：字符串比较（不需要转义）
        == ：通配符(globbing)字符串比较
        =~ ：正则表达式(regular expression, RegEx)字符串比较

    如:
    [[ "${name}" > "a" && "${name}" < "m" ]] 等价 [ "${name}" \> "a" -o ${name} \< "m" ]

# -e (exist) 
# -f (file)  是否是文件(file exist)
# -d (directory) ; 是否是文件夹

# -rwx (readable? writeable? exectable?) ;

# -eq (equal) 
# -ne (not equal) 

# test -z "xxx" (zero) 判断string是否为空 0/null;  
# test -n "xxx" (not zero, 可省略) 不为0; 
# test "xxx"=="yyy" ("="也可)是否相等;
#  test "xxx"!="yyy" 是否不等;

# -a (and)
#  -o (or)
#  ! (not)

PATH=${PATH}:/bin:/sbin:~/bin
export PATH

echo -e "I'll test wether the file name you input exist. "
read -p "input a file name: " file_name

test -z ${file_name} && echo -e "you must input a valid file name" && exit 0
test ! -e ${file_name} && echo "the file ${file_name} does not exist" && exit 0

test -f ${file_name} && type="regular file"
test -d ${file_name} && type="directory"
test -r ${file_name} && perm="readable"
test -w ${file_name} && perm="${perm} writable"
test -x ${file_name} && perm="${perm} excutable"

echo -e "it's a ${type}"
echo -e "and the permissions are: ${perm}"

##########################################

#!/bin/bash

# desc: make choice 判断的另一种写法

read -p "input Y/N: " yn
[ "${yn}"=="Y" -o "${yn}"=="y" ] && echo -e "ok, continue." && exit 0
[ "${yn}"=="N" -o "${yn}"=="n" ] && echo -e "oh, break." && exit 0
echo -e "I don't know what you mean." && exit 0

#######################################


#!/bin/bash

# "if then" usage
# [ "${param}" == "xxx" -o "${param}" == "yyy" ] <==> [ "${p}" == "xxx" ] || [ "${p}" == "yyy" ]

read -p "input y/n: " p
if [ "${p}" == "y" ] || [ "${p}" == "Y" ]; then
        echo "ok, continue."
        exit 0
elif [ "${p}" == "n" ] || [ "${p}" == "N" ]; then
        echo "oh, interrupt"
else
        echo "I don't know what you mean." && exit 0
fi

##################################################

```

### 1.6.6. 条件判断-case 语法

```sh

#!/bin/bash

# case xx in 用法

case ${1} in
        "hello")
                echo "hello, h a y"
                ;;
        "")
                echo "must input parameter, eg> ${0} someword"
                ;;
        *)
                echo "usage: ${0} hello"
                ;;
esac

```

### 1.6.7. 条件判断-多路分支语法

```sh
action="a"
if [ "${action}" = "a" ]; then
    #操作
elif [ "${action}" = "b" ]; then
    #操作
elif [ "${action}" = "c" ]; then
    #操作
else
    #操作
fi

```

### 1.6.8. 默认值

```sh
file_name=$1
file_name=${file_name:-"no_name.sh"}

```

### 1.6.9. 函数

```sh

#!/bin/bash

# 定义 函数

function printit(){ 
  echo "Your choice is $1"   # 这个 $1 是 函数后面跟着的参数
} 
case $1 in # 这里的 $1 是脚本后面的参数
  "one") 
    printit 1  # 请注意， printit 指令后面还有接参数！ 
    ;; 
  "two") 
    printit 2 
    ;;
  "three") 
    printit 3 
    ;; 
  *) 
    echo "Usage $0 {one|two|three}" 
    ;; 
esac

###############################

# 循环 while do done, until do done 条件满足则种植循环, for var in value1 value2 value3... do done

#!/bin/bash

# "cut", function, for var in ... do done

PATH=${PATH}:/bin:/sbin:~/bin
export PATH

names=$(cut -d ":" -f1 /etc/passwd)
for name in ${names}
do
        id ${name}
        finger ${name}
done

########################################################

network="192.168.1"              # 先定丿一个网域的前面部分！ 
for sitenu in $(seq 1 100)       # seq 为 sequence(连续) 的缩写 
do 
    # 底下的程序在 ping 的回传值是正确的还是失败的！ 
    ping -c 1 -w 1 ${network}.${sitenu} &> /dev/null && result=0 || result=1 
    # 开始显示结果是正确的 (UP) 还是错误的没有连通 (DOWN) 
    if [ "$result" == 0 ]; then 
        echo "Server ${network}.${sitenu} is UP." 
    else 
        echo "Server ${network}.${sitenu} is DOWN." 
    fi 
done 

###################################

# 循环加判断

# 1. 先看看这个目录是否存在啊？ 
read -p "Please input a directory: " dir 
if [ "$dir" == "" -o ! -d "$dir" ]; then 
  echo "The $dir is NOT exist in your system." 
  exit 1 
fi 
 
# 2. 开始测试档案啰～ 
filelist=$(ls $dir)        # 列出所有在该目录下的文件名 
for filename in $filelist 
do 
  perm="" 
  test -r "$dir/$filename" && perm="$perm readable" 
  test -w "$dir/$filename" && perm="$perm writable" 
  test -x "$dir/$filename" && perm="$perm executable" 
  echo "The file $dir/$filename's permission is $perm " 
done 

##########################################

# for ((xx; xx; xx)) do done

for (( i=1; i<=$nu; i=i+1 )) 
do 
  s=$(($s+$i)) 
done 
echo "The result of '1+2+3+...+$nu' is ==> $s"

```

## 1.7. debug

```shell
sh [-nvx] scripts.sh

-n  ：不要执行 script，仅查询语法的问题； 
-v  ：再执行 sccript 前，先将 scripts 的内容输出屏幕上； 可以用-v跟踪脚本里的每个命令的执行。
-x  ：输出一行脚本, 执行这一行, 并附加扩充信息。debug 常用

sh -x xx.sh


# 当然，也可以在脚本里，添加
set -o verbose
set -o xtrace
```

## 1.8. 学习几个demo

这是一个 Java 程序的启动脚本

```sh
#!/bin/sh
## java env
export JAVA_HOME=/usr/local/jdk1.7.0_55
export JRE_HOME=$JAVA_HOME/jre

## exec shell name
EXEC_SHELL_NAME=sys-service\.sh
## service name
SERVICE_NAME=zhousw-sys-service
SERVICE_DIR=/usr/local/workspace/sys-service
JAR_NAME=$SERVICE_NAME\.jar
PID=$SERVICE_NAME\.pid

cd $SERVICE_DIR

case "$1" in

    start)
        nohup $JRE_HOME/bin/java -Xms256m -Xmx512m -jar $JAR_NAME >/dev/null 2>&1 &
        echo $! > $SERVICE_DIR/$PID
        echo "#### start $SERVICE_NAME"
        ;;

    stop)
        kill `cat $SERVICE_DIR/$PID`
        rm -rf $SERVICE_DIR/$PID
        echo "#### stop $SERVICE_NAME"

        sleep 5

        TEMP_PID=`ps -ef | grep -w "$SERVICE_NAME" | grep -v "grep" | awk '{print $2}'`
        if [ "$TEMP_PID" == "" ]; then
            echo "#### $SERVICE_NAME process not exists or stop success"
        else
            echo "#### $SERVICE_NAME process pid is:$TEMP_PID"
            kill -9 $TEMP_PID
        fi
        ;;

    restart)
        $0 stop
        sleep 2
        $0 start
        echo "#### restart $SERVICE_NAME"
        ;;

    *)
        ## restart
        $0 stop
	sleep 2
        $0 start
        ;;

esac
exit 0



```


# 2. 正则&文本格式化

## 2.1. 正则表达式和语言系统有关系



## 2.2. 正则中的特殊符号



## 2.3. grep进阶用法

[grep基础用法](#截取命令)



正则表示法中的特殊符号



* `grep -n 'key' <file>` 搜寻key
* `grep -vn 'key' <file>` 反向选择
* `dmesg | grep 'eth'`找到核心信息的eth那行
* ` dmesg | grep -n --color=auto 'eth'` 关键词显色, 显示行号
* `dmesg | grep -n -A3 -B2 --color=auto 'eth'` 前2行和后3行一起显示
* `grep -n 't[ea]st' <file>`搜寻即可字符(test 或 tast)
* ` grep -n '[^g]oo' regular_express.txt ` 不为指定字符
* `grep -n '[^a-z]oo' regular_express.txt ` 不为某个字符范围
* ` grep -n '[0-9]' regular_express.txt` 取得有数字的行
* ` grep -n '^the' regular_express.txt `以指定字符开头
* `grep -n '^[a-z]' regular_express.txt` 开头为小写字符
* ` grep -n '\.$' regular_express.txt ` 以指定字符结束
* ` grep -n 'o\{2\}' regular_express.txt ` 指定字符出现次数


如果希望设定grep自动关键词显色, 可修改`~/.bashrc` , 加上一行:`alias grep='grep --color=auto'`, 然后`source ~/.bashrc`生效

## 2.4. 延伸正则表示法

egrep




## 2.5. sed

还可以将数据进行取代、删除、新增、抓取特定行



* `nl /etc/passwd | sed [-e] '2,5d'` 带行号列出, 并删除2-5行(sed后的动作需要引号)
* ` nl /etc/passwd | sed '2a drink tea' ` 第2行后添加文字
* ` nl /etc/passwd | sed '2i drink tea' `行前添加文字
* sed增加多行, 需要\+enter跳脱
* `nl /etc/passwd | sed '2,5c No 2-5 number' ` 取代2-5行
* `nl /etc/passwd | sed -n '5,7p'` 抓取5-7行, 同`head -n 7 | tail -n 2`

sed的行内格式化: `sed 's/要被取代的字符串/新字符串/g'`

* `ifconfig eth0 | grep 'inet addr' | sed 's/^.*addr://g' | sed 's/Bcast.*$//g'`获取ip（替换功能）
* `sed -i 's/匹配串/替换成的内容/g' /xxx `替换，直接修改原始档案


## 2.6. awk行内格式化

格式: `awk '条件类型1{动作 1} 条件类型 2{动作 2} ...' filename`; 默认的行内分隔符为空格或者tab; 变量可以直接用, 无需加$符号

* `last -n 5 | awk '{print $1 "\t" $3}' ` 没有条件,只有动作; $1代表第一栏, $2表示第二栏...; $0表示一整栏

awk的内建变量:



* `last -n 5| awk '{print $1 "\t lines: " NR "\t columes: " NF}' `和printf联用, printf的内容用双引号
* ` awk 'BEGIN{FS=":"} $3 < 10 {print $1 "\t " $3}` 不用默认的分隔符号


## 2.7. printf格式化打印



* `printf '%s\t %s\t %s\t \r\n' $(cat /xxx) `格式化打印

## 2.8. 文件对比工具

diff: 以行为对比单位



cmp: 字节为单位对比

patch: 对比升级



* ` diff -Naur passwd.old passwd.new > passwd.patch` 制作差异补丁文件
* ` patch -p0 < passwd.patch ` 更新
* `  patch -R -p0 < passwd.patch ` 还原

`-p0`的解释见[原始码&tarball](#原始码&tarball)




# 3. bash 


## 3.1. 快捷键

Ctrl+u 清除当前命令行，命令输入了一半，不想继续，用delete太慢，Ctrl+c太笨，Ctrl+u 刚合适
Ctrl+k 清除光标后内容
Ctrl+w 清除光标前的一个单词
Ctrl+a 光标移至行首，很常用
Ctrl+e 光标移至行尾，很常用
Ctrl+l 清屏，等同于clear
Ctrl+z 当前命令行执行程序挂起，想退出命令，又不想终止程序，可以使用这个命令

## 3.2. 几种 bash 环境 startup 配置文件对比

- 交互式 shell: 在终端上执行，shell等待你的输入，并且立即执行你提交的命令, 如 登录、执行一些命令.

- 非交互shell: 以shell script(非交互)方式执行, 当它读到文件的结尾EOF，shell也就终止了. 

    “$-”变量的值（代表着当前shell的选项标志）, 查看字符串中是否包含“i”选项（表示interactive shell）来区分交互式与非交互式shell

- 登录shell:需要用户名、密码登录后才能进入的shell（或者在脚本中通过”–login”选项生成的shell）, 称为一个会话

- 非登录 shell: 不需要输入用户名和密码即可打开的Shell，例如：直接命令“bash”就是打开一个新的非登录shell, 通过 terminal 打开的 shell

对于bash, 登录shell（包括交互式登录shell和使用“–login”选项的非交互shell），它会首先读取和执行 `/etc/profile`全局配置文件, 接着执行` /etc/profile.d/`目录下的脚本文件，然后依次查找 `~/.bash_profile、~/.bash_login 和 ~/.profile`这三个配置文件, 然后 ~/.bashrc, 登出, 执行 `~/.bash_logout`; su - root 就是切到 root 的登录 shell

在非登录shell里，只读取` ~/.bashrc （和 /etc/bash.bashrc、/etc/bashrc ）`文件，不同的发行版里面可能有所不同, 如果装了 zsh, 则先读取 .zshrc, 一般会在 .zshrc 中 `source .bash_profile`; su root 就是 切到 root  nologin shell


## 3.3. 和 Python 交互

```sh

#!/bin/bash

ping -c 1 baidu.com &>/dev/null && echo "network ok" || echo "network error"

# eof 只是标识符, 可以随意定义
# <<- 为必须,
/usr/bin/python3 <<-eof
print("hello py")
eof

echo "hello bash"
```


## 3.4. 示例

https://github.com/jaywcjlove/shell-tutorial
https://github.com/wangdoc/shell-tutorial/blob/master/docs/basics/variable.md

```sh


#!/bin/bash

echo  "helloworld!"

# 运行
./demo.sh


# #################shell 变量

# - 环境变量,
# 区分大小写

# - shell变量
# PATH 决定了shell将到哪些目录中寻找命令或程序 
# HOME 当前用户主目录 
# HISTSIZE　历史记录数 
# LOGNAME 当前用户的登录名 
# HOSTNAME　指主机的名称 
# SHELL 当前用户Shell类型
# LANGUGE 　语言相关的环境变量，多语言可以修改此环境变量
# MAIL　当前用户的邮件存放目录 
# PS1　基本提示符，对于root用户是#，对于普通用户是$
echo $HOME
echo ${HOME} 

###############自定义变量 字符串#################
#!/bin/bash
#自定义变量hello
# 变量声明默认都是string类型
# 等号两边无空格, 若值中有空格, 用引号(单双均可)括起来
#   [""]中的 [$] 可以保有原本特性, 如 var="lang is $LANG"
#   ['']中的 [$] 仅仅是一般字符

#* 设定变量后需要`export <变量名>` 导出以在其他程序中使用
#* 系统变量一般为大写, 自定义变量为小写方便判断
#* `unset <变量名>` 取消变量设定
hello="hello world"
# or
hello='hello world'
echo $hello
echo  "helloworld!"
echo 'hello - ${PATH}' # hello - ${PATH}

#获取字符串长度
name="SnailClimb"
# 第一种方式
echo ${#name} #输出 10
# 第二种方式
expr length "$name";

# 计算表达式

# 使用 expr 命令时，表达式中的运算符左右必须包含空格，如果不包含空格，将会输出表达式本身:
expr 5 + 6       // 输出 11
expr 5+6    // 错误, 直接输出 5+6

# 对于某些运算符，还需要我们使用符号\进行转义
expr 5 * 6       // 输出错误
expr 5 \* 6      // 输出30

################## string 截取###################3


# 截取子串
#从字符串第 1 个字符开始往后截取 10 个字符
# 从 0 开始, 左闭右开 
str="SnailClimb is a great man"
echo ${str:0:10} #输出:SnailClimb

# 查找子串
# 查找字符 i 或 o 的位置(哪个字母先出现就计算哪个)：
string="runoob is a great site"
echo `expr index "$string" io`  # 输出 4, index 从 1 开始

# 根据表达式截取
#    #:      表示左→右开始匹配，匹配最短的, 然后删除, 返回剩余的串
#    ##： 表示左→右开始匹配，匹配最长的, 然后删除
#    %：   表示右→左开始匹配，匹配最短的, 然后删除
#    %%：表示右→左开始匹配，匹配最长的, 然后删除

#!bin/bash
#author:xiaoyu

var="http://www.runoob.com/linux/linux-shell-variable.html"

s1=${var%%t*}#h
s2=${var%t*}#http://www.runoob.com/linux/linux-shell-variable.h
s3=${var%%.*}#http://www
s4=${var#*/}#/www.runoob.com/linux/linux-shell-variable.html
s5=${var##*/}#linux-shell-variable.html

####################shell数组############################

#!/bin/bash
array=(1 2 3 4 5);
# 获取数组长度
length=${#array[@]}
# 或者
length2=${#array[*]}
#输出数组长度
echo $length #输出：5
echo $length2 #输出：5
# 输出数组第三个元素
echo ${array[2]} #输出：3
unset array[1]# 删除下表为1的元素也就是删除第二个元素
for i in ${array[@]};do echo $i ;done # 遍历数组，输出： 1 3 4 5 
unset arr_number; # 删除数组中的所有元素
for i in ${array[@]};do echo $i ;done # 遍历数组，数组元素为空，没有任何输出内容

############### 引入其他指令 #####################

# 引入其他指令, 借助反单引号 " \` ", 如 
system=\`uname\`----\`uname -r\`
echo system # 显示Linux-----3.10.0-693.2.2.el7.x86_64 ; 

# 另外还有一种方法: 
system=$(uname)----$(uname -r)


```

## 3.5. 所有可用的shell

bash是linux可以使用的shell之一(zsh, dash...), 查看系统可以使用的全部shell可以`vim /etc/shells`, 见下图:

某个用户登录可以使用的shell, 记录在 /etc/passwd

bash优点:

* 历史命令记录, 在 ${user.home}/.bash_history, 如root的在 ~/.bash_history

* 命令/档案补全

* alias, 如 `alias lm='ls -al' `

* (job control, foreground, background. 后台运行

* shell script

* 支持通配符 `*`

`type <cmd>` 列出指令使用情况 可以当作[which](#搜寻文件和指令)用

## 3.6. 环境变量

* `env` 查看所有环境变量(也可以用`export`)

    
    
    * ` declare -i number=$RANDOM*10/32768` 定义随机数number, 范围是0---9

* `set` 查看环境变量和自定义变量(也可以用`declare`)

    

* 设定命令提示符PS1 `echo $PS1`

    

* `echo $$` 本shell 的 线程代号(PID)

* `echo $?` 上个命令的返回值(一般上个指令正常结束返回0, 异常则返回错误代码)

* `export <自定义变量名>` 自定义变量转为环境变量
    * 环境变量能被子程序识别(子程序继承了环境变量), 自定义变量无法被子程序识别(无法继承)

* `locale -a`查看所有支持的语系
* `locale` 查看本机的语系设定

    


## 3.7. 键盘读取read



* `read <自定义变量名>` 读取键盘输入, 存入指定变量
* `read -p "Please keyin your name: " -t 30 named` 带提示信息, 限制等待时间30s

## 3.8. declare,typeset声明变量类型



* ` declare -i sum=100+300+50 `, 此时sum为450
* `declare -x <变量名>` 转为环境变量 ,同 `export xxxx`
* ` declare +x <环境变量名>` 移除环境变量
* `declare -r <变量名>` 声明为只读
* `declare -p sum` 单独列出变量类型

## 3.9. 变量的删除取代

```sh
#:      表示左→右开始匹配，匹配最短的, 然后删除
##： 表示左→右开始匹配，匹配最长的, 然后删除
%：   表示右→左开始匹配，匹配最短的, 然后删除
%%：表示右→左开始匹配，匹配最长的, 然后删除

匹配方向有别，但是匹配表达式还是顺序的

取代看后面的图

var="http://www.runoob.com/linux/linux-shell-variable.html"

s1=${var%%t*}#h
s2=${var%t*}#http://www.runoob.com/linux/linux-shell-variable.h
s3=${var%%.*}#http://www
s4=${var#*/}#/www.runoob.com/linux/linux-shell-variable.html
s5=${var##*/}#linux-shell-variable.html
```





## 3.10. 变量的测试和内容替换

判断变量是否存在

- xxx=${xxx-yyy} 如果xxx未设定，则设为yyy
- xxx=${xxx:-root} 如果未设定or为空串，设为yyy

更多见:



## 3.11. 命令别名和设定

* 设定别名`alias lm='ls -al | more' `
* 查看所有`alias`
* 取消设定` unalias lm `

## 3.12. 命令历史



* `history` 列出所有的命令历史
* `history 3` 最近3个命令

## 3.13. 指令搜寻顺序

1.   以相对/绝对路径执行命令，例如『 /bin/ls 』和『 ./ls 』； 
2.   由 alias 找到命令执行； 
3.   由 bash 内建的 (builtin) 命令来执行； 
4.   透过 $PATH 这个发量的顺序搜寻到第一个命令执行。

## 3.14. bash登录欢迎信息

* ` cat /etc/issue`查看进站信息

    

* `cat /etc/issue.net` 查看使用telnet登录的欢迎信息

* `cat /etc/motd` 大家登录都会看到的提示信息

## 3.15. bash的环境配置文件

 login shell(输入帐号密码) 和 non-login shell(无需输入帐号密码就能登录)两种登录shell类型登录时读取的配置文件不同

 login shell只读取两个配置文件: 
 
 1. /etc/profile(系统的整体设定, 不要修改)

    * 每个使用者登录都会读取, 设定这些变量

        

    * 此外, 还会读取外部的配置文件

        * /etc/inputrc 设定一些热键
        * /etc/profile.d/*.sh (多个), 规定了bash接口的颜色, 语系一些命令别名; 如果需要为所有的user设定命令别名则修改
        * /etc/sysconfig/i18n 这个档案是由 /etc/profile.d/lang.sh 调用！这也是我们决定 bash 使用什么预习,LANG的设定

 2. ~/.bash_profile 或 ~/.bash_login 或 ~/.profile---------都是个人配置文件, 在1和1的下属配置文件都调用的才调用它

    * 3个文件之后有一个被读取, 以上是读取顺序, 一旦前者被读取, 后者就不会读取了

    * 以~/.bash_profile为例, 实际会读取~/.bashrc, 可以将自定义配置写入该文件, 通过`source ~/.bashrc` 读入配置; 或者`. ~/.bashrc`

login shell只读取~/.bashrc

此外, 还有其他的配置文件会影响bash

/etc/man.config 



~/.bash_history 



~/.bash_logout



## 3.16. 终端机的环境设定stty,set

`stty -a`列出所有按键和按键内容



比如设定` stty erase ^h` 使用ctrl+h进行删除

## 3.17. 通配符和特殊符号



## 3.18. 数据流重导向




* ` ll / > <file>` 将数据输出到指定文件(数据会被覆盖)
* ` ll / >> <file>` 数据会被累加
* 查看/home下是否有.bashrc档案存在` find /home -name .bashrc `, 有出错信息会直接输出到屏幕, 现在将正常结果和错误信息输出到不同文件`find /home -name .bashrc > list_right 2> list_error`
* `find /home -name .bashrc 2> /dev/null` 将错误输出扔掉( /dev/null 可以吃掉任何导向这个装置的信息)
* ` find /home -name .bashrc > list 2>&1` 正确输出和错误输出写入同一个文件
* `cat > <file>` 将键盘输入存入指定文件(ctrl+d结束输入)
* ` cat > catfile < ~/.bashrc ` 新建立的catfile就是后者的复制
* `cat > catfile << "eof"` 输入"eof"就结束输入(<<表示后面接的是结束字符)
* 多重重导向 tee 

    

    * `last | tee last.list | cut -d " " -f1 ` 同时输出一份数据到两处地方
    * ` ls -l /home | tee ~/homefile | more`同上
    * ` ls -l / | tee -a ~/homefile | more ` 累加输出

## 3.19. &&和||



## 3.20. 管线命令



## 3.21. 截取命令

cut: 主要用于将每一行里的数据分解, 去除想要的分段


 
* `echo $PATH | cut -d ':' -f 5`获取 PATH 内容，找出第五个路径
* `echo $PATH | cut -d ':' -f 3,5` 找到第三个和第五个路径
* `export | cut -c 12-` 每一行从第12个字符开始取

grep: 从多行中去除需要的行, 见[grep进阶用法](#grep进阶用法)



* `last | grep 'root'` 含有root的行
* ` grep -v 'root'` 没有root的行
* ` grep --color=auto '<key>' <file> ` 在指定文件中寻找

## 3.22. 排序sort,wc,uniq

sort: sort将文件/文本的每一行作为一个单位，相互比较，比较原则是从首字符向后，依次按ASCII码值进行比较，最后将他们按升序输出



对于`-k`: 格式：-k  fstart.cstart, fend.cend，都是数字，从1开始，若有多重排序，后面再接 -k ...eg:http://wangchujiang.com/linux-command/c/sort.html

* `cat /etc/passwd | sort` 默认排序
* `cat /etc/passwd | sort -t ':' -k 3` 冒号分开,用第三栏排序
* `cat /etc/passwd | sort -t ':' -k 3 -n ` 以数字进行排序(默认为文字排序)

uniq: 将重复的数据只显示一行(必须在使用sort之后使用)

wc: 显示总字符, 总行数

## 3.23. 字符转换命令

tr: 删除 文字替换

* `last | tr '[a-z]' '[A-Z]'` 所有的小写变为大写
* `cat /etc/passwd |tr -d ":"` 将passwd中所有的[:]删除
* `cp /xxx /root/xxx && unix2dos /root/xxx `将/xxx复制到/root下并转成dos断行
* ` cat /xxx | tr -d '\r' > /root/xxx `删除/xxx中的换行符号

col: tab以空格显示

* ` cat -A /xxx `显示出所有按键符号
* `cat /etc/man.config | col -x | cat -A | more` 显示tab为空格

expand: 替换tab为空格

split: 档案分割

xargs: 主要用于将前面的输出流格式化成输入参数

join, paste


## 3.24. 字符串

删库悲剧:

```sh
# https://mp.weixin.qq.com/s/arUO8dhdUa-L1evglIQiog

cur_path = `pwd`
new_cur_path = `${cur_path}/bbb` # 问题: `` 包围的代码会先执行, 但是 这里 反引号中的内容不是有效的命令, 返回空
rm -rf ${new_cur_path}/* 2>>/dev/null # 最终变成 rm -rf /*

# 改正: 将 `` 去掉, 或者再加上 ""
# 最好的办法是:
#如果目录不为空，才执行删除操作
if [ ${work_path} != "" ];then
    rm -fr ${work_path}/*
fi

```

# vim 使用


https://vim-adventures.com/ vim游戏
https://mp.weixin.qq.com/s/_XncbAGmfeWDSG04Ce51vA tips


https://vimjc.com/ blog
https://github.com/wsdjeg/vim-galore-zh_cn 中文教程




* 一般模式: 默认模式, 可移动光标, 删除, 复制粘贴; 无法编辑内容
* 编辑模式: 一般模式中, 按下[i, o, a, r] 进入, 按下[Esc]退出
* 命令模式: 一般模式中, 按下[:, /, ?]三个中的任何一个, 即可进入, 可 搜索, 保存, 离开vim/vi, 大量取代字符



```sh

比如想删除一行再进行编辑, 之前习惯 dd 再 insert, 其实有更简便的 S; 
再比如 a = "xyz" 想更换双引号为单引号, 使用 r 来一个一个替代, 其实有更简便的: 光标在 xyz 中, cs"'(change surrounding " to ').


 ZZ 替代 :wq, 无需回车
 :x 保存退出




>> 浏览:

ctrl+d    "向下"移动 【半页】
ctrl+u    “向上”移动 【半页】
ctrl+f    向下一页
ctrl+b    向上一页
Ctrl+o      返回上一个位置
G         移动到【最后一行】
18G         移动到 18 行
:18         到第 18 行
gg        移动到【第一行】
enter     下一行有效字符行首         n+enter   向下移动n行行首
-         上一行有效行首

0         移动到行首
^           移动到有字符的行首
g_          到本行最后一个不是blank字符的位置。和 ^ 对应
$           移动到行尾


w           下一个单词头部
W           下一个大单词头部
e           下一个单词尾部

% : 匹配括号移动，包括 (, {, [. （陈皓注：你需要把光标先移到括号上）
* 和 #:  匹配光标当前所在的单词，移动光标到下一个（或上一个）匹配单词（*是下一个，#是上一个）


( 向上跳转到空行和空行附近的一行
) 向下跳转到空行和空行附近的一行
{ } 和 ( ) 类似但不跳转空行的附近行
]] 跳转到下一个 {
[[ 跳转到上一个 {
][ 跳转下一个 }
[] 跳转到上一个 }
% 跳转到另一个花括号或圆括号

:E      浏览目录 也可以直接vim一个目录




>> 搜寻:

/keyword    回车 向下搜寻keyword， 按下【n】后， 继续向下搜寻下一个， 【N】表示向上搜寻; 找到目标后回车光标到达目标位置
?keyword    回车 向上搜寻
\<keyword\>  首尾精确匹配           “\>” 是一个特殊的记号，表示只匹配单词末尾。类似地，”\<” 只匹配单词的开头

:set ic(ignorecase缩写)   忽略大小写, 默认是区分大小写的
:set noic(noignorecase的缩写)   恢复大小写敏感

/\Cword 区分大小写的查找 
/word   (不加 \C 默认就是区分大小写的)

/\cword 不区分大小写的查找 



>> 行内查找

fx      查找本行光标后面的 x 字符, 使用分号查找下一个 
            3fa     在当前行查找第三个出现的a。
Fx      反向查找
t,      到逗号前的第一个字符。逗号可以变成其它字符。 
            常常这样使用 dt"    删除到 " 处
T,      反向查找





>> 选择/复制/删除/粘贴: (复制/剪切的内容可以跨文件)

x        删除当前光标下的字符
d        删除
dd       删除一行               2dd         向下剪切 2 行
dw       删除光标之后的单词剩余部分(包括单词后的空格)。
daw      delete around word 删除光标所在的 整个单词, 包括单词后的空格
diw      delete inner Word 删除光标所在单词, 不包括空格
d$       删除光标之后的该行剩余部分。
dit      删除 标签内部内容
di"      删除 quotes 内部
dip      删除段落
das      删除整句


yy         即 yank. 复制整行， 
p       在光标下一行粘贴
v     进入 选择模式选中多行, 再按下 y 复制, 或者 d 剪切
V       选中当前行
ctrl + v   垂直选择 列选择 (块操作)
:1,.d       删除第一行到当前行 ("."当前行 ，"1,."表示从第一行到当前行 ，"d"删除)

一旦选择, 可以做许多操作:

J → 把所有的行连接起来（变成一行）
< 或 > → 左右缩进
= → 自动给缩进 （陈皓注：这个功能相当强大，我太喜欢了）


>> 存储到缓冲区

1-9个数字缓冲区，用来保存最近删除的数据
a-z缓冲区用来保存保存用户需要临时保存的数据
如果用大写字母表示缓冲区，则数据被追加到后面

例如:
(寄存器操作都是双引号开头)

"ayy 把数据复制到a缓冲区里面 (前面要加上“)
"2p 把2号缓冲区的内容复制出来
"ap 把a缓冲区的内容复制出来


匿名寄存器 ""
编号寄存器 "0 到 "9
小删除寄存器 "-
26个命名寄存器 "a 到 "z
3个只读寄存器 ":, "., "%
Buffer交替文件寄存器 "#
表达式寄存器 "=
选区和拖放寄存器 "*, "+, "~
黑洞寄存器 "_     所有删除或拷贝到黑洞寄存器的文本将会消失,  实现用x命令删除一个字符而不是剪切，具体命令是："_x
搜索模式寄存器 "/



>> 修改 (删除后进入插入模式)

c      即 change.  功能和d相同，区别在于完成删除操作后进入INSERT MODE
cc       删除当前行，然后进入INSERT MODE, 等同 S
ciw    change inner word 删除当前单词进入插入模式
ci"    change inner " 删除双引号内的字符, 等待插入
ct)     change to ) 删除到右括号(不包括右括号), 等待插入
gU (变大写)
gu (变小写)



>> 插入

i:在光标所在字符前开始插入
a:在光标所在字符后开始插入
o:在光标所在行的下面另起一新行插入
s:删除光标所在的字符并开始插入

I:在光标所在行的行首开始插入 如果行首有空格则在空格之后插入
A:在光标所在你行的行尾开始插入
O:在光标所在行的上面另起一行开始插入
S:删除光标所在行并开始插入





>> 撤销/恢复

u 撤销上一步的操作 
Ctrl+r 恢复上一步被撤销的操作




>> 重做

重复操作: https://blog.csdn.net/ii1245712564/article/details/46496347
https://learnku.com/articles/21986
https://www.jianshu.com/p/05ffb5823d96

重复类型	重复操作符	回退操作符
文本改变重复	.	u
行内查找重复	;	,
全文查找重复	n	N
文本替换重复	&	u
宏重复	@[寄存器]	u

>> 宏

qa 开始录制宏, 宏名为 a
q 停止录制
@a 执行宏 a
@@ 重复执行上次 replay 的宏

在一个只有一行且这一行只有“1”的文本中
qaYp<C-a>q  
    qa 开始录制
    Yp 复制行.
    <C-a> 增加1.
    q 停止录制.
@a → 在1下面写下 2
@@ → 在2 正面写下3
100@@ 会创建新的100行，并把数据增加到 103.





>> 行号

:set nu     显示行号 nu === number
:set nonu   取消显示行号 nonu === nonumber

vim xxx +13 # 打开 xxx 光标定位到 13 行





>> 执行命令 并读取结果

:read !ls *pdf






>> 缓冲区

vim file1 file2 file3...     一次打开多个文件, 每个文件对应一个缓冲区, 第一个文件会被现实到窗口

:badd [+99] filename   新增一个缓冲区加载指定文件 (可指定光标行数)

:buffers, :files, :ls     列出所有缓冲区 (第一个数字是缓冲区的标号；第二个标记是缓冲区当前的状态；紧接着是与缓冲区所关联的文件名)
            状态包括: 
            1. - 或 = 只读
            1. a 激活, 当前正显示在窗口
            1. h 隐藏, 已经载入, 但是没有显示在窗口
            1. + 已经更改过的缓冲区
            1. x 读取时报错
            1. % 当前缓冲区(current buffer)
            1. # alternate buffer 交换缓冲区
            1. u unlisted buffer 只有 :ls! 才显示的 buffer

:buffer number/filename 显示缓冲区

:sbuffer number/filename    分割当前窗口开始编辑一个缓冲区

切换缓冲区 (根据默认设置，在切换到另一缓冲区之前，Vim将提示你保存当前缓冲区。你也可以使用:set hidden命令，允许在未保存的情况下切换缓冲区)

:bnext到下一个缓冲区；
:bprevious, :bNext到前一个缓冲区；
:blast到最后一个缓冲区；
:bfirst到第一个缓冲区


:bdelete filename，:bdelete 3或:3 bdelete命令来删除一个缓冲区      有改动, 则无法删除, 
:bdelete! filename   强制删除
:1,3 bdelete命令来删除指定范围的缓冲区


:bunload filename 卸载 buffer, 类似 :bdelete, 但是 文件名仍然留存在 buffer list 中



>> 分屏 (:split 和 vsplit.)


分屏启动文件
vim -On file1 file2 ... (垂直分屏, n 是数字，表示分成几个屏)
vim -on file1 file2 ... (水平分屏)


Ctrl+W c  关闭当前分屏
Ctrl+W q 关闭当前分屏, 如果只剩最后一个了，则退出Vim

Ctrl+W s  上下分割当前打开的文件。
Ctrl+W v  左右分割当前打开的文件。


:sp filename  上下分割，并打开一个新的文件。
:vsp filename  左右分割，并打开一个新的文件。


Ctrl+W k/j/h/l 在多个分屏中切换光标 (若是方向键大写, 则是移动分屏)
Ctrl+W w  把光标移到下一个的屏中

Ctrl+W =  让所有的屏都有一样的高度
Ctrl+W +/-  增加/减少高度 (对于宽度你可以使用[Ctrl+W <]或是[Ctrl+W >])


:split → 创建分屏 (:vsplit创建垂直分屏)
<C-w><dir> : dir就是方向，可以是 hjkl 或是 ←↓↑→ 中的一个，其用来切换分屏。
<C-w>_ (或 <C-w>|) : 最大化尺寸 (<C-w>| 垂直分屏)
<C-w>+ (或 <C-w>-) : 增加尺寸
```



```


