if(!self.define){let e,i={};const s=(s,a)=>(s=new URL(s+".js",a).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(a,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let n={};const o=e=>s(e,c),d={module:{uri:c},exports:n,require:o};i[c]=Promise.all(a.map((e=>d[e]||o(e)))).then((e=>(r(...e),n)))}}define(["./workbox-919adfb7"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"a87c8425ae74e977c6e33a939bbc34a4"},{url:"barrierefreiheit/index.html",revision:"2871abccd77985679334ff26b5783694"},{url:"blog/beschleunigte-navigation-mit-addPrefetchLink/index.html",revision:"29c2bd553ec4a57236092ccfa669da6c"},{url:"blog/challenge-progress-stepper/index.html",revision:"1be98f2ecc87181d59a761a193c16491"},{url:"blog/image-comparison-component/index.html",revision:"a05c1023a4de5ae2b02a79c2f97e89ff"},{url:"blog/index.html",revision:"eca7b47a7c0a58a5421f53aaeb879e18"},{url:"blog/toc-observer/index.html",revision:"b315517635784fb09450a5260b6f0eef"},{url:"css/blog-post.css",revision:"0f3bed226becffa5b5bf55ae3f8abc9b"},{url:"css/components/image-comparison.css",revision:"028a6915f9e63db474bf2db83468662c"},{url:"css/components/theme-switch.css",revision:"d7517337cca39adeb6ff706ad5ba6e23"},{url:"css/components/toc-observer.css",revision:"109348899e0436ded831a74b0c064989"},{url:"css/index.css",revision:"6b112308fee90d0300bba20a64c0ab7d"},{url:"css/prism-a11y-rework.css",revision:"5e0e2b250ebd87aca9bdf59b0b475886"},{url:"css/prism-diff.css",revision:"8e657f57d037e9797163658b9880d20f"},{url:"datenschutzerklaerung/index.html",revision:"1a25a84739480fe26c0aa7e4d56bdd0c"},{url:"favicon.svg",revision:"732cffa907e73a0eda174b516b746079"},{url:"fonts/inter-v7-latin-500.woff2",revision:"86a68eaf770207cf24f11a6e2df8dbfe"},{url:"fonts/inter-v7-latin-700.woff2",revision:"7d3792451822271900eb18edf45f067c"},{url:"fonts/inter-v7-latin-regular.woff2",revision:"e706246c93657e831056da07ad63a984"},{url:"img/2021/fecc-challenge-008.png",revision:"c4d325382c744f3204324d43e8dea0e9"},{url:"img/2023/image-comparison/2022_1004_14254000-w3120_grayscale--opt.jpg",revision:"2562f121081ab2f2d966916968d84729"},{url:"img/2023/image-comparison/2022_1004_14254000-w3120--opt.jpg",revision:"47e655acf2c1566b1caba4dc2498bc75"},{url:"img/2023/image-comparison/kasimir_filter--opt.jpg",revision:"8723826f85e2d0a63d736f2e1882dff0"},{url:"img/2023/image-comparison/kasimir--opt.jpg",revision:"138e31b5aca71d06c9891287f99259e5"},{url:"img/2023/toc-observer/toc-observer-demo.jpg",revision:"8f2e7c297d450545cbaa15deb28524ec"},{url:"img/flame-white.svg",revision:"a1d54c5c9b7daa9ab6124b269b0bf7aa"},{url:"img/flame.svg",revision:"40606f48fcffda6574bd8b0a6410e157"},{url:"img/socials/codepen-icon.svg",revision:"762359adeadedf32ca4493c6086b69f7"},{url:"img/socials/GitHub-Mark-120px-plus.png",revision:"ef7a02b69836dc8b6a732a54c4200dcb"},{url:"img/socials/npm-logo-black.svg",revision:"cacd4dbe89c78b964442b6f4bb9f02f0"},{url:"impressum/index.html",revision:"2bfaf0b19687a5a7112fc714f14eff74"},{url:"index.html",revision:"0c4f9278d12db1aaf4795c9622728674"},{url:"js/image-comparison.js",revision:"b55284dda7ac92d3543ed38e0d1ff7ed"},{url:"js/index.js",revision:"b1f3dd158bbc3df04e6f9e92dcbd0070"},{url:"js/post.js",revision:"fa65fbe1cb226e9e926280deaa0fd3c5"},{url:"js/theme-switch.js",revision:"97846c90edda46efba703e014c74f3ac"},{url:"page-list/index.html",revision:"74a14fe05733dac07dbc3590d6cd5641"},{url:"tags/a11y/index.html",revision:"f64349a5fc0c66bf55a1f2651dc3bd4c"},{url:"tags/blog/index.html",revision:"5b4cc2c99378ac6a58aa0628886bebdc"},{url:"tags/challenge/index.html",revision:"c1447969026e098bb47ec53c22f8876c"},{url:"tags/css/index.html",revision:"946af73915d0ce22701ba49b63dc2d8d"},{url:"tags/index.html",revision:"a53e04beb0073a679fd020b2e6a17b73"},{url:"tags/javascript/index.html",revision:"8a8e000ca087bca9ffa9892883280f66"},{url:"tags/lit/index.html",revision:"b38ad3b1db77bfcc21d67680df1f9bff"},{url:"tags/performance/index.html",revision:"26eba59dea0649a6b043fd0fe08c0fd9"},{url:"tags/typescript/index.html",revision:"ec2146921cdaea289d0195e35ed1bb6e"},{url:"tags/web-components/index.html",revision:"6ef4b846005785cacdd08778f6f09617"},{url:"tsp_icon--original.svg",revision:"e697570a3d0db5f3ed26ab6efd75b44e"},{url:"tsp_icon.svg",revision:"304e6b1eb3b32f859804124a4f8f84e5"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/index.html"))),e.registerRoute("polyfills/*.js",new e.CacheFirst,"GET")}));
//# sourceMappingURL=sw.js.map