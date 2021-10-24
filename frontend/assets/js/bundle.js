/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/A0019-exercicio/form-control.ts":
/*!*********************************************!*\
  !*** ./src/A0019-exercicio/form-control.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var isEmail_1 = __importDefault(__webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'validator/lib/isEmail'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
var SHOW_ERROR_MESSAGES = 'show-error-message';
var form = document.querySelector('.form');
var username = document.querySelector('.username');
var email = document.querySelector('.email');
var password = document.querySelector('.password');
var password2 = document.querySelector('.password2');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    hideErrorMessages(this);
    checkForEmptyFields(username, email, password, password2);
    checkEmail(email);
    checkEqualPasswords(password, password2);
    if (shouldSendForm(this))
        console.log('FORMULÁRIO ENVIADO');
});
function checkForEmptyFields() {
    var inputs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        inputs[_i] = arguments[_i];
    }
    inputs.forEach(function (input) {
        if (!input.value)
            showErrorMessage(input, 'Campo não pode ficar vazio');
    });
}
function checkEmail(input) {
    if (!(0, isEmail_1.default)(input.value))
        showErrorMessage(input, 'Email inválido');
}
function checkEqualPasswords(password, password2) {
    if (password.value !== password2.value) {
        showErrorMessage(password, 'Senhas não batem');
        showErrorMessage(password2, 'Senhas não batem');
    }
}
function hideErrorMessages(form) {
    form
        .querySelectorAll('.' + SHOW_ERROR_MESSAGES)
        .forEach(function (item) { return item.classList.remove(SHOW_ERROR_MESSAGES); });
}
function showErrorMessage(input, msg) {
    var formFields = input.parentElement;
    var errorMessage = formFields.querySelector('.error-message');
    errorMessage.innerText = msg;
    formFields.classList.add(SHOW_ERROR_MESSAGES);
}
function shouldSendForm(form) {
    var send = true;
    form.querySelectorAll('.' + SHOW_ERROR_MESSAGES).forEach(function () { return (send = false); });
    return send;
}


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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!************************************************!*\
  !*** ./src/A0019-exercicio/A0019-exercicio.ts ***!
  \************************************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./form-control */ "./src/A0019-exercicio/form-control.ts");

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map