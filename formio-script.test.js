(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["FormioScript"] = factory();
	else
		root["FormioScript"] = factory();
})(globalThis, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "init": () => (/* binding */ init)
});

;// CONCATENATED MODULE: ./src/matrixHelpers/FormioScript/index.js
const defaultVersion = window.formioQldCdnVersion || "v1/v1.x.x-latest";
const createScripts = (scripts, i, mainResolve) => {
  if (i > scripts.length - 1) {
    FormioLoader.initFormio();
    mainResolve();
    return;
  }

  const {
    type,
    async,
    src,
    href,
    rel
  } = scripts[i];

  if (!document.querySelector(`${type}[src='${src}']`) && !document.querySelector(`${type}[href='${href}']`)) {
    const promise = new Promise(resolve => {
      const elem = document.createElement(type);
      if (async !== undefined) elem.setAttribute("async", async);
      if (src !== undefined) elem.setAttribute("src", src);
      if (href !== undefined) elem.setAttribute("href", href);
      if (rel !== undefined) elem.setAttribute("rel", rel);
      document.body.appendChild(elem);

      elem.onload = () => {
        console.info("FormioScript loaded:", src || href);
        resolve();
      };
    });
    promise.then(() => {
      createScripts(scripts, i + 1, mainResolve);
    });
  } else {
    createScripts(scripts, i + 1, mainResolve);
  }
};
const getDefaultScripts = ({
  subdomain,
  version = defaultVersion
}) => {
  return [{
    type: "script",
    src: `https://${subdomain}.qgov.net.au/formio-qld/${version}/formio.full.js`,
    async: false
  }, {
    type: "script",
    src: `https://${subdomain}.qgov.net.au/formio-qld/${version}/premium.min.js`,
    async: false
  }, {
    type: "script",
    src: `https://${subdomain}.qgov.net.au/formio-qld/${version}/formio-qld.js`,
    async: false
  }, // note: formio-loader should always load last
  {
    type: "script",
    src: `https://${subdomain}.qgov.net.au/formio-qld/${version}/formio-loader.js`,
    async: false
  }, {
    type: "link",
    href: `https://${subdomain}.qgov.net.au/formio-qld/${version}/formio.full.min.css`,
    rel: "stylesheet"
  }, {
    type: "link",
    href: `https://${subdomain}.qgov.net.au/formio-qld/${version}/premium.css`,
    rel: "stylesheet"
  } // {
  //   type: "link",
  //   href: `https://${subdomain}.qgov.net.au/formio-qld/${version}/formio-qld.min.css`,
  //   rel: "stylesheet",
  // },
  ];
};
const initScript = scripts => new Promise(resolve => {
  if (window.formioScriptLoaded) {
    if (typeof FormioLoader !== "undefined") setTimeout(() => {
      FormioLoader.initFormio();
      resolve();
    });
  } else {
    window.formioScriptLoaded = true;
    createScripts(scripts, 0, resolve);
  }
});
;// CONCATENATED MODULE: ./src/matrixHelpers/FormioScript/scriptTest.js

const scripts = getDefaultScripts({
  subdomain: "test-static"
});
const init = () => initScript(scripts);
/******/ 	return __webpack_exports__;
/******/ })()
;
});