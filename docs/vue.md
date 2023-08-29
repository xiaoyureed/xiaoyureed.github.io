---
title: Vue Brief Intro
tags: [vue]
date: 2023-08-27
---


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
touch .eslintignore

# package.json 
"lint": "eslint src"
"fix": "eslint src --fix"

# init prettier
# eslint-plugin-prettier eslint-config-prettier 解决和 prettier 冲突
pnpm i prettier eslint-plugin-prettier eslint-config-prettier -D
echo {}> .prettierrc.json
touch .prettierignore
# add some configs
{
    "singleQuote": true,
    "semi": false,
    "bracketSpacing": true,
    "htmlWhitespaceSensitivity": "ignore",
    "endOfLine": "auto",
    "trailingComma": "all",
    "tabWidth": 2
  }
# update the eslint config file to 集成 prettier 的规则
# extends 下添加 'plugin:prettier/recommended'

# init stylelint

# stylelint 插件提供扩展规则，不提供预设配置
# stylelint-config-recommended-scss 做 scss 规则检查。stylelint-scss 提供了 n 多条规则，stylelint-config-recommended-scss 内开启了部分配置
# stylelint-config-recess-order stylelint-order 重排和重绘
# stylelint-config-prettier 可以解决和 prettier 冲突
pp i -D sass sass-loader stylelint postcss postcss-scss postcss-html stylelint-config-prettier stylelint-config-recess-order stylelint-config-recommended-scss stylelint-config-standard stylelint-config-standard-vue stylelint-scss stylelint-order stylelint-config-standard-scss
touch .stylelintrc.js
{
  "extends": "stylelint-config-standard"
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