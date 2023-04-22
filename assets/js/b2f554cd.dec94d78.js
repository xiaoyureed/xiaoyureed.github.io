"use strict";(self.webpackChunkwiki_1=self.webpackChunkwiki_1||[]).push([[1477],{10:n=>{n.exports=JSON.parse('{"blogPosts":[{"id":"/2023/04/20/docusaurus-github-pages-blog","metadata":{"permalink":"/blog/2023/04/20/docusaurus-github-pages-blog","editUrl":"https://github.com/xiaoyureed/xiaoyureed.github.io/tree/main/blog/2023-04-20-docusaurus-github-pages-blog/index.md","source":"@site/blog/2023-04-20-docusaurus-github-pages-blog/index.md","title":"\u4f7f\u7528 docusaurus \u548c github pages \u53d1\u5e03\u535a\u5ba2","description":"This article is dedicated to introduce how to establish a blog website by using docusaurus and github pages, and how to auto publish articles by github actions.","date":"2023-04-20T00:00:00.000Z","formattedDate":"2023\u5e744\u670820\u65e5","tags":[{"label":"docusaurus","permalink":"/blog/tags/docusaurus"},{"label":"github pages","permalink":"/blog/tags/github-pages"}],"readingTime":1.385,"hasTruncateMarker":true,"authors":[{"name":"Xiao Yu","title":"Unknown","url":"https://github.com/xiaoyureed","imageURL":"https://github.com/xiaoyureed.png","key":"me"}],"frontMatter":{"title":"\u4f7f\u7528 docusaurus \u548c github pages \u53d1\u5e03\u535a\u5ba2","authors":"me","tags":["docusaurus","github pages"]},"nextItem":{"title":"\u7c7b\u51b2\u7a81\u68c0\u6d4b\ud83c\udf08","permalink":"/blog/2015/10/04/class-conflict-check"}},"content":"This article is dedicated to introduce how to establish a blog website by using docusaurus and github pages, and how to auto publish articles by github actions.\\n\\n\x3c!-- truncate --\x3e\\n\\nDocusaurus \u662f Facebook \u51fa\u54c1\u7684\u4e00\u4e2a\u6587\u6863\u751f\u6210\u5de5\u5177, \u57fa\u4e8e react, \u7b80\u5355\u597d\u7528, \u529f\u80fd\u4e30\u5bcc, \u8fd9\u91cc\u8bb0\u5f55\u4e00\u4e0b\u642d\u5efa\u672c\u7ad9\u70b9\u7684\u8fc7\u7a0b.\\n\\n# \u672c\u5730\u521d\u59cb\u5316\\n\\n\u9996\u5148 `npx create-docusaurus@latest my-website classic --typescript`, \u4f1a\u521b\u5efa\u4e00\u4e2a\u672c\u5730\u7684\u521d\u59cb\u5316\u4ed3\u5e93.\\n\\n\u4fee\u6539 \u914d\u7f6e\u6587\u4ef6\u4e2d\u7684 projectName, organizationName, baseUrl ...\\n\\n# \u521b\u5efa github \u8fdc\u7a0b\u4ed3\u5e93\\n\\nCreate a github repository called `<username>.github.io`\\n\\n`git remote add origin xxx`\\n\\n`git push -u origin main`\\n\\n# \u6dfb\u52a0 github actions\\n\\nCreate ci.yml within the path `.github/workflows`\\n\\n```yml\\nname: Build and Deploy\\non:\\n  # Allows you to run this workflow manually from the Actions tab\\n  workflow_dispatch:\\n  push:\\n    branches: \\n      - main\\npermissions:\\n  contents: read\\n  pages: write\\n  id-token: write\\n\\n# Allow one concurrent deployment\\nconcurrency:\\n  group: \\"pages\\"\\n  cancel-in-progress: true\\n\\nenv:\\n  # Hosted GitHub runners have 7 GB of memory available, let\'s use 6 GB\\n  NODE_OPTIONS: --max-old-space-size=6144\\n\\njobs:\\n  build-and-deploy:\\n    #concurrency: ci-${{ github.ref }} # Recommended if you intend to make multiple deployments in quick succession.\\n    runs-on: ubuntu-latest\\n    steps:\\n      - name: Checkout \ud83d\udece\ufe0f\\n        uses: actions/checkout@v3\\n\\n      - name: Set up nodejs\\n        uses: actions/setup-node@v3\\n        with:\\n          node-version: 18.x\\n          cache: yarn\\n      \\n      - name: Install dependencies && build\\n        run: |\\n          yarn install --frozen-lockfile --non-interactive\\n          yarn build\\n\\n      - name: Deploy to github pages \ud83d\ude80\\n        uses: JamesIves/github-pages-deploy-action@v4\\n        with:\\n          folder: build # The folder the action should deploy.\\n          token: ${{secrets.access_token}}\\n          clean: true\\n          branch: gh-pages\\n\\n```"},{"id":"/2015/10/04/class-conflict-check","metadata":{"permalink":"/blog/2015/10/04/class-conflict-check","editUrl":"https://github.com/xiaoyureed/xiaoyureed.github.io/tree/main/blog/2015-10-04-class-conflict-check/index.md","source":"@site/blog/2015-10-04-class-conflict-check/index.md","title":"\u7c7b\u51b2\u7a81\u68c0\u6d4b\ud83c\udf08","description":"\u7528\u4e8e\u68c0\u6d4bjar\u5305\u4f9d\u8d56\u51b2\u7a81\uff0c\u591a\u4e2a\u7248\u672c\u540c\u65f6\u5b58\u5728","date":"2015-10-04T00:00:00.000Z","formattedDate":"2015\u5e7410\u67084\u65e5","tags":[{"label":"java","permalink":"/blog/tags/java"}],"readingTime":1.915,"hasTruncateMarker":true,"authors":[{"name":"Xiao Yu","title":"Unknown","url":"https://github.com/xiaoyureed","imageURL":"https://github.com/xiaoyureed.png","key":"me"}],"frontMatter":{"title":"\u7c7b\u51b2\u7a81\u68c0\u6d4b\ud83c\udf08","tags":["java"],"authors":"me"},"prevItem":{"title":"\u4f7f\u7528 docusaurus \u548c github pages \u53d1\u5e03\u535a\u5ba2","permalink":"/blog/2023/04/20/docusaurus-github-pages-blog"},"nextItem":{"title":"\u6807\u6ce8\u7f16\u7a0b\u968f\u60f3\u7684\u6587\u7ae0","permalink":"/blog/2015/05/02/defect-about-java-programmer-from-programming-thinking/defect-about-java-programmer-from-programming-thinking"}},"content":"\u7528\u4e8e\u68c0\u6d4bjar\u5305\u4f9d\u8d56\u51b2\u7a81\uff0c\u591a\u4e2a\u7248\u672c\u540c\u65f6\u5b58\u5728\\njava.lang.NoSuchMethodException, java.lang.ClassNotFoundException\\n\\n\x3c!-- truncate --\x3e\\n\\n## \u4ee3\u7801\\n\\n```java\\npublic class ClassConflictCheck {\\n  // key\uff1aclass name\\n  // value: jar name \uff08\u7531\u4e8e\u7248\u672c\u95ee\u9898,\u4e00\u4e2aclass\u53ef\u80fd\u5b58\u5728\u4e8e\u591a\u4e2ajar\u4e2d\uff0c\u6240\u4ee5\u662f set\uff09\\n    private static Map<String, HashSet<String>> classMap = new HashMap<String, HashSet<String>>();\\n\\n    public static void check(String classPath) throws Exception {\\n        File dir = new File(classPath);\\n        File[] jarFiles = dir.listFiles();\\n        for (File jarFile : jarFiles) {// \u904d\u5386\u6bcf\u4e2a jar\\n            if (jarFile.getName().endsWith(\\".jar\\")) {\\n                JarFile jar = new JarFile(jarFile);\\n                Enumeration<JarEntry> enumeration = jar.entries();\\n                while (enumeration.hasMoreElements()) {// \u904d\u5386\u6bcf\u4e2a class\\n                    JarEntry jarEntry = enumeration.nextElement();\\n                    if (jarEntry.getName().endsWith(\\".class\\")) {\\n                        storeClassAndJarRel(jarEntry.getName(), jar.getName());\\n                    }\\n                }\\n            }\\n        }\\n    }\\n\\n    /**\\n    * put className-jarName into map\\n    */\\n    private static void storeClassAndJarRel(String className, String jarName) {\\n      // \u83b7\u53d6 jar set\\n        HashSet<String> jarSet = classMap.get(className);\\n        if (jarSet == null) {\\n            jarSet = new HashSet<String>();\\n        }\\n        jarSet.add(jarName.substring(jarName.lastIndexOf(\\"/\\") + 1));\\n        classMap.put(className, jarSet);\\n    }\\n\\n    \\n    public static void main(String[] args) throws Exception {\\n        //args = new String[] { \\"/Users/yuekuo/soft/taobao-tomcat-7.0.54.1/deploy/cloud-mobile-cloudapi-gateway/WEB-INF/lib\\" };\\n        for (String arg : args) {\\n            check(arg);\\n        }\\n\\n        boolean isConflict = false;\\n        for (Iterator<Map.Entry<String, HashSet<String>>> iterator = classMap.entrySet().iterator(); iterator\\n                .hasNext();) {\\n            Map.Entry<String, HashSet<String>> entry = iterator.next();\\n            HashSet<String> jarSet = entry.getValue();\\n            if (jarSet.size() > 1) {// \u82e5\u67d0\u4e2a class \u5bf9\u5e94 \u7684 jar \u6709\u591a\u4e2a\uff0c \u5219\u51b2\u7a81\\n                if (!isConflict) {\\n                    isConflict = true;\\n                }\\n                List<String> jarList = Arrays.asList(jarSet.toArray(new String[] {}));\\n                // \u6253\u5370\u51b2\u7a81\u7684class\\n                System.out.println(\\"Class conflict!!! the class :\\" + entry.getKey()\\n                        + \\" has been duplicate inclusioned in the jars : \\" + jarList);\\n            }\\n        }\\n\\n        if(!isConflict) {// \u6ca1\u6709\u51b2\u7a81\\n            System.out.println(\\"no class conflict\\");\\n        }\\n    }\\n\\n}\\n\\n```\\n\\n## \u600e\u4e48\u4f7f\u7528\\n\\n```sh\\njavac ClassConflictCheck.java\\n\\njava ClassConflictCheck xxx/WEB-INF/lib\\n\\n```\\n\\n## \u539f\u7406\\n\\n\u904d\u5386\u626b\u63cf\u6307\u5b9a\u76ee\u5f55\u4e0b \u6240\u6709.jar \u7ed3\u5c3e\u7684\u6587\u4ef6, \u901a\u8fc7\u666e\u901a\u7684 File \u7c7b\u6784\u9020 jdk \u63d0\u7684 JarFile \u5bf9\u8c61, \u904d\u5386\u5185\u90e8\u51fa\u5185\u90e8\u7684 JarEntry, \u53ef\u4ee5\u83b7\u53d6\u5230 classname \u548c \u5bf9\u5e94\u7684 jarName , \u5982\u679c\u4e00\u4e2a classname \u627e\u5230\u4e86\u591a\u4e2a Jarname, \u90a3\u4e48 \u5c31\u662f\u91cd\u590d\u7684, \u53ef\u4ee5\u6807\u8bc6\u51fa\u6765"},{"id":"/2015/05/02/defect-about-java-programmer-from-programming-thinking/defect-about-java-programmer-from-programming-thinking","metadata":{"permalink":"/blog/2015/05/02/defect-about-java-programmer-from-programming-thinking/defect-about-java-programmer-from-programming-thinking","editUrl":"https://github.com/xiaoyureed/xiaoyureed.github.io/tree/main/blog/2015-05-02-defect-about-java-programmer-from-programming-thinking/defect-about-java-programmer-from-programming-thinking.md","source":"@site/blog/2015-05-02-defect-about-java-programmer-from-programming-thinking/defect-about-java-programmer-from-programming-thinking.md","title":"\u6807\u6ce8\u7f16\u7a0b\u968f\u60f3\u7684\u6587\u7ae0","description":"\u6765\u81ea: \u7f16\u7a0b\u968f\u60f3; Java \u7a0b\u5e8f\u733f\u7684\u6bdb\u75c5","date":"2015-05-02T00:00:00.000Z","formattedDate":"2015\u5e745\u67082\u65e5","tags":[{"label":"java","permalink":"/blog/tags/java"}],"readingTime":20.43,"hasTruncateMarker":true,"authors":[{"name":"Xiao Yu","title":"Unknown","url":"https://github.com/xiaoyureed","imageURL":"https://github.com/xiaoyureed.png","key":"me"}],"frontMatter":{"title":"\u6807\u6ce8\u7f16\u7a0b\u968f\u60f3\u7684\u6587\u7ae0","tags":["java"],"authors":["me"]},"prevItem":{"title":"\u7c7b\u51b2\u7a81\u68c0\u6d4b\ud83c\udf08","permalink":"/blog/2015/10/04/class-conflict-check"}},"content":"<div align=\\"center\\">\\n\u6765\u81ea: [\u7f16\u7a0b\u968f\u60f3](https://program-think.blogspot.com/2009/01/defect-of-java-beginner-0-overview.html); Java \u7a0b\u5e8f\u733f\u7684\u6bdb\u75c5\\n</div>\\n\\n\\n\x3c!--truncate--\x3e\\n\\n# \u5bf9\u7b97\u6cd5\u548c\u6570\u636e\u7ed3\u6784\u4e0d\u719f\u6089\\n\\n\u2605\u4ec0\u4e48\u65f6\u5019\u8be5\u7528\u6570\u7ec4\u578b\u5bb9\u5668\u3001\u4ec0\u4e48\u65f6\u5019\u8be5\u7528\u94fe\u8868\u578b\u5bb9\u5668\uff1f<font color=\\"green\\"> > \u524d\u8005\u9002\u7528\u4e8e\u67e5\u8be2\u8f83\u591a\u7684\u573a\u666f\u589e\u5220\u7279\u522b\u6162\u56e0\u4e3a\u6d89\u53ca\u5230\u6570\u7ec4\u521b\u5efa\u590d\u5236, \u540e\u8005\u9002\u5408\u589e\u5220\u591a\u7684\u573a\u666f</font>\\n\u2605\u4ec0\u4e48\u662f\u6563\u5217\u51fd\u6570\uff1fHashMap \u7684\u5b9e\u73b0\u539f\u7406\u662f\u4ec0\u4e48\uff1f<font color=\\"green\\"> > \u6563\u5217\u51fd\u6570 see [link](https://www.zhihu.com/question/26762707), hashmap\u901a\u8fc7\u54c8\u5e0c\u8868\u5b9e\u73b0, \u535a\u5ba2\u5185\u641c\u7d22 \\"java core Note\\" </font>\\n\u2605\u4ec0\u4e48\u662f\u9012\u5f52\uff1f\u5982\u679c\u4f60\u4ee5\u524d\u4ece\u6765\u6ca1\u5199\u8fc7\u9012\u5f52\u51fd\u6570\uff0c\u5c1d\u8bd5\u7740\u5199\u4e00\u4e2a\uff08\u6bd4\u5982\u7528\u9012\u5f52\u51fd\u6570\u8fdb\u884c\u76ee\u5f55\u6811\u904d\u5386\uff09\u3002<font color=\\"green\\"> > \u7b80\u5355\u7406\u89e3\u5c31\u662f\u51fd\u6570\u8c03\u7528\u81ea\u8eab, \u9700\u8981\u6709\u7ed3\u675f\u6761\u4ef6, \u4e0d\u7136\u5c31\u6b7b\u5faa\u73af\u4e86 </font>\\n\u2605\u4ec0\u4e48\u662f\u7b97\u6cd5\u590d\u6742\u5ea6\uff1f\\n\u2605\u4f60\u662f\u5426\u7406\u89e3\u7a7a\u95f4\u6362\u65f6\u95f4\u7684\u601d\u60f3\uff1f\\n\u2605\u5199\u4e00\u4e2a\u9488\u5bf9\u6574\u6570\u6570\u7ec4\u7684\u5192\u6ce1\u6392\u5e8f\u51fd\u6570\uff0c\u770b\u770b\u4f60\u8981\u4fee\u6539\u51e0\u6b21\u624d\u80fd\u8dd1\u901a\u3002\\n\u2605\u5199\u4e00\u4e2a\u9488\u5bf9\u6574\u6570\u6570\u7ec4\u7684\u4e8c\u5206\u67e5\u627e\u51fd\u6570\uff0c\u770b\u770b\u4f60\u8981\u4fee\u6539\u51e0\u6b21\u624d\u80fd\u8dd1\u901a\u3002\\n\\n\\n# \u79bb\u5f00\u5f00\u53d1\u6846\u67b6\u6d3b\u4e0d\u4e86\\n\\n\u5bf9 Spring\u3001Hibernate \u7b49\u6846\u67b6\u4e86\u5982\u6307\u638c\uff1b\u4f46\u5982\u679c\u7ed9\u4ed6\u4e00\u4e2a\u7b80\u5355\u9700\u6c42\uff0c\u8ba9\u4ed6\u5199\u4e00\u4e2a\u8131\u79bb Web \u6846\u67b6\u7684\u72ec\u7acb Application\uff0c\u4ed6\u5c31\u4e0d\u77e5\u6240\u63aa\u4e86\\n\\n\u2605\u57fa\u4e8e\u63a5\u53e3\u7684\u7ee7\u627f\u548c\u57fa\u4e8e\u5b9e\u73b0\u7684\u7ee7\u627f\u5404\u6709\u4ec0\u4e48\u4f18\u7f3a\u70b9\uff1f\\n\u2605\u7ee7\u627f\uff08\u5305\u62ec extend \u548c implement\uff09\u6709\u4ec0\u4e48\u3010\u7f3a\u70b9\u3011\uff1f\\n\u2605\u591a\u6001\uff08polymorphism\uff09\u6709\u4ec0\u4e48\u3010\u7f3a\u70b9\u3011\uff1f\\n\u2605\u4e3a\u4ec0\u4e48 Java \u53ef\u4ee5\u591a\u7ee7\u627f interface\uff0c\u800c\u4e0d\u53ef\u4ee5\u591a\u7ee7\u627f class\uff1f<font color=\\"green\\"> > \u591a\u7ee7\u627fclass\u4e2d\u6709\u76f8\u540c\u65b9\u6cd5\u65f6\u5e94\u8be5\u9009\u7528\u54ea\u4e2a\u7248\u672c\u5462? \u53e6\u5916, java8\u5f00\u59cb\u5df2\u7ecf\u5141\u8bb8\u63a5\u53e3\u91cc\u9762\u6709 default method\u4e86, \u53d1\u73b0\u7ee7\u627f\u591a\u4e2a\u9ed8\u8ba4\u65b9\u6cd5\u5b9e\u73b0\u5e76\u4e14\u6ca1\u6709override\u65f6\u62a5\u9519, \u907f\u514d\u4e86\u96c6\u6210\u591a\u4e2aclass\u9009\u62e9\u54ea\u4e2a\u7248\u672c\u7684\u95ee\u9898 </font>\\n\u2605\u5047\u5982\u8ba9\u4f60\u5199\u4e00\u4e2a\u5c0f\u6e38\u620f\uff08\u6bd4\u5982\u4eba\u673a\u5bf9\u6218\u7684\u4e94\u5b50\u68cb\uff09\uff0c\u4f60\u4f1a\u5982\u4f55\u8bbe\u8ba1\u7c7b\u7ed3\u6784\uff1f\\n\u2605\u7c7b\u7ed3\u6784\u8bbe\u8ba1\u65f6\uff0c\u5982\u4f55\u8003\u8651\u53ef\u6269\u5c55\u6027\uff1f\\n\\n\\n# \u7f16\u7a0b\u4e60\u60ef\\n\\n## \u968f\u610f\u5730\u547d\u540d\\n    \\n\u53cd\u9762: \u4f7f\u7528\u5355\u5b57\u6bcd\u547d\u540d\u53d8\u91cf\uff1b\u4f7f\u7528\u4e00\u4e9b\u6ca1\u592a\u5927\u610f\u4e49\u7684\u53d8\u91cf\u540d\uff08\u4f8b\u5982 s1\u3001s2\u3001s3\uff09\uff1b\u5bf9\u540c\u4e00\u4e2a\u4e1a\u52a1\u6982\u5ff5\u4f7f\u7528\u4e0d\u540c\u7684\u672f\u8bed/\u7f29\u5199\uff08\u5bb9\u6613\u8ba9\u8bfb\u4ee3\u7801\u7684\u4eba\u795e\u7ecf\u5206\u88c2\uff09\uff1b\u4f7f\u7528\u62fc\u97f3\u547d\u540d\uff08\u5982\u679c\u4f60\u56e2\u961f\u4e2d\u6709\u6e2f\u53f0\u4eba\u58eb\u6216\u8005\u8001\u5916\uff0c\u5c31\u60e8\u4e86\uff09\\n\\n## \u4e60\u60ef\u4e8e\u4ee3\u7801\u7684 copy & paste\\n\\n\u53cd\u9762\uff1a\u5982\u679c\u53d1\u73b0\u8981\u5199\u7684\u67d0\u4e2a\u51fd\u6570\u548c\u524d\u51e0\u5929\u5199\u7684\u67d0\u4e2a\u51fd\u6570\u5dee\u4e0d\u591a\uff0c\u5c31\u628a\u539f\u6765\u7684\u90a3\u4e2a\u51fd\u6570\u8d34\u8fc7\u6765\uff0c\u7136\u540e\u7a0d\u5fae\u6539\u51e0\u4e0b\uff0c\u5fc3\u4e2d\u8fd8\u6697\u559c\uff1a\u201c\u53c8\u5feb\u901f\u641e\u5b9a\u4e86\u4e00\u4e2a\u529f\u80fd\u201d....... \u8fd9\u79cd\u505a\u6cd5\u662f\u4ee3\u7801\u81ed\u5473\uff08\u501f\u7528\u300a\u91cd\u6784 - \u6539\u5584\u65e2\u6709\u4ee3\u7801\u7684\u8bbe\u8ba1\u300b\u7684\u63d0\u6cd5\uff09\u7684\u4e3b\u8981\u6765\u6e90\uff0c\u5bfc\u81f4\u4ee3\u7801\u53ef\u7ef4\u62a4\u6027\u5927\u5927\u4e0b\u964d\u3002\u5f53\u4f60\u5c06\u6765\u9700\u8981\u589e\u52a0\u529f\u80fd\u6216\u4fee\u6539 bug \u7684\u65f6\u5019\uff0c\u8981\u540c\u65f6\u6539\u52a8\u591a\u4e2a\u5730\u65b9\uff0c\u800c\u90a3\u65f6\u4f60\u4f30\u8ba1\u5df2\u7ecf\u60f3\u4e0d\u8d77\u6765\u8fd9\u7823\u4ee3\u7801\u6709\u51e0\u4e2a\u514b\u9686\u4e86\\n\\n## Magic Number \u6ee1\u5929\u98de\\n\\n\u5047\u8bbe\u6709\u4e2a\u4e1a\u52a1\u903b\u8f91\u4e2d\u9700\u8981\u8fdb\u884c10\u79d2\u7684\u8d85\u65f6\u7b49\u5f85\uff0c\u4f60\u4f1a\u600e\u4e48\u5199\u8fd9\u4e2asleep\u8bed\u53e5\uff1f\u6211\u4f30\u8ba1\u5927\u90e8\u5206\u4eba\u4e0d\u5916\u4e4e\u4e0b\u9762\u4e09\u79cd\u5199\u6cd5:\\n1\u3001\u76f4\u63a5\u5199\u4e0a sleep(10*1000); \u4e86\u4e8b ----\u6700\u5dee, \u7f3a\u4e4f\u53ef\u8bfb\u6027, \u4ee3\u7801\u81ed\u5473\\n2\u3001\u5b9a\u4e49\u4e00\u4e2a\u5e38\u91cf TIMEOUT_XXX = 10*1000; \u7136\u540e sleep(TIMEOUT_XXX); ---- \u6bd41\u7a0d\u597d, \u4f46\u662f\uff0c\u5c06\u6765\u4e00\u65e6\u53d1\u751f\u9700\u6c42\u53d8\u66f4\uff0c\u8981\u6c42\u5728\u3010\u8fd0\u884c\u65f6\u3011\u8c03\u6574\u8d85\u65f6\u95f4\u9694\uff08\u751a\u81f3\u8981\u6c42\u8ba9\u7528\u6237\u6765\u914d\u5236\u8d85\u65f6\u95f4\u9694\uff09\uff0c\u5219\u5199\u6cd52\u7684\u7f3a\u70b9\u7acb\u9a6c\u66b4\u9732\u65e0\u9057\\n3\u3001`\u5728\u914d\u5236\u6587\u4ef6\u4e2d\u52a0\u5165\u4e00\u4e2a\u8d85\u65f6\u9879\uff0c\u7136\u540e\u7a0b\u5e8f\u8bfb\u53d6\u914d\u5236\u6587\u4ef6\u83b7\u5f97\u8d85\u65f6\u503c\uff0c\u7136\u540e\u8c03\u7528 sleep`\u3002------  \u6b63\u786e\u65b9\u5f0f.\\n\\n## \u4ee3\u7801\u8026\u5408\u5ea6\u592a\u5927\\n\\n\u5408\u7406\u4f7f\u7528  MVC\u6216\u8005\u8bbe\u8ba1\u6a21\u5f0f (\u4ee3\u7801\u8026\u5408\u5206\u522b\u7531\u54ea\u4e9b\u60c5\u51b5\u5f15\u8d77\uff1f\u4ec0\u4e48\u662f\u6b63\u4ea4\u7684\u8bbe\u8ba1\uff1f)\\n\\n## \u4e0d\u6ce8\u610f\u8d44\u6e90\u56de\u6536\\n\\nJava \u5728\u8bed\u8a00\u5c42\u9762\u63d0\u4f9b\u4e86\u5185\u5b58\u7684\u5783\u573e\u56de\u6536\u673a\u5236\uff0c\u7a0b\u5e8f\u5458\u53ea\u7ba1\u7533\u8bf7\u5185\u5b58\uff0c\u4e0d\u9700\u8981\u518d\u5173\u5fc3\u91ca\u653e\u7684\u95ee\u9898. \u6b64\u5f88\u591a\u65b0\u624b\u517b\u6210\u4e86\u574f\u4e60\u60ef\uff0c\u5bf9\u4e8e\u5176\u5b83\u8d44\u6e90\uff08\u6bd4\u5982\u6570\u636e\u5e93\u8fde\u63a5\uff09\u4e5f\u53ea\u7533\u8bf7\u4e0d\u91ca\u653e\uff08\u6709\u4e9b\u4eba\u751a\u81f3\u5929\u771f\u5730\u4ee5\u4e3a JVM \u4f1a\u5e2e\u4f60\u641e\u5b9a\u8d44\u6e90\u56de\u6536\uff09. \u8fd9\u4e2a\u574f\u4e60\u60ef\u4f1a\u5bfc\u81f4\u8d44\u6e90\u7684\u6cc4\u9732\uff0c\u800c\u8d44\u6e90\u6cc4\u9732\u5f80\u5f80\u6bd4\u5185\u5b58\u6cc4\u9732\u66f4\u8981\u547d\u3002\u5982\u679c\u4f60\u5199\u7684\u7a0b\u5e8f\u662f\u957f\u65f6\u95f4\u8fd0\u884c\u7684\uff08\u6bd4\u5982\u8fd0\u884c\u5728 Web Server \u4e0a\uff09\uff0c\u65f6\u95f4\u957f\u4e86\u4f1a\u7531\u4e8e\u8d44\u6e90\u8017\u5c3d\u800c\u5bfc\u81f4\u6574\u4e2a\u8fdb\u7a0b\u51fa\u95ee\u9898\\n\\n# \u5f02\u5e38\u5904\u7406\u4f7f\u7528\u4e0d\u5f53\\n\\n[\u5f02\u5e38\u7684\u5904\u7406\u539f\u5219](http://codebuild.blogspot.com/2012/01/15-best-practices-about-exception.html), \u6b64\u5916\u8fd8\u6709\u4e00\u4e2a\u5173\u4e8e\u5f02\u5e38\u5904\u7406\u7684\u7ecf\u9a8c [link1](https://www.ibm.com/developerworks/cn/java/j-lo-exception-misdirection/index.html), [link2](https://www.ibm.com/developerworks/cn/java/j-lo-exception/index.html)\\n\\n*   \u5f02\u5e38\u7684\u540d\u5b57\u5fc5\u987b\u6e05\u6670\u800c\u4e14\u6709\u5177\u4f53\u7684\u610f\u601d\uff0c\u8868\u793a\u5f02\u5e38\u53d1\u751f\u7684\u95ee\u9898\uff0c\u4f8b\u5982 FileNotFoundException \u5c31\u5f88\u6e05\u6670\u76f4\u89c2\\n\\n*   \u5b9a\u4e49\u4f60\u81ea\u5df1\u7684\u5f02\u5e38\u7c7b\u5c42\u6b21\uff0c\u4f8b\u5982 UserException \u548c SystemException \u5206\u522b\u4ee3\u8868\u7528\u6237\u7ea7\u522b\u7684\u5f02\u5e38\u4fe1\u606f\u548c\u7cfb\u7edf\u7ea7\u522b\u7684\u5f02\u5e38\u4fe1\u606f\uff0c\u800c\u5176\u4ed6\u7684\u5f02\u5e38\u5728\u8fd9\u4e24\u4e2a\u57fa\u7c7b\u4e0a\u8fdb\u884c\u6269\u5c55\\n\\n*   \u53d7\u68c0\u5f02\u5e38\u548c\u975e\u53d7\u68c0\u5f02\u5e38: \u524d\u8005\u7528\u5728[\u9519\u8bef\u9700\u8981\u8fdb\u4e00\u6b65\u5904\u7406\u548c\u6062\u590d, \u5982SQLException, \u9700\u8981\u8fdb\u4e00\u6b65\u5173\u95edconnection, transaction\u56de\u6eda], \u540e\u8005\u7528\u5728 [\u7a0b\u5e8f\u4e0d\u80fd\u7ee7\u7eed\u6267\u884c, \u4e5f\u6ca1\u5fc5\u8981\u8fdb\u4e00\u6b65\u5bf9\u5f02\u5e38\u5904\u7406, \u5982\u670d\u52a1\u5668\u8fde\u63a5\u4e0d\u4e0a\u3001\u53c2\u6570\u4e0d\u6b63\u786e]\\n\\n*   \u907f\u514d\u629b\u51fa\u5f02\u5e38\u5bf9\u4ee3\u7801\u5c42\u6b21\u6c61\u67d3(\u8bbe\u8ba1\u9694\u79bb\u539f\u5219)\\n\\n    *   \u4f8b\u5982dao\u5c42\u67d0\u4e2a\u65b9\u6cd5\u629b\u51fasqlexception, \u6b64\u65f6\u5c31\u4e0d\u8981\u7ee7\u7eed\u5411\u4e0a\u629b\u4e86, \u5e94\u8be5\u5728catch\u4e4b\u540e\u5904\u7406\u6210runtimeException\u629b\u51fa\\n\\n\\n*   \u7a7a\u7684 catch \u8bed\u53e5\u5757\\n\\n    *   \u5373\u4f7f\u6709ex.printStacktrace()\u4e5f\u7b97\u7a7a\u7684catch\u5757, \u56e0\u4e3a\u8be5\u65b9\u6cd5\u53ea\u662f\u6253\u5370\u5806\u6808\u4fe1\u606f, \u800c\u4e14\u5f02\u5e38\u5e76\u6ca1\u6709\u4f7f\u5f97\u7a0b\u5e8f\u7ec8\u7aef\u6267\u884c, \u5bfc\u81f4\u66f4\u591a\u7684\u5f02\u5e38\u3002\\n    *   \u53ef\u4ee5catch\u540e\u629b\u51fa\u975e\u53d7\u68c0\u5f02\u5e38, finally\u91cc\u9762\u5904\u7406\u5176\u4ed6\u540e\u7eed\u64cd\u4f5c\u5982\u5173\u95ed\u8d44\u6e90\u7b49\u7b49\\n\\n\\n*   \u6ca1\u6709\u4f7f\u7528 finally \u53ef\u80fd\u4f1a\u4ea7\u751f\u8d44\u6e90\u6cc4\u9732\\n\\n*   \u4e0d\u8981\u4f7f\u7528\u51fd\u6570\u8fd4\u56de\u503c\u8fdb\u884c\u9519\u8bef\u5904\u7406\\n\\n    *   \u653e\u7740 Java \u7684\u5f02\u5e38\u673a\u5236\u4e0d\u7528\uff0c\u800c\u7528\u51fd\u6570\u8fd4\u56de\u503c\u6765\u8868\u793a\u6210\u529f/\u5931\u8d25, \u7b80\u76f4\u662f\u201c\u6367\u7740\u91d1\u7897\u8981\u996d\u201d\\n\\n        1. \u8fd4\u56de\u503c\u4e00\u822c\u7528\u6574\u6570\u503c\u6216\u5e03\u5c14\u503c\u8868\u793a\uff0c\u4f20\u9012\u7684\u4fe1\u606f\u8fc7\u4e8e\u7b80\u964b\uff1b\\n        2. \u4e00\u65e6\u8c03\u7528\u8005\u5ffd\u7565\u4e86\u9519\u8bef\u8fd4\u56de\u7801\uff0c\u5c31\u4f1a\u5bfc\u81f4\u548c\u201c\u7a7a catch \u8bed\u53e5\u5757\u201d\u7c7b\u4f3c\u7684\u95ee\u9898\uff1b\\n        3. \u5bf9\u540c\u4e00\u4e2a\u51fd\u6570\u7684\u591a\u5904\u8c03\u7528\uff0c\u90fd\u9700\u8981\u5bf9\u8fd4\u56de\u503c\u8fdb\u884c\u91cd\u590d\u5224\u65ad\uff0c\u5bfc\u81f4\u4ee3\u7801\u5197\u4f59\\n\\n*   \u5faa\u73af\u5757\u4e2d\u4e0d\u8981\u6709try...catch\\n\\n    *   \u5f02\u5e38\u5904\u7406\u5360\u7528\u7cfb\u7edf\u8d44\u6e90\\n    *   \u540c\u6837, \u8fd9\u6837\u7684\u4f8b\u5b50\u4e5f\u8981\u907f\u514d: \u7c7b A \u4e2d\u6267\u884c\u4e86\u4e00\u6bb5\u5faa\u73af\uff0c\u5faa\u73af\u4e2d\u8c03\u7528\u4e86 B \u7c7b\u7684\u65b9\u6cd5\uff0cB \u7c7b\u4e2d\u88ab\u8c03\u7528\u7684\u65b9\u6cd5\u5374\u53c8\u5305\u542b try-catch \u8fd9\u6837\u7684\u8bed\u53e5\u5757\\n\\n\\n*   \u53ef\u4ee5\u81ea\u5b9a\u4e49\u4e00\u4e2aruntimeException, \u6784\u9020\u51fd\u6570\u63a5\u53d7\u5404\u7c7b\u53d7\u68c0Exception, \u5e76\u5c06\u6709\u6548\u7684\u5f02\u5e38\u4fe1\u606f\u590d\u5236\u5230\u81ea\u8eab\u5c5e\u6027, \u8fd9\u6837\u53ef\u4ee5\u5728\u4f7f\u7528\u65f6\u7edf\u4e00\u6355\u6349Exception, \u53ef\u4ee5\u7701\u4e0d\u5c11\u529b\u6c14(\u591a\u65f6\u5019\u6ca1\u6709\u5fc5\u8981\u6bcf\u4e2a\u4e0d\u540c\u7c7b\u578b\u7684 Exception \u5199\u4e00\u6bb5 catch \u8bed\u53e5\uff0c\u5bf9\u4e8e\u5f00\u53d1\u6765\u8bf4\uff0c\u4efb\u4f55\u4e00\u79cd\u5f02\u5e38\u90fd\u8db3\u591f\u8bf4\u660e\u4e86\u7a0b\u5e8f\u7684\u5177\u4f53\u95ee\u9898\u3002)\\n\\n    ```java\\n    /**\\n    * \u81ea\u5b9a\u4e49 RuntimeException\\n    * \u6dfb\u52a0\u9519\u8bef\u4ee3\u7801\u5c5e\u6027\\n    */\\n    public class RuntimeException extends java.lang.RuntimeException { \\n        //\u9ed8\u8ba4\u9519\u8bef\u4ee3\u7801 \\n        public static final Integer GENERIC = 1000000; \\n        //\u9519\u8bef\u4ee3\u7801\\n        private Integer errorCode; \\n\\n        private String msg;\\n\\n        public RuntimeException(Integer errorCode, Throwable cause) {\\n                this(errorCode, null, cause);\\n        }\\n        public RuntimeException(String message, Throwable cause) {\\n                //\u5229\u7528\u901a\u7528\u9519\u8bef\u4ee3\u7801\\n                this(GENERIC, message, cause);\\n        }\\n        public RuntimeException(Integer errorCode, String message, Throwable cause) {\\n                // \u90a3\u4e48\u5f53 Exception \u7684\u7c7b\u578b\u5df2\u7ecf\u662f RuntimeException \u65f6\uff0c\u6211\u4eec\u53c8\u505a\u4e86\u4e00\u6b21\u5c01\u88c5\u3002\u5c06 RuntimeException \u53c8\u91cd\u65b0\u5c01\u88c5\u4e86\u4e00\u6b21\uff0c\u8fdb\u800c\u4e22\u5931\u4e86\u539f\u6709\u7684 RuntimeException \u643a\u5e26\u7684\u6709\u6548\u4fe1\u606f\u3002\\n                // \u6dfb\u52a0\u76f8\u5173\u7684\u68c0\u67e5\uff0c\u786e\u8ba4\u53c2\u6570 Throwable \u4e0d\u662f RuntimeException \u7684\u5b9e\u4f8b\u3002\u5982\u679c\u662f\uff0c\u5c06\u62f7\u8d1d\u76f8\u5e94\u7684\u5c5e\u6027\u5230\u65b0\u5efa\u7684\u5b9e\u4f8b\u4e0a\\n                if (cause instanceof RuntimeException) {\\n                    this.msg = ...\\n                }\\n                this.errorCode = errorCode;\\n                super(message, cause);\\n        }\\n        public Integer getErrorCode() {\\n                return errorCode;\\n        } \\n    }\\n    ```\\n\\n    \u540e\u9762\u4f7f\u7528\u7684\u65f6\u5019\u5c31\u53ef\u4ee5\u8fd9\u6837\u4e86\\n\\n    ```java\\n    try{\\n    //\u53ef\u80fd\u629b\u51fa RuntimeException\u3001IOExeption \u6216\u8005\u5176\u5b83\uff1b\\n    //\u6ce8\u610f\u8fd9\u91cc\u548c\u8bef\u533a\u516d\u7684\u533a\u522b\uff0c\u8fd9\u91cc\u662f\u4e00\u6bb5\u4ee3\u7801\u629b\u51fa\u591a\u79cd\u5f02\u5e38\u3002\u4ee5\u4e0a\u662f\u591a\u6bb5\u4ee3\u7801\uff0c\u5404\u81ea\u629b\u51fa\u4e0d\u540c\u7684\u5f02\u5e38\\n    }catch(Exception e){\\n        //\u4e00\u5982\u65e2\u5f80\u7684\u5c06 Exception \u8f6c\u6362\u6210 RuntimeException\uff0c\u4f46\u662f\u8fd9\u91cc\u7684 e \u5176\u5b9e\u662f RuntimeException \u7684\u5b9e\u4f8b\uff0c\u5df2\u7ecf\u5728\u524d\u6bb5\u4ee3\u7801\u4e2d\u5c01\u88c5\u8fc7\\n        throw new RuntimeException(/**/code, /**/, e);\\n    }\\n\\n    ```\\n\\n*   \u907f\u514d\u6253\u5370\u591a\u5c42\u6b21\u7684\u91cd\u590d\u7684\u5f02\u5e38\\n\\n    ```java\\n    public class A {\\n    private static Logger logger = LoggerFactory.getLogger(A.class);\\n    public void process(){\\n        try{\\n        //\u5b9e\u4f8b\u5316 B \u7c7b\uff0c\u53ef\u4ee5\u6362\u6210\u5176\u5b83\u6ce8\u5165\u7b49\u65b9\u5f0f\\n        B b = new B();\\n        b.process(); // \u89e3\u51b3\u529e\u6cd5\u662f: \u8fd9\u91cc\u7684\u90e8\u5206\u5e94\u8be5\u62ff\u51fatry...catch\u5757\\n\\n        //other code might cause exception\\n        \\n        } catch(XXXException e){\\n        //\u5982\u679c B \u7c7b process \u65b9\u6cd5\u629b\u51fa\u5f02\u5e38\uff0c\u5f02\u5e38\u4f1a\u5728 B \u7c7b\u4e2d\u88ab\u6253\u5370\uff0c\u5728\u8fd9\u91cc\u4e5f\u4f1a\u88ab\u6253\u5370\uff0c\u4ece\u800c\u4f1a\u6253\u5370 2 \u6b21\\n        // \u5982\u679c\u5c42\u6b21\u518d\u590d\u6742\u4e00\u70b9\uff0c\u4e0d\u53bb\u8003\u8651\u6253\u5370\u65e5\u5fd7\u6d88\u8017\u7684\u7cfb\u7edf\u6027\u80fd\uff0c\u4ec5\u4ec5\u5728\u5f02\u5e38\u65e5\u5fd7\u4e2d\u53bb\u5b9a\u4f4d\u5f02\u5e38\u5177\u4f53\u7684\u95ee\u9898\u5df2\u7ecf\u591f\u5934\u75bc\u7684\u4e86\u3002\\n        // \u5176\u5b9e\u6253\u5370\u65e5\u5fd7\u53ea\u9700\u8981\u5728\u4ee3\u7801\u7684\u6700\u5916\u5c42\u6355\u6349\u6253\u5370\u5c31\u53ef\u4ee5\u4e86\uff0c\u5f02\u5e38\u6253\u5370\u4e5f\u53ef\u4ee5\u5199\u6210 AOP\uff0c\u7ec7\u5165\u5230\u6846\u67b6\u7684\u6700\u5916\u5c42\\n        logger.error(e);\\n        throw new RuntimeException(/* \u9519\u8bef\u4ee3\u7801 */ errorCode, /*\u5f02\u5e38\u4fe1\u606f*/msg, e);\\n        }\\n        }\\n    }\\n    public class B{\\n    private static Logger logger = LoggerFactory.getLogger(B.class);\\n        public void process(){\\n            try{\\n                //\u53ef\u80fd\u629b\u51fa\u5f02\u5e38\u7684\u4ee3\u7801\\n            }\\n            catch(XXXException e){\\n                logger.error(e);\\n                throw new RuntimeException(/* \u9519\u8bef\u4ee3\u7801 */ errorCode, /*\u5f02\u5e38\u4fe1\u606f*/msg, e);\\n            }\\n    }\\n    }\\n    ```\\n\\n\\n# \u5173\u4e8e\u57fa\u672c\u7c7b\u578b\u548c\u5f15\u7528\u7c7b\u578b\\n\\n## \u8fd9\u4e24\u79cd\u7c7b\u578b\u5728\u5185\u5b58\u5b58\u50a8\u4e0a\u6709\u4ec0\u4e48\u533a\u522b\uff1f\\n\\n```java\\nStringBuffer str = new StringBuffer();\\nint n = 123;\\n// \u8be5 StringBuffer \u3010\u5bf9\u8c61\u3011\u7684\u5185\u5bb9\u662f\u5b58\u50a8\u5728\u5806\uff08Heap\uff09\u4e0a\u7684\uff0c\u9700\u8981\u7533\u8bf7\u5806\u5185\u5b58\u3002\u800c\u53d8\u91cf str \u53ea\u4e0d\u8fc7\u662f\u9488\u5bf9\u8be5 StringBuffer \u5bf9\u8c61\u7684\u4e00\u4e2a\u5f15\u7528\uff08\u6216\u8005\u53eb\u5730\u5740\uff09\u3002\u53d8\u91cf str \u7684\u3010\u503c\u3011\uff08\u4e5f\u5c31\u662f StringBuffer \u5bf9\u8c61\u7684\u5730\u5740\uff09\u662f\u5b58\u50a8\u5728\u3010\u6808\u3011\u4e0a\u7684\u3002\\n// \u53d8\u91cf n \u7684\u3010\u503c\u3011\u4e5f\u662f\u5b58\u50a8\u5728\u6808\uff08Stack\uff09\u4e0a\u7684\uff0c\u4f46\u662f\u8fd9\u4e2a\u8bed\u53e5\u4e0d\u9700\u8981\u518d\u4ece\u5806\u4e2d\u7533\u8bf7\u5185\u5b58\u4e86\u3002\\n```\\n\\n\\n## \u8fd9\u4e24\u79cd\u7c7b\u578b\u5728\u6027\u80fd\u4e0a\u6709\u4ec0\u4e48\u533a\u522b\uff1f\\n\\nStack: \u53ea\u80fd\u88ab\u672c\u7ebf\u7a0b\u8bbf\u95ee; \u5185\u5b58\u7533\u8bf7\u7b80\u5355; \u5185\u5b58\u6709\u9650\\nHeap: \u80fd\u591f\u88ab\u8fdb\u7a0b\u4e2d\u7684\u6240\u6709\u7ebf\u7a0b\u8bbf\u95ee; \u5185\u5b58\u7533\u8bf7\u590d\u6742(\u7531\u4e8e\u591a\u7ebf\u7a0b\u5171\u4eab, \u9700\u8981\u52a0\u9501); \u5185\u5b58\u5145\u8db3\\n\\n## \u8fd9\u4e24\u79cd\u7c7b\u578b\u5bf9\u4e8e GC \u6709\u4ec0\u4e48\u533a\u522b\\n\\n\\n# \u5173\u4e8e\u5783\u573e\u56de\u6536\uff08Garbage Collection\uff09\\n\\n## JVM \u7684\u5185\u5b58\u7a7a\u95f4\\n\\n\u25c7\u6808\u5185\u5b58\uff08Stack\uff09\uff1a\u6bcf\u4e2a\u7ebf\u7a0b\u79c1\u6709\u7684\u3002\\n\u25c7\u5806\u5185\u5b58\uff08Heap\uff09\uff1a\u6240\u6709\u7ebf\u7a0b\u516c\u7528\u7684\u3002\\n\u25c7\u65b9\u6cd5\u533a\uff08Method Area\uff09\uff1a\u6709\u70b9\u50cf\u4ee5\u524d\u5e38\u8bf4\u7684\u201c\u8fdb\u7a0b\u4ee3\u7801\u6bb5\u201d\uff0c\u8fd9\u91cc\u9762\u5b58\u653e\u4e86\u6bcf\u4e2a\u52a0\u8f7d\u7c7b\u7684\u53cd\u5c04\u4fe1\u606f\u3001\u7c7b\u51fd\u6570\u7684\u4ee3\u7801\u3001\u7f16\u8bd1\u65f6\u5e38\u91cf\u7b49\u4fe1\u606f\u3002\\n\u25c7\u539f\u751f\u65b9\u6cd5\u6808\uff08Native Method Stack\uff09\uff1a\u4e3b\u8981\u7528\u4e8e JNI \u4e2d\u7684\u539f\u751f\u4ee3\u7801\uff0c\u5e73\u65f6\u5f88\u5c11\u6d89\u53ca\u3002\\n\\n## \u5783\u573e\u56de\u6536\u673a\u5236\u7b80\u4ecb\\n\\n\u5783\u573e\u56de\u6536\u673a\u5236\u53d6\u51b3\u4e8e\u4e0d\u540cjvm, \u8fd9\u91cc\u4ee5\u5b98\u65b9jvm\u4ecb\u7ecd\\n\\n* \u4f55\u65f6\u56de\u6536?\\n    * \u5f53 JVM \u53d1\u73b0\u5806\u5185\u5b58\u6bd4\u8f83\u7d27\u5f20\u3001\u4e0d\u592a\u591f\u7528\u65f6\uff0c\u5b83\u5c31\u4f1a\u7740\u624b\u8fdb\u884c\u5783\u573e\u56de\u6536\u5de5\u4f5c\u3002JVM \u8fdb\u884c GC \u7684\u65f6\u95f4\u70b9\u662f\u65e0\u6cd5\u51c6\u786e\u9884\u77e5\u7684\u3002\u56e0\u4e3a GC \u542f\u52a8\u7684\u65f6\u523b\u4f1a\u53d7\u5230\u5404\u79cd\u8fd0\u884c\u73af\u5883\u56e0\u7d20\u7684\u5f71\u54cd\uff0c\u968f\u673a\u6027\u592a\u5927\\n    * \u901a\u8fc7 JVM \u7684\u547d\u4ee4\u884c\u53c2\u6570\u201c-XX:+PrintGC\u201d\u628a\u76f8\u5173\u56de\u6536\u4fe1\u606f\u6253\u5370\u51fa\u6765\\n* \u8c01\u8d1f\u8d23\u56de\u6536?\\n    * JVM \u4f1a\u6709\u4e00\u4e2a\u6216\u591a\u4e2a\u4e13\u95e8\u7684\u5783\u573e\u56de\u6536\u7ebf\u7a0b\uff0c\u7531\u5b83\u4eec\u8d1f\u8d23\u6e05\u7406\u56de\u6536\u5783\u573e\u5185\u5b58\u3002\\n* \u5982\u4f55\u53d1\u73b0\u5783\u573e\u5bf9\u8c61\uff1f\\n    * \u5783\u573e\u56de\u6536\u7ebf\u7a0b\u4f1a\u4ece\u201c\u6839\u96c6\uff08Root Set\uff09\u201d\u5f00\u59cb\u8fdb\u884c\u5bf9\u8c61\u5f15\u7528\u7684\u904d\u5386\u3002\u6240\u8c13\u7684\u201c\u6839\u96c6\u201d\uff0c\u5c31\u662f\u6b63\u5728\u8fd0\u884c\u7684\u7ebf\u7a0b\u4e2d\uff0c\u53ef\u4ee5\u8bbf\u95ee\u7684\u3010\u5f15\u7528\u53d8\u91cf\u3011\u7684\u96c6\u5408\uff08\u6bd4\u5982\u6240\u6709\u7ebf\u7a0b\u5f53\u524d\u51fd\u6570\u7684\u53c2\u6570\u548c\u5c40\u90e8\u53d8\u91cf\u3001\u5f53\u524d\u7c7b\u7684\u6210\u5458\u53d8\u91cf\u7b49\u7b49\uff09\u3002\u5783\u573e\u56de\u6536\u7ebf\u7a0b\u5148\u627e\u51fa\u88ab\u6839\u96c6\u76f4\u63a5\u5f15\u7528\u7684\u6240\u6709\u5bf9\u8c61\uff08\u4e0d\u59a8\u53eb\u96c6\u54081\uff09\uff0c\u7136\u540e\u518d\u627e\u51fa\u88ab\u96c6\u54081\u76f4\u63a5\u5f15\u7528\u7684\u6240\u6709\u5bf9\u8c61\uff08\u4e0d\u59a8\u53eb\u96c6\u54082\uff09\uff0c\u7136\u540e\u518d\u627e\u51fa\u88ab\u96c6\u54082\u76f4\u63a5\u5f15\u7528\u7684\u6240\u6709\u5bf9\u8c61......\u5982\u6b64\u5faa\u73af\u5f80\u590d\uff0c\u76f4\u5230\u628a\u80fd\u904d\u5386\u5230\u7684\u5bf9\u8c61\u90fd\u904d\u5386\u5b8c\u3002\u5982\u679c\u80fd\u591f\u904d\u5386\u5230, \u5219\u6709\u6548, \u6ca1\u6709\u904d\u5386\u5230\u5219\u56de\u6536\\n    * \u628a\u5783\u573e\u5185\u5b58\u91cd\u65b0\u53d8\u4e3a\u53ef\u7528\u5185\u5b58\u3001\u8fdb\u884c\u5185\u5b58\u7684\u6574\u7406\u4ee5\u6d88\u9664\u5185\u5b58\u788e\u7247\u3001\u7b49\u7b49\u3002\u8fd9\u4e2a\u8fc7\u7a0b\u4f1a\u6d89\u53ca\u5230\u82e5\u5e72\u7b97\u6cd5\\n* \u5206\u4ee3\\n    * \u65e9\u671f\u7684jvm\u6ca1\u6709\u5206\u4ee3\u6280\u672f, \u6240\u6709\u88ab GC \u7ba1\u7406\u7684\u5bf9\u8c61\u90fd\u5b58\u653e\u5728\u540c\u4e00\u4e2a\u5806\u91cc\u9762,\u6bcf\u6b21\u8fdb\u884cGC\u90fd\u8981\u904d\u5386\u6240\u6709\u5bf9\u8c61\uff0c\u5f00\u9500\u5f88\u5927,\u4ece JDK 1.2 \u4e4b\u540e\uff0cJVM \u5f00\u59cb\u4f7f\u7528\u5206\u4ee3\u7684\u5783\u573e\u56de\u6536\uff08Generational Garbage Collection\uff09\\n    * \u201c\u5e74\u8001\u4ee3\u201d\uff08Tenured\uff09\u548c\u201c\u5e74\u8f7b\u4ee3\u201d\uff08Nursery\uff09\u3001\u201c\u6301\u4e45\u4ee3\u201d\uff08Permanent\uff0c\u5bf9\u5e94\u4e8e JVM \u89c4\u8303\u7684\u201c\u65b9\u6cd5\u533a\u201d\uff09\\n    * \u3010\u5927\u90e8\u5206\u3011\u5bf9\u8c61\u5728\u521a\u521b\u5efa\u65f6\uff0c\u90fd\u4f4d\u4e8e\u201c\u5e74\u8f7b\u4ee3\u201d\u3002\u5982\u679c\u67d0\u5bf9\u8c61\u7ecf\u5386\u4e86\u51e0\u8f6e GC \u8fd8\u6d3b\u7740\uff08\u5927\u9f84\u5bf9\u8c61\uff09\uff0c\u5c31\u628a\u5b83\u79fb\u5230\u201c\u5e74\u8001\u4ee3\u201d\u3002\u53e6\u5916\uff0c\u5982\u679c\u67d0\u4e2a\u5bf9\u8c61\u5728\u521b\u5efa\u65f6\u6bd4\u8f83\u5927\uff0c\u53ef\u80fd\u5c31\u76f4\u63a5\u88ab\u4e22\u5230\u5e74\u8001\u4ee3\u3002\u7ecf\u8fc7\u8fd9\u79cd\u7b56\u7565\uff0c\u4f7f\u5f97\u5e74\u8f7b\u4ee3\u603b\u662f\u4fdd\u5b58\u90a3\u4e9b\u77ed\u547d\u7684\u5c0f\u5bf9\u8c61\u3002\u5728\u7a7a\u95f4\u5c3a\u5bf8\u4e0a\uff0c\u201c\u5e74\u8f7b\u4ee3\u201d\u76f8\u5bf9\u8f83\u5c0f\uff0c\u800c\u201c\u5e74\u8001\u4ee3\u201d\u76f8\u5bf9\u8f83\u5927\u3002\\n    * \u56e0\u4e3a\u6709\u4e86\u5206\u4ee3\u6280\u672f\uff0cJVM \u7684 GC \u4e5f\u76f8\u5e94\u5206\u4e3a\u4e24\u79cd\u2014\u2014\u4e3b\u8981\u6536\u96c6\uff08Major Collection\uff09\u548c\u6b21\u8981\u6536\u96c6\uff08Minor Collection\uff09\u3002\u201c\u4e3b\u8981\u6536\u96c6\u201d\u540c\u65f6\u6e05\u7406\u5e74\u8001\u4ee3\u548c\u5e74\u8f7b\u4ee3\uff0c\u56e0\u6b64\u5f00\u9500\u5f88\u5927\uff0c\u4e0d\u5e38\u8fdb\u884c\uff1b\u201c\u6b21\u8981\u6536\u96c6\u201d\u4ec5\u4ec5\u6e05\u7406\u5e74\u8f7b\u4ee3\uff0c\u5f00\u9500\u5f88\u5c0f\uff0c\u7ecf\u5e38\u8fdb\u884c\u3002\\n\\n## GC\u5bf9\u6027\u80fd\u4f1a\u6709\u5565\u5f71\u54cd\\n\\n* \u9020\u6210\u5f53\u524d\u8fd0\u884c\u7ebf\u7a0b\u7684\u505c\u987f\\n* \u904d\u5386\u5bf9\u8c61\u5f15\u7528\u7684\u5f00\u9500\\n* \u6e05\u7406\u548c\u56de\u6536\u5783\u573e\u7684\u5f00\u9500(\u90e8\u5206\u5f00\u9500\u53ef\u80fd\u5305\u62ec\u590d\u5236\u5185\u5b58\u5757\u3001\u66f4\u65b0\u5bf9\u8c61\u5f15\u7528\u7b49\u7b49\u3002)\\n\\n## \u51e0\u79cd\u6536\u96c6\u5668\\n\\n\u8861\u91cf GC \u6027\u80fd\u7684\u4e24\u4e2a\u91cd\u8981\u6307\u6807\uff1a\u541e\u5410\u91cf\uff08Throughput\uff09\u548c\u505c\u987f\u65f6\u95f4\uff08Pause Time\uff09\u3002\u541e\u5410\u91cf\u8fd9\u4e2a\u8bcd\u4e0d\u662f\u5f88\u76f4\u89c2\uff0c\u89e3\u91ca\u4e00\u4e0b\uff1a\u5c31\u662f JVM\u3010\u4e0d\u7528\u4e8e\u3011GC \u7684\u65f6\u95f4\u5360\u603b\u65f6\u95f4\u7684\u6bd4\u7387\u3002\u201c\u541e\u5410\u91cf\u201d\u662f\u8d8a\u5927\u8d8a\u597d\uff0c\u201c\u505c\u987f\u65f6\u95f4\u201d\u662f\u8d8a\u5c0f\u8d8a\u597d\u3002\\n\\n* \u4e32\u884c\u6536\u96c6\u5668\uff08Serial Collector\uff09\\n* \u5e76\u884c\u6536\u96c6\u5668\uff08Parallel Throughput Collector\uff09\\n* \u5e76\u53d1\u6536\u96c6\u5668\uff08Concurrent Low Pause Collector\uff09\\n\\n## \u5982\u4f55\u964d\u4f4eGC\u7684\u5f71\u54cd\uff1f\\n\\n* \u5c3d\u91cf\u51cf\u5c11\u5806\u5185\u5b58\u7684\u4f7f\u7528\\n* \u8bbe\u7f6e\u5408\u9002\u7684\u5806\u5185\u5b58\u5927\u5c0f\\n    * JVM \u7684\u5806\u5185\u5b58\u662f\u6709\u8bb2\u7a76\u7684\uff0c\u4e0d\u80fd\u592a\u5927\u4e5f\u4e0d\u80fd\u592a\u5c0f\u3002\u5982\u679c\u5806\u5185\u5b58\u592a\u5c0f\uff0cJVM \u8001\u662f\u611f\u89c9\u5185\u5b58\u4e0d\u591f\u7528\uff0c\u53ef\u80fd\u4f1a\u5bfc\u81f4\u9891\u7e41\u8fdb\u884c\u5783\u573e\u56de\u6536\uff0c\u5f71\u54cd\u4e86\u6027\u80fd\uff1b\u5982\u679c\u5806\u5185\u5b58\u592a\u5927\uff0c\u4ee5\u81f3\u4e8e\u64cd\u4f5c\u7cfb\u7edf\u7684\u5927\u90e8\u5206\u7269\u7406\u5185\u5b58\u90fd\u88ab JVM \u81ea\u4e2a\u513f\u9738\u5360\u4e86\uff0c\u90a3\u53ef\u80fd\u4f1a\u5f71\u54cd\u5176\u5b83\u5e94\u7528\u7a0b\u5e8f\u751a\u81f3\u64cd\u4f5c\u7cfb\u7edf\u672c\u8eab\u7684\u6027\u80fd\u3002\u53e6\u5916\uff0c\u5e74\u8f7b\u4ee3\u7684\u5927\u5c0f\uff08\u6216\u8005\u8bf4\u201c\u5e74\u8f7b\u4ee3\u201d\u4e0e\u201c\u5e74\u8001\u4ee3\u201d\u7684\u6bd4\u503c\uff09\u5bf9\u4e8e GC \u7684\u6027\u80fd\u4e5f\u6709\u660e\u663e\u5f71\u54cd\u3002\u5982\u679c\u5e74\u8f7b\u4ee3\u592a\u5c0f\uff0c\u53ef\u80fd\u5bfc\u81f4\u6b21\u8981\u6536\u96c6\u5f88\u9891\u7e41\uff1b\u5982\u679c\u5e74\u8f7b\u4ee3\u592a\u5927\uff0c\u5bfc\u81f4\u6b21\u8981\u6536\u96c6\u7684\u505c\u987f\u5f88\u660e\u663e\u3002\\n* \u541e\u5410\u91cf\u548c\u505c\u987f\u7684\u53d6\u820d\\n    * (1)\u770b\u91cd\u541e\u5410\u91cf\uff0c\u5bf9\u505c\u987f\u65f6\u95f4\u65e0\u6240\u8c13\uff1b(2)\u4fa7\u91cd\u4e8e\u505c\u987f\u65f6\u95f4\u3002\\n    * \u5bf9\u4e8e\u67d0\u4e9b\u5728\u540e\u53f0\u7684\u3001\u5355\u7eaf\u8fd0\u7b97\u5bc6\u96c6\u578b\u7684\u5e94\u7528\uff0c\u5c5e\u4e8e\u7b2c\u4e00\u79cd\u3002\u6bd4\u5982\u67d0\u4e9b\u79d1\u5b66\u8ba1\u7b97\u7684\u5e94\u7528\u3002\u8fd9\u65f6\u5019\u5efa\u8bae\u4f7f\u7528\u5e76\u884c\u6536\u96c6\u5668\u3002\\n    * \u5bf9\u4e8e\u6d89\u53ca\u7528\u6237 UI \u4ea4\u4e92\u7684\u3001\u5b9e\u65f6\u6027\u8981\u6c42\u6bd4\u8f83\u9ad8\u3001\u7a0b\u5e8f\u9700\u8981\u5feb\u901f\u54cd\u5e94\u7684\uff0c\u5c5e\u4e8e\u7b2c\u4e8c\u79cd\u3002\u6bd4\u5982\u67d0\u4e9b\u684c\u9762\u6e38\u620f\u3001\u67d0\u4e9b\u7535\u4fe1\u4ea4\u6362\u7cfb\u7edf\u3002\u8fd9\u65f6\u5019\u5efa\u8bae\u4f7f\u7528\u5e76\u53d1\u6536\u96c6\u5668\u3002\\n\\n\\n\\n\\n# \u5173\u4e8e\u8303\u578b\uff08Generic Programming\uff09\\n\\nGP \u662f\u5728\u7f16\u8bd1\u65f6\u5b9e\u73b0\u7684\u8fd8\u662f\u5728\u8fd0\u884c\u65f6\u5b9e\u73b0\u7684\uff1f\u4e3a\u4ec0\u4e48\u8981\u8fd9\u4e48\u5b9e\u73b0\uff1f\\nGP \u7684\u7c7b\u578b\u64e6\u9664\u673a\u5236\u662f\u548b\u56de\u4e8b\uff1f\u6709\u5565\u4f18\u70b9/\u7f3a\u70b9\uff1f\\n\u4f7f\u7528\u8303\u578b\u5bb9\u5668\uff08\u76f8\u5bf9\u4e8e\u4f20\u7edf\u5bb9\u5668\uff09\u5728\u6027\u80fd\u4e0a\u6709\u5565\u5f71\u54cd\uff1f\u4e3a\u4ec0\u4e48\uff1f\\n\\n# \u5173\u4e8e\u591a\u7ebf\u7a0b\\n\\nsynchronized \u5173\u952e\u5b57\u662f\u600e\u4e48\u8d77\u4f5c\u7528\u6ef4\uff1f\\n\\nsynchronized \u7684\u9897\u7c92\u5ea6\uff08\u6216\u8005\u8bf4\u4f5c\u7528\u57df\uff09\u5982\u4f55\uff1f\u662f\u9488\u5bf9\u67d0\u4e2a\u7c7b\u8fd8\u662f\u9488\u5bf9\u67d0\u4e2a\u7c7b\u5bf9\u8c61\u5b9e\u4f8b\uff1f\\n\\nsynchronized \u5bf9\u6027\u80fd\u6709\u6ca1\u6709\u5f71\u54cd\uff1f\u4e3a\u4ec0\u4e48\uff1f\\n\\nvolatile \u5173\u952e\u5b57\u53c8\u662f\u6d3e\u5565\u7528\u6ef4\uff1f\u5565\u65f6\u5019\u9700\u8981\u7528\u8fd9\u4e2a\u5173\u952e\u5b57\u634f\uff1f"}]}')}}]);