if(!self.define){let e,i={};const s=(s,d)=>(s=new URL(s+".js",d).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(d,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let a={};const n=e=>s(e,c),o={module:{uri:c},exports:a,require:n};i[c]=Promise.all(d.map((e=>o[e]||n(e)))).then((e=>(r(...e),a)))}}define(["./workbox-919adfb7"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"19ae6e761c8d65dbc2d26017b63174f5"},{url:"barrierefreiheit/index.html",revision:"2cdc0e58e79d87a4da0b21dabf2aae56"},{url:"blog/beschleunigte-navigation-mit-addPrefetchLink/index.html",revision:"8d1356ca443b95daa018c7ed2e5131b7"},{url:"blog/challenge-progress-stepper/index.html",revision:"538bd6fbd577ad618559572d4cd90f2d"},{url:"blog/index.html",revision:"81947cff192556cf4172a052e91a8d1e"},{url:"css/blog-post.css",revision:"b611a33b0b11c758310dbc12b099128c"},{url:"css/components/image-comparison.css",revision:"1c0d31fd018eb08d130a7d8f783b089d"},{url:"css/components/theme-switch.css",revision:"cde2a9546c69b9b64cc204659a8329f6"},{url:"css/components/toc-observer.css",revision:"7ebf076c2dd58a68d162ba15d16b4d3e"},{url:"css/index.css",revision:"a0bbc69998243887603a749c48de2d19"},{url:"css/prism-a11y-rework.css",revision:"b2ce9f2aa04e3c80e3b43b12554be00f"},{url:"css/prism-diff.css",revision:"8e657f57d037e9797163658b9880d20f"},{url:"datenschutzerklaerung/index.html",revision:"9d510f19eed8a58f7011dac5de261d6f"},{url:"favicon.svg",revision:"732cffa907e73a0eda174b516b746079"},{url:"fonts/inter-v7-latin-500.woff2",revision:"86a68eaf770207cf24f11a6e2df8dbfe"},{url:"fonts/inter-v7-latin-700.woff2",revision:"7d3792451822271900eb18edf45f067c"},{url:"fonts/inter-v7-latin-regular.woff2",revision:"e706246c93657e831056da07ad63a984"},{url:"img/2021/fecc-challenge-008.png",revision:"c4d325382c744f3204324d43e8dea0e9"},{url:"img/flame-white.svg",revision:"a1d54c5c9b7daa9ab6124b269b0bf7aa"},{url:"img/flame.svg",revision:"40606f48fcffda6574bd8b0a6410e157"},{url:"img/socials/codepen-icon.svg",revision:"762359adeadedf32ca4493c6086b69f7"},{url:"img/socials/GitHub-Mark-120px-plus.png",revision:"ef7a02b69836dc8b6a732a54c4200dcb"},{url:"img/socials/npm-logo-black.svg",revision:"cacd4dbe89c78b964442b6f4bb9f02f0"},{url:"impressum/index.html",revision:"5e2882cb796561cf793358a15761338e"},{url:"index.html",revision:"c985e6707a10a9649a5a8ac187bdd6bc"},{url:"js/image-comparison.js",revision:"864d64e53a7cea924ae3a0797e0a86c2"},{url:"js/index.js",revision:"b1f3dd158bbc3df04e6f9e92dcbd0070"},{url:"js/post.js",revision:"f55a50014b4f3a7a8f9b97e507972149"},{url:"js/theme-switch.js",revision:"dbb804cfd320862bf57c35f4de557d81"},{url:"page-list/index.html",revision:"4a2d7bed7cfe5d819aea1c4454dc3289"},{url:"tags/a11y/index.html",revision:"88fce815e3b7e2b4a992266f6b97161c"},{url:"tags/blog/index.html",revision:"c0e77e20f63ab9f558c38b5829f81f60"},{url:"tags/challenge/index.html",revision:"3e34f84fec732e116a3787214bf9aaf0"},{url:"tags/css/index.html",revision:"9ad7d86087a9be5307ecb7b90156de68"},{url:"tags/index.html",revision:"053c5c8e819aa346544193e45060de1c"},{url:"tags/javascript/index.html",revision:"8d1d87b3df66d3536b69c81187e76580"},{url:"tags/lit/index.html",revision:"a28edac77f411a8e1dd999e1c4d18414"},{url:"tags/performance/index.html",revision:"5670eede369b677a1e87946fd1476f52"},{url:"tags/typescript/index.html",revision:"cad67bdc3ac51c7767b934404cf9e522"},{url:"tags/web-components/index.html",revision:"5db43ab68de21e5b29dc54d29c43e0e5"},{url:"tsp_icon--original.svg",revision:"e697570a3d0db5f3ed26ab6efd75b44e"},{url:"tsp_icon.svg",revision:"304e6b1eb3b32f859804124a4f8f84e5"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/index.html"))),e.registerRoute("polyfills/*.js",new e.CacheFirst,"GET")}));
//# sourceMappingURL=sw.js.map
