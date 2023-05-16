---
title: Establish the Docker Develop Environment for frontend 
date: 2023-3-11
tags: [docker, react, vue]
authors: me
keywords: [docker, react, vue]
---

In this article I'm gonna show you how to build a docker env when develop a frontend app

<!-- truncate -->

## vue

`vue create vue-docker` to generate the basic structure

create dockerfile:

```dockerfile
#设置构建的基础镜像
FROM node
#创建一个名为vue-docker的文件夹
RUN  mkdir -p  /vue-docker
#进入到这个目录中（当我们打开镜像终端的时候会自动进入这个目录中去）
WORKDIR /vue-docker
#拷贝当前目录下所有东西到vue-docker目录中
COPY . .
#设置npm下载依赖来源为淘宝源
RUN npm config set registry https://registry.npm.taobao.org
#安装项目依赖
RUN npm i
#在启动镜像时执行启动项目的命令
CMD npm run serve
#暴露端口用于外部访问
EXPOSE 8080




```


if you want to get it work with nginx: create docker-compose.yml

```yml
version: "3" # 指定版本(不同的版本存在语法差异，这边使用最新的版本)
services:
  nginx: # 用户自定义的服务名称
    image: nginx # 使用的nginx最新的镜像
    volumes:
        # 使用本地的 nginx 配置 default.conf
      - /default.conf:/etc/nginx/conf.d/default.conf
    # 声明暴露的端口
    ports:
      - "80:80"
  vue: 
    build: # 构建相关的配置 也可以直接使用image:xxx去构建
      context: .
      dockerfile: vue # 使用自定义的 dockerfile 文件名
    working_dir: /vue-docker # 进入工作的目录中
    command: npm run serve # 在启动镜像时执行启动项目的命令
    volumes: # 指定映射的路径（可指定多个）
      - ./x'x'x:/xxx
      - /src:/vue-docker/src  # 映射本地源码目录
    ports: # 暴露端口用于外部访问（可指定多个）
      - 8080:8080
      - 8081:8081



```

then you need create the nginx configuration: default.conf

```conf
server {
    listen       80;
    server_name  localhost;

    location / {
       proxy_pass http://vue:8080; # 这里的vue就是docker-compose中自定义的services名
    }
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   /usr/share/nginx/html;
    }
}


```

vue.config.js 中添加 disableHostCheck，不去检测域名:

```js
module.exports = {
  devServer: {
    disableHostCheck: true,
  },
};


```

`docker-compose -d up` To start the env.

`docker build -t vue-docker .` to build the vue app image

If you don't want to use nginx, you also can start the container directly:

```sh
docker run -d -p 8080:8080 -v /src:/vue-docker/src vue-docker
# 进入命令行
docker run -it vue-docker /bin/bash


```

now we can try `http://localhost:8080`

