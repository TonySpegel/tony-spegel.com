if(!self.define){let e,i={};const s=(s,c)=>(s=new URL(s+".js",c).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(c,r)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let a={};const o=e=>s(e,d),n={module:{uri:d},exports:a,require:o};i[d]=Promise.all(c.map((e=>n[e]||o(e)))).then((e=>(r(...e),a)))}}define(["./workbox-088bfcc4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"4a88f822549ad413440c84f878d6a2e9"},{url:"barrierefreiheit/index.html",revision:"b09848948f9b234cd9775389dcb283da"},{url:"blog/beschleunigte-navigation-mit-addPrefetchLink/index.html",revision:"ef67851849cd22c4d5c443f72296f232"},{url:"blog/challenge-progress-stepper/index.html",revision:"87708a5dafd0635dcc2abec0d504d1b4"},{url:"blog/image-comparison-component/index.html",revision:"76357f42d0969fc860e7026f1e1731ee"},{url:"blog/index.html",revision:"90cecf194895ba60b7068a01fac3db88"},{url:"blog/toc-observer/index.html",revision:"be08bb42b198a298ca5e2fa0bed4ce5b"},{url:"colors/index.html",revision:"502dbccf6de38598cef034dd85f46098"},{url:"css/blog-post.css",revision:"189851968957a848a96f77702c852f2c"},{url:"css/colors.css",revision:"df4eb0fc9dcfd99a8ce98fb757665302"},{url:"css/components/image-comparison.css",revision:"40d8473662476ac0b0b8f8107d3a1bf1"},{url:"css/components/theme-switch.css",revision:"d7517337cca39adeb6ff706ad5ba6e23"},{url:"css/components/toc-observer.css",revision:"54fc878be017395c066c052920490430"},{url:"css/index.css",revision:"0dd894dd4793247cb36acb44d5ffe0fa"},{url:"css/prism-a11y-rework.css",revision:"e036a8264cd182dffa970fecfc28b967"},{url:"css/prism-diff.css",revision:"8e657f57d037e9797163658b9880d20f"},{url:"css/prism-vsc-dark-plus.css",revision:"f956a16b074793751d2afd9d346c099b"},{url:"cv/index.html",revision:"8fb57bc337240011a8ba2d77572823bd"},{url:"datenschutzerklaerung/index.html",revision:"21f26da42315797b9e1122ae55b8869b"},{url:"favicon.svg",revision:"cc656a91605ea38eac131437c7183f5f"},{url:"fonts/inter-v7-latin-500.woff2",revision:"86a68eaf770207cf24f11a6e2df8dbfe"},{url:"fonts/inter-v7-latin-700.woff2",revision:"7d3792451822271900eb18edf45f067c"},{url:"fonts/inter-v7-latin-regular.woff2",revision:"e706246c93657e831056da07ad63a984"},{url:"img/2021/fecc-challenge-008.png",revision:"c4d325382c744f3204324d43e8dea0e9"},{url:"img/2023/image-comparison/2022_1004_14254000-w3120_grayscale--opt.jpg",revision:"2562f121081ab2f2d966916968d84729"},{url:"img/2023/image-comparison/2022_1004_14254000-w3120--opt.jpg",revision:"47e655acf2c1566b1caba4dc2498bc75"},{url:"img/2023/image-comparison/kasimir_filter--opt.jpg",revision:"8723826f85e2d0a63d736f2e1882dff0"},{url:"img/2023/image-comparison/kasimir--opt.jpg",revision:"138e31b5aca71d06c9891287f99259e5"},{url:"img/2023/toc-observer/toc-observer-demo.jpg",revision:"8f2e7c297d450545cbaa15deb28524ec"},{url:"img/flame-white.svg",revision:"a1d54c5c9b7daa9ab6124b269b0bf7aa"},{url:"img/flame.svg",revision:"40606f48fcffda6574bd8b0a6410e157"},{url:"img/socials/codepen-icon.svg",revision:"762359adeadedf32ca4493c6086b69f7"},{url:"img/socials/GitHub-Mark-120px-plus.png",revision:"ef7a02b69836dc8b6a732a54c4200dcb"},{url:"img/socials/npm-logo-black.svg",revision:"cacd4dbe89c78b964442b6f4bb9f02f0"},{url:"impressum/index.html",revision:"fc57c040b8103030132e0c3cfd5e5162"},{url:"index.html",revision:"9e4ea056c8b8542608f0f6431d7029d3"},{url:"js/image-comparison.js",revision:"b729dd5f0745515bedd77415db26194f"},{url:"js/index.js",revision:"b1f3dd158bbc3df04e6f9e92dcbd0070"},{url:"js/post.js",revision:"3c76de2a39da207fc426596b349a92a2"},{url:"js/theme-switch.js",revision:"b9f9c1bce35021fc096acdf4f57a4d43"},{url:"page-list/1/index.html",revision:"4980d86c509b43f3f6d56f0270fe3e65"},{url:"page-list/index.html",revision:"564aa3a5b84cde2898c621ad2861627b"},{url:"tags/a11y/index.html",revision:"5aab7089b2cbb02c6022994a91210865"},{url:"tags/blog/index.html",revision:"28c090dbd317a3fcbf397f910f831562"},{url:"tags/challenge/index.html",revision:"cf265f9dd2774ed2d2bc93e92d794fa9"},{url:"tags/css/index.html",revision:"39298b05fc31d965e7900866957b4ac1"},{url:"tags/decorator/index.html",revision:"0cd29cbb938e761aae29e71c6dad2e8e"},{url:"tags/index.html",revision:"259dd02fbc9802cc68de8928b2fd1d10"},{url:"tags/javascript/index.html",revision:"7678b8e5beaa124d86dde1d0ca883b8e"},{url:"tags/lit/index.html",revision:"442f0e6204b3e25beffda5e80f3c09a7"},{url:"tags/performance/index.html",revision:"d2d330ca06ca4afe9e438e74f829b5cd"},{url:"tags/typescript/index.html",revision:"008de355984b6c92aa14d60246ef1f98"},{url:"tags/upcoming/index.html",revision:"d7fd7f5395b38920cd9bf781361eb586"},{url:"tags/web-components/index.html",revision:"b9e8fa528bb4eed7cf04f4a7edd159bb"},{url:"tsp_icon--original.svg",revision:"c2e55d6778513d9f885f1b80ec7f4b7a"},{url:"tsp_icon.svg",revision:"962b557e5a78b7ead57cd84d42ba1622"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/index.html"))),e.registerRoute("polyfills/*.js",new e.CacheFirst,"GET")}));
//# sourceMappingURL=sw.js.map
