/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "a055692e6fd99f6efe798de1e3d9140b"
  },
  {
    "url": "assets/6d308bd9gw1f5scrp1p4rj20rs0gatbj.jpg",
    "revision": "07afc72da8ac1181b6920160b3a96bdc"
  },
  {
    "url": "assets/6d308bd9gy1ft3id6gbmej21kw12r7hb.jpg",
    "revision": "3fdb04471053ab25c3888ad719467d86"
  },
  {
    "url": "assets/6d308bd9gy1ft3id6n0ajj21kw12rduv.jpg",
    "revision": "e5aaea0c2b2c78fec78667e3df099c47"
  },
  {
    "url": "assets/6d308bd9gy1ft3jq4frzjj21kw10nqek.jpg",
    "revision": "6834311eddb0d96d03d4a2612f6ae274"
  },
  {
    "url": "assets/6d308bd9gy1ft3jw0q7o0j21kw10ndql.jpg",
    "revision": "58d0cc5063e8062d62b1651b022507a3"
  },
  {
    "url": "assets/6d308bd9gy1ft3jw2iloqj21kw10nguj.jpg",
    "revision": "74a561fda505379a2769de4fd9613b13"
  },
  {
    "url": "assets/6d308bd9gy1ft3jw318grj21kw10nwp4.jpg",
    "revision": "bcc159c8defbab71a6047f7ca0c1aca6"
  },
  {
    "url": "assets/6d308bd9gy1ft3jw32rz0j21kw10ntma.jpg",
    "revision": "1b8c1dd33f878075a158022758d6a3e9"
  },
  {
    "url": "assets/6d308bd9gy1ft3nqbd9e3j21kw0xx45p.jpg",
    "revision": "4b90d01913b7aeb5c2b40a443d9f79e2"
  },
  {
    "url": "assets/6d308bd9gy1ft3nqbgjesj21kw0xx7ee.jpg",
    "revision": "4f1d3b8471ec50cd33cbc4d365dfdc41"
  },
  {
    "url": "assets/6d308bd9gy1ft3nqbnft5j21kw0xxaq1.jpg",
    "revision": "3c5f59d7e124ab24fbcef30ba8ace5a8"
  },
  {
    "url": "assets/6d308bd9gy1ft3nqcab4vj21kw0xxwn0.jpg",
    "revision": "44becb0bcd7d43cee1cc25abf5cb43fb"
  },
  {
    "url": "assets/6d308bd9gy1ft3nqcmte5j21kw0xxdm6.jpg",
    "revision": "189a9e9588f3c121f1143a0ad97abb8d"
  },
  {
    "url": "assets/6d308bd9gy1ft3nqcraoij21kw0xxjyt.jpg",
    "revision": "c091600cd661f7806c31089a26d0ad14"
  },
  {
    "url": "assets/6d308bd9gy1ft3nqd3c7fj21kw0xxqcj.jpg",
    "revision": "565812823763a1cbd0fe2407bb0f1860"
  },
  {
    "url": "assets/6d308bd9gy1ftc27nq3rsj21kw12j7if.jpg",
    "revision": "0e20484b8320666f904b03a67f858e77"
  },
  {
    "url": "assets/6d308bd9gy1ftc27pr7xuj21kw128gzp.jpg",
    "revision": "404ac0e1447ce512a02d0776d7c3aad8"
  },
  {
    "url": "assets/6d308bd9gy1ftc27q3vd3j21kw128tpk.jpg",
    "revision": "f07ced9d44ea5ea522aa91392813e0a0"
  },
  {
    "url": "assets/6d308bd9gy1ftc4y26xzaj21kw10g12f.jpg",
    "revision": "5d0537381e0d4614ceb567fd35256af8"
  },
  {
    "url": "assets/6d308bd9gy1ftc4y31cf5j21kw10g7kz.jpg",
    "revision": "319af1966faaa505bc1f5e44bdad08a0"
  },
  {
    "url": "assets/6d308bd9ly1ft2p8qmlazj21kw15ztol.jpg",
    "revision": "8a1859dace500cd8441019656b2c7241"
  },
  {
    "url": "assets/6d308bd9ly1ft2panw2oqj21kw15znaj.jpg",
    "revision": "60e48d83189fd329efdcb6ddd063215f"
  },
  {
    "url": "assets/6d308bd9ly1ft2peam690j21kw15ztl8.jpg",
    "revision": "5215aa921b1006e27ca7643df55c303a"
  },
  {
    "url": "assets/6d308bd9ly1ft2plz2djxj21kw16pk5j.jpg",
    "revision": "f3a438a5a26467bfe8a341a43c514b2d"
  },
  {
    "url": "assets/6d308bd9ly1ft2pvmld7dj21kw148wn3.jpg",
    "revision": "c8769a2266005cb26249a5e4d22210ab"
  },
  {
    "url": "assets/6d308bd9ly1ft2pvmlnkij21kw148dph.jpg",
    "revision": "6ce79fa00f7114d5c2925984ed69bda5"
  },
  {
    "url": "assets/6d308bd9ly1ft2pvmlz1hj21kw148tl3.jpg",
    "revision": "654c912c49c2c5db001e76db71c61d79"
  },
  {
    "url": "assets/6d308bd9ly1ft2pvmmewxj21kw14849j.jpg",
    "revision": "f84f9567389f573ed407d54316abe61c"
  },
  {
    "url": "assets/6d308bd9ly1fz3wii2wqsj21bh0u0qij.jpg",
    "revision": "f15b81f664a11c17813cf8839b68776a"
  },
  {
    "url": "assets/css/0.styles.654ce941.css",
    "revision": "ebccbff3af4dcf2772cd1f6ea01b1a7f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.aa97a9db.js",
    "revision": "b7514c06027bc21d7c7f42caf1748d22"
  },
  {
    "url": "assets/js/11.9c03b8a5.js",
    "revision": "086cc45042e387b89b80b6f89ab57656"
  },
  {
    "url": "assets/js/12.c59bda3b.js",
    "revision": "7d5323ef9ce5270baadd1070c38e787a"
  },
  {
    "url": "assets/js/13.7d453822.js",
    "revision": "0548cf5c1ad8d9ab1223da410af4c022"
  },
  {
    "url": "assets/js/14.da91da8d.js",
    "revision": "abe4b92400bf659ecdaf65b1f9374808"
  },
  {
    "url": "assets/js/15.72f07481.js",
    "revision": "7b9a2aea077c215e964acdd84749b2bc"
  },
  {
    "url": "assets/js/16.1dfc26cf.js",
    "revision": "19df509145366e797447d92c6e05beb0"
  },
  {
    "url": "assets/js/17.50abae85.js",
    "revision": "44cd1c4abec6557135a045c5d14fea00"
  },
  {
    "url": "assets/js/18.ce0a892b.js",
    "revision": "33a506c75383da753e81bd1919d32dbe"
  },
  {
    "url": "assets/js/19.c4f86cc8.js",
    "revision": "87dac1806bf4a62b39c7f40fb3a843f7"
  },
  {
    "url": "assets/js/2.feccba8b.js",
    "revision": "834f2da9e05519a1b3157907543f6cf1"
  },
  {
    "url": "assets/js/20.3d874b33.js",
    "revision": "483f9a453d2a711ed2af049f79db745d"
  },
  {
    "url": "assets/js/21.20101f82.js",
    "revision": "5c919220d1eab3ff53aa675d9579f661"
  },
  {
    "url": "assets/js/22.cd20bd85.js",
    "revision": "00b968dccad0893cd7640d6e1e8caf05"
  },
  {
    "url": "assets/js/23.db95c6ae.js",
    "revision": "30250cf808b672ab6e6f9ff2e7584c13"
  },
  {
    "url": "assets/js/3.2f55c91c.js",
    "revision": "177395e87f6d2b4d2897d9946b3c69cb"
  },
  {
    "url": "assets/js/4.987d07c2.js",
    "revision": "888270200d78292011b55113a6c54f5d"
  },
  {
    "url": "assets/js/5.aceec60f.js",
    "revision": "3197e80d00a04605d68d71245e4daff0"
  },
  {
    "url": "assets/js/6.3ee57269.js",
    "revision": "51939dbfa10f79fe63cb6fb5f2b70cfb"
  },
  {
    "url": "assets/js/7.24f79e57.js",
    "revision": "bae766ce694b6a3e257b23b947845f72"
  },
  {
    "url": "assets/js/8.4379073a.js",
    "revision": "409a847b32790abb736a40941676fa85"
  },
  {
    "url": "assets/js/9.bb768a05.js",
    "revision": "ce50fb6906899216a6393698b2730a40"
  },
  {
    "url": "assets/js/app.842c50de.js",
    "revision": "7b5977a3d56ed9cea9e2dd4bc8e420c8"
  },
  {
    "url": "guide/index.html",
    "revision": "0a560d84cad345f75f868b1874fbd314"
  },
  {
    "url": "guide/integrate-with-gitlab-ci.html",
    "revision": "3475de642eca7b62930af3532adce3ed"
  },
  {
    "url": "guide/integrate-with-jenkins.html",
    "revision": "5600ff8cbd10613aaaf04e15d4667200"
  },
  {
    "url": "guide/jenkins-android.html",
    "revision": "5bb9244b6367f449ee06709898fe2a53"
  },
  {
    "url": "guide/jenkins-ios.html",
    "revision": "ef600f79a0d0911958a02fa60e0f3695"
  },
  {
    "url": "guide/jenkins-web.html",
    "revision": "b00659c8c85579b04f6ec375144da41f"
  },
  {
    "url": "guide/presentations.html",
    "revision": "b8e04006e52a31d8650556c2877b5505"
  },
  {
    "url": "guide/reliable-cli.html",
    "revision": "918927ade9f04f3c7c6f9710633b9e7b"
  },
  {
    "url": "guide/reliable-web-deploy.html",
    "revision": "bd466e6aa1e3dc73901a5596e3d52bd3"
  },
  {
    "url": "index.html",
    "revision": "ccae3e6d1d51b5d1c1204cf4580518ac"
  },
  {
    "url": "logo/reliable.svg",
    "revision": "b34e8a8f81b1ba112b58e859061f289c"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "216f65bacb1fa2b4e9b03ea7af542709"
  },
  {
    "url": "zh/guide/integrate-with-gitlab-ci.html",
    "revision": "9332e270f86794c63219f3dfad626ea2"
  },
  {
    "url": "zh/guide/integrate-with-jenkins.html",
    "revision": "9a35c62fa5de8087fc2ba14c053492ec"
  },
  {
    "url": "zh/guide/jenkins-android.html",
    "revision": "d9f9bc6dcb76ea395b4c1dddd5ef649f"
  },
  {
    "url": "zh/guide/jenkins-ios.html",
    "revision": "32718255d0649da1dac5825e9418d08a"
  },
  {
    "url": "zh/guide/jenkins-web.html",
    "revision": "675514c1ac4c09e0d4b89ab9c79cdee3"
  },
  {
    "url": "zh/guide/presentations.html",
    "revision": "dd1fe5709402c089c7818b358d7ddd3e"
  },
  {
    "url": "zh/guide/reliable-cli.html",
    "revision": "2bc3e11be3aa8d11d79fabbe552eb17f"
  },
  {
    "url": "zh/guide/reliable-web-deploy.html",
    "revision": "3a85e8fd9d95ad900ae0561483a672ed"
  },
  {
    "url": "zh/index.html",
    "revision": "9df0ae49aa82a0d279ead1c5f1026fdb"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
