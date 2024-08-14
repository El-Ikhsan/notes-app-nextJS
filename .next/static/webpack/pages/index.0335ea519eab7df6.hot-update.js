"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/icons */ \"./node_modules/@chakra-ui/icons/dist/index.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Home = ()=>{\n    _s();\n    const [notes, setNotes] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const fetchNotes = async ()=>{\n            try {\n                const response = await fetch(\"/api/getAll\");\n                if (response.ok) {\n                    const data = await response.json();\n                    setNotes(data);\n                } else {\n                    console.error(\"Failed to fetch notes\");\n                }\n            } catch (error) {\n                console.error(\"An error occurred while fetching notes:\", error);\n            }\n        };\n        fetchNotes();\n    }, []);\n    const handleDeleteAll = async ()=>{\n        try {\n            const response = await fetch(\"/api/removeAll\", {\n                method: \"DELETE\"\n            });\n            if (response.ok) {\n                router.reload();\n            } else {\n                console.error(\"Gagal menghapus data catatan\");\n            }\n        } catch (error) {\n            console.error(\"Terjadi kesalahan saat menghapus data catatan:\", error);\n        }\n    };\n    let content;\n    if (notes.length === 0) {\n        content = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n            background: \"#ba9e97\",\n            h: \"67vh\",\n            w: \"80vw\",\n            rounded: \"md\",\n            p: 4,\n            justify: \"center\",\n            align: \"center\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Heading, {\n                size: \"md\",\n                color: \"white\",\n                children: \"Tidak ada catatan\"\n            }, void 0, false, {\n                fileName: \"D:\\\\coding\\\\nodejs\\\\my-project\\\\frontend\\\\pages\\\\index.js\",\n                lineNumber: 57,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"D:\\\\coding\\\\nodejs\\\\my-project\\\\frontend\\\\pages\\\\index.js\",\n            lineNumber: 48,\n            columnNumber: 7\n        }, undefined);\n    } else {\n        content = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n            background: \"#ba9e97\",\n            h: \"67vh\",\n            w: \"80vw\",\n            direction: \"row\",\n            rounded: \"md\",\n            p: 4,\n            justify: \"flex-start\",\n            overflow: \"auto\",\n            wrap: \"wrap\",\n            columnGap: 9,\n            rowGap: 4,\n            children: notes.map((note)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Card, {\n                    w: \"17vw\",\n                    h: \"28vh\",\n                    background: \"#EBD8B7\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.CardHeader, {\n                            w: \"100%\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n                                    direction: \"row\",\n                                    justify: \"space-between\",\n                                    align: \"center\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Heading, {\n                                            size: \"lg\",\n                                            fontSize: \"24px\",\n                                            w: \"54%\",\n                                            noOfLines: 1,\n                                            children: note.title\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\coding\\\\nodejs\\\\my-project\\\\frontend\\\\pages\\\\index.js\",\n                                            lineNumber: 81,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n                                            direction: \"row\",\n                                            align: \"center\",\n                                            justify: \"flex-end\",\n                                            w: \"48%\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                                href: \"/detail/\".concat(note.id),\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.IconButton, {\n                                                    variant: \"outline\",\n                                                    colorScheme: \"teal\",\n                                                    \"aria-label\": \"view note\",\n                                                    icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_4__.ViewIcon, {}, void 0, false, {\n                                                        fileName: \"D:\\\\coding\\\\nodejs\\\\my-project\\\\frontend\\\\pages\\\\index.js\",\n                                                        lineNumber: 85,\n                                                        columnNumber: 99\n                                                    }, void 0)\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\coding\\\\nodejs\\\\my-project\\\\frontend\\\\pages\\\\index.js\",\n                                                    lineNumber: 85,\n                                                    columnNumber: 21\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\coding\\\\nodejs\\\\my-project\\\\frontend\\\\pages\\\\index.js\",\n                                                lineNumber: 83,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\coding\\\\nodejs\\\\my-project\\\\frontend\\\\pages\\\\index.js\",\n                                            lineNumber: 82,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\coding\\\\nodejs\\\\my-project\\\\frontend\\\\pages\\\\index.js\",\n                                    lineNumber: 80,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Heading, {\n                                    as: \"h3\",\n                                    size: \"xs\",\n                                    noOfLines: 1,\n                                    children: new Date(note.createdAt).toISOString().split(\"T\")[0]\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\coding\\\\nodejs\\\\my-project\\\\frontend\\\\pages\\\\index.js\",\n                                    lineNumber: 89,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\coding\\\\nodejs\\\\my-project\\\\frontend\\\\pages\\\\index.js\",\n                            lineNumber: 79,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.CardBody, {\n                            mt: \"-4vh\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                                noOfLines: [\n                                    1,\n                                    2,\n                                    3\n                                ],\n                                children: note.body\n                            }, void 0, false, {\n                                fileName: \"D:\\\\coding\\\\nodejs\\\\my-project\\\\frontend\\\\pages\\\\index.js\",\n                                lineNumber: 95,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\coding\\\\nodejs\\\\my-project\\\\frontend\\\\pages\\\\index.js\",\n                            lineNumber: 94,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, note.id, true, {\n                    fileName: \"D:\\\\coding\\\\nodejs\\\\my-project\\\\frontend\\\\pages\\\\index.js\",\n                    lineNumber: 77,\n                    columnNumber: 11\n                }, undefined))\n        }, void 0, false, {\n            fileName: \"D:\\\\coding\\\\nodejs\\\\my-project\\\\frontend\\\\pages\\\\index.js\",\n            lineNumber: 61,\n            columnNumber: 9\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n        w: \"100vw\",\n        h: \"100vh\",\n        alignItems: \"center\",\n        justifyContent: \"center\",\n        background: \"#D37676\",\n        direction: \"row\",\n        wrap: \"wrap\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n            height: \"83vh\",\n            width: \"85vw\",\n            rounded: \"md\",\n            direction: \"column\",\n            align: \"center\",\n            justify: \"center\",\n            p: 6,\n            background: \"#73536b\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Stack, {\n                    direction: \"row\",\n                    w: \"80vw\",\n                    spacing: 4,\n                    align: \"center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/add\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                bg: \"#6c9c88\",\n                                _hover: {\n                                    bg: \"#578974\"\n                                },\n                                color: \"white\",\n                                w: \"45vw\",\n                                variant: \"solid\",\n                                children: \"Add Note\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\coding\\\\nodejs\\\\my-project\\\\frontend\\\\pages\\\\index.js\",\n                                lineNumber: 127,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\coding\\\\nodejs\\\\my-project\\\\frontend\\\\pages\\\\index.js\",\n                            lineNumber: 126,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                            bg: \"#6c9c88\",\n                            _hover: {\n                                bg: \"#578974\"\n                            },\n                            color: \"white\",\n                            w: \"45vw\",\n                            variant: \"solid\",\n                            onClick: handleDeleteAll,\n                            children: \"Delete All\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\coding\\\\nodejs\\\\my-project\\\\frontend\\\\pages\\\\index.js\",\n                            lineNumber: 131,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\coding\\\\nodejs\\\\my-project\\\\frontend\\\\pages\\\\index.js\",\n                    lineNumber: 125,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Spacer, {}, void 0, false, {\n                    fileName: \"D:\\\\coding\\\\nodejs\\\\my-project\\\\frontend\\\\pages\\\\index.js\",\n                    lineNumber: 136,\n                    columnNumber: 9\n                }, undefined),\n                content\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\coding\\\\nodejs\\\\my-project\\\\frontend\\\\pages\\\\index.js\",\n            lineNumber: 114,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\coding\\\\nodejs\\\\my-project\\\\frontend\\\\pages\\\\index.js\",\n        lineNumber: 104,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Home, \"vOaC7rmji7ux6HtcIeocV+tl1oY=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUk7Ozs7Ozs7Ozs7OzttQkFsQi9CaEIsS0FBS0ssRUFBRTs7Ozs7Ozs7OztJQXdCdkI7SUFFSCxxQkFDRSw4REFBQ3BELGtEQUFJQTtRQUNIa0MsR0FBRTtRQUNGRCxHQUFFO1FBQ0YrQixZQUFXO1FBQ1hDLGdCQUFlO1FBQ2ZqQyxZQUFXO1FBQ1hTLFdBQVU7UUFDVkUsTUFBSztrQkFHTCw0RUFBQzNDLGtEQUFJQTtZQUNIa0UsUUFBTztZQUNQQyxPQUFNO1lBQ05oQyxTQUFRO1lBQ1JNLFdBQVU7WUFDVkgsT0FBTTtZQUNORCxTQUFRO1lBQ1JELEdBQUc7WUFDSEosWUFBVzs7OEJBR1gsOERBQUM5QixtREFBS0E7b0JBQUN1QyxXQUFVO29CQUFNUCxHQUFFO29CQUFPa0MsU0FBUztvQkFBRzlCLE9BQU07O3NDQUNoRCw4REFBQzFCLGtEQUFJQTs0QkFBQ3VDLE1BQUs7c0NBQ1QsNEVBQUNoRCxvREFBTUE7Z0NBQUNrRSxJQUFHO2dDQUFVQyxRQUFRO29DQUFFRCxJQUFJO2dDQUFVO2dDQUFHN0IsT0FBTTtnQ0FBUU4sR0FBRTtnQ0FBT21CLFNBQVE7MENBQVE7Ozs7Ozs7Ozs7O3NDQUl6Riw4REFBQ2xELG9EQUFNQTs0QkFBQ2tFLElBQUc7NEJBQVVDLFFBQVE7Z0NBQUVELElBQUk7NEJBQVU7NEJBQUc3QixPQUFNOzRCQUFRTixHQUFFOzRCQUFPbUIsU0FBUTs0QkFBUWtCLFNBQVM3QztzQ0FBaUI7Ozs7Ozs7Ozs7Ozs4QkFLbkgsOERBQUN0QixvREFBTUE7Ozs7O2dCQUVOMEI7Ozs7Ozs7Ozs7OztBQUtUO0dBeklNZjtLQUFBQTtBQTJJTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZsZXgsIEhlYWRpbmcsIFN0YWNrLCBCdXR0b24sIFNwYWNlciwgQ2FyZCwgQ2FyZEJvZHksIENhcmRIZWFkZXIsIFRleHQsIEljb25CdXR0b259IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xuaW1wb3J0IHsgRWRpdEljb24sIFZpZXdJY29uIH0gZnJvbSAnQGNoYWtyYS11aS9pY29ucydcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuICBjb25zdCBbbm90ZXMsIHNldE5vdGVzXSA9IHVzZVN0YXRlKFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuXG4gICAgY29uc3QgZmV0Y2hOb3RlcyA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvZ2V0QWxsJyk7XG4gICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgc2V0Tm90ZXMoZGF0YSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGZldGNoIG5vdGVzJyk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0FuIGVycm9yIG9jY3VycmVkIHdoaWxlIGZldGNoaW5nIG5vdGVzOicsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZmV0Y2hOb3RlcygpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgaGFuZGxlRGVsZXRlQWxsID0gYXN5bmMgKCkgPT4ge1xuXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAvYXBpL3JlbW92ZUFsbGAsIHtcbiAgICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgcm91dGVyLnJlbG9hZCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0dhZ2FsIG1lbmdoYXB1cyBkYXRhIGNhdGF0YW4nKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignVGVyamFkaSBrZXNhbGFoYW4gc2FhdCBtZW5naGFwdXMgZGF0YSBjYXRhdGFuOicsIGVycm9yKTtcbiAgICAgIH1cbiAgICBcbiAgfTtcblxuICBsZXQgY29udGVudDtcbiAgaWYgKG5vdGVzLmxlbmd0aCA9PT0gMCkge1xuICAgIGNvbnRlbnQgPSAoXG4gICAgICA8RmxleFxuICAgICAgICBiYWNrZ3JvdW5kPVwiI2JhOWU5N1wiIFxuICAgICAgICBoPVwiNjd2aFwiIFxuICAgICAgICB3PVwiODB2d1wiIFxuICAgICAgICByb3VuZGVkPVwibWRcIiBcbiAgICAgICAgcD17NH0gXG4gICAgICAgIGp1c3RpZnk9XCJjZW50ZXJcIiBcbiAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxuICAgICAgPlxuICAgICAgICA8SGVhZGluZyBzaXplPVwibWRcIiBjb2xvcj1cIndoaXRlXCI+VGlkYWsgYWRhIGNhdGF0YW48L0hlYWRpbmc+XG4gICAgICA8L0ZsZXg+XG4gICAgKX0gZWxzZSB7XG4gICAgICBjb250ZW50ID0gKFxuICAgICAgICA8RmxleCBcbiAgICAgICAgICBiYWNrZ3JvdW5kPVwiI2JhOWU5N1wiIFxuICAgICAgICAgIGg9XCI2N3ZoXCIgXG4gICAgICAgICAgdz1cIjgwdndcIiBcbiAgICAgICAgICBkaXJlY3Rpb249XCJyb3dcIiBcbiAgICAgICAgICByb3VuZGVkPVwibWRcIiBcbiAgICAgICAgICBwPXs0fVxuICAgICAgICAgIGp1c3RpZnk9XCJmbGV4LXN0YXJ0XCIgXG4gICAgICAgICAgb3ZlcmZsb3c9XCJhdXRvXCIgXG4gICAgICAgICAgd3JhcD1cIndyYXBcIiBcbiAgICAgICAgICBjb2x1bW5HYXA9ezl9IFxuICAgICAgICAgIHJvd0dhcD17NH1cbiAgICAgICAgPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICB7bm90ZXMubWFwKG5vdGUgPT4gKFxuXG4gICAgICAgICAgPENhcmQga2V5PXtub3RlLmlkfSB3PVwiMTd2d1wiIGg9XCIyOHZoXCIgYmFja2dyb3VuZD1cIiNFQkQ4QjdcIj5cblxuICAgICAgICAgICAgPENhcmRIZWFkZXIgdz1cIjEwMCVcIj5cbiAgICAgICAgICAgICAgPEZsZXggZGlyZWN0aW9uPVwicm93XCIganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIiBhbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxIZWFkaW5nIHNpemU9XCJsZ1wiIGZvbnRTaXplPVwiMjRweFwiIHc9XCI1NCVcIiBub09mTGluZXM9ezF9Pntub3RlLnRpdGxlfTwvSGVhZGluZz5cbiAgICAgICAgICAgICAgICA8RmxleCBkaXJlY3Rpb249XCJyb3dcIiBhbGlnbj1cImNlbnRlclwiIGp1c3RpZnk9XCJmbGV4LWVuZFwiIHc9XCI0OCVcIj5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvZGV0YWlsLyR7bm90ZS5pZH1gfT5cbiAgICAgICAgICAgICAgICAgICAgey8qIDxJY29uQnV0dG9uIHZhcmlhbnQ9J291dGxpbmUnIGNvbG9yU2NoZW1lPSd0ZWFsJyBhcmlhLWxhYmVsPSdlZGl0IG5vdGUnIGljb249ezxFZGl0SWNvbiAvPn0gLz4gKi99XG4gICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIHZhcmlhbnQ9J291dGxpbmUnIGNvbG9yU2NoZW1lPSd0ZWFsJyBhcmlhLWxhYmVsPSd2aWV3IG5vdGUnIGljb249ezxWaWV3SWNvbiAvPn0gLz5cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgICAgPEhlYWRpbmcgYXM9J2gzJyBzaXplPVwieHNcIiBub09mTGluZXM9ezF9PlxuICAgICAgICAgICAgICAgIHtuZXcgRGF0ZShub3RlLmNyZWF0ZWRBdCkudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdfVxuICAgICAgICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgICAgICA8L0NhcmRIZWFkZXI+XG5cbiAgICAgICAgICAgIDxDYXJkQm9keSBtdD1cIi00dmhcIj5cbiAgICAgICAgICAgICAgPFRleHQgbm9PZkxpbmVzPXtbMSwgMiwgM119Pntub3RlLmJvZHl9PC9UZXh0PlxuICAgICAgICAgICAgPC9DYXJkQm9keT5cblxuICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgKSl9XG4gICAgICAgIDwvRmxleD5cbiAgICApfVxuXG4gIHJldHVybiAoXG4gICAgPEZsZXhcbiAgICAgIHc9XCIxMDB2d1wiXG4gICAgICBoPVwiMTAwdmhcIlxuICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXG4gICAgICBiYWNrZ3JvdW5kPVwiI0QzNzY3NlwiXG4gICAgICBkaXJlY3Rpb249XCJyb3dcIiBcbiAgICAgIHdyYXA9XCJ3cmFwXCIgIFxuICAgID5cblxuICAgICAgPEZsZXhcbiAgICAgICAgaGVpZ2h0PVwiODN2aFwiXG4gICAgICAgIHdpZHRoPVwiODV2d1wiXG4gICAgICAgIHJvdW5kZWQ9XCJtZFwiXG4gICAgICAgIGRpcmVjdGlvbj1cImNvbHVtblwiXG4gICAgICAgIGFsaWduPVwiY2VudGVyXCJcbiAgICAgICAganVzdGlmeT1cImNlbnRlclwiXG4gICAgICAgIHA9ezZ9XG4gICAgICAgIGJhY2tncm91bmQ9XCIjNzM1MzZiXCIgXG4gICAgICA+XG5cbiAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj0ncm93JyB3PVwiODB2d1wiIHNwYWNpbmc9ezR9IGFsaWduPSdjZW50ZXInPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWRkXCI+XG4gICAgICAgICAgICA8QnV0dG9uIGJnPVwiIzZjOWM4OFwiIF9ob3Zlcj17eyBiZzogXCIjNTc4OTc0XCIgfX0gY29sb3I9XCJ3aGl0ZVwiIHc9XCI0NXZ3XCIgdmFyaWFudD0nc29saWQnPlxuICAgICAgICAgICAgICBBZGQgTm90ZVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxCdXR0b24gYmc9XCIjNmM5Yzg4XCIgX2hvdmVyPXt7IGJnOiBcIiM1Nzg5NzRcIiB9fSBjb2xvcj1cIndoaXRlXCIgdz1cIjQ1dndcIiB2YXJpYW50PSdzb2xpZCcgb25DbGljaz17aGFuZGxlRGVsZXRlQWxsfT5cbiAgICAgICAgICAgIERlbGV0ZSBBbGxcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9TdGFjaz5cblxuICAgICAgICA8U3BhY2VyIC8+XG5cbiAgICAgICAge2NvbnRlbnR9XG5cbiAgICAgIDwvRmxleD5cbiAgICA8L0ZsZXg+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwibmFtZXMiOlsiRmxleCIsIkhlYWRpbmciLCJTdGFjayIsIkJ1dHRvbiIsIlNwYWNlciIsIkNhcmQiLCJDYXJkQm9keSIsIkNhcmRIZWFkZXIiLCJUZXh0IiwiSWNvbkJ1dHRvbiIsIkVkaXRJY29uIiwiVmlld0ljb24iLCJMaW5rIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJIb21lIiwibm90ZXMiLCJzZXROb3RlcyIsImZldGNoTm90ZXMiLCJyZXNwb25zZSIsImZldGNoIiwib2siLCJkYXRhIiwianNvbiIsImNvbnNvbGUiLCJlcnJvciIsImhhbmRsZURlbGV0ZUFsbCIsIm1ldGhvZCIsInJvdXRlciIsInJlbG9hZCIsImNvbnRlbnQiLCJsZW5ndGgiLCJiYWNrZ3JvdW5kIiwiaCIsInciLCJyb3VuZGVkIiwicCIsImp1c3RpZnkiLCJhbGlnbiIsInNpemUiLCJjb2xvciIsImRpcmVjdGlvbiIsIm92ZXJmbG93Iiwid3JhcCIsImNvbHVtbkdhcCIsInJvd0dhcCIsIm1hcCIsIm5vdGUiLCJmb250U2l6ZSIsIm5vT2ZMaW5lcyIsInRpdGxlIiwiaHJlZiIsImlkIiwidmFyaWFudCIsImNvbG9yU2NoZW1lIiwiYXJpYS1sYWJlbCIsImljb24iLCJhcyIsIkRhdGUiLCJjcmVhdGVkQXQiLCJ0b0lTT1N0cmluZyIsInNwbGl0IiwibXQiLCJib2R5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiaGVpZ2h0Iiwid2lkdGgiLCJzcGFjaW5nIiwiYmciLCJfaG92ZXIiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});