(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 2246:
/***/ ((module) => {

// Exports
module.exports = {
	"style": {"fontFamily":"'__Noto_Sans_KR_2c58c1', '__Noto_Sans_KR_Fallback_2c58c1'","fontStyle":"normal"},
	"className": "__className_2c58c1"
};


/***/ }),

/***/ 6028:
/***/ ((module) => {

// Exports
module.exports = {
	"app": "App_app___6ul9",
	"header": "App_header__kD6M4",
	"container": "App_container__DcDpc",
	"nav": "App_nav__c9ITJ",
	"links": "App_links__wgRck",
	"main": "App_main__nOUum"
};


/***/ }),

/***/ 9533:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/@next/font/google/target.css?{"path":"pages\\_app.js","import":"Noto_Sans_KR","arguments":[{"weight":["400","500"],"subsets":["latin"]}],"variableName":"notoSansKR"}
var target_path_pages_app_js_import_Noto_Sans_KR_arguments_weight_400_500_subsets_latin_variableName_notoSansKR_ = __webpack_require__(2246);
var target_path_pages_app_js_import_Noto_Sans_KR_arguments_weight_400_500_subsets_latin_variableName_notoSansKR_default = /*#__PURE__*/__webpack_require__.n(target_path_pages_app_js_import_Noto_Sans_KR_arguments_weight_400_500_subsets_latin_variableName_notoSansKR_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./public/logo.svg
/* harmony default export */ const logo = ({"src":"/_next/static/media/logo.177e5a6d.svg","height":43,"width":154,"blurWidth":0,"blurHeight":0});
// EXTERNAL MODULE: ./styles/App.module.css
var App_module = __webpack_require__(6028);
var App_module_default = /*#__PURE__*/__webpack_require__.n(App_module);
// EXTERNAL MODULE: ./styles/global.css
var global = __webpack_require__(9605);
// EXTERNAL MODULE: ./components/Link.js
var Link = __webpack_require__(6250);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./pages/_app.js








function App({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                    children: "Shortit"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `${(App_module_default()).app} ${(target_path_pages_app_js_import_Noto_Sans_KR_arguments_weight_400_500_subsets_latin_variableName_notoSansKR_default()).className}`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("header", {
                        className: (App_module_default()).header,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                            className: `${(App_module_default()).nav} ${(App_module_default()).container}`,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(Link/* default */.Z, {
                                    href: "/",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        width: 93,
                                        height: 26,
                                        src: logo,
                                        alt: "Shortit"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (App_module_default()).links,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(Link/* default */.Z, {
                                            href: "/short-links",
                                            children: "주소 줄이기"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Link/* default */.Z, {
                                            href: "/qrcodes",
                                            children: "QR코드"
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("main", {
                        className: `${(App_module_default()).main} ${(App_module_default()).container}`,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                            ...pageProps
                        })
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 9605:
/***/ (() => {



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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [636,675,664,250], () => (__webpack_exec__(9533)));
module.exports = __webpack_exports__;

})();