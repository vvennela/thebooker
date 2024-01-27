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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/dropdown */ \"(app-pages-browser)/./app/lib/dropdown.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst teamNames = {\n    \"ATL\": \"Atlanta Hawks\",\n    \"BOS\": \"Boston Celtics\",\n    \"BKN\": \"Brooklyn Nets\",\n    \"CHA\": \"Charlotte Hornets\",\n    \"CHI\": \"Chicago Bulls\",\n    \"CLE\": \"Cleveland Cavaliers\",\n    \"DAL\": \"Dallas Mavericks\",\n    \"DEN\": \"Denver Nuggets\",\n    \"DET\": \"Detroit Pistons\",\n    \"GSW\": \"Golden State Warriors\",\n    \"HOU\": \"Houston Rockets\",\n    \"IND\": \"Indiana Pacers\",\n    \"LAC\": \"Los Angeles Clippers\",\n    \"LAL\": \"Los Angeles Lakers\",\n    \"MEM\": \"Memphis Grizzlies\",\n    \"MIA\": \"Miami Heat\",\n    \"MIL\": \"Milwaukee Bucks\",\n    \"MIN\": \"Minnesota Timberwolves\",\n    \"NOP\": \"New Orleans Pelicans\",\n    \"NYK\": \"New York Knicks\",\n    \"OKC\": \"Oklahoma City Thunder\",\n    \"ORL\": \"Orlando Magic\",\n    \"PHI\": \"Philadelphia 76ers\",\n    \"PHX\": \"Phoenix Suns\",\n    \"POR\": \"Portland Trail Blazers\",\n    \"SAC\": \"Sacramento Kings\",\n    \"SAS\": \"San Antonio Spurs\",\n    \"TOR\": \"Toronto Raptors\",\n    \"UTA\": \"Utah Jazz\",\n    \"WAS\": \"Washington Wizards\"\n};\nfunction Page() {\n    _s();\n    const [selectedTeam, setSelectedTeam] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [opponentTeam, setOpponentTeam] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [prediction, setPrediction] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const handleClick = async ()=>{\n        const response = await fetch(\"http://localhost:5000/predict\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                team: selectedTeam === null || selectedTeam === void 0 ? void 0 : selectedTeam.value,\n                opponent: opponentTeam === null || opponentTeam === void 0 ? void 0 : opponentTeam.value\n            })\n        });\n        if (!response.ok) {\n            console.error(\"HTTP error! status: \".concat(response.status));\n        } else {\n            const data = await response.json();\n            const winnerKey = data.winner;\n            const winner = teamNames[winnerKey] || data.winner;\n            setPrediction(winner);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex flex-col justify-center items-center h-screen mb-5\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"mb-3 text-[3.5em] text-white\",\n                children: \"Welcome to theBooker! \"\n            }, void 0, false, {\n                fileName: \"/Users/vishnuv/Documents/thebooker/app/page.tsx\",\n                lineNumber: 71,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"mb-10 text-base text-white text-[1.5em]\",\n                children: \"Select Two Teams and see what our model returns!\"\n            }, void 0, false, {\n                fileName: \"/Users/vishnuv/Documents/thebooker/app/page.tsx\",\n                lineNumber: 72,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex space-x-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"max-w-80 w-full\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_dropdown__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            setTeam: setSelectedTeam\n                        }, void 0, false, {\n                            fileName: \"/Users/vishnuv/Documents/thebooker/app/page.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 17\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/vishnuv/Documents/thebooker/app/page.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"max-w-80 w-full\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_dropdown__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            setTeam: setOpponentTeam\n                        }, void 0, false, {\n                            fileName: \"/Users/vishnuv/Documents/thebooker/app/page.tsx\",\n                            lineNumber: 78,\n                            columnNumber: 17\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/vishnuv/Documents/thebooker/app/page.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-white text-black px-4 py-2 rounded\",\n                        onClick: handleClick,\n                        children: \"Predict!\"\n                    }, void 0, false, {\n                        fileName: \"/Users/vishnuv/Documents/thebooker/app/page.tsx\",\n                        lineNumber: 80,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/vishnuv/Documents/thebooker/app/page.tsx\",\n                lineNumber: 73,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-[2.5em] text-white mt-5\",\n                children: prediction && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"The \",\n                        prediction,\n                        \" win!\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/vishnuv/Documents/thebooker/app/page.tsx\",\n                    lineNumber: 83,\n                    columnNumber: 32\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/vishnuv/Documents/thebooker/app/page.tsx\",\n                lineNumber: 82,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vishnuv/Documents/thebooker/app/page.tsx\",\n        lineNumber: 70,\n        columnNumber: 9\n    }, this);\n}\n_s(Page, \"S5eTBQ0TBGAdCJ9QX8vNjFucj9M=\");\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQzBCO0FBQ0s7QUFDTztBQUl0QyxNQUFNRyxZQUFZO0lBQ2QsT0FBTztJQUNQLE9BQU87SUFDUCxPQUFPO0lBQ1AsT0FBTztJQUNQLE9BQU87SUFDUCxPQUFPO0lBQ1AsT0FBTztJQUNQLE9BQU87SUFDUCxPQUFPO0lBQ1AsT0FBTztJQUNQLE9BQU87SUFDUCxPQUFPO0lBQ1AsT0FBTztJQUNQLE9BQU87SUFDUCxPQUFPO0lBQ1AsT0FBTztJQUNQLE9BQU87SUFDUCxPQUFPO0lBQ1AsT0FBTztJQUNQLE9BQU87SUFDUCxPQUFPO0lBQ1AsT0FBTztJQUNQLE9BQU87SUFDUCxPQUFPO0lBQ1AsT0FBTztJQUNQLE9BQU87SUFDUCxPQUFPO0lBQ1AsT0FBTztJQUNQLE9BQU87SUFDUCxPQUFPO0FBQ1g7QUFJZSxTQUFTQzs7SUFDcEIsTUFBTSxDQUFDQyxjQUFjQyxnQkFBZ0IsR0FBR0wsK0NBQVFBLENBQWtCO0lBQ2xFLE1BQU0sQ0FBQ00sY0FBY0MsZ0JBQWdCLEdBQUdQLCtDQUFRQSxDQUFrQjtJQUNsRSxNQUFNLENBQUNRLFlBQVlDLGNBQWMsR0FBR1QsK0NBQVFBLENBQWdCO0lBRTVELE1BQU1VLGNBQWM7UUFDaEIsTUFBTUMsV0FBVyxNQUFNQyxNQUFNLGlDQUFpQztZQUMxREMsUUFBUTtZQUNSQyxTQUFTO2dCQUNMLGdCQUFnQjtZQUNwQjtZQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7Z0JBQ2pCQyxJQUFJLEVBQUVkLHlCQUFBQSxtQ0FBQUEsYUFBY2UsS0FBSztnQkFDekJDLFFBQVEsRUFBRWQseUJBQUFBLG1DQUFBQSxhQUFjYSxLQUFLO1lBQ2pDO1FBQ0o7UUFFQSxJQUFJLENBQUNSLFNBQVNVLEVBQUUsRUFBRTtZQUNkQyxRQUFRQyxLQUFLLENBQUMsdUJBQXVDLE9BQWhCWixTQUFTYSxNQUFNO1FBQ3hELE9BQU87WUFDSCxNQUFNQyxPQUFPLE1BQU1kLFNBQVNlLElBQUk7WUFDaEMsTUFBTUMsWUFBWUYsS0FBS0csTUFBTTtZQUM3QixNQUFNQSxTQUFTMUIsU0FBUyxDQUFDeUIsVUFBVSxJQUFJRixLQUFLRyxNQUFNO1lBQ2xEbkIsY0FBY21CO1FBQ2xCO0lBQ0o7SUFDQSxxQkFDSSw4REFBQ0M7UUFBS0MsV0FBVTs7MEJBQ1osOERBQUNDO2dCQUFHRCxXQUFVOzBCQUErQjs7Ozs7OzBCQUM3Qyw4REFBQ0U7Z0JBQUdGLFdBQVU7MEJBQTBDOzs7Ozs7MEJBQ3hELDhEQUFDRztnQkFBSUgsV0FBVTs7a0NBQ2YsOERBQUNHO3dCQUFJSCxXQUFVO2tDQUNYLDRFQUFDN0IscURBQVFBOzRCQUFDaUMsU0FBUzdCOzs7Ozs7Ozs7OztrQ0FFdkIsOERBQUM0Qjt3QkFBSUgsV0FBVTtrQ0FDWCw0RUFBQzdCLHFEQUFRQTs0QkFBQ2lDLFNBQVMzQjs7Ozs7Ozs7Ozs7a0NBRW5CLDhEQUFDNEI7d0JBQU9MLFdBQVU7d0JBQXdDTSxTQUFXMUI7a0NBQWE7Ozs7Ozs7Ozs7OzswQkFFdEYsOERBQUN1QjtnQkFBSUgsV0FBWTswQkFDWnRCLDRCQUFjLDhEQUFDNkI7O3dCQUFFO3dCQUFLN0I7d0JBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtsRDtHQTdDd0JMO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wYWdlLnRzeD83NjAzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IERyb3Bkb3duIGZyb20gXCIuL2xpYi9kcm9wZG93blwiO1xuXG50eXBlIFRlYW1UeXBlID0geyB2YWx1ZTogc3RyaW5nLCBsYWJlbDogc3RyaW5nIH07XG5cbmNvbnN0IHRlYW1OYW1lcyA9IHtcbiAgICBcIkFUTFwiOiBcIkF0bGFudGEgSGF3a3NcIixcbiAgICBcIkJPU1wiOiBcIkJvc3RvbiBDZWx0aWNzXCIsXG4gICAgXCJCS05cIjogXCJCcm9va2x5biBOZXRzXCIsXG4gICAgXCJDSEFcIjogXCJDaGFybG90dGUgSG9ybmV0c1wiLFxuICAgIFwiQ0hJXCI6IFwiQ2hpY2FnbyBCdWxsc1wiLFxuICAgIFwiQ0xFXCI6IFwiQ2xldmVsYW5kIENhdmFsaWVyc1wiLFxuICAgIFwiREFMXCI6IFwiRGFsbGFzIE1hdmVyaWNrc1wiLFxuICAgIFwiREVOXCI6IFwiRGVudmVyIE51Z2dldHNcIixcbiAgICBcIkRFVFwiOiBcIkRldHJvaXQgUGlzdG9uc1wiLFxuICAgIFwiR1NXXCI6IFwiR29sZGVuIFN0YXRlIFdhcnJpb3JzXCIsXG4gICAgXCJIT1VcIjogXCJIb3VzdG9uIFJvY2tldHNcIixcbiAgICBcIklORFwiOiBcIkluZGlhbmEgUGFjZXJzXCIsXG4gICAgXCJMQUNcIjogXCJMb3MgQW5nZWxlcyBDbGlwcGVyc1wiLFxuICAgIFwiTEFMXCI6IFwiTG9zIEFuZ2VsZXMgTGFrZXJzXCIsXG4gICAgXCJNRU1cIjogXCJNZW1waGlzIEdyaXp6bGllc1wiLFxuICAgIFwiTUlBXCI6IFwiTWlhbWkgSGVhdFwiLFxuICAgIFwiTUlMXCI6IFwiTWlsd2F1a2VlIEJ1Y2tzXCIsXG4gICAgXCJNSU5cIjogXCJNaW5uZXNvdGEgVGltYmVyd29sdmVzXCIsXG4gICAgXCJOT1BcIjogXCJOZXcgT3JsZWFucyBQZWxpY2Fuc1wiLFxuICAgIFwiTllLXCI6IFwiTmV3IFlvcmsgS25pY2tzXCIsXG4gICAgXCJPS0NcIjogXCJPa2xhaG9tYSBDaXR5IFRodW5kZXJcIixcbiAgICBcIk9STFwiOiBcIk9ybGFuZG8gTWFnaWNcIixcbiAgICBcIlBISVwiOiBcIlBoaWxhZGVscGhpYSA3NmVyc1wiLFxuICAgIFwiUEhYXCI6IFwiUGhvZW5peCBTdW5zXCIsXG4gICAgXCJQT1JcIjogXCJQb3J0bGFuZCBUcmFpbCBCbGF6ZXJzXCIsXG4gICAgXCJTQUNcIjogXCJTYWNyYW1lbnRvIEtpbmdzXCIsXG4gICAgXCJTQVNcIjogXCJTYW4gQW50b25pbyBTcHVyc1wiLFxuICAgIFwiVE9SXCI6IFwiVG9yb250byBSYXB0b3JzXCIsXG4gICAgXCJVVEFcIjogXCJVdGFoIEphenpcIixcbiAgICBcIldBU1wiOiBcIldhc2hpbmd0b24gV2l6YXJkc1wiXG59O1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnZSgpIHtcbiAgICBjb25zdCBbc2VsZWN0ZWRUZWFtLCBzZXRTZWxlY3RlZFRlYW1dID0gdXNlU3RhdGU8VGVhbVR5cGUgfCBudWxsPihudWxsKTtcbiAgICBjb25zdCBbb3Bwb25lbnRUZWFtLCBzZXRPcHBvbmVudFRlYW1dID0gdXNlU3RhdGU8VGVhbVR5cGUgfCBudWxsPihudWxsKTtcbiAgICBjb25zdCBbcHJlZGljdGlvbiwgc2V0UHJlZGljdGlvbl0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcblxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo1MDAwL3ByZWRpY3RcIiwge1xuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIHRlYW06IHNlbGVjdGVkVGVhbT8udmFsdWUsXG4gICAgICAgICAgICAgICAgb3Bwb25lbnQ6IG9wcG9uZW50VGVhbT8udmFsdWVcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEhUVFAgZXJyb3IhIHN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgY29uc3Qgd2lubmVyS2V5ID0gZGF0YS53aW5uZXIgYXMga2V5b2YgdHlwZW9mIHRlYW1OYW1lcztcbiAgICAgICAgICAgIGNvbnN0IHdpbm5lciA9IHRlYW1OYW1lc1t3aW5uZXJLZXldIHx8IGRhdGEud2lubmVyO1xuICAgICAgICAgICAgc2V0UHJlZGljdGlvbih3aW5uZXIpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBoLXNjcmVlbiBtYi01XCI+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibWItMyB0ZXh0LVszLjVlbV0gdGV4dC13aGl0ZVwiPldlbGNvbWUgdG8gdGhlQm9va2VyISA8L2gxPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm1iLTEwIHRleHQtYmFzZSB0ZXh0LXdoaXRlIHRleHQtWzEuNWVtXVwiPlNlbGVjdCBUd28gVGVhbXMgYW5kIHNlZSB3aGF0IG91ciBtb2RlbCByZXR1cm5zITwvaDI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggc3BhY2UteC00XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTgwIHctZnVsbFwiPlxuICAgICAgICAgICAgICAgIDxEcm9wZG93biBzZXRUZWFtPXtzZXRTZWxlY3RlZFRlYW19Lz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy04MCB3LWZ1bGxcIj5cbiAgICAgICAgICAgICAgICA8RHJvcGRvd24gc2V0VGVhbT17c2V0T3Bwb25lbnRUZWFtfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy13aGl0ZSB0ZXh0LWJsYWNrIHB4LTQgcHktMiByb3VuZGVkXCIgb25DbGljayA9IHtoYW5kbGVDbGlja30+UHJlZGljdCE8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcInRleHQtWzIuNWVtXSB0ZXh0LXdoaXRlIG10LTVcIj5cbiAgICAgICAgICAgICAgICB7cHJlZGljdGlvbiAmJiA8cD5UaGUge3ByZWRpY3Rpb259IHdpbiE8L3A+fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgPC9tYWluPlxuICAgICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkRyb3Bkb3duIiwidGVhbU5hbWVzIiwiUGFnZSIsInNlbGVjdGVkVGVhbSIsInNldFNlbGVjdGVkVGVhbSIsIm9wcG9uZW50VGVhbSIsInNldE9wcG9uZW50VGVhbSIsInByZWRpY3Rpb24iLCJzZXRQcmVkaWN0aW9uIiwiaGFuZGxlQ2xpY2siLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGVhbSIsInZhbHVlIiwib3Bwb25lbnQiLCJvayIsImNvbnNvbGUiLCJlcnJvciIsInN0YXR1cyIsImRhdGEiLCJqc29uIiwid2lubmVyS2V5Iiwid2lubmVyIiwibWFpbiIsImNsYXNzTmFtZSIsImgxIiwiaDIiLCJkaXYiLCJzZXRUZWFtIiwiYnV0dG9uIiwib25DbGljayIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});