/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/matrixHelpers/FormioScript/index.js
const defaultVersion = window.formioQldCdnVersion || "v1/v1.x.x-latest";
const createScripts = (scripts, i = 0) => {
  if (i > scripts.length - 1) return;
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
      elem.onload = resolve;
    });
    promise.then(() => {
      createScripts(scripts, i + 1);
    });
  } else {
    createScripts(scripts, i + 1);
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
  }, {
    type: "link",
    href: `https://${subdomain}.qgov.net.au/formio-qld/${version}/formio-qld.min.css`,
    rel: "stylesheet"
  }];
};
;// CONCATENATED MODULE: ./src/matrixHelpers/FormioScript/scriptDev.js

const scripts = getDefaultScripts({
  subdomain: "dev-static"
});
createScripts(scripts);
/******/ })()
;