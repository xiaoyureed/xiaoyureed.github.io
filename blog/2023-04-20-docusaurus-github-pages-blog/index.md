---
title: 使用 docusaurus 和 github pages 发布博客
authors: me
tags: [docusaurus, github pages]
---

This article is dedicated to introduce how to establish a blog website by using docusaurus and github pages, and how to auto publish articles by github actions.

Official website: https://docusaurus.io/

<!-- truncate -->

Docusaurus 是 Facebook 出品的一个文档生成工具, 基于 react, 简单好用, 功能丰富, 这里记录一下搭建本站点的过程.

# 本地初始化

首先 `npx create-docusaurus@latest my-website classic --typescript`, 会创建一个本地的初始化仓库.

修改 配置文件中的 projectName, organizationName, baseUrl ...

# 创建 github 远程仓库

Create a github repository called `<username>.github.io`

`git remote add origin xxx`

`git push -u origin main`

# 添加 github actions

Create ci.yml within the path `.github/workflows`

```yml
name: Build and Deploy
on:
  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:
  push:
    branches: 
      - main
permissions:
  contents: read
  pages: write
  id-token: write

# Allow one concurrent deployment
concurrency:
  group: "pages"
  cancel-in-progress: true

env:
  # Hosted GitHub runners have 7 GB of memory available, let's use 6 GB
  NODE_OPTIONS: --max-old-space-size=6144

jobs:
  build-and-deploy:
    #concurrency: ci-${{ github.ref }} # Recommended if you intend to make multiple deployments in quick succession.
    runs-on: ubuntu-latest
    steps:
      - name: Checkout 🛎️
        uses: actions/checkout@v3

      - name: Set up nodejs
        uses: actions/setup-node@v3
        with:
          node-version: 18.x
          cache: yarn
      
      - name: Install dependencies && build
        run: |
          yarn install --frozen-lockfile --non-interactive
          yarn build

      - name: Deploy to github pages 🚀
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          folder: build # The folder the action should deploy.
          token: ${{secrets.access_token}}
          clean: true
          branch: gh-pages

```