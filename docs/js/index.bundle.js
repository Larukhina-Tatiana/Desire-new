/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_rightside_menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/rightside-menu.js */ \"./src/js/modules/rightside-menu.js\");\n/* harmony import */ var _modules_transfer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/transfer.js */ \"./src/js/modules/transfer.js\");\n/* harmony import */ var _modules_initSlider_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/initSlider.js */ \"./src/js/modules/initSlider.js\");\n/* harmony import */ var _modules_renderNewCollection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/renderNewCollection.js */ \"./src/js/modules/renderNewCollection.js\");\n/* harmony import */ var _vendor_IntersectionObserver_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vendor/IntersectionObserver.js */ \"./src/js/vendor/IntersectionObserver.js\");\n/* harmony import */ var _modules_activePage_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/activePage.js */ \"./src/js/modules/activePage.js\");\n/* harmony import */ var _modules_hartVideo_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/hartVideo.js */ \"./src/js/modules/hartVideo.js\");\n/* harmony import */ var _modules_animateLinesH2_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/animateLinesH2.js */ \"./src/js/modules/animateLinesH2.js\");\n/* harmony import */ var _modules_animateLinesAbout_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/animateLinesAbout.js */ \"./src/js/modules/animateLinesAbout.js\");\n/* harmony import */ var _modules_animatePartners_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/animatePartners.js */ \"./src/js/modules/animatePartners.js\");\n/* harmony import */ var _modules_asideBtn_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/asideBtn.js */ \"./src/js/modules/asideBtn.js\");\n/* harmony import */ var _modules_playBtn_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/playBtn.js */ \"./src/js/modules/playBtn.js\");\n/* harmony import */ var _modules_animateStack_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/animateStack.js */ \"./src/js/modules/animateStack.js\");\n/* harmony import */ var _modules_observeAndInitStack_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modules/observeAndInitStack.js */ \"./src/js/modules/observeAndInitStack.js\");\n/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./utils/utils.js */ \"./src/js/utils/utils.js\");\n/* harmony import */ var _modules_fetchBlog_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modules/fetchBlog.js */ \"./src/js/modules/fetchBlog.js\");\n/* harmony import */ var _modules_renderIndexArticles_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./modules/renderIndexArticles.js */ \"./src/js/modules/renderIndexArticles.js\");\n/* harmony import */ var _modules_renderSingleArticle_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./modules/renderSingleArticle.js */ \"./src/js/modules/renderSingleArticle.js\");\n/* harmony import */ var _modules_renderGallery_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./modules/renderGallery.js */ \"./src/js/modules/renderGallery.js\");\n/* harmony import */ var _modules_animateGalleyCard_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./modules/animateGalleyCard.js */ \"./src/js/modules/animateGalleyCard.js\");\n/* harmony import */ var _modules_crateTabs_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./modules/crateTabs.js */ \"./src/js/modules/crateTabs.js\");\n/* harmony import */ var _modules_initGallery3d_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./modules/initGallery3d.js */ \"./src/js/modules/initGallery3d.js\");\n/* harmony import */ var vanilla_tilt__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! vanilla-tilt */ \"./node_modules/vanilla-tilt/lib/vanilla-tilt.js\");\n/* harmony import */ var _modules_initAboutTitleLettersAnimation_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./modules/initAboutTitleLettersAnimation.js */ \"./src/js/modules/initAboutTitleLettersAnimation.js\");\n/* harmony import */ var _modules_initBlogSearch_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./modules/initBlogSearch.js */ \"./src/js/modules/initBlogSearch.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// import { fetchFurnitureArticles } from \"./api/FurnitureAPI.js\";\r\n\r\n // скролл  статей блога на blog.html\r\n\r\n\r\n\r\n\r\n\r\n\r\n // ✅ отрисовка статей блога на главной\r\n // ✅ отрисовка статей блога на странице одной статьи\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// Дожидаемся полной загрузки DOM перед инициализацией скриптов\r\ndocument.addEventListener(\"DOMContentLoaded\", async () => {\r\n  const body = document.body;\r\n  // для всех страниц\r\n  (0,_modules_activePage_js__WEBPACK_IMPORTED_MODULE_5__.activePage)();\r\n  (0,_modules_rightside_menu_js__WEBPACK_IMPORTED_MODULE_0__.initRightsideMenu)();\r\n  (0,_modules_transfer_js__WEBPACK_IMPORTED_MODULE_1__.transferElements)();\r\n  (0,_vendor_IntersectionObserver_js__WEBPACK_IMPORTED_MODULE_4__.initVisibilityAnimations)();\r\n  (0,_modules_animateLinesH2_js__WEBPACK_IMPORTED_MODULE_7__.animateLinesH2)();\r\n\r\n  if (body.classList.contains(\"page-home\")) {\r\n    (0,_modules_initSlider_js__WEBPACK_IMPORTED_MODULE_2__.initHeroSlider)();\r\n    (0,_modules_renderNewCollection_js__WEBPACK_IMPORTED_MODULE_3__.renderCollection)();\r\n    await (0,_modules_renderIndexArticles_js__WEBPACK_IMPORTED_MODULE_16__.renderIndexArticles)(); // ✅ дожидаемся вставки .blog-slider\r\n    (0,_modules_playBtn_js__WEBPACK_IMPORTED_MODULE_11__.initVideoPlayer)(); // ✅ активируем обработчик кнопки ▶\r\n    (0,_modules_initSlider_js__WEBPACK_IMPORTED_MODULE_2__.initBlogSlider)();\r\n  }\r\n\r\n  if (document.body.classList.contains(\"page-about\")) {\r\n    // renderCollection();\r\n    (0,_modules_hartVideo_js__WEBPACK_IMPORTED_MODULE_6__.updateHeartScale)();\r\n    (0,_modules_animateLinesAbout_js__WEBPACK_IMPORTED_MODULE_8__.animateLinesAbout)();\r\n    (0,_modules_animatePartners_js__WEBPACK_IMPORTED_MODULE_9__.animatePartners)();\r\n    (0,_modules_observeAndInitStack_js__WEBPACK_IMPORTED_MODULE_13__.observeAndInitStack)(); // анимация стека из about.html\r\n    (0,_modules_initAboutTitleLettersAnimation_js__WEBPACK_IMPORTED_MODULE_23__.initAboutTitleLettersAnimation)();\r\n  }\r\n\r\n  // Выполняем только на странице blog.html\r\n  if (document.body.classList.contains(\"page-blog\")) {\r\n    const blogs = await (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_14__.fetchBlogPosts)();\r\n    (0,_modules_fetchBlog_js__WEBPACK_IMPORTED_MODULE_15__.initBlogList)(blogs, { full: true }); // все статьи\r\n    requestAnimationFrame(() => {\r\n      document.querySelectorAll(\".js-stack-cards\").forEach((el) => {\r\n        new _modules_animateStack_js__WEBPACK_IMPORTED_MODULE_12__.StackCards(el);\r\n      });\r\n    });\r\n    (0,_modules_initBlogSearch_js__WEBPACK_IMPORTED_MODULE_24__.initBlogSearch)();\r\n  }\r\n  // Выполняем только на странице blog-one.html\r\n  if (document.body.classList.contains(\"page-blog-one\")) {\r\n    await (0,_modules_renderSingleArticle_js__WEBPACK_IMPORTED_MODULE_17__.renderSingleArticle)();\r\n    requestAnimationFrame(() => {\r\n      (0,_modules_playBtn_js__WEBPACK_IMPORTED_MODULE_11__.initVideoPlayer)(); // если статья с видео\r\n      (0,_modules_initSlider_js__WEBPACK_IMPORTED_MODULE_2__.initBlogSlider)(); // если статья со слайдером\r\n    });\r\n    (0,_modules_asideBtn_js__WEBPACK_IMPORTED_MODULE_10__.asideBtn)();\r\n  }\r\n  if (document.body.classList.contains(\"page-gallery\")) {\r\n    const galleryData = await (0,_modules_renderGallery_js__WEBPACK_IMPORTED_MODULE_18__.fetchGallery)();\r\n    (0,_modules_crateTabs_js__WEBPACK_IMPORTED_MODULE_20__.renderTabs)(galleryData); // Рисуем табы\r\n    (0,_modules_renderGallery_js__WEBPACK_IMPORTED_MODULE_18__.renderGallery)(galleryData); // Рисуем галерею\r\n    (0,_modules_crateTabs_js__WEBPACK_IMPORTED_MODULE_20__.initTabsLogic)(); // Включаем связь между ними\r\n    (0,_modules_animateGalleyCard_js__WEBPACK_IMPORTED_MODULE_19__[\"default\"])();\r\n  }\r\n  if (document.body.classList.contains(\"page-contacts\")) {\r\n    (0,_modules_initGallery3d_js__WEBPACK_IMPORTED_MODULE_21__.initGallery3d)();\r\n  }\r\n});\r\n\n\n//# sourceURL=webpack://gulp-freel/./src/js/index.js?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = (document && document.baseURI) || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkgulp_freel"] = self["webpackChunkgulp_freel"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["shared","vendor"], () => (__webpack_require__("./src/js/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;