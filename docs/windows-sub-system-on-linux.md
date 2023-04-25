---
title: WSL 使用
tags: 
  - wsl
date: 2018-07-08 18:56:09
toc_min_heading_level: 2
toc_max_heading_level: 5
---


<div align="center">
try Windows subsystem on Linux ---- WSL
</div>

<!--more-->

<!-- TOC -->

- [1. 命令](#1-%E5%91%BD%E4%BB%A4)
- [2. 记录](#2-%E8%AE%B0%E5%BD%95)
    - [2.1. 安装](#21-%E5%AE%89%E8%A3%85)
    - [2.2. MySQL](#22-mysql)
    - [2.3. vscode配合](#23-vscode%E9%85%8D%E5%90%88)
    - [2.4. docker](#24-docker)
- [3. windows 常用命令](#3-windows-%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4)

<!-- /TOC -->

# 命令

```sh
# 打开PowerShell (admin): win+x, a

wsl -l -v # 查看 wsl 版本, Linux 发行版本

ubuntu1804.exe config --default-user root # 修改默认用户

```

# 记录

## 安装

[激活 Windows10 professional](https://03k.org/kms.html)

试用的是Ubuntu最新版本

Ubuntu的默认root密码是随机的, 可以自己修改root密码: `sudo passwd`, 然后敲入当前用户密码, 设置新的密码, 此时密码即为root密码; 
也有另外的方法 `sudo su -` 然后 `passwd`
输入两遍设定密码, 此时即为 root 密码 (xy/123456, root/root)

修改默认的软件包仓库数据源: https://blog.csdn.net/sunnyliqian/article/details/50179915

[升级到 wsl2](https://docs.microsoft.com/zh-cn/windows/wsl/wsl2-install)

wsl2 没有启 systemd、systemctl 等等

## MySQL

安装 MySQL : https://blog.csdn.net/weixin_39345384/article/details/80860060

安装好后需要新建 user, 无法用root远程登陆: https://blog.csdn.net/hyl999/article/details/77777184
连接参数: localhost, 3306, newUser, 123456

## vscode配合

vscode 在 wsl 中打开后 无法移动文件, 重命名文件 (wsl2 已经没有这个问题了): https://code.visualstudio.com/docs/remote/wsl#_i-see-eaccess-permission-denied-error-trying-to-rename-a-folder-in-the-open-workspace

## docker

[配置 wsl2 一条龙开发环境](https://www.cnblogs.com/dmego/p/12082013.html)

[Windows 连接 wsl2 中 docker 的 mysql 还有bug](https://blog.csdn.net/weixin_44008092/article/details/98254833), 如使用 navicat 无法连接, 使用 idea 连的时候, 需要查 wsl2 的 ip, 不能使用 localhost 连接



# windows 常用命令

```sh
# windows 查看端口占用, 
netstat -ano | findstr "8090"

# 查询进程号2448信息
tasklist|findstr "2448"

# 杀进程
taskkill -pid xxx -f
```
