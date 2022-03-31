/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/matrixHelpers/formioScript/createScripts.js
var createScripts = function createScripts(scripts) {
  scripts.forEach(function (_ref) {
    var type = _ref.type,
        async = _ref.async,
        src = _ref.src,
        href = _ref.href,
        rel = _ref.rel;

    if (!document.querySelector("".concat(type, "[src='").concat(src, "']")) && !document.querySelector("".concat(type, "[href='").concat(href, "']"))) {
      var elem = document.createElement(type);
      if (async !== undefined) elem.setAttribute("async", async);
      if (src !== undefined) elem.setAttribute("src", src);
      if (href !== undefined) elem.setAttribute("href", href);
      if (rel !== undefined) elem.setAttribute("rel", rel);
      document.body.appendChild(elem);
    }
  });
};
;// CONCATENATED MODULE: ./src/matrixHelpers/formioScript/index.dev.js

var scripts = [{
  type: "script",
  src: "https://dev-static.qgov.net.au/formio-qld/v1/v1.x.x-latest/formio.full.js",
  async: false
}, {
  type: "script",
  src: "https://dev-static.qgov.net.au/formio-qld/v1/v1.x.x-latest/premium.min.js",
  async: false
}, {
  type: "script",
  src: "https://dev-static.qgov.net.au/formio-qld/v1/v1.x.x-latest/formio-qld.js",
  async: false
}, // note: formio-loader should always load last
{
  type: "script",
  src: "https://dev-static.qgov.net.au/formio-qld/v1/v1.x.x-latest/formio-loader.js",
  async: false
}, {
  type: "link",
  href: "https://dev-static.qgov.net.au/formio-qld/v1/v1.x.x-latest/formio.full.min.css",
  rel: "stylesheet"
}, {
  type: "link",
  href: "https://dev-static.qgov.net.au/formio-qld/v1/v1.x.x-latest/premium.css",
  rel: "stylesheet"
}, {
  type: "link",
  href: "https://dev-static.qgov.net.au/formio-qld/v1/v1.x.x-latest/formio-qld.min.css",
  rel: "stylesheet"
}];
createScripts(scripts);
/******/ })()
;