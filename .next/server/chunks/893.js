exports.id = 893;
exports.ids = [893];
exports.modules = {

/***/ 7910:
/***/ ((module) => {

// Exports
module.exports = {
	"shortLinkForm": "ShortLinkForm_shortLinkForm__b7IlI",
	"label": "ShortLinkForm_label__90Mo3",
	"input": "ShortLinkForm_input__GPHzN",
	"buttons": "ShortLinkForm_buttons__Vm5xW"
};


/***/ }),

/***/ 893:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": () => (/* binding */ ShortLinkFormType),
/* harmony export */   "Z": () => (/* binding */ ShortLinkForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ShortLinkForm_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7910);
/* harmony import */ var _ShortLinkForm_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ShortLinkForm_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9143);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4759);
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3599);







const ShortLinkFormType = {
    Create: "create",
    Edit: "edit"
};
function ShortLinkForm({ type =ShortLinkFormType.Create , initialValues ={
    title: "",
    url: ""
} , onSubmit  }) {
    const { title , url  } = initialValues;
    const [values, setValues] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        title,
        url
    });
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    async function handleSubmit(e) {
        e.preventDefault();
        await onSubmit(values);
        setValues({
            title: "",
            url: ""
        });
    }
    function handleChange(e) {
        const { name , value  } = e.target;
        setValues((prevValues)=>({
                ...prevValues,
                [name]: value
            }));
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Card__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
            className: (_ShortLinkForm_module_css__WEBPACK_IMPORTED_MODULE_6___default().shortLinkForm),
            onSubmit: handleSubmit,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                    className: (_ShortLinkForm_module_css__WEBPACK_IMPORTED_MODULE_6___default().label),
                    children: [
                        "제목",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Input__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            className: (_ShortLinkForm_module_css__WEBPACK_IMPORTED_MODULE_6___default().input),
                            name: "title",
                            value: values.title,
                            onChange: handleChange,
                            placeholder: "제목을 입력해주세요."
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                    className: (_ShortLinkForm_module_css__WEBPACK_IMPORTED_MODULE_6___default().label),
                    children: [
                        "주소",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Input__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            className: (_ShortLinkForm_module_css__WEBPACK_IMPORTED_MODULE_6___default().input),
                            name: "url",
                            value: values.url,
                            onChange: handleChange,
                            placeholder: "https://example.com/long-url"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_ShortLinkForm_module_css__WEBPACK_IMPORTED_MODULE_6___default().buttons),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            variant: "outline",
                            type: "button",
                            onClick: ()=>router.back(),
                            children: "취소"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            children: type === ShortLinkFormType.Create ? "등록하기" : type === ShortLinkFormType.Edit ? "수정하기" : null
                        })
                    ]
                })
            ]
        })
    });
}


/***/ })

};
;