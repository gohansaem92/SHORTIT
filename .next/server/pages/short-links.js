(() => {
var exports = {};
exports.id = 905;
exports.ids = [905];
exports.modules = {

/***/ 9617:
/***/ ((module) => {

// Exports
module.exports = {
	"shortLinkList": "ShortLinkList_shortLinkList__D4UbS",
	"cardContent": "ShortLinkList_cardContent__NZcLg",
	"title": "ShortLinkList_title__OlVNW",
	"date": "ShortLinkList_date__U2Noe",
	"buttons": "ShortLinkList_buttons__Ic4_a",
	"link": "ShortLinkList_link__k7Sgn"
};


/***/ }),

/***/ 1705:
/***/ ((module) => {

// Exports
module.exports = {
	"page": "ShortLinkListPage_page__jS5cL",
	"header": "ShortLinkListPage_header__wxeCF",
	"title": "ShortLinkListPage_title__EjL6m"
};


/***/ }),

/***/ 2770:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ ShortLinkList)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./components/ShortLinkList.module.css
var ShortLinkList_module = __webpack_require__(9617);
var ShortLinkList_module_default = /*#__PURE__*/__webpack_require__.n(ShortLinkList_module);
// EXTERNAL MODULE: ./lib/formatDate.js
var formatDate = __webpack_require__(7670);
// EXTERNAL MODULE: ./public/calendar.svg
var calendar = __webpack_require__(2292);
// EXTERNAL MODULE: ./public/link.svg
var public_link = __webpack_require__(315);
;// CONCATENATED MODULE: ./public/reply.svg
/* harmony default export */ const reply = ({"src":"/_next/static/media/reply.b828bacd.svg","height":16,"width":16,"blurWidth":0,"blurHeight":0});
// EXTERNAL MODULE: ./components/Card.js
var Card = __webpack_require__(9143);
// EXTERNAL MODULE: ./components/Button.js
var Button = __webpack_require__(4759);
// EXTERNAL MODULE: ./components/Link.js
var Link = __webpack_require__(6250);
;// CONCATENATED MODULE: ./components/ShortLinkList.js










function ShortLinkItem({ value , onDelete  }) {
    function handleDelete() {
        onDelete(value._id);
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (ShortLinkList_module_default()).cardContent,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (ShortLinkList_module_default()).title,
                                children: value.title
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (ShortLinkList_module_default()).date,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: calendar/* default */.Z,
                                        alt: "calendar"
                                    }),
                                    (0,formatDate/* default */.Z)(value.createdAt)
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (ShortLinkList_module_default()).buttons,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                variant: "outline",
                                as: Link/* default */.Z,
                                href: `/short-links/${value._id}`,
                                children: "수정"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                variant: "minimal",
                                type: "button",
                                onClick: handleDelete,
                                children: "삭제"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default.Footer */.Z.Footer, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (ShortLinkList_module_default()).link,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: public_link/* default */.Z,
                                alt: "link"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Link/* default */.Z, {
                                variant: "primary",
                                href: `/${value.shortUrl}`,
                                target: "_blank",
                                children: [
                                    "http://13.125.244.173:30892",
                                    "/",
                                    value.shortUrl
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (ShortLinkList_module_default()).link,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: reply,
                                alt: "reply"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Link/* default */.Z, {
                                variant: "secondary",
                                href: value.url,
                                target: "_blank",
                                children: value.url
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
function ShortLinkList({ items =[] , onDelete  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("ul", {
        className: (ShortLinkList_module_default()).shortLinkList,
        children: items.map((url)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx(ShortLinkItem, {
                    value: url,
                    onDelete: ()=>onDelete(url._id)
                })
            }, url._id))
    });
}


/***/ }),

/***/ 6521:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const shortLinkSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({
    title: {
        type: String,
        default: ""
    },
    url: {
        type: String,
        default: ""
    },
    shortUrl: {
        type: String,
        default: ""
    }
}, {
    timestamps: true
});
const ShortLink = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.ShortLink) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model("ShortLink", shortLinkSchema);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShortLink);


/***/ }),

/***/ 8377:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ShortLinkListPage),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ShortLinkList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2770);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4759);
/* harmony import */ var _components_Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6250);
/* harmony import */ var _styles_ShortLinkListPage_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1705);
/* harmony import */ var _styles_ShortLinkListPage_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_ShortLinkListPage_module_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _db_models_ShortLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6521);
/* harmony import */ var _db_dbConnect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1155);
/* harmony import */ var _lib_axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1979);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_axios__WEBPACK_IMPORTED_MODULE_7__]);
_lib_axios__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










async function getServerSideProps() {
    await (0,_db_dbConnect__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
    const shortLinks = await _db_models_ShortLink__WEBPACK_IMPORTED_MODULE_5__/* ["default"].find */ .Z.find();
    if (shortLinks) {
        return {
            props: {
                shortLinks: JSON.parse(JSON.stringify(shortLinks))
            }
        };
    }
    return {
        notFound: true
    };
}
function ShortLinkListPage({ shortLinks: initialShortLinks  }) {
    const [shortLinks, setShortLinks] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(initialShortLinks);
    async function handleDelete(id) {
        await _lib_axios__WEBPACK_IMPORTED_MODULE_7__/* ["default"]["delete"] */ .Z["delete"](`/short-links/${id}`);
        setShortLinks((prev)=>prev.filter((shortLink)=>shortLink._id !== id));
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: "주소 줄이기 - Shortit"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_ShortLinkListPage_module_css__WEBPACK_IMPORTED_MODULE_9___default().page),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
                        className: (_styles_ShortLinkListPage_module_css__WEBPACK_IMPORTED_MODULE_9___default().header),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: (_styles_ShortLinkListPage_module_css__WEBPACK_IMPORTED_MODULE_9___default().title),
                                children: "주소 줄이기"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                as: _components_Link__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
                                href: "/short-links/new",
                                children: "새로 만들기"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ShortLinkList__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        items: shortLinks,
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
var __webpack_exports__ = __webpack_require__.X(0, [636,675,664,556,155,250,72], () => (__webpack_exec__(8377)));
module.exports = __webpack_exports__;

})();