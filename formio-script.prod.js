/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/matrixHelpers/FormioScript/index.js
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
var getDefaultScripts = function getDefaultScripts(_ref2) {
  var subdomain = _ref2.subdomain,
      _ref2$version = _ref2.version,
      version = _ref2$version === void 0 ? "v1/v1.x.x-latest" : _ref2$version;
  return [{
    type: "script",
    src: "https://".concat(subdomain, ".qgov.net.au/formio-qld/").concat(version, "/formio.full.js"),
    async: false
  }, {
    type: "script",
    src: "https://".concat(subdomain, ".qgov.net.au/formio-qld/").concat(version, "/premium.min.js"),
    async: false
  }, {
    type: "script",
    src: "https://".concat(subdomain, ".qgov.net.au/formio-qld/").concat(version, "/formio-qld.js"),
    async: false
  }, // note: formio-loader should always load last
  {
    type: "script",
    src: "https://".concat(subdomain, ".qgov.net.au/formio-qld/").concat(version, "/formio-loader.js"),
    async: false
  }, {
    type: "link",
    href: "https://".concat(subdomain, ".qgov.net.au/formio-qld/").concat(version, "/formio.full.min.css"),
    rel: "stylesheet"
  }, {
    type: "link",
    href: "https://".concat(subdomain, ".qgov.net.au/formio-qld/").concat(version, "/premium.css"),
    rel: "stylesheet"
  }, {
    type: "link",
    href: "https://".concat(subdomain, ".qgov.net.au/formio-qld/").concat(version, "/formio-qld.min.css"),
    rel: "stylesheet"
  }];
};
;// CONCATENATED MODULE: ./src/matrixHelpers/FormioScript/scriptProd.js

var version = window.formioQldCdnVersion || "v1/v1.x.x-latest";
var scripts = [{
  type: "script",
  src: "https://static.qgov.net.au/formio-qld/".concat(version, "/formio.full.min.js"),
  async: false
}, {
  type: "script",
  src: "https://static.qgov.net.au/formio-qld/".concat(version, "/premium.min.js"),
  async: false
}, {
  type: "script",
  src: "https://static.qgov.net.au/formio-qld/".concat(version, "/formio-qld.min.js"),
  async: false
}, // note: formio-loader should always load last
{
  type: "script",
  src: "https://static.qgov.net.au/formio-qld/".concat(version, "/formio-loader.min.js"),
  async: false
}, {
  type: "link",
  href: "https://static.qgov.net.au/formio-qld/".concat(version, "/formio.full.min.css"),
  rel: "stylesheet"
}, {
  type: "link",
  href: "https://static.qgov.net.au/formio-qld/".concat(version, "/premium.css"),
  rel: "stylesheet"
}, {
  type: "link",
  href: "https://dev-static.qgov.net.au/formio-qld/".concat(version, "/formio-qld.min.css"),
  rel: "stylesheet"
}];
createScripts(scripts);
/******/ })()
;