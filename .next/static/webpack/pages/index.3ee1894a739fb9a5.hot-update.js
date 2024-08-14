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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/icons */ \"./node_modules/@chakra-ui/icons/dist/index.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Home = ()=>{\n    _s();\n    const [notes, setNotes] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const fetchNotes = async ()=>{\n            try {\n                const response = await fetch(\"/api/getAll\");\n                if (response.ok) {\n                    const data = await response.json();\n                    setNotes(data);\n                } else {\n                    console.error(\"Failed to fetch notes\");\n                }\n            } catch (error) {\n                console.error(\"An error occurred while fetching notes:\", error);\n            }\n        };\n        fetchNotes();\n    }, []);\n    const handleDeleteAll = async ()=>{\n        try {\n            const response = await fetch(\"/api/removeAll\", {\n                method: \"DELETE\"\n            });\n            if (response.ok) {\n                router.reload();\n            } else {\n                console.error(\"Gagal menghapus data catatan\");\n            }\n        } catch (error) {\n            console.error(\"Terjadi kesalahan saat menghapus data catatan:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n        w: \"100vw\",\n        h: \"100vh\",\n        alignItems: \"center\",\n        justifyContent: \"center\",\n        background: \"#D37676\",\n        direction: \"row\",\n        wrap: \"wrap\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n            height: \"83vh\",\n            width: \"85vw\",\n            rounded: \"md\",\n            direction: \"column\",\n            align: \"center\",\n            justify: \"center\",\n            p: 6,\n            background: \"#73536b\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Stack, {\n                    direction: \"row\",\n                    w: \"80vw\",\n                    spacing: 4,\n                    align: \"center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/add\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                bg: \"#6c9c88\",\n                                _hover: {\n                                    bg: \"#578974\"\n                                },\n                                color: \"white\",\n                                w: \"45vw\",\n                                variant: \"solid\",\n                                children: \"Add Note\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\coding\\\\nodejs\\\\my-project\\\\frontend\\\\pages\\\\index.js\",\n                                lineNumber: 69,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\coding\\\\nodejs\\\\my-project\\\\frontend\\\\pages\\\\index.js\",\n                            lineNumber: 68,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                            bg: \"#6c9c88\",\n                            _hover: {\n                                bg: \"#578974\"\n                            },\n                            color: \"white\",\n                            w: \"45vw\",\n                            variant: \"solid\",\n                            onClick: handleDeleteAll,\n                            children: \"Delete All\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\coding\\\\nodejs\\\\my-project\\\\frontend\\\\pages\\\\index.js\",\n                            lineNumber: 73,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\coding\\\\nodejs\\\\my-project\\\\frontend\\\\pages\\\\index.js\",\n                    lineNumber: 67,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Spacer, {}, void 0, false, {\n                    fileName: \"D:\\\\coding\\\\nodejs\\\\my-project\\\\frontend\\\\pages\\\\index.js\",\n                    lineNumber: 78,\n                    columnNumber: 9\n                }, undefined),\n                notes.length === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n                    background: \"#ba9e97\",\n                    h: \"80vh\",\n                    w: \"80vw\",\n                    direction: \"row\",\n                    rounded: \"md\",\n                    mt: 6,\n                    p: 4,\n                    justify: \"center\",\n                    align: \"center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Heading, {\n                        size: \"md\",\n                        color: \"white\",\n                        children: \"Tidak ada catatan\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\coding\\\\nodejs\\\\my-project\\\\frontend\\\\pages\\\\index.js\",\n                        lineNumber: 93,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"D:\\\\coding\\\\nodejs\\\\my-project\\\\frontend\\\\pages\\\\index.js\",\n                    lineNumber: 82,\n                    columnNumber: 11\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n                    background: \"#ba9e97\",\n                    h: \"69vh\",\n                    w: \"80vw\",\n                    direction: \"row\",\n                    rounded: \"md\",\n                    p: 4,\n                    justify: \"flex-start\",\n                    overflow: \"auto\",\n                    wrap: \"wrap\",\n                    columnGap: 9,\n                    rowGap: 4,\n                    children: notes.map((note)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Card, {\n                            w: \"17vw\",\n                            h: \"28vh\",\n                            background: \"#EBD8B7\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.CardHeader, {\n                                    w: \"100%\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n                                            direction: \"row\",\n                                            justify: \"space-between\",\n                                            align: \"center\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Heading, {\n                                                    size: \"lg\",\n                                                    fontSize: \"24px\",\n                                                    w: \"54%\",\n                                                    noOfLines: 1,\n                                                    children: note.title\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\coding\\\\nodejs\\\\my-project\\\\frontend\\\\pages\\\\index.js\",\n                                                    lineNumber: 115,\n                                                    columnNumber: 25\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n                                                    direction: \"row\",\n                                                    align: \"center\",\n                                                    justify: \"flex-end\",\n                                                    w: \"48%\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                                        href: \"/detail/\".concat(note.id),\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.IconButton, {\n                                                            variant: \"outline\",\n                                                            colorScheme: \"teal\",\n                                                            \"aria-label\": \"view note\",\n                                                            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_4__.ViewIcon, {}, void 0, false, {\n                                                                fileName: \"D:\\\\coding\\\\nodejs\\\\my-project\\\\frontend\\\\pages\\\\index.js\",\n                                                                lineNumber: 119,\n                                                                columnNumber: 107\n                                                            }, void 0)\n                                                        }, void 0, false, {\n                                                            fileName: \"D:\\\\coding\\\\nodejs\\\\my-project\\\\frontend\\\\pages\\\\index.js\",\n                                                            lineNumber: 119,\n                                                            columnNumber: 29\n                                                        }, undefined)\n                                                    }, void 0, false, {\n                                                        fileName: \"D:\\\\coding\\\\nodejs\\\\my-project\\\\frontend\\\\pages\\\\index.js\",\n                                                        lineNumber: 117,\n                                                        columnNumber: 27\n                                                    }, undefined)\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\coding\\\\nodejs\\\\my-project\\\\frontend\\\\pages\\\\index.js\",\n                                                    lineNumber: 116,\n                                                    columnNumber: 25\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"D:\\\\coding\\\\nodejs\\\\my-project\\\\frontend\\\\pages\\\\index.js\",\n                                            lineNumber: 114,\n                                            columnNumber: 23\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Heading, {\n                                            as: \"h3\",\n                                            size: \"xs\",\n                                            noOfLines: 1,\n                                            children: new Date(note.createdAt).toISOString().split(\"T\")[0]\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\coding\\\\nodejs\\\\my-project\\\\frontend\\\\pages\\\\index.js\",\n                                            lineNumber: 124,\n                                            columnNumber: 23\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\coding\\\\nodejs\\\\my-project\\\\frontend\\\\pages\\\\index.js\",\n                                    lineNumber: 113,\n                                    columnNumber: 21\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.CardBody, {\n                                    mt: \"-4vh\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                                        noOfLines: [\n                                            1,\n                                            2,\n                                            3\n                                        ],\n                                        children: note.body\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\coding\\\\nodejs\\\\my-project\\\\frontend\\\\pages\\\\index.js\",\n                                        lineNumber: 130,\n                                        columnNumber: 23\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\coding\\\\nodejs\\\\my-project\\\\frontend\\\\pages\\\\index.js\",\n                                    lineNumber: 129,\n                                    columnNumber: 21\n                                }, undefined)\n                            ]\n                        }, note.id, true, {\n                            fileName: \"D:\\\\coding\\\\nodejs\\\\my-project\\\\frontend\\\\pages\\\\index.js\",\n                            lineNumber: 112,\n                            columnNumber: 19\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"D:\\\\coding\\\\nodejs\\\\my-project\\\\frontend\\\\pages\\\\index.js\",\n                    lineNumber: 97,\n                    columnNumber: 15\n                }, undefined),\n                \";\"\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\coding\\\\nodejs\\\\my-project\\\\frontend\\\\pages\\\\index.js\",\n            lineNumber: 56,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\coding\\\\nodejs\\\\my-project\\\\frontend\\\\pages\\\\index.js\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Home, \"vOaC7rmji7ux6HtcIeocV+tl1oY=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVE7NENBQWdCRCxPQUFNOzs4REFDbEQsOERBQUN2QyxxREFBT0E7b0RBQUNtRCxNQUFLO29EQUFLTSxVQUFTO29EQUFPNUIsR0FBRTtvREFBTTZCLFdBQVc7OERBQUlGLEtBQUtHLEtBQUs7Ozs7Ozs4REFDcEUsOERBQUM1RCxrREFBSUE7b0RBQUNtQyxXQUFVO29EQUFNSyxPQUFNO29EQUFTQyxTQUFRO29EQUFXWCxHQUFFOzhEQUN4RCw0RUFBQ2xCLGtEQUFJQTt3REFBQ2dDLE1BQU0sV0FBbUIsT0FBUmEsS0FBS0ksRUFBRTtrRUFFNUIsNEVBQUNwRCx3REFBVUE7NERBQUN1QyxTQUFROzREQUFVYyxhQUFZOzREQUFPQyxjQUFXOzREQUFZQyxvQkFBTSw4REFBQ3JELHNEQUFRQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0RBSzdGLDhEQUFDVixxREFBT0E7NENBQUNnRSxJQUFHOzRDQUFLYixNQUFLOzRDQUFLTyxXQUFXO3NEQUNuQyxJQUFJTyxLQUFLVCxLQUFLVSxTQUFTLEVBQUVDLFdBQVcsR0FBR0MsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFOzs7Ozs7Ozs7Ozs7OENBSXpELDhEQUFDL0Qsc0RBQVFBO29DQUFDNkMsSUFBRzs4Q0FDWCw0RUFBQzNDLGtEQUFJQTt3Q0FBQ21ELFdBQVc7NENBQUM7NENBQUc7NENBQUc7eUNBQUU7a0RBQ3ZCRixLQUFLYSxJQUFJOzs7Ozs7Ozs7Ozs7MkJBbkJMYixLQUFLSSxFQUFFOzs7Ozs7Ozs7O2dCQTBCdEI7Ozs7Ozs7Ozs7OztBQUlkO0dBeElNOUM7S0FBQUE7QUEwSU4sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGbGV4LCBIZWFkaW5nLCBTdGFjaywgQnV0dG9uLCBTcGFjZXIsIENhcmQsIENhcmRCb2R5LCBDYXJkSGVhZGVyLCBUZXh0LCBJY29uQnV0dG9ufSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcbmltcG9ydCB7IEVkaXRJY29uLCBWaWV3SWNvbiB9IGZyb20gJ0BjaGFrcmEtdWkvaWNvbnMnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgSG9tZSA9ICgpID0+IHtcbiAgY29uc3QgW25vdGVzLCBzZXROb3Rlc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcblxuICAgIGNvbnN0IGZldGNoTm90ZXMgPSBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL2dldEFsbCcpO1xuICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgIHNldE5vdGVzKGRhdGEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBmZXRjaCBub3RlcycpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBmZXRjaGluZyBub3RlczonLCBlcnJvcik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZldGNoTm90ZXMoKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGhhbmRsZURlbGV0ZUFsbCA9IGFzeW5jICgpID0+IHtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgL2FwaS9yZW1vdmVBbGxgLCB7XG4gICAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgIHJvdXRlci5yZWxvYWQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdHYWdhbCBtZW5naGFwdXMgZGF0YSBjYXRhdGFuJyk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1RlcmphZGkga2VzYWxhaGFuIHNhYXQgbWVuZ2hhcHVzIGRhdGEgY2F0YXRhbjonLCBlcnJvcik7XG4gICAgICB9XG4gICAgXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8RmxleFxuICAgICAgdz1cIjEwMHZ3XCJcbiAgICAgIGg9XCIxMDB2aFwiXG4gICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCJcbiAgICAgIGJhY2tncm91bmQ9XCIjRDM3Njc2XCJcbiAgICAgIGRpcmVjdGlvbj1cInJvd1wiIFxuICAgICAgd3JhcD1cIndyYXBcIiAgXG4gICAgPlxuXG4gICAgICA8RmxleFxuICAgICAgICBoZWlnaHQ9XCI4M3ZoXCJcbiAgICAgICAgd2lkdGg9XCI4NXZ3XCJcbiAgICAgICAgcm91bmRlZD1cIm1kXCJcbiAgICAgICAgZGlyZWN0aW9uPVwiY29sdW1uXCJcbiAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxuICAgICAgICBqdXN0aWZ5PVwiY2VudGVyXCJcbiAgICAgICAgcD17Nn1cbiAgICAgICAgYmFja2dyb3VuZD1cIiM3MzUzNmJcIiBcbiAgICAgID5cblxuICAgICAgICA8U3RhY2sgZGlyZWN0aW9uPSdyb3cnIHc9XCI4MHZ3XCIgc3BhY2luZz17NH0gYWxpZ249J2NlbnRlcic+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9hZGRcIj5cbiAgICAgICAgICAgIDxCdXR0b24gYmc9XCIjNmM5Yzg4XCIgX2hvdmVyPXt7IGJnOiBcIiM1Nzg5NzRcIiB9fSBjb2xvcj1cIndoaXRlXCIgdz1cIjQ1dndcIiB2YXJpYW50PSdzb2xpZCc+XG4gICAgICAgICAgICAgIEFkZCBOb3RlXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPEJ1dHRvbiBiZz1cIiM2YzljODhcIiBfaG92ZXI9e3sgYmc6IFwiIzU3ODk3NFwiIH19IGNvbG9yPVwid2hpdGVcIiB3PVwiNDV2d1wiIHZhcmlhbnQ9J3NvbGlkJyBvbkNsaWNrPXtoYW5kbGVEZWxldGVBbGx9PlxuICAgICAgICAgICAgRGVsZXRlIEFsbFxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L1N0YWNrPlxuXG4gICAgICAgIDxTcGFjZXIvPlxuXG4gICAgICAgIHtub3Rlcy5sZW5ndGggPT09IDAgPyAoXG5cbiAgICAgICAgICA8RmxleFxuICAgICAgICAgIGJhY2tncm91bmQ9XCIjYmE5ZTk3XCIgXG4gICAgICAgICAgaD1cIjgwdmhcIiBcbiAgICAgICAgICB3PVwiODB2d1wiIFxuICAgICAgICAgIGRpcmVjdGlvbj1cInJvd1wiIFxuICAgICAgICAgIHJvdW5kZWQ9XCJtZFwiIFxuICAgICAgICAgIG10PXs2fVxuICAgICAgICAgIHA9ezR9IFxuICAgICAgICAgIGp1c3RpZnk9XCJjZW50ZXJcIiBcbiAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEhlYWRpbmcgc2l6ZT1cIm1kXCIgY29sb3I9XCJ3aGl0ZVwiPlRpZGFrIGFkYSBjYXRhdGFuPC9IZWFkaW5nPlxuICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDxGbGV4IFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kPVwiI2JhOWU5N1wiIFxuICAgICAgICAgICAgICBoPVwiNjl2aFwiIFxuICAgICAgICAgICAgICB3PVwiODB2d1wiIFxuICAgICAgICAgICAgICBkaXJlY3Rpb249XCJyb3dcIiBcbiAgICAgICAgICAgICAgcm91bmRlZD1cIm1kXCIgXG4gICAgICAgICAgICAgIHA9ezR9IFxuICAgICAgICAgICAgICBqdXN0aWZ5PVwiZmxleC1zdGFydFwiIFxuICAgICAgICAgICAgICBvdmVyZmxvdz1cImF1dG9cIiBcbiAgICAgICAgICAgICAgd3JhcD1cIndyYXBcIiBcbiAgICAgICAgICAgICAgY29sdW1uR2FwPXs5fSBcbiAgICAgICAgICAgICAgcm93R2FwPXs0fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAge25vdGVzLm1hcChub3RlID0+IChcbiAgICAgICAgICAgICAgICAgIDxDYXJkIGtleT17bm90ZS5pZH0gdz1cIjE3dndcIiBoPVwiMjh2aFwiIGJhY2tncm91bmQ9XCIjRUJEOEI3XCI+XG4gICAgICAgICAgICAgICAgICAgIDxDYXJkSGVhZGVyIHc9XCIxMDAlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPEZsZXggZGlyZWN0aW9uPVwicm93XCIganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIiBhbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRpbmcgc2l6ZT1cImxnXCIgZm9udFNpemU9XCIyNHB4XCIgdz1cIjU0JVwiIG5vT2ZMaW5lcz17MX0+e25vdGUudGl0bGV9PC9IZWFkaW5nPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXggZGlyZWN0aW9uPVwicm93XCIgYWxpZ249XCJjZW50ZXJcIiBqdXN0aWZ5PVwiZmxleC1lbmRcIiB3PVwiNDglXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvZGV0YWlsLyR7bm90ZS5pZH1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPEljb25CdXR0b24gdmFyaWFudD0nb3V0bGluZScgY29sb3JTY2hlbWU9J3RlYWwnIGFyaWEtbGFiZWw9J2VkaXQgbm90ZScgaWNvbj17PEVkaXRJY29uIC8+fSAvPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiB2YXJpYW50PSdvdXRsaW5lJyBjb2xvclNjaGVtZT0ndGVhbCcgYXJpYS1sYWJlbD0ndmlldyBub3RlJyBpY29uPXs8Vmlld0ljb24gLz59IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XG5cbiAgICAgICAgICAgICAgICAgICAgICA8SGVhZGluZyBhcz0naDMnIHNpemU9XCJ4c1wiIG5vT2ZMaW5lcz17MX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7bmV3IERhdGUobm90ZS5jcmVhdGVkQXQpLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXX1cbiAgICAgICAgICAgICAgICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZEhlYWRlcj5cblxuICAgICAgICAgICAgICAgICAgICA8Q2FyZEJvZHkgbXQ9XCItNHZoXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPFRleHQgbm9PZkxpbmVzPXtbMSwgMiwgM119PlxuICAgICAgICAgICAgICAgICAgICAgICAge25vdGUuYm9keX1cbiAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZEJvZHk+XG4gICAgICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICAgICAgKSl9XG5cbiAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgKX07XG4gICAgICA8L0ZsZXg+XG4gICAgPC9GbGV4PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sIm5hbWVzIjpbIkZsZXgiLCJIZWFkaW5nIiwiU3RhY2siLCJCdXR0b24iLCJTcGFjZXIiLCJDYXJkIiwiQ2FyZEJvZHkiLCJDYXJkSGVhZGVyIiwiVGV4dCIsIkljb25CdXR0b24iLCJFZGl0SWNvbiIsIlZpZXdJY29uIiwiTGluayIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSG9tZSIsIm5vdGVzIiwic2V0Tm90ZXMiLCJmZXRjaE5vdGVzIiwicmVzcG9uc2UiLCJmZXRjaCIsIm9rIiwiZGF0YSIsImpzb24iLCJjb25zb2xlIiwiZXJyb3IiLCJoYW5kbGVEZWxldGVBbGwiLCJtZXRob2QiLCJyb3V0ZXIiLCJyZWxvYWQiLCJ3IiwiaCIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImJhY2tncm91bmQiLCJkaXJlY3Rpb24iLCJ3cmFwIiwiaGVpZ2h0Iiwid2lkdGgiLCJyb3VuZGVkIiwiYWxpZ24iLCJqdXN0aWZ5IiwicCIsInNwYWNpbmciLCJocmVmIiwiYmciLCJfaG92ZXIiLCJjb2xvciIsInZhcmlhbnQiLCJvbkNsaWNrIiwibGVuZ3RoIiwibXQiLCJzaXplIiwib3ZlcmZsb3ciLCJjb2x1bW5HYXAiLCJyb3dHYXAiLCJtYXAiLCJub3RlIiwiZm9udFNpemUiLCJub09mTGluZXMiLCJ0aXRsZSIsImlkIiwiY29sb3JTY2hlbWUiLCJhcmlhLWxhYmVsIiwiaWNvbiIsImFzIiwiRGF0ZSIsImNyZWF0ZWRBdCIsInRvSVNPU3RyaW5nIiwic3BsaXQiLCJib2R5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});