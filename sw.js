if(!self.define){let e,i={};const c=(c,a)=>(c=new URL(c+".js",a).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(a,r)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let n={};const s=e=>c(e,d),o={module:{uri:d},exports:n,require:s};i[d]=Promise.all(a.map((e=>o[e]||s(e)))).then((e=>(r(...e),n)))}}define(["./workbox-a69a5c93"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"4cc3bb7e0d5b7869aaa0e33a48cd642a"},{url:"barrierefreiheit/index.html",revision:"ac57f0f49d40e1025cda84d2b1f825d0"},{url:"blog/beschleunigte-navigation-mit-addPrefetchLink/index.html",revision:"a50cc9c204c4a7bbe38cbf96ca9f053e"},{url:"blog/challenge-progress-stepper/index.html",revision:"c3ec90531e42d85aec736f8851161f06"},{url:"blog/event-emitter-decorator/index.html",revision:"136bf41536eb6f6ad4fb95801c693349"},{url:"blog/image-comparison-component/index.html",revision:"3ece05b049b669b5e8c796771f83db8a"},{url:"blog/index.html",revision:"2405f08d005746d27fd81c6a65e81a73"},{url:"blog/query-assigned-element-content/index.html",revision:"e0816430d359ec140a5cbc5dc8475c49"},{url:"blog/toc-observer/index.html",revision:"fcd48198da1290d1ac782bedfa2475fd"},{url:"colors/index.html",revision:"b898bd06ee74f5fe51a3fe02a2cf7051"},{url:"content/misc/eaa-bfsg/index.html",revision:"e6f25c60798869b76fcad3223f9d010e"},{url:"content/README/index.html",revision:"c9e23265b7b3ecd360173c46c3a7d9a1"},{url:"content/shorts/something/index.html",revision:"3c5762c508e72cfe0a4343f79f335275"},{url:"datenschutzerklaerung/index.html",revision:"b2d8951cd453a12449747c043aec7f39"},{url:"favicon.svg",revision:"cc656a91605ea38eac131437c7183f5f"},{url:"fonts/inter-v7-latin-500.woff2",revision:"86a68eaf770207cf24f11a6e2df8dbfe"},{url:"fonts/inter-v7-latin-700.woff2",revision:"7d3792451822271900eb18edf45f067c"},{url:"fonts/inter-v7-latin-regular.woff2",revision:"e706246c93657e831056da07ad63a984"},{url:"img/2021/fecc-challenge-008.png",revision:"c4d325382c744f3204324d43e8dea0e9"},{url:"img/2023/image-comparison/2022_1004_14254000-w3120_grayscale--opt.jpg",revision:"2562f121081ab2f2d966916968d84729"},{url:"img/2023/image-comparison/2022_1004_14254000-w3120--opt.jpg",revision:"47e655acf2c1566b1caba4dc2498bc75"},{url:"img/2023/image-comparison/kasimir_filter--opt.jpg",revision:"8723826f85e2d0a63d736f2e1882dff0"},{url:"img/2023/image-comparison/kasimir--opt.jpg",revision:"138e31b5aca71d06c9891287f99259e5"},{url:"img/blob.svg",revision:"7075df5c623a8359c67972d6ebabf695"},{url:"img/DSC01539~2.ARW-square.jpg",revision:"0eac6f4326b76455045a3884167d89b0"},{url:"img/DSC01539~2.ARW.jpg",revision:"c34e15c4f7b158f01ea75d2fd5c8bc0a"},{url:"img/flame-white.svg",revision:"a1d54c5c9b7daa9ab6124b269b0bf7aa"},{url:"img/flame.svg",revision:"40606f48fcffda6574bd8b0a6410e157"},{url:"img/icons/expand_more_FILL0_wght400_GRAD0_opsz48.svg",revision:"2ea15f739d5f91b27c70d1b8b25d6465"},{url:"img/icons/toc_FILL0_wght400_GRAD0_opsz48.svg",revision:"ec28df0b3223f7cf38ce3b2ec167ccc2"},{url:"img/socials/codepen-icon.svg",revision:"762359adeadedf32ca4493c6086b69f7"},{url:"img/socials/GitHub-Mark-120px-plus.png",revision:"ef7a02b69836dc8b6a732a54c4200dcb"},{url:"img/socials/npm-logo-black.svg",revision:"cacd4dbe89c78b964442b6f4bb9f02f0"},{url:"impressum/index.html",revision:"bf4890280935208a36411e1130a3d0db"},{url:"index.html",revision:"85babda0eb7215edb08bd7fd98da0925"},{url:"js/image-comparison.js",revision:"b729dd5f0745515bedd77415db26194f"},{url:"js/index.js",revision:"b1f3dd158bbc3df04e6f9e92dcbd0070"},{url:"js/post.js",revision:"3c76de2a39da207fc426596b349a92a2"},{url:"js/theme-switch.js",revision:"b9f9c1bce35021fc096acdf4f57a4d43"},{url:"tags/a11y/index.html",revision:"0a9580ecf8a3e5802274e6941a25a1ea"},{url:"tags/blog/index.html",revision:"7d57434a642b010627f0fe9db767ca93"},{url:"tags/challenge/index.html",revision:"728c0198f4901eaff23dd5a861bb54c5"},{url:"tags/css/index.html",revision:"c90b1ed4e9b8fdf2948128e0680d3ee9"},{url:"tags/decorator/index.html",revision:"0c58a18d675bbeebee68e5b061ac28f9"},{url:"tags/index.html",revision:"c8aa568b4408c03a33c9cfc66362603c"},{url:"tags/javascript/index.html",revision:"3e7672fb11e5b282862296041d86cfaa"},{url:"tags/lit/index.html",revision:"265aff8f63b74c36cac6d041687c74af"},{url:"tags/shorts/index.html",revision:"54c597dd21bb18ab1c826c4008506a7d"},{url:"tags/typescript/index.html",revision:"571df4d0a10252c9516cbba43d70561d"},{url:"tags/upcoming/index.html",revision:"1f72e5a1c0ad5deddd5ca85231b02168"},{url:"tags/web-components/index.html",revision:"f602512eaff6ca3d2faded32c14b1431"},{url:"tsp_icon--original.svg",revision:"c2e55d6778513d9f885f1b80ec7f4b7a"},{url:"tsp_icon.svg",revision:"962b557e5a78b7ead57cd84d42ba1622"}],{}),e.registerRoute(/^https?:\/\/.+/,new e.CacheFirst({cacheName:"tony-spegel.com-v6.0.4",plugins:[]}),"GET")}));
//# sourceMappingURL=sw.js.map
