"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2309],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=l(n),g=a,b=d["".concat(s,".").concat(g)]||d[g]||p[g]||o;return n?r.createElement(b,i(i({ref:t},c),{},{components:n})):r.createElement(b,i({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},54780:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return p}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),i=["components"],u={title:"Publish Blogs by Using Docusaurus and Github Pages",authors:"me",tags:["docusaurus","github pages"]},s=void 0,l={permalink:"/2023/04/20/docusaurus-github-pages-blog",editUrl:"https://github.com/xiaoyureed/xiaoyureed.github.io/edit/main/blog/2023-04-20-docusaurus-github-pages-blog/index.md",source:"@site/blog/2023-04-20-docusaurus-github-pages-blog/index.md",title:"Publish Blogs by Using Docusaurus and Github Pages",description:"This article is dedicated to introduce how to establish a blog website by using docusaurus and github pages, and how to auto publish articles by github actions.",date:"2023-04-20T00:00:00.000Z",formattedDate:"2023\u5e744\u670820\u65e5",tags:[{label:"docusaurus",permalink:"/tags/docusaurus"},{label:"github pages",permalink:"/tags/github-pages"}],readingTime:.91,hasTruncateMarker:!0,authors:[{name:"Xiao Yu",title:"Unknown",url:"https://github.com/xiaoyureed",imageURL:"https://github.com/xiaoyureed.png",key:"me"}],frontMatter:{title:"Publish Blogs by Using Docusaurus and Github Pages",authors:"me",tags:["docusaurus","github pages"]},nextItem:{title:"\u641c\u96c6\u673a\u5668\u5b66\u4e60\u7528\u4e8e\u98df\u54c1\u884c\u4e1a\u7684\u6848\u4f8b",permalink:"/2023/01/01/food-machine-learning"}},c={authorsImageUrls:[void 0]},p=[],d={toc:p};function g(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This article is dedicated to introduce how to establish a blog website by using docusaurus and github pages, and how to auto publish articles by github actions."),(0,o.kt)("p",null,"Official website: ",(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io/"},"https://docusaurus.io/")),(0,o.kt)("p",null,"Docusaurus \u662f Facebook \u51fa\u54c1\u7684\u4e00\u4e2a\u6587\u6863\u751f\u6210\u5de5\u5177, \u57fa\u4e8e react, \u5176\u4ed6\u66f4\u591a\u9759\u6001\u7ad9\u70b9\u751f\u6210\u5668\u67e5\u770b ",(0,o.kt)("a",{parentName:"p",href:"https://jamstack.org/generators/"},"https://jamstack.org/generators/")),(0,o.kt)("h1",{id:"\u672c\u5730\u521d\u59cb\u5316"},"\u672c\u5730\u521d\u59cb\u5316"),(0,o.kt)("p",null,"\u9996\u5148 ",(0,o.kt)("inlineCode",{parentName:"p"},"npx create-docusaurus@latest my-website classic --typescript"),", \u4f1a\u521b\u5efa\u4e00\u4e2a\u672c\u5730\u7684\u521d\u59cb\u5316\u4ed3\u5e93."),(0,o.kt)("p",null,"\u4fee\u6539 \u914d\u7f6e\u6587\u4ef6\u4e2d\u7684 projectName, organizationName, baseUrl ..."),(0,o.kt)("h1",{id:"\u521b\u5efa-github-\u8fdc\u7a0b\u4ed3\u5e93"},"\u521b\u5efa github \u8fdc\u7a0b\u4ed3\u5e93"),(0,o.kt)("p",null,"Create a github repository called ",(0,o.kt)("inlineCode",{parentName:"p"},"<username>.github.io")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"git remote add origin xxx")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"git push -u origin main")),(0,o.kt)("h1",{id:"\u6dfb\u52a0-github-actions"},"\u6dfb\u52a0 github actions"),(0,o.kt)("p",null,"Create ci.yml within the path ",(0,o.kt)("inlineCode",{parentName:"p"},".github/workflows")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},'name: Build and Deploy\non:\n  # Allows you to run this workflow manually from the Actions tab\n  workflow_dispatch:\n  push:\n    branches: \n      - main\npermissions:\n  contents: read\n  pages: write\n  id-token: write\n\n# Allow one concurrent deployment\nconcurrency:\n  group: "pages"\n  cancel-in-progress: true\n\nenv:\n  # Hosted GitHub runners have 7 GB of memory available, let\'s use 6 GB\n  NODE_OPTIONS: --max-old-space-size=6144\n\njobs:\n  build-and-deploy:\n    #concurrency: ci-${{ github.ref }} # Recommended if you intend to make multiple deployments in quick succession.\n    runs-on: ubuntu-latest\n    steps:\n      - name: Checkout \ud83d\udece\ufe0f\n        uses: actions/checkout@v3\n\n      - name: Set up nodejs\n        uses: actions/setup-node@v3\n        with:\n          node-version: 18.x\n          cache: yarn\n      \n      - name: Install dependencies && build\n        run: |\n          yarn install --frozen-lockfile --non-interactive\n          yarn build\n\n      - name: Deploy to github pages \ud83d\ude80\n        uses: JamesIves/github-pages-deploy-action@v4\n        with:\n          folder: build # The folder the action should deploy.\n          token: ${{secrets.access_token}}\n          clean: true\n          branch: gh-pages\n\n')))}g.isMDXComponent=!0}}]);