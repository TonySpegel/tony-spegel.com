if(!self.define){let e,i={};const c=(c,r)=>(c=new URL(c+".js",r).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(r,a)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let s={};const n=e=>c(e,d),o={module:{uri:d},exports:s,require:n};i[d]=Promise.all(r.map((e=>o[e]||n(e)))).then((e=>(a(...e),s)))}}define(["./workbox-088bfcc4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"947810302bac75d5a29f350039dd55f8"},{url:"barrierefreiheit/index.html",revision:"d98be9df84eea544c00ffe4451ee163a"},{url:"blog/beschleunigte-navigation-mit-addPrefetchLink/index.html",revision:"fb90900e761cdc4a55949fd5230dcbb4"},{url:"blog/challenge-progress-stepper/index.html",revision:"6cb9f4ad1fab78203ba598b92afed832"},{url:"blog/image-comparison-component/index.html",revision:"555f5c2e0e79c00b7ec637ab0457e438"},{url:"blog/index.html",revision:"11342e15ce1c598a8cb6c69038c2ba4e"},{url:"blog/query-assigned-element-content/index.html",revision:"eef1e0505f850d11085bfcac3ae0680f"},{url:"blog/toc-observer/index.html",revision:"7174b8d264a919e2bb3a076339fa4cee"},{url:"colors/index.html",revision:"502dbccf6de38598cef034dd85f46098"},{url:"cv/index.html",revision:"511d8d60a60981febcbf332a186a4bcc"},{url:"datenschutzerklaerung/index.html",revision:"3f969a816fae7ece6bbe62945f98a26d"},{url:"favicon.svg",revision:"cc656a91605ea38eac131437c7183f5f"},{url:"fonts/inter-v7-latin-500.woff2",revision:"86a68eaf770207cf24f11a6e2df8dbfe"},{url:"fonts/inter-v7-latin-700.woff2",revision:"7d3792451822271900eb18edf45f067c"},{url:"fonts/inter-v7-latin-regular.woff2",revision:"e706246c93657e831056da07ad63a984"},{url:"img/2021/fecc-challenge-008.png",revision:"c4d325382c744f3204324d43e8dea0e9"},{url:"img/2023/image-comparison/2022_1004_14254000-w3120_grayscale--opt.jpg",revision:"2562f121081ab2f2d966916968d84729"},{url:"img/2023/image-comparison/2022_1004_14254000-w3120--opt.jpg",revision:"47e655acf2c1566b1caba4dc2498bc75"},{url:"img/2023/image-comparison/kasimir_filter--opt.jpg",revision:"8723826f85e2d0a63d736f2e1882dff0"},{url:"img/2023/image-comparison/kasimir--opt.jpg",revision:"138e31b5aca71d06c9891287f99259e5"},{url:"img/2023/toc-observer/toc-observer-demo.jpg",revision:"8f2e7c297d450545cbaa15deb28524ec"},{url:"img/flame-white.svg",revision:"a1d54c5c9b7daa9ab6124b269b0bf7aa"},{url:"img/flame.svg",revision:"40606f48fcffda6574bd8b0a6410e157"},{url:"img/icons/expand_more_FILL0_wght400_GRAD0_opsz48.svg",revision:"2ea15f739d5f91b27c70d1b8b25d6465"},{url:"img/icons/toc_FILL0_wght400_GRAD0_opsz48.svg",revision:"ec28df0b3223f7cf38ce3b2ec167ccc2"},{url:"img/socials/codepen-icon.svg",revision:"762359adeadedf32ca4493c6086b69f7"},{url:"img/socials/GitHub-Mark-120px-plus.png",revision:"ef7a02b69836dc8b6a732a54c4200dcb"},{url:"img/socials/npm-logo-black.svg",revision:"cacd4dbe89c78b964442b6f4bb9f02f0"},{url:"impressum/index.html",revision:"52c3216cfd68b94b069a8938abeb41b4"},{url:"index.html",revision:"7dafa08e66e73f9ad6e0c5cd4e61abaa"},{url:"js/image-comparison.js",revision:"b729dd5f0745515bedd77415db26194f"},{url:"js/index.js",revision:"b1f3dd158bbc3df04e6f9e92dcbd0070"},{url:"js/post.js",revision:"3c76de2a39da207fc426596b349a92a2"},{url:"js/theme-switch.js",revision:"b9f9c1bce35021fc096acdf4f57a4d43"},{url:"page-list/1/index.html",revision:"d619cc19febeeff2c59e24f2f78f698a"},{url:"page-list/index.html",revision:"22b57641b667fcae1f219e783e0d279a"},{url:"tags/a11y/index.html",revision:"cc487b2f9520dd307b81c8f36eabcef0"},{url:"tags/blog/index.html",revision:"d47c92417584eeec0dd9b332758f9391"},{url:"tags/challenge/index.html",revision:"20307554929e4eac17e63b5ba83a9cad"},{url:"tags/css/index.html",revision:"235635f8dda21e6a348dcd06fcded3f5"},{url:"tags/decorator/index.html",revision:"13b9e7ce43b3bd9be6b878cf0666991c"},{url:"tags/index.html",revision:"f71a756e2f3e1e079dcc3e4f73cc5c74"},{url:"tags/javascript/index.html",revision:"c18b638bdac4c7a26165ff798c87e116"},{url:"tags/lit/index.html",revision:"d48ed5e5c171d82ff55155bc2a74153e"},{url:"tags/typescript/index.html",revision:"941dd8e81ddf6b361725cdf1b74c7228"},{url:"tags/upcoming/index.html",revision:"644995766a0018475ac7156fef7cbbd9"},{url:"tags/web-components/index.html",revision:"7e1d24e4c52b11feaeff90aca18136b5"},{url:"tsp_icon--original.svg",revision:"c2e55d6778513d9f885f1b80ec7f4b7a"},{url:"tsp_icon.svg",revision:"962b557e5a78b7ead57cd84d42ba1622"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/index.html"))),e.registerRoute("polyfills/*.js",new e.CacheFirst,"GET")}));
//# sourceMappingURL=sw.js.map
