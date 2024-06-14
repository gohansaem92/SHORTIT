(() => {
var exports = {};
exports.id = 892;
exports.ids = [892];
exports.modules = {

/***/ 5123:
/***/ ((module) => {

// Exports
module.exports = {
	"qrcodeItem": "QRCodeList_qrcodeItem__tT62i",
	"qrcode": "QRCodeList_qrcode__HD3dF",
	"qrCodeItemContent": "QRCodeList_qrCodeItemContent__y9TQi",
	"buttons": "QRCodeList_buttons__CHZ7_",
	"title": "QRCodeList_title__l_rez",
	"date": "QRCodeList_date__t4F_W",
	"link": "QRCodeList_link__A_Xbl",
	"qrcodeList": "QRCodeList_qrcodeList__NS0Sg"
};


/***/ }),

/***/ 5424:
/***/ ((module) => {

// Exports
module.exports = {
	"page": "QRCodeListPage_page__ss0EO",
	"header": "QRCodeListPage_header__q1P3K",
	"title": "QRCodeListPage_title__dTmbq"
};


/***/ }),

/***/ 4079:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ QRCodeList)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./lib/formatDate.js
var formatDate = __webpack_require__(7670);
// EXTERNAL MODULE: ./public/calendar.svg
var calendar = __webpack_require__(2292);
// EXTERNAL MODULE: ./public/link.svg
var public_link = __webpack_require__(315);
// EXTERNAL MODULE: ./components/QRCodeList.module.css
var QRCodeList_module = __webpack_require__(5123);
var QRCodeList_module_default = /*#__PURE__*/__webpack_require__.n(QRCodeList_module);
// EXTERNAL MODULE: ./components/Card.js
var Card = __webpack_require__(9143);
// EXTERNAL MODULE: ./components/Button.js
var Button = __webpack_require__(4759);
// EXTERNAL MODULE: ./components/Link.js
var Link = __webpack_require__(6250);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "react-qr-code"
const external_react_qr_code_namespaceObject = require("react-qr-code");
var external_react_qr_code_default = /*#__PURE__*/__webpack_require__.n(external_react_qr_code_namespaceObject);
;// CONCATENATED MODULE: ./components/QRCode.js



function downloadSVG(name, svg) {
    const base64doc = window.btoa(svg.outerHTML);
    const width = parseInt(svg.getAttribute("width"));
    const height = parseInt(svg.getAttribute("height"));
    const image = document.createElement("img");
    image.src = "data:image/svg+xml;base64," + base64doc;
    image.onload = ()=>{
        const canvas = document.createElement("canvas");
        canvas.setAttribute("width", width);
        canvas.setAttribute("height", height);
        const context = canvas.getContext("2d");
        context.drawImage(image, 0, 0, width, height);
        const dataURL = canvas.toDataURL("image/png");
        const a = document.createElement("a");
        a.download = `${name}.png`;
        a.href = dataURL;
        a.click();
    };
}
function QRCode({ className , title , value  }) {
    const svgRef = (0,external_react_.useRef)();
    function handleQRClick() {
        downloadSVG(title, svgRef.current);
    }
    return /*#__PURE__*/ jsx_runtime_.jsx((external_react_qr_code_default()), {
        className: className,
        value: value,
        onClick: handleQRClick,
        ref: svgRef
    });
}

;// CONCATENATED MODULE: ./components/QRCodeList.js










function QRCodeItem({ value , onDelete  }) {
    function handleDelete() {
        onDelete(value._id);
    }
    const { _id: id , title , url , updatedAt  } = value;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
        className: (QRCodeList_module_default()).qrcodeItem,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(QRCode, {
                className: (QRCodeList_module_default()).qrcode,
                title: title,
                value: url
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (QRCodeList_module_default()).qrCodeItemContent,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (QRCodeList_module_default()).title,
                        children: title
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (QRCodeList_module_default()).date,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: calendar/* default */.Z,
                                alt: "calendar"
                            }),
                            (0,formatDate/* default */.Z)(updatedAt)
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (QRCodeList_module_default()).link,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: public_link/* default */.Z,
                                alt: "link"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Link/* default */.Z, {
                                variant: "primary",
                                href: value.url,
                                target: "_blank",
                                children: value.url
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (QRCodeList_module_default()).buttons,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                        variant: "outline",
                        as: Link/* default */.Z,
                        href: `/qrcodes/${id}`,
                        children: "수정"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                        variant: "minimal",
                        onClick: handleDelete,
                        children: "삭제"
                    })
                ]
            })
        ]
    });
}
function QRCodeList({ items =[] , onDelete  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("ul", {
        className: (QRCodeList_module_default()).qrcodeList,
        children: items.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx(QRCodeItem, {
                    value: item,
                    onDelete: onDelete
                })
            }, item._id))
    });
}


/***/ }),

/***/ 7969:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 6906:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ QRCodeListPage),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_QRCodeList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4079);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4759);
/* harmony import */ var _components_Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6250);
/* harmony import */ var _styles_QRCodeListPage_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5424);
/* harmony import */ var _styles_QRCodeListPage_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_QRCodeListPage_module_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _db_dbConnect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1155);
/* harmony import */ var _db_models_QRCode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7969);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib_axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1979);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_axios__WEBPACK_IMPORTED_MODULE_8__]);
_lib_axios__WEBPACK_IMPORTED_MODULE_8__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










async function getServerSideProps() {
    await (0,_db_dbConnect__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    const qrCodes = await _db_models_QRCode__WEBPACK_IMPORTED_MODULE_6__/* ["default"].find */ .Z.find();
    return {
        props: {
            qrCodes: JSON.parse(JSON.stringify(qrCodes))
        }
    };
}
function QRCodeListPage({ qrCodes: initialQRCodes  }) {
    const [qrCodes, setQRCodes] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(initialQRCodes);
    async function handleDelete(id) {
        await _lib_axios__WEBPACK_IMPORTED_MODULE_8__/* ["default"]["delete"] */ .Z["delete"](`/qrcodes/${id}`);
        setQRCodes((prev)=>prev.filter((qrCode)=>qrCode._id !== id));
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: "QRCode 만들기 - Shortit"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_QRCodeListPage_module_css__WEBPACK_IMPORTED_MODULE_9___default().page),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
                        className: (_styles_QRCodeListPage_module_css__WEBPACK_IMPORTED_MODULE_9___default().header),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: (_styles_QRCodeListPage_module_css__WEBPACK_IMPORTED_MODULE_9___default().title),
                                children: "QRCode 만들기"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                as: _components_Link__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
                                href: "/qrcodes/new",
                                children: "새로 만들기"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_QRCodeList__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        items: qrCodes,
                        onDelete: handleDelete
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1185:
/***/ ((module) => {

"use strict";
module.exports = require("mongoose");

/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9648:
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [636,675,664,556,155,250,72], () => (__webpack_exec__(6906)));
module.exports = __webpack_exports__;

})();