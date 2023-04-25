---
title: Java Clean Code Tips
tags: [java]
date: 2015-02-10 22:27:26
toc_min_heading_level: 2
toc_max_heading_level: 5
---

<div align="center">
记录一些java代码优化的小经验.
代码的优化可以考虑两方面: 1、减小代码的体积; 2、提高代码运行的效率
</div>

<!--more-->

<!-- TOC -->

- [1. 指定类, 方法为final](#1-%E6%8C%87%E5%AE%9A%E7%B1%BB-%E6%96%B9%E6%B3%95%E4%B8%BAfinal)
- [2. 重用对象](#2-%E9%87%8D%E7%94%A8%E5%AF%B9%E8%B1%A1)
- [3. 使用局部变量](#3-%E4%BD%BF%E7%94%A8%E5%B1%80%E9%83%A8%E5%8F%98%E9%87%8F)
- [4. 及时关闭流](#4-%E5%8F%8A%E6%97%B6%E5%85%B3%E9%97%AD%E6%B5%81)
- [5. 减少对变量的重复计算](#5-%E5%87%8F%E5%B0%91%E5%AF%B9%E5%8F%98%E9%87%8F%E7%9A%84%E9%87%8D%E5%A4%8D%E8%AE%A1%E7%AE%97)
- [6. 采用懒加载的策略](#6-%E9%87%87%E7%94%A8%E6%87%92%E5%8A%A0%E8%BD%BD%E7%9A%84%E7%AD%96%E7%95%A5)
- [7. 慎用异常](#7-%E6%85%8E%E7%94%A8%E5%BC%82%E5%B8%B8)
- [8. 循环中禁用try...catch](#8-%E5%BE%AA%E7%8E%AF%E4%B8%AD%E7%A6%81%E7%94%A8trycatch)
- [9. 给容器类组建指定初始容量](#9-%E7%BB%99%E5%AE%B9%E5%99%A8%E7%B1%BB%E7%BB%84%E5%BB%BA%E6%8C%87%E5%AE%9A%E5%88%9D%E5%A7%8B%E5%AE%B9%E9%87%8F)
- [10. 当复制大量数据时，使用System.arraycopy命令](#10-%E5%BD%93%E5%A4%8D%E5%88%B6%E5%A4%A7%E9%87%8F%E6%95%B0%E6%8D%AE%E6%97%B6%E4%BD%BF%E7%94%A8systemarraycopy%E5%91%BD%E4%BB%A4)
- [11. 乘法和除法使用移位操作](#11-%E4%B9%98%E6%B3%95%E5%92%8C%E9%99%A4%E6%B3%95%E4%BD%BF%E7%94%A8%E7%A7%BB%E4%BD%8D%E6%93%8D%E4%BD%9C)
- [12. 循环内不要不断创建对象引用](#12-%E5%BE%AA%E7%8E%AF%E5%86%85%E4%B8%8D%E8%A6%81%E4%B8%8D%E6%96%AD%E5%88%9B%E5%BB%BA%E5%AF%B9%E8%B1%A1%E5%BC%95%E7%94%A8)
- [13. 尽可能使用array，无法确定数组大小时才使用ArrayList](#13-%E5%B0%BD%E5%8F%AF%E8%83%BD%E4%BD%BF%E7%94%A8array%E6%97%A0%E6%B3%95%E7%A1%AE%E5%AE%9A%E6%95%B0%E7%BB%84%E5%A4%A7%E5%B0%8F%E6%97%B6%E6%89%8D%E4%BD%BF%E7%94%A8arraylist)
- [14. 容器组件和线程安全](#14-%E5%AE%B9%E5%99%A8%E7%BB%84%E4%BB%B6%E5%92%8C%E7%BA%BF%E7%A8%8B%E5%AE%89%E5%85%A8)
- [15. 禁止将数组声明为public static final](#15-%E7%A6%81%E6%AD%A2%E5%B0%86%E6%95%B0%E7%BB%84%E5%A3%B0%E6%98%8E%E4%B8%BApublic-static-final)
- [16. 避免随意使用静态变量](#16-%E9%81%BF%E5%85%8D%E9%9A%8F%E6%84%8F%E4%BD%BF%E7%94%A8%E9%9D%99%E6%80%81%E5%8F%98%E9%87%8F)
- [17. 使用同步代码块替代同步方法](#17-%E4%BD%BF%E7%94%A8%E5%90%8C%E6%AD%A5%E4%BB%A3%E7%A0%81%E5%9D%97%E6%9B%BF%E4%BB%A3%E5%90%8C%E6%AD%A5%E6%96%B9%E6%B3%95)
- [18. 程序运行过程中避免使用反射](#18-%E7%A8%8B%E5%BA%8F%E8%BF%90%E8%A1%8C%E8%BF%87%E7%A8%8B%E4%B8%AD%E9%81%BF%E5%85%8D%E4%BD%BF%E7%94%A8%E5%8F%8D%E5%B0%84)
- [19. 使用带缓冲的输入输出流进行IO操作](#19-%E4%BD%BF%E7%94%A8%E5%B8%A6%E7%BC%93%E5%86%B2%E7%9A%84%E8%BE%93%E5%85%A5%E8%BE%93%E5%87%BA%E6%B5%81%E8%BF%9B%E8%A1%8Cio%E6%93%8D%E4%BD%9C)
- [20. 基本数据类型转为字符串](#20-%E5%9F%BA%E6%9C%AC%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B%E8%BD%AC%E4%B8%BA%E5%AD%97%E7%AC%A6%E4%B8%B2)
- [21. 遍历Map](#21-%E9%81%8D%E5%8E%86map)
- [22. 对于ThreadLocal使用前或者使用后一定要先remove](#22-%E5%AF%B9%E4%BA%8Ethreadlocal%E4%BD%BF%E7%94%A8%E5%89%8D%E6%88%96%E8%80%85%E4%BD%BF%E7%94%A8%E5%90%8E%E4%B8%80%E5%AE%9A%E8%A6%81%E5%85%88remove)
- [23. 静态类、单例类、工厂类将它们的构造函数置为private](#23-%E9%9D%99%E6%80%81%E7%B1%BB%E5%8D%95%E4%BE%8B%E7%B1%BB%E5%B7%A5%E5%8E%82%E7%B1%BB%E5%B0%86%E5%AE%83%E4%BB%AC%E7%9A%84%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0%E7%BD%AE%E4%B8%BAprivate)

<!-- /TOC -->

# 指定类, 方法为final

*   为类指定final修饰符可以让类不可以被继承，为方法指定final修饰符可以让方法不可以被重写
*   如果指定了一个类为final，则该类所有的方法都是final的
*   Java编译器会寻找机会内联所有的final方法，内联对于提升Java运行效率作用重大
*   在Java核心API中，有许多应用final的例子，例如java.lang.String，整个类都是final的


# 重用对象

*   特别是String对象的使用，出现字符串连接时应该使用StringBuilder/StringBuffer代替
*   由于Java虚拟机不仅要花时间生成对象，以后可能还需要花时间对这些对象进行垃圾回收和处理，因此，生成过多的对象将会给程序的性能带来很大的影响

# 使用局部变量

*   调用方法时传递的参数以及在方法体中创建的临时变量都保存在栈中，速度较快，其他变量，如静态变量、实例变量等，都在堆中创建，速度较慢。
*   另外，栈中创建的变量，随着方法的运行结束，这些内容就没了，不需要额外的垃圾回收。

# 及时关闭流

*   数据库连接、I/O流操作时务必小心，在使用完毕后，及时关闭以释放资源
*   对资源的close()建议分开操作, 能避免资源泄露

```java
try
{
    XXX.close();
    YYY.close();
}
catch (Exception e)
{
    ...
}

建议修改为：

try
{
    XXX.close();
}
catch (Exception e)
{
    ...
}
try
{
    YYY.close();
}
catch (Exception e)
{
    ...
}
```

# 减少对变量的重复计算

```java
for (int i = 0; i < list.size(); i++)
{...}

建议替换为：

for (int i = 0, length = list.size(); i < length; i++)
{...}
```

这样，在list.size()很大的时候，就减少了很多的消耗

# 采用懒加载的策略

即在需要的时候才创建

```java
String str = "aaa";
if (i == 1)
{
　　list.add(str);
}
建议替换为：

if (i == 1)
{
　　String str = "aaa";
　　list.add(str);
}
```

# 慎用异常

*   异常对性能不利, 异常只能用于错误处理，不应该用来控制程序流程。
*   不捕获Java类库中定义的继承自RuntimeException的运行时异常类

# 循环中禁用try...catch

应该把其放在最外层

# 给容器类组建指定初始容量

如果能估计到待添加的内容长度，为底层以数组方式实现的集合、工具类指定初始长度

比如ArrayList、LinkedLlist、StringBuilder、StringBuffer、HashMap、HashSet等等，以StringBuilder为例：

```java
StringBuilder()　　　　　　// 默认分配16个字符的空间
StringBuilder(int size)　　// 默认分配size个字符的空间
StringBuilder(String str)　// 默认分配16个字符+str.length()个字符空间
```

因为如果没有指定初始容量, 每次元素达到最大容量, 容器需要自动扩容, 这是一个十分耗费资源的操作, 如果事前指定好合适的容量, 避免自动扩容, 性能将极大提升

# 当复制大量数据时，使用System.arraycopy()命令

# 乘法和除法使用移位操作

# 循环内不要不断创建对象引用

```java
for (int i = 1; i <= count; i++)
{
    Object obj = new Object();    
}
这种做法会导致内存中有count份Object对象引用存在，count很大的话，就耗费内存了，建议为改为：

Object obj = null;
for (int i = 0; i <= count; i++)
{
    obj = new Object();
}
```
这样的话，内存中只有一份Object对象引用，每次new Object()的时候，Object对象引用指向不同的Object罢了，但是内存中只有一份，这样就大大节省了内存空间了

# 尽可能使用array，无法确定数组大小时才使用ArrayList

基于效率和类型检查的考虑

# 容器组件和线程安全

尽量使用HashMap、ArrayList、StringBuilder，除非线程安全需要，否则不推荐使用Hashtable、Vector、StringBuffer，后三者由于使用同步机制而导致了性能开销

# 禁止将数组声明为public static final

因为这毫无意义，这样只是定义了引用为static final，实际数组的内容还是可以随意改变的，将数组声明为public更是一个安全漏洞，这意味着这个数组可以被外部类所改变

# 避免随意使用静态变量

当某个对象被定义为static的变量所引用，那么gc通常是不会回收这个对象所占有的堆内存的

```java
public class A
{
    private static B b = new B();  
}
```

此时静态变量b的生命周期与A类相同，如果A类不被卸载，那么引用b指向的B对象会常驻内存，直到程序终止

# 使用同步代码块替代同步方法

除非能确定一整个方法都是需要进行同步的，否则尽量使用同步代码块，避免对那些不需要进行同步的代码也进行了同步，影响了代码执行效率。

# 程序运行过程中避免使用反射

因为耗时严重, 特别是Method的invoke方法，如果确实有必要，一种建议性的做法是`将那些需要通过反射加载的类在项目启动的时候通过反射实例化出一个对象并放入内存`, 将时间消耗转移到项目启动的时候.

# 使用带缓冲的输入输出流进行IO操作

带缓冲的输入输出流，即BufferedReader、BufferedWriter、BufferedInputStream、BufferedOutputStream，这可以极大地提升IO效率

# 基本数据类型转为字符串

把一个基本数据类型转为字符串，基本数据类型.toString()是最快的方式、String.valueOf(数据)次之、数据+""最慢

# 遍历Map

使用iterator遍历

```java
public static void main(String[] args)
{
    HashMap<String, String> hm = new HashMap<String, String>();
    hm.put("111", "222");
        
    Set<Map.Entry<String, String>> entrySet = hm.entrySet();
    Iterator<Map.Entry<String, String>> iter = entrySet.iterator();
    while (iter.hasNext())
    {
        Map.Entry<String, String> entry = iter.next();
        System.out.println(entry.getKey() + "\t" + entry.getValue());
    }
}
```

如果你只是想遍历一下这个Map的key值，那用`Set<String> keySet = hm.keySet();`

# 对于ThreadLocal使用前或者使用后一定要先remove

可以避免内存泄漏

# 静态类、单例类、工厂类将它们的构造函数置为private






