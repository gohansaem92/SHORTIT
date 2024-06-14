exports.id = 250;
exports.ids = [250];
exports.modules = {

/***/ 8596:
/***/ ((module) => {

// Exports
module.exports = {
	"link": "Link_link__1By9V",
	"primary": "Link_primary__sKzNq",
	"secondary": "Link_secondary__benXC"
};


/***/ }),

/***/ 6250:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Link)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Link_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8596);
/* harmony import */ var _Link_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Link_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);



const VARIANTS = {
    primary: (_Link_module_css__WEBPACK_IMPORTED_MODULE_2___default().primary),
    secondary: (_Link_module_css__WEBPACK_IMPORTED_MODULE_2___default().secondary)
};
function Link({ className ="" , variant , as: AsComponent , ...rest }) {
    const classNames = `${(_Link_module_css__WEBPACK_IMPORTED_MODULE_2___default().link)} ${VARIANTS[variant] ?? ""} ${className}`;
    if (AsComponent) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AsComponent, {
            className: classNames,
            ...rest
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        className: classNames,
        ...rest
    });
}


/***/ })

};
;