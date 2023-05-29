---
title: Protect Your App 安全保护认证鉴权🔑
tags: [authentication, oauth2.0, jwt]
date: 2017-10-22
toc_min_heading_level: 2
toc_max_heading_level: 5
---

https://jwt.io/

ref: http://www.ruanyifeng.com/blog/2018/07/json_web_token-tutorial.html

https://medium.com/emblatech/secure-your-spring-restful-apis-with-jwt-a-real-world-example-bfdd2679db5f

http://www.ruanyifeng.com/blog/2019/04/github-oauth.html 客户端

https://www.cnblogs.com/oopsguy/p/7550399.html 服务端 保护api 自动创建表

https://gigsterous.github.io/engineering/2017/03/01/spring-boot-4.html

https://www.devglan.com/spring-security/spring-boot-oauth2-jwt-example 和jwt集成

[使用 oauth2testtemplate](https://stackoverflow.com/questions/27864295/how-to-use-oauth2resttemplate)

[为 rest api 加上 oauth2](http://websystique.com/spring-security/secure-spring-rest-api-using-oauth2/)

<!--more-->
 
- [1. jwt](#1-jwt)
  - [1.1. jwt 介绍](#11-jwt-介绍)
  - [1.2. 优缺点](#12-优缺点)
    - [1.2.1. 使用场景](#121-使用场景)
  - [1.3. 怎么使用](#13-怎么使用)
- [2. spring security](#2-spring-security)
  - [2.1. 基本架构](#21-基本架构)
- [3. Oauth2.0](#3-oauth20)
  - [3.1. oauth2介绍](#31-oauth2介绍)
  - [3.2. 四种模式](#32-四种模式)
  - [3.3. 优缺点](#33-优缺点)
  - [3.4. spring security 入门](#34-spring-security-入门)
  - [3.5. 案例: 集成微信登录](#35-案例-集成微信登录)
- [单点登录 sso](#单点登录-sso)
- [4. https](#4-https)
- [5. 加密](#5-加密)
  - [5.1. 对称加密](#51-对称加密)
  - [5.2. 非对称加密](#52-非对称加密)
- [6. 摘要算法](#6-摘要算法)
  - [6.1. md5](#61-md5)



# 1. jwt

## 1.1. jwt 介绍

本质就是一段 json 串 + 签名; 没有加密的作用

三部分：Header.Payload.Signature

- Header（头部）- 一个 JSON 对象，描述 JWT 的元数据(使用什么加密算法 消息类型)

    默认为HMAC SHA256（写为HS256）， 然后使用Base64URL 算法转为string

    > Base64URL: JWT 作为一个令牌（token），有些场合可能会放到 URL（比如 api.example.com/?token=xxx）。Base64 有三个字符+、/和=，这些符号在 URL 里面有特殊含义，所以要被替换掉：=被省略、+替换成-，/替换成_ 。这就是 Base64URL 算法。

- Payload（负载）或者叫claims(声明)

    一个 JSON 对象，用来存放实际需要传递的数据， 
    
    最后使用 Base64URL 算法 转为 string

- Signature（签名）- 对前两部分的签名hash，防止数据篡改

    需要指定一个密钥（secret）。这个密钥只有服务器才知道，不能泄露给用户。然后，使用 Header 里面指定的签名算法（默认是 HMAC SHA256）签名

    即签名的值为 `HMACSHA256(base64UrlEncode(header) + "." + base64UrlEncode(payload), secret)`

在计算出签名哈希后，JWT头，有效载荷和签名哈希的三个部分组合成一个字符串，每个部分用"."分隔，就构成整个JWT。


一般在 spring security oauth2 中 充当 token 的格式

## 1.2. 优缺点

```
 2种Token：
    1. 去中心化的JWT token
        优点：
            1. 去中心化，便于分布式系统使用
            2. 基本信息可以直接放在token中。 username，nickname，role
            3. 功能权限较少的话，可以直接放在token中。用bit位表示用户所具有的功能权限
        缺点：服务端不能主动让token失效 
             token无法自动续期
        为了规避缺点, 建议联合 redis 一起使用 (但是这样又回到了 session/cookie 这种老路, 需要再一个集中的redis 中维护状态信息, 不如不用 jwt)

    2. 中心化的 redis token / memory session等
        优点：服务端可以主动让token失效
        缺点：
           1. 依赖内存或redis存储。
           2. 分布式系统的话，需要redis查询/接口调用增加系统复杂性。
```

### 1.2.1. 使用场景

一般不单纯使用 jwt token 来做用户登录鉴权, 会搭配 redis 一起使用, (以提供token主动失效功能)

使用场景: 后端服务之间的鉴权 (不会用在用户登录鉴权); 或者生成开发 api 平台的 token, 生成/销毁都在 client 端主动完成.

## 1.3. 怎么使用

客户端使用 username, password 登录成功, 服务器创建 JWT，返回给client, client可以 吧 token储存在 请求头中, 每次请求都带上, 服务器每次回校验 token 是否合法/被篡改, 合法则放行

> 也可以存储在 Cookie 里面，也可以储存在 localStorage。但是这样不能跨域，所以更好的做法是`放在 HTTP 请求的头信息Authorization字段里面`。or 放在 request body 亦可
>
> 服务器是如何校验的? 
> 通过 base64 解码从 header 部分拿到加密算法, 通过存储的 secret 对 header 和 payload 拼起来进行加密, 和 signature 对比
>
> 本质上是以时间换空间

Java 平台的实现推荐 -> [java-jwt](https://github.com/auth0/java-jwt)



# 2. spring security

## 2.1. 基本架构

```java
UserDetails 
表示从数据库中加载的正确的用户名密码信息

UserDetailsService
负责从特定的地方（通常是数据库）加载正确的用户信息
有 jdbc 实现, 有 InMemory 实现, 不过一般会自己实现

User

SecurityContextHolder
全局上下文信息, 存储当前操作的用户是谁，该用户是否已经被认证，他拥有哪些角色权限, 底层使用 ThreadLocal 存储, 

    Spring-Security在用户登录时自动绑定认证信息到当前线程，在用户退出时，自动清除当前线程的认证信息

    Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal()
    if (principal instanceof UserDetails) {...}

Authentication
用户提交的认证信息, 等待被认证, 认证成功后, 会被填充 UserDetails 信息

    UsernamePasswordAuthenticationToken 
    实现类

AuthenticationManager
负责认证, 但是不自己处理认证逻辑, 

    ProviderManager 
    是 AuthticationManager 的一个实现, 内部会维护一个List列表，存放多种认证方式,List中的认证方式, 会依照次序去认证，认证成功则立即返回, 如果所有认证器都无法认证成功，则ProviderManager 会抛出一个ProviderNotFoundException异常。

    AuthenticationProvider 
    认证方式接口, 有几个基本实现

        用户名密码认证方式
        邮箱密码认证
        手机号密码认证
        DaoAuthenticationProvider 比对 

UsernamePasswordAuthenticationFilter 
表单提交了username和password，被封装成token进行一系列的认证

ExceptionTranslationFilter
将Java中的异常和HTTP的响应连接在了一起

AuthenticationEntryPoint

AccessDeniedHandler

```

# 3. Oauth2.0

## 3.1. oauth2介绍

https://www.cnblogs.com/flashsun/p/7424071.html

是一套规范, 使得一个app可以授权第三方应用访问特定资源; 比如微信可以开放用户账号信息, 用户可以使用自己的微信账号登录其他应用而无需提供微信的用户名密码

> 和 jwt 关系: OAuth2.0是一种授权规范, 其实现有 spring security (不同于jwt, jwt 是一种认证协议), 在使用 Oauth2.0时, jwt 可作为其认证机制中的一种

涉及到的几个角色: 用户, client(第三方app), resource server/auth server (资源真正的授权方/持有者)

1. 用户请求第三方app登录 
1. app 向 resource server 请求授权
1. resource server 询问 用户 是否同意
1. resource server 发送资源信息给 第三方app, 完成登录

用户点击 client (三方 app) 的oauth登录

页面跳转到 -> client(第三方 app) provides a endpoint To users: /oauth/authorize?client_id=baidu&response_type=code&scope=all&redirect_uri=http.baidu.com

- client_id :  need to be registered in auth server
- response_type - has two available value 
  - "code": 返回授权码 (用于授权码模式)
  - "token" 返回 访问令牌 (用于简单模式)
- scope: 权限范围, 在 auth server 中配置

用户选择是否允许使用 auth server 的信息登录, 点击允许, 根据 redirect uri 跳转回三方 app, 地址栏带有 xxx?code=fsfsdf

三方 app 还提供获取 token 的接口 /oauth/token?client_id=client1&client_secret=123&grant_type=authorization&code=sdfsefsef&redirect_uri=http://baidu.com

- client_id, client_secret
- grant_type
  - authorization code
  - implicit
  - password credentials
  - client credentials
- code 仅仅authorization code  模式下需要
- redirect_uri 跳转

有了 token 后, 就可以访问 auth server 的资源信息

## 3.2. 四种模式


OAuth 2.0 规定了四种获得令牌的流程模式:

- 授权码（authorization-code）- 第三方应用先申请一个授权码，然后再用该码获取令牌(常用, 安全性好)
- 隐藏式/简化模式（implicit） - 纯前端应用，没有后端,必须将令牌储存在前端; 允许直接向前端颁发令牌。这种方式没有授权码这个中间步骤
- 密码模式（password）- 直接使用密码申请令牌， 用于前后端分离的登录
- 客户端凭证模式（client credentials） - 适用于没有前端的命令行应用，即在命令行下请求令牌



授权码模式: 以 微信账号登录某网站a 为例介绍

1. 微信取得用户的同意后, 通过回调 客户端 a 提供的 redirect_uri 发送一个 code (临时授权票据) 给 a

    因为是重定向, 此时 redirect_uri?code=xxx 会直接显示在浏览器中, code 暴露

1. a拿到 code, 再加上 appid 和 secret , 再次请求微信, 获取 access_token

    采用 token 的方式, 是 a 的后台直接和 微信后台交互, 不依赖浏览器, 安全

1. a 拿到 access_token 后, 去获取资源数据 (access_token是有效期的)


oauth2中为什么不直接返回token而是传授权码code?

- 客户端会暴露 token

    授权服务器是会根据客户端传来的 redirect_url 返回给客户端 3xx 重定向状态码，然后客户端再把授权码 code 传给客户端服务器，首先前端（网页有源代码，手机app反编译）的都是不安全的，直接将 token 传给客户端会把 token 暴露

- 如果客户端只发送 appkey 就能直接获取 token，那么所有人都可以模拟该客户端来获取 token 了

## 3.3. 优缺点

优点:

- 使用OAuth2 认证的好处就是你只需要一个账号密码，就能在各个网站进行访问，而面去了在每个网站都进行注册的繁琐过程


## 3.4. spring security 入门

同类 https://github.com/dromara/sa-token

## 3.5. 案例: 集成微信登录

申请微信开发者账号, 注册自己写的app得到appid

app 中需要提供两个接口

接口1: 向微信发起请求

接口2: 微信的回调接口

```java
@SpringBootApplication
public class WeixinLoginDemoApplication {

    @Bean
    public RestTemplate restTemplate() {
        return new RestTemplate();
    }

    public static void main(String[] args) {
        SpringApplication.run(WeixinLoginDemoApplication.class, args);
    }

}

@Controller
class LoginController {

    private final WechatProps wechatProps;

    private final RestTemplate restTemplate;

    @Autowired
    public LoginController(WechatProps wechatProps, RestTemplate restTemplate) {
        this.wechatProps = wechatProps;
        this.restTemplate = restTemplate;
    }

    @RequestMapping("/wechat/login")
    public void wechatLogin(HttpServletResponse resp) throws IOException {
        // 向微信发送请求, 设置回调接口
        //todo 回调地址部署上线后需要更改为真实互联网地址
        // 这里先用 花生壳 获取临时域名
        resp.sendRedirect("https://open.weixin.qq.com/connect/qrconnect"
                + "&appid=" + wechatProps.getAppid()
                + "&redirect_uri=" + URLEncoder.encode("http://xxx:8080", StandardCharsets.UTF_8.toString())
                + "&response_type=code&scope=snsapi_login&state=STATE#wechat_redirect");
    }

    @RequestMapping("/wechat/callback")
    public void wechatCallback(@RequestParam String code) {
        // 通过 code 拿到 access_token
        StringBuilder tokenUrl = new StringBuilder("https://api.weixin.qq.com/sns/oauth2/access_token");
        tokenUrl.append("&appid=" + wechatProps.getAppid());
        tokenUrl.append("&secret=" + wechatProps.getSecret());
        tokenUrl.append("&code=" + code);
        tokenUrl.append("&grant_type=authorization_code");
        WechatTokenResp wechatTokenResp = restTemplate.getForObject(tokenUrl.toString(), WechatTokenResp.class);

        // 通过 openid, token 获取用户信息
        HashMap<String, Object> userInfoArgs = new HashMap<>(2);
        userInfoArgs.put("openid", wechatTokenResp.getOpenid());
        userInfoArgs.put("access_token", wechatTokenResp.getAccess_token());
        restTemplate.getForObject("", , userInfoArgs);
    }
}

@Component
@ConfigurationProperties("wechat")
@Data
@AllArgsConstructor
@NoArgsConstructor
class WechatProps {

    private String appid;

    private String secret;
}

@Data
class WechatTokenResp {

    private String access_token;
    private String expire_in;
    private String refresh_toke;
    private String openid;
    private String scope;
    private String unionid;
}
```

# 单点登录 sso

 

# 4. https



# 5. 加密

https://blog.csdn.net/u013565368/article/details/53081195
https://www.cnblogs.com/zyw-205520/p/5585014.html
https://blog.storagecraft.com/5-common-encryption-algorithms/
https://github.com/xuzongbao/encryption

## 5.1. 对称加密

加解密使用同一个秘钥, 如 des, aes

速度快, 适合服务端直接和服务端通信使用

## 5.2. 非对称加密

如 rsa


加密工具 gpg: http://www.ruanyifeng.com/blog/2013/07/gpg.html, https://www.jianshu.com/p/268064e67719 


# 6. 摘要算法

## 6.1. md5

信息摘要算法, 不可逆, 抗修改

但是用户密码不可直接使用 md5 加密后存储, 因为还是可能被暴力破解, 如事先生成一个 pwd -> md5(pwd) 映射字典, 破解一个 md5 时, 只要将待破解值拿到字典中和 字典值进行比对, 匹配上后返回对应的 key 即可破解.

所以一般会将密码拼接上一个随机串(加盐), 然后 md5 后存储. BCryptPasswordEncoder 就是这样, 不过更优雅, 她将 随机盐拼接到 加密后的 md5 密码后, 无需特地存储 盐


