"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[61],{3905:function(n,e,t){t.d(e,{Zo:function(){return p},kt:function(){return g}});var a=t(67294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function l(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function o(n,e){if(null==n)return{};var t,a,r=function(n,e){if(null==n)return{};var t,a,r={},i=Object.keys(n);for(a=0;a<i.length;a++)t=i[a],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(a=0;a<i.length;a++)t=i[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var c=a.createContext({}),s=function(n){var e=a.useContext(c),t=e;return n&&(t="function"==typeof n?n(e):l(l({},e),n)),t},p=function(n){var e=s(n.components);return a.createElement(c.Provider,{value:e},n.children)},u={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(n,e){var t=n.components,r=n.mdxType,i=n.originalType,c=n.parentName,p=o(n,["components","mdxType","originalType","parentName"]),m=s(t),g=r,f=m["".concat(c,".").concat(g)]||m[g]||u[g]||i;return t?a.createElement(f,l(l({ref:e},p),{},{components:t})):a.createElement(f,l({ref:e},p))}));function g(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var i=t.length,l=new Array(i);l[0]=m;var o={};for(var c in e)hasOwnProperty.call(e,c)&&(o[c]=e[c]);o.originalType=n,o.mdxType="string"==typeof n?n:r,l[1]=o;for(var s=2;s<i;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4627:function(n,e,t){t.r(e),t.d(e,{assets:function(){return p},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u}});var a=t(83117),r=t(80102),i=(t(67294),t(3905)),l=["components"],o={title:"\u9020\u4e2a\u5c0f\u8f6e\u5b50 My IOC",tags:["ioc"],authors:["me"]},c="\u4ee3\u7801",s={permalink:"/en/2017/02/01/create-my-own-ioc",editUrl:"https://github.com/xiaoyureed/xiaoyureed.github.io/edit/main/blog/2017-02-01-create-my-own-ioc/index.md",source:"@site/blog/2017-02-01-create-my-own-ioc/index.md",title:"\u9020\u4e2a\u5c0f\u8f6e\u5b50 My IOC",description:"\u5b9a\u4e49\u5bb9\u5668\u63a5\u53e3\u89c4\u8303, \u6709\u6ce8\u518c, \u83b7\u53d6\u7b49\u51e0\u4e2a\u65b9\u6cd5",date:"2017-02-01T00:00:00.000Z",formattedDate:"February 1, 2017",tags:[{label:"ioc",permalink:"/en/tags/ioc"}],readingTime:3.29,hasTruncateMarker:!0,authors:[{name:"Xiao Yu",title:"Unknown",url:"https://github.com/xiaoyureed",imageURL:"https://github.com/xiaoyureed.png",key:"me"}],frontMatter:{title:"\u9020\u4e2a\u5c0f\u8f6e\u5b50 My IOC",tags:["ioc"],authors:["me"]},prevItem:{title:"\u5229\u7528 Redis \u505a\u767b\u5f55\u6b21\u6570\u9650\u5236",permalink:"/en/2018/05/25/redis-login-limitation"},nextItem:{title:"Raspberry Pi as a Dev Server\u6811\u8393\u6d3e\u6298\u817e\u8bb0\u5f55",permalink:"/en/2016/04/09/toss-about-raspberrypi"}},p={authorsImageUrls:[void 0]},u=[],m={toc:u};function g(n){var e=n.components,t=(0,r.Z)(n,l);return(0,i.kt)("wrapper",(0,a.Z)({},m,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u5b9a\u4e49\u5bb9\u5668\u63a5\u53e3\u89c4\u8303, \u6709\u6ce8\u518c, \u83b7\u53d6\u7b49\u51e0\u4e2a\u65b9\u6cd5"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * container \u63a5\u53e3(\u6dfb\u52a0/\u79fb\u9664/\u83b7\u53d6)\n *\n * @version 0.1\n * @author xy\n * @date 2018\u5e746\u67085\u65e5 \u4e0b\u53485:00:34\n */\npublic interface Container {\n\n    /**\n     * \u521d\u59cb\u5316\n     * @param clazzSet \n     */\n    void register(String packageName);\n    \n    /**\n     * \u8c8c\u4f3c\u6682\u65f6\u7528\u4e0d\u5230\n     */\n//    void remove();\n    \n    /**\n     * \u6839\u636e class \u83b7\u53d6 bean\n     * @param clazz\n     * @return\n     */\n    <T> T getByType(Class<T> clazz);\n    \n    /**\n     * \n     * @param name\n     * @return\n     */\n    <T> T getByName(String name);\n}\n\n")),(0,i.kt)("p",null,"\u63d0\u4f9b\u4e00\u4e2a\u9ed8\u8ba4\u5b9e\u73b0"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'/**\n * default container\n *\n * @version 0.1\n * @author xy\n * @date 2018\u5e746\u67085\u65e5 \u4e0b\u534811:20:02\n */\npublic class DefaultContainer implements Container {\n    \n    private static final Logger log = LoggerFactory.getLogger(DefaultContainer.class);\n    \n    /**\n     * store beans\n     * \n     * key -- value\n     * beanSimpleName -- bean\n     */\n    Map<String, Object> beanMap = new ConcurrentHashMap<String, Object>();\n    \n    /**\n     * store dependencies, key: \u6ce8\u5165\u5173\u7cfb, value: bean\'s name(beansMap\u7684key)\n     * \n     * key--value\n     * beanSimpleName.fieldName--beanSimpleName\n     */\n    Map<String, String> relationMap = new ConcurrentHashMap<String, String>();\n    \n    /////////////// \u5355\u4f8b start //////////////////////////\n        \n    private DefaultContainer() {\n    }\n    private static class DefaultContainerHolder {\n    private static final DefaultContainer instance = new DefaultContainer();\n    }\n    public static DefaultContainer me() {\n    return DefaultContainer.DefaultContainerHolder.instance;\n    }\n    //////////////////end//////////////////////\n    \n\n    @SuppressWarnings("unchecked")\n    public <T> T getByType(Class<T> clazz) {\n        Bean beanAnno = clazz.getAnnotation(Bean.class);\n        if (beanAnno != null\n                && StringUtil.isValid(beanAnno.value())) {// use specified beanName\n            String specifiedName = beanAnno.value();\n            log.debug("class [{}]\u6307\u5b9a\u4e86\u6709\u6548beanName[{}]", clazz.getName(), specifiedName);\n            return (T) this.beanMap.get(specifiedName);\n        }\n        else {// use beanSimpleName\n            String simpleName = clazz.getSimpleName();\n            log.debug("class [{}]\u6ca1\u6307\u5b9a\u6709\u6548\u7684beanName, \u4f7f\u7528\u9ed8\u8ba4\u503c(simple bean name)", clazz.getName());\n            return (T) this.beanMap.get(simpleName);\n        }\n    }\n    \n    @SuppressWarnings("unchecked")\n    public <T> T getByName(String name) {\n        return (T) this.beanMap.get(name);\n    }\n\n    public void register(String packageName) {\n        \n        Set<Class<?>> clazzSet = scanPackage(packageName);  \n        \n        init(clazzSet);\n        \n        inject();\n    }\n\n    /**\n     * \u6ce8\u5165\n     */\n    private void inject() {\n        Iterator<Entry<String, String>> ite = relationMap.entrySet().iterator();\n        while(ite.hasNext()) {\n            Entry<String, String> next = ite.next();\n            String value = next.getValue();\n            String key = next.getKey();\n            String[] split = key.split("\\\\.");\n            try {\n                PropertyUtils.setProperty(this.beanMap.get(split[0]), split[1], this.beanMap.get(value));\n            } catch (IllegalAccessException e) {\n                e.printStackTrace();\n            } catch (InvocationTargetException e) {\n                e.printStackTrace();\n            } catch (NoSuchMethodException e) {\n                e.printStackTrace();\n            }\n        }\n    }\n\n\n    /**\n     * \u521b\u5efabean\u5b9e\u4f8b, \u521b\u5efa\u6ce8\u5165\u5173\u7cfb\n     * (\u4e5f\u5c31\u662f\u586b\u5145\u4e24\u4e2amap)\n     * @param clazzSet\n     */\n    private void init(Set<Class<?>> clazzSet) {\n        \n        Iterator<Class<?>> ite = clazzSet.iterator();\n        while(ite.hasNext()) {\n            Class<?> clazz = ite.next();\n            Object bean = null;\n            try {\n                bean = ReflectUtil.createInstance(clazz);\n            } catch (Exception e) {\n                log.error("\u521b\u5efabean[{}]\u51fa\u73b0\u95ee\u9898", clazz.getName(), e);\n            }\n            \n            String specName = clazz.getAnnotation(Bean.class).value();\n            if (StringUtil.isValid(specName)) {\n                this.beanMap.put(specName, bean);\n            }\n            // \u6ca1\u6709\u6307\u5b9abeanname, \u4f7f\u7528bean \u7684 qualifiedName \u6ce8\u518c\n            else {\n                this.beanMap.put(clazz.getName(), bean);\n            }\n            \n            // \u521d\u59cb\u5316 relationMap\n            Field[] fields = clazz.getDeclaredFields();\n            for (Field f: fields) {\n                Inject injectAnno = f.getAnnotation(Inject.class);\n                if (injectAnno != null) {\n                    // \u6307\u5b9a\u4e86\u6ce8\u5165\u7684name\n                    if (StringUtil.isValid(injectAnno.value())) {\n//                        this.relationMap.put(clazz.getName().concat(".").concat(f.getName()), injectAnno.value());\n                        this.relationMap.put(specName.concat(".").concat(f.getName()), injectAnno.value());\n                    }\n                    // \u6ca1\u6709\u6307\u5b9ainjection name\n                    else {\n                        \n//                        this.relationMap.put(clazz.getName() + "." + f.getName(), f.getName());\n                        this.relationMap.put(specName + "." + f.getName(), f.getName());\n                    }\n                }\n            }\n            \n        }\n        \n        \n    }\n    /**\n     * \u626b\u63cf\u6240\u6709class\n     * @param packageName\n     * @return\n     */\n    private Set<Class<?>> scanPackage(String packageName) {\n        Set<Class<?>> result = new LinkedHashSet<Class<?>>();\n        \n        ClassLoader classLoader = Thread.currentThread().getContextClassLoader();\n        // classpath \u4e0b\u6240\u6709\u7684\u8d44\u6e90\u6587\u4ef6\n        Enumeration<URL> urls = null;\n        try {\n            urls = classLoader.getResources(packageName.replace(".", "/"));\n        } catch (IOException e) {\n            e.printStackTrace();\n        }\n        \n        while (urls.hasMoreElements()) {\n            URL url = urls.nextElement();\n            String protocol = url.getProtocol();\n            \n            // \u6587\u672c\u4e2d\u7684 class\n            if ("file".equals(protocol)) {\n                try {\n                    File packageFile = new File(URLDecoder.decode(url.getFile(), "UTF-8"));\n                    \n                    if (!packageFile.exists()\n                            || !packageFile.isDirectory()) {\n                        log.error("package: [{}]\u65e0\u6548", url.getFile());\n                    }\n                    \n                    File[] files = packageFile.listFiles();\n                    \n                    handleFiles(files, result, classLoader, packageName);\n                    \n                } catch (UnsupportedEncodingException e) {\n                    e.printStackTrace();\n                }\n            }\n            // jar \u4e2d\u7684 class\n            else if ("jar".equals(protocol)) {\n                JarURLConnection jarConn;\n                try {\n                    jarConn = (JarURLConnection) url.openConnection();\n                    JarFile jarFile = jarConn.getJarFile();\n                    Enumeration<JarEntry> jarEntry = jarFile.entries();\n                    // TODO\n//                    handleJarFile();\n                } catch (IOException e) {\n                    // TODO Auto-generated catch block\n                    e.printStackTrace();\n                }\n                \n            }\n            else {\n                log.error("\u83b7\u53d6package\u4e0b\u8d44\u6e90\u7684protocal\u51fa\u9519.");\n            }\n        }\n     \n        \n        return result;\n    }\n    \n    private void handleFiles(File[] files, Set<Class<?>> result, ClassLoader classLoader, String packageName) {\n        for (File f: files) {\n            // it\'s a folder, \u9012\u5f52\n            if (f.isDirectory()) {\n                handleFiles(f.listFiles(), result, classLoader, packageName);\n            }\n            // \u662f\u6587\u4ef6\n            else {\n                try {\n                    Class<?> clazz = classLoader.loadClass(packageName + "." + f.getName().substring(0, f.getName().lastIndexOf(".")));\n                    // \u88ab @Bean \u6ce8\u89e3\u624d\u626b\u63cf\n                    Bean beanAnno = clazz.getAnnotation(Bean.class);\n                    if (beanAnno != null) {\n                        /*// specified name\n                        if (StringUtil.isValid(beanAnno.value()) {\n                            \n                        }\n                        // \u9ed8\u8ba4, \u4f7f\u7528 bean \u7684 SimpleName \n                        else {\n                            \n                        }*/\n                        result.add(clazz);\n                    }\n                } catch (ClassNotFoundException e) {\n                    log.error("\u626b\u63cf\u6587\u4ef6[{}]\u53d1\u751f\u9519\u8bef", f.getPath(), e);\n//                    e.printStackTrace();\n                }\n            }\n        }\n        \n    }\n    \n}\n')),(0,i.kt)("p",null,"\u5f53\u7136, \u8fd8\u9700\u8981\u6700\u5c11\u4e24\u4e2a\u6ce8\u89e3. \u9996\u5148\u662f@bean, \u6807\u8bc6\u7eb3\u5165container"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'/**\n * put into the Ioc container\n *\n * @version 0.1\n * @author xy\n * @date 2018\u5e746\u67085\u65e5 \u4e0b\u53487:48:17\n */\n@Documented\n@Retention(RetentionPolicy.RUNTIME)\n@Target({ElementType.TYPE})\npublic @interface Bean {\n\n    String value() default "";\n}\n')),(0,i.kt)("p",null,"\u7136\u540e\u662f@inject, \u4f9d\u8d56\u6ce8\u5165\u65f6\u5019\u7528:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"\n/**\n * inject resources into \n *\n * @version 0.1\n * @author xy\n * @date 2018\u5e746\u67085\u65e5 \u4e0b\u53487:53:21\n */\n@Documented\n@Retention(RetentionPolicy.RUNTIME)\n@Target({ElementType.FIELD})\npublic @interface Inject {\n\n    String value();\n}\n\n")),(0,i.kt)("h1",{id:"\u6d4b\u8bd5"},"\u6d4b\u8bd5"),(0,i.kt)("p",null,"\u5148\u5b9a\u4e49bean"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'@Bean("son")\npublic class Son {\n\n}\n\n@Bean("mama")\n@Data// \u9700\u8981\u5f15\u5165lombok\npublic class Mama {\n\n    @Inject("son")\n    private Son son;\n    \n    // lombok \u63d0\u4f9b getter\n}\n')),(0,i.kt)("p",null,"\u4f7f\u7528:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'public class DefaultContainerTest {\n\n    @Test\n    public void testDefaultContainer() {\n        DefaultContainer container = DefaultContainer.me();\n        container.register("com.xiaoyu.ioc.bean");\n        Object oMama = container.getByName("mama");\n        System.out.println(oMama);\n    }\n}\n')))}g.isMDXComponent=!0}}]);