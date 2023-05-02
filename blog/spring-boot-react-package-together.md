---
title: Package Spring Boot & React App Together
date: 2022-7-3
tags: [spring, react]
authors: me
keywords: [spring, react]
---

This article I will try to package a react app into Spring boot, so that they can share the same port, and make sure that the react static content can be served inside the spring boot app.

Here I'm gonna take a next.js app for example.

<!-- truncate -->

## create the basic structure

As regards of spring boot app, please refer to https://start.spring.io

For next.js app, check the steps below:

> Usually I name the next.js app with "frontend"

```shell
npx create-next-app@latest --ts
# or
yarn create next-app --ts
# or
pnpm create next-app

# the static content will be generated in /out folder
yarn build
```

change the next.config.js

```js
const nextConfig = {
  images: {
    unoptimized: true,
  },
  output: 'export',
  reactStrictMode: true,
}

module.exports = nextConfig
```

## perform the integration process manually

```
Step -1 : Edit package.json -> add "export":" next export" in the scripts property

    This measure is just form normal react app, if come up with next.js app, please refer to above

Step - 2: The above step will build a folder named "out". Copy the contents of out folder. Paste it in the src -> main -> resources -> static folder.

Step -3: Now build the spring boot jar/war, then run it. It will serve the contents inside the static folder.
```

## integrate with maven plugins

By using plugin `frontend-maven-plugin` and `maven-resources-plugin`

```xml
<plugin>
    <groupId>com.github.eirslett</groupId>
    <artifactId>frontend-maven-plugin</artifactId>
    <version>1.11.3</version>
    <executions>
      <!-- check if nodejs/npm installed -->
        <execution>
            <id>install node and npm</id>
            <goals>
                <goal>install-node-and-npm</goal>
            </goals>
            <!-- optional, the default value is like this -->
            <phase>generate-resources</phase>
        </execution>
        <!-- clear node_modules and package-lock.json -->
        <execution>
            <id>npm run clean</id>
            <goals>
                <goal>npm</goal>
            </goals>
            <phase>generate-resources</phase>
            <configuration>
                <arguments>run clean</arguments>
            </configuration>
        </execution>
        <!-- install dependencies -->
        <execution>
            <id>npm install</id>
            <goals>
                <goal>npm</goal>
            </goals>
            <phase>generate-resources</phase>
            <configuration>
                <arguments>install --registry=https://registry.npm.taobao.org</arguments>
            </configuration>
        </execution>
        <execution>
            <id>npm run build</id>
            <goals>
                <goal>npm</goal>
            </goals>
            <phase>generate-resources</phase>
            <configuration>
                <arguments>run build</arguments>
            </configuration>
        </execution>
    </executions>
    <configuration>
        <workingDirectory>${project.baseDir}/frontend</workingDirectory>
        <installDirectory>${project.build.directory}</installDirectory>
        <nodeVersion>v18.14.0</nodeVersion>
        <!-- optional, just for projects in china main land -->
        <!-- <downloadRoot>http://npm.taobao.org/mirrors/node/</downloadRoot> -->
    </configuration>
</plugin>

<plugin>
				<artifactId>maven-resources-plugin</artifactId>
				<version>3.2.0</version>
				<executions>
					<execution>
						<id>copy-resources</id>
						<phase>generate-resources</phase>
						<goals>
							<goal>copy-resources</goal>
						</goals>
						<configuration>
							<outputDirectory>${basedir}/target/classes/static</outputDirectory>
              <!-- or -->
              <!-- <outputDirectory>${project.build.outputDirectory}/static</outputDirectory> -->
							<resources>
								<resource>
									<directory>${basedir}/frontend/out</directory>
									<filtering>false</filtering>
								</resource>
							</resources>
						</configuration>
					</execution>
				</executions>
			</plugin>
```

## reference materials

First of all, we have to create a spring boot app and a react app,

https://www.tisonkun.org/2022/10/22/springboot-nextjs/ https://zhuanlan.zhihu.com/p/576234428

https://www.infoq.cn/article/pqahoudgplvp3re73ipt

https://juejin.cn/post/7148737053927145502

https://developer.aliyun.com/article/752405

https://www.google.com/search?q=springboot+react+%E5%85%B1%E7%94%A8%E7%AB%AF%E5%8F%A3&oq=springboot+react+%E5%85%B1%E7%94%A8%E7%AB%AF%E5%8F%A3&aqs=chrome..69i57j69i64.10285j0j7&sourceid=chrome&ie=UTF-8

https://www.google.com/search?q=springboot+react+%E7%AB%AF%E5%8F%A3%E5%94%AF%E4%B8%80&newwindow=1&sxsrf=APwXEddFQUTH93KDHzgoK8gq1hoebWCR9Q%3A1682523015864&ei=h0NJZMK_NMDmkPIPq5OL-AQ&ved=0ahUKEwiCn7_V7sf-AhVAM0QIHavJAk8Q4dUDCA8&uact=5&oq=springboot+react+%E7%AB%AF%E5%8F%A3%E5%94%AF%E4%B8%80&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIFCAAQogQyBQgAEKIEOggIABCiBBCwAzoECAAQHjoFCCEQoAFKBAhBGAFQ1AZY7D9glkJoAnAAeAKAAbUKiAGfN5IBDTItMS4wLjEuMi4zLjKYAQCgAQHIAQHAAQE&sclient=gws-wiz-serp
