if(!self.define){let e,i={};const c=(c,a)=>(c=new URL(c+".js",a).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(a,r)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let n={};const s=e=>c(e,d),o={module:{uri:d},exports:n,require:s};i[d]=Promise.all(a.map((e=>o[e]||s(e)))).then((e=>(r(...e),n)))}}define(["./workbox-a523fd56"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"4ac4b57f2d6775f6530986bedeefcd6a"},{url:"barrierefreiheit/index.html",revision:"564d20fa4fb03dc5ef62618209df1564"},{url:"blog/beschleunigte-navigation-mit-addPrefetchLink/index.html",revision:"ab39d1247c3047dcd81037978988a952"},{url:"blog/challenge-progress-stepper/index.html",revision:"414c8bd3a1a4f992c27e670e77f4ea5c"},{url:"blog/event-emitter-decorator/index.html",revision:"600b72e3834c4031d9863ad5ffc65138"},{url:"blog/image-comparison-component/index.html",revision:"d3ac5dca962401178918192544ea7557"},{url:"blog/index.html",revision:"c709ea258c27de4d2060f517cf8a697a"},{url:"blog/query-assigned-element-content/index.html",revision:"c11149c85216ccacf3a9717f62c7bc80"},{url:"blog/toc-observer/index.html",revision:"b558e80b8213981ac29ee4d8a64cdb32"},{url:"colors/index.html",revision:"b898bd06ee74f5fe51a3fe02a2cf7051"},{url:"content/misc/eaa-bfsg/index.html",revision:"12f1c8bba5a59b86dd83fd70b339de60"},{url:"content/README/index.html",revision:"c9e23265b7b3ecd360173c46c3a7d9a1"},{url:"content/shorts/something/index.html",revision:"3c5762c508e72cfe0a4343f79f335275"},{url:"datenschutzerklaerung/index.html",revision:"4d33101249979a571934f40c878f1dbf"},{url:"favicon.svg",revision:"cc656a91605ea38eac131437c7183f5f"},{url:"fonts/inter-v7-latin-500.woff2",revision:"86a68eaf770207cf24f11a6e2df8dbfe"},{url:"fonts/inter-v7-latin-700.woff2",revision:"7d3792451822271900eb18edf45f067c"},{url:"fonts/inter-v7-latin-regular.woff2",revision:"e706246c93657e831056da07ad63a984"},{url:"img/2021/fecc-challenge-008.png",revision:"c4d325382c744f3204324d43e8dea0e9"},{url:"img/2023/image-comparison/2022_1004_14254000-w3120_grayscale--opt.jpg",revision:"2562f121081ab2f2d966916968d84729"},{url:"img/2023/image-comparison/2022_1004_14254000-w3120--opt.jpg",revision:"47e655acf2c1566b1caba4dc2498bc75"},{url:"img/2023/image-comparison/kasimir_filter--opt.jpg",revision:"8723826f85e2d0a63d736f2e1882dff0"},{url:"img/2023/image-comparison/kasimir--opt.jpg",revision:"138e31b5aca71d06c9891287f99259e5"},{url:"img/blob.svg",revision:"7075df5c623a8359c67972d6ebabf695"},{url:"img/DSC01539~2.ARW-square.jpg",revision:"0eac6f4326b76455045a3884167d89b0"},{url:"img/DSC01539~2.ARW.jpg",revision:"c34e15c4f7b158f01ea75d2fd5c8bc0a"},{url:"img/flame-white.svg",revision:"a1d54c5c9b7daa9ab6124b269b0bf7aa"},{url:"img/flame.svg",revision:"40606f48fcffda6574bd8b0a6410e157"},{url:"img/icons/expand_more_FILL0_wght400_GRAD0_opsz48.svg",revision:"2ea15f739d5f91b27c70d1b8b25d6465"},{url:"img/icons/toc_FILL0_wght400_GRAD0_opsz48.svg",revision:"ec28df0b3223f7cf38ce3b2ec167ccc2"},{url:"img/socials/codepen-icon.svg",revision:"762359adeadedf32ca4493c6086b69f7"},{url:"img/socials/GitHub-Mark-120px-plus.png",revision:"ef7a02b69836dc8b6a732a54c4200dcb"},{url:"img/socials/npm-logo-black.svg",revision:"cacd4dbe89c78b964442b6f4bb9f02f0"},{url:"impressum/index.html",revision:"c3baea5ae6e13e3f2d3b50cca6c360c3"},{url:"index.html",revision:"16f9616244b2e6167ed1c161e9c5a062"},{url:"js/image-comparison.js",revision:"b729dd5f0745515bedd77415db26194f"},{url:"js/index.js",revision:"b1f3dd158bbc3df04e6f9e92dcbd0070"},{url:"js/post.js",revision:"3c76de2a39da207fc426596b349a92a2"},{url:"js/theme-switch.js",revision:"b9f9c1bce35021fc096acdf4f57a4d43"},{url:"tags/a11y/index.html",revision:"dc3cdc9d41ec8d42325fe67ac42bc4ab"},{url:"tags/blog/index.html",revision:"7e4cf54c3a3ac376569c779983ff2ab2"},{url:"tags/challenge/index.html",revision:"06b018679c2a0cf07ebfc7f7632c762f"},{url:"tags/css/index.html",revision:"7634ffc71667477187913bd450b2bb2b"},{url:"tags/decorator/index.html",revision:"4dfefb588bf11ad1a71658507e88a031"},{url:"tags/index.html",revision:"82f008e831c2069ab4ffd5d94fa36369"},{url:"tags/javascript/index.html",revision:"09558877e2c4882bd72cbaee5e59ad80"},{url:"tags/lit/index.html",revision:"aeb66cff7896ae6fb64ae6c41cee0568"},{url:"tags/shorts/index.html",revision:"76d11b494856d6d1ad931d334aa06793"},{url:"tags/typescript/index.html",revision:"07c7d6ad5e32489346f5da837595b548"},{url:"tags/upcoming/index.html",revision:"bd7480d5e1da9d03acb2140dc5fc952e"},{url:"tags/web-components/index.html",revision:"aed338786817860b85381910fd6d2da0"},{url:"tsp_icon--original.svg",revision:"c2e55d6778513d9f885f1b80ec7f4b7a"},{url:"tsp_icon.svg",revision:"962b557e5a78b7ead57cd84d42ba1622"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/index.html"))),e.registerRoute(/^https?:\/\/.+/,new e.CacheFirst({cacheName:"tony-spegel.com-v6.0.3",plugins:[]}),"GET")}));
//# sourceMappingURL=sw.js.map
