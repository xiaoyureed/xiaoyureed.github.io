/*! For license information please see 904.390936e5.js.LICENSE.txt */
"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[904],{60904:function(t,e,s){s.r(e),s.d(e,{GiscusWidget:function(){return vt}});const i=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),r=new Map;class o{constructor(t,e){if(this._$cssResult$=!0,e!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=r.get(this.cssText);return i&&void 0===t&&(r.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const l=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return(t=>new o("string"==typeof t?t:t+"",n))(e)})(t):t;var h;const a=window.trustedTypes,c=a?a.emptyScript:"",d=window.reactiveElementPolyfillSupport,u={toAttribute(t,e){switch(e){case Boolean:t=t?c:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(i){s=null}}return s}},p=(t,e)=>e!==t&&(e==e||t==t),$={attribute:!0,type:String,converter:u,reflect:!1,hasChanged:p};class _ extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,s)=>{const i=this._$Eh(s,e);void 0!==i&&(this._$Eu.set(i,s),t.push(i))})),t}static createProperty(t,e=$){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,i=this.getPropertyDescriptor(t,s,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(i){const n=this[t];this[e]=i,this.requestUpdate(t,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||$}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of e)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(l(t))}else void 0!==t&&e.push(l(t));return e}static _$Eh(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,s;(null!==(e=this._$Eg)&&void 0!==e?e:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t))}removeController(t){var e;null===(e=this._$Eg)||void 0===e||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return s=e,n=this.constructor.elementStyles,i?s.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((t=>{const e=document.createElement("style"),i=window.litNonce;void 0!==i&&e.setAttribute("nonce",i),e.textContent=t.cssText,s.appendChild(e)})),e;var s,n}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ES(t,e,s=$){var i,n;const r=this.constructor._$Eh(t,s);if(void 0!==r&&!0===s.reflect){const o=(null!==(n=null===(i=s.converter)||void 0===i?void 0:i.toAttribute)&&void 0!==n?n:u.toAttribute)(e,s.type);this._$Ei=t,null==o?this.removeAttribute(r):this.setAttribute(r,o),this._$Ei=null}}_$AK(t,e){var s,i,n;const r=this.constructor,o=r._$Eu.get(t);if(void 0!==o&&this._$Ei!==o){const t=r.getPropertyOptions(o),l=t.converter,h=null!==(n=null!==(i=null===(s=l)||void 0===s?void 0:s.fromAttribute)&&void 0!==i?i:"function"==typeof l?l:null)&&void 0!==n?n:u.fromAttribute;this._$Ei=o,this[o]=h(e,t.type),this._$Ei=null}}requestUpdate(t,e,s){let i=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||p)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===s.reflect&&this._$Ei!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):i=!1),!this.isUpdatePending&&i&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(s)):this._$EU()}catch(i){throw e=!1,this._$EU(),i}e&&this._$AE(s)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Eg)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$ES(e,this[e],t))),this._$EC=void 0),this._$EU()}updated(t){}firstUpdated(t){}}var v;_.finalized=!0,_.elementProperties=new Map,_.elementStyles=[],_.shadowRootOptions={mode:"open"},null==d||d({ReactiveElement:_}),(null!==(h=globalThis.reactiveElementVersions)&&void 0!==h?h:globalThis.reactiveElementVersions=[]).push("1.3.2");const g=globalThis.trustedTypes,f=g?g.createPolicy("lit-html",{createHTML:t=>t}):void 0,m=`lit$${(Math.random()+"").slice(9)}$`,A="?"+m,y=`<${A}>`,S=document,E=(t="")=>S.createComment(t),b=t=>null===t||"object"!=typeof t&&"function"!=typeof t,C=Array.isArray,w=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,U=/-->/g,I=/>/g,N=/>|[ \x09\n\x0c\r](?:([^\s"'>=/]+)([ \x09\n\x0c\r]*=[ \x09\n\x0c\r]*(?:[^ \x09\n\x0c\r"'`<>=]|("|')|))|$)/g,P=/'/g,O=/"/g,M=/^(?:script|style|textarea|title)$/i,R=(G=1,(t,...e)=>({_$litType$:G,strings:t,values:e})),T=Symbol.for("lit-noChange"),x=Symbol.for("lit-nothing"),H=new WeakMap,k=S.createTreeWalker(S,129,null,!1);var G;class L{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let n=0,r=0;const o=t.length-1,l=this.parts,[h,a]=((t,e)=>{const s=t.length-1,i=[];let n,r=2===e?"<svg>":"",o=w;for(let h=0;h<s;h++){const e=t[h];let s,l,a=-1,c=0;for(;c<e.length&&(o.lastIndex=c,l=o.exec(e),null!==l);)c=o.lastIndex,o===w?"!--"===l[1]?o=U:void 0!==l[1]?o=I:void 0!==l[2]?(M.test(l[2])&&(n=RegExp("</"+l[2],"g")),o=N):void 0!==l[3]&&(o=N):o===N?">"===l[0]?(o=null!=n?n:w,a=-1):void 0===l[1]?a=-2:(a=o.lastIndex-l[2].length,s=l[1],o=void 0===l[3]?N:'"'===l[3]?O:P):o===O||o===P?o=N:o===U||o===I?o=w:(o=N,n=void 0);const d=o===N&&t[h+1].startsWith("/>")?" ":"";r+=o===w?e+y:a>=0?(i.push(s),e.slice(0,a)+"$lit$"+e.slice(a)+m+d):e+m+(-2===a?(i.push(void 0),h):d)}const l=r+(t[s]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==f?f.createHTML(l):l,i]})(t,e);if(this.el=L.createElement(h,s),k.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(i=k.nextNode())&&l.length<o;){if(1===i.nodeType){if(i.hasAttributes()){const t=[];for(const e of i.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(m)){const s=a[r++];if(t.push(e),void 0!==s){const t=i.getAttribute(s.toLowerCase()+"$lit$").split(m),e=/([.?@])?(.*)/.exec(s);l.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?K:"?"===e[1]?V:"@"===e[1]?q:j})}else l.push({type:6,index:n})}for(const e of t)i.removeAttribute(e)}if(M.test(i.tagName)){const t=i.textContent.split(m),e=t.length-1;if(e>0){i.textContent=g?g.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],E()),k.nextNode(),l.push({type:2,index:++n});i.append(t[e],E())}}}else if(8===i.nodeType)if(i.data===A)l.push({type:2,index:n});else{let t=-1;for(;-1!==(t=i.data.indexOf(m,t+1));)l.push({type:7,index:n}),t+=m.length-1}n++}}static createElement(t,e){const s=S.createElement("template");return s.innerHTML=t,s}}function z(t,e,s=t,i){var n,r,o,l;if(e===T)return e;let h=void 0!==i?null===(n=s._$Cl)||void 0===n?void 0:n[i]:s._$Cu;const a=b(e)?void 0:e._$litDirective$;return(null==h?void 0:h.constructor)!==a&&(null===(r=null==h?void 0:h._$AO)||void 0===r||r.call(h,!1),void 0===a?h=void 0:(h=new a(t),h._$AT(t,s,i)),void 0!==i?(null!==(o=(l=s)._$Cl)&&void 0!==o?o:l._$Cl=[])[i]=h:s._$Cu=h),void 0!==h&&(e=z(t,h._$AS(t,e.values),h,i)),e}class D{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:s},parts:i}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:S).importNode(s,!0);k.currentNode=n;let r=k.nextNode(),o=0,l=0,h=i[0];for(;void 0!==h;){if(o===h.index){let e;2===h.type?e=new B(r,r.nextSibling,this,t):1===h.type?e=new h.ctor(r,h.name,h.strings,this,t):6===h.type&&(e=new Y(r,this,t)),this.v.push(e),h=i[++l]}o!==(null==h?void 0:h.index)&&(r=k.nextNode(),o++)}return n}m(t){let e=0;for(const s of this.v)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class B{constructor(t,e,s,i){var n;this.type=2,this._$AH=x,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cg=null===(n=null==i?void 0:i.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=z(this,t,e),b(t)?t===x||null==t||""===t?(this._$AH!==x&&this._$AR(),this._$AH=x):t!==this._$AH&&t!==T&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):(t=>{var e;return C(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.S(t):this.$(t)}M(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t))}$(t){this._$AH!==x&&b(this._$AH)?this._$AA.nextSibling.data=t:this.k(S.createTextNode(t)),this._$AH=t}T(t){var e;const{values:s,_$litType$:i}=t,n="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=L.createElement(i.h,this.options)),i);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.m(s);else{const t=new D(n,this),e=t.p(this.options);t.m(s),this.k(e),this._$AH=t}}_$AC(t){let e=H.get(t.strings);return void 0===e&&H.set(t.strings,e=new L(t)),e}S(t){C(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const n of t)i===e.length?e.push(s=new B(this.M(E()),this.M(E()),this,this.options)):s=e[i],s._$AI(n),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class j{constructor(t,e,s,i,n){this.type=1,this._$AH=x,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=x}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,s,i){const n=this.strings;let r=!1;if(void 0===n)t=z(this,t,e,0),r=!b(t)||t!==this._$AH&&t!==T,r&&(this._$AH=t);else{const i=t;let o,l;for(t=n[0],o=0;o<n.length-1;o++)l=z(this,i[s+o],e,o),l===T&&(l=this._$AH[o]),r||(r=!b(l)||l!==this._$AH[o]),l===x?t=x:t!==x&&(t+=(null!=l?l:"")+n[o+1]),this._$AH[o]=l}r&&!i&&this.C(t)}C(t){t===x?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class K extends j{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===x?void 0:t}}const W=g?g.emptyScript:"";class V extends j{constructor(){super(...arguments),this.type=4}C(t){t&&t!==x?this.element.setAttribute(this.name,W):this.element.removeAttribute(this.name)}}class q extends j{constructor(t,e,s,i,n){super(t,e,s,i,n),this.type=5}_$AI(t,e=this){var s;if((t=null!==(s=z(this,t,e,0))&&void 0!==s?s:x)===T)return;const i=this._$AH,n=t===x&&i!==x||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==x&&(i===x||n);n&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t)}}class Y{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){z(this,t)}}const J=window.litHtmlPolyfillSupport;var Q,Z;null==J||J(L,B),(null!==(v=globalThis.litHtmlVersions)&&void 0!==v?v:globalThis.litHtmlVersions=[]).push("2.2.6");class F extends _{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const s=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=s.firstChild),s}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((t,e,s)=>{var i,n;const r=null!==(i=null==s?void 0:s.renderBefore)&&void 0!==i?i:e;let o=r._$litPart$;if(void 0===o){const t=null!==(n=null==s?void 0:s.renderBefore)&&void 0!==n?n:null;r._$litPart$=o=new B(e.insertBefore(E(),t),t,void 0,null!=s?s:{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return T}}F.finalized=!0,F._$litElement$=!0,null===(Q=globalThis.litElementHydrateSupport)||void 0===Q||Q.call(globalThis,{LitElement:F});const X=globalThis.litElementPolyfillSupport;null==X||X({LitElement:F}),(null!==(Z=globalThis.litElementVersions)&&void 0!==Z?Z:globalThis.litElementVersions=[]).push("3.2.0");const tt=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(s){s.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(s){s.createProperty(e.key,t)}};function et(t){return(e,s)=>{return void 0!==s?(i=t,n=s,void e.constructor.createProperty(n,i)):tt(t,e);var i,n}}var st;null===(st=window.HTMLSlotElement)||void 0===st||st.prototype.assignedElements;const it=2;const nt=(t,e)=>{var s,i;const n=t._$AN;if(void 0===n)return!1;for(const r of n)null===(i=(s=r)._$AO)||void 0===i||i.call(s,e,!1),nt(r,e);return!0},rt=t=>{let e,s;do{if(void 0===(e=t._$AM))break;s=e._$AN,s.delete(t),t=e}while(0===(null==s?void 0:s.size))},ot=t=>{for(let e;e=t._$AM;t=e){let s=e._$AN;if(void 0===s)e._$AN=s=new Set;else if(s.has(t))break;s.add(t),at(e)}};function lt(t){void 0!==this._$AN?(rt(this),this._$AM=t,ot(this)):this._$AM=t}function ht(t,e=!1,s=0){const i=this._$AH,n=this._$AN;if(void 0!==n&&0!==n.size)if(e)if(Array.isArray(i))for(let r=s;r<i.length;r++)nt(i[r],!1),rt(i[r]);else null!=i&&(nt(i,!1),rt(i));else nt(this,t)}const at=t=>{var e,s,i,n;t.type==it&&(null!==(e=(i=t)._$AP)&&void 0!==e||(i._$AP=ht),null!==(s=(n=t)._$AQ)&&void 0!==s||(n._$AQ=lt))};class ct{}const dt=new WeakMap,ut=(t=>(...e)=>({_$litDirective$:t,values:e}))(class extends class extends class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,s){super._$AT(t,e,s),ot(this),this.isConnected=t._$AU}_$AO(t,e=!0){var s,i;t!==this.isConnected&&(this.isConnected=t,t?null===(s=this.reconnected)||void 0===s||s.call(this):null===(i=this.disconnected)||void 0===i||i.call(this)),e&&(nt(this,t),rt(this))}setValue(t){if(void 0===this._$Ct.strings)this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}{render(t){return x}update(t,[e]){var s;const i=e!==this.U;return i&&void 0!==this.U&&this.ot(void 0),(i||this.rt!==this.lt)&&(this.U=e,this.ht=null===(s=t.options)||void 0===s?void 0:s.host,this.ot(this.lt=t.element)),x}ot(t){var e;if("function"==typeof this.U){const s=null!==(e=this.ht)&&void 0!==e?e:globalThis;let i=dt.get(s);void 0===i&&(i=new WeakMap,dt.set(s,i)),void 0!==i.get(this.U)&&this.U.call(this.ht,void 0),i.set(this.U,t),void 0!==t&&this.U.call(this.ht,t)}else this.U.value=t}get rt(){var t,e,s;return"function"==typeof this.U?null===(e=dt.get(null!==(t=this.ht)&&void 0!==t?t:globalThis))||void 0===e?void 0:e.get(this.U):null===(s=this.U)||void 0===s?void 0:s.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}});var pt=Object.defineProperty,$t=Object.getOwnPropertyDescriptor,_t=(t,e,s,i)=>{for(var n,r=i>1?void 0:i?$t(e,s):e,o=t.length-1;o>=0;o--)(n=t[o])&&(r=(i?n(e,s,r):n(r))||r);return i&&r&&pt(e,s,r),r};let vt=class extends F{constructor(){super(),this.GISCUS_SESSION_KEY="giscus-session",this.GISCUS_ORIGIN="https://giscus.app",this.ERROR_SUGGESTION="Please consider reporting this error at https://github.com/giscus/giscus/issues/new.",this.__session="",this._iframeRef=new ct,this.messageEventHandler=this.handleMessageEvent.bind(this),this.reactionsEnabled="1",this.emitMetadata="0",this.inputPosition="bottom",this.theme="light",this.lang="en",this.loading="eager",this.setupSession(),window.addEventListener("message",this.messageEventHandler)}get iframeRef(){return this._iframeRef.value}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("message",this.messageEventHandler)}_formatError(t){return`[giscus] An error occurred. Error message: "${t}".`}setupSession(){const t=location.href,e=new URL(t),s=localStorage.getItem(this.GISCUS_SESSION_KEY),i=e.searchParams.get("giscus")||"";if(i)return localStorage.setItem(this.GISCUS_SESSION_KEY,JSON.stringify(i)),this.__session=i,e.searchParams.delete("giscus"),void history.replaceState(void 0,document.title,e.toString());if(s)try{this.__session=JSON.parse(s||"")||""}catch(n){this.__session="",localStorage.removeItem(this.GISCUS_SESSION_KEY),console.warn(`${this._formatError(null==n?void 0:n.message)} Session has been cleared.`)}}handleMessageEvent(t){if(t.origin!==this.GISCUS_ORIGIN)return;const{data:e}=t;if("object"!=typeof e||!e.giscus)return;if(this.iframeRef&&e.giscus.resizeHeight&&(this.iframeRef.style.height=`${e.giscus.resizeHeight}px`),!e.giscus.error)return;const s=e.giscus.error;if(s.includes("Bad credentials")||s.includes("Invalid state value")){if(null!==localStorage.getItem(this.GISCUS_SESSION_KEY))return localStorage.removeItem(this.GISCUS_SESSION_KEY),this.__session="",console.warn(`${this._formatError(s)} Session has been cleared.`),void this.update(new Map);console.error(`${this._formatError(s)} No session is stored initially. ${this.ERROR_SUGGESTION}`)}s.includes("Discussion not found")?console.warn(`[giscus] ${s}. A new discussion will be created if a comment/reaction is submitted.`):console.error(`${this._formatError(s)} ${this.ERROR_SUGGESTION}`)}sendMessage(t){var e,s;null==(s=null==(e=this.iframeRef)?void 0:e.contentWindow)||s.postMessage({giscus:t},this.GISCUS_ORIGIN)}updateConfig(){const t={setConfig:{repo:this.repo,repoId:this.repoId,category:this.category,categoryId:this.categoryId,term:this.getTerm(),number:+this.getNumber(),reactionsEnabled:"1"===this.reactionsEnabled,emitMetadata:"1"===this.emitMetadata,inputPosition:this.inputPosition,theme:this.theme,lang:this.lang}};this.sendMessage(t)}requestUpdate(t,e,s){this.hasUpdated?this.updateConfig():super.requestUpdate(t,e,s)}_getOgMetaContent(t){const e=document.querySelector(`meta[property='og:${t}'],meta[name='${t}']`);return e?e.content:""}_getCleanedUrl(){const t=new URL(location.href);return t.searchParams.delete("giscus"),t}getTerm(){switch(this.mapping){case"url":return`${this._getCleanedUrl()}`;case"title":return document.title;case"og:title":return this._getOgMetaContent("title");case"specific":return this.term||"";case"number":return"";default:return location.pathname.length<2?"index":location.pathname.substring(1).replace(/\.\w+$/,"")}}getNumber(){return"number"===this.mapping&&this.term||""}getIframeSrc(){const t=`${this._getCleanedUrl()}${this.id?"#"+this.id:""}`,e=this._getOgMetaContent("description"),s={origin:t,session:this.__session,repo:this.repo,repoId:this.repoId||"",category:this.category||"",categoryId:this.categoryId||"",term:this.getTerm(),number:this.getNumber(),reactionsEnabled:this.reactionsEnabled,emitMetadata:this.emitMetadata,inputPosition:this.inputPosition,theme:this.theme,description:e},i=this.lang?`/${this.lang}`:"",n=new URLSearchParams(s);return`${this.GISCUS_ORIGIN}${i}/widget?${n}`}render(){return R`
      <iframe
        title="Comments"
        scrolling="no"
        ${ut(this._iframeRef)}
        src=${this.getIframeSrc()}
        loading=${this.loading}
        part="iframe"
      ></iframe>
    `}};var gt;vt.styles=((t,...e)=>{const s=1===t.length?t[0]:e.reduce(((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1]),t[0]);return new o(s,n)})`
    :host,
    iframe {
      width: 100%;
      border: none;
      color-scheme: normal;
      min-height: 150px;
    }
  `,_t([et({reflect:!0})],vt.prototype,"repo",2),_t([et({reflect:!0})],vt.prototype,"repoId",2),_t([et({reflect:!0})],vt.prototype,"category",2),_t([et({reflect:!0})],vt.prototype,"categoryId",2),_t([et({reflect:!0})],vt.prototype,"mapping",2),_t([et({reflect:!0})],vt.prototype,"term",2),_t([et({reflect:!0})],vt.prototype,"reactionsEnabled",2),_t([et({reflect:!0})],vt.prototype,"emitMetadata",2),_t([et({reflect:!0})],vt.prototype,"inputPosition",2),_t([et({reflect:!0})],vt.prototype,"theme",2),_t([et({reflect:!0})],vt.prototype,"lang",2),_t([et({reflect:!0})],vt.prototype,"loading",2),vt=_t([(gt="giscus-widget",t=>{return"function"==typeof t?(e=gt,s=t,window.customElements.define(e,s),s):((t,e)=>{const{kind:s,elements:i}=e;return{kind:s,elements:i,finisher(e){window.customElements.define(t,e)}}})(gt,t);var e,s})],vt)}}]);