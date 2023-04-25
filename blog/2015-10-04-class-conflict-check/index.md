---
title: 类冲突检测🌈
tags: [java]
authors: me
---

用于检测jar包依赖冲突，多个版本同时存在
java.lang.NoSuchMethodException, java.lang.ClassNotFoundException

<!-- truncate -->

## 代码

```java
public class ClassConflictCheck {
  // key：class name
  // value: jar name （由于版本问题,一个class可能存在于多个jar中，所以是 set）
    private static Map<String, HashSet<String>> classMap = new HashMap<String, HashSet<String>>();

    public static void check(String classPath) throws Exception {
        File dir = new File(classPath);
        File[] jarFiles = dir.listFiles();
        for (File jarFile : jarFiles) {// 遍历每个 jar
            if (jarFile.getName().endsWith(".jar")) {
                JarFile jar = new JarFile(jarFile);
                Enumeration<JarEntry> enumeration = jar.entries();
                while (enumeration.hasMoreElements()) {// 遍历每个 class
                    JarEntry jarEntry = enumeration.nextElement();
                    if (jarEntry.getName().endsWith(".class")) {
                        storeClassAndJarRel(jarEntry.getName(), jar.getName());
                    }
                }
            }
        }
    }

    /**
    * put className-jarName into map
    */
    private static void storeClassAndJarRel(String className, String jarName) {
      // 获取 jar set
        HashSet<String> jarSet = classMap.get(className);
        if (jarSet == null) {
            jarSet = new HashSet<String>();
        }
        jarSet.add(jarName.substring(jarName.lastIndexOf("/") + 1));
        classMap.put(className, jarSet);
    }

    
    public static void main(String[] args) throws Exception {
        //args = new String[] { "/Users/yuekuo/soft/taobao-tomcat-7.0.54.1/deploy/cloud-mobile-cloudapi-gateway/WEB-INF/lib" };
        for (String arg : args) {
            check(arg);
        }

        boolean isConflict = false;
        for (Iterator<Map.Entry<String, HashSet<String>>> iterator = classMap.entrySet().iterator(); iterator
                .hasNext();) {
            Map.Entry<String, HashSet<String>> entry = iterator.next();
            HashSet<String> jarSet = entry.getValue();
            if (jarSet.size() > 1) {// 若某个 class 对应 的 jar 有多个， 则冲突
                if (!isConflict) {
                    isConflict = true;
                }
                List<String> jarList = Arrays.asList(jarSet.toArray(new String[] {}));
                // 打印冲突的class
                System.out.println("Class conflict!!! the class :" + entry.getKey()
                        + " has been duplicate inclusioned in the jars : " + jarList);
            }
        }

        if(!isConflict) {// 没有冲突
            System.out.println("no class conflict");
        }
    }

}

```

## 怎么使用

```sh
javac ClassConflictCheck.java

java ClassConflictCheck xxx/WEB-INF/lib

```

## 原理

遍历扫描指定目录下 所有.jar 结尾的文件, 通过普通的 File 类构造 jdk 提的 JarFile 对象, 遍历内部出内部的 JarEntry, 可以获取到 classname 和 对应的 jarName , 如果一个 classname 找到了多个 Jarname, 那么 就是重复的, 可以标识出来
