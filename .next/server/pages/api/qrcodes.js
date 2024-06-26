"use strict";
(() => {
var exports = {};
exports.id = 865;
exports.ids = [865];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 9257:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const qrcodeSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({
    title: {
        type: String,
        default: ""
    },
    url: {
        type: String,
        default: ""
    }
}, {
    timestamps: true
});
const QRCode = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.QRCode) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model("QRCode", qrcodeSchema);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QRCode);


/***/ }),

/***/ 8474:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _db_dbConnect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7086);
/* harmony import */ var _db_models_QRCode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9257);


async function handler(req, res) {
    await (0,_db_dbConnect__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
    switch(req.method){
        case "POST":
            const newQRCode = await _db_models_QRCode__WEBPACK_IMPORTED_MODULE_1__/* ["default"].create */ .Z.create(req.body);
            res.status(201).send(newQRCode);
            break;
        case "GET":
            const qrcodes = await _db_models_QRCode__WEBPACK_IMPORTED_MODULE_1__/* ["default"].find */ .Z.find();
            res.send(qrcodes);
            break;
        default:
            res.status(404).send();
            break;
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [86], () => (__webpack_exec__(8474)));
module.exports = __webpack_exports__;

})();