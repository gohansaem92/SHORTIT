exports.id = 556;
exports.ids = [556];
exports.modules = {

/***/ 5427:
/***/ ((module) => {

// Exports
module.exports = {
	"button": "Button_button__AxfIB",
	"primary": "Button_primary__1n7q8",
	"secondary": "Button_secondary__pRvhC",
	"outline": "Button_outline___JmXY",
	"minimal": "Button_minimal__XDeHx"
};


/***/ }),

/***/ 4759:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Button_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5427);
/* harmony import */ var _Button_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Button_module_css__WEBPACK_IMPORTED_MODULE_1__);


const VARIANTS = {
    primary: (_Button_module_css__WEBPACK_IMPORTED_MODULE_1___default().primary),
    secondary: (_Button_module_css__WEBPACK_IMPORTED_MODULE_1___default().secondary),
    minimal: (_Button_module_css__WEBPACK_IMPORTED_MODULE_1___default().minimal),
    outline: (_Button_module_css__WEBPACK_IMPORTED_MODULE_1___default().outline)
};
function Button({ className ="" , variant , as: AsComponent , ...rest }) {
    const classNames = `${(_Button_module_css__WEBPACK_IMPORTED_MODULE_1___default().button)} ${VARIANTS[variant] ?? (_Button_module_css__WEBPACK_IMPORTED_MODULE_1___default().primary)} ${className}`;
    if (AsComponent) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AsComponent, {
            className: classNames,
            ...rest
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        className: classNames,
        ...rest
    });
}


/***/ }),

/***/ 1979:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const axios = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
    baseURL: "/api/"
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (axios);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;