/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/add"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=D%3A%5Ccoding%5Cnodejs%5Cmy-project%5Cfrontend%5Cpages%5Cadd.js&page=%2Fadd!":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=D%3A%5Ccoding%5Cnodejs%5Cmy-project%5Cfrontend%5Cpages%5Cadd.js&page=%2Fadd! ***!
  \********************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n    (window.__NEXT_P = window.__NEXT_P || []).push([\n      \"/add\",\n      function () {\n        return __webpack_require__(/*! ./pages/add.js */ \"./pages/add.js\");\n      }\n    ]);\n    if(true) {\n      module.hot.dispose(function () {\n        window.__NEXT_P.push([\"/add\"])\n      });\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanM/YWJzb2x1dGVQYWdlUGF0aD1EJTNBJTVDY29kaW5nJTVDbm9kZWpzJTVDbXktcHJvamVjdCU1Q2Zyb250ZW5kJTVDcGFnZXMlNUNhZGQuanMmcGFnZT0lMkZhZGQhIiwibWFwcGluZ3MiOiI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1CQUFPLENBQUMsc0NBQWdCO0FBQ3ZDO0FBQ0E7QUFDQSxPQUFPLElBQVU7QUFDakIsTUFBTSxVQUFVO0FBQ2hCO0FBQ0EsT0FBTztBQUNQO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLz9hNThkIl0sInNvdXJjZXNDb250ZW50IjpbIlxuICAgICh3aW5kb3cuX19ORVhUX1AgPSB3aW5kb3cuX19ORVhUX1AgfHwgW10pLnB1c2goW1xuICAgICAgXCIvYWRkXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiByZXF1aXJlKFwiLi9wYWdlcy9hZGQuanNcIik7XG4gICAgICB9XG4gICAgXSk7XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2luZG93Ll9fTkVYVF9QLnB1c2goW1wiL2FkZFwiXSlcbiAgICAgIH0pO1xuICAgIH1cbiAgIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=D%3A%5Ccoding%5Cnodejs%5Cmy-project%5Cfrontend%5Cpages%5Cadd.js&page=%2Fadd!\n"));

/***/ }),

/***/ "./pages/add.js":
/*!**********************!*\
  !*** ./pages/add.js ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst AddNote = ()=>{\n    _s();\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [body, setBody] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        const noteData = {\n            title,\n            body\n        };\n        try {\n            const response = await fetch(\"/api/add\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify(noteData)\n            });\n            if (response.ok) {\n                router.push(\"/\");\n            } else {\n                console.error(\"Failed to add note\");\n                setStatus(\"Failed to add note\");\n            }\n        } catch (error) {\n            console.error(\"An error occurred while adding note:\", error);\n            setStatus(\"An error occurred while adding note\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n        w: \"100vw\",\n        h: \"100vh\",\n        alignItems: \"center\",\n        justifyContent: \"center\",\n        direction: \"column\",\n        p: 6,\n        background: \"#D37676\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n            height: \"80vh\",\n            width: \"55vw\",\n            rounded: \"md\",\n            align: \"center\",\n            justify: \"center\",\n            p: 6,\n            background: \"#73536b\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n                background: \"#ba9e97\",\n                h: \"72vh\",\n                w: \"51vw\",\n                justify: \"center\",\n                align: \"center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n                    direction: \"column\",\n                    p: 6,\n                    justify: \"center\",\n                    w: \"90%\",\n                    h: \"90%\",\n                    align: \"center\",\n                    background: \"#73536b\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Heading, {\n                            mb: 8,\n                            color: \"#f3f6f4\",\n                            children: \"Add Note\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\coding\\\\nodejs\\\\my-project\\\\frontend\\\\pages\\\\add.js\",\n                            lineNumber: 59,\n                            columnNumber: 15\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Stack, {\n                            spacing: 4,\n                            w: \"80%\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Input, {\n                                    placeholder: \"Title\",\n                                    value: title,\n                                    background: \"#e2d3cf\",\n                                    variant: \"filled\",\n                                    _focus: {\n                                        background: \"white\",\n                                        borderColor: \"#0ca9a9\",\n                                        borderWidth: \"1.5px\",\n                                        boxShadow: \"0 0 0 1px #0ca9a9\"\n                                    },\n                                    onChange: (e)=>setTitle(e.target.value)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\coding\\\\nodejs\\\\my-project\\\\frontend\\\\pages\\\\add.js\",\n                                    lineNumber: 61,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Input, {\n                                    placeholder: \"Body\",\n                                    value: body,\n                                    background: \"#e2d3cf\",\n                                    variant: \"filled\",\n                                    _focus: {\n                                        background: \"white\",\n                                        borderColor: \"#0ca9a9\",\n                                        borderWidth: \"1.5px\",\n                                        boxShadow: \"0 0 0 1px #0ca9a9\"\n                                    },\n                                    onChange: (e)=>setBody(e.target.value)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\coding\\\\nodejs\\\\my-project\\\\frontend\\\\pages\\\\add.js\",\n                                    lineNumber: 74,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                    onClick: handleSubmit,\n                                    colorScheme: \"teal\",\n                                    color: \"#f3f6f4\",\n                                    children: \"Add Note\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\coding\\\\nodejs\\\\my-project\\\\frontend\\\\pages\\\\add.js\",\n                                    lineNumber: 87,\n                                    columnNumber: 17\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\coding\\\\nodejs\\\\my-project\\\\frontend\\\\pages\\\\add.js\",\n                            lineNumber: 60,\n                            columnNumber: 15\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\coding\\\\nodejs\\\\my-project\\\\frontend\\\\pages\\\\add.js\",\n                    lineNumber: 58,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\coding\\\\nodejs\\\\my-project\\\\frontend\\\\pages\\\\add.js\",\n                lineNumber: 56,\n                columnNumber: 11\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"D:\\\\coding\\\\nodejs\\\\my-project\\\\frontend\\\\pages\\\\add.js\",\n            lineNumber: 46,\n            columnNumber: 8\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\coding\\\\nodejs\\\\my-project\\\\frontend\\\\pages\\\\add.js\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AddNote, \"l3kgrY4h4aPH0hRWg5KMCXuSilc=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = AddNote;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddNote);\nvar _c;\n$RefreshReg$(_c, \"AddNote\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hZGQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFpQztBQUNPO0FBQytCO0FBRXZFLE1BQU1PLFVBQVU7O0lBQ2QsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdULCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ1UsTUFBTUMsUUFBUSxHQUFHWCwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNWSxTQUFTWCxzREFBU0E7SUFFeEIsTUFBTVksZUFBZSxPQUFPQztRQUMxQkEsRUFBRUMsY0FBYztRQUVoQixNQUFNQyxXQUFXO1lBQUVSO1lBQU9FO1FBQUs7UUFFL0IsSUFBSTtZQUNGLE1BQU1PLFdBQVcsTUFBTUMsTUFBTSxZQUFZO2dCQUN2Q0MsUUFBUTtnQkFDUkMsU0FBUztvQkFDUCxnQkFBZ0I7Z0JBQ2xCO2dCQUNBVixNQUFNVyxLQUFLQyxTQUFTLENBQUNOO1lBQ3ZCO1lBRUEsSUFBSUMsU0FBU00sRUFBRSxFQUFFO2dCQUNmWCxPQUFPWSxJQUFJLENBQUM7WUFDZCxPQUFPO2dCQUNMQyxRQUFRQyxLQUFLLENBQUM7Z0JBQ2RDLFVBQVU7WUFDWjtRQUNGLEVBQUUsT0FBT0QsT0FBTztZQUNkRCxRQUFRQyxLQUFLLENBQUMsd0NBQXdDQTtZQUN0REMsVUFBVTtRQUNaO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ3pCLGtEQUFJQTtRQUNIMEIsR0FBRTtRQUNGQyxHQUFFO1FBQ0ZDLFlBQVc7UUFDWEMsZ0JBQWU7UUFDZkMsV0FBVTtRQUNWQyxHQUFHO1FBQ0hDLFlBQVc7a0JBRVYsNEVBQUNoQyxrREFBSUE7WUFDRmlDLFFBQU87WUFDUEMsT0FBTTtZQUNOQyxTQUFRO1lBQ1JDLE9BQU07WUFDTkMsU0FBUTtZQUNSTixHQUFHO1lBQ0hDLFlBQVc7c0JBR1gsNEVBQUNoQyxrREFBSUE7Z0JBQUNnQyxZQUFXO2dCQUFVTCxHQUFFO2dCQUFPRCxHQUFFO2dCQUFPVyxTQUFRO2dCQUFTRCxPQUFNOzBCQUVsRSw0RUFBQ3BDLGtEQUFJQTtvQkFBQzhCLFdBQVU7b0JBQVNDLEdBQUc7b0JBQUdNLFNBQVE7b0JBQVNYLEdBQUU7b0JBQU1DLEdBQUU7b0JBQU1TLE9BQU07b0JBQVNKLFlBQVc7O3NDQUN4Riw4REFBQy9CLHFEQUFPQTs0QkFBQ3FDLElBQUk7NEJBQUdDLE9BQU07c0NBQVU7Ozs7OztzQ0FDaEMsOERBQUNuQyxtREFBS0E7NEJBQUNvQyxTQUFTOzRCQUFHZCxHQUFFOzs4Q0FDbkIsOERBQUN4QixtREFBS0E7b0NBQ0p1QyxhQUFZO29DQUNaQyxPQUFPcEM7b0NBQ1AwQixZQUFXO29DQUNYVyxTQUFRO29DQUNSQyxRQUFTO3dDQUNQWixZQUFXO3dDQUNYYSxhQUFhO3dDQUNiQyxhQUFhO3dDQUNiQyxXQUFXO29DQUNiO29DQUNBQyxVQUFVLENBQUNwQyxJQUFNTCxTQUFTSyxFQUFFcUMsTUFBTSxDQUFDUCxLQUFLOzs7Ozs7OENBRTFDLDhEQUFDeEMsbURBQUtBO29DQUNKdUMsYUFBWTtvQ0FDWkMsT0FBT2xDO29DQUNQd0IsWUFBVztvQ0FDWFcsU0FBUTtvQ0FDUkMsUUFBUzt3Q0FDUFosWUFBVzt3Q0FDWGEsYUFBYTt3Q0FDYkMsYUFBYTt3Q0FDYkMsV0FBVztvQ0FDYjtvQ0FDQUMsVUFBVSxDQUFDcEMsSUFBTUgsUUFBUUcsRUFBRXFDLE1BQU0sQ0FBQ1AsS0FBSzs7Ozs7OzhDQUV6Qyw4REFBQ3ZDLG9EQUFNQTtvQ0FBQytDLFNBQVN2QztvQ0FBY3dDLGFBQVk7b0NBQU9aLE9BQU07OENBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVsRjtHQTVGTWxDOztRQUdXTixrREFBU0E7OztLQUhwQk07QUE4Rk4sK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRkLmpzP2M5MzQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgRmxleCwgSGVhZGluZywgSW5wdXQsIEJ1dHRvbiwgU3RhY2sgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcclxuXHJcbmNvbnN0IEFkZE5vdGUgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2JvZHksIHNldEJvZHldID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpOyBcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBjb25zdCBub3RlRGF0YSA9IHsgdGl0bGUsIGJvZHkgfTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL2FkZCcsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkobm90ZURhdGEpLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgIHJvdXRlci5wdXNoKCcvJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGFkZCBub3RlJyk7XHJcbiAgICAgICAgc2V0U3RhdHVzKCdGYWlsZWQgdG8gYWRkIG5vdGUnKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgYWRkaW5nIG5vdGU6JywgZXJyb3IpO1xyXG4gICAgICBzZXRTdGF0dXMoJ0FuIGVycm9yIG9jY3VycmVkIHdoaWxlIGFkZGluZyBub3RlJyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGbGV4XHJcbiAgICAgIHc9XCIxMDB2d1wiXHJcbiAgICAgIGg9XCIxMDB2aFwiXHJcbiAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxyXG4gICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXHJcbiAgICAgIGRpcmVjdGlvbj1cImNvbHVtblwiXHJcbiAgICAgIHA9ezZ9XHJcbiAgICAgIGJhY2tncm91bmQ9XCIjRDM3Njc2XCJcclxuICAgID5cclxuICAgICAgIDxGbGV4XHJcbiAgICAgICAgICBoZWlnaHQ9XCI4MHZoXCJcclxuICAgICAgICAgIHdpZHRoPVwiNTV2d1wiXHJcbiAgICAgICAgICByb3VuZGVkPVwibWRcIlxyXG4gICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxyXG4gICAgICAgICAganVzdGlmeT1cImNlbnRlclwiXHJcbiAgICAgICAgICBwPXs2fVxyXG4gICAgICAgICAgYmFja2dyb3VuZD1cIiM3MzUzNmJcIiBcclxuICAgICAgICA+XHJcblxyXG4gICAgICAgICAgPEZsZXggYmFja2dyb3VuZD1cIiNiYTllOTdcIiBoPVwiNzJ2aFwiIHc9XCI1MXZ3XCIganVzdGlmeT1cImNlbnRlclwiIGFsaWduPVwiY2VudGVyXCI+XHJcblxyXG4gICAgICAgICAgICA8RmxleCBkaXJlY3Rpb249XCJjb2x1bW5cIiBwPXs2fSBqdXN0aWZ5PVwiY2VudGVyXCIgdz1cIjkwJVwiIGg9XCI5MCVcIiBhbGlnbj1cImNlbnRlclwiIGJhY2tncm91bmQ9XCIjNzM1MzZiXCI+XHJcbiAgICAgICAgICAgICAgPEhlYWRpbmcgbWI9ezh9IGNvbG9yPVwiI2YzZjZmNFwiPkFkZCBOb3RlPC9IZWFkaW5nPlxyXG4gICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXs0fSB3PVwiODAlXCI+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUaXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aXRsZX1cclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZD0nI2UyZDNjZidcclxuICAgICAgICAgICAgICAgICAgdmFyaWFudD0nZmlsbGVkJ1xyXG4gICAgICAgICAgICAgICAgICBfZm9jdXM9IHt7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDond2hpdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnIzBjYTlhOScsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6ICcxLjVweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgYm94U2hhZG93OiAnMCAwIDAgMXB4ICMwY2E5YTknXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VGl0bGUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkJvZHlcIlxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17Ym9keX1cclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZD0nI2UyZDNjZidcclxuICAgICAgICAgICAgICAgICAgdmFyaWFudD0nZmlsbGVkJ1xyXG4gICAgICAgICAgICAgICAgICBfZm9jdXM9IHt7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDond2hpdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnIzBjYTlhOScsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6ICcxLjVweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgYm94U2hhZG93OiAnMCAwIDAgMXB4ICMwY2E5YTknXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Qm9keShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9IGNvbG9yU2NoZW1lPVwidGVhbFwiIGNvbG9yPVwiI2YzZjZmNFwiPlxyXG4gICAgICAgICAgICAgICAgICBBZGQgTm90ZVxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9TdGFjaz5cclxuXHJcbiAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICA8L0ZsZXg+XHJcbiAgICAgIDwvRmxleD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRkTm90ZTtcclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlUm91dGVyIiwiRmxleCIsIkhlYWRpbmciLCJJbnB1dCIsIkJ1dHRvbiIsIlN0YWNrIiwiQWRkTm90ZSIsInRpdGxlIiwic2V0VGl0bGUiLCJib2R5Iiwic2V0Qm9keSIsInJvdXRlciIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIm5vdGVEYXRhIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJKU09OIiwic3RyaW5naWZ5Iiwib2siLCJwdXNoIiwiY29uc29sZSIsImVycm9yIiwic2V0U3RhdHVzIiwidyIsImgiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJkaXJlY3Rpb24iLCJwIiwiYmFja2dyb3VuZCIsImhlaWdodCIsIndpZHRoIiwicm91bmRlZCIsImFsaWduIiwianVzdGlmeSIsIm1iIiwiY29sb3IiLCJzcGFjaW5nIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsInZhcmlhbnQiLCJfZm9jdXMiLCJib3JkZXJDb2xvciIsImJvcmRlcldpZHRoIiwiYm94U2hhZG93Iiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJvbkNsaWNrIiwiY29sb3JTY2hlbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/add.js\n"));

/***/ }),

/***/ "./node_modules/next/router.js":
/*!*************************************!*\
  !*** ./node_modules/next/router.js ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("module.exports = __webpack_require__(/*! ./dist/client/router */ \"./node_modules/next/dist/client/router.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9yb3V0ZXIuanMiLCJtYXBwaW5ncyI6IkFBQUEsNkdBQWdEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L3JvdXRlci5qcz8xYmI2Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9yb3V0ZXInKVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/router.js\n"));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["pages/_app","main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=D%3A%5Ccoding%5Cnodejs%5Cmy-project%5Cfrontend%5Cpages%5Cadd.js&page=%2Fadd!"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);