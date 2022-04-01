/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/matrixHelpers/FormioScript/index.js
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var defaultVersion = window.formioQldCdnVersion || "v1/v1.x.x-latest";
var createScripts = function createScripts(scripts) {
  scripts.forEach( /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
      var type, async, src, href, rel, promise;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              type = _ref.type, async = _ref.async, src = _ref.src, href = _ref.href, rel = _ref.rel;

              if (!(!document.querySelector("".concat(type, "[src='").concat(src, "']")) && !document.querySelector("".concat(type, "[href='").concat(href, "']")))) {
                _context.next = 5;
                break;
              }

              promise = new Promise(function (resolve) {
                var elem = document.createElement(type);
                if (async !== undefined) elem.setAttribute("async", async);
                if (src !== undefined) elem.setAttribute("src", src);
                if (href !== undefined) elem.setAttribute("href", href);
                if (rel !== undefined) elem.setAttribute("rel", rel);
                document.body.appendChild(elem);
                elem.onload = resolve;
              });
              _context.next = 5;
              return promise;

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }());
};
var getDefaultScripts = function getDefaultScripts(_ref3) {
  var subdomain = _ref3.subdomain,
      _ref3$version = _ref3.version,
      version = _ref3$version === void 0 ? defaultVersion : _ref3$version;
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

var scripts = [{
  type: "script",
  src: "https://static.qgov.net.au/formio-qld/".concat(defaultVersion, "/formio.full.min.js"),
  async: false
}, {
  type: "script",
  src: "https://static.qgov.net.au/formio-qld/".concat(defaultVersion, "/premium.min.js"),
  async: false
}, {
  type: "script",
  src: "https://static.qgov.net.au/formio-qld/".concat(defaultVersion, "/formio-qld.min.js"),
  async: false
}, // note: formio-loader should always load last
{
  type: "script",
  src: "https://static.qgov.net.au/formio-qld/".concat(defaultVersion, "/formio-loader.min.js"),
  async: false
}, {
  type: "link",
  href: "https://static.qgov.net.au/formio-qld/".concat(defaultVersion, "/formio.full.min.css"),
  rel: "stylesheet"
}, {
  type: "link",
  href: "https://static.qgov.net.au/formio-qld/".concat(defaultVersion, "/premium.css"),
  rel: "stylesheet"
}, {
  type: "link",
  href: "https://dev-static.qgov.net.au/formio-qld/".concat(defaultVersion, "/formio-qld.min.css"),
  rel: "stylesheet"
}];
createScripts(scripts);
/******/ })()
;