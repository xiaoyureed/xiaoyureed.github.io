---
title: JavaScript tutorial
tags:
    - javascript
date: 2014-06-28 11:36:50
toc_min_heading_level: 2
toc_max_heading_level: 5
---

https://github.com/ryanmcdermott/clean-code-javascript 最佳实践

https://github.com/alpinejs/alpine 轻量级框架

https://github.com/doodlewind/jshistory-cn js历史发展故事

ECMAScript是一种语言标准，而JavaScript是对ECMAScript标准的一种实现
js: http://javascript.ruanyifeng.com/
es6新特性🚪: http://es6.ruanyifeng.com/#docs/module
[一个 js db](https://pouchdb.com/)

[lebab](http://lebab.io/): 将 es5转为es6, 和babel正好相反, 可用于老项目改造

《web性能》

《javascript异步编程》
《jQuery技术内幕》
《你不知道的javascript》

https://github.com/huhu/rust-search-extension chrome 插件学习 rust 搜索


<!--more-->

- [javascript 拾遗](#javascript-拾遗)
    - [js 的动态执行代码](#js-的动态执行代码)
    - [语法](#语法)
        - [undefined 和 null](#undefined-和-null)
        - [判空](#判空)
        - [比较浮点数](#比较浮点数)
        - [Symbol](#symbol)
- [浏览器控制台 开发者工具](#浏览器控制台-开发者工具)
- [调试 反调试 反反调试](#调试-反调试-反反调试)
- [pwa](#pwa)
    - [介绍](#介绍)
- [前端模块化历程](#前端模块化历程)
    - [前端模块管理器和工具](#前端模块管理器和工具)
        - [npm和bower和browserify](#npm和bower和browserify)
        - [Browserify](#browserify)
        - [babel](#babel)
        - [webpack](#webpack)
        - [gulp和grunt](#gulp和grunt)
        - [ESLint](#eslint)
    - [阶段一:无模块化(CDN-Based)](#阶段一无模块化cdn-based)
    - [阶段二:CommonJS规范](#阶段二commonjs规范)
    - [阶段三:AMD规范](#阶段三amd规范)
    - [阶段四:CMD规范](#阶段四cmd规范)
    - [AMD和CMD区别](#amd和cmd区别)
    - [阶段五:ES6规范中的模块化](#阶段五es6规范中的模块化)
    - [前端框架分级](#前端框架分级)
- [es6](#es6)
    - [函数的拓展](#函数的拓展)
        - [参数默认值](#参数默认值)
        - [函数的length属性](#函数的length属性)
        - [rest 参数](#rest-参数)
        - [箭头函数](#箭头函数)
        - [双冒号运算符](#双冒号运算符)
        - [尾调用优化](#尾调用优化)
        - [尾递归](#尾递归)
    - [Module 的语法](#module-的语法)
        - [严格模式](#严格模式)
        - [export命令](#export命令)
        - [export-default命令](#export-default命令)
        - [export和export-default比较](#export和export-default比较)
        - [import命令](#import命令)
        - [export与import的复合写法](#export与import的复合写法)
        - [易错](#易错)
        - [import()动态加载](#import动态加载)
    - [解构(Destructuring)](#解构destructuring)
        - [解构赋值](#解构赋值)
        - [易错](#易错-1)
    - [最佳实践](#最佳实践)
        - [tips](#tips)
        - [获取location](#获取location)
- [javascript](#javascript)
    - [网络请求](#网络请求)
        - [jQuery](#jquery)
        - [fetch](#fetch)
        - [axios](#axios)
    - [debug](#debug)
    - [basic](#basic)
    - [数据类型的转换](#数据类型的转换)
        - [手动转换(强制转换)](#手动转换强制转换)
            - [Boolean()](#boolean)
            - [String()](#string)
                - [原始类型值](#原始类型值)
                - [对象](#对象)
            - [Number()](#number)
                - [原始类型值](#原始类型值-1)
                - [对象](#对象-1)
        - [自动转换](#自动转换)
    - [错误处理机制](#错误处理机制)
        - [Error 实例对象](#error-实例对象)
        - [原生错误类型](#原生错误类型)
            - [SyntaxError](#syntaxerror)
            - [ReferenceError](#referenceerror)
            - [RangeError](#rangeerror)
            - [TypeError](#typeerror)
            - [URIError](#urierror)
            - [EvalError](#evalerror)
        - [自定义错误](#自定义错误)
        - [throw](#throw)
        - [\[try...catch...finally\]](#trycatchfinally)
    - [数据类型](#数据类型)
        - [基本的 6 种(不含 es6 的 Symbol)](#基本的-6-种不含-es6-的-symbol)
        - [三种方法确定类型](#三种方法确定类型)
        - [布尔值\&null\&undefined](#布尔值nullundefined)
        - [数值](#数值)
            - [tips](#tips-1)
            - [全局方法](#全局方法)
                - [parseInt()](#parseint)
                - [parseFloat()](#parsefloat)
                - [isNaN()](#isnan)
                - [isFinite()](#isfinite)
        - [字符串](#字符串)
            - [转义](#转义)
            - [字符集](#字符集)
            - [Base64 转码](#base64-转码)
            - [字符串与数组](#字符串与数组)
            - [length 属性](#length-属性)
        - [对象](#对象-2)
            - [键名](#键名)
            - [对象的引用](#对象的引用)
            - [表达式还是语句](#表达式还是语句)
            - [属性](#属性)
                - [属性读取和赋值](#属性读取和赋值)
                - [属性查看](#属性查看)
                - [属性删除](#属性删除)
                - [属性是否存\[in\]运算符](#属性是否存in运算符)
                - [属性的遍历\[for...in\]](#属性的遍历forin)
                - [with 语句](#with-语句)
        - [数组](#数组)
            - [定义](#定义)
            - [数组本质](#数组本质)
            - [length 属性](#length-属性-1)
            - [\[in\]运算符](#in运算符)
            - [\[for...in\]循环](#forin循环)
            - [数组的空位](#数组的空位)
            - [类似数组的对象](#类似数组的对象)
                - [定义](#定义-1)
                - [使用数组特有方法](#使用数组特有方法)
        - [函数](#函数)
            - [3 种声明方式](#3-种声明方式)
            - [一等公民](#一等公民)
            - [函数名提升](#函数名提升)
            - [勿在条件语句中声明函数](#勿在条件语句中声明函数)
            - [属性和方法](#属性和方法)
                - [name 属性](#name-属性)
                - [length 属性](#length-属性-2)
                - [toString()](#tostring)
            - [函数作用域](#函数作用域)
                - [定义](#定义-2)
                - [函数内部的变量提升](#函数内部的变量提升)
                - [函数自身的作用域](#函数自身的作用域)
            - [参数](#参数)
                - [参数可以省略](#参数可以省略)
                - [参数传递方式](#参数传递方式)
                - [两个参数名一样怎么办](#两个参数名一样怎么办)
                - [arguments 对象](#arguments-对象)
                    - [定义](#定义-3)
                    - [length 属性](#length-属性-3)
                    - [和数组的关系](#和数组的关系)
                    - [callee 属性](#callee-属性)
            - [闭包](#闭包)
                - [先理解变量作用域](#先理解变量作用域)
                - [闭包使用场景(用处)](#闭包使用场景用处)
                - [立即调用的函数表达式(IIFE)](#立即调用的函数表达式iife)
                    - [定义](#定义-4)
                    - [使用场景](#使用场景)
            - [eval 命令](#eval-命令)
                - [定义](#定义-5)
                - [安全问题](#安全问题)
                - [eval 的别名调用](#eval-的别名调用)
    - [运算符](#运算符)
        - [算术运算符](#算术运算符)
            - [加法运算符](#加法运算符)
                - [对象相加](#对象相加)
            - [余数运算符](#余数运算符)
            - [数值运算符](#数值运算符)
        - [比较运算符](#比较运算符)
            - [两个 string 比较](#两个-string-比较)
            - [非 string 比较](#非-string-比较)
                - [原始类型值](#原始类型值-2)
                - [对象](#对象-3)
            - [严格相等](#严格相等)
        - [布尔运算符](#布尔运算符)
            - [取反](#取反)
            - [短路](#短路)
        - [二进制位运算符](#二进制位运算符)
        - [void 运算符](#void-运算符)
        - [逗号运算符](#逗号运算符)
        - [运算顺序](#运算顺序)
    - [标准库](#标准库)
        - [Object 对象](#object-对象)
            - [任意类型转换为 object](#任意类型转换为-object)
            - [Object 构造函数](#object-构造函数)
            - [Object 的静态方法](#object-的静态方法)
                - [获取对象属性数组](#获取对象属性数组)
                - [复制属性](#复制属性)
                - [其他方法](#其他方法)
            - [Object 的实例方法](#object-的实例方法)
                - [Object.prototype.valueOf()](#objectprototypevalueof)
                - [Object.prototype.toString()](#objectprototypetostring)
                - [toString()应用：判断数据类型](#tostring应用判断数据类型)
                - [Object.prototype.toLocaleString()](#objectprototypetolocalestring)
                - [Object.prototype.hasOwnProperty()](#objectprototypehasownproperty)
        - [属性描述对象(attributes object)](#属性描述对象attributes-object)
            - [元属性](#元属性)
                - [value](#value)
                - [writable](#writable)
                - [enumerable](#enumerable)
                - [configurable](#configurable)
            - [存取器](#存取器)
            - [对象 copy](#对象-copy)
            - [控制对象状态](#控制对象状态)
                - [局限](#局限)
                - [Object.preventExtensions()\&Object.isExtensible()](#objectpreventextensionsobjectisextensible)
                - [Object.seal()\&Object.isSealed()](#objectsealobjectissealed)
                - [Object.freeze()\&Object.isFrozen()](#objectfreezeobjectisfrozen)
            - [Object.getOwnPropertyDescriptor()](#objectgetownpropertydescriptor)
            - [Object.getOwnPropertyNames()](#objectgetownpropertynames)
            - [Object.defineProperty(),Object.defineProperties()](#objectdefinepropertyobjectdefineproperties)
            - [Object.prototype.propertyIsEnumerable()](#objectprototypepropertyisenumerable)
        - [Array 对象](#array-对象)
            - [构造函数](#构造函数)
            - [静态方法](#静态方法)
                - [Array.isArray()](#arrayisarray)
            - [实例方法](#实例方法)
                - [valueOf(),toString()](#valueoftostring)
                - [push(),pop()](#pushpop)
                - [shift(),unshift()](#shiftunshift)
                - [join()](#join)
                - [concat()](#concat)
                - [reverse()](#reverse)
                - [slice()](#slice)
                - [splice()](#splice)
                - [sort()](#sort)
                - [map()](#map)
                - [forEach()](#foreach)
                - [filter()](#filter)
                - [some(),every()](#someevery)
                - [reduce(),reduceRight()](#reducereduceright)
                - [indexOf(),lastIndexOf()](#indexoflastindexof)
        - [String 对象](#string-对象)
            - [定义](#定义-6)
            - [静态方法](#静态方法-1)
                - [String.fromCharCode()](#stringfromcharcode)
            - [实例属性](#实例属性)
                - [String.prototype.length](#stringprototypelength)
            - [实例方法](#实例方法-1)
                - [String.prototype.charAt()](#stringprototypecharat)
                - [String.prototype.charCodeAt()](#stringprototypecharcodeat)
                - [String.prototype.concat()](#stringprototypeconcat)
                - [String.prototype.slice(),String.prototype.substring(),String.prototype.substr()](#stringprototypeslicestringprototypesubstringstringprototypesubstr)
                - [String.prototype.indexOf(),String.prototype.lastIndexOf()](#stringprototypeindexofstringprototypelastindexof)
                - [String.prototype.trim()](#stringprototypetrim)
                - [String.prototype.toLowerCase(),String.prototype.toUpperCase()](#stringprototypetolowercasestringprototypetouppercase)
                - [String.prototype.match(),String.prototype.search()](#stringprototypematchstringprototypesearch)
                - [String.prototype.replace()](#stringprototypereplace)
                - [String.prototype.split()](#stringprototypesplit)
                - [String.prototype.localeCompare()](#stringprototypelocalecompare)
        - [Math 对象](#math-对象)
            - [静态属性](#静态属性)
            - [静态方法](#静态方法-2)
        - [Date 对象](#date-对象)
            - [Date()](#date)
                - [作为普通函数](#作为普通函数)
                - [作为构造函数](#作为构造函数)
            - [日期运算](#日期运算)
            - [静态方法](#静态方法-3)
                - [Date.now()](#datenow)
                - [Date.parse()](#dateparse)
                - [Date.UTC()](#dateutc)
            - [实例方法](#实例方法-2)
                - [Date.prototype.valueOf()](#dateprototypevalueof)
                - [Date.prototype.toString()](#dateprototypetostring)
                - [Date.prototype.toUTCString()](#dateprototypetoutcstring)
                - [Date.prototype.toISOString()](#dateprototypetoisostring)
                - [Date.prototype.toJSON()](#dateprototypetojson)
                - [Date.prototype.toDateString()](#dateprototypetodatestring)
                - [Date.prototype.toTimeString()](#dateprototypetotimestring)
                - [Date.prototype.toLocaleDateString()](#dateprototypetolocaledatestring)
                - [Date.prototype.toLocaleTimeString()](#dateprototypetolocaletimestring)
                - [get 类方法](#get-类方法)
                - [set 类方法](#set-类方法)
        - [Regex 对象](#regex-对象)
            - [regex 定义](#regex-定义)
            - [实例属性](#实例属性-1)
            - [实例方法](#实例方法-3)
                - [RegExp.prototype.test()](#regexpprototypetest)
                - [RegExp.prototype.exec()](#regexpprototypeexec)
            - [字符串的实例方法](#字符串的实例方法)
                - [String.prototype.match()](#stringprototypematch)
                - [String.prototype.search()](#stringprototypesearch)
                - [String.prototype.replace()](#stringprototypereplace-1)
                - [String.prototype.split()](#stringprototypesplit-1)
            - [正则匹配规则](#正则匹配规则)
                - [修饰符](#修饰符)
                - [元字符](#元字符)
                - [预定义符号](#预定义符号)
                - [转义符](#转义符)
                - [特殊字符](#特殊字符)
        - [JSON 对象](#json-对象)
            - [json 定义](#json-定义)
            - [json 对象](#json-对象-1)
                - [JSON.stringify()](#jsonstringify)
                - [参数对象的 toJSON()方法](#参数对象的-tojson方法)
                - [JSON.parse()](#jsonparse)
        - [Number 对象](#number-对象)
            - [定义](#定义-7)
            - [静态属性](#静态属性-1)
            - [实例方法](#实例方法-4)
                - [Number.prototype.toString()](#numberprototypetostring)
                - [Number.prototype.toFixed()](#numberprototypetofixed)
                - [Number.prototype.toExponential()](#numberprototypetoexponential)
                - [Number.prototype.toPrecision()](#numberprototypetoprecision)
            - [定义方法](#定义方法)
        - [Boolean 对象](#boolean-对象)
        - [包装对象](#包装对象)
            - [定义](#定义-8)
            - [实例方法](#实例方法-5)
                - [valueOf()](#valueof)
                - [toString()](#tostring-1)
            - [自动转换](#自动转换-1)
            - [自定义方法](#自定义方法)
    - [OO](#oo)
        - [实例对象\&new 命令](#实例对象new-命令)
            - [构造函数](#构造函数-1)
            - [new](#new)
                - [忘记使用 new 怎么办](#忘记使用-new-怎么办)
                - [new 的原理](#new-的原理)
                - [new.target 属性](#newtarget-属性)
            - [Object.create()](#objectcreate)
        - [this](#this)
            - [定义](#定义-9)
            - [使用场景](#使用场景-1)
                - [全局环境](#全局环境)
                - [构造函数](#构造函数-2)
                - [对象普通方法](#对象普通方法)
            - [this 使用的 tips](#this-使用的-tips)
                - [避免多层 this](#避免多层-this)
                - [避免数组处理方法中的 this](#避免数组处理方法中的-this)
                - [避免回调函数中的 this](#避免回调函数中的-this)
            - [绑定 this](#绑定-this)
                - [Function.prototype.call()](#functionprototypecall)
                - [Function.prototype.apply()](#functionprototypeapply)
                - [Function.prototype.bind()](#functionprototypebind)
        - [对象继承](#对象继承)
            - [prototype 原型](#prototype-原型)
                - [构造函数缺点](#构造函数缺点)
                - [prototype 属性](#prototype-属性)
                - [原型链](#原型链)
                - [constructor 属性](#constructor-属性)
            - [instanceof 运算符](#instanceof-运算符)
            - [多重继承](#多重继承)
            - [构造函数的继承](#构造函数的继承)
            - [模块](#模块)
                - [写法的一步步进化](#写法的一步步进化)
                - [输入全局变量](#输入全局变量)
                - [命名空间和立即执行函数](#命名空间和立即执行函数)
        - [Object 对象的相关方法](#object-对象的相关方法)
            - [Object.getPrototypeOf()](#objectgetprototypeof)
            - [Object.setPrototypeOf()](#objectsetprototypeof)
            - [Object.create()](#objectcreate-1)
            - [Object.prototype.isPrototypeOf()](#objectprototypeisprototypeof)
            - [Object.prototype.**proto**](#objectprototypeproto)
            - [原型对象方法的比较](#原型对象方法的比较)
            - [Object.getOwnPropertyNames()](#objectgetownpropertynames-1)
            - [Object.prototype.hasOwnProperty()](#objectprototypehasownproperty-1)
            - [in 运算符和 for...in 循环](#in-运算符和-forin-循环)
            - [对象的拷贝](#对象的拷贝)
        - [严格模式](#严格模式-1)
    - [异步操作](#异步操作)
        - [单线程模型](#单线程模型)
        - [任务队列\&事件循环机制](#任务队列事件循环机制)
        - [同步任务和异步任务](#同步任务和异步任务)
        - [异步操作的模式](#异步操作的模式)
            - [回调函数](#回调函数)
            - [事件监听](#事件监听)
            - [发布/订阅](#发布订阅)
        - [异步操作的流程控制](#异步操作的流程控制)
            - [串行执行](#串行执行)
            - [并行执行](#并行执行)
            - [并行串行结合](#并行串行结合)
        - [定时器](#定时器)
            - [setTimeout()](#settimeout)
            - [setInterval()](#setinterval)
            - [clearTimeout(),clearInterval()](#cleartimeoutclearinterval)
            - [ajax 防抖动](#ajax-防抖动)
            - [运行机制](#运行机制)
            - [setTimeout(f,0)](#settimeoutf0)
                - [含义](#含义)
                - [应用](#应用)
        - [Promise 对象](#promise-对象)
            - [定义](#定义-10)
            - [Promise 对象的状态](#promise-对象的状态)
            - [Promise 构造函数](#promise-构造函数)
            - [Promise.prototype.then()](#promiseprototypethen)
            - [微任务](#微任务)
    - [DOM](#dom)
        - [dom 定义](#dom-定义)
            - [什么是 dom](#什么是-dom)
            - [什么是节点](#什么是节点)
            - [dom 树](#dom-树)
        - [Node 接口](#node-接口)
        - [Document 节点](#document-节点)
        - [Element 节点](#element-节点)
        - [操作 CSS](#操作-css)
    - [事件](#事件)
        - [EventTarget 接口](#eventtarget-接口)
            - [addEventListener()](#addeventlistener)
            - [removeEventListener()](#removeeventlistener)
            - [dispatchEvent()](#dispatchevent)
        - [Event 对象](#event-对象)
            - [Event 定义](#event-定义)
            - [实例属性](#实例属性-2)
                - [Event.bubbles 和 Event.eventPhase](#eventbubbles-和-eventeventphase)
                - [Event.cancelable 和 Event.cancelBubble 和 Event.defaultPrevented](#eventcancelable-和-eventcancelbubble-和-eventdefaultprevented)
                - [Event.currentTarget 和 Event.target](#eventcurrenttarget-和-eventtarget)
                - [Event.type](#eventtype)
                - [Event.timeStamp](#eventtimestamp)
                - [Event.isTrusted](#eventistrusted)
                - [Event.detail](#eventdetail)
            - [实例方法](#实例方法-6)
                - [Event.preventDefault()](#eventpreventdefault)
                - [Event.stopPropagation()](#eventstoppropagation)
                - [Event.stopImmediatePropagation()](#eventstopimmediatepropagation)
                - [Event.composedPath()](#eventcomposedpath)
    - [浏览器模型](#浏览器模型)
        - [浏览器环境](#浏览器环境)
            - [js 嵌入网页的方法](#js-嵌入网页的方法)
                - [通过 script 元素嵌入](#通过-script-元素嵌入)
                - [通过事件属性嵌入](#通过事件属性嵌入)
                - [通过 url 协议嵌入](#通过-url-协议嵌入)
            - [script 元素](#script-元素)
                - [工作原理](#工作原理)
                - [defer 属性](#defer-属性)
                - [async 属性](#async-属性)
                - [脚本的动态加载](#脚本的动态加载)
                - [加载使用的协议](#加载使用的协议)
            - [浏览器组成](#浏览器组成)
                - [渲染引擎](#渲染引擎)
                - [重流和重绘](#重流和重绘)


# javascript 拾遗

## js 的动态执行代码

https://www.jianshu.com/p/905151465a60

## 语法

### undefined 和 null

```js
// undefined & null
// 在使用var声明变量但未对其加以初始化时，这个变量的值就是undefined (即未定义的变量)。 转为数值时为NaN
// null值则是表示空对象指针 (即空指针), 转为数字是 0
Number(null)
// 0

5 + null
// 5

Number(undefined)
// NaN

5 + undefined
// NaN

// null表示"没有对象"，即该处不应该有值, 是故意设置的空, 比如作为函数参数
// undefined表示"缺少值"，就是此处应该有一个值，但是还没有定义, 是意外出现的空
//      如: 变量被声明了，但没有赋值时，就等于 undefined
//          调用函数时，应该提供的参数没有提供
//          对象没有赋值的属性，该属性的值为 undefined
//          函数没有返回值时，默认返回 undefined。
//          
```

### 判空

```js
// 五种空值和假值，分别为 undefined，null，false，""，0
// 
// error
let a = 0;
console.log(a || '/');//本意是只要 a 为 null 或者 Undefined 的时候，输出 '/'，但实际上只要是我们以上的五种之一就输出 '/'

// 不够简单
let a = 0;
if (a === null || a === undefined) {
  console.log('/');
} else {
  console.log(a);
}

// 更简单
// 空值合并操作符（??）:当左侧的操作数为 null 或者 undefined 时，返回其右侧操作数，否则返回左侧操作数
let a = 0;
console.log(a??'a=== null/undefined'); // 0

```

### 比较浮点数

```js
// math.js，decimal.js,D.js 三方库

// 或者
function withinErrorMargin (left, right) {
    return Math.abs(left - right) < Number.EPSILON//极小的常量——Number.EPSILON, 如果误差能够小于 Number.EPSILON，我们就可以认为结果是可靠的
}
withinErrorMargin(0.1+0.2, 0.3)
```

### Symbol

表示独一无二的标识, 用来定义对象的唯一属性名

```js
// 可以接受一个字符串作为参数，为新创建的 Symbol 提供描述
let sy = Symbol("KK");
console.log(sy);   // Symbol(KK)
typeof(sy);        // "symbol"
 
// 相同参数 Symbol() 返回的值不相等
let sy1 = Symbol("kk"); 
sy === sy1;       // false

let syObject = {};
syObject[sy] = "kk";
 
syObject[sy];  // "kk"
syObject.sy;   // undefined, 因为.运算符后面是字符串，所以取到的是字符串 sy 属性，而不是 Symbol 值 sy 属性

// Symbol 值作为属性名时，该属性是公有属性不是私有属性，可以在类的外部访问。
// 但是不会出现在 for...in 、 for...of 的循环中，也不会被 Object.keys() 、 Object.getOwnPropertyNames() 返回。
// 如果要读取到一个对象的 Symbol 属性，可以通过 Object.getOwnPropertySymbols() 和 Reflect.ownKeys() 取到
```


# 浏览器控制台 开发者工具

```

地址栏中文解/编码, 只是处理地址栏参数部分: decodeUriCompnent("%E%...."), encodeU....

encodeURI("") 转移整个url


```

# 调试 反调试 反反调试

https://mp.weixin.qq.com/s/7zdPznTXk97tbYGMjLH8Pw

https://mp.weixin.qq.com/s/TgZU4ukVXTahpK3TavUU1g
https://mp.weixin.qq.com/s/v7pKTQXMDSnbes60V5DnHA


# pwa

## 介绍

Progressive Web App

有这些技术组成:

- Service Worker (pwa 的核心技术)

    web worker: 独立于浏览器主线程环境, 不会阻塞页面渲染, 与主线程通过 post message 通信, 一般用来执行负责的计算操作

    service worker 更强大, 常驻内存独立于页面, 可以代理网络请求, 依赖 https

- Promise

- fetch

- cache api

    比 localStage 更强大, 可以缓存静态资源如图片, css, 在请求中拦截对应的资源请求, 直接返回对应的资源, 使得 pwa 支持离线运行

- notification api

# 前端模块化历程


https://blog.csdn.net/classicbear/article/details/7069223
https://github.com/ruanyf/jstraining/blob/master/docs/history.md

[JavaScript模块化](https://zhuanlan.zhihu.com/p/32324311)的进化
模块化七日谈: https://github.com/Huxpro/js-module-7day

## 前端模块管理器和工具

Bower，Browserify, npm 
babel

https://www.zhihu.com/question/37694275/answer/113609266
http://www.ruanyifeng.com/blog/2014/09/package-management.html
https://github.com/carlleton/reactjs101/blob/zh-CN/Ch02/browserify-gulp-dev-enviroment.md

### npm和bower和browserify

{% post_link npm-note 📚 npm笔记 %}

* npm是Node.js 下的主流套件管理工具

* NPM 主要是基于 CommonJS 的规范, 通常必须搭配 Browserify (见 [Browserify](#Browserify))这样的工具才能在前端使用 NPM 的模组

* NPM 是基于 Nested Dependency Tree，不同的套件有可能会在引入依赖时会引入相同但不同版本的套件，造成档案大小过大的情形

* 另一个套件管理工具 Bower 和npm区别

    * Bower的安装和升级全都依赖于NPM，使用如下命令就可以全局安装Bower : `npm install -g bower`

    * bower专注在前端套件比如bootstrap，jquery等前端框架, 下载到当前目录的bower_components子目录中,当然依赖的下载目录结构可以自定义; nmp适用于后端比如express(Node.js项目的内部依赖包管理), 安装的模块位于项目根目录下的node_modules文件夹内

    * bower使用 Flat Dependency Tree（只能支持扁平的依赖（嵌套的依赖，由程序员自己解决）; npm基于 Nested Dependency Tree支持嵌套依赖

    * 比如 `bower install jquery`之后, 可以在html中这么使用: (其他方面和npm非常类似)

      ```js
      <script type="text/javascript" src="bower_components/jquery/jquery.min.js"></script>
      ```

### Browserify

https://www.ibm.com/developerworks/cn/web/1501_chengfu_browserify/index.html

* Browserify: Browserify本身不是模块管理器，只是让服务器端的CommonJS格式(使用require(...))的模块可以运行在浏览器端(将require语法编译为普通js, 接着在html中引入)。这意味着通过它，我们可以使用Node.js的npm模块管理器。所以，实际上，它等于间接为浏览器提供了npm的功能

* 前后端可以使用一致的模块管理方式

> 如同官网上说明的：Browserify lets you require('modules') in the browser by bundling up all of your dependencies.，Browserify 是一个可以让你在浏览器端也能使用像 Node 用的 CommonJS 规范一样，用输出（export）和引用（require）来管理模组。此外，也能让前端使用许多在 NPM 中的模组。

### babel

ref: http://www.ruanyifeng.com/blog/2016/01/babel.html

* Babel: 将ES6+ 、JSX 等换成浏览器可以看得懂的语法。通常会在 root 位置加入 .babelrc 进行转译规则 preset 和引用插件（plugin）的设定。

> babellify 这个是 babel 为 browserify 提供的, babellify 类似 babel-loader 是一个使用 Browserify 进行 Babel 转换的插件

### webpack

{% post_link webpack-note 🚪 webpack笔记 %}

### gulp和grunt

👉 更新: 发现更好的替代品------npm srcipts(http://www.ruanyifeng.com/blog/2016/10/npm_scripts.html)

Gulp 是一个前端任务工具自动化管理工具（Task Runner）, 同类: Grunt( Gulp 是通过 pipeline (编码🐎)方式来处理档案，在使用上比起 Grunt 的方式直观许多)

类似 java 中的 编译(.java --> .class)

> 开发前端应用程式时有许多工作是必须重复进行，例如：打包文件、uglify、将 LESS 转译成一般的 CSS 的档案，转译 ES6 语法等工作。若是使用一般手动的方式，往往会造成效率的低下，所以透过像是 Grunt、Gulp 这类的 Task Runner 不但可以提升效率，也可以更方便管理这些任务。

### ESLint

提供 JavaScript 和 JSX 的程式码检查, 根据需求在 .eslintrc 设定检查规则(常用 [ Airbnb React/JSX Style Guide](https://github.com/airbnb/javascript/tree/master/react))

## 阶段一:无模块化(CDN-Based)

也就是最传统的 `<script>` 引入方式, 最开始的js都处在一个script标签中, 进一步发展为提出单独js文件, 使用时候引入, 类似:

```html
<!-- 
缺点:
    1. 污染全局作用域. 因为每一个模块都是暴露在全局的，简单的使用，会导致全局变量命名冲突，当然，我们也可以使用命名空间的方式来解决, 典型的例子如 YUI 库
    2. 依赖关系不明显，不利于维护(即引入顺序不能变). 比如main.js需要使用jquery，但是，从上面的文件中，我们是看不出来的，如果jquery忘记了，那么就会报错
 -->
<script src="jquery.js"></script>
<script src="jquery_scroller.js"></script>
<script src="main.js"></script>
<script src="other1.js"></script>
<script src="other2.js"></script>
<script src="other3.js"></script>
```

## 阶段二:CommonJS规范

* CommonJS就是一个JavaScript模块化的规范，该规范最初是用在服务器端的node的(npm基于commonjs)，前端的webpack也是对CommonJS原生支持的

* CommonJS规范加载模块是同步的，也就是说，只有加载完成，才能执行后面的操作

* CommonJS的核心思想就是通过 require 方法来同步加载所要依赖的其他模块，然后通过 exports 或者 module.exports 来导出需要暴露的接口

* 缺点: 只适合服务器端,不适用于浏览器端(由于 CommonJS 是同步加载模块的, 在服务器端，文件都是保存在硬盘上，所以同步加载没有问题，但是对于浏览器端，需要将文件从服务器端请求过来，那么同步加载就不适用了，所以，CommonJS是不适用于浏览器端的。)

```js
// a.js
var x = 5;
var addX = function (value) {
  return value + x;
};
module.exports.x = x;// module就代表了这个模块
module.exports.addX = addX;

/**
使用
*/
var a = require('./a.js');
console.log(a.x); // 5
console.log(a.addX(1)); // 6
```

## 阶段三:AMD规范

* AMD规范则是非同步加载模块，允许指定回调函数. 因此浏览器端一般采用AMD规范。而AMD规范的实现，就是大名鼎鼎的`require.js`了。

* 优点: 适合在浏览器环境中异步加载模块。可以并行加载多个模块。

* 缺点:　提高了开发成本，并且不能按需加载，而是必须提前加载所有的依赖

```js
/**
amd规范定义了两个api

  1.require([module], callback)

   2. define(id, [depends], callback)
*/
define('alert', function () {
    var alertName = function (str) {
      alert("I am " + str);
    }
    var alertAge = function (num) {
      alert("I am " + num + " years old");
    }
    return {
      alertName: alertName,
      alertAge: alertAge
    };
});


require(['alert'], function (alert) {
  alert.alertName('JohnZhu');
  alert.alertAge(21);
});
```

## 阶段四:CMD规范

* 实现js库为`sea.js`

* 它和requirejs(AMD)非常类似，即一个js文件就是一个模块, 但是CMD的加载方式更加优秀，是通过`按需加载`的方式，而不是必须在模块开始就加载所有的依赖

* 优点: 可以按需加载，依赖就近。比amd简洁，却又保持和 CommonJS 的兼容性

* 缺点: 依赖SPM打包，模块的加载逻辑偏重

```js
define(function(require, exports, module) {
  var $ = require('jquery');
  var Spinning = require('./spinning');
  exports.doSomething = ...
  module.exports = ...
})
```

## AMD和CMD区别

AMD: 对于依赖的模块提前执行; 推崇依赖前置

CMD: 对于依赖的模块延迟执行; 推崇依赖就近(在需要用到某个模块的时候再require)

```js
// AMD
define(['./a', './b'], function(a, b) {  // 依赖必须一开始就写好  
   a.doSomething()    
   // 此处略去 100 行    
   b.doSomething()    
   ...
});
// CMD
define(function(require, exports, module) {
   var a = require('./a')   
   a.doSomething()   
   // 此处略去 100 行   
   var b = require('./b') 
   // 依赖可以就近书写   
   b.doSomething()
   // ... 
});
```

> UMD: 为了要兼容 CommonJS 和 AMD 所设计的规范，希望让模组能跨平台执行

## 阶段五:ES6规范中的模块化

* 之前的几种模块化方案都是前端社区自己实现的, 而ES6的模块化方案是真正的规范;

* 在ES6中，我们可以使用 import 关键字引入模块，通过 export 关键字导出模块

* 但是由于ES6目前无法在浏览器中执行，所以，我们只能通过babel将不被支持的import编译为当前受到广泛支持的 require。

* ES6 模块的设计思想，是尽量的静态化，使得编译时就能确定模块的依赖关系，以及输入和输出的变量。CommonJS 和 AMD 模块，都只能在运行时确定这些东西。所以容易进行静态分析.

```js
import store from '../store/index'
import {mapState, mapMutations, mapActions} from 'vuex'
import axios from '../assets/js/request'
import util from '../utils/js/util.js'

export default {
    created () {
        this.getClassify(); 

        this.RESET_VALUE();
        console.log('created' ,new Date().getTime());

    }
}
```


## 前端框架分级

各大前端框架可以按照“封装度”的标准来区分

1. 纯html+css, 不涉及到js，就是纯页面皮肤

1. bootstrap系列, 对响应式的支持以及良好的体验, 是一套ui皮肤+少量js组成的框架

1.  jQuery-ui, 分界点。jQuery以下级别的框架，代码以css为主，自身的js代码少，框架量级更轻，更灵活，更适合互联网web产品。jQuery以上级别的框架，属于前端的重度封装，通过框架暴露的接口进行开发，开发人员甚至不需要太多前端知识

1. easy-ui/DWZ, easy-ui基于jQuery-ui，不过具有更丰富的组件库。貌似商业版收费很高。听说某大型国企花了大价钱购买下来使用。DWZ是国产框架中我认为综合表现还不错的，完全免费

1.  extjs系列, extjs属于前端框架领域中的庞然大物，封装程度很高，具有自成体系的元素选择引擎和浏览器兼容方案，js写法上也有自己的方式。组件很多很全

1. vaadin/GWT, 使用后台语言写前端

# es6

## 函数的拓展

### 参数默认值

```js
// ES6 允许为函数的参数设置默认值，即直接写在参数定义的后面。

function log(x, y = 'World') {
  console.log(x, y);
}

log('Hello') // Hello World
log('Hello', 'China') // Hello China
log('Hello', '') // Hello

// =========================

// 参数默认值可以与解构赋值的默认值，结合起来使用。

function foo({x, y = 5}) {
  console.log(x, y);
}

foo({}) // undefined 5
foo({x: 1}) // 1 5
foo({x: 1, y: 2}) // 1 2
foo() // TypeError: Cannot read property 'x' of undefined

// 如果函数foo调用时没提供参数，变量x和y就不会生成，从而报错。通过提供函数参数的默认值，就可以避免这种情况。

function foo({x, y = 5} = {}) {
  console.log(x, y);
}

foo() // undefined 5

// ================================

// 利用参数默认值，可以指定某一个参数不得省略，如果省略就抛出一个错误

function throwIfMissing() {
  throw new Error('Missing parameter');
}

function foo(mustBeProvided = throwIfMissing()) {
  return mustBeProvided;
}

foo()
// Error: Missing parameter

//========================

// 另外，可以将参数默认值设为undefined，表明这个参数是可以省略的。

function foo(optional = undefined) { ··· }
```

### 函数的length属性

length属性的含义是，该函数预期传入的参数个数。某个参数指定默认值以后，预期传入的参数个数就不包括这个参数了

### rest 参数

```js
// 用于获取函数的多余参数，这样就不需要使用arguments对象了; rest 参数搭配的变量是一个数组，该变量将多余的参数放入数组中。

// rest 参数之后不能再有其他参数（即只能是最后一个参数），否则会报错

function add(...values) {
  let sum = 0;

  for (var val of values) {
    sum += val;
  }

  return sum;
}

add(2, 5, 3) // 10

// ============================

// 下面是一个 rest 参数代替arguments变量的例子。

// arguments变量的写法
function sortNumbers() {
  return Array.prototype.slice.call(arguments).sort();
}

// rest参数的写法
const sortNumbers = (...numbers) => numbers.sort();
```

### 箭头函数

```js
var f = v => v;

// 等同于
var f = function (v) {
  return v;
};

// =======================

var f = () => 5;
// 等同于
var f = function () { return 5 };
// ==================================
var sum = (num1, num2) => num1 + num2;
// 等同于
var sum = function(num1, num2) {
  return num1 + num2;
};

// ======================

var sum = (num1, num2) => { return num1 + num2; }

// ====================

// 如果箭头函数只有一行语句，且不需要返回值，可以采用下面的写法，就不用写大括号了。

let fn = () => void doesNotReturn();

// ========================

// 箭头函数可以与变量解构结合使用。

const full = ({ first, last }) => first + ' ' + last;

// 等同于
function full(person) {
  return person.first + ' ' + person.last;
}

// ============================

// 箭头函数的一个用处是简化回调函数。

// 正常函数写法
[1,2,3].map(function (x) {
  return x * x;
});

// 箭头函数写法
[1,2,3].map(x => x * x);

// =============================

// 下面是 rest 参数与箭头函数结合的例子。

const numbers = (...nums) => nums;

numbers(1, 2, 3, 4, 5)
// [1,2,3,4,5]

const headAndTail = (head, ...tail) => [head, tail];

headAndTail(1, 2, 3, 4, 5)
// [1,[2,3,4,5]]
```

箭头函数有几个使用注意点。

（1）函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。(箭头函数可以让this指向固定化，这种特性很有利于封装回调函数)

（2）不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。

（3）不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。

（4）不可以使用yield命令，因此箭头函数不能用作 Generator 函数。


第一点尤其值得注意。this对象的指向是可变的，但是在箭头函数中，它是固定的。

this指向的固定化，并不是因为箭头函数内部有绑定this的机制，实际原因是箭头函数根本没有自己的this，导致内部的this就是外层代码块的this。

正是因为它没有this，所以也就不能用作构造函数。

```js
function foo() {
  setTimeout(() => {
    console.log('id:', this.id);
  }, 100);
}

var id = 21;

foo.call({ id: 42 });
// id: 42
// 箭头函数导致this总是指向函数定义生效时所在的对象（本例是{id: 42}），所以输出的是42。

// ============================

// 箭头函数可以让setTimeout里面的this，绑定定义时所在的作用域，而不是指向运行时所在的作用域。下面是另一个例子。

function Timer() {
  this.s1 = 0;
  this.s2 = 0;
  // 箭头函数
  setInterval(() => this.s1++, 1000);// this绑定定义时所在的作用域（即Timer函数）
  // 普通函数
  setInterval(function () {
    this.s2++; // this指向运行时所在的作用域（即全局对象）
  }, 1000);
}

var timer = new Timer();

setTimeout(() => console.log('s1: ', timer.s1), 3100);
setTimeout(() => console.log('s2: ', timer.s2), 3100);
// s1: 3
// s2: 0

// ==================================

// 箭头函数可以让this指向固定化，这种特性很有利于封装回调函数。下面是一个例子，DOM 事件的回调函数封装在一个对象里面。

var handler = {
  id: '123456',

  init: function() {
    document.addEventListener('click',
      event => this.doSomething(event.type), false);
  },

  doSomething: function(type) {
    console.log('Handling ' + type  + ' for ' + this.id);
  }
};
// 上面代码的init方法中，使用了箭头函数，这导致这个箭头函数里面的this，总是指向handler对象。否则，回调函数运行时，this.doSomething这一行会报错，因为此时this指向document对象。
```

### 双冒号运算符

箭头函数可以绑定this对象，大大减少了显式绑定this对象的写法（call、apply、bind）。但是，箭头函数并不适用于所有场合，所以现在有一个提案，提出了“函数绑定”（function bind）运算符，用来取代call、apply、bind调用。

双冒号左边是一个对象，右边是一个函数。该运算符会自动将左边的对象，作为上下文环境（即this对象），绑定到右边的函数上面。

```js
foo::bar;
// 等同于
bar.bind(foo);

foo::bar(...arguments);
// 等同于
bar.apply(foo, arguments);

const hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn(obj, key) {
  return obj::hasOwnProperty(key);
}

// ==============================

// 如果双冒号左边为空，右边是一个对象的方法，则等于将该方法绑定在该对象上面。

var method = obj::obj.foo;
// 等同于
var method = ::obj.foo;

let log = ::console.log;
// 等同于
var log = console.log.bind(console);
```

### 尾调用优化

某个函数的最后一步是调用另一个函数

```js
function f(x){
  return g(x); // 必须有return, 标志是最后一步
}

// ==========================

//尾调用之所以与其他调用不同，就在于它的特殊的调用位置。

/*
  函数调用会在内存形成一个“调用记录”，又称“调用帧”（call frame）

  保存调用位置和内部变量等信息。如果在函数A的内部调用函数B，那么在A的调用帧上方，还会形成一个B的调用帧。等到B运行结束，将结果返回到A，B的调用帧才会消失。如果函数B内部还调用函数C，那就还有一个C的调用帧，以此类推。所有的调用帧，就形成一个“调用栈”（call stack）。

  尾调用由于是函数的最后一步操作，所以不需要保留外层函数的调用帧，因为调用位置、内部变量等信息都不会再用到了，只要直接用内层函数的调用帧，取代外层函数的调用帧就可以了。 ------------- 即只保留内层函数的调用帧。如果所有函数都是尾调用，那么完全可以做到每次执行时，调用帧只有一项，这将大大节省内存。这就是“尾调用优化”的意义。
*/

function f() {
  let m = 1;
  let n = 2;
  return g(m + n);
}
f();

// 等同于
function f() {
  return g(3);
}
f();

// 等同于
g(3);
```

### 尾递归

函数调用自身，称为递归。如果尾调用自身，就称为尾递归

递归非常耗费内存，因为需要同时保存成千上百个调用帧，很容易发生“栈溢出”错误（stack overflow）。但对于尾递归来说，由于只存在一个调用帧，所以永远不会发生“栈溢出”错误。

```js
function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}

factorial(5) // 120

// 上面代码是一个阶乘函数，计算n的阶乘，最多需要保存n个调用记录，复杂度 O(n) 
// 如果改写成尾递归，只保留一个调用记录，复杂度 O(1) 。

function factorial(n, total) {
  if (n === 1) return total;
  return factorial(n - 1, n * total);
}

factorial(5, 1) // 120

// 尾递归的实现，往往需要改写递归函数，确保最后一步只调用自身。做到这一点的方法，就是把所有用到的内部变量改写成函数的参数
// 但是这里有2个参数, 不够直观,
// 可以利用函数默认值 来优化

function factorial(n, total = 1) {
  if (n === 1) return total;
  return factorial(n - 1, n * total);
}

factorial(5) // 120
```

## Module 的语法

在 ES6 之前，社区制定了一些模块加载方案，最主要的有 CommonJS 和 AMD 两种。前者用于服务器，后者用于浏览器(至于原因, 可以参见 {%post_link js-proj-history 📚 前端模块化 %} 的“阶段二:CommonJS规范”部分)

### 严格模式

ES6 的模块自动采用严格模式，不管你有没有在模块头部加上"use strict";

- 禁止this指向全局对象(ES6 模块之中，顶层的this指向undefined，即不应该在顶层代码使用this。)

### export命令

一个模块就是一个独立的文件。该文件内部的所有变量，外部无法获取。

如果你希望外部能够读取模块内部的某个变量，就必须使用export关键字输出该变量/方法/类

同理, import导入


```js
// profile.js
export var firstName = 'Michael';
export var lastName = 'Jackson';
export var year = 1958;
------------
// 另外i一种等价写法✍推荐
// profile.js
var firstName = 'Michael';
var lastName = 'Jackson';
var year = 1958;
export {firstName, lastName, year};
----------------------
// 输出一个函数multiply
export function multiply(x, y) {
  return x * y;
};
--------------------
// 通过 as 重命名
function v1() { ... }
function v2() { ... }
export {
  v1 as streamV1,
  v2 as streamV2,
  v2 as streamLatestVersion // 用不同的名字在export一次
};
-----------------------------
// export语句输出的接口，与其对应的值是动态绑定关系，即通过该接口，可以取到模块内部实时的值
// 输出变量foo，值为bar，500 毫秒之后变成baz。这一点与 CommonJS 规范完全不同。CommonJS 模块输出的是值的缓存，不存在动态更新
export var foo = 'bar';
setTimeout(() => foo = 'baz', 500);
-----------------------------
//跨模块常量 
//如果想设置跨模块的常量（即跨多个文件），或者说一个值要被多个模块共享，可以采用下面的写法。
// constants.js 模块
export const A = 1;
export const B = 3;
export const C = 4;

// test1.js 模块
import * as constants from './constants';
console.log(constants.A); // 1
console.log(constants.B); // 3

// test2.js 模块
import {A, B} from './constants';
console.log(A); // 1
console.log(B); // 3
---------------------------
// 跨模块常量----最佳实践

//可以建一个专门的constants目录，将各种常量写在不同的文件里面，保存在该目录下。
// constants/db.js
export const db = {
  url: 'http://my.couchdbserver.local:5984',
  admin_username: 'admin',
  admin_password: 'admin password'
};

// constants/user.js
export const users = ['root', 'admin', 'staff', 'ceo', 'chief', 'moderator'];

// 然后，将这些文件输出的常量，合并在index.js里面。
// constants/index.js
export {db} from './db';
export {users} from './users';
// 使用的时候，直接加载index.js就可以了。

// script.js
import {db, users} from './index';
```

### export-default命令

使用import命令的时候，用户需要知道所要加载的变量名或函数名，否则无法加载

为了给用户提供方便，让他们不用阅读文档就能加载模块，就要用到export default命令，为模块指定默认输出

```js
// export-default.js
// 一般为匿名函数, 就算不是匿名, 导入到包外使用时候, 也都当作是匿名而指定另外的名字
export default function () {
  console.log('foo');
}
// import-default.js, 加载该模块时，import命令可以为该匿名函数指定任意名字
// 这时就不需要知道原模块输出的函数名。
// 需要注意的是，这时import命令后面，不使用大括号。
import customName from './export-default';
customName(); // 'foo'
-----------------------------
// 导出有名称的函数, foo函数的函数名foo，在模块外部是无效的。加载的时候，视同匿名函数加载。 
export default function foo() {
  console.log('foo');
}

// 或者写成
function foo() {
  console.log('foo');
}
// export default foo的含义是将变量foo的值赋给变量default
export default foo;
-------------------------------
//export default也可以用来输出类
// MyClass.js
export default class { ... }

// main.js
import MyClass from 'MyClass';
let o = new MyClass();
```

### export和export-default比较

```js
// 第一组
export default function crc32() { // 输出
  // ...
}
// export default命令用于指定模块的默认输出。显然，一个模块只能有一个默认输出，因此export default命令只能使用一次。所以，import命令后面才不用加大括号，因为只可能唯一对应export default命令。
import crc32 from 'crc32'; // 输入, 不使用{}

// 第二组
export function crc32() { // 输出
  // ...
};
import {crc32} from 'crc32'; // 输入, 需要使用大括号{}
---------------------------------
// 本质上，export default就是输出一个叫做default的变量或方法，然后系统允许你为它取任意名字。所以，下面的写法是有效的。
// modules.js
function add(x, y) {
  return x * y;
}
export {add as default};
// 等同于
// export default add;
// app.js
import { default as foo } from 'modules';
// 等同于
// import foo from 'modules';
--------------------------
// 两个命令混用, 以lodash为例
export default function (obj) {
  // ···
}
export function each(obj, iterator, context) {
  // ···
}
export { each as forEach };
// 只导入默认方法
import _ from 'lodash';
// 都导入
import _, { each, each as forEach } from 'lodash';

```

### import命令

```js
// main.js
// 加载profile.js文件，并从中输入变量。
// import命令接受一对大括号，里面指定要从其他模块导入的变量名。大括号里面的变量名，必须与被导入模块（profile.js）对外接口的名称相同
// import后面的from指定模块文件的位置，可以是相对路径，也可以是绝对路径，.js后缀可以省略。
import {firstName, lastName, year} from './profile.js';
import {firstName, lastName, year} from './profile';
--------------------------
// 如果只是模块名，不带有路径，那么必须有配置文件，告诉 JavaScript 引擎该模块的位置, util是模块文件名，由于不带有路径，必须通过配置，告诉引擎怎么取到这个模块。
import {myMethod} from 'util';
-------------------------
// 同样也可以重命名
import { lastName as surname } from './profile.js';
--------------------------
// 仅仅执行lodash模块，但是不输入任何值
import 'lodash';
--------------------
// 模块的整体加载
// 可以使用整体加载，即用星号（*）指定一个对象，所有输出值都加载在这个对象上面。
// circle.js
export function area(radius) {
  return Math.PI * radius * radius;
}
export function circumference(radius) {
  return 2 * Math.PI * radius;
}
import * as circle from './circle';
console.log('圆面积：' + circle.area(4));
console.log('圆周长：' + circle.circumference(14));
```

### export与import的复合写法

```js
// 先输入后输出同一个模块，import语句可以与export语句写在一起。
// 但需要注意的是，写成一行以后，foo和bar实际上并没有被导入当前模块，只是相当于对外转发了这两个接口，导致当前模块不能直接使用foo和bar
export { foo, bar } from 'my_module';

// 可以简单理解为
import { foo, bar } from 'my_module';
export { foo, bar };
-----------------------
// 接口改名, 然后整体输出
// 接口改名
export { foo as myFoo } from 'my_module';

// 整体输出, export *命令会忽略模块的default方法
export * from 'my_module';
// 默认接口需要特别写
export { default } from 'foo';
---------------------------
// 具名接口改为默认接口的写法如下。

export { es6 as default } from './someModule';

// 等同于
import { es6 } from './someModule';
export default es6;
------------------------
// 同样地，默认接口也可以改名为具名接口。

export { default as es6 } from './someModule';
-------------------------------------
// 模块之间也可以继承。

// 假设有一个circleplus模块，继承了circle模块
export * from 'circle';// export *，表示再输出circle模块的所有属性和方法
export var e = 2.71828182846;
export default function(x) {
  return Math.exp(x);
}
```

### 易错

export命令规定的是对外的接口，必须与模块内部的变量建立一一对应关系。

```js
// 报错
export 1;

// 报错
var m = 1;
export m;
-------------------
// 写法一
export var m = 1;

// 写法二
var m = 1;
export {m};

// 写法三
var n = 1;
export {n as m};
-----------------------------
// 报错
function f() {}
export f;

// 正确
export function f() {};

// 正确
function f() {}
export {f};
-------------------------
// export命令可以出现在模块的任何位置，只要处于模块顶层就可以。如果处于块级作用域内，就会报错
function foo() {
  export default 'bar' // SyntaxError
}
foo()
------------------
import {a} from './xxx.js'
a = {}; // Syntax Error : 'a' is read-only;
--------------------
//由于import是静态执行，所以不能使用表达式和变量，这些只有在运行时才能得到结果的语法结构。
// 报错
import { 'f' + 'oo' } from 'my_module';

// 报错
let module = 'my_module';
import { foo } from module;

// 报错
if (x === 1) {
  import { foo } from 'module1';
} else {
  import { foo } from 'module2';
}
------------------------
// 通过 Babel 转码，CommonJS 模块的require命令和 ES6 模块的import命令，可以写在同一个模块里面，但是最好不要这样做。因为import在静态解析阶段执行，所以它是一个模块之中最早执行的。下面的代码可能不会得到预期结果。
require('core-js/modules/es6.symbol');
require('core-js/modules/es6.promise');
import React from 'React';
-------------------------
// 因为export default命令其实只是输出一个叫做default的变量，所以它后面不能跟变量声明语句
// 正确
export var a = 1;
// 正确
var a = 1;
export default a;
// 错误
export default var a = 1;
---------------------------------
// 同样地，因为export default命令的本质是将后面的值，赋给default变量，所以可以直接将一个值写在export default之后
// 正确, 指定了对外的接口default
export default 42;
// 报错, 因为没有指定对外的接口
export 42;
```


### import()动态加载

import命令会被 JavaScript 引擎静态分析, 无法做到动态(运行时)加载, 类似这样的效果:

```js
const path = './' + fileName;
const myModual = require(path);
```

`import(specifier): Promise`

eg:

```js
const main = document.querySelector('main');

import(`./section-modules/${someVariable}.js`)
  .then(module => {
    module.loadPageInto(main);
  })
  .catch(err => {
    main.textContent = err.message;
  });
```

import()类似于 Node 的require方法，区别主要是前者是异步加载，后者是同步加载。

## 解构(Destructuring)

### 解构赋值

解构赋值允许你使用类似数组或对象字面量的语法将数组和对象的属性赋给各种变量

数组:

```js
// 访问array的前三个元素, 语法: [ variable1, variable2, ..., variableN ] = array;
var [first, second, third] = someArray;
----
var [foo, [[bar], baz]] = [1, [[2], 3]];
console.log(foo);
// 1
console.log(bar);
// 2
console.log(baz);
// 3
----
var [,,third] = ["foo", "bar", "baz"];
console.log(third);
// "baz"
-------
var [head, ...tail] = [1, 2, 3, 4];
    console.log(tail);
    // [2, 3, 4]
```

对象:

```js
var robotA = { name: "Bender" };
var robotB = { name: "Flexo" };
var { name: nameA } = robotA;
var { name: nameB } = robotB;
console.log(nameA);
// "Bender"
console.log(nameB);
// "Flexo"
--------
// 当属性名与变量名一致时，可以通过一种实用的句法简写：
var { foo, bar } = { foo: "lorem", bar: "ipsum" };
console.log(foo);
// "lorem"
console.log(bar);
// "ipsum"
-----------
// 设置默认值
var { foo = "Hello", bar = "World !" } = { foo: "lorem", bar2: "ipsum" };
 //lorem
 console.log(foo);
 //World !
 console.log(bar);

var [missing = true] = [];
console.log(missing);
// true
var { message: msg = "Something went wrong" } = {};
console.log(msg);
// "Something went wrong"
 ------------
 // 复杂对象
var complicatedObj = {
  arrayProp: [
    "Zapp",
    { second: "Brannigan" }
  ]
};
var { arrayProp: [first, { second }] } = complicatedObj;
console.log(first);
// "Zapp"
console.log(second);
// "Brannigan"
```

### 易错

```js
//如果你已经声明或不打算声明这些变量（亦即赋值语句前没有let、const或var关键字）
{ blowUp } = { blowUp: 10 };
    // Syntax error 语法错误
({ safe } = {});
    // No errors 没有语法错误, 加上"()"即可
```

## 最佳实践

### tips

```js

// - 不要使用new Number()、new Boolean()、new String()创建包装对象；

// - 用parseInt()或parseFloat()来转换任意类型到number；因为 Number()不够严格, 有不规范的数据也不会报错

// - 用String()来转换任意类型到string，或者直接调用某个对象的toString()方法；(特殊的number类型: `(123).toString()`; // '123')

// - 通常不必把任意类型转换为boolean再判断，因为可以直接写if (myVar) {...}；

// - typeof操作符可以判断出number、boolean、string、function和undefined；

    // - 判断某个全局变量是否存在用typeof window.myVar === 'undefined'；
    // - 函数内部判断某个变量是否存在用typeof myVar === 'undefined'。
    // - typeof和undefined 结合
        // 错误的写法
        if (v) {
        // ...
        }
        // ReferenceError: v is not defined

        // 正确的写法
        if (typeof v === "undefined") {
        // ...
        }


// - 判断Array要使用Array.isArray(arr)；

// - 判断null请使用myVar === null；

    // - 使用 "===" 而不是 "=="

// - 全局变量使用大写

// - 最好把变量声明都放在代码块的头部。函数内部的变量声明，都应该放在函数的头部。...........变量提升

  for (var i = 0; i < 10; i++) {
    // ...
  }

  // 写成
  var i;
  for (i = 0; i < 10; i++) {
    // ...
  }
 
// - switch...case结构可以用对象结构代替。
//   比如这样的可以替换
  function doAction(action) {
    switch (action) {
      case 'hack':
        return 'hack';
        break;
      case 'slash':
        return 'slash';
        break;
      case 'run':
        return 'run';
        break;
      default:
        throw new Error('Invalid action.');
    }
  }

//   替换为:

  function doAction(action) {
    var actions = {
      'hack': function () {
        return 'hack';
      },
      'slash': function () {
        return 'slash';
      },
      'run': function () {
        return 'run';
      }
    };

    if (typeof actions[action] !== 'function') {
      throw new Error('Invalid action.');
    }

    return actions[action]();
  }

```

### 获取location

```js
var fullUrl = window.location.href;//  http://localhost:8087/pai-core-web/objectEdit

var pathName = window.location.pathname;//  pai-core-web/objectEdit

var pos = fullUrl.indexOf(pathName);
var localhostPath = fullUrl.substring(0, pos);//  http://localhost:8087
var projectName=pathName.substring(0,pathName.substr(1).indexOf('/')+1);//  /pai-core-web
var url = localhostPath + projectName;//  http://localhost:8087/pai-core-webe

```


# javascript

## 网络请求

### jQuery

- 本身是针对MVC的编程,不符合现在前端MVVM的浪潮
- 基于原生的XHR开发，XHR本身的架构不清晰，已经有了fetch的替代方案
- JQuery整个项目太大，单纯使用ajax却要引入整个JQuery非常的不合理（采取个性化打包的方案又不能享受CDN服务）

```js
$.ajax({
   type: 'POST',
   url: url,
   data: data,
   dataType: dataType,
   success: function () {},
   error: function () {}
});
```


### fetch

优点:

- 符合关注分离，没有将输入、输出和用事件来跟踪的状态混杂在一个对象里
- 更好更方便的写法
- 更加底层，提供的API丰富（request, response）
- 脱离了XHR，是ES规范里新的实现方式

缺点:

- fetchtch只对网络请求报错，对400，500都当做成功的请求，需要封装去处理
- fetch默认不会带cookie，需要添加配置项
- fetch不支持abort，不支持超时控制，使用setTimeout及Promise.reject的实现的超时控制并不能阻止请求过程继续在后台运行，造成了量的浪费
- fetch没有办法原生监测请求的进度，而XHR可以

```js
try {
  let response = await fetch(url);
  let data = response.json();
  console.log(data);
} catch(e) {
  console.log("Oops, error", e);
}
```

封装:

```js
require('es6-promise').polyfill();
require('isomorphic-fetch');

export default function request(method, url, body) {
    method = method.toUpperCase();
    if (method === 'GET') {
        body = undefined;
    } else {
        body = body && JSON.stringify(body);
    }

    return fetch(url, {
        method,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body
    }).then((res) => {
        if (res.status >= 200 && res.status < 300) {
            return res;
        } else {
            return Promise.reject('请求失败！');
        }
    })
}

export const get = path => request('GET', path);
export const post = (path, body) => request('POST', path, body);
export const put = (path, body) => request('PUT', path, body);
export const del = (path, body) => request('DELETE', path, body)
```

### axios

推荐

- 从 node.js 创建 http 请求
- 支持 Promise API
- 客户端支持防止CSRF
- 提供了一些并发请求的接口（重要，方便了很多的操作）

```js
axios({
    method: 'post',
    url: '/user/12345',
    data: {
        firstName: 'Fred',
        lastName: 'Flintstone'
    }
})
.then(function (response) {
    console.log(response);
})
.catch(function (error) {
    console.log(error);
});
```

## debug

console.dir() - dir 方法用来对一个对象进行检查（inspect），并以易于阅读和打印的格式显示
console.dirxml() - dirxml 方法主要用于以目录树的形式，显示 DOM 节点。
console.time()，console.timeEnd() - 这两个方法用于计时，可以算出一个操作所花费的准确时间
debugger - 语句主要用于除错，作用是设置断点

```js
console.log({ f1: "foo", f2: "bar" });
// Object {f1: "foo", f2: "bar"}

console.dir({ f1: "foo", f2: "bar" });
// Object
//   f1: "foo"
//   f2: "bar"
//   __proto__: Object

console.dir(document.body);

// Node 环境之中，还可以指定以代码高亮的形式输出。

console.dir(obj, { colors: true });

// dirxml方法主要用于以目录树的形式，显示 DOM 节点。

console.dirxml(document.body);

// -----------------------

console.time("Array initialize");

var array = new Array(1000000);
for (var i = array.length - 1; i >= 0; i--) {
    array[i] = new Object();
}

console.timeEnd("Array initialize");
// Array initialize: 1914.481ms


JSON.stringify() // 若对象定义了  toJSON 方法, 则会返回  toJSON 的返回值

let product = {
    "id": 12,
    "name": "phone"
}
// 打印对象
console.log(JSON.stringify(product));

// 仅仅打印指定字段
console.log(JSON.stringify(product, ['name', 'id']));

// 如果返回 undefined，则不会打印键值对, 这里只会打印 id
console.log(JSON.stringify(product, (k, v) => {
    if (typeof v === 'string') {
        return undefine;
    }
    return v;
}));

// 控制缩进
console.log(JSON.stringify(product, null, 4));
// 使用字符填充缩进
console.log(JSON.stringify(product, null, "**"));



```


## basic

语句 & 表达式, 变量, 标识符, 区块, 条件, 循环, break/continue/标签

> -   JavaScript 有一些保留字，不能用作标识符：arguments、break、case、catch、class、const、continue、debugger、default、delete、do、else、enum、eval、export、extends、false、finally、for、function、if、implements、import、in、instanceof、interface、let、new、null、package、private、protected、public、return、static、super、switch、this、throw、true、try、typeof、var、void、while、with、yield。

> -   区块往往用来构成其他更复杂的语法结构，比如 for、if、while、function 等

> -   else 代码块总是与离自己前面的最近的那个 if 语句配对; switch 语句后面的表达式，与 case 语句后面的表示式比较运行结果时，采用的是严格相等运算符（===），而不是相等运算符（==），这意味着比较时不会发生类型转换

> -   for 语句的三个部分（initialize、test、increment），可以省略任何一个，也可以全部省略; 不管条件是否为真，do...while 循环至少运行一次，这是这种结构最大的特点。另外，while 语句后面的分号注意不要省略。

> -   标签通常与 break 语句和 continue 语句配合使用，跳出特定的循环; 标签也可以用于跳出代码块。

```js
// 变量的声明和赋值，是分开的两个步骤

var a = 1;
  ↓ ↓ ↓
var a;
a = 1;

// 变量提升:
// JavaScript 引擎的工作方式是，先解析代码，获取所有被声明的变量，然后再一行一行地运行。这造成的结果，就是所有的变量的声明语句，都会被提升到代码的头部，这就叫做变量提升
console.log(a); // 不会报错, 结果是显示undefined，表示变量a已声明，但还未赋值
var a = 1;
    ↓
var a;
console.log(a);
a = 1;

// 标签

top:
  for (var i = 0; i < 3; i++){
    for (var j = 0; j < 3; j++){
      if (i === 1 && j === 1) break top;
      console.log('i=' + i + ', j=' + j);
    }
  }
// 标签也可以用于跳出代码块。
foo: {
  console.log(1);
  break foo;
  console.log('本行不会输出');
}
console.log(2);

```

## 数据类型的转换

[ref](https://wangdoc.com/javascript/features/conversion.html)

如果运算符发现，运算子的类型与预期不符，就会自动转换类型。

### 手动转换(强制转换)

强制转换主要指使用 Number()、String()和 Boolean()三个函数，手动将各种类型的值，分别转换成数字、字符串或者布尔值。

#### Boolean()

除了以下五个值的转换结果为 false，其他的值全部为 true。

undefined
null
-0 或+0
NaN
''（空字符串）

所有对象（包括空对象）的转换结果都是 true，甚至连 false 对应的布尔对象 new Boolean(false)也是 true

```js
Boolean({}); // true
Boolean([]); // true
Boolean(new Boolean(false)); // true
```

#### String()

String 函数可以将任意类型的值转化成字符串，转换规则如下。

##### 原始类型值

数值：转为相应的字符串。
字符串：转换后还是原来的值。
布尔值：true 转为字符串"true"，false 转为字符串"false"。
undefined：转为字符串"undefined"。
null：转为字符串"null"。

##### 对象

String 方法的参数如果是对象，返回一个类型字符串；如果是数组，返回该数组的字符串形式。

String 方法背后的转换规则，与 Number 方法基本相同，只是互换了 valueOf 方法和 toString 方法的执行顺序:

1. 先调用对象自身的 toString 方法。如果返回原始类型的值，则对该值使用 String 函数，不再进行以下步骤。

1. 如果 toString 方法返回的是对象，再调用原对象的 valueOf 方法。如果 valueOf 方法返回原始类型的值，则对该值使用 String 函数，不再进行以下步骤。

1. 如果 valueOf 方法返回的是对象，就报错。

#### Number()

接受的参数分 2 种情况

##### 原始类型值

```js
// 数值：转换后还是原来的值
Number(324); // 324

// 字符串：如果可以被解析为数值，则转换为相应的数值
Number("324"); // 324

// 字符串：如果不可以被解析为数值，返回 NaN
Number("324abc"); // NaN

// 空字符串转为0
Number(""); // 0

// 布尔值：true 转成 1，false 转成 0
Number(true); // 1
Number(false); // 0

// undefined：转成 NaN
Number(undefined); // NaN

// null：转成0
Number(null); // 0
```

Number 函数将字符串转为数值，要比 parseInt 函数严格很多。基本上，只要有一个字符无法转成数值，整个字符串就会被转为 NaN。

##### 对象

第一步，调用对象自身的 valueOf 方法。如果返回原始类型的值，则直接对该值使用 Number 函数，不再进行后续步骤。

第二步，如果 valueOf 方法返回的还是对象，则改为调用对象自身的 toString 方法。如果 toString 方法返回原始类型的值，则对该值使用 Number 函数，不再进行后续步骤。

第三步，如果 toString 方法返回的是对象，就报错

```js
/// 简单的规则是，Number方法的参数是对象时，将返回NaN，除非是包含单个数值的数组。

Number({ a: 1 }); // NaN
Number([1, 2, 3]); // NaN
Number([5]); // 5

// ---------------------

var obj = { x: 1 };
Number(obj); // NaN

// 等同于
if (typeof obj.valueOf() === "object") {
    Number(obj.toString());
} else {
    Number(obj.valueOf());
}
```

### 自动转换

遇到以下三种情况时，JavaScript 会自动转换数据类型，即转换是自动完成的，用户不可见

第一种情况，不同类型的数据互相运算。
第二种情况，对非布尔值类型的数据求布尔值。
第三种情况，对非数值类型的值使用一元运算符（即+和-）。

由于自动转换具有不确定性，而且不易除错，建议在预期为布尔值、数值、字符串的地方，全部使用 Boolean、Number 和 String 函数进行显式转换。

## 错误处理机制

### Error 实例对象

JavaScript 原生提供 Error 构造函数，所有抛出的错误都是这个构造函数的实例。

```js
var err = new Error("出错了");
err.message; // "出错了"

if (error.name) {
    console.log(error.name + ": " + error.message);
}

function throwit() {
    throw new Error("");
}

function catchit() {
    try {
        throwit();
    } catch (e) {
        console.log(e.stack); // print stack trace
    }
}

catchit();
// Error
//    at throwit (~/examples/throwcatch.js:9:11)
//    at catchit (~/examples/throwcatch.js:3:9)
//    at repl:1:5
```

### 原生错误类型

Error 实例对象是最一般的错误类型，在它的基础上，JavaScript 还定义了其他 6 种错误对象。也就是说，存在 Error 的 6 个派生对象

这 6 种派生错误，连同原始的 Error 对象，都是构造函数。开发者可以使用它们，手动生成错误对象的实例。这些构造函数都接受一个参数，代表错误提示信息（message）

#### SyntaxError

SyntaxError 对象是解析代码时发生的语法错误。

语法解析阶段就可以发现，所以会抛出 SyntaxError

#### ReferenceError

ReferenceError 对象是引用一个不存在的变量时发生的错误

```js
// 使用一个不存在的变量
unknownVariable;
// Uncaught ReferenceError: unknownVariable is not defined

// 另一种触发场景是，将一个值分配给无法分配的对象，比如对函数的运行结果或者this赋值。

// 等号左侧不是变量
console.log() = 1;
// Uncaught ReferenceError: Invalid left-hand side in assignment

// this 对象不能手动赋值
this = 1;
// ReferenceError: Invalid left-hand side in assignment
```

#### RangeError

```js
// RangeError对象是一个值超出有效范围时发生的错误。主要有几种情况，一是数组长度为负数，二是Number对象的方法参数超出范围，以及函数堆栈超过最大值。

// 数组长度不得为负数
new Array(-1);
// Uncaught RangeError: Invalid array length
```

#### TypeError

TypeError 对象是变量或参数不是预期类型时发生的错误。比如，对字符串、布尔值、数值等原始类型的值使用 new 命令，就会抛出这种错误，因为 new 命令的参数应该是一个构造函数

调用对象不存在的方法，也会抛出 TypeError 错误

#### URIError

URIError 对象是 URI 相关函数的参数不正确时抛出的错误，主要涉及 encodeURI()、decodeURI()、encodeURIComponent()、decodeURIComponent()、escape()和 unescape()这六个函数

#### EvalError

eval 函数没有被正确执行时，会抛出 EvalError 错误。该错误类型已经不再使用了，只是为了保证与以前代码兼容，才继续保留。

### 自定义错误

```js
function UserError(message) {
    this.message = message || "默认信息";
    this.name = "UserError";
}
// 继承Error对象
UserError.prototype = new Error();
UserError.prototype.constructor = UserError;

// 使用
new UserError("这是自定义的错误！");
```

### throw

throw 语句的作用是手动中断程序执行，抛出一个错误(或者其他任意类型的值)。

对于 JavaScript 引擎来说，遇到 throw 语句，程序就中止了。引擎会接收到 throw 抛出的信息，可能是一个错误实例，也可能是其他类型的值。

### [try...catch...finally]

一旦发生错误，程序就中止执行了。JavaScript 提供了 try...catch 结构，允许对错误进行处理，选择是否往下执行。

catch 代码块捕获错误之后，程序不会中断，会按照正常流程继续执行下去

try...catch 结构允许在最后添加一个 finally 代码块，表示不管是否出现错误，都必需在最后运行的语句。

注意 🐖: try 代码块没有发生错误，而且里面还包括 return 语句，但是 finally 代码块依然会执行。注意，只有在其执行完毕后，才会显示 return 语句的值。

```js
var count = 0;
function countUp() {
    try {
        return count;
    } finally {
        count++;
    }
}

countUp();
// 0
count;
// 1
```

## 数据类型

### 基本的 6 种(不含 es6 的 Symbol)

-   字符串（String）

-   数值(Number，不区分整数或小数)、

-   布尔(Boolean)、

-   对象(Object) - 各种值组成的集合

    -   狭义的对象（object） - 常用

    -   数组（array）

    -   函数（function）

-   空（Null） - 表示空值，即此处的值为空。

-   未定义（Undefined） - 表示“未定义”或不存在，即由于目前没有定义，所以此处暂时没有任何值

> -   每个数据类型（除了 null，Undefine 之外）均是对象

> -   数值、字符串、布尔值这三种类型，合称为原始类型（primitive type）的值，即它们是最基本的数据类型，不能再细分了; 对象则称为合成类型（complex type）的值，因为一个对象往往是多个原始类型的值的合成，可以看作是一个存放各种值的容器

### 三种方法确定类型

JavaScript 有三种方法，可以确定一个值到底是什么类型:

```js
> typeof运算符

typeof 123 // "number"
typeof '123' // "string"
typeof false // "boolean"
function f() {}
typeof f // "function"
typeof undefined // "undefined" 利用这点可以判断变量是否定义过: if (typeof v === "undefined") ...
typeof window // "object"
typeof {} // "object"
typeof [] // "object", 特殊的对象, instanceof运算符可以区分数组和对象

> instanceof运算符

> Object.prototype.toString方法

```

### 布尔值&null&undefined

null 是一个表示“空”的对象，转为数值时为 0；undefined 是一个表示"此处无定义"的原始值，转为数值时为 NaN。

```js
// 下面六个值被转为false，其他值都视为true
// 空数组（[]）和空对象（{}）对应的布尔值，都是true
undefined
null
false
0
NaN
""或''（空字符串）

// 返回undefined的典型场景

// 变量声明了，但没有赋值
var i;
i // undefined

// 调用函数时，应该提供的参数没有提供，该参数等于 undefined
function f(x) {
  return x;
}
f() // undefined

// 对象没有赋值的属性
var  o = new Object();
o.p // undefined

// 函数没有返回值时，默认返回 undefined
function f() {}
f() // undefined
```

### 数值

#### tips

-   JavaScript 语言的底层根本没有整数，所有数字都是小数, 1 与 1.0 是相同的，是同一个数。

-   NaN 不是独立的数据类型，而是一个特殊数值，它的数据类型依然属于 Number，使用 typeof 运算符可以看得很清楚。

    ```js
    typeof NaN; // 'number'
    NaN === NaN; // false
    Boolean(NaN); // false
    ```

-   Infinity 表示“无穷”，用来表示两种场景。一种是一个正的数值太大，或一个负的数值太小，无法表示；另一种是非 0 数值除以 0，得到 Infinity。

-   由于浮点数不是精确的值，所以涉及小数的比较和运算要特别小心

    ```js
    0.1 + 0.2 === 0.3;
    // false

    0.3 /
        0.1(
            // 2.9999999999999996

            0.3 - 0.2
        ) ===
        0.2 - 0.1;
    // false
    ```

    number 全局方法

    ```js
    parseFloat("3.14"); // 3.14
    parseInt("123"); // 123

    isNaN(123); // false
    ```

#### 全局方法

##### parseInt()

parseInt 方法用于将字符串转为整数

```js
parseInt('123') // 123

parseInt('   81') // 81

parseInt(1.23) // 1
  ↓ 等同于
parseInt('1.23') // 1

// 字符串转为整数的时候，是一个个字符依次转换，如果遇到不能转为数字的字符，就不再进行下去，返回已经转好的部分。

parseInt('8a') // 8
parseInt('12**') // 12
parseInt('12.34') // 12
parseInt('15e2') // 15
parseInt('15px') // 15

parseInt('abc') // NaN
parseInt('.3') // NaN
parseInt('') // NaN
parseInt('+') // NaN
parseInt('+1') // 1

// 进制转换 parseInt

parseInt('1000') // 1000, 默认10进制
// 等同于
parseInt('1000', 10) // 1000

parseInt('1000', 2) // 8
parseInt('1000', 6) // 216
parseInt('1000', 8) // 512

// 科学计数法无效
parseInt(1000000000000000000000.5) // 1
// 等同于
parseInt('1e+21') // 1

parseInt(0.0000008) // 8
// 等同于
parseInt('8e-7') // 8
```

##### parseFloat()

将一个字符串转为浮点数

```js
parseFloat("3.14"); // 3.14
parseFloat("314e-2"); // 3.14
parseFloat("0.0314E+2"); // 3.14

// 和 Number() 的不同

parseFloat(true); // NaN
Number(true); // 1

parseFloat(null); // NaN
Number(null); // 0

parseFloat(""); // NaN
Number(""); // 0

parseFloat("123.45#"); // 123.45
Number("123.45#"); // NaN
```

##### isNaN()

```js
isNaN("Hello"); // true
// 相当于
isNaN(Number("Hello")); // true
```

##### isFinite()

判断某个值是否为正常数值

```js
isFinite(Infinity); // false
isFinite(-Infinity); // false
isFinite(NaN); // false
isFinite(undefined); // false
isFinite(null); // true
isFinite(-1); // true
```

### 字符串

#### 转义

\0 ：null（\u0000）
\b ：后退键（\u0008）
\f ：换页符（\u000C）
\n ：换行符（\u000A）
\r ：回车键（\u000D）
\t ：制表符（\u0009）
\v ：垂直制表符（\u000B）
\' ：单引号（\u0027）
\" ：双引号（\u0022）
\\ ：反斜杠（\u005C）

#### 字符集

JavaScript 返回的字符串长度可能是不正确的

[ref](https://wangdoc.com/javascript/types/string.html#%E5%AD%97%E7%AC%A6%E9%9B%86)

#### Base64 转码

-   概念: 可以将任意值转成 0 ～ 9、A ～ Z、a-z、+和/这 64 个字符组成的可打印字符。使用它的主要目的，不是为了加密，而是为了不出现特殊字符，简化程序的处理

-   使用场景: 文本里面包含一些不可打印的符号，比如 ASCII 码 0 到 31 的符号都无法打印出来，这时可以使用 Base64 编码，将它们转成可以打印的字符。另一个场景是，有时需要以文本格式传递二进制数据，那么也可以使用 Base64 编码。

-   api

    -   btoa()：任意值转为 Base64 编码

    -   atob()：Base64 编码转为原来的值

```js
var string = "Hello World!";
btoa(string); // "SGVsbG8gV29ybGQh"
atob("SGVsbG8gV29ybGQh"); // "Hello World!"

// 两个方法不适合非 ASCII 码的字符, 比如中文，会报错。
//必须中间插入一个转码环节
function b64Encode(str) {
    return btoa(encodeURIComponent(str));
}
function b64Decode(str) {
    return decodeURIComponent(atob(str));
}
b64Encode("你好"); // "JUU0JUJEJUEwJUU1JUE1JUJE"
b64Decode("JUU0JUJEJUEwJUU1JUE1JUJE"); // "你好"
```

#### 字符串与数组

字符串可以被视为字符数组，因此可以使用数组的方括号运算符，用来返回某个位置的字符（位置编号从 0 开始）

```js
var s = "hello";
s[0]; // "h"
s[1]; // "e"
s[4]; // "o"

// 直接对字符串使用方括号运算符
"hello"[1]; // "e"

"abc"[3]; // undefined
"abc"[-1]; // undefined
"abc"["x"]; // undefined

// 无法改变字符串之中的单个字符

var s = "hello";

delete s[0];
s; // "hello"

s[1] = "a";
s; // "hello"

s[5] = "!";
s; // "hello"
```

#### length 属性

length 属性返回字符串的长度，该属性也是无法改变的。

### 对象

#### 键名

对象的所有键名都是字符串（ES6 又引入了 Symbol 值也可以作为键名），所以加不加引号都可以

```js
var obj = {
    foo: "Hello", // ['']适用于键名不符合标识名的时候
    bar: "World"
};
等同;
var obj = {
    foo: "Hello",
    bar: "World"
};
```

#### 对象的引用

如果不同的变量名指向同一个对象，那么它们都是这个对象的引用，也就是说指向同一个内存地址。修改其中一个变量，会影响到其他所有变量

```js
var o1 = {};
var o2 = o1;

o1.a = 1;
o2.a; // 1

o2.b = 2;
o1.b; // 2
```

但是，这种引用只局限于对象，如果两个变量指向同一个原始类型的值。那么，变量这时都是值的拷贝。

```js
var x = 1;
var y = x;

x = 2;
y; // 1 , y和x并不是指向同一个内存地址。
```

#### 表达式还是语句

V8 引擎规定，如果行首是大括号，一律解释为对象。不过，为了避免歧义，最好在大括号前加上圆括号。`({ foo: 123})`

```js
eval("{foo: 123}"); // 123, 代码块
eval("({foo: 123})"); // {foo: 123}, 对象
```

#### 属性

##### 属性读取和赋值

2 种读取方法, 赋值也类似

```js
var obj = {
    p: "Hello World"
};

obj.p; // "Hello World"
obj["p"]; // "Hello World"
```

如果使用方括号运算符获取属性，键名必须放在引号里面，否则会被当作变量处理

```js

var obj = {
  foo: 1,
  bar: 2
};

obj.foo  // 1
obj['foo'] // 1

var foo = 'bar';
obj[foo]  // 2


// 数字键可以不加引号，因为会自动转成字符串。

var obj = {
  0.7: 'Hello World'
};

obj['0.7'] // "Hello World"
obj[0.7] // "Hello World"

// 注意，数值键名不能使用点运算符（因为会被当成小数点），只能使用方括号运算符。

var obj = {
  123: 'hello world'
};

obj.123 // 报错
obj[123] // "hello world"
```

##### 属性查看

查看所有属性 `Object.keys`

```js
var obj = {
    key1: 1,
    key2: 2
};

Object.keys(obj);
// ['key1', 'key2']
```

##### 属性删除

删除某个属性 `delete obj.attr`, 返回 boolean

删除一个不存在的属性，delete 不报错，而且返回 true

delete 命令只能删除对象本身的属性，无法删除继承的属性

```js
var obj = { p: 1 };
Object.keys(obj); // ["p"]

delete obj.p; // true
obj.p; // undefined
Object.keys(obj); // []
```

##### 属性是否存[in]运算符

检查某个属性是否存在 `'attr' in obj`, 它不能识别哪些属性是对象自身的，哪些属性是继承的

```js
var obj = { p: 1 };
"p" in obj; // true
"toString" in obj; // true

// 可以使用对象的hasOwnProperty方法判断一下，是否为对象自身的属性

var obj = {};
if ("toString" in obj) {
    console.log(obj.hasOwnProperty("toString")); // false
}
```

##### 属性的遍历[for...in]

for...in 循环用来遍历一个对象的全部属性

它遍历的是对象所有可遍历（enumerable）的属性，会跳过不可遍历的属性。(对象都继承了 toString 属性，但是 for...in 循环不会遍历到这个属性。)

它不仅遍历对象自身的属性，还遍历继承的属性。(所以 , 应该结合使用 `hasOwnProperty` 方法，在循环内部判断一下，某个属性是否为对象自身的属性)

```js
var obj = { a: 1, b: 2, c: 3 };

for (var i in obj) {
    console.log("键名：", i);
    console.log("键值：", obj[i]);
}
// 键名： a
// 键值： 1
// 键名： b
// 键值： 2
// 键名： c
// 键值： 3

// 结合 hasOwnProperty

var person = { name: "老张" };

for (var key in person) {
    if (person.hasOwnProperty(key)) {
        console.log(key);
    }
}
// name
```

##### with 语句

不推荐

with(){} 操作同一个对象的多个属性时，提供一些书写的方便

如果 with 区块内部有变量的赋值操作，必须是当前对象已经存在的属性，否则会创造一个当前作用域的全局变量。

```js
// 例一
var obj = {
    p1: 1,
    p2: 2
};
with (obj) {
    p1 = 4; // 如果with区块内部有变量的赋值操作，必须是当前对象已经存在的属性，否则会创造一个当前作用域的全局变量。
    p2 = 5;
}
// 等同于
obj.p1 = 4;
obj.p2 = 5;
```

### 数组

#### 定义

任何类型的数据，都可以放入数组。index 从 0 开始

```js
var arr = ["a", "b", "c"];

// 先定义, 后赋值

var arr = [];

arr[0] = "a";
arr[1] = "b";
arr[2] = "c";

// 可以放入任意类型

var arr = [
    { a: 1 },
    [1, 2, 3],
    function() {
        return true;
    }
];

arr[0]; // Object {a: 1}
arr[1]; // [1, 2, 3]
arr[2]; // function (){return true;}
```

#### 数组本质

本质上，数组属于一种特殊的对象。typeof 运算符会返回数组的类型是 object

数组的特殊性体现在，它的键名是按次序排列的一组整数（0，1，2...）。

```js
// Object.keys方法返回数组的所有键名。可以看到数组的键名就是整数0、1、2

var arr = ["a", "b", "c"];

Object.keys(arr);
// ["0", "1", "2"]
```

JavaScript 语言规定，对象的键名一律为字符串，所以，数组的键名其实也是字符串。之所以可以用数值读取，是因为非字符串的键名会被转为字符串

```js
var arr = ["a", "b", "c"];

arr["0"]; // 'a'
arr[0]; // 'a'  数值键名被自动转为了字符串
```

#### length 属性

length 属性是可写的。如果人为设置一个小于当前成员个数的值，该数组的成员会自动减少到 length 设置的值。(说明数组是一种动态的数据结构，可以随时增减数组的成员)

清空数组的一个有效方法，就是将 length 属性设为 0。 如果人为设置 length 大于当前元素个数，则数组的成员数量会增加到这个值，新增的位置都是空位

由于数组本质上是一种对象，所以可以为数组添加属性，但是这不影响 length 属性的值。

```js
var a = [];

a["p"] = "abc";
a.length; // 0

a[2.1] = "abc";
a.length; // 0
// 因为，length属性的值就是等于最大的数字键加1，而这个数组没有整数键，所以length属性保持为0
```

#### [in]运算符

检查某个键名是否存在的运算符 in，适用于对象，也适用于数组

```js
var arr = ["a", "b", "c"];
2 in arr; // true // 由于键名都是字符串，所以数值2会自动转成字符串
"2" in arr; // true
4 in arr; // false

// 如果数组的某个位置是空位，in运算符返回false

var arr = [];
arr[100] = "a";

100 in arr; // true
1 in arr; // false
// 数组arr只有一个成员arr[100]，其他位置的键名都会返回false
```

#### [for...in]循环

for...in 循环不仅可以遍历对象，也可以遍历数组

但是 for...in 不仅会遍历数组所有的数字键，还会遍历非数字键(数组可以设置非数字键), 不推荐,

```js
var a = [1, 2, 3];
a.foo = true;

for (var key in a) {
    console.log(key);
}
// 0
// 1
// 2
// foo
```

可以考虑使用 for 循环或 while 循环或 forEach(func)

```js
var a = [1, 2, 3];

// for循环
for (var i = 0; i < a.length; i++) {
    console.log(a[i]);
}

// while循环
var i = 0;
while (i < a.length) {
    console.log(a[i]);
    i++;
}

var l = a.length;
while (l--) {
    console.log(a[l]);
}

// forEach

var colors = ["red", "green", "blue"];
colors.forEach(function(color) {
    console.log(color);
});
// red
// green
// blue
```

#### 数组的空位

两个逗号之间没有任何值，我们称该数组存在空位（hole）

length 属性包含空位

最后一个元素后面有逗号，并不会产生空位

数组的空位是可以读取的，返回 undefined

使用 delete 命令删除一个数组成员，会形成空位，并且不会影响 length 属性

空位和 undefined 区别: 如果是空位，使用数组的 forEach 方法、for...in 结构、以及 Object.keys 方法进行遍历，空位都会被跳过。但是如果某个位置是 undefined，遍历的时候就不会被跳过。(空位就是数组没有这个元素，所以不会被遍历到，而 undefined 则表示数组有这个元素，值是 undefined，所以遍历不会跳过)

#### 类似数组的对象

##### 定义

类似数组的对象(如果一个对象的所有键名都是正整数或零，并且有 length 属性，那么这个对象就很像数组，语法上称为“类似数组的对象”（array-like object）)

典型的“类似数组的对象”是`函数的arguments对象`，以及大多数 DOM 元素集，还有字符串

```js
// arguments对象
function args() {
    return arguments;
}
var arrayLike = args("a", "b");

arrayLike[0]; // 'a'
arrayLike.length; // 2
arrayLike instanceof Array; // false

// DOM元素集
var elts = document.getElementsByTagName("h3");
elts.length; // 3
elts instanceof Array; // false

// 字符串
"abc"[1]; // 'b'
"abc".length; // 3
"abc" instanceof Array; // false
```

##### 使用数组特有方法

类似数组 怎么使用数组特有的方法?

数组的 slice 方法可以将“类似数组的对象”变成真正的数组(推荐)

```js
var arr = Array.prototype.slice.call(arrayLike); // 变为了真正的数组
```

通过`call()`把数组的方法放到对象上面。

```js
// forEach 方法
// 这种方法比直接使用数组原生的forEach要慢，所以最好还是先将“类似数组的对象”转为真正的数组，然后再直接调用数组的forEach方法
function logArgs() {
    Array.prototype.forEach.call(arguments, function(elem, i) {
        console.log(i + ". " + elem);
    });
}

// 等效
function logArgs() {
    for (var i = 0; i < arguments.length; i++) {
        console.log(i + ". " + arguments[i]);
    }
}
```

### 函数

#### 3 种声明方式

```js
var add = new Function( // 可以不使用new命令，返回结果完全一样
    "x", // 可以有任意个参数, 最少一个, 为函数体
    "y",
    "return x + y" // 只有末尾的参数为函数体
);

// 等同于
function add(x, y) {
    return x + y;
}

// 等同
var add = function(x, y) {
    return x + y;
};

// 为了 调用自身, or 方便调试显示方法名, 经常这么作
var f = function f() {};
```

#### 一等公民

redux 中的 connect 函数, 简化后是这样的:

```js
function add(x, y) {
    return x + y;
}

// 将函数赋值给一个变量
var operator = add;

// 将函数作为参数和返回值
function a(op) {
    return op;
}
a(add)(1, 1);
// 2
```

#### 函数名提升

类似变量名提升

JavaScript 引擎将函数名视同变量名，所以采用 function 命令声明函数时，整个函数会像变量声明一样，被提升到代码头部

```js
f(); // 不会报错
function f() {}

// 但是如果采用赋值语句定义函数就报错

f();
var f = function (){};
// TypeError: undefined is not a function
  ↓等同
var f;
f();
f = function () {};

// 如果同时采用function命令和赋值语句声明同一个函数，最后总是采用赋值语句的定义

var f = function () {
  console.log('1');
}

function f() {
  console.log('2');
}

f() // 1
```

#### 勿在条件语句中声明函数

如下是错误的 ❌

```js
if (foo) {
    function x() {}
}

try {
    function x() {}
} catch (e) {
    console.log(e);
}
```

#### 属性和方法

##### name 属性

```js
var myFunc = function() {};
function test(f) {
    console.log(f.name);
}
test(myFunc); // myFunc

var f2 = function() {};
f2.name; // "f2"

// 真正的函数名还是f3，而myName这个名字只在函数体内部可用。
var f3 = function myName() {};
f3.name; // 'myName'
```

##### length 属性

length 属性(函数定义之中的参数个数)

管调用时输入了多少个参数，length 属性始终等于函数定义的参数个数。

length 属性提供了一种机制，判断定义时和调用时参数的差异，以便实现面向对象编程的”方法重载“（overload）。

```js
function f(a, b) {}
f.length; // 2
```

##### toString()

函数的 toString 方法返回一个字符串，内容是函数的源码

```js
function f() {
    /*
  这是一个
  多行注释
*/
}

f.toString();
// "function f(){/*
//   这是一个
//   多行注释
// */}"
```

利用这一点, 实现多行 stirng

```js
var multiline = function(fn) {
    var arr = fn.toString().split("\n");
    return arr.slice(1, arr.length - 1).join("\n");
};

function f() {
    /*
  这是一个
  多行注释
*/
}

multiline(f);
// " 这是一个
//   多行注释"
```

#### 函数作用域

##### 定义

在 ES5 的规范中，Javascript 只有两种作用域：一种是全局作用域，变量在整个程序中一直存在，所有地方都可以读取；另一种是函数作用域，变量只在函数内部存在。ES6 又新增了块级作用域

函数外部声明的变量就是全局变量（global variable），它可以在函数内部读取

在函数内部定义的变量，外部无法读取，称为“局部变量”（local variable）。

函数内部定义的变量，会在该作用域内覆盖同名全局变量

对于 var 命令来说，局部变量只能在函数内部声明，在其他区块中声明，一律都是全局变量, 比如:

```js
if (true) {
    var x = 5;
}
console.log(x); // 5
```

##### 函数内部的变量提升

var 命令声明的变量，不管在什么位置，变量声明都会被提升到函数体的头部。

```js
function foo(x) {
    if (x > 100) {
        var tmp = x - 100;
    }
}

// 等同于
function foo(x) {
    var tmp;
    if (x > 100) {
        tmp = x - 100;
    }
}
```

##### 函数自身的作用域

```js
// 函数执行时所在的作用域，是定义时的作用域，而不是调用时所在的作用域

var a = 1;
var x = function() {
    console.log(a);
};

function f() {
    var a = 2;
    x();
}

f(); // 1

// ---------------------

var x = function() {
    console.log(a);
};

function y(f) {
    var a = 2;
    f();
}

y(x);
// ReferenceError: a is not defined
```

#### 参数

##### 参数可以省略

参数可以不写(函数参数不是必需的，Javascript 允许省略参数)

```js
function f(a, b) {
  return a;
}

f(1, 2, 3) // 1
f(1) // 1
f() // undefined

f.length // 2

// 但是，没有办法只省略靠前的参数，而保留靠后的参数。如果一定要省略靠前的参数，只有显式传入undefined。

function f(a, b) {
  return a;
}

f( , 1) // SyntaxError: Unexpected token ,(…)
f(undefined, 1) // undefined

```

##### 参数传递方式

函数参数如果是原始类型的值（数值、字符串、布尔值），传递方式是传值传递（passes by value）。这意味着，在函数体内修改参数值，不会影响到函数外部。如:

```js
var p = 2;

function f(p) {
    p = 3;
}
f(p);

p; // 2
```

如果函数参数是复合类型的值（数组、对象、其他函数），传递方式是传址传递（pass by reference）。也就是说，传入函数的原始值的地址，因此在函数内部修改参数，将会影响到原始值

```js
var obj = { p: 1 };

function f(o) {
    o.p = 2;
}
f(obj);

obj.p; // 2
```

如果函数内部修改的，不是参数对象的某个属性，而是替换掉整个参数，这时不会影响到原始值。

```js
var obj = [1, 2, 3];

function f(o) {
    o = [2, 3, 4];
}
f(obj);

obj; // [1, 2, 3]
```

##### 两个参数名一样怎么办

如果有同名的参数，则取最后出现的那个值。

```js
function f(a, a) {
    console.log(a);
}

f(1, 2); // 2

// --------------------

function f(a, a) {
    console.log(a);
}

f(1); // undefined

// -------------

// 这时候可以借助 arguments 获取第二个参数
function f(a, a) {
    console.log(arguments[0]);
}

f(1); // 1
```

##### arguments 对象

###### 定义

由于 JavaScript 允许函数有不定数目的参数，所以需要一种机制，可以在函数体内部读取所有参数。这就是 arguments 对象的由来

arguments 对象包含了函数运行时的所有参数，arguments[0]就是第一个参数，arguments[1]就是第二个参数，以此类推。这个对象只有在函数体内部，才可以使用。

```js
var f = function(one) {
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
};

f(1, 2, 3);
// 1
// 2
// 3

//---------------------------

// 动态修改
var f = function(a, b) {
    arguments[0] = 3;
    arguments[1] = 2;
    return a + b;
};

f(1, 1); // 5

// ------------------------------

// 严格模式下，arguments对象是一个只读对象，修改它是无效的，但不会报错。

var f = function(a, b) {
    "use strict"; // 开启严格模式
    arguments[0] = 3; // 无效
    arguments[1] = 2; // 无效
    return a + b;
};

f(1, 1); // 2
```

###### length 属性

```js
function f() {
    return arguments.length;
}

f(1, 2, 3); // 3
f(1); // 1
f(); // 0
```

###### 和数组的关系

虽然 arguments 很像数组，但它是一个对象。数组专有的方法（比如 slice 和 forEach），不能在 arguments 对象上直接使用

但是...我们可以将 arguments 转为真正的数组

```js
var args = Array.prototype.slice.call(arguments);

// 或者
var args = [];
for (var i = 0; i < arguments.length; i++) {
    args.push(arguments[i]);
}
```

###### callee 属性

arguments 对象带有一个 callee 属性，返回它所对应的原函数, 但是 这个属性在严格模式里面是禁用的

```js
var f = function() {
    console.log(arguments.callee === f);
};

f(); // true
```

#### 闭包

##### 先理解变量作用域

JavaScript 有两种作用域：全局作用域和函数作用域。函数内部可以直接读取全局变量, 但是，函数外部无法读取函数内部声明的变量;

有时候, 需要得到函数内的局部变量。正常情况下，这是办不到的，只有通过变通方法才能实现。那就是在函数的内部，再定义一个函数

```js
function f1() {
    var n = 999;
    function f2() {
        console.log(n); // 999
    }
}
```

只要把 f2 作为返回值，我们不就可以在 f1 外部读取它的内部变量了吗！因此, 可以把闭包简单理解成“定义在一个函数内部的函数”

在本质上，闭包就是将函数内部和函数外部连接起来的一座桥梁。

##### 闭包使用场景(用处)

闭包的最大用处有两个，一个是可以读取函数内部的变量(即可以封装对象的私有属性和私有方法)，另一个就是让这些变量始终保持在内存中，即闭包可以使得它诞生环境一直存在

```js
function createIncrementor(start) {
    return function() {
        return start++; // 先 return , 后自增
    };
}

var inc = createIncrementor(5);

// 通过闭包，start的状态被保留了
inc(); // 5
inc(); // 6
inc(); // 7
// 为什么会这样呢？原因就在于inc始终在内存中，而inc的存在依赖于createIncrementor，因此也始终在内存中，不会在调用结束后，被垃圾回收机制回收
// 外层函数每次运行，都会生成一个新的闭包，而这个闭包又会保留外层函数的内部变量，所以内存消耗很大。因此不能滥用闭包，否则会造成网页的性能问题
```

闭包的另一个用处，是封装对象的私有属性和私有方法

```js
function Person(name) {
    var _age;
    function setAge(n) {
        _age = n;
    }
    function getAge() {
        return _age;
    }

    return {
        name: name,
        getAge: getAge,
        setAge: setAge
    };
}

var p1 = Person("张三");
p1.setAge(25);
p1.getAge(); // 25
```

##### 立即调用的函数表达式(IIFE)

###### 定义

有时，我们需要在定义函数之后，立即调用该函数。这时，你不能在函数的定义之后加上圆括号，这会产生语法错误

```js
function(){ /* code */ }();
// SyntaxError: Unexpected token (
```

产生这个错误的原因是，function 这个关键字即可以当作语句，也可以当作表达式。

```js
// 语句
function f() {}

// 表达式
var f = function f() {};
```

为了避免解析上的歧义，JavaScript 引擎规定，如果 function 关键字出现在行首，一律解释成语句。因此，JavaScript 引擎看到行首是 function 关键字之后，认为这一段都是函数的定义，不应该以圆括号结尾，所以就报错了。

解决方法就是不要让 function 出现在行首，让引擎将其理解成一个表达式。最简单的处理，就是将其放在一个圆括号里面。

```js
// 加括号表示让浏览器把函数定义当作表达式
(function() {
    /* code */
})();
// 或者
(function() {
    /* code */
})();

// 推而广之，任何让解释器以表达式来处理函数定义的方法，都能产生同样的效果，比如下面三种写法
var i = (function() {
    return 10;
})();
true &&
    (function() {
        /* code */
    })();
0,
    (function() {
        /* code */
    })();

!(function() {
    /* code */
})();
~(function() {
    /* code */
})();
-(function() {
    /* code */
})();
+(function() {
    /* code */
})();
```

###### 使用场景

通常情况下，只对匿名函数使用这种“立即执行的函数表达式”。它的目的有两个：一是不必为函数命名，避免了污染全局变量；二是 IIFE 内部形成了一个单独的作用域，可以封装一些外部无法读取的私有变量

```js
// 写法一
var tmp = newData;
processData(tmp);
storeData(tmp);

// 写法二: 推荐, 因为完全避免了污染全局变量
(function() {
    var tmp = newData;
    processData(tmp);
    storeData(tmp);
})();
```

#### eval 命令

##### 定义

将字符串当作语句执行

```js
eval("var a = 1;");
a; // 1
```

通常情况下，eval 最常见的场合是解析 JSON 数据字符串，不过正确的做法应该是使用浏览器提供的 JSON.parse 方法

与 eval 作用类似的还有 Function 构造函数(见 [前文](#3种声明方式))。利用它生成一个函数，然后调用该函数，也能将字符串当作命令执行

##### 安全问题

eval 没有自己的作用域，都在当前作用域内执行，因此可能会修改当前作用域的变量的值，造成安全问题。

```js
var a = 1;
eval("a = 2"); // eval命令修改了外部变量a的值。由于这个原因，eval有安全风险

a; // 2
```

为了防止这种风险，JavaScript 规定，如果使用严格模式，eval 内部声明的变量，不会影响到外部作用域。

```js
// 函数f内部是严格模式，这时eval内部声明的foo变量，就不会影响到外部。
(function f() {
    "use strict";
    eval("var foo = 123");
    console.log(foo); // ReferenceError: foo is not defined
})();
```

严格模式下，eval 内部还是改写了外部变量，安全风险依然存在

```js
(function f() {
    "use strict";
    var foo = 1;
    eval("foo = 2");
    console.log(foo); // 2
})();
```

##### eval 的别名调用

eval 不利于引擎优化执行速度。更麻烦的是，还有下面这种情况，引擎在静态代码分析的阶段，根本无法分辨执行的是 eval

```js
var m = eval;
m("var x = 1");
x; // 1
```

为了保证 eval 的别名不影响代码优化，JavaScript 的标准规定，凡是使用别名执行 eval，eval 内部一律是全局作用域, 这样的话，引擎就能确认 eval 的别名函数 不会对当前的函数作用域产生影响，优化的时候就可以把这一行排除掉。

## 运算符

### 算术运算符

加法运算符：x + y
减法运算符： x - y
乘法运算符： x \* y
除法运算符：x / y
指数运算符：x ** y eg: 2 ** 4 // 16
余数运算符：x % y
自增运算符：++x 或者 x++
自减运算符：--x 或者 x--
数值运算符： +x
负数值运算符：-x

#### 加法运算符

```js
true + true; // 2
1 + true; // 2

"a" + "bc"; // "abc"

1 + "a"; // "1a"
false + "a"; // "falsea"
// 运算子的不同，导致了不同的语法行为，这种现象称为“重载”（overload）

// 除了加法运算符，其他算术运算符（比如减法、除法和乘法）都不会发生重载。它们的规则是：所有运算子一律转为数值，再进行相应的数学运算。
1 - "2"; // -1
1 * "2"; // 2
1 / "2"; // 0.5
```

##### 对象相加

```js
// 如果运算子是对象，必须先转成原始类型的值(自动调用对象的valueOf方法, 再自动调用对象的toString方法)，然后再相加。

var obj = { p: 1 };
obj + 2; // "[object Object]2"

// 知道了这个规则以后，就可以自己定义valueOf方法或toString方法，得到想要的结果

var obj = {
    valueOf: function() {
        return 1;
    }
};

obj + 2; // 3
```

#### 余数运算符

```js
// 运算结果的正负号由第一个运算子的正负号决定。

-1 % 2; // -1
1 % -2; // 1
```

#### 数值运算符

```js
// 数值运算符的作用在于可以将任何值转为数值（与Number函数的作用相同）
+true + // 1
[] + // 0
    {}; // NaN
```

### 比较运算符

#### 两个 string 比较

对于非相等的比较，算法是先看两个运算子是否都是字符串，如果是的，就按照字典顺序比较（实际上是比较 Unicode 码点）；否则，将两个运算子都转成数值，再比较数值的大小。

```js
"cat" > "dog"; // false
"cat" > "catalog"; // false
```

#### 非 string 比较

如果两个运算子都不是字符串，分成以下 2 种情况。

##### 原始类型值

如果两个运算子都是原始类型的值，则是先转成数值再比较。

```js
5 > "4"; // true
// 等同于 5 > Number('4')
// 即 5 > 4

true > false; // true
// 等同于 Number(true) > Number(false)
// 即 1 > 0

2 > true; // true
// 等同于 2 > Number(true)
// 即 2 > 1

// 任何值（包括NaN本身）与NaN比较，返回的都是false。

1 > NaN; // false
1 <= NaN; // false
"1" > NaN; // false
"1" <= NaN; // false
NaN > NaN; // false
NaN <= NaN; // false
```

##### 对象

如果运算子是对象，会转为原始类型的值，再进行比较。

对象转换成原始类型的值，算法是先调用 valueOf 方法；如果返回的还是对象，再接着调用 toString 方法

```js
var x = [2];
x > '11' // true
// 等同于 [2].valueOf().toString() > '11'
// 即 '2' > '11'

x.valueOf = function () { return '1' };
x > '11' // false
// 等同于 [2].valueOf() > '11'
// 即 '1' > '11'

// 两个对象之间的比较也是如此。

[2] > [1] // true
// 等同于 [2].valueOf().toString() > [1].valueOf().toString()
// 即 '2' > '1'

[2] > [11] // true
// 等同于 [2].valueOf().toString() > [11].valueOf().toString()
// 即 '2' > '11'

{ x: 2 } >= { x: 1 } // true
// 等同于 { x: 2 }.valueOf().toString() >= { x: 1 }.valueOf().toString()
// 即 '[object Object]' >= '[object Object]'
```

#### 严格相等

相等运算符（==）比较两个值是否相等，严格相等运算符（===）比较它们是否为“同一个值”。如果两个值不是同一类型，严格相等运算符（===）直接返回 false，而相等运算符（==）会将它们转换成同一个类型，再用严格相等运算符进行比较

"===" 的算法:

1. 如果两个值的类型不同，直接返回 false

1. 同一类型的原始类型的值（数值、字符串、布尔值）比较时，值相同就返回 true，值不同就返回 false。

1. 两个复合类型（对象、数组、函数）的数据比较时，不是比较它们的值是否相等，而是比较它们是否指向同一个地址。

```js
{} === {} // false
[] === [] // false
(function () {} === function () {}) // false

// 对于两个对象的比较，严格相等运算符比较的是地址，而大于或小于运算符比较的是值。

var obj1 = {};
var obj2 = {};

obj1 > obj2 // false
obj1 < obj2 // false
obj1 === obj2 // false
```

1. undefined 和 null 与自身严格相等。

```js
undefined === undefined; // true
null === null; // true

// 由于变量声明后默认值是undefined，因此两个只声明未赋值的变量是相等的。

var v1;
var v2;
v1 === v2; // true
```

### 布尔运算符

取反运算符：!
且运算符：&&
或运算符：||
三元运算符：?:

#### 取反

以下六个值取反后为 true，其他值都为 false。

undefined
null
false
0
NaN
空字符串（''）

```js
// 如果对一个值连续做两次取反运算，等于将其转为对应的布尔值，与Boolean函数的作用相同。这是一种常用的类型转换的写法。

!!x;
// 等同于
Boolean(x);
```

#### 短路

&&: 如果第一个运算子的布尔值为 true，则返回第二个运算子的值（注意是值，不是布尔值）；如果第一个运算子的布尔值为 false，则直接返回第一个运算子的值，且不再对第二个运算子求值。

||: 如果第一个运算子的布尔值为 true，则返回第一个运算子的值，且不再对第二个运算子求值；如果第一个运算子的布尔值为 false，则返回第二个运算子的值。

### 二进制位运算符

### void 运算符

void 运算符的作用是执行一个表达式，然后不返回任何值，或者说返回 undefined。

```js
var x = 3;
void (x = 5) //undefined
x // 5

// 这个运算符的主要用途是浏览器的书签工具（bookmarklet），以及在超级链接中插入代码防止网页跳转。

<script>
function f() {
  console.log('Hello World');
}
</script>
<a href="http://example.com" onclick="f(); return false;">点击</a>
// 点击链接后，会先执行onclick的代码，由于onclick返回false，所以浏览器不会跳转到 example.com。

// void运算符可以取代上面的写法。

<a href="javascript: void(f())">文字</a>

// 用户点击链接提交表单，但是不产生页面跳转。

<a href="javascript: void(document.form.submit())">
  提交
</a>
```

### 逗号运算符

逗号运算符用于对两个表达式求值，并返回后一个表达式的值。

逗号运算符的一个用途是，在返回一个值之前，进行一些辅助操作。

```js
var value = (console.log('Hi!'), true);
// Hi!

value // true
上面代码中，先执行逗号之前的操作，然后返回逗号后面的值。
```

### 运算顺序

圆括号（()）可以用来提高运算的优先级，因为它的优先级是最高的，即圆括号中的表达式会第一个运算。

左结合与右结合:
对于优先级别相同的运算符，大多数情况，计算顺序总是从左到右，这叫做运算符的“左结合”（left-to-right associativity），即从左边开始计算。
但是少数运算符的计算顺序是从右到左，即从右边开始计算，这叫做运算符的“右结合”（right-to-left associativity）。其中，最主要的是赋值运算符（=）和三元条件运算符（?:）。

## 标准库

### Object 对象

JavaScript 的所有其他对象都继承自 Object 对象，即那些对象都是 Object 的实例

Object 对象的原生方法分成两类：Object 本身的方法(直接定义在 Object 对象的方法)与 Object 的实例方法(定义在 Object 原型对象 Object.prototype 上的方法)

#### 任意类型转换为 object

Object() 将任意值转为对象。这个方法常用于保证某个值一定是对象。(可以接受一个参数，如果该参数是一个对象，则直接返回这个对象；如果是一个原始类型的值，则返回该值对应的包装对象; 如果参数为空（或者为 undefined 和 null），Object()返回一个空对象。)

```js
var obj = Object(1);
obj instanceof Object; // true
obj instanceof Number; // true

var obj = Object("foo");
obj instanceof Object; // true
obj instanceof String; // true

var obj = Object(true);
obj instanceof Object; // true
obj instanceof Boolean; // true

//-----------------------------

var arr = [];
var obj = Object(arr); // 返回原数组
obj === arr; // true

var value = {};
var obj = Object(value); // 返回原对象
obj === value; // true

var fn = function() {};
var obj = Object(fn); // 返回原函数
obj === fn; // true

//利用这一点，可以写一个判断变量是否为对象的函数。

function isObject(value) {
    return value === Object(value);
}

isObject([]); // true
isObject(true); // false

// ----------------------------

var obj = Object();
// 等同于
var obj = Object(undefined);
var obj = Object(null);

obj instanceof Object; // true
```

#### Object 构造函数

可以当作工具方法直接使用, 可以当作构造函数和 new 一起使用

虽然用法相似，但是 Object(value)与 new Object(value)两者的语义是不同的，Object(value)表示将 value 转成一个对象，new Object(value)则表示新生成一个对象，它的值是 value

#### Object 的静态方法

(部署在 Object 对象自身的方法)

##### 获取对象属性数组

Object.keys()，Object.getOwnPropertyNames()

对于一般的对象来说，Object.keys()和 Object.getOwnPropertyNames()返回的结果是一样的。只有涉及不可枚举属性时，才会有不一样的结果。Object.keys 方法只返回可枚举的属性，Object.getOwnPropertyNames 方法还返回不可枚举的属性名。

```js
// Object.keys方法的参数是一个对象，返回一个数组。该数组的成员都是该对象自身的（而不是继承的）所有属性名。

var obj = {
    p1: 123,
    p2: 456
};

Object.keys(obj); // ["p1", "p2"]

// ---------------------------------------

// Object.getOwnPropertyNames方法与Object.keys类似，也是接受一个对象作为参数，返回一个数组，包含了该对象自身的所有属性名。

var obj = {
    p1: 123,
    p2: 456
};

Object.getOwnPropertyNames(obj); // ["p1", "p2"]

// ---------------------------------

var a = ["Hello", "World"];

Object.keys(a); // ["0", "1"]
Object.getOwnPropertyNames(a); // ["0", "1", "length"]
```

##### 复制属性

常见用途:

```js
// 为对象添加属性
// 将x属性和y属性添加到Point类的对象实例
class Point {
  constructor(x, y) {
    Object.assign(this, {x, y});
  }
}


///////////////////////////////////

// 为对象添加方法
Object.assign(SomeClass.prototype, {
  someMethod(arg1, arg2) {
    ···
  },
  anotherMethod() {
    ···
  }
});
// 等同于下面的写法
SomeClass.prototype.someMethod = function (arg1, arg2) {
  ···
};
SomeClass.prototype.anotherMethod = function () {
  ···
};

///////////////////////////////////

//克隆对象
function clone(origin) {
  return Object.assign({}, origin);
}
//采用这种方法克隆，只能克隆原始对象自身的值，不能克隆它继承的值。
//如果想要保持继承链，可以采用下面的代码。
function clone(origin) {
  let originProto = Object.getPrototypeOf(origin);
  return Object.assign(Object.create(originProto), origin);
}
///////////////////////////////////

//合并多个对象

// 将多个对象合并到某个对象。
const merge = (target, ...sources) => Object.assign(target, ...sources);
// 如果希望合并后返回一个新对象，可以改写上面函数，对一个空对象合并。
const merge = (...sources) => Object.assign({}, ...sources);


///////////////////////////////////

//为属性指定默认值

const DEFAULTS = {// 表示默认值
  logLevel: 0,
  outputFormat: 'html'
};
function processContent(options) {
    // Object.assign方法将DEFAULTS和options合并成一个新对象，如果两者有同名属性，则option的属性值会覆盖DEFAULTS的属性值。
  options = Object.assign({}, DEFAULTS, options);
  console.log(options);
  // ...
}
//由于存在浅拷贝的问题，DEFAULTS对象和options对象的所有属性的值，最好都是简单类型，不要指向另一个对象。否则，DEFAULTS对象的该属性很可能不起作用

///////////////////////////////////
///////////////////////////////////

```

Object.assign方法用于对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象

```js
// 基本使用
const target = { a: 1 };

const source1 = { b: 2 };
const source2 = { c: 3 };

Object.assign(target, source1, source2);
target // {a:1, b:2, c:3}

//////////////////////////////////////////

// Object.assign方法实行的是浅拷贝，而不是深拷贝。也就是说，如果源对象某个属性的值是对象，那么目标对象拷贝得到的是这个对象的引用。


const obj1 = {a: {b: 1}};
const obj2 = Object.assign({}, obj1);

obj1.a.b = 2;
obj2.a.b // 2

//////////////////////////////////


// 同名属性的替换 , 而不是 添加

const target = { a: { b: 'c', d: 'e' } }
const source = { a: { b: 'hello' } }
Object.assign(target, source)
// { a: { b: 'hello' } }

////////////////////////////////////

// Object.assign拷贝的属性是有限制的，只拷贝源对象的自身属性（不拷贝继承属性），也不拷贝不可枚举的属性（enumerable: false）
Object.assign({b: 'c'},
  Object.defineProperty({}, 'invisible', {
    enumerable: false,
    value: 'hello'
  })
)
// { b: 'c' }



/////////////////////////////


// 注意，如果目标对象与源对象有同名属性，或多个源对象有同名属性，则后面的属性会覆盖前面的属性
//
const target = { a: 1, b: 1 };

const source1 = { b: 2, c: 2 };
const source2 = { c: 3 };

Object.assign(target, source1, source2);
target // {a:1, b:2, c:3}

/////////////////////////////////

// 如果只有一个参数，Object.assign会直接返回该参数
//
const obj = {a: 1};
Object.assign(obj) === obj // true

////////////////////////////////////

// 如果该参数不是对象，则会先转成对象，然后返回
typeof Object.assign(2) // "object"

//////////////////////////////////

// 属性名为 Symbol 值的属性，也会被Object.assign拷贝。

Object.assign({ a: 'b' }, { [Symbol('c')]: 'd' })
// { a: 'b', Symbol(c): 'd' }


///////////////////////////

// 数组的处理, 会把数组视为对象
//Object.assign把数组视为属性名为 0、1、2 的对象，因此源数组的 0 号属性4覆盖了目标数组的 0 号属性1。
Object.assign([1, 2, 3], [4, 5])
// [4, 5, 3]

///////////////////////////

// 由于undefined和null无法转成对象，所以如果它们作为参数，就会报错。
Object.assign(undefined) // 报错
Object.assign(null) // 报错

// 不会报错
let obj = {a: 1};
Object.assign(obj, undefined) === obj // true
Object.assign(obj, null) === obj // true

// 仅仅 string 有效
const v1 = 'abc';
const v2 = true;
const v3 = 10;
const obj = Object.assign({}, v1, v2, v3);
console.log(obj); // { "0": "a", "1": "b", "2": "c" }
```




##### 其他方法

（1）对象属性模型的相关方法

Object.getOwnPropertyDescriptor()：获取某个属性的描述对象。
Object.defineProperty()：通过描述对象，定义某个属性。
Object.defineProperties()：通过描述对象，定义多个属性。

（2）控制对象状态的方法

Object.preventExtensions()：防止对象扩展。
Object.isExtensible()：判断对象是否可扩展。
Object.seal()：禁止对象配置。
Object.isSealed()：判断一个对象是否可配置。
Object.freeze()：冻结一个对象。
Object.isFrozen()：判断一个对象是否被冻结。

（3）原型链相关方法

Object.create()：该方法可以指定原型对象和属性，返回一个新的对象。
Object.getPrototypeOf()：获取对象的 Prototype 对象。

#### Object 的实例方法

除了静态方法，还有不少方法定义在 Object.prototype 对象。它们称为实例方法

见 [Object 对象的相关方法](#Object对象的相关方法)

Object.prototype.valueOf()：返回当前对象对应的值。
Object.prototype.toString()：返回当前对象对应的字符串形式。
Object.prototype.toLocaleString()：返回当前对象对应的本地字符串形式。
Object.prototype.hasOwnProperty()：判断某个属性是否为当前对象自身的属性，还是继承自原型对象的属性。
Object.prototype.isPrototypeOf()：判断当前对象是否为另一个对象的原型。
Object.prototype.propertyIsEnumerable()：判断某个属性是否可枚举。

##### Object.prototype.valueOf()

alueOf 方法的作用是返回一个对象的“值”，默认情况下返回对象本身

```js
var obj = new Object();
obj.valueOf() === obj; // true
```

valueOf 方法的主要用途是，JavaScript 自动类型转换时会默认调用这个方法

##### Object.prototype.toString()

toString 方法的作用是返回一个对象的字符串形式，默认情况下返回类型字符串

```js
var o1 = new Object();
o1.toString(); // "[object Object]"

var o2 = { a: 1 };
o2.toString(); // "[object Object]"
```

数组、字符串、函数、Date 对象都分别部署了自定义的 toString 方法，覆盖了 Object.prototype.toString 方法。

```js
[1, 2, 3].toString(); // "1,2,3"

"123"
    .toString()
    (
        // "123"

        function() {
            return 123;
        }
    )
    .toString()(
        // "function () {
        //   return 123;
        // }"

        new Date()
    )
    .toString();
// "Tue May 10 2016 09:11:31 GMT+0800 (CST)"
```

##### toString()应用：判断数据类型

由于实例对象可能会自定义 toString 方法，覆盖掉 Object.prototype.toString 方法，所以为了得到类型字符串，最好直接使用 Object.prototype.toString 方法。通过函数的 call 方法，可以在任意值上调用这个方法，帮助我们判断这个值的类型。

```js
Object.prototype.toString.call(value); // 对value这个值调用Object.prototype.toString方法。

var obj = {};
obj.toString(); // "[object Object]", object表示类型, Object表表示构造方法
```

不同数据类型的 Object.prototype.toString 方法返回值如下。

数值：返回[object Number]。
字符串：返回[object String]。
布尔值：返回[object Boolean]。
undefined：返回[object Undefined]。
null：返回[object Null]。
数组：返回[object Array]。
arguments 对象：返回[object Arguments]。
函数：返回[object Function]。
Error 对象：返回[object Error]。
Date 对象：返回[object Date]。
RegExp 对象：返回[object RegExp]。
其他对象：返回[object Object]。

用这个特性，可以写出一个比 typeof 运算符更准确的类型判断函数。

```js
var type = function(o) {
    var s = Object.prototype.toString.call(o);
    return s.match(/\[object (.*?)\]/)[1].toLowerCase();
};

type({}); // "object"
type([]); // "array"
type(5); // "number"
type(null); // "null"
type(); // "undefined"
type(/abcd/); // "regex"
type(new Date()); // "date"

// 在上面这个type函数的基础上，还可以加上专门判断某种类型数据的方法。

var type = function(o) {
    var s = Object.prototype.toString.call(o);
    return s.match(/\[object (.*?)\]/)[1].toLowerCase();
};

[
    "Null",
    "Undefined",
    "Object",
    "Array",
    "String",
    "Number",
    "Boolean",
    "Function",
    "RegExp"
].forEach(function(t) {
    type["is" + t] = function(o) {
        return type(o) === t.toLowerCase();
    };
});

type.isObject({}); // true
type.isNumber(NaN); // true
type.isRegExp(/abc/); // true
```

##### Object.prototype.toLocaleString()

返回一个值的字符串形式

```js
var obj = {};
obj.toString(obj); // "[object Object]"
obj.toLocaleString(obj); // "[object Object]"
```

这个方法的主要作用是留出一个接口，让各种不同的对象实现自己版本的 toLocaleString，用来返回针对某些地域的特定的值。目前，主要有三个对象自定义了 toLocaleString 方法。

Array.prototype.toLocaleString()
Number.prototype.toLocaleString()
Date.prototype.toLocaleString()

```js
var date = new Date();
date.toString(); // "Tue Jan 01 2018 12:01:33 GMT+0800 (CST)"
date.toLocaleString(); // "1/01/2018, 12:01:33 PM"
```

##### Object.prototype.hasOwnProperty()

Object.prototype.hasOwnProperty 方法接受一个字符串作为参数，返回一个布尔值，表示该实例对象自身是否具有该属性。

```js
var obj = {
    p: 123
};

obj.hasOwnProperty("p"); // true
obj.hasOwnProperty("toString"); // false
```

### 属性描述对象(attributes object)

JavaScript 提供了一个内部数据结构，用来描述对象的属性，控制它的行为，比如该属性是否可写、可遍历等等。这个内部数据结构称为“属性描述对象”（attributes object）。每个属性都有自己对应的属性描述对象，保存该属性的一些元信息。称为"元属性"

```js
{
  value: 123,           // 该属性的属性值，默认为undefined。
  writable: false,      // 表示属性值（value）是否可改变（即是否可写），默认为true
  enumerable: true,     // 表示该属性是否可遍历，默认为true; 如果设为false，会使得某些操作（比如for...in循环、Object.keys()）跳过该属性。
  configurable: false,  // 示可配置性，默认为true。如果设为false，将阻止某些操作改写该属性，比如无法删除该属性，也不得改变该属性的属性描述对象（value属性除外）。也就是说，configurable属性控制了属性描述对象的可写性。
  get: undefined,       // get是一个函数，表示该属性的取值函数（getter），默认为undefined。
  set: undefined        // set是一个函数，表示该属性的存值函数（setter），默认为undefined。
}
```

#### 元属性

##### value

默认为 undefined。

```js
// value属性是目标属性的值。

var obj = {};
obj.p = 123;

Object.getOwnPropertyDescriptor(obj, "p").value;
// 123

Object.defineProperty(obj, "p", { value: 246 });
obj.p; // 246
```

##### writable

默认为 true

```js
// ritable属性是一个布尔值，决定了目标属性的值（value）是否可以被改变。

var obj = {};

Object.defineProperty(obj, "a", {
    value: 37,
    writable: false
});

obj.a; // 37
obj.a = 25; // 注意，正常模式下，对writable为false的属性赋值不会报错，只会默默失败。但是，严格模式下会报错
obj.a; // 37
```

如果原型对象的某个属性的 writable 为 false，那么子对象将无法自定义这个属性。

```js
var proto = Object.defineProperty({}, "foo", {
    value: "a",
    writable: false
}); // 已经是一个对象了, 这里作为原型

var obj = Object.create(proto); // proto是原型对象，它的foo属性不可写。obj对象继承proto

obj.foo = "b";
obj.foo; // 'a'
```

##### enumerable

enumerable（可遍历性）返回一个布尔值，表示目标属性是否可遍历。

具体来说，如果一个属性的 enumerable 为 false，下面三个操作不会取到该属性。

for..in 循环
Object.keys 方法
JSON.stringify 方法

注意，for...in 循环包括继承的属性，Object.keys 方法不包括继承的属性。如果需要获取对象自身的所有属性，不管是否可遍历，可以使用 Object.getOwnPropertyNames 方法。

SON.stringify 方法会排除 enumerable 为 false 的属性，有时可以利用这一点。如果对象的 JSON 格式输出要排除某些属性，就可以把这些属性的 enumerable 设为 false。

##### configurable

configurable(可配置性）返回一个布尔值，决定了是否可以修改属性描述对象

```js
var obj = Object.defineProperty({}, "p", {
    value: 1,
    writable: false,
    enumerable: false,
    configurable: false
});

Object.defineProperty(obj, "p", { value: 2 }); // 至于value，只要writable和configurable有一个为true，就允许改动。
// TypeError: Cannot redefine property: p

Object.defineProperty(obj, "p", { writable: true });
// TypeError: Cannot redefine property: p

Object.defineProperty(obj, "p", { enumerable: true });
// TypeError: Cannot redefine property: p

Object.defineProperty(obj, "p", { configurable: true }); // 注意，writable只有在false改为true会报错，true改为false是允许的。
// TypeError: Cannot redefine property: p
```

#### 存取器

属性还可以用存取器（accessor）定义。其中，存值函数称为 setter，使用属性描述对象的 set 属性；取值函数称为 getter，使用属性描述对象的 get 属性。

```js
// 可以实现许多高级特性，比如某个属性禁止赋值。

// 取值函数get不能接受参数，存值函数set只能接受一个参数（即属性的值）。
var obj = Object.defineProperty({}, "p", {
    get: function() {
        return "getter";
    },
    set: function(value) {
        console.log("setter: " + value);
    }
});

obj.p; // "getter"
obj.p = 123; // "setter: 123"

// 上面代码中，obj.p定义了get和set属性。obj.p取值时，就会调用get；赋值时，就会调用set。

// ------------------------------

// JavaScript 还提供了存取器的另一种写法。更常用

var obj = {
    get p() {
        return "getter";
    },
    set p(value) {
        console.log("setter: " + value);
    }
};
```

使用场景存取器往往用于，属性的值依赖对象内部数据的场合。

```js
var obj = {
    $n: 5,
    get next() {
        return this.$n++;
    },
    set next(n) {
        if (n >= this.$n) this.$n = n;
        else throw new Error("新的值必须大于当前值");
    }
};

obj.next; // 5

obj.next = 10;
obj.next; // 10

obj.next = 5;
// Uncaught Error: 新的值必须大于当前值
```

#### 对象 copy

```js
// 有时，我们需要将一个对象的所有属性，拷贝到另一个对象，可以用下面的方法实现。但是有一个问题

var extend = function(to, from) {
    for (var property in from) {
        to[property] = from[property];
    }

    return to;
};

extend(
    {},
    {
        a: 1
    }
);
// {a: 1}

// 上面这个方法的问题在于，如果遇到存取器定义的属性，会只拷贝值。

extend(
    {},
    {
        get a() {
            return 1;
        }
    }
);
// {a: 1}

// --------------------

// 为了解决这个问题，我们可以通过Object.defineProperty方法来拷贝属性。

var extend = function(to, from) {
    for (var property in from) {
        if (!from.hasOwnProperty(property)) continue; // hasOwnProperty那一行用来过滤掉继承的属性，否则会报错，因为Object.getOwnPropertyDescriptor读不到继承属性的属性描述对象。
        Object.defineProperty(
            to,
            property,
            Object.getOwnPropertyDescriptor(from, property)
        );
    }

    return to;
};

extend(
    {},
    {
        get a() {
            return 1;
        }
    }
);
// { get a(){ return 1 } })
```

#### 控制对象状态

有时需要冻结对象的读写状态，防止对象被改变。JavaScript 提供了三种冻结方法，最弱的一种是 Object.preventExtensions，其次是 Object.seal，最强的是 Object.freeze。

##### 局限

上面的三个方法锁定对象的可写性有 2 个漏洞：一个是可以通过改变原型对象，来为对象增加属性。

```js
var obj = new Object();
Object.preventExtensions(obj);

var proto = Object.getPrototypeOf(obj);
proto.t = "hello";
obj.t;
// hello
```

一种解决方案是，把 obj 的原型也冻结住。

另外一个局限是，如果属性值是对象，上面这些方法只能冻结属性指向的对象，而不能冻结对象本身的内容。

```js
var obj = {
    foo: 1,
    bar: ["a", "b"]
};
Object.freeze(obj);

obj.bar.push("c");
obj.bar; // ["a", "b", "c"]
```

##### Object.preventExtensions()&Object.isExtensible()

使得一个对象无法再添加新的属性。

```js
var obj = new Object();
Object.preventExtensions(obj);

Object.defineProperty(obj, "p", {
    value: "hello"
});
// TypeError: Cannot define property:p, object is not extensible.

obj.p = 1;
obj.p; // undefined
```

Object.isExtensible 方法用于检查一个对象是否使用了 Object.preventExtensions 方法。也就是说，检查是否可以为一个对象添加属性。

```js
var obj = new Object();

Object.isExtensible(obj); // true
Object.preventExtensions(obj);
Object.isExtensible(obj); // false
```

##### Object.seal()&Object.isSealed()

Object.seal 方法使得一个对象既无法添加新属性，也无法删除旧属性。

Object.seal 实质是把属性描述对象的 configurable 属性设为 false，因此属性描述对象不再能改变了。

Object.seal 只是禁止新增或删除属性，并不影响修改某个属性的值。

```js
var obj = { p: "hello" };
Object.seal(obj);

delete obj.p;
obj.p; // "hello"

obj.x = "world";
obj.x; // undefined
```

Object.isSealed 方法用于检查一个对象是否使用了 Object.seal 方法。

```js
var obj = { p: "a" };

Object.seal(obj);
Object.isSealed(obj); // true

// 这时，Object.isExtensible方法也返回false。

var obj = { p: "a" };

Object.seal(obj);
Object.isExtensible(obj); // false
```

##### Object.freeze()&Object.isFrozen()

Object.freeze 方法可以使得一个对象无法添加新属性、无法删除旧属性、也无法改变属性的值，使得这个对象实际上变成了`常量`。

```js
var obj = {
    p: "hello"
};

Object.freeze(obj);

obj.p = "world";
obj.p; // "hello"

obj.t = "hello";
obj.t; // undefined

delete obj.p; // false
obj.p; // "hello"
```

Object.isFrozen 方法用于检查一个对象是否使用了 Object.freeze 方法。

```js
var obj = {
    p: "hello"
};

Object.freeze(obj);
Object.isFrozen(obj); // true

// ------------------------

// Object.isFrozen的一个用途是，确认某个对象没有被冻结后，再对它的属性赋值。

var obj = {
    p: "hello"
};

Object.freeze(obj);

if (!Object.isFrozen(obj)) {
    // 确认obj没有被冻结后，再对它的属性赋值，就不会报错了。
    obj.p = "world";
}
```

使用 Object.freeze 方法以后，Object.isSealed 将会返回 true，Object.isExtensible 返回 false。

#### Object.getOwnPropertyDescriptor()

Object.getOwnPropertyDescriptor 方法可以获取属性描述对象。它的第一个参数是一个对象，第二个参数是一个字符串，对应该对象的某个属性名。

```js
var obj = { p: "a" };

Object.getOwnPropertyDescriptor(obj, "p");
// Object { value: "a",
//   writable: true,
//   enumerable: true,
//   configurable: true
// }

// 注意，Object.getOwnPropertyDescriptor方法只能用于对象自身的属性，不能用于继承的属性。

var obj = { p: "a" };

Object.getOwnPropertyDescriptor(obj, "toString");
// undefined
```

#### Object.getOwnPropertyNames()

Object.getOwnPropertyNames 方法返回一个数组，成员是参数对象自身的全部属性的属性名，不管该属性是否可遍历。(这跟 Object.keys 的行为不同，Object.keys 只返回对象自身的可遍历属性的全部属性名。)

```js
var obj = Object.defineProperties(
    {},
    {
        p1: { value: 1, enumerable: true },
        p2: { value: 2, enumerable: false }
    }
);

Object.getOwnPropertyNames(obj);
// ["p1", "p2"]
```

#### Object.defineProperty(),Object.defineProperties()

Object.defineProperty 方法接受三个参数，依次如下。

属性所在的对象
属性名（它应该是一个字符串）
属性描述对象

返回一个 object

如果属性已经存在，Object.defineProperty 方法相当于更新该属性的属性描述对象。

```js
var obj = Object.defineProperty({}, "p", {
    value: 123,
    writable: false,
    enumerable: true,
    configurable: false
});

obj.p; // 123

obj.p = 246; // 由于属性描述对象的writable属性为false，所以obj.p属性不可写
obj.p; // 123

// -------------------------------

// 如果一次性定义或修改多个属性，可以使用Object.defineProperties方法。

var obj = Object.defineProperties(
    {},
    {
        p1: { value: 123, enumerable: true },
        p2: { value: "abc", enumerable: true },
        p3: {
            get: function() {
                return this.p1 + this.p2;
            }, // p3属性定义了取值函数get，即每次读取该属性，都会调用这个取值函数。
            enumerable: true,
            configurable: true
        }
    }
);

obj.p1; // 123
obj.p2; // "abc"
obj.p3; // "123abc"

// -----------------------------

// 注意，一旦定义了取值函数get（或存值函数set），就不能将writable属性设为true，或者同时定义value属性，否则会报错。

var obj = {};

Object.defineProperty(obj, "p", {
    value: 123,
    get: function() {
        return 456;
    }
});
// TypeError: Invalid property.
// A property cannot both have accessors and be writable or have a value

Object.defineProperty(obj, "p", {
    writable: true,
    get: function() {
        return 456;
    }
});
// TypeError: Invalid property descriptor.
// Cannot both specify accessors and a value or writable attribute
```

#### Object.prototype.propertyIsEnumerable()

返回一个布尔值，用来判断某个属性是否可遍历。

```js
var obj = {};
obj.p = 123;

obj.propertyIsEnumerable("p"); // true
obj.propertyIsEnumerable("toString"); // false
```

### Array 对象

#### 构造函数

Array 是 JavaScript 的原生对象，同时也是一个构造函数，可以用它生成新的数组。

```js
var arr = new Array(2);
// 等同于
var arr = Array(2);
arr.length; // 2
arr; // [ empty x 2 ]
```

Array 构造函数有一个很大的缺陷，就是不同的参数，会导致它的行为不一致。

因此，不建议使用它生成新数组，直接使用数组字面量是更好的做法。

```js
// bad
var arr = new Array(1, 2);

// good
var arr = [1, 2];
```

#### 静态方法

##### Array.isArray()

表示参数是否为数组。它可以弥补 typeof 运算符的不足

```js
var arr = [1, 2, 3];

typeof arr; // "object"
Array.isArray(arr); // true
```

#### 实例方法

reverse(), splice(), sort() 会改变原来数组

##### valueOf(),toString()

valueOf 方法是一个所有对象都拥有的方法，表示对该对象求值。不同对象的 valueOf 方法不尽一致，数组的 valueOf 方法返回数组本身。

toString 方法也是对象的通用方法，数组的 toString 方法返回数组的字符串形式。

##### push(),pop()

push 方法用于在数组的末端添加一个或多个元素，并返回添加新元素后的数组长度。注意，该方法会改变原数组。

pop 方法用于删除数组的最后一个元素，并返回该元素。注意，该方法会改变原数组。

```js
var arr = [];

arr.push(1) // 1
arr.push('a') // 2
arr.push(true, {}) // 4
arr // [1, 'a', true, {}]

// --------------------------

var arr = ['a', 'b', 'c'];

arr.pop() // 'c'
arr // ['a', 'b']

// ----------------------------

// 对空数组使用pop方法，不会报错，而是返回undefined。

[].pop() // undefined

// ------------------------------

// push和pop结合使用，就构成了“后进先出”的栈结构（stack）。

var arr = [];
arr.push(1, 2);
arr.push(3);
arr.pop();
arr // [1, 2]
```

##### shift(),unshift()

shift 方法用于删除数组的第一个元素，并返回该元素。注意，该方法会改变原数组。
unshift 方法用于在数组的第一个位置添加元素，并返回添加新元素后的数组长度。注意，该方法会改变原数组。

```js
var a = ["a", "b", "c"];

a.shift(); // 'a'
a; // ['b', 'c']

// ----------------------------

// shift方法可以遍历并清空一个数组。

var list = [1, 2, 3, 4, 5, 6];
var item;

while ((item = list.shift())) {
    console.log(item);
}

list; // []

// ----------------------------

// push和shift结合使用，就构成了“先进先出”的队列结构（queue）。

// ----------------------------

var a = ["a", "b", "c"];

a.unshift("x"); // 4
a; // ['x', 'a', 'b', 'c']

// ---------------------------

// unshift方法可以接受多个参数，这些参数都会添加到目标数组头部。

var arr = ["c", "d"];
arr.unshift("a", "b"); // 4
arr; // [ 'a', 'b', 'c', 'd' ]
```

##### join()

join 方法以指定参数作为分隔符，将所有数组成员连接为一个字符串返回。如果不提供参数，默认用逗号分隔。

```js
var a = [1, 2, 3, 4];

a.join(' ') // '1 2 3 4'
a.join(' | ') // "1 | 2 | 3 | 4"
a.join() // "1,2,3,4"

// -------------------------------

// 如果数组成员是undefined或null或空位，会被转成空字符串。

[undefined, null].join('#')
// '#'

['a',, 'b'].join('-')
// 'a--b'

// ----------------------------

// 通过call方法，这个方法也可以用于字符串或类似数组的对象。

Array.prototype.join.call('hello', '-')
// "h-e-l-l-o"

var obj = { 0: 'a', 1: 'b', length: 2 };
Array.prototype.join.call(obj, '-')
// 'a-b'
```

##### concat()

concat 方法用于多个数组的合并。它将新数组的成员，添加到原数组成员的后部，然后返回一个新数组，原数组不变。

```js
['hello'].concat(['world'])
// ["hello", "world"]

['hello'].concat(['world'], ['!'])
// ["hello", "world", "!"]

[].concat({a: 1}, {b: 2})
// [{ a: 1 }, { b: 2 }]

[2].concat({a: 1})
// [2, {a: 1}]

// 除了数组作为参数，concat也接受其他类型的值作为参数，添加到目标数组尾部。

[1, 2, 3].concat(4, 5, 6)
// [1, 2, 3, 4, 5, 6]

// -------------------------------

// 如果数组成员包括对象，concat方法返回当前数组的一个浅拷贝。所谓“浅拷贝”，指的是新数组拷贝的是对象的引用。

var obj = { a: 1 };
var oldArray = [obj];

var newArray = oldArray.concat();

obj.a = 2;
newArray[0].a // 2
//上面代码中，原数组包含一个对象，concat方法生成的新数组包含这个对象的引用。所以，改变原对象以后，新数组跟着改变。
```

##### reverse()

reverse 方法用于颠倒排列数组元素，返回改变后的数组。注意，该方法将改变原数组。(也就是没有返回值, 直接在原来数据上改动)

```js
var a = ["a", "b", "c"];

a.reverse(); // ["c", "b", "a"]
a; // ["c", "b", "a"]
```

##### slice()

slice 方法用于提取目标数组的一部分，返回一个新数组，原数组不变。

它的第一个参数为起始位置（从 0 开始），第二个参数为终止位置（但该位置的元素本身不包括在内, 包头不包尾）。如果省略第二个参数，则一直返回到原数组的最后一个成员。

```js
var a = ["a", "b", "c"];

a.slice(0); // ["a", "b", "c"]
a.slice(1); // ["b", "c"]
a.slice(1, 2); // ["b"]
a.slice(2, 6); // ["c"]
a.slice(); // ["a", "b", "c"], 实际上等于返回一个原数组的拷贝。

// ----------------------------------

// 如果slice方法的参数是负数，则表示倒数计算的位置。

var a = ["a", "b", "c"];
a.slice(-2); // ["b", "c"]
a.slice(-2, -1); // ["b"]
// -2表示倒数计算的第二个位置，-1表示倒数计算的第一个位置。

// ----------------------------------0.0314E

// slice方法的一个重要应用，是将类似数组的对象转为真正的数组。

Array.prototype.slice.call({ 0: "a", 1: "b", length: 2 });
// ['a', 'b']

Array.prototype.slice.call(document.querySelectorAll("div"));
Array.prototype.slice.call(arguments);
```

##### splice()

splice 方法用于删除原数组的一部分成员，并可以在删除的位置添加新的数组成员，返回值是被删除的元素。注意，该方法会改变原数组。

`arr.splice(start, count, addElement1, addElement2, ...);`

splice 的第一个参数是删除的起始位置（从 0 开始），第二个参数是被删除的元素个数。如果后面还有更多的参数，则表示这些就是要被插入数组的新元素。

##### sort()

sort 方法对数组成员进行排序，默认是按照字典顺序排序。排序后，原数组将被改变

sort 方法不是按照大小排序，而是按照字典顺序。也就是说，数值会被先转成字符串，再按照字典顺序进行比较，所以 101 排在 11 的前面。

如果想让 sort 方法按照自定义方式排序，可以传入一个函数作为参数

```js
[10111, 1101, 111].sort(function(a, b) {
    return a - b;
});
// [111, 1101, 10111]
// 如果该函数的返回值大于0，表示第一个成员排在第二个成员后面；其他情况下，都是第一个元素排在第二个元素前面。
```

##### map()

map 方法将数组的所有成员依次传入参数函数，然后把每一次的执行结果组成一个新数组返回, 不改变原数组

对于参数函数, map 方法向它传入三个参数：当前成员、当前位置和数组本身。

map 方法还可以接受第二个参数，用来绑定回调函数内部的 this 变量

```js
var numbers = [1, 2, 3];

numbers.map(function (n) {
  return n + 1;
});
// [2, 3, 4]

numbers
// [1, 2, 3]

// ----------------------------

// map方法接受一个函数作为参数。该函数调用时，map方法向它传入三个参数：当前成员、当前位置和数组本身。

[1, 2, 3].map(function(elem, index, arr) {
  return elem * index;
});
// [0, 2, 6]

// -------------------------------

// 绑定回调函数内部的this变量

var arr = ['a', 'b', 'c'];

[1, 2].map(function (e) {
  return this[e];
}, arr)
// ['b', 'c']

// -----------------------------

// 如果数组有空位，map方法的回调函数在这个位置不会执行，会跳过数组的空位。

var f = function (n) { return 'a' };

[1, undefined, 2].map(f) // ["a", "a", "a"]
[1, null, 2].map(f) // ["a", "a", "a"]
[1, , 2].map(f) // ["a", , "a"]
// 上面代码中，map方法不会跳过undefined和null，但是会跳过空位。
```

##### forEach()

forEach 方法与 map 方法很相似，也是对数组的所有成员依次执行参数函数。但是，forEach 方法不返回值

forEach 方法也可以接受第二个参数，绑定参数函数的 this 变量。

forEach 方法也会跳过数组的空位。

```js
function log(element, index, array) {
    console.log("[" + index + "] = " + element);
}

[2, 5, 9].forEach(log);
// [0] = 2
// [1] = 5
// [2] = 9

// ----------------------------

// 绑定参数函数的this变量。
var out = [];

[1, 2, 3].forEach(function(elem) {
    this.push(elem * elem);
}, out);

out; // [1, 4, 9]
```

##### filter()

filter 方法用于过滤数组成员，满足条件的成员组成一个新数组返回。

它的参数是一个函数，所有数组成员依次执行该函数，返回结果为 true 的成员组成一个新数组返回。该方法不会改变原数组。

filter 方法的参数函数可以接受三个参数：当前成员，当前位置和整个数组。

filter 方法还可以接受第二个参数，用来绑定参数函数内部的 this 变量。

```js
[1, 2, 3, 4, 5].filter(function(elem) {
    return elem > 3;
});
// [4, 5]

// -----------------------------

var arr = [0, 1, "a", false];

arr.filter(Boolean); // filter方法返回数组arr里面所有布尔值为true的成员。
// [1, "a"]
```

##### some(),every()

这两个方法类似“断言”（assert），返回一个布尔值，表示判断数组成员是否符合某种条件。

它们接受一个函数作为参数，所有数组成员依次执行该函数。该函数接受三个参数：当前成员、当前位置和整个数组，然后返回一个布尔值。

some 和 every 方法还可以接受第二个参数，用来绑定参数函数内部的 this 变量。

some 方法是只要一个成员的返回值是 true，则整个 some 方法的返回值就是 true，否则返回 false。

every 方法是所有成员的返回值都是 true，整个 every 方法才返回 true，否则返回 false。

注意，对于空数组，some 方法返回 false，every 方法返回 true，回调函数都不会执行。

```js
var arr = [1, 2, 3, 4, 5];
arr.some(function (elem, index, arr) {
  return elem >= 3;
});
// true

// --------------------------------

var arr = [1, 2, 3, 4, 5];
arr.every(function (elem, index, arr) {
  return elem >= 3;
});
// false

// ---------------------------------

function isEven(x) { return x % 2 === 0 }

[].some(isEven) // false
[].every(isEven) // true
```

##### reduce(),reduceRight()

reduce 方法和 reduceRight 方法依次处理数组的每个成员，最终累计为一个值。它们的差别是，reduce 是从左到右处理（从第一个成员到最后一个成员），reduceRight 则是从右到左（从最后一个成员到第一个成员）

reduce 方法和 reduceRight 方法的:

第一个参数都是一个函数。该函数接受以下四个参数。

累积变量，默认为数组的第一个成员
当前变量，默认为数组的第二个成员
当前位置（从 0 开始） - 可选
原数组 - 可选

第二个参数 - 对累积变量指定初值(相当于设定了默认值，处理空数组时尤其有用)

```js
[1, 2, 3, 4, 5]
    .reduce(function(a, b) {
        console.log(a, b);
        return a + b;
    })
    [
        // 1 2
        // 3 3
        // 6 4
        // 10 5
        //最后结果：15

        // ----------------------------

        (1, 2, 3, 4, 5)
    ].reduce(function(a, b) {
        return a + b;
    }, 10);
// 25

// ------------------------------

// 由于这两个方法会遍历数组，所以实际上还可以用来做一些遍历相关的操作。比如，找出字符长度最长的数组成员。

function findLongest(entries) {
    return entries.reduce(function(longest, entry) {
        return entry.length > longest.length ? entry : longest;
    }, "");
}

findLongest(["aaa", "bb", "c"]); // "aaa"
```

##### indexOf(),lastIndexOf()

indexOf 方法返回给定元素在数组中第一次出现的位置，如果没有出现则返回-1 .(indexOf 方法还可以接受第二个参数，表示搜索的开始位置。)

lastIndexOf 方法返回给定元素在数组中最后一次出现的位置，如果没有出现则返回-1。

### String 对象

#### 定义

String 对象是 JavaScript 原生提供的三个包装对象之一，用来生成字符串对象

```js
var s1 = "abc";
var s2 = new String("abc");

typeof s1; // "string"
typeof s2; // "object"

s2.valueOf(); // "abc"

// ---------------------------------

// 字符串对象是一个类似数组的对象（很像数组，但不是数组）。

new String("abc")(
    // String {0: "a", 1: "b", 2: "c", length: 3}

    new String("abc")
)[1]; // "b"

// ----------------------------------------

// 除了用作构造函数，String对象还可以当作工具方法使用，将任意类型的值转为字符串。

String(true); // "true"
String(5); // "5"
```

#### 静态方法

##### String.fromCharCode()

该方法的参数是一个或多个数值，代表 Unicode 码点，返回值是这些码点组成的字符串。

```js
String.fromCharCode(); // ""
String.fromCharCode(97); // "a"
String.fromCharCode(104, 101, 108, 108, 111);
// "hello"

// ----------------------------------------

// 注意，该方法不支持 Unicode 码点大于0xFFFF的字符，即传入的参数不能大于0xFFFF（即十进制的 65535）。

String.fromCharCode(0x20bb7);
// "ஷ"
String.fromCharCode(0x20bb7) === String.fromCharCode(0x0bb7);
// true
// 这种现象的根本原因在于，码点大于0xFFFF的字符占用四个字节，而 JavaScript 默认支持两个字节的字符。这种情况下，必须把0x20BB7拆成两个字符表示
String.fromCharCode(0xd842, 0xdfb7);
// "𠮷"
```

#### 实例属性

##### String.prototype.length

字符串实例的 length 属性返回字符串的长度。

#### 实例方法

##### String.prototype.charAt()

charAt 方法返回指定位置的字符，参数是从 0 开始编号的位置

```js
var s = new String("abc");

s.charAt(1); // "b"
s.charAt(s.length - 1); // "c"

// 这个方法完全可以用数组下标替代。

"abc".charAt(1); // "b"
"abc"[1]; // "b"

// 如果参数为负数，或大于等于字符串的长度，charAt返回空字符串。

"abc".charAt(-1); // ""
"abc".charAt(3); // ""
```

##### String.prototype.charCodeAt()

charCodeAt 方法返回字符串指定位置的 Unicode 码点（十进制表示），相当于 String.fromCharCode()的逆操作。

```js
"abc".charCodeAt(1); // 98

// 如果没有任何参数，charCodeAt返回首字符的 Unicode 码点。

"abc".charCodeAt(); // 97

// 注意，charCodeAt方法返回的 Unicode 码点不会大于65536（0xFFFF），也就是说，只返回两个字节的字符的码点。如果遇到码点大于 65536 的字符（四个字节的字符），必需连续使用两次charCodeAt，不仅读入charCodeAt(i)，还要读入charCodeAt(i+1)，将两个值放在一起，才能得到准确的字符。
```

##### String.prototype.concat()

```js
// concat方法用于连接两个字符串，返回一个新字符串，不改变原字符串。

var s1 = "abc";
var s2 = "def";

s1.concat(s2); // "abcdef"
s1; // "abc"

// -------------------------

//该方法可以接受多个参数。

"a".concat("b", "c"); // "abc"

// ----------------------------------

// 如果参数不是字符串，concat方法会将其先转为字符串，然后再连接。

var one = 1;
var two = 2;
var three = "3";

"".concat(one, two, three); // "123"
one + two + three; // "33"
```

##### String.prototype.slice(),String.prototype.substring(),String.prototype.substr()

-   和数组类似, slice 方法用于从原字符串取出子字符串并返回，不改变原字符串。

    它的第一个参数是子字符串的开始位置，第二个参数是子字符串的结束位置（不含该位置）

-   substring 方法用于从原字符串取出子字符串并返回，不改变原字符串，跟 slice 方法很相像。它的第一个参数表示子字符串的开始位置，第二个位置表示结束位置（返回结果不含该位置）。

    不建议使用 substring 方法，应该优先使用 slice

-   substr 方法用于从原字符串取出子字符串并返回，不改变原字符串，跟 slice 和 substring 方法的作用相同。

##### String.prototype.indexOf(),String.prototype.lastIndexOf()

同数组对应的方法

##### String.prototype.trim()

trim 方法用于去除字符串两端的空格，返回一个新字符串，不改变原字符串

##### String.prototype.toLowerCase(),String.prototype.toUpperCase()

toLowerCase 方法用于将一个字符串全部转为小写，toUpperCase 则是全部转为大写。它们都返回一个新字符串，不改变原字符串。

##### String.prototype.match(),String.prototype.search()

```js
// match方法用于确定原字符串是否匹配某个子字符串，返回一个数组，成员为匹配的第一个字符串。如果没有找到匹配，则返回null。

"cat, bat, sat, fat".match("at"); // ["at"]
"cat, bat, sat, fat".match("xt"); // null

// 返回的数组还有index属性和input属性，分别表示匹配字符串开始的位置和原始字符串。

var matches = "cat, bat, sat, fat".match("at");
matches.index; // 1
matches.input; // "cat, bat, sat, fat"

// ------------------------------------

// search方法的用法基本等同于match，但是返回值为匹配的第一个位置。如果没有找到匹配，则返回-1。

"cat, bat, sat, fat".search("at"); // 1
```

##### String.prototype.replace()

replace 方法用于替换匹配的子字符串，一般情况下只替换第一个匹配（除非使用带有 g 修饰符的正则表达式）。

```js
"aaa".replace("a", "b"); // "baa"
```

##### String.prototype.split()

split 方法按照给定规则分割字符串，返回一个由分割出来的子字符串组成的数组。

```js
"a||c".split("|"); // ['a', '', 'c']
"|b|c".split("|"); // ["", "b", "c"]
"a|b|".split("|"); // ["a", "b", ""]

// split方法还可以接受第二个参数，限定返回数组的最大成员数。

"a|b|c".split("|", 0); // []
"a|b|c".split("|", 1); // ["a"]
"a|b|c".split("|", 2); // ["a", "b"]
"a|b|c".split("|", 3); // ["a", "b", "c"]
"a|b|c".split("|", 4); // ["a", "b", "c"]
```

##### String.prototype.localeCompare()

localeCompare 方法用于比较两个字符串。它返回一个整数，如果小于 0，表示第一个字符串小于第二个字符串；如果等于 0，表示两者相等；如果大于 0，表示第一个字符串大于第二个字符串。

### Math 对象

#### 静态属性

Math 对象的静态属性，提供以下一些数学常数。

Math.E：常数 e。
Math.LN2：2 的自然对数。
Math.LN10：10 的自然对数。
Math.LOG2E：以 2 为底的 e 的对数。
Math.LOG10E：以 10 为底的 e 的对数。
Math.PI：常数 Pi。
Math.SQRT1_2：0.5 的平方根。
Math.SQRT2：2 的平方根。

这些属性都是只读的，不能修改

#### 静态方法

Math 对象提供以下一些静态方法。

Math.abs()：绝对值
Math.ceil()：向上取整
Math.floor()：向下取整
Math.max()：最大值
Math.min()：最小值
Math.pow()：指数运算
Math.sqrt()：平方根
Math.log()：自然对数
Math.exp()：e 的指数
Math.round()：四舍五入
Math.random()：随机数

```js
// Math.abs方法返回参数值的绝对值。

Math.abs(1); // 1
Math.abs(-1); // 1

// -----------------

// Math.max方法返回参数之中最大的那个值，Math.min返回最小的那个值。如果参数为空, Math.min返回Infinity, Math.max返回-Infinity。

Math.max(2, -1, 5); // 5
Math.min(2, -1, 5); // -1
Math.min(); // Infinity
Math.max(); // -Infinity

// -----------------

// Math.floor方法返回小于参数值的最大整数（地板值）。

Math.floor(3.2); // 3
Math.floor(-3.2); // -4

// Math.ceil方法返回大于参数值的最小整数（天花板值）。

Math.ceil(3.2); // 4
Math.ceil(-3.2); // -3

//这两个方法可以结合起来，实现一个总是返回数值的整数部分的函数。

function ToInteger(x) {
    x = Number(x);
    return x < 0 ? Math.ceil(x) : Math.floor(x);
}

ToInteger(3.2); // 3
ToInteger(3.5); // 3
ToInteger(3.8); // 3
ToInteger(-3.2); // -3
ToInteger(-3.5); // -3
ToInteger(-3.8); // -3

// ---------------

//Math.round方法用于四舍五入。

Math.round(0.1); // 0
Math.round(0.5); // 1
Math.round(0.6); // 1
Math.round(-1.1); // -1
Math.round(-1.5); // -1
Math.round(-1.6); // -2

// 等同于
Math.floor(x + 0.5);

//--------------------

//Math.pow方法返回以第一个参数为底数、第二个参数为幂的指数值。
// 计算圆面积: Math.PI * Math.pow(radius, 2);

// 等同于 2 ** 2
Math.pow(2, 2); // 4
// 等同于 2 ** 3
Math.pow(2, 3); // 8

// -------------

// Math.sqrt方法返回参数值的平方根。如果参数是一个负值，则返回NaN。

Math.sqrt(4); // 2
Math.sqrt(-4); // NaN

// --------------

// Math.log方法返回以e为底的自然对数值。

Math.log(Math.E); // 1
Math.log(10); // 2.302585092994046

// 如果要计算以10为底的对数，可以先用Math.log求出自然对数，然后除以Math.LN10；求以2为底的对数，可以除以Math.LN2。

Math.log(100) / Math.LN10; // 2
Math.log(8) / Math.LN2; // 3

//-----------------

//Math.exp方法返回常数e的参数次方。

Math.exp(1); // 2.718281828459045
Math.exp(3); // 20.085536923187668

//-------------------

// Math.random()返回0到1之间的一个伪随机数，可能等于0，但是一定小于1。 [0, 1)

Math.random(); // 0.7151307314634323

// 任意范围的随机数生成函数如下。

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

getRandomArbitrary(1.5, 6.5);
// 2.4942810038223864

// 任意范围的随机整数生成函数如下。

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandomInt(1, 6); // 5

// 返回随机字符的例子如下。

function random_str(length) {
    var ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    ALPHABET += "abcdefghijklmnopqrstuvwxyz";
    ALPHABET += "0123456789-_";
    var str = "";
    for (var i = 0; i < length; ++i) {
        var rand = Math.floor(Math.random() * ALPHABET.length);
        str += ALPHABET.substring(rand, rand + 1);
    }
    return str;
}

random_str(6); // "NdQKOr"

//----------------------
```

### Date 对象

Date 对象是 JavaScript 原生的时间库。它以 1970 年 1 月 1 日 00:00:00 作为时间的零点，可以表示的时间范围是前后各 1 亿天（单位为毫秒）

#### Date()

##### 作为普通函数

```js
// Date对象可以作为普通函数直接调用，返回一个代表当前时间的字符串。

// 此时无需参数, 即使传入参数, 也无效, 仍然返回当前时间

Date();
// "Tue Dec 01 2015 09:34:43 GMT+0800 (CST)"
```

##### 作为构造函数

```js
// 对它使用new命令，会返回一个Date对象的实例。如果不加参数，实例代表的就是当前时间。

var today = new Date();

// 其他对象求值的时候，都是默认调用.valueOf()方法，但是Date实例求值的时候，默认调用的是toString()方法

today;
// "Tue Dec 01 2015 09:34:43 GMT+0800 (CST)"

// 等同于
today.toString();
// "Tue Dec 01 2015 09:34:43 GMT+0800 (CST)"

// =========================================

// 作为构造函数时，Date对象可以接受多种格式的参数，返回一个该参数对应的时间实例。

// 参数为时间零点开始计算的毫秒数
new Date(1378218728000);
// Tue Sep 03 2013 22:32:08 GMT+0800 (CST)

// 参数为日期字符串
new Date("January 6, 2013");
// Sun Jan 06 2013 00:00:00 GMT+0800 (CST)

// 参数为多个整数，
// 参数为年、月、日等多个整数时，年和月是不能省略的，其他参数都可以省略的。也就是说，这时至少需要两个参数，因为如果只使用“年”这一个参数，Date会将其解释为毫秒数。

// 代表年、月、日、小时、分钟、秒、毫秒

new Date(2013, 0, 1, 0, 0, 0, 0);
// Tue Jan 01 2013 00:00:00 GMT+0800 (CST)

// 参数可以是负整数，代表1970年元旦之前的时间。

new Date(-1378218728000);
// Fri Apr 30 1926 17:27:52 GMT+0800 (CST)

// 只要是能被Date.parse()方法解析的字符串，都可以当作参数。

new Date("2013-2-15");
new Date("2013/2/15");
new Date("02/15/2013");
new Date("2013-FEB-15");
new Date("FEB, 15, 2013");
new Date("FEB 15, 2013");
new Date("Feberuary, 15, 2013");
new Date("Feberuary 15, 2013");
new Date("15 Feb 2013");
new Date("15, Feberuary, 2013");
// Fri Feb 15 2013 00:00:00 GMT+0800 (CST)
```

#### 日期运算

```js
// Date实例如果转为数值，则等于对应的毫秒数；如果转为字符串，则等于对应的日期字符串

// 两个日期实例对象进行减法运算时，返回的是它们间隔的毫秒数；进行加法运算时，返回的是两个字符串连接而成的新字符串。

var d1 = new Date(2000, 2, 1);
var d2 = new Date(2000, 3, 1);

d2 - d1;
// 2678400000
d2 + d1;
// "Sat Apr 01 2000 00:00:00 GMT+0800 (CST)Wed Mar 01 2000 00:00:00 GMT+0800 (CST)"
```

#### 静态方法

##### Date.now()

```js
// Date.now方法返回当前时间距离时间零点（1970年1月1日 00:00:00 UTC）的毫秒数，相当于 Unix 时间戳乘以1000。

Date.now(); // 1364026285194
```

##### Date.parse()

```js
// Date.parse方法用来解析日期字符串，返回该时间距离时间零点（1970年1月1日 00:00:00）的毫秒数。

// 日期字符串应该符合 RFC 2822 和 ISO 8061 这两个标准，即YYYY-MM-DDTHH:mm:ss.sssZ格式，其中最后的Z表示时区。但是，其他格式也可以被解析，请看下面的例子。

Date.parse("Aug 9, 1995");
Date.parse("January 26, 2011 13:51:50");
Date.parse("Mon, 25 Dec 1995 13:30:00 GMT");
Date.parse("Mon, 25 Dec 1995 13:30:00 +0430");
Date.parse("2011-10-10");
Date.parse("2011-10-10T14:48:00");

// 如果解析失败，返回NaN。

Date.parse("xxx"); // NaN
```

##### Date.UTC()

```js
// Date.UTC方法接受年、月、日等变量作为参数，返回该时间距离时间零点（1970年1月1日 00:00:00 UTC）的毫秒数。

// 格式
Date.UTC(year, month[, date[, hrs[, min[, sec[, ms]]]]])

// 用法
Date.UTC(2011, 0, 1, 2, 3, 4, 567)
// 1293847384567
// 该方法的参数用法与Date构造函数完全一致，比如月从0开始计算，日期从1开始计算。区别在于Date.UTC方法的参数，会被解释为 UTC 时间（世界标准时间），Date构造函数的参数会被解释为当前时区的时间。
```

#### 实例方法

Date 的实例对象，有几十个自己的方法，除了 valueOf 和 toString，可以分为以下三类。

to 类：从 Date 对象返回一个字符串，表示指定的时间。
get 类：获取 Date 对象的日期和时间。
set 类：设置 Date 对象的日期和时间。

##### Date.prototype.valueOf()

```js
// valueOf方法返回实例对象距离时间零点（1970年1月1日00:00:00 UTC）对应的毫秒数，该方法等同于getTime方法。

var d = new Date();

d.valueOf(); // 1362790014817
d.getTime(); // 1362790014817

// 预期为数值的场合，Date实例会自动调用该方法，所以可以用下面的方法计算时间的间隔。

var start = new Date();
// ...
var end = new Date();
var elapsed = end - start;
```

##### Date.prototype.toString()

```js
// toString方法返回一个完整的日期字符串。

var d = new Date(2013, 0, 1);

d.toString();
// "Tue Jan 01 2013 00:00:00 GMT+0800 (CST)"
d;
// "Tue Jan 01 2013 00:00:00 GMT+0800 (CST)"
// 因为toString是默认的调用方法，所以如果直接读取Date实例，就相当于调用这个方法。
```

##### Date.prototype.toUTCString()

```js
// toUTCString方法返回对应的 UTC 时间，也就是比北京时间晚8个小时。

var d = new Date(2013, 0, 1);

d.toUTCString();
// "Mon, 31 Dec 2012 16:00:00 GMT"
```

##### Date.prototype.toISOString()

```js
// toISOString方法返回对应时间的 ISO8601 写法。

// 注意，toISOString方法返回的总是 UTC 时区的时间。

var d = new Date(2013, 0, 1);

d.toISOString();
// "2012-12-31T16:00:00.000Z"
```

##### Date.prototype.toJSON()

```js
// toJSON方法返回一个符合 JSON 格式的 ISO 日期字符串，与toISOString方法的返回结果完全相同。

var d = new Date(2013, 0, 1);

d.toJSON();
// "2012-12-31T16:00:00.000Z"
```

##### Date.prototype.toDateString()

```js
// toDateString方法返回日期字符串（不含小时、分和秒）。

var d = new Date(2013, 0, 1);
d.toDateString(); // "Tue Jan 01 2013"
```

##### Date.prototype.toTimeString()

```js
// toTimeString方法返回时间字符串（不含年月日）。

var d = new Date(2013, 0, 1);
d.toTimeString(); // "00:00:00 GMT+0800 (CST)"
```

##### Date.prototype.toLocaleDateString()

```js
// toLocaleDateString方法返回一个字符串，代表日期的当地写法（不含小时、分和秒）。

var d = new Date(2013, 0, 1);

d.toLocaleDateString();
// 中文版浏览器为"2013年1月1日"
// 英文版浏览器为"1/1/2013"
```

##### Date.prototype.toLocaleTimeString()

```js
// toLocaleTimeString方法返回一个字符串，代表时间的当地写法（不含年月日）。

var d = new Date(2013, 0, 1);

d.toLocaleTimeString();
// 中文版浏览器为"上午12:00:00"
// 英文版浏览器为"12:00:00 AM"
```

##### get 类方法

Date 对象提供了一系列 get\*方法，用来获取实例对象某个方面的值。

getTime()：返回实例距离 1970 年 1 月 1 日 00:00:00 的毫秒数，等同于 valueOf 方法。
getDate()：返回实例对象对应每个月的几号（从 1 开始）。
getDay()：返回星期几，星期日为 0，星期一为 1，以此类推。
getYear()：返回距离 1900 的年数。
getFullYear()：返回四位的年份。
getMonth()：返回月份（0 表示 1 月，11 表示 12 月）。
getHours()：返回小时（0-23）。
getMilliseconds()：返回毫秒（0-999）。
getMinutes()：返回分钟（0-59）。
getSeconds()：返回秒（0-59）。
getTimezoneOffset()：返回当前时间与 UTC 的时区差异，以分钟表示，返回结果考虑到了夏令时因素。

所有这些 get\*方法返回的都是整数，不同方法返回值的范围不一样。

分钟和秒：0 到 59
小时：0 到 23
星期：0（星期天）到 6（星期六）
日期：1 到 31
月份：0（一月）到 11（十二月）
年份：距离 1900 年的年数

```js
// 计算本年度还剩下多少天。

function leftDays() {
    var today = new Date();
    var endYear = new Date(today.getFullYear(), 11, 31, 23, 59, 59, 999);
    var msPerDay = 24 * 60 * 60 * 1000;
    return Math.round((endYear.getTime() - today.getTime()) / msPerDay);
}
```

上面这些 get\*方法返回的都是当前时区的时间，Date 对象还提供了这些方法对应的 UTC 版本，用来返回 UTC 时间。

getUTCDate()
getUTCFullYear()
getUTCMonth()
getUTCDay()
getUTCHours()
getUTCMinutes()
getUTCSeconds()
getUTCMilliseconds()

##### set 类方法

Date 对象提供了一系列 set\*方法，用来设置实例对象的各个方面。

setDate(date)：设置实例对象对应的每个月的几号（1-31），返回改变后毫秒时间戳。
setYear(year): 设置距离 1900 年的年数。
setFullYear(year [, month, date])：设置四位年份。
setHours(hour [, min, sec, ms])：设置小时（0-23）。
setMilliseconds()：设置毫秒（0-999）。
setMinutes(min [, sec, ms])：设置分钟（0-59）。
setMonth(month [, date])：设置月份（0-11）。
setSeconds(sec [, ms])：设置秒（0-59）。
setTime(milliseconds)：设置毫秒时间戳。

```js
// set类方法和get类方法，可以结合使用，得到相对时间。

var d = new Date();

// 将日期向后推1000天
d.setDate(d.getDate() + 1000);
// 将时间设为6小时后
d.setHours(d.getHours() + 6);
// 将年份设为去年
d.setFullYear(d.getFullYear() - 1);
```

### Regex 对象

==> {% post_link 正则表达式-js 📚 js中的正则 %} <==

#### regex 定义

```js
// 新建正则表达式有两种方法。一种是使用字面量，以斜杠表示开始和结束。---推荐

var regex = /xyz/;

// 另一种是使用RegExp构造函数。

var regex = new RegExp("xyz");

// 它们的主要区别是，第一种方法在引擎编译代码时，就会新建正则表达式，第二种方法在运行时新建正则表达式，所以前者的效率较高。而且，前者比较便利和直观

// =====================

// 设定修饰符

var regex = new RegExp("xyz", "i");
// 等价于
var regex = /xyz/i;
```

#### 实例属性

正则对象的实例属性分成两类。

一类是修饰符相关，返回一个布尔值，表示对应的修饰符是否设置。三个属性都是只读的

RegExp.prototype.ignoreCase：返回一个布尔值，表示是否设置了 i 修饰符。
RegExp.prototype.global：返回一个布尔值，表示是否设置了 g 修饰符。
RegExp.prototype.multiline：返回一个布尔值，表示是否设置了 m 修饰符。

另一类是与修饰符无关的属性，主要是下面两个。

RegExp.prototype.lastIndex：返回一个整数，表示下一次开始搜索的位置。该属性可读写，但是只在进行连续搜索时有意义
RegExp.prototype.source：返回正则表达式的字符串形式（不包括反斜杠），该属性只读。

```js
var r = /abc/gim;

r.ignoreCase; // true
r.global; // true
r.multiline; // true
r.lastIndex; // 0
r.source; // "abc"
```

#### 实例方法

##### RegExp.prototype.test()

```js
// 正则实例对象的test方法返回一个布尔值，表示当前模式是否能匹配参数字符串。

/cat/.test("cats and dogs"); // true

// =====================

// 如果正则表达式带有g修饰符，则每一次test方法都从上一次结束的位置开始向后匹配。

// g表示是全局搜索，会有多个结果

// 带有g修饰符时，可以通过正则对象的lastIndex属性指定开始搜索的位置

var r = /x/g;
var s = "_x_x";

r.lastIndex; // 0
r.test(s); // true

r.lastIndex; // 2
r.test(s); // true

r.lastIndex; // 4
r.test(s); // false

// ==============================

// 带有g修饰符时，正则表达式内部会记住上一次的lastIndex属性，这时不应该更换所要匹配的字符串，否则会有一些难以察觉的错误

var r = /bb/g;
r.test("bb"); // true
r.test("-bb-"); // false  - 由于正则表达式r是从上一次的lastIndex位置开始匹配，导致第二次执行test方法时出现预期以外的结果。

// ==============================

// lastIndex属性只对同一个正则表达式有效，所以下面这样写是错误的。

var count = 0;
while (/a/g.test("babaa")) count++;
// 上面代码会导致无限循环，因为while循环的每次匹配条件都是一个新的正则表达式，导致lastIndex属性总是等于0。

// =========================

// 如果正则模式是一个空字符串，则匹配所有字符串。

new RegExp("").test("abc");
// true
```

##### RegExp.prototype.exec()

用来返回匹配结果。如果发现匹配，就返回一个数组，成员是匹配成功的子字符串，否则返回 null

```js
var s = "_x_x";
var r1 = /x/;
var r2 = /y/;

r1.exec(s); // ["x"]
r2.exec(s); // null

// =======================

// 如果正则表示式包含圆括号（即含有“组匹配”），则返回的数组会包括多个成员。

// 第一个成员是整个匹配成功的结果，后面的成员就是圆括号对应的匹配成功的组。也就是说，第二个成员对应第一个括号，第三个成员对应第二个括号，以此类推。整个数组的length属性等于组匹配的数量再加1。

var s = "_x_x";
var r = /_(x)/;

r.exec(s); // ["_x", "x"]
// 上面代码的exec方法，返回一个数组。第一个成员是整个匹配的结果，第二个成员是圆括号匹配的结果

// ===========================

/*
exec方法的返回数组还包含以下两个属性：

      input：整个原字符串。
      index：整个模式匹配成功的开始位置（从0开始计数）
*/

var r = /a(b+)a/;
var arr = r.exec("_abbba_aba_");

arr; // ["abbba", "bbb"]

arr.input; // "_abbba_aba_"
arr.index; // 1

// ================================

// 如果正则表达式加上g修饰符，则可以使用多次exec方法，下一次搜索的位置从上一次匹配成功结束的位置开始。

var reg = /a/g;
var str = "abc_abc_abc";

var r1 = reg.exec(str);
r1; // ["a"]
r1.index; // 0
reg.lastIndex; // 1

var r2 = reg.exec(str);
r2; // ["a"]
r2.index; // 4
reg.lastIndex; // 5

var r3 = reg.exec(str);
r3; // ["a"]
r3.index; // 8
reg.lastIndex; // 9

var r4 = reg.exec(str);
r4; // null
reg.lastIndex; // 0    - 正则实例对象的lastIndex属性也重置为0，意味着第五次匹配将从头开始。

// ===========================

// 利用g修饰符允许多次匹配的特点，可以用一个循环完成全部匹配。

var reg = /a/g;
var str = "abc_abc_abc";

while (true) {
    var match = reg.exec(str);
    if (!match) break;
    console.log("#" + match.index + ":" + match[0]);
}
// #0:a
// #4:a
// #8:a
```

#### 字符串的实例方法

字符串的实例方法之中，有 4 种与正则表达式有关。

String.prototype.match()：返回一个数组，成员是所有匹配的子字符串。
String.prototype.search()：按照给定的正则表达式进行搜索，返回一个整数，表示匹配开始的位置。
String.prototype.replace()：按照给定的正则表达式进行替换，返回替换后的字符串。
String.prototype.split()：按照给定规则进行字符串分割，返回一个数组，包含分割后的各个成员。

##### String.prototype.match()

```js
// 字符串实例对象的match方法对字符串进行正则匹配，返回匹配结果。

var s = "_x_x";
var r1 = /x/;
var r2 = /y/;

s.match(r1); // ["x"]
s.match(r2); // null

// ==================================

// 如果正则表达式带有g修饰符，则该方法与正则对象的exec方法行为不同，会一次性返回所有匹配成功的结果。

var s = "abba";
var r = /a/g;

s.match(r); // ["a", "a"]    - 设置正则表达式的lastIndex属性，对match方法无效，匹配总是从字符串的第一个字符开始。
r.exec(s); // ["a"]
```

##### String.prototype.search()

```js
// 字符串对象的search方法，返回第一个满足条件的匹配结果在整个字符串中的位置。如果没有任何匹配，则返回-1。

"_x_x".search(/x/);
// 1
```

##### String.prototype.replace()

字符串对象的 replace 方法可以替换匹配的值。它接受两个参数，第一个是正则表达式，表示搜索模式，第二个是替换的内容。

```js
// 正则表达式如果不加g修饰符，就替换第一个匹配成功的值，否则替换所有匹配成功的值。

// 这一点和 Regex的 g 特性正好相反, regex中加上g表示一次调用仅匹配一次

'aaa'.replace('a', 'b') // "baa"
'aaa'.replace(/a/, 'b') // "baa"
'aaa'.replace(/a/g, 'b') // "bbb"

// =====================

/*
replace方法的第二个参数可以使用美元符号$，用来指代所替换的内容。

    $&：匹配的子字符串。
    $`：匹配结果前面的文本。
    $'：匹配结果后面的文本。
    $n：匹配成功的第n组内容，n是从1开始的自然数。
    ：指代美元符号`$`。
*/

// 将匹配的组互换位置

'hello world'.replace(/(\w+)\s(\w+)/, '$2 $1')
// "world hello"

// 改写匹配的值。

'abc'.replace('b', '[`-‘−&-$']')
// "a[a-b-c]c"

// ===============================

/*
`replace`方法的第二个参数还可以是一个函数，将每一个匹配内容替换为函数返回值。

    该函数可以可以接受多个参数: (比如接受n个参数)

    参数1: 第一个参数是捕捉到的内容
    参数2到n-2: 捕捉到的组匹配（有多少个组匹配，就有多少个对应的参数）
    参数n-1: 倒数第二个参数是捕捉到的内容在整个字符串中的位置
    参数n: 最后一个参数是原字符串

*/

'3 and 5'.replace(/[0-9]+/g, function (match) {
  return 2 * match;
})
// "6 and 10"

var a = 'The quick brown fox jumped over the lazy dog.';
var pattern = /quick|brown|lazy/ig;

a.replace(pattern, function replacer(match) {
  return match.toUpperCase();
});
// The QUICK BROWN fox jumped over the LAZY dog.

// 下面是一个网页模板替换的例子。

var prices = {
  'p1': '$1.99',
  'p2': '$9.99',
  'p3': '$5.00'
};

var template = '<span id="p1"></span>'
  + '<span id="p2"></span>'
  + '<span id="p3"></span>';

template.replace(
  /(<span id=")(.*?)(">)(<\/span>)/g,
  function(match, $1, $2, $3, $4){
    return $1 + $2 + $3 + prices[$2] + $4;
  }
);
// "<span id="p1">$1.99</span><span id="p2">$9.99</span><span id="p3">$5.00</span>"
// 上面代码的捕捉模式中，有四个括号，所以会产生四个组匹配，在匹配函数中用$1到$4表示。匹配函数的作用是将价格插入模板中。

```

##### String.prototype.split()

字符串对象的 split 方法按照正则规则分割字符串，返回一个由分割后的各个部分组成的数组

该方法接受两个参数，第一个参数是正则表达式，表示分隔规则，第二个参数是返回数组的最大成员数。

```js
// 非正则分隔
"a,  b,c, d".split(",");
// [ 'a', '  b', 'c', ' d' ]

// 正则分隔，去除多余的空格
"a,  b,c, d".split(/, */);
// [ 'a', 'b', 'c', 'd' ]

// 指定返回数组的最大成员
"a,  b,c, d".split(/, */, 2)[("a", "b")];

// ========================

// 如果正则表达式带有括号，则括号匹配的部分也会作为数组成员返回。

"aaa*a*".split(/(a*)/);
// [ '', 'aaa', '*', 'a', '*' ]
// 上面代码的正则表达式使用了括号，第一个组匹配是aaa，第二个组匹配是a，它们都作为数组成员返回。
```

#### 正则匹配规则

##### 修饰符

修饰符（modifier）表示模式的附加规则，放在正则模式的最尾部。

-   g - 默认情况下，第一次匹配成功后，正则对象就停止向下匹配了。g 修饰符表示全局匹配（global），加上它以后，正则对象将匹配全部符合条件的结果，主要用于搜索和替换

    ```js
    var regex = /b/;
    var str = "abba";

    regex.test(str); // true
    regex.test(str); // true
    regex.test(str); // true
    // 每次都是从字符串头部开始匹配。所以，连续做了三次匹配，都返回true。

    var regex = /b/g;
    var str = "abba";

    regex.test(str); // true
    regex.test(str); // true
    regex.test(str); // false
    ```

-   i - 认情况下，正则对象区分字母的大小写，加上 i 修饰符以后表示忽略大小写（ignorecase）

-   m - m 修饰符表示多行模式（multiline），会修改^和$的行为。默认情况下（即不加m修饰符时），^和$匹配字符串的开始处和结尾处，加上 m 修饰符以后，^和$还会匹配行首和行尾，即^和$会识别换行符（\n）。

```js
/world$/.test('hello world\n') // false
/world$/m.test('hello world\n') // true
// 字符串结尾处有一个换行符。如果不加m修饰符，匹配不成功，因为字符串的结尾不是world；加上以后，$可以匹配行尾。

/^b/m.test('a\nb') // true
// 上面代码要求匹配行首的b，如果不加m修饰符，就相当于b只能处在字符串的开始处。加上b修饰符以后，换行符\n也会被认为是一行的开始
```

##### 元字符

除了字面量字符以外，还有一部分字符有特殊含义，不代表字面的意思。它们叫做“元字符”（metacharacters）

-   点字符 "." - 该位置存在一个字符 (注意，对于码点大于 0xFFFF 字符，点字符不能正确匹配，会认为这是两个字符)

-   量词符号:

    -   "?" 问号表示某个模式出现 0 次或 1 次，等同于{0, 1}。

    -   "\*" 星号表示某个模式出现 0 次或多次，等同于{0,}。

    -   "+" 加号表示某个模式出现 1 次或多次，等同于{1,}。

-   位置字符

    -   "^" - 开始, 注意: 如果方括号内的第一个字符是[^]，则表示除了字符类之中的字符，其他字符都可以匹配

    -   "\$" - 结束

-   或选择符 "|"

-   "-"连接符 - 对于连续序列的字符，连字符（-）用来提供简写形式

    ```js
    [1 - 31]; // 不代表1到31，只代表1到3
    ```

##### 预定义符号

预定义模式指的是某些常见模式的简写方式。

\d 匹配 0-9 之间的任一数字，相当于[0-9]。
\D 匹配所有 0-9 以外的字符，相当于[^0-9]。
\w 匹配任意的字母、数字和下划线，相当于[A-Za-z0-9_]。
\W 除所有字母、数字和下划线以外的字符，相当于[^a-za-z0-9_]。
\s 匹配空格（包括换行符、制表符、空格符等），相等于[ \t\r\n\v\f]。
\S 匹配非空格的字符，相当于[^ \t\r\n\v\f]。
\b 匹配词的边界。
\B 匹配非词边界，即在词的内部。

##### 转义符

需要反斜杠转义的，一共有 12 个字符：^、.、[、\$、(、)、|、\*、+、?、{和\。

需要特别注意的是，如果使用 RegExp 方法生成正则对象，转义需要使用两个斜杠，因为字符串内部会先转义一次。

```js
/1+1/.test('1+1')
// false

/1\+1/.test('1+1')
// true

// =====================

(new RegExp('1\+1')).test('1+1')
// false

(new RegExp('1\\+1')).test('1+1')
// true
```

##### 特殊字符

正则表达式对一些不能打印的特殊字符，提供了表达方法。

\cX 表示 Ctrl-[X]，其中的 X 是 A-Z 之中任一个英文字母，用来匹配控制字符。
[\b] 匹配退格键(U+0008)，不要与\b 混淆。
\n 匹配换行键。
\r 匹配回车键。
\t 匹配制表符 tab（U+0009）。
\v 匹配垂直制表符（U+000B）。
\f 匹配换页符（U+000C）。
\0 匹配 null 字符（U+0000）。
\xhh 匹配一个以两位十六进制数（\x00-\xFF）表示的字符。
\uhhhh 匹配一个以四位十六进制数（\u0000-\uFFFF）表示的 Unicode 字符。

### JSON 对象

#### json 定义

JavaScript Object Notation 的缩写, 目的是取代繁琐笨重的 XML 格式

每个 JSON 对象就是一个值，可能是一个数组或对象，也可能是一个原始类型的值。总之，只能是一个值，不能是两个或更多的值。

JSON 对值的类型和格式有严格的规定。

1. 复合类型的值只能是数组或对象，不能是函数、正则表达式对象、日期对象。

1. 原始类型的值只有四种：字符串、数值（必须以十进制表示）、布尔值和 null（不能使用 NaN, Infinity, -Infinity 和 undefined）。

1. 字符串必须使用双引号表示，不能使用单引号。

1. 对象的键名必须放在双引号里面。

1. 数组或对象最后一个成员的后面，不能加逗号。

#### json 对象

JSON 对象是 JavaScript 的原生对象，用来处理 JSON 格式数据。它有两个静态方法：JSON.stringify()和 JSON.parse()。

##### JSON.stringify()

JSON.stringify 方法用于将一个值转为 JSON 字符串。该字符串符合 JSON 格式，并且可以被 JSON.parse 方法还原

参数 2: JSON.stringify 方法还可以接受一个数组，作为第二个参数，指定需要转成字符串的属性。第二个参数还可以是一个函数，用来更改 JSON.stringify 的返回值

参数 3: JSON.stringify 还可以接受第三个参数，用于增加返回的 JSON 字符串的可读性。如果是数字，表示每个属性前面添加的空格（最多不超过 10 个）；如果是字符串（不超过 10 个字符），则该字符串会添加在每行前面

```js
JSON.stringify("abc"); // ""abc""   - 注意，对于原始类型的字符串，转换结果会带双引号
JSON.stringify(1); // "1"
JSON.stringify(false); // "false"
JSON.stringify([]); // "[]"
JSON.stringify({}); // "{}"

JSON.stringify([1, "false", false]);
// '[1,"false",false]'

JSON.stringify({ name: "张三" });
// '{"name":"张三"}'

// ===========================

// 如果对象的属性是undefined、函数或 XML 对象，该属性会被JSON.stringify过滤。

var obj = {
    a: undefined,
    b: function() {}
};

JSON.stringify(obj); // "{}"

// ===========================

// 如果数组的成员是undefined、函数或 XML 对象，则这些值被转成null。

var arr = [undefined, function() {}];
JSON.stringify(arr); // "[null,null]"

// ===============================

// JSON.stringify方法会忽略对象的不可遍历属性。

var obj = {};
Object.defineProperties(obj, {
    foo: {
        value: 1,
        enumerable: true
    },
    bar: {
        value: 2,
        enumerable: false
    }
});

JSON.stringify(obj); // "{"foo":1}"

// ==================================

// JSON.stringify方法还可以接受一个数组，作为第二个参数，指定需要转成字符串的属性。

var obj = {
    prop1: "value1",
    prop2: "value2",
    prop3: "value3"
};

var selectedProperties = ["prop1", "prop2"]; // 仅仅对对象有效, 数组就无效了

JSON.stringify(obj, selectedProperties);
// "{"prop1":"value1","prop2":"value2"}"

//============================

// 第二个参数还可以是一个函数，用来更改JSON.stringify的返回值。

function f(key, value) {
    if (typeof value === "number") {
        value = 2 * value;
    }
    return value;
}

JSON.stringify({ a: 1, b: 2 }, f);
// '{"a": 2,"b": 4}'
// 上面代码中的f函数，接受两个参数，分别是被转换的对象的键名和键值。如果键值是数值，就将它乘以2，否则就原样返回。

//==========================

// 提高可读性

JSON.stringify({ p1: 1, p2: 2 }, null, 2);
/*
"{
  "p1": 1,
  "p2": 2
}"
*/

JSON.stringify({ p1: 1, p2: 2 }, null, "|-");
/*
"{
|-"p1": 1,
|-"p2": 2
}"
*/
```

##### 参数对象的 toJSON()方法

如果参数对象有自定义的 toJSON 方法，那么 JSON.stringify 会使用这个方法的返回值作为参数，而忽略原对象的其他属性

```js
// 这是一个普通对象
var user = {
    firstName: "三",
    lastName: "张",

    get fullName() {
        return this.lastName + this.firstName;
    }
};

JSON.stringify(user);
// "{"firstName":"三","lastName":"张","fullName":"张三"}"

// 现在，为这个对象加上toJSON方法。

var user = {
    firstName: "三",
    lastName: "张",

    get fullName() {
        return this.lastName + this.firstName;
    },

    toJSON: function() {
        return {
            name: this.lastName + this.firstName
        };
    }
};

JSON.stringify(user);
// "{"name":"张三"}"

// ===============================

// Date对象就有一个自己的toJSON方法。

var date = new Date("2015-01-01");
date.toJSON(); // "2015-01-01T00:00:00.000Z"
JSON.stringify(date); // ""2015-01-01T00:00:00.000Z""
```

##### JSON.parse()

JSON.parse 方法用于将 JSON 字符串转换成对应的值。

JSON.parse 方法可以接受一个处理函数，作为第二个参数，用法与 JSON.stringify 方法类似

```js
JSON.parse("{}"); // {}
JSON.parse("true"); // true
JSON.parse('"foo"'); // "foo"
JSON.parse('[1, 5, "false"]'); // [1, 5, "false"]
JSON.parse("null"); // null

var o = JSON.parse('{"name": "张三"}');
o.name; // 张三

// 参数必须是json串, 否则会报错

// 为了处理解析错误，可以将JSON.parse方法放在try...catch代码块中。

try {
    JSON.parse("'String'");
} catch (e) {
    console.log("parsing error");
}

// ======================

// JSON.parse方法可以接受一个处理函数，作为第二个参数，用法与JSON.stringify方法类似。

function f(key, value) {
    if (key === "a") {
        return value + 10;
    }
    return value;
}

JSON.parse('{"a": 1, "b": 2}', f);
// {a: 11, b: 2}
// 上面代码中，JSON.parse的第二个参数是一个函数，如果键名是a，该函数会将键值加上10。
```

### Number 对象

#### 定义

Number 对象是数值对应的包装对象，可以作为构造函数使用，也可以作为工具函数使用

```js
// 作为构造函数时，它用于生成值为数值的对象。

var n = new Number(1);
typeof n; // "object"

// 作为工具函数时，它可以将任何类型的值转为数值。

Number(true); // 1
```

#### 静态属性

Number 对象拥有以下一些静态属性（即直接定义在 Number 对象上的属性，而不是定义在实例上的属性）。

Number.POSITIVE_INFINITY：正的无限，指向 Infinity。
Number.NEGATIVE_INFINITY：负的无限，指向-Infinity。
Number.NaN：表示非数值，指向 NaN。
Number.MIN_VALUE：表示最小的正数（即最接近 0 的正数，在 64 位浮点数体系中为 5e-324），相应的，最接近 0 的负数为-Number.MIN_VALUE。
Number.MAX_SAFE_INTEGER：表示能够精确表示的最大整数，即 9007199254740991。
Number.MIN_SAFE_INTEGER：表示能够精确表示的最小整数，即-9007199254740991。

#### 实例方法

Number 对象有 4 个实例方法，都跟将数值转换成指定格式有关。

##### Number.prototype.toString()

```js
// Number对象部署了自己的toString方法，用来将一个数值转为字符串形式。

(10).toString() // "10"

// toString方法可以接受一个参数，表示输出的进制。如果省略这个参数，默认将数值先转为十进制，

(10).toString(2) // "1010"
(10).toString(8) // "12"
(10).toString(16) // "a"
10.toString(2)
// SyntaxError: Unexpected token ILLEGAL
10..toString(2)
// "1010"

// toString方法只能将十进制的数，转为其他进制的字符串。如果要将其他进制的数，转回十进制，需要使用parseInt方法。
```

##### Number.prototype.toFixed()

```js
// toFixed方法先将一个数转为指定位数的小数，然后返回这个小数对应的字符串。

(10).toFixed(2); // "10.00"
(10.005).toFixed(2); // "10.01"
```

##### Number.prototype.toExponential()

Exponential: 意为指数, 指数形式的

```js
// toExponential方法用于将一个数转为科学计数法形式。

(10)
    .toExponential()(
        // "1e+1"
        10
    )
    .toExponential(1)(
        // "1.0e+1"
        10
    )
    .toExponential(2)
    (
        // "1.00e+1"

        1234
    )
    .toExponential()(
        // "1.234e+3"
        1234
    )
    .toExponential(1)(
        // "1.2e+3"
        1234
    )
    .toExponential(2); // "1.23e+3"
```

##### Number.prototype.toPrecision()

```js
// toPrecision方法用于将一个数转为指定位数的有效数字。

(12.34)
    .toPrecision(1)(
        // "1e+1"
        12.34
    )
    .toPrecision(2)(
        // "12"
        12.34
    )
    .toPrecision(3)(
        // "12.3"
        12.34
    )
    .toPrecision(4)(
        // "12.34"
        12.34
    )
    .toPrecision(5)
    (
        // "12.340"

        // -----------------------------

        // toPrecision方法用于四舍五入时不太可靠，跟浮点数不是精确储存有关。

        12.35
    )
    .toPrecision(3)(
        // "12.3"
        12.25
    )
    .toPrecision(3)(
        // "12.3"
        12.15
    )
    .toPrecision(3)(
        // "12.2"
        12.45
    )
    .toPrecision(3); // "12.4"
```

#### 定义方法

与其他对象一样，Number.prototype 对象上面可以自定义方法，被 Number 的实例继承。

### Boolean 对象

Boolean 对象是 JavaScript 的三个包装对象之一。作为构造函数，它主要用于生成布尔值的包装对象实例。

```js
var b = new Boolean(true);

typeof b; // "object"
b.valueOf(); // true

// -----------------------------

// 注意，false对应的包装对象实例，布尔运算结果也是true。

if (new Boolean(false)) {
    console.log("true");
} // true

if (new Boolean(false).valueOf()) {
    console.log("true");
} // 无输出
```

Boolean 函数的类型转换作用: 和 双重否定运算符等效 "!!"

```js
// Boolean对象除了可以作为构造函数，还可以单独使用，将任意值转为布尔值。这时Boolean就是一个单纯的工具方法。

Boolean(undefined); // false
Boolean(null); // false
Boolean(0); // false
Boolean(""); // false
Boolean(NaN); // false

Boolean(1); // true
Boolean("false"); // true
Boolean([]); // true
Boolean({}); // true
Boolean(function() {}); // true
Boolean(/foo/); // true

// -----------------------------------------

// 最后，对于一些特殊值，Boolean对象前面加不加new，会得到完全相反的结果，必须小心。

if (Boolean(false)) {
    console.log("true");
} // 无输出

if (new Boolean(false)) {
    console.log("true");
} // true

if (Boolean(null)) {
    console.log("true");
} // 无输出

if (new Boolean(null)) {
    console.log("true");
} // true
```

### 包装对象

#### 定义

对象是 JavaScript 语言最主要的数据类型，三种原始类型的值——数值、字符串、布尔值——在一定条件下，也会自动转为对象，也就是原始类型的“包装对象”

包装对象的最大目的，首先是使得 JavaScript 的对象涵盖所有的值，其次使得原始类型的值可以方便地调用某些方法

```js
// 这三个原生对象可以把原始类型的值变成（包装成）对象。

var v1 = new Number(123);
var v2 = new String("abc");
var v3 = new Boolean(true);
```

#### 实例方法

##### valueOf()

```js
// valueOf方法返回包装对象实例对应的原始类型的值。

new Number(123).valueOf(); // 123
new String("abc").valueOf(); // "abc"
new Boolean(true).valueOf(); // true
```

##### toString()

```js
// toString方法返回对应的字符串形式。

new Number(123).toString(); // "123"
new String("abc").toString(); // "abc"
new Boolean(true).toString(); // "true"
```

#### 自动转换

类比 Java 的 自动装箱拆箱

```js
// 比如，字符串可以调用length属性，返回字符串的长度。

"abc".length; // 3
// abc是一个字符串，本身不是对象，不能调用length属性。JavaScript 引擎自动将其转为包装对象，在这个对象上调用length属性。调用结束后，这个临时对象就会被销毁。这就叫原始类型与实例对象的自动转换。

// -----------------------------

var str = "abc";
str.length; // 3

// 等同于
var strObj = new String(str);
// String {
//   0: "a", 1: "b", 2: "c", length: 3, [[PrimitiveValue]]: "abc"
// }
strObj.length; // 3
```

#### 自定义方法

除了原生的实例方法，包装对象还可以自定义方法和属性，供原始类型的值直接调用。

```js
// 比如，我们可以新增一个double方法，使得字符串和数字翻倍。

String.prototype.double = function() {
    return this.valueOf() + this.valueOf();
};

"abc".double();
// abcabc

Number.prototype.double = function() {
    return this.valueOf() + this.valueOf();
};

(123).double();
// 246
```

## OO

### 实例对象&new 命令

对象是一个容器，封装了属性（property）和方法（method）。

#### 构造函数

典型的面向对象编程语言（比如 C++ 和 Java），都有“类”（class）这个概念。所谓“类”就是对象的模板，对象就是“类”的实例。但是，JavaScript 语言的对象体系，不是基于“类”的，而是基于构造函数（constructor）和原型链（prototype）。

JavaScript 语言使用构造函数（constructor）作为对象的模板

函数体内部使用了 this 关键字，代表了所要生成的对象实例。
生成对象的时候，必须使用 new 命令。

```js
// 为了与普通函数区别，构造函数名字的第一个字母通常大写。
var Vehicle = function() {
    this.price = 1000;
};

var v = new Vehicle();
v.price; // 1000

/// ----------------------------------

//使用new命令时，根据需要，构造函数也可以接受参数。

var Vehicle = function(p) {
    this.price = p;
};

var v = new Vehicle(500);

// -----------------------------

// ew命令本身就可以执行构造函数，所以后面的构造函数可以带括号，也可以不带括号

// 推荐的写法
var v = new Vehicle();
// 不推荐的写法
var v = new Vehicle();
```

#### new

new 命令的作用，就是执行构造函数，返回一个实例对象。

##### 忘记使用 new 怎么办

如果忘了使用 new 命令，直接调用构造函数会发生什么事？

```js
// 这种情况下，构造函数就变成了普通函数，并不会生成实例对象。而且由于后面会说到的原因，this这时代表全局对象，将造成一些意想不到的结果。

var Vehicle = function() {
    this.price = 1000;
};

var v = Vehicle();
v; // undefined
price; // 1000
```

为了保证构造函数必须与 new 命令一起使用，一个解决办法是，构造函数内部使用严格模式，即第一行加上 use strict。这样的话，一旦忘了使用 new 命令，直接调用构造函数就会报错

```js
function Fubar(foo, bar) {
    "use strict";
    this._foo = foo;
    this._bar = bar;
}

Fubar();
// TypeError: Cannot set property '_foo' of undefined
```

另一个解决办法，构造函数内部判断是否使用 new 命令，如果发现没有使用，则直接返回一个实例对象。

```js
function Fubar(foo, bar) {
    if (!(this instanceof Fubar)) {
        return new Fubar(foo, bar);
    }

    this._foo = foo;
    this._bar = bar;
}

Fubar(1, 2)._foo(
    // 1
    new Fubar(1, 2)
)._foo; // 1
```

##### new 的原理

使用 new 命令时，它后面的函数依次执行下面的步骤。

1. 创建一个空对象，作为将要返回的对象实例。
1. 将这个空对象的原型，指向构造函数的 prototype 属性。
1. 将这个空对象赋值给函数内部的 this 关键字。
1. 开始执行构造函数内部的代码。

```js
// 如果构造函数内部有return语句，而且return后面跟着一个对象，new命令会返回return语句指定的对象；否则，就会不管return语句，返回this对象。

var Vehicle = function() {
    this.price = 1000;
    return 1000; // return的是"数值"不是"对象", 最终返回this
};

new Vehicle() === 1000;
// false

// -------------------------------

// 但是，如果return语句返回的是一个跟this无关的新对象，new命令会返回这个新对象，而不是this对象。这一点需要特别引起注意。

var Vehicle = function() {
    this.price = 1000;
    return { price: 2000 };
};

new Vehicle().price;
// 2000

// 如果对普通函数（内部没有this关键字的函数）使用new命令，则会返回一个空对象。
```

##### new.target 属性

函数内部可以使用 new.target 属性。如果当前函数是 new 命令调用，new.target 指向当前函数，否则为 undefined。

```js
function f() {
    console.log(new.target === f);
}

f(); // false
new f(); // true

// ---------------------------------

// 使用这个属性，可以判断函数调用的时候，是否使用new命令。

function f() {
    if (!new.target) {
        throw new Error("请使用 new 命令调用！");
    }
    // ...
}

f(); // Uncaught Error: 请使用 new 命令调用！
```

#### Object.create()

构造函数作为模板，可以生成实例对象。

但是，有时拿不到构造函数，只能拿到一个现有的对象。我们希望以这个现有的对象作为模板，生成新的实例对象，这时就可以使用 Object.create()方法

```js
var person1 = {
    name: "张三",
    age: 38,
    greeting: function() {
        console.log("Hi! I'm " + this.name + ".");
    }
};

var person2 = Object.create(person1);

person2.name; // 张三
person2.greeting(); // Hi! I'm 张三.
```

### this

#### 定义

this 可以用在构造函数之中，表示实例对象。除此之外，this 还可以用在别的场合。但不管是什么场合，this 都有一个共同点：它总是返回一个对象(属性或方法“当前”所在的对象。)。

```js
// f内部使用了this关键字，随着f所在的对象不同，this的指向也不同
function f() {
  return '姓名：'+ this.name;
}

var A = {
  name: '张三',
  describe: f
};

var B = {
  name: '李四',
  describe: f
};

A.describe() // "姓名：张三"
B.describe() // "姓名：李四"

// -------------------------------

// 只要函数被赋给另一个变量，this的指向就会变。

var A = {
  name: '张三',
  describe: function () {
    return '姓名：'+ this.name;
  }
};

var name = '李四';
var f = A.describe; // 此时this指向顶层对象
f() // "姓名：李四"

// --------------------------------------

// 这里的this -> input文本框, 然后就可以从this.value上面读到用户的输入值
<input type="text" name="age" size=3 onChange="validate(this, 18, 99);">
<script>
function validate(obj, lowval, hival){
  if ((obj.value < lowval) || (obj.value > hival))
    console.log('Invalid Value!');
}
</script>

```

JavaScript 语言之所以有 this 的设计，跟内存里面的数据结构有关系。

```js
// 一个没有方法的object:
var obj = { foo:  5 };

// 在引擎种会这么存储:每一个属性名都对应一个属性描述对象
{
  foo: {
    [[value]]: 5
    [[writable]]: true
    [[enumerable]]: true
    [[configurable]]: true
  }
}

// 问题来了: 一个含有方法的object
var obj = { foo: function () {} };

// 在引擎种会这么存储: 引擎会将函数单独保存在内存中，然后再将函数的地址赋值给foo属性的value属性
{
  foo: {
    [[value]]: 函数的地址
    ...
  }
}

// 而函数是一个单独的值，所以它可以在不同的环境（上下文）执行。
// 所以需要有一种机制，能够在函数体内部获得当前的运行环境（context）。所以，this就出现了，它的设计目的就是在函数体内部，指代函数当前的运行环境。

```

#### 使用场景

##### 全局环境

```js
// 全局环境使用this，它指的就是顶层对象window。

this === window; // true

function f() {
    console.log(this === window);
}
f(); // true
```

##### 构造函数

构造函数中的 this，指的是实例对象。

```js
var Obj = function(p) {
    this.p = p;
};

var o = new Obj("Hello World!");
o.p; // "Hello World!"
```

##### 对象普通方法

this 的指向就是方法运行时所在的对象。该方法赋值给另一个对象，就会改变 this 的指向。

```js
// 如果this所在的方法不在对象的第一层，这时this只是指向当前一层的对象，而不会继承更上面的层。

var a = {
    p: "Hello",
    b: {
        m: function() {
            console.log(this.p);
        }
    }
};

a.b.m(); // undefined

// 上面代码中，a.b.m方法在a对象的第二层，该方法内部的this不是指向a，而是指向a.b，因为实际执行的是下面的代码。

var b = {
    m: function() {
        console.log(this.p);
    }
};

var a = {
    p: "Hello",
    b: b
};

a.b.m(); // 等同于 b.m()
```

#### this 使用的 tips

##### 避免多层 this

```js
var o = {
    f1: function() {
        console.log(this);
        var f2 = (function() {
            console.log(this);
        })();
    }
};

o.f1();
// Object
// Window

// -----------------------------------

// 一个解决方法是在第二层改用一个指向外层this的变量。

var o = {
    f1: function() {
        console.log(this);
        var that = this;
        var f2 = (function() {
            console.log(that);
        })();
    }
};

o.f1();
// Object
// Object

// -------------------------------------------

/// JavaScript 提供了严格模式，也可以硬性避免这种问题。严格模式下，如果函数内部的this指向顶层对象，就会报错。

var counter = {
    count: 0
};
counter.inc = function() {
    "use strict";
    this.count++;
};
var f = counter.inc;
f();
// TypeError: Cannot read property 'count' of undefined
```

##### 避免数组处理方法中的 this

数组的 map 和 foreach 方法，允许提供一个函数作为参数。这个函数内部不应该使用 this。

```js
// foreach方法的回调函数中的this，其实是指向window对象，因此取不到o.v的值。原因跟上一段的多层this是一样的，就是内层的this不指向外部，而指向顶层对象。
var o = {
    v: "hello",
    p: ["a1", "a2"],
    f: function f() {
        this.p.forEach(function(item) {
            console.log(this.v + " " + item);
        });
    }
};

o.f();
// undefined a1
// undefined a2

// ---------------------------------------

// 解决这个问题的一种方法，就是前面提到的，使用中间变量固定this。

var o = {
    v: "hello",
    p: ["a1", "a2"],
    f: function f() {
        var that = this;
        this.p.forEach(function(item) {
            console.log(that.v + " " + item);
        });
    }
};

o.f();
// hello a1
// hello a2

// 另一种方法是将this当作foreach方法的第二个参数，固定它的运行环境。

var o = {
    v: "hello",
    p: ["a1", "a2"],
    f: function f() {
        this.p.forEach(function(item) {
            console.log(this.v + " " + item);
        }, this);
    }
};

o.f();
// hello a1
// hello a2
```

##### 避免回调函数中的 this

```js
// 回调函数中的this往往会改变指向，最好避免使用。

var o = new Object();
o.f = function() {
    console.log(this === o);
};

// jQuery 的写法
$("#button").on("click", o.f);
// 上面代码中，点击按钮以后，控制台会显示false。原因是此时this不再指向o对象，而是指向按钮的 DOM 对象，因为f方法是在按钮对象的环境中被调用的
```

#### 绑定 this

this 的动态切换，固然为 JavaScript 创造了巨大的灵活性，但也使得编程变得困难和模糊。

JavaScript 提供了 call、apply、bind 这三个方法，来切换/固定 this 的指向。

##### Function.prototype.call()

函数实例的 call 方法，可以指定函数内部 this 的指向

call 方法的参数，应该是一个对象。如果参数为空、null 和 undefined，则默认传入全局对象。

call 方法还可以接受多个参数。`func.call(thisValue, arg1, arg2, ...)` call 的第一个参数就是 this 所要指向的那个对象，后面的参数则是函数调用时所需的参数。

```js
var obj = {};

var f = function() {
    return this;
};

f() === window; // true
f.call(obj) === obj; // true

// -----------------------------------

var n = 123;
var obj = { n: 456 };

function a() {
    console.log(this.n);
}

a.call(); // 123
a.call(null); // 123
a.call(undefined); // 123
a.call(window); // 123
a.call(obj); // 456

// ---------------------------------

function add(a, b) {
    return a + b;
}

add.call(this, 1, 2); // 3

// -----------------------------------------

// call方法的一个应用是调用对象的原生方法。

var obj = {};
obj.hasOwnProperty("toString"); // false

// 覆盖掉继承的 hasOwnProperty 方法
obj.hasOwnProperty = function() {
    return true;
};
obj.hasOwnProperty("toString"); // true

Object.prototype.hasOwnProperty.call(obj, "toString"); // false
// 上面代码中，hasOwnProperty是obj对象继承的方法，如果这个方法一旦被覆盖，就不会得到正确结果。call方法可以解决这个问题，它将hasOwnProperty方法的原始定义放到obj对象上执行，这样无论obj上有没有同名方法，都不会影响结果。
```

##### Function.prototype.apply()

apply 方法的作用与 call 方法类似，也是改变 this 指向，然后再调用该函数。唯一的区别就是，它接收一个数组作为函数执行时的参数`func.apply(thisValue, [arg1, arg2, ...])`

```js
function f(x, y) {
    console.log(x + y);
}

f.call(null, 1, 1); // 2
f.apply(null, [1, 1]); // 2

// ----------------------------------------

// 找出数组最大元素

// JavaScript 不提供找出数组最大元素的函数。结合使用apply方法和Math.max方法，就可以返回数组的最大元素。

var a = [10, 2, 4, 15, 9];
Math.max.apply(null, a); // 15

// --------------------------------------------------

// 将数组的空元素变为undefined

// 通过apply方法，利用Array构造函数将数组的空元素变成undefined。
// 空元素与undefined的差别在于，数组的forEach方法会跳过空元素，但是不会跳过undefined

Array.apply(null, ["a", , "b"]);
// [ 'a', undefined, 'b' ]

// -------------------------------------------------

// 转换类似数组的对象

// 另外，利用数组对象的slice方法，可以将一个类似数组的对象（比如arguments对象）转为真正的数组。
// 这个方法起作用的前提是，被处理的对象必须有length属性，以及相对应的数字键。

Array.prototype.slice.apply({ 0: 1, length: 1 }); // [1]
Array.prototype.slice.apply({ 0: 1 }); // []
Array.prototype.slice.apply({ 0: 1, length: 2 }); // [1, undefined]
Array.prototype.slice.apply({ length: 1 }); // [undefined]

// ------------------------------------

// 绑定回调函数的对象

var o = new Object();

o.f = function() {
    console.log(this === o);
};

// 由于apply方法（或者call方法）不仅绑定函数执行时所在的对象，还会立即执行函数，因此不得不把绑定语句写在一个函数体内
var f = function() {
    o.f.apply(o);
    // 或者 o.f.call(o);
};

// jQuery 的写法
$("#button").on("click", f);
```

##### Function.prototype.bind()

bind 方法用于将函数体内的 this 绑定到某个对象，然后返回一个新函数。不会执行函数

如果 bind 方法的第一个参数是 null 或 undefined，等于将 this 绑定到全局对象，函数运行时 this 指向顶层对象（浏览器为 window）

```js
var d = new Date();
d.getTime(); // 1481869925657

var print = d.getTime;
print(); // Uncaught TypeError: this is not a Date object.

var print = d.getTime.bind(d);
print(); // 1481869925657

// ------------------------------------

// bind还可以接受更多的参数，将这些参数绑定原函数的参数。

var add = function(x, y) {
    return x * this.m + y * this.n;
};

var obj = {
    m: 2,
    n: 2
};

var newAdd = add.bind(obj, 5);
newAdd(5); // 20
// 上面代码中，bind方法除了绑定this对象，还将add函数的第一个参数x绑定成5，然后返回一个新函数newAdd，这个函数只要再接受一个参数y就能运行了。
```

bind 方法有一些使用注意点

（1）每一次返回一个新函数-->匿名函数

```js
// bind方法每运行一次，就返回一个新函数，这会产生一些问题, 比如: 监听事件的时候，不能写成下面这样。

element.addEventListener("click", o.m.bind(o));

// 这样会导致无法取消绑定，所以，下面的代码是无效的。

element.removeEventListener("click", o.m.bind(o));

// 正确的方法是写成下面这样：

var listener = o.m.bind(o);
element.addEventListener("click", listener);
//  ...
element.removeEventListener("click", listener);
```

（2）推荐结合回调函数使用

```js
var counter = {
    count: 0,
    inc: function() {
        "use strict";
        this.count++;
    }
};

function callIt(callback) {
    callback();
}

callIt(counter.inc.bind(counter));
counter.count; // 1
// callIt方法会调用回调函数。这时如果直接把counter.inc传入，调用时counter.inc内部的this就会指向全局对象。使用bind方法将counter.inc绑定counter以后，就不会有这个问题，this总是指向counter。

// ------------------------------------------

// 还有一种情况比较隐蔽，就是某些数组方法可以接受一个函数当作参数。这些函数内部的this指向，很可能也会出错。可借助 bind()绑定一个对象作为context
obj.print = function() {
    this.times.forEach(
        function(n) {
            console.log(this.name);
        }.bind(this)
    );
};

obj.print();
// 张三
// 张三
// 张三
```

### 对象继承

JavaScript 语言的继承则是通过“原型对象”（prototype）。

#### prototype 原型

##### 构造函数缺点

同一个构造函数的多个实例之间，无法共享属性，从而造成对系统资源的浪费。

```js
function Cat(name, color) {
    this.name = name;
    this.color = color;
    this.meow = function() {
        console.log("喵喵");
    };
}

var cat1 = new Cat("大毛", "白色");
var cat2 = new Cat("二毛", "黑色");

cat1.meow === cat2.meow;
// false
```

##### prototype 属性

JavaScript 继承机制的设计思想就是，原型对象的所有属性和方法，都能被实例对象共享

JavaScript 规定，每个函数都有一个 prototype 属性，指向一个对象。

对于普通函数来说，该属性基本无用。但是，对于构造函数来说，生成实例的时候，该属性会自动成为实例对象的原型

实例对象可以视作从原型对象衍生出来的子对象, 当实例对象本身没有某个属性或方法的时候，它会到原型对象去寻找该属性或方法。这就是原型对象的特殊之处

```js
function Animal(name) {
    this.name = name;
}
Animal.prototype.color = "white";

var cat1 = new Animal("大毛");
var cat2 = new Animal("二毛");

cat1.color; // 'white'
cat2.color; // 'white'

//原型对象的属性不是实例对象自身的属性。只要修改原型对象，变动就立刻会体现在所有实例对象上。

Animal.prototype.color = "yellow";

cat1.color; // "yellow"
cat2.color; // "yellow"
```

##### 原型链

对象到原型，再到原型的原型……

如果一层层地上溯，所有对象的原型最终都可以上溯到 Object.prototype，即 Object 构造函数的 prototype 属性

这就是所有对象都有 valueOf 和 toString 方法的原因，因为这是从 Object.prototype 继承的。

那么，Object.prototype 对象有没有它的原型呢？回答是 Object.prototype 的原型是 null。null 没有任何属性和方法，也没有自己的原型。因此，原型链的尽头就是 null

```js
Object.getPrototypeOf(Object.prototype);
// null

// ------------------------------

// 举例来说，如果让构造函数的prototype属性指向一个数组，就意味着实例对象可以调用数组方法。

var MyArray = function() {};

MyArray.prototype = new Array();
MyArray.prototype.constructor = MyArray;

var mine = new MyArray(); // mine是构造函数MyArray的实例对象，由于MyArray.prototype指向一个数组实例，使得mine可以调用数组方法
mine.push(1, 2, 3);
mine.length; // 3
mine instanceof Array; // true // 比较一个对象是否为某个构造函数的实例，
```

##### constructor 属性

prototype 对象有一个 constructor 属性，默认指向 prototype 对象所在的构造函数

constructor 属性的作用是，可以得知某个实例对象，到底是哪一个构造函数产生的; 也就是说有了 constructor 属性, 可以得到构造函数，就可以从一个实例对象新建另一个实例

constructor 属性表示原型对象与构造函数之间的关联关系，如果修改了原型对象，一般会同时修改 constructor 属性，防止引用的时候出错。

```js
function P() {}
P.prototype.constructor === P // true

// -----------------------------------

// 由于constructor属性定义在prototype对象上面，意味着可以被所有实例对象继承。

function P() {}
var p = new P();

p.constructor === P // true
p.constructor === P.prototype.constructor // true
p.hasOwnProperty('constructor') // false // p自身没有constructor属性，该属性其实是读取原型链上面的P.prototype.constructor属性。

// ----------------------------------------

// 可以从一个实例对象新建另一个实例。

function Constr() {}
var x = new Constr();

var y = new x.constructor();
y instanceof Constr // true

// -----------------------------------

Constr.prototype.createCopy = function () {
  return new this.constructor();
};
// 上面代码中，createCopy方法调用构造函数，新建另一个实例。

// --------------------------------------

function Person(name) {
  this.name = name;
}

Person.prototype.constructor === Person // true

Person.prototype = {
  method: function () {}
};

Person.prototype.constructor === Person // false
Person.prototype.constructor === Object // true
// 构造函数Person的原型对象改掉了，但是没有修改constructor属性，导致这个属性不再指向Person

// --------------------------------------

// 坏的写法
C.prototype = {
  method1: function (...) { ... },
  // ...
};

// 好的写法
C.prototype = {
  constructor: C,
  method1: function (...) { ... },
  // ...
};

// 更好的写法
C.prototype.method1 = function (...) { ... };

// -----------------------------

// 如果不能确定constructor属性是什么函数，还有一个办法：通过name属性，从实例得到构造函数的名称。

function Foo() {}
var f = new Foo();
f.constructor.name // "Foo"
```

#### instanceof 运算符

instanceof 运算符返回一个布尔值，表示对象是否为某个构造函数生成的实例

instanceof 的原理是检查右边构造函数的 prototype 属性，是否在左边对象的原型链上。

```js
var v = new Vehicle();
v instanceof Vehicle; // true

// 等同于
Vehicle.prototype.isPrototypeOf(v);

// -------------------------------------

// 利用instanceof运算符，还可以巧妙地解决，调用构造函数时，忘了加new命令的问题。

function Fubar(foo, bar) {
    if (this instanceof Fubar) {
        this._foo = foo;
        this._bar = bar;
    } else {
        return new Fubar(foo, bar);
    }
}
```

#### 多重继承

```js
// JavaScript 不提供多重继承功能，即不允许一个对象同时继承多个对象。但是，可以通过变通方法，实现这个功能。

function M1() {
    this.hello = "hello";
}

function M2() {
    this.world = "world";
}

function S() {
    M1.call(this);
    M2.call(this);
}

// 继承 M1
S.prototype = Object.create(M1.prototype);
// 继承链上加入 M2
Object.assign(S.prototype, M2.prototype);

// 指定构造函数
S.prototype.constructor = S;

var s = new S();
s.hello; // 'hello：'
s.world; // 'world'
// 上面代码中，子类S同时继承了父类M1和M2。这种模式又称为 Mixin（混入）
```

#### 构造函数的继承

```js
// 让一个构造函数继承另一个构造函数，是非常常见的需求。这可以分成两步实现。第一步是在子类的构造函数中，调用父类的构造函数。

//Sub是子类的构造函数，this是子类的实例。在实例上调用父类的构造函数Super，就会让子类实例具有父类实例的属性。
function Sub(value) {
    Super.call(this);
    this.prop = value;
}

// 第二步，是让子类的原型指向父类的原型，这样子类就可以继承父类原型。

Sub.prototype = Object.create(Super.prototype);
Sub.prototype.constructor = Sub;
Sub.prototype.method = "...";
//Sub.prototype是子类的原型，要将它赋值为Object.create(Super.prototype)，而不是直接等于Super.prototype。否则后面两行对Sub.prototype的操作，会连父类的原型Super.prototype一起修改掉。

// 采用这样的写法以后，instanceof运算符会对子类和父类的构造函数，都返回true。

var rect = new Sub();

rect instanceof Sub; // true
rect instanceof Super; // true
```

#### 模块

##### 写法的一步步进化

JavaScript 不是一种模块化编程语言，ES6 才开始支持“类”和“模块”。如何利用对象实现模块的效果? 下面一步步进化

```js
//基本的实现方法: 简单的做法是把模块写成一个对象，所有的模块成员都放到这个对象里面。

// 但是，这样的写法会暴露所有模块成员，内部状态可以被外部改写

var module1 = new Object({
    _count: 0,
    m1: function() {
        //...
    },
    m2: function() {
        //...
    }
});

// 使用的时候，就是调用这个对象的属性。

module1.m1();

// ---------------------------------------------

// 封装私有变量：构造函数的写法

// 但是，这种方法将私有变量封装在构造函数中，导致构造函数与实例对象是一体的，总是存在于内存之中，无法在使用完成后清除
// 构造函数有双重作用，既用来塑造实例对象，又用来保存实例对象的数据，违背了构造函数与实例对象在数据上相分离的原则（即实例对象的数据，不应该保存在实例对象以外）。同时，非常耗费内存。

function StringBuilder() {
    var buffer = []; // 私有变量。一旦生成实例对象，外部是无法直接访问buffer的

    this.add = function(str) {
        buffer.push(str);
    };

    this.toString = function() {
        return buffer.join("");
    };
}

// -------------------------------------------------

// 封装私有变量：立即执行函数的写法 -------------------推荐

// 将相关的属性和方法封装在一个函数作用域里面，可以达到不暴露私有成员的目的。

var module1 = (function() {
    var _count = 0;
    var m1 = function() {
        //...
    };
    var m2 = function() {
        //...
    };
    return {
        m1: m1,
        m2: m2
    };
})();

// -----------------------------------------------

// 模块继承: 放大模式（augmentation）。 ---------------------------------------推荐
// 如果一个模块很大，必须分成几个部分，或者一个模块需要继承另一个模块，这时就有必要采用“放大模式”（augmentation）

// 为module1模块添加了一个新方法m3()，然后返回新的module1模块
var module1 = (function(mod) {
    mod.m3 = function() {
        //...
    };
    return mod;
})(module1);

// 防止空对象: 宽放大模式
// 第一个执行的部分有可能加载一个不存在空对象，这时就要采用"宽放大模式"（Loose augmentation）。
// 与"放大模式"相比，“宽放大模式”就是“立即执行函数”的参数可以是空对象。

var module1 = (function(mod) {
    //...
    return mod;
})(window.module1 || {});
```

##### 输入全局变量

为了在模块内部调用全局变量，必须显式地将其他变量输入模块

```js
var module1 = (function($, YAHOO) {
    //...
})(jQuery, YAHOO); //  jQuery 库和 YUI 库当作参数传入
```

##### 命名空间和立即执行函数

```js
// 立即执行函数还可以起到命名空间的作用。

(function($, window, document) {
    function go(num) {}

    function handleEvents() {}

    function initialize() {}

    function dieCarouselDie() {}

    //attach to the global scope
    window.finalCarousel = {
        init: initialize,
        destroy: dieCouraselDie
    };
})(jQuery, window, document);
// 上面代码中，finalCarousel对象输出到全局，对外暴露init和destroy接口，内部方法go、handleEvents、initialize、dieCarouselDie都是外部无法调用的。
```

### Object 对象的相关方法

#### Object.getPrototypeOf()

Object.getPrototypeOf 方法返回参数对象的原型。这是获取原型对象的标准方法

```js
var F = function() {};
var f = new F();
Object.getPrototypeOf(f) === F.prototype; // true

// ----------------------------------------------------

// 几种特殊对象的原型。

// 空对象的原型是 Object.prototype
Object.getPrototypeOf({}) === Object.prototype; // true

// Object.prototype 的原型是 null
Object.getPrototypeOf(Object.prototype) === null; // true

// 函数的原型是 Function.prototype
function f() {}
Object.getPrototypeOf(f) === Function.prototype; // true
```

#### Object.setPrototypeOf()

```js
// Object.setPrototypeOf方法为参数对象设置原型，返回该参数对象。它接受两个参数，第一个是现有对象，第二个是原型对象。

var a = {};
var b = { x: 1 };
Object.setPrototypeOf(a, b);

Object.getPrototypeOf(a) === b; // true
a.x; // 1

// -----------------------------------------------

// new命令可以使用Object.setPrototypeOf方法模拟。

var F = function() {
    this.foo = "bar";
};

var f = new F();
// 等同于
var f = Object.setPrototypeOf({}, F.prototype);
F.call(f);
// new命令新建实例对象，其实可以分成两步。第一步，将一个空对象的原型设为构造函数的prototype属性（上例是F.prototype）；第二步，将构造函数内部的this绑定这个空对象，然后执行构造函数，使得定义在this上面的方法和属性（上例是this.foo），都转移到这个空对象上。
```

#### Object.create()

使用 new 命令让构造函数返回一个实例, 能不能从一个实例对象，生成另一个实例对象呢？

Object.create 方法还可以接受第二个参数。该参数是一个属性描述对象，它所描述的对象属性，会添加到实例对象，作为该对象自身的属性

```js
// 该方法接受一个对象作为参数，然后以它为原型，返回一个实例对象。该实例完全继承原型对象的属性。

// 原型对象
var A = {
    print: function() {
        console.log("hello");
    }
};

// 实例对象
var B = Object.create(A);

Object.getPrototypeOf(B) === A; // true
B.print(); // hello
B.print === A.print; // true

// ---------------------------------------------

// 下面三种方式生成的新对象是等价的。

var obj1 = Object.create({});
var obj2 = Object.create(Object.prototype);
var obj3 = new Object();

// ---------------------------------------------------

// Object.create方法生成的新对象，动态继承了原型。在原型上添加或修改任何方法，会立刻反映在新对象之上。

var obj1 = { p: 1 };
var obj2 = Object.create(obj1);

obj1.p = 2;
obj2.p; // 2

// ---------------------------------------------------

// Object.create方法还可以接受第二个参数。该参数是一个属性描述对象，它所描述的对象属性，会添加到实例对象，作为该对象自身的属性。

var obj = Object.create(
    {},
    {
        p1: {
            value: 123,
            enumerable: true,
            configurable: true,
            writable: true
        },
        p2: {
            value: "abc",
            enumerable: true,
            configurable: true,
            writable: true
        }
    }
);

// 等同于
var obj = Object.create({});
obj.p1 = 123;
obj.p2 = "abc";
```

#### Object.prototype.isPrototypeOf()

判断该对象是否为参数对象的原型

```js
var o1 = {};
var o2 = Object.create(o1);
var o3 = Object.create(o2);

o2.isPrototypeOf(o3); // true
o1.isPrototypeOf(o3); // true

// -----------------------------------------------

// 这表明只要实例对象处在参数对象的原型链上，isPrototypeOf方法都返回true。

Object.prototype.isPrototypeOf({}); // true
Object.prototype.isPrototypeOf([]); // true
Object.prototype.isPrototypeOf(/xyz/); // true
Object.prototype.isPrototypeOf(Object.create(null)); // false
// 上面代码中，由于Object.prototype处于原型链的最顶端，所以对各种实例都返回true，只有直接继承自null的对象除外。
```

#### Object.prototype.**proto**

它前后的两根下划线，表明它本质是一个内部属性，不应该对使用者暴露。因此，应该尽量少用这个属性，而是用 Object.getPrototypeof()和 Object.setPrototypeOf()，进行原型对象的读写操作

```js
// 实例对象的__proto__属性（前后各两个下划线），返回该对象的原型。该属性可读写。

var obj = {};
var p = {};

obj.__proto__ = p;
Object.getPrototypeOf(obj) === p; // true
```

#### 原型对象方法的比较

因此，获取实例对象 obj 的原型对象，有三种方法。

```js
obj.__proto__;
obj.constructor.prototype;
Object.getPrototypeOf(obj);
```

前两种都不是很可靠。**proto**属性只有浏览器才需要部署，其他环境可以不部署。而 obj.constructor.prototype 在手动改变原型对象时，可能会失效。

```js
// var P = function () {};
var p = new P();

var C = function() {};
C.prototype = p;
var c = new C();

c.constructor.prototype === p; // false
// 上面代码中，构造函数C的原型对象被改成了p，但是实例对象的c.constructor.prototype却没有指向p。所以，在改变原型对象时，一般要同时设置constructor属性。

C.prototype = p;
C.prototype.constructor = C;

var c = new C();
c.constructor.prototype === p; // true
// 因此，推荐使用第三种Object.getPrototypeOf方法，获取原型对象。
```

#### Object.getOwnPropertyNames()

Object.getOwnPropertyNames 方法返回一个数组，成员是参数对象本身的所有属性的键名，不包含继承的属性键名。

Object.getOwnPropertyNames 方法返回所有键名，不管是否可以遍历。只获取那些可以遍历的属性，使用 Object.keys 方法(仅仅自身属性)。

```js
Object.getOwnPropertyNames(Date);
// ["parse", "arguments", "UTC", "caller", "name", "prototype", "now", "length"]

Object.keys(Date); // []
```

#### Object.prototype.hasOwnProperty()

hasOwnProperty 方法返回一个布尔值，用于判断某个属性定义在对象自身，还是定义在原型链上。

hasOwnProperty 方法是 JavaScript 之中唯一一个处理对象属性时，不会遍历原型链的方法

```js
Date.hasOwnProperty("length"); // true
Date.hasOwnProperty("toString"); // false
```

#### in 运算符和 for...in 循环

in 运算符返回一个布尔值，表示一个对象是否具有某个属性。它不区分该属性是对象自身的属性，还是继承的属性

获得对象的所有可遍历属性（不管是自身的还是继承的），可以使用 for...in 循环。

```js
"length" in Date; // true
"toString" in Date; // true

// ---------------------------------------------

var o1 = { p1: 123 };

var o2 = Object.create(o1, {
    p2: { value: "abc", enumerable: true }
});

for (p in o2) {
    console.info(p);
}
// p2
// p1

// --------------------------------------------

// 为了在for...in循环中获得对象自身的属性，可以采用hasOwnProperty方法判断一下。

for (var name in object) {
    if (object.hasOwnProperty(name)) {
        /* loop code */
    }
}
```

#### 对象的拷贝

如果要拷贝一个对象，需要做到下面两件事情。

确保拷贝后的对象，与原对象具有同样的原型。
确保拷贝后的对象，与原对象具有同样的实例属性。

```js
function copyObject(orig) {
    var copy = Object.create(Object.getPrototypeOf(orig));
    copyOwnPropertiesFrom(copy, orig);
    return copy;
}

function copyOwnPropertiesFrom(target, source) {
    Object.getOwnPropertyNames(source).forEach(function(propKey) {
        var desc = Object.getOwnPropertyDescriptor(source, propKey);
        Object.defineProperty(target, propKey, desc);
    });
    return target;
}

// 另一种更简单的写法，是利用 ES2017 才引入标准的Object.getOwnPropertyDescriptors方法。

function copyObject(orig) {
    return Object.create(
        Object.getPrototypeOf(orig),
        Object.getOwnPropertyDescriptors(orig)
    );
}
```

### 严格模式

[ref](https://wangdoc.com/javascript/oop/strict.html)

## 异步操作

### 单线程模型

单线程模型指的是，JavaScript 只在一个线程上运行。也就是说，JavaScript 同时只能执行一个任务，其他任务都必须在后面排队等待。

注意，JavaScript 只在一个线程上运行，不代表 JavaScript 引擎只有一个线程。事实上，JavaScript 引擎有多个线程，单个脚本只能在一个线程上运行（称为主线程），其他线程都是在后台配合。

> JavaScript 之所以采用单线程，而不是多线程，跟历史有关系。JavaScript 从诞生起就是单线程，原因是不想让浏览器变得太复杂，因为多线程需要共享资源、且有可能修改彼此的运行结果，对于一种网页脚本语言来说，这就太复杂了。如果 JavaScript 同时有两个线程，一个线程在网页 DOM 节点上添加内容，另一个线程删除了这个节点，这时浏览器应该以哪个线程为准？是不是还要有锁机制？所以，为了避免复杂性，JavaScript 一开始就是单线程，这已经成了这门语言的核心特征，将来也不会改变。

> 单线程模型虽然对 JavaScript 构成了很大的限制，但也因此使它具备了其他语言不具备的优势。如果用得好，JavaScript 程序是不会出现堵塞的，这就是为什么 Node 可以用很少的资源，应付大流量访问的原因。

这种模式的好处是实现起来比较简单，执行环境相对单纯；坏处是只要有一个任务耗时很长，后面的任务都必须排队等着，会拖延整个程序的执行。常见的浏览器无响应（假死），往往就是因为某一段 JavaScript 代码长时间运行（比如死循环），导致整个页面卡在这个地方，其他任务无法执行。

### 任务队列&事件循环机制

任务队列:
JavaScript 运行时，除了一个正在运行的主线程，引擎还提供一个任务队列（task queue），里面是各种需要当前程序处理的异步任务

首先，主线程会去执行所有的同步任务。等到同步任务全部执行完，就会去看任务队列里面的异步任务。如果满足条件，那么异步任务就重新进入主线程开始执行，这时它就变成同步任务了。等到执行完，下一个异步任务再进入主线程开始执行。一旦任务队列清空，程序就结束执行

> 异步任务的写法通常是回调函数。一旦异步任务重新进入主线程，就会执行对应的回调函数。如果一个异步任务没有回调函数，就不会进入任务队列，也就是说，不会重新进入主线程，因为没有用回调函数指定下一步的操作

JavaScript 引擎怎么知道异步任务有没有结果，能不能进入主线程呢？答案就是引擎在不停地检查，一遍又一遍，只要同步任务执行完了，引擎就会去检查那些挂起来的异步任务，是不是可以进入主线程了。这种循环检查的机制，就叫做事件循环（Event Loop）

事件循环:
只要同步任务执行完了，引擎就会去检查那些挂起来的异步任务，是不是可以进入主线程了。这种循环检查的机制，就叫做事件循环（Event Loop）

因为 IO 操作（输入输出）很慢（比如 Ajax 操作从网络读取数据）, CPU 完全可以不管 IO 操作，挂起处于等待中的任务，先运行排在后面的任务。等到 IO 操作返回了结果(通过循环检查, 即事件循环机制)，再回过头，把挂起的任务继续执行下去。

### 同步任务和异步任务

同步任务是那些没有被引擎挂起、在主线程上排队执行的任务。只有前一个任务执行完毕，才能执行后一个任务。

异步任务是那些被引擎放在一边，不进入主线程、而进入任务队列的任务。只有引擎认为某个异步任务可以执行了（比如 Ajax 操作从服务器得到了结果），该任务（采用回调函数的形式）才会进入主线程执行; 在异步任务后面的代码，不用等待异步任务结束会马上运行

> 举例来说，Ajax 操作可以当作同步任务处理，也可以当作异步任务处理，由开发者决定。如果是同步任务，主线程就等着 Ajax 操作返回结果，再往下执行；如果是异步任务，主线程在发出 Ajax 请求以后，就直接往下执行，等到 Ajax 操作有了结果，主线程再执行对应的回调函数。

### 异步操作的模式

#### 回调函数

回调函数的优点是简单、容易理解和实现，缺点是不利于代码的阅读和维护，各个部分之间高度耦合（coupling），使得程序结构混乱、流程难以追踪（尤其是多个回调函数嵌套的情况），而且每个任务只能指定一个回调函数。

```js
function f1(callback) {
    // ...
    callback();
}

function f2() {
    // ...
}

f1(f2);
```

#### 事件监听

另一种思路是采用事件驱动模式。异步任务的执行不取决于代码的顺序，而取决于某个事件是否发生。

有点是可以绑定多个事件，每个事件可以指定多个回调函数，而且可以”去耦合“（decoupling），有利于实现模块化。缺点是整个程序都要变成事件驱动型，运行流程会变得很不清晰。阅读代码的时候，很难看出主流程。

```js
// 还是以f1和f2为例。首先，为f1绑定一个事件（这里采用的 jQuery 的写法）。
// 代码的意思是，当f1发生done事件，就执行f2

f1.on("done", f2);

// 。然后，对f1进行改写：

function f1() {
    setTimeout(function() {
        // ...
        f1.trigger("done"); // 立即触发done事件，从而开始执行f2
    }, 1000);
}
```

#### 发布/订阅

事件完全可以理解成”信号“，如果存在一个”信号中心“，某个任务执行完成，就向信号中心”发布“（publish）一个信号，其他任务可以向信号中心”订阅“（subscribe）这个信号，从而知道什么时候自己可以开始执行。这就叫做”发布/订阅模式”（publish-subscribe pattern），又称“观察者模式”（observer pattern）。

种方法的性质与“事件监听”类似，但是明显更好。因为可以通过查看“消息中心”，了解存在多少信号、每个信号有多少订阅者，从而监控程序的运行。

下面是借助一个 jQuery 插件实现(https://gist.github.com/661855)

```js
// 首先，f2向信号中心jQuery订阅done信号。

jQuery.subscribe("done", f2);

// 然后，f1进行如下改写。

function f1() {
    setTimeout(function() {
        // ...
        jQuery.publish("done"); // 在f1发布 'done'信号
    }, 1000);
}

// f2完成执行后，可以取消订阅（unsubscribe）。

jQuery.unsubscribe("done", f2);
```

### 异步操作的流程控制

如果有多个异步操作，就存在一个流程控制的问题：如何确定异步操作执行的顺序，以及如何保证遵守这种顺序。

#### 串行执行

```js
// 我们可以编写一个流程控制函数，让它来控制异步任务，一个任务完成以后，再执行另一个。这就叫串行执行。

//函数series就是串行函数，它会依次执行异步任务，所有任务都完成后，才会执行final函数。items数组保存每一个异步任务的参数，results数组保存每一个异步任务的运行结果。

var items = [1, 2, 3, 4, 5, 6];
var results = [];

function async(arg, callback) {
    console.log("参数为 " + arg + " , 1秒后返回结果");
    setTimeout(function() {
        callback(arg * 2);
    }, 1000);
}

function final(value) {
    console.log("完成: ", value);
}

function series(item) {
    if (item) {
        async(item, function(result) {
            results.push(result);
            return series(items.shift());
        });
    } else {
        return final(results[results.length - 1]);
    }
}

series(items.shift());
// 上面的写法需要六秒，才能完成整个脚本
```

#### 并行执行

```js
// 流程控制函数也可以是并行执行，即所有异步任务同时执行，等到全部完成以后，才执行final函数。

var items = [1, 2, 3, 4, 5, 6];
var results = [];

function async(arg, callback) {
    console.log("参数为 " + arg + " , 1秒后返回结果");
    setTimeout(function() {
        callback(arg * 2);
    }, 1000);
}

function final(value) {
    console.log("完成: ", value);
}

items.forEach(function(item) {
    // forEach方法会同时发起六个异步任务，等到它们全部完成以后，才会执行final函数。
    async(item, function(result) {
        results.push(result);
        if (results.length === items.length) {
            final(results[results.length - 1]);
        }
    });
});

// 上面的写法只要一秒，就能完成整个脚本
```

#### 并行串行结合

这就是说，并行执行的效率较高，比起串行执行一次只能执行一个任务，较为节约时间。但是问题在于如果并行的任务较多，很容易耗尽系统资源，拖慢运行速度。因此有了第三种流程控制方式。

```js
// 所谓并行与串行的结合，就是设置一个门槛，每次最多只能并行执行n个异步任务，这样就避免了过分占用系统资源。

var items = [1, 2, 3, 4, 5, 6];
var results = [];
var running = 0;
var limit = 2;

function async(arg, callback) {
    console.log("参数为 " + arg + " , 1秒后返回结果");
    setTimeout(function() {
        callback(arg * 2);
    }, 1000);
}

function final(value) {
    console.log("完成: ", value);
}

function launcher() {
    while (running < limit && items.length > 0) {
        // 如果正在运行的任务数量小于 limit, 那么增加一个运行着的任务
        var item = items.shift();
        async(item, function(result) {
            results.push(result);
            running--;
            if (items.length > 0) {
                launcher();
            } else if (running == 0) {
                // 如果运行着的任务为0, 执行最终函数
                final(results);
            }
        });
        running++;
    }
}

launcher();

// 最多只能同时运行两个异步任务。变量running记录当前正在运行的任务数，只要低于门槛值，就再启动一个新的任务，如果等于0，就表示所有任务都执行完了，这时就执行final函数。

// 这段代码需要三秒完成整个脚本，处在串行执行和并行执行之间。通过调节limit变量，达到效率和资源的最佳平衡。
```

### 定时器

主要由 setTimeout()和 setInterval()这两个函数来完成。它们向任务队列添加定时任务。

#### setTimeout()

setTimeout 函数用来指定某个函数或某段代码，在多少毫秒之后执行。它返回一个整数，表示定时器的编号，以后可以用来取消这个定时器。

`var timerId = setTimeout(func|code, delay[, param1, param2...]);`

`clearTimeout(timerId)` 清除

```js
console.log(1);
setTimeout("console.log(2)", 1000); /// 注意，console.log(2)必须以字符串的形式，作为setTimeout的参数。
console.log(3);
// 1
// 3
// 2

// --------------------------------------------

// 如果推迟执行的是函数，就直接将函数名，作为setTimeout的参数。

function f() {
    console.log(2);
}

setTimeout(f, 1000);

// ------------------------------

// setTimeout的第二个参数如果省略，则默认为0。

setTimeout(f);
// 等同于
setTimeout(f, 0);

// ------------------------------------

// 这里setTimeout共有4个参数。最后那两个参数，将在1000毫秒之后回调函数执行时，作为回调函数的参数。

setTimeout(
    function(a, b) {
        console.log(a + b);
    },
    1000,
    1,
    1
);

// ----------------------------------------------

// 还有一个需要注意的地方，如果回调函数是对象的方法，那么setTimeout使得方法内部的this关键字指向全局环境，而不是定义时所在的那个对象。

var x = 1;

var obj = {
    x: 2,
    y: function() {
        console.log(this.x);
    }
};

setTimeout(obj.y, 1000); // 1

// 那么如何解决?

// 为了防止出现这个问题，一种解决方法是将obj.y放入一个函数。

var x = 1;

var obj = {
    x: 2,
    y: function() {
        console.log(this.x);
    }
};

setTimeout(function() {
    // obj.y放在一个匿名函数之中，这使得obj.y在obj的作用域执行，而不是在全局作用域内执行，所以能够显示正确的值
    obj.y();
}, 1000);
// 2

// 另一种解决方法是，使用bind方法，将obj.y这个方法绑定在obj上面。

var x = 1;

var obj = {
    x: 2,
    y: function() {
        console.log(this.x);
    }
};

setTimeout(obj.y.bind(obj), 1000);
// 2
```

#### setInterval()

setInterval 函数的用法与 setTimeout 完全一致，区别仅仅在于 setInterval 指定某个任务每隔一段时间就执行一次，也就是无限次的定时执行

`var id = setInterval(func|code, period[, param1, param2...]);`

`clearInterval(id)`清除

```js
// 每隔1000毫秒就输出一个2，会无限运行下去，直到关闭当前窗口。

var i = 1;
var timer = setInterval(function() {
    console.log(2);
}, 1000);

// -----------------------------------------------

// 与setTimeout一样，除了前两个参数，setInterval方法还可以接受更多的参数，它们会传入回调函数。

// 下面是一个通过setInterval方法实现网页动画的例子。

var div = document.getElementById("someDiv");
var opacity = 1;
var fader = setInterval(function() {
    opacity -= 0.1;
    if (opacity >= 0) {
        div.style.opacity = opacity;
    } else {
        clearInterval(fader);
    }
}, 100);

// -----------------------------------------------

// setInterval的一个常见用途是实现轮询。下面是一个轮询 URL 的 Hash 值是否发生变化的例子。

var hash = window.location.hash;
var hashWatcher = setInterval(function() {
    if (window.location.hash != hash) {
        updatePage();
    }
}, 1000);

// ---------------------------------------------------

// 为了确保两次执行之间有固定的间隔，可以不用setInterval，而是每次执行结束后，使用setTimeout指定下一次执行的具体时间。

var i = 1;
var timer = setTimeout(function f() {
    // ...
    timer = setTimeout(f, 2000); // 下一次执行总是在本次执行结束之后的2000毫秒开始
}, 2000);
```

#### clearTimeout(),clearInterval()

setTimeout 和 setInterval 返回的整数值是连续的，也就是说，第二个 setTimeout 方法返回的整数值，将比第一个的整数值大 1。

```js
// 利用这一点，可以写一个函数，取消当前所有的setTimeout定时器。

(function() {
    var gid = setInterval(clearAllTimeouts, 0);

    function clearAllTimeouts() {
        var id = setTimeout(function() {}, 0);
        while (id > 0) {
            if (id !== gid) {
                clearTimeout(id);
            }
            id--;
        }
    }
})();
```

#### ajax 防抖动

debounce（防抖动）: 设置一个门槛值，表示两次 Ajax 通信的最小间隔时间。如果在间隔时间内，发生新的 keydown 事件，则不触发 Ajax 通信，并且重新开始计时。如果过了指定时间，没有发生新的 keydown 事件，再将数据发送出去。

```js
// 比如，用户填入网页输入框的内容，希望通过 Ajax 方法传回服务器，jQuery 的写法如下。

$("textarea").on("keydown", ajaxAction);

// 造成大量的 Ajax 通信, 会有性能问题

// ---------------------------------------

// 假定两次 Ajax 通信的间隔不得小于2500毫秒，上面的代码可以改写成下面这样。

$("textarea").on("keydown", debounce(ajaxAction, 2500));

function debounce(fn, delay) {
    var timer = null; // 声明计时器
    return function() {
        var context = this;
        var args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function() {
            fn.apply(context, args);
        }, delay);
    };
}
// 要在2500毫秒之内，用户再次击键，就会取消上一次的定时器，然后再新建一个定时器。这样就保证了回调函数之间的调用间隔，至少是2500毫秒。
```

#### 运行机制

setTimeout 和 setInterval 的运行机制，是将指定的代码移出本轮事件循环，等到下一轮事件循环，再检查是否到了指定时间。如果到了，就执行对应的代码；如果不到，就继续等待。

这意味着，setTimeout 和 setInterval 指定的回调函数，必须等到本轮事件循环的所有同步任务都执行完，才会开始执行。由于前面的任务到底需要多少时间执行完，是不确定的，所以没有办法保证，setTimeout 和 setInterval 指定的任务，一定会按照预定时间执行。

比如:

```js
setTimeout(someTask, 100);
veryLongTask();
// 上面代码的setTimeout，指定100毫秒以后运行一个任务。但是，如果后面的veryLongTask函数（同步任务）运行时间非常长，过了100毫秒还无法结束，那么被推迟运行的someTask就只有等着，等到veryLongTask运行结束，才轮到它执行。

// -------------------------------------------

// 再看一个setInterval的例子。

setInterval(function() {
    console.log(2);
}, 1000);

sleep(3000);

function sleep(ms) {
    var start = Date.now();
    while (Date.now() - start < ms) {}
}
// 上面代码中，setInterval要求每隔1000毫秒，就输出一个2。但是，紧接着的sleep语句需要3000毫秒才能完成，那么setInterval就必须推迟到3000毫秒之后才开始生效。注意，生效后setInterval不会产生累积效应，即不会一下子输出三个2，而是只会输出一个2。
```

#### setTimeout(f,0)

##### 含义

setTimeout 的作用是将代码推迟到指定时间执行，如果指定时间为 0，即 setTimeout(f, 0)，那么会立刻执行吗？

答案是不会。因为上一节说过，必须要等到当前脚本的同步任务，全部处理完以后，才会执行 setTimeout 指定的回调函数 f。也就是说，setTimeout(f, 0)会在下一轮事件循环一开始就执行。

```js
setTimeout(function() {
    console.log(1);
}, 0);
console.log(2);
// 2
// 1
// 上面代码先输出2，再输出1。因为2是同步任务，在本轮事件循环执行，而1是下一轮事件循环执行。
```

总之，setTimeout(f, 0)这种写法的目的是，尽可能早地执行 f，但是并不能保证立刻就执行 f

##### 应用

setTimeout(f, 0)有几个非常重要的用途。它的一大应用是，可以调整事件的发生顺序。比如，网页开发中，某个事件先发生在子元素，然后冒泡到父元素，即子元素的事件回调函数，会早于父元素的事件回调函数触发。如果，想让父元素的事件回调函数先发生，就要用到 setTimeout(f, 0)。

```js
// // HTML 代码如下
// <input type="button" id="myButton" value="click">

var input = document.getElementById("myButton");

input.onclick = function A() {
    setTimeout(function B() {
        input.value += " input";
    }, 0);
};

document.body.onclick = function C() {
    input.value += " body";
};
// 上面代码在点击按钮后，先触发回调函数A，然后触发函数C。函数A中，setTimeout将函数B推迟到下一轮事件循环执行，这样就起到了，先触发父元素的回调函数C的目的了。
```

另一个应用是，用户自定义的回调函数，通常在浏览器的默认动作之前触发。比如，用户在输入框输入文本，keypress 事件会在浏览器接收文本之前触发。因此，下面的回调函数是达不到目的的。

```js
// HTML 代码如下
// <input type="text" id="input-box">

document.getElementById("input-box").onkeypress = function(event) {
    this.value = this.value.toUpperCase();
};
```

上面代码想在用户每次输入文本后，立即将字符转为大写。但是实际上，它只能将本次输入前的字符转为大写，因为浏览器此时还没接收到新的文本，所以 this.value 取不到最新输入的那个字符。只有用 setTimeout 改写，上面的代码才能发挥作用。

```js
document.getElementById("input-box").onkeypress = function() {
    var self = this;
    setTimeout(function() {
        self.value = self.value.toUpperCase();
    }, 0);
};
// 上面代码将代码放入setTimeout之中推迟执行(推迟到下一个事件循环最先执行)，就能使得它在浏览器接收到文本之后触发。
```

由于 setTimeout(f, 0)实际上意味着，将任务放到浏览器最早可得的空闲时段执行，所以那些计算量大、耗时长的任务，常常会被放到几个小部分，分别放到 setTimeout(f, 0)里面执行。

```js
var div = document.getElementsByTagName("div")[0];

// 写法一
for (var i = 0xa00000; i < 0xffffff; i++) {
    div.style.backgroundColor = "#" + i.toString(16);
}

// 写法二
var timer;
var i = 0x100000;

function func() {
    timer = setTimeout(func, 0);
    div.style.backgroundColor = "#" + i.toString(16);
    if (i++ == 0xffffff) clearTimeout(timer);
}

timer = setTimeout(func, 0);
// 上面代码有两种写法，都是改变一个网页元素的背景色。写法一会造成浏览器“堵塞”，因为 JavaScript 执行速度远高于 DOM，会造成大量 DOM 操作“堆积”，而写法二就不会，这就是setTimeout(f, 0)的好处。
```

另一个使用这种技巧的例子是代码高亮的处理。如果代码块很大，一次性处理，可能会对性能造成很大的压力，那么将其分成一个个小块，一次处理一块，比如写成 setTimeout(highlightNext, 50)的样子，性能压力就会减轻。

### Promise 对象

Promise 的优点在于，让回调函数变成了规范的链式写法，程序流程可以看得很清楚

而且，Promise 还有一个传统写法没有的好处：它的状态一旦改变，无论何时查询，都能得到这个状态。这意味着，无论何时为 Promise 实例添加回调函数，该函数都能正确执行。所以，你不用担心是否错过了某个事件或信号。如果是传统写法，通过监听事件来执行回调函数，一旦错过了事件，再添加回调函数是不会执行的。

#### 定义

Promise 对象是 JavaScript 的异步操作解决方案，为异步操作提供统一接口。

它起到代理作用（proxy），充当异步操作与回调函数之间的中介，使得异步操作具备同步操作的接口。Promise 可以让异步操作写起来，就像在写同步操作的流程，而不必一层层地嵌套回调函数

Promise 的设计思想是，所有异步任务都返回一个 Promise 实例。Promise 实例有一个 then 方法，用来指定下一步的回调函数。

ECMAScript 6 将其写入语言标准，目前 JavaScript 原生支持 Promise 对象。

```js
// 首先，Promise 是一个对象，也是一个构造函数。

function f1(resolve, reject) {
    // 异步代码...
}

var p1 = new Promise(f1); // 返回的p1就是一个 Promise 实例。

p1.then(f2);

// --------------------------------------------

// 传统的写法可能需要把f2作为回调函数传入f1，比如写成f1(f2)，异步操作完成后，在f1内部调用f2。Promise 使得f1和f2变成了链式写法。不仅改善了可读性，而且对于多层嵌套的回调函数尤其方便。

// 传统写法
step1(function(value1) {
    step2(value1, function(value2) {
        step3(value2, function(value3) {
            step4(value3, function(value4) {
                // ...
            });
        });
    });
});

// Promise 的写法
new Promise(step1)
    .then(step2)
    .then(step3)
    .then(step4);
```

#### Promise 对象的状态

Promise 对象通过自身的状态，来控制异步操作。Promise 实例具有三种状态。

异步操作未完成（pending）
异步操作成功（fulfilled）
异步操作失败（rejected）

上面三种状态里面，fulfilled 和 rejected 合在一起称为 resolved（已定型）

这三种的状态的变化途径只有两种。1. 从“未完成”到“成功”; 2. 从“未完成”到“失败”
一旦状态发生变化，就凝固了，不会再有新的状态变化。这也是 Promise 这个名字的由来，一旦承诺成效，就不得再改变了。这也意味着，Promise 实例的状态变化只可能发生一次。

最终结果: 异步操作成功，Promise 实例传回一个值（value），状态变为 fulfilled。异步操作失败，Promise 实例抛出一个错误（error），状态变为 rejected。

#### Promise 构造函数

```js
// JavaScript 提供原生的Promise构造函数，用来生成 Promise 实例。

// resolve和reject是两个函数，由 JavaScript 引擎提供，不用自己实现

/// resolve函数的作用是，将Promise实例的状态从“未完成”变为“成功”（即从pending变为fulfilled），在异步操作成功时调用，并将异步操作的结果，作为参数传递出去。

// reject函数的作用是，将Promise实例的状态从“未完成”变为“失败”（即从pending变为rejected），在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去。
var promise = new Promise(function (resolve, reject) {
  // ...

  if (/* 异步操作成功 */){
    resolve(value);
  } else { /* 异步操作失败 */
    reject(new Error());
  }
});

// -------------------------------------------

// timeout(100)返回一个 Promise 实例。100毫秒以后，该实例的状态会变为fulfilled。

function timeout(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms, 'done');
  });
}

timeout(100)
```

#### Promise.prototype.then()

Promise 实例的 then 方法，用来添加回调函数

then 方法可以接受两个回调函数，第一个是异步操作成功时（变为 fulfilled 状态）时的回调函数，第二个是异步操作失败（变为 rejected）时的回调函数（该参数可以省略）

```js
var p1 = new Promise(function(resolve, reject) {
    resolve("成功");
});
p1.then(console.log, console.error);
// "成功"

var p2 = new Promise(function(resolve, reject) {
    reject(new Error("失败"));
});
p2.then(console.log, console.error);
// Error: 失败

// ----------------------------------------------

// then方法可以链式使用。

p1.then(step1)
    .then(step2)
    .then(step3)
    .then(console.log, console.error);

// 最后一个then方法，回调函数是console.log和console.error，用法上有一点重要的区别:

// console.log只显示step3的返回值(即"最终值")

// 而console.error可以显示p1、step1、step2、step3之中任意一个发生的错误(任意一步错误, 就不会继续往下执行了)

// -------------------------------------------------

// 下面是使用 Promise 完成图片的加载。

var preloadImage = function(path) {
    return new Promise(function(resolve, reject) {
        var image = new Image();
        image.onload = resolve;
        image.onerror = reject;
        image.src = path;
    });
};

// 上面的preloadImage函数用法如下。

preloadImage("https://example.com/my.jpg")
    .then(function(e) {
        document.body.append(e.target);
    })
    .then(function() {
        console.log("加载成功");
    });
```

#### 微任务

Promise 的回调函数不是正常的异步任务，而是微任务（microtask）。它们的区别在于，正常异步任务追加到下一轮事件循环开始，微任务追加到本轮事件循环末尾。这意味着，微任务的执行时间一定早于正常任务。

```js
// 推迟到下一轮事件循环开始
setTimeout(function() {
    console.log(1);
}, 0);

// 推迟到本轮事件循环末尾
new Promise(function(resolve, reject) {
    resolve(2);
}).then(console.log);

// 正常同步任务
console.log(3);
// 3
// 2
// 1
```

## DOM

### dom 定义

#### 什么是 dom

DOM 是 JavaScript 操作网页的接口，全称为“文档对象模型”（Document Object Model）。它的作用是将网页转为一个 JavaScript 对象，从而可以用脚本进行各种操作

浏览器会根据 DOM 模型，将结构化文档（比如 HTML 和 XML）解析成一系列的节点，再由这些节点组成一个树状结构（DOM Tree）

DOM 只是一个接口规范，可以用各种语言实现。所以严格地说，DOM 不是 JavaScript 语法的一部分

#### 什么是节点

DOM 的最小组成单位叫做节点（node）。文档的树形结构（DOM 树），就是由各种不同类型的节点组成

节点的类型有七种。

Document：整个文档树的顶层节点
DocumentType：doctype 标签（比如`<!DOCTYPE html>`）
Element：网页的各种 HTML 标签（比如`<body>、<a>`等）
Attribute：网页元素的属性（比如 class="right"）
Text：标签之间或标签包含的文本
Comment：注释
DocumentFragment：文档的片段

浏览器提供一个原生的节点对象 Node，上面这七种节点都继承了 Node

#### dom 树

一个 dom 可以被抽象为 一种树状结构 -------> dom 树(有一个顶层节点，下一层都是顶层节点的子节点，然后子节点又有自己的子节点，就这样层层衍生出一个金字塔结构)

浏览器原生提供 document 节点，代表整个文档。

文档的第一层只有一个节点，就是 HTML 网页的第一个标签`<html>`

除了根节点，其他节点都有三种层级关系。

父节点关系（parentNode）：直接的那个上级节点
子节点关系（childNodes）：直接的下级节点
同级节点关系（sibling）：拥有同一个父节点的节点

### Node 接口

[传送门](https://wangdoc.com/javascript/dom/node.html)

### Document 节点

### Element 节点

### 操作 CSS

## 事件

事件的本质是程序各个组成部分之间的一种通信方式，也是异步编程的一种实现。DOM 支持大量的事件

### EventTarget 接口

DOM 的事件操作（监听和触发），都定义在 EventTarget 接口。所有节点对象都部署了这个接口，

该接口主要提供三个实例方法。

addEventListener：绑定事件的监听函数
removeEventListener：移除事件的监听函数
dispatchEvent：触发事件

#### addEventListener()

EventTarget.addEventListener()用于在当前节点或对象上，定义一个特定事件的监听函数。一旦这个事件发生，就会执行监听函数。该方法没有返回值

`target.addEventListener(type, listener[, useCapture]);`

该方法接受三个参数。

-   type：事件名称，大小写敏感。
-   listener：监听函数。事件发生时，会调用该监听函数。第二个参数除了监听函数，还可以是一个具有 handleEvent 方法的对象
-   useCapture：布尔值，表示监听函数是否在捕获阶段（capture）触发（参见后文《事件的传播》部分），默认为 false（监听函数只在冒泡阶段被触发）。该参数可选。第三个参数除了布尔值 useCapture，还可以是一个属性配置对象

```js
// button节点的addEventListener方法绑定click事件的监听函数hello，该函数只在冒泡阶段触发。
function hello() {
    console.log("Hello world");
}

var button = document.getElementById("btn");
button.addEventListener("click", hello, false);

// ============================

// 首先，第二个参数除了监听函数，还可以是一个具有handleEvent方法的对象。

buttonElement.addEventListener("click", {
    handleEvent: function(event) {
        console.log("click");
    }
});

//= ==========================

/*
第三个参数除了布尔值useCapture，还可以是一个属性配置对象。该对象有以下属性。

    > capture：布尔值，表示该事件是否在捕获阶段触发监听函数。
    > once：布尔值，表示监听函数是否只触发一次，然后就自动移除。
    > passive：布尔值，表示监听函数不会调用事件的preventDefault方法。如果监听函数调用了，浏览器将忽略这个要求，并在监控台输出一行警告。
**/

// 如果希望事件监听函数只执行一次，可以打开属性配置对象的once属性。

element.addEventListener(
    "click",
    function(event) {
        // 只执行一次的代码
    },
    { once: true }
);

// ==============================

// 如果希望向监听函数传递参数，可以用匿名函数包装一下监听函数。

function print(x) {
    console.log(x);
}

var el = document.getElementById("div1");
el.addEventListener(
    "click",
    function() {
        print("Hello");
    },
    false
);

// ======================

// 监听函数内部的this，指向当前事件所在的那个对象。

// HTML 代码如下
// <p id="para">Hello</p>
var para = document.getElementById("para");
para.addEventListener(
    "click",
    function(e) {
        console.log(this.nodeName); // "P"
    },
    false
);
```

#### removeEventListener()

移除 addEventListener 方法添加的事件监听函数。该方法没有返回值。

removeEventListener 方法的参数，与 addEventListener 方法完全一致。它的第一个参数“事件类型”，大小写敏感

```js
// 注意，removeEventListener方法移除的监听函数，必须是addEventListener方法添加的那个监听函数，而且必须在同一个元素节点，否则无效。

div.addEventListener("click", function(e) {}, false);
div.removeEventListener("click", function(e) {}, false);
// 上面代码中，removeEventListener方法无效，因为监听函数不是同一个匿名函数。

element.addEventListener("mousedown", handleMouseDown, true);
element.removeEventListener("mousedown", handleMouseDown, false);
// 上面代码中，removeEventListener方法也是无效的，因为第三个参数不一样。
```

#### dispatchEvent()

在当前节点上触发指定事件，从而触发监听函数的执行。该方法返回一个布尔值，只要有一个监听函数调用了 Event.preventDefault()，则返回值为 false，否则为 true。

```js
para.addEventListener("click", hello, false);
var event = new Event("click");
para.dispatchEvent(event);
// 上面代码在当前节点触发了click事件。

//====================

// 下面代码根据dispatchEvent方法的返回值，判断事件是否被取消了。

var canceled = !cb.dispatchEvent(event);
if (canceled) {
    console.log("事件取消");
} else {
    console.log("事件未取消");
}
```

### Event 对象

#### Event 定义

事件发生以后，会产生一个事件对象，作为参数传给监听函数。浏览器原生提供一个 Event 对象，所有的事件都是这个对象的实例，或者说继承了 Event.prototype 对象

-   Event 对象本身就是一个构造函数，可以用来生成新的实例

-   Event 构造函数接受两个参数。第一个参数 type 是字符串，表示事件的名称；第二个参数 options 是一个对象，表示事件对象的配置。该对象主要有下面两个属性。

    -   bubbles：布尔值，可选，默认为 false，表示事件对象是否冒泡。如果不是显式指定 bubbles 属性为 true，生成的事件就只能在“捕获阶段”触发监听函数

    -   cancelable：布尔值，可选，默认为 false，表示事件是否可以被取消，即能否用 Event.preventDefault()取消这个事件。一旦事件被取消，就好像从来没有发生过，不会触发浏览器对该事件的默认行为。

```js
var ev = new Event("look", {
    bubbles: true,
    cancelable: false
});
document.dispatchEvent(ev);

// =========================================

// HTML 代码为
// <div><p>Hello</p></div>
var div = document.querySelector("div");
var p = document.querySelector("p");

function callback(event) {
    var tag = event.currentTarget.tagName;
    console.log("Tag: " + tag); // 没有任何输出
}

div.addEventListener("click", callback, false); // 不在捕获阶段监听, 即在冒泡阶段监听

var click = new Event("click"); // 默认不冒泡
p.dispatchEvent(click);
// 上面代码中，p元素发出一个click事件，该事件默认不会冒泡。div.addEventListener方法指定在冒泡阶段监听，因此监听函数不会触发。
// 如果写成div.addEventListener('click', callback, true)，那么在“捕获阶段”可以监听到这个事件。
// 如果这个事件在div元素上触发, 那么，不管div元素是在冒泡阶段监听，还是在捕获阶段监听，都会触发监听函数。因为这时div元素是事件的目标，不存在是否冒泡的问题，div元素总是会接收到事件，因此导致监听函数生效
```

#### 实例属性

##### Event.bubbles 和 Event.eventPhase

Event.bubbles 属性返回一个布尔值，表示当前事件是否会冒泡。该属性为只读属性; 除非显式声明，Event 构造函数生成的事件，默认是不冒泡的。

Event.eventPhase 属性返回一个整数常量，表示事件目前所处的阶段。该属性只读, Event.eventPhase 的返回值有四种可能:

0，事件目前没有发生。
1，事件目前处于捕获阶段，即处于从祖先节点向目标节点的传播过程中。
2，事件到达目标节点，即 Event.target 属性指向的那个节点。
3，事件处于冒泡阶段，即处于从目标节点向祖先节点的反向传播过程中。

##### Event.cancelable 和 Event.cancelBubble 和 Event.defaultPrevented

Event.cancelable 属性返回一个布尔值，表示事件是否可以取消。该属性为只读属性; 大多数浏览器的原生事件是可以取消的。比如，取消 click 事件，点击链接将无效。但是除非显式声明，Event 构造函数生成的事件，默认是不可以取消的

```js
var evt = new Event("foo");
evt.cancelable; // false
```

当 Event.cancelable 属性为 true 时，调用 Event.preventDefault()就可以取消这个事件，阻止浏览器对该事件的默认行为。

Event.cancelBubble 属性是一个布尔值，如果设为 true，相当于执行 Event.stopPropagation()，可以阻止事件的传播。

Event.defaultPrevented 属性返回一个布尔值，表示该事件是否调用过 Event.preventDefault 方法。该属性只读。

##### Event.currentTarget 和 Event.target

Event.currentTarget 属性返回事件当前所在的节点，即正在执行的监听函数所绑定的那个节点。

Event.target 属性返回原始触发事件的那个节点，即事件最初发生的节点, 事件传播过程中, 总是不变

##### Event.type

```js
// Event.type属性返回一个字符串，表示事件类型。事件的类型是在生成事件的时候。该属性只读。

var evt = new Event("foo");
evt.type; // "foo"
```

##### Event.timeStamp

```js
// Event.timeStamp属性返回一个毫秒时间戳，表示事件发生的时间。它是相对于网页加载成功开始计算的。

var evt = new Event("foo");
evt.timeStamp; // 3683.6999999995896
```

##### Event.isTrusted

Event.isTrusted 属性返回一个布尔值，表示该事件是否由真实的用户行为产生。比如，用户点击链接会产生一个 click 事件，该事件是用户产生的；Event 构造函数生成的事件，则是脚本产生的。

##### Event.detail

Event.detail 属性只有浏览器的 UI （用户界面）事件才具有。该属性返回一个数值，表示事件的某种信息。具体含义与事件类型相关。比如，对于 click 和 dbclick 事件，Event.detail 是鼠标按下的次数（1 表示单击，2 表示双击，3 表示三击）；对于鼠标滚轮事件，Event.detail 是滚轮正向滚动的距离，负值就是负向滚动的距离，返回值总是 3 的倍数。

```js
// HTML 代码如下
// <p>Hello</p>
function giveDetails(e) {
    console.log(e.detail);
}

document.querySelector("p").onclick = giveDetails;
```

#### 实例方法

##### Event.preventDefault()

Event.preventDefault 方法取消浏览器对当前事件的默认行为; 该方法生效的前提是，事件对象的 cancelable 属性为 true，如果为 false，调用该方法没有任何效果。

该方法只是取消事件对当前元素的默认影响，不会阻止事件的传播。如果要阻止传播，可以使用 stopPropagation()或 stopImmediatePropagation()方法。

```js
// 利用这个方法，可以为文本输入框设置校验条件。如果用户的输入不符合条件，就无法将字符输入文本框。

// HTML 代码为
// <input type="text" id="my-input" />
var input = document.getElementById("my-input");
input.addEventListener("keypress", checkName, false);

function checkName(e) {
    if (e.charCode < 97 || e.charCode > 122) {
        e.preventDefault();
    }
}
// 上面代码为文本框的keypress事件设定监听函数后，将只能输入小写字母，否则输入事件的默认行为（写入文本框）将被取消，导致不能向文本框输入内容。
```

##### Event.stopPropagation()

```js
// stopPropagation方法阻止事件在 DOM 中继续传播，防止再触发定义在别的节点上的监听函数，但是不包括在当前节点上其他的事件监听函数。

function stopEvent(e) {
    e.stopPropagation();
}

el.addEventListener("click", stopEvent, false);
// 上面代码中，click事件将不会进一步冒泡到el节点的父节点。
```

##### Event.stopImmediatePropagation()

Event.stopImmediatePropagation 方法阻止同一个事件的其他监听函数被调用，不管监听函数定义在当前节点还是其他节点。也就是说，该方法阻止事件的传播，比 Event.stopPropagation()更彻底。

如果同一个节点对于同一个事件指定了多个监听函数，这些函数会根据添加的顺序依次调用。只要其中有一个监听函数调用了 Event.stopImmediatePropagation 方法，其他的监听函数就不会再执行了。

```js
function l1(e) {
    e.stopImmediatePropagation();
}

function l2(e) {
    console.log("hello world");
}

el.addEventListener("click", l1, false);
el.addEventListener("click", l2, false);
// 上面代码在el节点上，为click事件添加了两个监听函数l1和l2。由于l1调用了event.stopImmediatePropagation方法，所以l2不会被调用。
```

##### Event.composedPath()

```js
// Event.composedPath()返回一个数组，成员是事件的最底层节点和依次冒泡经过的所有上层节点。

// HTML 代码如下
// <div>
//   <p>Hello</p>
// </div>
var div = document.querySelector("div");
var p = document.querySelector("p");

div.addEventListener(
    "click",
    function(e) {
        console.log(e.composedPath());
    },
    false
);
// [p, div, body, html, document, Window]
// 上面代码中，click事件的最底层节点是p，向上依次是div、body、html、document、Window。
```

## 浏览器模型

### 浏览器环境

浏览器提供的各种 JavaScript 接口, 使得 js 有操纵浏览器的能力

#### js 嵌入网页的方法

##### 通过 script 元素嵌入

可以直接嵌入脚本， 也可以嵌入外部文件

```html
<!-- 
text/javascript：这是默认值，也是历史上一贯设定的值。如果你省略type属性，默认就是这个值。对于老式浏览器，设为这个值比较好
application/javascript：对于较新的浏览器，建议设为这个值
 -->
<script>
    var x = 1 + 5;
    console.log(x);
</script>

<!-- 
  浏览器不会执行，也不会显示它的内容，因为不认识它的type属性。但是，这个<script>节点依然存在于 DOM 之中，可以使用<script>节点的text属性读出它的内容: document.getElementById('mydata').text
 -->
<script id="mydata" type="x-custom-data">
    console.log('Hello World');
</script>

<!-- 
  ==================================================
 -->

<script src="https://www.example.com/script.js"></script>

<!-- 如果脚本文件使用了非英语字符，还应该注明字符的编码。 -->
<script charset="utf-8" src="https://www.example.com/script.js"></script>

<!-- 为了防止攻击者篡改外部脚本，script标签允许设置一个integrity属性，写入该外部脚本的 Hash 签名，用来验证脚本的一致性。
一旦有人改了这个脚本，导致 SHA256 签名不匹配，浏览器就会拒绝加载 -->
<script
    src="/assets/application.js"
    integrity="sha256-TvVUHzSfftWg1rcfL6TIJ0XKEGrgLyEq6lEpcmrG9qs="
></script>
```

##### 通过事件属性嵌入

```html
<button id="myBtn" onclick="console.log(this.id)">点击</button>
<!-- 上面的事件属性代码只有一个语句。如果有多个语句，使用分号分隔即可。 -->
```

##### 通过 url 协议嵌入

```html
<!-- URL 支持javascript:协议，即在 URL 的位置写入代码，使用这个 URL 的时候就会执行 JavaScript 代码。
  浏览器的地址栏也可以执行javascipt:协议。将javascript:console.log('Hello')放入地址栏，按回车键也会执行这段代码。
 -->

<a href="javascript:console.log('Hello')">点击</a>

<!-- 如果 JavaScript 代码返回一个字符串，浏览器就会新建一个文档，展示这个字符串的内容，原有文档的内容都会消失。 -->

<a href="javascript: new Date().toLocaleTimeString();">点击</a>

<!-- avascript:协议的常见用途是书签脚本 Bookmarklet。由于浏览器的书签保存的是一个网址，所以javascript:网址也可以保存在里面，用户选择这个书签的时候，就会在当前页面执行这个脚本。为了防止书签替换掉当前文档，可以在脚本前加上void，或者在脚本最后加上void 0。 -->

<a href="javascript: void new Date().toLocaleTimeString();">点击</a>
<a href="javascript: new Date().toLocaleTimeString();void 0;">点击</a>
<!-- 上面这两种写法，点击链接后，执行代码都不会网页跳转。 -->
```

#### script 元素

##### 工作原理

浏览器加载 JavaScript 脚本，主要通过`<script>`元素完成。正常的网页加载流程是这样的。

-> 浏览器一边下载 HTML 网页，一边开始解析。也就是说，不等到下载完，就开始解析。
-> 解析过程中，浏览器发现`<script>`元素，就暂停解析，把网页渲染的控制权转交给 JavaScript 引擎。
-> 如果`<script>`元素引用了外部脚本，就下载该脚本再执行，否则就直接执行代码。
-> JavaScript 引擎执行完毕，控制权交还渲染引擎，恢复往下解析 HTML 网页。

加载外部脚本时，浏览器会暂停页面渲染，等待脚本下载并执行完成后，再继续渲染。原因是 JavaScript 代码可以修改 DOM，所以必须把控制权让给它，否则会导致复杂的线程竞赛的问题。

如果外部脚本加载时间很长（一直无法完成下载），那么浏览器就会一直等待脚本下载完成，造成网页长时间失去响应，浏览器就会呈现“假死”状态，这被称为“阻塞效应”。

为了避免这种情况，较好的做法是将`<script>`标签都放在页面底部，而不是头部。这样有至少有 2 个好处, 一, 即使遇到脚本失去响应，网页主体的渲染也已经完成了，用户至少可以看到内容，而不是面对一张空白的页面. 二, 因为在 DOM 结构生成之前就调用 DOM 节点，JavaScript 会报错，如果脚本都在网页尾部加载，就不存在这个问题，因为这时 DOM 肯定已经生成了。

##### defer 属性

```html
<!-- 
  为了解决脚本文件下载阻塞网页渲染的问题，一个方法是对<script>元素加入defer属性。它的作用是延迟脚本的执行，等到 DOM 加载生成后，再执行脚本。

  这里 a.js和b.js会同时下载, 但是执行顺序是先a, 后b, 这是为了保证脚本之间的依赖关系不受到破坏

  对于内置而不是加载外部脚本的script标签，以及动态生成的script标签，defer属性不起作用
 -->

<script src="a.js" defer></script>
<script src="b.js" defer></script>

<!-- 
  有了defer属性，浏览器下载脚本文件的时候，不会阻塞页面渲染。下载的脚本文件在DOMContentLoaded事件触发前执行（即刚刚读取完</html>标签），而且可以保证执行顺序就是它们在页面上出现的顺序。
 -->
```

defer 属性的运行流程如下。

-> 浏览器开始解析 HTML 网页。
-> 解析过程中，发现带有 defer 属性的`<script>`元素。
-> 浏览器继续往下解析 HTML 网页，同时并行下载`<script>`元素加载的外部脚本。
-> 浏览器完成解析 HTML 网页，此时再回过头执行已经下载完成的脚本。

##### async 属性

解决“阻塞效应”的另一个方法是对`<script>`元素加入 async 属性

async 属性的作用是，使用另一个进程下载脚本，下载时不会阻塞渲染。

-> 浏览器开始解析 HTML 网页。
-> 解析过程中，发现带有 async 属性的 script 标签。
-> 浏览器继续往下解析 HTML 网页，同时并行下载 `<script>`标签中的外部脚本。
-> 脚本下载完成，浏览器暂停解析 HTML 网页，开始执行下载的脚本。
-> 脚本执行完毕，浏览器恢复解析 HTML 网页。

需要注意的是，一旦采用这个属性，就无法保证脚本的执行顺序。哪个脚本先下载结束，就先执行那个脚本

defer 属性和 async 属性到底应该使用哪一个？

一般来说，如果脚本之间没有依赖关系，就使用 async 属性，如果脚本之间有依赖关系，就使用 defer 属性。如果同时使用 async 和 defer 属性，后者不起作用，浏览器行为由 async 属性决定。

##### 脚本的动态加载

```js
// <script>元素还可以动态生成，生成后再插入页面，从而实现脚本的动态加载。

["a.js", "b.js"].forEach(function(src) {
    var script = document.createElement("script");
    script.src = src;
    document.head.appendChild(script);
});

// 这种方法的好处是，动态生成的script标签不会阻塞页面渲染，也就不会造成浏览器假死。但是问题在于，这种方法无法保证脚本的执行顺序，哪个脚本文件先下载完成，就先执行哪个。

// 如果想避免这个问题，可以设置async属性为false。

["a.js", "b.js"].forEach(function(src) {
    var script = document.createElement("script");
    script.src = src;
    script.async = false;
    document.head.appendChild(script);
});

// 上面的代码不会阻塞页面渲染，而且可以保证b.js在a.js后面执行。不过需要注意的是，在这段代码后面加载的脚本文件，会因此都等待b.js执行完成后再执行。
```

##### 加载使用的协议

```html
<!-- 如果不指定协议，浏览器默认采用 HTTP 协议下载。 -->

<script src="example.js"></script>

<!-- 上面的example.js默认就是采用 HTTP 协议下载，如果要采用 HTTPS 协议下载，必需写明。 -->

<script src="https://example.js"></script>

<!-- 但是有时我们会希望，根据页面本身的协议来决定加载协议，这时可以采用下面的写法。 -->

<script src="//example.js"></script>
```

#### 浏览器组成

浏览器的核心是两部分：渲染引擎和 JavaScript 解释器（又称 JavaScript 引擎）。

##### 渲染引擎

渲染引擎处理网页，通常分成四个阶段。

-> 解析代码：HTML 代码解析为 DOM，CSS 代码解析为 CSSOM（CSS Object Model）。
-> 对象合成：将 DOM 和 CSSOM 合成一棵渲染树（render tree）。
-> 布局：计算出渲染树的布局（layout）。
-> 绘制：将渲染树绘制到屏幕。

##### 重流和重绘

渲染树转换为网页布局，称为“布局流”（flow）；布局显示到页面的这个过程，称为“绘制”（paint）。它们都具有阻塞效应，并且会耗费很多时间和计算资源。

页面生成以后，脚本操作和样式表操作，都会触发“重流”（reflow）和“重绘”（repaint）。用户的互动也会触发重流和重绘，比如设置了鼠标悬停（a:hover）效果、页面滚动、在输入框中输入文本、改变窗口大小等等。

重流和重绘并不一定一起发生，重流必然导致重绘，重绘不一定需要重流。比如改变元素颜色，只会导致重绘，而不会导致重流；改变元素的布局，则会导致重绘和重流。

下面是一些优化技巧。

-   读取 DOM 或者写入 DOM，尽量写在一起，不要混杂。不要读取一个 DOM 节点，然后立刻写入，接着再读取一个 DOM 节点。

-   缓存 DOM 信息。

-   不要一项一项地改变样式，而是使用 CSS class 一次性改变样式。

-   使用 documentFragment 操作 DOM

-   动画使用 absolute 定位或 fixed 定位，这样可以减少对其他元素的影响。

-   只在必要时才显示隐藏元素。

-   使用 window.requestAnimationFrame()，因为它可以把代码推迟到下一次重流时执行，而不是立即要求页面重流。

-   使用虚拟 DOM（virtual DOM）库。
