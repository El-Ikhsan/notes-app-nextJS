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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/icons */ \"./node_modules/@chakra-ui/icons/dist/index.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Home = ()=>{\n    _s();\n    const [notes, setNotes] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const fetchNotes = async ()=>{\n            try {\n                const response = await fetch(\"/api/getAll\", {\n                    method: \"GET\"\n                });\n                if (response.ok) {\n                    const data = await response.json();\n                    setNotes(data);\n                } else {\n                    console.error(\"Failed to fetch notes\");\n                }\n            } catch (error) {\n                console.error(\"An error occurred while fetching notes:\", error);\n            }\n        };\n        fetchNotes();\n    }, []);\n    const handleDeleteAll = async ()=>{\n        try {\n            const response = await fetch(\"/api/removeAll\", {\n                method: \"DELETE\"\n            });\n            if (response.ok) {\n                router.reload();\n            } else {\n                console.error(\"Gagal menghapus data catatan\");\n            }\n        } catch (error) {\n            console.error(\"Terjadi kesalahan saat menghapus data catatan:\", error);\n        }\n    };\n    let content;\n    if (notes.length === 0) {\n        content = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {\n            background: \"#ba9e97\",\n            h: \"67vh\",\n            w: \"80vw\",\n            rounded: \"md\",\n            p: 4,\n            justify: \"center\",\n            align: \"center\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Heading, {\n                size: \"md\",\n                color: \"white\",\n                children: \"Tidak ada catatan\"\n            }, void 0, false, {\n                fileName: \"D:\\\\coding\\\\nodejs\\\\my-project\\\\frontend\\\\pages\\\\index.js\",\n                lineNumber: 61,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"D:\\\\coding\\\\nodejs\\\\my-project\\\\frontend\\\\pages\\\\index.js\",\n            lineNumber: 52,\n            columnNumber: 7\n        }, undefined);\n    } else {\n        content = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {\n            background: \"#ba9e97\",\n            h: \"67vh\",\n            w: \"80vw\",\n            direction: \"row\",\n            rounded: \"md\",\n            p: 4,\n            justify: \"flex-start\",\n            overflow: \"auto\",\n            wrap: \"wrap\",\n            columnGap: 9,\n            rowGap: 4,\n            children: notes.map((note)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Card, {\n                    w: \"17vw\",\n                    h: \"28vh\",\n                    background: \"#EBD8B7\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.CardHeader, {\n                            w: \"100%\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {\n                                    direction: \"row\",\n                                    justify: \"space-between\",\n                                    align: \"center\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Heading, {\n                                            size: \"lg\",\n                                            fontSize: \"24px\",\n                                            w: \"54%\",\n                                            noOfLines: 1,\n                                            children: note.title\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\coding\\\\nodejs\\\\my-project\\\\frontend\\\\pages\\\\index.js\",\n                                            lineNumber: 85,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {\n                                            direction: \"row\",\n                                            align: \"center\",\n                                            justify: \"flex-end\",\n                                            w: \"48%\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                                href: \"/detail/\".concat(note.id),\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.IconButton, {\n                                                    variant: \"outline\",\n                                                    colorScheme: \"teal\",\n                                                    \"aria-label\": \"view note\",\n                                                    icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_5__.ViewIcon, {}, void 0, false, {\n                                                        fileName: \"D:\\\\coding\\\\nodejs\\\\my-project\\\\frontend\\\\pages\\\\index.js\",\n                                                        lineNumber: 88,\n                                                        columnNumber: 99\n                                                    }, void 0)\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\coding\\\\nodejs\\\\my-project\\\\frontend\\\\pages\\\\index.js\",\n                                                    lineNumber: 88,\n                                                    columnNumber: 21\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\coding\\\\nodejs\\\\my-project\\\\frontend\\\\pages\\\\index.js\",\n                                                lineNumber: 87,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\coding\\\\nodejs\\\\my-project\\\\frontend\\\\pages\\\\index.js\",\n                                            lineNumber: 86,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\coding\\\\nodejs\\\\my-project\\\\frontend\\\\pages\\\\index.js\",\n                                    lineNumber: 84,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Heading, {\n                                    as: \"h3\",\n                                    size: \"xs\",\n                                    noOfLines: 1,\n                                    children: new Date(note.createdAt).toISOString().split(\"T\")[0]\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\coding\\\\nodejs\\\\my-project\\\\frontend\\\\pages\\\\index.js\",\n                                    lineNumber: 92,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\coding\\\\nodejs\\\\my-project\\\\frontend\\\\pages\\\\index.js\",\n                            lineNumber: 83,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.CardBody, {\n                            mt: \"-4vh\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                                noOfLines: [\n                                    1,\n                                    2,\n                                    3\n                                ],\n                                children: note.body\n                            }, void 0, false, {\n                                fileName: \"D:\\\\coding\\\\nodejs\\\\my-project\\\\frontend\\\\pages\\\\index.js\",\n                                lineNumber: 98,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\coding\\\\nodejs\\\\my-project\\\\frontend\\\\pages\\\\index.js\",\n                            lineNumber: 97,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, note.id, true, {\n                    fileName: \"D:\\\\coding\\\\nodejs\\\\my-project\\\\frontend\\\\pages\\\\index.js\",\n                    lineNumber: 81,\n                    columnNumber: 11\n                }, undefined))\n        }, void 0, false, {\n            fileName: \"D:\\\\coding\\\\nodejs\\\\my-project\\\\frontend\\\\pages\\\\index.js\",\n            lineNumber: 65,\n            columnNumber: 9\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {\n        w: \"100vw\",\n        h: \"100vh\",\n        alignItems: \"center\",\n        justifyContent: \"center\",\n        background: \"#D37676\",\n        direction: \"row\",\n        wrap: \"wrap\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {\n            height: \"83vh\",\n            width: \"85vw\",\n            rounded: \"md\",\n            direction: \"column\",\n            align: \"center\",\n            justify: \"center\",\n            p: 6,\n            background: \"#73536b\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Stack, {\n                    direction: \"row\",\n                    w: \"80vw\",\n                    spacing: 4,\n                    align: \"center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/add\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                bg: \"#6c9c88\",\n                                _hover: {\n                                    bg: \"#578974\"\n                                },\n                                color: \"white\",\n                                w: \"45vw\",\n                                variant: \"solid\",\n                                children: \"Add Note\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\coding\\\\nodejs\\\\my-project\\\\frontend\\\\pages\\\\index.js\",\n                                lineNumber: 130,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\coding\\\\nodejs\\\\my-project\\\\frontend\\\\pages\\\\index.js\",\n                            lineNumber: 129,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                            bg: \"#6c9c88\",\n                            _hover: {\n                                bg: \"#578974\"\n                            },\n                            color: \"white\",\n                            w: \"45vw\",\n                            variant: \"solid\",\n                            onClick: handleDeleteAll,\n                            children: \"Delete All\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\coding\\\\nodejs\\\\my-project\\\\frontend\\\\pages\\\\index.js\",\n                            lineNumber: 134,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\coding\\\\nodejs\\\\my-project\\\\frontend\\\\pages\\\\index.js\",\n                    lineNumber: 128,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Spacer, {}, void 0, false, {\n                    fileName: \"D:\\\\coding\\\\nodejs\\\\my-project\\\\frontend\\\\pages\\\\index.js\",\n                    lineNumber: 139,\n                    columnNumber: 9\n                }, undefined),\n                content\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\coding\\\\nodejs\\\\my-project\\\\frontend\\\\pages\\\\index.js\",\n            lineNumber: 117,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\coding\\\\nodejs\\\\my-project\\\\frontend\\\\pages\\\\index.js\",\n        lineNumber: 107,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Home, \"KvnGL6I8rCxepnbXc/f3G7kcTOk=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O2dDQUFDeUMsV0FBVztvQ0FBQztvQ0FBRztvQ0FBRztpQ0FBRTswQ0FBR0YsS0FBS2dCLElBQUk7Ozs7Ozs7Ozs7OzttQkFqQi9CaEIsS0FBS0ssRUFBRTs7Ozs7Ozs7OztJQXVCdkI7SUFFSCxxQkFDRSw4REFBQ3BELGtEQUFJQTtRQUNIa0MsR0FBRTtRQUNGRCxHQUFFO1FBQ0YrQixZQUFXO1FBQ1hDLGdCQUFlO1FBQ2ZqQyxZQUFXO1FBQ1hTLFdBQVU7UUFDVkUsTUFBSztrQkFHTCw0RUFBQzNDLGtEQUFJQTtZQUNIa0UsUUFBTztZQUNQQyxPQUFNO1lBQ05oQyxTQUFRO1lBQ1JNLFdBQVU7WUFDVkgsT0FBTTtZQUNORCxTQUFRO1lBQ1JELEdBQUc7WUFDSEosWUFBVzs7OEJBR1gsOERBQUM5QixtREFBS0E7b0JBQUN1QyxXQUFVO29CQUFNUCxHQUFFO29CQUFPa0MsU0FBUztvQkFBRzlCLE9BQU07O3NDQUNoRCw4REFBQzNCLGtEQUFJQTs0QkFBQ3dDLE1BQUs7c0NBQ1QsNEVBQUNoRCxvREFBTUE7Z0NBQUNrRSxJQUFHO2dDQUFVQyxRQUFRO29DQUFFRCxJQUFJO2dDQUFVO2dDQUFHN0IsT0FBTTtnQ0FBUU4sR0FBRTtnQ0FBT21CLFNBQVE7MENBQVE7Ozs7Ozs7Ozs7O3NDQUl6Riw4REFBQ2xELG9EQUFNQTs0QkFBQ2tFLElBQUc7NEJBQVVDLFFBQVE7Z0NBQUVELElBQUk7NEJBQVU7NEJBQUc3QixPQUFNOzRCQUFRTixHQUFFOzRCQUFPbUIsU0FBUTs0QkFBUWtCLFNBQVMzQztzQ0FBaUI7Ozs7Ozs7Ozs7Ozs4QkFLbkgsOERBQUN4QixvREFBTUE7Ozs7O2dCQUVOMEI7Ozs7Ozs7Ozs7OztBQUtUO0dBM0lNZjs7UUFFV0Qsa0RBQVNBOzs7S0FGcEJDO0FBNklOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmxleCwgSGVhZGluZywgU3RhY2ssIEJ1dHRvbiwgU3BhY2VyLCBDYXJkLCBDYXJkQm9keSwgQ2FyZEhlYWRlciwgVGV4dCwgSWNvbkJ1dHRvbn0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XG5pbXBvcnQgeyBWaWV3SWNvbiB9IGZyb20gJ0BjaGFrcmEtdWkvaWNvbnMnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcblxuY29uc3QgSG9tZSA9ICgpID0+IHtcbiAgY29uc3QgW25vdGVzLCBzZXROb3Rlc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG5cbiAgICBjb25zdCBmZXRjaE5vdGVzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9nZXRBbGwnLCB7XG4gICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgc2V0Tm90ZXMoZGF0YSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGZldGNoIG5vdGVzJyk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0FuIGVycm9yIG9jY3VycmVkIHdoaWxlIGZldGNoaW5nIG5vdGVzOicsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZmV0Y2hOb3RlcygpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgaGFuZGxlRGVsZXRlQWxsID0gYXN5bmMgKCkgPT4ge1xuXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAvYXBpL3JlbW92ZUFsbGAsIHtcbiAgICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgcm91dGVyLnJlbG9hZCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0dhZ2FsIG1lbmdoYXB1cyBkYXRhIGNhdGF0YW4nKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignVGVyamFkaSBrZXNhbGFoYW4gc2FhdCBtZW5naGFwdXMgZGF0YSBjYXRhdGFuOicsIGVycm9yKTtcbiAgICAgIH1cbiAgICBcbiAgfTtcblxuICBsZXQgY29udGVudDtcbiAgaWYgKG5vdGVzLmxlbmd0aCA9PT0gMCkge1xuICAgIGNvbnRlbnQgPSAoXG4gICAgICA8RmxleFxuICAgICAgICBiYWNrZ3JvdW5kPVwiI2JhOWU5N1wiIFxuICAgICAgICBoPVwiNjd2aFwiIFxuICAgICAgICB3PVwiODB2d1wiIFxuICAgICAgICByb3VuZGVkPVwibWRcIiBcbiAgICAgICAgcD17NH0gXG4gICAgICAgIGp1c3RpZnk9XCJjZW50ZXJcIiBcbiAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxuICAgICAgPlxuICAgICAgICA8SGVhZGluZyBzaXplPVwibWRcIiBjb2xvcj1cIndoaXRlXCI+VGlkYWsgYWRhIGNhdGF0YW48L0hlYWRpbmc+XG4gICAgICA8L0ZsZXg+XG4gICAgKX0gZWxzZSB7XG4gICAgICBjb250ZW50ID0gKFxuICAgICAgICA8RmxleCBcbiAgICAgICAgICBiYWNrZ3JvdW5kPVwiI2JhOWU5N1wiIFxuICAgICAgICAgIGg9XCI2N3ZoXCIgXG4gICAgICAgICAgdz1cIjgwdndcIiBcbiAgICAgICAgICBkaXJlY3Rpb249XCJyb3dcIiBcbiAgICAgICAgICByb3VuZGVkPVwibWRcIiBcbiAgICAgICAgICBwPXs0fVxuICAgICAgICAgIGp1c3RpZnk9XCJmbGV4LXN0YXJ0XCIgXG4gICAgICAgICAgb3ZlcmZsb3c9XCJhdXRvXCIgXG4gICAgICAgICAgd3JhcD1cIndyYXBcIiBcbiAgICAgICAgICBjb2x1bW5HYXA9ezl9IFxuICAgICAgICAgIHJvd0dhcD17NH1cbiAgICAgICAgPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICB7bm90ZXMubWFwKG5vdGUgPT4gKFxuXG4gICAgICAgICAgPENhcmQga2V5PXtub3RlLmlkfSB3PVwiMTd2d1wiIGg9XCIyOHZoXCIgYmFja2dyb3VuZD1cIiNFQkQ4QjdcIj5cblxuICAgICAgICAgICAgPENhcmRIZWFkZXIgdz1cIjEwMCVcIj5cbiAgICAgICAgICAgICAgPEZsZXggZGlyZWN0aW9uPVwicm93XCIganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIiBhbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxIZWFkaW5nIHNpemU9XCJsZ1wiIGZvbnRTaXplPVwiMjRweFwiIHc9XCI1NCVcIiBub09mTGluZXM9ezF9Pntub3RlLnRpdGxlfTwvSGVhZGluZz5cbiAgICAgICAgICAgICAgICA8RmxleCBkaXJlY3Rpb249XCJyb3dcIiBhbGlnbj1cImNlbnRlclwiIGp1c3RpZnk9XCJmbGV4LWVuZFwiIHc9XCI0OCVcIj5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvZGV0YWlsLyR7bm90ZS5pZH1gfT5cbiAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gdmFyaWFudD0nb3V0bGluZScgY29sb3JTY2hlbWU9J3RlYWwnIGFyaWEtbGFiZWw9J3ZpZXcgbm90ZScgaWNvbj17PFZpZXdJY29uIC8+fSAvPlxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgICA8SGVhZGluZyBhcz0naDMnIHNpemU9XCJ4c1wiIG5vT2ZMaW5lcz17MX0+XG4gICAgICAgICAgICAgICAge25ldyBEYXRlKG5vdGUuY3JlYXRlZEF0KS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF19XG4gICAgICAgICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgICAgIDwvQ2FyZEhlYWRlcj5cblxuICAgICAgICAgICAgPENhcmRCb2R5IG10PVwiLTR2aFwiPlxuICAgICAgICAgICAgICA8VGV4dCBub09mTGluZXM9e1sxLCAyLCAzXX0+e25vdGUuYm9keX08L1RleHQ+XG4gICAgICAgICAgICA8L0NhcmRCb2R5PlxuXG4gICAgICAgICAgPC9DYXJkPlxuICAgICAgICApKX1cbiAgICAgICAgPC9GbGV4PlxuICAgICl9XG5cbiAgcmV0dXJuIChcbiAgICA8RmxleFxuICAgICAgdz1cIjEwMHZ3XCJcbiAgICAgIGg9XCIxMDB2aFwiXG4gICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCJcbiAgICAgIGJhY2tncm91bmQ9XCIjRDM3Njc2XCJcbiAgICAgIGRpcmVjdGlvbj1cInJvd1wiIFxuICAgICAgd3JhcD1cIndyYXBcIiAgXG4gICAgPlxuXG4gICAgICA8RmxleFxuICAgICAgICBoZWlnaHQ9XCI4M3ZoXCJcbiAgICAgICAgd2lkdGg9XCI4NXZ3XCJcbiAgICAgICAgcm91bmRlZD1cIm1kXCJcbiAgICAgICAgZGlyZWN0aW9uPVwiY29sdW1uXCJcbiAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxuICAgICAgICBqdXN0aWZ5PVwiY2VudGVyXCJcbiAgICAgICAgcD17Nn1cbiAgICAgICAgYmFja2dyb3VuZD1cIiM3MzUzNmJcIiBcbiAgICAgID5cblxuICAgICAgICA8U3RhY2sgZGlyZWN0aW9uPSdyb3cnIHc9XCI4MHZ3XCIgc3BhY2luZz17NH0gYWxpZ249J2NlbnRlcic+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9hZGRcIj5cbiAgICAgICAgICAgIDxCdXR0b24gYmc9XCIjNmM5Yzg4XCIgX2hvdmVyPXt7IGJnOiBcIiM1Nzg5NzRcIiB9fSBjb2xvcj1cIndoaXRlXCIgdz1cIjQ1dndcIiB2YXJpYW50PSdzb2xpZCc+XG4gICAgICAgICAgICAgIEFkZCBOb3RlXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPEJ1dHRvbiBiZz1cIiM2YzljODhcIiBfaG92ZXI9e3sgYmc6IFwiIzU3ODk3NFwiIH19IGNvbG9yPVwid2hpdGVcIiB3PVwiNDV2d1wiIHZhcmlhbnQ9J3NvbGlkJyBvbkNsaWNrPXtoYW5kbGVEZWxldGVBbGx9PlxuICAgICAgICAgICAgRGVsZXRlIEFsbFxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L1N0YWNrPlxuXG4gICAgICAgIDxTcGFjZXIgLz5cblxuICAgICAgICB7Y29udGVudH1cblxuICAgICAgPC9GbGV4PlxuICAgIDwvRmxleD5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJuYW1lcyI6WyJGbGV4IiwiSGVhZGluZyIsIlN0YWNrIiwiQnV0dG9uIiwiU3BhY2VyIiwiQ2FyZCIsIkNhcmRCb2R5IiwiQ2FyZEhlYWRlciIsIlRleHQiLCJJY29uQnV0dG9uIiwiVmlld0ljb24iLCJMaW5rIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJIb21lIiwibm90ZXMiLCJzZXROb3RlcyIsInJvdXRlciIsImZldGNoTm90ZXMiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwib2siLCJkYXRhIiwianNvbiIsImNvbnNvbGUiLCJlcnJvciIsImhhbmRsZURlbGV0ZUFsbCIsInJlbG9hZCIsImNvbnRlbnQiLCJsZW5ndGgiLCJiYWNrZ3JvdW5kIiwiaCIsInciLCJyb3VuZGVkIiwicCIsImp1c3RpZnkiLCJhbGlnbiIsInNpemUiLCJjb2xvciIsImRpcmVjdGlvbiIsIm92ZXJmbG93Iiwid3JhcCIsImNvbHVtbkdhcCIsInJvd0dhcCIsIm1hcCIsIm5vdGUiLCJmb250U2l6ZSIsIm5vT2ZMaW5lcyIsInRpdGxlIiwiaHJlZiIsImlkIiwidmFyaWFudCIsImNvbG9yU2NoZW1lIiwiYXJpYS1sYWJlbCIsImljb24iLCJhcyIsIkRhdGUiLCJjcmVhdGVkQXQiLCJ0b0lTT1N0cmluZyIsInNwbGl0IiwibXQiLCJib2R5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiaGVpZ2h0Iiwid2lkdGgiLCJzcGFjaW5nIiwiYmciLCJfaG92ZXIiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});