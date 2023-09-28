---
title: Raspberry Pi as a Dev Server树莓派折腾记录
tags: [raspberrypi]
authors: me
---

几个月前我买了一个树莓派, 新鲜劲儿去了就一直在吃灰, 最近闲下来 想把它打造成一个小服务器, 跑一跑一些乱七八糟的代码, 那么, 说干就干.

网络：电信1000M宽带
软路由：J4125四口工控主机
软路由系统：Unraid丨OpenWrt 丨iKuai
交换机：网件8口千兆交换机 GS308
硬路由：小米AX3600丨华硕RT-AC86U 丨 NewWfi-3
台式机：黑果+Windows10 双系统组装机 丨M1 Mac mini
笔记本： MacBook Pro 2015丨 MacBook Pro 2019丨 Mac Mini M1
平板：Ipad Air
软件：Final Cut Pro丨 剪映专业版丨 PR
键盘：FILCO 108 红轴 丨AkkO 3098 蓝轴 丨 Keychron K2丨 珂芝 K75
相机：SONY a6300 丨佳能 G7X mark III
手机：iPhone 13 Pro 丨iPhone 13 Mini
相机镜头：索尼16-50mm狗头丨适马30mm F1.4
话筒：猛犸无线麦克风
移动硬盘：东芝 4T丨奥睿科M.2移动硬盘盒+256硬盘丨 雷电 3 扩展坞 + SN550
U盘：闪迪64G*3
NAS：DS218 Play 4T*2

<!--truncate-->


## 安装 Ubuntu server

```sh

version: 2
ethernets:
  eth0:
    dhcp4: true
    optional: true
#wifis:
#  wlan0:
#    dhcp4: true
#    optional: true
#    access-points:
#      myhomewifi:
#        password: "S3kr1t"
#      myworkwifi:
#        password: "correct battery horse staple"
#      workssid:
#        auth:
#          key-management: eap
#          method: peap
#          identity: "me@example.com"
#          password: "passw0rd"
#          ca-certificate: /etc/my_ca.pem
wifis:
  wlan0:
    dhcp4: true
    optional: true
    access-points:
      CMCC-2EE8-5G:
        password: "ezVL7XjF"
```

## 配置 raspberry pi

我之前刚买回来树莓派就配置好了, 为了保持文章的完整性, 还是记录一下配置过程

```sh
# raspberry 默认 user 是 pi/raspberry
# 如果是 Ubuntu 系统, 则是 ubuntu/ubuntu (登入后需要修改密码)


# 联网
# 先插有线, 安装 iw, ifconfig, iwconfig 这些工具
sudo iwconfig # wlan0 无线网卡是否存在
ifconfig wlan0 up # 启动
ip link set wlan0 up # 启动
iw dev wlan0 scan | grep SSID # 扫描可用 ssid



####

sudo vim /etc/network/interfaces

auto lo //表示使用localhost
iface eth0 inet dhcp //表示如果有网卡ech0, 则用dhcp获得IP地址 (这个网卡是本机的网卡，而不是WIFI网卡)
auto wlan0 //表示如果有wlan设备，使用wlan0设备名
allow-hotplug wlan0 //表示wlan设备可以热插拨
iface wlan0 inet dhcp //表示如果有WLAN网卡wlan0 (就是WIFI网卡), 则用dhcp获得IP地址
wpa-ssid “你的wifi名称”//表示连接SSID名
wpa-psk “你的wifi密码”//表示连接WIFI网络时，使用wpa-psk认证方式，认证密码

#####

## 静态ip https://www.jianshu.com/p/ac9d784f112b

sudo vi /etc/dhcpcd.conf

###### 内容如下:

interface eth0

static ip_address=192.168.0.10/24 # 静态ip
static routers=192.168.1.1 # 网关
static domain_name_servers=192.168.0.1 # dns

interface wlan0 # 无线网卡

static ip_address=192.168.0.200/24
static routers=192.168.1.1
static domain_name_servers=192.168.0.1

######

#重启
sudo reboot

# 配置国内源

# 如果是 raspberry os, 则:
# 分为软件更新源, 系统更新源
sudo cp /etc/apt/sources.list /etc/apt/sources.list.bak # 先备份总是没错的
sudo cp /etc/apt/sources.list.d/raspi.list /etc/apt/sources.list.d/raspi.list.bak # 备份
sudo vim /etc/apt/sources.list
# modify the content like this:
deb http://mirrors.ustc.edu.cn/raspbian/raspbian/ stretch main contrib non-free rpi
# 然后是修改系统更新源
sudo vim /etc/apt/sources.list.d/raspi.list
# 修改成这样:
deb http://mirrors.ustc.edu.cn/archive.raspberrypi.org/debian/ stretch main ui

# 如果是 Ubuntu os 则:
http://mirrors.ustc.edu.cn/ubuntu-ports

# 更新软件包
sudo apt update 
sudo apt full-upgrade

# 配置静态 ip
sudo vim  



## 切换 root

sudo passwd root # 然后设置 root 密码


```

## 安装 docker

https://shumeipai.nxez.com/2019/05/20/how-to-install-docker-on-your-raspberry-pi.html

```sh
sudo apt update 
sudo apt full-upgrade

sudo apt-get install apt-transport-https \
                       ca-certificates \
                       software-properties-common

# 方法一:
sudo curl -sSL https://get.docker.com | sh

# 方法二:
# 更新软件库索引
sudo apt update
# 先安装 https 依赖包
sudo apt install -y apt-transport-https \
                       ca-certificates \
                       software-properties-common
# 添加 Docker 的 GPG key
curl -fsSL https://yum.dockerproject.org/gpg | sudo apt-key add -
# 验证一下:
apt-key fingerprint 58118E89F3A912897C070ADBF76221572C52609D
sudo apt update
sudo apt install -y docker-engine   


# (一次性)使用国内镜像源
docker run hello-world --registry-mirror=https://docker.mirrors.ustc.edu.cn
# 推荐方法:
vim /etc/docker/daemn.json
{ 

"registry-mirrors": ["https://docker.mirrors.ustc.edu.cn"] 

}

# 允许 非 root 使用
sudo usermod -aG docker pi

################################################################


# 安装 docker-compose

apt-get update
apt-get install -y python python-pip
apt-get install libffi-dev
pip3 install docker-compose # 必须使用 Python3 安装
docker-compose -v


```

## 运行环境

```sh
# mysql
docker pull hypriot/rpi-mysql
docker run --name mysql -d -e MYSQL_ROOT_PASSWORD=root -p 3306:3306 --restart=always hypriot/rpi-mysql
# 新启动一个容器作为 client 去连接 MySQL server
docker run --rm -it --link mysql:ms hypriot/rpi-mysql mysql -hms -uroot -p


# jdk8
sudo apt-get purge openjdk-8-jre-headless
sudo apt-get install openjdk-8-jre-headless
sudo apt-get install openjdk-8-jre
```


## 配置动态域名服务 ddns


公网vps 是必须的

### 通过 ssh隧道

ssh 隧道远程端口转发(ssh remote forwarding) : 本地执行 `ssh -NTf -R 8080:127.0.0.1:8080 username@12.34.56.78`, 将远程 server的 8080 映射到 本地的 8080; 再如: `ssh -NTf -R 8080:github.com:80 username@12.34.56.78` 就能通过 12.34.56.78:8080 去访问 github.com:80 了。

```
N参数：表示只连接远程主机，不打开远程shell；
T参数：表示不为这个连接分配TTY；
f参数：表示连接成功后，转入后台运行；
R: 远程转发 
```

但是 SSH 隧道是不稳定的，在网络恶劣的情况下可能随时断开, AutoSSH 能让 SSH 隧道一直保持执行，他会启动一个 SSH 进程，并监控该进程的健康状况；当 SSH 进程崩溃或停止通信时，AutoSSH 将重启动 SSH 进程: `autossh -N -R 8080:127.0.0.1:8080 username@12.34.56.78`

需要去外网服务器上修改 /etc/ssh/sshd_config 文件如下: (重启`service sshd restart`)

```
GatewayPorts yes
```

意思是，SSH 隧道监听的服务的 IP 是对外开放的 0.0.0.0，而不是只对本机的 127.0.0.1。

## 连接上 WiFi 但无法上网

```sh
# 添加 nameserver 8.8.8.8
sudo vim /etc/resolv.conf

# relead
sudo resolvconf -u 
# restart network
sudo /etc/init.d/networking restart

```

尝试后貌似无效

下面有效: (https://www.geek-share.com/detail/2755498900.html)

```sh
sudo nano /etc/dhcpcd.conf

# 设置 WiFi
sudo nano /etc/wpa_supplicant/wpa_supplicant.conf

```


## 安装 node

https://blog.csdn.net/sunxdd/article/details/105894882