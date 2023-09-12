"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1807],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),a=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=a(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,s=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=a(t),f=i,d=m["".concat(c,".").concat(f)]||m[f]||p[f]||s;return t?r.createElement(d,o(o({ref:n},u),{},{components:t})):r.createElement(d,o({ref:n},u))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var s=t.length,o=new Array(s);o[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var a=2;a<s;a++)o[a]=t[a];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},33496:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return a},toc:function(){return p}});var r=t(83117),i=t(80102),s=(t(67294),t(3905)),o=["components"],l={title:"Vue Brief Intro",tags:["vue"],date:new Date("2023-08-27T00:00:00.000Z")},c=void 0,a={unversionedId:"vue",id:"vue",title:"Vue Brief Intro",description:"basic",source:"@site/docs/vue.md",sourceDirName:".",slug:"/vue",permalink:"/en/docs/vue",draft:!1,tags:[{label:"vue",permalink:"/en/docs/tags/vue"}],version:"current",frontMatter:{title:"Vue Brief Intro",tags:["vue"],date:"2023-08-27T00:00:00.000Z"},sidebar:"tutorialSidebar",previous:{title:"\u62cd\u6444",permalink:"/en/docs/video-creator"},next:{title:"webassembly",permalink:"/en/docs/webassembly"}},u={},p=[{value:"basic",id:"basic",level:2},{value:"init a project",id:"init-a-project",level:3},{value:"how the components communicate",id:"how-the-components-communicate",level:3}],m={toc:p};function f(e){var n=e.components,t=(0,i.Z)(e,o);return(0,s.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"basic"},"basic"),(0,s.kt)("h3",{id:"init-a-project"},"init a project"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm create vite # \u8fdb\u5165\u4ea4\u4e92\u5f0f\u9009\u62e9\n# or\npnpm create vue@latest\n\n\n# init eslint\npnpm i eslint -D\nnpm init @eslint/config # generate eslint config file, \n    eslint <folder> [--fix]\ntouch .eslintignore\n\n# package.json \n\"lint\": \"eslint src\"\n\"fix\": \"eslint src --fix\"\n\n# init prettier\n# eslint-plugin-prettier eslint-config-prettier \u89e3\u51b3\u548c prettier \u51b2\u7a81\npnpm i prettier eslint-plugin-prettier eslint-config-prettier -D\necho {}> .prettierrc.json\ntouch .prettierignore\n# add some configs\n{\n    \"singleQuote\": true,\n    \"semi\": false,\n    \"bracketSpacing\": true,\n    \"htmlWhitespaceSensitivity\": \"ignore\",\n    \"endOfLine\": \"auto\",\n    \"trailingComma\": \"all\",\n    \"tabWidth\": 2\n  }\n# update the eslint config file to \u96c6\u6210 prettier \u7684\u89c4\u5219\n# extends \u4e0b\u6dfb\u52a0 'plugin:prettier/recommended'\n\n# init stylelint\n\n# stylelint \u63d2\u4ef6\u63d0\u4f9b\u6269\u5c55\u89c4\u5219\uff0c\u4e0d\u63d0\u4f9b\u9884\u8bbe\u914d\u7f6e\n# stylelint-config-recommended-scss \u505a scss \u89c4\u5219\u68c0\u67e5\u3002stylelint-scss \u63d0\u4f9b\u4e86 n \u591a\u6761\u89c4\u5219\uff0cstylelint-config-recommended-scss \u5185\u5f00\u542f\u4e86\u90e8\u5206\u914d\u7f6e\n# stylelint-config-recess-order stylelint-order \u91cd\u6392\u548c\u91cd\u7ed8\n# stylelint-config-prettier \u53ef\u4ee5\u89e3\u51b3\u548c prettier \u51b2\u7a81\npp i -D sass sass-loader stylelint postcss postcss-scss postcss-html stylelint-config-prettier stylelint-config-recess-order stylelint-config-recommended-scss stylelint-config-standard stylelint-config-standard-vue stylelint-scss stylelint-order stylelint-config-standard-scss stylelint-config-recommended-vue stylelint-config-html\ntouch .stylelintrc.js\n// @see https://stylelint.bootcss.com/\n\nmodule.exports = {\n  extends: [\n    'stylelint-config-standard', // \u914d\u7f6estylelint\u62d3\u5c55\u63d2\u4ef6\n    'stylelint-config-html/vue', // \u914d\u7f6e vue \u4e2d template \u6837\u5f0f\u683c\u5f0f\u5316\n    'stylelint-config-standard-scss', // \u914d\u7f6estylelint scss\u63d2\u4ef6\n    'stylelint-config-recommended-vue/scss', // \u914d\u7f6e vue \u4e2d scss \u6837\u5f0f\u683c\u5f0f\u5316\n    'stylelint-config-recess-order', // \u914d\u7f6estylelint css\u5c5e\u6027\u4e66\u5199\u987a\u5e8f\u63d2\u4ef6,\n    'stylelint-config-prettier', // \u914d\u7f6estylelint\u548cprettier\u517c\u5bb9\n  ],\n  overrides: [\n    {\n      files: ['**/*.(scss|css|vue|html)'],\n      customSyntax: 'postcss-scss',\n    },\n    {\n      files: ['**/*.(html|vue)'],\n      customSyntax: 'postcss-html',\n    },\n  ],\n  ignoreFiles: [\n    '**/*.js',\n    '**/*.jsx',\n    '**/*.tsx',\n    '**/*.ts',\n    '**/*.json',\n    '**/*.md',\n    '**/*.yaml',\n  ],\n  /**\n   * null  => \u5173\u95ed\u8be5\u89c4\u5219\n   * always => \u5fc5\u987b\n   */\n  rules: {\n    'value-keyword-case': null, // \u5728 css \u4e2d\u4f7f\u7528 v-bind\uff0c\u4e0d\u62a5\u9519\n    'no-descending-specificity': null, // \u7981\u6b62\u5728\u5177\u6709\u8f83\u9ad8\u4f18\u5148\u7ea7\u7684\u9009\u62e9\u5668\u540e\u51fa\u73b0\u88ab\u5176\u8986\u76d6\u7684\u8f83\u4f4e\u4f18\u5148\u7ea7\u7684\u9009\u62e9\u5668\n    'function-url-quotes': 'always', // \u8981\u6c42\u6216\u7981\u6b62 URL \u7684\u5f15\u53f7 \"always(\u5fc5\u987b\u52a0\u4e0a\u5f15\u53f7)\"|\"never(\u6ca1\u6709\u5f15\u53f7)\"\n    'no-empty-source': null, // \u5173\u95ed\u7981\u6b62\u7a7a\u6e90\u7801\n    'selector-class-pattern': null, // \u5173\u95ed\u5f3a\u5236\u9009\u62e9\u5668\u7c7b\u540d\u7684\u683c\u5f0f\n    'property-no-unknown': null, // \u7981\u6b62\u672a\u77e5\u7684\u5c5e\u6027(true \u4e3a\u4e0d\u5141\u8bb8)\n    'block-opening-brace-space-before': 'always', //\u5927\u62ec\u53f7\u4e4b\u524d\u5fc5\u987b\u6709\u4e00\u4e2a\u7a7a\u683c\u6216\u4e0d\u80fd\u6709\u7a7a\u767d\u7b26\n    'value-no-vendor-prefix': null, // \u5173\u95ed \u5c5e\u6027\u503c\u524d\u7f00 --webkit-box\n    'property-no-vendor-prefix': null, // \u5173\u95ed \u5c5e\u6027\u524d\u7f00 -webkit-mask\n    'selector-pseudo-class-no-unknown': [\n      // \u4e0d\u5141\u8bb8\u672a\u77e5\u7684\u9009\u62e9\u5668\n      true,\n      {\n        ignorePseudoClasses: ['global', 'v-deep', 'deep'], // \u5ffd\u7565\u5c5e\u6027\uff0c\u4fee\u6539element\u9ed8\u8ba4\u6837\u5f0f\u7684\u65f6\u5019\u80fd\u4f7f\u7528\u5230\n      },\n    ],\n  },\n}\n\n\n# package.json\n \"format\": \"prettier --write \\\"./**/*.{html,vue,ts,js,json,md}\\\"\",\n\"lint:eslint\": \"eslint src/**/*.{ts,vue} --cache --fix\",\n\"lint:style\": \"stylelint src/**/*.{css,scss,vue} --cache --fix\",\n\n# husky\npp i husky -D\nnpx husky-init # generate husky folder\n# edit pre-commit file\n\u6dfb\u52a0 pnpm format\n\n\n\n# commit lint \u521d\u59cb\u5316\n# \u89c4\u8303:\n# feat, fix, docs, style, refactor, perf (\u6027\u80fd\u4f18\u5316), test, chore (\u6742\u9879), build, revert\npp i -D @commitlint/config-conventional @commitlint/cli\ntouch commitlint.config.cjs\n# \u6dfb\u52a0\u5185\u5bb9:\nmodule.exports = {\n  ignores: [(commit) => commit.includes('init')],\n  extends: ['@commitlint/config-conventional'],\n  rules: {\n    'body-leading-blank': [2, 'always'],\n    'footer-leading-blank': [1, 'always'],\n    'header-max-length': [2, 'always', 108],\n    'subject-empty': [2, 'never'],\n    'type-empty': [2, 'never'],\n    'subject-case': [0],\n  },\n}\n\n# package.json\n\"prepare\": \"husky install\",\n\"commitlint\": \"commitlint --config commitlint.config.cjs -e -V\",\n#  husky \u6dfb\u52a0\u6821\u9a8c\nnpx husky add .husky/commit-msg\n")),(0,s.kt)("h3",{id:"how-the-components-communicate"},"how the components communicate"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"\nprops - \u5b9e\u73b0\u7236\u5b50/\u5b50\u7236/\u5144\u5f1f\u7ec4\u4ef6\u901a\u4fe1\n\ncustomized event - \u5b9e\u73b0\u5b50\u7236\u7ec4\u4ef6\u901a\u4fe1\n\npinia \u5168\u5c40\u72b6\u6001\u7ba1\u7406\u5b9e\u73b0\u901a\u4fe1\nvuex - \u96c6\u4e2d\u5f0f\u72b6\u6001\u7ba1\u7406\u5668, \u5b9e\u73b0\u4efb\u610f\u901a\u4fe1 (vue3 \u63a8\u8350 pinia)\n\npub-sub \u6a21\u5f0f - \u4efb\u610f\u7ec4\u4ef6\u901a\u4fe1 (\u7528\u7684\u5c11, \u4e00\u822c\u7528\u4e8e \u5c0f\u7a0b\u5e8f...)\n\nref - \u7236\u7ec4\u4ef6\u7ec4\u4ef6\u83b7\u53d6\u5b50\u7ec4\u4ef6\u5b9e\u4f8b\n\nslot - \u63d2\u69fd, \u5b9e\u73b0\u7236\u5b50\u901a\u4fe1\n")))}f.isMDXComponent=!0}}]);