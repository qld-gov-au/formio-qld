(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["FormioLoader"] = factory();
	else
		root["FormioLoader"] = factory();
})(self, function() {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initFormio": function() { return /* binding */ initFormio; },
/* harmony export */   "initFormioInstance": function() { return /* binding */ initFormioInstance; }
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var initFormioInstance = function initFormioInstance(formioElem, opts) {
  // if already initiated, reject
  if (formioElem.dataset.formUrl) return; // if doesn't have required options, reject

  if (!formioElem.dataset.envUrl || !formioElem.dataset.projectName || !formioElem.dataset.formName) return;
  var bodyContainer = $("body");
  var defaultRedirect = "contact-us/response/";
  /*
   * setup config
   */

  var baseUrl = "https://".concat(opts.envUrl.trim());
  var formioContainerId = formioElem.getAttribute("id");
  var submitBtn = $("#".concat(formioContainerId, " button[name='data[submit]']"));
  var formName = ""; // Check if value is true/exists and is numeric

  if (opts.form_revision) {
    formName = "".concat(opts.formName, "/v/").concat(opts.form_revision);
  } else {
    formName = opts.formName;
  }

  var projectName = opts.projectName;
  var formConfirmation = opts.formConfirmation || defaultRedirect;
  var namespace = opts.namespace || "formio-".concat(projectName);
  var formUrl = "".concat(baseUrl, "/").concat(projectName, "/").concat(formName);
  /*
   * init formio instance
   */

  var formio = new Formio(formUrl, {
    base: baseUrl,
    project: "".concat(baseUrl, "/").concat(projectName),
    namespace: namespace
  });
  formioElem.dataset.formio = JSON.stringify(formio);
  formioElem.dataset.formUrl = formUrl;
  /*
   * load formio form
   */

  Formio.createForm(formioElem, formUrl, // form,
  {
    // Turn off default buttons
    buttonSettings: {
      showCancel: false,
      showPrevious: false,
      showNext: false,
      showSubmit: false
    },
    i18n: {
      en: {
        pattern: "Must use the format shown"
      }
    },
    formio: formio,
    namespace: formio.options.namespace
  }).then(function (wizard) {
    wizard.formio = formio;
    wizard.options.formio = formio; // eslint-disable-next-line no-underscore-dangle

    var formTitle = wizard._form.title; // eslint-disable-next-line no-underscore-dangle

    var formModified = wizard._form.modified; // Force new tab on formlinks

    bodyContainer.on("click", "#".concat(formioContainerId, " a"), function (e) {
      e.target.target = "_blank";
    }); // Change event/GTM

    wizard.on("click", function (change) {
      var changeObj = change;

      if (typeof changeObj.changed !== "undefined" && typeof changeObj.changed.component !== "undefined") {
        window.dataLayer.push({
          event: "formio-interaction",
          "formio-name": formTitle,
          "formio-input-id": changeObj.changed.component.id,
          "formio-input-type": changeObj.changed.component.type,
          "formio-input-value": changeObj.changed.component.value,
          "formio-input-key": changeObj.changed.component.key,
          "formio-input-label-raw": changeObj.changed.component.label,
          "formio-version": formModified,
          "formio-category": "Form: ".concat(formTitle),
          "formio-action": "Value changed"
        });
      }
    }); // Must use 'applicationSubmit' custom event on primary submit

    wizard.on("applicationSubmit", function () {
      submitBtn.attr("disabled", true);
      wizard.submit().then(function () {
        if (formConfirmation) {
          window.location.href = "/".concat(formConfirmation);
        } else {
          // No confirmation set. Using generic redirection
          window.location.href = defaultRedirect;
        }
      }).catch(function () {
        console.debug("Submission error");
      });
    });
  });
}; // polyfill plugin function to fix the namespace option doesn't pass to Formio.makeRequest


var NamespacePolyfillPlugin = {
  priority: 0,
  preRequest: function preRequest(requestArgs) {
    if (requestArgs.formio) {
      var formioInstance = document.querySelector("[data-form-url=\"".concat(requestArgs.formio.formUrl, "\"]"));

      if (formioInstance) {
        requestArgs.formio = JSON.parse(formioInstance.dataset.formio);
        requestArgs.opts.formio = requestArgs.formio;
      }

      if (requestArgs.formio.options) requestArgs.opts.namespace = requestArgs.formio.options.namespace;
    }

    return Promise.resolve(null);
  }
};

var customiseErrorMessage = function customiseErrorMessage() {
  var newFunc = Formio.Form.prototype.errorForm.bind({});

  Formio.Form.prototype.errorForm = function (err) {
    if (typeof err === "string" && err.indexOf("Could not connect to API server") !== -1 || _typeof(err) === "object" && err.networkError) {
      console.warn("formio error: ", err);
      return newFunc("This form is currently unavailable due to maintenance. Please try again later.");
    }

    return newFunc(err);
  };
};

var initFormio = function initFormio() {
  window.dataLayer = window.dataLayer || []; // Init form

  Formio.icons = "fontawesome";
  if (premium) Formio.use(premium); // custom error message

  customiseErrorMessage(); // register plugin

  Formio.registerPlugin(NamespacePolyfillPlugin, "namespacePolyfill");
  document.querySelectorAll("[data-formio]").forEach(function (formioElem) {
    initFormioInstance(formioElem, formioElem.dataset);
  });
};

window.onload = function () {
  initFormio();
}; // Persistent fix for iPhone/Safari


window.onpageshow = function (event) {
  if (event.persisted) {
    window.location.reload();
  }
};


/******/ 	return __webpack_exports__;
/******/ })()
;
});