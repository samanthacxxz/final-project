/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/firebaseConfig.js":
/*!**********************************!*\
  !*** ./src/js/firebaseConfig.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst firebaseConfig = {\n  apiKey: \"AIzaSyAFad86HmK48XkBMDTkGwYHehUga_XDU60\",\n  authDomain: \"final-project-5f1e6.firebaseapp.com\",\n  projectId: \"final-project-5f1e6\",\n  storageBucket: \"final-project-5f1e6.appspot.com\",\n  messagingSenderId: \"705803816617\",\n  appId: \"1:705803816617:web:ac5e4bb3c132f49d73a3b8\"\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (firebaseConfig);\n\n//# sourceURL=webpack://final-project/./src/js/firebaseConfig.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _firebaseConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./firebaseConfig */ \"./src/js/firebaseConfig.js\");\n/* harmony import */ var _loginValidation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loginValidation */ \"./src/js/loginValidation.js\");\n/* harmony import */ var _signupValidation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signupValidation */ \"./src/js/signupValidation.js\");\n// IMPORTS\n\nconsole.log(_firebaseConfig__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\n\n// SELECTING LOG IN FORM ELEMENTS\n\nconst loginForm = document.querySelector('.form-login');\nconst loginFormContainer = document.querySelector('.form-login-section');\nconst emailInput = document.querySelector('.email');\nconst passwordInput = document.querySelector('.password');\nconst loginButton = document.querySelector('.login-button');\nconst emailError = document.querySelector('.email-error');\nconst passwordError = document.querySelector('.password-error');\nconst submissionError = document.querySelector('.submission-error');\n\n// SELECTING SIGN UP FORM ELEMENTS \n\nconst signupForm = document.querySelector('.signup-form');\nconst signupFormContainer = document.querySelector('.form-signup-section');\nconst signupFirstnameInput = document.querySelector('.firstname');\nconst signupLastnameInput = document.querySelector('.lastname');\nconst signupEmailInput = document.querySelector('.signup-email');\nconst signupPasswordInput = document.querySelector('.signup-password');\nconst signupError = document.querySelector('.signup-error');\nconst closeSignupFormButton = document.querySelector('.signup-form__close');\nconst openSignupFormButton = document.querySelector('.signup-form__open');\nconst signupButton = document.querySelector('.signup-button');\n\n// EVENT LISTENER TO LOG IN BUTTON\n\nloginButton.addEventListener('click', e => {\n  e.preventDefault();\n  (0,_loginValidation__WEBPACK_IMPORTED_MODULE_1__.validateLoginForm)(emailInput.value, passwordInput.value, emailError, passwordError);\n});\n(0,_loginValidation__WEBPACK_IMPORTED_MODULE_1__.validateLoginForm)(emailInput.value, passwordInput.value, emailError, passwordError);\n\n// EVENT LISTENER - OPEN SIGN UP FORM \n\nopenSignupFormButton.addEventListener('click', e => {\n  e.preventDefault();\n  console.log(\"Open Signup Form Button clicked\");\n  signupFormContainer.style.display = 'flex';\n  loginFormContainer.style.display = 'none';\n});\n\n// EVENT LISTENER - CLOSE SIGN UP FORM\n\ncloseSignupFormButton.addEventListener('click', e => {\n  e.preventDefault();\n  console.log('Sign In form closed!');\n  signupFormContainer.style.display = 'none';\n  loginFormContainer.style.display = 'flex';\n});\n\n// EVENT LISTENER - SIGN UP BUTTON \n\nsignupButton.addEventListener('click', e => {\n  e.preventDefault();\n  (0,_signupValidation__WEBPACK_IMPORTED_MODULE_2__.validateSignupForm)(signupFirstnameInput.value, signupLastnameInput.value, signupEmailInput.value, signupPasswordInput.value, signupError);\n});\n\n//# sourceURL=webpack://final-project/./src/js/index.js?");

/***/ }),

/***/ "./src/js/loginValidation.js":
/*!***********************************!*\
  !*** ./src/js/loginValidation.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   validateLoginForm: function() { return /* binding */ validateLoginForm; }\n/* harmony export */ });\nconst validateLoginForm = (email, password, emailErrorElement, passwordErrorElement) => {\n  const errors = {\n    errorStatus: false,\n    emailError: '',\n    passwordError: ''\n  };\n  emailErrorElement.style.visibility = 'hidden';\n  passwordErrorElement.style.visibility = 'hidden';\n  if (!email && !password) {\n    errors.errorStatus = true;\n    errors.emailError = 'Email is required!', errors.passwordError = 'Password is required!';\n    emailErrorElement.style.visibility = 'visible';\n    passwordErrorElement.style.visibility = 'visible';\n    emailErrorElement.textContent = errors.emailError;\n    passwordErrorElement.textContent = errors.passwordError;\n  } else if (!email) {\n    errors.errorStatus = true;\n    errors.emailError = 'Email is required!';\n    errors.passwordError = '';\n    emailErrorElement.style.visibility = 'visible';\n    passwordErrorElement.style.visibility = 'hidden';\n    emailErrorElement.textContent = errors.emailError;\n    passwordErrorElement.textContent = errors.passwordError;\n  } else if (!password) {\n    errors.errorStatus = true;\n    errors.emailError = '';\n    errors.passwordError = 'Password is required!';\n    emailErrorElement.style.visibility = 'hidden';\n    passwordErrorElement.style.visibility = 'visible';\n    emailErrorElement.textContent = errors.emailError;\n    passwordErrorElement.textContent = errors.passwordError;\n  } else {\n    errors.errorStatus = false;\n    errors.emailError = '';\n    errors.passwordError = '';\n    emailErrorElement.style.visibility = 'hidden';\n    passwordErrorElement.style.visibility = 'hidden';\n    emailErrorElement.textContent = errors.emailError;\n    passwordErrorElement.textContent = errors.passwordError;\n  }\n  const loginFormStatus = () => {\n    return errors.errorStatus;\n  };\n  return {\n    loginFormStatus\n  };\n};\n\n\n//# sourceURL=webpack://final-project/./src/js/loginValidation.js?");

/***/ }),

/***/ "./src/js/signupValidation.js":
/*!************************************!*\
  !*** ./src/js/signupValidation.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   validateSignupForm: function() { return /* binding */ validateSignupForm; }\n/* harmony export */ });\nconst validateSignupForm = (firstname, lastname, email, password, errorMessage) => {\n  let errorStatus = false;\n  if (!firstname || !lastname || !email || !password) {\n    errorStatus = true;\n    errorMessage.style.visibility = 'visible';\n    errorMessage.textContent = 'Please fill in all input fields!';\n    console.log('fill in!');\n  } else {\n    errorStatus = false;\n    errorMessage.style.visiibility = 'hidden';\n    errorMessage.textContent = '';\n    console.log('all good!');\n  }\n  const signupErrorStatus = () => {\n    return errorStatus;\n  };\n  return {\n    signupErrorStatus\n  };\n};\n\n\n//# sourceURL=webpack://final-project/./src/js/signupValidation.js?");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;