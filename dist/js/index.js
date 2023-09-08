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

eval("__webpack_require__.r(__webpack_exports__);\nconst btnBurger = document.querySelector('.menu-burger');\nconst menuBody = document.querySelector('.menu-body');\n\ndocument.addEventListener('click', menu);\nfunction menu(event) {\n    if (event.target.closest('.menu-burger')) {\n        menuBody.classList.toggle('active');\n        btnBurger.classList.toggle('active');\n    }\n    if (!event.target.closest('.menu-burger') & !event.target.closest('.menu-body')\n  ) {\n        menuBody.classList.remove('active');\n        btnBurger.classList.remove('active');\n    }\n}\n\nnew Swiper('.swiper', {\n  loop: true, \n  navigation: {\n    nextEl: '.swiper-button-next',\n    prevEl: '.swiper-button-prev',\n  },\n\n  pagination: {\n    el: '.swiper-pagination',\n    clickable: true,\n  },\n  keyboard: {\n    enabled: true,\n  }\n})\n\n\n//# sourceURL=webpack://new-gulp/./src/js/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/index.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;