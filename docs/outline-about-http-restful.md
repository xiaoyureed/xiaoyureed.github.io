---
title: HTTP protocol Intro & RESTful
tags:
  - http
  - restful
  - outline
date: 2016-04-10 22:27:26
toc_min_heading_level: 2
toc_max_heading_level: 5
---


<div align="center">
http://www.httpbin.org/ 在线演示 http 标准
https://httpie.org/ http 访问工具, 代替 curl



https://github.com/dbohdan/automatic-api turns your database into a REST/GraphQL API

http://www.ruanyifeng.com/blog/2014/05/restful_api.html,

java的rmi使用https://blog.csdn.net/zhaowen25/article/details/45443951, 

xml-rpc使用http://www.cnblogs.com/flyoung2008/archive/2011/11/12/2246282.html

http://www.ruanyifeng.com/blog/2016/04/cors.html

https://kalasearch.cn/blog/rest-api-best-practices/
</div>

<!--more-->

- [1. 概念](#1-概念)
- [2. http和tcp/ip比较](#2-http和tcpip比较)
- [3. 怎么查看](#3-怎么查看)
- [4. http请求](#4-http请求)
  - [4.1. 常见请求方式](#41-常见请求方式)
  - [4.2. GET vs. POST](#42-get-vs-post)
  - [4.3. 常见请求头](#43-常见请求头)
  - [4.4. 获取请求信息](#44-获取请求信息)
  - [4.5. 网页参数提交获取](#45-网页参数提交获取)
  - [4.6. service(),doGet(),doPost()关系](#46-servicedogetdopost关系)
  - [4.7. request中文乱码问题](#47-request中文乱码问题)
- [5. the security between different http methods](#5-the-security-between-different-http-methods)
- [6. http响应](#6-http响应)
  - [6.1. 响应行\&状态码](#61-响应行状态码)
  - [6.2. 常见响应头](#62-常见响应头)
  - [6.3. 设置http响应](#63-设置http响应)
  - [6.4. api示例](#64-api示例)
  - [6.5. 请求重定向](#65-请求重定向)
  - [6.6. 响应中文乱码](#66-响应中文乱码)
- [7. url中文乱码](#7-url中文乱码)
  - [7.1. 在JS中处理](#71-在js中处理)
  - [7.2. 在java中处理](#72-在java中处理)
- [8. 基于HTTP协议的实时数据获取](#8-基于http协议的实时数据获取)
  - [8.1. 短轮询](#81-短轮询)
  - [8.2. 长连接](#82-长连接)
  - [8.3. WebSocket](#83-websocket)
- [9. 一次完整的http请求](#9-一次完整的http请求)
  - [9.1. http请求流程](#91-http请求流程)
  - [9.2. 发起http请求](#92-发起http请求)
  - [9.3. http解析](#93-http解析)
    - [9.3.1. 常用的请求头响应头，状态码](#931-常用的请求头响应头状态码)
  - [9.4. DNS域名解析](#94-dns域名解析)
    - [9.4.1. 整个流程](#941-整个流程)
    - [9.4.2. 清除DNS缓存](#942-清除dns缓存)
    - [9.4.3. 域名解析方式](#943-域名解析方式)
  - [9.5. CDN 工作机制](#95-cdn-工作机制)
  - [9.6. 免费 cdn](#96-免费-cdn)
- [10. https](#10-https)
  - [10.1. 和 http 对比](#101-和-http-对比)
  - [10.2. 如何免费开启 https](#102-如何免费开启-https)
- [11. resutful](#11-resutful)
  - [11.1. Web Service](#111-web-service)
  - [11.2. 什么是restful架构？](#112-什么是restful架构)
  - [11.3. RESTful最大的优势](#113-restful最大的优势)
  - [11.4. 典型的设计错误](#114-典型的设计错误)
  - [11.5. 设计合理的restful API](#115-设计合理的restful-api)
  - [11.6. 接口安全设计](#116-接口安全设计)
  - [11.7. 实践](#117-实践)
    - [11.7.1. 设计统一的响应结构](#1171-设计统一的响应结构)
    - [11.7.2. 实现对象序列化](#1172-实现对象序列化)
    - [11.7.3. 处理异常](#1173-处理异常)
    - [11.7.4. 支持参数验证](#1174-支持参数验证)
    - [11.7.5. 解决跨域问题](#1175-解决跨域问题)
    - [11.7.6. API访问权](#1176-api访问权)



# 1. 概念

http协议是定义的一套client和server之间数据传输的规范

# 2. http和tcp/ip比较

# 3. 怎么查看

1. 使用浏览器
2. 使用系统自带的telnet工具(远程访问工具)

# 4. http请求

先看一个全景:

```
请求（浏览器 -> 服务器）
GET /day09/hello HTTP/1.1
Host: localhost:8080
User-Agent: Mozilla/5.0 (Windows NT 6.1; WOW64; rv:35.0) Gecko/20100101 Firefox/35.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: zh-cn,en-us;q=0.8,zh;q=0.5,en;q=0.3
Accept-Encoding: gzip, deflate
Connection: keep-alive


响应（服务器->浏览器）
HTTP/1.1 200 OK
Server: Apache-Coyote/1.1
Content-Length: 24
Date: Fri, 30 Jan 2015 01:54:57 GMT

this is hello servlet!!!

```

## 4.1. 常见请求方式

GET: 获取资源
POST:传输实体文本, Restful风格api里用于新增
HEAD: 获取报文首部, 和get类似, 只是不返回报文的主题部分
PUT: 传输文件, Restful风格api里用于修改; 类似文件上传, 但是HTTP/1.1的PUT方法自身不带验证机制，任何人都可以上传文件，存在安全问题，故一般不用。
DELETE: 删除文件
OPTIONS: 询问支持的方法(client询问server可以提交那些请求方法)
TRACE: 追踪路径(户端可以对请求消息的传输路径进行追踪，TRACE方法是让Web服务器端将之前的请求通信还给客户端的方法)
CONNECT：要求用隧道协议连接代理(主要使用SSL（安全套接层）和TLS（传输层安全）协议把通信内容加密后经网络隧道传输)

## 4.2. GET vs. POST

*   get提交参数有限制, 不超过1kb.
*   GET参数通过URL传递，POST放在Request body中。
*   GET在浏览器回退时是无害的，而POST会再次提交请求。
*   GET产生的URL地址可以被Bookmark，而POST不可以。
*   GET请求会被浏览器主动cache，而POST不会，除非手动设置。
*   GET请求只能进行url编码，而POST支持多种编码方式。
*   GET请求参数会被完整保留在浏览器历史记录里，而POST中的参数不会被保留。
*   GET请求在URL中传送的参数是有长度限制的，而POST没有。
*   对参数的数据类型，GET只接受ASCII字符，而POST没有限制。

## 4.3. 常见请求头

Accept: text/html,image/*　　-- 浏览器接受的数据类型
Accept-Charset: ISO-8859-1　　-- 浏览器接受的编码格式
Accept-Encoding: gzip,compress　　--浏览器接受的数据压缩格式
Accept-Language: en-us,zh-       　　--浏览器接受的语言
Host: www.it315.org:80          　　--（必须的）当前请求访问的目标地址（主机:端口）
If-Modified-Since: Tue, 11 Jul 2000 18:23:51 GMT　　  --浏览器最后的缓存时间
Referer: http://www.it315.org/index.jsp      　　-- 当前请求来自于哪里
User-Agent: Mozilla/4.0 (compatible; MSIE 5.5; Windows NT 5.0)  　　--浏览器类型
Cookie:name=eric　　                     -- 浏览器保存的cookie信息
Connection: close/Keep-Alive   　　         -- 浏览器跟服务器连接状态。close: 连接关闭  keep-alive：保持连接。使用http1.1时，如果想主动和服务器断开连接，发送包含此键值对的请求头
Date: Tue, 11 Jul 2000 18:23:51 GMTds　　--请求发出的时间

## 4.4. 获取请求信息

demo:

```java
/**
 * 请求数据的获取
 */
public class RequestDemo1 extends HttpServlet {
	/**
	 * 1)tomcat服务器接收到浏览器发送的请求数据，然后封装到HttpServetRequest对象
	 * 2）tomcat服务器调用doGet方法，然后把request对象传入到servlet中。
	 */
	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		/**
		 * 3)从request对象取出请求数据。
		 */
		t1(request);
		t2(request); 
	}
	// 为了接收POST方式提交的请求
	@Override
	protected void doPost(HttpServletRequest request, HttpServletResponse resp)
			throws ServletException, IOException {
		/**
		 * 3.3 请求的实体内容
		 */
		InputStream in = request.getInputStream(); //得到实体内容
		byte[] buf = new byte[1024];
		int len = 0;
		while(  (len=in.read(buf))!=-1 ){
			String str = new String(buf,0,len);
			System.out.println(str);
		}
	}
	private void t2(HttpServletRequest request) {
		/**
		 * 3.2 请求头
		 */
		String host = request.getHeader("Host"); //根据头名称的到头的内容
		System.out.println(host);
		//遍历所有请求头
		Enumeration<String> enums = request.getHeaderNames(); //得到所有的请求头名称列表
		while(enums.hasMoreElements()){//判断是否有下一个元素
			String headerName = enums.nextElement(); //取出下一个元素
			String headerValue = request.getHeader(headerName);
			System.out.println(headerName+":"+headerValue);
		}
	}
	private void t1(HttpServletRequest request) {
		/**
		 * 3.1 请求行   格式：（GET /day09/hello HTTP/1.1）
		 */
		System.out.println("请求方式："+request.getMethod());//请求方式
		System.out.println("URI:"+request.getRequestURI());//请求资源
		System.out.println("URL:"+request.getRequestURL());
		System.out.println("http协议版本："+request.getProtocol());//http协议
	}
}


/**
get browser type
*/
public class RequestDemo3 extends HttpServlet {
	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		response.setContentType("text/html;charset=utf-8");
		//获取请求头： user-agent
		String userAgent = request.getHeader("user-agent");
		System.out.println(userAgent);
		
		//判断用户使用的浏览器类型
		if(userAgent.contains("Firefox")){
			response.getWriter().write("你正在使用火狐浏览器");
		}else if(userAgent.contains("Chrome")){
			response.getWriter().write("你正在使用谷歌浏览器");
		}else if(userAgent.contains("Trident")){
			response.getWriter().write("你正在使用IE浏览器");
		}else{
			response.getWriter().write("地球上没有这个浏览器，建议使用火狐浏览器");
		}
	}
}

/**
 * 案例- 防止非法链接
 */
public class RequestDemo4 extends HttpServlet {
	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		response.setContentType("text/html;charset=utf-8");
		//得到referer头
		String referer = request.getHeader("referer");
		System.out.println("referer="+referer);
		/**
		 * 判断非法链接：
		 * 	1）直接访问的话referer=null
		 *  2）如果当前请求不是来自广告   
		 */
		if(referer==null || !referer.contains("/day09/adv.html")){
			response.getWriter().write("当前是非法链接，请回到首页。<a href='/day09/adv.html'>首页</a>");
		}else{
			//正确的链接
			response.getWriter().write("资源正在下载...");
		}
	}
}


```

## 4.5. 网页参数提交获取


```java
// 获取指定名称的参数
protected void doGet(HttpServletRequest req, HttpServletResponse resp)
		throws ServletException, IOException {
	System.out.println(req.getMethod() + "方式！");
	Enumeration<String> enums = req.getParameterNames();
	while(enums.hasMoreElements()) {     //遍历参数名
		String name = enums.nextElement();
		if("hobbit".equals(name)) {//如果找到hobbit
			String[] values = req.getParameterValues(name);
			System.out.print(name + ":");
			for(String str : values) {
				System.out.print(str + ", ");
			}
			System.out.println();
		}else {        //其他的参数
			String value = req.getParameter(name);
			System.out.println(name + "----" + value);
		}
	}
}

```

## 4.6. service(),doGet(),doPost()关系

container server (tomcat/jetty...) 会首先 service(), 然后在 service() 内部根据 get/post 调用 doGet()/doPost()


servlet本质就是一个接口, 定义了一种规范, 自定义的servlet需要实现这个接口, 实现init(), service(), destroy()等方法.

## 4.7. request中文乱码问题

# 5. the security between different http methods

https://www.zhihu.com/question/38770182

各种Method的区别是语义上的。是为了让你的应用程序能够清晰简化的进行通信。对于HTTP本身来讲没有任何区别。当然安全性也没有任何区别。

> But  why there are always people saying that the method "delete"/"put" is unsafe? 
>
> This reason might be something about the history: 开启了WebDAV 的 IIS 允许匿名访问者直接通过 PUT 往服务器上上传文件，曾经导致了很多严重的漏洞，具体可以搜下 IIS put 。此外 apache 默认允许 trace， 又导致了一批XSS。这些历史问题给运维造成很不好的印象，所以干脆把除必须的http头外都禁掉了事

# 6. http响应

## 6.1. 响应行&状态码

http://www.w3school.com.cn/tags/html_ref_httpmessages.asp

## 6.2. 常见响应头


## 6.3. 设置http响应



## 6.4. api示例

```java
/**
 * 设置响应信息
 */
public class ResponseDemo1 extends HttpServlet {
	/**
	 * 1)tomcat服务器把请求信息封装到HttpServletRequest对象，且把响应信息封装到HttpServletResponse
	 * 2）tomcat服务器调用doGet方法，传入request，和response对象
	 */
	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		/**
		 * 3）通过response对象改变响应信息
		 * 3.1 响应行
		 */
		response.setStatus(404);//修改状态码
		response.sendError(404); // 发送404的状态码+404的错误页面
		/**
		 * 3.2 响应头
		 */
		response.setHeader("server", "JBoss");
		/**
		 * 3.3 实体内容(浏览器直接能够看到的内容就是实体内容)
		 */
		response.getWriter().write("01.hello world"); //字符内容。
		response.getOutputStream().write("02.hello world".getBytes());//字节内容
	}
}


/**
 * 案例- content-Type作用: 设置响应类容格式
 *
 */
public class ResponseDemo4 extends HttpServlet {
	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		/**
		 * 设置响应实体内容编码
		 */
//		response.setCharacterEncoding("utf-8");
//		response.setHeader("content-type", "text/html");
		response.setContentType("text/html;charset=utf-8");//和上面代码等价。推荐使用此方法
		//response.setContentType("text/xml");
		//response.setContentType("image/jpg");
		
		response.getWriter().write("<html><head><title>this is tilte</title></head><body>中国</body></html>");
		response.getOutputStream().write("<html><head><title>this is tilte</title></head><body>中国</body></html>".getBytes("utf-8"));
		
		File file = new File("e:/mm.jpg");
		/**
		 * 设置以下载方式打开文件
		 */
		response.setHeader("Content-Disposition", "attachment; filename="+file.getName());
		/**
		 * 下载图片
		 */
		FileInputStream in = new FileInputStream(file);
		byte[] buf = new byte[1024];
		int len = 0;
		//把图片内容写出到浏览器
		while( (len=in.read(buf))!=-1 ){
			response.getOutputStream().write(buf, 0, len);
		}
	}
}


```

## 6.5. 请求重定向


```java
/**
 * 案例- 请求重定向
 * （相当于超链接跳转页面）
 */
public class ResponseDemo2 extends HttpServlet {
	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		/**
		 * 需求： 跳转到adv.html
		 * 使用请求重定向： 发送一个302状态码+location的响应头
		 */
		/*response.setStatus(302);//发送一个302状态码
		response.setHeader("location", "/day09/adv.html"); //location的响应头
*/		
		//请求重定向简化写法
		response.sendRedirect("/day09/adv.html");          //此时这里的路径是给浏览器用，首位斜杠代表webapps目录
	}
}

/**
 * 案例- 定时刷新, 定时跳转
 */
public class ResponseDemo3 extends HttpServlet {
	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		/**
		 * 定时刷新
		 * 原理：浏览器认识refresh头，得到refresh头之后重新请求当前资源
		 */
		response.setHeader("refresh", "1"); //每隔1秒刷新次页面
		/**
		 * 隔n秒之后跳转另外的资源
		 */
		response.setHeader("refresh", "3;url=/day09/adv.html");//隔3秒之后跳转到adv.html
	}
}

/**
 * BufferedImage:内存图像
    Graphics：画笔
    ImageIO：输出图像
    放在html页面上<img src/>
 */
public class CaptchaDemo4 extends HttpServlet {
    public void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("image/jpeg");// conf/web.xml中查jpg       文件类型的MIME值
        int width = 120,height=25;
        //1.得到一个内存中的图像
        BufferedImage bimage = new BufferedImage(width, height, BufferedImage.TYPE_INT_RGB);
        //2.得到画笔
        Graphics g = bimage.getGraphics();
        //3.设置画笔颜色
        g.setColor(Color.BLUE);
        //4.画一个矩形
        g.drawRect(0, 0, width, height);
        //5.设置填充色
        g.setColor(Color.YELLOW);
        g.fillRect(1, 1, width-1, height-1);
        //6.画随机干扰线条
        Random random = new Random();
        g.setColor(Color.GRAY);
        for (int i = 0; i < 20; i++) {
            g.drawLine(random.nextInt(width-1),random.nextInt(height-1),random.nextInt(width-1),random.nextInt(height-1));
        }
        //7.画随机数字
        g.setColor(Color.RED);
        g.setFont(new Font("黑体",Font.BOLD|Font.ITALIC,20));
        for (int i = 0; i < 4; i++) {
            g.drawString(random.nextInt(9)+"", 20+i*20, 18);
        }
        
        //不需要有缓存
        response.setHeader("Cache-Control", "no-cache");//http1.1
        response.setHeader("pragma", "no-cache"); //http1.0
        response.setHeader("Expires", "-1");  //只要小于1970-1-1距离现在的毫秒数就可以
        
        //8.输出内存中的图像
        ImageIO.write(bimage, "jpg", response.getOutputStream());
    }
}

```
jsp页面:
```jsp
<script>
   function changeImg(){
        var imgObj =   document.getElementById("mycode");
        imgObj.src=imgObj.src+"?time="+new Date().getTime();// 加时间戳, 表示不要使用缓存的图像
   }
</script>
  
<body>
<!-- servlet/CaptchaDemo4     -->
 验证码:<input type="text" name="code"> <img  id="mycode" alt="" src="servlet/CaptchaDemo4">  <a href="javascript:changeImg()">看不清，换一张</a>
</body>
```

转发&重定向:

```java
/**
 * 转发（效果：跳转页面）
 */
public class ForwardDemo1 extends HttpServlet {
	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		//转发	
		/**
		 * 注意：不能转发当前web应用以外的资源。
		 */
		this.getServletContext().getRequestDispatcher("/GetDateServlet").forward(request, response);
		//包含
		this.getServletContext().getRequestDispatcher("").include(request, response);//将目标结果包含到源；
	}

}
/*重定向效果
 */
public class RedirectDemo1 extends HttpServlet {
	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		/**
		 * 保存数据到request域对象
		 */
		request.setAttribute("name", "rose");
		//重定向
		/**
		 * 注意：可以跳转到web应用内，或其他web应用，甚至其他外部域名。
		 */
		//response.sendRedirect("/day09/adv.html");
		response.sendRedirect("/day10/GetDataServlet");
	}

}

```

## 6.6. 响应中文乱码

最便捷的办法是:
```java
response.setContentType("text/html;charset=utf-8");
```

# 7. url中文乱码

## 7.1. 在JS中处理

## 7.2. 在java中处理

```java
// 需要使用user-agent头信息，获取当前正在使用的浏览器
String agent = request.getHeader("user-agent");
// Mozilla/5.0 (Windows NT 6.1; WOW64; rv:39.0) Gecko/20100101 Firefox/39.0
// System.out.println(agent);

// 火狐采用的Base64编码 IE或者谷歌采用URL编码
if(agent.contains("Firefox")){
    // 使用的火狐
    filename = DownloadUtil.base64EncodeFileName(filename);
    
}else{
    // 使用的IE或者谷歌
    filename = URLEncoder.encode(filename, "UTF-8");
}

// downloadUtil代码：
import java.io.UnsupportedEncodingException;
import sun.misc.BASE64Encoder;
public class DownloadUtil {
    /**
     * 把文件名称进行Base64编码
     * @param fileName
     * @return
     */
    public static String base64EncodeFileName(String fileName) {
        
        BASE64Encoder base64Encoder = new BASE64Encoder();
        try {
            return "=?UTF-8?B?"
                    + new String(base64Encoder.encode(fileName
                            .getBytes("UTF-8"))) + "?=";
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
            throw new RuntimeException(e);
        }
    }
}


```

# 8. 基于HTTP协议的实时数据获取

服务器主动推数据给 client

## 8.1. 短轮询


- 定义: 客户端向服务端请求数据，服务端立即将数据返回给客户端，客户端没有拿到想要的数据（比如返回结果告诉客户端，数据处理中），客户端继续发请求，服务端继续立即响应，周而复始

- 利弊: 浪费带宽和服务器的计算资源

- 场景: 数据变化比较频繁或者能预期到数据在短时间内会发生一次变化的场景可以使用短轮询

比如: 用户在PC端买了一个东西唤起网页端，由于PC端和网页端是不通的，我们预期到用户应该很快会完成付款，这种时候为了开发简单短轮询是一种可以使用的方式，直接服务端提供一个接口告诉客户端订单状态，客户端每5秒请求一次即可，拿到结果就可以不用请求了

Note: 注意要做好请求次数上限的控制，比如请求100次还没检测到用户付款，可以弹窗"请完成付款后去我的订单页面查询"就可以不用请求了

## 8.2. 长连接

或者叫 长轮询

- 定义: 本质上没有改变，依然是客户端在没有收到自己想要数据的情况下不断发送请求给服务端，差别在于服务端收到请求不再直接给响应，而是将请求挂起，自己去定时判断数据的变化，有变化就立马返回给客户端，没有就等到超时为止。

- 利弊: 长轮询的优点就是客户端的请求少了很多避免了无谓的客户端请求，缺点则是服务端会挂起大量请求增加资源消耗且服务器对HTTP请求并发数量是有限制的

- 场景: 微信网页版的登陆, 客户端不断发送请求到服务器，服务器第一时间并没有给出回应，于是客户端等待，在超时的情况下继续发送请求。

## 8.3. WebSocket

references: https://www.cnblogs.com/xrq730/p/9280404.html

当服务端数据有变化的时候，服务端可以主动推送到客户端, 建立了 server 和 browser 的全双工通信

WebSocket客户端首先通过HTTP协议发送几个特别的header到服务端，告诉服务端现在我发起的是HTTP请求，但我要升级到WebSocket了, 服务器响应后就建立了 websocket连接

Netty-Socketio 有现成的 websocket api, 真正的开发成本在于分布式环境下的数据同步问题

# 9. 一次完整的http请求

## 9.1. http请求流程

## 9.2. 发起http请求

* 发起http请求本质就是建立socket

浏览器根据地址栏的URL访问DNS server解析出IP地址，与server建立socket连接&rArr;浏览器根据URL组装一个http request header，通过outputStream.write发送到目标server&rArr;服务器等待outputStream.read返回数据，最后断开连接

* 发起http的工具

Java中的httpclient、Linux中的curl+URL命令

## 9.3. http解析

### 9.3.1. 常用的请求头响应头，状态码

* http header：控制浏览器的渲染行为和server的执行逻辑

* 浏览器缓存相关的header

Cache-Control：no-cache ---------------优先级最高的header，有多个可选值  
Expire：时间 -------------------------超过后失效  
lastModified：时间--------------------最后修改时间，响应头；对应if-modified-since请求头


## 9.4. DNS域名解析

### 9.4.1. 整个流程

当你在浏览器的地址栏中输入 http://xxx.yyy.com/  

1. 提取出域名: xxx.yyy.com  
2. 如果系统中配置了 Hosts 文件，那么电脑会先查询 Hosts 文件，看这个xxx.yyy.com 否已经在 Hosts 里面有了对应的记录。如果有，直接就可以拿到该记录中的 IP地址，过程就结束
3. 如果没有host文件这个别名，会向配置的DNS server 发送DNS查询请求，获取到IP地址
4. 浏览器根据这个IP地址发送http请求

但是，DNS server 如何知道IP这些信息？  

* DNS 缓存

    域名服务器叫“递归域名服务器”，server内部会有一个DNS记录的缓存，如果DNS 请求无法在缓存中查到，再进入下一步：缓存同步    

    缓存里每条记录都有一个过期时间，如果到了过期时间，就会被删除，然后重新同步  

* 缓存同步

    1. “递归服务器”发现缓存中没有DNS记录，那么它会问“根服务器”，“根服务器”会告诉“递归服务器”说：这个域名属于 com 这个分支之下，你去找 com 这个域名的“权威服务器”，这个权威服务器的 IP地址 是 mmm  
    2. 然后“递归服务器”根据拿到的这个 mmm 地址，又去找“com 域名的权威服务器”。“com 域名的权威服务器”告诉它：你应该去找“yyy.com 域名的权威服务器”，这个权威服务器的 IP地址 是 nnn
    3. 然后“递归服务器”又根据nnn找“yyy.com 域名的权威服务器”，这时候“yyy.com 域名的权威服务器”才会告诉它/xxx.yyy.com/这个域名的IP是多少  

整个缓存同步过程像是踢皮球，效率低下，所以需要一个DNS缓存


### 9.4.2. 清除DNS缓存

* 主要在两个地方：1. LDNS,无法介入；2. 本机 cmd下：ipconfig /flushdns


### 9.4.3. 域名解析方式

* A记录-------记录域名，IP映射
* MX记录-------邮件相关
* CNAME记录-------多个别名映射到一个域名
* NS记录---------为某个域名指定一个DNS server
* TXT记录-----------为某个主机/域名设置说明

## 9.5. CDN 工作机制

cdn以缓存静态数据为主  
浏览器从主站请求动态数据后，再从cdn下载静态数据 

## 9.6. 免费 cdn

https://www.cnblogs.com/lfri/p/12212878.html (jsDelivr, staticaly, githack)

# 10. https

## 10.1. 和 http 对比

http: http消息直接基于tcp传输

https: http消息通过 SSL/TLS 协议加密, 再通过 tcp 传输

ssl协议依靠证书来验证服务器的身份, 获取 ca 证书可以购买收费的(云厂商提供), 也能使用免费的 (Letsencrypt是一个免费、自动化和开放的证书颁发机构，其颁发的证书一次有效期为三个月，但是只要能持续更新，基本可以永久使用。)

## 10.2. 如何免费开启 https

https://mp.weixin.qq.com/s/wtVxG0weBUiC0-Lwu7vVDw

Spring Boot Secured By Let’s Encrypt, Let's Encrypt提供免费的TLS证书

[tomcat 开启 https 支持](https://mp.weixin.qq.com/s?__biz=MzI3ODcxMzQzMw==&mid=2247484381&idx=1&sn=f6919853976da79e52602589ec164a15&chksm=eb5386ebdc240ffd9d9f0b869c2ecad755a8d1f5a78115da40634ce87e906251c919c8bb32cf&scene=21#wechat_redirect), spring boot也要做设置, 继承 WebSecurityConfigurerAdapter, 覆盖 configure(HttpSecurity http), http.requiresChannel().requiresSecure()

https://www.cnblogs.com/imfjj/p/9058443.html

TODO

https://github.com/Neilpang/acme.sh , 脚本acme.sh，实现了 acme 协议, 可以帮你持续自动从Letsencrypt更新CA证书

```sh
curl https://get.acme.sh | sh


```

# 11. resutful



## 11.1. Web Service

服务器如何向客户端提供服务

常用的方法有:

RPC 所谓的远程过程调用 (面向方法, 强调动作): 像调用本地服务(方法)一样调用服务器的服务(方法), 比如xml-rpc, json-rpc
SOA 所谓的面向服务的架构(面向消息), 和具体语言无关
REST 所谓的 Representational state transfer 表现层状态转移 (面向资源, 强调资源)
Hessian 见[ref](https://blog.csdn.net/weigao_easy/article/details/52351042)

[webservice关注点](#webservice关注点)

## 11.2. 什么是restful架构？

* 一个架构符合rest原则则称之为restful架构

* rest原则（资源的“表现层状态转化”）

    * 每个URI代表一个资源（资源可以使一段文本，一张图片，甚至是一个动作），URI中只能出现名词

    * client 和server间传递资源的某种表现层（文本表现层有text，json，xml；图片表现层有JPG，png等）

    * 客户端通过http四个动词对服务器资源进行操作，实现“表现层状态转化”

    * 无状态原则：即http的无状态，指的是服务器没有保存客户端的状态信息，客户端必须每次带上自己的状态去请求服务器。比如登陆，我们使用Cookie通过客户端保持登陆状态。有利于实现负载均衡（因为请求自身带有状态信息，任何server均可以处理client请求）

    > 如：如果遥控器与空调之间是有状态的，假设你离开空调接收范围调整了遥控器温度，变成19，那回到范围内你按一次升高一度，基于原先温度状态，遥控器给空调发送一个”提高1度“的指令，就会出现遥控器提高到20，而空调变成21。如果要空间与空调之前是无状态的，假设你离开空调接收范围调整了遥控器温度，变成19，那回到范围内你按一次升高一度，遥控器给空调发送一个”设定温度值20“，这样两者最终还是相同的值。

    * 如果一个动作是http动词表现不了的，应该把这个动作变为一个资源，以名词形式通过URI发布出来

## 11.3. RESTful最大的优势

要求从资源的角度对系统进行拆分, 而不是像以前从动作/操作的角度

我们平时搞系统是这样的：

1. 有新建用户功能
1. 新建用户需要一个URL
1. 往这个URL发送的数据要定义好
1. 开始写后端和前端

这种方式当然可以架构出一个系统，甚至是一个好系统，但是偶尔会有些问题

* 操作之间是会有关联，你的设计容易变成“第2个操作要求第1个操作进行过”，这种关系多起来系统就乱了
* URL设计会缺乏一致性
* 操作通常被认为是有副作用（Side Effect）的，所以很少有人基于操作去设计缓存之类的东西

遵循Restful风格后, 系统会获得这些好处:

* 各个资源虽然可能有关联，但依旧是能够简单地切掉这些关联导致相互独立的，所以不会有非常乱的耦合性
* 对资源的操作就这么几种，所以很容易设计一致的URL
* 我们明白对资源的读操作是无副作用的，所以能方便的接入缓存

## 11.4. 典型的设计错误

* URI中包含动词

    URI中不应该有动词，因为URI表示一个资源，只能是名词，动词放在http协议中，如：  

    ```
    /posts/show/1--------错误    
    /posts/1-----------正确，在http中用get表示show方法
    ```

    如果某个动作四个http动词表现不了，如：transfer 转账,用户1向用户2转账500元  

    ```
    POST /accounts/1/transfer/500/to/2-------错误

    ----------
    
    POST /transaction HTTP/1.1  
    Host: 127.0.0.1

    from=1&to=2&amount=500.00  ------------正确，资源可以是一种服务，将动作 作为一种资源对外提供
    ```

    再比如: 登录场景. 我们可以将登录这个动作资源化, 将登录视作一种资源

    把“登录”作为一个资源，所以登录是POST /logins，退出是DELETE /logins; 当然还有其他的解释比如, 登录登出视作session的增删, 而session是资源


* URI中加入资源的版本号
    
    API的版本号可以放进URI中，资源的版本号则不要放入  

    不同的版本是同一个资源的不同表现形式，如下是错误的：

    ```
    http://www.example.com/app/1.0/foo
    http://www.example.com/app/1.1/foo
    http://www.example.com/app/2.0/foo
    ```

    正确的做法是采用同一个URI，版本号在http的请求头accept字段中标明：

    ```
    Accept: vnd.example-com.foo+json; version=1.0
    Accept: vnd.example-com.foo+json; version=1.1
    Accept: vnd.example-com.foo+json; version=2.0
    ```


## 11.5. 设计合理的restful API

主要考虑如下几个要素：

* 协议

    http 或者 https  

* 身份认证

    API的身份认证应该使用OAuth 2.0框架

* 数据格式

    json避免使用xml

* 域名

    尽量部署在专有域名下，如：https://api.example.com  
    如果确定API很简单，不会有进一步扩展，可以考虑放在主域名下：https://example.org/api/

* 版本

    应该将API版本号放入URL：https://api.example.com/v1/  
    or 
    将版本信息放在http header中，但是不如放在URL中直观

* 路径（endpoint)

    只含有名词，一般为复数形式，如：  

    ```
    https://api.example.com/v1/zoos
    https://api.example.com/v1/animals
    https://api.example.com/v1/employees
    ```

* http动词

    常用的有如下5种：  

    ```
    GET（SELECT）：从服务器取出资源（一项或多项）。
    POST（CREATE）：在服务器新建一个资源。
    PUT（UPDATE）：在服务器更新资源（客户端提供改变后的完整资源）。
    PATCH（UPDATE）：在服务器更新资源（客户端提供改变的属性）。
    DELETE（DELETE）：从服务器删除资源。
    ```

    还有两个不常用的：----[ref](https://stackoverflow.com/questions/6660019/restful-api-methods-head-options)
    

    ```
    HEAD: 获取某些header, 和get类似, 但是response没有body, 确定缓存哪些信息, 哪些缓存信息需要更新
    OPTIONS：对于某个resources可以使用哪些http动词
    ```


    下面是一些例子

    ```
    GET /zoos：列出所有动物园
    POST /zoos：新建一个动物园
    GET /zoos/ID：获取某个指定动物园的信息
    PUT /zoos/ID：更新某个指定动物园的信息（提供该动物园的全部信息）
    PATCH /zoos/ID：更新某个指定动物园的信息（提供该动物园的部分信息）
    DELETE /zoos/ID：删除某个动物园
    GET /zoos/ID/animals：列出某个指定动物园的所有动物
    DELETE /zoos/ID/animals/ID：删除某个指定动物园的指定动物
    ```

* 过滤信息（filtering）

    如果记录数量很多，服务器不可能都将它们返回给用户。API应该提供参数，过滤返回结果。下面是一些常见的参数：

    ```
    ?limit=10：指定返回记录的数量
    ?offset=10：指定返回记录的开始位置。
    ?page=2&per_page=100：指定第几页，以及每页的记录数。
    ?sortby=name&order=asc：指定返回结果按照哪个属性排序，以及排序顺序。
    ?animal_type_id=1：指定筛选条件
    ```

* 状态码（status code）

    常用的如下：  

    ```
    200 OK - [GET]：服务器成功返回用户请求的数据，该操作是幂等的（Idempotent）。
    201 CREATED - [POST/PUT/PATCH]：用户新建或修改数据成功。
    202 Accepted - [*]：表示一个请求已经进入后台排队（异步任务）
    204 NO CONTENT - [DELETE]：用户删除数据成功。
    400 INVALID REQUEST - [POST/PUT/PATCH]：用户发出的请求有错误，服务器没有进行新建或修改数据的操作，该操作是幂等的。
    401 Unauthorized - [*]：表示用户没有权限（令牌、用户名、密码错误）。
    403 Forbidden - [*] 表示用户得到授权（与401错误相对），但是访问是被禁止的。
    404 NOT FOUND - [*]：用户发出的请求针对的是不存在的记录，服务器没有进行操作，该操作是幂等的。
    406 Not Acceptable - [GET]：用户请求的格式不可得（比如用户请求JSON格式，但是只有XML格式）。
    410 Gone -[GET]：用户请求的资源被永久删除，且不会再得到的。
    422 Unprocesable entity - [POST/PUT/PATCH] 当创建一个对象时，发生一个验证错误。
    500 INTERNAL SERVER ERROR - [*]：服务器发生错误，用户将无法判断发出的请求是否成功。
    ```

* 错误处理（error handling）

    如果状态码是4xx，就应该向用户返回出错信息。一般来说，返回的信息中将error作为键名，出错信息作为键值即可。

    ```
    {
        error: "Invalid API key"
    }
    ```

* 返回结果

    针对不同的操作，服务器的返回结果应该符合下面的规范：

    ```
    GET /collection：返回资源对象的列表（数组）
    GET /collection/resource：返回单个资源对象
    POST /collection：返回新生成的资源对象
    PUT /collection/resource：返回完整的资源对象
    PATCH /collection/resource：返回完整的资源对象
    DELETE /collection/resource：返回一个空文档
    ```


* Hypermedia API

## 11.6. 接口安全设计

[1](https://www.cnblogs.com/jurendage/p/12653865.html)

https://blog.csdn.net/angryjiji/article/details/99476028

对于安全敏感的接口, 需要作出特殊的安全设计, 当然首先就是推荐使用 https

-   token - 一般为 一个 UUID, 用于标识接口调用者的身份, 减少用户名和密码的传输次数  

    一般情况下客户端(接口调用方)需要先向服务器端申请一个接口调用的账号，服务器会给出一个appId和多个 (appkey, appSecret)对, key用于参数签名使用 (同一个 app_id 可以对应多个 app_key+app_secret, 这样 平台就可以分配你不一样的权限, 比如 app_key1 + app_secect1 只有只读权限 但是 app_key2+app_secret2 有读写权限)

    server 生成 token 后, 将 token 作为 key, 将其他关联信息作为 value 存入 redis, 当一个 req 过来, 会带着 token, 到 redis 查这个 token, 如果存在, 则放行, 不存在, 则拦截

    细分为:

    -   接口令牌 (api token) - 访问无需登录的接口, 如 登录, 注册 需要拿appId、timestamp和sign来换，sign=加密(appId + timestamp + key)
    -   用户令牌 (user token) - 用于访问需要登录后调用的接口 需要拿用户名和密码来换

-   sign - 用于参数签名，防止参数被非法篡改, 比如涉及到转账的接口

    sign的值一般是将所有非空参数按照升续排序然后+token+key+timestamp+nonce拼接在一起，然后使用某种加密算法进行加密，作为接口中的一个参数sign来传递，也可以将sign放到请求头中 (nonce 为随机数, 客户端随机生成, 目的是增加sign签名的多变性, 一般是数字和字母的组合，6位长度)

    当服务器调用接口前会按照sign的规则重新计算出sign的值然后和接口传递的sign参数的值做比较, 相同则放行, 否则拦截

    server 也可以返回一个 sign 给 client, 用于防止 response 被篡改

- 防重复提交(幂等)

    当请求第一次提交时将sign作为key保存到redis，并设置超时时间，超时时间和Timestamp中设置的差值相同; 这样, 当同一个请求第二次访问时会先检测redis是否存在该sign，如果存在则证明重复提交了，接口就不再继续调用了。如果sign在缓存服务器中因过期时间到了，而被删除了，此时当这个url再次请求服务器时，因token的过期时间和sign的过期时间一直，sign过期也意味着token过期，那样同样的url再访问服务器会因token错误会被拦截掉

    timestamp - 是客户端调用接口时对应的当前时间戳，用于防止DoS攻击; 每次调用接口时接口都会判断服务器当前系统时间和接口中传的的timestamp的差值，如果这个差值超过某个设置的时间(假如5分钟)，那么这个请求将被拦截掉，防止 ddos 攻击






API KEY跟API SECRET KEY: secert key是不向外公开的，用其加入各个请求参数和api key，组合成一个字符串，然后做摘要运算，生成的摘要一起发送给请求服务器，这样服务器端验证当前摘要是否合法，可以得知当前api key对应的secert key是否合法了 (https://blog.csdn.net/weixin_41964962/article/details/105383504), http://www.hello1010.com/api-sign
http://qtdebug.com/java-sign/

http://qtdebug.com/java-sign/
https://my.oschina.net/chenmou/blog/4933872


## 11.7. 实践

### 11.7.1. 设计统一的响应结构

There are lots of benefits to have a unified response structure

- make it easier for the frontend to handling the api call
- Inside the backend, it brings convenience for us to set up aop
- to prevent 运营商劫持 (当然, 现在情况好转了, 但是历史遗留原因还是保持 "一直用 200，且在 JSON 中再写个状态码")
  
  在运营商劫持横行、HTTPS 未普遍之前，基本上你不可以信任任何非 200 的响应码。比如你返回一个 404，它会把你的返回完完全全变成另一个 HTML 代码（对，即使你是 JSON），里面全是运营商劫持的广告

### 11.7.2. 实现对象序列化

Spring MVC 已经为我们提供了这类序列化特性，只需在 Controller 的方法参数中使用 @RequestBody 注解定义需要反序列化的参数即可  

若需要对 Controller 的方法返回值进行序列化，则需要在该返回值上使用 @ResponseBody 注解来定义  

```java
@Controller
public class AdvertiserController {

    @RequestMapping(value = "/advertiser/{id}", method = RequestMethod.GET)
    public @ResponseBody Response getAdvertiser(@PathVariable("id") String advertiserId) {
        ...
    }
}
```

由于经常会使用到 @ResponseBody 注解，所以 Spring 提供了一个名为 @RestController 的注解来取代以上的 @Controller 注解，这样我们就可以省略返回值前面的 @ResponseBody 注解了，但参数前面的 @RequestBody 注解是无法省略的  

```java
@RestController
public class AdvertiserController {

    @RequestMapping(value = "/advertiser", method = RequestMethod.POST)
    public Response createAdvertiser(@RequestBody AdvertiserParam advertiserParam) {
        ...
    }

    @RequestMapping(value = "/advertiser/{id}", method = RequestMethod.GET)
    public Response getAdvertiser(@PathVariable("id") String advertiserId) {
        ...
    }
}
```

使用 Jackson 来提供 JSON 的序列化操作，在 Spring 配置文件中只需添加以下配置即可：

```xml
<mvc:annotation-driven>
    <mvc:message-converters>
        <bean class="org.springframework.http.converter.json.MappingJackson2HttpMessageConverter"/>
    </mvc:message-converters>
</mvc:annotation-driven>
```

但是这是最基础的json序列化操作，如果需要排除值为空属性、进行缩进输出、将驼峰转为下划线、进行日期格式化等，这又如何实现呢？  

第一步：扩展 Jackson 提供的 ObjectMapper 类  

```java
public class CustomObjectMapper extends ObjectMapper {

    private boolean camelCaseToLowerCaseWithUnderscores = false;
    private String dateFormatPattern;

    public void setCamelCaseToLowerCaseWithUnderscores(boolean camelCaseToLowerCaseWithUnderscores) {
        this.camelCaseToLowerCaseWithUnderscores = camelCaseToLowerCaseWithUnderscores;
    }

    public void setDateFormatPattern(String dateFormatPattern) {
        this.dateFormatPattern = dateFormatPattern;
    }

    public void init() {
        // 排除值为空属性
        setSerializationInclusion(JsonInclude.Include.NON_NULL);
        // 进行缩进输出
        configure(SerializationFeature.INDENT_OUTPUT, true);
        // 将驼峰转为下划线
        if (camelCaseToLowerCaseWithUnderscores) {
            setPropertyNamingStrategy(PropertyNamingStrategy.CAMEL_CASE_TO_LOWER_CASE_WITH_UNDERSCORES);
        }
        // 进行日期格式化
        if (StringUtil.isNotEmpty(dateFormatPattern)) {
            DateFormat dateFormat = new SimpleDateFormat(dateFormatPattern);
            setDateFormat(dateFormat);
        }
    }
}
```

第二步：将 CustomObjectMapper 注入到 MappingJackson2HttpMessageConverter 中，Spring 配置如下：  

```xml
<bean id="objectMapper" class="com.xxx.api.json.CustomObjectMapper" init-method="init">
    <property name="camelCaseToLowerCaseWithUnderscores" value="true"/>
    <property name="dateFormatPattern" value="yyyy-MM-dd HH:mm:ss"/>
</bean>

<mvc:annotation-driven>
    <mvc:message-converters>
        <bean class="org.springframework.http.converter.json.MappingJackson2HttpMessageConverter">
            <property name="objectMapper" ref="objectMapper"/>
        </bean>
    </mvc:message-converters>
</mvc:annotation-driven>
```

### 11.7.3. 处理异常

使用 AOP 技术，编写一个全局的异常处理切面类，用它来统一处理所有的异常行为;定义一个类，并通过 @ControllerAdvice 注解将其标注即可，同时需要使用 @ResponseBody 注解表示返回值可序列化为 JSON 字符串    

在运行时从上往下依次调用每个异常处理方法，匹配当前异常类型是否与 @ExceptionHandler 注解所定义的异常相匹配，若匹配，则执行该方法，同时忽略后续所有的异常处理方法，最终会返回经 JSON 序列化后的 Response 对象

```java
@ControllerAdvice
@ResponseBody
public class ExceptionAdvice {

    /**
     * 400 - Bad Request
     */
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(HttpMessageNotReadableException.class)
    public Response handleHttpMessageNotReadableException(HttpMessageNotReadableException e) {
        logger.error("参数解析失败", e);
        return new Response().failure("could_not_read_json");
    }

    /**
     * 405 - Method Not Allowed
     */
    @ResponseStatus(HttpStatus.METHOD_NOT_ALLOWED)
    @ExceptionHandler(HttpRequestMethodNotSupportedException.class)
    public Response handleHttpRequestMethodNotSupportedException(HttpRequestMethodNotSupportedException e) {
        logger.error("不支持当前请求方法", e);
        return new Response().failure("request_method_not_supported");
    }

    /**
     * 415 - Unsupported Media Type
     */
    @ResponseStatus(HttpStatus.UNSUPPORTED_MEDIA_TYPE)
    @ExceptionHandler(HttpMediaTypeNotSupportedException.class)
    public Response handleHttpMediaTypeNotSupportedException(Exception e) {
        logger.error("不支持当前媒体类型", e);
        return new Response().failure("content_type_not_supported");
    }

    /**
     * 500 - Internal Server Error
     */
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    @ExceptionHandler(Exception.class)
    public Response handleException(Exception e) {
        logger.error("服务运行异常", e);
        return new Response().failure(e.getMessage());
    }
}
```

### 11.7.4. 支持参数验证

提供一个 @Valid 注解来定义 AdvertiserParam 参数，并在 AdvertiserParam 类中通过 @NotEmpty 注解来定义 advertiserName 属性, like this:  

```java
@RestController
public class AdvertiserController {

    @RequestMapping(value = "/advertiser", method = RequestMethod.POST)
    public Response createAdvertiser(@RequestBody @Valid AdvertiserParam advertiserParam) {//这里的@Valid需要jar包支持，pom引入
        ...
    }
}

public class AdvertiserParam {

    @NotEmpty
    private String advertiserName;

    private String description;

    // 省略 getter/setter 方法
}

//定义@NotEmpty 注解类
@Documented
@Target({ElementType.FIELD, ElementType.PARAMETER})
@Retention(RetentionPolicy.RUNTIME)
@Constraint(validatedBy = NotEmptyValidator.class)//指定一个验证器类
public @interface NotEmpty {
//以下三个属性为必须，是规范所要求
    String message() default "not_empty";

    Class<?>[] groups() default {};

    Class<? extends Payload>[] payload() default {};
}

//定义验证器类
public class NotEmptyValidator implements ConstraintValidator<NotEmpty, String> {//NotEmpty是验证注解类型，String是需要验证的参数类型

    @Override
    public void initialize(NotEmpty constraintAnnotation) {
    }

    @Override
    public boolean isValid(String value, ConstraintValidatorContext context) {
        return StringUtil.isNotEmpty(value);
    }
}

```

这里的 @Valid 注解实际上是 Validation Bean 规范提供的注解，该规范已由 Hibernate Validator 框架实现，因此需要添加以下 Maven 依赖到 pom.xml 文件中:  

```xml
<dependency>
    <groupId>org.hibernate</groupId>
    <artifactId>hibernate-validator</artifactId>
    <version>${hibernate-validator.version}</version>
</dependency>
```

最后，需要在 Spring 配置文件中开启校验，需添加如下配置

```xml
<bean class="org.springframework.validation.beanvalidation.MethodValidationPostProcessor"/>
```

最后，需要在全局异常处理类中添加参数验证处理方法，代码如下：

```java
@ControllerAdvice
@ResponseBody
public class ExceptionAdvice {

    /**
     * 400 - Bad Request
     */
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(ValidationException.class)
    public Response handleValidationException(ValidationException e) {
        logger.error("参数验证失败", e);
        return new Response().failure("validation_exception");
    }
}
```

### 11.7.5. 解决跨域问题

整个架构包含两个应用，前端应用提供纯静态的 HTML 页面，后端应用发布 REST API，前端需要通过 AJAX 调用后端发布的 REST API，然而 AJAX 是不支持跨域访问的  

浏览器访问某个 server  中的 js 资源, js 中向另外不同源的 server 发送了 ajax 请求, 这是浏览器不允许的, 也就是不支持跨域访问


如, A网页设置的 Cookie，B网页不能打开，除非这两个网页"同源"   , 防止恶意的网站窃取数据

同源必须符合一下三点相同：

1. 协议相同
2. 域名相同
3. 端口相同

如果判定为非同源，有三点行为受限制：

    （1） Cookie、LocalStorage 和 IndexDB 无法读取。
    （2） DOM 无法获得。
    （3） AJAX 请求不能发送。



解决这个问题需要前后端互相配合，后端的工作只要能将 CORS 响应头写入 response 对象中即可, SpringBoot配合前端实现跨域 - https://blog.csdn.net/saytime/article/details/74937204

csrf 跨站请求伪造攻击
https://www.cnblogs.com/Infernal/p/11282443.html
https://www.cnblogs.com/lailailai/p/4528092.html
TODO

### 11.7.6. API访问权

由于 REST 是无状态的，后端应用发布的 REST API 可在用户未登录的情况下被任意调用，这显然是不安全的  

实现思路：  

1. 登录成功后，server生成一个token，JVM中保存一份，同时返回客户端一份
2. 客户端中将token写入cookie，每次请求都带上
3. 提供一个aop切面，拦截所有请求，判断token有效性
4. 登出时，清楚cookie中的token，服务端的token可设置过期时间，自行移除

如果需要做到分布式集群，建议基于 Redis 提供一个实现类  
如下是一个简单的实现：  

```java
public interface TokenManager {

    String createToken(String username);

    boolean checkToken(String token);
}

//简单版的实现
public class DefaultTokenManager implements TokenManager {

    private static Map<String, String> tokenMap = new ConcurrentHashMap<>();

    @Override
    public String createToken(String username) {
        String token = CodecUtil.createUUID();
        tokenMap.put(token, username);
        return token;
    }

    @Override
    public boolean checkToken(String token) {
        return !StringUtil.isEmpty(token) && tokenMap.containsKey(token);
    }
}

//切面类
public class SecurityAspect {

    private static final String DEFAULT_TOKEN_NAME = "X-Token";

    private TokenManager tokenManager;
    private String tokenName;

    public void setTokenManager(TokenManager tokenManager) {
        this.tokenManager = tokenManager;
    }

    public void setTokenName(String tokenName) {
        if (StringUtil.isEmpty(tokenName)) {
            tokenName = DEFAULT_TOKEN_NAME;
        }
        this.tokenName = tokenName;
    }

    public Object execute(ProceedingJoinPoint pjp) throws Throwable {
        // 从切点上获取目标方法
        MethodSignature methodSignature = (MethodSignature) pjp.getSignature();
        Method method = methodSignature.getMethod();
        // 若目标方法忽略了安全性检查，则直接调用目标方法
        if (method.isAnnotationPresent(IgnoreSecurity.class)) {
            return pjp.proceed();
        }
        // 从 request header 中获取当前 token
        String token = WebContext.getRequest().getHeader(tokenName);
        // 检查 token 有效性
        if (!tokenManager.checkToken(token)) {
            String message = String.format("token [%s] is invalid", token);
            throw new TokenException(message);
        }
        // 调用目标方法
        return pjp.proceed();
    }
}
```

使切面生效，添加如下Spring配置：

```xml
<bean id="securityAspect" class="com.xxx.api.security.SecurityAspect">
    <property name="tokenManager" ref="tokenManager"/>
    <property name="tokenName" value="X-Token"/>
</bean>

<aop:config>
    <aop:aspect ref="securityAspect">
        <aop:around method="execute" pointcut="@annotation(org.springframework.web.bind.annotation.RequestMapping)"/>
    </aop:aspect>
</aop:config>
```

最后，在 web.xml 中添加允许的 X-Token 响应头，配置如下：
```xml
<init-param>
    <param-name>allowHeaders</param-name>
    <param-value>Content-Type,X-Token</param-value>
</init-param>
```
