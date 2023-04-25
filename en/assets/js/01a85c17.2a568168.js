"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4013],{6718:function(e,t,n){n.d(t,{Z:function(){return _}});var r=n(80102),i=(n(67294),n(86010)),a=n(57590),l=n(13488),c=n(83699),s=n(97325),o="sidebar_brwN",u="sidebarItemTitle_r4Q1",d="sidebarItemList_QwSx",m="sidebarItem_lnhn",h="sidebarItemLink_yNGZ",g="sidebarItemLinkActive_oSRm",Z=n(35944);function f(e){var t=e.sidebar;return(0,Z.tZ)("aside",{className:"col col--3",children:(0,Z.BX)("nav",{className:(0,i.Z)(o,"thin-scrollbar"),"aria-label":(0,s.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,Z.tZ)("div",{className:(0,i.Z)(u,"margin-bottom--md"),children:t.title}),(0,Z.tZ)("ul",{className:(0,i.Z)(d,"clean-list"),children:t.items.map((function(e){return(0,Z.tZ)("li",{className:m,children:(0,Z.tZ)(c.Z,{isNavLink:!0,to:e.permalink,className:h,activeClassName:g,children:e.title})},e.permalink)}))})]})})}var b=n(53086);function p(e){var t=e.sidebar;return(0,Z.tZ)("ul",{className:"menu__list",children:t.items.map((function(e){return(0,Z.tZ)("li",{className:"menu__list-item",children:(0,Z.tZ)(c.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active",children:e.title})},e.permalink)}))})}function v(e){return(0,Z.tZ)(b.Zo,{component:p,props:e})}function N(e){var t=e.sidebar,n=(0,l.i)();return null!=t&&t.items.length?"mobile"===n?(0,Z.tZ)(v,{sidebar:t}):(0,Z.tZ)(f,{sidebar:t}):null}var k=["sidebar","toc","children"];function _(e){var t=e.sidebar,n=e.toc,l=e.children,c=(0,r.Z)(e,k),s=t&&t.items.length>0;return(0,Z.tZ)(a.Z,Object.assign({},c,{children:(0,Z.tZ)("div",{className:"container margin-vert--lg",children:(0,Z.BX)("div",{className:"row",children:[(0,Z.tZ)(N,{sidebar:t}),(0,Z.tZ)("main",{className:(0,i.Z)("col",{"col--7":s,"col--9 col--offset-1":!s}),itemScope:!0,itemType:"http://schema.org/Blog",children:l}),n&&(0,Z.tZ)("div",{className:"col col--2",children:n})]})})}))}},53852:function(e,t,n){n.d(t,{Z:function(){return o}});n(67294);var r=n(86010),i=n(83699),a="tag_zVej",l="tagRegular_sFm0",c="tagWithCount_h2kH",s=n(35944);function o(e){var t=e.permalink,n=e.label,o=e.count;return(0,s.BX)(i.Z,{href:t,className:(0,r.Z)(a,o?c:l),children:[n,o&&(0,s.tZ)("span",{children:o})]})}},45565:function(e,t,n){n.d(t,{M:function(){return i},P:function(){return a}});var r=n(97325),i=function(){return(0,r.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"})};function a(e){var t={};return Object.values(e).forEach((function(e){var n=function(e){return e[0].toUpperCase()}(e.label);null!=t[n]||(t[n]=[]),t[n].push(e)})),Object.entries(t).sort((function(e,t){var n=e[0],r=t[0];return n.localeCompare(r)})).map((function(e){return{letter:e[0],tags:e[1].sort((function(e,t){return e.label.localeCompare(t.label)}))}}))}},19588:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var r=n(67294),i=n(86010),a=n(45565),l=n(79488),c=n(23702),s=n(6718),o=n(46080),u=n(33647),d=n(1954),m=n(35944);function h(e){var t=e.tags,n=e.sidebar,h=(0,a.M)(),g=(0,r.useState)("list"),Z=g[0],f=g[1];return(0,m.BX)(l.FG,{className:(0,i.Z)(c.k.wrapper.blogPages,c.k.page.blogTagsListPage),children:[(0,m.tZ)(l.d,{title:h}),(0,m.tZ)(u.Z,{tag:"blog_tags_list"}),(0,m.BX)(s.Z,{sidebar:n,children:[(0,m.BX)("div",{className:"blogtag__swith-view",children:[(0,m.tZ)("h1",{children:h}),(0,m.BX)("div",{children:[(0,m.tZ)(d.JO,{icon:"ph:list-fill",width:"24",height:"24",onClick:function(){return f("list")},color:"list"===Z?"var(--ifm-color-primary)":"#ccc"}),(0,m.tZ)(d.JO,{icon:"ph:grid-four",width:"24",height:"24",onClick:function(){return f("grid")},color:"grid"===Z?"var(--ifm-color-primary)":"#ccc"})]})]}),"list"===Z&&(0,m.tZ)(o.Z,{tags:t}),"grid"===Z&&(0,m.tZ)(o.D,{tags:t})]})]})}},46080:function(e,t,n){n.d(t,{D:function(){return o},Z:function(){return s}});n(67294);var r=n(45565),i=n(53852),a="tag_Yyuv",l=n(35944);function c(e){var t=e.letterEntry;return(0,l.BX)("article",{children:[(0,l.tZ)("h2",{children:t.letter}),(0,l.tZ)("ul",{className:"padding--none",children:t.tags.map((function(e){return(0,l.tZ)("li",{className:a,children:(0,l.tZ)(i.Z,Object.assign({},e))},e.permalink)}))}),(0,l.tZ)("hr",{})]})}function s(e){var t=e.tags,n=(0,r.P)(t);return(0,l.tZ)("section",{className:"margin-vert--lg",children:n.map((function(e){return(0,l.tZ)(c,{letterEntry:e},e.letter)}))})}function o(e){var t=e.tags;return console.log(t),(0,l.tZ)("section",{className:"margin-vert--lg",children:(0,l.tZ)("ul",{className:"padding--none",children:t.map((function(e){return(0,l.tZ)("li",{className:a,children:(0,l.tZ)(i.Z,Object.assign({},e))},e.permalink)}))})})}}}]);