/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nmodule.exports = _classCallCheck;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/classCallCheck.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  return Constructor;\n}\n\nmodule.exports = _createClass;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/createClass.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _taggedTemplateLiteral(strings, raw) {\n  if (!raw) {\n    raw = strings.slice(0);\n  }\n\n  return Object.freeze(Object.defineProperties(strings, {\n    raw: {\n      value: Object.freeze(raw)\n    }\n  }));\n}\n\nmodule.exports = _taggedTemplateLiteral;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _libs_BeertecVideo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./libs/BeertecVideo */ \"./src/libs/BeertecVideo.js\");\n\nvar video = new _libs_BeertecVideo__WEBPACK_IMPORTED_MODULE_0__[\"default\"](320, 240, \"Your browser does not support the video tag.\");\nvar videoElement = document.getElementById(\"beertech_player\");\nvar playVideo = document.getElementById(\"play_video\");\nvideo.sources([{\n  src: \"./assets/video.mp4\",\n  type: \"video.mp4\"\n}, {\n  src: \"./assets/video.ogv\",\n  type: \"video/ogg\"\n}, {\n  src: \"./assets/video.webm\",\n  type: \"video/webm\"\n}]);\nvideo.render(videoElement);\nplayVideo.addEventListener(\"click\", function (clickEvent) {\n  if (video.videoCreated.paused) video.play();else video.pause();\n});\nconsole.log(video.videoCreated);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/libs/BeertecVideo.js":
/*!**********************************!*\
  !*** ./src/libs/BeertecVideo.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js\");\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nfunction _templateObject2() {\n  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([\"\", \"\", \"\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([\"\", \"\", \"\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nvar BeertechVideo = /*#__PURE__*/function () {\n  function BeertechVideo(width, height, supportMessage) {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, BeertechVideo);\n\n    this._width = width;\n    this._height = height;\n    this._supportMessage = supportMessage;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(BeertechVideo, [{\n    key: \"sources\",\n    value: function sources(_sources) {\n      return this._sources = _sources;\n    }\n  }, {\n    key: \"render\",\n    value: function render(videoElement) {\n      var videoCreated = setVideoTag(_templateObject(), this, videoElement);\n      this._videoCreated = videoCreated;\n      return videoCreated;\n    }\n  }, {\n    key: \"play\",\n    value: function play() {\n      this._videoCreated.play();\n    }\n  }, {\n    key: \"pause\",\n    value: function pause() {\n      this._videoCreated.pause();\n    }\n  }, {\n    key: \"videoCreated\",\n    get: function get() {\n      return this._videoCreated;\n    }\n  }]);\n\n  return BeertechVideo;\n}();\n\nvar setVideoTag = function setVideoTag() {\n  var videoTag = document.createElement(\"video\");\n\n  for (var _len = arguments.length, videoElement = new Array(_len), _key = 0; _key < _len; _key++) {\n    videoElement[_key] = arguments[_key];\n  }\n\n  videoTag.width = videoElement[1]._width;\n  videoTag.height = videoElement[1]._height;\n  videoTag.innerHTML = videoElement[1]._supportMessage;\n  videoTag.id = \"video\";\n  setSourceTag(_templateObject2(), videoElement[1], videoTag);\n  return videoElement[2].appendChild(videoTag);\n};\n\nvar setSourceTag = function setSourceTag() {\n  for (var _len2 = arguments.length, sourceValues = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {\n    sourceValues[_key2] = arguments[_key2];\n  }\n\n  sourceValues[1]._sources.forEach(function (video) {\n    var sourceTag = document.createElement(\"source\");\n    sourceTag.src = video.src;\n    sourceTag.type = video.type;\n    return sourceValues[2].appendChild(sourceTag);\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (BeertechVideo);\n\n//# sourceURL=webpack:///./src/libs/BeertecVideo.js?");

/***/ })

/******/ });