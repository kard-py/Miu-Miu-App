'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"index.html": "d4545fea97442fd0e4c5a1df7e6777d2",
"/": "d4545fea97442fd0e4c5a1df7e6777d2",
"version.json": "cb3c2b9b8bc2f50b361310e82c3e6dd3",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/icon.png": "91ef8da5c590eedc4b1d024cd76d4041",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/index": "1652694faede4b531986967ece71c702",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/config": "81f4e0123e72d897aa8d3caec4296765",
".git/logs/refs/heads/main": "ad8f0baff0c3d3171bef7e5526ebb6e9",
".git/logs/refs/remotes/origin/main": "f77cc116e82dde61f154687d486fe508",
".git/logs/HEAD": "d08277a9520dd92c1223189ade321829",
".git/refs/heads/main": "434b1f73deec12df33df2f3cde9255d7",
".git/refs/remotes/origin/main": "434b1f73deec12df33df2f3cde9255d7",
".git/objects/7f/a1b5f06d6b5cfd793655e1170eec14e2f0707a": "9619612e0ac8a7f920d0a71191e025f0",
".git/objects/91/2fe07fdc1de40ab5ad733a6f5255857a0e8c55": "39a5800c44abcb4b662e3652d04aa77e",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/57/c4bb1e61c41010278238f7a29309e35f6841d8": "a4a0b14d7cd9957e30e28a85e8efa835",
".git/objects/2a/dd795c743cc78390fdefdac2c79df61ff7538b": "ae30a51e4c3b1903325b8dcfd52bfb72",
".git/objects/cd/b81a1bf94236e5f774fb65ba25bd0d6088ac99": "fba0a3b0f6d63e947fde352a07363773",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/67/c65ec6106968067d34b4ecf17d137665d4b76b": "03d61abbd7632ff2d74c8256f9952dd3",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/c2/0d389ddcb0808ba98efc32464f8da9ae7c17f8": "1608ae3e70394064e92745ca86f475eb",
".git/objects/fd/01fb0d4b63b00b8e35e43060b1ab8fd8a757be": "b548b86a95887f8a569a743ae6b689a5",
".git/objects/24/c4c29ac0ca085fc0d73b469108d00821044423": "d1c9527b1547d1c7ec6a5325ff00034e",
".git/objects/be/bbf109f5eccdfc27889a906b81eff097898bee": "904a75d1b981bd58b62bb6022f9166bc",
".git/objects/7a/94df48a0f37176346e9cd518759b22fba4c391": "da6f4ba4c8e305f2d4f067d3a7f055a7",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/73/330377000b31d92e9f8574300f2d022fe4bef6": "40fcef6f3a624d5c7d5a4969b149af7a",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/90/8f51fb3a57b4b0ef957105a548ad43dbee2481": "123e5d8d49c0ebf8ac5cfccc1e773bc5",
".git/objects/c0/dd05bd7be778bb1811b8fde71402d762d25d99": "69407bba766460ee9dc2d9028e54aa10",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/87/5f1bbc0426d09e39da79dd7aec2474927d5337": "ece04c0591311527f4e0d538653c37af",
".git/objects/87/2523526fca563ac8a9b96eb13a725473dd8017": "9cd5df5ee6eb2af410646f2fae34e31a",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/47/1073f96d3194b1964b6276799f2be6f293b108": "7cd44b14705487834871b7a0607caf72",
".git/objects/43/5c6df6d43e0aa57635b119c0132321da6d9e14": "9c88fa6f2cd4a3790c1340ed69ee2afd",
".git/objects/45/4db63aaa77034955ac3666f30b67a21c877113": "d0b73255244c3cf0819554620bb5dfac",
".git/objects/02/71ddd6eac8dbf06bb8fda2e5920b9a2ed93f43": "75ae9f12578c594df886df2ac464bbb6",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/2f13cd6e404919a0ec4abd86c27f64e7b01fbe": "c888336c03f2d90b9ed960955afde6c5",
".git/objects/50/d10eb4d214d5a956345a424014745777b25df2": "df539d8ccce1993a485c625435024c58",
".git/objects/aa/9033a801f73539a025d9f4012fa823c27ff3b1": "6489b5eb717a3de0e8081066d4570d80",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/aa/e8bb685412b2e77d22c1ae89951af478820d3c": "f992a5016ed28cc1951f6766eceb342d",
".git/objects/01/99f8bb2e669167eea5a922476975e4ebc41be0": "f947850b91052620dd5c01bbe73924cd",
".git/objects/35/c13a6438c7cd267605ea61a91ad23e737ea293": "31fc63998456a2482768e74af5f70574",
".git/objects/55/8bcec967cbbb8a0a4d8c9c29229fb09da99b77": "faf9159248e4a08b83ed8c857e37a995",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/3d/a864e574d0dde0e36853855895ae8903aa58df": "1bf54cc85c26748995401a51c2ce02cd",
".git/objects/a1/81b1c1d131dcc4018fabecd7f7213958b0997c": "59f110063595fa82f2909a7c87b51b6a",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/fb/259af9dec2eba631ebac9a99e933b83b2eb4a5": "a7faf04beb158960aafbf02e18e487b8",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/70/ad430e9b92db51caa78c9f7db28893a711949e": "8f2557390eb131d3ba4553a4e8ea35d2",
".git/objects/d5/d537a60295c7961917e1653afcf75167cc75ec": "68920b4db7cfab34cfa1a78cea3f55fd",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/d4/7039c8e393d2f5530fa7b3bc23b489c80fc70c": "959a54e04de32047e6650175b404b41b",
".git/objects/d4/19bafb4a5d55656b5998263b56363dcce8c0d1": "a95c6d027dfef21f495d4120158446e6",
".git/COMMIT_EDITMSG": "f6f2572cacbc5cd1ca2246a392b61223",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js": "9ffac247db6cb919fa31d9710bbb48ab",
"assets/FontManifest.json": "97b7ae46de638b280c18538ade118d70",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "259068529bed6e57beac74e9760f7147",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/assets/images/banner_gatos.jpg": "158db2b72b4dec0730120ff7dcc87ff9",
"assets/assets/fonts/Montserrat-Regular.ttf": "3fe868a1a9930b59d94d2c1d79461e3c",
"assets/AssetManifest.json": "a3b02d37b0aedc6e2fdcf82e79f0ed81",
"manifest.json": "9506f50591afc4011f7496dd695652f2"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
