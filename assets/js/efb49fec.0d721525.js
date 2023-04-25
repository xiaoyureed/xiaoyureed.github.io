"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3987],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return g}});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=i.createContext({}),u=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return i.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},p=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(t),g=r,f=p["".concat(l,".").concat(g)]||p[g]||d[g]||a;return t?i.createElement(f,o(o({ref:n},c),{},{components:t})):i.createElement(f,o({ref:n},c))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<a;u++)o[u]=t[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}p.displayName="MDXCreateElement"},4917:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});var i=t(83117),r=t(80102),a=(t(67294),t(3905)),o=["components"],s={title:"\u5229\u7528 Redis \u505a\u767b\u5f55\u6b21\u6570\u9650\u5236",tags:["redis"],authors:["me"]},l="\u57fa\u672c\u601d\u8def",u={permalink:"/2018/05/25/redis-login-limitation",editUrl:"https://github.com/xiaoyureed/xiaoyureed.github.io/edit/main/blog/2018-05-25-redis-login-limitation/index.md",source:"@site/blog/2018-05-25-redis-login-limitation/index.md",title:"\u5229\u7528 Redis \u505a\u767b\u5f55\u6b21\u6570\u9650\u5236",description:"\u6bd4\u5982\u5e0c\u671b\u8fbe\u5230\u7684\u8981\u6c42\u662f\u8fd9\u6837: \u5728 1min \u5185\u767b\u9646\u5f02\u5e38\u6b21\u6570\u8fbe\u52305\u6b21, \u9501\u5b9a\u8be5\u7528\u6237 1h",date:"2018-05-25T00:00:00.000Z",formattedDate:"2018\u5e745\u670825\u65e5",tags:[{label:"redis",permalink:"/tags/redis"}],readingTime:2.42,hasTruncateMarker:!0,authors:[{name:"Xiao Yu",title:"Unknown",url:"https://github.com/xiaoyureed",imageURL:"https://github.com/xiaoyureed.png",key:"me"}],frontMatter:{title:"\u5229\u7528 Redis \u505a\u767b\u5f55\u6b21\u6570\u9650\u5236",tags:["redis"],authors:["me"]},prevItem:{title:"\u6570\u636e\u5e93\u5b9e\u73b0\u8d44\u6599\u68b3\u7406",permalink:"/2021/11/04/make-database-db"},nextItem:{title:"\u9020\u4e2a\u5c0f\u8f6e\u5b50 My IOC",permalink:"/2017/02/01/create-my-own-ioc"}},c={authorsImageUrls:[void 0]},d=[],p={toc:d};function g(e){var n=e.components,t=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u6bd4\u5982\u5e0c\u671b\u8fbe\u5230\u7684\u8981\u6c42\u662f\u8fd9\u6837: \u5728 1min \u5185\u767b\u9646\u5f02\u5e38\u6b21\u6570\u8fbe\u52305\u6b21, \u9501\u5b9a\u8be5\u7528\u6237 1h"),(0,a.kt)("p",null,"\u90a3\u4e48\u767b\u9646\u8bf7\u6c42\u7684\u53c2\u6570\u4e2d, \u4f1a\u6709\u4e00\u4e2a\u53c2\u6570\u552f\u4e00\u6807\u8bc6\u4e00\u4e2a user, \u6bd4\u5982 \u90ae\u7bb1/\u624b\u673a\u53f7/userName"),(0,a.kt)("p",null,'\u7528\u8fd9\u4e2a\u53c2\u6570\u4f5c\u4e3akey\u5b58\u5165redis, \u5bf9\u5e94\u7684value\u4e3a\u767b\u9646\u9519\u8bef\u7684\u6b21\u6570, string \u7c7b\u578b, \u5e76\u8bbe\u7f6e\u8fc7\u671f\u65f6\u95f4\u4e3a 1min. \u5f53\u83b7\u53d6\u5230\u7684 value == "4" , \u8bf4\u660e\u5f53\u524d\u8bf7\u6c42\u4e3a\u7b2c 5 \u6b21\u767b\u9646\u5f02\u5e38, \u9501\u5b9a.'),(0,a.kt)("p",null,'\u6240\u8c13\u7684\u9501\u5b9a, \u5c31\u662f\u5c06\u5bf9\u5e94\u7684value\u8bbe\u7f6e\u4e3a\u67d0\u4e2a\u6807\u8bc6\u7b26, \u6bd4\u5982"lock", \u5e76\u8bbe\u7f6e\u8fc7\u671f\u65f6\u95f4\u4e3a 1h'),(0,a.kt)("h1",{id:"\u6838\u5fc3\u4ee3\u7801"},"\u6838\u5fc3\u4ee3\u7801"),(0,a.kt)("p",null,"\u5b9a\u4e49\u4e00\u4e2a\u6ce8\u89e3, \u7528\u6765\u6807\u8bc6\u9700\u8981\u767b\u9646\u6b21\u6570\u6821\u9a8c\u7684\u65b9\u6cd5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"package io.github.xiaoyureed.redispractice.anno;\n\nimport java.lang.annotation.*;\n\n@Documented\n@Target({ElementType.METHOD})\n@Retention(RetentionPolicy.RUNTIME)\npublic @interface RedisLimit {\n    /**\n     * \u6807\u8bc6\u53c2\u6570\u540d, \u5fc5\u987b\u662f\u8bf7\u6c42\u53c2\u6570\u4e2d\u7684\u4e00\u4e2a\n     */\n    String identifier();\n\n    /**\n     * \u5728\u591a\u957f\u65f6\u95f4\u5185\u76d1\u63a7, \u5982\u5e0c\u671b\u5728 60s \u5185\u5c1d\u8bd5\n     * \u6b21\u6570\u9650\u5236\u4e3a5\u6b21, \u90a3\u4e48 watch=60; unit: s\n     */\n    long watch();\n\n    /**\n     * \u9501\u5b9a\u65f6\u957f, unit: s\n     */\n    long lock();\n\n    /**\n     * \u9519\u8bef\u7684\u5c1d\u8bd5\u6b21\u6570\n     */\n    int times();\n}\n\n")),(0,a.kt)("p",null,"\u7f16\u5199\u5207\u9762, \u5728\u76ee\u6807\u65b9\u6cd5\u524d\u540e\u8fdb\u884c\u6821\u9a8c, \u5904\u7406..."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'package io.github.xiaoyureed.redispractice.aop;\n\n@Component\n@Aspect\n// Ensure that current advice is outer compared with ControllerAOP\n// so we can handling login limitation Exception in this aop advice.\n//@Order(9)\n@Slf4j\npublic class RedisLimitAOP {\n\n    @Autowired\n    private StringRedisTemplate stringRedisTemplate;\n\n    @Around("@annotation(io.github.xiaoyureed.redispractice.anno.RedisLimit)")\n    public Object handleLimit(ProceedingJoinPoint joinPoint) {\n        MethodSignature  methodSignature = (MethodSignature) joinPoint.getSignature();\n        final Method     method          = methodSignature.getMethod();\n        final RedisLimit redisLimitAnno  = method.getAnnotation(RedisLimit.class);// \u8c8c\u4f3c\u53ef\u4ee5\u76f4\u63a5\u5728\u65b9\u6cd5\u53c2\u6570\u4e2d\u6ce8\u5165 todo\n\n        final String identifier = redisLimitAnno.identifier();\n        final long   watch      = redisLimitAnno.watch();\n        final int    times      = redisLimitAnno.times();\n        final long   lock       = redisLimitAnno.lock();\n        // final ServletRequestAttributes att             = (ServletRequestAttributes) RequestContextHolder.currentRequestAttributes();\n        // final HttpServletRequest       request         = att.getRequest();\n        // final String                   identifierValue = request.getParameter(identifier);\n\n        String identifierValue = null;\n        try {\n            final Object arg           = joinPoint.getArgs()[0];\n            final Field  declaredField = arg.getClass().getDeclaredField(identifier);\n            declaredField.setAccessible(true);\n            identifierValue = (String) declaredField.get(arg);\n        } catch (NoSuchFieldException e) {\n            log.error(">>> invalid identifier [{}], cannot find this field in request params", identifier);\n        } catch (IllegalAccessException e) {\n            e.printStackTrace();\n        }\n        if (StringUtils.isBlank(identifierValue)) {\n            log.error(">>> the value of RedisLimit.identifier cannot be blank, invalid identifier: {}", identifier);\n        }\n\n        // check User locked\n        final ValueOperations<String, String> ssOps = stringRedisTemplate.opsForValue();\n        final String                          flag  = ssOps.get(identifierValue);\n        if (flag != null && "lock".contentEquals(flag)) {\n            final BaseResp result = new BaseResp();\n            result.setErrMsg("user locked");\n            result.setCode("1");\n            return new ResponseEntity<>(result, HttpStatus.OK);\n        }\n\n        ResponseEntity result;\n        try {\n            result = (ResponseEntity) joinPoint.proceed();\n        } catch (Throwable e) {\n            result = handleLoginException(e, identifierValue, watch, times, lock);\n        }\n        return result;\n    }\n\n    private ResponseEntity handleLoginException(Throwable e, String identifierValue, long watch, int times, long lock) {\n        final BaseResp result = new BaseResp();\n        result.setCode("1");\n        if (e instanceof LoginException) {\n            log.info(">>> handle login exception...");\n            final ValueOperations<String, String> ssOps = stringRedisTemplate.opsForValue();\n            Boolean                               exist = stringRedisTemplate.hasKey(identifierValue);\n            // key doesn\'t exist, so it is the first login failure\n            if (exist == null || !exist) {\n                ssOps.set(identifierValue, "1", watch, TimeUnit.SECONDS);\n                result.setErrMsg(e.getMessage());\n                return new ResponseEntity<>(result, HttpStatus.OK);\n            }\n\n            String count = ssOps.get(identifierValue);\n            // has been reached the limitation\n            if (Integer.parseInt(count) + 1 == times) {\n                log.info(">>> [{}] has been reached the limitation and will be locked for {}s", identifierValue, lock);\n                ssOps.set(identifierValue, "lock", lock, TimeUnit.SECONDS);\n                result.setErrMsg("user locked");\n                return new ResponseEntity<>(result, HttpStatus.OK);\n            }\n            ssOps.increment(identifierValue);\n            result.setErrMsg(e.getMessage() + "; you have try " + ssOps.get(identifierValue) + "times.");\n        }\n        log.error(">>> RedisLimitAOP cannot handle {}", e.getClass().getName());\n        return new ResponseEntity<>(result, HttpStatus.OK);\n    }\n}\n\n')),(0,a.kt)("p",null,"\u8fd9\u6837\u4f7f\u7528:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'package io.github.xiaoyureed.redispractice.web;\n\n@RestController\npublic class SessionResources {\n\n    @Autowired\n    private SessionService sessionService;\n\n    /**\n     * 1 min \u4e4b\u5185\u5c1d\u8bd5\u8d85\u8fc75\u6b21, \u9501\u5b9a user 1h\n     */\n    @RedisLimit(identifier = "name", watch = 30, times = 5, lock = 10)\n    @RequestMapping(value = "/session", method = RequestMethod.POST)\n    public ResponseEntity<LoginResp> login(@Validated @RequestBody LoginReq req) {\n        return new ResponseEntity<>(sessionService.login(req), HttpStatus.OK);\n    }\n}\n\n')),(0,a.kt)("h1",{id:"references"},"references"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/xiaoyureed/redis-login-limitation"},"https://github.com/xiaoyureed/redis-login-limitation")))}g.isMDXComponent=!0}}]);