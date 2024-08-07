---
title: 鸟哥的 Linux 私房菜阅读笔记
tags:
  - linux
  - 阅读笔记
date: 2016-03-18 15:04:50
toc_min_heading_level: 2
toc_max_heading_level: 5
---

https://dunwu.github.io/linux-tutorial/#%F0%9F%93%96-%E5%86%85%E5%AE%B9 手册

https://coolshell.cn/articles/19219.html shell 工作环境最佳实践

Linux Note | references: [1](http://linux.vbird.org/); 各种命令使用实例: https://linuxtools-rst.readthedocs.io/zh_CN/latest/ ; 50个常用命令: https://gywbd.github.io/posts/2014/8/50-linux-commands.html ; 

https://github.com/ckjbug/kali-Linux-learning 破解

https://linuxtools-rst.readthedocs.io/zh_CN/latest/base/01_use_man.html 学会使用 man 帮助命令

<!--more-->

- [2. ebpf](#2-ebpf)
- [拾遗](#拾遗)
    - [配置文件读取顺序](#配置文件读取顺序)
- [3. 主机规划-磁盘分区](#3-主机规划-磁盘分区)
    - [3.1. 系统开机过程](#31-系统开机过程)
    - [3.2. 硬件设备在Linux中的文件名称](#32-硬件设备在linux中的文件名称)
    - [3.3. 磁盘组成](#33-磁盘组成)
    - [3.4. 磁盘分割](#34-磁盘分割)
    - [3.5. 挂载(mount):文件系统(磁盘)和目录树结合](#35-挂载mount文件系统磁盘和目录树结合)
- [4. linux系统目录规范/Filesystem Hierarchy Standard (FHS)](#4-linux系统目录规范filesystem-hierarchy-standard-fhs)
    - [4.1. 详细目录用途说明](#41-详细目录用途说明)
    - [4.2. 不能和\[/\]分开到不同分区的目录](#42-不能和分开到不同分区的目录)
    - [4.3. FHS推荐的目录规范](#43-fhs推荐的目录规范)
        - [4.3.1. \[/\]的内容和意义](#431-的内容和意义)
        - [4.3.2. \[/usr\]的内容和意义](#432-usr的内容和意义)
        - [4.3.3. \[/var\]的内容和意义](#433-var的内容和意义)
- [5. 杂七杂八的问题](#5-杂七杂八的问题)
    - [5.1. 入侵后排查 tips 应急响应指南](#51-入侵后排查-tips-应急响应指南)
    - [5.2. 命令帮助](#52-命令帮助)
        - [5.2.1. whatis](#521-whatis)
        - [5.2.2. info](#522-info)
        - [5.2.3. man](#523-man)
        - [5.2.4. which](#524-which)
    - [5.3. 环境变量](#53-环境变量)
    - [5.4. 日期时间日历计算器](#54-日期时间日历计算器)
- [6. 常见问题](#6-常见问题)
    - [6.1. 关机 重启](#61-关机-重启)
    - [6.2. root密码丢失了](#62-root密码丢失了)
    - [6.3. 文件系统错误的问题](#63-文件系统错误的问题)
- [9. 文件和目录的权限](#9-文件和目录的权限)
    - [9.1. 3个身份3种权限](#91-3个身份3种权限)
    - [9.2. 文件的属性,ls](#92-文件的属性ls)
    - [9.3. 改变文件属性\&权限](#93-改变文件属性权限)
        - [9.3.1. 改变群组chgrp](#931-改变群组chgrp)
        - [9.3.2. 改变拥有者chown](#932-改变拥有者chown)
        - [9.3.3. 改变权限chmod](#933-改变权限chmod)
    - [9.4. 文件和目录的权限区别](#94-文件和目录的权限区别)
    - [9.5. 文件/目录的默认权限umask](#95-文件目录的默认权限umask)
    - [9.6. 文件/目录的隐藏属性chattr](#96-文件目录的隐藏属性chattr)
    - [9.7. 文件/目录的特殊权限SUID,SGID,SBIT](#97-文件目录的特殊权限suidsgidsbit)
        - [9.7.1. Set Uid](#971-set-uid)
        - [9.7.2. Set Gid](#972-set-gid)
        - [9.7.3. Sticky Bit](#973-sticky-bit)
    - [9.8. 几个场景对应的权限分配](#98-几个场景对应的权限分配)
    - [9.9. 几个场景实例](#99-几个场景实例)
- [10. 文件和目录的管理](#10-文件和目录的管理)
    - [10.1. 路径问题](#101-路径问题)
    - [10.2. 处理目录的指令](#102-处理目录的指令)
    - [10.3. 文件查看/复制/删除/移动](#103-文件查看复制删除移动)
        - [10.3.1. 文件检视](#1031-文件检视)
        - [10.3.2. 文件复制/建立连接档(快捷方式)](#1032-文件复制建立连接档快捷方式)
        - [10.3.3. 删除文件/目录](#1033-删除文件目录)
        - [10.3.4. 移动or重命名](#1034-移动or重命名)
        - [10.3.5. 获取路径的文件名/目录名](#1035-获取路径的文件名目录名)
    - [10.4. 文件内容查看](#104-文件内容查看)
        - [10.4.1. cat和tac](#1041-cat和tac)
        - [10.4.2. nl设计行号](#1042-nl设计行号)
        - [10.4.3. 翻页检视more/less](#1043-翻页检视moreless)
        - [10.4.4. "行级别"的数据过滤head/tail](#1044-行级别的数据过滤headtail)
        - [10.4.5. 读取非文本数据od](#1045-读取非文本数据od)
    - [10.5. 创建文件/修改文件时间](#105-创建文件修改文件时间)
    - [10.6. 搜寻文件和指令](#106-搜寻文件和指令)
        - [10.6.1. which,whereis,locate](#1061-whichwhereislocate)
        - [10.6.2. find](#1062-find)
    - [10.7. 光盘写入工具和iso文件](#107-光盘写入工具和iso文件)
- [11. 硬盘和文件系统管理](#11-硬盘和文件系统管理)
    - [11.1. ext2文件系统](#111-ext2文件系统)
        - [11.1.1. inode,block,superblock](#1111-inodeblocksuperblock)
        - [11.1.2. fs格式化后的结构图](#1112-fs格式化后的结构图)
        - [11.1.3. 目录/文件和inode,block关系](#1113-目录文件和inodeblock关系)
    - [11.2. ext2/ext3文件存取和日志式文件系统](#112-ext2ext3文件存取和日志式文件系统)
    - [11.3. 磁盘/目录容量查看](#113-磁盘目录容量查看)
    - [11.4. 实体链接和符号链接](#114-实体链接和符号链接)
    - [11.5. 磁盘管理fdisk](#115-磁盘管理fdisk)
        - [11.5.1. 分区/删除](#1151-分区删除)
        - [11.5.2. 格式化mkfs](#1152-格式化mkfs)
        - [11.5.3. 检验fsch,badblocks](#1153-检验fschbadblocks)
        - [11.5.4. 挂载mount/unmount](#1154-挂载mountunmount)
        - [11.5.5. 设定开机挂载](#1155-设定开机挂载)
        - [11.5.6. 设定磁盘参数](#1156-设定磁盘参数)
    - [11.6. 内存置换空间(swap)](#116-内存置换空间swap)
- [12. 压缩和打包](#12-压缩和打包)
    - [12.1. 常见的压缩工具](#121-常见的压缩工具)
    - [12.2. gzip和zcat](#122-gzip和zcat)
    - [12.3. bzip2和bzcat](#123-bzip2和bzcat)
    - [12.4. 打包tar](#124-打包tar)
    - [12.5. dd](#125-dd)
    - [12.6. cpio](#126-cpio)
    - [12.7. dump完整备份工具](#127-dump完整备份工具)
    - [12.8. restore复原](#128-restore复原)
- [13. 帐号管理\&ACL权限设定](#13-帐号管理acl权限设定)
    - [13.1. user management](#131-user-management)
    - [13.2. ulimit限制用户的资源](#132-ulimit限制用户的资源)
- [14. 周期任务](#14-周期任务)
- [15. 磁盘阵列和LVM文件系统](#15-磁盘阵列和lvm文件系统)
- [16. 周期任务](#16-周期任务)
- [17. 程序管理](#17-程序管理)
    - [17.1. Job control背景前景](#171-job-control背景前景)
    - [17.2. 程序](#172-程序)
    - [17.3. 安装卸载](#173-安装卸载)
        - [17.3.1. 原始码-tarball](#1731-原始码-tarball)
            - [17.3.1.1. 一般的安装指令](#17311-一般的安装指令)
        - [17.3.2. 包管理软件-rpm和srmp和 yum](#1732-包管理软件-rpm和srmp和-yum)
            - [17.3.2.1. rpm](#17321-rpm)
                - [17.3.2.1.1. rpm安装软件](#173211-rpm安装软件)
                - [17.3.2.1.2. rpm更新软件](#173212-rpm更新软件)
                - [17.3.2.1.3. rpm查询软件](#173213-rpm查询软件)
                - [17.3.2.1.4. rpm验证和数字签名](#173214-rpm验证和数字签名)
                - [17.3.2.1.5. rpm软件卸载和重建数据库](#173215-rpm软件卸载和重建数据库)
            - [17.3.2.2. srpm](#17322-srpm)
        - [17.3.3. apt和apt-get](#1733-apt和apt-get)
        - [17.3.4. yum 使用](#1734-yum-使用)
- [18. SELinux](#18-selinux)
- [19. 防火墙](#19-防火墙)
    - [19.1. nftables (推荐, 代替 iptables)](#191-nftables-推荐-代替-iptables)
    - [19.2. iptables](#192-iptables)
- [20. 系统服务 daemons](#20-系统服务-daemons)
    - [20.1. daemons是什么](#201-daemons是什么)
    - [20.2. daemons相关的文件脚本](#202-daemons相关的文件脚本)
    - [20.3. 怎么启动](#203-怎么启动)
    - [20.4. 设定开机启动](#204-设定开机启动)
    - [20.5. service 和 systemctl 和 chkconfig 区别](#205-service-和-systemctl-和-chkconfig-区别)
    - [20.6. supervisor 进程管理](#206-supervisor-进程管理)
- [21. 操作记录](#21-操作记录)
    - [21.1. 安装c编译环境gcc](#211-安装c编译环境gcc)
    - [21.2. 安装nodejs](#212-安装nodejs)
    - [21.3. jdk环境](#213-jdk环境)
    - [21.4. maven环境](#214-maven环境)
    - [21.5. mysql环境](#215-mysql环境)
    - [21.6. 安装 zsh](#216-安装-zsh)




# 2. ebpf

https://blog.csdn.net/qq_24433609/article/details/125879684

https://www.ebpf.top/post/awesome-ebpf/

# 拾遗

## 配置文件读取顺序

```sh
/etc/profile：
    为系统的每个用户设置环境信息,当用户第一次登录时,该文件被执行. 并从/etc/profile.d目录的配置文件中搜集shell的设置
    
    如果你有对/etc/profile有修改的话必须得重启你的修改才会生效，此修改对每个用户都生效

/etc/bashrc：
    为每一个运行bash shell的用户执行此文件.当bash shell被打开时,该文件被读取, 每次用户打开一个终端时，即执行此文件

    如果你想对所有的使用bash的用户修改某个配置并在以后打开的bash都生效的话可以修改这个文件，修改这个文件不用重启，重新打开一个bash即可生效。

~/.bashrc
    包含专用于你的bash shell的bash信息,当登录时以及每次打开新的shell时,该文件被读取.

    类似于/etc/bashrc，不需要重启生效，重新打开一个bash即可生效， /etc/bashrc对所有用户新打开的bash都生效，但~/.bashrc只对当前用户新打开的bash生效。

~/.bash_profile
    每个用户都可使用该文件输入专用于自己使用的shell信息,当用户登录时,该 文件仅仅执行一次! 默认情况下,他设置一些环境变量,执行用户的.bashrc文件。

    此文件类似于/etc/profile，也是需要需要重启才会生效，/etc/profile对所有用户生效，~/.bash_profile只对当前用户生效。

~/.profile
    在Debian中使用.profile文件代 替.bash_profile文件, 是.bash_profile的同义词，目的是为了兼容不同的 Shell

~/.bash_logout
    当每次退出系统(退出bash shell)时,执行该文件. 可把一些清理工作的命令放到这文件中





~/.bash_profile 是交互式、login 方式进入bash 运行的；
~/.bashrc 是交互式 non-login 方式进入bash 运行的；
通常二者设置大致相同，所以通常前者会调用后者。
设置生效：可以重启生效，也可以使用命令：source

但一般 来说都会在.bash_profile里调用.bashrc脚本以便统一配置用户环境。
```


# 3. 主机规划-磁盘分区

## 3.1. 系统开机过程

1. BIOS：开机主动执行, 找到可开机的设备(如硬盘)

1. MBR：主要启动记录区(Master Boot Record, MBR)
   
   可以安装开机管理程序(boot loader)的地方

2. 开机管理程序(boot loader)：一支可读操作系统启动程序来执行的软件, 可以安装在MBR 和 每个分区的 boot sector(启动扇区), 这是一个重要的设计, 这样就可以制作多重引导的环境(多系统), 因为我们可以将不同的boot loader安装到不同的分区的最前端(boot sector)而不用覆盖整个磁盘唯一的MBR; boot loader可以有这些作用:

    - 多系统启动：用户可以选择不同的开机项目，这也是多重引导的重要功能

    - 载入操作系统启动程序

    - 转交其他 loader：将开机管理功能转交给其他 loader 负责

3. 操作系统启动程序：开始操作系统的功能

BIOS 和 MBR 都是硬件本身会支持的功能,  Boot loader 则是操作系统安装在 MBR 上面的一套软件

## 3.2. 硬件设备在Linux中的文件名称

## 3.3. 磁盘组成

磁柱是磁盘分区的最小单位
整个磁盘的第一个扇区特别重要, 记录了整个磁盘的元信息, 记录2点信息:

1. 主要启动记录区(Master Boot Record, MBR)：可以安装开机管理程序的地方，有 446 bytes
2. 分割表(partition table)：记录整颗硬盘分割癿状态，有 64 bytes

下面着重谈谈磁盘分区表(partition table)

* 其实所谓癿『分割』叧是针对那个 64 bytes 癿分割表迚行设定而已
* 硬盘默讣分割表仅能写入四组分割信息
* 这四组分割信息我们称为主要(Primary) or 延伸(Extended)分割槽
* 当系统要写入磁盘时，一定会参考磁盘分区表，才能针对某个分割槽迚行数据处理
* 延伸分割最多只能有1个, 这1个继续分割出多个逻辑分区

## 3.4. 磁盘分割

为什么要分割?

* 数据安全
* 提高系统性能(如: 当有数据需要读取自分割后的分区时, 磁盘只会搜寻1-100磁柱而不会搜寻全部磁盘)



硬盘四个分割记录区仅使用到两个，P1 为主要分割，而 P2 则为延伸分割, 延伸分割可以继续分割多个逻辑分区
上述分区在Linux中文件名为 /dev/hda[1-2], /dev/hda[5-9]

怎举装置文件名没有/dev/hda3 , /dev/hda4 呢？因为前面四个号码都是保留给 Primary 和 Extended 用的, 所以逻辑分割槽装置名称号码就由 5 号开始

* 简单自定义分割, 适合新手:分割[/(根目录)]和[swap(内存置换空间)]即可, [/]对应的磁盘要容量最大; 此外如果可以, 预留一个备用的剩余磁盘容量供练习分区or 备份之用
    * 如: 20G硬盘, 15G的分区给[/], 512M的分区给[swap], 剩下的作为预留备份磁盘
* 最好的分割: 根据用途不同, 为 /, /boot, /usr, /home, /var, /Swap 分配合适的磁盘空间; 如: 希望邮件主机大点, 则 /var 分配大点. 开放samba服务, 给其他人存放资料, /home 分配大点. 

## 3.5. 挂载(mount):文件系统(磁盘)和目录树结合



# 4. linux系统目录规范/Filesystem Hierarchy Standard (FHS)





## 4.1. 详细目录用途说明

简单版本:

/ 根目录下

```sh
- opt/ 安装的自定义软件包, tomcat, node, redis...

- etc/ 程序的全局配置文件 (系统密码)
- etc/passwd 用户数据库
- etc/shadow 影子口令文件。就是密码文件, 只对root可读。这使破译口令更困难
- etc/group 用户组
- etc/init.d 启动脚本
- etc/rc 启动脚本
- etc/rc.d

- usr/ (unix system resource) 安装发行版官方软件包的位置
- usr/bin 大部分软件的命令
- usr/sbin root用户才能执行的命令
- usr/share 程序资源文件(MySQL配置文件模板)
- usr/local 用户自己安装的程序的快捷方式 (下载到 /opt/ 下的程序会在这里配置软链接)

- var/ 动态数据。这个目录的内容是经常变动的
- var/www apache服务器网站内容
- var/log 日志文件, 需要定期删除
- var/lib 会动态改变的数据文件 (MySQL的数据文件)

- bin/ 开机, 进入单人维护模式 相关的命令, 系统程序相关命令(ls , mkdir)
- sbin/ 开机, 进入单人维护模式 相关命令, root的命令

```

详细版本:

/ 根目录    (/必须和如下目录在一个分区: /bin, /sbin, /etc, /dev, /lib; 而/home, /usr, /var, /tmp最好和/在不同分区)  - 下面的目录都在根目录下


- boot/    启动文件[开机配置文件]。Linux的内核及引导系统程序所需要的文件目录，比如 vmlinuz initrd.img 文件都位于这个目录中。在一般情况下，GRUB或LILO系统引导管理器也位于这个目录；

    - grub/             Grub引导器相关的文件

- dev/      设备文件。设备文件在安装是产生，以后可以用 /dev/MAKEDEV 描述。 /dev/MAKEDEV.local 是系统管理员为本地设备文件(或连接)写的描述文稿 (即如一些非标准设备驱动不是标准MAKEDEV 的一部分)。

- opt/      表示的是可选择的， 额外的意思，比如自定义软件包，额外安装的可选应用程序包所放置的位置。一般情况下，我们可以把tomcat等都安装到这里；。有些我们自己编译的软件包，就可以安装在这个目录中；通过源码包安装的软件，可以通过 ./configure --prefix=/opt/目录 。

- proc/    是一个假的文件系统。它不存在在磁盘某个磁盘上。而是由核心在内存中产生。用于提供关于系统的信息(originally about processes, hence the name)。 虚拟文件系统目录，是系统内存的映射。可直接访问这个目录来获取系统信息。 /proc 文件系统在proc man页中有更详细的说明。

    - 1/                   关于进程1的信息目录。每个进程在/proc 下有一个名为其进程号的目录。

    - cpuinfo          处理器信息，如类型、制造商、型号和性能。

    - devices         当前运行的核心配置的设备驱动的列表。

    - dma               显示当前使用的DMA通道。

    - filesystems核心配置的文件系统。

    - interrupts    显示使用的中断，and how many of each there have been.

    - ioports 当前使用的I/O端口。

    - kcore             系统物理内存映象。与物理内存大小完全一样，但不实际占用这么多内存；it is generated on the fly as programs access it. (记住：除非你把它拷贝到什么地方，/proc 下没有任何东西占用任何磁盘空间。)

    - kmsg             核心输出的消息。也被送到syslog 。

    - ksyms            核心符号表。

    - loadavg         系统"平均负载"；3个没有意义的指示器指出系统当前的工作量。

    - meminfo       存储器使用信息，包括物理内存和swap。

    - modules       当前加载了哪些核心模块。

    - net                 网络协议状态信息。

    - self                 到查看/proc 的程序的进程目录的符号连接。当2个进程查看/proc 时，是不同的连接。这主要便于程序得到它自己的进程目录。

    - stat                系统的不同状态，such as the number of page faults since the system was booted.

    - uptime          系统启动的时间长度。

    - version          核心版本。

- mnt/     临时挂载另外的文件系统。这个目录一般是用于存放挂载储存设备的挂载目录的，比如有cdrom 等目录。可以参看/etc/fstab的定义。有时我们可以把让系统开机自动挂载文件系统，把挂载点放在这里也是可以的。

    - cdrom           光驱。

- media/ 挂载媒体设备

- root/    root用户的$HOME目录

- home/  普通用户的$HOME目录

    - user/             用户

- bin/       系统程序。存放二进制可执行文件(ls,cat,mkdir等)，常用命令一般都在这里；

    功能和/usr/bin类似，区别是/bin主要放置在开机时用到的以及进入单人维护模式还能够被使用的命令;而/usr/bin放置的是大部分软件提供的指令。

- sbin/     管理员系统程序, /bin和/sbin都和开机/单人维护模式有关。

    大多是涉及系统管理的命令的存放，是超级权限用户root的可执行命令存放地，普通用户无权限执行这个目录下的命令，
    
    这个目录和/usr/sbin; /usr/X11R6/sbin或/usr/local/sbin目录是相似的；
    
    凡是目录sbin中包含的都是root权限才能执行的。

- lib/        程序所需的共享库 （库文件）。可能还有 lib64/

    - modules       核心可加载模块，特别是那些恢复损坏系统时引导所需的(例如网络和文件系统驱动)。
│
- etc/      系统程序和大部分应用程序的`全局配置文件`,尤其passwd, shadow

    - init.d/   SystemV风格的启动脚本[系统开机时候加载服务的scripts的摆放地点]

    - rcX.d/    启动脚本的链接，定义运行级别

    - network/      网络配置文件

    - X11/               图形界面配置文件

    - rc or rc.d or rc?.d         启动、或改变运行级时运行的scripts或scripts的目录。

    - passwd                  用户数据库，其中的域给出了用户名、真实姓名、家目录、加密的口令和用户的其他信息。格式见passwd 的man页。

    - fdprm            软盘参数表。说明不同的软盘格式。用setfdprm 设置。更多的信息见setfdprm 的man页。

    - fstab              启动时mount -a命令(在/etc/rc 或等效的启动文件中)自动mount的文件系统列表。 Linux下，也包括用swapon -a启用的swap区的信息。见4.8.5节和mount 的man页。

    - group            类似/etc/passwd ，但说明的不是用户而是组。见group 的man页。

    - inittab  init 的配置文件。

    - issuegetty 在登录提示符前的输出信息。通常包括系统的一段短说明或欢迎信息。内容由系统管理员确定。

    - magicfile      的配置文件。包含不同文件格式的说明，file 基于它猜测文件类型。见magic 和file 的man页。

    - motd             Message Of The Day，成功登录后自动输出。内容由系统管理员确定。经常用于通告信息，如计划关机时间的警告。

    - mtab             当前安装的文件系统列表。由scripts初始化，并由mount 命令自动更新。需要一个当前安装的文件系统的列表时使用，例如df 命令。

    - shadow                  在安装了影子口令软件的系统上的影子口令文件。影子口令文件将/etc/passwd 文件中的加密口令移动到/etc/shadow 中，而后者只对root可读。这使破译口令更困难。

    - login              defslogin 命令的配置文件。

    - printcap        类似/etc/termcap ，但针对打印机。语法不同。

    - profile,csh.login,csh.cshrc  登录或启动时Bourne或C shells执行的文件。这允许系统管理员为所有用户建立全局缺省环境。各shell见man页。

    - securetty     确认安全终端，即哪个终端允许root登录。一般只列出虚拟控制台，这样就不可能(至少很困难)通过modem或网络闯入系统并得到超级用户特权。

    - shells             列出可信任的shell。chsh 命令允许用户在本文件指定范围内改变登录shell。提供一台机器FTP服务的服务进程ftpd 检查用户shell是否列在 /etc/shells 文件中，如果不是将不允许该用户登录。

    - termcap       终端性能数据库。说明不同的终端用什么"转义序列"控制。写程序时不直接输出转义序列(这样只能工作于特定品牌的终端)，而是从 /etc/termcap 中查找要做的工作的正确序列。这样，多数的程序可以在多数终端上运行。见termcap 、 curs_termcap 和terminfo 的man页。

- usr/      这个是系统存放程序的目录 （Unix system resource），比如命令、帮助文件等。这个目录下有很多的文件和目录。当我们`安装一个Linux发行版官方提供的软件包时，大多安装在这里`。如果有涉及服务器配置文件的，会把配置文件安装在/etc目录中。

    - bin/                几乎所有用户命令。有些命令在/bin 或/usr/local/bin 中。[一般用户指令]

    - sbin/              根文件系统不必要的系统管理命令，例如多数服务程序。[系统管理员指令]

    - lib/                 应用程序库文件，程序或子系统的不变的数据文件

    - share/           应用程序资源文件

        - fonts              字体目录

        - man 或 doc        帮助目录

    - src/                应用程序源代码

    - local/             本地安装的软件和其他文件放在这里。

        - soft/              用户程序      ， 下面还有单独文件夹， 通常使用单独文件夹

    - X11R6/                   图形界面系统

    - include/        C编程语言的头文件。为了一致性这实际上应该在/usr/lib 下，但传统上支持这个名字。

- var/      动态数据。这个目录的内容是经常变动的；

    - www/            目录是定义Apache服务器站点存放目录；

    - catman/       当要求格式化时的man页的cache。man页的源文件一般存在/usr/man/man* 中；有些man页可能有预格式化的版本，存在/usr/man/cat* 中。而其他的man页在第一次看时需要格式化，格式化完的版本存在/var/man 中，这样其他人再看相同的页时就无须等待格式化了。 (/var/catman 经常被清除，就象清除临时目录一样。)

    - lib/                 `系统正常运行时要改变的一些库文件，比如MySQL`的，以及MySQL数据库的的存放地

    - local/             安装的程序的可变数据(即系统管理员安装的程序)。注意，如果必要，即使本地安装的程序也会使用其他/var 目录，例如/var/lock 。

    - lock/              锁定文件。许多程序遵循在/var/lock 中产生一个锁定文件的约定，以支持他们正在使用某个特定的设备或文件。其他程序注意到这个锁定文件，将不试图使用这个设备或文件。

    - log/                各种程序的Log文件,[摆放系统注册表档案的地方]，特别是login (/var/log/wtmp log所有到系统的登录和注销) 和syslog (/var/log/messages 里存储所有核心和系统程序信息。 /var/log 里的文件经常不确定地增长，应该定期清除。

    - run/               保存到下次引导前有效的关于系统的信息文件。例如， /var/run/utmp 包含当前登录的用户的信息。

    - spool/            mail, news, 打印队列和其他队列工作的目录。每个不同的spool在/var/spool 下有自己的子目录，例如，用户的邮箱在/var/spool/mail 中。

    - tmp/              比/tmp 允许的大或需要存在较长时间的临时文件。 (虽然系统管理员可能不允许/var/tmp 有很旧的文件。)

- temp/                     临时文件目录，有时用户运行程序的时候，会产生临时文件。/tmp就用来存放临时文件的。/var/tmp目录和这个目录相似。

- lost+found/  在ext2或ext3文件系统中，当系统意外崩溃或机器意外关机，而产生一些文件碎片放在这里。当系统启动的过程中fsck工具会检查这里，并修复已经损坏的文件系统。 有时系统发生问题，有很多的文件被移到这个目录中，可能会用手工的方式来修复，或移到文件到原来的位置上。



## 4.2. 不能和[/]分开到不同分区的目录

另外要注意的是，因为[/]和开机有关，开机过程中仅有[/]会被挂载, 其他分割槽则是在开机完成后才会持续的挂载。就是因为如此，因此[/]下和开机过程有关的目录就不能够和[/]放到不同的分割槽去, 哪些目彔不可与[/]分开呢？有底下这些：

*  /etc：配置文件 
*  /bin：重要执行档 
*  /dev：所需要的装置档案 
*  /lib：执行档所需的函式库/核心所需的模块 
*  /sbin：重要的系统执行文件 

## 4.3. FHS推荐的目录规范



### 4.3.1. [/]的内容和意义



### 4.3.2. [/usr]的内容和意义

其实 usr 是 Unix Software Resource 的缩写， 也就是『Unix操作系统软件资源』所放置的目录，而不是用户的数据

依据 FHS 的基本定义，/usr 里面放置的数据属于可分享的不可变动的(shareable, static)

类似 Windows 系统的『C:\Windows\ + C:\Program files\』这两个目录的综合体，系统刚安装完毕时，这个目录会占用最多的硬盘容量。 一般来说，/usr 的次目录建议有底下这些:



### 4.3.3. [/var]的内容和意义



# 5. 杂七杂八的问题

## 5.1. 入侵后排查 tips 应急响应指南

https://github.com/theLSA/emergency-response-checklist

```sh
# 1.查看异常进程活动-查找是否有异常进程和端口占用

## 1.1 查找占用 cpu 最多的进程
* 运行 top 命令后，键入大写字母 P 按 cpu 排序

## 1.2 查找占用内存最多的进程
* 运行 top 命令后，键入大写字母 M
* `ps aux | sort -k4nr`

## 1.3 查找进程对应的文件
* `ls -la /proc/$pid/exe`
* `ls -la /proc/$pid`

## 1.4 跟踪异常进程运行情况
* `strace -tt -T -e trace=all -p $pid`

## 1.5 查看进程打开的文件
* `lsof -p $pid`

## 1.6 查看进程端口情况
* 查看所有端口 `netstat -anltp`
* 查看指定进程的端口 `netstat -anltp | grep $pid`
* `netstat -apn|more`

## 1.7 清除恶意进程
* 清除可疑进程的进程链： `ps -elf | grep [pid] kill -9 [pid]`

# 2.查看账号安全

## 2.1 查看是否有存在新增异常账号
* 查找特权用户 `awk -F ":" '$3==0{print $1}' /etc/passwd`
* 查找可以远程登录的账号信息 `awk '/\$1|\$6/{print $1}' /etc/shadow`
* 查找 sudo 权限账户 `cat /etc/sudoers | grep -v "^#\|^$" | grep "ALL=(ALL)"`

## 2.2 查看是否有账号异常登录情况
* 查看当前登录用户和其行为 `w`
* 查看所有用户最后一次登录的时间 `lastlog`
* 查看错误登陆信息 `lasstb`
* 查看所有用户的登录注销信息及系统的启动、重启及关机事件 `last`
* 查看登录成功的日期、用户名及 ip `grep "Accepted " /var/log/secure* | awk '{print $1,$2,$3,$9,$11}'`
* 查看试图爆破主机的 ip
```
grep refused /var/log/secure* | awk {'print $9'} | sort | uniq -c |sort -nr | more

grep "Failed password" /var/log/secure* | grep -E -o "(([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3}))" | uniq -c
```

* 查看有哪些 ip 在爆破主机的 root 账号
`grep "Failed password for root" /var/log/secure | awk '{print $11}' | sort`

* 查看爆破使用的用户名字典
`grep "Failed password" /var/log/secure | awk {'print $9'} | sort | uniq -c | sort -nr`

# 3.检查开机启动项

一般通过`crontab -l`命令即可检测到定时任务后门。不同的 linux 发行版可能查看开机启动项的文件不大相同，Debian 系 linux 系统一般是通过查看`/etc/init.d`目录有无最近修改和异常的开机启动项。而 Redhat 系的 linux 系统一般是查看`/etc/rc.d/init.d`或者`/etc/systemd/system`等目录。

依次排查：
```
/var/spool/cron/*
/etc/crontab
/etc/cron.d/*
/etc/cron.daily/*
/etc/cron.hourly/*
/etc/cron.monthly/*
/etc/cron.weekly/
/etc/anacrontab
/var/spool/anacron/*
```

* `cat /etc/rc.local`
* `cat /etc/init.d/rc.local`
* `chkconfig --list`
* `ls -alt /etc/init.d`

* 查看 anacron 异步定时任务 `cat/etc/anacrontab`
* 枚举主机所有服务 `service--status-all`

# 4.查找异常文件

## 4.1 查看最近一段时间内被修改的系统文件
* `find /etc/ /usr/bin/ /usr/sbin/ /bin/ /usr/local/bin/ -type f -mtime -T | xargs ls -la`

## 4.2 按时间排序，确认最近是否有命令被替换，可以结合 rpm -Va 命令
* `ls -alt /usr/bin /usr/sbin /bin /usr/local/bin`
* `rpm -Va>rpm.log`

## 4.3 查看指定目录下文件时间的排序
* `ls -alt | head -n 10`

## 4.4 使用 find 指令查找限定时间范围的文件
* `sudo find ./ -cmin -10 -name "*.php"`


# 5.排查恶意 alias
检查 `~/.bashrc`和`~/.bash_profile`

# 6.排查恶意 ssh 公钥
* `/etc/.ssh/AuthorizedKeys`
* `~/.ssh/AuthorizedKeys`

# 7.系统文件被替换的情况下使用`busybox`
被替换的系统文件通常为 `ld.so.preload`

* `busybox ps -ef|grep watchdogs`
* `busybox ps -ef|grep ksoftirqds`


# 8.借助工具查杀病毒和 rootkit

## 8.1 查杀 rootkit
chkrootkit (下载地址-http://www.chkrootkit.org)
rkhunter (下载地址-http://rkhunter.sourceforge.net)

## 8.2 查杀病毒
clamav(下载地址-http://www.clamav.net/download.html)

## 8.3 查杀 webshell
cloudwalker(下载地址-http://github.com/chaitin/cloudwalker)

# 9. 添加命令审计
为历史的命令增加登录的 IP 地址、执行命令时间等信息

## 9.1 保存 1 万条命令：
* `sed -i 's/^HISTSIZE=1000/HISTSIZE=10000/g' /etc/profile`

## 9.2 在/etc/profile 的文件尾部添加如下行数配置信息


USER_IP=`who -u am i 2>/dev/null | awk '{print $NF}' | sed -e 's/[()]//g'`
if [ "$USER_IP" = "" ]
then
USER_IP=`hostname`
fi

export HISTTIMEFORMAT="%F %T $USER_IP `whoami` "
shopt -s histappend
export PROMPT_COMMAND="history -a"

```




## 5.2. 命令帮助

### 5.2.1. whatis

`whatis command` 命令简述 , 显示命令所在的具体的文档类别

`whatis -w "loca*"` 正则匹配

### 5.2.2. info

`info command` 更加详细的说明文档:类似于man, 只支持info格式的说明文件

### 5.2.3. man

帮助文档分为了如下9个类别( 一般我们查询bash命令，归类在1类中 )

```
(1)、用户可以操作的命令或者是可执行文件
(2)、系统核心可调用的函数与工具等
(3)、一些常用的函数与数据库
(4)、设备文件的说明
(5)、设置文件或者某些文件的格式
(6)、游戏
(7)、惯例与协议等。例如Linux标准文件系统、网络协议、ASCⅡ，码等说明内容
(8)、系统管理员可用的管理条令
(9)、与内核有关的文件
```

* `man 3 printf` 查看第三类帮助文档

* `man -k keyword` 关键字查询命令

* `man command` 查看指令, 例如: man date, 空格翻页, q退出, `/keyword`回车键搜索, n跳到下一个搜索目标, N跳到上一个目标

    

    其中 DATE(1)中的"1"表示什么呢?

    

* `man -f command`(等同于`whatis command`, 前提是建立命令数据库:`makewhatis`) 查看更多命令相关信息, 严格匹配下图左边的命令名称, 如果需要更具关键字匹配 `man -k command`(等同于`apropos command`)

    

    有两个相关命令: man(1), man(7), 查看指定命令 `man 1 man`or `man 7 man`;
    如果仅仅使用 `man man` 到底使用哪个描述文件呢? 在/etc/man.conf里配置

### 5.2.4. which

`which command` 查看程序的binary文件(可直接执行的文件)所在路径

`whereis command` 查看程序的搜索路径(一般是压缩文件)




## 5.3. 环境变量

* 环境变量

    * `echo $PATH` 查看环境变量(每个目录使用冒号分割, 有顺序之分)
    * ` PATH="$PATH":/root ` 修改环境变量
    * 为了安全起见，不建议将『.』加入 PATH 的搜寻目录中;
    * 不同身份使用者预设置的 PATH 不同，默认能够随意执行的命令也不同(如 root 和 vbird)
    * PATH 可以修改，所以一般使用者还是可以透过修改 PATH 来执行某些位亍/sbin 或/usr/sbin 下的指令；

## 5.4. 日期时间日历计算器

* 日期时间(date),日历(cal),计算器(bc)

    

# 6. 常见问题

## 6.1. 关机 重启

1. 首先查看系统使用状态, `who`看看有谁在线, `netstat -a`看看网络的联机状态, `ps -aux`看看后台执行的程序

2. 通知在线的使用者关机时间

3. 关机, shutdown/reboot



模拟一个关机过程:

首先 `sync`内存数据同步到磁盘;

知道shutdown但是不知道具体用法, `man shutdown`查看; 用法为: shutdown [-t 秒] [-arkhncfF] 时间 [警告讯息] 



看几个例子:

`shutdown -h 10 'I will shutdown after 10 min'` 10 min后关机, 并发送警告信息出去
`shutdown -h +10`10 min后关机
`shutdown -h now`立马关机
`shutdown -h 10:15` 今天的10:15分会关机, 如果命令键入时间晚于这个时间, 会第二天的这个时间点执行关机
`shutdown -r now` 马上重启
`shutdown -r +30 'The system will reboot after 30 min'`30 min后reboot, 并发送信息
`shutdown -k now 'some message'` 给所有在线者发送信息, 不会真的关机

`sync;sync;sync;reboot`同步数据重启

关机还有另一种方式: `init 0`, 解释如下



重启: `reboot`

## 6.2. root密码丢失了

进入单人维护模式:
先将系统重新启劢，在读秒的时候按下任意键, 摁下『e』就能够进入 grub 的编辑模式了, 此时，请将光标移到 kernel 那一行，再按一次『 e 』进入 kernel 所在的这行的编辑画面中,  然后在出现的画面当中的最后方输入 single , 再按下『 Enter 』确定后，按下 b 就可以开机进入单人维护模式了. 在这个模式底下，你会在 tty1 下无需要输入密码即可取得终端机的控制权(而且是使用 root 的身份)。 之后就能够修改 root
的密码了(使用`passwd`)

## 6.3. 文件系统错误的问题

在开机的过程中最容易遇到的问题就是硬盘可能有坏轨or文件系统发生错误(数据损毁)的情况; 
* 如果你的根目录『/』没有损毁，那就径容易解决: `fsck 某个分区文件名`进行文件系统检查,  这时屏幕会显示开始修理硬盘的讯息，如果有发现任何的错时，屏幕会显示： clear [Y/N]？ 的询问讯息，就直接输入 Y 吧, 最后reboot即可
* 如果根目录毁坏了, 这时你可以将硬盘拔掉，接到另一台 Linux 系统的计算机上， 且不要挂载(mount)该硬盘，然后以 root 的身份执行『fsck /dev/sdb1 』(/dev/sdb1 是你的硬盘装置文件名，你要依你的实际状况来定)


# 9. 文件和目录的权限

## 9.1. 3个身份3种权限

linux中有3种身份, owner/group/others, 且各有read/write/execute权限

帐号信息--/etc/passwd 
密码信息--/etc/shadow
群组信息--/etc/group

## 9.2. 文件的属性,ls



1. 第一栏的文件权限属性的详细解释:

    * 第一个字符表示这个数据是 `目录(d)`or `文件(-)`or `连接档link file(l)` or `可存取设备(b)` or `鼠标/键盘串行端口设备(c)`
    * 接着的3个字符: owner的权限
    * 接着的3个字符: 同group的人的权限
    * 接着的3个字符: other身份的权限

2. 第二栏的连接数表示有多少文件名连接到这个节点(i-node); 这个属性记录的，就是有多少不同的档名连结到相同的一个 i-node 号码去了.

3. 第三栏表示拥有者是谁

4. 第四栏表示属于哪一个分组

5. 第五栏表示file size ,单位默认bytes, 如果希望显示完整的时间`ls -l --full-time`

6. 第六栏表示更新日期/创建日期

7. 第七栏为这个档案的档名, 如果以[.]开头, 表示为隐藏文件, 也就是`ls`和`ls -a`的区分

## 9.3. 改变文件属性&权限



### 9.3.1. 改变群组chgrp

被改变的组名必项要在/etc/group 档案内存在才行，否则就会显示错误



### 9.3.2. 改变拥有者chown

在/etc/passwd 这个档案中有记录的用户名称才能改变

chown 用处很多, 比如同时修改owner和group,仅修改owner, 仅修改group 

`chown <owner>:<group> <file>` 同时修改
`chown <owner> <file>` 仅修改owner
`chown .<group> <file>` 仅修改group

在哪里使用呢? 最常见的例子就是在复制档案(`cp <source file> <target file>`)给你之外的其他人, 复制后需要修改文件属性/权限

### 9.3.3. 改变权限chmod



* 使用数字表示权限

    r: 4, w: 2, x: 1

    例如: -rwxrwx---, 分数为
    owner: rwx=4+2+1=7
    group: rwx=7
    other: ---=0+0+0=0
    所以命令为 `chmod 770 <file>`

    再比如: 编写一个shell文件, 希望给别人执行, 不能修改, 需要 -rwxr-xr-x, 键入命令 `chmod 755 <file>`

* 使用符号表示权限

    基本上九个权限分别是(1)user (2)group (3)others 三种身份, 那我们就可以由 u, g, o 来代表三种身份的权限！此外, a 则代表 all 亦即全部的身份.

    

    例如: 设定 -rwxr-xr-x, 
    user(u): rwx
    group(g): rx
    other(o): rx
    所以命令为 ` chmod u=rwx,go=rx <file> `

    再比如: 不知道原先文件权限, 只是希望给其增加每个人的[w]权限, `chmod a+w <file>`
    再比如: 不知道原先文件权限, 只是希望拿掉每个人对文件的[x]权限, `chmod a-x <file>`

## 9.4. 文件和目录的权限区别

文件是实际存放数据的地方，包括一般文本文件、数据库内容文件、二进制可执行文件(binary program)等等, rwx对文件的意义是这样的:

* r (read)：可读取此一档案的实际内容，如读取文本文件的文字内容等； 
* w (write)：可以编辑、新增or修改该档案的内容(但不能删除该档案)； 
* x (execute)：该档案具有可以被系统执行的权限

目彔是记录文件名列表，文件名与目录有强烈的联系, rwx对于目录的意义:

* r (read contents in directory)： 
 
    表示具有读取目录结构列表的权限，所以当你具有读取(r)一个目录的权限时，表示你可以查询该目录下的文件名数据。 所以你就可以利用 `ls` 这个指令将该目录的文件名列表显示出来

* w (modify contents of directory)： 
 
    这个可写入的权限对目录来说，是很大的权限. 因为他表示你具有改动该目录文件名列表的权限，也就是底下这些权限： 
    * 建立新的文件/目录； 
    * 删除已经存在的文件/目录(不管该文件的权限为何) 
    * 将已存在的文件/目录更名； 
    * 改变该目录内的文件、目录位置。 
    
    总之, 目录的 w 权限就和该目录底下的文件名异动有关.

* x (access directory)

    目录的 x 权限代表的是用户能否进入该目录成为工作目录, 也就是`cd <dir>`能否顺利进入. 所谓的工作目录(work directory)就是你目前所在的目录.

## 9.5. 文件/目录的默认权限umask

文件新增时, 如果不指定权限, 会有默认权限, umask设定

如何查看默认权限呢?



可以看出umask的结果表示owner, group, other `被拿掉的权限`

比如图中 0`022`: 第一个"0"表示特殊权限暂时不看, 第二个"0"表示owner没有被拿掉任何权限(rwx), 第一"2"表示group被拿掉了w权限, 第二个"2"表示other被拿掉了w权限

新建的文件和目录的默认权限设置是不同的:

* 新建文件, 默认任何人都没有"x"权限,都有"rw", 也就是文件没有被"umask设定的排除权限"处理之前, 权限属性为 -rw-rw-rw-
* 新建目录, 默认所有权限对任何人都开放, 也就是目录没有被"umask设定的排除权限"处理之前, 权限属性为 drwxrwxrwx

所以上图中如果新建文件, 最终权限为 (-rw-rw-rw-) 减去 (-----w--w-) ==> -rw-r--r-- . 如果新建目录, 最终权限为 (drwxrwxrwx) 减去(d----w--w-) ==> drwxr-xr-x 

修改文件/目录的默认权限: `umask <xxx>` 如: `umask 002`新建的文件自己和同group的人都可以r和w

root用户的umask比较严格, 会拿掉比较多的权限, 一般为'022', 这时为了安全考虑;
普通用户的umask就比较宽松, 拿掉的权限比较少, '002', 同组的人可以读写


## 9.6. 文件/目录的隐藏属性chattr

隐藏属性在系统文件安全方面作用很大, chattr只能在 Ext2/Ext3 的文件系统上面生效， 其它文件系统可能就无法支持这个指令了



* `chattr +i <file>` 使得文件无法增删改, 更名, root才能设定该权限
* `chattr -i <file>` i属性取消
* `chattr -a <file>` 文件只能增加数据, 其他均不能, root才能设定该权限

如何显示隐藏属性?




## 9.7. 文件/目录的特殊权限SUID,SGID,SBIT



上图中s, t 就是特殊权限

如何设定呢?借助chmod命令的两种使用方式

第一种方式

4 为 SUID , 二进制文件的owner上的x权限位为s
2 为 SGID , 二进制文件or目录的group上的x权限位为s
1 为 SBIT , 目录的other上的x权限位为t

* ` chmod 4755 filename` 设定file权限为 -rwsr-xr-x, 具有suid
* `chmod 6755 <file>` 具有suid和sgid
* `chmod 1755 <file>` 具有sbit

第二种方式

其中 SUID 为 u+s ，而 SGID 为 g+s ，SBIT 则是 o+t 

* ` chmod u=rwxs,go=x <file>` 设定权限为  -rws--x--x
* ` chmod g+s,o+t <file>` 加上 SGID 和 SBIT  

### 9.7.1. Set Uid

当 s 这个标志出现在档案拥有者的 x 权限上时(如: -rwsr-xr-x), 就称为Set UID, 简称为具有SUID特殊权限(suid重点在于"u"表示暂时性的获得user的身份, 不是group/other身份)



以上就是说: 如果一个二进制程序有SUID,任何用户在执行该程序时, 身份将暂时转变为该二进制文件的owner身份

此外, suid对于shell script, 目录 均无效

这里有个例子:



### 9.7.2. Set Gid

当s符号在owner的x权限位上则表示该二进制文件具有suid, 那么, 当s符号位于group的x权限位上则表示该二进制文件具有sgid; 和suid不同, sgid可以针对二进制文件和目录设定:




如果一个二进制程序有SGID, 则任何一个用户执行时,将暂时获得该程序所属群组的权限;
如果一个目录有SGID, 则任何可以进入该目录(具备rx权限)的用户在进入后, 其有效群组暂时变为该目录的所属群组

### 9.7.3. Sticky Bit

相应的, 如果t符号位于other的x位上则表示目录具有sbit, 目前只针对目录有效, 对于文件已经失效了, sbit对于目录的作用是:



如果目录具有SBIT, 则如果一个用户可以在该目录中写入(具有wx权限),该用户在写入后,只有自己和root能够删除写入的目录or档案

## 9.8. 几个场景对应的权限分配


* 用户能够进入该目录, 成为工作目录(即能够使用cd xxx)

    * 用户对该目录至少需要有`x`权限
    * 如果进一步希望能够 ls 查阅目录下的文件, 还需要`r`权限

* 进一步用户能够读取该目录下一个文件(也就是能够使用cat, more, less)

    * 用户对当前目录至少需要`x`权限
    * 用户对文件至少需要`r`权限

* 能够执行一个文件

    * 目录具有`x`
    文件具有`x`

* 进一步, 能够修改一个文件内容

    * 对当前目录具有`x`
    * 对文件具有`rw`

* 能够创建一个文件

    * 对当前目录具有`wx`

## 9.9. 几个场景实例

情景是这样的



数据准备



1. `mkdir /srv/ahome`建立工作目录
2. `ll -d /srv/ahome` 检视刚才创建的目录, 这里的`-d`表示后面接的是要检视的目录
3. 发现需要修改目录所属群组, 权限也需要相应变化`chown .project /srv/ahome`or`chgrp project /srv/ahome`, `chmod 770 /srv/ahome`
4. 现在看貌似没问题了, 切换身份, 创建一个文件看看能否实现共同编辑.

    * 但是问题来了, 新创建的文件, 群组为创建者, 而不是希望的project, 同组人无法编辑

5. 考虑为工作目录加上 `sgid`特殊权限--`如果一个目录有SGID, 则任何可以进入该目录(具备rx权限)的用户在进入后, 其有效群组暂时变为该目录的所属群组`

    * `chmod 2770 /srv/ahome` 给工作目录加上sgid权限
  

# 10. 文件和目录的管理

## 10.1. 路径问题

* 绝对路径: 以"/"开头, 如 /root/test

* 相对路径: 不是以"/"开头, 如 ../test; 相对于当前工作目录的路径

* 特殊符号代表的目录

    * `.       `  代表此层目录(在所有的目录中都存在)
    * `..      `  代表上一层目录 (在所有的目录中都存在)
    * `-       `  代表前一个工作目录 
    * `~       `  代表『目前用户身份』所在的家目录 
    * `~account`  代表 account 这个用户的家目录(account 是个账号名称) 

## 10.2. 处理目录的指令



* `pwd`显示当前工作目录; `pwd -P`显示确切路径而非连接档路径
* `mkdir -p <dir1>/<dir2>/<dir3>` 递归创建多层目录
    * mkdir -p /xxx/xxx/{yy, zz} 分别创建 xxx/yy, xxx/zz, touch 命令同理
* `mkdir -m 771 test1` 建立dir的同时设置权限(这时不用管预设权限umask)
* `rmdir <dir>` 只能删除空目录; 
* `rmdir -p <dir1>/<dir2>/<dir3>`递归删除空目录
* `rmdir -r <dir>` 强制删除目录及其下所有数据


## 10.3. 文件查看/复制/删除/移动

### 10.3.1. 文件检视

* `ls -al <dir>` 详细列出所有文件(包括隐藏文件)
  * -h 以人类友好容易阅读的方式显示文件大小
  * --block-size=m
  * --block-size=G
* `ls --color=never` 不带颜色显示
* `ls --full-time` 显示详细时间

### 10.3.2. 文件复制/建立连接档(快捷方式)

* `cp <source1> <source2> <dir>` 复制多处数据到一个目录
* `cp -i <source> <target>` 如果有数据覆盖, 会需要确认; 带确认的复制
* `cp -a <source> <target>` 完全复制(属性完全一样, 包括创建时间, 是`-a`中的`-p`的作用)
    * -a 包括 -pdr
    * `cp -r <source> <target>` 递归复制目录

* `cp -u <source> <target>` 是在目标档案和源档案有差异时，才会复制; 常用于数据备份

* `scp xxx_file root@192.xxx.xxx.xx:~/yyy_file` 上传文件, 远程复制 (https://www.cnblogs.com/qiangqiangqiang/p/7677027.html)

* 快捷方式: -l 建立实体链接(hard link); -s 建立符号链接(symbolic link); 属性第二栏会变

    * `cp -l <source> <target>`建立实体链接(hard link)
    * `cp -s <source> <target>`建立符号链接(symbolic link)


### 10.3.3. 删除文件/目录



* `rm -i test*` 以互动模式删除所有以'test'开头的文件
* `\rm -r <xxx>` 直接删除, 不要询问(`\`表示忽略alias的指定选项)

### 10.3.4. 移动or重命名



* `mv <old name> <new name>` 更名 ; 和`rename` 类似
* `mv <source1> <source2> <target dir>` 移动多个数据到一个目录

### 10.3.5. 获取路径的文件名/目录名



## 10.4. 文件内容查看



### 10.4.1. cat和tac



* `cat -n <file>` 带行号显示
* `cat -A <file>` 完整显示内容(包括换行符,空格, tab)
* tac和cat 类似, 只是会从最后一行开始反向显示

### 10.4.2. nl设计行号




* ` nl -b a <file>` 带行号打印(空行也有行号)
* ` nl -b a -n rz <file>` 行号前自动补0, 默认行号是6位, 如果希望改为3位 ` nl -b a -n rz -w 3 <file>`

### 10.4.3. 翻页检视more/less

对于more: `more <file>`会进入more视图



* 进入more视图后, `/<keyword>`搜寻, 按`n`跳到下一处

less 是 more的加强版; 进入 less视图后有更多的选项



### 10.4.4. "行级别"的数据过滤head/tail

* `head <file>` 默认显示前10行
* `head -n 20 <file>` 显示前20行
* `head -n -100 <file>` 不要显示后100行(只显示剩下的前xx行, 如总共110行, 则只显示前10行, 后100行都不显示)

* `tail <file>` 默认显示后10行
* `tail -n 20 <file>` 显示后20行
* `tail -n +100 <file>` 不知道file有多少行, 只想显示100行(包括第100行)以后的数据;
* `tail -f <file>`持续侦测, 直到ctrl+c终止;
    * 这个排查bug的时候很好用, 实际操作时, 怎么找到正确的日志文件? `find . -mmin -1`查看当前文件夹下1min之内变动的日志文件
    * 可能有中文乱码, 在xshell中设置即可
    

### 10.4.5. 读取非文本数据od



## 10.5. 创建文件/修改文件时间

每个文件都有3个时间属性; 
ls 默认显示的是mtime





* `touch <file>` 将mtime和atime时间修改为目前时间(如果不存在则创建文件)
* ` touch -d "2 days ago" <file>` 修改mtime和atime为2天前, ctime不变(ctime记录文件权限属性变化, 无法自定义)

    

* `touch -t 0709150202 <file>`日期改为 2007/09/15 2:02 (同样是修改mtime和atime, ctime无法修改)



## 10.6. 搜寻文件和指令

### 10.6.1. which,whereis,locate

搜寻指令



* `which ifconfig` 搜寻指令

    


搜寻文件, 通常会先使用whereis和locate利用数据库来搜寻, 如果没有结果再使用find




whereis和locate区别:


### 10.6.2. find

最后考虑使用find:

语法比较复杂, 先看跟时间有关的



* ` find / -mtime 0 ` 搜寻0天之前的24h(从现在开始到24h之前)的改动过的文件
* `find / -mtime 3` 是三天前的 24 小时内
* `find / -mtime -4` 4天内被更动过的文件

关于正负号的用法, 




再看跟使用者和group有关的语法



* `find /home -user <someone> ` 找出任何一个用户在系统中的所有档案
* ` find / -nouser ` 搜寻系统中不属于任何人的档案

和文件权限/名称有关的语法:



* ` find / -name passwd ` 找出档名为 passwd 这个档案
* `find /var -type s ` 找出 /var 下，文件类型为 Socket 的文件
* ` find / -perm +7000 ` ：搜寻档案中有 SGID 或 SUID 或 SBIT 等属性

    * `find / -perm +4000 -print ` 找出系统中所有具有suid的文件

* `find / -perm -7000` 表示要有 ---s--s--t 所有三个权限
* `find / -size +1000k` 找出大于1M的文件

    * `find /etc -size +50k -a -size -60k -exec ls -l {} \;` 档案大小介于50-60k之间的文件, 并列出来(`-a`表示and, 符合两个条件才行)
    * `find /etc -size +50k -a ! -user root -exec ls -ld {} \; ` 找出 /etc 底下，档案容量大亍 50K 且档案所属人员是 root 的档名，将权限完整列出 (ls -l)
    * `find /etc -size +1500k -o -size 0` 找出容量大于 1500K 以及容量等于 0 的档案(`-o`表示或)

最后有一个很有用的选项: `-exec`, 语法为:  -exec command ：command 为其他指令，-exec 后面可再接额外的指令处理搜寻到的结果

* ` find / -perm +7000 -exec ls -l {} \`将结果使用ls -l 列出(不支持别名) 

    * 解释如下:
    
    

## 10.7. 光盘写入工具和iso文件

mkisofs：建立映像档



cdrecord：光盘刻录工具


  
# 11. 硬盘和文件系统管理

fs的基本组成:inode, block, superblock

## 11.1. ext2文件系统

### 11.1.1. inode,block,superblock

* inode: 存放文件的权限, 属性(owner/group/time等); 一个文件占用一个inode, 同时记录该文件的数据所在的block号码; 带编号
* data block: 存放实际数据; 一个文件可能有多个block; 带编号
* superblock: 记录整个fs的元信息(如inode/block的总量, 使用量, 剩余以及fs支持的格式等);大小1024bytes, superblock前面还需要保留1024bytes以供开机管理程序的安装

ext2属于 索引式文件系统(indexed allocation), 数据读取方法类似于下图:



os先找到代表文件的inode, 然后读取出存放实际数据的一个或多个block;

与之相对的还有另外一种类型的fs--闪存, 一般是FAT格式的; 没有 inode 存在，所以 FAT 没有办法将这个档案的所有 block 在一开始就读出来。每个 block 号码都记在前一个 block 当中, 读取过程类似这样:



如果同一个档案数据写入的 block 分散的太过厉害，则磁盘头将无法在磁盘转一圈就读到所有的数据， 因此磁盘就会多转好几圈才能完整的读到这个档案的内容, fat格式的文件系统需要 磁盘碎片整理 就是由此而来

ext2文件系统的格式化会将分区区分为多个block group, 每个block group 都会有自己的独立的 inode/block/superblock 系统

### 11.1.2. fs格式化后的结构图

ext2格式化后, 类似下图:



* boot sector: 文件系统最前面有一个启动扇区(boot sector)，可以安装开机管理程序(boot loader)， 这是个重要的设计，因为如此一来我们就能够将不同的开机管理程序安装到不同的文件系统的最前端，而不用覆盖整颗硬盘唯一的 MBR, 这样才能够制作出多重引寻环境(多系统).

* data block (资料区块): 用来放置档案内容数据地方. 在 Ext2 文件系统中所支持的 block 大小有 1K, 2K 及 4K 三种, 而这会导致磁盘支持的最大容量和最大单文件容量的差异, 看下图:

    

    此外block还有如下限制:

    

    因此如果档案都非帯小，但是你的block 在格式化时却选用最大的 4K 时，可能会产生一些容量的浪费. 那么block是否选定最小的1k就行了呢? 显然不是, 如果block统一定为1k, 那么大文件会占用更多的block, 对应的inode会需要记录非常多的data block 编号, 导致读写性能下降.所以格式化时选定block大小需要考虑使用场景.

* inode table (inode 表格) : 记录档案的属性以及该档案实际数据是放置在哪几号 block 内. 具体记录哪些内容看下图

    

    此外inode还有如下限制:

    

    因为inode大小只有128bytes, 系统将 inode 记录 block 号码的区域定为 12 个直接，一个间接, 一个双间接和一个三间接记录区, 见下图:

    

    这样, 1k类型的block就支持最大16G的单文件容量

* Superblock (赸级区块): 记录整个 filesystem 相关信息的地方， 没有 Superblock ，就没有这个 filesystem 了. 具体记录哪些见下图

    

    一般整个磁盘仅有第一个block group有一个superblock, 但是有时候我们为了安全会备份这个superblock到多个group block中方便救援

* Filesystem Description (文件系统描述说明) :这个区段可以描述每个 block group 开始和结束的 block 号码，以及说明每个区段的superblock, bitmap, inodemap, data block) 分别介于哪一个 block 号码间。这部分能够用 dumpe2fs 来观察.

* block bitmap (区块对照表): 从block bitmap 当中可以知道哪些 block 是空的，因此系统就能够快速找到可使用的空间来新增档案, 同样的, 如果删除某些档案时, 需要block bitmap 需要更新哪些block恢复为空了.

* inode bitmap (inode 对照表) : 和 block bitmap 类似, 只是记录的是inode使用或者是空的情况.

### 11.1.3. 目录/文件和inode,block关系

创建一个目录, 系统会分配一个inode(记录目录的`权限`和`属性` 和 `block号码`)和至少一个block(记录目录下`文件的名称`和`文件inode号码`); `ls -li` 查看所有文件的inode号码

建立一个文件时, 系统会分配一个inode和若干个block; 注意inode仅有12个直接指向, 可能需要专门的block记录其他block编号;

文件读取过程和inode,block, 以读取  /etc/passwd  为例:

1. `"/" 的 inode`： 透过挂载点信息找到 /dev/hdc2 的 inode 号码为 2 的根目录 inode，且 inode 记录的权限让root可以读该 block的内容(有 r 和 x) ；
2. `"/" 的 block`:根据inode获取block, 在block中找"etc/"目录的inode
3. `etc/ 的 inode`: 找到"etc/"目录的inode, 进而找到ect/ 的block
4. `passwd的inode`
5. `passwd的block`

## 11.2. ext2/ext3文件存取和日志式文件系统

一般来说，我们将 inode table 和 data block 称为数据存放区域，其他例如 superblock、 block bitmap 和 inode bitmap 等区段就被称为 metadata (元信息) ，因为 superblock, inode bitmap 及 block bitmap 的数据经常变化, 比如每次新增、移除、编辑时都可能会影响到这三个部分的数据.

新增文件时, 这些数据区域是怎么运作的?

1. 确定工作目录对于当前用户的权限
2. 根据 inode bitmap 找到空闲的inode, 写入新文件的权限, 属性
3. 根据 block bitmap 找到空闲的block, 写入实际数据, 并更新步骤2中的inode中的block编号
4. 将以上步骤的inode, block信息同步到 inode bitmap, block bitmap, 并更新superblock内容; (更新metadata)

如果进行到步骤3, 这时突然关机了, metadata无法同步更新------这就是`数据的不一致状态(Inconsistent)`

再次重启会需要进行 数据一致性检查, 相当耗时, 由此 日志式文件系统(代表: ext3) 出现

日志式文件系统会在磁盘中划出专门的一个区域记录准备编辑/新增的文件信息, 这样, 如果写入的过程过程中发生宕机, 再次开机可以简化一致性检查的步骤: 



linux fs 的运作:



## 11.3. 磁盘/目录容量查看

默认单位都是 kb



* `df -h` 打印系统所有的fs, 结果以易读的形式(容量不是默认的kb, 而是G/M)展示出来; 包括分区文件名, 挂载点, 用量等
* `df -h <dir>` 将指定目录下的磁盘容量显示出来
* `du` 列出当前目录下的所有目录(默认只列出目录, 不会列出文件)的容量, "."表示当前目录占用的总容量
* `du -a` 列出档案和文件的容量
* `du -sm /*` 检视根目录下的一级目录容量; -s表示列出匹配的一级目录(次目录),下级目录不要; -m表示容量以Mb表示

df 展示出来的表头的意义:



此外, 如果发现某个目录占用的硬盘资源为0, 不必要奇怪, 可能这个目录挂载的不是硬盘, 而是内存, 当然不占硬盘资源了

## 11.4. 实体链接和符号链接



* `ln -s <s> <t>`符号链接: 类似于windows的快捷方式， 常用
* `ln <source> <target>` 建立实体链接: 通过文件系统的inode产生新的文件名(不是产生新文件)

先看**实体链接**



文件系统的读取过程看下图:



hard link优点:

1. 安全(删除一个还有一个), 
2. 不占空间(某个目录的block中多写入一个关联inode而已)

hard link缺点:

1. 无法跨filesystem
2. 不能link目录(因为会造成复杂对的大提升, 原因如下)



**符号链接**

Symbolic link 就是在建立一个独立的文件，而这个文件会将数据的读取指向它 link 的那个文件的文件名

读取过程如图:



这种方式最大的缺点就是, 如果删掉源文件, 那么整个环节就断了


## 11.5. 磁盘管理fdisk

### 11.5.1. 分区/删除

一个典型的分区场景:

* `df /` 主要目的是找到指定目录对应的磁盘的文件名
* ` fdisk -l ` 查看系统内所有磁盘的分区信息, 也可以看到磁盘文件名, 以及每个磁盘的分区信息. 效果类似fdisk <设备名>中的p命令, 不同的是这个命令可以查看所有磁盘的分区信息.
* `fdisk <设备文件名>` 进入分区视图( 使用『设备文件名』不要加上数字，因为partition 是针对『整个硬盘』而不是某个 partition )



此时如果按p, 出现该磁盘的分区表, 如下图



另外, 大于2T的硬盘分区就要借助 `parted `命令了

### 11.5.2. 格式化mkfs



* `mkfs -t ext3 <device name>` 格式化指定分区为ext3格式
* `mkfs 连按2下tab` 出现供选择的文件系统

如果希望指定更详细的信息, 使用 `mke2fs`

### 11.5.3. 检验fsch,badblocks

fsch主要检视文件系统是否出错;



* ` fsck -C -f -t ext3 /dev/hdc6` 指定格式, 指定分区进行检视(主要检视文件系统是否出错); 如果没有`-f`, 由于分区没有问题, 检视结果会非常快, 加上后, 会强制详细检查.
* `fsch 连按2下tab` 列出所有支持的文件系统

需要注意的是, 被检视的磁盘不能被挂载; 

fsch背后调用  e2fsck软件, 同样后者可以设定详细信息

badblocks主要查看磁盘是否有坏轨



* `badblocks -sv /dev/hdc6` 检视是否有坏轨

### 11.5.4. 挂载mount/unmount

挂载有这些问题需要注意



语法规范是这样的



* `mount <device> <dir>` 将指定设备挂载到指定目录
* `mount -t <文件系统类型,如ext3/iso9660等> <device> <dir> ` 指定fs type 挂载(可以指定, 也可以不指定让系统自动测试进行挂载)
* `df` 查看是否挂载上了; 也可以用 `mount -l`查看挂载情况
* ` mount -o remount,rw,auto / ` 重新挂载根目录(如果根目录出现只读情况很实用)
* ` mount --bind <source dir> <target dir>` 将source dir 暂时挂载到target dir下( 和 symbolic link功能类似)
* ` mount -o loop /root/centos5.2_x86_64.iso /mnt/centos_dvd ` loop挂载, 可以挂载ios镜像文件; 使用完后记得卸载掉

    * loop挂载有个重要的用途: 建立大文件以制作loop设备文件(可以代替分区)
    ` dd if=/dev/zero of=/home/loopdev bs=1M count=512`建立大文件
    ` mkfs -t ext3 /home/loopdev ` 格式化目标文件
    ` mount -o loop /home/loopdev /media/cdrom/ `挂载到指定目录

相应的卸载语法:



* `unmount <device/dir>` 卸载

此外, 来由一种使用`文件系统标头(label)`来挂载的方法:



详细可查阅`e2label`, 见 [设定磁盘参数](#设定磁盘参数)

### 11.5.5. 设定开机挂载

需要修改文件 ` /etc/fstab ` (filesystem table), 看下图:



这个文件会在`mount`时被更新, 此外还记录了备份相关(dump), 开机自检(fsck)相关信息

具体有哪些信息呢?

1. 设备文件名 or label name
2. 挂载点
3. 磁盘分区的文件系统类型
4. 文件系统参数

    

5. 能否被备份指令`dump`作用

    

6. 是否以`fsch`检验扇区

    


看一个情景: 要将 /dev/hdc6 每次开机都自动挂载到 /mnt/hdc6 ，该如何进行?

* 编辑 `/etc/fstab` 新增一行 `/dev/hdc6  /mnt/hdc6    ext3    defaults   1 2 `
* 接下来需要检测文件编写的语法是否错误: `mount -a`(依照fstab内容挂载), `df`(查看是否成功挂载), 如果看到成功挂载, 那么证明以后每次开机都会自动挂载



### 11.5.6. 设定磁盘参数

比如设定Label name, journal参数

`mknod`可以用来设定主/次设备编号



什么是主/次设备编号?



`e2label` 设定文件系统标头, 类似windows系统的自定义磁盘名称

磁盘挂载就可以使用它, 这种挂载方式相比于传统有什么优缺点?



使用比较简单:



* ` dumpe2fs -h <device>` 查看设备原先的label name
* `e2label <device> "label name"` 修改label name; 修改完成后可以`dumpe2fs -h <device>`查看是否修改成功

与之相关的还有一个命令: `tune2fs`---查看设备superblock内容



* ` tune2fs -l /dev/hdc6 ` 列出设备的superblock内容

## 11.6. 内存置换空间(swap)



可以通过2种方式:

* 直接增加分区
* 通过`dd`建立一个大文件, 通过loop挂载

先看第一种



第二种

类似第一种方式, 只是将分区操作替换为使用`dd`创建一个大文件

# 12. 压缩和打包

先简单介绍一下压缩的原理. 这里介绍两种:

* 第一种, 我们一般都是使用bytes单位来计量文件, 实际上计算机计算的最小单位是bits. 1byte = 8bits, 现在考虑如何表示数字1---在计算机中会存储成 00000001, 可以看到有很多0, 这实际上造成了浪费. 这种压缩方式压缩的就是这里的空间
* 第二种, 会将重复的数据进行统计, 比如数据为"111...111"共100个1, 这种压缩技术会记录"100个1"而不是真的存储100个1的位

## 12.1. 常见的压缩工具

*.tar, *.tar.gz, *.tgz, *.gz, *.Z, *.bz2



* compress已经快退休了, gzip也可以解开compress的压缩档
* 常见的是gzip和bzip2, bzip2压缩比更好
* tar用来将多个文件打包为一个文件, 并不压缩文件, 一般和gzip/bzip2结合使用

## 12.2. gzip和zcat



* `gzip -v <file1> <file2> <file3>` 压缩(多个)指定文件到当前文件夹下(不能指定压缩文件名), 同时显示压缩信息(注意:不是备份, 压缩后源文件就不见了)
* `gzip -d <待解文件1> <待解文件2>` 解压缩(多个)指定文件到当前目录(类似的, 解压后, 压缩文件就不见了)
* `zcat <压缩文件>` 读取文本压缩文件
* `gzip -c <file> > <指定压缩文件名>` ">"数据流重导向, 将屏幕上的数据流导入指定文件, 变相的备份, 可以指定压缩文件名

## 12.3. bzip2和bzcat



* `bzip2 -z <file>` 压缩
* `bzcat <file>` 读取文本型压缩文件
* `bzip2 -d <待解文件>` 解压缩
* `bzip2 -c <file> > <指定压缩文件名>` 带备份的压缩

## 12.4. 打包tar

tarfile: 单纯使用tar打包后的文件(打包时, 不带-j, -z等参数)
tarball: 打包后压缩的文件



`-j`: bzip2 ; `-z`: gzip;

`-c`:压缩　; `-x`: 解压缩; `-t`: 查看压缩; `-v` : 显示过程

`-C <dir_path>` 指定目的地, 如解压到指定目录

* `tar -jcv -f <自定义压缩文件名.tar.bz2> <需要压缩的文件/目录(可以有多个)>` 打包后, bzip2压缩; 推荐自定义压缩名: xxx.tar.bz2 (或者 xxx.tar.xz)

* `tar -jcv -f <自定义压缩文件名.tar.bz2> --exclude=<排除文件> <需要压缩的文件/目录(可以有多个)>` 排除指定目录下某几个文件, 然后压缩

* `tar -jtv -f <待查看压缩档.tar.bz2>` 查看压缩档包括哪些文件名(类似 ls)

* `tar -jxv -f <待解文件.tar.bz2>` 解压到当前目录, 使用bzip2

* `tar -jxv -f <待解文件.tar.bz2> -C <指定解压到这个目录>` 解包后, 使用bzip2解压到指定目录

* `tar -jxv -f <待解文件.tar.bz2> <指定tar包中的一个文件>` 解压压缩包中指定的一个文件, 使用bzip2; (注意: 指定的单一文件不要带"/")

    这个命令一般需要先使用`tar -jtv -f <待查看压缩档.tar.bz2> | grep '关键词'`找到希望解压的那个文件

* `tar -zpcv -f <custom_file.tar.gz>` 带权限,属性打包备份, 使用gzip备份(`-z`换为`-j`就是使用bzip2压缩)

* `-P` 表示压缩的时候为每个文件保留"/"根目录, 默认是移除根目录的, 防止解压缩时机器上的数据被覆盖; 建议不要加

* `--newer-mtime="2018/09/20"` 仅备份比某个时刻还要新的文件

* `tar -cv -f - <待打包文件> | tar -xv -f -` 复制(一般打包, 一边解开); (- 代表打包缓存文件), 其实就是简化`cp -r`命令



## 12.5. dd



* `dd if=<input file> of=<output file>` 复制文件, 指定输入输出
* `dd if=/dev/hdc1 of=xxxx bs=512 count=1`备份指定磁盘的第一个扇区(一个扇区512bytes, 特别是:第一个扇区包含有MBR和partition table, 值得备份)
* `dd if=/dev/hdc1 of=xxxx` 备份整个磁盘, 连同metadata一起复制, 两个磁盘完全一模一样(这个特别方便)

## 12.6. cpio

cpio 不会主动去找档案来备份, 不能指定某个特定的待备份文件, 需要配合find等命令使用, 使用"<"">"进行数据重导向



* ` find <dir> | cpio -ocvB > <压缩文件.cpio>` 将dir下所有文件备份到指定文件
* `cpio -idvc < <压缩文件.cpio>` 将压缩文件解开



## 12.7. dump完整备份工具

* 支持差异备份(0~9的等级, 0为完整备份, 1为对0的差异备份, 2为对1的差异备份...)
* 但是对某一个指定文件夹的备份支持不足(不支持差异备份, 所有的备份文件只能在该目录下)



* 备份某个磁盘; 先`df -h` 列出所有的磁盘使用量, 然后测试备份需要多少容量`dump -S <磁盘文件名>`(单位为bytes), 备份`dump -0u -f <指定生成备份文件名> <文件夹/设备名>` 完全备份, 同时更新 /etc/dumpdates

* `dump -W` 查看所有磁盘的dump记录
* `dump -0j -f /root/etc.dump.bz2 /etc` 备份某个指定目录(带压缩功能)



## 12.8. restore复原



* ` restore -t -f /root/boot.dump` 查看dump的内容
* ` restore -C -f /root/boot.dump ` 比对dump文件和当前实际文件系统差异
* 还原

    * 建立新的文件系统(分区)`fdisk /dev/hdc`, 然后`partprobe`, 建立好后格式化分区` mkfs -t ext3 /dev/hdc8`, 挂载` mount /dev/hdc8 /mnt`
    * 进入某个目录正式还原` restore -r -f /root/boot.dump `

* `restore -i -f /root/etc.dump ` 进入互动模式




# 13. 帐号管理&ACL权限设定

## 13.1. user management

- `whoami` current user
- `groups` current user's partners that in the same group
- `groups <user_name>` view someone's partners and their group.
- `cat /etc/passwd` view user list
- `cat /etc/group` view all group
- `useradd <option> <user_name>`
    - options
        - -d : specify the user home dir
        - -m : 如果 user home dir 不存在, 会自动创建
        - -g: specify the user group
        - -G: additional user group
        - -s: specify the shell while user login
    - demos:
        - useradd -d /usr/sam -m sam 
        - useradd -s /bin/sh -g group -G adm,root gem
- `userdel -r <user_name>` 删除用户, 同时删除家目录
- `usermod <options> <user_name>`修改账号; options 类似useradd
- `passwd <options> [username]`  
    - options:
        - -l: lock the password <=> forbidden account
        - -u: 口令解锁
        - -d: 删除口令, 使得账号无需口令即可使用
        - -f: 强制用户下次登陆修改口令
    - 如果不指定user, 就是修改当前用户
    - `passwd <username>` 修改任何用户密码

## 13.2. ulimit限制用户的资源



*   ` ulimit -a ` 列出当前身份的限制数值

    

* ` ulimit -f 10240 ` 限制只能建立10M以下的文件

# 14. 周期任务

# 15. 磁盘阵列和LVM文件系统

# 16. 周期任务

# 17. 程序管理

## 17.1. Job control背景前景

登入Linux, 会得到一个 bash (父程序)的 shell, 然后在bash 下执行另外的指令如 ls, passwd(子程序)

- ` tar -zpcvf /tmp/etc.tar.gz /etc > /tmp/log.txt 2>&1 & ` 在背景中备份 /etc (最后的 "&" 表示丢到背景中执行, "2>&1" 表示 错误输出写入和正确输出相同的一个文件)

- ctrl + z 暂停目前工作(并丢到背景中), 比如要暂时将 vi 给他丢到背景当中等待

- `jobs -l` 列出所有背景工作, 带 pid 号 ( + 代表最近被放到背景癿工作号码， - 代表最近最后第二个被放置到背景中癿工作号码。 而超过最后第三个以后癿工作，就丌会有 +/- 符号存在了)

- `fg [%job_number]` 从背景中恢复工作; 默认取出 "+" job; `job -` 取出 "-" job

- `bg [%job_number]` 在背景中 从 "暂停" 到 "运行", 相当于给命令 加了个 "&"

- `kill [-signal] <%job_number>` 杀掉 背景程序 (一定要加"%", 否则会被认为时 pid, 而不是 job number)

    - `kill -l` 列出所有可用的 kill 讯号码(使用的时候, 用1...15的数字也可以直接使用名称, `man 7 signal`可查阅);

    - `kill -9 %2` 强制删除 2 号 job

    - `kill -15 %2` 正常结束 2 号 job (-15 默认值)

    - `kill -1 %2` 重新读取参数的配置文件 类似 reload

- `nohup [command] [&]` 脱机(即注销)后仍可以 前景/背景 工作 (场景: 如执行的脚本需要在登出系统后仍然可以工作)

## 17.2. 程序

- `ps`, `top` 观察程序

    - `ps -l` 列出自己bash下相关的程序(带 pid); `ps aux` 列出全部

    - `top -d 2` 动态观察, 2秒更新一次top; `top -d 2 -p <pid>` 查看指定程序

- `netstat -tlnp` 端口占用; ` netstat -tnlp | grep 873 ` 查看指定端口

- `fuser` 通过文件找到正在使用该文件的程序

    - `fuser -uv <file/dir>` 找到正在使用该文件/文件夹的程序

    - `fuser -ki <file>` 查看使用该文件的程序并尝试删除该程序 

- `lsof` 列出目前系统上面所有已经被开启的文件, 和 fuser 正好相反

    - `lsof -u root | grep bash` 列出用户 root 的 bash 程序所打开的文件

- `pidof <program_name> [program_name2] ...` 查找 pid  

## 17.3. 安装卸载

### 17.3.1. 原始码-tarball

tarball 是将原始码打包压缩后的文件, 使得软件便于传输. 后缀为 `*.tar.gz` or `*.tgz` or `*tar.bz2`

#### 17.3.1.1. 一般的安装指令

```sh
# 首先将 tarball 解压到 /usr/local/src 下

# 创建 makefile
./configure

# clean
make clean

# 编译
make [main]

# 安装, 一般是安装在 /usr/local 下
make install

```

### 17.3.2. 包管理软件-rpm和srmp和 yum

两大主流: 

- rmp(centos, fedora, suse) - rmp则分别有: yum(red hat系), you(suse)等等

    rmp和srpm(source rpm)区别: rmp输出的软件包不够自由, 在不同版本的系统上可能无法安装; srpm输出的软件包为源码, 但和tarball有区别, 它包含一份配置文件,包含相关软件依赖, 可修改, 之后再编译为rpm包, 比之tarball又先进, 比之rpm灵活

- dpkg(debian, ubuntu) - apt-get/apt 是在dpkg上开发而来






rpm和srpm两者包格式:

 

rpm都是编译好的包, 可以直接安装, 但是如果软件安装有软件依赖问题时就无法安装了, yum很好的解决了这个问题(最终还是需要调用rpm)

#### 17.3.2.1. rpm

##### 17.3.2.1.1. rpm安装软件

安装信息写在  /var/lib/rpm/  下的数据库文件中

那么软件具体被安装在哪儿呢?




` rpm -ivh package_name` rpm安装(可以接多个软件包, 可以接网址)

##### 17.3.2.1.2. rpm更新软件



##### 17.3.2.1.3. rpm查询软件

查询数据来源于 /var/lib/rpm/下的数据库文档



* `rpm -q logrotate` 查看是否安装指定软件(无需版本号)
* ` rpm -ql logrotate ` 列出指定软件相关的文件和目录
* ` rpm -qi logrotate` 查看指定软件详细信息
* `rpm -qc logrotate`仅仅列出知道指定软件的配置文件
* ` rpm -qd logrotate `仅仅列出知道指定软件的说明文档
* `rpm -qR logrotate ` 查看安装指定软件需要的依赖软件
* `rpm -qf /bin/sh ` 找到指定文件的所属软件

##### 17.3.2.1.4. rpm验证和数字签名

##### 17.3.2.1.5. rpm软件卸载和重建数据库



卸载后需要重建一下软件数据库  `rpm --rebuilddb`   <==重建数据库 

#### 17.3.2.2. srpm

`rpmbuild`

采用默认值



相关目录: 在 `usr/src`下的目录



如果编译正常, 以上几个目录中的文件会在安装好后被删掉, 如果在编译中有错误, 会在/tmp下生成错误文档

配置文件: *.spec



` rpm -i rp-pppoe-3.5-32.1.src.rpm` 仅仅解开软件包,放入某个目录/usr/src/redhat

### 17.3.3. apt和apt-get

apt 和 apt-get 是从 dpkg 开发而来的 包管理工具, 使用它的Linux发行版有 Ubuntu, debian; apt 命令更少更易用, 彩色, 进度条, 推荐使用 apt

yum 是 rpm 上开发而来的, centos 上用;

```sh
apt install	apt-get install	安装软件包
apt remove	apt-get remove	移除软件包, 保留配置文件
apt purge	apt-get purge	移除软件包及配置文件
apt update	apt-get update	刷新存储库索引, 更新源
apt upgrade	apt-get upgrade	升级所有可升级的软件包
apt autoremove	apt-get autoremove	自动删除不需要的包
apt full-upgrade	apt-get dist-upgrade	在升级软件包时自动处理依赖关系
apt search	apt-cache search	搜索已经安装的应用程序
apt show	apt-cache show	显示软件包细节

apt list --installed：列出已经安装的包
apt list --upgradeable：列出可以升级的包
apt list --all -versions：列出系统中所有能找到的包及版本

apt edit-sources，新的apt命令，编辑源列表

apt-get clean # 删除无用的安装文件

```

### 17.3.4. yum 使用

Yellow dog Updater, Modified

https://www.cnblogs.com/zhichaoma/p/7533247.html

```sh
更新所有的rpm包
#yum update
更新指定的rpm包,如更新kernel和kernel source
#yum update kernel kernel-source
大规模的版本升级,与yum update不同的是,连旧的淘汰的包也升级
#yum upgrade


# yum install xxx            　　安装xxx软件
# yum info xxx                　 查看xxx软件的信息
# yum remove xxx        　　　　　删除软件包
# yum list                      列出软件包
# yum clean                     清除缓冲和就的包
# yum provides xxx              以xxx为关键字搜索包（提供的信息为关键字）
# yum search xxx           　　 搜索软件包（以名字为关键字）

yum groupinstall "Development Tools"
# yum groupupdate xxx　　　　   更新xxx软件分组
# yum grouplist xxx
# yum groupremove xxx
# yum groupinfoinfo xxx
这三个都是一组为单位进行升级 列表和删除的操作。。比如 "Mysql Database"就是一个组会同时操作相关的所有软件包；

# yum update                  系统升级
# yum list available          列出所有升级源上的包；
# yum list updates            列出所有升级源上的可以更新包；
# yum list installed          列出已经安装的包；
# yun update kernel           升级内核；


```

# 18. SELinux

# 19. 防火墙

## 19.1. nftables (推荐, 代替 iptables)

和 iptables 联系:

- 都是基于 Netfilter 内核
- 语法更加现代好用
- 代替 iptables, ip6tables, arptables ...
- 支持数据导出为 json/xml


## 19.2. iptables

https://www.zsythink.net/archives/1199


Netfilter/Iptables 是Linux系统自带的防火墙，Iptables管理规则，Netfilter则是规则的执行者，它们一起实现Linux下安全防护

如 Centos 下的 Firewalld 和 Ubuntu 下的ufw, 是对 iptables 的包装





```
简单介绍:
    iptables其实是一个命令行工具，位于用户空间，我们用这个工具操作真正的框架, netfilter才是防火墙真正的安全框架（framework），netfilter位于内核空间, -------- 防火墙的作用就在于对经过的报文匹配”规则”，然后执行对应的”动作”

    iptables是按照规则来办事的, 这些规则分别指定了源地址、目的地址、传输协议（如TCP、UDP、ICMP）和服务类型（如HTTP、FTP和SMTP）等, 当数据包与规则匹配时，iptables就根据规则所定义的方法来处理这些数据包，如放行（accept）、拒绝（reject）和丢弃（drop）等

"链"

    数据报文流经的关卡可能有三种:

        到本机某进程的报文：PREROUTING –> INPUT

        由本机转发的报文：PREROUTING –> FORWARD –> POSTROUTING

        由本机的某进程发出报文（通常为响应报文）：OUTPUT –> POSTROUTING

    每个关卡上可能有多条规则, 形成 "链"

表: 具有相同功能的规则的集合叫做”表” (或者叫规则的分类), 不同功能的规则，我们可以放置在不同的表中进行管理，而iptables已经为我们定义了4种表，每种表对应了不同的功能:

    filter表：负责过滤功能，防火墙；内核模块：iptables_filter

    nat表：network address translation，网络地址转换功能；内核模块：iptable_nat

    mangle表：拆解报文，做出修改，并重新封装 的功能；iptable_mangle

    raw表：关闭nat表上启用的连接追踪机制；iptable_raw


每个”链”中的规则都存在于哪些”表”中:

    PREROUTING      的规则可以存在于：raw表，mangle表，nat表。

    INPUT          的规则可以存在于：mangle表，filter表，（centos7中还有nat表，centos6中没有）。

    FORWARD         的规则可以存在于：mangle表，filter表。

    OUTPUT         的规则可以存在于：raw表mangle表，nat表，filter表。

    POSTROUTING      的规则可以存在于：mangle表，nat表。

    若某条链拥有多个表中的规则, 执行匹配优先级次序（由高而低）：raw表中的规则 –> mangle –> nat –> filter   (某些链天生就不能使用某些表中的规则，所以，4张表中的规则处于同一条链的目前只有output链)

每个表中的规则可以被哪些链使用:

    raw     ：PREROUTING，OUTPUT

    mangle  ：PREROUTING，INPUT，FORWARD，OUTPUT，POSTROUTING

    nat     ：PREROUTING，OUTPUT，POSTROUTING（centos7中还有INPUT，centos6中没有）

    filter  ：INPUT，FORWARD，OUTPUT


规则: 由匹配条件和处理动作组成。

    匹配条件:

        基本匹配条件：源地址Source IP，目标地址 Destination IP

        扩展条件: 以模块的形式存在，如果想要使用这些条件，则需要依赖对应的扩展模块, 如 源端口Source Port, 目标端口Destination Port

    处理动作: 在iptables中被称为target

        基本动作:

            ACCEPT：允许数据包通过。

            DROP：直接丢弃数据包，不给任何回应信息，这时候客户端会感觉自己的请求泥牛入海了，过了超时时间才会有反应。

            REJECT：拒绝数据包通过，必要时会给数据发送端一个响应的信息，客户端刚请求就会收到拒绝的信息。

            SNAT：源地址转换，解决内网用户用同一个公网地址上网的问题。

            MASQUERADE：是SNAT的一种特殊形式，适用于动态的、临时会变的ip上。

            DNAT：目标地址转换。

            REDIRECT：在本机做端口映射。

            LOG：在/var/log/messages文件中记录日志信息，然后将数据包传递给下一条规则，也就是说除了记录以外不对数据包做任何其他操作，仍然让下一条规则去匹配
        
        扩展动作


```


# 20. 系统服务 daemons

## 20.1. daemons是什么

通常在服务的名称后会加上一个 d

分为两类:

一类可以独立启动, 一旦启动就一直占用内存, 不会自动关闭: 如WWW 的 daemon (httpd)、FTP 的 daemon (vsftpd).

一类需要一个 super daemon ( xinetd) 来统一管理启动, 有 client 请求, 则唤起, 请求结束后则关闭释放资源: 如 telnet


## 20.2. daemons相关的文件脚本

- `cat /etc/services` - 查看daemon和端口号映射;  ` grep 'rsync' /etc/services`  查看指定程序的端口映射

- `/etc/init.d/*` - 启动脚本放在这里

- `/etc/sysconfig/*` - 各个服务的初始化环境配置文件

- `/etc/xinetd.conf`, `/etc/xinetd.d/*` ：super daemon 配置文件和下属 daemon配置文件

- `/var/lib/*` ：各服务产生的数据库 

- `/var/run/*` ：各服务的程序 PID 记录处 

## 20.3. 怎么启动

stand alone(独立启动) 类型的 daemon启动

- 方式1: 进入 `/etc/init.d/*`, 通过这里的脚本启动

- 方式2: `service <name> <params>`

    - `service crond restart ` or `/etc/init.d/crond restart ` 重新启动 crond 这支 daemon

    - ` service --status-all ` 目前系统上面所有服务的运作状态



super daemon 类型 的启动: 修改 `/etc/xinetd.d/*` 下的配置文件



- ` grep -i 'disable' /etc/xinetd.d/* ` 查看 super daemon 管理 的 服务是否启动

- 如果需要启动 某个服务, 先修改 /etc/xinetd.d/ 底下的配置文件，然后再重新启动 xinetd 这个 super daemon 即可

```sh
#  先修改配置文件成为启动的模样 ( disable = no )
vim /etc/xinetd.d/rsync 
#  重新启动 xinetd 这个服务
/etc/init.d/xinetd restart 
```

使用 chkconfig 更方便, 不用去编辑配置文件

```sh
# 范例五：查阅 rsync 是否启动，若要将其关闭该如何处理？ 
[root@www ~] /etc/init.d/rsync status 
-bash: /etc/init.d/rsync: No such file or directory 
# rsync 是 super daemon 管理的，所以当然可以使用 stand alone 的启动方式来观察 

[root@www ~] netstat -tlup | grep rsync 
tcp  0 0 192.168.201.110:rsync  *:*     LISTEN     4618/xinetd 
tcp  0 0 www.vbird.tsai:rsync   *:*     LISTEN     4618/xinetd 

[root@www ~] chkconfig --list rsync 
rsync           on   <==预讴启动, 现在将它处理成预设不启动吧 

[root@www ~] chkconfig rsync off; chkconfig --list rsync 
rsync           off  <==看吧！关闭了喔！现在来处理一下 super daemon 的东
东！ 

[root@www ~] /etc/init.d/xinetd restart; netstat -tlup | grep rsync 
```

## 20.4. 设定开机启动

登陆系统, 可以有不同的模式,  成为 "run level" , 具备 x 窗口接口的时 run level 5, 纯文本接口时 run level 3

使用 `chkconfig` 管理服务是否默认开机启动

- ` chkconfig --list |more ` - 列出目前系统上面所有被 chkconfig 管理的服务

- ` chkconfig --list | grep '3:on' ` 显示出目前在 run level 3 为启动的服务

- `chkconfig --level 345 atd on ` ：让 atd 这个服务在 run level 为 3, 4, 5 时启动; `chkconfig rsync off/on` 一般用这种简单的设置方法

也可以直接使用 systemctl: `sudo systemctl enable docker`

## 20.5. service 和 systemctl 和 chkconfig 区别

service命令：可以启动、停止、重新启动系统服务，还可以显示所有系统服务的当前状态。 会去/etc/init.d目录下寻找相应的服务，进行开启和关闭等操作.   底层也是调用的 systemctl

chkconfig命令：是管理系统服务 (就是开机自启动的程序)的命令行工具, 用于维护`/etc/rc[0-6].d`目录的命令行工具。底层也是调用 systemctl

systemctl命令：是一个systemd工具。相当于 service + chkconfig

```sh

systemctl status httpd.service # 运行状态
systemctl # 列出正在运行的服务状态

systemctl list-unit-files --type=service # 列出所有 service
systemctl list-unit-files|grep enabled # 列出所有已经启动的服务

systemctl restart httpd.service
systemctl start httpd.service
systemctl stop httpd.service
# 重新加载配置
systemctl reload httpd.service

# 设置是否开机启动
systemctl enable/disable httpd
# 查看是否开机启动
systemctl is-enabled httpd.service 


# 杀死服务
systemctl kill httpd

# 系统默认启动级别
systemctl get-default  # 获取
systemctl set-default multi-user.target # 设置


# 重启、停止，挂起、休眠系统
# systemctl reboot
# systemctl halt
# systemctl suspend
# systemctl hibernate

# 启动/停止 防火墙
# 查看防火墙状态: firewall-cmd --state
systemctl start/stop firewalld.service





############### service 使用



# 启动/停止服务
service httpd start/stop
# 服务状态
service --status-all

# 开机自动启动, 允许/不允许/重置
# 默认情况下，on和off开关只对运行级2，3，4，5有效，reset可以对所有运行级有效。
chkconfig name on/off/reset

# 设置 service运行级别
# 等级0表示：表示关机
# 等级1表示：单用户模式
# 等级2表示：无网络连接的多用户命令行模式
# 等级3表示：有网络连接的多用户命令行模式
# 等级4表示：不可用
# 等级5表示：带图形界面的多用户模式
# 等级6表示：重新启动
chkconfig --level 5 httpd on

# 列出service启动信息：
chkconfig --list [name]



```

## 20.6. supervisor 进程管理

http://www.ttlsa.com/linux/using-supervisor-control-program/
https://www.jianshu.com/p/0b9054b33db3

# 21. 操作记录

## 21.1. 安装c编译环境gcc

https://blog.csdn.net/AnneQiQi/article/details/51725658

如果需要提示编辑 sources.list 需要切换为 root 再修改, 必须把 deb-src 取消注释

## 21.2. 安装nodejs

https://nodejs.org/zh-cn/download/

https://blog.csdn.net/ziyetian666/article/details/79737541
https://blog.csdn.net/cckavin/article/details/85088670

```sh
su root
mkdir /opt/node.js
cd /opt/node.js
wget <url>
tar -zxv xxx
cd xxx
./configure
make clean
make
make install
```


## 21.3. jdk环境

https://www.digitalocean.com/community/tutorials/how-to-install-java-with-apt-get-on-ubuntu-16-04

```sh

# 首先添加 Oracle ppa(源), 然后update

sudo add-apt-repository ppa:webupd8team/java
sudo apt-get update

# jdk8
sudo apt-get install oracle-java8-installer

# 如果有多个jdk版本, 如何管理
sudo update-alternatives --config java
```

## 21.4. maven环境

ref: https://www.vultr.com/docs/how-to-install-apache-maven-on-ubuntu-16-04

在之前安装了jdk的基础上

## 21.5. mysql环境

[ubuntu下安装mysql及卸载mysql方法](https://www.cnblogs.com/565261641-fzh/p/6128377.html)
碰到一个问题: [MySQL 5.7 No directory, logging in with HOME=/](https://blog.csdn.net/josenhuang/article/details/53585280), 解决之后, `sudo mysql -uroot`, 空密码登陆MySQL即可

[为mysql root 设置密码, &忘记密码怎么登陆](https://www.cnblogs.com/snoopys/p/6129068.html)

```sh
service mysql stop # 停止MySQL， 也可通过kill
mysqld_safe --skip-grant-tables & # 忽略密码验证启动MySQL
mysql -u root # login to mysql
show databases; # 查看数据库
use mysql; # 使用 mysql 数据库
update user set password=password("root") where user='root'; # update root's pwd, 实际就是更新 user表


```

[一份mysql user 设置指南](http://wiki.ubuntu.org.cn/MySQL%E5%AE%89%E8%A3%85%E6%8C%87%E5%8D%97)

```sh
sudo apt-get update # 更新源
sudo apt-get install mysql-server mysql-client

sudo mysql -uroot #login to mysql
GRANT ALL PRIVILEGES ON *.* TO root@localhost IDENTIFIED BY "123456";# setting pwd for root

```

## 21.6. 安装 zsh

zsh 插件管理器: https://github.com/zsh-users/antigen

推荐 oh-my-zsh, 简化 zsh 配置
