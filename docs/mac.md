---
title: Mac 开发环境
date: 2020-12-21 22:47:50
tags: [mac]
toc_min_heading_level: 2
toc_max_heading_level: 5
---



https://github.com/jaywcjlove/awesome-mac
https://github.com/Louiszhai/tool

<!-- TOC -->

- [1. 系统快捷键](#1-%E7%B3%BB%E7%BB%9F%E5%BF%AB%E6%8D%B7%E9%94%AE)
- [2. 软件快捷键](#2-%E8%BD%AF%E4%BB%B6%E5%BF%AB%E6%8D%B7%E9%94%AE)
    - [2.1. Chrome](#21-chrome)
    - [2.2. vscode](#22-vscode)
    - [2.3. fcp](#23-fcp)
- [3. 删除开机自启动](#3-%E5%88%A0%E9%99%A4%E5%BC%80%E6%9C%BA%E8%87%AA%E5%90%AF%E5%8A%A8)
- [4. app 安装报错](#4-app-%E5%AE%89%E8%A3%85%E6%8A%A5%E9%94%99)
- [5. 连接 iPhone 断断续续](#5-%E8%BF%9E%E6%8E%A5-iphone-%E6%96%AD%E6%96%AD%E7%BB%AD%E7%BB%AD)
- [6. karabiner 按键映射](#6-karabiner-%E6%8C%89%E9%94%AE%E6%98%A0%E5%B0%84)
    - [6.1. 自定义 rule 配置](#61-%E8%87%AA%E5%AE%9A%E4%B9%89-rule-%E9%85%8D%E7%BD%AE)
- [7. icloud](#7-icloud)
- [8. 虚拟机](#8-%E8%99%9A%E6%8B%9F%E6%9C%BA)
- [9. telegram](#9-telegram)
- [10. 自启动管理](#10-%E8%87%AA%E5%90%AF%E5%8A%A8%E7%AE%A1%E7%90%86)
- [11. 浏览器 多线程下载](#11-%E6%B5%8F%E8%A7%88%E5%99%A8-%E5%A4%9A%E7%BA%BF%E7%A8%8B%E4%B8%8B%E8%BD%BD)
- [12. 开发环境配置](#12-%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E9%85%8D%E7%BD%AE)
    - [12.1. chrome](#121-chrome)
        - [12.1.1. 开启非安全模式](#1211-%E5%BC%80%E5%90%AF%E9%9D%9E%E5%AE%89%E5%85%A8%E6%A8%A1%E5%BC%8F)
    - [12.2. idea](#122-idea)
    - [12.3. mysql](#123-mysql)
    - [12.4. tldr 代替man 帮助](#124-tldr-%E4%BB%A3%E6%9B%BFman-%E5%B8%AE%E5%8A%A9)
    - [12.5. ssh 客户端](#125-ssh-%E5%AE%A2%E6%88%B7%E7%AB%AF)
    - [12.6. rsync 使用](#126-rsync-%E4%BD%BF%E7%94%A8)
    - [12.7. sshpass 免密码登录](#127-sshpass-%E5%85%8D%E5%AF%86%E7%A0%81%E7%99%BB%E5%BD%95)
    - [12.8. 配置 tree 命令](#128-%E9%85%8D%E7%BD%AE-tree-%E5%91%BD%E4%BB%A4)
    - [12.9. 禁止DS_store生成](#129-%E7%A6%81%E6%AD%A2ds_store%E7%94%9F%E6%88%90)
    - [12.10. 系统自带小命令](#1210-%E7%B3%BB%E7%BB%9F%E8%87%AA%E5%B8%A6%E5%B0%8F%E5%91%BD%E4%BB%A4)
    - [12.11. 配置使用 zsh](#1211-%E9%85%8D%E7%BD%AE%E4%BD%BF%E7%94%A8-zsh)
        - [12.11.1. 安装 oh-my-zsh 和 插件](#12111-%E5%AE%89%E8%A3%85-oh-my-zsh-%E5%92%8C-%E6%8F%92%E4%BB%B6)
        - [12.11.2. 和 bash 对比](#12112-%E5%92%8C-bash-%E5%AF%B9%E6%AF%94)
    - [12.12. 配置 vim](#1212-%E9%85%8D%E7%BD%AE-vim)
    - [12.13. 安装 python3](#1213-%E5%AE%89%E8%A3%85-python3)
    - [12.14. 切换 root](#1214-%E5%88%87%E6%8D%A2-root)
    - [12.15. 对目录授权](#1215-%E5%AF%B9%E7%9B%AE%E5%BD%95%E6%8E%88%E6%9D%83)
    - [12.16. sudo 免输密码](#1216-sudo-%E5%85%8D%E8%BE%93%E5%AF%86%E7%A0%81)
    - [12.17. 配置 alias ll](#1217-%E9%85%8D%E7%BD%AE-alias-ll)
    - [12.18. 自带 terminal 终端走代理](#1218-%E8%87%AA%E5%B8%A6-terminal-%E7%BB%88%E7%AB%AF%E8%B5%B0%E4%BB%A3%E7%90%86)
    - [12.19. homebrew](#1219-homebrew)
        - [12.19.1. 简单使用](#12191-%E7%AE%80%E5%8D%95%E4%BD%BF%E7%94%A8)
        - [12.19.2. 禁用自动升级](#12192-%E7%A6%81%E7%94%A8%E8%87%AA%E5%8A%A8%E5%8D%87%E7%BA%A7)
        - [12.19.3. 替换国内源](#12193-%E6%9B%BF%E6%8D%A2%E5%9B%BD%E5%86%85%E6%BA%90)
    - [12.20. 安装 java 开发环境](#1220-%E5%AE%89%E8%A3%85-java-%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83)
    - [12.21. cpp 开发环境](#1221-cpp-%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83)
    - [12.22. 安装 Aria2 下载工具](#1222-%E5%AE%89%E8%A3%85-aria2-%E4%B8%8B%E8%BD%BD%E5%B7%A5%E5%85%B7)
    - [12.23. docker 安装](#1223-docker-%E5%AE%89%E8%A3%85)
        - [12.23.1. 容器和宿主机网络互通](#12231-%E5%AE%B9%E5%99%A8%E5%92%8C%E5%AE%BF%E4%B8%BB%E6%9C%BA%E7%BD%91%E7%BB%9C%E4%BA%92%E9%80%9A)
    - [12.24. vscode 安装配置](#1224-vscode-%E5%AE%89%E8%A3%85%E9%85%8D%E7%BD%AE)
        - [12.24.1. vscode插件](#12241-vscode%E6%8F%92%E4%BB%B6)
        - [12.24.2. 创建文件文件夹 快捷键](#12242-%E5%88%9B%E5%BB%BA%E6%96%87%E4%BB%B6%E6%96%87%E4%BB%B6%E5%A4%B9-%E5%BF%AB%E6%8D%B7%E9%94%AE)
        - [12.24.3. 使用 debugger for Chrome](#12243-%E4%BD%BF%E7%94%A8-debugger-for-chrome)
        - [12.24.4. snippets](#12244-snippets)
        - [12.24.5. code copilot 插件使用快捷键](#12245-code-copilot-%E6%8F%92%E4%BB%B6%E4%BD%BF%E7%94%A8%E5%BF%AB%E6%8D%B7%E9%94%AE)
    - [12.25. 修改 hosts 文件](#1225-%E4%BF%AE%E6%94%B9-hosts-%E6%96%87%E4%BB%B6)
    - [12.26. idea](#1226-idea)
        - [12.26.1. vm 配置文件路径](#12261-vm-%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E8%B7%AF%E5%BE%84)
        - [12.26.2. 完全卸载](#12262-%E5%AE%8C%E5%85%A8%E5%8D%B8%E8%BD%BD)
        - [12.26.3. 插件无法搜索](#12263-%E6%8F%92%E4%BB%B6%E6%97%A0%E6%B3%95%E6%90%9C%E7%B4%A2)
        - [12.26.4. ideavim](#12264-ideavim)
        - [12.26.5. 自定义堆内存](#12265-%E8%87%AA%E5%AE%9A%E4%B9%89%E5%A0%86%E5%86%85%E5%AD%98)
    - [12.27. tmux 多会话管理](#1227-tmux-%E5%A4%9A%E4%BC%9A%E8%AF%9D%E7%AE%A1%E7%90%86)
    - [12.28. htop 替代 top](#1228-htop-%E6%9B%BF%E4%BB%A3-top)
    - [12.29. 安装 visualvm](#1229-%E5%AE%89%E8%A3%85-visualvm)
- [13. 空格预览插件](#13-%E7%A9%BA%E6%A0%BC%E9%A2%84%E8%A7%88%E6%8F%92%E4%BB%B6)
- [14. 拼音输入法](#14-%E6%8B%BC%E9%9F%B3%E8%BE%93%E5%85%A5%E6%B3%95)
- [15. 视频](#15-%E8%A7%86%E9%A2%91)

<!-- /TOC -->

# 1. 系统快捷键

```
space 预览
cmd + c/x/v/z/a/s/f
cmd + del 删除文件，删除所在行
cmd + opt + v 粘贴并删除源文件 === 移动
cmd + w 关闭tab/窗口
cmd + q 关闭软件
cmd + opt + esc 强制关闭
cmd + n 新建窗口
cmd + space 快速启动 聚焦
cmd + opt + space 访达搜索， 使用 cmd+w 关闭
ctrl + space 切换输入法
capslock 切换中英输入
cmd + tab 切换程序
cmd + ~ 切换同个程序的多个窗口
cmd + m 最小化当前窗口
cmd + h 隐藏程序所有窗口 （常用）
cmd + ctrl + q 锁屏
ctrl + shift + power 睡眠
shift + cmd + 5 截图/录制
shift + cmd + 4 选定区域截图
option + 右键单击    --  强制退出

## 访达 finder

cmd + shift + g 前往
cmd + [ / ] 访达前进/后退
cmd + up 上层文件夹
Command+Shift+. 可以显示隐藏文件、文件夹，再按一次，恢复隐藏；
cmd + opt + c 复制路径
cmd + d 复制所选文件
opt + 调整尺寸 ==> 下次打开会记住尺寸
cmd + [ / ] 前进后退


## terminal

ctrl + c 强制终止 terminal终端
cmd + d 垂直分屏 terminal
cmd + Shift + D 水平分隔当前标签页


```

# 2. 软件快捷键

## 2.1. Chrome

```
cmd + t 新tab
cmd + w 关闭tab
cmd + shift + t 重新打开tab
cmd + r 刷新
cmd + shift + [ or ] 左右切换 tab


ctrl + shift + o 书签管理
ctrl + shift + b 显示/隐藏 书签栏
ctrl + j 下载管理

访问 data:text/html,<html contenteditable> chrome 作为记事本

插件快捷键设置 - chrome://extensions/shortcuts

```

## 2.2. vscode

```
opt + z 切换 word soft wrapped
opt + 点击    多列光标
opt + shift + 点击    多列连续选择

自定义代码段 cmd+shift+p,搜索 preferences: user snippets
```

## 2.3. fcp

```
资源库操作:

i 标记入点 (然后拖动到时间轴)
o 标记出点

e 添加片段到时间轴末尾(不覆盖其他)
q 添加片段到当前时间轴坐标位置(不覆盖)
w 添加片段到当前时间轴坐标位置(其他片段自动切割开, 腾出位置)
d 添加片段到当前时间轴坐标位置(其他片段被覆盖)

时间轴操作:

b 切割工具 (通过点击来切割)
cmd + b 通过时间轴当前坐标来切割
a 选择工具
delete 删除 (时间轴上的)片段
t 修剪工具 (i/o 没有设置准确时可以通过这个在时间轴上调整)
p 位置工具(移动片段, 空闲时间轴自动添加黑场)
r 范围选择工具 (选择时间轴上的一个范围, 如可以调整这段的音量)
cmd + r 速度面板, 调整片段的速度
shift + b 分段切割然后调整速度
v 隐藏片段
alt + cmd + up/down 移动片段到上面/下面的时间轴
~ + 拖动   等价上面

z 缩放时间轴工具 (不常用, 一般通过触控板缩放 or cmd+- 来缩放)
shift + z 自动适配时间轴长度到一屏
h 移动工具(移动整个时间轴)

s 切换 视频+音频实时预览
shift + s 切换音频实时预览
n 切换吸附 (片段间相互吸附) 

control+T是添加默认字幕 
command+T是添加默认转场 
control+ shift+t是添加默认三分之一的字幕

command+c复制， 
command+shift+v则是粘贴片段的属性
cmd + z 撤销
```

# 3. 删除开机自启动


打开“系统偏好设置”窗口，选择“用户与群组”，进入用户与群组窗口（图1）。选择登录项选项卡，再解锁，最后删除开机启动的应用
https://www.jianshu.com/p/dcf6de92a2b5

# 4. app 安装报错

解决"XX"已损坏，无法打开。 您应该将它移到废纸篓。

允许安装 appstore app store 外的应用程序

无法打开xxx因为无法验证开发者

`sudo spctl --master-disable`, 在隐私中会出现 "允许任何来源", 建议不要这样做, 而是  “系统偏好设置”——> “安全性与隐私 ”——> “通用”——>“仍要打开”

若还是不行, 尝试 `sudo xattr -r -d com.apple.quarantine <app path>` (程序路径获取: 可以手动拖动程序到 terminal 窗口)
`sudo xattr -d com.apple.quarantine <app path>` (-r 可有可无)

# 5. 连接 iPhone 断断续续

`sudo killall -STOP -c usbd`

# 6. karabiner 按键映射

https://karabiner-elements.pqrs.org/docs/

Complex模式读取指定目录下的rule配置文件，文件内容以json格式存储，按照每个配置项的参数定义填入参数值即可.官网提供了很多现成rule文件

```sh
# 强制删除 卸载
➜  /Applications sudo chflags -R noschg Karabiner-EventViewer.app
sudo chflags -R nouchg Karabiner-EventViewer.app
sudo rm -rf Karabiner-EventViewer.app 

```

## 6.1. 自定义 rule 配置

也可以自己定义, 放在 ~~`~/.config/karabiner/assets/complex_modifications `~~  `~/.config/karabiner/karabiner.json `

https://my.oschina.net/huangweiindex/blog/2246247 json配置语法

# 7. icloud

https://www.cnblogs.com/liuzhongrong/p/12263135.html 指定任意文件夹同步


# 8. 虚拟机

推荐 parallel desktop

也有免费的方案:

```sh
brew cask install virtualbox
brew cask install vagrant
```

# 9. telegram

https://zhuanlan.zhihu.com/p/64595764 中文用户解禁

设置 socket5 代理后需要重启才能连接

# 10. 自启动管理

```sh
launchctl list # 当前在运行的服务清单
# 结果:
# PID	Status	Label
# -	0	com.apple.SafariHistoryServiceAgent
# 1248	0	com.apple.progressd
# -	0	com.google.keystone.user.xpcservice

launchctl list <Label> # 查看这个服务的一些配置信息，可以里面有这个服务启动的程序所在的目录，启动参数等

locate <Label> # 查找 plist 文件路径

# 把一个服务注销掉, 取消开机启动
#  , plist 的格式（满足 XML 规范）
launchctl unload <plist_path>
launchctl unload -w /Library/LaunchAgents/com.adobe.AdobeCreativeCloud.plist



# 把一个服务注册到系统服务里
launchctl load <plist_path>



# 目录规范
# 
# ~/Library/LaunchAgents 用户的进程 (个人编写的守护进程)
# /Library/LaunchAgents 管理员设置的用户进程
# /Library/LaunchDaemons 管理员提供的系统守护进程
# /System/Library/LaunchAgents Mac操作系统提供的用户进程
# /System/Library/LaunchDaemons Mac操作系统提供的系统守护进程
```

# 11. 浏览器 多线程下载

Chrome 浏览器，地址栏输入并回车：chrome://flags/#enable-parallel-downloading

Edge 新版浏览器，地址栏输入并回车：edge://flags/#enable-parallel-downloading


# 12. 开发环境配置

## 12.1. chrome

### 12.1.1. 开启非安全模式

`open -n /Applications/Google\ Chrome.app/ --args --disable-web-security  --user-data-dir=/Users/xiaoyu/MyChromeDevUserData`

## 12.2. idea

idea 无法启动 missing essential plugins 

```
删除以下文件夹中的idea和jetbrains文件：
# xxx为用户名
/Users/xxx/Library/Preferences/
/Users/xxx/Library/Caches/
/Users/xxx/Library/Application\ Support/
/Users/xxx/Library/Logs/


rm -rf /Users/xxx/Library/Preferences/jetbrains.jetprofile.asset.plist

rm -rf /Users/xxx/Library/Caches/JetBrains

rm -rf /Users/xxx/Library/Application\ Support/JetBrains

rm -rf/Users/xxx/Library/Logs/JetBrains


```

## 12.3. mysql

```sh
brew install mysql

# We've installed your MySQL database without a root password. To secure it run:
#     mysql_secure_installation

# MySQL is configured to only allow connections from localhost by default

# To connect run:
#     mysql -uroot

# To have launchd start mysql now and restart at login:
#   brew services start mysql
# Or, if you don't want/need a background service you can just run:
#   mysql.server start


```

## 12.4. tldr 代替man 帮助

```
喜欢node可以用：sudo npm install -g tldr
习惯Python的：pip install tldr.py
偏爱Go的：go get github.com/pranavraja/tldr
热爱Ruby的：gem install told


tldr -h

更新缓存，tldr --update或tldr -u


tldr ssh
```

## 12.5. ssh 客户端

https://github.com/electerm/electerm

## 12.6. rsync 使用

http://www.ruanyifeng.com/blog/2020/08/rsync.html
TODO

rsync + inotify结合使用，可以实现两台机器的文件同步

## 12.7. sshpass 免密码登录

https://www.cnblogs.com/misswangxing/p/10637718.html

`sshpass -p ${passwd} ssh -p 22 -l root -o StrictHostKeyChecking=no xx.xx.xx.xx  'ls -l'`


## 12.8. 配置 tree 命令

方法 1: 模拟 tree 命令, 编辑 `~/bash_profile`, 添加:

```sh
alias tree="find . -print | sed -e 's;[^/]*/;|---;g;s;---|; |;g'"


```

方法 2: 直接安装 tree 命令 `brew install tree`



## 12.9. 禁止DS_store生成

.DS_Store是Mac OS保存文件夹的自定义属性的隐藏文件，如文件的图标位置或背景色，相当于Windows的desktop.ini。


```sh
# 禁止自动生成
defaults write com.apple.desktopservices DSDontWriteNetworkStores -bool TRUE
# 回复生成
defaults delete com.apple.desktopservices DSDontWriteNetworkStores

# 删除已经生成的文件
find . -name '*.DS_Store' -type f -delete
```

## 12.10. 系统自带小命令

```sh
# 剪贴板
# 
# 复制
pbcopy < file.txt
# 粘贴
pbpaste > file.txt
# 读取剪贴板然后过滤
pbpaste | grep "xxx"

# 打开 finder
open .

# 查看文件路径
mdfind -name jdk*/Users/xiaoyu/green/jdk-14.0.1.jdk

# 复制到剪贴板
cat xxx.txt | grep hah | pbcopy
# 粘贴
pbpaste > xxx.md
# 粘贴, 编码, 复制到剪贴板
pbpaste | base64 | pbcopy


sudo shutdown -h +60

```

## 12.11. 配置使用 zsh

[修改默认 shell](https://support.apple.com/zh-cn/HT208050)

macOS 自带很多 shell, 通过 `cat /etc/shells` 查看

Zsh 切换Bash的方法：`chsh -s /bin/zsh`，重启终端后即为Zsh了。验证 `echo $SHELL`

`zsh --version` 查看版本是不是最新的, 最新的版本 `brew info zsh ` 查看

兼容 bash: 在 .zshrc 末尾加上 `source .bash_profile`

### 12.11.1. 安装 oh-my-zsh 和 插件

https://github.com/ohmyzsh/ohmyzsh - oh-my-zsh

https://segmentfault.com/a/1190000019828167 - ref

`curl -L https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh | sh` , 这回覆盖 .zshrc 文件, 最好先备份 zshrc

若 失败, 手动安装: `git clone git://github.com/robbyrussell/oh-my-zsh.git ~/.oh-my-zsh`, `cp ~/.oh-my-zsh/templates/zshrc.zsh-template ~/.zshrc`, .zshrc 文件中添加source ~/.bash_profile, `chsh -s /bin/zsh`, 

```sh
# zsh-autosuggestions
git clone https://github.com/zsh-users/zsh-autosuggestions ~/.oh-my-zsh/plugins/zsh-autosuggestions

# zsh-syntax-highlighting
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ~/.oh-my-zsh/plugins/zsh-syntax-highlighting

# 修改 ~/.zshrc 下的plugins字段, 退出, source
plugins=(git homebrew node npm zsh-autosuggestions zsh-syntax-highlighting)

```

### 12.11.2. 和 bash 对比

- bash script更加接近posix标准，zsh则更加“灵活”. 因此，建议读者日常使用zsh（配合oh-my-zsh），但是使用bash做脚本解释器
  
  zsh的自动补全功能更加强大

  zsh的拼写检查功能更强

  二者的命令提示符不同，zsh的命令提示符可定制性更高

- bash基本上上手即用，zsh则需要繁杂的配置（但我们有神一样的oh-my-zsh）

## 12.12. 配置 vim

```sh
cp /usr/share/vim/vimrc ~/.vimrc	#复制 vim 配置模版

echo 'syntax on' >> ~/.vimrc	#开启语法高亮

echo 'set nu!' >> ~/.vimrc	#开启行号显示

```

## 12.13. 安装 python3

mac 自带 python2

输入 `python3` 即可自动安装 python3 (不推荐) ,卸载 https://www.cnblogs.com/zhzhiy/p/11678660.html

可以通过 brew 安装 

```sh
# 查询, 看看是否安装
brew info python 
brew install python3


# 查看版本
python3 --version

# Python3 已经自带 pip3

```



## 12.14. 切换 root

[切换 root 用户](https://support.apple.com/zh-cn/HT204012)

## 12.15. 对目录授权

在Mac OS X 10.11系统以后，/usr/local/等系统目录下的文件读写是需要系统root权限的, 这样 对/usr/local 目录下的文件读写进行root用户授权 `sudo chown -R xiaoyu /usr/local`

## 12.16. sudo 免输密码

https://www.cnblogs.com/princesong/p/10293885.html

## 12.17. 配置 alias ll

`vim ~/.bash_profile`

```sh
alias ll='ls -alF' # -F 会标示目录和可执行文件

```

## 12.18. 自带 terminal 终端走代理


问题: 开了SSR并开启全局模式，终端还是不能被代*理.

我使用的是 ss (使用 pac 代理即可, 无需 global 代理), 临时使用可以: `export all_proxy=socks5://127.0.0.1:1086`, or `export http_proxy=http://127.0.0.1:1087;export https_proxy=http://127.0.0.1:1087;`

持久化配置, 需要 `vim ~/.bash_profile` or `vim ~/.zshrc` (这个修改后无需刷新)

```sh
function proxy_on() {
    # export {HTTP,HTTPS,FTP}_PROXY="http://127.0.0.1:3128" 也可以设置http代理
    export ALL_PROXY=socks5://127.0.0.1:1086
}

function proxy_off() {
    # unset {HTTP,HTTPS,FTP}_PROXY
    unset ALL_PROXY
}

```

刷新配置, 然后命令行输入 `proxy_on` 打开代理, `proxy_off` 关闭代理

验证: `curl ip.gs` 复制ip 到 https://ip.sb/ 查看 location

or `curl google.com`

## 12.19. homebrew

### 12.19.1. 简单使用

ref: https://swiftcafe.io/post/home-brew

软件包管理工具，用来安装开发环境很方便

> 通常安装软件， 只需将下载包放到 finder 的  application 文件夹下即可安装（有的时候在网站下载的软件格式是 .dmg 格式，其实是把软件打包成磁盘影像。只要双击打开，通常会出现快捷界面，只要把小窗口的 .app 拖到 Applications 文件夹）， 删除即为卸载

手动安装 需要 git ， ruby 环境, 需要 xcode cli `sudo xcode-select --install`, shell 环境 (更新系统后, git异常无法使用, 也使用这条命令)



```sh
# 一键安装
# 默认是安装在 /usr/local,可能 需要 root 用户授权
# 推荐指定安装目录, 安装到无需 root 授权的目录
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"

# 如果被墙，参考 https://zhuanlan.zhihu.com/p/111014448

# uninstall
$ cd `brew --prefix`
$ rm -rf Cellar
$ brew prune
$ rm `git ls-files`
$ rm -r Library/Homebrew Library/Aliases Library/Formula Library/Contributions
$ rm -rf .git
$ rm -rf ~/Library/Caches/Homebrew

# 查看版本
brew -v

# update brew
brew update

brew outdated # 查看过时可升级的包

brew upgrade node # 升级所有包

brew cleanup # 清理安装包

# 缓存目录
brew --cache 
#/Users/xiaoyu/Library/Caches/Homebrew



# how to use

brew search xxx # 在默认主仓库搜索
brew list # 查看安装列表

brew info node # 查看 package info 如 版本
# 甚至可以定制 info, 借助 jq 处理 json
brew install jq
brew info --json=v1 node | jq

# install package
# brew 安装的 pakcage 文件会被放到 /usr/local/Cellar, 通过软链链接到 /usr/local/bin, 传统 apt, yum 方式安装的文件直接放到了 这个目录
brew install node
brew install git
brew install node@6 # 指定版本号
# Bottles 是 Homebrew 中的一个专用名词。 它表示直接用二进制形式发布的包。 
# 在使用 brew install 安装程序包的时候有两种方式，一个是下载源代码然后在本地构建，另外一个是直接下载已经编译好的二进制包。 而 Bottles 就是预编译好的二进制包。
# 如果一个源包含预编译的 Bottle， 我们在使用 brew install 的时候会自动使用它。 如果出于某些原因，你不想使用预编译的包，就可以加上 --build-from-source
brew install --build-from-source node

# 安装桌面程序 
# brew cask是brew的一个官方源
# brew cask search | wc -l 可以得到cask的数量是3754个。例如常用的包括java, mactex, rstudio等。
brew cask install google-chrome

brew --prefix # brew 的 主目录 /usr/local
brew --repo # 仓库目录 /usr/local/Homebrew


# 删除卸载软件
brew uninstall node

# 暂时的停用, 只会删除符号链接，但并不会删除程序本身
# 这个功能在某些场景中非常有用，比如你需要某个程序包暂时失效，用于调试你正在进行的开发。
brew unlink node
brew link node


# brew 有多个仓库, 分为主仓库 和 附加功能仓库, 分仓库主要是为了缓解包管理的压力
# 一般包管理工具会把那些常用的软件包放到主仓库，其他的软件包根据功能特性组织到可选的功能仓库中。
# 附属功能仓库比如:
# homebrew/nginx    //包含 nginx 相关模块的仓库
# homebrew/php       // php 相关模块的仓库
# homebrew/science  // 科学计算工具仓库

# brew 默认自带这些 tap:
# homebrew/core
# homebrew/cask
# homebrew/services
# homebrew/bundle

# 查看当前的默认主仓库
brew tap  # 返回  homebrew/core

# 加载指定的仓库, 启用某个指定的源
brew tap homebrew/nginx

```


### 12.19.2. 禁用自动升级
  
Homebrew 自动升级触发概率很高，由于网络等问题，检查更新会很久有时会比较烦, 环境变量设置 `HOMEBREW_NO_AUTO_UPDATE=1` 即可

```sh
# or
export HOMEBREW_NO_AUTO_UPDATE=true

```

### 12.19.3. 替换国内源 

https://www.cnblogs.com/shyw/p/11634447.html

```sh
alias ll='ls -alF'

# brew toggle source
function brew_gfw() {
  # 替换brew.git
  cd "$(brew --repo)"
  git remote set-url origin https://mirrors.aliyun.com/homebrew/brew.git
  echo ">>> replace brew ok"
  
  # 替换homebrew-core.git
  cd "$(brew --repo)/Library/Taps/homebrew/homebrew-core"
  git remote set-url origin https://mirrors.aliyun.com/homebrew/homebrew-core.git
  echo ">>> replace brew-core ok"

  # replace homebrew-cask
  git -C "$(brew --repo homebrew/cask)" remote set-url origin https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/homebrew-cask.git
  echo ">>> replace brew-cask ok"	

  # homebrew-bottles replacement 清华源
  export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.tuna.tsinghua.edu.cn/homebrew-bottles
  echo ">>> replace brew-bottles ok"

  # 刷新源
  brew update
  echo ">>> brew update ok"
}


function brew_reset() {
  # 重置brew.git:
   cd "$(brew --repo)"
   git remote set-url origin https://github.com/Homebrew/brew.git
  echo ">>> reset brew ok"

  # 重置homebrew-core.git:
   cd "$(brew --repo)/Library/Taps/homebrew/homebrew-core"
   git remote set-url origin https://github.com/Homebrew/homebrew-core.git
  echo ">>> reset brew-core ok"

  # reset cask
  git -C "$(brew --repo homebrew/cask)" remote set-url origin https://github.com/Homebrew/homebrew-cask.git
  echo ">>> reset brew-cask ok"

  # reset homebrew-bottles
  unset HOMEBREW_BOTTLE_DOMAIN
  echo ">>> reset brew-bottles ok"

  # 刷新源
  brew update
  echo ">>> brew update ok"
}


```

用的时候, 在命令行调用一下 function 即可

## 12.20. 安装 java 开发环境

```sh
# 不用这个, 这个安装只是 jre 不是 jdk, 坑
brew install java

# 推荐直接从官网下载 mac 压缩包, 解压后
JAVA_HOME="/Library/Java/JavaVirtualMachines/jdk1.8.0_40.jdk/Contents/Home"
MAVEN_HOME="xxx"
PATH=$JAVA_HOME/bin:$MAVEN_HOME:$PATH:.
#CLASSPATH=$JAVA_HOME/lib/tools.jar:$JAVA_HOME/lib/dt.jar:.
export JAVA_HOME
export MAVEN_HOME
export PATH
#export CLASSPATH

# https://www.cnblogs.com/imzhizi/p/macos-jdk-installation-homebrew.html
# 最新版 Oracle OpenJDK
brew cask install java
# Oracle OpenJDK11
brew cask install java11

```

## 12.21. cpp 开发环境

"c/c++" 插件

编译器 (mac 自带 clang 作为 cpp 编译器, or 下载 gcc )

## 12.22. 安装 Aria2 下载工具

```sh


# aria2
# https://www.jianshu.com/p/6e6a02e1f15e (命令行使用过)

brew install aria2
aria2c --conf-path ./aria2.conf

# aria2.conf
#用户名
#rpc-user=xxxx
#密码
#rpc-passwd=xxxx
#上面的认证方式不建议使用,建议使用下面的token方式
#设置加密的密钥
#rpc-secret=token
#允许rpc
enable-rpc=true
#允许所有来源, web界面跨域权限需要
rpc-allow-origin-all=true
#允许外部访问，false的话只监听本地端口
rpc-listen-all=true
#RPC端口, 仅当默认端口被占用时修改
#rpc-listen-port=6800
#最大同时下载数(任务数), 路由建议值: 3
max-concurrent-downloads=5
#断点续传
continue=true
#同服务器连接数
max-connection-per-server=5
#最小文件分片大小, 下载线程数上限取决于能分出多少片, 对于小文件重要
min-split-size=10M
#单文件最大线程数, 路由建议值: 5
split=10
#下载速度限制
max-overall-download-limit=0
#单文件速度限制
max-download-limit=0
#上传速度限制
max-overall-upload-limit=0
#单文件速度限制
max-upload-limit=0
#断开速度过慢的连接
#lowest-speed-limit=0
#验证用，需要1.16.1之后的release版本
#referer=*
#文件保存路径, 默认为当前启动位置
dir=/Users/xiaoyu/Downloads
#文件缓存, 使用内置的文件缓存, 如果你不相信Linux内核文件缓存和磁盘内置缓存时使用, 需要1.16及以上版本
#disk-cache=0
#另一种Linux文件缓存方式, 使用前确保您使用的内核支持此选项, 需要1.15及以上版本(?)
#enable-mmap=true
#文件预分配, 能有效降低文件碎片, 提高磁盘性能. 缺点是预分配时间较长
#所需时间 none < falloc ? trunc << prealloc, falloc和trunc需要文件系统和内核支持
file-allocation=prealloc

# 启动
aria2c --conf-path /xxx/aria2.conf" [-D]


```

## 12.23. docker 安装

https://mritd.com/2022/06/08/happy-using-docker-on-macos/ ToDo 推荐更好的工具 lima

```sh
# docker

brew cask install docker
```

### 12.23.1. 容器和宿主机网络互通

https://www.jianshu.com/p/e63bd5d0cc1e
https://www.cnblogs.com/huaxiaoyao/p/12088948.html




## 12.24. vscode 安装配置

配置 mac 命令行即可启动vscode：打开命令面板 (shift + cmmand + P) ，输入 shell command’，找到: “Install ‘code’ command in PATH”，点击就可以了

生成 md 目录 格式错乱, 更改 settings -> text editor -> files -> eol 为 \n 即可

https://blog.csdn.net/qq_43827595/article/details/104277051 vim 插件按键映射

### 12.24.1. vscode插件

智能提示插件:

- tabnine (vscode)
- cododa (适用于idea, 主要 java 专业, 收购了 tabnine)
- kite (需要单独下载插件外的引擎 app , 对 Python 更专业, 节省内存 ) https://www.kite.com/,


### 12.24.2. 创建文件文件夹 快捷键

https://blog.csdn.net/u011511756/article/details/85058990

new file, new folder -> explorerResourceIsFolder && !inputFocus


### 12.24.3. 使用 debugger for Chrome

.vscode 配置文件中的专有变量:

```
${workspaceFolder} :表示当前workspace文件夹路径，就是根目录, .vscode 所在目录

${workspaceRootFolderName}:表示workspace的文件夹名，也即Test

${file}:文件自身的绝对路径，也即/home/Coding/Test/.vscode/tasks.json

${relativeFile}:文件在workspace中的路径，也即.vscode/tasks.json

${fileBasenameNoExtension}:当前文件的文件名，不带后缀，也即tasks

${fileBasename}:当前文件的文件名，tasks.json

${fileDirname}:文件所在的文件夹路径，也即/home/Coding/Test/.vscode

${fileExtname}:当前文件的后缀，也即.json

${lineNumber}:当前文件光标所在的行号

${env:PATH}:系统中的环境变量
```

### 12.24.4. snippets

https://github.com/microsoft/vscode/issues/89700 当前文件夹名字

```json
"ts react funcitonal component": {
		"prefix": "fc",
		"body": [
			"import React from \"react\";",
			"",
			"const ${TM_DIRECTORY/^.+\\/(.*)$/$1/}$1: React.FC = ($2) => {",
			"  return (",
			"    <>",
			"      $0",
			"    </>",
			"  );",
			"};",
			"",
			"export default ${TM_DIRECTORY/^.+\\/(.*)$/$1/}$1;",
			""
		],
		"description": "create ts react funcitonal component"
	},
```

### 12.24.5. code copilot 插件使用快捷键

```

接受建议：Tab
拒绝建议：Esc
打开Copilot：Ctrl + Enter （会打开一个单独的面板，展示10个建议）
下一条建议：Alt/Option + ]
上一条建议：Alt/Option + [
触发行内Copilot：Alt/Option + \ （Coplit还没有给出建议或者建议被拒绝了，希望手工触发它提供建议）
```

## 12.25. 修改 hosts 文件

```sh
sodu vim /etc/hosts


# 推荐使用 switchHosts https://github.com/oldj/SwitchHosts
# 修改后若无效, 可以尝试手动激活host, 还不行, 尝试重启机器
Windows：在 CMD 窗口输入：ipconfig /flushdns
Linux 命令：sudo rcnscd restart
Mac 命令：sudo killall -HUP mDNSResponder

```

## 12.26. idea 

### 12.26.1. vm 配置文件路径

/Users/xiaoyu/Library/Application Support/JetBrains/IntelliJIdea2020.3


### 12.26.2. 完全卸载

```
进入 cd Users/xiaoyu/Library/

rm -rf Logs/IntelliJIdeaxxx/
 
rm -rf Preferences/IntelliJIdeaxxx/
 
rm -rf Application Support/IntelliJIdeaxxx/
 
rm -rf Caches/IntelliJIdeaxxx

把～/下的.idea/也删掉
```

### 12.26.3. 插件无法搜索

可能是 idea 代理设置不正确, 如果实在不行, 可以: 官网下载 , 导入  -> http://plugins.jetbrains.com/

### 12.26.4. ideavim

http://einverne.github.io/post/2017/10/vim-config-map.html vimrc 按键映射
http://einverne.github.io/post/2020/07/idea-vim-usage.html ideavim 内置了插件

- nmap 普通模式 (Normal)映射
- vmap 选择模式 (Visual)
- imap 插入模式 (Insert) 下的键映射
- cmap 在命令模式下生效
- unmap 解除映射

等等

修改 ~/.ideavimrc

```
imap jk <Esc>
imap kj <Esc>
set timeoutlen=300

```

### 12.26.5. 自定义堆内存

https://www.jianshu.com/p/2fa801238a1d
https://www.jianshu.com/p/c858e6a988b9

`/Users/xiaoyu/Library/Application Support/JetBrains/IntelliJIdea2020.2/idea.vmoptions`

## 12.27. tmux 多会话管理

http://www.ruanyifeng.com/blog/2019/10/tmux.html

```sh
brew install tmux

# check version
tmux -V

# 快捷键生效需要先按下Ctrl+b，
# 帮助命令的快捷键是Ctrl+b ?, 按下 ESC 键或q键，就可以退出帮助
# Ctrl+d或者显式输入exit命令，就可以退出 Tmux


# 新建默认 session, 编号是0，第二个窗口的编号是1，以此类推
tmux
# 新建指定名字
tmux new -s <session-name>
# 退出当前会话
exit

#分离会话 
# (退出当前 Tmux 窗口，但是会话和里面的进程仍然在后台运行)
#按下Ctrl+b d或者输入
tmux detach

# 查看所有会话
#Ctrl+b s
tmux ls
# or
tmux list-session

#接入会话
$ tmux attach -t <session_number/session_name>
# or
tmux attach-session -t my_session

# 杀死会话
$ tmux kill-session -t <session_number/session_name>

# 切换会话
$ tmux switch -t <session_number/session_name>

# 重命名会话
#Ctrl+b $
tmux rename-session -t <old_session_name/number> <new-name>

```

窗格相关命令

```sh

# 切分窗格
# 划分上下两个窗格
# Ctrl+b "
$ tmux split-window
# 划分左右两个窗格
# Ctrl+b %
$ tmux split-window -h

# 移动光标到窗格
# Ctrl+b <arrow key>
# 光标切换到上方窗格
$ tmux select-pane -U
# 光标切换到下方窗格
$ tmux select-pane -D
# 光标切换到左边窗格
$ tmux select-pane -L
# 光标切换到右边窗格
$ tmux select-pane -R

# 交换窗格位置
# 当前窗格上移
$ tmux swap-pane -U
# 当前窗格下移
$ tmux swap-pane -D

```

窗格快捷键

```

Ctrl+b %：划分左右两个窗格。
Ctrl+b "：划分上下两个窗格。
Ctrl+b <arrow key>：光标切换到其他窗格。<arrow key>是指向要切换到的窗格的方向键，比如切换到下方窗格，就按方向键↓。
Ctrl+b ;：光标切换到上一个窗格。
Ctrl+b o：光标切换到下一个窗格。
Ctrl+b {：当前窗格与上一个窗格交换位置。
Ctrl+b }：当前窗格与下一个窗格交换位置。
Ctrl+b Ctrl+o：所有窗格向前移动一个位置，第一个窗格变成最后一个窗格。
Ctrl+b Alt+o：所有窗格向后移动一个位置，最后一个窗格变成第一个窗格。
Ctrl+b x：关闭当前窗格。
Ctrl+b !：将当前窗格拆分为一个独立窗口。
Ctrl+b z：当前窗格全屏显示，再使用一次会变回原来大小。
Ctrl+b Ctrl+<arrow key>：按箭头方向调整窗格大小。
Ctrl+b q：显示窗格编号。
```


使用 oh my tmux 配置:

https://github.com/gpakosz/.tmux

```sh
# 进主目录
$ cd
$ git clone https://github.com/gpakosz/.tmux.git
# 将 .tmux.conf 软链接到当前目录下
$ ln -s -f .tmux/.tmux.conf
# 用户自定义配置文件
$ cp .tmux/.tmux.conf.local .


# 让 tmux 配置生效
tmux source-file ~/.tmux.conf
```


## 12.28. htop 替代 top

## 12.29. 安装 visualvm

https://github.com/oracle/visualvm

修改 `➜ vim /Applications/VisualVM.app/Contents/Resources/visualvm/etc/visualvm.conf` 添加 jdkhome


# 13. 空格预览插件

https://github.com/sindresorhus/quick-look-plugins
https://github.com/haokaiyang/Mac-QuickLook

如果升级macos, 需要   brew reinstall qlcolorcode 重装



# 14. 拼音输入法

- tab 筛选声调
- 「shift+option+B」和「shift+6」激活标点和颜文字符号面板
- control+shift+space打开手写板
- 拆字输入, 先键入“mamama”，然后按下shift+space就会有驫



# 15. 视频

http://blog.codinglabs.org/articles/using-mplayer-for-coursera.html 命令行视频播放器