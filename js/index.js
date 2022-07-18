/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&'adoptedStyleSheets'in Document.prototype&&'replace'in CSSStyleSheet.prototype,t=Symbol(),i=new WeakMap;class o{constructor(e,i,o){if(this._$cssResult$=!0,o!==t)throw Error('CSSResult is not constructable. Use `unsafeCSS` or `css` instead.');this.cssText=e,this.t=i}get styleSheet(){let t=this.o;const o=this.t;if(e&&void 0===t){const e=void 0!==o&&1===o.length;e&&(t=i.get(o)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&i.set(o,t))}return t}toString(){return this.cssText}}const r=e?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let i='';for(const t of e.cssRules)i+=t.cssText;return(e=>new o('string'==typeof e?e:e+'',void 0,t))(i)})(e):e
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var s;const n=window.trustedTypes,l=n?n.emptyScript:'',a=window.reactiveElementPolyfillSupport,c={toAttribute(e,t){switch(t){case Boolean:e=e?l:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},d=(e,t)=>t!==e&&(t==t||e==e),h={attribute:!0,type:String,converter:c,reflect:!1,hasChanged:d};class p extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;null!==(t=this.h)&&void 0!==t||(this.h=[]),this.h.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((t,i)=>{const o=this._$Ep(i,t);void 0!==o&&(this._$Ev.set(o,i),e.push(o))})),e}static createProperty(e,t=h){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i='symbol'==typeof e?Symbol():'__'+e,o=this.getPropertyDescriptor(e,i,t);void 0!==o&&Object.defineProperty(this.prototype,e,o)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(o){const r=this[e];this[t]=o,this.requestUpdate(e,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||h}static finalize(){if(this.hasOwnProperty('finalized'))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty('properties')){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const i of t)this.createProperty(i,e[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(r(e))}else void 0!==e&&t.push(r(e));return t}static _$Ep(e,t){const i=t.attribute;return!1===i?void 0:'string'==typeof i?i:'string'==typeof e?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(e=this.constructor.h)||void 0===e||e.forEach((e=>e(this)))}addController(e){var t,i;(null!==(t=this._$ES)&&void 0!==t?t:this._$ES=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(i=e.hostConnected)||void 0===i||i.call(e))}removeController(e){var t;null===(t=this._$ES)||void 0===t||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])}))}createRenderRoot(){var t;const i=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,i)=>{e?t.adoptedStyleSheets=i.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):i.forEach((e=>{const i=document.createElement('style'),o=window.litNonce;void 0!==o&&i.setAttribute('nonce',o),i.textContent=e.cssText,t.appendChild(i)}))})(i,this.constructor.elementStyles),i}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)}))}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)}))}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t,i=h){var o,r;const s=this.constructor._$Ep(e,i);if(void 0!==s&&!0===i.reflect){const n=(null!==(r=null===(o=i.converter)||void 0===o?void 0:o.toAttribute)&&void 0!==r?r:c.toAttribute)(t,i.type);this._$El=e,null==n?this.removeAttribute(s):this.setAttribute(s,n),this._$El=null}}_$AK(e,t){var i,o;const r=this.constructor,s=r._$Ev.get(e);if(void 0!==s&&this._$El!==s){const e=r.getPropertyOptions(s),n=e.converter,l=null!==(o=null!==(i=null==n?void 0:n.fromAttribute)&&void 0!==i?i:'function'==typeof n?n:null)&&void 0!==o?o:c.fromAttribute;this._$El=s,this[s]=l(t,e.type),this._$El=null}}requestUpdate(e,t,i){let o=!0;void 0!==e&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||d)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===i.reflect&&this._$El!==e&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(e,i))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((e,t)=>this[t]=e)),this._$Ei=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)})),this.update(i)):this._$Ek()}catch(e){throw t=!1,this._$Ek(),e}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;null===(t=this._$ES)||void 0===t||t.forEach((e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){void 0!==this._$EC&&(this._$EC.forEach(((e,t)=>this._$EO(t,this[t],e))),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var u;p.finalized=!0,p.elementProperties=new Map,p.elementStyles=[],p.shadowRootOptions={mode:'open'},null==a||a({ReactiveElement:p}),(null!==(s=globalThis.reactiveElementVersions)&&void 0!==s?s:globalThis.reactiveElementVersions=[]).push('1.3.3');const v=globalThis.trustedTypes,m=v?v.createPolicy('lit-html',{createHTML:e=>e}):void 0,g=`lit$${(Math.random()+'').slice(9)}$`,b='?'+g,f=`<${b}>`,$=document,y=(e='')=>$.createComment(e),_=e=>null===e||'object'!=typeof e&&'function'!=typeof e,A=Array.isArray,x=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,E=/-->/g,k=/>/g,w=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,S=/'/g,C=/"/g,T=/^(?:script|style|textarea|title)$/i,P=(e=>(t,...i)=>({_$litType$:e,strings:t,values:i}))(1),N=Symbol.for('lit-noChange'),H=Symbol.for('lit-nothing'),U=new WeakMap,O=$.createTreeWalker($,129,null,!1),R=(e,t)=>{const i=e.length-1,o=[];let r,s=2===t?'<svg>':'',n=x;for(let t=0;t<i;t++){const i=e[t];let l,a,c=-1,d=0;for(;d<i.length&&(n.lastIndex=d,a=n.exec(i),null!==a);)d=n.lastIndex,n===x?'!--'===a[1]?n=E:void 0!==a[1]?n=k:void 0!==a[2]?(T.test(a[2])&&(r=RegExp('</'+a[2],'g')),n=w):void 0!==a[3]&&(n=w):n===w?'>'===a[0]?(n=null!=r?r:x,c=-1):void 0===a[1]?c=-2:(c=n.lastIndex-a[2].length,l=a[1],n=void 0===a[3]?w:'"'===a[3]?C:S):n===C||n===S?n=w:n===E||n===k?n=x:(n=w,r=void 0);const h=n===w&&e[t+1].startsWith('/>')?' ':'';s+=n===x?i+f:c>=0?(o.push(l),i.slice(0,c)+'$lit$'+i.slice(c)+g+h):i+g+(-2===c?(o.push(void 0),t):h)}const l=s+(e[i]||'<?>')+(2===t?'</svg>':'');if(!Array.isArray(e)||!e.hasOwnProperty('raw'))throw Error('invalid template strings array');return[void 0!==m?m.createHTML(l):l,o]};class M{constructor({strings:e,_$litType$:t},i){let o;this.parts=[];let r=0,s=0;const n=e.length-1,l=this.parts,[a,c]=R(e,t);if(this.el=M.createElement(a,i),O.currentNode=this.el.content,2===t){const e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(o=O.nextNode())&&l.length<n;){if(1===o.nodeType){if(o.hasAttributes()){const e=[];for(const t of o.getAttributeNames())if(t.endsWith('$lit$')||t.startsWith(g)){const i=c[s++];if(e.push(t),void 0!==i){const e=o.getAttribute(i.toLowerCase()+'$lit$').split(g),t=/([.?@])?(.*)/.exec(i);l.push({type:1,index:r,name:t[2],strings:e,ctor:'.'===t[1]?B:'?'===t[1]?q:'@'===t[1]?V:D})}else l.push({type:6,index:r})}for(const t of e)o.removeAttribute(t)}if(T.test(o.tagName)){const e=o.textContent.split(g),t=e.length-1;if(t>0){o.textContent=v?v.emptyScript:'';for(let i=0;i<t;i++)o.append(e[i],y()),O.nextNode(),l.push({type:2,index:++r});o.append(e[t],y())}}}else if(8===o.nodeType)if(o.data===b)l.push({type:2,index:r});else{let e=-1;for(;-1!==(e=o.data.indexOf(g,e+1));)l.push({type:7,index:r}),e+=g.length-1}r++}}static createElement(e,t){const i=$.createElement('template');return i.innerHTML=e,i}}function I(e,t,i=e,o){var r,s,n,l;if(t===N)return t;let a=void 0!==o?null===(r=i._$Cl)||void 0===r?void 0:r[o]:i._$Cu;const c=_(t)?void 0:t._$litDirective$;return(null==a?void 0:a.constructor)!==c&&(null===(s=null==a?void 0:a._$AO)||void 0===s||s.call(a,!1),void 0===c?a=void 0:(a=new c(e),a._$AT(e,i,o)),void 0!==o?(null!==(n=(l=i)._$Cl)&&void 0!==n?n:l._$Cl=[])[o]=a:i._$Cu=a),void 0!==a&&(t=I(e,a._$AS(e,t.values),a,o)),t}class z{constructor(e,t){this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(e){var t;const{el:{content:i},parts:o}=this._$AD,r=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:$).importNode(i,!0);O.currentNode=r;let s=O.nextNode(),n=0,l=0,a=o[0];for(;void 0!==a;){if(n===a.index){let t;2===a.type?t=new L(s,s.nextSibling,this,e):1===a.type?t=new a.ctor(s,a.name,a.strings,this,e):6===a.type&&(t=new W(s,this,e)),this.v.push(t),a=o[++l]}n!==(null==a?void 0:a.index)&&(s=O.nextNode(),n++)}return r}m(e){let t=0;for(const i of this.v)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class L{constructor(e,t,i,o){var r;this.type=2,this._$AH=H,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=o,this._$Cg=null===(r=null==o?void 0:o.isConnected)||void 0===r||r}get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cg}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=I(this,e,t),_(e)?e===H||null==e||''===e?(this._$AH!==H&&this._$AR(),this._$AH=H):e!==this._$AH&&e!==N&&this.$(e):void 0!==e._$litType$?this.T(e):void 0!==e.nodeType?this.k(e):(e=>{var t;return A(e)||'function'==typeof(null===(t=e)||void 0===t?void 0:t[Symbol.iterator])})(e)?this.S(e):this.$(e)}M(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}k(e){this._$AH!==e&&(this._$AR(),this._$AH=this.M(e))}$(e){this._$AH!==H&&_(this._$AH)?this._$AA.nextSibling.data=e:this.k($.createTextNode(e)),this._$AH=e}T(e){var t;const{values:i,_$litType$:o}=e,r='number'==typeof o?this._$AC(e):(void 0===o.el&&(o.el=M.createElement(o.h,this.options)),o);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===r)this._$AH.m(i);else{const e=new z(r,this),t=e.p(this.options);e.m(i),this.k(t),this._$AH=e}}_$AC(e){let t=U.get(e.strings);return void 0===t&&U.set(e.strings,t=new M(e)),t}S(e){A(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,o=0;for(const r of e)o===t.length?t.push(i=new L(this.M(y()),this.M(y()),this,this.options)):i=t[o],i._$AI(r),o++;o<t.length&&(this._$AR(i&&i._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cg=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}class D{constructor(e,t,i,o,r){this.type=1,this._$AH=H,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=r,i.length>2||''!==i[0]||''!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=H}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,o){const r=this.strings;let s=!1;if(void 0===r)e=I(this,e,t,0),s=!_(e)||e!==this._$AH&&e!==N,s&&(this._$AH=e);else{const o=e;let n,l;for(e=r[0],n=0;n<r.length-1;n++)l=I(this,o[i+n],t,n),l===N&&(l=this._$AH[n]),s||(s=!_(l)||l!==this._$AH[n]),l===H?e=H:e!==H&&(e+=(null!=l?l:'')+r[n+1]),this._$AH[n]=l}s&&!o&&this.C(e)}C(e){e===H?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:'')}}class B extends D{constructor(){super(...arguments),this.type=3}C(e){this.element[this.name]=e===H?void 0:e}}const j=v?v.emptyScript:'';class q extends D{constructor(){super(...arguments),this.type=4}C(e){e&&e!==H?this.element.setAttribute(this.name,j):this.element.removeAttribute(this.name)}}class V extends D{constructor(e,t,i,o,r){super(e,t,i,o,r),this.type=5}_$AI(e,t=this){var i;if((e=null!==(i=I(this,e,t,0))&&void 0!==i?i:H)===N)return;const o=this._$AH,r=e===H&&o!==H||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,s=e!==H&&(o===H||r);r&&this.element.removeEventListener(this.name,this,o),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;'function'==typeof this._$AH?this._$AH.call(null!==(i=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==i?i:this.element,e):this._$AH.handleEvent(e)}}class W{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){I(this,e)}}const K=window.litHtmlPolyfillSupport;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var J,Z;null==K||K(M,L),(null!==(u=globalThis.litHtmlVersions)&&void 0!==u?u:globalThis.litHtmlVersions=[]).push('2.2.6');class F extends p{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{var o,r;const s=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:t;let n=s._$litPart$;if(void 0===n){const e=null!==(r=null==i?void 0:i.renderBefore)&&void 0!==r?r:null;s._$litPart$=n=new L(t.insertBefore(y(),e),e,void 0,null!=i?i:{})}return n._$AI(e),n})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!1)}render(){return N}}F.finalized=!0,F._$litElement$=!0,null===(J=globalThis.litElementHydrateSupport)||void 0===J||J.call(globalThis,{LitElement:F});const G=globalThis.litElementPolyfillSupport;null==G||G({LitElement:F}),(null!==(Z=globalThis.litElementVersions)&&void 0!==Z?Z:globalThis.litElementVersions=[]).push('3.2.1');class Q extends Event{constructor(e){super(Q.eventName,{bubbles:!0}),this.targetElement=e}}Q.eventName='dialog-event';class X extends Event{constructor(e){super(X.eventName,{bubbles:!0}),this.themeName='',this.themeName=e}}X.eventName='theme-event';
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Y=(e,t)=>'method'===t.kind&&t.descriptor&&!('value'in t.descriptor)?{...t,finisher(i){i.createProperty(t.key,e)}}:{kind:'field',key:Symbol(),placement:'own',descriptor:{},originalKey:t.key,initializer(){'function'==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(i){i.createProperty(t.key,e)}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ee(e){return(t,i)=>void 0!==i?((e,t,i)=>{t.constructor.createProperty(i,e)})(e,t,i):Y(e,t)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function te(e){return ee({...e,state:!0})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ie=({finisher:e,descriptor:t})=>(i,o)=>{var r;if(void 0===o){const o=null!==(r=i.originalKey)&&void 0!==r?r:i.key,s=null!=t?{kind:'method',placement:'prototype',key:o,descriptor:t(i.key)}:{...i,key:o};return null!=e&&(s.finisher=function(t){e(t,o)}),s}{const r=i.constructor;void 0!==t&&Object.defineProperty(i,o,t(o)),null==e||e(r,o)}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var oe;null===(oe=window.HTMLSlotElement)||void 0===oe||oe.prototype.assignedElements;var re=function(e,t,i,o){var r,s=arguments.length,n=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if('object'==typeof Reflect&&'function'==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(n=(s<3?r(n):s>3?r(t,i,n):r(t,i))||n);return s>3&&n&&Object.defineProperty(t,i,n),n};const se=e=>localStorage.getItem(e),ne=(e,t)=>{localStorage.setItem(e,t)},le=e=>{localStorage.removeItem(e)},ae=[{name:'auto',checked:!0},{name:'light',checked:!1},{name:'dark',checked:!1}];let ce=class extends F{constructor(){super(...arguments),this.dialogHidden=!0,this.themes=[],this.saveSelection=!1,this.availableThemes=[],this.lastIndex=this.themes.length-1}connectedCallback(){super.connectedCallback(),addEventListener(Q.eventName,(async e=>{const{targetElement:t}=e,{id:i}=t;this.openerElementId=i,this.dialogHidden=!1,await this.updateComplete,this.getTabElements()[0].focus()}));const e=se('theme-preference'),t=se('save-selection');try{this.saveSelection=JSON.parse(t||'')}catch(e){this.saveSelection=!1}Array.isArray(this.availableThemes)&&this.availableThemes.length?this.themes=this.availableThemes.map(((e,t)=>({name:e,checked:0===t}))):this.themes=ae;const i=this.themes.findIndex((t=>t.name===e));this.updateThemeState(-1===i?0:i),this.lastIndex=this.themes.length-1}disconnectedCallback(){super.disconnectedCallback(),removeEventListener(Q.eventName,(()=>{console.info(`${Q.eventName} has been removed as an EventListener`)}))}updateThemeState(e){const t=[...this.themes];t.forEach((e=>e.checked=!1)),t[e].checked=!0,this.themes=t}closeDialog(){var e;this.dialogHidden=!0,null===(e=document.querySelector(`#${this.openerElementId}`))||void 0===e||e.focus()}handleArrowKeys(e,t){switch(e.key){case'ArrowLeft':case'ArrowUp':0!==t?this.focusElement(this.themeButtons,t-1):this.focusElement(this.themeButtons,this.lastIndex);break;case'ArrowRight':case'ArrowDown':t!==this.lastIndex?this.focusElement(this.themeButtons,t+1):this.focusElement(this.themeButtons,0)}}getTabElements(){return this.renderRoot.querySelectorAll('a[href], input, button:not([tabindex="-1"])')}focusElement(e,t){e[t].focus()}close(){}render(){return P`
            <div
                aria-hidden="true"
                tabindex="0"
                @focus="${()=>{const e=this.getTabElements(),t=e.length-1;this.focusElement(e,t)}}"
            ></div>
            <div
                @click="${e=>{const{id:t}=e.target;'dialog-backdrop'===t&&this.closeDialog()}}"
                aria-hidden="${this.dialogHidden}"
                id="dialog-backdrop"
            >
                <div
                    @keydown="${e=>{'Escape'===e.key&&this.closeDialog()}}"
                    aria-hidden="${this.dialogHidden}"
                    aria-label="Theme-Selection"
                    aria-modal="true"
                    id="dialog-theme-selection"
                    role="dialog"
                    tabindex="-1"
                >
                    <div class="dialog-title">
                        <slot name="heading"></slot>
                        <slot name="sub-heading"></slot>
                    </div>

                    <div role="radiogroup" class="themes">
                        ${this.themes.map(((e,t)=>P`
                                <div class="theme">
                                    <div class="circle-wrapper">
                                        <button
                                            @click="${()=>{this.updateThemeState(t),this.saveSelection&&ne('theme-preference',e.name),window.dispatchEvent(new X(e.name))}}"
                                            @keydown="${e=>{this.handleArrowKeys(e,t),'Enter'===e.key&&this.updateThemeState(t)}}"
                                            aria-checked="${e.checked}"
                                            class="radio inner-circle"
                                            id="${e.name}"
                                            role="radio"
                                            tabindex=${e.checked?0:-1}
                                            title="${e.name}-Theme aktivieren"
                                        ></button>
                                        <div class="outer-circle"></div>
                                    </div>

                                    <label for="${e.name}">
                                        ${e.name}
                                    </label>
                                </div>
                            `))}
                    </div>

                    <div class="save-settings">
                        <div>
                            <input
                                ?checked=${this.saveSelection}
                                @click=${()=>{if(!1===this.saveSelection){const{name:e}=this.themes.filter((e=>!0===e.checked))[0];ne('save-selection','true'),ne('theme-preference',e)}else le('save-selection'),le('theme-preference');this.saveSelection=!this.saveSelection}}
                                id="save-selection"
                                name="save-selection"
                                type="checkbox"
                            />
                            <label for="save-selection">
                                Auswahl speichern
                            </label>
                        </div>
                        <slot name="read-more"></slot>
                    </div>

                    <button
                        @click=${this.closeDialog}
                        class="dialog-control"
                        id="btn-close-dialog"
                        title="Dialog schließen"
                    >
                        <slot name="close-caption"></slot>
                    </button>
                </div>
                <div
                    @focus="${()=>{const e=this.getTabElements();this.focusElement(e,0)}}"
                    aria-hidden="true"
                    tabindex="0"
                ></div>
            </div>
        `}};ce.styles=((e,...i)=>{const r=1===e.length?e[0]:i.reduce(((t,i,o)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if('number'==typeof e)return e;throw Error('Value passed to \'css\' function must be a \'css\' function result: '+e+'. Use \'unsafeCSS\' to pass non-literal values, but take care to ensure page security.')})(i)+e[o+1]),e[0]);return new o(r,e,t)})`
        :host {
            --purple-50: #faf5ff;
            --purple-100: #f3e8ff;
            --purple-200: #e9d5ff;
            --purple-300: #d8b4fe;
            --purple-400: #c084fc;
            --purple-500: #a855f7;
            --purple-600: #9333ea;
            --purple-700: #7e22ce;
            --purple-800: #6b21a8;
            --purple-900: #581c87;
            --purple-950: #2f0050;

            --base-gap: 8px;
            --base-radius: 8px;
            --blur-amount: 5px;
            --backdrop-color: hsla(0, 0, 78%, 0.1);

            --text-color-1: var(--purple-950);
            --text-color-2: var(--purple-900);
            --outline-color: #000;

            /* Dialog */
            --dialog-bg-color: var(--purple-50);
            --dialog-border-color: var(--purple-500);
            /* Themes Wrapper */
            --themes-border-color: var(--purple-400);
            /* Radio Buttons */
            --circle-bg-color: var(--purple-100);
            --circle-bg-color-checked: var(--purple-300);
            --circle-border-color: var(--purple-500);
            /* Control elements */
            --control-color: var(--purple-300);
            --control-interaction-color: var(--purple-400);
            /* Checkbox */
            --checkbox-bg-color: var(--purple-50);
            --checkbox-bg-color-checked: var(--purple-200);
            --checkmark-color: var(--purple-900);
            --checkbox-border-color: var(--purple-500);

            font-family: var(--font-fam, sans-serif);
        }

        ::slotted(h2) {
            margin: 0;
            color: var(--text-color-1);
        }

        ::slotted(span) {
            color: var(--text-color-2);
        }

        ::slotted(#read-more) {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            padding: 4px;
            width: 30px;
            height: 30px;
            text-decoration: none;

            color: var(--text-color-1);
            transition: transform 50ms ease-in-out,
                background-color 100ms ease-in-out;
            background-color: var(--control-color);
            box-sizing: border-box;
        }

        ::slotted(a#read-more:hover),
        ::slotted(a#read-more:focus) {
            background-color: var(--control-interaction-color);
        }

        #dialog-backdrop {
            display: flex;
            align-items: center;
            justify-content: center;
            position: fixed;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            z-index: 999;
            background-color: var(
                --backdrop-color,
                hsla(260deg, 55%, 35%, 19%)
            );
            backdrop-filter: blur(var(--blur-amount, 5px));
        }

        #dialog-backdrop[aria-hidden='true'] {
            display: none;
        }
        /**
         * Dialog
         */
        #dialog-theme-selection {
            display: flex;
            flex-direction: column;
            gap: calc(var(--base-gap) * 1.5);

            position: absolute;
            left: 50%;
            top: 50%;

            z-index: 1000;

            outline: none;
            border: 3px solid var(--dialog-border-color);
            border-radius: calc(var(--base-radius) * 2);
            padding: calc(var(--base-gap) * 1.5);
            width: 250px;

            transform: translate(-50%, -50%);

            background-color: var(--dialog-bg-color);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),
                0 6px 6px rgba(0, 0, 0, 0.23);

            text-align: center;
        }

        #dialog-theme-selection[aria-hidden='true'] {
            display: none;
        }

        label {
            color: var(--text-color-1);
            cursor: pointer;
        }

        .themes {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
            gap: calc(var(--base-gap) / 2);
            border: 1px solid var(--themes-border-color);
            border-radius: var(--base-radius);
            padding: calc(var(--base-gap) / 2);
        }

        .theme {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: calc(var(--base-gap) / 4);

            border-radius: var(--base-radius);
            padding: calc(var(--base-gap) / 2);

            text-transform: capitalize;
        }

        .circle-wrapper {
            display: grid;
            place-items: center;
            grid-template-areas: 'circle';
            width: 100%;
            max-width: 45px;
            aspect-ratio: 1;
        }

        .inner-circle {
            grid-area: circle;
            z-index: 1;

            background-color: var(--circle-bg-color);
            border-color: var(--circle-border-color);
        }

        .outer-circle {
            grid-area: circle;
            z-index: 0;

            border-radius: 50%;
            width: 50%;
            aspect-ratio: 1;

            background-color: var(--circle-wave);
            opacity: 0.1;
            transition: transform 0.4s cubic-bezier(0.54, 1.5, 0.38, 1.2);
        }

        .radio {
            cursor: pointer;
            border-radius: 50%;
            width: 60%;
            aspect-ratio: 1;

            border: 2px solid var(--circle-border-color);

            transition: transform 0.4s cubic-bezier(0.54, 1.5, 0.38, 1.2);
            outline: none;
        }

        .radio:hover + .outer-circle,
        .radio:focus + .outer-circle {
            transform: scale(2);
        }

        .radio[aria-checked='true'].inner-circle {
            /* background-color: var(--surface-3); */
            /* background-color: var(--circle-checked); */
            background-color: var(--circle-bg-color-checked);
        }

        .save-settings {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: var(--base-gap);
        }

        .dialog-control {
            color: var(--text-color-1);
            transition: transform 50ms ease-in-out,
                background-color 100ms ease-in-out;
            background-color: var(--control-color);
        }

        .dialog-control:hover,
        .dialog-control:focus {
            background-color: var(--control-interaction-color);
        }

        #btn-close-dialog {
            cursor: pointer;

            border: none;
            border-radius: var(--base-radius);
            margin: 0 auto;
            padding: calc(var(--base-gap) / 2);
            width: 80%;

            text-transform: capitalize;
        }

        input[type='checkbox'] {
            position: absolute !important;
            height: 1px;
            width: 1px;
            overflow: hidden;
            clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
            clip: rect(1px, 1px, 1px, 1px);
        }

        input[type='checkbox'] + label {
            display: grid;
            align-items: center;
            gap: var(--base-gap);
            grid-template-areas: 'checkbox-cell label';
            grid-template-columns: auto 1fr;
        }

        input[type='checkbox'] + label:before {
            content: '';
            grid-area: checkbox-cell;
            border-radius: 2px;
            border: 1px solid var(--checkbox-border-color);
            width: 20px;
            height: 20px;
            background: var(--checkbox-bg-color);
        }

        input[type='checkbox']:checked + label:before {
            background: var(--checkbox-bg-color-checked);
        }

        input[type='checkbox']:checked + label::after {
            content: '';
            border-left: 2px solid var(--checkmark-color);
            border-bottom: 2px solid var(--checkmark-color);
            height: 5px;
            width: 12px;
            transform: rotate(-45deg);
            position: relative;
            left: 4px;
            grid-area: checkbox-cell;
            top: -2px;
        }

        input[type='checkbox']:focus + label::before {
            outline: var(--outline-color) solid 1px;
        }

        @media (prefers-reduced-motion: no-preference) {
            #read-more:active,
            #btn-close-dialog:active {
                transform: scale(0.95);
            }
        }
    `,re([te()],ce.prototype,'dialogHidden',void 0),re([te()],ce.prototype,'themes',void 0),re([te()],ce.prototype,'saveSelection',void 0),re([ee({type:Array})],ce.prototype,'availableThemes',void 0),re([
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function(e){return ie({descriptor:t=>({get(){var t,i;return null!==(i=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelectorAll(e))&&void 0!==i?i:[]},enumerable:!0,configurable:!0})})}('button[role="radio"]')],ce.prototype,'themeButtons',void 0),re([function(e){return ie({finisher:(t,i)=>{Object.assign(t.prototype[i],e)}})}({})],ce.prototype,'close',null),ce=re([(e=>t=>'function'==typeof t?((e,t)=>(window.customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:i,elements:o}=t;return{kind:i,elements:o,finisher(t){window.customElements.define(e,t)}}})(e,t))('theme-switch')],ce);class de extends Event{static eventName='dialog-event';targetElement='';constructor(e){super(de.eventName,{bubbles:!0}),this.targetElement=e}}document.querySelector('#btn-theme-selection').addEventListener('click',(e=>{const{target:t}=e;window.dispatchEvent(new de(t))})),window.addEventListener('theme-event',(e=>{const{themeName:t}=e;document.documentElement.setAttribute('theme-preference',t)}));const he=document.querySelector('#site-header'),pe=document.querySelector('#sentinel-element'),ue={rootMargin:`-${he.getBoundingClientRect().height}px`,treshold:1};new IntersectionObserver((e=>{e[0].isIntersecting?he.classList.remove('opaque'):he.classList.add('opaque')}),ue).observe(pe);
//# sourceMappingURL=index.js.map
