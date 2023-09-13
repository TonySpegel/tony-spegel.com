/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=window,t=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&'adoptedStyleSheets'in Document.prototype&&'replace'in CSSStyleSheet.prototype,i=Symbol(),o=new WeakMap;class r{constructor(e,t,o){if(this._$cssResult$=!0,o!==i)throw Error('CSSResult is not constructable. Use `unsafeCSS` or `css` instead.');this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const i=this.t;if(t&&void 0===e){const t=void 0!==i&&1===i.length;t&&(e=o.get(i)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&o.set(i,e))}return e}toString(){return this.cssText}}const s=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t='';for(const i of e.cssRules)t+=i.cssText;return(e=>new r('string'==typeof e?e:e+'',void 0,i))(t)})(e):e
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var n;const l=window,a=l.trustedTypes,c=a?a.emptyScript:'',d=l.reactiveElementPolyfillSupport,h={toAttribute(e,t){switch(t){case Boolean:e=e?c:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},p=(e,t)=>t!==e&&(t==t||e==e),u={attribute:!0,type:String,converter:h,reflect:!1,hasChanged:p},v='finalized';class m extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),(null!==(t=this.h)&&void 0!==t?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((t,i)=>{const o=this._$Ep(i,t);void 0!==o&&(this._$Ev.set(o,i),e.push(o))})),e}static createProperty(e,t=u){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i='symbol'==typeof e?Symbol():'__'+e,o=this.getPropertyDescriptor(e,i,t);void 0!==o&&Object.defineProperty(this.prototype,e,o)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(o){const r=this[e];this[t]=o,this.requestUpdate(e,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||u}static finalize(){if(this.hasOwnProperty(v))return!1;this[v]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),void 0!==e.h&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty('properties')){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const i of t)this.createProperty(i,e[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(s(e))}else void 0!==e&&t.push(s(e));return t}static _$Ep(e,t){const i=t.attribute;return!1===i?void 0:'string'==typeof i?i:'string'==typeof e?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(e=this.constructor.h)||void 0===e||e.forEach((e=>e(this)))}addController(e){var t,i;(null!==(t=this._$ES)&&void 0!==t?t:this._$ES=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(i=e.hostConnected)||void 0===i||i.call(e))}removeController(e){var t;null===(t=this._$ES)||void 0===t||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])}))}createRenderRoot(){var i;const o=null!==(i=this.shadowRoot)&&void 0!==i?i:this.attachShadow(this.constructor.shadowRootOptions);return((i,o)=>{t?i.adoptedStyleSheets=o.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):o.forEach((t=>{const o=document.createElement('style'),r=e.litNonce;void 0!==r&&o.setAttribute('nonce',r),o.textContent=t.cssText,i.appendChild(o)}))})(o,this.constructor.elementStyles),o}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)}))}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)}))}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t,i=u){var o;const r=this.constructor._$Ep(e,i);if(void 0!==r&&!0===i.reflect){const s=(void 0!==(null===(o=i.converter)||void 0===o?void 0:o.toAttribute)?i.converter:h).toAttribute(t,i.type);this._$El=e,null==s?this.removeAttribute(r):this.setAttribute(r,s),this._$El=null}}_$AK(e,t){var i;const o=this.constructor,r=o._$Ev.get(e);if(void 0!==r&&this._$El!==r){const e=o.getPropertyOptions(r),s='function'==typeof e.converter?{fromAttribute:e.converter}:void 0!==(null===(i=e.converter)||void 0===i?void 0:i.fromAttribute)?e.converter:h;this._$El=r,this[r]=s.fromAttribute(t,e.type),this._$El=null}}requestUpdate(e,t,i){let o=!0;void 0!==e&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||p)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===i.reflect&&this._$El!==e&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(e,i))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((e,t)=>this[t]=e)),this._$Ei=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)})),this.update(i)):this._$Ek()}catch(e){throw t=!1,this._$Ek(),e}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;null===(t=this._$ES)||void 0===t||t.forEach((e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){void 0!==this._$EC&&(this._$EC.forEach(((e,t)=>this._$EO(t,this[t],e))),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var g;m[v]=!0,m.elementProperties=new Map,m.elementStyles=[],m.shadowRootOptions={mode:'open'},null==d||d({ReactiveElement:m}),(null!==(n=l.reactiveElementVersions)&&void 0!==n?n:l.reactiveElementVersions=[]).push('1.6.3');const f=window,b=f.trustedTypes,$=b?b.createPolicy('lit-html',{createHTML:e=>e}):void 0,y='$lit$',_=`lit$${(Math.random()+'').slice(9)}$`,A='?'+_,x=`<${A}>`,E=document,k=()=>E.createComment(''),S=e=>null===e||'object'!=typeof e&&'function'!=typeof e,w=Array.isArray,C='[ \t\n\f\r]',T=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,N=/-->/g,P=/>/g,H=RegExp(`>|${C}(?:([^\\s"'>=/]+)(${C}*=${C}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,'g'),U=/'/g,O=/"/g,R=/^(?:script|style|textarea|title)$/i,M=(e=>(t,...i)=>({_$litType$:e,strings:t,values:i}))(1),z=Symbol.for('lit-noChange'),j=Symbol.for('lit-nothing'),I=new WeakMap,L=E.createTreeWalker(E,129,null,!1);function D(e,t){if(!Array.isArray(e)||!e.hasOwnProperty('raw'))throw Error('invalid template strings array');return void 0!==$?$.createHTML(t):t}const B=(e,t)=>{const i=e.length-1,o=[];let r,s=2===t?'<svg>':'',n=T;for(let t=0;t<i;t++){const i=e[t];let l,a,c=-1,d=0;for(;d<i.length&&(n.lastIndex=d,a=n.exec(i),null!==a);)d=n.lastIndex,n===T?'!--'===a[1]?n=N:void 0!==a[1]?n=P:void 0!==a[2]?(R.test(a[2])&&(r=RegExp('</'+a[2],'g')),n=H):void 0!==a[3]&&(n=H):n===H?'>'===a[0]?(n=null!=r?r:T,c=-1):void 0===a[1]?c=-2:(c=n.lastIndex-a[2].length,l=a[1],n=void 0===a[3]?H:'"'===a[3]?O:U):n===O||n===U?n=H:n===N||n===P?n=T:(n=H,r=void 0);const h=n===H&&e[t+1].startsWith('/>')?' ':'';s+=n===T?i+x:c>=0?(o.push(l),i.slice(0,c)+y+i.slice(c)+_+h):i+_+(-2===c?(o.push(void 0),t):h)}return[D(e,s+(e[i]||'<?>')+(2===t?'</svg>':'')),o]};class V{constructor({strings:e,_$litType$:t},i){let o;this.parts=[];let r=0,s=0;const n=e.length-1,l=this.parts,[a,c]=B(e,t);if(this.el=V.createElement(a,i),L.currentNode=this.el.content,2===t){const e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(o=L.nextNode())&&l.length<n;){if(1===o.nodeType){if(o.hasAttributes()){const e=[];for(const t of o.getAttributeNames())if(t.endsWith(y)||t.startsWith(_)){const i=c[s++];if(e.push(t),void 0!==i){const e=o.getAttribute(i.toLowerCase()+y).split(_),t=/([.?@])?(.*)/.exec(i);l.push({type:1,index:r,name:t[2],strings:e,ctor:'.'===t[1]?Z:'?'===t[1]?G:'@'===t[1]?Q:J})}else l.push({type:6,index:r})}for(const t of e)o.removeAttribute(t)}if(R.test(o.tagName)){const e=o.textContent.split(_),t=e.length-1;if(t>0){o.textContent=b?b.emptyScript:'';for(let i=0;i<t;i++)o.append(e[i],k()),L.nextNode(),l.push({type:2,index:++r});o.append(e[t],k())}}}else if(8===o.nodeType)if(o.data===A)l.push({type:2,index:r});else{let e=-1;for(;-1!==(e=o.data.indexOf(_,e+1));)l.push({type:7,index:r}),e+=_.length-1}r++}}static createElement(e,t){const i=E.createElement('template');return i.innerHTML=e,i}}function q(e,t,i=e,o){var r,s,n,l;if(t===z)return t;let a=void 0!==o?null===(r=i._$Co)||void 0===r?void 0:r[o]:i._$Cl;const c=S(t)?void 0:t._$litDirective$;return(null==a?void 0:a.constructor)!==c&&(null===(s=null==a?void 0:a._$AO)||void 0===s||s.call(a,!1),void 0===c?a=void 0:(a=new c(e),a._$AT(e,i,o)),void 0!==o?(null!==(n=(l=i)._$Co)&&void 0!==n?n:l._$Co=[])[o]=a:i._$Cl=a),void 0!==a&&(t=q(e,a._$AS(e,t.values),a,o)),t}class K{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:i},parts:o}=this._$AD,r=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:E).importNode(i,!0);L.currentNode=r;let s=L.nextNode(),n=0,l=0,a=o[0];for(;void 0!==a;){if(n===a.index){let t;2===a.type?t=new W(s,s.nextSibling,this,e):1===a.type?t=new a.ctor(s,a.name,a.strings,this,e):6===a.type&&(t=new X(s,this,e)),this._$AV.push(t),a=o[++l]}n!==(null==a?void 0:a.index)&&(s=L.nextNode(),n++)}return L.currentNode=E,r}v(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class W{constructor(e,t,i,o){var r;this.type=2,this._$AH=j,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=o,this._$Cp=null===(r=null==o?void 0:o.isConnected)||void 0===r||r}get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===(null==e?void 0:e.nodeType)&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=q(this,e,t),S(e)?e===j||null==e||''===e?(this._$AH!==j&&this._$AR(),this._$AH=j):e!==this._$AH&&e!==z&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):(e=>w(e)||'function'==typeof(null==e?void 0:e[Symbol.iterator]))(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==j&&S(this._$AH)?this._$AA.nextSibling.data=e:this.$(E.createTextNode(e)),this._$AH=e}g(e){var t;const{values:i,_$litType$:o}=e,r='number'==typeof o?this._$AC(e):(void 0===o.el&&(o.el=V.createElement(D(o.h,o.h[0]),this.options)),o);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===r)this._$AH.v(i);else{const e=new K(r,this),t=e.u(this.options);e.v(i),this.$(t),this._$AH=e}}_$AC(e){let t=I.get(e.strings);return void 0===t&&I.set(e.strings,t=new V(e)),t}T(e){w(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,o=0;for(const r of e)o===t.length?t.push(i=new W(this.k(k()),this.k(k()),this,this.options)):i=t[o],i._$AI(r),o++;o<t.length&&(this._$AR(i&&i._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cp=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}class J{constructor(e,t,i,o,r){this.type=1,this._$AH=j,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=r,i.length>2||''!==i[0]||''!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=j}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,o){const r=this.strings;let s=!1;if(void 0===r)e=q(this,e,t,0),s=!S(e)||e!==this._$AH&&e!==z,s&&(this._$AH=e);else{const o=e;let n,l;for(e=r[0],n=0;n<r.length-1;n++)l=q(this,o[i+n],t,n),l===z&&(l=this._$AH[n]),s||(s=!S(l)||l!==this._$AH[n]),l===j?e=j:e!==j&&(e+=(null!=l?l:'')+r[n+1]),this._$AH[n]=l}s&&!o&&this.j(e)}j(e){e===j?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:'')}}class Z extends J{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===j?void 0:e}}const F=b?b.emptyScript:'';class G extends J{constructor(){super(...arguments),this.type=4}j(e){e&&e!==j?this.element.setAttribute(this.name,F):this.element.removeAttribute(this.name)}}class Q extends J{constructor(e,t,i,o,r){super(e,t,i,o,r),this.type=5}_$AI(e,t=this){var i;if((e=null!==(i=q(this,e,t,0))&&void 0!==i?i:j)===z)return;const o=this._$AH,r=e===j&&o!==j||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,s=e!==j&&(o===j||r);r&&this.element.removeEventListener(this.name,this,o),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;'function'==typeof this._$AH?this._$AH.call(null!==(i=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==i?i:this.element,e):this._$AH.handleEvent(e)}}class X{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){q(this,e)}}const Y=f.litHtmlPolyfillSupport;null==Y||Y(V,W),(null!==(g=f.litHtmlVersions)&&void 0!==g?g:f.litHtmlVersions=[]).push('2.8.0');
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var ee,te;class ie extends m{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{var o,r;const s=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:t;let n=s._$litPart$;if(void 0===n){const e=null!==(r=null==i?void 0:i.renderBefore)&&void 0!==r?r:null;s._$litPart$=n=new W(t.insertBefore(k(),e),e,void 0,null!=i?i:{})}return n._$AI(e),n})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!1)}render(){return z}}ie.finalized=!0,ie._$litElement$=!0,null===(ee=globalThis.litElementHydrateSupport)||void 0===ee||ee.call(globalThis,{LitElement:ie});const oe=globalThis.litElementPolyfillSupport;null==oe||oe({LitElement:ie}),(null!==(te=globalThis.litElementVersions)&&void 0!==te?te:globalThis.litElementVersions=[]).push('3.3.3');class re extends Event{constructor(e){super(re.eventName,{bubbles:!0}),this.targetElement=e}}re.eventName='dialog-event';class se extends Event{constructor(e){super(se.eventName,{bubbles:!0}),this.themeName='',this.themeName=e}}se.eventName='theme-event';
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ne=(e,t)=>'method'===t.kind&&t.descriptor&&!('value'in t.descriptor)?{...t,finisher(i){i.createProperty(t.key,e)}}:{kind:'field',key:Symbol(),placement:'own',descriptor:{},originalKey:t.key,initializer(){'function'==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(i){i.createProperty(t.key,e)}},le=(e,t,i)=>{t.constructor.createProperty(i,e)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ae(e){return(t,i)=>void 0!==i?le(e,t,i):ne(e,t)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function ce(e){return ae({...e,state:!0})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const de=({finisher:e,descriptor:t})=>(i,o)=>{var r;if(void 0===o){const o=null!==(r=i.originalKey)&&void 0!==r?r:i.key,s=null!=t?{kind:'method',placement:'prototype',key:o,descriptor:t(i.key)}:{...i,key:o};return null!=e&&(s.finisher=function(t){e(t,o)}),s}{const r=i.constructor;void 0!==t&&Object.defineProperty(i,o,t(o)),null==e||e(r,o)}}
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
var he;null===(he=window.HTMLSlotElement)||void 0===he||he.prototype.assignedElements;var pe=function(e,t,i,o){var r,s=arguments.length,n=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if('object'==typeof Reflect&&'function'==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(n=(s<3?r(n):s>3?r(t,i,n):r(t,i))||n);return s>3&&n&&Object.defineProperty(t,i,n),n};const ue=e=>localStorage.getItem(e),ve=(e,t)=>{localStorage.setItem(e,t)},me=e=>{localStorage.removeItem(e)},ge=[{name:'auto',checked:!0},{name:'light',checked:!1},{name:'dark',checked:!1}];let fe=class extends ie{constructor(){super(...arguments),this.dialogHidden=!0,this.themes=[],this.saveSelection=!1,this.availableThemes=[],this.lastIndex=this.themes.length-1}connectedCallback(){super.connectedCallback(),addEventListener(re.eventName,(async e=>{const{targetElement:t}=e,{id:i}=t;this.openerElementId=i,this.dialogHidden=!1,await this.updateComplete,this.getTabElements()[0].focus()}));const e=ue('theme-preference'),t=ue('save-selection');try{this.saveSelection=JSON.parse(t||'')}catch(e){this.saveSelection=!1}Array.isArray(this.availableThemes)&&this.availableThemes.length?this.themes=this.availableThemes.map(((e,t)=>({name:e,checked:0===t}))):this.themes=ge;const i=this.themes.findIndex((t=>t.name===e));this.updateThemeState(-1===i?0:i),this.lastIndex=this.themes.length-1}disconnectedCallback(){super.disconnectedCallback(),removeEventListener(re.eventName,(()=>{console.info(`${re.eventName} has been removed as an EventListener`)}))}updateThemeState(e){const t=[...this.themes];t.forEach((e=>e.checked=!1)),t[e].checked=!0,this.themes=t}closeDialog(){var e;this.dialogHidden=!0,null===(e=document.querySelector(`#${this.openerElementId}`))||void 0===e||e.focus()}handleArrowKeys(e,t){switch(e.key){case'ArrowLeft':case'ArrowUp':0!==t?this.focusElement(this.themeButtons,t-1):this.focusElement(this.themeButtons,this.lastIndex);break;case'ArrowRight':case'ArrowDown':t!==this.lastIndex?this.focusElement(this.themeButtons,t+1):this.focusElement(this.themeButtons,0)}}getTabElements(){return this.renderRoot.querySelectorAll('a[href], input, button:not([tabindex="-1"])')}focusElement(e,t){e[t].focus()}close(){}render(){return M`<div aria-hidden="true" tabindex="0" @focus="${()=>{const e=this.getTabElements(),t=e.length-1;this.focusElement(e,t)}}"></div><div @click="${e=>{const{id:t}=e.target;'dialog-backdrop'===t&&this.closeDialog()}}" aria-hidden="${this.dialogHidden}" id="dialog-backdrop"><div @keydown="${e=>{'Escape'===e.key&&this.closeDialog()}}" aria-hidden="${this.dialogHidden}" aria-label="Theme-Selection" aria-modal="true" id="dialog-theme-selection" role="dialog" tabindex="-1"><div class="dialog-title"><slot name="heading"></slot><slot name="sub-heading"></slot></div><div role="radiogroup" class="themes">${this.themes.map(((e,t)=>M`<div class="theme"><div class="circle-wrapper"><button @click="${()=>{this.updateThemeState(t),this.saveSelection&&ve('theme-preference',e.name),window.dispatchEvent(new se(e.name))}}" @keydown="${e=>{this.handleArrowKeys(e,t),'Enter'===e.key&&this.updateThemeState(t)}}" aria-checked="${e.checked}" class="radio inner-circle" id="${e.name}" role="radio" tabindex="${e.checked?0:-1}" title="${e.name}-Theme aktivieren"></button><div class="outer-circle"></div></div><label for="${e.name}">${e.name}</label></div>`))}</div><div class="save-settings"><div><input ?checked="${this.saveSelection}" @click="${()=>{if(!1===this.saveSelection){const{name:e}=this.themes.filter((e=>!0===e.checked))[0];ve('save-selection','true'),ve('theme-preference',e)}else me('save-selection'),me('theme-preference');this.saveSelection=!this.saveSelection}}" id="save-selection" name="save-selection" type="checkbox"> <label for="save-selection">Auswahl speichern</label></div><slot name="read-more"></slot></div><button @click="${this.closeDialog}" class="dialog-control" id="btn-close-dialog" title="Dialog schließen"><slot name="close-caption"></slot></button></div><div @focus="${()=>{const e=this.getTabElements();this.focusElement(e,0)}}" aria-hidden="true" tabindex="0"></div></div>`}};fe.styles=((e,...t)=>{const o=1===e.length?e[0]:t.reduce(((t,i,o)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if('number'==typeof e)return e;throw Error('Value passed to \'css\' function must be a \'css\' function result: '+e+'. Use \'unsafeCSS\' to pass non-literal values, but take care to ensure page security.')})(i)+e[o+1]),e[0]);return new r(o,e,i)})`:host{--purple-50:#faf5ff;--purple-100:#f3e8ff;--purple-200:#e9d5ff;--purple-300:#d8b4fe;--purple-400:#c084fc;--purple-500:#a855f7;--purple-600:#9333ea;--purple-700:#7e22ce;--purple-800:#6b21a8;--purple-900:#581c87;--purple-950:#2f0050;--base-gap:8px;--base-radius:8px;--blur-amount:5px;--backdrop-color:hsla(0, 0, 78%, 0.1);--text-color-1:var(--purple-950);--text-color-2:var(--purple-900);--outline-color:#000;--dialog-bg-color:var(--purple-50);--dialog-border-color:var(--purple-500);--themes-border-color:var(--purple-400);--circle-bg-color:var(--purple-100);--circle-bg-color-checked:var(--purple-300);--circle-border-color:var(--purple-500);--control-color:var(--purple-300);--control-interaction-color:var(--purple-400);--checkbox-bg-color:var(--purple-50);--checkbox-bg-color-checked:var(--purple-200);--checkmark-color:var(--purple-900);--checkbox-border-color:var(--purple-500);font-family:var(--font-fam,sans-serif)}::slotted(h2){margin:0;color:var(--text-color-1)}::slotted(span){color:var(--text-color-2)}::slotted(#read-more){display:inline-flex;align-items:center;justify-content:center;border-radius:50%;padding:4px;width:30px;height:30px;text-decoration:none;color:var(--text-color-1);transition:transform 50ms ease-in-out,background-color .1s ease-in-out;background-color:var(--control-color);box-sizing:border-box}::slotted(a#read-more:focus),::slotted(a#read-more:hover){background-color:var(--control-interaction-color)}#dialog-backdrop{display:flex;align-items:center;justify-content:center;position:fixed;left:0;top:0;width:100%;height:100%;z-index:999;background-color:var(--backdrop-color,hsla(260deg,55%,35%,19%));backdrop-filter:blur(var(--blur-amount, 5px))}#dialog-backdrop[aria-hidden=true]{display:none}#dialog-theme-selection{display:flex;flex-direction:column;gap:calc(var(--base-gap) * 1.5);position:absolute;left:50%;top:50%;z-index:1000;outline:0;border:3px solid var(--dialog-border-color);border-radius:calc(var(--base-radius) * 2);padding:calc(var(--base-gap) * 1.5);width:250px;transform:translate(-50%,-50%);background-color:var(--dialog-bg-color);box-shadow:0 10px 20px rgba(0,0,0,.19),0 6px 6px rgba(0,0,0,.23);text-align:center}#dialog-theme-selection[aria-hidden=true]{display:none}label{color:var(--text-color-1);cursor:pointer}.themes{display:grid;grid-template-columns:repeat(auto-fit,minmax(50px,1fr));gap:calc(var(--base-gap)/ 2);border:1px solid var(--themes-border-color);border-radius:var(--base-radius);padding:calc(var(--base-gap)/ 2)}.theme{display:flex;flex-direction:column;align-items:center;gap:calc(var(--base-gap)/ 4);border-radius:var(--base-radius);padding:calc(var(--base-gap)/ 2);text-transform:capitalize}.circle-wrapper{display:grid;place-items:center;grid-template-areas:'circle';width:100%;max-width:45px;aspect-ratio:1}.inner-circle{grid-area:circle;z-index:1;background-color:var(--circle-bg-color);border-color:var(--circle-border-color)}.outer-circle{grid-area:circle;z-index:0;border-radius:50%;width:50%;aspect-ratio:1;background-color:var(--circle-wave);opacity:.1;transition:transform .4s cubic-bezier(.54,1.5,.38,1.2)}.radio{cursor:pointer;border-radius:50%;width:60%;aspect-ratio:1;border:2px solid var(--circle-border-color);transition:transform .4s cubic-bezier(.54,1.5,.38,1.2);outline:0}.radio:focus+.outer-circle,.radio:hover+.outer-circle{transform:scale(2)}.radio[aria-checked=true].inner-circle{background-color:var(--circle-bg-color-checked)}.save-settings{display:flex;align-items:center;justify-content:center;gap:var(--base-gap)}.dialog-control{color:var(--text-color-1);transition:transform 50ms ease-in-out,background-color .1s ease-in-out;background-color:var(--control-color)}.dialog-control:focus,.dialog-control:hover{background-color:var(--control-interaction-color)}#btn-close-dialog{cursor:pointer;border:none;border-radius:var(--base-radius);margin:0 auto;padding:calc(var(--base-gap)/ 2);width:80%;text-transform:capitalize}input[type=checkbox]{position:absolute!important;height:1px;width:1px;overflow:hidden;clip:rect(1px 1px 1px 1px);clip:rect(1px,1px,1px,1px)}input[type=checkbox]+label{display:grid;align-items:center;gap:var(--base-gap);grid-template-areas:'checkbox-cell label';grid-template-columns:auto 1fr}input[type=checkbox]+label:before{content:'';grid-area:checkbox-cell;border-radius:2px;border:1px solid var(--checkbox-border-color);width:20px;height:20px;background:var(--checkbox-bg-color)}input[type=checkbox]:checked+label:before{background:var(--checkbox-bg-color-checked)}input[type=checkbox]:checked+label::after{content:'';border-left:2px solid var(--checkmark-color);border-bottom:2px solid var(--checkmark-color);height:5px;width:12px;transform:rotate(-45deg);position:relative;left:4px;grid-area:checkbox-cell;top:-2px}input[type=checkbox]:focus+label::before{outline:var(--outline-color) solid 1px}@media (prefers-reduced-motion:no-preference){#btn-close-dialog:active,#read-more:active{transform:scale(.95)}}`,pe([ce()],fe.prototype,'dialogHidden',void 0),pe([ce()],fe.prototype,'themes',void 0),pe([ce()],fe.prototype,'saveSelection',void 0),pe([ae({type:Array})],fe.prototype,'availableThemes',void 0),pe([
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function(e){return de({descriptor:t=>({get(){var t,i;return null!==(i=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelectorAll(e))&&void 0!==i?i:[]},enumerable:!0,configurable:!0})})}('button[role="radio"]')],fe.prototype,'themeButtons',void 0),pe([function(e){return de({finisher:(t,i)=>{Object.assign(t.prototype[i],e)}})}({})],fe.prototype,'close',null),fe=pe([(e=>t=>'function'==typeof t?((e,t)=>(customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:i,elements:o}=t;return{kind:i,elements:o,finisher(t){customElements.define(e,t)}}})(e,t))('theme-switch')],fe);class be extends Event{static eventName='dialog-event';targetElement='';constructor(e){super(be.eventName,{bubbles:!0}),this.targetElement=e}}document.querySelector('#btn-theme-selection').addEventListener('click',(e=>{const{target:t}=e;window.dispatchEvent(new be(t))})),window.addEventListener('theme-event',(e=>{const{themeName:t}=e;document.documentElement.setAttribute('theme-preference',t)}));
//# sourceMappingURL=theme-switch.js.map
