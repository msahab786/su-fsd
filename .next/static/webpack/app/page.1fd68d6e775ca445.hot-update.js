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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Container; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Dropdown */ \"(app-pages-browser)/./components/Dropdown.tsx\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/constants */ \"(app-pages-browser)/./constants/index.ts\");\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/services/api */ \"(app-pages-browser)/./services/api.ts\");\n/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Loading */ \"(app-pages-browser)/./components/Loading.tsx\");\n/* harmony import */ var _components_Error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/Error */ \"(app-pages-browser)/./components/Error.tsx\");\n/* harmony import */ var _components_Table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/Table */ \"(app-pages-browser)/./components/Table.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Container() {\n    _s();\n    const [response, setResponse] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        error: null,\n        loading: false,\n        data: []\n    });\n    const [selectedSortOption, setSelectedSortOption] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            setResponse({\n                error: null,\n                loading: true,\n                data: []\n            });\n            try {\n                const { data } = await (0,_services_api__WEBPACK_IMPORTED_MODULE_4__.fetchSortedData)();\n                console.log(data);\n                setResponse({\n                    error: null,\n                    loading: false,\n                    data\n                });\n            } catch (error) {\n                setResponse({\n                    error: error.message,\n                    loading: false,\n                    data: []\n                });\n            }\n        };\n        fetchData();\n    }, [\n        selectedSortOption\n    ]);\n    const onClick = async (term)=>{\n        if (term === selectedSortOption) {\n            return;\n        }\n        setSelectedSortOption(term);\n        setResponse((prev)=>({\n                ...prev,\n                loading: true\n            }));\n        try {\n            const { data } = await (0,_services_api__WEBPACK_IMPORTED_MODULE_4__.fetchSortedData)(term);\n            setResponse((prev)=>({\n                    ...prev,\n                    data\n                }));\n        } catch (error) {\n            console.log(error);\n            setResponse((prev)=>({\n                    ...prev,\n                    error: error.message\n                }));\n        } finally{\n            setResponse((prev)=>({\n                    ...prev,\n                    loading: false\n                }));\n        }\n    };\n    if (response.loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Loading__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n            fileName: \"/Users/uzairasif/Downloads/untitled folder/app/page.tsx\",\n            lineNumber: 62,\n            columnNumber: 12\n        }, this);\n    }\n    if (response.error) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Error__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n            error: response.error\n        }, void 0, false, {\n            fileName: \"/Users/uzairasif/Downloads/untitled folder/app/page.tsx\",\n            lineNumber: 66,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"container mx-auto p-6 font-mono\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-end mb-5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Dropdown__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    buttonLabel: \"Sort By\",\n                    items: _constants__WEBPACK_IMPORTED_MODULE_3__.DROPDOWN_OPTIONS,\n                    selectedValue: selectedSortOption,\n                    onClick: onClick\n                }, void 0, false, {\n                    fileName: \"/Users/uzairasif/Downloads/untitled folder/app/page.tsx\",\n                    lineNumber: 72,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/uzairasif/Downloads/untitled folder/app/page.tsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Table__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                data: response.data\n            }, void 0, false, {\n                fileName: \"/Users/uzairasif/Downloads/untitled folder/app/page.tsx\",\n                lineNumber: 79,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/uzairasif/Downloads/untitled folder/app/page.tsx\",\n        lineNumber: 70,\n        columnNumber: 5\n    }, this);\n}\n_s(Container, \"GsH+UxU5EPP+f7gww6NAlWgua/w=\");\n_c = Container;\nvar _c;\n$RefreshReg$(_c, \"Container\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDNEM7QUFFQztBQUNFO0FBRUU7QUFDTjtBQUNKO0FBQ0E7QUFFeEIsU0FBU1E7O0lBQ3RCLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHViwrQ0FBUUEsQ0FJckM7UUFDRFcsT0FBTztRQUNQQyxTQUFTO1FBQ1RDLE1BQU0sRUFBRTtJQUNWO0lBQ0EsTUFBTSxDQUFDQyxvQkFBb0JDLHNCQUFzQixHQUFHZiwrQ0FBUUEsQ0FDMUQ7SUFHRkMsZ0RBQVNBLENBQUM7UUFDUixNQUFNZSxZQUFZO1lBQ2hCTixZQUFZO2dCQUFFQyxPQUFPO2dCQUFNQyxTQUFTO2dCQUFNQyxNQUFNLEVBQUU7WUFBQztZQUNuRCxJQUFJO2dCQUNGLE1BQU0sRUFBRUEsSUFBSSxFQUFFLEdBQUksTUFBTVQsOERBQWVBO2dCQUN2Q2EsUUFBUUMsR0FBRyxDQUFDTDtnQkFDWkgsWUFBWTtvQkFBRUMsT0FBTztvQkFBTUMsU0FBUztvQkFBT0M7Z0JBQUs7WUFDbEQsRUFBRSxPQUFPRixPQUFZO2dCQUNuQkQsWUFBWTtvQkFBRUMsT0FBT0EsTUFBTVEsT0FBTztvQkFBRVAsU0FBUztvQkFBT0MsTUFBTSxFQUFFO2dCQUFDO1lBQy9EO1FBQ0Y7UUFFQUc7SUFDRixHQUFHO1FBQUNGO0tBQW1CO0lBRXZCLE1BQU1NLFVBQVUsT0FBT0M7UUFDckIsSUFBSUEsU0FBU1Asb0JBQW9CO1lBQy9CO1FBQ0Y7UUFDQUMsc0JBQXNCTTtRQUN0QlgsWUFBWSxDQUFDWSxPQUFVO2dCQUFFLEdBQUdBLElBQUk7Z0JBQUVWLFNBQVM7WUFBSztRQUVoRCxJQUFJO1lBQ0YsTUFBTSxFQUFFQyxJQUFJLEVBQUUsR0FBSSxNQUFNVCw4REFBZUEsQ0FBQ2lCO1lBR3hDWCxZQUFZLENBQUNZLE9BQVU7b0JBQUUsR0FBR0EsSUFBSTtvQkFBRVQ7Z0JBQUs7UUFDekMsRUFBRSxPQUFPRixPQUFZO1lBQ25CTSxRQUFRQyxHQUFHLENBQUNQO1lBQ1pELFlBQVksQ0FBQ1ksT0FBVTtvQkFBRSxHQUFHQSxJQUFJO29CQUFFWCxPQUFPQSxNQUFNUSxPQUFPO2dCQUFDO1FBQ3pELFNBQVU7WUFDUlQsWUFBWSxDQUFDWSxPQUFVO29CQUFFLEdBQUdBLElBQUk7b0JBQUVWLFNBQVM7Z0JBQU07UUFDbkQ7SUFDRjtJQUVBLElBQUlILFNBQVNHLE9BQU8sRUFBRTtRQUNwQixxQkFBTyw4REFBQ1AsMkRBQU9BOzs7OztJQUNqQjtJQUVBLElBQUlJLFNBQVNFLEtBQUssRUFBRTtRQUNsQixxQkFBTyw4REFBQ0wseURBQUtBO1lBQUNLLE9BQU9GLFNBQVNFLEtBQUs7Ozs7OztJQUNyQztJQUVBLHFCQUNFLDhEQUFDWTtRQUFRQyxXQUFVOzswQkFDakIsOERBQUNDO2dCQUFJRCxXQUFVOzBCQUNiLDRFQUFDdEIsNERBQVFBO29CQUNQd0IsYUFBWTtvQkFDWkMsT0FBT3hCLHdEQUFnQkE7b0JBQ3ZCeUIsZUFBZWQ7b0JBQ2ZNLFNBQVNBOzs7Ozs7Ozs7OzswQkFHYiw4REFBQ2IseURBQUtBO2dCQUFDTSxNQUFNSixTQUFTSSxJQUFJOzs7Ozs7Ozs7Ozs7QUFHaEM7R0F0RXdCTDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcGFnZS50c3g/NzYwMyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgRHJvcGRvd24gZnJvbSAnQC9jb21wb25lbnRzL0Ryb3Bkb3duJztcbmltcG9ydCB7IERST1BET1dOX09QVElPTlMgfSBmcm9tICdAL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBJRmlsZVBheWxvYWQsIElSZXNwb25zZSwgU29ydEJ5VHlwZSB9IGZyb20gJ0AvaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBmZXRjaFNvcnRlZERhdGEgfSBmcm9tICdAL3NlcnZpY2VzL2FwaSc7XG5pbXBvcnQgTG9hZGluZyBmcm9tICdAL2NvbXBvbmVudHMvTG9hZGluZyc7XG5pbXBvcnQgRXJyb3IgZnJvbSAnQC9jb21wb25lbnRzL0Vycm9yJztcbmltcG9ydCBUYWJsZSBmcm9tICdAL2NvbXBvbmVudHMvVGFibGUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250YWluZXIoKSB7XG4gIGNvbnN0IFtyZXNwb25zZSwgc2V0UmVzcG9uc2VdID0gdXNlU3RhdGU8e1xuICAgIGVycm9yOiBudWxsO1xuICAgIGxvYWRpbmc6IGJvb2xlYW47XG4gICAgZGF0YTogSUZpbGVQYXlsb2FkW107XG4gIH0+KHtcbiAgICBlcnJvcjogbnVsbCxcbiAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICBkYXRhOiBbXSxcbiAgfSk7XG4gIGNvbnN0IFtzZWxlY3RlZFNvcnRPcHRpb24sIHNldFNlbGVjdGVkU29ydE9wdGlvbl0gPSB1c2VTdGF0ZTxTb3J0QnlUeXBlIHwgJyc+KFxuICAgICcnXG4gICk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICBzZXRSZXNwb25zZSh7IGVycm9yOiBudWxsLCBsb2FkaW5nOiB0cnVlLCBkYXRhOiBbXSB9KTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gKGF3YWl0IGZldGNoU29ydGVkRGF0YSgpKSBhcyBJUmVzcG9uc2U8SUZpbGVQYXlsb2FkW10+O1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgc2V0UmVzcG9uc2UoeyBlcnJvcjogbnVsbCwgbG9hZGluZzogZmFsc2UsIGRhdGEgfSk7XG4gICAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIHNldFJlc3BvbnNlKHsgZXJyb3I6IGVycm9yLm1lc3NhZ2UsIGxvYWRpbmc6IGZhbHNlLCBkYXRhOiBbXSB9KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZmV0Y2hEYXRhKCk7XG4gIH0sIFtzZWxlY3RlZFNvcnRPcHRpb25dKTtcblxuICBjb25zdCBvbkNsaWNrID0gYXN5bmMgKHRlcm06IFNvcnRCeVR5cGUpID0+IHtcbiAgICBpZiAodGVybSA9PT0gc2VsZWN0ZWRTb3J0T3B0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHNldFNlbGVjdGVkU29ydE9wdGlvbih0ZXJtKTtcbiAgICBzZXRSZXNwb25zZSgocHJldikgPT4gKHsgLi4ucHJldiwgbG9hZGluZzogdHJ1ZSB9KSk7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBkYXRhIH0gPSAoYXdhaXQgZmV0Y2hTb3J0ZWREYXRhKHRlcm0pKSBhcyBJUmVzcG9uc2U8XG4gICAgICAgIElGaWxlUGF5bG9hZFtdXG4gICAgICA+O1xuICAgICAgc2V0UmVzcG9uc2UoKHByZXYpID0+ICh7IC4uLnByZXYsIGRhdGEgfSkpO1xuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIHNldFJlc3BvbnNlKChwcmV2KSA9PiAoeyAuLi5wcmV2LCBlcnJvcjogZXJyb3IubWVzc2FnZSB9KSk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldFJlc3BvbnNlKChwcmV2KSA9PiAoeyAuLi5wcmV2LCBsb2FkaW5nOiBmYWxzZSB9KSk7XG4gICAgfVxuICB9O1xuXG4gIGlmIChyZXNwb25zZS5sb2FkaW5nKSB7XG4gICAgcmV0dXJuIDxMb2FkaW5nIC8+O1xuICB9XG5cbiAgaWYgKHJlc3BvbnNlLmVycm9yKSB7XG4gICAgcmV0dXJuIDxFcnJvciBlcnJvcj17cmVzcG9uc2UuZXJyb3J9IC8+O1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9J2NvbnRhaW5lciBteC1hdXRvIHAtNiBmb250LW1vbm8nPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1lbmQgbWItNSc+XG4gICAgICAgIDxEcm9wZG93blxuICAgICAgICAgIGJ1dHRvbkxhYmVsPSdTb3J0IEJ5J1xuICAgICAgICAgIGl0ZW1zPXtEUk9QRE9XTl9PUFRJT05TfVxuICAgICAgICAgIHNlbGVjdGVkVmFsdWU9e3NlbGVjdGVkU29ydE9wdGlvbn1cbiAgICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8VGFibGUgZGF0YT17cmVzcG9uc2UuZGF0YX0gLz5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJEcm9wZG93biIsIkRST1BET1dOX09QVElPTlMiLCJmZXRjaFNvcnRlZERhdGEiLCJMb2FkaW5nIiwiRXJyb3IiLCJUYWJsZSIsIkNvbnRhaW5lciIsInJlc3BvbnNlIiwic2V0UmVzcG9uc2UiLCJlcnJvciIsImxvYWRpbmciLCJkYXRhIiwic2VsZWN0ZWRTb3J0T3B0aW9uIiwic2V0U2VsZWN0ZWRTb3J0T3B0aW9uIiwiZmV0Y2hEYXRhIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJvbkNsaWNrIiwidGVybSIsInByZXYiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiZGl2IiwiYnV0dG9uTGFiZWwiLCJpdGVtcyIsInNlbGVjdGVkVmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});