---
title: Audio and Video development Intro
tags: [audio, video, outline]
date: 2018-04-10 22:27:26
toc_min_heading_level: 2
toc_max_heading_level: 5
---

https://github.com/zhw2590582/live-video-study-notes 前端视频直播相关技术的笔记

https://github.com/gwuhaolin/blog/issues/10 流媒体加密

https://blog.avdancedu.com/1ed22639/

https://github.com/makelove/OpenCV-Python-Tutorial


JNI技术、NDK技术、HOOK技术、视频直播技术: https://github.com/UCodeUStory/JNI_NDK

go实现的 视频直播 server: https://github.com/QPlus/GotyeLive

ffmpeg: https://github.com/feixiao/ffmpeg, https://github.com/huwan/FFmpeg-Tutorial-CN, 搜索 "ffmpeg 入门"; java api: https://github.com/bytedeco/javacv, http://einverne.github.io/post/2015/12/ffmpeg-first.html, https://github.com/tonydeng/fmj

https://github.com/EasyDarwin/Course

http://www.ruanyifeng.com/blog/2020/01/ffmpeg.html

https://github.com/daniulive/SmarterStreaming 超强全自研跨平台(windows/android/iOS)流媒体内核 , 直播

视频后台方向: 上传下载转码加密等流分发


<!-- TOC -->

- [1. 在线视频广告](#1-%E5%9C%A8%E7%BA%BF%E8%A7%86%E9%A2%91%E5%B9%BF%E5%91%8A)
  - [1.1. 视频播放原理](#11-%E8%A7%86%E9%A2%91%E6%92%AD%E6%94%BE%E5%8E%9F%E7%90%86)
  - [1.2. 视频广告怎么加上的](#12-%E8%A7%86%E9%A2%91%E5%B9%BF%E5%91%8A%E6%80%8E%E4%B9%88%E5%8A%A0%E4%B8%8A%E7%9A%84)
  - [1.3. 屏蔽过滤广告原理](#13-%E5%B1%8F%E8%94%BD%E8%BF%87%E6%BB%A4%E5%B9%BF%E5%91%8A%E5%8E%9F%E7%90%86)
- [2. 音视频编程](#2-%E9%9F%B3%E8%A7%86%E9%A2%91%E7%BC%96%E7%A8%8B)

<!-- /TOC -->
<!--more-->

# 在线视频广告

https://blog.csdn.net/v6543210/article/details/40990197
https://www.jianshu.com/p/f2e1dc62cc82
https://www.ijophy.com/2013/12/block-youku-ads-again.html

## 视频播放原理



## 视频广告怎么加上的

最开始是直接加在视频开头, 使用普通的浏览器插件即可去除 (adblock...), 后来升级, 将广告嵌入到播放器, 即使屏蔽广告, 播放器仍然会等待直到广告播完, 这段时间黑屏

## 屏蔽过滤广告原理

- 广告元素隐藏

    网页中注入一段css样式，将某些id选择器和类选择器的样式设置为{ display: none; }来隐藏

- 请求阻断类 (拦截广告 API)

    通过正则匹配拦截规则库来阻断广告网络请求, 因为视频网站的广告和视频一般是放在不同URL地址的，而URL地址中字符串的前缀或后缀有着一定的规律性

- 拒绝接收来自特定IP(广告服务器)地址信息

# 音视频编程

https://blog.csdn.net/weixin_34378767/article/details/88601005 
TODO
