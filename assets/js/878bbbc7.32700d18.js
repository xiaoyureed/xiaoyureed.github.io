"use strict";(self.webpackChunkwiki_1=self.webpackChunkwiki_1||[]).push([[2309],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=l(n),g=a,b=p["".concat(s,".").concat(g)]||p[g]||d[g]||o;return n?r.createElement(b,i(i({ref:t},c),{},{components:n})):r.createElement(b,i({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u[p]="string"==typeof e?e:a,i[1]=u;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},1469:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>u,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={title:"\u4f7f\u7528 docusaurus \u548c github pages \u53d1\u5e03\u535a\u5ba2",authors:"me",tags:["docusaurus","github pages"]},i=void 0,u={permalink:"/blog/2023/04/20/docusaurus-github-pages-blog",editUrl:"https://github.com/xiaoyureed/xiaoyureed.github.io/tree/main/blog/2023-04-20-docusaurus-github-pages-blog/index.md",source:"@site/blog/2023-04-20-docusaurus-github-pages-blog/index.md",title:"\u4f7f\u7528 docusaurus \u548c github pages \u53d1\u5e03\u535a\u5ba2",description:"This article is dedicated to introduce how to establish a blog website by using docusaurus and github pages, and how to auto publish articles by github actions.",date:"2023-04-20T00:00:00.000Z",formattedDate:"2023\u5e744\u670820\u65e5",tags:[{label:"docusaurus",permalink:"/blog/tags/docusaurus"},{label:"github pages",permalink:"/blog/tags/github-pages"}],readingTime:1.4,hasTruncateMarker:!0,authors:[{name:"Xiao Yu",title:"Unknown",url:"https://github.com/xiaoyureed",imageURL:"https://github.com/xiaoyureed.png",key:"me"}],frontMatter:{title:"\u4f7f\u7528 docusaurus \u548c github pages \u53d1\u5e03\u535a\u5ba2",authors:"me",tags:["docusaurus","github pages"]},nextItem:{title:"\u641c\u96c6\u673a\u5668\u5b66\u4e60\u7528\u4e8e\u98df\u54c1\u884c\u4e1a\u7684\u6848\u4f8b",permalink:"/blog/2023/01/01/food-machine-learning"}},s={authorsImageUrls:[void 0]},l=[],c={toc:l},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This article is dedicated to introduce how to establish a blog website by using docusaurus and github pages, and how to auto publish articles by github actions."),(0,a.kt)("p",null,"Official website: ",(0,a.kt)("a",{parentName:"p",href:"https://docusaurus.io/"},"https://docusaurus.io/")),(0,a.kt)("p",null,"Docusaurus \u662f Facebook \u51fa\u54c1\u7684\u4e00\u4e2a\u6587\u6863\u751f\u6210\u5de5\u5177, \u57fa\u4e8e react, \u7b80\u5355\u597d\u7528, \u529f\u80fd\u4e30\u5bcc, \u8fd9\u91cc\u8bb0\u5f55\u4e00\u4e0b\u642d\u5efa\u672c\u7ad9\u70b9\u7684\u8fc7\u7a0b."),(0,a.kt)("h1",{id:"\u672c\u5730\u521d\u59cb\u5316"},"\u672c\u5730\u521d\u59cb\u5316"),(0,a.kt)("p",null,"\u9996\u5148 ",(0,a.kt)("inlineCode",{parentName:"p"},"npx create-docusaurus@latest my-website classic --typescript"),", \u4f1a\u521b\u5efa\u4e00\u4e2a\u672c\u5730\u7684\u521d\u59cb\u5316\u4ed3\u5e93."),(0,a.kt)("p",null,"\u4fee\u6539 \u914d\u7f6e\u6587\u4ef6\u4e2d\u7684 projectName, organizationName, baseUrl ..."),(0,a.kt)("h1",{id:"\u521b\u5efa-github-\u8fdc\u7a0b\u4ed3\u5e93"},"\u521b\u5efa github \u8fdc\u7a0b\u4ed3\u5e93"),(0,a.kt)("p",null,"Create a github repository called ",(0,a.kt)("inlineCode",{parentName:"p"},"<username>.github.io")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"git remote add origin xxx")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"git push -u origin main")),(0,a.kt)("h1",{id:"\u6dfb\u52a0-github-actions"},"\u6dfb\u52a0 github actions"),(0,a.kt)("p",null,"Create ci.yml within the path ",(0,a.kt)("inlineCode",{parentName:"p"},".github/workflows")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},'name: Build and Deploy\non:\n  # Allows you to run this workflow manually from the Actions tab\n  workflow_dispatch:\n  push:\n    branches: \n      - main\npermissions:\n  contents: read\n  pages: write\n  id-token: write\n\n# Allow one concurrent deployment\nconcurrency:\n  group: "pages"\n  cancel-in-progress: true\n\nenv:\n  # Hosted GitHub runners have 7 GB of memory available, let\'s use 6 GB\n  NODE_OPTIONS: --max-old-space-size=6144\n\njobs:\n  build-and-deploy:\n    #concurrency: ci-${{ github.ref }} # Recommended if you intend to make multiple deployments in quick succession.\n    runs-on: ubuntu-latest\n    steps:\n      - name: Checkout \ud83d\udece\ufe0f\n        uses: actions/checkout@v3\n\n      - name: Set up nodejs\n        uses: actions/setup-node@v3\n        with:\n          node-version: 18.x\n          cache: yarn\n      \n      - name: Install dependencies && build\n        run: |\n          yarn install --frozen-lockfile --non-interactive\n          yarn build\n\n      - name: Deploy to github pages \ud83d\ude80\n        uses: JamesIves/github-pages-deploy-action@v4\n        with:\n          folder: build # The folder the action should deploy.\n          token: ${{secrets.access_token}}\n          clean: true\n          branch: gh-pages\n\n')))}d.isMDXComponent=!0}}]);