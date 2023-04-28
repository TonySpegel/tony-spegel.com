function t(t,e,i,s){var r,o=arguments.length,n=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if('object'==typeof Reflect&&'function'==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var e;const i=window,s=i.trustedTypes,r=s?s.createPolicy('lit-html',{createHTML:t=>t}):void 0,o='$lit$',n=`lit$${(Math.random()+'').slice(9)}$`,l='?'+n,a=`<${l}>`,d=document,h=()=>d.createComment(''),c=t=>null===t||'object'!=typeof t&&'function'!=typeof t,u=Array.isArray,p='[ \t\n\f\r]',v=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,m=/-->/g,f=/>/g,$=RegExp(`>|${p}(?:([^\\s"'>=/]+)(${p}*=${p}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,'g'),g=/'/g,b=/"/g,y=/^(?:script|style|textarea|title)$/i,_=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),A=Symbol.for('lit-noChange'),w=Symbol.for('lit-nothing'),E=new WeakMap,S=d.createTreeWalker(d,129,null,!1),C=(t,e)=>{const i=t.length-1,s=[];let l,d=2===e?'<svg>':'',h=v;for(let e=0;e<i;e++){const i=t[e];let r,c,u=-1,p=0;for(;p<i.length&&(h.lastIndex=p,c=h.exec(i),null!==c);)p=h.lastIndex,h===v?'!--'===c[1]?h=m:void 0!==c[1]?h=f:void 0!==c[2]?(y.test(c[2])&&(l=RegExp('</'+c[2],'g')),h=$):void 0!==c[3]&&(h=$):h===$?'>'===c[0]?(h=null!=l?l:v,u=-1):void 0===c[1]?u=-2:(u=h.lastIndex-c[2].length,r=c[1],h=void 0===c[3]?$:'"'===c[3]?b:g):h===b||h===g?h=$:h===m||h===f?h=v:(h=$,l=void 0);const _=h===$&&t[e+1].startsWith('/>')?' ':'';d+=h===v?i+a:u>=0?(s.push(r),i.slice(0,u)+o+i.slice(u)+n+_):i+n+(-2===u?(s.push(void 0),e):_)}const c=d+(t[i]||'<?>')+(2===e?'</svg>':'');if(!Array.isArray(t)||!t.hasOwnProperty('raw'))throw Error('invalid template strings array');return[void 0!==r?r.createHTML(c):c,s]};class P{constructor({strings:t,_$litType$:e},i){let r;this.parts=[];let a=0,d=0;const c=t.length-1,u=this.parts,[p,v]=C(t,e);if(this.el=P.createElement(p,i),S.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(r=S.nextNode())&&u.length<c;){if(1===r.nodeType){if(r.hasAttributes()){const t=[];for(const e of r.getAttributeNames())if(e.endsWith(o)||e.startsWith(n)){const i=v[d++];if(t.push(e),void 0!==i){const t=r.getAttribute(i.toLowerCase()+o).split(n),e=/([.?@])?(.*)/.exec(i);u.push({type:1,index:a,name:e[2],strings:t,ctor:'.'===e[1]?U:'?'===e[1]?N:'@'===e[1]?T:R})}else u.push({type:6,index:a})}for(const e of t)r.removeAttribute(e)}if(y.test(r.tagName)){const t=r.textContent.split(n),e=t.length-1;if(e>0){r.textContent=s?s.emptyScript:'';for(let i=0;i<e;i++)r.append(t[i],h()),S.nextNode(),u.push({type:2,index:++a});r.append(t[e],h())}}}else if(8===r.nodeType)if(r.data===l)u.push({type:2,index:a});else{let t=-1;for(;-1!==(t=r.data.indexOf(n,t+1));)u.push({type:7,index:a}),t+=n.length-1}a++}}static createElement(t,e){const i=d.createElement('template');return i.innerHTML=t,i}}function x(t,e,i=t,s){var r,o,n,l;if(e===A)return e;let a=void 0!==s?null===(r=i._$Co)||void 0===r?void 0:r[s]:i._$Cl;const d=c(e)?void 0:e._$litDirective$;return(null==a?void 0:a.constructor)!==d&&(null===(o=null==a?void 0:a._$AO)||void 0===o||o.call(a,!1),void 0===d?a=void 0:(a=new d(t),a._$AT(t,i,s)),void 0!==s?(null!==(n=(l=i)._$Co)&&void 0!==n?n:l._$Co=[])[s]=a:i._$Cl=a),void 0!==a&&(e=x(t,a._$AS(t,e.values),a,s)),e}class k{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:s}=this._$AD,r=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:d).importNode(i,!0);S.currentNode=r;let o=S.nextNode(),n=0,l=0,a=s[0];for(;void 0!==a;){if(n===a.index){let e;2===a.type?e=new H(o,o.nextSibling,this,t):1===a.type?e=new a.ctor(o,a.name,a.strings,this,t):6===a.type&&(e=new L(o,this,t)),this._$AV.push(e),a=s[++l]}n!==(null==a?void 0:a.index)&&(o=S.nextNode(),n++)}return r}v(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class H{constructor(t,e,i,s){var r;this.type=2,this._$AH=w,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cp=null===(r=null==s?void 0:s.isConnected)||void 0===r||r}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=x(this,t,e),c(t)?t===w||null==t||''===t?(this._$AH!==w&&this._$AR(),this._$AH=w):t!==this._$AH&&t!==A&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>u(t)||'function'==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==w&&c(this._$AH)?this._$AA.nextSibling.data=t:this.$(d.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:s}=t,r='number'==typeof s?this._$AC(t):(void 0===s.el&&(s.el=P.createElement(s.h,this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===r)this._$AH.v(i);else{const t=new k(r,this),e=t.u(this.options);t.v(i),this.$(e),this._$AH=t}}_$AC(t){let e=E.get(t.strings);return void 0===e&&E.set(t.strings,e=new P(t)),e}T(t){u(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const r of t)s===e.length?e.push(i=new H(this.k(h()),this.k(h()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class R{constructor(t,e,i,s,r){this.type=1,this._$AH=w,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||''!==i[0]||''!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=w}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const r=this.strings;let o=!1;if(void 0===r)t=x(this,t,e,0),o=!c(t)||t!==this._$AH&&t!==A,o&&(this._$AH=t);else{const s=t;let n,l;for(t=r[0],n=0;n<r.length-1;n++)l=x(this,s[i+n],e,n),l===A&&(l=this._$AH[n]),o||(o=!c(l)||l!==this._$AH[n]),l===w?t=w:t!==w&&(t+=(null!=l?l:'')+r[n+1]),this._$AH[n]=l}o&&!s&&this.j(t)}j(t){t===w?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:'')}}class U extends R{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===w?void 0:t}}const O=s?s.emptyScript:'';class N extends R{constructor(){super(...arguments),this.type=4}j(t){t&&t!==w?this.element.setAttribute(this.name,O):this.element.removeAttribute(this.name)}}class T extends R{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=x(this,t,e,0))&&void 0!==i?i:w)===A)return;const s=this._$AH,r=t===w&&s!==w||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==w&&(s===w||r);r&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;'function'==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class L{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){x(this,t)}}const M=i.litHtmlPolyfillSupport;null==M||M(P,H),(null!==(e=i.litHtmlVersions)&&void 0!==e?e:i.litHtmlVersions=[]).push('2.7.3');const z=1;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class D{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const j=(t=>(...e)=>({_$litDirective$:t,values:e}))(class extends D{constructor(t){var e;if(super(t),t.type!==z||'class'!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error('`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.')}render(t){return' '+Object.keys(t).filter((e=>t[e])).join(' ')+' '}update(t,[e]){var i,s;if(void 0===this.it){this.it=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(' ').split(/\s/).filter((t=>''!==t))));for(const t in e)e[t]&&!(null===(i=this.nt)||void 0===i?void 0:i.has(t))&&this.it.add(t);return this.render(e)}const r=t.element.classList;this.it.forEach((t=>{t in e||(r.remove(t),this.it.delete(t))}));for(const t in e){const i=!!e[t];i===this.it.has(t)||(null===(s=this.nt)||void 0===s?void 0:s.has(t))||(i?(r.add(t),this.it.add(t)):(r.remove(t),this.it.delete(t)))}return A}}),B=window,I=B.ShadowRoot&&(void 0===B.ShadyCSS||B.ShadyCSS.nativeShadow)&&'adoptedStyleSheets'in Document.prototype&&'replace'in CSSStyleSheet.prototype,V=Symbol(),q=new WeakMap;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class K{constructor(t,e,i){if(this._$cssResult$=!0,i!==V)throw Error('CSSResult is not constructable. Use `unsafeCSS` or `css` instead.');this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(I&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=q.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&q.set(e,t))}return t}toString(){return this.cssText}}const W=I?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e='';for(const i of t.cssRules)e+=i.cssText;return(t=>new K('string'==typeof t?t:t+'',void 0,V))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var X;const F=window,J=F.trustedTypes,Z=J?J.emptyScript:'',G=F.reactiveElementPolyfillSupport,Q={toAttribute(t,e){switch(e){case Boolean:t=t?Z:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},Y=(t,e)=>e!==t&&(e==e||t==t),tt={attribute:!0,type:String,converter:Q,reflect:!1,hasChanged:Y};class et extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this._$Ep(i,e);void 0!==s&&(this._$Ev.set(s,i),t.push(s))})),t}static createProperty(t,e=tt){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i='symbol'==typeof t?Symbol():'__'+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const r=this[t];this[e]=s,this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||tt}static finalize(){if(this.hasOwnProperty('finalized'))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty('properties')){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(W(t))}else void 0!==t&&e.push(W(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:'string'==typeof i?i:'string'==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{I?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{const i=document.createElement('style'),s=B.litNonce;void 0!==s&&i.setAttribute('nonce',s),i.textContent=e.cssText,t.appendChild(i)}))})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=tt){var s;const r=this.constructor._$Ep(t,i);if(void 0!==r&&!0===i.reflect){const o=(void 0!==(null===(s=i.converter)||void 0===s?void 0:s.toAttribute)?i.converter:Q).toAttribute(e,i.type);this._$El=t,null==o?this.removeAttribute(r):this.setAttribute(r,o),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,r=s._$Ev.get(t);if(void 0!==r&&this._$El!==r){const t=s.getPropertyOptions(r),o='function'==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:Q;this._$El=r,this[r]=o.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||Y)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var it,st;et.finalized=!0,et.elementProperties=new Map,et.elementStyles=[],et.shadowRootOptions={mode:'open'},null==G||G({ReactiveElement:et}),(null!==(X=F.reactiveElementVersions)&&void 0!==X?X:F.reactiveElementVersions=[]).push('1.6.1');class rt extends et{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{var s,r;const o=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let n=o._$litPart$;if(void 0===n){const t=null!==(r=null==i?void 0:i.renderBefore)&&void 0!==r?r:null;o._$litPart$=n=new H(e.insertBefore(h(),t),t,void 0,null!=i?i:{})}return n._$AI(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return A}}rt.finalized=!0,rt._$litElement$=!0,null===(it=globalThis.litElementHydrateSupport)||void 0===it||it.call(globalThis,{LitElement:rt});const ot=globalThis.litElementPolyfillSupport;null==ot||ot({LitElement:rt}),(null!==(st=globalThis.litElementVersions)&&void 0!==st?st:globalThis.litElementVersions=[]).push('3.3.2');
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const nt=(t,e)=>'method'===e.kind&&e.descriptor&&!('value'in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:'field',key:Symbol(),placement:'own',descriptor:{},originalKey:e.key,initializer(){'function'==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function lt(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):nt(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function at(t){return lt({...t,state:!0})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var dt;null===(dt=window.HTMLSlotElement)||void 0===dt||dt.prototype.assignedElements;class ht extends Event{constructor(t){super(ht.eventName,{bubbles:!0,cancelable:!1,composed:!0}),this.targetElement=t}}ht.eventName='drag-event';class ct extends Event{constructor(t,e){super(ct.eventName,{bubbles:!0,cancelable:!1,composed:!0}),this.pressed=!1,this.targetElement=t,this.pressed=e}}ct.eventName='press-event';var ut=((t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if('number'==typeof t)return t;throw Error('Value passed to \'css\' function must be a \'css\' function result: '+t+'. Use \'unsafeCSS\' to pass non-literal values, but take care to ensure page security.')})(i)+t[s+1]),t[0]);return new K(i,t,V)})`:host{--base-gap:16px;--base-radius:8px;--slider-color:#fff;--slider-color-active:#fff;--overlay-focus-color:initial;--overlay-focus-offset:calc(var(--base-gap) / 2);--split-gap:var(--base-gap);--split-column-min-width:100px;--split-column-max-width:1fr;--thumb-size:40px;--thumb-border-width:3px;--thumb-bar-width:var(--thumb-border-width);--label-background-color:#fff;--label-color:#000;--label-radius:var(--base-radius);display:block;box-sizing:border-box}#image-container{display:grid;grid-template-areas:'images';position:relative;overflow:hidden}::slotted([slot^=label-]){grid-area:images;z-index:4;margin:calc(var(--base-gap)/ 2);border-radius:var(--label-radius);padding:calc(var(--base-gap)/ 4) calc(var(--base-gap)/ 2);line-height:1;opacity:0;transition:opacity .3s ease-out;background-color:var(--label-background-color);color:var(--label-color)}::slotted([slot^=image-]){max-inline-size:100%}:host(:is([variant=slider],[variant=overlay])) ::slotted([slot^=label-]){align-self:flex-end}:host([variant=slider]) #image-container:is(:hover,:focus-within,.sliding-active) ::slotted([slot^=label-]){opacity:1}:host([variant=slider]) ::slotted([slot=label-before]){justify-self:flex-start}:host([variant=slider]) ::slotted([slot=label-after]){justify-self:flex-end}#image-container.rtl button{transform:translateX(50%)}#container-after{will-change:clip;z-index:2;pointer-events:none;overflow:hidden}#container-after,#container-before{grid-area:images}button{position:relative;z-index:3;border:var(--thumb-border-width) solid var(--slider-color);border-radius:50%;width:var(--thumb-size);transform:translateX(-50%);aspect-ratio:1;align-self:center;grid-area:images;cursor:col-resize;background-color:transparent}button:is(:focus, :hover){border-color:var(--slider-color-active)}button:is(:focus,:hover):after,button:is(:focus,:hover):before{background-color:var(--slider-color-active)}button:after,button:before{content:'';width:var(--thumb-bar-width);left:calc(50% - calc(var(--thumb-bar-width)/ 2));background-color:var(--slider-color);position:absolute;height:100vh;z-index:-1}button:before{bottom:calc(50% + calc(var(--thumb-size)/ 2) - calc(var(--thumb-border-width)/ 2))}button:after{top:calc(var(--thumb-size) - var(--thumb-border-width))}:host([variant=overlay]){cursor:pointer}:host([variant=overlay]) #image-container{outline-color:var(--overlay-focus-color);outline-offset:var(--overlay-focus-offset)}:host([variant=overlay]) ::slotted(img),:host([variant=overlay]) ::slotted(picture){grid-area:images}#image-container.pressed ::slotted([slot=image-after]){order:1}:host([variant=overlay]) #image-container:hover ::slotted([slot=label-before]){opacity:1}#image-container.pressed ::slotted([slot=label-before]){opacity:0}#image-container.pressed ::slotted([slot=label-after]){opacity:1}:host([variant=overlay]) #image-container.pressed:hover ::slotted([slot=label-before]){opacity:0}:host([variant=overlay]) ::slotted([slot^=label-]){justify-self:center}:host([variant=split]) #image-container{gap:var(--split-gap);grid-template-columns:repeat(auto-fit,minmax(var(--split-column-min-width),var(--split-column-max-width)))}:host([variant=split]) .container-split-column{display:flex;flex-direction:column}:host([variant=split]) ::slotted([slot^=label-]){opacity:1}`;const pt=(t,e,i)=>Math.min(Math.max(t,e),i),vt=0,mt=1;class ft extends rt{constructor(){super(...arguments),this.variant='slider',this.overlayPrompt='Tap and hold to compare',this.sliderPrompt='Move the slider to compare',this.sliderPosition=50,this.sliderSteps=5,this.slidingActive=!1,this.isRtl=!1,this.pressed=!1,this.slideCompare=t=>{if(this.slidingActive){let e=this.convertCursorToSliderPosition(t);e=this.isRtl?100-e:e,this.sliderPosition=e}},this.slideCompareHandler=t=>{this.slideCompare(t)},this.slideEndHandler=()=>{this.setSlidingState(!1),window.dispatchEvent(new ht(this))},this.readingDirectionHandler=t=>{for(const e of t)if('dir'===e.attributeName){const{dir:t}=e.target;this.isRtl='rtl'===t}},this.keyboardOverlayHandler=t=>{const{key:e,code:i}=t;'Space'===i&&t.preventDefault(),'Space'!==i&&'Enter'!==e||(this.pressed=!0)},this.keyboardSliderHandler=t=>{const{code:e,key:i,ctrlKey:s,metaKey:r,shiftKey:o}=t,{isRtl:n}=this,l=!n,a=o?this.sliderSteps:1;let d=this.sliderPosition;'Space'!==e&&'Home'!==i&&'End'!==i||t.preventDefault(),('ArrowLeft'===i&&l||'ArrowRight'===i&&n)&&(t.preventDefault(),d-=a),('ArrowRight'===i&&l||'ArrowLeft'===i&&n)&&(t.preventDefault(),d+=a),('Home'===i||(r||s)&&'ArrowLeft'===i)&&(d=0),('End'===i||(r||s)&&'ArrowRight'===i)&&(d=100),'Enter'===i&&(d=50),this.sliderPosition=pt(d,0,100)}}setPressed(t){this.pressed=t,window.dispatchEvent(new ct(this,t))}convertCursorToSliderPosition(t){const{left:e,width:i}=this.imageContainer.getBoundingClientRect(),{scrollX:s}=window,r=t instanceof MouseEvent?t.pageX:t.changedTouches[0].pageX;return parseFloat(pt((r-(e+s))/i*100,0,100).toFixed(2))}setSlidingState(t){this.slidingActive=t}addSliderEventListener(){'slider'===this.variant&&(window.addEventListener('mousemove',this.slideCompareHandler),window.addEventListener('touchmove',this.slideCompareHandler),window.addEventListener('mouseup',this.slideEndHandler),window.addEventListener('touchend',this.slideEndHandler))}removeSliderEventListener(){window.removeEventListener('mousemove',this.slideCompareHandler),window.removeEventListener('touchmove',this.slideCompareHandler),window.removeEventListener('mouseup',this.slideEndHandler),window.removeEventListener('touchend',this.slideEndHandler)}attributeChangedCallback(t='variant',e,i){super.attributeChangedCallback(t,e,i),'variant'===t&&i!==e&&'slider'===i&&this.addSliderEventListener(),'variant'===t&&i!==e&&'overlay'===i&&this.removeSliderEventListener()}connectedCallback(){var t;super.connectedCallback(),this.addSliderEventListener(),this.readingDirectionObserver=new MutationObserver(this.readingDirectionHandler),this.readingDirectionObserver.observe(null===(t=this.ownerDocument)||void 0===t?void 0:t.querySelector('html'),{attributes:!0})}disconnectedCallback(){super.disconnectedCallback(),this.removeSliderEventListener(),this.readingDirectionObserver.disconnect()}render(){const t=_`<div @mousedown="${t=>{const{button:e}=t;e!==vt&&e!==mt||(this.setSlidingState(!0),this.slideCompareHandler(t))}}" id="image-container" class="${j({'sliding-active':this.slidingActive,rtl:this.isRtl})}"><slot name="label-before"></slot><slot name="label-after"></slot><div id="container-before"><slot name="image-before"></slot></div><div id="container-after" style="${this.isRtl?`clip-path: inset(0 ${this.sliderPosition}% 0 0)`:`clip-path: inset(0 0 0 ${this.sliderPosition}%)`}"><slot name="image-after"></slot></div><button @keydown="${this.keyboardSliderHandler}" @keyup="${()=>this.setSlidingState(!1)}" @mousedown="${()=>{this.setSlidingState(!0)}}" @mousemove="${t=>this.slideCompareHandler(t)}" @touchstart="${t=>{t.preventDefault(),this.setSlidingState(!0)}}" @touchmove="${t=>this.slideCompareHandler(t)}" @dblclick="${()=>{this.sliderPosition=50}}" style="${`left: ${this.isRtl?-this.sliderPosition:this.sliderPosition}%`}" title="${this.sliderPrompt}" aria-controls="image-container" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${this.sliderPosition}"></button></div>`,e=_`<div @keydown="${this.keyboardOverlayHandler}" @keyup="${()=>{this.setPressed(!1)}}" @mousedown="${()=>{this.setPressed(!0)}}" @mouseup="${()=>{this.setPressed(!1)}}" @mouseleave="${()=>{this.setPressed(!1)}}" @touchstart="${t=>{t.preventDefault(),this.setPressed(!0)}}" @touchend="${t=>{t.preventDefault(),this.setPressed(!1)}}" tabindex="0" title="${this.overlayPrompt}" id="image-container" class="${this.pressed?'pressed':''}"><slot name="label-before"></slot><slot name="label-after"></slot><slot name="image-after"></slot><slot name="image-before"></slot></div><slot name="prompt"></slot>`,i=_`<div id="image-container"><div class="container-split-column"><slot name="image-before"></slot><slot name="label-before"></slot></div><div class="container-split-column"><slot name="image-after"></slot><slot name="label-after"></slot></div></div>`;return _`${((t,e,i)=>{for(const i of e)if(i[0]===t)return(0,i[1])();return null==i?void 0:i()})(this.variant,[['slider',()=>t],['overlay',()=>e],['split',()=>i]])}`}}ft.styles=ut,t([lt({type:String})],ft.prototype,'variant',void 0),t([lt({type:String})],ft.prototype,'overlayPrompt',void 0),t([lt({type:String})],ft.prototype,'sliderPrompt',void 0),t([lt({type:Number,reflect:!0})],ft.prototype,'sliderPosition',void 0),t([lt({type:Number})],ft.prototype,'sliderSteps',void 0),t([
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function(t,e){return(({finisher:t,descriptor:e})=>(i,s)=>{var r;if(void 0===s){const s=null!==(r=i.originalKey)&&void 0!==r?r:i.key,o=null!=e?{kind:'method',placement:'prototype',key:s,descriptor:e(i.key)}:{...i,key:s};return null!=t&&(o.finisher=function(e){t(e,s)}),o}{const r=i.constructor;void 0!==e&&Object.defineProperty(i,s,e(s)),null==t||t(r,s)}})({descriptor:i=>{const s={get(){var e,i;return null!==(i=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t))&&void 0!==i?i:null},enumerable:!0,configurable:!0};if(e){const e='symbol'==typeof i?Symbol():'__'+i;s.get=function(){var i,s;return void 0===this[e]&&(this[e]=null!==(s=null===(i=this.renderRoot)||void 0===i?void 0:i.querySelector(t))&&void 0!==s?s:null),this[e]}}return s}})}('#image-container')],ft.prototype,'imageContainer',void 0),t([at()],ft.prototype,'slidingActive',void 0),t([at()],ft.prototype,'isRtl',void 0),t([at()],ft.prototype,'pressed',void 0),window.customElements.define('image-comparison',ft);const $t=document.querySelector('#image-comparison-demo');document.querySelectorAll('input[name="variant"]').forEach((t=>t.addEventListener('change',(t=>{const{value:e}=t.target;$t.setAttribute('variant',e)}))));
//# sourceMappingURL=image-comparison.js.map