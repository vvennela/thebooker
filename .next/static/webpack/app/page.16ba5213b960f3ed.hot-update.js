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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/dropdown */ \"(app-pages-browser)/./app/lib/dropdown.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Page() {\n    _s();\n    const [selectedTeam, setSelectedTeam] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const handleClick = async ()=>{\n        const response = await fetch(\"http://localhost:5000/predict\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                team: selectedTeam === null || selectedTeam === void 0 ? void 0 : selectedTeam.value\n            })\n        });\n        if (!response.ok) {\n            console.error(\"HTTP error! status: \".concat(response.status));\n        } else {\n            console.log(\"Data sent successfully\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex flex-col justify-center items-center h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"mb-3 text-[3.5em] text-white\",\n                children: \"Welcome to theBooker! \"\n            }, void 0, false, {\n                fileName: \"/Users/vishnuv/Documents/thebooker/app/page.tsx\",\n                lineNumber: 30,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"mb-10 text-base text-white text-[1.5em]\",\n                children: \"Select Two Teams and see what our model returns!\"\n            }, void 0, false, {\n                fileName: \"/Users/vishnuv/Documents/thebooker/app/page.tsx\",\n                lineNumber: 31,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex space-x-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"max-w-40 w-full\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_dropdown__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            setSelectedTeam: setSelectedTeam\n                        }, void 0, false, {\n                            fileName: \"/Users/vishnuv/Documents/thebooker/app/page.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/vishnuv/Documents/thebooker/app/page.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"max-w-40 w-full\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_dropdown__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            setSelectedTeam: setSelectedTeam\n                        }, void 0, false, {\n                            fileName: \"/Users/vishnuv/Documents/thebooker/app/page.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/vishnuv/Documents/thebooker/app/page.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-white text-black px-4 py-2 rounded\",\n                        onClick: handleClick,\n                        children: \"Predict!\"\n                    }, void 0, false, {\n                        fileName: \"/Users/vishnuv/Documents/thebooker/app/page.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/vishnuv/Documents/thebooker/app/page.tsx\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vishnuv/Documents/thebooker/app/page.tsx\",\n        lineNumber: 29,\n        columnNumber: 9\n    }, this);\n}\n_s(Page, \"eqN+G1oLwScSKTXhlnHomHnK2Ds=\");\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQzBCO0FBQ0s7QUFDTztBQUl2QixTQUFTRzs7SUFDcEIsTUFBTSxDQUFDQyxjQUFjQyxnQkFBZ0IsR0FBR0osK0NBQVFBLENBQWtCO0lBRWxFLE1BQU1LLGNBQWM7UUFDaEIsTUFBTUMsV0FBVyxNQUFNQyxNQUFNLGlDQUFpQztZQUMxREMsUUFBUTtZQUNSQyxTQUFTO2dCQUNMLGdCQUFnQjtZQUNwQjtZQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7Z0JBQ2pCQyxJQUFJLEVBQUVWLHlCQUFBQSxtQ0FBQUEsYUFBY1csS0FBSztZQUM3QjtRQUNKO1FBRUEsSUFBSSxDQUFDUixTQUFTUyxFQUFFLEVBQUU7WUFDZEMsUUFBUUMsS0FBSyxDQUFDLHVCQUF1QyxPQUFoQlgsU0FBU1ksTUFBTTtRQUN4RCxPQUFPO1lBQ0hGLFFBQVFHLEdBQUcsQ0FBQztRQUNoQjtJQUNKO0lBQ0EscUJBQ0ksOERBQUNDO1FBQUtDLFdBQVU7OzBCQUNaLDhEQUFDQztnQkFBR0QsV0FBVTswQkFBK0I7Ozs7OzswQkFDN0MsOERBQUNFO2dCQUFHRixXQUFVOzBCQUEwQzs7Ozs7OzBCQUN4RCw4REFBQ0c7Z0JBQUlILFdBQVU7O2tDQUNYLDhEQUFDRzt3QkFBSUgsV0FBVTtrQ0FDWCw0RUFBQ3BCLHFEQUFRQTs0QkFBQ0csaUJBQWlCQTs7Ozs7Ozs7Ozs7a0NBRS9CLDhEQUFDb0I7d0JBQUlILFdBQVU7a0NBQ1gsNEVBQUNwQixxREFBUUE7NEJBQUNHLGlCQUFpQkE7Ozs7Ozs7Ozs7O2tDQUUvQiw4REFBQ3FCO3dCQUFPSixXQUFVO3dCQUF3Q0ssU0FBV3JCO2tDQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJbEc7R0FuQ3dCSDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcGFnZS50c3g/NzYwMyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBEcm9wZG93biBmcm9tIFwiLi9saWIvZHJvcGRvd25cIjtcblxudHlwZSBUZWFtVHlwZSA9IHsgdmFsdWU6IHN0cmluZywgbGFiZWw6IHN0cmluZyB9O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdlKCkge1xuICAgIGNvbnN0IFtzZWxlY3RlZFRlYW0sIHNldFNlbGVjdGVkVGVhbV0gPSB1c2VTdGF0ZTxUZWFtVHlwZSB8IG51bGw+KG51bGwpO1xuXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjUwMDAvcHJlZGljdFwiLCB7XG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgdGVhbTogc2VsZWN0ZWRUZWFtPy52YWx1ZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgSFRUUCBlcnJvciEgc3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRGF0YSBzZW50IHN1Y2Nlc3NmdWxseVwiKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIChcbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgaC1zY3JlZW5cIj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJtYi0zIHRleHQtWzMuNWVtXSB0ZXh0LXdoaXRlXCI+V2VsY29tZSB0byB0aGVCb29rZXIhIDwvaDE+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibWItMTAgdGV4dC1iYXNlIHRleHQtd2hpdGUgdGV4dC1bMS41ZW1dXCI+U2VsZWN0IFR3byBUZWFtcyBhbmQgc2VlIHdoYXQgb3VyIG1vZGVsIHJldHVybnMhPC9oMj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LTRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTQwIHctZnVsbFwiPlxuICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24gc2V0U2VsZWN0ZWRUZWFtPXtzZXRTZWxlY3RlZFRlYW19Lz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTQwIHctZnVsbFwiPlxuICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24gc2V0U2VsZWN0ZWRUZWFtPXtzZXRTZWxlY3RlZFRlYW19IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy13aGl0ZSB0ZXh0LWJsYWNrIHB4LTQgcHktMiByb3VuZGVkXCIgb25DbGljayA9IHtoYW5kbGVDbGlja30+UHJlZGljdCE8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L21haW4+XG4gICAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiRHJvcGRvd24iLCJQYWdlIiwic2VsZWN0ZWRUZWFtIiwic2V0U2VsZWN0ZWRUZWFtIiwiaGFuZGxlQ2xpY2siLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGVhbSIsInZhbHVlIiwib2siLCJjb25zb2xlIiwiZXJyb3IiLCJzdGF0dXMiLCJsb2ciLCJtYWluIiwiY2xhc3NOYW1lIiwiaDEiLCJoMiIsImRpdiIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});