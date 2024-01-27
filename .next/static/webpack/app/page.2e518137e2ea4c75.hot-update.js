"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/page.tsx":
/*!**********************!*\
  !*** ./app/page.tsx ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/dropdown */ \"(app-pages-browser)/./app/lib/dropdown.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Page() {\n    _s();\n    const [selectedTeam, setSelectedTeam] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [opponentTeam, setOpponentTeam] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [prediction, setPrediction] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const handleClick = async ()=>{\n        const response = await fetch(\"http://localhost:5000/predict\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                team: selectedTeam === null || selectedTeam === void 0 ? void 0 : selectedTeam.value,\n                opponent: opponentTeam === null || opponentTeam === void 0 ? void 0 : opponentTeam.value\n            })\n        });\n        if (!response.ok) {\n            console.error(\"HTTP error! status: \".concat(response.status));\n        } else {\n            const data = await response.json();\n            setPrediction(data.winner);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex flex-col justify-center items-center h-screen mb-5\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"mb-3 text-[3.5em] text-white\",\n                children: \"Welcome to theBooker! \"\n            }, void 0, false, {\n                fileName: \"/Users/vishnuv/Documents/thebooker/app/page.tsx\",\n                lineNumber: 35,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"mb-10 text-base text-white text-[1.5em]\",\n                children: \"Select Two Teams and see what our model returns!\"\n            }, void 0, false, {\n                fileName: \"/Users/vishnuv/Documents/thebooker/app/page.tsx\",\n                lineNumber: 36,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex space-x-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"max-w-80 w-full\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_dropdown__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            setTeam: setSelectedTeam\n                        }, void 0, false, {\n                            fileName: \"/Users/vishnuv/Documents/thebooker/app/page.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 17\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/vishnuv/Documents/thebooker/app/page.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"max-w-80 w-full\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_dropdown__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            setTeam: setOpponentTeam\n                        }, void 0, false, {\n                            fileName: \"/Users/vishnuv/Documents/thebooker/app/page.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 17\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/vishnuv/Documents/thebooker/app/page.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-white text-black px-4 py-2 rounded\",\n                        onClick: handleClick,\n                        children: \"Predict!\"\n                    }, void 0, false, {\n                        fileName: \"/Users/vishnuv/Documents/thebooker/app/page.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/vishnuv/Documents/thebooker/app/page.tsx\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-white mt-5\",\n                children: prediction && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        prediction,\n                        \", wins!\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/vishnuv/Documents/thebooker/app/page.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 32\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/vishnuv/Documents/thebooker/app/page.tsx\",\n                lineNumber: 46,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vishnuv/Documents/thebooker/app/page.tsx\",\n        lineNumber: 34,\n        columnNumber: 9\n    }, this);\n}\n_s(Page, \"S5eTBQ0TBGAdCJ9QX8vNjFucj9M=\");\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQzBCO0FBQ0s7QUFDTztBQUt2QixTQUFTRzs7SUFDcEIsTUFBTSxDQUFDQyxjQUFjQyxnQkFBZ0IsR0FBR0osK0NBQVFBLENBQWtCO0lBQ2xFLE1BQU0sQ0FBQ0ssY0FBY0MsZ0JBQWdCLEdBQUdOLCtDQUFRQSxDQUFrQjtJQUNsRSxNQUFNLENBQUNPLFlBQVlDLGNBQWMsR0FBR1IsK0NBQVFBLENBQWdCO0lBRTVELE1BQU1TLGNBQWM7UUFDaEIsTUFBTUMsV0FBVyxNQUFNQyxNQUFNLGlDQUFpQztZQUMxREMsUUFBUTtZQUNSQyxTQUFTO2dCQUNMLGdCQUFnQjtZQUNwQjtZQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7Z0JBQ2pCQyxJQUFJLEVBQUVkLHlCQUFBQSxtQ0FBQUEsYUFBY2UsS0FBSztnQkFDekJDLFFBQVEsRUFBRWQseUJBQUFBLG1DQUFBQSxhQUFjYSxLQUFLO1lBQ2pDO1FBQ0o7UUFFQSxJQUFJLENBQUNSLFNBQVNVLEVBQUUsRUFBRTtZQUNkQyxRQUFRQyxLQUFLLENBQUMsdUJBQXVDLE9BQWhCWixTQUFTYSxNQUFNO1FBQ3hELE9BQU87WUFDSCxNQUFNQyxPQUFPLE1BQU1kLFNBQVNlLElBQUk7WUFDaENqQixjQUFjZ0IsS0FBS0UsTUFBTTtRQUM3QjtJQUNKO0lBQ0EscUJBQ0ksOERBQUNDO1FBQUtDLFdBQVU7OzBCQUNaLDhEQUFDQztnQkFBR0QsV0FBVTswQkFBK0I7Ozs7OzswQkFDN0MsOERBQUNFO2dCQUFHRixXQUFVOzBCQUEwQzs7Ozs7OzBCQUN4RCw4REFBQ0c7Z0JBQUlILFdBQVU7O2tDQUNmLDhEQUFDRzt3QkFBSUgsV0FBVTtrQ0FDWCw0RUFBQzNCLHFEQUFRQTs0QkFBQytCLFNBQVM1Qjs7Ozs7Ozs7Ozs7a0NBRXZCLDhEQUFDMkI7d0JBQUlILFdBQVU7a0NBQ1gsNEVBQUMzQixxREFBUUE7NEJBQUMrQixTQUFTMUI7Ozs7Ozs7Ozs7O2tDQUVuQiw4REFBQzJCO3dCQUFPTCxXQUFVO3dCQUF3Q00sU0FBV3pCO2tDQUFhOzs7Ozs7Ozs7Ozs7MEJBRXRGLDhEQUFDc0I7Z0JBQUlILFdBQVk7MEJBQ1pyQiw0QkFBYyw4REFBQzRCOzt3QkFBRzVCO3dCQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLOUM7R0EzQ3dCTDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcGFnZS50c3g/NzYwMyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBEcm9wZG93biBmcm9tIFwiLi9saWIvZHJvcGRvd25cIjtcblxudHlwZSBUZWFtVHlwZSA9IHsgdmFsdWU6IHN0cmluZywgbGFiZWw6IHN0cmluZyB9O1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2UoKSB7XG4gICAgY29uc3QgW3NlbGVjdGVkVGVhbSwgc2V0U2VsZWN0ZWRUZWFtXSA9IHVzZVN0YXRlPFRlYW1UeXBlIHwgbnVsbD4obnVsbCk7XG4gICAgY29uc3QgW29wcG9uZW50VGVhbSwgc2V0T3Bwb25lbnRUZWFtXSA9IHVzZVN0YXRlPFRlYW1UeXBlIHwgbnVsbD4obnVsbCk7XG4gICAgY29uc3QgW3ByZWRpY3Rpb24sIHNldFByZWRpY3Rpb25dID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG5cbiAgICBjb25zdCBoYW5kbGVDbGljayA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9wcmVkaWN0XCIsIHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICB0ZWFtOiBzZWxlY3RlZFRlYW0/LnZhbHVlLFxuICAgICAgICAgICAgICAgIG9wcG9uZW50OiBvcHBvbmVudFRlYW0/LnZhbHVlXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBIVFRQIGVycm9yISBzdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIHNldFByZWRpY3Rpb24oZGF0YS53aW5uZXIpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBoLXNjcmVlbiBtYi01XCI+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibWItMyB0ZXh0LVszLjVlbV0gdGV4dC13aGl0ZVwiPldlbGNvbWUgdG8gdGhlQm9va2VyISA8L2gxPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm1iLTEwIHRleHQtYmFzZSB0ZXh0LXdoaXRlIHRleHQtWzEuNWVtXVwiPlNlbGVjdCBUd28gVGVhbXMgYW5kIHNlZSB3aGF0IG91ciBtb2RlbCByZXR1cm5zITwvaDI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggc3BhY2UteC00XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTgwIHctZnVsbFwiPlxuICAgICAgICAgICAgICAgIDxEcm9wZG93biBzZXRUZWFtPXtzZXRTZWxlY3RlZFRlYW19Lz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy04MCB3LWZ1bGxcIj5cbiAgICAgICAgICAgICAgICA8RHJvcGRvd24gc2V0VGVhbT17c2V0T3Bwb25lbnRUZWFtfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy13aGl0ZSB0ZXh0LWJsYWNrIHB4LTQgcHktMiByb3VuZGVkXCIgb25DbGljayA9IHtoYW5kbGVDbGlja30+UHJlZGljdCE8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcInRleHQtd2hpdGUgbXQtNVwiPlxuICAgICAgICAgICAgICAgIHtwcmVkaWN0aW9uICYmIDxwPntwcmVkaWN0aW9ufSwgd2lucyE8L3A+fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgPC9tYWluPlxuICAgICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkRyb3Bkb3duIiwiUGFnZSIsInNlbGVjdGVkVGVhbSIsInNldFNlbGVjdGVkVGVhbSIsIm9wcG9uZW50VGVhbSIsInNldE9wcG9uZW50VGVhbSIsInByZWRpY3Rpb24iLCJzZXRQcmVkaWN0aW9uIiwiaGFuZGxlQ2xpY2siLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGVhbSIsInZhbHVlIiwib3Bwb25lbnQiLCJvayIsImNvbnNvbGUiLCJlcnJvciIsInN0YXR1cyIsImRhdGEiLCJqc29uIiwid2lubmVyIiwibWFpbiIsImNsYXNzTmFtZSIsImgxIiwiaDIiLCJkaXYiLCJzZXRUZWFtIiwiYnV0dG9uIiwib25DbGljayIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});