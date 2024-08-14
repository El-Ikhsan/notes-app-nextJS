"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/detail/[noteId]",{

/***/ "./pages/detail/[noteId].js":
/*!**********************************!*\
  !*** ./pages/detail/[noteId].js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/icons */ \"./node_modules/@chakra-ui/icons/dist/index.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Detail = ()=>{\n    _s();\n    const [note, setNote] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { noteId } = router.query;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchNote = async ()=>{\n            if (noteId) {\n                try {\n                    const response = await fetch(\"/api/get/\".concat(noteId));\n                    if (response.ok) {\n                        const data = await response.json();\n                        setNote(data);\n                    } else {\n                        console.error(\"Gagal mengambil data catatan\");\n                    }\n                } catch (error) {\n                    console.error(\"Terjadi kesalahan saat mengambil data catatan:\", error);\n                }\n            }\n        };\n        fetchNote();\n    }, [\n        noteId\n    ]);\n    const handleDelete = async ()=>{\n        if (noteId) {\n            try {\n                const response = await fetch(\"/api/remove/\".concat(noteId), {\n                    method: \"DELETE\"\n                });\n                if (response.ok) {\n                    router.push(\"/\");\n                } else {\n                    console.error(\"Gagal menghapus data catatan\");\n                }\n            } catch (error) {\n                console.error(\"Terjadi kesalahan saat menghapus data catatan:\", error);\n            }\n        }\n    };\n    if (!note) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {\n            w: \"100vw\",\n            h: \"100vh\",\n            alignItems: \"center\",\n            justify: \"center\",\n            background: \"#D37676\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Heading, {\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"D:\\\\coding\\\\nodejs\\\\my-project\\\\frontend\\\\pages\\\\detail\\\\[noteId].js\",\n                lineNumber: 59,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"D:\\\\coding\\\\nodejs\\\\my-project\\\\frontend\\\\pages\\\\detail\\\\[noteId].js\",\n            lineNumber: 52,\n            columnNumber: 7\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {\n        w: \"100vw\",\n        h: \"100vh\",\n        alignItems: \"center\",\n        justifyContent: \"center\",\n        background: \"#D37676\",\n        direction: \"row\",\n        wrap: \"wrap\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {\n            height: \"75vh\",\n            width: \"73vw\",\n            rounded: \"md\",\n            direction: \"column\",\n            align: \"center\",\n            justify: \"center\",\n            p: 6,\n            background: \"#73536b\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {\n                background: \"#ba9e97\",\n                h: \"70vh\",\n                w: \"73vw\",\n                p: 6,\n                justify: \"center\",\n                align: \"center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Card, {\n                    w: \"80%\",\n                    h: \"85%\",\n                    background: \"#EBD8B7\",\n                    p: 2,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.CardHeader, {\n                            w: \"100%\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {\n                                    direction: \"row\",\n                                    justify: \"space-between\",\n                                    align: \"center\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Heading, {\n                                            size: \"xl\",\n                                            children: note.title\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\coding\\\\nodejs\\\\my-project\\\\frontend\\\\pages\\\\detail\\\\[noteId].js\",\n                                            lineNumber: 88,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {\n                                            direction: \"row\",\n                                            align: \"center\",\n                                            justify: \"space-between\",\n                                            w: \"15%\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                                    href: \"/edit/\".concat(note.id),\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.IconButton, {\n                                                        variant: \"outline\",\n                                                        colorScheme: \"teal\",\n                                                        \"aria-label\": \"edit note\",\n                                                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_5__.EditIcon, {}, void 0, false, {\n                                                            fileName: \"D:\\\\coding\\\\nodejs\\\\my-project\\\\frontend\\\\pages\\\\detail\\\\[noteId].js\",\n                                                            lineNumber: 91,\n                                                            columnNumber: 99\n                                                        }, void 0)\n                                                    }, void 0, false, {\n                                                        fileName: \"D:\\\\coding\\\\nodejs\\\\my-project\\\\frontend\\\\pages\\\\detail\\\\[noteId].js\",\n                                                        lineNumber: 91,\n                                                        columnNumber: 21\n                                                    }, undefined)\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\coding\\\\nodejs\\\\my-project\\\\frontend\\\\pages\\\\detail\\\\[noteId].js\",\n                                                    lineNumber: 90,\n                                                    columnNumber: 19\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.IconButton, {\n                                                    variant: \"outline\",\n                                                    colorScheme: \"teal\",\n                                                    \"aria-label\": \"delete note\",\n                                                    icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_5__.DeleteIcon, {}, void 0, false, {\n                                                        fileName: \"D:\\\\coding\\\\nodejs\\\\my-project\\\\frontend\\\\pages\\\\detail\\\\[noteId].js\",\n                                                        lineNumber: 93,\n                                                        columnNumber: 99\n                                                    }, void 0),\n                                                    onClick: handleDelete\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\coding\\\\nodejs\\\\my-project\\\\frontend\\\\pages\\\\detail\\\\[noteId].js\",\n                                                    lineNumber: 93,\n                                                    columnNumber: 19\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"D:\\\\coding\\\\nodejs\\\\my-project\\\\frontend\\\\pages\\\\detail\\\\[noteId].js\",\n                                            lineNumber: 89,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\coding\\\\nodejs\\\\my-project\\\\frontend\\\\pages\\\\detail\\\\[noteId].js\",\n                                    lineNumber: 87,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Heading, {\n                                    as: \"h3\",\n                                    size: \"md\",\n                                    children: new Date(note.createdAt).toLocaleDateString()\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\coding\\\\nodejs\\\\my-project\\\\frontend\\\\pages\\\\detail\\\\[noteId].js\",\n                                    lineNumber: 96,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\coding\\\\nodejs\\\\my-project\\\\frontend\\\\pages\\\\detail\\\\[noteId].js\",\n                            lineNumber: 86,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.CardBody, {\n                            mt: \"1vh\",\n                            overflow: \"auto\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                                children: note.body\n                            }, void 0, false, {\n                                fileName: \"D:\\\\coding\\\\nodejs\\\\my-project\\\\frontend\\\\pages\\\\detail\\\\[noteId].js\",\n                                lineNumber: 99,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\coding\\\\nodejs\\\\my-project\\\\frontend\\\\pages\\\\detail\\\\[noteId].js\",\n                            lineNumber: 98,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\coding\\\\nodejs\\\\my-project\\\\frontend\\\\pages\\\\detail\\\\[noteId].js\",\n                    lineNumber: 85,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\coding\\\\nodejs\\\\my-project\\\\frontend\\\\pages\\\\detail\\\\[noteId].js\",\n                lineNumber: 84,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"D:\\\\coding\\\\nodejs\\\\my-project\\\\frontend\\\\pages\\\\detail\\\\[noteId].js\",\n            lineNumber: 74,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\coding\\\\nodejs\\\\my-project\\\\frontend\\\\pages\\\\detail\\\\[noteId].js\",\n        lineNumber: 65,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Detail, \"SQV/5wnBdHYd9GLzAH4Ty7uxGl0=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Detail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Detail);\nvar _c;\n$RefreshReg$(_c, \"Detail\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LG9CQUFNLDhEQUFDdkMsd0RBQVVBOzs7OztvREFBSXdDLFNBQVN4Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhDQUc1Ryw4REFBQ3ZCLHFEQUFPQTtvQ0FBQ2dELElBQUc7b0NBQUtULE1BQUs7OENBQU0sSUFBSVUsS0FBS3ZDLEtBQUt3QyxTQUFTLEVBQUVDLGtCQUFrQjs7Ozs7Ozs7Ozs7O3NDQUV6RSw4REFBQy9DLHNEQUFRQTs0QkFBQ2dELElBQUc7NEJBQU1DLFVBQVM7c0NBQzFCLDRFQUFDcEQsa0RBQUlBOzBDQUFFUyxLQUFLNEMsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPOUI7R0FuR003Qzs7UUFFV1gsa0RBQVNBOzs7S0FGcEJXO0FBcUdOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2RldGFpbC9bbm90ZUlkXS5qcz8xNGQ5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgRmxleCwgSGVhZGluZywgVGV4dCwgSWNvbkJ1dHRvbiwgQ2FyZCwgQ2FyZEJvZHksIENhcmRIZWFkZXIgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcclxuaW1wb3J0IHsgRWRpdEljb24sIERlbGV0ZUljb24gfSBmcm9tICdAY2hha3JhLXVpL2ljb25zJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmNvbnN0IERldGFpbCA9ICgpID0+IHtcclxuICBjb25zdCBbbm90ZSwgc2V0Tm90ZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IG5vdGVJZCB9ID0gcm91dGVyLnF1ZXJ5O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hOb3RlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBpZiAobm90ZUlkKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYC9hcGkvZ2V0LyR7bm90ZUlkfWApO1xyXG4gICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgIHNldE5vdGUoZGF0YSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdHYWdhbCBtZW5nYW1iaWwgZGF0YSBjYXRhdGFuJyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1RlcmphZGkga2VzYWxhaGFuIHNhYXQgbWVuZ2FtYmlsIGRhdGEgY2F0YXRhbjonLCBlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGZldGNoTm90ZSgpO1xyXG4gIH0sIFtub3RlSWRdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRGVsZXRlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgaWYgKG5vdGVJZCkge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYC9hcGkvcmVtb3ZlLyR7bm90ZUlkfWAsIHtcclxuICAgICAgICAgIG1ldGhvZDogJ0RFTEVURScsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICByb3V0ZXIucHVzaCgnLycpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdHYWdhbCBtZW5naGFwdXMgZGF0YSBjYXRhdGFuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1RlcmphZGkga2VzYWxhaGFuIHNhYXQgbWVuZ2hhcHVzIGRhdGEgY2F0YXRhbjonLCBlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuXHJcbiAgaWYgKCFub3RlKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8RmxleFxyXG4gICAgICAgIHc9XCIxMDB2d1wiXHJcbiAgICAgICAgaD1cIjEwMHZoXCJcclxuICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcclxuICAgICAgICBqdXN0aWZ5PVwiY2VudGVyXCJcclxuICAgICAgICBiYWNrZ3JvdW5kPVwiI0QzNzY3NlwiXHJcbiAgICAgID5cclxuICAgICAgICA8SGVhZGluZz5Mb2FkaW5nLi4uPC9IZWFkaW5nPlxyXG4gICAgICA8L0ZsZXg+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGbGV4XHJcbiAgICAgIHc9XCIxMDB2d1wiXHJcbiAgICAgIGg9XCIxMDB2aFwiXHJcbiAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxyXG4gICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXHJcbiAgICAgIGJhY2tncm91bmQ9XCIjRDM3Njc2XCJcclxuICAgICAgZGlyZWN0aW9uPVwicm93XCIgXHJcbiAgICAgIHdyYXA9XCJ3cmFwXCIgIFxyXG4gICAgPlxyXG4gICAgICA8RmxleFxyXG4gICAgICAgIGhlaWdodD1cIjc1dmhcIlxyXG4gICAgICAgIHdpZHRoPVwiNzN2d1wiXHJcbiAgICAgICAgcm91bmRlZD1cIm1kXCJcclxuICAgICAgICBkaXJlY3Rpb249XCJjb2x1bW5cIlxyXG4gICAgICAgIGFsaWduPVwiY2VudGVyXCJcclxuICAgICAgICBqdXN0aWZ5PVwiY2VudGVyXCJcclxuICAgICAgICBwPXs2fVxyXG4gICAgICAgIGJhY2tncm91bmQ9XCIjNzM1MzZiXCIgXHJcbiAgICAgID5cclxuICAgICAgICA8RmxleCBiYWNrZ3JvdW5kPVwiI2JhOWU5N1wiIGg9XCI3MHZoXCIgdz1cIjczdndcIiBwPXs2fSBqdXN0aWZ5PVwiY2VudGVyXCIgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgIDxDYXJkIHc9XCI4MCVcIiBoPVwiODUlXCIgYmFja2dyb3VuZD1cIiNFQkQ4QjdcIiBwPXsyfT5cclxuICAgICAgICAgICAgPENhcmRIZWFkZXIgdz1cIjEwMCVcIj5cclxuICAgICAgICAgICAgICA8RmxleCBkaXJlY3Rpb249XCJyb3dcIiBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8SGVhZGluZyBzaXplPVwieGxcIj57bm90ZS50aXRsZX08L0hlYWRpbmc+XHJcbiAgICAgICAgICAgICAgICA8RmxleCBkaXJlY3Rpb249XCJyb3dcIiBhbGlnbj1cImNlbnRlclwiIGp1c3RpZnk9XCJzcGFjZS1iZXR3ZWVuXCIgdz1cIjE1JVwiPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2VkaXQvJHtub3RlLmlkfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIHZhcmlhbnQ9J291dGxpbmUnIGNvbG9yU2NoZW1lPSd0ZWFsJyBhcmlhLWxhYmVsPSdlZGl0IG5vdGUnIGljb249ezxFZGl0SWNvbiAvPn0gLz5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiB2YXJpYW50PSdvdXRsaW5lJyBjb2xvclNjaGVtZT0ndGVhbCcgYXJpYS1sYWJlbD0nZGVsZXRlIG5vdGUnIGljb249ezxEZWxldGVJY29uLz59IG9uQ2xpY2s9e2hhbmRsZURlbGV0ZX0gLz5cclxuICAgICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgICAgPEhlYWRpbmcgYXM9J2gzJyBzaXplPVwibWRcIj57bmV3IERhdGUobm90ZS5jcmVhdGVkQXQpLnRvTG9jYWxlRGF0ZVN0cmluZygpfTwvSGVhZGluZz5cclxuICAgICAgICAgICAgPC9DYXJkSGVhZGVyPlxyXG4gICAgICAgICAgICA8Q2FyZEJvZHkgbXQ9XCIxdmhcIiBvdmVyZmxvdz1cImF1dG9cIj5cclxuICAgICAgICAgICAgICA8VGV4dD57bm90ZS5ib2R5fTwvVGV4dD5cclxuICAgICAgICAgICAgPC9DYXJkQm9keT5cclxuICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICA8L0ZsZXg+XHJcbiAgICAgIDwvRmxleD5cclxuICAgIDwvRmxleD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGV0YWlsO1xyXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJGbGV4IiwiSGVhZGluZyIsIlRleHQiLCJJY29uQnV0dG9uIiwiQ2FyZCIsIkNhcmRCb2R5IiwiQ2FyZEhlYWRlciIsIkVkaXRJY29uIiwiRGVsZXRlSWNvbiIsIkxpbmsiLCJEZXRhaWwiLCJub3RlIiwic2V0Tm90ZSIsInJvdXRlciIsIm5vdGVJZCIsInF1ZXJ5IiwiZmV0Y2hOb3RlIiwicmVzcG9uc2UiLCJmZXRjaCIsIm9rIiwiZGF0YSIsImpzb24iLCJjb25zb2xlIiwiZXJyb3IiLCJoYW5kbGVEZWxldGUiLCJtZXRob2QiLCJwdXNoIiwidyIsImgiLCJhbGlnbkl0ZW1zIiwianVzdGlmeSIsImJhY2tncm91bmQiLCJqdXN0aWZ5Q29udGVudCIsImRpcmVjdGlvbiIsIndyYXAiLCJoZWlnaHQiLCJ3aWR0aCIsInJvdW5kZWQiLCJhbGlnbiIsInAiLCJzaXplIiwidGl0bGUiLCJocmVmIiwiaWQiLCJ2YXJpYW50IiwiY29sb3JTY2hlbWUiLCJhcmlhLWxhYmVsIiwiaWNvbiIsIm9uQ2xpY2siLCJhcyIsIkRhdGUiLCJjcmVhdGVkQXQiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJtdCIsIm92ZXJmbG93IiwiYm9keSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/detail/[noteId].js\n"));

/***/ })

});