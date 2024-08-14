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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/icons */ \"./node_modules/@chakra-ui/icons/dist/index.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Home = ()=>{\n    _s();\n    const [notes, setNotes] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const fetchNotes = async ()=>{\n            try {\n                const response = await fetch(\"/api/getAll\");\n                if (response.ok) {\n                    const data = await response.json();\n                    setNotes(data);\n                } else {\n                    console.error(\"Failed to fetch notes\");\n                }\n            } catch (error) {\n                console.error(\"An error occurred while fetching notes:\", error);\n            }\n        };\n        fetchNotes();\n    }, []);\n    const handleDeleteAll = async ()=>{\n        try {\n            const response = await fetch(\"/api/removeAll\", {\n                method: \"DELETE\"\n            });\n            if (response.ok) {\n                router.reload();\n            } else {\n                console.error(\"Gagal menghapus data catatan\");\n            }\n        } catch (error) {\n            console.error(\"Terjadi kesalahan saat menghapus data catatan:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n        w: \"100vw\",\n        h: \"100vh\",\n        alignItems: \"center\",\n        justifyContent: \"center\",\n        background: \"#D37676\",\n        direction: \"row\",\n        wrap: \"wrap\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n            height: \"83vh\",\n            width: \"85vw\",\n            rounded: \"md\",\n            direction: \"column\",\n            align: \"center\",\n            justify: \"center\",\n            p: 6,\n            background: \"#73536b\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Stack, {\n                    direction: \"row\",\n                    w: \"80vw\",\n                    spacing: 4,\n                    align: \"center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/add\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                bg: \"#6c9c88\",\n                                _hover: {\n                                    bg: \"#578974\"\n                                },\n                                color: \"white\",\n                                w: \"45vw\",\n                                variant: \"solid\",\n                                children: \"Add Note\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\coding\\\\nodejs\\\\my-project\\\\frontend\\\\pages\\\\index.js\",\n                                lineNumber: 69,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\coding\\\\nodejs\\\\my-project\\\\frontend\\\\pages\\\\index.js\",\n                            lineNumber: 68,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                            bg: \"#6c9c88\",\n                            _hover: {\n                                bg: \"#578974\"\n                            },\n                            color: \"white\",\n                            w: \"45vw\",\n                            variant: \"solid\",\n                            onClick: handleDeleteAll,\n                            children: \"Delete All\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\coding\\\\nodejs\\\\my-project\\\\frontend\\\\pages\\\\index.js\",\n                            lineNumber: 73,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\coding\\\\nodejs\\\\my-project\\\\frontend\\\\pages\\\\index.js\",\n                    lineNumber: 67,\n                    columnNumber: 9\n                }, undefined),\n                notes.length === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n                    background: \"#ba9e97\",\n                    h: \"67vh\",\n                    w: \"80vw\",\n                    direction: \"row\",\n                    rounded: \"md\",\n                    mt: 6,\n                    p: 4,\n                    justify: \"center\",\n                    align: \"center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Heading, {\n                        size: \"md\",\n                        color: \"white\",\n                        children: \"Tidak ada catatan\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\coding\\\\nodejs\\\\my-project\\\\frontend\\\\pages\\\\index.js\",\n                        lineNumber: 92,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"D:\\\\coding\\\\nodejs\\\\my-project\\\\frontend\\\\pages\\\\index.js\",\n                    lineNumber: 81,\n                    columnNumber: 11\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n                    background: \"#ba9e97\",\n                    h: \"67vh\",\n                    w: \"80vw\",\n                    direction: \"row\",\n                    rounded: \"md\",\n                    p: 4,\n                    justify: \"flex-start\",\n                    overflow: \"auto\",\n                    wrap: \"wrap\",\n                    columnGap: 9,\n                    rowGap: 4,\n                    children: notes.map((note)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Card, {\n                            w: \"17vw\",\n                            h: \"28vh\",\n                            background: \"#EBD8B7\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.CardHeader, {\n                                    w: \"100%\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n                                            direction: \"row\",\n                                            justify: \"space-between\",\n                                            align: \"center\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Heading, {\n                                                    size: \"lg\",\n                                                    fontSize: \"24px\",\n                                                    w: \"54%\",\n                                                    noOfLines: 1,\n                                                    children: note.title\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\coding\\\\nodejs\\\\my-project\\\\frontend\\\\pages\\\\index.js\",\n                                                    lineNumber: 114,\n                                                    columnNumber: 25\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n                                                    direction: \"row\",\n                                                    align: \"center\",\n                                                    justify: \"flex-end\",\n                                                    w: \"48%\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                                        href: \"/detail/\".concat(note.id),\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.IconButton, {\n                                                            variant: \"outline\",\n                                                            colorScheme: \"teal\",\n                                                            \"aria-label\": \"view note\",\n                                                            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_4__.ViewIcon, {}, void 0, false, {\n                                                                fileName: \"D:\\\\coding\\\\nodejs\\\\my-project\\\\frontend\\\\pages\\\\index.js\",\n                                                                lineNumber: 118,\n                                                                columnNumber: 107\n                                                            }, void 0)\n                                                        }, void 0, false, {\n                                                            fileName: \"D:\\\\coding\\\\nodejs\\\\my-project\\\\frontend\\\\pages\\\\index.js\",\n                                                            lineNumber: 118,\n                                                            columnNumber: 29\n                                                        }, undefined)\n                                                    }, void 0, false, {\n                                                        fileName: \"D:\\\\coding\\\\nodejs\\\\my-project\\\\frontend\\\\pages\\\\index.js\",\n                                                        lineNumber: 116,\n                                                        columnNumber: 27\n                                                    }, undefined)\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\coding\\\\nodejs\\\\my-project\\\\frontend\\\\pages\\\\index.js\",\n                                                    lineNumber: 115,\n                                                    columnNumber: 25\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"D:\\\\coding\\\\nodejs\\\\my-project\\\\frontend\\\\pages\\\\index.js\",\n                                            lineNumber: 113,\n                                            columnNumber: 23\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Heading, {\n                                            as: \"h3\",\n                                            size: \"xs\",\n                                            noOfLines: 1,\n                                            children: new Date(note.createdAt).toISOString().split(\"T\")[0]\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\coding\\\\nodejs\\\\my-project\\\\frontend\\\\pages\\\\index.js\",\n                                            lineNumber: 123,\n                                            columnNumber: 23\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\coding\\\\nodejs\\\\my-project\\\\frontend\\\\pages\\\\index.js\",\n                                    lineNumber: 112,\n                                    columnNumber: 21\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.CardBody, {\n                                    mt: \"-4vh\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                                        noOfLines: [\n                                            1,\n                                            2,\n                                            3\n                                        ],\n                                        children: note.body\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\coding\\\\nodejs\\\\my-project\\\\frontend\\\\pages\\\\index.js\",\n                                        lineNumber: 129,\n                                        columnNumber: 23\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\coding\\\\nodejs\\\\my-project\\\\frontend\\\\pages\\\\index.js\",\n                                    lineNumber: 128,\n                                    columnNumber: 21\n                                }, undefined)\n                            ]\n                        }, note.id, true, {\n                            fileName: \"D:\\\\coding\\\\nodejs\\\\my-project\\\\frontend\\\\pages\\\\index.js\",\n                            lineNumber: 111,\n                            columnNumber: 19\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"D:\\\\coding\\\\nodejs\\\\my-project\\\\frontend\\\\pages\\\\index.js\",\n                    lineNumber: 96,\n                    columnNumber: 15\n                }, undefined),\n                \";\"\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\coding\\\\nodejs\\\\my-project\\\\frontend\\\\pages\\\\index.js\",\n            lineNumber: 56,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\coding\\\\nodejs\\\\my-project\\\\frontend\\\\pages\\\\index.js\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Home, \"vOaC7rmji7ux6HtcIeocV+tl1oY=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFBQ3ZDLHFEQUFPQTtvREFBQ21ELE1BQUs7b0RBQUtNLFVBQVM7b0RBQU81QixHQUFFO29EQUFNNkIsV0FBVzs4REFBSUYsS0FBS0csS0FBSzs7Ozs7OzhEQUNwRSw4REFBQzVELGtEQUFJQTtvREFBQ21DLFdBQVU7b0RBQU1LLE9BQU07b0RBQVNDLFNBQVE7b0RBQVdYLEdBQUU7OERBQ3hELDRFQUFDbEIsa0RBQUlBO3dEQUFDZ0MsTUFBTSxXQUFtQixPQUFSYSxLQUFLSSxFQUFFO2tFQUU1Qiw0RUFBQ3BELHdEQUFVQTs0REFBQ3VDLFNBQVE7NERBQVVjLGFBQVk7NERBQU9DLGNBQVc7NERBQVlDLG9CQUFNLDhEQUFDckQsc0RBQVFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzREFLN0YsOERBQUNWLHFEQUFPQTs0Q0FBQ2dFLElBQUc7NENBQUtiLE1BQUs7NENBQUtPLFdBQVc7c0RBQ25DLElBQUlPLEtBQUtULEtBQUtVLFNBQVMsRUFBRUMsV0FBVyxHQUFHQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUU7Ozs7Ozs7Ozs7Ozs4Q0FJekQsOERBQUMvRCxzREFBUUE7b0NBQUM2QyxJQUFHOzhDQUNYLDRFQUFDM0Msa0RBQUlBO3dDQUFDbUQsV0FBVzs0Q0FBQzs0Q0FBRzs0Q0FBRzt5Q0FBRTtrREFDdkJGLEtBQUthLElBQUk7Ozs7Ozs7Ozs7OzsyQkFuQkxiLEtBQUtJLEVBQUU7Ozs7Ozs7Ozs7Z0JBMEJ0Qjs7Ozs7Ozs7Ozs7O0FBSWQ7R0F2SU05QztLQUFBQTtBQXlJTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZsZXgsIEhlYWRpbmcsIFN0YWNrLCBCdXR0b24sIFNwYWNlciwgQ2FyZCwgQ2FyZEJvZHksIENhcmRIZWFkZXIsIFRleHQsIEljb25CdXR0b259IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xuaW1wb3J0IHsgRWRpdEljb24sIFZpZXdJY29uIH0gZnJvbSAnQGNoYWtyYS11aS9pY29ucydcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuICBjb25zdCBbbm90ZXMsIHNldE5vdGVzXSA9IHVzZVN0YXRlKFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuXG4gICAgY29uc3QgZmV0Y2hOb3RlcyA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvZ2V0QWxsJyk7XG4gICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgc2V0Tm90ZXMoZGF0YSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGZldGNoIG5vdGVzJyk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0FuIGVycm9yIG9jY3VycmVkIHdoaWxlIGZldGNoaW5nIG5vdGVzOicsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZmV0Y2hOb3RlcygpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgaGFuZGxlRGVsZXRlQWxsID0gYXN5bmMgKCkgPT4ge1xuXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAvYXBpL3JlbW92ZUFsbGAsIHtcbiAgICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgcm91dGVyLnJlbG9hZCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0dhZ2FsIG1lbmdoYXB1cyBkYXRhIGNhdGF0YW4nKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignVGVyamFkaSBrZXNhbGFoYW4gc2FhdCBtZW5naGFwdXMgZGF0YSBjYXRhdGFuOicsIGVycm9yKTtcbiAgICAgIH1cbiAgICBcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxGbGV4XG4gICAgICB3PVwiMTAwdndcIlxuICAgICAgaD1cIjEwMHZoXCJcbiAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxuICAgICAgYmFja2dyb3VuZD1cIiNEMzc2NzZcIlxuICAgICAgZGlyZWN0aW9uPVwicm93XCIgXG4gICAgICB3cmFwPVwid3JhcFwiICBcbiAgICA+XG5cbiAgICAgIDxGbGV4XG4gICAgICAgIGhlaWdodD1cIjgzdmhcIlxuICAgICAgICB3aWR0aD1cIjg1dndcIlxuICAgICAgICByb3VuZGVkPVwibWRcIlxuICAgICAgICBkaXJlY3Rpb249XCJjb2x1bW5cIlxuICAgICAgICBhbGlnbj1cImNlbnRlclwiXG4gICAgICAgIGp1c3RpZnk9XCJjZW50ZXJcIlxuICAgICAgICBwPXs2fVxuICAgICAgICBiYWNrZ3JvdW5kPVwiIzczNTM2YlwiIFxuICAgICAgPlxuXG4gICAgICAgIDxTdGFjayBkaXJlY3Rpb249J3Jvdycgdz1cIjgwdndcIiBzcGFjaW5nPXs0fSBhbGlnbj0nY2VudGVyJz5cbiAgICAgICAgICA8TGluayBocmVmPVwiL2FkZFwiPlxuICAgICAgICAgICAgPEJ1dHRvbiBiZz1cIiM2YzljODhcIiBfaG92ZXI9e3sgYmc6IFwiIzU3ODk3NFwiIH19IGNvbG9yPVwid2hpdGVcIiB3PVwiNDV2d1wiIHZhcmlhbnQ9J3NvbGlkJz5cbiAgICAgICAgICAgICAgQWRkIE5vdGVcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8QnV0dG9uIGJnPVwiIzZjOWM4OFwiIF9ob3Zlcj17eyBiZzogXCIjNTc4OTc0XCIgfX0gY29sb3I9XCJ3aGl0ZVwiIHc9XCI0NXZ3XCIgdmFyaWFudD0nc29saWQnIG9uQ2xpY2s9e2hhbmRsZURlbGV0ZUFsbH0+XG4gICAgICAgICAgICBEZWxldGUgQWxsXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvU3RhY2s+XG5cblxuICAgICAgICB7bm90ZXMubGVuZ3RoID09PSAwID8gKFxuXG4gICAgICAgICAgPEZsZXhcbiAgICAgICAgICBiYWNrZ3JvdW5kPVwiI2JhOWU5N1wiIFxuICAgICAgICAgIGg9XCI2N3ZoXCIgXG4gICAgICAgICAgdz1cIjgwdndcIiBcbiAgICAgICAgICBkaXJlY3Rpb249XCJyb3dcIiBcbiAgICAgICAgICByb3VuZGVkPVwibWRcIiBcbiAgICAgICAgICBtdD17Nn1cbiAgICAgICAgICBwPXs0fSBcbiAgICAgICAgICBqdXN0aWZ5PVwiY2VudGVyXCIgXG4gICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxIZWFkaW5nIHNpemU9XCJtZFwiIGNvbG9yPVwid2hpdGVcIj5UaWRhayBhZGEgY2F0YXRhbjwvSGVhZGluZz5cbiAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8RmxleCBcbiAgICAgICAgICAgICAgYmFja2dyb3VuZD1cIiNiYTllOTdcIiBcbiAgICAgICAgICAgICAgaD1cIjY3dmhcIiBcbiAgICAgICAgICAgICAgdz1cIjgwdndcIiBcbiAgICAgICAgICAgICAgZGlyZWN0aW9uPVwicm93XCIgXG4gICAgICAgICAgICAgIHJvdW5kZWQ9XCJtZFwiIFxuICAgICAgICAgICAgICBwPXs0fSBcbiAgICAgICAgICAgICAganVzdGlmeT1cImZsZXgtc3RhcnRcIiBcbiAgICAgICAgICAgICAgb3ZlcmZsb3c9XCJhdXRvXCIgXG4gICAgICAgICAgICAgIHdyYXA9XCJ3cmFwXCIgXG4gICAgICAgICAgICAgIGNvbHVtbkdhcD17OX0gXG4gICAgICAgICAgICAgIHJvd0dhcD17NH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHtub3Rlcy5tYXAobm90ZSA9PiAoXG4gICAgICAgICAgICAgICAgICA8Q2FyZCBrZXk9e25vdGUuaWR9IHc9XCIxN3Z3XCIgaD1cIjI4dmhcIiBiYWNrZ3JvdW5kPVwiI0VCRDhCN1wiPlxuICAgICAgICAgICAgICAgICAgICA8Q2FyZEhlYWRlciB3PVwiMTAwJVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxGbGV4IGRpcmVjdGlvbj1cInJvd1wiIGp1c3RpZnk9XCJzcGFjZS1iZXR3ZWVuXCIgYWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkaW5nIHNpemU9XCJsZ1wiIGZvbnRTaXplPVwiMjRweFwiIHc9XCI1NCVcIiBub09mTGluZXM9ezF9Pntub3RlLnRpdGxlfTwvSGVhZGluZz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4IGRpcmVjdGlvbj1cInJvd1wiIGFsaWduPVwiY2VudGVyXCIganVzdGlmeT1cImZsZXgtZW5kXCIgdz1cIjQ4JVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2RldGFpbC8ke25vdGUuaWR9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxJY29uQnV0dG9uIHZhcmlhbnQ9J291dGxpbmUnIGNvbG9yU2NoZW1lPSd0ZWFsJyBhcmlhLWxhYmVsPSdlZGl0IG5vdGUnIGljb249ezxFZGl0SWNvbiAvPn0gLz4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gdmFyaWFudD0nb3V0bGluZScgY29sb3JTY2hlbWU9J3RlYWwnIGFyaWEtbGFiZWw9J3ZpZXcgbm90ZScgaWNvbj17PFZpZXdJY29uIC8+fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICAgICAgICAgICAgPC9GbGV4PlxuXG4gICAgICAgICAgICAgICAgICAgICAgPEhlYWRpbmcgYXM9J2gzJyBzaXplPVwieHNcIiBub09mTGluZXM9ezF9PlxuICAgICAgICAgICAgICAgICAgICAgICAge25ldyBEYXRlKG5vdGUuY3JlYXRlZEF0KS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF19XG4gICAgICAgICAgICAgICAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICAgICAgICAgICAgICA8L0NhcmRIZWFkZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgPENhcmRCb2R5IG10PVwiLTR2aFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IG5vT2ZMaW5lcz17WzEsIDIsIDNdfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtub3RlLmJvZHl9XG4gICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICA8L0NhcmRCb2R5PlxuICAgICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgICAgICkpfVxuXG4gICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgICl9O1xuICAgICAgPC9GbGV4PlxuICAgIDwvRmxleD5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJuYW1lcyI6WyJGbGV4IiwiSGVhZGluZyIsIlN0YWNrIiwiQnV0dG9uIiwiU3BhY2VyIiwiQ2FyZCIsIkNhcmRCb2R5IiwiQ2FyZEhlYWRlciIsIlRleHQiLCJJY29uQnV0dG9uIiwiRWRpdEljb24iLCJWaWV3SWNvbiIsIkxpbmsiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkhvbWUiLCJub3RlcyIsInNldE5vdGVzIiwiZmV0Y2hOb3RlcyIsInJlc3BvbnNlIiwiZmV0Y2giLCJvayIsImRhdGEiLCJqc29uIiwiY29uc29sZSIsImVycm9yIiwiaGFuZGxlRGVsZXRlQWxsIiwibWV0aG9kIiwicm91dGVyIiwicmVsb2FkIiwidyIsImgiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJiYWNrZ3JvdW5kIiwiZGlyZWN0aW9uIiwid3JhcCIsImhlaWdodCIsIndpZHRoIiwicm91bmRlZCIsImFsaWduIiwianVzdGlmeSIsInAiLCJzcGFjaW5nIiwiaHJlZiIsImJnIiwiX2hvdmVyIiwiY29sb3IiLCJ2YXJpYW50Iiwib25DbGljayIsImxlbmd0aCIsIm10Iiwic2l6ZSIsIm92ZXJmbG93IiwiY29sdW1uR2FwIiwicm93R2FwIiwibWFwIiwibm90ZSIsImZvbnRTaXplIiwibm9PZkxpbmVzIiwidGl0bGUiLCJpZCIsImNvbG9yU2NoZW1lIiwiYXJpYS1sYWJlbCIsImljb24iLCJhcyIsIkRhdGUiLCJjcmVhdGVkQXQiLCJ0b0lTT1N0cmluZyIsInNwbGl0IiwiYm9keSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});