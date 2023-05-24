---
title: 油猴插件&编写脚本🐒
date: 2022-11-12
tag: [油猴, 插件, 脚本]
toc_min_heading_level: 2
toc_max_heading_level: 5
---

<!-- TOC -->

- [1. reference materials](#1-reference-materials)
- [2. 插件](#2-插件)
- [3. 脚本原理](#3-脚本原理)
- [4. 插件 or 脚本](#4-插件-or-脚本)
  - [4.1. 作为开发者, 如何选择](#41-作为开发者-如何选择)
  - [4.2. 能力 api](#42-能力-api)
  - [4.3. 工程化](#43-工程化)
  - [4.4. 发布](#44-发布)
    - [4.4.1. 自动发布](#441-自动发布)
  - [4.5. 性能](#45-性能)
- [5. 脚本编写](#5-脚本编写)
  - [5.1. 推荐使用工具 工程化](#51-推荐使用工具-工程化)
  - [5.2. tips](#52-tips)
    - [5.2.1. script name \& version \& description](#521-script-name--version--description)
    - [5.2.2. import js script \& match url](#522-import-js-script--match-url)
    - [5.2.3. custom style](#523-custom-style)
    - [5.2.4. fetch and fix cors](#524-fetch-and-fix-cors)
    - [5.2.5. register menu command \& open tab](#525-register-menu-command--open-tab)
    - [5.2.6. store data](#526-store-data)
    - [5.2.7. copy to clipboard](#527-copy-to-clipboard)
    - [5.2.8. print log](#528-print-log)
    - [5.2.9. setup webpage notification](#529-setup-webpage-notification)
- [6. js 逆向](#6-js-逆向)

<!-- /TOC -->

# 1. reference materials

https://github.com/syhyz1990 脚本学习

https://www.v2ex.com/t/848726

https://www.tampermonkey.net/documentation.php

http://manuals.chudov.com/diveintogreasemonkey-2005-05-09/diveintogreasemonkey.pdf

http://www.ttlsa.com/docs/greasemonkey/

https://bbs.tampermonkey.net.cn/thread-184-1-1.html

js 和 dom 交互
http://caibaojian.com/javascript-api-collection.html
https://juejin.cn/post/6844903976052195341
https://www.cnblogs.com/kilig/p/12185238.html

教程
https://segmentfault.com/a/1190000038328999#item-5-4
https://www.jianshu.com/p/90f50744987d
https://space.bilibili.com/1037793830/channel/series
https://bbs.tampermonkey.net.cn/thread-184-1-1.html
http://www.ttlsa.com/docs/greasemonkey/

# 2. 插件

Tampermonkey 不开源 https://www.tampermonkey.net/  
Violentmonkey 开源, https://github.com/violentmonkey/violentmonkey , 但是更新脚本是没有 diff, 这挺可怕的  
Greasemonkey  
scriptcat https://github.com/scriptscat/scriptcat, 国产开源, 支持定时, 后台运行

# 3. 脚本原理

> 用户脚本其实是一种注入式的 JavaScript 程序，在网页本身的程序之外，通过一些手段，将用户需要的数据和逻辑注入到当前的网页中，达到修改界面、增加功能等等的目的

> 提供一些普通 JavaScript 实现不了的能力:
>
>       GM_xmlhttpRequest：用于发起跨域请求
>       GM_registerMenuCommand：当用户操作菜单时，触发一个行为

# 4. 插件 or 脚本

## 4.1. 作为开发者, 如何选择

[Greasy Monkey user.js](https://zh.wikipedia.org/zh-hk/Greasemonkey)  
[Chrome plugin dev guide](https://developer.chrome.com/docs/extensions/mv3/devguide/)

> user.js 是一个开放的的标准，最早由 Firefox 的一个插件提出，后来在 chrome 得到原生支持, 除了顶部的声明信息以及一些 GM\_\* 的特殊 api 之外，它与普通的 JavaScript 没有什么不同.
>
>       普通 JavaScript 做不到的事情，user.js 也基本没法实现。例如 获取所有的浏览器标签页 这种涉及到浏览器本身的操作

<br/>

> 插件则不同, 可以根据个人需要或偏好来定制 Chrome 功能和行为。它们基于 Web 技术（例如 HTML，JavaScript 和 CSS）构建
>
>       能访问浏览器众多的扩展 API，实现对浏览器级别的功能定制 – 而非仅限于网站。例如上面 user.js 做不到的事情 获取所有的浏览器标签页 浏览器插件可以轻易实现。
>
>       user.js 相当于 插件的子集(类似 content script: https://developer.chrome.com/extensions/content_scripts)

## 4.2. 能力 api

[user.js api](https://www.tampermonkey.net/documentation.php)  
[chrome plugin api](https://developer.chrome.com/extensions/devguide)

## 4.3. 工程化

工程化的难点主要在:

- 保证打包后顶部信息说明注释仍然在最顶部
- 支持多入口打包
- 支持 TypeScript
- 支持 vue/react 现代前端框架

Available engineering solution refer to [here](https://bbs.tampermonkey.net.cn/thread-3399-1-1.html)

## 4.4. 发布

user.js 可以发布在任何静态托管服务里，一般可以放在 GreasyFork 上，供需要的用户通过脚本管理其安装。


而 chrome 插件则只能通过 chrome web store 进行分发

> 而且每次更新或上架都需要被审核，这其实是比较花时间的，并非是即时性的。同时 web store 也有注册费用，必须使用 Visa 等国外信用卡支付 $5，而这对于国内开发者而言是一件比较麻烦的事情。

### 4.4.1. 自动发布

GreasyFork 甚至可以直接导入 GitHub 上的源码和 README 发布一个脚本，同时在后续过程中自动更新.

配合 GitHub actions 来实现自动发布

在项目文件夹下建立 .github/workflows/build.yml
(当我们把代码提交到 Github ，就会自动触发 workflow ，依次执行 yarn install 、yarn build 并且自动将 dist 目录下的代码自动部署到 GitHub pages。复制 pages 中的 raw 源文件地址, 贴到 greasy fork 网站上; 设置脚本同步为自动; 并且设置 webhook)
```yml
name: GitHub Pages

on:
  push:
    branches:
      - main
  pull_request:

jobs:
  deploy:
    runs-on: ubuntu-20.04
    permissions:
      contents: write
    concurrency:
      group: ${{ github.workflow }}-${{ github.ref }}
    steps:
      - uses: actions/checkout@v3

      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: "14"

      - name: Get yarn cache
        id: yarn-cache
        run: echo "::set-output name=dir::$(yarn cache dir)"

      - name: Cache dependencies
        uses: actions/cache@v2
        with:
          path: ${{ steps.yarn-cache.outputs.dir }}
          key: ${{ runner.os }}-yarn-${{ hashFiles('**/yarn.lock') }}
          restore-keys: |
            ${{ runner.os }}-yarn-

      - run: yarn install
      - run: yarn build

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        if: ${{ github.ref == 'refs/heads/main' }}
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist

```


## 4.5. 性能

对于一般用户而言，安装一个 chrome 插件会一直在后台开启一个线程，而脚本不会 – 只会在需要生效的网站上应用。

# 5. 脚本编写

## 5.1. 推荐使用工具 工程化

IDE: vscode, Chrome

  > 使用 Chrome 可以参考 <https://github.com/violentmonkey/generator-userscript>

  > https://github.com/Trim21/webpack-userscript-template (Trim21 提供了，可能是到目前为止最好的大型 UserScript 开发解决方案，使用 webpack 配合 LiveReloadPlugin 实现模块化开发与自动化测试。refer to [here](https://stackoverflow.com/questions/49509874/how-can-i-develop-my-userscript-in-my-favourite-ide-and-avoid-copy-pasting-it-to/63478925#63478925))

  > https://github.com/lisonge/vite-plugin-monkey 也不错, 用的人多  
  > - 额外的脚手架一键初始化各种模板 vue/react/vanilla/svelte/preact
  > - 支持 Tampermonkey 和 Violentmonkey 和 Greasemonkey 的脚本辅助开发
  > - 打包自动注入脚本配置头部注释
  > - 当 第一次启动 或 脚本配置注释改变时 自动在默认浏览器打开脚本安装
  > - 友好的利用 @require 配置库的 cdn 的方案，大大减少构建脚本大小
  > - 完全的 Typescript 和 Vite 的开发体验，比如模块热替换,秒启动


使用 vscode, 可以: 给 js 所在目录开个 web 服务，，浏览器打开就能被识别然后安装（虽然不太清楚，好像需要 .user.js 后缀？？）

调试: livereload


## 5.2. tips

- 获取 spa 单页应用内容 https://www.v2ex.com/t/850248

  > https://www.v2ex.com/t/787256


### 5.2.1. script name & version & description

```
name	名称，可自己给脚本取一个名字
namespace	命名空间，可写成网址
version	脚本的版本，用于检查更新。但需要用户设置更新频率
description	解释一下这个脚本具体做什么的
author	作者名字

@homepage、@homepageURL、@website and @source：在选项页面上用于将脚本名称链接到给定页面的作者主页。 请注意，如果@namespace标记以“ http：//”开头，其内容也将用于此

@icon、@iconURL、@defaulticon：低分率的脚本图标，会在脚本管理列表上显示
@icon64、@icon64URL：此脚本图标为64x64像素。如果还配置了@icon，那么@icon图像将在选项页面被缩放

@updateURL：更新脚本的地址，注意：只有存在 @version 标签才会去更新
@downloadURL：定义检测到更新时将从中下载脚本的 URL。如果值为 none，则不会执行更新检查


grant 指定脚本运行所需权限，如果脚本拥有相应的权限，就可以调用油猴扩展提供的API与浏览器进行交互。如果设置为none的话，则不使用沙箱环境，脚本会直接运行在网页的环境中，这时候无法使用大部分油猴扩展的API。如果不指定的话，油猴会默认添加几个最常用的API

connect	当用户使用GM_xmlhttpRequest请求远程数据的时候，需要使用connect指定允许访问的域名，支持域名、子域名、IP地址以及*通配符

updateURL	　脚本更新网址，当油猴扩展检查更新的时候，会尝试从这个网址下载脚本，然后比对版本号确认是否更新
```

### 5.2.2. import js script & match url

```
@match 用来匹配注入脚本网址的 url 其中 * 代表一个或者多个任意字符
    *://*.baidu.com/*  匹配 baidu 域名下的任意网页
    *://*/*         匹配任意网址
@match 和 @include 标签含义类似
@exclude 排除 URL，即使它们包含在 @include 或 @match 中。同样允许多个标签。


@require 代表要注入的公用 JS 库
    如引入 jQuery:
    // @require https://code.jquery.com/jquery-2.1.4.min.js
    // @require tampermonkey://vendor/jquery.js
    // @require tampermonkey://vendor/jszip/jszip.js


```

### 5.2.3. custom style

```js
开启权限 @grant GM_addStyle, 使用内置的 GM_addStyle 方法
// ==UserScript==
// @grant        GM_addStyle
// ==/UserScript==
GM_addStyle(`pre,code{user-select:auto !important}.signin{display: none !important;}`)


也可以使用 JS 自己实现
const heads = document.querySelector('head');
const style = document.createElement('style');
style.setAttribute('type', 'text/css');
style.innerHTML = `pre,code{user-select:auto !important}.signin{display: none !important;}`;
heads.append(style);

```

### 5.2.4. fetch and fix cors

```js
// ==UserScript==
// @grant        GM_xmlhttpRequest
// ==/UserScript==

//异步访问网页数据的API，这个方法比较复杂，有大量参数和回调
GM_xmlhttpRequest({
    headers: {
      'content-type': 'application/json',
    },
    responseType: 'json',
    url: 'https://api.juejin.cn/recommend_api/v1/article/recommend_cate_feed',
    data: '{"id_type":2,"sort_type":200,"cate_id":"6809637767543259144","cursor":"0","limit":20}',
    method: 'POST',
    onreadystatechange: (res) => {
      if (res.readyState === 4) {
        console.log(res.response)
      }
    },
  })

```

### 5.2.5. register menu command & open tab

右键搜索

```js
// ==UserScript==
// @grant        GM_registerMenuCommand
// @grant        GM_openInTab   (可以设置是否在后台打开等几个选项)
// ==/UserScript==

GM_registerMenuCommand("GitHub 搜索", function () {
  const str = document.getSelection().toString();
  if (str) {
    GM_openInTab(`https://github.com/search?q=${str}`, { active: true });
  }
});

GM_registerMenuCommand("NPM 搜索", function () {
  const str = document.getSelection().toString();
  if (str) {
    GM_openInTab(`https://www.npmjs.com/search?q=${str}`, { active: true });
  }
});

```

### 5.2.6. store data

```
GM_getValue(name,defaultValue)	从油猴扩展的存储中访问数据。可以设置默认值，在没成功获取到数据的时候当做初始值。如果保存的是日期等类型的话，取出来的数据会变成文本，需要自己转换一下。

GM_setValue(name,value)	将数据保存到存储中
```

### 5.2.7. copy to clipboard

```
GM_setClipboard(data, info)	将数据复制到剪贴板中，第一个参数是要复制的数据，第二个参数是MIME类型，用于指定复制的数据类型。
```

### 5.2.8. print log

```
GM_log(message)	将日志打印到控制台中，可以使用F12开发者工具查看。
```

### 5.2.9. setup webpage notification

```
GM_notification(details, ondone), GM_notification(text, title, image, onclick)	设置网页通知
```

# 6. js 逆向

若想要实现一些有用的脚本，还需要具备更多的知识，比如JS逆向分析


