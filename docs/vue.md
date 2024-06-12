---
title: Vue Brief Intro
tags: [vue]
date: 2023-08-27
---

- [basic](#basic)
    - [init a project](#init-a-project)
    - [how the components communicate](#how-the-components-communicate)
- [开源](#开源)
    - [组件库](#组件库)
    - [监控埋点方案](#监控埋点方案)



## basic 

### init a project

```sh
pnpm create vite # 进入交互式选择
# or
pnpm create vue@latest


# init eslint
pnpm i eslint -D
npm init @eslint/config # generate eslint config file, 
    eslint <folder> [--fix]
<!-- TOC -->

- [.1. basic](#1-basic)
    - [.1.1. init a project](#11-init-a-project)
    - [.1.2. how the components communicate](#12-how-the-components-communicate)
- [.2. 开源](#2-%E5%BC%80%E6%BA%90)

<!-- /TOC -->t-config-recess-order', // 配置stylelint css属性书写顺序插件,
    'stylelint-config-prettier', // 配置stylelint和prettier兼容
  ],
  overrides: [
    {
      files: ['**/*.(scss|css|vue|html)'],
      customSyntax: 'postcss-scss',
    },
    {
      files: ['**/*.(html|vue)'],
      customSyntax: 'postcss-html',
    },
  ],
  ignoreFiles: [
    '**/*.js',
    '**/*.jsx',
    '**/*.tsx',
    '**/*.ts',
    '**/*.json',
    '**/*.md',
    '**/*.yaml',
  ],
  /**
   * null  => 关闭该规则
   * always => 必须
   */
  rules: {
    'value-keyword-case': null, // 在 css 中使用 v-bind，不报错
    'no-descending-specificity': null, // 禁止在具有较高优先级的选择器后出现被其覆盖的较低优先级的选择器
    'function-url-quotes': 'always', // 要求或禁止 URL 的引号 "always(必须加上引号)"|"never(没有引号)"
    'no-empty-source': null, // 关闭禁止空源码
    'selector-class-pattern': null, // 关闭强制选择器类名的格式
    'property-no-unknown': null, // 禁止未知的属性(true 为不允许)
    'block-opening-brace-space-before': 'always', //大括号之前必须有一个空格或不能有空白符
    'value-no-vendor-prefix': null, // 关闭 属性值前缀 --webkit-box
    'property-no-vendor-prefix': null, // 关闭 属性前缀 -webkit-mask
    'selector-pseudo-class-no-unknown': [
      // 不允许未知的选择器
      true,
      {
        ignorePseudoClasses: ['global', 'v-deep', 'deep'], // 忽略属性，修改element默认样式的时候能使用到
      },
    ],
  },
}


# package.json
 "format": "prettier --write \"./**/*.{html,vue,ts,js,json,md}\"",
"lint:eslint": "eslint src/**/*.{ts,vue} --cache --fix",
"lint:style": "stylelint src/**/*.{css,scss,vue} --cache --fix",

# husky
pp i husky -D
npx husky-init # generate husky folder
# edit pre-commit file
添加 pnpm format



# commit lint 初始化
# 规范:
# feat, fix, docs, style, refactor, perf (性能优化), test, chore (杂项), build, revert
pp i -D @commitlint/config-conventional @commitlint/cli
touch commitlint.config.cjs
# 添加内容:
module.exports = {
  ignores: [(commit) => commit.includes('init')],
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-leading-blank': [2, 'always'],
    'footer-leading-blank': [1, 'always'],
    'header-max-length': [2, 'always', 108],
    'subject-empty': [2, 'never'],
    'type-empty': [2, 'never'],
    'subject-case': [0],
  },
}

# package.json
"prepare": "husky install",
"commitlint": "commitlint --config commitlint.config.cjs -e -V",
#  husky 添加校验
npx husky add .husky/commit-msg
```

### how the components communicate 

```sh

props - 实现父子/子父/兄弟组件通信

customized event - 实现子父组件通信

pinia 全局状态管理实现通信
vuex - 集中式状态管理器, 实现任意通信 (vue3 推荐 pinia)

pub-sub 模式 - 任意组件通信 (用的少, 一般用于 小程序...)

ref - 父组件组件获取子组件实例

slot - 插槽, 实现父子通信
```



## 开源

### 组件库


https://github.com/primefaces/primevue


### 监控埋点方案

https://github.com/M-cheng-web/web-tracing
